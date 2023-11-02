const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: String,
  questions: [{ type: mongoose.Schema.Types.Mixed }],
});

module.exports = mongoose.model('Form', formSchema);
