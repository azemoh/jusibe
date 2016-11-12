
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

  this.options = {
    auth: {
      user: publicKey,
      pass: accessToken
    },
    json: true
  };
}

/**
 * Send SMS
 * @function
 * @param {Object} payload sms Object
 * @param {Function} callback Callback function
 * @return {Function}
 */
Jusibe.prototype.sendSMS = function (payload, callback) {
  var options = Jusibe.merge(this.options, { qs: payload });
  return Jusibe.makeRequest('send_sms/', options, callback)
};

/**
 * Get Available Jusibe Credits
 * @function
 * @param {Funtion} callback Callback function
 * @return {Function}
 */
Jusibe.prototype.getCredits = function (callback) {
  return Jusibe.makeRequest('get_credits/', this.options, callback)
};

/**
 * Check the delivery status of SMS sent
 * @function
 * @param {String} messageID ID of the message
 * @param {Function} callback Callback function
 * @return {Function}
 */
Jusibe.prototype.deliveryStatus = function (messageID, callback) {
  var options = Jusibe.merge(this.options, { qs: { message_id: messageID } });
  return Jusibe.makeRequest('delivery_status/', options, callback)
};

/**
 * Make HTTP request
 * @function
 * @param {String} url Request URL
 * @param {Object} options Request options
 * @param {Function} callback Callback function
 * @return {Function}
 */
Jusibe.makeRequest = function (url, options, callback) {
  request([baseUrl, url].join(''), options, function (error, response, body) {
    if (response.statusCode !== 200) {
      error = body;
      body = null;
    }

    return callback(error, response);
  });
}

/**
 * Merge properties in two Objects
 * @function
 * @param {Object} src Source object
 * @param {Object} dest Destination object
 * @return {Object}
 */
Jusibe.merge = function (src, dest) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      dest[key] = src[key];
    }
  }

  return dest;
};

module.exports = Jusibe;
