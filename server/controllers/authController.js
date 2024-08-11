const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.register = (req, res) => {
  const { username, password } = req.body;
  User.createUser(username, password, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'User registered' });
  });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findUserByUsername(username, (err, users) => {
      if (err) return res.status(500).json({ error: err.message });
      if (users.length === 0) return res.status(400).json({ message: 'Invalid credentials' });
  
      const user = users[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      });
    });
  };
