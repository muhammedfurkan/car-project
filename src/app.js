// src/app.js
const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');
const fastifyJwt = require('@fastify/jwt');
const dbConnector = require('./db/db');
const carRoutes = require('./routes/carRoutes');
const rentalRoutes = require('./routes/rentalRoutes');
const insuranceRoutes = require('./routes/insuranceRoutes');
const accountRoutes = require('./routes/accountRoutes');
const indexRoutes = require('./routes/indexRoutes');
const config = require('./config');
const dotenv = require('dotenv').config();

const app = Fastify({
  logger: true,
});

app.register(fastifyCors, { origin: '*' }); // CORS ayarları
app.register(fastifyJwt, { secret: process.env.JWT_SECRET }); // JWT ile kimlik doğrulama
app.register(dbConnector); // MongoDB bağlantısını kaydediyoruz

// Rotaları kaydediyoruz
app.register(carRoutes);
app.register(rentalRoutes);
app.register(insuranceRoutes);
app.register(accountRoutes);
app.register(indexRoutes);


// Sunucuyu başlatıyoruz
app.listen({
  port: config.server.port,
  host: config.server.host,
}, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening on ${address}`);
})