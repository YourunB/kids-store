const swiperVertical = new Swiper('.vertical-swiper', {
  direction: 'vertical',  
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  loop: false,
  //grabCursor: true,
  navigation: {
    prevEl: '.vertical-button-prev',
    nextEl: '.vertical-button-next',
  }
});

const swiperMini = new Swiper('.mini-swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  navigation: {
    prevEl: '.mini-button-prev',
    nextEl: '.mini-button-next',
  },
});


const slidesMini = document.querySelectorAll('.mini-swiper .swiper-slide');
slidesMini.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    swiperMini.slideToLoop(index);
  });
});
