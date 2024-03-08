const express = require('express');
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

const renderTemplate = require('../utils/renderTemplate');
const Show = require('../views/Product.jsx');
const { Good } = require('../../db/models');

const router = express.Router();

router.get('/catalog/:id', async (req, res) => {
  const { login, isSeller } = req.session;
  const good = await Good.findOne({ where: { id: req.params.id } });
  renderTemplate(Show, { good, login, isSeller }, res);
});



module.exports = router;
