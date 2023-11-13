(function ($) {
  $(function () {

    /* category carousel */
    $('.js-category-carousel').slick({
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',

      variableWidth: true,
      /*centerMode: true,*/
      centerPadding: '100px',

      responsive: [{
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /category carousel */

  });
})(jQuery);