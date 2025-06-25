import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSwiper = new Swiper('[data-reviews-swiper]', {
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
      el: '[data-reviews-pagination]',
      clickable: true,
    },
    navigation: {
      nextEl: '[data-reviews-button-next]',
      prevEl: '[data-reviews-button-prev]',
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
          fill: 'row',
        },
        spaceBetween: 20,
      },
    },
  });
});