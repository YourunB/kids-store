const swiperModalCentral = new Swiper('.central-modal-swiper', {
  direction: 'horizontal',  
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.central-modal-button-prev',
    nextEl: '.central-modal-button-next',
  }
});

const swiperModalMini = new Swiper('.mini-modal-swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.mini-modal-button-prev',
    nextEl: '.mini-modal-button-next',
  },
});

swiperModalMini.on('slideChange', () => {
  const activeIndex = swiperModalMini.realIndex;
  swiperModalCentral.slideTo(activeIndex);
});

const slidesMiniModal = document.querySelectorAll('.mini-modal-swiper .swiper-slide');
slidesMiniModal.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    swiperModalMini.slideToLoop(index);
  });
});