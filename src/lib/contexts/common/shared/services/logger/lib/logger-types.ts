export interface LoggingUser {
  id?: string;
  email?: string;
}

export interface LoggerTrait {
  tag(key: string, value: string): void;
  untag(key: string): void;
  identify(user: LoggingUser): void;
  unidentify(): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(msg: any): void;
  error(e: Error): void;
}
