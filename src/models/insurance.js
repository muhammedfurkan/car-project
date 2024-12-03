// src/models/insurance.js
const mongoose = require('mongoose');

const InsuranceSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  insuranceCompany: { type: String, required: true },
  policyNumber: { type: String, required: true },
  expirationDate: { type: Date, required: true },
});

const Insurance = mongoose.model('Insurance', InsuranceSchema);

module.exports = Insurance;
