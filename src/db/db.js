// src/db/db.js
const mongoose = require('mongoose');
const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options) {
  const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/car-rental';

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    fastify.log.info('MongoDB connected successfully');
  } catch (err) {
    fastify.log.error('Error connecting to MongoDB: ', err);
    throw err;
  }
}

module.exports = fastifyPlugin(dbConnector);
