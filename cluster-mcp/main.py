import asyncio
import json

from mcp.server.models import InitializationOptions
import mcp.types as types
from mcp.server import NotificationOptions, Server
from mcp.server.sse import SseServerTransport
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.responses import Response
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
import uvicorn

from kubernetes import client, config
from kubernetes.client.rest import ApiException

# Initialize the MCP server
server = Server("k8s-cluster-mcp")

# Load Kubernetes configuration
try:
    config.load_kube_config()
except Exception:
    # If running inside a pod, use in-cluster config
    try:
        config.load_incluster_config()
    except Exception as e:
        print(f"Warning: Could not load Kubernetes config: {e}")

# Initialize Kubernetes API clients
v1 = client.CoreV1Api()
apps_v1 = client.AppsV1Api()
networking_v1 = client.NetworkingV1Api()


def format_timestamp(timestamp) -> str:
    """Format Kubernetes timestamp to readable string"""
    if timestamp:
        return timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")
    return "N/A"


def safe_get_nested(data: dict, *keys, default="N/A"):
    """Safely get nested dictionary values"""
    for key in keys:
        if isinstance(data, dict):
            data = data.get(key, default)
        else:
            return default
    return data if data != {} else default


@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    """
    List available tools for querying Kubernetes cluster information.
    """
    return [
        types.Tool(
            name="get_pods",
            description="Get information about pods in a namespace or across all namespaces",
            inputSchema={
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "Namespace to query (leave empty for all namespaces)",
                    },
                    "label_selector": {
                        "type": "string",
                        "description": "Label selector to filter pods (e.g., 'app=myapp')",
                    },
                },
            },
        ),
        types.Tool(
            name="get_deployments",
            description="Get information about deployments in a namespace or across all namespaces",
            inputSchema={
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "Namespace to query (leave empty for all namespaces)",
                    },
                },
            },
        ),
        types.Tool(
            name="get_services",
            description="Get information about services in a namespace or across all namespaces",
            inputSchema={
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "Namespace to query (leave empty for all namespaces)",
                    },
                },
            },
        ),
        types.Tool(
            name="get_namespaces",
            description="Get list of all namespaces in the cluster",
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="get_nodes",
            description="Get information about cluster nodes",
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="get_ingresses",
            description="Get information about ingresses in a namespace or across all namespaces",
            inputSchema={
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "Namespace to query (leave empty for all namespaces)",
                    },
                },
            },
        ),
        types.Tool(
            name="get_pod_logs",
            description="Get logs from a specific pod",
            inputSchema={
                "type": "object",
                "properties": {
                    "pod_name": {
                        "type": "string",
                        "description": "Name of the pod",
                    },
                    "namespace": {
                        "type": "string",
                        "description": "Namespace of the pod",
                    },
                    "container": {
                        "type": "string",
                        "description": "Container name (optional, defaults to first container)",
                    },
                    "tail_lines": {
                        "type": "number",
                        "description": "Number of lines to tail (default: 100)",
                    },
                },
                "required": ["pod_name", "namespace"],
            },
        ),
        types.Tool(
            name="get_cluster_summary",
            description="Get a summary overview of the entire cluster including node count, pod count, and resource usage",
            inputSchema={
                "type": "object",
                "properties": {},
            },
        ),
        types.Tool(
            name="describe_pod",
            description="Get detailed information about a specific pod",
            inputSchema={
                "type": "object",
                "properties": {
                    "pod_name": {
                        "type": "string",
                        "description": "Name of the pod",
                    },
                    "namespace": {
                        "type": "string",
                        "description": "Namespace of the pod",
                    },
                },
                "required": ["pod_name", "namespace"],
            },
        ),
    ]


