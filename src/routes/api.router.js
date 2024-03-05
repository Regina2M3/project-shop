const router = require('express').Router();
const homeRouter = require('./index.router');
// const regRouter = require('./reg.router');

module.exports = router.use('/', homeRouter)
// .use('/registration', regRouter);
//   .use('/login', loginRouter)
//   .use('/user', profileRouter)
//   .use('/reg', regRouter)
//   .use('/game', gameRouter)
//   .use('/stats', statsRouter);
// .use('/game', gameRouter)
