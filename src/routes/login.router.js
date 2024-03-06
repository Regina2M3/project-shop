const logRouter = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../utils/renderTemplate');

const { User } = require('../../db/models');
const LoginPage = require('../views/Login.jsx');

logRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(LoginPage, {}, res);
});

logRouter.post('/', async (req, res) => {
  try {
    const { login, email, isSeller, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.login = user.login;
        req.session.userId = user.id;
        req.session.isSeller = user.isSeller;
        req.session.save(() => {
          console.log('Session saved.');
        });
        res.json({ msg: 'Успешно!' });
      } else {
        res.json({ err: 'Неверный пароль.' });
      }
    } else {
      res.json({ err: 'Пользователь не найден.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Внутренняя ошибка сервера.' });
  }
});

module.exports = logRouter;
