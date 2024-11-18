const header = document.querySelector('.header');

let timeoutHeader;

window.addEventListener('scroll', () => {
  clearTimeout(timeoutHeader);
  timeoutHeader = setTimeout(() => {
    window.scrollY > 50 ? header.classList.add('header_scrolled') : header.classList.remove('header_scrolled');
  }, 250);
});