const React = require('react');
const Layout = require('./Layout');

module.exports = function Product({ good, login, isSeller }) {
  return (
    <Layout login={login} isSeller={isSeller}>
      <main
        className="content-wrapper"
        role="main"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          className="left"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img
            src={good.picture}
            style={{
              width: '350px',
              margin: '10px',
              borderRadius: '8px',
            }}
          ></img>
          {isSeller ? (
            <a href={`/show/edit/${good.id}`}>
              <button type="button">edit</button>
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="right">
          <div
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
            }}
          >
            {good.name}
          </div>
          <div>О товаре: {good.description}</div>
          <div>Цена: {good.price}</div>
          <div>В наличии: {good.amount}</div>
          <div className="add-btn">
            <a href={`/cart/add/${good.id}`}>add to cart</a>
          </div>
        </div>
      </main>
    </Layout>
  );
};
