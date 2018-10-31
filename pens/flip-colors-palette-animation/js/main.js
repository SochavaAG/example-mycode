(function ($) {
  $(function () {

    var $hero = $('#ag-colors-palette');

    // Initiate the flip effect on hero icons
    var flipHero = $hero.flip({
      delay: 1000, // Amount of time before the next icon flips
      pause: 0,  // Amount of time before an animation cycle starts again
      offset: 700, // Amount of time between animate out and animate in
      elementToFlip: 'img', // Which element in <div id="ag-colors-palette"> should be flipped?
      order: [1, 2, 3, 5, 4, 6],
      startOnInit: false
    });

    // Only show the animation when the hero icons element is in view
    flipHero.data('plugin_flip').startFlip();
    /*
     if (flipHero !== false) {
     $hero.bind('inview', function (event, isInView) {
     if (isInView) {
     } else {
     flipHero.data('plugin_flip').stopFlip();
     }
     });
     }
     */

  });
})(jQuery);