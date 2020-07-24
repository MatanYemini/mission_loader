import { Express } from 'express';
import { CommonMiddleware } from '../middlewares/common-middleware';

export class InitializeMiddleWare {
  public static async InitializeCommonMiddleware(app: Express) {
    let middleware = new CommonMiddleware(app);

    await middleware.useBodyParser();
    await middleware.useURLencoded();
    await middleware.useCors();
    await middleware.useHelmet();
    await middleware.useProxy();
    await middleware.useRateLimit();
    await middleware.useCookieSesiion();
  }
}
