const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Edit = require('../views/Edit.jsx');
const { Good } = require('../../db/models');

router.get('/edit/:id', async (req, res) => {
  const good = await Good.findOne({ where: { id: req.params.id } });
  renderTemplate(Edit, { good }, res);
});

router.put('/edit/:id', async (req, res) => {
  const good = await Good.findOne({ where: { id: req.params.id } });
  const { name, categoryId, description, price, amount, picture } = req.body;
  good.name = name;
  good.categoryId = categoryId;
  good.description = description;
  good.price = price;
  good.amount = amount;
  good.picture = picture;
  await good.save(); //! обязательно await
  res.json(good);
  // return res.redirect(`/show-one-entry/${entry.id}`);
});

module.exports = router;