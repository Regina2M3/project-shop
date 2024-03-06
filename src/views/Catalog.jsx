const React = require('react');
const Layout = require('../views/Layout');

module.exports = function Catalog({ goods }) {
  return (
    <Layout>
      <h1>all products:</h1>

      <main role="main">
        <ul className="goods">
          {goods.map((good) => (
            <li className="good" key={good.id}>
              <img className="pic" src={good.picture} alt="prodpic"></img>
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
      </main>
      <script defer src="/js/application.js" />
    </Layout>
  );
};
