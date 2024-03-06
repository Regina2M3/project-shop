const regRouter = require('express').Router();
const bcrypt = require('bcrypt');

// const { json } = require('sequelize');
const renderTemplate = require('../utils/renderTemplate');

const { User } = require('../../db/models');
const Registration = require('../views/Reg.jsx');

regRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(Registration, null, res);
});

regRouter.post('/', async (req, res) => {
  try {
    const { login, email, isSeller, password } = req.body;
    console.log('role:', req.body);
    const findUser = await User.findOne({ where: { login } });
    if (findUser) {
      console.log(`User with login ${login} already exists`);
      res.json({ err: `Похоже, юзер ${login} уже зарегистрирован` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login,
        email,
        password: hash,
        isSeller,
      });
      console.log('new user', newUser);
      req.session.login = newUser.login;
      req.session.userId = newUser.id;
      console.log('req.session:', req.session);
      req.session.save(() => {
        res.json({ msgDone: 'Вы успешно зарегистрированы!' });
      });
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = regRouter;
