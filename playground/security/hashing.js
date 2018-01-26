const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs'); 
var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   });
// });

var hashedPassword = '$2a$10$nquHBB82Sg4ZWV5NqIfiwujprDtvCRIHPlhq8g53kuBRDWTfdGJ6a';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});