(function ($) {
  $(function () {

    var e, n, i, r, a = document.getElementById("svgWave");
    if (null != a) bodymovin.loadAnimation({
      wrapper: a,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      path: "https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/animation-wave-svg/js/JSON/animations-wave.json"
    });

  });
})(jQuery);