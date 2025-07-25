import {
  SplitterModule
} from "./chunk-3VYGEX2A.js";
import {
  FaIconComponent,
  FontAwesomeModule,
  ThemeDataService,
  Toast,
  ToastModule
} from "./chunk-YESEXYFI.js";
import {
  ToastService
} from "./chunk-QSIA2WMK.js";
import {
  ClientDataService,
  Dialog,
  DialogModule,
  DialogService,
  GridComponent,
  LocalStorageService,
  MeasurementDateTimeService,
  ProgressSpinner,
  ProgressSpinnerModule,
  ScrollPanel,
  ScrollPanelModule,
  TableModule,
  UtilityService,
  takeUntilDestroyed,
  toSignal
} from "./chunk-QYHQ64RQ.js";
import {
  Badge,
  BadgeModule,
  BaseComponent,
  BaseStyle,
  ButtonModule,
  ConfirmationService,
  ConnectedOverlayScrollHandler,
  D,
  DefaultValueAccessor,
  DomHandler,
  FormsModule,
  I,
  IconField,
  InputIcon,
  InputText,
  InputTextModule,
  MessageService,
  NgControlStatus,
  NgModel,
  OverlayService,
  PrimeTemplate,
  Ripple,
  RippleModule,
  SharedModule,
  Tooltip,
  TooltipModule,
  Y,
  Yt,
  bt,
  providePrimeNG,
  s2 as s,
  z,
  zindexutils
} from "./chunk-ZQA7ZUAC.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-G6AKSBPY.js";
import {
  ActionType,
  BroadcastMessageService
} from "./chunk-AVLNY2MS.js";
import {
  AccountsService,
  ApiModule,
  AuthDataService,
  AuthService as AuthService2,
  ClientsService,
  Configuration
} from "./chunk-GTVUGL7K.js";
import {
  ApiUrlService,
  AuthService,
  AuthTokenManagerService,
  DEFAULT_PAGE_SIZE,
  ErrorReasons,
  LOCAL_STORAGE_KEY_SELECTED_CLIENT,
  MOBILE_BREAKPOINT,
  environment,
  hasProperty,
  initializeFeatureDefaults,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isString
} from "./chunk-2QFPVW6Y.js";
import {
  ActivatedRoute,
  CommonModule,
  DomRendererFactory2,
  DomSanitizer,
  HashLocationStrategy,
  HttpClient,
  HttpErrorResponse,
  LocationStrategy,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  UpperCasePipe,
  bootstrapApplication,
  isPlatformBrowser,
  provideHttpClient,
  provideRouter,
  withInterceptors
} from "./chunk-OLJEO5KJ.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  RendererFactory2,
  RuntimeError,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  debounceTime,
  effect,
  filter,
  firstValueFrom,
  forwardRef,
  importProvidersFrom,
  inject,
  input,
  makeEnvironmentProviders,
  map,
  numberAttribute,
  of,
  output,
  performanceMarkFeature,
  provideAppInitializer,
  provideZonelessChangeDetection,
  retry,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  switchMap,
  take,
  takeUntil,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-XEZOAFBV.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KWSTWQNB.js";

