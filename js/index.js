console.log('App started...');

const burger = document.getElementById('js-burger');
const menu = document.getElementById('js-menu');
const linkHeader = document.querySelectorAll('.c-nav__link');
const fullScreenDisable = document.getElementById('js-fullScreenDisable');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('e-burger--active');
  menu.classList.toggle('c-nav--active');
  fullScreenDisable.classList.toggle('e-fullScreenDisable--active');
  body.classList.toggle('scroll-disable');
});

linkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    fullScreenDisable.classList.remove('e-fullScreenDisable--active');
    burger.classList.remove('e-burger--active');
    menu.classList.remove('c-nav--active');
    body.classList.remove('scroll-disable');
  });
});

fullScreenDisable.addEventListener('click', () => {
  fullScreenDisable.classList.remove('e-fullScreenDisable--active');
  burger.classList.remove('e-burger--active');
  menu.classList.remove('c-nav--active');
  body.classList.remove('scroll-disable');
});

fullScreenDisable.addEventListener('touchmove', () => {
  fullScreenDisable.classList.remove('e-fullScreenDisable--active');
  burger.classList.remove('e-burger--active');
  menu.classList.remove('c-nav--active');
  body.classList.remove('scroll-disable');
});

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('header').style =
      'background-color: rgba(33,33,33, 1); transition: all 1s linear';
  } else {
    document.querySelector('header').style =
      'background-color: transparent; transition: all 1s linear';
  }
}
