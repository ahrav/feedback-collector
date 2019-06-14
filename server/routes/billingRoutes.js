const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const isAuthenticated = require('../middlewares/isAuthenticated');

module.exports = app => {
  app.post('/api/stripe', isAuthenticated, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 survey credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
