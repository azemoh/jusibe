
var request = require('request');
var baseUrl = 'https://jusibe.com/smsapi';

/**
 * Create new Jusibe instances
 * @param {String} publicKey Jusibe Public Key
 * @param {String} accessToken Jusibe Access Token
 * @return {Jusibe}
 */
function Jusibe(publicKey, accessToken) {

  if (publicKey === undefined || accessToken === undefined) {
    throw new Error('Provide both publicKey and accessToken');
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

  request.get([baseUrl, '/send_sms/'].join(''),
    options, function (error, response, body) {
      return handleResponse(error, response, body, callback);
    });
};

/**
 * Get Available Jusibe Credits
 * @function
 * @param {Funtion} callback Callback function
 * @return {Function}
 */
Jusibe.prototype.getCredits = function (callback) {

  request.get([baseUrl, '/get_credits/'].join(''),
    this.options, function (error, response, body) {
      return handleResponse(error, response, body, callback);
    });
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

  request.get([baseUrl, '/delivery_status/'].join(''),
    options, function (error, response, body) {
      return handleResponse(error, response, body, callback);
    });
};



// Helpers
/**
 * Response handler
 * @function
 * @param {Object} error Error Object
 * @param {Object} response Response Object
 * @param {Object} body
 * @param {Function} callback Callback function.
 * @return {Function}
 */
function handleResponse(error, response, body, callback) {
  // Failure
  if (response.statusCode !== 200) {
    error = body;
    body = null;
  }

  return callback(error, response);
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
