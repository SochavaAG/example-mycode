(function ($) {
  $(function () {


    function fnToggleTabs(argItem) {
      var ariaState = argItem.attr('aria-expanded');

      if (ariaState === 'true') {
        ariaState = 'false';
      } else {
        ariaState = 'true';
      }

      argItem.attr('aria-expanded', ariaState);
    }

    $('.js-tabs_item').on('click', function (e) {
      e.preventDefault();

      agItem = $(this).children('a');

      fnToggleTabs(agItem);

      if (agItem.attr('aria-expanded')) {
        var agID = agItem.attr('href');

        console.log(agID);

        $('.js-tabs_item').removeClass('js-ag-tabs_item__active');
        $(this).addClass('js-ag-tabs_item__active');

        $('.js-tab_pane').removeClass('js-ag-tab_pane__active');
        $(agID).addClass('js-ag-tab_pane__active');
      }

    });

  });
})(jQuery);