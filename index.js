
var request = require('request');
var baseUrl = 'https://jusibe.com/smsapi';

/**
 * Create new Jusibe instances
 * @param {String} publicKey Jusibe Public Key
 * @param {String} accessToken Jusibe Access Token
 * return {Jusibe}
 */
module.exports = function (publicKey, accessToken) {

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

  /**
   * Send SMS
   * @function
   * @param {Object} payload sms Object
   * @param {Function} callback Callback function
   * @return {Function}
   */
  this.sendSMS = function (payload, callback) {
    var options = Object.merge(this.options, { qs: payload });

    request.get([baseUrl, '/send_sms/'].join(''),
      options, function (error, responce, body) {
        if (callback) {

          // Failure
          if (error && responce.statusCode !== 200) {
            error = body;
            body = null;
          }

          return callback(error, body);
        }
      });
  };

  /**
   * Get Available Jusibe Credits
   * @function
   * @param {Funtion} callback Callback function
   * @return {Function}
   */
  this.getCredits = function (callback) {

    request.get([baseUrl, '/get_credits/'].join(''),
      this.options, function (error, responce, body) {

        if (callback) {

          // Failure
          if (error && responce.statusCode !== 200) {
            error = body;
            body = null;
          }

          return callback(error, body);
        }
      });

  };

  /**
   * Check the delivery status of SMS sent
   * @function
   * @param {String} messageID ID of the message
   * @param {Function} callback Callback function
   * @return {Function}
   */
  this.deliveryStatus = function (messageID, callback) {

    var options = Object.merge(this.options, { qs: { message_id: messageID } });

    request.get([baseUrl, '/delivery_status/'].join(''),
      options, function (error, responce, body) {

        if (callback) {

          // Failure
          if (error && responce.statusCode !== 200) {
            error = body;
            body = null;
          }

          return callback(error, body);
        }
      });
  };

};

Object.merge = function (src, dest) {
  for (var key in src) {
    dest[key] = src[key];
  }

  return dest;
};
