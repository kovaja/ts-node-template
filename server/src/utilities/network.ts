import { logError } from './logger';

export function getPort(): string {
  if (process.env.PORT) {
    return process.env.PORT
  }

  logError('Unknown PORT in env', { port: process.env.PORT })
  throw new Error('Unknown PORT in env')
}
