const express = require('express');
const error = require('../middlewares/error');

module.exports = app => {
  app.use(express.json());
  require('../routes/authRoutes')(app);
  require('../routes/billingRoutes')(app);
  require('../routes/surveyRoutes')(app);
  app.use(error);
};
