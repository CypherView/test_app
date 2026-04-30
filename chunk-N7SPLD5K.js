import {
  AppVersionService
} from "./chunk-SRQ22PRN.js";
import {
  AppStatusBadgeComponent
} from "./chunk-6EOXXF5M.js";
import {
  AppStoreService
} from "./chunk-HLBFLHW7.js";
import {
  CardModule
} from "./chunk-T6XIC3AO.js";
import {
  GridComponent
} from "./chunk-JE7DVPGN.js";
import "./chunk-EX7TBVLG.js";
import "./chunk-32XJEEKW.js";
import {
  ImgFallbackDirective
} from "./chunk-6TCB2NTQ.js";
import {
  Dialog,
  DialogModule,
  Textarea,
  TextareaModule
} from "./chunk-UF6FA7CZ.js";
import "./chunk-YALVSCY4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Tooltip,
  TooltipModule,
  Validators
} from "./chunk-TH3LNORR.js";
import {
  Button,
  ButtonModule,
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-52LQUIDL.js";
import "./chunk-TMX3INZE.js";
import {
  PrimeTemplate
} from "./chunk-WHNMSFOF.js";
import {
  ClientDataService,
  CommonModule,
  NgClass,
  RouterLink,
  RouterModule,
  toObservable,
  toSignal
} from "./chunk-L7IB7NHM.js";
import {
  Component,
  ViewChild,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PNETQGIO.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts
var _c0 = ["appIconTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["bumpTypeTemplate"];
var _c3 = ["actionsTemplate"];
var _c4 = (a0) => ["text-xs font-semibold px-2 py-0.5 rounded-full", a0];
var _c5 = (a0) => ["/app-store", a0];
var _c6 = (a0) => ["p-3 rounded border-l-4", a0];
var _c7 = (a0) => ["mb-1 text-xs font-bold uppercase", a0];
var _c8 = (a0) => ["text-sm font-bold", a0];
var _c9 = (a0) => ["p-3 rounded border-l-4 md:col-span-2", a0];
var _forTrack0 = ($index, $item) => $item.value;
function AppAdminPanelComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_For_3_Template_p_button_onClick_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilterChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", option_r2.label)("severity", ctx_r2.statusFilter() === option_r2.value ? "primary" : "secondary")("outlined", ctx_r2.statusFilter() !== option_r2.value);
  }
}
function AppAdminPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 13);
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, " Please try refreshing the page or adjusting filters. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function AppAdminPanelComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r2.columns())("data", ctx_r2.versions())("loading", ctx_r2.loading())("pagination", true)("rows", 10)("sortable", true);
  }
}
function AppAdminPanelComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275elementStart(2, "h3", 20);
    \u0275\u0275text(3, " No versions found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, " There are no app versions matching the selected criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppAdminPanelComponent_Conditional_6_Conditional_0_Template, 1, 6, "app-grid", 17)(1, AppAdminPanelComponent_Conditional_6_Conditional_1_Template, 6, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.versions().length > 0 || ctx_r2.loading() ? 0 : 1);
  }
}
function AppAdminPanelComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", v_r4.iconUrl, \u0275\u0275sanitizeUrl)("alt", v_r4.name + " icon")("fallbackText", v_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r4.name);
  }
}
function AppAdminPanelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 25);
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275property("status", v_r5.status);
  }
}
function AppAdminPanelComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c4, v_r6.bumpType === "major" ? "bg-red-100 text-red-700" : v_r6.bumpType === "minor" ? "bg-amber-100 text-amber-700" : "bg-surface-100 text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r6.bumpType);
  }
}
function AppAdminPanelComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 30);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_ng_template_13_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const v_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openReviewPanel(v_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function AppAdminPanelComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "p-button", 28);
    \u0275\u0275conditionalCreate(2, AppAdminPanelComponent_ng_template_13_Conditional_2_Template, 1, 1, "p-button", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c5, v_r8.appDefinitionId))("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r8.status === "pendingReview" ? 2 : -1);
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "p-progressSpinner", 43);
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r9.version.active == null ? null : app_r9.version.active.name, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r9.version.active == null ? null : app_r9.version.active.shortDescription, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r9.version.active == null ? null : app_r9.version.active.healthCheckUrl, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r9.version.active == null ? null : app_r9.version.active.iconUrl, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r9.version.active == null ? null : app_r9.version.active.description, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 26)(2, "p", 26);
    \u0275\u0275text(3, " Name ");
    \u0275\u0275conditionalCreate(4, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_4_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_5_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "p", 26);
    \u0275\u0275text(10, " Short Description ");
    \u0275\u0275conditionalCreate(11, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_11_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_12_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(13, "p", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 26)(16, "p", 26);
    \u0275\u0275text(17, " Health Check URL ");
    \u0275\u0275conditionalCreate(18, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_18_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_19_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(20, "p", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 26)(23, "p", 26);
    \u0275\u0275text(24, " Icon URL ");
    \u0275\u0275conditionalCreate(25, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_25_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_26_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(27, "p", 26);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 26)(30, "p", 26);
    \u0275\u0275text(31, " Description ");
    \u0275\u0275conditionalCreate(32, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_32_Template, 2, 0, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, AppAdminPanelComponent_Conditional_16_Conditional_21_Conditional_33_Template, 2, 1, "p", 45);
    \u0275\u0275elementStart(34, "p", 26);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext();
    const diff_r11 = \u0275\u0275nextContext().getFieldDiff(v_r10, ctx);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c6, diff_r11["name"] ? "border-amber-400 bg-amber-50" : "border-surface-200 bg-surface-50"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c7, diff_r11["name"] ? "text-amber-700" : "text-surface-400"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r11["name"] ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r11["name"] ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c8, diff_r11["name"] ? "text-surface-800" : "text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r10.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c6, diff_r11["shortDescription"] ? "border-amber-400 bg-amber-50" : "border-surface-200 bg-surface-50"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c7, diff_r11["shortDescription"] ? "text-amber-700" : "text-surface-400"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r11["shortDescription"] ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r11["shortDescription"] ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c8, diff_r11["shortDescription"] ? "text-surface-800" : "text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r10.shortDescription, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c6, diff_r11["healthCheckUrl"] ? "border-amber-400 bg-amber-50" : "border-surface-200 bg-surface-50"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c7, diff_r11["healthCheckUrl"] ? "text-amber-700" : "text-surface-400"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r11["healthCheckUrl"] ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r11["healthCheckUrl"] ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(46, _c8, diff_r11["healthCheckUrl"] ? "text-surface-800" : "text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r10.healthCheckUrl || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(48, _c6, diff_r11["iconUrl"] ? "border-amber-400 bg-amber-50" : "border-surface-200 bg-surface-50"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(50, _c7, diff_r11["iconUrl"] ? "text-amber-700" : "text-surface-400"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r11["iconUrl"] ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r11["iconUrl"] ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(52, _c8, diff_r11["iconUrl"] ? "text-surface-800" : "text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r10.iconUrl, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(54, _c9, diff_r11["description"] ? "border-amber-400 bg-amber-50" : "border-surface-200 bg-surface-50"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(56, _c7, diff_r11["description"] ? "text-amber-700" : "text-surface-400"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(diff_r11["description"] ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(diff_r11["description"] ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c8, diff_r11["description"] ? "text-surface-800" : "text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r10.description, " ");
  }
}
function AppAdminPanelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementStart(3, "div")(4, "p", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p", 36);
    \u0275\u0275text(14, " Changelog ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 36);
    \u0275\u0275text(19, " Content Changes ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, AppAdminPanelComponent_Conditional_16_Conditional_20_Template, 2, 0, "div", 38)(21, AppAdminPanelComponent_Conditional_16_Conditional_21_Template, 36, 60, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 40);
    \u0275\u0275element(23, "textarea", 41)(24, "textarea", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const v_r10 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", v_r10.iconUrl, \u0275\u0275sanitizeUrl)("alt", v_r10.name)("fallbackText", v_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", v_r10.developerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", v_r10.version);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c4, v_r10.bumpType === "major" ? "bg-red-100 text-red-700" : v_r10.bumpType === "minor" ? "bg-amber-100 text-amber-700" : "bg-surface-100 text-surface-600"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(v_r10.bumpType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", v_r10.changelog, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.reviewPanelLoading() ? 20 : (tmp_15_0 = ctx_r2.reviewPanelApp()) ? 21 : -1, tmp_15_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.reviewForm);
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true);
    \u0275\u0275advance();
    \u0275\u0275property("autoResize", true);
  }
}
function AppAdminPanelComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p-button", 47);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_ng_template_17_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitReviewDecision("changesRequested"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 48);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_ng_template_17_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitReviewDecision("rejected"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 49);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_ng_template_17_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitReviewDecision("approved"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.isSubmittingReview())("disabled", ctx_r2.reviewForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.isSubmittingReview())("disabled", ctx_r2.reviewForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.isSubmittingReview())("disabled", ctx_r2.reviewForm.invalid);
  }
}
var AppAdminPanelComponent = class _AppAdminPanelComponent {
  appStoreService = inject(AppStoreService);
  appVersionService = inject(AppVersionService);
  clientDataService = inject(ClientDataService);
  fb = inject(FormBuilder);
  appIconTemplate;
  statusTemplate;
  bumpTypeTemplate;
  actionsTemplate;
  // State Signals
  statusFilter = signal("pendingReview", ...ngDevMode ? [{ debugName: "statusFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  columns = signal([], ...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  versions$ = toObservable(computed(() => ({
    status: this.statusFilter(),
    refresh: this.refreshTrigger()
  }))).pipe(tap(() => {
    this.loading.set(true);
    this.error.set(null);
  }), switchMap(({ status }) => {
    const source$ = this.appVersionService.getAllVersions(status === "ALL" ? {} : { status });
    return source$.pipe(tap(() => this.loading.set(false)), catchError((err) => {
      console.error("Error loading versions:", err);
      this.loading.set(false);
      this.error.set("Unable to load versions. Please try again.");
      return of([]);
    }));
  }));
  versions = toSignal(this.versions$, {
    initialValue: []
  });
  statusOptions = [
    { label: "Pending Review", value: "pendingReview" },
    { label: "Changes Requested", value: "changesRequested" },
    { label: "All", value: "ALL" }
  ];
  ngOnInit() {
    this.setupColumns();
  }
  setupColumns() {
    this.columns.set([
      {
        field: "name",
        header: "App",
        sortable: true,
        cellTemplate: this.appIconTemplate
      },
      {
        field: "developerName",
        header: "Developer",
        sortable: true
      },
      {
        field: "version",
        header: "Version",
        sortable: true
      },
      {
        field: "bumpType",
        header: "Bump Type",
        sortable: true,
        cellTemplate: this.bumpTypeTemplate
      },
      {
        field: "status",
        header: "Status",
        sortable: true,
        cellTemplate: this.statusTemplate
      },
      {
        field: "createdDate",
        header: "Submitted",
        sortable: true,
        valueGetter: (v) => new Date(v.createdDate).toLocaleDateString()
      },
      {
        field: "actions",
        header: "Actions",
        cellTemplate: this.actionsTemplate
      }
    ]);
  }
  onStatusFilterChange(status) {
    this.statusFilter.set(status);
  }
  // Review panel state
  reviewPanelVisible = signal(false, ...ngDevMode ? [{ debugName: "reviewPanelVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewPanelVersion = signal(null, ...ngDevMode ? [{ debugName: "reviewPanelVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewPanelApp = signal(null, ...ngDevMode ? [{ debugName: "reviewPanelApp" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewPanelLoading = signal(false, ...ngDevMode ? [{ debugName: "reviewPanelLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmittingReview = signal(false, ...ngDevMode ? [{ debugName: "isSubmittingReview" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewForm = this.fb.group({
    comments: ["", [Validators.required, Validators.maxLength(2e3)]],
    internalNotes: ["", [Validators.maxLength(2e3)]]
  });
  openReviewPanel(version) {
    this.reviewPanelVersion.set(version);
    this.reviewPanelApp.set(null);
    this.reviewPanelVisible.set(true);
    this.reviewPanelLoading.set(true);
    this.reviewForm.reset();
    this.appStoreService.getAppById(version.appDefinitionId, this.clientDataService.getSelectedClient()?.id ?? "").pipe(catchError(() => of(null))).subscribe((app) => {
      this.reviewPanelApp.set(app);
      this.reviewPanelLoading.set(false);
    });
  }
  getFieldDiff(v, app) {
    const baseline = app.version.active;
    if (!baseline) {
      return {
        name: false,
        shortDescription: false,
        description: false,
        healthCheckUrl: false,
        iconUrl: false
      };
    }
    return {
      name: v.name !== baseline.name,
      shortDescription: v.shortDescription !== baseline.shortDescription,
      description: v.description !== baseline.description,
      healthCheckUrl: (v.healthCheckUrl ?? "") !== (baseline.healthCheckUrl ?? ""),
      iconUrl: v.iconUrl !== baseline.iconUrl
    };
  }
  submitReviewDecision(status) {
    const version = this.reviewPanelVersion();
    if (!version || this.reviewForm.invalid)
      return;
    this.isSubmittingReview.set(true);
    const { comments, internalNotes } = this.reviewForm.getRawValue();
    const request = {
      id: version.id,
      developerId: version.appDefinitionId,
      status,
      comments,
      internalNotes
    };
    this.appStoreService.reviewApp(version.appDefinitionId, request).subscribe({
      next: () => {
        this.reviewPanelVisible.set(false);
        this.isSubmittingReview.set(false);
        this.reviewForm.reset();
        this.refreshVersions();
      },
      error: () => this.isSubmittingReview.set(false)
    });
  }
  refreshVersions() {
    this.refreshTrigger.update((n) => n + 1);
  }
  static \u0275fac = function AppAdminPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppAdminPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppAdminPanelComponent, selectors: [["app-admin-panel"]], viewQuery: function AppAdminPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7)(_c1, 7)(_c2, 7)(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appIconTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bumpTypeTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionsTemplate = _t.first);
    }
  }, decls: 18, vars: 5, consts: [["appIconTemplate", ""], ["statusTemplate", ""], ["bumpTypeTemplate", ""], ["actionsTemplate", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex", "flex-wrap", "gap-2", "p-4", "flex-none", "border-b", "border-subtle"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "label", "severity", "outlined"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden", "p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["header", "Review App Submission", "styleClass", "w-full md:w-[800px]", 3, "visibleChange", "visible", "modal", "draggable"], [1, "space-y-6", "p-2"], ["pTemplate", "footer"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "onClick", "label", "severity", "outlined"], [1, "w-16", "h-16", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl"], [1, "text-xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600"], ["styleClass", "h-full", 3, "columns", "data", "loading", "pagination", "rows", "sortable"], [1, "text-center", "py-20", "border", "border-subtle", "rounded-2xl", "mx-auto", "max-w-2xl"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2", "text-surface-900"], [1, "text-surface-900"], [1, "flex", "items-center", "gap-2"], ["appImgFallback", "", 1, "w-8", "h-8", "rounded", "object-cover", "shadow-sm-100", 3, "src", "alt", "fallbackText"], [1, "font-medium", "text-surface-900"], [3, "status"], [3, "ngClass"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View App", 3, "routerLink", "text"], ["icon", "pi pi-file-edit", "size", "small", "severity", "info", "pTooltip", "Review Submission", 3, "text"], ["icon", "pi pi-file-edit", "size", "small", "severity", "info", "pTooltip", "Review Submission", 3, "onClick", "text"], [1, "flex", "items-center", "gap-3"], ["appImgFallback", "", 1, "w-10", "h-10", "rounded", "object-cover", 3, "src", "alt", "fallbackText"], [1, "font-semibold", "text-surface-900"], [1, "text-xs", "text-surface-500"], [1, "ml-auto", "font-mono", "text-sm", "font-bold", "text-surface-700"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "text-surface-500"], [1, "p-3", "text-sm", "leading-relaxed", "rounded-lg", "border", "text-surface-700", "bg-surface-50"], [1, "flex", "justify-center", "py-4"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], [1, "space-y-3", 3, "formGroup"], ["pTextarea", "", "formControlName", "comments", "placeholder", "Comments to developer (required)...", "rows", "3", 1, "w-full", 3, "autoResize"], ["pTextarea", "", "formControlName", "internalNotes", "placeholder", "Internal notes...", "rows", "2", 1, "w-full", 3, "autoResize"], ["styleClass", "w-6 h-6"], [1, "ml-1", "px-1.5", "py-0.5", "rounded", "bg-amber-200", "text-[10px]"], [1, "text-xs", "line-through", "text-surface-400"], [1, "flex", "flex-wrap", "gap-2", "justify-end"], ["label", "Request Changes", "severity", "warn", 3, "onClick", "loading", "disabled"], ["label", "Reject", "severity", "danger", 3, "onClick", "loading", "disabled"], ["label", "Approve", "severity", "success", 3, "onClick", "loading", "disabled"]], template: function AppAdminPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
      \u0275\u0275repeaterCreate(2, AppAdminPanelComponent_For_3_Template, 1, 3, "p-button", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7);
      \u0275\u0275conditionalCreate(5, AppAdminPanelComponent_Conditional_5_Template, 7, 1, "div", 8)(6, AppAdminPanelComponent_Conditional_6_Template, 2, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AppAdminPanelComponent_ng_template_7_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, AppAdminPanelComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, AppAdminPanelComponent_ng_template_11_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, AppAdminPanelComponent_ng_template_13_Template, 3, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(15, "p-dialog", 9);
      \u0275\u0275listener("visibleChange", function AppAdminPanelComponent_Template_p_dialog_visibleChange_15_listener($event) {
        return ctx.reviewPanelVisible.set($event);
      });
      \u0275\u0275conditionalCreate(16, AppAdminPanelComponent_Conditional_16_Template, 25, 15, "div", 10);
      \u0275\u0275template(17, AppAdminPanelComponent_ng_template_17_Template, 4, 6, "ng-template", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.error() ? 5 : 6);
      \u0275\u0275advance(10);
      \u0275\u0275property("visible", ctx.reviewPanelVisible())("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.reviewPanelVersion()) ? 16 : -1, tmp_9_0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    RouterLink,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    Button,
    PrimeTemplate,
    CardModule,
    DialogModule,
    Dialog,
    TextareaModule,
    Textarea,
    ProgressSpinnerModule,
    ProgressSpinner,
    TooltipModule,
    Tooltip,
    GridComponent,
    AppStatusBadgeComponent,
    ImgFallbackDirective
  ], styles: ["\n/*# sourceMappingURL=app-admin-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppAdminPanelComponent, [{
    type: Component,
    args: [{ selector: "app-admin-panel", imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      CardModule,
      DialogModule,
      TextareaModule,
      ProgressSpinnerModule,
      TooltipModule,
      GridComponent,
      AppStatusBadgeComponent,
      ImgFallbackDirective
    ], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <!-- Status Filter Bar -->
  <div class="flex flex-wrap gap-2 p-4 flex-none border-b border-subtle">
    @for (option of statusOptions; track option.value) {
      <p-button
        [label]="option.label"
        [severity]="statusFilter() === option.value ? 'primary' : 'secondary'"
        [outlined]="statusFilter() !== option.value"
        size="small"
        rounded="true"
        class="!text-xs font-semibold"
        (onClick)="onStatusFilterChange(option.value)"
      />
    }
  </div>

  <!-- Content Area -->
  <div class="flex-1 min-h-0 w-full overflow-hidden p-6">
    @if (error()) {
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        >
          <i class="pi pi-exclamation-triangle text-3xl"></i>
        </div>
        <h3 class="text-xl font-bold text-surface-900 mb-2">{{ error() }}</h3>
        <p class="text-surface-600">
          Please try refreshing the page or adjusting filters.
        </p>
      </div>
    } @else {
      @if (versions().length > 0 || loading()) {
        <app-grid
          [columns]="columns()"
          [data]="versions()"
          [loading]="loading()"
          [pagination]="true"
          [rows]="10"
          [sortable]="true"
          styleClass="h-full"
        />
      } @else {
        <!-- Empty State -->
        <div
          class="text-center py-20 border border-subtle rounded-2xl mx-auto max-w-2xl"
        >
          <span class="pi pi-inbox !text-6xl muted mb-4"></span>
          <h3 class="text-lg font-medium mb-2 text-surface-900">
            No versions found
          </h3>
          <p class="text-surface-900">
            There are no app versions matching the selected criteria.
          </p>
        </div>
      }
    }
  </div>
</div>

<!-- Cell Templates -->
<ng-template #appIconTemplate let-v>
  <div class="flex items-center gap-2">
    <img
      [src]="v.iconUrl"
      [alt]="v.name + ' icon'"
      class="w-8 h-8 rounded object-cover shadow-sm-100"
      appImgFallback
      [fallbackText]="v.name"
    />
    <span class="font-medium text-surface-900">{{ v.name }}</span>
  </div>
</ng-template>

<ng-template #statusTemplate let-v>
  <app-status-badge [status]="v.status" />
</ng-template>

<ng-template #bumpTypeTemplate let-v>
  <span
    [ngClass]="[
      'text-xs font-semibold px-2 py-0.5 rounded-full',
      v.bumpType === 'major'
        ? 'bg-red-100 text-red-700'
        : v.bumpType === 'minor'
          ? 'bg-amber-100 text-amber-700'
          : 'bg-surface-100 text-surface-600',
    ]"
    >{{ v.bumpType }}</span
  >
</ng-template>

<ng-template #actionsTemplate let-v>
  <div class="flex gap-2">
    <p-button
      [routerLink]="['/app-store', v.appDefinitionId]"
      icon="pi pi-eye"
      size="small"
      [text]="true"
      severity="secondary"
      pTooltip="View App"
    />

    @if (v.status === 'pendingReview') {
      <p-button
        icon="pi pi-file-edit"
        size="small"
        [text]="true"
        severity="info"
        pTooltip="Review Submission"
        (onClick)="openReviewPanel(v)"
      />
    }
  </div>
</ng-template>

<!-- Rich Review Panel Dialog -->
<p-dialog
  header="Review App Submission"
  [visible]="reviewPanelVisible()"
  (visibleChange)="reviewPanelVisible.set($event)"
  [modal]="true"
  styleClass="w-full md:w-[800px]"
  [draggable]="false"
>
  @if (reviewPanelVersion(); as v) {
    <div class="space-y-6 p-2">
      <!-- Version header -->
      <div class="flex items-center gap-3">
        <img
          [src]="v.iconUrl"
          [alt]="v.name"
          class="w-10 h-10 rounded object-cover"
          appImgFallback
          [fallbackText]="v.name"
        />
        <div>
          <p class="font-semibold text-surface-900">{{ v.name }}</p>
          <p class="text-xs text-surface-500">by {{ v.developerName }}</p>
        </div>
        <span class="ml-auto font-mono text-sm font-bold text-surface-700"
          >v{{ v.version }}</span
        >
        <span
          [ngClass]="[
            'text-xs font-semibold px-2 py-0.5 rounded-full',
            v.bumpType === 'major'
              ? 'bg-red-100 text-red-700'
              : v.bumpType === 'minor'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-surface-100 text-surface-600',
          ]"
          >{{ v.bumpType }}</span
        >
      </div>

      <!-- Changelog -->
      <div>
        <p class="mb-2 text-xs font-semibold uppercase text-surface-500">
          Changelog
        </p>
        <p
          class="p-3 text-sm leading-relaxed rounded-lg border text-surface-700 bg-surface-50"
        >
          {{ v.changelog }}
        </p>
      </div>

      <!-- Diff section -->
      <div>
        <p class="mb-2 text-xs font-semibold uppercase text-surface-500">
          Content Changes
        </p>
        @if (reviewPanelLoading()) {
          <div class="flex justify-center py-4">
            <p-progressSpinner styleClass="w-6 h-6" />
          </div>
        } @else if (reviewPanelApp(); as app) {
          @let diff = getFieldDiff(v, app);
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- Name -->
            <div
              [ngClass]="[
                'p-3 rounded border-l-4',
                diff['name']
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-surface-200 bg-surface-50',
              ]"
            >
              <p
                [ngClass]="[
                  'mb-1 text-xs font-bold uppercase',
                  diff['name'] ? 'text-amber-700' : 'text-surface-400',
                ]"
              >
                Name
                @if (diff['name']) {
                  <span
                    class="ml-1 px-1.5 py-0.5 rounded bg-amber-200 text-[10px]"
                    >Changed</span
                  >
                }
              </p>
              @if (diff['name']) {
                <p class="text-xs line-through text-surface-400">
                  {{ app.version.active?.name }}
                </p>
              }
              <p
                [ngClass]="[
                  'text-sm font-bold',
                  diff['name'] ? 'text-surface-800' : 'text-surface-600',
                ]"
              >
                {{ v.name }}
              </p>
            </div>
            <!-- Short Description -->
            <div
              [ngClass]="[
                'p-3 rounded border-l-4',
                diff['shortDescription']
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-surface-200 bg-surface-50',
              ]"
            >
              <p
                [ngClass]="[
                  'mb-1 text-xs font-bold uppercase',
                  diff['shortDescription']
                    ? 'text-amber-700'
                    : 'text-surface-400',
                ]"
              >
                Short Description
                @if (diff['shortDescription']) {
                  <span
                    class="ml-1 px-1.5 py-0.5 rounded bg-amber-200 text-[10px]"
                    >Changed</span
                  >
                }
              </p>
              @if (diff['shortDescription']) {
                <p class="text-xs line-through text-surface-400">
                  {{ app.version.active?.shortDescription }}
                </p>
              }
              <p
                [ngClass]="[
                  'text-sm font-bold',
                  diff['shortDescription']
                    ? 'text-surface-800'
                    : 'text-surface-600',
                ]"
              >
                {{ v.shortDescription }}
              </p>
            </div>
            <!-- Health Check URL -->
            <div
              [ngClass]="[
                'p-3 rounded border-l-4',
                diff['healthCheckUrl']
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-surface-200 bg-surface-50',
              ]"
            >
              <p
                [ngClass]="[
                  'mb-1 text-xs font-bold uppercase',
                  diff['healthCheckUrl']
                    ? 'text-amber-700'
                    : 'text-surface-400',
                ]"
              >
                Health Check URL
                @if (diff['healthCheckUrl']) {
                  <span
                    class="ml-1 px-1.5 py-0.5 rounded bg-amber-200 text-[10px]"
                    >Changed</span
                  >
                }
              </p>
              @if (diff['healthCheckUrl']) {
                <p class="text-xs line-through text-surface-400">
                  {{ app.version.active?.healthCheckUrl }}
                </p>
              }
              <p
                [ngClass]="[
                  'text-sm font-bold',
                  diff['healthCheckUrl']
                    ? 'text-surface-800'
                    : 'text-surface-600',
                ]"
              >
                {{ v.healthCheckUrl || '\u2014' }}
              </p>
            </div>
            <!-- Icon URL -->
            <div
              [ngClass]="[
                'p-3 rounded border-l-4',
                diff['iconUrl']
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-surface-200 bg-surface-50',
              ]"
            >
              <p
                [ngClass]="[
                  'mb-1 text-xs font-bold uppercase',
                  diff['iconUrl'] ? 'text-amber-700' : 'text-surface-400',
                ]"
              >
                Icon URL
                @if (diff['iconUrl']) {
                  <span
                    class="ml-1 px-1.5 py-0.5 rounded bg-amber-200 text-[10px]"
                    >Changed</span
                  >
                }
              </p>
              @if (diff['iconUrl']) {
                <p class="text-xs line-through text-surface-400">
                  {{ app.version.active?.iconUrl }}
                </p>
              }
              <p
                [ngClass]="[
                  'text-sm font-bold',
                  diff['iconUrl'] ? 'text-surface-800' : 'text-surface-600',
                ]"
              >
                {{ v.iconUrl }}
              </p>
            </div>
            <!-- Description (full width) -->
            <div
              [ngClass]="[
                'p-3 rounded border-l-4 md:col-span-2',
                diff['description']
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-surface-200 bg-surface-50',
              ]"
            >
              <p
                [ngClass]="[
                  'mb-1 text-xs font-bold uppercase',
                  diff['description'] ? 'text-amber-700' : 'text-surface-400',
                ]"
              >
                Description
                @if (diff['description']) {
                  <span
                    class="ml-1 px-1.5 py-0.5 rounded bg-amber-200 text-[10px]"
                    >Changed</span
                  >
                }
              </p>
              @if (diff['description']) {
                <p class="text-xs line-through text-surface-400">
                  {{ app.version.active?.description }}
                </p>
              }
              <p
                [ngClass]="[
                  'text-sm font-bold',
                  diff['description'] ? 'text-surface-800' : 'text-surface-600',
                ]"
              >
                {{ v.description }}
              </p>
            </div>
          </div>
        }
      </div>

      <!-- Comment fields -->
      <div class="space-y-3" [formGroup]="reviewForm">
        <textarea
          pTextarea
          formControlName="comments"
          placeholder="Comments to developer (required)..."
          rows="3"
          class="w-full"
          [autoResize]="true"
        ></textarea>
        <textarea
          pTextarea
          formControlName="internalNotes"
          placeholder="Internal notes..."
          rows="2"
          class="w-full"
          [autoResize]="true"
        ></textarea>
      </div>
    </div>
  }

  <ng-template pTemplate="footer">
    <div class="flex flex-wrap gap-2 justify-end">
      <p-button
        label="Request Changes"
        severity="warn"
        [loading]="isSubmittingReview()"
        [disabled]="reviewForm.invalid"
        (onClick)="submitReviewDecision('changesRequested')"
      />
      <p-button
        label="Reject"
        severity="danger"
        [loading]="isSubmittingReview()"
        [disabled]="reviewForm.invalid"
        (onClick)="submitReviewDecision('rejected')"
      />
      <p-button
        label="Approve"
        severity="success"
        [loading]="isSubmittingReview()"
        [disabled]="reviewForm.invalid"
        (onClick)="submitReviewDecision('approved')"
      />
    </div>
  </ng-template>
</p-dialog>
`, styles: ["/* src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.scss */\n/*# sourceMappingURL=app-admin-panel.component.css.map */\n"] }]
  }], null, { appIconTemplate: [{
    type: ViewChild,
    args: ["appIconTemplate", { static: true }]
  }], statusTemplate: [{
    type: ViewChild,
    args: ["statusTemplate", { static: true }]
  }], bumpTypeTemplate: [{
    type: ViewChild,
    args: ["bumpTypeTemplate", { static: true }]
  }], actionsTemplate: [{
    type: ViewChild,
    args: ["actionsTemplate", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppAdminPanelComponent, { className: "AppAdminPanelComponent", filePath: "src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts", lineNumber: 59 });
})();
export {
  AppAdminPanelComponent
};
//# sourceMappingURL=chunk-N7SPLD5K.js.map
