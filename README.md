# goodLogger - NPM Module

Simple, easily configurable logging module for system/application logging.
It uses all of the conveniences of winston.


## Install
    npm install goodLogger


## Usage
    // Load the module
    var goodLogger = require('goodLogger');

    // Create your logger instance
    var log = new goodLogger(); // log file is automatically created for you
    // or
    var log = new goodLogger('my/file/path/foo.log');

    // logging
    log.info('my logging message')
    log.error(new Error().stack)
