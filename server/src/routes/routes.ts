import * as bodyParser from 'body-parser';
import { ServeStaticOptions } from 'serve-static';
import * as express from 'express';
import * as path from 'path';
import { AppConfig } from '../app.config';
import { TestRoute } from './test.route';

const staticPath = path.resolve(__dirname, '../', AppConfig.CLIENT_BUILD_PATH);

function serveIndex(req: express.Request, res: express.Response): void {
  const indexPath = path.join(staticPath, 'index.html');

  res.sendFile(indexPath);
}

export function initRoutes(app: express.Application): void {
  app.use(bodyParser.json());

  const router = express.Router();

  new TestRoute(router);

  app.use('/api', router);
}

export function initStaticRoutes(app: express.Application): void {
  const staticOptions: ServeStaticOptions = {
    cacheControl: true,
    maxAge: '1y'
  };

  app.use(express.static(staticPath, staticOptions));
  app.get('/{*splat}', serveIndex);
}
