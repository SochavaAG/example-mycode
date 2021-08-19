(function ($) {
  $(function () {


    window.addEventListener("load", (function () {
      !function () {
        if (!Modernizr.canvas)return;

        var e = document.getElementById("canvasOne");

        if (null == e)return;
        var t, l, o, r, i, c, u, d, s, f, h, v, m, p, g, y, x, b, w, E, $, M, L, S, k, A, T, j, q, C, P, V, O, Y, X, z, I = e.getContext("2d");

        function fnD() {
          if (++r >= o) {
            for (r = 0, P = 0; P < i; P++) {
              V = 2 * Math.random() * Math.PI;
              O = Math.acos(2 * Math.random() - 1);
              Y = 200 * Math.sin(O) * Math.cos(V);
              X = 200 * Math.sin(O) * Math.sin(V);
              z = 200 * Math.cos(O);

              var e = fnXYZ(Y, y + X, x + z, .002 * Y, .002 * X, .002 * z);

              e.attack = 50;
              e.hold = 50;
              e.decay = 100;
              e.initValue = 0;
              e.holdValue = d;
              e.lastValue = 0;
              e.stuckTime = 90 + 20 * Math.random();
              e.accelX = 0;
              e.accelY = L;
              e.accelZ = 0;
            }
          }

          p = (p + g) % (2 * Math.PI);
          A = Math.sin(p);
          T = Math.cos(p);
          n = document.getElementById("html").getAttribute("data-theme");
          I.fillStyle = "light" == n ? "#ffffff" : "dark" == n ? "#000000" : "#ffffff";
          I.fillRect(0, 0, t, l);

          var a = "light" == n ? "rgba(48,60,94," : "dark" == n ? "rgba(51,51,51," : "rgba(48,60,94,";

          for (I.fillStyle = a + C * e.alpha + ")", e = c.first; null != e;) {
            if (k = e.next, e.age++, e.age > e.stuckTime && (e.velX += e.accelX + E * (2 * Math.random() - 1), e.velY += e.accelY + $ * (2 * Math.random() - 1), e.velZ += e.accelZ + M * (2 * Math.random() - 1), e.x += e.velX, e.y += e.velY, e.z += e.velZ), j = T * e.x + A * (e.z - x), q = -A * e.x + T * (e.z - x) + x, f = 1.5 * s / (s - q), e.projX = j * f + h, e.projY = e.y * f + v, e.age < e.attack + e.hold + e.decay ? e.age < e.attack ? e.alpha = (e.holdValue - e.initValue) / e.attack * e.age + e.initValue : e.age < e.attack + e.hold ? e.alpha = e.holdValue : e.age < e.attack + e.hold + e.decay && (e.alpha = (e.lastValue - e.holdValue) / e.decay * (e.age - e.attack - e.hold) + e.holdValue) : e.dead = true, e.projX > t || e.projX < 0 || e.projY < 0 || e.projY > l || q > m || e.dead) {
              fnF(e);
            }else{
              C = (C = 1 - q / w) > 1 ? 1 : C < 0 ? 0 : C;

              var t = "light" == n ? "rgba(48,60,94," : "dark" == n ? "rgba(51,51,51," : "rgba(48,60,94,";

              I.fillStyle = t + C * e.alpha + ")", I.beginPath(), I.arc(e.projX, e.projY, f * b, 0, 2 * Math.PI, false), I.closePath(), I.fill()
            }

            e = k;
          }
        }

        function fnXYZ(e, t, n, a, l, o) {
          var r;

          return null != u.first ? null != (r = u.first).next ? (u.first = r.next, r.next.prev = null) : u.first = null : r = {}, null == c.first ? (c.first = r, r.prev = null, r.next = null) : (r.next = c.first, c.first.prev = r, c.first = r, r.prev = null), r.x = e, r.y = t, r.z = n, r.velX = a, r.velY = l, r.velZ = o, r.age = 0, r.dead = false, Math.random() < .5 ? r.right = true : r.right = false, r
        }

        function fnF(e) {
          c.first == e ? null != e.next ? (e.next.prev = null, c.first = e.next) : c.first = null : null == e.next ? e.prev.next = null : (e.prev.next = e.next, e.next.prev = e.prev), null == u.first ? (u.first = e, e.prev = null, e.next = null) : (e.next = u.first, u.first.prev = e, u.first = e, e.prev = null)
        }

        r = (o = 1) - 1;
        i = 8;
        n = document.getElementById("html").getAttribute("data-theme");
        S = "rgba(" + ("light" == n ? 248 : 0) + "," + ("light" == n ? 234 : 138) + "," + ("light" == n ? 28 : 211) + ",";

        console.log(S);

        d = 1;
        t = e.width;
        l = e.height;
        h = t / 2;
        v = l / 2;
        m = (s = 320) - 2;
        c = {};
        u = {};
        E = .1;
        $ = .1;
        M = .1;
        L = -0;
        b = .5;
        y = 0;
        x = -203;
        w = -750;
        g = 2 * Math.PI / 1200;
        p = 0;
        a = setInterval(fnD, 10 / 24);

      }();
    }));


  });
})(jQuery);