import os
from mcp.server.fastmcp import FastMCP
from kubernetes import client, config
from typing import Dict, List, Any
import json

PORT = int(os.getenv("PORT", "8080"))
HOST = os.getenv("HOST", "0.0.0.0")

try:
    config.load_incluster_config()
    print("Loaded in-cluster Kubernetes configuration")
except Exception as e:
    print(f"Could not load in-cluster config: {e}")
    try:
        config.load_kube_config()
        print("Loaded Kubernetes configuration from kubeconfig")
    except Exception as e2:
        print(f"Warning: Could not load kube config: {e2}")

mcp = FastMCP(
    name="Kubernetes Cluster MCP Server",
    instructions="MCP server for querying and managing Kubernetes cluster resources.",
    host=HOST,
    port=PORT,
)

@mcp.tool()
def get_cluster_info() -> Dict[str, Any]:
    try:
        v1 = client.VersionApi()
        version_info = v1.get_code()
        
        core_v1 = client.CoreV1Api()
        nodes = core_v1.list_node()
        
        return {
            "kubernetes_version": version_info.git_version,
            "platform": version_info.platform,
            "node_count": len(nodes.items),
            "server_info": {
                "major": version_info.major,
                "minor": version_info.minor,
                "git_commit": version_info.git_commit,
            }
        }
    except Exception as e:
        return {"error": str(e)}

