const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },
  message: { type: String, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  status: { type: String, enum: ['sent', 'acknowledged', 'resolved'], default: 'sent' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Alert', AlertSchema);
