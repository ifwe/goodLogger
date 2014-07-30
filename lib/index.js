var path = require('path');
var fs = require('fs');
var winston = require('winston');
var touch = require("touch");

var DEFAULT_PATH = process.cwd() + "/log/error_log";

var goodLogger = function(path, overrides) {
    var logFile = path || DEFAULT_PATH;

    createLogFile(logFile);

    return createWinston(logFile, overrides);
};

function createLogFile(logFile) {
    var dir = path.dirname(logFile);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return touch.sync(logFile);
};

function createWinston(logFile, overrides) {
    return new (winston.Logger)({
      transports: [
        new (winston.transports.File)(
            overrides || {
                filename: logFile,
                json: false,
                colorize: true
            }
        ),
      ]
    });
};
