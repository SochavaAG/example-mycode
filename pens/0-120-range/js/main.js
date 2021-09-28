(function ($) {
  $(function () {


    var agRangeSlider = function () {
      var agDisplayWidth = $(window).width(),
        agSlider = $('.js-ag-range-slider'),
        agRange = $('.js-ag-range-slider_range'),
        agValue = $('.js-ag-range-slider_value'),
        agNum = $('.js-ag-range_sum'),
        agFill = $('.js-ag-range-slider_fill');

      agSlider.each(function () {

        agValue.each(function () {
          var value = $(this).prev().val();

          $(this).text(value + "%");
          agFill.width(((value * 100) / 120) + '%');

          if (value <= 50) {
            agNum.text('1');
            agNum.removeClass('js-ag-range_sum-100').removeClass('js-ag-range_sum-500');
            agValue.removeClass('js-ag-range-slider_value-100').removeClass('js-ag-range-slider_value-500');
            agFill.removeClass('js-ag-range-slider_fill-100').removeClass('js-ag-range-slider_fill-500');
          } else if (value < 120) {
            agNum.text('100');
            agNum.removeClass('js-ag-range_sum-500').addClass('js-ag-range_sum-100');
            agValue.removeClass('js-ag-range-slider_value-500').addClass('js-ag-range-slider_value-100');
            agFill.removeClass('js-ag-range-slider_fill-500').addClass('js-ag-range-slider_fill-100');
          } else {
            agNum.text('500');
            agNum.removeClass('js-ag-range_sum-100').addClass('js-ag-range_sum-500');
            agValue.removeClass('js-ag-range-slider_value-100').addClass('js-ag-range-slider_value-500');
            agFill.removeClass('js-ag-range-slider_fill-100').addClass('js-ag-range-slider_fill-500');
          }

          if (value < 90) {
            agValue.css({'left': ((value * 100) / 120) + '%', 'right': 'auto'});
          } else {
            agValue.css({'left': 'auto', 'right': '0'});
          }
          if (value > 50) {
            if (agDisplayWidth < '768') {
              agValue.css({'top': '20px'});
            } else {
              agValue.css({'top': '-90px'});
            }
          } else {
            agValue.css({'top': '20px'});
          }
          agValue.text(Math.round(value) + '%');
        });

        agRange.on('input', function () {
          $(this).next(agValue).html(this.value);
          agFill.width(((this.value * 100) / 120) + '%');

          if (this.value <= 50) {
            agNum.text('1');
            agNum.removeClass('js-ag-range_sum-100').removeClass('js-ag-range_sum-500');
            agValue.removeClass('js-ag-range-slider_value-100').removeClass('js-ag-range-slider_value-500');
            agFill.removeClass('js-ag-range-slider_fill-100').removeClass('js-ag-range-slider_fill-500');
          } else if (this.value < 120) {
            agNum.text('100');
            agNum.removeClass('js-ag-range_sum-500').addClass('js-ag-range_sum-100');
            agValue.removeClass('js-ag-range-slider_value-500').addClass('js-ag-range-slider_value-100');
            agFill.removeClass('js-ag-range-slider_fill-500').addClass('js-ag-range-slider_fill-100');
          } else {
            agNum.text('500');
            agNum.removeClass('js-ag-range_sum-100').addClass('js-ag-range_sum-500');
            agValue.removeClass('js-ag-range-slider_value-100').addClass('js-ag-range-slider_value-500');
            agFill.removeClass('js-ag-range-slider_fill-100').addClass('js-ag-range-slider_fill-500');
          }

          if (this.value < 90) {
            agValue.css({'left': ((this.value * 100) / 120) + '%', 'right': 'auto'});
          } else {
            agValue.css({'left': 'auto', 'right': '0'});
          }
          if (this.value > 50) {
            if (agDisplayWidth < '768') {
              agValue.css({'top': '20px'});
            } else {
              agValue.css({'top': '-90px'});
            }
          } else {
            agValue.css({'top': '20px'});
          }
          agValue.text(Math.round(this.value) + '%');
        });
      });
    };

    agRangeSlider();


  });
})(jQuery);