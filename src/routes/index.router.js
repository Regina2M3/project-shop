const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home.jsx');

router.get('/', (req, res) => {
  renderTemplate(Home, null, res);
});

module.exports = router;