// node_modules/webfontloader/webfontloader.js
var require_webfontloader = __commonJS({
  "node_modules/webfontloader/webfontloader.js"(exports, module) {
    "use strict";
    (function() {
      function aa(a43, b5, c27) {
        return a43.call.apply(a43.bind, arguments);
      }
      function ba(a43, b5, c27) {
        if (!a43) throw Error();
        if (2 < arguments.length) {
          var d34 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c28 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c28, d34);
            return a43.apply(b5, c28);
          };
        }
        return function() {
          return a43.apply(b5, arguments);
        };
      }
      function p4(a43, b5, c27) {
        p4 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p4.apply(null, arguments);
      }
      var q = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      function ca(a43, b5) {
        this.a = a43;
        this.o = b5 || a43;
        this.c = this.o.document;
      }
      var da = !!window.FontFace;
      function t42(a43, b5, c27, d34) {
        b5 = a43.c.createElement(b5);
        if (c27) for (var e59 in c27) c27.hasOwnProperty(e59) && ("style" == e59 ? b5.style.cssText = c27[e59] : b5.setAttribute(e59, c27[e59]));
        d34 && b5.appendChild(a43.c.createTextNode(d34));
        return b5;
      }
      function u7(a43, b5, c27) {
        a43 = a43.c.getElementsByTagName(b5)[0];
        a43 || (a43 = document.documentElement);
        a43.insertBefore(c27, a43.lastChild);
      }
      function v3(a43) {
        a43.parentNode && a43.parentNode.removeChild(a43);
      }
      function w(a43, b5, c27) {
        b5 = b5 || [];
        c27 = c27 || [];
        for (var d34 = a43.className.split(/\s+/), e59 = 0; e59 < b5.length; e59 += 1) {
          for (var f11 = false, g6 = 0; g6 < d34.length; g6 += 1) if (b5[e59] === d34[g6]) {
            f11 = true;
            break;
          }
          f11 || d34.push(b5[e59]);
        }
        b5 = [];
        for (e59 = 0; e59 < d34.length; e59 += 1) {
          f11 = false;
          for (g6 = 0; g6 < c27.length; g6 += 1) if (d34[e59] === c27[g6]) {
            f11 = true;
            break;
          }
          f11 || b5.push(d34[e59]);
        }
        a43.className = b5.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function y(a43, b5) {
        for (var c27 = a43.className.split(/\s+/), d34 = 0, e59 = c27.length; d34 < e59; d34++) if (c27[d34] == b5) return true;
        return false;
      }
      function ea(a43) {
        return a43.o.location.hostname || a43.a.location.hostname;
      }
      function z2(a43, b5, c27) {
        function d34() {
          m5 && e59 && f11 && (m5(g6), m5 = null);
        }
        b5 = t42(a43, "link", { rel: "stylesheet", href: b5, media: "all" });
        var e59 = false, f11 = true, g6 = null, m5 = c27 || null;
        da ? (b5.onload = function() {
          e59 = true;
          d34();
        }, b5.onerror = function() {
          e59 = true;
          g6 = Error("Stylesheet failed to load");
          d34();
        }) : setTimeout(function() {
          e59 = true;
          d34();
        }, 0);
        u7(a43, "head", b5);
      }
      function A(a43, b5, c27, d34) {
        var e59 = a43.c.getElementsByTagName("head")[0];
        if (e59) {
          var f11 = t42(a43, "script", { src: b5 }), g6 = false;
          f11.onload = f11.onreadystatechange = function() {
            g6 || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g6 = true, c27 && c27(null), f11.onload = f11.onreadystatechange = null, "HEAD" == f11.parentNode.tagName && e59.removeChild(f11));
          };
          e59.appendChild(f11);
          setTimeout(function() {
            g6 || (g6 = true, c27 && c27(Error("Script load timeout")));
          }, d34 || 5e3);
          return f11;
        }
        return null;
      }
      ;
      function B() {
        this.a = 0;
        this.c = null;
      }
      function C(a43) {
        a43.a++;
        return function() {
          a43.a--;
          D2(a43);
        };
      }
      function E(a43, b5) {
        a43.c = b5;
        D2(a43);
      }
      function D2(a43) {
        0 == a43.a && a43.c && (a43.c(), a43.c = null);
      }
      ;
      function F(a43) {
        this.a = a43 || "-";
      }
      F.prototype.c = function(a43) {
        for (var b5 = [], c27 = 0; c27 < arguments.length; c27++) b5.push(arguments[c27].replace(/[\W_]+/g, "").toLowerCase());
        return b5.join(this.a);
      };
      function G(a43, b5) {
        this.c = a43;
        this.f = 4;
        this.a = "n";
        var c27 = (b5 || "n4").match(/^([nio])([1-9])$/i);
        c27 && (this.a = c27[1], this.f = parseInt(c27[2], 10));
      }
      function fa(a43) {
        return H(a43) + " " + (a43.f + "00") + " 300px " + I2(a43.c);
      }
      function I2(a43) {
        var b5 = [];
        a43 = a43.split(/,\s*/);
        for (var c27 = 0; c27 < a43.length; c27++) {
          var d34 = a43[c27].replace(/['"]/g, "");
          -1 != d34.indexOf(" ") || /^\d/.test(d34) ? b5.push("'" + d34 + "'") : b5.push(d34);
        }
        return b5.join(",");
      }
      function J(a43) {
        return a43.a + a43.f;
      }
      function H(a43) {
        var b5 = "normal";
        "o" === a43.a ? b5 = "oblique" : "i" === a43.a && (b5 = "italic");
        return b5;
      }
      function ga(a43) {
        var b5 = 4, c27 = "n", d34 = null;
        a43 && ((d34 = a43.match(/(normal|oblique|italic)/i)) && d34[1] && (c27 = d34[1].substr(0, 1).toLowerCase()), (d34 = a43.match(/([1-9]00|normal|bold)/i)) && d34[1] && (/bold/i.test(d34[1]) ? b5 = 7 : /[1-9]00/.test(d34[1]) && (b5 = parseInt(d34[1].substr(0, 1), 10))));
        return c27 + b5;
      }
      ;
      function ha(a43, b5) {
        this.c = a43;
        this.f = a43.o.document.documentElement;
        this.h = b5;
        this.a = new F("-");
        this.j = false !== b5.events;
        this.g = false !== b5.classes;
      }
      function ia(a43) {
        a43.g && w(a43.f, [a43.a.c("wf", "loading")]);
        K(a43, "loading");
      }
      function L(a43) {
        if (a43.g) {
          var b5 = y(a43.f, a43.a.c("wf", "active")), c27 = [], d34 = [a43.a.c("wf", "loading")];
          b5 || c27.push(a43.a.c("wf", "inactive"));
          w(a43.f, c27, d34);
        }
        K(a43, "inactive");
      }
      function K(a43, b5, c27) {
        if (a43.j && a43.h[b5]) if (c27) a43.h[b5](c27.c, J(c27));
        else a43.h[b5]();
      }
      ;
      function ja() {
        this.c = {};
      }
      function ka(a43, b5, c27) {
        var d34 = [], e59;
        for (e59 in b5) if (b5.hasOwnProperty(e59)) {
          var f11 = a43.c[e59];
          f11 && d34.push(f11(b5[e59], c27));
        }
        return d34;
      }
      ;
      function M(a43, b5) {
        this.c = a43;
        this.f = b5;
        this.a = t42(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function N(a43) {
        u7(a43.c, "body", a43.a);
      }
      function O(a43) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I2(a43.c) + ";" + ("font-style:" + H(a43) + ";font-weight:" + (a43.f + "00") + ";");
      }
      ;
      function P(a43, b5, c27, d34, e59, f11) {
        this.g = a43;
        this.j = b5;
        this.a = d34;
        this.c = c27;
        this.f = e59 || 3e3;
        this.h = f11 || void 0;
      }
      P.prototype.start = function() {
        var a43 = this.c.o.document, b5 = this, c27 = q(), d34 = new Promise(function(d35, e60) {
          function f12() {
            q() - c27 >= b5.f ? e60() : a43.fonts.load(fa(b5.a), b5.h).then(function(a44) {
              1 <= a44.length ? d35() : setTimeout(f12, 25);
            }, function() {
              e60();
            });
          }
          f12();
        }), e59 = null, f11 = new Promise(function(a44, d35) {
          e59 = setTimeout(d35, b5.f);
        });
        Promise.race([f11, d34]).then(function() {
          e59 && (clearTimeout(e59), e59 = null);
          b5.g(b5.a);
        }, function() {
          b5.j(b5.a);
        });
      };
      function Q(a43, b5, c27, d34, e59, f11, g6) {
        this.v = a43;
        this.B = b5;
        this.c = c27;
        this.a = d34;
        this.s = g6 || "BESbswy";
        this.f = {};
        this.w = e59 || 3e3;
        this.u = f11 || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a43 = new G(this.a.c + ",serif", J(this.a));
        a43 = O(a43);
        this.g.a.style.cssText = a43;
        a43 = new G(this.a.c + ",sans-serif", J(this.a));
        a43 = O(a43);
        this.h.a.style.cssText = a43;
        a43 = new G("serif", J(this.a));
        a43 = O(a43);
        this.j.a.style.cssText = a43;
        a43 = new G("sans-serif", J(this.a));
        a43 = O(a43);
        this.m.a.style.cssText = a43;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
      }
      var R = { D: "serif", C: "sans-serif" }, S = null;
      function T() {
        if (null === S) {
          var a43 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a43 && (536 > parseInt(a43[1], 10) || 536 === parseInt(a43[1], 10) && 11 >= parseInt(a43[2], 10));
        }
        return S;
      }
      Q.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
      };
      function la(a43, b5, c27) {
        for (var d34 in R) if (R.hasOwnProperty(d34) && b5 === a43.f[R[d34]] && c27 === a43.f[R[d34]]) return true;
        return false;
      }
      function U(a43) {
        var b5 = a43.g.a.offsetWidth, c27 = a43.h.a.offsetWidth, d34;
        (d34 = b5 === a43.f.serif && c27 === a43.f["sans-serif"]) || (d34 = T() && la(a43, b5, c27));
        d34 ? q() - a43.A >= a43.w ? T() && la(a43, b5, c27) && (null === a43.u || a43.u.hasOwnProperty(a43.a.c)) ? V(a43, a43.v) : V(a43, a43.B) : ma(a43) : V(a43, a43.v);
      }
      function ma(a43) {
        setTimeout(p4(function() {
          U(this);
        }, a43), 50);
      }
      function V(a43, b5) {
        setTimeout(p4(function() {
          v3(this.g.a);
          v3(this.h.a);
          v3(this.j.a);
          v3(this.m.a);
          b5(this.a);
        }, a43), 0);
      }
      ;
      function W(a43, b5, c27) {
        this.c = a43;
        this.a = b5;
        this.f = 0;
        this.m = this.j = false;
        this.s = c27;
      }
      var X = null;
      W.prototype.g = function(a43) {
        var b5 = this.a;
        b5.g && w(b5.f, [b5.a.c("wf", a43.c, J(a43).toString(), "active")], [b5.a.c("wf", a43.c, J(a43).toString(), "loading"), b5.a.c("wf", a43.c, J(a43).toString(), "inactive")]);
        K(b5, "fontactive", a43);
        this.m = true;
        na(this);
      };
      W.prototype.h = function(a43) {
        var b5 = this.a;
        if (b5.g) {
          var c27 = y(b5.f, b5.a.c("wf", a43.c, J(a43).toString(), "active")), d34 = [], e59 = [b5.a.c("wf", a43.c, J(a43).toString(), "loading")];
          c27 || d34.push(b5.a.c("wf", a43.c, J(a43).toString(), "inactive"));
          w(b5.f, d34, e59);
        }
        K(b5, "fontinactive", a43);
        na(this);
      };
      function na(a43) {
        0 == --a43.f && a43.j && (a43.m ? (a43 = a43.a, a43.g && w(a43.f, [a43.a.c("wf", "active")], [a43.a.c("wf", "loading"), a43.a.c("wf", "inactive")]), K(a43, "active")) : L(a43.a));
      }
      ;
      function oa(a43) {
        this.j = a43;
        this.a = new ja();
        this.h = 0;
        this.f = this.g = true;
      }
      oa.prototype.load = function(a43) {
        this.c = new ca(this.j, a43.context || this.j);
        this.g = false !== a43.events;
        this.f = false !== a43.classes;
        pa(this, new ha(this.c, a43), a43);
      };
      function qa(a43, b5, c27, d34, e59) {
        var f11 = 0 == --a43.h;
        (a43.f || a43.g) && setTimeout(function() {
          var a44 = e59 || null, m5 = d34 || null || {};
          if (0 === c27.length && f11) L(b5.a);
          else {
            b5.f += c27.length;
            f11 && (b5.j = f11);
            var h5, l18 = [];
            for (h5 = 0; h5 < c27.length; h5++) {
              var k4 = c27[h5], n39 = m5[k4.c], r85 = b5.a, x = k4;
              r85.g && w(r85.f, [r85.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r85, "fontloading", x);
              r85 = null;
              if (null === X) if (window.FontFace) {
                var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
              } else X = false;
              X ? r85 = new P(p4(b5.g, b5), p4(b5.h, b5), b5.c, k4, b5.s, n39) : r85 = new Q(p4(b5.g, b5), p4(b5.h, b5), b5.c, k4, b5.s, a44, n39);
              l18.push(r85);
            }
            for (h5 = 0; h5 < l18.length; h5++) l18[h5].start();
          }
        }, 0);
      }
      function pa(a43, b5, c27) {
        var d34 = [], e59 = c27.timeout;
        ia(b5);
        var d34 = ka(a43.a, c27, a43.c), f11 = new W(a43.c, b5, e59);
        a43.h = d34.length;
        b5 = 0;
        for (c27 = d34.length; b5 < c27; b5++) d34[b5].load(function(b6, d35, c28) {
          qa(a43, f11, b6, d35, c28);
        });
      }
      ;
      function ra(a43, b5) {
        this.c = a43;
        this.a = b5;
      }
      ra.prototype.load = function(a43) {
        function b5() {
          if (f11["__mti_fntLst" + d34]) {
            var c28 = f11["__mti_fntLst" + d34](), e60 = [], h5;
            if (c28) for (var l18 = 0; l18 < c28.length; l18++) {
              var k4 = c28[l18].fontfamily;
              void 0 != c28[l18].fontStyle && void 0 != c28[l18].fontWeight ? (h5 = c28[l18].fontStyle + c28[l18].fontWeight, e60.push(new G(k4, h5))) : e60.push(new G(k4));
            }
            a43(e60);
          } else setTimeout(function() {
            b5();
          }, 50);
        }
        var c27 = this, d34 = c27.a.projectId, e59 = c27.a.version;
        if (d34) {
          var f11 = c27.c.o;
          A(this.c, (c27.a.api || "https://fast.fonts.net/jsapi") + "/" + d34 + ".js" + (e59 ? "?v=" + e59 : ""), function(e60) {
            e60 ? a43([]) : (f11["__MonotypeConfiguration__" + d34] = function() {
              return c27.a;
            }, b5());
          }).id = "__MonotypeAPIScript__" + d34;
        } else a43([]);
      };
      function sa(a43, b5) {
        this.c = a43;
        this.a = b5;
      }
      sa.prototype.load = function(a43) {
        var b5, c27, d34 = this.a.urls || [], e59 = this.a.families || [], f11 = this.a.testStrings || {}, g6 = new B();
        b5 = 0;
        for (c27 = d34.length; b5 < c27; b5++) z2(this.c, d34[b5], C(g6));
        var m5 = [];
        b5 = 0;
        for (c27 = e59.length; b5 < c27; b5++) if (d34 = e59[b5].split(":"), d34[1]) for (var h5 = d34[1].split(","), l18 = 0; l18 < h5.length; l18 += 1) m5.push(new G(d34[0], h5[l18]));
        else m5.push(new G(d34[0]));
        E(g6, function() {
          a43(m5, f11);
        });
      };
      function ta(a43, b5) {
        a43 ? this.c = a43 : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b5 || "";
      }
      var ua = "https://fonts.googleapis.com/css";
      function va(a43, b5) {
        for (var c27 = b5.length, d34 = 0; d34 < c27; d34++) {
          var e59 = b5[d34].split(":");
          3 == e59.length && a43.f.push(e59.pop());
          var f11 = "";
          2 == e59.length && "" != e59[1] && (f11 = ":");
          a43.a.push(e59.join(f11));
        }
      }
      function wa(a43) {
        if (0 == a43.a.length) throw Error("No fonts to load!");
        if (-1 != a43.c.indexOf("kit=")) return a43.c;
        for (var b5 = a43.a.length, c27 = [], d34 = 0; d34 < b5; d34++) c27.push(a43.a[d34].replace(/ /g, "+"));
        b5 = a43.c + "?family=" + c27.join("%7C");
        0 < a43.f.length && (b5 += "&subset=" + a43.f.join(","));
        0 < a43.g.length && (b5 += "&text=" + encodeURIComponent(a43.g));
        return b5;
      }
      ;
      function ya(a43) {
        this.f = a43;
        this.a = [];
        this.c = {};
      }
      var za = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function Da(a43) {
        for (var b5 = a43.f.length, c27 = 0; c27 < b5; c27++) {
          var d34 = a43.f[c27].split(":"), e59 = d34[0].replace(/\+/g, " "), f11 = ["n4"];
          if (2 <= d34.length) {
            var g6;
            var m5 = d34[1];
            g6 = [];
            if (m5) for (var m5 = m5.split(","), h5 = m5.length, l18 = 0; l18 < h5; l18++) {
              var k4;
              k4 = m5[l18];
              if (k4.match(/^[\w-]+$/)) {
                var n39 = Ca.exec(k4.toLowerCase());
                if (null == n39) k4 = "";
                else {
                  k4 = n39[2];
                  k4 = null == k4 || "" == k4 ? "n" : Ba[k4];
                  n39 = n39[1];
                  if (null == n39 || "" == n39) n39 = "4";
                  else var r85 = Aa[n39], n39 = r85 ? r85 : isNaN(n39) ? "4" : n39.substr(0, 1);
                  k4 = [k4, n39].join("");
                }
              } else k4 = "";
              k4 && g6.push(k4);
            }
            0 < g6.length && (f11 = g6);
            3 == d34.length && (d34 = d34[2], g6 = [], d34 = d34 ? d34.split(",") : g6, 0 < d34.length && (d34 = za[d34[0]]) && (a43.c[e59] = d34));
          }
          a43.c[e59] || (d34 = za[e59]) && (a43.c[e59] = d34);
          for (d34 = 0; d34 < f11.length; d34 += 1) a43.a.push(new G(e59, f11[d34]));
        }
      }
      ;
      function Ea(a43, b5) {
        this.c = a43;
        this.a = b5;
      }
      var Fa = { Arimo: true, Cousine: true, Tinos: true };
      Ea.prototype.load = function(a43) {
        var b5 = new B(), c27 = this.c, d34 = new ta(this.a.api, this.a.text), e59 = this.a.families;
        va(d34, e59);
        var f11 = new ya(e59);
        Da(f11);
        z2(c27, wa(d34), C(b5));
        E(b5, function() {
          a43(f11.a, f11.c, Fa);
        });
      };
      function Ga(a43, b5) {
        this.c = a43;
        this.a = b5;
      }
      Ga.prototype.load = function(a43) {
        var b5 = this.a.id, c27 = this.c.o;
        b5 ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b5 + ".js", function(b6) {
          if (b6) a43([]);
          else if (c27.Typekit && c27.Typekit.config && c27.Typekit.config.fn) {
            b6 = c27.Typekit.config.fn;
            for (var e59 = [], f11 = 0; f11 < b6.length; f11 += 2) for (var g6 = b6[f11], m5 = b6[f11 + 1], h5 = 0; h5 < m5.length; h5++) e59.push(new G(g6, m5[h5]));
            try {
              c27.Typekit.load({ events: false, classes: false, async: true });
            } catch (l18) {
            }
            a43(e59);
          }
        }, 2e3) : a43([]);
      };
      function Ha(a43, b5) {
        this.c = a43;
        this.f = b5;
        this.a = [];
      }
      Ha.prototype.load = function(a43) {
        var b5 = this.f.id, c27 = this.c.o, d34 = this;
        b5 ? (c27.__webfontfontdeckmodule__ || (c27.__webfontfontdeckmodule__ = {}), c27.__webfontfontdeckmodule__[b5] = function(b6, c28) {
          for (var g6 = 0, m5 = c28.fonts.length; g6 < m5; ++g6) {
            var h5 = c28.fonts[g6];
            d34.a.push(new G(h5.name, ga("font-weight:" + h5.weight + ";font-style:" + h5.style)));
          }
          a43(d34.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b5 + ".js", function(b6) {
          b6 && a43([]);
        })) : a43([]);
      };
      var Y2 = new oa(window);
      Y2.a.c.custom = function(a43, b5) {
        return new sa(b5, a43);
      };
      Y2.a.c.fontdeck = function(a43, b5) {
        return new Ha(b5, a43);
      };
      Y2.a.c.monotype = function(a43, b5) {
        return new ra(b5, a43);
      };
      Y2.a.c.typekit = function(a43, b5) {
        return new Ga(b5, a43);
      };
      Y2.a.c.google = function(a43, b5) {
        return new Ea(b5, a43);
      };
      var Z = { load: p4(Y2.load, Y2) };
      "function" === typeof define && define.amd ? define(function() {
        return Z;
      }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y2.load(window.WebFontConfig));
    })();
  }
});

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-U7JN65VL.js").then((m5) => m5);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e59) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e59) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style4, value, flags) {
    this.delegate.setStyle(el, style4, value, flags);
  }
  removeStyle(el, style4, flags) {
    this.delegate.removeStyle(el, style4, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c = { root: o, panel: r, header: t, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c2 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s2 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s2 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t2 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i2 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t2, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c3 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a2 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c3, xl: a2, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i3 = { color: "{navigation.item.icon.color}" };
var t3 = { root: o7, item: r7, separator: i3 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t4 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a3 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t4, title: e7, subtitle: a3 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a4 = { padding: "1rem", gap: "0.5rem" };
var i4 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t5 = { root: r10, content: o10, indicatorList: a4, indicator: i4, colorScheme: c4 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l2 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i5 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l2, option: e8, clearIcon: i5 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c5 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i6 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s3 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s4 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a6 = { root: o16, content: r16, icon: e13, footer: p };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a7 = { mobileIndent: "1rem" };
var t6 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c6 = { root: o17, list: i7, item: n3, submenu: a7, submenuIcon: t6, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t7 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l3 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c7 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var n4 = { fontWeight: "600" };
var a8 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i8 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t7, bodyCell: l3, footerCell: c7, columnFooter: n4, footer: a8, dropPoint: i8, columnResizer: s5, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p2, filter: m, paginatorTop: h, paginatorBottom: f3, colorScheme: v };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t8 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c8 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t8, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c9 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l4 = { margin: "0.5rem 0 0 0" };
var u2 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s6 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k2 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t9, selectYear: a9, group: i9, dayView: l4, weekDay: u2, date: s6, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p3, colorScheme: v2 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a10 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l5 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a10, title: d8, content: r21, footer: l5 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t10 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a11, title: d10, content: r24, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t11 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l7 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t11, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t12 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t12, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t13 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a12 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i10 = { root: r27, header: o27, content: e22, file: t13, fileList: a12, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a13 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i11, in: r28, on: a13 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t14 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c10 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a14 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s7 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l8 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t14, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s7, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l9 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i13 = { root: o31, input: l9 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a15 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i14 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a15, action: i14 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a16 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a17 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t15 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t15 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t16 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c11 = { root: o40, value: r39, range: t16, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t17 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l10 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i15, checkmark: t17, emptyMessage: e28, colorScheme: l10 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i16 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a18 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t18 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i16, overlay: a18, submenu: r41, submenuLabel: t18, submenuIcon: e29, separator: c12, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a19 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i17 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t19 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a19, submenuLabel: i17, separator: t19 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i18 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a20 = { borderColor: "{content.border.color}" };
var t20 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i18, item: n17, submenu: r43, separator: a20, mobileButton: t20 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l11 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s8 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l11, closeIcon: s8, outlined: c13, simple: a21, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a22 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l12 = { size: "1rem" };
var t21 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b3 = { root: e32, meters: r45, label: a22, labelMarker: o46, labelIcon: l12, labelList: t21 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l13 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a23 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l13, option: i19, optionGroup: e33, chip: a23, clearIcon: f7, emptyMessage: c14 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a24 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a24 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t22 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t22 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t23 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t24 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t24, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t25 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a25 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t25, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i20 = { indent: "1rem" };
var t26 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a26 = { root: o53, panel: r51, item: n23, submenu: i20, submenuIcon: t26 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a27 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a27, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a28 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a28 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t27 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i21 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s9 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s9 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l14 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i22 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c15 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a30 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l14, option: i22, optionGroup: e41, clearIcon: f8, checkmark: c15, emptyMessage: a30 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a31 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a31 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t28 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a32 = { root: o66, track: r64, range: n26, handle: t28, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t29 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a33 = { root: t29 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t30 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t31 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a34 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i23 = { root: o68, separator: r67, step: e43, stepHeader: t31, stepTitle: n28, stepNumber: a34, steppanels: c16, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t32 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c17 = { root: o69, separator: r68, itemLink: t32, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t33 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c18 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t33, itemIcon: e45, activeBar: c18 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t34 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a35 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i24 = { root: o71, tablist: r70, tab: t34, tabpanel: n31, navButton: c19, activeBar: e46, colorScheme: a35 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a36 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c20 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t35, tabPanel: n32, navButton: a36, colorScheme: c20 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a37 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a38 = { mobileIndent: "1rem" };
var t36 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c21 = { root: o76, list: i25, item: n34, submenu: a38, submenuIcon: t36, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t37 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t37 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a39 = { fontWeight: "500", fontSize: "1rem" };
var s10 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l15 = { size: "1rem" };
var t38 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s10, closeButton: c22, closeIcon: l15, colorScheme: t38 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c23 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c24 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t39 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c25 = { size: "2rem" };
var n37 = { margin: "0 0 0.5rem 0" };
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t39, loadingIcon: c25, filter: n37 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i26 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a40 = { root: o84, dropdown: r82, overlay: d32, tree: l16, emptyMessage: e55, chip: i26, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t40 = { fontWeight: "600" };
var c26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d33 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var l17 = { fontWeight: "600" };
var i27 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var a41 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s11 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var h4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k3 = { root: o85, header: r83, headerCell: e56, columnTitle: t40, row: c26, bodyCell: n38, footerCell: d33, columnFooter: l17, footer: i27, columnResizer: a41, resizeIndicator: g5, sortIcon: s11, loadingIcon: u6, nodeToggleButton: h4, paginatorTop: b4, paginatorBottom: f10, colorScheme: m3 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i28 = Object.getOwnPropertySymbols;
var t41 = Object.prototype.hasOwnProperty;
var a42 = Object.prototype.propertyIsEnumerable;
var o87 = (e59, m5, i29) => m5 in e59 ? r84(e59, m5, { enumerable: true, configurable: true, writable: true, value: i29 }) : e59[m5] = i29;
var Nr;
var Qr = (Nr = ((r85, e59) => {
  for (var m5 in e59 || (e59 = {})) t41.call(e59, m5) && o87(r85, m5, e59[m5]);
  if (i28) for (var m5 of i28(e59)) a42.call(e59, m5) && o87(r85, m5, e59[m5]);
  return r85;
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t3, button: e6, card: d3, carousel: t5, cascadeselect: f2, checkbox: e9, chip: s3, colorpicker: s4, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: k, dataview: c8, datepicker: k2, dialog: e17, divider: t10, dock: d9, drawer: e19, editor: l7, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l8, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t23, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t27, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t30, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k3, virtualscroller: e57 } })));

// src/app/core/guards/auth.guard.ts
var authGuard = async (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    await router.navigate(["auth/login"]);
    return false;
  }
};

// node_modules/@primeuix/styles/dist/avatar/index.mjs
var style2 = "\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('avatar.width');\n        height: dt('avatar.height');\n        font-size: dt('avatar.font.size');\n        background: dt('avatar.background');\n        color: dt('avatar.color');\n        border-radius: dt('avatar.border.radius');\n    }\n\n    .p-avatar-image {\n        background: transparent;\n    }\n\n    .p-avatar-circle {\n        border-radius: 50%;\n    }\n\n    .p-avatar-circle img {\n        border-radius: 50%;\n    }\n\n    .p-avatar-icon {\n        font-size: dt('avatar.icon.size');\n        width: dt('avatar.icon.size');\n        height: dt('avatar.icon.size');\n    }\n\n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-avatar-lg {\n        width: dt('avatar.lg.width');\n        height: dt('avatar.lg.width');\n        font-size: dt('avatar.lg.font.size');\n    }\n\n    .p-avatar-lg .p-avatar-icon {\n        font-size: dt('avatar.lg.icon.size');\n        width: dt('avatar.lg.icon.size');\n        height: dt('avatar.lg.icon.size');\n    }\n\n    .p-avatar-xl {\n        width: dt('avatar.xl.width');\n        height: dt('avatar.xl.width');\n        font-size: dt('avatar.xl.font.size');\n    }\n\n    .p-avatar-xl .p-avatar-icon {\n        font-size: dt('avatar.xl.icon.size');\n        width: dt('avatar.xl.icon.size');\n        height: dt('avatar.xl.icon.size');\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-inline-start: dt('avatar.group.offset');\n    }\n\n    .p-avatar-group .p-avatar {\n        border: 2px solid dt('avatar.group.border.color');\n    }\n\n    .p-avatar-group .p-avatar-lg + .p-avatar-lg {\n        margin-inline-start: dt('avatar.lg.group.offset');\n    }\n\n    .p-avatar-group .p-avatar-xl + .p-avatar-xl {\n        margin-inline-start: dt('avatar.xl.group.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var _c0 = ["*"];
function Avatar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.icon);
    \u0275\u0275property("ngClass", ctx_r0.cx("icon"));
  }
}
function Avatar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_2_span_0_Template, 1, 3, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const imageTemplate_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("ngIf", ctx_r0.icon)("ngIfElse", imageTemplate_r2);
  }
}
function Avatar_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 6);
    \u0275\u0275listener("error", function Avatar_ng_template_4_img_0_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel);
  }
}
function Avatar_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Avatar_ng_template_4_img_0_Template, 1, 2, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.image);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-avatar p-component", {
    "p-avatar-image": instance.image != null,
    "p-avatar-circle": instance.shape === "circle",
    "p-avatar-lg": instance.size === "large",
    "p-avatar-xl": instance.size === "xlarge"
  }],
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = class _AvatarStyle extends BaseStyle {
  name = "avatar";
  theme = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarStyle_BaseFactory;
    return function AvatarStyle_Factory(__ngFactoryType__) {
      return (\u0275AvatarStyle_BaseFactory || (\u0275AvatarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarStyle)))(__ngFactoryType__ || _AvatarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AvatarStyle,
    factory: _AvatarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarClasses;
(function(AvatarClasses2) {
  AvatarClasses2["root"] = "p-avatar";
  AvatarClasses2["label"] = "p-avatar-label";
  AvatarClasses2["icon"] = "p-avatar-icon";
})(AvatarClasses || (AvatarClasses = {}));
var Avatar = class _Avatar extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  _componentStyle = inject(AvatarStyle);
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Avatar_BaseFactory;
    return function Avatar_Factory(__ngFactoryType__) {
      return (\u0275Avatar_BaseFactory || (\u0275Avatar_BaseFactory = \u0275\u0275getInheritedFactory(_Avatar)))(__ngFactoryType__ || _Avatar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostVars: 5,
    hostBindings: function Avatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "avatar")("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([AvatarStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 2,
    consts: [["iconTemplate", ""], ["imageTemplate", ""], [3, "class", 4, "ngIf", "ngIfElse"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", "error", 4, "ngIf"], [3, "error", "src"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Avatar_span_1_Template, 2, 3, "span", 2)(2, Avatar_ng_template_2_Template, 1, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Avatar_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r4 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label)("ngIfElse", iconTemplate_r4);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <span [class]="cx('label')" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate> <img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-name]": '"avatar"',
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-labelledby]": "ariaLabelledBy"
      },
      providers: [AvatarStyle]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static \u0275fac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarModule,
    imports: [Avatar, SharedModule],
    exports: [Avatar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Avatar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [Avatar, SharedModule],
      exports: [Avatar, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/clients/components/client-switcher/client-switcher.component.ts
var _c02 = ["logoTemplate"];
function ClientSwitcherComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("alt", \u0275\u0275interpolate1("Logo of ", client_r2.name))("src", ctx_r2.getImageUrl(client_r2.id), \u0275\u0275sanitizeUrl);
  }
}
var ClientSwitcherComponent = class _ClientSwitcherComponent {
  messageService = inject(BroadcastMessageService);
  onClosed = output();
  DEBOUNCE_TIME = 300;
  logoTemplate;
  authDataService = inject(AuthDataService);
  utilityService = inject(UtilityService);
  clientDataService = inject(ClientDataService);
  clientsService = inject(ClientsService);
  cdr = inject(ChangeDetectorRef);
  apiUrlService = inject(ApiUrlService);
  display = signal(true);
  searchTerm = signal("");
  clients = signal([]);
  totalRecords = signal(0);
  selectedClient = signal(null);
  loading = signal(false);
  columns = [];
  searchSubject = new Subject();
  destroy$ = new Subject();
  ngOnInit() {
    this.columns = [
      { field: "logo", header: "Logo", cellTemplate: this.logoTemplate },
      { field: "name", header: "Name" }
    ];
    this.searchSubject.pipe(debounceTime(this.DEBOUNCE_TIME), takeUntil(this.destroy$)).subscribe(() => {
      this.loadClients({ first: 0, rows: DEFAULT_PAGE_SIZE });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSearch() {
    this.searchSubject.next(this.searchTerm());
  }
  loadClients(event) {
    const userProfile = this.authDataService.getUserProfile();
    if (!isDefined(userProfile?.owner?.id)) {
      console.warn("Owner ID not found");
      return;
    }
    const ownerId = userProfile.owner.id;
    const filters = __spreadProps(__spreadValues({}, event.filters), {
      state: {
        value: "active",
        operator: "="
      }
    });
    const searchTerm = this.searchTerm();
    if (isString(searchTerm) && searchTerm.length > 0) {
      filters["name"] = `*${searchTerm}*`;
    }
    this.loading.set(true);
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    const pageSize = isDefined(event.rows) ? event.rows : DEFAULT_PAGE_SIZE;
    this.clientsService.listClients(ownerId, event.first, pageSize, "name:asc", rqlFilter).subscribe({
      next: (data) => {
        if (isDefined(data) && hasProperty(data, "items") && hasProperty(data, "count")) {
          this.clients.set(data.items);
          this.totalRecords.set(data.count);
        } else {
          console.warn("Invalid response data structure");
        }
        this.loading.set(false);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Failed to load clients:", error);
        this.loading.set(false);
      }
    });
  }
  selectClient(client) {
    this.messageService.sendAction(ActionType.profile_changed, {
      clientId: client.id
    });
    this.clientsService.getClient(client.id).subscribe({
      next: (response) => {
        this.clientDataService.setSelectedClient(response);
      }
    });
    this.closeDialog();
  }
  closeDialog() {
    this.display.set(false);
    this.onClosed.emit();
  }
  openDialog() {
    this.display.set(true);
    this.loadClients({
      first: 0,
      rows: DEFAULT_PAGE_SIZE,
      globalFilter: this.searchTerm()
    });
  }
  getImageUrl(clientId) {
    return `${this.apiUrlService.getCurrentApiUrl()}/accounts/clients/${clientId}/logo`;
  }
  static \u0275fac = function ClientSwitcherComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSwitcherComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientSwitcherComponent, selectors: [["app-client-switcher"]], viewQuery: function ClientSwitcherComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoTemplate = _t.first);
    }
  }, outputs: { onClosed: "onClosed" }, decls: 11, vars: 13, consts: [["logoTemplate", ""], ["header", "Select Client", "styleClass", "w-[90vw] md:w-[50vw] sm:w-[75vw]", 3, "visibleChange", "onHide", "visible", "modal"], [1, "p-2"], ["pInputText", "", "placeholder", "Search", 1, "w-full", 3, "ngModelChange", "input", "ngModel"], [1, "pi", "pi-search"], [1, "h-[50vh]", "flex", "flex-col"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden"], ["styleClass", "table-height", 1, "h-full", "max-w-full", 3, "onLazyLoad", "rowSelect", "columns", "data", "pagination", "totalRecords", "lazy", "selectionMode", "hideHeader", "loading", "scrollable", "scrollHeight"], ["width", "50", 3, "src", "alt"]], template: function ClientSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-dialog", 1);
      \u0275\u0275listener("visibleChange", function ClientSwitcherComponent_Template_p_dialog_visibleChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.display.set($event));
      })("onHide", function ClientSwitcherComponent_Template_p_dialog_onHide_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "p-iconfield")(3, "input", 3);
      \u0275\u0275listener("ngModelChange", function ClientSwitcherComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.searchTerm.set($event);
        return \u0275\u0275resetView(ctx.onSearch());
      })("input", function ClientSwitcherComponent_Template_input_input_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearch());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "p-inputicon", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "br");
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "app-grid", 7);
      \u0275\u0275listener("onLazyLoad", function ClientSwitcherComponent_Template_app_grid_onLazyLoad_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadClients($event));
      })("rowSelect", function ClientSwitcherComponent_Template_app_grid_rowSelect_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectClient($event.data));
      });
      \u0275\u0275template(9, ClientSwitcherComponent_ng_template_9_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.display())("modal", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(5);
      \u0275\u0275property("columns", ctx.columns)("data", ctx.clients())("pagination", true)("totalRecords", ctx.totalRecords())("lazy", true)("selectionMode", "single")("hideHeader", true)("loading", ctx.loading())("scrollable", true)("scrollHeight", "flex");
    }
  }, dependencies: [
    DialogModule,
    Dialog,
    TableModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    InputIcon,
    IconField,
    InputTextModule,
    InputText,
    ButtonModule,
    GridComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSwitcherComponent, [{
    type: Component,
    args: [{ selector: "app-client-switcher", imports: [
      DialogModule,
      TableModule,
      FormsModule,
      InputIcon,
      IconField,
      InputTextModule,
      ButtonModule,
      GridComponent
    ], template: `<p-dialog
  header="Select Client"
  [visible]="display()"
  (visibleChange)="display.set($event)"
  (onHide)="closeDialog()"
  [modal]="true"
  styleClass="w-[90vw] md:w-[50vw] sm:w-[75vw]"
>
  <div class="p-2">
    <p-iconfield>
      <input
        pInputText
        [ngModel]="searchTerm()"
        (ngModelChange)="searchTerm.set($event); onSearch()"
        (input)="onSearch()"
        placeholder="Search"
        class="w-full"
      />
      <p-inputicon class="pi pi-search" />
    </p-iconfield>
    <br />

    <div class="h-[50vh] flex flex-col">
      <div class="flex-1 min-h-0 w-full overflow-hidden">
        <app-grid
          class="h-full max-w-full"
          styleClass="table-height"
          [columns]="columns"
          [data]="clients()"
          [pagination]="true"
          [totalRecords]="totalRecords()"
          [lazy]="true"
          (onLazyLoad)="loadClients($event)"
          [selectionMode]="'single'"
          [hideHeader]="true"
          [loading]="loading()"
          (rowSelect)="selectClient($event.data)"
          [scrollable]="true"
          [scrollHeight]="'flex'"
        >
          <ng-template #logoTemplate let-client>
            <img
              [src]="getImageUrl(client.id)"
              alt="Logo of {{ client.name }}"
              width="50"
            />
          </ng-template>
        </app-grid>
      </div>
    </div>
  </div>
</p-dialog>
` }]
  }], null, { logoTemplate: [{
    type: ViewChild,
    args: ["logoTemplate", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientSwitcherComponent, { className: "ClientSwitcherComponent", filePath: "src/app/features/clients/components/client-switcher/client-switcher.component.ts", lineNumber: 54 });
})();

// src/app/layouts/services/layout.service.ts
var LayoutService = class _LayoutService {
  sidebarVisibleSubject = new BehaviorSubject(true);
  fontFamilySubject = new BehaviorSubject("Ubuntu, sans-serif");
  fontFamily$ = this.fontFamilySubject.asObservable();
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();
  toggleSidebar(visible) {
    visible = visible ?? !this.sidebarVisibleSubject.value;
    this.sidebarVisibleSubject.next(visible);
  }
  setFontFamily(fontFamily) {
    this.fontFamilySubject.next(fontFamily);
    this.updateFontFamily(fontFamily);
  }
  updateFontFamily(fontFamily) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}:wght@400;500;700&display=swap`;
    const preloadLink = document.createElement("link");
    preloadLink.href = fontUrl;
    preloadLink.rel = "preload";
    preloadLink.as = "style";
    document.head.appendChild(preloadLink);
    if (!document.querySelector(`link[href="${fontUrl}"]`)) {
      const stylesheetLink = document.createElement("link");
      stylesheetLink.href = fontUrl;
      stylesheetLink.rel = "stylesheet";
      document.head.appendChild(stylesheetLink);
    }
    document.documentElement.style.setProperty("--font-family", fontFamily);
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/layouts/components/sidebar/menu-item/menu-item.component.ts
var _c03 = (a0, a1) => ({ "justify-center": a0, "justify-between": a1 });
var _c1 = (a0) => [a0, "!text-2xl flex items-center justify-center"];
function MenuItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 1);
    \u0275\u0275element(1, "use");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", (tmp_1_0 = ctx_r0.item()) == null ? null : tmp_1_0["label"]);
    \u0275\u0275advance();
    \u0275\u0275attribute("href", "assets/sprites/sprite.svg#" + ((tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0["data"] == null ? null : tmp_2_0["data"]["svgIcon"]));
  }
}
function MenuItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fa-icon", 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", (tmp_1_0 = ctx_r0.item()) == null ? null : tmp_1_0["data"] == null ? null : tmp_1_0["data"]["faIcon"])("pTooltip", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0["label"]);
  }
}
function MenuItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, (tmp_1_0 = ctx_r0.item()) == null ? null : tmp_1_0["icon"]))("pTooltip", (tmp_2_0 = ctx_r0.item()) == null ? null : tmp_2_0["label"]);
  }
}
function MenuItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r0.item()) == null ? null : tmp_1_0["label"]);
  }
}
var MenuItemComponent = class _MenuItemComponent {
  item = input();
  isCollapsed = input(false);
  static \u0275fac = function MenuItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuItemComponent, selectors: [["app-menu-item"]], inputs: { item: [1, "item"], isCollapsed: [1, "isCollapsed"] }, decls: 5, vars: 7, consts: [["routerLinkActive", "p-menuitem-link-active", "pRipple", "", 1, "flex", "items-center", "p-menu-item-link", 3, "routerLink", "ngClass"], [1, "custom-icon-svg", 3, "pTooltip"], [1, "!text-2xl", "flex", "items-center", "justify-center", 3, "icon", "pTooltip"], [3, "ngClass", "pTooltip"], [1, "ml-2"]], template: function MenuItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275conditionalCreate(1, MenuItemComponent_Conditional_1_Template, 2, 2, ":svg:svg", 1)(2, MenuItemComponent_Conditional_2_Template, 1, 2, "fa-icon", 2)(3, MenuItemComponent_Conditional_3_Template, 1, 4, "span", 3);
      \u0275\u0275conditionalCreate(4, MenuItemComponent_Conditional_4_Template, 2, 1, "span", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      \u0275\u0275property("routerLink", ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0["routerLink"]) ?? ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0["route"]))("ngClass", \u0275\u0275pureFunction2(4, _c03, ctx.isCollapsed(), !ctx.isCollapsed()));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0["data"] == null ? null : tmp_2_0["data"]["svgIcon"]) ? 1 : ((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0["data"] == null ? null : tmp_2_0["data"]["faIcon"]) ? 2 : ((tmp_2_0 = ctx.item()) == null ? null : tmp_2_0["icon"]) ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isCollapsed() ? 4 : -1);
    }
  }, dependencies: [RouterModule, RouterLink, RouterLinkActive, CommonModule, NgClass, TooltipModule, Tooltip, FontAwesomeModule, FaIconComponent], styles: ["\n\n.custom-icon-svg[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  fill: currentColor;\n  transition: fill 0.2s ease;\n}\n.p-menuitem-link-active[_nghost-%COMP%]   .custom-icon-svg[_ngcontent-%COMP%], .p-menuitem-link-active   [_nghost-%COMP%]   .custom-icon-svg[_ngcontent-%COMP%] {\n  fill: var(--primary-color);\n}\n/*# sourceMappingURL=menu-item.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemComponent, [{
    type: Component,
    args: [{ selector: "app-menu-item", imports: [RouterModule, CommonModule, TooltipModule, FontAwesomeModule], template: `<a
  [routerLink]="item()?.['routerLink'] ?? item()?.['route']"
  routerLinkActive="p-menuitem-link-active"
  pRipple
  class="flex items-center p-menu-item-link"
  [ngClass]="{
    'justify-center': isCollapsed(),
    'justify-between': !isCollapsed(),
  }"
>
  @if (item()?.['data']?.['svgIcon']) {
    <svg class="custom-icon-svg" [pTooltip]="item()?.['label']">
      <use
        [attr.href]="
          'assets/sprites/sprite.svg#' + item()?.['data']?.['svgIcon']
        "
      ></use>
    </svg>
  } @else if (item()?.['data']?.['faIcon']) {
    <!-- FontAwesome icon -->
    <fa-icon
      [icon]="item()?.['data']?.['faIcon']"
      class="!text-2xl flex items-center justify-center"
      [pTooltip]="item()?.['label']"
    ></fa-icon>
  } @else if (item()?.['icon']) {
    <!-- PrimeNG icon or string-based icon -->
    <span
      [ngClass]="[
        item()?.['icon'],
        '!text-2xl flex items-center justify-center',
      ]"
      [pTooltip]="item()?.['label']"
    ></span>
  }

  @if (!isCollapsed()) {
    <span class="ml-2">{{ item()?.['label'] }}</span>
  }
