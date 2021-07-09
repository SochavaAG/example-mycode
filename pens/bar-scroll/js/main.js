(function ($) {
  $(function () {

    $(window).scroll(function() {
      // calculate the percentage the user has scrolled down the page
      var agScrollPercent = (100 * $(window).scrollTop()) / ($(document).height() - $(window).height());

      $('.js-ag-bar-long').css('width', agScrollPercent + '%');
    });

  });
})(jQuery);