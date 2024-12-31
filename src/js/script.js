const lines = document.querySelector('.lines');
const navMenu = document.querySelector('.nav-menu');

lines.addEventListener('click', () => {
    lines.classList.toggle('active');
    navMenu.classList.toggle('active');
});
