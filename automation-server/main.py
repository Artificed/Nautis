from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
from kubernetes import client, config
from kubernetes.client.rest import ApiException
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Kubernetes Automation API",
    description="REST API for n8n to interact with Kubernetes cluster",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    config.load_kube_config()
    logger.info("Loaded kubeconfig from file")
except Exception:
    try:
        config.load_incluster_config()
        logger.info("Loaded in-cluster config")
    except Exception as e:
        logger.error(f"Failed to load Kubernetes config: {e}")

v1 = client.CoreV1Api()
apps_v1 = client.AppsV1Api()
networking_v1 = client.NetworkingV1Api()


class PodQuery(BaseModel):
    namespace: Optional[str] = Field(None, description="Namespace to query (omit for all namespaces)")
    label_selector: Optional[str] = Field(None, description="Label selector to filter pods (e.g., 'app=myapp')")


class LogQuery(BaseModel):
    pod_name: str = Field(..., description="Name of the pod")
    namespace: str = Field(..., description="Namespace of the pod")
    container: Optional[str] = Field(None, description="Container name (optional)")
    tail_lines: Optional[int] = Field(100, description="Number of lines to tail")


class PodDescribeQuery(BaseModel):
    pod_name: str = Field(..., description="Name of the pod")
    namespace: str = Field(..., description="Namespace of the pod")


class NamespaceQuery(BaseModel):
    namespace: Optional[str] = Field(None, description="Namespace to query (omit for all namespaces)")


def format_timestamp(timestamp) -> str:
    """Format Kubernetes timestamp to readable string"""
    if timestamp:
        return timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")
    return "N/A"


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Kubernetes Automation API",
        "version": "1.0.0"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Try to list namespaces to verify K8s connection
        v1.list_namespace(limit=1)
        return {"status": "healthy", "kubernetes": "connected"}
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"Kubernetes connection failed: {str(e)}")


