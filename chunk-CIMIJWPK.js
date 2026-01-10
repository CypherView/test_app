import {
  ColumnFilter,
  Paginator,
  PaginatorModule,
  ReorderableRow,
  ReorderableRowHandle,
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-74PDGLLQ.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-E42ISNWF.js";
import {
  Dialog
} from "./chunk-GMXIORZL.js";
import {
  AngleRightIcon
} from "./chunk-KXEMECWW.js";
import {
  $t,
  Badge,
  BadgeModule,
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Button,
  ConfirmEventType,
  ConfirmationService,
  DefaultValueAccessor,
  FilterService,
  Footer,
  FormsModule,
  G,
  Header,
  InputText,
  InputTextModule,
  J,
  J2,
  K,
  M,
  MotionDirective,
  MotionModule,
  NgControlStatus,
  NgModel,
  O,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  Ripple,
  SharedModule,
  SpinnerIcon,
  Tooltip,
  TooltipModule,
  TranslationKeys,
  Ut,
  _t,
  bt,
  h,
  l,
  m,
  p,
  s,
  s2,
  ut,
  v,
  z,
  zindexutils
} from "./chunk-A5WLHX2Q.js";
import {
  MeasurementDateTimeService,
  constructFrom,
  enUS,
  getDefaultOptions,
  getTimezoneOffsetInMilliseconds,
  isValid,
  minutesInDay,
  minutesInMonth,
  normalizeDates,
  toDate
} from "./chunk-WREEVIYK.js";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZE_OPTIONS,
  takeUntilDestroyed
} from "./chunk-DXUIOPUE.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  RouterLink,
  RouterModule,
  SlicePipe,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isPlatformBrowser
} from "./chunk-EMFP3DUF.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  debounceTime,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomTemplate,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-LH7TWNW2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@primeuix/styles/dist/contextmenu/index.mjs
var style = "\n    .p-contextmenu {\n        background: dt('contextmenu.background');\n        color: dt('contextmenu.color');\n        border: 1px solid dt('contextmenu.border.color');\n        border-radius: dt('contextmenu.border.radius');\n        box-shadow: dt('contextmenu.shadow');\n        min-width: 12.5rem;\n    }\n\n    .p-contextmenu-root-list,\n    .p-contextmenu-submenu {\n        margin: 0;\n        padding: dt('contextmenu.list.padding');\n        list-style: none;\n        outline: 0 none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('contextmenu.list.gap');\n    }\n\n    .p-contextmenu-submenu {\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        z-index: 1;\n        background: dt('contextmenu.background');\n        color: dt('contextmenu.color');\n        border: 1px solid dt('contextmenu.border.color');\n        border-radius: dt('contextmenu.border.radius');\n        box-shadow: dt('contextmenu.shadow');\n    }\n\n    .p-contextmenu-item {\n        position: relative;\n    }\n\n    .p-contextmenu-item-content {\n        transition:\n            background dt('contextmenu.transition.duration'),\n            color dt('contextmenu.transition.duration');\n        border-radius: dt('contextmenu.item.border.radius');\n        color: dt('contextmenu.item.color');\n    }\n\n    .p-contextmenu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('contextmenu.item.padding');\n        gap: dt('contextmenu.item.gap');\n        user-select: none;\n    }\n\n    .p-contextmenu-item-label {\n        line-height: 1;\n    }\n\n    .p-contextmenu-item-icon {\n        color: dt('contextmenu.item.icon.color');\n    }\n\n    .p-contextmenu-submenu-icon {\n        color: dt('contextmenu.submenu.icon.color');\n        margin-left: auto;\n        font-size: dt('contextmenu.submenu.icon.size');\n        width: dt('contextmenu.submenu.icon.size');\n        height: dt('contextmenu.submenu.icon.size');\n    }\n\n    .p-contextmenu-submenu-icon:dir(rtl) {\n        margin-left: 0;\n        margin-right: auto;\n    }\n\n    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {\n        color: dt('contextmenu.item.focus.color');\n        background: dt('contextmenu.item.focus.background');\n    }\n\n    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {\n        color: dt('contextmenu.item.icon.focus.color');\n    }\n\n    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n        color: dt('contextmenu.submenu.icon.focus.color');\n    }\n\n    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {\n        color: dt('contextmenu.item.focus.color');\n        background: dt('contextmenu.item.focus.background');\n    }\n\n    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {\n        color: dt('contextmenu.item.icon.focus.color');\n    }\n\n    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {\n        color: dt('contextmenu.submenu.icon.focus.color');\n    }\n\n    .p-contextmenu-item-active > .p-contextmenu-item-content {\n        color: dt('contextmenu.item.active.color');\n        background: dt('contextmenu.item.active.background');\n    }\n\n    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {\n        color: dt('contextmenu.item.icon.active.color');\n    }\n\n    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n        color: dt('contextmenu.submenu.icon.active.color');\n    }\n\n    .p-contextmenu-separator {\n        border-block-start: 1px solid dt('contextmenu.separator.border.color');\n    }\n\n    .p-contextmenu-mobile .p-contextmenu-submenu {\n        position: static;\n        box-shadow: none;\n        border: 0 none;\n        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');\n        padding-inline-end: 0;\n    }\n\n    .p-contextmenu-mobile .p-contextmenu-submenu-icon {\n        transition: transform 0.2s;\n        transform: rotate(90deg);\n    }\n\n    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n        transform: rotate(-90deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-contextmenu.mjs
var _c0 = ["sublist"];
var _c1 = (a0, a1) => ({
  instance: a0,
  processedItem: a1
});
var _c2 = () => ({
  class: "p-contextmenu-submenu-icon"
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  $implicit: a0
});
function ContextMenuSub_Conditional_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.getItemProp(processedItem_r3, "style"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("separator"), ctx_r1.getItemProp(processedItem_r3, "styleClass")));
    \u0275\u0275property("pBind", ctx_r1._ptm("separator"));
    \u0275\u0275attribute("id", ctx_r1.getItemId(processedItem_r3));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r3, "icon"), ctx_r1.getItemProp(processedItem_r3, "iconClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemIcon"));
    \u0275\u0275attribute("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("innerHTML", ctx_r1.getItemLabel(processedItem_r3), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"));
    \u0275\u0275property("value", ctx_r1.getItemProp(processedItem_r3, "badge"))("unstyled", ctx_r1.unstyled());
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(5);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("submenuIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "submenuIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-hidden", true);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 22)(2, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 1, null, 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.contextMenu.submenuIconTemplate && !ctx_r1.contextMenu._submenuIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contextMenu.submenuIconTemplate || ctx_r1.contextMenu._submenuIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(3, _c2));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 6, "span", 16)(2, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 5, "span", 17)(3, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_p_badge_5_Template, 1, 4, "p-badge", 18)(6, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 4, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r7 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext(3);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.getItemProp(processedItem_r3, "linkClass")));
    \u0275\u0275property("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "linkStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLink"));
    \u0275\u0275attribute("href", ctx_r1.getItemProp(processedItem_r3, "url"), \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("title", ctx_r1.getItemProp(processedItem_r3, "title"))("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemIcon"), ctx_r1.getItemProp(processedItem_r3, "icon"), ctx_r1.getItemProp(processedItem_r3, "iconClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemIcon"));
    \u0275\u0275attribute("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLabel"), ctx_r1.getItemProp(processedItem_r3, "labelClass")));
    \u0275\u0275property("ngStyle", ctx_r1.getItemProp(processedItem_r3, "labelStyle"))("innerHTML", ctx_r1.getItemLabel(processedItem_r3), \u0275\u0275sanitizeHtml)("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLabel"));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"));
    \u0275\u0275property("value", ctx_r1.getItemProp(processedItem_r3, "badge"))("unstyled", ctx_r1.unstyled());
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 24);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(5);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("submenuIcon"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "submenuIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 25);
  }
  if (rf & 2) {
    \u0275\u0275ariaProperty("aria-hidden", true);
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6__svg_svg_1_Template, 1, 4, "svg", 22)(2, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 1, null, 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.contextMenu.submenuIconTemplate && !ctx_r1.contextMenu._submenuIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contextMenu.submenuIconTemplate || ctx_r1.contextMenu._submenuIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(3, _c2));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 6, "span", 16)(2, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 5, "span", 17)(3, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_p_badge_5_Template, 1, 4, "p-badge", 18)(6, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 4, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r8 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext(3);
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("itemLink"), ctx_r1.getItemProp(processedItem_r3, "linkClass")));
    \u0275\u0275property("routerLink", ctx_r1.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r1.getItemProp(processedItem_r3, "queryParams"))("routerLinkActiveOptions", ctx_r1.getItemProp(processedItem_r3, "routerLinkActiveOptions") || \u0275\u0275pureFunction0(22, _c3))("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "linkStyle"))("fragment", ctx_r1.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r1.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r1.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r1.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r1.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r1.getItemProp(processedItem_r3, "state"))("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemLink"));
    \u0275\u0275attribute("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("title", ctx_r1.getItemProp(processedItem_r3, "title"))("tabindex", -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r8);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 14, "a", 13)(2, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 23, "a", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getItemProp(processedItem_r3, "routerLink"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemProp(processedItem_r3, "routerLink"));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c4, processedItem_r3.item));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_p_contextmenu_sub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-contextmenu-sub", 27);
    \u0275\u0275listener("itemClick", function ContextMenuSub_Conditional_0_ng_template_2_li_1_p_contextmenu_sub_5_Template_p_contextmenu_sub_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.itemClick.emit($event));
    })("itemMouseEnter", function ContextMenuSub_Conditional_0_ng_template_2_li_1_p_contextmenu_sub_5_Template_p_contextmenu_sub_itemMouseEnter_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", processedItem_r3.items)("itemTemplate", ctx_r1.itemTemplate)("menuId", ctx_r1.menuId)("visible", ctx_r1.isItemActive(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3))("activeItemPath", ctx_r1.activeItemPath)("focusedItemId", ctx_r1.focusedItemId)("level", ctx_r1.level + 1)("pt", ctx_r1.pt())("motionOptions", ctx_r1.motionOptions)("unstyled", ctx_r1.unstyled());
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9, 1)(2, "div", 10);
    \u0275\u0275listener("click", function ContextMenuSub_Conditional_0_ng_template_2_li_1_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const processedItem_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemClick($event, processedItem_r3));
    })("mouseenter", function ContextMenuSub_Conditional_0_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const processedItem_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter({
        $event,
        processedItem: processedItem_r3
      }));
    });
    \u0275\u0275template(3, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, ContextMenuSub_Conditional_0_ng_template_2_li_1_ng_container_4_Template, 2, 4, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ContextMenuSub_Conditional_0_ng_template_2_li_1_p_contextmenu_sub_5_Template, 1, 10, "p-contextmenu-sub", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const processedItem_r3 = ctx_r4.$implicit;
    const index_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.getItemProp(processedItem_r3, "style"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(24, _c1, ctx_r1, processedItem_r3)), ctx_r1.getItemProp(processedItem_r3, "styleClass")));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "item"))("tooltipOptions", ctx_r1.getItemProp(processedItem_r3, "tooltipOptions"))("pTooltipUnstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("id", ctx_r1.getItemId(processedItem_r3))("data-p-highlight", ctx_r1.isItemActive(processedItem_r3))("data-p-focused", ctx_r1.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r1.isItemDisabled(processedItem_r3))("aria-label", ctx_r1.getItemLabel(processedItem_r3))("aria-disabled", ctx_r1.isItemDisabled(processedItem_r3) || void 0)("aria-haspopup", ctx_r1.isItemGroup(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "to") ? "menu" : void 0)("aria-expanded", ctx_r1.isItemGroup(processedItem_r3) ? ctx_r1.isItemActive(processedItem_r3) : void 0)("aria-level", ctx_r1.level + 1)("aria-setsize", ctx_r1.getAriaSetSize())("aria-posinset", ctx_r1.getAriaPosInset(index_r6));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("itemContent"));
    \u0275\u0275property("pBind", ctx_r1.getPTOptions(processedItem_r3, index_r6, "itemContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContextMenuSub_Conditional_0_ng_template_2_li_0_Template, 1, 6, "li", 6)(1, ContextMenuSub_Conditional_0_ng_template_2_li_1_Template, 6, 27, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.getItemProp(processedItem_r3, "separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isItemVisible(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "separator"));
  }
}
function ContextMenuSub_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 4, 0);
    \u0275\u0275listener("keydown", function ContextMenuSub_Conditional_0_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuKeydown.emit($event));
    })("focus", function ContextMenuSub_Conditional_0_Template_ul_focus_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuFocus.emit($event));
    })("blur", function ContextMenuSub_Conditional_0_Template_ul_blur_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuBlur.emit($event));
    })("pMotionOnBeforeEnter", function ContextMenuSub_Conditional_0_Template_ul_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterLeave", function ContextMenuSub_Conditional_0_Template_ul_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAfterLeave());
    });
    \u0275\u0275template(2, ContextMenuSub_Conditional_0_ng_template_2_Template, 2, 2, "ng-template", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.root ? ctx_r1.cx("rootList") : ctx_r1.cx("submenu"));
    \u0275\u0275property("pBind", ctx_r1._ptm(ctx_r1.root ? "rootList" : "submenu"))("tabindex", ctx_r1.tabindex)("pMotion", ctx_r1.root ? true : ctx_r1.visible)("pMotionAppear", true)("pMotionName", "p-anchored-overlay")("pMotionOptions", ctx_r1.motionOptions);
    \u0275\u0275attribute("id", ctx_r1.menuId + "_list")("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy)("aria-activedescendant", ctx_r1.focusedItemId)("aria-orientation", "vertical");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.items);
  }
}
var _c5 = ["item"];
var _c6 = ["submenuicon"];
var _c7 = ["rootmenu"];
function ContextMenu_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275listener("pMotionOnBeforeEnter", function ContextMenu_Conditional_0_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterEnter", function ContextMenu_Conditional_0_Template_div_pMotionOnAfterEnter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAfterEnter());
    })("pMotionOnAfterLeave", function ContextMenu_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAfterLeave());
    });
    \u0275\u0275elementStart(2, "p-contextmenu-sub", 4, 1);
    \u0275\u0275listener("itemClick", function ContextMenu_Conditional_0_Template_p_contextmenu_sub_itemClick_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("menuFocus", function ContextMenu_Conditional_0_Template_p_contextmenu_sub_menuFocus_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMenuFocus($event));
    })("menuBlur", function ContextMenu_Conditional_0_Template_p_contextmenu_sub_menuBlur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMenuBlur($event));
    })("menuKeydown", function ContextMenu_Conditional_0_Template_p_contextmenu_sub_menuKeydown_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    })("itemMouseEnter", function ContextMenu_Conditional_0_Template_p_contextmenu_sub_itemMouseEnter_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemMouseEnter($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("pBind", ctx_r1.ptm("root"))("pMotion", ctx_r1.visible())("pMotionName", "p-anchored-overlay")("pMotionAppear", true)("pMotionOptions", ctx_r1.computedMotionOptions());
    \u0275\u0275attribute("id", ctx_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("root", true)("items", ctx_r1.processedItems)("itemTemplate", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("menuId", ctx_r1.id)("ariaLabel", ctx_r1.ariaLabel)("ariaLabelledBy", ctx_r1.ariaLabelledBy)("baseZIndex", ctx_r1.baseZIndex)("autoZIndex", ctx_r1.autoZIndex)("visible", ctx_r1.submenuVisible())("focusedItemId", ctx_r1.focused ? ctx_r1.focusedItemId : void 0)("activeItemPath", ctx_r1.activeItemPath())("pt", ctx_r1.pt())("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions());
  }
}
var inlineStyles = {
  root: {
    position: "absolute"
  }
};
var classes = {
  root: () => ["p-contextmenu p-component"],
  rootList: "p-contextmenu-root-list",
  item: ({
    instance,
    processedItem
  }) => ["p-contextmenu-item", {
    "p-contextmenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem),
    "p-contextmenu-mobile": instance.queryMatches
  }],
  itemContent: "p-contextmenu-item-content",
  itemLink: "p-contextmenu-item-link",
  itemIcon: "p-contextmenu-item-icon",
  itemLabel: "p-contextmenu-item-label",
  submenuIcon: "p-contextmenu-submenu-icon",
  submenu: "p-contextmenu-submenu",
  separator: "p-contextmenu-separator"
};
var ContextMenuStyle = class _ContextMenuStyle extends BaseStyle {
  name = "contextmenu";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ContextMenuStyle_BaseFactory;
    return function ContextMenuStyle_Factory(__ngFactoryType__) {
      return (\u0275ContextMenuStyle_BaseFactory || (\u0275ContextMenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ContextMenuStyle)))(__ngFactoryType__ || _ContextMenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuStyle,
    factory: _ContextMenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuClasses;
(function(ContextMenuClasses2) {
  ContextMenuClasses2["root"] = "p-contextmenu";
  ContextMenuClasses2["rootList"] = "p-contextmenu-root-list";
  ContextMenuClasses2["item"] = "p-contextmenu-item";
  ContextMenuClasses2["itemContent"] = "p-contextmenu-item-content";
  ContextMenuClasses2["itemLink"] = "p-contextmenu-item-link";
  ContextMenuClasses2["itemIcon"] = "p-contextmenu-item-icon";
  ContextMenuClasses2["itemLabel"] = "p-contextmenu-item-label";
  ContextMenuClasses2["submenuIcon"] = "p-contextmenu-submenu-icon";
  ContextMenuClasses2["submenu"] = "p-contextmenu-submenu";
  ContextMenuClasses2["separator"] = "p-contextmenu-separator";
})(ContextMenuClasses || (ContextMenuClasses = {}));
var CONTEXTMENU_INSTANCE = new InjectionToken("CONTEXTMENU_INSTANCE");
var CONTEXTMENUSUB_INSTANCE = new InjectionToken("CONTEXTMENUSUB_INSTANCE");
var ContextMenuSub = class _ContextMenuSub extends BaseComponent {
  el;
  renderer;
  contextMenu;
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible || this.root) {
      this.render.set(true);
    }
  }
  items;
  itemTemplate;
  root = false;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath;
  motionOptions;
  tabindex = 0;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  render = signal(false, ...ngDevMode ? [{
    debugName: "render"
  }] : []);
  hostName = "ContextMenu";
  _componentStyle = inject(ContextMenuStyle);
  $pcContextMenu = inject(CONTEXTMENU_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $pcContextMenuSub = inject(CONTEXTMENUSUB_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _visible = false;
  constructor(el, renderer, contextMenu) {
    super();
    this.el = el;
    this.renderer = renderer;
    this.contextMenu = contextMenu;
    this.contextMenu.handleSubmenuAfterLeave = () => {
      if (this.root) {
        this.onAfterLeave();
      }
    };
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? m(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    }
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return s(processedItem.items);
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  onBeforeEnter(event) {
    this.position(event.element);
  }
  onAfterLeave() {
    this.render.set(false);
  }
  // TODO: will be removed later. Helper method to get PT from parent ContextMenu if available, otherwise use own PT
  _ptm(section, options) {
    return this.$pcContextMenu ? this.$pcContextMenu.ptm(section, options) : this.ptm(section, options);
  }
  getPTOptions(processedItem, index, key) {
    return this._ptm(key, {
      context: {
        item: processedItem.item,
        index,
        active: this.isItemActive(processedItem),
        focused: this.isItemFocused(processedItem),
        disabled: this.isItemDisabled(processedItem)
      }
    });
  }
  position(sublist) {
    const parentItem = sublist.parentElement.parentElement;
    const containerOffset = K(sublist.parentElement.parentElement);
    const viewport = h();
    const sublistWidth = sublist.offsetParent ? sublist.offsetWidth : J(sublist);
    const itemOuterWidth = v(parentItem.children[0]);
    sublist.style.top = "0px";
    if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - O()) {
      sublist.style.left = -1 * sublistWidth + "px";
    } else {
      sublist.style.left = itemOuterWidth + "px";
    }
  }
  static \u0275fac = function ContextMenuSub_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuSub)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(forwardRef(() => ContextMenu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ContextMenuSub,
    selectors: [["p-contextMenuSub"], ["p-contextmenu-sub"]],
    viewQuery: function ContextMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.sublistViewChild = _t2.first);
      }
    },
    inputs: {
      visible: "visible",
      items: "items",
      itemTemplate: "itemTemplate",
      root: [2, "root", "root", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      popup: [2, "popup", "popup", booleanAttribute],
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      activeItemPath: "activeItemPath",
      motionOptions: "motionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [\u0275\u0275ProvidersFeature([ContextMenuStyle, {
      provide: CONTEXTMENUSUB_INSTANCE,
      useExisting: _ContextMenuSub
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ContextMenuSub
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["sublist", ""], ["listItem", ""], ["htmlLabel", ""], ["role", "menu", 3, "class", "pBind", "tabindex", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], ["role", "menu", 3, "keydown", "focus", "blur", "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "pBind", "tabindex", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "style", "class", "pBind", "tooltipOptions", "pTooltipUnstyled", 4, "ngIf"], ["role", "separator", 3, "pBind"], ["role", "menuitem", "pTooltip", "", 3, "pBind", "tooltipOptions", "pTooltipUnstyled"], [3, "click", "mouseenter", "pBind"], [4, "ngIf"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "pt", "motionOptions", "unstyled", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "class", "ngStyle", "pBind", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "class", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", 4, "ngIf"], ["pRipple", "", 3, "target", "ngStyle", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], [3, "class", "ngStyle", "pBind", 4, "ngIf", "ngIfElse"], [3, "class", "value", "unstyled", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "ngStyle", "innerHTML", "pBind"], [3, "value", "unstyled"], ["data-p-icon", "angle-right", 3, "class", "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "angle-right", 3, "pBind"], [3, "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngStyle", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], [3, "itemClick", "itemMouseEnter", "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "pt", "motionOptions", "unstyled"]],
    template: function ContextMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ContextMenuSub_Conditional_0_Template, 3, 14, "ul", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render() ? 0 : -1);
      }
    },
    dependencies: [_ContextMenuSub, CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, Ripple, TooltipModule, Tooltip, Bind, AngleRightIcon, BadgeModule, Badge, SharedModule, BindModule, MotionModule, MotionDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuSub, [{
    type: Component,
    args: [{
      selector: "p-contextMenuSub, p-contextmenu-sub",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleRightIcon, BadgeModule, SharedModule, BindModule, MotionModule],
      template: `
        @if (render()) {
            <ul
                #sublist
                role="menu"
                [class]="root ? cx('rootList') : cx('submenu')"
                [pBind]="_ptm(root ? 'rootList' : 'submenu')"
                [attr.id]="menuId + '_list'"
                [tabindex]="tabindex"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                [attr.aria-activedescendant]="focusedItemId"
                [attr.aria-orientation]="'vertical'"
                (keydown)="menuKeydown.emit($event)"
                (focus)="menuFocus.emit($event)"
                (blur)="menuBlur.emit($event)"
                [pMotion]="root ? true : visible"
                [pMotionAppear]="true"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionOptions]="motionOptions"
                (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                (pMotionOnAfterLeave)="onAfterLeave()"
            >
                <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                    <li
                        *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                        [attr.id]="getItemId(processedItem)"
                        [style]="getItemProp(processedItem, 'style')"
                        [class]="cn(cx('separator'), getItemProp(processedItem, 'styleClass'))"
                        role="separator"
                        [pBind]="_ptm('separator')"
                    ></li>
                    <li
                        #listItem
                        *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                        role="menuitem"
                        [attr.id]="getItemId(processedItem)"
                        [attr.data-p-highlight]="isItemActive(processedItem)"
                        [attr.data-p-focused]="isItemFocused(processedItem)"
                        [attr.data-p-disabled]="isItemDisabled(processedItem)"
                        [attr.aria-label]="getItemLabel(processedItem)"
                        [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                        [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                        [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                        [attr.aria-level]="level + 1"
                        [attr.aria-setsize]="getAriaSetSize()"
                        [attr.aria-posinset]="getAriaPosInset(index)"
                        [style]="getItemProp(processedItem, 'style')"
                        [class]="cn(cx('item', { instance: this, processedItem }), getItemProp(processedItem, 'styleClass'))"
                        [pBind]="getPTOptions(processedItem, index, 'item')"
                        pTooltip
                        [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                        [pTooltipUnstyled]="unstyled()"
                    >
                        <div [class]="cx('itemContent')" [pBind]="getPTOptions(processedItem, index, 'itemContent')" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">
                            <ng-container *ngIf="!itemTemplate">
                                <a
                                    *ngIf="!getItemProp(processedItem, 'routerLink')"
                                    [attr.href]="getItemProp(processedItem, 'url')"
                                    [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                    [attr.title]="getItemProp(processedItem, 'title')"
                                    [target]="getItemProp(processedItem, 'target')"
                                    [class]="cn(cx('itemLink'), getItemProp(processedItem, 'linkClass'))"
                                    [ngStyle]="getItemProp(processedItem, 'linkStyle')"
                                    [attr.tabindex]="-1"
                                    [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                                    pRipple
                                >
                                    <span
                                        *ngIf="getItemProp(processedItem, 'icon')"
                                        [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'), getItemProp(processedItem, 'iconClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                        [attr.aria-hidden]="true"
                                        [attr.tabindex]="-1"
                                    >
                                    </span>
                                    <span
                                        *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                        [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                    >
                                        {{ getItemLabel(processedItem) }}
                                    </span>
                                    <ng-template #htmlLabel>
                                        <span
                                            [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                            [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                            [innerHTML]="getItemLabel(processedItem)"
                                            [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                        ></span>
                                    </ng-template>
                                    <p-badge *ngIf="getItemProp(processedItem, 'badge')" [class]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" [unstyled]="unstyled()" />
                                    <ng-container *ngIf="isItemGroup(processedItem)">
                                        <svg
                                            data-p-icon="angle-right"
                                            *ngIf="!contextMenu.submenuIconTemplate && !contextMenu._submenuIconTemplate"
                                            [class]="cx('submenuIcon')"
                                            [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                            [attr.aria-hidden]="true"
                                        />
                                        <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate || contextMenu._submenuIconTemplate; context: { class: 'p-contextmenu-submenu-icon' }" [attr.aria-hidden]="true"></ng-template>
                                    </ng-container>
                                </a>
                                <a
                                    *ngIf="getItemProp(processedItem, 'routerLink')"
                                    [routerLink]="getItemProp(processedItem, 'routerLink')"
                                    [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                    [attr.title]="getItemProp(processedItem, 'title')"
                                    [attr.tabindex]="-1"
                                    [queryParams]="getItemProp(processedItem, 'queryParams')"
                                    [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                    [target]="getItemProp(processedItem, 'target')"
                                    [class]="cn(cx('itemLink'), getItemProp(processedItem, 'linkClass'))"
                                    [ngStyle]="getItemProp(processedItem, 'linkStyle')"
                                    [fragment]="getItemProp(processedItem, 'fragment')"
                                    [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                    [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                    [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                    [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                    [state]="getItemProp(processedItem, 'state')"
                                    [pBind]="getPTOptions(processedItem, index, 'itemLink')"
                                    pRipple
                                >
                                    <span
                                        *ngIf="getItemProp(processedItem, 'icon')"
                                        [class]="cn(cx('itemIcon'), getItemProp(processedItem, 'icon'), getItemProp(processedItem, 'iconClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemIcon')"
                                        [attr.aria-hidden]="true"
                                        [attr.tabindex]="-1"
                                    >
                                    </span>
                                    <span
                                        *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel"
                                        [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                        [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                        [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                    >
                                        {{ getItemLabel(processedItem) }}
                                    </span>
                                    <ng-template #htmlLabel>
                                        <span
                                            [class]="cn(cx('itemLabel'), getItemProp(processedItem, 'labelClass'))"
                                            [ngStyle]="getItemProp(processedItem, 'labelStyle')"
                                            [innerHTML]="getItemLabel(processedItem)"
                                            [pBind]="getPTOptions(processedItem, index, 'itemLabel')"
                                        ></span>
                                    </ng-template>
                                    <p-badge *ngIf="getItemProp(processedItem, 'badge')" [class]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" [unstyled]="unstyled()" />
                                    <ng-container *ngIf="isItemGroup(processedItem)">
                                        <svg
                                            data-p-icon="angle-right"
                                            *ngIf="!contextMenu.submenuIconTemplate && !contextMenu._submenuIconTemplate"
                                            [class]="cx('submenuIcon')"
                                            [pBind]="getPTOptions(processedItem, index, 'submenuIcon')"
                                            [attr.aria-hidden]="true"
                                        />
                                        <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate || contextMenu._submenuIconTemplate; context: { class: 'p-contextmenu-submenu-icon' }" [attr.aria-hidden]="true"></ng-template>
                                    </ng-container>
                                </a>
                            </ng-container>
                            <ng-container *ngIf="itemTemplate">
                                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                            </ng-container>
                        </div>

                        <p-contextmenu-sub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                            [items]="processedItem.items"
                            [itemTemplate]="itemTemplate"
                            [menuId]="menuId"
                            [visible]="isItemActive(processedItem) && isItemGroup(processedItem)"
                            [activeItemPath]="activeItemPath"
                            [focusedItemId]="focusedItemId"
                            [level]="level + 1"
                            (itemClick)="itemClick.emit($event)"
                            (itemMouseEnter)="onItemMouseEnter($event)"
                            [pt]="pt()"
                            [motionOptions]="motionOptions"
                            [unstyled]="unstyled()"
                        />
                    </li>
                </ng-template>
            </ul>
        }
    `,
      encapsulation: ViewEncapsulation.None,
      providers: [ContextMenuStyle, {
        provide: CONTEXTMENUSUB_INSTANCE,
        useExisting: ContextMenuSub
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ContextMenuSub
      }]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ContextMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => ContextMenu)]
    }]
  }], {
    visible: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
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
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input
    }],
    motionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist"]
    }]
  });
})();
var ContextMenu = class _ContextMenu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Event for which the menu must be displayed.
   * @group Props
   */
  triggerEvent = "contextmenu";
  /**
   * Local template variable name of the element to attach the context menu.
   * @group Props
   */
  target;
  /**
   * Attaches the menu to document instead of a particular item.
   * @group Props
   */
  global;
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
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
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
   * Press delay in touch devices as miliseconds.
   * @group Props
   */
  pressDelay = 500;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
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
  rootmenu;
  container;
  handleSubmenuAfterLeave = null;
  outsideClickListener;
  resizeListener;
  triggerEventListener;
  documentClickListener;
  documentTriggerListener;
  touchEndListener;
  pageX;
  pageY;
  visible = signal(false, ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  render = signal(false, ...ngDevMode ? [{
    debugName: "render"
  }] : []);
  focused = false;
  activeItemPath = signal([], ...ngDevMode ? [{
    debugName: "activeItemPath"
  }] : []);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  }, ...ngDevMode ? [{
    debugName: "focusedItemInfo"
  }] : []);
  submenuVisible = signal(false, ...ngDevMode ? [{
    debugName: "submenuVisible"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  pressTimer;
  hideCallback;
  matchMediaListener;
  query;
  queryMatches = signal(false, ...ngDevMode ? [{
    debugName: "queryMatches"
  }] : []);
  _componentStyle = inject(ContextMenuStyle);
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p2) => p2.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${s(focusedItem.parentKey) ? "_" + focusedItem.parentKey : ""}_${focusedItem.index}` : null;
  }
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    effect(() => {
      const path = this.activeItemPath();
      if (s(path)) {
        this.bindGlobalListeners();
      } else if (!this.visible()) {
        this.unbindGlobalListeners();
      }
    });
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.bindMatchMediaListener();
    this.bindTriggerEventListener();
  }
  isMobile() {
    return Ut() || $t();
  }
  bindTriggerEventListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.triggerEventListener) {
        if (!this.isMobile()) {
          if (this.global) {
            this.triggerEventListener = this.renderer.listen(this.document, this.triggerEvent, (event) => {
              this.show(event);
            });
          } else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, (event) => {
              this.show(event);
            });
          }
        } else {
          if (this.global) {
            this.triggerEventListener = this.renderer.listen(this.document, "touchstart", this.onTouchStart.bind(this));
            this.touchEndListener = this.renderer.listen(this.document, "touchend", this.onTouchEnd.bind(this));
          } else if (this.target) {
            this.triggerEventListener = this.renderer.listen(this.target, "touchstart", this.onTouchStart.bind(this));
            this.touchEndListener = this.renderer.listen(this.target, "touchend", this.onTouchEnd.bind(this));
          }
        }
      }
    }
  }
  bindGlobalListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
        this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
          if (this.container?.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2) {
            this.hide();
          }
        });
      }
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom submenu icon template.
   * @group Templates
   */
  submenuIconTemplate;
  templates;
  _submenuIconTemplate;
  _itemTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this._submenuIconTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getPTOptions(key, item, index, id) {
    return this.ptm(key, {
      context: {
        item,
        index,
        focused: this.isItemFocused({
          index,
          item
        }),
        disabled: this.isItemDisabled(item)
      }
    });
  }
  isItemFocused(itemInfo) {
    return this.focusedItemInfo().index === itemInfo.index;
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  bindMatchMediaListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.matchMediaListener) {
        const query = window.matchMedia(`(max-width: ${this.breakpoint})`);
        this.query = query;
        this.queryMatches.set(query.matches);
        this.matchMediaListener = () => {
          this.queryMatches.set(query.matches);
          this.cd.markForCheck();
        };
        query.addEventListener("change", this.matchMediaListener);
      }
    }
  }
  unbindMatchMediaListener() {
    if (this.matchMediaListener) {
      this.query.removeEventListener("change", this.matchMediaListener);
      this.matchMediaListener = null;
    }
  }
  getItemProp(item, name) {
    return item ? m(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p2) => p2.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && s(processedItem.items);
  }
  onItemClick(event) {
    const {
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p2) => key !== p2.key && key.startsWith(p2.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      bt(this.rootmenu?.sublistViewChild?.nativeElement);
    } else {
      grouped ? this.onItemChange(event) : this.hide();
    }
  }
  onItemMouseEnter(event) {
    this.onItemChange(event, "hover");
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && J2(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = this.activeItemPath().find((p2) => p2.key === processedItem.parentKey);
    const root = l(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p2) => p2.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide();
    const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
    const focusedItemInfo = this.focusedItemInfo();
    this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
      index: this.findFirstFocusedItemIndex(),
      item: processedItem.item
    }));
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = z(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (z(element, '[data-pc-section="itemlink"]') || z(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      if (!grouped) {
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: this.findFirstFocusedItemIndex()
        }));
      }
    }
    event.preventDefault();
  }
  onItemChange(event, type) {
    const {
      processedItem,
      isFocus
    } = event;
    if (l(processedItem)) return;
    const {
      index,
      key,
      level,
      parentKey,
      items
    } = processedItem;
    const grouped = s(items);
    const activeItemPath = this.activeItemPath().filter((p2) => p2.parentKey !== parentKey && p2.parentKey !== key);
    if (grouped) {
      activeItemPath.push(processedItem);
      this.submenuVisible.set(true);
    }
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item: processedItem.item
    });
    isFocus && bt(this.rootmenu?.sublistViewChild?.nativeElement);
    if (type === "hover" && this.queryMatches()) {
      return;
    }
    this.activeItemPath.set(activeItemPath);
  }
  onMenuFocus(event) {
    this.focused = true;
    const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    };
    this.focusedItemInfo.set(focusedItemInfo);
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
  }
  onBeforeEnter(event) {
    this.container = event.element;
    this.appendOverlay();
    this.moveOnTop();
    this.position();
    this.$attrSelector && this.container?.setAttribute(this.$attrSelector, "");
  }
  onAfterEnter() {
    this.bindGlobalListeners();
    bt(this.rootmenu?.sublistViewChild?.nativeElement);
  }
  onAfterLeave() {
    this.restoreOverlayAppend();
    this.onOverlayHide();
    this.handleSubmenuAfterLeave?.();
    this.render.set(false);
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.container);
      } else {
        ut(this.$appendTo(), this.container);
      }
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.el.nativeElement.appendChild(this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex && this.container) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  onOverlayHide() {
    this.unbindGlobalListeners();
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
  }
  onTouchStart(event) {
    this.pressTimer = setTimeout(() => {
      this.show(event);
    }, this.pressDelay);
  }
  onTouchEnd() {
    clearTimeout(this.pressTimer);
  }
  hide() {
    this.visible.set(false);
    this.onHide.emit();
    this.hideCallback?.();
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
  }
  toggle(event) {
    this.visible() ? this.hide() : this.show(event);
  }
  show(event) {
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    bt(this.rootmenu?.sublistViewChild?.nativeElement);
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    this.onShow.emit();
    this.visible() ? this.position() : this.visible.set(true);
    this.render.set(true);
    event.stopPropagation();
    event.preventDefault();
  }
  position() {
    if (!this.document.scrollingElement || !this.container) return;
    let left = this.pageX + 1;
    let top = this.pageY + 1;
    let width = this.container.offsetParent ? this.container.offsetWidth : J(this.container);
    let height = this.container.offsetParent ? this.container.offsetHeight : G(this.container);
    let viewport = h();
    if (left + width - this.document.scrollingElement.scrollLeft > viewport.width) {
      left -= width;
    }
    if (top + height - this.document.scrollingElement.scrollTop > viewport.height) {
      top -= height;
    }
    if (left < this.document.scrollingElement.scrollLeft) {
      left = this.document.scrollingElement.scrollLeft;
    }
    if (top < this.document.scrollingElement.scrollTop) {
      top = this.document.scrollingElement.scrollTop;
    }
    this.container.style.left = left + "px";
    this.container.style.top = top + "px";
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  findVisibleItem(index) {
    return s(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return M(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? M(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  changeFocusedItemIndex(event, index) {
    const processedItem = this.findVisibleItem(index);
    const focusedItemInfo = this.focusedItemInfo();
    if (focusedItemInfo.index !== index) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        index,
        item: processedItem.item
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = z(this.rootmenu?.el?.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  isOutsideClicked(event) {
    return !(this.container?.isSameNode(event.target) || this.container?.contains(event.target));
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  unbindGlobalListeners() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
    if (this.documentTriggerListener) {
      this.documentTriggerListener();
      this.documentTriggerListener = null;
    }
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
    if (this.touchEndListener) {
      this.touchEndListener();
      this.touchEndListener = null;
    }
  }
  unbindTriggerEventListener() {
    if (this.triggerEventListener) {
      this.triggerEventListener();
      this.triggerEventListener = null;
    }
  }
  onDestroy() {
    this.unbindGlobalListeners();
    this.unbindTriggerEventListener();
    this.unbindMatchMediaListener();
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static \u0275fac = function ContextMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ContextMenu,
    selectors: [["p-contextMenu"], ["p-contextmenu"], ["p-context-menu"]],
    contentQueries: function ContextMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.submenuIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function ContextMenu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.rootmenu = _t2.first);
      }
    },
    inputs: {
      model: "model",
      triggerEvent: "triggerEvent",
      target: "target",
      global: [2, "global", "global", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      id: "id",
      breakpoint: "breakpoint",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      pressDelay: [2, "pressDelay", "pressDelay", numberAttribute],
      appendTo: [1, "appendTo"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ContextMenuStyle, {
      provide: CONTEXTMENU_INSTANCE,
      useExisting: _ContextMenu
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["rootmenu", ""], [3, "class", "style", "ngStyle", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionOptions"], [3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnAfterLeave", "ngStyle", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionOptions"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "root", "items", "itemTemplate", "menuId", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "visible", "focusedItemId", "activeItemPath", "pt", "unstyled", "motionOptions"]],
    template: function ContextMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ContextMenu_Conditional_0_Template, 4, 25, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgStyle, ContextMenuSub, RouterModule, TooltipModule, Bind, BadgeModule, SharedModule, BindModule, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenu, [{
    type: Component,
    args: [{
      selector: "p-contextMenu, p-contextmenu, p-context-menu",
      standalone: true,
      imports: [CommonModule, ContextMenuSub, RouterModule, TooltipModule, BadgeModule, SharedModule, BindModule, MotionModule],
      template: `
        @if (render()) {
            <div
                #container
                [attr.id]="id"
                [class]="cn(cx('root'), styleClass)"
                [style]="sx('root')"
                [ngStyle]="style"
                [pBind]="ptm('root')"
                [pMotion]="visible()"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionAppear]="true"
                [pMotionOptions]="computedMotionOptions()"
                (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                (pMotionOnAfterEnter)="onAfterEnter()"
                (pMotionOnAfterLeave)="onAfterLeave()"
            >
                <p-contextmenu-sub
                    #rootmenu
                    [root]="true"
                    [items]="processedItems"
                    [itemTemplate]="itemTemplate || _itemTemplate"
                    [menuId]="id"
                    [ariaLabel]="ariaLabel"
                    [ariaLabelledBy]="ariaLabelledBy"
                    [baseZIndex]="baseZIndex"
                    [autoZIndex]="autoZIndex"
                    [visible]="submenuVisible()"
                    [focusedItemId]="focused ? focusedItemId : undefined"
                    [activeItemPath]="activeItemPath()"
                    (itemClick)="onItemClick($event)"
                    (menuFocus)="onMenuFocus($event)"
                    (menuBlur)="onMenuBlur($event)"
                    (menuKeydown)="onKeyDown($event)"
                    (itemMouseEnter)="onItemMouseEnter($event)"
                    [pt]="pt()"
                    [unstyled]="unstyled()"
                    [motionOptions]="computedMotionOptions()"
                />
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ContextMenuStyle, {
        provide: CONTEXTMENU_INSTANCE,
        useExisting: ContextMenu
      }]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    triggerEvent: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    global: [{
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
    id: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    pressDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
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
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuIconTemplate: [{
      type: ContentChild,
      args: ["submenuicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ContextMenuModule = class _ContextMenuModule {
  static \u0275fac = function ContextMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ContextMenuModule,
    imports: [ContextMenu, SharedModule],
    exports: [ContextMenu, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ContextMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuModule, [{
    type: NgModule,
    args: [{
      imports: [ContextMenu, SharedModule],
      exports: [ContextMenu, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/directives/directive-switch.directive.ts
var DirectiveSwitchDirective = class _DirectiveSwitchDirective {
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  appDirectiveSwitch = input([], __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "appDirectiveSwitch" } : {}), { transform: (config) => {
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
  stepId = input.required(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepId" } : {}), { alias: "appStepContent" }));
  static \u0275fac = function StepContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _StepContentDirective, selectors: [["", "appStepContent", ""]], inputs: { stepId: [1, "appStepContent", "stepId"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepContentDirective, [{
    type: Directive,
    args: [{
      selector: "[appStepContent]",
      standalone: true
    }]
  }], null, { stepId: [{ type: Input, args: [{ isSignal: true, alias: "appStepContent", required: true }] }] });
})();

// src/app/shared/components/grid/filters/toggle-filter/toggle-filter.component.ts
var ToggleFilterComponent = class _ToggleFilterComponent {
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : []);
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
  defaultSelected = input([], ...ngDevMode ? [{ debugName: "defaultSelected" }] : []);
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : []);
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : []);
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
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : []);
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
    args: [{ selector: "app-text-filter", standalone: true, imports: [InputTextModule, FormsModule, CommonModule], template: '<div class="flex w-full">\n  <input\n    type="text"\n    pInputText\n    [(ngModel)]="filterValue"\n    (input)="onInputChange($event)"\n    aria-label="Filter text"\n    class="flex-1 w-full"\n  />\n</div>\n' }]
  }], null, { initialValue: [{ type: Input, args: [{ isSignal: true, alias: "initialValue", required: false }] }], filterChange: [{ type: Output, args: ["filterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextFilterComponent, { className: "TextFilterComponent", filePath: "src/app/shared/components/grid/filters/text-filter/text-filter.component.ts", lineNumber: 24 });
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
  field = input.required(...ngDevMode ? [{ debugName: "field" }] : []);
  filterType = input.required(...ngDevMode ? [{ debugName: "filterType" }] : []);
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : []);
  defaultSelected = input([], ...ngDevMode ? [{ debugName: "defaultSelected" }] : []);
  initialValue = input(...ngDevMode ? [void 0, { debugName: "initialValue" }] : []);
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
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.multiselectFilter = _t2.first);
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
var _c02 = ["dt"];
var GridComponent_Conditional_8_ng_template_0_Defer_3_DepsFn = () => [NgTemplateOutlet];
var _c12 = (a0) => ({ directive: "pReorderableColumn", condition: a0 });
var _c22 = (a0) => [a0];
var _c32 = () => [];
var _c42 = (a0, a1) => ({ directive: "pContextMenuRow", condition: a0, value: a1 });
var _c52 = (a0, a1) => ({ "pi-chevron-down": a0, "pi-chevron-right": a1 });
var _c62 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.field;
function GridComponent_Conditional_4_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 8);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "p-sortIcon", 10);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pSortableColumn", col_r2.field)("appDirectiveSwitch", \u0275\u0275pureFunction1(7, _c22, \u0275\u0275pureFunction1(5, _c12, ctx_r2.reOrderableColumns())));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r2.header, " ");
    \u0275\u0275advance();
    \u0275\u0275control(col_r2.field);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GridComponent_Conditional_4_ng_template_0_Conditional_2_For_1_Template, 3, 9, "th", 9, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("appDirectiveSwitch", \u0275\u0275pureFunction1(4, _c22, \u0275\u0275pureFunction1(2, _c12, ctx_r2.reOrderableColumns())));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r4.header, " ");
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GridComponent_Conditional_4_ng_template_0_Conditional_3_For_1_Template, 2, 6, "th", 11, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-filter-wrapper", 15);
    \u0275\u0275listener("filterChange", function GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Conditional_1_ng_template_1_Template_app_filter_wrapper_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const col_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.handleFilterChange(col_r6.field, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const col_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275control(col_r6.field);
    \u0275\u0275property("filterType", col_r6.filterType ?? "text")("options", (col_r6.filterConfig == null ? null : col_r6.filterConfig.options) ?? \u0275\u0275pureFunction0(6, _c32))("defaultSelected", (col_r6.filterConfig == null ? null : col_r6.filterConfig.defaultSelected) ?? \u0275\u0275pureFunction0(7, _c32))("initialValue", ctx_r2.initialFilters()[col_r6.field]);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-columnFilter", 13);
    \u0275\u0275template(1, GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Conditional_1_ng_template_1_Template, 1, 8, "ng-template", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const col_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("type", col_r6.filterType ?? "text");
    \u0275\u0275control(col_r6.field);
    \u0275\u0275property("showMenu", false);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275conditionalCreate(1, GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Conditional_1_Template, 2, 4, "p-columnFilter", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r6.filter ? 1 : -1);
  }
}
function GridComponent_Conditional_4_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, GridComponent_Conditional_4_ng_template_0_Conditional_4_For_2_Template, 2, 1, "th", 12, _forTrack0);
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
    \u0275\u0275conditionalCreate(2, GridComponent_Conditional_4_ng_template_0_Conditional_2_Template, 2, 0);
    \u0275\u0275conditionalCreate(3, GridComponent_Conditional_4_ng_template_0_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, GridComponent_Conditional_4_ng_template_0_Conditional_4_Template, 3, 0, "tr");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rowExpandable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sortable() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.sortable() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filterable() ? 4 : -1);
  }
}
function GridComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_Conditional_4_ng_template_0_Template, 5, 4, "ng-template", 5);
  }
}
function GridComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "a", 17);
    \u0275\u0275listener("click", function GridComponent_ng_template_5_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const rowData_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRow(rowData_r8));
    });
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c52, ctx_r2.isRowExpanded(rowData_r8), !ctx_r2.isRowExpanded(rowData_r8)));
  }
}
function GridComponent_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275elementEnd();
  }
}
function GridComponent_ng_template_5_For_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GridComponent_ng_template_5_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_ng_template_5_For_4_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext().$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngTemplateOutlet", col_r9.cellTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, rowData_r8));
  }
}
function GridComponent_ng_template_5_For_4_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", col_r9.valueGetter(rowData_r8), " ");
  }
}
function GridComponent_ng_template_5_For_4_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext(2).$implicit;
    const rowData_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", rowData_r8[col_r9.field], " ");
  }
}
function GridComponent_ng_template_5_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_For_4_Conditional_2_Conditional_1_Template, 1, 1)(2, GridComponent_ng_template_5_For_4_Conditional_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(col_r9.transform);
    \u0275\u0275advance();
    \u0275\u0275conditional(col_r9.valueGetter ? 1 : 2);
  }
}
function GridComponent_ng_template_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_For_4_Conditional_1_Template, 1, 4, "ng-container")(2, GridComponent_ng_template_5_For_4_Conditional_2_Template, 3, 3, "span", 20);
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
    \u0275\u0275elementStart(0, "tr", 16);
    \u0275\u0275conditionalCreate(1, GridComponent_ng_template_5_Conditional_1_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(2, GridComponent_ng_template_5_Conditional_2_Template, 2, 0, "td");
    \u0275\u0275repeaterCreate(3, GridComponent_ng_template_5_For_4_Template, 3, 1, "td", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const index_r10 = ctx.rowIndex;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("pReorderableRow", index_r10)("pSelectableRow", rowData_r8)("appDirectiveSwitch", \u0275\u0275pureFunction1(8, _c22, \u0275\u0275pureFunction2(5, _c42, !!ctx_r2.contextMenuItems(), rowData_r8)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.rowExpandable() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.reOrderableRows() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.displayedColumns());
  }
}
function GridComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.emptyMessage());
  }
}
function GridComponent_Conditional_8_ng_template_0_Defer_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GridComponent_Conditional_8_ng_template_0_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GridComponent_Conditional_8_ng_template_0_Defer_2_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const rowData_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.expandedRowTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c62, rowData_r11));
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
  columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : []);
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : []);
  sortable = input(false, ...ngDevMode ? [{ debugName: "sortable" }] : []);
  selectionMode = input(null, ...ngDevMode ? [{ debugName: "selectionMode" }] : []);
  filterable = input(false, ...ngDevMode ? [{ debugName: "filterable" }] : []);
  pagination = input(false, ...ngDevMode ? [{ debugName: "pagination" }] : []);
  resizableColumns = input(false, ...ngDevMode ? [{ debugName: "resizableColumns" }] : []);
  columnResizeMode = input("fit", ...ngDevMode ? [{ debugName: "columnResizeMode" }] : []);
  reOrderableColumns = input(false, ...ngDevMode ? [{ debugName: "reOrderableColumns" }] : []);
  reOrderableRows = input(false, ...ngDevMode ? [{ debugName: "reOrderableRows" }] : []);
  virtualScroll = input(false, ...ngDevMode ? [{ debugName: "virtualScroll" }] : []);
  contextMenuItems = input(void 0, ...ngDevMode ? [{ debugName: "contextMenuItems" }] : []);
  size = input(void 0, ...ngDevMode ? [{ debugName: "size" }] : []);
  showGridLines = input(false, ...ngDevMode ? [{ debugName: "showGridLines" }] : []);
  stripedRows = input(false, ...ngDevMode ? [{ debugName: "stripedRows" }] : []);
  rows = input(DEFAULT_PAGE_SIZE, ...ngDevMode ? [{ debugName: "rows" }] : []);
  rowsPerPageOptions = input(DEFAULT_PAGE_SIZE_OPTIONS, ...ngDevMode ? [{ debugName: "rowsPerPageOptions" }] : []);
  rowExpandMode = input("multiple", ...ngDevMode ? [{ debugName: "rowExpandMode" }] : []);
  rowExpandable = input(false, ...ngDevMode ? [{ debugName: "rowExpandable" }] : []);
  emptyMessage = input("No records found", ...ngDevMode ? [{ debugName: "emptyMessage" }] : []);
  expandedRowTemplate = input(null, ...ngDevMode ? [{ debugName: "expandedRowTemplate" }] : []);
  scrollable = input(false, ...ngDevMode ? [{ debugName: "scrollable" }] : []);
  scrollHeight = input(void 0, ...ngDevMode ? [{ debugName: "scrollHeight" }] : []);
  totalRecords = input(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  lazy = input(false, ...ngDevMode ? [{ debugName: "lazy" }] : []);
  hideHeader = input(false, ...ngDevMode ? [{ debugName: "hideHeader" }] : []);
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  tableStyleClass = input(void 0, ...ngDevMode ? [{ debugName: "tableStyleClass" }] : []);
  styleClass = input("h-full", ...ngDevMode ? [{ debugName: "styleClass" }] : []);
  initialFilters = input({}, ...ngDevMode ? [{ debugName: "initialFilters" }] : []);
  selection = input(null, ...ngDevMode ? [{ debugName: "selection" }] : []);
  visibleColumns = input([], ...ngDevMode ? [{ debugName: "visibleColumns" }] : []);
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
  }, ...ngDevMode ? [{ debugName: "displayedColumns" }] : []);
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
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(FilterWrapperComponent, 5);
    }
    if (rf & 2) {
      let _t2;
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.dt = _t2.first);
      \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.filterWrappers = _t2);
    }
  }, inputs: { columns: [1, "columns"], data: [1, "data"], sortable: [1, "sortable"], selectionMode: [1, "selectionMode"], filterable: [1, "filterable"], pagination: [1, "pagination"], resizableColumns: [1, "resizableColumns"], columnResizeMode: [1, "columnResizeMode"], reOrderableColumns: [1, "reOrderableColumns"], reOrderableRows: [1, "reOrderableRows"], virtualScroll: [1, "virtualScroll"], contextMenuItems: [1, "contextMenuItems"], size: [1, "size"], showGridLines: [1, "showGridLines"], stripedRows: [1, "stripedRows"], rows: [1, "rows"], rowsPerPageOptions: [1, "rowsPerPageOptions"], rowExpandMode: [1, "rowExpandMode"], rowExpandable: [1, "rowExpandable"], emptyMessage: [1, "emptyMessage"], expandedRowTemplate: [1, "expandedRowTemplate"], scrollable: [1, "scrollable"], scrollHeight: [1, "scrollHeight"], totalRecords: [1, "totalRecords"], lazy: [1, "lazy"], hideHeader: [1, "hideHeader"], loading: [1, "loading"], tableStyleClass: [1, "tableStyleClass"], styleClass: [1, "styleClass"], initialFilters: [1, "initialFilters"], selection: [1, "selection"], visibleColumns: [1, "visibleColumns"] }, outputs: { pageChange: "pageChange", rowSelect: "rowSelect", rowUnselect: "rowUnselect", onLazyLoad: "onLazyLoad", onFilterChange: "onFilterChange" }, decls: 9, vars: 26, consts: [["cm", ""], ["dt", ""], ["emptymessage", ""], [3, "model", "hidden"], ["role", "grid", 3, "selectionChange", "onPage", "onRowSelect", "onRowUnselect", "onLazyLoad", "value", "paginator", "rows", "resizableColumns", "reorderableColumns", "selectionMode", "contextMenu", "size", "showGridlines", "stripedRows", "rowExpandMode", "columnResizeMode", "scrollable", "scrollHeight", "totalRecords", "lazy", "columns", "loading", "selection", "tableStyleClass", "styleClass"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["scope", "col", 1, "w-20"], ["scope", "col", 3, "pSortableColumn", "appDirectiveSwitch"], [3, "field"], ["scope", "col", 3, "appDirectiveSwitch"], ["scope", "col"], [3, "type", "field", "showMenu"], ["pTemplate", "filter"], [3, "filterChange", "field", "filterType", "options", "defaultSelected", "initialValue"], [3, "pReorderableRow", "pSelectableRow", "appDirectiveSwitch"], ["href", "#", 3, "click"], [1, "pi", 3, "ngClass"], ["pReorderableRowHandle", "", 1, "pi", "pi-bars"], [3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GridComponent_Template(rf, ctx) {
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
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      })("onRowSelect", function GridComponent_Template_p_table_onRowSelect_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRowSelect($event));
      })("onRowUnselect", function GridComponent_Template_p_table_onRowUnselect_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRowUnselect($event));
      })("onLazyLoad", function GridComponent_Template_p_table_onLazyLoad_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLazyLoadEvent($event));
      });
      \u0275\u0275conditionalCreate(4, GridComponent_Conditional_4_Template, 1, 0, null, 5);
      \u0275\u0275template(5, GridComponent_ng_template_5_Template, 5, 10, "ng-template", 6)(6, GridComponent_ng_template_6_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(8, GridComponent_Conditional_8_Template, 1, 0, null, 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const cm_r12 = \u0275\u0275reference(1);
      \u0275\u0275property("model", ctx.contextMenuItems())("hidden", !ctx.contextMenuItems());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.data())("paginator", ctx.pagination())("rows", ctx.rows())("resizableColumns", ctx.resizableColumns())("reorderableColumns", ctx.reOrderableColumns())("selectionMode", ctx.selectionMode())("contextMenu", ctx.contextMenuItems() ? cm_r12 : null)("size", ctx.size())("showGridlines", ctx.showGridLines())("stripedRows", ctx.stripedRows())("rowExpandMode", ctx.rowExpandMode())("columnResizeMode", ctx.columnResizeMode())("scrollable", ctx.scrollable())("scrollHeight", ctx.scrollable() ? "flex" : ctx.scrollHeight())("totalRecords", ctx.totalRecords())("lazy", ctx.lazy())("columns", ctx.displayedColumns())("loading", ctx.loading());
      \u0275\u0275twoWayProperty("selection", ctx._selectedRows);
      \u0275\u0275property("tableStyleClass", ctx.tableStyleClass())("styleClass", ctx.styleClass());
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
    ReorderableRowHandle,
    ReorderableRow,
    ColumnFilter,
    DirectiveSwitchDirective,
    ContextMenuModule,
    ContextMenu,
    FilterWrapperComponent,
    CommonModule,
    NgClass,
    NgTemplateOutlet
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]     .p-datatable {\n  width: 100%;\n}\n[_nghost-%COMP%]     .p-datatable-wrapper {\n  overflow-x: auto;\n}\n[_nghost-%COMP%]     .p-datatable-thead tr:nth-child(2) th {\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .p-datatable-thead tr:nth-child(2) th .filter-wrapper {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .info-display .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n[_nghost-%COMP%]     p-columnfilterformelement {\n  width: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{ selector: "app-grid", imports: [
      TableModule,
      DirectiveSwitchDirective,
      ContextMenuModule,
      FilterWrapperComponent,
      CommonModule
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
  [(selection)]="_selectedRows"
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
      <td [attr.colspan]="displayedColumns().length">{{ emptyMessage() }}</td>
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
  }], columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }], sortable: [{ type: Input, args: [{ isSignal: true, alias: "sortable", required: false }] }], selectionMode: [{ type: Input, args: [{ isSignal: true, alias: "selectionMode", required: false }] }], filterable: [{ type: Input, args: [{ isSignal: true, alias: "filterable", required: false }] }], pagination: [{ type: Input, args: [{ isSignal: true, alias: "pagination", required: false }] }], resizableColumns: [{ type: Input, args: [{ isSignal: true, alias: "resizableColumns", required: false }] }], columnResizeMode: [{ type: Input, args: [{ isSignal: true, alias: "columnResizeMode", required: false }] }], reOrderableColumns: [{ type: Input, args: [{ isSignal: true, alias: "reOrderableColumns", required: false }] }], reOrderableRows: [{ type: Input, args: [{ isSignal: true, alias: "reOrderableRows", required: false }] }], virtualScroll: [{ type: Input, args: [{ isSignal: true, alias: "virtualScroll", required: false }] }], contextMenuItems: [{ type: Input, args: [{ isSignal: true, alias: "contextMenuItems", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], showGridLines: [{ type: Input, args: [{ isSignal: true, alias: "showGridLines", required: false }] }], stripedRows: [{ type: Input, args: [{ isSignal: true, alias: "stripedRows", required: false }] }], rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: false }] }], rowsPerPageOptions: [{ type: Input, args: [{ isSignal: true, alias: "rowsPerPageOptions", required: false }] }], rowExpandMode: [{ type: Input, args: [{ isSignal: true, alias: "rowExpandMode", required: false }] }], rowExpandable: [{ type: Input, args: [{ isSignal: true, alias: "rowExpandable", required: false }] }], emptyMessage: [{ type: Input, args: [{ isSignal: true, alias: "emptyMessage", required: false }] }], expandedRowTemplate: [{ type: Input, args: [{ isSignal: true, alias: "expandedRowTemplate", required: false }] }], scrollable: [{ type: Input, args: [{ isSignal: true, alias: "scrollable", required: false }] }], scrollHeight: [{ type: Input, args: [{ isSignal: true, alias: "scrollHeight", required: false }] }], totalRecords: [{ type: Input, args: [{ isSignal: true, alias: "totalRecords", required: false }] }], lazy: [{ type: Input, args: [{ isSignal: true, alias: "lazy", required: false }] }], hideHeader: [{ type: Input, args: [{ isSignal: true, alias: "hideHeader", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], tableStyleClass: [{ type: Input, args: [{ isSignal: true, alias: "tableStyleClass", required: false }] }], styleClass: [{ type: Input, args: [{ isSignal: true, alias: "styleClass", required: false }] }], initialFilters: [{ type: Input, args: [{ isSignal: true, alias: "initialFilters", required: false }] }], selection: [{ type: Input, args: [{ isSignal: true, alias: "selection", required: false }] }], visibleColumns: [{ type: Input, args: [{ isSignal: true, alias: "visibleColumns", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }], rowSelect: [{ type: Output, args: ["rowSelect"] }], rowUnselect: [{ type: Output, args: ["rowUnselect"] }], onLazyLoad: [{ type: Output, args: ["onLazyLoad"] }], onFilterChange: [{ type: Output, args: ["onFilterChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridComponent, { className: "GridComponent", filePath: "src/app/shared/components/grid/grid.component.ts", lineNumber: 53 });
})();

// node_modules/@primeuix/styles/dist/dataview/index.mjs
var style2 = "\n    .p-dataview {\n        position: relative;\n        border-color: dt('dataview.border.color');\n        border-width: dt('dataview.border.width');\n        border-style: solid;\n        border-radius: dt('dataview.border.radius');\n        padding: dt('dataview.padding');\n    }\n\n    .p-dataview-header {\n        background: dt('dataview.header.background');\n        color: dt('dataview.header.color');\n        border-color: dt('dataview.header.border.color');\n        border-width: dt('dataview.header.border.width');\n        border-style: solid;\n        padding: dt('dataview.header.padding');\n        border-radius: dt('dataview.header.border.radius');\n    }\n\n    .p-dataview-content {\n        background: dt('dataview.content.background');\n        border-color: dt('dataview.content.border.color');\n        border-width: dt('dataview.content.border.width');\n        border-style: solid;\n        color: dt('dataview.content.color');\n        padding: dt('dataview.content.padding');\n        border-radius: dt('dataview.content.border.radius');\n    }\n\n    .p-dataview-footer {\n        background: dt('dataview.footer.background');\n        color: dt('dataview.footer.color');\n        border-color: dt('dataview.footer.border.color');\n        border-width: dt('dataview.footer.border.width');\n        border-style: solid;\n        padding: dt('dataview.footer.padding');\n        border-radius: dt('dataview.footer.border.radius');\n    }\n\n    .p-dataview-paginator-top {\n        border-width: dt('dataview.paginator.top.border.width');\n        border-color: dt('dataview.paginator.top.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-paginator-bottom {\n        border-width: dt('dataview.paginator.bottom.border.width');\n        border-color: dt('dataview.paginator.bottom.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-loading-overlay {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n    }\n";

// node_modules/primeng/fesm2022/primeng-dataview.mjs
var _c03 = ["list"];
var _c13 = ["grid"];
var _c23 = ["header"];
var _c33 = ["emptymessage"];
var _c43 = ["footer"];
var _c53 = ["paginatorleft"];
var _c63 = ["paginatorright"];
var _c72 = ["paginatordropdownitem"];
var _c8 = ["loadingicon"];
var _c9 = ["listicon"];
var _c10 = ["gridicon"];
var _c11 = [[["p-header"]], [["p-footer"]]];
var _c122 = ["p-header", "p-footer"];
var _c132 = () => ({
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
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cn(ctx_r0.cx("pcPaginator", \u0275\u0275pureFunction0(19, _c132)), ctx_r0.paginatorStyleClass))("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
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
    \u0275\u0275property("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("templateLeft", ctx_r0.paginatorleft)("templateRight", ctx_r0.paginatorright)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatordropdownitem)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cn(ctx_r0.cx("pcPaginator", \u0275\u0275pureFunction0(19, _c15)), ctx_r0.paginatorStyleClass))("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
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
  style = style2;
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
   * @param {DataViewListTemplateContext} context - list template context.
   * @group Templates
   */
  listTemplate;
  /**
   * Template for grid layout.
   * @param {DataViewGridTemplateContext} context - grid template context.
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
   * @param {DataViewPaginatorLeftTemplateContext} context - paginator left template context.
   * @group Templates
   */
  paginatorleft;
  /**
   * Template for the right side of paginator.
   * @param {DataViewPaginatorRightTemplateContext} context - paginator right template context.
   * @group Templates
   */
  paginatorright;
  /**
   * Template for items in paginator dropdown.
   * @param {DataViewPaginatorDropdownItemTemplateContext} context - paginator dropdown item template context.
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
        \u0275\u0275contentQuery(dirIndex, _c03, 5);
        \u0275\u0275contentQuery(dirIndex, _c13, 5);
        \u0275\u0275contentQuery(dirIndex, _c23, 5);
        \u0275\u0275contentQuery(dirIndex, _c33, 5);
        \u0275\u0275contentQuery(dirIndex, _c43, 5);
        \u0275\u0275contentQuery(dirIndex, _c53, 5);
        \u0275\u0275contentQuery(dirIndex, _c63, 5);
        \u0275\u0275contentQuery(dirIndex, _c72, 5);
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
    consts: [["empty", ""], [3, "pBind", "class"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "appendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "pt", "unstyled"], [3, "pBind"], [3, "class"], ["data-p-icon", "spinner", 3, "pBind", "spin"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "appendTo", "dropdownScrollHeight", "templateLeft", "templateRight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "pt", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"]],
    template: function DataView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c11);
        \u0275\u0275conditionalCreate(0, DataView_Conditional_0_Template, 4, 7, "div", 1);
        \u0275\u0275conditionalCreate(1, DataView_Conditional_1_Template, 3, 4, "div", 1);
        \u0275\u0275conditionalCreate(2, DataView_Conditional_2_Template, 1, 20, "p-paginator", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, DataView_Conditional_4_Template, 2, 8, "ng-container");
        \u0275\u0275conditionalCreate(5, DataView_Conditional_5_Template, 2, 8, "ng-container");
        \u0275\u0275conditionalCreate(6, DataView_Conditional_6_Template, 3, 6, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, DataView_Conditional_7_Template, 1, 20, "p-paginator", 2);
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
                [unstyled]="unstyled()"
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
                [unstyled]="unstyled()"
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
var style3 = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c04 = ["header"];
var _c16 = ["footer"];
var _c24 = ["rejecticon"];
var _c34 = ["accepticon"];
var _c44 = ["message"];
var _c54 = ["icon"];
var _c64 = ["headless"];
var _c73 = [[["p-footer"]]];
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
    \u0275\u0275property("pt", ctx_r1.ptm("pcRejectButton"))("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps())("unstyled", ctx_r1.unstyled());
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
    \u0275\u0275property("pt", ctx_r1.ptm("pcAcceptButton"))("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps())("unstyled", ctx_r1.unstyled());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 6, "p-button", 14)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 6, "p-button", 14);
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
  style = style3;
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
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'body'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
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
  position = "center";
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
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom reject icon template.
   * @group Templates
   */
  rejectIconTemplate;
  /**
   * Custom accept icon template.
   * @group Templates
   */
  acceptIconTemplate;
  /**
   * Custom message template.
   * @group Templates
   */
  messageTemplate;
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  templates;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
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
  styleElement;
  id = s2("pn_id_");
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
    return this.header !== null ? s2("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      const value = k ? source[k] : source[name];
      return typeof value === "function" ? value() : value;
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
  }
  onDialogHide() {
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
        \u0275\u0275contentQuery(dirIndex, _c04, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c24, 4);
        \u0275\u0275contentQuery(dirIndex, _c34, 4);
        \u0275\u0275contentQuery(dirIndex, _c44, 4);
        \u0275\u0275contentQuery(dirIndex, _c54, 4);
        \u0275\u0275contentQuery(dirIndex, _c64, 4);
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
      appendTo: [1, "appendTo"],
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
    vars: 19,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["icon", ""], ["role", "alertdialog", 3, "visibleChange", "onHide", "pt", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable", "baseZIndex", "autoZIndex", "maskStyleClass", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass", "class", "pBind"], [3, "class", "pBind", "innerHTML"], [3, "ngClass", "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind", "innerHTML"], [3, "pt", "label", "styleClass", "ariaLabel", "buttonProps", "unstyled", "onClick", 4, "ngIf"], [3, "onClick", "pt", "label", "styleClass", "ariaLabel", "buttonProps", "unstyled"], [3, "class", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c73);
        \u0275\u0275elementStart(0, "p-dialog", 6, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        })("onHide", function ConfirmDialog_Template_p_dialog_onHide_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDialogHide());
        });
        \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
        \u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("pt", ctx.pt)("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass))("modal", ctx.option("modal"))("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.$appendTo())("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable)("baseZIndex", ctx.baseZIndex)("autoZIndex", ctx.autoZIndex)("maskStyleClass", ctx.cn(ctx.cx("mask"), ctx.maskStyleClass))("unstyled", ctx.unstyled());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule, Bind],
    encapsulation: 2,
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
            [appendTo]="$appendTo()"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
            [baseZIndex]="baseZIndex"
            [autoZIndex]="autoZIndex"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass)"
            [unstyled]="unstyled()"
            (onHide)="onDialogHide()"
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
                        [unstyled]="unstyled()"
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
                        [unstyled]="unstyled()"
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
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
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
  ContextMenuModule,
  GridComponent,
  UtilsService,
  DataView,
  DataViewModule,
  ConfirmDialog,
  ConfirmDialogModule,
  TimeAgoPipe
};
//# sourceMappingURL=chunk-CIMIJWPK.js.map
