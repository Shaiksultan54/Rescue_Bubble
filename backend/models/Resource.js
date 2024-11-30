const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String }, // E.g., 'medical', 'transport', 'equipment'
}, {
  timestamps: true,
});

module.exports = mongoose.model('Resource', ResourceSchema);
