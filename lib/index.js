var path = require('path');
var fs = require('fs');
var winston = require('winston');
var touch = require("touch")

var DEFAULT_PATH = process.cwd() + "/log/error_log";

var goodLogger = function(path, winston) {
    var logFile = path || DEFAULT_PATH;

    // create default dir and file
    createLogFile(logFile);

    return createWinston(logFile);
};

function createLogFile(logFile) {
    var dir = path.dirname(logFile);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return touch.sync(logFile);
};

function createWinston(logFile) {


    return new (winston.Logger)({
      transports: [
        new (winston.transports.File)({
            filename: logFile,
            colors: {
                info: 'blue'
            }
        }),
      ]
    });
};

log = goodLogger();
log.on('info', function (err) { console.log('adskjhflksajdf') });
log.info('test');

