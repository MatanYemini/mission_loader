import { Response } from 'express';
import { Logger } from './utils/logger/Logger';
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req: Express.Request, res: Response) => {
  let logger = Logger.getLogger();
  logger.info('asdsad');
  logger.error('asdasds');
  logger.info('kkkj');
  res.send('adasd');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
