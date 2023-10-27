(function ($) {
  $(function () {

    $('.js-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '.js-ag-carousel-arrow_prev',
      nextArrow: '.js-ag-carousel-arrow_next',

      variableWidth: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            variableWidth: false,
            centerMode: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false
          }
        }
      ]
    });

  });
})(jQuery);