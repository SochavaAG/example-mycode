(function () {
  $(function () {

      var agThumb = $('.js-thumb');

      agThumb.on('mousemove', function (e) {
        var agWidth = $(this).width() / 2,
          agHeight = $(this).height() / 2,
          agOffsetLeft = e.pageX - $(this).offset().left,
          agOffsetTop = e.pageY - $(this).offset().top,
          agAngleX = .1 * (agOffsetTop - agHeight),
          agAngleY = .05 * (agOffsetLeft - agWidth),
          agPositionTop = 100 * agOffsetLeft / $(this).width(),
          agPositionLeft = 100 * agOffsetTop / $(this).height();

          agPositionTop = 100 - agPositionTop, agPositionLeft = 100 - agPositionLeft, $(this).css({transform: "rotateX(" + agAngleX + "deg) rotateY(" + agAngleY + "deg)"});
        $(this).children('.js-shine').css({background: "radial-gradient(ellipse at " + agPositionTop + "% " + agPositionLeft + "%, rgba(255,255,255,.4) 0%,rgba(51,51,51,0) 60%)"});
      });

      agThumb.on('mouseleave', function () {
        $(this).css({transform: 'rotateX(0deg) rotateY(0deg)'}), $('.js-shine').css({background: "none"});
      });

  });
})();