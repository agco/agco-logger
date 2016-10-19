'use strict';

const log = require('../index')({log: {level: 'debug'}});

log.debug('test debug message', {meta: true});
log.info('test info message', {meta: true});
log.warn('test warn message', {meta: true});
log.error('test error message', {meta: true});

log.profile('profileTest');

  setTimeout(function () {
    //
    // Stop profile of 'test'. Logging will now take place:
    //   "17 Jan 21:00:00 - info: test duration=1000ms"
    //
    log.profile('profileTest');
  }, 500);
