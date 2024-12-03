// src/controllers/carController.js
const Car = require('../models/car');

async function getAllCars(request, reply) {
  try {
    const cars = await Car.find();
    reply.send(cars);
  } catch (err) {
    reply.status(500).send(err);
  }
}

async function createCar(request, reply) {
  try {
    const car = new Car(request.body);
    await car.save();
    reply.status(201).send(car);
  } catch (err) {
    reply.status(400).send(err);
  }
}

async function updateCar(request, reply) {
  try {
    const car = await Car.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!car) return reply.status(404).send({ message: 'Car not found' });
    reply.send(car);
  } catch (err) {
    reply.status(400).send(err);
  }
}

async function deleteCar(request, reply) {
  try {
    const car = await Car.findByIdAndDelete(request.params.id);
    if (!car) return reply.status(404).send({ message: 'Car not found' });
    reply.send({ message: 'Car deleted successfully' });
  } catch (err) {
    reply.status(500).send(err);
  }
}

module.exports = { getAllCars, createCar, updateCar, deleteCar };
