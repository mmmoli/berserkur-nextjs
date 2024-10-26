import { ConsoleLogger } from './implementations/console-logger';
import { LoggerTrait } from './logger-types';

export let logger: LoggerTrait;

async function init() {
  logger = new ConsoleLogger();
}

init();
