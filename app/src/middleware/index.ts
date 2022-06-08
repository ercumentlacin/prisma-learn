import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export { errorMiddleware } from './error.middleware';
export { authMiddleware } from './authMiddleware';

export function middlewareInit(app: Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan('dev'));
}
