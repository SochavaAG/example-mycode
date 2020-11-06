(function ($) {
  $(function () {

    var integraationJs = function () {
      function n() {
        t()
      }

      function e(n) {
        var e = n.getBoundingClientRect();
        return {top: e.top + window.pageYOffset, left: e.left + window.pageXOffset}
      }

      var t = function () {
        function n() {
          function n(n) {
            var i = n.offsetHeight, t = e(n).top, o = t + i + 230;
            o >= a && t <= r ? n.classList.add('js-ag-in-view') : n.classList.remove('js-ag-in-view');
          }

          var o = window.innerHeight, a = window.pageYOffset, r = a + o - 200;
          for (i = 0; i < t.length; i++)n(t[i]);
        }

        var t = document.querySelectorAll('.js-ag-animation_item');
        t && (window.addEventListener('load', n), window.addEventListener('resize', n), window.addEventListener('scroll', n));
      };
      n();
    }();

  });
})(jQuery);