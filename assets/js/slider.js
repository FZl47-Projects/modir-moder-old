
/*-------------START SLIDER FOR STORY--------------*/

const swiperProduct = new Swiper('#slider-story', {
    // Default parameters
    slidesPerView:11,
    spaceBetween: 10,
    // Responsive breakpoints

    autoplay: {
        delay: 4000
    },


    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 5,
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 8,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 8,
        },
        992: {
            slidesPerView: 10,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})
/*-------------END SLIDER FOR STORY--------------*/

/*-------------START SLIDER FOR STORY--------------*/

const swiperarticle = new Swiper('#slider-article', {
    // Default parameters
    slidesPerView:5,
    spaceBetween: 10,
    // Responsive breakpoints

    autoplay: {
        delay: 4000
    },


    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView:1,
        },
        // when window width is >= 480px
        500: {
            slidesPerView:4,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})
/*-------------END SLIDER FOR STORY--------------*/


