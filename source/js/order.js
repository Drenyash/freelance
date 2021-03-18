const orderElement = document.querySelectorAll('.order__element');
const modal = document.querySelector('.modal');
const close = modal.querySelector('.btn--transparent');

orderElement.forEach((element)=> {
  const btn = element.querySelectorAll('.order__btn');
  btn[1].addEventListener('click', ()=> {
    modal.classList.toggle('modal--active');
  })
  close.addEventListener('click', ()=> {
    modal.classList.toggle('modal--active');
  })
  element.addEventListener('click', ()=> {
    const activeElement = document.querySelector('.order__element--active');
    activeElement.classList.remove('order__element--active');
    element.classList.add('order__element--active');
  })
})