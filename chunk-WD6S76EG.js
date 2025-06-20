import {
  DataViewModule,
  DynamicFormComponent,
  FileUpload,
  FileUploadModule,
  Message,
  MessageModule,
  SliderModule,
  UtilsService
} from "./chunk-5SSZS4AX.js";
import {
  EyeIcon
} from "./chunk-3HRWOU6T.js";
import {
  Dialog,
  DialogModule,
  FocusTrap,
  GridComponent,
  MinusIcon,
  PlusIcon,
  ProgressSpinner,
  ProgressSpinnerModule,
  UtilityService,
  createDropdownField,
  createPasswordField,
  createTextField,
  takeUntilDestroyed
} from "./chunk-3FX7N3RV.js";
import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  ButtonModule,
  Footer,
  FormGroup,
  FormsModule,
  MessageService,
  NG_VALUE_ACCESSOR,
  PrimeTemplate,
  SharedModule,
  TimesIcon,
  Tooltip,
  TooltipModule,
  Validators,
  addClass,
  appendChild,
  blockBodyScroll,
  find,
  findSingle,
  focus,
  unblockBodyScroll,
  uuid,
  zindexutils
} from "./chunk-UKC35VDE.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-FXF5ECNT.js";
import {
  AccountsService,
  AdminStateService,
  EntitiesService,
  ThemesService
} from "./chunk-VQ5BPOJV.js";
import {
  ApiUrlService,
  DEFAULT_EMAIL_PROVIDER,
  DEFAULT_LIST_SIZE,
  hasProperty,
  isArray,
  isDefined,
  isNullOrUndefined,
  isString
} from "./chunk-3LDCLVZS.js";
import {
  ActivatedRoute,
  DomSanitizer,
  HttpClient,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-5T4X2AFY.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  EMPTY,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Observable,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  effect,
  filter,
  finalize,
  first,
  forwardRef,
  fromEvent,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  of,
  output,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CAVC4NS5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R327OCYJ.js";

// node_modules/primeng/fesm2022/primeng-divider.mjs
var _c0 = ["*"];
var theme = ({
  dt
}) => `
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${dt("divider.horizontal.margin")};
    padding: ${dt("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${dt("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${dt("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${dt("divider.vertical.margin")};
    padding: ${dt("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${dt("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${dt("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${dt("divider.content.background")};
    color: ${dt("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    justifyContent: props.layout === "horizontal" ? props.align === "center" || props.align === null ? "center" : props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : null : null,
    alignItems: props.layout === "vertical" ? props.align === "center" || props.align === null ? "center" : props.align === "top" ? "flex-start" : props.align === "bottom" ? "flex-end" : null : null
  })
};
var classes = {
  root: ({
    props
  }) => ["p-divider p-component", "p-divider-" + props.layout, "p-divider-" + props.type, {
    "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left")
  }, {
    "p-divider-center": props.layout === "horizontal" && props.align === "center"
  }, {
    "p-divider-right": props.layout === "horizontal" && props.align === "right"
  }, {
    "p-divider-top": props.layout === "vertical" && props.align === "top"
  }, {
    "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center")
  }, {
    "p-divider-bottom": props.layout === "vertical" && props.align === "bottom"
  }],
  content: "p-divider-content"
};
var DividerStyle = class _DividerStyle extends BaseStyle {
  name = "divider";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DividerStyle_BaseFactory;
    return function DividerStyle_Factory(__ngFactoryType__) {
      return (\u0275DividerStyle_BaseFactory || (\u0275DividerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DividerStyle)))(__ngFactoryType__ || _DividerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DividerStyle,
    factory: _DividerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerStyle, [{
    type: Injectable
  }], null, null);
})();
var DividerClasses;
(function(DividerClasses2) {
  DividerClasses2["root"] = "p-divider";
  DividerClasses2["content"] = "p-divider-content";
})(DividerClasses || (DividerClasses = {}));
var Divider = class _Divider extends BaseComponent {
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
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  _componentStyle = inject(DividerStyle);
  get hostClass() {
    return this.styleClass;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Divider_BaseFactory;
    return function Divider_Factory(__ngFactoryType__) {
      return (\u0275Divider_BaseFactory || (\u0275Divider_BaseFactory = \u0275\u0275getInheritedFactory(_Divider)))(__ngFactoryType__ || _Divider);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Divider,
    selectors: [["p-divider"]],
    hostVars: 33,
    hostBindings: function Divider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.layout)("data-pc-name", "divider")("role", "separator");
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275styleProp("justify-content", ctx.layout === "horizontal" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "left" ? "flex-start" : ctx.align === "right" ? "flex-end" : null : null)("align-items", ctx.layout === "vertical" ? ctx.align === "center" || ctx.align === void 0 ? "center" : ctx.align === "top" ? "flex-start" : ctx.align === "bottom" ? "flex-end" : null : null);
        \u0275\u0275classProp("p-divider", true)("p-component", true)("p-divider-horizontal", ctx.layout === "horizontal")("p-divider-vertical", ctx.layout === "vertical")("p-divider-solid", ctx.type === "solid")("p-divider-dashed", ctx.type === "dashed")("p-divider-dotted", ctx.type === "dotted")("p-divider-left", ctx.layout === "horizontal" && (!ctx.align || ctx.align === "left"))("p-divider-center", ctx.layout === "horizontal" && ctx.align === "center" || ctx.layout === "vertical" && (!ctx.align || ctx.align === "center"))("p-divider-right", ctx.layout === "horizontal" && ctx.align === "right")("p-divider-top", ctx.layout === "vertical" && ctx.align === "top")("p-divider-bottom", ctx.layout === "vertical" && ctx.align === "bottom");
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      layout: "layout",
      type: "type",
      align: "align"
    },
    features: [\u0275\u0275ProvidersFeature([DividerStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "p-divider-content"]],
    template: function Divider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div class="p-divider-content">
            <ng-content></ng-content>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.p-divider]": "true",
        "[class.p-component]": "true",
        "[class.p-divider-horizontal]": 'layout === "horizontal"',
        "[class.p-divider-vertical]": 'layout === "vertical"',
        "[class.p-divider-solid]": 'type === "solid"',
        "[class.p-divider-dashed]": 'type === "dashed"',
        "[class.p-divider-dotted]": 'type === "dotted"',
        "[class.p-divider-left]": 'layout === "horizontal" && (!align || align === "left")',
        "[class.p-divider-center]": '(layout === "horizontal" && align === "center") || (layout === "vertical" && (!align || align === "center"))',
        "[class.p-divider-right]": 'layout === "horizontal" && align === "right"',
        "[class.p-divider-top]": 'layout === "vertical" && align === "top"',
        "[class.p-divider-bottom]": 'layout === "vertical" && align === "bottom"',
        "[attr.aria-orientation]": "layout",
        "[attr.data-pc-name]": "'divider'",
        "[attr.role]": '"separator"',
        "[style.justifyContent]": 'layout === "horizontal" ? (align === "center" || align === undefined ? "center" : (align === "left" ? "flex-start" : (align === "right" ? "flex-end" : null))) : null',
        "[style.alignItems]": 'layout === "vertical" ? (align === "center" || align === undefined ? "center" : (align === "top" ? "flex-start" : (align === "bottom" ? "flex-end" : null))) : null'
      },
      providers: [DividerStyle]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var DividerModule = class _DividerModule {
  static \u0275fac = function DividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DividerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Divider]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [Divider],
      exports: [Divider]
    }]
  }], null, null);
})();

// src/app/features/administration/services/broadcast-event-messages.service.ts
var BroadcastEventMessageService = class _BroadcastEventMessageService {
  messageSubject = new Subject();
  /**
   * Broadcast a message to all subscribers
   * @param type The message type identifier
   * @param data The data payload
   */
  broadcast(type, data) {
    this.messageSubject.next({ type, data });
  }
  /**
   * Listen for messages of a specific type
   * @param type The message type to listen for
   * @returns An observable that emits when messages of the specified type are broadcast
   */
  on(type) {
    return this.messageSubject.pipe(filter((message) => message.type === type), map((message) => message.data));
  }
  static \u0275fac = function BroadcastEventMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BroadcastEventMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastEventMessageService, factory: _BroadcastEventMessageService.\u0275fac, providedIn: "root" });
};

// node_modules/primeng/fesm2022/primeng-icons-refresh.mjs
var RefreshIcon = class _RefreshIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RefreshIcon_BaseFactory;
    return function RefreshIcon_Factory(__ngFactoryType__) {
      return (\u0275RefreshIcon_BaseFactory || (\u0275RefreshIcon_BaseFactory = \u0275\u0275getInheritedFactory(_RefreshIcon)))(__ngFactoryType__ || _RefreshIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RefreshIcon,
    selectors: [["RefreshIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function RefreshIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RefreshIcon, [{
    type: Component,
    args: [{
      selector: "RefreshIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs
var SearchMinusIcon = class _SearchMinusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchMinusIcon_BaseFactory;
    return function SearchMinusIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchMinusIcon_BaseFactory || (\u0275SearchMinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchMinusIcon)))(__ngFactoryType__ || _SearchMinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchMinusIcon,
    selectors: [["SearchMinusIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchMinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchMinusIcon, [{
    type: Component,
    args: [{
      selector: "SearchMinusIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs
var SearchPlusIcon = class _SearchPlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SearchPlusIcon_BaseFactory;
    return function SearchPlusIcon_Factory(__ngFactoryType__) {
      return (\u0275SearchPlusIcon_BaseFactory || (\u0275SearchPlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SearchPlusIcon)))(__ngFactoryType__ || _SearchPlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SearchPlusIcon,
    selectors: [["SearchPlusIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchPlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPlusIcon, [{
    type: Component,
    args: [{
      selector: "SearchPlusIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-undo.mjs
var UndoIcon = class _UndoIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UndoIcon_BaseFactory;
    return function UndoIcon_Factory(__ngFactoryType__) {
      return (\u0275UndoIcon_BaseFactory || (\u0275UndoIcon_BaseFactory = \u0275\u0275getInheritedFactory(_UndoIcon)))(__ngFactoryType__ || _UndoIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UndoIcon,
    selectors: [["UndoIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UndoIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UndoIcon, [{
    type: Component,
    args: [{
      selector: "UndoIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// src/app/features/administration/components/base/entity-section-base.ts
var EntitySectionBaseComponent = class _EntitySectionBaseComponent {
  dynamicForm;
  entity = input.required();
  createMode = input(false);
  entityType = input("");
  dataPath = input("");
  injectDataAtPath = input(false);
  formValidityChange = output();
  formValidity = signal(false);
  formValueChange = output();
  onEntityChange = input(() => {
  });
  entityChange = output();
  options = input({ readonly: false });
  mode = input("view");
  // Computed values based on inputs
  entityValue = computed(() => this.entity());
  isEditing = computed(() => this.mode() === "edit" && (this.options()?.readonly ?? false));
  isViewing = computed(() => this.mode() === "view" || this.options()?.readonly);
  sectionTitle = computed(() => this.options()?.title ?? "Details");
  sectionCategory = computed(() => this.options()?.category ?? "information");
  sectionOrder = computed(() => this.options()?.order ?? 0);
  canBeEdited = computed(() => {
    const entity = this.entity();
    return entity?.state !== "deleted";
  });
  // Common state management
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  isLoading = signal(false);
  // Services
  messageService = inject(MessageService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  // Form configuration
  formFields = [];
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => isNullOrUndefined(form) || form.pristine
    }
  ];
  // Grid configuration
  columns = [];
  columnsSignal = signal([]);
  // Form handling
  form;
  formInitialized = signal(false);
  constructor() {
    effect(() => {
      const isEditing = this.isEditing();
      this.isFormEditable.set(isEditing);
      if (isEditing) {
        this.onEnterEditMode();
      } else {
        this.onExitEditMode();
      }
    });
    effect(() => {
      const entity = this.entity();
      if (isDefined(entity) && !this.formInitialized()) {
        this.onEntityLoaded(entity);
        this.formInitialized.set(true);
      }
    });
    effect(() => {
      const currentMode = this.mode();
      if (currentMode === "edit") {
        this.onEnterEditMode();
      } else {
        this.onExitEditMode();
      }
    });
  }
  /**
   * Called when entity data is loaded
   * Override in child classes as needed
   */
  onEntityLoaded(_entity) {
    this.updateFormFields();
  }
  /**
   * Called when entering edit mode
   * Override in child classes as needed
   */
  onEnterEditMode() {
  }
  /**
   * Called when exiting edit mode
   * Override in child classes as needed
   */
  onExitEditMode() {
  }
  /**
   * Submits changes to the backend
   */
  submitChanges(formData) {
    const entity = this.entity();
    if (isNullOrUndefined(entity))
      return;
    const transformedData = this.transformFormData ? this.transformFormData(formData) : formData;
    const updateMethod = this.getUpdateMethod();
    if (isNullOrUndefined(updateMethod)) {
      console.error(`Update method not found for entity type: ${this.entityType()}`);
      return;
    }
    updateMethod(entity.id, transformedData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: this.entityType(),
          operation: "update",
          entityId: entity.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  /**
   * Get the update method for the entity
   * Must be implemented by derived components
   */
  getUpdateMethod() {
    return (_id, _data) => {
      return new Observable((observer) => {
        observer.complete();
      });
    };
  }
  /**
   * Optional method for transforming form data
   * Can be overridden by derived components
   */
  transformFormData(formData) {
    return formData;
  }
  /**
   * Handle form submission
   */
  onSubmit(formGroup) {
    if (isNullOrUndefined(this.entity()) || !formGroup.valid)
      return;
    this.isSubmitting.set(true);
    const formData = this.getDirtyValues(formGroup);
    if (Object.keys(formData).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.submitChanges(formData);
  }
  // Add after submitChanges method
  /**
   * Utility method to handle entity updates
   * @param updateObservable Observable that returns the updated entity
   * @param successMessage Success message to display
   */
  handleEntityUpdate(updateObservable, successMessage = "Updated successfully") {
    this.isSubmitting.set(true);
    updateObservable.pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        if (isDefined(response) && typeof response === "object") {
          const typedResponse = response;
          this.entityChange.emit(typedResponse);
          const callback = this.onEntityChange();
          if (typeof callback === "function") {
            callback(typedResponse);
          }
        }
        this.isFormEditable.set(false);
        this.showSuccessMessage(successMessage);
      },
      error: (error) => {
        this.isFormEditable.set(true);
        this.showErrorMessage(error);
      }
    });
  }
  /**
   * Extract only changed form values
   */
  getDirtyValues(formGroup) {
    const dirtyValues = {};
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];
      if (control.dirty) {
        dirtyValues[key] = control.value;
      }
    });
    return dirtyValues;
  }
  /**
   * Toggle edit mode
   */
  onEdit() {
    if (!this.canBeEdited()) {
      this.showErrorMessage(new Error("Deleted items cannot be edited."));
      return;
    }
    this.isFormEditable.set(true);
  }
  /**
   * Show success message
   */
  showSuccessMessage(message) {
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: message
    });
  }
  /**
   * Show error message
   */
  showErrorMessage(error) {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: error?.message || "An error occurred"
    });
  }
  /**
   * Prepare display fields for view mode
   * Override in child classes as needed
   */
  getDisplayFields() {
    return [];
  }
  /**
   * Reset form to entity values
   * Useful when canceling edits
   */
  resetForm() {
    if (this.form && isDefined(this.entity())) {
      this.updateFormFields();
    }
  }
  /**
   * Check if the form is valid
   * @returns boolean indicating validity
   */
  validate() {
    if (!this.dynamicForm?.form) {
      return false;
    }
    this.touchAllFormControls(this.dynamicForm.form);
    const isValid = this.dynamicForm.form.valid;
    this.formValidity.set(isValid);
    return isValid;
  }
  /**
   * Get the form value from the dynamic form component
   * @returns Form value as a record of key-value pairs
   */
  getFormValue() {
    if (!this.dynamicForm?.form) {
      return {};
    }
    return this.dynamicForm.form.value;
  }
  /**
   * Get the form group from the dynamic form component
   * @returns FormGroup or undefined if not available
   */
  getFormGroup() {
    return this.dynamicForm?.form;
  }
  /**
   * Handle form validity changes
   * @param validity Boolean indicating form validity
   */
  onFormValidityChange(validity) {
    this.formValidity.set(validity);
    this.formValidityChange.emit(validity);
  }
  /**
   * Handle form value changes
   * @param formData Form data as a record of key-value pairs
   */
  onFormValueChange(formData) {
    this.formValueChange.emit(formData);
  }
  /**
   * Mark all form controls as touched
   * This is useful for triggering validation messages
   * @param formGroup The form group to touch
   * @private
   * @returns void
   */
  touchAllFormControls(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.touchAllFormControls(control);
      } else if (control) {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }
  static \u0275fac = function EntitySectionBaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntitySectionBaseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntitySectionBaseComponent, selectors: [["ng-component"]], viewQuery: function EntitySectionBaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(DynamicFormComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dynamicForm = _t.first);
    }
  }, inputs: { entity: [1, "entity"], createMode: [1, "createMode"], entityType: [1, "entityType"], dataPath: [1, "dataPath"], injectDataAtPath: [1, "injectDataAtPath"], onEntityChange: [1, "onEntityChange"], options: [1, "options"], mode: [1, "mode"] }, outputs: { formValidityChange: "formValidityChange", formValueChange: "formValueChange", entityChange: "entityChange" }, decls: 0, vars: 0, template: function EntitySectionBaseComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntitySectionBaseComponent, { className: "EntitySectionBaseComponent", filePath: "src/app/features/administration/components/base/entity-section-base.ts", lineNumber: 38 });
})();

// src/app/features/administration/components/base/entity-address.base.ts
var EntityAddressComponent = class _EntityAddressComponent {
  entity = input();
  http = inject(HttpClient);
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  countriesLoaded = signal(false);
  errorMessage = signal(null);
  formFields = [];
  countries = [];
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  ngOnInit() {
    this.loadCountries();
  }
  /**
   * Loads countries from JSON file
   */
  loadCountries() {
    this.http.get("/assets/docs/countries.json").pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.countries = Object.entries(data).map(([key, value]) => ({
          label: value,
          value: key
        })).sort((a, b) => a.label.localeCompare(b.label));
        this.countriesLoaded.set(true);
        this.updateFormFields();
      },
      error: (error) => {
        console.error("Failed to load countries", error);
        this.errorMessage.set("Failed to load countries");
        this.countriesLoaded.set(true);
      }
    });
  }
  /**
   * Creates standard address form fields
   */
  updateFormFields() {
    const address = this.entity()?.address || {};
    this.formFields = [
      createTextField("address", "Address", address.address, {
        name: "address",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Address is required"
          }
        ]
      }),
      createTextField("city", "City", address.city, {
        name: "city",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "City is required"
          }
        ]
      }),
      createTextField("state", "State", address.state, {
        name: "state",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "State is required"
          }
        ]
      }),
      createTextField("code", "Code", address.code, {
        name: "code",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Code is required"
          }
        ]
      }),
      createDropdownField("country", "Country", this.countries, address.country, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select country",
        name: "country",
        props: { appendTo: "body" },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Country is required"
          }
        ]
      })
    ];
  }
  /**
   * Extract dirty values from form
   */
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  /**
   * Submit form data to API
   */
  onSubmit(formGroup) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.submitChanges({ address: dirtyValues }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
      },
      error: () => {
        this.errorMessage.set("Failed to update address");
        this.isSubmitting.set(false);
      }
    });
  }
  /**
   * Enters edit mode
   */
  onEdit() {
    this.isFormEditable.set(true);
  }
  findCountryLabel(countryCode) {
    if (!isString(countryCode))
      return "None";
    const country = this.countries.find((country2) => isDefined(country2) && hasProperty(country2, "value") && country2.value === countryCode);
    return isDefined(country) && hasProperty(country, "label") ? country.label : "None";
  }
  static \u0275fac = function EntityAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityAddressComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _EntityAddressComponent, inputs: { entity: [1, "entity"] } });
};

// src/app/features/administration/components/base/entity-details.base.ts
var EntityDetailsBase = class _EntityDetailsBase {
  entity = input();
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal(null);
  formFields = [];
  /**
   * Extracts dirty values from form for submission
   */
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  /**
   * Submits form changes to the API
   */
  onSubmit(formGroup) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.submitChanges(dirtyValues).pipe(takeUntilDestroyed(this.destroyRef), catchError((error) => {
      this.errorMessage.set("Failed to update details");
      console.error("Update error:", error);
      return of(null);
    })).subscribe({
      next: () => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
  }
  /**
   * Enters edit mode
   */
  onEdit() {
    this.isFormEditable.set(true);
  }
  static \u0275fac = function EntityDetailsBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityDetailsBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _EntityDetailsBase, inputs: { entity: [1, "entity"] } });
};

// src/app/features/administration/components/base/entity-settings.base.ts
var EntitySettingsBase = class _EntitySettingsBase {
  entity = input();
  accountsService = inject(AccountsService);
  entitiesService = inject(EntitiesService);
  adminState = inject(AdminStateService);
  destroyRef = inject(DestroyRef);
  selectOptionsLoaded = signal(false);
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal(null);
  formFields = [];
  selectOptions = {};
  constructor() {
    effect(() => {
      const entityDetails = this.entity();
      const distributorDetails = this.getDistributorDetails();
      if (entityDetails && distributorDetails) {
        this.loadSelectOptions(distributorDetails);
      }
    });
  }
  /**
   * Get distributor details - can be overridden by child classes
   */
  getDistributorDetails() {
    return null;
  }
  /**
   * Helper to create a unique set of options from multiple sources
   */
  createUniqueOptions(items, additionalItems = []) {
    const uniqueMap = /* @__PURE__ */ new Map();
    items.forEach((item) => {
      if (isDefined(item) && item.id) {
        uniqueMap.set(item.id, item);
      }
    });
    additionalItems.forEach((item) => {
      if (isDefined(item) && item.id) {
        uniqueMap.set(item.id, item);
      }
    });
    return Array.from(uniqueMap.values()).map((item) => ({
      label: item.name ?? "",
      value: item.id
    })).sort((a, b) => a.label.localeCompare(b.label));
  }
  /**
   * Extract dirty values from form
   */
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  /**
   * Submit form data to API
   */
  onSubmit(formGroup) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.submitChanges(dirtyValues).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
      },
      error: () => {
        this.errorMessage.set("Failed to update settings");
        this.isSubmitting.set(false);
      }
    });
  }
  /**
   * Enters edit mode
   */
  onEdit() {
    this.isFormEditable.set(true);
  }
  static \u0275fac = function EntitySettingsBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntitySettingsBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _EntitySettingsBase, inputs: { entity: [1, "entity"] } });
};

// src/app/features/administration/services/distributor-customization.service.ts
var DistributorCustomizationService = class _DistributorCustomizationService {
  accountsService = inject(AccountsService);
  themesService = inject(ThemesService);
  getThemes(distributorId) {
    return this.themesService.listThemes(distributorId).pipe(map((response) => response.items));
  }
  updateDistributorDetails(distributorId, updates) {
    return this.accountsService.updateDistributorDetails(distributorId, updates);
  }
  static \u0275fac = function DistributorCustomizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorCustomizationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistributorCustomizationService, factory: _DistributorCustomizationService.\u0275fac, providedIn: "root" });
};

// node_modules/primeng/fesm2022/primeng-steps.mjs
var _c02 = ["list"];
var _c1 = (a0) => ({
  "p-steps p-component": true,
  "p-readonly": a0
});
var _c2 = (a0, a1) => ({
  "p-steps-item-active": a0,
  "p-disabled": a1
});
var _c3 = () => ({
  exact: false
});
var _forTrack0 = ($index, $item) => $item.label;
function Steps_For_4_li_0_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
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
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_a_2_span_3_Template, 2, 1, "span", 13)(4, Steps_For_4_li_0_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || \u0275\u0275pureFunction0(17, _c3))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    \u0275\u0275attribute("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact ? "step" : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_For_4_li_0_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_For_4_li_0_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_For_4_li_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
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
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_For_4_li_0_ng_template_3_span_3_Template, 2, 1, "span", 13)(4, Steps_For_4_li_0_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("target", item_r3.target);
    \u0275\u0275attribute("href", item_r3.url, \u0275\u0275sanitizeUrl)("tabindex", ctx_r4.getItemTabIndex(item_r3, \u0275$index_5_r4))("aria-expanded", \u0275$index_5_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && \u0275$index_5_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact && (!item_r3.disabled || ctx_r4.readonly) ? "step" : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_5_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_For_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9, 1);
    \u0275\u0275template(2, Steps_For_4_li_0_a_2_Template, 6, 18, "a", 10)(3, Steps_For_4_li_0_ng_template_3_Template, 6, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const elseBlock_r9 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const \u0275$index_5_r4 = ctx_r1.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(item_r3.styleClass);
    \u0275\u0275property("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions)("ngClass", \u0275\u0275pureFunction2(10, _c2, ctx_r4.isActive(item_r3, \u0275$index_5_r4), item_r3.disabled || ctx_r4.readonly && !ctx_r4.isActive(item_r3, \u0275$index_5_r4)));
    \u0275\u0275attribute("aria-current", ctx_r4.isActive(item_r3, \u0275$index_5_r4) ? "step" : void 0)("id", item_r3.id)("data-pc-section", "menuitem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
function Steps_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Steps_For_4_li_0_Template, 5, 13, "li", 8);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r3.visible !== false);
  }
}
var theme2 = ({
  dt
}) => `
.p-steps {
    position: relative;
}

.p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}

