const listBrg = document.querySelector('.header-nav-box__menu-brg');
const brg = document.querySelector('.brg');
const menu = document.querySelector('.header-nav-box__menu');
const body = document.querySelector('body');
listBrg.addEventListener('click', function () {
    brg.classList.toggle('brg-active');
    menu.classList.toggle('header-nav-box__menu-active');
    body.classList.toggle('scroll-off');
});


let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
    },
});