const express = require('express');
const winston = require('winston');

const app = express();

require('./startup/logging')();
require('./models/User');
require('./models/Survey');
require('./services/passport');
require('./startup/db')();
require('./startup/auth')(app);
require('./startup/routes')(app);
require('./startup/validation')();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => winston.info(`Listening on port ${PORT}`));