</a>
`, styles: ["/* src/app/layouts/components/sidebar/menu-item/menu-item.component.scss */\n.custom-icon-svg {\n  width: 1.5rem;\n  height: 1.5rem;\n  fill: currentColor;\n  transition: fill 0.2s ease;\n}\n:host-context(.p-menuitem-link-active) .custom-icon-svg {\n  fill: var(--primary-color);\n}\n/*# sourceMappingURL=menu-item.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuItemComponent, { className: "MenuItemComponent", filePath: "src/app/layouts/components/sidebar/menu-item/menu-item.component.ts", lineNumber: 14 });
})();

// node_modules/@primeuix/styles/dist/menu/index.mjs
var style3 = "\n    .p-menu {\n        background: dt('menu.background');\n        color: dt('menu.color');\n        border: 1px solid dt('menu.border.color');\n        border-radius: dt('menu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-menu-list {\n        margin: 0;\n        padding: dt('menu.list.padding');\n        outline: 0 none;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('menu.list.gap');\n    }\n\n    .p-menu-item-content {\n        transition:\n            background dt('menu.transition.duration'),\n            color dt('menu.transition.duration');\n        border-radius: dt('menu.item.border.radius');\n        color: dt('menu.item.color');\n    }\n\n    .p-menu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menu.item.padding');\n        gap: dt('menu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menu-item-label {\n        line-height: 1;\n    }\n\n    .p-menu-item-icon {\n        color: dt('menu.item.icon.color');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-content {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-overlay {\n        box-shadow: dt('menu.shadow');\n    }\n\n    .p-menu-submenu-label {\n        background: dt('menu.submenu.label.background');\n        padding: dt('menu.submenu.label.padding');\n        color: dt('menu.submenu.label.color');\n        font-weight: dt('menu.submenu.label.font.weight');\n    }\n\n    .p-menu-separator {\n        border-block-start: 1px solid dt('menu.separator.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c04 = ["pMenuItemContent", ""];
var _c12 = (a0) => ({
  $implicit: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  item: a0
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("target", ctx_r1.item.target);
    \u0275\u0275attribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(18, _c2))("target", ctx_r1.item.target)("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    \u0275\u0275attribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action")("title", ctx_r1.item.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_Template, 2, 12, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 21, "a", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c12, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.item.iconStyle);
    \u0275\u0275classMap(ctx_r1.cx("itemIcon", \u0275\u0275pureFunction1(4, _c3, ctx_r1.item)));
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.item.label), \u0275\u0275sanitizeHtml);
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_template_3_span_0_Template, 1, 6, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 3, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 2, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.item.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.item.badge);
  }
}
var _c4 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c122 = (a0) => ({
  value: "visible",
  params: a0
});
var _c13 = (a0, a1) => ({
  item: a0,
  id: a1
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("start"));
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(submenu_r3.label), \u0275\u0275sanitizeHtml);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 15)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = \u0275\u0275reference(3);
    const submenu_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("submenuLabel"));
    \u0275\u0275property("tooltipOptions", submenu_r3.tooltipOptions);
    \u0275\u0275attribute("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.submenuHeaderTemplate ?? ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c12, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      const item_r9 = ctx_r7.$implicit;
      const j_r10 = ctx_r7.index;
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const item_r9 = ctx_r7.$implicit;
    const j_r10 = ctx_r7.index;
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(item_r9.style);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(13, _c13, item_r9, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10))), item_r9 == null ? null : item_r9.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r9)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("tooltipOptions", item_r9.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r9.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r9.disabled))("aria-disabled", ctx_r1.disabled(item_r9.disabled))("id", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 16, "li", 17);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const submenu_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", item_r9.separator && (item_r9.visible !== false || submenu_r3.visible !== false));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.separator && item_r9.visible !== false && (item_r9.visible !== void 0 || submenu_r3.visible !== false));
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 10, "li", 11)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 9);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", submenu_r3.separator && submenu_r3.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !submenu_r3.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      const item_r13 = ctx_r11.$implicit;
      const i_r14 = ctx_r11.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const item_r13 = ctx_r11.$implicit;
    const i_r14 = ctx_r11.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(12, _c13, item_r13, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14))), item_r13 == null ? null : item_r13.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r13)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("ngStyle", item_r13.style)("tooltipOptions", item_r13.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r13.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r13.disabled))("aria-disabled", ctx_r1.disabled(item_r13.disabled))("id", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 15, "li", 19);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r13.separator && item_r13.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r13.separator && item_r13.visible !== false);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("end"));
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4, 0);
    \u0275\u0275listener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275template(2, Menu_div_0_div_2_Template, 2, 4, "div", 5);
    \u0275\u0275elementStart(3, "ul", 6, 1);
    \u0275\u0275listener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListKeyDown($event));
    });
    \u0275\u0275template(5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Menu_div_0_div_7_Template, 2, 4, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("@overlayAnimation", \u0275\u0275pureFunction1(24, _c122, \u0275\u0275pureFunction2(21, _c11, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    \u0275\u0275attribute("data-pc-name", "menu")("id", ctx_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("list"));
    \u0275\u0275attribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.popup ? "absolute" : "relative"
  })
};
var classes2 = {
  root: ({
    instance
  }) => ["p-menu p-component", {
    "p-menu-overlay": instance.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance,
    item,
    id
  }) => ["p-menu-item", {
    "p-focus": instance.focusedOptionId() && id === instance.focusedOptionId(),
    "p-disabled": instance.disabled(item.disabled)
  }, item.styleClass],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: ({
    item
  }) => ["p-menu-item-icon", item.icon, item.iconClass],
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  theme = style3;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (\u0275MenuStyle_BaseFactory || (\u0275MenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(PLATFORM_ID, 16), \u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent extends BaseComponent {
  item;
  itemTemplate;
  onMenuItemClick = new EventEmitter();
  menu;
  _componentStyle = inject(MenuStyle);
  constructor(menu) {
    super();
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  static \u0275fac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(\u0275\u0275directiveInject(forwardRef(() => Menu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate"
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 5,
    consts: [["itemContent", ""], ["htmlLabel", ""], [3, "click"], [4, "ngIf"], ["pRipple", "", 3, "class", "target", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", "style", 4, "ngIf"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", 4, "ngIf"], [1, "p-menu-item-label", 3, "innerHTML"], [3, "styleClass", "value"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onItemClick($event, ctx.item));
        });
        \u0275\u0275template(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("itemContent"));
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.itemTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, BadgeModule, Badge, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule],
      template: ` <div [class]="cx('itemContent')" (click)="onItemClick($event, item)" [attr.data-pc-section]="'content'">
        <ng-container *ngIf="!itemTemplate">
            <a
                *ngIf="!item?.routerLink"
                [attr.title]="item.title"
                [attr.href]="item.url || null"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.data-pc-section]="'action'"
                [class]="cx('itemLink')"
                [target]="item.target"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
            <a
                *ngIf="item?.routerLink"
                [routerLink]="item.routerLink"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.data-pc-section]="'action'"
                [attr.title]="item.title"
                [queryParams]="item.queryParams"
                routerLinkActive="p-menu-item-link-active"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                [class]="cx('itemLink')"
                [target]="item.target"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
        </ng-container>

        <ng-container *ngIf="itemTemplate">
            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
        </ng-container>

        <ng-template #itemContent>
            <span [class]="cx('itemIcon', { item })" *ngIf="item.icon" [style]="item.iconStyle"></span>
            <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
            <ng-template #htmlLabel><span class="p-menu-item-label" [innerHTML]="sanitizeHtml(item.label)"></span></ng-template>
            <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" />
        </ng-template>
    </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }, ...ngDevMode ? [{
    debugName: "focusedOptionId"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "selectedOptionIndex"
  }] : []);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  _componentStyle = inject(MenuStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || s("pn_id_");
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.attrSelector && this.container.setAttribute(this.attrSelector, "");
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          bt(this.listViewChild.nativeElement);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) I(this.container, this.target);
    else D(this.container, this.target);
  }
  appendOverlay() {
    DomHandler.appendOverlay(this.container, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !Yt()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      !this.popup && this.changeFocusedOptionIndex(0);
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          bt(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      bt(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = z(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && z(element, 'a[data-pc-section="action"]');
    this.popup && bt(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
    super.ngOnDestroy();
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static \u0275fac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenuHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c9, 5);
        \u0275\u0275viewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "class", "style", "ngStyle", "click", 4, "ngIf"], [3, "click", "ngStyle"], [3, "class", 4, "ngIf"], ["role", "menu", 3, "focus", "blur", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "class", 4, "ngIf"], ["pTooltip", "", "role", "none", 3, "class", "tooltipOptions", 4, "ngIf"], ["role", "separator"], ["pTooltip", "", "role", "none", 3, "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "style", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "tooltipOptions"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "ngStyle", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "ngStyle", "tooltipOptions"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Menu_div_0_Template, 8, 26, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, BadgeModule, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule],
      template: `
        <div
            #container
            [class]="cn(cx('root'), styleClass)"
            [style]="sx('root')"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
        >
            <div *ngIf="startTemplate ?? _startTemplate" [class]="cx('start')" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
            </div>
            <ul
                #list
                [class]="cx('list')"
                role="menu"
                [attr.id]="id + '_list'"
                [attr.tabindex]="getTabIndexValue()"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li [class]="cx('separator')" *ngIf="submenu.separator && submenu.visible !== false" role="separator"></li>
                    <li [class]="cx('submenuLabel')" [attr.data-automationid]="submenu.automationId" *ngIf="!submenu.separator" pTooltip [tooltipOptions]="submenu.tooltipOptions" role="none" [attr.id]="menuitemId(submenu, id, i)">
                        <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                            <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                            <ng-template #htmlSubmenuLabel><span [innerHTML]="sanitizeHtml(submenu.label)"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li [class]="cx('separator')" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator"></li>
                        <li
                            [class]="cn(cx('item', { item, id: menuitemId(item, id, i, j) }), item?.styleClass)"
                            *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [style]="item.style"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li [class]="cx('separator')" *ngIf="item.separator && item.visible !== false" role="separator"></li>
                    <li
                        [class]="cn(cx('item', { item, id: menuitemId(item, id, i) }), item?.styleClass)"
                        *ngIf="!item.separator && item.visible !== false"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate ?? _itemTemplate"
                        [ngStyle]="item.style"
                        (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate ?? _endTemplate" [class]="cx('end')" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static \u0275fac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();

// src/app/layouts/components/sidebar/toggle-button/toggle-button.component.ts
var _c05 = (a0, a1) => ({ "text-right": a0, "text-center": a1 });
var _c14 = (a0, a1) => ({ "pi-chevron-left": a0, "pi-chevron-right": a1 });
var ToggleButtonComponent = class _ToggleButtonComponent {
  isCollapsed = input(false);
  toggleChange = output();
  onToggle() {
    this.toggleChange.emit();
  }
  static \u0275fac = function ToggleButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToggleButtonComponent, selectors: [["app-toggle-button"]], inputs: { isCollapsed: [1, "isCollapsed"] }, outputs: { toggleChange: "toggleChange" }, decls: 2, vars: 8, consts: [[1, "block", "p-2", "w-full", "text-nav-client-font-color", 3, "click", "ngClass"], [1, "pi", 3, "ngClass"]], template: function ToggleButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275listener("click", function ToggleButtonComponent_Template_span_click_0_listener() {
        return ctx.onToggle();
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c05, !ctx.isCollapsed(), ctx.isCollapsed()));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c14, !ctx.isCollapsed(), ctx.isCollapsed()));
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonComponent, [{
    type: Component,
    args: [{ selector: "app-toggle-button", imports: [CommonModule], template: `<span
  (click)="onToggle()"
  class="block p-2 w-full text-nav-client-font-color"
  [ngClass]="{
    'text-right': !isCollapsed(),
    'text-center': isCollapsed(),
  }"
>
  <i
    class="pi"
    [ngClass]="{
      'pi-chevron-left': !isCollapsed(),
      'pi-chevron-right': isCollapsed(),
    }"
  ></i>
</span>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleButtonComponent, { className: "ToggleButtonComponent", filePath: "src/app/layouts/components/sidebar/toggle-button/toggle-button.component.ts", lineNumber: 10 });
})();

