const header = document.querySelector('.header');

let timeoutHeader;

window.addEventListener('scroll', () => {
  clearTimeout(timeoutHeader);
  timeoutHeader = setTimeout(() => {
    if (window.scrollY > 50) {
      header.classList.add('header_scrolled');
      header.classList.add('header-def')
      header.classList.remove('header-main')
    } else {
      header.classList.remove('header_scrolled');
      header.classList.remove('header-def')
      header.classList.add('header-main')
    }
  }, 250);
});