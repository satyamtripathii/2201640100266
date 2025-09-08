const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortCode: { type: String, required: true, unique: true },
  originalUrl: { type: String, required: true },
  expiry: { type: Date, required: true },
  clicks: { type: Number, default: 0 },
  clickDetails: [
    {
      timestamp: { type: Date, default: Date.now },
      referrer: String,
      location: String
    }
  ]
});

module.exports = mongoose.model('Url', urlSchema);
