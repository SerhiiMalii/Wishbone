$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],
        autoplayTimeout: 2500,
        dots: false,

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
$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            duration: 300
        },
        hide: {
            effect: "blind",
            duration: 300
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );