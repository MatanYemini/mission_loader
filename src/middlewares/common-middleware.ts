import { Express } from 'express';
import { RateLimit } from '../utils/helpers/RateLimit';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import helmet from 'helmet';
import cors from 'cors';

export class CommonMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public async useBodyParser() {
    this.app.use(bodyParser.json());
  }

  public async useURLencoded() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  public async useCors() {
    this.app.use(cors());
  }

  public async useHelmet() {
    this.app.use(helmet());
  }

  public async useCookieSesiion() {
    this.app.use(
      cookieSession({
        // disable ecnryption (JWT is already encrypted)
        signed: false,
        // will be only in https connection
        secure: process.env.NODE_ENV !== 'test',
      })
    );
  }

  public async useProxy() {
    // we will use ingress-nginx so our data will be proxied, so he can trust it (at default he will recognize proxy and wont enable it)
    this.app.set('trust proxy', true);
  }

  public async useRateLimit() {
    this.app.use(RateLimit);
  }
}
