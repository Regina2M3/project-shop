const modal = document.querySelector('#addForm');

modal.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('btn')) {
    const data = new FormData(modal);
    const res = Object.fromEntries(data);
    console.log(res, 'res');
    try {
      const response = await fetch('/catalog/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      console.log(response, 'respmodal');
      const result = await response.json();
      console.log(result, 'resultmodal');
      if (result) {
        window.location.href = '/catalog';
      }
    } catch (error) {
      console.log('Ошибочка<<<<<<<', error);
    }
  }
});