.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}

.p-steps-item.p-disabled,
.p-steps-item.p-disabled * {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
    cursor: auto;
}

.p-steps-item:before {
    content: " ";
    border-top: 2px solid ${dt("steps.separator.background")};
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
    margin-top: calc(-1rem + 1px);
}

.p-steps-item:first-child::before {
    width: calc(50% + 1rem);
    transform: translateX(100%);
}

.p-steps-item:last-child::before {
    width: 50%;
}

.p-steps-item-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    transition: outline-color ${dt("steps.transition.duration")}, box-shadow ${dt("steps.transition.duration")};
    border-radius: ${dt("steps.item.link.border.radius")};
    outline-color: transparent;
    gap: ${dt("steps.item.link.gap")};
}

.p-steps-item-link:not(.p-disabled):focus-visible {
    box-shadow: ${dt("steps.item.link.focus.ring.shadow")};
    outline: ${dt("steps.item.link.focus.ring.width")} ${dt("steps.item.link.focus.ring.style")} ${dt("steps.item.link.focus.ring.color")};
    outline-offset: ${dt("steps.item.link.focus.ring.offset")};
}

.p-steps-item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${dt("steps.item.label.color")};
    display: block;
    font-weight: ${dt("steps.item.label.font.weight")};
}

.p-steps-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dt("steps.item.number.color")};
    border: 2px solid ${dt("steps.item.number.border.color")};
    background: ${dt("steps.item.number.background")};
    min-width: ${dt("steps.item.number.size")};
    height: ${dt("steps.item.number.size")};
    line-height: ${dt("steps.item.number.size")};
    font-size: ${dt("steps.item.number.font.size")};
    z-index: 1;
    border-radius: ${dt("steps.item.number.border.radius")};
    position: relative;
    font-weight: ${dt("steps.item.number.font.weight")};
}

