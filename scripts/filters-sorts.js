const btnSizeFilters = document.getElementById('btn-size-filters');
const btnSizes = document.getElementById('btn-sizes');
const sizeFilters = document.getElementById('size-filters');

const btnColorFilters = document.getElementById('btn-color-filters');
const btnColors = document.getElementById('btn-colors');
const colorFilters = document.getElementById('color-filters');

const btnSeasonFilters = document.getElementById('btn-season-filters');
const btnSeasons = document.getElementById('btn-season');
const seasonFilters = document.getElementById('season-filters');


btnSizeFilters.addEventListener('click', (e) => {
  sizeFilters.classList.add('select-list_open');
  seasonFilters.classList.remove('select-list_open');
  colorFilters.classList.remove('select-list_open');
  e.stopPropagation();
})
btnSizes.addEventListener('click', (e) => {
  sizeFilters.classList.remove('select-list_open');
  e.stopPropagation();
})

btnColorFilters.addEventListener('click', (e) => {
  colorFilters.classList.add('select-list_open');
  sizeFilters.classList.remove('select-list_open');
  seasonFilters.classList.remove('select-list_open');
  e.stopPropagation();

})
btnColors.addEventListener('click', (e) => {
  colorFilters.classList.remove('select-list_open');
  e.stopPropagation();
})

btnSeasonFilters.addEventListener('click', (e) => {
  seasonFilters.classList.add('select-list_open');
  colorFilters.classList.remove('select-list_open');
  sizeFilters.classList.remove('select-list_open');
  e.stopPropagation();
})
btnSeasons.addEventListener('click', (e) => {
  seasonFilters.classList.remove('select-list_open');
  e.stopPropagation();
})

