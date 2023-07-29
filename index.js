/* Configuracion Libreria Swiper */
var swiper = new Swiper(".swiper-miniaturas", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});
var swiper2 = new Swiper(".swiper-imagenes", {
    loop: true,
    spaceBetween: 0,
    effect: "fade",
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/* Funcion para mostrar/ocultar el menú */
var toggleMenu = document.querySelector('.menu-toggle');
var nav = document.querySelector('.nav');

function menuToggle() {
    nav.classList.toggle('active');
    toggleMenu.classList.toggle('active')
}