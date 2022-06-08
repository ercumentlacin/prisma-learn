import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { prismaInstance } from '../utils/connectPrisma';
import { ServerError } from '../error';
import { UserController, UserServices } from '../user';
import { PostController, PostServices } from '../post';

export async function getProfiles(_req: Request, res: Response) {
  try {
    const data = await prismaInstance.profile.findMany();
    res.status(httpStatus.OK).json({ data });
  } catch (error: unknown) {
    throw new ServerError();
  }
}

export const routes = [
  new UserController(new UserServices()),
  new PostController(new PostServices()),
];
