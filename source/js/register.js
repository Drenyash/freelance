const password = document.querySelector('input[type="password"]');
const eyeToChange = document.querySelector('.register__showpass');

eyeToChange.addEventListener('click', ()=> {
  if (password.type == 'text') {
    password.type = 'password';
  } else {
    password.type = 'text';
  }
})