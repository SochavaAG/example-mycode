(function ($) {
  $(function () {

    var agWaveSVG = document.getElementById('js-svgWave');
    if (null != agWaveSVG) bodymovin.loadAnimation({
      wrapper: agWaveSVG,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://rawcdn.githack.com/SochavaAG/example-mycode/master/pens/animation-wave-svg/js/JSON/animations-wave.json'
    });

  });
})(jQuery);