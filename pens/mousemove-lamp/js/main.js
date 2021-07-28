(function ($) {
  $(function () {


    var $window = $(window),
      displayWidth = $(window).width();

    if (displayWidth > '768') {
      var agNeon1 = $('.js-neon_img-1'),
        agNeon2 = $('.js-neon_img-2'),
        agNeon3 = $('.js-neon_img-3'),
        agNeon4 = $('.js-neon_img-4'),
        agNeonBoxFront = $('.js-neon_img-box__front'),
        agNeonBoxBack = $('.js-neon_img-box__back');

      $window.on('mousemove', function (event) {
        agNeon1.css('transform', 'rotateZ(' + event.clientX / 700 + 'deg)');
        agNeon2.css('transform', 'rotateZ(' + event.clientX / 400 + 'deg)');
        agNeon3.css('transform', 'rotateZ(-' + event.clientX / 1200 + 'deg)');
        agNeon4.css('transform', 'rotateZ(-' + event.clientX / 1000 + 'deg)');

        agNeonBoxFront.css('transform', 'translateY(' + event.clientY / 80 + 'px)');
        agNeonBoxBack.css('transform', 'translateY(-' + event.clientY / 80 + 'px)');
      });
    }


  });
})(jQuery);