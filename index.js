'use strict';

const util = require('util');
const winston = require('winston');

const format = (options) => {
  let timestamp = '';
  let level = '';
  if (options.timestamp) {
    timestamp = `${new Date().toISOString()} `;
  }
  if (options.showLevel) {
    level = `${options.level.toUpperCase()}\t`;
  }
  let outputString = options.message;
  if (options.meta && Object.keys(options.meta).length) {
    outputString += `\t${JSON.stringify(options.meta)}`;
  }
  return `${timestamp}${level}${outputString}`;
};

const Logger = function (config) {
  config.log = config.log || {};
  const logger = new winston.Logger({
    transports: [
      // we can add additional transports here to log to multiple destinations
      new winston.transports.Console({
        formatter: format,
        level: config.log.level || 'debug',
        showLevel: config.log.showLevel,
        timestamp: config.log.showTimestamps
      })
    ]
  });

  return logger;
}

module.exports = Logger;
