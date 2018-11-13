(function ($) {
  $(function () {

    var agTesla = $('.js-cars_tesla i'),
          agBMW = $('.js-cars_bmw i'),
          agMini = $('.js-cars_mini i'),
          agSmart = $('.js-cars_smart i');


    function rand() {
      return (Math.floor(Math.random() * 10) + 0);
    }

    agTesla.on('mouseenter', function() {
      $(this).removeAttr('class');
      $(this).addClass('ag-cars_icons ag-cars_icon-tesla js-ag-cars_icon-tesla-' + rand());
    });

    agBMW.on('mouseenter', function() {
      $(this).removeAttr('class');
      $(this).addClass('ag-cars_icons ag-cars_icon-bmw js-ag-cars_icon-bmw-' + rand());
    });

    agMini.on('mouseenter', function() {
      $(this).removeAttr('class');
      $(this).addClass('ag-cars_icons ag-cars_icon-mini js-ag-cars_icon-mini-' + rand());
    });

    agSmart.on('mouseenter', function() {
      $(this).removeAttr('class');
      $(this).addClass('ag-cars_icons ag-cars_icon-smart js-ag-cars_icon-smart-' + rand());
    });

  });
})(jQuery);