import httpStatus from 'http-status';
import { HttpException } from './HttpException';

export class ServerError extends HttpException {
  constructor(message: string) {
    super(httpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
