/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/waypoints/index.js
//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js

// CUSTOM SCRIPTS

$(document).ready(function () {
    function hideHeader() {
        $('.header').addClass('header_active');
    }


    // MOBILE MENU

    const nav = $('.header__nav');

    $('.btn-burger').on('click', function (e) {
        e.preventDefault();
        nav.addClass('open');
        $('.backdrop').fadeIn();
        $('body').addClass('modal-open')
    });

    $('.btn-close, .backdrop, .menu__link').click(function (e) {
        nav.removeClass('open');
        $('.backdrop').fadeOut();
        $('body').removeClass('modal-open')
    });


    // CONTACT-SIDE-FORM

    const blockWritten = $('.contact-side-form');

    $('.contact-btn').on('click', function (e) {
        e.preventDefault();
        blockWritten.addClass('open');
        $('.backdrop').fadeIn();
        $('body').addClass('modal-open')
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        blockWritten.removeClass('open');
        $('.backdrop').fadeOut();
        $('body').removeClass('modal-open')
    });

    // HEADER SCROLL

    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('header_active');
        } else {
            header.removeClass('header_active');
        }
        scrollPrev = scrolled;
    });

    //SMOOTH SCROLL TO ANGKOR
    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            let anchor = $.attr(this, 'href')

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault()
                let offsetSize = $("header").innerHeight();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - offsetSize
                }, 1500)
            }
        })
    }

    // SLIDER-ACCORDION


    let accordionSlider;

    function slidersInit() {
        if ($('.accordion__slider').length > 0) {
            if ($(window).width() <= 768) {
                if (!accordionSlider) {
                    accordionSlider = new Swiper('.accordion__slider', {
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                    });
                }
            } else {
                if (accordionSlider) {
                    if ($.isArray(accordionSlider)) {
                        accordionSlider.forEach(function (slider) {
                            slider.destroy(true, true)
                        });
                    } else {
                        accordionSlider.destroy(true, true);
                    }
                    accordionSlider = null;
                }
            }
        }
    }

    slidersInit();


    // ACCORDION

    const slideAnimationTime = 500;

    $('#accordion .panel__heading').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.panel-collapse').slideUp(slideAnimationTime);
        } else {
            $('#accordion .panel__heading').removeClass('open');
            $(this).addClass('open');
            const $curr = $(this);

            setTimeout(function () {
                $('.panel-collapse').slideUp(slideAnimationTime);
                $curr.siblings('.panel-collapse').slideDown(slideAnimationTime);

                setTimeout(function () {
                    if (accordionSlider) {
                        if ($.isArray(accordionSlider)) {
                            accordionSlider.forEach(function (slider) {
                                slider.update();
                            });
                        } else {
                            accordionSlider.update();
                        }
                    }
                }, slideAnimationTime);
            }, 100);
        }
    });


    // Home Banner

    let homeBanner = new Swiper('.banner__slider', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        speed: 800,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.banner__slider .desktop-next',
            prevEl: '.banner__slider .desktop-prev',
        },
    });


    // SLIDER-MARQUEE

    function runMarquees() {
        const selector = document.querySelectorAll("._marquee");
        const styles = document.createElement("style");
        const array = [];

        function init() {
            Array.prototype.forEach.call(selector, function (item, index) {
                const marqueeBody = item.querySelector(".marquee-body");
                const direction = item.getAttribute("data-direction");
                array[index] = "marquees-" + Math.random().toString(36).substr(2, 9);
                styles.innerHTML += "\n    @keyframes " + array[index] + " {\n      100% {\n        transform: translateX(" + ("right" === direction ? 0 : -marqueeBody.offsetWidth) + "px);\}\}\n";
                item.style.animation = array[index] + " 20s 0s linear infinite";
                item.style.transform = "translateX(" + ("right" === direction ? -marqueeBody.offsetWidth : 0) + "px)";
            });
        }

        document.body.appendChild(styles);
        window.addEventListener("resize", function () {
            styles.innerHTML = "";
            init();
        });
        Array.prototype.forEach.call(selector, function (e) {
            const marqueeBody = e.querySelector(".marquee-body");
            e.appendChild(marqueeBody.cloneNode(true));
            e.style.width = "100000px";
        });
        setTimeout(function () {
            init();
        }, 500);
    }

    runMarquees();


    // SLIDER RELATED POST

    const sliderRelatedPost = new Swiper('.slider__related-post', {
        slidesPerView: 2,
        spaceBetween: 12,
        navigation: {
            nextEl: '.wrap-slider .swiper-button-next',
            prevEl: '.wrap-slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1900: {
                slidesPerView: 3,
                spaceBetween: 87,
            },
        }
    });


    // CUSTOM SELECT

    $('.custom-select').niceSelect();


    // POPUP VIDEO

    $("#video-modal-trigger").click(function (e) {
        e.preventDefault();
        $("#video-popup-wrapper").addClass("active");
        $("body").addClass("modal-open");
    });

    $("#close-video-popup").click(function (e) {
        $("#video-popup-wrapper").removeClass("active");
        $("body").removeClass("modal-open");
        const video = $('#video');
        video.get(0).pause();
    });


    // lINE ANIMATION

    $('.stroke-anim').waypoint(function (direction) {
        $(this.element).addClass('anim_active')
    }, {
        offset: '35%'
    });

    $(window).resize(function () {
        slidersInit();
    });
});
