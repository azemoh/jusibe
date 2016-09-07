
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
    expect(jusibe).to.be.a('object');
    assert(jusibe instanceof Jusibe);
  });

  it('Has default options', function () {
    expect(jusibe.options).to.be.a('object');
  });

  it('Has auth option keys', function () {
    expect(jusibe.options.auth).to.be.a('object');
    assert(jusibe.options.auth.user === 'public_key');
    assert(jusibe.options.auth.pass === 'access_token');
  });
});

describe('Jusibe instance methods', function () {
  it('Has a sendSMS function', function () {
    expect(Jusibe.prototype['sendSMS']).to.be.a('function');
  });

  it('Has a getCredits function', function () {
    expect(Jusibe.prototype['getCredits']).to.be.a('function');
  });

  it('Has a deliveryStatus function', function () {
    expect(Jusibe.prototype['deliveryStatus']).to.be.a('function');
  });
});

describe('Jusibe.merge', function () {
  it('Has a merge function', function () {
    expect(Jusibe['merge']).to.be.a('function');
  });

  it('Merges 2 objects', function () {
    var options = {
      auth: {
        user: 'publicKey',
        pass: 'accessToken'
      },
      json: true
    };

    var result = Jusibe.merge(options, { qs: { message_id: "dhwbewu3"} });

    expect(result.auth).not.to.be.null
    expect(result.json).not.to.be.null
    expect(result.qs).not.to.be.null
  });
});
