const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const About = require('../views/About.jsx');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(About, { login }, res);
});

module.exports = router;
