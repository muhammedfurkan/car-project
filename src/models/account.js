// src/models/account.js
const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerType: { type: String, enum: ['individual', 'company'], required: true },
  balance: { type: Number, default: 0 },
  debts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rental' }],
  credits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rental' }],
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
