(function ($) {
  $(function () {


    var myFullpage = new fullpage('#js-fullpage', {
      verticalCentered: false,

      css3: true,
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      onLeave: function (e, t) {
        var r = $('#js-wheel');

        $('.js-wheel_page-name').removeClass('js-ag-active');
        $('#js-wheel_page-name-' + (t.index + 1)).addClass('js-ag-active');

        if (0 === t.index) {
          r.css('transform', 'rotate(0deg)');
        }else{
          r.css('transform', 'rotate(-' + 22.5 * (t.index) + 'deg)');
        }
      }
    });


  });
})(jQuery);