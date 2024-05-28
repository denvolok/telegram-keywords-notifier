import winston from "winston";

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  winston.format.printf((info) => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
  }),
);

const logger = winston.createLogger({
  level: "info",
  format,
  transports: [new winston.transports.Console({ format })],
});

export default logger;
