(function ($) {
  $(function () {

// Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

    var isMobile = {
        Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
        BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
        iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
        Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
        any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
      };

      if ( !isMobile.any() ) {

        // Define a blank array for the effect positions. This will be populated based on width of the title.
        var bArray = [];
        // Define a size array, this will be used to vary bubble sizes
        var sArray = [4,6,8,10];

        // Push the header width values to bArray
        for (var i = 0; i < $('.js-bubbles').width(); i++) {
          bArray.push(i);
        }

        // Function to select random array element
        // Used within the setInterval a few times
        function randomValue(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }

        // setInterval function used to create new bubble every 350 milliseconds
        setInterval(function(){

          // Get a random size, defined as variable so it can be used for both width and height
          var size = randomValue(sArray);
          // New bubble appeneded to div with it's size and left position being set inline
          // Left value is set through getting a random value from bArray
          $('.js-bubbles').append('<div class="js-ag-individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

          // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
          // Callback function used to remove finsihed animations from the page
          $('.js-ag-individual-bubble').animate({
              'bottom': '100%',
              'opacity' : '-=0.7'
            }, 3000, function(){
              $(this).remove()
            }
          );
        }, 350);
      }

  });
})(jQuery);