var __export = /******/
    function(t) {
        /******/
        /******/
        // The require function
        /******/
        function e(a) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (n[a]) /******/
                return n[a].exports; /******/
            // Create a new module (and put it into the cache)
            /******/
            var r = n[a] = {
                /******/
                i: a,
                /******/
                l: !1,
                /******/
                exports: {}
            }; /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return t[a].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        } // webpackBootstrap
        /******/
        // The module cache
        /******/
        var n = {}; /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // identity function for calling harmony imports with the correct context
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, a) {
            /******/
            e.o(t, n) || /******/
                Object.defineProperty(t, n, {
                    /******/
                    configurable: !1,
                    /******/
                    enumerable: !0,
                    /******/
                    get: a
                })
        }, e.n = function(t) {
            /******/
            var n = t && t.__esModule ? /******/
                function() {
                    return t.default
                } : /******/
                function() {
                    return t
                }; /******/
            /******/
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 18)
    }([ /* 0 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t() {
                    a(this, t), this.listeners = {}
                }
                return r(t, [{
                    key: "addListener",
                    value: function(t, e) {
                        this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e)
                    }
                }, {
                    key: "removeListener",
                    value: function(t, e) {
                        if (this.listeners[t]) {
                            var n = this.listeners[t].indexOf(e); - 1 != n && this.listeners[t].splice(n, 1)
                        }
                    }
                }, {
                    key: "removeListeners",
                    value: function(t) {
                        t ? delete this.listeners[t] : this.listeners = {}
                    }
                }, {
                    key: "trigger",
                    value: function(t, e) {
                        var n = "*" == t ? ["*"] : ["*", t],
                            a = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var s, o = n[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                var u = s.value;
                                if (this.listeners.hasOwnProperty(u)) {
                                    var c = !0,
                                        l = !1,
                                        f = void 0;
                                    try {
                                        for (var v, h = this.listeners[u][Symbol.iterator](); !(c = (v = h.next()).done); c = !0) {
                                            (0, v.value)(e)
                                        }
                                    } catch (t) {
                                        l = !0, f = t
                                    } finally {
                                        try {
                                            !c && h.return && h.return()
                                        } finally {
                                            if (l) throw f
                                        }
                                    }
                                }
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !a && o.return && o.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    }
                }]), t
            }();
            e.default = i
        }, /* 1 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(5),
                s = n(0);
            e.TabEvent = {
                select: "tab:select"
            };
            var o = function() {
                function t(e, n) {
                    var r = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    a(this, t), this.tabs = i(), this.tabsContent = i(), this.eventManager = new s.default, this.activeClass = n, this.tabs = i(e), this.tabsContent = i(o), this.tabs.click(function(t) {
                        r.switchTab(i(t.currentTarget))
                    });
                    var u = this.getActiveTab();
                    u.length ? this.toggleTabContent(u) : this.switchTab(i(this.tabs.get(0)))
                }
                return r(t, [{
                    key: "getEventManager",
                    value: function() {
                        return this.eventManager
                    }
                }, {
                    key: "getTabs",
                    value: function() {
                        return this.tabs
                    }
                }, {
                    key: "getActiveTab",
                    value: function() {
                        return this.getTabs().filter("." + this.activeClass)
                    }
                }, {
                    key: "isTabActive",
                    value: function(t) {
                        return t.get(0) == this.getActiveTab().get(0)
                    }
                }, {
                    key: "getActiveTabName",
                    value: function() {
                        return this.getActiveTab().data("tab")
                    }
                }, {
                    key: "getTabsContent",
                    value: function() {
                        return this.tabsContent
                    }
                }, {
                    key: "getTabContent",
                    value: function(t) {
                        return this.getTabsContent().filter("[data-tab-content=" + t + "]")
                    }
                }, {
                    key: "getActiveTabContent",
                    value: function() {
                        return this.getTabsContent().filter("." + this.activeClass)
                    }
                }, {
                    key: "switchTab",
                    value: function(t) {
                        this.tabs.is(t) && !this.getActiveTab().is(t) && (this.tabs.removeClass(this.activeClass), t.addClass(this.activeClass), this.toggleTabContent(t), this.eventManager.trigger(e.TabEvent.select, t))
                    }
                }, {
                    key: "toggleTabContent",
                    value: function(t) {
                        var e = t.data("tab");
                        e && this.tabsContent.css({
                            display: "none"
                        }).removeClass(this.activeClass).filter("[data-tab-content=" + e + "]").addClass(this.activeClass).css({
                            display: ""
                        })
                    }
                }, {
                    key: "switchTabByName",
                    value: function(t) {
                        this.switchTab(this.tabs.filter("[data-tab=" + t + "]"))
                    }
                }]), t
            }();
            e.default = o
        }, /* 2 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t() {
                    a(this, t)
                }
                return r(t, [{
                    key: "getSpread",
                    value: function(t, e) {
                        return Math.pow(10, e) * (t.ask - t.bid)
                    }
                }]), t
            }();
            e.default = i
        }, /* 3 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(0);
            e.QuoteEvent = {
                quoteUpdate: "quoteUpdate",
                quoteHistory: "quoteHistory",
                requestHistory: "requestQuoteHistory"
            };
            var s = function() {
                function t(n) {
                    var r = this,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30;
                    a(this, t), this.history = {}, this.eventManager = new i.default, this.wsClient = n, this.historyLimit = s > 0 ? s : 1, n.getEventManager().addListener(e.QuoteEvent.quoteUpdate, function(t) {
                        r.pushHistory(t), r.getEventManager().trigger(t.symbolName, t)
                    }), n.getEventManager().addListener(e.QuoteEvent.quoteHistory, function(t) {
                        var e = void 0,
                            n = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) e = s.value, r.pushHistory(e)
                        } catch (t) {
                            a = !0, i = t
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        e && r.getEventManager().trigger(e.symbolName, e)
                    })
                }
                return r(t, [{
                    key: "getEventManager",
                    value: function() {
                        return this.eventManager
                    }
                }, {
                    key: "prefetchData",
                    value: function(t) {
                        this.history = t
                    }
                }, {
                    key: "pushHistory",
                    value: function(t) {
                        this.history[t.symbolName] = this.history[t.symbolName] || [], this.history[t.symbolName].push(t);
                        var e = this.history[t.symbolName].length;
                        e > this.historyLimit && this.history[t.symbolName].splice(0, e - this.historyLimit)
                    }
                }, {
                    key: "getQuote",
                    value: function(t) {
                        if (this.history.hasOwnProperty(t)) return this.history[t][this.history[t].length - 1]
                    }
                }, {
                    key: "getQuoteHistory",
                    value: function(t) {
                        return this.history.hasOwnProperty(t) ? this.history[t] : []
                    }
                }, {
                    key: "addQuoteListener",
                    value: function(t, e) {
                        this.getEventManager().addListener(t, e)
                    }
                }, {
                    key: "detachQuoteListener",
                    value: function(t, e) {
                        this.getEventManager().removeListener(t, e)
                    }
                }, {
                    key: "requestQuoteHistory",
                    value: function(t) {
                        this.wsClient.send({
                            type: e.QuoteEvent.requestHistory,
                            symbolName: t,
                            length: this.historyLimit
                        })
                    }
                }]), t
            }();
            e.default = s
        }, /* 4 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                    }
                }
                return function(e, n, a) {
                    return n && t(e.prototype, n), a && t(e, a), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, s = n(0);
            ! function(t) {
                t[t.CLOSED = 0] = "CLOSED", t[t.PENDING = 1] = "PENDING", t[t.OPEN = 2] = "OPEN", t[t.ERROR = 3] = "ERROR"
            }(i = e.ConnectionStatus || (e.ConnectionStatus = {}));
            var o = function() {
                function t(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    a(this, t), this.listeners = {}, this.connectStatus = i.CLOSED, this.eventManager = new s.default, this.queue = [], this.url = e, n && this.connect()
                }
                return r(t, [{
                    key: "connect",
                    value: function(t) {
                        var e = this;
                        if (t || this.connectStatus == i.CLOSED) {
                            var n = new WebSocket(this.url);
                            this.connectStatus = i.PENDING, n.onerror = function(t) {
                                throw new Error(t.message)
                            }, n.onopen = function() {
                                e.connectStatus = i.OPEN;
                                var t = e.queue.splice(0, e.queue.length),
                                    n = !0,
                                    a = !1,
                                    r = void 0;
                                try {
                                    for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                                        var u = s.value;
                                        e.send(u)
                                    }
                                } catch (t) {
                                    a = !0, r = t
                                } finally {
                                    try {
                                        !n && o.return && o.return()
                                    } finally {
                                        if (a) throw r
                                    }
                                }
                            }, n.onclose = function(t) {
                                t.wasClean ? e.connectStatus = i.CLOSED : e.connectStatus = i.ERROR
                            }, n.onmessage = function(t) {
                                var n = e.parseMessage(t);
                                e.eventManager.trigger(n.event, n.payload)
                            }, this.ws = n
                        }
                    }
                }, {
                    key: "isConnected",
                    value: function() {
                        return this.connectStatus == i.OPEN
                    }
                }, {
                    key: "send",
                    value: function(t) {
                        "string" != typeof t && (t = JSON.stringify(t)), this.isConnected() ? this.ws.send(t) : this.queue.push(t)
                    }
                }, {
                    key: "parseMessage",
                    value: function(t) {
                        var e = void 0;
                        try {
                            e = JSON.parse(t.data)
                        } catch (t) {}
                        return e
                    }
                }, {
                    key: "getEventManager",
                    value: function() {
                        return this.eventManager
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.ws && this.ws.close()
                    }
                }]), t
            }();
            e.default = o
        }, /* 5 */
        /***/
        function(t, e) {
            t.exports = jQuery
        }, /* 6 */ , /* 7 */ , /* 8 */ , /* 9 */ , /* 10 */ , /* 11 */ , /* 12 */ , /* 13 */ , /* 14 */ , /* 15 */ , /* 16 */ , /* 17 */ , /* 18 */
        /***/
        function(t, e, n) {
            "use strict";

            function a(t) {
                if (t.isTradingActive) {
                    var e = new r.default("[data-tab].js-spread-cntrl__item", "_selected"),
                        n = new i.default(t.wsUrl),
                        a = new s.default(n, 30),
                        u = new o.default,
                        c = e.getActiveTab().attr("data-tab"),
                        l = $(".js-spread-val"),
                        f = $(".js-spread-container");
                    e.getTabs().each(function(t, e) {
                        var n = $(e),
                            r = +n.attr("data-pip-position"),
                            i = n.attr("data-tab");
                        a.addQuoteListener(i, function(t) {
                            var e = n.attr("data-spread"),
                                a = u.getSpread(t, r).toFixed(1);
                            a != e && n.attr("data-direction", "").attr("data-direction", a > e ? "_up" : "_down").attr("data-spread", a), i == c && a != e && l.removeClass("_up _down").addClass(a > e ? "_up" : "_down").text(a)
                        }), a.requestQuoteHistory(i)
                    }), e.getEventManager().addListener(r.TabEvent.select, function(t) {
                        f.find(".spread-cur__title").text(t.attr("data-symbol-description")), f.find(".spread-cur__name").text(t.attr("data-tab")), l.removeClass("_up _down").addClass(t.attr("data-direction")).text(t.attr("data-spread")), c = t.attr("data-tab")
                    })
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(1),
                i = n(4),
                s = n(3),
                o = n(2);
            e.default = a
        }
    ]);