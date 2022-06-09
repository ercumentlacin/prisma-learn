import { RequestHandler } from 'express';
import httpStatus from 'http-status';

import { catchError } from '../error';
import { PostServices } from '../post';
import { IGetUserAuthInfoRequest } from '../types';

export const updatePostMiddleware: RequestHandler = async (
  req: IGetUserAuthInfoRequest,
  res,
  next
) => {
  try {
    const userId = req?.user?.id;
    const postId = req.params.id;
    const postServices = new PostServices();
    const post = await postServices.getOnePost(postId);

    if (!post) {
      return res.status(httpStatus.NOT_FOUND).json({ msg: 'Post not found' });
    }

    if (post.authorId !== userId) {
      return res.status(httpStatus.UNAUTHORIZED).json({ msg: 'Unauthorized' });
    }

    return next();
  } catch (error) {
    return next(catchError(error));
  }
};