@mcp.tool()
def list_namespaces() -> List[Dict[str, Any]]:
    try:
        core_v1 = client.CoreV1Api()
        namespaces = core_v1.list_namespace()
        
        return [
            {
                "name": ns.metadata.name,
                "status": ns.status.phase,
                "created": ns.metadata.creation_timestamp.isoformat() if ns.metadata.creation_timestamp else None,
                "labels": ns.metadata.labels or {}
            }
            for ns in namespaces.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def list_pods(namespace: str = "default") -> List[Dict[str, Any]]:
    try:
        core_v1 = client.CoreV1Api()
        pods = core_v1.list_namespaced_pod(namespace=namespace)
        
        return [
            {
                "name": pod.metadata.name,
                "namespace": pod.metadata.namespace,
                "status": pod.status.phase,
                "node": pod.spec.node_name,
                "ip": pod.status.pod_ip,
                "created": pod.metadata.creation_timestamp.isoformat() if pod.metadata.creation_timestamp else None,
                "containers": [
                    {
                        "name": container.name,
                        "image": container.image,
                        "ready": next((cs.ready for cs in pod.status.container_statuses if cs.name == container.name), False) if pod.status.container_statuses else False
                    }
                    for container in pod.spec.containers
                ]
            }
            for pod in pods.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def list_services(namespace: str = "default") -> List[Dict[str, Any]]:
    try:
        core_v1 = client.CoreV1Api()
        services = core_v1.list_namespaced_service(namespace=namespace)
        
        return [
            {
                "name": svc.metadata.name,
                "namespace": svc.metadata.namespace,
                "type": svc.spec.type,
                "cluster_ip": svc.spec.cluster_ip,
                "external_ips": svc.spec.external_i_ps or [],
                "ports": [
                    {
                        "name": port.name,
                        "port": port.port,
                        "target_port": str(port.target_port),
                        "protocol": port.protocol
                    }
                    for port in (svc.spec.ports or [])
                ],
                "selector": svc.spec.selector or {}
            }
            for svc in services.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def list_deployments(namespace: str = "default") -> List[Dict[str, Any]]:
    try:
        apps_v1 = client.AppsV1Api()
        deployments = apps_v1.list_namespaced_deployment(namespace=namespace)
        
        return [
            {
                "name": deploy.metadata.name,
                "namespace": deploy.metadata.namespace,
                "replicas": deploy.spec.replicas,
                "ready_replicas": deploy.status.ready_replicas or 0,
                "available_replicas": deploy.status.available_replicas or 0,
                "created": deploy.metadata.creation_timestamp.isoformat() if deploy.metadata.creation_timestamp else None,
                "labels": deploy.metadata.labels or {},
                "selector": deploy.spec.selector.match_labels or {}
            }
            for deploy in deployments.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def list_nodes() -> List[Dict[str, Any]]:
    try:
        core_v1 = client.CoreV1Api()
        nodes = core_v1.list_node()
        
        return [
            {
                "name": node.metadata.name,
                "status": next((condition.type for condition in node.status.conditions if condition.status == "True" and condition.type == "Ready"), "NotReady"),
                "roles": [label.split("/")[1] for label in node.metadata.labels.keys() if "node-role.kubernetes.io/" in label],
                "version": node.status.node_info.kubelet_version,
                "os": f"{node.status.node_info.operating_system}/{node.status.node_info.architecture}",
                "capacity": {
                    "cpu": node.status.capacity.get("cpu"),
                    "memory": node.status.capacity.get("memory"),
                    "pods": node.status.capacity.get("pods")
                },
                "allocatable": {
                    "cpu": node.status.allocatable.get("cpu"),
                    "memory": node.status.allocatable.get("memory"),
                    "pods": node.status.allocatable.get("pods")
                }
            }
            for node in nodes.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def get_pod_logs(pod_name: str, namespace: str = "default", tail_lines: int = 100) -> str:
    try:
        core_v1 = client.CoreV1Api()
        logs = core_v1.read_namespaced_pod_log(
            name=pod_name,
            namespace=namespace,
            tail_lines=tail_lines
        )
        return logs
    except Exception as e:
        return f"Error: {str(e)}"

@mcp.tool()
def list_ingresses(namespace: str = "default") -> List[Dict[str, Any]]:
    try:
        networking_v1 = client.NetworkingV1Api()
        ingresses = networking_v1.list_namespaced_ingress(namespace=namespace)
        
        return [
            {
                "name": ing.metadata.name,
                "namespace": ing.metadata.namespace,
                "hosts": [rule.host for rule in (ing.spec.rules or []) if rule.host],
                "paths": [
                    {
                        "host": rule.host,
                        "path": path.path,
                        "service": path.backend.service.name if path.backend.service else None,
                        "port": path.backend.service.port.number if path.backend.service and path.backend.service.port else None
                    }
                    for rule in (ing.spec.rules or [])
                    for path in (rule.http.paths if rule.http else [])
                ],
                "created": ing.metadata.creation_timestamp.isoformat() if ing.metadata.creation_timestamp else None
            }
            for ing in ingresses.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def restart_deployment(deployment_name: str, namespace: str = "default") -> Dict[str, Any]:
    """Restart a deployment by updating its restart timestamp annotation."""
    try:
        from datetime import datetime
        apps_v1 = client.AppsV1Api()
        
        deployment = apps_v1.read_namespaced_deployment(deployment_name, namespace)
        
        if deployment.spec.template.metadata.annotations is None:
            deployment.spec.template.metadata.annotations = {}
        
        deployment.spec.template.metadata.annotations['kubectl.kubernetes.io/restartedAt'] = datetime.utcnow().isoformat()
        
        apps_v1.patch_namespaced_deployment(deployment_name, namespace, deployment)
        
        return {
            "status": "success",
            "deployment": deployment_name,
            "namespace": namespace,
            "message": f"Deployment {deployment_name} restarted successfully"
        }
    except Exception as e:
        return {"status": "error", "error": str(e)}

@mcp.tool()
def delete_pod(pod_name: str, namespace: str = "default") -> Dict[str, Any]:
    """Delete a specific pod (useful for forcing recreation)."""
    try:
        core_v1 = client.CoreV1Api()
        core_v1.delete_namespaced_pod(name=pod_name, namespace=namespace)
        
        return {
            "status": "success",
            "pod": pod_name,
            "namespace": namespace,
            "message": f"Pod {pod_name} deleted successfully"
        }
    except Exception as e:
        return {"status": "error", "error": str(e)}

@mcp.tool()
def cleanup_failed_pods(namespace: str = "default") -> Dict[str, Any]:
    """Delete all pods in Failed, Evicted, or Error status."""
    try:
        core_v1 = client.CoreV1Api()
        pods = core_v1.list_namespaced_pod(namespace=namespace)
        
        deleted_pods = []
        failed_statuses = ["Failed", "Error", "Evicted", "Unknown"]
        
        for pod in pods.items:
            if pod.status.phase in failed_statuses or (
                pod.status.reason and pod.status.reason == "Evicted"
            ):
                try:
                    core_v1.delete_namespaced_pod(
                        name=pod.metadata.name,
                        namespace=namespace
                    )
                    deleted_pods.append({
                        "name": pod.metadata.name,
                        "status": pod.status.phase,
                        "reason": pod.status.reason
                    })
                except Exception as e:
                    deleted_pods.append({
                        "name": pod.metadata.name,
                        "error": str(e)
                    })
        
        return {
            "status": "success",
            "namespace": namespace,
            "deleted_count": len(deleted_pods),
            "deleted_pods": deleted_pods
        }
    except Exception as e:
        return {"status": "error", "error": str(e)}

@mcp.tool()
def cleanup_completed_pods(namespace: str = "default", older_than_hours: int = 24) -> Dict[str, Any]:
    """Delete pods in Succeeded status older than specified hours."""
    try:
        from datetime import datetime, timezone, timedelta
        core_v1 = client.CoreV1Api()
        pods = core_v1.list_namespaced_pod(namespace=namespace)
        
        deleted_pods = []
        cutoff_time = datetime.now(timezone.utc) - timedelta(hours=older_than_hours)
        
        for pod in pods.items:
            if pod.status.phase == "Succeeded":
                pod_time = pod.metadata.creation_timestamp
                if pod_time and pod_time < cutoff_time:
                    try:
                        core_v1.delete_namespaced_pod(
                            name=pod.metadata.name,
                            namespace=namespace
                        )
                        deleted_pods.append({
                            "name": pod.metadata.name,
                            "created": pod_time.isoformat()
                        })
                    except Exception as e:
                        deleted_pods.append({
                            "name": pod.metadata.name,
                            "error": str(e)
                        })
        
        return {
            "status": "success",
            "namespace": namespace,
            "deleted_count": len(deleted_pods),
            "deleted_pods": deleted_pods
        }
    except Exception as e:
        return {"status": "error", "error": str(e)}

@mcp.tool()
def scale_deployment(deployment_name: str, replicas: int, namespace: str = "default") -> Dict[str, Any]:
    """Scale a deployment to specified number of replicas."""
    try:
        apps_v1 = client.AppsV1Api()
        
        body = {"spec": {"replicas": replicas}}
        apps_v1.patch_namespaced_deployment_scale(
            name=deployment_name,
            namespace=namespace,
            body=body
        )
        
        return {
            "status": "success",
            "deployment": deployment_name,
            "namespace": namespace,
            "replicas": replicas,
            "message": f"Deployment {deployment_name} scaled to {replicas} replicas"
        }
    except Exception as e:
        return {"status": "error", "error": str(e)}

@mcp.tool()
def get_deployment_status(deployment_name: str, namespace: str = "default") -> Dict[str, Any]:
    """Get detailed status of a deployment including rollout status."""
    try:
        apps_v1 = client.AppsV1Api()
        deployment = apps_v1.read_namespaced_deployment(deployment_name, namespace)
        
        status = deployment.status
        conditions = []
        if status.conditions:
            conditions = [
                {
                    "type": cond.type,
                    "status": cond.status,
                    "reason": cond.reason,
                    "message": cond.message,
                    "last_update": cond.last_update_time.isoformat() if cond.last_update_time else None
                }
                for cond in status.conditions
            ]
        
        return {
            "name": deployment_name,
            "namespace": namespace,
            "replicas": {
                "desired": deployment.spec.replicas,
                "current": status.replicas or 0,
                "ready": status.ready_replicas or 0,
                "available": status.available_replicas or 0,
                "unavailable": status.unavailable_replicas or 0,
                "updated": status.updated_replicas or 0
            },
            "conditions": conditions,
            "strategy": deployment.spec.strategy.type if deployment.spec.strategy else None,
            "observed_generation": status.observed_generation
        }
    except Exception as e:
        return {"error": str(e)}

@mcp.tool()
def get_resource_usage(namespace: str = "default") -> Dict[str, Any]:
    """Get resource usage metrics for pods in a namespace."""
    try:
        core_v1 = client.CoreV1Api()
        pods = core_v1.list_namespaced_pod(namespace=namespace)
        
        pod_resources = []
        for pod in pods.items:
            containers_info = []
            for container in pod.spec.containers:
                requests = container.resources.requests or {}
                limits = container.resources.limits or {}
                containers_info.append({
                    "name": container.name,
                    "requests": {
                        "cpu": requests.get("cpu"),
                        "memory": requests.get("memory")
                    },
                    "limits": {
                        "cpu": limits.get("cpu"),
                        "memory": limits.get("memory")
                    }
                })
            
            pod_resources.append({
                "pod": pod.metadata.name,
                "status": pod.status.phase,
                "containers": containers_info
            })
        
        return {
            "namespace": namespace,
            "pod_count": len(pod_resources),
            "pods": pod_resources
        }
    except Exception as e:
        return {"error": str(e)}

@mcp.tool()
def list_events(namespace: str = "default", limit: int = 50) -> List[Dict[str, Any]]:
    """List recent events in a namespace for troubleshooting."""
    try:
        core_v1 = client.CoreV1Api()
        events = core_v1.list_namespaced_event(namespace=namespace, limit=limit)
        
        sorted_events = sorted(
            events.items,
            key=lambda x: x.last_timestamp or x.event_time or x.metadata.creation_timestamp,
            reverse=True
        )
        
        return [
            {
                "type": event.type,
                "reason": event.reason,
                "message": event.message,
                "object": f"{event.involved_object.kind}/{event.involved_object.name}",
                "count": event.count,
                "first_seen": event.first_timestamp.isoformat() if event.first_timestamp else None,
                "last_seen": event.last_timestamp.isoformat() if event.last_timestamp else None
            }
            for event in sorted_events[:limit]
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def get_configmaps(namespace: str = "default") -> List[Dict[str, Any]]:
    """List ConfigMaps in a namespace."""
    try:
        core_v1 = client.CoreV1Api()
        configmaps = core_v1.list_namespaced_config_map(namespace=namespace)
        
        return [
            {
                "name": cm.metadata.name,
                "namespace": cm.metadata.namespace,
                "data_keys": list(cm.data.keys()) if cm.data else [],
                "created": cm.metadata.creation_timestamp.isoformat() if cm.metadata.creation_timestamp else None
            }
            for cm in configmaps.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def get_secrets(namespace: str = "default") -> List[Dict[str, Any]]:
    """List Secrets in a namespace (without revealing values)."""
    try:
        core_v1 = client.CoreV1Api()
        secrets = core_v1.list_namespaced_secret(namespace=namespace)
        
        return [
            {
                "name": secret.metadata.name,
                "namespace": secret.metadata.namespace,
                "type": secret.type,
                "data_keys": list(secret.data.keys()) if secret.data else [],
                "created": secret.metadata.creation_timestamp.isoformat() if secret.metadata.creation_timestamp else None
            }
            for secret in secrets.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def get_persistent_volumes() -> List[Dict[str, Any]]:
    """List all Persistent Volumes in the cluster."""
    try:
        core_v1 = client.CoreV1Api()
        pvs = core_v1.list_persistent_volume()
        
        return [
            {
                "name": pv.metadata.name,
                "capacity": pv.spec.capacity.get("storage") if pv.spec.capacity else None,
                "access_modes": pv.spec.access_modes or [],
                "status": pv.status.phase,
                "claim": f"{pv.spec.claim_ref.namespace}/{pv.spec.claim_ref.name}" if pv.spec.claim_ref else None,
                "storage_class": pv.spec.storage_class_name,
                "created": pv.metadata.creation_timestamp.isoformat() if pv.metadata.creation_timestamp else None
            }
            for pv in pvs.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

@mcp.tool()
def get_persistent_volume_claims(namespace: str = "default") -> List[Dict[str, Any]]:
    """List Persistent Volume Claims in a namespace."""
    try:
        core_v1 = client.CoreV1Api()
        pvcs = core_v1.list_namespaced_persistent_volume_claim(namespace=namespace)
        
        return [
            {
                "name": pvc.metadata.name,
                "namespace": pvc.metadata.namespace,
                "status": pvc.status.phase,
                "volume": pvc.spec.volume_name,
                "capacity": pvc.status.capacity.get("storage") if pvc.status.capacity else None,
                "access_modes": pvc.spec.access_modes or [],
                "storage_class": pvc.spec.storage_class_name,
                "created": pvc.metadata.creation_timestamp.isoformat() if pvc.metadata.creation_timestamp else None
            }
            for pvc in pvcs.items
        ]
    except Exception as e:
        return [{"error": str(e)}]

if __name__ == "__main__":
    mcp.run(transport="streamable-http")