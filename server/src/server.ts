import * as dotenv from 'dotenv';
import { Application } from 'express';
import { createApp } from './app';
import { log, logError } from './utilities/logger';
import { getHost, getPort, getProtocol } from './utilities/network';

dotenv.config();

const PORT = process.env.PORT;

function onAppListening(): void {
  const network = {
    protocol: getProtocol(),
    host: getHost(),
    port: getPort()
  };

  log('Server si running');
  log(network);
}

createApp()
  .then((app: Application) => app.listen(PORT, onAppListening))
  .catch((e) => logError(e));
