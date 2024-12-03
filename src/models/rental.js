// src/models/rental.js
const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  customerName: { type: String, required: true },
  customerType: { type: String, enum: ['individual', 'company'], required: true },
  rentalStart: { type: Date, required: true },
  rentalEnd: { type: Date, required: true },
  rentalFee: { type: Number, required: true },
  deposit: { type: Number, required: true },
  isReturned: { type: Boolean, default: false }, // Araba geri alındı mı?
});

const Rental = mongoose.model('Rental', RentalSchema);

module.exports = Rental;