// src/app/layouts/components/sidebar/user-profile/user-profile.component.ts
function UserProfileComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r0.userProfile()) == null ? null : tmp_2_0.name == null ? null : tmp_2_0.name.charAt(0), " ");
  }
}
function UserProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, UserProfileComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.userProfile() ? 1 : -1);
  }
}
function UserProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.clientLogo(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.clientName(), " ");
  }
}
var UserProfileComponent = class _UserProfileComponent {
  isCollapsed = input(false);
  userProfile = input();
  clientLogo = input("");
  clientName = input("");
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], inputs: { isCollapsed: [1, "isCollapsed"], userProfile: [1, "userProfile"], clientLogo: [1, "clientLogo"], clientName: [1, "clientName"] }, decls: 2, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "gap-1", "px-2", "py-2", "user-profile"], [1, "w-10", "h-10", "rounded-full", "bg-gray-500", "text-white", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "justify-center", "gap-1", "sidebar-brand"], ["alt", "", 3, "src"], [1, "user-profile", "text-center", "text-ellipsis", "overflow-hidden", "p-2"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, UserProfileComponent_Conditional_0_Template, 2, 1, "div", 0)(1, UserProfileComponent_Conditional_1_Template, 4, 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isCollapsed() ? 0 : 1);
    }
  }, styles: ["\n\n.user-profile[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: var(--navigation-client-background-color);\n  color: var(--navigation-client-font-color);\n  border-bottom-style: solid;\n  border-bottom-width: var(--navigation-client-border-width);\n  border-color: var(--navigation-client-border-color);\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  color: var(--navigation-font-color);\n  border-color: var(--navigation-border-color);\n  border-width: var(--navigation-border-width);\n  background-color: var(--navigation-logo-background-color);\n  padding: var(--padding) 0;\n}\n.sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 120px;\n}\n/*# sourceMappingURL=user-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", imports: [], template: '@if (isCollapsed()) {\n  <div class="flex items-center justify-center gap-1 px-2 py-2 user-profile">\n    @if (userProfile()) {\n      <div\n        class="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center"\n      >\n        {{ userProfile()?.name?.charAt(0) }}\n      </div>\n    }\n  </div>\n} @else {\n  <span class="flex items-center justify-center gap-1 sidebar-brand">\n    <img [src]="clientLogo()" alt="" />\n  </span>\n  <div class="user-profile text-center text-ellipsis overflow-hidden p-2">\n    {{ clientName() }}\n  </div>\n}\n', styles: ["/* src/app/layouts/components/sidebar/user-profile/user-profile.component.scss */\n.user-profile {\n  white-space: nowrap;\n  background: var(--navigation-client-background-color);\n  color: var(--navigation-client-font-color);\n  border-bottom-style: solid;\n  border-bottom-width: var(--navigation-client-border-width);\n  border-color: var(--navigation-client-border-color);\n}\n.sidebar-brand {\n  color: var(--navigation-font-color);\n  border-color: var(--navigation-border-color);\n  border-width: var(--navigation-border-width);\n  background-color: var(--navigation-logo-background-color);\n  padding: var(--padding) 0;\n}\n.sidebar-brand img {\n  width: auto;\n  max-width: 120px;\n}\n/*# sourceMappingURL=user-profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "src/app/layouts/components/sidebar/user-profile/user-profile.component.ts", lineNumber: 10 });
})();

