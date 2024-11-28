const miniSwiperWrapper = document.getElementById('mini-swiper');
const centralSwiperWrapper = document.getElementById('central-swiper');

const swiperCentral = new Swiper('.central-swiper', {
  direction: 'horizontal',  
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.central-button-prev',
    nextEl: '.central-button-next',
  }
});

const swiperMini = new Swiper('.mini-swiper', {
  direction: 'horizontal',
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.mini-button-prev',
    nextEl: '.mini-button-next',
  },
});
/*
swiperMini.on('slideChange', () => {
  const activeIndex = swiperMini.realIndex;
  swiperCentral.slideTo(activeIndex);
});

const slidesMini = document.querySelectorAll('.mini-swiper .swiper-slide');
slidesMini.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    swiperMini.slideToLoop(index);
  });
});
*/