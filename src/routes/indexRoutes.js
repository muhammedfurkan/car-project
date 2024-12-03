// src/routes/indexRoutes.js
const indexController = require('../controllers/indexController');

async function indexRoutes(fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: indexController.index, // Tüm araçları listele
  });

}

module.exports = indexRoutes;
