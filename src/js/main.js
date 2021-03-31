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
        e.preventDefault();
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


    // POPUPS PHONE
    $('.popup-trigger-phone').click(function (e) {
        e.preventDefault();
        $('#popupPhone').addClass('modal_active');
        $('.backdrop').fadeIn();
        $('body').addClass('modal-open');
    })

    $('#closePopup,  #overlay').click(function () {
        $('#popupPhone').removeClass('modal_active');
        $('.backdrop').fadeOut();
        $('body').removeClass('modal-open');
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
    let marqueeSliderRight = new Swiper('#marqueeLeft', {

        slidesPerView: 5,
        spaceBetween: 42,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }
    });

    let marqueeSliderLeft = new Swiper('#marqueeRight', {

        slidesPerView: 5,
        spaceBetween: 42,
        speed: 2000,
        loop: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }
    });



    // CUSTOM SELECT

    $('.custom-select').niceSelect();


    //POPUP VIDEO

    $("#video-modal-trigger").click(function(e) {
        e.preventDefault();
        $("#video-popup-wrapper").addClass("active");
        $("body").addClass("modal-open");
    });

    $("#video-popup-wrapper, #close-video-popup").click(function(e) {
        $("#video-popup-wrapper").removeClass("active");
        $("body").removeClass("modal-open");
        var video = $('#video');

        video.attr('src', '');
        var src = video.attr('src');
        video.attr('src', src);
    });
});
