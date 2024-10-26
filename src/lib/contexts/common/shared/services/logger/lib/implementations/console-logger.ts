import { LoggerTrait, LoggingUser } from '../logger-types';

export class ConsoleLogger implements LoggerTrait {
  untag(key: string): void {
    console.log(key, undefined);
  }

  tag(key: string, value: string): void {
    console.log(key, value);
  }

  unidentify(): void {
    console.log(null);
  }

  identify(user: LoggingUser): void {
    console.log(user);
  }

  log(msg: any): void {
    console.log(msg);
  }

  error(err: unknown): void {
    console.error(err);
  }
}
