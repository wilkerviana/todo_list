function done(title){
  const container = document.querySelector('.cards-done');
  
  let e = document.createElement('div');
  let description = document.createElement('div');
  e.classList.add('card');

  // add description card
  description.classList.add('card-row');
  description.innerHTML = `<h2 class="card-title">${title}</h2>`;

  container.appendChild(e);
  e.appendChild(description);
}

module.exports = done;