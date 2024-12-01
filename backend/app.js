// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/UserRoutes');
const alertRoutes = require('./routes/alertRoutes');
const agencyRoutes = require('./routes/agencyRoutes');
const disasterRoutes = require('./routes/disasterRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(require('cors')());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/agencies', agencyRoutes);
app.use('/api/disasters', disasterRoutes);
app.use('/api/resources', resourceRoutes);

// Database Connection
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
