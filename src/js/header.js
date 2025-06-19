document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('[data-action="toggle-burger"]');
    if (burger) {
        burger.addEventListener('click', () => {
            const isOpen = burger.getAttribute('data-state') === 'open';
            burger.setAttribute('data-state', isOpen ? 'closed' : 'open');
        });
    }
});