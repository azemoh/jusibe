
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var Jusibe = require('../index.js');

describe('Jusibe', function () {
  var jusibe = new Jusibe('public_key', 'access_token');

  it('Should throw an error if no key is provided', function () {
    expect(function () {
      new Jusibe();
    }).to.throw('Provide both publicKey and accessToken');
  });

  it('Can create Jusibe instance', function () {
    assert(typeof jusibe === 'object');
    assert(jusibe instanceof Jusibe);
  });

  it('Has default options', function () {
    assert(typeof jusibe.options === 'object');
  });

  it('Has auth option keys', function () {
    assert(typeof jusibe.options.auth === 'object');
    assert(jusibe.options.auth.user === 'public_key');
    assert(jusibe.options.auth.pass === 'access_token');
  });

  it('Has a sendSMS function', function () {
    expect(jusibe['sendSMS']).to.be.a('function');
  });

  it('Has a getCredits function', function () {
    expect(jusibe['getCredits']).to.be.a('function');
  });

  it('Has a deliveryStatus function', function () {
    expect(jusibe['deliveryStatus']).to.be.a('function');
  });
});
