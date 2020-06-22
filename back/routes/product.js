const express = require('express');
const router = express.Router();

// Controllers
const { create, productById, read, remove } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user');

// Routes
router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)


router.param("userId", userById);
router.param("productId", productById);

module.exports = router;

