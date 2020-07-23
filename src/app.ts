import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import helmet from 'helmet';
import cors from 'cors';
import { Logger } from './utils/logger/Logger';
import { RateLimit } from './middlewares/RateLimit';
import rateLimit from 'express-rate-limit';

const logger = Logger.getLogger();
const app = express();
// we will use ingress-nginx so our data will be proxied, so he can trust it (at default he will recognize proxy and wont enable it)
app.set('trust proxy', true);
app.use(cors());
app.use(helmet());
app.use(json());
app.use(
  cookieSession({
    // disable ecnryption (JWT is already encrypted)
    signed: false,
    // will be only in https connection
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(rateLimit());

app.all('*', async (req, res, next) => {
  logger.info('asdasd');
});

export { app };
