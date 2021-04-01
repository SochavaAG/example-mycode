(function ($) {
  $(function () {

    var $window = $(window),
      displayWidth = $(window).width();

    if (displayWidth > '768') {
      var agEyeLeft = $('.js-eyes_eye-1'),
        agEyeRight = $('.js-eyes_eye-2');

      $window.on('mousemove', function (event) {
        agEyeLeft.css('background-position', (30 * (event.clientX / $window.width()) - 10) + 'px 0');
        agEyeLeft.css('top', (10 * (event.clientY / $window.height()) + 85));

        agEyeRight.css('background-position', (30 * (event.clientX / $window.width()) - 10) + 'px 0');
        agEyeRight.css('top', (10 * (event.clientY / $window.height()) + 58));
      });
    }

  });
})(jQuery);