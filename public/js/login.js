const logForm = document.querySelector('#logForm');

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    console.log('input empty');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      console.log(response, 'resp>>>>>>>>>');
      const result = await response.json(); // ожидаем, что в result.regDone
      console.log(result, 'result<<<<');
      if (result.msg) {
        const msg = document.querySelector('.logMsg');
        msg.style.color = 'green';
        msg.innerText = result.msg;
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
      if (result.err) {
        const errMsg = document.querySelector('.logMsg');
        errMsg.innerText = result.err;
        errMsg.style.color = 'red';
        // setTimeout(() => {
        //     window.location.href = '/';
        //   }, 1500);
      }
    } catch (error) {
      console.log('Ошибочка<<<<<<<', error);
    }
  }
});