.p-steps-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt("steps.item.number.border.radius")};
    box-shadow: ${dt("steps.item.number.shadow")};
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-item-active .p-steps-item-number {
    background: ${dt("steps.item.number.active.background")};
    border-color: ${dt("steps.item.number.active.border.color")};
    color: ${dt("steps.item.number.active.color")};
}

.p-steps-item-active .p-steps-item-label {
    color: ${dt("steps.item.label.active.color")};
}
`;
var classes2 = {
  root: ({
    props
  }) => ["p-steps p-component", {
    "p-readonly": props.readonly
  }],
  list: "p-steps-list",
  item: ({
    instance,
    item,
    index
  }) => ["p-steps-item", {
    "p-steps-item-active": instance.isActive(index),
    "p-disabled": instance.isItemDisabled(item, index)
  }],
  itemLink: "p-steps-item-link",
  itemNumber: "p-steps-item-number",
  itemLabel: "p-steps-item-label"
};
var StepsStyle = class _StepsStyle extends BaseStyle {
  name = "steps";
  theme = theme2;
  classes = classes2;
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
  ngOnInit() {
    super.ngOnInit();
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
        if (i !== this.activeIndex) {
          const siblings = find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
          siblings[i].children[0].tabIndex = "-1";
          siblings[this.activeIndex].children[0].tabIndex = "0";
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
    const firstSibling = findSingle(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
    return firstSibling ? firstSibling.children[0] : null;
  }
  findLastItem() {
    const siblings = find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
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
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    super.ngOnDestroy();
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
        \u0275\u0275viewQuery(_c02, 5);
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
    vars: 8,
    consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "ngStyle"], [1, "p-steps-list"], ["pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "class", "tooltipOptions", "ngClass"], ["class", "p-steps-item", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngIf"], ["pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["role", "link", "class", "p-steps-item-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 1, "p-steps-item-link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-steps-item-number"], ["class", "p-steps-item-label", 4, "ngIf", "ngIfElse"], [1, "p-steps-item-label"], [1, "p-steps-item-label", 3, "innerHTML"], ["role", "link", 1, "p-steps-item-link", 3, "click", "keydown", "target"]],
    template: function Steps_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 5)(1, "ul", 6, 0);
        \u0275\u0275repeaterCreate(3, Steps_For_4_Template, 1, 1, "li", 7, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx.readonly))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "steps");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "menu");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.model);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgStyle, RouterModule, RouterLink, TooltipModule, Tooltip, SharedModule],
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
        <nav [ngClass]="{ 'p-steps p-component': true, 'p-readonly': readonly }" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'steps'">
            <ul #list [attr.data-pc-section]="'menu'" class="p-steps-list">
                @for (item of model; track item.label; let i = $index) {
                    <li
                        *ngIf="item.visible !== false"
                        class="p-steps-item"
                        #menuitem
                        [ngStyle]="item.style"
                        [class]="item.styleClass"
                        [attr.aria-current]="isActive(item, i) ? 'step' : undefined"
                        [attr.id]="item.id"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        [ngClass]="{
                            'p-steps-item-active': isActive(item, i),
                            'p-disabled': item.disabled || (readonly && !isActive(item, i))
                        }"
                        [attr.data-pc-section]="'menuitem'"
                    >
                        <a
                            role="link"
                            *ngIf="isClickableRouterLink(item); else elseBlock"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            class="p-steps-item-link"
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
                            <span class="p-steps-item-number">{{ i + 1 }}</span>
                            <span class="p-steps-item-label" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                            <ng-template #htmlLabel><span class="p-steps-item-label" [innerHTML]="item.label"></span></ng-template>
                        </a>
                        <ng-template #elseBlock>
                            <a
                                role="link"
                                [attr.href]="item.url"
                                class="p-steps-item-link"
                                (click)="onItemClick($event, item, i)"
                                (keydown)="onItemKeydown($event, item, i)"
                                [target]="item.target"
                                [attr.tabindex]="getItemTabIndex(item, i)"
                                [attr.aria-expanded]="i === activeIndex"
                                [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                                [attr.ariaCurrentWhenActive]="exact && (!item.disabled || readonly) ? 'step' : undefined"
                            >
                                <span class="p-steps-item-number">{{ i + 1 }}</span>
                                <span class="p-steps-item-label" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                                <ng-template #htmlRouteLabel><span class="p-steps-item-label" [innerHTML]="item.label"></span></ng-template>
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
    type: _StepsModule
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

// node_modules/primeng/fesm2022/primeng-image.mjs
var _c03 = ["indicator"];
var _c12 = ["rotaterighticon"];
var _c22 = ["rotatelefticon"];
var _c32 = ["zoomouticon"];
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
var _c13 = (a0) => ({
  "p-image-action p-image-zoom-out-button": true,
  "p-disabled": a0
});
var _c14 = (a0) => ({
  "p-image-action p-image-zoom-in-button": true,
  "p-disabled": a0
});
var _c15 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c16 = (a0) => ({
  value: "visible",
  params: a0
});
var _c17 = (a0, a1) => ({
  class: "p-image-original",
  style: a0,
  previewCallback: a1
});
function Image_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 9);
    \u0275\u0275listener("error", function Image_ng_container_1_Template_img_error_1_listener($event) {
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
    \u0275\u0275property("ngStyle", ctx_r1.imageStyle);
    \u0275\u0275attribute("src", ctx_r1.src, \u0275\u0275sanitizeUrl)("srcset", ctx_r1.srcSet)("sizes", ctx_r1.sizes)("alt", ctx_r1.alt)("width", ctx_r1.width)("height", ctx_r1.height)("loading", ctx_r1.loading);
  }
}
function Image_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_button_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Image_button_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.indicatorTemplate || ctx_r1._indicatorTemplate);
  }
}
function Image_button_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "EyeIcon", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-image-preview-icon");
  }
}
function Image_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10, 0);
    \u0275\u0275listener("click", function Image_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageClick());
    });
    \u0275\u0275template(2, Image_button_3_ng_container_2_Template, 2, 1, "ng-container", 11)(3, Image_button_3_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultTemplate_r4 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(4, _c122, ctx_r1.height + "px", ctx_r1.width + "px"));
    \u0275\u0275attribute("aria-label", ctx_r1.zoomImageAriaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.indicatorTemplate || !ctx_r1._indicatorTemplate)("ngIfElse", defaultTemplate_r4);
  }
}
function Image_div_4_RefreshIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "RefreshIcon");
  }
}
function Image_div_4_5_ng_template_0_Template(rf, ctx) {
}
function Image_div_4_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_div_4_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_4_UndoIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "UndoIcon");
  }
}
function Image_div_4_8_ng_template_0_Template(rf, ctx) {
}
function Image_div_4_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_div_4_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_4_SearchMinusIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchMinusIcon");
  }
}
function Image_div_4_11_ng_template_0_Template(rf, ctx) {
}
function Image_div_4_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_div_4_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_4_SearchPlusIcon_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchPlusIcon");
  }
}
function Image_div_4_14_ng_template_0_Template(rf, ctx) {
}
function Image_div_4_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_div_4_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_4_TimesIcon_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "TimesIcon");
  }
}
function Image_div_4_18_ng_template_0_Template(rf, ctx) {
}
function Image_div_4_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Image_div_4_18_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_4_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 20);
    \u0275\u0275listener("click", function Image_div_4_div_19_ng_container_1_Template_img_click_1_listener() {
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
    \u0275\u0275property("ngStyle", ctx_r1.imagePreviewStyle());
    \u0275\u0275attribute("src", ctx_r1.previewImageSrc ? ctx_r1.previewImageSrc : ctx_r1.src, \u0275\u0275sanitizeUrl)("srcset", ctx_r1.previewImageSrcSet)("sizes", ctx_r1.previewImageSizes);
  }
}
function Image_div_4_div_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Image_div_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275listener("@animation.start", function Image_div_4_div_19_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Image_div_4_div_19_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(1, Image_div_4_div_19_ng_container_1_Template, 2, 4, "ng-container", 5)(2, Image_div_4_div_19_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@animation", \u0275\u0275pureFunction1(7, _c16, \u0275\u0275pureFunction2(4, _c15, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previewTemplate && !ctx_r1._previewTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.previewTemplate || ctx_r1._previewTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(9, _c17, ctx_r1.imagePreviewStyle(), ctx_r1.onPreviewImageClick.bind(ctx_r1)));
  }
}
function Image_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14, 2);
    \u0275\u0275listener("click", function Image_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskClick());
    })("keydown", function Image_div_4_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMaskKeydown($event));
    });
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275listener("click", function Image_div_4_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleToolbarClick($event));
    });
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function Image_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rotateRight());
    });
    \u0275\u0275template(4, Image_div_4_RefreshIcon_4_Template, 1, 0, "RefreshIcon", 5)(5, Image_div_4_5_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275listener("click", function Image_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rotateLeft());
    });
    \u0275\u0275template(7, Image_div_4_UndoIcon_7_Template, 1, 0, "UndoIcon", 5)(8, Image_div_4_8_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function Image_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomOut());
    });
    \u0275\u0275template(10, Image_div_4_SearchMinusIcon_10_Template, 1, 0, "SearchMinusIcon", 5)(11, Image_div_4_11_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function Image_div_4_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoomIn());
    });
    \u0275\u0275template(13, Image_div_4_SearchPlusIcon_13_Template, 1, 0, "SearchPlusIcon", 5)(14, Image_div_4_14_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 19, 3);
    \u0275\u0275listener("click", function Image_div_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePreview());
    });
    \u0275\u0275template(17, Image_div_4_TimesIcon_17_Template, 1, 0, "TimesIcon", 5)(18, Image_div_4_18_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, Image_div_4_div_19_Template, 3, 12, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-modal", ctx_r1.maskVisible);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.rightAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rotateRightIconTemplate && !ctx_r1._rotateRightIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate || ctx_r1._rotateRightIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.leftAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.rotateLeftIconTemplate && !ctx_r1._rotateLeftIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate || ctx_r1._rotateLeftIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c13, ctx_r1.isZoomOutDisabled))("disabled", ctx_r1.isZoomOutDisabled);
    \u0275\u0275attribute("aria-label", ctx_r1.zoomOutAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomOutIconTemplate && !ctx_r1._zoomOutIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate || ctx_r1._zoomOutIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c14, ctx_r1.isZoomOutDisabled))("disabled", ctx_r1.isZoomInDisabled);
    \u0275\u0275attribute("aria-label", ctx_r1.zoomInAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.zoomInIconTemplate && !ctx_r1._zoomInIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.zoomInIconTemplate || ctx_r1._zoomInIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.closeAriaLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewVisible);
  }
}
var theme3 = ({
  dt
}) => `
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${dt("image.preview.mask.color")};
    transition: background ${dt("image.transition.duration")};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${dt("image.preview.mask.background")};
}

.p-image-preview-icon {
    font-size: ${dt("image.preview.icon.size")};
    width: ${dt("image.preview.icon.size")};
    height: ${dt("image.preview.icon.size")};
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: ${dt("image.toolbar.position.top")};
    inset-inline-end: ${dt("image.toolbar.position.right")};
    inset-inline-start: ${dt("image.toolbar.position.left")};
    inset-block-end: ${dt("image.toolbar.position.bottom")};
    display: flex;
    z-index: 1;
    padding: ${dt("image.toolbar.padding")};
    background: ${dt("image.toolbar.background")};
    backdrop-filter: blur(${dt("image.toolbar.blur")});
    border-color: ${dt("image.toolbar.border.color")};
    border-style: solid;
    border-width: ${dt("image.toolbar.border.width")};
    border-radius: ${dt("image.toolbar.border.radius")};
    gap: ${dt("image.toolbar.gap")};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${dt("image.action.color")};
    background: transparent;
    width: ${dt("image.action.size")};
    height: ${dt("image.action.size")};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${dt("image.action.border.radius")};
    outline-color: transparent;
    transition: background ${dt("image.transition.duration")}, color ${dt("image.transition.duration")}, outline-color ${dt("image.transition.duration")}, box-shadow ${dt("image.transition.duration")};
}

.p-image-action:hover {
    color: ${dt("image.action.hover.color")};
    background: ${dt("image.action.hover.background")};
}

.p-image-action:focus-visible {
    box-shadow: ${dt("toolbar.action.focus.ring.shadow")};
    outline: ${dt("toolbar.action.focus.ring.width")} ${dt("toolbar.action.focus.ring.style")} ${dt("toolbar.action.focus.ring.color")};
    outline-offset: ${dt("toolbar.action.focus.ring.offset")};
}

