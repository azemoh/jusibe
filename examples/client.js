var Jusibe = require('../index.js');

var publicKey = 'xxx000xxxxx000xxxxx000xxxx';
var accessToken = 'xxx000xxxxx000xxxxx000xxxx';

var jusibe = new Jusibe(publicKey, accessToken);

jusibe.getCredits(function (err, res) {
    if (res.statusCode === 200) console.log(res.body);
    else console.log(err);
  });

var payload = {
  to: '080XXXXXXXX',
  from: 'Jusibe Joe',
  message: 'Hello From the other side 😎\nI must have called a thousand times.'
};

jusibe.sendSMS(payload, function (err, res) {
    if (res.statusCode === 200) {
      console.log(res.body);

      jusibe.deliveryStatus(res.body.message_id, function (err, res) {
        if (res.statusCode === 200) console.log(res.body);
        else console.log(err);
      });

    }
    else console.log(err);
  });

jusibe.deliveryStatus('eq16v6vd26', function (err, res) {
    if (res.statusCode === 200) console.log(res.body);
    else console.log(err);
  });
