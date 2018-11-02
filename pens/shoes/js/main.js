(function ($) {
  $(function () {

    $('body').bind({
      click: function() {
        $('.js-contact-shoes-block').css('background-color', '#E1E9D2');
      },
      mousemove: function(e) {
        var agContactShoes = $('#ag-contact-shoes'),
          agPosition = 0,
          agSide = $(window).width() / 7;

        if (e.pageX < agSide && agPosition != 1) {
          agContactShoes.css({backgroundPosition: 0 + 'px'});

          agPosition = 1;
        }
        if ((e.pageX < 2 * agSide) && (e.pageX > agSide) && agPosition != 2) {
          agContactShoes.css({backgroundPosition: -190 + 'px'});

          agPosition = 2;
        }
        if ((e.pageX < 3 * agSide) && (e.pageX > 2 * agSide) && agPosition != 3) {
          agContactShoes.css({backgroundPosition: -380 + 'px'});

          agPosition = 3;
        }
        if ((e.pageX < 4 * agSide) && (e.pageX > 3 * agSide) && agPosition != 4) {
          agContactShoes.css({backgroundPosition: -570 + 'px'});

          agPosition = 4;
        }
        if ((e.pageX < 5 * agSide) && (e.pageX > 4 * agSide) && agPosition != 5) {
          agContactShoes.css({backgroundPosition: -760 + 'px'});

          agPosition = 5;
        }
        if ((e.pageX < 6 * agSide) && (e.pageX > 5 * agSide) && agPosition != 6) {
          agContactShoes.css({backgroundPosition: -950 + 'px'});

          agPosition = 6;
        }
        if ((e.pageX < 7 * agSide) && (e.pageX > 6 * agSide) && agPosition != 7) {
          agContactShoes.css({backgroundPosition: -1140 + 'px'});

          agPosition = 7;
        }
      }
    });

  });
})(jQuery);