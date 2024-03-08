const React = require('react');

const Layout = require('../views/Layout');

module.exports = function Cart({ login, userId, prods }) {
  return (
    <Layout login={login} userId={userId}>
      <script defer src="#"></script>
      <h2 className="cart" style={{ textAlign: 'center' }}>
        Your shopping cart:
      </h2>
      <div>
      </div>
    </Layout>
  );
};
