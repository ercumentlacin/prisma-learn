import { INTERNAL_SERVER_ERROR } from 'http-status';

import { HttpException } from './HttpException';

export class GeneralError extends HttpException {
  constructor(status?: number, message?: string) {
    super(status || INTERNAL_SERVER_ERROR, message || 'Internal Server Error');
  }
}
