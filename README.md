# Jusibe Node.js Client
> JavaScript client for Jusibe.com SMS API sevice

## Usage

```javascript
var Jusibe = require('jusibe');

var publicKey = 'xxx000xxxxx000xxxxx000xxxx';
var accessToken = 'xxx000xxxxx000xxxxx000xxxx';

var jusibe = new Jusibe(publicKey, accessToken);
```

### Check SMS Credits
```javascript
jusibe.getCredits(function (err, body) {
  if (err) console.log('Error: ' + err);
  else console.log(body);
});
```

### Send SMS
```javascript
var payload = {
  to: '07051450236',
  from: 'Jusibe Joe',
  message: 'Hello From the other side 😎\nI must have called a thousand times.'
};

jusibe.sendSMS(payload, function (err, body) {
  if (err) console.log('Error: ' + err);
  else console.log(body);
});

```

### Check SMS status
```javascript
jusibe.deliveryStatus('vdw362h', function (err, body) {
  if (err) console.log('Error: ' + err);
  else console.log(body);
});
```

 
