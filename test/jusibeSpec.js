
var chai = require('chai');
var assert = chai.assert;

var Jusibe = require('../index.js');

describe('Jusibe', function () {
  var jusibe = new Jusibe('public_key', 'access_token');

  it('Can create Jusibe instance', function () {
    assert(typeof jusibe === 'object');
    assert(jusibe instanceof Jusibe);
  });

  it('Has default options', function () {
    assert(typeof jusibe.options === 'object');
  });

  it('Has auth option key', function () {
    assert(typeof jusibe.options.auth === 'object');
    assert(jusibe.options.auth.user === 'public_key');
    assert(jusibe.options.auth.pass === 'access_token');
  });

});
