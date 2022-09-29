const express = require('express')
const router = express.Router();

module.exports = router;

const users = require('./controllers/Users')

router.get('/users', users.getUsers)
