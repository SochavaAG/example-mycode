(function ($) {
  $(function () {


    var e = document.getElementById('js-ag-leaf_box'),
      t = window.innerWidth,
      a = 2 * window.innerHeight;

    for (i = 0; i < 12; i++) {
      var n = document.createElement('span');
      n.classList.add('js-ag-leaf');

      TweenLite.set(n, {x: fnRandom(0, 2), y: fnRandom(8, a), z: fnRandom(-200, 200)}), e.appendChild(n), r(n);
    }

    function r(e) {
      TweenMax.to(e, fnRandom(8, 15), {
        x: t + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
      }), TweenMax.to(e, fnRandom(4, 2), {
        y: "+=100",
        rotationZ: fnRandom(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      }), TweenMax.to(e, fnRandom(2, 2), {
        rotationX: fnRandom(0, 360),
        rotationY: fnRandom(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
      })
    }

    function fnRandom(e, t) {
      return e + Math.random() * (t - e);
    }


  });
})(jQuery);