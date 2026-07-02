import {
  EyeIcon,
  SliderModule
} from "./chunk-IOKQPKSK.js";
import {
  ToggleSwitchModule
} from "./chunk-VN4TXOP4.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-POWMBANG.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-ML5T5ZEG.js";
import {
  Message,
  MessageModule
} from "./chunk-LVMLZ3VX.js";
import {
  Dialog,
  DialogModule,
  FocusTrap
} from "./chunk-CUF5ZGX4.js";
import {
  FormsModule,
  Motion,
  MotionDirective,
  MotionModule,
  TimesIcon,
  Tooltip,
  TooltipModule,
  zindexutils
} from "./chunk-ELMGQUTA.js";
import {
  Button,
  ButtonModule,
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-4VRJFGPA.js";
import {
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  Y,
  bt,
  s2 as s,
  ut,
  z
} from "./chunk-NTFNF324.js";
import {
  TranslatePipe
} from "./chunk-AHALUXAA.js";
import {
  ActivatedRoute,
  CommonModule,
  DomSanitizer,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterModule,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isString
} from "./chunk-2Y2RLXE3.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  first,
  fromEvent,
  inject,
  input,
  merge,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VOGNWKLY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/primeng/fesm2022/primeng-icons-refresh.mjs
var _c0 = ["data-p-icon", "refresh"];
var RefreshIcon = class _RefreshIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RefreshIcon_BaseFactory;
    return function RefreshIcon_Factory(__ngFactoryType__) {
      return (\u0275RefreshIcon_BaseFactory || (\u0275RefreshIcon_BaseFactory = \u0275\u0275getInheritedFactory(_RefreshIcon)))(__ngFactoryType__ || _RefreshIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RefreshIcon,
    selectors: [["", "data-p-icon", "refresh"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function RefreshIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="refresh"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
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

// node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs
var _c02 = ["data-p-icon", "search-minus"];
var SearchMinusIcon = class _SearchMinusIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchMinusIcon_BaseFactory;
    return function SearchMinusIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchMinusIcon_BaseFactory || (\u0275SearchMinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchMinusIcon)))(__ngFactoryType__ || _SearchMinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchMinusIcon,
    selectors: [["", "data-p-icon", "search-minus"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchMinusIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchMinusIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="search-minus"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
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

// node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs
var _c03 = ["data-p-icon", "search-plus"];
var SearchPlusIcon = class _SearchPlusIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchPlusIcon_BaseFactory;
    return function SearchPlusIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchPlusIcon_BaseFactory || (\u0275SearchPlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchPlusIcon)))(__ngFactoryType__ || _SearchPlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchPlusIcon,
    selectors: [["", "data-p-icon", "search-plus"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchPlusIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPlusIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="search-plus"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
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

// node_modules/primeng/fesm2022/primeng-icons-undo.mjs
var _c04 = ["data-p-icon", "undo"];
var UndoIcon = class _UndoIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UndoIcon_BaseFactory;
    return function UndoIcon_Factory(__ngFactoryType__) {
      return (\u0275UndoIcon_BaseFactory || (\u0275UndoIcon_BaseFactory = \u0275\u0275getInheritedFactory(_UndoIcon)))(__ngFactoryType__ || _UndoIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UndoIcon,
    selectors: [["", "data-p-icon", "undo"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UndoIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UndoIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="undo"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
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

// node_modules/@primeuix/styles/dist/steps/index.mjs
var style = "\n    .p-steps {\n        position: relative;\n    }\n\n    .p-steps-list {\n        padding: 0;\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n    }\n\n    .p-steps-item {\n        position: relative;\n        display: flex;\n        justify-content: center;\n        flex: 1 1 auto;\n    }\n\n    .p-steps-item.p-disabled,\n    .p-steps-item.p-disabled * {\n        opacity: 1;\n        pointer-events: auto;\n        user-select: auto;\n        cursor: auto;\n    }\n\n    .p-steps-item:before {\n        content: ' ';\n        border-top: 2px solid dt('steps.separator.background');\n        width: 100%;\n        top: 50%;\n        left: 0;\n        display: block;\n        position: absolute;\n        margin-top: calc(-1rem + 1px);\n    }\n\n    .p-steps-item:first-child::before {\n        width: calc(50% + 1rem);\n        transform: translateX(100%);\n    }\n\n    .p-steps-item:last-child::before {\n        width: 50%;\n    }\n\n    .p-steps-item-link {\n        display: inline-flex;\n        flex-direction: column;\n        align-items: center;\n        overflow: hidden;\n        text-decoration: none;\n        transition:\n            outline-color dt('steps.transition.duration'),\n            box-shadow dt('steps.transition.duration');\n        border-radius: dt('steps.item.link.border.radius');\n        outline-color: transparent;\n        gap: dt('steps.item.link.gap');\n    }\n\n    .p-steps-item-link:not(.p-disabled):focus-visible {\n        box-shadow: dt('steps.item.link.focus.ring.shadow');\n        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');\n        outline-offset: dt('steps.item.link.focus.ring.offset');\n    }\n\n    .p-steps-item-label {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('steps.item.label.color');\n        display: block;\n        font-weight: dt('steps.item.label.font.weight');\n    }\n\n    .p-steps-item-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('steps.item.number.color');\n        border: 2px solid dt('steps.item.number.border.color');\n        background: dt('steps.item.number.background');\n        min-width: dt('steps.item.number.size');\n        height: dt('steps.item.number.size');\n        line-height: dt('steps.item.number.size');\n        font-size: dt('steps.item.number.font.size');\n        z-index: 1;\n        border-radius: dt('steps.item.number.border.radius');\n        position: relative;\n        font-weight: dt('steps.item.number.font.weight');\n    }\n\n    .p-steps-item-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('steps.item.number.border.radius');\n        box-shadow: dt('steps.item.number.shadow');\n    }\n\n    .p-steps:not(.p-readonly) .p-steps-item {\n        cursor: pointer;\n    }\n\n    .p-steps-item-active .p-steps-item-number {\n        background: dt('steps.item.number.active.background');\n        border-color: dt('steps.item.number.active.border.color');\n        color: dt('steps.item.number.active.color');\n    }\n\n    .p-steps-item-active .p-steps-item-label {\n        color: dt('steps.item.label.active.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-steps.mjs
var _c05 = ["list"];
var _c1 = (a0, a1) => ({
  item: a0,
  index: a1
});
var _c2 = () => ({
  exact: false
});
var _forTrack0 = ($index, $item) => $item.label;
function Steps_For_4_li_0_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function Steps_For_4_li_0_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, \u0275$index_5_r4));
    })("keydown", function Steps_For_4_li_0_a_2_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, \u0275$index_5_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_a_2_span_3_Template, 2, 3, "span", 11)(4, Steps_For_4_li_0_a_2_ng_template_4_Template, 1, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLink"));
    \u0275\u0275property("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || \u0275\u0275pureFunction0(21, _c2))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    \u0275\u0275attribute("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact ? "step" : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r4.cx("itemNumber"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_For_4_li_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLabel"));
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function Steps_For_4_li_0_ng_template_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, \u0275$index_5_r4));
    })("keydown", function Steps_For_4_li_0_ng_template_3_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      const item_r3 = ctx_r1.$implicit;
      const \u0275$index_5_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, \u0275$index_5_r4));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_ng_template_3_span_3_Template, 2, 3, "span", 11)(4, Steps_For_4_li_0_ng_template_3_ng_template_4_Template, 1, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("itemLink"));
    \u0275\u0275property("target", item_r3.target);
    \u0275\u0275attribute("href", item_r3.url, \u0275\u0275sanitizeUrl)("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact && (!item_r3.disabled || ctx_r4.readonly) ? "step" : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r4.cx("itemNumber"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_For_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8, 1);
    \u0275\u0275template(2, Steps_For_4_li_0_a_2_Template, 6, 22, "a", 9)(3, Steps_For_4_li_0_ng_template_3_Template, 6, 13, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const elseBlock_r9 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r4.cx("item", \u0275\u0275pureFunction2(10, _c1, item_r3, \u0275$index_5_r4)));
    \u0275\u0275property("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions)("pTooltipUnstyled", ctx_r4.unstyled());
    \u0275\u0275attribute("aria-current", ctx_r4.isActive(item_r3, \u0275$index_5_r4) ? "step" : void 0)("id", item_r3.id)("data-pc-section", "menuitem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
function Steps_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Steps_For_4_li_0_Template, 5, 13, "li", 7);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r3.visible !== false);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-steps p-component", {
    "p-readonly": instance.readonly
  }],
  list: "p-steps-list",
  item: ({
    instance,
    item,
    index
  }) => ["p-steps-item", {
    "p-steps-item-active": instance.isActive(item, index),
    "p-disabled": instance.isItemDisabled(item, index)
  }],
  itemLink: "p-steps-item-link",
  itemNumber: "p-steps-item-number",
  itemLabel: "p-steps-item-label"
};
var StepsStyle = class _StepsStyle extends BaseStyle {
  name = "steps";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepsStyle_BaseFactory;
    return function StepsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepsStyle_BaseFactory || (\u0275StepsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepsStyle)))(__ngFactoryType__ || _StepsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepsStyle,
    factory: _StepsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepsClasses;
(function(StepsClasses2) {
  StepsClasses2["root"] = "p-steps";
  StepsClasses2["list"] = "p-steps-list";
  StepsClasses2["item"] = "p-steps-item";
  StepsClasses2["itemLink"] = "p-steps-item-link";
  StepsClasses2["itemNumber"] = "p-steps-item-number";
  StepsClasses2["itemLabel"] = "p-steps-item-label";
})(StepsClasses || (StepsClasses = {}));
var Steps = class _Steps extends BaseComponent {
  componentName = "Steps";
  /**
   * Index of the active item.
   * @group Props
   */
  activeIndex = 0;
  /**
   * An array of menu items.
   * @group Props
   */
  model;
  /**
   * Whether the items are clickable or not.
   * @group Props
   */
  readonly = true;
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
   * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
   * @group Props
   */
  exact = true;
  /**
   * Callback to invoke when the new step is selected.
   * @param {number} number - current index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  listViewChild;
  router = inject(Router);
  route = inject(ActivatedRoute);
  _componentStyle = inject(StepsStyle);
  subscription;
  onInit() {
    this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
  }
  onItemClick(event, item, i) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }
    this.activeIndexChange.emit(i);
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
        index: i
      });
    }
  }
  onItemKeydown(event, item, i) {
    switch (event.code) {
      case "ArrowRight": {
        this.navigateToNextItem(event.target);
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        this.navigateToPrevItem(event.target);
        event.preventDefault();
        break;
      }
      case "Home": {
        this.navigateToFirstItem(event.target);
        event.preventDefault();
        break;
      }
      case "End": {
        this.navigateToLastItem(event.target);
        event.preventDefault();
        break;
      }
      case "Tab":
        if (i !== (this.activeIndex ?? -1)) {
          const siblings = Y(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
          siblings[i].children[0].tabIndex = "-1";
          siblings[this.activeIndex ?? 0].children[0].tabIndex = "0";
        }
        break;
      case "Enter":
      case "Space": {
        this.onItemClick(event, item, i);
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  navigateToNextItem(target) {
    const nextItem = this.findNextItem(target);
    nextItem && this.setFocusToMenuitem(target, nextItem);
  }
  navigateToPrevItem(target) {
    const prevItem = this.findPrevItem(target);
    prevItem && this.setFocusToMenuitem(target, prevItem);
  }
  navigateToFirstItem(target) {
    const firstItem = this.findFirstItem();
    firstItem && this.setFocusToMenuitem(target, firstItem);
  }
  navigateToLastItem(target) {
    const lastItem = this.findLastItem();
    lastItem && this.setFocusToMenuitem(target, lastItem);
  }
  findNextItem(item) {
    const nextItem = item.parentElement.nextElementSibling;
    return nextItem ? nextItem.children[0] : null;
  }
  findPrevItem(item) {
    const prevItem = item.parentElement.previousElementSibling;
    return prevItem ? prevItem.children[0] : null;
  }
  findFirstItem() {
    const firstSibling = z(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
    return firstSibling ? firstSibling.children[0] : null;
  }
  findLastItem() {
    const siblings = Y(this.listViewChild?.nativeElement, '[data-pc-section="menuitem"]');
    return siblings ? siblings[siblings.length - 1].children[0] : null;
  }
  setFocusToMenuitem(target, focusableItem) {
    target.tabIndex = "-1";
    focusableItem.tabIndex = "0";
    focusableItem.focus();
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.readonly && !item.disabled;
  }
  isItemDisabled(item, index) {
    return item.disabled || this.readonly && !this.isActive(item, index);
  }
  isActive(item, index) {
    if (item.routerLink) {
      let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), false);
    }
    return index === this.activeIndex;
  }
  getItemTabIndex(item, index) {
    if (item.disabled) {
      return "-1";
    }
    if (!item.disabled && this.activeIndex === index) {
      return item.tabindex || "0";
    }
    return item.tabindex ?? "-1";
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Steps_BaseFactory;
    return function Steps_Factory(__ngFactoryType__) {
      return (\u0275Steps_BaseFactory || (\u0275Steps_BaseFactory = \u0275\u0275getInheritedFactory(_Steps)))(__ngFactoryType__ || _Steps);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Steps,
    selectors: [["p-steps"]],
    viewQuery: function Steps_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    inputs: {
      activeIndex: [2, "activeIndex", "activeIndex", numberAttribute],
      model: "model",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      exact: [2, "exact", "exact", booleanAttribute]
    },
    outputs: {
      activeIndexChange: "activeIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepsStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 7,
    consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngStyle"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", "pTooltipUnstyled"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", "pTooltipUnstyled", 4, "ngIf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions", "pTooltipUnstyled"], ["role", "link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["role", "link", 3, "click", "keydown", "target"]],
    template: function Steps_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 5)(1, "ul", null, 0);
        \u0275\u0275repeaterCreate(3, Steps_For_4_Template, 1, 1, "li", 6, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275property("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "steps");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("list"));
        \u0275\u0275attribute("data-pc-section", "menu");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.model);
      }
    },
    dependencies: [CommonModule, NgIf, NgStyle, RouterModule, RouterLink, TooltipModule, Tooltip, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Steps, [{
    type: Component,
    args: [{
      selector: "p-steps",
      standalone: true,
      imports: [CommonModule, RouterModule, TooltipModule, SharedModule],
      template: `
        <nav [class]="cn(cx('root'), styleClass)" [ngStyle]="style" [attr.data-pc-name]="'steps'">
            <ul #list [attr.data-pc-section]="'menu'" [class]="cx('list')">
                @for (item of model; track item.label; let i = $index) {
                    <li
                        *ngIf="item.visible !== false"
                        [class]="cx('item', { item, index: i })"
                        #menuitem
                        [ngStyle]="item.style"
                        [attr.aria-current]="isActive(item, i) ? 'step' : undefined"
                        [attr.id]="item.id"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        [pTooltipUnstyled]="unstyled()"
                        [attr.data-pc-section]="'menuitem'"
                    >
                        <a
                            role="link"
                            *ngIf="isClickableRouterLink(item); else elseBlock"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            [class]="cx('itemLink')"
                            (click)="onItemClick($event, item, i)"
                            (keydown)="onItemKeydown($event, item, i)"
                            [target]="item.target"
                            [attr.tabindex]="getItemTabIndex(item, i)"
                            [attr.aria-expanded]="i === activeIndex"
                            [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                            [attr.ariaCurrentWhenActive]="exact ? 'step' : undefined"
                        >
                            <span [class]="cx('itemNumber')">{{ i + 1 }}</span>
                            <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                            <ng-template #htmlLabel><span [class]="cx('itemLabel')" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <ng-template #elseBlock>
                            <a
                                role="link"
                                [attr.href]="item.url"
                                [class]="cx('itemLink')"
                                (click)="onItemClick($event, item, i)"
                                (keydown)="onItemKeydown($event, item, i)"
                                [target]="item.target"
                                [attr.tabindex]="getItemTabIndex(item, i)"
                                [attr.aria-expanded]="i === activeIndex"
                                [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                                [attr.ariaCurrentWhenActive]="exact && (!item.disabled || readonly) ? 'step' : undefined"
                            >
                                <span [class]="cx('itemNumber')">{{ i + 1 }}</span>
                                <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                                <ng-template #htmlRouteLabel><span [class]="cx('itemLabel')" [innerHTML]="item.label"></span></ng-template>
                            </a>
                        </ng-template>
                    </li>
                }
            </ul>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepsStyle]
    }]
  }], null, {
    activeIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    model: [{
      type: Input
    }],
    readonly: [{
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
    exact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndexChange: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var StepsModule = class _StepsModule {
  static \u0275fac = function StepsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepsModule,
    imports: [Steps, SharedModule],
    exports: [Steps, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Steps, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsModule, [{
    type: NgModule,
    args: [{
      imports: [Steps, SharedModule],
      exports: [Steps, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/image/index.mjs
var style2 = "\n    .p-image-mask {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-image-preview {\n        position: relative;\n        display: inline-flex;\n        line-height: 0;\n    }\n\n    .p-image-preview-mask {\n        position: absolute;\n        inset-inline-start: 0;\n        inset-block-start: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        border: 0 none;\n        padding: 0;\n        cursor: pointer;\n        background: transparent;\n        color: dt('image.preview.mask.color');\n        transition: background dt('image.transition.duration');\n    }\n\n    .p-image-preview:hover > .p-image-preview-mask,\n    .p-image-preview-mask:focus-visible {\n        opacity: 1;\n        cursor: pointer;\n        background: dt('image.preview.mask.background');\n        outline: 0 none;\n    }\n\n    .p-image-preview-icon {\n        font-size: dt('image.preview.icon.size');\n        width: dt('image.preview.icon.size');\n        height: dt('image.preview.icon.size');\n    }\n\n    .p-image-toolbar {\n        position: absolute;\n        inset-block-start: dt('image.toolbar.position.top');\n        inset-inline-end: dt('image.toolbar.position.right');\n        inset-inline-start: dt('image.toolbar.position.left');\n        inset-block-end: dt('image.toolbar.position.bottom');\n        display: flex;\n        z-index: 1;\n        padding: dt('image.toolbar.padding');\n        background: dt('image.toolbar.background');\n        backdrop-filter: blur(dt('image.toolbar.blur'));\n        border-color: dt('image.toolbar.border.color');\n        border-style: solid;\n        border-width: dt('image.toolbar.border.width');\n        border-radius: dt('image.toolbar.border.radius');\n        gap: dt('image.toolbar.gap');\n    }\n\n    .p-image-action {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        color: dt('image.action.color');\n        background: transparent;\n        width: dt('image.action.size');\n        height: dt('image.action.size');\n        margin: 0;\n        padding: 0;\n        border: 0 none;\n        cursor: pointer;\n        user-select: none;\n        border-radius: dt('image.action.border.radius');\n        outline-color: transparent;\n        transition:\n            background dt('image.transition.duration'),\n            color dt('image.transition.duration'),\n            outline-color dt('image.transition.duration'),\n            box-shadow dt('image.transition.duration');\n    }\n\n    .p-image-action:hover {\n        color: dt('image.action.hover.color');\n        background: dt('image.action.hover.background');\n    }\n\n    .p-image-action:focus-visible {\n        box-shadow: dt('image.action.focus.ring.shadow');\n        outline: dt('image.action.focus.ring.width') dt('image.action.focus.ring.style') dt('image.action.focus.ring.color');\n        outline-offset: dt('image.action.focus.ring.offset');\n    }\n\n    .p-image-action .p-icon {\n        font-size: dt('image.action.icon.size');\n        width: dt('image.action.icon.size');\n        height: dt('image.action.icon.size');\n    }\n\n    .p-image-action.p-disabled {\n        pointer-events: auto;\n    }\n\n    .p-image-original {\n        max-width: 100vw;\n        max-height: 100vh;\n        transition: transform 300ms;\n    }\n\n    .p-image-original-enter-active {\n        animation: p-animate-image-original-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-image-original-leave-active {\n        animation: p-animate-image-original-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-image-original-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-image-original-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-image.mjs
var _c06 = ["indicator"];
var _c12 = ["rotaterighticon"];
var _c22 = ["rotatelefticon"];
var _c3 = ["zoomouticon"];
var _c4 = ["zoominicon"];
var _c5 = ["closeicon"];
var _c6 = ["preview"];
var _c7 = ["image"];
var _c8 = ["mask"];
var _c9 = ["previewButton"];
var _c10 = ["closeButton"];
var _c11 = (a0) => ({
  errorCallback: a0
});
var _c122 = (a0, a1) => ({
  height: a0,
  width: a1
});
var _c13 = (a0, a1, a2) => ({
  class: a0,
  style: a1,
  previewCallback: a2
});
function Image_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 8);
    \u0275\u0275listener("error", function Image_ng_container_0_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.imageClass);
    \u0275\u0275property("ngStyle", ctx_r1.imageStyle)("pBind", ctx_r1.ptm("image"));
    \u0275\u0275attribute("src", ctx_r1.src, \u0275\u0275sanitizeUrl)("srcset", ctx_r1.srcSet)("sizes", ctx_r1.sizes)("alt", ctx_r1.alt)("width", ctx_r1.width)("height", ctx_r1.height)("loading", ctx_r1.loading);
  }
}
function Image_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_button_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_button_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Image_button_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.indicatorTemplate || ctx_r1._indicatorTemplate);
  }
}
function Image_button_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("previewIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("previewIcon"));
  }
}
function Image_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9, 0);
    \u0275\u0275listener("click", function Image_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageClick());
    });
    \u0275\u0275template(2, Image_button_2_ng_container_2_Template, 2, 1, "ng-container", 10)(3, Image_button_2_ng_template_3_Template, 1, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTemplate_r4 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("previewMask"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(7, _c122, ctx_r1.height + "px", ctx_r1.width + "px"))("pBind", ctx_r1.ptm("previewMask"));
    \u0275\u0275attribute("aria-label", ctx_r1.zoomImageAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.indicatorTemplate || ctx_r1._indicatorTemplate)("ngIfElse", defaultTemplate_r4);
  }
}
function Image_Conditional_3__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 23);
  }
}
function Image_Conditional_3_5_ng_template_0_Template(rf, ctx) {
}
function Image_Conditional_3_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_Conditional_3_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_Conditional_3__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 24);
  }
}
function Image_Conditional_3_8_ng_template_0_Template(rf, ctx) {
}
function Image_Conditional_3_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_Conditional_3_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_Conditional_3__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 25);
  }
}
function Image_Conditional_3_11_ng_template_0_Template(rf, ctx) {
}
function Image_Conditional_3_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_Conditional_3_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_Conditional_3__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
}
function Image_Conditional_3_14_ng_template_0_Template(rf, ctx) {
}
function Image_Conditional_3_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_Conditional_3_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_Conditional_3__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 27);
  }
}
function Image_Conditional_3_18_ng_template_0_Template(rf, ctx) {
}
function Image_Conditional_3_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_Conditional_3_18_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_Conditional_3_Conditional_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 29);
    \u0275\u0275listener("click", function Image_Conditional_3_Conditional_19_ng_container_1_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPreviewImageClick());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("original"));
    \u0275\u0275property("ngStyle", ctx_r1.imagePreviewStyle())("pBind", ctx_r1.ptm("original"));
    \u0275\u0275attribute("src", ctx_r1.previewImageSrc ? ctx_r1.previewImageSrc : ctx_r1.src, \u0275\u0275sanitizeUrl)("srcset", ctx_r1.previewImageSrcSet)("sizes", ctx_r1.previewImageSizes);
  }
}
function Image_Conditional_3_Conditional_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_Conditional_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-motion", 28);
    \u0275\u0275listener("onBeforeEnter", function Image_Conditional_3_Conditional_19_Template_p_motion_onBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("onBeforeLeave", function Image_Conditional_3_Conditional_19_Template_p_motion_onBeforeLeave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBeforeLeave());
    })("onAfterLeave", function Image_Conditional_3_Conditional_19_Template_p_motion_onAfterLeave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(1, Image_Conditional_3_Conditional_19_ng_container_1_Template, 2, 7, "ng-container", 4)(2, Image_Conditional_3_Conditional_19_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("visible", ctx_r1.previewVisible)("appear", true)("options", ctx_r1.computedMotionOptions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previewTemplate && !ctx_r1._previewTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previewTemplate || ctx_r1._previewTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(6, _c13, ctx_r1.cx("original"), ctx_r1.imagePreviewStyle(), ctx_r1.onPreviewImageClick.bind(ctx_r1)));
  }
}
function Image_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13, 2);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskClick());
    })("keydown", function Image_Conditional_3_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskKeydown($event));
    })("pMotionOnAfterLeave", function Image_Conditional_3_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskAfterLeave());
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleToolbarClick($event));
    });
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rotateRight());
    });
    \u0275\u0275template(4, Image_Conditional_3__svg_svg_4_Template, 1, 0, "svg", 16)(5, Image_Conditional_3_5_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rotateLeft());
    });
    \u0275\u0275template(7, Image_Conditional_3__svg_svg_7_Template, 1, 0, "svg", 17)(8, Image_Conditional_3_8_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomOut());
    });
    \u0275\u0275template(10, Image_Conditional_3__svg_svg_10_Template, 1, 0, "svg", 19)(11, Image_Conditional_3_11_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomIn());
    });
    \u0275\u0275template(13, Image_Conditional_3__svg_svg_13_Template, 1, 0, "svg", 20)(14, Image_Conditional_3_14_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 15, 3);
    \u0275\u0275listener("click", function Image_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275template(17, Image_Conditional_3__svg_svg_17_Template, 1, 0, "svg", 21)(18, Image_Conditional_3_18_Template, 1, 0, null, 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, Image_Conditional_3_Conditional_19_Template, 3, 10, "p-motion", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("mask"));
    \u0275\u0275property("pBind", ctx_r1.ptm("mask"))("pMotion", ctx_r1.maskVisible)("pMotionAppear", true)("pMotionEnterActiveClass", "p-overlay-mask-enter-active")("pMotionLeaveActiveClass", "p-overlay-mask-leave-active")("pMotionOptions", ctx_r1.computedMaskMotionOptions());
    \u0275\u0275attribute("aria-modal", ctx_r1.maskVisible);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("toolbar"));
    \u0275\u0275property("pBind", ctx_r1.ptm("toolbar"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("rotateRightButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("rotateRightButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.rightAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rotateRightIconTemplate && !ctx_r1._rotateRightIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate || ctx_r1._rotateRightIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("rotateLeftButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("rotateLeftButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.leftAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rotateLeftIconTemplate && !ctx_r1._rotateLeftIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate || ctx_r1._rotateLeftIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("zoomOutButton"));
    \u0275\u0275property("disabled", ctx_r1.isZoomOutDisabled)("pBind", ctx_r1.ptm("zoomOutButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.zoomOutAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomOutIconTemplate && !ctx_r1._zoomOutIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate || ctx_r1._zoomOutIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("zoomInButton"));
    \u0275\u0275property("disabled", ctx_r1.isZoomInDisabled)("pBind", ctx_r1.ptm("zoomInButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.zoomInAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomInIconTemplate && !ctx_r1._zoomInIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.zoomInIconTemplate || ctx_r1._zoomInIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("closeButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("closeButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.renderPreview() ? 19 : -1);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-image p-component", {
    "p-image-preview": instance.preview
  }],
  previewMask: "p-image-preview-mask",
  previewIcon: "p-image-preview-icon",
  mask: "p-image-mask p-overlay-mask",
  toolbar: "p-image-toolbar",
  rotateRightButton: "p-image-action p-image-rotate-right-button",
  rotateLeftButton: "p-image-action p-image-rotate-left-button",
  zoomOutButton: ({
    instance
  }) => ["p-image-action p-image-zoom-out-button", {
    "p-disabled": instance.isZoomOutDisabled
  }],
  zoomInButton: ({
    instance
  }) => ["p-image-action p-image-zoom-in-button", {
    "p-disabled": instance.isZoomInDisabled
  }],
  closeButton: "p-image-action p-image-close-button",
  original: "p-image-original"
};
var ImageStyle = class _ImageStyle extends BaseStyle {
  name = "image";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ImageStyle_BaseFactory;
    return function ImageStyle_Factory(__ngFactoryType__) {
      return (\u0275ImageStyle_BaseFactory || (\u0275ImageStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ImageStyle)))(__ngFactoryType__ || _ImageStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ImageStyle,
    factory: _ImageStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageStyle, [{
    type: Injectable
  }], null, null);
})();
var ImageClasses;
(function(ImageClasses2) {
  ImageClasses2["root"] = "p-image";
  ImageClasses2["previewMask"] = "p-image-preview-mask";
  ImageClasses2["previewIcon"] = "p-image-preview-icon";
  ImageClasses2["mask"] = "p-image-mask";
  ImageClasses2["toolbar"] = "p-image-toolbar";
  ImageClasses2["rotateRightButton"] = "p-image-rotate-right-button";
  ImageClasses2["rotateLeftButton"] = "p-image-rotate-left-button";
  ImageClasses2["zoomOutButton"] = "p-image-zoom-out-button";
  ImageClasses2["zoomInButton"] = "p-image-zoom-in-button";
  ImageClasses2["closeButton"] = "p-image-close-button";
  ImageClasses2["original"] = "p-image-original";
})(ImageClasses || (ImageClasses = {}));
var IMAGE_INSTANCE = new InjectionToken("IMAGE_INSTANCE");
var Image2 = class _Image extends BaseComponent {
  componentName = "Image";
  $pcImage = inject(IMAGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Style class of the image element.
   * @group Props
   */
  imageClass;
  /**
   * Inline style of the image element.
   * @group Props
   */
  imageStyle;
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * The source path for the main image.
   * @group Props
   */
  src;
  /**
   * The srcset definition for the main image.
   * @group Props
   */
  srcSet;
  /**
   * The sizes definition for the main image.
   * @group Props
   */
  sizes;
  /**
   * The source path for the preview image.
   * @group Props
   */
  previewImageSrc;
  /**
   * The srcset definition for the preview image.
   * @group Props
   */
  previewImageSrcSet;
  /**
   * The sizes definition for the preview image.
   * @group Props
   */
  previewImageSizes;
  /**
   * Attribute of the preview image element.
   * @group Props
   */
  alt;
  /**
   * Attribute of the image element.
   * @group Props
   */
  width;
  /**
   * Attribute of the image element.
   * @group Props
   */
  height;
  /**
   * Attribute of the image element.
   * @group Props
   */
  loading;
  /**
   * Controls the preview functionality.
   * @group Props
   */
  preview = false;
  /**
   * Transition options of the show animation
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Enter animation class name of modal.
   * @defaultValue 'p-modal-enter'
   * @group Props
   */
  modalEnterAnimation = input("p-modal-enter", ...ngDevMode ? [{
    debugName: "modalEnterAnimation"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Leave animation class name of modal.
   * @defaultValue 'p-modal-leave'
   * @group Props
   */
  modalLeaveAnimation = input("p-modal-leave", ...ngDevMode ? [{
    debugName: "modalLeaveAnimation"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options for the mask.
   * @group Props
   */
  maskMotionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "maskMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMaskMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("maskMotion")), this.maskMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMaskMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Triggered when the preview overlay is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Triggered when the preview overlay is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  mask;
  previewButton;
  closeButton;
  /**
   * Custom indicator template.
   * @group Templates
   */
  indicatorTemplate;
  /**
   * Custom rotate right icon template.
   * @group Templates
   */
  rotateRightIconTemplate;
  /**
   * Custom rotate left icon template.
   * @group Templates
   */
  rotateLeftIconTemplate;
  /**
   * Custom zoom out icon template.
   * @group Templates
   */
  zoomOutIconTemplate;
  /**
   * Custom zoom in icon template.
   * @group Templates
   */
  zoomInIconTemplate;
  /**
   * Custom close icon template.
   * @group Templates
   */
  closeIconTemplate;
  /**
   * Custom preview template.
   * @group Templates
   */
  previewTemplate;
  /**
   * Custom image template.
   * @group Templates
   */
  imageTemplate;
  renderMask = signal(false, ...ngDevMode ? [{
    debugName: "renderMask"
  }] : (
    /* istanbul ignore next */
    []
  ));
  renderPreview = signal(false, ...ngDevMode ? [{
    debugName: "renderPreview"
  }] : (
    /* istanbul ignore next */
    []
  ));
  maskVisible = false;
  previewVisible = false;
  rotate = 0;
  scale = 1;
  previewClick = false;
  container;
  wrapper;
  _componentStyle = inject(ImageStyle);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  get isZoomOutDisabled() {
    return this.scale - this.zoomSettings.step <= this.zoomSettings.min;
  }
  get isZoomInDisabled() {
    return this.scale + this.zoomSettings.step >= this.zoomSettings.max;
  }
  zoomSettings = {
    default: 1,
    step: 0.1,
    max: 1.5,
    min: 0.5
  };
  templates;
  _indicatorTemplate;
  _rotateRightIconTemplate;
  _rotateLeftIconTemplate;
  _zoomOutIconTemplate;
  _zoomInIconTemplate;
  _closeIconTemplate;
  _imageTemplate;
  _previewTemplate;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "indicator":
          this._indicatorTemplate = item.template;
          break;
        case "rotaterighticon":
          this._rotateRightIconTemplate = item.template;
          break;
        case "rotatelefticon":
          this._rotateLeftIconTemplate = item.template;
          break;
        case "zoomouticon":
          this._zoomOutIconTemplate = item.template;
          break;
        case "zoominicon":
          this._zoomInIconTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
        case "image":
          this._imageTemplate = item.template;
          break;
        case "preview":
          this._previewTemplate = item.template;
          break;
        default:
          this._indicatorTemplate = item.template;
          break;
      }
    });
  }
  onImageClick() {
    if (this.preview) {
      this.maskVisible = true;
      this.previewVisible = true;
      this.renderMask.set(true);
      this.renderPreview.set(true);
      blockBodyScroll();
    }
  }
  onMaskClick() {
    if (!this.previewClick) {
      this.closePreview();
    }
    this.previewClick = false;
  }
  onMaskKeydown(event) {
    switch (event.code) {
      case "Escape":
        this.onMaskClick();
        setTimeout(() => {
          bt(this.previewButton?.nativeElement);
        }, 25);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  onPreviewImageClick() {
    this.previewClick = true;
  }
  rotateRight() {
    this.rotate += 90;
    this.previewClick = true;
  }
  rotateLeft() {
    this.rotate -= 90;
    this.previewClick = true;
  }
  zoomIn() {
    this.scale = this.scale + this.zoomSettings.step;
    this.previewClick = true;
  }
  zoomOut() {
    this.scale = this.scale - this.zoomSettings.step;
    this.previewClick = true;
  }
  onAnimationStart(event) {
    this.container = event.element;
    this.wrapper = this.container?.parentElement;
    this.$attrSelector && this.wrapper?.setAttribute(this.$attrSelector, "");
    this.appendContainer();
    this.moveOnTop();
    this.onShow.emit({});
    setTimeout(() => {
      bt(this.closeButton?.nativeElement);
    }, 25);
  }
  onBeforeLeave() {
    this.maskVisible = false;
  }
  onAnimationEnd() {
    this.renderPreview.set(false);
  }
  onMaskAfterLeave() {
    if (!this.renderPreview()) {
      this.renderMask.set(false);
    }
    zindexutils.clear(this.wrapper);
    this.container = null;
    this.wrapper = null;
    this.rotate = 0;
    this.scale = this.zoomSettings.default;
    unblockBodyScroll();
    this.onHide.emit({});
    this.cd.markForCheck();
  }
  moveOnTop() {
    zindexutils.set("modal", this.wrapper, this.config.zIndex.modal);
  }
  appendContainer() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body" && this.wrapper) {
        this.document.body.appendChild(this.wrapper);
      } else if (this.wrapper) {
        ut(this.$appendTo(), this.wrapper);
      }
    }
  }
  imagePreviewStyle() {
    return {
      transform: "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
    };
  }
  get zoomImageAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomImage : void 0;
  }
  handleToolbarClick(event) {
    event.stopPropagation();
  }
  closePreview() {
    this.previewVisible = false;
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  rightAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.rotateRight : void 0;
  }
  leftAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.rotateLeft : void 0;
  }
  zoomInAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomIn : void 0;
  }
  zoomOutAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.zoomOut : void 0;
  }
  closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onKeydownHandler() {
    if (this.previewVisible) {
      this.closePreview();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Image_BaseFactory;
    return function Image_Factory(__ngFactoryType__) {
      return (\u0275Image_BaseFactory || (\u0275Image_BaseFactory = \u0275\u0275getInheritedFactory(_Image)))(__ngFactoryType__ || _Image);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Image,
    selectors: [["p-image"]],
    contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 4)(dirIndex, _c12, 4)(dirIndex, _c22, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, _c5, 4)(dirIndex, _c6, 4)(dirIndex, _c7, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.indicatorTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rotateRightIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rotateLeftIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomOutIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomInIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Image_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c8, 5)(_c9, 5)(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mask = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeButton = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function Image_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function Image_keydown_escape_HostBindingHandler() {
          return ctx.onKeydownHandler();
        }, \u0275\u0275resolveDocument);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      imageClass: "imageClass",
      imageStyle: "imageStyle",
      styleClass: "styleClass",
      src: "src",
      srcSet: "srcSet",
      sizes: "sizes",
      previewImageSrc: "previewImageSrc",
      previewImageSrcSet: "previewImageSrcSet",
      previewImageSizes: "previewImageSizes",
      alt: "alt",
      width: "width",
      height: "height",
      loading: "loading",
      preview: [2, "preview", "preview", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      modalEnterAnimation: [1, "modalEnterAnimation"],
      modalLeaveAnimation: [1, "modalLeaveAnimation"],
      appendTo: [1, "appendTo"],
      maskMotionOptions: [1, "maskMotionOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ImageStyle, {
      provide: IMAGE_INSTANCE,
      useExisting: _Image
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Image
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 4,
    vars: 7,
    consts: [["previewButton", ""], ["defaultTemplate", ""], ["mask", ""], ["closeButton", ""], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "class", "ngStyle", "pBind", "click", 4, "ngIf"], ["role", "dialog", "pFocusTrap", "", 3, "class", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], [3, "error", "ngStyle", "pBind"], ["type", "button", 3, "click", "ngStyle", "pBind"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["data-p-icon", "eye", 3, "pBind"], ["role", "dialog", "pFocusTrap", "", 3, "click", "keydown", "pMotionOnAfterLeave", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], [3, "click", "pBind"], ["type", "button", 3, "click", "pBind"], ["data-p-icon", "refresh", 4, "ngIf"], ["data-p-icon", "undo", 4, "ngIf"], ["type", "button", 3, "click", "disabled", "pBind"], ["data-p-icon", "search-minus", 4, "ngIf"], ["data-p-icon", "search-plus", 4, "ngIf"], ["data-p-icon", "times", 4, "ngIf"], ["name", "p-image-original", 3, "visible", "appear", "options"], ["data-p-icon", "refresh"], ["data-p-icon", "undo"], ["data-p-icon", "search-minus"], ["data-p-icon", "search-plus"], ["data-p-icon", "times"], ["name", "p-image-original", 3, "onBeforeEnter", "onBeforeLeave", "onAfterLeave", "visible", "appear", "options"], [3, "click", "ngStyle", "pBind"]],
    template: function Image_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Image_ng_container_0_Template, 2, 11, "ng-container", 4)(1, Image_ng_container_1_Template, 1, 0, "ng-container", 5)(2, Image_button_2_Template, 5, 10, "button", 6);
        \u0275\u0275conditionalCreate(3, Image_Conditional_3_Template, 20, 45, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.imageTemplate && !ctx._imageTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.imageTemplate || ctx._imageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c11, ctx.imageError.bind(ctx)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preview);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.renderMask() ? 3 : -1);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrap, SharedModule, BindModule, Bind, MotionModule, Motion, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Image2, [{
    type: Component,
    args: [{
      selector: "p-image",
      standalone: true,
      imports: [CommonModule, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrap, SharedModule, BindModule, MotionModule],
      template: `
        <ng-container *ngIf="!imageTemplate && !_imageTemplate">
            <img
                [attr.src]="src"
                [attr.srcset]="srcSet"
                [attr.sizes]="sizes"
                [attr.alt]="alt"
                [attr.width]="width"
                [attr.height]="height"
                [attr.loading]="loading"
                [ngStyle]="imageStyle"
                [class]="imageClass"
                (error)="imageError($event)"
                [pBind]="ptm('image')"
            />
        </ng-container>

        <ng-container *ngTemplateOutlet="imageTemplate || _imageTemplate; context: { errorCallback: imageError.bind(this) }"></ng-container>

        <button *ngIf="preview" [attr.aria-label]="zoomImageAriaLabel" type="button" [class]="cx('previewMask')" (click)="onImageClick()" #previewButton [ngStyle]="{ height: height + 'px', width: width + 'px' }" [pBind]="ptm('previewMask')">
            <ng-container *ngIf="indicatorTemplate || _indicatorTemplate; else defaultTemplate">
                <ng-container *ngTemplateOutlet="indicatorTemplate || _indicatorTemplate"></ng-container>
            </ng-container>
            <ng-template #defaultTemplate>
                <svg data-p-icon="eye" [class]="cx('previewIcon')" [pBind]="ptm('previewIcon')" />
            </ng-template>
        </button>
        @if (renderMask()) {
            <div
                #mask
                [class]="cx('mask')"
                [attr.aria-modal]="maskVisible"
                role="dialog"
                (click)="onMaskClick()"
                (keydown)="onMaskKeydown($event)"
                pFocusTrap
                [pBind]="ptm('mask')"
                [pMotion]="maskVisible"
                [pMotionAppear]="true"
                [pMotionEnterActiveClass]="'p-overlay-mask-enter-active'"
                [pMotionLeaveActiveClass]="'p-overlay-mask-leave-active'"
                [pMotionOptions]="computedMaskMotionOptions()"
                (pMotionOnAfterLeave)="onMaskAfterLeave()"
            >
                <div [class]="cx('toolbar')" (click)="handleToolbarClick($event)" [pBind]="ptm('toolbar')">
                    <button [class]="cx('rotateRightButton')" (click)="rotateRight()" type="button" [attr.aria-label]="rightAriaLabel()" [pBind]="ptm('rotateRightButton')">
                        <svg data-p-icon="refresh" *ngIf="!rotateRightIconTemplate && !_rotateRightIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateRightIconTemplate || _rotateRightIconTemplate"></ng-template>
                    </button>
                    <button [class]="cx('rotateLeftButton')" (click)="rotateLeft()" type="button" [attr.aria-label]="leftAriaLabel()" [pBind]="ptm('rotateLeftButton')">
                        <svg data-p-icon="undo" *ngIf="!rotateLeftIconTemplate && !_rotateLeftIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateLeftIconTemplate || _rotateLeftIconTemplate"></ng-template>
                    </button>
                    <button [class]="cx('zoomOutButton')" (click)="zoomOut()" type="button" [disabled]="isZoomOutDisabled" [attr.aria-label]="zoomOutAriaLabel()" [pBind]="ptm('zoomOutButton')">
                        <svg data-p-icon="search-minus" *ngIf="!zoomOutIconTemplate && !_zoomOutIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomOutIconTemplate || _zoomOutIconTemplate"></ng-template>
                    </button>
                    <button [class]="cx('zoomInButton')" (click)="zoomIn()" type="button" [disabled]="isZoomInDisabled" [attr.aria-label]="zoomInAriaLabel()" [pBind]="ptm('zoomInButton')">
                        <svg data-p-icon="search-plus" *ngIf="!zoomInIconTemplate && !_zoomInIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomInIconTemplate || _zoomInIconTemplate"></ng-template>
                    </button>
                    <button [class]="cx('closeButton')" type="button" (click)="closePreview()" [attr.aria-label]="closeAriaLabel()" #closeButton [pBind]="ptm('closeButton')">
                        <svg data-p-icon="times" *ngIf="!closeIconTemplate && !_closeIconTemplate" />
                        <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                    </button>
                </div>
                @if (renderPreview()) {
                    <p-motion [visible]="previewVisible" name="p-image-original" [appear]="true" [options]="computedMotionOptions()" (onBeforeEnter)="onAnimationStart($event)" (onBeforeLeave)="onBeforeLeave()" (onAfterLeave)="onAnimationEnd($event)">
                        <ng-container *ngIf="!previewTemplate && !_previewTemplate">
                            <img
                                [attr.src]="previewImageSrc ? previewImageSrc : src"
                                [attr.srcset]="previewImageSrcSet"
                                [attr.sizes]="previewImageSizes"
                                [class]="cx('original')"
                                [ngStyle]="imagePreviewStyle()"
                                (click)="onPreviewImageClick()"
                                [pBind]="ptm('original')"
                            />
                        </ng-container>
                        <ng-container
                            *ngTemplateOutlet="
                                previewTemplate || _previewTemplate;
                                context: {
                                    class: cx('original'),
                                    style: imagePreviewStyle(),
                                    previewCallback: onPreviewImageClick.bind(this)
                                }
                            "
                        >
                        </ng-container>
                    </p-motion>
                }
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ImageStyle, {
        provide: IMAGE_INSTANCE,
        useExisting: Image2
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Image2
      }],
      host: {
        "[class]": "cn(cx('root'),styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    imageClass: [{
      type: Input
    }],
    imageStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    srcSet: [{
      type: Input
    }],
    sizes: [{
      type: Input
    }],
    previewImageSrc: [{
      type: Input
    }],
    previewImageSrcSet: [{
      type: Input
    }],
    previewImageSizes: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    preview: [{
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
    modalEnterAnimation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "modalEnterAnimation",
        required: false
      }]
    }],
    modalLeaveAnimation: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "modalLeaveAnimation",
        required: false
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    maskMotionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskMotionOptions",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    mask: [{
      type: ViewChild,
      args: ["mask"]
    }],
    previewButton: [{
      type: ViewChild,
      args: ["previewButton"]
    }],
    closeButton: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    indicatorTemplate: [{
      type: ContentChild,
      args: ["indicator", {
        descendants: false
      }]
    }],
    rotateRightIconTemplate: [{
      type: ContentChild,
      args: ["rotaterighticon", {
        descendants: false
      }]
    }],
    rotateLeftIconTemplate: [{
      type: ContentChild,
      args: ["rotatelefticon", {
        descendants: false
      }]
    }],
    zoomOutIconTemplate: [{
      type: ContentChild,
      args: ["zoomouticon", {
        descendants: false
      }]
    }],
    zoomInIconTemplate: [{
      type: ContentChild,
      args: ["zoominicon", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    previewTemplate: [{
      type: ContentChild,
      args: ["preview", {
        descendants: false
      }]
    }],
    imageTemplate: [{
      type: ContentChild,
      args: ["image", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onKeydownHandler: [{
      type: HostListener,
      args: ["document:keydown.escape"]
    }]
  });
})();
var ImageModule = class _ImageModule {
  static \u0275fac = function ImageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ImageModule,
    imports: [Image2, SharedModule],
    exports: [Image2, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Image2, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageModule, [{
    type: NgModule,
    args: [{
      imports: [Image2, SharedModule],
      exports: [Image2, SharedModule]
    }]
  }], null, null);
})();

// node_modules/ngx-image-cropper/fesm2022/ngx-image-cropper.mjs
var _c07 = ["wrapper"];
var _c14 = ["sourceImage"];
function ImageCropperComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 5, 0);
    \u0275\u0275listener("load", function ImageCropperComponent_img_1_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageLoadedInView());
    })("mousedown", function ImageCropperComponent_img_1_Template_img_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("touchstart", function ImageCropperComponent_img_1_Template_img_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Drag));
    })("error", function ImageCropperComponent_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle());
    \u0275\u0275classProp("ngx-ic-draggable", !ctx_r1.disabled && ctx_r1.allowMoveImage);
    \u0275\u0275property("src", src_r3, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r1.imageAltText);
  }
}
function ImageCropperComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 9);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topleft"));
    });
    \u0275\u0275element(2, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "topright"));
    });
    \u0275\u0275element(4, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomright"));
    });
    \u0275\u0275element(6, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottomleft"));
    });
    \u0275\u0275element(8, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "top"));
    });
    \u0275\u0275element(11, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "right"));
    });
    \u0275\u0275element(14, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 18);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 19);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "bottom"));
    });
    \u0275\u0275element(17, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_ng_container_2_Template_span_mousedown_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    })("touchstart", function ImageCropperComponent_div_3_ng_container_2_Template_span_touchstart_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Resize, "left"));
    });
    \u0275\u0275element(20, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ImageCropperComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("keydown", function ImageCropperComponent_div_3_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyboardAccess($event));
    });
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275listener("mousedown", function ImageCropperComponent_div_3_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    })("touchstart", function ImageCropperComponent_div_3_Template_div_touchstart_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startMove($event, ctx_r1.moveTypes.Move));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ImageCropperComponent_div_3_ng_container_2_Template, 21, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.state.cropper().y1, "px")("left", ctx_r1.state.cropper().x1, "px")("width", ctx_r1.state.cropper().x2 - ctx_r1.state.cropper().x1, "px")("height", ctx_r1.state.cropper().y2 - ctx_r1.state.cropper().y1, "px")("margin-left", ctx_r1.state.options.alignImage === "center" ? ctx_r1.marginLeft : null)("visibility", ctx_r1.imageVisible ? "visible" : "hidden");
    \u0275\u0275classProp("ngx-ic-round", ctx_r1.state.options.roundCropper);
    \u0275\u0275attribute("aria-label", ctx_r1.state.options.cropperFrameAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.state.options.hideResizeSquares && !(ctx_r1.state.options.cropperStaticWidth && ctx_r1.state.options.cropperStaticHeight));
  }
}
function checkCropperPosition(cropperPosition, cropperState, maintainSize) {
  cropperPosition = checkCropperSizeRestriction(cropperPosition, cropperState);
  return checkCropperWithinMaxSizeBounds(cropperPosition, cropperState, maintainSize);
}
function checkCropperSizeRestriction(cropperPosition, cropperState) {
  let cropperWidth = cropperPosition.x2 - cropperPosition.x1;
  let cropperHeight = cropperPosition.y2 - cropperPosition.y1;
  const centerX = cropperPosition.x1 + cropperWidth / 2;
  const centerY = cropperPosition.y1 + cropperHeight / 2;
  if (cropperState.options.cropperStaticHeight && cropperState.options.cropperStaticWidth) {
    cropperWidth = cropperState.maxSize().width > cropperState.options.cropperStaticWidth ? cropperState.options.cropperStaticWidth : cropperState.maxSize().width;
    cropperHeight = cropperState.maxSize().height > cropperState.options.cropperStaticHeight ? cropperState.options.cropperStaticHeight : cropperState.maxSize().height;
  } else {
    cropperWidth = Math.max(cropperState.cropperScaledMinWidth, Math.min(cropperWidth, cropperState.cropperScaledMaxWidth, cropperState.maxSize().width));
    cropperHeight = Math.max(cropperState.cropperScaledMinHeight, Math.min(cropperHeight, cropperState.cropperScaledMaxHeight, cropperState.maxSize().height));
    if (cropperState.options.maintainAspectRatio) {
      if (cropperState.maxSize().width / cropperState.options.aspectRatio < cropperState.maxSize().height) {
        cropperHeight = cropperWidth / cropperState.options.aspectRatio;
      } else {
        cropperWidth = cropperHeight * cropperState.options.aspectRatio;
      }
    }
  }
  const x1 = centerX - cropperWidth / 2;
  const x2 = x1 + cropperWidth;
  const y1 = centerY - cropperHeight / 2;
  const y2 = y1 + cropperHeight;
  return {
    x1,
    x2,
    y1,
    y2
  };
}
function checkCropperWithinMaxSizeBounds(position, cropperState, maintainSize = false) {
  if (position.x1 < 0) {
    position = __spreadProps(__spreadValues({}, position), {
      x1: 0,
      x2: position.x2 - (maintainSize ? position.x1 : 0)
    });
  }
  if (position.y1 < 0) {
    position = __spreadProps(__spreadValues({}, position), {
      y2: position.y2 - (maintainSize ? position.y1 : 0),
      y1: 0
    });
  }
  if (position.x2 > cropperState.maxSize().width) {
    position = __spreadProps(__spreadValues({}, position), {
      x1: position.x1 - (maintainSize ? position.x2 - cropperState.maxSize().width : 0),
      x2: cropperState.maxSize().width
    });
  }
  if (position.y2 > cropperState.maxSize().height) {
    position = __spreadProps(__spreadValues({}, position), {
      y1: position.y1 - (maintainSize ? position.y2 - cropperState.maxSize().height : 0),
      y2: cropperState.maxSize().height
    });
  }
  return position;
}
function moveCropper(event, moveStart) {
  const diffX = getClientX(event) - moveStart.clientX;
  const diffY = getClientY(event) - moveStart.clientY;
  return {
    x1: moveStart.cropper.x1 + diffX,
    y1: moveStart.cropper.y1 + diffY,
    x2: moveStart.cropper.x2 + diffX,
    y2: moveStart.cropper.y2 + diffY
  };
}
function resizeCropper(event, moveStart, cropperState) {
  const cropperPosition = __spreadValues({}, cropperState.cropper());
  const moveX = getClientX(event) - moveStart.clientX;
  const moveY = getClientY(event) - moveStart.clientY;
  switch (moveStart.position) {
    case "left":
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      break;
    case "topleft":
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case "top":
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case "topright":
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      cropperPosition.y1 = Math.min(Math.max(moveStart.cropper.y1 + moveY, cropperPosition.y2 - cropperState.cropperScaledMaxHeight), cropperPosition.y2 - cropperState.cropperScaledMinHeight);
      break;
    case "right":
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      break;
    case "bottomright":
      cropperPosition.x2 = Math.max(Math.min(moveStart.cropper.x2 + moveX, cropperPosition.x1 + cropperState.cropperScaledMaxWidth), cropperPosition.x1 + cropperState.cropperScaledMinWidth);
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case "bottom":
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case "bottomleft":
      cropperPosition.x1 = Math.min(Math.max(moveStart.cropper.x1 + moveX, cropperPosition.x2 - cropperState.cropperScaledMaxWidth), cropperPosition.x2 - cropperState.cropperScaledMinWidth);
      cropperPosition.y2 = Math.max(Math.min(moveStart.cropper.y2 + moveY, cropperPosition.y1 + cropperState.cropperScaledMaxHeight), cropperPosition.y1 + cropperState.cropperScaledMinHeight);
      break;
    case "center":
      const scale = "scale" in event ? event.scale : 1;
      const newWidth = Math.min(Math.max(cropperState.cropperScaledMinWidth, Math.abs(moveStart.cropper.x2 - moveStart.cropper.x1) * scale), cropperState.cropperScaledMaxWidth);
      const newHeight = Math.min(Math.max(cropperState.cropperScaledMinHeight, Math.abs(moveStart.cropper.y2 - moveStart.cropper.y1) * scale), cropperState.cropperScaledMaxHeight);
      cropperPosition.x1 = moveStart.clientX - newWidth / 2;
      cropperPosition.x2 = moveStart.clientX + newWidth / 2;
      cropperPosition.y1 = moveStart.clientY - newHeight / 2;
      cropperPosition.y2 = moveStart.clientY + newHeight / 2;
      if (cropperPosition.x1 < 0) {
        cropperPosition.x2 -= cropperPosition.x1;
        cropperPosition.x1 = 0;
      } else if (cropperPosition.x2 > cropperState.maxSize().width) {
        cropperPosition.x1 -= cropperPosition.x2 - cropperState.maxSize().width;
        cropperPosition.x2 = cropperState.maxSize().width;
      }
      if (cropperPosition.y1 < 0) {
        cropperPosition.y2 -= cropperPosition.y1;
        cropperPosition.y1 = 0;
      } else if (cropperPosition.y2 > cropperState.maxSize().height) {
        cropperPosition.y1 -= cropperPosition.y2 - cropperState.maxSize().height;
        cropperPosition.y2 = cropperState.maxSize().height;
      }
      break;
  }
  if (cropperState.options.maintainAspectRatio) {
    return checkAspectRatio(moveStart.position, cropperPosition, cropperState);
  } else {
    return cropperPosition;
  }
}
function checkAspectRatio(position, cropperPosition, cropperState) {
  cropperPosition = __spreadValues({}, cropperPosition);
  let overflowX = 0;
  let overflowY = 0;
  switch (position) {
    case "top":
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "bottom":
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "topleft":
      cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(0 - cropperPosition.x1, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "topright":
      cropperPosition.y1 = cropperPosition.y2 - (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "right":
    case "bottomright":
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "left":
    case "bottomleft":
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      overflowX = Math.max(0 - cropperPosition.x1, 0);
      overflowY = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      if (overflowX > 0 || overflowY > 0) {
        cropperPosition.x1 += overflowY * cropperState.options.aspectRatio > overflowX ? overflowY * cropperState.options.aspectRatio : overflowX;
        cropperPosition.y2 -= overflowY * cropperState.options.aspectRatio > overflowX ? overflowY : overflowX / cropperState.options.aspectRatio;
      }
      break;
    case "center":
      cropperPosition.x2 = cropperPosition.x1 + (cropperPosition.y2 - cropperPosition.y1) * cropperState.options.aspectRatio;
      cropperPosition.y2 = cropperPosition.y1 + (cropperPosition.x2 - cropperPosition.x1) / cropperState.options.aspectRatio;
      const overflowX1 = Math.max(0 - cropperPosition.x1, 0);
      const overflowX2 = Math.max(cropperPosition.x2 - cropperState.maxSize().width, 0);
      const overflowY1 = Math.max(cropperPosition.y2 - cropperState.maxSize().height, 0);
      const overflowY2 = Math.max(0 - cropperPosition.y1, 0);
      if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
        cropperPosition.x1 += overflowY1 * cropperState.options.aspectRatio > overflowX1 ? overflowY1 * cropperState.options.aspectRatio : overflowX1;
        cropperPosition.x2 -= overflowY2 * cropperState.options.aspectRatio > overflowX2 ? overflowY2 * cropperState.options.aspectRatio : overflowX2;
        cropperPosition.y1 += overflowY2 * cropperState.options.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / cropperState.options.aspectRatio;
        cropperPosition.y2 -= overflowY1 * cropperState.options.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / cropperState.options.aspectRatio;
      }
      break;
  }
  return cropperPosition;
}
function getClientX(event) {
  if ("touches" in event && event.touches[0]) {
    return event.touches[0].clientX;
  } else if ("clientX" in event) {
    return event.clientX;
  }
  return 0;
}
function getClientY(event) {
  if ("touches" in event && event.touches[0]) {
    return event.touches[0].clientY;
  } else if ("clientX" in event) {
    return event.clientY;
  }
  return 0;
}
var CropperState = class {
  constructor() {
    this.cropper = signal({
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    this.maxSize = signal({
      width: 0,
      height: 0
    });
    this.transform = {};
    this.options = {
      format: "png",
      output: "blob",
      autoCrop: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      resetCropOnAspectRatioChange: true,
      resizeToWidth: 0,
      resizeToHeight: 0,
      cropperMinWidth: 0,
      cropperMinHeight: 0,
      cropperMaxHeight: 0,
      cropperMaxWidth: 0,
      cropperStaticWidth: 0,
      cropperStaticHeight: 0,
      canvasRotation: 0,
      roundCropper: false,
      onlyScaleDown: false,
      imageQuality: 92,
      backgroundColor: void 0,
      containWithinAspectRatio: false,
      hideResizeSquares: false,
      alignImage: "center",
      cropperFrameAriaLabel: void 0,
      checkImageType: true
    };
    this.cropperScaledMinWidth = 20;
    this.cropperScaledMinHeight = 20;
    this.cropperScaledMaxWidth = 20;
    this.cropperScaledMaxHeight = 20;
    this.stepSize = 3;
  }
  setOptionsFromChanges(changes) {
    if (changes["options"]?.currentValue) {
      this.setOptions(changes["options"].currentValue);
    }
    const options = Object.entries(changes).filter(([key]) => key in this.options).reduce((acc, [key, change]) => __spreadProps(__spreadValues({}, acc), {
      [key]: change.currentValue
    }), {});
    if (Object.keys(options).length > 0) {
      this.setOptions(options);
    }
  }
  setOptions(options) {
    this.options = __spreadValues(__spreadValues({}, this.options), options || {});
    this.validateOptions();
    if (!this.loadedImage?.transformed.image.complete || !this.maxSize) {
      return;
    }
    let positionPossiblyChanged = false;
    if (this.options.maintainAspectRatio && options["aspectRatio"] || "maintainAspectRatio" in options) {
      this.setCropperScaledMinSize();
      this.setCropperScaledMaxSize();
      if (this.options.maintainAspectRatio && (this.options.resetCropOnAspectRatioChange || !this.aspectRatioIsCorrect())) {
        this.cropper.set(this.maxSizeCropperPosition());
        positionPossiblyChanged = true;
      }
    } else {
      if (options["cropperMinWidth"] || options["cropperMinHeight"]) {
        this.setCropperScaledMinSize();
        positionPossiblyChanged = true;
      }
      if (options["cropperMaxWidth"] || options["cropperMaxHeight"]) {
        this.setCropperScaledMaxSize();
        positionPossiblyChanged = true;
      }
      if (options["cropperStaticWidth"] || options["cropperStaticHeight"]) {
        positionPossiblyChanged = true;
      }
    }
    if (positionPossiblyChanged) {
      this.cropper.update((cropper) => checkCropperPosition(cropper, this, false));
    }
  }
  validateOptions() {
    if (this.options.maintainAspectRatio && !this.options.aspectRatio) {
      throw new Error("`aspectRatio` should > 0 when `maintainAspectRatio` is enabled");
    }
  }
  setMaxSize(width, height) {
    this.maxSize.set({
      width,
      height
    });
    this.setCropperScaledMinSize();
    this.setCropperScaledMaxSize();
  }
  setCropperScaledMinSize() {
    if (this.loadedImage?.transformed.size) {
      this.setCropperScaledMinWidth();
      this.setCropperScaledMinHeight();
    } else {
      this.cropperScaledMinWidth = 20;
      this.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMinWidth() {
    this.cropperScaledMinWidth = this.options.cropperMinWidth > 0 ? Math.max(20, this.options.cropperMinWidth / this.loadedImage.transformed.size.width * this.maxSize().width) : 20;
  }
  setCropperScaledMinHeight() {
    if (this.options.maintainAspectRatio) {
      this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.options.aspectRatio);
    } else if (this.options.cropperMinHeight > 0) {
      this.cropperScaledMinHeight = Math.max(20, this.options.cropperMinHeight / this.loadedImage.transformed.size.height * this.maxSize().height);
    } else {
      this.cropperScaledMinHeight = 20;
    }
  }
  setCropperScaledMaxSize() {
    if (this.loadedImage?.transformed.size) {
      const ratio = this.loadedImage.transformed.size.width / this.maxSize().width;
      this.cropperScaledMaxWidth = this.options.cropperMaxWidth > 20 ? this.options.cropperMaxWidth / ratio : this.maxSize().width;
      this.cropperScaledMaxHeight = this.options.cropperMaxHeight > 20 ? this.options.cropperMaxHeight / ratio : this.maxSize().height;
      if (this.options.maintainAspectRatio) {
        if (this.cropperScaledMaxWidth > this.cropperScaledMaxHeight * this.options.aspectRatio) {
          this.cropperScaledMaxWidth = this.cropperScaledMaxHeight * this.options.aspectRatio;
        } else if (this.cropperScaledMaxWidth < this.cropperScaledMaxHeight * this.options.aspectRatio) {
          this.cropperScaledMaxHeight = this.cropperScaledMaxWidth / this.options.aspectRatio;
        }
      }
    } else {
      this.cropperScaledMaxWidth = this.maxSize().width;
      this.cropperScaledMaxHeight = this.maxSize().height;
    }
  }
  equalsCropperPosition(cropper) {
    const localCropper = this.cropper();
    return localCropper == null && cropper == null || localCropper != null && cropper != null && localCropper.x1.toFixed(3) === cropper.x1.toFixed(3) && localCropper.y1.toFixed(3) === cropper.y1.toFixed(3) && localCropper.x2.toFixed(3) === cropper.x2.toFixed(3) && localCropper.y2.toFixed(3) === cropper.y2.toFixed(3);
  }
  equalsTransformTranslate(transform) {
    return (this.transform.translateH ?? 0) === (transform.translateH ?? 0) && (this.transform.translateV ?? 0) === (transform.translateV ?? 0);
  }
  equalsTransform(transform) {
    return this.equalsTransformTranslate(transform) && (this.transform.scale ?? 1) === (transform.scale ?? 1) && (this.transform.rotate ?? 0) === (transform.rotate ?? 0) && (this.transform.flipH ?? false) === (transform.flipH ?? false) && (this.transform.flipV ?? false) === (transform.flipV ?? false);
  }
  aspectRatioIsCorrect() {
    const localCropper = this.cropper();
    const currentCropAspectRatio = (localCropper.x2 - localCropper.x1) / (localCropper.y2 - localCropper.y1);
    return currentCropAspectRatio === this.options.aspectRatio;
  }
  resizeCropperPosition(oldMaxSize) {
    if (oldMaxSize.width !== this.maxSize().width || oldMaxSize.height !== this.maxSize().height) {
      this.cropper.update((cropper) => ({
        x1: cropper.x1 * this.maxSize().width / oldMaxSize.width,
        x2: cropper.x2 * this.maxSize().width / oldMaxSize.width,
        y1: cropper.y1 * this.maxSize().height / oldMaxSize.height,
        y2: cropper.y2 * this.maxSize().height / oldMaxSize.height
      }));
    }
  }
  maxSizeCropperPosition() {
    return {
      x1: 0,
      y1: 0,
      x2: this.maxSize().width,
      y2: this.maxSize().height
    };
  }
  toCropInput() {
    return {
      cropper: this.cropper(),
      maxSize: this.maxSize(),
      transform: this.transform,
      loadedImage: this.loadedImage,
      options: __spreadValues({}, this.options)
    };
  }
};
var MoveTypes;
(function(MoveTypes2) {
  MoveTypes2["Drag"] = "drag";
  MoveTypes2["Move"] = "move";
  MoveTypes2["Resize"] = "resize";
  MoveTypes2["Pinch"] = "pinch";
})(MoveTypes || (MoveTypes = {}));
function resizeCanvas(canvas, width, height) {
  const width_source = canvas.width;
  const height_source = canvas.height;
  width = Math.round(width);
  height = Math.round(height);
  const ratio_w = width_source / width;
  const ratio_h = height_source / height;
  const ratio_w_half = Math.ceil(ratio_w / 2);
  const ratio_h_half = Math.ceil(ratio_h / 2);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const img = ctx.getImageData(0, 0, width_source, height_source);
    const img2 = ctx.createImageData(width, height);
    const data = img.data;
    const data2 = img2.data;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const x2 = (i + j * width) * 4;
        const center_y = j * ratio_h;
        let weight = 0;
        let weights = 0;
        let weights_alpha = 0;
        let gx_r = 0;
        let gx_g = 0;
        let gx_b = 0;
        let gx_a = 0;
        const xx_start = Math.floor(i * ratio_w);
        const yy_start = Math.floor(j * ratio_h);
        let xx_stop = Math.ceil((i + 1) * ratio_w);
        let yy_stop = Math.ceil((j + 1) * ratio_h);
        xx_stop = Math.min(xx_stop, width_source);
        yy_stop = Math.min(yy_stop, height_source);
        for (let yy = yy_start; yy < yy_stop; yy++) {
          const dy = Math.abs(center_y - yy) / ratio_h_half;
          const center_x = i * ratio_w;
          const w0 = dy * dy;
          for (let xx = xx_start; xx < xx_stop; xx++) {
            const dx = Math.abs(center_x - xx) / ratio_w_half;
            const w = Math.sqrt(w0 + dx * dx);
            if (w >= 1) {
              continue;
            }
            weight = 2 * w * w * w - 3 * w * w + 1;
            const pos_x = 4 * (xx + yy * width_source);
            gx_a += weight * data[pos_x + 3];
            weights_alpha += weight;
            if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
            gx_r += weight * data[pos_x];
            gx_g += weight * data[pos_x + 1];
            gx_b += weight * data[pos_x + 2];
            weights += weight;
          }
        }
        data2[x2] = gx_r / weights;
        data2[x2 + 1] = gx_g / weights;
        data2[x2 + 2] = gx_b / weights;
        data2[x2 + 3] = gx_a / weights_alpha;
      }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(img2, 0, 0);
  }
}
function percentage(percent, totalValue) {
  return percent / 100 * totalValue;
}
var CropService = class {
  crop(input2, output2) {
    const imagePosition = this.getImagePosition(input2);
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    const cropCanvas = document.createElement("canvas");
    cropCanvas.width = width;
    cropCanvas.height = height;
    const ctx = cropCanvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    if (input2.options?.backgroundColor != null) {
      ctx.fillStyle = input2.options.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    const scaleX = (input2.transform?.scale || 1) * (input2.transform?.flipH ? -1 : 1);
    const scaleY = (input2.transform?.scale || 1) * (input2.transform?.flipV ? -1 : 1);
    const {
      translateH,
      translateV
    } = this.getCanvasTranslate(input2);
    const transformedImage = input2.loadedImage.transformed;
    ctx.setTransform(scaleX, 0, 0, scaleY, transformedImage.size.width / 2 + translateH, transformedImage.size.height / 2 + translateV);
    ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
    ctx.rotate((input2.transform?.rotate || 0) * Math.PI / 180);
    ctx.drawImage(transformedImage.image, -transformedImage.size.width / 2, -transformedImage.size.height / 2);
    const result = {
      width,
      height,
      imagePosition,
      cropperPosition: __spreadValues({}, input2.cropper)
    };
    if (input2.options?.containWithinAspectRatio) {
      result.offsetImagePosition = this.getOffsetImagePosition(input2);
    }
    const resizeRatio = this.getResizeRatio(width, height, input2.options);
    if (resizeRatio !== 1) {
      result.width = Math.round(width * resizeRatio);
      result.height = input2.options?.maintainAspectRatio ? Math.round(result.width / (input2.options?.aspectRatio ?? 1)) : Math.round(height * resizeRatio);
      resizeCanvas(cropCanvas, result.width, result.height);
    }
    if (output2 === "blob") {
      return this.cropToBlob(result, cropCanvas, input2);
    } else {
      result.base64 = cropCanvas.toDataURL("image/" + (input2.options?.format ?? "png"), this.getQuality(input2.options));
      return result;
    }
  }
  async cropToBlob(output2, cropCanvas, input2) {
    output2.blob = await new Promise((resolve) => cropCanvas.toBlob(resolve, "image/" + (input2.options?.format ?? "png"), this.getQuality(input2.options)));
    if (output2.blob) {
      output2.objectUrl = URL.createObjectURL(output2.blob);
    }
    return output2;
  }
  getCanvasTranslate(input2) {
    if (input2.transform?.translateUnit === "px") {
      const ratio = this.getRatio(input2);
      return {
        translateH: (input2.transform?.translateH || 0) * ratio,
        translateV: (input2.transform?.translateV || 0) * ratio
      };
    } else {
      return {
        translateH: input2.transform?.translateH ? percentage(input2.transform.translateH, input2.loadedImage.transformed.size.width) : 0,
        translateV: input2.transform?.translateV ? percentage(input2.transform.translateV, input2.loadedImage.transformed.size.height) : 0
      };
    }
  }
  getRatio(input2) {
    return input2.loadedImage.transformed.size.width / input2.maxSize.width;
  }
  getImagePosition(cropperState) {
    const ratio = this.getRatio(cropperState);
    const out = {
      x1: Math.round(cropperState.cropper.x1 * ratio),
      y1: Math.round(cropperState.cropper.y1 * ratio),
      x2: Math.round(cropperState.cropper.x2 * ratio),
      y2: Math.round(cropperState.cropper.y2 * ratio)
    };
    if (!cropperState.options?.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, cropperState.loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, cropperState.loadedImage.transformed.size.height);
    }
    return out;
  }
  getOffsetImagePosition(input2) {
    const canvasRotation = (input2.options?.canvasRotation ?? 0) + input2.loadedImage.exifTransform.rotate;
    const ratio = this.getRatio(input2);
    let offsetX;
    let offsetY;
    if (canvasRotation % 2) {
      offsetX = (input2.loadedImage.transformed.size.width - input2.loadedImage.original.size.height) / 2;
      offsetY = (input2.loadedImage.transformed.size.height - input2.loadedImage.original.size.width) / 2;
    } else {
      offsetX = (input2.loadedImage.transformed.size.width - input2.loadedImage.original.size.width) / 2;
      offsetY = (input2.loadedImage.transformed.size.height - input2.loadedImage.original.size.height) / 2;
    }
    const cropper = input2.cropper;
    const out = {
      x1: Math.round(cropper.x1 * ratio) - offsetX,
      y1: Math.round(cropper.y1 * ratio) - offsetY,
      x2: Math.round(cropper.x2 * ratio) - offsetX,
      y2: Math.round(cropper.y2 * ratio) - offsetY
    };
    if (!input2.options?.containWithinAspectRatio) {
      out.x1 = Math.max(out.x1, 0);
      out.y1 = Math.max(out.y1, 0);
      out.x2 = Math.min(out.x2, input2.loadedImage.transformed.size.width);
      out.y2 = Math.min(out.y2, input2.loadedImage.transformed.size.height);
    }
    return out;
  }
  getResizeRatio(width, height, options) {
    const ratios = new Array();
    if (options?.resizeToWidth && options.resizeToWidth > 0) {
      ratios.push(options.resizeToWidth / width);
    }
    if (options?.resizeToHeight && options.resizeToHeight > 0) {
      ratios.push(options.resizeToHeight / height);
    }
    const result = ratios.length === 0 ? 1 : Math.min(...ratios);
    if (result > 1 && !options?.onlyScaleDown) {
      return result;
    }
    return Math.min(result, 1);
  }
  getQuality(options) {
    return Math.min(1, Math.max(0, (options?.imageQuality ?? 92) / 100));
  }
};
var testAutoOrientationImageByteArray = [new Uint8Array([255, 216, 255, 225, 0, 34, 69, 120, 105, 102, 0, 0, 77, 77, 0, 42, 0, 0, 0, 8, 0, 1, 1, 18, 0, 3, 0, 0, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 255, 219, 0, 132, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 255, 192, 0, 17, 8, 0, 1, 0, 2, 3, 1, 17, 0, 2, 17, 1, 3, 17, 1, 255, 196, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 218, 0, 12, 3, 1, 0, 2, 17, 3, 17, 0, 63, 0, 63, 240, 127, 255, 217])];
var testAutoOrientationImageURL = URL.createObjectURL(new Blob(testAutoOrientationImageByteArray, {
  type: "image/jpeg"
}));
function supportsAutomaticRotation() {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const supported = img.width === 1 && img.height === 2;
      resolve(supported);
    };
    img.src = testAutoOrientationImageURL;
  });
}
function getTransformationsFromExifData(exifRotationOrArrayBuffer) {
  if (typeof exifRotationOrArrayBuffer === "object") {
    exifRotationOrArrayBuffer = getExifRotation(exifRotationOrArrayBuffer);
  }
  switch (exifRotationOrArrayBuffer) {
    case 2:
      return {
        rotate: 0,
        flip: true
      };
    case 3:
      return {
        rotate: 2,
        flip: false
      };
    case 4:
      return {
        rotate: 2,
        flip: true
      };
    case 5:
      return {
        rotate: 1,
        flip: true
      };
    case 6:
      return {
        rotate: 1,
        flip: false
      };
    case 7:
      return {
        rotate: 3,
        flip: true
      };
    case 8:
      return {
        rotate: 3,
        flip: false
      };
    default:
      return {
        rotate: 0,
        flip: false
      };
  }
}
function getExifRotation(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  if (view.getUint16(0, false) !== 65496) {
    return -2;
  }
  const length = view.byteLength;
  let offset = 2;
  while (offset < length) {
    if (view.getUint16(offset + 2, false) <= 8) return -1;
    const marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 65505) {
      if (view.getUint32(offset += 2, false) !== 1165519206) {
        return -1;
      }
      const little = view.getUint16(offset += 6, false) == 18761;
      offset += view.getUint32(offset + 4, little);
      const tags = view.getUint16(offset, little);
      offset += 2;
      for (let i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) == 274) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 65280) !== 65280) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }
  return -1;
}
var LoadImageService = class {
  constructor() {
    this.autoRotateSupported = supportsAutomaticRotation();
  }
  async loadImageFile(file, options) {
    const arrayBuffer = await file.arrayBuffer();
    if (options.checkImageType) {
      return await this.checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, file.type, options);
    }
    return await this.loadImageFromArrayBuffer(arrayBuffer, options);
  }
  checkImageTypeAndLoadImageFromArrayBuffer(arrayBuffer, imageType, options) {
    if (!this.isValidImageType(imageType)) {
      return Promise.reject(new Error("Invalid image type"));
    }
    return this.loadImageFromArrayBuffer(arrayBuffer, options, imageType);
  }
  isValidImageType(type) {
    return /image\/(png|jpg|jpeg|heic|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon|avif)/.test(type);
  }
  async loadImageFromURL(url, options) {
    const res = await fetch(url);
    const blob = await res.blob();
    const buffer = await blob.arrayBuffer();
    return await this.loadImageFromArrayBuffer(buffer, options, blob.type);
  }
  loadBase64Image(imageBase64, options) {
    const arrayBuffer = this.base64ToArrayBuffer(imageBase64);
    return this.loadImageFromArrayBuffer(arrayBuffer, options);
  }
  base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data:([^;]+);base64,/gmi, "");
    const binaryString = atob(imageBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
  async loadImageFromArrayBuffer(arrayBuffer, options, imageType) {
    const res = await new Promise(async (resolve, reject) => {
      try {
        const blob = new Blob([arrayBuffer], imageType ? {
          type: imageType
        } : void 0);
        const objectUrl = URL.createObjectURL(blob);
        const originalImage = new Image();
        const isSvg = imageType === "image/svg+xml";
        const originalImageSize = isSvg ? await this.getSvgImageSize(blob) : void 0;
        originalImage.onload = () => resolve({
          originalImage,
          originalImageSize,
          originalObjectUrl: objectUrl,
          originalArrayBuffer: arrayBuffer
        });
        originalImage.onerror = reject;
        originalImage.src = objectUrl;
      } catch (e) {
        reject(e);
      }
    });
    return await this.transformImageFromArrayBuffer(res, options, res.originalImageSize != null);
  }
  async getSvgImageSize(blob) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(await blob.text(), "image/svg+xml");
    const svgElement = doc.querySelector("svg");
    if (!svgElement) {
      throw Error("Failed to parse SVG image");
    }
    const widthAttr = svgElement.getAttribute("width");
    const heightAttr = svgElement.getAttribute("height");
    if (widthAttr && heightAttr) {
      return null;
    }
    const viewBoxAttr = svgElement.getAttribute("viewBox") || svgElement.getAttribute("viewbox");
    if (viewBoxAttr) {
      const viewBox = viewBoxAttr.split(" ");
      return {
        width: +viewBox[2],
        height: +viewBox[3]
      };
    }
    throw Error("Failed to load SVG image. SVG must have width + height or viewBox definition.");
  }
  async transformImageFromArrayBuffer(res, options, forceTransform = false) {
    const autoRotate = await this.autoRotateSupported;
    const exifTransform = getTransformationsFromExifData(autoRotate ? -1 : res.originalArrayBuffer);
    if (!res.originalImage || !res.originalImage.complete) {
      return Promise.reject(new Error("No image loaded"));
    }
    const loadedImage = {
      original: {
        objectUrl: res.originalObjectUrl,
        image: res.originalImage,
        size: res.originalImageSize ?? {
          width: res.originalImage.naturalWidth,
          height: res.originalImage.naturalHeight
        }
      },
      exifTransform
    };
    return this.transformLoadedImage(loadedImage, options, forceTransform);
  }
  async transformLoadedImage(loadedImage, options, forceTransform = false) {
    const canvasRotation = (options.canvasRotation ?? 0) + loadedImage.exifTransform.rotate;
    const originalSize = loadedImage.original.size;
    if (!forceTransform && canvasRotation === 0 && !loadedImage.exifTransform.flip && !options.containWithinAspectRatio) {
      return {
        original: {
          objectUrl: loadedImage.original.objectUrl,
          image: loadedImage.original.image,
          size: __spreadValues({}, originalSize)
        },
        transformed: {
          objectUrl: loadedImage.original.objectUrl,
          image: loadedImage.original.image,
          size: __spreadValues({}, originalSize)
        },
        exifTransform: loadedImage.exifTransform
      };
    }
    const transformedSize = this.getTransformedSize(originalSize, loadedImage.exifTransform, options);
    const canvas = document.createElement("canvas");
    canvas.width = transformedSize.width;
    canvas.height = transformedSize.height;
    const ctx = canvas.getContext("2d");
    ctx?.setTransform(loadedImage.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
    ctx?.rotate(Math.PI * (canvasRotation / 2));
    ctx?.drawImage(loadedImage.original.image, -originalSize.width / 2, -originalSize.height / 2);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/" + (options.format ?? "png")));
    if (!blob) {
      throw new Error("Failed to get Blob for transformed image.");
    }
    const objectUrl = URL.createObjectURL(blob);
    const transformedImage = await this.loadImageFromObjectUrl(objectUrl);
    return {
      original: {
        objectUrl: loadedImage.original.objectUrl,
        image: loadedImage.original.image,
        size: __spreadValues({}, originalSize)
      },
      transformed: {
        objectUrl,
        image: transformedImage,
        size: {
          width: transformedImage.width,
          height: transformedImage.height
        }
      },
      exifTransform: loadedImage.exifTransform
    };
  }
  loadImageFromObjectUrl(objectUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = objectUrl;
    });
  }
  getTransformedSize(originalSize, exifTransform, options) {
    const canvasRotation = (options.canvasRotation ?? 0) + exifTransform.rotate;
    if (options.containWithinAspectRatio) {
      if (canvasRotation % 2) {
        const minWidthToContain = originalSize.width * (options.aspectRatio ?? 1);
        const minHeightToContain = originalSize.height / (options.aspectRatio ?? 1);
        return {
          width: Math.max(originalSize.height, minWidthToContain),
          height: Math.max(originalSize.width, minHeightToContain)
        };
      } else {
        const minWidthToContain = originalSize.height * (options.aspectRatio ?? 1);
        const minHeightToContain = originalSize.width / (options.aspectRatio ?? 1);
        return {
          width: Math.max(originalSize.width, minWidthToContain),
          height: Math.max(originalSize.height, minHeightToContain)
        };
      }
    }
    if (canvasRotation % 2) {
      return {
        height: originalSize.width,
        width: originalSize.height
      };
    }
    return {
      width: originalSize.width,
      height: originalSize.height
    };
  }
};
function getPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "top";
    case "ArrowRight":
      return "right";
    case "ArrowDown":
      return "bottom";
    case "ArrowLeft":
    default:
      return "left";
  }
}
function getInvertedPositionForKey(key) {
  switch (key) {
    case "ArrowUp":
      return "bottom";
    case "ArrowRight":
      return "left";
    case "ArrowDown":
      return "top";
    case "ArrowLeft":
    default:
      return "right";
  }
}
function getEventForKey(key, stepSize) {
  switch (key) {
    case "ArrowUp":
      return {
        clientX: 0,
        clientY: stepSize * -1
      };
    case "ArrowRight":
      return {
        clientX: stepSize,
        clientY: 0
      };
    case "ArrowDown":
      return {
        clientX: 0,
        clientY: stepSize
      };
    case "ArrowLeft":
    default:
      return {
        clientX: stepSize * -1,
        clientY: 0
      };
  }
}
var ImageCropperComponent = class _ImageCropperComponent {
  get alignImageStyle() {
    return this.state.options.alignImage;
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.pinchStart$ = new Subject();
    this.cropService = new CropService();
    this.loadImageService = new LoadImageService();
    this.setImageMaxSizeRetries = 0;
    this.resizedWhileHidden = false;
    this.moveTypes = MoveTypes;
    this.state = new CropperState();
    this.safeImgDataUrl = signal(void 0);
    this.safeTransformStyle = signal(void 0);
    this.marginLeft = "0px";
    this.imageVisible = false;
    this.allowMoveImage = false;
    this.checkImageType = true;
    this.disabled = false;
    this.hidden = false;
    this.imageCropped = output();
    this.startCropImage = output();
    this.imageLoaded = output();
    this.cropperReady = output();
    this.loadImageFailed = output();
    this.transformChange = output();
    this.cropperChange = output();
    this.reset();
  }
  ngOnInit() {
    this.state.stepSize = this.initialStepSize || this.state.stepSize;
  }
  ngOnChanges(changes) {
    const previousCropperPosition = this.state.cropper();
    const previousTransform = this.state.transform;
    const previousBackgroundColor = this.state.options.backgroundColor;
    this.state.setOptionsFromChanges(changes);
    this.onChangesInputImage(changes);
    if (changes["transform"] && this.transform) {
      this.state.transform = this.transform;
      this.setCssTransform();
    }
    if (!this.state.loadedImage?.transformed.image.complete || !this.state.maxSize) {
      return;
    }
    if (this.containWithinAspectRatio && changes["aspectRatio"] || changes["containWithinAspectRatio"] || changes["canvasRotation"]) {
      this.loadImageService.transformLoadedImage(this.state.loadedImage, this.state.options).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
      return;
    }
    if (changes["cropper"] && this.cropper) {
      this.state.cropper.set(checkCropperPosition(this.cropper, this.state, true));
    }
    const cropperChanged = !this.state.equalsCropperPosition(previousCropperPosition);
    if (cropperChanged && (!this.cropper || !this.state.equalsCropperPosition(this.cropper))) {
      this.cropperChange.emit(this.state.cropper());
    }
    if (cropperChanged || !this.state.equalsTransform(previousTransform) || this.state.options.backgroundColor !== previousBackgroundColor) {
      this.doAutoCrop();
    }
    if (changes["hidden"] && this.resizedWhileHidden && !this.hidden) {
      setTimeout(() => {
        this.onResize();
        this.resizedWhileHidden = false;
      });
    }
  }
  onChangesInputImage(changes) {
    if (changes["imageChangedEvent"] || changes["imageURL"] || changes["imageBase64"] || changes["imageFile"]) {
      this.reset();
    }
    if (changes["imageChangedEvent"] && this.isValidImageChangedEvent()) {
      this.loadImageFile(this.imageChangedEvent.target.files[0]);
    }
    if (changes["imageURL"] && this.imageURL) {
      this.loadImageFromURL(this.imageURL);
    }
    if (changes["imageBase64"] && this.imageBase64) {
      this.loadBase64Image(this.imageBase64);
    }
    if (changes["imageFile"] && this.imageFile) {
      this.loadImageFile(this.imageFile);
    }
  }
  isValidImageChangedEvent() {
    const files = this.imageChangedEvent?.target?.files;
    return files instanceof FileList && files.length > 0;
  }
  reset() {
    this.state.loadedImage = void 0;
    this.state.maxSize.set({
      width: 0,
      height: 0
    });
    this.imageVisible = false;
  }
  loadImageFile(file) {
    this.loadImageService.loadImageFile(file, this.state.options).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadBase64Image(imageBase64) {
    this.loadImageService.loadBase64Image(imageBase64, this.state.options).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  loadImageFromURL(url) {
    this.loadImageService.loadImageFromURL(url, this.state.options).then((res) => this.setLoadedImage(res)).catch((err) => this.loadImageError(err));
  }
  setLoadedImage(loadedImage) {
    this.state.loadedImage = loadedImage;
    this.safeImgDataUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(loadedImage.transformed.objectUrl));
  }
  loadImageError(error) {
    console.error(error);
    this.loadImageFailed.emit();
  }
  setCssTransform() {
    const translateUnit = this.state.transform?.translateUnit || "%";
    this.safeTransformStyle.set(this.sanitizer.bypassSecurityTrustStyle(`translate(${this.state.transform.translateH || 0}${translateUnit}, ${this.state.transform.translateV || 0}${translateUnit}) scaleX(` + (this.state.transform.scale || 1) * (this.state.transform.flipH ? -1 : 1) + ") scaleY(" + (this.state.transform.scale || 1) * (this.state.transform.flipV ? -1 : 1) + ") rotate(" + (this.state.transform.rotate || 0) + "deg)"));
  }
  imageLoadedInView() {
    if (this.state.loadedImage != null) {
      this.imageLoaded.emit(this.state.loadedImage);
      this.setImageMaxSizeRetries = 0;
      setTimeout(() => this.checkImageMaxSizeRecursively());
    }
  }
  checkImageMaxSizeRecursively() {
    if (this.setImageMaxSizeRetries > 40) {
      this.loadImageFailed.emit();
    } else if (this.sourceImageLoaded()) {
      this.setMaxSize();
      if (this.cropper && (!this.maintainAspectRatio || this.state.aspectRatioIsCorrect())) {
        this.state.cropper.set(checkCropperPosition(this.cropper, this.state, true));
        this.emitCropperPositionChange(this.cropper);
      } else {
        this.state.cropper.set(checkCropperPosition(this.state.maxSizeCropperPosition(), this.state, true));
        this.cropperChange.emit(this.state.cropper());
      }
      this.imageVisible = true;
      this.cropperReady.emit(this.state.maxSize());
      this.doAutoCrop();
    } else {
      this.setImageMaxSizeRetries++;
      setTimeout(() => this.checkImageMaxSizeRecursively(), 50);
    }
  }
  sourceImageLoaded() {
    return this.sourceImage?.nativeElement?.offsetWidth > 1;
  }
  onResize() {
    if (!this.state.loadedImage) {
      return;
    }
    if (this.hidden) {
      this.resizedWhileHidden = true;
    } else {
      const oldMaxSize = this.state.maxSize();
      this.setMaxSize();
      this.state.resizeCropperPosition(oldMaxSize);
    }
  }
  keyboardAccess(event) {
    this.changeKeyboardStepSize(event);
    this.keyboardMoveCropper(event);
  }
  changeKeyboardStepSize(event) {
    const key = +event.key;
    if (key >= 1 && key <= 9) {
      this.state.stepSize = key;
    }
  }
  keyboardMoveCropper(event) {
    const keyboardWhiteList = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
    if (!keyboardWhiteList.includes(event.key)) {
      return;
    }
    const moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
    const position = event.altKey ? getInvertedPositionForKey(event.key) : getPositionForKey(event.key);
    const moveEvent = getEventForKey(event.key, this.state.stepSize);
    event.preventDefault();
    event.stopPropagation();
    this.moveStart = {
      type: moveType,
      position,
      clientX: 0,
      clientY: 0,
      transform: this.state.transform,
      cropper: this.state.cropper()
    };
    this.handleMouseMove(moveEvent);
    this.handleMouseUp();
  }
  startMove(event, moveType, position = null) {
    if (this.disabled || this.moveStart && this.moveStart.type === MoveTypes.Pinch || moveType === MoveTypes.Drag && !this.allowMoveImage) {
      return;
    }
    if ("preventDefault" in event) {
      event.preventDefault();
    }
    this.moveStart = {
      type: moveType,
      position,
      clientX: getClientX(event),
      clientY: getClientY(event),
      transform: this.state.transform,
      cropper: this.state.cropper()
    };
    this.initMouseMove();
  }
  initMouseMove() {
    merge(fromEvent(document, "mousemove"), fromEvent(document, "touchmove")).pipe(takeUntil(merge(fromEvent(document, "mouseup"), fromEvent(document, "touchend"), this.pinchStart$).pipe(first()))).subscribe({
      next: (event) => this.handleMouseMove(event),
      complete: () => this.handleMouseUp()
    });
  }
  handleMouseMove(event) {
    if (!this.moveStart) {
      return;
    }
    if ("stopPropagation" in event) {
      event.stopPropagation();
    }
    if ("preventDefault" in event) {
      event.preventDefault();
    }
    if (this.moveStart.type === MoveTypes.Move) {
      this.state.cropper.set(checkCropperWithinMaxSizeBounds(moveCropper(event, this.moveStart), this.state, true));
    } else if (this.moveStart.type === MoveTypes.Resize) {
      if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
        this.state.cropper.set(checkCropperWithinMaxSizeBounds(resizeCropper(event, this.moveStart, this.state), this.state, false));
      }
    } else if (this.moveStart.type === MoveTypes.Drag) {
      const diffX = getClientX(event) - this.moveStart.clientX;
      const diffY = getClientY(event) - this.moveStart.clientY;
      this.state.transform = __spreadProps(__spreadValues({}, this.state.transform), {
        translateH: (this.moveStart.transform?.translateH || 0) + diffX,
        translateV: (this.moveStart.transform?.translateV || 0) + diffY
      });
      this.setCssTransform();
    }
  }
  handleMouseUp() {
    if (!this.moveStart || this.moveStart.type === MoveTypes.Pinch) {
      return;
    }
    if (!this.state.equalsCropperPosition(this.moveStart.cropper) || this.moveStart.transform && !this.state.equalsTransform(this.moveStart.transform)) {
      if (this.moveStart.type === MoveTypes.Drag) {
        this.transformChange.emit(this.state.transform);
      } else {
        this.cropperChange.emit(this.state.cropper());
      }
      this.doAutoCrop();
    }
    this.moveStart = void 0;
  }
  startPinch(event) {
    if (this.disabled || !this.sourceImageLoaded() || event.touches.length < 2) {
      return;
    }
    if ("preventDefault" in event) {
      event.preventDefault();
    }
    const cropper = this.state.cropper();
    this.moveStart = {
      type: MoveTypes.Pinch,
      position: "center",
      clientX: cropper.x1 + (cropper.x2 - cropper.x1) / 2,
      clientY: cropper.y1 + (cropper.y2 - cropper.y1) / 2,
      cropper
    };
    this.initPinch();
  }
  initPinch() {
    this.pinchStart$.next();
    fromEvent(document, "touchmove").pipe(takeUntil(fromEvent(document, "touchend"))).subscribe({
      next: (event) => this.handlePinchMove(event),
      complete: () => this.handlePinchStop()
    });
  }
  handlePinchMove(event) {
    if (!this.moveStart) {
      return;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    if (this.moveStart.type === MoveTypes.Pinch) {
      if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
        this.state.cropper.set(checkCropperWithinMaxSizeBounds(resizeCropper(event, this.moveStart, this.state), this.state, false));
      }
    }
  }
  handlePinchStop() {
    if (!this.moveStart) {
      return;
    }
    if (!this.state.equalsCropperPosition(this.moveStart.cropper)) {
      this.emitCropperPositionChange(this.moveStart.cropper);
      this.doAutoCrop();
    }
    this.moveStart = void 0;
  }
  setMaxSize() {
    if (this.sourceImage) {
      const sourceImageStyle = getComputedStyle(this.sourceImage.nativeElement);
      this.state.setMaxSize(parseFloat(sourceImageStyle.width), parseFloat(sourceImageStyle.height));
      this.marginLeft = this.sanitizer.bypassSecurityTrustStyle("calc(50% - " + this.state.maxSize().width / 2 + "px)");
    }
  }
  emitCropperPositionChange(previousPosition) {
    if (!this.state.equalsCropperPosition(previousPosition)) {
      this.cropperChange.emit(this.state.cropper());
    }
  }
  doAutoCrop() {
    if (this.state.options.autoCrop) {
      void this.crop();
    }
  }
  crop(output2 = this.state.options.output) {
    if (this.state.loadedImage?.transformed?.image != null) {
      this.startCropImage.emit();
      if (output2 === "blob") {
        return this.cropToBlob();
      } else if (output2 === "base64") {
        return this.cropToBase64();
      }
    }
    return null;
  }
  cropToBlob() {
    return new Promise(async (resolve, reject) => {
      const result = await this.cropService.crop(this.state.toCropInput(), "blob");
      if (result) {
        this.imageCropped.emit(result);
        resolve(result);
      } else {
        reject("Crop image failed");
      }
    });
  }
  cropToBase64() {
    const result = this.cropService.crop(this.state.toCropInput(), "base64");
    if (result) {
      this.imageCropped.emit(result);
      return result;
    }
    return null;
  }
  resetCropperPosition() {
    this.state.cropper.set(checkCropperPosition(this.state.maxSizeCropperPosition(), this.state, true));
    this.cropperChange.emit(this.state.cropper());
  }
  ngOnDestroy() {
    this.pinchStart$.complete();
  }
  static {
    this.\u0275fac = function ImageCropperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageCropperComponent)(\u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ImageCropperComponent,
      selectors: [["image-cropper"]],
      viewQuery: function ImageCropperComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c07, 7)(_c14, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wrapper = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sourceImage = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("resize", function ImageCropperComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, \u0275\u0275resolveWindow);
        }
        if (rf & 2) {
          \u0275\u0275styleProp("text-align", ctx.alignImageStyle);
          \u0275\u0275classProp("disabled", ctx.disabled)("ngx-ic-hidden", ctx.hidden);
        }
      },
      inputs: {
        imageChangedEvent: "imageChangedEvent",
        imageURL: "imageURL",
        imageBase64: "imageBase64",
        imageFile: "imageFile",
        imageAltText: "imageAltText",
        options: "options",
        cropperFrameAriaLabel: "cropperFrameAriaLabel",
        output: "output",
        format: "format",
        autoCrop: "autoCrop",
        cropper: "cropper",
        transform: "transform",
        maintainAspectRatio: "maintainAspectRatio",
        aspectRatio: "aspectRatio",
        resetCropOnAspectRatioChange: "resetCropOnAspectRatioChange",
        resizeToWidth: "resizeToWidth",
        resizeToHeight: "resizeToHeight",
        cropperMinWidth: "cropperMinWidth",
        cropperMinHeight: "cropperMinHeight",
        cropperMaxHeight: "cropperMaxHeight",
        cropperMaxWidth: "cropperMaxWidth",
        cropperStaticWidth: "cropperStaticWidth",
        cropperStaticHeight: "cropperStaticHeight",
        canvasRotation: "canvasRotation",
        initialStepSize: "initialStepSize",
        roundCropper: "roundCropper",
        onlyScaleDown: "onlyScaleDown",
        imageQuality: "imageQuality",
        backgroundColor: "backgroundColor",
        containWithinAspectRatio: "containWithinAspectRatio",
        hideResizeSquares: "hideResizeSquares",
        allowMoveImage: "allowMoveImage",
        checkImageType: "checkImageType",
        alignImage: "alignImage",
        disabled: "disabled",
        hidden: "hidden"
      },
      outputs: {
        imageCropped: "imageCropped",
        startCropImage: "startCropImage",
        imageLoaded: "imageLoaded",
        cropperReady: "cropperReady",
        loadImageFailed: "loadImageFailed",
        transformChange: "transformChange",
        cropperChange: "cropperChange"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 4,
      vars: 10,
      consts: [["sourceImage", ""], [3, "touchstart"], ["class", "ngx-ic-source-image", "role", "presentation", 3, "src", "visibility", "transform", "ngx-ic-draggable", "load", "mousedown", "touchstart", "error", 4, "ngIf"], [1, "ngx-ic-overlay"], ["class", "ngx-ic-cropper", "tabindex", "0", 3, "ngx-ic-round", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], ["role", "presentation", 1, "ngx-ic-source-image", 3, "load", "mousedown", "touchstart", "error", "src"], ["tabindex", "0", 1, "ngx-ic-cropper", 3, "keydown"], ["role", "presentation", 1, "ngx-ic-move", 3, "mousedown", "touchstart"], [4, "ngIf"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topleft", 3, "mousedown", "touchstart"], [1, "ngx-ic-square"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-topright", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomright", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize", "ngx-ic-bottomleft", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-top", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-top", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-right", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-right", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-bottom", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-bottom", 3, "mousedown", "touchstart"], ["role", "presentation", 1, "ngx-ic-resize-bar", "ngx-ic-left", 3, "mousedown", "touchstart"], [1, "ngx-ic-resize", "ngx-ic-left", 3, "mousedown", "touchstart"]],
      template: function ImageCropperComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 1);
          \u0275\u0275listener("touchstart", function ImageCropperComponent_Template_div_touchstart_0_listener($event) {
            return ctx.startPinch($event);
          });
          \u0275\u0275template(1, ImageCropperComponent_img_1_Template, 2, 8, "img", 2);
          \u0275\u0275element(2, "div", 3);
          \u0275\u0275template(3, ImageCropperComponent_div_3_Template, 3, 16, "div", 4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275styleProp("background", ctx.imageVisible && ctx.state.options.backgroundColor);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.safeImgDataUrl());
          \u0275\u0275advance();
          \u0275\u0275styleProp("width", ctx.state.maxSize().width || 0, "px")("height", ctx.state.maxSize().height || 0, "px")("margin-left", ctx.state.options.alignImage === "center" ? ctx.marginLeft : null);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.imageVisible);
        }
      },
      dependencies: [NgIf],
      styles: ['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{display:inline;max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:var(--cropper-color, #53535C);background:transparent;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:var(--cropper-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:hover   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-hover-border, var(--cropper-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-focus-border, 2px solid dodgerblue)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-focus-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-focus-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;width:6px;height:6px;box-sizing:content-box;background:var(--cropper-resize-square-bg, #53535C);border:var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]:hover   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-hover-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-hover-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ic-hidden[_nghost-%COMP%]{display:none}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageCropperComponent, [{
    type: Component,
    args: [{
      selector: "image-cropper",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgIf],
      template: `<div
  [style.background]="imageVisible && state.options.backgroundColor"
  (touchstart)="startPinch($event)"
>
  <img
    #sourceImage
    class="ngx-ic-source-image"
    role="presentation"
    *ngIf="safeImgDataUrl() as src"
    [src]="src"
    [style.visibility]="imageVisible ? 'visible' : 'hidden'"
    [style.transform]="safeTransformStyle()"
    [class.ngx-ic-draggable]="!disabled && allowMoveImage"
    [attr.alt]="imageAltText"
    (load)="imageLoadedInView()"
    (mousedown)="startMove($event, moveTypes.Drag)"
    (touchstart)="startMove($event, moveTypes.Drag)"
    (error)="loadImageError($event)"
  >
  <div
    class="ngx-ic-overlay"
    [style.width.px]="state.maxSize().width || 0"
    [style.height.px]="state.maxSize().height || 0"
    [style.margin-left]="state.options.alignImage === 'center' ? marginLeft : null"
  ></div>
  <div
    class="ngx-ic-cropper"
    *ngIf="imageVisible"
    [class.ngx-ic-round]="state.options.roundCropper"
    [attr.aria-label]="state.options.cropperFrameAriaLabel"
    [style.top.px]="state.cropper().y1"
    [style.left.px]="state.cropper().x1"
    [style.width.px]="state.cropper().x2 - state.cropper().x1"
    [style.height.px]="state.cropper().y2 - state.cropper().y1"
    [style.margin-left]="state.options.alignImage === 'center' ? marginLeft : null"
    [style.visibility]="imageVisible ? 'visible' : 'hidden'"
    (keydown)="keyboardAccess($event)"
    tabindex="0"
  >
    <div
      (mousedown)="startMove($event, moveTypes.Move)"
      (touchstart)="startMove($event, moveTypes.Move)"
      class="ngx-ic-move"
      role="presentation">
    </div>
    <ng-container
      *ngIf="!state.options.hideResizeSquares && !(state.options.cropperStaticWidth && state.options.cropperStaticHeight)">
      <span
        class="ngx-ic-resize ngx-ic-topleft"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'topleft')"
        (touchstart)="startMove($event, moveTypes.Resize, 'topleft')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize ngx-ic-topright"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'topright')"
        (touchstart)="startMove($event, moveTypes.Resize, 'topright')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize ngx-ic-bottomright"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'bottomright')"
        (touchstart)="startMove($event, moveTypes.Resize, 'bottomright')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize ngx-ic-bottomleft"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'bottomleft')"
        (touchstart)="startMove($event, moveTypes.Resize, 'bottomleft')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize-bar ngx-ic-top"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'top')"
        (touchstart)="startMove($event, moveTypes.Resize, 'top')"
      ></span>

      <span
        class="ngx-ic-resize ngx-ic-top"
        (mousedown)="startMove($event, moveTypes.Resize, 'top')"
        (touchstart)="startMove($event, moveTypes.Resize, 'top')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize-bar ngx-ic-right"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'right')"
        (touchstart)="startMove($event, moveTypes.Resize, 'right')"
      ></span>
      <span
        class="ngx-ic-resize ngx-ic-right"
        (mousedown)="startMove($event, moveTypes.Resize, 'right')"
        (touchstart)="startMove($event, moveTypes.Resize, 'right')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize-bar ngx-ic-bottom"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'bottom')"
        (touchstart)="startMove($event, moveTypes.Resize, 'bottom')"
      ></span>
      <span
        class="ngx-ic-resize ngx-ic-bottom"
        (mousedown)="startMove($event, moveTypes.Resize, 'bottom')"
        (touchstart)="startMove($event, moveTypes.Resize, 'bottom')"
      >
        <span class="ngx-ic-square"></span>
      </span>
      <span
        class="ngx-ic-resize-bar ngx-ic-left"
        role="presentation"
        (mousedown)="startMove($event, moveTypes.Resize, 'left')"
        (touchstart)="startMove($event, moveTypes.Resize, 'left')"
      ></span>
      <span
        class="ngx-ic-resize ngx-ic-left"
        (mousedown)="startMove($event, moveTypes.Resize, 'left')"
        (touchstart)="startMove($event, moveTypes.Resize, 'left')"
      >
        <span class="ngx-ic-square"></span>
      </span>
    </ng-container>
  </div>
