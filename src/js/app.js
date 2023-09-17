import "./slick";

import $ from 'jquery';

global.jQuery = global.$ = $;

$(() => {

    $('.slider-single-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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