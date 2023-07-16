/*
* ----------------------------------------------------------------------------------------
    Template Name: spa and beauty bootstrap 4 template
    Template URI: https://spellbit.com/
    Description: 
    Author: mahedi amin
    Author URI: https://mahediamin.com
    Version: 1.0.0

* ----------------------------------------------------------------------------------------
*/

(function ($) {
    'use strict';

    jQuery(document).on("ready", function () {




        /*
         *
         *  Humburger menu chnage icon
         */

        $("a.click-humbarger").on("click", function () {
            $("a.click-humbarger").toggleClass("cg");
            $(".humburger-menu").toggleClass("active");
            return false;

        });



        /*
         *
         *  Owl carsole animation
         */

        $(".slider-active").on("translate.owl.carousel", function () {
            $(".slide-content h2").removeClass("animated bounceIn").css("opacity", "0");
            $(".slide-content p").removeClass("animated flipInX").css("opacity", "0");
            $(".slide-content a.th-primary").removeClass("animated slideInLeft").css("opacity", "0");
            $(".slide-content a.th-secondary").removeClass("animated slideInRight").css("opacity", "0");
        });

        $(".slider-active").on("translated.owl.carousel", function () {
            $(".slide-content h2").addClass("animated bounceIn").css("opacity", "1");
            $(".slide-content p").addClass("animated flipInX").css("opacity", "1");
            $(".slide-content a.th-primary").addClass("animated slideInLeft").css("opacity", "1");
            $(".slide-content a.th-secondary").addClass("animated slideInRight").css("opacity", "1");
        });

        /*
         *
         *  Owl carsole activation
         */

        $('.slider-active').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplayTimeout: 6000,
            mouseDrag: false,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1
                },
                768: {
                    items: 1
                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });

        // team active
        $('.team-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            mouseDrag: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,

                },
                768: {
                    items: 3,

                },
                980: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        });
		
		
        $('.client-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            mouseDrag: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,

                },
                768: {
                    items: 3,

                },
                980: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        });
		
		
		

        // testimonials active
        $('.test-active').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            mouseDrag: true,
            autoplay: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,

                },
                768: {
                    items: 1,

                },
                980: {
                    items: 1
                },
                1199: {
                    items: 1
                }
            }
        });

        // testimonials two carosle

        //Client Testimonial Carousel
        if ($('.tstiText-active').length && $('.testImg-active').length) {

            var $sync3 = $(".tstiText-active"),
                $sync4 = $(".testImg-active"),
                flag = false,
                duration = 500;

            $sync3
                .owlCarousel({
                    loop: true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: false,
                    autoplay: false,
                    autoplayTimeout: 5000
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = false;
                        $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync4
                .owlCarousel({
                    loop: true,
                    margin: 10,
                    items: 3,
                    nav: false,
                    dots: false,
                    center: true,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    responsive: {
                        210: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        479: {
                            items: 1,

                        },
                        768: {
                            items: 1,

                        },
                        980: {
                            items: 3
                        },
                        1199: {
                            items: 3
                        }
                    },
                })

                .on('click', '.owl-item', function () {
                    $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = true;
                        $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });
        }



        // realted prodcut active
        $('.rlt_product_active').owlCarousel({
            loop: true,
            nav: true,
            margin: 15,
            mouseDrag: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 3
                },
                980: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        });






        /*
         *
         *  Cart active Option
         */

        $(".cart-open").on("click", function () {

            $(".shopping-cart").toggleClass("active");
        });


        /*
         *
         *  Search option Active
         */

        $(".search-opt").on("click", function () {

            $(".hidden-search-rapper, .serach-overlay").toggleClass("active");
            return false;
        });

        $(".close-search, .serach-overlay").on("click", function () {
            $(".hidden-search-rapper, .serach-overlay").removeClass("active");
        })

        /*
         *
         *  Counter up active
         */

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        /*
         *
         *  video popup active
         */

        $('.video-pop').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });

        /*
         *
         *  video popup active
         */

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".site-header, .site-main-header").removeClass("sticky slideInDown animated");
            } else {
                $(".site-header, .site-main-header").addClass("sticky slideInDown animated");
            }
        });




        /*
         * Mobile menu activation for home page two and one
         *
         */


        $(".menu-click").on("click", function () {

            $(".main-menu > ul").toggleClass('show');
            return false;
        });


        if ($(window).width() < 767) {
            // for mobile menu

            $(".humburger-menu ul li.menu-item-has-children, .main-menu ul li.menu-item-has-children").on("click", function () {

                $(this).children("ul.sub-menu").slideToggle();
                $(this).toggleClass('change-icon');
                return false;

            });


        };



        $(".humburger-menu ul li, .humburger-menu ul ul li, .main-menu ul li, .main-menu ul ul li").on("click", function (p) {
            p.stopPropagation();
        });


        /*
         * magnify popup activation
         *
         */




        $('.img-poppu').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });




        /* 
         *    RANGE SLIDER ACTIVATION 
         *
         */


        $("#slider-range").slider({
            range: true,
            min: 40,
            max: 600,
            values: [60, 570],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));



        /*
         * tooltip activation
         *   
         */


        $('[data-toggle="tooltip"]').tooltip();



        /*
         * comming soon date coundown active
         *
         */


        var time = $('.count-down');
        if (time.length) {
            var endDate = new Date(time.data("end-date"));
            time.countdown({
                date: endDate,
                render: function (data) {
                    $(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 2) +
                        '</h1><p>days</p></div><div><h1> : ' +
                        this.leadingZeros(data.hours, 2) +
                        '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1> : ' +
                        this.leadingZeros(data.min, 2) +
                        '</h1><p>min</p></div><div><h1> : ' +
                        this.leadingZeros(data.sec, 2) +
                        '</h1><p>sec</p></div></div>');
                }
            });
        }



        /*
         *
         *   notify modal active
         */


        $(".comming_soonwrapper a.mr-modal").on('click', function () {
            $(".notyfy-me-segment-rapper, .comming-soon-overlay").toggleClass("active");
            return false;
        });
        $(".notifay-close a.noti-close, .comming-soon-overlay").on('click', function () {
            $(".notyfy-me-segment-rapper, .comming-soon-overlay").removeClass("active");
            return false;
        });






        /*
         *
         * Scroll up activation
         */


        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>'

        });



        /*
         * Eroor page image paralax activation
         *
         */


        $('.js-tilt').tilt({
            glare: true,
            maxGlare: .5
        });

        /*
         * Preloder Activation
         *
         */

        jQuery(window).load(function () {
            jQuery(".pink-rosepreloder").fadeOut(500);
        });

        /*
         * Youtube background video
         *
         */


        $('.player').mb_YTPlayer();




        /*
         * animation active
         *
         */


        $(function () {

            function ckScrollInit(items, trigger) {
                items.each(function () {
                    var ckElement = $(this),
                        AnimationClass = ckElement.attr('data-animation'),
                        AnimationDelay = ckElement.attr('data-animation-delay');

                    ckElement.css({
                        '-webkit-animation-delay': AnimationDelay,
                        '-moz-animation-delay': AnimationDelay,
                        'animation-delay': AnimationDelay
                    });

                    var ckTrigger = (trigger) ? trigger : ckElement;

                    ckTrigger.waypoint(function () {
                        ckElement.addClass("animated").css("visibility", "visible");
                        ckElement.addClass('animated').addClass(AnimationClass);
                    }, {
                        triggerOnce: true,
                        offset: '90%'
                    });
                });
            }

            ckScrollInit($('.animation'));
            ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));

        });


        /*
         * banner and slider paralax
         *
         */

            var s = skrollr.init({
                forceHeight: false,

            });

            if (s.isMobile()) {
                s.destroy();
            }






    });

})(jQuery);