import json
from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import PlainTextResponse, Response
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

# Kubernetes config
try:
    config.load_kube_config()
    print("Loaded kube-config")
except Exception:
    try:
        config.load_incluster_config()
        print("Loaded in-cluster config")
    except Exception as e:
        print(f"Warning: Could not load Kubernetes config: {e}")

v1 = client.CoreV1Api()

def format_timestamp(ts):
    if ts:
        return ts.strftime("%Y-%m-%d %H:%M:%S UTC")
    return "N/A"

@server.list_tools()
async def handle_list_tools():
    return [
        types.Tool(
            name="get_namespaces",
            description="Get list of all namespaces in the cluster",
            inputSchema={"type":"object","properties":{}},
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
    else:
        return [types.TextContent(type="text", text=f"Unknown tool: {name}")]

# Create transport
sse_transport = SseServerTransport("/messages")

async def handle_sse(request: Request):
    async with sse_transport.connect_sse(request.scope, request.receive, request._send) as (read_stream, write_stream):
        # Run the MCP server loop which handles incoming messages and sends responses
        await server.run(read_stream, write_stream, server.create_initialization_options())
    return PlainTextResponse("", status_code=200)

# Mount messages endpoint directly as ASGI app
routes = [
    Route("/", endpoint=lambda request: Response("OK", media_type="text/plain")),
    Route("/health", endpoint=lambda request: Response(json.dumps({"status":"healthy"}), media_type="application/json"), methods=["GET"]),
    Route("/sse", endpoint=handle_sse, methods=["GET"]),
    Mount("/messages", app=sse_transport.handle_post_message, methods=["POST"])
]

app = Starlette(
    routes=routes,
    middleware=[Middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["GET","POST","OPTIONS"], allow_headers=["*"])]
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080, log_level="info")