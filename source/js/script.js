const avatar = document.querySelector('.user-nav__link--avatar');
const menu = document.querySelector('.menu');
const avatarElement = document.querySelectorAll('.user-nav__item');
const burger = document.querySelector('.burger');

avatar.addEventListener('click', (evt)=> {
  evt.preventDefault();
  if (menu.style.display != 'block') {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
})

burger.addEventListener('click', ()=> {
  burger.classList.toggle('burger--active');
  if (menu.style.display != 'block') {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
})

document.addEventListener("click", (evt) => {
  let target = evt.target;
  if (!avatarElement[3].contains(target)) {
    avatarElement[3].classList.remove('user-nav__item--active');
  }
})