const filterBtn = document.querySelector('.board__selection');
const filterBox = document.querySelector('.board__selection-more');
const controlCancel = document.querySelector('.board__control .control__cancel');

filterBtn.addEventListener('click', ()=> {
  if (filterBox.classList.contains('board__selection-more--close')) {
    filterBtn.classList.add('board__selection--active')
    filterBox.classList.remove('board__selection-more--close');
    filterBox.classList.add('board__selection-more--open');
  } else {
    filterBtn.classList.remove('board__selection--active')
    filterBox.classList.add('board__selection-more--close');
    filterBox.classList.remove('board__selection-more--open');
  }
})

controlCancel.addEventListener('click', ()=> {
  filterBtn.classList.remove('board__selection--active')
  filterBox.classList.add('board__selection-more--close');
  filterBox.classList.remove('board__selection-more--open');
})