
(function ($) {
  $(function () {

// valuesslider

    var agValuesSlider= $('#js-values-slider'),
      agValuesControllerItem = $('.js-values-controller_item');

    agValuesSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: false,
      speed: 100,
      fade: true,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1120,
        settings: {
          autoplay: false
        }
      }]
    });

    agValuesControllerItem.click(function() {
      if (!$(this).hasClass('js-ag-active')) {
        var nextSlide = $(this).index();
        refreshController(nextSlide);
      }
    });

    agValuesControllerItem.hover(
      function() {
        agValuesSlider.slick('slickPause');
      },
      function() {
        agValuesSlider.slick('slickPlay');
      }
    );

    agValuesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      refreshController(nextSlide);
    });

/*
    function refreshController(nextSlide) {
      agValuesSlider.slick('slickGoTo', nextSlide);
      $('.js-values-controller_item.js-ag-active').removeClass('js-ag-active');
      agValuesControllerItem.eq(nextSlide).addClass('js-ag-active').parent().attr("data-active", nextSlide);
    }
*/

    var agValuesControllerList = $('.js-values-controller_list'),
      agGetClass = agValuesControllerList.attr('class');

    function refreshController(nextSlide) {
      var agValuesControllerListActive = 'js-ag-values-controller_list-' + nextSlide;

      agValuesSlider.slick('slickGoTo', nextSlide);
      $('.js-values-controller_item.js-ag-active').removeClass('js-ag-active');
      agValuesControllerItem.eq(nextSlide).addClass('js-ag-active');
      agValuesControllerList.attr('class', agGetClass).removeClass('js-ag-values-controller_list-0').addClass(agValuesControllerListActive);
    }

  });
})(jQuery);