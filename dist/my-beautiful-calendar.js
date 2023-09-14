(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";.calendar-container{background-color:#e6e6e6;padding:1em;color:#000;font-family:Inter,sans-serif;border-radius:10px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;width:300px}.calendar-header{display:flex;align-items:center;flex-direction:column}.month-year{width:100%;display:flex;align-items:center;justify-content:space-between}.daysof-week{font-weight:700;color:#585e6b}.calendar-header span{font-weight:700;color:#2d3648}.calendar-controls{display:flex;gap:1em}.button-controls{border-radius:50%;border:none;padding:5px;background-color:transparent;color:#2d3648;cursor:pointer}.button-controls:hover{background-color:#2d364859;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;color:#fff}.icon-arrow-left,.icon-arrow-right{width:20px;display:flex;align-items:center;justify-content:center}.calendar-body,.calendar-week{display:grid;grid-template-columns:repeat(7,1fr);margin-top:1.5em}.days{background-color:#cacaca;height:35px;width:35px;margin:2px;display:flex;align-items:center;justify-content:center;border-radius:20px;color:#2d3648;font-weight:400}.empty{background-color:transparent}.today{background-color:coral;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;color:#fff}')),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import Pe, { useState as ir } from "react";
var f = {}, sr = {
  get exports() {
    return f;
  },
  set exports(v) {
    f = v;
  }
}, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function ur() {
  if (Oe)
    return $;
  Oe = 1;
  var v = Pe, y = Symbol.for("react.element"), S = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, D = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(_, s, h) {
    var p, b = {}, R = null, w = null;
    h !== void 0 && (R = "" + h), s.key !== void 0 && (R = "" + s.key), s.ref !== void 0 && (w = s.ref);
    for (p in s)
      j.call(s, p) && !k.hasOwnProperty(p) && (b[p] = s[p]);
    if (_ && _.defaultProps)
      for (p in s = _.defaultProps, s)
        b[p] === void 0 && (b[p] = s[p]);
    return { $$typeof: y, type: _, key: R, ref: w, props: b, _owner: D.current };
  }
  return $.Fragment = S, $.jsx = O, $.jsxs = O, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function lr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Pe, y = Symbol.for("react.element"), S = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), _ = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), F = Symbol.iterator, I = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[I];
      return typeof r == "function" ? r : null;
    }
    var E = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var n = E.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var A = !1, U = !1, K = !1, De = !1, ke = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === j || e === k || ke || e === D || e === h || e === p || De || e === w || A || U || K || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === O || e.$$typeof === _ || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case j:
          return "Fragment";
        case S:
          return "Portal";
        case k:
          return "Profiler";
        case D:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return oe(r) + ".Consumer";
          case O:
            var t = e;
            return oe(t._context) + ".Provider";
          case s:
            return Ae(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : x(e.type) || "Memo";
          case R: {
            var i = e, u = i._payload, o = i._init;
            try {
              return x(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, W = 0, ie, se, ue, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ne() {
      {
        if (W === 0) {
          ie = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Me() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: se
            }),
            warn: P({}, e, {
              value: ue
            }),
            error: P({}, e, {
              value: le
            }),
            group: P({}, e, {
              value: ce
            }),
            groupCollapsed: P({}, e, {
              value: fe
            }),
            groupEnd: P({}, e, {
              value: de
            })
          });
        }
        W < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = E.ReactCurrentDispatcher, X;
    function B(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, J;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ie();
    }
    function pe(e, r) {
      if (!e || Z)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = H.current, H.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), g = n.stack.split(`
`), l = a.length - 1, c = g.length - 1; l >= 1 && c >= 0 && a[l] !== g[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== g[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== g[c]) {
                    var m = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, m), m;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Z = !1, H.current = u, Me(), Error.prepareStackTrace = i;
      }
      var M = e ? e.displayName || e.name : "", Se = M ? B(M) : "";
      return typeof e == "function" && J.set(e, Se), Se;
    }
    function We(e, r, t) {
      return pe(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ye(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case h:
          return B("Suspense");
        case p:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return We(e.render);
          case b:
            return q(e.type, r, t);
          case R: {
            var n = e, i = n._payload, u = n._init;
            try {
              return q(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, he = {}, ge = E.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function $e(e, r, t, n, i) {
      {
        var u = Function.call.bind(G);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (z(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), z(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, z(i), d("Failed %s type: %s", t, a.message), z(null));
          }
      }
    }
    var Le = Array.isArray;
    function Q(e) {
      return Le(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function me(e) {
      if (Ue(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ye(e);
    }
    var Y = E.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Ee, ee;
    ee = {};
    function Je(e) {
      if (G.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qe(e) {
      if (G.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = x(Y.current.type);
        ee[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Y.current.type), e.ref), ee[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          be || (be = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, g = null;
        t !== void 0 && (me(t), a = "" + t), qe(r) && (me(r.key), a = "" + r.key), Je(r) && (g = r.ref, Ge(r, i));
        for (u in r)
          G.call(r, u) && !Be.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || g) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(o, c), g && Ke(o, c);
        }
        return He(e, a, g, i, n, Y.current, o);
      }
    }
    var re = E.ReactCurrentOwner, _e = E.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Re() {
      {
        if (re.current) {
          var e = x(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function Qe(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Qe(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + x(e._owner.type) + "."), N(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && xe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = V(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ne(o.value) && xe(o.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = x(r);
          $e(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var i = x(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function je(e, r, t, n, i, u) {
      {
        var o = Fe(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = Ze(i);
          g ? a += g : a += Re();
          var l;
          e === null ? l = "null" : Q(e) ? l = "array" : e !== void 0 && e.$$typeof === y ? (l = "<" + (x(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Xe(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (Q(m)) {
                for (var M = 0; M < m.length; M++)
                  Te(m[M], e);
                Object.freeze && Object.freeze(m);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(m, e);
        }
        return e === j ? rr(c) : er(c), c;
      }
    }
    function tr(e, r, t) {
      return je(e, r, t, !0);
    }
    function nr(e, r, t) {
      return je(e, r, t, !1);
    }
    var ar = nr, or = tr;
    L.Fragment = j, L.jsx = ar, L.jsxs = or;
  }()), L;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = ur() : v.exports = lr();
})(sr);
const cr = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S"
], fr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function vr({ value: v }) {
  const [y, S] = ir(new Date()), j = (s, h) => new Date(s, h + 1, 0).getDate(), D = (s, h) => new Date(s, h, 1).getDay(), k = () => {
    const s = new Date(), h = y.getMonth(), p = y.getFullYear(), b = j(p, h), R = D(p, h);
    let w = 1, F, I;
    const V = [];
    for (let E = 0; E < 6; E++) {
      const d = [];
      for (let C = 0; C < 7; C++)
        if (E === 0 && C < R)
          d.push(/* @__PURE__ */ f.jsx("div", { className: "days empty" }, C));
        else {
          if (w > b)
            break;
          {
            const A = new Date(p, h, w), U = A.toDateString() === s.toDateString();
            v instanceof Date ? F = v && typeof v == "object" && A.toDateString() === v.toDateString() : Array.isArray(v) && (I = v == null ? void 0 : v.some((K) => A.toDateString() === K.toDateString())), d.push(
              /* @__PURE__ */ f.jsx(
                "div",
                {
                  onClick: () => S(A),
                  className: `
                                  days 
                                  ${U && F === void 0 && I === void 0 && U ? "today" : void 0}
                                  ${F ? "today" : void 0}
                                  ${I ? "today" : void 0}
                                  `,
                  children: w
                },
                C
              )
            ), w++;
          }
        }
      V.push(d);
    }
    return V;
  };
  function O() {
    const s = new Date(y.getFullYear(), y.getMonth() - 1, 1);
    S(s);
  }
  function _() {
    const s = new Date(y.getFullYear(), y.getMonth() + 1, 1);
    S(s);
  }
  return /* @__PURE__ */ f.jsxs("div", { className: "calendar-container", children: [
    /* @__PURE__ */ f.jsx("div", { className: "calendar-header", children: /* @__PURE__ */ f.jsxs("div", { className: "month-year", children: [
      /* @__PURE__ */ f.jsxs("span", { children: [
        fr[y.getMonth()],
        " ",
        y.getFullYear()
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "calendar-controls", children: [
        /* @__PURE__ */ f.jsx("button", { onClick: () => O(), className: "button-controls", children: /* @__PURE__ */ f.jsx("div", { className: "icon-arrow-left", children: /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }) }) }) }),
        /* @__PURE__ */ f.jsx("button", { onClick: () => _(), className: "button-controls", children: /* @__PURE__ */ f.jsx("div", { className: "icon-arrow-right", children: /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.jsx("div", { className: "calendar-week", children: cr.map((s, h) => /* @__PURE__ */ f.jsx("div", { className: "daysof-week", children: s }, h)) }),
    /* @__PURE__ */ f.jsx("div", { className: "calendar-body", children: k() })
  ] });
}
export {
  vr as Calendar
};
