const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const isAuthenticated = require('../middlewares/isAuthenticated');

module.exports = app => {
  app.post('/api/stripe', isAuthenticated, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits of surveys',
        source: req.body.id
      });

      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
};
