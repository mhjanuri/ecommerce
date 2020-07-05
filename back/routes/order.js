const express = require('express');
const router = express.Router();

// controllers
const { requireSignin, isAuth } = require('../controllers/auth');
const { userById, addOrderToUserHistory } = require('../controllers/user');
const { create } = require('../controllers/order');
const { decreaseQuantity } = require('../controllers/product');

// Routes
router.post(
    '/order/create/:userId',
    requireSignin,
    isAuth,
    addOrderToUserHistory,
    decreaseQuantity,
    create
);

router.param("userId", userById);

module.exports = router;