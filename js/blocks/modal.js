const modal = document.querySelectorAll('.modal');
const modalOpen = document.getElementById('burg');
const modalClose = document.getElementById('close');
const modalImg = document.getElementById('img');
const btns = document.querySelectorAll('.sup');
const over = document.getElementById('overlay');
const imgClose = document.getElementById('btn-close')

// модальное окно

let scrollY = 0;

function openModal () {  
  for(let i = 0; i < modal.length; i++) {
    modal[i].classList.add('open')
  }
  for (let btn of btns) {
    btn.classList.add('close');
  }
  modalOpen.classList.add('close');
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function closeModal () { 
  for(let i = 0; i < modal.length; i++) {
  modal[i].classList.remove('open')
  }
  for (let btn of btns) {
    btn.classList.remove('close');
  }
  modalOpen.classList.remove('close');
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
   scrollY = document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

modalOpen.addEventListener('click', function (e) {
  openModal();
  e.preventDefault();
})

modalClose.addEventListener('click', function (e) {
  closeModal();
  e.preventDefault();
})

window.addEventListener('resize',function(){
  if (window.screen.width > 867) {
    closeModal();
  }
});

// октрытие фото

img.addEventListener('click', function (e) {
  img.classList.add('on')
  over.classList.remove('close');
  imgClose.classList.remove('close'); 
  for (let mod of modal) {
    mod.classList.add('close');
  }
})

over.addEventListener('click', function (e) {
  img.classList.remove('on')
  over.classList.add('close');
  imgClose.classList.add('close'); 
  for (let mod of modal) {
    mod.classList.remove('close');
  }
})

imgClose.addEventListener('click', function (e) {
  img.classList.remove('on')
  over.classList.add('close');
  imgClose.classList.add('close'); 
  for (let mod of modal) {
    mod.classList.remove('close');
  }
})

