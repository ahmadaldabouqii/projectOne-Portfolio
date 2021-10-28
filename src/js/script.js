'use strict';

const section_1 = document.querySelector('.section-1-img');
const nav = document.querySelector('.nav');

const headerSticky = function (entries) {
  !entries[0].isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
};

const section_1_observer = new IntersectionObserver(headerSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
section_1_observer.observe(section_1);

const revealSection = function (entries, observer) {
  if (!entries[0].isIntersecting) return;
  entries[0].target.classList.remove('section--hidden');
  observer.unobserve(entries[0].target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

document.querySelectorAll('.section').forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

function handler(e) {
  if (e.target.classList.contains('nav__link')) {
    e.target
      .closest('nav')
      .querySelectorAll('.nav__link')
      .forEach(el => {
        if (el !== e.target) el.style.opacity = this;
      });
  }
}

nav.addEventListener('mouseover', handler.bind(0.5));
nav.addEventListener('mouseout', handler.bind(1));

// document.getElementById('dark').addEventListener('click', e => {
//   document.querySelector('body').style.backgroundColor = '#444';
//   document
//     .querySelectorAll('.nav__link')
//     .forEach(link => (link.style.color = 'White'));
//   nav.style.backgroundColor = '#444';

//   document.querySelectorAll('.row').forEach(box => (box.style.color = 'White'));
//   document
//     .querySelectorAll('.left  h3')
//     .forEach(h => (h.style.color = 'white'));

//   document
//     .querySelectorAll('.description')
//     .forEach(tag => (tag.style.color = 'white'));
// });
