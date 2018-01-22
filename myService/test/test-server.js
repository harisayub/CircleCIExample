var error = require('util').error;

//var chai = require('chai');
//var chaiHttp = require('chai-http');
var handler = require('../handler');
//var should = chai.should();


var assert = require('assert');
//chai.use(chaiHttp);

describe('Strings', function() {
    it('should flip the tring "keyboard"', function(done) {
          
      assert.equal(handler.flip("keyboard"), "draobyek");
      // Invoke done when the test is complete.
      done();
      });

      it('should return error on passing 1', function(done) {
          
        assert.equal(handler.flip(1), error);
        // Invoke done when the test is complete.
        done();
        });

  });