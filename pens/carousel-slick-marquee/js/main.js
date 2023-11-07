(function ($) {
  $(function () {


    $('.js-ag-carousel').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 4,
            speed: 12000,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }]
    });


  });
})(jQuery);