import os
from mcp.server.fastmcp import FastMCP
from kubernetes import client, config
from typing import Dict, List, Any
import json

PORT = int(os.getenv("PORT", "8080"))
HOST = os.getenv("HOST", "0.0.0.0")

# Load Kubernetes configuration
try:
    config.load_kube_config()
except Exception as e:
    print(f"Warning: Could not load kube config: {e}")

# Create the MCP server
mcp = FastMCP(
    name="Kubernetes Cluster MCP Server",
    instructions="MCP server for querying and managing Kubernetes cluster resources.",
    host=HOST,
    port=PORT,
)

# Kubernetes Cluster Information Tools

@mcp.tool()
def get_cluster_info() -> Dict[str, Any]:
    """
    Get basic information about the Kubernetes cluster including version and server info.
    """
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
    """
    List all namespaces in the cluster.
    """
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
    """
    List all pods in a specific namespace.
    
    Args:
        namespace: The namespace to query (default: "default")
    """
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
    """
    List all services in a specific namespace.
    
    Args:
        namespace: The namespace to query (default: "default")
    """
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
    """
    List all deployments in a specific namespace.
    
    Args:
        namespace: The namespace to query (default: "default")
    """
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
    """
    List all nodes in the cluster with their status and capacity information.
    """
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
    """
    Get logs from a specific pod.
    
    Args:
        pod_name: Name of the pod
        namespace: The namespace of the pod (default: "default")
        tail_lines: Number of lines to retrieve from the end of logs (default: 100)
    """
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
    """
    List all ingresses in a specific namespace.
    
    Args:
        namespace: The namespace to query (default: "default")
    """
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

if __name__ == "__main__":
    mcp.run(transport="streamable-http")