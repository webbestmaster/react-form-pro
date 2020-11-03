module.exports = (() => {
    var e = {
            228: e => {
                e.exports = function (e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                };
            },
            858: e => {
                e.exports = function (e) {
                    if (Array.isArray(e)) return e;
                };
            },
            646: (e, t, r) => {
                var n = r(228);
                e.exports = function (e) {
                    if (Array.isArray(e)) return n(e);
                };
            },
            713: e => {
                e.exports = function (e, t, r) {
                    return (
                        t in e
                            ? Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !0})
                            : (e[t] = r),
                        e
                    );
                };
            },
            860: e => {
                e.exports = function (e) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                };
            },
            884: e => {
                e.exports = function (e, t) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (
                                var i, u = e[Symbol.iterator]();
                                !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (a = e);
                        } finally {
                            try {
                                n || null == u.return || u.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return r;
                    }
                };
            },
            521: e => {
                e.exports = function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                };
            },
            206: e => {
                e.exports = function () {
                    throw new TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                };
            },
            38: (e, t, r) => {
                var n = r(858),
                    o = r(884),
                    a = r(379),
                    i = r(521);
                e.exports = function (e, t) {
                    return n(e) || o(e, t) || a(e, t) || i();
                };
            },
            319: (e, t, r) => {
                var n = r(646),
                    o = r(860),
                    a = r(379),
                    i = r(206);
                e.exports = function (e) {
                    return n(e) || o(e) || a(e) || i();
                };
            },
            379: (e, t, r) => {
                var n = r(228);
                e.exports = function (e, t) {
                    if (e) {
                        if ('string' == typeof e) return n(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                            'Object' === r && e.constructor && (r = e.constructor.name),
                            'Map' === r || 'Set' === r
                                ? Array.from(e)
                                : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                ? n(e, t)
                                : void 0
                        );
                    }
                };
            },
            593: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        Form: () => y,
                        formButtonTypeName: () => m,
                        noValidate: () => b,
                        validateRequired: () => v,
                    });
                var n = r(319),
                    o = r.n(n),
                    a = r(713),
                    i = r.n(a),
                    u = r(38),
                    l = r.n(u);
                const c = require('react');
                var f = r.n(c);
                function s(e) {
                    var t = e.isRender,
                        r = e.children;
                    return t ? r : null;
                }
                function p(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t &&
                            (n = n.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            r.push.apply(r, n);
                    }
                    return r;
                }
                function d(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? p(Object(r), !0).forEach(function (t) {
                                  i()(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                            : p(Object(r)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                              });
                    }
                    return e;
                }
                function y(e) {
                    var t,
                        r = e.fieldSetList,
                        n = e.onError,
                        a = e.onSubmit,
                        u = e.buttonList,
                        p = e.title,
                        y = (0, c.useState)(
                            (function (e) {
                                var t = e.fieldSetList,
                                    r = {};
                                return (
                                    t.forEach(function (e) {
                                        e.inputList.forEach(function (e) {
                                            var t = e.name,
                                                n = e.defaultValue;
                                            r[t] = n;
                                        });
                                    }),
                                    r
                                );
                            })(e),
                        ),
                        m = l()(y, 2),
                        b = m[0],
                        v = m[1],
                        h = (0, c.useState)({}),
                        O = l()(h, 2),
                        g = O[0],
                        j = O[1];
                    function S(e) {
                        return !0 === e.isHidden
                            ? (function (e) {
                                  var t = e.name;
                                  return f().createElement('div', {className: '_861d6a', key: t}, E(e));
                              })(e)
                            : E(e);
                    }
                    function E(e) {
                        var t,
                            r,
                            n = e.name,
                            o = e.defaultValue,
                            a = e.placeholder,
                            u = e.label,
                            l = e.accept,
                            c = e.optionList,
                            s = e.isHidden,
                            p = e.additional,
                            y = e.inputComponent,
                            m = (function (e) {
                                return function (t) {
                                    var r = e.name,
                                        n = e.validate,
                                        o = d(d({}, b), {}, i()({}, r, t)),
                                        a = n(r, t, o);
                                    v(o), 0 === a.length && j(d(d({}, g), {}, i()({}, r, [])));
                                };
                            })(e),
                            h = (function (e) {
                                return function (t) {
                                    var r = e.name,
                                        n = e.validate,
                                        o = d(d({}, b), {}, i()({}, r, t)),
                                        a = n(r, t, o),
                                        u = d(d({}, g), {}, i()({}, r, a));
                                    v(o), j(u);
                                };
                            })(e),
                            O =
                                ((t = g),
                                (r = n),
                                Boolean(t) && Reflect.apply(Object.prototype.hasOwnProperty, t, [r]) ? g[n] : []);
                        return f().createElement(y, {
                            accept: l,
                            additional: p,
                            defaultValue: o,
                            errorList: O,
                            isHidden: s,
                            key: n,
                            label: u,
                            name: n,
                            onBlur: h,
                            onChange: m,
                            optionList: c,
                            placeholder: a,
                        });
                    }
                    return f().createElement(
                        'form',
                        {
                            action: '#',
                            className: 'b65a84',
                            method: 'post',
                            onSubmit: function (e) {
                                e.preventDefault();
                                var t = (function () {
                                    var e = {},
                                        t = [];
                                    return (
                                        r.forEach(function (r) {
                                            r.inputList.forEach(function (r) {
                                                var n = r.name,
                                                    a = (0, r.validate)(n, b[n], b);
                                                (e[n] = a), t.push.apply(t, o()(a));
                                            });
                                        }),
                                        j(e),
                                        t
                                    );
                                })();
                                0 !== t.length ? n(t, b) : a(b);
                            },
                        },
                        f().createElement('h3', null, p),
                        r.map(function (e, t) {
                            var r = e.legend,
                                n = e.inputList,
                                o = Boolean(r);
                            return f().createElement(
                                'fieldset',
                                {key: t},
                                f().createElement(s, {isRender: o}, f().createElement('legend', null, r)),
                                n.map(S),
                            );
                        }),
                        ((t = u),
                        f().createElement(
                            'div',
                            null,
                            t.map(function (e, t) {
                                var r = e.isPrimary,
                                    n = e.onClick,
                                    o = e.title,
                                    a = e.type;
                                return f().createElement(
                                    'button',
                                    {key: t, onClick: n, type: a},
                                    o,
                                    ' - ',
                                    !0 === r ? 'primary' : 'secondary',
                                );
                            }),
                        )),
                    );
                }
                var m = {button: 'button', submit: 'submit', reset: 'reset'};
                function b(e, t, r) {
                    return [];
                }
                function v(e, t, r) {
                    var n = [new Error('Required field!')];
                    if (
                        (function (e) {
                            return 'string' == typeof e;
                        })(t)
                    )
                        return '' === t ? n : [];
                    if (
                        (function (e) {
                            return 'number' == typeof e && !Number.isNaN(e);
                        })(t)
                    )
                        return t <= 0 || Number.isNaN(t) ? n : [];
                    if (
                        (function (e) {
                            return 'boolean' == typeof e;
                        })(t)
                    )
                        return !1 === t ? n : [];
                    if (
                        (function (e) {
                            return null === e;
                        })(t)
                    )
                        return n;
                    if (Array.isArray(t)) return 0 === t.length ? n : [];
                    if (
                        (function (e) {
                            return e instanceof File;
                        })(t)
                    )
                        return [];
                    throw new Error('Type has no validation! Add validation here!');
                }
            },
        },
        t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = {exports: {}});
        return e[n](o, o.exports, r), o.exports;
    }
    return (
        (r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {a: t}), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
        }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = e => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(e, '__esModule', {value: !0});
        }),
        r(593)
    );
})();
