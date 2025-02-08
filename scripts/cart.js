const cartCount = document.getElementById('cart-count');

document.body.addEventListener('click', (e) => {
  //if (e.target.classList.contains('card-additional__controls__count_minus') && Number(cartCount.textContent) > 0) cartCount.textContent = Number(cartCount.textContent) - 1;
  //if (e.target.classList.contains('card-additional__controls__count_plus')) cartCount.textContent = Number(cartCount.textContent) + 1;
  if (e.target.classList.contains('card-additional__controls__count_minus') && Number(e.target.nextSibling.textContent) > 1) e.target.nextSibling.textContent = Number(e.target.nextSibling.textContent) - 1;
  if (e.target.classList.contains('card-additional__controls__count_plus')) e.target.previousSibling.textContent = Number(e.target.previousSibling.textContent) + 1;
})