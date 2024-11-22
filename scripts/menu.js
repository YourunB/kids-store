
/*-------------------------------windows-search--------------------------*/

const btnToggleSearch = document.getElementById('btn-toggle-search');
const windowSearch = document.getElementById('window-search');
const btnSearch = document.getElementById('btn-search');

btnToggleSearch.addEventListener('click', () => {
  windowSearch.classList.toggle('menu-search__window_open');
});

btnSearch.addEventListener('click', () => {
  windowSearch.classList.toggle('menu-search__window_open');
});

/*-------------------------------windows-language--------------------------*/

const btnToggleLang = document.getElementById('btn-toggle-lang');
const windowLang = document.getElementById('window-lang');

btnToggleLang.addEventListener('click', () => {
  windowLang.classList.toggle('menu-language__window_open');
});

windowLang.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') windowLang.classList.remove('menu-language__window_open');
});