const sideMenu = document.querySelector('.side-menu');

sideMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('side-menu__item')) {
    e.target.classList.toggle('side-menu__item_open');
  }
})