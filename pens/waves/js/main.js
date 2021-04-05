(function ($) {
  $(function () {

    var agSpeed = 3000,
      agItem = $('.js-island_survivor');


    agActiveStart();

    function agActiveStart() {
      agTimerId = setInterval(function () {
        agActive();
      }, agSpeed);
    }


    function agActive() {
      agItem.toggleClass('js-ag-active');
    }

  });
})(jQuery);