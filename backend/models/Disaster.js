const mongoose = require('mongoose');

const DisasterSchema = new mongoose.Schema({
  type: { type: String, required: true }, // E.g., 'flood', 'earthquake', 'fire'
  description: { type: String },
  severityLevels: { type: [String], default: ['low', 'moderate', 'high', 'critical'] },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Disaster', DisasterSchema);
