const express = require('express');
const router = express.Router();

// Controllers
const { signup, signin, signout } = require('../controllers/user');
const { userSignupValidator } = require('../validator');

// Routes
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
