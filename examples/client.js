var Jusibe = require('../index.js');

var publicKey = 'xxx000xxxxx000xxxxx000xxxx';
var accessToken = 'xxx000xxxxx000xxxxx000xxxx';

var jusibe = new Jusibe(publicKey, accessToken);

jusibe.getCredits(function (err, body) {
    if (err) console.log('Error: ' + err);
    else console.log(body);
  });

jusibe.sendSMS({
    to: '080XXXXXXXX',
    from: 'Jusibe Joe',
    message: 'Hello From the other side 😎\nI must have called a thousand times.'
  }, function (err, body) {
    if (err) console.log('Error: ' + err);
    else {
      console.log(body);

      jusibe.deliveryStatus(body.message_id, function (err, body) {
        if (err) console.log('Error: ' + err);
        else console.log(body);
      });

    }
  });

jusibe.deliveryStatus('eq16v6vd26', function (err, body) {
    if (err) console.log('Error: ' + err);
    else console.log(body);
  });
