(function ($) {
  $(function () {

    var agCandyItem = $('.js-candies_item'),
    agPrize = 'http://example.com/smith.gif';

    agCandyItem.on('click', function () {
      var newSrc = 'http://example.com/johnson.gif';
      $(this).children('.js-candies_img').attr('src', agPrize);

      $(this).addClass('js-ag-candies_item-win');
    });


    /*$('.candies__item', function (e) {
      e.addEventListener('click', function () {
        this.classList.add('active');
        var e = document.createElement('div');
        e.classList.add('candies__item_win'), e.classList.add(getClassNUmber(this));
        var t = document.createElement('img');
        t.src = '/wp-content/themes/ggru/promo/promo17/img/candies/win.png', e.appendChild(t), $('.candies__main_image')[0].classList.add('deactive'), $('.candies__main_image')[0].appendChild(e), setTimeout(function () {
          openModal()
        }, 500)
      })
    })

    $('.get_more', function (e) {
      e.addEventListener('click', function () {
        closePopup();
      })
    });

    function openModal() {
      var e = prizes[click++];
      console.log(click, prizes.length), click >= prizes.length && deactiveMorerButton(), $('.modal')[0].classList.add('active'), $('.modal__summ span')[0].innerHTML = e;
    }

    function closePopup() {
      $('.candies__main_image')[0].classList.remove('deactive'), $('.modal')[0].classList.remove('active');
    }*/

  });
})(jQuery);