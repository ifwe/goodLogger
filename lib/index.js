var path = require('path');
var fs = require('fs');

var DEFAULT_LOG = {
    "logging": {
        "development": "/log/error_log",
        "stage": "/log/error_log",
        "production": "/log/error_log"
    }
};

// TODO: find another way in node to get root without
// using $(git rev-parse --show-toplevel)
var ROOT = process.cwd();

// {config file}
    // passed in file should contain "logging" property
        // logging property should have configs for dev, stage, prod
    // no passed in file
        // create log directory
        // create logging.json file
        // add to gitignore file
        // add in configs for dev, stage, prod
var goodLogger = function(configs) {
    var configs = configs || {};

    this.root    = configs.root || ROOT;
    this.logFile = configs.logFile || null;
    this.logDir = configs.logDir || null;

    if (!configs.logFile) {
        path = this.createDirectory();
        this.createFile(path + "/error_log", DEFAULT_LOG);
    }
};

goodLogger.prototype.createDirectory = function(){
    var path = this.root + '/log/';

    try {
        fs.mkdir(path);
    } catch (e) {
        // do something with this
        console.log('exists');
    }
    return path;
};

goodLogger.prototype.createFile = function(file, configs){
// touch the file
// write defaults to new log file
 fs.writeFile(file, 'Just now, we have created this file', function (err) {
        // if (err) throw err;
        console.log('It\'s saved! in same location.');
    });
};

goodLogger.prototype.hasLoggingConfig = function(){

};
goodLogger.prototype.createLoggingConfig = function(){};
goodLogger.prototype.addToGitIgnore = function(){};





a = new goodLogger();

