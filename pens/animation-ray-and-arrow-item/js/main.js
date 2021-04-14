(function ($) {
  $(function () {


    var agDisplayWidth = $(window).width();

    if (agDisplayWidth > 767) {}

    setInterval(fnRay, 1000);

    function fnRay() {
      $('.js-ray').each(function () {
        var sty = window.getComputedStyle(this, null);
        var xform = sty.getPropertyValue('transform');
        var values = xform.split('(')[1],
          values = values.split(')')[0],
          values = values.split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        var newAng = angle + Math.round(Math.random() * 10 - 5);
        var rayH = Math.round(Math.random() * 30);
        var tl = new TimelineMax();
        tl.to(this, 1, {height: rayH, rotation: newAng, ease: Power0.easeNone})
      });
    }


  });
})(jQuery);