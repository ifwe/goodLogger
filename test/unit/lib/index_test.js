var fs = require('fs');
var goodLogger = require(LIB_DIR);
var path = require('path');
var touch = require('touch');

describe('goodLogger', function() {
    beforeEach(function(){
        this.logger = goodLogger();

        sinon.spy(fs, 'existsSync');
        sinon.spy(fs, 'mkdirSync');
        sinon.spy(touch, 'sync');
        sinon.spy(path, 'dirname');
    });

    afterEach(function() {
        this.logger = {};

        fs.existsSync.restore();
        fs.mkdirSync.restore();
        touch.sync.restore();
        path.dirname.restore();

        fs.rmdir(LIB_DIR + "/log/error_log");
    });

    it('returns winston instance', function() {
        this.logger.should.be.a('object');
        this.logger.should.have.property('info');
        this.logger.should.have.property('error');
    });

    it('checks to see if directory exists', function() {
        path.dirname.calledOnce;
        fs.existsSync.called.calledOnce;
        fs.mkdirSync.called.calledOnce;
        touch.sync.called.calledOnce;
    });

    it('creates a directory and file without a path argument', function() {
        this.logger.transports.file.filename.should.equal('error_log');
        this.logger.transports.file.dirname.should.contain('/log');
    });

    it('creates file with a path argument', function() {
        var mockPath = new goodLogger(LIB_DIR + '/foo/bar/baz_log');

        mockPath.transports.file.filename.should.equal('baz_log');
        mockPath.transports.file.dirname.should.contain('foo/bar');
    });

    it('should log info', function() {
        var mockPath = new goodLogger(LIB_DIR + '/foo/bar/baz_log');

        mockPath.transports.file.filename.should.equal('baz_log');
        mockPath.transports.file.dirname.should.contain('foo/bar');
    });

    it('creates file with a path argument', function() {
        var mockPath = new goodLogger(LIB_DIR + '/foo/bar/baz_log');

        mockPath.transports.file.filename.should.equal('baz_log');
        mockPath.transports.file.dirname.should.contain('foo/bar');
    });

});