// src/app/core/services/navigation.service.ts
var PAGE_ICONS = {
  overview: "pi pi-car",
  dashboards: "pi pi-chart-line",
  alerts: "pi pi-volume-up",
  videos: "pi pi-video",
  replay: "pi pi-history",
  mapsearch: "pi pi-map",
  reporting: "pi pi-chart-pie",
  admin: "pi pi-cog",
  demo: "pi pi-palette",
  system: "pi pi-heart-pulse",
  external: "pi pi-globe",
  geofence: "pi pi-draw-polygon",
  assetperformance: "pi pi-medal",
  devicehealth: "pi pi-heart-pulse",
  settings: "pi pi-sliders",
  maps: "pi pi-map-marker",
  notifications: "pi pi-bell"
};
var NavigationService = class _NavigationService {
  clientDataService = inject(ClientDataService);
  authDataService = inject(AuthDataService);
  router = inject(Router);
  activeRoot = new BehaviorSubject("overview");
  activeRoot$ = this.activeRoot.asObservable();
  pageHistory = signal({});
  urlHistory = signal([]);
  isMobile = signal(false);
  // Computed signals for reactive navigation
  navigationItems = computed(() => this.computeNavigationItems());
  navigationGroups = computed(() => this.computeNavigationGroups());
  previousUrl = computed(() => {
    const history = this.urlHistory();
    return history[history.length - 2] || "";
  });
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed()).subscribe((event) => {
      if (event.urlAfterRedirects.indexOf("redirecting=") === -1) {
        this.urlHistory.update((history) => [
          ...history,
          event.urlAfterRedirects
        ]);
      }
      this.setPath(event.urlAfterRedirects || event.url);
    });
    this.setPath(this.router.url);
    this.checkMobileState();
    window.addEventListener("resize", () => this.checkMobileState());
  }
  checkMobileState() {
    this.isMobile.set(window.innerWidth < 768);
  }
  setPath(url) {
    const pages = this.getPages();
    const root = Object.keys(pages).find((x) => url.indexOf(x) === 1);
    if (root != null) {
      const page = pages[root];
      this.pageHistory.update((history) => __spreadProps(__spreadValues({}, history), { [root]: url }));
      const children = page.children ?? (page.getChildren ? page.getChildren(this.getFeatures()) : {});
      const child = Object.keys(children).find((x) => url.includes(x));
      this.activeRoot.next(child != null ? `${root}/${child}` : root);
    }
  }
  getFeatures() {
    const features = this.clientDataService.getFeaturesSignal();
    return features();
  }
  getPages() {
    const user = this.authDataService.getUserProfile();
    return {
      overview: {
        route: "position",
        name: (features) => {
          return isEmpty(features.page?.["overview"]?.name) ? "Position" : features.page?.["overview"]?.name ?? "Position";
        },
        icon: (features) => {
          const iconName = features.page?.["overview"]?.icon;
          if (iconName != null && iconName.trim().length > 0 && iconName in PAGE_ICONS) {
            return PAGE_ICONS[iconName];
          }
          return PAGE_ICONS["overview"];
        },
        group: (features) => {
          return isEmpty(features.page?.["overview"]?.group) ? "status" : features.page?.["overview"]?.group ?? "status";
        },
        order: (features) => {
          return features.page?.["overview"]?.order ?? 0;
        },
        visible: (features) => {
          return features.page?.["overview"]?.enabled ?? true;
        }
      },
      geofences: {
        route: "overview?geofence=true",
        name: "Geofences",
        icon: PAGE_ICONS["geofence"],
        visible: (features, isMobile) => {
          return (features.page?.["geofences"]?.enabled ?? false) && !(isMobile ?? false);
        },
        group: (features) => {
          return isEmpty(features.page?.["geofences"]?.group) ? "status" : features.page?.["geofences"]?.group ?? "status";
        },
        order: (features) => {
          return features.page?.["geofences"]?.order ?? 0;
        }
      },
      alerts: {
        name: "Alerts",
        icon: PAGE_ICONS["alerts"],
        visible: (features) => {
          return features.page?.["alerts"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["alerts"]?.group) ? "status" : features.page?.["alerts"]?.group ?? "status";
        },
        order: (features) => {
          return features.page?.["alerts"]?.order ?? 0;
        }
      },
      videos: {
        route: "media",
        name: "Media",
        icon: PAGE_ICONS["videos"],
        visible: (features) => {
          return features.page?.["videos"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["videos"]?.group) ? "status" : features.page?.["videos"]?.group ?? "status";
        },
        order: (features) => {
          return features.page?.["videos"]?.order ?? 0;
        }
      },
      dashboards: {
        name: "Dashboards",
        icon: PAGE_ICONS["dashboards"],
        visible: (features) => {
          return features.page?.["dashboards"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["dashboards"]?.group) ? "status" : features.page?.["dashboards"]?.group ?? "status";
        },
        order: (features) => {
          return features.page?.["dashboards"]?.order ?? 0;
        }
      },
      external: {
        name: "External Apps",
        icon: PAGE_ICONS["external"],
        group: "status",
        visible: (features) => {
          const externalChildren = this.getExternalApplicationChildren(features);
          return (features.page?.["external"]?.enabled ?? false) && Object.keys(externalChildren).length > 0;
        },
        getChildren: (features) => {
          return this.getExternalApplicationChildren(features);
        }
      },
      history: {
        name: "History",
        icon: PAGE_ICONS["replay"],
        visible: (features) => {
          return features.page?.["replay"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["replay"]?.group) ? "history" : features.page?.["replay"]?.group ?? "history";
        },
        order: (features) => {
          return features.page?.["replay"]?.order ?? 0;
        }
      },
      mapsearch: {
        name: "Map Search",
        icon: PAGE_ICONS["mapsearch"],
        visible: (features) => {
          return features.page?.["mapsearch"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["mapsearch"]?.group) ? "history" : features.page?.["mapsearch"]?.group ?? "history";
        },
        order: (features) => {
          return features.page?.["mapsearch"]?.order ?? 0;
        }
      },
      assetperformance: {
        name: (features) => {
          return features.page?.["assetperformance"]?.name ?? "Asset Performance";
        },
        icon: (features) => {
          const iconName = features.page?.["assetperformance"]?.icon;
          if (iconName != null && iconName.trim().length > 0 && iconName in PAGE_ICONS) {
            return PAGE_ICONS[iconName];
          }
          return PAGE_ICONS["assetperformance"];
        },
        visible: (features) => {
          return features.page?.["assetperformance"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["assetperformance"]?.group) ? "history" : features.page?.["assetperformance"]?.group ?? "history";
        },
        order: (features) => {
          return features.page?.["assetperformance"]?.order ?? 0;
        }
      },
      reporting: {
        name: "Reporting",
        icon: PAGE_ICONS["reporting"],
        visible: (features) => {
          return features.page?.["reporting"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["reporting"]?.group) ? "history" : features.page?.["reporting"]?.group ?? "history";
        },
        order: (features) => {
          return features.page?.["reporting"]?.order ?? 0;
        }
      },
      admin: {
        name: "Administration",
        icon: PAGE_ICONS["admin"],
        visible: () => {
          return user?.owner.type !== "client";
        },
        group: (features) => {
          return isEmpty(features.page?.["admin"]?.group) ? "admin" : features.page?.["admin"]?.group ?? "admin";
        },
        order: (features) => {
          return features.page?.["admin"]?.order ?? 0;
        }
      },
      devicehealth: {
        name: "Device Health",
        icon: PAGE_ICONS["devicehealth"],
        visible: (features) => {
          return features.page?.["devicehealth"]?.enabled ?? false;
        },
        group: (features) => {
          return isEmpty(features.page?.["devicehealth"]?.group) ? "admin" : features.page?.["devicehealth"]?.group ?? "admin";
        },
        order: (features) => {
          return features.page?.["devicehealth"]?.order ?? 0;
        }
      },
      system: {
        name: "System",
        icon: PAGE_ICONS["system"],
        group: "system",
        visible: () => {
          return Boolean(user?.owner.type === "system");
        }
      },
      // User-related pages
      user: {
        name: "User",
        children: {
          profile: {
            name: "Profile",
            route: "user/profile"
          },
          notifications: {
            name: "Notifications",
            route: "user/notifications"
          }
        }
      },
      // External pages
      login: {
        external: true,
        name: "Login"
      },
      "client-select": {
        external: true,
        name: "Client Select"
      },
      welcome: {
        external: true,
        name: "Welcome"
      }
    };
  }
  getExternalApplicationChildren(features) {
    const externalTabs = features.page?.["external"]?.tabs ?? "";
    if (!externalTabs)
      return {};
    const children = {};
    externalTabs.split("\n").forEach((tab) => {
      if (!tab.trim())
        return;
      const [info, url] = tab.split(":");
      const [name, icon, section] = info.split("|");
      if (!section) {
        const tabName = name.trim().toLowerCase().replace(/\s+/g, "-");
        const id = `app-${tabName}`;
        const iconIdentifier = icon?.trim();
        let finalIcon = PAGE_ICONS["external"];
        if (iconIdentifier) {
          if (iconIdentifier.includes(" ")) {
            finalIcon = iconIdentifier;
          } else if (iconIdentifier in PAGE_ICONS) {
            finalIcon = PAGE_ICONS[iconIdentifier];
          }
        }
        children[tabName] = {
          id,
          name: name.trim(),
          icon: finalIcon,
          group: "",
          iframe: true,
          // Mark as iframe
          route: `/external/${id}`,
          externalUrl: url?.trim() ?? "#"
        };
      }
    });
    return children;
  }
  // Computed methods for reactive navigation
  computeNavigationItems(group) {
    const pages = this.getPages();
    const features = this.clientDataService.getFeaturesSignal()();
    const isMobile = this.isMobile();
    const items = [];
    const externalTabs = features.page?.["external"]?.tabs ?? "";
    if (externalTabs && (features.page?.["external"]?.enabled ?? false)) {
      externalTabs.split("\n").forEach((tab) => {
        if (!tab.trim())
          return;
        const separatorIndex = tab.indexOf(":");
        if (separatorIndex === -1) {
          console.warn(`Invalid external tab format (missing ':'): ${tab}`);
          return;
        }
        const url = tab.substring(separatorIndex + 1).trim();
        const info = tab.substring(0, separatorIndex).trim();
        const [name, icon, section, order] = info.split("|");
        if (section?.trim()) {
          const tabName = name?.toLowerCase()?.replace(/ /g, "-") ?? "tab";
          const id = `app-${tabName}`;
          const iconIdentifier = icon?.trim();
          let finalIcon = PAGE_ICONS["external"];
          if (iconIdentifier) {
            if (iconIdentifier.includes(" ")) {
              finalIcon = iconIdentifier;
            } else if (iconIdentifier in PAGE_ICONS) {
              finalIcon = PAGE_ICONS[iconIdentifier];
            }
          }
          items.push({
            id,
            external: true,
            iframe: true,
            icon: finalIcon,
            name: name?.trim() || "External Tab",
            group: section.trim(),
            order: parseInt(order?.trim() || "999", 10),
            route: `/external/${id}`,
            externalUrl: url?.trim()
          });
        }
      });
    }
    Object.keys(pages).forEach((key) => {
      const page = pages[key];
      if (!page.visible || page.visible(features, isMobile)) {
        const pageGroup = this.getPageGroup(page, features);
        if (group == null || pageGroup === group) {
          const children = page.children ?? (page.getChildren ? page.getChildren(features) : {});
          const navItem = {
            id: page.route ?? key,
            external: page.external ?? false,
            iframe: page.iframe ?? false,
            icon: typeof page.icon === "function" ? page.icon(features) : page.icon ?? PAGE_ICONS[key] ?? PAGE_ICONS["overview"],
            name: typeof page.name === "function" ? page.name(features) : page.name,
            group: pageGroup,
            order: typeof page.order === "function" ? page.order(features) : page.order ?? 999,
            route: page.route ?? key,
            children: Object.keys(children).length > 0 ? Object.keys(children).map((childKey) => ({
              id: children[childKey].id ?? `${key}/${childKey}`,
              external: children[childKey].external ?? false,
              iframe: children[childKey].iframe ?? false,
              icon: typeof children[childKey].icon === "function" ? children[childKey].icon(features) : children[childKey].icon ?? PAGE_ICONS["external"],
              name: typeof children[childKey].name === "function" ? children[childKey].name(features) : children[childKey].name,
              group: typeof children[childKey].group === "function" ? children[childKey].group(features) : children[childKey].group ?? pageGroup,
              order: typeof children[childKey].order === "function" ? children[childKey].order(features) : children[childKey].order ?? 999,
              route: children[childKey].route,
              externalUrl: children[childKey].externalUrl
            })) : void 0
          };
          if (isDefined(navItem.route) && navItem.route.startsWith("http")) {
            navItem.externalUrl = navItem.route;
            navItem.id = `app-${navItem.name.toLowerCase().replace(/ /g, "-")}`;
            navItem.route = `/external/${navItem.id}`;
            navItem.external = true;
            navItem.iframe = true;
          }
          items.push(navItem);
        }
      }
    });
    return items.sort((a43, b5) => a43.order - b5.order);
  }
  computeNavigationGroups() {
    const items = this.computeNavigationItems();
    const groupIds = Array.from(new Set(items.map((item) => item.group).filter(Boolean)));
    const allGroups = groupIds.map((groupId) => ({
      id: groupId,
      name: this.getGroupDisplayName(groupId),
      items: items.filter((item) => item.group === groupId).sort((a43, b5) => a43.order - b5.order)
    }));
    const regularGroups = [];
    const externalGroups = [];
    for (const group of allGroups) {
      if (group.items.every((item) => item.external)) {
        externalGroups.push(group);
      } else {
        regularGroups.push(group);
      }
    }
    return [...regularGroups, ...externalGroups];
  }
  // Public methods that use computed signals
  getNavigationGroups() {
    return this.navigationGroups();
  }
  getGroupDisplayName(groupId) {
    const groupNames = {
      status: "Recent Activity",
      history: "Historical Activity",
      admin: "Configuration",
      system: "System"
    };
    return groupNames[groupId] || groupId;
  }
  getNavigationItems(group) {
    return this.computeNavigationItems(group);
  }
  getPageGroup(page, features) {
    if (typeof page.group === "function") {
      return page.group(features).toLowerCase();
    }
    return (page.group ?? "").toLowerCase();
  }
  async navigateToPage(page, child) {
    const pages = this.getPages();
    const validPages = [
      ...Object.keys(pages),
      ...Object.values(pages).filter((p4) => Boolean(p4.route)).map((p4) => p4.route)
    ];
    if (!validPages.includes(page)) {
      console.error(`"${page}" is not a valid page identifier. Have you added it to the NavigationService?`);
      return false;
    }
    const childPath = child?.trim() ?? "";
    const path = childPath ? `${page}/${childPath}` : page;
    const history = this.pageHistory();
    const url = history[path] ?? `/${path}`;
    const errorSuffix = childPath ? `, ${childPath}` : "";
    try {
      return await this.router.navigateByUrl(url);
    } catch (err) {
      console.error(`navigateToPage('${page}${errorSuffix}')[1]`, err);
      return this.handleNavigationFallback(page, url, errorSuffix);
    }
  }
  async handleNavigationFallback(page, url, errorSuffix) {
    try {
      return await this.router.navigateByUrl(url);
    } catch (err2) {
      console.error(`navigateToPage('${page}${errorSuffix}')[2]`, err2);
      if (url !== `/${page}`) {
        return this.router.navigateByUrl(`/${page}`);
      } else {
        throw err2;
      }
    }
  }
  getDefaultRoute() {
    const items = this.getNavigationItems();
    return items.length > 0 ? items[0].route ?? "/user/profile" : "/user/profile";
  }
  getNavigationItemById(id) {
    const allItems = this.flattenNavigationItems(this.navigationItems());
    return allItems.find((item) => item.id === id);
  }
  flattenNavigationItems(items) {
    return items.flatMap((item) => [
      item,
      ...item.children ? this.flattenNavigationItems(item.children) : []
    ]);
  }
  static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavigationService, factory: _NavigationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/layouts/components/sidebar/sidebar.component.ts
