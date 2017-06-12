var nock = require('nock');

nock('https://jusibe.com:443', {"encodedQueryParams":true})
  .get('/smsapi/get_credits/')
  .reply(200, {"sms_credits":"126","request_speed":0.00642991065979}, [ 'Cache-control',
  'no-cache="set-cookie"',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 12 Jun 2017 22:25:23 GMT',
  'Server',
  'nginx',
  'Set-Cookie',
  'AWSELB=CF47C7270E7E0FA602E751EFF42FB148D6C61D79FEC19CA2FD6B35C5F31CC3673DB183FC5683E52775EDE06319E4C99A4319262B2F067EF553842B596ABE715D7F971C2BAE;PATH=/;MAX-AGE=900',
  'Content-Length',
  '54',
  'Connection',
  'Close' ]);


nock('https://jusibe.com:443', {"encodedQueryParams":true})
  .get('/smsapi/send_sms/')
  .query({"to":"07051450236","from":"Jusibe%20Joe","message":"Hello%20From%20the%20new%20APIIIII%20%F0%9F%98%8E%0AI%20must%20have%20called%20a%20thousand%20times."})
  .reply(200, {"status":"Sent","message_id":"ew1vy2bn1p","sms_credits_used":1,"request_speed":0.15779685974121}, [ 'Cache-control',
  'no-cache="set-cookie"',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 12 Jun 2017 22:25:24 GMT',
  'Server',
  'nginx',
  'Set-Cookie',
  'AWSELB=CF47C7270E7E0FA602E751EFF42FB148D6C61D79FEC9EB985401B1EF9927BA37C8650EA8CD80AF12A236DDED0891787B85697921A87CAF5921B951EBA6F871B7CF56F8FAFF;PATH=/;MAX-AGE=900',
  'Content-Length',
  '97',
  'Connection',
  'Close' ]);


nock('https://jusibe.com:443', {"encodedQueryParams":true})
  .get('/smsapi/delivery_status/')
  .query({"message_id":"eq16v6vd26"})
  .reply(200, {"message_id":"eq16v6vd26","status":"Delivered","date_sent":"2016-08-21 19:47:19","date_delivered":"2016-08-21 19:47:25","request_speed":0.021278142929077}, [ 'Cache-control',
  'no-cache="set-cookie"',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 12 Jun 2017 22:25:25 GMT',
  'Server',
  'nginx',
  'Set-Cookie',
  'AWSELB=CF47C7270E7E0FA602E751EFF42FB148D6C61D79FEC19CA2FD6B35C5F31CC3673DB183FC5683E52775EDE06319E4C99A4319262B2F067EF553842B596ABE715D7F971C2BAE;PATH=/;MAX-AGE=900',
  'Content-Length',
  '155',
  'Connection',
  'Close' ]);


nock('https://jusibe.com:443', {"encodedQueryParams":true})
  .get('/smsapi/delivery_status/')
  .query({"message_id":"eq166vd26"})
  .reply(400, {"invalid_message_id":"Invalid message ID"}, [ 'Cache-control',
  'no-cache="set-cookie"',
  'Content-Type',
  'application/json',
  'Date',
  'Mon, 12 Jun 2017 22:25:25 GMT',
  'Server',
  'nginx',
  'Set-Cookie',
  'AWSELB=CF47C7270E7E0FA602E751EFF42FB148D6C61D79FEC9EB985401B1EF9927BA37C8650EA8CD80AF12A236DDED0891787B85697921A87CAF5921B951EBA6F871B7CF56F8FAFF;PATH=/;MAX-AGE=900',
  'Content-Length',
  '43',
  'Connection',
  'Close' ]);
