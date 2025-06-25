document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('[data-action="toggle-burger"]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const menuLinks = document.querySelectorAll('[data-action="close-menu"]');
    const body = document.body;

    const toggleMenu = () => {
        const isOpen = burger.getAttribute('data-state') === 'open';
        const newState = isOpen ? 'closed' : 'open';

        burger.dataset.state = newState;
        mobileMenu.dataset.state = newState;

        if (newState === 'open') {
            body.dataset.menu = 'open';
        } else {
            body.removeAttribute('data-menu');
        }
    };

    burger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.dataset.state = 'closed';
            mobileMenu.dataset.state = 'closed';
            body.removeAttribute('data-menu');
        });
    });

    const header = document.querySelector('[data-header]');
    const sections = document.querySelectorAll('[data-bg]');

    const getOppositeColor = (color) => {
        return color === 'green' ? 'orange' : 'green';
    };

    const updateHeaderBg = () => {
        let currentSection = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= header.offsetHeight && rect.bottom > header.offsetHeight) {
                currentSection = section;
            }
        });

        if (currentSection) {
            const sectionColor = currentSection.dataset.bg;
            header.dataset.bg = getOppositeColor(sectionColor);
        }
    };

    updateHeaderBg();
    window.addEventListener('scroll', updateHeaderBg);
});