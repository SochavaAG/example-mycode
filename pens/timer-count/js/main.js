(function ($) {
  $(function () {

    var austDay = new Date(2019, 1 - 1, 1, 1, 0);
    $('#ag-countdown').countdown({
      until: austDay,
      format: 'dHMs',
      padZeroes: true,
      layout: '<ul class="ag-countdown_date">' +
      '<li class="ag-countdown_date-box">' +
      '<ul class="ag-countdown_days">' +
      '<li class="ag-countdown_digits ag-countdown_digit-{d10}"></li>' +
      '<li class="ag-countdown_digits ag-countdown_digit-{d1}"></li>' +
      '</ul>' +
      '<div class="ag-countdown_label">days</div>' +
      '</li>' +
      '<li class="ag-countdown_date-box">' +
      '<ul class="ag-countdown_hours">' +
      '<li class="ag-countdown_digits ag-countdown_digit-{h10}"></li>' +
      '<li class="ag-countdown_digits ag-countdown_digit-{h1}"></li>' +
      '</ul>' +
      '<div class="ag-countdown_label">hours</div>' +
      '</li>' +
      '<li class="ag-countdown_date-box">' +
      '<ul class="ag-countdown_minutes">' +
      '<li class="ag-countdown_digits ag-countdown_digit-{m10}"></li>' +
      '<li class="ag-countdown_digits ag-countdown_digit-{m1}"></li>' +
      '</ul>' +
      '<div class="ag-countdown_label">minutes</div>' +
      '</li>' +
      '<li class="ag-countdown_date-box">' +
      '<ul class="ag-countdown_seconds">' +
      '<li class="ag-countdown_digits ag-countdown_digit-{s10}"></li>' +
      '<li class="ag-countdown_digits ag-countdown_digit-{s1}"></li>' +
      '</ul>' +
      '<div class="ag-countdown_label">seconds</div>' +
      '</li>' +
      '</ul>'
    });

  });
})(jQuery);

