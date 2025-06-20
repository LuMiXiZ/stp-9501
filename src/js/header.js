document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('[data-action="toggle-burger"]');
    if (burger) {
        burger.addEventListener('click', () => {
            const isOpen = burger.getAttribute('data-state') === 'open';
            burger.setAttribute('data-state', isOpen ? 'closed' : 'open');
        });
    }

    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('[data-bg]');

    const updateHeaderColor = () => {
        const headerRect = header.getBoundingClientRect();
        const headerMiddleY = headerRect.top + headerRect.height / 2;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerMiddleY && rect.bottom >= headerMiddleY) {
                const sectionColor = section.dataset.bg;
                const oppositeColor = sectionColor === 'green' ? 'orange' : 'green';
                header.setAttribute('data-bg', oppositeColor);
                break;
            }
        }
    };

    window.addEventListener('scroll', updateHeaderColor);
    window.addEventListener('resize', updateHeaderColor);
    updateHeaderColor(); // виклик при завантаженні
});