import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews-swiper', {

    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 32,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.reviews-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    breakpoints: {
      1200: {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },

    // initialSlide: 0,

    // pagination: {
    //   el: '.reviews-swiper-pagination',
    //   clickable: true,
    //   type: 'bullets',
    // },

    // navigation: {
    //   nextEl: '.reviews-swiper-button-next',
    //   prevEl: '.reviews-swiper-button-prev',
    // },

    // breakpoints: {
    //   0: { slidesPerView: 1, spaceBetween: 32, centeredSlides: false },
    //   1440: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
    // },
  });
});
