(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
  6489: function (e, t) {
    "use strict";
    /*!
     * cookie
     * Copyright(c) 2012-2014 Roman Shtylman
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */
    t.Q = function (e, t) {
      if ("string" != typeof e)throw TypeError("argument str must be a string");
      for (var n = {}, i = e.split(";"), o = (t || {}).decode || r, a = 0; a < i.length; a++) {
        var s = i[a], u = s.indexOf("=");
        if (!(u < 0)) {
          var c = s.substring(0, u).trim();
          if (void 0 == n[c]) {
            var l = s.substring(u + 1, s.length).trim();
            '"' === l[0] && (l = l.slice(1, -1)), n[c] = function (e, t) {
              try {
                return t(e)
              } catch (r) {
                return e
              }
            }(l, o)
          }
        }
      }
      return n
    }, t.q = function (e, t, r) {
      var o = r || {}, a = o.encode || n;
      if ("function" != typeof a)throw TypeError("option encode is invalid");
      if (!i.test(e))throw TypeError("argument name is invalid");
      var s = a(t);
      if (s && !i.test(s))throw TypeError("argument val is invalid");
      var u = e + "=" + s;
      if (null != o.maxAge) {
        var c = o.maxAge - 0;
        if (isNaN(c) || !isFinite(c))throw TypeError("option maxAge is invalid");
        u += "; Max-Age=" + Math.floor(c)
      }
      if (o.domain) {
        if (!i.test(o.domain))throw TypeError("option domain is invalid");
        u += "; Domain=" + o.domain
      }
      if (o.path) {
        if (!i.test(o.path))throw TypeError("option path is invalid");
        u += "; Path=" + o.path
      }
      if (o.expires) {
        if ("function" != typeof o.expires.toUTCString)throw TypeError("option expires is invalid");
        u += "; Expires=" + o.expires.toUTCString()
      }
      if (o.httpOnly && (u += "; HttpOnly"), o.secure && (u += "; Secure"), o.sameSite)switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
        case!0:
        case"strict":
          u += "; SameSite=Strict";
          break;
        case"lax":
          u += "; SameSite=Lax";
          break;
        case"none":
          u += "; SameSite=None";
          break;
        default:
          throw TypeError("option sameSite is invalid")
      }
      return u
    };
    var r = decodeURIComponent, n = encodeURIComponent, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  }, 3454: function (e, t, r) {
    "use strict";
    var n, i;
    e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(7663)
  }, 6840: function (e, t, r) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
      return r(604)
    }])
  }, 227: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getDomainLocale = function (e, t, n, i) {
      {
        let o = r(2554).normalizeLocalePath, a = r(4643).detectDomainLocale, s = t || o(e, n).detectedLocale, u = a(i, void 0, s);
        if (u) {
          let c = "http".concat(u.http ? "" : "s", "://"), l = s === u.defaultLocale ? "" : "/".concat(s);
          return "".concat(c).concat(u.domain).concat("").concat(l).concat(e)
        }
        return !1
      }
    }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
  }, 9749: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var n = r(6495).Z, i = r(2648).Z, o = r(1598).Z, a = r(7273).Z, s = o(r(7294)), u = i(r(3121)), c = r(2675), l = r(139), f = r(8730);
    r(7238);
    var p = i(r(9824));
    let h = {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      path: "/_next/image",
      loader: "default",
      dangerouslyAllowSVG: !1,
      unoptimized: !1
    };

    function d(e) {
      return void 0 !== e.default
    }

    function v(e) {
      return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function y(e, t, r, i, o) {
      if (!e || e["data-loaded-src"] === t)return;
      e["data-loaded-src"] = t;
      let a = "decode" in e ? e.decode() : Promise.resolve();
      a.catch(() = > {}
    ).
      then(() = > {if(e.parentNode
    )
      {
        if (null == r ? void 0 : r.current) {
          let t = new Event("load");
          Object.defineProperty(t, "target", {writable: !1, value: e});
          let o = !1, a = !1;
          r.current(n({}, t, {
              nativeEvent: t,
              currentTarget: e,
              target: e,
              isDefaultPrevented: () = > o, isPropagationStopped
        :
          () =
        >
          a, persist()
          {
          }
        ,
          preventDefault()
          {
            o = !0, t.preventDefault()
          }
        ,
          stopPropagation()
          {
            a = !0, t.stopPropagation()
          }
        }))
        }
        (null == i ? void 0 : i.current) && i.current(e)
      }
    })
    }

    let m = s.forwardRef((e, t) = > {
        var{
          imgAttributes: r,
          heightInt: i,
          widthInt: o,
          qualityInt: u,
          className: c,
          imgStyle: l,
          blurStyle: f,
          isLazy: p,
          fill: h,
          placeholder: d,
          loading: v,
          srcString: m,
          config: g,
          unoptimized: b,
          loader: _,
          onLoadRef: w,
          onLoadingCompleteRef: O,
          onLoad: E,
          onError: k
        } = e,
        S=a(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "onLoad", "onError"]);
    return v = p ? "lazy" : v, s.default.createElement(s.default.Fragment, null, s.default.createElement("img", Object.assign({}, S, r, {
        width: o,
        height: i,
        decoding: "async",
        "data-nimg": h ? "fill" : "1",
        className: c,
        loading: v,
        style: n({}, l, f),
        ref: s.useCallback(e = > {t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
        e && (k && (e.src = e.src), e.complete && y(e, m, w, O, b))
  },
    [m, w, O, k, b, t]
    ),
    onLoad(e)
    {
      let t = e.currentTarget;
      y(t, m, w, O, b)
    }
    ,
    onError(e)
    {
      let {style:t}=e.currentTarget;
      "transparent" === t.color && (t.color = ""), "blur" === d && t.backgroundImage && (t.backgroundSize = "", t.backgroundPosition = "", t.backgroundRepeat = "", t.backgroundImage = ""), k && k(e)
    }
  })))
  }),
    g = s.forwardRef((e, t) = > {let r, i;
    var o, {src:y, sizes:g, unoptimized:b = !1, priority:_ = !1, loading:w, className:O, quality:E, width:k, height:S, fill:T, style:D, onLoad:x, onLoadingComplete:j, placeholder:I = "empty", blurDataURL:P, layout:N, objectFit:C, objectPosition:F, lazyBoundary:R, lazyRoot:q}=e, M = a(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
    let V = s.useContext(f.ImageConfigContext), A = s.useMemo(() = > {
        let e = h || V || l.imageConfigDefault,
        t=[...e.deviceSizes,...e.imageSizes
    ].
    sort((e, t) = > e - t
    ),
    r = e.deviceSizes.sort((e, t) = > e - t
    )
    ;
    return n({}, e, {allSizes: t, deviceSizes: r})
  },
    [V]
    ),
    Q = M, L = Q.loader || p.default;
    if (delete Q.loader, "__next_img_default" in L) {
      if ("custom" === A.loader)throw Error('Image with src "'.concat(y, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
    } else {
      let G = L;
      L = e =
    >
      {
        let {config:t}=e, r = a(e, ["config"]);
        return G(r)
      }
    }
    if (N) {
      "fill" === N && (T = !0);
      let z = {intrinsic: {maxWidth: "100%", height: "auto"}, responsive: {width: "100%", height: "auto"}}[N];
      z && (D = n({}, D, z));
      let B = {responsive: "100vw", fill: "100vw"}[N];
      B && !g && (g = B)
    }
    let U = "", W = v(k), J = v(S);
    if ("object" == typeof(o = y) && (d(o) || void 0 !== o.src)) {
      let Y = d(y) ? y.default : y;
      if (!Y.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));
      if (!Y.height || !Y.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)));
      if (r = Y.blurWidth, i = Y.blurHeight, P = P || Y.blurDataURL, U = Y.src, !T) {
        if (W || J) {
          if (W && !J) {
            let H = W / Y.width;
            J = Math.round(Y.height * H)
          } else if (!W && J) {
            let K = J / Y.height;
            W = Math.round(Y.width * K)
          }
        } else W = Y.width, J = Y.height
      }
    }
    let Z = !_ && ("lazy" === w || void 0 === w);
    ((y = "string" == typeof y ? y : U).startsWith("data:") || y.startsWith("blob:")) && (b = !0, Z = !1), A.unoptimized && (b = !0);
    let X = v(E), $ = Object.assign(T ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: C,
        objectPosition: F
      } : {}, {color: "transparent"}, D), ee = "blur" === I && P ? {
        backgroundSize: $.objectFit || "cover",
        backgroundPosition: $.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({
          widthInt: W,
          heightInt: J,
          blurWidth: r,
          blurHeight: i,
          blurDataURL: P
        }), '")')
      } : {}, et = function (e) {
      let {config:t, src:r, unoptimized:n, width:i, quality:o, sizes:a, loader:s}=e;
      if (n)return {src: r, srcSet: void 0, sizes: void 0};
      let {widths:u, kind:c}=function (e, t, r) {
        let {deviceSizes:n, allSizes:i}=e;
        if (r) {
          let o = /(^|\s)(1?\d?\d)vw/g, a = [];
          for (let s; s = o.exec(r); s)a.push(parseInt(s[2]));
          if (a.length) {
            let u = .01 * Math.min(...a
          )
            ;
            return {widths: i.filter(e = > e >= n[0] * u
          ),
            kind:"w"
          }
          }
          return {widths: i, kind: "w"}
        }
        if ("number" != typeof t)return {widths: n, kind: "w"};
        let c = [...new
        Set([t, 2 * t].map(e = > i.find(t = > t >= e) || i[i.length - 1]
        ))]
        ;
        return {widths: c, kind: "x"}
      }(t, i, a), l = u.length - 1;
      return {
        sizes: a || "w" !== c ? a : "100vw",
        srcSet: u.map((e, n) = > "".concat(s({
          config: t,
          src: r,
          quality: o,
          width: e
        }), " ").concat("w" === c ? e : n + 1).concat(c)
      ).
      join(", "), src
      :
      s({config: t, src: r, quality: o, width: u[l]})
    }
    }({
      config: A,
      src: y,
      unoptimized: b,
      width: W,
      quality: X,
      sizes: g,
      loader: L
    }), er = y, en = {imageSrcSet: et.srcSet, imageSizes: et.sizes, crossOrigin: Q.crossOrigin}, ei = s.useRef(x);
    s.useEffect(() = > {ei.current = x
  },
    [x]
    )
    ;
    let eo = s.useRef(j);
    s.useEffect(() = > {eo.current = j
  },
    [j]
    )
    ;
    let ea = n({
      isLazy: Z,
      imgAttributes: et,
      heightInt: J,
      widthInt: W,
      qualityInt: X,
      className: O,
      imgStyle: $,
      blurStyle: ee,
      loading: w,
      config: A,
      fill: T,
      unoptimized: b,
      placeholder: I,
      loader: L,
      srcString: er,
      onLoadRef: ei,
      onLoadingCompleteRef: eo
    }, Q);
    return s.default.createElement(s.default.Fragment, null, s.default.createElement(m, Object.assign({}, ea, {ref: t})), _ ? s.default.createElement(u.default, null, s.default.createElement("link", Object.assign({
        key: "__nimg-" + et.src + et.srcSet + et.sizes,
        rel: "preload",
        as: "image",
        href: et.srcSet ? void 0 : et.src
      }, en))) : null)
  })
    ;
    t.default = g, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
  }, 1551: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
    var n = r(2648).Z, i = r(7273).Z, o = n(r(7294)), a = r(1003), s = r(7795), u = r(4465), c = r(2692), l = r(8245), f = r(9246), p = r(227), h = r(3468);
    let d = new Set;

    function v(e, t, r, n) {
      if (a.isLocalURL(t)) {
        if (!n.bypassPrefetchedCheck) {
          let i = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0, o = t + "%" + r + "%" + i;
          if (d.has(o))return;
          d.add(o)
        }
        Promise.resolve(e.prefetch(t, r, n)).catch(e = > {}
      )
      }
    }

    function y(e) {
      return "string" == typeof e ? e : s.formatUrl(e)
    }

    let m = o.default.forwardRef(function (e, t) {
      let r, n;
      let {href:s, as:d, children:m, prefetch:g, passHref:b, replace:_, shallow:w, scroll:O, locale:E, onClick:k, onMouseEnter:S, onTouchStart:T, legacyBehavior:D = !1}=e, x = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
      r = m, D && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
      let j = !1 !== g, I = o.default.useContext(c.RouterContext), P = o.default.useContext(l.AppRouterContext), N = null != I ? I : P, C = !I, {href:F, as:R}=o.default.useMemo(() = > {if(
      !I
      )
      {
        let e = y(s);
        return {href: e, as: d ? y(d) : e}
      }
      let [t, r]=a.resolveHref(I, s, !0);
      return {href: t, as: d ? a.resolveHref(I, d) : r || t}
    },
      [I, s, d]
      ),
      q = o.default.useRef(F), M = o.default.useRef(R);
      D && (n = o.default.Children.only(r));
      let V = D ? n && "object" == typeof n && n.ref : t, [A, Q, L]=f.useIntersection({rootMargin: "200px"}), G = o.default.useCallback(e = > {(M.current !== R || q.current !== F) && (L(), M.current = R, q.current = F), A
      (e), V && ("function" == typeof V ? V(e) : "object" == typeof V && (V.current = e))
    },
      [R, V, F, L, A]
      )
      ;
      o.default.useEffect(() = > {N && Q && j && v(N, F, R, {locale: E})
    },
      [R, F, Q, E, j, null == I ? void 0 : I.locale, N]
      )
      ;
      let z = {
        ref: G, onClick(e){
          D || "function" != typeof k || k(e), D && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), N && !e.defaultPrevented && function (e, t, r, n, i, s, u, c, l, f) {
            let {nodeName:p}=e.currentTarget, h = "A" === p.toUpperCase();
            if (h && (function (e) {
                let {target:t}=e.currentTarget;
                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
              }(e) || !a.isLocalURL(r)))return;
            e.preventDefault();
            let d = () =
            >
            {
              "beforePopState" in t ? t[i ? "replace" : "push"](r, n, {
                  shallow: s,
                  locale: c,
                  scroll: u
                }) : t[i ? "replace" : "push"](n || r, {forceOptimisticNavigation: !f})
            }
            ;
            l ? o.default.startTransition(d) : d()
          }(e, N, F, R, _, w, O, E, C, j)
        }, onMouseEnter(e){
          D || "function" != typeof S || S(e), D && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), N && (j || !C) && v(N, F, R, {
            locale: E,
            priority: !0,
            bypassPrefetchedCheck: !0
          })
        }, onTouchStart(e){
          D || "function" != typeof T || T(e), D && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), N && (j || !C) && v(N, F, R, {
            locale: E,
            priority: !0,
            bypassPrefetchedCheck: !0
          })
        }
      };
      if (!D || b || "a" === n.type && !("href" in n.props)) {
        let B = void 0 !== E ? E : null == I ? void 0 : I.locale, U = (null == I ? void 0 : I.isLocaleDomain) && p.getDomainLocale(R, B, null == I ? void 0 : I.locales, null == I ? void 0 : I.domainLocales);
        z.href = U || h.addBasePath(u.addLocale(R, B, null == I ? void 0 : I.defaultLocale))
      }
      return D ? o.default.cloneElement(n, z) : o.default.createElement("a", Object.assign({}, x, z), r)
    });
    t.default = m, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
  }, 2554: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.normalizeLocalePath = void 0;
    let n = (e, t) =
    >
    r(4769).normalizeLocalePath(e, t);
    t.normalizeLocalePath = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
  }, 9246: function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.useIntersection = function (e) {
      let {rootRef:t, rootMargin:r, disabled:u}=e, c = u || !o, [l, f]=n.useState(!1), [p, h]=n.useState(null);
      n.useEffect(() = > {
        if(o){
          if (!c && !l && p && p.tagName) {
            let e = function (e, t, r) {
                let {id:n, observer:i, elements:o}=function (e) {
                  let t;
                  let r = {
                    root: e.root || null,
                    margin: e.rootMargin || ""
                  }, n = s.find(e = > e.root === r.root && e.margin === r.margin
                  )
                  ;
                  if (n && (t = a.get(n)))return t;
                  let i = new Map, o = new IntersectionObserver(e = > {e.forEach(e = > {
                      let t = i.get(e.target),
                      r=e.isIntersecting || e.intersectionRatio > 0;
                  t && r && t(r)
                })
                },
                  e
                  )
                  ;
                  return t = {id: r, observer: o, elements: i}, s.push(r), a.set(r, t), t
                }(r);
                return o.set(e, t), i.observe(e), function () {
                  if (o.delete(e), i.unobserve(e), 0 === o.size) {
                    i.disconnect(), a.delete(n);
                    let t = s.findIndex(e = > e.root === n.root && e.margin === n.margin
                  )
                    ;
                    t > -1 && s.splice(t, 1)
                  }
                }
              }(p, e = > e && f(e), {root:null
          ==
            t ? void 0 : t.current, rootMargin
          :
            r
          })
            ;
            return e
          }
        }else if(
      !l
      )
      {
        let n = i.requestIdleCallback(() = > f(!0)
      )
        ;
        return () =
      >
        i.cancelIdleCallback(n)
      }
    },
      [p, c, r, t, l]
      )
      ;
      let d = n.useCallback(() = > {f(
      !1
      )
    },
      []
      )
      ;
      return [h, l, d]
    };
    var n = r(7294), i = r(4686);
    let o = "function" == typeof IntersectionObserver, a = new Map, s = [];
    ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
  }, 2675: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getImageBlurSvg = function (e) {
      let {widthInt:t, heightInt:r, blurWidth:n, blurHeight:i, blurDataURL:o}=e, a = n || t, s = i || r, u = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
      return a && s ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(s, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n && i ? "1" : "20", "'/%3E").concat(u, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o, "'/%3E%3C/svg%3E")
    }
  }, 9824: function (e, t) {
    "use strict";
    function r(e) {
      let {config:t, src:r, width:n, quality:i}=e;
      return r.endsWith(".svg") && !t.dangerouslyAllowSVG ? r : "".concat(t.path, "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(i || 75)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, r.__next_img_default = !0, t.default = r
  }, 604: function (e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
      default: function () {
        return k
      }
    });
    var n = r(5893), i = r(7294), o = r(9008), a = r.n(o), s = r(3917), u = r(320).aS ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__", c = function (e) {
      var t, r = e.client, n = e.children, o = ((t = i.createContext[u]) || (Object.defineProperty(i.createContext, u, {
        value: t = i.createContext({}),
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), t.displayName = "ApolloContext"), t);
      return i.createElement(o.Consumer, null, function (e) {
        return void 0 === e && (e = {}), r && e.client !== r && (e = Object.assign({}, e, {client: r})), __DEV__ ? (0, s.kG)(e.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : (0, s.kG)(e.client, 28), i.createElement(o.Provider, {value: e}, n)
      })
    }, l = r(1664), f = r.n(l), p = r(5675), h = r.n(p), d = r(6489);

    function v(e, t) {
      void 0 === t && (t = {});
      var r, n = e && "j" === e[0] && ":" === e[1] ? e.substr(2) : e;
      if (void 0 === (r = t.doNotParse) && (r = !n || "{" !== n[0] && "[" !== n[0] && '"' !== n[0]), !r)try {
        return JSON.parse(n)
      } catch (i) {
      }
      return e
    }

    var y = function () {
      return (y = Object.assign || function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)for (var i in t = arguments[r])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
    }, m = function () {
      function e(e, t) {
        var r = this;
        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = "string" == typeof e ? d.Q(e, t) : "object" == typeof e && null !== e ? e : {}, new Promise(function () {
          r.HAS_DOCUMENT_COOKIE = "object" == typeof document && "string" == typeof document.cookie
        }).catch(function () {
        })
      }

      return e.prototype._updateBrowserValues = function (e) {
        this.HAS_DOCUMENT_COOKIE && (this.cookies = d.Q(document.cookie, e))
      }, e.prototype._emitChange = function (e) {
        for (var t = 0; t < this.changeListeners.length; ++t)this.changeListeners[t](e)
      }, e.prototype.get = function (e, t, r) {
        return void 0 === t && (t = {}), this._updateBrowserValues(r), v(this.cookies[e], t)
      }, e.prototype.getAll = function (e, t) {
        void 0 === e && (e = {}), this._updateBrowserValues(t);
        var r = {};
        for (var n in this.cookies)r[n] = v(this.cookies[n], e);
        return r
      }, e.prototype.set = function (e, t, r) {
        var n;
        "object" == typeof t && (t = JSON.stringify(t)), this.cookies = y(y({}, this.cookies), ((n = {})[e] = t, n)), this.HAS_DOCUMENT_COOKIE && (document.cookie = d.q(e, t, r)), this._emitChange({
          name: e,
          value: t,
          options: r
        })
      }, e.prototype.remove = function (e, t) {
        var r = t = y(y({}, t), {expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0});
        this.cookies = y({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = d.q(e, "", r)), this._emitChange({
          name: e,
          value: void 0,
          options: t
        })
      }, e.prototype.addChangeListener = function (e) {
        this.changeListeners.push(e)
      }, e.prototype.removeChangeListener = function (e) {
        var t = this.changeListeners.indexOf(e);
        t >= 0 && this.changeListeners.splice(t, 1)
      }, e
    }(), g = r(5732);
    let b = () =
    >
    {
      let e = (0, i.useMemo)(() = > new m, []
    ),
      [t, r] = (0, i.useState)("");
      (0, i.useEffect)(() = > {e.get("accept_cookies") || r("show")
    },
      [e]
    )
      ;
      let o = t =
    >
      {
        t.preventDefault(), t.stopPropagation(), e.set("accept_cookies", !0, {expires: new Date(new Date().getTime() + 158112e5)}), r("")
      }
      ;
      return (0, n.jsxs)("div", {
        className: "coockies-alert ".concat(t),
        children: [(0, n.jsx)(h(), {
          src: "/images/coockie-icon.svg",
          alt: "",
          width: "64",
          height: "65"
        }), (0, n.jsxs)("p", {
          className: "coockies-alert__text",
          children: ["We use cookies. If you continue using our site, you confirm that you agree to our\xa0", (0, n.jsx)(f(), {
            href: g.V.PrivacyPolicy,
            children: (0, n.jsx)("span", {className: "main-link", children: "Privacy Policy"})
          }), "."]
        }), (0, n.jsx)("button", {
            className: "def-btn def-btn--coockie js-coockie-accept",
            type: "button",
            onClick: e = > o(e), children
    :
      "accept"
    })]
    })
    }
    ;
    var _ = (0, i.memo)(b);
    r(8339);
    let w = () => {
      let e = ["scroll", "load", "resize", "touchmove"],
        t = "js-scrolled",
        r = (e, r) => {
          let n = window.innerHeight - r,
              i = document.documentElement.scrollTop;

          Array.from(e).forEach(e => {if(e.classList.contains(t))

          return;

          let {height:r, top:o} = e.getBoundingClientRect(),
              a = o + window.scrollY;

          a + r >= i && a <= i + n && e.classList.add(t)
      })
      };
      (0, i.useEffect)(() => {
        let t = document.querySelectorAll("[data-scrolling=true]"),
        n=window.innerHeight / 100 * 10;
      return e.forEach(e => {window.addEventListener(e, r.bind(void 0, t, n))
    }),
      () => {
        e.forEach(e => {window.removeEventListener(e, r.bind(void 0, t, n))
      })
      }
    })
    };
    var O = r(6388);
    let E = e => {
      let {Component:t, pageProps:r}=e;
      return w(), (0, n.jsxs)(c, {
        client: O.l,
        children: [(0, n.jsxs)(a(), {
          children: [(0, n.jsx)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          }), (0, n.jsx)("meta", {name: "theme-color", content: "#fedd00"})]
        }), (0, n.jsx)(t, {...r
      }), (0, n.jsx)(_, {})
    ]
    })
    }
    ;
    var k = (0, i.memo)(E)
  }, 5732: function (e, t, r) {
    "use strict";
    var n, i;
    r.d(t, {
      V: function () {
        return n
      }
    }), (i = n || (n = {})).Home = "/", i.HowWeWorks = "/approach", i.ForBusiness = "/for-business", i.ForStartup = "/for-startup", i.PortfolioCms = "/works", i.AboutUs = "/about-us", i.Blog = "/blog", i.Career = "/career", i.Contacts = "/contacts", i.NotFound = "/404", i.CookiesPolicy = "/cookies-policy", i.PrivacyPolicy = "/privacy-policy", i.TermsOfUse = "/terms-of-use", i.EnterPriceMobileDevelopment = "/enterprise-mobile-development", i.CustomCrm = "/custom-crm", i.SoftwareDevelopment = "/software-development", i.DedicatedTeam = "/dedicated-team", i.LiveStreamingAppDevelopment = "/live-streaming-app-development", i.MachineLearning = "/machine-learning", i.MobileApplicationDevelopment = "/mobile-application-development", i.IosApplicationDevelopment = "/ios-application-development", i.AndroidApplicationDevelopment = "/android-application-development", i.OurTechStack = "/our-tech-stack", i.BusinessManagementSystem = "/business-management-system", i.Flutter = "/flutter-app-development", i.ShoppingMall = "/shopping-mall-app"
  }, 6388: function (e, t, r) {
    "use strict";
    r.d(t, {
      l: function () {
        return nr
      }
    });
    var n, i, o, a, s, u, c, l, f = r(655), p = r(3917), h = r(7826), d = r(5821), v = r(2380), y = r(7359);
    let m = Object.freeze({});

    function g(e, t, r=v.h8) {
      let n, i, o;
      let a = new Map;
      for (let s of Object.values(y.h))a.set(s, function (e, t) {
        let r = e[t];
        return "object" == typeof r ? r : "function" == typeof r ? {enter: r, leave: void 0} : {
              enter: e.enter,
              leave: e.leave
            }
      }(t, s));
      let u = Array.isArray(e), c = [e], l = -1, f = [], p = e, g = [], b = [];
      do {
        var _, w, O;
        let E;
        l++;
        let k = l === c.length, S = k && 0 !== f.length;
        if (k) {
          if (i = 0 === b.length ? void 0 : g[g.length - 1], p = o, o = b.pop(), S) {
            if (u) {
              p = p.slice();
              let T = 0;
              for (let [D, x]of f) {
                let j = D - T;
                null === x ? (p.splice(j, 1), T++) : p[j] = x
              }
            } else for (let [I, P]of(p = Object.defineProperties({}, Object.getOwnPropertyDescriptors(p)), f))p[I] = P
          }
          l = n.index, c = n.keys, f = n.edits, u = n.inArray, n = n.prev
        } else if (o) {
          if (null == (p = o[i = u ? l : c[l]]))continue;
          g.push(i)
        }
        if (!Array.isArray(p)) {
          (0, v.UG)(p) || (0, h.a)(!1, `Invalid AST Node: ${(0, d.X)(p)}.`);
          let N = k ? null === (_ = a.get(p.kind)) || void 0 === _ ? void 0 : _.leave : null === (w = a.get(p.kind)) || void 0 === w ? void 0 : w.enter;
          if ((E = null == N ? void 0 : N.call(t, p, i, o, g, b)) === m)break;
          if (!1 === E) {
            if (!k) {
              g.pop();
              continue
            }
          } else if (void 0 !== E && (f.push([i, E]), !k)) {
            if ((0, v.UG)(E)) p = E; else {
              g.pop();
              continue
            }
          }
        }
        void 0 === E && S && f.push([i, p]), k ? g.pop() : (n = {
            inArray: u,
            index: l,
            keys: c,
            edits: f,
            prev: n
          }, c = (u = Array.isArray(p)) ? p : null !== (O = r[p.kind]) && void 0 !== O ? O : [], l = -1, f = [], o && b.push(o), o = p)
      } while (void 0 !== n);
      return 0 !== f.length ? f[f.length - 1][1] : e
    }

    function b(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++)n[r] = e[r];
      return n
    }

    function _(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    function w(e, t, r) {
      return t && _(e.prototype, t), r && _(e, r), Object.defineProperty(e, "prototype", {writable: !1}), e
    }

    var O = function () {
      return "function" == typeof Symbol
    }, E = function (e) {
      return O() && Boolean(Symbol[e])
    }, k = function (e) {
      return E(e) ? Symbol[e] : "@@" + e
    };
    O() && !E("observable") && (Symbol.observable = Symbol("observable"));
    var S = k("iterator"), T = k("observable"), D = k("species");

    function x(e, t) {
      var r = e[t];
      if (null != r) {
        if ("function" != typeof r)throw TypeError(r + " is not a function");
        return r
      }
    }

    function j(e) {
      var t = e.constructor;
      return void 0 !== t && null === (t = t[D]) && (t = void 0), void 0 !== t ? t : V
    }

    function I(e) {
      I.log ? I.log(e) : setTimeout(function () {
          throw e
        })
    }

    function P(e) {
      Promise.resolve().then(function () {
        try {
          e()
        } catch (t) {
          I(t)
        }
      })
    }

    function N(e) {
      var t = e._cleanup;
      if (void 0 !== t) {
        if (e._cleanup = void 0, !t)return;
        try {
          if ("function" == typeof t) t(); else {
            var r = x(t, "unsubscribe");
            r && r.call(t)
          }
        } catch (n) {
          I(n)
        }
      }
    }

    function C(e) {
      e._observer = void 0, e._queue = void 0, e._state = "closed"
    }

    function F(e, t, r) {
      e._state = "running";
      var n = e._observer;
      try {
        var i = x(n, t);
        switch (t) {
          case"next":
            i && i.call(n, r);
            break;
          case"error":
            if (C(e), i) i.call(n, r); else throw r;
            break;
          case"complete":
            C(e), i && i.call(n)
        }
      } catch (o) {
        I(o)
      }
      "closed" === e._state ? N(e) : "running" === e._state && (e._state = "ready")
    }

    function R(e, t, r) {
      if ("closed" !== e._state) {
        if ("buffering" === e._state) {
          e._queue.push({type: t, value: r});
          return
        }
        if ("ready" !== e._state) {
          e._state = "buffering", e._queue = [{type: t, value: r}], P(function () {
            return function (e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (F(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          });
          return
        }
        F(e, t, r)
      }
    }

    var q = function () {
      function e(e, t) {
        this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
        var r = new M(this);
        try {
          this._cleanup = t.call(void 0, r)
        } catch (n) {
          r.error(n)
        }
        "initializing" === this._state && (this._state = "ready")
      }

      return e.prototype.unsubscribe = function () {
        "closed" !== this._state && (C(this), N(this))
      }, w(e, [{
        key: "closed", get: function () {
          return "closed" === this._state
        }
      }]), e
    }(), M = function () {
      function e(e) {
        this._subscription = e
      }

      var t = e.prototype;
      return t.next = function (e) {
        R(this._subscription, "next", e)
      }, t.error = function (e) {
        R(this._subscription, "error", e)
      }, t.complete = function () {
        R(this._subscription, "complete")
      }, w(e, [{
        key: "closed", get: function () {
          return "closed" === this._subscription._state
        }
      }]), e
    }(), V = function () {
      function e(t) {
        if (!(this instanceof e))throw TypeError("Observable cannot be called as a function");
        if ("function" != typeof t)throw TypeError("Observable initializer must be a function");
        this._subscriber = t
      }

      var t = e.prototype;
      return t.subscribe = function (e) {
        return ("object" != typeof e || null === e) && (e = {
          next: e,
          error: arguments[1],
          complete: arguments[2]
        }), new q(e, this._subscriber)
      }, t.forEach = function (e) {
        var t = this;
        return new Promise(function (r, n) {
          if ("function" != typeof e) {
            n(TypeError(e + " is not a function"));
            return
          }
          function i() {
            o.unsubscribe(), r()
          }

          var o = t.subscribe({
            next: function (t) {
              try {
                e(t, i)
              } catch (r) {
                n(r), o.unsubscribe()
              }
            }, error: n, complete: r
          })
        })
      }, t.map = function (e) {
        var t = this;
        if ("function" != typeof e)throw TypeError(e + " is not a function");
        return new (j(this))(function (r) {
          return t.subscribe({
            next: function (t) {
              try {
                t = e(t)
              } catch (n) {
                return r.error(n)
              }
              r.next(t)
            }, error: function (e) {
              r.error(e)
            }, complete: function () {
              r.complete()
            }
          })
        })
      }, t.filter = function (e) {
        var t = this;
        if ("function" != typeof e)throw TypeError(e + " is not a function");
        return new (j(this))(function (r) {
          return t.subscribe({
            next: function (t) {
              try {
                if (!e(t))return
              } catch (n) {
                return r.error(n)
              }
              r.next(t)
            }, error: function (e) {
              r.error(e)
            }, complete: function () {
              r.complete()
            }
          })
        })
      }, t.reduce = function (e) {
        var t = this;
        if ("function" != typeof e)throw TypeError(e + " is not a function");
        var r = j(this), n = arguments.length > 1, i = !1, o = arguments[1], a = o;
        return new r(function (r) {
          return t.subscribe({
            next: function (t) {
              var o = !i;
              if (i = !0, !o || n)try {
                a = e(a, t)
              } catch (s) {
                return r.error(s)
              } else a = t
            }, error: function (e) {
              r.error(e)
            }, complete: function () {
              if (!i && !n)return r.error(TypeError("Cannot reduce an empty sequence"));
              r.next(a), r.complete()
            }
          })
        })
      }, t.concat = function () {
        for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++)r[n] = arguments[n];
        var i = j(this);
        return new i(function (t) {
          var n, o = 0;
          return function e(a) {
            n = a.subscribe({
              next: function (e) {
                t.next(e)
              }, error: function (e) {
                t.error(e)
              }, complete: function () {
                o === r.length ? (n = void 0, t.complete()) : e(i.from(r[o++]))
              }
            })
          }(e), function () {
            n && (n.unsubscribe(), n = void 0)
          }
        })
      }, t.flatMap = function (e) {
        var t = this;
        if ("function" != typeof e)throw TypeError(e + " is not a function");
        var r = j(this);
        return new r(function (n) {
          var i = [], o = t.subscribe({
            next: function (t) {
              if (e)try {
                t = e(t)
              } catch (o) {
                return n.error(o)
              }
              var s = r.from(t).subscribe({
                next: function (e) {
                  n.next(e)
                }, error: function (e) {
                  n.error(e)
                }, complete: function () {
                  var e = i.indexOf(s);
                  e >= 0 && i.splice(e, 1), a()
                }
              });
              i.push(s)
            }, error: function (e) {
              n.error(e)
            }, complete: function () {
              a()
            }
          });

          function a() {
            o.closed && 0 === i.length && n.complete()
          }

          return function () {
            i.forEach(function (e) {
              return e.unsubscribe()
            }), o.unsubscribe()
          }
        })
      }, t[T] = function () {
        return this
      }, e.from = function (t) {
        var r = "function" == typeof this ? this : e;
        if (null == t)throw TypeError(t + " is not an object");
        var n = x(t, T);
        if (n) {
          var i = n.call(t);
          if (Object(i) !== i)throw TypeError(i + " is not an object");
          return i instanceof V && i.constructor === r ? i : new r(function (e) {
              return i.subscribe(e)
            })
        }
        if (E("iterator") && (n = x(t, S)))return new r(function (e) {
          P(function () {
            if (!e.closed) {
              for (var r, i = function (e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (r)return (r = r.call(e)).next.bind(r);
                if (Array.isArray(e) || (r = function (e, t) {
                    if (e) {
                      if ("string" == typeof e)return b(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r)return Array.from(e);
                      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e, t)
                    }
                  }(e))) {
                  r && (e = r);
                  var n = 0;
                  return function () {
                    return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                  }
                }
                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }(n.call(t)); !(r = i()).done;) {
                var o = r.value;
                if (e.next(o), e.closed)return
              }
              e.complete()
            }
          })
        });
        if (Array.isArray(t))return new r(function (e) {
          P(function () {
            if (!e.closed) {
              for (var r = 0; r < t.length; ++r)if (e.next(t[r]), e.closed)return;
              e.complete()
            }
          })
        });
        throw TypeError(t + " is not observable")
      }, e.of = function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)r[n] = arguments[n];
        return new ("function" == typeof this ? this : e)(function (e) {
          P(function () {
            if (!e.closed) {
              for (var t = 0; t < r.length; ++t)if (e.next(r[t]), e.closed)return;
              e.complete()
            }
          })
        })
      }, w(e, null, [{
        key: D, get: function () {
          return this
        }
      }]), e
    }();

    function A(e) {
      return null !== e && "object" == typeof e
    }

    function Q(e, t) {
      var r = t, n = [];
      return e.definitions.forEach(function (e) {
        if ("OperationDefinition" === e.kind)throw __DEV__ ? new p.ej("Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new p.ej(43);
        "FragmentDefinition" === e.kind && n.push(e)
      }), void 0 === r && (__DEV__ ? (0, p.kG)(1 === n.length, "Found ".concat(n.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : (0, p.kG)(1 === n.length, 44), r = n[0].name.value), (0, f.pi)((0, f.pi)({}, e), {
        definitions: (0, f.ev)([{
          kind: "OperationDefinition",
          operation: "query",
          selectionSet: {kind: "SelectionSet", selections: [{kind: "FragmentSpread", name: {kind: "Name", value: r}}]}
        }], e.definitions, !0)
      })
    }

    function L(e) {
      void 0 === e && (e = []);
      var t = {};
      return e.forEach(function (e) {
        t[e.name.value] = e
      }), t
    }

    function G(e, t) {
      switch (e.kind) {
        case"InlineFragment":
          return e;
        case"FragmentSpread":
          var r = e.name.value;
          if ("function" == typeof t)return t(r);
          var n = t && t[r];
          return __DEV__ ? (0, p.kG)(n, "No fragment named ".concat(r)) : (0, p.kG)(n, 45), n || null;
        default:
          return null
      }
    }

    function z(e) {
      return {__ref: String(e)}
    }

    function B(e) {
      return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
    }

    function U(e, t, r, n) {
      if ("IntValue" === r.kind || "FloatValue" === r.kind) e[t.value] = Number(r.value); else if ("BooleanValue" === r.kind || "StringValue" === r.kind) e[t.value] = r.value; else if ("ObjectValue" === r.kind) {
        var i = {};
        r.fields.map(function (e) {
          return U(i, e.name, e.value, n)
        }), e[t.value] = i
      } else if ("Variable" === r.kind) {
        var o = (n || {})[r.name.value];
        e[t.value] = o
      } else if ("ListValue" === r.kind) e[t.value] = r.values.map(function (e) {
        var r = {};
        return U(r, t, e, n), r[t.value]
      }); else if ("EnumValue" === r.kind) e[t.value] = r.value; else if ("NullValue" === r.kind) e[t.value] = null; else throw __DEV__ ? new p.ej('The inline argument "'.concat(t.value, '" of kind "').concat(r.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new p.ej(54)
    }

    O() && Object.defineProperty(V, Symbol("extensions"), {value: {symbol: T, hostReportError: I}, configurable: !0});
    var W = ["connection", "include", "skip", "client", "rest", "export"], J = Object.assign(function (e, t, r) {
      if (t && r && r.connection && r.connection.key) {
        if (!r.connection.filter || !(r.connection.filter.length > 0))return r.connection.key;
        var n = r.connection.filter ? r.connection.filter : [];
        n.sort();
        var i = {};
        return n.forEach(function (e) {
          i[e] = t[e]
        }), "".concat(r.connection.key, "(").concat(Y(i), ")")
      }
      var o = e;
      if (t) {
        var a = Y(t);
        o += "(".concat(a, ")")
      }
      return r && Object.keys(r).forEach(function (e) {
        -1 === W.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(Y(r[e]), ")") : o += "@".concat(e))
      }), o
    }, {
      setStringify: function (e) {
        var t = Y;
        return Y = e, t
      }
    }), Y = function (e) {
      return JSON.stringify(e, H)
    };

    function H(e, t) {
      return A(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce(function (e, r) {
        return e[r] = t[r], e
      }, {})), t
    }

    function K(e, t) {
      if (e.arguments && e.arguments.length) {
        var r = {};
        return e.arguments.forEach(function (e) {
          return U(r, e.name, e.value, t)
        }), r
      }
      return null
    }

    function Z(e) {
      return e.alias ? e.alias.value : e.name.value
    }

    function X(e, t, r) {
      if ("string" == typeof e.__typename)return e.__typename;
      for (var n = 0, i = t.selections; n < i.length; n++) {
        var o = i[n];
        if ($(o)) {
          if ("__typename" === o.name.value)return e[Z(o)]
        } else {
          var a = X(e, G(o, r).selectionSet, r);
          if ("string" == typeof a)return a
        }
      }
    }

    function $(e) {
      return "Field" === e.kind
    }

    function ee(e) {
      return "InlineFragment" === e.kind
    }

    function et(e) {
      __DEV__ ? (0, p.kG)(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : (0, p.kG)(e && "Document" === e.kind, 46);
      var t = e.definitions.filter(function (e) {
        return "FragmentDefinition" !== e.kind
      }).map(function (e) {
        if ("OperationDefinition" !== e.kind)throw __DEV__ ? new p.ej('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new p.ej(47);
        return e
      });
      return __DEV__ ? (0, p.kG)(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : (0, p.kG)(t.length <= 1, 48), e
    }

    function er(e) {
      return et(e), e.definitions.filter(function (e) {
        return "OperationDefinition" === e.kind
      })[0]
    }

    function en(e) {
      return e.definitions.filter(function (e) {
          return "OperationDefinition" === e.kind && e.name
        }).map(function (e) {
          return e.name.value
        })[0] || null
    }

    function ei(e) {
      return e.definitions.filter(function (e) {
        return "FragmentDefinition" === e.kind
      })
    }

    function eo(e) {
      var t = er(e);
      return __DEV__ ? (0, p.kG)(t && "query" === t.operation, "Must contain a query definition.") : (0, p.kG)(t && "query" === t.operation, 49), t
    }

    function ea(e) {
      et(e);
      for (var t, r = 0, n = e.definitions; r < n.length; r++) {
        var i = n[r];
        if ("OperationDefinition" === i.kind) {
          var o = i.operation;
          if ("query" === o || "mutation" === o || "subscription" === o)return i
        }
        "FragmentDefinition" !== i.kind || t || (t = i)
      }
      if (t)return t;
      throw __DEV__ ? new p.ej("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new p.ej(53)
    }

    function es(e) {
      var t = Object.create(null), r = e && e.variableDefinitions;
      return r && r.length && r.forEach(function (e) {
        e.defaultValue && U(t, e.variable.name, e.defaultValue)
      }), t
    }

    function eu(e, t) {
      return t ? t(e) : V.of()
    }

    function ec(e) {
      return "function" == typeof e ? new ep(e) : e
    }

    function el(e) {
      return e.request.length <= 1
    }

    var ef = function (e) {
      function t(t, r) {
        var n = e.call(this, t) || this;
        return n.link = r, n
      }

      return (0, f.ZT)(t, e), t
    }(Error), ep = function () {
      function e(e) {
        e && (this.request = e)
      }

      return e.empty = function () {
        return new e(function () {
          return V.of()
        })
      }, e.from = function (t) {
        return 0 === t.length ? e.empty() : t.map(ec).reduce(function (e, t) {
            return e.concat(t)
          })
      }, e.split = function (t, r, n) {
        var i = ec(r), o = ec(n || new e(eu));
        return new e(el(i) && el(o) ? function (e) {
            return t(e) ? i.request(e) || V.of() : o.request(e) || V.of()
          } : function (e, r) {
            return t(e) ? i.request(e, r) || V.of() : o.request(e, r) || V.of()
          })
      }, e.execute = function (e, t) {
        var r, n, i, o;
        return e.request((i = t.context, (n = {
            variables: (r = function (e) {
              for (var t = ["query", "operationName", "variables", "extensions", "context"], r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                if (0 > t.indexOf(i))throw __DEV__ ? new p.ej("illegal argument: ".concat(i)) : new p.ej(26)
              }
              return e
            }(t)).variables || {}, extensions: r.extensions || {}, operationName: r.operationName, query: r.query
          }).operationName || (n.operationName = "string" != typeof n.query ? en(n.query) || void 0 : ""), o = (0, f.pi)({}, i), Object.defineProperty(n, "setContext", {
            enumerable: !1,
            value: function (e) {
              o = "function" == typeof e ? (0, f.pi)((0, f.pi)({}, o), e(o)) : (0, f.pi)((0, f.pi)({}, o), e)
            }
          }), Object.defineProperty(n, "getContext", {
            enumerable: !1, value: function () {
              return (0, f.pi)({}, o)
            }
          }), n)) || V.of()
      }, e.concat = function (t, r) {
        var n = ec(t);
        if (el(n))return __DEV__ && p.kG.warn(new ef("You are calling concat on a terminating link, which will have no effect", n)), n;
        var i = ec(r);
        return new e(el(i) ? function (e) {
            return n.request(e, function (e) {
                return i.request(e) || V.of()
              }) || V.of()
          } : function (e, t) {
            return n.request(e, function (e) {
                return i.request(e, t) || V.of()
              }) || V.of()
          })
      }, e.prototype.split = function (t, r, n) {
        return this.concat(e.split(t, r, n || new e(eu)))
      }, e.prototype.concat = function (t) {
        return e.concat(this, t)
      }, e.prototype.request = function (e, t) {
        throw __DEV__ ? new p.ej("request is not implemented") : new p.ej(21)
      }, e.prototype.onError = function (e, t) {
        if (t && t.error)return t.error(e), !1;
        throw e
      }, e.prototype.setOnError = function (e) {
        return this.onError = e, this
      }, e
    }();

    function eh(e, t) {
      var r, n = e.directives;
      return !n || !n.length || (r = [], n && n.length && n.forEach(function (e) {
          var t;
          if (!("skip" !== (t = e.name.value) && "include" !== t)) {
            var n = e.arguments, i = e.name.value;
            __DEV__ ? (0, p.kG)(n && 1 === n.length, "Incorrect number of arguments for the @".concat(i, " directive.")) : (0, p.kG)(n && 1 === n.length, 40);
            var o = n[0];
            __DEV__ ? (0, p.kG)(o.name && "if" === o.name.value, "Invalid argument for the @".concat(i, " directive.")) : (0, p.kG)(o.name && "if" === o.name.value, 41);
            var a = o.value;
            __DEV__ ? (0, p.kG)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : (0, p.kG)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 42), r.push({
              directive: e,
              ifArgument: o
            })
          }
        }), r).every(function (e) {
          var r = e.directive, n = e.ifArgument, i = !1;
          return "Variable" === n.value.kind ? (i = t && t[n.value.name.value], __DEV__ ? (0, p.kG)(void 0 !== i, "Invalid variable referenced in @".concat(r.name.value, " directive.")) : (0, p.kG)(void 0 !== i, 39)) : i = n.value.value, "skip" === r.name.value ? !i : i
        })
    }

    function ed(e, t, r) {
      var n = new Set(e), i = n.size;
      return g(t, {
        Directive: function (e) {
          if (n.delete(e.name.value) && (!r || !n.size))return m
        }
      }), r ? !n.size : n.size < i
    }

    var ev = function (e, t) {
      var r;
      try {
        r = JSON.stringify(e)
      } catch (i) {
        var n = __DEV__ ? new p.ej("Network request failed. ".concat(t, " is not serializable: ").concat(i.message)) : new p.ej(23);
        throw n.parseError = i, n
      }
      return r
    }, ey = r(320);

    function em(e) {
      var t = {
        next: function () {
          return e.read()
        }
      };
      return ey.DN && (t[Symbol.asyncIterator] = function () {
        return this
      }), t
    }

    var eg = function (e, t, r) {
      var n = Error(r);
      throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
    }, eb = Object.prototype.hasOwnProperty;

    function e_(e, t) {
      e.status >= 300 && eg(e, function () {
        try {
          return JSON.parse(t)
        } catch (e) {
          return t
        }
      }(), "Response not successful: Received status code ".concat(e.status));
      try {
        return JSON.parse(t)
      } catch (n) {
        var r = n;
        throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = t, r
      }
    }

    function ew(e, t) {
      var r, n;
      "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && (null === (r = t.next) || void 0 === r || r.call(t, e.result)), null === (n = t.error) || void 0 === n || n.call(t, e))
    }

    var eO = function (e) {
      if (!e && "undefined" == typeof fetch)throw __DEV__ ? new p.ej("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new p.ej(22)
    }, eE = r(7392);
    let ek = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

    function eS(e) {
      return eT[e.charCodeAt(0)]
    }

    let eT = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];

    function eD(e) {
      return g(e, ex)
    }

    let ex = {Name: {leave: e = > e.value}, Variable
    :
    {
      leave:e =
    >
      "$" + e.name
    }
    ,
    Document:{
      leave:e =
    >
      ej(e.definitions, "\n\n")
    }
    ,
    OperationDefinition:{
      leave(e)
      {
        let t = eP("(", ej(e.variableDefinitions, ", "), ")"), r = ej([e.operation, ej([e.name, t]), ej(e.directives, " ")], " ");
        return ("query" === r ? "" : r + " ") + e.selectionSet
      }
    }
    ,
    VariableDefinition:{
      leave:({variable: e, type: t, defaultValue: r, directives: n}) =
    >
      e + ": " + t + eP(" = ", r) + eP(" ", ej(n, " "))
    }
    ,
    SelectionSet:{
      leave:({selections: e}) =
    >
      eI(e)
    }
    ,
    Field:{
      leave({alias: e, name: t, arguments: r, directives: n, selectionSet: i})
      {
        let o = eP("", e, ": ") + t, a = o + eP("(", ej(r, ", "), ")");
        return a.length > 80 && (a = o + eP("(\n", eN(ej(r, "\n")), "\n)")), ej([a, ej(n, " "), i], " ")
      }
    }
    ,
    Argument:{
      leave:({name: e, value: t}) =
    >
      e + ": " + t
    }
    ,
    FragmentSpread:{
      leave:({name: e, directives: t}) =
    >
      "..." + e + eP(" ", ej(t, " "))
    }
    ,
    InlineFragment:{
      leave:({typeCondition: e, directives: t, selectionSet: r}) =
    >
      ej(["...", eP("on ", e), ej(t, " "), r], " ")
    }
    ,
    FragmentDefinition:{
      leave:({name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i}) =
    >
      `fragment ${e}${eP("(", ej(r, ", "), ")")} on ${t} ${eP("", ej(n, " "), " ")}` + i
    }
    ,
    IntValue:{
      leave:({value: e}) =
    >
      e
    }
    ,
    FloatValue:{
      leave:({value: e}) =
    >
      e
    }
    ,
    StringValue:{
      leave:({value: e, block: t}) =
    >
      t ? (0, eE.LZ)(e) : `"${e.replace(ek, eS)}"`
    }
    ,
    BooleanValue:{
      leave:({value: e}) =
    >
      e ? "true" : "false"
    }
    ,
    NullValue:{
      leave:() =
    >
      "null"
    }
    ,
    EnumValue:{
      leave:({value: e}) =
    >
      e
    }
    ,
    ListValue:{
      leave:({values: e}) =
    >
      "[" + ej(e, ", ") + "]"
    }
    ,
    ObjectValue:{
      leave:({fields: e}) =
    >
      "{" + ej(e, ", ") + "}"
    }
    ,
    ObjectField:{
      leave:({name: e, value: t}) =
    >
      e + ": " + t
    }
    ,
    Directive:{
      leave:({name: e, arguments: t}) =
    >
      "@" + e + eP("(", ej(t, ", "), ")")
    }
    ,
    NamedType:{
      leave:({name: e}) =
    >
      e
    }
    ,
    ListType:{
      leave:({type: e}) =
    >
      "[" + e + "]"
    }
    ,
    NonNullType:{
      leave:({type: e}) =
    >
      e + "!"
    }
    ,
    SchemaDefinition:{
      leave:({description: e, directives: t, operationTypes: r}) =
    >
      eP("", e, "\n") + ej(["schema", ej(t, " "), eI(r)], " ")
    }
    ,
    OperationTypeDefinition:{
      leave:({operation: e, type: t}) =
    >
      e + ": " + t
    }
    ,
    ScalarTypeDefinition:{
      leave:({description: e, name: t, directives: r}) =
    >
      eP("", e, "\n") + ej(["scalar", t, ej(r, " ")], " ")
    }
    ,
    ObjectTypeDefinition:{
      leave:({description: e, name: t, interfaces: r, directives: n, fields: i}) =
    >
      eP("", e, "\n") + ej(["type", t, eP("implements ", ej(r, " & ")), ej(n, " "), eI(i)], " ")
    }
    ,
    FieldDefinition:{
      leave:({description: e, name: t, arguments: r, type: n, directives: i}) =
    >
      eP("", e, "\n") + t + (eC(r) ? eP("(\n", eN(ej(r, "\n")), "\n)") : eP("(", ej(r, ", "), ")")) + ": " + n + eP(" ", ej(i, " "))
    }
    ,
    InputValueDefinition:{
      leave:({description: e, name: t, type: r, defaultValue: n, directives: i}) =
    >
      eP("", e, "\n") + ej([t + ": " + r, eP("= ", n), ej(i, " ")], " ")
    }
    ,
    InterfaceTypeDefinition:{
      leave:({description: e, name: t, interfaces: r, directives: n, fields: i}) =
    >
      eP("", e, "\n") + ej(["interface", t, eP("implements ", ej(r, " & ")), ej(n, " "), eI(i)], " ")
    }
    ,
    UnionTypeDefinition:{
      leave:({description: e, name: t, directives: r, types: n}) =
    >
      eP("", e, "\n") + ej(["union", t, ej(r, " "), eP("= ", ej(n, " | "))], " ")
    }
    ,
    EnumTypeDefinition:{
      leave:({description: e, name: t, directives: r, values: n}) =
    >
      eP("", e, "\n") + ej(["enum", t, ej(r, " "), eI(n)], " ")
    }
    ,
    EnumValueDefinition:{
      leave:({description: e, name: t, directives: r}) =
    >
      eP("", e, "\n") + ej([t, ej(r, " ")], " ")
    }
    ,
    InputObjectTypeDefinition:{
      leave:({description: e, name: t, directives: r, fields: n}) =
    >
      eP("", e, "\n") + ej(["input", t, ej(r, " "), eI(n)], " ")
    }
    ,
    DirectiveDefinition:{
      leave:({description: e, name: t, arguments: r, repeatable: n, locations: i}) =
    >
      eP("", e, "\n") + "directive @" + t + (eC(r) ? eP("(\n", eN(ej(r, "\n")), "\n)") : eP("(", ej(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + ej(i, " | ")
    }
    ,
    SchemaExtension:{
      leave:({directives: e, operationTypes: t}) =
    >
      ej(["extend schema", ej(e, " "), eI(t)], " ")
    }
    ,
    ScalarTypeExtension:{
      leave:({name: e, directives: t}) =
    >
      ej(["extend scalar", e, ej(t, " ")], " ")
    }
    ,
    ObjectTypeExtension:{
      leave:({name: e, interfaces: t, directives: r, fields: n}) =
    >
      ej(["extend type", e, eP("implements ", ej(t, " & ")), ej(r, " "), eI(n)], " ")
    }
    ,
    InterfaceTypeExtension:{
      leave:({name: e, interfaces: t, directives: r, fields: n}) =
    >
      ej(["extend interface", e, eP("implements ", ej(t, " & ")), ej(r, " "), eI(n)], " ")
    }
    ,
    UnionTypeExtension:{
      leave:({name: e, directives: t, types: r}) =
    >
      ej(["extend union", e, ej(t, " "), eP("= ", ej(r, " | "))], " ")
    }
    ,
    EnumTypeExtension:{
      leave:({name: e, directives: t, values: r}) =
    >
      ej(["extend enum", e, ej(t, " "), eI(r)], " ")
    }
    ,
    InputObjectTypeExtension:{
      leave:({name: e, directives: t, fields: r}) =
    >
      ej(["extend input", e, ej(t, " "), eI(r)], " ")
    }
  }
    ;
    function ej(e, t="") {
      var r;
      return null !== (r = null == e ? void 0 : e.filter(e = > e).join(t)
    )&&
      void 0 !== r ? r : ""
    }

    function eI(e) {
      return eP("{\n", eN(ej(e, "\n")), "\n}")
    }

    function eP(e, t, r="") {
      return null != t && "" !== t ? e + t + r : ""
    }

    function eN(e) {
      return eP("  ", e.replace(/\n/g, "\n  "))
    }

    function eC(e) {
      var t;
      return null !== (t = null == e ? void 0 : e.some(e = > e.includes("\n"))
    )&&
      void 0 !== t && t
    }

    var eF = {
      http: {includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1},
      headers: {accept: "*/*", "content-type": "application/json"},
      options: {method: "POST"}
    }, eR = function (e, t) {
      return t(e)
    }, eq = function () {
      if ("undefined" == typeof AbortController)return {controller: !1, signal: !1};
      var e = new AbortController, t = e.signal;
      return {controller: e, signal: t}
    };

    function eM(e) {
      return new V(function (t) {
        t.error(e)
      })
    }

    var eV = (0, p.wY)(function () {
      return fetch
    }), eA = function (e) {
      void 0 === e && (e = {});
      var t = e.uri, r = void 0 === t ? "/graphql" : t, n = e.fetch, i = e.print, o = void 0 === i ? eR : i, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = void 0 !== c && c, h = (0, f._T)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
      __DEV__ && eO(n || eV);
      var d = {
        http: {includeExtensions: a, preserveHeaderCase: s},
        options: h.fetchOptions,
        credentials: h.credentials,
        headers: h.headers
      };
      return new ep(function (e) {
        var t, i, a, s = (t = e, i = r, t.getContext().uri || ("function" == typeof i ? i(t) : i || "/graphql")), c = e.getContext(), h = {};
        if (c.clientAwareness) {
          var v = c.clientAwareness, y = v.name, m = v.version;
          y && (h["apollographql-client-name"] = y), m && (h["apollographql-client-version"] = m)
        }
        var b = (0, f.pi)((0, f.pi)({}, h), c.headers), _ = function (e, t) {
          for (var r = [], n = 2; n < arguments.length; n++)r[n - 2] = arguments[n];
          var i = {}, o = {};
          r.forEach(function (e) {
            i = (0, f.pi)((0, f.pi)((0, f.pi)({}, i), e.options), {headers: (0, f.pi)((0, f.pi)({}, i.headers), e.headers)}), e.credentials && (i.credentials = e.credentials), o = (0, f.pi)((0, f.pi)({}, o), e.http)
          }), i.headers = function (e, t) {
            if (!t) {
              var r = Object.create(null);
              return Object.keys(Object(e)).forEach(function (t) {
                r[t.toLowerCase()] = e[t]
              }), r
            }
            var n = Object.create(null);
            Object.keys(Object(e)).forEach(function (t) {
              n[t.toLowerCase()] = {originalName: t, value: e[t]}
            });
            var i = Object.create(null);
            return Object.keys(n).forEach(function (e) {
              i[n[e].originalName] = n[e].value
            }), i
          }(i.headers, o.preserveHeaderCase);
          var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, l = {operationName: a, variables: u};
          return o.includeExtensions && (l.extensions = s), o.includeQuery && (l.query = t(c, eD)), {
            options: i,
            body: l
          }
        }(e, o, eF, d, {
          http: c.http,
          options: c.fetchOptions,
          credentials: c.credentials,
          headers: b
        }), w = _.options, O = _.body;
        if (O.variables && !l) {
          var E = new Set(Object.keys(O.variables));
          g(e.query, {
            Variable: function (e, t, r) {
              r && "VariableDefinition" !== r.kind && E.delete(e.name.value)
            }
          }), E.size && (O.variables = (0, f.pi)({}, O.variables), E.forEach(function (e) {
            delete O.variables[e]
          }))
        }
        if (!w.signal) {
          var k = eq(), S = k.controller, T = k.signal;
          (a = S) && (w.signal = T)
        }
        if (u && !e.query.definitions.some(function (e) {
            return "OperationDefinition" === e.kind && "mutation" === e.operation
          }) && (w.method = "GET"), ed(["defer"], e.query) && (w.headers.accept = "multipart/mixed; deferSpec=20220824, application/json"), "GET" === w.method) {
          var D = function (e, t) {
            var r = [], n = function (e, t) {
              r.push("".concat(e, "=").concat(encodeURIComponent(t)))
            };
            if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
              var i = void 0;
              try {
                i = ev(t.variables, "Variables map")
              } catch (o) {
                return {parseError: o}
              }
              n("variables", i)
            }
            if (t.extensions) {
              var a = void 0;
              try {
                a = ev(t.extensions, "Extensions map")
              } catch (s) {
                return {parseError: s}
              }
              n("extensions", a)
            }
            var u = "", c = e, l = e.indexOf("#");
            -1 !== l && (u = e.substr(l), c = e.substr(0, l));
            var f = -1 === c.indexOf("?") ? "?" : "&";
            return {newURI: c + f + r.join("&") + u}
          }(s, O), x = D.newURI, j = D.parseError;
          if (j)return eM(j);
          s = x
        } else try {
          w.body = ev(O, "Payload")
        } catch (I) {
          return eM(I)
        }
        return new V(function (t) {
          return (n || (0, p.wY)(function () {
            return fetch
          }) || eV)(s, w).then(function (r) {
            e.setContext({response: r});
            var n, i = null === (n = r.headers) || void 0 === n ? void 0 : n.get("content-type");
            return null !== i && /^multipart\/mixed/i.test(i) ? function (e, t) {
                var r, n, i;
                return (0, f.mG)(this, void 0, void 0, function () {
                  var o, a, s, u, c, l, p, h, d, v, y, m, g, b, _, w, O, E, k;
                  return (0, f.Jh)(this, function (f) {
                    switch (f.label) {
                      case 0:
                        if (void 0 === TextDecoder)throw Error("TextDecoder must be defined in the environment: please import a polyfill.");
                        o = new TextDecoder("utf-8"), a = null === (r = e.headers) || void 0 === r ? void 0 : r.get("content-type"), s = "boundary=", u = (null == a ? void 0 : a.includes(s)) ? null == a ? void 0 : a.substring((null == a ? void 0 : a.indexOf(s)) + s.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", c = "--".concat(u), l = "", p = function (e) {
                          var t, r, n, i, o, a, s = e;
                          if (e.body && (s = e.body), t = s, ey.DN && t[Symbol.asyncIterator])return n = s[Symbol.asyncIterator](), (r = {
                            next: function () {
                              return n.next()
                            }
                          })[Symbol.asyncIterator] = function () {
                            return this
                          }, r;
                          if (s.getReader)return em(s.getReader());
                          if (s.stream)return em(s.stream().getReader());
                          if (s.arrayBuffer)return i = s.arrayBuffer(), o = !1, a = {
                            next: function () {
                              return o ? Promise.resolve({
                                  value: void 0,
                                  done: !0
                                }) : (o = !0, new Promise(function (e, t) {
                                  i.then(function (t) {
                                    e({value: t, done: !1})
                                  }).catch(t)
                                }))
                            }
                          }, ey.DN && (a[Symbol.asyncIterator] = function () {
                            return this
                          }), a;
                          if (s.pipe)return function (e) {
                            var t = null, r = null, n = !1, i = [], o = [];

                            function a(e) {
                              if (!r) {
                                if (o.length) {
                                  var t = o.shift();
                                  if (Array.isArray(t) && t[0])return t[0]({value: e, done: !1})
                                }
                                i.push(e)
                              }
                            }

                            function s(e) {
                              r = e, o.slice().forEach(function (t) {
                                t[1](e)
                              }), t && t()
                            }

                            function u() {
                              n = !0, o.slice().forEach(function (e) {
                                e[0]({value: void 0, done: !0})
                              }), t && t()
                            }

                            t = function () {
                              t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u)
                            }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
                            var c = {
                              next: function () {
                                return new Promise(function (e, t) {
                                  return r ? t(r) : i.length ? e({value: i.shift(), done: !1}) : n ? e({
                                          value: void 0,
                                          done: !0
                                        }) : void o.push([e, t])
                                })
                              }
                            };
                            return ey.DN && (c[Symbol.asyncIterator] = function () {
                              return this
                            }), c
                          }(s);
                          throw Error("Unknown body type for responseIterator. Please pass a streamable response.")
                        }(e), h = !0, f.label = 1;
                      case 1:
                        if (!h)return [3, 3];
                        return [4, p.next()];
                      case 2:
                        for (v = (d = f.sent()).value, y = d.done, m = "string" == typeof v ? v : o.decode(v), h = !y, l += m, g = l.indexOf(c); g > -1;) {
                          if (b = void 0, b = (k = [l.slice(0, g), l.slice(g + c.length)])[0], l = k[1], b.trim()) {
                            if (_ = b.indexOf("\r\n\r\n"), (w = function (e) {
                                var t = {};
                                return e.split("\n").forEach(function (e) {
                                  var r = e.indexOf(":");
                                  if (r > -1) {
                                    var n = e.slice(0, r).trim().toLowerCase(), i = e.slice(r + 1).trim();
                                    t[n] = i
                                  }
                                }), t
                              }(b.slice(0, _))["content-type"]) && -1 === w.toLowerCase().indexOf("application/json"))throw Error("Unsupported patch content type: application/json is required.");
                            O = b.slice(_);
                            try {
                              E = e_(e, O.replace("\r\n", "")), (Object.keys(E).length > 1 || "data" in E || "incremental" in E || "errors" in E) && (null === (n = t.next) || void 0 === n || n.call(t, E))
                            } catch (S) {
                              ew(S, t)
                            }
                          }
                          g = l.indexOf(c)
                        }
                        return [3, 1];
                      case 3:
                        return null === (i = t.complete) || void 0 === i || i.call(t), [2]
                    }
                  })
                })
              }(r, t) : function (e, t, r) {
                var n;
                (n = e).text().then(function (e) {
                  return e_(n, e)
                }).then(function (e) {
                  return n.status >= 300 && eg(n, e, "Response not successful: Received status code ".concat(n.status)), Array.isArray(e) || eb.call(e, "data") || eb.call(e, "errors") || eg(n, e, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function (e) {
                      return e.operationName
                    }) : t.operationName, "'.")), e
                }).then(function (e) {
                  var t, n;
                  null === (t = r.next) || void 0 === t || t.call(r, e), null === (n = r.complete) || void 0 === n || n.call(r)
                }).catch(function (e) {
                  return ew(e, r)
                })
              }(r, e, t)
          }).catch(function (e) {
            return ew(e, t)
          }), function () {
            a && a.abort()
          }
        })
      })
    }, eQ = ep.execute, eL = function (e) {
      function t(t) {
        void 0 === t && (t = {});
        var r = e.call(this, eA(t).request) || this;
        return r.options = t, r
      }

      return (0, f.ZT)(t, e), t
    }(ep), eG = Object.prototype, ez = eG.toString, eB = eG.hasOwnProperty, eU = Function.prototype.toString, eW = new Map;

    function eJ(e, t) {
      try {
        return function e(t, r) {
          if (t === r)return !0;
          var n = ez.call(t);
          if (n !== ez.call(r))return !1;
          switch (n) {
            case"[object Array]":
              if (t.length !== r.length)break;
            case"[object Object]":
              if (eZ(t, r))return !0;
              var i = eY(t), o = eY(r), a = i.length;
              if (a !== o.length)break;
              for (var s = 0; s < a; ++s)if (!eB.call(r, i[s]))return !1;
              for (var s = 0; s < a; ++s) {
                var u = i[s];
                if (!e(t[u], r[u]))return !1
              }
              return !0;
            case"[object Error]":
              return t.name === r.name && t.message === r.message;
            case"[object Number]":
              if (t != t)return r != r;
            case"[object Boolean]":
            case"[object Date]":
              return +t == +r;
            case"[object RegExp]":
            case"[object String]":
              return t == "".concat(r);
            case"[object Map]":
            case"[object Set]":
              if (t.size !== r.size)break;
              if (eZ(t, r))return !0;
              for (var c = t.entries(), l = "[object Map]" === n; ;) {
                var f = c.next();
                if (f.done)break;
                var p = f.value, h = p[0], d = p[1];
                if (!r.has(h) || l && !e(d, r.get(h)))return !1
              }
              return !0;
            case"[object Uint16Array]":
            case"[object Uint8Array]":
            case"[object Uint32Array]":
            case"[object Int32Array]":
            case"[object Int8Array]":
            case"[object Int16Array]":
            case"[object ArrayBuffer]":
              t = new Uint8Array(t), r = new Uint8Array(r);
            case"[object DataView]":
              var v = t.byteLength;
              if (v === r.byteLength)for (; v-- && t[v] === r[v];);
              return -1 === v;
            case"[object AsyncFunction]":
            case"[object GeneratorFunction]":
            case"[object AsyncGeneratorFunction]":
            case"[object Function]":
              var y, m = eU.call(t);
              if (m !== eU.call(r))break;
              return !((y = m.length - eK.length) >= 0) || m.indexOf(eK, y) !== y
          }
          return !1
        }(e, t)
      } finally {
        eW.clear()
      }
    }

    function eY(e) {
      return Object.keys(e).filter(eH, e)
    }

    function eH(e) {
      return void 0 !== this[e]
    }

    var eK = "{ [native code] }";

    function eZ(e, t) {
      var r = eW.get(e);
      if (r) {
        if (r.has(t))return !0
      } else eW.set(e, r = new Set);
      return r.add(t), !1
    }

    function eX(e) {
      return Array.isArray(e) && e.length > 0
    }

    var e$ = Object.prototype.hasOwnProperty;

    function e0() {
      for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
      return e1(e)
    }

    function e1(e) {
      var t = e[0] || {}, r = e.length;
      if (r > 1)for (var n = new e3, i = 1; i < r; ++i)t = n.merge(t, e[i]);
      return t
    }

    var e2 = function (e, t, r) {
      return this.merge(e[r], t[r])
    }, e3 = function () {
      function e(e) {
        void 0 === e && (e = e2), this.reconciler = e, this.isObject = A, this.pastCopies = new Set
      }

      return e.prototype.merge = function (e, t) {
        for (var r = this, n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
        return A(t) && A(e) ? (Object.keys(t).forEach(function (i) {
            if (e$.call(e, i)) {
              var o = e[i];
              if (t[i] !== o) {
                var a = r.reconciler.apply(r, (0, f.ev)([e, t, i], n, !1));
                a !== o && ((e = r.shallowCopyForMerge(e))[i] = a)
              }
            } else(e = r.shallowCopyForMerge(e))[i] = t[i]
          }), e) : t
      }, e.prototype.shallowCopyForMerge = function (e) {
        return A(e) && !this.pastCopies.has(e) && (e = Array.isArray(e) ? e.slice(0) : (0, f.pi)({__proto__: Object.getPrototypeOf(e)}, e), this.pastCopies.add(e)), e
      }, e
    }();

    function e8(e) {
      return "incremental" in e
    }

    function e9(e, t) {
      var r = e, n = new e3;
      return e8(t) && eX(t.incremental) && t.incremental.forEach(function (e) {
        for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
          var a = i[o], s = isNaN(+a) ? {} : [];
          s[a] = t, t = s
        }
        r = n.merge(r, t)
      }), r
    }

    var e5 = function () {
      return Object.create(null)
    }, e4 = Array.prototype, e6 = e4.forEach, e7 = e4.slice, te = function () {
      function e(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = e5), this.weakness = e, this.makeData = t
      }

      return e.prototype.lookup = function () {
        for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
        return this.lookupArray(e)
      }, e.prototype.lookupArray = function (e) {
        var t = this;
        return e6.call(e, function (e) {
          return t = t.getChildTrie(e)
        }), t.data || (t.data = this.makeData(e7.call(e)))
      }, e.prototype.getChildTrie = function (t) {
        var r = this.weakness && function (e) {
          switch (typeof e) {
            case"object":
              if (null === e)break;
            case"function":
              return !0
          }
          return !1
        }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map), n = r.get(t);
        return n || r.set(t, n = new e(this.weakness, this.makeData)), n
      }, e
    }();

    function tt() {
      for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
      var r = Object.create(null);
      return e.forEach(function (e) {
        e && Object.keys(e).forEach(function (t) {
          var n = e[t];
          void 0 !== n && (r[t] = n)
        })
      }), r
    }

    var tr = Object.prototype.hasOwnProperty;

    function tn(e) {
      return null == e
    }

    var ti = Array.isArray;

    function to(e, t) {
      var r = e.__typename, n = e.id, i = e._id;
      if ("string" == typeof r && (t && (t.keyObject = tn(n) ? tn(i) ? void 0 : {_id: i} : {id: n}), tn(n) && !tn(i) && (n = i), !tn(n)))return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
    }

    var ta = {dataIdFromObject: to, addTypename: !0, resultCaching: !0, canonizeResults: !1};

    function ts(e) {
      var t = e.canonizeResults;
      return void 0 === t ? ta.canonizeResults : t
    }

    var tu = /^[_a-z][_0-9a-z]*/i;

    function tc(e) {
      var t = e.match(tu);
      return t ? t[0] : e
    }

    function tl(e) {
      return A(e) && !B(e) && !ti(e)
    }

    function tf(e, t) {
      var r = L(ei(e));
      return {
        fragmentMap: r, lookupFragment: function (e) {
          var n = r[e];
          return !n && t && (n = t.lookup(e)), n || null
        }
      }
    }

    var tp = function () {
      function e() {
        this.known = new (ey.sy ? WeakSet : Set), this.pool = new te(ey.mr), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
      }

      return e.prototype.isKnown = function (e) {
        return A(e) && this.known.has(e)
      }, e.prototype.pass = function (e) {
        if (A(e)) {
          var t = A(e) ? ti(e) ? e.slice(0) : (0, f.pi)({__proto__: Object.getPrototypeOf(e)}, e) : e;
          return this.passes.set(t, e), t
        }
        return e
      }, e.prototype.admit = function (e) {
        var t = this;
        if (A(e)) {
          var r = this.passes.get(e);
          if (r)return r;
          switch (Object.getPrototypeOf(e)) {
            case Array.prototype:
              if (this.known.has(e))break;
              var n = e.map(this.admit, this), i = this.pool.lookupArray(n);
              return !i.array && (this.known.add(i.array = n), __DEV__ && Object.freeze(n)), i.array;
            case null:
            case Object.prototype:
              if (this.known.has(e))break;
              var o = Object.getPrototypeOf(e), a = [o], s = this.sortedKeys(e);
              a.push(s.json);
              var u = a.length;
              s.sorted.forEach(function (r) {
                a.push(t.admit(e[r]))
              });
              var i = this.pool.lookupArray(a);
              if (!i.object) {
                var c = i.object = Object.create(o);
                this.known.add(c), s.sorted.forEach(function (e, t) {
                  c[e] = a[u + t]
                }), __DEV__ && Object.freeze(c)
              }
              return i.object
          }
        }
        return e
      }, e.prototype.sortedKeys = function (e) {
        var t = Object.keys(e), r = this.pool.lookupArray(t);
        if (!r.keys) {
          t.sort();
          var n = JSON.stringify(t);
          (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, r.keys = {sorted: t, json: n})
        }
        return r.keys
      }, e
    }(), th = Object.assign(function (e) {
      if (A(e)) {
        void 0 === s && td();
        var t = s.admit(e), r = u.get(t);
        return void 0 === r && u.set(t, r = JSON.stringify(t)), r
      }
      return JSON.stringify(e)
    }, {reset: td});

    function td() {
      s = new tp, u = new (ey.mr ? WeakMap : Map)
    }

    function tv(e, t, r) {
      return new V(function (n) {
        var i = n.next, o = n.error, a = n.complete, s = 0, u = !1, c = {
          then: function (e) {
            return new Promise(function (t) {
              return t(e())
            })
          }
        };

        function l(e, t) {
          return e ? function (t) {
              ++s;
              var r = function () {
                return e(t)
              };
              c = c.then(r, r).then(function (e) {
                --s, i && i.call(n, e), u && f.complete()
              }, function (e) {
                throw--s, e
              }).catch(function (e) {
                o && o.call(n, e)
              })
            } : function (e) {
              return t && t.call(n, e)
            }
        }

        var f = {
          next: l(t, i), error: l(r, o), complete: function () {
            u = !0, !s && a && a.call(n)
          }
        }, p = e.subscribe(f);
        return function () {
          return p.unsubscribe()
        }
      })
    }

    function ty(e) {
      var t = eX(e.errors) ? e.errors.slice(0) : [];
      return e8(e) && eX(e.incremental) && e.incremental.forEach(function (e) {
        e.errors && t.push.apply(t, e.errors)
      }), t
    }

    function tm(e, t, r) {
      var n = 0;
      return e.forEach(function (r, i) {
        t.call(this, r, i, e) && (e[n++] = r)
      }, r), e.length = n, e
    }

    var tg = {kind: "Field", name: {kind: "Name", value: "__typename"}};

    function tb(e) {
      var t;
      return !function e(t, r) {
        return !t || t.selectionSet.selections.every(function (t) {
            return "FragmentSpread" === t.kind && e(r[t.name.value], r)
          })
      }(er(e) || (__DEV__ ? (0, p.kG)("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : (0, p.kG)("Document" === e.kind, 50), __DEV__ ? (0, p.kG)(e.definitions.length <= 1, "Fragment must have exactly one definition.") : (0, p.kG)(e.definitions.length <= 1, 51), t = e.definitions[0], __DEV__ ? (0, p.kG)("FragmentDefinition" === t.kind, "Must be a fragment definition.") : (0, p.kG)("FragmentDefinition" === t.kind, 52), t), L(ei(e))) ? e : null
    }

    function t_(e) {
      return function (t) {
        return e.some(function (e) {
          return e.name && e.name === t.name.value || e.test && e.test(t)
        })
      }
    }

    function tw(e, t) {
      var r, n, i, o = Object.create(null), a = [], s = Object.create(null), u = [], c = tb(g(t, {
        Variable: {
          enter: function (e, t, r) {
            "VariableDefinition" !== r.kind && (o[e.name.value] = !0)
          }
        }, Field: {
          enter: function (t) {
            if (e && t.directives && e.some(function (e) {
                return e.remove
              }) && t.directives && t.directives.some(t_(e)))return t.arguments && t.arguments.forEach(function (e) {
              "Variable" === e.value.kind && a.push({name: e.value.name.value})
            }), t.selectionSet && (function e(t) {
              var r = [];
              return t.selections.forEach(function (t) {
                ($(t) || ee(t)) && t.selectionSet ? e(t.selectionSet).forEach(function (e) {
                    return r.push(e)
                  }) : "FragmentSpread" === t.kind && r.push(t)
              }), r
            })(t.selectionSet).forEach(function (e) {
              u.push({name: e.name.value})
            }), null
          }
        }, FragmentSpread: {
          enter: function (e) {
            s[e.name.value] = !0
          }
        }, Directive: {
          enter: function (t) {
            if (t_(e)(t))return null
          }
        }
      }));
      return c && tm(a, function (e) {
        return !!e.name && !o[e.name]
      }).length && (r = a, n = c, i = function (e) {
        return r.some(function (t) {
          return e.value && "Variable" === e.value.kind && e.value.name && (t.name === e.value.name.value || t.test && t.test(e))
        })
      }, c = tb(g(n, {
        OperationDefinition: {
          enter: function (e) {
            return (0, f.pi)((0, f.pi)({}, e), {
              variableDefinitions: e.variableDefinitions ? e.variableDefinitions.filter(function (e) {
                  return !r.some(function (t) {
                    return t.name === e.variable.name.value
                  })
                }) : []
            })
          }
        }, Field: {
          enter: function (e) {
            if (r.some(function (e) {
                return e.remove
              })) {
              var t = 0;
              if (e.arguments && e.arguments.forEach(function (e) {
                  i(e) && (t += 1)
                }), 1 === t)return null
            }
          }
        }, Argument: {
          enter: function (e) {
            if (i(e))return null
          }
        }
      }))), c && tm(u, function (e) {
        return !!e.name && !s[e.name]
      }).length && (c = function (e, t) {
        function r(t) {
          if (e.some(function (e) {
              return e.name === t.name.value
            }))return null
        }

        return tb(g(t, {FragmentSpread: {enter: r}, FragmentDefinition: {enter: r}}))
      }(u, c)), c
    }

    var tO = Object.assign(function (e) {
      return g(e, {
        SelectionSet: {
          enter: function (e, t, r) {
            if (!r || "OperationDefinition" !== r.kind) {
              var n = e.selections;
              if (!(!n || n.some(function (e) {
                  return $(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                })) && !($(r) && r.directives && r.directives.some(function (e) {
                  return "export" === e.name.value
                })))return (0, f.pi)((0, f.pi)({}, e), {selections: (0, f.ev)((0, f.ev)([], n, !0), [tg], !1)})
            }
          }
        }
      })
    }, {
      added: function (e) {
        return e === tg
      }
    }), tE = {
      test: function (e) {
        var t = "connection" === e.name.value;
        return t && (!e.arguments || !e.arguments.some(function (e) {
          return "key" === e.name.value
        })) && __DEV__ && p.kG.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."), t
      }
    }, tk = new Map;

    function tS(e) {
      var t = tk.get(e) || 1;
      return tk.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
    }

    function tT(e, t, r) {
      var n = [];
      e.forEach(function (e) {
        return e[t] && n.push(e)
      }), n.forEach(function (e) {
        return e[t](r)
      })
    }

    function tD(e) {
      function t(t) {
        Object.defineProperty(e, t, {value: V})
      }

      return ey.aS && Symbol.species && t(Symbol.species), t("@@species"), e
    }

    function tx(e) {
      return e && "function" == typeof e.then
    }

    var tj = function (e) {
      function t(t) {
        var r = e.call(this, function (e) {
            return r.addObserver(e), function () {
              return r.removeObserver(e)
            }
          }) || this;
        return r.observers = new Set, r.promise = new Promise(function (e, t) {
          r.resolve = e, r.reject = t
        }), r.handlers = {
          next: function (e) {
            null !== r.sub && (r.latest = ["next", e], r.notify("next", e), tT(r.observers, "next", e))
          }, error: function (e) {
            var t = r.sub;
            null !== t && (t && setTimeout(function () {
              return t.unsubscribe()
            }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), tT(r.observers, "error", e))
          }, complete: function () {
            var e = r.sub;
            if (null !== e) {
              var t = r.sources.shift();
              t ? tx(t) ? t.then(function (e) {
                    return r.sub = e.subscribe(r.handlers)
                  }) : r.sub = t.subscribe(r.handlers) : (e && setTimeout(function () {
                  return e.unsubscribe()
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), tT(r.observers, "complete"))
            }
          }
        }, r.nextResultListeners = new Set, r.cancel = function (e) {
          r.reject(e), r.sources = [], r.handlers.complete()
        }, r.promise.catch(function (e) {
        }), "function" == typeof t && (t = [new V(t)]), tx(t) ? t.then(function (e) {
            return r.start(e)
          }, r.handlers.error) : r.start(t), r
      }

      return (0, f.ZT)(t, e), t.prototype.start = function (e) {
        void 0 === this.sub && (this.sources = Array.from(e), this.handlers.complete())
      }, t.prototype.deliverLastMessage = function (e) {
        if (this.latest) {
          var t = this.latest[0], r = e[t];
          r && r.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete()
        }
      }, t.prototype.addObserver = function (e) {
        this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e))
      }, t.prototype.removeObserver = function (e) {
        this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete()
      }, t.prototype.notify = function (e, t) {
        var r = this.nextResultListeners;
        r.size && (this.nextResultListeners = new Set, r.forEach(function (r) {
          return r(e, t)
        }))
      }, t.prototype.beforeNext = function (e) {
        var t = !1;
        this.nextResultListeners.add(function (r, n) {
          t || (t = !0, e(r, n))
        })
      }, t
    }(V);
    tD(tj);
    var tI = function (e) {
      var t = "";
      return (eX(e.graphQLErrors) || eX(e.clientErrors)) && (e.graphQLErrors || []).concat(e.clientErrors || []).forEach(function (e) {
        var r = e ? e.message : "Error message not found.";
        t += "".concat(r, "\n")
      }), e.networkError && (t += "".concat(e.networkError.message, "\n")), t = t.replace(/\n$/, "")
    }, tP = function (e) {
      function t(r) {
        var n = r.graphQLErrors, i = r.clientErrors, o = r.networkError, a = r.errorMessage, s = r.extraInfo, u = e.call(this, a) || this;
        return u.name = "ApolloError", u.graphQLErrors = n || [], u.clientErrors = i || [], u.networkError = o || null, u.message = a || tI(u), u.extraInfo = s, u.__proto__ = t.prototype, u
      }

      return (0, f.ZT)(t, e), t
    }(Error);

    function tN(e) {
      return !!e && e < 7
    }

    (n = c || (c = {}))[n.loading = 1] = "loading", n[n.setVariables = 2] = "setVariables", n[n.fetchMore = 3] = "fetchMore", n[n.refetch = 4] = "refetch", n[n.poll = 6] = "poll", n[n.ready = 7] = "ready", n[n.error = 8] = "error";
    var tC = Object.prototype.toString;

    function tF(e, t) {
      switch (tC.call(e)) {
        case"[object Array]":
          if ((t = t || new Map).has(e))return t.get(e);
          var r = e.slice(0);
          return t.set(e, r), r.forEach(function (e, n) {
            r[n] = tF(e, t)
          }), r;
        case"[object Object]":
          if ((t = t || new Map).has(e))return t.get(e);
          var n = Object.create(Object.getPrototypeOf(e));
          return t.set(e, n), Object.keys(e).forEach(function (r) {
            n[r] = tF(e[r], t)
          }), n;
        default:
          return e
      }
    }

    var tR = Object.assign, tq = Object.hasOwnProperty, tM = function (e) {
      function t(t) {
        var r = t.queryManager, n = t.queryInfo, i = t.options, o = e.call(this, function (e) {
            try {
              var t = e._subscription._observer;
              t && !t.error && (t.error = tA)
            } catch (r) {
            }
            var n = !o.observers.size;
            o.observers.add(e);
            var i = o.last;
            return i && i.error ? e.error && e.error(i.error) : i && i.result && e.next && e.next(i.result), n && o.reobserve().catch(function () {
            }), function () {
              o.observers.delete(e) && !o.observers.size && o.tearDownQuery()
            }
          }) || this;
        o.observers = new Set, o.subscriptions = new Set, o.queryInfo = n, o.queryManager = r, o.isTornDown = !1;
        var a = r.defaultOptions.watchQuery, s = (void 0 === a ? {} : a).fetchPolicy, u = void 0 === s ? "cache-first" : s, c = i.fetchPolicy, l = void 0 === c ? u : c, p = i.initialFetchPolicy;
        o.options = (0, f.pi)((0, f.pi)({}, i), {
          initialFetchPolicy: void 0 === p ? "standby" === l ? u : l : p,
          fetchPolicy: l
        }), o.queryId = n.queryId || r.generateQueryId();
        var h = er(o.query);
        return o.queryName = h && h.name && h.name.value, o
      }

      return (0, f.ZT)(t, e), Object.defineProperty(t.prototype, "query", {
        get: function () {
          return this.queryManager.transform(this.options.query).document
        }, enumerable: !1, configurable: !0
      }), Object.defineProperty(t.prototype, "variables", {
        get: function () {
          return this.options.variables
        }, enumerable: !1, configurable: !0
      }), t.prototype.result = function () {
        var e = this;
        return new Promise(function (t, r) {
          var n = {
            next: function (r) {
              t(r), e.observers.delete(n), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout(function () {
                i.unsubscribe()
              }, 0)
            }, error: r
          }, i = e.subscribe(n)
        })
      }, t.prototype.getCurrentResult = function (e) {
        void 0 === e && (e = !0);
        var t = this.getLastResult(!0), r = this.queryInfo.networkStatus || t && t.networkStatus || c.ready, n = (0, f.pi)((0, f.pi)({}, t), {
          loading: tN(r),
          networkStatus: r
        }), i = this.options.fetchPolicy, o = void 0 === i ? "cache-first" : i;
        if ("network-only" === o || "no-cache" === o || "standby" === o || this.queryManager.transform(this.options.query).hasForcedResolvers); else {
          var a = this.queryInfo.getDiff();
          (a.complete || this.options.returnPartialData) && (n.data = a.result), eJ(n.data, {}) && (n.data = void 0), a.complete ? (delete n.partial, a.complete && n.networkStatus === c.loading && ("cache-first" === o || "cache-only" === o) && (n.networkStatus = c.ready, n.loading = !1)) : n.partial = !0, !__DEV__ || a.complete || this.options.partialRefetch || n.loading || n.data || n.error || tQ(a.missing)
        }
        return e && this.updateLastResult(n), n
      }, t.prototype.isDifferentFromLastResult = function (e, t) {
        return !this.last || !eJ(this.last.result, e) || t && !eJ(this.last.variables, t)
      }, t.prototype.getLast = function (e, t) {
        var r = this.last;
        if (r && r[e] && (!t || eJ(r.variables, this.variables)))return r[e]
      }, t.prototype.getLastResult = function (e) {
        return this.getLast("result", e)
      }, t.prototype.getLastError = function (e) {
        return this.getLast("error", e)
      }, t.prototype.resetLastResults = function () {
        delete this.last, this.isTornDown = !1
      }, t.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId)
      }, t.prototype.refetch = function (e) {
        var t, r = {pollInterval: 0}, n = this.options.fetchPolicy;
        if ("cache-and-network" === n ? r.fetchPolicy = n : "no-cache" === n ? r.fetchPolicy = "no-cache" : r.fetchPolicy = "network-only", __DEV__ && e && tq.call(e, "variables")) {
          var i = eo(this.query), o = i.variableDefinitions;
          (!o || !o.some(function (e) {
            return "variables" === e.variable.name.value
          })) && __DEV__ && p.kG.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = i.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(i), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))
        }
        return e && !eJ(this.options.variables, e) && (r.variables = this.options.variables = (0, f.pi)((0, f.pi)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, c.refetch)
      }, t.prototype.fetchMore = function (e) {
        var t = this, r = (0, f.pi)((0, f.pi)({}, e.query ? e : (0, f.pi)((0, f.pi)((0, f.pi)((0, f.pi)({}, this.options), {query: this.query}), e), {variables: (0, f.pi)((0, f.pi)({}, this.options.variables), e.variables)})), {fetchPolicy: "no-cache"}), n = this.queryManager.generateQueryId(), i = this.queryInfo, o = i.networkStatus;
        i.networkStatus = c.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
        var a = new Set;
        return this.queryManager.fetchQuery(n, r, c.fetchMore).then(function (s) {
          return t.queryManager.removeQuery(n), i.networkStatus === c.fetchMore && (i.networkStatus = o), t.queryManager.cache.batch({
            update: function (n) {
              var i = e.updateQuery;
              i ? n.updateQuery({
                  query: t.query,
                  variables: t.variables,
                  returnPartialData: !0,
                  optimistic: !1
                }, function (e) {
                  return i(e, {fetchMoreResult: s.data, variables: r.variables})
                }) : n.writeQuery({query: r.query, variables: r.variables, data: s.data})
            }, onWatchUpdated: function (e) {
              a.add(e.query)
            }
          }), s
        }).finally(function () {
          a.has(t.query) || tV(t)
        })
      }, t.prototype.subscribeToMore = function (e) {
        var t = this, r = this.queryManager.startGraphQLSubscription({
          query: e.document,
          variables: e.variables,
          context: e.context
        }).subscribe({
          next: function (r) {
            var n = e.updateQuery;
            n && t.updateQuery(function (e, t) {
              return n(e, {subscriptionData: r, variables: t.variables})
            })
          }, error: function (t) {
            if (e.onError) {
              e.onError(t);
              return
            }
            __DEV__ && p.kG.error("Unhandled GraphQL subscription error", t)
          }
        });
        return this.subscriptions.add(r), function () {
          t.subscriptions.delete(r) && r.unsubscribe()
        }
      }, t.prototype.setOptions = function (e) {
        return this.reobserve(e)
      }, t.prototype.setVariables = function (e) {
        return eJ(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size) ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, c.setVariables) : Promise.resolve()
      }, t.prototype.updateQuery = function (e) {
        var t = this.queryManager, r = e(t.cache.diff({
          query: this.options.query,
          variables: this.variables,
          returnPartialData: !0,
          optimistic: !1
        }).result, {variables: this.variables});
        r && (t.cache.writeQuery({query: this.options.query, data: r, variables: this.variables}), t.broadcastQueries())
      }, t.prototype.startPolling = function (e) {
        this.options.pollInterval = e, this.updatePolling()
      }, t.prototype.stopPolling = function () {
        this.options.pollInterval = 0, this.updatePolling()
      }, t.prototype.applyNextFetchPolicy = function (e, t) {
        if (t.nextFetchPolicy) {
          var r = t.fetchPolicy, n = void 0 === r ? "cache-first" : r, i = t.initialFetchPolicy, o = void 0 === i ? n : i;
          "standby" === n || ("function" == typeof t.nextFetchPolicy ? t.fetchPolicy = t.nextFetchPolicy(n, {
              reason: e,
              options: t,
              observable: this,
              initialFetchPolicy: o
            }) : "variables-changed" === e ? t.fetchPolicy = o : t.fetchPolicy = t.nextFetchPolicy)
        }
        return t.fetchPolicy
      }, t.prototype.fetch = function (e, t) {
        return this.queryManager.setObservableQuery(this), this.queryManager.fetchQueryObservable(this.queryId, e, t)
      }, t.prototype.updatePolling = function () {
        var e = this;
        if (!this.queryManager.ssrMode) {
          var t = this.pollingInfo, r = this.options.pollInterval;
          if (!r) {
            t && (clearTimeout(t.timeout), delete this.pollingInfo);
            return
          }
          if (!t || t.interval !== r) {
            __DEV__ ? (0, p.kG)(r, "Attempted to start a polling query without a polling interval.") : (0, p.kG)(r, 12), (t || (this.pollingInfo = {})).interval = r;
            var n = function () {
              e.pollingInfo && (tN(e.queryInfo.networkStatus) ? i() : e.reobserve({fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"}, c.poll).then(i, i))
            }, i = function () {
              var t = e.pollingInfo;
              t && (clearTimeout(t.timeout), t.timeout = setTimeout(n, t.interval))
            };
            i()
          }
        }
      }, t.prototype.updateLastResult = function (e, t) {
        return void 0 === t && (t = this.variables), this.last = (0, f.pi)((0, f.pi)({}, this.last), {
          result: this.queryManager.assumeImmutableResults ? e : tF(e),
          variables: t
        }), eX(e.errors) || delete this.last.error, this.last
      }, t.prototype.reobserve = function (e, t) {
        var r = this;
        this.isTornDown = !1;
        var n = t === c.refetch || t === c.fetchMore || t === c.poll, i = this.options.variables, o = this.options.fetchPolicy, a = tt(this.options, e || {}), s = n ? a : tR(this.options, a);
        !n && (this.updatePolling(), e && e.variables && !eJ(e.variables, i) && "standby" !== s.fetchPolicy && s.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", s), void 0 === t && (t = c.setVariables)));
        var u = s.variables && (0, f.pi)({}, s.variables), l = this.fetch(s, t), p = {
          next: function (e) {
            r.reportResult(e, u)
          }, error: function (e) {
            r.reportError(e, u)
          }
        };
        return n || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = l, this.observer = p), l.addObserver(p), l.promise
      }, t.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(!1), this.variables)
      }, t.prototype.reportResult = function (e, t) {
        var r = this.getLastError();
        (r || this.isDifferentFromLastResult(e, t)) && ((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), tT(this.observers, "next", e))
      }, t.prototype.reportError = function (e, t) {
        var r = (0, f.pi)((0, f.pi)({}, this.getLastResult()), {
          error: e,
          errors: e.graphQLErrors,
          networkStatus: c.error,
          loading: !1
        });
        this.updateLastResult(r, t), tT(this.observers, "error", this.last.error = e)
      }, t.prototype.hasObservers = function () {
        return this.observers.size > 0
      }, t.prototype.tearDownQuery = function () {
        this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function (e) {
          return e.unsubscribe()
        }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
      }, t
    }(V);

    function tV(e) {
      var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
      return "cache-and-network" === r || "network-only" === r ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function () {
            return (this.nextFetchPolicy = n, "function" == typeof n) ? n.apply(this, arguments) : r
          }
        }) : e.reobserve()
    }

    function tA(e) {
      __DEV__ && p.kG.error("Unhandled error", e.message, e.stack)
    }

    function tQ(e) {
      __DEV__ && e && __DEV__ && p.kG.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e)
    }

    tD(tM);
    var tL = null, tG = {}, tz = 1;

    function tB(e) {
      try {
        return e()
      } catch (t) {
      }
    }

    var tU = "@wry/context:Slot", tW = tB(function () {
        return globalThis
      }) || tB(function () {
        return r.g
      }) || Object.create(null), tJ = tW[tU] || Array[tU] || function (e) {
        try {
          Object.defineProperty(tW, tU, {value: e, enumerable: !1, writable: !1, configurable: !0})
        } finally {
          return e
        }
      }(function () {
        function e() {
          this.id = ["slot", tz++, Date.now(), Math.random().toString(36).slice(2)].join(":")
        }

        return e.prototype.hasValue = function () {
          for (var e = tL; e; e = e.parent)if (this.id in e.slots) {
            var t = e.slots[this.id];
            if (t === tG)break;
            return e !== tL && (tL.slots[this.id] = t), !0
          }
          return tL && (tL.slots[this.id] = tG), !1
        }, e.prototype.getValue = function () {
          if (this.hasValue())return tL.slots[this.id]
        }, e.prototype.withValue = function (e, t, r, n) {
          var i, o = ((i = {__proto__: null})[this.id] = e, i), a = tL;
          tL = {parent: a, slots: o};
          try {
            return t.apply(n, r)
          } finally {
            tL = a
          }
        }, e.bind = function (e) {
          var t = tL;
          return function () {
            var r = tL;
            try {
              return tL = t, e.apply(this, arguments)
            } finally {
              tL = r
            }
          }
        }, e.noContext = function (e, t, r) {
          if (!tL)return e.apply(r, t);
          var n = tL;
          try {
            return tL = null, e.apply(r, t)
          } finally {
            tL = n
          }
        }, e
      }());

    function tY() {
    }

    tJ.bind, tJ.noContext;
    var tH = function () {
      function e(e, t) {
        void 0 === e && (e = 1 / 0), void 0 === t && (t = tY), this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
      }

      return e.prototype.has = function (e) {
        return this.map.has(e)
      }, e.prototype.get = function (e) {
        var t = this.getNode(e);
        return t && t.value
      }, e.prototype.getNode = function (e) {
        var t = this.map.get(e);
        if (t && t !== this.newest) {
          var r = t.older, n = t.newer;
          n && (n.older = r), r && (r.newer = n), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = n)
        }
        return t
      }, e.prototype.set = function (e, t) {
        var r = this.getNode(e);
        return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
      }, e.prototype.clean = function () {
        for (; this.oldest && this.map.size > this.max;)this.delete(this.oldest.key)
      }, e.prototype.delete = function (e) {
        var t = this.map.get(e);
        return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
      }, e
    }(), tK = new tJ, tZ = Object.prototype.hasOwnProperty, tX = void 0 === (l = Array.from) ? function (e) {
        var t = [];
        return e.forEach(function (e) {
          return t.push(e)
        }), t
      } : l;

    function t$(e) {
      var t = e.unsubscribe;
      "function" == typeof t && (e.unsubscribe = void 0, t())
    }

    var t0 = [];

    function t1(e, t) {
      if (!e)throw Error(t || "assertion failure")
    }

    function t2(e) {
      switch (e.length) {
        case 0:
          throw Error("unknown value");
        case 1:
          return e[0];
        case 2:
          throw e[1]
      }
    }

    var t3 = function () {
      function e(t) {
        this.fn = t, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count
      }

      return e.prototype.peek = function () {
        if (1 === this.value.length && !t5(this))return t8(this), this.value[0]
      }, e.prototype.recompute = function (e) {
        var t;
        return t1(!this.recomputing, "already recomputing"), t8(this), t5(this) && (rt(this), tK.withValue(this, t9, [this, e]), function (e, t) {
          if ("function" == typeof e.subscribe)try {
            t$(e), e.unsubscribe = e.subscribe.apply(null, t)
          } catch (r) {
            return e.setDirty(), !1
          }
          return !0
        }(this, e) && (this.dirty = !1, t5(this) || (t = this, t4(t, t7)))), t2(this.value)
      }, e.prototype.setDirty = function () {
        this.dirty || (this.dirty = !0, this.value.length = 0, t4(this, t6), t$(this))
      }, e.prototype.dispose = function () {
        var e = this;
        this.setDirty(), rt(this), t4(this, function (t, r) {
          t.setDirty(), rr(t, e)
        })
      }, e.prototype.forget = function () {
        this.dispose()
      }, e.prototype.dependOn = function (e) {
        e.add(this), this.deps || (this.deps = t0.pop() || new Set), this.deps.add(e)
      }, e.prototype.forgetDeps = function () {
        var e = this;
        this.deps && (tX(this.deps).forEach(function (t) {
          return t.delete(e)
        }), this.deps.clear(), t0.push(this.deps), this.deps = null)
      }, e.count = 0, e
    }();

    function t8(e) {
      var t = tK.getValue();
      if (t)return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), t5(e) ? t6(t, e) : t7(t, e), t
    }

    function t9(e, t) {
      e.recomputing = !0, e.value.length = 0;
      try {
        e.value[0] = e.fn.apply(null, t)
      } catch (r) {
        e.value[1] = r
      }
      e.recomputing = !1
    }

    function t5(e) {
      return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size)
    }

    function t4(e, t) {
      var r = e.parents.size;
      if (r)for (var n = tX(e.parents), i = 0; i < r; ++i)t(n[i], e)
    }

    function t6(e, t) {
      t1(e.childValues.has(t)), t1(t5(t));
      var r = !t5(e);
      if (e.dirtyChildren) {
        if (e.dirtyChildren.has(t))return
      } else e.dirtyChildren = t0.pop() || new Set;
      e.dirtyChildren.add(t), r && t4(e, t6)
    }

    function t7(e, t) {
      t1(e.childValues.has(t)), t1(!t5(t));
      var r, n, i = e.childValues.get(t);
      0 === i.length ? e.childValues.set(t, t.value.slice(0)) : (r = t.value, (n = i.length) > 0 && n === r.length && i[n - 1] === r[n - 1] || e.setDirty()), re(e, t), t5(e) || t4(e, t7)
    }

    function re(e, t) {
      var r = e.dirtyChildren;
      r && (r.delete(t), 0 === r.size && (t0.length < 100 && t0.push(r), e.dirtyChildren = null))
    }

    function rt(e) {
      e.childValues.size > 0 && e.childValues.forEach(function (t, r) {
        rr(e, r)
      }), e.forgetDeps(), t1(null === e.dirtyChildren)
    }

    function rr(e, t) {
      t.parents.delete(e), e.childValues.delete(t), re(e, t)
    }

    var rn = {setDirty: !0, dispose: !0, forget: !0};

    function ri(e) {
      var t = new Map, r = e && e.subscribe;

      function n(e) {
        var n = tK.getValue();
        if (n) {
          var i = t.get(e);
          i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (t$(i), i.unsubscribe = r(e))
        }
      }

      return n.dirty = function (e, r) {
        var n = t.get(e);
        if (n) {
          var i = r && tZ.call(rn, r) ? r : "setDirty";
          tX(n).forEach(function (e) {
            return e[i]()
          }), t.delete(e), t$(n)
        }
      }, n
    }

    function ro() {
      var e = new te("function" == typeof WeakMap);
      return function () {
        return e.lookupArray(arguments)
      }
    }

    ro();
    var ra = new Set;

    function rs(e, t) {
      void 0 === t && (t = Object.create(null));
      var r = new tH(t.max || 65536, function (e) {
        return e.dispose()
      }), n = t.keyArgs, i = t.makeCacheKey || ro(), o = function () {
        var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
        if (void 0 === o)return e.apply(null, arguments);
        var a = r.get(o);
        a || (r.set(o, a = new t3(e)), a.subscribe = t.subscribe, a.forget = function () {
          return r.delete(o)
        });
        var s = a.recompute(Array.prototype.slice.call(arguments));
        return r.set(o, a), ra.add(r), tK.hasValue() || (ra.forEach(function (e) {
          return e.clean()
        }), ra.clear()), s
      };

      function a(e) {
        var t = r.get(e);
        t && t.setDirty()
      }

      function s(e) {
        var t = r.get(e);
        if (t)return t.peek()
      }

      function u(e) {
        return r.delete(e)
      }

      return Object.defineProperty(o, "size", {
        get: function () {
          return r.map.size
        }, configurable: !1, enumerable: !1
      }), o.dirtyKey = a, o.dirty = function () {
        a(i.apply(null, arguments))
      }, o.peekKey = s, o.peek = function () {
        return s(i.apply(null, arguments))
      }, o.forgetKey = u, o.forget = function () {
        return u(i.apply(null, arguments))
      }, o.makeCacheKey = i, o.getKey = n ? function () {
          return i.apply(null, n.apply(null, arguments))
        } : i, Object.freeze(o)
    }

    var ru = new tJ, rc = new WeakMap;

    function rl(e) {
      var t = rc.get(e);
      return t || rc.set(e, t = {vars: new Set, dep: ri()}), t
    }

    function rf(e) {
      rl(e).vars.forEach(function (t) {
        return t.forgetCache(e)
      })
    }

    function rp(e) {
      var t = new Set, r = new Set, n = function (o) {
        if (arguments.length > 0) {
          if (e !== o) {
            e = o, t.forEach(function (e) {
              rl(e).dep.dirty(n), e.broadcastWatches && e.broadcastWatches()
            });
            var a = Array.from(r);
            r.clear(), a.forEach(function (t) {
              return t(e)
            })
          }
        } else {
          var s = ru.getValue();
          s && (i(s), rl(s).dep(n))
        }
        return e
      };
      n.onNextChange = function (e) {
        return r.add(e), function () {
          r.delete(e)
        }
      };
      var i = n.attachCache = function (e) {
        return t.add(e), rl(e).vars.add(n), n
      };
      return n.forgetCache = function (e) {
        return t.delete(e)
      }, n
    }

    var rh = function () {
      function e(e) {
        var t = e.cache, r = e.client, n = e.resolvers, i = e.fragmentMatcher;
        this.cache = t, r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
      }

      return e.prototype.addResolvers = function (e) {
        var t = this;
        this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function (e) {
            t.resolvers = e0(t.resolvers, e)
          }) : this.resolvers = e0(this.resolvers, e)
      }, e.prototype.setResolvers = function (e) {
        this.resolvers = {}, this.addResolvers(e)
      }, e.prototype.getResolvers = function () {
        return this.resolvers || {}
      }, e.prototype.runResolvers = function (e) {
        var t = e.document, r = e.remoteResult, n = e.context, i = e.variables, o = e.onlyRunForcedResolvers, a = void 0 !== o && o;
        return (0, f.mG)(this, void 0, void 0, function () {
          return (0, f.Jh)(this, function (e) {
            return t ? [2, this.resolveDocument(t, r.data, n, i, this.fragmentMatcher, a).then(function (e) {
                return (0, f.pi)((0, f.pi)({}, r), {data: e.result})
              })] : [2, r]
          })
        })
      }, e.prototype.setFragmentMatcher = function (e) {
        this.fragmentMatcher = e
      }, e.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher
      }, e.prototype.clientQuery = function (e) {
        return ed(["client"], e) && this.resolvers ? e : null
      }, e.prototype.serverQuery = function (e) {
        var t;
        return et(e), (t = tw([{
          test: function (e) {
            return "client" === e.name.value
          }, remove: !0
        }], e)) && (t = g(t, {
          FragmentDefinition: {
            enter: function (e) {
              if (e.selectionSet && e.selectionSet.selections.every(function (e) {
                  return $(e) && "__typename" === e.name.value
                }))return null
            }
          }
        })), t
      }, e.prototype.prepareContext = function (e) {
        var t = this.cache;
        return (0, f.pi)((0, f.pi)({}, e), {
          cache: t, getCacheKey: function (e) {
            return t.identify(e)
          }
        })
      }, e.prototype.addExportedVariables = function (e, t, r) {
        return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, f.mG)(this, void 0, void 0, function () {
          return (0, f.Jh)(this, function (n) {
            return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function (e) {
                return (0, f.pi)((0, f.pi)({}, t), e.exportedVariables)
              })] : [2, (0, f.pi)({}, t)]
          })
        })
      }, e.prototype.shouldForceResolvers = function (e) {
        var t = !1;
        return g(e, {
          Directive: {
            enter: function (e) {
              if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function (e) {
                  return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                })))return m
            }
          }
        }), t
      }, e.prototype.buildRootValueFromCache = function (e, t) {
        return this.cache.diff({
          query: "query" === ea(e).operation ? e : g(e, {
              OperationDefinition: {
                enter: function (e) {
                  return (0, f.pi)((0, f.pi)({}, e), {operation: "query"})
                }
              }
            }), variables: t, returnPartialData: !0, optimistic: !1
        }).result
      }, e.prototype.resolveDocument = function (e, t, r, n, i, o) {
        return void 0 === r && (r = {}), void 0 === n && (n = {}), void 0 === i && (i = function () {
          return !0
        }), void 0 === o && (o = !1), (0, f.mG)(this, void 0, void 0, function () {
          var a, s, u, c, l, p, h, d;
          return (0, f.Jh)(this, function (v) {
            return a = ea(e), s = L(ei(e)), c = (u = a.operation) ? u.charAt(0).toUpperCase() + u.slice(1) : "Query", l = this, p = l.cache, h = l.client, d = {
              fragmentMap: s,
              context: (0, f.pi)((0, f.pi)({}, r), {cache: p, client: h}),
              variables: n,
              fragmentMatcher: i,
              defaultOperationType: c,
              exportedVariables: {},
              onlyRunForcedResolvers: o
            }, [2, this.resolveSelectionSet(a.selectionSet, t, d).then(function (e) {
              return {result: e, exportedVariables: d.exportedVariables}
            })]
          })
        })
      }, e.prototype.resolveSelectionSet = function (e, t, r) {
        return (0, f.mG)(this, void 0, void 0, function () {
          var n, i, o, a, s, u = this;
          return (0, f.Jh)(this, function (c) {
            return n = r.fragmentMap, i = r.context, o = r.variables, a = [t], s = function (e) {
              return (0, f.mG)(u, void 0, void 0, function () {
                var s, u;
                return (0, f.Jh)(this, function (c) {
                  return eh(e, o) ? $(e) ? [2, this.resolveField(e, t, r).then(function (t) {
                        var r;
                        void 0 !== t && a.push(((r = {})[Z(e)] = t, r))
                      })] : (ee(e) ? s = e : (s = n[e.name.value], __DEV__ ? (0, p.kG)(s, "No fragment named ".concat(e.name.value)) : (0, p.kG)(s, 11)), s && s.typeCondition && (u = s.typeCondition.name.value, r.fragmentMatcher(t, u, i))) ? [2, this.resolveSelectionSet(s.selectionSet, t, r).then(function (e) {
                          a.push(e)
                        })] : [2] : [2]
                })
              })
            }, [2, Promise.all(e.selections.map(s)).then(function () {
              return e1(a)
            })]
          })
        })
      }, e.prototype.resolveField = function (e, t, r) {
        return (0, f.mG)(this, void 0, void 0, function () {
          var n, i, o, a, s, u, c, l, p, h = this;
          return (0, f.Jh)(this, function (f) {
            return n = r.variables, a = (i = e.name.value) !== (o = Z(e)), u = Promise.resolve(s = t[o] || t[i]), (!r.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (c = t.__typename || r.defaultOperationType, (l = this.resolvers && this.resolvers[c]) && (p = l[a ? i : o]) && (u = Promise.resolve(ru.withValue(this.cache, p, [t, K(e, n), r.context, {
              field: e,
              fragmentMap: r.fragmentMap
            }])))), [2, u.then(function (t) {
              return (void 0 === t && (t = s), e.directives && e.directives.forEach(function (e) {
                "export" === e.name.value && e.arguments && e.arguments.forEach(function (e) {
                  "as" === e.name.value && "StringValue" === e.value.kind && (r.exportedVariables[e.value.value] = t)
                })
              }), e.selectionSet && null != t) ? Array.isArray(t) ? h.resolveSubSelectedArray(e, t, r) : e.selectionSet ? h.resolveSelectionSet(e.selectionSet, t, r) : void 0 : t
            })]
          })
        })
      }, e.prototype.resolveSubSelectedArray = function (e, t, r) {
        var n = this;
        return Promise.all(t.map(function (t) {
          return null === t ? null : Array.isArray(t) ? n.resolveSubSelectedArray(e, t, r) : e.selectionSet ? n.resolveSelectionSet(e.selectionSet, t, r) : void 0
        }))
      }, e
    }(), rd = new (ey.mr ? WeakMap : Map);

    function rv(e, t) {
      var r = e[t];
      "function" == typeof r && (e[t] = function () {
        return rd.set(e, (rd.get(e) + 1) % 1e15), r.apply(this, arguments)
      })
    }

    function ry(e) {
      e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0)
    }

    var rm = function () {
      function e(e, t) {
        void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.subscriptions = new Set, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
        var r = this.cache = e.cache;
        rd.has(r) || (rd.set(r, 0), rv(r, "evict"), rv(r, "modify"), rv(r, "reset"))
      }

      return e.prototype.init = function (e) {
        var t = e.networkStatus || c.loading;
        return this.variables && this.networkStatus !== c.loading && !eJ(this.variables, e.variables) && (t = c.setVariables), eJ(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
          document: e.document,
          variables: e.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: t
        }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
      }, e.prototype.reset = function () {
        ry(this), this.dirty = !1
      }, e.prototype.getDiff = function (e) {
        void 0 === e && (e = this.variables);
        var t = this.getDiffOptions(e);
        if (this.lastDiff && eJ(t, this.lastDiff.options))return this.lastDiff.diff;
        this.updateWatch(this.variables = e);
        var r = this.observableQuery;
        if (r && "no-cache" === r.options.fetchPolicy)return {complete: !1};
        var n = this.cache.diff(t);
        return this.updateLastDiff(n, t), n
      }, e.prototype.updateLastDiff = function (e, t) {
        this.lastDiff = e ? {diff: e, options: t || this.getDiffOptions()} : void 0
      }, e.prototype.getDiffOptions = function (e) {
        var t;
        return void 0 === e && (e = this.variables), {
          query: this.document,
          variables: e,
          returnPartialData: !0,
          optimistic: !0,
          canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults
        }
      }, e.prototype.setDiff = function (e) {
        var t = this, r = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(e), this.dirty || eJ(r && r.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function () {
          return t.notify()
        }, 0)))
      }, e.prototype.setObservableQuery = function (e) {
        var t = this;
        e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function () {
            t.getDiff().fromOptimisticTransaction ? e.observe() : tV(e)
          })) : delete this.oqListener)
      }, e.prototype.notify = function () {
        var e = this;
        ry(this), this.shouldNotify() && this.listeners.forEach(function (t) {
          return t(e)
        }), this.dirty = !1
      }, e.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size)return !1;
        if (tN(this.networkStatus) && this.observableQuery) {
          var e = this.observableQuery.options.fetchPolicy;
          if ("cache-only" !== e && "cache-and-network" !== e)return !1
        }
        return !0
      }, e.prototype.stop = function () {
        if (!this.stopped) {
          this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach(function (e) {
            return e.unsubscribe()
          });
          var t = this.observableQuery;
          t && t.stopPolling()
        }
      }, e.prototype.cancel = function () {
      }, e.prototype.updateWatch = function (e) {
        var t = this;
        void 0 === e && (e = this.variables);
        var r = this.observableQuery;
        if (!r || "no-cache" !== r.options.fetchPolicy) {
          var n = (0, f.pi)((0, f.pi)({}, this.getDiffOptions(e)), {
            watcher: this, callback: function (e) {
              return t.setDiff(e)
            }
          });
          this.lastWatch && eJ(n, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = n))
        }
      }, e.prototype.resetLastWrite = function () {
        this.lastWrite = void 0
      }, e.prototype.shouldWrite = function (e, t) {
        var r = this.lastWrite;
        return !(r && r.dmCount === rd.get(this.cache) && eJ(t, r.variables) && eJ(e.data, r.result.data))
      }, e.prototype.markResult = function (e, t, r, n) {
        var i = this, o = new e3, a = eX(e.errors) ? e.errors.slice(0) : [];
        if (this.reset(), "incremental" in e && eX(e.incremental)) {
          var s = e9(this.getDiff().result, e);
          e.data = s
        } else if ("hasNext" in e && e.hasNext) {
          var u = this.getDiff();
          e.data = o.merge(u.result, e.data)
        }
        this.graphQLErrors = a, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (rg(e, r.errorPolicy) ? this.cache.performTransaction(function (o) {
              if (i.shouldWrite(e, r.variables)) o.writeQuery({
                query: t,
                data: e.data,
                variables: r.variables,
                overwrite: 1 === n
              }), i.lastWrite = {
                result: e,
                variables: r.variables,
                dmCount: rd.get(i.cache)
              }; else if (i.lastDiff && i.lastDiff.diff.complete) {
                e.data = i.lastDiff.diff.result;
                return
              }
              var a = i.getDiffOptions(r.variables), s = o.diff(a);
              i.stopped || i.updateWatch(r.variables), i.updateLastDiff(s, a), s.complete && (e.data = s.result)
            }) : this.lastWrite = void 0)
      }, e.prototype.markReady = function () {
        return this.networkError = null, this.networkStatus = c.ready
      }, e.prototype.markError = function (e) {
        return this.networkStatus = c.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
      }, e
    }();

    function rg(e, t) {
      void 0 === t && (t = "none");
      var r = "ignore" === t || "all" === t, n = !eX(ty(e));
      return !n && r && e.data && (n = !0), n
    }

    var rb = Object.prototype.hasOwnProperty, r_ = function () {
      function e(e) {
        var t = e.cache, r = e.link, n = e.defaultOptions, i = e.queryDeduplication, o = e.onBroadcast, a = e.ssrMode, s = e.clientAwareness, u = e.localState, c = e.assumeImmutableResults;
        this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new (ey.mr ? WeakMap : Map), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Map, this.cache = t, this.link = r, this.defaultOptions = n || Object.create(null), this.queryDeduplication = void 0 !== i && i, this.clientAwareness = void 0 === s ? {} : s, this.localState = u || new rh({cache: t}), this.ssrMode = void 0 !== a && a, this.assumeImmutableResults = !!c, (this.onBroadcast = o) && (this.mutationStore = Object.create(null))
      }

      return e.prototype.stop = function () {
        var e = this;
        this.queries.forEach(function (t, r) {
          e.stopQueryNoBroadcast(r)
        }), this.cancelPendingFetches(__DEV__ ? new p.ej("QueryManager stopped while query was in flight") : new p.ej(13))
      }, e.prototype.cancelPendingFetches = function (e) {
        this.fetchCancelFns.forEach(function (t) {
          return t(e)
        }), this.fetchCancelFns.clear()
      }, e.prototype.mutate = function (e) {
        var t, r, n = e.mutation, i = e.variables, o = e.optimisticResponse, a = e.updateQueries, s = e.refetchQueries, u = void 0 === s ? [] : s, c = e.awaitRefetchQueries, l = void 0 !== c && c, h = e.update, d = e.onQueryUpdated, v = e.fetchPolicy, y = void 0 === v ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : v, m = e.errorPolicy, g = void 0 === m ? (null === (r = this.defaultOptions.mutate) || void 0 === r ? void 0 : r.errorPolicy) || "none" : m, b = e.keepRootFields, _ = e.context;
        return (0, f.mG)(this, void 0, void 0, function () {
          var e, t, r, s, c, v;
          return (0, f.Jh)(this, function (m) {
            switch (m.label) {
              case 0:
                if (__DEV__ ? (0, p.kG)(n, "mutation option is required. You must specify your GraphQL document in the mutation option.") : (0, p.kG)(n, 14), __DEV__ ? (0, p.kG)("network-only" === y || "no-cache" === y, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : (0, p.kG)("network-only" === y || "no-cache" === y, 15), e = this.generateMutationId(), r = (t = this.transform(n)).document, s = t.hasClientExports, n = this.cache.transformForLink(r), i = this.getVariables(n, i), !s)return [3, 2];
                return [4, this.localState.addExportedVariables(n, i, _)];
              case 1:
                i = m.sent(), m.label = 2;
              case 2:
                return c = this.mutationStore && (this.mutationStore[e] = {
                    mutation: n,
                    variables: i,
                    loading: !0,
                    error: null
                  }), o && this.markMutationOptimistic(o, {
                  mutationId: e,
                  document: n,
                  variables: i,
                  fetchPolicy: y,
                  errorPolicy: g,
                  context: _,
                  updateQueries: a,
                  update: h,
                  keepRootFields: b
                }), this.broadcastQueries(), v = this, [2, new Promise(function (t, r) {
                  return tv(v.getObservableFromLink(n, (0, f.pi)((0, f.pi)({}, _), {optimisticResponse: o}), i, !1), function (t) {
                    if (eX(ty(t)) && "none" === g)throw new tP({graphQLErrors: ty(t)});
                    c && (c.loading = !1, c.error = null);
                    var r = (0, f.pi)({}, t);
                    return "function" == typeof u && (u = u(r)), "ignore" === g && eX(ty(r)) && delete r.errors, v.markMutationResult({
                      mutationId: e,
                      result: r,
                      document: n,
                      variables: i,
                      fetchPolicy: y,
                      errorPolicy: g,
                      context: _,
                      update: h,
                      updateQueries: a,
                      awaitRefetchQueries: l,
                      refetchQueries: u,
                      removeOptimistic: o ? e : void 0,
                      onQueryUpdated: d,
                      keepRootFields: b
                    })
                  }).subscribe({
                    next: function (e) {
                      v.broadcastQueries(), "hasNext" in e && !1 !== e.hasNext || t(e)
                    }, error: function (t) {
                      c && (c.loading = !1, c.error = t), o && v.cache.removeOptimistic(e), v.broadcastQueries(), r(t instanceof tP ? t : new tP({networkError: t}))
                    }
                  })
                })]
            }
          })
        })
      }, e.prototype.markMutationResult = function (e, t) {
        var r = this;
        void 0 === t && (t = this.cache);
        var n = e.result, i = [], o = "no-cache" === e.fetchPolicy;
        if (!o && rg(n, e.errorPolicy)) {
          if (e8(n) || i.push({
              result: n.data,
              dataId: "ROOT_MUTATION",
              query: e.document,
              variables: e.variables
            }), e8(n) && eX(n.incremental)) {
            var a = e9(t.diff({
              id: "ROOT_MUTATION",
              query: this.transform(e.document).asQuery,
              variables: e.variables,
              optimistic: !1,
              returnPartialData: !0
            }).result, n);
            void 0 !== a && (n.data = a, i.push({
              result: a,
              dataId: "ROOT_MUTATION",
              query: e.document,
              variables: e.variables
            }))
          }
          var s = e.updateQueries;
          s && this.queries.forEach(function (e, o) {
            var a = e.observableQuery, u = a && a.queryName;
            if (u && rb.call(s, u)) {
              var c = s[u], l = r.queries.get(o), f = l.document, p = l.variables, h = t.diff({
                query: f,
                variables: p,
                returnPartialData: !0,
                optimistic: !1
              }), d = h.result;
              if (h.complete && d) {
                var v = c(d, {mutationResult: n, queryName: f && en(f) || void 0, queryVariables: p});
                v && i.push({result: v, dataId: "ROOT_QUERY", query: f, variables: p})
              }
            }
          })
        }
        if (i.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
          var u = [];
          if (this.refetchQueries({
              updateCache: function (t) {
                o || i.forEach(function (e) {
                  return t.write(e)
                });
                var a, s = e.update, u = !(e8(a = n) || "hasNext" in a && "data" in a) || e8(n) && !n.hasNext;
                if (s) {
                  if (!o) {
                    var c = t.diff({
                      id: "ROOT_MUTATION",
                      query: r.transform(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0
                    });
                    c.complete && ("incremental" in (n = (0, f.pi)((0, f.pi)({}, n), {data: c.result})) && delete n.incremental, "hasNext" in n && delete n.hasNext)
                  }
                  u && s(t, n, {context: e.context, variables: e.variables})
                }
                o || e.keepRootFields || !u || t.modify({
                  id: "ROOT_MUTATION", fields: function (e, t) {
                    var r = t.fieldName, n = t.DELETE;
                    return "__typename" === r ? e : n
                  }
                })
              },
              include: e.refetchQueries,
              optimistic: !1,
              removeOptimistic: e.removeOptimistic,
              onQueryUpdated: e.onQueryUpdated || null
            }).forEach(function (e) {
              return u.push(e)
            }), e.awaitRefetchQueries || e.onQueryUpdated)return Promise.all(u).then(function () {
            return n
          })
        }
        return Promise.resolve(n)
      }, e.prototype.markMutationOptimistic = function (e, t) {
        var r = this, n = "function" == typeof e ? e(t.variables) : e;
        return this.cache.recordOptimisticTransaction(function (e) {
          try {
            r.markMutationResult((0, f.pi)((0, f.pi)({}, t), {result: {data: n}}), e)
          } catch (i) {
            __DEV__ && p.kG.error(i)
          }
        }, t.mutationId)
      }, e.prototype.fetchQuery = function (e, t, r) {
        return this.fetchQueryObservable(e, t, r).promise
      }, e.prototype.getQueryStore = function () {
        var e = Object.create(null);
        return this.queries.forEach(function (t, r) {
          e[r] = {
            variables: t.variables,
            networkStatus: t.networkStatus,
            networkError: t.networkError,
            graphQLErrors: t.graphQLErrors
          }
        }), e
      }, e.prototype.resetErrors = function (e) {
        var t = this.queries.get(e);
        t && (t.networkError = void 0, t.graphQLErrors = [])
      }, e.prototype.transform = function (e) {
        var t = this.transformCache;
        if (!t.has(e)) {
          var r = this.cache.transformDocument(e), n = tw([tE], et(r)), i = this.localState.clientQuery(r), o = n && this.localState.serverQuery(n), a = {
            document: r,
            hasClientExports: r && ed(["client", "export"], r, !0),
            hasForcedResolvers: this.localState.shouldForceResolvers(r),
            clientQuery: i,
            serverQuery: o,
            defaultVars: es(er(r)),
            asQuery: (0, f.pi)((0, f.pi)({}, r), {
              definitions: r.definitions.map(function (e) {
                return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, f.pi)((0, f.pi)({}, e), {operation: "query"}) : e
              })
            })
          }, s = function (e) {
            e && !t.has(e) && t.set(e, a)
          };
          s(e), s(r), s(i), s(o)
        }
        return t.get(e)
      }, e.prototype.getVariables = function (e, t) {
        return (0, f.pi)((0, f.pi)({}, this.transform(e).defaultVars), t)
      }, e.prototype.watchQuery = function (e) {
        void 0 === (e = (0, f.pi)((0, f.pi)({}, e), {variables: this.getVariables(e.query, e.variables)})).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
        var t = new rm(this), r = new tM({queryManager: this, queryInfo: t, options: e});
        return this.queries.set(r.queryId, t), t.init({
          document: r.query,
          observableQuery: r,
          variables: r.variables
        }), r
      }, e.prototype.query = function (e, t) {
        var r = this;
        return void 0 === t && (t = this.generateQueryId()), __DEV__ ? (0, p.kG)(e.query, "query option is required. You must specify your GraphQL document in the query option.") : (0, p.kG)(e.query, 16), __DEV__ ? (0, p.kG)("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : (0, p.kG)("Document" === e.query.kind, 17), __DEV__ ? (0, p.kG)(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : (0, p.kG)(!e.returnPartialData, 18), __DEV__ ? (0, p.kG)(!e.pollInterval, "pollInterval option only supported on watchQuery.") : (0, p.kG)(!e.pollInterval, 19), this.fetchQuery(t, e).finally(function () {
          return r.stopQuery(t)
        })
      }, e.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++)
      }, e.prototype.generateRequestId = function () {
        return this.requestIdCounter++
      }, e.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++)
      }, e.prototype.stopQueryInStore = function (e) {
        this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
      }, e.prototype.stopQueryInStoreNoBroadcast = function (e) {
        var t = this.queries.get(e);
        t && t.stop()
      }, e.prototype.clearStore = function (e) {
        return void 0 === e && (e = {discardWatches: !0}), this.cancelPendingFetches(__DEV__ ? new p.ej("Store reset while query was in flight (not completed in link chain)") : new p.ej(20)), this.queries.forEach(function (e) {
          e.observableQuery ? e.networkStatus = c.loading : e.stop()
        }), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
      }, e.prototype.getObservableQueries = function (e) {
        var t = this;
        void 0 === e && (e = "active");
        var r = new Map, n = new Map, i = new Set;
        return Array.isArray(e) && e.forEach(function (e) {
          "string" == typeof e ? n.set(e, !1) : A(e) && "Document" === e.kind && Array.isArray(e.definitions) ? n.set(t.transform(e).document, !1) : A(e) && e.query && i.add(e)
        }), this.queries.forEach(function (t, i) {
          var o = t.observableQuery, a = t.document;
          if (o) {
            if ("all" === e) {
              r.set(i, o);
              return
            }
            var s = o.queryName;
            if ("standby" === o.options.fetchPolicy || "active" === e && !o.hasObservers())return;
            ("active" === e || s && n.has(s) || a && n.has(a)) && (r.set(i, o), s && n.set(s, !0), a && n.set(a, !0))
          }
        }), i.size && i.forEach(function (e) {
          var n = tS("legacyOneTimeQuery"), i = t.getQuery(n).init({
            document: e.query,
            variables: e.variables
          }), o = new tM({
            queryManager: t,
            queryInfo: i,
            options: (0, f.pi)((0, f.pi)({}, e), {fetchPolicy: "network-only"})
          });
          (0, p.kG)(o.queryId === n), i.setObservableQuery(o), r.set(n, o)
        }), __DEV__ && n.size && n.forEach(function (e, t) {
          !e && __DEV__ && p.kG.warn("Unknown query ".concat("string" == typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array"))
        }), r
      }, e.prototype.reFetchObservableQueries = function (e) {
        var t = this;
        void 0 === e && (e = !1);
        var r = [];
        return this.getObservableQueries(e ? "all" : "active").forEach(function (n, i) {
          var o = n.options.fetchPolicy;
          n.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), t.getQuery(i).setDiff(null)
        }), this.broadcastQueries(), Promise.all(r)
      }, e.prototype.setObservableQuery = function (e) {
        this.getQuery(e.queryId).setObservableQuery(e)
      }, e.prototype.startGraphQLSubscription = function (e) {
        var t = this, r = e.query, n = e.fetchPolicy, i = e.errorPolicy, o = e.variables, a = e.context, s = void 0 === a ? {} : a;
        r = this.transform(r).document, o = this.getVariables(r, o);
        var u = function (e) {
          return t.getObservableFromLink(r, s, e).map(function (o) {
            if ("no-cache" !== n && (rg(o, i) && t.cache.write({
                query: r,
                result: o.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: e
              }), t.broadcastQueries()), eX(ty(o)))throw new tP({graphQLErrors: o.errors});
            return o
          })
        };
        if (this.transform(r).hasClientExports) {
          var c = this.localState.addExportedVariables(r, o, s).then(u);
          return new V(function (e) {
            var t = null;
            return c.then(function (r) {
              return t = r.subscribe(e)
            }, e.error), function () {
              return t && t.unsubscribe()
            }
          })
        }
        return u(o)
      }, e.prototype.stopQuery = function (e) {
        this.stopQueryNoBroadcast(e), this.broadcastQueries()
      }, e.prototype.stopQueryNoBroadcast = function (e) {
        this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
      }, e.prototype.removeQuery = function (e) {
        this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e))
      }, e.prototype.broadcastQueries = function () {
        this.onBroadcast && this.onBroadcast(), this.queries.forEach(function (e) {
          return e.notify()
        })
      }, e.prototype.getLocalState = function () {
        return this.localState
      }, e.prototype.getObservableFromLink = function (e, t, r, n) {
        var i, o, a = this;
        void 0 === n && (n = null !== (i = null == t ? void 0 : t.queryDeduplication) && void 0 !== i ? i : this.queryDeduplication);
        var s = this.transform(e).serverQuery;
        if (s) {
          var u = this.inFlightLinkObservables, c = this.link, l = {
            query: s,
            variables: r,
            operationName: en(s) || void 0,
            context: this.prepareContext((0, f.pi)((0, f.pi)({}, t), {forceFetch: !n}))
          };
          if (t = l.context, n) {
            var p = u.get(s) || new Map;
            u.set(s, p);
            var h = th(r);
            if (!(o = p.get(h))) {
              var d = new tj([eQ(c, l)]);
              p.set(h, o = d), d.beforeNext(function () {
                p.delete(h) && p.size < 1 && u.delete(s)
              })
            }
          } else o = new tj([eQ(c, l)])
        } else o = new tj([V.of({data: {}})]), t = this.prepareContext(t);
        var v = this.transform(e).clientQuery;
        return v && (o = tv(o, function (e) {
          return a.localState.runResolvers({document: v, remoteResult: e, context: t, variables: r})
        })), o
      }, e.prototype.getResultsFromLink = function (e, t, r) {
        var n = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(e.document).document);
        return tv(this.getObservableFromLink(i, r.context, r.variables), function (o) {
          var a = ty(o), s = a.length > 0;
          if (n >= e.lastRequestId) {
            if (s && "none" === r.errorPolicy)throw e.markError(new tP({graphQLErrors: a}));
            e.markResult(o, i, r, t), e.markReady()
          }
          var u = {data: o.data, loading: !1, networkStatus: c.ready};
          return s && "ignore" !== r.errorPolicy && (u.errors = a, u.networkStatus = c.error), u
        }, function (t) {
          var r = t.hasOwnProperty("graphQLErrors") ? t : new tP({networkError: t});
          throw n >= e.lastRequestId && e.markError(r), r
        })
      }, e.prototype.fetchQueryObservable = function (e, t, r) {
        var n = this;
        void 0 === r && (r = c.loading);
        var i = this.transform(t.query).document, o = this.getVariables(i, t.variables), a = this.getQuery(e), s = this.defaultOptions.watchQuery, u = t.fetchPolicy, l = void 0 === u ? s && s.fetchPolicy || "cache-first" : u, f = t.errorPolicy, p = void 0 === f ? s && s.errorPolicy || "none" : f, h = t.returnPartialData, d = t.notifyOnNetworkStatusChange, v = t.context, y = Object.assign({}, t, {
          query: i,
          variables: o,
          fetchPolicy: l,
          errorPolicy: p,
          returnPartialData: void 0 !== h && h,
          notifyOnNetworkStatusChange: void 0 !== d && d,
          context: void 0 === v ? {} : v
        }), m = function (e) {
          y.variables = e;
          var i = n.fetchQueryByPolicy(a, y, r);
          return "standby" !== y.fetchPolicy && i.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", t), i
        }, g = function () {
          return n.fetchCancelFns.delete(e)
        };
        this.fetchCancelFns.set(e, function (e) {
          g(), setTimeout(function () {
            return b.cancel(e)
          })
        });
        var b = new tj(this.transform(y.query).hasClientExports ? this.localState.addExportedVariables(y.query, y.variables, y.context).then(m) : m(y.variables));
        return b.promise.then(g, g), b
      }, e.prototype.refetchQueries = function (e) {
        var t = this, r = e.updateCache, n = e.include, i = e.optimistic, o = void 0 !== i && i, a = e.removeOptimistic, s = void 0 === a ? o ? tS("refetchQueries") : void 0 : a, u = e.onQueryUpdated, c = new Map;
        n && this.getObservableQueries(n).forEach(function (e, r) {
          c.set(r, {oq: e, lastDiff: t.getQuery(r).getDiff()})
        });
        var l = new Map;
        return r && this.cache.batch({
          update: r,
          optimistic: o && s || !1,
          removeOptimistic: s,
          onWatchUpdated: function (e, t, r) {
            var n = e.watcher instanceof rm && e.watcher.observableQuery;
            if (n) {
              if (u) {
                c.delete(n.queryId);
                var i = u(n, t, r);
                return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i
              }
              null !== u && c.set(n.queryId, {oq: n, lastDiff: r, diff: t})
            }
          }
        }), c.size && c.forEach(function (e, r) {
          var n, i = e.oq, o = e.lastDiff, a = e.diff;
          if (u) {
            if (!a) {
              var s = i.queryInfo;
              s.reset(), a = s.getDiff()
            }
            n = u(i, a, o)
          }
          u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
        }), s && this.cache.removeOptimistic(s), l
      }, e.prototype.fetchQueryByPolicy = function (e, t, r) {
        var n = this, i = t.query, o = t.variables, a = t.fetchPolicy, s = t.refetchWritePolicy, u = t.errorPolicy, l = t.returnPartialData, p = t.context, h = t.notifyOnNetworkStatusChange, d = e.networkStatus;
        e.init({document: this.transform(i).document, variables: o, networkStatus: r});
        var v = function () {
          return e.getDiff(o)
        }, y = function (t, r) {
          void 0 === r && (r = e.networkStatus || c.loading);
          var a = t.result;
          !__DEV__ || l || eJ(a, {}) || tQ(t.missing);
          var s = function (e) {
            return V.of((0, f.pi)({data: e, loading: tN(r), networkStatus: r}, t.complete ? null : {partial: !0}))
          };
          return a && n.transform(i).hasForcedResolvers ? n.localState.runResolvers({
              document: i,
              remoteResult: {data: a},
              context: p,
              variables: o,
              onlyRunForcedResolvers: !0
            }).then(function (e) {
              return s(e.data || void 0)
            }) : s(a)
        }, m = "no-cache" === a ? 0 : r === c.refetch && "merge" !== s ? 1 : 2, g = function () {
          return n.getResultsFromLink(e, m, {variables: o, context: p, fetchPolicy: a, errorPolicy: u})
        }, b = h && "number" == typeof d && d !== r && tN(r);
        switch (a) {
          default:
          case"cache-first":
            var _ = v();
            if (_.complete)return [y(_, e.markReady())];
            if (l || b)return [y(_), g()];
            return [g()];
          case"cache-and-network":
            var _ = v();
            if (_.complete || l || b)return [y(_), g()];
            return [g()];
          case"cache-only":
            return [y(v(), e.markReady())];
          case"network-only":
            if (b)return [y(v()), g()];
            return [g()];
          case"no-cache":
            if (b)return [y(e.getDiff()), g()];
            return [g()];
          case"standby":
            return []
        }
      }, e.prototype.getQuery = function (e) {
        return e && !this.queries.has(e) && this.queries.set(e, new rm(this, e)), this.queries.get(e)
      }, e.prototype.prepareContext = function (e) {
        void 0 === e && (e = {});
        var t = this.localState.prepareContext(e);
        return (0, f.pi)((0, f.pi)({}, t), {clientAwareness: this.clientAwareness})
      }, e
    }();

    function rw(e, t) {
      return tt(e, t, t.variables && {variables: (0, f.pi)((0, f.pi)({}, e && e.variables), t.variables)})
    }

    var rO = !1, rE = function () {
      function e(e) {
        var t = this;
        this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
        var r = e.uri, n = e.credentials, i = e.headers, o = e.cache, a = e.ssrMode, s = void 0 !== a && a, u = e.ssrForceFetchDelay, c = void 0 === u ? 0 : u, l = e.connectToDevTools, f = void 0 === l ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : l, h = e.queryDeduplication, d = void 0 === h || h, v = e.defaultOptions, y = e.assumeImmutableResults, m = e.resolvers, g = e.typeDefs, b = e.fragmentMatcher, _ = e.name, w = e.version, O = e.link;
        if (O || (O = r ? new eL({
              uri: r,
              credentials: n,
              headers: i
            }) : ep.empty()), !o)throw __DEV__ ? new p.ej("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new p.ej(9);
        if (this.link = O, this.cache = o, this.disableNetworkFetches = s || c > 0, this.queryDeduplication = d, this.defaultOptions = v || Object.create(null), this.typeDefs = g, c && setTimeout(function () {
            return t.disableNetworkFetches = !1
          }, c), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), f && "object" == typeof window && (window.__APOLLO_CLIENT__ = this), !rO && f && __DEV__ && (rO = !0, "undefined" != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
          var E = window.navigator, k = E && E.userAgent, S = void 0;
          "string" == typeof k && (k.indexOf("Chrome/") > -1 ? S = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : k.indexOf("Firefox/") > -1 && (S = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), S && __DEV__ && p.kG.log("Download the Apollo DevTools for a better development experience: " + S)
        }
        this.version = "3.7.3", this.localState = new rh({
          cache: o,
          client: this,
          resolvers: m,
          fragmentMatcher: b
        }), this.queryManager = new r_({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          queryDeduplication: d,
          ssrMode: s,
          clientAwareness: {name: _, version: w},
          localState: this.localState,
          assumeImmutableResults: void 0 !== y && y,
          onBroadcast: f ? function () {
              t.devToolsHookCb && t.devToolsHookCb({
                action: {},
                state: {queries: t.queryManager.getQueryStore(), mutations: t.queryManager.mutationStore || {}},
                dataWithOptimisticResults: t.cache.extract(!0)
              })
            } : void 0
        })
      }

      return e.prototype.stop = function () {
        this.queryManager.stop()
      }, e.prototype.watchQuery = function (e) {
        return this.defaultOptions.watchQuery && (e = rw(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && ("network-only" === e.fetchPolicy || "cache-and-network" === e.fetchPolicy) && (e = (0, f.pi)((0, f.pi)({}, e), {fetchPolicy: "cache-first"})), this.queryManager.watchQuery(e)
      }, e.prototype.query = function (e) {
        return this.defaultOptions.query && (e = rw(this.defaultOptions.query, e)), __DEV__ ? (0, p.kG)("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : (0, p.kG)("cache-and-network" !== e.fetchPolicy, 10), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, f.pi)((0, f.pi)({}, e), {fetchPolicy: "cache-first"})), this.queryManager.query(e)
      }, e.prototype.mutate = function (e) {
        return this.defaultOptions.mutate && (e = rw(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
      }, e.prototype.subscribe = function (e) {
        return this.queryManager.startGraphQLSubscription(e)
      }, e.prototype.readQuery = function (e, t) {
        return void 0 === t && (t = !1), this.cache.readQuery(e, t)
      }, e.prototype.readFragment = function (e, t) {
        return void 0 === t && (t = !1), this.cache.readFragment(e, t)
      }, e.prototype.writeQuery = function (e) {
        this.cache.writeQuery(e), this.queryManager.broadcastQueries()
      }, e.prototype.writeFragment = function (e) {
        this.cache.writeFragment(e), this.queryManager.broadcastQueries()
      }, e.prototype.__actionHookForDevTools = function (e) {
        this.devToolsHookCb = e
      }, e.prototype.__requestRaw = function (e) {
        return eQ(this.link, e)
      }, e.prototype.resetStore = function () {
        var e = this;
        return Promise.resolve().then(function () {
          return e.queryManager.clearStore({discardWatches: !1})
        }).then(function () {
          return Promise.all(e.resetStoreCallbacks.map(function (e) {
            return e()
          }))
        }).then(function () {
          return e.reFetchObservableQueries()
        })
      }, e.prototype.clearStore = function () {
        var e = this;
        return Promise.resolve().then(function () {
          return e.queryManager.clearStore({discardWatches: !0})
        }).then(function () {
          return Promise.all(e.clearStoreCallbacks.map(function (e) {
            return e()
          }))
        })
      }, e.prototype.onResetStore = function (e) {
        var t = this;
        return this.resetStoreCallbacks.push(e), function () {
          t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (t) {
            return t !== e
          })
        }
      }, e.prototype.onClearStore = function (e) {
        var t = this;
        return this.clearStoreCallbacks.push(e), function () {
          t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (t) {
            return t !== e
          })
        }
      }, e.prototype.reFetchObservableQueries = function (e) {
        return this.queryManager.reFetchObservableQueries(e)
      }, e.prototype.refetchQueries = function (e) {
        var t = this.queryManager.refetchQueries(e), r = [], n = [];
        t.forEach(function (e, t) {
          r.push(t), n.push(e)
        });
        var i = Promise.all(n);
        return i.queries = r, i.results = n, i.catch(function (e) {
          __DEV__ && p.kG.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))
        }), i
      }, e.prototype.getObservableQueries = function (e) {
        return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e)
      }, e.prototype.extract = function (e) {
        return this.cache.extract(e)
      }, e.prototype.restore = function (e) {
        return this.cache.restore(e)
      }, e.prototype.addResolvers = function (e) {
        this.localState.addResolvers(e)
      }, e.prototype.setResolvers = function (e) {
        this.localState.setResolvers(e)
      }, e.prototype.getResolvers = function () {
        return this.localState.getResolvers()
      }, e.prototype.setLocalStateFragmentMatcher = function (e) {
        this.localState.setFragmentMatcher(e)
      }, e.prototype.setLink = function (e) {
        this.link = this.queryManager.link = e
      }, e
    }(), rk = function () {
      function e() {
        this.getFragmentDoc = rs(Q)
      }

      return e.prototype.batch = function (e) {
        var t, r = this, n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
        return this.performTransaction(function () {
          return t = e.update(r)
        }, n), t
      }, e.prototype.recordOptimisticTransaction = function (e, t) {
        this.performTransaction(e, t)
      }, e.prototype.transformDocument = function (e) {
        return e
      }, e.prototype.transformForLink = function (e) {
        return e
      }, e.prototype.identify = function (e) {
      }, e.prototype.gc = function () {
        return []
      }, e.prototype.modify = function (e) {
        return !1
      }, e.prototype.readQuery = function (e, t) {
        return void 0 === t && (t = !!e.optimistic), this.read((0, f.pi)((0, f.pi)({}, e), {
          rootId: e.id || "ROOT_QUERY",
          optimistic: t
        }))
      }, e.prototype.readFragment = function (e, t) {
        return void 0 === t && (t = !!e.optimistic), this.read((0, f.pi)((0, f.pi)({}, e), {
          query: this.getFragmentDoc(e.fragment, e.fragmentName),
          rootId: e.id,
          optimistic: t
        }))
      }, e.prototype.writeQuery = function (e) {
        var t = e.id, r = e.data, n = (0, f._T)(e, ["id", "data"]);
        return this.write(Object.assign(n, {dataId: t || "ROOT_QUERY", result: r}))
      }, e.prototype.writeFragment = function (e) {
        var t = e.id, r = e.data, n = e.fragment, i = e.fragmentName, o = (0, f._T)(e, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(o, {query: this.getFragmentDoc(n, i), dataId: t, result: r}))
      }, e.prototype.updateQuery = function (e, t) {
        return this.batch({
          update: function (r) {
            var n = r.readQuery(e), i = t(n);
            return null == i ? n : (r.writeQuery((0, f.pi)((0, f.pi)({}, e), {data: i})), i)
          }
        })
      }, e.prototype.updateFragment = function (e, t) {
        return this.batch({
          update: function (r) {
            var n = r.readFragment(e), i = t(n);
            return null == i ? n : (r.writeFragment((0, f.pi)((0, f.pi)({}, e), {data: i})), i)
          }
        })
      }, e
    }(), rS = function (e) {
      function t(r, n, i, o) {
        var a, s = e.call(this, r) || this;
        if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
          s.missing = s.message;
          for (var u = s.path.length - 1; u >= 0; --u)s.missing = ((a = {})[s.path[u]] = s.missing, a)
        } else s.missing = s.path;
        return s.__proto__ = t.prototype, s
      }

      return (0, f.ZT)(t, e), t
    }(Error);

    function rT(e) {
      if (__DEV__) {
        var t;
        (t = new Set([e])).forEach(function (e) {
          A(e) && function (e) {
            if (__DEV__ && !Object.isFrozen(e))try {
              Object.freeze(e)
            } catch (t) {
              if (t instanceof TypeError)return null;
              throw t
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach(function (r) {
            A(e[r]) && t.add(e[r])
          })
        })
      }
      return e
    }

    var rD = Object.create(null), rx = function () {
      return rD
    }, rj = Object.create(null), rI = function () {
      function e(e, t) {
        var r = this;
        this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function (e, t) {
          return rT(B(e) ? r.get(e.__ref, t) : e && e[t])
        }, this.canRead = function (e) {
          return B(e) ? r.has(e.__ref) : "object" == typeof e
        }, this.toReference = function (e, t) {
          if ("string" == typeof e)return z(e);
          if (B(e))return e;
          var n = r.policies.identify(e)[0];
          if (n) {
            var i = z(n);
            return t && r.merge(n, e), i
          }
        }
      }

      return e.prototype.toObject = function () {
        return (0, f.pi)({}, this.data)
      }, e.prototype.has = function (e) {
        return void 0 !== this.lookup(e, !0)
      }, e.prototype.get = function (e, t) {
        if (this.group.depend(e, t), tr.call(this.data, e)) {
          var r = this.data[e];
          if (r && tr.call(r, t))return r[t]
        }
        return "__typename" === t && tr.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof rC ? this.parent.get(e, t) : void 0
      }, e.prototype.lookup = function (e, t) {
        return (t && this.group.depend(e, "__exists"), tr.call(this.data, e)) ? this.data[e] : this instanceof rC ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
      }, e.prototype.merge = function (e, t) {
        var r, n = this;
        B(e) && (e = e.__ref), B(t) && (t = t.__ref);
        var i = "string" == typeof e ? this.lookup(r = e) : e, o = "string" == typeof t ? this.lookup(r = t) : t;
        if (o) {
          __DEV__ ? (0, p.kG)("string" == typeof r, "store.merge expects a string ID") : (0, p.kG)("string" == typeof r, 1);
          var a = new e3(rR).merge(i, o);
          if (this.data[r] = a, a !== i && (delete this.refs[r], this.group.caching)) {
            var s = Object.create(null);
            i || (s.__exists = 1), Object.keys(o).forEach(function (e) {
              if (!i || i[e] !== a[e]) {
                s[e] = 1;
                var t = tc(e);
                t === e || n.policies.hasKeyArgs(a.__typename, t) || (s[t] = 1), void 0 !== a[e] || n instanceof rC || delete a[e]
              }
            }), s.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[r] === a.__typename && delete s.__typename, Object.keys(s).forEach(function (e) {
              return n.group.dirty(r, e)
            })
          }
        }
      }, e.prototype.modify = function (e, t) {
        var r = this, n = this.lookup(e);
        if (n) {
          var i = Object.create(null), o = !1, a = !0, s = {
            DELETE: rD,
            INVALIDATE: rj,
            isReference: B,
            toReference: this.toReference,
            canRead: this.canRead,
            readField: function (t, n) {
              return r.policies.readField("string" == typeof t ? {fieldName: t, from: n || z(e)} : t, {store: r})
            }
          };
          if (Object.keys(n).forEach(function (u) {
              var c = tc(u), l = n[u];
              if (void 0 !== l) {
                var p = "function" == typeof t ? t : t[u] || t[c];
                if (p) {
                  var h = p === rx ? rD : p(rT(l), (0, f.pi)((0, f.pi)({}, s), {
                      fieldName: c,
                      storeFieldName: u,
                      storage: r.getStorage(e, u)
                    }));
                  h === rj ? r.group.dirty(e, u) : (h === rD && (h = void 0), h !== l && (i[u] = h, o = !0, l = h))
                }
                void 0 !== l && (a = !1)
              }
            }), o)return this.merge(e, i), a && (this instanceof rC ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
        }
        return !1
      }, e.prototype.delete = function (e, t, r) {
        var n, i = this.lookup(e);
        if (i) {
          var o = this.getFieldValue(i, "__typename"), a = t && r ? this.policies.getStoreFieldName({
              typename: o,
              fieldName: t,
              args: r
            }) : t;
          return this.modify(e, a ? ((n = {})[a] = rx, n) : rx)
        }
        return !1
      }, e.prototype.evict = function (e, t) {
        var r = !1;
        return e.id && (tr.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof rC && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
      }, e.prototype.clear = function () {
        this.replace(null)
      }, e.prototype.extract = function () {
        var e = this, t = this.toObject(), r = [];
        return this.getRootIdSet().forEach(function (t) {
          tr.call(e.policies.rootTypenamesById, t) || r.push(t)
        }), r.length && (t.__META = {extraRootIds: r.sort()}), t
      }, e.prototype.replace = function (e) {
        var t = this;
        if (Object.keys(this.data).forEach(function (r) {
            e && tr.call(e, r) || t.delete(r)
          }), e) {
          var r = e.__META, n = (0, f._T)(e, ["__META"]);
          Object.keys(n).forEach(function (e) {
            t.merge(e, n[e])
          }), r && r.extraRootIds.forEach(this.retain, this)
        }
      }, e.prototype.retain = function (e) {
        return this.rootIds[e] = (this.rootIds[e] || 0) + 1
      }, e.prototype.release = function (e) {
        if (this.rootIds[e] > 0) {
          var t = --this.rootIds[e];
          return t || delete this.rootIds[e], t
        }
        return 0
      }, e.prototype.getRootIdSet = function (e) {
        return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof rC ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
      }, e.prototype.gc = function () {
        var e = this, t = this.getRootIdSet(), r = this.toObject();
        t.forEach(function (n) {
          tr.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
        });
        var n = Object.keys(r);
        if (n.length) {
          for (var i = this; i instanceof rC;)i = i.parent;
          n.forEach(function (e) {
            return i.delete(e)
          })
        }
        return n
      }, e.prototype.findChildRefIds = function (e) {
        if (!tr.call(this.refs, e)) {
          var t = this.refs[e] = Object.create(null), r = this.data[e];
          if (!r)return t;
          var n = new Set([r]);
          n.forEach(function (e) {
            B(e) && (t[e.__ref] = !0), A(e) && Object.keys(e).forEach(function (t) {
              var r = e[t];
              A(r) && n.add(r)
            })
          })
        }
        return this.refs[e]
      }, e.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments)
      }, e
    }(), rP = function () {
      function e(e, t) {
        void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
      }

      return e.prototype.resetCaching = function () {
        this.d = this.caching ? ri() : null, this.keyMaker = new te(ey.mr)
      }, e.prototype.depend = function (e, t) {
        if (this.d) {
          this.d(t + "#" + e);
          var r = tc(t);
          r !== t && this.d(r + "#" + e), this.parent && this.parent.depend(e, t)
        }
      }, e.prototype.dirty = function (e, t) {
        this.d && this.d.dirty(t + "#" + e, "__exists" === t ? "forget" : "setDirty")
      }, e
    }();

    function rN(e, t) {
      rq(e) && e.group.depend(t, "__exists")
    }

    o = function (e) {
      function t(t) {
        var r = t.policies, n = t.resultCaching, i = t.seed, o = e.call(this, r, new rP(void 0 === n || n)) || this;
        return o.stump = new rF(o), o.storageTrie = new te(ey.mr), i && o.replace(i), o
      }

      return (0, f.ZT)(t, e), t.prototype.addLayer = function (e, t) {
        return this.stump.addLayer(e, t)
      }, t.prototype.removeLayer = function () {
        return this
      }, t.prototype.getStorage = function () {
        return this.storageTrie.lookupArray(arguments)
      }, t
    }(i = rI || (rI = {})), i.Root = o;
    var rC = function (e) {
      function t(t, r, n, i) {
        var o = e.call(this, r.policies, i) || this;
        return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
      }

      return (0, f.ZT)(t, e), t.prototype.addLayer = function (e, r) {
        return new t(e, this, r, this.group)
      }, t.prototype.removeLayer = function (e) {
        var t = this, r = this.parent.removeLayer(e);
        return e === this.id ? (this.group.caching && Object.keys(this.data).forEach(function (e) {
            var n = t.data[e], i = r.lookup(e);
            i ? n ? n !== i && Object.keys(n).forEach(function (r) {
                  eJ(n[r], i[r]) || t.group.dirty(e, r)
                }) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function (r) {
                  t.group.dirty(e, r)
                })) : t.delete(e)
          }), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
      }, t.prototype.toObject = function () {
        return (0, f.pi)((0, f.pi)({}, this.parent.toObject()), this.data)
      }, t.prototype.findChildRefIds = function (t) {
        var r = this.parent.findChildRefIds(t);
        return tr.call(this.data, t) ? (0, f.pi)((0, f.pi)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
      }, t.prototype.getStorage = function () {
        for (var e = this.parent; e.parent;)e = e.parent;
        return e.getStorage.apply(e, arguments)
      }, t
    }(rI), rF = function (e) {
      function t(t) {
        return e.call(this, "EntityStore.Stump", t, function () {
          }, new rP(t.group.caching, t.group)) || this
      }

      return (0, f.ZT)(t, e), t.prototype.removeLayer = function () {
        return this
      }, t.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments)
      }, t
    }(rC);

    function rR(e, t, r) {
      var n = e[r], i = t[r];
      return eJ(n, i) ? n : i
    }

    function rq(e) {
      return !!(e instanceof rI && e.group.caching)
    }

    function rM(e) {
      return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
    }

    var rV = function () {
      function e(e) {
        var t = this;
        this.knownResults = new (ey.mr ? WeakMap : Map), this.config = tt(e, {
          addTypename: !1 !== e.addTypename,
          canonizeResults: ts(e)
        }), this.canon = e.canon || new tp, this.executeSelectionSet = rs(function (e) {
          var r, n = e.context.canonizeResults, i = rM(e);
          i[3] = !n;
          var o = (r = t.executeSelectionSet).peek.apply(r, i);
          return o ? n ? (0, f.pi)((0, f.pi)({}, o), {result: t.canon.admit(o.result)}) : o : (rN(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
        }, {
          max: this.config.resultCacheMaxSize, keyArgs: rM, makeCacheKey: function (e, t, r, n) {
            if (rq(r.store))return r.store.makeCacheKey(e, B(t) ? t.__ref : t, r.varString, n)
          }
        }), this.executeSubSelectedArray = rs(function (e) {
          return rN(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
        }, {
          max: this.config.resultCacheMaxSize, makeCacheKey: function (e) {
            var t = e.field, r = e.array, n = e.context;
            if (rq(n.store))return n.store.makeCacheKey(t, r, n.varString)
          }
        })
      }

      return e.prototype.resetCanon = function () {
        this.canon = new tp
      }, e.prototype.diffQueryAgainstStore = function (e) {
        var t, r = e.store, n = e.query, i = e.rootId, o = e.variables, a = e.returnPartialData, s = e.canonizeResults, u = void 0 === s ? this.config.canonizeResults : s, c = this.config.cache.policies;
        o = (0, f.pi)((0, f.pi)({}, es(eo(n))), o);
        var l = z(void 0 === i ? "ROOT_QUERY" : i), p = this.executeSelectionSet({
          selectionSet: ea(n).selectionSet,
          objectOrReference: l,
          enclosingRef: l,
          context: (0, f.pi)({
            store: r,
            query: n,
            policies: c,
            variables: o,
            varString: th(o),
            canonizeResults: u
          }, tf(n, this.config.fragments))
        });
        if (p.missing && (t = [new rS(function (e) {
            try {
              JSON.stringify(e, function (e, t) {
                if ("string" == typeof t)throw t;
                return t
              })
            } catch (t) {
              return t
            }
          }(p.missing), p.missing, n, o)], !(void 0 === a || a)))throw t[0];
        return {result: p.result, complete: !t, missing: t}
      }, e.prototype.isFresh = function (e, t, r, n) {
        if (rq(n.store) && this.knownResults.get(e) === r) {
          var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
          if (i && e === i.result)return !0
        }
        return !1
      }, e.prototype.execSelectionSetImpl = function (e) {
        var t, r = this, n = e.selectionSet, i = e.objectOrReference, o = e.enclosingRef, a = e.context;
        if (B(i) && !a.policies.rootTypenamesById[i.__ref] && !a.store.has(i.__ref))return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
        var s = a.variables, u = a.policies, c = a.store.getFieldValue(i, "__typename"), l = [], f = new e3;

        function h(e, r) {
          var n;
          return e.missing && (t = f.merge(t, ((n = {})[r] = e.missing, n))), e.result
        }

        this.config.addTypename && "string" == typeof c && !u.rootIdsByTypename[c] && l.push({__typename: c});
        var d = new Set(n.selections);
        d.forEach(function (e) {
          var n, v;
          if (eh(e, s)) {
            if ($(e)) {
              var m = u.readField({fieldName: e.name.value, field: e, variables: a.variables, from: i}, a), g = Z(e);
              void 0 === m ? tO.added(e) || (t = f.merge(t, ((n = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat(B(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), n))) : ti(m) ? m = h(r.executeSubSelectedArray({
                    field: e,
                    array: m,
                    enclosingRef: o,
                    context: a
                  }), g) : e.selectionSet ? null != m && (m = h(r.executeSelectionSet({
                      selectionSet: e.selectionSet,
                      objectOrReference: m,
                      enclosingRef: B(m) ? m : o,
                      context: a
                    }), g)) : a.canonizeResults && (m = r.canon.pass(m)), void 0 !== m && l.push(((v = {})[g] = m, v))
            } else {
              var b = G(e, a.lookupFragment);
              if (!b && e.kind === y.h.FRAGMENT_SPREAD)throw __DEV__ ? new p.ej("No fragment named ".concat(e.name.value)) : new p.ej(5);
              b && u.fragmentMatches(b, c) && b.selectionSet.selections.forEach(d.add, d)
            }
          }
        });
        var v = {result: e1(l), missing: t}, m = a.canonizeResults ? this.canon.admit(v) : rT(v);
        return m.result && this.knownResults.set(m.result, n), m
      }, e.prototype.execSubSelectedArrayImpl = function (e) {
        var t, r = this, n = e.field, i = e.array, o = e.enclosingRef, a = e.context, s = new e3;

        function u(e, r) {
          var n;
          return e.missing && (t = s.merge(t, ((n = {})[r] = e.missing, n))), e.result
        }

        return n.selectionSet && (i = i.filter(a.store.canRead)), i = i.map(function (e, t) {
          return null === e ? null : ti(e) ? u(r.executeSubSelectedArray({
                field: n,
                array: e,
                enclosingRef: o,
                context: a
              }), t) : n.selectionSet ? u(r.executeSelectionSet({
                  selectionSet: n.selectionSet,
                  objectOrReference: e,
                  enclosingRef: B(e) ? e : o,
                  context: a
                }), t) : (__DEV__ && function (e, t, r) {
                  if (!t.selectionSet) {
                    var n = new Set([r]);
                    n.forEach(function (r) {
                      A(r) && (__DEV__ ? (0, p.kG)(!B(r), "Missing selection set for object of type ".concat(B(r) ? e.get(r.__ref, "__typename") : r && r.__typename, " returned for query field ").concat(t.name.value)) : (0, p.kG)(!B(r), 6), Object.values(r).forEach(n.add, n))
                    })
                  }
                }(a.store, n, e), e)
        }), {result: a.canonizeResults ? this.canon.admit(i) : i, missing: t}
      }, e
    }(), rA = Object.create(null);

    function rQ(e) {
      var t = JSON.stringify(e);
      return rA[t] || (rA[t] = Object.create(null))
    }

    function rL(e) {
      var t = rQ(e);
      return t.keyFieldsFn || (t.keyFieldsFn = function (t, r) {
          var n = function (e, t) {
            return r.readField(t, e)
          }, i = r.keyObject = rz(e, function (e) {
            var i = rU(r.storeObject, e, n);
            return void 0 === i && t !== r.storeObject && tr.call(t, e[0]) && (i = rU(t, e, rB)), __DEV__ ? (0, p.kG)(void 0 !== i, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : (0, p.kG)(void 0 !== i, 2), i
          });
          return "".concat(r.typename, ":").concat(JSON.stringify(i))
        })
    }

    function rG(e) {
      var t = rQ(e);
      return t.keyArgsFn || (t.keyArgsFn = function (t, r) {
          var n = r.field, i = r.variables, o = r.fieldName, a = JSON.stringify(rz(e, function (e) {
            var r = e[0], o = r.charAt(0);
            if ("@" === o) {
              if (n && eX(n.directives)) {
                var a = r.slice(1), s = n.directives.find(function (e) {
                  return e.name.value === a
                }), u = s && K(s, i);
                return u && rU(u, e.slice(1))
              }
              return
            }
            if ("$" === o) {
              var c = r.slice(1);
              if (i && tr.call(i, c)) {
                var l = e.slice(0);
                return l[0] = c, rU(i, l)
              }
              return
            }
            if (t)return rU(t, e)
          }));
          return (t || "{}" !== a) && (o += ":" + a), o
        })
    }

    function rz(e, t) {
      var r = new e3;
      return (function e(t) {
        var r = rQ(t);
        if (!r.paths) {
          var n = r.paths = [], i = [];
          t.forEach(function (r, o) {
            ti(r) ? (e(r).forEach(function (e) {
                return n.push(i.concat(e))
              }), i.length = 0) : (i.push(r), ti(t[o + 1]) || (n.push(i.slice(0)), i.length = 0))
          })
        }
        return r.paths
      })(e).reduce(function (e, n) {
        var i, o = t(n);
        if (void 0 !== o) {
          for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
          e = r.merge(e, o)
        }
        return e
      }, Object.create(null))
    }

    function rB(e, t) {
      return e[t]
    }

    function rU(e, t, r) {
      return r = r || rB, function e(t) {
        return A(t) ? ti(t) ? t.map(e) : rz(Object.keys(t).sort(), function (e) {
              return rU(t, e)
            }) : t
      }(t.reduce(function e(t, n) {
        return ti(t) ? t.map(function (t) {
            return e(t, n)
          }) : t && r(t, n)
      }, e))
    }

    function rW(e) {
      return void 0 !== e.args ? e.args : e.field ? K(e.field, e.variables) : null
    }

    J.setStringify(th);
    var rJ = function () {
    }, rY = function (e, t) {
      return t.fieldName
    }, rH = function (e, t, r) {
      return (0, r.mergeObjects)(e, t)
    }, rK = function (e, t) {
      return t
    }, rZ = function () {
      function e(e) {
        this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, f.pi)({dataIdFromObject: to}, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
      }

      return e.prototype.identify = function (e, t) {
        var r, n, i = this, o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
        if (o === this.rootTypenamesById.ROOT_QUERY)return ["ROOT_QUERY"];
        for (var a = t && t.storeObject || e, s = (0, f.pi)((0, f.pi)({}, t), {
          typename: o,
          storeObject: a,
          readField: t && t.readField || function () {
            var e = r$(arguments, a);
            return i.readField(e, {store: i.cache.data, variables: e.variables})
          }
        }), u = o && this.getTypePolicy(o), c = u && u.keyFn || this.config.dataIdFromObject; c;) {
          var l = c(e, s);
          if (ti(l)) c = rL(l); else {
            n = l;
            break
          }
        }
        return n = n ? String(n) : void 0, s.keyObject ? [n, s.keyObject] : [n]
      }, e.prototype.addTypePolicies = function (e) {
        var t = this;
        Object.keys(e).forEach(function (r) {
          var n = e[r], i = n.queryType, o = n.mutationType, a = n.subscriptionType, s = (0, f._T)(n, ["queryType", "mutationType", "subscriptionType"]);
          i && t.setRootTypename("Query", r), o && t.setRootTypename("Mutation", r), a && t.setRootTypename("Subscription", r), tr.call(t.toBeAdded, r) ? t.toBeAdded[r].push(s) : t.toBeAdded[r] = [s]
        })
      }, e.prototype.updateTypePolicy = function (e, t) {
        var r = this, n = this.getTypePolicy(e), i = t.keyFields, o = t.fields;

        function a(e, t) {
          e.merge = "function" == typeof t ? t : !0 === t ? rH : !1 === t ? rK : e.merge
        }

        a(n, t.merge), n.keyFn = !1 === i ? rJ : ti(i) ? rL(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function (t) {
          var n = r.getFieldPolicy(e, t, !0), i = o[t];
          if ("function" == typeof i) n.read = i; else {
            var s = i.keyArgs, u = i.read, c = i.merge;
            n.keyFn = !1 === s ? rY : ti(s) ? rG(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
          }
          n.read && n.merge && (n.keyFn = n.keyFn || rY)
        })
      }, e.prototype.setRootTypename = function (e, t) {
        void 0 === t && (t = e);
        var r = "ROOT_" + e.toUpperCase(), n = this.rootTypenamesById[r];
        t !== n && (__DEV__ ? (0, p.kG)(!n || n === e, "Cannot change root ".concat(e, " __typename more than once")) : (0, p.kG)(!n || n === e, 3), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
      }, e.prototype.addPossibleTypes = function (e) {
        var t = this;
        this.usingPossibleTypes = !0, Object.keys(e).forEach(function (r) {
          t.getSupertypeSet(r, !0), e[r].forEach(function (e) {
            t.getSupertypeSet(e, !0).add(r);
            var n = e.match(tu);
            n && n[0] === e || t.fuzzySubtypes.set(e, RegExp(e))
          })
        })
      }, e.prototype.getTypePolicy = function (e) {
        var t = this;
        if (!tr.call(this.typePolicies, e)) {
          var r = this.typePolicies[e] = Object.create(null);
          r.fields = Object.create(null);
          var n = this.supertypeMap.get(e);
          n && n.size && n.forEach(function (e) {
            var n = t.getTypePolicy(e), i = n.fields;
            Object.assign(r, (0, f._T)(n, ["fields"])), Object.assign(r.fields, i)
          })
        }
        var i = this.toBeAdded[e];
        return i && i.length && i.splice(0).forEach(function (r) {
          t.updateTypePolicy(e, r)
        }), this.typePolicies[e]
      }, e.prototype.getFieldPolicy = function (e, t, r) {
        if (e) {
          var n = this.getTypePolicy(e).fields;
          return n[t] || r && (n[t] = Object.create(null))
        }
      }, e.prototype.getSupertypeSet = function (e, t) {
        var r = this.supertypeMap.get(e);
        return !r && t && this.supertypeMap.set(e, r = new Set), r
      }, e.prototype.fragmentMatches = function (e, t, r, n) {
        var i = this;
        if (!e.typeCondition)return !0;
        if (!t)return !1;
        var o = e.typeCondition.name.value;
        if (t === o)return !0;
        if (this.usingPossibleTypes && this.supertypeMap.has(o))for (var a = this.getSupertypeSet(t, !0), s = [a], u = function (e) {
          var t = i.getSupertypeSet(e, !1);
          t && t.size && 0 > s.indexOf(t) && s.push(t)
        }, c = !!(r && this.fuzzySubtypes.size), l = !1, f = 0; f < s.length; ++f) {
          var h = s[f];
          if (h.has(o))return a.has(o) || (l && __DEV__ && p.kG.warn("Inferring subtype ".concat(t, " of supertype ").concat(o)), a.add(o)), !0;
          h.forEach(u), c && f === s.length - 1 && function e(t, r, n) {
            return !!A(r) && (ti(r) ? r.every(function (r) {
                  return e(t, r, n)
                }) : t.selections.every(function (t) {
                  if ($(t) && eh(t, n)) {
                    var i = Z(t);
                    return tr.call(r, i) && (!t.selectionSet || e(t.selectionSet, r[i], n))
                  }
                  return !0
                }))
          }(e.selectionSet, r, n) && (c = !1, l = !0, this.fuzzySubtypes.forEach(function (e, r) {
            var n = t.match(e);
            n && n[0] === t && u(r)
          }))
        }
        return !1
      }, e.prototype.hasKeyArgs = function (e, t) {
        var r = this.getFieldPolicy(e, t, !1);
        return !!(r && r.keyFn)
      }, e.prototype.getStoreFieldName = function (e) {
        var t, r, n, i, o, a = e.typename, s = e.fieldName, u = this.getFieldPolicy(a, s, !1), c = u && u.keyFn;
        if (c && a)for (var l = {
          typename: a,
          fieldName: s,
          field: e.field || null,
          variables: e.variables
        }, f = rW(e); c;) {
          var p = c(f, l);
          if (ti(p)) c = rG(p); else {
            o = p || s;
            break
          }
        }
        return void 0 === o && (o = e.field ? (t = e.field, r = e.variables, n = null, t.directives && (n = {}, t.directives.forEach(function (e) {
            n[e.name.value] = {}, e.arguments && e.arguments.forEach(function (t) {
              var i = t.name, o = t.value;
              return U(n[e.name.value], i, o, r)
            })
          })), i = null, t.arguments && t.arguments.length && (i = {}, t.arguments.forEach(function (e) {
            return U(i, e.name, e.value, r)
          })), J(t.name.value, i, n)) : J(s, rW(e))), !1 === o ? s : s === tc(o) ? o : s + ":" + o
      }, e.prototype.readField = function (e, t) {
        var r = e.from;
        if (r && (e.field || e.fieldName)) {
          if (void 0 === e.typename) {
            var n = t.store.getFieldValue(r, "__typename");
            n && (e.typename = n)
          }
          var i = this.getStoreFieldName(e), o = tc(i), a = t.store.getFieldValue(r, i), s = this.getFieldPolicy(e.typename, o, !1), u = s && s.read;
          if (u) {
            var c = rX(this, r, e, t, t.store.getStorage(B(r) ? r.__ref : r, i));
            return ru.withValue(this.cache, u, [a, c])
          }
          return a
        }
      }, e.prototype.getReadFunction = function (e, t) {
        var r = this.getFieldPolicy(e, t, !1);
        return r && r.read
      }, e.prototype.getMergeFunction = function (e, t, r) {
        var n = this.getFieldPolicy(e, t, !1), i = n && n.merge;
        return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i
      }, e.prototype.runMergeFunction = function (e, t, r, n, i) {
        var o = r.field, a = r.typename, s = r.merge;
        return s === rH ? r0(n.store)(e, t) : s === rK ? t : (n.overwrite && (e = void 0), s(e, t, rX(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
      }, e
    }();

    function rX(e, t, r, n, i) {
      var o = e.getStoreFieldName(r), a = tc(o), s = r.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
      return {
        args: rW(r),
        field: r.field || null,
        fieldName: a,
        storeFieldName: o,
        variables: s,
        isReference: B,
        toReference: c,
        storage: i,
        cache: e.cache,
        canRead: l,
        readField: function () {
          return e.readField(r$(arguments, t, s), n)
        },
        mergeObjects: r0(n.store)
      }
    }

    function r$(e, t, r) {
      var n, i, o, a = e[0], s = e[1], u = e.length;
      return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, f.pi)({}, a), tr.call(o, "from") || (o.from = t)), __DEV__ && void 0 === o.from && __DEV__ && p.kG.warn("Undefined 'from' passed to readField with arguments ".concat((n = Array.from(e), i = tS("stringifyForDisplay"), JSON.stringify(n, function (e, t) {
        return void 0 === t ? i : t
      }).split(JSON.stringify(i)).join("<undefined>")))), void 0 === o.variables && (o.variables = r), o
    }

    function r0(e) {
      return function (t, r) {
        if (ti(t) || ti(r))throw __DEV__ ? new p.ej("Cannot automatically merge arrays") : new p.ej(4);
        if (A(t) && A(r)) {
          var n = e.getFieldValue(t, "__typename"), i = e.getFieldValue(r, "__typename");
          if (n && i && n !== i)return r;
          if (B(t) && tl(r))return e.merge(t.__ref, r), t;
          if (tl(t) && B(r))return e.merge(t, r.__ref), r;
          if (tl(t) && tl(r))return (0, f.pi)((0, f.pi)({}, t), r)
        }
        return r
      }
    }

    function r1(e, t, r) {
      var n = "".concat(t).concat(r), i = e.flavors.get(n);
      return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : (0, f.pi)((0, f.pi)({}, e), {
          clientOnly: t,
          deferred: r
        })), i
    }

    var r2 = function () {
      function e(e, t, r) {
        this.cache = e, this.reader = t, this.fragments = r
      }

      return e.prototype.writeToStore = function (e, t) {
        var r = this, n = t.query, i = t.result, o = t.dataId, a = t.variables, s = t.overwrite, u = er(n), c = new e3;
        a = (0, f.pi)((0, f.pi)({}, es(u)), a);
        var l = (0, f.pi)((0, f.pi)({
          store: e, written: Object.create(null), merge: function (e, t) {
            return c.merge(e, t)
          }, variables: a, varString: th(a)
        }, tf(n, this.fragments)), {
          overwrite: !!s,
          incomingById: new Map,
          clientOnly: !1,
          deferred: !1,
          flavors: new Map
        }), h = this.processSelectionSet({
          result: i || Object.create(null),
          dataId: o,
          selectionSet: u.selectionSet,
          mergeTree: {map: new Map},
          context: l
        });
        if (!B(h))throw __DEV__ ? new p.ej("Could not identify object ".concat(JSON.stringify(i))) : new p.ej(7);
        return l.incomingById.forEach(function (t, n) {
          var i = t.storeObject, o = t.mergeTree, a = t.fieldNodeSet, s = z(n);
          if (o && o.map.size) {
            var u = r.applyMerges(o, s, i, l);
            if (B(u))return;
            i = u
          }
          if (__DEV__ && !l.overwrite) {
            var c = Object.create(null);
            a.forEach(function (e) {
              e.selectionSet && (c[e.name.value] = !0)
            });
            var f = function (e) {
              var t = o && o.map.get(e);
              return Boolean(t && t.info && t.info.merge)
            };
            Object.keys(i).forEach(function (e) {
              !0 !== c[tc(e)] || f(e) || function (e, t, r, n) {
                var i = function (e) {
                  var t = n.getFieldValue(e, r);
                  return "object" == typeof t && t
                }, o = i(e);
                if (o) {
                  var a = i(t);
                  if (!(!a || B(o) || eJ(o, a) || Object.keys(o).every(function (e) {
                      return void 0 !== n.getFieldValue(a, e)
                    }))) {
                    var s = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), u = tc(r), c = "".concat(s, ".").concat(u);
                    if (!r4.has(c)) {
                      r4.add(c);
                      var l = [];
                      ti(o) || ti(a) || [o, a].forEach(function (e) {
                        var t = n.getFieldValue(e, "__typename");
                        "string" != typeof t || l.includes(t) || l.push(t)
                      }), __DEV__ && p.kG.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(s, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(c, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(a).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))
                    }
                  }
                }
              }(s, i, e, l.store)
            })
          }
          e.merge(n, i)
        }), e.retain(h.__ref), h
      }, e.prototype.processSelectionSet = function (e) {
        var t = this, r = e.dataId, n = e.result, i = e.selectionSet, o = e.context, a = e.mergeTree, s = this.cache.policies, u = Object.create(null), c = r && s.rootTypenamesById[r] || X(n, i, o.fragmentMap) || r && o.store.get(r, "__typename");
        "string" == typeof c && (u.__typename = c);
        var l = function () {
          var e = r$(arguments, u, o.variables);
          if (B(e.from)) {
            var t = o.incomingById.get(e.from.__ref);
            if (t) {
              var r = s.readField((0, f.pi)((0, f.pi)({}, e), {from: t.storeObject}), o);
              if (void 0 !== r)return r
            }
          }
          return s.readField(e, o)
        }, h = new Set;
        this.flattenFields(i, n, o, c).forEach(function (e, r) {
          var i, o = n[Z(r)];
          if (h.add(r), void 0 !== o) {
            var f = s.getStoreFieldName({
              typename: c,
              fieldName: r.name.value,
              field: r,
              variables: e.variables
            }), d = r8(a, f), v = t.processFieldValue(o, r, r.selectionSet ? r1(e, !1, !1) : e, d), y = void 0;
            r.selectionSet && (B(v) || tl(v)) && (y = l("__typename", v));
            var m = s.getMergeFunction(c, r.name.value, y);
            m ? d.info = {field: r, typename: c, merge: m} : r5(a, f), u = e.merge(u, ((i = {})[f] = v, i))
          } else __DEV__ && !e.clientOnly && !e.deferred && !tO.added(r) && !s.getReadFunction(c, r.name.value) && __DEV__ && p.kG.error("Missing field '".concat(Z(r), "' while writing result ").concat(JSON.stringify(n, null, 2)).substring(0, 1e3))
        });
        try {
          var d = s.identify(n, {
            typename: c,
            selectionSet: i,
            fragmentMap: o.fragmentMap,
            storeObject: u,
            readField: l
          }), v = d[0], y = d[1];
          r = r || v, y && (u = o.merge(u, y))
        } catch (m) {
          if (!r)throw m
        }
        if ("string" == typeof r) {
          var g = z(r), b = o.written[r] || (o.written[r] = []);
          if (b.indexOf(i) >= 0 || (b.push(i), this.reader && this.reader.isFresh(n, g, i, o)))return g;
          var _ = o.incomingById.get(r);
          return _ ? (_.storeObject = o.merge(_.storeObject, u), _.mergeTree = function e(t, r) {
              if (t === r || !r || r9(r))return t;
              if (!t || r9(t))return r;
              var n = t.info && r.info ? (0, f.pi)((0, f.pi)({}, t.info), r.info) : t.info || r.info, i = t.map.size && r.map.size, o = {
                info: n,
                map: i ? new Map : t.map.size ? t.map : r.map
              };
              if (i) {
                var a = new Set(r.map.keys());
                t.map.forEach(function (t, n) {
                  o.map.set(n, e(t, r.map.get(n))), a.delete(n)
                }), a.forEach(function (n) {
                  o.map.set(n, e(r.map.get(n), t.map.get(n)))
                })
              }
              return o
            }(_.mergeTree, a), h.forEach(function (e) {
              return _.fieldNodeSet.add(e)
            })) : o.incomingById.set(r, {storeObject: u, mergeTree: r9(a) ? void 0 : a, fieldNodeSet: h}), g
        }
        return u
      }, e.prototype.processFieldValue = function (e, t, r, n) {
        var i = this;
        return t.selectionSet && null !== e ? ti(e) ? e.map(function (e, o) {
              var a = i.processFieldValue(e, t, r, r8(n, o));
              return r5(n, o), a
            }) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : __DEV__ ? tF(e) : e
      }, e.prototype.flattenFields = function (e, t, r, n) {
        void 0 === n && (n = X(t, e, r.fragmentMap));
        var i = new Map, o = this.cache.policies, a = new te(!1);
        return function e(s, u) {
          var c = a.lookup(s, u.clientOnly, u.deferred);
          c.visited || (c.visited = !0, s.selections.forEach(function (a) {
            if (eh(a, r.variables)) {
              var s = u.clientOnly, c = u.deferred;
              if (!(s && c) && eX(a.directives) && a.directives.forEach(function (e) {
                  var t = e.name.value;
                  if ("client" === t && (s = !0), "defer" === t) {
                    var n = K(e, r.variables);
                    n && !1 === n.if || (c = !0)
                  }
                }), $(a)) {
                var l = i.get(a);
                l && (s = s && l.clientOnly, c = c && l.deferred), i.set(a, r1(r, s, c))
              } else {
                var f = G(a, r.lookupFragment);
                if (!f && a.kind === y.h.FRAGMENT_SPREAD)throw __DEV__ ? new p.ej("No fragment named ".concat(a.name.value)) : new p.ej(8);
                f && o.fragmentMatches(f, n, t, r.variables) && e(f.selectionSet, r1(r, s, c))
              }
            }
          }))
        }(e, r), i
      }, e.prototype.applyMerges = function (e, t, r, n, i) {
        var o = this;
        if (e.map.size && !B(r)) {
          var a, s, u = !ti(r) && (B(t) || tl(t)) ? t : void 0, c = r;
          u && !i && (i = [B(u) ? u.__ref : u]);
          var l = function (e, t) {
            return ti(e) ? "number" == typeof t ? e[t] : void 0 : n.store.getFieldValue(e, String(t))
          };
          e.map.forEach(function (e, t) {
            var r = l(u, t), a = l(c, t);
            if (void 0 !== a) {
              i && i.push(t);
              var f = o.applyMerges(e, r, a, n, i);
              f !== a && (s = s || new Map).set(t, f), i && (0, p.kG)(i.pop() === t)
            }
          }), s && (r = ti(c) ? c.slice(0) : (0, f.pi)({}, c), s.forEach(function (e, t) {
            r[t] = e
          }))
        }
        return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, n, i && (a = n.store).getStorage.apply(a, i)) : r
      }, e
    }(), r3 = [];

    function r8(e, t) {
      var r = e.map;
      return r.has(t) || r.set(t, r3.pop() || {map: new Map}), r.get(t)
    }

    function r9(e) {
      return !e || !(e.info || e.map.size)
    }

    function r5(e, t) {
      var r = e.map, n = r.get(t);
      n && r9(n) && (r3.push(n), r.delete(t))
    }

    var r4 = new Set, r6 = function (e) {
      function t(t) {
        void 0 === t && (t = {});
        var r = e.call(this) || this;
        return r.watches = new Set, r.typenameDocumentCache = new Map, r.makeVar = rp, r.txCount = 0, r.config = tt(ta, t), r.addTypename = !!r.config.addTypename, r.policies = new rZ({
          cache: r,
          dataIdFromObject: r.config.dataIdFromObject,
          possibleTypes: r.config.possibleTypes,
          typePolicies: r.config.typePolicies
        }), r.init(), r
      }

      return (0, f.ZT)(t, e), t.prototype.init = function () {
        var e = this.data = new rI.Root({policies: this.policies, resultCaching: this.config.resultCaching});
        this.optimisticData = e.stump, this.resetResultCache()
      }, t.prototype.resetResultCache = function (e) {
        var t = this, r = this.storeReader, n = this.config.fragments;
        this.storeWriter = new r2(this, this.storeReader = new rV({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: ts(this.config),
          canon: e ? void 0 : r && r.canon,
          fragments: n
        }), n), this.maybeBroadcastWatch = rs(function (e, r) {
          return t.broadcastWatch(e, r)
        }, {
          max: this.config.resultCacheMaxSize, makeCacheKey: function (e) {
            var r = e.optimistic ? t.optimisticData : t.data;
            if (rq(r)) {
              var n = e.optimistic, i = e.id, o = e.variables;
              return r.makeCacheKey(e.query, e.callback, th({optimistic: n, id: i, variables: o}))
            }
          }
        }), new Set([this.data.group, this.optimisticData.group]).forEach(function (e) {
          return e.resetCaching()
        })
      }, t.prototype.restore = function (e) {
        return this.init(), e && this.data.replace(e), this
      }, t.prototype.extract = function (e) {
        return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
      }, t.prototype.read = function (e) {
        var t = e.returnPartialData;
        try {
          return this.storeReader.diffQueryAgainstStore((0, f.pi)((0, f.pi)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              config: this.config,
              returnPartialData: void 0 !== t && t
            })).result || null
        } catch (r) {
          if (r instanceof rS)return null;
          throw r
        }
      }, t.prototype.write = function (e) {
        try {
          return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
      }, t.prototype.modify = function (e) {
        if (tr.call(e, "id") && !e.id)return !1;
        var t = e.optimistic ? this.optimisticData : this.data;
        try {
          return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
      }, t.prototype.diff = function (e) {
        return this.storeReader.diffQueryAgainstStore((0, f.pi)((0, f.pi)({}, e), {
          store: e.optimistic ? this.optimisticData : this.data,
          rootId: e.id || "ROOT_QUERY",
          config: this.config
        }))
      }, t.prototype.watch = function (e) {
        var t = this;
        return this.watches.size || function (e) {
          rl(e).vars.forEach(function (t) {
            return t.attachCache(e)
          })
        }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function () {
          t.watches.delete(e) && !t.watches.size && rf(t), t.maybeBroadcastWatch.forget(e)
        }
      }, t.prototype.gc = function (e) {
        th.reset();
        var t = this.optimisticData.gc();
        return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
      }, t.prototype.retain = function (e, t) {
        return (t ? this.optimisticData : this.data).retain(e)
      }, t.prototype.release = function (e, t) {
        return (t ? this.optimisticData : this.data).release(e)
      }, t.prototype.identify = function (e) {
        if (B(e))return e.__ref;
        try {
          return this.policies.identify(e)[0]
        } catch (t) {
          __DEV__ && p.kG.warn(t)
        }
      }, t.prototype.evict = function (e) {
        if (!e.id) {
          if (tr.call(e, "id"))return !1;
          e = (0, f.pi)((0, f.pi)({}, e), {id: "ROOT_QUERY"})
        }
        try {
          return ++this.txCount, this.optimisticData.evict(e, this.data)
        } finally {
          --this.txCount || !1 === e.broadcast || this.broadcastWatches()
        }
      }, t.prototype.reset = function (e) {
        var t = this;
        return this.init(), th.reset(), e && e.discardWatches ? (this.watches.forEach(function (e) {
            return t.maybeBroadcastWatch.forget(e)
          }), this.watches.clear(), rf(this)) : this.broadcastWatches(), Promise.resolve()
      }, t.prototype.removeOptimistic = function (e) {
        var t = this.optimisticData.removeLayer(e);
        t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
      }, t.prototype.batch = function (e) {
        var t, r = this, n = e.update, i = e.optimistic, o = void 0 === i || i, a = e.removeOptimistic, s = e.onWatchUpdated, u = function (e) {
          var i = r.data, o = r.optimisticData;
          ++r.txCount, e && (r.data = r.optimisticData = e);
          try {
            return t = n(r)
          } finally {
            --r.txCount, r.data = i, r.optimisticData = o
          }
        }, c = new Set;
        return s && !this.txCount && this.broadcastWatches((0, f.pi)((0, f.pi)({}, e), {
          onWatchUpdated: function (e) {
            return c.add(e), !1
          }
        })), "string" == typeof o ? this.optimisticData = this.optimisticData.addLayer(o, u) : !1 === o ? u(this.data) : u(), "string" == typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)), s && c.size ? (this.broadcastWatches((0, f.pi)((0, f.pi)({}, e), {
            onWatchUpdated: function (e, t) {
              var r = s.call(this, e, t);
              return !1 !== r && c.delete(e), r
            }
          })), c.size && c.forEach(function (e) {
            return r.maybeBroadcastWatch.dirty(e)
          })) : this.broadcastWatches(e), t
      }, t.prototype.performTransaction = function (e, t) {
        return this.batch({update: e, optimistic: t || null !== t})
      }, t.prototype.transformDocument = function (e) {
        if (this.addTypename) {
          var t = this.typenameDocumentCache.get(e);
          return t || (t = tO(e), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t
        }
        return e
      }, t.prototype.transformForLink = function (e) {
        var t = this.config.fragments;
        return t ? t.transform(e) : e
      }, t.prototype.broadcastWatches = function (e) {
        var t = this;
        this.txCount || this.watches.forEach(function (r) {
          return t.maybeBroadcastWatch(r, e)
        })
      }, t.prototype.broadcastWatch = function (e, t) {
        var r = e.lastDiff, n = this.diff(e);
        (!t || (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0), !t.onWatchUpdated || !1 !== t.onWatchUpdated.call(this, e, n, r))) && (r && eJ(r.result, n.result) || e.callback(e.lastDiff = n, r))
      }, t
    }(rk);
    let r7 = "https://graphql.contentful.com/content/v1/spaces/".concat("fxdscjk3ilge", "/environments/").concat("master"), ne = eA({uri: r7}), nt = (a = (e, t) = > {let{headers: r} = t;
    return {
      headers: {...r,
      Authorization: "Bearer ".concat("mpoNT5nWFL6rgUDNqCbGK-ew5CEpC8imHXLhfRcBPbk"),
      "Content-Type": "application/json"
    }
  }
  },
    new ep(function (e, t) {
      var r = (0, f._T)(e, []);
      return new V(function (n) {
        var i, o = !1;
        return Promise.resolve(r).then(function (t) {
          return a(t, e.getContext())
        }).then(e.setContext).then(function () {
          o || (i = t(e).subscribe({next: n.next.bind(n), error: n.error.bind(n), complete: n.complete.bind(n)}))
        }).catch(n.error.bind(n)), function () {
          o = !0, i && i.unsubscribe()
        }
      })
    })
    ),
    nr = new rE({
      ssrMode: !1,
      defaultOptions: {query: {fetchPolicy: "cache-first", errorPolicy: "all"}},
      link: nt.concat(ne),
      cache: new r6
    })
  }, 8339: function () {
  }, 7663: function (e) {
    !function () {
      var t = {
        229: function (e) {
          var t, r, n, i = e.exports = {};

          function o() {
            throw Error("setTimeout has not been defined")
          }

          function a() {
            throw Error("clearTimeout has not been defined")
          }

          function s(e) {
            if (t === setTimeout)return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)return t = setTimeout, setTimeout(e, 0);
            try {
              return t(e, 0)
            } catch (n) {
              try {
                return t.call(null, e, 0)
              } catch (r) {
                return t.call(this, e, 0)
              }
            }
          }

          !function () {
            try {
              t = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
              t = o
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (n) {
              r = a
            }
          }();
          var u = [], c = !1, l = -1;

          function f() {
            c && n && (c = !1, n.length ? u = n.concat(u) : l = -1, u.length && p())
          }

          function p() {
            if (!c) {
              var e = s(f);
              c = !0;
              for (var t = u.length; t;) {
                for (n = u, u = []; ++l < t;)n && n[l].run();
                l = -1, t = u.length
              }
              n = null, c = !1, function (e) {
                if (r === clearTimeout)return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)return r = clearTimeout, clearTimeout(e);
                try {
                  r(e)
                } catch (n) {
                  try {
                    return r.call(null, e)
                  } catch (t) {
                    return r.call(this, e)
                  }
                }
              }(e)
            }
          }

          function h(e, t) {
            this.fun = e, this.array = t
          }

          function d() {
          }

          i.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1)for (var r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
            u.push(new h(e, t)), 1 !== u.length || c || s(p)
          }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
          }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, i.removeAllListeners = d, i.emit = d, i.prependListener = d, i.prependOnceListener = d, i.listeners = function (e) {
            return []
          }, i.binding = function (e) {
            throw Error("process.binding is not supported")
          }, i.cwd = function () {
            return "/"
          }, i.chdir = function (e) {
            throw Error("process.chdir is not supported")
          }, i.umask = function () {
            return 0
          }
        }
      }, r = {};

      function n(e) {
        var i = r[e];
        if (void 0 !== i)return i.exports;
        var o = r[e] = {exports: {}}, a = !0;
        try {
          t[e](o, o.exports, n), a = !1
        } finally {
          a && delete r[e]
        }
        return o.exports
      }

      n.ab = "//";
      var i = n(229);
      e.exports = i
    }()
  }, 9008: function (e, t, r) {
    e.exports = r(3121)
  }, 5675: function (e, t, r) {
    e.exports = r(9749)
  }, 1664: function (e, t, r) {
    e.exports = r(1551)
  }, 655: function (e, t, r) {
    "use strict";
    r.d(t, {
      Jh: function () {
        return u
      }, ZT: function () {
        return i
      }, _T: function () {
        return a
      }, ev: function () {
        return c
      }, mG: function () {
        return s
      }, pi: function () {
        return o
      }
    });
    var n = function (e, t) {
      return (n = Object.setPrototypeOf || ({__proto__: []}) instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        })(e, t)
    };

    function i(e, t) {
      if ("function" != typeof t && null !== t)throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
      function r() {
        this.constructor = e
      }

      n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }

    var o = function () {
      return (o = Object.assign || function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)for (var i in t = arguments[r])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }).apply(this, arguments)
    };

    function a(e, t) {
      var r = {};
      for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols)for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
      return r
    }

    function s(e, t, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function a(e) {
          try {
            u(n.next(e))
          } catch (t) {
            o(t)
          }
        }

        function s(e) {
          try {
            u(n.throw(e))
          } catch (t) {
            o(t)
          }
        }

        function u(e) {
          var t;
          e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(a, s)
        }

        u((n = n.apply(e, t || [])).next())
      })
    }

    function u(e, t) {
      var r, n, i, o, a = {
        label: 0, sent: function () {
          if (1 & i[0])throw i[1];
          return i[1]
        }, trys: [], ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this
      }), o;
      function s(s) {
        return function (u) {
          return function (s) {
            if (r)throw TypeError("Generator is already executing.");
            for (; o && (o = 0, s[0] && (a = 0)), a;)try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done)return i;
              switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                case 0:
                case 1:
                  i = s;
                  break;
                case 4:
                  return a.label++, {value: s[1], done: !1};
                case 5:
                  a.label++, n = s[1], s = [0];
                  continue;
                case 7:
                  s = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                    a.label = s[1];
                    break
                  }
                  if (6 === s[0] && a.label < i[1]) {
                    a.label = i[1], i = s;
                    break
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2], a.ops.push(s);
                    break
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              s = t.call(e, a)
            } catch (u) {
              s = [6, u], n = 0
            } finally {
              r = i = 0
            }
            if (5 & s[0])throw s[1];
            return {value: s[0] ? s[1] : void 0, done: !0}
          }([s, u])
        }
      }
    }

    function c(e, t, r) {
      if (r || 2 == arguments.length)for (var n, i = 0, o = t.length; i < o; i++)!n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
      return e.concat(n || Array.prototype.slice.call(t))
    }
  }, 320: function (e, t, r) {
    "use strict";
    r.d(t, {
      DN: function () {
        return s
      }, aS: function () {
        return a
      }, mr: function () {
        return i
      }, sy: function () {
        return o
      }
    });
    var n = r(3917), i = "function" == typeof WeakMap && "ReactNative" !== (0, n.wY)(function () {
        return navigator.product
      }), o = "function" == typeof WeakSet, a = "function" == typeof Symbol && "function" == typeof Symbol.for, s = a && Symbol.asyncIterator;
    (0, n.wY)(function () {
      return window.document.createElement
    }), (0, n.wY)(function () {
      return navigator.userAgent.indexOf("jsdom") >= 0
    })
  }, 3917: function (e, t, r) {
    "use strict";
    r.d(t, {
      ej: function () {
        return u
      }, kG: function () {
        return c
      }, wY: function () {
        return h
      }
    });
    var n, i = r(655), o = "Invariant Violation", a = Object.setPrototypeOf, s = void 0 === a ? function (e, t) {
        return e.__proto__ = t, e
      } : a, u = function (e) {
      function t(r) {
        void 0 === r && (r = o);
        var n = e.call(this, "number" == typeof r ? o + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
        return n.framesToPop = 1, n.name = o, s(n, t.prototype), n
      }

      return (0, i.ZT)(t, e), t
    }(Error);

    function c(e, t) {
      if (!e)throw new u(t)
    }

    var l = ["debug", "log", "warn", "error", "silent"], f = l.indexOf("log");

    function p(e) {
      return function () {
        if (l.indexOf(e) >= f)return (console[e] || console.log).apply(console, arguments)
      }
    }

    function h(e) {
      try {
        return e()
      } catch (t) {
      }
    }

    (n = c || (c = {})).debug = p("debug"), n.log = p("log"), n.warn = p("warn"), n.error = p("error");
    var d = h(function () {
        return globalThis
      }) || h(function () {
        return window
      }) || h(function () {
        return self
      }) || h(function () {
        return global
      }) || h(function () {
        return h.constructor("return this")()
      }), v = "__DEV__", y = function () {
      try {
        return Boolean(__DEV__)
      } catch (e) {
        return Object.defineProperty(d, v, {
          value: "production" !== h(function () {
            return "production"
          }), enumerable: !1, configurable: !0, writable: !0
        }), d[v]
      }
    }(), m = r(3454);

    function g(e) {
      try {
        return e()
      } catch (t) {
      }
    }

    var b = g(function () {
        return globalThis
      }) || g(function () {
        return window
      }) || g(function () {
        return self
      }) || g(function () {
        return global
      }) || g(function () {
        return g.constructor("return this")()
      }), _ = !1;
    !b || g(function () {
      return "production"
    }) || g(function () {
      return m
    }) || (Object.defineProperty(b, "process", {
      value: {env: {NODE_ENV: "production"}},
      configurable: !0,
      enumerable: !1,
      writable: !0
    }), _ = !0), r(1270).H, _ && (delete b.process, _ = !1), __DEV__ ? c("boolean" == typeof y, y) : c("boolean" == typeof y, 38)
  }, 7826: function (e, t, r) {
    "use strict";
    function n(e, t) {
      let r = Boolean(e);
      if (!r)throw Error(t)
    }

    r.d(t, {
      a: function () {
        return n
      }
    })
  }, 5821: function (e, t, r) {
    "use strict";
    function n(e) {
      return function e(t, r) {
        switch (typeof t) {
          case"string":
            return JSON.stringify(t);
          case"function":
            return t.name ? `[function ${t.name}]` : "[function]";
          case"object":
            return function (t, r) {
              if (null === t)return "null";
              if (r.includes(t))return "[Circular]";
              let n = [...r, t
              ]
              ;
              if ("function" == typeof t.toJSON) {
                let i = t.toJSON();
                if (i !== t)return "string" == typeof i ? i : e(i, n)
              } else if (Array.isArray(t))return function (t, r) {
                if (0 === t.length)return "[]";
                if (r.length > 2)return "[Array]";
                let n = Math.min(10, t.length), i = t.length - n, o = [];
                for (let a = 0; a < n; ++a)o.push(e(t[a], r));
                return 1 === i ? o.push("... 1 more item") : i > 1 && o.push(`... ${i} more items`), "[" + o.join(", ") + "]"
              }(t, n);
              return function (t, r) {
                let n = Object.entries(t);
                if (0 === n.length)return "{}";
                if (r.length > 2)return "[" + function (e) {
                    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                    if ("Object" === t && "function" == typeof e.constructor) {
                      let r = e.constructor.name;
                      if ("string" == typeof r && "" !== r)return r
                    }
                    return t
                  }(t) + "]";
                let i = n.map(([t, n]) = > t + ": " + e(n, r)
                )
                ;
                return "{ " + i.join(", ") + " }"
              }(t, n)
            }(t, r);
          default:
            return String(t)
        }
      }(e, [])
    }

    r.d(t, {
      X: function () {
        return n
      }
    })
  }, 2380: function (e, t, r) {
    "use strict";
    var n, i;
    r.d(t, {
      UG: function () {
        return c
      }, WU: function () {
        return a
      }, Ye: function () {
        return o
      }, h8: function () {
        return s
      }, ku: function () {
        return n
      }
    });
    class o {
      constructor(e, t, r) {
        this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = r
      }

      get[Symbol.toStringTag]() {
        return "Location"
      }

      toJSON() {
        return {start: this.start, end: this.end}
      }
    }
    class a {
      constructor(e, t, r, n, i, o) {
        this.kind = e, this.start = t, this.end = r, this.line = n, this.column = i, this.value = o, this.prev = null, this.next = null
      }

      get[Symbol.toStringTag]() {
        return "Token"
      }

      toJSON() {
        return {kind: this.kind, value: this.value, line: this.line, column: this.column}
      }
    }
    let s = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
      InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    }, u = new Set(Object.keys(s));

    function c(e) {
      let t = null == e ? void 0 : e.kind;
      return "string" == typeof t && u.has(t)
    }

    (i = n || (n = {})).QUERY = "query", i.MUTATION = "mutation", i.SUBSCRIPTION = "subscription"
  }, 7392: function (e, t, r) {
    "use strict";
    r.d(t, {
      LZ: function () {
        return o
      }, wv: function () {
        return i
      }
    });
    var n = r(8297);

    function i(e) {
      var t, r;
      let i = Number.MAX_SAFE_INTEGER, o = null, a = -1;
      for (let s = 0; s < e.length; ++s) {
        let u = e[s], c = function (e) {
          let t = 0;
          for (; t < e.length && (0, n.FD)(e.charCodeAt(t));)++t;
          return t
        }(u);
        c !== u.length && (o = null !== (r = o) && void 0 !== r ? r : s, a = s, 0 !== s && c < i && (i = c))
      }
      return e.map((e, t) = > 0 === t ? e : e.slice(i)
    ).
      slice(null !== (t = o) && void 0 !== t ? t : 0, a + 1)
    }

    function o(e, t) {
      let r = e.replace(/"""/g, '\\"""'), i = r.split(/\r\n|[\n\r]/g), o = 1 === i.length, a = i.length > 1 && i.slice(1).every(e = > 0 === e.length || (0, n.FD)(e.charCodeAt(0))
    ),
      s = r.endsWith('\\"""'), u = e.endsWith('"') && !s, c = e.endsWith("\\"), l = u || c, f = !(null != t && t.minimize) && (!o || e.length > 70 || l || a || s), p = "", h = o && (0, n.FD)(e.charCodeAt(0));
      return (f && !h || a) && (p += "\n"), p += r, (f || l) && (p += "\n"), '"""' + p + '"""'
    }
  }, 8297: function (e, t, r) {
    "use strict";
    function n(e) {
      return 9 === e || 32 === e
    }

    function i(e) {
      return e >= 48 && e <= 57
    }

    function o(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90
    }

    function a(e) {
      return o(e) || 95 === e
    }

    function s(e) {
      return o(e) || i(e) || 95 === e
    }

    r.d(t, {
      FD: function () {
        return n
      }, HQ: function () {
        return s
      }, LQ: function () {
        return a
      }, X1: function () {
        return i
      }
    })
  }, 7359: function (e, t, r) {
    "use strict";
    var n, i;
    r.d(t, {
      h: function () {
        return n
      }
    }), (i = n || (n = {})).NAME = "Name", i.DOCUMENT = "Document", i.OPERATION_DEFINITION = "OperationDefinition", i.VARIABLE_DEFINITION = "VariableDefinition", i.SELECTION_SET = "SelectionSet", i.FIELD = "Field", i.ARGUMENT = "Argument", i.FRAGMENT_SPREAD = "FragmentSpread", i.INLINE_FRAGMENT = "InlineFragment", i.FRAGMENT_DEFINITION = "FragmentDefinition", i.VARIABLE = "Variable", i.INT = "IntValue", i.FLOAT = "FloatValue", i.STRING = "StringValue", i.BOOLEAN = "BooleanValue", i.NULL = "NullValue", i.ENUM = "EnumValue", i.LIST = "ListValue", i.OBJECT = "ObjectValue", i.OBJECT_FIELD = "ObjectField", i.DIRECTIVE = "Directive", i.NAMED_TYPE = "NamedType", i.LIST_TYPE = "ListType", i.NON_NULL_TYPE = "NonNullType", i.SCHEMA_DEFINITION = "SchemaDefinition", i.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", i.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", i.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", i.FIELD_DEFINITION = "FieldDefinition", i.INPUT_VALUE_DEFINITION = "InputValueDefinition", i.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", i.UNION_TYPE_DEFINITION = "UnionTypeDefinition", i.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", i.ENUM_VALUE_DEFINITION = "EnumValueDefinition", i.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", i.DIRECTIVE_DEFINITION = "DirectiveDefinition", i.SCHEMA_EXTENSION = "SchemaExtension", i.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", i.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", i.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", i.UNION_TYPE_EXTENSION = "UnionTypeExtension", i.ENUM_TYPE_EXTENSION = "EnumTypeExtension", i.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
  }, 1270: function (e, t, r) {
    "use strict";
    r.d(t, {
      H: function () {
        return o
      }, T: function () {
        return a
      }
    });
    var n = r(7826), i = r(5821);
    class o {
      constructor(e, t = "GraphQL request", r = {line: 1, column: 1}) {
        "string" == typeof e || (0, n.a)(!1, `Body must be a string. Received: ${(0, i.X)(e)}.`), this.body = e, this.name = t, this.locationOffset = r, this.locationOffset.line > 0 || (0, n.a)(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, n.a)(!1, "column in locationOffset is 1-indexed and must be positive.")
      }

      get[Symbol.toStringTag]() {
        return "Source"
      }
    }
    function a(e) {
      return e instanceof o
    }
  }
}, function (e) {
  var t = function (t) {
    return e(e.s = t)
  };
  e.O(0, [774, 179], function () {
    return t(6840), t(880)
  }), _N_E = e.O()
}]);