(function ($) {
  $(function () {

    var l, h, agWindow = $(window);

    agWindow.on('scroll', function () {
      l = {
        top: agWindow.scrollTop(),
        bottom: agWindow.scrollTop() + agWindow.height(),
        left: agWindow.scrollLeft(),
        right: agWindow.scrollLeft() + agWindow.width()
      }
    })/*.trigger("scroll")*/;

    agWindow.on("scroll", function () {
      var agFlightBox = $('.js-flight_box');

      if (r(agFlightBox)) {
        var e = agFlightBox;
        if (r(e)) {
          var i = o(e),
            n = 60 - .5 * i * 100 / 100;

          n < 10 && (n = 10)/*, e.find(".dome").css("top", n + "%")*/;
        }
        r(e, .25) && e.find("[data-crop-h]").each(function () {
          var e = i * $(this).data("crop-h") / 100 - $(this).data("crop-h") + $(this).data("crop-h");
          $(this).css("width", e + "%");
        });
      }
    });

    function r(t, e) {
      var i = false,
        n = Math.round(t.height()),
        s = t.offset();

      s.right = s.left + t.outerWidth();
      s.bottom = s.top + n;
      e && (s.top += n * e);
      l.bottom < s.top || l.top > s.bottom || (i = true);

      return i;
    }

    function o(t) {
      var e = Math.round(t.height()),
        i = t.offset();
      i.bottom = i.top + e;

      var n = 100 * (e - (i.bottom - (agWindow.scrollTop() + agWindow.height()))) / e;
      return n > 100 ? n = 100 : n < 0 && (n = 0), n.toFixed(2);
    }

  });
})(jQuery);