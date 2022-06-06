import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import httpStatus from 'http-status';

import { getProfiles } from './routes';
import { NotFound } from './error';
import { errorMiddleware } from './middleware';

class App {
  public app: Application = express();

  public router: Router = Router();

  constructor() {
    this.middlewareInit();
    this.initializeRoutes();
  }

  middlewareInit() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  initializeRoutes() {
    const api = '/api/v1';
    this.router.get(`${api}/profiles`, getProfiles);
    this.app.get('/', (req: Request, res: Response) => {
      res.status(httpStatus.OK).json({ message: 'Hello World!' });
    });

    this.app.use((req: Request, res: Response, next: NextFunction) => {
      const err = new NotFound(
        `The requested URL ${req.originalUrl} was not found on this server.`
      );
      next(err);
    });

    this.app.use(errorMiddleware);
  }
}

export const { app, router } = new App();
