const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home.jsx');

router.get('/', (req, res) => {
  const { login } = req.session;
  console.log(req.session);
  renderTemplate(Home, { login }, res);
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookies');
    res.redirect('/');
  });
});

module.exports = router;
