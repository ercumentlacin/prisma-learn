import { RequestHandler, Router } from 'express';
import httpStatus from 'http-status';

import { catchError } from '../error';

import { signupMiddleware } from './UserMiddlewares';

import { UserServices } from './UserServices';

export class UserController {
  public path = 'user';

  public router: Router = Router();

  constructor(public userServices: UserServices) {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/all', this.getAllUsers);
    this.router.get('/:email', this.getOneUser);
    this.router.post('/create', signupMiddleware, this.createUser);
  }

  getAllUsers: RequestHandler = async (req, res) => {
    try {
      const data = await this.userServices.getAllUsers();
      res.status(httpStatus.OK).json({ data });
    } catch (error) {
      catchError(error);
    }
  };

  getOneUser: RequestHandler = async (req, res) => {
    try {
      const data = await this.userServices.getOneUser(req.params.email);
      res.status(httpStatus.OK).json({ data });
    } catch (error) {
      catchError(error);
    }
  };

  createUser: RequestHandler = async (req, res) => {
    try {
      const data = await this.userServices.createUser(req.body);
      res.status(httpStatus.CREATED).json({ data });
    } catch (error) {
      catchError(error);
    }
  };
}
