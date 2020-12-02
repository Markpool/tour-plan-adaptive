const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'coverflow',
})

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})

// Рекомендую всегда использовать let и conts. Хоть нам на курсе и говорят, что можно var. Используй let и const
const menButton = document.querySelector('.menu-button')
menButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню')
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})
