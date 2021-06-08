"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  //console.log(widthNoScroll, widthWithScroll);
  return widthNoScroll - widthWithScroll;
}

window.loader = function (ev) {
  var $body = $('body');
  var $preloader = $('#preloader');

  if (ev === 'show') {
    show();
  }
  if (ev === 'hide') {
    hide();
  }

  function show() {
    $body.addClass('loading');
    $preloader.addClass('opacity').fadeIn(200);
  }

  function hide() {
    $body.removeClass('loading');
    $preloader.fadeOut(200).removeClass('opacity');
  }
};

var EventsSlider = {
  slider: $('.events-slider'),
  init: function init() {
    var isInit = this.slider.hasClass('slick-initialized');
    if (!isInit) {
      this.slider.slick({
        slide: '.item',
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0%',
        infinite: false,
        arrows: false,
        autoplay: false,
        dots: false,
        unslicked: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-chevron-thin-left"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-chevron-thin-right"></span></button>',
        responsive: [{
          breakpoint: 1601,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '33%'
          }
        }, {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '25%'
          }
        }, {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '20%'
          }
        }, {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '15%'
          }
        }, {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '12%'
          }
        }, {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            centerPadding: '10%'
          }
        }]
      });
      this.slider.slick('slickGoTo', 1);
    }
  },
  destroy: function destroy() {
    var isInit = this.slider.hasClass('slick-initialized');
    console.log(isInit);
    if (isInit) {
      $('.events-slider').slick('unslick');
    }
  }
};

var $ = jQuery.noConflict();

