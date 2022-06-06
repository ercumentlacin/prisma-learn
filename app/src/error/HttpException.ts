import { config } from '../config';

export class HttpException implements Error {
  public name: string = 'HttpException';

  constructor(
    public status: number,
    public message: string,
    public stack?: string
  ) {
    this.status = status;
    this.message = message;
    this.stack = config.mode === 'development' ? new Error().stack : undefined;
  }
}
