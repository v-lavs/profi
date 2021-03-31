/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;

//= include ../lib/jquery-nice-select-1.1.0/js/jquery.nice-select.js

// CUSTOM SCRIPTS

$(document).ready(function () {
    function hideHeader() {
        $('.header').addClass('header_active')
    }

    //MOBILE MENU
    const nav = $('.header__nav');

    $('.btn-burger').on('click', function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
        $('body').addClass('modal-open')
    });

    $('.btn-close, .backdrop, .menu__link').click(function (e) {
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
        $('body').removeClass('modal-open')

    });


    //BLOCK-WRITTEN
    const blockWritten = $('.block-written');
    $('.btn_written').on('click', function (e) {
        e.preventDefault();
        blockWritten.addClass('open');
        jQuery('.backdrop').fadeIn();
        $('body').addClass('modal-open')
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        blockWritten.removeClass('open');
        jQuery('.backdrop').fadeOut();
        $('body').removeClass('modal-open')
    });

    // HEADER SCROLL
    let scrollPrev = 0;

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            $('.header').addClass('header_active')
        } else {
            $('.header').removeClass('header_active')
        }
        scrollPrev = scrolled
    });


    //ACCORDION
    $('#accordion .panel__heading').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this)
                .siblings('.panel-collapse')
                .slideUp(500);
            $('#accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel')
        } else {
            $('#accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel');
            $(this)
                .find('open-panel')
                .removeClass('open-panel')
                .addClass('open-panel:before');
            $('#accordion .panel__heading').removeClass('open');
            $(this).addClass('open');
            $('.panel-collapse').slideUp(500);
            $(this)
                .siblings('.panel-collapse')
                .slideDown(500)
        }
    });

    //SWIPER-SLIDER
    let swiperBanner = new Swiper('.banner__slider', {

        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //SLIDER-MARQUEE

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

    //SLIDER RELATED POST
    var sliderRelatedPost = new Swiper('.slider__related-post', {
        slidesPerView: 3,
        spaceBetween: 87,
        navigation: {
            nextEl: '.wrap-slider .swiper-button-next',
            prevEl: '.wrap-slider .swiper-button-prev',
        },
    });

    // CUSTOM SELECT

    $('.custom-select').niceSelect();


    //POPUP VIDEO

    $("#video-modal-trigger").click(function (e) {
        e.preventDefault();
        $("#video-popup-wrapper").addClass("active");
        $("body").addClass("modal-open");
    });

    $("#close-video-popup").click(function (e) {
        $("#video-popup-wrapper").removeClass("active");
        $("body").removeClass("modal-open");
        var video = $('#video');

        video.attr('src', '');
        var src = video.attr('src');
        video.attr('src', src);
    });
});
