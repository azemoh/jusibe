var request = require('request');
var baseUrl = 'https://jusibe.com/smsapi/';

/**
 * Create new Jusibe instances
 * @param {String} publicKey Jusibe Public Key
 * @param {String} accessToken Jusibe Access Token
 * @return {Jusibe}
 */
function Jusibe(publicKey, accessToken) {
  if (!(publicKey || accessToken)) {
    throw new Error('Provide both Jusibe PUBLIC_KEY and ACCESS_TOKEN');
  }

  if (!(this instanceof Jusibe)) {
    return new Jusibe(publicKey, accessToken);
  }

  this.options = {
    auth: {
      user: publicKey,
      pass: accessToken
    },
    json: true
  };
}

var methods = {
  /**
   * Send SMS
   * @function
   * @param {Object} payload sms Object
   * @return {Promise}
   */
  sendSMS(payload) {
    var options = Object.assign({ qs: payload, method: 'POST' }, this.options);
    return this._makeRequest('send_sms/', options);
  },

  /**
   * Get Available Jusibe Credits
   * @function
   * @return {Promise}
   */
  getCredits() {
    return this._makeRequest('get_credits/', this.options);
  },

  /**
   * Check the delivery status of SMS sent
   * @function
   * @param {String} messageID ID of the message
   * @return {Promise}
   */
  deliveryStatus(messageID) {
    var options = Object.assign({ qs: {
      message_id: messageID
    } }, this.options);

    return this._makeRequest('delivery_status/', options);
  },

  /**
   * Make HTTP request
   * @function
   * @param {String} url Request URL
   * @param {Object} options Request options
   * @return {Promise}
   */
  _makeRequest(url, options) {
    return new Promise((resolve, reject) => {
      request(`${baseUrl}${url}`, options, (error, response, body) => {
        if (response.statusCode === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      });
    });
  }
};

Object.assign(Jusibe.prototype, methods);
module.exports = Jusibe;
