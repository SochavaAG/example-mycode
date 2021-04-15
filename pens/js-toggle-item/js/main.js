(function ($) {
  $(function () {

    var agItem = $('.js-step_list').children('li'),
      agFlag = 0;

    if (agItem.length) {
      setInterval(function () {
        if (agFlag === 3) {
          agFlag = 0;
        }
        agItem.eq(agFlag).addClass('js-ag-active');
        setTimeout(function () {
          agItem.eq(agFlag).removeClass('js-ag-active');
          agFlag++
        }, 500);
      }, 1000);
    }


  });
})(jQuery);