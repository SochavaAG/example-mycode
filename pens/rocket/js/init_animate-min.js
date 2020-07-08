var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initAnimate() {
  canvas = document.getElementById("canvas"), anim_container = document.getElementById("animation_container"), dom_overlay_container = document.getElementById("dom_overlay_container");
  var e = AdobeAn.getComposition(Object.keys(AdobeAn.compositions)[0]), t = e.getLibrary(), a = new createjs.LoadQueue(!1);
  a.addEventListener("fileload", function (t) {
    handleFileLoad(t, e)
  }), a.addEventListener("complete", function (t) {
    handleComplete(t, e)
  });
  t = e.getLibrary();
  a.loadManifest(t.properties.manifest)
}
function handleFileLoad(e, t) {
  var a = t.getImages();
  e && "image" == e.item.type && (a[e.item.id] = e.result)
}
function handleComplete(e, t) {
  var a = t.getLibrary(), n = t.getSpriteSheet(), r = e.target, o = a.ssMetadata;
  for (i = 0; i < o.length; i++)n[o[i].name] = new createjs.SpriteSheet({
    images: [r.getResult(o[i].name)],
    frames: o[i].frames
  });
  exportRoot = new a.banner_220x250, stage = new a.Stage(canvas), fnStartAnimation = function () {
    function e(e, t) {
      var n = a.properties.width / 2, i = a.properties.height / 2, r = (t + 528.25) / 528.25, o = new createjs.Matrix2D;
      o.a = 1 / r, o.d = 1 / r;
      var d = new createjs.Matrix2D;
      return d.tx = -n, d.ty = -i, (d = d.prependMatrix(o)).tx += n, d.ty += i, d
    }

    stage.addChild(exportRoot), createjs.Ticker.setFPS(a.properties.fps), createjs.Ticker.addEventListener("tick", stage), stage.addEventListener("tick", function (t) {
      var n = exportRoot.___camera___instance;
      void 0 !== n && void 0 !== n.pinToObject && (n.x = n.pinToObject.x + n.pinToObject.pinOffsetX, n.y = n.pinToObject.y + n.pinToObject.pinOffsetY, void 0 !== n.pinToObject.parent && void 0 !== n.pinToObject.parent.depth && (n.depth = n.pinToObject.parent.depth + n.pinToObject.pinOffsetZ));
      !function t(n) {
        var i = n.___camera___instance;
        var r = {x: 0, y: 0};
        if (n === exportRoot) {
          var o = {x: a.properties.width / 2, y: a.properties.height / 2};
          r.x = o.x, r.y = o.y
        }
        for (child in n.children) {
          var d = n.children[child];
          if (d != i && (t(d, i), void 0 !== d.layerDepth)) {
            d.currentFrame != d.parent.currentFrame && d.gotoAndPlay(d.parent.currentFrame);
            var p = new createjs.Matrix2D, s = new createjs.Matrix2D, c = d.layerDepth ? d.layerDepth : 0, h = 0;
            if (i && !d.isAttachedToCamera) {
              var m = i.getMatrix();
              m.tx -= r.x, m.ty -= r.y, (s = m.invert()).prependTransform(r.x, r.y, 1, 1, 0, 0, 0, 0, 0), s.appendTransform(-r.x, -r.y, 1, 1, 0, 0, 0, 0, 0), i.depth && (h = i.depth)
            }
            if (d.depth && (c = d.depth), (c -= h) < -528.25) p.a = 0, p.d = 0; else {
              if (d.layerDepth) {
                var l = e(n, d.layerDepth);
                l && (l.invert(), p.prependMatrix(l))
              }
              p.prependMatrix(s);
              var v = e(n, c);
              v && p.prependMatrix(v)
            }
            d.transformMatrix = p
          }
        }
      }(exportRoot)
    })
  }, function (e, t, n, i) {
    var r, o, d = 1;

    function p() {
      var p = a.properties.width, s = a.properties.height, c = window.innerWidth, h = window.innerHeight, m = window.devicePixelRatio || 1, l = c / p, v = h / s, g = 1;
      e && ("width" == t && r == c || "height" == t && o == h ? g = d : n ? 1 == i ? g = Math.min(l, v) : 2 == i && (g = Math.max(l, v)) : (c < p || h < s) && (g = Math.min(l, v))), canvas.width = p * m * g, canvas.height = s * m * g, canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = p * g + "px", canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = s * g + "px", stage.scaleX = m * g, stage.scaleY = m * g, r = c, o = h, d = g, stage.tickOnUpdate = !1, stage.update(), stage.tickOnUpdate = !0
    }

    window.addEventListener("resize", p), p()
  }(!1, "both", !1, 1), AdobeAn.compositionLoaded(a.properties.id), fnStartAnimation()
}
initAnimate();