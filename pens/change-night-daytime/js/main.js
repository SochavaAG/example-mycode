(function ($) {
  $(function () {

    var agItem = $('.js-list').children('li'),
      agFlag = 0;

    if (agItem.length) {
      setInterval(function () {
        if (agFlag === 3) {
          agFlag = 0;
        }
        agItem.eq(agFlag).addClass('elcam-view__landscape--is-toggle');
        setTimeout(function () {
          agItem.eq(agFlag).removeClass('elcam-view__landscape--is-toggle');
          agFlag++
        }, 5000);
      }, 10000);
    }

  /*  var agDay = $('.js-day'),
    agChange = $('.js-change'),
    agNight = $('.js-night');

    setInterval(nextTimeOfDay, 8000);

    function nextTimeOfDay () {
      agNight.addClass('elcam-view__landscape--is-active');
    }*/

    var agDay = $('.js-day'),
      agChange = $('.js-change'),
      agNight = $('.js-night'),
      agCar = $('.js-car');

    function TimeOfDay () {
      agDay.addClass('elcam-view__landscape--is-active');
      agChange.removeClass('elcam-view__landscape--is-toggle');
      agNight.removeClass('elcam-view__landscape--is-toggle elcam-view__landscape--is-active');
      agCar.removeClass('elcam-car--is-lights-on');
    }

    function nextTimeOfDay () {
      agChange.toggleClass('elcam-view__landscape--is-toggle');
      agNight.toggleClass('elcam-view__landscape--is-toggle elcam-view__landscape--is-active');
      agCar.toggleClass('elcam-car--is-lights-on');

      /*setTimeout(TimeOfDay, 32000);*/
    }

    setInterval(nextTimeOfDay, 32000);


  });
})(jQuery);