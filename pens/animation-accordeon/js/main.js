(function ($) {
  $(function () {


    $('.js-ag-accordeon_title').on('click', function () {
      $(this).toggleClass('js-ag-show');
      $(this).parents('.js-ag-accordeon_item').find('.js-ag-accordeon_info').toggleClass('js-ag-show');
    });


  });
})(jQuery);