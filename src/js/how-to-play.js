import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.how-to-play-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        modules: [Navigation, Pagination],
        pagination: {
            el: '.how-to-play-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.how-to-play-swiper-button-next',
            prevEl: '.how-to-play-swiper-button-prev',
        },
        breakpoints: {
            1200: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
        },
    });
});