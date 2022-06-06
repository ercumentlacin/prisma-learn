export class HttpException implements Error {
  public name = 'HttpException';

  constructor(
    public status: number,
    public message: string,
    public stack?: string
  ) {
    this.status = status;
    this.message = message;
    this.stack = stack;
  }
}
