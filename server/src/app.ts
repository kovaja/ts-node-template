import * as express from 'express';
import { initRoutes, initStaticRoutes } from './routes/routes';
import { promiseMapTo } from './utilities/commons';

export function createApp(): Promise<express.Application> {
  const app = express();

  return Promise.resolve()
    .then(() => initRoutes(app))
    .then(() => initStaticRoutes(app))
    .then(promiseMapTo(app));
}
