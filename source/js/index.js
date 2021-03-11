// info scripts
const infoItem = document.querySelectorAll('.info__item');
const faqItem = document.querySelectorAll('.faq__element');

infoItem.forEach((element)=> {
  const infoTitle = element.querySelector('.info__title');
  infoTitle.addEventListener('click', (evt)=> {
    document.querySelectorAll(".info__item").forEach(item => item.classList.remove("info__item--active"));
    element.classList.add("info__item--active");
  })
})

faqItem.forEach((element)=> {
  element.addEventListener('click', (evt)=> {
    document.querySelectorAll(".faq__element").forEach(item => item.classList.remove("faq__element--active"));
    element.classList.add("faq__element--active");
  })
})