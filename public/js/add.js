console.log('here');

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

// const goodCard = document.querySelector('.good-container');

// goodCard.addEventListener('click', async (event) => {
//   console.log('listening');
//   console.log(event.target);
//   if (event.target.classList.contains('delBtn')) {
//     try {
//       console.log('delll');
//       const { id } = event.target;
//       const response = await fetch(`/catalog/delete/${id}`, {
//         method: 'DELETE',
//       });

//       const result = await response.json();
//       if (result.success) {
//         const deletedTaskCard = event.target.closest('.goods');
//         deletedTaskCard.remove();
//       } else {
//         console.error('Failed to delete the item');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });
