import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import {
  ClientDataService,
  HttpClient,
  ThemeDataService,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DOCUMENT,
  DestroyRef,
  HostBinding,
  RendererFactory2,
  Subject,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext
} from "./chunk-4KHPVNTA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-7WUTQBRG.js";

// node_modules/webfontloader/webfontloader.js
var require_webfontloader = __commonJS({
  "node_modules/webfontloader/webfontloader.js"(exports, module) {
    "use strict";
    (function() {
      function aa(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }
      function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c2 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c2, d);
            return a.apply(b, c2);
          };
        }
        return function() {
          return a.apply(b, arguments);
        };
      }
      function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments);
      }
      var q = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document;
      }
      var da = !!window.FontFace;
      function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b;
      }
      function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild);
      }
      function v(a) {
        a.parentNode && a.parentNode.removeChild(a);
      }
      function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
          for (var f = false, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
            f = true;
            break;
          }
          f || d.push(b[e]);
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
          f = false;
          for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
            f = true;
            break;
          }
          f || b.push(d[e]);
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return true;
        return false;
      }
      function ea(a) {
        return a.o.location.hostname || a.a.location.hostname;
      }
      function z(a, b, c) {
        function d() {
          m && e && f && (m(g), m = null);
        }
        b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
        var e = false, f = true, g = null, m = c || null;
        da ? (b.onload = function() {
          e = true;
          d();
        }, b.onerror = function() {
          e = true;
          g = Error("Stylesheet failed to load");
          d();
        }) : setTimeout(function() {
          e = true;
          d();
        }, 0);
        u(a, "head", b);
      }
      function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
          var f = t(a, "script", { src: b }), g = false;
          f.onload = f.onreadystatechange = function() {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = true, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
          };
          e.appendChild(f);
          setTimeout(function() {
            g || (g = true, c && c(Error("Script load timeout")));
          }, d || 5e3);
          return f;
        }
        return null;
      }
      ;
      function B() {
        this.a = 0;
        this.c = null;
      }
      function C(a) {
        a.a++;
        return function() {
          a.a--;
          D(a);
        };
      }
      function E(a, b) {
        a.c = b;
        D(a);
      }
      function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null);
      }
      ;
      function F(a) {
        this.a = a || "-";
      }
      F.prototype.c = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a);
      };
      function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10));
      }
      function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
      }
      function I(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
          var d = a[c].replace(/['"]/g, "");
          -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
        }
        return b.join(",");
      }
      function J(a) {
        return a.a + a.f;
      }
      function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b;
      }
      function ga(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b;
      }
      ;
      function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = false !== b.events;
        this.g = false !== b.classes;
      }
      function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        K(a, "loading");
      }
      function L(a) {
        if (a.g) {
          var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
          b || c.push(a.a.c("wf", "inactive"));
          w(a.f, c, d);
        }
        K(a, "inactive");
      }
      function K(a, b, c) {
        if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));
        else a.h[b]();
      }
      ;
      function ja() {
        this.c = {};
      }
      function ka(a, b, c) {
        var d = [], e;
        for (e in b) if (b.hasOwnProperty(e)) {
          var f = a.c[e];
          f && d.push(f(b[e], c));
        }
        return d;
      }
      ;
      function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function N(a) {
        u(a.c, "body", a.a);
      }
      function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
      }
      ;
      function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3e3;
        this.h = f || void 0;
      }
      P.prototype.start = function() {
        var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d2, e2) {
          function f2() {
            q() - c >= b.f ? e2() : a.fonts.load(fa(b.a), b.h).then(function(a2) {
              1 <= a2.length ? d2() : setTimeout(f2, 25);
            }, function() {
              e2();
            });
          }
          f2();
        }), e = null, f = new Promise(function(a2, d2) {
          e = setTimeout(d2, b.f);
        });
        Promise.race([f, d]).then(function() {
          e && (clearTimeout(e), e = null);
          b.g(b.a);
        }, function() {
          b.j(b.a);
        });
      };
      function Q(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3e3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
      }
      var R = { D: "serif", C: "sans-serif" }, S = null;
      function T() {
        if (null === S) {
          var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
        }
        return S;
      }
      Q.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
      };
      function la(a, b, c) {
        for (var d in R) if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return true;
        return false;
      }
      function U(a) {
        var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
      }
      function ma(a) {
        setTimeout(p(function() {
          U(this);
        }, a), 50);
      }
      function V(a, b) {
        setTimeout(p(function() {
          v(this.g.a);
          v(this.h.a);
          v(this.j.a);
          v(this.m.a);
          b(this.a);
        }, a), 0);
      }
      ;
      function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = false;
        this.s = c;
      }
      var X = null;
      W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
        K(b, "fontactive", a);
        this.m = true;
        na(this);
      };
      W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
          var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
          w(b.f, d, e);
        }
        K(b, "fontinactive", a);
        na(this);
      };
      function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
      }
      ;
      function oa(a) {
        this.j = a;
        this.a = new ja();
        this.h = 0;
        this.f = this.g = true;
      }
      oa.prototype.load = function(a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = false !== a.events;
        this.f = false !== a.classes;
        pa(this, new ha(this.c, a), a);
      };
      function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
          var a2 = e || null, m = d || null || {};
          if (0 === c.length && f) L(b.a);
          else {
            b.f += c.length;
            f && (b.j = f);
            var h, l = [];
            for (h = 0; h < c.length; h++) {
              var k = c[h], n = m[k.c], r = b.a, x = k;
              r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r, "fontloading", x);
              r = null;
              if (null === X) if (window.FontFace) {
                var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
              } else X = false;
              X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a2, n);
              l.push(r);
            }
            for (h = 0; h < l.length; h++) l[h].start();
          }
        }, 0);
      }
      function pa(a, b, c) {
        var d = [], e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for (c = d.length; b < c; b++) d[b].load(function(b2, d2, c2) {
          qa(a, f, b2, d2, c2);
        });
      }
      ;
      function ra(a, b) {
        this.c = a;
        this.a = b;
      }
      ra.prototype.load = function(a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c2 = f["__mti_fntLst" + d](), e2 = [], h;
            if (c2) for (var l = 0; l < c2.length; l++) {
              var k = c2[l].fontfamily;
              void 0 != c2[l].fontStyle && void 0 != c2[l].fontWeight ? (h = c2[l].fontStyle + c2[l].fontWeight, e2.push(new G(k, h))) : e2.push(new G(k));
            }
            a(e2);
          } else setTimeout(function() {
            b();
          }, 50);
        }
        var c = this, d = c.a.projectId, e = c.a.version;
        if (d) {
          var f = c.c.o;
          A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e2) {
            e2 ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
              return c.a;
            }, b());
          }).id = "__MonotypeAPIScript__" + d;
        } else a([]);
      };
      function sa(a, b) {
        this.c = a;
        this.a = b;
      }
      sa.prototype.load = function(a) {
        var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B();
        b = 0;
        for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
        var m = [];
        b = 0;
        for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));
        else m.push(new G(d[0]));
        E(g, function() {
          a(m, f);
        });
      };
      function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || "";
      }
      var ua = "https://fonts.googleapis.com/css";
      function va(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = b[d].split(":");
          3 == e.length && a.f.push(e.pop());
          var f = "";
          2 == e.length && "" != e[1] && (f = ":");
          a.a.push(e.join(f));
        }
      }
      function wa(a) {
        if (0 == a.a.length) throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit=")) return a.c;
        for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b;
      }
      ;
      function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {};
      }
      var za = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function Da(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
          var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
          if (2 <= d.length) {
            var g;
            var m = d[1];
            g = [];
            if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
              var k;
              k = m[l];
              if (k.match(/^[\w-]+$/)) {
                var n = Ca.exec(k.toLowerCase());
                if (null == n) k = "";
                else {
                  k = n[2];
                  k = null == k || "" == k ? "n" : Ba[k];
                  n = n[1];
                  if (null == n || "" == n) n = "4";
                  else var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                  k = [k, n].join("");
                }
              } else k = "";
              k && g.push(k);
            }
            0 < g.length && (f = g);
            3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
          }
          a.c[e] || (d = za[e]) && (a.c[e] = d);
          for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]));
        }
      }
      ;
      function Ea(a, b) {
        this.c = a;
        this.a = b;
      }
      var Fa = { Arimo: true, Cousine: true, Tinos: true };
      Ea.prototype.load = function(a) {
        var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function() {
          a(f.a, f.c, Fa);
        });
      };
      function Ga(a, b) {
        this.c = a;
        this.a = b;
      }
      Ga.prototype.load = function(a) {
        var b = this.a.id, c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b2) {
          if (b2) a([]);
          else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b2 = c.Typekit.config.fn;
            for (var e = [], f = 0; f < b2.length; f += 2) for (var g = b2[f], m = b2[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));
            try {
              c.Typekit.load({ events: false, classes: false, async: true });
            } catch (l) {
            }
            a(e);
          }
        }, 2e3) : a([]);
      };
      function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = [];
      }
      Ha.prototype.load = function(a) {
        var b = this.f.id, c = this.c.o, d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b2, c2) {
          for (var g = 0, m = c2.fonts.length; g < m; ++g) {
            var h = c2.fonts[g];
            d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
          }
          a(d.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b2) {
          b2 && a([]);
        })) : a([]);
      };
      var Y = new oa(window);
      Y.a.c.custom = function(a, b) {
        return new sa(b, a);
      };
      Y.a.c.fontdeck = function(a, b) {
        return new Ha(b, a);
      };
      Y.a.c.monotype = function(a, b) {
        return new ra(b, a);
      };
      Y.a.c.typekit = function(a, b) {
        return new Ga(b, a);
      };
      Y.a.c.google = function(a, b) {
        return new Ea(b, a);
      };
      var Z = { load: p(Y.load, Y) };
      "function" === typeof define && define.amd ? define(function() {
        return Z;
      }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
    })();
  }
});

// src/app/shared/components/theme/theme.component.ts
var WebFont = __toESM(require_webfontloader());

// node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function getUrls(urls) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var settings = {
    mimeType: options.mimeType || null,
    onBeforeSend: options.onBeforeSend || Function.prototype,
    onSuccess: options.onSuccess || Function.prototype,
    onError: options.onError || Function.prototype,
    onComplete: options.onComplete || Function.prototype
  };
  var urlArray = Array.isArray(urls) ? urls : [urls];
  var urlQueue = Array.apply(null, Array(urlArray.length)).map((function(x) {
    return null;
  }));
  function isValidCss(text) {
    var isString = typeof text === "string";
    var isHTML = isString && text.trim().charAt(0) === "<";
    return isString && !isHTML;
  }
  function onError2(xhr, urlIndex) {
    settings.onError(xhr, urlArray[urlIndex], urlIndex);
  }
  function onSuccess2(responseText, urlIndex) {
    var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
    responseText = returnVal === false ? "" : returnVal || responseText;
    urlQueue[urlIndex] = responseText;
    if (urlQueue.indexOf(null) === -1) {
      settings.onComplete(urlQueue);
    }
  }
  var parser = document.createElement("a");
  urlArray.forEach((function(url, i) {
    parser.setAttribute("href", url);
    parser.href = String(parser.href);
    var isIElte9 = Boolean(document.all && !window.atob);
    var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];
    if (isIElte9CORS) {
      var isSameProtocol = parser.protocol === location.protocol;
      if (isSameProtocol) {
        var xdr = new XDomainRequest();
        xdr.open("GET", url);
        xdr.timeout = 0;
        xdr.onprogress = Function.prototype;
        xdr.ontimeout = Function.prototype;
        xdr.onload = function() {
          var text = xdr.responseText;
          if (isValidCss(text)) {
            onSuccess2(text, i);
          } else {
            onError2(xdr, i);
          }
        };
        xdr.onerror = function(err) {
          onError2(xdr, i);
        };
        setTimeout((function() {
          xdr.send();
        }), 0);
      } else {
        console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
        onError2(null, i);
      }
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      if (settings.mimeType && xhr.overrideMimeType) {
        xhr.overrideMimeType(settings.mimeType);
      }
      settings.onBeforeSend(xhr, url, i);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var text = xhr.responseText;
          if (xhr.status < 400 && isValidCss(text)) {
            onSuccess2(text, i);
          } else if (xhr.status === 0 && isValidCss(text)) {
            onSuccess2(text, i);
          } else {
            onError2(xhr, i);
          }
        }
      };
      xhr.send();
    }
  }));
}
function getCssData(options) {
  var regex2 = {
    cssComments: /\/\*[\s\S]+?\*\//g,
    cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
  };
  var settings = {
    rootElement: options.rootElement || document,
    include: options.include || 'style,link[rel="stylesheet"]',
    exclude: options.exclude || null,
    filter: options.filter || null,
    skipDisabled: options.skipDisabled !== false,
    useCSSOM: options.useCSSOM || false,
    onBeforeSend: options.onBeforeSend || Function.prototype,
    onSuccess: options.onSuccess || Function.prototype,
    onError: options.onError || Function.prototype,
    onComplete: options.onComplete || Function.prototype
  };
  var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter((function(node) {
    return !matchesSelector(node, settings.exclude);
  }));
  var cssArray = Array.apply(null, Array(sourceNodes.length)).map((function(x) {
    return null;
  }));
  function handleComplete() {
    var isComplete = cssArray.indexOf(null) === -1;
    if (isComplete) {
      cssArray.reduce((function(skipIndices, value, i) {
        if (value === "") {
          skipIndices.push(i);
        }
        return skipIndices;
      }), []).reverse().forEach((function(skipIndex) {
        return [sourceNodes, cssArray].forEach((function(arr) {
          return arr.splice(skipIndex, 1);
        }));
      }));
      var cssText = cssArray.join("");
      settings.onComplete(cssText, cssArray, sourceNodes);
    }
  }
  function handleSuccess(cssText, cssIndex, node, sourceUrl) {
    var returnVal = settings.onSuccess(cssText, node, sourceUrl);
    cssText = returnVal !== void 0 && Boolean(returnVal) === false ? "" : returnVal || cssText;
    resolveImports(cssText, node, sourceUrl, (function(resolvedCssText, errorData) {
      if (cssArray[cssIndex] === null) {
        errorData.forEach((function(data) {
          return settings.onError(data.xhr, node, data.url);
        }));
        if (!settings.filter || settings.filter.test(resolvedCssText)) {
          cssArray[cssIndex] = resolvedCssText;
        } else {
          cssArray[cssIndex] = "";
        }
        handleComplete();
      }
    }));
  }
  function parseImportData(cssText, baseUrl) {
    var ignoreRules = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var importData = {};
    importData.rules = (cssText.replace(regex2.cssComments, "").match(regex2.cssImports) || []).filter((function(rule) {
      return ignoreRules.indexOf(rule) === -1;
    }));
    importData.urls = importData.rules.map((function(rule) {
      return rule.replace(regex2.cssImports, "$1");
    }));
    importData.absoluteUrls = importData.urls.map((function(url) {
      return getFullUrl$1(url, baseUrl);
    }));
    importData.absoluteRules = importData.rules.map((function(rule, i) {
      var oldUrl = importData.urls[i];
      var newUrl = getFullUrl$1(importData.absoluteUrls[i], baseUrl);
      return rule.replace(oldUrl, newUrl);
    }));
    return importData;
  }
  function resolveImports(cssText, node, baseUrl, callbackFn) {
    var __errorData = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
    var __errorRules = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [];
    var importData = parseImportData(cssText, baseUrl, __errorRules);
    if (importData.rules.length) {
      getUrls(importData.absoluteUrls, {
        onBeforeSend: function onBeforeSend2(xhr, url, urlIndex) {
          settings.onBeforeSend(xhr, node, url);
        },
        onSuccess: function onSuccess2(cssText2, url, urlIndex) {
          var returnVal = settings.onSuccess(cssText2, node, url);
          cssText2 = returnVal === false ? "" : returnVal || cssText2;
          var responseImportData = parseImportData(cssText2, url, __errorRules);
          responseImportData.rules.forEach((function(rule, i) {
            cssText2 = cssText2.replace(rule, responseImportData.absoluteRules[i]);
          }));
          return cssText2;
        },
        onError: function onError2(xhr, url, urlIndex) {
          __errorData.push({
            xhr,
            url
          });
          __errorRules.push(importData.rules[urlIndex]);
          resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
        },
        onComplete: function onComplete2(responseArray) {
          responseArray.forEach((function(importText, i) {
            cssText = cssText.replace(importData.rules[i], importText);
          }));
          resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
        }
      });
    } else {
      callbackFn(cssText, __errorData);
    }
  }
  if (sourceNodes.length) {
    sourceNodes.forEach((function(node, i) {
      var linkHref = node.getAttribute("href");
      var linkRel = node.getAttribute("rel");
      var isLink = node.nodeName.toLowerCase() === "link" && linkHref && linkRel && linkRel.toLowerCase().indexOf("stylesheet") !== -1;
      var isSkip = settings.skipDisabled === false ? false : node.disabled;
      var isStyle = node.nodeName.toLowerCase() === "style";
      if (isLink && !isSkip) {
        var isURIScheme = linkHref.indexOf("data:text/css") !== -1;
        if (isURIScheme) {
          var cssText = decodeURIComponent(linkHref.substring(linkHref.indexOf(",") + 1));
          if (settings.useCSSOM) {
            cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {
              return rule.cssText;
            })).join("");
          }
          handleSuccess(cssText, i, node, location.href);
        } else {
          getUrls(linkHref, {
            mimeType: "text/css",
            onBeforeSend: function onBeforeSend2(xhr, url, urlIndex) {
              settings.onBeforeSend(xhr, node, url);
            },
            onSuccess: function onSuccess2(cssText2, url, urlIndex) {
              var sourceUrl = getFullUrl$1(linkHref);
              handleSuccess(cssText2, i, node, sourceUrl);
            },
            onError: function onError2(xhr, url, urlIndex) {
              cssArray[i] = "";
              settings.onError(xhr, node, url);
              handleComplete();
            }
          });
        }
      } else if (isStyle && !isSkip) {
        var _cssText = node.textContent;
        if (settings.useCSSOM) {
          _cssText = Array.apply(null, node.sheet.cssRules).map((function(rule) {
            return rule.cssText;
          })).join("");
        }
        handleSuccess(_cssText, i, node, location.href);
      } else {
        cssArray[i] = "";
        handleComplete();
      }
    }));
  } else {
    settings.onComplete("", []);
  }
}
function getFullUrl$1(url, base) {
  var d = document.implementation.createHTMLDocument("");
  var b = d.createElement("base");
  var a = d.createElement("a");
  d.head.appendChild(b);
  d.body.appendChild(a);
  b.href = base || document.baseURI || (document.querySelector("base") || {}).href || location.href;
  a.href = url;
  return a.href;
}
function matchesSelector(elm, selector) {
  var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
  return matches.call(elm, selector);
}
var balancedMatch = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);
  var r = range(a, b, str);
  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}
