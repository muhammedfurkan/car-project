// src/services/paymentService.js
const Account = require('../models/account');
const Rental = require('../models/rental');

async function addPayment(accountId, amount) {
  try {
    const account = await Account.findById(accountId);
    if (!account) throw new Error('Account not found');

    account.balance += amount; // Ödeme yapıldığında borç düşer
    await account.save();

    return account;
  } catch (error) {
    throw new Error('Error processing payment: ' + error.message);
  }
}

async function calculateRentalCost(rentalId) {
  try {
    const rental = await Rental.findById(rentalId);
    if (!rental) throw new Error('Rental not found');

    // Kiralama süresi ve ücret hesaplaması
    const rentalDuration = (rental.rentalEnd - rental.rentalStart) / (1000 * 3600 * 24); // gün cinsinden
    const totalCost = rentalDuration * rental.rentalFee;

    return totalCost;
  } catch (error) {
    throw new Error('Error calculating rental cost: ' + error.message);
  }
}

module.exports = {
  addPayment,
  calculateRentalCost,
};
