const miniSwiperWrapper = document.getElementById('mini-swiper');
const verticalSwiperWrapper = document.getElementById('vertical-swiper');
const centralSwiperWrapper = document.getElementById('central-swiper');
const centralVertivalSwiperWrapper = document.getElementById('central-vertical-swiper');

const showCentralSwiper = () => {
  centralSwiperWrapper.classList.add('swiper-hide');
  centralVertivalSwiperWrapper.classList.remove('swiper-hide');
}

const showCentralVerticalSwiper = () => {
  centralSwiperWrapper.classList.remove('swiper-hide');
  centralVertivalSwiperWrapper.classList.add('swiper-hide');
}

verticalSwiperWrapper.addEventListener('click', () =>  showCentralSwiper());
miniSwiperWrapper.addEventListener('click', () => showCentralVerticalSwiper());
verticalSwiperWrapper.addEventListener('touchstart', () =>  showCentralSwiper());
miniSwiperWrapper.addEventListener('touchstart', () => showCentralVerticalSwiper());

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

const swiperCentralVertical = new Swiper('.central-vertical-swiper', {
  direction: 'horizontal',  
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.central-vertical-button-prev',
    nextEl: '.central-vertical-button-next',
  }
});


const swiperVertical = new Swiper('.vertical-swiper', {
  direction: 'vertical',  
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  navigation: {
    prevEl: '.vertical-button-prev',
    nextEl: '.vertical-button-next',
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

swiperMini.on('slideChange', () => {
  const activeIndex = swiperMini.realIndex;
  swiperCentral.slideTo(activeIndex);
});

swiperVertical.on('slideChange', () => {
  const activeIndex = swiperVertical.realIndex;
  swiperCentralVertical.slideTo(activeIndex);
});