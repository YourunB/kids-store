
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

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-search__window') || e.target.classList.contains('form-control') || e.target.classList.contains('menu-icon')) return;
  else windowSearch.classList.remove('menu-search__window_open');
});

document.addEventListener('scroll', () => {
  windowSearch.classList.remove('menu-search__window_open');
});

/*-------------------------------windows-burger----------------------------*/

const btnToggleSearchBurger = document.getElementById('btn-toggle-search-burger');
const windowSearchBurger = document.getElementById('window-search-burger');
const btnSearchBurger = document.getElementById('btn-search-burger');

btnToggleSearchBurger.addEventListener('click', () => {
  windowSearchBurger.classList.toggle('menu-search__window_open');
});

btnSearchBurger.addEventListener('click', () => {
  windowSearchBurger.classList.toggle('menu-search__window_open');
});

/*-------------------------------windows-language--------------------------*/

const btnToggleLang = document.getElementById('btn-toggle-lang');
const windowLang = document.getElementById('window-lang');
const btnLangArrow = document.getElementById('btn-toggle-lang-img');

btnToggleLang.addEventListener('click', () => {
  windowLang.classList.toggle('menu-language__window_open');
  btnLangArrow.classList.toggle('menu-icon_rotate');
});

windowLang.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') windowLang.classList.remove('menu-language__window_open');
  btnLangArrow.classList.remove('menu-icon_rotate');
});

/*----------------------windows-language-burger--------------------------*/

const btnToggleLangBurger = document.getElementById('btn-toggle-lang-burger');
const windowLangBurger = document.getElementById('window-lang-burger');
const btnLangArrowBurger = document.getElementById('btn-toggle-lang-img-burger');

btnToggleLangBurger.addEventListener('click', () => {
  windowLangBurger.classList.toggle('menu-language__window_open');
  btnLangArrowBurger.classList.toggle('menu-icon_rotate');
});

windowLangBurger.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') windowLangBurger.classList.remove('menu-language__window_open');
  btnLangArrowBurger.classList.remove('menu-icon_rotate');
});
