(function ($) {
  $(function () {

    var agActive = 0, agCount, agTimerId, agSpeed = 3000,
      agItem = $('.js-getbonus_item'),
      agCount = $('.js-getbonus_item').length;

    agSlideStart();

    function agSlideStart() {
      agTimerId = setInterval(function () {
        agSlide();
      }, agSpeed);
    }

    function agSlideRemoveClass() {
      agItem.removeClass('js-ag-active');
    }

    function agSlide() {
      agSlideRemoveClass();

      if (agActive == agCount - 1) {
        agActive = 0;
      } else {
        agActive = agActive + 1;
      }

      $('.js-getbonus_item:eq(' + agActive + ')').addClass('js-ag-active');
    }

  });
})(jQuery);