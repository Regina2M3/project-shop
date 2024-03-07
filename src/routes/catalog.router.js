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
  const { login, isSeller } = req.session;
  const goods = await Good.findAll();

  renderTemplate(Catalog, { goods, login, isSeller }, res);
});

router.post('/new', async (req, res) => {
  const { login, isSeller } = req.session;
  if (isSeller) {
    try {
      const { name, category, description, price, amount, picture } = req.body;
      console.log('это рек бади', req.body);
      const newProd = await Good.create({
        name,
        category,
        description,
        price,
        amount,
        picture,
      });
      // res.json(newProd)
      res.status(200).json({ message: 'Данные успешно добавлены' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Что-то пошло не так' });
    }
  } else {
    console.log('no admin rights');
    res.status(403).json({ error: 'Не админ' });
  }
});


router.delete('/delete/:id', async (req, res) => {
  await Good.destroy({ where: { id: req.params.id } });
  res.json({ success: true })
});

module.exports = router;
