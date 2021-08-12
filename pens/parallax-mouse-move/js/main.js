(function ($) {
  $(function () {


    function agMouseMoveX(argSelector, argSpedX) {
      const agSelector = document.querySelectorAll(argSelector);

      agSelector.forEach( function (item) {
        var agItemWidth = item.clientWidth;
        item.addEventListener('mousemove', function (event) {
          var agTransX = event.clientX - agItemWidth;

          const agTranslateX = item.children;

          for (var i = 0; i < agTranslateX.length; i++) {
            agTranslateX[i].style.transform = 'translateX(' + agTransX / (argSpedX * (agTranslateX.length - i)) + 'px)  rotate(0.01deg)';
          }
        })
      });
    }

    agMouseMoveX('.js-parallax_box', -75);


  });
})(jQuery);