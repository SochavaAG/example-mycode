(function ($) {
  $(function () {


    var appElins = {
      events: {
        load: {
          init: function () {
            this.testInit();
            this.marqueeInit();
          },
          testInit: function () {
            console.log('load event is active');
          },
          marqueeInit: function () {
            var agMarqueeBlock = $('.js-marquee_box');

            agMarqueeBlock.each(function (a, b) {
              if ($(window).width() > 1600) {
                var  agMarqueeOptions = {
                  direction: 'right',
                  duration: 30000,
                  startVisible: true,
                  duplicated: true
                };

                $(b).marquee(agMarqueeOptions);
              }
            });
          }
        },
        click: {
          init: function () {
            this.testInit();
            this.tabInit();
          },
          testInit: function () {
            console.log('click event is active');
          },
          tabInit: function () {
            var btnTab = $('.js-tabs_tab');

            btnTab.bind('click', function (e) {
              e.preventDefault();

              var parent = $(this).closest('.js-tabs-block');
              var index = $(this).index();

              // Current Tab Button
              $(this).addClass('js-ag-active');
              $(this).siblings().removeClass('js-ag-active');

              // Relation Tab Content
              parent.find('.js-tabs-info_content').eq(index).addClass('js-ag-active');
              parent.find('.js-tabs-info_content').eq(index).siblings().removeClass('js-ag-active');
            });
          }
        },
        hover: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('hover event is active');
          }
        },
        keywords: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('keywords event is active');
          }
        },
        resize: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('resize event is active');
          }
        },
        scroll: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('scroll event is active');
          }
        }
      },
      plugins: {
        init: function () {
          this.testInit();
        },
        testInit: function () {
          console.log('plugins is active');
        }
      }
    };

    function initApp(parent, arr) {
      for (var item in parent) {
        parent[item].init();
      }
    }

    // init events
    initApp(appElins.events, ['load', 'click', 'hover', 'keywords', 'resize', 'scroll']);
    //init plugins
    appElins.plugins.init();


  });
})(jQuery);