// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const auth = require('./../middleware/auth')

router.post('/login', auth,authController.login);
router.post('/verify', authController.verify);
router.post('/setup-password', authController.setupPassword); 

module.exports = router;