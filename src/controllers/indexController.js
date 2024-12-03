// src/controllers/indexController.js

async function index(request, reply) {
  reply.send({ message: 'Welcome to the API' });
}


module.exports = { index };
