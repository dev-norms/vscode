import * as path from 'path';
import pino from 'pino';

let root: pino.Logger;
let moduleRoot: string;

export function setup(basedir: string) {
  moduleRoot = basedir;

  root = pino({
    level: 'trace',
    base: {
      extension: 'norms',
    },
    formatters: {
      // Prefer level name over weight
      level: (level: any) => ({ level })
    },
    messageKey: 'message'
  });
}

export function logger(modulePath: string) {
  if (!root) {
    throw new Error(`setupLogging() must be called before any loggers are constructed`);
  }

  const relativeModule = path.relative(moduleRoot, modulePath).replace(/\..+$/, '');

  return root.child({ module: relativeModule });
}
