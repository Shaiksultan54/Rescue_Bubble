// routes/alertRoutes.js
const express = require('express');
const { createAlert, getAlerts, updateAlertStatus } = require('../controllers/alertController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Alert Routes
router.post('/', authenticate, createAlert);  // Create an alert
router.get('/', authenticate, getAlerts);    // Get all alerts
router.put('/:id/status', authenticate, updateAlertStatus);  // Update alert status

module.exports = router;
