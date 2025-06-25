import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", () => {
    const tipsSwiper = new Swiper('[data-tips-swiper]', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        modules: [Navigation, Pagination],
        pagination: {
            el: '[data-tips-pagination]',
            clickable: true,
        },
        navigation: {
            nextEl: '[data-tips-button-next]',
            prevEl: '[data-tips-button-prev]',
        },
        breakpoints: {
            1200: {
                spaceBetween: 500,
                slidesPerView: 1,
            },
        },
    });
});