import {
  EntityDetailsService
} from "./chunk-QE7ML3RV.js";
import {
  DetailsComponentFactory
} from "./chunk-5CU32GGO.js";
import {
  BroadcastEventMessageService
} from "./chunk-5QFOUDM4.js";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Checkbox,
  ChevronRightIcon,
  ContextMenuModule,
  Paginator,
  PaginatorModule,
  SortAltIcon,
  SortAmountDownIcon,
  SortAmountUpAltIcon,
  takeUntilDestroyed
} from "./chunk-QYHQ64RQ.js";
import {
  Badge,
  BadgeModule,
  BaseComponent,
  BaseStyle,
  ButtonModule,
  CheckIcon,
  ChevronDownIcon,
  DomHandler,
  FilterService,
  FormsModule,
  G,
  Ht,
  J,
  K,
  NgControlStatus,
  NgModel,
  O,
  P,
  PrimeTemplate,
  Q,
  Q2,
  R,
  Ripple,
  Scroller,
  SharedModule,
  SpinnerIcon,
  Tooltip,
  TooltipModule,
  W,
  Y,
  a,
  bt,
  c,
  ct,
  k2 as k,
  kt,
  pt,
  s,
  z
} from "./chunk-ZQA7ZUAC.js";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
  TREE_TABLE_CONFIGS,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-2QFPVW6Y.js";
import {
  ActivatedRoute,
  CommonModule,
  NavigationEnd,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  Router,
  isPlatformBrowser
} from "./chunk-OLJEO5KJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  debounceTime,
  defer,
  effect,
  filter,
  finalize,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-XEZOAFBV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/shared/components/tree-table/tree-table-config-factory.ts
var TreeTableConfigurationFactory = class _TreeTableConfigurationFactory {
  injector;
  configRegistry = /* @__PURE__ */ new Map();
  constructor(injector, configurations = []) {
    this.injector = injector;
    const flatConfigs = configurations.flat();
    flatConfigs.forEach(({ entityType, config }) => {
      this.configRegistry.set(entityType, config);
    });
  }
  /**
   * Creates a TreeTable configuration for the specified entityType with the given parameters
   * @param entityType The type of TreeTable to create configuration for
   * @param params Optional parameters to pass to the configuration factory
   * @returns A TreeTable configuration object
   */
  create(entityType, params = {}) {
    const factory = this.configRegistry.get(entityType);
    if (!factory) {
      throw new Error(`No tree table configuration registered for type '${entityType}'`);
    }
    const config = this.injector.get(factory);
    config.initialize(params);
    return config;
  }
  static \u0275fac = function TreeTableConfigurationFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableConfigurationFactory)(\u0275\u0275inject(Injector), \u0275\u0275inject(TREE_TABLE_CONFIGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TreeTableConfigurationFactory, factory: _TreeTableConfigurationFactory.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableConfigurationFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [TREE_TABLE_CONFIGS]
  }] }], null);
})();

