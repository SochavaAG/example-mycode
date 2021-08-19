(function ($) {
  $(function () {


    function randomInteger(max) {
      var rand = Math.random() * (max + 1);
      return Math.floor(rand);
    }

    var agMaskArr = document.querySelectorAll('.js-joker_mask'),
      agJoker = document.querySelector('.js-joker_box');

    agJoker.addEventListener('mouseenter', function () {
      var agRandNum = randomInteger(agMaskArr.length - 1);

      agMaskArr[agRandNum].classList.add('js-ag-joker_mask__active');
    });

    agJoker.addEventListener('click', function () {
      agMaskArr.forEach(function (item) {
        item.classList.remove('js-ag-joker_mask__active');
      });

      var agRandNum = randomInteger(agMaskArr.length - 1);

      agMaskArr[agRandNum].classList.add('js-ag-joker_mask__active');
    });
    agJoker.addEventListener('mouseleave', function () {
      agMaskArr.forEach(function (item) {
        item.classList.remove('js-ag-joker_mask__active');
      })
    });


  });
})(jQuery);