
const btnToggleSearch = document.getElementById('btn-toggle-search');
const windowSearch = document.getElementById('window-search');
const btnSearch = document.getElementById('btn-search');

btnToggleSearch.addEventListener('click', () => {
  windowSearch.classList.toggle('menu-search__window_open');
});

btnSearch.addEventListener('click', () => {
  windowSearch.classList.toggle('menu-search__window_open');
});