@app.get("/namespaces")
async def get_namespaces():
    """Get list of all namespaces in the cluster"""
    try:
        namespaces = v1.list_namespace()
        namespace_info = [
            {
                "name": ns.metadata.name,
                "status": ns.status.phase,
                "created": format_timestamp(ns.metadata.creation_timestamp),
                "labels": ns.metadata.labels or {},
            }
            for ns in namespaces.items
        ]
        return {"namespaces": namespace_info, "count": len(namespace_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/pods")
async def get_pods(query: PodQuery):
    """Get information about pods in a namespace or across all namespaces"""
    try:
        if query.namespace:
            pods = v1.list_namespaced_pod(
                namespace=query.namespace, 
                label_selector=query.label_selector
            )
        else:
            pods = v1.list_pod_for_all_namespaces(label_selector=query.label_selector)
        
        pod_info = []
        for pod in pods.items:
            pod_info.append({
                "name": pod.metadata.name,
                "namespace": pod.metadata.namespace,
                "status": pod.status.phase,
                "node": pod.spec.node_name,
                "ip": pod.status.pod_ip,
                "created": format_timestamp(pod.metadata.creation_timestamp),
                "labels": pod.metadata.labels or {},
                "containers": [
                    {
                        "name": c.name,
                        "image": c.image,
                        "ready": next(
                            (cs.ready for cs in pod.status.container_statuses if cs.name == c.name),
                            False
                        ) if pod.status.container_statuses else False,
                    }
                    for c in pod.spec.containers
                ],
            })
        
        return {"pods": pod_info, "count": len(pod_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/deployments")
async def get_deployments(query: NamespaceQuery):
    """Get information about deployments in a namespace or across all namespaces"""
    try:
        if query.namespace:
            deployments = apps_v1.list_namespaced_deployment(namespace=query.namespace)
        else:
            deployments = apps_v1.list_deployment_for_all_namespaces()
        
        deployment_info = []
        for deploy in deployments.items:
            deployment_info.append({
                "name": deploy.metadata.name,
                "namespace": deploy.metadata.namespace,
                "replicas": {
                    "desired": deploy.spec.replicas,
                    "current": deploy.status.replicas or 0,
                    "ready": deploy.status.ready_replicas or 0,
                    "available": deploy.status.available_replicas or 0,
                },
                "strategy": deploy.spec.strategy.type,
                "created": format_timestamp(deploy.metadata.creation_timestamp),
                "labels": deploy.metadata.labels or {},
            })
        
        return {"deployments": deployment_info, "count": len(deployment_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/services")
async def get_services(query: NamespaceQuery):
    """Get information about services in a namespace or across all namespaces"""
    try:
        if query.namespace:
            services = v1.list_namespaced_service(namespace=query.namespace)
        else:
            services = v1.list_service_for_all_namespaces()
        
        service_info = []
        for svc in services.items:
            service_info.append({
                "name": svc.metadata.name,
                "namespace": svc.metadata.namespace,
                "type": svc.spec.type,
                "cluster_ip": svc.spec.cluster_ip,
                "external_ips": svc.spec.external_i_ps or [],
                "ports": [
                    {
                        "name": p.name,
                        "port": p.port,
                        "target_port": str(p.target_port),
                        "protocol": p.protocol,
                    }
                    for p in (svc.spec.ports or [])
                ],
                "selector": svc.spec.selector or {},
            })
        
        return {"services": service_info, "count": len(service_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/nodes")
async def get_nodes():
    """Get information about cluster nodes"""
    try:
        nodes = v1.list_node()
        
        node_info = []
        for node in nodes.items:
            # Get node conditions
            conditions = {}
            for condition in node.status.conditions or []:
                conditions[condition.type] = condition.status
            
            # Get node capacity and allocatable resources
            capacity = node.status.capacity or {}
            allocatable = node.status.allocatable or {}
            
            node_info.append({
                "name": node.metadata.name,
                "status": conditions.get("Ready", "Unknown"),
                "roles": [
                    label.replace("node-role.kubernetes.io/", "")
                    for label in (node.metadata.labels or {}).keys()
                    if label.startswith("node-role.kubernetes.io/")
                ],
                "version": node.status.node_info.kubelet_version,
                "os": f"{node.status.node_info.os_image} ({node.status.node_info.architecture})",
                "capacity": {
                    "cpu": capacity.get("cpu", "N/A"),
                    "memory": capacity.get("memory", "N/A"),
                    "pods": capacity.get("pods", "N/A"),
                },
                "allocatable": {
                    "cpu": allocatable.get("cpu", "N/A"),
                    "memory": allocatable.get("memory", "N/A"),
                    "pods": allocatable.get("pods", "N/A"),
                },
                "created": format_timestamp(node.metadata.creation_timestamp),
            })
        
        return {"nodes": node_info, "count": len(node_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/ingresses")
async def get_ingresses(query: NamespaceQuery):
    """Get information about ingresses in a namespace or across all namespaces"""
    try:
        if query.namespace:
            ingresses = networking_v1.list_namespaced_ingress(namespace=query.namespace)
        else:
            ingresses = networking_v1.list_ingress_for_all_namespaces()
        
        ingress_info = []
        for ing in ingresses.items:
            rules = []
            for rule in (ing.spec.rules or []):
                paths = []
                if rule.http and rule.http.paths:
                    for path in rule.http.paths:
                        paths.append({
                            "path": path.path,
                            "path_type": path.path_type,
                            "backend_service": path.backend.service.name if path.backend.service else "N/A",
                            "backend_port": path.backend.service.port.number if path.backend.service and path.backend.service.port else "N/A",
                        })
                rules.append({
                    "host": rule.host or "*",
                    "paths": paths,
                })
            
            ingress_info.append({
                "name": ing.metadata.name,
                "namespace": ing.metadata.namespace,
                "class": ing.spec.ingress_class_name,
                "rules": rules,
                "annotations": ing.metadata.annotations or {},
            })
        
        return {"ingresses": ingress_info, "count": len(ingress_info)}
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/pods/logs")
async def get_pod_logs(query: LogQuery):
    """Get logs from a specific pod"""
    try:
        logs = v1.read_namespaced_pod_log(
            name=query.pod_name,
            namespace=query.namespace,
            container=query.container,
            tail_lines=query.tail_lines
        )
        
        return {
            "pod_name": query.pod_name,
            "namespace": query.namespace,
            "container": query.container or "default",
            "logs": logs
        }
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/pods/describe")
async def describe_pod(query: PodDescribeQuery):
    """Get detailed information about a specific pod"""
    try:
        pod = v1.read_namespaced_pod(name=query.pod_name, namespace=query.namespace)
        
        pod_details = {
            "metadata": {
                "name": pod.metadata.name,
                "namespace": pod.metadata.namespace,
                "uid": pod.metadata.uid,
                "created": format_timestamp(pod.metadata.creation_timestamp),
                "labels": pod.metadata.labels or {},
                "annotations": pod.metadata.annotations or {},
            },
            "spec": {
                "node": pod.spec.node_name,
                "service_account": pod.spec.service_account,
                "restart_policy": pod.spec.restart_policy,
                "containers": [
                    {
                        "name": c.name,
                        "image": c.image,
                        "ports": [
                            {"containerPort": p.container_port, "protocol": p.protocol} 
                            for p in (c.ports or [])
                        ],
                        "resources": {
                            "requests": c.resources.requests or {} if c.resources else {},
                            "limits": c.resources.limits or {} if c.resources else {},
                        },
                    }
                    for c in pod.spec.containers
                ],
            },
            "status": {
                "phase": pod.status.phase,
                "ip": pod.status.pod_ip,
                "host_ip": pod.status.host_ip,
                "start_time": format_timestamp(pod.status.start_time),
                "conditions": [
                    {
                        "type": c.type,
                        "status": c.status,
                        "last_transition": format_timestamp(c.last_transition_time),
                    }
                    for c in (pod.status.conditions or [])
                ],
                "container_statuses": [
                    {
                        "name": cs.name,
                        "ready": cs.ready,
                        "restart_count": cs.restart_count,
                        "image": cs.image,
                        "state": str(cs.state),
                    }
                    for cs in (pod.status.container_statuses or [])
                ] if pod.status.container_statuses else [],
            },
        }
        
        return pod_details
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/cluster/summary")
async def get_cluster_summary():
    """Get a summary overview of the entire cluster"""
    try:
        nodes = v1.list_node()
        node_count = len(nodes.items)
        
        pods = v1.list_pod_for_all_namespaces()
        pod_count = len(pods.items)
        
        pod_status_counts = {}
        for pod in pods.items:
            status = pod.status.phase
            pod_status_counts[status] = pod_status_counts.get(status, 0) + 1
        
        deployments = apps_v1.list_deployment_for_all_namespaces()
        deployment_count = len(deployments.items)

        services = v1.list_service_for_all_namespaces()
        service_count = len(services.items)
        
        namespaces = v1.list_namespace()
        namespace_count = len(namespaces.items)
        
        return {
            "cluster_summary": {
                "nodes": {
                    "count": node_count,
                    "details": [
                        {
                            "name": node.metadata.name,
                            "status": next(
                                (c.status for c in node.status.conditions if c.type == "Ready"),
                                "Unknown"
                            ),
                        }
                        for node in nodes.items
                    ]
                },
                "namespaces": {"count": namespace_count},
                "pods": {
                    "total": pod_count,
                    "by_status": pod_status_counts
                },
                "deployments": {"count": deployment_count},
                "services": {"count": service_count},
            }
        }
    except ApiException as e:
        raise HTTPException(status_code=e.status, detail=e.reason)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
