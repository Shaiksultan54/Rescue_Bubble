// routes/disasterRoutes.js
const express = require('express');
const { createDisaster, getDisasters, updateDisaster, deleteDisaster } = require('../controllers/disasterController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Disaster Routes
router.post('/', authenticate, createDisaster);  // Create a new disaster
router.get('/', authenticate, getDisasters);    // Get all disasters
router.put('/:id', authenticate, updateDisaster);  // Update a disaster
router.delete('/:id', authenticate, deleteDisaster);  // Delete a disaster

module.exports = router;
