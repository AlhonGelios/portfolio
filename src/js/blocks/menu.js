const navMenu = () => {
    const menu = document.querySelector('.menu');
    const closeBtn = document.querySelector('.menu__close');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });
};

export default navMenu;
