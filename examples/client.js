const Jusibe = require('../jusibe.js');

const jusibe = new Jusibe("YOUR_JUSIBE_PUBLIC_KEY", "YOUR_JUSIBE_ACCESS_TOKEN");

jusibe.getCredits()
  .then(res => {
    console.log(res.body)
  })
  .catch(err => {
    console.log(err.body);
  });

const payload = {
  to: '080XXXXXXXX',
  from: 'Jusibe Joe',
  message: 'Hello From the new APIIIII 😎\nI must have called a thousand times.'
};

jusibe.sendSMS(payload)
  .then(res => {
    console.log(res.body);
    return jusibe.deliveryStatus(res.body.message_id);
  })
  .then(res => {
    console.log(res.body);
  })
  .catch(err => {
    console.log(err.body);
  });

jusibe.deliveryStatus('eq16v6vd26')
  .then(res => {
    console.log(res.body);
  })
  .catch(err => {
    console.log(err.body);
  });
