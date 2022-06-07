import { RequestHandler } from 'express';
import Joi from 'joi';

import { BadRequest } from '../error';

export const createUserMiddleware = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(3),
});

export const signupMiddleware: RequestHandler = (req, res, next) => {
  const data = createUserMiddleware.validate(req.body, {
    presence: 'required',
  });
  if (data.error) {
    const formatted = data.error.details.map((error) => error.message);
    throw new BadRequest(formatted.join(', '), data.error.details);
  }
  next();
};
