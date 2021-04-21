(function ($) {
  $(function () {

    $('.js-toggle-1').on('click', function () {
      $(this).toggleClass('js-ag-active-1');
    });

    $('.js-toggle-2').on('click', function () {
      $(this).toggleClass('js-ag-active-2');
    });

    $('.js-toggle-3').on('click', function () {
      $(this).toggleClass('js-ag-active-3');
    });

  });
})(jQuery);