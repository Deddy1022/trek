const modalTriggers = document.querySelectorAll('.modalTrigger');
const conditions = document.querySelector('.condition-modal');
const conditionFrench = document.querySelector('.c--french');
const modalContainer = document.querySelectorAll('.bg-modal');
const dismiss = document.querySelector(".dismiss");
const body = document.body;
const closes = document.querySelectorAll('.close');
const closed = document.querySelector('.closed');
modalTriggers.forEach(modalTrigger =>
  modalTrigger.addEventListener('click', () => {
    modalContainer[2].style.visibility = "visible";
    body.style.overflow = "hidden";
    document.querySelector('#modal').classList.add('affiche');
  })
)

conditions.addEventListener('click', function() {
  console.log(this)
  modalContainer[1].style.visibility = "visible";
  body.style.overflow = "hidden";
  document.querySelector('#modalCondition').classList.add('affiche');
});

conditionFrench.addEventListener('click', function() {
  console.log(this)
  modalContainer[0].style.visibility = "visible";
  body.style.overflow = "hidden";
  document.querySelector('#modalConditionFrench').classList.add('affiche');
})

closes.forEach(cls =>
  cls.addEventListener('click', () => {
    dismissModal();
    document.querySelector('#modal').classList.remove('affiche');
    document.querySelector('#modalCondition').classList.remove('affiche');
  })
)
closed.addEventListener('click', () => {
  console.log(this);
  modalContainer[0].style.visibility = "hidden";
  body.style.overflow = "auto";
  document.querySelector('#modalConditionFrench').classList.remove('affiche');
})

dismiss.addEventListener('click', function() {
  dismissModal();
  document.querySelector('#modalCondition').classList.remove('affiche');
})

function dismissModal() {
  modalContainer.forEach(container => container.style.visibility = "hidden");
  body.style.overflow = "auto";
}
