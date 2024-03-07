const React = require('react');

const Layout = require('../views/Layout');

module.exports = function Contact({ login }) {
  return (
    <Layout login = { login }>
      <script defer src="#"></script>
      <h2 className="greet" style={{ textAlign: 'center' }}>
        Связаться с нами:
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
          padding: '100px',
        }}
        className="contactContainer"
      >
        <div
          style={{
            width: '160px',
            height: '60px',
            textAlign: 'center',
            padding: '10px',
            color: 'white',
            fontSize: '18px',
            backgroundColor: '#00BFFF',
            borderRadius: '8px',
          }}
        >
          <a href="https://t.me/jmhoodies" target="_blank">Telegram</a>
        </div>
        <div
          style={{
            width: '90px',
            textAlign: 'center',
            padding: '10px',
            color: 'white',
            fontSize: '18px',
            backgroundColor: '#00BFFF',
            borderRadius: '8px',
          }}
        >
          <a href="https://vk.com/jmhoodies" target="_blank">Vk</a>
        </div>
      </div>
    </Layout>
  );
};
