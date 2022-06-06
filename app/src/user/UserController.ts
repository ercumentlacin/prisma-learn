import { RequestHandler, Router } from 'express';
import httpStatus from 'http-status';

import { UserServices } from './UserServices';

export class UserController {
  public path = 'user';

  public router: Router = Router();

  constructor(public userServices: UserServices) {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/all', this.getAllUsers);
  }

  getAllUsers: RequestHandler = async (req, res, next) => {
    try {
      const data = await this.userServices.getAllUsers();
      res.status(httpStatus.OK).json({ data });
    } catch (error) {
      next(error);
    }
  };
}
