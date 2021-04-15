(function ($) {
  $(function () {


    var  sliderSpreads = $('#js-spreads-slider'),
    spreadsSlides = sliderSpreads.find('> li');

    updateSpreads = function () {
      var url;
      url = '/spreads/ecn_live.json';

      return $.getJSON(url, function (result) {
        return spreadsSlides.each(function () {
          return $(this).find('> .js-h-spreads-slider_spread').text(result[$(this).find('> .js-h-spreads-slider_pair').text()]);
        });
      });
    };

    setInterval(updateSpreads, 5000);


  });
})(jQuery);