// routes/resourceRoutes.js
const express = require('express');
const { createResource, getResources, updateResource, deleteResource } = require('../controllers/resourceController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Resource Routes
router.post('/', authenticate, createResource);  // Create a new resource
router.get('/', authenticate, getResources);    // Get all resources
router.put('/:id', authenticate, updateResource);  // Update a resource
router.delete('/:id', authenticate, deleteResource);  // Delete a resource

module.exports = router;
