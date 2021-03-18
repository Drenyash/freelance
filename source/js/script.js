const avatar = document.querySelector('.user-nav__link--avatar');
const userMenu = document.querySelector('.user__menu');
const avatarElement = document.querySelectorAll('.user-nav__item');

avatar.addEventListener('click', (evt)=> {
  evt.preventDefault();
  if (!avatarElement[3].classList.contains('user-nav__item--active')) {
    avatarElement[3].classList.add('user-nav__item--active');
  } else {
    avatarElement[3].classList.remove('user-nav__item--active');
  }
})

document.addEventListener("click", (evt) => {
  let target = evt.target;
  if (!avatarElement[3].contains(target)) {
    avatarElement[3].classList.remove('user-nav__item--active');
  }
})