var _c06 = (a0, a1, a210, a310) => ({ "w-16": a0, "w-aside": a1, "w-1/2": a210, open: a310 });
function SidebarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "i", 8);
    \u0275\u0275listener("click", function SidebarComponent_Conditional_0_Template_i_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSidebar());
    });
    \u0275\u0275elementEnd()();
  }
}
function SidebarComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r4.label), " ");
  }
}
function SidebarComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarComponent_ng_template_4_Conditional_0_Template, 3, 3, "span", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isCollapsed() ? 0 : -1);
  }
}
function SidebarComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu-item", 10);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r5)("isCollapsed", ctx_r2.isCollapsed());
  }
}
function SidebarComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r6.label), " ");
  }
}
function SidebarComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarComponent_ng_template_9_Conditional_0_Template, 3, 3, "span", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.isCollapsed() ? 0 : -1);
  }
}
function SidebarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu-item", 10);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r7)("isCollapsed", ctx_r2.isCollapsed());
  }
}
function SidebarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-client-switcher", 11);
    \u0275\u0275listener("onClosed", function SidebarComponent_Conditional_14_Template_app_client_switcher_onClosed_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSwitchClient());
    });
    \u0275\u0275elementEnd();
  }
}
var SidebarComponent = class _SidebarComponent {
  messageService = inject(BroadcastMessageService);
  authDataService = inject(AuthDataService);
  clientsService = inject(ClientsService);
  utilityService = inject(UtilityService);
  clientDataService = inject(ClientDataService);
  layoutService = inject(LayoutService);
  localStorageService = inject(LocalStorageService);
  navigationService = inject(NavigationService);
  SIDEBAR_STATE_KEY = "sidebar-main-visible";
  topMenuItems = signal([]);
  bottomMenuItems = [];
  isCollapsed = signal(false);
  userProfileSignal = this.authDataService.getUserProfileSignal();
  selectedClientSignal = this.clientDataService.getSelectedClientSignal();
  clientLogo = signal(null);
  isSwitchClient = signal(false);
  isMobile = signal(false);
  isSidebarOpen = signal(false);
  // Computed menu items based on navigation service
  dynamicMenuItems = computed(() => {
    const groups = this.navigationService.getNavigationGroups();
    return this.convertNavigationGroupsToMenuItems(groups);
  });
  constructor() {
    this.reactToSelectedClientChanges();
    this.checkScreenSize();
    effect(() => {
      this.topMenuItems.set(this.dynamicMenuItems());
    });
  }
  onResize() {
    this.checkScreenSize();
  }
  getIconForItem(item) {
    const defaultPrimeIcon = "pi pi-circle";
    const defaultFontAwesomeIcon = "fas fa-question-circle";
    if (item.icon == null) {
      return defaultPrimeIcon;
    }
    if (typeof item.icon === "string") {
      return item.icon;
    }
    if (typeof item.icon === "object") {
      const faIcon = item.icon;
      if (faIcon.prefix && faIcon.iconName) {
        return `${faIcon.prefix} fa-${faIcon.iconName}`;
      }
      return defaultFontAwesomeIcon;
    }
    return defaultPrimeIcon;
  }
  convertNavigationGroupsToMenuItems(groups) {
    const menuItems = [];
    groups.forEach((group) => {
      if (menuItems.length > 0) {
      }
      menuItems.push({
        label: group.name,
        // Use group.name for the label
        items: group.items.map((item) => this.convertNavigationItemToMenuItem(item))
        // `separator` is not a direct property of NavigationGroup based on your definition
        // If a group itself should be a separator, that's a different structure.
      });
    });
    return menuItems;
  }
  convertNavigationItemToMenuItem(item) {
    const menuItem = {
      label: item.name,
      // Use item.name for the label
      icon: this.getIconForItem(item),
      // This remains as a string for general use
      routerLink: item.route,
      // Store the original IconDefinition if it exists in the 'data' property
      data: {
        faIcon: typeof item.icon === "object" && item.icon !== null ? item.icon : void 0,
        svgIcon: typeof item.icon === "string" && item.icon.startsWith("svg:") ? item.icon.substring(4) : void 0
      }
      // command: item.command, // Add if you have 'command' in NavigationItem
      // url: item.external && item.route ? item.route : undefined, // For external links
      // target: item.external ? '_blank' : undefined, // Open external links in new tab
      // visible: item.visible, // Add if you have 'visible' in NavigationItem
      // disabled: item.disabled, // Add if you have 'disabled' in NavigationItem
    };
    if (item.children && item.children.length > 0) {
      menuItem.items = item.children.map((child) => this.convertNavigationItemToMenuItem(child));
    }
    return menuItem;
  }
  setCollapsedFromLocalStorage() {
    const storedValue = this.localStorageService.getItem(this.SIDEBAR_STATE_KEY);
    const isSidebarVisible = storedValue ?? true;
    this.isCollapsed.set(!isSidebarVisible);
    this.layoutService.toggleSidebar(isSidebarVisible);
    if (this.isMobile()) {
      this.isSidebarOpen.set(isSidebarVisible);
      this.isCollapsed.set(false);
    }
  }
  checkScreenSize() {
    this.isMobile.set(window.innerWidth < MOBILE_BREAKPOINT);
    this.setCollapsedFromLocalStorage();
  }
  reactToSelectedClientChanges() {
    effect(() => {
      const selectedClient = this.clientDataService.getSelectedClient();
      if (isDefined(selectedClient?.id)) {
        this.clientsService.getClientLogo(selectedClient.id).subscribe({
          next: (response) => {
            const blob = new Blob([response], {
              type: "application/octet-stream"
            });
            this.utilityService.convertBlobToBase64(blob).then((base64) => {
              this.clientLogo.set(base64);
            }).catch(() => {
            });
          }
        });
      }
    });
  }
  createUserMenuItem() {
    const userProfile = this.userProfileSignal();
    return {
      label: isDefined(userProfile) && hasProperty(userProfile, "name") && isString(userProfile.name) ? userProfile.name : "User",
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
          route: "/user/profile"
        },
        {
          label: "Notifications",
          icon: "pi pi-bell",
          route: "/user/notifications"
        }
      ]
    };
  }
  createBottomMenuItems() {
    return [
      this.createUserMenuItem(),
      {
        label: "Account Navigation",
        items: [
          {
            label: "Clients",
            icon: "pi pi-search",
            command: () => this.toggleSwitchClient()
          },
          {
            label: "Logout",
            icon: "pi pi-power-off",
            command: () => this.logout()
          }
        ]
      },
      { separator: true }
    ];
  }
  toggleSidebar() {
    this.layoutService.toggleSidebar();
    this.isCollapsed.set(!this.isCollapsed());
    let newSidebarVisibilityState = !this.isCollapsed();
    if (this.isMobile()) {
      this.isSidebarOpen.set(!this.isSidebarOpen());
      newSidebarVisibilityState = this.isSidebarOpen();
      this.isCollapsed.set(false);
    }
    this.localStorageService.setItem(this.SIDEBAR_STATE_KEY, newSidebarVisibilityState);
  }
  ngOnInit() {
    this.bottomMenuItems = this.createBottomMenuItems();
  }
  logout() {
    this.messageService.sendAction(ActionType.logout, {}, "Logging out");
    this.authDataService.logout();
  }
  toggleSwitchClient() {
    this.isSwitchClient.set(!this.isSwitchClient());
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function SidebarComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 15, vars: 16, consts: [["submenuheader", ""], ["item", ""], [1, "md:hidden", "p-4"], [1, "flex", "flex-col", "min-h-full", "sidebar-container", "left-0", "bottom-0", "top-0", 3, "ngClass"], ["pTooltip", "Switch Client", 1, "hover:cursor-pointer", 3, "click", "keydown.enter", "isCollapsed", "userProfile", "clientLogo", "clientName", "showDelay"], [1, "w-full", "top-menu", "overflow-y-auto", "overflow-x-hidden", 3, "model"], [1, "mt-auto", "w-full", 3, "model"], [3, "toggleChange", "isCollapsed"], [1, "pi", "pi-bars", "text-2xl", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "text-xs", "text-nav-client-font-color", "opacity-50"], [3, "item", "isCollapsed"], [3, "onClosed"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275conditionalCreate(0, SidebarComponent_Conditional_0_Template, 2, 0, "div", 2);
      \u0275\u0275elementStart(1, "div", 3)(2, "app-user-profile", 4);
      \u0275\u0275listener("click", function SidebarComponent_Template_app_user_profile_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSwitchClient());
      })("keydown.enter", function SidebarComponent_Template_app_user_profile_keydown_enter_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSwitchClient());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-menu", 5);
      \u0275\u0275template(4, SidebarComponent_ng_template_4_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, SidebarComponent_ng_template_6_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-menu", 6);
      \u0275\u0275template(9, SidebarComponent_ng_template_9_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, SidebarComponent_ng_template_11_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "app-toggle-button", 7);
      \u0275\u0275listener("toggleChange", function SidebarComponent_Template_app_toggle_button_toggleChange_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSidebar());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, SidebarComponent_Conditional_14_Template, 1, 0, "app-client-switcher");
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275conditional(!ctx.isSidebarOpen() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(11, _c06, ctx.isCollapsed(), !ctx.isCollapsed() && !ctx.isMobile(), ctx.isMobile(), ctx.isSidebarOpen()));
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.isCollapsed())("userProfile", ctx.userProfileSignal())("clientLogo", ctx.clientLogo())("clientName", (tmp_9_0 = ctx.selectedClientSignal()) == null ? null : tmp_9_0.name)("showDelay", 1250);
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.topMenuItems());
      \u0275\u0275advance(5);
      \u0275\u0275property("model", ctx.bottomMenuItems);
      \u0275\u0275advance(5);
      \u0275\u0275property("isCollapsed", ctx.isCollapsed());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSwitchClient() ? 14 : -1);
    }
  }, dependencies: [
    BadgeModule,
    RippleModule,
    AvatarModule,
    MenuModule,
    Menu,
    CommonModule,
    NgClass,
    UpperCasePipe,
    ButtonModule,
    RouterModule,
    TooltipModule,
    Tooltip,
    ClientSwitcherComponent,
    MenuItemComponent,
    ToggleButtonComponent,
    UserProfileComponent,
    FontAwesomeModule
  ], styles: ['\n\n[_nghost-%COMP%]     .p-menu {\n  min-width: 3.5rem;\n  background: var(--navigation-background-color);\n  border: none;\n}\n[_nghost-%COMP%]     .p-menu-item-link {\n  color: var(--navigation-font-color);\n  font-size: var(--navigation-font-size);\n  font-weight: var(--navigation-font-weight);\n  text-transform: var(--navigation-font-transform);\n}\n[_nghost-%COMP%]     .p-menuitem-link-active {\n  border-radius: 0 !important;\n  color: var(--color-primary-color) !important;\n  background: var(--navigation-background-color) !important;\n}\n[_nghost-%COMP%]     .p-menuitem-link-active::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .p-menu-list {\n  padding: 0;\n}\n[_nghost-%COMP%]     .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n  opacity: 0.5;\n  background: inherit;\n}\n[_nghost-%COMP%]     .p-menu-item.p-focus .p-menu-item-content {\n  background: inherit;\n}\n[_nghost-%COMP%]     .w-aside {\n  width: var(--width-aside);\n}\n.sidebar-container[_ngcontent-%COMP%] {\n  border-right: solid var(--navigation-separator-width) var(--navigation-separator-color);\n  border-color: var(--navigation-border-color);\n  border-width: var(--navigation-border-width);\n  background: var(--navigation-background-color);\n  transition: width 0.3s;\n}\n@media (max-width: 767px) {\n  .sidebar-container[_ngcontent-%COMP%] {\n    display: none;\n    z-index: 70;\n  }\n  .sidebar-container.open[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [
      BadgeModule,
      RippleModule,
      AvatarModule,
      MenuModule,
      CommonModule,
      ButtonModule,
      RouterModule,
      TooltipModule,
      ClientSwitcherComponent,
      MenuItemComponent,
      ToggleButtonComponent,
      UserProfileComponent,
      FontAwesomeModule
    ], template: `<!-- Hamburger Icon for Mobile -->
@if (!isSidebarOpen()) {
  <div class="md:hidden p-4">
    <i class="pi pi-bars text-2xl cursor-pointer" (click)="toggleSidebar()"></i>
  </div>
}

<div
  class="flex flex-col min-h-full sidebar-container left-0 bottom-0 top-0"
  [ngClass]="{
    'w-16': isCollapsed(),
    'w-aside': !isCollapsed() && !isMobile(),
    'w-1/2': isMobile(),
    open: isSidebarOpen(),
  }"
>
  <app-user-profile
    [isCollapsed]="isCollapsed()"
    [userProfile]="userProfileSignal()"
    [clientLogo]="clientLogo()"
    [clientName]="selectedClientSignal()?.name"
    (click)="toggleSwitchClient()"
    class="hover:cursor-pointer"
    pTooltip="Switch Client"
    [showDelay]="1250"
    (keydown.enter)="toggleSwitchClient()"
  ></app-user-profile>

  <!-- Top menu -->
  <p-menu
    [model]="topMenuItems()"
    class="w-full top-menu overflow-y-auto overflow-x-hidden"
  >
    <ng-template #submenuheader let-item>
      @if (!isCollapsed()) {
        <span
          class="flex items-center justify-center text-xs text-nav-client-font-color opacity-50"
        >
          {{ item.label | uppercase }}
        </span>
      }
    </ng-template>

    <ng-template #item let-item>
      <app-menu-item
        [item]="item"
        [isCollapsed]="isCollapsed()"
      ></app-menu-item>
    </ng-template>
  </p-menu>

  <!-- Bottom menu -->
  <p-menu [model]="bottomMenuItems" class="mt-auto w-full">
    <ng-template #submenuheader let-item>
      @if (!isCollapsed()) {
        <span
          class="flex items-center justify-center text-xs text-nav-client-font-color opacity-50"
        >
          {{ item.label | uppercase }}
        </span>
      }
    </ng-template>

    <ng-template #item let-item>
      <app-menu-item
        [item]="item"
        [isCollapsed]="isCollapsed()"
      ></app-menu-item>
    </ng-template>
  </p-menu>

  <!-- Toggle button -->
  <app-toggle-button
    [isCollapsed]="isCollapsed()"
    (toggleChange)="toggleSidebar()"
  ></app-toggle-button>
</div>

@if (isSwitchClient()) {
  <app-client-switcher (onClosed)="toggleSwitchClient()"></app-client-switcher>
}
`, styles: ['/* src/app/layouts/components/sidebar/sidebar.component.scss */\n:host ::ng-deep .p-menu {\n  min-width: 3.5rem;\n  background: var(--navigation-background-color);\n  border: none;\n}\n:host ::ng-deep .p-menu-item-link {\n  color: var(--navigation-font-color);\n  font-size: var(--navigation-font-size);\n  font-weight: var(--navigation-font-weight);\n  text-transform: var(--navigation-font-transform);\n}\n:host ::ng-deep .p-menuitem-link-active {\n  border-radius: 0 !important;\n  color: var(--color-primary-color) !important;\n  background: var(--navigation-background-color) !important;\n}\n:host ::ng-deep .p-menuitem-link-active::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: var(--color-primary-color);\n}\n:host ::ng-deep .p-menu-list {\n  padding: 0;\n}\n:host ::ng-deep .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n  opacity: 0.5;\n  background: inherit;\n}\n:host ::ng-deep .p-menu-item.p-focus .p-menu-item-content {\n  background: inherit;\n}\n:host ::ng-deep .w-aside {\n  width: var(--width-aside);\n}\n.sidebar-container {\n  border-right: solid var(--navigation-separator-width) var(--navigation-separator-color);\n  border-color: var(--navigation-border-color);\n  border-width: var(--navigation-border-width);\n  background: var(--navigation-background-color);\n  transition: width 0.3s;\n}\n@media (max-width: 767px) {\n  .sidebar-container {\n    display: none;\n    z-index: 70;\n  }\n  .sidebar-container.open {\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/layouts/components/sidebar/sidebar.component.ts", lineNumber: 61 });
})();

// src/app/shared/components/theme/theme.component.ts
var WebFont = __toESM(require_webfontloader());

