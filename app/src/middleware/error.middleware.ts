import httpStatus from 'http-status';

import { ErrorRequest, HttpException } from '../error';

export const errorMiddleware: ErrorRequest = (err, req, res) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
    });
  }
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: 'Internal Server Error',
  });
};
