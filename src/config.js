// src/config.js
require('dotenv').config();
module.exports = {
  server: {
    port: process.env.PORT || 3000, // Fastify server'ı için port
    host: process.env.HOST || '127.0.0.1', // Sunucu adresi
  },
  database: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/car-rental', // MongoDB URI
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key', // JWT için gizli anahtar
    expiresIn: process.env.JWT_EXPIRES_IN || '1h', // JWT'nin süresi
  },
  mailer: {
    service: process.env.MAIL_SERVICE || 'gmail', // E-posta hizmeti
    user: process.env.MAIL_USER || 'your-email@gmail.com', // Gönderen e-posta adresi
    pass: process.env.MAIL_PASS || 'your-email-password', // Gönderen e-posta şifresi
  },
};
