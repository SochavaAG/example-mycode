(function ($) {
  $(function () {

    $('.js-modal-popup_btn__close').on('click', function () {
      $('.js-popup-animation').toggleClass('js-ag-popup-animation-out js-ag-popup-animation-in');
    });

  });
})(jQuery);