(function ($) {
  $(function () {

    function agTiresFlame(e) {
      e = e || $('.js-tires-flame_fire');
      var o = 14,
        t = 0,
        r = setInterval(function () {
        e.css('background-position-x', 100 / (o - 1) * t + '%'), t++, t == o && (clearInterval(r), e.css('background-position-x', '0%'));
      }, 1000 / 24);

      setTimeout(function () {
        agTiresFlame(e);
      }, 2000);
    }

    agTiresFlame();

  });
})(jQuery);