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
            <>
              <div
                className="good-container"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '20px',
                }}
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  style={{
                    width: '190px',
                    height: '150px',
                  }}
                >
                  add item
                </button>
                {goods.map((good) => (
                  <>
                    <div
                      className="goods"
                      key={good.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <img
                        src={good.picture}
                        alt="goodpic"
                        style={{
                          width: '150px',
                        }}
                      />

                      <div className="name">{good.name}</div>
                      <div className="link-container">
                        <div className="good-link">
                          <a href={`good/show/${good.id}`}>show</a>
                        </div>
                        <div className="good-link">
                          <a href={`goods/edit/${good.id}`}>edit</a>
                        </div>
                        <button className="delBtn" type="button" id={good.id}>
                          delete
                        </button>
                      </div>
                    </div>
                  </>
                ))}
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
                        Заполни карточку товара
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Закрыть"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form id="addForm">
                        <div className="form-group help mb-4">
                          <input
                            name="name"
                            type="text"
                            tabIndex="1"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputName"
                            placeholder="name"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <div className="form-group help mb-4">
                          <input
                            name="category"
                            type="text"
                            tabIndex="2"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputCat"
                            placeholder="category"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <div className="form-group help mb-4">
                          <input
                            name="description"
                            type="text"
                            tabIndex="3"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputDesc"
                            placeholder="description"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <div className="form-group help mb-4">
                          <input
                            name="price"
                            type="text"
                            tabIndex="4"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputPrice"
                            placeholder="price"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <div className="form-group help mb-4">
                          <input
                            name="amount"
                            type="text"
                            tabIndex="5"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputAmount"
                            placeholder="amount"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <div className="form-group help mb-4">
                          <input
                            name="picture"
                            type="text"
                            tabIndex="6"
                            autoComplete="current-email"
                            className="form-control"
                            id="inputPic"
                            placeholder="picture url"
                            required
                          />
                          <i className="fa fa-user" />
                        </div>
                        <button type="button" className="btn btn-dark btn-lg">
                          Добавить
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
            </>
          ) : (
            <div
              className="good-container"
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {goods.map((good) => (
                <>
                  <div className="goods" key={good.id}>
                    <img
                      src={good.picture}
                      alt="goodpic"
                      style={{
                        width: '150px',
                      }}
                    />
                  </div>
                  <div className="name">{good.name}</div>
                  <div className="link-container">
                    <div className="good-link">
                      <a href={`good/show/${good.id}`}>show</a>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </main>
      <script defer src="/js/add.js" />
      <script defer src="/js/delete.js" />
    </Layout>
  );
};
