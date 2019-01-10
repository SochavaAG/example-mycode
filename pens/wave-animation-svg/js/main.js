(function ($) {
  $(function () {

    var wave1 = $('#ag-wave-1').wavify({
      height: 100,
      bones: 12,
      amplitude: 60,
      speed: .15
    });

    var wave2 = $('#ag-wave-2').wavify({
      height: 150,
      bones: 8,
      amplitude: 40,
      speed: .15
    });

    var wave3 = $('#ag-wave-3').wavify({
      height: 200,
      bones: 4,
      amplitude: 80,
      speed: .15
    });

  });
})(jQuery);