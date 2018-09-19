(function ($) {
  $(function () {

    $(document).ready(function() {
      $('.js-preloader_line').addClass('js-ag-animate');
    });

    $(window).load(function() {
      $('.js-preloader-overlay').delay(5000).fadeOut('slow');
    });

  });
})(jQuery);