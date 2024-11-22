const sideMenu = document.querySelector('.side-menu');

sideMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('side-menu__item')) {
    e.target.classList.toggle('side-menu__item_open');
  }
})

const btnCatalog = document.getElementById('btn-catalog');
const btnFilters = document.getElementById('btn-filters');
const catalog = document.getElementById('side-menu');
const filters = document.getElementById('filters-block');

btnCatalog.addEventListener('click', () => {
  catalog.classList.toggle('side-menu_open');
});

btnFilters.addEventListener('click', () => {
  filters.classList.toggle('sort-top_open');
});