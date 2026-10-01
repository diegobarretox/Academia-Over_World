const menuButton = document.querySelector('#menu-btn');
const navigation = document.querySelector('.header .navbar');

menuButton?.addEventListener('click', () => {
  menuButton.classList.toggle('fa-times');
  navigation?.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menuButton?.classList.remove('fa-times');
  navigation?.classList.remove('active');
}, { passive: true });
