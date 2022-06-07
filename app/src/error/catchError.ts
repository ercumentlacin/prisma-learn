import { GeneralError } from './GeneralError';
import { HttpException } from './HttpException';

export function catchError(error: unknown) {
  if (error instanceof HttpException) {
    return error;
  }

  if (error instanceof GeneralError) {
    return new GeneralError(error.status, error.message);
  }
  return new GeneralError(500, 'Internal Server Error');
}
