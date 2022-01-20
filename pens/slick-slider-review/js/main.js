(function ($) {
  $(function () {


    $('#js-h-reviews-slides').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      focusOnSelect: true,
      infinite: true,
      pauseOnDotsHover: true,
      dots: true,
      dotsClass: 'js-ag-h-reviews-slides_dots-box ag-h-reviews-slides_dots-box',
      customPaging : function(slider, i) {
        return '<i class="ag-h-reviews-slides_dot"></i>';
      },
      nextArrow: '.js-h-reviews-slides_arrow__prev',
      prevArrow: '.js-h-reviews-slides_arrow__next'
    });


  });
})(jQuery);