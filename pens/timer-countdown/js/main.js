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
        circle_bg_color: '#DEDEDE',
        use_background: true,
        fg_width: 0.05,
        bg_width: 0.50,
        time: {
          Days: {show: true, text: 'Days', color: '#F09217'},
          Hours: {show: true, text: 'Hours', color: '#F09217'},
          Minutes: {show: true, text: 'Minutes', color: '#F09217'},
          Seconds: {show: true, text: 'Seconds', color: '#F09217'}
        }
      }).rebuild();
    }

  });
})(jQuery);