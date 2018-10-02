(function ($) {
  $(function () {

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
    var agLoginBtn = $('.js-start-login_link'),
      agLoginPanel = $('.js-start-login_panel');

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
    var agLanguageCurrent = $('.js-language_current'),
      agLanguagePanel = $('.js-language_panel'),
      agLanguageLocal = $('.js-language_item'),
      agLanguageBox = $('.js-language_box');

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
    var agSearchBlock = $('.js-search-block'),
      agSearchBtn = $('.js-search_btn'),
      agCloseBtn = $('.js-search_btn-close'),
      agSubmitBtn = $('#ag-search_btn-submit');

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
    var agFlagScreenToggle,

      agBody = $('body'),
      agMenuBtn = $('.js-menu_btn-wrap'),
      agHeader = $('.js-header-wrap'),
      agMenuBlock = $('.js-menu-block'),
      agMenuNav = $('.js-menu_nav'),

      agParentCat = $('.js-menu-subcat_title-list'),
      agSubcatList = $('.js-menu-subcat_list');
    /*
      agMenuBlockHeight = agMenuNav.height();
*/

    function agMenuClose() {
      agMenuBtn.children().removeClass('js-ag-menu_btn-show');
      agMenuBlock.removeClass('js-ag-menu-block');
      agMenuNav.removeClass('js-ag-menu_nav'); // remove animation for categories items

      agBody.removeClass('js-ag-body-noscroll');
      setTimeout(function () {
        agHeader.css({'bottom': 'auto'});
      }, 305);
    }

    function agSubcatListHide() {
      agParentCat.next('.js-menu-subcat_list').removeClass('js-ag-menu-subcat_list');
      agParentCat.next('.js-menu-subcat_list').slideUp();
      agParentCat.parent().removeClass('js-ag-menu-parent_item');
    }

    $(window).resize(function () {
      var width = $(window).width();

      if (width <= 767) { // screen <= 767
        if (agFlagScreenToggle === true || agFlagScreenToggle == undefined) {

          //agMenuBlock.css({'min-height': agMenuBlockHeight});

          //agLoginBtn.off('click');
          //agLanguageCurrent.off('click');
          //agLanguagePanel.removeAttr('style');
          //agLoginPanel.removeAttr('style');


          /* toggle menu */
          agMenuBtn.on('click', function () {
            $(this).children().toggleClass('js-ag-menu_btn-show');

            if($(this).children().hasClass('js-ag-menu_btn-show')) {
              var agScrollSelector = '';

              if (!agScrollSelector && $('html').scrollTop()) {
                agScrollSelector = 'html';
              }
              if (!agScrollSelector && $('body').scrollTop()) {
                agScrollSelector = 'body';
              }
              //agScrollPos = $(agScrollSelector).scrollTop() ? $(agScrollSelector).scrollTop() : 0;

          //    navMenu.animate({scrollTop: 0}, 100).addClass('js-ag-m-nav-open js-ag-m-nav-open-an-cat');
          //    blockCat.removeClass('js-ag-m-mm_parent-cat-active');
          //    subCat.hide();

              agMenuBlock.addClass('js-ag-menu-block');
              agMenuNav.addClass('js-ag-menu_nav');  // add animation for categories items

              agBody.addClass('js-ag-body-noscroll');
              agHeader.css({'bottom': 0});
            } else {
              agMenuClose();

              agSubcatListHide();
            }
          });
          /* /toggle menu */


          /* show header when scrolling */
          var agScrollPrev = 100;

          $(window).scroll(function () {
            var agScrolled = $(window).scrollTop();

            if (agScrolled > 100) {
              if (agScrolled > agScrollPrev) {
                agHeader.addClass('js-ag-header-wrap');
              } else {
                agHeader.removeClass('js-ag-header-wrap');
              }
              agScrollPrev = agScrolled;
            }
          });
          /* /show header when scrolling */

          /* select country */
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
          /* /select country */

          /* show subcategories */
          agParentCat.on('click', function (e) {
            e.preventDefault();

            if ($(this).next('.js-menu-subcat_list').css('display') == 'none') {
              agSubcatListHide();

              agParentCat.removeClass('js-ag-menu-parent_item');
              $(this).next('.js-menu-subcat_list').addClass('js-ag-menu-subcat_list');
              $(this).next('.js-menu-subcat_list').slideDown();
              $(this).parent().addClass('js-ag-menu-parent_item');
            }else{
              agSubcatListHide();
            }
          });
          /* /show subcategories */

          agFlagScreenToggle = false;
        }
      }else{ // screen > 767 
        if (agFlagScreenToggle === false || agFlagScreenToggle == undefined) {

          agMenuBtn.off('click');
          agParentCat.off('click');
          agSubcatList.removeAttr('style');

          agMenuClose();

          agSubcatListHide();

          agFlagScreenToggle = true;
        }
      }
    }).resize();
    /* /mobile menu */

  });
})(jQuery);