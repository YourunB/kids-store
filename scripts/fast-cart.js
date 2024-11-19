const btnFastCart = document.getElementById('btn-fast-cart');
const fastCart = document.getElementById('fast-cart');
const btnCloseFastCart = document.getElementById('btn-close-fast-cart');

btnFastCart.addEventListener('click', (e) => {
  fastCart.classList.add('fast-cart_open');
});

btnCloseFastCart.addEventListener('click', (e) => {
  fastCart.classList.remove('fast-cart_open');
  e.stopPropagation();
});