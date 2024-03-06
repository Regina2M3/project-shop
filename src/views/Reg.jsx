const React = require('react');

const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <link rel="stylesheet" href="#" />
      <div className="formContainer">
        <form
          action="/registration"
          method="POST"
          id="regForm"
          style={{
            width: '200px',
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
            Регистрация
          </button>
        </form>
        <hr />
        <h3 style={{ textAlign: 'center' }} className="regMsg"></h3>
      </div>
      <script src='/js/reg.js'></script>
    </Layout>
  );
};
