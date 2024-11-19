const swiperVertical = new Swiper('.vertical-swiper', {
  direction: 'vertical',  
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  loop: false,
  //grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
