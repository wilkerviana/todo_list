const handleForm = require('./components/form.js');
const doneCard = require('./components/done.js');

function initialize() {
  handleForm();
  const btnSaveForm = document.querySelector('.btn-form_save');
  btnSaveForm.addEventListener('click', addTodo);
  appendEvents();
}

function appendEvents() {
  const container = document.querySelector('.cards-todo');
  const cards = [...container.querySelectorAll('.card')];
  cards.forEach(handleCard);
  reorderCards();
}

function reorderCards(){
  const container = document.querySelector('.cards-todo');
  const cards = [...container.querySelectorAll('.card')];
  cards
    .sort((a,b) => {
      const timerA = a.querySelector('.content-timer');
      const timerB = b.querySelector('.content-timer');
      
      const [hoursA,minutesA] = timerA.textContent.split(':');
      const [hoursB,minutesB] = timerB.textContent.split(':');

      return +hoursA * 60 + +minutesA <= +hoursB * 60 + +minutesB ? -1 : 1;
    })
    .sort((a) => {
      return a.getAttribute('data-dismissed') ? 1 : 0;
    })
    .forEach(card => container.appendChild(card));
}


/**
 * Manuseia o card com a tarefa.
 * @param {HTMLElement} card 
 */
function handleCard(card) {
  const remove = card.querySelector('.btn-card_remove');
  const done = card.querySelector('.btn-card_done');
  const dismiss = card.querySelector('.btn-card_dismiss');
  done.addEventListener('click', () => {
    const titleCard = card.querySelectorAll('.card-title');
    doneCard(titleCard);
    card.remove();
  });
  remove.addEventListener('click', () => card.remove());
  dismiss.addEventListener('click', () => {
    card.setAttribute('data-dismissed',true);
    reorderCards();
  });
}


function addTodo(event){
  event.preventDefault();
  const name = document.querySelector('[data-input="name"]');
  const date = document.querySelector('[data-input="date"]');
  const container = document.querySelector('.cards-todo');


  let e = document.createElement('div');
  let description = document.createElement('div');
  let buttons = document.createElement('div');
  e.classList.add('card');

  // add description card
  description.classList.add('card-row');
  description.innerHTML = `<h2 class="card-title">${name.value}</h2>
                            <span class="card-timer">
                              <i class="card-timer"></i>
                              <span class="content-timer">${date.value}</span>
                            </span>`;
  // add buttons card
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
