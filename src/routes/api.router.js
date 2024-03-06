const router = require('express').Router();
const homeRouter = require('./index.router');
const regRouter = require('./reg.router');
const logRouter = require('./login.router');
const catRouter = require('./catalog.router')

module.exports = router
  .use('/', homeRouter)
  .use('/registration', regRouter)
  .use('/login', logRouter)
  .use('/catalog', catRouter);
//   .use('/reg', regRouter)
//   .use('/game', gameRouter)
//   .use('/stats', statsRouter);
// .use('/game', gameRouter)
