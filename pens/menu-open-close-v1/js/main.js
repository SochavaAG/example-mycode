(function ($) {
  $(function () {


    /* nav menu */
    $('#js-menu_btn').on('click', function (e) {
      e.preventDefault();

      var agBody = $('body');

      agBody.toggleClass('js-ag-menu__open');
    });

    function agMenuClose() {
      var agBody = $('body');

      agBody.removeClass('js-ag-menu__open');
    }

    $(document).bind('keyup', function (e) {
      if (e.keyCode != 27) {
        return true;
      }
      /* 'Esc' key (27) */
      if (e.keyCode == 27 && $('#js-menu_nav').is(':visible')) {
        agMenuClose();
      }
    });

    $(document).mouseup(function (e) {
      var agMenuNav = $('#js-menu_nav');

      if ((!$('#js-menu_btn').is(e.target) && !agMenuNav.is(e.target) && agMenuNav.has(e.target).length === 0)) {
        agMenuClose();
      }
    });
    /* /nav menu */

    /* categories */
    var agCatTitle = $('.js-menu-nav_link');

    agCatTitle.on('click', function (e) {
      e.preventDefault();

      var agCatText = $(this).parent('.js-menu-nav_item').children('.js-ag-subcat-nav_list');

      if (agCatText.css('display') == 'none') {
        agCatText.slideDown();

        $(this).parent('.js-menu-nav_item').addClass('js-ag-menu-nav_has-subcat__open');
      }else{
        agCatText.slideUp();

        $(this).parent('.js-menu-nav_item').removeClass('js-ag-menu-nav_has-subcat__open');
      }
    });
    /* /categories */


  });
})(jQuery);