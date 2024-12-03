// src/controllers/accountController.js
const Account = require('../models/account');
const { addPayment } = require('../services/paymentService');

// Tüm hesapları listeleme
async function getAllAccounts(request, reply) {
  try {
    const accounts = await Account.find();
    reply.send(accounts);
  } catch (err) {
    reply.status(500).send({ error: 'Error retrieving accounts', details: err });
  }
}

// Cari hesap oluşturma
async function createAccount(request, reply) {
  const { customerName, customerType, balance = 0 } = request.body;

  try {
    const account = new Account({
      customerName,
      customerType,
      balance,
    });

    await account.save();
    reply.status(201).send(account);
  } catch (err) {
    reply.status(500).send({ error: 'Error creating account', details: err });
  }
}

// Cari hesap güncelleme
async function updateAccount(request, reply) {
  const { id } = request.params;
  const updateData = request.body;

  try {
    const account = await Account.findByIdAndUpdate(id, updateData, { new: true });
    if (!account) {
      return reply.status(404).send({ error: 'Account not found' });
    }

    reply.send(account);
  } catch (err) {
    reply.status(500).send({ error: 'Error updating account', details: err });
  }
}

// Cari hesap silme
async function deleteAccount(request, reply) {
  const { id } = request.params;

  try {
    const account = await Account.findByIdAndDelete(id);
    if (!account) {
      return reply.status(404).send({ error: 'Account not found' });
    }

    reply.send({ message: 'Account deleted successfully' });
  } catch (err) {
    reply.status(500).send({ error: 'Error deleting account', details: err });
  }
}

// Ödeme ekleme (Hesap bakiyesini güncelleme)
async function addPaymentToAccount(request, reply) {
  const { accountId, amount } = request.body;

  try {
    const account = await addPayment(accountId, amount); // Ödeme ekleme
    reply.send(account);
  } catch (err) {
    reply.status(500).send({ error: 'Error adding payment', details: err });
  }
}

module.exports = {
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
  addPaymentToAccount,
};
