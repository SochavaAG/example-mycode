(function ($) {
  $(function () {

    agWindow = $(window);

    agWindow.on('scroll', function () {
      l = {
        top: agWindow.scrollTop(),
        bottom: agWindow.scrollTop() + agWindow.height(),
        left: agWindow.scrollLeft(),
        right: agWindow.scrollLeft() + agWindow.width()
      }
    })/*.trigger("scroll")*/;

    agWindow.on("scroll", function () {
      if (r($(".js-gucci_box"))) {
        var e = $(".js-gucci_box");
        if (r(e)) {
          var i = 1.2 * o(e),
            n = 65 * i / 100;

          n > 65 && (n = 65);

          var s = Math.floor(n / 8) + 1;
          s > 8 && (s = 8), e.find(".js-gucci").css("transform", "translateY(" + n + "%)").attr("src", "images/gucci-" + s + ".png");
        }
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