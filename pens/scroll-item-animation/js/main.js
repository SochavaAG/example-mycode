(function ($) {
  $(function () {


    function transformElementViewM(selector, coefficientSpeed, elem) {
      window.addEventListener('load', transformElement);
      window.addEventListener('scroll', transformElement);

      var sel = document.querySelectorAll(selector);

      sel.forEach(function (item, i) {
        item.dataset.sped = sel.length + coefficientSpeed - i;
      });

      function transformElement() {
        for (var i = 0; i < sel.length; i++) {
          var coordinateTop = sel[i].getBoundingClientRect().top,
            windowHeight = window.innerHeight,
            onView = coordinateTop > 0 && coordinateTop < windowHeight + 100;
          if (onView) {
            var el = sel[i];
            var img = sel[i].querySelector(elem);
            var numb = (coordinateTop) / el.dataset.sped;
            if (window.innerWidth < 900) {
              numb = coordinateTop / (el.dataset.sped * 3);
            }
            if (numb < 0) {
              numb = 0;
            }
            img.style.transform = 'translateY(' + numb + 'px) rotate(0.01deg)';
          }
        }
      }
    }

    transformElementViewM('.js-gallery_img-box', 10, 'img');

  });
})(jQuery);