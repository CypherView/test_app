import {
  Dialog,
  DialogModule
} from "./chunk-BUQLELQY.js";
import {
  Motion,
  MotionModule
} from "./chunk-4CAIP3KE.js";
import {
  transformToBoolean
} from "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  Y,
  h2 as h,
  s2 as s
} from "./chunk-YL4UBWIM.js";
import {
  CommonModule,
  NgClass,
  NgTemplateOutlet
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  computed,
  contentChild,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@primeuix/styles/dist/stepper/index.mjs
var style = "\n    .p-steplist {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-x: auto;\n    }\n\n    .p-step {\n        position: relative;\n        display: flex;\n        flex: 1 1 auto;\n        align-items: center;\n        gap: dt('stepper.step.gap');\n        padding: dt('stepper.step.padding');\n    }\n\n    .p-step:last-of-type {\n        flex: initial;\n    }\n\n    .p-step-header {\n        border: 0 none;\n        display: inline-flex;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration');\n        border-radius: dt('stepper.step.header.border.radius');\n        outline-color: transparent;\n        background: transparent;\n        padding: dt('stepper.step.header.padding');\n        gap: dt('stepper.step.header.gap');\n    }\n\n    .p-step-header:focus-visible {\n        box-shadow: dt('stepper.step.header.focus.ring.shadow');\n        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');\n        outline-offset: dt('stepper.step.header.focus.ring.offset');\n    }\n\n    .p-stepper.p-stepper-readonly .p-step {\n        cursor: auto;\n    }\n\n    .p-step-title {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('stepper.step.title.color');\n        font-weight: dt('stepper.step.title.font.weight');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-step-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('stepper.step.number.color');\n        border: 2px solid dt('stepper.step.number.border.color');\n        background: dt('stepper.step.number.background');\n        min-width: dt('stepper.step.number.size');\n        height: dt('stepper.step.number.size');\n        line-height: dt('stepper.step.number.size');\n        font-size: dt('stepper.step.number.font.size');\n        z-index: 1;\n        border-radius: dt('stepper.step.number.border.radius');\n        position: relative;\n        font-weight: dt('stepper.step.number.font.weight');\n    }\n\n    .p-step-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('stepper.step.number.border.radius');\n        box-shadow: dt('stepper.step.number.shadow');\n    }\n\n    .p-step-active .p-step-header {\n        cursor: default;\n    }\n\n    .p-step-active .p-step-number {\n        background: dt('stepper.step.number.active.background');\n        border-color: dt('stepper.step.number.active.border.color');\n        color: dt('stepper.step.number.active.color');\n    }\n\n    .p-step-active .p-step-title {\n        color: dt('stepper.step.title.active.color');\n    }\n\n    .p-step:not(.p-disabled):focus-visible {\n        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-step:has(~ .p-step-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepper-separator {\n        flex: 1 1 0;\n        background: dt('stepper.separator.background');\n        width: 100%;\n        height: dt('stepper.separator.size');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-steppanels {\n        padding: dt('stepper.steppanels.padding');\n    }\n\n    .p-steppanel {\n        background: dt('stepper.steppanel.background');\n        color: dt('stepper.steppanel.color');\n    }\n\n    .p-stepper:has(.p-stepitem) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-stepitem {\n        display: flex;\n        flex-direction: column;\n        flex: initial;\n    }\n\n    .p-stepitem.p-stepitem-active {\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-step {\n        flex: initial;\n    }\n    \n    .p-stepitem .p-steppanel {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-stepitem .p-steppanel-content-wrapper {\n        display: flex;\n        flex: 1 1 auto;\n        min-height: 0;\n    }\n    .p-stepitem .p-steppanel-content {\n        width: 100%;\n        padding: dt('stepper.steppanel.padding');\n        margin-inline-start: 1rem;\n    }\n\n    .p-stepitem .p-stepper-separator {\n        flex: 0 0 auto;\n        width: dt('stepper.separator.size');\n        height: auto;\n        margin: dt('stepper.separator.margin');\n        position: relative;\n        left: calc(-1 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem .p-stepper-separator:dir(rtl) {\n        left: calc(-9 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepitem:last-of-type .p-steppanel {\n        padding-inline-start: dt('stepper.step.number.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = (a0, a1, a2) => ({
  activateCallback: a0,
  value: a1,
  active: a2
});
function Step_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Step_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepClick());
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Step_Conditional_0_Conditional_5_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"))("tabindex", ctx_r1.isStepDisabled() ? -1 : void 0)("disabled", ctx_r1.isStepDisabled());
    \u0275\u0275attribute("id", ctx_r1.id())("role", "tab")("aria-controls", ctx_r1.ariaControls());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("number"));
    \u0275\u0275property("pBind", ctx_r1.ptm("number"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 5 : -1);
  }
}
function Step_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Step_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Step_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    \u0275\u0275conditionalCreate(1, Step_Conditional_1_Conditional_1_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.content || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c2, ctx_r1.onStepClick.bind(ctx_r1), ctx_r1.value(), ctx_r1.active()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 1 : -1);
  }
}
function StepPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function StepPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var classes$5 = {
  root: ({
    instance
  }) => ["p-stepitem", {
    "p-stepitem-active": instance.isActive()
  }]
};
var StepItemStyle = class _StepItemStyle extends BaseStyle {
  name = "stepitem";
  classes = classes$5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepItemStyle_BaseFactory;
    return function StepItemStyle_Factory(__ngFactoryType__) {
      return (\u0275StepItemStyle_BaseFactory || (\u0275StepItemStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepItemStyle)))(__ngFactoryType__ || _StepItemStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepItemStyle,
    factory: _StepItemStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItemStyle, [{
    type: Injectable
  }], null, null);
})();
var StepItemClasses;
(function(StepItemClasses2) {
  StepItemClasses2["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));
var classes$4 = {
  root: "p-steplist"
};
var StepListStyle = class _StepListStyle extends BaseStyle {
  name = "steplist";
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepListStyle_BaseFactory;
    return function StepListStyle_Factory(__ngFactoryType__) {
      return (\u0275StepListStyle_BaseFactory || (\u0275StepListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepListStyle)))(__ngFactoryType__ || _StepListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepListStyle,
    factory: _StepListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepListStyle, [{
    type: Injectable
  }], null, null);
})();
var StepListClasses;
(function(StepListClasses2) {
  StepListClasses2["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));
var classes$3 = {
  root: "p-steppanels"
};
var StepPanelsStyle = class _StepPanelsStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelsStyle_BaseFactory;
    return function StepPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelsStyle_BaseFactory || (\u0275StepPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelsStyle)))(__ngFactoryType__ || _StepPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelsStyle,
    factory: _StepPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelsClasses;
(function(StepPanelsClasses2) {
  StepPanelsClasses2["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));
var classes$2 = {
  root: ({
    instance
  }) => ["p-steppanel", {
    "p-steppanel-active": instance.isVertical() && instance.active()
  }],
  contentWrapper: "p-steppanel-content-wrapper",
  content: "p-steppanel-content"
};
var StepPanelStyle = class _StepPanelStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelStyle_BaseFactory;
    return function StepPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelStyle_BaseFactory || (\u0275StepPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelStyle)))(__ngFactoryType__ || _StepPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelStyle,
    factory: _StepPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelClasses;
(function(StepPanelClasses2) {
  StepPanelClasses2["root"] = "p-steppanel";
  StepPanelClasses2["contentWrapper"] = "p-steppanel-content-wrapper";
  StepPanelClasses2["content"] = "p-steppanel-content";
})(StepPanelClasses || (StepPanelClasses = {}));
var style2 = (
  /*css*/
  `
${style}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`
);
var classes$1 = {
  root: ({
    instance
  }) => ["p-stepper p-component", {
    "p-readonly": instance.linear()
  }],
  separator: "p-stepper-separator"
};
var StepperStyle = class _StepperStyle extends BaseStyle {
  name = "stepper";
  style = style2;
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperStyle_BaseFactory;
    return function StepperStyle_Factory(__ngFactoryType__) {
      return (\u0275StepperStyle_BaseFactory || (\u0275StepperStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepperStyle)))(__ngFactoryType__ || _StepperStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepperStyle,
    factory: _StepperStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStyle, [{
    type: Injectable
  }], null, null);
})();
var StepperClasses;
(function(StepperClasses2) {
  StepperClasses2["root"] = "p-stepper";
  StepperClasses2["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));
var classes = {
  root: ({
    instance
  }) => ["p-step", {
    "p-step-active": instance.active(),
    "p-disabled": instance.isStepDisabled()
  }],
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = class _StepStyle extends BaseStyle {
  name = "step";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepStyle_BaseFactory;
    return function StepStyle_Factory(__ngFactoryType__) {
      return (\u0275StepStyle_BaseFactory || (\u0275StepStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepStyle)))(__ngFactoryType__ || _StepStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepStyle,
    factory: _StepStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepStyle, [{
    type: Injectable
  }], null, null);
})();
var StepClasses;
(function(StepClasses2) {
  StepClasses2["root"] = "p-step";
  StepClasses2["header"] = "p-step-header";
  StepClasses2["number"] = "p-step-number";
  StepClasses2["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));
var STEPPER_INSTANCE = new InjectionToken("STEPPER_INSTANCE");
var STEPLIST_INSTANCE = new InjectionToken("STEPLIST_INSTANCE");
var STEPITEM_INSTANCE = new InjectionToken("STEPITEM_INSTANCE");
var STEP_INSTANCE = new InjectionToken("STEP_INSTANCE");
var STEPPANEL_INSTANCE = new InjectionToken("STEPPANEL_INSTANCE");
var STEPPANELS_INSTANCE = new InjectionToken("STEPPANELS_INSTANCE");
var STEPPERSEPARATOR_INSTANCE = new InjectionToken("STEPPERSEPARATOR_INSTANCE");
var StepList = class _StepList extends BaseComponent {
  $pcStepList = inject(STEPLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  steps = contentChildren(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  _componentStyle = inject(StepListStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepList_BaseFactory;
    return function StepList_Factory(__ngFactoryType__) {
      return (\u0275StepList_BaseFactory || (\u0275StepList_BaseFactory = \u0275\u0275getInheritedFactory(_StepList)))(__ngFactoryType__ || _StepList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepList,
    selectors: [["p-step-list"]],
    contentQueries: function StepList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function StepList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepListStyle, {
      provide: STEPLIST_INSTANCE,
      useExisting: _StepList
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepList
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepList, [{
    type: Component,
    args: [{
      selector: "p-step-list",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepListStyle, {
        provide: STEPLIST_INSTANCE,
        useExisting: StepList
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepList
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }]
  });
})();
var StepperSeparator = class _StepperSeparator extends BaseComponent {
  $pcStepperSeparator = inject(STEPPERSEPARATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(StepperStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperSeparator_BaseFactory;
    return function StepperSeparator_Factory(__ngFactoryType__) {
      return (\u0275StepperSeparator_BaseFactory || (\u0275StepperSeparator_BaseFactory = \u0275\u0275getInheritedFactory(_StepperSeparator)))(__ngFactoryType__ || _StepperSeparator);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepper-separator"]],
    hostVars: 2,
    hostBindings: function StepperSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("separator"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPERSEPARATOR_INSTANCE,
      useExisting: _StepperSeparator
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepperSeparator
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepper-separator",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("separator")'
      },
      providers: [StepperStyle, {
        provide: STEPPERSEPARATOR_INSTANCE,
        useExisting: StepperSeparator
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepperSeparator
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var StepItem = class _StepItem extends BaseComponent {
  $pcStepItem = inject(STEPITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepItemStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Value of step.
   * @type {<number | undefined>}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  isActive = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "isActive"
  }] : []);
  step = contentChild(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "step"
  }] : []);
  stepPanel = contentChild(forwardRef(() => StepPanel), ...ngDevMode ? [{
    debugName: "stepPanel"
  }] : []);
  constructor() {
    super();
    effect(() => {
      this.step().value.set(this.value());
    });
    effect(() => {
      this.stepPanel().value.set(this.value());
    });
  }
  static \u0275fac = function StepItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepItem,
    selectors: [["p-step-item"]],
    contentQueries: function StepItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.step, Step, 5);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepPanel, StepPanel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 3,
    hostBindings: function StepItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-active", ctx.isActive());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepItemStyle, {
      provide: STEPITEM_INSTANCE,
      useExisting: _StepItem
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepItem
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItem, [{
    type: Component,
    args: [{
      selector: "p-step-item",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.data-p-active]": "isActive()"
      },
      providers: [StepItemStyle, {
        provide: STEPITEM_INSTANCE,
        useExisting: StepItem
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepItem
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    step: [{
      type: ContentChild,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepPanel: [{
      type: ContentChild,
      args: [forwardRef(() => StepPanel), {
        isSignal: true
      }]
    }]
  });
})();
var Step = class _Step extends BaseComponent {
  $pcStep = inject(STEP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * Whether the step is disabled.
   * @type {boolean}
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: (v) => transformToBoolean(v)
  }));
  active = computed(() => this.pcStepper.isStepActive(this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...ngDevMode ? [{
    debugName: "isStepDisabled"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepList()) {
      const steps = this.pcStepper.stepList().steps();
      const index = steps.indexOf(this);
      const stepLen = steps.length;
      return index !== stepLen - 1;
    } else {
      return false;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  /**
   * Content template.
   * @type {TemplateRef<StepContentTemplateContext>}
   * @group Templates
   */
  content;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onStepClick() {
    this.pcStepper.updateValue(this.value());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Step_BaseFactory;
    return function Step_Factory(__ngFactoryType__) {
      return (\u0275Step_BaseFactory || (\u0275Step_BaseFactory = \u0275\u0275getInheritedFactory(_Step)))(__ngFactoryType__ || _Step);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Step,
    selectors: [["p-step"]],
    contentQueries: function Step_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function Step_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.active() ? "step" : void 0)("role", "presentation")("data-p-active", ctx.active())("data-p-disabled", ctx.isStepDisabled());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepStyle, {
      provide: STEP_INSTANCE,
      useExisting: _Step
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Step
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 3, "click", "pBind", "tabindex", "disabled"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Step_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Step_Conditional_0_Template, 6, 16)(1, Step_Conditional_1_Template, 2, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.content && !ctx._contentTemplate ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{
      selector: "p-step",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
      template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.aria-current]": 'active() ? "step" : undefined',
        "[attr.role]": '"presentation"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "isStepDisabled()"
      },
      providers: [StepStyle, {
        provide: STEP_INSTANCE,
        useExisting: Step
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Step
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    content: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanel = class _StepPanel extends BaseComponent {
  $pcStepPanel = inject(STEPPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  active = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...ngDevMode ? [{
    debugName: "isVertical"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepItems()) {
      const stepLen = this.pcStepper.stepItems().length;
      const stepPanelElements = Y(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
      const index = h(this.el.nativeElement, stepPanelElements);
      return index !== stepLen - 1;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.pcStepper.computedMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  /**
   * Content template.
   * @param {StepPanelContentTemplateContext} context - Context of the template
   * @see {@link StepPanelContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepPanelStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  updateValue(value) {
    this.pcStepper.updateValue(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanel_BaseFactory;
    return function StepPanel_Factory(__ngFactoryType__) {
      return (\u0275StepPanel_BaseFactory || (\u0275StepPanel_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanel)))(__ngFactoryType__ || _StepPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanel,
    selectors: [["p-step-panel"]],
    contentQueries: function StepPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function StepPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tabpanel")("aria-controls", ctx.ariaControls())("id", ctx.id())("data-p-active", ctx.active())("data-pc-name", "steppanel");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelStyle, {
      provide: STEPPANEL_INSTANCE,
      useExisting: _StepPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 16,
    consts: [["name", "p-collapsible", 3, "visible", "disabled", "options"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StepPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-motion", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, StepPanel_Conditional_2_Template, 1, 0, "p-stepper-separator");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275template(4, StepPanel_ng_container_4_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.active())("disabled", !ctx.isVertical())("options", ctx.computedMotionOptions());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSeparatorVisible() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(12, _c2, ctx.updateValue.bind(ctx), ctx.value(), ctx.active()));
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind, MotionModule, Motion],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanel, [{
    type: Component,
    args: [{
      selector: "p-step-panel",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule, MotionModule],
      template: `
        <p-motion [visible]="active()" name="p-collapsible" [disabled]="!isVertical()" [options]="computedMotionOptions()">
            <div [class]="cx('contentWrapper')" [pBind]="ptm('contentWrapper')">
                @if (isSeparatorVisible()) {
                    <p-stepper-separator />
                }
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
                </div>
            </div>
        </p-motion>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tabpanel"',
        "[attr.aria-controls]": "ariaControls()",
        "[attr.id]": "id()",
        "[attr.data-p-active]": "active()",
        "[attr.data-pc-name]": '"steppanel"'
      },
      providers: [StepPanelStyle, {
        provide: STEPPANEL_INSTANCE,
        useExisting: StepPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanel
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanels = class _StepPanels extends BaseComponent {
  $pcStepPanels = inject(STEPPANELS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepPanelsStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanels_BaseFactory;
    return function StepPanels_Factory(__ngFactoryType__) {
      return (\u0275StepPanels_BaseFactory || (\u0275StepPanels_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanels)))(__ngFactoryType__ || _StepPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanels,
    selectors: [["p-step-panels"]],
    hostVars: 2,
    hostBindings: function StepPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelsStyle, {
      provide: STEPPANELS_INSTANCE,
      useExisting: _StepPanels
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanels
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanels, [{
    type: Component,
    args: [{
      selector: "p-step-panels",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepPanelsStyle, {
        provide: STEPPANELS_INSTANCE,
        useExisting: StepPanels
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanels
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var Stepper = class _Stepper extends BaseComponent {
  $pcStepper = inject(STEPPER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepperStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * A model that can hold a numeric value or be undefined.
   * @defaultValue undefined
   * @type {ModelSignal<number | undefined>}
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * A boolean variable that captures user input.
   * @defaultValue false
   * @type {InputSignalWithTransform<any, boolean >}
   * @group Props
   */
  linear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "linear"
  } : {}), {
    transform: (v) => transformToBoolean(v)
  }));
  /**
   * Transition options of the animation.
   * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
   * @type {InputSignal<string >}
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  transitionOptions = input("400ms cubic-bezier(0.86, 0, 0.07, 1)", ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : []);
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  stepItems = contentChildren(StepItem, ...ngDevMode ? [{
    debugName: "stepItems"
  }] : []);
  steps = contentChildren(Step, ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  stepList = contentChild(StepList, ...ngDevMode ? [{
    debugName: "stepList"
  }] : []);
  updateValue(value) {
    this.value.set(value);
  }
  isStepActive(value) {
    return this.value() === value;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Stepper_BaseFactory;
    return function Stepper_Factory(__ngFactoryType__) {
      return (\u0275Stepper_BaseFactory || (\u0275Stepper_BaseFactory = \u0275\u0275getInheritedFactory(_Stepper)))(__ngFactoryType__ || _Stepper);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepItems, StepItem, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepList, StepList, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tablist")("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      linear: [1, "linear"],
      transitionOptions: [1, "transitionOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPER_INSTANCE,
      useExisting: _Stepper
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Stepper
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepperStyle, {
        provide: STEPPER_INSTANCE,
        useExisting: Stepper
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Stepper
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tablist"',
        "[attr.id]": "id()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    linear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "linear",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transitionOptions",
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
    stepItems: [{
      type: ContentChildren,
      args: [forwardRef(() => StepItem), {
        isSignal: true
      }]
    }],
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepList: [{
      type: ContentChild,
      args: [forwardRef(() => StepList), {
        isSignal: true
      }]
    }]
  });
})();
var StepperModule = class _StepperModule {
  static \u0275fac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepperModule,
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
      exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/shared/components/stepper/stepper.component.ts
var _c02 = (a0) => ({ $implicit: a0 });
var _c12 = (a0, a1, a2) => ({ "justify-end": a0, "justify-between": a1, "justify-start": a2 });
var _forTrack0 = ($index, $item) => $item.value;
function StepperComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("value", step_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.header);
  }
}
function StepperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-list");
    \u0275\u0275repeaterCreate(1, StepperComponent_Conditional_2_For_2_Template, 2, 2, "p-step", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.steps());
  }
}
function StepperComponent_For_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getPrevStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getNextStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("disabled", step_r5.disableNext);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.complete.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("loading", ctx_r1.loading());
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template, 1, 0, "p-button", 8);
    \u0275\u0275conditionalCreate(2, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template, 1, 1, "p-button", 9)(3, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template, 1, 1, "p-button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c12, ctx_r1.isFirstStep(step_r5.value), !ctx_r1.isFirstStep(step_r5.value) && !ctx_r1.isLastStep(step_r5.value), ctx_r1.isLastStep(step_r5.value)));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isFirstStep(step_r5.value) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep(step_r5.value) ? 2 : 3);
  }
}
function StepperComponent_For_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275template(2, StepperComponent_For_5_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StepperComponent_For_5_ng_template_1_Conditional_3_Template, 4, 7, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r5.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c02, step_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNavButtons() ? 3 : -1);
  }
}
function StepperComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-panel", 2);
    \u0275\u0275template(1, StepperComponent_For_5_ng_template_1_Template, 4, 5, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    \u0275\u0275property("value", step_r5.value);
  }
}
var StepperComponent = class _StepperComponent {
  steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : []);
  currentStepValue = model(1, ...ngDevMode ? [{ debugName: "currentStepValue" }] : []);
  showNavButtons = input(true, ...ngDevMode ? [{ debugName: "showNavButtons" }] : []);
  linearProgression = input(false, ...ngDevMode ? [{ debugName: "linearProgression" }] : []);
  containerClass = input("basis-[50rem]", ...ngDevMode ? [{ debugName: "containerClass" }] : []);
  showSteps = input(true, ...ngDevMode ? [{ debugName: "showSteps" }] : []);
  stepChange = output();
  complete = output();
  nextStep = output();
  prevStep = output();
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isLastStep(value) {
    return value === Math.max(...this.steps().map((s2) => s2.value));
  }
  isFirstStep(value) {
    return value === Math.min(...this.steps().map((s2) => s2.value));
  }
  getNextStep(currentValue) {
    const sortedValues = this.steps().map((s2) => s2.value).sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex + 1] || currentValue;
  }
  getPrevStep(currentValue) {
    const sortedValues = this.steps().map((s2) => s2.value).sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex - 1] || currentValue;
  }
  // Methods for external navigation
  goNext() {
    const nextStep = this.getNextStep(this.currentStepValue());
    if (nextStep !== this.currentStepValue()) {
      this.currentStepValue.set(nextStep);
      this.stepChange.emit(nextStep);
      this.nextStep.emit(nextStep);
    }
  }
  goBack() {
    const prevStep = this.getPrevStep(this.currentStepValue());
    if (prevStep !== this.currentStepValue()) {
      this.currentStepValue.set(prevStep);
      this.stepChange.emit(prevStep);
      this.prevStep.emit(prevStep);
    }
  }
  // Check if we can finish the wizard
  canFinish() {
    return this.isLastStep(this.currentStepValue()) && !(this.getCurrentStep()?.disableNext ?? false);
  }
  // Get the current step object
  getCurrentStep() {
    return this.steps().find((s2) => s2.value === this.currentStepValue());
  }
  static \u0275fac = function StepperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperComponent, selectors: [["app-stepper"]], inputs: { steps: [1, "steps"], currentStepValue: [1, "currentStepValue"], showNavButtons: [1, "showNavButtons"], linearProgression: [1, "linearProgression"], containerClass: [1, "containerClass"], showSteps: [1, "showSteps"], loading: [1, "loading"] }, outputs: { currentStepValue: "currentStepValueChange", stepChange: "stepChange", complete: "complete", nextStep: "nextStep", prevStep: "prevStep" }, decls: 6, vars: 5, consts: [[1, "card", "flex", "justify-center"], [3, "value", "linear"], [3, "value"], ["pTemplate", "content"], [1, "flex", "flex-col"], [1, "min-h-48"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "pt-6", 3, "ngClass"], ["label", "Back", "severity", "secondary", "icon", "pi pi-arrow-left"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "disabled"], ["label", "Finish", "icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "loading"], ["label", "Back", "severity", "secondary", "icon", "pi pi-arrow-left", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "disabled"], ["label", "Finish", "icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "onClick", "loading"]], template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-stepper", 1);
      \u0275\u0275conditionalCreate(2, StepperComponent_Conditional_2_Template, 3, 0, "p-step-list");
      \u0275\u0275elementStart(3, "p-step-panels");
      \u0275\u0275repeaterCreate(4, StepperComponent_For_5_Template, 2, 1, "p-step-panel", 2, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.containerClass());
      \u0275\u0275property("value", ctx.currentStepValue())("linear", ctx.linearProgression());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSteps() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.steps());
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, ButtonModule, Button, PrimeTemplate, StepperModule, Stepper, StepList, StepPanels, StepPanel, Step], styles: ["\n\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{ selector: "app-stepper", imports: [CommonModule, ButtonModule, StepperModule], template: `<div class="card flex justify-center">
  <p-stepper
    [value]="currentStepValue()"
    [class]="containerClass()"
    [linear]="linearProgression()"
  >
    @if (showSteps()) {
      <p-step-list>
        @for (step of steps(); track step.value) {
          <p-step [value]="step.value">{{ step.header }}</p-step>
        }
      </p-step-list>
    }
    <p-step-panels>
      @for (step of steps(); track step.value) {
        <p-step-panel [value]="step.value">
          <ng-template
            pTemplate="content"
            let-activateCallback="activateCallback"
          >
            <div class="flex flex-col">
              <div class="min-h-48">
                <!-- Content container -->
                <ng-container
                  *ngTemplateOutlet="step.content; context: { $implicit: step }"
                ></ng-container>
              </div>

              @if (showNavButtons()) {
                <div
                  class="flex pt-6"
                  [ngClass]="{
                    'justify-end': isFirstStep(step.value),
                    'justify-between':
                      !isFirstStep(step.value) && !isLastStep(step.value),
                    'justify-start': isLastStep(step.value),
                  }"
                >
                  @if (!isFirstStep(step.value)) {
                    <p-button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      (onClick)="activateCallback(getPrevStep(step.value))"
                    />
                  }

                  @if (!isLastStep(step.value)) {
                    <p-button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      (onClick)="activateCallback(getNextStep(step.value))"
                      [disabled]="step.disableNext"
                    />
                  } @else {
                    <p-button
                      label="Finish"
                      icon="pi pi-check"
                      iconPos="right"
                      severity="success"
                      [loading]="loading()"
                      (onClick)="complete.emit()"
                    />
                  }
                </div>
              }
            </div>
          </ng-template>
        </p-step-panel>
      }
    </p-step-panels>
  </p-stepper>
</div>
`, styles: ["/* src/app/shared/components/stepper/stepper.component.scss */\n:host ::ng-deep .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n:host ::ng-deep .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */\n"] }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], currentStepValue: [{ type: Input, args: [{ isSignal: true, alias: "currentStepValue", required: false }] }, { type: Output, args: ["currentStepValueChange"] }], showNavButtons: [{ type: Input, args: [{ isSignal: true, alias: "showNavButtons", required: false }] }], linearProgression: [{ type: Input, args: [{ isSignal: true, alias: "linearProgression", required: false }] }], containerClass: [{ type: Input, args: [{ isSignal: true, alias: "containerClass", required: false }] }], showSteps: [{ type: Input, args: [{ isSignal: true, alias: "showSteps", required: false }] }], stepChange: [{ type: Output, args: ["stepChange"] }], complete: [{ type: Output, args: ["complete"] }], nextStep: [{ type: Output, args: ["nextStep"] }], prevStep: [{ type: Output, args: ["prevStep"] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "src/app/shared/components/stepper/stepper.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/wizard/wizard.component.ts
function WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p-button", 4);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template, 1, 0, "p-button", 5);
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template, 1, 1, "p-button", 6);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template, 1, 2, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 4 : -1);
  }
}
function WizardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_0_Template_app_stepper_stepChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_0_Template_app_stepper_complete_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_0_Conditional_2_Template, 5, 3, "div", 3);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep())("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showFooterButtons() && !((tmp_7_0 = ctx_r1.getCurrentStep()) == null ? null : tmp_7_0.hideDefaultFooter) ? 2 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-button", 4);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template, 1, 0, "p-button", 5);
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template, 1, 1, "p-button", 6);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template, 1, 2, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 4 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template, 5, 3, "div", 13);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.showFooterButtons() && !((tmp_2_0 = ctx_r1.getCurrentStep()) == null ? null : tmp_2_0.hideDefaultFooter) ? 0 : -1);
  }
}
function WizardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 11);
    \u0275\u0275listener("onHide", function WizardComponent_Conditional_1_Template_p_dialog_onHide_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    })("visibleChange", function WizardComponent_Conditional_1_Template_p_dialog_visibleChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_1_Template_app_stepper_stepChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_1_Template_app_stepper_complete_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, WizardComponent_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", ctx_r1.visible())("header", ctx_r1.header())("modal", true)("draggable", false)("resizable", false)("closeOnEscape", ctx_r1.closeOnEscape());
    \u0275\u0275advance(2);
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep())("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
  }
}
var WizardComponent = class _WizardComponent {
  stepper;
  // Input properties
  steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : []);
  visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  header = input("Wizard", ...ngDevMode ? [{ debugName: "header" }] : []);
  linearProgression = input(true, ...ngDevMode ? [{ debugName: "linearProgression" }] : []);
  showFooterButtons = input(true, ...ngDevMode ? [{ debugName: "showFooterButtons" }] : []);
  closeOnEscape = input(true, ...ngDevMode ? [{ debugName: "closeOnEscape" }] : []);
  useWizardButtonsOnly = input(false, ...ngDevMode ? [{ debugName: "useWizardButtonsOnly" }] : []);
  showSteps = input(true, ...ngDevMode ? [{ debugName: "showSteps" }] : []);
  contentOnly = input(false, ...ngDevMode ? [{ debugName: "contentOnly" }] : []);
  loading = model(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  // Output properties
  visibleChange = output();
  onCancel = output();
  complete = output();
  stepChange = output();
  // Component state
  currentStep = model(1, ...ngDevMode ? [{ debugName: "currentStep" }] : []);
  hideDialog() {
    this.visible.set(false);
    this.visibleChange.emit(false);
  }
  cancelWizard() {
    this.onCancel.emit();
    this.hideDialog();
  }
  onComplete() {
    if (this.steps().length === 0) {
      console.warn("No steps defined in the wizard");
      return;
    }
    this.complete.emit(this.steps());
    this.hideDialog();
  }
  test() {
    this.loading.set(true);
  }
  onStepComplete() {
    this.onComplete();
  }
  onStepChange(step) {
    this.currentStep.set(step);
    this.stepChange.emit(step);
  }
  isLastStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep() === Math.max(...this.steps().map((s2) => s2.value));
  }
  isFirstStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep() === Math.min(...this.steps().map((s2) => s2.value));
  }
  // Methods for footer buttons
  async goNext() {
    const currentStepData = this.steps().find((s2) => s2.value === this.currentStep());
    if (currentStepData?.validate) {
      const validationResult = currentStepData.validate();
      if (validationResult instanceof Promise) {
        await validationResult.then((isValid) => {
          if (isValid) {
            this.stepper?.goNext();
          }
        });
      } else if (validationResult) {
        this.stepper?.goNext();
      }
    } else {
      this.stepper?.goNext();
    }
  }
  canGoNext() {
    const currentStepData = this.steps().find((s2) => s2.value === this.currentStep());
    return !this.isLastStep() && !(currentStepData?.disableNext ?? false);
  }
  goBack() {
    this.stepper?.goBack();
  }
  canFinish() {
    return this.isLastStep() && (this.stepper?.canFinish() ?? false);
  }
  getCurrentStep() {
    return this.steps().find((s2) => s2.value === this.currentStep());
  }
  static \u0275fac = function WizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardComponent, selectors: [["app-wizard"]], viewQuery: function WizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(StepperComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
    }
  }, inputs: { steps: [1, "steps"], visible: [1, "visible"], header: [1, "header"], linearProgression: [1, "linearProgression"], showFooterButtons: [1, "showFooterButtons"], closeOnEscape: [1, "closeOnEscape"], useWizardButtonsOnly: [1, "useWizardButtonsOnly"], showSteps: [1, "showSteps"], contentOnly: [1, "contentOnly"], loading: [1, "loading"], currentStep: [1, "currentStep"] }, outputs: { visible: "visibleChange", loading: "loadingChange", visibleChange: "visibleChange", onCancel: "onCancel", complete: "complete", stepChange: "stepChange", currentStep: "currentStepChange" }, decls: 2, vars: 1, consts: [["styleClass", "wizard-dialog", 3, "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], [1, "wizard-content"], [3, "stepChange", "complete", "steps", "currentStepValue", "linearProgression", "showNavButtons", "showSteps", "loading"], [1, "flex", "justify-end", "gap-2", "w-full", "mt-3"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "disabled"], ["label", "Finish", "icon", "pi pi-check", "severity", "primary", 3, "disabled", "loading"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "disabled"], ["label", "Finish", "icon", "pi pi-check", "severity", "primary", 3, "onClick", "disabled", "loading"], ["styleClass", "wizard-dialog", 3, "onHide", "visibleChange", "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], ["pTemplate", "footer"], [1, "flex", "justify-end", "gap-2", "w-full"]], template: function WizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_0_Template, 3, 7)(1, WizardComponent_Conditional_1_Template, 4, 12, "p-dialog", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.contentOnly() ? 0 : 1);
    }
  }, dependencies: [CommonModule, DialogModule, Dialog, PrimeTemplate, ButtonModule, Button, StepperComponent], styles: ["\n\n[_nghost-%COMP%]     .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 90vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]     .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 90vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardComponent, [{
    type: Component,
    args: [{ selector: "app-wizard", imports: [CommonModule, DialogModule, ButtonModule, StepperComponent], template: `<!-- If contentOnly is true, don't use p-dialog -->
@if (contentOnly()) {
  <div class="wizard-content">
    <app-stepper
      [steps]="steps()"
      [currentStepValue]="currentStep()"
      [linearProgression]="linearProgression()"
      [showNavButtons]="!useWizardButtonsOnly()"
      [showSteps]="showSteps()"
      [loading]="loading()"
      (stepChange)="onStepChange($event)"
      (complete)="onStepComplete()"
    >
    </app-stepper>
  </div>
  <!-- Footer buttons without dialog -->
  @if (showFooterButtons() && !getCurrentStep()?.hideDefaultFooter) {
    <div class="flex justify-end gap-2 w-full mt-3">
      <p-button
        label="Cancel"
        icon="pi pi-times"
        severity="secondary"
        (onClick)="cancelWizard()"
      ></p-button>
      @if (!isFirstStep()) {
        <p-button
          label="Back"
          icon="pi pi-arrow-left"
          severity="secondary"
          (onClick)="goBack()"
        ></p-button>
      }
      @if (!isLastStep()) {
        <p-button
          label="Next"
          icon="pi pi-arrow-right"
          iconPos="right"
          [disabled]="!canGoNext()"
          (onClick)="goNext()"
        ></p-button>
      }
      @if (isLastStep()) {
        <p-button
          label="Finish"
          icon="pi pi-check"
          severity="primary"
          [disabled]="!canFinish()"
          [loading]="loading()"
          (onClick)="onComplete()"
        ></p-button>
      }
    </div>
  }
} @else {
  <p-dialog
    [visible]="visible()"
    [header]="header()"
    [modal]="true"
    [draggable]="false"
    [resizable]="false"
    [closeOnEscape]="closeOnEscape()"
    (onHide)="hideDialog()"
    (visibleChange)="hideDialog()"
    styleClass="wizard-dialog"
  >
    <!-- Existing dialog content -->
    <div class="wizard-content">
      <app-stepper
        [steps]="steps()"
        [currentStepValue]="currentStep()"
        [linearProgression]="linearProgression()"
        [showNavButtons]="!useWizardButtonsOnly()"
        [showSteps]="showSteps()"
        [loading]="loading()"
        (stepChange)="onStepChange($event)"
        (complete)="onStepComplete()"
      >
      </app-stepper>
    </div>
    <ng-template pTemplate="footer">
      <!-- Existing footer buttons -->
      @if (showFooterButtons() && !getCurrentStep()?.hideDefaultFooter) {
        <div class="flex justify-end gap-2 w-full">
          <p-button
            label="Cancel"
            icon="pi pi-times"
            severity="secondary"
            (onClick)="cancelWizard()"
          ></p-button>
          @if (!isFirstStep()) {
            <p-button
              label="Back"
              icon="pi pi-arrow-left"
              severity="secondary"
              (onClick)="goBack()"
            ></p-button>
          }
          @if (!isLastStep()) {
            <p-button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              [disabled]="!canGoNext()"
              (onClick)="goNext()"
            ></p-button>
          }
          @if (isLastStep()) {
            <p-button
              label="Finish"
              icon="pi pi-check"
              severity="primary"
              [disabled]="!canFinish()"
              [loading]="loading()"
              (onClick)="onComplete()"
            ></p-button>
          }
        </div>
      }
    </ng-template>
  </p-dialog>
}

<!-- Original dialog version -->
`, styles: ["/* src/app/shared/components/wizard/wizard.component.scss */\n:host ::ng-deep .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 90vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n:host ::ng-deep .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n:host ::ng-deep .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content {\n  height: auto;\n  max-height: 90vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=wizard.component.css.map */\n"] }]
  }], null, { stepper: [{
    type: ViewChild,
    args: [StepperComponent]
  }], steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }, { type: Output, args: ["visibleChange"] }], header: [{ type: Input, args: [{ isSignal: true, alias: "header", required: false }] }], linearProgression: [{ type: Input, args: [{ isSignal: true, alias: "linearProgression", required: false }] }], showFooterButtons: [{ type: Input, args: [{ isSignal: true, alias: "showFooterButtons", required: false }] }], closeOnEscape: [{ type: Input, args: [{ isSignal: true, alias: "closeOnEscape", required: false }] }], useWizardButtonsOnly: [{ type: Input, args: [{ isSignal: true, alias: "useWizardButtonsOnly", required: false }] }], showSteps: [{ type: Input, args: [{ isSignal: true, alias: "showSteps", required: false }] }], contentOnly: [{ type: Input, args: [{ isSignal: true, alias: "contentOnly", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: Output, args: ["loadingChange"] }], visibleChange: [{ type: Output, args: ["visibleChange"] }], onCancel: [{ type: Output, args: ["onCancel"] }], complete: [{ type: Output, args: ["complete"] }], stepChange: [{ type: Output, args: ["stepChange"] }], currentStep: [{ type: Input, args: [{ isSignal: true, alias: "currentStep", required: false }] }, { type: Output, args: ["currentStepChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardComponent, { className: "WizardComponent", filePath: "src/app/shared/components/wizard/wizard.component.ts", lineNumber: 14 });
})();

export {
  WizardComponent
};
//# sourceMappingURL=chunk-NDSQJJRI.js.map
