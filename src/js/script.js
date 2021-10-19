'use strict';

const section_1 = document.querySelector('.section-1-img');
const nav = document.querySelector('.nav');
const btn1 = document.querySelector('.btn');

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

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

btn1.addEventListener('click', () => {
  document.querySelector('#html').scrollIntoView({ behavior: 'smooth' });
});
