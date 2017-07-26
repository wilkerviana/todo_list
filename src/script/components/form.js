function handle() {
  const container = document.querySelector('.form-todo');
  const overlay = document.querySelector('.overlay');
  const open = document.querySelector('.btn-form_open');
  const close = document.querySelector('.btn-form_close');

  open.addEventListener('click', () => {
    overlay.classList.add('_active');
    container.classList.add('_active');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('_active');
    container.classList.remove('_active');
  });
}

module.exports = handle;
