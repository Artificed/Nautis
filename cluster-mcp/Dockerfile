FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install --no-cache-dir mcp uvicorn kubernetes

COPY main.py /app/main.py

EXPOSE 8080
ENV PORT=8080
ENV HOST=0.0.0.0

CMD ["python", "-u", "main.py"]