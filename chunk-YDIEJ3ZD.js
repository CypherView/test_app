import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseInput,
  BaseStyle,
  Button,
  ChevronDownIcon,
  ConnectedOverlayScrollHandler,
  D,
  Ht,
  I,
  InputText,
  Kt,
  NG_VALUE_ACCESSOR,
  OverlayService,
  PrimeTemplate,
  R,
  Ripple,
  S,
  SharedModule,
  T,
  TimesIcon,
  TranslationKeys,
  W,
  Y,
  Yt,
  b,
  blockBodyScroll,
  s,
  s2,
  unblockBodyScroll,
  ut,
  v,
  z,
  zindexutils
} from "./chunk-LKPIGFER.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-GNA4F765.js";
import {
  DEFAULT_SYSTEM_ID,
  isDefined,
  isNullOrUndefined
} from "./chunk-UOL47JT7.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-W5MMOG3B.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-Q56RWZOJ.js";

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style2 = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  theme = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 7,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("data-pc-name", "progressspinner")("data-pc-section", "root")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 9,
    consts: [["viewBox", "25 25 50 50"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275attribute("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <svg [class]="cx('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
            <circle [class]="cx('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.data-pc-name]": "'progressspinner'",
        "[attr.data-pc-section]": "'root'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var _c0 = ["data-p-icon", "chevron-up"];
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronUpIcon_BaseFactory || (\u0275ChevronUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronUpIcon)))(__ngFactoryType__ || _ChevronUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronUpIcon,
    selectors: [["", "data-p-icon", "chevron-up"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-up"]',
      standalone: true,
      template: `
        <svg:path
            d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var _c02 = ["data-p-icon", "times-circle"];
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["", "data-p-icon", "times-circle"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times-circle"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-calendar.mjs
var _c03 = ["data-p-icon", "calendar"];
var CalendarIcon = class _CalendarIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CalendarIcon_BaseFactory;
    return function CalendarIcon_Factory(__ngFactoryType__) {
      return (\u0275CalendarIcon_BaseFactory || (\u0275CalendarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CalendarIcon)))(__ngFactoryType__ || _CalendarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CalendarIcon,
    selectors: [["", "data-p-icon", "calendar"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z", "fill", "currentColor"]],
    template: function CalendarIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="calendar"]',
      standalone: true,
      template: `
        <svg:path
            d="M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronleft.mjs
var _c04 = ["data-p-icon", "chevron-left"];
var ChevronLeftIcon = class _ChevronLeftIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronLeftIcon_BaseFactory;
    return function ChevronLeftIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronLeftIcon_BaseFactory || (\u0275ChevronLeftIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronLeftIcon)))(__ngFactoryType__ || _ChevronLeftIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronLeftIcon,
    selectors: [["", "data-p-icon", "chevron-left"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 1,
    vars: 0,
    consts: [["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]],
    template: function ChevronLeftIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronLeftIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-left"]',
      standalone: true,
      template: `
        <svg:path
            d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var _c05 = ["data-p-icon", "chevron-right"];
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronRightIcon_BaseFactory || (\u0275ChevronRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronRightIcon,
    selectors: [["", "data-p-icon", "chevron-right"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-right"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/datepicker/index.mjs
var style3 = "\n    .p-datepicker {\n        display: inline-flex;\n        max-width: 100%;\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-datepicker-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.dropdown.width');\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n        background: dt('datepicker.dropdown.background');\n        border: 1px solid dt('datepicker.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('datepicker.dropdown.color');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-datepicker-dropdown:not(:disabled):hover {\n        background: dt('datepicker.dropdown.hover.background');\n        border-color: dt('datepicker.dropdown.hover.border.color');\n        color: dt('datepicker.dropdown.hover.color');\n    }\n\n    .p-datepicker-dropdown:not(:disabled):active {\n        background: dt('datepicker.dropdown.active.background');\n        border-color: dt('datepicker.dropdown.active.border.color');\n        color: dt('datepicker.dropdown.active.color');\n    }\n\n    .p-datepicker-dropdown:focus-visible {\n        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');\n        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');\n        outline-offset: dt('datepicker.dropdown.focus.ring.offset');\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) {\n        position: relative;\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker-input-icon-container {\n        cursor: pointer;\n        position: absolute;\n        top: 50%;\n        inset-inline-end: dt('form.field.padding.x');\n        margin-block-start: calc(-1 * (dt('icon.size') / 2));\n        color: dt('datepicker.input.icon.color');\n        line-height: 1;\n        z-index: 1;\n    }\n\n    .p-datepicker:has(.p-datepicker-input:disabled) .p-datepicker-input-icon-container {\n        cursor: default;\n    }\n\n    .p-datepicker-fluid {\n        display: flex;\n    }\n\n    .p-datepicker-fluid:has(.p-datepicker-dropdown) .p-datepicker-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datepicker .p-datepicker-panel {\n        min-width: 100%;\n    }\n\n    .p-datepicker-panel {\n        width: auto;\n        padding: dt('datepicker.panel.padding');\n        background: dt('datepicker.panel.background');\n        color: dt('datepicker.panel.color');\n        border: 1px solid dt('datepicker.panel.border.color');\n        border-radius: dt('datepicker.panel.border.radius');\n        box-shadow: dt('datepicker.panel.shadow');\n    }\n\n    .p-datepicker-panel-inline {\n        display: inline-block;\n        overflow-x: auto;\n        box-shadow: none;\n    }\n\n    .p-datepicker-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('datepicker.header.padding');\n        background: dt('datepicker.header.background');\n        color: dt('datepicker.header.color');\n        border-block-end: 1px solid dt('datepicker.header.border.color');\n    }\n\n    .p-datepicker-next-button:dir(rtl) {\n        order: -1;\n    }\n\n    .p-datepicker-prev-button:dir(rtl) {\n        order: 1;\n    }\n\n    .p-datepicker-title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: dt('datepicker.title.gap');\n        font-weight: dt('datepicker.title.font.weight');\n    }\n\n    .p-datepicker-select-year,\n    .p-datepicker-select-month {\n        border: none;\n        background: transparent;\n        margin: 0;\n        cursor: pointer;\n        font-weight: inherit;\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration');\n    }\n\n    .p-datepicker-select-month {\n        padding: dt('datepicker.select.month.padding');\n        color: dt('datepicker.select.month.color');\n        border-radius: dt('datepicker.select.month.border.radius');\n    }\n\n    .p-datepicker-select-year {\n        padding: dt('datepicker.select.year.padding');\n        color: dt('datepicker.select.year.color');\n        border-radius: dt('datepicker.select.year.border.radius');\n    }\n\n    .p-datepicker-select-month:enabled:hover {\n        background: dt('datepicker.select.month.hover.background');\n        color: dt('datepicker.select.month.hover.color');\n    }\n\n    .p-datepicker-select-year:enabled:hover {\n        background: dt('datepicker.select.year.hover.background');\n        color: dt('datepicker.select.year.hover.color');\n    }\n\n    .p-datepicker-select-month:focus-visible,\n    .p-datepicker-select-year:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-calendar-container {\n        display: flex;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar {\n        flex: 1 1 auto;\n        border-inline-start: 1px solid dt('datepicker.group.border.color');\n        padding-inline-end: dt('datepicker.group.gap');\n        padding-inline-start: dt('datepicker.group.gap');\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {\n        padding-inline-start: 0;\n        border-inline-start: 0 none;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {\n        padding-inline-end: 0;\n    }\n\n    .p-datepicker-day-view {\n        width: 100%;\n        border-collapse: collapse;\n        font-size: 1rem;\n        margin: dt('datepicker.day.view.margin');\n    }\n\n    .p-datepicker-weekday-cell {\n        padding: dt('datepicker.week.day.padding');\n    }\n\n    .p-datepicker-weekday {\n        font-weight: dt('datepicker.week.day.font.weight');\n        color: dt('datepicker.week.day.color');\n    }\n\n    .p-datepicker-day-cell {\n        padding: dt('datepicker.date.padding');\n    }\n\n    .p-datepicker-day {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        margin: 0 auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.date.width');\n        height: dt('datepicker.date.height');\n        border-radius: dt('datepicker.date.border.radius');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border: 1px solid transparent;\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {\n        background: dt('datepicker.date.hover.background');\n        color: dt('datepicker.date.hover.color');\n    }\n\n    .p-datepicker-day:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day {\n        background: dt('datepicker.today.background');\n        color: dt('datepicker.today.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-weeknumber {\n        text-align: center;\n    }\n\n    .p-datepicker-month-view {\n        margin: dt('datepicker.month.view.margin');\n    }\n\n    .p-datepicker-month {\n        width: 33.3%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.month.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.month.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-month-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-month:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-year-view {\n        margin: dt('datepicker.year.view.margin');\n    }\n\n    .p-datepicker-year {\n        width: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.year.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.year.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-year-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-year:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-buttonbar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('datepicker.buttonbar.padding');\n        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');\n    }\n\n    .p-datepicker-buttonbar .p-button {\n        width: auto;\n    }\n\n    .p-datepicker-time-picker {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-block-start: 1px solid dt('datepicker.time.picker.border.color');\n        padding: 0;\n        gap: dt('datepicker.time.picker.gap');\n    }\n\n    .p-datepicker-calendar-container + .p-datepicker-time-picker {\n        padding: dt('datepicker.time.picker.padding');\n    }\n\n    .p-datepicker-time-picker > div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        gap: dt('datepicker.time.picker.button.gap');\n    }\n\n    .p-datepicker-time-picker span {\n        font-size: 1rem;\n    }\n\n    .p-datepicker-timeonly .p-datepicker-time-picker {\n        border-block-start: 0 none;\n    }\n\n    .p-datepicker-time-picker:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.sm.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.lg.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-datepicker-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        color: dt('form.field.icon.color');\n        inset-inline-end: dt('form.field.padding.x');\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon {\n        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {\n        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container):has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));\n    }\n\n    .p-inputgroup .p-datepicker-dropdown {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child:has(.p-datepicker-dropdown) > .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child .p-datepicker-dropdown {\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
var _c06 = ["date"];
var _c1 = ["header"];
var _c2 = ["footer"];
var _c3 = ["disabledDate"];
var _c4 = ["decade"];
var _c5 = ["previousicon"];
var _c6 = ["nexticon"];
var _c7 = ["triggericon"];
var _c8 = ["clearicon"];
var _c9 = ["decrementicon"];
var _c10 = ["incrementicon"];
var _c11 = ["inputicon"];
var _c12 = ["inputfield"];
var _c13 = ["contentWrapper"];
var _c14 = [[["p-header"]], [["p-footer"]]];
var _c15 = ["p-header", "p-footer"];
var _c16 = (a0) => ({
  clickCallBack: a0
});
var _c17 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c18 = (a0) => ({
  value: "visible",
  params: a0
});
var _c19 = (a0) => ({
  visibility: a0
});
var _c20 = (a0) => ({
  $implicit: a0
});
var _c21 = (a0) => ({
  date: a0
});
var _c22 = (a0, a1) => ({
  month: a0,
  index: a1
});
var _c23 = (a0) => ({
  year: a0
});
function DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 10);
    \u0275\u0275listener("click", function DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
  }
}
function DatePicker_ng_template_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_ng_template_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function DatePicker_ng_template_0_ng_container_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275template(1, DatePicker_ng_template_0_ng_container_2_span_2_1_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("clearIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template, 1, 2, "svg", 8)(2, DatePicker_ng_template_0_ng_container_2_span_2_Template, 2, 3, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_0_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.icon);
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 17);
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_0_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_ng_template_0_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_ng_template_0_button_3_ng_container_2__svg_svg_1_Template, 1, 0, "svg", 16)(2, DatePicker_ng_template_0_button_3_ng_container_2_2_Template, 1, 0, null, 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.triggerIconTemplate && !ctx_r1._triggerIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.triggerIconTemplate || ctx_r1._triggerIconTemplate);
  }
}
function DatePicker_ng_template_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DatePicker_ng_template_0_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const inputfield_r6 = \u0275\u0275reference(1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonClick($event, inputfield_r6));
    });
    \u0275\u0275template(1, DatePicker_ng_template_0_button_3_span_1_Template, 1, 1, "span", 14)(2, DatePicker_ng_template_0_button_3_ng_container_2_Template, 3, 2, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("dropdown"));
    \u0275\u0275property("disabled", ctx_r1.$disabled());
    \u0275\u0275attribute("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", ctx_r1.overlayVisible ?? false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.icon);
  }
}
function DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275listener("click", function DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template_svg_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onButtonClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("inputIcon"));
  }
}
function DatePicker_ng_template_0_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275template(2, DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template, 1, 2, "svg", 18)(3, DatePicker_ng_template_0_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("inputIconContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.inputIconTemplate && !ctx_r1._inputIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.inputIconTemplate || ctx_r1._inputIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c16, ctx_r1.onButtonClick.bind(ctx_r1)));
  }
}
function DatePicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 5, 0);
    \u0275\u0275listener("focus", function DatePicker_ng_template_0_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputFocus($event));
    })("keydown", function DatePicker_ng_template_0_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputKeydown($event));
    })("click", function DatePicker_ng_template_0_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputClick());
    })("blur", function DatePicker_ng_template_0_Template_input_blur_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputBlur($event));
    })("input", function DatePicker_ng_template_0_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUserInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DatePicker_ng_template_0_ng_container_2_Template, 3, 2, "ng-container", 6)(3, DatePicker_ng_template_0_button_3_Template, 3, 8, "button", 7)(4, DatePicker_ng_template_0_ng_container_4_Template, 4, 7, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("pcInputText"), ctx_r1.inputStyleClass));
    \u0275\u0275property("pSize", ctx_r1.size())("value", ctx_r1.inputFieldValue)("ngStyle", ctx_r1.inputStyle)("pAutoFocus", ctx_r1.autofocus)("variant", ctx_r1.$variant())("fluid", ctx_r1.hasFluid)("invalid", ctx_r1.invalid());
    \u0275\u0275attribute("size", ctx_r1.inputSize())("id", ctx_r1.inputId)("name", ctx_r1.name())("aria-required", ctx_r1.required())("aria-expanded", ctx_r1.overlayVisible ?? false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("required", ctx_r1.required() ? "" : void 0)("readonly", ctx_r1.readonlyInput ? "" : void 0)("disabled", ctx_r1.$disabled() ? "" : void 0)("placeholder", ctx_r1.placeholder)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showClear && !ctx_r1.$disabled() && ctx_r1.value != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function DatePicker_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 29);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_ng_container_4_div_2_ng_template_3__svg_svg_0_Template, 1, 0, "svg", 28)(1, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_Template, 2, 1, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DatePicker_div_1_ng_container_4_div_2_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.switchToMonthView($event));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_button_6_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("selectMonth"));
    \u0275\u0275attribute("disabled", ctx_r1.switchViewButtonDisabled() ? "" : void 0)("aria-label", ctx_r1.getTranslation("chooseMonth"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMonthName(month_r11.month), " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DatePicker_div_1_ng_container_4_div_2_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.switchToYearView($event));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_button_7_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("selectYear"));
    \u0275\u0275attribute("disabled", ctx_r1.switchViewButtonDisabled() ? "" : void 0)("aria-label", ctx_r1.getTranslation("chooseYear"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getYear(month_r11), " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1]);
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_1_Template, 2, 2, "ng-container", 6)(2, DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_2_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("decade"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.decadeTemplate && !ctx_r1._decadeTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decadeTemplate || ctx_r1._decadeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c20, ctx_r1.yearPickerValues));
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 32);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_Template, 1, 0, null, 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_ng_container_4_div_2_ng_template_10__svg_svg_0_Template, 1, 0, "svg", 31)(1, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("weekHeader"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTranslation("weekHeader"));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const weekDay_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("weekDayCell"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("weekDay"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(weekDay_r13);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const j_r14 = \u0275\u0275nextContext().index;
    const month_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("weekNumber"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("weekLabelContainer"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", month_r11.weekNumbers[j_r14], " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(date_r16.day);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dateTemplate || ctx_r1._dateTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c20, date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.disabledDateTemplate || ctx_r1._disabledDateTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c20, date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", date_r16.day, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275listener("click", function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const date_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.onDateSelect($event, date_r16));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const date_r16 = \u0275\u0275nextContext().$implicit;
      const i_r17 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDateCellKeydown($event, date_r16, i_r17));
    });
    \u0275\u0275template(2, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 6)(3, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 6)(4, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template, 2, 1, "div", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.dayClass(date_r16));
    \u0275\u0275attribute("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r16)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dateTemplate && !ctx_r1._dateTemplate && (date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !date_r16.selectable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSelected(date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template, 6, 6, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.cx("dayCell", \u0275\u0275pureFunction1(4, _c21, date_r16)));
    \u0275\u0275attribute("aria-label", date_r16.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", date_r16.otherMonth ? ctx_r1.showOtherMonths : true);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_1_Template, 3, 5, "td", 22)(2, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_Template, 2, 6, "td", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showWeek);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r18);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 33)(1, "thead")(2, "tr");
    \u0275\u0275template(3, DatePicker_div_1_ng_container_4_div_2_table_12_th_3_Template, 3, 3, "th", 22)(4, DatePicker_div_1_ng_container_4_div_2_table_12_th_4_Template, 3, 5, "th", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody");
    \u0275\u0275template(6, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_Template, 3, 2, "tr", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const month_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("dayView"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showWeek);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weekDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", month_r11.dates);
  }
}
function DatePicker_div_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "p-button", 24);
    \u0275\u0275listener("keydown", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_onClick_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPrevButtonClick($event));
    });
    \u0275\u0275template(3, DatePicker_div_1_ng_container_4_div_2_ng_template_3_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275template(6, DatePicker_div_1_ng_container_4_div_2_button_6_Template, 2, 5, "button", 25)(7, DatePicker_div_1_ng_container_4_div_2_button_7_Template, 2, 5, "button", 25)(8, DatePicker_div_1_ng_container_4_div_2_span_8_Template, 3, 7, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 26);
    \u0275\u0275listener("keydown", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_keydown_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_onClick_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNextButtonClick($event));
    });
    \u0275\u0275template(10, DatePicker_div_1_ng_container_4_div_2_ng_template_10_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, DatePicker_div_1_ng_container_4_div_2_table_12_Template, 7, 5, "table", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("calendar"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcPrevButton"))("ngStyle", \u0275\u0275pureFunction1(16, _c19, i_r17 === 0 ? "visible" : "hidden"))("ariaLabel", ctx_r1.prevIconAriaLabel);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView !== "year");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "year");
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcNextButton"))("ngStyle", \u0275\u0275pureFunction1(18, _c19, i_r17 === ctx_r1.months.length - 1 ? "visible" : "hidden"))("ariaLabel", ctx_r1.nextIconAriaLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.currentView === "date");
  }
}
function DatePicker_div_1_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r21, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275listener("click", function DatePicker_div_1_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMonthSelect($event, i_r20));
    })("keydown", function DatePicker_div_1_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onMonthCellKeydown($event, i_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, DatePicker_div_1_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("month", \u0275\u0275pureFunction2(4, _c22, m_r21, i_r20)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r21, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMonthSelected(i_r20));
  }
}
function DatePicker_div_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_3_span_1_Template, 3, 7, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("monthView"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.monthPickerValues());
  }
}
function DatePicker_div_1_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r23, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275listener("click", function DatePicker_div_1_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const y_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onYearSelect($event, y_r23));
    })("keydown", function DatePicker_div_1_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const y_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onYearCellKeydown($event, y_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, DatePicker_div_1_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("year", \u0275\u0275pureFunction1(4, _c23, y_r23)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r23, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isYearSelected(y_r23));
  }
}
function DatePicker_div_1_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DatePicker_div_1_ng_container_4_div_4_span_1_Template, 3, 6, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("yearView"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.yearPickerValues());
  }
}
function DatePicker_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275template(2, DatePicker_div_1_ng_container_4_div_2_Template, 13, 20, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DatePicker_div_1_ng_container_4_div_3_Template, 2, 3, "div", 22)(4, DatePicker_div_1_ng_container_4_div_4_Template, 2, 3, "div", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("calendarContainer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.months);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "month");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentView === "year");
  }
}
function DatePicker_div_1_div_5_ng_template_3__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function DatePicker_div_1_div_5_ng_template_3_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_3__svg_svg_0_Template, 1, 0, "svg", 44)(1, DatePicker_div_1_div_5_ng_template_3_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_1_div_5_ng_template_9__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 47);
  }
}
function DatePicker_div_1_div_5_ng_template_9_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_9_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_9_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_9__svg_svg_0_Template, 1, 0, "svg", 46)(1, DatePicker_div_1_div_5_ng_template_9_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_template_16__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function DatePicker_div_1_div_5_ng_template_16_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_16_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_16_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_16__svg_svg_0_Template, 1, 0, "svg", 44)(1, DatePicker_div_1_div_5_ng_template_16_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_1_div_5_ng_template_22__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 47);
  }
}
function DatePicker_div_1_div_5_ng_template_22_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_22_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_22_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_ng_template_22__svg_svg_0_Template, 1, 0, "svg", 46)(1, DatePicker_div_1_div_5_ng_template_22_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_25_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_25_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_25_ng_template_2__svg_svg_0_Template, 1, 0, "svg", 44)(1, DatePicker_div_1_div_5_div_25_ng_template_2_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementContainerEnd();
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 47);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_25_ng_template_8_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_25_ng_template_8_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_25_ng_template_8__svg_svg_0_Template, 1, 0, "svg", 46)(1, DatePicker_div_1_div_5_div_25_ng_template_8_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.incrementSecond($event));
    })("keydown.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_space_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.incrementSecond($event));
    })("mousedown", function DatePicker_div_1_div_5_div_25_Template_p_button_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseup_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_enter_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_space_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(2, DatePicker_div_1_div_5_div_25_ng_template_2_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275template(5, DatePicker_div_1_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_enter_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementSecond($event));
    })("keydown.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_space_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.decrementSecond($event));
    })("mousedown", function DatePicker_div_1_div_5_div_25_Template_p_button_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseup_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_enter_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_space_7_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseleave_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(8, DatePicker_div_1_div_5_div_25_ng_template_8_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("secondPicker"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcIncrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextSecond"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentSecond < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentSecond);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcDecrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevSecond"));
  }
}
function DatePicker_div_1_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 45);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_27_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_27_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_27_ng_template_2__svg_svg_0_Template, 1, 0, "svg", 44)(1, DatePicker_div_1_div_5_div_27_ng_template_2_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 47);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_27_ng_template_7_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_27_ng_template_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DatePicker_div_1_div_5_div_27_ng_template_7__svg_svg_0_Template, 1, 0, "svg", 46)(1, DatePicker_div_1_div_5_div_27_ng_template_7_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-button", 48);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_5_div_27_Template_p_button_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_enter_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    });
    \u0275\u0275template(2, DatePicker_div_1_div_5_div_27_ng_template_2_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 49);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("click", function DatePicker_div_1_div_5_div_27_Template_p_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAMPM($event));
    });
    \u0275\u0275template(7, DatePicker_div_1_div_5_div_27_ng_template_7_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("ampmPicker"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcIncrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("am"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pm ? "PM" : "AM");
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcDecrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("pm"));
  }
}
function DatePicker_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementHour($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementHour($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_2_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_2_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(3, DatePicker_div_1_div_5_ng_template_3_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275template(6, DatePicker_div_1_div_5_ng_container_6_Template, 2, 0, "ng-container", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementHour($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementHour($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(9, DatePicker_div_1_div_5_ng_template_9_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 43)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementMinute($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.incrementMinute($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(16, DatePicker_div_1_div_5_ng_template_16_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275template(19, DatePicker_div_1_div_5_ng_container_19_Template, 2, 0, "ng-container", 6);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-button", 42);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementMinute($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decrementMinute($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_21_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    \u0275\u0275template(22, DatePicker_div_1_div_5_ng_template_22_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, DatePicker_div_1_div_5_div_24_Template, 3, 3, "div", 22)(25, DatePicker_div_1_div_5_div_25_Template, 10, 8, "div", 22)(26, DatePicker_div_1_div_5_div_26_Template, 3, 3, "div", 22)(27, DatePicker_div_1_div_5_div_27_Template, 9, 7, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("timePicker"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("hourPicker"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcIncrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextHour"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentHour < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentHour);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcDecrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevHour"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.timeSeparator);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("minutePicker"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcIncrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("nextMinute"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentMinute < 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentMinute);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcDecrementButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.getTranslation("prevMinute"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hourFormat == "12");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hourFormat == "12");
  }
}
function DatePicker_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-button", 50);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_6_Template_p_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_6_Template_p_button_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTodayButtonClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 50);
    \u0275\u0275listener("keydown", function DatePicker_div_1_div_6_Template_p_button_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_6_Template_p_button_onClick_2_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClearButtonClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("buttonbar"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcTodayButton"))("label", ctx_r1.getTranslation("today"))("ngClass", ctx_r1.todayButtonStyleClass);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cx("pcClearButton"))("label", ctx_r1.getTranslation("clear"))("ngClass", ctx_r1.clearButtonStyleClass);
  }
}
function DatePicker_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DatePicker_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21, 1);
    \u0275\u0275listener("@overlayAnimation.start", function DatePicker_div_1_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function DatePicker_div_1_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationDone($event));
    })("click", function DatePicker_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, DatePicker_div_1_ng_container_3_Template, 1, 0, "ng-container", 12)(4, DatePicker_div_1_ng_container_4_Template, 5, 5, "ng-container", 6)(5, DatePicker_div_1_div_5_Template, 28, 23, "div", 22)(6, DatePicker_div_1_div_6_Template, 3, 8, "div", 22);
    \u0275\u0275projection(7, 1);
    \u0275\u0275template(8, DatePicker_div_1_ng_container_8_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("panel"), ctx_r1.panelStyleClass));
    \u0275\u0275property("ngStyle", ctx_r1.panelStyle)("@overlayAnimation", \u0275\u0275pureFunction1(17, _c18, \u0275\u0275pureFunction2(14, _c17, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true);
    \u0275\u0275attribute("id", ctx_r1.panelId)("aria-label", ctx_r1.getTranslation("chooseDate"))("role", ctx_r1.inline ? null : "dialog")("aria-modal", ctx_r1.inline ? null : "true");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.timeOnly);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.showTime || ctx_r1.timeOnly) && ctx_r1.currentView === "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showButtonBar);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var theme = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    .p-datepicker.ng-invalid.ng-dirty .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: () => ({
    position: "relative"
  })
};
var classes2 = {
  root: ({
    instance
  }) => ["p-datepicker p-component p-inputwrapper", {
    "p-invalid": instance.invalid(),
    "p-datepicker-fluid": instance.hasFluid,
    "p-inputwrapper-filled": instance.$filled(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputwrapper-focus": instance.focus || instance.overlayVisible,
    "p-focus": instance.focus || instance.overlayVisible
  }],
  pcInputText: "p-datepicker-input",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: ({
    instance
  }) => ["p-datepicker-panel p-component", {
    "p-datepicker-panel p-component": true,
    "p-datepicker-panel-inline": instance.inline,
    "p-disabled": instance.$disabled(),
    "p-datepicker-timeonly": instance.timeOnly
  }],
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: ({
    date
  }) => ["p-datepicker-day-cell", {
    "p-datepicker-other-month": date.otherMonth,
    "p-datepicker-today": date.today
  }],
  day: ({
    instance,
    date
  }) => {
    let selectedDayClass = "";
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      const startDate = instance.value[0];
      const endDate = instance.value[1];
      const isStart = startDate && date.year === startDate.getFullYear() && date.month === startDate.getMonth() && date.day === startDate.getDate();
      const isEnd = endDate && date.year === endDate.getFullYear() && date.month === endDate.getMonth() && date.day === endDate.getDate();
      selectedDayClass = isStart || isEnd ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
    }
    return {
      "p-datepicker-day": true,
      "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      "p-disabled": instance.$disabled() || !date.selectable,
      [selectedDayClass]: true
    };
  },
  monthView: "p-datepicker-month-view",
  month: ({
    instance,
    index
  }) => ["p-datepicker-month", {
    "p-datepicker-month-selected": instance.isMonthSelected(index),
    "p-disabled": instance.isMonthDisabled(index)
  }],
  yearView: "p-datepicker-year-view",
  year: ({
    instance,
    year
  }) => ["p-datepicker-year", {
    "p-datepicker-year-selected": instance.isYearSelected(year),
    "p-disabled": instance.isYearDisabled(year)
  }],
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button",
  clearIcon: "p-datepicker-clear-icon"
};
var DatePickerStyle = class _DatePickerStyle extends BaseStyle {
  name = "datepicker";
  theme = theme;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DatePickerStyle_BaseFactory;
    return function DatePickerStyle_Factory(__ngFactoryType__) {
      return (\u0275DatePickerStyle_BaseFactory || (\u0275DatePickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DatePickerStyle)))(__ngFactoryType__ || _DatePickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DatePickerStyle,
    factory: _DatePickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerStyle, [{
    type: Injectable
  }], null, null);
})();
var DatePickerClasses;
(function(DatePickerClasses2) {
  DatePickerClasses2["root"] = "p-datepicker";
  DatePickerClasses2["pcInputText"] = "p-datepicker-input";
  DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
  DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
  DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
  DatePickerClasses2["panel"] = "p-datepicker-panel";
  DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
  DatePickerClasses2["calendar"] = "p-datepicker-calendar";
  DatePickerClasses2["header"] = "p-datepicker-header";
  DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
  DatePickerClasses2["title"] = "p-datepicker-title";
  DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
  DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
  DatePickerClasses2["decade"] = "p-datepicker-decade";
  DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
  DatePickerClasses2["dayView"] = "p-datepicker-day-view";
  DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
  DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
  DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
  DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
  DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
  DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
  DatePickerClasses2["day"] = "p-datepicker-day";
  DatePickerClasses2["monthView"] = "p-datepicker-month-view";
  DatePickerClasses2["month"] = "p-datepicker-month";
  DatePickerClasses2["yearView"] = "p-datepicker-year-view";
  DatePickerClasses2["year"] = "p-datepicker-year";
  DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
  DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
  DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
  DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
  DatePickerClasses2["separator"] = "p-datepicker-separator";
  DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
  DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
  DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
  DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
  DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
  DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
  DatePickerClasses2["clearIcon"] = "p-datepicker-clear-icon";
})(DatePickerClasses || (DatePickerClasses = {}));
var DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker),
  multi: true
};
var DatePicker = class _DatePicker extends BaseInput {
  zone;
  overlayService;
  iconDisplay = "button";
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Placeholder text for the input.
   * @group Props
   */
  placeholder;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the icon button for accessibility.
   * @group Props
   */
  iconAriaLabel;
  /**
   * Format of the date which can also be defined at locale settings.
   * @group Props
   */
  get dateFormat() {
    return this._dateFormat;
  }
  set dateFormat(value) {
    this._dateFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Separator for multiple selection mode.
   * @group Props
   */
  multipleSeparator = ",";
  /**
   * Separator for joining start and end dates on range selection mode.
   * @group Props
   */
  rangeSeparator = "-";
  /**
   * When enabled, displays the datepicker as inline. Default is false for popup mode.
   * @group Props
   */
  inline = false;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @group Props
   */
  showOtherMonths = true;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @group Props
   */
  selectOtherMonths;
  /**
   * When enabled, displays a button with icon next to input.
   * @group Props
   */
  showIcon;
  /**
   * Icon of the datepicker button.
   * @group Props
   */
  icon;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @group Props
   */
  readonlyInput;
  /**
   * The cutoff year for determining the century for a date.
   * @group Props
   */
  shortYearCutoff = "+10";
  /**
   * Specifies 12 or 24 hour format.
   * @group Props
   */
  get hourFormat() {
    return this._hourFormat;
  }
  set hourFormat(value) {
    this._hourFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Whether to display timepicker only.
   * @group Props
   */
  timeOnly;
  /**
   * Hours to change per step.
   * @group Props
   */
  stepHour = 1;
  /**
   * Minutes to change per step.
   * @group Props
   */
  stepMinute = 1;
  /**
   * Seconds to change per step.
   * @group Props
   */
  stepSecond = 1;
  /**
   * Whether to show the seconds in time picker.
   * @group Props
   */
  showSeconds = false;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @group Props
   */
  showOnFocus = true;
  /**
   * When enabled, datepicker will show week numbers.
   * @group Props
   */
  showWeek = false;
  /**
   * When enabled, datepicker will start week numbers from first day of the year.
   * @group Props
   */
  startWeekFromFirstDayOfYear = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Type of the value to write back to ngModel, default is date and alternative is string.
   * @group Props
   */
  dataType = "date";
  /**
   * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
   * @group Props
   */
  selectionMode = "single";
  /**
   * Maximum number of selectable dates in multiple mode.
   * @group Props
   */
  maxDateCount;
  /**
   * Whether to display today and clear buttons at the footer
   * @group Props
   */
  showButtonBar;
  /**
   * Style class of the today button.
   * @group Props
   */
  todayButtonStyleClass;
  /**
   * Style class of the clear button.
   * @group Props
   */
  clearButtonStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
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
   * Style class of the datetimepicker container element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the datetimepicker container element.
   * @group Props
   */
  panelStyle;
  /**
   * Keep invalid value when input blur.
   * @group Props
   */
  keepInvalid = false;
  /**
   * Whether to hide the overlay on date selection.
   * @group Props
   */
  hideOnDateTimeSelect = true;
  /**
   * When enabled, datepicker overlay is displayed as optimized for touch devices.
   * @group Props
   */
  touchUI;
  /**
   * Separator of time selector.
   * @group Props
   */
  timeSeparator = ":";
  /**
   * When enabled, can only focus on elements inside the datepicker.
   * @group Props
   */
  focusTrap = true;
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * The minimum selectable date.
   * @group Props
   */
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The maximum selectable date.
   * @group Props
   */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with dates that should be disabled (not selectable).
   * @group Props
   */
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with weekday numbers that should be disabled (not selectable).
   * @group Props
   */
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Whether to display timepicker.
   * @group Props
   */
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === void 0) {
      this.initTime(this.value || /* @__PURE__ */ new Date());
    }
    this.updateInputfield();
  }
  /**
   * An array of options for responsive design.
   * @group Props
   */
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Number of months to display.
   * @group Props
   */
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Defines the first of the week for various date calculations.
   * @group Props
   */
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  /**
   * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
   * @group Props
   */
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  /**
   * Set the date to highlight on first opening if the field is blank.
   * @group Props
   */
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || /* @__PURE__ */ new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke on focus of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when date panel closed.
   * @param {Event} event - Mouse event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on date select.
   * @param {Date} date - date value.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when input field cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when input field is being typed.
   * @param {Event} event - browser event
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when today button is clicked.
   * @param {Date} date - today as a date instance.
   * @group Emits
   */
  onTodayClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onClearClick = new EventEmitter();
  /**
   * Callback to invoke when a month is changed using the navigators.
   * @param {DatePickerMonthChangeEvent} event - custom month change event.
   * @group Emits
   */
  onMonthChange = new EventEmitter();
  /**
   * Callback to invoke when a year is changed using the navigators.
   * @param {DatePickerYearChangeEvent} event - custom year change event.
   * @group Emits
   */
  onYearChange = new EventEmitter();
  /**
   * Callback to invoke when clicked outside of the date panel.
   * @group Emits
   */
  onClickOutside = new EventEmitter();
  /**
   * Callback to invoke when datepicker panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  inputfieldViewChild;
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus && !this.inline) {
          this.initFocusableCell();
        }
      }
    }
  }
  _componentStyle = inject(DatePickerStyle);
  contentViewChild;
  value;
  dates;
  months;
  weekDays;
  currentMonth;
  currentYear;
  currentHour;
  currentMinute;
  currentSecond;
  p;
  pm;
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus;
  isKeydown;
  _minDate;
  _maxDate;
  _dateFormat;
  _hourFormat = "24";
  _showTime;
  _yearRange;
  preventDocumentListener;
  dayClass(date) {
    return this._componentStyle.classes.day({
      instance: this,
      date
    });
  }
  /**
   * Custom template for date cells.
   * @group Templates
   */
  dateTemplate;
  /**
   * Custom template for header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom template for footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom template for disabled date cells.
   * @group Templates
   */
  disabledDateTemplate;
  /**
   * Custom template for decade view.
   * @group Templates
   */
  decadeTemplate;
  /**
   * Custom template for previous month icon.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom template for next month icon.
   * @group Templates
   */
  nextIconTemplate;
  /**
   * Custom template for trigger icon.
   * @group Templates
   */
  triggerIconTemplate;
  /**
   * Custom template for clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom template for decrement icon.
   * @group Templates
   */
  decrementIconTemplate;
  /**
   * Custom template for increment icon.
   * @group Templates
   */
  incrementIconTemplate;
  /**
   * Custom template for input icon.
   * @group Templates
   */
  inputIconTemplate;
  _dateTemplate;
  _headerTemplate;
  _footerTemplate;
  _disabledDateTemplate;
  _decadeTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  _triggerIconTemplate;
  _clearIconTemplate;
  _decrementIconTemplate;
  _incrementIconTemplate;
  _inputIconTemplate;
  _disabledDates;
  _disabledDays;
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  _responsiveOptions;
  currentView;
  attributeSelector;
  panelId;
  _numberOfMonths = 1;
  _firstDayOfWeek;
  _view = "date";
  preventFocus;
  _defaultDate;
  _focusKey = null;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
  }
  constructor(zone, overlayService) {
    super();
    this.zone = zone;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    super.ngOnInit();
    this.attributeSelector = s2("pn_id_");
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView = this.view;
    if (this.view === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
      if (!this.$disabled() && !this.inline) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          if (this.contentViewChild && this.contentViewChild.nativeElement) {
            this.contentViewChild.nativeElement.style.width = v(this.el?.nativeElement) + "px";
          }
        }
      }
    }
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "date":
          this._dateTemplate = item.template;
          break;
        case "decade":
          this._decadeTemplate = item.template;
          break;
        case "disabledDate":
          this._disabledDateTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "inputicon":
          this._inputIconTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        case "triggericon":
          this._triggerIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "decrementicon":
          this._decrementIconTemplate = item.template;
          break;
        case "incrementicon":
          this._incrementIconTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._dateTemplate = item.template;
          break;
      }
    });
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 12;
        y = year + Math.floor((month + i) / 12);
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    if (this.startWeekFromFirstDayOfYear) {
      let firstDayOfWeek = +this.getFirstDateOfWeek();
      checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
    } else {
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    }
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.$disabled() || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.hideOnDateTimeSelect && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) {
      setTimeout(() => {
        event2.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
    else return true;
  }
  onMonthSelect(event2, index) {
    if (this.view === "month") {
      this.onDateSelect(event2, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view === "year") {
      this.onDateSelect(event2, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + " ";
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.writeModelValue(formattedValue);
    this.inputFieldValue = formattedValue;
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  inputFieldValue = null;
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    const isDateValid = this.isValidDateForTimeConstraints(date);
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += " " + this.formatTime(date);
        }
      }
    } else if (this.dataType === "string") {
      formattedValue = date;
    }
    formattedValue = isDateValid ? formattedValue : "";
    return formattedValue;
  }
  formatDateMetaToDate(dateMeta) {
    return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
  }
  formatDateKey(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == "12") {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = this.formatDateMetaToDate(dateMeta);
    if (this.showTime) {
      if (this.hourFormat == "12") {
        if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);
        else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == "date") {
      this.writeModelValue(this.value);
      this.onModelChange(this.value);
    } else if (this.dataType == "string") {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) {
          stringArrValue = this.value.map((date) => this.formatDateTime(date));
        }
        this.writeModelValue(stringArrValue);
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (!this.isComparable()) return false;
    if (this.isMultipleSelection()) {
      return this.value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === this.currentYear);
    } else if (this.isRangeSelection()) {
      if (!this.value[1]) {
        return this.value[0]?.getFullYear() === this.currentYear && this.value[0]?.getMonth() === month;
      } else {
        const currentDate = new Date(this.currentYear, month, 1);
        const startDate = new Date(this.value[0].getFullYear(), this.value[0].getMonth(), 1);
        const endDate = new Date(this.value[1].getFullYear(), this.value[1].getMonth(), 1);
        return currentDate >= startDate && currentDate <= endDate;
      }
    } else {
      return this.value.getMonth() === month && this.value.getFullYear() === this.currentYear;
    }
  }
  isMonthDisabled(month, year) {
    const yearToCheck = year ?? this.currentYear;
    for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
      if (this.isSelectable(day, month, yearToCheck, false)) {
        return false;
      }
    }
    return true;
  }
  isYearDisabled(year) {
    return Array(12).fill(0).every((v2, month) => this.isMonthDisabled(month, year));
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && T(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (T(start) && T(end)) {
      let date = this.formatDateMetaToDate(dateMeta);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === "single";
  }
  isRangeSelection() {
    return this.selectionMode === "range";
  }
  isMultipleSelection() {
    return this.selectionMode === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year && this.currentView != "year") {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event2) {
    this.focus = false;
    this.onBlur.emit(event2);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
    if (this.$disabled()) {
      return;
    }
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.value = null;
    this.inputFieldValue = null;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.updateInputfield();
    this.onClear.emit();
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation("monthNames")[index];
  }
  getYear(month) {
    return this.currentView === "month" ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.$disabled();
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      //tab
      case 9:
        if (!this.inline) {
          this.trapFocus(event2);
        }
        if (this.inline) {
          const headerElements = z(this.el?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (this.timeOnly) {
            return;
          } else {
            if (element == headerElements.children[headerElements?.children?.length - 1]) {
              this.initFocusableCell();
            }
          }
        }
        break;
      //escape
      case 27:
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event2);
    } else if (event2.keyCode === 27) {
      if (this.overlayVisible) {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild) {
      b(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event2, dateMeta, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    const currentDate = this.formatDateMetaToDate(dateMeta);
    switch (event2.which) {
      //down arrow
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = Ht(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //up arrow
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = Ht(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          let focusCell = prevCell.children[0];
          if (R(focusCell, "p-disabled") || R(focusCell.parentElement, "p-datepicker-weeknumber")) {
            this.navigateToMonth(true, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(true, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigateToMonth(false, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(false, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onDateSelect(event2, dateMeta);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      // page up
      case 33: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      // page down
      case 34: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      //home
      case 36:
        cellContent.tabIndex = "-1";
        const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const firstDayDateKey = this.formatDateKey(firstDayDate);
        const firstDayCell = z(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (firstDayCell) {
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        }
        event2.preventDefault();
        break;
      //end
      case 35:
        cellContent.tabIndex = "-1";
        const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayDateKey = this.formatDateKey(lastDayDate);
        const lastDayCell = z(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (lastDayDate) {
          lastDayCell.tabIndex = "0";
          lastDayCell.focus();
        }
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = Ht(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = Ht(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        this.trapFocus(event2);
        break;
      }
      default:
        break;
    }
  }
  navigateToMonth(prev, groupIndex, focusKey) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this._focusKey = focusKey;
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        if (focusKey) {
          const firstDayCell = z(prevMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let cells = Y(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          let focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this._focusKey = focusKey;
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        if (focusKey) {
          const firstDayCell = z(nextMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let focusCell = z(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) z(this.contentViewChild.nativeElement, ".p-datepicker-prev-button").focus();
        else z(this.contentViewChild.nativeElement, ".p-datepicker-next-button").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === "month") {
            cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cells = Y(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === "month") {
            cell = z(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cell = z(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cell = z(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
      this._focusKey = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === "month") {
      let cells = Y(contentEl, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
      let selectedCell = z(contentEl, ".p-datepicker-month-view .p-datepicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = Y(contentEl, '.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else if (this.currentView === "year") {
      let cells = Y(contentEl, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
      let selectedCell = z(contentEl, ".p-datepicker-year-view .p-datepicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = Y(contentEl, '.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else {
      cell = z(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = z(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell) cell = todayCell;
        else cell = z(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.$disabled()) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = b(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1) return this.hideOverlay();
              else if (focusedIndex === 0) return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1) {
            if (this.timeOnly) {
              focusableElements[0].focus();
            } else {
              let spanIndex = 0;
              for (let i = 0; i < focusableElements.length; i++) {
                if (focusableElements[i].tagName === "SPAN") spanIndex = i;
              }
              focusableElements[spanIndex].focus();
            }
          } else if (focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();
            focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour(hours, pm) {
    if (this.hourFormat == "12") {
      if (hours === 12) {
        return pm ? 12 : 0;
      } else {
        return pm ? hours + 12 : hours;
      }
    }
    return hours;
  }
  constrainTime(hour, minute, second, pm) {
    let returnTimeTriple = [hour, minute, second];
    let minHoursExceeds12;
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection(), isMultiValue = isRange || isMultiple;
    if (isMultiValue) {
      if (!this.value) {
        this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
      }
      if (isRange) {
        value = this.value[1] || this.value[0];
      }
      if (isMultiple) {
        value = this.value[this.value.length - 1];
      }
    }
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
    if (isMinDate) {
      minHoursExceeds12 = this.minDate.getHours() >= 12;
    }
    switch (true) {
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
        this.pm = true;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12):
        this.setCurrentHourPM(this.minDate.getHours());
        returnTimeTriple[0] = this.currentHour;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = this.minDate.getHours();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMaxDate && this.maxDate.getHours() < convertedHour):
        returnTimeTriple[0] = this.maxDate.getHours();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute):
        returnTimeTriple[1] = this.maxDate.getMinutes();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second):
        returnTimeTriple[2] = this.maxDate.getSeconds();
        break;
    }
    return returnTimeTriple;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour ?? 0;
    let newHour = (this.currentHour ?? 0) + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat == "12") {
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  toggleAMPMIfNotMinDate(newPM) {
    let value = this.value;
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    if (isMinDate && this.minDate.getHours() >= 12) {
      this.pm = true;
    } else {
      this.pm = newPM;
    }
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.$disabled()) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.$disabled()) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.$disabled() && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event2);
        else this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event2);
        else this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event2);
        else this.decrementSecond(event2);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    let newHour = (this.currentHour ?? 0) - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour < 0 ? 24 + newHour : newHour;
    else if (this.hourFormat == "12") {
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, newSecond, this.pm);
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat == "12") {
      if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);
      else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];
      else value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm;
    this.pm = newPM;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour, this.currentMinute, this.currentSecond, newPM);
    this.updateTime();
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid) {
        this.updateModel(value);
      }
    } catch (err) {
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    if (this.isSingleSelection()) {
      return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
    }
    let isValid = value.every((v2) => this.isSelectable(v2.getDate(), v2.getMonth(), v2.getFullYear(), false));
    if (isValid && this.isRangeSelection()) {
      isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == "12" && !ampm) {
      throw "Invalid Time";
    }
    this.pm = ampm === "PM" || ampm === "pm";
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return T(date) && s(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue.length === 2 ? propValue[1] : propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = val.getSeconds();
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.inputfieldViewChild?.nativeElement.focus();
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild?.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.overlay = event2.element;
          this.attrSelector && this.overlay.setAttribute(this.attrSelector, "");
          const styles = !this.inline ? {
            position: "absolute",
            top: "0"
          } : void 0;
          S(this.overlay, styles);
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI) zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
            else zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event2);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onClose.emit(event2);
        break;
    }
  }
  onOverlayAnimationDone(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event2.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") this.document.body.appendChild(this.overlay);
      else ut(this.$appendTo(), this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.$appendTo() !== "self") {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.view === "date") {
        if (!this.overlay.style.width) {
          this.overlay.style.width = v(this.overlay) + "px";
        }
        if (!this.overlay.style.minWidth) {
          this.overlay.style.minWidth = v(this.inputfieldViewChild?.nativeElement) + "px";
        }
      } else {
        if (!this.overlay.style.width) {
          this.overlay.style.width = v(this.inputfieldViewChild?.nativeElement) + "px";
        }
      }
      if (this.$appendTo() && this.$appendTo() !== "self") {
        D(this.overlay, this.inputfieldViewChild?.nativeElement);
      } else {
        I(this.overlay, this.inputfieldViewChild?.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      let maskStyleClass = "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter";
      W(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
        this.disableModality();
        this.overlayVisible = false;
      });
      this.renderer.appendChild(this.document.body, this.mask);
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      W(this.mask, "p-overlay-mask-leave");
      if (!this.animationEndListener) {
        this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
      }
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (R(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  getDateFormat() {
    return this.dateFormat || this.getTranslation("dateFormat");
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = (match, value, shortNames, longNames) => {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    let output = "";
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return "";
    }
    let output = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == "12" && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat == "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw "Invalid time";
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s3 = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s3) || s3 > 59)) {
      throw "Invalid time";
    } else {
      if (this.hourFormat == "12") {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s3
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort((a, b2) => {
        return -(a[1].length - b2[1].length);
      });
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    if (this.view === "month") {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw "Invalid date";
    }
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  isValidDateForTimeConstraints(selectedDate) {
    if (this.keepInvalid) {
      return true;
    }
    return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(date);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
      Kt(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
          if (this.isOutsideClicked(event2) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event2);
              this.cd.markForCheck();
            });
          }
        });
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
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hideOverlay();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return R(event2.target, "p-datepicker-prev-button") || R(event2.target, "p-datepicker-prev-icon") || R(event2.target, "p-datepicker-next-button") || R(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
    this.cd.markForCheck();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
    super.ngOnDestroy();
  }
  static \u0275fac = function DatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePicker)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DatePicker,
    selectors: [["p-datePicker"], ["p-datepicker"], ["p-date-picker"]],
    contentQueries: function DatePicker_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, _c9, 4);
        \u0275\u0275contentQuery(dirIndex, _c10, 4);
        \u0275\u0275contentQuery(dirIndex, _c11, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dateTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.disabledDateTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decadeTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previousIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.triggerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.decrementIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.incrementIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function DatePicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c13, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputfieldViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function DatePicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      iconDisplay: "iconDisplay",
      styleClass: "styleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      iconAriaLabel: "iconAriaLabel",
      dateFormat: "dateFormat",
      multipleSeparator: "multipleSeparator",
      rangeSeparator: "rangeSeparator",
      inline: [2, "inline", "inline", booleanAttribute],
      showOtherMonths: [2, "showOtherMonths", "showOtherMonths", booleanAttribute],
      selectOtherMonths: [2, "selectOtherMonths", "selectOtherMonths", booleanAttribute],
      showIcon: [2, "showIcon", "showIcon", booleanAttribute],
      icon: "icon",
      readonlyInput: [2, "readonlyInput", "readonlyInput", booleanAttribute],
      shortYearCutoff: "shortYearCutoff",
      hourFormat: "hourFormat",
      timeOnly: [2, "timeOnly", "timeOnly", booleanAttribute],
      stepHour: [2, "stepHour", "stepHour", numberAttribute],
      stepMinute: [2, "stepMinute", "stepMinute", numberAttribute],
      stepSecond: [2, "stepSecond", "stepSecond", numberAttribute],
      showSeconds: [2, "showSeconds", "showSeconds", booleanAttribute],
      showOnFocus: [2, "showOnFocus", "showOnFocus", booleanAttribute],
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      startWeekFromFirstDayOfYear: "startWeekFromFirstDayOfYear",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      dataType: "dataType",
      selectionMode: "selectionMode",
      maxDateCount: [2, "maxDateCount", "maxDateCount", numberAttribute],
      showButtonBar: [2, "showButtonBar", "showButtonBar", booleanAttribute],
      todayButtonStyleClass: "todayButtonStyleClass",
      clearButtonStyleClass: "clearButtonStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      keepInvalid: [2, "keepInvalid", "keepInvalid", booleanAttribute],
      hideOnDateTimeSelect: [2, "hideOnDateTimeSelect", "hideOnDateTimeSelect", booleanAttribute],
      touchUI: [2, "touchUI", "touchUI", booleanAttribute],
      timeSeparator: "timeSeparator",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      minDate: "minDate",
      maxDate: "maxDate",
      disabledDates: "disabledDates",
      disabledDays: "disabledDays",
      showTime: "showTime",
      responsiveOptions: "responsiveOptions",
      numberOfMonths: "numberOfMonths",
      firstDayOfWeek: "firstDayOfWeek",
      view: "view",
      defaultDate: "defaultDate",
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClose: "onClose",
      onSelect: "onSelect",
      onClear: "onClear",
      onInput: "onInput",
      onTodayClick: "onTodayClick",
      onClearClick: "onClearClick",
      onMonthChange: "onMonthChange",
      onYearChange: "onYearChange",
      onClickOutside: "onClickOutside",
      onShow: "onShow"
    },
    features: [\u0275\u0275ProvidersFeature([DATEPICKER_VALUE_ACCESSOR, DatePickerStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c15,
    decls: 2,
    vars: 2,
    consts: [["inputfield", ""], ["contentWrapper", ""], ["icon", ""], [3, "ngIf"], [3, "ngStyle", "class", "click", 4, "ngIf"], ["pInputText", "", "type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "focus", "keydown", "click", "blur", "input", "pSize", "value", "ngStyle", "pAutoFocus", "variant", "fluid", "invalid"], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "class", "disabled", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "class", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click"], [3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "click", "disabled"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["data-p-icon", "calendar", 4, "ngIf"], ["data-p-icon", "calendar"], ["data-p-icon", "calendar", 3, "class", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "calendar", 3, "click"], [3, "click", "ngStyle"], [3, "class", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["rounded", "", "variant", "text", "severity", "secondary", "type", "button", 3, "keydown", "onClick", "styleClass", "ngStyle", "ariaLabel"], ["type", "button", "pRipple", "", 3, "class", "click", "keydown", 4, "ngIf"], ["rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "onClick", "styleClass", "ngStyle", "ariaLabel"], ["role", "grid", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-left", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["type", "button", "pRipple", "", 3, "click", "keydown"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["role", "grid"], ["scope", "col", 3, "class", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "ngClass"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], ["pRipple", "", 3, "class", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 3, "click", "keydown"], ["rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave", "styleClass"], [1, "p-datepicker-separator"], ["data-p-icon", "chevron-up", 4, "ngIf"], ["data-p-icon", "chevron-up"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-down"], ["text", "", "rounded", "", "severity", "secondary", 3, "keydown", "onClick", "keydown.enter", "styleClass"], ["text", "", "rounded", "", "severity", "secondary", 3, "keydown", "click", "keydown.enter", "styleClass"], ["size", "small", "severity", "secondary", "variant", "text", "size", "small", 3, "keydown", "onClick", "styleClass", "label", "ngClass"]],
    template: function DatePicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c14);
        \u0275\u0275template(0, DatePicker_ng_template_0_Template, 5, 26, "ng-template", 3)(1, DatePicker_div_1_Template, 9, 19, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePicker, [{
    type: Component,
    args: [{
      selector: "p-datePicker, p-datepicker, p-date-picker",
      standalone: true,
      imports: [CommonModule, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule],
      template: `
        <ng-template [ngIf]="!inline">
            <input
                #inputfield
                pInputText
                [pSize]="size()"
                [attr.size]="inputSize()"
                type="text"
                role="combobox"
                [attr.id]="inputId"
                [attr.name]="name()"
                [attr.aria-required]="required()"
                aria-autocomplete="none"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [value]="inputFieldValue"
                (focus)="onInputFocus($event)"
                (keydown)="onInputKeydown($event)"
                (click)="onInputClick()"
                (blur)="onInputBlur($event)"
                [attr.required]="required() ? '' : undefined"
                [attr.readonly]="readonlyInput ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                (input)="onUserInput($event)"
                [ngStyle]="inputStyle"
                [class]="cn(cx('pcInputText'), inputStyleClass)"
                [attr.placeholder]="placeholder"
                [attr.tabindex]="tabindex"
                [attr.inputmode]="touchUI ? 'off' : null"
                autocomplete="off"
                [pAutoFocus]="autofocus"
                [variant]="$variant()"
                [fluid]="hasFluid"
                [invalid]="invalid()"
            />
            <ng-container *ngIf="showClear && !$disabled() && value != null">
                <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()" />
                <span *ngIf="clearIconTemplate || _clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button
                type="button"
                [attr.aria-label]="iconButtonAriaLabel"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                *ngIf="showIcon && iconDisplay === 'button'"
                (click)="onButtonClick($event, inputfield)"
                [class]="cx('dropdown')"
                [disabled]="$disabled()"
                tabindex="0"
            >
                <span *ngIf="icon" [ngClass]="icon"></span>
                <ng-container *ngIf="!icon">
                    <svg data-p-icon="calendar" *ngIf="!triggerIconTemplate && !_triggerIconTemplate" />
                    <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                </ng-container>
            </button>
            <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                <span [class]="cx('inputIconContainer')">
                    <svg data-p-icon="calendar" (click)="onButtonClick($event)" *ngIf="!inputIconTemplate && !_inputIconTemplate" [class]="cx('inputIcon')" />

                    <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                </span>
            </ng-container>
        </ng-template>
        <div
            #contentWrapper
            [attr.id]="panelId"
            [ngStyle]="panelStyle"
            [class]="cn(cx('panel'), panelStyleClass)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [attr.aria-label]="getTranslation('chooseDate')"
            [attr.role]="inline ? null : 'dialog'"
            [attr.aria-modal]="inline ? null : 'true'"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationDone($event)"
            (click)="onOverlayClick($event)"
            *ngIf="inline || overlayVisible"
        >
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <ng-container *ngIf="!timeOnly">
                <div [class]="cx('calendarContainer')">
                    <div [class]="cx('calendar')" *ngFor="let month of months; let i = index">
                        <div [class]="cx('header')">
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcPrevButton')"
                                (onClick)="onPrevButtonClick($event)"
                                [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                type="button"
                                [ariaLabel]="prevIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-left" *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || _previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                            <div [class]="cx('title')">
                                <button
                                    *ngIf="currentView === 'date'"
                                    type="button"
                                    (click)="switchToMonthView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectMonth')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="this.getTranslation('chooseMonth')"
                                    pRipple
                                >
                                    {{ getMonthName(month.month) }}
                                </button>
                                <button
                                    *ngIf="currentView !== 'year'"
                                    type="button"
                                    (click)="switchToYearView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectYear')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="getTranslation('chooseYear')"
                                    pRipple
                                >
                                    {{ getYear(month) }}
                                </button>
                                <span [class]="cx('decade')" *ngIf="currentView === 'year'">
                                    <ng-container *ngIf="!decadeTemplate && !_decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                    <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                </span>
                            </div>
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcNextButton')"
                                (onClick)="onNextButtonClick($event)"
                                [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                [ariaLabel]="nextIconAriaLabel"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-right" *ngIf="!nextIconTemplate && !_nextIconTemplate" />
                                    <ng-container *ngIf="nextIconTemplate || _nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                        </div>
                        <table [class]="cx('dayView')" role="grid" *ngIf="currentView === 'date'">
                            <thead>
                                <tr>
                                    <th *ngIf="showWeek" [class]="cx('weekHeader')">
                                        <span>{{ getTranslation('weekHeader') }}</span>
                                    </th>
                                    <th [class]="cx('weekDayCell')" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last">
                                        <span [class]="cx('weekDay')">{{ weekDay }}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let week of month.dates; let j = index">
                                    <td *ngIf="showWeek" [class]="cx('weekNumber')">
                                        <span [class]="cx('weekLabelContainer')">
                                            {{ month.weekNumbers[j] }}
                                        </span>
                                    </td>
                                    <td *ngFor="let date of week" [attr.aria-label]="date.day" [class]="cx('dayCell', { date })">
                                        <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                            <span [ngClass]="dayClass(date)" (click)="onDateSelect($event, date)" draggable="false" [attr.data-date]="formatDateKey(formatDateMetaToDate(date))" (keydown)="onDateCellKeydown($event, date, i)" pRipple>
                                                <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                    <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                                <ng-container *ngIf="!date.selectable">
                                                    <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                            </span>
                                            <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                {{ date.day }}
                                            </div>
                                        </ng-container>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div [class]="cx('monthView')" *ngIf="currentView === 'month'">
                    <span *ngFor="let m of monthPickerValues(); let i = index" (click)="onMonthSelect($event, i)" (keydown)="onMonthCellKeydown($event, i)" [class]="cx('month', { month: m, index: i })" pRipple>
                        {{ m }}
                        <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                            {{ m }}
                        </div>
                    </span>
                </div>
                <div [class]="cx('yearView')" *ngIf="currentView === 'year'">
                    <span *ngFor="let y of yearPickerValues()" (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" [class]="cx('year', { year: y })" pRipple>
                        {{ y }}
                        <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                            {{ y }}
                        </div>
                    </span>
                </div>
            </ng-container>
            <div [class]="cx('timePicker')" *ngIf="(showTime || timeOnly) && currentView === 'date'">
                <div [class]="cx('hourPicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementHour($event)"
                        (keydown.space)="incrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementHour($event)"
                        (keydown.space)="decrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevHour')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div class="p-datepicker-separator">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('minutePicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementMinute($event)"
                        (keydown.space)="incrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementMinute($event)"
                        (keydown.space)="decrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevMinute')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="showSeconds">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('secondPicker')" *ngIf="showSeconds">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementSecond($event)"
                        (keydown.space)="incrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementSecond($event)"
                        (keydown.space)="decrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevSecond')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="hourFormat == '12'">
                    <span>{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('ampmPicker')" *ngIf="hourFormat == '12'">
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('am')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span>{{ pm ? 'PM' : 'AM' }}</span>
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (click)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('pm')"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div [class]="cx('buttonbar')" *ngIf="showButtonBar">
                <p-button
                    size="small"
                    [styleClass]="cx('pcTodayButton')"
                    [label]="getTranslation('today')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onTodayButtonClick($event)"
                    [ngClass]="todayButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
                <p-button
                    size="small"
                    [styleClass]="cx('pcClearButton')"
                    [label]="getTranslation('clear')"
                    (keydown)="onContainerButtonKeydown($event)"
                    (onClick)="onClearButtonClick($event)"
                    [ngClass]="clearButtonStyleClass"
                    severity="secondary"
                    variant="text"
                    size="small"
                />
            </div>
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
      animations: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])],
      providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: OverlayService
  }], {
    iconDisplay: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    iconAriaLabel: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    multipleSeparator: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shortYearCutoff: [{
      type: Input
    }],
    hourFormat: [{
      type: Input
    }],
    timeOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stepHour: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepMinute: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepSecond: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showSeconds: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startWeekFromFirstDayOfYear: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataType: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    maxDateCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showButtonBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    todayButtonStyleClass: [{
      type: Input
    }],
    clearButtonStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    keepInvalid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnDateTimeSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    touchUI: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeSeparator: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    disabledDays: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    numberOfMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onTodayClick: [{
      type: Output
    }],
    onClearClick: [{
      type: Output
    }],
    onMonthChange: [{
      type: Output
    }],
    onYearChange: [{
      type: Output
    }],
    onClickOutside: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    dateTemplate: [{
      type: ContentChild,
      args: ["date", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    disabledDateTemplate: [{
      type: ContentChild,
      args: ["disabledDate", {
        descendants: false
      }]
    }],
    decadeTemplate: [{
      type: ContentChild,
      args: ["decade", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    decrementIconTemplate: [{
      type: ContentChild,
      args: ["decrementicon", {
        descendants: false
      }]
    }],
    incrementIconTemplate: [{
      type: ContentChild,
      args: ["incrementicon", {
        descendants: false
      }]
    }],
    inputIconTemplate: [{
      type: ContentChild,
      args: ["inputicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DatePickerModule = class _DatePickerModule {
  static \u0275fac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DatePickerModule,
    imports: [DatePicker, SharedModule],
    exports: [DatePicker, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [DatePicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [DatePicker, SharedModule],
      exports: [DatePicker, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/administration/models/tree-node-data.interface.ts
var ADMIN_TREE = {
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 100,
    INITIAL_PAGE: 0
  },
  ICONS: {
    SUPER_ADMIN: "pi pi-crown",
    DISTRIBUTOR: "pi pi-building",
    VENDOR: "pi pi-building-columns",
    GROUP: "pi pi-folder",
    CLIENT: "pi pi-user"
  },
  NODE_TYPES: {
    SUPER_ADMIN: "super_admin",
    DISTRIBUTOR: "distributor",
    VENDOR: "vendor",
    GROUP: "group",
    CLIENT: "client",
    LOAD_MORE: "load_more"
  },
  LABELS: {
    SUPER_ADMIN: "(Super Admin)",
    DISTRIBUTOR: "(Distributor)",
    VENDOR: "(Vendor)",
    GROUP: "(Company Group)",
    CLIENT: "(Client)"
  },
  DEFAULT_GROUP_ID: DEFAULT_SYSTEM_ID,
  DELETED_STATE: "deleted"
};

// src/app/features/administration/models/custom-fields.interface.ts
var CUSTOM_FIELD_TYPES = [
  "text",
  "memo",
  "combo",
  "checkbox",
  "date",
  "datetime",
  "url"
];
var CUSTOM_FIELD_TYPES_MAP = {
  text: "Text",
  memo: "Memo",
  combo: "Combo",
  checkbox: "Checkbox",
  date: "Date",
  datetime: "DateTime",
  url: "URL"
};

// src/app/features/administration/models/reminder.interface.ts
var ReminderType;
(function(ReminderType2) {
  ReminderType2["ODOMETER"] = "odo";
  ReminderType2["ENGINE_HOURS"] = "hours";
  ReminderType2["TIME_BASED"] = "time";
})(ReminderType || (ReminderType = {}));

// src/app/features/administration/models/calendar-options.interface.ts
var WEEKDAY_OPTIONS = [
  { label: "Sunday", value: "0" },
  { label: "Monday", value: "1" },
  { label: "Tuesday", value: "2" },
  { label: "Wednesday", value: "3" },
  { label: "Thursday", value: "4" },
  { label: "Friday", value: "5" },
  { label: "Saturday", value: "6" }
];
var MONTH_OPTIONS = [
  { label: "January", value: "1" },
  { label: "February", value: "2" },
  { label: "March", value: "3" },
  { label: "April", value: "4" },
  { label: "May", value: "5" },
  { label: "June", value: "6" },
  { label: "July", value: "7" },
  { label: "August", value: "8" },
  { label: "September", value: "9" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" }
];
var DAY_OF_MONTH_OPTIONS = Array.from({ length: 31 }, (_, i) => ({
  label: String(i + 1),
  value: String(i + 1)
}));

// src/app/features/administration/models/io-types.constants.ts
var IO_TYPE_MAP = {
  analog_input: "Analog Inputs",
  camera_input: "Camera Inputs",
  can_input: "CAN Inputs",
  counter_input: "Counter Inputs",
  digital_input: "Digital Inputs",
  digital_output: "Digital Outputs",
  temperature_input: "Temperature Inputs",
  value_input: "Value Inputs"
};

// src/app/features/administration/models/legacy-rights.constants.ts
var LEGACY_CLIENT_RIGHTS = [
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "access-groups",
    title: "Cost Centres",
    description: "Rights relating to cost centre management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete cost centres"
      }
    ]
  },
  {
    name: "asset-categories",
    title: "Asset Categories",
    description: "Rights relating to asset category management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete asset categories"
      }
    ]
  },
  {
    name: "assets-groups",
    title: "Asset Groups",
    description: "Rights relating to asset group management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete asset groups"
      }
    ]
  },
  {
    name: "assets",
    title: "Assets",
    description: "Rights relating to asset management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the assets in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete assets"
      }
    ]
  },
  {
    name: "devices",
    title: "Devices",
    description: "Rights relating to device management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the devices in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete devices"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      }
    ]
  },
  {
    name: "simcards",
    title: "SIM Cards",
    description: "Rights relating to SIM card management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the SIM cards in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete SIM cards"
      }
    ]
  },
  {
    name: "fuelcards",
    title: "Fuel Cards",
    description: "Rights relating to fuel card management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the fuel cards in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete fuel cards"
      }
    ]
  },
  {
    name: "deviceProviders",
    title: "Device Providers",
    description: "Rights relating to device provider management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the device providers in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete device providers"
      }
    ]
  },
  {
    name: "smsGatewayProviders",
    title: "SMS Gateways",
    description: "Rights relating to SMS gateway management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the SMS gateways in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete SMS gateways"
      }
    ]
  },
  {
    name: "emailProviders",
    title: "Email Providers",
    description: "Rights relating to email provider management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the email providers in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete email providers"
      }
    ]
  },
  {
    name: "zones",
    title: "Geofences",
    description: "Rights relating to geofence management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the geofences in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete geofences and their groups"
      }
    ]
  },
  {
    name: "alerts",
    title: "Alerts",
    description: "Rights relating to alert management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the alerts in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete alert definitions"
      }
    ]
  },
  {
    name: "media",
    title: "Media",
    description: "Rights relating to viewing and generating media events",
    rights: [
      {
        title: "View",
        name: "view",
        description: "View and list videos and images"
      },
      {
        title: "Create",
        name: "create",
        description: "Create media requests"
      },
      {
        title: "Update",
        name: "update",
        description: "Modify media requests"
      },
      {
        title: "Delete",
        name: "delete",
        description: "Delete recorded media files"
      }
    ]
  },
  {
    name: "analytics",
    title: "Analytics",
    description: "Rights relating to analytics reports",
    rights: [
      {
        title: "View",
        name: "view",
        description: "View analytics reports"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete analytics reports"
      }
    ]
  },
  {
    name: "reports",
    title: "Reports",
    description: "Rights relating to reports",
    rights: [
      {
        title: "Run",
        name: "run",
        description: "Run reports on demand."
      },
      {
        title: "Schedule",
        name: "schedule",
        description: "Create, modify and delete scheduled reports"
      },
      {
        title: "Templates",
        name: "templates",
        description: "Create, modify and delete report templates"
      }
    ]
  },
  {
    name: "customFields",
    title: "Custom Fields",
    description: "Rights relating to custom fields",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete custom fields."
      }
    ]
  }
];
var LEGACY_VENDOR_RIGHTS = [
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_DISTRIBUTOR_RIGHTS = [
  {
    name: "vendors",
    title: "Vendors",
    description: "Rights relating to vendor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the vendors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete vendors"
      },
      {
        title: "Migrate",
        name: "migrate",
        description: "Migrate vendors between distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List vendor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete vendor users"
      }
    ]
  },
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_SYSTEM_RIGHTS = [
  {
    name: "system",
    title: "System",
    description: "Rights relating to system management",
    rights: [
      {
        title: "Global Lookups",
        name: "global-lookups",
        description: "Create, modify and delete global lookups"
      }
    ]
  },
  {
    name: "distributors",
    title: "Distributors",
    description: "Rights relating to distributor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the distributors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List distributor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete distributor users"
      }
    ]
  },
  {
    name: "vendors",
    title: "Vendors",
    description: "Rights relating to vendor management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the vendors in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete vendors"
      },
      {
        title: "Migrate",
        name: "migrate",
        description: "Migrate vendors between distributors"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List vendor users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete vendor users"
      }
    ]
  },
  {
    name: "clients",
    title: "Clients",
    description: "Rights relating to client management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the clients in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete clients"
      },
      {
        title: "List Users",
        name: "list-users",
        description: "List client users and user roles"
      },
      {
        title: "Modify Users",
        name: "users",
        description: "Create, modify and delete client users and their roles"
      },
      {
        title: "List Assets",
        name: "list-assets",
        description: "List client assets"
      },
      {
        title: "Modify Assets",
        name: "assets",
        description: "Create, modify and delete assets and their groups"
      },
      {
        title: "List Devices",
        name: "list-devices",
        description: "List client devices"
      },
      {
        title: "Modify Devices",
        name: "devices",
        description: "Create, modify and delete devices"
      },
      {
        title: "List SIM Cards",
        name: "list-simcards",
        description: "List SIM cards"
      },
      {
        title: "Modify SIM Cards",
        name: "simcards",
        description: "Create, modify and delete SIM cards"
      },
      {
        title: "List Fuel Cards",
        name: "list-fuelcards",
        description: "List fuel cards"
      },
      {
        title: "Modify Fuel Cards",
        name: "fuelcards",
        description: "Create, modify and delete fuel cards"
      },
      {
        title: "List Device Providers",
        name: "list-deviceProviders",
        description: "List client device providers"
      },
      {
        title: "Modify Device Providers",
        name: "deviceProviders",
        description: "Create, modify and delete device providers"
      },
      {
        title: "List SMS Gateways",
        name: "list-smsGatewayProviders",
        description: "List client SMS gateways"
      },
      {
        title: "Modify SMS Gateways",
        name: "smsGatewayProviders",
        description: "Create, modify and delete SMS gateways"
      },
      {
        title: "List Email Providers",
        name: "list-emailProviders",
        description: "List client email providers"
      },
      {
        title: "Modify Email Providers",
        name: "emailProviders",
        description: "Create, modify and delete email providers"
      },
      {
        title: "List Geofences",
        name: "list-zones",
        description: "List client geofences"
      },
      {
        title: "Modify Geofences",
        name: "zones",
        description: "Create, modify and delete geofences and their groups"
      },
      {
        title: "View Media",
        name: "list-media",
        description: "View client media"
      },
      {
        title: "Modify Media",
        name: "media",
        description: "Request media and update media events"
      },
      {
        title: "Modify Alerts",
        name: "alerts",
        description: "Create, modify and delete alert definitions"
      },
      {
        title: "Poll",
        name: "poll",
        description: "Poll devices for telemetry updates"
      },
      {
        title: "Upload Parameters",
        name: "setparams",
        description: "Upload parameters to devices"
      },
      {
        title: "Toggle Outputs",
        name: "outputs",
        description: "Toggle device outputs"
      },
      {
        title: "Run Reports",
        name: "reports",
        description: "Run and schedule reports"
      },
      {
        title: "Modify Report Templates",
        name: "report-templates",
        description: "Create, modify and delete report templates"
      },
      {
        title: "Custom Fields",
        name: "customFields",
        description: "Create, modify and delete custom fields"
      },
      {
        title: "Analytics Reports",
        name: "analytics",
        description: "Create, modify and delete analytics reports"
      }
    ]
  },
  {
    name: "user-roles",
    title: "Users Roles",
    description: "Rights relating to user role management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the user roles in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete user roles"
      }
    ]
  },
  {
    name: "users",
    title: "Users",
    description: "Rights relating to user management",
    rights: [
      {
        title: "List",
        name: "list",
        description: "List the users in the system"
      },
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete users"
      }
    ]
  },
  {
    name: "themes",
    title: "Themes",
    description: "Rights relating to theme management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete themes"
      }
    ]
  },
  {
    name: "mapSets",
    title: "Map Sets",
    description: "Rights relating to map set management",
    rights: [
      {
        title: "Create",
        name: "create",
        description: "Create, modify and delete map sets"
      }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    description: "Rights relating to billing profiles",
    rights: [
      {
        title: "Create Profiles",
        name: "createProfile",
        description: "Create, modify and delete billing profiles"
      }
    ]
  }
];
var LEGACY_RIGHTS = {
  system: LEGACY_SYSTEM_RIGHTS,
  distributor: LEGACY_DISTRIBUTOR_RIGHTS,
  vendor: LEGACY_VENDOR_RIGHTS,
  client: LEGACY_CLIENT_RIGHTS
};

