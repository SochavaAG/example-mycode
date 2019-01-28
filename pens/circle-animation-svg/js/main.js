(function ($) {
  $(function () {

    function y(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }

    function b(t) {
      t = t.points;
      for (var e, n = 0, i = 0; i < t.numberOfItems; i++) {
        var r = t.getItem(i);
        0 < i && (n += y(e, r)), e = r;
      }
      return n
    }

    function w(t) {
      if (t.getTotalLength)return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case"circle":
          return 2 * Math.PI * t.getAttribute("r");
        case"rect":
          return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
        case"line":
          return y({x: t.getAttribute("x1"), y: t.getAttribute("y1")}, {
            x: t.getAttribute("x2"),
            y: t.getAttribute("y2")
          });
        case"polyline":
          return b(t);
        case"polygon":
          var e = t.points;
          return b(t) + y(e.getItem(e.numberOfItems - 1), e.getItem(0))
      }
    }


      var angle = 0;
      var circle = document.getElementById('bean-halo');
      /*var dash="0.1,10 ";*/
      var interval = 20;


      window.timer = window.setInterval(function() {

        circle.setAttribute('stroke-dasharray', '360');
        dash = dash + "0.1,10 ";
        if (angle >= 360) window.clearInterval(window.timer);
        angle += 10.1/360;
      }.bind(this), interval);

  });
})(jQuery);