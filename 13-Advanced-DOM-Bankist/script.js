/* **************Code by Najir Seikh - 28/06/2023************** */
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* **************Implementig Smooth Scrolling - 02/07/2023************** */

btnScrollTo.addEventListener('click', e => {
  // Old school way of scrolling
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   // s1coords.left + window.scrollX,
  //   s1coords.left + window.pageXOffset,
  //   // s1coords.left + window.scrollY,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way of scrolling
  // section1.scrollIntoView({ behavior: 'instant' });
  section1.scrollIntoView({ behavior: 'smooth' });
});

/* **************Event Delegation: Implementig Page Navigation - 02/07/2023************** */

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/* **************Selecting, Creating, and Deleting Elements - 01/07/2023************** */
/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
// console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie" >Got it!</button>';

// header.prepend(message); // add to first position
header.append(message); // add to last position
// header.append(message.cloneNode(true)); // add to last position and clone it
// header.before(message); // add before header
// header.after(message); // add after header

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();
  message.parentElement.removeChild(message);
});
*/
/* **************Styles, Attributes and Classes - 02/07/2023************** */
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

// Non-standard
console.log(logo.designer); // not worked
console.log(logo.getAttribute('designer')); // but this way it works
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Claasses
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

*/
/* **************Types of Events and Event Handlers - 02/07/2023************** */
/*
const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// });

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = e => {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };
*/
/* **************Event Propagation in Practice - 02/07/2023************** */
/*
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/
