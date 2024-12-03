// src/routes/rentalRoutes.js
const rentalController = require('../controllers/rentalController');

async function rentalRoutes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/rentals',
    handler: rentalController.getAllRentals, // Tüm kiralamaları listele
  });

  fastify.route({
    method: 'POST',
    url: '/rentals',
    handler: rentalController.createRental, // Yeni kiralama oluştur
  });

  fastify.route({
    method: 'PUT',
    url: '/rentals/:id',
    handler: rentalController.updateRental, // Kiralamayı güncelle
  });

  fastify.route({
    method: 'DELETE',
    url: '/rentals/:id',
    handler: rentalController.deleteRental, // Kiralamayı sil
  });

  fastify.route({
    method: 'GET',
    url: '/rentals/:rentalId/cost',
    handler: rentalController.calculateRental, // Kiralama ücretini hesapla
  });
}

module.exports = rentalRoutes;
