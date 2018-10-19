
function logo() {
  if (0 < $('#js-gambling-slot').length) {
    var k = $('.js-gambling-slot_item').length;
    setInterval(function () {
      $('.js-gambling-slot_item').addClass('js-ag-animate');
      $('.js-logo_light').css('display', 'none');
      $('.js-gambling-slot_letter').animate({top: '39px', display: 'none'}, 400, function () {
        $(this).css('top', '-39px');
      });
      setTimeout(function () {
        var m = 0,
          r = setInterval(function () {
          $('#js-gambling-slot-' + m + ' .js-gambling-slot_letter').animate({top: '0px', display: 'block'}, 150);
          $('#js-gambling-slot-' + m).removeClass('js-ag-animate');
          m == k && (setTimeout(function () {
            $('.js-logo_light').css('display', 'block');
          }, 175), clearInterval(r));
          m++
        }, 150)
      }, 1700)
    }, 5000)
  }
}

logo();
