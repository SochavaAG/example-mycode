(function ($) {
  $(function () {

    var $window = $(window),
      agGlitchImgBox = $('.js-glitch_img-box');

    if (agGlitchImgBox.attr('data-original') && agGlitchImgBox.attr('data-glitch')) {
      var agGlitchImgEffectChange,
        agGlitchImgOriginal = agGlitchImgBox.data('original'),
        agGlitchImgArr = agGlitchImgBox.data('glitch').split(','),
        agGlitchImgCount = agGlitchImgArr.length;

      var agGlitchImgEffect = function () {
        agGlitchImgBox.css('background-image', 'url(' + agGlitchImgOriginal + ')'), agGlitchImgEffectChange = setTimeout(function () {
          agGlitchImgBox.css('background-image', 'url(' + agGlitchImgArr[Math.floor(Math.random() * agGlitchImgCount)] + ')'), agGlitchImgEffectChange = setTimeout(function () {
            agGlitchImgBox.css('background-image', 'url(' + agGlitchImgArr[Math.floor(Math.random() * agGlitchImgCount)] + ')'), agGlitchImgEffectChange = setTimeout(agGlitchImgEffect, Math.floor(120 * Math.random() + 60))
          }, Math.floor(120 * Math.random() + 60))
        }, Math.floor(2400 * Math.random() + 1200))
      }
    }

    $window.load(function () {
      setTimeout(function () {agGlitchImgEffect()}, 800);
    })

  });
})(jQuery);