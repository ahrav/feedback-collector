const mongoose = require('mongoose');
const isAuthenticated = require('../middlewares/isAuthenticated');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for your feedback!!');
  });

  app.post(
    '/api/surveys',
    isAuthenticated,
    requireCredits,
    async (req, res) => {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(',')
          .map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });

      // Send email
      try {
        const mailer = new Mailer(survey, surveyTemplate(survey));
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
      } catch (err) {
        console.error(err);
        res.status(422).send(err);
      }
    }
  );
};