const hamburger = document.querySelector('.hamburger-icon');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  if (nav.ariaExpanded === 'false') {
    nav.classList.add('open')
    nav.ariaExpanded = 'true'
    hamburger.style.backgroundImage = 'url(./images/icon-close.svg)'
  } else {
    nav.classList.remove('open')
    nav.ariaExpanded = 'false'
    hamburger.style.backgroundImage = 'url(./images/icon-hamburger.svg)'
  }
})