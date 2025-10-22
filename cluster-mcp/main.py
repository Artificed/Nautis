import os
from mcp.server.fastmcp import FastMCP

PORT = int(os.getenv("PORT", "8080"))
HOST = os.getenv("HOST", "0.0.0.0")

# Create the MCP server
mcp = FastMCP(
    name="Starter MCP Server",
    instructions="A minimal MCP server exposing simple tools.",
    host=HOST,
    port=PORT,
)

# Example tools

@mcp.tool()
def greet(name: str = "World") -> str:
    """
    Say hello to someone.
    """
    return f"Hello, {name}!"

@mcp.tool()
def add(a: float, b: float) -> float:
    """
    Add two numbers and return the result
    """
    return a + b

@mcp.tool()
def echo(text: str) -> str:
    """
    Echo back whatever text you send.
    """
    return text

if __name__ == "__main__":
    mcp.run(transport="streamable-http")