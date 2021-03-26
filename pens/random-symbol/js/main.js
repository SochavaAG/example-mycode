(function ($) {
  $(function () {

    function d(c, b) {
      var a = document.createElement("div");
      s0(a, "position:absolute;left:" + r(800) + "px;top:" + r(400) + "px;");
      s(a, "font-size:" + c + "px; opacity: 1.0;");
      s(a, "color:rgb(" + r(255) + "," + r(255) + "," + r(255) + ");");
      document.body.appendChild(a);
      a.innerHTML = u();
      var b = setInterval(function () {
        m(a)
      }, b)
    }
    function s0(b, a) {
      b.style.cssText = a
    }
    function s(b, a) {
      b.style.cssText += a
    }
    function m(a) {
      o = parseFloat(a.style.opacity) - 0.01;
      a.style.opacity = o;
      if (o < 0.1) {
        s0(a, "position:absolute;left:" + r(800) + "px;top:" + r(400) + "px;");
        s(a, "color:rgb(" + r(255) + "," + r(255) + "," + r(255) + ");");
        s(a, "font-size:" + (14 + r(72)) + "px; opacity:1.0;");
        a.innerHTML = u()
      }
    }
    function u() {
      num = Math.round(1114111 * Math.random());
      var uni = eval('"\\u' + num.toString(16) + '"');
      return (uni.length > 1) ? u() : uni
    }
    function r(a) {
      return Math.round(a * Math.random())
    }
    var canvas = document.getElementById("c");
    var context = canvas.getContext("2d");
    document.body.style.cssText = "background-color:black;color:white;";

    function l(a) {
      if (a > 0) {
        try {
          d(14 + r(72), 10)
        } catch (b) {}
        setTimeout(function () {
          l(a - 1)
        }, 100)
      }
    }
    l(50);

  });
})(jQuery);