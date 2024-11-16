const btnTop = document.querySelector('.btn-top');

let timeout;

window.addEventListener('scroll', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    window.scrollY > 200 ? btnTop.classList.add('btn-top_show') : btnTop.classList.remove('btn-top_show');
  }, 250);
});

btnTop.addEventListener('click', () => {
  btnTop.classList.remove('btn-top_show');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});