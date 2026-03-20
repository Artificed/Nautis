# Nautis

An AI-powered Kubernetes cluster automation platform that combines a custom MCP server, n8n workflow automation, and OpenAI LLMs to monitor and manage a K3s cluster autonomously.

---

## Architecture

```
                     ┌────────────────────────────────┐
                     │      n8n (Workflow Engine)     │
                     │                                │
                     │  ┌──────────────────────────┐  │
                     │  │    Daily Cron Trigger    │  │
                     │  │            ↓             │  │
                     │  │    Fetch Cluster Data    │  │
                     │  │     via cluster-mcp)     │  │
                     │  │            ↓             │  │
                     │  │    OpenAI LLM Analysis   │  │
                     │  │            ↓             │  │
                     │  │      Execute Actions     │  │
                     │  │     (via cluster-mcp)    │  │
                     │  │            ↓             │  │
                     │  │      Log to Notion       │  │
                     │  │            ↓             │  │
                     │  │  Email Alert (critical)  │  │
                     │  └──────────────────────────┘  │
                     │                                │
                     │   + Chat Webhook (on-demand)   │
                     └───────────────┬────────────────┘
                                     │
                     ┌───────────────▼────────────────┐
                     │          cluster-mcp           │
                     │      (MCP Server, Python)      │
                     │    Exposes K8s ops as tools    │
                     └───────────────┬────────────────┘
                                     │
              ┌──────────────────────▼───────────────────────┐
              │                 K3s Cluster                  │
              │      application  │  cluster-mcp  │ n8n      │
              └──────────────────────────────────────────────┘
```

---

## Components

### 1. cluster-mcp — Kubernetes MCP Server

