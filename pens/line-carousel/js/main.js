(function ($) {
  $(function () {

    var EventLine = {
      itemWidth: 266,
      load_promisse: null,
      stop: false,
      events: {
        res: [
          {
            Sport: 4,
            Text: "Lorem ipsum dolor sit amet consectetuer adipiscing elit"
          },
          {
            Sport: 85,
            Text: "Aenean commodo ligula eget dolor Aenean massa Cum sociis"
          },
          {
            Sport: 6,
            Text: "Natoque penatibus et magnis dis parturient montes"
          },
          {
            Sport: 4,
            Text: "Gascetur ridiculus mus Donec quam felis ultricies nec"
          },
          {
            Sport: 6,
            Text: "Pellentesque eu pretium quis sem Nulla consequat massa"
          },
          {
            Sport: 0,
            Text: "Quis enim Donec pede justo fringilla vel aliquet nec"
          },
          {
            Sport: 103,
            Text: "Vulputate eget arcu In enim justo rhoncus ut imperdiet"
          },
          {
            Sport: 2,
            Text: "Wvenenatis vitae justo Nullam dictum felis eu pede"
          },
          {
            Sport: 85,
            Text: "Amollis pretium Integer tincidunt Cras dapibus Vivamus"
          },
          {
            Sport: 6,
            Text: "Relementum semper nisi Aenean vulputate eleifend tellus"
          },
          {
            Sport: 4,
            Text: "Ienean leo ligula porttitor eu consequat vitae eleifend ac"
          },
          {
            Sport: 6,
            Text: "Tenim Aliquam lorem ante dapibus in viverra quis"
          },
          {
            Sport: 0,
            Text: "Ofeugiat a tellus Phasellus viverra nulla ut metus varius"
          },
          {
            Sport: 103,
            Text: "Udui Etiam rhoncus Maecenas tempus tellus eget"
          }
        ]
      },
      start: function () {
        this.addEvent();
      },
      lineToggle: function () {
        $('.sa_line').toggle();
      },
      shift: function () {
        $('.sa_lb_item').each(function (i, item) {
          var $item = $(item),
            transXRegex = /\.*translateX\((.*)px\)/i,
            $itemTransform = $item.attr('style'),
            position = parseInt(transXRegex.exec($itemTransform)[1]);

          $item.css('transform', 'translateX(' + (position + EventLine.itemWidth) + 'px' + ')');
        });
      },
      addEvent: function () {
       // if (this.events && this.events.res && this.events.res.length) {
          //alert(436);

          console.log(EventLine.events.res.length);

          var eventId = Math.max(EventLine.events.res.length - 1),
            event = EventLine.events.res[eventId];

          this.shift();

          var $item =
            '<div class="sa_lb_item" style="transform: translateX(0px)">' +
            '<div class="sa_lb_item_logo">' +
            '<span class="sportIco_yellow s' + event.Sport + '"></span>' +
            '</div>' +
            '<p class="sa_lb_item_text">' + event.Text + '</p>' +
            '</div>';

          $('.sa_line_bottom').prepend($item);

          delete this.events[this.events.res.length - 1];
          this.events.res.length--;

          setTimeout(function () {
            !EventLine.stop && EventLine.addEvent();
          }, 5000);
        /*} else {
          $.when(this.load_promisse = $.Deferred()).then(function () {
            EventLine.addEvent();
          });*/
          //this.getEvents();
        //}
      },
      /*
      getEvents: function () {
        $.ajax({
          url: '/messagesvc/getmessagesaboutbets',
          type: 'POST',
          dataType: 'json',
          success: function (data) {
            if (data && Object.keys(data.res).length) {
              EventLine.events = data;
              EventLine.load_promisse && EventLine.load_promisse.resolve();
            } else {
              //если по какой-то причине нет ответа или ответ некорректен, то скрываем eventline
              EventLine.lineToggle();
            }
          }
        });
      }
      */
    };

    $(window).on('load', function () {
      EventLine.start();
    });


  });
})(jQuery);