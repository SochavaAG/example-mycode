(function ($) {
  $(function () {

    const trapOptions = {
      answer:  ["Yes","No","I don’t know"]
    };


    var slider = $('#js-slider')[0];

    var pipFormats = {
      '0': trapOptions.answer[1],
      '50': trapOptions.answer[2],
      '100': trapOptions.answer[0]
    };

    var arrStart = [50, 0];
    //var arrDirection = ['ltr', 'rtl'];

    noUiSlider.create(slider, {
      start: [fnArrayRandElement(arrStart)],
      step: 50,
      snap: true,
      connect: true,
      //direction: fnArrayRandElement(arrDirection),
      direction: 'rtl',
      range: {
        'min': 0,
        '50%': 50,
        'max': 100,
      },
      pips: {
        mode: 'values',
        values: [0, 50, 100],
        stepped: true,
        density: 3,
        format: {
          to: function(a) {
            return pipFormats[a];
          }
        }
      }
    });

    function fnArrayRandElement(arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }

  });
})(jQuery);