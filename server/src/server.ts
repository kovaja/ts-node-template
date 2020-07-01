import * as dotenv from 'dotenv';
import app from './app';
import { Logger } from './utilities/logger';
import { isProd } from './utilities/common.utility';
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, (): void => {
  Logger.log('Server listening on port', PORT);

  if (!isProd()) {
    Logger.log('Your app is running in dev mode');
  }
});
