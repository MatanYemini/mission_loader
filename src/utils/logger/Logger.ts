import winston from 'winston';

const LOG_DIR = '../../../logs/log';

export class Logger {
  // Singelton
  private _logger: winston.Logger;
  private static instance: Logger;

  private constructor() {
    this._logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.simple()
          ),
          level: 'debug',
        }),
        new (require('winston-daily-rotate-file'))({
          filename: `${LOG_DIR}/-results.log`,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
          ),
        }),
        new winston.transports.File({
          filename: 'log/error.log',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple()
          ),
        }),
        new winston.transports.File({
          filename: 'log/info.log',
          level: 'info',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple()
          ),
        }),
      ],
    });
  }

  public static getLoggerInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public static getLogger() {
    let logger = Logger.getLoggerInstance();
    return logger._logger;
  }
}
