const handleForm = require('./components/form.js');

function initialize() {
  handleForm();
  const btnSaveForm = document.querySelector('.btn-form_save');
  btnSaveForm.addEventListener('click', addTodo);

  appendEvents();
}

function appendEvents() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(handleCard);
}


/**
 * Manuseia o card com a tarefa.
 * @param {HTMLElement} card 
 */
function handleCard(card) {
  const remove = card.querySelector('.btn-card_remove');
  const done = card.querySelector('.btn-card_done');
  remove.addEventListener('click', () => card.remove());
  done.addEventListener('click', () => {
    console.log('done');
  });
}


function addTodo(event){
  event.preventDefault();
  const name = document.querySelector('[data-input="name"]');
  const date = document.querySelector('[data-input="date"]');
  const container = document.querySelector('.cards-container');


  let e = document.createElement('div');
  let description = document.createElement('div');
  let buttons = document.createElement('div');
  e.classList.add('card');

  // cria descricao
  description.classList.add('card-row');
  description.innerHTML = `<h2 class="card-title">${name.value}</h2>
                            <span class="card-timer">
                              <i class="card-timer"></i>
                              <span>${date.value}</span>
                            </span>`;
  // cria botoes
  buttons.classList.add('card-buttons');
  buttons.innerHTML = `<button class="btn-cards btn-card_done">
                        <i class="fa fa-check"></i>
                        <span>Done</span>
                      </button>
                      <button class="btn-cards btn-card_remove">
                        <i class="fa fa-times"></i>
                        <span>Delete</span>
                      </button>
                      <button class="btn-cards btn-card_dismiss">
                        <i class="fa fa-ban"></i>
                        <span>Dismiss</span>
                      </button>`;

  container.appendChild(e);
  e.appendChild(description);
  e.appendChild(buttons);
  
  name.value = '';
  date.value = '';

  appendEvents();
}


window.addEventListener('load', initialize);
