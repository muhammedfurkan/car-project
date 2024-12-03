// src/controllers/insuranceController.js
const Insurance = require('../models/insurance');
const Car = require('../models/car');
const { sendInsuranceReminder } = require('../utils/notification');

// Tüm sigorta bilgilerini listeleme
async function getAllInsurances(request, reply) {
  try {
    const insurances = await Insurance.find().populate('car');
    reply.send(insurances);
  } catch (err) {
    reply.status(500).send({ error: 'Error retrieving insurances', details: err });
  }
}

// Sigorta bilgisi ekleme
async function createInsurance(request, reply) {
  const { carId, insuranceCompany, policyNumber, expirationDate } = request.body;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return reply.status(404).send({ error: 'Car not found' });
    }

    const insurance = new Insurance({
      car: carId,
      insuranceCompany,
      policyNumber,
      expirationDate,
    });

    await insurance.save();
    reply.status(201).send(insurance);
  } catch (err) {
    reply.status(500).send({ error: 'Error creating insurance', details: err });
  }
}

// Sigorta bilgilerini güncelleme
async function updateInsurance(request, reply) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const insurance = await Insurance.findByIdAndUpdate(id, updateData, { new: true });
    if (!insurance) {
      return reply.status(404).send({ error: 'Insurance not found' });
    }

    reply.send(insurance);
  } catch (err) {
    reply.status(500).send({ error: 'Error updating insurance', details: err });
  }
}

// Sigorta bilgilerini silme
async function deleteInsurance(request, reply) {
  const { id } = request.params;

  try {
    const insurance = await Insurance.findByIdAndDelete(id);
    if (!insurance) {
      return reply.status(404).send({ error: 'Insurance not found' });
    }

    reply.send({ message: 'Insurance deleted successfully' });
  } catch (err) {
    reply.status(500).send({ error: 'Error deleting insurance', details: err });
  }
}

// Sigorta bitiş tarihi hatırlatması gönderme
async function sendInsuranceReminderEmail(request, reply) {
  const { carId, email } = request.params;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return reply.status(404).send({ error: 'Car not found' });
    }

    const insurance = await Insurance.findOne({ car: carId });
    if (!insurance) {
      return reply.status(404).send({ error: 'Insurance not found' });
    }

    await sendInsuranceReminder(car, email); // E-posta gönderimi
    reply.send({ message: 'Insurance reminder sent successfully' });
  } catch (err) {
    reply.status(500).send({ error: 'Error sending insurance reminder', details: err });
  }
}

module.exports = {
  getAllInsurances,
  createInsurance,
  updateInsurance,
  deleteInsurance,
  sendInsuranceReminderEmail,
};
