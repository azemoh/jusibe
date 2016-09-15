var Jusibe = require('../index.js');

var jusibe = new Jusibe("YOUR_JUSIBE_PUBLIC_KEY", "YOUR_JUSIBE_ACCESS_TOKEN");

jusibe.getCredits(function (err, res) {
    if (res.statusCode === 200)
      console.log(res.body);
    else
      console.log(err);
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
      if (res.statusCode === 200)
        console.log(res.body);
      else
        console.log(err);
    });

  }
  else
    console.log(err);
});

jusibe.deliveryStatus('eq16v6vd26', function (err, res) {
  if (res.statusCode === 200)
    console.log(res.body);
  else
    console.log(err);
});
