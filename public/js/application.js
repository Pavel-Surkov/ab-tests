
'use strict';

document.addEventListener(`DOMContentLoaded`, () => {});

// Mobile menu toggle
(function toggleMobileMenu() {
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
})();

// Function for scores to connect svg to percentage
(function calculateScoreRound() {
  const scoreCountElements = document.querySelectorAll('.progress-res');

  scoreCountElements.forEach((el) => {
    const svgBoxElement = el.nextElementSibling;
    const circleElement = svgBoxElement.querySelector('.progress-circle');

    const scoreInPercent = parseInt(el.innerHTML);

    circleElement.style.strokeDasharray = `${scoreInPercent}, 100`;
  });
})();

// Function for dropdowns
(function toggleDropdowns() {
  const buttons = document.querySelectorAll('.drop-btn');

  buttons.forEach((btn) => {
    const dropdown = btn.nextElementSibling;

    if (dropdown.matches('.dropdown-toggle-menu')) {
      btn.addEventListener('click', () => {
        dropdown.classList.toggle('opened');
      });
    }
  });
})();