@server.call_tool()
async def handle_call_tool(
    name: str, arguments: dict | None
) -> list[types.TextContent | types.ImageContent | types.EmbeddedResource]:
    """
    Handle tool execution requests for Kubernetes cluster queries.
    """
    try:
        if name == "get_pods":
            namespace = arguments.get("namespace") if arguments else None
            label_selector = arguments.get("label_selector") if arguments else None
            
            if namespace:
                pods = v1.list_namespaced_pod(namespace=namespace, label_selector=label_selector)
            else:
                pods = v1.list_pod_for_all_namespaces(label_selector=label_selector)
            
            pod_info = []
            for pod in pods.items:
                pod_info.append({
                    "name": pod.metadata.name,
                    "namespace": pod.metadata.namespace,
                    "status": pod.status.phase,
                    "node": pod.spec.node_name,
                    "ip": pod.status.pod_ip,
                    "created": format_timestamp(pod.metadata.creation_timestamp),
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(pod_info, indent=2)
                )
            ]
        
        elif name == "get_deployments":
            namespace = arguments.get("namespace") if arguments else None
            
            if namespace:
                deployments = apps_v1.list_namespaced_deployment(namespace=namespace)
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(deployment_info, indent=2)
                )
            ]
        
        elif name == "get_services":
            namespace = arguments.get("namespace") if arguments else None
            
            if namespace:
                services = v1.list_namespaced_service(namespace=namespace)
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(service_info, indent=2)
                )
            ]
        
        elif name == "get_namespaces":
            namespaces = v1.list_namespace()
            
            namespace_info = []
            for ns in namespaces.items:
                namespace_info.append({
                    "name": ns.metadata.name,
                    "status": ns.status.phase,
                    "created": format_timestamp(ns.metadata.creation_timestamp),
                    "labels": ns.metadata.labels or {},
                })
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(namespace_info, indent=2)
                )
            ]
        
        elif name == "get_nodes":
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(node_info, indent=2)
                )
            ]
        
        elif name == "get_ingresses":
            namespace = arguments.get("namespace") if arguments else None
            
            if namespace:
                ingresses = networking_v1.list_namespaced_ingress(namespace=namespace)
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(ingress_info, indent=2)
                )
            ]
        
        elif name == "get_pod_logs":
            if not arguments:
                raise ValueError("Missing required arguments: pod_name and namespace")
            
            pod_name = arguments.get("pod_name")
            namespace = arguments.get("namespace")
            container = arguments.get("container")
            tail_lines = arguments.get("tail_lines", 100)
            
            if not pod_name or not namespace:
                raise ValueError("pod_name and namespace are required")
            
            logs = v1.read_namespaced_pod_log(
                name=pod_name,
                namespace=namespace,
                container=container,
                tail_lines=int(tail_lines)
            )
            
            return [
                types.TextContent(
                    type="text",
                    text=f"Logs for pod {pod_name} in namespace {namespace}:\n\n{logs}"
                )
            ]
        
        elif name == "describe_pod":
            if not arguments:
                raise ValueError("Missing required arguments: pod_name and namespace")
            
            pod_name = arguments.get("pod_name")
            namespace = arguments.get("namespace")
            
            if not pod_name or not namespace:
                raise ValueError("pod_name and namespace are required")
            
            pod = v1.read_namespaced_pod(name=pod_name, namespace=namespace)
            
            # Build detailed pod description
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
                            "ports": [{"containerPort": p.container_port, "protocol": p.protocol} for p in (c.ports or [])],
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
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(pod_details, indent=2)
                )
            ]
        
        elif name == "get_cluster_summary":
            # Get nodes
            nodes = v1.list_node()
            node_count = len(nodes.items)
            ready_nodes = sum(
                1 for node in nodes.items
                if any(c.type == "Ready" and c.status == "True" for c in node.status.conditions or [])
            )
            
            # Get all pods
            pods = v1.list_pod_for_all_namespaces()
            total_pods = len(pods.items)
            running_pods = sum(1 for pod in pods.items if pod.status.phase == "Running")
            
            # Get namespaces
            namespaces = v1.list_namespace()
            namespace_count = len(namespaces.items)
            
            # Get deployments
            deployments = apps_v1.list_deployment_for_all_namespaces()
            deployment_count = len(deployments.items)
            
            # Get services
            services = v1.list_service_for_all_namespaces()
            service_count = len(services.items)
            
            summary = {
                "cluster_overview": {
                    "nodes": {
                        "total": node_count,
                        "ready": ready_nodes,
                    },
                    "namespaces": namespace_count,
                    "pods": {
                        "total": total_pods,
                        "running": running_pods,
                    },
                    "deployments": deployment_count,
                    "services": service_count,
                },
                "namespace_breakdown": {},
            }
            
            # Count pods per namespace
            for pod in pods.items:
                ns = pod.metadata.namespace
                if ns not in summary["namespace_breakdown"]:
                    summary["namespace_breakdown"][ns] = {
                        "pods": 0,
                        "running_pods": 0,
                    }
                summary["namespace_breakdown"][ns]["pods"] += 1
                if pod.status.phase == "Running":
                    summary["namespace_breakdown"][ns]["running_pods"] += 1
            
            return [
                types.TextContent(
                    type="text",
                    text=json.dumps(summary, indent=2)
                )
            ]
        
        else:
            raise ValueError(f"Unknown tool: {name}")
    
    except ApiException as e:
        error_msg = f"Kubernetes API error: {e.status} - {e.reason}"
        if e.body:
            try:
                error_body = json.loads(e.body)
                error_msg += f"\nDetails: {error_body.get('message', '')}"
            except:
                pass
        return [types.TextContent(type="text", text=error_msg)]
    
    except Exception as e:
        return [
            types.TextContent(
                type="text",
                text=f"Error executing tool {name}: {str(e)}"
            )
        ]