</div>
`,
      styles: [':host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.ngx-ic-source-image{display:inline;max-width:100%;max-height:100%;transform-origin:center}:host>div img.ngx-ic-source-image.ngx-ic-draggable{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}:host .ngx-ic-overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}:host .ngx-ic-cropper{position:absolute;display:flex;color:var(--cropper-color, #53535C);background:transparent;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){:host .ngx-ic-cropper{outline-width:100vh}}:host .ngx-ic-cropper:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}:host .ngx-ic-cropper .ngx-ic-move{width:100%;cursor:move;border:var(--cropper-border, 1px solid rgba(255, 255, 255, .5))}:host .ngx-ic-cropper:hover .ngx-ic-move{border:var(--cropper-hover-border, var(--cropper-border, 1px solid rgba(255, 255, 255, .5)))}:host .ngx-ic-cropper:focus .ngx-ic-move{border:var(--cropper-focus-border, 2px solid dodgerblue)}:host .ngx-ic-cropper:focus .ngx-ic-resize .ngx-ic-square{background:var(--cropper-resize-square-focus-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-focus-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}:host .ngx-ic-cropper .ngx-ic-resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize .ngx-ic-square{display:inline-block;width:6px;height:6px;box-sizing:content-box;background:var(--cropper-resize-square-bg, #53535C);border:var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5))}:host .ngx-ic-cropper .ngx-ic-resize:hover .ngx-ic-square{background:var(--cropper-resize-square-hover-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-hover-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-topright{top:-12px;right:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .ngx-ic-cropper .ngx-ic-resize.ngx-ic-left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar{position:absolute;z-index:1}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .ngx-ic-cropper .ngx-ic-resize-bar.ngx-ic-left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .ngx-ic-cropper.ngx-ic-round{outline-color:transparent}:host .ngx-ic-cropper.ngx-ic-round:after{border-radius:100%;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){:host .ngx-ic-cropper.ngx-ic-round:after{box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}:host .ngx-ic-cropper.ngx-ic-round .ngx-ic-move{border-radius:100%}:host.disabled .ngx-ic-cropper .ngx-ic-resize,:host.disabled .ngx-ic-cropper .ngx-ic-resize-bar,:host.disabled .ngx-ic-cropper .ngx-ic-move{display:none}:host.ngx-ic-hidden{display:none}\n']
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper", {
        static: true
      }]
    }],
    sourceImage: [{
      type: ViewChild,
      args: ["sourceImage", {
        static: false
      }]
    }],
    imageChangedEvent: [{
      type: Input
    }],
    imageURL: [{
      type: Input
    }],
    imageBase64: [{
      type: Input
    }],
    imageFile: [{
      type: Input
    }],
    imageAltText: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    cropperFrameAriaLabel: [{
      type: Input
    }],
    output: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    autoCrop: [{
      type: Input
    }],
    cropper: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    maintainAspectRatio: [{
      type: Input
    }],
    aspectRatio: [{
      type: Input
    }],
    resetCropOnAspectRatioChange: [{
      type: Input
    }],
    resizeToWidth: [{
      type: Input
    }],
    resizeToHeight: [{
      type: Input
    }],
    cropperMinWidth: [{
      type: Input
    }],
    cropperMinHeight: [{
      type: Input
    }],
    cropperMaxHeight: [{
      type: Input
    }],
    cropperMaxWidth: [{
      type: Input
    }],
    cropperStaticWidth: [{
      type: Input
    }],
    cropperStaticHeight: [{
      type: Input
    }],
    canvasRotation: [{
      type: Input
    }],
    initialStepSize: [{
      type: Input
    }],
    roundCropper: [{
      type: Input
    }],
    onlyScaleDown: [{
      type: Input
    }],
    imageQuality: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    containWithinAspectRatio: [{
      type: Input
    }],
    hideResizeSquares: [{
      type: Input
    }],
    allowMoveImage: [{
      type: Input
    }],
    checkImageType: [{
      type: Input
    }],
    alignImage: [{
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.disabled"]
    }, {
      type: Input
    }],
    hidden: [{
      type: HostBinding,
      args: ["class.ngx-ic-hidden"]
    }, {
      type: Input
    }],
    alignImageStyle: [{
      type: HostBinding,
      args: ["style.text-align"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();

// src/app/shared/components/image-editor/image-editor.component.ts
var _c08 = ["cropper"];
var _c15 = ["originalImage"];
var _c23 = ["canvas"];
var _c32 = ["fileInput"];
function ImageEditorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.errorMessage);
  }
}
function ImageEditorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function ImageEditorComponent_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "p-button", 20);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onClick", function ImageEditorComponent_Conditional_6_ng_template_3_Template_p_button_onClick_2_listener($event) {
      const chooseCallback_r4 = \u0275\u0275restoreView(_r3).chooseCallback;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.choose($event, chooseCallback_r4));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(3, 2, "SHARED.COMMON.BUTTONS.UPLOAD"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 4, "SHARED.IMAGE_EDITOR.UPLOAD_IMAGE"));
  }
}
function ImageEditorComponent_Conditional_6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SHARED.IMAGE_EDITOR.DRAG_DROP_HELP"), " ");
  }
}
function ImageEditorComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16, 3);
  }
}
function ImageEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p-fileupload", 14, 0);
    \u0275\u0275listener("onSelect", function ImageEditorComponent_Conditional_6_Template_p_fileupload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileSelect($event));
    })("onError", function ImageEditorComponent_Conditional_6_Template_p_fileupload_onError_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUploadError());
    });
    \u0275\u0275template(3, ImageEditorComponent_Conditional_6_ng_template_3_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, ImageEditorComponent_Conditional_6_ng_template_5_Template, 5, 3, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ImageEditorComponent_Conditional_6_Conditional_6_Template, 2, 0, "img", 16);
    \u0275\u0275element(7, "canvas", 17, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("showUploadButton", false)("showCancelButton", false)("multiple", false)("maxFileSize", 5e6);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.isImageRemoved ? 6 : -1);
  }
}
function ImageEditorComponent_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.croppedImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ImageEditorComponent_Conditional_7_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function ImageEditorComponent_Conditional_7_Conditional_21_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetImage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "SHARED.IMAGE_EDITOR.REMOVE_IMAGE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "SHARED.IMAGE_EDITOR.REMOVE_IMAGE"));
  }
}
function ImageEditorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "image-cropper", 27, 4);
    \u0275\u0275listener("imageCropped", function ImageEditorComponent_Conditional_7_Template_image_cropper_imageCropped_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageCropped($event));
    })("loadedImage", function ImageEditorComponent_Conditional_7_Template_image_cropper_loadedImage_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageLoaded());
    })("loadError", function ImageEditorComponent_Conditional_7_Template_image_cropper_loadError_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLoadError());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div")(6, "div", 28)(7, "div", 29)(8, "p-button", 30);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onClick", function ImageEditorComponent_Conditional_7_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerFileInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 31, 5);
    \u0275\u0275listener("change", function ImageEditorComponent_Conditional_7_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileInputChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 32);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 33);
    \u0275\u0275conditionalCreate(20, ImageEditorComponent_Conditional_7_Conditional_20_Template, 1, 1, "img", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, ImageEditorComponent_Conditional_7_Conditional_21_Template, 3, 6, "p-button", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", !ctx_r0.cropperReady);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageFile", ctx_r0.currentFile)("maintainAspectRatio", false)("canvasRotation", ctx_r0.canvasRotation)("transform", ctx_r0.transform)("alignImage", "center")("imageQuality", 100)("allowMoveImage", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 15, "SHARED.COMMON.BUTTONS.UPLOAD"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 17, "SHARED.IMAGE_EDITOR.UPLOAD_DIFFERENT_IMAGE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "SHARED.IMAGE_EDITOR.PREVIEW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "SHARED.IMAGE_EDITOR.PREVIEW_HELP"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.croppedImageUrl ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.currentFile ? 21 : -1);
  }
}
function ImageEditorComponent_ng_template_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function ImageEditorComponent_ng_template_8_Conditional_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cropAndSave());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, "SHARED.COMMON.BUTTONS.CONFIRM"))("disabled", !ctx_r0.croppedImageUrl && !ctx_r0.saveOnEmpty() || ctx_r0.isLoading);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "SHARED.COMMON.BUTTONS.CONFIRM"));
  }
}
function ImageEditorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "p-button", 38);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onClick", function ImageEditorComponent_ng_template_8_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275conditionalCreate(5, ImageEditorComponent_ng_template_8_Conditional_5_Template, 3, 7, "p-button", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 5, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.currentFile || !ctx_r0.currentFile && ctx_r0.saveOnEmpty() ? 5 : -1);
  }
}
var ImageEditorComponent = class _ImageEditorComponent {
  cropper;
  originalImage;
  canvas;
  fileInput;
  visible = input(true, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  aspectRatio = input(1, ...ngDevMode ? [{ debugName: "aspectRatio" }] : (
    /* istanbul ignore next */
    []
  ));
  maxWidth = input(1920, ...ngDevMode ? [{ debugName: "maxWidth" }] : (
    /* istanbul ignore next */
    []
  ));
  maxHeight = input(1080, ...ngDevMode ? [{ debugName: "maxHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  paddingPercentage = input(0.1, ...ngDevMode ? [{ debugName: "paddingPercentage" }] : (
    /* istanbul ignore next */
    []
  ));
  backgroundColor = input("white", ...ngDevMode ? [{ debugName: "backgroundColor" }] : (
    /* istanbul ignore next */
    []
  ));
  saveOnEmpty = input(false, ...ngDevMode ? [{ debugName: "saveOnEmpty" }] : (
    /* istanbul ignore next */
    []
  ));
  fileUrl = input(null, ...ngDevMode ? [{ debugName: "fileUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  visibleChange = output();
  croppedFile = output();
  fileSelected = output();
  uploadError = output();
  imageCropped = output();
  imageLoaded = output();
  imageRemoved = output();
  loadError = output();
  cdr = inject(ChangeDetectorRef);
  currentFile = null;
  croppedImageUrl = null;
  canvasRotation = 0;
  isImageRemoved = false;
  transform = {
    scale: 1
  };
  isLoading = false;
  errorMessage = null;
  cropperReady = false;
  constructor() {
    effect(() => {
      const fileUrl = this.fileUrl();
      if (isDefined(fileUrl)) {
        this.loadImageFromUrl(fileUrl);
      } else {
        this.isImageRemoved = true;
      }
    });
  }
  /**
   * Handles file selection event.
   * @param event The file selection event.
   */
  onFileSelect(event) {
    this.errorMessage = null;
    this.cropperReady = false;
    const file = event.files[0];
    if (isDefined(file)) {
      this.fileSelected.emit(file);
      this.processOriginal(file);
    }
  }
  /**
   * Loads an image from a URL.
   * @param url The URL of the image.
   */
  loadImageFromUrl(url) {
    if (isNullOrUndefined(url)) {
      this.isLoading = true;
      return;
    }
    this.errorMessage = null;
    this.isImageRemoved = false;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      this.originalImage.nativeElement.src = url;
      this.processOriginalFromElement(img);
      this.isLoading = true;
    };
    img.onerror = () => {
      this.isLoading = false;
      this.isImageRemoved = true;
      this.errorMessage = "Error loading image from URL. Please try another URL.";
      this.loadError.emit(this.errorMessage);
    };
    img.src = url;
  }
  /**
   * Processes the original image file.
   * @param file The original image file.
   */
  processOriginal(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!isDefined(e.target) || !hasProperty(e.target, "result")) {
        this.handleError("Error reading file");
        return;
      }
      const result = e.target.result;
      if (!isString(result)) {
        this.handleError("Invalid file format");
        return;
      }
      let imgElement;
      if (isDefined(this.originalImage?.nativeElement)) {
        imgElement = this.originalImage.nativeElement;
        imgElement.src = result;
      } else {
        imgElement = new Image();
        imgElement.src = result;
      }
      imgElement.onload = () => {
        this.processOriginalFromElement(imgElement);
      };
      imgElement.onerror = () => {
        this.handleError("Error loading image");
      };
    };
    reader.onerror = () => {
      this.handleError("Error reading file");
    };
    reader.readAsDataURL(file);
  }
  handleError(message) {
    this.errorMessage = message;
    this.loadError.emit(message);
    this.isLoading = false;
  }
  /**
   * Processes the original image element.
   * @param img The original image element.
   */
  processOriginalFromElement(img) {
    const src = img;
    let dst;
    if (isDefined(this.canvas?.nativeElement)) {
      dst = this.canvas.nativeElement;
    } else {
      dst = document.createElement("canvas");
    }
    const xpadding = src.width / 2 * this.paddingPercentage();
    const ypadding = src.height / 2 * this.paddingPercentage();
    dst.width = src.width + xpadding * 2;
    dst.height = src.height + ypadding * 2;
    const ctx = dst.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.rect(0, 0, dst.width, dst.height);
      ctx.fillStyle = this.backgroundColor();
      ctx.fill();
      ctx.drawImage(src, xpadding, ypadding, src.width, src.height);
      dst.toBlob((blob) => {
        if (blob) {
          const processedFile = new File([blob], "image.png", {
            type: blob.type
          });
          this.currentFile = processedFile;
          this.cropperReady = true;
          this.isLoading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  /**
   * Handles upload error event.
   * @param event The upload error event.
   */
  onUploadError() {
    const errorMessage = "Error uploading file. Please ensure it's an image under 5MB.";
    this.errorMessage = errorMessage;
    this.uploadError.emit(errorMessage);
  }
  /**
   * Handles image cropped event.
   * @param event The image cropped event.
   */
  onImageCropped(event) {
    this.revokeCroppedImageUrl();
    this.croppedImageUrl = isDefined(event.objectUrl) ? event.objectUrl : null;
    if (isDefined(event)) {
      this.imageCropped.emit(event);
    }
  }
  /**
   * Handles image loaded event.
   * @param event The image loaded event.
   */
  onImageLoaded() {
    this.isLoading = false;
    this.errorMessage = null;
    this.transform = { scale: 1 };
    this.canvasRotation = 0;
    this.imageLoaded.emit();
  }
  /**
   * Handles load error event.
   * @param event The load error event.
   */
  onLoadError() {
    const errorMessage = "Error loading image. Please try another file.";
    this.isLoading = false;
    this.errorMessage = errorMessage;
    this.loadError.emit(errorMessage);
    this.resetImage();
  }
  /**
   * Handles zoom change event.
   */
  onZoomChange() {
    this.cropper.transform = __spreadValues({}, this.transform);
  }
  /**
   * Rotates the image to the left.
   */
  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }
  /**
   * Rotates the image to the right.
   */
  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }
  /**
   * Flips the image after rotation.
   */
  flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = __spreadProps(__spreadValues({}, this.transform), {
      flipH: flippedV,
      flipV: flippedH
    });
  }
  /**
   * Resets the image editor state.
   */
  resetImage() {
    this.revokeCroppedImageUrl();
    this.currentFile = null;
    this.croppedImageUrl = null;
    this.errorMessage = null;
    this.transform = { scale: 1 };
    this.canvasRotation = 0;
    this.isImageRemoved = true;
  }
  /**
   * Crops and saves the image.
   */
  async cropAndSave() {
    if (isDefined(this.croppedImageUrl)) {
      this.isLoading = true;
      try {
        const response = await fetch(this.croppedImageUrl);
        const blob = await response.blob();
        const fileName = isDefined(this.currentFile?.name) ? this.currentFile?.name : "cropped-image.png";
        const croppedFile = new File([blob], fileName, { type: blob.type });
        this.croppedFile.emit(croppedFile);
        this.resetAndClose();
      } catch (error) {
        const errorMessage = "Error saving cropped image. Please try again.";
        this.errorMessage = errorMessage;
        this.loadError.emit(errorMessage);
        throw error;
      } finally {
        this.isLoading = false;
      }
    } else if (this.saveOnEmpty()) {
      this.imageRemoved.emit();
      this.resetImage();
    }
  }
  /**
   * Handles modal close event.
   */
  onClose() {
    this.resetAndClose();
  }
  /**
   * Resets the image editor state and closes the modal.
   */
  resetAndClose() {
    this.visibleChange.emit(false);
    this.resetImage();
  }
  /**
   * Handles file upload choose event.
   * @param event The file selection event
   * @param callback The callback function to execute after file selection
   */
  choose(_event, callback) {
    callback();
  }
  /**
   * Triggers the hidden file input dialog
   */
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  /**
   * Handles file selection from the simple file input
   * @param event The file input change event
   */
  onFileInputChange(event) {
    const input2 = event.target;
    if (input2.files && input2.files.length > 0) {
      const file = input2.files[0];
      this.errorMessage = null;
      this.cropperReady = false;
      this.fileSelected.emit(file);
      this.processOriginal(file);
      input2.value = "";
    }
  }
  /**
   * Revokes the current cropped image URL to free up memory
   */
  revokeCroppedImageUrl() {
    if (isDefined(this.croppedImageUrl)) {
      URL.revokeObjectURL(this.croppedImageUrl);
    }
  }
  /**
   * Cleanup when component is destroyed
   */
  ngOnDestroy() {
    this.revokeCroppedImageUrl();
  }
  static \u0275fac = function ImageEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageEditorComponent, selectors: [["app-image-editor"]], viewQuery: function ImageEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c08, 5)(_c15, 5)(_c23, 5)(_c32, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cropper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.originalImage = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { visible: [1, "visible"], aspectRatio: [1, "aspectRatio"], maxWidth: [1, "maxWidth"], maxHeight: [1, "maxHeight"], paddingPercentage: [1, "paddingPercentage"], backgroundColor: [1, "backgroundColor"], saveOnEmpty: [1, "saveOnEmpty"], fileUrl: [1, "fileUrl"] }, outputs: { visibleChange: "visibleChange", croppedFile: "croppedFile", fileSelected: "fileSelected", uploadError: "uploadError", imageCropped: "imageCropped", imageLoaded: "imageLoaded", imageRemoved: "imageRemoved", loadError: "loadError" }, decls: 9, vars: 11, consts: [["fileUpload", ""], ["header", ""], ["canvas", ""], ["originalImage", ""], ["cropper", ""], ["fileInput", ""], ["styleClass", "image-editor-dialog", 3, "onHide", "visible", "modal", "draggable", "resizable", "header"], [1, "flex"], ["severity", "error", "className", "w-full", 3, "text"], [1, "relative", "p-2"], [1, "loading-overlay"], [1, "upload-zone"], [1, "grid", "grid-cols-3", "gap-4", 3, "hidden"], ["pTemplate", "footer"], ["accept", "image/*", "styleClass", "upload-component w-full", 3, "onSelect", "onError", "showUploadButton", "showCancelButton", "multiple", "maxFileSize"], ["pTemplate", "content"], ["alt", "original", 1, "none"], [1, "none"], [1, "flex", "flex-wrap", "flex-1", "gap-4", "justify-between", "items-center"], [1, "flex", "gap-2"], ["icon", "pi pi-cloud-upload", 3, "onClick", "label"], [1, "grid", "grid-cols-1", "gap-4", "place-content-center"], [1, "pi", "pi-image", "!text-[10rem]", "mb-2", "text-center"], [1, "text-center"], [1, "grid", "grid-cols-3", "gap-4"], [1, "col-span-2"], [1, "crop-container"], ["className", "max-h-[55vh]", 3, "imageCropped", "loadedImage", "loadError", "imageFile", "maintainAspectRatio", "canvasRotation", "transform", "alignImage", "imageQuality", "allowMoveImage"], [1, "preview-section"], [1, "mb-3"], ["icon", "pi pi-upload", "severity", "primary", "size", "small", 3, "onClick", "label"], ["type", "file", "accept", "image/*", 1, "hidden-file-input", 3, "change"], [1, "mb-2", "text-sm", "text-color-secondary"], [1, "p-2", "preview-container", "border-1", "border-round"], ["alt", "Cropped Preview", 1, "object-contain", "w-full", 3, "src"], ["severity", "danger", 3, "label"], ["severity", "danger", 3, "onClick", "label"], [1, "flex", "gap-2", "justify-end", "w-full"], ["severity", "secondary", 3, "onClick", "label"], ["severity", "primary", 3, "label", "disabled"], ["severity", "primary", 3, "onClick", "label", "disabled"]], template: function ImageEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-dialog", 6);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("onHide", function ImageEditorComponent_Template_p_dialog_onHide_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(2, "div", 7);
      \u0275\u0275conditionalCreate(3, ImageEditorComponent_Conditional_3_Template, 1, 1, "p-message", 8);
      \u0275\u0275elementStart(4, "div", 9);
      \u0275\u0275conditionalCreate(5, ImageEditorComponent_Conditional_5_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(6, ImageEditorComponent_Conditional_6_Template, 9, 5, "div", 11);
      \u0275\u0275conditionalCreate(7, ImageEditorComponent_Conditional_7_Template, 22, 23, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ImageEditorComponent_ng_template_8_Template, 6, 7, "ng-template", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible())("modal", true)("draggable", false)("resizable", false)("header", \u0275\u0275pipeBind1(1, 9, "SHARED.IMAGE_EDITOR.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.currentFile ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentFile ? 7 : -1);
    }
  }, dependencies: [
    FormsModule,
    FileUploadModule,
    FileUpload,
    PrimeTemplate,
    DialogModule,
    Dialog,
    ImageModule,
    ButtonModule,
    Button,
    StepsModule,
    ToggleSwitchModule,
    ImageCropperComponent,
    SliderModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    MessageModule,
    Message,
    TooltipModule,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%]     .crop-container {\n  height: 400px;\n  width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]     .loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n[_nghost-%COMP%]     .upload-zone {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .upload-component {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-fileupload-content {\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .preview-section {\n  height: 100%;\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .preview-container {\n  background-color: white;\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .image-editor-dialog {\n  width: 1000px;\n}\n[_nghost-%COMP%]     .upload-replace-component .p-fileupload {\n  border: none;\n  background: none;\n  padding: 0;\n}\n[_nghost-%COMP%]     .upload-replace-component .p-fileupload-header {\n  padding: 0;\n  border: none;\n  background: none;\n}\n[_nghost-%COMP%]     .upload-different-btn:hover {\n  transform: translateY(-1px);\n}\n[_nghost-%COMP%]     .hidden-file-input {\n  display: none;\n}\n/*# sourceMappingURL=image-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageEditorComponent, [{
    type: Component,
    args: [{ selector: "app-image-editor", imports: [
      FormsModule,
      FileUploadModule,
      DialogModule,
      ImageModule,
      ButtonModule,
      StepsModule,
      ToggleSwitchModule,
      ImageCropperComponent,
      SliderModule,
      ProgressSpinnerModule,
      MessageModule,
      TooltipModule,
      TranslatePipe
    ], template: `<p-dialog
  [visible]="visible()"
  [modal]="true"
  styleClass="image-editor-dialog"
  [draggable]="false"
  [resizable]="false"
  [header]="'SHARED.IMAGE_EDITOR.TITLE' | translate"
  (onHide)="onClose()"
