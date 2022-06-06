import { NextFunction, Request, Response } from 'express';

import { HttpException } from './HttpException';

export type ErrorRequest = (
  err: unknown | HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => void;
