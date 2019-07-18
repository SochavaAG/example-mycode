(function ($) {
  $(function () {

    var equalizerLines = $('.js-equlizer_line');

    setInterval(function () {
      $.each(equalizerLines, function (index) {
        var rand = 0 - 0.5 + Math.random() * (100 - 0 + 1);
        rand = Math.round(rand);
        $(this).css({height: rand + '%'});
      })
    }, 50);

  });
})(jQuery);