import { GeneralError } from './GeneralError';

export function catchError(error: unknown) {
  if (error instanceof GeneralError) {
    throw new GeneralError(error.status, error.message);
  }
  throw new GeneralError(500, 'Internal Server Error');
}
