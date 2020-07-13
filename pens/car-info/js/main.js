var distancePerPoint = 1;
var drawFPS = 120;

var id, line, length, timer, autotimer;

function startDrawingPath() {
  length = 0;
  line = document.getElementById("line_" + id);

  timer = setInterval(increaseLength, 1000 / drawFPS);
}

function increaseLength() {
  var pathLength = line.getTotalLength();
  length += distancePerPoint;
  line.style.strokeDasharray = [length, pathLength].join(' ');
  line.style.stroke = '#fff';
  if (length >= pathLength) {
    showText();
    clearInterval(timer);
  }
}

function showText() {
  $("#text_" + id).css({'opacity': 1, "z-index": 3});
}

function clearAll() {
  $("polyline").css("stroke", "none");
  $(".car-text-container").css({'opacity': 0, "z-index": 1});
}

function autoInitDraw() {
  const maxId = $(".point").length;
  var lastId;
  autotimer = setInterval(function () {
    if (lastId === undefined) {
      lastId = 0;
    } else {
      lastId++;
    }
    if (lastId >= maxId) {
      lastId = 0;
    }
    id = lastId;
    startDrawingPath();
    setTimeout(clearAll, 2000);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
  init();
  autoInitDraw();
});

window.onresize = function (event) {
  clearAll();
  init();
};

function init() {
  var points = $('.point');
  points.click(function () {
    clearAll();
    id = $(this).data('id');
    startDrawingPath();
  });
  points.mouseover(function () {
    clearInterval(autotimer);
    clearAll();
    id = $(this).data('id');
    startDrawingPath();
  });
  points.mouseout(function () {
    clearAll();
    autoInitDraw();
  });

  $(".js-car-info").each(function () {
    var point = $(this).find(".point");
    var text = $(this).find(".car-text-container");
    var breaks;

    if (point.position().left > text.position().left) {
      breaks = [
        {
          x: point.position().left + point.outerWidth() / 2,
          y: point.position().top + point.outerHeight() / 2,
        },
        {
          x: ((point.position().left + point.outerWidth() / 2) + (text.position().left + text.width())) / 2,
          y: text.position().top + text.outerHeight() / 2,
        },
        {
          x: text.position().left + text.outerWidth(),
          y: text.position().top + text.outerHeight() / 2
        }
      ];
    } else {
      breaks = [
        {
          x: point.position().left + point.outerWidth() / 2,
          y: point.position().top + point.outerHeight() / 2,
        },
        {
          x: ((point.position().left + point.outerWidth() / 2) + (text.position().left)) / 2,
          y: text.position().top + text.outerHeight() / 2,
        },
        {
          x: text.position().left,
          y: text.position().top + text.outerHeight() / 2
        }
      ];
    }

    var breaksLine = "";
    for (var break_item of breaks) {
      breaksLine += " " + break_item.x + "," + break_item.y;
    }

    $(this).find("polyline").attr('points', breaksLine);
  });

}

(function ($) {
  $(function () {



  });
})(jQuery);