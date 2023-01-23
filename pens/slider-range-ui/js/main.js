(function ($) {
  $(function () {

    $('.js-slider-range').each(function() {
      var minValue = Number($(this).attr('data-min')),
        maxValue = Number($(this).attr('data-max')),
        value = Number($(this).attr('data-value')),
        step = Number($(this).attr('data-step')),
        $this = $(this);

      $this.slider({
        range: true,
        value: value,
        min: minValue,
        max: maxValue,
        step: step,
        values: [minValue, maxValue],
        slide: function(event, ui) {
          var selectedMin = ui.values[0],
            selectedMax = ui.values[1],
            currentValueMin = selectedMin,
            currentValueMax = selectedMax;

          if(currentValueMax > 59) {
            currentValueMax = ">" + currentValueMax;
          }

          $this.find('.js-min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
          $this.find('.js-max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
        }

      });

      var currentValueMin = minValue,
        currentValueMax = maxValue;

      if(currentValueMax > 59) {
        currentValueMax = ">" + currentValueMax;
      }

      $this.find('span[tabindex]:first-of-type').append('<span class="js-ag-range_num js-min-value" data-selected-value></span>').find('.js-ag-range_num').html(currentValueMin).attr('data-selected-value', minValue);
      $this.find('span[tabindex]:last-of-type').append('<span class="js-ag-range_num js-max-value" data-selected-value></span>').find('.js-ag-range_num').html(currentValueMax).attr('data-selected-value', maxValue);
    });

  });
})(jQuery);