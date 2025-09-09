import * as dotenv from 'dotenv';
import { Application } from 'express';
import { createApp } from './app';
import { log, logError } from './utilities/logger';
import { getPort } from './utilities/network';
import { isProduction } from './utilities/commons';

if(!isProduction()) {
  // Use `.env` file for local development only
  dotenv.config();
}

function onAppListening(): void {
  const network = {
    port: getPort()
  };

  log('Server si running');
  log(network);
}

createApp()
  .then((app: Application) => app.listen(getPort(), onAppListening))
  .catch((e) => logError(e));
