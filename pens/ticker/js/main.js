(function ($) {
  $(function () {


      var agMarqueeOptions = {
        //speed in milliseconds of the marquee
        // duration: 15500,
        duration: 20500,
        // duration: 5500,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,
        pauseOnHover: true,
        startVisible: true
      };


      $(window).on('load', function () {
        var marquee_block = $('.js-marquee');

        marquee_block.marquee(agMarqueeOptions);
      });


  });
})(jQuery);