import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';

import { IGetUserAuthInfoRequest } from '@/types';

export const authMiddleware: RequestHandler = (
  req: IGetUserAuthInfoRequest,
  res,
  next
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res
      .status(httpStatus.UNAUTHORIZED)
      .json({ msg: 'No token, authorization denied' });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);
      req.user = decoded as jwt.JwtPayload;
      next();
    } catch (error) {
      res.status(httpStatus.UNAUTHORIZED).json({ msg: 'Token is not valid' });
    }
  }
};