function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}
balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;
  if (ai >= 0 && bi > 0) {
    if (a === b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;
    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b, i + 1);
      }
      i = ai < bi && ai >= 0 ? ai : bi;
    }
    if (begs.length) {
      result = [left, right];
    }
  }
  return result;
}
function parseCss(css) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaults2 = {
    preserveStatic: true,
    removeComments: false
  };
  var settings = _extends({}, defaults2, options);
  var errors = [];
  function error(msg) {
    throw new Error("CSS parse error: ".concat(msg));
  }
  function match(re) {
    var m = re.exec(css);
    if (m) {
      css = css.slice(m[0].length);
      return m;
    }
  }
  function open() {
    return match(/^{\s*/);
  }
  function close() {
    return match(/^}/);
  }
  function whitespace() {
    match(/^\s*/);
  }
  function comment() {
    whitespace();
    if (css[0] !== "/" || css[1] !== "*") {
      return;
    }
    var i = 2;
    while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
      i++;
    }
    if (!css[i]) {
      return error("end of comment is missing");
    }
    var str = css.slice(2, i);
    css = css.slice(i + 2);
    return {
      type: "comment",
      comment: str
    };
  }
  function comments() {
    var cmnts = [];
    var c;
    while (c = comment()) {
      cmnts.push(c);
    }
    return settings.removeComments ? [] : cmnts;
  }
  function selector() {
    whitespace();
    while (css[0] === "}") {
      error("extra closing bracket");
    }
    var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
    if (m) {
      var _selector = m[0].trim();
      var selectorItems;
      var hasComment = /\/\*/.test(_selector);
      if (hasComment) {
        _selector = _selector.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "");
      }
      var hasCommaInQuotes = /["']\w*,\w*["']/.test(_selector);
      if (hasCommaInQuotes) {
        _selector = _selector.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function(m2) {
          return m2.replace(/,/g, "\u200C");
        }));
      }
      var hasMultipleSelectors = /,/.test(_selector);
      if (hasMultipleSelectors) {
        selectorItems = _selector.split(/\s*(?![^(]*\)),\s*/);
      } else {
        selectorItems = [_selector];
      }
      if (hasCommaInQuotes) {
        selectorItems = selectorItems.map((function(s) {
          return s.replace(/\u200C/g, ",");
        }));
      }
      return selectorItems;
    }
  }
  function declaration() {
    if (css[0] === "@") {
      return at_rule();
    }
    match(/^([;\s]*)+/);
    var comment_regexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var prop = match(/^(\*?[-#/*\\\w.]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) {
      return;
    }
    prop = prop[0].trim();
    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    }
    var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
    var ret = {
      type: "declaration",
      property: prop.replace(comment_regexp, ""),
      value: val ? val[0].replace(comment_regexp, "").trim() : ""
    };
    match(/^[;\s]*/);
    return ret;
  }
  function declarations() {
    if (!open()) {
      return error("missing '{'");
    }
    var d;
    var decls = comments();
    while (d = declaration()) {
      decls.push(d);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("missing '}'");
    }
    return decls;
  }
  function keyframe() {
    whitespace();
    var vals = [];
    var m;
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (vals.length) {
      return {
        type: "keyframe",
        values: vals,
        declarations: declarations()
      };
    }
  }
  function at_keyframes() {
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) {
      return;
    }
    var vendor = m[1];
    m = match(/^([-\w]+)\s*/);
    if (!m) {
      return error("@keyframes missing name");
    }
    var name = m[1];
    if (!open()) {
      return error("@keyframes missing '{'");
    }
    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) {
      return error("@keyframes missing '}'");
    }
    return {
      type: "keyframes",
      name,
      vendor,
      keyframes: frames
    };
  }
  function at_page() {
    var m = match(/^@page */);
    if (m) {
      var sel = selector() || [];
      return {
        type: "page",
        selectors: sel,
        declarations: declarations()
      };
    }
  }
  function at_page_margin_box() {
    var m = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
    if (m) {
      var name = "".concat(m[1], "-").concat(m[2]) + (m[3] ? "-".concat(m[3]) : "");
      return {
        type: "page-margin-box",
        name,
        declarations: declarations()
      };
    }
  }
  function at_fontface() {
    var m = match(/^@font-face\s*/);
    if (m) {
      return {
        type: "font-face",
        declarations: declarations()
      };
    }
  }
  function at_supports() {
    var m = match(/^@supports *([^{]+)/);
    if (m) {
      return {
        type: "supports",
        supports: m[1].trim(),
        rules: rules()
      };
    }
  }
  function at_host() {
    var m = match(/^@host\s*/);
    if (m) {
      return {
        type: "host",
        rules: rules()
      };
    }
  }
  function at_media() {
    var m = match(/^@media([^{]+)*/);
    if (m) {
      return {
        type: "media",
        media: (m[1] || "").trim(),
        rules: rules()
      };
    }
  }
  function at_custom_m() {
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (m) {
      return {
        type: "custom-media",
        name: m[1].trim(),
        media: m[2].trim()
      };
    }
  }
  function at_document() {
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (m) {
      return {
        type: "document",
        document: m[2].trim(),
        vendor: m[1] ? m[1].trim() : null,
        rules: rules()
      };
    }
  }
  function at_x() {
    var m = match(/^@(import|charset|namespace)\s*([^;]+);/);
    if (m) {
      return {
        type: m[1],
        name: m[2].trim()
      };
    }
  }
  function at_rule() {
    whitespace();
    if (css[0] === "@") {
      var ret = at_x() || at_fontface() || at_media() || at_keyframes() || at_supports() || at_document() || at_custom_m() || at_host() || at_page() || at_page_margin_box();
      if (ret && !settings.preserveStatic) {
        var hasVarFunc = false;
        if (ret.declarations) {
          hasVarFunc = ret.declarations.some((function(decl) {
            return /var\(/.test(decl.value);
          }));
        } else {
          var arr = ret.keyframes || ret.rules || [];
          hasVarFunc = arr.some((function(obj) {
            return (obj.declarations || []).some((function(decl) {
              return /var\(/.test(decl.value);
            }));
          }));
        }
        return hasVarFunc ? ret : {};
      }
      return ret;
    }
  }
  function rule() {
    if (!settings.preserveStatic) {
      var balancedMatch$1 = balancedMatch("{", "}", css);
      if (balancedMatch$1) {
        var hasVarDecl = /:(?:root|host)(?![.:#(])/.test(balancedMatch$1.pre) && /--\S*\s*:/.test(balancedMatch$1.body);
        var hasVarFunc = /var\(/.test(balancedMatch$1.body);
        if (!hasVarDecl && !hasVarFunc) {
          css = css.slice(balancedMatch$1.end + 1);
          return {};
        }
      }
    }
    var sel = selector() || [];
    var decls = settings.preserveStatic ? declarations() : declarations().filter((function(decl) {
      var hasVarDecl2 = sel.some((function(s) {
        return /:(?:root|host)(?![.:#(])/.test(s);
      })) && /^--\S/.test(decl.property);
      var hasVarFunc2 = /var\(/.test(decl.value);
      return hasVarDecl2 || hasVarFunc2;
    }));
    if (!sel.length) {
      error("selector missing");
    }
    return {
      type: "rule",
      selectors: sel,
      declarations: decls
    };
  }
  function rules(core) {
    if (!core && !open()) {
      return error("missing '{'");
    }
    var node;
    var rules2 = comments();
    while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
      if (node.type) {
        rules2.push(node);
      }
      rules2 = rules2.concat(comments());
    }
    if (!core && !close()) {
      return error("missing '}'");
    }
    return rules2;
  }
  return {
    type: "stylesheet",
    stylesheet: {
      rules: rules(true),
      errors
    }
  };
}
function parseVars(cssData) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaults2 = {
    parseHost: false,
    store: {},
    onWarning: function onWarning2() {
    }
  };
  var settings = _extends({}, defaults2, options);
  var reVarDeclSelectors = new RegExp(":".concat(settings.parseHost ? "host" : "root", "$"));
  if (typeof cssData === "string") {
    cssData = parseCss(cssData, settings);
  }
  cssData.stylesheet.rules.forEach((function(rule) {
    if (rule.type !== "rule" || !rule.selectors.some((function(s) {
      return reVarDeclSelectors.test(s);
    }))) {
      return;
    }
    rule.declarations.forEach((function(decl, i) {
      var prop = decl.property;
      var value = decl.value;
      if (prop && prop.indexOf("--") === 0) {
        settings.store[prop] = value;
      }
    }));
  }));
  return settings.store;
}
function stringifyCss(tree) {
  var delim = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var cb = arguments.length > 2 ? arguments[2] : void 0;
  var renderMethods = {
    charset: function charset(node) {
      return "@charset " + node.name + ";";
    },
    comment: function comment(node) {
      return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
    },
    "custom-media": function customMedia(node) {
      return "@custom-media " + node.name + " " + node.media + ";";
    },
    declaration: function declaration(node) {
      return node.property + ":" + node.value + ";";
    },
    document: function document2(node) {
      return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
    },
    "font-face": function fontFace(node) {
      return "@font-face{" + visit(node.declarations) + "}";
    },
    host: function host(node) {
      return "@host{" + visit(node.rules) + "}";
    },
    import: function _import(node) {
      return "@import " + node.name + ";";
    },
    keyframe: function keyframe(node) {
      return node.values.join(",") + "{" + visit(node.declarations) + "}";
    },
    keyframes: function keyframes(node) {
      return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
    },
    media: function media(node) {
      return "@media " + node.media + "{" + visit(node.rules) + "}";
    },
    namespace: function namespace(node) {
      return "@namespace " + node.name + ";";
    },
    page: function page(node) {
      return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
    },
    "page-margin-box": function pageMarginBox(node) {
      return "@" + node.name + "{" + visit(node.declarations) + "}";
    },
    rule: function rule(node) {
      var decls = node.declarations;
      if (decls.length) {
        return node.selectors.join(",") + "{" + visit(decls) + "}";
      }
    },
    supports: function supports(node) {
      return "@supports " + node.supports + "{" + visit(node.rules) + "}";
    }
  };
  function visit(nodes) {
    var buf = "";
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (cb) {
        cb(n);
      }
      var txt = renderMethods[n.type](n);
      if (txt) {
        buf += txt;
        if (txt.length && n.selectors) {
          buf += delim;
        }
      }
    }
    return buf;
  }
  return visit(tree.stylesheet.rules);
}
function walkCss(node, fn) {
  node.rules.forEach((function(rule) {
    if (rule.rules) {
      walkCss(rule, fn);
      return;
    }
    if (rule.keyframes) {
      rule.keyframes.forEach((function(keyframe) {
        if (keyframe.type === "keyframe") {
          fn(keyframe.declarations, rule);
        }
      }));
      return;
    }
    if (!rule.declarations) {
      return;
    }
    fn(rule.declarations, node);
  }));
}
var VAR_PROP_IDENTIFIER = "--";
var VAR_FUNC_IDENTIFIER = "var";
function transformCss(cssData) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaults2 = {
    preserveStatic: true,
    preserveVars: false,
    variables: {},
    onWarning: function onWarning2() {
    }
  };
  var settings = _extends({}, defaults2, options);
  if (typeof cssData === "string") {
    cssData = parseCss(cssData, settings);
  }
  walkCss(cssData.stylesheet, (function(declarations, node) {
    for (var i = 0; i < declarations.length; i++) {
      var decl = declarations[i];
      var type = decl.type;
      var prop = decl.property;
      var value = decl.value;
      if (type !== "declaration") {
        continue;
      }
      if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
        declarations.splice(i, 1);
        i--;
        continue;
      }
      if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
        var resolvedValue = resolveValue(value, settings);
        if (resolvedValue !== decl.value) {
          resolvedValue = fixNestedCalc(resolvedValue);
          if (!settings.preserveVars) {
            decl.value = resolvedValue;
          } else {
            declarations.splice(i, 0, {
              type,
              property: prop,
              value: resolvedValue
            });
            i++;
          }
        }
      }
    }
  }));
  return stringifyCss(cssData);
}
function fixNestedCalc(value) {
  var reCalcVal = /calc\(([^)]+)\)/g;
  (value.match(reCalcVal) || []).forEach((function(match) {
    var newVal = "calc".concat(match.split("calc").join(""));
    value = value.replace(match, newVal);
  }));
  return value;
}
function resolveValue(value) {
  var settings = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var __recursiveFallback = arguments.length > 2 ? arguments[2] : void 0;
  if (value.indexOf("var(") === -1) {
    return value;
  }
  var valueData = balancedMatch("(", ")", value);
  function resolveFunc(value2) {
    var name = value2.split(",")[0].replace(/[\s\n\t]/g, "");
    var fallback = (value2.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
    var match = Object.prototype.hasOwnProperty.call(settings.variables, name) ? String(settings.variables[name]) : void 0;
    var replacement = match || (fallback ? String(fallback) : void 0);
    var unresolvedFallback = __recursiveFallback || value2;
    if (!match) {
      settings.onWarning('variable "'.concat(name, '" is undefined'));
    }
    if (replacement && replacement !== "undefined" && replacement.length > 0) {
      return resolveValue(replacement, settings, unresolvedFallback);
    } else {
      return "var(".concat(unresolvedFallback, ")");
    }
  }
  if (!valueData) {
    if (value.indexOf("var(") !== -1) {
      settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
    }
    return value;
  } else if (valueData.pre.slice(-3) === "var") {
    var isEmptyVarFunc = valueData.body.trim().length === 0;
    if (isEmptyVarFunc) {
      settings.onWarning("var() must contain a non-whitespace string");
      return value;
    } else {
      return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
    }
  } else {
    return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
  }
}
var isBrowser = typeof window !== "undefined";
var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
var counters = {
  group: 0,
  job: 0
};
var defaults = {
  rootElement: isBrowser ? document : null,
  shadowDOM: false,
  include: "style,link[rel=stylesheet]",
  exclude: "",
  variables: {},
  onlyLegacy: true,
  preserveStatic: true,
  preserveVars: false,
  silent: false,
  updateDOM: true,
  updateURLs: true,
  watch: null,
  onBeforeSend: function onBeforeSend() {
  },
  onError: function onError() {
  },
  onWarning: function onWarning() {
  },
  onSuccess: function onSuccess() {
  },
  onComplete: function onComplete() {
  },
  onFinally: function onFinally() {
  }
};
var regex = {
  cssComments: /\/\*[\s\S]+?\*\//g,
  cssKeyframes: /@(?:-\w*-)?keyframes/,
  cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
  cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
  cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
  cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
  cssVarFunc: /var\(\s*--[\w-]/,
  cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
};
var variableStore = {
  dom: {},
  job: {},
  user: {}
};
var cssVarsIsRunning = false;
var cssVarsObserver = null;
var cssVarsSrcNodeCount = 0;
var debounceTimer = null;
var isShadowDOMReady = false;
function cssVars() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var msgPrefix = "cssVars(): ";
  var settings = _extends({}, defaults, options);
  function handleError(message, sourceNode, xhr, url) {
    if (!settings.silent && window.console) {
      console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
    }
    settings.onError(message, sourceNode, xhr, url);
  }
  function handleWarning(message) {
    if (!settings.silent && window.console) {
      console.warn("".concat(msgPrefix).concat(message));
    }
    settings.onWarning(message);
  }
  function handleFinally(hasChanged) {
    settings.onFinally(Boolean(hasChanged), isNativeSupport, getTimeStamp() - settings.__benchmark);
  }
  if (!isBrowser) {
    return;
  }
  if (settings.watch) {
    settings.watch = defaults.watch;
    addMutationObserver(settings);
    cssVars(settings);
    return;
  } else if (settings.watch === false && cssVarsObserver) {
    cssVarsObserver.disconnect();
    cssVarsObserver = null;
  }
  if (!settings.__benchmark) {
    if (cssVarsIsRunning === settings.rootElement) {
      cssVarsDebounced(options);
      return;
    }
    var srcNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));
    settings.__benchmark = getTimeStamp();
    settings.exclude = [cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', "link[disabled]:not([data-cssvars])", settings.exclude].filter((function(selector) {
      return selector;
    })).join(",");
    settings.variables = fixVarNames(settings.variables);
    srcNodes.forEach((function(srcNode) {
      var hasStyleCache = srcNode.nodeName.toLowerCase() === "style" && srcNode.__cssVars.text;
      var hasStyleChanged = hasStyleCache && srcNode.textContent !== srcNode.__cssVars.text;
      if (hasStyleCache && hasStyleChanged) {
        srcNode.sheet && (srcNode.sheet.disabled = false);
        srcNode.setAttribute("data-cssvars", "");
      }
    }));
    if (!cssVarsObserver) {
      var outNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
      outNodes.forEach((function(outNode) {
        var dataGroup = outNode.getAttribute("data-cssvars-group");
        var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
        if (!srcNode) {
          outNode.parentNode.removeChild(outNode);
        }
      }));
      if (cssVarsSrcNodeCount && srcNodes.length < cssVarsSrcNodeCount) {
        cssVarsSrcNodeCount = srcNodes.length;
        variableStore.dom = {};
      }
    }
  }
  if (document.readyState !== "loading") {
    if (isNativeSupport && settings.onlyLegacy) {
      var hasVarChange = false;
      if (settings.updateDOM) {
        var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
        Object.keys(settings.variables).forEach((function(key) {
          var varValue = settings.variables[key];
          hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);
          targetElm.style.setProperty(key, varValue);
        }));
      }
      handleFinally(hasVarChange);
    } else if (!isShadowDOMReady && (settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host)) {
      getCssData({
        rootElement: defaults.rootElement,
        include: defaults.include,
        exclude: settings.exclude,
        skipDisabled: false,
        onSuccess: function onSuccess2(cssText, node, url) {
          var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;
          if (isUserDisabled) {
            return false;
          }
          cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
          cssText = (cssText.match(regex.cssVarDeclRules) || []).join("");
          return cssText || false;
        },
        onComplete: function onComplete2(cssText, cssArray, nodeArray) {
          parseVars(cssText, {
            store: variableStore.dom,
            onWarning: handleWarning
          });
          isShadowDOMReady = true;
          cssVars(settings);
        }
      });
    } else {
      cssVarsIsRunning = settings.rootElement;
      getCssData({
        rootElement: settings.rootElement,
        include: settings.include,
        exclude: settings.exclude,
        skipDisabled: false,
        onBeforeSend: settings.onBeforeSend,
        onError: function onError2(xhr, node, url) {
          var responseUrl = xhr.responseURL || getFullUrl(url, location.href);
          var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
          var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
          handleError(errorMsg, node, xhr, responseUrl);
        },
        onSuccess: function onSuccess2(cssText, node, url) {
          var isUserDisabled = (node.sheet || {}).disabled && !node.__cssVars;
          if (isUserDisabled) {
            return false;
          }
          var isLink = node.nodeName.toLowerCase() === "link";
          var isStyleImport = node.nodeName.toLowerCase() === "style" && cssText !== node.textContent;
          var returnVal = settings.onSuccess(cssText, node, url);
          cssText = returnVal !== void 0 && Boolean(returnVal) === false ? "" : returnVal || cssText;
          if (settings.updateURLs && (isLink || isStyleImport)) {
            cssText = fixRelativeCssUrls(cssText, url);
          }
          return cssText;
        },
        onComplete: function onComplete2(cssText, cssArray) {
          var nodeArray = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          var currentVars = _extends({}, variableStore.dom, variableStore.user);
          var hasVarChange2 = false;
          variableStore.job = {};
          nodeArray.forEach((function(node, i2) {
            var nodeCSS = cssArray[i2];
            node.__cssVars = node.__cssVars || {};
            node.__cssVars.text = nodeCSS;
            if (regex.cssVars.test(nodeCSS)) {
              try {
                var cssTree = parseCss(nodeCSS, {
                  preserveStatic: settings.preserveStatic,
                  removeComments: true
                });
                parseVars(cssTree, {
                  parseHost: Boolean(settings.rootElement.host),
                  store: variableStore.dom,
                  onWarning: handleWarning
                });
                node.__cssVars.tree = cssTree;
              } catch (err) {
                handleError(err.message, node);
              }
            }
          }));
          _extends(variableStore.job, variableStore.dom);
          if (settings.updateDOM) {
            _extends(variableStore.user, settings.variables);
            _extends(variableStore.job, variableStore.user);
          } else {
            _extends(variableStore.job, variableStore.user, settings.variables);
            _extends(currentVars, settings.variables);
          }
          hasVarChange2 = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some((function(key) {
            return variableStore.job[key] !== currentVars[key];
          }))));
          if (hasVarChange2) {
            resetCssNodes(settings.rootElement);
            cssVars(settings);
          } else {
            var outCssArray = [];
            var outNodeArray = [];
            var hasKeyframesWithVars = false;
            if (settings.updateDOM) {
              counters.job++;
            }
            nodeArray.forEach((function(node, i2) {
              var isSkip = !node.__cssVars.tree;
              if (node.__cssVars.tree) {
                try {
                  transformCss(node.__cssVars.tree, _extends({}, settings, {
                    variables: variableStore.job,
                    onWarning: handleWarning
                  }));
                  var outCss = stringifyCss(node.__cssVars.tree);
                  if (settings.updateDOM) {
                    var nodeCSS = cssArray[i2];
                    var hasCSSVarFunc = regex.cssVarFunc.test(nodeCSS);
                    if (!node.getAttribute("data-cssvars")) {
                      node.setAttribute("data-cssvars", "src");
                    }
                    if (outCss.length && hasCSSVarFunc) {
                      var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                      var outCssNoSpaces = outCss.replace(/\s/g, "");
                      var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                      hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);
                      if (settings.preserveStatic) {
                        node.sheet && (node.sheet.disabled = true);
                      }
                      if (!outNode.hasAttribute("data-cssvars")) {
                        outNode.setAttribute("data-cssvars", "out");
                      }
                      if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                        isSkip = true;
                        if (outNode && outNode.parentNode) {
                          node.removeAttribute("data-cssvars-group");
                          outNode.parentNode.removeChild(outNode);
                        }
                      } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                        [node, outNode].forEach((function(n) {
                          n.setAttribute("data-cssvars-job", counters.job);
                          n.setAttribute("data-cssvars-group", dataGroup);
                        }));
                        outNode.textContent = outCss;
                        outCssArray.push(outCss);
                        outNodeArray.push(outNode);
                        if (!outNode.parentNode) {
                          node.parentNode.insertBefore(outNode, node.nextSibling);
                        }
                      }
                    }
                  } else {
                    if (node.textContent.replace(/\s/g, "") !== outCss) {
                      outCssArray.push(outCss);
                    }
                  }
                } catch (err) {
                  handleError(err.message, node);
                }
              }
              if (isSkip) {
                node.setAttribute("data-cssvars", "skip");
              }
              if (!node.hasAttribute("data-cssvars-job")) {
                node.setAttribute("data-cssvars-job", counters.job);
              }
            }));
            cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
            if (settings.shadowDOM) {
              var elms = [].concat(settings.rootElement).concat([].slice.call(settings.rootElement.querySelectorAll("*")));
              for (var i = 0, elm; elm = elms[i]; ++i) {
                if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                  var shadowSettings = _extends({}, settings, {
                    rootElement: elm.shadowRoot
                  });
                  cssVars(shadowSettings);
                }
              }
            }
            if (settings.updateDOM && hasKeyframesWithVars) {
              fixKeyframes(settings.rootElement);
            }
            cssVarsIsRunning = false;
            settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(variableStore.job)), getTimeStamp() - settings.__benchmark);
            handleFinally(outNodeArray.length);
          }
        }
      });
    }
  } else {
    document.addEventListener("DOMContentLoaded", (function init(evt) {
      cssVars(options);
      document.removeEventListener("DOMContentLoaded", init);
    }));
  }
}
cssVars.reset = function() {
  counters.job = 0;
  counters.group = 0;
  cssVarsIsRunning = false;
  if (cssVarsObserver) {
    cssVarsObserver.disconnect();
    cssVarsObserver = null;
  }
  cssVarsSrcNodeCount = 0;
  debounceTimer = null;
  isShadowDOMReady = false;
  for (var prop in variableStore) {
    variableStore[prop] = {};
  }
};
function addMutationObserver(settings) {
  function isDisabled(node) {
    var isDisabledAttr = isLink(node) && node.hasAttribute("disabled");
    var isDisabledSheet = (node.sheet || {}).disabled;
    return isDisabledAttr || isDisabledSheet;
  }
  function isLink(node) {
    var isStylesheet = node.nodeName.toLowerCase() === "link" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
    return isStylesheet;
  }
  function isStyle(node) {
    return node.nodeName.toLowerCase() === "style";
  }
  function isValidAttributeMutation(mutation) {
    var isValid = false;
    if (mutation.type === "attributes" && isLink(mutation.target) && !isDisabled(mutation.target)) {
      var isEnabledMutation = mutation.attributeName === "disabled";
      var isHrefMutation = mutation.attributeName === "href";
      var isSkipNode = mutation.target.getAttribute("data-cssvars") === "skip";
      var isSrcNode = mutation.target.getAttribute("data-cssvars") === "src";
      if (isEnabledMutation) {
        isValid = !isSkipNode && !isSrcNode;
      } else if (isHrefMutation) {
        if (isSkipNode) {
          mutation.target.setAttribute("data-cssvars", "");
        } else if (isSrcNode) {
          resetCssNodes(settings.rootElement, true);
        }
        isValid = true;
      }
    }
    return isValid;
  }
  function isValidStyleTextMutation(mutation) {
    var isValid = false;
    if (mutation.type === "childList") {
      var isStyleElm = isStyle(mutation.target);
      var isOutNode = mutation.target.getAttribute("data-cssvars") === "out";
      isValid = isStyleElm && !isOutNode;
    }
    return isValid;
  }
  function isValidAddMutation(mutation) {
    var isValid = false;
    if (mutation.type === "childList") {
      isValid = [].slice.call(mutation.addedNodes).some((function(node) {
        var isElm = node.nodeType === 1;
        var hasAttr = isElm && node.hasAttribute("data-cssvars");
        var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
        var isValid2 = !hasAttr && (isLink(node) || isStyleWithVars);
        return isValid2 && !isDisabled(node);
      }));
    }
    return isValid;
  }
  function isValidRemoveMutation(mutation) {
    var isValid = false;
    if (mutation.type === "childList") {
      isValid = [].slice.call(mutation.removedNodes).some((function(node) {
        var isElm = node.nodeType === 1;
        var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
        var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
        var isValid2 = isSrcNode;
        if (isSrcNode || isOutNode) {
          var dataGroup = node.getAttribute("data-cssvars-group");
          var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));
          if (isSrcNode) {
            resetCssNodes(settings.rootElement, true);
          }
          if (orphanNode) {
            orphanNode.parentNode.removeChild(orphanNode);
          }
        }
        return isValid2;
      }));
    }
    return isValid;
  }
  if (!window.MutationObserver) {
    return;
  }
  if (cssVarsObserver) {
    cssVarsObserver.disconnect();
    cssVarsObserver = null;
  }
  cssVarsObserver = new MutationObserver((function(mutations) {
    var hasValidMutation = mutations.some((function(mutation) {
      return isValidAttributeMutation(mutation) || isValidStyleTextMutation(mutation) || isValidAddMutation(mutation) || isValidRemoveMutation(mutation);
    }));
    if (hasValidMutation) {
      cssVars(settings);
    }
  }));
  cssVarsObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["disabled", "href"],
    childList: true,
    subtree: true
  });
}
function cssVarsDebounced(settings) {
  var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout((function() {
    settings.__benchmark = null;
    cssVars(settings);
  }), delay);
}
function fixKeyframes(rootElement) {
  var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter((function(prop) {
    return getComputedStyle(document.body)[prop];
  }))[0];
  if (animationNameProp) {
    var allNodes = [].slice.call(rootElement.querySelectorAll("*"));
    var keyframeNodes = [];
    var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
    for (var i = 0, len = allNodes.length; i < len; i++) {
      var node = allNodes[i];
      var animationName = getComputedStyle(node)[animationNameProp];
      if (animationName !== "none") {
        node.style[animationNameProp] += nameMarker;
        keyframeNodes.push(node);
      }
    }
    void document.body.offsetHeight;
    for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
      var nodeStyle = keyframeNodes[_i].style;
      nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
    }
  }
}
function fixRelativeCssUrls(cssText, baseUrl) {
  var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
  cssUrls.forEach((function(cssUrl) {
    var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
    var newUrl = getFullUrl(oldUrl, baseUrl);
    cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
  }));
  return cssText;
}
function fixVarNames() {
  var varObj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var reLeadingHyphens = /^-{2}/;
  return Object.keys(varObj).reduce((function(obj, value) {
    var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
    obj[key] = varObj[value];
    return obj;
  }), {});
}
function getFullUrl(url) {
  var base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.href;
  var d = document.implementation.createHTMLDocument("");
  var b = d.createElement("base");
  var a = d.createElement("a");
  d.head.appendChild(b);
  d.body.appendChild(a);
  b.href = base;
  a.href = url;
  return a.href;
}
function getTimeStamp() {
  return isBrowser && (window.performance || {}).now ? window.performance.now() : (/* @__PURE__ */ new Date()).getTime();
}
function resetCssNodes(rootElement) {
  var resetDOMVariableStore = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var resetNodes = [].slice.call(rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
  resetNodes.forEach((function(node) {
    return node.setAttribute("data-cssvars", "");
  }));
  if (resetDOMVariableStore) {
    variableStore.dom = {};
  }
}

// src/app/shared/components/theme/theme.component.ts
var _c0 = ["*"];
function ThemeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "p-progressSpinner", 2);
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4, "Loading theme...");
    \u0275\u0275elementEnd()()();
  }
}
var ThemeComponent = class _ThemeComponent {
  destroyRef = inject(DestroyRef);
  themeService = inject(ThemeDataService);
  clientDataService = inject(ClientDataService);
  renderer = inject(RendererFactory2).createRenderer(null, null);
  document = inject(DOCUMENT);
  http = inject(HttpClient);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  hasNativeCssVariableSupport = computed(() => globalThis.window?.["CSS"]?.supports?.("(--a: 0)") || false, ...ngDevMode ? [{ debugName: "hasNativeCssVariableSupport" }] : []);
  classes = "";
  previousClientId = void 0;
  previousThemeId = void 0;
  cancelPendingThemeRequest$ = new Subject();
  constructor() {
    effect(() => {
      const selectedClient = this.clientDataService.getSelectedClient();
      const clientToUse = selectedClient ?? this.clientDataService.getPreviewClient();
      if (isDefined(clientToUse)) {
        const themeId = this.getThemeId(clientToUse);
        const isClientUpdateWithoutTheme = clientToUse.id === this.previousClientId && !isDefined(clientToUse.theme?.id) && isDefined(this.previousThemeId);
        if (isClientUpdateWithoutTheme) {
          return;
        }
        if (clientToUse.id !== this.previousClientId || themeId !== this.previousThemeId) {
          this.cancelPendingThemeRequest$.next();
          this.updateTheme(themeId);
          this.previousClientId = clientToUse.id;
          this.previousThemeId = themeId;
        }
      } else {
        this.previousClientId = void 0;
        this.previousThemeId = void 0;
      }
    });
  }
  ngOnInit() {
    this.themeService.theme$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (theme) => {
        if (!theme) {
          this.loading.set(false);
          return;
        }
        this.loadTheme(theme).catch((error) => console.error("Error loading theme:", error));
      }
    });
  }
  async loadTheme(theme) {
    try {
      this.loading.set(true);
      await this.processTheme(theme);
      this.loading.set(false);
    } catch (error) {
      this.loading.set(false);
      console.error("Theme loading error:", error);
    }
  }
  processCustomTags(theme) {
    if (!theme.customTags)
      return;
    let index = 0;
    for (const customTag of theme.customTags) {
      this.appendHTML(`custom-tag-${index}`, customTag.location, customTag.tag, customTag.attributes, customTag.contents);
      index++;
    }
  }
  async processThemeVariables(theme) {
    if (!theme.variables)
      return;
    await this.injectSettingsVariables(theme.variables);
    this.updateClasses(theme.variables);
  }
  async processTheme(theme) {
    await Promise.all([
      this.processThemeVariables(theme),
      this.loadExternalStyles(theme),
      this.injectCustomStyles(theme),
      Promise.resolve(this.processCustomTags(theme))
    ]);
  }
  async loadExternalStyles(theme) {
    if (!theme.settings?.["cssSrc"])
      return;
    try {
      const response = await firstValueFrom(this.http.get(theme.settings["cssSrc"], {
        responseType: "text"
      }));
      await this.injectStyle("external-css", response);
    } catch (error) {
      console.error("Failed to load external styles:", error);
    }
  }
  async injectCustomStyles(theme) {
    if (isNullOrUndefined(theme.customStyles))
      return;
    try {
      await this.injectStyle("custom-css", theme.customStyles);
    } catch (error) {
      console.error("Failed to inject custom styles:", error);
    }
  }
  updateClasses(variables) {
    const classes = [];
    if (variables["--main-gutter-width"] && !["0", "0px", "0rem"].includes(variables["--main-gutter-width"])) {
      classes.push("app-has-gutter");
    }
    this.classes = classes.join(" ");
  }
  updateTheme(themeId) {
    (themeId === "default" ? this.themeService.getDomainTheme(themeId) : this.themeService.fetchTheme(themeId)).pipe(take(1), takeUntil(this.cancelPendingThemeRequest$)).subscribe({
      next: (theme) => {
        this.themeService.setTheme(theme);
      },
      error: (err) => {
        console.error(`Failed to load theme ${themeId}:`, err);
      }
    });
  }
  getThemeId(selectedClient) {
    return isDefined(selectedClient?.theme?.id) && selectedClient.theme.id !== "inherited" ? selectedClient.theme.id : "default";
  }
  async injectSettingsVariables(variables) {
    const fonts = {};
    const fontKeys = Object.keys(variables).filter((x) => x.includes("-font-family"));
    for (const key of fontKeys) {
      const font = variables[key];
      fonts[font] = `${font}:300,400,400i,500,700`;
    }
    if (Object.values(fonts).length > 0) {
      await this.loadFonts(fonts);
    }
    return new Promise((resolve, reject) => {
      try {
        cssVars({
          variables,
          onComplete() {
            resolve();
          },
          onError(message) {
            reject(new Error(message));
          }
        });
        if (this.hasNativeCssVariableSupport()) {
          resolve();
        }
        resolve();
      } catch (err) {
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    });
  }
  loadFonts(fonts) {
    return new Promise((resolve) => {
      WebFont.load({
        google: {
          families: Object.values(fonts)
        },
        active: () => resolve(),
        inactive: () => resolve()
        // if the font is already loaded, it will not trigger the active event
      });
    });
  }
  async injectStyle(id, css) {
    try {
      let styleTag = this.document.getElementById(id);
      if (isNullOrUndefined(styleTag)) {
        styleTag = this.renderer.createElement("style");
        this.renderer.setAttribute(styleTag, "id", id);
        this.renderer.appendChild(this.document.head, styleTag);
      }
      styleTag.textContent = css;
    } catch (error) {
      console.error("Failed to inject style:", error);
      throw error;
    }
  }
  appendHTML(id, owner, tag, attributes, contents) {
    const parent = this.document.getElementsByTagName(owner)[0];
    const script = this.renderer.createElement(tag);
    this.renderer.setAttribute(script, "id", id);
    const strings = (attributes || "").split(/[\r\n]/g).filter((x) => !!x);
    for (const str of strings) {
      const [key, value] = str.split("=");
      this.renderer.setAttribute(script, key, value?.replaceAll(/['"]/g, "") || "true");
    }
    script.innerHTML = contents || "";
    this.renderer.appendChild(parent, script);
  }
  static \u0275fac = function ThemeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeComponent, selectors: [["app-theme"]], hostVars: 2, hostBindings: function ThemeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.classes);
    }
  }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "fixed", "inset-0", "flex", "items-center", "justify-center", "bg-white/80", "backdrop-blur-sm", "z-50"], [1, "flex", "flex-col", "items-center", "gap-3"], ["styleClass", "w-12 h-12 text-primary-500"], [1, "text-sm", "text-gray-600"]], template: function ThemeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, ThemeComponent_Conditional_0_Template, 5, 0, "div", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
    }
  }, dependencies: [ProgressSpinnerModule, ProgressSpinner], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeComponent, [{
    type: Component,
    args: [{ selector: "app-theme", imports: [ProgressSpinnerModule], template: '@if (loading()) {\n  <div\n    class="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"\n  >\n    <div class="flex flex-col items-center gap-3">\n      <p-progressSpinner styleClass="w-12 h-12 text-primary-500">\n      </p-progressSpinner>\n      <p class="text-sm text-gray-600">Loading theme...</p>\n    </div>\n  </div>\n}\n<ng-content></ng-content>\n', styles: ["/* src/app/shared/components/theme/theme.component.scss */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */\n"] }]
  }], () => [], { classes: [{
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeComponent, { className: "ThemeComponent", filePath: "src/app/shared/components/theme/theme.component.ts", lineNumber: 32 });
})();

