var path = require('path');

var DEFAULT_LOG = {
    "logging": {
        "development": "/test/log",
        "stage": "/test/log",
        "production": "/test/log"
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

    if (!configs.logFile) {
        if(!this.createDirectory()) {
            console.log('log directory not created. aborting....')
            return;
        }

        this.createFile(name, DEFAULT_LOG);
    }
};

goodLogger.prototype.createDirectory = function(){


    return false;
};

goodLogger.prototype.createFile = function(name){

};

goodLogger.prototype.hasLoggingConfig = function(){

};
goodLogger.prototype.createLoggingConfig = function(){};
goodLogger.prototype.addToGitIgnore = function(){};





a = new goodLogger({'test': 'test'});

console.log(a);
