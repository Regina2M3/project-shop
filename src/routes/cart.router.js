const router = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Cart = require('../views/Cart.jsx');
const { User, Good, Order } = require('../../db/models');

router.get('/', async (req, res) => {
  const { userId, login } = req.session;
  //   const prods = await Order.findAll({
  //     raw: true,
  //     include: [
  //       {
  //         model: Good,
  //         attributes: ['name', 'price', 'picture'],
  //       },
  //     ],
  //     where: { userId },
  //   });
  const find = await User.findByPk(userId, {
    attributes: [],
    // where: { id: userId },
    // raw: true,
    include: [
      {
        model: Good,
        through: { where: { user_id: userId } },
        attributes: {exclude: ['createdAt', 'updatedAt', 'Order']}
      },
    ],
  });
  const prods = find.get({ plain: true }).Goods;
  console.log(prods);

  // console.log(find);
  // res.end();
  renderTemplate(Cart, { userId, login, prods }, res);
});

// router.post('/:userId', async (req, res) => {
//   const { login, isSeller } = req.session;
//   try {
//     const { userId, goodId } = req.body;
//     console.log('это рек бади', req.body);
//     const addCart = await Order.create({
//       userId,
//       goodId,
//     });
//     // res.json(newProd)
//     res.status(200).json({ message: 'Данные успешно добавлены' });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Что-то пошло не так' });
//   }
// });

router.get('/add/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  try {
    const cart = await Order.findOne({
      where: { good_id: id, user_id: userId },
    });
    if (!cart) {
      const addCart = await Order.create({ good_id: id, user_id: userId });
    }
    res.redirect('/catalog');
  } catch (error) {
    console.log('cart err', error);
  }
});

module.exports = router;
