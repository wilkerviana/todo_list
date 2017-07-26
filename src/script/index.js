function initialize() {
  const cards = document.querySelectorAll('.card');
  const btnAddCard = document.querySelector('.btn-form_activate');
  const btnCloseForm = document.querySelector('.btn-form_close');
  cards.forEach(handleCard);
  btnAddCard.addEventListener('click', openForm);
  btnCloseForm.addEventListener('click', closeForm);
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

function openForm(){
  const footerOverlay = document.querySelector('.footer-overlay');
  const form = document.querySelector('.form-todo');
  footerOverlay.classList.add('_active');
  form.classList.add('_active');
  this.classList.add('_hide');
}

function closeForm(){
  const footerOverlay = document.querySelector('.footer-overlay');
  const form = document.querySelector('.form-todo');
  const btnAddCard = document.querySelector('.btn-form_activate');
  footerOverlay.classList.remove('_active');
  form.classList.remove('_active');
  btnAddCard.classList.remove('_hide');
}

window.addEventListener('load', initialize);
