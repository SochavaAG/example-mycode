(function ($) {
  $(function () {


    var appElins = {
      events: {
        load: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('load event is active');
          }
        },
        click: {
          init: function () {
            this.testInit();
          },
          testInit: function () {
            console.log('click event is active');
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
            this.activeSection();
          },
          testInit: function () {
            console.log('scroll event is active');
          },
          activeSection: function () {
            var agScreenDetect = $('.js-feature-block');

            fnScreenActivate(agScreenDetect, $(window).scrollTop());

            $(window).scroll(function () {
              fnScreenActivate(agScreenDetect, $(this).scrollTop());
            });

            function fnScreenActivate(argScreens, argTop) {
              var agTop = argTop || $(window).scrollTop();

              if (argScreens.length > 0) {
                argScreens.each(function (argKey, argVal) {
                  var agScreenStart = parseInt($(argVal).offset().top);
                  var agOffsetStartActivation = parseInt($(window).height());
                  //var endScreen = parseInt($(b).offset().top) + $(b).outerHeight();

                  if ((agTop + agOffsetStartActivation) >= agScreenStart) {
                    $(argVal).addClass('js-ag-active');
                  } else {
                    $(argVal).removeClass('js-ag-active');
                  }
                });
              }
            }
          }
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


  });
})(jQuery);