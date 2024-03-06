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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="#" />
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
              <span className="nav-text">
                твой любимый <br /> грибной бренд
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
                    <a class="nav-link active" aria-current="page" href="/catalog">
                      Каталог auth
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      О нас
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Контакты
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      Хочу сотрудничать!
                    </a>
                  </li>
                  <li>
                    <a className="cart" href="/cart">
                      <img src="/assets/layer1.svg" alt="cart" />
                    </a>
                  </li>
                </ul>
                <a href="/logout"><button type="button" className="btn btn-danger">Выйти</button></a>
              </div>
            </div>
          </nav>
        ) : (
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="/assets/giflogocrop.gif"
                  alt="test"
                  style={{ width: '250px', height: '100px' }}
                />
              </a>
              <span className="nav-text">
                твой любимый <br /> грибной бренд
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
                    <a class="nav-link active" aria-current="page" href="/catalog">
                      Каталог no auth
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      О нас
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Контакты
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                      Хочу сотрудничать!
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
