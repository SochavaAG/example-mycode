(function ($) {
  $(function () {

    var agBody = $('body'),
      agRangeSlider = $('#js-range_slider')[0];
      //agRangeSlider = document.getElementById('js-range_slider');

    agBody.hasClass("ag-locale-site__RTL") ? agRTL = 'rtl' : agRTL = 'ltr';

    noUiSlider.create(agRangeSlider, {
      step: 1,
      connect: [true, false],
      range: {
        min: 0,
        max: 5
      },
      start: [0],
      direction: agRTL
    });

      var agRangeItem = $('.js-range-track_list').find('li'),
        agRewardClients = $('.js-reward_clients'),
        agRewardVolume = $('.js-reward_volume'),
        agRangeValArr = [1, 3, 5, 10, 15, 20],
        agVolumeValArr = [100, 250, 500, 1000, 1500, 2000];

      agRangeSlider.noUiSlider.on('update', function (e, a) {
        var agNum = Math.round(e[a]);

        agRewardClients.html(agRangeValArr[agNum]),
          agRewardVolume.html(agVolumeValArr[agNum]),
          function (e) {
            for (var i = 0; i < agRangeItem.length; i++) {
              if (i < e) {
                agRangeItem.eq(i).addClass('js-ag-selected');
              } else {
                agRangeItem.eq(i).removeClass('js-ag-selected');
              }
              //i < e ? agRangeItem.eq(a).addClass('js-ag-selected') : agRangeItem.eq(a).removeClass('js-ag-selected');

              if (i === e) {
                agRangeItem.eq(i).addClass('js-ag-active')
              } else {
                agRangeItem.eq(i).removeClass('js-ag-active');
              }
              //i === e ? agRangeItem.eq(a).addClass('js-ag-active') : agRangeItem.eq(a).removeClass('js-ag-active');
            }

          }(agNum);
      });

  });
})(jQuery);