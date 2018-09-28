(function ($) {
  $(function () {

    var agLoginBtn = $('.js-start-login_link'),
      agLoginPanel = $('.js-start-login_panel'),

      agLanguageCurrent = $('.js-language_current'),
      agLanguagePanel = $('.js-language_panel'),
      agLanguageLocal = $('.js-language_item'),
      agLanguageBox = $('.js-language_box'),

      agSearchBlock = $('.js-search-block'),
      agSearchBtn = $('.js-search_btn'),
      agCloseBtn = $('.js-search_btn-close'),
      agSubmitBtn = $('#ag-search_btn-submit');

    function agPanelShow(btn, panel) {
      if (panel.css('display') != 'block') {
        btn.next(panel).fadeIn();
      }
    }

    function agPanelClose(panel) {
      $(document).bind('keyup', function (e) {
        if (e.keyCode != 27) {
          return true;
        }
        /* 'Esc' key (27) */
        if (e.keyCode == 27 && panel.is(':visible')) {
          panel.fadeOut();
        }
      });

      $(document).mouseup(function (e) {
        if (!panel.is(e.target) && panel.has(e.target).length === 0) {
          panel.fadeOut();
        }
      });
    }

    /* login */
    agLoginBtn.on('click', function (e) {
      e.preventDefault();

      agLoginBtnWidth = agLoginBtn.width();
      agLanguageBtnWidth = agLanguageBox.width();
      agPanelPosition = (agLanguageBtnWidth + 4),
      agArrowPosition = ((Math.floor(agLoginBtnWidth / 2) + agLanguageBtnWidth) - 4);

      agLoginPanel.css({right: - agPanelPosition});
      $('.js-start-login_panel-arrow').css({right: agArrowPosition});
      agPanelShow(agLoginBtn, agLoginPanel);
    });

    agPanelClose(agLoginPanel);
    /* /login */

    /* language */
    agLanguageCurrent.on('click', function () {
      agLanguageCurrent.toggleClass('js-ag-language_current-show');

      agPanelShow(agLanguageCurrent, agLanguagePanel);
    });

    agPanelClose(agLanguagePanel);

    agLanguageLocal.on('click', function () {
      var agLanguageCurrentName = $(this).children('a').html();

      agLanguageLocal.removeClass('js-ag-language_item-active');
      $(this).addClass('js-ag-language_item-active');
      agLanguageCurrent.html(agLanguageCurrentName);
      $('.js-language_panel-arrow').css({right: Math.floor(agLanguageCurrent.width() / 2) - 5}); // calculates the width agLanguageCurrent and aligns the arrow of the panel in the middle agLanguageCurrent
    });
    /* /language */



    /* search */
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
    /* /search */

    /* mobile menu */
    $('.js-menu_btn-wrap').on('click', function () {
      $(this).children().toggleClass('js-ag-menu_btn-show');
    });

    $('.js-menu_title-list__subcat').on('click', function (e) {
      e.preventDefault();

      $(this).next('.js-menu-subcat_list').toggleClass('js-ag-menu-subcat_list');
      $(this).next('.js-menu-subcat_list').slideToggle();
      $(this).toggleClass('js-ag-menu-parent_item');
    });

    var agLanguageSelectbox = $('#ag-mob-language_selectbox'),
      agGetClass = agLanguageSelectbox.attr('class');

    function agGetFlag() {
      var agLanguageSelectbox = $('#ag-mob-language_selectbox'),
        agLanguageCode = $('.js-mob-language_select option:selected').val(),
        agLanguageFlag = 'ag-language_icon-' + agLanguageCode;

        agLanguageSelectbox.attr('class', agGetClass).addClass(agLanguageFlag);
    }

    agGetFlag();

    $('.js-mob-language_select').change(function () {
      agGetFlag();
    });
    /* /mobile menu */

  });
})(jQuery);