>
  <div class="flex">
    <!-- Error message -->
    @if (errorMessage) {
      <p-message
        severity="error"
        [text]="errorMessage"
        className="w-full"
      ></p-message>
    }

    <!-- Main Content -->
    <div class="relative p-2">
      <!-- Loading overlay -->
      @if (isLoading) {
        <div class="loading-overlay">
          <p-progressSpinner></p-progressSpinner>
        </div>
      }

      <!-- Upload Zone or Cropper -->
      @if (!currentFile) {
        <div class="upload-zone">
          <p-fileupload
            #fileUpload
            [showUploadButton]="false"
            [showCancelButton]="false"
            [multiple]="false"
            accept="image/*"
            [maxFileSize]="5000000"
            (onSelect)="onFileSelect($event)"
            (onError)="onUploadError()"
            styleClass="upload-component w-full"
          >
            <ng-template
              #header
              let-files
              let-chooseCallback="chooseCallback"
              let-clearCallback="clearCallback"
              let-uploadCallback="uploadCallback"
            >
              <div
                class="flex flex-wrap flex-1 gap-4 justify-between items-center"
              >
                <div class="flex gap-2">
                  <p-button
                    (onClick)="choose($event, chooseCallback)"
                    icon="pi pi-cloud-upload"
                    [label]="'SHARED.COMMON.BUTTONS.UPLOAD' | translate"
                    [attr.aria-label]="
                      'SHARED.IMAGE_EDITOR.UPLOAD_IMAGE' | translate
                    "
                  />
                </div>
              </div>
            </ng-template>
            <ng-template pTemplate="content">
              <div class="grid grid-cols-1 gap-4 place-content-center">
                <span class="pi pi-image !text-[10rem] mb-2 text-center"></span>
                <p class="text-center">
                  {{ 'SHARED.IMAGE_EDITOR.DRAG_DROP_HELP' | translate }}
                </p>
              </div>
            </ng-template>
          </p-fileupload>
          @if (!isImageRemoved) {
            <img #originalImage class="none" alt="original" />
          }
          <canvas #canvas class="none"></canvas>
        </div>
      }

      @if (currentFile) {
        <div [class.hidden]="!cropperReady" class="grid grid-cols-3 gap-4">
          <!-- Cropper Section -->
          <div class="col-span-2">
            <div class="crop-container">
              <image-cropper
                #cropper
                [imageFile]="currentFile"
                [maintainAspectRatio]="false"
                [canvasRotation]="canvasRotation"
                [transform]="transform"
                [alignImage]="'center'"
                (imageCropped)="onImageCropped($event)"
                (loadedImage)="onImageLoaded()"
                (loadError)="onLoadError()"
                [imageQuality]="100"
                [allowMoveImage]="true"
                className="max-h-[55vh]"
              ></image-cropper>
            </div>
          </div>
          <!-- Preview Section -->
          <div>
            <div class="preview-section">
              <!-- Upload Image Button -->
              <div class="mb-3">
                <p-button
                  [label]="'SHARED.COMMON.BUTTONS.UPLOAD' | translate"
                  icon="pi pi-upload"
                  severity="primary"
                  size="small"
                  (onClick)="triggerFileInput()"
                  [attr.aria-label]="
                    'SHARED.IMAGE_EDITOR.UPLOAD_DIFFERENT_IMAGE' | translate
                  "
                ></p-button>
                <input
                  #fileInput
                  type="file"
                  accept="image/*"
                  class="hidden-file-input"
                  (change)="onFileInputChange($event)"
                />
              </div>
              <h3>{{ 'SHARED.IMAGE_EDITOR.PREVIEW' | translate }}</h3>
              <p class="mb-2 text-sm text-color-secondary">
                {{ 'SHARED.IMAGE_EDITOR.PREVIEW_HELP' | translate }}
              </p>
              <div class="p-2 preview-container border-1 border-round">
                @if (croppedImageUrl) {
                  <img
                    [src]="croppedImageUrl"
                    class="object-contain w-full"
                    alt="Cropped Preview"
                  />
                }
              </div>
            </div>
          </div>
          @if (currentFile) {
            <p-button
              [label]="'SHARED.IMAGE_EDITOR.REMOVE_IMAGE' | translate"
              severity="danger"
              (onClick)="resetImage()"
              [attr.aria-label]="'SHARED.IMAGE_EDITOR.REMOVE_IMAGE' | translate"
            ></p-button>
          }
        </div>
      }
    </div>
  </div>

  <ng-template pTemplate="footer">
    <div class="flex gap-2 justify-end w-full">
      <p-button
        [label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
        severity="secondary"
        (onClick)="onClose()"
        [attr.aria-label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
      ></p-button>

      <div class="flex gap-2">
        @if (currentFile || (!currentFile && saveOnEmpty())) {
          <p-button
            [label]="'SHARED.COMMON.BUTTONS.CONFIRM' | translate"
            severity="primary"
            (onClick)="cropAndSave()"
            [disabled]="(!croppedImageUrl && !saveOnEmpty()) || isLoading"
            [attr.aria-label]="'SHARED.COMMON.BUTTONS.CONFIRM' | translate"
          ></p-button>
        }
      </div>
    </div>
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/shared/components/image-editor/image-editor.component.scss */\n:host ::ng-deep .crop-container {\n  height: 400px;\n  width: 100%;\n  position: relative;\n}\n:host ::ng-deep .loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n:host ::ng-deep .upload-zone {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .upload-component {\n  width: 100%;\n}\n:host ::ng-deep .p-fileupload-content {\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .preview-section {\n  height: 100%;\n  padding: 1rem;\n}\n:host ::ng-deep .preview-container {\n  background-color: white;\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ::ng-deep .image-editor-dialog {\n  width: 1000px;\n}\n:host ::ng-deep .upload-replace-component .p-fileupload {\n  border: none;\n  background: none;\n  padding: 0;\n}\n:host ::ng-deep .upload-replace-component .p-fileupload-header {\n  padding: 0;\n  border: none;\n  background: none;\n}\n:host ::ng-deep .upload-different-btn:hover {\n  transform: translateY(-1px);\n}\n:host ::ng-deep .hidden-file-input {\n  display: none;\n}\n/*# sourceMappingURL=image-editor.component.css.map */\n"] }]
  }], () => [], { cropper: [{
    type: ViewChild,
    args: ["cropper"]
  }], originalImage: [{
    type: ViewChild,
    args: ["originalImage"]
  }], canvas: [{
    type: ViewChild,
    args: ["canvas"]
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }], aspectRatio: [{ type: Input, args: [{ isSignal: true, alias: "aspectRatio", required: false }] }], maxWidth: [{ type: Input, args: [{ isSignal: true, alias: "maxWidth", required: false }] }], maxHeight: [{ type: Input, args: [{ isSignal: true, alias: "maxHeight", required: false }] }], paddingPercentage: [{ type: Input, args: [{ isSignal: true, alias: "paddingPercentage", required: false }] }], backgroundColor: [{ type: Input, args: [{ isSignal: true, alias: "backgroundColor", required: false }] }], saveOnEmpty: [{ type: Input, args: [{ isSignal: true, alias: "saveOnEmpty", required: false }] }], fileUrl: [{ type: Input, args: [{ isSignal: true, alias: "fileUrl", required: false }] }], visibleChange: [{ type: Output, args: ["visibleChange"] }], croppedFile: [{ type: Output, args: ["croppedFile"] }], fileSelected: [{ type: Output, args: ["fileSelected"] }], uploadError: [{ type: Output, args: ["uploadError"] }], imageCropped: [{ type: Output, args: ["imageCropped"] }], imageLoaded: [{ type: Output, args: ["imageLoaded"] }], imageRemoved: [{ type: Output, args: ["imageRemoved"] }], loadError: [{ type: Output, args: ["loadError"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageEditorComponent, { className: "ImageEditorComponent", filePath: "src/app/shared/components/image-editor/image-editor.component.ts", lineNumber: 56 });
})();

export {
  ImageEditorComponent
};
//# sourceMappingURL=chunk-N7CFVCRV.js.map
