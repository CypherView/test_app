import {
  ContextMenu,
  ContextMenuModule
} from "./chunk-NNBC6OHR.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-M7S2S5LG.js";
import {
  ColumnFilter,
  ReorderableRow,
  ReorderableRowHandle,
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-UURX5BWG.js";
import {
  InputText,
  InputTextModule
} from "./chunk-UGO3PNLI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ELMGQUTA.js";
import {
  PrimeTemplate
} from "./chunk-NTFNF324.js";
import {
  TranslatePipe
} from "./chunk-AHALUXAA.js";
import {
  CommonModule,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
  NgClass,
  NgTemplateOutlet,
  PermissionService,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-2Y2RLXE3.js";
import {
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  Output,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  computed,
  debounceTime,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VOGNWKLY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/shared/directives/directive-switch.directive.ts
var DirectiveSwitchDirective = class _DirectiveSwitchDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  appDirectiveSwitch = input([], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "appDirectiveSwitch" } : (
    /* istanbul ignore next */
    {}
  )), { transform: (config) => {
    if (!isEmpty(config)) {
      this.applyDirectives(config);
    }
    return config;
  } }));
  applyDirectives(config) {
    config.forEach(({ condition, directive, value }) => {
      if (condition) {
        this.applyDirective(directive, value);
      } else {
        this.removeDirective(directive);
      }
    });
  }
  applyDirective(directive, value) {
    try {
      this.renderer.setProperty(this.el.nativeElement, directive, value);
    } catch (error) {
      console.error(`Failed to apply directive ${directive}:`, error);
    }
  }
  removeDirective(directive) {
    try {
      this.renderer.setProperty(this.el.nativeElement, directive, null);
    } catch (error) {
      console.error(`Failed to remove directive ${directive}:`, error);
    }
  }
  static \u0275fac = function DirectiveSwitchDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectiveSwitchDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DirectiveSwitchDirective, selectors: [["", "appDirectiveSwitch", ""]], inputs: { appDirectiveSwitch: [1, "appDirectiveSwitch"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectiveSwitchDirective, [{
    type: Directive,
    args: [{
      selector: "[appDirectiveSwitch]"
    }]
  }], null, { appDirectiveSwitch: [{ type: Input, args: [{ isSignal: true, alias: "appDirectiveSwitch", required: false }] }] });
})();

// src/app/shared/directives/step-content.directive.ts
var StepContentDirective = class _StepContentDirective {
  template = inject(TemplateRef);
  stepId = input.required(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepId" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appStepContent" }));
  static \u0275fac = function StepContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _StepContentDirective, selectors: [["", "appStepContent", ""]], inputs: { stepId: [1, "appStepContent", "stepId"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepContentDirective, [{
    type: Directive,
    args: [{
      selector: "[appStepContent]"
    }]
  }], null, { stepId: [{ type: Input, args: [{ isSignal: true, alias: "appStepContent", required: true }] }] });
})();

// src/app/shared/directives/permission.directive.ts
var PermissionDirective = class _PermissionDirective {
  expression = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "expression" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appPermission" }));
  strategy = input("hide", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "strategy" } : (
    /* istanbul ignore next */
    {}
  )), { alias: "appPermissionStrategy" }));
  permissionService = inject(PermissionService);
  templateRef = inject(TemplateRef, { optional: true });
  viewContainer = inject(ViewContainerRef);
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  hasView = false;
  constructor() {
    effect(() => {
      this.updateView();
    });
  }
  updateView() {
    const isAllowed = this.permissionService.canAccess(this.expression() ?? "");
    if (this.templateRef) {
      this.handleStructural(isAllowed);
    } else {
      this.handleAttribute(isAllowed);
    }
  }
  handleStructural(isAllowed) {
    if (!isAllowed) {
      this.hideStructuralView();
      return;
    }
    this.showStructuralView();
  }
  showStructuralView() {
    if (!this.hasView && this.templateRef) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }
  hideStructuralView() {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  handleAttribute(isAllowed) {
    if (this.strategy() === "disable") {
      this.handleDisableStrategy(isAllowed);
      return;
    }
    this.handleHideStrategy(isAllowed);
  }
  handleDisableStrategy(isAllowed) {
    if (!isAllowed) {
      this.disableElement();
      return;
    }
    this.enableElement();
  }
  handleHideStrategy(isAllowed) {
    if (!isAllowed) {
      this.hideElement();
      return;
    }
    this.showElement();
  }
  enableElement() {
    this.renderer.removeAttribute(this.el.nativeElement, "disabled");
    this.renderer.removeClass(this.el.nativeElement, "permission-disabled");
    this.renderer.removeStyle(this.el.nativeElement, "pointer-events");
    this.renderer.removeStyle(this.el.nativeElement, "opacity");
  }
  disableElement() {
    this.renderer.setAttribute(this.el.nativeElement, "disabled", "true");
    this.renderer.addClass(this.el.nativeElement, "permission-disabled");
    this.renderer.setStyle(this.el.nativeElement, "pointer-events", "none");
    this.renderer.setStyle(this.el.nativeElement, "opacity", "0.5");
  }
  showElement() {
    this.renderer.removeStyle(this.el.nativeElement, "display");
  }
  hideElement() {
    this.renderer.setStyle(this.el.nativeElement, "display", "none");
  }
  static \u0275fac = function PermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PermissionDirective, selectors: [["", "appPermission", ""]], inputs: { expression: [1, "appPermission", "expression"], strategy: [1, "appPermissionStrategy", "strategy"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[appPermission]"
    }]
  }], () => [], { expression: [{ type: Input, args: [{ isSignal: true, alias: "appPermission", required: false }] }], strategy: [{ type: Input, args: [{ isSignal: true, alias: "appPermissionStrategy", required: false }] }] });
})();

