const express = require('express');
const router = express.Router();

// Controllers
const { signup, } = require('../controllers/user');
const { userSignupValidator } = require('../validator');

// Routes
router.post('/signup', userSignupValidator, signup);
// router.post('/signin', signin);

module.exports = router;
