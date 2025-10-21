FROM python:3.11-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl git && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir "git+https://github.com/modelcontextprotocol/python-sdk.git@main" && \
    pip install --no-cache-dir kubernetes starlette uvicorn

COPY main.py .

CMD ["python", "main.py"]