// src/app/features/administration/models/theme-form.constants.ts
var AVAILABLE_FONTS = [
  "Muli",
  "Roboto",
  "Open Sans",
  "Source Sans Pro",
  "Montserrat",
  "Lato",
  "Ubuntu",
  "Arimo"
];
var FONT_WEIGHTS = ["300", "400", "500", "600", "700"];
var FONT_TRANSFORMS = [
  { label: "None", value: "unset" },
  { label: "Title Case", value: "capitalize" },
  { label: "Upper Case", value: "uppercase" },
  { label: "Lower Case", value: "lowercase" }
];
var DROP_SHADOW_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Tiny", value: "1px 2px 5px 0 rgba(0, 0, 0, 0.1)" },
  { label: "Small", value: "1px 2px 5px 0 rgba(0, 0, 0, 0.2)" },
  { label: "Medium", value: "2px 4px 8px 0 rgba(0, 0, 0, 0.2)" },
  { label: "Large", value: "4px 8px 12px 0 rgba(0, 0, 0, 0.2)" }
];
var DEFAULT_SHADE_VALUES = [0.025, 0.05, 0.1];
var ICON_PACKS = [
  { label: "Font Awesome Solid", value: "fontawesome:900" },
  { label: "Font Awesome Regular", value: "fontawesome:400" },
  { label: "Font Awesome Light", value: "fontawesome:300" }
];
var SIZE_OPTIONS = [
  { label: "Hidden", value: "hidden" },
  { label: "Auto", value: "auto" },
  { label: "Compact", value: "compact" },
  { label: "Expanded", value: "expanded" }
];
var POSITION_OPTIONS = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" }
];