// node_modules/primeng/fesm2022/primeng-treetable.mjs
var _c0 = ["colgroup"];
var _c1 = ["caption"];
var _c2 = ["header"];
var _c3 = ["body"];
var _c4 = ["footer"];
var _c5 = ["summary"];
var _c6 = ["emptymessage"];
var _c7 = ["paginatorleft"];
var _c8 = ["paginatorright"];
var _c9 = ["paginatordropdownitem"];
var _c10 = ["frozenheader"];
var _c11 = ["frozenbody"];
var _c12 = ["frozenfooter"];
var _c13 = ["frozencolgroup"];
var _c14 = ["loadingicon"];
var _c15 = ["reorderindicatorupicon"];
var _c16 = ["reorderindicatordownicon"];
var _c17 = ["sorticon"];
var _c18 = ["checkboxicon"];
var _c19 = ["headercheckboxicon"];
var _c20 = ["togglericon"];
var _c21 = ["paginatorfirstpagelinkicon"];
var _c22 = ["paginatorlastpagelinkicon"];
var _c23 = ["paginatorpreviouspagelinkicon"];
var _c24 = ["paginatornextpagelinkicon"];
var _c25 = ["loader"];
var _c26 = ["resizeHelper"];
var _c27 = ["reorderIndicatorUp"];
var _c28 = ["reorderIndicatorDown"];
var _c29 = ["table"];
var _c30 = ["scrollableView"];
var _c31 = ["scrollableFrozenView"];
var _c32 = (a0) => ({
  $implicit: a0
});
var _c33 = (a0, a1) => ({
  left: a0,
  width: a1
});
var _c34 = (a0, a1) => [a0, a1];
var _c35 = (a0) => ({
  width: a0
});
function TreeTable_div_0_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin" + ctx_r0.loadingIcon));
  }
}
function TreeTable_div_0_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275property("spin", true);
  }
}
function TreeTable_div_0_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TreeTable_div_0_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_div_0_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_div_0_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, TreeTable_div_0_ng_container_3_span_2_1_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function TreeTable_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TreeTable_div_0_ng_container_3__svg_svg_1_Template, 1, 3, "svg", 10)(2, TreeTable_div_0_ng_container_3_span_2_Template, 2, 3, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function TreeTable_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275template(2, TreeTable_div_0_i_2_Template, 1, 2, "i", 6)(3, TreeTable_div_0_ng_container_3_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("loading"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("mask"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function TreeTable_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TreeTable_div_1_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.captionTemplate || ctx_r0._captionTemplate);
  }
}
function TreeTable_p_paginator_2_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_2_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_1_ng_template_0_Template, 1, 1, "ng-template", 14);
  }
}
function TreeTable_p_paginator_2_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_2_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_2_ng_template_0_Template, 1, 1, "ng-template", 15);
  }
}
function TreeTable_p_paginator_2_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_2_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_3_ng_template_0_Template, 1, 1, "ng-template", 16);
  }
}
function TreeTable_p_paginator_2_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_2_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_2_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_2_4_ng_template_0_Template, 1, 1, "ng-template", 17);
  }
}
function TreeTable_p_paginator_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 13);
    \u0275\u0275listener("onPageChange", function TreeTable_p_paginator_2_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275template(1, TreeTable_p_paginator_2_1_Template, 1, 0, null, 9)(2, TreeTable_p_paginator_2_2_Template, 1, 0, null, 9)(3, TreeTable_p_paginator_2_3_Template, 1, 0, null, 9)(4, TreeTable_p_paginator_2_4_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("styleClass", ctx_r0.cx("pcPaginator"))("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate ?? ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate ?? ctx_r0._paginatorRightTemplate)("appendTo", ctx_r0.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate ?? ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("locale", ctx_r0.paginatorLocale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_div_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_div_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "table", 18, 0);
    \u0275\u0275template(3, TreeTable_div_3_ng_container_3_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementStart(4, "thead", 20);
    \u0275\u0275template(5, TreeTable_div_3_ng_container_5_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "tbody", 21);
    \u0275\u0275elementStart(7, "tfoot", 20);
    \u0275\u0275template(8, TreeTable_div_3_ng_container_8_Template, 1, 0, "ng-container", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("wrapper"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.tableStyleClass)("ngStyle", ctx_r0.tableStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.colGroupTemplate || ctx_r0._colGroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(18, _c32, ctx_r0.columns));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("thead"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(20, _c32, ctx_r0.columns));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("tbody"));
    \u0275\u0275property("pTreeTableBody", ctx_r0.columns)("pTreeTableBodyTemplate", ctx_r0.bodyTemplate ?? ctx_r0._bodyTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("tfoot"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(22, _c32, ctx_r0.columns));
  }
}
function TreeTable_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c34, ctx_r0.cx("scrollableView"), ctx_r0.cx("frozenView")))("ttScrollableView", ctx_r0.frozenColumns)("frozen", true)("ngStyle", \u0275\u0275pureFunction1(8, _c35, ctx_r0.frozenWidth))("scrollHeight", ctx_r0.scrollHeight);
  }
}
function TreeTable_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TreeTable_div_4_div_1_Template, 2, 10, "div", 22);
    \u0275\u0275element(2, "div", 23, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("scrollableWrapper"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.frozenColumns || ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("scrollableView"));
    \u0275\u0275property("ttScrollableView", ctx_r0.columns)("frozen", false)("scrollHeight", ctx_r0.scrollHeight)("ngStyle", \u0275\u0275pureFunction2(9, _c33, ctx_r0.frozenWidth, "calc(100% - " + ctx_r0.frozenWidth + ")"));
  }
}
function TreeTable_p_paginator_5_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_5_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_5_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_1_ng_template_0_Template, 1, 1, "ng-template", 14);
  }
}
function TreeTable_p_paginator_5_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_5_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_5_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_2_ng_template_0_Template, 1, 1, "ng-template", 15);
  }
}
function TreeTable_p_paginator_5_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_5_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_5_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_3_ng_template_0_Template, 1, 1, "ng-template", 16);
  }
}
function TreeTable_p_paginator_5_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_p_paginator_5_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_5_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_p_paginator_5_4_ng_template_0_Template, 1, 1, "ng-template", 17);
  }
}
function TreeTable_p_paginator_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-paginator", 13);
    \u0275\u0275listener("onPageChange", function TreeTable_p_paginator_5_Template_p_paginator_onPageChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275template(1, TreeTable_p_paginator_5_1_Template, 1, 0, null, 9)(2, TreeTable_p_paginator_5_2_Template, 1, 0, null, 9)(3, TreeTable_p_paginator_5_3_Template, 1, 0, null, 9)(4, TreeTable_p_paginator_5_4_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("styleClass", ctx_r0.cx("pcPaginator"))("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate ?? ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate ?? ctx_r0._paginatorRightTemplate)("appendTo", ctx_r0.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate ?? ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("locale", ctx_r0.paginatorLocale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTable_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, TreeTable_div_6_ng_container_1_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("footer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.summaryTemplate || ctx_r0._summaryTemplate);
  }
}
function TreeTable_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("columnResizerHelper"));
    \u0275\u0275styleProp("display", "none");
  }
}
function TreeTable_span_8__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
}
function TreeTable_span_8_3_ng_template_0_Template(rf, ctx) {
}
function TreeTable_span_8_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_span_8_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", null, 4);
    \u0275\u0275template(2, TreeTable_span_8__svg_svg_2_Template, 1, 0, "svg", 25)(3, TreeTable_span_8_3_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("reorderIndicatorUp"));
    \u0275\u0275styleProp("display", "none");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate && !ctx_r0._reorderIndicatorUpIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate || ctx_r0._reorderIndicatorUpIconTemplate);
  }
}
function TreeTable_span_9__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 28);
  }
}
function TreeTable_span_9_3_ng_template_0_Template(rf, ctx) {
}
function TreeTable_span_9_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTable_span_9_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", null, 5);
    \u0275\u0275template(2, TreeTable_span_9__svg_svg_2_Template, 1, 0, "svg", 27)(3, TreeTable_span_9_3_Template, 1, 0, null, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("reorderIndicatorDown"));
    \u0275\u0275styleProp("display", "none");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate && !ctx_r0._reorderIndicatorDownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate || ctx_r0._reorderIndicatorDownIconTemplate);
  }
}
var _c36 = ["pTreeTableBody", ""];
var _c37 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  node: a1,
  rowData: a2,
  columns: a3
});
var _c38 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TTBody_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTBody_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTBody_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const serializedNode_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", \u0275\u0275pureFunction4(2, _c37, serializedNode_r1, serializedNode_r1.node, serializedNode_r1.node.data, ctx_r1.columns));
  }
}
function TTBody_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTBody_ng_template_0_ng_container_0_Template, 2, 7, "ng-container", 1);
  }
  if (rf & 2) {
    const serializedNode_r1 = ctx.$implicit;
    \u0275\u0275property("ngIf", serializedNode_r1.visible);
  }
}
function TTBody_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTBody_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tt.emptyMessageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c38, ctx_r1.columns, ctx_r1.frozen));
  }
}
var _c39 = ["scrollHeader"];
var _c40 = ["scrollHeaderBox"];
var _c41 = ["scrollBody"];
var _c42 = ["scrollTable"];
var _c43 = ["loadingTable"];
var _c44 = ["scrollFooter"];
var _c45 = ["scrollFooterBox"];
var _c46 = ["scrollableAligner"];
var _c47 = ["scroller"];
var _c48 = ["ttScrollableView", ""];
var _c49 = (a0) => ({
  height: a0
});
var _c50 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c51 = (a0) => ({
  options: a0
});
var _c52 = (a0, a1) => ({
  "max-height": a0,
  "overflow-y": a1
});
var _c53 = () => ({});
function TTScrollableView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const items_r3 = ctx.$implicit;
    const scrollerOptions_r4 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r5 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c50, items_r3, scrollerOptions_r4));
  }
}
function TTScrollableView_p_scroller_8_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_p_scroller_8_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTScrollableView_p_scroller_8_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 12);
  }
  if (rf & 2) {
    const scrollerOptions_r6 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tt.loaderTemplate || ctx_r1.tt._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c51, scrollerOptions_r6));
  }
}
function TTScrollableView_p_scroller_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTScrollableView_p_scroller_8_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function TTScrollableView_p_scroller_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 17, 3);
    \u0275\u0275listener("onLazyLoad", function TTScrollableView_p_scroller_8_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tt.onLazyItemLoad($event));
    });
    \u0275\u0275template(2, TTScrollableView_p_scroller_8_ng_template_2_Template, 1, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(4, TTScrollableView_p_scroller_8_ng_container_4_Template, 3, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c49, ctx_r1.tt.scrollHeight !== "flex" ? ctx_r1.tt.scrollHeight : void 0));
    \u0275\u0275property("items", ctx_r1.tt.serializedValue)("styleClass", ctx_r1.cx("scrollableBody"))("scrollHeight", ctx_r1.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r1.tt.virtualScrollItemSize || ctx_r1.tt._virtualRowHeight)("lazy", ctx_r1.tt.lazy)("options", ctx_r1.tt.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.tt.loaderTemplate || ctx_r1.tt._loaderTemplate);
  }
}
function TTScrollableView_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11, 6);
    \u0275\u0275template(3, TTScrollableView_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const buildInItems_r5 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("scrollableBody"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(5, _c52, ctx_r1.tt.scrollHeight !== "flex" ? ctx_r1.scrollHeight : void 0, !ctx_r1.frozen && ctx_r1.tt.scrollHeight ? "scroll" : void 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(9, _c50, ctx_r1.serializedValue, \u0275\u0275pureFunction0(8, _c53)));
  }
}
function TTScrollableView_ng_template_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", null, 8);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", "transparent");
  }
}
function TTScrollableView_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 18, 7);
    \u0275\u0275template(2, TTScrollableView_ng_template_10_ng_container_2_Template, 1, 0, "ng-container", 12);
    \u0275\u0275element(3, "tbody", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TTScrollableView_ng_template_10_div_4_Template, 2, 2, "div", 20);
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    const scrollerOptions_r8 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(scrollerOptions_r8.contentStyle);
    \u0275\u0275classMap(ctx_r1.tt.tableStyleClass);
    \u0275\u0275property("ngClass", scrollerOptions_r8.contentStyleClass)("ngStyle", ctx_r1.tt.tableStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenColGroupTemplate || ctx_r1.tt._frozenColGroupTemplate || ctx_r1.tt.colGroupTemplate || ctx_r1.tt._colGroupTemplate : ctx_r1.tt.colGroupTemplate || ctx_r1.tt._colGroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c32, ctx_r1.columns));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("tbody"));
    \u0275\u0275property("pTreeTableBody", ctx_r1.columns)("pTreeTableBodyTemplate", ctx_r1.frozen ? ctx_r1.tt.frozenBodyTemplate || ctx_r1.tt._frozenBodyTemplate || ctx_r1.tt.bodyTemplate || ctx_r1.tt._bodyTemplate : ctx_r1.tt.bodyTemplate || ctx_r1.tt._bodyTemplate)("serializedNodes", items_r7)("frozen", ctx_r1.frozen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.frozen);
  }
}
function TTScrollableView_div_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_div_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TTScrollableView_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 9)(2, "div", null, 10)(4, "table", 21);
    \u0275\u0275template(5, TTScrollableView_div_12_ng_container_5_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementStart(6, "tfoot", 13);
    \u0275\u0275template(7, TTScrollableView_div_12_ng_container_7_Template, 1, 0, "ng-container", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("scrollableFooter"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("scrollableFooterBox"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("scrollableFooterTable"));
    \u0275\u0275property("ngClass", ctx_r1.tt.tableStyleClass)("ngStyle", ctx_r1.tt.tableStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenColGroupTemplate || ctx_r1.tt._frozenColGroupTemplate || ctx_r1.tt.colGroupTemplate || ctx_r1.tt._colGroupTemplate : ctx_r1.tt.colGroupTemplate || ctx_r1.tt._colGroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(14, _c32, ctx_r1.columns));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("tfoot"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.frozen ? ctx_r1.tt.frozenFooterTemplate || ctx_r1.tt._frozenFooterTemplate || ctx_r1.tt.footerTemplate || ctx_r1.tt._footerTemplate : ctx_r1.tt.footerTemplate || ctx_r1.tt._footerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(16, _c32, ctx_r1.columns));
  }
}
function TTSortIcon_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function TTSortIcon_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function TTSortIcon_ng_container_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function TTSortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTSortIcon_ng_container_0__svg_svg_1_Template, 1, 2, "svg", 3)(2, TTSortIcon_ng_container_0__svg_svg_2_Template, 1, 2, "svg", 4)(3, TTSortIcon_ng_container_0__svg_svg_3_Template, 1, 2, "svg", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sortOrder === -1);
  }
}
function TTSortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function TTSortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTSortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTSortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, TTSortIcon_span_1_1_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.tt.sortIconTemplate || ctx_r0.tt._sortIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c32, ctx_r0.sortOrder));
  }
}
function TTSortIcon_p_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("sortableColumnBadge"));
    \u0275\u0275property("value", ctx_r0.getBadgeValue());
  }
}
var _c54 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function TTCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TTCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.tt.checkboxIconTemplate || ctx_r0.tt._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c54, ctx_r0.checked, ctx_r0.partialChecked));
  }
}
function TTCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTCheckbox_ng_container_1_ng_template_1_Template, 1, 5, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
function TTHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TTHeaderCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTHeaderCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TTHeaderCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.tt.headerCheckboxIconTemplate || ctx_r0.tt._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, ctx_r0.checked));
  }
}
function TTHeaderCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TTHeaderCheckbox_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
function TreeTableCellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTableCellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TreeTableCellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function TreeTableCellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeTableCellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TreeTableCellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.outputTemplate);
  }
}
function TreeTableToggler_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 5);
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 6);
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TreeTableToggler_ng_container_1__svg_svg_1_Template, 1, 1, "svg", 3)(2, TreeTableToggler_ng_container_1__svg_svg_2_Template, 1, 1, "svg", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.rowNode.node.expanded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.rowNode.node.expanded);
  }
}
function TreeTableToggler_2_ng_template_0_Template(rf, ctx) {
}
function TreeTableToggler_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TreeTableToggler_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var theme = (
  /*css*/
  `
/* For PrimeNG */
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable-sort-icon {
    color: dt('treetable.sort.icon.color');
    font-size: dt('treetable.sort.icon.size');
    width: dt('treetable.sort.icon.size');
    height: dt('treetable.sort.icon.size');
    transition: color dt('treetable.transition.duration');
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-treetable-auto-layout>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-auto-layout>.p-treetable-wrapper>table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody>tr {
    cursor: pointer;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
}


/* Scrollable */
.p-treetable-scrollable-wrapper {
    position: relative;
}

.p-treetable-scrollable-header,
.p-treetable-scrollable-footer {
    overflow: hidden;
    flex-shrink: 0;
}

.p-treetable-scrollable-body {
    overflow: auto;
    position: relative;
}

.p-treetable-virtual-table {
    position: absolute;
}

/* Frozen Columns */
.p-treetable-frozen-view .p-treetable-scrollable-body {
    overflow: hidden;
}

.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child {
    border-right: 0 none;
}

.p-treetable-unfrozen-view {
    position: absolute;
    top: 0;
}

/* Flex Scrollable */
.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,
.p-treetable-flex-scrollable .p-treetable-scrollable-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body {
    flex: 1;
}

/* Resizable */
.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: dt('treetable.column.resizer.width');
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable .p-column-resizer-helper {
    width: dt('treetable.resize.indicator.width');
    position: absolute;
    z-index: 10;
    display: none;
    background: dt('treetable.resize.indicator.color');
}

.p-treetable .p-row-editor-init,
.p-treetable .p-row-editor-save,
.p-treetable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}


/* Reorder */
.p-treetable-reorder-indicator-up,
.p-treetable-reorder-indicator-down {
    position: absolute;
    display: none;
}

[ttReorderableColumn] {
    cursor: move;
}

/* Loader */
.p-treetable-mask {
    position: absolute !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-treetable-loading-icon {
    font-size: dt('treetable.loading.icon.size');
    width: dt('treetable.loading.icon.size');
    height: dt('treetable.loading.icon.size');
}

/* Virtual Scroll */
.p-treetable .p-scroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}

.p-treetable .p-paginator-top {
    border-color: dt('treetable.paginator.top.border.color');
    border-style: solid;
    border-width: dt('treetable.paginator.top.border.width');
}

.p-treetable .p-paginator-bottom {
    border-color: dt('treetable.paginator.bottom.border.color');
    border-style: solid;
    border-width: dt('treetable.paginator.bottom.border.width');
}

.p-treetable .p-treetable-header {
    background: dt('treetable.header.background');
    color: dt('treetable.header.color');
    border-color: dt('treetable.header.border.color');
    border-style: solid;
    border-width: dt('treetable.header.border.width');
    padding: dt('treetable.header.padding');
    font-weight: dt('treetable.column.title.font.weight');
}

.p-treetable .p-treetable-footer {
    background: dt('treetable.footer.background');
    color: dt('treetable.footer.color');
    border-color: dt('treetable.footer.border.color');
    border-style: solid;
    border-width: dt('treetable.footer.border.width');
    padding: dt('treetable.footer.padding');
    font-weight: dt('treetable.column.footer.font.weight');
}

.p-treetable .p-treetable-thead>tr>th {
    padding: dt('treetable.header.cell.padding');
    background: dt('treetable.header.cell.background');
    border-color: dt('treetable.header.cell.border.color');
    border-style: solid;
    border-width: 0 0 1px 0;
    color: dt('treetable.header.cell.color');
    font-weight: dt('treetable.column.title.font.weight');
    text-align: start;
    transition: background dt('treetable.transition.duration'), color dt('treetable.transition.duration'), border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'), box-shadow dt('treetable.transition.duration');
}

.p-treetable .p-treetable-tfoot>tr>td {
    text-align: start;
    padding: dt('treetable.footer.cell.padding');
    border-color: dt('treetable.footer.cell.border.color');
    border-style: solid;
    border-width: 0 0 1px 0;
    color: dt('treetable.footer.cell.color');
    background: dt('treetable.footer.cell.background');
    font-weight: dt('treetable.column.footer.font.weight');
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: dt('treetable.sort.icon.color');
    transition: color dt('treetable.transition.duration');
}


.p-treetable .p-sortable-column:not(.p-treetable-column-sorted):hover {
    background: dt('treetable.header.cell.hover.background');
    color: dt('treetable.header.cell.hover.color');
}

.p-treetable .p-sortable-column:not(.p-treetable-column-sorted):hover .p-sortable-column-icon {
    color: dt('treetable.sort.icon.hover.color');
}

.p-treetable .p-sortable-column.p-treetable-column-sorted {
    background: dt('treetable.header.cell.selected.background');
    color: dt('treetable.header.cell.selected.color');
}

.p-treetable .p-sortable-column.p-treetable-column-sorted .p-sortable-column-icon {
    color: dt('treetable.header.cell.selected.color');
}

.p-treetable .p-sortable-column:focus-visible {
    box-shadow: dt('treetable.header.cell.focus.ring.shadow');
    outline: dt('treetable.header.cell.focus.ring.width') dt('treetable.header.cell.focus.ring.style') dt('treetable.header.cell.focus.ring.color');
    outline-offset: dt('treetable.header.cell.focus.ring.offset');
}

.p-treetable-hoverable .p-treetable-selectable-row {
    cursor: pointer;
}

.p-treetable .p-treetable-tbody > tr {
    outline-color: transparent;
    background: dt('treetable.row.background');
    color: dt('treetable.row.color');
    transition: background dt('treetable.transition.duration'), color dt('treetable.transition.duration'), border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'), box-shadow dt('treetable.transition.duration');
}

.p-treetable .p-treetable-tbody>tr>td {
    text-align: start;
    border-color: dt('treetable.body.cell.border.color');
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: dt('treetable.body.cell.padding');
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: dt('treetable.node.toggle.button.size');
    height: dt('treetable.node.toggle.button.size');
    color: dt('treetable.node.toggle.button.color');
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: dt('treetable.node.toggle.button.border.radius');
    transition: background dt('treetable.transition.duration'), color dt('treetable.transition.duration'), border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'), box-shadow dt('treetable.transition.duration');
    outline-color: transparent;
    user-select: none;
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:enabled:hover {
    color: dt('treetable.node.toggle.button.hover.color');
    background: dt('treetable.node.toggle.button.hover.background');
}

.p-treetable .p-treetable-tbody>tr>tr.treetable-row-selected .p-treetable-toggler:hover {
    background: dt('treetable.node.toggle.button.selected.hover.background');
    color: dt('treetable.node.toggle.button.selected.hover.color');
}

.p-treetable .p-treetable-tbody>tr>td .p-treetable-toggler:focus-visible {
    box-shadow: dt('treetable.node.toggle.button.focus.ring.shadow');
    outline: dt('treetable.node.toggle.button.focus.ring.width') dt('treetable.node.toggle.button.focus.ring.style') dt('treetable.node.toggle.button.focus.ring.color');
    outline-offset: dt('treetable.node.toggle.button.focus.ring.offset');
}


.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected {
    background: dt('treetable.row.selected.background');
    color: dt('treetable.row.selected.color');
}

.p-treetable-tbody > tr:focus-visible,
.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
    box-shadow: dt('treetable.row.focus.ring.shadow');
    outline: dt('treetable.row.focus.ring.width') dt('treetable.row.focus.ring.style') dt('treetable.row.focus.ring.color');
    outline-offset: dt('treetable.row.focus.ring.offset');
}

.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected .p-treetable-toggler {
    color: inherit;
}

.p-treetable .p-treetable-tbody>tr.p-treetable-row-selected .p-treetable-toggler:hover {
    background: dt('treetable.node.toggle.button.selected.hover.background');
    color: dt('treetable.node.toggle.button.selected.hover.color');
}

.p-treetable.p-treetable-hoverable-rows .p-treetable-tbody>tr:not(.p-treetable-row-selected):hover {
    background: dt('treetable.row.hover.background');
    color: dt('treetable.row.hover.color');
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead>tr>th {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody>tr>td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot>tr>td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead>tr>th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}

p-treetabletoggler + p-treetablecheckbox .p-checkbox,
p-treetable-toggler + p-treetable-checkbox .p-checkbox,
p-tree-table-toggler + p-tree-table-checkbox .p-checkbox {
    vertical-align: middle;
}

p-treetabletoggler + p-treetablecheckbox + span,
p-treetable-toggler + p-treetable-checkbox + span,
p-tree-table-toggler + p-tree-table-checkbox + span {
    vertical-align: middle;
}

p-treetable-sort-icon {
    display: inline-flex;
    align-items: center;
    gap: dt('treetable.header.cell.gap');
}
`
);
var classes = {
  root: ({
    instance
  }) => ["p-treetable p-component", {
    "p-treetable-gridlines": instance.showGridlines,
    "p-treetable-hoverable-rows": instance.rowHover || instance.selectionMode === "single" || instance.selectionMode === "multiple",
    "p-treetable-auto-layout": instance.autoLayout,
    "p-treetable-resizable": instance.resizableColumns,
    "p-treetable-resizable-fit": instance.resizableColumns && instance.columnResizeMode === "fit",
    "p-treetable-flex-scrollable": instance.scrollable && instance.scrollHeight === "flex"
  }],
  loading: "p-treetable-loading",
  //TODO: required?
  mask: "p-treetable-mask p-overlay-mask",
  loadingIcon: "p-treetable-loading-icon",
  header: "p-treetable-header",
  pcPaginator: ({
    instance
  }) => ["p-treetable-paginator-" + instance.paginatorPosition, instance.paginatorStyleClass],
  tableContainer: "p-treetable-table-container",
  table: ({
    instance
  }) => ({
    "p-treetable-table": true,
    "p-treetable-scrollable-table": instance.scrollable,
    "p-treetable-resizable-table": instance.resizableColumns,
    "p-treetable-resizable-table-fit": instance.resizableColumns && instance.columnResizeMode === "fit"
  }),
  thead: "p-treetable-thead",
  sortableColumn: ({
    instance
  }) => ({
    "p-sortable-column": instance.isEnabled(),
    "p-treetable-column-sorted": instance.sorted
  }),
  sortableColumnIcon: "p-treetable-sort-icon",
  sortableColumnBadge: "p-sortable-column-badge",
  columnResizer: "p-treetable-column-resizer",
  columnHeaderContent: "p-treetable-column-header-content",
  columnTitle: "p-treetable-column-title",
  sortIcon: "p-treetable-sort-icon",
  pcSortBadge: "p-treetable-sort-badge",
  tbody: "p-treetable-tbody",
  row: ({
    instance
  }) => ({
    "p-treetable-row-selected": instance.selected
  }),
  contextMenuRow: ({
    instance
  }) => ({
    "p-treetable-contextmenu-row-selected": instance.selected
  }),
  toggler: "p-treetable-toggler",
  nodeToggleButton: "p-treetable-node-toggle-button",
  nodeToggleIcon: "p-treetable-node-toggle-icon",
  pcNodeCheckbox: "p-treetable-node-checkbox",
  tfoot: "p-treetable-tfoot",
  footerCell: ({
    instance
  }) => ({
    "p-treetable-frozen-column": instance.columnProp("frozen")
  }),
  footer: "p-treetable-footer",
  columnResizeIndicator: "p-treetable-column-resize-indicator",
  wrapper: "p-treetable-wrapper",
  scrollableWrapper: "p-treetable-scrollable-wrapper",
  scrollableView: "p-treetable-scrollable-view",
  frozenView: "p-treetable-frozen-view",
  columnResizerHelper: "p-column-resizer-helper",
  reorderIndicatorUp: "p-treetable-reorder-indicator-up",
  reorderIndicatorDown: "p-treetable-reorder-indicator-down",
  scrollableHeader: "p-treetable-scrollable-header",
  scrollableHeaderBox: "p-treetable-scrollable-header-box",
  scrollableHeaderTable: "p-treetable-scrollable-header-table",
  scrollableBody: "p-treetable-scrollable-body",
  scrollableFooter: "p-treetable-scrollable-footer",
  scrollableFooterBox: "p-treetable-scrollable-footer-box",
  scrollableFooterTable: "p-treetable-scrollable-footer-table"
};
var TreeTableStyle = class _TreeTableStyle extends BaseStyle {
  name = "treetable";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TreeTableStyle_BaseFactory;
    return function TreeTableStyle_Factory(__ngFactoryType__) {
      return (\u0275TreeTableStyle_BaseFactory || (\u0275TreeTableStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TreeTableStyle)))(__ngFactoryType__ || _TreeTableStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeTableStyle,
    factory: _TreeTableStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableStyle, [{
    type: Injectable
  }], null, null);
})();
var TreeTableClasses;
(function(TreeTableClasses2) {
  TreeTableClasses2["root"] = "p-treetable";
  TreeTableClasses2["loading"] = "p-treetable-loading";
  TreeTableClasses2["mask"] = "p-treetable-mask";
  TreeTableClasses2["loadingIcon"] = "p-treetable-loading-icon";
  TreeTableClasses2["header"] = "p-treetable-header";
  TreeTableClasses2["pcPaginator"] = "p-treetable-paginator-[position]";
  TreeTableClasses2["tableContainer"] = "p-treetable-table-container";
  TreeTableClasses2["table"] = "p-treetable-table";
  TreeTableClasses2["thead"] = "p-treetable-thead";
  TreeTableClasses2["columnResizer"] = "p-treetable-column-resizer";
  TreeTableClasses2["columnTitle"] = "p-treetable-column-title";
  TreeTableClasses2["sortIcon"] = "p-treetable-sort-icon";
  TreeTableClasses2["pcSortBadge"] = "p-treetable-sort-badge";
  TreeTableClasses2["tbody"] = "p-treetable-tbody";
  TreeTableClasses2["nodeToggleButton"] = "p-treetable-node-toggle-button";
  TreeTableClasses2["nodeToggleIcon"] = "p-treetable-node-toggle-icon";
  TreeTableClasses2["pcNodeCheckbox"] = "p-treetable-node-checkbox";
  TreeTableClasses2["emptyMessage"] = "p-treetable-empty-message";
  TreeTableClasses2["tfoot"] = "p-treetable-tfoot";
  TreeTableClasses2["footer"] = "p-treetable-footer";
  TreeTableClasses2["columnResizeIndicator"] = "p-treetable-column-resize-indicator";
  TreeTableClasses2["wrapper"] = "p-treetable-wrapper";
  TreeTableClasses2["scrollableWrapper"] = "p-treetable-scrollable-wrapper";
  TreeTableClasses2["scrollableView"] = "p-treetable-scrollable-view";
  TreeTableClasses2["frozenView"] = "p-treetable-frozen-view";
  TreeTableClasses2["columnResizerHelper"] = "p-treetable-column-resizer-helper";
  TreeTableClasses2["reorderIndicatorUp"] = "p-treetable-reorder-indicator-up";
  TreeTableClasses2["reorderIndicatorDown"] = "p-treetable-reorder-indicator-down";
  TreeTableClasses2["scrollableHeader"] = "p-treetable-scrollable-header";
  TreeTableClasses2["scrollableHeaderBox"] = "p-treetable-scrollable-header-box";
  TreeTableClasses2["scrollableHeaderTable"] = "p-treetable-scrollable-header-table";
  TreeTableClasses2["scrollableBody"] = "p-treetable-scrollable-body";
  TreeTableClasses2["scrollableFooter"] = "p-treetable-scrollable-footer";
  TreeTableClasses2["scrollableFooterBox"] = "p-treetable-scrollable-footer-box";
  TreeTableClasses2["scrollableFooterTable"] = "p-treetable-scrollable-footer-table";
  TreeTableClasses2["sortableColumnIcon"] = "p-sortable-column-icon";
})(TreeTableClasses || (TreeTableClasses = {}));
var TreeTableService = class _TreeTableService {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  uiUpdateSource = new Subject();
  totalRecordsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  uiUpdateSource$ = this.uiUpdateSource.asObservable();
  totalRecordsSource$ = this.totalRecordsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(node) {
    this.contextMenuSource.next(node);
  }
  onUIUpdate(value) {
    this.uiUpdateSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  static \u0275fac = function TreeTableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeTableService,
    factory: _TreeTableService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableService, [{
    type: Injectable
  }], null, null);
})();
var TreeTable = class _TreeTable extends BaseComponent {
  _componentStyle = inject(TreeTableStyle);
  /**
   * An array of objects to represent dynamic columns.
   * @group Props
   */
  columns;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the table.
   * @group Props
   */
  tableStyle;
  /**
   * Style class of the table.
   * @group Props
   */
  tableStyleClass;
  /**
   * Whether the cell widths scale according to their content or not.
   * @group Props
   */
  autoLayout;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
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
   * Index of the first row to be displayed.
   * @group Props
   */
  first = 0;
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
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
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
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
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
   * Sort order to use when an unsorted column gets sorted by user interaction.
   * @group Props
   */
  defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @group Props
   */
  sortMode = "single";
  /**
   * When true, resets paginator to first page after sorting.
   * @group Props
   */
  resetPageOnSort = true;
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   * @group Props
   */
  customSort;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   * @group Props
   */
  selectionMode;
  /**
   * Selected row with a context menu.
   * @group Props
   */
  contextMenuSelection;
  /**
   * Mode of the contet menu selection.
   * @group Props
   */
  contextMenuSelectionMode = "separate";
  /**
   * A property to uniquely identify a record in data.
   * @group Props
   */
  dataKey;
  /**
   * Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @group Props
   */
  compareSelectionBy = "deepEquals";
  /**
   * Adds hover effect to rows without the need for selectionMode.
   * @group Props
   */
  rowHover;
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
   * Whether to show the loading mask when loading property is true.
   * @group Props
   */
  showLoader = true;
  /**
   * When specified, enables horizontal and/or vertical scrolling.
   * @group Props
   */
  scrollable;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   * @group Props
   */
  scrollHeight;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of a row to use in calculations of virtual scrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll.
   * @group Props
   */
  virtualScrollDelay = 150;
  /**
   * Width of the frozen columns container.
   * @group Props
   */
  frozenWidth;
  /**
   * An array of objects to represent dynamic columns that are frozen.
   * @group Props
   */
  frozenColumns;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @group Props
   */
  resizableColumns;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   * @group Props
   */
  columnResizeMode = "fit";
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @group Props
   */
  reorderableColumns;
  /**
   * Local ng-template varilable of a ContextMenu.
   * @group Props
   */
  contextMenu;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  rowTrackBy = (index, item) => item;
  /**
   * An array of FilterMetadata objects to provide external filters.
   * @group Props
   */
  filters = {};
  /**
   * An array of fields as string to use in global filtering.
   * @group Props
   */
  globalFilterFields;
  /**
   * Delay in milliseconds before filtering the data.
   * @group Props
   */
  filterDelay = 300;
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @group Props
   */
  filterMode = "lenient";
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Locale to be used in paginator formatting.
   * @group Props
   */
  paginatorLocale;
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @defaultValue 1
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @defaultValue null
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @defaultValue null
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Indicates the height of rows to be scrolled.
   * @defaultValue 28
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.log("The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * A map of keys to control the selection state.
   * @group Props
   */
  get selectionKeys() {
    return this._selectionKeys;
  }
  set selectionKeys(value) {
    this._selectionKeys = value;
    this.selectionKeysChange.emit(this._selectionKeys);
  }
  /**
   * Whether to show grid lines between cells.
   * @defaultValue false
   * @group Props
   */
  showGridlines = false;
  /**
   * Callback to invoke on selected node change.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke on context menu selection change.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  contextMenuSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TreeTableFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeTableNodeExpandEvent} event - Node expand event.
   * @group Emits
   */
  onNodeExpand = new EventEmitter();
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeTableNodeCollapseEvent} event - Node collapse event.
   * @group Emits
   */
  onNodeCollapse = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {TreeTablePaginatorState} object - Paginator state.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when a column gets sorted.
   * @param {Object} Object - Sort data.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {TreeTableLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * An event emitter to invoke on custom sorting, refer to sorting section for details.
   * @param {TreeTableSortEvent} event - Custom sort event.
   * @group Emits
   */
  sortFunction = new EventEmitter();
  /**
   * Callback to invoke when a column is resized.
   * @param {TreeTableColResizeEvent} event - Custom column resize event.
   * @group Emits
   */
  onColResize = new EventEmitter();
  /**
   * Callback to invoke when a column is reordered.
   * @param {TreeTableColumnReorderEvent} event - Custom column reorder.
   * @group Emits
   */
  onColReorder = new EventEmitter();
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeTableNode} object - Node instance.
   * @group Emits
   */
  onNodeSelect = new EventEmitter();
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeTableNodeUnSelectEvent} event - Custom node unselect event.
   * @group Emits
   */
  onNodeUnselect = new EventEmitter();
  /**
   * Callback to invoke when a node is selected with right click.
   * @param {TreeTableContextMenuSelectEvent} event - Custom context menu select event.
   * @group Emits
   */
  onContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when state of header checkbox changes.
   * @param {TreeTableHeaderCheckboxToggleEvent} event - Custom checkbox toggle event.
   * @group Emits
   */
  onHeaderCheckboxToggle = new EventEmitter();
  /**
   * Callback to invoke when a cell switches to edit mode.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditInit = new EventEmitter();
  /**
   * Callback to invoke when cell edit is completed.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditComplete = new EventEmitter();
  /**
   * Callback to invoke when cell edit is cancelled with escape key.
   * @param {TreeTableEditEvent} event - Custom edit event.
   * @group Emits
   */
  onEditCancel = new EventEmitter();
  /**
   * Callback to invoke when selectionKeys are changed.
   * @param {Object} object - updated value of the selectionKeys.
   * @group Emits
   */
  selectionKeysChange = new EventEmitter();
  resizeHelperViewChild;
  reorderIndicatorUpViewChild;
  reorderIndicatorDownViewChild;
  tableViewChild;
  scrollableViewChild;
  scrollableFrozenViewChild;
  _value = [];
  _virtualRowHeight = 28;
  _selectionKeys;
  serializedValue;
  _totalRecords = 0;
  _multiSortMeta;
  _sortField;
  _sortOrder = 1;
  filteredNodes;
  filterTimeout;
  _colGroupTemplate;
  colGroupTemplate;
  _captionTemplate;
  captionTemplate;
  _headerTemplate;
  headerTemplate;
  _bodyTemplate;
  bodyTemplate;
  _footerTemplate;
  footerTemplate;
  _summaryTemplate;
  summaryTemplate;
  _emptyMessageTemplate;
  emptyMessageTemplate;
  _paginatorLeftTemplate;
  paginatorLeftTemplate;
  _paginatorRightTemplate;
  paginatorRightTemplate;
  _paginatorDropdownItemTemplate;
  paginatorDropdownItemTemplate;
  _frozenHeaderTemplate;
  frozenHeaderTemplate;
  _frozenBodyTemplate;
  frozenBodyTemplate;
  _frozenFooterTemplate;
  frozenFooterTemplate;
  _frozenColGroupTemplate;
  frozenColGroupTemplate;
  _loadingIconTemplate;
  loadingIconTemplate;
  _reorderIndicatorUpIconTemplate;
  reorderIndicatorUpIconTemplate;
  _reorderIndicatorDownIconTemplate;
  reorderIndicatorDownIconTemplate;
  _sortIconTemplate;
  sortIconTemplate;
  _checkboxIconTemplate;
  checkboxIconTemplate;
  _headerCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  _togglerIconTemplate;
  togglerIconTemplate;
  _paginatorFirstPageLinkIconTemplate;
  paginatorFirstPageLinkIconTemplate;
  _paginatorLastPageLinkIconTemplate;
  paginatorLastPageLinkIconTemplate;
  _paginatorPreviousPageLinkIconTemplate;
  paginatorPreviousPageLinkIconTemplate;
  _paginatorNextPageLinkIconTemplate;
  paginatorNextPageLinkIconTemplate;
  _loaderTemplate;
  loaderTemplate;
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  dropPosition;
  preventSelectionSetterPropagation;
  _selection;
  selectedKeys = {};
  rowTouched;
  editingCell;
  editingCellData;
  editingCellField;
  editingCellClick;
  documentEditListener;
  initialized;
  toggleRowIndex;
  ngOnInit() {
    super.ngOnInit();
    if (this.lazy && this.lazyLoadOnInit && !this.virtualScroll) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.initialized = true;
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
        case "togglericon":
          this.togglerIconTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
      }
    });
  }
  filterService = inject(FilterService);
  tableService = inject(TreeTableService);
  zone = inject(NgZone);
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.value) {
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == "single" && this.sortField) this.sortSingle();
        else if (this.sortMode == "multiple" && this.multiSortMeta) this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.updateSerializedValue();
      this.tableService.onUIUpdate(this.value);
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple") {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateselectedKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  updateSerializedValue() {
    this.serializedValue = [];
    if (this.paginator) this.serializePageNodes();
    else this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
  }
  serializeNodes(parent, nodes, level, visible) {
    if (nodes && nodes.length) {
      for (let node of nodes) {
        node.parent = parent;
        const rowNode = {
          node,
          parent,
          level,
          visible: visible && (parent ? parent.expanded : true)
        };
        this.serializedValue.push(rowNode);
        if (rowNode.visible && node.expanded) {
          this.serializeNodes(node, node.children, level + 1, rowNode.visible);
        }
      }
    }
  }
  serializePageNodes() {
    let data = this.filteredNodes || this.value;
    this.serializedValue = [];
    if (data && data.length) {
      const first = this.lazy ? 0 : this.first;
      for (let i = first; i < first + this.rows; i++) {
        let node = data[i];
        if (node) {
          this.serializedValue.push({
            node,
            parent: null,
            level: 0,
            visible: true
          });
          this.serializeNodes(node, node.children, 1, true);
        }
      }
    }
  }
  updateselectedKeys() {
    if (this.dataKey && this._selection) {
      this.selectedKeys = {};
      if (Array.isArray(this._selection)) {
        for (let node of this._selection) {
          this.selectedKeys[String(c(node.data, this.dataKey))] = 1;
        }
      } else {
        this.selectedKeys[String(c(this._selection.data, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    if (this.lazy) this.onLazyLoad.emit(this.createLazyLoadMetadata());
    else this.serializePageNodes();
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    this.tableService.onUIUpdate(this.value);
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      this.sortSingle();
      if (this.resetPageOnSort && this.scrollable) {
        this.resetScrollTop();
      }
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort && this.scrollable) {
            this.resetScrollTop();
          }
        }
        this.multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
  }
  sortSingle() {
    if (this.sortField && this.sortOrder) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field: this.sortField,
        order: this.sortOrder
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
      this.updateSerializedValue();
    }
  }
  sortNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: nodes,
        mode: this.sortMode,
        field: this.sortField,
        order: this.sortOrder
      });
    } else {
      nodes.sort((node1, node2) => {
        let value1 = c(node1.data, this.sortField);
        let value2 = c(node2.data, this.sortField);
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return this.sortOrder * result;
      });
    }
    for (let node of nodes) {
      this.sortNodes(node.children);
    }
  }
  sortMultiple() {
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        this.sortMultipleNodes(this.value);
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.updateSerializedValue();
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  sortMultipleNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    }
    if (this.customSort) {
      this.sortFunction.emit({
        data: this.value,
        mode: this.sortMode,
        multiSortMeta: this.multiSortMeta
      });
    } else {
      nodes.sort((node1, node2) => {
        return this.multisortField(node1, node2, this.multiSortMeta, 0);
      });
    }
    for (let node of nodes) {
      this.sortMultipleNodes(node.children);
    }
  }
  multisortField(node1, node2, multiSortMeta, index) {
    if (a(this.multiSortMeta) || a(multiSortMeta[index])) {
      return 0;
    }
    let value1 = c(node1.data, multiSortMeta[index].field);
    let value2 = c(node2.data, multiSortMeta[index].field);
    let result = null;
    if (value1 == null && value2 != null) result = -1;
    else if (value1 != null && value2 == null) result = 1;
    else if (value1 == null && value2 == null) result = 0;
    if (typeof value1 == "string" || value1 instanceof String) {
      if (value1.localeCompare && value1 != value2) {
        return multiSortMeta[index].order * value1.localeCompare(value2, void 0, {
          numeric: true
        });
      }
    } else {
      result = value1 < value2 ? -1 : 1;
    }
    if (value1 == value2) {
      return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
    }
    return multiSortMeta[index].order * result;
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event), {
      rows: event.last - event.first
    }));
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);
    else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollToVirtualIndex(index);
    }
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - Scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
    if (this.scrollableFrozenViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }
  }
  isEmpty() {
    let data = this.filteredNodes || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onColumnResizeBegin(event) {
    let containerLeft = K(this.el?.nativeElement).left;
    this.lastResizerHelperX = event.pageX - containerLeft + this.el?.nativeElement.scrollLeft;
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = K(this.el?.nativeElement).left;
    W(this.el?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.el?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.el?.nativeElement.scrollLeft + "px";
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd(event, column) {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = column.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = column.style.minWidth || 15;
    if (columnWidth + delta > parseInt(minWidth)) {
      if (this.columnResizeMode === "fit") {
        let nextColumn = column.nextElementSibling;
        while (!nextColumn.offsetParent) {
          nextColumn = nextColumn.nextElementSibling;
        }
        if (nextColumn) {
          let nextColumnWidth = nextColumn.offsetWidth - delta;
          let nextColumnMinWidth = nextColumn.style.minWidth || 15;
          if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
            if (this.scrollable) {
              let scrollableView = this.findParentScrollableView(column);
              let scrollableBodyTable = z(scrollableView, ".p-treetable-scrollable-body table") || z(scrollableView, ".p-scroller-viewport table");
              let scrollableHeaderTable = z(scrollableView, "table.p-treetable-scrollable-header-table");
              let scrollableFooterTable = z(scrollableView, "table.p-treetable-scrollable-footer-table");
              let resizeColumnIndex = Ht(column);
              this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
            } else {
              column.style.width = newColumnWidth + "px";
              if (nextColumn) {
                nextColumn.style.width = nextColumnWidth + "px";
              }
            }
          }
        }
      } else if (this.columnResizeMode === "expand") {
        if (this.scrollable) {
          let scrollableView = this.findParentScrollableView(column);
          let scrollableBody = z(scrollableView, ".p-treetable-scrollable-body") || z(scrollableView, ".p-scroller-viewport");
          let scrollableHeader = z(scrollableView, ".p-treetable-scrollable-header");
          let scrollableFooter = z(scrollableView, ".p-treetable-scrollable-footer");
          let scrollableBodyTable = z(scrollableView, ".p-treetable-scrollable-body table") || z(scrollableView, ".p-scroller-viewport table");
          let scrollableHeaderTable = z(scrollableView, "table.p-treetable-scrollable-header-table");
          let scrollableFooterTable = z(scrollableView, "table.p-treetable-scrollable-footer-table");
          scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + "px";
          scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + "px";
          if (scrollableFooterTable) {
            scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + "px";
          }
          let resizeColumnIndex = Ht(column);
          const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
          const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
          const isContainerInViewport = this.el?.nativeElement.offsetWidth >= scrollableBodyTableWidth;
          let setWidth = (container, table, width, isContainerInViewport2) => {
            if (container && table) {
              container.style.width = isContainerInViewport2 ? width + P(scrollableBody) + "px" : "auto";
              table.style.width = width + "px";
            }
          };
          setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
          setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
          setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
          this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
          this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
        } else {
          this.tableViewChild.nativeElement.style.width = this.tableViewChild?.nativeElement.offsetWidth + delta + "px";
          column.style.width = newColumnWidth + "px";
          let containerWidth = this.tableViewChild?.nativeElement.style.width;
          this.el.nativeElement.style.width = containerWidth + "px";
        }
      }
      this.onColResize.emit({
        element: column,
        delta
      });
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    O(this.el?.nativeElement, "p-unselectable-text");
  }
  findParentScrollableView(column) {
    if (column) {
      let parent = column.parentElement;
      while (parent && !R(parent, "p-treetable-scrollable-view")) {
        parent = parent.parentElement;
      }
      return parent;
    } else {
      return null;
    }
  }
  resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
    if (table) {
      let colGroup = table.children[0].nodeName === "COLGROUP" ? table.children[0] : null;
      if (colGroup) {
        let col = colGroup.children[resizeColumnIndex];
        let nextCol = col.nextElementSibling;
        col.style.width = newColumnWidth + "px";
        if (nextCol && nextColumnWidth) {
          nextCol.style.width = nextColumnWidth + "px";
        }
      } else {
        throw "Scrollable tables require a colgroup to support resizable columns";
      }
    }
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = J(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = G(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = K(this.el?.nativeElement);
      let dropHeaderOffset = K(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "ttreorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "ttreorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        Q2(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  handleRowClick(event) {
    let targetNode = event.originalEvent.target.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || R(event.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      this.preventSelectionSetterPropagation = true;
      let rowNode = event.rowNode;
      let selected = this.isSelected(rowNode.node);
      let metaSelection = this.rowTouched ? false : this.metaKeySelection;
      let dataKeyValue = this.dataKey ? String(c(rowNode.node.data, this.dataKey)) : null;
      if (metaSelection) {
        let keyboardEvent = event.originalEvent;
        let metaKey = keyboardEvent.metaKey || keyboardEvent.ctrlKey;
        if (selected && metaKey) {
          if (this.isSingleSelectionMode()) {
            this._selection = null;
            this.selectedKeys = {};
            this.selectionChange.emit(null);
          } else {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          }
          this.onNodeUnselect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: "row"
          });
        } else {
          if (this.isSingleSelectionMode()) {
            this._selection = rowNode.node;
            this.selectionChange.emit(rowNode.node);
            if (dataKeyValue) {
              this.selectedKeys = {};
              this.selectedKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            if (metaKey) {
              this._selection = this.selection || [];
            } else {
              this._selection = [];
              this.selectedKeys = {};
            }
            this._selection = [...this.selection, rowNode.node];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
          this.onNodeSelect.emit({
            originalEvent: event.originalEvent,
            node: rowNode.node,
            type: "row",
            index: event.rowIndex
          });
        }
      } else {
        if (this.selectionMode === "single") {
          if (selected) {
            this._selection = null;
            this.selectedKeys = {};
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row"
            });
          } else {
            this._selection = rowNode.node;
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row",
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectedKeys = {};
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
        } else if (this.selectionMode === "multiple") {
          if (selected) {
            let selectionIndex = this.findIndexInSelection(rowNode.node);
            this._selection = this.selection.filter((val, i) => i != selectionIndex);
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row"
            });
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          } else {
            this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: "row",
              index: event.rowIndex
            });
            if (dataKeyValue) {
              this.selectedKeys[dataKeyValue] = 1;
            }
          }
        }
      }
      this.tableService.onSelectionChange();
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const node = event.rowNode.node;
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = node;
        this.contextMenuSelectionChange.emit(node);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(node);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(node);
        let dataKeyValue = this.dataKey ? String(c(node.data, this.dataKey)) : null;
        if (!selected) {
          if (this.isSingleSelectionMode()) {
            this.selection = node;
            this.selectionChange.emit(node);
          } else if (this.isMultipleSelectionMode()) {
            this.selection = [node];
            this.selectionChange.emit(this.selection);
          }
          if (dataKeyValue) {
            this.selectedKeys[dataKeyValue] = 1;
          }
        }
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          node
        });
      }
    }
  }
  toggleNodeWithCheckbox(event) {
    this.selection = this.selection || [];
    this.preventSelectionSetterPropagation = true;
    let node = event.rowNode.node;
    let selected = this.isSelected(node);
    if (selected) {
      this.propagateSelectionDown(node, false);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, false);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeUnselect.emit({
        originalEvent: event,
        node
      });
    } else {
      this.propagateSelectionDown(node, true);
      if (event.rowNode.parent) {
        this.propagateSelectionUp(node.parent, true);
      }
      this.selectionChange.emit(this.selection);
      this.onNodeSelect.emit({
        originalEvent: event,
        node
      });
    }
    this.tableService.onSelectionChange();
  }
  toggleNodesWithCheckbox(event, check) {
    let data = this.filteredNodes || this.value;
    this._selection = check && data ? data.slice() : [];
    this.toggleAll(check);
    if (!check) {
      this._selection = [];
      this.selectedKeys = {};
    }
    this.preventSelectionSetterPropagation = true;
    this.selectionChange.emit(this._selection);
    this.tableService.onSelectionChange();
    this.onHeaderCheckboxToggle.emit({
      originalEvent: event,
      checked: check
    });
  }
  toggleAll(checked) {
    let data = this.filteredNodes || this.value;
    if (!this.selectionKeys) {
      if (data && data.length) {
        for (let node of data) {
          this.propagateSelectionDown(node, checked);
        }
      }
    } else {
      if (data && data.length) {
        for (let node of data) {
          this.propagateDown(node, checked);
        }
        this.selectionKeysChange.emit(this.selectionKeys);
      }
    }
  }
  propagateSelectionUp(node, select) {
    if (node.children && node.children.length) {
      let selectedChildCount = 0;
      let childPartialSelected = false;
      let dataKeyValue = this.dataKey ? String(c(node.data, this.dataKey)) : null;
      for (let child of node.children) {
        if (this.isSelected(child)) selectedChildCount++;
        else if (child.partialSelected) childPartialSelected = true;
      }
      if (select && selectedChildCount == node.children.length) {
        this._selection = [...this.selection || [], node];
        node.partialSelected = false;
        if (dataKeyValue) {
          this.selectedKeys[dataKeyValue] = 1;
        }
      } else {
        if (!select) {
          let index = this.findIndexInSelection(node);
          if (index >= 0) {
            this._selection = this.selection.filter((val, i) => i != index);
            if (dataKeyValue) {
              delete this.selectedKeys[dataKeyValue];
            }
          }
        }
        if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length) node.partialSelected = true;
        else node.partialSelected = false;
      }
    }
    let parent = node.parent;
    node.checked = select;
    if (parent) {
      this.propagateSelectionUp(parent, select);
    }
  }
  propagateSelectionDown(node, select) {
    let index = this.findIndexInSelection(node);
    let dataKeyValue = this.dataKey ? String(c(node.data, this.dataKey)) : null;
    if (select && index == -1) {
      this._selection = [...this.selection || [], node];
      if (dataKeyValue) {
        this.selectedKeys[dataKeyValue] = 1;
      }
    } else if (!select && index > -1) {
      this._selection = this.selection.filter((val, i) => i != index);
      if (dataKeyValue) {
        delete this.selectedKeys[dataKeyValue];
      }
    }
    node.partialSelected = false;
    node.checked = select;
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateSelectionDown(child, select);
      }
    }
  }
  isSelected(node) {
    if (node && this.selection) {
      if (this.dataKey) {
        if (node.hasOwnProperty("checked")) {
          return node["checked"];
        } else {
          return this.selectedKeys[c(node.data, this.dataKey)] !== void 0;
        }
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(node) > -1;
        else return this.equals(node, this.selection);
      }
    }
    return false;
  }
  isNodeSelected(node) {
    return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)]?.checked === true : false;
  }
  isNodePartialSelected(node) {
    return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)]?.partialChecked === true : false;
  }
  nodeKey(node) {
    return c(node, this.dataKey) || c(node?.data, this.dataKey);
  }
  toggleCheckbox(event) {
    let {
      rowNode,
      check,
      originalEvent
    } = event;
    let node = rowNode.node;
    if (this.selectionKeys) {
      this.propagateDown(node, check);
      if (node.parent) {
        this.propagateUp(node.parent, check);
      }
      this.selectionKeysChange.emit(this.selectionKeys);
    } else {
      this.toggleNodeWithCheckbox({
        originalEvent,
        rowNode
      });
    }
    this.tableService.onSelectionChange();
  }
  propagateDown(node, check) {
    if (check) {
      this.selectionKeys[this.nodeKey(node)] = {
        checked: true,
        partialChecked: false
      };
    } else {
      delete this.selectionKeys[this.nodeKey(node)];
    }
    if (node.children && node.children.length) {
      for (let child of node.children) {
        this.propagateDown(child, check);
      }
    }
  }
  propagateUp(node, check) {
    let checkedChildCount = 0;
    let childPartialSelected = false;
    for (let child of node.children) {
      if (this.selectionKeys[this.nodeKey(child)] && this.selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
      else if (this.selectionKeys[this.nodeKey(child)] && this.selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
    }
    if (check && checkedChildCount === node.children.length) {
      this.selectionKeys[this.nodeKey(node)] = {
        checked: true,
        partialChecked: false
      };
    } else {
      if (!check) {
        delete this.selectionKeys[this.nodeKey(node)];
      }
      if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== node.children.length) this.selectionKeys[this.nodeKey(node)] = {
        checked: false,
        partialChecked: true
      };
      else this.selectionKeys[this.nodeKey(node)] = {
        checked: false,
        partialChecked: false
      };
    }
    let parent = node.parent;
    if (parent) {
      this.propagateUp(parent, check);
    }
  }
  findIndexInSelection(node) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(node, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  equals(node1, node2) {
    return this.compareSelectionBy === "equals" ? k(node1, node2) : k(node1.data, node2.data, this.dataKey);
  }
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter2) {
    if (filter2 !== null && filter2 !== void 0) {
      if (typeof filter2 === "string" && filter2.trim().length == 0 || Array.isArray(filter2) && filter2.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredNodes = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredNodes = [];
        const isStrictMode = this.filterMode === "strict";
        let isValueChanged = false;
        for (let node of this.value) {
          let copyNode = __spreadValues({}, node);
          let localMatch = true;
          let globalMatch = false;
          let paramsWithoutNode;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              let filterMeta = this.filters[prop];
              let filterField = prop;
              let filterValue = filterMeta.value;
              let filterMatchMode = filterMeta.matchMode || "startsWith";
              let filterConstraint = this.filterService.filters[filterMatchMode];
              paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                isStrictMode
              };
              if (isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                localMatch = false;
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            let copyNodeForGlobal = __spreadValues({}, copyNode);
            let filterField = void 0;
            let filterValue = this.filters["global"].value;
            let filterConstraint = this.filterService.filters[this.filters["global"].matchMode];
            paramsWithoutNode = {
              filterField,
              filterValue,
              filterConstraint,
              isStrictMode,
              globalFilterFieldsArray
            };
            if (isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
              globalMatch = true;
              copyNode = copyNodeForGlobal;
            }
          }
          let matches = localMatch;
          if (this.filters["global"]) {
            matches = localMatch && globalMatch;
          }
          if (matches) {
            this.filteredNodes.push(copyNode);
          }
          isValueChanged = isValueChanged || !localMatch || globalMatch || localMatch && this.filteredNodes.length > 0 || !globalMatch && this.filteredNodes.length === 0;
        }
        if (!isValueChanged) {
          this.filteredNodes = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
        }
      }
      this.cd.markForCheck();
    }
    this.first = 0;
    const filteredValue = this.filteredNodes || this.value;
    this.onFilter.emit({
      filters: this.filters,
      filteredValue
    });
    this.tableService.onUIUpdate(filteredValue);
    this.updateSerializedValue();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  findFilteredNodes(node, paramsWithoutNode) {
    if (node) {
      let matched = false;
      if (node.children) {
        let childNodes = [...node.children];
        node.children = [];
        for (let childNode of childNodes) {
          let copyChildNode = __spreadValues({}, childNode);
          if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
            matched = true;
            node.children.push(copyChildNode);
          }
        }
      }
      if (matched) {
        return true;
      }
    }
  }
  isFilterMatched(node, filterOptions) {
    let {
      filterField,
      filterValue,
      filterConstraint,
      isStrictMode,
      globalFilterFieldsArray
    } = filterOptions;
    let matched = false;
    const isMatched = (field) => filterConstraint(c(node.data, field), filterValue, this.filterLocale);
    matched = globalFilterFieldsArray?.length ? globalFilterFieldsArray.some((globalFilterField) => isMatched(globalFilterField.field || globalFilterField)) : isMatched(filterField);
    if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
      matched = this.findFilteredNodes(node, {
        filterField,
        filterValue,
        filterConstraint,
        isStrictMode,
        globalFilterFieldsArray
      }) || matched;
    }
    return matched;
  }
  isNodeLeaf(node) {
    return node.leaf === false ? false : !(node.children && node.children.length);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  /**
   * Clears the sort and paginator state.
   * @group Method
   */
  reset() {
    this._sortField = null;
    this._sortOrder = 1;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.filteredNodes = null;
    this.filters = {};
    this.first = 0;
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  updateEditingCell(cell, data, field) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && Y(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event) => {
        if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
          O(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.unbindDocumentEditListener();
        }
        this.editingCellClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.editingCellField = null;
    this.editingCellData = null;
    this.initialized = null;
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TreeTable_BaseFactory;
    return function TreeTable_Factory(__ngFactoryType__) {
      return (\u0275TreeTable_BaseFactory || (\u0275TreeTable_BaseFactory = \u0275\u0275getInheritedFactory(_TreeTable)))(__ngFactoryType__ || _TreeTable);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TreeTable,
    selectors: [["p-treeTable"], ["p-treetable"], ["p-tree-table"]],
    contentQueries: function TreeTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
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
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c13, 4);
        \u0275\u0275contentQuery(dirIndex, _c14, 4);
        \u0275\u0275contentQuery(dirIndex, _c15, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c17, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c19, 4);
        \u0275\u0275contentQuery(dirIndex, _c20, 4);
        \u0275\u0275contentQuery(dirIndex, _c21, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c23, 4);
        \u0275\u0275contentQuery(dirIndex, _c24, 4);
        \u0275\u0275contentQuery(dirIndex, _c25, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._colGroupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._captionTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._summaryTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._emptyMessageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorLeftTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorRightTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorDropdownItemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenBodyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenFooterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._frozenColGroupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._reorderIndicatorUpIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._reorderIndicatorDownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._sortIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._checkboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headerCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._togglerIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorFirstPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorLastPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorPreviousPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginatorNextPageLinkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TreeTable_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c26, 5);
        \u0275\u0275viewQuery(_c27, 5);
        \u0275\u0275viewQuery(_c28, 5);
        \u0275\u0275viewQuery(_c29, 5);
        \u0275\u0275viewQuery(_c30, 5);
        \u0275\u0275viewQuery(_c31, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollableViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollableFrozenViewChild = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function TreeTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-scrollselectors", ".p-treetable-scrollable-body");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      columns: "columns",
      styleClass: "styleClass",
      tableStyle: "tableStyle",
      tableStyleClass: "tableStyleClass",
      autoLayout: [2, "autoLayout", "autoLayout", booleanAttribute],
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      paginator: [2, "paginator", "paginator", booleanAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      first: [2, "first", "first", numberAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      defaultSortOrder: [2, "defaultSortOrder", "defaultSortOrder", numberAttribute],
      sortMode: "sortMode",
      resetPageOnSort: [2, "resetPageOnSort", "resetPageOnSort", booleanAttribute],
      customSort: [2, "customSort", "customSort", booleanAttribute],
      selectionMode: "selectionMode",
      contextMenuSelection: "contextMenuSelection",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      dataKey: "dataKey",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      compareSelectionBy: "compareSelectionBy",
      rowHover: [2, "rowHover", "rowHover", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      showLoader: [2, "showLoader", "showLoader", booleanAttribute],
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      scrollHeight: "scrollHeight",
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      virtualScrollDelay: [2, "virtualScrollDelay", "virtualScrollDelay", numberAttribute],
      frozenWidth: "frozenWidth",
      frozenColumns: "frozenColumns",
      resizableColumns: [2, "resizableColumns", "resizableColumns", booleanAttribute],
      columnResizeMode: "columnResizeMode",
      reorderableColumns: [2, "reorderableColumns", "reorderableColumns", booleanAttribute],
      contextMenu: "contextMenu",
      rowTrackBy: "rowTrackBy",
      filters: "filters",
      globalFilterFields: "globalFilterFields",
      filterDelay: [2, "filterDelay", "filterDelay", numberAttribute],
      filterMode: "filterMode",
      filterLocale: "filterLocale",
      paginatorLocale: "paginatorLocale",
      totalRecords: "totalRecords",
      sortField: "sortField",
      sortOrder: "sortOrder",
      multiSortMeta: "multiSortMeta",
      selection: "selection",
      value: "value",
      virtualRowHeight: "virtualRowHeight",
      selectionKeys: "selectionKeys",
      showGridlines: [2, "showGridlines", "showGridlines", booleanAttribute]
    },
    outputs: {
      selectionChange: "selectionChange",
      contextMenuSelectionChange: "contextMenuSelectionChange",
      onFilter: "onFilter",
      onNodeExpand: "onNodeExpand",
      onNodeCollapse: "onNodeCollapse",
      onPage: "onPage",
      onSort: "onSort",
      onLazyLoad: "onLazyLoad",
      sortFunction: "sortFunction",
      onColResize: "onColResize",
      onColReorder: "onColReorder",
      onNodeSelect: "onNodeSelect",
      onNodeUnselect: "onNodeUnselect",
      onContextMenuSelect: "onContextMenuSelect",
      onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
      onEditInit: "onEditInit",
      onEditComplete: "onEditComplete",
      onEditCancel: "onEditCancel",
      selectionKeysChange: "selectionKeysChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableService, TreeTableStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    decls: 10,
    vars: 10,
    consts: [["table", ""], ["scrollableView", ""], ["scrollableFrozenView", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "class", 4, "ngIf"], [3, "rows", "first", "totalRecords", "pageLinkSize", "styleClass", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "locale", "onPageChange", 4, "ngIf"], [3, "class", "display", 4, "ngIf"], [4, "ngIf"], ["data-p-icon", "spinner", 3, "spin", "class", 4, "ngIf"], ["data-p-icon", "spinner", 3, "spin"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "styleClass", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "locale"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], ["role", "table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup"], ["role", "rowgroup", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], [3, "ngClass", "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], [3, "ngClass", "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["data-p-icon", "arrow-down", 4, "ngIf"], ["data-p-icon", "arrow-down"], ["data-p-icon", "arrow-up", 4, "ngIf"], ["data-p-icon", "arrow-up"]],
    template: function TreeTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TreeTable_div_0_Template, 4, 6, "div", 6)(1, TreeTable_div_1_Template, 2, 3, "div", 6)(2, TreeTable_p_paginator_2_Template, 5, 21, "p-paginator", 7)(3, TreeTable_div_3_Template, 9, 24, "div", 6)(4, TreeTable_div_4_Template, 4, 12, "div", 6)(5, TreeTable_p_paginator_5_Template, 5, 21, "p-paginator", 7)(6, TreeTable_div_6_Template, 2, 3, "div", 6)(7, TreeTable_div_7_Template, 2, 4, "div", 8)(8, TreeTable_span_8_Template, 4, 6, "span", 8)(9, TreeTable_span_9_Template, 4, 6, "span", 8);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading && ctx.showLoader);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.captionTemplate || ctx._captionTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.scrollable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.scrollable);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.summaryTemplate || ctx._summaryTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.resizableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reorderableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.reorderableColumns);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, TTScrollableView, TTBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTable, [{
    type: Component,
    args: [{
      selector: "p-treeTable, p-treetable, p-tree-table",
      standalone: false,
      template: `
        <div [class]="cx('loading')" *ngIf="loading && showLoader">
            <div [class]="cx('mask')">
                <i *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)"></i>
                <ng-container *ngIf="!loadingIcon">
                    <svg data-p-icon="spinner" *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [spin]="true" [class]="cx('loadingIcon')" />
                    <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [class]="cx('loadingIcon')">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
        </div>
        <div *ngIf="captionTemplate || _captionTemplate" [class]="cx('header')">
            <ng-container *ngTemplateOutlet="captionTemplate || _captionTemplate"></ng-container>
        </div>
        <p-paginator
            [rows]="rows"
            [first]="first"
            [totalRecords]="totalRecords"
            [pageLinkSize]="pageLinks"
            [styleClass]="cx('pcPaginator')"
            [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="onPageChange($event)"
            [rowsPerPageOptions]="rowsPerPageOptions"
            *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
            [templateLeft]="paginatorLeftTemplate ?? _paginatorLeftTemplate"
            [templateRight]="paginatorRightTemplate ?? _paginatorRightTemplate"
            [appendTo]="paginatorDropdownAppendTo"
            [currentPageReportTemplate]="currentPageReportTemplate"
            [showFirstLastIcon]="showFirstLastIcon"
            [dropdownItemTemplate]="paginatorDropdownItemTemplate ?? _paginatorDropdownItemTemplate"
            [showCurrentPageReport]="showCurrentPageReport"
            [showJumpToPageDropdown]="showJumpToPageDropdown"
            [showPageLinks]="showPageLinks"
            [locale]="paginatorLocale"
        >
            <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
            </ng-template>
        </p-paginator>

        <div [class]="cx('wrapper')" *ngIf="!scrollable">
            <table role="table" #table [ngClass]="tableStyleClass" [ngStyle]="tableStyle">
                <ng-container *ngTemplateOutlet="colGroupTemplate || _colGroupTemplate; context: { $implicit: columns }"></ng-container>
                <thead role="rowgroup" [class]="cx('thead')">
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: columns }"></ng-container>
                </thead>
                <tbody [class]="cx('tbody')" role="rowgroup" [pTreeTableBody]="columns" [pTreeTableBodyTemplate]="bodyTemplate ?? _bodyTemplate"></tbody>
                <tfoot [class]="cx('tfoot')" role="rowgroup">
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate; context: { $implicit: columns }"></ng-container>
                </tfoot>
            </table>
        </div>

        <div [class]="cx('scrollableWrapper')" *ngIf="scrollable">
            <div
                [ngClass]="[cx('scrollableView'), cx('frozenView')]"
                *ngIf="frozenColumns || frozenBodyTemplate || _frozenBodyTemplate"
                #scrollableFrozenView
                [ttScrollableView]="frozenColumns"
                [frozen]="true"
                [ngStyle]="{ width: frozenWidth }"
                [scrollHeight]="scrollHeight"
            ></div>
            <div [class]="cx('scrollableView')" #scrollableView [ttScrollableView]="columns" [frozen]="false" [scrollHeight]="scrollHeight" [ngStyle]="{ left: frozenWidth, width: 'calc(100% - ' + frozenWidth + ')' }"></div>
        </div>

        <p-paginator
            [rows]="rows"
            [first]="first"
            [totalRecords]="totalRecords"
            [pageLinkSize]="pageLinks"
            [styleClass]="cx('pcPaginator')"
            [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="onPageChange($event)"
            [rowsPerPageOptions]="rowsPerPageOptions"
            *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
            [templateLeft]="paginatorLeftTemplate ?? _paginatorLeftTemplate"
            [templateRight]="paginatorRightTemplate ?? _paginatorRightTemplate"
            [appendTo]="paginatorDropdownAppendTo"
            [currentPageReportTemplate]="currentPageReportTemplate"
            [showFirstLastIcon]="showFirstLastIcon"
            [dropdownItemTemplate]="paginatorDropdownItemTemplate ?? _paginatorDropdownItemTemplate"
            [showCurrentPageReport]="showCurrentPageReport"
            [showJumpToPageDropdown]="showJumpToPageDropdown"
            [showPageLinks]="showPageLinks"
            [locale]="paginatorLocale"
        >
            <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
            </ng-template>
        </p-paginator>
        <div *ngIf="summaryTemplate || _summaryTemplate" [class]="cx('footer')">
            <ng-container *ngTemplateOutlet="summaryTemplate || _summaryTemplate"></ng-container>
        </div>

        <div #resizeHelper [class]="cx('columnResizerHelper')" [style.display]="'none'" *ngIf="resizableColumns"></div>
        <span #reorderIndicatorUp [class]="cx('reorderIndicatorUp')" [style.display]="'none'" *ngIf="reorderableColumns">
            <svg data-p-icon="arrow-down" *ngIf="!reorderIndicatorUpIconTemplate && !_reorderIndicatorUpIconTemplate" />
            <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate || _reorderIndicatorUpIconTemplate"></ng-template>
        </span>
        <span #reorderIndicatorDown [class]="cx('reorderIndicatorDown')" [style.display]="'none'" *ngIf="reorderableColumns">
            <svg data-p-icon="arrow-up" *ngIf="!reorderIndicatorDownIconTemplate && !_reorderIndicatorDownIconTemplate" />
            <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate || _reorderIndicatorDownIconTemplate"></ng-template>
        </span>
    `,
      providers: [TreeTableService, TreeTableStyle],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-scrollselectors]": "'.p-treetable-scrollable-body'"
      }
    }]
  }], null, {
    columns: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    autoLayout: [{
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
    first: [{
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
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
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
    defaultSortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionMode: [{
      type: Input
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareSelectionBy: [{
      type: Input
    }],
    rowHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
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
    showLoader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    virtualScrollDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    frozenWidth: [{
      type: Input
    }],
    frozenColumns: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contextMenu: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    filterMode: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    paginatorLocale: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    virtualRowHeight: [{
      type: Input
    }],
    selectionKeys: [{
      type: Input
    }],
    showGridlines: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onNodeExpand: [{
      type: Output
    }],
    onNodeCollapse: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onNodeSelect: [{
      type: Output
    }],
    onNodeUnselect: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    selectionKeysChange: [{
      type: Output
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    scrollableViewChild: [{
      type: ViewChild,
      args: ["scrollableView"]
    }],
    scrollableFrozenViewChild: [{
      type: ViewChild,
      args: ["scrollableFrozenView"]
    }],
    _colGroupTemplate: [{
      type: ContentChild,
      args: ["colgroup", {
        descendants: false
      }]
    }],
    _captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _bodyTemplate: [{
      type: ContentChild,
      args: ["body", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _summaryTemplate: [{
      type: ContentChild,
      args: ["summary", {
        descendants: false
      }]
    }],
    _emptyMessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage", {
        descendants: false
      }]
    }],
    _paginatorLeftTemplate: [{
      type: ContentChild,
      args: ["paginatorleft", {
        descendants: false
      }]
    }],
    _paginatorRightTemplate: [{
      type: ContentChild,
      args: ["paginatorright", {
        descendants: false
      }]
    }],
    _paginatorDropdownItemTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownitem", {
        descendants: false
      }]
    }],
    _frozenHeaderTemplate: [{
      type: ContentChild,
      args: ["frozenheader", {
        descendants: false
      }]
    }],
    _frozenBodyTemplate: [{
      type: ContentChild,
      args: ["frozenbody", {
        descendants: false
      }]
    }],
    _frozenFooterTemplate: [{
      type: ContentChild,
      args: ["frozenfooter", {
        descendants: false
      }]
    }],
    _frozenColGroupTemplate: [{
      type: ContentChild,
      args: ["frozencolgroup", {
        descendants: false
      }]
    }],
    _loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorUpIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatorupicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorDownIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatordownicon", {
        descendants: false
      }]
    }],
    _sortIconTemplate: [{
      type: ContentChild,
      args: ["sorticon", {
        descendants: false
      }]
    }],
    _checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    _headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    _togglerIconTemplate: [{
      type: ContentChild,
      args: ["togglericon", {
        descendants: false
      }]
    }],
    _paginatorFirstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorfirstpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorLastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorlastpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorPreviousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorpreviouspagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorNextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatornextpagelinkicon", {
        descendants: false
      }]
    }],
    _loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TTBody = class _TTBody {
  tt;
  treeTableService;
  cd;
  columns;
  template;
  frozen;
  serializedNodes;
  scrollerOptions;
  subscription;
  constructor(tt, treeTableService, cd) {
    this.tt = tt;
    this.treeTableService = treeTableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      if (this.tt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  getScrollerOption(option, options) {
    if (this.tt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTBody)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TTBody,
    selectors: [["", "pTreeTableBody", ""]],
    inputs: {
      columns: [0, "pTreeTableBody", "columns"],
      template: [0, "pTreeTableBodyTemplate", "template"],
      frozen: [2, "frozen", "frozen", booleanAttribute],
      serializedNodes: "serializedNodes",
      scrollerOptions: "scrollerOptions"
    },
    standalone: false,
    attrs: _c36,
    decls: 2,
    vars: 3,
    consts: [["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TTBody_ng_template_0_Template, 1, 1, "ng-template", 0)(1, TTBody_ng_container_1_Template, 2, 5, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.serializedNodes || ctx.tt.serializedValue)("ngForTrackBy", ctx.tt.rowTrackBy);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tt.isEmpty());
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTBody, [{
    type: Component,
    args: [{
      selector: "[pTreeTableBody]",
      standalone: false,
      template: `
        <ng-template ngFor let-serializedNode let-rowIndex="index" [ngForOf]="serializedNodes || tt.serializedValue" [ngForTrackBy]="tt.rowTrackBy">
            <ng-container *ngIf="serializedNode.visible">
                <ng-container
                    *ngTemplateOutlet="
                        template;
                        context: {
                            $implicit: serializedNode,
                            node: serializedNode.node,
                            rowData: serializedNode.node.data,
                            columns: columns
                        }
                    "
                ></ng-container>
            </ng-container>
        </ng-template>
        <ng-container *ngIf="tt.isEmpty()">
            <ng-container *ngTemplateOutlet="tt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], {
    columns: [{
      type: Input,
      args: ["pTreeTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTreeTableBodyTemplate"]
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serializedNodes: [{
      type: Input
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
var TTScrollableView = class _TTScrollableView extends BaseComponent {
  tt;
  el;
  zone;
  columns;
  frozen;
  scrollHeaderViewChild;
  scrollHeaderBoxViewChild;
  scrollBodyViewChild;
  scrollTableViewChild;
  scrollLoadingTableViewChild;
  scrollFooterViewChild;
  scrollFooterBoxViewChild;
  scrollableAlignerViewChild;
  scroller;
  headerScrollListener;
  bodyScrollListener;
  footerScrollListener;
  frozenSiblingBody;
  totalRecordsSubscription;
  _scrollHeight;
  preventBodyScrollPropagation;
  _componentStyle = inject(TreeTableStyle);
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
    if (val != null && (val.includes("%") || val.includes("calc"))) {
      console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
    }
  }
  constructor(tt, el, zone) {
    super();
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (!this.frozen) {
        if (this.tt.frozenColumns || this.tt.frozenBodyTemplate || this.tt._frozenBodyTemplate) {
          W(this.el.nativeElement, "p-treetable-unfrozen-view");
        }
        let frozenView = this.el.nativeElement.previousElementSibling;
        if (frozenView) {
          if (this.tt.virtualScroll) this.frozenSiblingBody = z(frozenView, ".p-scroller-viewport");
          else this.frozenSiblingBody = z(frozenView, ".p-treetable-scrollable-body");
        }
        if (this.scrollHeight) {
          let scrollBarWidth = P();
          this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + "px";
          if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + "px";
          }
        }
      } else {
        if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
          this.scrollableAlignerViewChild.nativeElement.style.height = ct() + "px";
        }
      }
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
          this.headerScrollListener = this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement, "scroll", this.onHeaderScroll.bind(this));
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
          this.footerScrollListener = this.renderer.listen(this.scrollFooterViewChild.nativeElement, "scroll", this.onFooterScroll.bind(this));
        }
        if (!this.frozen) {
          if (this.tt.virtualScroll) {
            this.bodyScrollListener = this.renderer.listen((this.scroller?.getElementRef()).nativeElement, "scroll", this.onBodyScroll.bind(this));
          } else {
            this.bodyScrollListener = this.renderer.listen(this.scrollBodyViewChild?.nativeElement, "scroll", this.onBodyScroll.bind(this));
          }
        }
      });
    }
  }
  unbindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
        if (this.headerScrollListener) {
          this.headerScrollListener();
          this.headerScrollListener = null;
        }
      }
      if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
        if (this.footerScrollListener) {
          this.footerScrollListener();
          this.footerScrollListener = null;
        }
      }
      if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
      if (this.scroller && this.scroller.getElementRef()) {
        if (this.bodyScrollListener) {
          this.bodyScrollListener();
          this.bodyScrollListener = null;
        }
      }
    }
  }
  onHeaderScroll() {
    const scrollLeft = this.scrollHeaderViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onFooterScroll() {
    const scrollLeft = this.scrollFooterViewChild?.nativeElement.scrollLeft;
    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
    }
    this.preventBodyScrollPropagation = true;
  }
  onBodyScroll(event) {
    if (this.preventBodyScrollPropagation) {
      this.preventBodyScrollPropagation = false;
      return;
    }
    if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
      this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + "px";
    }
    if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
      this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + "px";
    }
    if (this.frozenSiblingBody) {
      this.frozenSiblingBody.scrollTop = event.target.scrollTop;
    }
  }
  scrollToVirtualIndex(index) {
    if (this.scroller) {
      this.scroller.scrollToIndex(index);
    }
  }
  scrollTo(options) {
    if (this.scroller) {
      this.scroller.scrollTo(options);
    } else {
      if (this.scrollBodyViewChild?.nativeElement.scrollTo) {
        this.scrollBodyViewChild.nativeElement.scrollTo(options);
      } else {
        this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
        this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.unbindEvents();
    this.frozenSiblingBody = null;
  }
  static \u0275fac = function TTScrollableView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTScrollableView)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TTScrollableView,
    selectors: [["", "ttScrollableView", ""]],
    viewQuery: function TTScrollableView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c39, 5);
        \u0275\u0275viewQuery(_c40, 5);
        \u0275\u0275viewQuery(_c41, 5);
        \u0275\u0275viewQuery(_c42, 5);
        \u0275\u0275viewQuery(_c43, 5);
        \u0275\u0275viewQuery(_c44, 5);
        \u0275\u0275viewQuery(_c45, 5);
        \u0275\u0275viewQuery(_c46, 5);
        \u0275\u0275viewQuery(_c47, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollHeaderViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollHeaderBoxViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollBodyViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollTableViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollLoadingTableViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollFooterViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollFooterBoxViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollableAlignerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
      }
    },
    inputs: {
      columns: [0, "ttScrollableView", "columns"],
      frozen: [2, "frozen", "frozen", booleanAttribute],
      scrollHeight: "scrollHeight"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c48,
    decls: 13,
    vars: 20,
    consts: [["scrollHeader", ""], ["scrollHeaderBox", ""], ["buildInItems", ""], ["scroller", ""], ["content", ""], ["loader", ""], ["scrollBody", ""], ["scrollTable", ""], ["scrollableAligner", ""], ["scrollFooter", ""], ["scrollFooterBox", ""], [3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup"], [3, "items", "styleClass", "style", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], [3, "onLazyLoad", "items", "styleClass", "scrollHeight", "itemSize", "lazy", "options"], ["role", "table", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "serializedNodes", "frozen"], [3, "background-color", 4, "ngIf"], [3, "ngClass", "ngStyle"]],
    template: function TTScrollableView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", null, 0)(2, "div", null, 1)(4, "table", 11);
        \u0275\u0275template(5, TTScrollableView_ng_container_5_Template, 1, 0, "ng-container", 12);
        \u0275\u0275elementStart(6, "thead", 13);
        \u0275\u0275template(7, TTScrollableView_ng_container_7_Template, 1, 0, "ng-container", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(8, TTScrollableView_p_scroller_8_Template, 5, 11, "p-scroller", 14)(9, TTScrollableView_ng_container_9_Template, 4, 12, "ng-container", 15)(10, TTScrollableView_ng_template_10_Template, 5, 17, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, TTScrollableView_div_12_Template, 8, 18, "div", 16);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("scrollableHeader"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("scrollableHeaderBox"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cn(ctx.cx("scrollableHeaderTable"), ctx.tt.tableStyleClass));
        \u0275\u0275property("ngStyle", ctx.tt.tableStyle);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt._frozenColGroupTemplate || ctx.tt.colGroupTemplate || ctx.tt._colGroupTemplate : ctx.tt.colGroupTemplate || ctx.tt._colGroupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(16, _c32, ctx.columns));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("thead"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt._frozenHeaderTemplate || ctx.tt.headerTemplate || ctx.tt._headerTemplate : ctx.tt.headerTemplate || ctx.tt._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(18, _c32, ctx.columns));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tt.virtualScroll);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.tt.virtualScroll);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.tt.footerTemplate || ctx.tt._footerTemplate);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Scroller, TTBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTScrollableView, [{
    type: Component,
    args: [{
      selector: "[ttScrollableView]",
      standalone: false,
      template: `
        <div #scrollHeader [class]="cx('scrollableHeader')">
            <div #scrollHeaderBox [class]="cx('scrollableHeaderBox')">
                <table [class]="cn(cx('scrollableHeaderTable'), tt.tableStyleClass)" [ngStyle]="tt.tableStyle">
                    <ng-container
                        *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt._frozenColGroupTemplate || tt.colGroupTemplate || tt._colGroupTemplate : tt.colGroupTemplate || tt._colGroupTemplate; context: { $implicit: columns }"
                    ></ng-container>
                    <thead role="rowgroup" [class]="cx('thead')">
                        <ng-container
                            *ngTemplateOutlet="frozen ? tt.frozenHeaderTemplate || tt._frozenHeaderTemplate || tt.headerTemplate || tt._headerTemplate : tt.headerTemplate || tt._headerTemplate; context: { $implicit: columns }"
                        ></ng-container>
                    </thead>
                </table>
            </div>
        </div>

        <p-scroller
            *ngIf="tt.virtualScroll"
            #scroller
            [items]="tt.serializedValue"
            [styleClass]="cx('scrollableBody')"
            [style]="{ height: tt.scrollHeight !== 'flex' ? tt.scrollHeight : undefined }"
            [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
            [itemSize]="tt.virtualScrollItemSize || tt._virtualRowHeight"
            [lazy]="tt.lazy"
            (onLazyLoad)="tt.onLazyItemLoad($event)"
            [options]="tt.virtualScrollOptions"
        >
            <ng-template #content let-items let-scrollerOptions="options">
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
            </ng-template>
            <ng-container *ngIf="tt.loaderTemplate || tt._loaderTemplate">
                <ng-template #loader let-scrollerOptions="options">
                    <ng-container *ngTemplateOutlet="tt.loaderTemplate || tt._loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                </ng-template>
            </ng-container>
        </p-scroller>
        <ng-container *ngIf="!tt.virtualScroll">
            <div
                #scrollBody
                [class]="cx('scrollableBody')"
                [ngStyle]="{
                    'max-height': tt.scrollHeight !== 'flex' ? scrollHeight : undefined,
                    'overflow-y': !frozen && tt.scrollHeight ? 'scroll' : undefined
                }"
            >
                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: serializedValue, options: {} }"></ng-container>
            </div>
        </ng-container>

        <ng-template #buildInItems let-items let-scrollerOptions="options">
            <table role="table" #scrollTable [class]="tt.tableStyleClass" [ngClass]="scrollerOptions.contentStyleClass" [ngStyle]="tt.tableStyle" [style]="scrollerOptions.contentStyle">
                <ng-container
                    *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt._frozenColGroupTemplate || tt.colGroupTemplate || tt._colGroupTemplate : tt.colGroupTemplate || tt._colGroupTemplate; context: { $implicit: columns }"
                ></ng-container>
                <tbody
                    role="rowgroup"
                    [class]="cx('tbody')"
                    [pTreeTableBody]="columns"
                    [pTreeTableBodyTemplate]="frozen ? tt.frozenBodyTemplate || tt._frozenBodyTemplate || tt.bodyTemplate || tt._bodyTemplate : tt.bodyTemplate || tt._bodyTemplate"
                    [serializedNodes]="items"
                    [frozen]="frozen"
                ></tbody>
            </table>
            <div #scrollableAligner [style.background-color]="'transparent'" *ngIf="frozen"></div>
        </ng-template>

        <div #scrollFooter *ngIf="tt.footerTemplate || tt._footerTemplate" [class]="cx('scrollableFooter')">
            <div #scrollFooterBox [class]="cx('scrollableFooterBox')">
                <table [class]="cx('scrollableFooterTable')" [ngClass]="tt.tableStyleClass" [ngStyle]="tt.tableStyle">
                    <ng-container
                        *ngTemplateOutlet="frozen ? tt.frozenColGroupTemplate || tt._frozenColGroupTemplate || tt.colGroupTemplate || tt._colGroupTemplate : tt.colGroupTemplate || tt._colGroupTemplate; context: { $implicit: columns }"
                    ></ng-container>
                    <tfoot role="rowgroup" [class]="cx('tfoot')">
                        <ng-container
                            *ngTemplateOutlet="frozen ? tt.frozenFooterTemplate || tt._frozenFooterTemplate || tt.footerTemplate || tt._footerTemplate : tt.footerTemplate || tt._footerTemplate; context: { $implicit: columns }"
                        ></ng-container>
                    </tfoot>
                </table>
            </div>
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    columns: [{
      type: Input,
      args: ["ttScrollableView"]
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeaderViewChild: [{
      type: ViewChild,
      args: ["scrollHeader"]
    }],
    scrollHeaderBoxViewChild: [{
      type: ViewChild,
      args: ["scrollHeaderBox"]
    }],
    scrollBodyViewChild: [{
      type: ViewChild,
      args: ["scrollBody"]
    }],
    scrollTableViewChild: [{
      type: ViewChild,
      args: ["scrollTable"]
    }],
    scrollLoadingTableViewChild: [{
      type: ViewChild,
      args: ["loadingTable"]
    }],
    scrollFooterViewChild: [{
      type: ViewChild,
      args: ["scrollFooter"]
    }],
    scrollFooterBoxViewChild: [{
      type: ViewChild,
      args: ["scrollFooterBox"]
    }],
    scrollableAlignerViewChild: [{
      type: ViewChild,
      args: ["scrollableAligner"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    scrollHeight: [{
      type: Input
    }]
  });
})();
var TTSortableColumn = class _TTSortableColumn extends BaseComponent {
  tt;
  field;
  ttSortableColumnDisabled;
  sorted;
  subscription;
  _componentStyle = inject(TreeTableStyle);
  get ariaSorted() {
    if (this.sorted && this.tt.sortOrder < 0) return "descending";
    else if (this.sorted && this.tt.sortOrder > 0) return "ascending";
    else return "none";
  }
  constructor(tt) {
    super();
    this.tt = tt;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    this.sorted = this.tt.isSorted(this.field);
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.updateSortState();
      this.tt.sort({
        originalEvent: event,
        field: this.field
      });
      pt();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
  }
  isEnabled() {
    return this.ttSortableColumnDisabled !== true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTSortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSortableColumn)(\u0275\u0275directiveInject(TreeTable));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTSortableColumn,
    selectors: [["", "ttSortableColumn", ""]],
    hostAttrs: ["role", "columnheader"],
    hostVars: 4,
    hostBindings: function TTSortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function TTSortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function TTSortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabindex", ctx.isEnabled() ? "0" : null);
        \u0275\u0275attribute("aria-sort", ctx.ariaSorted);
        \u0275\u0275classMap(ctx.cx("sortableColumn"));
      }
    },
    inputs: {
      field: [0, "ttSortableColumn", "field"],
      ttSortableColumnDisabled: [2, "ttSortableColumnDisabled", "ttSortableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSortableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttSortableColumn]",
      standalone: false,
      host: {
        "[class]": 'cx("sortableColumn")',
        "[tabindex]": 'isEnabled() ? "0" : null',
        role: "columnheader",
        "[attr.aria-sort]": "ariaSorted"
      },
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }], {
    field: [{
      type: Input,
      args: ["ttSortableColumn"]
    }],
    ttSortableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var TTSortIcon = class _TTSortIcon extends BaseComponent {
  tt;
  cd;
  field;
  ariaLabelDesc;
  ariaLabelAsc;
  subscription;
  sortOrder;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, cd) {
    super();
    this.tt = tt;
    this.cd = cd;
    this.subscription = this.tt.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.tt._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.tt.sortMode === "multiple" && multiSortMeta.length > 1) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  updateSortState() {
    if (this.tt.sortMode === "single") {
      this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
    } else if (this.tt.sortMode === "multiple") {
      let sortMeta = this.tt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
  }
  getBadgeValue() {
    return this.getMultiSortMetaIndex() + 1;
  }
  isMultiSorted() {
    return this.tt.sortMode === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTSortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSortIcon)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TTSortIcon,
    selectors: [["p-treeTableSortIcon"], ["p-treetable-sort-icon"], ["p-tree-table-sort-icon"]],
    inputs: {
      field: "field",
      ariaLabelDesc: "ariaLabelDesc",
      ariaLabelAsc: "ariaLabelAsc"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], ["size", "small", 3, "class", "value", 4, "ngIf"], ["data-p-icon", "sort-alt", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-amount-up-alt", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-amount-down", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-alt"], ["data-p-icon", "sort-amount-up-alt"], ["data-p-icon", "sort-amount-down"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "small", 3, "value"]],
    template: function TTSortIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TTSortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, TTSortIcon_span_1_Template, 2, 6, "span", 1)(2, TTSortIcon_p_badge_2_Template, 1, 3, "p-badge", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.tt.sortIconTemplate && !ctx.tt._sortIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tt.sortIconTemplate || ctx.tt._sortIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMultiSorted());
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, Badge],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSortIcon, [{
    type: Component,
    args: [{
      selector: "p-treeTableSortIcon, p-treetable-sort-icon, p-tree-table-sort-icon",
      standalone: false,
      template: `
        <ng-container *ngIf="!tt.sortIconTemplate && !tt._sortIconTemplate">
            <svg data-p-icon="sort-alt" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === 0" />
            <svg data-p-icon="sort-amount-up-alt" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === 1" />
            <svg data-p-icon="sort-amount-down" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="tt.sortIconTemplate || tt._sortIconTemplate" [class]="cx('sortableColumnIcon')">
            <ng-template *ngTemplateOutlet="tt.sortIconTemplate || tt._sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>
        <p-badge *ngIf="isMultiSorted()" [class]="cx('sortableColumnBadge')" [value]="getBadgeValue()" size="small"></p-badge>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }],
    ariaLabelDesc: [{
      type: Input
    }],
    ariaLabelAsc: [{
      type: Input
    }]
  });
})();
var TTResizableColumn = class _TTResizableColumn {
  document;
  platformId;
  renderer;
  tt;
  el;
  zone;
  ttResizableColumnDisabled;
  resizer;
  resizerMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(document, platformId, renderer, tt, el, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        W(this.el.nativeElement, "p-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
  }
  onMouseDown(event) {
    this.tt.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onDocumentMouseMove(event) {
    this.tt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.tt.onColumnResizeEnd(event, this.el.nativeElement);
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.ttResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static \u0275fac = function TTResizableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTResizableColumn)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTResizableColumn,
    selectors: [["", "ttResizableColumn", ""]],
    inputs: {
      ttResizableColumnDisabled: [2, "ttResizableColumnDisabled", "ttResizableColumnDisabled", booleanAttribute]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttResizableColumn]",
      standalone: false
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ttResizableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var TTReorderableColumn = class _TTReorderableColumn {
  document;
  platformId;
  renderer;
  tt;
  el;
  zone;
  ttReorderableColumnDisabled;
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  mouseDownListener;
  constructor(document, platformId, renderer, tt, el, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragEnter.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.mouseDownListener) {
        this.mouseDownListener();
        this.mouseDownListener = null;
      }
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
      if (this.dragEnterListener) {
        this.dragEnterListener();
        this.dragEnterListener = null;
      }
      if (this.dragLeaveListener) {
        this.dragLeaveListener();
        this.dragLeaveListener = null;
      }
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || R(event.target, "p-column-resizer")) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.tt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.tt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.tt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.tt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.ttReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static \u0275fac = function TTReorderableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTReorderableColumn)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTReorderableColumn,
    selectors: [["", "ttReorderableColumn", ""]],
    hostBindings: function TTReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("drop", function TTReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      ttReorderableColumnDisabled: [2, "ttReorderableColumnDisabled", "ttReorderableColumnDisabled", booleanAttribute]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttReorderableColumn]",
      standalone: false
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    ttReorderableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var TTSelectableRow = class _TTSelectableRow extends BaseComponent {
  tt;
  tableService;
  rowNode;
  ttSelectableRowDisabled;
  selected;
  subscription;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, tableService) {
    super();
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.tt.handleRowTouchEnd(event);
    }
  }
  onEnterKey(event) {
    if (this.tt.selectionMode === "checkbox") {
      this.tt.toggleNodeWithCheckbox({
        originalEvent: event,
        rowNode: this.rowNode
      });
    } else {
      this.onClick(event);
    }
    event.preventDefault();
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTSelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSelectableRow)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTSelectableRow,
    selectors: [["", "ttSelectableRow", ""]],
    hostVars: 3,
    hostBindings: function TTSelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function TTSelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function TTSelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("touchend", function TTSelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-checked", ctx.selected);
        \u0275\u0275classMap(ctx.cx("row"));
      }
    },
    inputs: {
      rowNode: [0, "ttSelectableRow", "rowNode"],
      ttSelectableRowDisabled: [2, "ttSelectableRowDisabled", "ttSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSelectableRow, [{
    type: Directive,
    args: [{
      selector: "[ttSelectableRow]",
      standalone: false,
      host: {
        "[class]": 'cx("row")',
        "[attr.aria-checked]": "selected"
      },
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }], {
    rowNode: [{
      type: Input,
      args: ["ttSelectableRow"]
    }],
    ttSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var TTSelectableRowDblClick = class _TTSelectableRowDblClick extends BaseComponent {
  tt;
  tableService;
  rowNode;
  ttSelectableRowDisabled;
  selected;
  subscription;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, tableService) {
    super();
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.tt.isSelected(this.rowNode.node);
      });
    }
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.isEnabled()) {
      this.selected = this.tt.isSelected(this.rowNode.node);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.handleRowClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
    }
  }
  isEnabled() {
    return this.ttSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTSelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTSelectableRowDblClick)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTSelectableRowDblClick,
    selectors: [["", "ttSelectableRowDblClick", ""]],
    hostVars: 2,
    hostBindings: function TTSelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dblclick", function TTSelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("row"));
      }
    },
    inputs: {
      rowNode: [0, "ttSelectableRowDblClick", "rowNode"],
      ttSelectableRowDisabled: [2, "ttSelectableRowDisabled", "ttSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTSelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[ttSelectableRowDblClick]",
      standalone: false,
      host: {
        "[class]": 'cx("row")'
      },
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }], {
    rowNode: [{
      type: Input,
      args: ["ttSelectableRowDblClick"]
    }],
    ttSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var TTContextMenuRow = class _TTContextMenuRow extends BaseComponent {
  tt;
  tableService;
  rowNode;
  ttContextMenuRowDisabled;
  selected;
  subscription;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, tableService) {
    super();
    this.tt = tt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.tt.tableService.contextMenuSource$.subscribe((node) => {
        this.selected = this.tt.equals(this.rowNode.node, node);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.tt.handleRowRightClick({
        originalEvent: event,
        rowNode: this.rowNode
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.ttContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTContextMenuRow)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTContextMenuRow,
    selectors: [["", "ttContextMenuRow", ""]],
    hostVars: 3,
    hostBindings: function TTContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function TTContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabindex", ctx.isEnabled() ? 0 : void 0);
        \u0275\u0275classMap(ctx.cx("contextMenuRow"));
      }
    },
    inputs: {
      rowNode: [0, "ttContextMenuRow", "rowNode"],
      ttContextMenuRowDisabled: [2, "ttContextMenuRowDisabled", "ttContextMenuRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[ttContextMenuRow]",
      standalone: false,
      host: {
        "[class]": 'cx("contextMenuRow")',
        "[tabindex]": "isEnabled() ? 0 : undefined"
      },
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }], {
    rowNode: [{
      type: Input,
      args: ["ttContextMenuRow"]
    }],
    ttContextMenuRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var TTCheckbox = class _TTCheckbox extends BaseComponent {
  tt;
  tableService;
  cd;
  disabled;
  rowNode;
  checked;
  partialChecked;
  focused;
  subscription;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, tableService, cd) {
    super();
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
      if (this.tt.selectionKeys) {
        this.checked = this.tt.isNodeSelected(this.rowNode.node);
        this.partialChecked = this.tt.isNodePartialSelected(this.rowNode.node);
      } else {
        this.checked = this.tt.isSelected(this.rowNode.node);
        this.partialChecked = this.rowNode.node.partialSelected;
      }
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.tt.selectionKeys) {
      this.checked = this.tt.isNodeSelected(this.rowNode.node);
      this.partialChecked = this.tt.isNodePartialSelected(this.rowNode.node);
    } else {
      this.checked = this.tt.isSelected(this.rowNode.node);
      this.partialChecked = this.rowNode.node.partialSelected;
    }
  }
  onClick(event) {
    if (!this.disabled) {
      if (this.tt.selectionKeys) {
        const _check = !this.checked;
        this.tt.toggleCheckbox({
          originalEvent: event,
          check: _check,
          rowNode: this.rowNode
        });
      } else {
        this.tt.toggleNodeWithCheckbox({
          originalEvent: event,
          rowNode: this.rowNode
        });
      }
    }
    pt();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function TTCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTCheckbox)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TTCheckbox,
    selectors: [["p-treeTableCheckbox"], ["p-treetable-checkbox"], ["p-tree-table-checkbox"]],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      rowNode: [0, "value", "rowNode"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 7,
    consts: [[3, "onChange", "ngModel", "binary", "disabled", "indeterminate", "styleClass", "tabIndex"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 0);
        \u0275\u0275listener("onChange", function TTCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275template(1, TTCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.checked)("binary", true)("disabled", ctx.disabled)("indeterminate", ctx.partialChecked)("styleClass", ctx.cx("pcNodeCheckbox"))("tabIndex", -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tt.checkboxIconTemplate || ctx.tt._checkboxIconTemplate);
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, PrimeTemplate, Checkbox, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTCheckbox, [{
    type: Component,
    args: [{
      selector: "p-treeTableCheckbox, p-treetable-checkbox, p-tree-table-checkbox",
      standalone: false,
      template: `
        <p-checkbox [ngModel]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="disabled" [indeterminate]="partialChecked" [styleClass]="cx('pcNodeCheckbox')" [tabIndex]="-1">
            <ng-container *ngIf="tt.checkboxIconTemplate || tt._checkboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="tt.checkboxIconTemplate || tt._checkboxIconTemplate; context: { $implicit: checked, partialSelected: partialChecked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowNode: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var TTHeaderCheckbox = class _TTHeaderCheckbox {
  tt;
  tableService;
  cd;
  checked;
  disabled;
  selectionChangeSubscription;
  valueChangeSubscription;
  constructor(tt, tableService, cd) {
    this.tt = tt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event) {
    if ((this.tt.value || this.tt.filteredNodes) && (this.tt.value.length > 0 || this.tt.filteredNodes.length > 0)) {
      this.tt.toggleNodesWithCheckbox(event, !this.checked);
    }
    pt();
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    let checked;
    const data = this.tt.filteredNodes || this.tt.value;
    if (data) {
      if (this.tt.selectionKeys) {
        for (let node of data) {
          if (this.tt.isNodeSelected(node)) {
            checked = true;
          } else {
            checked = false;
            break;
          }
        }
      }
      if (!this.tt.selectionKeys) {
        for (let node of data) {
          if (this.tt.isSelected(node)) {
            checked = true;
          } else {
            checked = false;
            break;
          }
        }
      }
    } else {
      checked = false;
    }
    return checked;
  }
  static \u0275fac = function TTHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTHeaderCheckbox)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TreeTableService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TTHeaderCheckbox,
    selectors: [["p-treeTableHeaderCheckbox"]],
    standalone: false,
    decls: 2,
    vars: 4,
    consts: [[3, "onChange", "ngModel", "binary", "disabled"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TTHeaderCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-checkbox", 0);
        \u0275\u0275listener("onChange", function TTHeaderCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275template(1, TTHeaderCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.checked)("binary", true)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tt.headerCheckboxIconTemplate || ctx.tt._headerCheckboxIconTemplate);
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, PrimeTemplate, Checkbox, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-treeTableHeaderCheckbox",
      standalone: false,
      template: `
        <p-checkbox [ngModel]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="!tt.value || tt.value.length === 0">
            <ng-container *ngIf="tt.headerCheckboxIconTemplate || tt._headerCheckboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="tt.headerCheckboxIconTemplate || tt._headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TreeTableService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var TTEditableColumn = class _TTEditableColumn {
  tt;
  el;
  zone;
  data;
  field;
  ttEditableColumnDisabled;
  constructor(tt, el, zone) {
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      W(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.tt.editingCellClick = true;
      if (this.tt.editingCell) {
        if (this.tt.editingCell !== this.el.nativeElement) {
          if (!this.tt.isEditingCellValid()) {
            return;
          }
          O(this.tt.editingCell, "p-cell-editing");
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.tt.updateEditingCell(this.el.nativeElement, this.data, this.field);
    W(this.el.nativeElement, "p-cell-editing");
    this.tt.onEditInit.emit({
      field: this.field,
      data: this.data
    });
    this.tt.editingCellClick = true;
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusable = z(this.el.nativeElement, "input, textarea");
        if (focusable) {
          focusable.focus();
        }
      }, 50);
    });
  }
  closeEditingCell() {
    O(this.tt.editingCell, "p-checkbox-icon");
    this.tt.editingCell = null;
    this.tt.unbindDocumentEditListener();
  }
  onKeyDown(event) {
    if (this.isEnabled()) {
      if (event.keyCode == 13 && !event.shiftKey) {
        if (this.tt.isEditingCellValid()) {
          O(this.tt.editingCell, "p-cell-editing");
          this.closeEditingCell();
          this.tt.onEditComplete.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      } else if (event.keyCode == 27) {
        if (this.tt.isEditingCellValid()) {
          O(this.tt.editingCell, "p-cell-editing");
          this.closeEditingCell();
          this.tt.onEditCancel.emit({
            field: this.field,
            data: this.data
          });
        }
        event.preventDefault();
      } else if (event.keyCode == 9) {
        this.tt.onEditComplete.emit({
          field: this.field,
          data: this.data
        });
        if (event.shiftKey) this.moveToPreviousCell(event);
        else this.moveToNextCell(event);
      }
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !R(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findPreviousEditableColumn(currentCell);
    if (targetCell) {
      kt(targetCell, "click", void 0);
      event.preventDefault();
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    let row = currentCell.parentElement;
    let targetCell = this.findNextEditableColumn(currentCell);
    if (targetCell) {
      kt(targetCell, "click", void 0);
      event.preventDefault();
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (R(prevCell, "p-editable-column")) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (R(nextCell, "p-editable-column")) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.ttEditableColumnDisabled !== true;
  }
  static \u0275fac = function TTEditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTEditableColumn)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTEditableColumn,
    selectors: [["", "ttEditableColumn", ""]],
    hostBindings: function TTEditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function TTEditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function TTEditableColumn_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
    },
    inputs: {
      data: [0, "ttEditableColumn", "data"],
      field: [0, "ttEditableColumnField", "field"],
      ttEditableColumnDisabled: [2, "ttEditableColumnDisabled", "ttEditableColumnDisabled", booleanAttribute]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTEditableColumn, [{
    type: Directive,
    args: [{
      selector: "[ttEditableColumn]",
      standalone: false
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input,
      args: ["ttEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["ttEditableColumnField"]
    }],
    ttEditableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TreeTableCellEditor = class _TreeTableCellEditor extends BaseComponent {
  tt;
  editableColumn;
  templates;
  inputTemplate;
  outputTemplate;
  constructor(tt, editableColumn) {
    super();
    this.tt = tt;
    this.editableColumn = editableColumn;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = function TreeTableCellEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableCellEditor)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(TTEditableColumn));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TreeTableCellEditor,
    selectors: [["p-treeTableCellEditor"], ["p-treetablecelleditor"], ["p-treetable-cell-editor"]],
    contentQueries: function TreeTableCellEditor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function TreeTableCellEditor_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TreeTableCellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, TreeTableCellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableCellEditor, [{
    type: Component,
    args: [{
      selector: "p-treeTableCellEditor, p-treetablecelleditor, p-treetable-cell-editor",
      standalone: false,
      template: `
        <ng-container *ngIf="tt.editingCell === editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!tt.editingCell || tt.editingCell !== editableColumn.el.nativeElement">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: TTEditableColumn
  }], {
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TTRow = class _TTRow extends BaseComponent {
  tt;
  el;
  zone;
  get level() {
    return this.rowNode?.["level"] + 1;
  }
  get styleClass() {
    return this.rowNode?.node["styleClass"] || "";
  }
  get expanded() {
    return this.rowNode?.node["expanded"];
  }
  rowNode;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt, el, zone) {
    super();
    this.tt = tt;
    this.el = el;
    this.zone = zone;
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    let nextRow = this.el?.nativeElement?.nextElementSibling;
    if (nextRow) {
      this.focusRowChange(event.currentTarget, nextRow);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    let prevRow = this.el?.nativeElement?.previousElementSibling;
    if (prevRow) {
      this.focusRowChange(event.currentTarget, prevRow);
    }
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const currentTarget = event.currentTarget;
    const isHiddenIcon = z(currentTarget, "button").style.visibility === "hidden";
    if (!isHiddenIcon && !this.expanded && this.rowNode.node["children"]) {
      this.expand(event);
      currentTarget.tabIndex = -1;
    }
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    const container = this.tt.el?.nativeElement;
    const expandedRows = Y(container, '[aria-expanded="true"]');
    const lastExpandedRow = expandedRows[expandedRows.length - 1];
    if (this.expanded) {
      this.collapse(event);
    }
    if (lastExpandedRow) {
      this.tt.toggleRowIndex = Ht(lastExpandedRow);
    }
    this.restoreFocus();
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstElement = z(this.tt.el?.nativeElement, `tr[aria-level="${this.level}"]`);
    firstElement && bt(firstElement);
    event.preventDefault();
  }
  onEndKey(event) {
    const nodes = Y(this.tt.el?.nativeElement, `tr[aria-level="${this.level}"]`);
    const lastElement = nodes[nodes.length - 1];
    bt(lastElement);
    event.preventDefault();
  }
  onTabKey(event) {
    const rows = this.el.nativeElement ? [...Y(this.el.nativeElement.parentNode, "tr")] : void 0;
    if (rows && s(rows)) {
      const hasSelectedRow = rows.some((row) => Q(row, "data-p-highlight") || row.getAttribute("aria-checked") === "true");
      rows.forEach((row) => {
        row.tabIndex = -1;
      });
      if (hasSelectedRow) {
        const selectedNodes = rows.filter((node) => Q(node, "data-p-highlight") || node.getAttribute("aria-checked") === "true");
        selectedNodes[0].tabIndex = 0;
        return;
      }
      rows[0].tabIndex = 0;
    }
  }
  expand(event) {
    this.tt.toggleRowIndex = Ht(this.el.nativeElement);
    this.rowNode.node["expanded"] = true;
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    this.rowNode.node["children"] ? this.restoreFocus(this.tt.toggleRowIndex + 1) : this.restoreFocus();
    this.tt.onNodeExpand.emit({
      originalEvent: event,
      node: this.rowNode.node
    });
  }
  collapse(event) {
    this.rowNode.node["expanded"] = false;
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    this.tt.onNodeCollapse.emit({
      originalEvent: event,
      node: this.rowNode.node
    });
  }
  focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    bt(currentFocusedRow);
  }
  restoreFocus(index) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        const container = this.tt.el?.nativeElement;
        const row = z(container, ".p-treetable-tbody").children[index || this.tt.toggleRowIndex];
        const rows = [...Y(container, "tr")];
        rows && rows.forEach((r) => {
          if (!row.isSameNode(r)) {
            r.tabIndex = -1;
          }
        });
        if (row) {
          row.tabIndex = 0;
          row.focus();
        }
      }, 25);
    });
  }
  static \u0275fac = function TTRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TTRow)(\u0275\u0275directiveInject(TreeTable), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TTRow,
    selectors: [["", "ttRow", ""]],
    hostVars: 7,
    hostBindings: function TTRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function TTRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("tabindex", "0")("role", ctx.row);
        \u0275\u0275attribute("aria-expanded", ctx.expanded)("aria-level", ctx.level)("data-pc-section", ctx.row);
        \u0275\u0275classMap("p-element " + ctx.styleClass);
      }
    },
    inputs: {
      rowNode: [0, "ttRow", "rowNode"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TTRow, [{
    type: Directive,
    args: [{
      selector: "[ttRow]",
      standalone: false,
      host: {
        "[class]": `'p-element ' + styleClass`,
        "[tabindex]": "'0'",
        "[attr.aria-expanded]": "expanded",
        "[attr.aria-level]": "level",
        "[attr.data-pc-section]": "row",
        "[role]": "row"
      },
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    rowNode: [{
      type: Input,
      args: ["ttRow"]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var TreeTableToggler = class _TreeTableToggler extends BaseComponent {
  tt;
  rowNode;
  _componentStyle = inject(TreeTableStyle);
  constructor(tt) {
    super();
    this.tt = tt;
  }
  get toggleButtonAriaLabel() {
    return this.config.translation ? this.rowNode.expanded ? this.config.translation.aria.collapseRow : this.config.translation.aria.expandRow : void 0;
  }
  onClick(event) {
    this.rowNode.node.expanded = !this.rowNode.node.expanded;
    if (this.rowNode.node.expanded) {
      this.tt.onNodeExpand.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    } else {
      this.tt.onNodeCollapse.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    }
    this.tt.updateSerializedValue();
    this.tt.tableService.onUIUpdate(this.tt.value);
    event.preventDefault();
  }
  static \u0275fac = function TreeTableToggler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableToggler)(\u0275\u0275directiveInject(TreeTable));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TreeTableToggler,
    selectors: [["p-treeTableToggler"], ["p-treetabletoggler"], ["p-treetable-toggler"]],
    inputs: {
      rowNode: "rowNode"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([TreeTableStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 14,
    consts: [["type", "button", "tabindex", "-1", "pRipple", "", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-down"], ["data-p-icon", "chevron-right"]],
    template: function TreeTableToggler_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function TreeTableToggler_Template_button_click_0_listener($event) {
          return ctx.onClick($event);
        });
        \u0275\u0275template(1, TreeTableToggler_ng_container_1_Template, 3, 2, "ng-container", 1)(2, TreeTableToggler_2_Template, 1, 0, null, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("toggler"));
        \u0275\u0275styleProp("visibility", ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden")("margin-inline-start", ctx.rowNode.level * 16 + "px");
        \u0275\u0275attribute("data-pc-section", "rowtoggler")("data-pc-group-section", "rowactionbutton")("aria-label", ctx.toggleButtonAriaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.tt.togglerIconTemplate && !ctx.tt._togglerIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.tt.togglerIconTemplate || ctx.tt._togglerIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c32, ctx.rowNode.node.expanded));
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, Ripple, ChevronDownIcon, ChevronRightIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableToggler, [{
    type: Component,
    args: [{
      selector: "p-treeTableToggler, p-treetabletoggler, p-treetable-toggler",
      standalone: false,
      template: `
        <button
            type="button"
            [class]="cx('toggler')"
            (click)="onClick($event)"
            tabindex="-1"
            pRipple
            [style.visibility]="rowNode.node.leaf === false || (rowNode.node.children && rowNode.node.children.length) ? 'visible' : 'hidden'"
            [style.marginInlineStart]="rowNode.level * 16 + 'px'"
            [attr.data-pc-section]="'rowtoggler'"
            [attr.data-pc-group-section]="'rowactionbutton'"
            [attr.aria-label]="toggleButtonAriaLabel"
        >
            <ng-container *ngIf="!tt.togglerIconTemplate && !tt._togglerIconTemplate">
                <svg data-p-icon="chevron-down" *ngIf="rowNode.node.expanded" [attr.aria-hidden]="true" />
                <svg data-p-icon="chevron-right" *ngIf="!rowNode.node.expanded" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-template *ngTemplateOutlet="tt.togglerIconTemplate || tt._togglerIconTemplate; context: { $implicit: rowNode.node.expanded }"></ng-template>
        </button>
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [TreeTableStyle]
    }]
  }], () => [{
    type: TreeTable
  }], {
    rowNode: [{
      type: Input
    }]
  });
})();
var TreeTableModule = class _TreeTableModule {
  static \u0275fac = function TreeTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TreeTableModule,
    declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor],
    imports: [CommonModule, PaginatorModule, Ripple, Scroller, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, BadgeModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, Checkbox, SharedModule, FormsModule],
    exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, Scroller]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, PaginatorModule, Scroller, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, BadgeModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, Checkbox, SharedModule, FormsModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, Ripple, Scroller, SpinnerIcon, ArrowDownIcon, ArrowUpIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, BadgeModule, CheckIcon, ChevronDownIcon, ChevronRightIcon, Checkbox, SharedModule, FormsModule],
      exports: [TreeTable, SharedModule, TreeTableToggler, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor, Scroller],
      declarations: [TreeTable, TreeTableToggler, TTScrollableView, TTBody, TTSortableColumn, TTSortIcon, TTResizableColumn, TTRow, TTReorderableColumn, TTSelectableRow, TTSelectableRowDblClick, TTContextMenuRow, TTCheckbox, TTHeaderCheckbox, TTEditableColumn, TreeTableCellEditor]
    }]
  }], null, null);
})();

// src/app/shared/components/tree-table/tree-table.component.ts
var _c02 = ["tt"];
var _c110 = (a0, a1, a2) => ({ $implicit: a0, rowData: a1, field: a2 });
function TreeTableComponent_ng_template_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r2.header, " ");
  }
}
function TreeTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, TreeTableComponent_ng_template_2_For_2_Template, 2, 1, "th", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(columns_r3);
  }
}
function TreeTableComponent_ng_template_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-treeTableToggler", 8);
  }
  if (rf & 2) {
    const rowNode_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("rowNode", rowNode_r4);
  }
}
function TreeTableComponent_ng_template_4_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 9);
  }
  if (rf & 2) {
    const col_r5 = \u0275\u0275nextContext().$implicit;
    const rowData_r6 = \u0275\u0275nextContext().rowData;
    \u0275\u0275property("ngTemplateOutlet", col_r5.template)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c110, rowData_r6, rowData_r6, col_r5.field));
  }
}
function TreeTableComponent_ng_template_4_For_2_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r5 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r6 = \u0275\u0275nextContext().rowData;
    \u0275\u0275textInterpolate1(" ", col_r5.valueGetter(rowData_r6), " ");
  }
}
function TreeTableComponent_ng_template_4_For_2_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r5 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r6 = \u0275\u0275nextContext().rowData;
    \u0275\u0275textInterpolate1(" ", rowData_r6[col_r5.field], " ");
  }
}
function TreeTableComponent_ng_template_4_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, TreeTableComponent_ng_template_4_For_2_Conditional_3_Conditional_1_Template, 1, 1)(2, TreeTableComponent_ng_template_4_For_2_Conditional_3_Conditional_2_Template, 1, 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const col_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((col_r5 == null ? null : col_r5.valueGetter) ? 1 : 2);
  }
}
function TreeTableComponent_ng_template_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, TreeTableComponent_ng_template_4_For_2_Conditional_1_Template, 1, 1, "p-treeTableToggler", 8);
    \u0275\u0275conditionalCreate(2, TreeTableComponent_ng_template_4_For_2_Conditional_2_Template, 1, 6, "ng-container", 9)(3, TreeTableComponent_ng_template_4_For_2_Conditional_3_Template, 3, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const \u0275$index_15_r7 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_15_r7 === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r5.type === "template" ? 2 : 3);
  }
}
function TreeTableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 7);
    \u0275\u0275repeaterCreate(1, TreeTableComponent_ng_template_4_For_2_Template, 4, 2, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowNode_r4 = ctx.$implicit;
    const columns_r8 = ctx.columns;
    \u0275\u0275property("ttRow", rowNode_r4)("ttSelectableRow", rowNode_r4);
    \u0275\u0275advance();
    \u0275\u0275repeater(columns_r8);
  }
}
function TreeTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r8.columns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r8.emptyMessage());
  }
}
function TreeTableComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 10);
    \u0275\u0275text(3, " Loading data... ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const columns_r10 = ctx.columns;
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", columns_r10.length);
  }
}
var TreeTableComponent = class _TreeTableComponent {
  treeTable;
  // Input properties
  nodes = input([]);
  columns = input([]);
  selectionMode = input("single");
  loading = input(false);
  emptyMessage = input("No data available");
  styleClass = input("");
  selection = input(null);
  paginator = input(false);
  rows = input(DEFAULT_PAGE_SIZE);
  rowsPerPageOptions = input(DEFAULT_PAGE_SIZE_OPTIONS);
  totalRecords = input(0);
  lazy = input(false);
  scrollable = input(false);
  scrollHeight = input("");
  resizableColumns = input(true);
  reorderableColumns = input(true);
  rowHover = input(true);
  filterMode = input("menu");
  // Output events
  nodeSelect = output();
  nodeUnselect = output();
  nodeExpand = output();
  nodeCollapse = output();
  lazyLoad = output();
  pageChange = output();
  sort = output();
  filter = output();
  onNodeSelect(event) {
    this.nodeSelect.emit(event);
  }
  onNodeUnselect(event) {
    this.nodeUnselect.emit(event);
  }
  onNodeExpand(event) {
    this.nodeExpand.emit(event);
  }
  onNodeCollapse(event) {
    this.nodeCollapse.emit(event);
  }
  onLazyLoad(event) {
    this.lazyLoad.emit(event);
  }
  onPageChange(event) {
    this.pageChange.emit(event);
  }
  onSortChange(event) {
    this.sort.emit(event);
  }
  onFilter(event) {
    this.filter.emit(event);
  }
  reset() {
    if (isDefined(this.treeTable)) {
      this.treeTable.reset();
    }
  }
  setSelection(selection) {
    if (isDefined(this.treeTable)) {
      this.treeTable.selection = selection;
    }
  }
  static \u0275fac = function TreeTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeTableComponent, selectors: [["app-tree-table"]], viewQuery: function TreeTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeTable = _t.first);
    }
  }, inputs: { nodes: [1, "nodes"], columns: [1, "columns"], selectionMode: [1, "selectionMode"], loading: [1, "loading"], emptyMessage: [1, "emptyMessage"], styleClass: [1, "styleClass"], selection: [1, "selection"], paginator: [1, "paginator"], rows: [1, "rows"], rowsPerPageOptions: [1, "rowsPerPageOptions"], totalRecords: [1, "totalRecords"], lazy: [1, "lazy"], scrollable: [1, "scrollable"], scrollHeight: [1, "scrollHeight"], resizableColumns: [1, "resizableColumns"], reorderableColumns: [1, "reorderableColumns"], rowHover: [1, "rowHover"], filterMode: [1, "filterMode"] }, outputs: { nodeSelect: "nodeSelect", nodeUnselect: "nodeUnselect", nodeExpand: "nodeExpand", nodeCollapse: "nodeCollapse", lazyLoad: "lazyLoad", pageChange: "pageChange", sort: "sort", filter: "filter" }, decls: 10, vars: 16, consts: [["tt", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [3, "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onLazyLoad", "onPage", "onSort", "onFilter", "value", "columns", "selectionMode", "selection", "loading", "paginator", "rows", "rowsPerPageOptions", "totalRecords", "lazy", "scrollable", "scrollHeight", "resizableColumns", "reorderableColumns", "rowHover", "filterMode"], ["scope", "col"], [3, "ttRow", "ttSelectableRow"], [3, "rowNode"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "justify-content-center", "align-items-center"]], template: function TreeTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-treeTable", 5, 0);
      \u0275\u0275listener("onNodeSelect", function TreeTableComponent_Template_p_treeTable_onNodeSelect_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeSelect($event));
      })("onNodeUnselect", function TreeTableComponent_Template_p_treeTable_onNodeUnselect_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeUnselect($event));
      })("onNodeExpand", function TreeTableComponent_Template_p_treeTable_onNodeExpand_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeExpand($event));
      })("onNodeCollapse", function TreeTableComponent_Template_p_treeTable_onNodeCollapse_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeCollapse($event));
      })("onLazyLoad", function TreeTableComponent_Template_p_treeTable_onLazyLoad_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLazyLoad($event));
      })("onPage", function TreeTableComponent_Template_p_treeTable_onPage_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("onSort", function TreeTableComponent_Template_p_treeTable_onSort_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSortChange($event));
      })("onFilter", function TreeTableComponent_Template_p_treeTable_onFilter_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilter($event));
      });
      \u0275\u0275template(2, TreeTableComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, TreeTableComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, TreeTableComponent_ng_template_6_Template, 3, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, TreeTableComponent_ng_template_8_Template, 4, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.nodes())("columns", ctx.columns())("selectionMode", ctx.selectionMode())("selection", ctx.selection())("loading", ctx.loading())("paginator", ctx.paginator())("rows", ctx.rows())("rowsPerPageOptions", ctx.rowsPerPageOptions())("totalRecords", ctx.totalRecords())("lazy", ctx.lazy())("scrollable", ctx.scrollable())("scrollHeight", ctx.scrollHeight())("resizableColumns", ctx.resizableColumns())("reorderableColumns", ctx.reorderableColumns())("rowHover", ctx.rowHover())("filterMode", ctx.filterMode());
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, TreeTableModule, TreeTable, TreeTableToggler, TTRow, TTSelectableRow, ContextMenuModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=tree-table.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableComponent, [{
    type: Component,
    args: [{ selector: "app-tree-table", standalone: true, imports: [CommonModule, TreeTableModule, ContextMenuModule], template: `<p-treeTable
  #tt
  [value]="nodes()"
  [columns]="columns()"
  [selectionMode]="selectionMode()"
  [selection]="selection()"
  [loading]="loading()"
  [paginator]="paginator()"
  [rows]="rows()"
  [rowsPerPageOptions]="rowsPerPageOptions()"
  [totalRecords]="totalRecords()"
  [lazy]="lazy()"
  [scrollable]="scrollable()"
  [scrollHeight]="scrollHeight()"
  [resizableColumns]="resizableColumns()"
  [reorderableColumns]="reorderableColumns()"
  [rowHover]="rowHover()"
  [filterMode]="filterMode()"
  (onNodeSelect)="onNodeSelect($event)"
  (onNodeUnselect)="onNodeUnselect($event)"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)"
  (onLazyLoad)="onLazyLoad($event)"
  (onPage)="onPageChange($event)"
  (onSort)="onSortChange($event)"
  (onFilter)="onFilter($event)"
>
  <ng-template #header let-columns>
    <tr>
      @for (col of columns; track $index) {
        <th scope="col">
          {{ col.header }}
        </th>
      }
    </tr>
  </ng-template>

  <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
    <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
      @for (col of columns; track $index; let i = $index) {
        <td>
          @if (i === 0) {
            <p-treeTableToggler [rowNode]="rowNode"></p-treeTableToggler>
          }
          @if (col.type === 'template') {
            <ng-container
              [ngTemplateOutlet]="col.template"
              [ngTemplateOutletContext]="{
                $implicit: rowData,
                rowData: rowData,
                field: col.field,
              }"
            ></ng-container>
          } @else {
            <ng-container>
              @if (col?.valueGetter) {
                {{ col.valueGetter(rowData) }}
              } @else {
                {{ rowData[col.field] }}
              }
            </ng-container>
          }
        </td>
      }
    </tr>
  </ng-template>

  <ng-template #emptymessage>
    <tr>
      <td [attr.colspan]="columns().length">{{ emptyMessage() }}</td>
    </tr>
  </ng-template>

  <ng-template #loadingbody let-columns="columns">
    <tr>
      <td [attr.colspan]="columns.length">
        <div class="flex justify-content-center align-items-center">
          Loading data...
        </div>
      </td>
    </tr>
  </ng-template>
</p-treeTable>
`, styles: ["/* src/app/shared/components/tree-table/tree-table.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=tree-table.component.css.map */\n"] }]
  }], null, { treeTable: [{
    type: ViewChild,
    args: ["tt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeTableComponent, { className: "TreeTableComponent", filePath: "src/app/shared/components/tree-table/tree-table.component.ts", lineNumber: 30 });
})();

// src/app/features/administration/components/admin-treetable-container/admin-treetable-container.component.ts
var AdminTreetableContainerComponent = class _AdminTreetableContainerComponent {
  treeTable;
  treeTableConfigFactory = inject(TreeTableConfigurationFactory);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  currentTreeTableState = signal(void 0);
  filterSubject = new Subject();
  broadcastService = inject(BroadcastEventMessageService);
  detailsFactory = inject(DetailsComponentFactory);
  detailsService = inject(EntityDetailsService);
  treeTableConfiguration = signal(null);
  columns = signal([]);
  nodes = signal([]);
  loading = signal(false);
  totalRecords = signal(0);
  limit = signal(DEFAULT_PAGE_SIZE);
  showFilters = signal(false);
  currentFilters = signal({});
  router = inject(Router);
  forceTreeReconfig$ = new Subject();
  lastProcessedRouteKey = signal(null);
  constructor() {
    effect(() => {
      const config = this.treeTableConfiguration();
      if (isDefined(config?.columnsSignal)) {
        this.columns.set(config.columnsSignal());
      }
    });
  }
  ngOnInit() {
    this.initializeTreeTableConfiguration();
    this.initializeFilterDebounce();
    this.initializeEntityUpdatesHandler();
    this.initializeClientChangeHandler();
    this.forceTreeReconfig$.next();
  }
  selectTreeTableItemFromQuery() {
    this.activatedRoute.queryParams.pipe(takeUntilDestroyed(this.destroyRef), tap((params) => {
      if (this.nodes()?.length > 0 && isDefined(params["details"])) {
        const selectedId = params["details"];
        const selectedNode = this.findNodeById(this.nodes(), selectedId);
        if (selectedNode && this.treeTable) {
          setTimeout(() => {
            this.treeTable?.setSelection(selectedNode);
            this.handleNodeSelect({ node: selectedNode });
          });
        }
      }
    })).subscribe();
  }
  findNodeById(nodes, id) {
    for (const node of nodes) {
      if (node.data?.id === id) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const found = this.findNodeById(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  initializeEntityUpdatesHandler() {
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      let currentSelection = null;
      if (this.treeTable?.selection) {
        currentSelection = Array.isArray(this.treeTable.selection) ? [...this.treeTable.selection] : __spreadValues({}, this.treeTable.selection);
      }
      this.loadData(this.currentTreeTableState()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (currentSelection) {
          this.restoreSelection(Array.isArray(currentSelection) ? currentSelection[0] : currentSelection);
        }
      });
    });
  }
  initializeClientChangeHandler() {
    const configChanges$ = merge(this.broadcastService.on("client-changed"), this.broadcastService.on("entity-changed"));
    const dataChanges$ = this.broadcastService.on("entity-deleted");
    configChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.forceTreeReconfig$.next();
    });
    dataChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.onRefresh();
    });
  }
  restoreSelection(previousSelection) {
    if (isNullOrUndefined(previousSelection) || !this.treeTable)
      return;
    if (this.nodes().length === 0) {
      console.warn("Cannot restore selection: tree table data is empty");
      return;
    }
    try {
      if (Array.isArray(previousSelection)) {
        const selectedIds = previousSelection.map((item) => item.data?.id);
        const refreshedNodes = [];
        for (const id of selectedIds) {
          const node = this.findNodeById(this.nodes(), id);
          if (node) {
            refreshedNodes.push(node);
          }
        }
        if (refreshedNodes.length > 0) {
          setTimeout(() => {
            this.treeTable?.setSelection(refreshedNodes);
            if (isDefined(refreshedNodes[0])) {
              this.handleNodeSelect({ node: refreshedNodes[0] });
            }
          }, 100);
        }
      } else if (isDefined(previousSelection?.data?.id)) {
        const refreshedNode = this.findNodeById(this.nodes(), previousSelection.data.id);
        if (refreshedNode) {
          setTimeout(() => {
            this.treeTable?.setSelection(refreshedNode);
            this.handleNodeSelect({ node: refreshedNode });
          }, 100);
        } else {
          console.warn(`Node with id ${previousSelection.data.id} not found in refreshed data`);
        }
      }
    } catch (err) {
      console.error("Error restoring selection:", err);
    }
  }
  getRouteParams() {
    let route = this.activatedRoute;
    const paramsList = [];
    while (route) {
      paramsList.push(route.snapshot.params);
      route = route.parent;
    }
    const finalParams = {};
    for (let i = paramsList.length - 1; i >= 0; i--) {
      Object.assign(finalParams, paramsList[i]);
    }
    return finalParams;
  }
  initializeTreeTableConfiguration() {
    const navigationEvents$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => false));
    const forceReconfigEvents$ = this.forceTreeReconfig$.pipe(map(() => true));
    merge(navigationEvents$, forceReconfigEvents$).pipe(takeUntilDestroyed(this.destroyRef), switchMap(() => {
      this.loading.set(true);
      const typeFromParams = this.activatedRoute.snapshot.paramMap.get("type");
      const typeFromData = this.activatedRoute.snapshot.data["type"];
      const type = typeFromParams ?? typeFromData;
      const routeParams = this.getRouteParams();
      const ownerId = routeParams["clientId"] ?? routeParams["vendorId"] ?? routeParams["distributorId"] ?? "none";
      const currentRouteKey = `${type}-${ownerId}`;
      if (this.lastProcessedRouteKey() === currentRouteKey) {
        this.loading.set(false);
        return EMPTY;
      }
      this.lastProcessedRouteKey.set(currentRouteKey);
      if (isNullOrUndefined(type)) {
        this.treeTableConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      const config = this.treeTableConfigFactory.create(
        type,
        // Can be null; factory needs to handle this, possibly using routeParams
        routeParams
      );
      if (!this.isValidConfig(config)) {
        console.warn(`AdminTreetableContainer: Generated configuration for type "${type ?? "derived_from_path"}" (key: ${currentRouteKey}) is invalid.`);
        this.treeTableConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      this.treeTableConfiguration.set(config);
      if (isDefined(config.columns)) {
        this.columns.set(config.columns);
      }
      if (isDefined(config.getFilters)) {
        const filterState = config.getFilters();
        const initialFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            initialFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(initialFilters);
      } else {
        this.currentFilters.set({});
      }
      return this.loadData();
    }), catchError((err) => {
      console.error("AdminTreetableContainer: Error during treetable configuration or data load pipeline:", err);
      this.loading.set(false);
      this.nodes.set([]);
      this.totalRecords.set(0);
      this.treeTableConfiguration.set(null);
      this.columns.set([]);
      this.currentFilters.set({});
      return EMPTY;
    })).subscribe();
  }
  isValidConfig(config) {
    if (!config?.dataService) {
      this.loading.set(false);
      return false;
    }
    return true;
  }
  initializeFilterDebounce() {
    this.filterSubject.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(300), tap((event) => {
      const config = this.treeTableConfiguration();
      if (!config)
        return;
      config.onFilterChange?.(event.field, event.value);
      this.loadData(this.currentTreeTableState()).subscribe(() => {
      });
    })).subscribe();
  }
  loadData(event) {
    return defer(() => {
      const config = this.treeTableConfiguration();
      if (!this.isValidConfig(config))
        return EMPTY;
      this.loading.set(true);
      this.currentTreeTableState.set(event);
      return config.dataService.getList(config.getRequestParams(event)).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.loading.set(false)), tap((response) => {
        this.nodes.set(response.nodes);
        this.totalRecords.set(response.count);
        this.selectTreeTableItemFromQuery();
      }), catchError(() => {
        return EMPTY;
      }));
    });
  }
  onRefresh() {
    const config = this.treeTableConfiguration();
    if (!this.isValidConfig(config)) {
      return;
    }
    const hasSelectedItem = this.detailsService.showPanel();
    const selectedItemId = this.detailsService.getSelectedItemId();
    this.loadData(this.currentTreeTableState()).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      if (hasSelectedItem && selectedItemId) {
        const refreshedItem = this.findItemById(selectedItemId);
        if (isDefined(refreshedItem)) {
          this.detailsService.softRefreshSelectedItem(refreshedItem);
        } else {
          this.detailsService.softRefreshSelectedItem();
        }
      }
    })).subscribe();
  }
  onFilterToggle() {
    const config = this.treeTableConfiguration();
    if (!this.treeTable || !config)
      return;
    const newValue = !this.showFilters();
    this.showFilters.set(newValue);
    if (newValue) {
      if (config.getFilters) {
        const filterState = config.getFilters();
        const currentFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            currentFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(currentFilters);
      }
    } else if (config.clearFilters) {
      config.clearFilters();
      this.loadData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }
  handleLazyLoad(event) {
    this.loadData(event).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe();
  }
  handleNodeSelect(event) {
    if (isEmpty(event) || isEmpty(event?.node))
      return;
    const routeEntityType = this.detailsFactory.getEntityTypeFromRoute(this.activatedRoute, "type");
    const entityType = event?.node?.data?.type ?? routeEntityType;
    const item = __spreadProps(__spreadValues({}, event?.node?.data), { entityType });
    this.broadcastService.broadcast("tree-item-selected", {
      item,
      componentType: this.detailsFactory.getDetailsComponent(entityType)
    });
  }
  handleNodeExpand(event) {
    const config = this.treeTableConfiguration();
    if (!config?.onNodeExpand || isEmpty(event) || isEmpty(event.node))
      return;
    config.onNodeExpand(event.node);
  }
  handleNodeCollapse(event) {
    const config = this.treeTableConfiguration();
    if (!config?.onNodeCollapse || isEmpty(event) || isEmpty(event.node))
      return;
    config.onNodeCollapse(event.node);
  }
  /**
   * Find an item in the current tree data by its ID
   * Used for soft refreshing details panel after tree refresh
   */
  findItemById(id) {
    const currentNodes = this.nodes();
    if (isNullOrUndefined(currentNodes)) {
      return null;
    }
    return this.searchNodeRecursively(currentNodes, id);
  }
  /**
   * Recursively search through tree nodes to find an item by ID
   */
  searchNodeRecursively(nodes, id) {
    for (const node of nodes) {
      if (String(node.data?.id) === id) {
        return node.data;
      }
      if (node.children && node.children.length > 0) {
        const found = this.searchNodeRecursively(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  static \u0275fac = function AdminTreetableContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreetableContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminTreetableContainerComponent, selectors: [["app-admin-treetable-container"]], viewQuery: function AdminTreetableContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TreeTableComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeTable = _t.first);
    }
  }, decls: 12, vars: 15, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "p-4", "content-header", "flex-none", "w-full"], [1, "flex", "justify-between", "items-center"], ["id", "treetableTitle", 1, "text-xl", "font-semibold", "truncate"], ["aria-label", "Tree Table actions", 1, "flex-none", "flex", "space-x-4", "align-center"], ["type", "button", "pTooltip", "Add", "tooltipPosition", "bottom", "aria-label", "Add new item", 1, "pi", "pi-plus", "action", "hover", 3, "click"], ["type", "button", "pTooltip", "Refresh", "tooltipPosition", "bottom", "aria-label", "Refresh tree table data", 1, "pi", "pi-refresh", "action", "hover", 3, "click"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto"], ["role", "treegrid", 1, "h-full", "max-w-full", 3, "lazyLoad", "nodeSelect", "nodeExpand", "nodeCollapse", "columns", "nodes", "totalRecords", "lazy", "selectionMode", "loading", "scrollable", "scrollHeight"], ["aria-live", "polite", "aria-atomic", "true", 1, "sr-only"]], template: function AdminTreetableContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AdminTreetableContainerComponent_Template_button_click_6_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.treeTableConfiguration()) == null ? null : tmp_0_0.onAdd();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function AdminTreetableContainerComponent_Template_button_click_7_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "app-tree-table", 8);
      \u0275\u0275listener("lazyLoad", function AdminTreetableContainerComponent_Template_app_tree_table_lazyLoad_9_listener($event) {
        return ctx.handleLazyLoad($event);
      })("nodeSelect", function AdminTreetableContainerComponent_Template_app_tree_table_nodeSelect_9_listener($event) {
        return ctx.handleNodeSelect($event);
      })("nodeExpand", function AdminTreetableContainerComponent_Template_app_tree_table_nodeExpand_9_listener($event) {
        return ctx.handleNodeExpand($event);
      })("nodeCollapse", function AdminTreetableContainerComponent_Template_app_tree_table_nodeCollapse_9_listener($event) {
        return ctx.handleNodeCollapse($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.treeTableConfiguration()) == null ? null : tmp_0_0.getTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-disabled", !((tmp_1_0 = ctx.treeTableConfiguration()) == null ? null : tmp_1_0.onAdd));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-busy", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("columns", ctx.columns())("nodes", ctx.nodes())("totalRecords", ctx.totalRecords())("lazy", true)("selectionMode", "single")("loading", ctx.loading())("scrollable", true)("scrollHeight", "flex");
      \u0275\u0275attribute("aria-labelledby", "treetableTitle")("aria-busy", ctx.loading())("aria-rowcount", ctx.totalRecords());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Loading data" : ctx.totalRecords() + " items loaded", " ");
    }
  }, dependencies: [TreeTableComponent, ButtonModule, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border-bottom: 1px solid var(--surface-border);\n}\n[_nghost-%COMP%]   .action[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n[_nghost-%COMP%]   .action.hover[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n}\n[_nghost-%COMP%]   .action[aria-disabled=true][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=admin-treetable-container.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreetableContainerComponent, [{
    type: Component,
    args: [{ selector: "app-admin-treetable-container", standalone: true, imports: [TreeTableComponent, ButtonModule, TooltipModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <div class="p-4 content-header flex-none w-full">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold truncate" id="treetableTitle">
        {{ treeTableConfiguration()?.getTitle() }}
      </h2>
      <div
        class="flex-none flex space-x-4 align-center"
        aria-label="Tree Table actions"
      >
        <button
          type="button"
          class="pi pi-plus action hover"
          pTooltip="Add"
          tooltipPosition="bottom"
          aria-label="Add new item"
          [attr.aria-disabled]="!treeTableConfiguration()?.onAdd"
          (click)="treeTableConfiguration()?.onAdd()"
        ></button>
        <button
          type="button"
          class="pi pi-refresh action hover"
          pTooltip="Refresh"
          tooltipPosition="bottom"
          (click)="onRefresh()"
          aria-label="Refresh tree table data"
          [attr.aria-busy]="loading()"
        ></button>
      </div>
    </div>
  </div>

  <div class="flex-1 min-h-0 w-full overflow-auto">
    <app-tree-table
      [columns]="columns()"
      [nodes]="nodes()"
      [totalRecords]="totalRecords()"
      [lazy]="true"
      (lazyLoad)="handleLazyLoad($event)"
      (nodeSelect)="handleNodeSelect($event)"
      (nodeExpand)="handleNodeExpand($event)"
      (nodeCollapse)="handleNodeCollapse($event)"
      [selectionMode]="'single'"
      [loading]="loading()"
      [scrollable]="true"
      [scrollHeight]="'flex'"
      role="treegrid"
      [attr.aria-labelledby]="'treetableTitle'"
      [attr.aria-busy]="loading()"
      [attr.aria-rowcount]="totalRecords()"
      class="h-full max-w-full"
    ></app-tree-table>
  </div>
  <div class="sr-only" aria-live="polite" aria-atomic="true">
    {{ loading() ? 'Loading data' : totalRecords() + ' items loaded' }}
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/admin-treetable-container/admin-treetable-container.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n:host .content-header {\n  background-color: var(--surface-card);\n  border-bottom: 1px solid var(--surface-border);\n}\n:host .action {\n  font-size: 1.2rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n:host .action.hover:hover {\n  background-color: var(--surface-hover);\n}\n:host .action[aria-disabled=true] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=admin-treetable-container.component.css.map */\n"] }]
  }], () => [], { treeTable: [{
    type: ViewChild,
    args: [TreeTableComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminTreetableContainerComponent, { className: "AdminTreetableContainerComponent", filePath: "src/app/features/administration/components/admin-treetable-container/admin-treetable-container.component.ts", lineNumber: 70 });
})();

export {
  TreeTableConfigurationFactory,
  AdminTreetableContainerComponent
};
//# sourceMappingURL=chunk-AONHXEUF.js.map
