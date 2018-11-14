(function ($) {
  $(function () {

    var agTesla = $('.js-cars_tesla i'),
          agBMW = $('.js-cars_bmw i'),
          agMini = $('.js-cars_mini i'),
          agSmart = $('.js-cars_smart i');


    function rand() {
      return (Math.floor(Math.random() * 10) + 0);
    }

    function agChangeColor(agCar, agModelCar, agGetClass) {
      agCar.on('mouseenter', function() {
        $(this).removeAttr('class');
        $(this).addClass(agGetClass + ' js-ag-cars_icon-' + agModelCar + '-' + rand());
      });
    }

    agChangeColor(agTesla, 'tesla', agTesla.attr('class'));

    agChangeColor(agBMW, 'bmw', agBMW.attr('class'));

    agChangeColor(agMini, 'mini', agMini.attr('class'));

    agChangeColor(agSmart, 'smart', agSmart.attr('class'));

  });
})(jQuery);