.p-image-action .p-icon {
    font-size: ${dt("image.action.icon.size")};
    width: ${dt("image.action.icon.size")};
    height: ${dt("image.action.icon.size")};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`;
var classes3 = {
  root: ({
    props
  }) => ["p-image p-component", {
    "p-image-preview": props.preview
  }],
  previewMask: "p-image-preview-mask",
  previewIcon: "p-image-preview-icon",
  mask: "p-image-mask p-overlay-mask p-overlay-mask-enter",
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
  theme = theme3;
  classes = classes3;
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
var Image2 = class _Image extends BaseComponent {
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
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
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
   * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Controls the preview functionality.
   * @group Props
   */
  preview = false;
  /**
   * Transition options of the show animation
   * @group Props
   */
  showTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation
   * @group Props
   */
  hideTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
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
   * Custom template of indicator.
   * @group Templates
   */
  indicatorTemplate;
  /**
   * Custom template of rotaterighticon.
   * @group Templates
   */
  rotateRightIconTemplate;
  /**
   * Custom template of rotatelefticon.
   * @group Templates
   */
  rotateLeftIconTemplate;
  /**
   * Custom template of zoomouticon.
   * @group Templates
   */
  zoomOutIconTemplate;
  /**
   * Custom template of zoominicon.
   * @group Templates
   */
  zoomInIconTemplate;
  /**
   * Custom template of closeicon.
   * @group Templates
   */
  closeIconTemplate;
  /**
   * Custom template of preview.
   * @group Templates
   */
  previewTemplate;
  /**
   * Custom template of image.
   * @group Templates
   */
  imageTemplate;
  maskVisible = false;
  previewVisible = false;
  rotate = 0;
  scale = 1;
  previewClick = false;
  container;
  wrapper;
  _componentStyle = inject(ImageStyle);
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
  constructor() {
    super();
  }
  templates;
  _indicatorTemplate;
  _rotateRightIconTemplate;
  _rotateLeftIconTemplate;
  _zoomOutIconTemplate;
  _zoomInIconTemplate;
  _closeIconTemplate;
  _imageTemplate;
  _previewTemplate;
  ngAfterContentInit() {
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
          focus(this.previewButton.nativeElement);
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
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.appendContainer();
        this.moveOnTop();
        setTimeout(() => {
          focus(this.closeButton.nativeElement);
        }, 25);
        break;
      case "void":
        addClass(this.wrapper, "p-overlay-mask-leave");
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(this.wrapper);
        this.maskVisible = false;
        this.container = null;
        this.wrapper = null;
        this.cd.markForCheck();
        this.onHide.emit({});
        break;
      case "visible":
        this.onShow.emit({});
        break;
    }
  }
  moveOnTop() {
    zindexutils.set("modal", this.wrapper, this.config.zIndex.modal);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.document.body.appendChild(this.wrapper);
      else appendChild(this.appendTo, this.wrapper);
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
  containerClass() {
    return {
      "p-image p-component": true,
      "p-image-preview": this.preview
    };
  }
  handleToolbarClick(event) {
    event.stopPropagation();
  }
  closePreview() {
    this.previewVisible = false;
    this.rotate = 0;
    this.scale = this.zoomSettings.default;
    unblockBodyScroll();
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
  onKeydownHandler(event) {
    if (this.previewVisible) {
      this.closePreview();
    }
  }
  static \u0275fac = function Image_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Image)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Image,
    selectors: [["p-image"]],
    contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
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
        \u0275\u0275viewQuery(_c8, 5);
        \u0275\u0275viewQuery(_c9, 5);
        \u0275\u0275viewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mask = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeButton = _t.first);
      }
    },
    hostBindings: function Image_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function Image_keydown_escape_HostBindingHandler($event) {
          return ctx.onKeydownHandler($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      imageClass: "imageClass",
      imageStyle: "imageStyle",
      styleClass: "styleClass",
      style: "style",
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
      appendTo: "appendTo",
      preview: [2, "preview", "preview", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ImageStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 11,
    consts: [["previewButton", ""], ["defaultTemplate", ""], ["mask", ""], ["closeButton", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "class", "p-image-preview-mask", 3, "ngStyle", "click", 4, "ngIf"], ["class", "p-image-mask p-overlay-mask p-overlay-mask-enter", "role", "dialog", "pFocusTrap", "", 3, "click", "keydown", 4, "ngIf"], [3, "error", "ngStyle"], ["type", "button", 1, "p-image-preview-mask", 3, "click", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [3, "styleClass"], ["role", "dialog", "pFocusTrap", "", 1, "p-image-mask", "p-overlay-mask", "p-overlay-mask-enter", 3, "click", "keydown"], [1, "p-image-toolbar", 3, "click"], ["type", "button", 1, "p-image-action", "p-image-rotate-right-button", 3, "click"], ["type", "button", 1, "p-image-action", "p-image-rotate-left-button", 3, "click"], ["type", "button", 3, "click", "ngClass", "disabled"], ["type", "button", 1, "p-image-action", "p-image-close-button", 3, "click"], [1, "p-image-original", 3, "click", "ngStyle"]],
    template: function Image_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 4);
        \u0275\u0275template(1, Image_ng_container_1_Template, 2, 10, "ng-container", 5)(2, Image_ng_container_2_Template, 1, 0, "ng-container", 6)(3, Image_button_3_Template, 5, 7, "button", 7)(4, Image_div_4_Template, 20, 25, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.imageTemplate && !ctx._imageTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.imageTemplate || ctx._imageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c11, ctx.imageError.bind(ctx)));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.preview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.maskVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrap, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Image2, [{
    type: Component,
    args: [{
      selector: "p-image",
      standalone: true,
      imports: [CommonModule, RefreshIcon, EyeIcon, UndoIcon, SearchMinusIcon, SearchPlusIcon, TimesIcon, FocusTrap, SharedModule],
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-container *ngIf="!imageTemplate && !_imageTemplate">
                <img [attr.src]="src" [attr.srcset]="srcSet" [attr.sizes]="sizes" [attr.alt]="alt" [attr.width]="width" [attr.height]="height" [attr.loading]="loading" [ngStyle]="imageStyle" [class]="imageClass" (error)="imageError($event)" />
            </ng-container>

            <ng-container *ngTemplateOutlet="imageTemplate || _imageTemplate; context: { errorCallback: imageError.bind(this) }"></ng-container>

            <button *ngIf="preview" [attr.aria-label]="zoomImageAriaLabel" type="button" class="p-image-preview-mask" (click)="onImageClick()" #previewButton [ngStyle]="{ height: height + 'px', width: width + 'px' }">
                <ng-container *ngIf="indicatorTemplate || !_indicatorTemplate; else defaultTemplate">
                    <ng-container *ngTemplateOutlet="indicatorTemplate || _indicatorTemplate"></ng-container>
                </ng-container>
                <ng-template #defaultTemplate>
                    <EyeIcon [styleClass]="'p-image-preview-icon'" />
                </ng-template>
            </button>
            <div #mask class="p-image-mask p-overlay-mask p-overlay-mask-enter" *ngIf="maskVisible" [attr.aria-modal]="maskVisible" role="dialog" (click)="onMaskClick()" (keydown)="onMaskKeydown($event)" pFocusTrap>
                <div class="p-image-toolbar" (click)="handleToolbarClick($event)">
                    <button class="p-image-action p-image-rotate-right-button" (click)="rotateRight()" type="button" [attr.aria-label]="rightAriaLabel()">
                        <RefreshIcon *ngIf="!rotateRightIconTemplate && !_rotateRightIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateRightIconTemplate || _rotateRightIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-image-rotate-left-button" (click)="rotateLeft()" type="button" [attr.aria-label]="leftAriaLabel()">
                        <UndoIcon *ngIf="!rotateLeftIconTemplate && !_rotateLeftIconTemplate" />
                        <ng-template *ngTemplateOutlet="rotateLeftIconTemplate || _rotateLeftIconTemplate"></ng-template>
                    </button>
                    <button [ngClass]="{ 'p-image-action p-image-zoom-out-button': true, 'p-disabled': isZoomOutDisabled }" (click)="zoomOut()" type="button" [disabled]="isZoomOutDisabled" [attr.aria-label]="zoomOutAriaLabel()">
                        <SearchMinusIcon *ngIf="!zoomOutIconTemplate && !_zoomOutIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomOutIconTemplate || _zoomOutIconTemplate"></ng-template>
                    </button>
                    <button [ngClass]="{ 'p-image-action p-image-zoom-in-button': true, 'p-disabled': isZoomOutDisabled }" (click)="zoomIn()" type="button" [disabled]="isZoomInDisabled" [attr.aria-label]="zoomInAriaLabel()">
                        <SearchPlusIcon *ngIf="!zoomInIconTemplate && !_zoomInIconTemplate" />
                        <ng-template *ngTemplateOutlet="zoomInIconTemplate || _zoomInIconTemplate"></ng-template>
                    </button>
                    <button class="p-image-action p-image-close-button" type="button" (click)="closePreview()" [attr.aria-label]="closeAriaLabel()" #closeButton>
                        <TimesIcon *ngIf="!closeIconTemplate && !_closeIconTemplate" />
                        <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                    </button>
                </div>
                <div
                    *ngIf="previewVisible"
                    [@animation]="{
                        value: 'visible',
                        params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                    }"
                    (@animation.start)="onAnimationStart($event)"
                    (@animation.done)="onAnimationEnd($event)"
                >
                    <ng-container *ngIf="!previewTemplate && !_previewTemplate">
                        <img [attr.src]="previewImageSrc ? previewImageSrc : src" [attr.srcset]="previewImageSrcSet" [attr.sizes]="previewImageSizes" class="p-image-original" [ngStyle]="imagePreviewStyle()" (click)="onPreviewImageClick()" />
                    </ng-container>
                    <ng-container
                        *ngTemplateOutlet="
                            previewTemplate || _previewTemplate;
                            context: {
                                class: 'p-image-original',
                                style: imagePreviewStyle(),
                                previewCallback: onPreviewImageClick.bind(this)
                            }
                        "
                    >
                    </ng-container>
                </div>
            </div>
        </span>
    `,
      animations: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ImageStyle]
    }]
  }], () => [], {
    imageClass: [{
      type: Input
    }],
    imageStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    style: [{
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
    appendTo: [{
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
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var ImageModule = class _ImageModule {
  static \u0275fac = function ImageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ImageModule
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
var _c04 = ["wrapper"];
var _c18 = ["sourceImage"];
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
    return Math.min(1, Math.max(0, options?.imageQuality ?? 92 / 100));
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
    return /image\/(png|jpg|jpeg|heic|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(type);
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
          \u0275\u0275viewQuery(_c04, 7);
          \u0275\u0275viewQuery(_c18, 5);
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
          }, false, \u0275\u0275resolveWindow);
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

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c05 = ["handle"];
var _c19 = ["input"];
var _c23 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleSwitch_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleSwitch_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.handleTemplate || ctx_r1._handleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c23, ctx_r1.checked()));
  }
}
var theme4 = ({
  dt
}) => `
.p-toggleswitch {
    display: inline-block;
    width: ${dt("toggleswitch.width")};
    height: ${dt("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${dt("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${dt("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${dt("toggleswitch.border.color")};
    background: ${dt("toggleswitch.background")};
    transition: background ${dt("toggleswitch.transition.duration")}, color ${dt("toggleswitch.transition.duration")}, border-color ${dt("toggleswitch.transition.duration")}, outline-color ${dt("toggleswitch.transition.duration")}, box-shadow ${dt("toggleswitch.transition.duration")};
    border-radius: ${dt("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${dt("toggleswitch.handle.background")};
    color: ${dt("toggleswitch.handle.color")};
    width: ${dt("toggleswitch.handle.size")};
    height: ${dt("toggleswitch.handle.size")};
    inset-inline-start: ${dt("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${dt("toggleswitch.handle.size")} / 2));
    border-radius: ${dt("toggleswitch.handle.border.radius")};
    transition: background ${dt("toggleswitch.transition.duration")}, color ${dt("toggleswitch.transition.duration")}, inset-inline-start ${dt("toggleswitch.slide.duration")}, box-shadow ${dt("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt("toggleswitch.checked.background")};
    border-color: ${dt("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${dt("toggleswitch.handle.checked.background")};
    color: ${dt("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${dt("toggleswitch.width")} - calc(${dt("toggleswitch.handle.size")} + ${dt("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${dt("toggleswitch.hover.background")};
    border-color: ${dt("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${dt("toggleswitch.handle.hover.background")};
    color: ${dt("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt("toggleswitch.checked.hover.background")};
    border-color: ${dt("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${dt("toggleswitch.handle.checked.hover.background")};
    color: ${dt("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${dt("toggleswitch.focus.ring.shadow")};
    outline: ${dt("toggleswitch.focus.ring.width")} ${dt("toggleswitch.focus.ring.style")} ${dt("toggleswitch.focus.ring.color")};
    outline-offset: ${dt("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${dt("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${dt("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${dt("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${dt("toggleswitch.invalid.border.color")};
}`;
var inlineStyles2 = {
  root: {
    position: "relative"
  }
};
var classes4 = {
  root: ({
    instance
  }) => ({
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.disabled,
    "p-invalid": instance.invalid
  }),
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  theme = theme4;
  classes = classes4;
  inlineStyles = inlineStyles2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitchStyle_BaseFactory || (\u0275ToggleSwitchStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseComponent {
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Callback to invoke when the on value change.
   * @type {TemplateRef<ToggleSwitchHandleTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #handle let-checked="checked"> </ng-template>
   * ```
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  modelValue = false;
  focused = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.disabled && !this.readonly) {
      this.modelValue = this.checked() ? this.falseValue : this.trueValue;
      this.onModelChange(this.modelValue);
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  writeValue(value) {
    this.modelValue = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  checked() {
    return this.modelValue === this.trueValue;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitch_BaseFactory || (\u0275ToggleSwitch_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.handleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c19, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 23,
    consts: [["input", ""], [3, "click", "ngClass", "ngStyle"], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "ngClass", "checked", "disabled", "pAutoFocus"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function ToggleSwitch_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClick($event));
        });
        \u0275\u0275elementStart(1, "input", 2, 0);
        \u0275\u0275listener("focus", function ToggleSwitch_Template_input_focus_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus());
        })("blur", function ToggleSwitch_Template_input_blur_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 3)(4, "div", 3);
        \u0275\u0275template(5, ToggleSwitch_Conditional_5_Template, 1, 4, "ng-container");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.cx("root"))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "toggleswitch")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.cx("input"))("checked", ctx.checked())("disabled", ctx.disabled)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.cx("slider"));
        \u0275\u0275attribute("data-pc-section", "slider");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.cx("handle"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.handleTemplate || ctx._handleTemplate ? 5 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgTemplateOutlet, NgStyle, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule],
      template: `
        <div [ngClass]="cx('root')" [style]="sx('root')" [ngStyle]="style" [class]="styleClass" (click)="onClick($event)" [attr.data-pc-name]="'toggleswitch'" [attr.data-pc-section]="'root'">
            <input
                #input
                [attr.id]="inputId"
                type="checkbox"
                role="switch"
                [ngClass]="cx('input')"
                [checked]="checked()"
                [disabled]="disabled"
                [attr.aria-checked]="checked()"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.name]="name"
                [attr.tabindex]="tabindex"
                (focus)="onFocus()"
                (blur)="onBlur()"
                [attr.data-pc-section]="'hiddenInput'"
                [pAutoFocus]="autofocus"
            />
            <span [ngClass]="cx('slider')" [attr.data-pc-section]="'slider'">
                <div [ngClass]="cx('handle')">
                    @if (handleTemplate || _handleTemplate) {
                        <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                    }
                </div>
            </span>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static \u0275fac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleSwitchModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/components/image-editor/image-editor.component.ts
var _c06 = ["cropper"];
var _c110 = ["originalImage"];
var _c24 = ["canvas"];
function ImageEditorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.errorMessage);
  }
}
function ImageEditorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function ImageEditorComponent_Conditional_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "p-button", 19);
    \u0275\u0275listener("onClick", function ImageEditorComponent_Conditional_5_ng_template_3_Template_p_button_onClick_2_listener($event) {
      const chooseCallback_r4 = \u0275\u0275restoreView(_r3).chooseCallback;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.choose($event, chooseCallback_r4));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ImageEditorComponent_Conditional_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275elementStart(2, "p", 22);
    \u0275\u0275text(3, " Drag and drop an image from your computer, or paste an image from your clipboard. ");
    \u0275\u0275elementEnd()();
  }
}
function ImageEditorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "p-fileUpload", 13, 0);
    \u0275\u0275listener("onSelect", function ImageEditorComponent_Conditional_5_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileSelect($event));
    })("onError", function ImageEditorComponent_Conditional_5_Template_p_fileUpload_onError_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUploadError());
    });
    \u0275\u0275template(3, ImageEditorComponent_Conditional_5_ng_template_3_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, ImageEditorComponent_Conditional_5_ng_template_5_Template, 4, 0, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "img", 15, 2)(8, "canvas", 16, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("showUploadButton", false)("showCancelButton", false)("multiple", false)("maxFileSize", 5e6);
  }
}
function ImageEditorComponent_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.croppedImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ImageEditorComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function ImageEditorComponent_Conditional_6_Conditional_13_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetImage());
    });
    \u0275\u0275elementEnd();
  }
}
function ImageEditorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "image-cropper", 26, 4);
    \u0275\u0275listener("imageCropped", function ImageEditorComponent_Conditional_6_Template_image_cropper_imageCropped_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageCropped($event));
    })("loadedImage", function ImageEditorComponent_Conditional_6_Template_image_cropper_loadedImage_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageLoaded());
    })("loadError", function ImageEditorComponent_Conditional_6_Template_image_cropper_loadError_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLoadError());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div")(6, "div", 27)(7, "h3");
    \u0275\u0275text(8, "Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 28);
    \u0275\u0275text(10, " Use the crop controls to adjust the visible image area. The preview below shows what your image will look like once cropped and resized. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 29);
    \u0275\u0275template(12, ImageEditorComponent_Conditional_6_Conditional_12_Template, 1, 1, "img", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ImageEditorComponent_Conditional_6_Conditional_13_Template, 1, 0, "p-button", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hidden", !ctx_r0.cropperReady);
    \u0275\u0275advance(3);
    \u0275\u0275property("imageFile", ctx_r0.currentFile)("maintainAspectRatio", false)("canvasRotation", ctx_r0.canvasRotation)("transform", ctx_r0.transform)("alignImage", "center")("imageQuality", 100)("allowMoveImage", true);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.croppedImageUrl ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.currentFile ? 13 : -1);
  }
}
function ImageEditorComponent_ng_template_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275listener("onClick", function ImageEditorComponent_ng_template_7_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cropAndSave());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.croppedImageUrl || ctx_r0.isLoading);
  }
}
function ImageEditorComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p-button", 34);
    \u0275\u0275listener("onClick", function ImageEditorComponent_ng_template_7_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275template(3, ImageEditorComponent_ng_template_7_Conditional_3_Template, 1, 1, "p-button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.currentFile ? 3 : -1);
  }
}
var ImageEditorComponent = class _ImageEditorComponent {
  cropper;
  originalImage;
  canvas;
  visible = input(true);
  aspectRatio = input(1);
  maxWidth = input(1920);
  maxHeight = input(1080);
  paddingPercentage = input(0.1);
  backgroundColor = input("white");
  fileUrl = input(null);
  visibleChange = output();
  croppedFile = output();
  fileSelected = output();
  uploadError = output();
  imageCropped = output();
  imageLoaded = output();
  loadError = output();
  cdr = inject(ChangeDetectorRef);
  currentFile = null;
  croppedImageUrl = null;
  canvasRotation = 0;
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
    this.isLoading = true;
    this.errorMessage = null;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      this.originalImage.nativeElement.src = url;
      this.processOriginalFromElement(img);
    };
    img.onerror = () => {
      this.isLoading = false;
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
      this.originalImage.nativeElement.src = result;
      this.originalImage.nativeElement.onload = () => {
        if (isDefined(this.originalImage?.nativeElement)) {
          this.processOriginalFromElement(this.originalImage.nativeElement);
        } else {
          this.handleError("Error loading image");
        }
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
    const dst = this.canvas.nativeElement;
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
    this.currentFile = null;
    this.croppedImageUrl = null;
    this.errorMessage = null;
    this.transform = { scale: 1 };
    this.canvasRotation = 0;
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
  static \u0275fac = function ImageEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageEditorComponent, selectors: [["app-image-editor"]], viewQuery: function ImageEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
      \u0275\u0275viewQuery(_c110, 5);
      \u0275\u0275viewQuery(_c24, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cropper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.originalImage = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
    }
  }, inputs: { visible: [1, "visible"], aspectRatio: [1, "aspectRatio"], maxWidth: [1, "maxWidth"], maxHeight: [1, "maxHeight"], paddingPercentage: [1, "paddingPercentage"], backgroundColor: [1, "backgroundColor"], fileUrl: [1, "fileUrl"] }, outputs: { visibleChange: "visibleChange", croppedFile: "croppedFile", fileSelected: "fileSelected", uploadError: "uploadError", imageCropped: "imageCropped", imageLoaded: "imageLoaded", loadError: "loadError" }, decls: 8, vars: 8, consts: [["fileUpload", ""], ["header", ""], ["originalImage", ""], ["canvas", ""], ["cropper", ""], ["styleClass", "image-editor-dialog", "header", "Image Editor", 3, "onHide", "visible", "modal", "draggable", "resizable"], [1, "flex"], ["severity", "error", "className", "w-full", 3, "text"], [1, "relative", "p-2"], [1, "loading-overlay"], [1, "upload-zone"], [1, "grid", "grid-cols-3", "gap-4", 3, "hidden"], ["pTemplate", "footer"], ["accept", "image/*", "styleClass", "upload-component w-full", 3, "onSelect", "onError", "showUploadButton", "showCancelButton", "multiple", "maxFileSize"], ["pTemplate", "content"], ["alt", "original image", 1, "none"], [1, "none"], [1, "flex", "flex-wrap", "justify-between", "items-center", "flex-1", "gap-4"], [1, "flex", "gap-2"], ["icon", "pi pi-cloud-upload", "label", "Upload Image", "aria-label", "Upload Image", 3, "onClick"], [1, "grid", "grid-cols-1", "gap-4", "place-content-center"], [1, "pi", "pi-image", "!text-[10rem]", "mb-2", "text-center"], [1, "text-center"], [1, "grid", "grid-cols-3", "gap-4"], [1, "col-span-2"], [1, "crop-container"], ["className", "max-h-[55vh]", 3, "imageCropped", "loadedImage", "loadError", "imageFile", "maintainAspectRatio", "canvasRotation", "transform", "alignImage", "imageQuality", "allowMoveImage"], [1, "preview-section"], [1, "text-sm", "text-color-secondary", "mb-2"], [1, "preview-container", "border-1", "border-round", "p-2"], ["alt", "Cropped Image Preview", 1, "w-full", "object-contain", 3, "src"], ["label", "Remove Image", "severity", "danger", "aria-label", "Remove Image"], ["label", "Remove Image", "severity", "danger", "aria-label", "Remove Image", 3, "onClick"], [1, "flex", "justify-end", "w-full", "gap-2"], ["label", "Cancel", "severity", "secondary", "aria-label", "Cancel", 3, "onClick"], ["label", "OK", "severity", "primary", "aria-label", "OK", 3, "disabled"], ["label", "OK", "severity", "primary", "aria-label", "OK", 3, "onClick", "disabled"]], template: function ImageEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-dialog", 5);
      \u0275\u0275listener("onHide", function ImageEditorComponent_Template_p_dialog_onHide_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 6);
      \u0275\u0275template(2, ImageEditorComponent_Conditional_2_Template, 1, 1, "p-message", 7);
      \u0275\u0275elementStart(3, "div", 8);
      \u0275\u0275template(4, ImageEditorComponent_Conditional_4_Template, 2, 0, "div", 9)(5, ImageEditorComponent_Conditional_5_Template, 10, 4, "div", 10)(6, ImageEditorComponent_Conditional_6_Template, 14, 11, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ImageEditorComponent_ng_template_7_Template, 4, 1, "ng-template", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible())("modal", true)("draggable", false)("resizable", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMessage ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.currentFile ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentFile ? 6 : -1);
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
    Message
  ], styles: ["\n\n[_nghost-%COMP%]     .crop-container {\n  height: 400px;\n  width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]     .loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n[_nghost-%COMP%]     .upload-zone {\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .upload-component {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-fileupload-content {\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .preview-section {\n  height: 100%;\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .preview-container {\n  background-color: white;\n  min-height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .image-editor-dialog {\n  width: 1000px;\n}\n/*# sourceMappingURL=image-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageEditorComponent, { className: "ImageEditorComponent", filePath: "src/app/shared/components/image-editor/image-editor.component.ts", lineNumber: 46 });
})();

