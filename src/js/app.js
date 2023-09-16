import "./slick";

import $ from 'jquery';

global.jQuery = global.$ = $;

$(() => {

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});