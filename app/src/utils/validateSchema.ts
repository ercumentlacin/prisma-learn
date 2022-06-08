import { RequestHandler } from 'express';
import { ObjectSchema } from 'joi';

import { BadRequest } from '../error';

export const validateSchema =
  (schema: ObjectSchema): RequestHandler =>
  (req, res, next) => {
    const data = schema.validate(req.body, {
      presence: 'required',
    });
    if (data.error) {
      const formatted = data.error.details.map((error) => error.message);
      throw new BadRequest(formatted.join(', '), data.error.details);
    }
    next();
  };
