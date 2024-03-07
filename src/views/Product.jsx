const React = require('react');
const Layout = require('./Layout');

module.exports = function Product({ good, login, isSeller }) {
  return (
    <Layout login={login} isSeller = {isSeller}>
      <main
        className="content-wrapper"
        role="main"
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className="left">
          <img
            src={good.picture}
            style={{
              width: '150px',
            }}
          ></img>
          {isSeller ? (
            <div>editadmin
              <button type='button'>edit</button>
            </div>
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
        </div>
      </main>
    </Layout>
  );
};
