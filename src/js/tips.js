import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", () => {
    const tipsSwiper = new Swiper('.tips-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        modules: [Navigation, Pagination],
        pagination: {
            el: '.tips-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tips-swiper-button-next',
            prevEl: '.tips-swiper-button-prev',
        },
        breakpoints: {
            1200: {
                spaceBetween: 500,
                slidesPerView: 1,
            },
        },
    });
});