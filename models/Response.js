const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  formId: mongoose.Schema.Types.ObjectId,
  responses: [{ type: mongoose.Schema.Types.Mixed }],
  // Add additional fields if needed
});

module.exports = mongoose.model('Response', responseSchema);
