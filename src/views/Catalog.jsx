const React = require('react');
const Layout = require('../views/Layout');

module.exports = function Catalog({ goods, login, isSeller }) {
  return (
    <Layout login={login}>
      <h1>all products:</h1>

      <main role="main">
        <div
          className="goods-list"
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {isSeller ? (
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              add item
            </button>
          ) : (
            <></>
          )}
          <ul className="goods">
            {goods.map((good) => (
              <li className="good" key={good.id}>
                <img
                  className="pic"
                  src={good.picture}
                  alt="prodpic"
                  style={{
                    width: '100px',
                  }}
                ></img>
                <div className="name">{good.name}</div>
                <ul className="good-links">
                  <li className="good-link">
                    <a href={`good/show/${good.id}`}>show</a>
                  </li>
                  <li className="good-link">
                    <a href={`goods/edit/${good.id}`}>edit</a>
                  </li>
                  <li className="good-link">
                    <button className="delBtn" type="button" id={good.id}>
                      delete
                    </button>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="modal fade"
          id="loginModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Вход в личный кабинет
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Закрыть"
                ></button>
              </div>
              <div className="modal-body">
                <form id="loginForm">
                  <div className="form-group help mb-4">
                    <input
                      name="email"
                      type="email"
                      tabIndex="1"
                      autoComplete="current-email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="email"
                      required
                    />
                    <i className="fa fa-user" />
                  </div>
                  <div className="form-group help mb-4">
                    <input
                      name="password"
                      type="password"
                      tabIndex="2"
                      autoComplete="current-password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      required
                    />
                    <i className="fa fa-lock" />
                  </div>
                  <button type="submit" className="btn btn-dark btn-lg">
                    Войти
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script defer src="/js/application.js" />
    </Layout>
  );
};
