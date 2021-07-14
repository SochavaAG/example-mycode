(function ($) {
  $(function () {

      var agBubbles = $('.js-bubbles');


        for (var t = 30 + Math.floor(61 * Math.random()), e = 0; e < t; e++) {
          agBubbles.append('<div class="js-ag-bubble-container"><div class="js-ag-bubble"></div></div>');
        }

        agBubbles.find('.js-ag-bubble-container').each((function () {
          var t = Math.floor(101 * Math.random()),
            e = 3 + Math.floor(13 * Math.random()),
            n = Math.floor(16 * Math.random()),
            r = 20 + Math.floor(9 * Math.random()),
            i = Math.floor(3 * Math.random()),
            o = $(this);

          o.css({
            left: t + '%',
            '-webkit-animation-duration': r + 's',
            '-moz-animation-duration': r + 's',
            '-ms-animation-duration': r + 's',
            'animation-duration': r + 's',
            '-webkit-animation-delay': n + 's',
            '-moz-animation-delay': n + 's',
            '-ms-animation-delay': n + 's',
            'animation-delay': n + 's',
            '-webkit-filter': 'blur(' + i + 'px)',
            '-moz-filter': 'blur(' + i + 'px)',
            '-ms-filter': 'blur(' + i + 'px)',
            filter: 'blur(' + i + 'px)'
          }), o.children('.bubble').css({width: e + 'px', height: e + 'px'});
        }));


  });
})(jQuery);