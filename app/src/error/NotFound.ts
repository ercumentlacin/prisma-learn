import httpStatus from 'http-status';

import { HttpException } from './HttpException';

export class NotFound extends HttpException {
  constructor(message: string) {
    console.log(httpStatus.NOT_FOUND);
    super(httpStatus.NOT_FOUND, message);
  }
}
