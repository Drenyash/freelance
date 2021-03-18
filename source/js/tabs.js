const title = document.querySelector('.register__title');
const description = document.querySelector('.register__description');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');
 
const bgImage = document.querySelector('.reg');

bgImage.style.backgroundImage = "url('../img/reg-1.jpg')";

let currentSlide = 0;
let currentTrigger = 0;

function nextSlide() {
  if (currentSlide < 3) {
    goToSlide(currentSlide+=1, currentTrigger+=1);
  }
}

function previousSlide() {
  if (currentSlide > 0) {
  goToSlide(currentSlide-=1, currentTrigger-=1);
  }
}

function goToSlide(slide, trigger) {
  const activeTrigger = document.querySelector('.tab-header__active');
  const activeContent = document.querySelector('.tab-content__active');
  const slides = document.querySelectorAll('.tab-content__item');
  const triggers = document.querySelectorAll('.tab-header__item');
  currentSlide = slide;
  currentTrigger = trigger;
  if (trigger == 2) {
    activeTrigger.classList.remove('tab-header__active');
    triggers[1].classList.add('tab-header__active');
    if (!triggers[1].classList.contains('tab-header__active')) {
      triggers[1].classList.add('past-element');
    } else {
      triggers[1].classList.remove('past-element');
    }
  } else if (trigger == 3){
    activeTrigger.classList.remove('tab-header__active');
    triggers[2].classList.add('tab-header__active');
    triggers[trigger-2].classList.add('past-element');
  } else {
    activeTrigger.classList.remove('tab-header__active');
    triggers[trigger].classList.add('tab-header__active');
    if (!triggers[0].classList.contains('tab-header__active')) {
      triggers[0].classList.add('past-element');
    } else {
      triggers[0].classList.remove('past-element');
    }
  }

  if (slide < 4) {
    activeContent.classList.remove('tab-content__active');
    slides[currentSlide].classList.add('tab-content__active');
  }
  if (currentSlide == 0) {
    title.textContent = 'Настройка аккаунта';
    description.textContent = 'Укажите дополнительную информацию о вас'
    description.style.display = 'block';
    prevBtn.style.display = 'none';
    bgImage.style.backgroundImage = "url('../img/reg-1.jpg')";
  } else if (currentSlide == 1) {
    title.textContent = 'Выберите тип аккаунта';
    description.textContent = 'Вы регистрируетесь как исполнитель или работодатель?';
    description.style.display = 'block';
    prevBtn.style.display = 'block';
    bgImage.style.backgroundImage = "url('../img/delivery.jpg')";
  } else if (currentSlide == 2) {
    title.textContent = 'Выберите сферу деятельности';
    description.textContent = 'Укажите сферу деятельности в которой вы будете оказывать услуги';
    description.style.display = 'block';
    prevBtn.style.display = 'block';
    bgImage.style.backgroundImage = "url('../img/analytics.jpg')";
  } else if (currentSlide == 3) {
    title.textContent = 'Укажите навыки, которыми вы владеете:';
    description.style.display = 'none';
    prevBtn.style.display = 'block';
    bgImage.style.backgroundImage = "url('../img/social.jpg')";
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

