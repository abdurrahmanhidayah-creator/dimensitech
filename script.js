const nav = document.getElementById('nav');
const menu = document.querySelector('.menu');
const links = document.querySelector('.desktop-nav');

const setMenuState = (isOpen) => {
  links?.classList.toggle('is-open', isOpen);
  menu?.setAttribute('aria-expanded', String(isOpen));
  menu?.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
};

menu?.addEventListener('click', () => {
  setMenuState(!links?.classList.contains('is-open'));
});

links?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 680) setMenuState(false);
});

window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 20));
document.getElementById('year').textContent = new Date().getFullYear();