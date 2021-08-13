(function ($) {
  $(function () {

    $(window).on('scroll', function (e) {
      fnScrollElemView('[data-num]');
    });

    function fnScrollElemView(elem) {
      $(elem).each(function(index, item) {
        if(!$(item).hasClass('count')) {
          $(item).addClass('count');
          fnUpdateText(item, 0, 123291294, 2);
        }
      });
    }

    function fnUpdateText(selector, start, end, drob) {
      const elem = selector;
      const DELAY = 150;

      end = +elem.dataset.num;

      var startNum = start + end / 50;

      if (drob && end.toString().length < 5) {
        elem.textContent = startNum.toFixed(drob).replace('.', ',');
      } else {
        elem.textContent = startNum.toFixed(0);
      }

      if (startNum < end) {
        setTimeout(function () {
          fnUpdateText(selector, startNum, end, drob)
        }, DELAY);
      } else {
        elem.textContent = end.toString().replace('.', ',');
      }
    }


  });
})(jQuery);