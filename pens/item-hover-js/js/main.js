(function ($) {
  $(function () {

    var agItems = $('.js-feature_items'),
          agItem1 = $('.js-feature_item-1'),
          agItem2 = $('.js-feature_item-2'),
          agItem3 = $('.js-feature_item-3'),
          agItem4 = $('.js-feature_item-4'),
          agItem5 = $('.js-feature_item-5');

    agItem1.hover (
      function () {
        agItems.children('.js-feature_icons')
        .removeClass('js-ag-feature_icon-2')
        .removeClass('js-ag-feature_icon-3')
        .removeClass('js-ag-feature_icon-4')
        .removeClass('js-ag-feature_icon-5')
        .addClass('js-ag-feature_icon-1');
      },
      function () {
        agItem2.children('.js-feature_icons').removeClass('js-ag-feature_icon-1').addClass('js-ag-feature_icon-2');
        agItem3.children('.js-feature_icons').removeClass('js-ag-feature_icon-1').addClass('js-ag-feature_icon-3');
        agItem4.children('.js-feature_icons').removeClass('js-ag-feature_icon-1').addClass('js-ag-feature_icon-4');
        agItem5.children('.js-feature_icons').removeClass('js-ag-feature_icon-1').addClass('js-ag-feature_icon-5');
      });

    agItem2.hover (
      function () {
        agItems.children('.js-feature_icons')
        .removeClass('js-ag-feature_icon-1')
        .removeClass('js-ag-feature_icon-3')
        .removeClass('js-ag-feature_icon-4')
        .removeClass('js-ag-feature_icon-5')
        .addClass('js-ag-feature_icon-2');
      },
      function () {
        agItem1.children('.js-feature_icons').removeClass('js-ag-feature_icon-2').addClass('js-ag-feature_icon-1');
        agItem3.children('.js-feature_icons').removeClass('js-ag-feature_icon-2').addClass('js-ag-feature_icon-3');
        agItem4.children('.js-feature_icons').removeClass('js-ag-feature_icon-2').addClass('js-ag-feature_icon-4');
        agItem5.children('.js-feature_icons').removeClass('js-ag-feature_icon-2').addClass('js-ag-feature_icon-5');
      });

    agItem3.hover (
      function () {
        agItems.children('.js-feature_icons')
        .removeClass('js-ag-feature_icon-1')
        .removeClass('js-ag-feature_icon-2')
        .removeClass('js-ag-feature_icon-4')
        .removeClass('js-ag-feature_icon-5')
        .addClass('js-ag-feature_icon-3');
      },
      function () {
        agItem1.children('.js-feature_icons').removeClass('js-ag-feature_icon-3').addClass('js-ag-feature_icon-1');
        agItem2.children('.js-feature_icons').removeClass('js-ag-feature_icon-3').addClass('js-ag-feature_icon-2');
        agItem4.children('.js-feature_icons').removeClass('js-ag-feature_icon-3').addClass('js-ag-feature_icon-4');
        agItem5.children('.js-feature_icons').removeClass('js-ag-feature_icon-3').addClass('js-ag-feature_icon-5');
      });

    agItem4.hover (
      function () {
        agItems.children('.js-feature_icons')
        .removeClass('js-ag-feature_icon-1')
        .removeClass('js-ag-feature_icon-2')
        .removeClass('js-ag-feature_icon-3')
        .removeClass('js-ag-feature_icon-5')
        .addClass('js-ag-feature_icon-4');
      },
      function () {
        agItem1.children('.js-feature_icons').removeClass('js-ag-feature_icon-4').addClass('js-ag-feature_icon-1');
        agItem2.children('.js-feature_icons').removeClass('js-ag-feature_icon-4').addClass('js-ag-feature_icon-2');
        agItem3.children('.js-feature_icons').removeClass('js-ag-feature_icon-4').addClass('js-ag-feature_icon-3');
        agItem5.children('.js-feature_icons').removeClass('js-ag-feature_icon-4').addClass('js-ag-feature_icon-5');
      });

    agItem5.hover (
      function () {
        agItems.children('.js-feature_icons')
        .removeClass('js-ag-feature_icon-1')
        .removeClass('js-ag-feature_icon-2')
        .removeClass('js-ag-feature_icon-3')
        .removeClass('js-ag-feature_icon-4')
        .addClass('js-ag-feature_icon-5');
      },
      function () {
        agItem1.children('.js-feature_icons').removeClass('js-ag-feature_icon-5').addClass('js-ag-feature_icon-1');
        agItem2.children('.js-feature_icons').removeClass('js-ag-feature_icon-5').addClass('js-ag-feature_icon-2');
        agItem3.children('.js-feature_icons').removeClass('js-ag-feature_icon-5').addClass('js-ag-feature_icon-3');
        agItem4.children('.js-feature_icons').removeClass('js-ag-feature_icon-5').addClass('js-ag-feature_icon-4');
      });

  });
})(jQuery);