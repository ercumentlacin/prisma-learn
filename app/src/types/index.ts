import { Request, Router } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export type Controller = {
  path: string;
  router: Router;
};

export interface IGetUserAuthInfoRequest extends Request {
  user?: JwtPayload;
}
