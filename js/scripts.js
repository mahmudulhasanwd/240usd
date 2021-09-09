(function($) {
    $(document).ready(function() {

        // Scroll to Top
        jQuery('.scrolltotop').click(function() {
            jQuery('html').animate({
                'scrollTop': '0px'
            }, 400);
            return false;
        });

        jQuery(window).scroll(function() {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery('.scrolltotop').fadeIn();
            } else {
                jQuery('.scrolltotop').fadeOut();
            }
        });

        // active button code for mixitup
        $(".controls button").click(function() {
            $(".controls button").removeClass('active');
            $(this).addClass('active');
        })


        // code for client-slider

        $('.products-slider').owlCarousel({
            loop: true,
            margin: 20,
            center: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            responsiveClass: true,
            responsiveRefreshRate: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });


        // code for slider-btn

        var owl = $('.products-slider');
        owl.owlCarousel();
        $('#next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('#pre').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        });


        // code for responsive menu
        $(".sm-bar").click(function (){
            $(".main-menu").slideToggle();
        });

        $(".main-menu ul li a").click(function (){
            $(this).next("ul#dropdown").slideToggle();
            return false;
        })












    });
})(jQuery);
