import * as express from 'express';
import { log } from '../logger';

export function initLogging(app: express.Application): void {
  app.use((req, res, next) => {
    const start = Date.now();

    log(`➡️  ${req.method} ${req.originalUrl} from IP: ${req.ip}`);

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