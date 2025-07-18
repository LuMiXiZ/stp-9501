document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector('[data-cookie-banner]');
    const acceptBtn = document.querySelector('[data-cookie-accept]');
    const declineBtn = document.querySelector('[data-cookie-decline]');

    const cookiePermision = localStorage.getItem('cookiePermision');

    if (cookiePermision === null) {
        setTimeout(() => {
            banner.dataset.visible = true;
        }, 5000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiePermision', 'true');
        banner.dataset.visible = false;
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookiePermision', 'false');
        banner.dataset.visible = false;
    });
});