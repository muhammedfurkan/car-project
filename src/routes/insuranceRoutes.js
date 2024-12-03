// src/routes/insuranceRoutes.js
const insuranceController = require('../controllers/insuranceController');

async function insuranceRoutes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/insurances',
    handler: insuranceController.getAllInsurances, // Tüm sigorta bilgilerini listele
  });

  fastify.route({
    method: 'POST',
    url: '/insurances',
    handler: insuranceController.createInsurance, // Yeni sigorta oluştur
  });

  fastify.route({
    method: 'PUT',
    url: '/insurances/:id',
    handler: insuranceController.updateInsurance, // Sigorta bilgilerini güncelle
  });

  fastify.route({
    method: 'DELETE',
    url: '/insurances/:id',
    handler: insuranceController.deleteInsurance, // Sigorta bilgilerini sil
  });

  fastify.route({
    method: 'POST',
    url: '/insurances/:carId/reminder/:email',
    handler: insuranceController.sendInsuranceReminderEmail, // Sigorta hatırlatma e-postası gönder
  });
}

module.exports = insuranceRoutes;
