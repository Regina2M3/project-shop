require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();
const { PORT, SECRET_KEY_SESSION } = process.env;

const sessionConfig = {
  name: 'cookies',
  store: new FileStore(),
  secret: process.env.SECRET_KEY_SESSION ?? 'github',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));

const apiRouter = require('./src/routes/api.router');

// const { secureRoute } = require('./middelwares/common');

app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
