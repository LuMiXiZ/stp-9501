import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination, Autoplay],

    // loop: true,

    initialSlide: 0,

    pagination: {
      el: '.reviews-swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },

    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 32, centeredSlides: false },
      1440: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
    },
  });
});
