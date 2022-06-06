import { Request, Response, Router } from 'express';
import httpStatus from 'http-status';
import { prismaInstance } from '../utils/connectPrisma';

export async function getProfiles(req: Request, res: Response) {
  try {
    const data = await prismaInstance.profile.findMany();
    res.status(httpStatus.OK).json({ data });
  } catch (error: any) {
    throw Error(error?.message || 'Internal server error');
  }
}
