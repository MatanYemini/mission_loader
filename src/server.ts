import express from 'express';
import { Express } from 'express';
import { Logger } from './utils/logger/Logger';
import { InitializeMiddleWare } from './core/InitializeMiddleware';
import Connect from './core/connect';
const serverConfig = require('./configs/ServerConfig.json');
const dbConfig = require('./configs/DBConfig.json');

export async function server() {
  const app: Express = express();

  const host = process.env.PORT || serverConfig.host;
  const port = process.env.HOST || serverConfig.port;

  const logger = Logger.getLogger();
  const db = process.env.MONGO_URI || dbConfig.URI;

  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await Connect({ db });

  app.all('*', async (req, res, next) => {
    logger.info('asdasd');
  });

  app.listen(port, host, () => {
    console.log(`Server started listening at ${host} on ${port} port`);
  });
}
