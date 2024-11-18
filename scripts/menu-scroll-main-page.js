const header = document.querySelector('.header');
const logo = document.querySelector('#header-logo');
console.log(logo)
let timeoutHeader;

window.addEventListener('scroll', () => {
  clearTimeout(timeoutHeader);
  timeoutHeader = setTimeout(() => {
    if (window.scrollY > 50) {
      header.classList.add('header_scrolled');
      header.classList.add('header-def');
      header.classList.remove('header-main');
      logo.src = 'assets/images/svg/logo.svg';
    } else {
      header.classList.remove('header_scrolled');
      header.classList.remove('header-def');
      header.classList.add('header-main');
      logo.src = 'assets/images/svg/logo-white.svg';
    }
  }, 250);
});