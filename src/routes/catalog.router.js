const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const renderTemplate = require('../utils/renderTemplate');
const Catalog = require('../views/Catalog.jsx');
// const Edit = require('../views/');
// const Add = require('../views/');
// const Show = require('../views/');
const { Good } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const goods = await Good.findAll();

  renderTemplate(Catalog, { goods }, res);
});

module.exports = router;
