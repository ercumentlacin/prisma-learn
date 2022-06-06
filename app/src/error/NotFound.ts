import { HttpException } from './HttpException';
import httpStatus from 'http-status';

export class NotFound extends HttpException {
  constructor(message: string) {
    console.log(httpStatus.NOT_FOUND);
    super(httpStatus.NOT_FOUND, message);
  }
}
