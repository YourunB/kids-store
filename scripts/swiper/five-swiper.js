const swiperFive = new Swiper('.swiper-container', {
  spaceBetween: 10, // Расстояние между слайдами
  freeMode: false,   // Без циклической прокрутки
  loop: false,      // Без бесконечной прокрутки
  grabCursor: true, // Курсор захвата для мобильных устройств
  navigation: {
    prevEl: '.bottom-slider-button-prev',
    nextEl: '.bottom-slider-button-next',
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});