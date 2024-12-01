// routes/userRoutes.js
const express = require('express');
const { register, login, getUsers } = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// User Routes
router.post('/register', register);  // User Registration
router.post('/login', login);        // User Login
router.get('/', authenticate, getUsers);  // Get all users (Admin only)

module.exports = router;

