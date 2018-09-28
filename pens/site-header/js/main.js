(function ($) {
  $(function () {

    var agSearchBtn = $('#ag-nav-search_link'),
        agSerchForm = $('#ag-nav-search-block');

    agSearchBtn.on('click', function (e) {
      e.preventDefault();

      if (agSerchForm.css('display') != 'block') {
        agSerchForm.fadeIn('fast');
      }
    });

    $(document).mouseup(function (e) {
      if (!agSerchForm.is(e.target) && agSerchForm.has(e.target).length === 0) {
        agSerchForm.fadeOut('fast');
      }
    });

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* -------------- 'Esc' key (27) -------------- */
      if (e.keyCode == 27 && agSerchForm.is(':visible')) {
        agSerchForm.fadeOut();
      }
    });

    //$(document).on('mousemove', function (e) { // move cursor all over the page
    $('.js-header').on('mousemove', function (e) {
      var amountMovedX = 60 * ( (e.pageX + 1) / $(document).width() ),
        amountMovedY = 60 * ( (e.pageY + 1) / $(window).height() );

      $('.js-header').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });

  });
})(jQuery);