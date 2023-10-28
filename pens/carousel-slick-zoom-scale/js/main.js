(function ($) {
  $(function () {

    /* professional carousel */
    $('.js-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    /* /professional carousel */

  });
})(jQuery);