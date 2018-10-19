(function ($) {
  $(function () {

    function agGamblingSlotMachine() {
      if (0 < $('#js-gambling-slot').length) {
        var agSlotItem = $('.js-gambling-slot_item').length;
        setInterval(function () {
          $('.js-gambling-slot_item').addClass('js-ag-animate');
          $('.js-logo_light').css('display', 'none');
          $('.js-gambling-slot_letter').animate({top: '39px', display: 'none'}, 400, function () {
            $(this).css('top', '-39px');
          });
          setTimeout(function () {
            var agSlotItemNum = 0,
              r = setInterval(function () {
                $('#js-gambling-slot-' + agSlotItemNum + ' .js-gambling-slot_letter').animate({top: '0px', display: 'block'}, 150);
                $('#js-gambling-slot-' + agSlotItemNum).removeClass('js-ag-animate');
                agSlotItemNum == agSlotItem && (setTimeout(function () {
                  $('.js-logo_light').css('display', 'block');
                }, 175), clearInterval(r));
                agSlotItemNum++
              }, 100)
          }, 1700)
        }, 5000)
      }
    }

    agGamblingSlotMachine();

  });
})(jQuery);