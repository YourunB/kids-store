const btnSizeFilters = document.getElementById('btn-size-filters');
const sizeFilters = document.getElementById('size-filters');
const btnSizes = document.getElementById('btn-sizes');

btnSizeFilters.addEventListener('click', () => {
  sizeFilters.classList.add('select-list_open');
})

btnSizes.addEventListener('click', () => {
  sizeFilters.classList.remove('select-list_open');
})
