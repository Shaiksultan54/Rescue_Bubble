const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    type: { type: String, default: "Point" }, // GeoJSON format
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
  },
  contactDetails: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  expertise: [String], // E.g., ['medical', 'search-and-rescue', 'fire']
  resources: [
    {
      resourceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' },
      quantity: { type: Number, default: 0 },
    },
  ],
  lastActivity: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

// For location-based queries
AgencySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Agency', AgencySchema);
