const btnOpenCloseSpec = document.getElementById('btn-show-hide-spec');

const contentDescription = document.getElementById('description-content');
const contentCompound = document.getElementById('compound-content');

const btnDescription = document.getElementById('btn-description');
const btnCompound = document.getElementById('btn-compound');

btnOpenCloseSpec.addEventListener('click', () => {
  btnOpenCloseSpec.classList.toggle('spec-content__show-hide_open');
  contentDescription.classList.toggle('spec-content__description_open');
  contentCompound.classList.toggle('spec-content__description_open');
});

btnCompound.addEventListener('click', () => {
  contentCompound.classList.remove('spec-content__description_hide');
  contentDescription.classList.add('spec-content__description_hide');
  btnCompound.classList.add('spec-header__btn_active');
  btnDescription.classList.remove('spec-header__btn_active');
})

btnDescription.addEventListener('click', () => {
  contentCompound.classList.add('spec-content__description_hide');
  contentDescription.classList.remove('spec-content__description_hide');
  btnCompound.classList.remove('spec-header__btn_active');
  btnDescription.classList.add('spec-header__btn_active');
})