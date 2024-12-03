// src/utils/notification.js
const nodemailer = require('nodemailer');
const config = require('../config');

// Mail gönderme fonksiyonu
async function sendMail(to, subject, text, html) {
  const transporter = nodemailer.createTransport({
    service: config.mailer.service,
    auth: {
      user: config.mailer.user,
      pass: config.mailer.pass,
    },
  });

  const mailOptions = {
    from: config.mailer.user, // Gönderen e-posta
    to, // Alıcı e-posta adresi
    subject, // Konu
    text, // Düz metin
    html, // HTML içerik
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to: ${to}`);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}

// Sigorta veya vize bitiş hatırlatması gönderme
async function sendInsuranceReminder(car, email) {
  const subject = `Insurance Expiry Reminder for ${car.marka} ${car.model}`;
  const text = `The insurance for ${car.marka} ${car.model} (Plaka: ${car.plaka}) is about to expire. Please make sure to renew it.`;
  const html = `<p>The insurance for <strong>${car.marka} ${car.model}</strong> (Plaka: ${car.plaka}) is about to expire. Please make sure to renew it.</p>`;

  await sendMail(email, subject, text, html);
}

// Vize bitiş hatırlatması
async function sendVizeReminder(car, email) {
  const subject = `Vize Expiry Reminder for ${car.marka} ${car.model}`;
  const text = `The vize for ${car.marka} ${car.model} (Plaka: ${car.plaka}) is about to expire. Please make sure to renew it.`;
  const html = `<p>The vize for <strong>${car.marka} ${car.model}</strong> (Plaka: ${car.plaka}) is about to expire. Please make sure to renew it.</p>`;

  await sendMail(email, subject, text, html);
}

module.exports = {
  sendInsuranceReminder,
  sendVizeReminder,
};