// src/app/features/administration/components/distributors/distributor-details/customize-distributor/customize-distributor.component.ts
var _c07 = ["customTemplate"];
var _c111 = (a0) => ({ "icon-primary": a0 });
function CustomizeDistributorComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275listener("click", function CustomizeDistributorComponent_Conditional_8_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Customize distributor");
  }
}
function CustomizeDistributorComponent_Conditional_11_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17);
    \u0275\u0275element(7, "img", 18);
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21);
    \u0275\u0275listener("click", function CustomizeDistributorComponent_Conditional_11_For_1_Conditional_0_Template_span_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange(true, item_r5.imageUrl));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "span", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5 == null ? null : item_r5.key);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", item_r5 == null ? null : item_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r5.imageCaption);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.imageCaption);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit image");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove image");
  }
}
function CustomizeDistributorComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeDistributorComponent_Conditional_11_For_1_Conditional_0_Template, 13, 6, "div", 12);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275conditional((item_r5 == null ? null : item_r5.imageUrl) ? 0 : -1);
  }
}
function CustomizeDistributorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, CustomizeDistributorComponent_Conditional_11_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(2, "app-dynamic-form", 11);
    \u0275\u0275listener("formSubmit", function CustomizeDistributorComponent_Conditional_11_Template_app_dynamic_form_formSubmit_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.distributorDetails());
    \u0275\u0275advance(2);
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function CustomizeDistributorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.distributorDetails())("columns", ctx_r1.columns())("showGridLines", false)("hideHeader", true);
  }
}
function CustomizeDistributorComponent_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", details_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", details_r6.key || "Distributor image");
  }
}
function CustomizeDistributorComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", details_r6 == null ? null : details_r6.value, " ");
  }
}
function CustomizeDistributorComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeDistributorComponent_ng_template_13_Conditional_0_Template, 1, 2, "img", 23)(1, CustomizeDistributorComponent_ng_template_13_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const details_r6 = ctx.$implicit;
    \u0275\u0275conditional((details_r6 == null ? null : details_r6.imageUrl) ? 0 : 1);
  }
}
function CustomizeDistributorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-editor", 24);
    \u0275\u0275listener("visibleChange", function CustomizeDistributorComponent_Conditional_15_Template_app_image_editor_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange($event));
    })("croppedFile", function CustomizeDistributorComponent_Conditional_15_Template_app_image_editor_croppedFile_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", true)("fileUrl", ctx_r1.file);
  }
}
var CustomizeDistributorComponent = class _CustomizeDistributorComponent {
  logoTemplate;
  entity = input();
  customizationService = inject(DistributorCustomizationService);
  utilsService = inject(UtilsService);
  apiUrlService = inject(ApiUrlService);
  destroyRef = inject(DestroyRef);
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  columns = signal([]);
  distributorDetails = computed(() => {
    const details = this.entity();
    if (!isDefined(details))
      return [];
    const apiUrl = this.apiUrlService.getCurrentApiUrl();
    if (!isString(apiUrl) || !isString(details.id)) {
      console.warn("Invalid API URL or distributor ID");
      return [];
    }
    return [
      {
        key: "Logo",
        value: "",
        imageUrl: `${apiUrl}/accounts/distributors/${details.id}/logo?size=large`,
        imageCaption: "The image will be resampled to 800 x 333 pixels and will be used on reports."
      },
      {
        key: "Web Logo",
        value: "",
        imageUrl: `${apiUrl}/accounts/distributors/${details.id}/logo?size=small`,
        imageCaption: "The image will be resampled to 240 x 100 pixels. For better results you should pre-scale your image in a graphics program before uploading."
      },
      {
        key: "Language",
        value: isDefined(details.language) ? this.getLanguageName(details.language) : "None"
      },
      {
        key: "Theme",
        value: isDefined(details.theme) && hasProperty(details.theme, "name") ? details.theme.name : "None"
      }
    ];
  });
  languages = this.utilsService.getLanguages();
  formFields = [];
  themes = [];
  isImageEditorVisible = false;
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  file;
  constructor() {
    effect(() => {
      const distributor = this.entity();
      if (distributor) {
        this.customizationService.getThemes(distributor.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: (themes) => {
            this.themes = themes;
            this.updateFormFields();
          }
        });
      }
    });
    effect(() => {
      if (this.logoTemplate) {
        this.columns.set([
          { field: "key", header: "", transform: "uppercase" },
          { field: "value", header: "", cellTemplate: this.logoTemplate }
        ]);
      }
    });
  }
  getLanguageName(languageId) {
    const language = this.languages.find((lang) => isDefined(lang) && hasProperty(lang, "id") && lang.id === languageId);
    return isDefined(language) && hasProperty(language, "name") ? language.name : "None";
  }
  getDirtyValues(group) {
    if (!isDefined(group))
      return {};
    const dirtyValues = Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => isDefined(control) && control.dirty).map(([key, control]) => [
      key,
      control.value
    ]));
    if (hasProperty(dirtyValues, "theme")) {
      const selectedTheme = this.themes.find((theme6) => isDefined(theme6) && hasProperty(theme6, "id") && theme6.id === dirtyValues["theme"]);
      dirtyValues["theme"] = isDefined(selectedTheme) ? selectedTheme.id : "inherited";
    }
    return dirtyValues;
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("language", "Language", this.languages.map((lang) => ({
        label: lang.name,
        value: lang.id
      })), this.entity()?.language, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select language",
        name: "language",
        props: {
          // Using 'body' to ensure proper overlay positioning and width
          // Alternative approaches with container elements can cause positioning issues
          appendTo: "body"
        }
      }),
      createDropdownField("theme", "Theme", [{ label: "Inherited", value: "inherited" }].concat(this.themes.map((theme6) => ({
        label: theme6.name,
        value: theme6.id
      }))), this.entity()?.theme?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select theme",
        name: "theme",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  onSubmit(formGroup) {
    const currentDistributor = this.entity();
    if (!currentDistributor)
      return;
    this.isSubmitting.set(true);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.customizationService.updateDistributorDetails(currentDistributor.id, dirtyValues).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: () => this.isFormEditable.set(false),
      error: () => this.isFormEditable.set(true)
    });
  }
  onEdit() {
    this.isFormEditable.set(true);
  }
  onImageEditorVisibleChange(visible, file) {
    this.isImageEditorVisible = visible;
    this.file = file;
  }
  saveFile(file) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    const formData = new FormData();
    formData.append("logo", file);
  }
  updateLogo() {
    return;
  }
  static \u0275fac = function CustomizeDistributorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomizeDistributorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomizeDistributorComponent, selectors: [["app-customize-distributor"]], viewQuery: function CustomizeDistributorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoTemplate = _t.first);
    }
  }, inputs: { entity: [1, "entity"] }, decls: 16, vars: 8, consts: [["customTemplate", ""], ["aria-label", "Distributor Customization", 1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "custom-icon-svg", "w-[2.5rem]", "h-[2.5rem]", 3, "ngClass"], ["role", "heading", "aria-level", "2", 1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [3, "visible", "fileUrl"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["for", "logo", 1, "w-1/3", "flex-shrink-0"], [1, "flex", "flex-col", "w-full"], [1, "flex-grow-1"], [1, "flex", "justify-between"], [1, "flex", "flex-col"], [1, "max-w-[150px]", "mb-2", 3, "src", "alt"], [1, "opacity-50"], [1, "flex", "flex-row", "gap-2"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-xl", 3, "click"], [1, "pi", "pi-times", "action", "hover", "!text-xl"], [1, "max-w-[150px]", 3, "src", "alt"], [3, "visibleChange", "croppedFile", "visible", "fileUrl"]], template: function CustomizeDistributorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 3);
      \u0275\u0275element(3, "use");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      \u0275\u0275text(7, "Customize");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, CustomizeDistributorComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "When users visit one of the domains below, the software will be customized with the following settings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, CustomizeDistributorComponent_Conditional_11_Template, 3, 2)(12, CustomizeDistributorComponent_Conditional_12_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CustomizeDistributorComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CustomizeDistributorComponent_Conditional_15_Template, 1, 2, "app-image-editor", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c111, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Paint roller icon");
      \u0275\u0275advance();
      \u0275\u0275attribute("href", "assets/sprites/sprite.svg#paint-roller");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 11 : 12);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isImageEditorVisible ? 15 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    DynamicFormComponent,
    GridComponent,
    ImageEditorComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomizeDistributorComponent, { className: "CustomizeDistributorComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/customize-distributor/customize-distributor.component.ts", lineNumber: 49 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-address/distributor-address.component.ts
var _c08 = (a0) => ({ "icon-primary": a0 });
function DistributorAddressComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function DistributorAddressComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit address");
  }
}
function DistributorAddressComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function DistributorAddressComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function DistributorAddressComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.address())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var DistributorAddressComponent = class _DistributorAddressComponent extends EntityAddressComponent {
  address = computed(() => {
    const distributorDetails = this.entity();
    if (isNullOrUndefined(distributorDetails) || isNullOrUndefined(distributorDetails.address) || !this.countriesLoaded())
      return [];
    const address = distributorDetails.address;
    return [
      {
        key: "Address",
        value: isString(address.address) ? address.address : "None"
      },
      {
        key: "City",
        value: isString(address.city) ? address.city : "None"
      },
      {
        key: "State",
        value: isString(address.state) ? address.state : "None"
      },
      {
        key: "Code",
        value: isString(address.code) ? address.code : "None"
      },
      {
        key: "Country",
        value: this.findCountryLabel(address.country)
      }
    ];
  });
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  constructor() {
    super();
    effect(() => {
      const distributorDetails = this.entity();
      if (distributorDetails && this.countriesLoaded()) {
        this.updateFormFields();
      }
    });
  }
  updateFormFields() {
    const distributor = this.entity();
    this.formFields = [
      createTextField("address", "Address", distributor?.address?.address, {
        name: "address",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Address is required"
          }
        ]
      }),
      createTextField("city", "City", distributor?.address?.city, {
        name: "city",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "City is required"
          }
        ]
      }),
      createTextField("state", "State", distributor?.address?.state, {
        name: "state",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "State is required"
          }
        ]
      }),
      createTextField("code", "Code", distributor?.address?.code, {
        name: "code",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Code is required"
          }
        ]
      }),
      createDropdownField("country", "Country", this.countries, distributor?.address?.country, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select country",
        name: "country",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(addressData) {
    const distributor = this.entity();
    if (!distributor) {
      throw new Error("Distributor is required");
    }
    return this.accountsService.updateDistributorDetails(distributor.id, {
      address: addressData.address
    });
  }
  static \u0275fac = function DistributorAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorAddressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorAddressComponent, selectors: [["app-distributor-address"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-id-card", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function DistributorAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DistributorAddressComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following address information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DistributorAddressComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, DistributorAddressComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c08, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "id card icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [DynamicFormComponent, GridComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorAddressComponent, { className: "DistributorAddressComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-address/distributor-address.component.ts", lineNumber: 26 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-details/distributor-details.component.ts
var DistributorDetailsComponent = class _DistributorDetailsComponent extends EntityDetailsBase {
  distributorDetails = computed(() => {
    const distributorDetails = this.entity();
    if (!isDefined(distributorDetails))
      return [];
    return [
      {
        key: "Name",
        value: isString(distributorDetails.name) ? distributorDetails.name : "N/A"
      },
      {
        key: "Website",
        value: isString(distributorDetails.website) ? distributorDetails.website : "N/A"
      },
      {
        key: "Tags",
        value: isArray(distributorDetails.tags) && distributorDetails.tags.length > 0 ? distributorDetails.tags.filter(isString).join(", ") : "None"
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  actions = [];
  updateFormFields() {
  }
  submitChanges(_dirtyValues) {
    return EMPTY;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DistributorDetailsComponent_BaseFactory;
    return function DistributorDetailsComponent_Factory(__ngFactoryType__) {
      return (\u0275DistributorDetailsComponent_BaseFactory || (\u0275DistributorDetailsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DistributorDetailsComponent)))(__ngFactoryType__ || _DistributorDetailsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorDetailsComponent, selectors: [["app-distributor-details"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 5, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-building", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"]], template: function DistributorDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Distributor Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Configure various distributor details.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(9, "app-grid", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Building icon");
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.distributorDetails())("columns", ctx.columns)("showGridLines", false)("hideHeader", true);
    }
  }, dependencies: [GridComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorDetailsComponent, { className: "DistributorDetailsComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-details/distributor-details.component.ts", lineNumber: 15 });
})();

// node_modules/primeng/fesm2022/primeng-panel.mjs
var _c09 = ["header"];
var _c112 = ["icons"];
var _c25 = ["content"];
var _c33 = ["footer"];
var _c42 = ["headericons"];
var _c52 = ["contentWrapper"];
var _c62 = ["*", [["p-header"]], [["p-footer"]]];
var _c72 = ["*", "p-header", "p-footer"];
var _c82 = (a0, a1) => ({
  "p-panel p-component": true,
  "p-panel-toggleable": a0,
  "p-panel-expanded": a1
});
var _c92 = (a0) => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
var _c102 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c113 = (a0) => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
var _c123 = (a0) => ({
  value: "visible",
  params: a0
});
var _c132 = (a0, a1, a2) => ({
  "p-panel-icons-start": a0,
  "p-panel-icons-end": a1,
  "p-panel-icons-center": a2
});
var _c142 = (a0) => ({
  $implicit: a0
});
function Panel_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("id", ctx_r2.id + "_header");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2._header);
  }
}
function Panel_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_1_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r2.expandIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_span_1_Template, 1, 2, "span", 16)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_MinusIcon_2_Template, 1, 0, "MinusIcon", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.expandIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r2.collapseIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon");
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_span_1_Template, 1, 2, "span", 16)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_PlusIcon_2_Template, 1, 0, "PlusIcon", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapseIcon);
  }
}
function Panel_div_1_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 14)(2, Panel_div_1_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template, 3, 2, "ng-container", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
  }
}
function Panel_div_1_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function Panel_div_1_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_1_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_1_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 14)(1, Panel_div_1_p_button_6_ng_template_1_1_Template, 1, 0, null, 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r2.headerIconsTemplate && !ctx_r2._headerIconsTemplate && !(ctx_r2.toggleButtonProps == null ? null : ctx_r2.toggleButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerIconsTemplate || ctx_r2._headerIconsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c142, ctx_r2.collapsed));
  }
}
function Panel_div_1_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("click", function Panel_div_1_p_button_6_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIconClick($event));
    })("keydown", function Panel_div_1_p_button_6_Template_p_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(1, Panel_div_1_p_button_6_ng_template_1_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("buttonProps", ctx_r2.toggleButtonProps);
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-label", ctx_r2.buttonAriaLabel)("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed);
  }
}
function Panel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function Panel_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHeaderClick($event));
    });
    \u0275\u0275template(1, Panel_div_1_span_1_Template, 2, 2, "span", 9);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Panel_div_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275template(5, Panel_div_1_5_Template, 1, 0, null, 6)(6, Panel_div_1_p_button_6_Template, 3, 7, "p-button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("id", ctx_r2.id + "-titlebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2._header);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c132, ctx_r2.iconPos === "start", ctx_r2.iconPos === "end", ctx_r2.iconPos === "center"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.iconTemplate || ctx_r2._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.toggleable);
  }
}
function Panel_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Panel_div_7_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
  }
}
var theme5 = ({
  dt
}) => `
.p-panel {
    border: 1px solid ${dt("panel.border.color")};
    border-radius: ${dt("panel.border.radius")};
    background: ${dt("panel.background")};
    color: ${dt("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${dt("panel.header.padding")};
    background: ${dt("panel.header.background")};
    color: ${dt("panel.header.color")};
    border-style: solid;
    border-width: ${dt("panel.header.border.width")};
    border-color: ${dt("panel.header.border.color")};
    border-radius: ${dt("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${dt("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${dt("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${dt("panel.content.padding")};
}

.p-panel-footer {
    padding: ${dt("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`;
