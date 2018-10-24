(function ($) {
  $(function () {

    var agHeaderMenu = $('#ag-header-menu');

    agHeaderMenu.lavalamp({
      easing: 'easeOutBack',
      setOnClick: true,
      speed: 700
    });

    agHeaderMenu.children('.js-menu-cat_item').on('click', function () {
      agHeaderMenu.children('.js-menu-cat_item').removeClass('js-ag-menu-cat_item'), $(this).addClass('js-ag-menu-cat_item');
    });

  });
})(jQuery);