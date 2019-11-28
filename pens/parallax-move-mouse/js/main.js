(function ($) {
  $(function () {

    /* Parallax */
    if ($('.js-ag-parallax-container').length) {
      var koef = 0.35;
      var degrees = 14;
      var $parallaxContainer = $('.js-ag-parallax-container');
      var $mn = $parallaxContainer.find('.js-ag-parallax-main');
      var $p1 = $parallaxContainer.find('.js-ag-parallax-parts-1');
      var $p2 = $parallaxContainer.find('.js-ag-parallax-parts-2');
      var $p3 = $parallaxContainer.find('.js-ag-parallax-parts-3');
      var $p4 = $parallaxContainer.find('.js-ag-parallax-parts-4');
      var parallaxFlag = true;
      $('body').mousemove(function (e) {
        if (parallaxFlag) {
          parallaxFlag = false;
          var centerX = $mn.offset().left + $mn.outerWidth() / 2;
          var centerY = $mn.offset().top + $mn.outerHeight() / 2;
          var mouthX = e.pageX;
          var mouthY = e.pageY;
          var offsetX = mouthX - centerX;
          var offsetY = mouthY - centerY;
          if (offsetY > centerY) {
            offsetY = centerY;
          }
          var kX = offsetX / centerX;
          var kY = offsetY / centerY;
          var calcX_p1 = parseInt((kX) * 20 * koef);
          var calcY_p1 = parseInt((kY) * 20 * koef);
          var calcX_p2 = parseInt((kX) * 50 * koef);
          var calcY_p2 = parseInt((kY) * 50 * koef);
          var calcX_mn = parseInt((kX) * 100 * koef);
          var calcY_mn = parseInt((kY) * 100 * koef);
          var calcX_p3 = parseInt((kX) * 150 * koef);
          var calcY_p3 = parseInt((kY) * 150 * koef);
          var calcX_p4 = parseInt((kX) * 200 * koef);
          var calcY_p4 = parseInt((kY) * 200 * koef);
          var calcRoundX = Math.round(kX * 100) / 100;
          var calcRoundY = Math.round(kY * 100) / 100;
          var degreesFinal = Math.round(degrees * ((Math.abs(calcRoundX) + Math.abs(calcRoundY)) / 2) * 10) / 10;
          $p1.css({transform: 'perspective(900px) translateX(' + calcX_p1 + 'px) translateY(' + calcY_p1 + 'px) rotate3d(' + -calcRoundY + ', ' + calcRoundX + ', 0, ' + degreesFinal * 0.2 + 'deg)'});
          $p2.css({transform: 'perspective(900px) translateX(' + calcX_p2 + 'px) translateY(' + calcY_p2 + 'px) rotate3d(' + -calcRoundY + ', ' + calcRoundX + ', 0, ' + degreesFinal * 0.5 + 'deg)'});
          $p3.css({transform: 'perspective(900px) translateX(' + calcX_p3 + 'px) translateY(' + calcY_p3 + 'px) rotate3d(' + -calcRoundY + ', ' + calcRoundX + ', 0, ' + degreesFinal * 1.5 + 'deg)'});
          $p4.css({transform: 'perspective(900px) translateX(' + calcX_p4 + 'px) translateY(' + calcY_p4 + 'px) rotate3d(' + -calcRoundY + ', ' + calcRoundX + ', 0, ' + degreesFinal * 2 + 'deg)'});
          $mn.css({transform: 'perspective(900px) translateX(' + calcX_mn + 'px) translateY(' + calcY_mn + 'px) rotate3d(' + -calcRoundY + ', ' + calcRoundX + ', 0, ' + degreesFinal + 'deg)'});
          setTimeout(function () {
            parallaxFlag = true;
          }, 100);
        }
      });
    }

  });
})(jQuery);