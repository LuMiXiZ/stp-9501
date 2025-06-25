import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('[data-htp-swiper]', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        modules: [Navigation, Pagination],
        pagination: {
            el: '[data-htp-pagination]',
            clickable: true,
        },
        navigation: {
            nextEl: '[data-htp-button-next]',
            prevEl: '[data-htp-button-prev]',
        },
        breakpoints: {
            1200: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
        },
    });
});