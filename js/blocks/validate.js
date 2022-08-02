const username = document.getElementById('username');
const phone = document.getElementById('phone');
const descr = document.getElementById('descr');
const btn = document.getElementById('form-btn');
const form = document.getElementById('form');
const pName = document.getElementById('p-name');
const pPhone = document.getElementById('p-phone');
const pDescr = document.getElementById('p-descr');
let messages = document.querySelectorAll('.message');
const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

function nameValid () {
  if (username.value == "") {
    messages[0].innerHTML = 'Введите Ваше Имя, пожалуйста';
    messages[0].classList.remove('close');
  } else {
    messages[0].classList.add('close');
  }
}

function phoneValid () {
  if (phone.value == "") {
    messages[1].innerHTML = 'Введите Ваш номер телефона, пожалуйста';
    messages[1].classList.remove('close');
  } else if (!reg.test(phone.value)) {
    messages[1].innerHTML = 'Телефон введен неправильно';
    messages[1].classList.remove('close');
  } else {
    messages[1].classList.add('close');
  }
}

function descrValid () {
  if (descr.value == '') {
    messages[2].innerHTML = 'Введите Ваш запрос, пожалуйста';
    messages[2].classList.remove('close');
  } else if (descr.value.length < 5) {
    messages[2].innerHTML = 'Запрос слишком короткий!';
    messages[2].classList.remove('close');
  } else {
    messages[2].classList.add('close');
  }
}

form.addEventListener ('submit', function (e) {
  nameValid();
  phoneValid();
  descrValid();
  pName.classList.remove('inp');
  pPhone.classList.remove('inp');
  pDescr.classList.remove('inp');
  e.target.reset();
  e.preventDefault();
})

username.addEventListener ('input', function (e) {
    pName.classList.add('inp');
})
phone.addEventListener ('input', function (e) {
    pPhone.classList.add('inp');
})
descr.addEventListener ('input', function (e) {
    pDescr.classList.add('inp');
})