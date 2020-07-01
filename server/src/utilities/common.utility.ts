export function isProd(): boolean {
  return process.env.ENVIRONMENT === 'prod';
}
