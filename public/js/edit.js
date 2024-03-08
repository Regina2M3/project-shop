const { editGood } = document.forms;

editGood.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(editGood);
  const inputs = Object.fromEntries(formData);
  // console.log(inputs, 'inp');
  try {
    // const { id } = event.target;
    // console.log(event.target);
    const response = await fetch(`/show/edit/${event.target.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    console.log(response, 'resp');
    const result = await response.json();
    if (result) {
      window.location.href = '/catalog';
    } else {
      console.log('no result');
    }
  } catch (error) {
    console.log('general err', error);
  }
});
