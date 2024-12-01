// // middleware/auth.js
// const jwt = require('jsonwebtoken');

// exports.authenticate = (req, res, next) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');
//     if (!token) return res.status(401).json({ message: 'Unauthorized' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Invalid token' });
//     }
// };
const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Middleware for authenticating a user based on the JWT token.
 */
exports.authenticate = async (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password'); // Retrieve user info without the password

        if (!req.user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.', error: error.message });
    }
};

/**
 * Middleware for authorizing a user based on roles.
 * @param {...string} roles - Allowed roles (e.g., 'admin', 'agencyAdmin').
 */
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `Access denied. Role '${req.user.role}' is not allowed.` });
        }
        next();
    };
};

/**
 * Utility to generate a JWT token.
 * @param {Object} payload - The payload to embed in the token.
 * @returns {string} JWT token.
 */
exports.generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};
