(function ($) {
  $(function () {


    function fnMakeNewPosition() {
      // Get viewport dimensions (remove the dimension of the div)
      var agIconBox = $('.js-ag-icon_box');
      var agIconBoxHeight = agIconBox.height() - 50;
      var agIconBoxWidth = agIconBox.width() - 50;

      var nh = Math.floor(Math.random() * agIconBoxHeight);
      var nw = Math.floor(Math.random() * agIconBoxWidth);

      return [nh, nw];
    }

    function fnAnimateIcon(argItem) {
      var agNewCoordinate = fnMakeNewPosition(),
        agOldCoordinate = $(argItem).offset(),
        agSpeed = fnCalcSpeed([agOldCoordinate.top, agOldCoordinate.left], agNewCoordinate);

      $(argItem).animate({top: agNewCoordinate[0], left: agNewCoordinate[1]}, agSpeed, function () {
        fnAnimateIcon(argItem);
      });
    }

    function fnCalcSpeed(argPrev, argNext) {
      var x = Math.abs(argPrev[1] - argNext[1]),
        y = Math.abs(argPrev[0] - argNext[0]),
        agGreatest = x > y ? x : y,
        agSpeedModifier = .3;

      return Math.ceil(agGreatest/agSpeedModifier);
    }

    var agIcon = $('.js-ag-icon_item');

    fnAnimateIcon(agIcon.eq(0));
    fnAnimateIcon(agIcon.eq(1));
    fnAnimateIcon(agIcon.eq(2));
    fnAnimateIcon(agIcon.eq(3));
    fnAnimateIcon(agIcon.eq(4));
    fnAnimateIcon(agIcon.eq(5));


  });
})(jQuery);