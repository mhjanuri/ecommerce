const express = require('express');
const router = express.Router();

// Controllers
const { create } = require('../controllers/category');

// Routes
router.post('/category/create', create);


module.exports = router;
