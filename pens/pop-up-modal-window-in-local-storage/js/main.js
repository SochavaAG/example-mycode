(function () {
  $(function () {

   var  agModalOverlay = $('.js-ouibounce-modal_overlay'),
     agModalBlock = $('.js-ouibounce-modal-block'),
     agModalCloseBtn = $('.js-ouibounce-modal_btn-close');

    agModalCloseBtn.on('click', function(e) {
      agModalOverlay.fadeToggle();
      agModalBlock.fadeToggle();
    });

    $(document).on('mouseout', function(e) {
      agModalOverlay.fadeIn();
      agModalBlock.fadeIn();
    });

  });
})();


// https://www.alexa.com/topsites/countries/JP

.on("hidden.bs.modal", function () {
  e.cookie("ExitIntentPopupClosed", true, {path: "/", expires: 7})
}),


function h(ev) {
  if (!$.cookie('ExitIntentPopupClosed')) {
    ev.clientY;
    var agScreenWidth = (window).width();
    ev.clientY < 32 && ev.clientY < 30 && agScreenWidth > 700 && ($('#ExitIntent').is(':visible') || $('#ExitIntent').modal('show'))
  }
}





// https://github.com/carlsednaoui/ouibounce
var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
  sensitivity: 20, // Чувствительность. Defaults to 20.
  aggressive: false, // Агрессивный режим - модальное окно будет показываться постоянно
  timer: 3000, // задержка перед срабатыванием скрипта
  delay: 100, // задержка перед появлением модального окна
  cookieExpire: 182 // Количество дней, прежде чем модальное появится для пользователя снова
});

$('.ouibounce-underlay, .ouibounce-modal-close').on('click', function () {
  $('#ouibounce-modal').hide();
});
$('.ouibounce-modal').on('click', function (e) {
  e.stopPropagation();
});