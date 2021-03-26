(function ($) {
  $(function () {

    var canvas, ctx, canvContainer, outerDiv, canvasW = 1E3,
      canvasH = 560,
      friction = 0.96,
      numMovers = 180,
      movers = [],
      isMouseDown = false,
      mouseX = 0,
      mouseY = 0,
      mouseVX = 0,
      mouseVY = 0,
      prevMouseX = 0,
      prevMouseY = 0,
      quartCirc = Math.PI * 0.5;

    function init() {
      canvas = document.getElementById("mainCanvas");
      if (canvas.getContext) {
        setup();
        setInterval(run, 33);
        trace('interact with the mouse, occasionally click or hold down the mousebutton<br /><a href="liquid-particles.html">original version</a>')
      } else trace("Sorry, needs the latest version of Firefox, Chrome, Safari or Opera.")
    }

    function setup() {
      outerDiv = document.getElementById("outer");
      canvContainer = document.getElementById("canvasContainer");
      ctx = canvas.getContext("2d");
      for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$%&!?\u00a3\u00a5\u20ac\u2660\u2663\u2640\u2642\u2665\u2666\u266a\u266b\u00a3\u00a5\u20ac\u2660\u2663\u2640\u2642\u2665\u2666\u266a\u266b\u00a3\u00a5\u20ac\u2660\u2663\u2640\u2642\u2665\u2666\u266a\u266b\u00a3\u00a5\u20ac\u2660\u2663\u2640\u2642\u2665\u2666\u266a\u266b".split(""), i = numMovers; i--;) {
        var e = new Mover;
        e.x = Math.random() * canvasW;
        e.y = Math.random() * canvasH;
        e.vX = 60 - Math.random() * 120;
        e.vY = 60 - Math.random() * 120;
        e.size = 2;
        e.lett = b[i % b.length];
        movers[i] = e
      }
      document.onmousedown = onDocMouseDown;
      document.onmouseup = onDocMouseUp;
      document.onmousemove = onDocMouseMove
    }

    function run() {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(8,8,12,.65)";
      ctx.fillRect(0, 0, canvasW, canvasH);
      ctx.globalCompositeOperation = "lighter";
      mouseVX = mouseX - prevMouseX;
      mouseVY = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      for (var b = canvasW / 1.65, i = canvasW / 8, e = canvasW / 2, l = numMovers; l--;) {
        var f = movers[l],
          j = f.x,
          m = f.y,
          g = f.vX,
          h = f.vY,
          d = j - mouseX,
          a = m - mouseY,
          c = Math.sqrt(d * d + a * a);
        a = Math.atan2(a, d);
        d = Math.cos(a);
        a = Math.sin(a);
        if (isMouseDown) if (c < e) {
          var k = (1 - c / e) * 14;
          g += d * k + 0.5 - Math.random();
          h += a * k + 0.5 - Math.random()
        }
        if (c < b) {
          k = (1 - c / b) * canvasW * 0.0019;
          g -= d * k;
          h -= a * k
        }
        if (c < i) {
          c = (1 - c / i) * canvasW * 2.5E-4;
          g += mouseVX * c;
          h += mouseVY * c
        }
        g *= friction;
        h *= friction;
        c = (Math.abs(g) + Math.abs(h)) * 0.5 * 1.75;
        c = Math.min(c, 72);
        c = Math.max(c, 2);
        d = j + g;
        a = m + h;
        if (d > canvasW) {
          d = canvasW;
          g *= -1
        } else if (d < 0) {
          d = 0;
          g *= -1
        }
        if (a > canvasH) {
          a = canvasH;
          h *= -1
        } else if (a < 0) {
          a = 0;
          h *= -1
        }
        f.vX = g;
        f.vY = h;
        f.x = d;
        f.y = a;
        j = Math.atan2(a - m, d - j) + quartCirc;
        ctx.save();
        ctx.translate(d, a);
        ctx.rotate(j);
        ctx.fillStyle = f.color;
        ctx.font = c + "pt Arial";
        ctx.fillText(f.lett, 0, 0);
        ctx.restore()
      }
    }
    function onDocMouseMove(b) {
      b = b ? b : window.event;
      mouseX = b.clientX - outerDiv.offsetLeft - canvContainer.offsetLeft;
      mouseY = b.clientY - outerDiv.offsetTop - canvContainer.offsetTop
    }
    function onDocMouseDown() {
      isMouseDown = true;
      return false
    }
    function onDocMouseUp() {
      return isMouseDown = false
    }
    function Mover() {
      this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
      this.size = this.vY = this.vX = this.x = this.y = 0;
      this.lett = ""
    }

    function rect(b, i, e, l) {
      ctx.beginPath();
      ctx.rect(b, i, e, l);
      ctx.closePath();
      ctx.fill()
    }
    function trace(b) {
      document.getElementById("output").innerHTML = b
    }
    window.onload = init;

  });
})(jQuery);