// src/models/car.js
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  type: { type: String, required: true }, // Binek, Ticari, vb.
  plaka: { type: String, required: true, unique: true },
  noterAlisFiyati: { type: Number, required: true },
  vizeTarihi: { type: Date, required: true },
  sigortaTarihi: { type: Date, required: true },
  satisDurumu: { type: Boolean, default: false }, // Satılmış mı?
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
