var fs = require('fs');
var goodLogger = require(LIB_DIR);
var path = require('path');
var touch = require('touch');

describe('goodLogger', function() {
    beforeEach(function(){
        this.logger = goodLogger();

        fs.existsSync = sinon.spy();
        fs.mkdirSync = sinon.spy();
        touch.sync = sinon.spy();
        path.dirname = sinon.spy();
    });

    afterEach(function() {
        this.logger = {};
        fs.rmdir(LIB_DIR + "/log/error_log");
    });

    it('returns winston instance', function() {
        this.logger.should.be.a('object');
        this.logger.should.have.property('info');
        this.logger.should.have.property('error');
    });

    it('checks to see if directory exists', function() {
        path.dirname.called.should.be.true;
        fs.existsSync.called.should.be.true;
        touch.sync.called.should.be.true;
    });

    it('creates a directory and file without a path argument', function() {
        this.logger.transports.file.filename.should.equal('error_log');
        this.logger.transports.file.dirname.should.contain('/log');
    });

    it('creates file with a path argument', function() {
        var mockPath = new goodLogger('/foo/bar/baz_log');

        mockPath.transports.file.filename.should.equal('baz_log');
        mockPath.transports.file.dirname.should.contain('bar');

    });

});
