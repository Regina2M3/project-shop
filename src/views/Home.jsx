const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <link rel="stylesheet" href="#" />
      <div
        className="container-main-page"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className="mainText">
          <h1>
            Еще нет аккаунта? <br />
            Пора зарегистрироваться!
          </h1>
          <br />
          <h3>
            Это нужно, чтобы ты смог оформить заказ
            <br />
            Добро пожаловать &#128151;
          </h3>
          <button
            className="regBtn"
            type="button"
            style={{
              backgroundColor: '#00BFFF',
              width: '170px',
              height: '50px',
              borderRadius: '8px',
            }}
          >
            Зарегистрироваться
          </button>
          <br />
          <button
            className="logBtn"
            type="button"
            style={{
              backgroundColor: '#00BFFF',
              width: '90px',
              height: '50px',
              borderRadius: '8px',
            }}
          >
            Войти
          </button>
        </div>
        <div>
          <img src="/assets/catnoback.png" alt="cat" />
        </div>
      </div>
      <script defer src="/js/index.js" />
    </Layout>
  );
}

module.exports = Home;
