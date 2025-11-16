# Kovaja template project
- node.js server with rest API, using express
- react frontend
- both in typescript
## Quick start
- run command
```
  npm install && npm start
```
- open http://localhost:8000/ in your browser

## Dev start up
- Start server
```
npm run server:dev
```
- Start client
```
npm run client:dev
```

## Docker

### 🐳 Docker Compose Cheat Sheet

| Name              | Command                           | Note                                      |
|-------------------|------------------------------------|--------------------------------------------|
| Start services    | `docker compose up -d`             | Starts containers in detached mode         |
| Build & start     | `docker compose up -d --build`     | Rebuilds images before starting            |
| Stop services     | `docker compose down`              | Stops and removes containers + networks    |
| View logs         | `docker compose logs -f`           | Follows logs for all services              |
| Logs (one service)| `docker compose logs -f <service>` | Replace `<service>` with container name    |
| List services     | `docker compose ps`                | Shows running containers                   |
| Rebuild only      | `docker compose build`             | Builds images without running containers   |
| Restart services  | `docker compose restart`           | Restarts all services                      |
| Exec into service | `docker compose exec <svc> sh`     | Opens a shell inside a running container   |
| Pull images       | `docker compose pull`              | Gets latest images from registry           |
| Stop without rm   | `docker compose stop`              | Stops containers but keeps them available  |


### TODOS:
- write unit tests
- write e2e smoke test
