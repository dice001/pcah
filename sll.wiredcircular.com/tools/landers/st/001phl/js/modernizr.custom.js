/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-inlinesvg-smil-svgclippaths-touchevents-video-domprefixes-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in C)
            if (C.hasOwnProperty(c)) {
                if (e = [], t = C[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), S.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (T && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? b.className.baseVal = t : b.className = t)
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function c() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function l() {
        var e = t.body;
        return e || (e = c(T ? "svg" : "body"), e.fake = !0), e
    }

    function u(e, n, r, a) {
        var o, i, s, u, d = "modernizr",
            f = c("div"),
            p = l();
        if (parseInt(r, 10))
            for (; r--;) s = c("div"), s.id = a ? a[r] : d + (r + 1), f.appendChild(s);
        return o = c("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? f(a, n || t) : a);
        return !1
    }

    function m(t, n, r) {
        var a;
        if ("getComputedStyle" in e) {
            a = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== a) r && (a = a.getPropertyValue(r));
            else if (o) {
                var i = o.error ? "error" : "log";
                o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else a = !n && t.currentStyle && t.currentStyle[r];
        return a
    }

    function v(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(s(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + s(t[a]) + ":" + r + ")");
            return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }

    function h(e, t, a, o) {
        function s() {
            u && (delete D.style, delete D.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var l = v(e, a);
            if (!r(l, "undefined")) return l
        }
        for (var u, f, p, m, h, g = ["modernizr", "tspan", "samp"]; !D.style && g.length;) u = !0, D.modElem = c(g.shift()), D.style = D.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], h = D.style[m], d(m, "-") && (m = i(m)), D.style[m] !== n) {
                if (o || r(a, "undefined")) return s(), "pfx" == t ? m : !0;
                try {
                    D.style[m] = a
                } catch (y) {}
                if (D.style[m] != h) return s(), "pfx" == t ? m : !0
            }
        return s(), !1
    }

    function g(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + M.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, a, o) : (s = (e + " " + P.join(i + " ") + i).split(" "), p(s, t, n))
    }

    function y(e, t, r) {
        return g(e, n, n, t, r)
    }
    var S = [],
        C = [],
        w = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr;
    var x = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = x;
    var b = t.documentElement,
        T = "svg" === b.nodeName.toLowerCase();
    T || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = S.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = S.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), S.elements = n + " " + e, l(t)
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, g++, e[h] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), d) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : v.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), d) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return S.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(S, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return !S.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || c(e, r), e
        }
        var u, d, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            v = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            g = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, d = !0
            }
        }();
        var S = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = S, l(t), "object" == typeof module && module.exports && (module.exports = S)
    }("undefined" != typeof e ? e : this, t);
    var E = "Moz O ms Webkit",
        P = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
    w._domPrefixes = P;
    var _ = function(e, t) {
        var n = !1,
            r = c("div"),
            a = r.style;
        if (e in a) {
            var o = P.length;
            for (a[e] = t, n = a[e]; o-- && !n;) a[e] = "-" + P[o] + "-" + t, n = a[e]
        }
        return "" === n && (n = !1), n
    };
    w.prefixedCSSValue = _, Modernizr.addTest("audio", function() {
        var e = c("audio"),
            t = !1;
        try {
            t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = c("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("video", function() {
        var e = c("video"),
            t = !1;
        try {
            t = !!e.canPlayType, t && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("inlinesvg", function() {
        var e = c("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    });
    var N = "CSS" in e && "supports" in e.CSS,
        z = "supportsCSS" in e;
    Modernizr.addTest("supports", N || z);
    var $ = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test($.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test($.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    });
    var j = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return u("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    w.mq = j;
    var k = w.testStyles = u;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var r = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            k(r, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    });
    var M = w._config.usePrefixes ? E.split(" ") : [];
    w._cssomPrefixes = M;
    var F = function(t) {
        var r, a = x.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = x[i],
                c = s.toUpperCase() + "_" + r;
            if (c in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    w.atRule = F;
    var L = {
        elem: c("modernizr")
    };
    Modernizr._q.push(function() {
        delete L.elem
    });
    var D = {
        style: L.elem.style
    };
    Modernizr._q.unshift(function() {
        delete D.style
    }), w.testAllProps = g;
    var A = w.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? F(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? g(e, t, n) : g(e, "pfx"))
    };
    w.prefixedCSS = function(e) {
        var t = A(e);
        return t && s(t)
    };
    w.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
    }), Modernizr.addTest("csstransforms3d", function() {
        var e = !!y("perspective", "1px", !0),
            t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in b.style)) {
            var n, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", k(r + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), a(), o(S), delete w.addTest, delete w.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);