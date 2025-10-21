import asyncio
import json
import uvicorn

from starlette.applications import Starlette
from starlette.responses import JSONResponse, Response
from starlette.routing import Route
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from mcp.server import Server, NotificationOptions
from mcp.server.http import HttpServerTransport
from mcp.server.models import InitializationOptions
import mcp.types as types

from kubernetes import client, config
from kubernetes.client.rest import ApiException


server = Server("k8s-cluster-mcp")

try:
    config.load_kube_config()
except Exception:
    try:
        config.load_incluster_config()
    except Exception as e:
        print(f"⚠️ Warning: Could not load kube config: {e}")

v1 = client.CoreV1Api()


@server.list_tools()
async def handle_list_tools():
    """List available tools"""
    return [
        types.Tool(
            name="get_pods",
            description="List pods in a namespace or all namespaces",
            inputSchema={
                "type": "object",
                "properties": {
                    "namespace": {
                        "type": "string",
                        "description": "Namespace to query (leave empty for all namespaces)",
                    }
                },
            },
        ),
    ]


@server.call_tool()
async def handle_call_tool(name: str, arguments: dict | None):
    """Handle tool execution"""
    try:
        if name == "get_pods":
            namespace = arguments.get("namespace") if arguments else None

            if namespace:
                pods = v1.list_namespaced_pod(namespace)
            else:
                pods = v1.list_pod_for_all_namespaces()

            result = [
                {
                    "name": pod.metadata.name,
                    "namespace": pod.metadata.namespace,
                    "status": pod.status.phase,
                    "node": pod.spec.node_name,
                }
                for pod in pods.items
            ]

            return [types.TextContent(type="text", text=json.dumps(result, indent=2))]

        else:
            return [types.TextContent(type="text", text=f"Unknown tool: {name}")]

    except ApiException as e:
        return [types.TextContent(type="text", text=f"Kubernetes API error: {e.reason}")]
    except Exception as e:
        return [types.TextContent(type="text", text=f"Error: {str(e)}")]


# --- Basic HTTP Routes (for health / info) ---
async def handle_root(request):
    return JSONResponse({"status": "ok", "name": "k8s-cluster-mcp"})


async def handle_health(request):
    return JSONResponse({"status": "healthy"})


# --- MCP Transport via HTTP ---
async def handle_mcp(request):
    """HTTP-based MCP transport endpoint"""
    body = await request.body()
    transport = HttpServerTransport(request, body)
    response = await server.handle_http_request(
        transport,
        InitializationOptions(
            server_name="k8s-cluster-mcp",
            server_version="0.2.0",
            capabilities=server.get_capabilities(
                notification_options=NotificationOptions(),
                experimental_capabilities={},
            ),
        ),
    )
    return response


# --- Starlette App ---
app = Starlette(
    routes=[
        Route("/", endpoint=handle_root, methods=["GET"]),
        Route("/health", endpoint=handle_health, methods=["GET"]),
        Route("/mcp", endpoint=handle_mcp, methods=["POST"]),  # Main MCP endpoint
    ],
    middleware=[
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["GET", "POST", "OPTIONS"],
            allow_headers=["*"],
        ),
    ],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)