// src/app/shared/components/grid/filters/toggle-filter/toggle-filter.component.ts
var ToggleFilterComponent = class _ToggleFilterComponent {
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  filterChange = output();
  selectedValues = [];
  onSelectionChange(event) {
    this.filterChange.emit(event.value);
  }
  static \u0275fac = function ToggleFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToggleFilterComponent, selectors: [["app-toggle-filter"]], inputs: { options: [1, "options"] }, outputs: { filterChange: "filterChange" }, decls: 1, vars: 4, consts: [["optionLabel", "label", "optionValue", "value", "appendTo", "body", "styleClass", "w-full", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear", "showHeader"]], template: function ToggleFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-multiSelect", 0);
      \u0275\u0275twoWayListener("ngModelChange", function ToggleFilterComponent_Template_p_multiSelect_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValues, $event) || (ctx.selectedValues = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ToggleFilterComponent_Template_p_multiSelect_onChange_0_listener($event) {
        return ctx.onSelectionChange($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("options", ctx.options());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValues);
      \u0275\u0275property("showClear", true)("showHeader", false);
    }
  }, dependencies: [MultiSelectModule, MultiSelect, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleFilterComponent, [{
    type: Component,
    args: [{ selector: "app-toggle-filter", imports: [MultiSelectModule, FormsModule], template: '<p-multiSelect\n  [options]="options()"\n  [(ngModel)]="selectedValues"\n  optionLabel="label"\n  optionValue="value"\n  [showClear]="true"\n  [showHeader]="false"\n  appendTo="body"\n  styleClass="w-full"\n  (onChange)="onSelectionChange($event)"\n>\n</p-multiSelect>\n' }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], filterChange: [{ type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleFilterComponent, { className: "ToggleFilterComponent", filePath: "src/app/shared/components/grid/filters/toggle-filter/toggle-filter.component.ts", lineNumber: 12 });
})();

// src/app/shared/components/grid/filters/multiselect-filter/multiselect-filter.component.ts
var MultiselectFilterComponent = class _MultiselectFilterComponent {
  defaultSelected = input([], ...ngDevMode ? [{ debugName: "defaultSelected" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : (
    /* istanbul ignore next */
    []
  ));
  filterChange = output();
  selectedValues = [];
  ngOnInit() {
    if (isDefined(this.initialValue()) && Array.isArray(this.initialValue())) {
      this.setSelectedValues(this.initialValue());
    }
  }
  // Method to update value from parent
  updateValue(value) {
    if (isDefined(value) && Array.isArray(value)) {
      this.setSelectedValues(value);
    }
  }
  // Helper method to set selectedValues and update option selected states
  setSelectedValues(values) {
    this.selectedValues = [...values];
    const currentOptions = this.options();
    if (currentOptions.length > 0) {
      currentOptions.forEach((option) => {
        option.selected = this.selectedValues.includes(option.value);
      });
    }
  }
  onSelectionChange(event) {
    this.filterChange.emit(event.value);
  }
  static \u0275fac = function MultiselectFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiselectFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiselectFilterComponent, selectors: [["app-multiselect-filter"]], inputs: { defaultSelected: [1, "defaultSelected"], options: [1, "options"], initialValue: [1, "initialValue"] }, outputs: { filterChange: "filterChange" }, decls: 1, vars: 5, consts: [["optionLabel", "label", "optionValue", "value", "display", "chip", "filterBy", "label", "appendTo", "body", "styleClass", "w-full", 3, "ngModelChange", "onChange", "options", "ngModel", "showToggleAll", "showHeader", "filter"]], template: function MultiselectFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-multiSelect", 0);
      \u0275\u0275twoWayListener("ngModelChange", function MultiselectFilterComponent_Template_p_multiSelect_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValues, $event) || (ctx.selectedValues = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function MultiselectFilterComponent_Template_p_multiSelect_onChange_0_listener($event) {
        return ctx.onSelectionChange($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("options", ctx.options());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValues);
      \u0275\u0275property("showToggleAll", true)("showHeader", true)("filter", true);
    }
  }, dependencies: [MultiSelectModule, MultiSelect, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiselectFilterComponent, [{
    type: Component,
    args: [{ selector: "app-multiselect-filter", imports: [MultiSelectModule, FormsModule], template: '<p-multiSelect\n  [options]="options()"\n  [(ngModel)]="selectedValues"\n  optionLabel="label"\n  optionValue="value"\n  display="chip"\n  [showToggleAll]="true"\n  [showHeader]="true"\n  [filter]="true"\n  filterBy="label"\n  appendTo="body"\n  styleClass="w-full"\n  (onChange)="onSelectionChange($event)"\n>\n</p-multiSelect>\n' }]
  }], null, { defaultSelected: [{ type: Input, args: [{ isSignal: true, alias: "defaultSelected", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], initialValue: [{ type: Input, args: [{ isSignal: true, alias: "initialValue", required: false }] }], filterChange: [{ type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiselectFilterComponent, { className: "MultiselectFilterComponent", filePath: "src/app/shared/components/grid/filters/multiselect-filter/multiselect-filter.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/grid/filters/text-filter/text-filter.component.ts
var TextFilterComponent = class _TextFilterComponent {
  destroyRef = inject(DestroyRef);
  // Input signal for initial value
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : (
    /* istanbul ignore next */
    []
  ));
  // Output event for filter changes
  filterChange = output();
  // Filter input value
  filterValue = "";
  // Subject for handling debounced input
  inputSubject = new Subject();
  ngOnInit() {
    if (isDefined(this.initialValue())) {
      const value = this.initialValue();
      if (typeof value === "string") {
        this.filterValue = value;
      }
    }
    this.inputSubject.pipe(
      debounceTime(300),
      // Wait for 300ms pause in typing
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((value) => {
      this.filterChange.emit(value);
    });
  }
  // Handle input changes
  onInputChange(event) {
    const value = event.target.value;
    this.inputSubject.next(value);
  }
  // Method to update value from parent component
  updateValue(value) {
    if (isDefined(value) && typeof value === "string") {
      this.filterValue = value;
    } else {
      this.filterValue = "";
    }
  }
  // Clear the filter
  clearFilter() {
    this.filterValue = "";
    this.filterChange.emit("");
  }
  static \u0275fac = function TextFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextFilterComponent, selectors: [["app-text-filter"]], inputs: { initialValue: [1, "initialValue"] }, outputs: { filterChange: "filterChange" }, decls: 2, vars: 1, consts: [[1, "flex", "w-full"], ["type", "text", "pInputText", "", "aria-label", "Filter text", 1, "flex-1", "w-full", 3, "ngModelChange", "input", "ngModel"]], template: function TextFilterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "input", 1);
      \u0275\u0275twoWayListener("ngModelChange", function TextFilterComponent_Template_input_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterValue, $event) || (ctx.filterValue = $event);
        return $event;
      });
      \u0275\u0275listener("input", function TextFilterComponent_Template_input_input_1_listener($event) {
        return ctx.onInputChange($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterValue);
    }
  }, dependencies: [InputTextModule, InputText, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFilterComponent, [{
    type: Component,
    args: [{ selector: "app-text-filter", imports: [InputTextModule, FormsModule, CommonModule], template: '<div class="flex w-full">\n  <input\n    type="text"\n    pInputText\n    [(ngModel)]="filterValue"\n    (input)="onInputChange($event)"\n    aria-label="Filter text"\n    class="flex-1 w-full"\n  />\n</div>\n' }]
  }], null, { initialValue: [{ type: Input, args: [{ isSignal: true, alias: "initialValue", required: false }] }], filterChange: [{ type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextFilterComponent, { className: "TextFilterComponent", filePath: "src/app/shared/components/grid/filters/text-filter/text-filter.component.ts", lineNumber: 23 });
})();

// src/app/shared/components/grid/filters/filter-wrapper/filter-wrapper.component.ts
function FilterWrapperComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-toggle-filter", 3);
    \u0275\u0275listener("filterChange", function FilterWrapperComponent_Case_0_Template_app_toggle_filter_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.options());
  }
}
function FilterWrapperComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-multiselect-filter", 4);
    \u0275\u0275listener("filterChange", function FilterWrapperComponent_Case_1_Template_app_multiselect_filter_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.options())("initialValue", ctx_r1.initialValue());
  }
}
function FilterWrapperComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-text-filter", 5);
    \u0275\u0275listener("filterChange", function FilterWrapperComponent_Case_2_Template_app_text_filter_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialValue", ctx_r1.initialValue());
  }
}
var FilterWrapperComponent = class _FilterWrapperComponent {
  multiselectFilter;
  field = input.required(...ngDevMode ? [{ debugName: "field" }] : (
    /* istanbul ignore next */
    []
  ));
  filterType = input.required(...ngDevMode ? [{ debugName: "filterType" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  defaultSelected = input([], ...ngDevMode ? [{ debugName: "defaultSelected" }] : (
    /* istanbul ignore next */
    []
  ));
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : (
    /* istanbul ignore next */
    []
  ));
  filterChange = output();
  onFilterChange(value) {
    this.filterChange.emit(value);
  }
  setInitialValue(value) {
    if (value === void 0)
      return;
    setTimeout(() => {
      if (this.filterType() === "multiselect" && this.multiselectFilter) {
        this.multiselectFilter.updateValue(value);
      }
    });
  }
  static \u0275fac = function FilterWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterWrapperComponent, selectors: [["app-filter-wrapper"]], viewQuery: function FilterWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MultiselectFilterComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiselectFilter = _t.first);
    }
  }, inputs: { field: [1, "field"], filterType: [1, "filterType"], options: [1, "options"], defaultSelected: [1, "defaultSelected"], initialValue: [1, "initialValue"] }, outputs: { filterChange: "filterChange" }, decls: 3, vars: 1, consts: [[3, "options"], [3, "options", "initialValue"], [3, "initialValue"], [3, "filterChange", "options"], [3, "filterChange", "options", "initialValue"], [3, "filterChange", "initialValue"]], template: function FilterWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, FilterWrapperComponent_Case_0_Template, 1, 1, "app-toggle-filter", 0)(1, FilterWrapperComponent_Case_1_Template, 1, 2, "app-multiselect-filter", 1)(2, FilterWrapperComponent_Case_2_Template, 1, 1, "app-text-filter", 2);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.filterType()) === "toggle" ? 0 : tmp_0_0 === "multiselect" ? 1 : tmp_0_0 === "text" ? 2 : -1);
    }
  }, dependencies: [
    ToggleFilterComponent,
    MultiselectFilterComponent,
    TextFilterComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterWrapperComponent, [{
    type: Component,
    args: [{ selector: "app-filter-wrapper", imports: [
      ToggleFilterComponent,
      MultiselectFilterComponent,
      TextFilterComponent
    ], template: `@switch (filterType()) {
  @case ('toggle') {
    <app-toggle-filter
      [options]="options()"
      (filterChange)="onFilterChange($event)"
    >
    </app-toggle-filter>
  }
  @case ('multiselect') {
    <app-multiselect-filter
      [options]="options()"
      [initialValue]="initialValue()"
      (filterChange)="onFilterChange($event)"
    >
    </app-multiselect-filter>
  }
  @case ('text') {
    <app-text-filter
      [initialValue]="initialValue()"
      (filterChange)="onFilterChange($event)"
    >
    </app-text-filter>
  }
}
` }]
  }], null, { multiselectFilter: [{
    type: ViewChild,
    args: [MultiselectFilterComponent]
  }], field: [{ type: Input, args: [{ isSignal: true, alias: "field", required: true }] }], filterType: [{ type: Input, args: [{ isSignal: true, alias: "filterType", required: true }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], defaultSelected: [{ type: Input, args: [{ isSignal: true, alias: "defaultSelected", required: false }] }], initialValue: [{ type: Input, args: [{ isSignal: true, alias: "initialValue", required: false }] }], filterChange: [{ type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterWrapperComponent, { className: "FilterWrapperComponent", filePath: "src/app/shared/components/grid/filters/filter-wrapper/filter-wrapper.component.ts", lineNumber: 17 });
})();

// src/app/shared/components/grid/grid.component.ts
var _c0 = ["dt"];
var GridComponent_Conditional_8_ng_template_0_Defer_3_DepsFn = () => [NgTemplateOutlet];
var _c1 = (a0) => ({ directive: "pReorderableColumn", condition: a0 });
var _c2 = (a0) => [a0];
var _c3 = () => [];
var _c4 = (a0, a1) => ({ directive: "pContextMenuRow", condition: a0, value: a1 });
var _c5 = (a0, a1) => ({ "pi-chevron-down": a0, "pi-chevron-right": a1 });
var _c6 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.field;
function GridComponent_Conditional_4_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 8);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275element(1, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pSortableColumn", col_r2.field)("appDirectiveSwitch", \u0275\u0275pureFunction1(6, _c2, \u0275\u0275pureFunction1(4, _c1, ctx_r2.reOrderableColumns())));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r2.header, " ");
    \u0275\u0275advance();
    \u0275\u0275property("field", col_r2.field);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GridComponent_Conditional_4_ng_template_0_Conditional_3_For_1_Template, 3, 8, "th", 10, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("appDirectiveSwitch", \u0275\u0275pureFunction1(4, _c2, \u0275\u0275pureFunction1(2, _c1, ctx_r2.reOrderableColumns())));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GridComponent_Conditional_4_ng_template_0_Conditional_4_For_1_Template, 2, 6, "th", 12, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-filter-wrapper", 16);
    \u0275\u0275listener("filterChange", function GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Conditional_1_ng_template_1_Template_app_filter_wrapper_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const col_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.handleFilterChange(col_r6.field, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("field", col_r6.field)("filterType", col_r6.filterType ?? "text")("options", (col_r6.filterConfig == null ? null : col_r6.filterConfig.options) ?? \u0275\u0275pureFunction0(5, _c3))("defaultSelected", (col_r6.filterConfig == null ? null : col_r6.filterConfig.defaultSelected) ?? \u0275\u0275pureFunction0(6, _c3))("initialValue", ctx_r2.initialFilters()[col_r6.field]);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-columnFilter", 14);
    \u0275\u0275template(1, GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Conditional_1_ng_template_1_Template, 1, 7, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("type", col_r6.filterType ?? "text")("field", col_r6.field)("showMenu", false);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275conditionalCreate(1, GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Conditional_1_Template, 2, 3, "p-columnFilter", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r6.filter ? 1 : -1);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, GridComponent_Conditional_4_ng_template_0_Conditional_5_For_2_Template, 2, 1, "th", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, GridComponent_Conditional_4_ng_template_0_Conditional_1_Template, 1, 0, "th", 8);
    \u0275\u0275conditionalCreate(2, GridComponent_Conditional_4_ng_template_0_Conditional_2_Template, 2, 0, "th", 9);
    \u0275\u0275conditionalCreate(3, GridComponent_Conditional_4_ng_template_0_Conditional_3_Template, 2, 0);
    \u0275\u0275conditionalCreate(4, GridComponent_Conditional_4_ng_template_0_Conditional_4_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, GridComponent_Conditional_4_ng_template_0_Conditional_5_Template, 3, 0, "tr");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rowExpandable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showCheckboxColumn() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sortable() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.sortable() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filterable() ? 5 : -1);
  }
}
function GridComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_Conditional_4_ng_template_0_Template, 6, 5, "ng-template", 5);
  }
}
function GridComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", rowData_r7);
  }
}
function GridComponent_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "a", 19);
    \u0275\u0275listener("click", function GridComponent_ng_template_5_Conditional_2_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const rowData_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRow(rowData_r7));
    });
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c5, ctx_r2.isRowExpanded(rowData_r7), !ctx_r2.isRowExpanded(rowData_r7)));
  }
}
function GridComponent_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275elementEnd();
  }
}
function GridComponent_ng_template_5_For_5_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GridComponent_ng_template_5_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_ng_template_5_For_5_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext().$implicit;
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngTemplateOutlet", col_r9.cellTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, rowData_r7));
  }
}
function GridComponent_ng_template_5_For_5_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", col_r9.valueGetter(rowData_r7), " ");
  }
}
function GridComponent_ng_template_5_For_5_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", rowData_r7[col_r9.field], " ");
  }
}
function GridComponent_ng_template_5_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_For_5_Conditional_2_Conditional_1_Template, 1, 1)(2, GridComponent_ng_template_5_For_5_Conditional_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(col_r9.transform);
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r9.valueGetter ? 1 : 2);
  }
}
function GridComponent_ng_template_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_For_5_Conditional_1_Template, 1, 4, "ng-container")(2, GridComponent_ng_template_5_For_5_Conditional_2_Template, 3, 3, "span", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r9.cellTemplate ? 1 : 2);
  }
}
function GridComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17);
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_Conditional_1_Template, 2, 1, "td");
    \u0275\u0275conditionalCreate(2, GridComponent_ng_template_5_Conditional_2_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(3, GridComponent_ng_template_5_Conditional_3_Template, 2, 0, "td");
    \u0275\u0275repeaterCreate(4, GridComponent_ng_template_5_For_5_Template, 3, 1, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r7 = ctx.$implicit;
    const index_r10 = ctx.rowIndex;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("pReorderableRow", index_r10)("pSelectableRow", rowData_r7)("appDirectiveSwitch", \u0275\u0275pureFunction1(9, _c2, \u0275\u0275pureFunction2(6, _c4, !!ctx_r2.contextMenuItems(), rowData_r7)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showCheckboxColumn() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rowExpandable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.reOrderableRows() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.emptyMessage() || \u0275\u0275pipeBind1(3, 2, "SHARED.COMMON.STATUS.NO_DATA"), " ");
  }
}
function GridComponent_Conditional_8_ng_template_0_Defer_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GridComponent_Conditional_8_ng_template_0_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_Conditional_8_ng_template_0_Defer_2_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.expandedRowTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, rowData_r11));
  }
}
function GridComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275domTemplate(2, GridComponent_Conditional_8_ng_template_0_Defer_2_Template, 1, 4);
    \u0275\u0275defer(3, 2, GridComponent_Conditional_8_ng_template_0_Defer_3_DepsFn);
    \u0275\u0275deferOnIdle();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns().length + 1);
  }
}
function GridComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_Conditional_8_ng_template_0_Template, 5, 1, "ng-template", 7);
  }
}
var GridComponent = class _GridComponent {
  dt;
  filterWrappers;
  columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  sortable = input(false, ...ngDevMode ? [{ debugName: "sortable" }] : (
    /* istanbul ignore next */
    []
  ));
  selectionMode = input(null, ...ngDevMode ? [{ debugName: "selectionMode" }] : (
    /* istanbul ignore next */
    []
  ));
  showCheckboxColumn = input(false, ...ngDevMode ? [{ debugName: "showCheckboxColumn" }] : (
    /* istanbul ignore next */
    []
  ));
  filterable = input(false, ...ngDevMode ? [{ debugName: "filterable" }] : (
    /* istanbul ignore next */
    []
  ));
  pagination = input(false, ...ngDevMode ? [{ debugName: "pagination" }] : (
    /* istanbul ignore next */
    []
  ));
  resizableColumns = input(false, ...ngDevMode ? [{ debugName: "resizableColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  columnResizeMode = input("fit", ...ngDevMode ? [{ debugName: "columnResizeMode" }] : (
    /* istanbul ignore next */
    []
  ));
  reOrderableColumns = input(false, ...ngDevMode ? [{ debugName: "reOrderableColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  reOrderableRows = input(false, ...ngDevMode ? [{ debugName: "reOrderableRows" }] : (
    /* istanbul ignore next */
    []
  ));
  virtualScroll = input(false, ...ngDevMode ? [{ debugName: "virtualScroll" }] : (
    /* istanbul ignore next */
    []
  ));
  contextMenuItems = input(void 0, ...ngDevMode ? [{ debugName: "contextMenuItems" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(void 0, ...ngDevMode ? [{ debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  showGridLines = input(false, ...ngDevMode ? [{ debugName: "showGridLines" }] : (
    /* istanbul ignore next */
    []
  ));
  stripedRows = input(false, ...ngDevMode ? [{ debugName: "stripedRows" }] : (
    /* istanbul ignore next */
    []
  ));
  rows = input(DEFAULT_PAGE_SIZE, ...ngDevMode ? [{ debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  rowsPerPageOptions = input(DEFAULT_PAGE_SIZE_OPTIONS, ...ngDevMode ? [{ debugName: "rowsPerPageOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  rowExpandMode = input("multiple", ...ngDevMode ? [{ debugName: "rowExpandMode" }] : (
    /* istanbul ignore next */
    []
  ));
  rowExpandable = input(false, ...ngDevMode ? [{ debugName: "rowExpandable" }] : (
    /* istanbul ignore next */
    []
  ));
  emptyMessage = input("", ...ngDevMode ? [{ debugName: "emptyMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  expandedRowTemplate = input(null, ...ngDevMode ? [{ debugName: "expandedRowTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollable = input(false, ...ngDevMode ? [{ debugName: "scrollable" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollHeight = input(void 0, ...ngDevMode ? [{ debugName: "scrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRecords = input(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : (
    /* istanbul ignore next */
    []
  ));
  lazy = input(false, ...ngDevMode ? [{ debugName: "lazy" }] : (
    /* istanbul ignore next */
    []
  ));
  hideHeader = input(false, ...ngDevMode ? [{ debugName: "hideHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  tableStyleClass = input(void 0, ...ngDevMode ? [{ debugName: "tableStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  styleClass = input("h-full", ...ngDevMode ? [{ debugName: "styleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  initialFilters = input({}, ...ngDevMode ? [{ debugName: "initialFilters" }] : (
    /* istanbul ignore next */
    []
  ));
  selection = input(null, ...ngDevMode ? [{ debugName: "selection" }] : (
    /* istanbul ignore next */
    []
  ));
  visibleColumns = input([], ...ngDevMode ? [{ debugName: "visibleColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  metaKeySelection = input(false, ...ngDevMode ? [{ debugName: "metaKeySelection" }] : (
    /* istanbul ignore next */
    []
  ));
  dataKey = input(void 0, ...ngDevMode ? [{ debugName: "dataKey" }] : (
    /* istanbul ignore next */
    []
  ));
  pageChange = output();
  rowSelect = output();
  rowUnselect = output();
  onLazyLoad = output();
  onFilterChange = output();
  _selectedRows = null;
  expandedRows = [];
  // Computed property to get visible columns
  displayedColumns = computed(() => {
    const allColumns = this.columns();
    const visibleColumnFields = this.visibleColumns();
    if (visibleColumnFields.length === 0) {
      return allColumns;
    }
    return allColumns.filter((col) => visibleColumnFields.includes(col.field));
  }, ...ngDevMode ? [{ debugName: "displayedColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const filters = this.initialFilters();
      if (Object.keys(filters).length > 0) {
        setTimeout(() => {
          this.updateFilterComponents(filters);
        });
      }
    });
  }
  onPageChange(event) {
    this.pageChange.emit(event);
  }
  onRowSelect(event) {
    this.rowSelect.emit(event);
  }
  onRowUnselect(event) {
    this.rowUnselect.emit(event);
  }
  toggleRow(rowData) {
    const index = this.expandedRows.findIndex((row) => row.data === rowData);
    if (index === -1) {
      this.expandedRows.push({ data: rowData, expanded: true });
    } else {
      this.expandedRows.splice(index, 1);
    }
  }
  isRowExpanded(rowData) {
    return this.expandedRows.some((row) => row.data === rowData);
  }
  onLazyLoadEvent(event) {
    this.onLazyLoad.emit(event);
  }
  exportCSV() {
    this.dt?.exportCSV();
  }
  handleFilterChange(field, value) {
    this.onFilterChange.emit({ field, value });
  }
  updateFilterComponents(filters) {
    if (!this.filterWrappers)
      return;
    this.filterWrappers.forEach((wrapper) => {
      const field = wrapper.field();
      if (field && filters[field] !== void 0) {
        wrapper.setInitialValue(filters[field]);
      }
    });
  }
  /**
   * Sets the selection programmatically
   * @param item The item to select
   */
  setSelection(item) {
    if (isNullOrUndefined(item))
      return;
    this._selectedRows = item;
    if (isDefined(this.dt)) {
      setTimeout(() => {
        if (this.dt) {
          this.dt.selection = item;
        }
        if (!Array.isArray(item) && this.selectionMode() === "single") {
          if (this.dt) {
            this.dt.selectionChange.emit(item);
          }
        }
      });
    }
  }
  get selectedRows() {
    return this._selectedRows;
  }
  static \u0275fac = function GridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridComponent, selectors: [["app-grid"]], viewQuery: function GridComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(FilterWrapperComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterWrappers = _t);
    }
  }, inputs: { columns: [1, "columns"], data: [1, "data"], sortable: [1, "sortable"], selectionMode: [1, "selectionMode"], showCheckboxColumn: [1, "showCheckboxColumn"], filterable: [1, "filterable"], pagination: [1, "pagination"], resizableColumns: [1, "resizableColumns"], columnResizeMode: [1, "columnResizeMode"], reOrderableColumns: [1, "reOrderableColumns"], reOrderableRows: [1, "reOrderableRows"], virtualScroll: [1, "virtualScroll"], contextMenuItems: [1, "contextMenuItems"], size: [1, "size"], showGridLines: [1, "showGridLines"], stripedRows: [1, "stripedRows"], rows: [1, "rows"], rowsPerPageOptions: [1, "rowsPerPageOptions"], rowExpandMode: [1, "rowExpandMode"], rowExpandable: [1, "rowExpandable"], emptyMessage: [1, "emptyMessage"], expandedRowTemplate: [1, "expandedRowTemplate"], scrollable: [1, "scrollable"], scrollHeight: [1, "scrollHeight"], totalRecords: [1, "totalRecords"], lazy: [1, "lazy"], hideHeader: [1, "hideHeader"], loading: [1, "loading"], tableStyleClass: [1, "tableStyleClass"], styleClass: [1, "styleClass"], initialFilters: [1, "initialFilters"], selection: [1, "selection"], visibleColumns: [1, "visibleColumns"], metaKeySelection: [1, "metaKeySelection"], dataKey: [1, "dataKey"] }, outputs: { pageChange: "pageChange", rowSelect: "rowSelect", rowUnselect: "rowUnselect", onLazyLoad: "onLazyLoad", onFilterChange: "onFilterChange" }, decls: 9, vars: 28, consts: [["cm", ""], ["dt", ""], ["emptymessage", ""], [3, "model", "hidden"], ["role", "grid", 3, "selectionChange", "onPage", "onRowSelect", "onRowUnselect", "onLazyLoad", "value", "paginator", "rows", "resizableColumns", "reorderableColumns", "selectionMode", "contextMenu", "size", "showGridlines", "stripedRows", "rowExpandMode", "columnResizeMode", "scrollable", "scrollHeight", "totalRecords", "lazy", "columns", "loading", "metaKeySelection", "selection", "dataKey", "tableStyleClass", "styleClass"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["scope", "col", 1, "w-20"], [1, "w-12"], ["scope", "col", 3, "pSortableColumn", "appDirectiveSwitch"], [3, "field"], ["scope", "col", 3, "appDirectiveSwitch"], ["scope", "col"], [3, "type", "field", "showMenu"], ["pTemplate", "filter"], [3, "filterChange", "field", "filterType", "options", "defaultSelected", "initialValue"], [3, "pReorderableRow", "pSelectableRow", "appDirectiveSwitch"], [3, "value"], ["href", "#", 3, "click"], [1, "pi", 3, "ngClass"], ["pReorderableRowHandle", "", 1, "pi", "pi-bars"], [3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-contextmenu", 3, 0);
      \u0275\u0275elementStart(2, "p-table", 4, 1);
      \u0275\u0275twoWayListener("selectionChange", function GridComponent_Template_p_table_selectionChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx._selectedRows, $event) || (ctx._selectedRows = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onPage", function GridComponent_Template_p_table_onPage_2_listener($event) {
        return ctx.onPageChange($event);
      })("onRowSelect", function GridComponent_Template_p_table_onRowSelect_2_listener($event) {
        return ctx.onRowSelect($event);
      })("onRowUnselect", function GridComponent_Template_p_table_onRowUnselect_2_listener($event) {
        return ctx.onRowUnselect($event);
      })("onLazyLoad", function GridComponent_Template_p_table_onLazyLoad_2_listener($event) {
        return ctx.onLazyLoadEvent($event);
      });
      \u0275\u0275conditionalCreate(4, GridComponent_Conditional_4_Template, 1, 0, null, 5);
      \u0275\u0275template(5, GridComponent_ng_template_5_Template, 6, 11, "ng-template", 6)(6, GridComponent_ng_template_6_Template, 4, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(8, GridComponent_Conditional_8_Template, 1, 0, null, 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const cm_r12 = \u0275\u0275reference(1);
      \u0275\u0275property("model", ctx.contextMenuItems())("hidden", !ctx.contextMenuItems());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.data())("paginator", ctx.pagination())("rows", ctx.rows())("resizableColumns", ctx.resizableColumns())("reorderableColumns", ctx.reOrderableColumns())("selectionMode", ctx.selectionMode())("contextMenu", ctx.contextMenuItems() ? cm_r12 : null)("size", ctx.size())("showGridlines", ctx.showGridLines())("stripedRows", ctx.stripedRows())("rowExpandMode", ctx.rowExpandMode())("columnResizeMode", ctx.columnResizeMode())("scrollable", ctx.scrollable())("scrollHeight", ctx.scrollable() ? "flex" : ctx.scrollHeight())("totalRecords", ctx.totalRecords())("lazy", ctx.lazy())("columns", ctx.displayedColumns())("loading", ctx.loading())("metaKeySelection", ctx.metaKeySelection());
      \u0275\u0275twoWayProperty("selection", ctx._selectedRows);
      \u0275\u0275property("dataKey", ctx.dataKey())("tableStyleClass", ctx.tableStyleClass())("styleClass", ctx.styleClass());
      \u0275\u0275attribute("aria-label", "Data Grid");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.hideHeader() ? 4 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.rowExpandable() ? 8 : -1);
    }
  }, dependencies: [
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SelectableRow,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    ReorderableRowHandle,
    ReorderableRow,
    ColumnFilter,
    DirectiveSwitchDirective,
    ContextMenuModule,
    ContextMenu,
    FilterWrapperComponent,
    CommonModule,
    NgClass,
    NgTemplateOutlet,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]     .p-datatable {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-datatable-wrapper {\n  overflow-x: auto;\n}\n[_nghost-%COMP%]     .p-datatable-thead tr:nth-child(2) th {\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .p-datatable-thead tr:nth-child(2) th .filter-wrapper {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .info-display .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n[_nghost-%COMP%]     p-columnfilterformelement {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{ selector: "app-grid", imports: [
      TableModule,
      DirectiveSwitchDirective,
      ContextMenuModule,
      FilterWrapperComponent,
      CommonModule,
      TranslatePipe
    ], template: `<p-contextmenu
  #cm
  [model]="contextMenuItems()"
  [hidden]="!contextMenuItems()"
></p-contextmenu>

<p-table
  #dt
  role="grid"
  [attr.aria-label]="'Data Grid'"
  [value]="data()"
  [paginator]="pagination()"
  [rows]="rows()"
  [resizableColumns]="resizableColumns()"
  [reorderableColumns]="reOrderableColumns()"
  [selectionMode]="selectionMode()"
  [contextMenu]="contextMenuItems() ? cm : null"
  [size]="size()"
  [showGridlines]="showGridLines()"
  [stripedRows]="stripedRows()"
  [rowExpandMode]="rowExpandMode()"
  [columnResizeMode]="columnResizeMode()"
  [scrollable]="scrollable()"
  [scrollHeight]="scrollable() ? 'flex' : scrollHeight()"
  [totalRecords]="totalRecords()"
  [lazy]="lazy()"
  [columns]="displayedColumns()"
  [loading]="loading()"
  [metaKeySelection]="metaKeySelection()"
  [(selection)]="_selectedRows"
  [dataKey]="dataKey()"
  [tableStyleClass]="tableStyleClass()"
  [styleClass]="styleClass()"
  (onPage)="onPageChange($event)"
  (onRowSelect)="onRowSelect($event)"
  (onRowUnselect)="onRowUnselect($event)"
  (onLazyLoad)="onLazyLoadEvent($event)"
>
  @if (!hideHeader()) {
    <ng-template pTemplate="header" let-columns>
      <tr>
        @if (rowExpandable()) {
          <th class="w-20" scope="col"></th>
          <!-- Column for expansion icon -->
        }

        @if (showCheckboxColumn()) {
          <th class="w-12"><p-tableHeaderCheckbox /></th>
        }

        @if (sortable()) {
          @for (col of displayedColumns(); track col.field) {
            <th
              scope="col"
              [pSortableColumn]="col.field"
              [appDirectiveSwitch]="[
                {
                  directive: 'pReorderableColumn',
                  condition: reOrderableColumns(),
                },
              ]"
            >
              {{ col.header }}
              <p-sortIcon [field]="col.field"></p-sortIcon>
            </th>
          }
        }

        @if (!sortable()) {
          @for (col of displayedColumns(); track col.field) {
            <th
              scope="col"
              [appDirectiveSwitch]="[
                {
                  directive: 'pReorderableColumn',
                  condition: reOrderableColumns(),
                },
              ]"
            >
              {{ col.header }}
            </th>
          }
        }
      </tr>

      @if (filterable()) {
        <tr>
          @for (col of displayedColumns(); track col.field) {
            <th scope="col">
              @if (col.filter) {
                <p-columnFilter
                  [type]="col.filterType ?? 'text'"
                  [field]="col.field"
                  [showMenu]="false"
                >
                  <ng-template
                    pTemplate="filter"
                    let-value
                    let-filter="filterCallback"
                  >
                    <app-filter-wrapper
                      [field]="col.field"
                      [filterType]="col.filterType ?? 'text'"
                      [options]="col.filterConfig?.options ?? []"
                      [defaultSelected]="
                        col.filterConfig?.defaultSelected ?? []
                      "
                      [initialValue]="initialFilters()[col.field]"
                      (filterChange)="handleFilterChange(col.field, $event)"
                    >
                    </app-filter-wrapper>
                  </ng-template>
                </p-columnFilter>
              }
            </th>
          }
        </tr>
      }
    </ng-template>
  }

  <ng-template
    pTemplate="body"
    let-rowData
    let-columns="columns"
    let-index="rowIndex"
  >
    <tr
      [pReorderableRow]="index"
      [pSelectableRow]="rowData"
      [appDirectiveSwitch]="[
        {
          directive: 'pContextMenuRow',
          condition: !!contextMenuItems(),
          value: rowData,
        },
      ]"
    >
      @if (showCheckboxColumn()) {
        <td><p-tableCheckbox [value]="rowData" /></td>
      }

      @if (rowExpandable()) {
        <td>
          <a href="#" (click)="toggleRow(rowData)">
            <i
              class="pi"
              [ngClass]="{
                'pi-chevron-down': isRowExpanded(rowData),
                'pi-chevron-right': !isRowExpanded(rowData),
              }"
            ></i>
          </a>
        </td>
      }

      @if (reOrderableRows()) {
        <td>
          <span class="pi pi-bars" pReorderableRowHandle></span>
        </td>
      }

      @for (col of displayedColumns(); track col.field) {
        <td>
          @if (col.cellTemplate) {
            <ng-container
              *ngTemplateOutlet="
                col.cellTemplate;
                context: { $implicit: rowData }
              "
            ></ng-container>
          } @else {
            <span [class]="col.transform">
              @if (col.valueGetter) {
                {{ col.valueGetter(rowData) }}
              } @else {
                {{ rowData[col.field] }}
              }
            </span>
          }
        </td>
      }
    </tr>
  </ng-template>

  <ng-template #emptymessage>
    <tr>
      <td [attr.colspan]="displayedColumns().length">
        {{ emptyMessage() || ('SHARED.COMMON.STATUS.NO_DATA' | translate) }}
      </td>
    </tr>
  </ng-template>

  @if (rowExpandable()) {
    <ng-template pTemplate="rowexpansion" let-rowData let-columns="columns">
      <tr>
        <td [attr.colspan]="displayedColumns().length + 1">
          @defer {
            <ng-container
              *ngTemplateOutlet="
                expandedRowTemplate();
                context: { $implicit: rowData }
              "
            ></ng-container>
          }
        </td>
      </tr>
    </ng-template>
  }
</p-table>
`, styles: ["/* src/app/shared/components/grid/grid.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n:host ::ng-deep .p-datatable {\n  width: 100%;\n}\n:host ::ng-deep .p-datatable-wrapper {\n  overflow-x: auto;\n}\n:host ::ng-deep .p-datatable-thead tr:nth-child(2) th {\n  overflow: hidden;\n}\n:host ::ng-deep .p-datatable-thead tr:nth-child(2) th .filter-wrapper {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n:host ::ng-deep .info-display .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n:host ::ng-deep p-columnfilterformelement {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=grid.component.css.map */\n"] }]
  }], () => [], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }], filterWrappers: [{
    type: ViewChildren,
    args: [FilterWrapperComponent]
  }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }], sortable: [{ type: Input, args: [{ isSignal: true, alias: "sortable", required: false }] }], selectionMode: [{ type: Input, args: [{ isSignal: true, alias: "selectionMode", required: false }] }], showCheckboxColumn: [{ type: Input, args: [{ isSignal: true, alias: "showCheckboxColumn", required: false }] }], filterable: [{ type: Input, args: [{ isSignal: true, alias: "filterable", required: false }] }], pagination: [{ type: Input, args: [{ isSignal: true, alias: "pagination", required: false }] }], resizableColumns: [{ type: Input, args: [{ isSignal: true, alias: "resizableColumns", required: false }] }], columnResizeMode: [{ type: Input, args: [{ isSignal: true, alias: "columnResizeMode", required: false }] }], reOrderableColumns: [{ type: Input, args: [{ isSignal: true, alias: "reOrderableColumns", required: false }] }], reOrderableRows: [{ type: Input, args: [{ isSignal: true, alias: "reOrderableRows", required: false }] }], virtualScroll: [{ type: Input, args: [{ isSignal: true, alias: "virtualScroll", required: false }] }], contextMenuItems: [{ type: Input, args: [{ isSignal: true, alias: "contextMenuItems", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showGridLines: [{ type: Input, args: [{ isSignal: true, alias: "showGridLines", required: false }] }], stripedRows: [{ type: Input, args: [{ isSignal: true, alias: "stripedRows", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], rowsPerPageOptions: [{ type: Input, args: [{ isSignal: true, alias: "rowsPerPageOptions", required: false }] }], rowExpandMode: [{ type: Input, args: [{ isSignal: true, alias: "rowExpandMode", required: false }] }], rowExpandable: [{ type: Input, args: [{ isSignal: true, alias: "rowExpandable", required: false }] }], emptyMessage: [{ type: Input, args: [{ isSignal: true, alias: "emptyMessage", required: false }] }], expandedRowTemplate: [{ type: Input, args: [{ isSignal: true, alias: "expandedRowTemplate", required: false }] }], scrollable: [{ type: Input, args: [{ isSignal: true, alias: "scrollable", required: false }] }], scrollHeight: [{ type: Input, args: [{ isSignal: true, alias: "scrollHeight", required: false }] }], totalRecords: [{ type: Input, args: [{ isSignal: true, alias: "totalRecords", required: false }] }], lazy: [{ type: Input, args: [{ isSignal: true, alias: "lazy", required: false }] }], hideHeader: [{ type: Input, args: [{ isSignal: true, alias: "hideHeader", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], tableStyleClass: [{ type: Input, args: [{ isSignal: true, alias: "tableStyleClass", required: false }] }], styleClass: [{ type: Input, args: [{ isSignal: true, alias: "styleClass", required: false }] }], initialFilters: [{ type: Input, args: [{ isSignal: true, alias: "initialFilters", required: false }] }], selection: [{ type: Input, args: [{ isSignal: true, alias: "selection", required: false }] }], visibleColumns: [{ type: Input, args: [{ isSignal: true, alias: "visibleColumns", required: false }] }], metaKeySelection: [{ type: Input, args: [{ isSignal: true, alias: "metaKeySelection", required: false }] }], dataKey: [{ type: Input, args: [{ isSignal: true, alias: "dataKey", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }], rowSelect: [{ type: Output, args: ["rowSelect"] }], rowUnselect: [{ type: Output, args: ["rowUnselect"] }], onLazyLoad: [{ type: Output, args: ["onLazyLoad"] }], onFilterChange: [{ type: Output, args: ["onFilterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridComponent, { className: "GridComponent", filePath: "src/app/shared/components/grid/grid.component.ts", lineNumber: 55 });
})();

export {
  FilterWrapperComponent,
  GridComponent
};
//# sourceMappingURL=chunk-UE6A3OPG.js.map
