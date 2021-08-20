(function ($) {
  $(function () {


    var myFullpage = new fullpage('#js-fullpage', {
      verticalCentered: false,

      css3: true,
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      anchors: ['js-wheel_page-anchor-1', 'js-wheel_page-anchor-2', 'js-wheel_page-anchor-3', 'js-wheel_page-anchor-4', 'js-wheel_page-anchor-5', 'js-wheel_page-anchor-6', 'js-wheel_page-anchor-7', 'js-wheel_page-anchor-8'],

      onLeave: function (e, t) {
        var agWheel = $('#js-wheel');

        $('.js-wheel_page-name').removeClass('js-ag-active');
        $('#js-wheel_page-name-' + (t.index)).addClass('js-ag-active');


        if (0 === t.index) {
          agWheel.addClass('js-ag-hide');
          agWheel.css("transform", "rotate(22.5deg)");

          //agWheel.css('transform', 'rotate(0deg)');
        }else{
          agWheel.removeClass('js-ag-hide');
          agWheel.css('transform', 'rotate(-' + 22.5 * (t.index - 1) + 'deg)');
        }
      }
    });


  });
})(jQuery);