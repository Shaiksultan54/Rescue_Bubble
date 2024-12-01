// routes/agencyRoutes.js
const express = require('express');
const { createAgency, getAgencies, updateAgency, deleteAgency } = require('../controllers/agencyController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Agency Routes
router.post('/', authenticate, createAgency);  // Create a new agency
router.get('/', authenticate, getAgencies);    // Get all agencies
router.put('/:id', authenticate, updateAgency);  // Update an agency
router.delete('/:id', authenticate, deleteAgency);  // Delete an agency

module.exports = router;
