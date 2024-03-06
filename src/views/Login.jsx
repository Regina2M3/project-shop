const React = require('react');

const Layout = require('../views/Layout');

module.exports = function LoginPage() {
  return (
    <Layout>
      <link rel="stylesheet" href="#" />
      <h2 style={{ textAlign: 'center' }}>
        Для входа в аккаунт введите Логин и пароль:
      </h2>
      <hr />
      <form
        action="/log/login"
        method="POST"
        id="logForm"
        style={{
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
        }}
      >
        <label htmlFor="form_login" className="form-label">
          Логин
        </label>
        <input
          name="login"
          type="text"
          className="form-control shadow rounded"
          id="form_login"
        />

        <label htmlFor="form_email" className="form-label">
          E-mail
        </label>
        <input name="email" type="e-mail" className="input" id="form_mail" />

        <select
          class="form-select"
          aria-label="Default select example"
          name="isSeller"
        >
          <option selected disabled>
            Роль:
          </option>
          <option value="false">Покупатель</option>
          <option value="true">Админ</option>
        </select>

        <label htmlFor="" className="form-label">
          Пароль
        </label>
        <input
          name="password"
          type="password"
          className="form-control shadow rounded"
          id="form_passWord"
        />
        <button type="submit" className="btn btn-primary shadow rounded">
          Войти
        </button>
      </form>
      <hr />
      <h3 style={{ textAlign: 'center' }} className="logMsg"></h3>
      <script defer src="/js/login.js" />
    </Layout>
  );
};
