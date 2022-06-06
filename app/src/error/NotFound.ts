import httpStatus from 'http-status';

import { HttpException } from './HttpException';

export class NotFound extends HttpException {
  constructor(message: string) {
    super(httpStatus.NOT_FOUND, message);
  }
}
