const form = document.querySelector('#regForm');
const regMsg = document.querySelector('.regMsg');

console.log('Скрипт подключен');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const inputs = Object.fromEntries(data);
  console.log(inputs);
  try {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    console.log('smth came');
    console.log('response', response);
    console.log('result', result);

    if (result.msgDone) {
      regMsg.innerText = 'Регистрация прошла успешно';
      //   setTimeout(() => {
      //     window.location.href = '/';
      //   }, 1000);
    }
    if (result.err) {
      regMsg.innerText =
        'Пользователь с таким логином или почтой уже существует';
    }
  } catch (error) {
    console.log('Ошибка:', error);
  }
});
