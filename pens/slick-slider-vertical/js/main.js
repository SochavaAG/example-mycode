(function ($) {
  $(function () {


    $('.js-first-slider').slick({
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      verticalSwiping: true,
      centerMode: true,
      centerPadding: '0px',
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
            centerPadding: '0px',
            slidesToShow: 2,
            mobileFirst: true,
            initialSlide: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            vertical: false,
            verticalSwiping: false,
            centerPadding: '0px',
            slidesToShow: 1,
            mobileFirst: true,
            initialSlide: 1,
            slidesToScroll: 1
          }
        }]
    });


  });
})(jQuery);