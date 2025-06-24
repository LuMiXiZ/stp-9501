import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Pagination, Grid],
    grabCursor: true,
    spaceBetween: 32,
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 3,
      fill: 'column',
    },

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
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
          fill: 'row',
        },
        spaceBetween: 20,
      },
    },
  });
});