var classes5 = {
  root: ({
    props
  }) => ["p-panel p-component", {
    "p-panel-toggleable": props.toggleable
  }],
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: "p-panel-header-actions",
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = class _PanelStyle extends BaseStyle {
  name = "panel";
  theme = theme5;
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PanelStyle_BaseFactory;
    return function PanelStyle_Factory(__ngFactoryType__) {
      return (\u0275PanelStyle_BaseFactory || (\u0275PanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PanelStyle)))(__ngFactoryType__ || _PanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PanelStyle,
    factory: _PanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelStyle, [{
    type: Injectable
  }], null, null);
})();
var PanelClasses;
(function(PanelClasses2) {
  PanelClasses2["root"] = "p-panel";
  PanelClasses2["header"] = "p-panel-header";
  PanelClasses2["title"] = "p-panel-title";
  PanelClasses2["headerActions"] = "p-panel-header-actions";
  PanelClasses2["pcToggleButton"] = "p-panel-toggle-button";
  PanelClasses2["contentContainer"] = "p-panel-content-container";
  PanelClasses2["content"] = "p-panel-content";
  PanelClasses2["footer"] = "p-panel-footer";
})(PanelClasses || (PanelClasses = {}));
var Panel = class _Panel extends BaseComponent {
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  _header;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  collapsed;
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
   * Position of the icons.
   * @group Props
   */
  iconPos = "end";
  /**
   * Expand icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  expandIcon;
  /**
   * Collapse icon of the toggle button.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  collapseIcon;
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   * @deprecated since v15.4.2, use `headericons` template instead.
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = "icon";
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  toggleButtonProps;
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  footerFacet;
  animating;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines template option for icon.
   * @example
   * ```html
   * <ng-template #icon> </ng-template>
   * ```
   * @group Templates
   */
  iconTemplate;
  /**
   * Defines template option for content.
   * @example
   * ```html
   * <ng-template #content> </ng-template>
   * ```
   * @group Templates
   */
  contentTemplate;
  /**
   * Defines template option for footer.
   * @example
   * ```html
   * <ng-template #footer> </ng-template>
   * ```
   * @group Templates
   */
  footerTemplate;
  /**
   * Defines template option for headerIcon.
   * @type {TemplateRef<PanelHeaderIconsTemplateContext>} context - context of the template.
   * @example
   * ```html
   * <ng-template #headericons let-collapsed> </ng-template>
   * ```
   * @see {@link PanelHeaderIconsTemplateContext}
   * @group Templates
   */
  headerIconsTemplate;
  _headerTemplate;
  _iconTemplate;
  _contentTemplate;
  _footerTemplate;
  _headerIconsTemplate;
  contentWrapperViewChild;
  id = uuid("pn_id_");
  get buttonAriaLabel() {
    return this._header;
  }
  _componentStyle = inject(PanelStyle);
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed) this.expand();
      else this.collapse();
    }
    this.cd.markForCheck();
    event.preventDefault();
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
    this.updateTabIndex();
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
    this.updateTabIndex();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateTabIndex() {
    if (this.contentWrapperViewChild) {
      const focusableElements = this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach((element) => {
        if (this.collapsed) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating = false;
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "icons":
          this._iconTemplate = item.template;
          break;
        case "headericons":
          this._headerIconsTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Panel_BaseFactory;
    return function Panel_Factory(__ngFactoryType__) {
      return (\u0275Panel_BaseFactory || (\u0275Panel_BaseFactory = \u0275\u0275getInheritedFactory(_Panel)))(__ngFactoryType__ || _Panel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c09, 4);
        \u0275\u0275contentQuery(dirIndex, _c112, 4);
        \u0275\u0275contentQuery(dirIndex, _c25, 4);
        \u0275\u0275contentQuery(dirIndex, _c33, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerIconsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Panel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c52, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentWrapperViewChild = _t.first);
      }
    },
    inputs: {
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      _header: [0, "header", "_header"],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      iconPos: "iconPos",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      toggler: "toggler",
      transitionOptions: "transitionOptions",
      toggleButtonProps: "toggleButtonProps"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([PanelStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c72,
    decls: 8,
    vars: 25,
    consts: [["contentWrapper", ""], ["icon", ""], [3, "ngClass", "ngStyle"], ["class", "p-panel-header", 3, "click", 4, "ngIf"], ["role", "region", 1, "p-panel-content-container", 3, "id"], [1, "p-panel-content"], [4, "ngTemplateOutlet"], ["class", "p-panel-footer", 4, "ngIf"], [1, "p-panel-header", 3, "click"], ["class", "p-panel-title", 4, "ngIf"], [1, "p-panel-icons", 3, "ngClass"], ["severity", "secondary", "type", "button", "role", "button", "styleClass", "p-panel-header-icon p-panel-toggler p-link", 3, "text", "rounded", "buttonProps", "click", "keydown", 4, "ngIf"], [1, "p-panel-title"], ["severity", "secondary", "type", "button", "role", "button", "styleClass", "p-panel-header-icon p-panel-toggler p-link", 3, "click", "keydown", "text", "rounded", "buttonProps"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"], [1, "p-panel-footer"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c62);
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, Panel_div_1_Template, 7, 10, "div", 3);
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275listener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone($event));
        });
        \u0275\u0275elementStart(3, "div", 5, 0);
        \u0275\u0275projection(5);
        \u0275\u0275template(6, Panel_ng_container_6_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, Panel_div_7_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(14, _c82, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id)("data-pc-name", "panel");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showHeader);
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? \u0275\u0275pureFunction1(19, _c102, \u0275\u0275pureFunction1(17, _c92, ctx.animating ? ctx.transitionOptions : "0ms")) : \u0275\u0275pureFunction1(23, _c123, \u0275\u0275pureFunction1(21, _c113, ctx.animating ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, PlusIcon, MinusIcon, ButtonModule, Button, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      standalone: true,
      imports: [CommonModule, PlusIcon, MinusIcon, ButtonModule, SharedModule],
      template: `
        <div
            [attr.id]="id"
            [attr.data-pc-name]="'panel'"
            [ngClass]="{
                'p-panel p-component': true,
                'p-panel-toggleable': toggleable,
                'p-panel-expanded': !collapsed && toggleable
            }"
            [ngStyle]="style"
            [class]="styleClass"
        >
            <div class="p-panel-header" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
                <span class="p-panel-title" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                <div
                    class="p-panel-icons"
                    [ngClass]="{
                        'p-panel-icons-start': iconPos === 'start',
                        'p-panel-icons-end': iconPos === 'end',
                        'p-panel-icons-center': iconPos === 'center'
                    }"
                >
                    <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    <p-button
                        *ngIf="toggleable"
                        [attr.id]="id + '_header'"
                        severity="secondary"
                        [text]="true"
                        [rounded]="true"
                        type="button"
                        role="button"
                        styleClass="p-panel-header-icon p-panel-toggler p-link"
                        [attr.aria-label]="buttonAriaLabel"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        (click)="onIconClick($event)"
                        (keydown)="onKeyDown($event)"
                        [buttonProps]="toggleButtonProps"
                    >
                        <ng-template #icon>
                            <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                                <ng-container *ngIf="!collapsed">
                                    <span *ngIf="expandIcon" [class]="expandIcon"></span>
                                    <MinusIcon *ngIf="!expandIcon" />
                                </ng-container>

                                <ng-container *ngIf="collapsed">
                                    <span *ngIf="collapseIcon" [class]="collapseIcon"></span>
                                    <PlusIcon *ngIf="!collapseIcon" />
                                </ng-container>
                            </ng-container>

                            <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div
                class="p-panel-content-container"
                [id]="id + '_content'"
                role="region"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.tabindex]="collapsed ? '-1' : undefined"
                [@panelContent]="
                    collapsed
                        ? {
                              value: 'hidden',
                              params: {
                                  transitionParams: animating ? transitionOptions : '0ms',
                                  height: '0',
                                  opacity: '0'
                              }
                          }
                        : {
                              value: 'visible',
                              params: {
                                  transitionParams: animating ? transitionOptions : '0ms',
                                  height: '*',
                                  opacity: '1'
                              }
                          }
                "
                (@panelContent.done)="onToggleDone($event)"
            >
                <div class="p-panel-content" #contentWrapper>
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>

                <div class="p-panel-footer" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PanelStyle]
    }]
  }], null, {
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _header: [{
      type: Input,
      args: ["header"]
    }],
    collapsed: [{
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
    iconPos: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    toggleButtonProps: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icons", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerIconsTemplate: [{
      type: ContentChild,
      args: ["headericons", {
        descendants: false
      }]
    }],
    contentWrapperViewChild: [{
      type: ViewChild,
      args: ["contentWrapper"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelModule = class _PanelModule {
  static \u0275fac = function PanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PanelModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Panel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [Panel, SharedModule],
      exports: [Panel, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/components/forms/dynamic-form-modal/dynamic-form-modal.component.ts
var _c010 = ["formHeader"];
var _c114 = [[["", "formHeader", ""]]];
var _c26 = ["[formHeader]"];
var _forTrack02 = ($index, $item) => $item.label;
function DynamicFormModalComponent_ng_template_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 6);
    \u0275\u0275listener("onClick", function DynamicFormModalComponent_ng_template_4_For_2_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const action_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.handleAction(action_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("type", action_r3.type || "button")("label", action_r3.label)("severity", action_r3.severity)("outlined", action_r3.outlined)("disabled", ctx_r3.isDisabled(action_r3))("icon", action_r3.icon)("styleClass", action_r3.styleClass);
  }
}
function DynamicFormModalComponent_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicFormModalComponent_ng_template_4_For_2_Conditional_0_Template, 1, 7, "p-button", 5);
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.isVisible(action_r3) ? 0 : -1);
  }
}
function DynamicFormModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, DynamicFormModalComponent_ng_template_4_For_2_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.actions());
  }
}
var DynamicFormModalComponent = class _DynamicFormModalComponent {
  formHeaderContent = null;
  visible = input(false);
  header = input("");
  fields = input([]);
  actions = input([]);
  sections = input([]);
  templates = input({});
  styleClass = input("");
  modalClose = output();
  formSubmit = output();
  form;
  /**
   * Handles the form ready event and sets the form instance.
   * @param form The form group instance.
   */
  handleFormReady(form) {
    this.form = form;
  }
  /**
   * Determines if an action is visible.
   * @param action The form action.
   * @returns True if the action is visible, otherwise false.
   */
  isVisible(action) {
    if (typeof action.visible === "function") {
      return action.visible(this.form);
    }
    return action.visible ?? true;
  }
  /**
   * Determines if an action is disabled.
   * @param action The form action.
   * @returns True if the action is disabled, otherwise false.
   */
  isDisabled(action) {
    if (typeof action.disabled === "function") {
      return action.disabled(this.form);
    }
    return action.disabled ?? false;
  }
  /**
   * Handles form actions.
   * @param action The form action.
   */
  handleAction(action) {
    if (this.form && action.action) {
      action.action(this.form);
    }
  }
  /**
   * Handles the modal hide event.
   */
  onHide() {
    this.modalClose.emit();
    this.form?.reset();
  }
  /**
   * Track by function for actions.
   * @param index The index of the action.
   * @param action The form action.
   * @returns The label of the action.
   */
  trackByLabel(index, action) {
    return action.label;
  }
  static \u0275fac = function DynamicFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicFormModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicFormModalComponent, selectors: [["app-dynamic-form-modal"]], contentQueries: function DynamicFormModalComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, _c010, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.formHeaderContent = _t.first);
    }
  }, inputs: { visible: [1, "visible"], header: [1, "header"], fields: [1, "fields"], actions: [1, "actions"], sections: [1, "sections"], templates: [1, "templates"], styleClass: [1, "styleClass"] }, outputs: { modalClose: "modalClose", formSubmit: "formSubmit" }, ngContentSelectors: _c26, decls: 5, vars: 12, consts: [["dynamicForm", ""], [3, "onHide", "visibleChange", "visible", "header", "modal", "draggable", "resizable", "closeOnEscape", "dismissableMask", "styleClass"], [3, "formReady", "fields", "sections", "templates", "hideActions"], ["pTemplate", "footer"], [1, "flex", "justify-end", "gap-2"], [3, "type", "label", "severity", "outlined", "disabled", "icon", "styleClass"], [3, "onClick", "type", "label", "severity", "outlined", "disabled", "icon", "styleClass"]], template: function DynamicFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c114);
      \u0275\u0275elementStart(0, "p-dialog", 1);
      \u0275\u0275listener("onHide", function DynamicFormModalComponent_Template_p_dialog_onHide_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHide());
      })("visibleChange", function DynamicFormModalComponent_Template_p_dialog_visibleChange_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.modalClose.emit());
      });
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "app-dynamic-form", 2, 0);
      \u0275\u0275listener("formReady", function DynamicFormModalComponent_Template_app_dynamic_form_formReady_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleFormReady($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, DynamicFormModalComponent_ng_template_4_Template, 3, 0, "ng-template", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible())("header", ctx.header())("modal", true)("draggable", false)("resizable", false)("closeOnEscape", true)("dismissableMask", true)("styleClass", ctx.styleClass());
      \u0275\u0275advance(2);
      \u0275\u0275property("fields", ctx.fields())("sections", ctx.sections())("templates", ctx.templates())("hideActions", true);
    }
  }, dependencies: [DialogModule, Dialog, PrimeTemplate, ButtonModule, Button, DynamicFormComponent, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicFormModalComponent, { className: "DynamicFormModalComponent", filePath: "src/app/shared/components/forms/dynamic-form-modal/dynamic-form-modal.component.ts", lineNumber: 27 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-external-authentication/distributor-external-authentication.component.ts
function DistributorExternalAuthenticationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275listener("click", function DistributorExternalAuthenticationComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit External Authentication");
  }
}
function DistributorExternalAuthenticationComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-panel");
  }
}
function DistributorExternalAuthenticationComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-panel")(1, "div", 18)(2, "div");
    \u0275\u0275element(3, "span", 19);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "key icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Delete Issuer");
  }
}
function DistributorExternalAuthenticationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Issuers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275template(5, DistributorExternalAuthenticationComponent_Conditional_10_Conditional_5_Template, 1, 0, "p-panel");
    \u0275\u0275repeaterCreate(6, DistributorExternalAuthenticationComponent_Conditional_10_For_7_Template, 8, 3, "p-panel", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "p-button", 14);
    \u0275\u0275listener("click", function DistributorExternalAuthenticationComponent_Conditional_10_Template_p_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "p-button", 16);
    \u0275\u0275listener("onClick", function DistributorExternalAuthenticationComponent_Conditional_10_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isFormEditable.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.oidc().length === 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.oidc());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
  }
}
function DistributorExternalAuthenticationComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.distributorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var DistributorExternalAuthenticationComponent = class _DistributorExternalAuthenticationComponent {
  entity = input();
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  isFormEditable = signal(false);
  oidc = signal([]);
  distributorDetails = computed(() => {
    const distributorDetails = this.entity();
    if (!distributorDetails)
      return [];
    const authProviders = Object.entries(distributorDetails.oidc || {}).map(([_, value]) => value.name).filter(Boolean);
    return [
      {
        key: "External Authentication",
        value: authProviders.length > 0 ? authProviders.join(", ") : "None"
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  formFields = [];
  actions = [
    {
      label: "Cancel",
      action: () => {
        this.showModal = false;
      },
      severity: "secondary"
    },
    {
      label: "Ok",
      action: (formData) => {
        this.onFormSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => isNullOrUndefined(form) || form.pristine
    }
  ];
  showModal = false;
  constructor() {
    effect(() => {
      const distributorDetails = this.entity();
      if (distributorDetails) {
        this.oidc.set(Object.values(distributorDetails.oidc || {}));
        this.updateFormFields();
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", "", {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ],
        hint: "A descriptive name for this issuer. It will be displayed on a button on the sign in screen."
      }),
      createTextField("issuer", "Issuer", "", {
        name: "issuer",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Issuer is required"
          }
        ],
        hint: "The issuer endpoint, i.e. https://accounts.google.com/"
      }),
      createTextField("clientId", "Client ID", "", {
        name: "clientId",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Client ID is required"
          }
        ],
        hint: "The Client ID supplied by your Open ID Connect issuer."
      }),
      createPasswordField("clientSecret", "Client Secret", {
        name: "clientSecret",
        hint: "The client secret is OPTIONAL and is not required for standard web or mobile sign in."
      })
    ];
  }
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  onFormSubmit(data) {
    this.showModal = false;
    this.oidc.update((oidc) => [...oidc, data.value]);
  }
  save() {
    const distributor = this.entity();
    if (isNullOrUndefined(distributor))
      return;
    this.accountsService.updateDistributorDetails(distributor.id, { oidc: { "": this.oidc() } }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  onEdit() {
    this.isFormEditable.set(true);
  }
  onClose() {
    this.showModal = false;
  }
  static \u0275fac = function DistributorExternalAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorExternalAuthenticationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorExternalAuthenticationComponent, selectors: [["app-distributor-external-authentication"]], inputs: { entity: [1, "entity"] }, decls: 13, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-key", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], ["header", "Issuer Details", 3, "modalClose", "formSubmit", "visible", "fields", "actions"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], ["for", "logo", 1, "w-1/3", "shrink-0"], [1, "flex", "flex-col", "justify-end", "w-full"], [1, "flex-grow-1", "flex", "flex-col"], ["severity", "secondary", "label", "Add", 1, "self-end", "p-2", 3, "click"], [1, "flex", "justify-end", "gap-2", "mt-4"], ["type", "button", "label", "Cancel", "severity", "secondary", 3, "onClick"], ["type", "submit", "label", "Save", "severity", "primary", 3, "disabled"], [1, "flex", "flex-row", "justify-between"], [1, "pi", "pi-key", "!text-xl"], [1, "px-4"], [1, "pi", "pi-trash", "action", "hover", "!text-xl"]], template: function DistributorExternalAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "External Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DistributorExternalAuthenticationComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "To authenticate with an external OpenId Connect issuer, add the issuer below.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DistributorExternalAuthenticationComponent_Conditional_10_Template, 12, 2, "div", 7)(11, DistributorExternalAuthenticationComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-dynamic-form-modal", 9);
      \u0275\u0275listener("modalClose", function DistributorExternalAuthenticationComponent_Template_app_dynamic_form_modal_modalClose_12_listener() {
        return ctx.onClose();
      })("formSubmit", function DistributorExternalAuthenticationComponent_Template_app_dynamic_form_modal_formSubmit_12_listener($event) {
        return ctx.onFormSubmit($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "key icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.showModal)("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    GridComponent,
    DataViewModule,
    ButtonModule,
    Button,
    PanelModule,
    Panel,
    DynamicFormModalComponent
  ], styles: ["\n\n[_nghost-%COMP%]     .p-panel-header {\n  padding: 0 0 1.125rem 0;\n}\n/*# sourceMappingURL=distributor-external-authentication.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorExternalAuthenticationComponent, { className: "DistributorExternalAuthenticationComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-external-authentication/distributor-external-authentication.component.ts", lineNumber: 47 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-notification-settings/distributor-notification-settings.component.ts
function DistributorNotificationSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function DistributorNotificationSettingsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit notification settings");
  }
}
function DistributorNotificationSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function DistributorNotificationSettingsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function DistributorNotificationSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.distributorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var DistributorNotificationSettingsComponent = class _DistributorNotificationSettingsComponent extends EntitySectionBaseComponent {
  entitiesService = inject(EntitiesService);
  accountsService = inject(AccountsService);
  utilityService = inject(UtilityService);
  emailProvidersLoaded = signal(false);
  emailProviders = [
    { label: DEFAULT_EMAIL_PROVIDER.name, value: DEFAULT_EMAIL_PROVIDER.id }
  ];
  distributorDetails = computed(() => {
    const distributorDetails = this.entity();
    if (!isDefined(distributorDetails))
      return [];
    const emailProvider = distributorDetails.emailProvider;
    const providerName = isDefined(emailProvider) && hasProperty(emailProvider, "name") && isString(emailProvider.name) ? emailProvider.name : "None";
    return [
      {
        key: "Default Email Provider",
        value: providerName
      }
    ];
  });
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    this.actions = [
      {
        label: "Cancel",
        action: () => this.isFormEditable.set(false),
        severity: "secondary"
      },
      {
        label: "Save",
        action: (formData) => {
          this.onSubmit(formData);
        },
        severity: "primary",
        disabled: (form) => isNullOrUndefined(form) || form.pristine
      }
    ];
    effect(() => {
      const distributorDetails = this.entity();
      if (distributorDetails && this.emailProvidersLoaded()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.fetchEmailProviders();
  }
  fetchEmailProviders() {
    const distributor = this.entity();
    if (!isDefined(distributor) || !isString(distributor.id)) {
      return;
    }
    const filters = { state: { value: "active", operator: "=" } };
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    this.entitiesService.listEmailProviders(distributor.id, 0, DEFAULT_LIST_SIZE, "name", rqlFilter).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (!isDefined(response) || !hasProperty(response, "items")) {
          return;
        }
        const providers = response.items.filter((provider) => isDefined(provider) && hasProperty(provider, "id") && hasProperty(provider, "name")).map((provider) => ({
          label: isString(provider.name) ? provider.name : "Unknown",
          value: provider.id
        }));
        this.emailProviders = [...this.emailProviders, ...providers];
        this.emailProvidersLoaded.set(true);
      },
      error: () => {
        this.emailProvidersLoaded.set(false);
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("emailProvider", "Email Provider", this.emailProviders, this.entity()?.emailProvider?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "emailProvider",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(formData) {
    const distributor = this.entity();
    if (isNullOrUndefined(distributor))
      return;
    this.accountsService.updateDistributorDetails(distributor.id, formData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  static \u0275fac = function DistributorNotificationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorNotificationSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorNotificationSettingsComponent, selectors: [["app-distributor-notification-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-at", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function DistributorNotificationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Notification Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, DistributorNotificationSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, DistributorNotificationSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, DistributorNotificationSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "At icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorNotificationSettingsComponent, { className: "DistributorNotificationSettingsComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-notification-settings/distributor-notification-settings.component.ts", lineNumber: 39 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-settings/distributor-settings.component.ts
var DistributorSettingsComponent = class _DistributorSettingsComponent extends EntitySettingsBase {
  distributorDetails = computed(() => {
    const distributorDetails = this.entity();
    if (!isDefined(distributorDetails))
      return [];
    const emailProviders = distributorDetails.availableEmailProviders;
    const mapSets = distributorDetails.availableMapSets;
    return [
      {
        key: "Available Email providers",
        value: isArray(emailProviders) && emailProviders.length > 0 ? emailProviders.filter((provider) => isDefined(provider) && hasProperty(provider, "name")).map((provider) => provider.name).join(", ") : "None"
      },
      {
        key: "Available Map Sets",
        value: isArray(mapSets) && mapSets.length > 0 ? mapSets.filter((mapSet) => isDefined(mapSet) && hasProperty(mapSet, "name")).map((mapSet) => mapSet.name).join(", ") : "None"
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  actions = [];
  updateFormFields() {
  }
  submitChanges(_dirtyValues) {
    return EMPTY;
  }
  loadSelectOptions(_distributor) {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DistributorSettingsComponent_BaseFactory;
    return function DistributorSettingsComponent_Factory(__ngFactoryType__) {
      return (\u0275DistributorSettingsComponent_BaseFactory || (\u0275DistributorSettingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DistributorSettingsComponent)))(__ngFactoryType__ || _DistributorSettingsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorSettingsComponent, selectors: [["app-distributor-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 5, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-cog", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"]], template: function DistributorSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Choose from the following settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(9, "app-grid", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Cog icon");
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.distributorDetails())("columns", ctx.columns)("showGridLines", false)("hideHeader", true);
    }
  }, dependencies: [GridComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorSettingsComponent, { className: "DistributorSettingsComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-settings/distributor-settings.component.ts", lineNumber: 20 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-ssl-certificates/distributor-ssl-certificates.component.ts
var _c011 = ["sslCertificatesTemplate"];
function DistributorSslCertificatesComponent_ng_template_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", item_r1 == null ? null : item_r1.domain, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1 == null ? null : item_r1.domain);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", item_r1 == null ? null : item_r1.state, ")");
  }
}
function DistributorSslCertificatesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DistributorSslCertificatesComponent_ng_template_10_For_1_Template, 4, 3, "span", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const details_r2 = ctx.$implicit;
    \u0275\u0275repeater(details_r2.value);
  }
}
var DistributorSslCertificatesComponent = class _DistributorSslCertificatesComponent {
  sslCertificatesTemplate;
  cdr = inject(ChangeDetectorRef);
  entity = input();
  distributorDetails = computed(() => {
    const details = this.entity();
    if (!details)
      return [];
    return [
      {
        key: "Domains",
        value: details?.sslCertificates || []
      }
    ];
  });
  columns = [];
  ngAfterViewInit() {
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      {
        field: "value",
        header: "",
        cellTemplate: this.sslCertificatesTemplate
      }
    ];
    this.cdr.detectChanges();
  }
  static \u0275fac = function DistributorSslCertificatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorSslCertificatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorSslCertificatesComponent, selectors: [["app-distributor-ssl-certificates"]], viewQuery: function DistributorSslCertificatesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c011, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sslCertificatesTemplate = _t.first);
    }
  }, inputs: { entity: [1, "entity"] }, decls: 12, vars: 5, consts: [["sslCertificatesTemplate", ""], [1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-file", "!text-4xl"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], ["target", "_blank", 3, "href"]], template: function DistributorSslCertificatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "span", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "h2", 6);
      \u0275\u0275text(6, "SSL Certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "The following custom domains have been registered for this client.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "app-grid", 7);
      \u0275\u0275template(10, DistributorSslCertificatesComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Building icon");
      \u0275\u0275advance(7);
      \u0275\u0275property("data", ctx.distributorDetails())("columns", ctx.columns)("showGridLines", false)("hideHeader", true);
    }
  }, dependencies: [GridComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorSslCertificatesComponent, { className: "DistributorSslCertificatesComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-ssl-certificates/distributor-ssl-certificates.component.ts", lineNumber: 23 });
})();

export {
  Divider,
  DividerModule,
  BroadcastEventMessageService,
  EntitySectionBaseComponent,
  EntityAddressComponent,
  EntityDetailsBase,
  EntitySettingsBase,
  DynamicFormModalComponent,
  Panel,
  PanelModule,
  ImageEditorComponent,
  CustomizeDistributorComponent,
  DistributorAddressComponent,
  DistributorDetailsComponent,
  DistributorExternalAuthenticationComponent,
  DistributorNotificationSettingsComponent,
  DistributorSettingsComponent,
  DistributorSslCertificatesComponent
};
//# sourceMappingURL=chunk-WD6S76EG.js.map
