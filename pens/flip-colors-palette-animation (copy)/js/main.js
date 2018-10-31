/*  сам плагин лежит в папке js/plugins/flip.js */
/* статья по созданию плагина https://habrahabr.ru/sandbox/39442/ */
;(function ( $, window, document, undefined ) {

  var pluginName = "flip",
    defaults = {
      delay: 3000,  // Amount of time before the next icon flips
      offset: 1250, // Amount of time between animate out and animate in
      pause: 5000,  // Amount of time before an animation cycle starts again
      elementToFlip: 'img',
      order: 'linear',
      startOnInit: false
    };

  function Plugin ( element, options ) {

    var self = this;

    self.settings = $.extend( {}, defaults, options );
    self._defaults = defaults;
    self._name = pluginName;

    self.element = element;
    self.$ikonsets = $(self.element).find('.ikonset');
    self.noOfIkonSets = self.$ikonsets.length;

    if (self.settings.order === 'linear') {
      self.settings.order = [];

      for (var i = 1; i <= self.noOfIkonSets; i++) {
        self.settings.order.push(i);
      }
    }

    self.ikonsetNumber = 0;

    if (self.settings.startOnInit === true) {
      self.startFlip();
    }
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {
    noOfIkonSets: 0,
    isActive: false,

    /**
     * Get the number of the previous icon
     */
    getPreviousIconNumber: function(iconNumber, noOfIcons) {

      var previousIconNumber = iconNumber - 1;

      if (previousIconNumber < 0) {
        previousIconNumber = noOfIcons - 1;
      }

      return previousIconNumber;
    },

    /**
     * Get the number of the next icon
     */
    getIconNumber: function($ikonset, noOfIcons) {

      var iconNumber = $ikonset.data('iconNumber');

      if (iconNumber === undefined) {
        iconNumber = 1;
      } else if ((iconNumber + 1) >= noOfIcons) {
        iconNumber = 0;
      } else {
        iconNumber++;
      }

      // Save the icon number
      $ikonset.data('iconNumber', iconNumber);

      return iconNumber;
    },

    // Flip and fade the icon in
    in: function($icon) {

      $icon
        .removeClass('zoomOutBounce')
        .addClass('active zoomInBounce');
    },

    // Fade the icon out
    out: function($icon) {

      $icon
        .removeClass('active zoomInBounce')
        .addClass('zoomOutBounce');
    },

    /**
     * Start animating
     */
    startFlip: function() {

      var self = this;

      // Only start once
      if (self.isActive === true) {
        return;
      }

      self.isActive = true;

      self.cycle = setInterval(function() {

        // Get the active ikonset
        var ikonsetNumber = self.settings.order[self.ikonsetNumber] - 1,
          $ikonset = self.$ikonsets.eq(ikonsetNumber);

        // Get the ikonset's icons and count them
        var $icons = $($ikonset).find(self.settings.elementToFlip),
          noOfIcons = $icons.length;

        if (noOfIcons !== 1) {

          // Get the number of the next icon to be active
          var iconNumber = self.getIconNumber($ikonset, noOfIcons),
            previousIconNumber = self.getPreviousIconNumber(iconNumber, noOfIcons);

          // Get the new and current icons
          var $icon = $ikonset.find(self.settings.elementToFlip).eq(iconNumber),
            $previousIcon = $ikonset.find(self.settings.elementToFlip).eq(previousIconNumber);

          // Hide the current icon
          self.out($previousIcon);

          // Flip and fade the new icon in
          setTimeout(function() {
            self.in($icon);
          }, self.settings.offset);
        }

        self.ikonsetNumber++;

        // If all of the ikonsets have been flipped, stop, then start again
        if (self.ikonsetNumber === self.settings.order.length) {
          self.stopFlip(true);

          if (self.settings.pause !== 0) {
            setTimeout(function() {
              self.startFlip();
            }, self.settings.pause);
          } else {
            self.startFlip();
          }
        }

      }, self.settings.delay);
    },

    /**
     * Stop animating
     *
     * Reset: true = when restarted, start from the beginning
     */
    stopFlip: function(reset) {

      var self = this;

      // Only stop once
      if (self.isActive === false) {
        return;
      }

      self.isActive = false;
      clearInterval(self.cycle);

      if (reset !== undefined && reset !== false) {
        self.ikonsetNumber = 0;
      }
    }
  });

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );
/*  /сам плагин */

(function ($) {
  $(function () {

//      вызов плагина

    var $iconsCategories = $('#icons-categories');

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
    flipCategories.data('plugin_flip').startFlip();

    // Only show the animation when the icon categories element is in view

//      нужно добавлять класс при скролле чтоб срабатывало когда блок в полезрения

//      if (flipCategories !== false) {
//        $iconsCategories.bind('inview', function(event, isInView) {
//          if (isInView) {
//            flipCategories.data('plugin_flip').startFlip();
//          } else {
//            flipCategories.data('plugin_flip').stopFlip();
//          }
//        });
//      }
  });
})(jQuery);


(function ($) {
$(document).ready(function () {

  var $hero = $('#hero');

  // Initiate the flip effect on hero icons
  var flipHero = $hero.flip({
    delay: 500, // Amount of time before the next icon flips
    pause: 0,  // Amount of time before an animation cycle starts again
    offset: 700, // Amount of time between animate out and animate in
    elementToFlip: 'img', // Which element in <div id="hero"> should be flipped?
    order: [1, 2, 3, 5, 4, 6],
    startOnInit: false
  });

  // Only show the animation when the hero icons element is in view
  flipHero.data('plugin_flip').startFlip();

//      if (flipHero !== false) {
//        $hero.bind('inview', function (event, isInView) {
//          if (isInView) {
//          } else {
//            flipHero.data('plugin_flip').stopFlip();
//          }
//        });
//      }
});
})(jQuery);