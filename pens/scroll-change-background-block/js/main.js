(function ($) {
  $(function () {

    if (document.querySelectorAll('.js-scroll-block').length)for (setGamesOptions(), window.addEventListener('scroll', function (a) {
      changeGamesStates();
    }), b = ["resize", "orientationchange"], a = 0; a < b.length; a++)window.addEventListener(b[a], setGamesOptions);

    function setGamesOptions() {
      window.gamesOptions = [];
      for (var a = document.querySelectorAll('.js-scroll-block'), b = 0; b < a.length; b++) {
        var d = a[b].dataset.bgColor,
          e = getAbsolutePosition(a[b]).y;

        gamesOptions.push({position: e, color: d});
      }
      gamesOptions.reverse();
      changeGamesStates();
    }

    function changeGamesStates() {
      for (var a = document.querySelectorAll('.js-scroll-block'), b = a[0].style.backgroundColor, d = window.pageYOffset + window.innerHeight / 2, c = 0; c < window.gamesOptions.length; c++) {
        var e = window.gamesOptions[c];
        if (d > e.position) {
          if (e.color !== b) {
            for (c = 0; c < a.length; c++)a[c].style.backgroundColor = e.color;
          }
          break;
        }
      }
    }

    function getAbsolutePosition(a) {
      var b = {x: a.offsetLeft, y: a.offsetTop};
      a.offsetParent && (a = getAbsolutePosition(a.offsetParent), b.x += a.x, b.y += a.y);
      return b;
    }

  });
})(jQuery);