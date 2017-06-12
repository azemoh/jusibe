# Jusibe Node.js Client
> JavaScript client for Jusibe.com SMS API service

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Code Climate][codeclimate-image]][codeclimate-url] [![GitHub stars][github-image]][github-url]

## Installation

```bash
npm install jusibe
```

## Usage

```javascript
var Jusibe = require('jusibe');

var jusibe = new Jusibe("YOUR_JUSIBE_PUBLIC_KEY", "YOUR_JUSIBE_ACCESS_TOKEN");
```

### Check SMS Credits
```javascript
jusibe.getCredits()
  .then(res => {
    console.log(res.body)
  })
  .catch(err => {
    console.log(err.body);
  });
```

### Send SMS
```javascript
var payload = {
  to: '080XXXXXXXX',
  from: 'Jusibe Joe',
  message: 'Hello From the other side 😎\nI must have called a thousand times.'
};

jusibe.sendSMS(payload)
  .then(res => {
    console.log(res.body);
  })
  .catch(err => {
    console.log(err.body);
  });

```

### Check SMS status
```javascript
jusibe.deliveryStatus('eq16v6vd26')
  .then(res => {
    console.log(res.body);
  })
  .catch(err => {
    console.log(err.body);
  });
```

## License

Available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

[![npm package][nodei-image]][nodei-url]

[npm-url]: https://www.npmjs.com/package/jusibe
[npm-image]: https://img.shields.io/npm/v/jusibe.svg

[travis-url]: https://travis-ci.org/azemoh/jusibe
[travis-image]: https://travis-ci.org/azemoh/jusibe.svg

[codeclimate-url]: https://codeclimate.com/github/azemoh/jusibe
[codeclimate-image]: https://codeclimate.com/github/azemoh/jusibe/badges/gpa.svg

[testcoverage-url]: https://codeclimate.com/github/azemoh/jusibe/coverage
[testcoverage-image]: https://codeclimate.com/github/azemoh/jusibe/badges/coverage.svg

[nodei-url]: https://nodei.co/npm/jusibe/
[nodei-image]: https://nodei.co/npm/jusibe.png?downloads=true&downloadRank=true&stars=true

[github-url]: https://github.com/azemoh/jusibe
[github-image]: https://img.shields.io/github/stars/azemoh/jusibe.svg?style=social&label=Star&maxAge=2592000
