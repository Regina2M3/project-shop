require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const apiRouter = require('./src/routes/api.router');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'cooks',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'soda',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};
// const dbConnectionCheck = require('../db/dbConnectCheck');

app.use(session(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
// dbConnectionCheck();

app.use('/', apiRouter);

app.listen(PORT, function () {
  console.log(`Server listening at http://localhost:${this.address().port}`);
});
