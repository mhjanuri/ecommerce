const express = require('express');
const router = express.Router();

// Controllers
const { create } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user');

// Routes
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);


router.param("userId", userById);

module.exports = router;