**Location**: `cluster-mcp/`
**Language**: Python
**Protocol**: [Model Context Protocol (MCP)](https://modelcontextprotocol.io) via `FastMCP`, served over HTTP on port `8080`

The MCP server wraps the Kubernetes Python client and exposes cluster operations as discrete tools that LLMs can call. It supports two connection modes: in-cluster (via service account) and external (via `~/.kube/config`).

#### Read Tools

| Tool | Description |
|------|-------------|
| `get_cluster_info()` | K8s version, platform, node count, server info |
| `list_namespaces()` | All namespaces with status and labels |
| `list_pods(namespace)` | Pod list with status, node assignment, IP, container details |
| `list_services(namespace)` | Services with type, cluster IP, ports, selectors |
| `list_deployments(namespace)` | Deployments with desired/ready/available replica counts |
| `list_nodes()` | Nodes with roles, K8s version, OS, CPU/memory capacity and allocatable |
| `list_ingresses(namespace)` | Ingress rules with hosts, paths, and backends |
| `list_events(namespace, limit=50)` | Recent cluster events for diagnostics |
| `get_configmaps(namespace)` | ConfigMaps and their data keys |
| `get_secrets(namespace)` | Secrets metadata (values are not exposed) |
| `get_persistent_volumes()` | PVs with capacity, reclaim policy, storage class, status |
| `get_persistent_volume_claims(namespace)` | PVCs with bound PV, access mode, storage size |
| `get_pod_logs(pod_name, namespace, tail_lines=100)` | Tail logs from a pod's containers |
| `get_resource_usage(namespace)` | CPU/memory requests and limits per pod |
| `get_deployment_status(deployment_name, namespace)` | Detailed rollout status and condition messages |

#### Write Tools

| Tool | Description |
|------|-------------|
| `restart_deployment(deployment_name, namespace)` | Patches `kubectl.kubernetes.io/restartedAt` annotation to trigger a rolling restart |
| `delete_pod(pod_name, namespace)` | Deletes a pod (forces recreation by the controller) |
| `scale_deployment(deployment_name, replicas, namespace)` | Sets replica count on a deployment |
| `cleanup_failed_pods(namespace)` | Deletes all pods in `Failed`, `Evicted`, or `Error` phase |
| `cleanup_completed_pods(namespace, older_than_hours=24)` | Deletes `Succeeded` pods older than the specified threshold |

#### RBAC

The `cluster-mcp` service account is bound to a `ClusterRole` with:

- `get`, `list` on pods, services, namespaces, nodes, pods/log, deployments, ingresses
- `patch` on deployments (for rolling restarts)
- `delete` on pods (for cleanup and forced recreation)

---

### 2. n8n Workflows

n8n runs inside the cluster (deployed via Helm in the `n8n` namespace) and orchestrates all automation. Two workflows are in use:

#### Workflow 1: Autonomous Cluster Health Monitor (Scheduled)

Triggered daily via a cron schedule. Steps:

1. **Scheduled Trigger** — Cron initiates the run
2. **Fetch Cluster Data** — Calls `cluster-mcp` tools to collect pod statuses, deployment health, node resource usage, and recent events
3. **AI Analysis** — Sends collected data to OpenAI; the LLM identifies anomalies, unhealthy pods, resource pressure, and recommends specific actions
4. **Execute Actions** — Based on the LLM response, n8n calls the appropriate `cluster-mcp` write tools (restart, scale, cleanup)
5. **Log to Notion** — Execution summary (timestamp, actions taken, LLM reasoning) is written to a Notion database
6. **Email Alert** — If any critical action was taken (e.g. restart, scale-down), a Gmail notification is sent

#### Workflow 2: On-Demand Chat Agent (Webhook)

Triggered by HTTP POST to:

```
POST /webhook/3808c0b7-e65c-40d5-90fa-3cc45d618bf3
Body: { "sessionId": "devops-session", "input": "<user message>" }
```

The webhook feeds user input into an n8n AI agent that has access to all `cluster-mcp` read tools. It answers questions about the cluster in natural language (e.g. "which pods are unhealthy?", "how many replicas does X have?") and can optionally trigger write operations on request. The response is returned directly to the caller — the React chat UI uses this to render responses in real time.

#### External Integrations

| Service | Usage |
|---------|-------|
| **OpenAI API** | LLM analysis and agent decision-making in both workflows |
| **Notion API** | Append-only execution log with timestamp, actions, and AI reasoning |
| **Gmail (SMTP)** | Email notifications for critical automated actions |

---

### 3. Kubernetes Manifests

**Location**: `k8s/`

Two namespaces with their respective manifests:

#### `astdev-presentation` namespace

- **Deployment**: `presentation-application`, 3 replicas, image pulled from GHCR, resource limits `200m CPU / 128Mi memory`
- **Service**: ClusterIP on port 80
- **Ingress**: Traefik rule for `/` path, lowest priority (1)

#### `cluster-mcp` namespace

- **Deployment**: `cluster-mcp`, 1 replica, image pulled from GHCR, resource limits `250m CPU / 256Mi memory`
- **Service**: ClusterIP on port 8080
- **Ingress**: Traefik rule for `/cluster-mcp` path, priority 10, with two middlewares:
  - `mcp-headers`: Adds CORS headers and `X-Forwarded-Proto`
  - `mcp-strip-prefix`: Strips `/cluster-mcp` before forwarding to the server
- **RBAC**: `ServiceAccount` → `ClusterRole` → `ClusterRoleBinding` as described above

---

### 4. Infrastructure / Ansible

**Location**: `infrastructure/ansible/`

Ansible playbook (`site.yml`) for full VM provisioning. Roles in order:

1. **prerequisites** — Installs base apt packages (`curl`, `ca-certificates`, `tar`, etc.)
2. **k3s** — Installs K3s `v1.34.1+k3s1`, configures kubeconfig, verifies node is ready
3. **github_cli** — Installs `gh` and authenticates with a GitHub token
4. **github_actions_runner** — Installs and registers a self-hosted Actions runner (`v2.329.0`) as a systemd service, pointed at this repository
5. **helm** — Installs Helm 3 if not present
6. **n8n** — Adds the `community-charts` Helm repo, applies the `n8n` namespace, then installs or upgrades n8n with a custom `values.yaml` (SQLite, 8Gi PVC, non-root, NodePort `5678`)

Inventory credentials are passed via environment variables: `ANSIBLE_HOST`, `ANSIBLE_USER`, `ANSIBLE_PASSWORD`, `ANSIBLE_BECOME_PASSWORD`.

---

### 5. CI/CD Pipeline

**Location**: `.github/workflows/ci-cd.yml`

Three jobs:

#### `test`

Runs on `ubuntu-latest` against Node 20.x and 22.x in a matrix. Runs `npm ci`, `npm test`, and `npm run build`.

#### `build`

Runs after `test` passes, only on pushes to `main`. Logs into GHCR and builds+pushes two images using `docker/metadata-action` with tags for branch name, short commit SHA, and `latest`:

- `ghcr.io/artificed/astdev-presentation/presentation-application`
- `ghcr.io/artificed/astdev-presentation/cluster-mcp`

#### `deploy`

Runs on the **self-hosted runner** (provisioned by Ansible) after `build`. Steps:

1. Applies namespace manifests for both namespaces
2. Creates `ghcr-secret` image pull secrets in both namespaces
3. Applies all K8s manifests for `presentation-application` and `cluster-mcp`
4. Runs `kubectl rollout restart` + `kubectl rollout status --timeout=300s` for both deployments
5. Verifies with `kubectl get pods/services` and a `curl http://localhost:80` health check

---

### 6. Presentation Application

**Location**: `application/`
**Stack**: React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, React Router DOM, Axios

A single-page app served by nginx inside a multi-stage Docker build. Consists of five snap-scrolling sections that walk through the research: hero, K8s+MCP overview, LLM decision-making, n8n workflow, and a live chat interface backed by the n8n webhook.

---

## Local Development

**Prerequisites**: Docker, Docker Compose, a kubeconfig at `~/.kube/config`

```bash
docker-compose up --build
```

| Service | Port |
|---------|------|
| Presentation app | `http://localhost:80` |
| cluster-mcp MCP server | `http://localhost:8080` |

The `cluster-mcp` container mounts `~/.kube/config` read-only and sets `KUBECONFIG=/root/.kube/config`, so it will connect to whatever cluster your local kubeconfig points to.

---

## Repository Structure

```
Nautis/
├── application/          # React frontend
├── cluster-mcp/          # Python MCP server
│   └── main.py           # 24 MCP tool definitions
├── infrastructure/
│   └── ansible/          # VM provisioning playbooks
├── k8s/
│   ├── application/      # K8s manifests for frontend
│   └── cluster-mcp/      # K8s manifests + RBAC for MCP server
├── docker-compose.yml    # Local dev setup
└── .github/
    └── workflows/
        └── ci-cd.yml     # Test → Build → Deploy pipeline
```
