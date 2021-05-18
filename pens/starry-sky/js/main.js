(function ($) {
  $(function () {


    var agStar = $('.js-starry-sky_star');

    setInterval(function () {
      var agRandomInteger = function (argMin, argMax) {
          var agRand = argMin + Math.random() * (argMax + 1 - argMin);

          return Math.floor(agRand);
        },

        agTop = agRandomInteger(0, 8) + '%',
        agLeft = agRandomInteger(0, 80) + '%',
        agFlag = agRandomInteger(0, 1);

      agStar.toggleClass('js-ag-starry-sky_star__active');

      if(agFlag) {
        agStar.toggleClass('js-ag-starry-sky_star__reverse').css({'top': agTop, 'left': agLeft});
      }
    }, 2000);


  });
})(jQuery);