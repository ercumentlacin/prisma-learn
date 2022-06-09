import { Post } from '@prisma/client';
import Joi from 'joi';

import { validateSchema } from '../utils/validateSchema';

const postSchema = Joi.object<Post>().keys({
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const createMiddlewareSchema = validateSchema(postSchema);

const updatePostSchema = Joi.object<Post>().keys({
  title: Joi.string(),
  body: Joi.string(),
});

export const updatePostMiddlewareSchema = validateSchema(updatePostSchema);
