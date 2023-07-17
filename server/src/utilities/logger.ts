import { Constants } from '../constants/constants';

enum LogLevel {
  log = 'log',
  error = 'error'
}

function out(level: LogLevel, ...args: unknown[]): void {
  /* tslint:disable-next-line:no-console */
  console[level](`[${Constants.APP_NAME}] - ${new Date().toISOString()}: `, ...args);
}

export function log(...args: unknown[]): void {
  out(LogLevel.log, ...args);
}

export function logError(...args: unknown[]): void {
  out(LogLevel.error, ...args);
}
