(function ($) {
  $(function () {

    /* doctor certificate carousel */
   /* $('.js-doctor-certificate-carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 30000,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '.js-ag-doctor-certificate-carousel-arrow_prev',
      nextArrow: '.js-ag-doctor-certificate-carousel-arrow_next',

      variableWidth: true,
      centerPadding: '50px',
      /!*centerMode: true,*!/

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerPadding: '10px',
            variableWidth: false,
            centerMode: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: '10px',
            variableWidth: false,
            centerMode: false
          }
        }
      ]
    });*/
    /* /doctor certificate carousel */


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