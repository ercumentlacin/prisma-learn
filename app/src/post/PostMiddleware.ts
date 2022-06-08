import { Post } from '@prisma/client';
import Joi from 'joi';

import { validateSchema } from '../utils/validateSchema';

const postSchema = Joi.object<Post>().keys({
  title: Joi.string().required(),
  body: Joi.string().required(),
});

export const createMiddleware = validateSchema(postSchema);
