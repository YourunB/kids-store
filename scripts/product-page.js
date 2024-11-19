const btnOpenCloseSpec = document.getElementById('btn-show-hide-spec');

btnOpenCloseSpec.addEventListener('click', () => {
  btnOpenCloseSpec.classList.toggle('spec-content__show-hide_open');
});