(function ($) {
  $(function () {

    $('#js-more_btn').on('click', function (e) {
      /*e && e.preventDefault(), $(this).addClass('js-ia-with-second-level'), $('#js-logos').children('.js-ia-hidden').removeClass('js-ia-hidden');*/
      e.preventDefault();
      $(this).addClass('js-ag-with-second-level');
      $('#ag-logo_list').children('.js-ag-hide').removeClass('js-ag-hide');
    });

  });
})(jQuery);