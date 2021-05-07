(function ($) {
  $(function () {

    var agBox = $('.js-timer_box'),
      agFlag = 0;

    var agRandomInteger = function(argMin, argMax) {
      var agRand = argMin + Math.random() * (argMax + 1 - argMin);

      return Math.floor(agRand);
    };

    var agCount = agRandomInteger(8, 60);

    $('.js-timer_count').attr({'style': 'animation-iteration-count:' + agCount})

    for (var i = 0; i < agCount; i++) {
      var agItemTag = '<div class="js-timer_item ag-timer_item js-ag-timer_segment js-ag-timer_segment-' + i + '" style="animation-iteration-count: ' + agCount + ' "></div>';

      agBox.append(agItemTag);
    }

    if (agCount) {
      setInterval(function () {
        if (agFlag === agCount) {
          return;

          agFlag = 0;
        }

        $('.js-timer_counter').text(agFlag);

        var agItem = $('.js-timer_item');

        console.log(agItem.eq(agCount));

        agItem.eq(agCount - agFlag).remove();

        //agItem.eq(agFlag).addClass('js-ag-active');

        setTimeout(function () {
          //agItem.eq(agFlag).removeClass('js-ag-active');
          agFlag++
        }, 500);
      }, 1000);
    }

  });
})(jQuery);