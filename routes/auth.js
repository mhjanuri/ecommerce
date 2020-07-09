const express = require('express');
const router = express.Router();

// Controllers
const {
    signup,
    signin,
    signout,
    requireSignin
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

// Routes
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

// Auth middleware
// router.get('/hello', requireSignin, (req, res) => {
//     res.send('hello there');
// });

module.exports = router;
