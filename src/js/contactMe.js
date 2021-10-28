'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const allUserData = [];

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const userData = {
    userName: userName.value,
    email: email.value,
    Message: message.value,
  };
  allUserData.push(userData);
  document.querySelector(
    '#user_name'
  ).textContent = `Hey ${userName.value}, I'll get back to you soon 😍`;
  localStorage.setItem('users_data', JSON.stringify(allUserData));

  userName.value = '';
  email.value = '';
  message.value = '';

  openModal();
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
