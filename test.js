const encrypt = require('./script');

const payload = { username: 'harshthakur', role: 'admin' };
const secret = 'myjwtsecret';

const token = encrypt(payload, secret);
console.log('Generated Token:', token);
