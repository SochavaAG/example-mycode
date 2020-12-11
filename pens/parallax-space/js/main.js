(function ($) {
  $(function () {

    /* parallax */
    $.fn.parallax = function(options) {

      var windowHeight = $(window).height();

      // Establish default settings
      var settings = $.extend({
        xPos          : '50%',
        yPos          : 0,
        speed        : 0.15
      }, options);

      // Iterate over each object in collection
      return this.each( function() {

        // Save a reference to the element
        var $this = $(this);

        // Set up Scroll Handler
        $(document).scroll(function(){

          var scrollTop = $(window).scrollTop();
          var offset = $this.offset().top;
          var height = $this.outerHeight();

          // Check if above or below viewport
          if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
            return;
          }

          var yBgPosition = Math.round((offset - scrollTop) * settings.speed) + parseInt(settings.yPos);

          // Apply the Y Background Position to Set the Parallax Effect
          $this.css('background-position', settings.xPos + ' ' + yBgPosition + 'px');

        });
      });
    }

    window.mobileAndTabletCheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }

    var agDisplayWidth = $(window).width();

    if (agDisplayWidth > '750') {
      if(!window.mobileAndTabletCheck()) {
        $('.js-primary_parallax__phone').parallax({
          xPos : '83%',
          yPos : 250,
          speed : 0.2
        });

        $('.js-primary_parallax__spaceman').parallax({
          xPos : '73%',
          yPos : 210,
          speed : 0.1
        });
      }
    }
    /* /parallax */


    /* meteors */
    function index_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
      }
    }

    var index_Meteor = function () {
      function Meteor(options) {
        var _this = this;
        !function (instance, Constructor) {
          if (!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")
        }(this, Meteor), this.options = options, this.container = $("#".concat(this.options.container)), this.containerWidth = this.container.width(), this.containerHeight = this.container.height(), setInterval((function () {
          _this.init()
        }), 500)
      }

      var Constructor, protoProps, staticProps;
      return Constructor = Meteor, (protoProps = [{
        key: "init", value: function () {
          var _this2 = this, id = "".concat(this.options.container, "_").concat(this.getRandomInt(0, 10000));
          if (0 === $("#".concat(id)).length) {
            var index = this.getRandomInt(0, this.options.meteors.length - 1), meteor = this.options.meteors[index];
            if (meteor.count <= meteor.maxCount) {
              meteor.count++, this.container.append('\n<div id="'.concat(id, '" class="meteor__item">\n<div class="meteor__item-img"></div>\n</div>\n'));

              var topOrLeft = this.getRandomInt(0, 1),
                top = this.getRandomInt(0, this.containerHeight),
                left = this.getRandomInt(0, this.containerWidth),
                zIndex = 10 * meteor.zIndex,
                size = meteor.size,
                transition = meteor.speed;

              $("#".concat(id)).css({
                left: topOrLeft ? "100%" : "".concat(left, "px"),
                top: topOrLeft ? "".concat(top + 1000, "px") : 0,
                transition: "transform ".concat(transition, "s linear"),
                transform: "translate(".concat(size, "px, -").concat(size, "px"),
                "z-index": zIndex
              });

              $("#".concat(id)).find(".meteor__item-img").css({
                width: "".concat(size, "px"),
                height: "".concat(size, "px")
              });

              setTimeout((function () {
                $("#".concat(id)).css({transform: "translate(-".concat(_this2.containerHeight - (topOrLeft ? top : 0), "px, ").concat(_this2.containerHeight - (topOrLeft ? top : 0), "px")})
              }), 100);

              setTimeout((function () {
                $("#".concat(id)).remove(), meteor.count--
              }), 1000 * transition);
            }
          }
        }
      }, {
        key: "getRandomInt", value: function (min, max) {
          return Math.floor(min + Math.random() * (max + 1 - min))
        }
      }, {
        key: "isScrolledIntoView", value: function (elem) {
          var docViewTop = $(window).scrollTop(), docViewBottom = docViewTop + $(window).height(), elemTop = elem.offset().top;
          return elemTop + elem.height() >= docViewTop && elemTop <= docViewBottom
        }
      }]) && index_defineProperties(Constructor.prototype, protoProps), staticProps && index_defineProperties(Constructor, staticProps), Meteor
    }();

    new index_Meteor({
      container: "js-meteor-block",
      meteors: [{size: 600, speed: 5, maxCount: 2, count: 0, zIndex: 10}, {
        size: 300,
        speed: 10,
        maxCount: 3,
        count: 0,
        zIndex: 0
      }, {size: 150, speed: 15, maxCount: 5, count: 0, zIndex: 0}]
    });
    /* /meteors */

  });
})(jQuery);