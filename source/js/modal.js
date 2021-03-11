const faqBtn = document.querySelector('.faq__btn');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__cancel');
const faqItem = document.querySelectorAll('.faq__element');

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

faqItem.forEach((element)=> {
  element.addEventListener('click', (evt)=> {
    document.querySelectorAll(".faq__element").forEach(item => item.classList.remove("faq__element--active"));
    element.classList.add("faq__element--active");
  })
})