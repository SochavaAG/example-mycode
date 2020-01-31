(function ($) {
  $(function () {

    var agAnim = $('.js-ag-flesh-start'),
      agThisPosition = 0,
      agInterval = setInterval(function () {
        if (agThisPosition == 2400) {
          agThisPosition = 0;
        }
        agAnim.css('background-position', '0px ' + -agThisPosition + 'px');
        agThisPosition = agThisPosition + 160;
      }, 150);

  });
})(jQuery);