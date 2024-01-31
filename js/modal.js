const modalTrigger = document.querySelector('#modalTrigger');
const modalContainer = document.querySelector('.bg-modal');
const body = document.body;
const cls = document.querySelector('.close');
modalTrigger.addEventListener('click', () => {
  modalContainer.style.visibility = "visible";
  body.style.overflow = "hidden";
  document.querySelector('#modal').classList.add('affiche');
});

cls.addEventListener('click', () => {
  modalContainer.style.visibility = "hidden";
  body.style.overflow = "auto";
  document.querySelector('#modal').classList.remove('affiche');
});
