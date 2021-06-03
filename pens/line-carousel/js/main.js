(function ($) {
  $(function () {

    var EventLine = {
      itemWidth: 266,
      stop: false,
      events: {
        res: [
          {
            Sport: 1,
            Text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit"
          },
          {
            Sport: 2,
            Text: "Aenean commodo ligula eget dolor Aenean massa Cum sociis"
          },
          {
            Sport: 3,
            Text: "Natoque penatibus et magnis dis parturient montes"
          },
          {
            Sport: 4,
            Text: "Gascetur ridiculus mus Donec quam felis ultricies nec"
          },
          {
            Sport: 5,
            Text: "Pellentesque eu pretium quis sem Nulla consequat massa"
          },
          {
            Sport: 6,
            Text: "Quis enim Donec pede justo fringilla vel aliquet nec"
          },
          {
            Sport: 7,
            Text: "Vulputate eget arcu In enim justo rhoncus ut imperdiet"
          },
          {
            Sport: 8,
            Text: "Wvenenatis vitae justo Nullam dictum felis eu pede"
          },
          {
            Sport: 9,
            Text: "Amollis pretium Integer tincidunt Cras dapibus Vivamus"
          },
          {
            Sport: 10,
            Text: "Relementum semper nisi Aenean vulputate eleifend tellus"
          },
          {
            Sport: 11,
            Text: "Ienean leo ligula porttitor eu consequat vitae eleifend ac"
          },
          {
            Sport: 12,
            Text: "Tenim Aliquam lorem ante dapibus in viverra quis"
          },
          {
            Sport: 13,
            Text: "Ofeugiat a tellus Phasellus viverra nulla ut metus varius"
          },
          {
            Sport: 14,
            Text: "Udui Etiam rhoncus Maecenas tempus tellus eget"
          }
        ]
      },
      start: function () {
        this.addEvent();
      },
      shift: function () {
        $('.js-ag-line_item').each(function (i, item) {
          var $item = $(item),
            transXRegex = /\.*translateX\((.*)px\)/i,
            $itemTransform = $item.attr('style'),
            position = parseInt(transXRegex.exec($itemTransform)[1]);

          $item.css('transform', 'translateX(' + (position + EventLine.itemWidth) + 'px' + ')');
        });
      },
      addEvent: function () {
        if (this.events && this.events.res && this.events.res.length) {
          var eventId = Math.max(EventLine.events.res.length - 1),
            event = EventLine.events.res[eventId];

          this.shift();

          var $item =
            '<div class="js-ag-line_item" style="transform: translateX(0px)">' +
            '<div class="js-ag-line_logo-item">' +
            '<span class="js-ag-icons js-ag-icon-' + event.Sport + '"></span>' +
            '</div>' +
            '<p class="js-ag-line_item_text">' + event.Text + '</p>' +
            '</div>';

          $('.js-ag-line_box').prepend($item);

          delete this.events[this.events.res.length - 1];
          this.events.res.length--;

          setTimeout(function () {
            !EventLine.stop && EventLine.addEvent();
          }, 3000);
        }
      }
    };

    $(window).on('load', function () {
      EventLine.start();
    });


  });
})(jQuery);