const express = require('express');
const router = express.Router();

// Controllers
const { sayHI } = require('../controllers/user');

// Routes
router.get('/', sayHI );

module.exports = router;
