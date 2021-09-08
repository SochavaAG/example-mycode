(function ($) {
  $(function () {


    var player = $('lottie-player')[0];
    player.load("https://raw.githack.com/SochavaAG/example-mycode/master/pens/scroll-puzzle-lottie-player/js/pzl.json");

    var sWindow = $(window).scrollTop();

    startAnimation(sWindow);

    function startAnimation(argTop) {
      var agSquare = $('#js-square');

      $(window).bind('scroll load', function () {
        var argTop = argTop || $(window).scrollTop(),
          offsetTop = 70,
          timeVideo = 38,
          newPercentStart = parseInt((argTop / (agSquare.offset().top - offsetTop)) * timeVideo);

        player.seek(newPercentStart);
      });
    }


  });
})(jQuery);