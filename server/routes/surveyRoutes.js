const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
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

  app.post('/api/surveys/webhooks', async (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');
    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .value();

    const { email, choice } = events;

    await Survey.updateOne(
      {
        id: events.surveyId,
        recipients: {
          $elemMatch: { email, responded: false }
        }
      },
      {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.responded': true }
      }
    );

    res.send({});
  });
};
