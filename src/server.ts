import express from 'express';
import { Express } from 'express';
import { Logger } from './utils/logger/Logger';
import { InitializeMiddleWare } from './core/InitializeMiddleware';
const serverConfig = require('./configs/ServerConfig.json');

export async function server() {
  const app: Express = express();

  const host = serverConfig.host;
  const port = serverConfig.port;
  const logger = Logger.getLogger();

  await InitializeMiddleWare.InitializeCommonMiddleware(app);

  app.all('*', async (req, res, next) => {
    logger.info('asdasd');
  });

  app.listen(port, host, () => {
    console.log(`Server started listening at ${host} on ${port} port`);
  });
}
