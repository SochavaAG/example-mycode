(function ($) {
  $(function () {


    // Section of Floating Icons
    // Select Elements
    var icons = document.querySelectorAll('.js-icon_box');

    // Amplitude
    var amplitude = 16;

    // Interval Array
    var interval = [];
    var counter = 0;

    // RunSpeed
    var runSpeed = .6;

    // Init Function
    for (var i = 0; i < icons.length; i++) {
      for (var z = 0; z < icons[i].children.length; z++, counter++) {
        setTimeout(fnFloating(i, z, counter), Math.random() * 2000);
      }
    }

    // Set Floating Elements through interval
    function fnFloating(i, z, counter) {
      interval[counter] = setInterval(function () {
        // Get random X
        var x = Math.floor(Math.random() * amplitude);

        if (Math.random() < 0.5) {
          x = -x;
        }

        // Get random Y
        var y = Math.floor(Math.random() * amplitude);

        if (Math.random() < 0.5) {
          y = -y;
        }

        $(icons[i].children[z]).css({
          transform: 'translate(' + x + 'px, ' + y + 'px)',
          transition: '5s'
        });

        $(icons[i].children[z]).on('mouseenter mousemove', function (e) {
          clearInterval(interval[counter]);

          var x1 = $(this).offset().left + 34;
          var y1 = $(this).offset().top + 34;

          if (e.pageX >= x1 && e.pageY >= y1) {
            $(icons[i].children[z]).css({
              transform: 'translate(' + -amplitude + 'px, ' + -amplitude + 'px)',
              transition: runSpeed + 's'
            });
          } else if (e.pageX >= x1 && e.pageY <= y1) {
            $(icons[i].children[z]).css({
              transform: 'translate(' + -amplitude + 'px, ' + amplitude + 'px)',
              transition: runSpeed + 's'
            });
          } else if (e.pageX <= x1 && e.pageY <= y1) {
            $(icons[i].children[z]).css({
              transform: 'translate(' + amplitude + 'px, ' + amplitude + 'px)',
              transition: runSpeed + 's'
            });
          } else if (e.pageX <= x1 && e.pageY >= y1) {
            $(icons[i].children[z]).css({
              transform: 'translate(' + amplitude + 'px, ' + -amplitude + 'px)',
              transition: runSpeed + 's'
            });
          }
        });

        $(icons[i].children[z]).on('mouseleave', function () {
          interval[counter] = setInterval(function () {
            if (Math.random() < 0.5) {
              x = -x;
            }

            if (Math.random() < 0.5) {
              y = -y;
            }

            $(icons[i].children[z]).css({
              transform: 'translate(' + x + 'px, ' + y + 'px)',
              transition: '5s'
            });
          }, 3500);
        });
      }, 3500);
    }


  });
})(jQuery);