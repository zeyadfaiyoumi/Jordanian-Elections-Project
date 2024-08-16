const express = require('express');
const router = express.Router();
const { insertListData } = require('../controllers/Createlist');

// Route to handle form submission
router.post('/submit-form-Createlist', insertListData);

module.exports = router;
