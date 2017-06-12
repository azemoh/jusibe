const expect = require('chai').expect;
const Jusibe = require('../index');
var record = require('./record');

const public_key = process.env.JUSIBE_PUBLIC_KEY;
const access_token = process.env.JUSIBE_ACCESS_TOKEN;
const phoneNumber = process.env.PHONE_NUMBER;

const jusibeClient = new Jusibe(public_key, access_token);

const payload = {
  to: phoneNumber,
  from: 'Jusibe Joe',
  message: 'Hello From the new APIIIII 😎\nI must have called a thousand times.'
};

describe('Jusibe', () => {
  const jusibe = new Jusibe('public_key', 'access_token');

  it('Should throw an error if no key is provided', () => {
    expect(() => {
      new Jusibe();
    }).to.throw('Provide both Jusibe PUBLIC_KEY and ACCESS_TOKEN');
  });

  it('Can create Jusibe instance', () => {
    expect(jusibe).to.be.a('object');
    expect(jusibe).to.be.an.instanceof(Jusibe);
    expect(Jusibe('public_key', 'access_token')).to.be.an.instanceof(Jusibe);
  });

  it('Has default options', () => {
    expect(jusibe.options).to.be.a('object');
  });

  it('Has auth option keys', () => {
    expect(jusibe.options.auth).to.be.a('object');
    expect(jusibe.options.auth.user).to.equal('public_key');
    expect(jusibe.options.auth.pass).to.equal('access_token');
  });
});

describe('Jusibe API', () => {
  var recorder = record('smsapi');
  before(recorder.before);

  describe('#getCredits: can check SMS credits', () => {
    it('succeeds', () =>
      jusibeClient.getCredits()
        .then(res => {
          expect(res.body.sms_credits).to.exist;
          expect(res.statusCode).to.equal(200);
        }));
  });

  describe('#sendSMS', () => {
    it('succeeds', () =>
      jusibeClient.sendSMS(payload)
        .then(res => {
          expect(res.body.status).to.equal('Sent');
          expect(res.statusCode).to.equal(200);
        }));
  });

  describe('#deliveryStatus: can check the delivery status of a message', () => {
    it('succeeds', () =>
      jusibeClient.deliveryStatus('eq16v6vd26')
        .then(res => {
          expect(res.body.status).to.equal('Delivered');
          expect(res.statusCode).to.equal(200);
        }));

    it('Invalid message ID for an invalid id', () =>
      jusibeClient.deliveryStatus('eq166vd26')
        .catch((err) => {
          expect(err.body.invalid_message_id).to.equal('Invalid message ID');
        }));
  });

  after(recorder.after);
});
