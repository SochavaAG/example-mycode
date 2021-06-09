(function ($) {
  $(function () {


    $('.js-queen-2').hover(function() {
      $(this).addClass('js-ag-queen');
    }, function() {
      $(this).removeClass('js-ag-queen');
    });


    function fnToggle () {
      $('.js-queen-3').toggleClass('js-ag-queen');
    }

    setInterval(function () {
      fnToggle ();
    }, 1000);


  });
})(jQuery);