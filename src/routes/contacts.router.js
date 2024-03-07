const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Contact = require('../views/Contact.jsx');

router.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Contact, { login }, res);
});

module.exports = router;
