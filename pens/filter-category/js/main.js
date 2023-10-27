(function ($) {
  $(function () {

    $(window).resize(function () {
      if ($(this).width() >= 768) {
        $('#js-filter-cat-tab_list').css({display: 'flex'});
      } else {
        $('#js-filter-cat-tab_list').css({display: 'none'});
      }

      /*var agGrid = $('.js-ag-filter-cat_box');

      if ($(this).width() >= 768) {
        agGrid.removeClass('js-ag-grid_list__large');
        agGrid.addClass('js-ag-grid_list__small');
      }else{
        agGrid.removeClass('js-ag-grid_list__small');
        agGrid.addClass('js-ag-grid_list__large');
      }*/
    });

    $('#js-filter-cat-toggle_btn').click(function () {
      var agIcon = $('.js-ag-filter-cat-toggle_icon');

      $('#js-filter-cat-tab_list').slideToggle(500);

      agIcon.toggleClass(' js-ag_up');
    });

    $('.js-ag-filter-cat-tab_item').click(function () {
      var agCatName = $(this).html();

      $('.js-ag-filter-cat-tab_item').removeClass('js-ag-cat__active');

      $(this).addClass('js-ag-cat__active');
      $('.js-ag-filter-cat-toggle_name').text(agCatName);

      var catId = 'js-cat_' + agCatName.substr(0, 3).toLowerCase();

      if (catId != 'js-cat_all') {
        var agGetCurrent = $('.js-ag-filter-cat_box .' + catId);

        $('.js-ag-filter-cat_item').not(agGetCurrent).fadeOut(500);

        agGetCurrent.fadeIn(500);
      }else{
        $('.js-ag-filter-cat_item').fadeIn(500);
      }

      if ($(window).width() < 768) {
        $('#js-filter-cat-toggle_btn').click();
      }
    });

  });
})(jQuery);








