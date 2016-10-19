'use strict';

const util = require('util');
const winston = require('winston');

const format = (options) => {
  const timestamp = new Date();
  let outputString = options.message;
  if (options.meta && Object.keys(options.meta).length) {
    outputString += `\t${JSON.stringify(options.meta)}`;
  }
  return `${timestamp.toISOString()} ${options.level.toUpperCase()} ${outputString}`;
};

const Logger = function (config) {
  config.log = config.log || {};

  const logger = new winston.Logger({
    transports: [
      // we can add additional transports here to log to multiple destinations
      new winston.transports.Console({
        formatter: format,
        level: config.log.level || 'debug'
      })
    ]
  });

  return logger;
}

module.exports = Logger;
