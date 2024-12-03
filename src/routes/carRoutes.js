// src/routes/carRoutes.js
const carController = require('../controllers/carController');

async function carRoutes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/cars',
    handler: carController.getAllCars, // Tüm araçları listele
  });

  fastify.route({
    method: 'POST',
    url: '/cars',
    handler: carController.createCar, // Yeni araç oluştur
  });

  fastify.route({
    method: 'PUT',
    url: '/cars/:id',
    handler: carController.updateCar, // Araç güncelle
  });

  fastify.route({
    method: 'DELETE',
    url: '/cars/:id',
    handler: carController.deleteCar, // Araç sil
  });
}

module.exports = carRoutes;
