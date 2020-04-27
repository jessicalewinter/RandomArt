! function(t) {
    function r(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports
    }
    var o = {};
    r.m = t, r.c = o, r.p = "", r(0)
}([function(t, r, o) {
    t.exports = o(1)
}, function(t, r) {
    "use strict"
}]);;
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 136)
}([function(e, t, n) {
    e.exports = n(62)()
}, function(e, t, n) {
    e.exports = {
        root: "ZYbS1ydNshXqWL4Z-Rsy_",
        button: "_1LwJquGn4jKlgopRwWISQx",
        header: "_16YDRBM-xXq0BGeFpjpikE",
        status: "_1eorU05wGzReVF5Q0UL_r1",
        title: "_3WvwWnblBOcr3_v1hTQuc_",
        description: "_2eNDedSrHXK43x1Cbe4f3P",
        optionContainer: "_2QhIEF6RmZea473fG5uEsS",
        option: "_2pTVTMO946qihR8YM4YNBa",
        text: "_3vtavexDbmPIb4Fqm3uUZz",
        result: "_3gGw8SHep-e8kz5Tf1b-rB",
        percentageBar: "fC_Ln3WK655TilX0T9eU9",
        percentageInnerBar: "_7uLdPLALa0LcTpsLaffEd",
        progressBar: "_19HIjW1e5zGUQW1wtM0jgN",
        progressBarAnimation: "bw9F3Ow5CBEgqPf3YzHvB",
        disabled: "SeNG1lB5WrfOhq0a5F-5w",
        media: "DW1W2wsM6DmADjV8J3pKK"
    }
}, function(e, t, n) {
    var r;
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i) e.push(r);
                    else if (Array.isArray(r) && r.length) {
                        var a = o.apply(null, r);
                        a && e.push(a)
                    } else if ("object" === i)
                        for (var c in r) n.call(r, c) && r[c] && e.push(c)
                }
            }
            return e.join(" ")
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
            return o
        }.apply(t, [])) || (e.exports = r)
    }()
}, function(e, t, n) {
    e.exports = {
        root: "_2_WSDWQRJI5UJ8H35Tl45F",
        feedback: "ck32eDCQc4yylSdyxR5nD",
        option: "_110JvxnSBkwFoChx7aQmqg",
        header: "xBBqy6uTsBWc5yYi2FQ7G",
        ads: "FDlWItNjz4p1VI9CAImti",
        title: "_227HfHG4GNdAkpHy4WbVrF",
        optionTitle: "xBYugtUIEoIIOrttJQk-I",
        media: "Or0nGcVNoN6s3Dqvx7-2b",
        footer: "_26X4BQNR1glbHQ1u5pyr4E",
        sectionComponent: "_38LiUDCiUs_Lo1KgYik69G"
    }
}, function(e, t, n) {
    var r = n(38),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o, i, a, c) {
        if (!e) {
            var s;
            if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, r, o, i, a, c],
                    l = 0;
                (s = new Error(t.replace(/%s/g, (function() {
                    return u[l++]
                })))).name = "Invariant Violation"
            }
            throw s.framesToPop = 1, s
        }
    }
}, function(e, t, n) {
    e.exports = {
        root: "_2tD_QSR2Tqe3JXUEyCCrOJ",
        subHeader: "NBfx6PTFr8gTeSqHfwiRo",
        title: "_2x87IkIOV0Hc6_nC0W1t6U",
        description: "_2DdxnA76togeAdyeSBoCVB",
        media: "_3mkMkukUIBW2zCoVL19ZjW",
        titleAndImage: "vvLMm5J_HGL4Mqx_pdjAW",
        imgHeader: "_2yNntXFXA7IHuWXYLJbeDt"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_3HY6tUrdeykwokPXP7PdwT",
        option: "_2E7_CSqCG0v-8RqBa0A3YA",
        text: "_21TgL80MNap3Ua4HvZTb4t",
        selected: "_2aD4IDjNuQn6421Wiyamez",
        processing: "_3js4ON5rRWpTG4GZWlfxkB",
        disabled: "PM-8u-pSToeKGIgB_UJPh",
        error: "oQvm4Wv5bJwwRqGZcSSV2",
        media: "_34NeQRx2aJ10lkcITajV0f"
    }
}, function(e, t, n) {
    e.exports = {
        root: "SWz0tSzJ7rS_Egn3djM13",
        message: "_17jfgHi_x0-Q1Fod1WDmfT",
        tryAgain: "_8nZBPk8ndYWXG_Na58NqC",
        text: "_2XK_NhgIdL6MZpDwBxyMHa",
        title: "_1qjnBkevP37UhrlPOrRRTy",
        feedbackImage: "_3UoLpRQYnOsmSH3i-NZzrW"
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(80),
        o = n(85);
    e.exports = function(e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isUnpublishing = t.isPublishing = t.isClosing = t.isEverPublished = t.isPublished = t.isOpen = t.isUnpublished = t.isOngoingDraft = t.isOngoing = t.isDraft = t.isDeleted = t.isClosed = t.default = t.EXCLUIDO = t.DESPUBLICADO = t.ENCERRADO = t.EM_ANDAMENTO_RASCUNHO = t.EM_ANDAMENTO = t.RASCUNHO = void 0;
    var r, o = (r = n(66)) && r.__esModule ? r : {
        default: r
    };
    var i = {
        name: "Rascunho",
        slug: "rascunho",
        type: "draft"
    };
    t.RASCUNHO = i;
    var a = {
        name: "Em andamento",
        slug: "em-andamento",
        type: "published"
    };
    t.EM_ANDAMENTO = a;
    var c = {
        name: "Em andamento",
        slug: "em-andamento",
        type: "published-draft"
    };
    t.EM_ANDAMENTO_RASCUNHO = c;
    var s = {
        name: "Encerrado",
        slug: "encerrado",
        type: "published"
    };
    t.ENCERRADO = s;
    var u = {
        name: "Despublicado",
        slug: "despublicado",
        type: "unpublished"
    };
    t.DESPUBLICADO = u;
    var l = {
        name: "ExcluÃ­do",
        slug: "excluido",
        type: "unpublished"
    };
    t.EXCLUIDO = l;
    var f = {
        RASCUNHO: i,
        EM_ANDAMENTO: a,
        EM_ANDAMENTO_RASCUNHO: c,
        ENCERRADO: s,
        DESPUBLICADO: u,
        EXCLUIDO: l
    };
    t.default = f;
    var p = function(e, t) {
            return (0, o.default)(e, t)
        },
        d = function(e) {
            return p(e, s)
        };
    t.isClosed = d;
    t.isDeleted = function(e) {
        return p(e, l)
    };
    t.isDraft = function(e) {
        return p(e, i)
    };
    var h = function(e) {
        return p(e, a)
    };
    t.isOngoing = h;
    var v = function(e) {
        return p(e, c)
    };
    t.isOngoingDraft = v;
    var y = function(e) {
        return p(e, u)
    };
    t.isUnpublished = y;
    var m = function(e) {
        return h(e) || v(e)
    };
    t.isOpen = m;
    var _ = function(e) {
        return m(e) || d(e)
    };
    t.isPublished = _;
    t.isEverPublished = function(e) {
        return _(e) || y(e)
    };
    t.isClosing = function(e, t) {
        return m(e) && d(t)
    };
    t.isPublishing = function(e, t) {
        return !_(e) && _(t)
    };
    t.isUnpublishing = function(e, t) {
        return _(e) && !_(t)
    }
}, function(e, t, n) {
    e.exports = {
        root: "_3xDixtS9TduMA-tXdgvxyM",
        avoidClick: "_2tn0Du_kvLdHWSOAbNCJ1U",
        hidden: "_3K2tKh1AYa0PLQhtJ--6LJ",
        slideInUp: "_3bPJFcsyTh17oLpA-Zugj4",
        fadeIn: "_2Pew7ybocyFGE7NnNDvN5-",
        fadeOut: "_31b3B0v2LmupQHAGYhNosF"
    }
}, function(e, t, n) {
    e.exports = {
        root: "IpYr6ADJ3lSY03XkuEzDl",
        fadeIn: "_1GQv2BW9hI_M0fvNW_PMYF",
        immediate: "_25OdgX6tJKU1QkbpINda02",
        delayed: "_3xtvS5BUQfFlxT9CqQn-6k",
        spinner: "_217E4aO_TcYFbzlstG35lt",
        spin: "_3YgfO3nA_cl7yiSiCZu5Ec",
        text: "_1y_JKT5nijMAv76PFKrGYR"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_2ErbYs6T5cefs4oQOnNacD",
        overlay: "_13BeQaNDs7lZEzkV7hrfXf",
        contentWithoutIcon: "_2nqrHvpRK7EfLbc9iIpmah",
        contentWithIcon: "_2c96kNCJ2_doxtCvUl57y5"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_3r3RdEIll7uq_0_Uw0y4bn",
        header: "_2fwpswaekej0CwAnASjFjw",
        title: "_14uLULLIYkW0Pmt_i6sUIf",
        message: "_1aN3s34WejJ19uEYmdcim",
        ads: "_1MefpCoWWiEUtt0KvFgjjY"
    }
}, function(e, t, n) {
    var r = n(70),
        o = n(71),
        i = n(72),
        a = n(73),
        c = n(74);

    function s(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, e.exports = s
}, function(e, t, n) {
    var r = n(36);
    e.exports = function(e, t) {
        for (var n = e.length; n--;)
            if (r(e[n][0], t)) return n;
        return -1
    }
}, function(e, t, n) {
    var r = n(29),
        o = n(81),
        i = n(82),
        a = "[object Null]",
        c = "[object Undefined]",
        s = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? c : a : s && s in Object(e) ? o(e) : i(e)
    }
}, function(e, t, n) {
    var r = n(10)(Object, "create");
    e.exports = r
}, function(e, t, n) {
    var r = n(94);
    e.exports = function(e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
}, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }
}, function(e, t, n) {
    e.exports = {
        root: "_1UHCB-wMdWNH3p5bk6q0z_"
    }
}, function(e, t, n) {
    e.exports = {
        root: "UduX2NRlJIK9ZCb-oWyfq",
        brandedDescription: "_3uNW2cvKaxJXw0MW0oBwSk",
        brandedLogo: "_3xTPIihWhGhZ4RSSZPZ57i"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_33S1Js7uFoTH2x93VplvHU",
        sticky: "_1U7QQM51lOUP3y70vwfCb-",
        notSticky: "_3vyNh01oO70gTLn8Qh4P0s"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_2DsRxsoPgkhrq5exq-TSVO",
        slideOutUp: "pTdOa1qW53AXKUNrkHRTF",
        slideInUp: "_3M1fsY9h_24E_2_VKAjcJ6",
        slideInDown: "_2cZtCsRea_lK2Xi3dqwru"
    }
}, function(e, t, n) {
    e.exports = {
        button: "T_YgdT6l_inPxOca5wBtJ",
        primary: "_2FQp0pTz1KSUdFKaO754EC",
        secondary: "_2RjyrYPBfsBdGOr7nhS-82"
    }
}, function(e, t, n) {
    var r = n(10)(n(4), "Map");
    e.exports = r
}, function(e, t, n) {
    var r = n(4).Symbol;
    e.exports = r
}, function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, function(e, t, n) {
    "use strict";
    e.exports = n(64)
}, function(e, t, n) {
    "use strict";
    var r = n(31),
        o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        c = {};

    function s(e) {
        return r.isMemo(e) ? a : c[e.$$typeof] || o
    }
    c[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    };
    var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        h = Object.prototype;
    e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
            if (h) {
                var o = d(n);
                o && o !== h && e(t, o, r)
            }
            var a = l(n);
            f && (a = a.concat(f(n)));
            for (var c = s(t), v = s(n), y = 0; y < a.length; ++y) {
                var m = a[y];
                if (!(i[m] || r && r[m] || v && v[m] || c && c[m])) {
                    var _ = p(n, m);
                    try {
                        u(t, m, _)
                    } catch (e) {}
                }
            }
            return t
        }
        return t
    }
}, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o, i = n(48);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = Object(i.a)(o);
        t.a = a
    }).call(this, n(9), n(65)(e))
}, function(e, t, n) {
    e.exports = {
        root: "_10NB5ccTCqPCo-V5uA0PnC",
        resultButton: "_1RroWR7VzIfMLtf_L6W2dY"
    }
}, function(e, t, n) {
    e.exports = {
        icon: "KKq4FwlIfXfqHD2Zh57Su",
        root: "_1oguW9yEEp9jVigiHaIUQE"
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, function(e, t, n) {
    var r = n(18),
        o = n(39),
        i = "[object AsyncFunction]",
        a = "[object Function]",
        c = "[object GeneratorFunction]",
        s = "[object Proxy]";
    e.exports = function(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return t == a || t == c || t == i || t == s
    }
}, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(this, n(9))
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t) {
    var n = Function.prototype.toString;
    e.exports = function(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function(e, t, n) {
    var r = n(86),
        o = n(93),
        i = n(95),
        a = n(96),
        c = n(97);

    function s(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, e.exports = s
}, function(e, t, n) {
    var r = n(98),
        o = n(101),
        i = n(102),
        a = 1,
        c = 2;
    e.exports = function(e, t, n, s, u, l) {
        var f = n & a,
            p = e.length,
            d = t.length;
        if (p != d && !(f && d > p)) return !1;
        var h = l.get(e);
        if (h && l.get(t)) return h == t;
        var v = -1,
            y = !0,
            m = n & c ? new r : void 0;
        for (l.set(e, t), l.set(t, e); ++v < p;) {
            var _ = e[v],
                b = t[v];
            if (s) var g = f ? s(b, _, v, t, e, l) : s(_, b, v, e, t, l);
            if (void 0 !== g) {
                if (g) continue;
                y = !1;
                break
            }
            if (m) {
                if (!o(t, (function(e, t) {
                        if (!i(m, t) && (_ === e || u(_, e, n, s, l))) return m.push(t)
                    }))) {
                    y = !1;
                    break
                }
            } else if (_ !== b && !u(_, b, n, s, l)) {
                y = !1;
                break
            }
        }
        return l.delete(e), l.delete(t), y
    }
}, function(e, t, n) {
    (function(e) {
        var r = n(4),
            o = n(119),
            i = t && !t.nodeType && t,
            a = i && "object" == typeof e && e && !e.nodeType && e,
            c = a && a.exports === i ? r.Buffer : void 0,
            s = (c ? c.isBuffer : void 0) || o;
        e.exports = s
    }).call(this, n(44)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var r = n(121),
        o = n(122),
        i = n(123),
        a = i && i.isTypedArray,
        c = a ? o(a) : r;
    e.exports = c
}, function(e, t) {
    var n = 9007199254740991;
    e.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(22),
            o = setTimeout;

        function i(e) {
            return Boolean(e && void 0 !== e.length)
        }

        function a() {}

        function c(e) {
            if (!(this instanceof c)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function s(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, c._immediateFn((function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void l(t.promise, e)
                    }
                    u(t.promise, r)
                } else(1 === e._state ? u : l)(t.promise, e._value)
            }))) : e._deferreds.push(t)
        }

        function u(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof c) return e._state = 3, e._value = t, void f(e);
                    if ("function" == typeof n) return void d((r = n, o = t, function() {
                        r.apply(o, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, f(e)
            } catch (t) {
                l(e, t)
            }
            var r, o
        }

        function l(e, t) {
            e._state = 2, e._value = t, f(e)
        }

        function f(e) {
            2 === e._state && 0 === e._deferreds.length && c._immediateFn((function() {
                e._handled || c._unhandledRejectionFn(e._value)
            }));
            for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
            e._deferreds = null
        }

        function p(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function d(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0, u(t, e))
                }), (function(e) {
                    n || (n = !0, l(t, e))
                }))
            } catch (e) {
                if (n) return;
                n = !0, l(t, e)
            }
        }
        c.prototype.catch = function(e) {
            return this.then(null, e)
        }, c.prototype.then = function(e, t) {
            var n = new this.constructor(a);
            return s(this, new p(e, t, n)), n
        }, c.prototype.finally = r.a, c.all = function(e) {
            return new c((function(t, n) {
                if (!i(e)) return n(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var o = r.length;

                function a(e, i) {
                    try {
                        if (i && ("object" == typeof i || "function" == typeof i)) {
                            var c = i.then;
                            if ("function" == typeof c) return void c.call(i, (function(t) {
                                a(e, t)
                            }), n)
                        }
                        r[e] = i, 0 == --o && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var c = 0; c < r.length; c++) a(c, r[c])
            }))
        }, c.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === c ? e : new c((function(t) {
                t(e)
            }))
        }, c.reject = function(e) {
            return new c((function(t, n) {
                n(e)
            }))
        }, c.race = function(e) {
            return new c((function(t, n) {
                if (!i(e)) return n(new TypeError("Promise.race accepts an array"));
                for (var r = 0, o = e.length; r < o; r++) c.resolve(e[r]).then(t, n)
            }))
        }, c._immediateFn = "function" == typeof e && function(t) {
            e(t)
        } || function(e) {
            o(e, 0)
        }, c._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, t.a = c
    }).call(this, n(59).setImmediate)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e, t, n) {
    var r, o, i, a, c, s, u, l;
    e.exports = (l = n(134), o = (r = l).lib, i = o.WordArray, a = o.Hasher, c = r.algo, s = [], u = c.SHA1 = a.extend({
        _doReset: function() {
            this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(e, t) {
            for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], c = n[4], u = 0; u < 80; u++) {
                if (u < 16) s[u] = 0 | e[t + u];
                else {
                    var l = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                    s[u] = l << 1 | l >>> 31
                }
                var f = (r << 5 | r >>> 27) + c + s[u];
                f += u < 20 ? 1518500249 + (o & i | ~o & a) : u < 40 ? 1859775393 + (o ^ i ^ a) : u < 60 ? (o & i | o & a | i & a) - 1894007588 : (o ^ i ^ a) - 899497514, c = a, a = i, i = o << 30 | o >>> 2, o = r, r = f
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + i | 0, n[3] = n[3] + a | 0, n[4] = n[4] + c | 0
        },
        _doFinalize: function() {
            var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                r = 8 * e.sigBytes;
            return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
        },
        clone: function() {
            var e = a.clone.call(this);
            return e._hash = this._hash.clone(), e
        }
    }), r.SHA1 = a._createHelper(u), r.HmacSHA1 = a._createHmacHelper(u), l.SHA1)
}, function(e, t, n) {
    e.exports = {
        root: "_1JqZ9DnWkr5sBJFKCzYhXF"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_2qoDA6DYehhW7fpTiYA0d6"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_3_xVTlDqedwj53qq7UdnrX"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_3szSASUddZA-4AH16AZ7Dm"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_1i1jpbfcReHt_hPzfxxoJ_"
    }
}, function(e, t, n) {
    e.exports = {
        root: "_1cxsNtqqoQL6-CsTkWplIP"
    }
}, function(e, t, n) {
    e.exports = {
        root: "YrzDOn-xb2gnY0h5bUCn4"
    }
}, function(e, t, n) {
    (function(e) {
        ! function(e) {
            "use strict";
            var t, n = e.URLSearchParams && e.URLSearchParams.prototype.get ? e.URLSearchParams : null,
                r = n && "a=1" === new n({
                    a: 1
                }).toString(),
                o = n && "+" === new n("s=%2B").get("s"),
                i = "__URLSearchParams__",
                a = !n || ((t = new n).append("s", " &"), "s=+%26" === t.toString()),
                c = f.prototype,
                s = !(!e.Symbol || !e.Symbol.iterator);
            if (!(n && r && o && a)) {
                c.append = function(e, t) {
                    y(this[i], e, t)
                }, c.delete = function(e) {
                    delete this[i][e]
                }, c.get = function(e) {
                    var t = this[i];
                    return e in t ? t[e][0] : null
                }, c.getAll = function(e) {
                    var t = this[i];
                    return e in t ? t[e].slice(0) : []
                }, c.has = function(e) {
                    return e in this[i]
                }, c.set = function(e, t) {
                    this[i][e] = ["" + t]
                }, c.toString = function() {
                    var e, t, n, r, o = this[i],
                        a = [];
                    for (t in o)
                        for (n = p(t), e = 0, r = o[t]; e < r.length; e++) a.push(n + "=" + p(r[e]));
                    return a.join("&")
                };
                var u = !!o && n && !r && e.Proxy;
                Object.defineProperty(e, "URLSearchParams", {
                    value: u ? new Proxy(n, {
                        construct: function(e, t) {
                            return new e(new f(t[0]).toString())
                        }
                    }) : f
                });
                var l = e.URLSearchParams.prototype;
                l.polyfill = !0, l.forEach = l.forEach || function(e, t) {
                    var n = v(this.toString());
                    Object.getOwnPropertyNames(n).forEach((function(r) {
                        n[r].forEach((function(n) {
                            e.call(t, n, r, this)
                        }), this)
                    }), this)
                }, l.sort = l.sort || function() {
                    var e, t, n, r = v(this.toString()),
                        o = [];
                    for (e in r) o.push(e);
                    for (o.sort(), t = 0; t < o.length; t++) this.delete(o[t]);
                    for (t = 0; t < o.length; t++) {
                        var i = o[t],
                            a = r[i];
                        for (n = 0; n < a.length; n++) this.append(i, a[n])
                    }
                }, l.keys = l.keys || function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push(n)
                    })), h(e)
                }, l.values = l.values || function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    })), h(e)
                }, l.entries = l.entries || function() {
                    var e = [];
                    return this.forEach((function(t, n) {
                        e.push([n, t])
                    })), h(e)
                }, s && (l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries)
            }

            function f(e) {
                ((e = e || "") instanceof URLSearchParams || e instanceof f) && (e = e.toString()), this[i] = v(e)
            }

            function p(e) {
                var t = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, (function(e) {
                    return t[e]
                }))
            }

            function d(e) {
                return e.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, (function(e) {
                    return decodeURIComponent(e)
                }))
            }

            function h(t) {
                var n = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return s && (n[e.Symbol.iterator] = function() {
                    return n
                }), n
            }

            function v(e) {
                var t = {};
                if ("object" == typeof e)
                    if (m(e))
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (!m(r) || 2 !== r.length) throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                            y(t, r[0], r[1])
                        } else
                            for (var o in e) e.hasOwnProperty(o) && y(t, o, e[o]);
                    else {
                        0 === e.indexOf("?") && (e = e.slice(1));
                        for (var i = e.split("&"), a = 0; a < i.length; a++) {
                            var c = i[a],
                                s = c.indexOf("="); - 1 < s ? y(t, d(c.slice(0, s)), d(c.slice(s + 1))) : c && y(t, d(c), "")
                        }
                    } return t
            }

            function y(e, t, n) {
                var r = "string" == typeof n ? n : null != n && "function" == typeof n.toString ? n.toString() : JSON.stringify(n);
                t in e ? e[t].push(r) : e[t] = [r]
            }

            function m(e) {
                return !!e && "[object Array]" === Object.prototype.toString.call(e)
            }
        }(void 0 !== e ? e : "undefined" != typeof window ? window : this)
    }).call(this, n(9))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = n(47),
            r = n(22),
            o = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== e) return e;
                throw new Error("unable to locate global object")
            }();
        "Promise" in o ? o.Promise.prototype.finally || (o.Promise.prototype.finally = r.a) : o.Promise = t.a
    }).call(this, n(9))
}, function(e, t, n) {
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;

        function i(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function() {
            return new i(o.call(setTimeout, r, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new i(o.call(setInterval, r, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                e._onTimeout && e._onTimeout()
            }), t))
        }, n(60), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(9))
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, o, i, a, c, s = 1,
                    u = {},
                    l = !1,
                    f = e.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick((function() {
                        h(e)
                    }))
                } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                    h(e.data)
                }, r = function(e) {
                    i.port2.postMessage(e)
                }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function(e) {
                    var t = f.createElement("script");
                    t.onreadystatechange = function() {
                        h(e), t.onreadystatechange = null, o.removeChild(t), t = null
                    }, o.appendChild(t)
                }) : r = function(e) {
                    setTimeout(h, 0, e)
                } : (a = "setImmediate$" + Math.random() + "$", c = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length))
                }, e.addEventListener ? e.addEventListener("message", c, !1) : e.attachEvent("onmessage", c), r = function(t) {
                    e.postMessage(a + t, "*")
                }), p.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var o = {
                        callback: e,
                        args: t
                    };
                    return u[s] = o, r(s), s++
                }, p.clearImmediate = d
            }

            function d(e) {
                delete u[e]
            }

            function h(e) {
                if (l) setTimeout(h, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        l = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            d(e), l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(9), n(61))
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, u = [],
        l = !1,
        f = -1;

    function p() {
        l && s && (l = !1, s.length ? u = s.concat(u) : f = -1, u.length && d())
    }

    function d() {
        if (!l) {
            var e = c(p);
            l = !0;
            for (var t = u.length; t;) {
                for (s = u, u = []; ++f < t;) s && s[f].run();
                f = -1, t = u.length
            }
            s = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
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

    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || c(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(63);

    function o() {}

    function i() {}
    i.resetWarningCache = o, e.exports = function() {
        function e(e, t, n, o, i, a) {
            if (a !== r) {
                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw c.name = "Invariant Violation", c
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o
        };
        return n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    /** @license React v16.10.2
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        g = r ? Symbol.for("react.scope") : 60119;

    function w(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case o:
                    switch (e = e.type) {
                        case f:
                        case p:
                        case a:
                        case s:
                        case c:
                        case h:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case l:
                                case d:
                                case u:
                                    return e;
                                default:
                                    return t
                            }
                    }
                    case m:
                    case y:
                    case i:
                        return t
            }
        }
    }

    function O(e) {
        return w(e) === p
    }
    t.typeOf = w, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = l, t.ContextProvider = u, t.Element = o, t.ForwardRef = d, t.Fragment = a, t.Lazy = m, t.Memo = y, t.Portal = i, t.Profiler = s, t.StrictMode = c, t.Suspense = h, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === s || e === c || e === h || e === v || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === y || e.$$typeof === u || e.$$typeof === l || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === g)
    }, t.isAsyncMode = function(e) {
        return O(e) || w(e) === f
    }, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
        return w(e) === l
    }, t.isContextProvider = function(e) {
        return w(e) === u
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }, t.isForwardRef = function(e) {
        return w(e) === d
    }, t.isFragment = function(e) {
        return w(e) === a
    }, t.isLazy = function(e) {
        return w(e) === m
    }, t.isMemo = function(e) {
        return w(e) === y
    }, t.isPortal = function(e) {
        return w(e) === i
    }, t.isProfiler = function(e) {
        return w(e) === s
    }, t.isStrictMode = function(e) {
        return w(e) === c
    }, t.isSuspense = function(e) {
        return w(e) === h
    }
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    var r = n(67);
    e.exports = function(e, t) {
        return r(e, t)
    }
}, function(e, t, n) {
    var r = n(68),
        o = n(21);
    e.exports = function e(t, n, i, a, c) {
        return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, i, a, e, c))
    }
}, function(e, t, n) {
    var r = n(69),
        o = n(42),
        i = n(103),
        a = n(107),
        c = n(129),
        s = n(30),
        u = n(43),
        l = n(45),
        f = 1,
        p = "[object Arguments]",
        d = "[object Array]",
        h = "[object Object]",
        v = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, y, m, _) {
        var b = s(e),
            g = s(t),
            w = b ? d : c(e),
            O = g ? d : c(t),
            E = (w = w == p ? h : w) == h,
            P = (O = O == p ? h : O) == h,
            x = w == O;
        if (x && u(e)) {
            if (!u(t)) return !1;
            b = !0, E = !1
        }
        if (x && !E) return _ || (_ = new r), b || l(e) ? o(e, t, n, y, m, _) : i(e, t, w, n, y, m, _);
        if (!(n & f)) {
            var S = E && v.call(e, "__wrapped__"),
                j = P && v.call(t, "__wrapped__");
            if (S || j) {
                var T = S ? e.value() : e,
                    N = j ? t.value() : t;
                return _ || (_ = new r), m(T, N, n, y, _)
            }
        }
        return !!x && (_ || (_ = new r), a(e, t, n, y, m, _))
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(75),
        i = n(76),
        a = n(77),
        c = n(78),
        s = n(79);

    function u(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size
    }
    u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = c, u.prototype.set = s, e.exports = u
}, function(e, t) {
    e.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(e, t, n) {
    var r = n(17),
        o = Array.prototype.splice;
    e.exports = function(e) {
        var t = this.__data__,
            n = r(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = function(e) {
        var t = this.__data__,
            n = r(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = function(e) {
        return r(this.__data__, e) > -1
    }
}, function(e, t, n) {
    var r = n(17);
    e.exports = function(e, t) {
        var n = this.__data__,
            o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
    }
}, function(e, t, n) {
    var r = n(16);
    e.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.get(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}, function(e, t, n) {
    var r = n(16),
        o = n(28),
        i = n(41),
        a = 200;
    e.exports = function(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var c = n.__data__;
            if (!o || c.length < a - 1) return c.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new i(c)
        }
        return n.set(e, t), this.size = n.size, this
    }
}, function(e, t, n) {
    var r = n(37),
        o = n(83),
        i = n(39),
        a = n(40),
        c = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        u = Object.prototype,
        l = s.toString,
        f = u.hasOwnProperty,
        p = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function(e) {
        return !(!i(e) || o(e)) && (r(e) ? p : c).test(a(e))
    }
}, function(e, t, n) {
    var r = n(29),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        c = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        var t = i.call(e, c),
            n = e[c];
        try {
            e[c] = void 0;
            var r = !0
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[c] = n : delete e[c]), o
    }
}, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        return n.call(e)
    }
}, function(e, t, n) {
    var r, o = n(84),
        i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function(e) {
        return !!i && i in e
    }
}, function(e, t, n) {
    var r = n(4)["__core-js_shared__"];
    e.exports = r
}, function(e, t) {
    e.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, function(e, t, n) {
    var r = n(87),
        o = n(16),
        i = n(28);
    e.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || o),
            string: new r
        }
    }
}, function(e, t, n) {
    var r = n(88),
        o = n(89),
        i = n(90),
        a = n(91),
        c = n(92);

    function s(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = i, s.prototype.has = a, s.prototype.set = c, e.exports = s
}, function(e, t, n) {
    var r = n(19);
    e.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t, n) {
    var r = n(19),
        o = "__lodash_hash_undefined__",
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return n === o ? void 0 : n
        }
        return i.call(t, e) ? t[e] : void 0
    }
}, function(e, t, n) {
    var r = n(19),
        o = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : o.call(t, e)
    }
}, function(e, t, n) {
    var r = n(19),
        o = "__lodash_hash_undefined__";
    e.exports = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? o : t, this
    }
}, function(e, t, n) {
    var r = n(20);
    e.exports = function(e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function(e, t, n) {
    var r = n(20);
    e.exports = function(e) {
        return r(this, e).get(e)
    }
}, function(e, t, n) {
    var r = n(20);
    e.exports = function(e) {
        return r(this, e).has(e)
    }
}, function(e, t, n) {
    var r = n(20);
    e.exports = function(e, t) {
        var n = r(this, e),
            o = n.size;
        return n.set(e, t), this.size += n.size == o ? 0 : 1, this
    }
}, function(e, t, n) {
    var r = n(41),
        o = n(99),
        i = n(100);

    function a(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new r; ++t < n;) this.add(e[t])
    }
    a.prototype.add = a.prototype.push = o, a.prototype.has = i, e.exports = a
}, function(e, t) {
    var n = "__lodash_hash_undefined__";
    e.exports = function(e) {
        return this.__data__.set(e, n), this
    }
}, function(e, t) {
    e.exports = function(e) {
        return this.__data__.has(e)
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return e.has(t)
    }
}, function(e, t, n) {
    var r = n(29),
        o = n(104),
        i = n(36),
        a = n(42),
        c = n(105),
        s = n(106),
        u = 1,
        l = 2,
        f = "[object Boolean]",
        p = "[object Date]",
        d = "[object Error]",
        h = "[object Map]",
        v = "[object Number]",
        y = "[object RegExp]",
        m = "[object Set]",
        _ = "[object String]",
        b = "[object Symbol]",
        g = "[object ArrayBuffer]",
        w = "[object DataView]",
        O = r ? r.prototype : void 0,
        E = O ? O.valueOf : void 0;
    e.exports = function(e, t, n, r, O, P, x) {
        switch (n) {
            case w:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case g:
                return !(e.byteLength != t.byteLength || !P(new o(e), new o(t)));
            case f:
            case p:
            case v:
                return i(+e, +t);
            case d:
                return e.name == t.name && e.message == t.message;
            case y:
            case _:
                return e == t + "";
            case h:
                var S = c;
            case m:
                var j = r & u;
                if (S || (S = s), e.size != t.size && !j) return !1;
                var T = x.get(e);
                if (T) return T == t;
                r |= l, x.set(e, t);
                var N = a(S(e), S(t), r, O, P, x);
                return x.delete(e), N;
            case b:
                if (E) return E.call(e) == E.call(t)
        }
        return !1
    }
}, function(e, t, n) {
    var r = n(4).Uint8Array;
    e.exports = r
}, function(e, t) {
    e.exports = function(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach((function(e, r) {
            n[++t] = [r, e]
        })), n
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach((function(e) {
            n[++t] = e
        })), n
    }
}, function(e, t, n) {
    var r = n(108),
        o = 1,
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, a, c, s) {
        var u = n & o,
            l = r(e),
            f = l.length;
        if (f != r(t).length && !u) return !1;
        for (var p = f; p--;) {
            var d = l[p];
            if (!(u ? d in t : i.call(t, d))) return !1
        }
        var h = s.get(e);
        if (h && s.get(t)) return h == t;
        var v = !0;
        s.set(e, t), s.set(t, e);
        for (var y = u; ++p < f;) {
            var m = e[d = l[p]],
                _ = t[d];
            if (a) var b = u ? a(_, m, d, t, e, s) : a(m, _, d, e, t, s);
            if (!(void 0 === b ? m === _ || c(m, _, n, a, s) : b)) {
                v = !1;
                break
            }
            y || (y = "constructor" == d)
        }
        if (v && !y) {
            var g = e.constructor,
                w = t.constructor;
            g != w && "constructor" in e && "constructor" in t && !("function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w) && (v = !1)
        }
        return s.delete(e), s.delete(t), v
    }
}, function(e, t, n) {
    var r = n(109),
        o = n(111),
        i = n(114);
    e.exports = function(e) {
        return r(e, i, o)
    }
}, function(e, t, n) {
    var r = n(110),
        o = n(30);
    e.exports = function(e, t, n) {
        var i = t(e);
        return o(e) ? i : r(i, n(e))
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
        return e
    }
}, function(e, t, n) {
    var r = n(112),
        o = n(113),
        i = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        c = a ? function(e) {
            return null == e ? [] : (e = Object(e), r(a(e), (function(t) {
                return i.call(e, t)
            })))
        } : o;
    e.exports = c
}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r;) {
            var a = e[n];
            t(a, n, e) && (i[o++] = a)
        }
        return i
    }
}, function(e, t) {
    e.exports = function() {
        return []
    }
}, function(e, t, n) {
    var r = n(115),
        o = n(124),
        i = n(128);
    e.exports = function(e) {
        return i(e) ? r(e) : o(e)
    }
}, function(e, t, n) {
    var r = n(116),
        o = n(117),
        i = n(30),
        a = n(43),
        c = n(120),
        s = n(45),
        u = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var n = i(e),
            l = !n && o(e),
            f = !n && !l && a(e),
            p = !n && !l && !f && s(e),
            d = n || l || f || p,
            h = d ? r(e.length, String) : [],
            v = h.length;
        for (var y in e) !t && !u.call(e, y) || d && ("length" == y || f && ("offset" == y || "parent" == y) || p && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || c(y, v)) || h.push(y);
        return h
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
}, function(e, t, n) {
    var r = n(118),
        o = n(21),
        i = Object.prototype,
        a = i.hasOwnProperty,
        c = i.propertyIsEnumerable,
        s = r(function() {
            return arguments
        }()) ? r : function(e) {
            return o(e) && a.call(e, "callee") && !c.call(e, "callee")
        };
    e.exports = s
}, function(e, t, n) {
    var r = n(18),
        o = n(21),
        i = "[object Arguments]";
    e.exports = function(e) {
        return o(e) && r(e) == i
    }
}, function(e, t) {
    e.exports = function() {
        return !1
    }
}, function(e, t) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    e.exports = function(e, t) {
        var o = typeof e;
        return !!(t = null == t ? n : t) && ("number" == o || "symbol" != o && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function(e, t, n) {
    var r = n(18),
        o = n(46),
        i = n(21),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
        return i(e) && o(e.length) && !!a[r(e)]
    }
}, function(e, t) {
    e.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, function(e, t, n) {
    (function(e) {
        var r = n(38),
            o = t && !t.nodeType && t,
            i = o && "object" == typeof e && e && !e.nodeType && e,
            a = i && i.exports === o && r.process,
            c = function() {
                try {
                    var e = i && i.require && i.require("util").types;
                    return e || a && a.binding && a.binding("util")
                } catch (e) {}
            }();
        e.exports = c
    }).call(this, n(44)(e))
}, function(e, t, n) {
    var r = n(125),
        o = n(126),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e) {
        if (!r(e)) return o(e);
        var t = [];
        for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
}, function(e, t) {
    var n = Object.prototype;
    e.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, function(e, t, n) {
    var r = n(127)(Object.keys, Object);
    e.exports = r
}, function(e, t) {
    e.exports = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
}, function(e, t, n) {
    var r = n(37),
        o = n(46);
    e.exports = function(e) {
        return null != e && o(e.length) && !r(e)
    }
}, function(e, t, n) {
    var r = n(130),
        o = n(28),
        i = n(131),
        a = n(132),
        c = n(133),
        s = n(18),
        u = n(40),
        l = u(r),
        f = u(o),
        p = u(i),
        d = u(a),
        h = u(c),
        v = s;
    (r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || o && "[object Map]" != v(new o) || i && "[object Promise]" != v(i.resolve()) || a && "[object Set]" != v(new a) || c && "[object WeakMap]" != v(new c)) && (v = function(e) {
        var t = s(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? u(n) : "";
        if (r) switch (r) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case p:
                return "[object Promise]";
            case d:
                return "[object Set]";
            case h:
                return "[object WeakMap]"
        }
        return t
    }), e.exports = v
}, function(e, t, n) {
    var r = n(10)(n(4), "DataView");
    e.exports = r
}, function(e, t, n) {
    var r = n(10)(n(4), "Promise");
    e.exports = r
}, function(e, t, n) {
    var r = n(10)(n(4), "Set");
    e.exports = r
}, function(e, t, n) {
    var r = n(10)(n(4), "WeakMap");
    e.exports = r
}, function(e, t, n) {
    var r;
    e.exports = (r = r || function(e, t) {
        var n = Object.create || function() {
                function e() {}
                return function(t) {
                    var n;
                    return e.prototype = t, n = new e, e.prototype = null, n
                }
            }(),
            r = {},
            o = r.lib = {},
            i = o.Base = {
                extend: function(e) {
                    var t = n(this);
                    return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            a = o.WordArray = i.extend({
                init: function(e, t) {
                    e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || s).stringify(this)
                },
                concat: function(e) {
                    var t = this.words,
                        n = e.words,
                        r = this.sigBytes,
                        o = e.sigBytes;
                    if (this.clamp(), r % 4)
                        for (var i = 0; i < o; i++) {
                            var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            t[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8
                        } else
                            for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                    return this.sigBytes += o, this
                },
                clamp: function() {
                    var t = this.words,
                        n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e.words = this.words.slice(0), e
                },
                random: function(t) {
                    for (var n, r = [], o = function(t) {
                            t = t;
                            var n = 987654321,
                                r = 4294967295;
                            return function() {
                                var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1)
                            }
                        }, i = 0; i < t; i += 4) {
                        var c = o(4294967296 * (n || e.random()));
                        n = 987654071 * c(), r.push(4294967296 * c() | 0)
                    }
                    return new a.init(r, t)
                }
            }),
            c = r.enc = {},
            s = c.Hex = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                        var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16))
                    }
                    return r.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new a.init(n, t / 2)
                }
            },
            u = c.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                        var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        r.push(String.fromCharCode(i))
                    }
                    return r.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new a.init(n, t)
                }
            },
            l = c.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(u.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return u.parse(unescape(encodeURIComponent(e)))
                }
            },
            f = o.BufferedBlockAlgorithm = i.extend({
                reset: function() {
                    this._data = new a.init, this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data,
                        r = n.words,
                        o = n.sigBytes,
                        i = this.blockSize,
                        c = o / (4 * i),
                        s = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * i,
                        u = e.min(4 * s, o);
                    if (s) {
                        for (var l = 0; l < s; l += i) this._doProcessBlock(r, l);
                        var f = r.splice(0, s);
                        n.sigBytes -= u
                    }
                    return new a.init(f, u)
                },
                clone: function() {
                    var e = i.clone.call(this);
                    return e._data = this._data.clone(), e
                },
                _minBufferSize: 0
            }),
            p = (o.Hasher = f.extend({
                cfg: i.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                },
                reset: function() {
                    f.reset.call(this), this._doReset()
                },
                update: function(e) {
                    return this._append(e), this._process(), this
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new p.HMAC.init(e, n).finalize(t)
                    }
                }
            }), r.algo = {});
        return r
    }(Math), r)
}, function(e, t, n) {
    e.exports = {
        blinker: "arEptJdvk8yf5hT-1hh9b"
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r), n.d(r, "useState", (function() {
        return ue
    })), n.d(r, "useReducer", (function() {
        return le
    })), n.d(r, "useEffect", (function() {
        return fe
    })), n.d(r, "useLayoutEffect", (function() {
        return pe
    })), n.d(r, "useRef", (function() {
        return de
    })), n.d(r, "useImperativeHandle", (function() {
        return he
    })), n.d(r, "useMemo", (function() {
        return ve
    })), n.d(r, "useCallback", (function() {
        return ye
    })), n.d(r, "useContext", (function() {
        return me
    })), n.d(r, "useDebugValue", (function() {
        return _e
    }));
    var o = {};
    n.r(o), n.d(o, "poll", (function() {
        return tr
    })), n.d(o, "session", (function() {
        return jn
    })), n.d(o, "vote", (function() {
        return go
    })), n.d(o, "user", (function() {
        return Dr
    })), n.d(o, "feedback", (function() {
        return Yn
    })), n.d(o, "result", (function() {
        return eo
    }));
    var i = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob: "FileReader" in self && "Blob" in self && function() {
            try {
                return new Blob, !0
            } catch (e) {
                return !1
            }
        }(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self
    };
    if (i.arrayBuffer) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        c = ArrayBuffer.isView || function(e) {
            return e && a.indexOf(Object.prototype.toString.call(e)) > -1
        };

    function s(e) {
        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }

    function u(e) {
        return "string" != typeof e && (e = String(e)), e
    }

    function l(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i.iterable && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function f(e) {
        this.map = {}, e instanceof f ? e.forEach((function(e, t) {
            this.append(t, e)
        }), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1])
        }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t])
        }), this)
    }

    function p(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function d(e) {
        return new Promise((function(t, n) {
            e.onload = function() {
                t(e.result)
            }, e.onerror = function() {
                n(e.error)
            }
        }))
    }

    function h(e) {
        var t = new FileReader,
            n = d(t);
        return t.readAsArrayBuffer(e), n
    }

    function v(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function y() {
        return this.bodyUsed = !1, this._initBody = function(e) {
            var t;
            this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : i.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : i.arrayBuffer && i.blob && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = v(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, i.blob && (this.blob = function() {
            var e = p(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
        }), this.text = function() {
            var e, t, n, r = p(this);
            if (r) return r;
            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = d(t), t.readAsText(e), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, i.formData && (this.formData = function() {
            return this.text().then(b)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    f.prototype.append = function(e, t) {
        e = s(e), t = u(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }, f.prototype.delete = function(e) {
        delete this.map[s(e)]
    }, f.prototype.get = function(e) {
        return e = s(e), this.has(e) ? this.map[e] : null
    }, f.prototype.has = function(e) {
        return this.map.hasOwnProperty(s(e))
    }, f.prototype.set = function(e, t) {
        this.map[s(e)] = u(t)
    }, f.prototype.forEach = function(e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }, f.prototype.keys = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push(n)
        })), l(e)
    }, f.prototype.values = function() {
        var e = [];
        return this.forEach((function(t) {
            e.push(t)
        })), l(e)
    }, f.prototype.entries = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push([n, t])
        })), l(e)
    }, i.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function _(e, t) {
        var n, r, o = (t = t || {}).body;
        if (e instanceof _) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new f(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new f(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), m.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o)
    }

    function b(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        })), t
    }

    function g(e, t) {
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new f(t.headers), this.url = t.url || "", this._initBody(e)
    }
    _.prototype.clone = function() {
        return new _(this, {
            body: this._bodyInit
        })
    }, y.call(_.prototype), y.call(g.prototype), g.prototype.clone = function() {
        return new g(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new f(this.headers),
            url: this.url
        })
    }, g.error = function() {
        var e = new g(null, {
            status: 0,
            statusText: ""
        });
        return e.type = "error", e
    };
    var w = [301, 302, 303, 307, 308];
    g.redirect = function(e, t) {
        if (-1 === w.indexOf(t)) throw new RangeError("Invalid status code");
        return new g(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var O = self.DOMException;
    try {
        new O
    } catch (e) {
        (O = function(e, t) {
            this.message = e, this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }).prototype = Object.create(Error.prototype), O.prototype.constructor = O
    }

    function E(e, t) {
        return new Promise((function(n, r) {
            var o = new _(e, t);
            if (o.signal && o.signal.aborted) return r(new O("Aborted", "AbortError"));
            var a = new XMLHttpRequest;

            function c() {
                a.abort()
            }
            a.onload = function() {
                var e, t, r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: (e = a.getAllResponseHeaders() || "", t = new f, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                        var n = e.split(":"),
                            r = n.shift().trim();
                        if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o)
                        }
                    })), t)
                };
                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                var o = "response" in a ? a.response : a.responseText;
                n(new g(o, r))
            }, a.onerror = function() {
                r(new TypeError("Network request failed"))
            }, a.ontimeout = function() {
                r(new TypeError("Network request failed"))
            }, a.onabort = function() {
                r(new O("Aborted", "AbortError"))
            }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && i.blob && (a.responseType = "blob"), o.headers.forEach((function(e, t) {
                a.setRequestHeader(t, e)
            })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                4 === a.readyState && o.signal.removeEventListener("abort", c)
            }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
        }))
    }
    E.polyfill = !0, self.fetch || (self.fetch = E, self.Headers = f, self.Request = _, self.Response = g);
    n(57), n(58);
    var P, x, S, j, T, N, A = {},
        k = [],
        C = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

    function I(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function D(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function R(e, t, n) {
        var r, o, i, a, c = arguments;
        if (t = I({}, t), arguments.length > 3)
            for (n = [n], r = 3; r < arguments.length; r++) n.push(c[r]);
        if (null != n && (t.children = n), null != e && null != e.defaultProps)
            for (o in e.defaultProps) void 0 === t[o] && (t[o] = e.defaultProps[o]);
        return a = t.key, null != (i = t.ref) && delete t.ref, null != a && delete t.key, U(e, t, a, i)
    }

    function U(e, t, n, r) {
        var o = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __p: null,
            __b: 0,
            __e: null,
            l: null,
            __c: null,
            constructor: void 0
        };
        return P.vnode && P.vnode(o), o
    }

    function B(e) {
        return e.children
    }

    function L(e, t) {
        this.props = e, this.context = t
    }

    function M(e, t) {
        if (null == t) return e.__p ? M(e.__p, e.__p.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? M(e) : null
    }

    function F(e) {
        var t, n;
        if (null != (e = e.__p) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return F(e)
        }
    }

    function z(e) {
        (!e.__d && (e.__d = !0) && 1 === x.push(e) || j !== P.debounceRendering) && (j = P.debounceRendering, (P.debounceRendering || S)(H))
    }

    function H() {
        var e, t, n, r, o, i, a, c;
        for (x.sort((function(e, t) {
                return t.__v.__b - e.__v.__b
            })); e = x.pop();) e.__d && (n = void 0, r = void 0, i = (o = (t = e).__v).__e, a = t.__P, c = t.u, t.u = !1, a && (n = [], r = $(a, o, I({}, o), t.__n, void 0 !== a.ownerSVGElement, null, n, c, null == i ? M(o) : i), K(n, o), r != i && F(o)))
    }

    function W(e, t, n, r, o, i, a, c, s) {
        var u, l, f, p, d, h, v, y = n && n.__k || k,
            m = y.length;
        if (c == A && (c = null != i ? i[0] : m ? M(n, 0) : null), u = 0, t.__k = q(t.__k, (function(n) {
                if (null != n) {
                    if (n.__p = t, n.__b = t.__b + 1, null === (f = y[u]) || f && n.key == f.key && n.type === f.type) y[u] = void 0;
                    else
                        for (l = 0; l < m; l++) {
                            if ((f = y[l]) && n.key == f.key && n.type === f.type) {
                                y[l] = void 0;
                                break
                            }
                            f = null
                        }
                    if (p = $(e, n, f = f || A, r, o, i, a, null, c, s), (l = n.ref) && f.ref != l && (v || (v = [])).push(l, n.__c || p, n), null != p) {
                        if (null == h && (h = p), null != n.l) p = n.l, n.l = null;
                        else if (i == f || p != c || null == p.parentNode) {
                            e: if (null == c || c.parentNode !== e) e.appendChild(p);
                                else {
                                    for (d = c, l = 0;
                                        (d = d.nextSibling) && l < m; l += 2)
                                        if (d == p) break e;
                                    e.insertBefore(p, c)
                                }
                            "option" == t.type && (e.value = "")
                        }
                        c = p.nextSibling, "function" == typeof t.type && (t.l = p)
                    }
                }
                return u++, n
            })), t.__e = h, null != i && "function" != typeof t.type)
            for (u = i.length; u--;) null != i[u] && D(i[u]);
        for (u = m; u--;) null != y[u] && Q(y[u], y[u]);
        if (v)
            for (u = 0; u < v.length; u++) J(v[u], v[++u], v[++u])
    }

    function q(e, t, n) {
        if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null));
        else if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) q(e[r], t, n);
        else n.push(t ? t(function(e) {
            if (null == e || "boolean" == typeof e) return null;
            if ("string" == typeof e || "number" == typeof e) return U(null, e, null, null);
            if (null != e.__e || null != e.__c) {
                var t = U(e.type, e.props, e.key, null);
                return t.__e = e.__e, t
            }
            return e
        }(e)) : e);
        return n
    }

    function V(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === C.test(t) ? n + "px" : null == n ? "" : n
    }

    function G(e, t, n, r, o) {
        var i, a, c, s, u;
        if ("key" === (t = o ? "className" === t ? "class" : t : "class" === t ? "className" : t) || "children" === t);
        else if ("style" === t)
            if (i = e.style, "string" == typeof n) i.cssText = n;
            else {
                if ("string" == typeof r && (i.cssText = "", r = null), r)
                    for (a in r) n && a in n || V(i, a, "");
                if (n)
                    for (c in n) r && n[c] === r[c] || V(i, c, n[c])
            }
        else "o" === t[0] && "n" === t[1] ? (s = t !== (t = t.replace(/Capture$/, "")), u = t.toLowerCase(), t = (u in e ? u : t).slice(2), n ? (r || e.addEventListener(t, Y, s), (e.t || (e.t = {}))[t] = n) : e.removeEventListener(t, Y, s)) : "list" !== t && "tagName" !== t && "form" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
    }

    function Y(e) {
        return this.t[e.type](P.event ? P.event(e) : e)
    }

    function $(e, t, n, r, o, i, a, c, s, u) {
        var l, f, p, d, h, v, y, m, _, b, g = t.type;
        if (void 0 !== t.constructor) return null;
        (l = P.__b) && l(t);
        try {
            e: if ("function" == typeof g) {
                if (m = t.props, _ = (l = g.contextType) && r[l.__c], b = l ? _ ? _.props.value : l.__p : r, n.__c ? y = (f = t.__c = n.__c).__p = f.__E : ("prototype" in g && g.prototype.render ? t.__c = f = new g(m, b) : (t.__c = f = new L(m, b), f.constructor = g, f.render = X), _ && _.sub(f), f.props = m, f.state || (f.state = {}), f.context = b, f.__n = r, p = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != g.getDerivedStateFromProps && I(f.__s == f.state ? f.__s = I({}, f.__s) : f.__s, g.getDerivedStateFromProps(m, f.__s)), p) null == g.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && a.push(f);
                else {
                    if (null == g.getDerivedStateFromProps && null == c && null != f.componentWillReceiveProps && f.componentWillReceiveProps(m, b), !c && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(m, f.__s, b)) {
                        for (f.props = m, f.state = f.__s, f.__d = !1, f.__v = t, t.__e = null != s ? s !== n.__e ? s : n.__e : null, t.__k = n.__k, l = 0; l < t.__k.length; l++) t.__k[l] && (t.__k[l].__p = t);
                        break e
                    }
                    null != f.componentWillUpdate && f.componentWillUpdate(m, f.__s, b)
                }
                for (d = f.props, h = f.state, f.context = b, f.props = m, f.state = f.__s, (l = P.__r) && l(t), f.__d = !1, f.__v = t, f.__P = e, l = f.render(f.props, f.state, f.context), t.__k = q(null != l && l.type == B && null == l.key ? l.props.children : l), null != f.getChildContext && (r = I(I({}, r), f.getChildContext())), p || null == f.getSnapshotBeforeUpdate || (v = f.getSnapshotBeforeUpdate(d, h)), W(e, t, n, r, o, i, a, s, u), f.base = t.__e; l = f.__h.pop();) f.__s && (f.state = f.__s), l.call(f);
                p || null == d || null == f.componentDidUpdate || f.componentDidUpdate(d, h, v), y && (f.__E = f.__p = null)
            } else t.__e = Z(n.__e, t, n, r, o, i, a, u);
            (l = P.diffed) && l(t)
        }
        catch (e) {
            P.__e(e, t, n)
        }
        return t.__e
    }

    function K(e, t) {
        for (var n; n = e.pop();) try {
            n.componentDidMount()
        } catch (e) {
            P.__e(e, n.__v)
        }
        P.__c && P.__c(t)
    }

    function Z(e, t, n, r, o, i, a, c) {
        var s, u, l, f, p = n.props,
            d = t.props;
        if (o = "svg" === t.type || o, null == e && null != i)
            for (s = 0; s < i.length; s++)
                if (null != (u = i[s]) && (null === t.type ? 3 === u.nodeType : u.localName === t.type)) {
                    e = u, i[s] = null;
                    break
                } if (null == e) {
            if (null === t.type) return document.createTextNode(d);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), i = null
        }
        return null === t.type ? p !== d && (null != i && (i[i.indexOf(e)] = null), e.data = d) : t !== n && (null != i && (i = k.slice.call(e.childNodes)), l = (p = n.props || A).dangerouslySetInnerHTML, f = d.dangerouslySetInnerHTML, c || (f || l) && (f && l && f.__html == l.__html || (e.innerHTML = f && f.__html || "")), function(e, t, n, r, o) {
            var i;
            for (i in n) i in t || G(e, i, null, n[i], r);
            for (i in t) o && "function" != typeof t[i] || "value" === i || "checked" === i || n[i] === t[i] || G(e, i, t[i], n[i], r)
        }(e, d, p, o, c), t.__k = t.props.children, f || W(e, t, n, r, "foreignObject" !== t.type && o, i, a, A, c), c || ("value" in d && void 0 !== d.value && d.value !== e.value && (e.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== e.checked && (e.checked = d.checked))), e
    }

    function J(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            P.__e(e, n)
        }
    }

    function Q(e, t, n) {
        var r, o, i;
        if (P.unmount && P.unmount(e), (r = e.ref) && J(r, null, t), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.l = null, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                P.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (i = 0; i < r.length; i++) r[i] && Q(r[i], t, n);
        null != o && D(o)
    }

    function X(e, t, n) {
        return this.constructor(e, n)
    }

    function ee(e, t, n) {
        var r, o, i;
        P.__p && P.__p(e, t), o = (r = n === T) ? null : n && n.__k || t.__k, e = R(B, null, [e]), i = [], $(t, r ? t.__k = e : (n || t).__k = e, o || A, A, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : k.slice.call(t.childNodes), i, !1, n || A, r), K(i, e)
    }

    function te(e, t) {
        return t = I(I({}, e.props), t), arguments.length > 2 && (t.children = k.slice.call(arguments, 2)), U(e.type, t, t.key || e.key, t.ref || e.ref)
    }
    P = {}, L.prototype.setState = function(e, t) {
        var n = this.__s !== this.state && this.__s || (this.__s = I({}, this.state));
        ("function" != typeof e || (e = e(n, this.props))) && I(n, e), null != e && this.__v && (this.u = !1, t && this.__h.push(t), z(this))
    }, L.prototype.forceUpdate = function(e) {
        this.__v && (e && this.__h.push(e), this.u = !0, z(this))
    }, L.prototype.render = B, x = [], S = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, j = P.debounceRendering, P.__e = function(e, t, n) {
        for (var r; t = t.__p;)
            if ((r = t.__c) && !r.__p) try {
                if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(e));
                else {
                    if (null == r.componentDidCatch) continue;
                    r.componentDidCatch(e)
                }
                return z(r.__E = r)
            } catch (t) {
                e = t
            }
        throw e
    }, T = A, N = 0;
    var ne, re, oe = [],
        ie = P.__r;
    P.__r = function(e) {
        ie && ie(e), ne = 0, (re = e.__c).__H && (re.__H.t = Oe(re.__H.t))
    };
    var ae = P.diffed;
    P.diffed = function(e) {
        ae && ae(e);
        var t = e.__c;
        if (t) {
            var n = t.__H;
            n && (n.u = (n.u.some((function(e) {
                e.ref && (e.ref.current = e.createHandle())
            })), []), n.i = Oe(n.i))
        }
    };
    var ce = P.unmount;

    function se(e) {
        P.__h && P.__h(re);
        var t = re.__H || (re.__H = {
            o: [],
            t: [],
            i: [],
            u: []
        });
        return e >= t.o.length && t.o.push({}), t.o[e]
    }

    function ue(e) {
        return le(Se, e)
    }

    function le(e, t, n) {
        var r = se(ne++);
        return r.__c || (r.__c = re, r.v = [n ? n(t) : Se(void 0, t), function(t) {
            var n = e(r.v[0], t);
            r.v[0] !== n && (r.v[0] = n, r.__c.setState({}))
        }]), r.v
    }

    function fe(e, t) {
        var n = se(ne++);
        xe(n.m, t) && (n.v = e, n.m = t, re.__H.t.push(n), be(re))
    }

    function pe(e, t) {
        var n = se(ne++);
        xe(n.m, t) && (n.v = e, n.m = t, re.__H.i.push(n))
    }

    function de(e) {
        return ve((function() {
            return {
                current: e
            }
        }), [])
    }

    function he(e, t, n) {
        var r = se(ne++);
        xe(r.m, n) && (r.m = n, re.__H.u.push({
            ref: e,
            createHandle: t
        }))
    }

    function ve(e, t) {
        var n = se(ne++);
        return xe(n.m, t) ? (n.m = t, n.p = e, n.v = e()) : n.v
    }

    function ye(e, t) {
        return ve((function() {
            return e
        }), t)
    }

    function me(e) {
        var t = re.context[e.__c];
        if (!t) return e.__p;
        var n = se(ne++);
        return null == n.v && (n.v = !0, t.sub(re)), t.props.value
    }

    function _e(e, t) {
        P.useDebugValue && P.useDebugValue(t ? t(e) : e)
    }
    P.unmount = function(e) {
        ce && ce(e);
        var t = e.__c;
        if (t) {
            var n = t.__H;
            n && n.o.forEach((function(e) {
                return e.l && e.l()
            }))
        }
    };
    var be = function() {};

    function ge() {
        oe.some((function(e) {
            e.s = !1, e.__P && (e.__H.t = Oe(e.__H.t))
        })), oe = []
    }
    if ("undefined" != typeof window) {
        var we = P.requestAnimationFrame;
        be = function(e) {
            (!e.s && (e.s = !0) && 1 === oe.push(e) || we !== P.requestAnimationFrame) && (we = P.requestAnimationFrame, (P.requestAnimationFrame || function(e) {
                var t = function() {
                        clearTimeout(n), cancelAnimationFrame(r), setTimeout(e)
                    },
                    n = setTimeout(t, 100),
                    r = requestAnimationFrame(t)
            })(ge))
        }
    }

    function Oe(e) {
        return e.forEach(Ee), e.forEach(Pe), []
    }

    function Ee(e) {
        e.l && e.l()
    }

    function Pe(e) {
        var t = e.v();
        "function" == typeof t && (e.l = t)
    }

    function xe(e, t) {
        return !e || t.some((function(t, n) {
            return t !== e[n]
        }))
    }

    function Se(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function je(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Te(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    var Ne = P.__e;

    function Ae() {
        this.t = []
    }
    P.__e = function(e, t, n) {
        if (e.then && n)
            for (var r, o = t; o = o.__p;)
                if ((r = o.__c) && r.i) return n && (t.__e = n.__e, t.__k = n.__k), void r.i(e);
        Ne(e, t, n)
    }, (Ae.prototype = new L).i = function(e) {
        var t = this;
        t.t.push(e);
        var n = function() {
            t.t[t.t.indexOf(e)] = t.t[t.t.length - 1], t.t.pop(), 0 == t.t.length && (Q(t.props.fallback), t.__v.__e = null, t.__v.__k = t.state.u, t.setState({
                u: null
            }))
        };
        null == t.state.u && (t.setState({
            u: t.__v.__k
        }), function e(t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                null != r && ("function" != typeof r.type && r.__e ? Te(r.__e) : r.__k && e(r.__k))
            }
        }(t.__v.__k), t.__v.__k = []), e.then(n, n)
    }, Ae.prototype.render = function(e, t) {
        return t.u ? e.fallback : e.children
    };
    var ke = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        Ce = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
        Ie = P.event;

    function De(e, t, n) {
        if (null == t.__k)
            for (; t.firstChild;) Te(t.firstChild);
        return ee(e, t), "function" == typeof n && n(), e ? e.__c : null
    }
    P.event = function(e) {
        return Ie && (e = Ie(e)), e.persist = function() {}, e.nativeEvent = e
    };
    var Re = function() {};

    function Ue(e) {
        var t = this,
            n = e.container,
            r = R(Re, {
                context: t.context
            }, e.vnode);
        return t.l && t.l !== n && (t.s.parentNode && t.l.removeChild(t.s), Q(t.v), t.p = !1), e.vnode ? t.p ? (n.__k = t.__k, ee(r, n), t.__k = n.__k) : (t.s = document.createTextNode(""), function(e, t) {
            ee(e, t, T)
        }("", n), n.insertBefore(t.s, n.firstChild), t.p = !0, t.l = n, ee(r, n, t.s), t.__k = this.s.__k) : t.p && (t.s.parentNode && t.l.removeChild(t.s), Q(t.v)), t.v = r, t.componentWillUnmount = function() {
            t.s.parentNode && t.l.removeChild(t.s), Q(t.v)
        }, null
    }
    Re.prototype.getChildContext = function() {
        return this.props.context
    }, Re.prototype.render = function(e) {
        return e.children
    };
    var Be = function(e, t) {
            return e ? q(e).map(t) : null
        },
        Le = {
            map: Be,
            forEach: Be,
            count: function(e) {
                return e ? q(e).length : 0
            },
            only: function(e) {
                if (1 !== (e = q(e)).length) throw new Error("Children.only() expects only one child.");
                return e[0]
            },
            toArray: q
        };

    function Me() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n = R.apply(void 0, e),
            r = n.type,
            o = n.props;
        return "function" != typeof r && (o.defaultValue && (o.value || 0 === o.value || (o.value = o.defaultValue), delete o.defaultValue), Array.isArray(o.value) && o.multiple && "select" === r && (q(o.children).forEach((function(e) {
            -1 != o.value.indexOf(e.props.value) && (e.props.selected = !0)
        })), delete o.value), function(e, t) {
            var n, r, o;
            for (o in t)
                if (n = Ce.test(o)) break;
            if (n)
                for (o in r = e.props = {}, t) r[Ce.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() : o] = t[o]
        }(n, o)), n.preactCompatNormalized = !1, Fe(n)
    }

    function Fe(e) {
        return e.preactCompatNormalized = !0,
            function(e) {
                var t = e.props;
                (t.class || t.className) && (He.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", He))
            }(e), e
    }

    function ze(e) {
        return !!e && e.$$typeof === ke
    }
    var He = {
        configurable: !0,
        get: function() {
            return this.class
        }
    };

    function We(e, t) {
        for (var n in e)
            if ("__source" !== n && !(n in t)) return !0;
        for (var r in t)
            if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1
    }
    var qe = function(e) {
        function t(t) {
            e.call(this, t), this.isPureReactComponent = !0
        }
        return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.shouldComponentUpdate = function(e, t) {
            return We(this.props, e) || We(this.state, t)
        }, t
    }(L);

    function Ve(e, t) {
        e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
            configurable: !1,
            get: function() {
                return this["UNSAFE_" + t]
            },
            set: function(e) {
                this["UNSAFE_" + t] = e
            }
        })
    }
    L.prototype.isReactComponent = {};
    var Ge = P.vnode;
    P.vnode = function(e) {
        e.$$typeof = ke,
            function(t) {
                var n = e.type,
                    r = e.props;
                if (r && "string" == typeof n) {
                    var o = {};
                    for (var i in r) /^on(Ani|Tra)/.test(i) && (r[i.toLowerCase()] = r[i], delete r[i]), o[i.toLowerCase()] = i;
                    if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
                        var a = o.oninput || "oninput";
                        r[a] || (r[a] = r[o.onchange], delete r[o.onchange])
                    }
                }
            }();
        var t = e.type;
        t && t.o && e.ref && (e.props.ref = e.ref, e.ref = null), "function" == typeof t && !t.h && t.prototype && (Ve(t.prototype, "componentWillMount"), Ve(t.prototype, "componentWillReceiveProps"), Ve(t.prototype, "componentWillUpdate"), t.h = !0), Ge && Ge(e)
    };
    var Ye = function(e, t) {
            return e(t)
        },
        $e = je({
            version: "16.8.0",
            Children: Le,
            render: De,
            hydrate: De,
            unmountComponentAtNode: function(e) {
                return !!e.__k && (ee(null, e), !0)
            },
            createPortal: function(e, t) {
                return R(Ue, {
                    vnode: e,
                    container: t
                })
            },
            createElement: Me,
            createContext: function(e) {
                var t = {},
                    n = {
                        __c: "__cC" + N++,
                        __p: e,
                        Consumer: function(e, t) {
                            return e.children(t)
                        },
                        Provider: function(e) {
                            var r, o = this;
                            return this.getChildContext || (r = [], this.getChildContext = function() {
                                return t[n.__c] = o, t
                            }, this.shouldComponentUpdate = function(o) {
                                e.value !== o.value && (t[n.__c].props.value = o.value, r.some((function(e) {
                                    e.__P && (e.context = o.value, z(e))
                                })))
                            }, this.sub = function(e) {
                                r.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function() {
                                    r.splice(r.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                return n.Consumer.contextType = n, n
            },
            createFactory: function(e) {
                return Me.bind(null, e)
            },
            cloneElement: function(e) {
                return ze(e) ? Fe(te.apply(null, arguments)) : e
            },
            createRef: function() {
                return {}
            },
            Fragment: B,
            isValidElement: ze,
            findDOMNode: function(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            },
            Component: L,
            PureComponent: qe,
            memo: function(e, t) {
                function n(e) {
                    var n = this.props.ref,
                        r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), (t ? !t(this.props, e) : We(this.props, e)) || !r
                }

                function r(t) {
                    return this.shouldComponentUpdate = n, R(e, je({}, t))
                }
                return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.o = !0, r
            },
            forwardRef: function(e) {
                function t(t) {
                    var n = t.ref;
                    return delete t.ref, e(t, n)
                }
                return t.prototype.isReactComponent = !0, t.o = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            },
            unstable_batchedUpdates: Ye,
            Suspense: Ae,
            lazy: function(e) {
                var t, n, r;

                function o(o) {
                    if (t || (t = e()).then((function(e) {
                            n = e.default
                        }), (function(e) {
                            r = e
                        })), r) throw r;
                    if (!n) throw t;
                    return R(n, o)
                }
                return o.displayName = "Lazy", o.o = !0, o
            }
        }, r),
        Ke = n(0),
        Ze = n.n(Ke),
        Je = $e.createContext(null);
    var Qe = function(e) {
            e()
        },
        Xe = function() {
            return Qe
        },
        et = null,
        tt = {
            notify: function() {}
        };
    var nt = function() {
        function e(e, t) {
            this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = tt, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
        }
        var t = e.prototype;
        return t.addNestedSub = function(e) {
            return this.trySubscribe(), this.listeners.subscribe(e)
        }, t.notifyNestedSubs = function() {
            this.listeners.notify()
        }, t.handleChangeWrapper = function() {
            this.onStateChange && this.onStateChange()
        }, t.isSubscribed = function() {
            return Boolean(this.unsubscribe)
        }, t.trySubscribe = function() {
            var e, t, n;
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = (e = Xe(), t = [], n = [], {
                clear: function() {
                    n = et, t = et
                },
                notify: function() {
                    var r = t = n;
                    e((function() {
                        for (var e = 0; e < r.length; e++) r[e]()
                    }))
                },
                get: function() {
                    return n
                },
                subscribe: function(e) {
                    var r = !0;
                    return n === t && (n = t.slice()), n.push(e),
                        function() {
                            r && t !== et && (r = !1, n === t && (n = t.slice()), n.splice(n.indexOf(e), 1))
                        }
                }
            }))
        }, t.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = tt)
        }, e
    }();

    function rt(e) {
        var t = e.store,
            n = e.context,
            r = e.children,
            o = ve((function() {
                var e = new nt(t);
                return e.onStateChange = e.notifyNestedSubs, {
                    store: t,
                    subscription: e
                }
            }), [t]),
            i = ve((function() {
                return t.getState()
            }), [t]);
        fe((function() {
            var e = o.subscription;
            return e.trySubscribe(), i !== t.getState() && e.notifyNestedSubs(),
                function() {
                    e.tryUnsubscribe(), e.onStateChange = null
                }
        }), [o, i]);
        var a = n || Je;
        return $e.createElement(a.Provider, {
            value: o
        }, r)
    }
    rt.propTypes = {
        store: Ze.a.shape({
            subscribe: Ze.a.func.isRequired,
            dispatch: Ze.a.func.isRequired,
            getState: Ze.a.func.isRequired
        }),
        context: Ze.a.object,
        children: Ze.a.any
    };
    var ot = rt;

    function it() {
        return (it = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function at(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }
    var ct = n(32),
        st = n.n(ct),
        ut = n(5),
        lt = n.n(ut),
        ft = n(31),
        pt = [],
        dt = [null, null];

    function ht(e, t) {
        var n = e[1];
        return [t.payload, n + 1]
    }
    var vt = function() {
            return [null, 0]
        },
        yt = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? pe : fe;

    function mt(e, t) {
        void 0 === t && (t = {});
        var n = t,
            r = n.getDisplayName,
            o = void 0 === r ? function(e) {
                return "ConnectAdvanced(" + e + ")"
            } : r,
            i = n.methodName,
            a = void 0 === i ? "connectAdvanced" : i,
            c = n.renderCountProp,
            s = void 0 === c ? void 0 : c,
            u = n.shouldHandleStateChanges,
            l = void 0 === u || u,
            f = n.storeKey,
            p = void 0 === f ? "store" : f,
            d = n.withRef,
            h = void 0 !== d && d,
            v = n.forwardRef,
            y = void 0 !== v && v,
            m = n.context,
            _ = void 0 === m ? Je : m,
            b = at(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
        lt()(void 0 === s, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"), lt()(!h, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
        lt()("store" === p, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
        var g = _;
        return function(t) {
            var n = t.displayName || t.name || "Component",
                r = o(n),
                i = it({}, b, {
                    getDisplayName: o,
                    methodName: a,
                    renderCountProp: s,
                    shouldHandleStateChanges: l,
                    storeKey: p,
                    displayName: r,
                    wrappedComponentName: n,
                    WrappedComponent: t
                }),
                c = b.pure;
            var u = c ? ve : function(e) {
                return e()
            };

            function f(n) {
                var o = ve((function() {
                        var e = n.forwardedRef,
                            t = at(n, ["forwardedRef"]);
                        return [n.context, e, t]
                    }), [n]),
                    a = o[0],
                    c = o[1],
                    s = o[2],
                    f = ve((function() {
                        return a && a.Consumer && Object(ft.isContextConsumer)($e.createElement(a.Consumer, null)) ? a : g
                    }), [a, g]),
                    p = me(f),
                    d = Boolean(n.store),
                    h = Boolean(p) && Boolean(p.store);
                lt()(d || h, 'Could not find "store" in the context of "' + r + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + r + " in connect options.");
                var v = n.store || p.store,
                    y = ve((function() {
                        return function(t) {
                            return e(t.dispatch, i)
                        }(v)
                    }), [v]),
                    m = ve((function() {
                        if (!l) return dt;
                        var e = new nt(v, d ? null : p.subscription),
                            t = e.notifyNestedSubs.bind(e);
                        return [e, t]
                    }), [v, d, p]),
                    _ = m[0],
                    b = m[1],
                    w = ve((function() {
                        return d ? p : it({}, p, {
                            subscription: _
                        })
                    }), [d, p, _]),
                    O = le(ht, pt, vt),
                    E = O[0][0],
                    P = O[1];
                if (E && E.error) throw E.error;
                var x = de(),
                    S = de(s),
                    j = de(),
                    T = de(!1),
                    N = u((function() {
                        return j.current && s === S.current ? j.current : y(v.getState(), s)
                    }), [v, E, s]);
                yt((function() {
                    S.current = s, x.current = N, T.current = !1, j.current && (j.current = null, b())
                })), yt((function() {
                    if (l) {
                        var e = !1,
                            t = null,
                            n = function() {
                                if (!e) {
                                    var n, r, o = v.getState();
                                    try {
                                        n = y(o, S.current)
                                    } catch (e) {
                                        r = e, t = e
                                    }
                                    r || (t = null), n === x.current ? T.current || b() : (x.current = n, j.current = n, T.current = !0, P({
                                        type: "STORE_UPDATED",
                                        payload: {
                                            latestStoreState: o,
                                            error: r
                                        }
                                    }))
                                }
                            };
                        _.onStateChange = n, _.trySubscribe(), n();
                        return function() {
                            if (e = !0, _.tryUnsubscribe(), _.onStateChange = null, t) throw t
                        }
                    }
                }), [v, _, y]);
                var A = ve((function() {
                    return $e.createElement(t, it({}, N, {
                        ref: c
                    }))
                }), [c, t, N]);
                return ve((function() {
                    return l ? $e.createElement(f.Provider, {
                        value: w
                    }, A) : A
                }), [f, A, w])
            }
            var d = c ? $e.memo(f) : f;
            if (d.WrappedComponent = t, d.displayName = r, y) {
                var h = $e.forwardRef((function(e, t) {
                    return $e.createElement(d, it({}, e, {
                        forwardedRef: t
                    }))
                }));
                return h.displayName = r, h.WrappedComponent = t, st()(h, t)
            }
            return st()(d, t)
        }
    }
    var _t = Object.prototype.hasOwnProperty;

    function bt(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    function gt(e, t) {
        if (bt(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
            if (!_t.call(t, n[o]) || !bt(e[n[o]], t[n[o]])) return !1;
        return !0
    }
    var wt = n(33),
        Ot = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        Et = {
            INIT: "@@redux/INIT" + Ot(),
            REPLACE: "@@redux/REPLACE" + Ot(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + Ot()
            }
        };

    function Pt(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function xt(e, t, n) {
        var r;
        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(xt)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var o = e,
            i = t,
            a = [],
            c = a,
            s = !1;

        function u() {
            c === a && (c = a.slice())
        }

        function l() {
            if (s) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return i
        }

        function f(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (s) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return u(), c.push(e),
                function() {
                    if (t) {
                        if (s) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        t = !1, u();
                        var n = c.indexOf(e);
                        c.splice(n, 1)
                    }
                }
        }

        function p(e) {
            if (!Pt(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (s) throw new Error("Reducers may not dispatch actions.");
            try {
                s = !0, i = o(i, e)
            } finally {
                s = !1
            }
            for (var t = a = c, n = 0; n < t.length; n++) {
                (0, t[n])()
            }
            return e
        }
        return p({
            type: Et.INIT
        }), (r = {
            dispatch: p,
            subscribe: f,
            getState: l,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                o = e, p({
                    type: Et.REPLACE
                })
            }
        })[wt.a] = function() {
            var e, t = f;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        e.next && e.next(l())
                    }
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            })[wt.a] = function() {
                return this
            }, e
        }, r
    }

    function St(e, t) {
        var n = t && t.type;
        return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function jt(e, t) {
        return function() {
            return t(e.apply(this, arguments))
        }
    }

    function Tt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Nt(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n
    }

    function At(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Nt(n, !0).forEach((function(t) {
                Tt(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function kt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }))
    }

    function Ct(e) {
        return function(t, n) {
            var r = e(t, n);

            function o() {
                return r
            }
            return o.dependsOnOwnProps = !1, o
        }
    }

    function It(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
    }

    function Dt(e, t) {
        return function(t, n) {
            n.displayName;
            var r = function(e, t) {
                return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
            };
            return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
                r.mapToProps = e, r.dependsOnOwnProps = It(e);
                var o = r(t, n);
                return "function" == typeof o && (r.mapToProps = o, r.dependsOnOwnProps = It(o), o = r(t, n)), o
            }, r
        }
    }
    var Rt = [function(e) {
        return "function" == typeof e ? Dt(e) : void 0
    }, function(e) {
        return e ? void 0 : Ct((function(e) {
            return {
                dispatch: e
            }
        }))
    }, function(e) {
        return e && "object" == typeof e ? Ct((function(t) {
            return function(e, t) {
                if ("function" == typeof e) return jt(e, t);
                if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                var n = {};
                for (var r in e) {
                    var o = e[r];
                    "function" == typeof o && (n[r] = jt(o, t))
                }
                return n
            }(e, t)
        })) : void 0
    }];
    var Ut = [function(e) {
        return "function" == typeof e ? Dt(e) : void 0
    }, function(e) {
        return e ? void 0 : Ct((function() {
            return {}
        }))
    }];

    function Bt(e, t, n) {
        return it({}, n, {}, e, {}, t)
    }
    var Lt = [function(e) {
        return "function" == typeof e ? function(e) {
            return function(t, n) {
                n.displayName;
                var r, o = n.pure,
                    i = n.areMergedPropsEqual,
                    a = !1;
                return function(t, n, c) {
                    var s = e(t, n, c);
                    return a ? o && i(s, r) || (r = s) : (a = !0, r = s), r
                }
            }
        }(e) : void 0
    }, function(e) {
        return e ? void 0 : function() {
            return Bt
        }
    }];

    function Mt(e, t, n, r) {
        return function(o, i) {
            return n(e(o, i), t(r, i), i)
        }
    }

    function Ft(e, t, n, r, o) {
        var i, a, c, s, u, l = o.areStatesEqual,
            f = o.areOwnPropsEqual,
            p = o.areStatePropsEqual,
            d = !1;

        function h(o, d) {
            var h, v, y = !f(d, a),
                m = !l(o, i);
            return i = o, a = d, y && m ? (c = e(i, a), t.dependsOnOwnProps && (s = t(r, a)), u = n(c, s, a)) : y ? (e.dependsOnOwnProps && (c = e(i, a)), t.dependsOnOwnProps && (s = t(r, a)), u = n(c, s, a)) : m ? (h = e(i, a), v = !p(h, c), c = h, v && (u = n(c, s, a)), u) : u
        }
        return function(o, l) {
            return d ? h(o, l) : (c = e(i = o, a = l), s = t(r, a), u = n(c, s, a), d = !0, u)
        }
    }

    function zt(e, t) {
        var n = t.initMapStateToProps,
            r = t.initMapDispatchToProps,
            o = t.initMergeProps,
            i = at(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
            a = n(e, i),
            c = r(e, i),
            s = o(e, i);
        return (i.pure ? Ft : Mt)(a, c, s, e, i)
    }

    function Ht(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r](e);
            if (o) return o
        }
        return function(t, r) {
            throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
        }
    }

    function Wt(e, t) {
        return e === t
    }
    var qt, Vt, Gt, Yt, $t, Kt, Zt, Jt, Qt, Xt, en, tn;
    Gt = (Vt = void 0 === qt ? {} : qt).connectHOC, Yt = void 0 === Gt ? mt : Gt, $t = Vt.mapStateToPropsFactories, Kt = void 0 === $t ? Ut : $t, Zt = Vt.mapDispatchToPropsFactories, Jt = void 0 === Zt ? Rt : Zt, Qt = Vt.mergePropsFactories, Xt = void 0 === Qt ? Lt : Qt, en = Vt.selectorFactory, tn = void 0 === en ? zt : en;

    function nn() {
        var e = me(Je);
        return lt()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"), e
    }

    function rn(e) {
        void 0 === e && (e = Je);
        var t = e === Je ? nn : function() {
            return me(e)
        };
        return function() {
            return t().store
        }
    }
    var on = rn();
    var an = function(e) {
            void 0 === e && (e = Je);
            var t = e === Je ? on : rn(e);
            return function() {
                return t().dispatch
            }
        }(),
        cn = "undefined" != typeof window ? pe : fe,
        sn = function(e, t) {
            return e === t
        };
    var un = function(e) {
        void 0 === e && (e = Je);
        var t = e === Je ? nn : function() {
            return me(e)
        };
        return function(e, n) {
            void 0 === n && (n = sn), lt()(e, "You must pass a selector to useSelectors");
            var r = t();
            return function(e, t, n, r) {
                var o, i = le((function(e) {
                        return e + 1
                    }), 0)[1],
                    a = ve((function() {
                        return new nt(n, r)
                    }), [n, r]),
                    c = de(),
                    s = de(),
                    u = de();
                try {
                    o = e !== s.current || c.current ? e(n.getState()) : u.current
                } catch (e) {
                    var l = "An error occured while selecting the store state: " + e.message + ".";
                    throw c.current && (l += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\nOriginal stack trace:"), new Error(l)
                }
                return cn((function() {
                    s.current = e, u.current = o, c.current = void 0
                })), cn((function() {
                    function e() {
                        try {
                            var e = s.current(n.getState());
                            if (t(e, u.current)) return;
                            u.current = e
                        } catch (e) {
                            c.current = e
                        }
                        i({})
                    }
                    return a.onStateChange = e, a.trySubscribe(), e(),
                        function() {
                            return a.tryUnsubscribe()
                        }
                }), [n, a]), o
            }(e, n, r.store, r.subscription)
        }
    }();
    Qe = Ye;
    var ln = n(11);
    let fn = null,
        pn = () => {
            throw new Error("Configuration not initialized. Did you forget to call init()?")
        };
    var dn = e => pn(e);

    function hn(e, t, n) {
        return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }

    function vn(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }

    function yn(e, t) {
        this.status = e, this.hashcashZeroes = t
    }
    const mn = vn((function(e) {
            let {
                pollId: t,
                hashcashZeroes: n = 0
            } = e;
            const r = new URLSearchParams;
            r.append("zeros", n);
            const o = "".concat(dn("ROYALE_URL"), "/polls/").concat(t, "/session?").concat(r.toString());
            return hn(window.fetch(o, {
                credentials: "include"
            }), (function(e) {
                if (!e.ok) throw new yn(e.status);
                return hn(e.json(), (function(t) {
                    return {
                        session: t,
                        hashcash: {
                            challenge: e.headers.get("X-Hashcash")
                        }
                    }
                }))
            }))
        })),
        _n = vn((function(e) {
            let {
                pollId: t,
                optionId: n,
                captchaToken: r,
                sessionToken: o,
                hashcashNonce: i
            } = e;
            const a = new URLSearchParams;
            a.append("captcha-token", r), a.append("challenge", o), a.append("nonce", i);
            const c = "".concat(dn("ROYALE_URL"), "/polls/").concat(t, "/votes?").concat(a.toString()),
                s = {
                    "X-Verified": window.navigator.webdriver ? "true" : "false"
                },
                u = {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({
                        optionId: n
                    }),
                    headers: s
                };
            return hn(window.fetch(c, u), (function(e) {
                const t = e.headers.get("X-Hashcash-Required-Zeros");
                if (!e.ok) throw new yn(e.status, t);
                return hn(e.json(), (function(e) {
                    return {
                        result: e,
                        hashcash: {
                            hashcashZeroes: t
                        }
                    }
                }))
            }))
        })),
        bn = vn((function(e) {
            let {
                pollId: t
            } = e;
            const n = "".concat(dn("ROYALE_URL"), "/polls/").concat(t, "/results.json");
            return hn(fetch(n, {
                method: "GET",
                credentials: "include"
            }), (function(e) {
                return e.json()
            }))
        }));

    function gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function wn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? gn(n, !0).forEach((function(t) {
                On(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function On(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const En = e => {
            let {
                session: t
            } = e;
            return t
        },
        Pn = "session/LOAD",
        xn = e => {
            let {
                pollId: t,
                hashcashZeroes: n = 0
            } = e;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
            }((function(e) {
                return r = mn({
                    pollId: t,
                    hashcashZeroes: n
                }), o = function(t) {
                    let {
                        session: n,
                        hashcash: r
                    } = t;
                    e((e => ({
                        type: Pn,
                        session: e
                    }))(wn({}, n, {
                        hashcash: r
                    })))
                }, i ? o ? o(r) : r : (r && r.then || (r = Promise.resolve(r)), o ? r.then(o) : r);
                var r, o, i
            }))
        },
        Sn = {};
    var jn = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sn,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case Pn:
                return wn({}, e, {}, t.session);
            default:
                return e
        }
    };
    const Tn = {
            image: [{
                queryString: "(max-width:360px)",
                regularDPI: 360,
                highDPI: 720
            }, {
                queryString: "(max-width:648px)",
                regularDPI: 648,
                highDPI: 1296
            }, {
                queryString: "(max-width:1023px)",
                regularDPI: 1024,
                highDPI: 2048
            }, {
                queryString: "(min-width:1024px)",
                regularDPI: 360,
                highDPI: 720
            }],
            video: [{
                queryString: "(min-width:1024px)",
                size: 360
            }, {
                queryString: "(max-width:1023px)",
                size: 1080
            }, {
                queryString: "(max-width:720px)",
                size: 720
            }, {
                queryString: "(max-width:360px)",
                size: 360
            }]
        },
        Nn = {
            image: [{
                queryString: "(max-width:1023px)",
                regularDPI: 92,
                highDPI: 184
            }, {
                queryString: "(min-width:1024px)",
                regularDPI: 120,
                highDPI: 240
            }],
            video: [{
                queryString: "(min-width:1024px)",
                size: 135
            }, {
                queryString: "(max-width:1023px)",
                size: 108
            }]
        },
        An = {
            closedPoll: "closed-poll",
            successfulVote: "successful-vote",
            defaultError: "default-error",
            result: "result",
            overloadError: "overload-error"
        },
        kn = {
            sessionExpired: 400,
            unauthorizedUser: 401,
            incorrectCaptcha: 403,
            closedPoll: 410,
            invalidProofOfWork: 422,
            serviceUnavailable: 503
        },
        Cn = {
            [kn.invalidProofOfWork]: null,
            [kn.incorrectCaptcha]: "SÃ­mbolo errado, tente de novo",
            [kn.unauthorizedUser]: null
        },
        In = "https://s3.glbimg.com/v1/AUTH_3c423cf97b62435485372a4a95d83249/roulette/images/feedback-failed.svg",
        Dn = "https://s3.glbimg.com/v1/AUTH_3c423cf97b62435485372a4a95d83249/roulette/images/feedback-overload.svg";

    function Rn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Un(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Rn(n, !0).forEach((function(t) {
                Bn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rn(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Bn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Ln = "feedback/SHOW",
        Mn = "feedback/HIDE",
        Fn = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return {
                type: Ln,
                startTime: Date.now(),
                name: e,
                data: t
            }
        },
        zn = () => ({
            type: Mn
        }),
        Hn = () => Fn(An.closedPoll),
        Wn = e => Fn(An.defaultError, {
            error: e
        }),
        qn = () => Fn(An.result),
        Vn = e => {
            let {
                feedback: t
            } = e;
            return t
        },
        Gn = {};
    var Yn = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gn,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case Ln:
                return Un({
                    isOpen: !0,
                    name: t.name,
                    startTime: t.startTime
                }, t.data);
            case Mn:
                return {};
            default:
                return e
        }
    };

    function $n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Kn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? $n(n, !0).forEach((function(t) {
                Zn(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $n(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Zn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Jn = e => {
            let {
                poll: t
            } = e;
            return t
        },
        Qn = e => t => {
            let {
                poll: {
                    options: n
                }
            } = t;
            return n.find(t => t.id === e)
        },
        Xn = e => {
            let {
                poll: {
                    configuration: t
                }
            } = e;
            return t
        },
        er = {};
    var tr = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : er,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case "poll/LOAD":
                    return Kn({}, t.poll, {}, e);
                default:
                    return e
            }
        },
        nr = n(24),
        rr = n.n(nr);
    var or = () => {
            const {
                brandedContent: e
            } = un(Jn), {
                LOGO: t,
                NAME: n,
                URL: r
            } = dn("BRANDED_CONTENT");
            return e ? $e.createElement("section", {
                className: rr.a.root
            }, $e.createElement("a", {
                href: r
            }, $e.createElement("img", {
                className: rr.a.brandedLogo,
                src: t,
                alt: n
            })), $e.createElement("div", {
                className: rr.a.brandedDescription
            }, $e.createElement("h3", null, n), $e.createElement("span", null, "Especial publicitÃ¡rio"))) : null
        },
        ir = n(6),
        ar = n.n(ir),
        cr = n(2),
        sr = n.n(cr),
        ur = n(14),
        lr = n.n(ur),
        fr = n(23),
        pr = n.n(fr);
    var dr = () => $e.createElement("svg", {
        className: pr.a.root,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
    }, $e.createElement("path", {
        d: "M8 5v14l11-7z"
    }), $e.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }));
    var hr = () => $e.createElement("svg", {
        className: pr.a.root,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 22 24"
    }, $e.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
    }), $e.createElement("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }));
    const vr = e => "Opcao ".concat(e),
        yr = {
            [An.successfulVote]: "Sucesso",
            [An.result]: "Resultado",
            [An.failed]: "Falha",
            [An.closedPoll]: "Votacao Encerrada"
        };
    var mr = {
        feedback: {
            STATUS: e => "Status - ".concat(yr[e]),
            SOCIAL_INTENCAO: e => "Social - Intencao - ".concat(e),
            VOTE_AGAIN_BUTTON: "Botao de Votar Novamente",
            VOTE_AGAIN_BUTTON_DELAY: "Botao de Votar Novamente - Delay"
        },
        resultado: {
            VOTE_AGAIN: "Votar Novamente"
        },
        opcao: {
            ZOOM_IMG: "Ampliar Imagem",
            PLAY_VIDEO: "Play VÃ­deo"
        },
        pergunta: {
            VOTE_OPTION: "Opcao voto",
            VOTE_DURATION: "Duracao voto",
            CAPTCHA_VOTE_DURATION: e => "Duracao com captcha ".concat(e)
        },
        login: {
            POP_LOGIN: "Pop Login",
            SUCCESS_LOGIN: "Sucesso Login"
        },
        captcha: {
            ERRO: "Erro"
        }
    };
    const _r = e => {
            const {
                vote: {
                    startTime: t
                }
            } = e.getState(), n = Date.now();
            return Math.round((n - t) / 1e3)
        },
        br = e => {
            const {
                pergunta: {
                    VOTE_DURATION: t
                }
            } = mr, n = _r(e);
            Oo("Pergunta", t, n, {
                nonInteraction: !1
            })
        },
        gr = () => {
            const {
                pergunta: {
                    VOTE_OPTION: e
                }
            } = mr;
            Oo("Pergunta", e)
        },
        wr = e => {
            const {
                session: {
                    captcha: t
                }
            } = e.getState(), {
                pergunta: {
                    CAPTCHA_VOTE_DURATION: n
                }
            } = mr, r = _r(e);
            Oo("Pergunta", n(t), r, {
                nonInteraction: !1
            })
        },
        Or = () => {
            const {
                resultado: {
                    VOTE_AGAIN: e
                }
            } = mr;
            Oo("Resultado", e)
        },
        Er = e => {
            const {
                closedPoll: t,
                failed: n,
                result: r,
                successfulVote: o
            } = An;
            switch (e) {
                case o:
                    (() => {
                        const {
                            feedback: {
                                STATUS: e
                            }
                        } = mr, {
                            successfulVote: t
                        } = An;
                        Oo("Feedback", e(t))
                    })();
                    break;
                case t:
                    (() => {
                        const {
                            feedback: {
                                STATUS: e
                            }
                        } = mr, {
                            closedPoll: t
                        } = An;
                        Oo("Feedback", e(t))
                    })();
                    break;
                case n:
                    (() => {
                        const {
                            feedback: {
                                STATUS: e
                            }
                        } = mr, {
                            failed: t
                        } = An;
                        Oo("Feedback", e(t))
                    })();
                    break;
                case r:
                    (() => {
                        const {
                            feedback: {
                                STATUS: e
                            }
                        } = mr, {
                            result: t
                        } = An;
                        Oo("Feedback", e(t))
                    })()
            }
        },
        Pr = () => {
            const {
                login: {
                    SUCCESS_LOGIN: e
                }
            } = mr;
            Oo("Login", e)
        },
        xr = () => {
            const {
                captcha: {
                    ERRO: e
                }
            } = mr;
            Oo("Widget", e)
        };
    var Sr = e => {
            const t = (e => {
                    const t = Date.now();
                    return Math.round((t - e) / 1e3)
                })(e),
                {
                    feedback: {
                        VOTE_AGAIN_BUTTON_DELAY: n,
                        VOTE_AGAIN_BUTTON: r
                    }
                } = mr;
            Oo("Feedback", r), Oo("Feedback", n, t, {
                nonInteraction: !1
            })
        },
        jr = e => {
            const {
                feedback: {
                    SOCIAL_INTENCAO: t
                }
            } = mr;
            Oo("Feedback", t(e), 0, {
                nonInteraction: !1
            })
        },
        Tr = e => {
            switch (e) {
                case "image":
                    (e => {
                        const {
                            opcao: {
                                ZOOM_IMG: t
                            }
                        } = mr;
                        Oo(vr(e), t)
                    })(e);
                    break;
                case "video":
                    (e => {
                        const {
                            opcao: {
                                PLAY_VIDEO: t
                            }
                        } = mr;
                        Oo(vr(e), t)
                    })(e)
            }
        },
        Nr = () => {
            const {
                login: {
                    POP_LOGIN: e
                }
            } = mr;
            Oo("Login", e)
        };

    function Ar(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function kr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ar(n, !0).forEach((function(t) {
                Cr(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ar(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Cr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const Ir = {};
    var Dr = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ir,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (t.type) {
                case "user/LOAD":
                    return kr({}, t.user);
                case "user/UNLOAD":
                    return {};
                default:
                    return e
            }
        },
        Rr = n(49),
        Ur = n.n(Rr);
    const Br = (e, t) => {
        const n = Ur()(e).toString();
        for (let e = 0; e < t; e++)
            if ("0" !== n[e]) return !1;
        return !0
    };
    const Lr = (e, t) => {
            const n = () => {
                window[e] ? t() : window.setTimeout(n, 100)
            };
            window.setTimeout(n, 100)
        },
        Mr = () => {
            window.location.href = ""
        },
        Fr = (e, t, n, r) => {
            const o = (e => {
                    if (!e) return 0;
                    const t = new Date;
                    return t.setTime(Date.now() + (e => 24 * e * 60 * 60 * 1e3)(e)), t.toGMTString()
                })(n),
                i = o ? ";expires=".concat(o) : "";
            return document.cookie = "".concat(e, "=").concat(t, " ").concat(i, " ;path=/ ;domain=").concat(r, " ;"), t
        },
        zr = e => {
            if ("localhost" === e) return "";
            return (e => {
                const t = e.indexOf(".");
                return e.slice(t, e.length)
            })(e)
        };

    function Hr(e, t, n) {
        return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }
    const Wr = e => new Promise((t, n) => {
            const r = window.location.href;
            Nr(), (() => {
                const {
                    utag_data: e,
                    location: t
                } = window, n = zr(t.hostname), r = e && e.galinker || "", o = e && e.productGAId || "";
                Fr("f__ga", r, 0, n), Fr("f_glbproduct", o, 0, n), Fr("f_cpnt", "votacao", 0, n)
            })(), window.Cadun.login(e, r, !1, t, n, {})
        }),
        qr = e => {
            let {
                status: t
            } = e;
            return "authorized" === t
        },
        Vr = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        }((function(e) {
            if (!window.Cadun) throw new Error("Cadun is not available");
            return Hr((e => new Promise(t => {
                window.Cadun.authorize(e, t)
            }))(e), (function(t) {
                return qr(t) ? t : Hr(Wr(e), (function(e) {
                    if (qr(t = e)) return t;
                    throw new Error("user is not authorized")
                }))
            }))
        }));

    function Gr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Yr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Gr(n, !0).forEach((function(t) {
                $r(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gr(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function $r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Kr() {}
    const Zr = e => {
            let {
                result: t
            } = e;
            return t
        },
        Jr = e => ({
            type: "result/LOAD",
            result: e
        }),
        Qr = () => (function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        })((function(e, t) {
            return function(e) {
                if (e && e.then) return e.then(Kr)
            }(function(e, t) {
                try {
                    var n = e()
                } catch (e) {
                    return t(e)
                }
                return n && n.then ? n.then(void 0, t) : n
            }((function() {
                const {
                    id: n
                } = Jn(t());
                return r = bn({
                    pollId: n
                }), o = function(t) {
                    e(Jr(t)), e(qn())
                }, i ? o ? o(r) : r : (r && r.then || (r = Promise.resolve(r)), o ? r.then(o) : r);
                var r, o, i
            }), (function(t) {
                e(Wn(t))
            })))
        })),
        Xr = {};
    var eo = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case "result/LOAD":
                return Yr({}, e, {
                    options: t.result
                });
            default:
                return e
        }
    };

    function to(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function no(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? to(n, !0).forEach((function(t) {
                ro(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : to(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function ro(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function oo(e, t, n) {
        return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }

    function io(e, t) {
        try {
            var n = e()
        } catch (e) {
            return t(e)
        }
        return n && n.then ? n.then(void 0, t) : n
    }

    function ao() {}

    function co(e) {
        if (e && e.then) return e.then(ao)
    }

    function so(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }

    function uo(e, t) {
        var n = e();
        return n && n.then ? n.then(t) : t(n)
    }
    const lo = e => {
            let {
                vote: t
            } = e;
            return t
        },
        fo = "vote/START",
        po = "vote/RESET",
        ho = "vote/POST",
        vo = e => {
            let {
                optionId: t,
                pristine: n = !0
            } = e;
            return {
                type: fo,
                startTime: Date.now(),
                optionId: t,
                pristine: n
            }
        },
        yo = e => {
            let {
                option: t,
                pristine: n
            } = e;
            return so((function(e, r) {
                const {
                    isOpen: o
                } = Vn(r());
                if (o) return;
                const {
                    glive: i
                } = Xn(r());
                let a = (e => {
                    let {
                        user: t
                    } = e;
                    return t
                })(r());
                if (i.enabled && !a.id) return co(io((function() {
                    return oo(Vr(i.serviceId), (function(r) {
                        a = r, e(vo({
                            optionId: t.id,
                            pristine: n
                        })), e((e => ({
                            type: "user/LOAD",
                            user: e
                        }))(a))
                    }))
                }), (function() {
                    e((() => ({
                        type: po
                    }))())
                })));
                e(vo({
                    optionId: t.id,
                    pristine: n
                }))
            }))
        },
        mo = e => {
            let {
                captchaToken: t
            } = e;
            return so((function(e, n) {
                e((() => ({
                    type: ho
                }))());
                const {
                    id: r
                } = Jn(n()), {
                    session: o,
                    hashcash: {
                        challenge: i
                    }
                } = En(n()), {
                    optionId: a
                } = lo(n()), c = Qn(a)(n());
                return oo((e => new Promise(t => {
                    if (!e) return void t(0);
                    const n = e.split(";"),
                        r = parseInt(n[1], 10) || 0;
                    if (r <= 0) return void t(0);
                    let o = 0;
                    setTimeout(() => {
                        for (; !Br(e + o, r);) o++;
                        t(o)
                    }, 150)
                }))(i), (function(n) {
                    return oo((e => new Promise(t => window.setTimeout(t, e)))(3e3), (function() {
                        return co(io((function() {
                            return oo(_n({
                                pollId: r,
                                optionId: c.index,
                                captchaToken: t,
                                sessionToken: o,
                                hashcashNonce: n
                            }), (function(t) {
                                let {
                                    result: n,
                                    hashcash: {
                                        hashcashZeroes: o
                                    }
                                } = t;
                                return e({
                                        type: "vote/POST_SUCCESS"
                                    }), e(Jr(n)), e((e => Fn(An.successfulVote, {
                                        optionId: e
                                    }))(a)),
                                    function(e, t) {
                                        if (!t) return e && e.then ? e.then(ao) : Promise.resolve()
                                    }(e(xn({
                                        pollId: r,
                                        hashcashZeroes: o
                                    })))
                            }))
                        }), (function(t) {
                            e((e => ({
                                type: "vote/POST_ERROR",
                                error: e
                            }))(t)), e(_o(t, c))
                        })))
                    }))
                }))
            }))
        },
        _o = (e, t) => so((function(n, r) {
            let o = !1;
            const {
                id: i
            } = Jn(r()), {
                glive: a
            } = Xn(r());
            return uo((function() {
                if (e instanceof yn == !1) return n(Wn(e)), oo(n(xn({
                    pollId: i
                })), (function() {
                    o = !0
                }))
            }), (function(r) {
                if (o) return r;
                if (e.status !== kn.closedPoll) {
                    if (e.status === kn.unauthorizedUser) {
                        if (!a.enabled) return void Mr();
                        n({
                            type: "user/UNLOAD"
                        })
                    }
                    if (e.status !== kn.serviceUnavailable) return oo(n(xn({
                        pollId: i,
                        hashcashZeroes: e.hashcashZeroes
                    })), (function() {
                        let r = !1;
                        const o = [kn.incorrectCaptcha, kn.invalidProofOfWork, kn.unauthorizedUser, kn.sessionExpired];
                        return uo((function() {
                            if (o.includes(e.status)) return oo(n(yo({
                                option: t,
                                pristine: !1
                            })), (function() {
                                r = !0
                            }))
                        }), (function(t) {
                            if (r) return t;
                            n(Wn(e))
                        }))
                    }));
                    n((e => Fn(An.overloadError, {
                        error: e
                    }))(e))
                } else Mr()
            }))
        })),
        bo = {
            posting: !1,
            optionId: null,
            error: null
        };
    var go = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bo,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
            case fo:
                return no({}, bo, {
                    startTime: t.startTime,
                    optionId: t.optionId,
                    error: t.pristine ? null : e.error
                });
            case ho:
                return no({}, e, {
                    posting: !0,
                    error: null
                });
            case "vote/POST_SUCCESS":
                return no({}, bo);
            case "vote/POST_ERROR":
                return no({}, bo, {
                    error: t.error
                });
            case po:
                return no({}, bo);
            default:
                return e
        }
    };
    var wo = e => t => n => {
        switch (n.type) {
            case fo:
                gr();
                break;
            case ho:
                br(e), wr(e);
                break;
            case "vote/POST_ERROR": {
                const {
                    error: {
                        status: e
                    }
                } = n;
                e === kn.incorrectCaptcha && xr();
                break
            }
            case Ln:
                Er(n.name);
                break;
            case "user/LOAD":
                Pr()
        }
        return t(n)
    };
    const Oo = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        Lr("ga", () => {
            window.ga("".concat(dn("tenantId"), "_portal.send"), "event", "Votacao Interatividade", e, t, n, r)
        })
    };
    var Eo = n(50),
        Po = n.n(Eo);
    const xo = () => {
            window.history.pushState({}, document.title), window.onpopstate = () => {
                document.querySelector(".lightbox-lnk-close").click()
            }
        },
        So = e => t => {
            t.stopPropagation(), Tr(e)
        };
    var jo = e => {
        const {
            type: t,
            data: n
        } = e, r = "image" === t ? 648 : null, o = de(null);
        return fe(() => {
            const e = {
                onAfterOpen: xo,
                theme: "light"
            };
            window.gui && window.gui.lightbox && window.gui.lightbox.lightbox(o.current, e)
        }, []), $e.createElement("div", {
            ref: o,
            className: Po.a.root,
            "data-type": t,
            title: n && n.title,
            "data-description": n && n.description,
            "data-src": "image" === t ? n && n.slices && n.slices[r] : null,
            "data-video-id": "video" === t ? n && n.identifier : null,
            onClick: So(t)
        }, e.children)
    };
    const To = e => {
            let {
                type: t
            } = e;
            return "image" === t ? $e.createElement(hr, null) : "video" === t && $e.createElement(dr, null)
        },
        No = e => {
            let {
                media: t,
                sizes: n,
                showActionIcon: r = !0,
                className: o = ""
            } = e;
            if (!t || !t.type || "empty" === t.type || !t.data) return null;
            const {
                data: i,
                type: a
            } = t, c = ((e, t, n) => {
                if (!n || !e.slices || Object.keys(e.slices).length <= 1) return null;
                const r = [];
                return n.forEach(n => {
                    if ("image" === t) {
                        const t = e.slices["".concat(n.highDPI)],
                            o = e.slices["".concat(n.regularDPI)];
                        r.push({
                            media: n.queryString,
                            srcset: "".concat(o, " 1x, ").concat(t, " 2x")
                        })
                    } else if ("video" === t) {
                        const {
                            size: t
                        } = n, o = e.slices[t] ? e.slices[t] : e.slices.default;
                        r.push({
                            media: n.queryString,
                            srcset: o
                        })
                    }
                }), r
            })(i, a, n[a]);
            return $e.createElement("div", {
                className: o
            }, $e.createElement(jo, {
                type: a,
                data: i
            }, $e.createElement("div", {
                className: lr.a.root
            }, $e.createElement("picture", null, c && c.map(e => $e.createElement("source", {
                media: e.media,
                srcSet: e.srcset
            })), $e.createElement("img", {
                className: sr()({
                    [lr.a.contentWithIcon]: r,
                    [lr.a.contentWithoutIcon]: !r
                }),
                src: i.slices.default,
                alt: i.name,
                title: i.name
            })), r && $e.createElement("div", {
                className: lr.a.overlay
            }, $e.createElement(To, {
                type: a
            })))))
        };
    No.defaultProps = {
        showActionIcon: !0
    };
    var Ao = No,
        ko = n(25),
        Co = n.n(ko);
    var Io = e => {
        let {
            timeout: t,
            children: n
        } = e;
        const [r, o] = ue(!0);
        return ((e, t) => {
            fe(() => {
                const n = setTimeout(e, t);
                return () => {
                    clearTimeout(n)
                }
            }, [])
        })(() => {
            o(!1)
        }, t), $e.createElement("div", {
            className: sr()(Co.a.root, {
                [Co.a.sticky]: r,
                [Co.a.notSticky]: !r
            })
        }, n)
    };
    var Do = () => {
            const {
                title: e,
                media: t,
                description: n
            } = un(Jn), r = dn("BANNER_STICKY_MOBILE"), o = dn("BANNER_BILLBOARD_DESKTOP"), i = t && "video" === t.type;
            return $e.createElement(B, null, $e.createElement(Io, {
                timeout: 1e4
            }, $e.createElement("div", {
                id: r,
                className: ar.a.ads
            })), $e.createElement("div", {
                id: o,
                className: ar.a.ads
            }), $e.createElement("div", {
                className: ar.a.root
            }, $e.createElement("div", {
                className: ar.a.subHeader
            }, $e.createElement("div", {
                className: ar.a.titleAndImage
            }, $e.createElement("div", {
                className: ar.a.title
            }, e), $e.createElement(Ao, {
                className: ar.a.media,
                media: t,
                sizes: Tn,
                showActionIcon: i
            })), n && $e.createElement("div", {
                className: ar.a.description
            }, n))))
        },
        Ro = n(12),
        Uo = n.n(Ro);
    const Bo = e => {
        let {
            classIn: t,
            classOut: n,
            className: r,
            show: o,
            keepMounted: i,
            children: a
        } = e;
        const [c, s] = ue(o), [u, l] = ue(!1), f = de(null);
        fe(() => {
            o && s(!0)
        }, [o]);
        const p = sr()(Uo.a.root, r, {
            [Uo.a[t] || t]: o
        }, {
            [Uo.a[n] || n]: !o
        }, {
            [Uo.a.hidden]: !c
        }, {
            [Uo.a.avoidClick]: u
        });
        return c || i ? $e.createElement("div", {
            ref: f,
            className: p,
            onAnimationStart: e => {
                let {
                    target: t
                } = e;
                t === f.current && l(!0)
            },
            onAnimationEnd: e => {
                let {
                    target: t
                } = e;
                t === f.current && (l(!1), o || s(!1))
            }
        }, a) : null
    };
    Bo.defaultProps = {
        className: null,
        keepMounted: !1
    };
    var Lo = Bo,
        Mo = n(51),
        Fo = n.n(Mo);

    function zo(e, t, n) {
        return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }
    const Ho = {
        "globo-captcha": e => {
            let {
                appId: t,
                onSolve: n
            } = e;
            const {
                error: r
            } = un(lo), o = de(null);
            return fe(() => {
                (function(e) {
                    return function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        try {
                            return Promise.resolve(e.apply(this, t))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
                })((function() {
                    return zo(window.GloboCaptcha.ready(), (function() {
                        const e = r && r.status && Cn[r.status],
                            i = {
                                appId: t,
                                element: o.current,
                                text: "Para confirmar seu voto, selecione:",
                                errorMessage: e
                            };
                        return zo(window.GloboCaptcha.render(i), (function(e) {
                            n(e)
                        }))
                    }))
                }))()
            }, []), $e.createElement("div", {
                className: Fo.a.root,
                ref: o
            })
        },
        "recaptcha-invisible": e => {
            let {
                siteKey: t,
                onSolve: n,
                onError: r
            } = e;
            const o = de(null),
                {
                    grecaptcha: i
                } = window;
            return fe(() => {
                (() => {
                    const e = {
                        sitekey: t,
                        size: "invisible",
                        badge: "inline",
                        callback: e => {
                            o.current.innerHTML = "", n(e)
                        },
                        "error-callback": r
                    };
                    try {
                        i.render(o.current, e), i.execute()
                    } catch (e) {
                        r(e)
                    }
                })()
            }, []), $e.createElement("div", {
                ref: o
            })
        }
    };
    var Wo = n(26),
        qo = n.n(Wo),
        Vo = n(13),
        Go = n.n(Vo);
    const Yo = e => {
        let {
            text: t,
            immediate: n
        } = e;
        return $e.createElement("div", {
            className: sr()(Go.a.root, {
                [Go.a.immediate]: n,
                [Go.a.delayed]: !n
            })
        }, $e.createElement("div", {
            className: Go.a.spinner
        }), t && $e.createElement("div", {
            className: Go.a.text
        }, t))
    };
    Yo.defaultProps = {
        immediate: !1,
        text: ""
    };
    var $o = Yo;

    function Ko() {
        return (Ko = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function Zo(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    const Jo = e => {
        let {
            visible: t
        } = e, n = Zo(e, ["visible"]);
        const r = un(En),
            o = (e => Ho[e])(r.captcha),
            {
                posting: i
            } = un(lo);
        return $e.createElement(Lo, {
            className: qo.a.root,
            classIn: qo.a.slideInDown,
            classOut: qo.a.slideOutUp,
            show: t
        }, $e.createElement(o, Ko({
            onSolve: e => {
                an()(mo({
                    captchaToken: e
                }))
            }
        }, r.configuration, n)), i && $e.createElement($o, {
            text: "Processando seu voto"
        }))
    };
    Jo.defaultProps = {
        visible: !0
    };
    var Qo = Jo;
    const Xo = e => t => {
        true && (e => e instanceof Event)(t) && e(t)
    };
    var ei = n(7),
        ti = n.n(ei);
    var ni = e => {
            let {
                option: t
            } = e;
            const {
                posting: n,
                optionId: r,
                error: o
            } = un(lo), i = an(), {
                id: a,
                title: c,
                enabled: s
            } = t, u = r === a, l = o && [kn.incorrectCaptcha, kn.unauthorizedUser, kn.sessionExpired].includes(o.status), f = sr()(ti.a.root, {
                [ti.a.selected]: u,
                [ti.a.disabled]: !s,
                [ti.a.error]: u && l,
                [ti.a.processing]: n
            });
            return $e.createElement("div", {
                className: f
            }, $e.createElement("div", {
                className: ti.a.option,
                onClick: Xo(() => {
                    u || !s || n || i(yo({
                        option: t
                    }))
                })
            }, $e.createElement("div", {
                className: ti.a.text
            }, c), $e.createElement(Ao, {
                className: ti.a.media,
                media: t.media,
                sizes: Nn
            })), r && $e.createElement(Qo, {
                visible: u
            }))
        },
        ri = n(52),
        oi = n.n(ri);
    var ii = () => {
            const {
                options: e
            } = un(Jn);
            return $e.createElement("div", {
                className: oi.a.root
            }, e.map(e => $e.createElement(ni, {
                option: e
            })))
        },
        ai = n(34),
        ci = n.n(ai),
        si = n(27),
        ui = n.n(si);
    var li = e => {
        let {
            children: t,
            handleClick: n,
            className: r,
            primary: o = !1,
            secondary: i = !1
        } = e;
        return $e.createElement("button", {
            className: sr()({
                [ui.a.primary]: o,
                [ui.a.secondary]: i
            }, r, ui.a.button),
            onClick: Xo(n)
        }, t)
    };
    var fi = e => {
        let {
            className: t,
            fetch: n = !1,
            primary: r = !1,
            secondary: o = !1
        } = e;
        const {
            result: {
                partialEnabled: i,
                finalEnabled: a
            }
        } = un(Xn), {
            status: c
        } = un(Jn), s = Object(ln.isClosed)(c);
        if (s && !a || !s && !i) return null;
        return $e.createElement(li, {
            className: t,
            primary: r,
            secondary: o,
            handleClick: () => {
                const e = an();
                e(n ? Qr() : qn())
            }
        }, s ? "Ver Resultado" : "Ver Resultado Parcial")
    };
    var pi = () => $e.createElement("div", {
            className: ci.a.root
        }, $e.createElement(fi, {
            fetch: !0,
            className: ci.a.resultButton
        })),
        di = n(15),
        hi = n.n(di),
        vi = n(53),
        yi = n.n(vi);
    var mi = () => $e.createElement("svg", {
        className: yi.a.root,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
    }, $e.createElement("path", {
        d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"
    }), $e.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }));
    var _i = () => {
            const {
                title: e
            } = un(Jn);
            return $e.createElement("div", {
                className: hi.a.root
            }, $e.createElement("div", null, $e.createElement("span", {
                className: hi.a.header
            }, $e.createElement(mi, null), "VotaÃ§Ã£o encerrada"), $e.createElement("span", {
                className: hi.a.title
            }, e), $e.createElement("span", {
                className: hi.a.message
            }, "Esta votaÃ§Ã£o foi encerrada. Agradecemos sua participaÃ§Ã£o!"), $e.createElement(fi, {
                primary: !0
            })))
        },
        bi = n(35),
        gi = n.n(bi);
    var wi = e => {
        let {
            shareText: t,
            className: n
        } = e;
        const r = {
                slug: "facebook",
                label: "Facebook"
            },
            o = {
                slug: "twitter",
                label: "Twitter"
            },
            i = {
                slug: "system",
                label: "System"
            },
            a = e => () => {
                jr(e.label)
            };
        return $e.createElement("div", {
            className: sr()(n, gi.a.root)
        }, $e.createElement("amp-social-share", {
            className: gi.a.icon,
            type: r.slug,
            onClick: a(r),
            "data-param-app_id": "289255557788943",
            width: "20",
            height: "20",
            "data-param-quote": t
        }), $e.createElement("amp-social-share", {
            type: o.slug,
            onClick: a(o),
            width: "20",
            height: "20",
            "data-param-text": t
        }), $e.createElement("amp-social-share", {
            type: i.slug,
            onClick: a(i),
            width: "20",
            height: "20",
            "data-mode": "replace"
        }))
    };
    const Oi = e => {
        let {
            source: t,
            className: n
        } = e;
        const r = de(null);
        return fe(() => {
            const e = document.querySelector(t);
            if (null === e) return () => {};
            const n = r.current;
            return n.append(...e.childNodes), () => {
                e.append(...n.childNodes)
            }
        }, []), $e.createElement("div", {
            className: n,
            ref: r
        })
    };
    Oi.defaultProps = {
        className: ""
    };
    var Ei = Oi,
        Pi = n(3),
        xi = n.n(Pi),
        Si = n(54),
        ji = n.n(Si);
    var Ti = () => $e.createElement("svg", {
        className: ji.a.root,
        version: "1.1",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, $e.createElement("title", null, "baseline-check_circle-24px"), $e.createElement("desc", null, "Created with Sketch."), $e.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, $e.createElement("g", {
        transform: "translate(-24 -157)"
    }, $e.createElement("g", {
        transform: "translate(23 156)"
    }, $e.createElement("polygon", {
        points: "0 0 16 0 16 16 0 16"
    }), $e.createElement("path", {
        d: "m8 1.3333c-3.68 0-6.6667 2.9867-6.6667 6.6667s2.9867 6.6667 6.6667 6.6667 6.6667-2.9867 6.6667-6.6667-2.9867-6.6667-6.6667-6.6667zm-1.3333 10l-3.3333-3.3333 0.94-0.94 2.3933 2.3867 5.06-5.06 0.94 0.94667-6 6z",
        fill: "#34C771",
        fillRule: "nonzero"
    })))));
    var Ni = e => {
        let {
            bannerId: t,
            className: n
        } = e;
        const r = de(null);
        return fe(() => {
            const e = Date.now(),
                n = "".concat(t, "__").concat(e);
            r.current.id = n, (e => new Promise((t, n) => {
                Lr("bannerLazyLoading", () => {
                    try {
                        window.bannerLazyLoading(e), t()
                    } catch (e) {
                        n(e)
                    }
                })
            }))(n)
        }, []), $e.createElement("div", {
            className: n,
            ref: r
        })
    };
    var Ai = () => {
            const {
                title: e
            } = un(Jn) || {}, {
                optionId: t,
                startTime: n
            } = un(Vn), {
                title: r,
                media: o
            } = un(Qn(t)) || {}, i = un(lo), a = an(), c = o && "video" === o.type, s = i.optionId || t || i.error;
            return $e.createElement("div", {
                className: xi.a.root
            }, $e.createElement("div", {
                className: xi.a.feedback
            }, $e.createElement("div", {
                className: xi.a.option
            }, $e.createElement("div", {
                className: xi.a.header
            }, $e.createElement("span", {
                className: xi.a.title
            }, $e.createElement("span", null, $e.createElement(Ti, null)), $e.createElement("span", null, "VocÃª votou em")), $e.createElement("span", {
                className: xi.a.optionTitle
            }, r), r && $e.createElement(wi, {
                shareText: "Votei na OpÃ§Ã£o '".concat(r, "' em '").concat(e, "'")
            })), $e.createElement(Ao, {
                sizes: Nn,
                media: o,
                className: xi.a.media,
                showActionIcon: c
            })), $e.createElement("div", {
                className: xi.a.footer
            }, $e.createElement(li, {
                handleClick: () => {
                    Sr(n), a(zn())
                },
                primary: !0
            }, "Votar Novamente"), $e.createElement(fi, {
                secondary: !0
            })), $e.createElement(Ei, {
                className: xi.a.sectionComponent,
                source: "#roulette-section-component"
            })), s && $e.createElement("div", null, $e.createElement(Ni, {
                bannerId: dn("BANNER_FEEDBACK_MOBILE"),
                className: xi.a.ads
            }), $e.createElement(Ni, {
                bannerId: dn("BANNER_FEEDBACK_DESKTOP"),
                className: xi.a.ads
            })))
        },
        ki = n(8),
        Ci = n.n(ki);
    const Ii = e => {
        let {
            imgSrc: t,
            title: n,
            text: r
        } = e;
        const o = an();
        return $e.createElement("div", {
            className: Ci.a.root
        }, $e.createElement("div", {
            className: Ci.a.message
        }, t && $e.createElement("img", {
            className: Ci.a.feedbackImage,
            src: t,
            alt: n
        }), $e.createElement("span", {
            className: Ci.a.title
        }, n), $e.createElement("span", {
            className: Ci.a.text
        }, r), $e.createElement(li, {
            className: Ci.a.tryAgain,
            handleClick: () => {
                o(zn())
            },
            primary: !0
        }, "Tentar Novamente")))
    };
    Ii.defaultProps = {
        imgSrc: ""
    };
    var Di = Ii;
    var Ri = () => $e.createElement(Di, {
        imgSrc: In,
        title: "Parece que ocorreu um erro.",
        text: "Desculpe, nÃ£o foi possÃ­vel carregar a pÃ¡gina. Por favor, tente novamente."
    });
    var Ui = () => $e.createElement(Di, {
            imgSrc: Dn,
            title: "Estamos com muitos acessos!",
            text: "Por favor, aguarde um momento e tente outra vez."
        }),
        Bi = n(1),
        Li = n.n(Bi);

    function Mi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Fi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const zi = e => {
        let {
            option: t
        } = e;
        return $e.createElement("div", {
            className: Li.a.optionContainer
        }, $e.createElement("div", {
            className: Li.a.option
        }, $e.createElement("div", {
            className: Li.a.text
        }, $e.createElement("span", {
            className: Li.a.title
        }, t.title), $e.createElement("span", {
            className: Li.a.result
        }, t.result, "%")), $e.createElement(Ao, {
            media: t.media,
            sizes: Nn,
            showActionIcon: t.media && "video" === t.media.type,
            className: Li.a.media
        })), $e.createElement("div", {
            className: Li.a.percentageBar
        }, $e.createElement("div", {
            className: Li.a.percentageInnerBar,
            style: {
                width: "".concat(t.result, "%")
            }
        }, $e.createElement("div", {
            className: Li.a.progressBar
        }))))
    };
    const Hi = {
        [An.closedPoll]: _i,
        [An.successfulVote]: Ai,
        [An.defaultError]: Ri,
        [An.result]: () => {
            const {
                options: e
            } = un(Zr);
            if (!e || !e.length) return null;
            const {
                status: t,
                title: n,
                description: r,
                options: o
            } = un(Jn), i = Object(ln.isClosed)(t), a = o.map((t, n) => (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Mi(n, !0).forEach((function(t) {
                        Fi(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mi(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            })({}, t, {
                result: e[n]
            })).sort((e, t) => t.result - e.result);
            return $e.createElement("div", {
                className: Li.a.root
            }, $e.createElement("div", {
                className: Li.a.header
            }, $e.createElement("div", {
                className: Li.a.status
            }, t.name), $e.createElement("div", {
                className: Li.a.title
            }, n), $e.createElement("div", {
                className: Li.a.description
            }, r)), a.map(e => $e.createElement(zi, {
                option: e
            })), $e.createElement(li, {
                className: Li.a.button,
                handleClick: () => {
                    const e = an();
                    i ? e(Hn()) : (Or(), e(zn()))
                },
                primary: !0
            }, i ? "Fechar" : "Votar"))
        },
        [An.overloadError]: Ui
    };
    var Wi = n(55),
        qi = n.n(Wi);
    const Vi = e => {
        let {
            onChange: t
        } = e;
        const n = de(),
            {
                name: r
            } = un(Vn);
        return fe(() => {
            t(r ? n.current : null)
        }), $e.createElement(B, null, (() => Object.entries(Hi))().map(e => {
            let [t, o] = e;
            return $e.createElement(Lo, {
                key: t,
                className: qi.a.root,
                classIn: "fadeIn",
                classOut: "fadeOut",
                keepMounted: !0,
                show: t === r
            }, $e.createElement("div", {
                ref: t === r ? n : null
            }, $e.createElement(o, null)))
        }))
    };
    Vi.defaultProps = {
        onChange: () => {}
    };
    var Gi = Vi,
        Yi = n(56),
        $i = n.n(Yi),
        Ki = () => {
            const [e, t] = ue(null), {
                id: n,
                status: r
            } = un(Jn), o = an(), i = Object(ln.isClosed)(r), {
                isOpen: a
            } = un(Vn);
            return fe(() => {
                o(i ? Hn() : xn({
                    pollId: n
                }))
            }, []), $e.createElement("div", {
                className: $i.a.root,
                style: {
                    height: e || "auto"
                }
            }, $e.createElement(Lo, {
                classIn: "fadeIn",
                classOut: "fadeOut",
                show: !a && !i,
                keepMounted: !0
            }, $e.createElement(or, null), $e.createElement(Do, null), $e.createElement(ii, null), $e.createElement(pi, null)), $e.createElement(Gi, {
                onChange: e => {
                    if (e) {
                        const {
                            height: n
                        } = e.getBoundingClientRect();
                        t(n)
                    } else t(null)
                }
            }))
        };

    function Zi(e) {
        return function(t) {
            var n = t.dispatch,
                r = t.getState;
            return function(t) {
                return function(o) {
                    return "function" == typeof o ? o(n, r, e) : t(o)
                }
            }
        }
    }
    var Ji = Zi();
    Ji.withExtraArgument = Zi;
    var Qi = Ji;
    const Xi = function(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                0, "function" == typeof e[o] && (n[o] = e[o])
            }
            var i, a = Object.keys(n);
            try {
                ! function(e) {
                    Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        if (void 0 === n(void 0, {
                                type: Et.INIT
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === n(void 0, {
                                type: Et.PROBE_UNKNOWN_ACTION()
                            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + Et.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }))
                }(n)
            } catch (e) {
                i = e
            }
            return function(e, t) {
                if (void 0 === e && (e = {}), i) throw i;
                for (var r = !1, o = {}, c = 0; c < a.length; c++) {
                    var s = a[c],
                        u = n[s],
                        l = e[s],
                        f = u(l, t);
                    if (void 0 === f) {
                        var p = St(s, t);
                        throw new Error(p)
                    }
                    o[s] = f, r = r || f !== l
                }
                return r ? o : e
            }
        }(o),
        ea = {},
        ta = kt(function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments),
                        r = function() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                        },
                        o = {
                            getState: n.getState,
                            dispatch: function() {
                                return r.apply(void 0, arguments)
                            }
                        },
                        i = t.map((function(e) {
                            return e(o)
                        }));
                    return At({}, n, {
                        dispatch: r = kt.apply(void 0, i)(n.dispatch)
                    })
                }
            }
        }(Qi, wo));
    n(135);

    function na(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ra(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    const oa = document.querySelector("#roulette-root");
    if (!oa) throw new Error("[Roulette] root element not found");
    const {
        poll: ia,
        result: aa,
        settings: ca
    } = [...oa.querySelectorAll('script[type="application/json"]')].reduce((e, t) => (e[t.getAttribute("data-name")] = JSON.parse(t.innerHTML), e), {});
    var sa;
    if (!oa || !ca) throw new Error("[Roulette] missing required initialization data");
    (e => {
        if (fn) throw new Error("Configuration already initialized");
        fn = e, pn = e => fn[e]
    })(function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? na(n, !0).forEach((function(t) {
                ra(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }({}, ca.manifest, {}, ca.misc, {
        tenantId: ia.tenantId
    })), (sa = dn("SENTRY_DSN")) && Lr("Sentry", () => window.Sentry.init({
        dsn: sa
    }));
    const ua = (() => xt(Xi, ea, ta))();
    ua.dispatch((e => ({
        type: "poll/LOAD",
        poll: e
    }))(ia)), ua.dispatch(Jr(aa)), oa.style.setProperty("--tenant-color", dn("TENANT_COLOR"));
    De($e.createElement(() => $e.createElement(ot, {
        store: ua
    }, $e.createElement(Ki, null)), null), oa)
}]);;
! function(t) {
    function n(e) {
        if (o[e]) return o[e].exports;
        var r = o[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
    }
    var o = {};
    n.m = t, n.c = o, n.p = "", n(0)
}([function(t, n, o) {
    t.exports = o(1)
}, function(t, n) {
    "use strict";

    function o() {
        return window.scrollY
    }

    function e(t, n, e) {
        var r = o();
        0 === r ? t() : r > s ? n() : e(), s = r
    }

    function r() {
        u.remove("sticky")
    }

    function c() {
        u.remove("sticky")
    }

    function i() {
        u.add("sticky")
    }
    var s = 0,
        u = document.getElementById("header-produto").classList;
    window.addEventListener("scroll", function(t) {
        o() >= 170 ? e(r, c, i) : r()
    })
}]);;
! function(e) {
    function o(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return e[t].call(a.exports, a, a.exports, o), a.loaded = !0, a.exports
    }
    var n = {};
    o.m = e, o.c = n, o.p = "", o(0)
}([function(e, o, n) {
    e.exports = n(3)
}, function(e, o) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var n = function() {
        var e = document.querySelectorAll(".mosaico__escudo--lazy");
        if ("IntersectionObserver" in window) {
            var o = new IntersectionObserver(function(e, o) {
                e.forEach(function(e) {
                    if (e.isIntersecting) {
                        var n = e.target;
                        n.src = n.dataset.src, n.classList.remove("mosaico__escudo--lazy"), o.unobserve(n)
                    }
                })
            });
            e.forEach(function(e) {
                o.observe(e)
            })
        } else e.forEach(function(e) {
            e.src = e.dataset.src, e.classList.remove("mosaico__escudo--lazy")
        })
    };
    o.default = n
}, , function(e, o, n) {
    "use strict";
    var t = n(1),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(t);
    if (function() {
            var e = function() {};
            e.prototype.init = function() {
                var e = this,
                    o = 30,
                    n = setInterval(function() {
                        var t = document.querySelector("#menu-addon"),
                            r = document.querySelector("#header-personalization");
                        null !== t && 0 == t.innerHTML.length && (e.MenuPersonalization(), e.MarkChecked(), e.gaBindMenu(), window.MosaicoOnMenu = !0), null !== r && 0 == r.innerHTML.length && (document.dispatchEvent(new CustomEvent("glb.header.personalize", {
                            detail: {
                                selector: "#mosaico__wrapper"
                            }
                        })), e.HeaderPersonalization(), e.HeaderFloatingPersonalization(), e.MarkChecked(), e.gaBindEscudo(), window.MosaicoOnHeader = !0), o--, (window.MosaicoOnMenu && window.MosaicoOnHeader || 0 === o) && (clearInterval(n), (0, a.default)())
                    }, 1e3)
            }, e.prototype.HeaderPersonalization = function() {
                for (var e = document.querySelectorAll("#header-personalization"), o = 0; o < e.length; o++) 0 == o && (e[o].appendChild(document.getElementById("mosaico-header")), e[o].querySelector(".icons-escudo-header").style.display = "block", -1 === e[o].previousElementSibling.className.indexOf("menu-divisor-after-logo") && (e[o].querySelector(".mosaico__header-personalization--times-label").style.display = "block")), e[o].classList.add("header-personalization--mosaico")
            }, e.prototype.HeaderFloatingPersonalization = function() {
                var e = document.querySelectorAll(".floating-bar .mosaico__tabs");
                this.ChangeRadiosIds(e, "floating")
            }, e.prototype.MenuPersonalization = function() {
                var e = document.querySelector("#menu-addon");
                e.appendChild(document.querySelector("#mosaico-header").cloneNode(!0));
                var o = e.querySelectorAll(".mosaico__tabs");
                this.ChangeRadiosIds(o, "menu-addon"), document.getElementById("menu-rounder").classList.add("menu-with-mosaico"), e.querySelector("#mosaico-header").style.display = "block"
            }, e.prototype.ChangeRadiosIds = function(e, o) {
                for (var n = 0; n < e.length; n++) {
                    var t = "tab-" + (n + 1) + "-" + o;
                    e[n].id = t, e[n].name = "mosaico__tabs--" + o, e[n].nextElementSibling.setAttribute("for", t)
                }
            }, e.prototype.MarkChecked = function() {
                for (var e = document.querySelectorAll('[id^="tab-1"]'), o = 0; o < e.length; o++) e[o].checked = !0
            }, e.prototype.gaBindEscudo = function() {
                var e = document.querySelectorAll(".header-personalization #mosaico-header .mosaico__equipe-nome"),
                    o = document.querySelectorAll(".header-personalization #mosaico-header .mosaico__escudo");
                Array.from(e).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        _gaq.push(["_trackEvent", "escudo", "Clique no item", this.innerText, 0, !0])
                    })
                }), Array.from(o).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        _gaq.push(["_trackEvent", "escudo", "Clique no item", this.title, 0, !0])
                    })
                })
            }, e.prototype.gaBindMenu = function() {
                var e = document.querySelectorAll("#menu-addon #mosaico-header .mosaico__equipe-nome"),
                    o = document.querySelectorAll("#menu-addon #mosaico-header .mosaico__escudo");
                Array.from(e).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        _gaq.push(["_trackEvent", "mosaico de times", "Clique no item", this.innerText, 0, !0])
                    })
                }), Array.from(o).forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        _gaq.push(["_trackEvent", "mosaico de times", "Clique no item", this.title, 0, !0])
                    })
                })
            }, window.MosaicoEquipes = e
        }(), !window.mosaicoError) {
        var r = new window.MosaicoEquipes;
        document.addEventListener("glb.header.ready", r.init(), !1)
    }
}]);;
! function(e) {
    var o = {};

    function n(t) {
        if (o[t]) return o[t].exports;
        var i = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = o, n.d = function(e, o, t) {
        n.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: t
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, o) {
        if (1 & o && (e = n(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var i in e) n.d(t, i, function(o) {
                return e[o]
            }.bind(null, i));
        return t
    }, n.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(o, "a", o), o
    }, n.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, n.p = "", n(n.s = 0)
}([function(e, o, n) {
    "use strict";
    n.r(o);
    const t = e => () => {
            e <= 0 || (window.ga ? document.dispatchEvent(new Event("GoogleAnalyticsAvailable")) : window.setTimeout(t(e - 1), 300))
        },
        i = (...e) => {
            window.gaQueue || (window.gaQueue = []), window.gaQueue.push(e)
        };
    var r, a = (r = "ge_portal.set", (e, o) => {
        (window.ga || i)(r, e, o)
    });
    const {
        relevanciaJogo: s
    } = window.ge && window.ge.customDimensions || {};
    var d, u = (d = a, e => () => {
        e && d("dimension3", e)
    })(s);
    const {
        teamsPlaying: c
    } = window.ge && window.ge.customDimensions || {};
    var l = (e => o => async n => {
        if (await n.globoid()) try {
            const t = await n.getTeam();
            if (t && t.futebol) {
                const {
                    name: n
                } = t.futebol;
                return void e("dimension51", o.includes(n) ? "oferta ativa" : "sem oferta")
            }
            e("dimension51", "sem time")
        } catch (e) {
            console.error(e)
        } else e("dimension51", "deslogado")
    })(a)(c);
    var m = () => {
        const e = window.ge && window.ge.user;
        (async e => {
            if (e) try {
                if (await e.globoid()) {
                    const o = await e.assinatura.premiere();
                    o.autorizado ? "ott" === o.tipo ? a("dimension93", "premiere OTT") : a("dimension93", "premiere operadora") : a("dimension93", "nenhum premiere")
                } else a("dimension93", "deslogado")
            } catch (e) {
                console.error(e)
            }
        })(e), (async e => {
            if (e) try {
                if (await e.globoid()) {
                    const o = await e.assinatura.cartola();
                    o.autorizado ? "pro" === o.tipo ? a("dimension58", "cartola pro") : a("dimension58", "cartola free") : a("dimension58", "nenhum cartola")
                } else a("dimension58", "deslogado")
            } catch (e) {
                console.error(e)
            }
        })(e), l(e), u()
    };
    document.addEventListener("DOMContentLoaded", t(10)), document.addEventListener("GoogleAnalyticsAvailable", () => window.gaQueue.map(e => window.ga(...e))), m()
}]);;