export {
  ThemeComponent
};
/*! Bundled license information:

css-vars-ponyfill/dist/css-vars-ponyfill.esm.js:
  (*!
   * css-vars-ponyfill
   * v2.4.9
   * https://jhildenbiddle.github.io/css-vars-ponyfill/
   * (c) 2018-2024 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   *)
  (*!
   * get-css-data
   * v2.1.0
   * https://github.com/jhildenbiddle/get-css-data
   * (c) 2018-2022 John Hildenbiddle <http://hildenbiddle.com>
   * MIT license
   *)
  (**
   * Gets CSS data from <style> and <link> nodes (including @imports), then
   * returns data in order processed by DOM. Allows specifying nodes to
   * include/exclude and filtering CSS data using RegEx.
   *
   * @preserve
   * @param {object}   [options] The options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes.
   * @param {string}   [options.include] CSS selector matching <link> and <style>
   *                   nodes to include
   * @param {string}   [options.exclude] CSS selector matching <link> and <style>
   *                   nodes to exclude
   * @param {object}   [options.filter] Regular expression used to filter node CSS
   *                   data. Each block of CSS data is tested against the filter,
   *                   and only matching data is included.
   * @param {boolean}  [options.skipDisabled=true] Determines if disabled
   *                   stylesheets will be skipped while collecting CSS data.
   * @param {boolean}  [options.useCSSOM=false] Determines if CSS data will be
   *                   collected from a stylesheet's runtime values instead of its
   *                   text content. This is required to get accurate CSS data
   *                   when a stylesheet has been modified using the deleteRule()
   *                   or insertRule() methods because these modifications will
   *                   not be reflected in the stylesheet's text content.
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments.
   * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
   *                   1) CSS text, 2) source node reference, and 3) the source
   *                   URL as arguments.
   * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
   *                   object for inspection, 2) soure node reference, and 3) the
   *                   source URL that failed (either a <link> href or an @import)
   *                   as arguments
   * @param {function} [options.onComplete] Callback after all nodes have been
   *                   processed. Passes 1) concatenated CSS text, 2) an array of
   *                   CSS text in DOM order, and 3) an array of nodes in DOM
   *                   order as arguments.
   *
   * @example
   *
   *   getCssData({
   *     rootElement : document,
   *     include     : 'style,link[rel="stylesheet"]',
   *     exclude     : '[href="skip.css"]',
   *     filter      : /red/,
   *     skipDisabled: true,
   *     useCSSOM    : false,
   *     onBeforeSend(xhr, node, url) {
   *       // ...
   *     }
   *     onSuccess(cssText, node, url) {
   *       // ...
   *     }
   *     onError(xhr, node, url) {
   *       // ...
   *     },
   *     onComplete(cssText, cssArray, nodeArray) {
   *       // ...
   *     }
   *   });
   *)
  (**
   * Fetches, parses, and transforms CSS custom properties from specified
   * <style> and <link> elements into static values, then appends a new <style>
   * element with static values to the DOM to provide CSS custom property
   * compatibility for legacy browsers. Also provides a single interface for
   * live updates of runtime values in both modern and legacy browsers.
   *
   * @preserve
   * @param {object}   [options] Options object
   * @param {object}   [options.rootElement=document] Root element to traverse for
   *                   <link> and <style> nodes
   * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
   *                   and <style> nodes will be processed.
   * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
   *                   matching <link re="stylesheet"> and <style> nodes to
   *                   process
   * @param {string}   [options.exclude] CSS selector matching <link
   *                   rel="stylehseet"> and <style> nodes to exclude from those
   *                   matches by options.include
   * @param {object}   [options.variables] A map of custom property name/value
   *                   pairs. Property names can omit or include the leading
   *                   double-hyphen (—), and values specified will override
   *                   previous values
   * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
   *                   only generate legacy-compatible CSS in browsers that lack
   *                   native support (i.e., legacy browsers)
   * @param {boolean}  [options.preserveStatic=true] Determines if CSS
   *                   declarations that do not reference a custom property will
   *                   be preserved in the transformed CSS
   * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
   *                   property declarations will be preserved in the transformed
   *                   CSS
   * @param {boolean}  [options.silent=false] Determines if warning and error
   *                   messages will be displayed on the console
   * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
   *                   update the DOM after processing CSS custom properties
   * @param {boolean}  [options.updateURLs=true] Determines if relative url()
   *                   paths will be converted to absolute urls in external CSS
   * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
   *                   be created that will execute the ponyfill when a <link> or
   *                   <style> DOM mutation is observed
   * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
   *                   1) the XHR object, 2) source node reference, and 3) the
   *                   source URL as arguments
   * @param {function} [options.onError] Callback after a CSS parsing error has
   *                   occurred or an XHR request has failed. Passes 1) an error
   *                   message, and 2) source node reference, 3) xhr, and 4 url as
   *                   arguments.
   * @param {function} [options.onWarning] Callback after each CSS parsing warning
   *                   has occurred. Passes 1) a warning message as an argument.
   * @param {function} [options.onSuccess] Callback after CSS data has been
   *                   collected from each node and before CSS custom properties
   *                   have been transformed. Allows modifying the CSS data before
   *                   it is transformed by returning any string value (or false
   *                   to skip). Passes 1) CSS text, 2) source node reference, and
   *                   3) the source URL as arguments.
   * @param {function} [options.onComplete] Callback after all CSS has been
   *                   processed, legacy-compatible CSS has been generated, and
   *                   (optionally) the DOM has been updated. Passes 1) a CSS
   *                   string with CSS variable values resolved, 2) an array of
   *                   output <style> node references that have been appended to
   *                   the DOM, 3) an object containing all custom properies names
   *                   and values, and 4) the ponyfill execution time in
   *                   milliseconds.
   * @param {function} [options.onFinally] Callback in modern and legacy browsers
   *                   after the ponyfill has finished all tasks. Passes 1) a
   *                   boolean indicating if the last ponyfill call resulted in a
   *                   style change, 2) a boolean indicating if the current
   *                   browser provides native support for CSS custom properties,
   *                   and 3) the ponyfill execution time in milliseconds.
   * @example
   *
   *   cssVars({
   *     rootElement   : document,
   *     shadowDOM     : false,
   *     include       : 'style,link[rel="stylesheet"]',
   *     exclude       : '',
   *     variables     : {},
   *     onlyLegacy    : true,
   *     preserveStatic: true,
   *     preserveVars  : false,
   *     silent        : false,
   *     updateDOM     : true,
   *     updateURLs    : true,
   *     watch         : false,
   *     onBeforeSend(xhr, node, url) {},
   *     onError(message, node, xhr, url) {},
   *     onWarning(message) {},
   *     onSuccess(cssText, node, url) {},
   *     onComplete(cssText, styleNode, cssVariables, benchmark) {},
   *     onFinally(hasChanged, hasNativeSupport, benchmark)
   *   });
   *)
*/
//# sourceMappingURL=chunk-U4KVSIUF.js.map
