(function ($) {
  $(function () {


    function agRandom (argMin, argMax) {
      return (argMin + Math.random() * (argMax + 1 - argMin));
    }

    var fnBubbles = function () {
      var r1 = agRandom(5, 95);
      for (var i = 1; i <= agRandom(20, 50); i++) {
        var r2 = agRandom(5, 18),
          r3 = agRandom(400, 900),
          r4 = agRandom(-900, 0),
          r5 = agRandom(8000, 12000),
          div = document.createElement('div'),
          $newDiv = $(div);

        $newDiv.addClass('js-ag-bubble_item js-ag-bubble_item__dop');
        $newDiv.css({
          left: r1 + '%',
          bottom: 0,
          marginBottom: '-20px',
          x: agRandom(-50, 50),
          width: r2,
          height: (r2 * 0.66),
          '-webkit-animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
          '-moz-animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
          'animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
        });
        $('.js-bubble_list').append($newDiv);
        $newDiv.delay(i * agRandom(30, 150)).transition({
          bottom: '100%',
          marginBottom: '20px',
          opacity: 0.2
        }, r5, 'linear', function () {
          $(this).remove();
        });
      }
      setTimeout(function () {
        fnBubbles();
      }, agRandom(10, 15) * 1000);
    };

    fnBubbles();

  });
})(jQuery);