async def handle_health(request):
    """Health check endpoint"""
    return Response(
        json.dumps({"status": "healthy", "server": "k8s-cluster-mcp"}),
        media_type="application/json"
    )


async def handle_root(request):
    """Root endpoint that provides MCP server information"""
    # Get the base URL from the request
    base_url = str(request.url).rstrip('/')
    
    return Response(
        json.dumps({
            "name": "k8s-cluster-mcp",
            "version": "0.1.0",
            "transport": "sse",
            "protocol": "mcp",
            "endpoints": {
                "sse": f"{base_url}/sse",
                "messages": f"{base_url}/messages",
                "health": f"{base_url}/health"
            },
            "description": "Kubernetes Cluster MCP Server - Connect via SSE transport",
            "instructions": {
                "connection": f"Use SSE transport to connect to {base_url}",
                "note": "MCP client should append /sse for SSE connection and /messages for POST messages"
            }
        }, indent=2),
        media_type="application/json",
        headers={
            "Cache-Control": "no-cache",
            "X-MCP-Server": "k8s-cluster-mcp"
        }
    )


async def handle_sse(request):
    """Handle SSE connection for MCP"""
    sse = SseServerTransport("/messages")
    
    async with sse.connect_sse(
        request.scope,
        request.receive,
        request._send
    ) as streams:
        await server.run(
            streams[0],
            streams[1],
            InitializationOptions(
                server_name="k8s-cluster-mcp",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


async def handle_messages(request):
    """Handle POST messages for MCP"""
    sse = SseServerTransport("/messages")
    
    async with sse.connect_post(
        request.scope,
        request.receive,
        request._send
    ) as streams:
        await server.run(
            streams[0],
            streams[1],
            InitializationOptions(
                server_name="k8s-cluster-mcp",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


# Create Starlette app with CORS support
app = Starlette(
    routes=[
        Route("/", endpoint=handle_root, methods=["GET"]),
        Route("/health", endpoint=handle_health, methods=["GET"]),
        Route("/sse", endpoint=handle_sse),
        Route("/messages", endpoint=handle_messages, methods=["POST"]),
    ],
    middleware=[
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["GET", "POST", "OPTIONS"],
            allow_headers=["*"],
            expose_headers=["*"],
        )
    ]
)


if __name__ == "__main__":
    # Run the HTTP server
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8080,
        log_level="info"
    )

