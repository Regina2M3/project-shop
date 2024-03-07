const goodCard = document.querySelector('.good-container');

goodCard.addEventListener('click', async (event) => {
  console.log('listening');
  console.log(event.target);
  if (event.target.classList.contains('delBtn')) {
    try {
      console.log('delll');
      const { id } = event.target;
      const response = await fetch(`/catalog/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        const deletedTaskCard = event.target.closest('.goods');
        deletedTaskCard.remove();
      } else {
        console.error('Failed to delete the item');
      }
    } catch (error) {
      console.log(error);
    }
  }
});