function initialize() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(handleCard);
}

/**
 * Manuseia o card com a tarefa.
 * @param {HTMLElement} card 
 */
function handleCard(card) {
  const remove = card.querySelector('.btn-card_remove');
  const dismiss = card.querySelector('.btn-card_dismiss');

  remove.addEventListener('click', () => card.remove());
  dismiss.addEventListener('click', () => {
    console.log('Cancel');
  });
}

window.addEventListener('load', initialize);
