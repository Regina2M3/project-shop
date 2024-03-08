const React = require('react');

//* условная верстка для navBar
module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          type="image/x-icon"
          href="/assets/favicon.ico"
          rel="shortcut icon"
        />
        {/* <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Kode+Mono:wght@400..700&family=Roboto+Serif:opsz@8..144&family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anta&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Indie+Flower&family=Kode+Mono:wght@400..700&family=Roboto+Serif:opsz@8..144&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link> */}
        <link rel="stylesheet" href="/css/index.css" />
        <title>jmyh</title>
      </head>
      <header>
        {login ? (
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img
                  src="/assets/giflogocrop.gif"
                  alt="test"
                  style={{ width: '250px', height: '100px' }}
                />
              </a>
              <span
                className="nav-text"
                style={{
                  marginRight: '50px',
                }}
              >
                your favorite
                <br />
                mushroom brand
              </span>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/catalog"
                    >
                      Каталог auth
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      О нас
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacts">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className="cart"
                href="/cart"
                style={{
                  marginRight: '20px',
                }}
              >
                <img src="/assets/layer1.svg" alt="cart" />
              </a>
              <a href="/logout">
                <button type="button" className="btn btn-danger">
                  Выйти
                </button>
              </a>
            </div>
          </nav>
        ) : (
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img
                  src="/assets/giflogocrop.gif"
                  alt="test"
                  style={{ width: '250px', height: '100px' }}
                />
              </a>
              <span
                className="nav-text"
                style={{
                  marginRight: '50px',
                }}
              >
                your favorite
                <br />
                mushroom brand
              </span>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/catalog"
                    >
                      Каталог no auth
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">
                      О нас
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contacts">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </header>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};
