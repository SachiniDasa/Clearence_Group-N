const mongoose = require('mongoose');

const clearanceReportSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  date: { type: Date, default: Date.now },
  status: String, // Add a status field (e.g., "pending", "signed by registrar", "signed by dean/vice-chancellor")
  registrarSignature: String, // Add a field for the registrar's signature
  deanSignature: String,
  VCSignature: String, // 
  clearencitem:clearence.getitem(),
});

module.exports = mongoose.model('ClearanceReport', clearanceReportSchema);
