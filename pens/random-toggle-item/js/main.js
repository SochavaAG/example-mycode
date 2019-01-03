(function ($) {
  $(function () {

    function agToggleItemFunc(agToggleItem, agToggleItemTime) {
      agToggleItem.each(function () {
        var $this = this;
        $('> :gt(0)', $this).hide();
        setInterval(function () {
          $('> :first-child', $this).hide().next().fadeIn().end().appendTo($this);
        }, agToggleItemTime);
      });
    }

    var agToggleItemEven = $('.js-brand_item:even');

    agToggleItemFunc(agToggleItemEven, 5000);

    var agToggleItemOdd = $('.js-brand_item:odd');

    agToggleItemFunc(agToggleItemOdd, 2000);

  });
})(jQuery);