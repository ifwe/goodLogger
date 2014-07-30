var path = require('path');
var fs = require('fs');
var winston = require('winston');

var DEFAULT_LOG = {
    "logging": {
        "development": "/log/error_log",
        "stage": "/log/error_log",
        "production": "/log/error_log"
    }
};

var ROOT = process.cwd();

var goodLogger = function(configs) {
    var configs = configs || {};

    this.root    = configs.root || ROOT;
    this.logFile = configs.logFile || null;
    this.logDir = configs.logDir || null;
    this.logger = null;
    this.env = configs.environment || 'development';

    // create default dir and file
    if (!configs.logFile) {
        this.logFile = this.root + DEFAULT_LOG['logging'][this.env];
        this.createFile(this.logFile, DEFAULT_LOG);
    }

    if (this.hasLoggingConfig()) {

    }
};

goodLogger.prototype.createDirectory = function() {
    return fs.mkdir(this.root + '/log/');
};

goodLogger.prototype.createFile = function(file, configs) {
    return fs.writeFile(
            file,
            JSON.stringify(configs, null, 4)
        );
};

goodLogger.prototype.hasLoggingConfig = function(){
    var config;

    fs.readFile(this.logFile, 'utf-8', function (err, data) {
      //if (err) throw err;
      if(data) {
        config = JSON.parse(data);
      }

      console.log(typeof config);

      return config.hasOwnProperty('logging');
    });

    console.log(config);

    if(!config) {
        //console.log('not config');
        return false;
    }

    config = JSON.parse(config);
    //console.log('json parse', config);
    ;
};

goodLogger.prototype.setLog = function() {
    console.log('got here');

    return new (winston.Logger)({
      transports: [
        new (winston.transports.File)({
            filename: this.file
        }),
      ]
    });
};

// log.info ('stuff should go to the file and to the console')
goodLogger.prototype.info = function() {

};

// log.exception('stuff should be in red with full stacktrace')
goodLogger.prototype.exception = function() {

};

// log.debug('stuff should have statement with full stacktrace')
goodLogger.prototype.debug = function() {

};






a = new goodLogger();

