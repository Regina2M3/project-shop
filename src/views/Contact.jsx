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
        <div className='media-btn'
          style={{
            width: '180px',
            height: '70px',
          }}
        >
          <a href="https://t.me/jmhoodies" target="_blank">Telegram
          <img src="/assets/tg.svg" alt="tg" />
          </a>

        </div>
        <div className='media-btn'
          style={{
            width: '200px',
            height: '80px',
          }}
        >
          <a href="https://vk.com/jmhoodies" target="_blank">Vkontakte
          <img src="/assets/vk.svg" alt="vk" />
          </a>
        </div>
      </div>
    </Layout>
  );
};
