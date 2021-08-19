(function ($) {
  $(function () {


    var a, b = document.createElement("canvas");
    b.width = 1;
    b.height = 1;
    a = [b, b.getContext("2d")];
    var b = a[0], c = a[1];

    if (!c || !b.toDataURL)return {winding: false, geometry: "", text: ""};

    c.rect(0, 0, 10, 10);
    c.rect(2, 2, 6, 6);
    a = !c.isPointInPath(5, 5, "evenodd");
    var d;
    b.width = 122;
    b.height = 110;
    c.globalCompositeOperation = "multiply";
    d = 0;

    for (var e = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; d < e.length; d++) {
      var f = e[d], g = f[1], h = f[2];
      c.fillStyle = f[0];
      c.beginPath();
      c.arc(g, h, 40, 0, 2 * Math.PI, true);
      c.closePath();
      c.fill()
    }

    c.fillStyle = "#f9c";
    c.arc(60, 60, 60, 0, 2 * Math.PI, true);
    c.arc(60, 60, 20, 0, 2 * Math.PI, true);
    c.fill("evenodd");
    d = b.toDataURL();
    b.width = 240;
    b.height = 60;
    c.textBaseline = "alphabetic";
    c.fillStyle = "#f60";
    c.fillRect(100, 1, 62, 20);
    c.fillStyle = "#069";
    c.font = '11pt "Times New Roman"';
    e = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835);
    c.fillText(e, 2, 15);
    c.fillStyle = "rgba(102, 204, 0, 0.2)";
    c.font = "18pt Arial";
    c.fillText(e, 4, 45);
    b = b.toDataURL();
    return {winding: a, geometry: d, text: b}


  });
})(jQuery);