(function ($) {
  $(function () {

    var agWrapper = $('#ag-nav-search-block');

    $('#ag-nav-search_link').on('click', function (event) {
      event.stopPropagation();

      agWrapper.fadeToggle('fast');
    });

    $(document).mouseup(function (e) {
      if (!agWrapper.is(e.target) && agWrapper.has(e.target).length === 0) {
        agWrapper.fadeOut('fast');
      }
    });

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* -------------- 'Esc' key (27) -------------- */
      if (e.keyCode == 27 && agWrapper.is(':visible')) {
        agWrapper.fadeOut();
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