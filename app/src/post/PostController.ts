import { Post } from '@prisma/client';
import { RequestHandler, Router } from 'express';
import httpStatus from 'http-status';

import slugify from 'slugify';

import { catchError } from '../error';
import { authMiddleware } from '../middleware';

import { Controller, IGetUserAuthInfoRequest } from '../types';

import { createMiddleware } from './PostMiddleware';

import { PostServices } from './PostServices';

export class PostController implements Controller {
  public path = 'posts';

  public router: Router = Router();

  constructor(public postServices: PostServices) {
    this.initializeRoutes();
  }

  public initializeRoutes = () => {
    this.router.get('/all', this.getAllPosts);
    // this.router.get('/:id', this.getOnePost);
    this.router.post(
      '/create',
      authMiddleware,
      createMiddleware,
      this.createPost
    );
    // this.router.post('/login', this.loginUser);
  };

  public getAllPosts: RequestHandler = async (req, res, next) => {
    try {
      const data = await this.postServices.getAllPosts();
      res.status(httpStatus.OK).json({ data });
    } catch (error) {
      next(catchError(error));
    }
  };

  public createPost: RequestHandler = async (
    req: IGetUserAuthInfoRequest,
    res,
    next
  ) => {
    try {
      const postData: Post = req.body;
      postData.slug = slugify(postData.title);
      postData.authorId = req?.user?.id;
      const data = await this.postServices.createPost(postData);
      res.status(httpStatus.CREATED).json({ data });
    } catch (error) {
      next(catchError(error));
    }
  };
}
