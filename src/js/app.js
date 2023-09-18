import "./slick";

import $ from 'jquery';

global.jQuery = global.$ = $;

$(() => {

    $('.slider-single-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="src/images/next-arrow.svg" /></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="src/images/prev-arrow.svg" /></button>',
        fade: true,
        asNavFor: '.slider__nav'
      });
      $('.slider-nav-js').slick({
        slidesToShow: 4,
        slidesToScroll: 0,
        asNavFor: '.slider__single',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
});