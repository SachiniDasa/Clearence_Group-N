const mongoose = require('mongoose');

const labItemSchema = new mongoose.Schema({
  apparatus: { type: String, required: true },
  price: { type: Number, required: true },
  
});

module.exports = mongoose.model('LabItem', labItemSchema);
