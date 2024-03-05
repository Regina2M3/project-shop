// ! Инициализация проекта
// * npm init -y
// * npx eslint --init
// * npx create-gitignore node
// * npm i express dotenv
// * npm i -D nodemon morgan
// * npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom

// todo создай файл .babelrc и добавь в него:
/*
  {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
  */

//! Добавь скрипты dev и start в package.json
//! --ignore sessions чтобы сервер не перезагружался каждый раз при добавлении/удалении сессии
/*
"dev": "nodemon src/app.js --ignore sessions --ext js,jsx",
"start": "node src/app.js"
*/

// ! Инициализация базы данных
// * npm i sequelize sequelize-cli pg pg-hstore
// todo создай файл .sequelizerc и добавь в него:
/*
const path = require('path');
module.exports = {
    'config': path.resolve('db', 'config', 'database.json'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations'),
};
*/
// * npx sequelize init
// * npx sequelize db:create
// * npx sequelize model:generate --name User --attributes fullName:string,mail:string,age:integer
// * npx sequelize db:migrate

// ? Для заполения базы (пример через faker):
// ? npm i @faker-js/faker
// * npx sequelize-cli seed:generate --name User
// * npx sequelize db:seed:all

// ! env - переменные окружения (среды), в них будем класть подключение к базе, порт и т.п.
// * npm i dotenv
// todo создай файл .env и .env_example (чтобы он был для примера и запушился на GitHub) и
// todo добавь в файл .env переменные PORT и DB (подключение к БД)
// ! Не забудь добавить всё из файла .env в файл .env_example
// todo подключи dotenv к app.js и .sequelizerc =>  require('dotenv').config();
// ! Если не добавить в файлы, то переменные PORT и DB не увидит
// * require('dotenv').config();
// todo замени в db/config/database.json содержимое development на :
/*
"use_env_variable": "DB"
*/

// ! Статика - файлы, доступные в браузере (клиентские файлы, папка public)
// * app.use(express.static(path.join(process.cwd(), 'public')));

// --- p2w2d1
//! !! Session + bcrypt
//! Установи
// * npm i express-session session-file-store bcrypt
//! !! В package.json "dev": "nodemon app.js --ignore sessions --ext js,jsx",
//! !! Добавь папку sessions в gitignore

// * Конфиг для куки в виде файла сессии
const sessionConfig = {
  name: 'cookieName', // не забудь указать то же имя и при удалении куки
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Mellon', // SESSION_SECRET в .env
  resave: false, // если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 24 * 1000 * 60 * 60, // время жизни в ms, 24(h)*1000(ms)*60(sec)*60(min) = 86400000
    httpOnly: true, // секьюрность, оставляем true
  },
};
// * Подключи сессии
app.use(session(sessionConfig));

// ? захэшировать и сверить
// * bcrypt.hash()
// * bcrypt.compare()
