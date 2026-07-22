// routes/users.js
const express = require('express');
const router = express.Router();

const checkLoggedIn = require('../Data/middleware/checkLoggedIn');

router.get('/secret-data', checkLoggedIn, (req, res) => {
  res.send('Only logged-in users see this');
});

let users = [
    { id: 101, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 202, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

module.exports = users;