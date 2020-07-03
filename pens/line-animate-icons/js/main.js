(function ($) {
  $(function () {
	  
	  
  var e = document.getElementById("slider");
  $("body").hasClass("-rtl-mode") ? noUiSlider.create(e, {
      step: 1,
      connect: [!0, !1],
      range: {min: 0, max: 5},
      start: [0],
      direction: "rtl"
    }) : noUiSlider.create(e, {step: 1, connect: [!0, !1], range: {min: 0, max: 5}, start: [0]});
  var r = $(".js-reward-clients"), t = ($(".js-reward-range"), $(".js-range-track").find("li")), s = $(".js-range-line"), l = $(".js-range-circle"), i = $(".js-reward-volume");
  rangeVal = [1, 3, 5, 10, 15, 20], volumeVal = [100, 250, 500, 1e3, 1500, 2e3], e.noUiSlider.on("update", function (e, a) {
    var n = Math.round(e[a]);
    r.html(rangeVal[n]), i.html(volumeVal[n]), function (e) {
      for (var a = 0; a < t.length; a++)a < e ? t.eq(a).addClass("-selected") : t.eq(a).removeClass("-selected"), a === e ? t.eq(a).addClass("-active") : t.eq(a).removeClass("-active")
    }(n), function (n) {
      s.each(function () {
        for (var e = $(this).find("i"), a = 0; a < e.length; a++)a <= n ? e.eq(a).addClass("-selected") : e.eq(a).removeClass("-selected")
      })
    }(n), function (e) {
      l.each(function () {
        $(this).find("circle").css({"stroke-dasharray": 55 * (e + 1) + " 326"})
      })
    }(n)
  })


  });
})(jQuery);
