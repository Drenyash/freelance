const filterBtn = document.querySelector('.board__selection');
const filterBox = document.querySelector('.board__selection-more');
const controlCancel = document.querySelector('.board__control .control__cancel');

filterBtn.addEventListener('click', ()=> {
  if (filterBox.classList.contains('board__selection-more--close')) {
    filterBox.classList.remove('board__selection-more--close');
    filterBox.classList.add('board__selection-more--open');
  } else {
    filterBox.classList.add('board__selection-more--close');
    filterBox.classList.remove('board__selection-more--open');
  }
})

controlCancel.addEventListener('click', ()=> {
  filterBox.classList.add('board__selection-more--close');
  filterBox.classList.remove('board__selection-more--open');
})