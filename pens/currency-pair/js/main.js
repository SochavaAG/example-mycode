var agItemGive = $('.js-currency_list__give li:not(.js-currency_title-item)').click(function () {
  $('.js-ag-from .js-ag-ant-down,.js-ag-from .js-ag-ant-top,.js-ag-from .js-ag-ant-left,.js-ag-from .js-ag-ant-right, .js-ag-from .js-ag-ant-ramp').remove();
  agItemGive.removeClass('js-ag-from').removeClass('js-ag-to');
  $(this).addClass('js-ag-from');
  $(this).append('<span class="js-ag-ant-left"></span>' +
    '<span class="js-ag-ant-down"></span>' +
    '<span class="js-ag-ant-right"></span>' +
    '<span class="js-ag-ant-top"></span>');
});
var agItemTake = $('.js-currency_list__take li:not(.js-currency_title-item)').click(function () {
  $('.js-ag-to .js-ag-ant-down,.js-ag-to .js-ag-ant-top,.js-ag-to .js-ag-ant-left,.js-ag-to .js-ag-ant-right, .js-ag-to .js-ag-ant-ramp').remove();
  agItemTake.removeClass('js-ag-to').removeClass('js-ag-from');
  $(this).addClass('js-ag-to');
  $(this).append('<span class="js-ag-ant-left"></span>' +
    '<span class="js-ag-ant-down"></span>' +
    '<span class="js-ag-ant-right"></span>' +
    '<span class="js-ag-ant-top"></span>');
});

$('.js-currency_list__take li:not(.js-currency_title-item), .js-currency_list__give li:not(.js-currency_title-item)').click(function () {
  var agItemTo = $('.js-ag-to'),
    agItemFrom = $('.js-ag-from');

  if (agItemTo.length && agItemFrom.length) {
    $('.js-ag-to, .js-ag-from').append('<span class="js-ag-ant-ramp"></span>');
    var agAntRampHeight = $('.js-currency_list__give .js-ag-ant-ramp').offset().top - $('.js-currency_list__take .js-ag-ant-ramp').offset().top,
      agAntRampHeightAbs = Math.abs(agAntRampHeight),
      agAntLine = $('#ag-ant-line'),
      agAntLinePos;

    agAntLine.css('height', agAntRampHeightAbs);

    if (agAntRampHeight > 0) {
      agAntLinePos = agItemTo.offset().top - $('.js-currency_list__give').offset().top;
      agAntLine.removeClass().addClass('js-ag-ant-top');
    } else {
      agAntLine.removeClass().addClass('js-ag-ant-down');
      agAntLinePos = agItemFrom.offset().top - $('.js-currency_list__give').offset().top;
    }
    var agAntLinePosTop = agAntLinePos - 85;
    agAntLine.css('top', agAntLinePosTop);
  }
});