    var fluidBlocks = function () {

      var windowHeight = window.innerHeight;

      function fluidBlock(block) {
        var prnt = block.parentElement;

        function moveBlock() {
          var hBlockDiff = block.clientHeight - windowHeight,
            hPrntDiff = prnt.clientHeight - windowHeight;

          requestAnimationFrame(moveBlock);

          if (hBlockDiff > 0 && block.classList.contains('js-ag-fixed')) {
            var prntOffset = prnt.getBoundingClientRect().bottom - windowHeight,
              offsetY = hBlockDiff * (prntOffset / hPrntDiff - 1);

            if (prntOffset > 30) {
              block.classList.add('js-col');
            } else {
              block.classList.remove('js-col');
            }

            block.style.transform = 'translateY(' + offsetY + 'px)';
          }
        }

        return function () {
          if (block.clientHeight < prnt.clientHeight) {
            document.addEventListener('scroll', function () {
              var heightDiff = block.clientHeight - prnt.clientHeight;

              if (prnt.getBoundingClientRect().bottom < windowHeight) {
                block.classList.remove('js-ag-fixed', 'js-col');
                block.classList.add('js-ag-fixed_bottom');
              } else if (prnt.getBoundingClientRect().top > 0) {
                block.classList.remove('js-ag-fixed', 'js-ag-fixed_bottom');
                block.classList.add('js-col');
              } else {
                block.classList.remove('js-ag-fixed_bottom');
                block.classList.add('js-ag-fixed');
              }
            });

            moveBlock();
          }
        }();
      }

      return {
        init: function () {
          document.querySelectorAll('.js-ag-aside-content, .js-ag-sidebar-content').forEach(function (fBlock) {
            fluidBlock(fBlock);
          })
        }
      }
    }();

    document.addEventListener('DOMContentLoaded', function () {
      if (detectIE() === false) fluidBlocks.init();
    });


    function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        var rv = ua.indexOf('rv:');

        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      return false;
    }