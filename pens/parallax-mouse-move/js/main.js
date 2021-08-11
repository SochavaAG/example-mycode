(function ($) {
  $(function () {


    function mouseMoveX(selector, spedX) {
      const sel = document.querySelectorAll(selector);

      sel.forEach( function (item) {
        var itemWidth = item.clientWidth;
        item.addEventListener('mousemove', function (event) {
          var trX = event.clientX - itemWidth;
          const trans = item.children;
          for (var i = 0; i < trans.length; i++) {
            trans[i].style.transform = 'translateX(' + trX / (spedX * (trans.length - i)) + 'px)  rotate(0.01deg)';
          }
        })
      });
    }

    mouseMoveX('.js-parallax_box', -75);


  });
})(jQuery);