const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 12,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        // when window width is >= 767px
        769: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});