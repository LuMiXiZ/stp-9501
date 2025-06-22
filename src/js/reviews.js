import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  const reviewsSwiper = new Swiper('.reviews-swiper', {

    slidesPerView: 3,
    direction: 'vertical',
    spaceBetween: 32,
    grabCursor: true,
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
      },
    },
  });
});
