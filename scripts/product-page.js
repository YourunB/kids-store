const btnOpenCloseSpec = document.getElementById('btn-show-hide-spec');
const contentDescription = document.getElementById('description-content');

btnOpenCloseSpec.addEventListener('click', () => {
  btnOpenCloseSpec.classList.toggle('spec-content__show-hide_open');
  contentDescription.classList.toggle('spec-content__description_open');
});