import mongoose from 'mongoose';
import { Logger } from '../utils/logger/Logger';

type DBInput = {
  db: string;
};

export default async ({ db }: DBInput) => {
  const logger = Logger.getLogger();
  const connect = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      logger.info('Connected to DB');
    } catch (error) {
      logger.error('Could not connect to DB');

      //return process.exit(1);
    }
  };

  await connect();
  mongoose.connection.on('disconnect', connect);
};
