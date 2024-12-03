// src/controllers/rentalController.js
const Rental = require('../models/rental');
const Car = require('../models/car');
const Account = require('../models/account');
const { addPayment, calculateRentalCost } = require('../services/paymentService');

// Tüm kiralamaları listeleme
async function getAllRentals(request, reply) {
  try {
    const rentals = await Rental.find().populate('car');
    reply.send(rentals);
  } catch (err) {
    reply.status(500).send({ error: 'Error retrieving rentals', details: err });
  }
}

// Kiralama oluşturma
async function createRental(request, reply) {
  const { carId, customerName, customerType, rentalStart, rentalEnd, rentalFee, deposit } = request.body;

  try {
    // Araç var mı kontrolü
    const car = await Car.findById(carId);
    if (!car) {
      return reply.status(404).send({ error: 'Car not found' });
    }

    // Kiralama oluşturma
    const rental = new Rental({
      car: carId,
      customerName,
      customerType,
      rentalStart,
      rentalEnd,
      rentalFee,
      deposit,
    });

    await rental.save();

    // Cari hesap güncellemesi
    const account = await Account.findOne({ customerName, customerType });
    if (!account) {
      const newAccount = new Account({
        customerName,
        customerType,
        balance: 0,
      });
      await newAccount.save();
    }

    reply.status(201).send(rental);
  } catch (err) {
    reply.status(500).send({ error: 'Error creating rental', details: err });
  }
}

// Kiralama güncelleme
async function updateRental(request, reply) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const rental = await Rental.findByIdAndUpdate(id, updateData, { new: true });
    if (!rental) {
      return reply.status(404).send({ error: 'Rental not found' });
    }

    reply.send(rental);
  } catch (err) {
    reply.status(500).send({ error: 'Error updating rental', details: err });
  }
}

// Kiralama silme
async function deleteRental(request, reply) {
  const { id } = request.params;

  try {
    const rental = await Rental.findByIdAndDelete(id);
    if (!rental) {
      return reply.status(404).send({ error: 'Rental not found' });
    }

    reply.send({ message: 'Rental deleted successfully' });
  } catch (err) {
    reply.status(500).send({ error: 'Error deleting rental', details: err });
  }
}

// Kiralama ücretini hesaplama
async function calculateRental(request, reply) {
  const { rentalId } = request.params;

  try {
    const rentalCost = await calculateRentalCost(rentalId);
    reply.send({ rentalCost });
  } catch (err) {
    reply.status(500).send({ error: 'Error calculating rental cost', details: err });
  }
}

module.exports = {
  getAllRentals,
  createRental,
  updateRental,
  deleteRental,
  calculateRental,
};
