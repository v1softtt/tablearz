window.onload = function() {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function() {
        preloader.classList.add('preloader-hidden');
  }, 990);
}
const lightbox = GLightbox({});


const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;
if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  });
}
var iconPost = document.querySelector('.icon-post');
var shareText = document.querySelector('.fa');
