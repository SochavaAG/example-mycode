(function ($) {
  $(function () {

    function agDroneFunc() {
      if (requestAnimationFrame(agDroneFunc)) {
        var agDrone = $('.js-ag-drone'),
          agLeft = parseInt(agDrone.css('left')),
          agHorizontal = agLeft + .02 * (agCoordinate.x - agLeft),
          agTop = parseInt(agDrone.css('top')),
          agVertical = agTop + .02 * (agCoordinate.y - agTop);

        agDrone.css({top: agVertical + 'px', left: agHorizontal + 'px'});
      }
    }

    var agCoordinate = {x: 0, y: 0};

    $(document).on('mousemove', function (e) {
      agCoordinate = {x: e.clientX, y: e.clientY}
    }), agDroneFunc();

  });
})(jQuery);