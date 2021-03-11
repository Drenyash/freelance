const faqBtn = document.querySelector('.faq__btn');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__cancel');

faqBtn.addEventListener('click', ()=> {
  if (!modal.classList.contains('modal--active')) {
    modal.classList.add('modal--active');
  } else {
    modal.classList.remove('modal--active');
  }
})

modalClose.addEventListener('click', ()=> {
  if (!modal.classList.contains('modal--active')) {
    modal.classList.add('modal--active');
  } else {
    modal.classList.remove('modal--active');
  }
})