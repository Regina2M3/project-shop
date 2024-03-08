const router = require('express').Router();
const homeRouter = require('./index.router');
const regRouter = require('./reg.router');
const logRouter = require('./login.router');
const catRouter = require('./catalog.router');
const aboutRouter = require('./about.router');
const contactRouter = require('./contacts.router');
const showRouter = require('./show.router');
const cartRouter = require('./cart.router');
const editRouter = require('./edit.router');

module.exports = router
  .use('/', homeRouter)
  .use('/registration', regRouter)
  .use('/login', logRouter)
  .use('/catalog', catRouter)
  .use('/about', aboutRouter)
  .use('/contacts', contactRouter)
  .use('/', showRouter)
  .use('/cart', cartRouter)
  .use('/show', editRouter);
