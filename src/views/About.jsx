const React = require('react');

const Layout = require('../views/Layout');

module.exports = function About({ login }) {
  return (
    <Layout login = { login }>
      <script defer src="#"></script>
      <h2 className="greet" style={{ textAlign: 'center' }}>
        PRIVET!&#128165;
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '100px',
          padding: '100px',
          
        }}
        className="aboutContainer"
      >
        <div className='text-container'>
        <div
          style={{
            backgroundColor: 'wheat',
            width: '350px',
            textAlign: 'center',
            padding: '10px',
            border: '5px solid #FF1493',
            borderRadius: '8px',
            margin: '30px',
          }}
        >
          Мы - ЖМЫХ, и мы были созданы, чтобы ты мог носить уникальные авторские
          вещи! А если попроще, то мы обычные ребята, объединенные одной идеей:
          создать условия, творческое пространство, где мы и наши друзья смогут
          себя выражать.
        </div>
        <div style={{
            backgroundColor: 'wheat',
            width: '350px',
            textAlign: 'center',
            padding: '10px',
            border: '5px solid #1E90FF',
            borderRadius: '8px',
            margin: '30px',
          }}>
          У нас нет больших офисов и производств, наша команда состоит буквально
          из пары человек, и каждый выкладывается на полную! Все ради
          творческого безумия, которым стал наш бренд! Надеемся, что ЖМЫХ
          понравится тебе так же, как он нравится нам.
        </div>
        </div>
        <div className='about-pic' style={{
            alignSelf: 'center',
        }}>
          <img src="/assets/glitch.gif" alt="about pic" style={{
            width: '450px',
            borderRadius: '8px',
        }}/>
        </div>
      </div>
    </Layout>
  );
};
