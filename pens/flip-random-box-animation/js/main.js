(function ($) {
  $(function () {
    var $iconsCategories = $('#ag-categories');

    // Initiate the flip effect on icon categories
    var flipCategories = $iconsCategories.flip({
      delay: 2100, // Amount of time before the next icon flips
      pause: 0,  // Amount of time before an animation cycle starts again
      offset: 800, // Amount of time between animate out and animate in
      elementToFlip: 'div', // Which element in <div id="#icons-categories"> should be flipped?
      order: [7,2,5,8,3,6,4,1],
      // order: 'linear',
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