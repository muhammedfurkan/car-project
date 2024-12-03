// src/routes/accountRoutes.js
const accountController = require('../controllers/accountController');

async function accountRoutes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/accounts',
    handler: accountController.getAllAccounts, // Tüm hesapları listele
  });

  fastify.route({
    method: 'POST',
    url: '/accounts',
    handler: accountController.createAccount, // Yeni hesap oluştur
  });

  fastify.route({
    method: 'PUT',
    url: '/accounts/:id',
    handler: accountController.updateAccount, // Hesap güncelle
  });

  fastify.route({
    method: 'DELETE',
    url: '/accounts/:id',
    handler: accountController.deleteAccount, // Hesap sil
  });

  fastify.route({
    method: 'POST',
    url: '/accounts/payment',
    handler: accountController.addPaymentToAccount, // Ödeme ekle
  });
}

module.exports = accountRoutes;
