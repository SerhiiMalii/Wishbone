$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        autoplayTimeout: 2500,
        dots: true,

        responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            768:{
                items: 2,
                autoplay: true
            },
            830: {
                items: 2,
                autoplay: true
            },

            1000: {
                items: 3
            }
        }
    })
});