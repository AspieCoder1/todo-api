const jwt = require('jsonwebtoken');
const {SHA256} = require('crypto-js');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token)

var decoded = jwt.verify(token, '123abc')
console.log(decoded)