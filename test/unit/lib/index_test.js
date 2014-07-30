var goodLogger = require(LIB_DIR);
var touch = require('touch');
var fs = require('fs');

describe('goodLogger', function() {
    beforeEach(function(){
        this.logger = goodLogger();
        this.fs = sinnon.spy();
    });

    afterEach(function(){
        this.logger = {};
    });

    it('returns goodLogger', function(){
        this.logger.should.be.a('object');
        this.logger.should.have.property('info');
        this.logger.should.have.property('error');
    });

    it('creates file without a path argument', function() {

    });

    it('creates file with a path argument', function() {});

});
