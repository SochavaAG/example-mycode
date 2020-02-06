(function () {
  var _id = "";
  while (document.getElementById("timer" + _id))_id = _id + "0";
  document.write("<div id='timer" + _id + "' style='min-width:605px;height:87px;'></div>");
  var _t = document.createElement("script");
  _t.src = "https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/timer-flipchart-animate/js/timer.min.js";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      "view": [1, 1, 1, 1],
      "type": {"currentType": "1", "params": {"usertime": true, "tz": "3", "utc": 1583020800000}},
      "design": {
        "type": "plate",
        "params": {
          "round": "10",
          "background": "gradient",
          "background-color": ["#ff0000", "#000000"],
          "effect": "flipchart",
          "space": "2",
          "separator-margin": "20",
          "number-font-family": {
            "family": "Comfortaa",
            "link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "number-font-size": "60",
          "number-font-color": "#ffffff",
          "padding": "12",
          "separator-on": false,
          "separator-text": ":",
          "text-on": false,
          "text-font-family": {
            "family": "Comfortaa",
            "link": "<link href='https:fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
          },
          "text-font-size": "12",
          "text-font-color": "red"
        }
      },
      "designId": 3,
      "theme": "white",
      "width": 605,
      "height": 87
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);