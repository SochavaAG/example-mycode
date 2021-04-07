(function ($) {
  $(function () {

    var agTimerId,
      agActive = 0,
      agWolf = $('.js-wolf'),
      agWolfHandLeft = $('.js-wolf_hand__left'),
      agWolfHandRight = $('.js-wolf_hand__right');

    agToggleWolf();

    agToggleWolfHandLeft();

    agToggleWolfHandRight();

    function agToggleWolf() {
      agTimerId = setInterval(function () {
        agToggle(agWolf);
      }, 7000);
    }

    function agToggleWolfHandLeft() {
      agTimerId = setInterval(function () {
        agToggle(agWolfHandLeft);
      }, 2000);
    }

    function agToggleWolfHandRight() {
      agTimerId = setInterval(function () {
        agToggle(agWolfHandRight);
      }, 1000);
    }

    function agToggle(argWolf) {
      argWolf.removeClass('js-ag-active');

      if (agActive == 1) {
        agActive = 0;
      } else {
        agActive = agActive + 1;
      }

      argWolf.eq(agActive).addClass('js-ag-active');
    }

  });
})(jQuery);