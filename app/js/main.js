'use strict';

document.addEventListener(`DOMContentLoaded`, () => {});

// Mobile menu toggle
const menuBtn = document.querySelector('#m-menu-toggle');
const menuElement = document.querySelector(menuBtn.dataset.target);
const blocker = document.querySelector('#blocker');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('navbar-toggler-close');
  menuElement.classList.toggle('m-menu-opened');
  blocker.classList.toggle('blocker-opened');
});
