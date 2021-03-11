const userNavigation = document.querySelector('.user__list');
const userItem = userNavigation.querySelectorAll('.user__item');

if (userNavigation.classList.contains('user__list--login')) {
  userItem.forEach((element, i)=> {
    if (!element.classList.contains('user__item--logout')) {
      element.style.display = 'block';
    }
  })
} else {
  userItem.forEach((element, i)=> {
    if (element.classList.contains('user__item--logout')) {
      element.style.display = 'block';
    }
  })
}