var throttle = function throttle(type, name, obj) {
  var running = false;
  var object = obj || window;
  var func = function func() {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function () {
      object.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  object.addEventListener(type, func);
};

function deviceType() {
  return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/'/g, '').replace(/"/g, '');
}
function checkDeviceType(MQ, isMobile, isTablet, isDesktop, arrCbs) {
  if (MQ === 'desktop' && isDesktop) {
    arrCbs[0]();
  } else if (MQ === 'tablet' && isTablet) {
    arrCbs[1]();
  } else if (MQ === 'mobile' && isMobile) {
    arrCbs[2]();
  }
  //console.log('checkDeviceType:' + MQ);
}

function staticInit(mq, firstFunc, otherFunc, secFunc) {
  if (mq === 'desktop') {
    firstFunc();
  } else if (mq === 'tablet') {
    otherFunc();
  } else if (mq === 'mobile') {
    secFunc();
  }
  // console.log('staticInit:' + mq);
}

(function () {
  var $window = $(window);
  var $document = $(document);
  var $body = $('body');
  var $html = $('html');

  var Android = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? true : false;

  var App = function App() {
    var _this = this;

    _classCallCheck(this, App);

    this.init = function () {
      var self = _this;

      if (Android) {
        $('html').addClass('android');
      }

      //$('.field-account-number > input').inputmask('Regex', { regex: "^[1-9][0-9][0-9][0-9][0-9][0-9][0-9]?$|^100$" });

      /*$('input[type="tel"]').inputmask({
        "mask": "+9{1,2} (999) 999 99 99",
        clearMaskOnLostFocus: false,
        clearIncomplete: true
      });
      $('.field-code > input').inputmask({
        "mask": "9 9 9 9 9",
        clearMaskOnLostFocus: false,
        clearIncomplete: true
      });

      $('.field-account-number > input').inputmask({
        "mask": "9  9  9  9  9  9  9",
        'clearMaskOnLostFocus': true,
        'clearIncomplete': true
      });*/

   /*   var maxYear = new Date().getFullYear() - 17;
      $("#dob").datepicker({
        container: '.ll-skin-lugo',
        changeMonth: true,
        changeYear: true,
        yearRange: "1940:" + maxYear,
        //minDate: new Date(1940, 1 - 1, 1),
        maxDate: new Date(maxYear, 12 - 1, 1),
        regional: 'ru',
        beforeShow: function beforeShow(textbox, instance) {
          $('.DivToAppendPicker').append($('#ui-datepicker-div'));
        }
      });*/

      //$('.cuSelect > select').styler();

     /* _this.initMmenu();

      _this.modalEvents();

      _this.customScroll();

      _this.scrollToTop();

      _this.scrollToId();

      _this.popovers();

      _this.openTask();

      _this.openRegistration();

      _this.toggleInput();
      _this.togglePass();*/

      _this.snowInit();
    };

    this.handleLoad = function () {
      $('body').removeClass('loading');
      $('#preloader').fadeOut(200);
      //$('header').addClass('show');
    };

    this.switchToMobile = function () {
      console.log('switchToMobile: Mobile');
    };

    this.switchToTablet = function () {
      console.log('switchToTablet: Tablet');
    };

    this.switchToDesktop = function () {
      console.log('switchToDesktop: Desktop');
    };

    this.handleResize = function () {
      //console.log('resize');
    };

    this.destroy = function () {};

    this.handleScroll = function () {};

    this.scrollToTop = function () {
      var $sctollToTop = $(".scrollToTop");

      $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });

      //Click event to scroll to top
      $sctollToTop.click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
      });
    };

    this.scrollToId = function () {
      var $el = $('.jsScrollTo');

      $el.click(function (e) {
        e.preventDefault();

        var $scrollTo = $(this).attr('href');

        $('html, body').animate({
          scrollTop: $($scrollTo).offset().top
        }, 400);
        return false;
      });
    };

    this.initMmenu = function () {

      var $mobileNav = $('#mobile-nav');
      var $mobileNavBtn = $('#show-mobile-menu');
      if ($('#mobile-nav').length) {
        $mobileNav.mmenu({
          extensions: ["border-none", "fx-menu-fade", "fx-listitems-slide", "position-front", "fullscreen"],
          navbars: {
            add: false,
            position: "right",
            content: ["close"]
          }
        }, {
          clone: false,
          offCanvas: {
            pageSelector: "#page"
          }
        });

        var mobAPI = $mobileNav.data("mmenu");

        $mobileNavBtn.on('click', mobAPI.open);
        // $document.on('click', '#show-mobile-menu', function (e) {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   mobAPI.close;
        // });

        mobAPI.bind('open', function () {
          $mobileNavBtn.addClass('is-active');
        });
        mobAPI.bind('close', function () {
          $mobileNavBtn.removeClass('is-active');
        });

        $(window).on("orientationchange", function (event) {
          $mobileNavBtn.removeClass('is-active');
          mobAPI.close();
        });
      }
    };

    this.openTask = function () {
      var audio = document.getElementById("audio");
      var cookieTasks = getCookie('openedTasks');
      var openedTasksArray = [];

      if (cookieTasks.length !== 0) {
        openedTasksArray = JSON.parse(cookieTasks);
      }
      if ($('body').hasClass('logged')) {
        $.each(openedTasksArray, function (i, item) {
          $('.item-event[data-taskID=' + item + ']').removeClass('disabled');
        });
      }

      $('.item-event').on('click', function (e) {
        var logged = $('body').hasClass('logged');
        var disabled = $(this).hasClass('disabled');

        if (!logged) {
          $("#modalLogin").modal("show");
        } else {
          if (disabled) {
            audio.play();
            openedTasksArray.push($(this).attr('data-taskID'));
            setCookie('openedTasks', JSON.stringify(openedTasksArray), 1);
            $(this).removeClass('disabled');
          }
        }
      });
    };

    this.modalEvents = function () {
      $('.modal').on('shown.bs.modal', function () {}).on('hidden.bs.modal', function () {
        $('body').css('padding-right', '0');
      }).on('show.bs.modal', function (e) {
        testAnim('bounceInLeft');
      }).on('hide.bs.modal', function (e) {
        testAnim('bounceOutRight');
      });

      $('.modal-terms').on('show.bs.modal', function () {
        $(this).append('<div class="modal-backdrop fade in" data-dismiss="modal" aria-label="Close"></div>');
      }).on('hide.bs.modal', function (e) {
        $(this).find('.modal-backdrop').remove();
      });

      $('#modalRegistration').on('hidden.bs.modal', function (e) {
        var cookieUid = getCookie('uid');
        if (cookieUid.length > 2) {
          location.reload();
        }
      });

      function closeOpenModal(modal) {
        $('.modal').modal('hide');
        setTimeout(function () {
          $(modal).modal('show');
        }, 550);
      };

      function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
      };
    };

    this.popovers = function () {
      var popover = $('[data-toggle="popover"]');

      popover.popover({
        html: true,
        content: function content() {
          var content = $(this).attr("data-popover-content");
          return $(content).children(".popover-body").html();
        },
        title: function title() {
          var title = $(this).attr("data-popover-content");
          return $(title).children(".popover-heading").html();
        }
      });
    };

    this.scrollDown = function () {
      $('.btn-scroll-down').on('click', function (e) {
        e.preventDefault();

        if ($('html').hasClass('fp-enabled')) {
          $.fn.fullpage.moveTo('instruction');
        } else {
          var $scrollTo = '#info';

          $('html, body').animate({
            scrollTop: $($scrollTo).offset().top
          }, 400);
          return false;
        }
      });
    };

    this.customScroll = function () {
      $(window).load(function () {
        $('.cuScroll').mCustomScrollbar({
          axis: "y",
          scrollInertia: 0,
          //theme: '3d',
          scrollButtons: { enable: false },
          mouseWheel: { enable: true }
        });
      });
    };

    this.wowAnimation = function () {
      var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function callback(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      });
      wow.init();
    };

    this.openRegistration = function () {
      $('#open-modal-reg').on('click', function (e) {
        e.preventDefault();
        $("#modalLogin").modal("hide");
        setTimeout(function () {
          $("#modalRegistration").modal("show");
        }, 550);
      });
    };

    this.togglePass = function () {
      var inputPass = $('#passwd');
      $('.btn-show-pass').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          inputPass.attr('type', 'password');
        } else {
          $(this).addClass('active');
          inputPass.attr('type', 'text');
        }
      });
    };

    this.toggleInput = function () {
      var emailField = {
        type: 'email',
        name: 'email',
        placeholder: 'Email *',
        btnType: 'email',
        id: 'email'
      };
      var phoneField = {
        type: 'tel',
        name: 'telno',
        placeholder: 'Телефон *',
        btnType: 'phone',
        id: 'telno'
      };

      $('.btn-change').on('click', function (e) {
        e.preventDefault();

        var typeField = $(this).attr('data-type');
        var input = $(this).parents('.group-email-phone').find('input');

        if (typeField == 'email') {

          input.val('');
          input.attr('type', phoneField.type);
          input.attr('name', phoneField.name);
          input.attr('id', phoneField.id);
          input.attr('placeholder', phoneField.placeholder);
          $(this).attr('data-type', phoneField.btnType);
          input.inputmask({
            "mask": "+9{1,2} (999) 999 99 99",
            clearMaskOnLostFocus: false
          });
        } else if (typeField == 'phone') {

          input.inputmask('unmaskedvalue');
          input.inputmask('remove');
          input.val('');
          input.attr('type', emailField.type);
          input.attr('name', emailField.name);
          input.attr('id', emailField.id);
          input.attr('placeholder', emailField.placeholder);
          $(this).attr('data-type', emailField.btnType);
        }
      });
    };

    this.snowInit = function () {
      var Snow = function Snow(canvas, count) {
        var ctx = canvas.getContext('2d');
        var snowflakes = [];

        var add = function add(item) {
          return snowflakes.push(item(canvas));
        };

        var update = function update() {
          return _.forEach(snowflakes, function (el) {
            return el.update();
          });
        };

        var resize = function resize() {
          ctx.canvas.width = canvas.offsetWidth;
          ctx.canvas.height = canvas.offsetHeight;

          _.forEach(snowflakes, function (el) {
            return el.resized();
          });
        };

        var draw = function draw() {
          ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
          _.forEach(snowflakes, function (el) {
            return el.draw();
          });
        };

        var events = function events() {
          window.addEventListener('resize', resize);
        };

        var loop = function loop() {
          draw();
          update();
          animFrame(loop);
        };

        var init = function init() {
          _.times(count, function () {
            return add(function (canvas) {
              return new SnowItem(canvas);
            });
          });
          events();
          loop();
        };

        init(count);
        resize();

        return { add: add, resize: resize };
      };

      var defaultOptions = {
        color: '#fff',
        radius: [0.5, 2.0],
        speed: [1, 1],
        wind: [-0.1, 1.0]
      };

      var SnowItem = function SnowItem(canvas) {
        var _ref, _ref2, _ref3;

        var drawFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var opts = arguments[2];

        var options = _extends({}, defaultOptions, opts);
        var radius = options.radius,
            speed = options.speed,
            wind = options.wind,
            color = options.color;

        var params = {
          color: color,
          x: _.random(0, canvas.offsetWidth),
          y: _.random(-canvas.offsetHeight, 0),
          radius: (_ref = _).random.apply(_ref, _toConsumableArray(radius)),
          speed: (_ref2 = _).random.apply(_ref2, _toConsumableArray(speed)),
          wind: (_ref3 = _).random.apply(_ref3, _toConsumableArray(wind)),
          isResized: false
        };
        var ctx = canvas.getContext('2d');

        var updateData = function updateData() {
          params.x = _.random(0, canvas.offsetWidth);
          params.y = _.random(-canvas.offsetHeight, 0);
        };

        var resized = function resized() {
          return params.isResized = true;
        };

        var drawDefault = function drawDefault() {
          ctx.beginPath();
          ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI);
          ctx.fillStyle = params.color;
          ctx.fill();
          ctx.closePath();
        };

        var draw = drawFn ? function () {
          return drawFn(ctx, params);
        } : drawDefault;

        var translate = function translate() {
          params.y += params.speed;
          params.x += params.wind;
        };

        var onDown = function onDown() {
          if (params.y < canvas.offsetHeight) return;

          if (params.isResized) {
            updateData();
            params.isResized = false;
          } else {
            params.y = 0;
            params.x = _.random(0, canvas.offsetWidth);
          }
        };

        var update = function update() {
          translate();
          onDown();
        };

        return {
          update: update,
          resized: resized,
          draw: draw
        };
      };

      var el = document.querySelector('.page-content');
      var wrapper = document.querySelector('.box-snow');
      var canvas = document.getElementById('snow');

      var el1 = document.querySelector('.box-snow-front');
      var wrapper1 = document.querySelector('.box');
      var canvas1 = document.getElementById('snow-front');

      var animFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      if ($('#snow').length) {
        var snow = Snow(canvas, 80);
      }

      if ($('#snow-front').length) {
        var snow1 = Snow(canvas1, 200);
      }
    };
  };

  var projectApp = new App();
  var MQ = deviceType();
  var isMobile = false;
  var isTablet = true;
  var isDesktop = false;

  throttle('resize', 'optimizedResize');

  function switchDeviceType(mq) {
    if (mq === 'desktop' && isDesktop) {
      isDesktop = false;
      isTablet = true;
      isMobile = false;
    } else if (mq === 'tablet' && isTablet) {
      isMobile = true;
      isDesktop = true;
      isTablet = false;
    } else if (mq === 'mobile' && isMobile) {
      isMobile = false;
      isTablet = true;
      isDesktop = false;
    }
    //console.log('switchDeviceType: ' + mq);
  }

  staticInit(MQ, projectApp.switchToDesktop, projectApp.switchToTablet, projectApp.switchToMobile);

  $window.on('optimizedResize', function () {
    var mq = deviceType();

    checkDeviceType(mq, isMobile, isTablet, isDesktop, [projectApp.switchToDesktop, projectApp.switchToTablet, projectApp.switchToMobile]);

    switchDeviceType(mq);
  });

  $window.on('DOMContentLoaded', projectApp.init()).on('scroll', function () {
    return projectApp.handleScroll();
  }).on('load', function () {
    return projectApp.handleLoad();
  }).on('resize', function () {
    return projectApp.handleResize();
  });
})();