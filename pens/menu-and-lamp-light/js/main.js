(function ($) {
  $(function () {

    var agLanguageCurrent = $('.js-language_current'),
      agLanguagePanel = $('.js-language_panel'),
      agLanguageLocal = $('.js-language_item'),

      agSearchBlock = $('.js-search-block'),
      agSearchBtn = $('.js-search_btn'),
      agCloseBtn = $('.js-search_btn-close'),
      agSubmitBtn = $('#ag-search_btn-submit'),

      agLoginPanel = $('.ag-start-login_panel'),
      agLoginBtn = $('.js-start-login_link');

    function agPanelToggle(btn, panel) {
      btn.next(panel).fadeToggle();
    }

    function agPanelClose(btn, panel) {
      $(document).bind('keyup', function (e) {
        if (e.keyCode != 27) {
          return true;
        }
        /* -------------- 'Esc' key (27) -------------- */
        if (e.keyCode == 27 && panel.is(':visible')) {
          panel.fadeOut();
        }
      });

      $(document).mouseup(function (e) {
        if (!panel.is(e.target) && !btn.is(e.target) && panel.has(e.target).length === 0) {
          panel.fadeOut();
        }
      });
    }


    /* login */
    agLoginBtn.on('click', function (e) {
      e.preventDefault();

      agPanelToggle(agLoginBtn, agLoginPanel);
    });

    agPanelClose(agLoginBtn, agLoginPanel);
    /* /login */

    /* language */
    agLanguageCurrent.on('click', function () {
      agLanguageCurrent.toggleClass('js-ag-language_current-show');

      agPanelToggle(agLanguageCurrent, agLanguagePanel);
    });

    agPanelClose(agLanguageCurrent, agLanguagePanel);

    agLanguageLocal.on('click', function () {
      var agLanguageCurrentName = $(this).children('a').html();

      agLanguageLocal.removeClass('js-ag-language_item-active');
      $(this).addClass('js-ag-language_item-active');
      agLanguageCurrent.html(agLanguageCurrentName);
      $('.ag-language_panel-arrow').css({right: Math.floor(agLanguageCurrent.width() / 2) - 5}); // calculates the width agLanguageCurrent and aligns the arrow of the panel in the middle agLanguageCurrent
    });
    /* /language */

    agSearchBtn.on('click', function () {
      agSearchBtn.next(agSearchBlock).addClass('js-ag-search-block');
      agCloseBtn.show();
      agSubmitBtn.show();
    });

    agCloseBtn.on('click', function () {
      agSearchBlock.removeClass('js-ag-search-block');
      $(this).hide();
      agSubmitBtn.hide();
      $('.js-search_input').val('');
    });

    agSubmitBtn.on('click', function () {
      $('#ag-search_form').submit();
    });


    $('.js-menu-parent_item').on('click', function (e) {
      e.preventDefault();

      $(this).children('.js-menu-subcat_list').slideToggle();
      $(this).toggleClass('js-ag-menu-parent_item');
    });

  });
})(jQuery);