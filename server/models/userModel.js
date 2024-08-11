const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = (username, password, callback) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], callback);
  });
};

const findUserByUsername = (username, callback) => {
  db.query('SELECT * FROM users WHERE username = ?', [username], callback);
};

module.exports = { createUser, findUserByUsername };
