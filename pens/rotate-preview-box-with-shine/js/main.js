(function () {
  $(function () {

    if ($('body,html').css('overflow', 'visible').css('overflow-x', 'hidden'), $('.preloader').fadeOut(), screen.width > 767) {
      //(new WOW).init();
      var s = $('.js-thumb'),
          e = ($('.js-shine'),
          $('.js-more-info'), !1);
      s.on('mousemove', function (s) {
        e = !0, $(this).hasClass('js-idle') && $(this).removeClass('js-idle');
        var t = $(this).width() / 2,
          i = $(this).height() / 2,
          o = s.pageX - $(this).offset().left,
          n = s.pageY - $(this).offset().top,
          a = .1 * (n - i),
          r = .05 * (o - t),
          d = 100 * o / $(this).width(),
          l = 100 * n / $(this).height();

          d = 100 - d,
          l = 100 - l,
          $(this).css({transform: "rotatex(" + a + "deg) rotatey(" + r + "deg)"});
          $(this).children(".js-shine").css({background: "radial-gradient(ellipse at " + d + "% " + l + "%, rgba(255,255,255,0.4) 0%,rgba(51,51,51,0) 60%)"});
      });

      s.on('mouseleave', function () {
        $(this).css({transform: 'rotatex(0deg) rotatey(0deg)'}), $('.js-shine').css({background: 'none'})
      });

      setTimeout(function () {
        0 == e && s.addClass('js-idle')
      }, 8e3), function () {
        var s = ($(window), $()), e = $(), t = 0, i = 0, o = 0, n = 0, a = 0, r = 0;
        $('.tilt__item').on('mouseenter', function (o) {
          s = $(this), e = s.children(), t = s.outerWidth(), i = s.outerHeight()
        }).on('mousemove', function (s) {
          o = s.offsetX - t / 2, n = s.offsetY - i / 2, a = 100 * o / t * 2 * .1, r = 100 * n / i * 2 * .1, e.css({
            transform: "rotateY(" + a + "deg) rotateX(" + -1 * r + "deg)",
            transition: ".05s"
          })
        }).on('mouseleave', function () {
          e.css({transform: "none", transition: "1s"});
        })
      }();
    }

  });
})();