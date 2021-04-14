const open = document.querySelector('#open');
const nav = document.querySelector('#nav');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
  nav.classList.add('visible');
  nav.classList.remove('hidden');
})

close.addEventListener('click', () => {
  nav.classList.remove('visible');
  nav.classList.add('hidden');
})