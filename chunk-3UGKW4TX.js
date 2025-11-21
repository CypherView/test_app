import {
  Paginator,
  PaginatorModule
} from "./chunk-YCKIQFCZ.js";
import {
  Dialog
} from "./chunk-OLHY7NIS.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
  ConfirmEventType,
  ConfirmationService,
  FilterService,
  Footer,
  Header,
  PARENT_INSTANCE,
  PrimeTemplate,
  Q,
  Ripple,
  SharedModule,
  SpinnerIcon,
  TranslationKeys,
  _t,
  bt,
  p,
  s2 as s,
  transformToBoolean,
  z
} from "./chunk-Z7LK2P7R.js";
import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-H6GBOP4J.js";
import {
  CommonModule,
  MeasurementDateTimeService,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  SlicePipe,
  constructFrom,
  enUS,
  getDefaultOptions,
  getTimezoneOffsetInMilliseconds,
  isValid,
  minutesInDay,
  minutesInMonth,
  normalizeDates,
  toDate
} from "./chunk-EKFQUTQC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-LS7G26BK.js";

// node_modules/@primeuix/styles/dist/accordion/index.mjs
var style2 = "\n    .p-accordionpanel {\n        display: flex;\n        flex-direction: column;\n        border-style: solid;\n        border-width: dt('accordion.panel.border.width');\n        border-color: dt('accordion.panel.border.color');\n    }\n\n    .p-accordionheader {\n        all: unset;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('accordion.header.padding');\n        color: dt('accordion.header.color');\n        background: dt('accordion.header.background');\n        border-style: solid;\n        border-width: dt('accordion.header.border.width');\n        border-color: dt('accordion.header.border.color');\n        font-weight: dt('accordion.header.font.weight');\n        border-radius: dt('accordion.header.border.radius');\n        transition:\n            background dt('accordion.transition.duration'),\n            color dt('accordion.transition.duration'),\n            outline-color dt('accordion.transition.duration'),\n            box-shadow dt('accordion.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-accordionpanel:first-child > .p-accordionheader {\n        border-width: dt('accordion.header.first.border.width');\n        border-start-start-radius: dt('accordion.header.first.top.border.radius');\n        border-start-end-radius: dt('accordion.header.first.top.border.radius');\n    }\n\n    .p-accordionpanel:last-child > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');\n    }\n\n    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');\n    }\n\n    .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n        box-shadow: dt('accordion.header.focus.ring.shadow');\n        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');\n        outline-offset: dt('accordion.header.focus.ring.offset');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n        background: dt('accordion.header.hover.background');\n        color: dt('accordion.header.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n        background: dt('accordion.header.active.background');\n        color: dt('accordion.header.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n        background: dt('accordion.header.active.hover.background');\n        color: dt('accordion.header.active.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.hover.color');\n    }\n\n    .p-accordioncontent-content {\n        border-style: solid;\n        border-width: dt('accordion.content.border.width');\n        border-color: dt('accordion.content.border.color');\n        background-color: dt('accordion.content.background');\n        color: dt('accordion.content.color');\n        padding: dt('accordion.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c0 = ["*"];
var _c1 = ["toggleicon"];
var _c2 = (a0) => ({
  active: a0
});
function AccordionHeader_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function AccordionHeader_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_Template, 1, 0, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.toggleicon)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.active()));
  }
}
function AccordionHeader_Conditional_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.collapseIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("toggleicon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_0_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template, 1, 4, "svg", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.collapseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.collapseIcon);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.expandIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_1_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.expandIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.expandIcon);
  }
}
function AccordionHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_2_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AccordionHeader_Conditional_2_ng_container_1_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.active());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.active());
  }
}
var _c3 = (a0) => ({
  transitionParams: a0
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  value: "hidden",
  params: a0
});
var style3 = (
  /*css*/
  `
    ${style2}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader.p-ripple {
        overflow: hidden;
        position: relative;
    }
`
);
var classes = {
  root: "p-accordion p-component",
  panel: ({
    instance
  }) => ["p-accordionpanel", {
    "p-accordionpanel-active": instance.active(),
    "p-disabled": instance.disabled()
  }],
  header: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon",
  contentContainer: "p-accordioncontent",
  content: "p-accordioncontent-content"
};
var AccordionStyle = class _AccordionStyle extends BaseStyle {
  name = "accordion";
  style = style3;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionStyle_BaseFactory;
    return function AccordionStyle_Factory(__ngFactoryType__) {
      return (\u0275AccordionStyle_BaseFactory || (\u0275AccordionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionStyle)))(__ngFactoryType__ || _AccordionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AccordionStyle,
    factory: _AccordionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionStyle, [{
    type: Injectable
  }], null, null);
})();
var AccordionClasses;
(function(AccordionClasses2) {
  AccordionClasses2["root"] = "p-accordion";
  AccordionClasses2["contentwrapper"] = "p-accordioncontent";
  AccordionClasses2["content"] = "p-accordioncontent-content";
  AccordionClasses2["header"] = "p-accordionheader";
  AccordionClasses2["toggleicon"] = "p-accordionheader-toggle-icon";
  AccordionClasses2["panel"] = "p-accordionpanel";
})(AccordionClasses || (AccordionClasses = {}));
var ACCORDION_PANEL_INSTANCE = new InjectionToken("ACCORDION_PANEL_INSTANCE");
var ACCORDION_HEADER_INSTANCE = new InjectionToken("ACCORDION_HEADER_INSTANCE");
var ACCORDION_CONTENT_INSTANCE = new InjectionToken("ACCORDION_CONTENT_INSTANCE");
var ACCORDION_INSTANCE = new InjectionToken("ACCORDION_INSTANCE");
var AccordionPanel = class _AccordionPanel extends BaseComponent {
  $pcAccordionPanel = inject(ACCORDION_PANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * Disables the tab when enabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  active = computed(() => this.pcAccordion.multiple() ? this.valueEquals(this.pcAccordion.value(), this.value()) : this.pcAccordion.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  valueEquals(currentValue, value) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(value);
    }
    return currentValue === value;
  }
  _componentStyle = inject(AccordionStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionPanel_BaseFactory;
    return function AccordionPanel_Factory(__ngFactoryType__) {
      return (\u0275AccordionPanel_BaseFactory || (\u0275AccordionPanel_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionPanel)))(__ngFactoryType__ || _AccordionPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionPanel,
    selectors: [["p-accordion-panel"], ["p-accordionpanel"]],
    hostVars: 4,
    hostBindings: function AccordionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-disabled", ctx.disabled())("data-p-active", ctx.active());
        \u0275\u0275classMap(ctx.cx("panel"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_PANEL_INSTANCE,
      useExisting: _AccordionPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AccordionPanel_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanel, [{
    type: Component,
    args: [{
      selector: "p-accordion-panel, p-accordionpanel",
      imports: [CommonModule, BindModule],
      standalone: true,
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("panel")',
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()"
      },
      hostDirectives: [Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_PANEL_INSTANCE,
        useExisting: AccordionPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionPanel
      }]
    }]
  }], null, null);
})();
var AccordionHeader = class _AccordionHeader extends BaseComponent {
  $pcAccordionHeader = inject(ACCORDION_HEADER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  id = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  disabled = computed(() => this.pcAccordionPanel.disabled(), ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  ariaControls = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  /**
   * Toggle icon template.
   * @type {TemplateRef<AccordionToggleIconTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #toggleicon let-active="active"> </ng-template>
   * ```
   * @see {@link AccordionToggleIconTemplateContext}
   * @group Templates
   */
  toggleicon;
  onClick(event) {
    if (this.disabled()) {
      return;
    }
    const wasActive = this.active();
    this.changeActiveValue();
    const isActive = this.active();
    const index = this.pcAccordionPanel.value();
    if (!wasActive && isActive) {
      this.pcAccordion.onOpen.emit({
        originalEvent: event,
        index
      });
    } else if (wasActive && !isActive) {
      this.pcAccordion.onClose.emit({
        originalEvent: event,
        index
      });
    }
  }
  onFocus() {
    if (!this.disabled() && this.pcAccordion.selectOnFocus()) {
      this.changeActiveValue();
    }
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.arrowDownKey(event);
        break;
      case "ArrowUp":
        this.arrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  _componentStyle = inject(AccordionStyle);
  changeActiveValue() {
    this.pcAccordion.updateValue(this.pcAccordionPanel.value());
  }
  findPanel(headerElement) {
    return headerElement?.closest('[data-pc-name="accordionpanel"]');
  }
  findHeader(panelElement) {
    return z(panelElement, '[data-pc-name="accordionheader"]');
  }
  findNextPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.nextElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
  }
  findPrevPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.previousElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
  }
  findFirstPanel() {
    return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild, true);
  }
  findLastPanel() {
    return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild, true);
  }
  changeFocusedPanel(event, element) {
    bt(element);
  }
  arrowDownKey(event) {
    const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
    nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
    event.preventDefault();
  }
  arrowUpKey(event) {
    const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
    prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstPanel = this.findFirstPanel();
    this.changeFocusedPanel(event, firstPanel);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastPanel = this.findLastPanel();
    this.changeFocusedPanel(event, lastPanel);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.disabled()) {
      this.changeActiveValue();
    }
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionHeader_BaseFactory;
    return function AccordionHeader_Factory(__ngFactoryType__) {
      return (\u0275AccordionHeader_BaseFactory || (\u0275AccordionHeader_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionHeader)))(__ngFactoryType__ || _AccordionHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionHeader,
    selectors: [["p-accordion-header"], ["p-accordionheader"]],
    contentQueries: function AccordionHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.toggleicon = _t2.first);
      }
    },
    hostVars: 12,
    hostBindings: function AccordionHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AccordionHeader_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("focus", function AccordionHeader_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("keydown", function AccordionHeader_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("aria-expanded", ctx.active())("aria-controls", ctx.ariaControls())("aria-disabled", ctx.disabled())("role", "button")("tabindex", ctx.disabled() ? "-1" : "0")("data-p-active", ctx.active())("data-p-disabled", ctx.disabled());
        \u0275\u0275classMap(ctx.cx("header"));
        \u0275\u0275styleProp("user-select", "none");
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_HEADER_INSTANCE,
      useExisting: _AccordionHeader
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionHeader
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"]],
    template: function AccordionHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, AccordionHeader_Conditional_1_Template, 1, 4)(2, AccordionHeader_Conditional_2_Template, 2, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggleicon ? 1 : 2);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeader, [{
    type: Component,
    args: [{
      selector: "p-accordion-header, p-accordionheader",
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, BindModule],
      standalone: true,
      template: `
        <ng-content />
        @if (toggleicon) {
            <ng-template *ngTemplateOutlet="toggleicon; context: { active: active() }"></ng-template>
        } @else {
            <ng-container *ngIf="active()">
                <span *ngIf="pcAccordion.collapseIcon" [class]="cn(cx('toggleicon'), pcAccordion.collapseIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-up" *ngIf="!pcAccordion.collapseIcon" [class]="cx('toggleicon')" [pBind]="ptm('toggleicon')" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-container *ngIf="!active()">
                <span *ngIf="pcAccordion.expandIcon" [class]="cn(cx('toggleicon'), pcAccordion.expandIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-down" *ngIf="!pcAccordion.expandIcon" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')" />
            </ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('header')",
        "[attr.id]": "id()",
        "[attr.aria-expanded]": "active()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.role]": '"button"',
        "[attr.tabindex]": 'disabled()?"-1":"0"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[style.user-select]": '"none"'
      },
      hostDirectives: [Ripple, Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_HEADER_INSTANCE,
        useExisting: AccordionHeader
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionHeader
      }]
    }]
  }], null, {
    toggleicon: [{
      type: ContentChild,
      args: ["toggleicon"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionContent = class _AccordionContent extends BaseComponent {
  $pcAccordionContent = inject(ACCORDION_CONTENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  ariaLabelledby = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaLabelledby"
  }] : []);
  id = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  ptParams = computed(() => ({
    context: this.active()
  }), ...ngDevMode ? [{
    debugName: "ptParams"
  }] : []);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionContent_BaseFactory;
    return function AccordionContent_Factory(__ngFactoryType__) {
      return (\u0275AccordionContent_BaseFactory || (\u0275AccordionContent_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionContent)))(__ngFactoryType__ || _AccordionContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionContent,
    selectors: [["p-accordion-content"], ["p-accordioncontent"]],
    hostVars: 6,
    hostBindings: function AccordionContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("role", "region")("data-p-active", ctx.active())("aria-labelledby", ctx.ariaLabelledby());
        \u0275\u0275classMap(ctx.cx("contentContainer"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_CONTENT_INSTANCE,
      useExisting: _AccordionContent
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionContent
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 12,
    consts: [[3, "pBind"]],
    template: function AccordionContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("@content", ctx.active() ? \u0275\u0275pureFunction1(6, _c4, \u0275\u0275pureFunction1(4, _c3, ctx.pcAccordion.transitionOptions)) : \u0275\u0275pureFunction1(10, _c5, \u0275\u0275pureFunction1(8, _c3, ctx.pcAccordion.transitionOptions)))("pBind", ctx.ptm("content", ctx.ptParams()));
      }
    },
    dependencies: [CommonModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("content", [state("hidden", style({
        height: "0",
        // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        borderBlockStartWidth: "0",
        borderBlockEndWidth: "0",
        //
        visibility: "hidden"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionContent, [{
    type: Component,
    args: [{
      selector: "p-accordion-content, p-accordioncontent",
      imports: [CommonModule, BindModule],
      standalone: true,
      template: `<div
        [class]="cx('content')"
        [@content]="active() ? { value: 'visible', params: { transitionParams: pcAccordion.transitionOptions } } : { value: 'hidden', params: { transitionParams: pcAccordion.transitionOptions } }"
        [pBind]="ptm('content', ptParams())"
    >
        <ng-content />
    </div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("contentContainer")',
        "[attr.id]": "id()",
        "[attr.role]": '"region"',
        "[attr.data-p-active]": "active()",
        "[attr.aria-labelledby]": "ariaLabelledby()"
      },
      hostDirectives: [Bind],
      animations: [trigger("content", [state("hidden", style({
        height: "0",
        // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        borderBlockStartWidth: "0",
        borderBlockEndWidth: "0",
        //
        visibility: "hidden"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      providers: [AccordionStyle, {
        provide: ACCORDION_CONTENT_INSTANCE,
        useExisting: AccordionContent
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionContent
      }]
    }]
  }], null, null);
})();
var Accordion = class _Accordion extends BaseComponent {
  $pcAccordion = inject(ACCORDION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   * @group Props
   */
  multiple = input(false, ...ngDevMode ? [{
    debugName: "multiple",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * When enabled, the focused tab is activated.
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, ...ngDevMode ? [{
    debugName: "selectOnFocus",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  onTabArrowDownKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabArrowUpKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      bt(element);
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = z(nextTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = z(prevTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.el.nativeElement.lastElementChild;
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateValue(value) {
    const currentValue = this.value();
    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      if (index !== -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      this.value.set(newValue);
    } else {
      if (currentValue === value) {
        this.value.set(void 0);
      } else {
        this.value.set(value);
      }
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Accordion_BaseFactory;
    return function Accordion_Factory(__ngFactoryType__) {
      return (\u0275Accordion_BaseFactory || (\u0275Accordion_BaseFactory = \u0275\u0275getInheritedFactory(_Accordion)))(__ngFactoryType__ || _Accordion);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Accordion,
    selectors: [["p-accordion"]],
    hostVars: 2,
    hostBindings: function Accordion_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function Accordion_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [1, "value"],
      multiple: [1, "multiple"],
      styleClass: "styleClass",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      selectOnFocus: [1, "selectOnFocus"],
      transitionOptions: "transitionOptions"
    },
    outputs: {
      value: "valueChange",
      onClose: "onClose",
      onOpen: "onOpen"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_INSTANCE,
      useExisting: _Accordion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Accordion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Accordion_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content /> `,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [AccordionStyle, {
        provide: ACCORDION_INSTANCE,
        useExisting: Accordion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Accordion
      }]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static \u0275fac = function AccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AccordionModule,
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
    exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
      exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/dataview/index.mjs
var style4 = "\n    .p-dataview {\n        position: relative;\n        border-color: dt('dataview.border.color');\n        border-width: dt('dataview.border.width');\n        border-style: solid;\n        border-radius: dt('dataview.border.radius');\n        padding: dt('dataview.padding');\n    }\n\n    .p-dataview-header {\n        background: dt('dataview.header.background');\n        color: dt('dataview.header.color');\n        border-color: dt('dataview.header.border.color');\n        border-width: dt('dataview.header.border.width');\n        border-style: solid;\n        padding: dt('dataview.header.padding');\n        border-radius: dt('dataview.header.border.radius');\n    }\n\n    .p-dataview-content {\n        background: dt('dataview.content.background');\n        border-color: dt('dataview.content.border.color');\n        border-width: dt('dataview.content.border.width');\n        border-style: solid;\n        color: dt('dataview.content.color');\n        padding: dt('dataview.content.padding');\n        border-radius: dt('dataview.content.border.radius');\n    }\n\n    .p-dataview-footer {\n        background: dt('dataview.footer.background');\n        color: dt('dataview.footer.color');\n        border-color: dt('dataview.footer.border.color');\n        border-width: dt('dataview.footer.border.width');\n        border-style: solid;\n        padding: dt('dataview.footer.padding');\n        border-radius: dt('dataview.footer.border.radius');\n    }\n\n    .p-dataview-paginator-top {\n        border-width: dt('dataview.paginator.top.border.width');\n        border-color: dt('dataview.paginator.top.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-paginator-bottom {\n        border-width: dt('dataview.paginator.bottom.border.width');\n        border-color: dt('dataview.paginator.bottom.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-loading-overlay {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n    }\n";

// node_modules/primeng/fesm2022/primeng-dataview.mjs
var _c02 = ["list"];
var _c12 = ["grid"];
var _c22 = ["header"];
var _c32 = ["emptymessage"];
var _c42 = ["footer"];
var _c52 = ["paginatorleft"];
var _c6 = ["paginatorright"];
var _c7 = ["paginatordropdownitem"];
var _c8 = ["loadingicon"];
var _c9 = ["listicon"];
var _c10 = ["gridicon"];
var _c11 = [[["p-header"]], [["p-footer"]]];
var _c122 = ["p-header", "p-footer"];
var _c13 = () => ({
  position: "top"
});
var _c14 = (a0) => ({
  $implicit: a0
});
var _c15 = () => ({
  position: "bottom"
});
function DataView_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin" + ctx_r0.loadingIcon));
  }
}
function DataView_Conditional_0_Conditional_3_2_ng_template_0_Template(rf, ctx) {
}
function DataView_Conditional_0_Conditional_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_Conditional_0_Conditional_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DataView_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 5);
    \u0275\u0275template(2, DataView_Conditional_0_Conditional_3_2_Template, 1, 0, null, 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"))("spin", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingicon);
  }
}
function DataView_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 3);
    \u0275\u0275conditionalCreate(2, DataView_Conditional_0_Conditional_2_Template, 1, 2, "i", 4)(3, DataView_Conditional_0_Conditional_3_Template, 3, 5, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("loading"));
    \u0275\u0275property("pBind", ctx_r0.ptm("loading"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("loadingOverlay"));
    \u0275\u0275property("pBind", ctx_r0.ptm("loadingOverlay"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingIcon ? 2 : 3);
  }
}
function DataView_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, DataView_Conditional_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function DataView_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 7);
    \u0275\u0275listener("onPageChange", function DataView_Conditional_2_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cn(ctx_r0.cx("pcPaginator", \u0275\u0275pureFunction0(18, _c13)), ctx_r0.paginatorStyleClass))("pt", ctx_r0.ptm("pcPaginator"));
  }
}
function DataView_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 8);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.listTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c14, ctx_r0.paginator ? \u0275\u0275pipeBind3(1, 2, ctx_r0.filteredValue || ctx_r0.value, ctx_r0.lazy ? 0 : ctx_r0.first, (ctx_r0.lazy ? 0 : ctx_r0.first) + ctx_r0.rows) : ctx_r0.filteredValue || ctx_r0.value));
  }
}
function DataView_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataView_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 8);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.gridTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c14, ctx_r0.paginator ? \u0275\u0275pipeBind3(1, 2, ctx_r0.filteredValue || ctx_r0.value, ctx_r0.lazy ? 0 : ctx_r0.first, (ctx_r0.lazy ? 0 : ctx_r0.first) + ctx_r0.rows) : ctx_r0.filteredValue || ctx_r0.value));
  }
}
function DataView_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyMessageLabel, " ");
  }
}
function DataView_Conditional_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 0);
  }
}
function DataView_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, DataView_Conditional_6_ng_container_1_Template, 2, 1, "ng-container", 9)(2, DataView_Conditional_6_ng_container_2_Template, 2, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("emptyMessage"));
    \u0275\u0275property("pBind", ctx_r0.ptm("emptyMessage"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.emptymessageTemplate)("ngIfElse", ctx_r0.empty);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.emptymessageTemplate);
  }
}
function DataView_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 7);
    \u0275\u0275listener("onPageChange", function DataView_Conditional_7_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.paginate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cn(ctx_r0.cx("pcPaginator", \u0275\u0275pureFunction0(18, _c15)), ctx_r0.paginatorStyleClass))("pt", ctx_r0.ptm("pcPaginator"));
  }
}
function DataView_Conditional_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DataView_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, DataView_Conditional_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("footer"));
    \u0275\u0275property("pBind", ctx_r0.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-dataview p-component", {
    "p-dataview-list": instance.layout === "list",
    "p-dataview-grid": instance.layout === "grid"
  }],
  header: "p-dataview-header",
  loading: "p-dataview-loading",
  loadingOverlay: "p-dataview-loading-overlay p-overlay-mask",
  loadingIcon: "p-dataview-loading-icon",
  pcPaginator: ({
    position
  }) => "p-dataview-paginator-" + position,
  content: "p-dataview-content",
  emptyMessage: "p-dataview-empty-message",
  footer: "p-dataview-footer"
};
var DataViewStyle = class _DataViewStyle extends BaseStyle {
  name = "dataview";
  style = style4;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DataViewStyle_BaseFactory;
    return function DataViewStyle_Factory(__ngFactoryType__) {
      return (\u0275DataViewStyle_BaseFactory || (\u0275DataViewStyle_BaseFactory = \u0275\u0275getInheritedFactory(_DataViewStyle)))(__ngFactoryType__ || _DataViewStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DataViewStyle,
    factory: _DataViewStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewStyle, [{
    type: Injectable
  }], null, null);
})();
var DataViewClasses;
(function(DataViewClasses2) {
  DataViewClasses2["root"] = "p-dataview";
  DataViewClasses2["header"] = "p-dataview-header";
  DataViewClasses2["loading"] = "p-dataview-loading";
  DataViewClasses2["loadingOverlay"] = "p-dataview-loading-overlay";
  DataViewClasses2["loadingIcon"] = "p-dataview-loading-icon";
  DataViewClasses2["pcPaginator"] = "p-dataview-paginator-[position]";
  DataViewClasses2["content"] = "p-dataview-content";
  DataViewClasses2["emptyMessage"] = "p-dataview-empty-message";
  DataViewClasses2["footer"] = "p-dataview-footer";
})(DataViewClasses || (DataViewClasses = {}));
var DATAVIEW_INSTANCE = new InjectionToken("DATAVIEW_INSTANCE");
var DataView = class _DataView extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcDataView = inject(DATAVIEW_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of rows to display per page.
   * @group Props
   */
  rows;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Position of the paginator.
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the grid.
   * @group Props
   */
  gridStyleClass = "";
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * Comma separated list of fields in the object graph to search against.
   * @group Props
   */
  filterBy;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
  /**
   * Property name of data to use in sorting by default.
   * @group Props
   */
  sortField;
  /**
   * Order to sort the data by default.
   * @group Props
   */
  sortOrder;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Defines the layout mode.
   * @group Props
   */
  layout = "list";
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {DataViewLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {DataViewPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when sorting occurs.
   * @param {DataViewSortEvent} event - Custom sort event.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when changing layout.
   * @param {DataViewLayoutChangeEvent} event - Custom layout change event.
   * @group Emits
   */
  onChangeLayout = new EventEmitter();
  /**
   * Template for the list layout.
   * @group Templates
   */
  listTemplate;
  /**
   * Template for grid layout.
   * @group Templates
   */
  gridTemplate;
  /**
   * Template for the header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for the empty message section.
   * @group Templates
   */
  emptymessageTemplate;
  /**
   * Template for the footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Template for the left side of paginator.
   * @group Templates
   */
  paginatorleft;
  /**r* Template for the right side of paginator.
   * @group Templates
   */
  paginatorright;
  /**
   * Template for items in paginator dropdown.
   * @group Templates
   */
  paginatordropdownitem;
  /**
   * Template for loading icon.
   * @group Templates
   */
  loadingicon;
  /**
   * Template for list icon.
   * @group Templates
   */
  listicon;
  /**
   * Template for grid icon.
   * @group Templates
   */
  gridicon;
  header;
  footer;
  _value;
  filteredValue;
  filterValue;
  initialized;
  _layout = "list";
  translationSubscription;
  _componentStyle = inject(DataViewStyle);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  filterService = inject(FilterService);
  onInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  onAfterViewInit() {
  }
  onChanges(simpleChanges) {
    if (simpleChanges.layout && !simpleChanges.layout.firstChange) {
      this.onChangeLayout.emit({
        layout: simpleChanges.layout.currentValue
      });
    }
    if (simpleChanges.value) {
      this._value = simpleChanges.value.currentValue;
      this.updateTotalRecords();
      if (!this.lazy && this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    if (simpleChanges.sortField || simpleChanges.sortOrder) {
      if (!this.lazy || this.initialized) {
        this.sort();
      }
    }
  }
  updateTotalRecords() {
    this.totalRecords = this.lazy ? this.totalRecords : this._value ? this._value.length : 0;
  }
  paginate(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
  }
  sort() {
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else if (this.value) {
      this.value.sort((data1, data2) => {
        let value1 = p(data1, this.sortField);
        let value2 = p(data2, this.sortField);
        let result;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
      if (this.hasFilter()) {
        this.filter(this.filterValue);
      }
    }
    this.onSort.emit({
      sortField: this.sortField,
      sortOrder: this.sortOrder
    });
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder
    };
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  filter(filter, filterMatchMode = "contains") {
    this.filterValue = filter;
    if (this.value && this.value.length) {
      let searchFields = this.filterBy.split(",");
      this.filteredValue = this.filterService.filter(this.value, searchFields, filter, filterMatchMode, this.filterLocale);
      if (this.filteredValue.length === this.value.length) {
        this.filteredValue = null;
      }
      if (this.paginator) {
        this.first = 0;
        this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
      }
      this.cd.markForCheck();
    }
  }
  hasFilter() {
    return this.filterValue && this.filterValue.trim().length > 0;
  }
  onDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DataView_BaseFactory;
    return function DataView_Factory(__ngFactoryType__) {
      return (\u0275DataView_BaseFactory || (\u0275DataView_BaseFactory = \u0275\u0275getInheritedFactory(_DataView)))(__ngFactoryType__ || _DataView);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _DataView,
    selectors: [["p-dataView"], ["p-dataview"], ["p-data-view"]],
    contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 5);
        \u0275\u0275contentQuery(dirIndex, _c12, 5);
        \u0275\u0275contentQuery(dirIndex, _c22, 5);
        \u0275\u0275contentQuery(dirIndex, _c32, 5);
        \u0275\u0275contentQuery(dirIndex, _c42, 5);
        \u0275\u0275contentQuery(dirIndex, _c52, 5);
        \u0275\u0275contentQuery(dirIndex, _c6, 5);
        \u0275\u0275contentQuery(dirIndex, _c7, 5);
        \u0275\u0275contentQuery(dirIndex, _c8, 5);
        \u0275\u0275contentQuery(dirIndex, _c9, 5);
        \u0275\u0275contentQuery(dirIndex, _c10, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.listTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.gridTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.emptymessageTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.paginatorleft = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.paginatorright = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.paginatordropdownitem = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.loadingicon = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.listicon = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.gridicon = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.header = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footer = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function DataView_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      paginator: [2, "paginator", "paginator", booleanAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      emptyMessage: "emptyMessage",
      styleClass: "styleClass",
      gridStyleClass: "gridStyleClass",
      trackBy: "trackBy",
      filterBy: "filterBy",
      filterLocale: "filterLocale",
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      first: [2, "first", "first", numberAttribute],
      sortField: "sortField",
      sortOrder: [2, "sortOrder", "sortOrder", numberAttribute],
      value: "value",
      layout: "layout"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onPage: "onPage",
      onSort: "onSort",
      onChangeLayout: "onChangeLayout"
    },
    features: [\u0275\u0275ProvidersFeature([DataViewStyle, {
      provide: DATAVIEW_INSTANCE,
      useExisting: _DataView
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _DataView
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c122,
    decls: 9,
    vars: 11,
    consts: [["empty", ""], [3, "pBind", "class"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "appendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "pt"], [3, "pBind"], [3, "class"], ["data-p-icon", "spinner", 3, "pBind", "spin"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "appendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c11);
        \u0275\u0275conditionalCreate(0, DataView_Conditional_0_Template, 4, 7, "div", 1);
        \u0275\u0275conditionalCreate(1, DataView_Conditional_1_Template, 3, 4, "div", 1);
        \u0275\u0275conditionalCreate(2, DataView_Conditional_2_Template, 1, 19, "p-paginator", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, DataView_Conditional_4_Template, 2, 8, "ng-container");
        \u0275\u0275conditionalCreate(5, DataView_Conditional_5_Template, 2, 8, "ng-container");
        \u0275\u0275conditionalCreate(6, DataView_Conditional_6_Template, 3, 6, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, DataView_Conditional_7_Template, 1, 19, "p-paginator", 2);
        \u0275\u0275conditionalCreate(8, DataView_Conditional_8_Template, 3, 4, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.header || ctx.headerTemplate ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both") ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "list" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.layout === "grid" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isEmpty() && !ctx.loading ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both") ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.footer || ctx.footerTemplate ? 8 : -1);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, PaginatorModule, Paginator, SpinnerIcon, SharedModule, Bind, SlicePipe],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataView, [{
    type: Component,
    args: [{
      selector: "p-dataView, p-dataview, p-data-view",
      standalone: true,
      imports: [CommonModule, PaginatorModule, SpinnerIcon, SharedModule, Bind],
      template: `
        @if (loading) {
            <div [pBind]="ptm('loading')" [class]="cx('loading')">
                <div [pBind]="ptm('loadingOverlay')" [class]="cx('loadingOverlay')">
                    @if (loadingIcon) {
                        <i [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)"></i>
                    } @else {
                        <ng-container>
                            <svg [pBind]="ptm('loadingIcon')" data-p-icon="spinner" [spin]="true" [class]="cx('loadingIcon')" />
                            <ng-template *ngTemplateOutlet="loadingicon"></ng-template>
                        </ng-container>
                    }
                </div>
            </div>
        }
        @if (header || headerTemplate) {
            <div [pBind]="ptm('header')" [class]="cx('header')">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
        }
        @if (paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')) {
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                [appendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorleft"
                [templateRight]="paginatorright"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatordropdownitem"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="cn(cx('pcPaginator', { position: 'top' }), paginatorStyleClass)"
                [pt]="ptm('pcPaginator')"
            ></p-paginator>
        }
        <div [pBind]="ptm('content')" [class]="cx('content')">
            @if (layout === 'list') {
                <ng-container
                    *ngTemplateOutlet="
                        listTemplate;
                        context: {
                            $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value
                        }
                    "
                ></ng-container>
            }
            @if (layout === 'grid') {
                <ng-container
                    *ngTemplateOutlet="
                        gridTemplate;
                        context: {
                            $implicit: paginator ? (filteredValue || value | slice: (lazy ? 0 : first) : (lazy ? 0 : first) + rows) : filteredValue || value
                        }
                    "
                ></ng-container>
            }
            @if (isEmpty() && !loading) {
                <div [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')">
                    <ng-container *ngIf="!emptymessageTemplate; else empty">
                        {{ emptyMessageLabel }}
                    </ng-container>
                    <ng-container #empty *ngTemplateOutlet="emptymessageTemplate"></ng-container>
                </div>
            }
        </div>
        @if (paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')) {
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="paginate($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                [appendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [templateLeft]="paginatorleft"
                [templateRight]="paginatorright"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatordropdownitem"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showPageLinks]="showPageLinks"
                [styleClass]="cn(cx('pcPaginator', { position: 'bottom' }), paginatorStyleClass)"
                [pt]="ptm('pcPaginator')"
            ></p-paginator>
        }
        @if (footer || footerTemplate) {
            <div [pBind]="ptm('footer')" [class]="cx('footer')">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DataViewStyle, {
        provide: DATAVIEW_INSTANCE,
        useExisting: DataView
      }, {
        provide: PARENT_INSTANCE,
        useExisting: DataView
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyMessage: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    gridStyleClass: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    first: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onChangeLayout: [{
      type: Output
    }],
    listTemplate: [{
      type: ContentChild,
      args: ["list"]
    }],
    gridTemplate: [{
      type: ContentChild,
      args: ["grid"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header"]
    }],
    emptymessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer"]
    }],
    paginatorleft: [{
      type: ContentChild,
      args: ["paginatorleft"]
    }],
    paginatorright: [{
      type: ContentChild,
      args: ["paginatorright"]
    }],
    paginatordropdownitem: [{
      type: ContentChild,
      args: ["paginatordropdownitem"]
    }],
    loadingicon: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    listicon: [{
      type: ContentChild,
      args: ["listicon"]
    }],
    gridicon: [{
      type: ContentChild,
      args: ["gridicon"]
    }],
    header: [{
      type: ContentChild,
      args: [Header]
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }]
  });
})();
var DataViewModule = class _DataViewModule {
  static \u0275fac = function DataViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataViewModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DataViewModule,
    imports: [DataView, SharedModule],
    exports: [DataView, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [DataView, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewModule, [{
    type: NgModule,
    args: [{
      imports: [DataView, SharedModule],
      exports: [DataView, SharedModule]
    }]
  }], null, null);
})();

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/formatDistance.js
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// node_modules/date-fns/formatDistanceToNow.js
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}

// src/app/shared/pipes/time-ago.pipe.ts
var TimeAgoPipe = class _TimeAgoPipe {
  measurementDateTimeService = inject(MeasurementDateTimeService);
  transform(value, _timestamp) {
    if (!value)
      return "";
    try {
      const utcDate = this.measurementDateTimeService.createDateAssumingUtc(value);
      if (!isValid(utcDate)) {
        return "Invalid date";
      }
      return formatDistanceToNow(utcDate, { addSuffix: true });
    } catch (error) {
      console.error("Error in TimeAgoPipe:", error);
      return "Invalid date";
    }
  }
  static \u0275fac = function TimeAgoPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeAgoPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "timeAgo", type: _TimeAgoPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeAgoPipe, [{
    type: Pipe,
    args: [{
      name: "timeAgo",
      pure: true
    }]
  }], null, null);
})();

// src/app/shared/services/utils.service.ts
var UtilsService = class _UtilsService {
  constructor() {
  }
  getLanguages() {
    return [
      { id: "en-us", name: "English" },
      { id: "fr", name: "Fran\xE7ais" },
      { id: "es", name: "Espa\xF1ol" },
      { id: "pt", name: "Portugu\xEAs" },
      { id: "nl", name: "Nederlands" },
      { id: "de", name: "Deutsche" },
      { id: "it", name: "Italiano" }
    ];
  }
  static \u0275fac = function UtilsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilsService, factory: _UtilsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style5 = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c03 = ["header"];
var _c16 = ["footer"];
var _c23 = ["rejecticon"];
var _c33 = ["accepticon"];
var _c43 = ["message"];
var _c53 = ["icon"];
var _c62 = ["headless"];
var _c72 = [[["p-footer"]]];
var _c82 = ["p-footer"];
var _c92 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c102 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c92, ctx_r1.confirmation, ctx_r1.onAccept.bind(ctx_r1), ctx_r1.onReject.bind(ctx_r1)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.option("icon"));
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"))("pBind", ctx_r1.ptm("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 4, "i", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.messageTemplate || ctx_r1._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c102, ctx_r1.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("message"));
    \u0275\u0275property("pBind", ctx_r1.ptm("message"))("innerHTML", ctx_r1.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 9);
    \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 4, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.iconTemplate || ctx_r1._iconTemplate ? 0 : !ctx_r1.iconTemplate && !ctx_r1._iconTemplate && !ctx_r1._messageTemplate && !ctx_r1.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.messageTemplate || ctx_r1._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.headerTemplate || ctx_r1._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("rejectIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("pcRejectButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.rejectIcon && !ctx_r1.rejectIconTemplate && !ctx_r1._rejectIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcRejectButton"))("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("acceptIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("pcAcceptButton")["icon"]);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template, 1, 3, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.acceptIcon && !ctx_r1._acceptIconTemplate && !ctx_r1.acceptIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pt", ctx_r1.ptm("pcAcceptButton"))("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 5, "p-button", 14)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 5, "p-button", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1);
    \u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && !ctx_r1._footerTemplate ? 1 : -1);
  }
}
var classes3 = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  style = style5;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var CONFIRMDIALOG_INSTANCE = new InjectionToken("CONFIRMDIALOG_INSTANCE");
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  $pcConfirmDialog = inject(CONFIRMDIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
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
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = true;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  headlessTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = s("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  onInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    if (!this.dialog?.el?.nativeElement) return;
    switch (this.option("defaultFocus")) {
      case "accept":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return z(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      _t(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.unsubscribeConfirmationEvents();
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    if (this.confirmation) {
      this.confirmation.acceptEvent?.unsubscribe();
      this.confirmation.rejectEvent?.unsubscribe();
    }
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.getAcceptButtonProps()?.label || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.getRejectButtonProps()?.label || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, _c33, 4);
        \u0275\u0275contentQuery(dirIndex, _c43, 4);
        \u0275\u0275contentQuery(dirIndex, _c53, 4);
        \u0275\u0275contentQuery(dirIndex, _c62, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footer = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: "appendTo",
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      modal: [2, "modal", "modal", booleanAttribute],
      visible: "visible",
      position: "position",
      draggable: [2, "draggable", "draggable", booleanAttribute]
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle, {
      provide: CONFIRMDIALOG_INSTANCE,
      useExisting: _ConfirmDialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ConfirmDialog
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c82,
    decls: 6,
    vars: 18,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["icon", ""], ["role", "alertdialog", 3, "visibleChange", "pt", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable", "baseZIndex", "autoZIndex", "maskStyleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", "pBind"], [3, "class", "pBind", "innerHTML"], [3, "ngClass", "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind", "innerHTML"], [3, "pt", "label", "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "pt", "label", "styleClass", "ariaLabel", "buttonProps"], [3, "class", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c72);
        \u0275\u0275elementStart(0, "p-dialog", 6, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        });
        \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
        \u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("pt", ctx.pt)("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass))("modal", ctx.option("modal"))("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.option("appendTo"))("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("maskStyleClass", ctx.cn(ctx.cx("mask"), ctx.maskStyleClass));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule, Bind],
      template: `
        <p-dialog
            [pt]="pt"
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" [pBind]="ptm('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        [pt]="ptm('pcRejectButton')"
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [pt]="ptm('pcAcceptButton')"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle, {
        provide: CONFIRMDIALOG_INSTANCE,
        useExisting: ConfirmDialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ConfirmDialog
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
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
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    modal: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
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
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule,
    imports: [ConfirmDialog, SharedModule],
    exports: [ConfirmDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

export {
  compareAsc,
  getRoundingMethod,
  differenceInMilliseconds,
  endOfDay,
  endOfMonth,
  differenceInMonths,
  differenceInSeconds,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Accordion,
  AccordionModule,
  UtilsService,
  DataView,
  DataViewModule,
  ConfirmDialog,
  ConfirmDialogModule,
  TimeAgoPipe
};
//# sourceMappingURL=chunk-3UGKW4TX.js.map
