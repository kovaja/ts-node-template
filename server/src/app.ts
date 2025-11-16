import * as express from 'express';
import { initRoutes, initStaticRoutes } from './routes/routes';
import { promiseMapTo } from './utilities/commons';
import { log } from './utilities/logger';


function initLogging(app: express.Application): void {
  app.use((req, res, next) => {
    const start = Date.now();

    log(`➡️  ${req.method} ${req.originalUrl}`);

    // Capture the original send function
    const originalSend = res.send.bind(res);

    res.send = (body?: unknown): express.Response => {
      const duration = Date.now() - start;
      log(
        `⬅️  ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`
      );
      return originalSend(body);
    };

    next();
  });
}

export function createApp(): Promise<express.Application> {
  const app = express();

  return Promise.resolve()
    .then(() => initLogging(app))
    .then(() => initRoutes(app))
    .then(() => initStaticRoutes(app))
    .then(promiseMapTo(app));
}
