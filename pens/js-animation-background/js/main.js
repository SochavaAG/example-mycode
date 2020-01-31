(function ($) {
  $(function () {

    var anim = $('.js-ag-flesh-start'),
      thisPosition = 0,
      interval = setInterval(function () {
        if (thisPosition == 2400) {
          thisPosition = 0;
        }
        anim.css('background-position', '0px ' + -thisPosition + 'px');
        thisPosition = thisPosition + 160;
      }, 150);

  });
})(jQuery);