(function ($) {
  $(function () {

var agWheelBtn = $('.js-wheel_btn');

    agWheelBtn.on('click', function () {
      fnSpinWheel();
    });

     function fnSpinWheel () {
      var agWheel = $('.js-wheel'),
        agWheelSpinNum = $('.js-wheel-spin_num');

      return agWheel.hasClass("js-stage-1") && agWheel.hasClass("js-stage-1-complete") ? (agWheel.addClass("js-spin-to-start_three"), agWheel.removeClass("js-stage-1"), void setTimeout((function () {
          agWheel.removeClass("js-spin-to-start_three"), agWheel.addClass("js-stage-2"), setTimeout((function () {
            agWheelSpinNum.text('×');
          }), 1000)
        }), 3600)) : agWheel.hasClass("js-stage-1") ? (agWheel.addClass("js-spin-to-start_two"), agWheelSpinNum.text('1'), agWheel.removeClass("js-stage-1"), void setTimeout((function () {
            agWheel.removeClass("js-spin-to-start_two"), agWheel.addClass("js-stage-1"), agWheel.addClass("js-stage-1-complete"), agWheelSpinNum.text('2');
          }), 3600)) : void 0;
    };

  });
})(jQuery);