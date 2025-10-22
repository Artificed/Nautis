import json
from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import JSONResponse, PlainTextResponse, Response
from starlette.routing import Route, Mount
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
import uvicorn

from mcp.server import Server
from mcp.server.sse import SseServerTransport
import mcp.types as types
from kubernetes import client, config
from kubernetes.client.rest import ApiException

# Initialize MCP server
server = Server("k8s-cluster-mcp")

# Load Kubernetes configuration
try:
    config.load_kube_config()
    print("✅ Loaded kube-config (local mode)")
except Exception:
    try:
        config.load_incluster_config()
        print("✅ Loaded in-cluster config")
    except Exception as e:
        print(f"⚠️ Warning: Could not load Kubernetes config: {e}")

v1 = client.CoreV1Api()

def format_timestamp(ts):
    return ts.strftime("%Y-%m-%d %H:%M:%S UTC") if ts else "N/A"

@server.list_tools()
async def handle_list_tools():
    return [
        types.Tool(
            name="get_namespaces",
            description="List all namespaces in the Kubernetes cluster",
            inputSchema={"type": "object", "properties": {}},
        ),
    ]

@server.call_tool()
async def handle_call_tool(name: str, arguments: dict | None):
    if name == "get_namespaces":
        try:
            namespaces = v1.list_namespace()
            info = []
            for ns in namespaces.items:
                info.append({
                    "name": ns.metadata.name,
                    "status": ns.status.phase,
                    "created": format_timestamp(ns.metadata.creation_timestamp),
                    "labels": ns.metadata.labels or {}
                })
            return [types.TextContent(type="text", text=json.dumps(info, indent=2))]
        except ApiException as e:
            return [types.TextContent(type="text", text=f"K8s API error: {e.status} {e.reason}")]
    return [types.TextContent(type="text", text=f"Unknown tool: {name}")]

# Create SSE transport — now with full path prefix
sse_transport = SseServerTransport("/cluster-mcp/messages")

# SSE endpoint under full prefix
async def handle_sse(request: Request):
    async with sse_transport.connect_sse(request.scope, request.receive, request._send) as (read_stream, write_stream):
        await server.run(read_stream, write_stream, server.create_initialization_options())
    return PlainTextResponse("", status_code=200)

# Starlette routes — all prefixed with /cluster-mcp
routes = [
    Route("/cluster-mcp", endpoint=lambda _: PlainTextResponse("MCP server is running")),
    Route("/cluster-mcp/health", endpoint=lambda _: JSONResponse({"status": "healthy"})),
    Route("/cluster-mcp/sse", endpoint=handle_sse, methods=["GET"]),
    Mount("/cluster-mcp/messages", app=sse_transport.handle_post_message)
]

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["GET", "POST", "OPTIONS"],
        allow_headers=["*"]
    )
]

app = Starlette(routes=routes, middleware=middleware)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, log_level="info")