// Script for toggling the sidebar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const slideMenu = document.getElementById('slideMenu');

    menuToggle.addEventListener('click', () => {
        slideMenu.classList.toggle('open');
    });
});
