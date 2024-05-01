// routes/accounts.js

const express = require('express');
const router = express.Router();
const { createAccount, updateVideoMetrics } = require('../controllers/accountController');

router.post('/create', createAccount);
router.put('/updateMetrics', updateVideoMetrics);

module.exports = router;
