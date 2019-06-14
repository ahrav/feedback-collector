const winston = require('winston');
const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = connectDB = async () => {
  await mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
  winston.info('MongoDB connected');
};
