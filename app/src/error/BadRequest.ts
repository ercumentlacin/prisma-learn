import httpStatus from 'http-status';

import { HttpException } from './HttpException';

export class BadRequest extends HttpException {
  constructor(message: string, details?: unknown) {
    super(httpStatus.BAD_REQUEST, message, details);
  }
}
