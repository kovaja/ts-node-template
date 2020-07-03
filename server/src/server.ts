import * as dotenv from 'dotenv';
import { Logger } from './utilities/logger';
import { isProd } from './utilities/commons';
import { createApp } from './app';
import { Application } from 'express';
import { getPort, getHost, getProtocol } from './utilities/network';
dotenv.config();

const PORT = process.env.PORT;

function onAppListening(): void {
  const network = {
    protocol: getProtocol(),
    host: getHost(),
    port: getPort()
  };

  Logger.log('Server si running');
  Logger.log(network);
}

function onAppCreated(app: Application): void {
  app.listen(PORT, onAppListening);
}

createApp()
  .then(onAppCreated)
  .catch((e) => Logger.error(e));