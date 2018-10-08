(function ($) {
  $(function () {

    $(window).resize(agResize);
    agResize();

    function agResize() {

      $('#js-countdown').TimeCircles({
        ref_date: new Date(2019, 0, 1, 0, 0, 0, 0),
        start: true,
        refresh_interval: 0.1,
        count_past_zero: true,
        circle_bg_color: '#60686F',
        use_background: true,
        fg_width: 0.02,
        bg_width: 0.05,
        time: {
          Days: {show: true, text: 'Days', color: '#FC6'},
          Hours: {show: true, text: 'Hours', color: '#9CF'},
          Minutes: {show: true, text: 'Minutes', color: '#BFB'},
          Seconds: {show: true, text: 'Seconds', color: '#F99'}
        }
      }).rebuild();
    }

  });
})(jQuery);