import * as express from 'express';
import { initRoutes, initStaticRoutes } from './routes/routes';
import { promiseMapTo } from './utilities/commons';
import { initLogging } from './utilities/middleware/logging';

export function createApp(): Promise<express.Application> {
  const app = express();
  app.set('trust proxy', true);

  return Promise.resolve()
    .then(() => initLogging(app))
    .then(() => initRoutes(app))
    .then(() => initStaticRoutes(app))
    .then(promiseMapTo(app));
}
