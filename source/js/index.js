// info scripts
const infoItem = document.querySelectorAll('.info__item');

infoItem.forEach((element)=> {
  const infoTitle = element.querySelector('.info__title');
  infoTitle.addEventListener('click', (evt)=> {
    document.querySelectorAll(".info__item").forEach(item => item.classList.remove("info__item--active"));
    element.classList.add("info__item--active");
  })
})