// node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i29 = 1; i29 < arguments.length; i29++) {
      var source = arguments[i29];
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
  var urlQueue = Array.apply(null, Array(urlArray.length)).map(function(x) {
    return null;
  });
  function isValidCss(text) {
    var isString2 = typeof text === "string";
    var isHTML = isString2 && text.trim().charAt(0) === "<";
    return isString2 && !isHTML;
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
  urlArray.forEach(function(url, i29) {
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
            onSuccess2(text, i29);
          } else {
            onError2(xdr, i29);
          }
        };
        xdr.onerror = function(err) {
          onError2(xdr, i29);
        };
        setTimeout(function() {
          xdr.send();
        }, 0);
      } else {
        console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
        onError2(null, i29);
      }
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      if (settings.mimeType && xhr.overrideMimeType) {
        xhr.overrideMimeType(settings.mimeType);
      }
      settings.onBeforeSend(xhr, url, i29);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var text = xhr.responseText;
          if (xhr.status < 400 && isValidCss(text)) {
            onSuccess2(text, i29);
          } else if (xhr.status === 0 && isValidCss(text)) {
            onSuccess2(text, i29);
          } else {
            onError2(xhr, i29);
          }
        }
      };
      xhr.send();
    }
  });
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
  var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function(node) {
    return !matchesSelector(node, settings.exclude);
  });
  var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function(x) {
    return null;
  });
  function handleComplete() {
    var isComplete = cssArray.indexOf(null) === -1;
    if (isComplete) {
      cssArray.reduce(function(skipIndices, value, i29) {
        if (value === "") {
          skipIndices.push(i29);
        }
        return skipIndices;
      }, []).reverse().forEach(function(skipIndex) {
        return [sourceNodes, cssArray].forEach(function(arr) {
          return arr.splice(skipIndex, 1);
        });
      });
      var cssText = cssArray.join("");
      settings.onComplete(cssText, cssArray, sourceNodes);
    }
  }
  function handleSuccess(cssText, cssIndex, node, sourceUrl) {
    var returnVal = settings.onSuccess(cssText, node, sourceUrl);
    cssText = returnVal !== void 0 && Boolean(returnVal) === false ? "" : returnVal || cssText;
    resolveImports(cssText, node, sourceUrl, function(resolvedCssText, errorData) {
      if (cssArray[cssIndex] === null) {
        errorData.forEach(function(data) {
          return settings.onError(data.xhr, node, data.url);
        });
        if (!settings.filter || settings.filter.test(resolvedCssText)) {
          cssArray[cssIndex] = resolvedCssText;
        } else {
          cssArray[cssIndex] = "";
        }
        handleComplete();
      }
    });
  }
  function parseImportData(cssText, baseUrl) {
    var ignoreRules = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var importData = {};
    importData.rules = (cssText.replace(regex2.cssComments, "").match(regex2.cssImports) || []).filter(function(rule) {
      return ignoreRules.indexOf(rule) === -1;
    });
    importData.urls = importData.rules.map(function(rule) {
      return rule.replace(regex2.cssImports, "$1");
    });
    importData.absoluteUrls = importData.urls.map(function(url) {
      return getFullUrl$1(url, baseUrl);
    });
    importData.absoluteRules = importData.rules.map(function(rule, i29) {
      var oldUrl = importData.urls[i29];
      var newUrl = getFullUrl$1(importData.absoluteUrls[i29], baseUrl);
      return rule.replace(oldUrl, newUrl);
    });
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
          responseImportData.rules.forEach(function(rule, i29) {
            cssText2 = cssText2.replace(rule, responseImportData.absoluteRules[i29]);
          });
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
          responseArray.forEach(function(importText, i29) {
            cssText = cssText.replace(importData.rules[i29], importText);
          });
          resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
        }
      });
    } else {
      callbackFn(cssText, __errorData);
    }
  }
  if (sourceNodes.length) {
    sourceNodes.forEach(function(node, i29) {
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
            cssText = Array.apply(null, node.sheet.cssRules).map(function(rule) {
              return rule.cssText;
            }).join("");
          }
          handleSuccess(cssText, i29, node, location.href);
        } else {
          getUrls(linkHref, {
            mimeType: "text/css",
            onBeforeSend: function onBeforeSend2(xhr, url, urlIndex) {
              settings.onBeforeSend(xhr, node, url);
            },
            onSuccess: function onSuccess2(cssText2, url, urlIndex) {
              var sourceUrl = getFullUrl$1(linkHref);
              handleSuccess(cssText2, i29, node, sourceUrl);
            },
            onError: function onError2(xhr, url, urlIndex) {
              cssArray[i29] = "";
              settings.onError(xhr, node, url);
              handleComplete();
            }
          });
        }
      } else if (isStyle && !isSkip) {
        var _cssText = node.textContent;
        if (settings.useCSSOM) {
          _cssText = Array.apply(null, node.sheet.cssRules).map(function(rule) {
            return rule.cssText;
          }).join("");
        }
        handleSuccess(_cssText, i29, node, location.href);
      } else {
        cssArray[i29] = "";
        handleComplete();
      }
    });
  } else {
    settings.onComplete("", []);
  }
}
function getFullUrl$1(url, base) {
  var d34 = document.implementation.createHTMLDocument("");
  var b5 = d34.createElement("base");
  var a43 = d34.createElement("a");
  d34.head.appendChild(b5);
  d34.body.appendChild(a43);
  b5.href = base || document.baseURI || (document.querySelector("base") || {}).href || location.href;
  a43.href = url;
  return a43.href;
}
function matchesSelector(elm, selector) {
  var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
  return matches.call(elm, selector);
}
var balancedMatch = balanced;
function balanced(a43, b5, str) {
  if (a43 instanceof RegExp) a43 = maybeMatch(a43, str);
  if (b5 instanceof RegExp) b5 = maybeMatch(b5, str);
  var r85 = range(a43, b5, str);
  return r85 && {
    start: r85[0],
    end: r85[1],
    pre: str.slice(0, r85[0]),
    body: str.slice(r85[0] + a43.length, r85[1]),
    post: str.slice(r85[1] + b5.length)
  };
}
function maybeMatch(reg, str) {
  var m5 = str.match(reg);
  return m5 ? m5[0] : null;
}
balanced.range = range;
function range(a43, b5, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a43);
  var bi = str.indexOf(b5, ai + 1);
  var i29 = ai;
  if (ai >= 0 && bi > 0) {
    if (a43 === b5) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;
    while (i29 >= 0 && !result) {
      if (i29 == ai) {
        begs.push(i29);
        ai = str.indexOf(a43, i29 + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b5, i29 + 1);
      }
      i29 = ai < bi && ai >= 0 ? ai : bi;
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
    var m5 = re.exec(css);
    if (m5) {
      css = css.slice(m5[0].length);
      return m5;
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
    var i29 = 2;
    while (css[i29] && (css[i29] !== "*" || css[i29 + 1] !== "/")) {
      i29++;
    }
    if (!css[i29]) {
      return error("end of comment is missing");
    }
    var str = css.slice(2, i29);
    css = css.slice(i29 + 2);
    return {
      type: "comment",
      comment: str
    };
  }
  function comments() {
    var cmnts = [];
    var c27;
    while (c27 = comment()) {
      cmnts.push(c27);
    }
    return settings.removeComments ? [] : cmnts;
  }
  function selector() {
    whitespace();
    while (css[0] === "}") {
      error("extra closing bracket");
    }
    var m5 = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
    if (m5) {
      var _selector = m5[0].trim();
      var selectorItems;
      var hasComment = /\/\*/.test(_selector);
      if (hasComment) {
        _selector = _selector.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "");
      }
      var hasCommaInQuotes = /["']\w*,\w*["']/.test(_selector);
      if (hasCommaInQuotes) {
        _selector = _selector.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m6) {
          return m6.replace(/,/g, "\u200C");
        });
      }
      var hasMultipleSelectors = /,/.test(_selector);
      if (hasMultipleSelectors) {
        selectorItems = _selector.split(/\s*(?![^(]*\)),\s*/);
      } else {
        selectorItems = [_selector];
      }
      if (hasCommaInQuotes) {
        selectorItems = selectorItems.map(function(s12) {
          return s12.replace(/\u200C/g, ",");
        });
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
    var d34;
    var decls = comments();
    while (d34 = declaration()) {
      decls.push(d34);
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
    var m5;
    while (m5 = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m5[1]);
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
    var m5 = match(/^@([-\w]+)?keyframes\s*/);
    if (!m5) {
      return;
    }
    var vendor = m5[1];
    m5 = match(/^([-\w]+)\s*/);
    if (!m5) {
      return error("@keyframes missing name");
    }
    var name = m5[1];
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
    var m5 = match(/^@page */);
    if (m5) {
      var sel = selector() || [];
      return {
        type: "page",
        selectors: sel,
        declarations: declarations()
      };
    }
  }
  function at_page_margin_box() {
    var m5 = match(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
    if (m5) {
      var name = "".concat(m5[1], "-").concat(m5[2]) + (m5[3] ? "-".concat(m5[3]) : "");
      return {
        type: "page-margin-box",
        name,
        declarations: declarations()
      };
    }
  }
  function at_fontface() {
    var m5 = match(/^@font-face\s*/);
    if (m5) {
      return {
        type: "font-face",
        declarations: declarations()
      };
    }
  }
  function at_supports() {
    var m5 = match(/^@supports *([^{]+)/);
    if (m5) {
      return {
        type: "supports",
        supports: m5[1].trim(),
        rules: rules()
      };
    }
  }
  function at_host() {
    var m5 = match(/^@host\s*/);
    if (m5) {
      return {
        type: "host",
        rules: rules()
      };
    }
  }
  function at_media() {
    var m5 = match(/^@media([^{]+)*/);
    if (m5) {
      return {
        type: "media",
        media: (m5[1] || "").trim(),
        rules: rules()
      };
    }
  }
  function at_custom_m() {
    var m5 = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (m5) {
      return {
        type: "custom-media",
        name: m5[1].trim(),
        media: m5[2].trim()
      };
    }
  }
  function at_document() {
    var m5 = match(/^@([-\w]+)?document *([^{]+)/);
    if (m5) {
      return {
        type: "document",
        document: m5[2].trim(),
        vendor: m5[1] ? m5[1].trim() : null,
        rules: rules()
      };
    }
  }
  function at_x() {
    var m5 = match(/^@(import|charset|namespace)\s*([^;]+);/);
    if (m5) {
      return {
        type: m5[1],
        name: m5[2].trim()
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
          hasVarFunc = ret.declarations.some(function(decl) {
            return /var\(/.test(decl.value);
          });
        } else {
          var arr = ret.keyframes || ret.rules || [];
          hasVarFunc = arr.some(function(obj) {
            return (obj.declarations || []).some(function(decl) {
              return /var\(/.test(decl.value);
            });
          });
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
    var decls = settings.preserveStatic ? declarations() : declarations().filter(function(decl) {
      var hasVarDecl2 = sel.some(function(s12) {
        return /:(?:root|host)(?![.:#(])/.test(s12);
      }) && /^--\S/.test(decl.property);
      var hasVarFunc2 = /var\(/.test(decl.value);
      return hasVarDecl2 || hasVarFunc2;
    });
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
  cssData.stylesheet.rules.forEach(function(rule) {
    if (rule.type !== "rule" || !rule.selectors.some(function(s12) {
      return reVarDeclSelectors.test(s12);
    })) {
      return;
    }
    rule.declarations.forEach(function(decl, i29) {
      var prop = decl.property;
      var value = decl.value;
      if (prop && prop.indexOf("--") === 0) {
        settings.store[prop] = value;
      }
    });
  });
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
    for (var i29 = 0; i29 < nodes.length; i29++) {
      var n39 = nodes[i29];
      if (cb) {
        cb(n39);
      }
      var txt = renderMethods[n39.type](n39);
      if (txt) {
        buf += txt;
        if (txt.length && n39.selectors) {
          buf += delim;
        }
      }
    }
    return buf;
  }
  return visit(tree.stylesheet.rules);
}
function walkCss(node, fn) {
  node.rules.forEach(function(rule) {
    if (rule.rules) {
      walkCss(rule, fn);
      return;
    }
    if (rule.keyframes) {
      rule.keyframes.forEach(function(keyframe) {
        if (keyframe.type === "keyframe") {
          fn(keyframe.declarations, rule);
        }
      });
      return;
    }
    if (!rule.declarations) {
      return;
    }
    fn(rule.declarations, node);
  });
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
  walkCss(cssData.stylesheet, function(declarations, node) {
    for (var i29 = 0; i29 < declarations.length; i29++) {
      var decl = declarations[i29];
      var type = decl.type;
      var prop = decl.property;
      var value = decl.value;
      if (type !== "declaration") {
        continue;
      }
      if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
        declarations.splice(i29, 1);
        i29--;
        continue;
      }
      if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
        var resolvedValue = resolveValue(value, settings);
        if (resolvedValue !== decl.value) {
          resolvedValue = fixNestedCalc(resolvedValue);
          if (!settings.preserveVars) {
            decl.value = resolvedValue;
          } else {
            declarations.splice(i29, 0, {
              type,
              property: prop,
              value: resolvedValue
            });
            i29++;
          }
        }
      }
    }
  });
  return stringifyCss(cssData);
}
function fixNestedCalc(value) {
  var reCalcVal = /calc\(([^)]+)\)/g;
  (value.match(reCalcVal) || []).forEach(function(match) {
    var newVal = "calc".concat(match.split("calc").join(""));
    value = value.replace(match, newVal);
  });
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
    settings.exclude = [cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', "link[disabled]:not([data-cssvars])", settings.exclude].filter(function(selector) {
      return selector;
    }).join(",");
    settings.variables = fixVarNames(settings.variables);
    srcNodes.forEach(function(srcNode) {
      var hasStyleCache = srcNode.nodeName.toLowerCase() === "style" && srcNode.__cssVars.text;
      var hasStyleChanged = hasStyleCache && srcNode.textContent !== srcNode.__cssVars.text;
      if (hasStyleCache && hasStyleChanged) {
        srcNode.sheet && (srcNode.sheet.disabled = false);
        srcNode.setAttribute("data-cssvars", "");
      }
    });
    if (!cssVarsObserver) {
      var outNodes = [].slice.call(settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
      outNodes.forEach(function(outNode) {
        var dataGroup = outNode.getAttribute("data-cssvars-group");
        var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;
        if (!srcNode) {
          outNode.parentNode.removeChild(outNode);
        }
      });
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
        Object.keys(settings.variables).forEach(function(key) {
          var varValue = settings.variables[key];
          hasVarChange = hasVarChange || varValue !== getComputedStyle(targetElm).getPropertyValue(key);
          targetElm.style.setProperty(key, varValue);
        });
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
          nodeArray.forEach(function(node, i30) {
            var nodeCSS = cssArray[i30];
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
          });
          _extends(variableStore.job, variableStore.dom);
          if (settings.updateDOM) {
            _extends(variableStore.user, settings.variables);
            _extends(variableStore.job, variableStore.user);
          } else {
            _extends(variableStore.job, variableStore.user, settings.variables);
            _extends(currentVars, settings.variables);
          }
          hasVarChange2 = counters.job > 0 && Boolean(Object.keys(variableStore.job).length > Object.keys(currentVars).length || Boolean(Object.keys(currentVars).length && Object.keys(variableStore.job).some(function(key) {
            return variableStore.job[key] !== currentVars[key];
          })));
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
            nodeArray.forEach(function(node, i30) {
              var isSkip = !node.__cssVars.tree;
              if (node.__cssVars.tree) {
                try {
                  transformCss(node.__cssVars.tree, _extends({}, settings, {
                    variables: variableStore.job,
                    onWarning: handleWarning
                  }));
                  var outCss = stringifyCss(node.__cssVars.tree);
                  if (settings.updateDOM) {
                    var nodeCSS = cssArray[i30];
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
                        [node, outNode].forEach(function(n39) {
                          n39.setAttribute("data-cssvars-job", counters.job);
                          n39.setAttribute("data-cssvars-group", dataGroup);
                        });
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
            });
            cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;
            if (settings.shadowDOM) {
              var elms = [].concat(settings.rootElement).concat([].slice.call(settings.rootElement.querySelectorAll("*")));
              for (var i29 = 0, elm; elm = elms[i29]; ++i29) {
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
    document.addEventListener("DOMContentLoaded", function init(evt) {
      cssVars(options);
      document.removeEventListener("DOMContentLoaded", init);
    });
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
      isValid = [].slice.call(mutation.addedNodes).some(function(node) {
        var isElm = node.nodeType === 1;
        var hasAttr = isElm && node.hasAttribute("data-cssvars");
        var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
        var isValid2 = !hasAttr && (isLink(node) || isStyleWithVars);
        return isValid2 && !isDisabled(node);
      });
    }
    return isValid;
  }
  function isValidRemoveMutation(mutation) {
    var isValid = false;
    if (mutation.type === "childList") {
      isValid = [].slice.call(mutation.removedNodes).some(function(node) {
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
      });
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
  cssVarsObserver = new MutationObserver(function(mutations) {
    var hasValidMutation = mutations.some(function(mutation) {
      return isValidAttributeMutation(mutation) || isValidStyleTextMutation(mutation) || isValidAddMutation(mutation) || isValidRemoveMutation(mutation);
    });
    if (hasValidMutation) {
      cssVars(settings);
    }
  });
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
  debounceTimer = setTimeout(function() {
    settings.__benchmark = null;
    cssVars(settings);
  }, delay);
}
function fixKeyframes(rootElement) {
  var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function(prop) {
    return getComputedStyle(document.body)[prop];
  })[0];
  if (animationNameProp) {
    var allNodes = [].slice.call(rootElement.querySelectorAll("*"));
    var keyframeNodes = [];
    var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";
    for (var i29 = 0, len = allNodes.length; i29 < len; i29++) {
      var node = allNodes[i29];
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
  cssUrls.forEach(function(cssUrl) {
    var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
    var newUrl = getFullUrl(oldUrl, baseUrl);
    cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
  });
  return cssText;
}
function fixVarNames() {
  var varObj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var reLeadingHyphens = /^-{2}/;
  return Object.keys(varObj).reduce(function(obj, value) {
    var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
    obj[key] = varObj[value];
    return obj;
  }, {});
}
function getFullUrl(url) {
  var base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : location.href;
  var d34 = document.implementation.createHTMLDocument("");
  var b5 = d34.createElement("base");
  var a43 = d34.createElement("a");
  d34.head.appendChild(b5);
  d34.body.appendChild(a43);
  b5.href = base;
  a43.href = url;
  return a43.href;
}
function getTimeStamp() {
  return isBrowser && (window.performance || {}).now ? window.performance.now() : (/* @__PURE__ */ new Date()).getTime();
}
function resetCssNodes(rootElement) {
  var resetDOMVariableStore = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var resetNodes = [].slice.call(rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
  resetNodes.forEach(function(node) {
    return node.setAttribute("data-cssvars", "");
  });
  if (resetDOMVariableStore) {
    variableStore.dom = {};
  }
}

// src/app/shared/components/theme/theme.component.ts
var _c07 = ["*"];
function ThemeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-progressSpinner", 1);
    \u0275\u0275elementEnd();
  }
}
function ThemeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var ThemeComponent = class _ThemeComponent {
  destroy$ = new Subject();
  themeService = inject(ThemeDataService);
  clientDataService = inject(ClientDataService);
  renderer = inject(RendererFactory2).createRenderer(null, null);
  document = inject(DOCUMENT);
  http = inject(HttpClient);
  loading = signal(true);
  hasNativeCssVariableSupport = computed(() => typeof window !== "undefined" && window["CSS"]?.supports?.("(--a: 0)") || false);
  classes = "";
  constructor() {
    effect(() => {
      const selectedClient = this.clientDataService.getSelectedClient();
      if (selectedClient) {
        this.updateTheme(this.getThemeId());
      }
    });
  }
  ngOnInit() {
    this.themeService.theme$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (theme) => {
        if (!theme)
          return;
        this.loadTheme(theme).catch((error) => console.error("Error loading theme:", error));
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
    theme.customTags?.forEach((customTag, index) => {
      this.appendHTML(`custom-tag-${index}`, customTag.location, customTag.tag, customTag.attributes, customTag.contents);
    });
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
      this.processCustomTags(theme)
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
    const classes3 = [];
    if (variables["--main-gutter-width"] && !["0", "0px", "0rem"].includes(variables["--main-gutter-width"])) {
      classes3.push("app-has-gutter");
    }
    this.classes = classes3.join(" ");
  }
  updateTheme(themeId) {
    (themeId === "default" ? this.themeService.getDomainTheme(themeId) : this.themeService.fetchTheme(themeId)).subscribe({
      next: (theme) => {
        this.loadTheme(theme).catch(() => {
        });
        this.themeService.setTheme(theme);
      }
    });
  }
  getThemeId() {
    const selectedClient = this.clientDataService.getSelectedClient();
    return isDefined(selectedClient?.theme?.id) && selectedClient.theme.id !== "inherited" ? selectedClient.theme.id : "default";
  }
  async injectSettingsVariables(variables) {
    const fonts = {};
    Object.keys(variables).filter((x) => x.includes("-font-family")).forEach((key) => {
      const font = variables[key];
      fonts[font] = `${font}:300,400,400i,500,700`;
    });
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
    strings.forEach((str) => {
      const [key, value] = str.split("=");
      this.renderer.setAttribute(script, key, value?.replace(/['"]/g, "") || "true");
    });
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
  }, ngContentSelectors: _c07, decls: 2, vars: 1, consts: [[1, "fixed", "inset-0", "flex", "items-center", "justify-center"], ["styleClass", "w-12 h-12 text-primary-500"]], template: function ThemeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, ThemeComponent_Conditional_0_Template, 2, 0, "div", 0)(1, ThemeComponent_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : 1);
    }
  }, dependencies: [ProgressSpinnerModule, ProgressSpinner], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeComponent, [{
    type: Component,
    args: [{ selector: "app-theme", imports: [ProgressSpinnerModule], template: '@if (loading()) {\n  <div class="fixed inset-0 flex items-center justify-center">\n    <p-progressSpinner styleClass="w-12 h-12 text-primary-500">\n    </p-progressSpinner>\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n', styles: ["/* src/app/shared/components/theme/theme.component.scss */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */\n"] }]
  }], () => [], { classes: [{
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeComponent, { className: "ThemeComponent", filePath: "src/app/shared/components/theme/theme.component.ts", lineNumber: 31 });
})();

// src/app/layouts/components/main-layout/main-layout.component.ts
var MainLayoutComponent_Defer_9_DepsFn = () => [import("./chunk-ILL44GDK.js").then((m5) => m5.FlutterLayoutComponent)];
var _c08 = (a0, a1) => ({ hidden: a0, block: a1 });
function MainLayoutComponent_Defer_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-flutter-layout");
  }
}
function MainLayoutComponent_DeferLoading_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner", 7);
  }
}
function MainLayoutComponent_DeferPlaceholder_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner", 7);
  }
}
function MainLayoutComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.iframeUrl(), \u0275\u0275sanitizeResourceUrl);
  }
}
var MainLayoutComponent = class _MainLayoutComponent {
  authDataService = inject(AuthDataService);
  accountsService = inject(AccountsService);
  localStorageService = inject(LocalStorageService);
  clientDataService = inject(ClientDataService);
  route = inject(ActivatedRoute);
  messageService = inject(MessageService);
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  broadcastService = inject(BroadcastMessageService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  isFlutterRoute = signal(false);
  isIframeRoute = signal(false);
  iframeUrl = signal(null);
  constructor() {
  }
  ngOnInit() {
    this.initializeUserAndClient();
    this.checkRouteData();
    this.setupRouteHandler();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => this.checkRouteData()), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  checkRouteData() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const routeData = route.snapshot.data;
    const isFlutterRoute = routeData["isFlutterRoute"] ?? false;
    const isIframeRoute = routeData["isIframeRoute"] ?? false;
    const iframeUrl = routeData["iframeUrl"] ?? null;
    this.isFlutterRoute.set(isFlutterRoute);
    this.isIframeRoute.set(isIframeRoute);
    this.iframeUrl.set(iframeUrl);
    return isFlutterRoute;
  }
  initializeUserAndClient() {
    this.route.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        const userProfile = data["userProfile"];
        this.authDataService.setUserProfile(userProfile);
        this.measurementDateTimeService.setTimezoneId(userProfile.timeZoneId ?? "UTC");
        this.initializeClient().catch(() => {
        });
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load user profile"
        });
      }
    });
  }
  async fetchClient(clientId) {
    return firstValueFrom(this.accountsService.getClient(clientId).pipe(catchError(() => of(null))));
  }
  async initializeClient() {
    const savedState = this.localStorageService.getItem(LOCAL_STORAGE_KEY_SELECTED_CLIENT);
    const savedClientId = hasProperty(savedState, "id") && isString(savedState.id) ? savedState.id : void 0;
    const defaultClient = this.authDataService.getUserProfile()?.defaultClient;
    const defaultClientId = isDefined(defaultClient) && hasProperty(defaultClient, "id") ? defaultClient.id : void 0;
    if (!isDefined(savedClientId) && !isDefined(defaultClientId)) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        detail: "No client found for the user"
      });
      return;
    }
    try {
      const client = await this.tryLoadClient(savedClientId, defaultClientId);
      if (!isDefined(client)) {
        this.messageService.add({
          severity: "warn",
          summary: "Warning",
          detail: "No client found for the user"
        });
      }
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `An error occurred while initializing the client:  ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  }
  async tryLoadClient(savedClientId, defaultClientId) {
    if (isDefined(savedClientId) && isString(savedClientId)) {
      const savedClient = await this.fetchClient(savedClientId);
      if (isDefined(savedClient)) {
        this.clientDataService.setSelectedClient(savedClient);
        return savedClient;
      }
    }
    if (isDefined(defaultClientId) && isString(defaultClientId)) {
      const defaultClient = await this.fetchClient(defaultClientId);
      if (isDefined(defaultClient)) {
        this.clientDataService.setSelectedClient(defaultClient);
        return defaultClient;
      }
    }
    return null;
  }
  setupRouteHandler() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (this.isFlutterRoute()) {
        const fullRoute = event.urlAfterRedirects;
        const [path, queryString] = fullRoute.split("?");
        const cleanPath = path.replace(/(^\/+)|(\/+$)/g, "");
        const queryParams = queryString ? Object.fromEntries(new URLSearchParams(queryString)) : void 0;
        this.broadcastService.sendAction(ActionType.navigate, {
          route: cleanPath,
          queryParams,
          timestamp: Date.now()
        });
      }
    });
  }
  ngOnDestroy() {
    this.clientDataService.clearSelectedClientSignal();
    this.authDataService.clearUserProfile();
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 15, vars: 13, consts: [[1e3, 100], [500], [1, "flex", "h-full"], [1, "w-full"], ["styleClass", "w-full h-full"], [1, "h-full", 3, "ngClass"], ["title", "External Application", "sandbox", "allow-same-origin allow-scripts allow-forms allow-popups", 1, "w-full", "h-full", "border-0", 3, "src"], ["styleClass", "w-[50px] h-[50px]", "strokeWidth", "4"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-theme")(1, "div", 2);
      \u0275\u0275element(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 3)(4, "p-scrollpanel", 4)(5, "div", 5);
      \u0275\u0275template(6, MainLayoutComponent_Defer_6_Template, 1, 0)(7, MainLayoutComponent_DeferLoading_7_Template, 1, 0)(8, MainLayoutComponent_DeferPlaceholder_8_Template, 1, 0);
      \u0275\u0275defer(9, 6, MainLayoutComponent_Defer_9_DepsFn, 7, 8, null, 0, 1, \u0275\u0275deferEnableTimerScheduling);
      \u0275\u0275deferOnIdle();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275conditionalCreate(12, MainLayoutComponent_Conditional_12_Template, 1, 1, "iframe", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5);
      \u0275\u0275element(14, "router-outlet");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c08, !ctx.isFlutterRoute(), ctx.isFlutterRoute()));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c08, !ctx.isIframeRoute(), ctx.isIframeRoute()));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.iframeUrl() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c08, ctx.isFlutterRoute() || ctx.isIframeRoute(), !ctx.isFlutterRoute() && !ctx.isIframeRoute()));
    }
  }, dependencies: [
    RouterModule,
    RouterOutlet,
    SplitterModule,
    SidebarComponent,
    ScrollPanelModule,
    ScrollPanel,
    ThemeComponent,
    ProgressSpinnerModule,
    ProgressSpinner,
    CommonModule,
    NgClass
  ], styles: ["\n\n.layout-splitter[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: auto;\n}\n@media (max-width: 768px) {\n  .layout-splitter[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 10px;\n    height: 100%;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(MainLayoutComponent, () => [import("./chunk-ILL44GDK.js").then((m5) => m5.FlutterLayoutComponent)], (FlutterLayoutComponent) => {
    setClassMetadata(MainLayoutComponent, [{
      type: Component,
      args: [{ selector: "app-main-layout", imports: [
        RouterModule,
        SplitterModule,
        SidebarComponent,
        ScrollPanelModule,
        ThemeComponent,
        FlutterLayoutComponent,
        ProgressSpinnerModule,
        CommonModule
      ], template: '<app-theme>\n  <div class="flex h-full">\n    <app-sidebar></app-sidebar>\n\n    <div class="w-full">\n      <p-scrollpanel styleClass="w-full h-full">\n        <!-- Flutter Layer -->\n        <div\n          [ngClass]="{ hidden: !isFlutterRoute(), block: isFlutterRoute() }"\n          class="h-full"\n        >\n          @defer {\n            <app-flutter-layout />\n          } @placeholder (minimum 500ms) {\n            <p-progressSpinner styleClass="w-[50px] h-[50px]" strokeWidth="4">\n            </p-progressSpinner>\n          } @loading (after 100ms; minimum 1s) {\n            <p-progressSpinner styleClass="w-[50px] h-[50px]" strokeWidth="4">\n            </p-progressSpinner>\n          }\n        </div>\n\n        <!-- Iframe Layer for External Links -->\n        <div\n          [ngClass]="{ hidden: !isIframeRoute(), block: isIframeRoute() }"\n          class="h-full"\n        >\n          @if (iframeUrl()) {\n            <iframe\n              [src]="iframeUrl()"\n              title="External Application"\n              class="w-full h-full border-0"\n              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"\n            ></iframe>\n          }\n        </div>\n\n        <!-- Angular Layer -->\n        <div\n          [ngClass]="{\n            hidden: isFlutterRoute() || isIframeRoute(),\n            block: !isFlutterRoute() && !isIframeRoute(),\n          }"\n          class="h-full"\n        >\n          <router-outlet />\n        </div>\n      </p-scrollpanel>\n    </div>\n  </div>\n</app-theme>\n', styles: ["/* src/app/layouts/components/main-layout/main-layout.component.scss */\n.layout-splitter {\n  height: 100vh;\n}\n.main-content {\n  padding: 20px;\n  overflow: auto;\n}\n@media (max-width: 768px) {\n  .layout-splitter {\n    flex-direction: column;\n  }\n  .main-content {\n    padding: 10px;\n    height: 100%;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
    }], () => [], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layouts/components/main-layout/main-layout.component.ts", lineNumber: 55 });
})();

// src/app/core/resolvers/user-profile.resolver.ts
var userProfileResolver = (_route, _state) => {
  const userProfileService = inject(AuthService2);
  return userProfileService.getUserProfile();
};

// src/app/features/external-tab/external-tab.component.ts
function ExternalTabComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.iframeUrl(), \u0275\u0275sanitizeResourceUrl);
  }
}
var ExternalTabComponent = class _ExternalTabComponent {
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  navigationService = inject(NavigationService);
  params = toSignal(this.route.paramMap);
  iframeUrl = computed(() => {
    const id = this.params()?.get("id");
    if (id === null || id === void 0) {
      return null;
    }
    const navItem = this.navigationService.getNavigationItemById(id);
    if (isDefined(navItem?.externalUrl) && navItem.externalUrl.trim() !== "") {
      return this.sanitizer.bypassSecurityTrustResourceUrl(navItem.externalUrl);
    }
    return null;
  });
  static \u0275fac = function ExternalTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExternalTabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalTabComponent, selectors: [["app-external-tab"]], decls: 1, vars: 1, consts: [["title", "External Content", 1, "external-iframe", 3, "src"]], template: function ExternalTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ExternalTabComponent_Conditional_0_Template, 1, 1, "iframe", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.iframeUrl() ? 0 : -1);
    }
  }, styles: ["\n\n.external-iframe[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=external-tab.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalTabComponent, [{
    type: Component,
    args: [{ selector: "app-external-tab", standalone: true, imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (iframeUrl()) {\n  <iframe\n    [src]="iframeUrl()"\n    class="external-iframe"\n    title="External Content"\n  ></iframe>\n}\n', styles: ["/* src/app/features/external-tab/external-tab.component.scss */\n.external-iframe {\n  border: none;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=external-tab.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalTabComponent, { className: "ExternalTabComponent", filePath: "src/app/features/external-tab/external-tab.component.ts", lineNumber: 22 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [authGuard],
    resolve: {
      userProfile: userProfileResolver
    },
    children: [
      {
        path: "",
        redirectTo: "position",
        pathMatch: "full"
      },
      {
        path: "position",
        data: { isFlutterRoute: true },
        loadChildren: () => import("./chunk-4DLD4W62.js").then((m5) => m5.PositionModule)
      },
      {
        path: "alerts",
        data: { isFlutterRoute: true },
        loadChildren: () => import("./chunk-H72EHKR2.js").then((m5) => m5.AlertsModule)
      },
      {
        path: "media",
        data: { isFlutterRoute: true },
        loadChildren: () => import("./chunk-YIVOD5Z3.js").then((m5) => m5.MediaModule)
      },
      {
        path: "history",
        data: { isFlutterRoute: true },
        loadChildren: () => import("./chunk-5WD3G73N.js").then((m5) => m5.HistoryModule)
      },
      {
        path: "user",
        loadChildren: () => import("./chunk-FTLNH3YK.js").then((m5) => m5.UsersModule)
      },
      {
        path: "admin",
        loadChildren: () => import("./chunk-3U7FOZCV.js").then((m5) => m5.AdministrationModule)
      },
      {
        path: "external/:id",
        component: ExternalTabComponent
      }
    ]
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-THRZYRSI.js").then((m5) => m5.AuthModule)
  }
];

// src/app/core/core.module.ts
var CoreModule = class _CoreModule {
  constructor() {
    const parentModule = inject(_CoreModule, { optional: true, skipSelf: true });
    if (isDefined(parentModule)) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only.");
    }
  }
  static \u0275fac = function CoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoreModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CoreModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule],
      providers: [
        // AuthInterceptorService removed for functional interceptor migration
      ]
    }]
  }], () => [], null);
})();

// src/app/core/interceptors/api-url.interceptor.ts
var ApiUrlInterceptor = (req, next) => {
  const apiUrlService = inject(ApiUrlService);
  const toastService = inject(ToastService);
  const apiConfiguration = inject(Configuration);
  let dynamicApiUrlObj;
  try {
    const currentApiUrl = apiUrlService.getCurrentApiUrl();
    if (!currentApiUrl) {
      throw new Error("API URL service returned an empty URL.");
    }
    dynamicApiUrlObj = new URL(currentApiUrl);
  } catch (error) {
    const errorMsg = `Invalid dynamic API URL configured: ${error?.message ?? "Unknown error"}. Please check settings.`;
    const errorResponse = new HttpErrorResponse({
      status: 400,
      statusText: "Bad Request",
      error: {
        errorReason: ErrorReasons.InvalidEndpoint,
        errorMessage: errorMsg,
        token: null,
        valid: false
      }
    });
    toastService.showError("Configuration Error", errorMsg);
    return throwError(() => errorResponse);
  }
  let dynamicApiBaseUrl = dynamicApiUrlObj.toString();
  if (!dynamicApiBaseUrl.endsWith("/")) {
    dynamicApiBaseUrl += "/";
  }
  if (req.url.startsWith("http")) {
    const originalBasePath = apiConfiguration.basePath;
    if (isDefined(originalBasePath) && req.url.startsWith(originalBasePath)) {
      let endpointPath = req.url.substring(originalBasePath.length);
      if (endpointPath.startsWith("/")) {
        endpointPath = endpointPath.substring(1);
      }
      const finalUrl = `${dynamicApiBaseUrl}${endpointPath}`;
      const modifiedRequest = req.clone({ url: finalUrl });
      return next(modifiedRequest);
    } else {
      return next(req);
    }
  }
  return next(req);
};

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = (req, next) => {
  const toastService = inject(ToastService);
  const authService = inject(AuthService);
  const authTokenManagerService = inject(AuthTokenManagerService);
  const authDataService = inject(AuthDataService);
  let refreshTokenInProgress = false;
  const refreshTokenSubject = new BehaviorSubject(null);
  function addToken(req2, token) {
    return req2.clone({
      setHeaders: {
        "x-access-token": `${token}`
      }
    });
  }
  function showToastForError(errorObject) {
    switch (errorObject.errorReason) {
      case ErrorReasons.Unauthorized:
        toastService.showError("Unauthorized", errorObject.errorMessage);
        break;
      case ErrorReasons.NetworkError:
        toastService.showError("Network Error", errorObject.errorMessage);
        break;
      case ErrorReasons.ServerError:
        toastService.showError("Server Error", errorObject.errorMessage);
        break;
      case ErrorReasons.InvalidEndpoint:
        toastService.showError("Service Unavailable", errorObject.errorMessage);
        break;
      case ErrorReasons.RequestTimeout:
        toastService.showError("Request Timeout", errorObject.errorMessage);
        break;
      case ErrorReasons.TooManyLogins:
        toastService.showError("Too Many Logins", errorObject.errorMessage);
        break;
      case ErrorReasons.BadRequest:
        toastService.showError("Validation Error", errorObject.errorMessage);
        break;
      case ErrorReasons.Unknown:
        toastService.showError("Error", errorObject.errorMessage);
        break;
    }
  }
  function shouldRetryError(error) {
    if (!navigator.onLine) {
      return false;
    }
    const retryableStatuses = [0, 408, 429, 500, 502, 503, 504];
    return retryableStatuses.includes(error.status);
  }
  function createErrorObject(error) {
    if (!navigator.onLine) {
      return {
        errorReason: ErrorReasons.NetworkError,
        errorMessage: "No internet connection. Please check your network and try again.",
        token: null,
        valid: false
      };
    }
    switch (error.status) {
      case 401:
        return {
          errorReason: ErrorReasons.Unauthorized,
          errorMessage: "Invalid username or password",
          token: null,
          valid: false
        };
      case 403:
        return {
          errorReason: ErrorReasons.AccessTokenExpired,
          errorMessage: "Access token has expired",
          token: null,
          valid: false
        };
      case 404:
        return {
          errorReason: ErrorReasons.InvalidEndpoint,
          errorMessage: "The requested resource was not found",
          token: null,
          valid: false
        };
      case 408:
      case 504:
        return {
          errorReason: ErrorReasons.RequestTimeout,
          errorMessage: "The request timed out. Please try again",
          token: null,
          valid: false
        };
      case 429:
        return {
          errorReason: ErrorReasons.TooManyLogins,
          errorMessage: "Too many login attempts. Please try again later",
          token: null,
          valid: false
        };
      case 500:
      case 502:
      case 503:
        return {
          errorReason: ErrorReasons.ServerError,
          errorMessage: "Server is currently unavailable. Please try again later",
          token: null,
          valid: false
        };
      case 400: {
        let detailedMessage = error.error.message ?? "Bad request";
        if (isDefined(error.error?.data?.fields)) {
          const fieldErrors = Object.values(error.error.data.fields).map((field) => field.message).filter(Boolean).join(". ");
          if (fieldErrors) {
            detailedMessage += `: ${fieldErrors}`;
          }
        }
        return {
          errorReason: ErrorReasons.BadRequest,
          errorMessage: detailedMessage,
          token: null,
          valid: false
        };
      }
      default:
        return {
          errorReason: ErrorReasons.Unknown,
          errorMessage: "An unexpected error occurred. Please try again",
          token: null,
          valid: false
        };
    }
  }
  function handle401Error(req2, next2, refreshToken) {
    if (req2.url.includes("/auth/refresh")) {
      authDataService.forceLogout();
      return throwError(() => new Error("Refresh token request failed. Logging out."));
    }
    if (!refreshTokenInProgress) {
      refreshTokenInProgress = true;
      refreshTokenSubject.next(null);
      return authService.refreshToken(refreshToken).pipe(switchMap((authResponse) => {
        refreshTokenInProgress = false;
        refreshTokenSubject.next(authResponse.accessToken);
        authTokenManagerService.storeTokens(authResponse);
        return next2(addToken(req2, authResponse.accessToken));
      }), catchError((error) => {
        refreshTokenInProgress = false;
        authDataService.forceLogout();
        return throwError(() => new Error(`Token refresh error: ${error.message}`));
      }));
    } else {
      return refreshTokenSubject.pipe(filter((token) => token != null), take(1), switchMap((token) => next2(addToken(req2, token))));
    }
  }
  function handleError(req2, next2, error) {
    const errorObject = createErrorObject(error);
    if (error.status === 401) {
      if (req2.url.includes("/auth/signin") || req2.url.includes("/auth/refresh")) {
        showToastForError(errorObject);
        return throwError(() => errorObject);
      }
      const refreshToken = authTokenManagerService.getRefreshToken();
      return isDefined(refreshToken) ? handle401Error(req2, next2, refreshToken).pipe(catchError((refreshError) => {
        authDataService.forceLogout();
        showToastForError(errorObject);
        return throwError(() => refreshError);
      })) : (() => {
        authDataService.forceLogout();
        showToastForError(errorObject);
        return throwError(() => errorObject);
      })();
    }
    showToastForError(errorObject);
    return throwError(() => new Error(errorObject.errorMessage));
  }
  const accessToken = authTokenManagerService.getAccessToken();
  let request = req;
  if (isDefined(accessToken)) {
    request = addToken(req, accessToken);
  }
  return next(request).pipe(retry({
    count: 2,
    delay: (error, retryCount) => {
      if (shouldRetryError(error)) {
        return timer(1e3 * Math.pow(2, retryCount - 1));
      }
      throw error;
    }
  }), catchError((error) => handleError(request, next, error)));
};

// src/app/app.config.ts
function apiConfigFactory() {
  const params = { basePath: environment.apiUrls[0] };
  return new Configuration(params);
}
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Qr,
        options: { prefix: "p", darkModeSelector: "p-dark" }
      }
    }),
    provideHttpClient(withInterceptors([AuthInterceptor, ApiUrlInterceptor])),
    provideAppInitializer(() => of(initializeFeatureDefaults())),
    importProvidersFrom([
      CoreModule,
      ApiModule.forRoot(apiConfigFactory),
      ToastModule
    ]),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService,
    BroadcastMessageService,
    DialogService,
    ConfirmationService
  ]
};

// src/app/shared/components/toast/toast.component.ts
var _c09 = () => ({ width: "100%", right: "0", left: "0" });
var _c15 = (a0) => ({ "768px": a0 });
var ToastComponent = class _ToastComponent {
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 1, vars: 4, consts: [[3, "breakpoints"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction1(2, _c15, \u0275\u0275pureFunction0(1, _c09)));
    }
  }, dependencies: [Toast], styles: ["\n\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", imports: [Toast], template: `<p-toast
  [breakpoints]="{ '768px': { width: '100%', right: '0', left: '0' } }"
/>
`, styles: ["/* src/app/shared/components/toast/toast.component.scss */\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 10 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "cypherview";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-toast");
    }
  }, dependencies: [RouterOutlet, ToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, ToastComponent], template: "<router-outlet></router-outlet>\n<app-toast></app-toast>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.0.6
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

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
//# sourceMappingURL=main.js.map
