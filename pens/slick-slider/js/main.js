(function ($) {
  $(function () {


    $('body').hasClass('ag-locale-site__RTL') ? reviewsRTL = true : reviewsRTL = false;


    $('#js-review-user-info').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      focusOnSelect: true,
      infinite: true,
      pauseOnDotsHover: true,
      dots: true,
      rtl: reviewsRTL,
      dotsClass: 'js-ag-h-reviews-slides_dots-box ag-h-reviews-slides_dots-box',
      customPaging : function(slider, i) {
        return '<i class="ag-h-reviews-slides_dot"></i>';
      },
      nextArrow: '.js-review-slider_arrow__prev',
      prevArrow: '.js-review-slider_arrow__next'
    });


  });
})(jQuery);