// src/app/core/services/utility.service.ts
var UtilityService = class _UtilityService {
  convertBlobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  /**
   * Constructs an RQL filter string from the given filters object.
   * @param filters An object containing filter criteria.
   * @returns A string representing the RQL filter.
   */
  handleArrayValue(key, value) {
    return `${key}=in=(${value.map((v2) => encodeURIComponent(String(v2))).join(",")})`;
  }
  handleFilterValueArray(key, values, operator) {
    if (values.length === 0)
      return "";
    const conditions = values.map((v2) => `${key}${operator === "in" ? "=" : operator}${encodeURIComponent(String(v2))}`).join("|");
    return values.length > 1 ? `(${conditions})` : conditions;
  }
  handleFilterValue(key, value) {
    const operator = isDefined(value.operator) ? value.operator : "=";
    let condition;
    if (Array.isArray(value.value)) {
      condition = this.handleFilterValueArray(key, value.value, operator);
    } else {
      condition = `${key}${operator}${String(value.value)}`;
    }
    return value.wrap ?? false ? `(${condition})` : condition;
  }
  constructRqlFilter(filters) {
    return Object.entries(filters).map(([key, value]) => {
      if (Array.isArray(value)) {
        return this.handleArrayValue(key, value);
      } else if (typeof value === "string") {
        return `${key}=eq=${encodeURIComponent(value)}`;
      } else if (typeof value === "number") {
        return `${key}=eq=${value}`;
      } else if (typeof value === "object" && value !== null) {
        return this.handleFilterValue(key, value);
      }
      return "";
    }).filter(Boolean).join("&");
  }
  /**
   * Converts a string to title case (capitalizes first letter of each word)
   * @param str The string to convert
   * @returns The title cased string
   */
  toTitleCase(str) {
    if (!str)
      return "";
    return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  escapeRqlValue(value) {
    const result = encodeURIComponent(value.replace(/[%/\\^$+?.()|[\]{}]/g, "\\$&")).replace(/!/g, "%21").replace(/~/g, "%7E").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/\*/g, "%2A");
    return result;
  }
  decamelize(str) {
    if (isNullOrUndefined(str))
      return "";
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").toLowerCase().trim();
  }
  getWeekdaysString(weekdays) {
    return WEEKDAY_OPTIONS.filter((option) => weekdays.includes(option.value)).map((option) => option.label).join(", ");
  }
  static \u0275fac = function UtilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilityService, factory: _UtilityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/chip/index.mjs
var style4 = "\n    .p-chip {\n        display: inline-flex;\n        align-items: center;\n        background: dt('chip.background');\n        color: dt('chip.color');\n        border-radius: dt('chip.border.radius');\n        padding-block: dt('chip.padding.y');\n        padding-inline: dt('chip.padding.x');\n        gap: dt('chip.gap');\n    }\n\n    .p-chip-icon {\n        color: dt('chip.icon.color');\n        font-size: dt('chip.icon.font.size');\n        width: dt('chip.icon.size');\n        height: dt('chip.icon.size');\n    }\n\n    .p-chip-image {\n        border-radius: 50%;\n        width: dt('chip.image.width');\n        height: dt('chip.image.height');\n        margin-inline-start: calc(-1 * dt('chip.padding.y'));\n    }\n\n    .p-chip:has(.p-chip-remove-icon) {\n        padding-inline-end: dt('chip.padding.y');\n    }\n\n    .p-chip:has(.p-chip-image) {\n        padding-block-start: calc(dt('chip.padding.y') / 2);\n        padding-block-end: calc(dt('chip.padding.y') / 2);\n    }\n\n    .p-chip-remove-icon {\n        cursor: pointer;\n        font-size: dt('chip.remove.icon.size');\n        width: dt('chip.remove.icon.size');\n        height: dt('chip.remove.icon.size');\n        color: dt('chip.remove.icon.color');\n        border-radius: 50%;\n        transition:\n            outline-color dt('chip.transition.duration'),\n            box-shadow dt('chip.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-chip-remove-icon:focus-visible {\n        box-shadow: dt('chip.remove.icon.focus.ring.shadow');\n        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');\n        outline-offset: dt('chip.remove.icon.focus.ring.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-chip.mjs
var _c07 = ["removeicon"];
var _c110 = ["*"];
function Chip_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function Chip_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("image"));
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt);
  }
}
function Chip_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.icon);
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"));
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Chip_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_template_2_span_0_Template, 1, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.icon);
  }
}
function Chip_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("label"));
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Chip_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.removeIcon);
    \u0275\u0275property("ngClass", ctx_r1.cx("removeIcon"));
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1__svg_svg_2_Template_svg_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1__svg_svg_2_Template_svg_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("removeIcon"));
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_span_1_Template, 1, 5, "span", 8)(2, Chip_ng_container_5_ng_container_1__svg_svg_2_Template, 1, 4, "svg", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIcon);
  }
}
function Chip_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function Chip_ng_container_5_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275template(1, Chip_ng_container_5_span_2_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("removeIcon"));
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
function Chip_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Chip_ng_container_5_span_2_Template, 2, 5, "span", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIconTemplate && !ctx_r1._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
var classes3 = {
  root: () => ["p-chip p-component"],
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = class _ChipStyle extends BaseStyle {
  name = "chip";
  theme = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChipStyle_BaseFactory;
    return function ChipStyle_Factory(__ngFactoryType__) {
      return (\u0275ChipStyle_BaseFactory || (\u0275ChipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ChipStyle)))(__ngFactoryType__ || _ChipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChipStyle,
    factory: _ChipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipStyle, [{
    type: Injectable
  }], null, null);
})();
var ChipClasses;
(function(ChipClasses2) {
  ChipClasses2["root"] = "p-chip";
  ChipClasses2["image"] = "p-chip-image";
  ChipClasses2["icon"] = "p-chip-icon";
  ChipClasses2["label"] = "p-chip-label";
  ChipClasses2["removeIcon"] = "p-chip-remove-icon";
})(ChipClasses || (ChipClasses = {}));
var Chip = class _Chip extends BaseComponent {
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
   * Alt attribute of the image.
   * @group Props
   */
  alt;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  get removeAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["removeLabel"];
  }
  /**
   * Used to pass all properties of the chipProps to the Chip component.
   * @group Props
   */
  get chipProps() {
    return this._chipProps;
  }
  set chipProps(val) {
    this._chipProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v2]) => this[`_${k}`] !== v2 && (this[`_${k}`] = v2));
    }
  }
  _chipProps;
  _componentStyle = inject(ChipStyle);
  removeIconTemplate;
  templates;
  _removeIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this._removeIconTemplate = item.template;
          break;
        default:
          this._removeIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.chipProps && simpleChanges.chipProps.currentValue) {
      const {
        currentValue
      } = simpleChanges.chipProps;
      if (currentValue.label !== void 0) {
        this.label = currentValue.label;
      }
      if (currentValue.icon !== void 0) {
        this.icon = currentValue.icon;
      }
      if (currentValue.image !== void 0) {
        this.image = currentValue.image;
      }
      if (currentValue.alt !== void 0) {
        this.alt = currentValue.alt;
      }
      if (currentValue.styleClass !== void 0) {
        this.styleClass = currentValue.styleClass;
      }
      if (currentValue.removable !== void 0) {
        this.removable = currentValue.removable;
      }
      if (currentValue.removeIcon !== void 0) {
        this.removeIcon = currentValue.removeIcon;
      }
    }
  }
  close(event2) {
    this.visible = false;
    this.onRemove.emit(event2);
  }
  onKeydown(event2) {
    if (event2.key === "Enter" || event2.key === "Backspace") {
      this.close(event2);
    }
  }
  imageError(event2) {
    this.onImageError.emit(event2);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chip_BaseFactory;
    return function Chip_Factory(__ngFactoryType__) {
      return (\u0275Chip_BaseFactory || (\u0275Chip_BaseFactory = \u0275\u0275getInheritedFactory(_Chip)))(__ngFactoryType__ || _Chip);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c07, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function Chip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "chip")("aria-label", ctx.label)("data-pc-section", "root");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275styleProp("display", !ctx.visible && "none");
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      alt: "alt",
      styleClass: "styleClass",
      removable: [2, "removable", "removable", booleanAttribute],
      removeIcon: "removeIcon",
      chipProps: "chipProps"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ChipStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c110,
    decls: 6,
    vars: 4,
    consts: [["iconTemplate", ""], [3, "class", "src", "alt", "error", 4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "error", "src", "alt"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["tabindex", "0", "role", "button", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "ngClass", "click", "keydown", 4, "ngIf"], ["data-p-icon", "times-circle", "tabindex", "0", "role", "button", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "ngClass"], ["data-p-icon", "times-circle", "tabindex", "0", "role", "button", 3, "click", "keydown"], ["tabindex", "0", "role", "button", 3, "click", "keydown"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Chip_img_1_Template, 1, 4, "img", 1)(2, Chip_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Chip_div_4_Template, 2, 4, "div", 2)(5, Chip_ng_container_5_Template, 3, 2, "ng-container", 3);
      }
      if (rf & 2) {
        const iconTemplate_r6 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.image)("ngIfElse", iconTemplate_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.removable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      standalone: true,
      imports: [CommonModule, TimesCircleIcon, SharedModule],
      template: `
        <ng-content></ng-content>
        <img [class]="cx('image')" [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
        <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="cx('icon')" [attr.data-pc-section]="'icon'"></span></ng-template>
        <div [class]="cx('label')" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
        <ng-container *ngIf="removable">
            <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                <span
                    tabindex="0"
                    *ngIf="removeIcon"
                    [class]="removeIcon"
                    [ngClass]="cx('removeIcon')"
                    [attr.data-pc-section]="'removeicon'"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                ></span>
                <svg
                    data-p-icon="times-circle"
                    tabindex="0"
                    *ngIf="!removeIcon"
                    [class]="cx('removeIcon')"
                    [attr.data-pc-section]="'removeicon'"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                />
            </ng-container>
            <span *ngIf="removeIconTemplate || _removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" [class]="cx('removeIcon')" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ChipStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style.display]": '!visible && "none"',
        "[attr.data-pc-name]": "'chip'",
        "[attr.aria-label]": "label",
        "[attr.data-pc-section]": "'root'"
      }
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
    alt: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    chipProps: [{
      type: Input
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule,
    imports: [Chip, SharedModule],
    exports: [Chip, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Chip, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [Chip, SharedModule],
      exports: [Chip, SharedModule]
    }]
  }], null, null);
})();

export {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  TimesCircleIcon,
  DatePicker,
  DatePickerModule,
  ADMIN_TREE,
  ReminderType,
  WEEKDAY_OPTIONS,
  MONTH_OPTIONS,
  DAY_OF_MONTH_OPTIONS,
  IO_TYPE_MAP,
  CUSTOM_FIELD_TYPES,
  CUSTOM_FIELD_TYPES_MAP,
  LEGACY_RIGHTS,
  AVAILABLE_FONTS,
  FONT_WEIGHTS,
  FONT_TRANSFORMS,
  DROP_SHADOW_OPTIONS,
  DEFAULT_SHADE_VALUES,
  ICON_PACKS,
  SIZE_OPTIONS,
  POSITION_OPTIONS,
  UtilityService,
  Chip,
  ChipModule,
  ProgressSpinner,
  ProgressSpinnerModule
};
//# sourceMappingURL=chunk-YDIEJ3ZD.js.map
