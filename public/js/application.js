
'use strict';

document.addEventListener(`DOMContentLoaded`, () => {});

// Mobile menu toggle
const menuBtn = document.querySelector('#m-menu-toggle');
const menuElement = document.querySelector(menuBtn.dataset.target);
const blocker = document.querySelector('#blocker');
const mobileHeader = document.querySelector('#mobile-header');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('navbar-toggler-close');
  menuElement.classList.toggle('m-menu-opened');
  blocker.classList.toggle('blocker-opened');
  mobileHeader.classList.toggle('aside-primary-light');
});
