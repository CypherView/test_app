import {
  AppVisibilityBadgeComponent,
  TARGETS_BY_SCOPE,
  TARGET_ACTIONS,
  TARGET_LABELS,
  getFeeLabel
} from "./chunk-KR6I554L.js";
import {
  AppVersionService
} from "./chunk-INA3S7Z4.js";
import {
  AppStoreService
} from "./chunk-5LL4AMNO.js";
import {
  AdaptiveLayoutComponent
} from "./chunk-3XC7NKQU.js";
import {
  LayoutService
} from "./chunk-SZNKIB7Y.js";
import "./chunk-W3FU4YKA.js";
import {
  Step,
  StepItem,
  StepPanel,
  Stepper,
  StepperModule
} from "./chunk-227XKAZG.js";
import {
  ModalListFormComponent
} from "./chunk-WLMUTOYA.js";
import {
  Card,
  CardModule
} from "./chunk-HEDH66RH.js";
import {
  ImgFallbackDirective
} from "./chunk-DXDIX3ID.js";
import {
  ModalFormService
} from "./chunk-3L22U4Q2.js";
import "./chunk-EVW4PTKX.js";
import "./chunk-S5OZ6G2W.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-NT6TC2O6.js";
import {
  MultiSelect,
  MultiSelectModule
} from "./chunk-LHPCQEY3.js";
import "./chunk-2YBWOZSJ.js";
import "./chunk-BTNVOKO5.js";
import "./chunk-FYHRO7AA.js";
import "./chunk-6ZLKOSJY.js";
import "./chunk-N3IYAUEM.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-6RNH5RNU.js";
import {
  Checkbox,
  CheckboxModule,
  InputText,
  InputTextModule,
  Select,
  SelectModule
} from "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-KMNNT5Y5.js";
import "./chunk-437DZVOB.js";
import "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7YJUDWRM.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-RNIEZZVX.js";
import {
  ActivatedRoute,
  ClientDataService,
  Router,
  RouterLink,
  RouterModule,
  UserSessionService,
  createDropdownField,
  createTextAreaField,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed,
  toSignal
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  Location,
  NgClass,
  NgTemplateOutlet,
  PrimeTemplate,
  formatCurrency
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  DestroyRef,
  Input,
  Output,
  ViewChild,
  catchError,
  computed,
  effect,
  finalize,
  inject,
  input,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";
import {
  isEqual_default
} from "./chunk-M4PBGCJ5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/models/app-store.models.ts
var AVAILABLE_SCREENS = [
  {
    id: "tripDetails",
    name: "Trip Details Screen",
    description: "Embedded in the trip detail view \u2014 shown when a user drills into a specific trip's data."
  },
  {
    id: "positionActivityStats",
    name: "Vehicle Activity Screen",
    description: "Embedded in the vehicle activity stats panel \u2014 visible during live or historical position analysis."
  },
  {
    id: "appSidebar",
    name: "App Sidebar",
    description: "A persistent sidebar panel accessible from the main navigation \u2014 always visible when your app is installed."
  }
];

// src/app/features/app-store/components/app-listing-preview/app-listing-preview.component.ts
var _forTrack0 = ($index, $item) => $item.screenId;
function AppListingPreviewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.EDIT_MODE"));
  }
}
function AppListingPreviewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.data().iconUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.data().name + " icon")("fallbackText", ctx_r0.data().name || "App");
  }
}
function AppListingPreviewComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementEnd();
  }
}
function AppListingPreviewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().name);
  }
}
function AppListingPreviewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.APP_NAME_PLACEHOLDER"));
  }
}
function AppListingPreviewComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().shortDescription);
  }
}
function AppListingPreviewComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.SHORT_DESCRIPTION_PLACEHOLDER"));
  }
}
function AppListingPreviewComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data().description);
  }
}
function AppListingPreviewComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.FULL_DESCRIPTION_PLACEHOLDER"));
  }
}
function AppListingPreviewComponent_Conditional_35_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getScreenName(point_r2.screenId));
  }
}
function AppListingPreviewComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
    \u0275\u0275elementStart(1, "div", 18)(2, "h4", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275repeaterCreate(6, AppListingPreviewComponent_Conditional_35_For_7_Template, 4, 1, "div", 29, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.INTEGRATES_WITH"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.data().integrationPoints);
  }
}
function AppListingPreviewComponent_Conditional_36_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perm_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPermissionLabel(perm_r3), " ");
  }
}
function AppListingPreviewComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
    \u0275\u0275elementStart(1, "div", 18)(2, "h4", 22);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275repeaterCreate(7, AppListingPreviewComponent_Conditional_36_For_8_Template, 2, 1, "span", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "ADMIN.APP_STORE.LISTING_PREVIEW.PERMISSIONS_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.allPermissions());
  }
}
function AppListingPreviewComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
    \u0275\u0275elementStart(1, "div", 18)(2, "h4", 22);
    \u0275\u0275element(3, "i", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "ADMIN.APP_STORE.LISTING_PREVIEW.PERMISSIONS_REQUIRED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "ADMIN.APP_STORE.LISTING_PREVIEW.NO_PERMISSIONS"));
  }
}
var AppListingPreviewComponent = class _AppListingPreviewComponent {
  translateService = inject(TranslateService);
  data = input.required(...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMode = input(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  getFeeLabel(feeModel) {
    return getFeeLabel(feeModel, this.translateService);
  }
  allPermissions = computed(() => {
    const points = this.data().integrationPoints ?? [];
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const point of points) {
      for (const perm of point.requiredPermissions) {
        if (!seen.has(perm)) {
          seen.add(perm);
          result.push(perm);
        }
      }
    }
    return result;
  }, ...ngDevMode ? [{ debugName: "allPermissions" }] : (
    /* istanbul ignore next */
    []
  ));
  getScreenName(screenId) {
    return AVAILABLE_SCREENS.find((s) => s.id === screenId)?.name ?? screenId;
  }
  getPermissionLabel(permission) {
    const [target, action] = permission.split(":");
    const targetLabel = TARGET_LABELS[target] ?? target;
    return `${targetLabel} (${action})`;
  }
  static \u0275fac = function AppListingPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppListingPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppListingPreviewComponent, selectors: [["app-listing-preview"]], inputs: { data: [1, "data"], isEditMode: [1, "isEditMode"] }, decls: 45, vars: 25, consts: [[1, "sticky", "top-0", "z-10", "flex", "items-center", "gap-2", "mb-4", "py-2", "bg-surface-50"], [1, "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-surface-500"], [1, "px-2", "py-0.5", "text-[10px]", "font-bold", "uppercase", "bg-amber-100", "text-amber-700", "rounded-full"], [1, "rounded-2xl", "border", "border-subtle", "bg-surface-0", "shadow-sm", "overflow-hidden"], [1, "relative", "p-6", "pb-4"], [1, "absolute", "top-4", "right-4"], [3, "visibility"], [1, "w-24", "h-24", "rounded-3xl", "overflow-hidden", "bg-surface-100", "shadow-sm", "mb-4", "flex", "items-center", "justify-center"], ["appImgFallback", "", 1, "object-cover", "w-full", "h-full", 3, "src", "alt", "fallbackText"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "bg-surface-200"], [1, "text-xl", "font-bold", "text-surface-900"], [1, "text-xl", "font-bold", "text-surface-300", "italic"], [1, "text-sm", "text-surface-500", "mt-0.5"], [1, "font-medium"], [1, "mt-2"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-surface-100", "text-surface-600"], [1, "pi", "pi-tag", "text-[10px]"], [1, "border-t", "border-subtle", "mx-6"], [1, "px-6", "py-4"], [1, "text-sm", "text-surface-700", "leading-relaxed"], [1, "text-sm", "text-surface-300", "italic"], [1, "px-6", "pb-4"], [1, "text-sm", "font-semibold", "text-surface-800", "mb-2"], [1, "text-sm", "text-surface-700", "leading-relaxed", "whitespace-pre-line"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-heart", "text-xs", 3, "ngClass"], [1, "text-xs", "text-surface-500"], [1, "pi", "pi-box", "text-3xl", "text-surface-400"], [1, "flex", "flex-col", "gap-1.5"], [1, "flex", "items-center", "gap-2", "text-sm", "text-surface-700"], [1, "pi", "pi-link", "text-xs", "text-primary"], [1, "pi", "pi-shield", "text-xs", "text-amber-500", "mr-1"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "inline-flex", "items-center", "px-2", "py-0.5", "rounded-full", "text-xs", "bg-amber-50", "text-amber-800", "border", "border-amber-200"], [1, "pi", "pi-shield", "text-xs", "text-surface-400", "mr-1"], [1, "text-xs", "text-surface-400", "italic"]], template: function AppListingPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "h2", 1);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, AppListingPreviewComponent_Conditional_5_Template, 3, 3, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5);
      \u0275\u0275element(9, "app-visibility-badge", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, AppListingPreviewComponent_Conditional_11_Template, 1, 3, "img", 8)(12, AppListingPreviewComponent_Conditional_12_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, AppListingPreviewComponent_Conditional_13_Template, 2, 1, "h3", 10)(14, AppListingPreviewComponent_Conditional_14_Template, 3, 3, "h3", 11);
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14)(22, "span", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(25, "div", 17);
      \u0275\u0275elementStart(26, "div", 18);
      \u0275\u0275conditionalCreate(27, AppListingPreviewComponent_Conditional_27_Template, 2, 1, "p", 19)(28, AppListingPreviewComponent_Conditional_28_Template, 3, 3, "p", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 21)(30, "h4", 22);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(33, AppListingPreviewComponent_Conditional_33_Template, 2, 1, "p", 23)(34, AppListingPreviewComponent_Conditional_34_Template, 3, 3, "p", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, AppListingPreviewComponent_Conditional_35_Template, 8, 3);
      \u0275\u0275conditionalCreate(36, AppListingPreviewComponent_Conditional_36_Template, 9, 3)(37, AppListingPreviewComponent_Conditional_37_Template, 9, 6);
      \u0275\u0275element(38, "div", 17);
      \u0275\u0275elementStart(39, "div", 18)(40, "div", 24);
      \u0275\u0275element(41, "i", 25);
      \u0275\u0275elementStart(42, "span", 26);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_11_0;
      let tmp_12_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "ADMIN.APP_STORE.LISTING_PREVIEW.TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEditMode() ? 5 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("visibility", ctx.data().visibility);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data().iconUrl ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data().name ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "ADMIN.APP_STORE.LISTING_PREVIEW.BY"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data().developerName || \u0275\u0275pipeBind1(20, 19, "ADMIN.APP_STORE.LISTING_PREVIEW.YOU"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.getFeeLabel(ctx.data().feeModel), " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.data().shortDescription ? 27 : 28);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 21, "ADMIN.APP_STORE.LISTING_PREVIEW.ABOUT"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.data().description ? 33 : 34);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((((tmp_11_0 = ctx.data().integrationPoints) == null ? null : tmp_11_0.length) ?? 0) > 0 ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.allPermissions().length > 0 ? 36 : (((tmp_12_0 = ctx.data().integrationPoints) == null ? null : tmp_12_0.length) ?? 0) > 0 ? 37 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", ctx.data().hasHealthCheck ? "text-green-500" : "text-surface-300");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 23, ctx.data().hasHealthCheck ? "ADMIN.APP_STORE.LISTING_PREVIEW.HEALTH_ENABLED" : "ADMIN.APP_STORE.LISTING_PREVIEW.HEALTH_NONE"), " ");
    }
  }, dependencies: [CommonModule, NgClass, AppVisibilityBadgeComponent, ImgFallbackDirective, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app-listing-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppListingPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-listing-preview", imports: [CommonModule, TranslatePipe, AppVisibilityBadgeComponent, ImgFallbackDirective], template: `<div>
  <!-- Sticky heading -->
  <div class="sticky top-0 z-10 flex items-center gap-2 mb-4 py-2 bg-surface-50">
    <h2 class="text-sm font-semibold uppercase tracking-wider text-surface-500">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.TITLE' | translate }}</h2>
    @if (isEditMode()) {
      <span class="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-100 text-amber-700 rounded-full">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.EDIT_MODE' | translate }}</span>
    }
  </div>

  <!-- Preview card -->
  <div class="rounded-2xl border border-subtle bg-surface-0 shadow-sm overflow-hidden">

    <!-- Header -->
    <div class="relative p-6 pb-4">
      <!-- Visibility badge \u2014 top right -->
      <div class="absolute top-4 right-4">
        <app-visibility-badge [visibility]="data().visibility" />
      </div>

      <!-- App icon -->
      <div class="w-24 h-24 rounded-3xl overflow-hidden bg-surface-100 shadow-sm mb-4 flex items-center justify-center">
        @if (data().iconUrl) {
          <img
            [src]="data().iconUrl"
            [alt]="data().name + ' icon'"
            class="object-cover w-full h-full"
            appImgFallback
            [fallbackText]="data().name || 'App'"
          />
        } @else {
          <div class="w-full h-full flex items-center justify-center bg-surface-200">
            <i class="pi pi-box text-3xl text-surface-400"></i>
          </div>
        }
      </div>

      <!-- App name -->
      @if (data().name) {
        <h3 class="text-xl font-bold text-surface-900">{{ data().name }}</h3>
      } @else {
        <h3 class="text-xl font-bold text-surface-300 italic">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.APP_NAME_PLACEHOLDER' | translate }}</h3>
      }

      <!-- Developer -->
      <p class="text-sm text-surface-500 mt-0.5">
        {{ 'ADMIN.APP_STORE.LISTING_PREVIEW.BY' | translate }}
        <span class="font-medium">{{ data().developerName || ('ADMIN.APP_STORE.LISTING_PREVIEW.YOU' | translate) }}</span>
      </p>

      <!-- Fee badge -->
      <div class="mt-2">
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-surface-100 text-surface-600">
          <i class="pi pi-tag text-[10px]"></i>
          {{ getFeeLabel(data().feeModel) }}
        </span>
      </div>
    </div>

    <div class="border-t border-subtle mx-6"></div>

    <!-- Short description -->
    <div class="px-6 py-4">
      @if (data().shortDescription) {
        <p class="text-sm text-surface-700 leading-relaxed">{{ data().shortDescription }}</p>
      } @else {
        <p class="text-sm text-surface-300 italic">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.SHORT_DESCRIPTION_PLACEHOLDER' | translate }}</p>
      }
    </div>

    <!-- About section -->
    <div class="px-6 pb-4">
      <h4 class="text-sm font-semibold text-surface-800 mb-2">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.ABOUT' | translate }}</h4>
      @if (data().description) {
        <p class="text-sm text-surface-700 leading-relaxed whitespace-pre-line">{{ data().description }}</p>
      } @else {
        <p class="text-sm text-surface-300 italic">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.FULL_DESCRIPTION_PLACEHOLDER' | translate }}</p>
      }
    </div>

    <!-- Integration Points -->
    @if ((data().integrationPoints?.length ?? 0) > 0) {
      <div class="border-t border-subtle mx-6"></div>
      <div class="px-6 py-4">
        <h4 class="text-sm font-semibold text-surface-800 mb-2">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.INTEGRATES_WITH' | translate }}</h4>
        <div class="flex flex-col gap-1.5">
          @for (point of data().integrationPoints; track point.screenId) {
            <div class="flex items-center gap-2 text-sm text-surface-700">
              <i class="pi pi-link text-xs text-primary"></i>
              <span>{{ getScreenName(point.screenId) }}</span>
            </div>
          }
        </div>
      </div>
    }

    <!-- Permissions -->
    @if (allPermissions().length > 0) {
      <div class="border-t border-subtle mx-6"></div>
      <div class="px-6 py-4">
        <h4 class="text-sm font-semibold text-surface-800 mb-2">
          <i class="pi pi-shield text-xs text-amber-500 mr-1"></i>
          {{ 'ADMIN.APP_STORE.LISTING_PREVIEW.PERMISSIONS_REQUIRED' | translate }}
        </h4>
        <div class="flex flex-wrap gap-1.5">
          @for (perm of allPermissions(); track perm) {
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-800 border border-amber-200">
              {{ getPermissionLabel(perm) }}
            </span>
          }
        </div>
      </div>
    } @else if ((data().integrationPoints?.length ?? 0) > 0) {
      <div class="border-t border-subtle mx-6"></div>
      <div class="px-6 py-4">
        <h4 class="text-sm font-semibold text-surface-800 mb-2">
          <i class="pi pi-shield text-xs text-surface-400 mr-1"></i>
          {{ 'ADMIN.APP_STORE.LISTING_PREVIEW.PERMISSIONS_REQUIRED' | translate }}
        </h4>
        <p class="text-xs text-surface-400 italic">{{ 'ADMIN.APP_STORE.LISTING_PREVIEW.NO_PERMISSIONS' | translate }}</p>
      </div>
    }

    <!-- Health check indicator -->
    <div class="border-t border-subtle mx-6"></div>
    <div class="px-6 py-4">
      <div class="flex items-center gap-2">
        <i class="pi pi-heart text-xs" [ngClass]="data().hasHealthCheck ? 'text-green-500' : 'text-surface-300'"></i>
        <span class="text-xs text-surface-500">
          {{ (data().hasHealthCheck ? 'ADMIN.APP_STORE.LISTING_PREVIEW.HEALTH_ENABLED' : 'ADMIN.APP_STORE.LISTING_PREVIEW.HEALTH_NONE') | translate }}
        </span>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/app-store/components/app-listing-preview/app-listing-preview.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app-listing-preview.component.css.map */\n"] }]
  }], null, { data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: true }] }], isEditMode: [{ type: Input, args: [{ isSignal: true, alias: "isEditMode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppListingPreviewComponent, { className: "AppListingPreviewComponent", filePath: "src/app/features/app-store/components/app-listing-preview/app-listing-preview.component.ts", lineNumber: 28 });
})();

// src/app/features/app-store/components/app-permissions-picker/app-permissions-picker.component.ts
var _forTrack02 = ($index, $item) => $item.target;
function AppPermissionsPickerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.PERMISSIONS_PICKER.NONE_REQUIRED"));
  }
}
function AppPermissionsPickerComponent_Conditional_0_Conditional_1_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r1, " ");
  }
}
function AppPermissionsPickerComponent_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, AppPermissionsPickerComponent_Conditional_0_Conditional_1_For_2_For_4_Template, 2, 1, "span", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r2.actions);
  }
}
function AppPermissionsPickerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2);
    \u0275\u0275repeaterCreate(1, AppPermissionsPickerComponent_Conditional_0_Conditional_1_For_2_Template, 5, 1, "li", 3, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedItems());
  }
}
function AppPermissionsPickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppPermissionsPickerComponent_Conditional_0_Conditional_0_Template, 3, 3, "p", 1)(1, AppPermissionsPickerComponent_Conditional_0_Conditional_1_Template, 3, 0, "ul", 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.selectedItems().length === 0 ? 0 : 1);
  }
}
function AppPermissionsPickerComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.PERMISSIONS_PICKER.NONE_ADDED"));
  }
}
function AppPermissionsPickerComponent_Conditional_1_Conditional_14_For_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r6, " ");
  }
}
function AppPermissionsPickerComponent_Conditional_1_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275repeaterCreate(6, AppPermissionsPickerComponent_Conditional_1_Conditional_14_For_1_For_7_Template, 2, 1, "span", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 21);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function AppPermissionsPickerComponent_Conditional_1_Conditional_14_For_1_Template_button_click_8_listener() {
      const \u0275$index_47_r7 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeRow(\u0275$index_47_r7));
    });
    \u0275\u0275element(10, "i", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r8.actions);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(9, 3, "ADMIN.APP_STORE.PERMISSIONS_PICKER.REMOVE"));
  }
}
function AppPermissionsPickerComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AppPermissionsPickerComponent_Conditional_1_Conditional_14_For_1_Template, 11, 5, "div", 17, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.committedRows);
  }
}
function AppPermissionsPickerComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADMIN.APP_STORE.PERMISSIONS_PICKER.VALIDATION"));
  }
}
function AppPermissionsPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 6)(2, "div", 7)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppPermissionsPickerComponent_Conditional_1_Conditional_13_Template, 3, 3, "p", 8)(14, AppPermissionsPickerComponent_Conditional_1_Conditional_14_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "p", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11)(20, "p-select", 12);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("onChange", function AppPermissionsPickerComponent_Conditional_1_Template_p_select_onChange_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDraftScopeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-select", 13);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("onChange", function AppPermissionsPickerComponent_Conditional_1_Template_p_select_onChange_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDraftTargetChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "p-multiselect", 14);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "p-button", 15);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("onClick", function AppPermissionsPickerComponent_Conditional_1_Template_p_button_onClick_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDraft());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, AppPermissionsPickerComponent_Conditional_1_Conditional_28_Template, 3, 3, "p", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, "ADMIN.APP_STORE.PERMISSIONS_PICKER.SCOPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "ADMIN.APP_STORE.PERMISSIONS_PICKER.TARGET"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "ADMIN.APP_STORE.PERMISSIONS_PICKER.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.committedRows.length === 0 ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 20, "ADMIN.APP_STORE.PERMISSIONS_PICKER.ADD_NEW"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.draft);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.scopeOptions)("placeholder", \u0275\u0275pipeBind1(21, 22, "ADMIN.APP_STORE.PERMISSIONS_PICKER.SCOPE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.getTargetOptions(ctx_r2.draftScope))("placeholder", \u0275\u0275pipeBind1(23, 24, "ADMIN.APP_STORE.PERMISSIONS_PICKER.SELECT_TARGET"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.getActionOptions(ctx_r2.draftTarget))("placeholder", \u0275\u0275pipeBind1(25, 26, "ADMIN.APP_STORE.PERMISSIONS_PICKER.SELECT_ACTIONS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 28, "ADMIN.APP_STORE.PERMISSIONS_PICKER.ADD"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.draftInvalid() ? 28 : -1);
  }
}
var AppPermissionsPickerComponent = class _AppPermissionsPickerComponent {
  fb = inject(NonNullableFormBuilder);
  destroyRef = inject(DestroyRef);
  value = input([], ...ngDevMode ? [{ debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : (
    /* istanbul ignore next */
    []
  ));
  valueChange = output();
  // ── Dropdown option lists ─────────────────────────────────────────────────
  scopeOptions = Object.keys(TARGETS_BY_SCOPE).map((s) => ({ label: s, value: s }));
  getTargetOptions(scope) {
    return (TARGETS_BY_SCOPE[scope] ?? []).map((t) => ({
      label: TARGET_LABELS[t] ?? t,
      value: t
    }));
  }
  getActionOptions(target) {
    return (TARGET_ACTIONS[target] ?? ["list", "get", "create", "update", "delete"]).map((a) => ({
      label: a,
      value: a
    }));
  }
  // ── Committed rows FormArray ──────────────────────────────────────────────
  form = new FormArray([]);
  // ── Draft FormGroup (outside the array — not emitted until confirmed) ─────
  draft = this.fb.group({
    scope: this.fb.control("client"),
    target: this.fb.control(""),
    actions: this.fb.control([])
  });
  draftInvalid = signal(false, ...ngDevMode ? [{ debugName: "draftInvalid" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const value = this.value();
      untracked(() => this.buildForm(value));
    });
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.emit());
  }
  // ── Committed rows display ────────────────────────────────────────────────
  get committedRows() {
    return this.form.controls.map((c) => {
      const { scope, target, actions } = c.getRawValue();
      return { scope, target, label: TARGET_LABELS[target] ?? target, actions };
    });
  }
  get draftScope() {
    return this.draft.getRawValue().scope;
  }
  get draftTarget() {
    return this.draft.getRawValue().target;
  }
  // ── Draft cascade handlers ────────────────────────────────────────────────
  onDraftScopeChange() {
    this.draft.patchValue({ target: "", actions: [] });
    this.draftInvalid.set(false);
  }
  onDraftTargetChange() {
    this.draft.patchValue({ actions: [] });
    this.draftInvalid.set(false);
  }
  // ── Confirm draft → push to committed array ───────────────────────────────
  confirmDraft() {
    const { target, actions } = this.draft.getRawValue();
    if (!target || actions.length === 0) {
      this.draftInvalid.set(true);
      return;
    }
    this.draftInvalid.set(false);
    this.form.push(this.createRow(this.draft.getRawValue()));
    this.draft.reset({ scope: "client", target: "", actions: [] });
  }
  removeRow(index) {
    this.form.removeAt(index);
  }
  // ── Private helpers ───────────────────────────────────────────────────────
  createRow(value) {
    return this.fb.group({
      scope: this.fb.control(value.scope),
      target: this.fb.control(value.target),
      actions: this.fb.control(value.actions)
    });
  }
  /** Reverse-maps an entity target to the scope that owns it (scope is UI-only). */
  scopeForTarget(target) {
    for (const [scope, targets] of Object.entries(TARGETS_BY_SCOPE)) {
      if (targets.includes(target))
        return scope;
    }
    return "client";
  }
  buildForm(v) {
    this.form.clear({ emitEvent: false });
    const byTarget = {};
    for (const perm of v) {
      const colonIdx = perm.indexOf(":");
      if (colonIdx === -1)
        continue;
      const target = perm.slice(0, colonIdx);
      const action = perm.slice(colonIdx + 1);
      (byTarget[target] ??= []).push(action);
    }
    for (const [target, actions] of Object.entries(byTarget)) {
      this.form.push(this.createRow({ scope: this.scopeForTarget(target), target, actions }), { emitEvent: false });
    }
  }
  emit() {
    const result = [];
    for (const row of this.form.controls) {
      const { target, actions } = row.getRawValue();
      if (!target || actions.length === 0)
        continue;
      for (const action of actions) {
        const perm = `${target}:${action}`;
        if (!result.includes(perm))
          result.push(perm);
      }
    }
    this.valueChange.emit(result);
  }
  // ── Readonly helpers ──────────────────────────────────────────────────────
  // Input format: ["asset:list", "asset:get"] — parse for display.
  selectedItems = computed(() => {
    const rows = [];
    const byTarget = {};
    for (const perm of this.value()) {
      const colonIdx = perm.indexOf(":");
      if (colonIdx === -1)
        continue;
      const target = perm.slice(0, colonIdx);
      const action = perm.slice(colonIdx + 1);
      (byTarget[target] ??= []).push(action);
    }
    for (const [target, actions] of Object.entries(byTarget)) {
      rows.push({ target, label: TARGET_LABELS[target] ?? target, actions });
    }
    return rows;
  }, ...ngDevMode ? [{ debugName: "selectedItems" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppPermissionsPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppPermissionsPickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppPermissionsPickerComponent, selectors: [["app-permissions-picker"]], inputs: { value: [1, "value"], readonly: [1, "readonly"] }, outputs: { valueChange: "valueChange" }, decls: 2, vars: 1, consts: [[1, "space-y-3"], [1, "text-xs", "italic", "text-surface-400"], [1, "space-y-1"], [1, "flex", "flex-wrap", "gap-2", "items-center"], [1, "w-36", "text-sm", "font-medium", "text-surface-700", "shrink-0"], [1, "px-2", "py-0.5", "text-xs", "font-medium", "rounded-full", "border", "bg-primary/10", "text-primary", "border-primary/20"], [1, "rounded-md", "border", "border-surface-200", "overflow-hidden"], [1, "grid", "grid-cols-[6rem_1fr_1fr_2rem]", "gap-2", "px-3", "py-2", "bg-surface-50", "border-b", "border-surface-200", "text-xs", "font-semibold", "text-surface-500", "uppercase", "tracking-wide"], [1, "px-3", "py-4", "text-xs", "italic", "text-surface-400", "text-center"], [1, "space-y-2"], [1, "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide"], [1, "flex", "gap-2", "items-start", "flex-wrap", 3, "formGroup"], ["formControlName", "scope", 1, "w-32", 3, "onChange", "options", "placeholder"], ["formControlName", "target", 1, "w-48", 3, "onChange", "options", "placeholder"], ["formControlName", "actions", "display", "chip", 1, "flex-1", "min-w-48", 3, "options", "placeholder"], ["severity", "primary", "size", "small", 3, "onClick", "label"], [1, "text-xs", "text-red-500"], [1, "grid", "grid-cols-[6rem_1fr_1fr_2rem]", "gap-2", "px-3", "py-2", "items-center", "border-b", "border-surface-100", "last:border-b-0", "hover:bg-surface-50", "transition-colors"], [1, "text-sm", "text-surface-600"], [1, "text-sm", "font-medium", "text-surface-700"], [1, "flex", "flex-wrap", "gap-1"], ["type", "button", 1, "flex", "items-center", "justify-center", "w-6", "h-6", "rounded", "text-surface-400", "hover:text-red-500", "hover:bg-red-50", "transition-colors", 3, "click", "title"], [1, "pi", "pi-times", "text-xs"]], template: function AppPermissionsPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppPermissionsPickerComponent_Conditional_0_Template, 2, 1)(1, AppPermissionsPickerComponent_Conditional_1_Template, 29, 30, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.readonly() ? 0 : 1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SelectModule, Select, MultiSelectModule, MultiSelect, ButtonModule, Button, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppPermissionsPickerComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-picker", standalone: true, imports: [CommonModule, ReactiveFormsModule, SelectModule, MultiSelectModule, ButtonModule, TranslatePipe], template: `<!-- \u2500\u2500 Readonly mode: target + action pills \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (readonly()) {
  @if (selectedItems().length === 0) {
    <p class="text-xs italic text-surface-400">{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.NONE_REQUIRED' | translate }}</p>
  } @else {
    <ul class="space-y-1">
      @for (item of selectedItems(); track item.target) {
        <li class="flex flex-wrap gap-2 items-center">
          <span class="w-36 text-sm font-medium text-surface-700 shrink-0">{{ item.label }}</span>
          @for (action of item.actions; track action) {
            <span class="px-2 py-0.5 text-xs font-medium rounded-full border bg-primary/10 text-primary border-primary/20">
              {{ action }}
            </span>
          }
        </li>
      }
    </ul>
  }
} @else {
  <!-- \u2500\u2500 Edit mode: committed table + draft row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="space-y-3">

    <!-- Committed rows table -->
    <div class="rounded-md border border-surface-200 overflow-hidden">
      <!-- Header -->
      <div class="grid grid-cols-[6rem_1fr_1fr_2rem] gap-2 px-3 py-2 bg-surface-50 border-b border-surface-200 text-xs font-semibold text-surface-500 uppercase tracking-wide">
        <span>{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.SCOPE' | translate }}</span>
        <span>{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.TARGET' | translate }}</span>
        <span>{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.ACTIONS' | translate }}</span>
        <span></span>
      </div>

      <!-- Committed rows -->
      @if (committedRows.length === 0) {
        <p class="px-3 py-4 text-xs italic text-surface-400 text-center">{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.NONE_ADDED' | translate }}</p>
      } @else {
        @for (row of committedRows; track row.target; let i = $index) {
          <div class="grid grid-cols-[6rem_1fr_1fr_2rem] gap-2 px-3 py-2 items-center border-b border-surface-100 last:border-b-0 hover:bg-surface-50 transition-colors">
            <span class="text-sm text-surface-600">{{ row.scope }}</span>
            <span class="text-sm font-medium text-surface-700">{{ row.label }}</span>
            <div class="flex flex-wrap gap-1">
              @for (action of row.actions; track action) {
                <span class="px-2 py-0.5 text-xs font-medium rounded-full border bg-primary/10 text-primary border-primary/20">
                  {{ action }}
                </span>
              }
            </div>
            <button
              type="button"
              class="flex items-center justify-center w-6 h-6 rounded text-surface-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              (click)="removeRow(i)"
              [title]="'ADMIN.APP_STORE.PERMISSIONS_PICKER.REMOVE' | translate"
            >
              <i class="pi pi-times text-xs"></i>
            </button>
          </div>
        }
      }
    </div>

    <!-- Draft row -->
    <div class="space-y-2">
      <p class="text-xs font-semibold text-surface-400 uppercase tracking-wide">{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.ADD_NEW' | translate }}</p>
      <div class="flex gap-2 items-start flex-wrap" [formGroup]="draft">
        <!-- Scope -->
        <p-select
          formControlName="scope"
          [options]="scopeOptions"
          [placeholder]="'ADMIN.APP_STORE.PERMISSIONS_PICKER.SCOPE' | translate"
          class="w-32"
          (onChange)="onDraftScopeChange()"
        />
        <!-- Target \u2014 filtered by draft scope -->
        <p-select
          formControlName="target"
          [options]="getTargetOptions(draftScope)"
          [placeholder]="'ADMIN.APP_STORE.PERMISSIONS_PICKER.SELECT_TARGET' | translate"
          class="w-48"
          (onChange)="onDraftTargetChange()"
        />
        <!-- Actions \u2014 multi-select, filtered by draft target -->
        <p-multiselect
          formControlName="actions"
          [options]="getActionOptions(draftTarget)"
          [placeholder]="'ADMIN.APP_STORE.PERMISSIONS_PICKER.SELECT_ACTIONS' | translate"
          display="chip"
          class="flex-1 min-w-48"
        />
        <!-- Confirm button -->
        <p-button
          [label]="'ADMIN.APP_STORE.PERMISSIONS_PICKER.ADD' | translate"
          severity="primary"
          size="small"
          (onClick)="confirmDraft()"
        />
      </div>
      @if (draftInvalid()) {
        <p class="text-xs text-red-500">{{ 'ADMIN.APP_STORE.PERMISSIONS_PICKER.VALIDATION' | translate }}</p>
      }
    </div>

  </div>
}
` }]
  }], () => [], { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], valueChange: [{ type: Output, args: ["valueChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppPermissionsPickerComponent, { className: "AppPermissionsPickerComponent", filePath: "src/app/features/app-store/components/app-permissions-picker/app-permissions-picker.component.ts", lineNumber: 34 });
})();

// src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts
var _c0 = ["wizardPanel"];
var _c1 = ["previewPanel"];
var _c2 = ["gettingStartedStep"];
var _c3 = ["basicInfoStep"];
var _c4 = ["publishingStep"];
var _c5 = ["integrationPointsStep"];
var _c6 = ["permissionsStep"];
var _c7 = ["reviewStep"];
var _c8 = () => [100];
var _c9 = () => [60, 40];
var _c10 = (a0) => ({ $implicit: a0 });
var _c11 = () => ({ label: "I have a hosted HTTPS endpoint for my integration" });
var _c12 = () => ({ label: "I have a publicly accessible icon image URL (optional)" });
var _c13 = () => ({ label: "I understand that submissions go through a review process (24\u201348 hrs)" });
var _c14 = (a0, a1, a2) => [a0, a1, a2];
var _c15 = () => ({ standalone: true });
var _c16 = () => ({ value: "global", icon: "pi-globe", label: "Global", desc: "Visible to everyone in the marketplace" });
var _c17 = () => ({ value: "ourOperations", icon: "pi-building", label: "Our Operations", desc: "Only visible within your organisation hierarchy." });
var _c18 = () => ({ value: "unlisted", icon: "pi-lock", label: "Unlisted", desc: "Hidden from the marketplace. Only orgs you invite can find it." });
var _c19 = () => ({ value: "free", icon: "pi-tag", label: "Free", desc: "No charge for installation or usage" });
var _c20 = () => ({ value: "perInstallation", icon: "pi-download", label: "Per Installation", desc: "Best for one-time tools or utilities" });
var _c21 = () => ({ value: "perActiveDevice", icon: "pi-desktop", label: "Per Active Device", desc: "Best for apps used daily across a fleet" });
var _c22 = () => [];
var _forTrack03 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AppCreateWizardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-adaptive-layout", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("panels", ctx_r0.isMobile() ? ctx_r0.panels().slice(0, 1) : ctx_r0.panels())("panelSizes", ctx_r0.isMobile() ? \u0275\u0275pureFunction0(2, _c8) : \u0275\u0275pureFunction0(3, _c9));
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 27);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(activateCallback_r4(ctx_r0.steps()[ctx_r0.steps().findIndex((s) => s.value === step_r5.value) - 1].value));
    });
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(activateCallback_r4(ctx_r0.steps()[ctx_r0.steps().findIndex((s) => s.value === step_r5.value) + 1].value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("disabled", step_r5.disableNext);
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_1_Template, 1, 0, "p-button", 25);
    \u0275\u0275conditionalCreate(2, AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Conditional_2_Template, 1, 1, "p-button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r5.value > ctx_r0.steps()[0].value ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r5.value < ctx_r0.steps()[ctx_r0.steps().length - 1].value ? 2 : -1);
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 23);
    \u0275\u0275conditionalCreate(2, AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Conditional_2_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", step_r5.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c10, step_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(!step_r5.hideDefaultFooter ? 2 : -1);
  }
}
function AppCreateWizardComponent_ng_template_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-item", 20)(1, "p-step");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-step-panel");
    \u0275\u0275template(4, AppCreateWizardComponent_ng_template_10_For_3_ng_template_4_Template, 3, 5, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    \u0275\u0275property("value", step_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.header);
  }
}
function AppCreateWizardComponent_ng_template_10_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "div", 33)(3, "h3", 12);
    \u0275\u0275text(4, "Submitted for review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
    \u0275\u0275text(6, " Your app has been sent for approval. We'll notify you when the review is complete. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "p-button", 36);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Conditional_4_ng_template_2_Template_p_button_onClick_8_listener() {
      \u0275\u0275restoreView(_r7);
      const submitted_r8 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToAppDetail(submitted_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-button", 37);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_10_Conditional_4_ng_template_2_Template_p_button_onClick_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToMarketplace());
    });
    \u0275\u0275elementEnd()()()();
  }
}
function AppCreateWizardComponent_ng_template_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p-card", 29);
    \u0275\u0275template(2, AppCreateWizardComponent_ng_template_10_Conditional_4_ng_template_2_Template, 10, 0, "ng-template", 30);
    \u0275\u0275elementEnd()();
  }
}
function AppCreateWizardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "p-stepper", 19);
    \u0275\u0275listener("valueChange", function AppCreateWizardComponent_ng_template_10_Template_p_stepper_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event !== void 0 && ctx_r0.currentStep.set($event));
    });
    \u0275\u0275repeaterCreate(2, AppCreateWizardComponent_ng_template_10_For_3_Template, 6, 2, "p-step-item", 20, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_10_Conditional_4_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.currentStep())("linear", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.steps());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.submittedApp()) ? 4 : -1, tmp_12_0);
  }
}
function AppCreateWizardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "app-listing-preview", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.previewData())("isEditMode", ctx_r0.isEditMode());
  }
}
function AppCreateWizardComponent_ng_template_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "p-checkbox", 44);
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("binary", true)("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(4, _c15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.label);
  }
}
function AppCreateWizardComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "p", 41);
    \u0275\u0275text(2, " Check that you're ready before starting. You can proceed without ticking all boxes \u2014 these are for your reference. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275repeaterCreate(4, AppCreateWizardComponent_ng_template_14_For_5_Template, 4, 5, "div", 43, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275element(7, "p-checkbox", 44);
    \u0275\u0275elementStart(8, "span", 45);
    \u0275\u0275text(9, " I've read the ");
    \u0275\u0275elementStart(10, "a", 46);
    \u0275\u0275text(11, "integration documentation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 47)(13, "div", 48)(14, "div", 49);
    \u0275\u0275element(15, "i", 50);
    \u0275\u0275elementStart(16, "span", 51);
    \u0275\u0275text(17, "Basic Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 52);
    \u0275\u0275text(19, "Name, description, and icon for your app listing.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 48)(21, "div", 49);
    \u0275\u0275element(22, "i", 53);
    \u0275\u0275elementStart(23, "span", 51);
    \u0275\u0275text(24, "Publishing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 52);
    \u0275\u0275text(26, "Who can see your app and your pricing model.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 48)(28, "div", 49);
    \u0275\u0275element(29, "i", 54);
    \u0275\u0275elementStart(30, "span", 51);
    \u0275\u0275text(31, "Integration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 52);
    \u0275\u0275text(33, "Which CypherView screens your app embeds into.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction3(6, _c14, \u0275\u0275pureFunction0(3, _c11), \u0275\u0275pureFunction0(4, _c12), \u0275\u0275pureFunction0(5, _c13)));
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(10, _c15));
  }
}
function AppCreateWizardComponent_ng_template_16_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "App name is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_16_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Short description is required ");
  }
}
function AppCreateWizardComponent_ng_template_16_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Maximum 100 characters allowed ");
  }
}
function AppCreateWizardComponent_ng_template_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_16_Conditional_12_Conditional_1_Template, 1, 0)(2, AppCreateWizardComponent_ng_template_16_Conditional_12_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r0.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]) ? 1 : 2);
  }
}
function AppCreateWizardComponent_ng_template_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Full description is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "form", 56)(2, "div", 57)(3, "div")(4, "label", 58);
    \u0275\u0275text(5, "App Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 59);
    \u0275\u0275conditionalCreate(7, AppCreateWizardComponent_ng_template_16_Conditional_7_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "label", 61);
    \u0275\u0275text(10, "Short Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 62);
    \u0275\u0275conditionalCreate(12, AppCreateWizardComponent_ng_template_16_Conditional_12_Template, 3, 1, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 63);
    \u0275\u0275text(15, "Full Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "textarea", 64);
    \u0275\u0275conditionalCreate(17, AppCreateWizardComponent_ng_template_16_Conditional_17_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 65)(19, "div")(20, "label", 66);
    \u0275\u0275text(21, "Icon URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "label", 68);
    \u0275\u0275text(25, "Health Check URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 69);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.appForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("ng-invalid", ((tmp_11_0 = ctx_r0.appForm.get("basicInfo.name")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.appForm.get("basicInfo.name")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r0.appForm.get("basicInfo.name")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.appForm.get("basicInfo.name")) == null ? null : tmp_12_0.touched) ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_13_0 = ctx_r0.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx_r0.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.appForm.get("basicInfo.shortDescription")) == null ? null : tmp_14_0.touched) ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ng-invalid", ((tmp_15_0 = ctx_r0.appForm.get("basicInfo.description")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.appForm.get("basicInfo.description")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = ctx_r0.appForm.get("basicInfo.description")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.appForm.get("basicInfo.description")) == null ? null : tmp_16_0.touched) ? 17 : -1);
  }
}
function AppCreateWizardComponent_ng_template_18_For_10_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_18_For_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_18_For_10_ng_template_1_Conditional_1_Template, 2, 0, "span", 78);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "p", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const opt_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx_r0.appForm.get("publishing.visibility")) == null ? null : tmp_21_0.value) === opt_r11.value ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", opt_r11.icon, " text-xl mb-2 block text-primary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r11.desc);
  }
}
function AppCreateWizardComponent_ng_template_18_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card", 76);
    \u0275\u0275listener("click", function AppCreateWizardComponent_ng_template_18_For_10_Template_p_card_click_0_listener() {
      let tmp_21_0;
      const opt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_21_0 = ctx_r0.appForm.get("publishing.visibility")) == null ? null : tmp_21_0.setValue(opt_r11.value));
    });
    \u0275\u0275template(1, AppCreateWizardComponent_ng_template_18_For_10_ng_template_1_Template, 7, 6, "ng-template", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const opt_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(((tmp_20_0 = ctx_r0.appForm.get("publishing.visibility")) == null ? null : tmp_20_0.value) === opt_r11.value ? "border-primary card-selected cursor-pointer transition-all duration-200" : "cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-surface-50");
  }
}
function AppCreateWizardComponent_ng_template_18_For_16_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_18_For_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275conditionalCreate(1, AppCreateWizardComponent_ng_template_18_For_16_ng_template_1_Conditional_1_Template, 2, 0, "span", 78);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "p", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const opt_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_21_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_21_0.value) === opt_r13.value ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", opt_r13.icon, " text-xl mb-2 block text-primary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r13.desc);
  }
}
function AppCreateWizardComponent_ng_template_18_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card", 76);
    \u0275\u0275listener("click", function AppCreateWizardComponent_ng_template_18_For_16_Template_p_card_click_0_listener() {
      let tmp_21_0;
      const opt_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((tmp_21_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_21_0.setValue(opt_r13.value));
    });
    \u0275\u0275template(1, AppCreateWizardComponent_ng_template_18_For_16_ng_template_1_Template, 7, 6, "ng-template", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const opt_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(((tmp_20_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_20_0.value) === opt_r13.value ? "border-primary card-selected cursor-pointer transition-all duration-200" : "cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-surface-50");
  }
}
function AppCreateWizardComponent_ng_template_18_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "A valid amount greater than R 0.00 is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_18_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFeePreviewLabel((tmp_12_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_12_0.value, (tmp_12_0 = ctx_r0.appForm.get("publishing.feeAmount")) == null ? null : tmp_12_0.value), " ");
  }
}
function AppCreateWizardComponent_ng_template_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "label", 81);
    \u0275\u0275text(2, "Amount (ZAR) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-inputnumber", 82);
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_18_Conditional_17_Conditional_4_Template, 2, 0, "small", 60);
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_18_Conditional_17_Conditional_5_Template, 2, 1, "p", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("minFractionDigits", 2)("min", 0.01);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r0.appForm.get("publishing.feeAmount")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.appForm.get("publishing.feeAmount")) == null ? null : tmp_13_0.touched) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_14_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_14_0.value) === "perActiveDevice" && ((tmp_14_0 = ctx_r0.appForm.get("publishing.feeAmount")) == null ? null : tmp_14_0.value) ? 5 : -1);
  }
}
function AppCreateWizardComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 70);
    \u0275\u0275text(2, " Control who can discover your app and how it is priced. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 56)(4, "div", 71)(5, "div")(6, "p", 72);
    \u0275\u0275text(7, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 73);
    \u0275\u0275repeaterCreate(9, AppCreateWizardComponent_ng_template_18_For_10_Template, 2, 2, "p-card", 74, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "p", 72);
    \u0275\u0275text(13, "Fee Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 73);
    \u0275\u0275repeaterCreate(15, AppCreateWizardComponent_ng_template_18_For_16_Template, 2, 2, "p-card", 74, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, AppCreateWizardComponent_ng_template_18_Conditional_17_Template, 6, 4, "div", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.appForm);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction3(5, _c14, \u0275\u0275pureFunction0(2, _c16), \u0275\u0275pureFunction0(3, _c17), \u0275\u0275pureFunction0(4, _c18)));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pureFunction3(12, _c14, \u0275\u0275pureFunction0(9, _c19), \u0275\u0275pureFunction0(10, _c20), \u0275\u0275pureFunction0(11, _c21)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_13_0 = ctx_r0.appForm.get("publishing.feeType")) == null ? null : tmp_13_0.value) !== "free" ? 17 : -1);
  }
}
function AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "URL is required");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div")(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 91);
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Conditional_4_Conditional_5_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_27_0;
    const screen_r15 = \u0275\u0275nextContext(2).$implicit;
    const control_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("formGroup", control_r16);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "base-url-" + screen_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Base URL for ", screen_r15.name, " *");
    \u0275\u0275advance();
    \u0275\u0275property("id", "base-url-" + screen_r15.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_27_0 = control_r16.get("baseUrl")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = control_r16.get("baseUrl")) == null ? null : tmp_27_0.touched) ? 5 : -1);
  }
}
function AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "p-checkbox", 87);
    \u0275\u0275listener("onChange", function AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Template_p_checkbox_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const screen_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleIntegrationPoint(screen_r15.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Conditional_4_Template, 6, 5, "div", 89);
  }
  if (rf & 2) {
    const screen_r15 = \u0275\u0275nextContext().$implicit;
    const control_r16 = \u0275\u0275readContextLet(0);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", screen_r15.id)("binary", true)("ngModel", ctx_r0.isScreenSelected(screen_r15.id))("ngModelOptions", \u0275\u0275pureFunction0(7, _c15));
    \u0275\u0275advance();
    \u0275\u0275property("for", screen_r15.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(screen_r15.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isScreenSelected(screen_r15.id) && control_r16 ? 4 : -1);
  }
}
function AppCreateWizardComponent_ng_template_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "p-card");
    \u0275\u0275template(2, AppCreateWizardComponent_ng_template_20_For_6_ng_template_2_Template, 5, 8, "ng-template", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const screen_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r0.getIntegrationPointControl(screen_r15.id));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.isScreenSelected(screen_r15.id) ? "border-primary" : "");
  }
}
function AppCreateWizardComponent_ng_template_20_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 60);
    \u0275\u0275text(1, "Please select at least one integration point and fill in the URLs.");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 84);
    \u0275\u0275text(2, " Where will your app integrate with CypherView? Provide the Base URL for each selected point. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 56)(4, "div", 85);
    \u0275\u0275repeaterCreate(5, AppCreateWizardComponent_ng_template_20_For_6_Template, 3, 3, "p-card", 74, _forTrack1);
    \u0275\u0275conditionalCreate(7, AppCreateWizardComponent_ng_template_20_Conditional_7_Template, 2, 0, "small", 60);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.appForm);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.availableScreens);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.integrationPoints.invalid && ctx_r0.integrationPoints.touched ? 7 : -1);
  }
}
function AppCreateWizardComponent_ng_template_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1, "No integration points selected. Add at least one above.");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_22_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "p", 97);
    \u0275\u0275element(2, "i", 98);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-permissions-picker", 99);
    \u0275\u0275listener("valueChange", function AppCreateWizardComponent_ng_template_22_Conditional_6_For_2_Template_app_permissions_picker_valueChange_4_listener($event) {
      let tmp_22_0;
      const point_r18 = \u0275\u0275restoreView(_r17).$implicit;
      return \u0275\u0275resetView((tmp_22_0 = point_r18.get("requiredPermissions")) == null ? null : tmp_22_0.setValue($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const point_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatScreenId(point_r18.value.screenId), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ((tmp_22_0 = point_r18.get("requiredPermissions")) == null ? null : tmp_22_0.value) ?? \u0275\u0275pureFunction0(2, _c22));
  }
}
function AppCreateWizardComponent_ng_template_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275repeaterCreate(1, AppCreateWizardComponent_ng_template_22_Conditional_6_For_2_Template, 5, 3, "div", 96, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.integrationPoints.controls);
  }
}
function AppCreateWizardComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "p", 70);
    \u0275\u0275text(2, " Choose which capabilities your app needs. Installers review this list before accepting. ");
    \u0275\u0275elementStart(3, "span", 93);
    \u0275\u0275text(4, "Greyed-out capabilities exceed your own permissions and cannot be requested.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_22_Conditional_5_Template, 2, 0, "p", 94)(6, AppCreateWizardComponent_ng_template_22_Conditional_6_Template, 3, 0, "div", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.integrationPoints.length === 0 ? 5 : 6);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r0.existingAppData()) == null ? null : tmp_12_0.name);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r0.existingAppData()) == null ? null : tmp_12_0.shortDescription);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_12_0 = ctx_r0.existingAppData()) == null ? null : tmp_12_0.description);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx_r0.existingAppData()) == null ? null : tmp_13_0.healthCheckUrl);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 109);
    \u0275\u0275text(2, " Health Check ");
    \u0275\u0275conditionalCreate(3, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Conditional_3_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Conditional_4_Template, 3, 1, "p", 111);
    \u0275\u0275elementStart(5, "code", 119);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_12_0 = ctx_r0.changedFields()) == null ? null : tmp_12_0.healthCheckUrl) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r0.changedFields()) == null ? null : tmp_13_0.healthCheckUrl) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_14_0 = ctx_r0.changedFields()) == null ? null : tmp_14_0.healthCheckUrl)("border-amber-400", (tmp_15_0 = ctx_r0.changedFields()) == null ? null : tmp_15_0.healthCheckUrl)("pl-2", (tmp_16_0 = ctx_r0.changedFields()) == null ? null : tmp_16_0.healthCheckUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_17_0 = ctx_r0.formValue()) == null ? null : tmp_17_0.basicInfo == null ? null : tmp_17_0.basicInfo.healthCheckUrl);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_13_0 = ctx_r0.existingAppData()) == null ? null : tmp_13_0.iconUrl);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 109);
    \u0275\u0275text(2, " Icon URL ");
    \u0275\u0275conditionalCreate(3, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Conditional_3_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Conditional_4_Template, 3, 1, "p", 111);
    \u0275\u0275elementStart(5, "code", 120);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_12_0 = ctx_r0.changedFields()) == null ? null : tmp_12_0.iconUrl) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_13_0 = ctx_r0.changedFields()) == null ? null : tmp_13_0.iconUrl) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_14_0 = ctx_r0.changedFields()) == null ? null : tmp_14_0.iconUrl)("border-amber-400", (tmp_15_0 = ctx_r0.changedFields()) == null ? null : tmp_15_0.iconUrl)("pl-2", (tmp_16_0 = ctx_r0.changedFields()) == null ? null : tmp_16_0.iconUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_17_0 = ctx_r0.formValue()) == null ? null : tmp_17_0.basicInfo == null ? null : tmp_17_0.basicInfo.iconUrl);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const origPoint_r20 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(origPoint_r20 == null ? null : origPoint_r20.baseUrl);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 125);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 121)(2, "p", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Conditional_4_Template, 2, 1, "code", 123);
    \u0275\u0275elementStart(5, "code", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Conditional_7_Template, 1, 0, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const point_r21 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    const origPoint_r22 = \u0275\u0275storeLet(ctx_r0.getOriginalIntegrationPoint(point_r21.screenId));
    const urlChanged_r23 = ((tmp_22_0 = ctx_r0.changedFields()) == null ? null : tmp_22_0.integrationPoints) && !!origPoint_r22 && origPoint_r22.baseUrl !== point_r21.baseUrl;
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", urlChanged_r23)("border-amber-400", urlChanged_r23);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r21.screenId);
    \u0275\u0275advance();
    \u0275\u0275conditional(urlChanged_r23 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r21.baseUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(point_r21.requiredPermissions.length ? 7 : -1);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1, "None selected");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "div")(3, "span", 109);
    \u0275\u0275text(4, " App Name ");
    \u0275\u0275conditionalCreate(5, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_5_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_6_Template, 2, 1, "p", 111);
    \u0275\u0275elementStart(7, "span", 112);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "span", 109);
    \u0275\u0275text(11, " Short Description ");
    \u0275\u0275conditionalCreate(12, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_12_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_13_Template, 2, 1, "p", 111);
    \u0275\u0275elementStart(14, "span", 113);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "span", 109);
    \u0275\u0275text(18, " Full Description ");
    \u0275\u0275conditionalCreate(19, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_19_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_20_Template, 2, 1, "p", 114);
    \u0275\u0275elementStart(21, "p", 115);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_23_Template, 7, 9, "div");
    \u0275\u0275conditionalCreate(24, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_24_Template, 7, 9, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 108)(26, "div")(27, "span", 109);
    \u0275\u0275text(28, " Integrations ");
    \u0275\u0275conditionalCreate(29, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_29_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 116);
    \u0275\u0275repeaterCreate(31, AppCreateWizardComponent_ng_template_24_ng_template_2_For_32_Template, 8, 9, "div", 117, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(33, AppCreateWizardComponent_ng_template_24_ng_template_2_Conditional_33_Template, 2, 0, "span", 118);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_33_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r0.changedFields()) == null ? null : tmp_11_0.name) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r0.changedFields()) == null ? null : tmp_12_0.name) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_13_0 = ctx_r0.changedFields()) == null ? null : tmp_13_0.name)("border-amber-400", (tmp_14_0 = ctx_r0.changedFields()) == null ? null : tmp_14_0.name)("pl-2", (tmp_15_0 = ctx_r0.changedFields()) == null ? null : tmp_15_0.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_16_0 = ctx_r0.formValue()) == null ? null : tmp_16_0.basicInfo == null ? null : tmp_16_0.basicInfo.name);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_17_0 = ctx_r0.changedFields()) == null ? null : tmp_17_0.shortDescription) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r0.changedFields()) == null ? null : tmp_18_0.shortDescription) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_19_0 = ctx_r0.changedFields()) == null ? null : tmp_19_0.shortDescription)("border-amber-400", (tmp_20_0 = ctx_r0.changedFields()) == null ? null : tmp_20_0.shortDescription)("pl-2", (tmp_21_0 = ctx_r0.changedFields()) == null ? null : tmp_21_0.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_22_0 = ctx_r0.formValue()) == null ? null : tmp_22_0.basicInfo == null ? null : tmp_22_0.basicInfo.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_23_0 = ctx_r0.changedFields()) == null ? null : tmp_23_0.description) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_24_0 = ctx_r0.changedFields()) == null ? null : tmp_24_0.description) ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_25_0 = ctx_r0.changedFields()) == null ? null : tmp_25_0.description)("border-amber-400", (tmp_26_0 = ctx_r0.changedFields()) == null ? null : tmp_26_0.description)("pl-2", (tmp_27_0 = ctx_r0.changedFields()) == null ? null : tmp_27_0.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_28_0 = ctx_r0.formValue()) == null ? null : tmp_28_0.basicInfo == null ? null : tmp_28_0.basicInfo.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_29_0 = ctx_r0.formValue()) == null ? null : tmp_29_0.basicInfo == null ? null : tmp_29_0.basicInfo.healthCheckUrl) || ((tmp_29_0 = ctx_r0.existingAppData()) == null ? null : tmp_29_0.healthCheckUrl) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_30_0 = ctx_r0.formValue()) == null ? null : tmp_30_0.basicInfo == null ? null : tmp_30_0.basicInfo.iconUrl) || ((tmp_30_0 = ctx_r0.existingAppData()) == null ? null : tmp_30_0.iconUrl) ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_31_0 = ctx_r0.changedFields()) == null ? null : tmp_31_0.integrationPoints) ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_32_0 = ctx_r0.formValue()) == null ? null : tmp_32_0.integration == null ? null : tmp_32_0.integration.points);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_33_0 = ctx_r0.formValue()) == null ? null : tmp_33_0.integration == null ? null : tmp_33_0.integration.points == null ? null : tmp_33_0.integration.points.length) ? 33 : -1);
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
    \u0275\u0275text(2, "Publishing");
    \u0275\u0275elementEnd()();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Global ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Our Operations ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Unlisted ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1, "Changed");
    \u0275\u0275elementEnd();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Free ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFeePreviewLabel(((tmp_12_0 = ctx_r0.formValue()) == null ? null : tmp_12_0.publishing == null ? null : tmp_12_0.publishing.feeType) ?? "", ((tmp_12_0 = ctx_r0.formValue()) == null ? null : tmp_12_0.publishing == null ? null : tmp_12_0.publishing.feeAmount) ?? null), " ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div")(2, "span", 109);
    \u0275\u0275text(3, " Visibility ");
    \u0275\u0275conditionalCreate(4, AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_4_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 128);
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_24_ng_template_5_Case_6_Template, 1, 0)(7, AppCreateWizardComponent_ng_template_24_ng_template_5_Case_7_Template, 1, 0)(8, AppCreateWizardComponent_ng_template_24_ng_template_5_Case_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "span", 109);
    \u0275\u0275text(11, " Fee ");
    \u0275\u0275conditionalCreate(12, AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_12_Template, 2, 0, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 128);
    \u0275\u0275conditionalCreate(14, AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_14_Template, 1, 0)(15, AppCreateWizardComponent_ng_template_24_ng_template_5_Conditional_15_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_11_0 = ctx_r0.changedFields()) == null ? null : tmp_11_0.visibility) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_12_0 = ctx_r0.changedFields()) == null ? null : tmp_12_0.visibility)("border-amber-400", (tmp_13_0 = ctx_r0.changedFields()) == null ? null : tmp_13_0.visibility)("pl-2", (tmp_14_0 = ctx_r0.changedFields()) == null ? null : tmp_14_0.visibility);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = (tmp_15_0 = ctx_r0.formValue()) == null ? null : tmp_15_0.publishing == null ? null : tmp_15_0.publishing.visibility) === "global" ? 6 : tmp_15_0 === "ourOperations" ? 7 : tmp_15_0 === "unlisted" ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_16_0 = ctx_r0.changedFields()) == null ? null : tmp_16_0.feeModel) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-l-2", (tmp_17_0 = ctx_r0.changedFields()) == null ? null : tmp_17_0.feeModel)("border-amber-400", (tmp_18_0 = ctx_r0.changedFields()) == null ? null : tmp_18_0.feeModel)("pl-2", (tmp_19_0 = ctx_r0.changedFields()) == null ? null : tmp_19_0.feeModel);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_20_0 = ctx_r0.formValue()) == null ? null : tmp_20_0.publishing == null ? null : tmp_20_0.publishing.feeType) === "free" ? 14 : 15);
  }
}
function AppCreateWizardComponent_ng_template_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275elementStart(2, "p", 130)(3, "strong");
    \u0275\u0275text(4, "Your app is Unlisted with a fee.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Only invited organisations can install it. Make sure you've set up invites before publishing. ");
    \u0275\u0275elementEnd()();
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Please ensure all changes are correct before updating your app. ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Your app will be submitted to the review team. This usually takes 24-48 hours. ");
  }
}
function AppCreateWizardComponent_ng_template_24_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275elementStart(2, "div")(3, "p", 133);
    \u0275\u0275text(4, "Final Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 134);
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_24_ng_template_8_Conditional_6_Template, 1, 0)(7, AppCreateWizardComponent_ng_template_24_ng_template_8_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.isEditMode() ? 6 : 7);
  }
}
function AppCreateWizardComponent_ng_template_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275element(1, "i", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.submissionError(), " ");
  }
}
function AppCreateWizardComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "p-card", 101);
    \u0275\u0275template(2, AppCreateWizardComponent_ng_template_24_ng_template_2_Template, 34, 31, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-card", 101);
    \u0275\u0275template(4, AppCreateWizardComponent_ng_template_24_ng_template_4_Template, 3, 0, "ng-template", 102)(5, AppCreateWizardComponent_ng_template_24_ng_template_5_Template, 16, 16, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AppCreateWizardComponent_ng_template_24_Conditional_6_Template, 6, 0, "div", 103);
    \u0275\u0275elementStart(7, "p-card", 104);
    \u0275\u0275template(8, AppCreateWizardComponent_ng_template_24_ng_template_8_Template, 8, 1, "ng-template", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 105);
    \u0275\u0275conditionalCreate(10, AppCreateWizardComponent_ng_template_24_Conditional_10_Template, 3, 1, "span", 106);
    \u0275\u0275elementStart(11, "p-button", 14);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_24_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveDraft());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 15);
    \u0275\u0275listener("onClick", function AppCreateWizardComponent_ng_template_24_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSubmitVersionDialog());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_10_0 = ctx_r0.formValue()) == null ? null : tmp_10_0.publishing == null ? null : tmp_10_0.publishing.visibility) === "unlisted" && ((tmp_10_0 = ctx_r0.formValue()) == null ? null : tmp_10_0.publishing == null ? null : tmp_10_0.publishing.feeType) !== "free" ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.submissionError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("loading", ctx_r0.isSubmitting() && ctx_r0.submitAction === "draft")("disabled", !ctx_r0.appForm.valid || ctx_r0.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.isSubmitting() && ctx_r0.submitAction === "review")("disabled", !ctx_r0.appForm.valid || ctx_r0.isSubmitting());
  }
}
var AppCreateWizardComponent = class _AppCreateWizardComponent {
  wizardPanelTemplate;
  previewPanelTemplate;
  gettingStartedStep;
  basicInfoStep;
  publishingStep;
  integrationPointsStep;
  permissionsStep;
  reviewStep;
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  appStoreService = inject(AppStoreService);
  appVersionService = inject(AppVersionService);
  modalFormService = inject(ModalFormService);
  destroyRef = inject(DestroyRef);
  userSessionService = inject(UserSessionService);
  clientDataService = inject(ClientDataService);
  location = inject(Location);
  layoutService = inject(LayoutService);
  isMobile = this.layoutService.isMobile;
  panels = signal([], ...ngDevMode ? [{ debugName: "panels" }] : (
    /* istanbul ignore next */
    []
  ));
  steps = signal([], ...ngDevMode ? [{ debugName: "steps" }] : (
    /* istanbul ignore next */
    []
  ));
  currentStep = signal(1, ...ngDevMode ? [{ debugName: "currentStep" }] : (
    /* istanbul ignore next */
    []
  ));
  visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  isLastStep = computed(() => this.steps().length > 0 && this.currentStep() === this.steps().at(-1)?.value, ...ngDevMode ? [{ debugName: "isLastStep" }] : (
    /* istanbul ignore next */
    []
  ));
  prevStepValue = computed(() => {
    const idx = this.steps().findIndex((s) => s.value === this.currentStep());
    return idx > 0 ? this.steps()[idx - 1].value : null;
  }, ...ngDevMode ? [{ debugName: "prevStepValue" }] : (
    /* istanbul ignore next */
    []
  ));
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  submissionError = signal(null, ...ngDevMode ? [{ debugName: "submissionError" }] : (
    /* istanbul ignore next */
    []
  ));
  submittedApp = signal(null, ...ngDevMode ? [{ debugName: "submittedApp" }] : (
    /* istanbul ignore next */
    []
  ));
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : (
    /* istanbul ignore next */
    []
  ));
  existingAppId = null;
  existingAppData = signal(null, ...ngDevMode ? [{ debugName: "existingAppData" }] : (
    /* istanbul ignore next */
    []
  ));
  draftVersion = signal(null, ...ngDevMode ? [{ debugName: "draftVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  baselineVersion = signal(null, ...ngDevMode ? [{ debugName: "baselineVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  appForm;
  formValue;
  submitAction = null;
  pendingBumpType = signal(null, ...ngDevMode ? [{ debugName: "pendingBumpType" }] : (
    /* istanbul ignore next */
    []
  ));
  pendingChangelog = signal(null, ...ngDevMode ? [{ debugName: "pendingChangelog" }] : (
    /* istanbul ignore next */
    []
  ));
  availableScreens = AVAILABLE_SCREENS;
  Object = Object;
  previewData = computed(() => {
    const fv = this.formValue();
    const session = this.userSessionService.currentUserSession();
    return {
      name: fv?.basicInfo.name ?? "",
      shortDescription: fv?.basicInfo.shortDescription ?? "",
      description: fv?.basicInfo.description ?? "",
      iconUrl: fv?.basicInfo.iconUrl,
      developerName: session?.name ?? "You",
      visibility: fv?.publishing.visibility ?? "global",
      feeModel: this.toFeeModel(fv?.publishing.feeType, fv?.publishing.feeAmount),
      integrationPoints: fv?.integration.points ?? [],
      hasHealthCheck: isDefined(fv?.basicInfo.healthCheckUrl) && fv.basicInfo.healthCheckUrl !== ""
    };
  }, ...ngDevMode ? [{ debugName: "previewData" }] : (
    /* istanbul ignore next */
    []
  ));
  changedFields = computed(() => {
    if (!this.isEditMode())
      return null;
    const orig = this.existingAppData();
    const fv = this.formValue();
    const baselineVersion = this.baselineVersion();
    const baseline = baselineVersion ?? (isNullOrUndefined(orig?.version.activeVersionId) ? null : orig);
    if (!baseline)
      return null;
    return {
      name: fv?.basicInfo.name !== baseline.name,
      shortDescription: fv?.basicInfo.shortDescription !== baseline.shortDescription,
      description: fv?.basicInfo.description !== baseline.description,
      iconUrl: fv?.basicInfo.iconUrl !== baseline.iconUrl,
      healthCheckUrl: fv?.basicInfo.healthCheckUrl !== (baseline.healthCheckUrl ?? ""),
      integrationPoints: !isEqual_default(fv?.integration.points, baseline.integrationPoints),
      visibility: fv?.publishing.visibility !== baseline.visibility,
      feeModel: !isEqual_default(this.toFeeModel(fv?.publishing.feeType, fv?.publishing.feeAmount), baseline.feeModel)
    };
  }, ...ngDevMode ? [{ debugName: "changedFields" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.appForm = this.fb.group({
      basicInfo: this.fb.group({
        name: ["", Validators.required],
        shortDescription: [
          "",
          [Validators.required, Validators.maxLength(100)]
        ],
        description: ["", Validators.required],
        iconUrl: [""],
        healthCheckUrl: ["", [Validators.pattern("https?://.+")]]
      }),
      publishing: this.fb.group({
        visibility: ["global"],
        feeType: ["free"],
        feeAmount: [null]
      }),
      integration: this.fb.group({
        points: this.fb.array([], Validators.required)
      })
    });
    this.appForm.get("publishing.feeType")?.valueChanges.subscribe((feeType) => {
      const feeAmountCtrl = this.appForm.get("publishing.feeAmount");
      if (feeType === "free") {
        feeAmountCtrl?.clearValidators();
        feeAmountCtrl?.setValue(null);
      } else {
        feeAmountCtrl?.setValidators([Validators.required, Validators.min(0.01)]);
      }
      feeAmountCtrl?.updateValueAndValidity();
    });
    this.formValue = toSignal(this.appForm.valueChanges.pipe(startWith(null), map(() => this.appForm.value)));
    this.bootstrapEditContext();
  }
  get integrationPoints() {
    return this.appForm.get("integration.points");
  }
  toggleIntegrationPoint(screenId, event) {
    const isChecked = event.checked;
    const existingIndex = this.integrationPoints.controls.findIndex((x) => x.value.screenId === screenId);
    if (isChecked) {
      if (existingIndex === -1) {
        this.integrationPoints.push(this.fb.group({
          screenId: [screenId],
          baseUrl: [
            "",
            [Validators.required]
          ],
          requiredPermissions: [[]]
        }));
      }
    } else if (existingIndex >= 0) {
      this.integrationPoints.removeAt(existingIndex);
    }
  }
  isScreenSelected(screenId) {
    return this.integrationPoints.controls.some((x) => x.value.screenId === screenId);
  }
  getIntegrationPointControl(screenId) {
    return this.integrationPoints.controls.find((x) => x.value.screenId === screenId);
  }
  getOriginalIntegrationPoint(screenId) {
    return this.existingAppData()?.integrationPoints.find((p) => p.screenId === screenId);
  }
  ngAfterViewInit() {
    const isCreate = !this.isEditMode();
    const allSteps = [
      ...isCreate ? [{ value: 1, header: "Getting Started", content: this.gettingStartedStep, disableNext: false }] : [],
      { value: isCreate ? 2 : 1, header: "Basic Info", content: this.basicInfoStep, disableNext: true },
      { value: isCreate ? 3 : 2, header: "Publishing", content: this.publishingStep, disableNext: true },
      { value: isCreate ? 4 : 3, header: "Integration Points", content: this.integrationPointsStep, disableNext: true },
      { value: isCreate ? 5 : 4, header: "Permissions", content: this.permissionsStep, disableNext: false },
      { value: isCreate ? 6 : 5, header: "Review", content: this.reviewStep, disableNext: false, hideDefaultFooter: true }
    ];
    this.steps.set(allSteps);
    this.updateStepStates();
    this.appForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateStepStates());
    this.panels.set([
      { content: this.wizardPanelTemplate, scrollable: true },
      { content: this.previewPanelTemplate, scrollable: true }
    ]);
  }
  updateStepStates() {
    this.steps.update((steps) => steps.map((step) => {
      if (step.header === "Basic Info") {
        return __spreadProps(__spreadValues({}, step), { disableNext: this.appForm.get("basicInfo")?.invalid ?? true });
      }
      if (step.header === "Publishing") {
        return __spreadProps(__spreadValues({}, step), { disableNext: this.appForm.get("publishing")?.invalid ?? true });
      }
      if (step.header === "Integration Points") {
        return __spreadProps(__spreadValues({}, step), { disableNext: this.appForm.get("integration")?.invalid ?? true });
      }
      return step;
    }));
  }
  onWizardComplete() {
    this.submit();
  }
  onWizardCancel() {
    this.location.back();
  }
  saveDraft() {
    this.submitAction = "draft";
    this.submit();
  }
  openSubmitVersionDialog() {
    const isFirstSubmission = this.existingAppData()?.version.activeVersionId == null;
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    const modalFields = [
      ...isFirstSubmission ? [] : [
        createDropdownField("bumpType", "Version Bump", [
          { label: "Patch \u2014 bug fixes, no new features", value: "patch" },
          {
            label: "Minor \u2014 new features, backward compatible",
            value: "minor"
          },
          { label: "Major \u2014 breaking changes", value: "major" }
        ], void 0, {
          validations: [
            { name: "required", validator: Validators.required }
          ]
        })
      ],
      createTextAreaField("changelog", "Changelog", void 0, {
        placeholder: "Describe what changed in this version...",
        validations: [{ name: "required", validator: Validators.required }]
      })
    ];
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: "Submit New Version",
        modalFields,
        onSubmit: (data, ref) => new Promise((resolve) => {
          this.pendingBumpType.set(isFirstSubmission ? "patch" : data["bumpType"]);
          this.pendingChangelog.set(data["changelog"]);
          ref.close();
          this.submitAction = "review";
          this.submit();
          resolve(true);
        })
      },
      itemData: { bumpType: "", changelog: "" },
      destroyRef: this.destroyRef,
      field: dummyField
    }).subscribe();
  }
  submit() {
    if (!this.appForm.valid || this.isSubmitting()) {
      return;
    }
    this.submissionError.set(null);
    this.isSubmitting.set(true);
    const formValue = this.appForm.value;
    const action = this.submitAction || "draft";
    if (isDefined(this.existingAppId) && this.existingAppData()) {
      this.handleEditSubmit(formValue, action);
    } else {
      this.handleCreateSubmit(formValue, action);
    }
  }
  handleEditSubmit(formValue, action) {
    if (!isDefined(this.existingAppId))
      return;
    if (action === "draft") {
      const draft = this.draftVersion();
      if (!isDefined(draft)) {
        this.submissionError.set("No draft version found to update.");
        this.isSubmitting.set(false);
        return;
      }
      this.appVersionService.updateVersion(this.existingAppId, draft.id, {
        name: formValue.basicInfo.name,
        description: formValue.basicInfo.description,
        shortDescription: formValue.basicInfo.shortDescription,
        iconUrl: formValue.basicInfo.iconUrl,
        healthCheckUrl: formValue.basicInfo.healthCheckUrl,
        integrationPoints: formValue.integration.points.map((p) => ({
          screenId: p.screenId,
          requiredPermissions: p.requiredPermissions,
          baseUrl: p.baseUrl
        }))
      }).pipe(tap((updated) => {
        this.draftVersion.set(updated);
        this.visible.set(false);
        this.router.navigate(["/app-store/my-created-apps"]).catch(() => {
        });
      }), catchError(() => {
        this.submissionError.set("Could not update your draft. Please try again.");
        return of(null);
      }), finalize(() => {
        this.isSubmitting.set(false);
        this.submitAction = null;
      })).subscribe();
      return;
    }
    const bumpType = this.pendingBumpType();
    const changelog = this.pendingChangelog();
    if (!isDefined(bumpType) || !isDefined(changelog)) {
      this.isSubmitting.set(false);
      return;
    }
    const changed = this.changedFields();
    const payload = { bumpType, changelog };
    if (isDefined(changed)) {
      if (changed.name)
        payload.name = formValue.basicInfo.name;
      if (changed.description)
        payload.description = formValue.basicInfo.description;
      if (changed.shortDescription)
        payload.shortDescription = formValue.basicInfo.shortDescription;
      if (changed.iconUrl)
        payload.iconUrl = formValue.basicInfo.iconUrl;
      if (changed.healthCheckUrl)
        payload.healthCheckUrl = formValue.basicInfo.healthCheckUrl;
      if (changed.integrationPoints)
        payload.integrationPoints = formValue.integration.points.map((p) => ({
          screenId: p.screenId,
          requiredPermissions: p.requiredPermissions,
          baseUrl: p.baseUrl
        }));
      if (changed.visibility)
        payload.visibility = formValue.publishing.visibility;
      if (changed.feeModel)
        payload.feeModel = this.toFeeModel(formValue.publishing.feeType, formValue.publishing.feeAmount);
    }
    this.appVersionService.submitVersion(this.existingAppId, payload).pipe(tap(() => {
      const existingApp = this.existingAppData();
      if (isDefined(existingApp)) {
        this.submittedApp.set(existingApp);
        this.visible.set(false);
      }
    }), catchError(() => {
      this.submissionError.set("Could not submit your app version. Please try again.");
      return of(null);
    }), finalize(() => {
      this.isSubmitting.set(false);
      this.submitAction = null;
      this.pendingBumpType.set(null);
      this.pendingChangelog.set(null);
    })).subscribe();
  }
  handleCreateSubmit(formValue, action) {
    const user = this.userSessionService.currentUserSession();
    const payload = __spreadProps(__spreadValues({}, formValue.basicInfo), {
      iconUrl: formValue.basicInfo.iconUrl ?? "assets/default-app-icon.png",
      developerId: user?.id ?? "unknown-user",
      developerName: user?.name ?? "Unknown Developer",
      integrationPoints: formValue.integration.points,
      categories: ["Productivity"],
      tags: [],
      visibility: formValue.publishing.visibility,
      feeModel: this.toFeeModel(formValue.publishing.feeType, formValue.publishing.feeAmount)
    });
    this.appStoreService.createApp(payload).pipe(switchMap((createdApp) => {
      const bumpType = this.pendingBumpType();
      const changelog = this.pendingChangelog();
      if (action === "review" && isDefined(bumpType) && isDefined(changelog)) {
        return this.appVersionService.submitVersion(createdApp.id, { bumpType, changelog }).pipe(map(() => createdApp), catchError(() => of(createdApp)));
      }
      return of(createdApp);
    }), tap((app) => {
      if (isDefined(app)) {
        this.submittedApp.set(app);
        this.visible.set(false);
      }
    }), catchError(() => {
      this.submissionError.set("Could not save your app. Please try again.");
      return of(null);
    }), finalize(() => {
      this.isSubmitting.set(false);
      this.submitAction = null;
      this.pendingBumpType.set(null);
      this.pendingChangelog.set(null);
    })).subscribe();
  }
  toFeeModel(feeType, feeAmount) {
    if (isNullOrUndefined(feeType) || feeType === "free" || isNullOrUndefined(feeAmount) || feeAmount <= 0) {
      return null;
    }
    return { type: feeType, amount: feeAmount };
  }
  getFeePreviewLabel(feeType, feeAmount) {
    if (isNullOrUndefined(feeAmount) || feeAmount <= 0 || feeType === "free")
      return "";
    const formatted = formatCurrency(feeAmount, "en-ZA", "R", "ZAR");
    if (feeType === "perActiveDevice") {
      const example = formatCurrency(feeAmount * 200, "en-ZA", "R", "ZAR");
      return `e.g. an org with 200 active devices would pay ${example}`;
    }
    return `${formatted} per installation`;
  }
  formatScreenId(screenId) {
    return screenId.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()).trim();
  }
  goToAppDetail(appId) {
    this.router.navigate(["/app-store", appId]).catch(() => {
    });
  }
  goToMarketplace() {
    this.location.back();
  }
  bootstrapEditContext() {
    const navState = history.state;
    const appFromState = navState?.appToEdit;
    const appIdFromQuery = this.route.snapshot.queryParamMap.get("appId");
    if (appFromState) {
      this.enterEditMode(appFromState);
      return;
    }
    if (isDefined(appIdFromQuery)) {
      this.loadAppForEdit(appIdFromQuery);
    }
  }
  loadAppForEdit(appId) {
    this.appStoreService.getAppById(appId, this.clientDataService.getSelectedClient()?.id ?? "").pipe(tap((app) => {
      if (app) {
        this.enterEditMode(app);
      }
    }), catchError(() => {
      this.submissionError.set("Could not load the app to edit.");
      return of(null);
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  enterEditMode(app) {
    this.existingAppId = app.id;
    this.existingAppData.set(__spreadValues({}, app));
    this.isEditMode.set(true);
    this.appVersionService.getVersions(app.id).pipe(tap((versions) => {
      const draft = versions.find((v) => v.status === "draft") ?? null;
      this.draftVersion.set(draft);
      const isPreFirstApproval = isNullOrUndefined(app.version.activeVersionId);
      const latestVersion = versions.at(0) ?? null;
      const versionSource = draft ?? (isPreFirstApproval ? latestVersion : null);
      this.baselineVersion.set(versionSource);
      const source = versionSource ?? (!isPreFirstApproval ? app : null);
      if (!source)
        return;
      const srcFeeModel = source.feeModel;
      this.appForm.patchValue({
        basicInfo: {
          name: source.name,
          shortDescription: source.shortDescription,
          description: source.description,
          iconUrl: source.iconUrl,
          healthCheckUrl: source.healthCheckUrl ?? ""
        },
        publishing: {
          visibility: source.visibility ?? "global",
          feeType: srcFeeModel?.type ?? "free",
          feeAmount: srcFeeModel?.amount ?? null
        }
      });
      this.integrationPoints.clear();
      source.integrationPoints.forEach((point) => {
        this.integrationPoints.push(this.fb.group({
          screenId: [point.screenId],
          baseUrl: [
            point.baseUrl,
            [Validators.required]
          ],
          requiredPermissions: [point.requiredPermissions]
        }));
      });
      this.updateStepStates();
    }), catchError(() => {
      if (isNullOrUndefined(app.version.activeVersionId)) {
        return of([]);
      }
      const appFeeModel = app.feeModel;
      this.appForm.patchValue({
        basicInfo: {
          name: app.name,
          shortDescription: app.shortDescription,
          description: app.description,
          iconUrl: app.iconUrl,
          healthCheckUrl: app.healthCheckUrl ?? ""
        },
        publishing: {
          visibility: app.visibility ?? "global",
          feeType: appFeeModel?.type ?? "free",
          feeAmount: appFeeModel?.amount ?? null
        }
      });
      this.integrationPoints.clear();
      app.integrationPoints.forEach((point) => {
        this.integrationPoints.push(this.fb.group({
          screenId: [point.screenId],
          baseUrl: [
            point.baseUrl,
            [Validators.required]
          ],
          requiredPermissions: [point.requiredPermissions]
        }));
      });
      this.updateStepStates();
      return of([]);
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  static \u0275fac = function AppCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreateWizardComponent, selectors: [["app-create-wizard"]], viewQuery: function AppCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wizardPanelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.previewPanelTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.gettingStartedStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.publishingStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.integrationPointsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.permissionsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reviewStep = _t.first);
    }
  }, decls: 26, vars: 8, consts: [["wizardPanel", ""], ["previewPanel", ""], ["gettingStartedStep", ""], ["basicInfoStep", ""], ["publishingStep", ""], ["integrationPointsStep", ""], ["permissionsStep", ""], ["reviewStep", ""], ["content", ""], [1, "flex", "flex-none", "justify-between", "items-center", "px-6", "py-4", "border-b", "border-subtle", "bg-surface-0"], [1, "flex", "gap-3", "items-center"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Go back", 3, "onClick", "text"], [1, "text-lg", "font-semibold"], [1, "hidden", "gap-2", "lg:flex"], ["label", "Save Draft", "icon", "pi pi-save", "severity", "secondary", 3, "onClick", "outlined", "loading", "disabled"], ["label", "Submit for Review", "icon", "pi pi-send", "severity", "primary", 3, "onClick", "loading", "disabled"], [1, "overflow-hidden", "flex-1"], ["stateKey", "app-editor-splitter", "height", "100%", 3, "panels", "panelSizes"], [1, "flex", "overflow-y-auto", "flex-col", "h-full"], [1, "w-full", 3, "valueChange", "value", "linear"], [3, "value"], [1, "flex-none", "p-4", "border-t", "border-subtle", "bg-surface-0"], [1, "flex", "flex-col"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "gap-2", "px-6", "pt-2", "pb-6"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "disabled"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "disabled"], [1, "bg-surface-0", "border-left-3", "surface-border"], ["pTemplate", "content"], [1, "flex", "gap-3", "items-start"], [1, "text-xl", "text-green-600", "pi", "pi-check-circle"], [1, "space-y-1"], [1, "text-sm", "text-surface-800"], [1, "flex", "gap-2", "mt-2"], ["label", "View App", "icon", "pi pi-eye", "size", "small", 3, "onClick"], ["label", "Back to More Apps", "icon", "pi pi-arrow-left", "severity", "secondary", "size", "small", 3, "onClick"], [1, "overflow-y-auto", "p-6", "h-full", "bg-surface-50"], [3, "data", "isEditMode"], [1, "p-6", "mx-auto", "space-y-6"], [1, "text-sm", "text-surface-600"], [1, "space-y-3"], [1, "flex", "gap-3", "items-center", "p-3", "rounded-lg", "border", "bg-surface-50", "border-subtle"], [3, "binary", "ngModel", "ngModelOptions"], [1, "text-sm"], ["routerLink", "/app-store/docs", "target", "_blank", 1, "underline", "text-primary", "hover:opacity-80"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-3"], [1, "p-4", "rounded-xl", "border", "border-subtle", "bg-surface-0"], [1, "flex", "gap-2", "items-center", "mb-2"], [1, "pi", "pi-info-circle", "text-primary"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-surface-500"], [1, "pi", "pi-globe", "text-primary"], [1, "pi", "pi-link", "text-primary"], [1, "p-6", "mx-auto"], [3, "formGroup"], ["formGroupName", "basicInfo", 1, "space-y-4"], ["for", "app-name", 1, "block", "mb-1", "text-sm", "font-medium"], ["id", "app-name", "pInputText", "", "formControlName", "name", "type", "text", 1, "w-full"], [1, "p-error"], ["for", "app-short-desc", 1, "block", "mb-1", "text-sm", "font-medium"], ["id", "app-short-desc", "pInputText", "", "formControlName", "shortDescription", "type", "text", "placeholder", "Brief summary (max 100 chars)", 1, "w-full"], ["for", "app-desc", 1, "block", "mb-1", "text-sm", "font-medium"], ["id", "app-desc", "pTextarea", "", "formControlName", "description", "rows", "5", 1, "w-full"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["for", "app-icon", 1, "block", "mb-1", "text-sm", "font-medium"], ["id", "app-icon", "pInputText", "", "formControlName", "iconUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], ["for", "health-check-url", 1, "block", "mb-1", "text-sm", "font-medium"], ["id", "health-check-url", "pInputText", "", "formControlName", "healthCheckUrl", "type", "text", "placeholder", "https://...", 1, "w-full"], [1, "pb-3", "mb-6", "text-sm", "border-b", "text-surface-600"], ["formGroupName", "publishing", 1, "space-y-8"], [1, "block", "mb-3", "text-sm", "font-semibold"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-3"], [3, "class"], [1, "mt-4"], [3, "click"], [1, "relative"], [1, "flex", "absolute", "top-0", "right-0", "justify-center", "items-center", "w-5", "h-5", "text-xs", "text-white", "rounded-full", "bg-primary"], [1, "mb-1", "text-sm", "font-semibold"], [1, "pi", "pi-check", "text-[10px]"], ["for", "feeAmount", 1, "block", "mb-1", "text-xs", "font-semibold", "uppercase", "text-surface-500"], ["inputId", "feeAmount", "formControlName", "feeAmount", "mode", "currency", "currency", "ZAR", "locale", "en-ZA", "placeholder", "0.00", 1, "w-full", 3, "minFractionDigits", "min"], [1, "mt-2", "text-xs", "italic", "text-surface-500"], [1, "pb-2", "mb-4", "text-sm", "border-b"], ["formGroupName", "integration", 1, "space-y-4"], [1, "flex", "items-center", "mb-3"], [3, "onChange", "inputId", "binary", "ngModel", "ngModelOptions"], [1, "block", "ml-2", "text-sm", "font-medium", "cursor-pointer", 3, "for"], [1, "pl-7", "space-y-3", 3, "formGroup"], [1, "block", "mb-1", "text-xs", "font-semibold", "uppercase", "text-surface-500", 3, "for"], ["pInputText", "", "formControlName", "baseUrl", "type", "text", "placeholder", "https://api.yourapp.com/widget/", 1, "w-full", "text-sm", 3, "id"], [1, "p-6", "mx-6"], [1, "block", "mt-1", "text-surface-400"], [1, "text-sm", "italic", "text-surface-400"], [1, "space-y-6"], [1, "p-4", "rounded-xl", "border", "border-subtle"], [1, "mb-3", "text-sm", "font-semibold", "text-surface-800"], ["aria-hidden", "true", 1, "mr-2", "pi", "pi-link", "text-primary"], [3, "valueChange", "value"], [1, "p-6", "mx-auto", "space-y-4"], [1, "shadow-sm", "border-surface-200"], ["pTemplate", "header"], [1, "flex", "gap-3", "items-start", "p-4", "bg-amber-50", "rounded-xl", "border", "border-amber-200"], [1, "border-orange-400", "bg-surface-0", "border-left-3", "surface-border"], [1, "flex", "gap-3", "justify-end", "items-center", "pt-2"], [1, "flex", "gap-1", "items-center", "mr-auto", "text-sm", "text-red-600"], [1, "grid", "grid-cols-1", "gap-6", "md:grid-cols-2"], [1, "space-y-4"], [1, "block", "mb-1", "text-xs", "font-semibold", "uppercase", "text-surface-500"], [1, "ml-1", "px-1", "py-0.5", "text-[10px]", "bg-amber-100", "text-amber-700", "rounded", "font-semibold"], [1, "mb-1", "text-xs", "line-through", "text-surface-400"], [1, "text-lg", "font-medium"], [1, "text-sm", "line-clamp-2"], [1, "mb-1", "text-xs", "line-through", "text-surface-400", "line-clamp-2"], [1, "text-sm", "line-clamp-3"], [1, "space-y-2"], [1, "p-2", "rounded-md", "border", "bg-surface-50", 3, "border-l-2", "border-amber-400"], [1, "text-xs", "italic", "p-error"], [1, "text-xs"], [1, "text-xs", "break-all"], [1, "p-2", "rounded-md", "border", "bg-surface-50"], [1, "text-sm", "font-bold"], [1, "text-[10px]", "break-all", "text-surface-400", "line-through", "block"], [1, "text-[10px]", "break-all"], [1, "pt-2", "mt-2", "border-t", "border-subtle"], [1, "px-4", "pt-4"], [1, "text-xs", "font-semibold", "uppercase", "text-surface-500"], [1, "text-sm", "font-medium"], [1, "mt-0.5", "text-amber-500", "pi", "pi-exclamation-triangle"], [1, "text-sm", "text-amber-800"], [1, "flex", "gap-3", "items-start", "text-sm"], [1, "mt-0.5", "text-lg", "text-orange-400", "pi", "pi-exclamation-triangle"], [1, "font-medium", "text-surface-900"], [1, "text-surface-700"], [1, "pi", "pi-times-circle"]], template: function AppCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "p-button", 11);
      \u0275\u0275listener("onClick", function AppCreateWizardComponent_Template_p_button_onClick_2_listener() {
        return ctx.onWizardCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1", 12);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 13)(6, "p-button", 14);
      \u0275\u0275listener("onClick", function AppCreateWizardComponent_Template_p_button_onClick_6_listener() {
        return ctx.saveDraft();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-button", 15);
      \u0275\u0275listener("onClick", function AppCreateWizardComponent_Template_p_button_onClick_7_listener() {
        return ctx.openSubmitVersionDialog();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 16);
      \u0275\u0275conditionalCreate(9, AppCreateWizardComponent_Conditional_9_Template, 1, 4, "app-adaptive-layout", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, AppCreateWizardComponent_ng_template_10_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, AppCreateWizardComponent_ng_template_12_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, AppCreateWizardComponent_ng_template_14_Template, 34, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(16, AppCreateWizardComponent_ng_template_16_Template, 27, 10, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(18, AppCreateWizardComponent_ng_template_18_Template, 18, 16, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(20, AppCreateWizardComponent_ng_template_20_Template, 8, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(22, AppCreateWizardComponent_ng_template_22_Template, 7, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(24, AppCreateWizardComponent_ng_template_24_Template, 13, 7, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode() ? "Edit App" : "Create New App");
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true)("loading", ctx.isSubmitting() && ctx.submitAction === "draft")("disabled", !ctx.appForm.valid || ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.isSubmitting() && ctx.submitAction === "review")("disabled", !ctx.appForm.valid || ctx.isSubmitting());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.panels().length > 0 ? 9 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgTemplateOutlet,
    RouterModule,
    RouterLink,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    ButtonModule,
    Button,
    PrimeTemplate,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    TextareaModule,
    Textarea,
    SelectModule,
    MultiSelectModule,
    CheckboxModule,
    Checkbox,
    CardModule,
    Card,
    AppPermissionsPickerComponent,
    AdaptiveLayoutComponent,
    AppListingPreviewComponent,
    StepperModule,
    Stepper,
    StepPanel,
    StepItem,
    Step
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.card-selected[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--p-primary-color) 8%, transparent);\n}\n/*# sourceMappingURL=app-create-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-create-wizard", imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      InputNumberModule,
      TextareaModule,
      SelectModule,
      MultiSelectModule,
      CheckboxModule,
      CardModule,
      AppPermissionsPickerComponent,
      AdaptiveLayoutComponent,
      AppListingPreviewComponent,
      StepperModule
    ], template: `<!-- Top bar -->
<div class="flex flex-none justify-between items-center px-6 py-4 border-b border-subtle bg-surface-0">
  <div class="flex gap-3 items-center">
    <p-button
      icon="pi pi-arrow-left"
      [text]="true"
      severity="secondary"
      (onClick)="onWizardCancel()"
      pTooltip="Go back"
    />
    <h1 class="text-lg font-semibold">{{ isEditMode() ? 'Edit App' : 'Create New App' }}</h1>
  </div>
  <div class="hidden gap-2 lg:flex">
    <p-button
      label="Save Draft"
      icon="pi pi-save"
      [outlined]="true"
      severity="secondary"
      [loading]="isSubmitting() && submitAction === 'draft'"
      [disabled]="!appForm.valid || isSubmitting()"
      (onClick)="saveDraft()"
    />
    <p-button
      label="Submit for Review"
      icon="pi pi-send"
      severity="primary"
      [loading]="isSubmitting() && submitAction === 'review'"
      [disabled]="!appForm.valid || isSubmitting()"
      (onClick)="openSubmitVersionDialog()"
    />
  </div>
</div>

<!-- Split pane body -->
<div class="overflow-hidden flex-1">
  @if (panels().length > 0) {
    <app-adaptive-layout
      [panels]="isMobile() ? panels().slice(0, 1) : panels()"
      [panelSizes]="isMobile() ? [100] : [60, 40]"
      stateKey="app-editor-splitter"
      height="100%"
    />
  }
</div>

<!-- Wizard panel template -->
<ng-template #wizardPanel>
  <div class="flex overflow-y-auto flex-col h-full">
    <p-stepper
      [value]="currentStep()"
      [linear]="true"
      (valueChange)="$event !== undefined && currentStep.set($event)"
      class="w-full"
    >
      @for (step of steps(); track step.value) {
        <p-step-item [value]="step.value">
          <p-step>{{ step.header }}</p-step>
          <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
              <div class="flex flex-col">
                <ng-container
                  *ngTemplateOutlet="step.content; context: { $implicit: step }"
                ></ng-container>
                @if (!step.hideDefaultFooter) {
                  <div class="flex gap-2 px-6 pt-2 pb-6">
                    @if (step.value > steps()[0].value) {
                      <p-button
                        label="Back"
                        icon="pi pi-arrow-left"
                        severity="secondary"
                        (onClick)="activateCallback(steps()[steps().findIndex(s => s.value === step.value) - 1].value)"
                      />
                    }
                    @if (step.value < steps()[steps().length - 1].value) {
                      <p-button
                        label="Next"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        [disabled]="step.disableNext"
                        (onClick)="activateCallback(steps()[steps().findIndex(s => s.value === step.value) + 1].value)"
                      />
                    }
                  </div>
                }
              </div>
            </ng-template>
          </p-step-panel>
        </p-step-item>
      }
    </p-stepper>

    @if (submittedApp(); as submitted) {
      <div class="flex-none p-4 border-t border-subtle bg-surface-0">
        <p-card class="bg-surface-0 border-left-3 surface-border">
          <ng-template pTemplate="content">
            <div class="flex gap-3 items-start">
              <i class="text-xl text-green-600 pi pi-check-circle"></i>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold">Submitted for review</h3>
                <p class="text-sm text-surface-800">
                  Your app has been sent for approval. We'll notify you when the
                  review is complete.
                </p>
                <div class="flex gap-2 mt-2">
                  <p-button
                    label="View App"
                    icon="pi pi-eye"
                    (onClick)="goToAppDetail(submitted.id)"
                    size="small"
                  />
                  <p-button
                    label="Back to More Apps"
                    icon="pi pi-arrow-left"
                    severity="secondary"
                    (onClick)="goToMarketplace()"
                    size="small"
                  />
                </div>
              </div>
            </div>
          </ng-template>
        </p-card>
      </div>
    }
  </div>
</ng-template>

<!-- Preview panel template -->
<ng-template #previewPanel>
  <div class="overflow-y-auto p-6 h-full bg-surface-50">
    <app-listing-preview [data]="previewData()" [isEditMode]="isEditMode()" />
  </div>
</ng-template>

<!-- Step 1: Getting Started (create mode only) -->
<ng-template #gettingStartedStep let-step>
  <div class="p-6 mx-auto space-y-6">
    <p class="text-sm text-surface-600">
      Check that you're ready before starting. You can proceed without ticking all boxes \u2014 these are for your reference.
    </p>
    <div class="space-y-3">
      @for (item of [
        { label: 'I have a hosted HTTPS endpoint for my integration' },
        { label: 'I have a publicly accessible icon image URL (optional)' },
        { label: 'I understand that submissions go through a review process (24\u201348 hrs)' }
      ]; track $index) {
        <div class="flex gap-3 items-center p-3 rounded-lg border bg-surface-50 border-subtle">
          <p-checkbox [binary]="true" [ngModel]="false" [ngModelOptions]="{standalone: true}" />
          <span class="text-sm">{{ item.label }}</span>
        </div>
      }
      <div class="flex gap-3 items-center p-3 rounded-lg border bg-surface-50 border-subtle">
        <p-checkbox [binary]="true" [ngModel]="false" [ngModelOptions]="{standalone: true}" />
        <span class="text-sm">
          I've read the
          <a routerLink="/app-store/docs" target="_blank" class="underline text-primary hover:opacity-80">integration documentation</a>
        </span>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="p-4 rounded-xl border border-subtle bg-surface-0">
        <div class="flex gap-2 items-center mb-2">
          <i class="pi pi-info-circle text-primary"></i>
          <span class="text-sm font-semibold">Basic Info</span>
        </div>
        <p class="text-xs text-surface-500">Name, description, and icon for your app listing.</p>
      </div>
      <div class="p-4 rounded-xl border border-subtle bg-surface-0">
        <div class="flex gap-2 items-center mb-2">
          <i class="pi pi-globe text-primary"></i>
          <span class="text-sm font-semibold">Publishing</span>
        </div>
        <p class="text-xs text-surface-500">Who can see your app and your pricing model.</p>
      </div>
      <div class="p-4 rounded-xl border border-subtle bg-surface-0">
        <div class="flex gap-2 items-center mb-2">
          <i class="pi pi-link text-primary"></i>
          <span class="text-sm font-semibold">Integration</span>
        </div>
        <p class="text-xs text-surface-500">Which CypherView screens your app embeds into.</p>
      </div>
    </div>
  </div>
</ng-template>

<!-- Step 2: Basic Info -->
<ng-template #basicInfoStep let-step>
  <div class="p-6 mx-auto">
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="basicInfo">
        <div>
          <label for="app-name" class="block mb-1 text-sm font-medium">App Name *</label>
          <input
            id="app-name"
            pInputText
            formControlName="name"
            type="text"
            class="w-full"
            [class.ng-invalid]="appForm.get('basicInfo.name')?.invalid && appForm.get('basicInfo.name')?.touched"
          />
          @if (appForm.get('basicInfo.name')?.invalid && appForm.get('basicInfo.name')?.touched) {
            <small class="p-error">App name is required</small>
          }
        </div>
        <div>
          <label for="app-short-desc" class="block mb-1 text-sm font-medium">Short Description *</label>
          <input
            id="app-short-desc"
            pInputText
            formControlName="shortDescription"
            type="text"
            class="w-full"
            placeholder="Brief summary (max 100 chars)"
            [class.ng-invalid]="appForm.get('basicInfo.shortDescription')?.invalid && appForm.get('basicInfo.shortDescription')?.touched"
          />
          @if (appForm.get('basicInfo.shortDescription')?.invalid && appForm.get('basicInfo.shortDescription')?.touched) {
            <small class="p-error">
              @if (appForm.get('basicInfo.shortDescription')?.errors?.['required']) {
                Short description is required
              } @else {
                Maximum 100 characters allowed
              }
            </small>
          }
        </div>
        <div>
          <label for="app-desc" class="block mb-1 text-sm font-medium">Full Description *</label>
          <textarea
            id="app-desc"
            pTextarea
            formControlName="description"
            rows="5"
            class="w-full"
            [class.ng-invalid]="appForm.get('basicInfo.description')?.invalid && appForm.get('basicInfo.description')?.touched"
          ></textarea>
          @if (appForm.get('basicInfo.description')?.invalid && appForm.get('basicInfo.description')?.touched) {
            <small class="p-error">Full description is required</small>
          }
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label for="app-icon" class="block mb-1 text-sm font-medium">Icon URL</label>
            <input
              id="app-icon"
              pInputText
              formControlName="iconUrl"
              type="text"
              class="w-full"
              placeholder="https://..."
            />
          </div>
          <div>
            <label for="health-check-url" class="block mb-1 text-sm font-medium">Health Check URL</label>
            <input
              id="health-check-url"
              pInputText
              formControlName="healthCheckUrl"
              type="text"
              class="w-full"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 3: Publishing -->
<ng-template #publishingStep let-step>
  <div class="p-6 mx-auto">
    <p class="pb-3 mb-6 text-sm border-b text-surface-600">
      Control who can discover your app and how it is priced.
    </p>
    <form [formGroup]="appForm">
      <div formGroupName="publishing" class="space-y-8">
        <!-- Visibility -->
        <div>
          <p class="block mb-3 text-sm font-semibold">Visibility</p>
          <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            @for (opt of [
              { value: 'global', icon: 'pi-globe', label: 'Global', desc: 'Visible to everyone in the marketplace' },
              { value: 'ourOperations', icon: 'pi-building', label: 'Our Operations', desc: 'Only visible within your organisation hierarchy.' },
              { value: 'unlisted', icon: 'pi-lock', label: 'Unlisted', desc: 'Hidden from the marketplace. Only orgs you invite can find it.' }
            ]; track opt.value) {
              <p-card
                [class]="appForm.get('publishing.visibility')?.value === opt.value ? 'border-primary card-selected cursor-pointer transition-all duration-200' : 'cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-surface-50'"
                (click)="appForm.get('publishing.visibility')?.setValue(opt.value)"
              >
                <ng-template pTemplate="content">
                  <div class="relative">
                    @if (appForm.get('publishing.visibility')?.value === opt.value) {
                      <span class="flex absolute top-0 right-0 justify-center items-center w-5 h-5 text-xs text-white rounded-full bg-primary">
                        <i class="pi pi-check text-[10px]"></i>
                      </span>
                    }
                    <i class="pi {{ opt.icon }} text-xl mb-2 block text-primary"></i>
                    <p class="mb-1 text-sm font-semibold">{{ opt.label }}</p>
                    <p class="text-xs text-surface-500">{{ opt.desc }}</p>
                  </div>
                </ng-template>
              </p-card>
            }
          </div>
        </div>
        <!-- Fee Model -->
        <div>
          <p class="block mb-3 text-sm font-semibold">Fee Model</p>
          <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
            @for (opt of [
              { value: 'free', icon: 'pi-tag', label: 'Free', desc: 'No charge for installation or usage' },
              { value: 'perInstallation', icon: 'pi-download', label: 'Per Installation', desc: 'Best for one-time tools or utilities' },
              { value: 'perActiveDevice', icon: 'pi-desktop', label: 'Per Active Device', desc: 'Best for apps used daily across a fleet' }
            ]; track opt.value) {
              <p-card
                [class]="appForm.get('publishing.feeType')?.value === opt.value ? 'border-primary card-selected cursor-pointer transition-all duration-200' : 'cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-surface-50'"
                (click)="appForm.get('publishing.feeType')?.setValue(opt.value)"
              >
                <ng-template pTemplate="content">
                  <div class="relative">
                    @if (appForm.get('publishing.feeType')?.value === opt.value) {
                      <span class="flex absolute top-0 right-0 justify-center items-center w-5 h-5 text-xs text-white rounded-full bg-primary">
                        <i class="pi pi-check text-[10px]"></i>
                      </span>
                    }
                    <i class="pi {{ opt.icon }} text-xl mb-2 block text-primary"></i>
                    <p class="mb-1 text-sm font-semibold">{{ opt.label }}</p>
                    <p class="text-xs text-surface-500">{{ opt.desc }}</p>
                  </div>
                </ng-template>
              </p-card>
            }
          </div>
          @if (appForm.get('publishing.feeType')?.value !== 'free') {
            <div class="mt-4">
              <label for="feeAmount" class="block mb-1 text-xs font-semibold uppercase text-surface-500">Amount (ZAR) *</label>
              <p-inputnumber
                inputId="feeAmount"
                formControlName="feeAmount"
                mode="currency"
                currency="ZAR"
                locale="en-ZA"
                [minFractionDigits]="2"
                [min]="0.01"
                class="w-full"
                placeholder="0.00"
              />
              @if (appForm.get('publishing.feeAmount')?.invalid && appForm.get('publishing.feeAmount')?.touched) {
                <small class="p-error">A valid amount greater than R 0.00 is required</small>
              }
              @if (appForm.get('publishing.feeType')?.value === 'perActiveDevice' && appForm.get('publishing.feeAmount')?.value) {
                <p class="mt-2 text-xs italic text-surface-500">
                  {{ getFeePreviewLabel(appForm.get('publishing.feeType')?.value, appForm.get('publishing.feeAmount')?.value) }}
                </p>
              }
            </div>
          }
        </div>
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 4: Integration Points -->
<ng-template #integrationPointsStep let-step>
  <div class="p-6 mx-auto">
    <p class="pb-2 mb-4 text-sm border-b">
      Where will your app integrate with CypherView? Provide the Base URL for each selected point.
    </p>
    <form [formGroup]="appForm">
      <div class="space-y-4" formGroupName="integration">
        @for (screen of availableScreens; track screen.id) {
          @let control = getIntegrationPointControl(screen.id);
          <p-card [class]="isScreenSelected(screen.id) ? 'border-primary' : ''">
            <ng-template pTemplate="content">
              <div class="flex items-center mb-3">
                <p-checkbox
                  [inputId]="screen.id"
                  [binary]="true"
                  (onChange)="toggleIntegrationPoint(screen.id, $event)"
                  [ngModel]="isScreenSelected(screen.id)"
                  [ngModelOptions]="{ standalone: true }"
                ></p-checkbox>
                <label [for]="screen.id" class="block ml-2 text-sm font-medium cursor-pointer">{{ screen.name }}</label>
              </div>
              @if (isScreenSelected(screen.id) && control) {
                <div [formGroup]="control" class="pl-7 space-y-3">
                  <div>
                    <label [for]="'base-url-' + screen.id" class="block mb-1 text-xs font-semibold uppercase text-surface-500">Base URL for {{ screen.name }} *</label>
                    <input
                      [id]="'base-url-' + screen.id"
                      pInputText
                      formControlName="baseUrl"
                      type="text"
                      class="w-full text-sm"
                      placeholder="https://api.yourapp.com/widget/"
                    />
                    @if (control.get('baseUrl')?.invalid && control.get('baseUrl')?.touched) {
                      <small class="p-error">URL is required</small>
                    }
                  </div>
                </div>
              }
            </ng-template>
          </p-card>
        }
        @if (integrationPoints.invalid && integrationPoints.touched) {
          <small class="p-error">Please select at least one integration point and fill in the URLs.</small>
        }
      </div>
    </form>
  </div>
</ng-template>

<!-- Step 5: Permissions -->
<ng-template #permissionsStep let-step>
  <div class="p-6 mx-6">
    <p class="pb-3 mb-6 text-sm border-b text-surface-600">
      Choose which capabilities your app needs. Installers review this list before accepting.
      <span class="block mt-1 text-surface-400">Greyed-out capabilities exceed your own permissions and cannot be requested.</span>
    </p>
    @if (integrationPoints.length === 0) {
      <p class="text-sm italic text-surface-400">No integration points selected. Add at least one above.</p>
    } @else {
      <div class="space-y-6">
        @for (point of integrationPoints.controls; track $index) {
          <div class="p-4 rounded-xl border border-subtle">
            <p class="mb-3 text-sm font-semibold text-surface-800">
              <i class="mr-2 pi pi-link text-primary" aria-hidden="true"></i>
              {{ formatScreenId(point.value.screenId) }}
            </p>
            <app-permissions-picker
              [value]="point.get('requiredPermissions')?.value ?? []"
              (valueChange)="point.get('requiredPermissions')?.setValue($event)"
            />
          </div>
        }
      </div>
    }
  </div>
</ng-template>

<!-- Step 6: Review -->
<ng-template #reviewStep let-step>
  <div class="p-6 mx-auto space-y-4">
    <p-card class="shadow-sm border-surface-200">
      <ng-template pTemplate="content">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="space-y-4">
            <!-- App Name -->
            <div>
              <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                App Name
                @if (changedFields()?.name) {
                  <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                }
              </span>
              @if (changedFields()?.name) {
                <p class="mb-1 text-xs line-through text-surface-400">{{ existingAppData()?.name }}</p>
              }
              <span class="text-lg font-medium" [class.border-l-2]="changedFields()?.name" [class.border-amber-400]="changedFields()?.name" [class.pl-2]="changedFields()?.name">{{ formValue()?.basicInfo?.name }}</span>
            </div>
            <!-- Short Description -->
            <div>
              <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                Short Description
                @if (changedFields()?.shortDescription) {
                  <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                }
              </span>
              @if (changedFields()?.shortDescription) {
                <p class="mb-1 text-xs line-through text-surface-400">{{ existingAppData()?.shortDescription }}</p>
              }
              <span class="text-sm line-clamp-2" [class.border-l-2]="changedFields()?.shortDescription" [class.border-amber-400]="changedFields()?.shortDescription" [class.pl-2]="changedFields()?.shortDescription">{{ formValue()?.basicInfo?.shortDescription }}</span>
            </div>
            <!-- Full Description -->
            <div>
              <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                Full Description
                @if (changedFields()?.description) {
                  <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                }
              </span>
              @if (changedFields()?.description) {
                <p class="mb-1 text-xs line-through text-surface-400 line-clamp-2">{{ existingAppData()?.description }}</p>
              }
              <p class="text-sm line-clamp-3" [class.border-l-2]="changedFields()?.description" [class.border-amber-400]="changedFields()?.description" [class.pl-2]="changedFields()?.description">
                {{ formValue()?.basicInfo?.description }}
              </p>
            </div>
            <!-- Health Check URL -->
            @if (formValue()?.basicInfo?.healthCheckUrl || existingAppData()?.healthCheckUrl) {
              <div>
                <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                  Health Check
                  @if (changedFields()?.healthCheckUrl) {
                    <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                  }
                </span>
                @if (changedFields()?.healthCheckUrl) {
                  <p class="mb-1 text-xs line-through text-surface-400"><code>{{ existingAppData()?.healthCheckUrl }}</code></p>
                }
                <code class="text-xs" [class.border-l-2]="changedFields()?.healthCheckUrl" [class.border-amber-400]="changedFields()?.healthCheckUrl" [class.pl-2]="changedFields()?.healthCheckUrl">{{ formValue()?.basicInfo?.healthCheckUrl }}</code>
              </div>
            }
            <!-- Icon URL -->
            @if (formValue()?.basicInfo?.iconUrl || existingAppData()?.iconUrl) {
              <div>
                <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                  Icon URL
                  @if (changedFields()?.iconUrl) {
                    <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                  }
                </span>
                @if (changedFields()?.iconUrl) {
                  <p class="mb-1 text-xs line-through text-surface-400"><code>{{ existingAppData()?.iconUrl }}</code></p>
                }
                <code class="text-xs break-all" [class.border-l-2]="changedFields()?.iconUrl" [class.border-amber-400]="changedFields()?.iconUrl" [class.pl-2]="changedFields()?.iconUrl">{{ formValue()?.basicInfo?.iconUrl }}</code>
              </div>
            }
          </div>

          <!-- Integration Points -->
          <div class="space-y-4">
            <div>
              <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
                Integrations
                @if (changedFields()?.integrationPoints) {
                  <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
                }
              </span>
              <div class="space-y-2">
                @for (point of formValue()?.integration?.points; track $index) {
                  @let origPoint = getOriginalIntegrationPoint(point.screenId);
                  @let urlChanged = changedFields()?.integrationPoints && !!origPoint && origPoint.baseUrl !== point.baseUrl;
                  <div class="p-2 rounded-md border bg-surface-50" [class.border-l-2]="urlChanged" [class.border-amber-400]="urlChanged">
                    <p class="text-sm font-bold">{{ point.screenId }}</p>
                    @if (urlChanged) {
                      <code class="text-[10px] break-all text-surface-400 line-through block">{{ origPoint?.baseUrl }}</code>
                    }
                    <code class="text-[10px] break-all">{{ point.baseUrl }}</code>
                    @if (point.requiredPermissions.length) {
                      <div class="pt-2 mt-2 border-t border-subtle">
                        <!-- <app-permissions-picker [value]="point.requiredPermissions" [readonly]="true" /> -->
                      </div>
                    }
                  </div>
                }
                @if (!formValue()?.integration?.points?.length) {
                  <span class="text-xs italic p-error">None selected</span>
                }
              </div>
            </div>
          </div>
        </div>
      </ng-template>
    </p-card>

    <!-- Publishing Summary -->
    <p-card class="shadow-sm border-surface-200">
      <ng-template pTemplate="header">
        <div class="px-4 pt-4">
          <span class="text-xs font-semibold uppercase text-surface-500">Publishing</span>
        </div>
      </ng-template>
      <ng-template pTemplate="content">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
              Visibility
              @if (changedFields()?.visibility) {
                <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
              }
            </span>
            <span class="text-sm font-medium" [class.border-l-2]="changedFields()?.visibility" [class.border-amber-400]="changedFields()?.visibility" [class.pl-2]="changedFields()?.visibility">
              @switch (formValue()?.publishing?.visibility) {
                @case ('global') { Global }
                @case ('ourOperations') { Our Operations }
                @case ('unlisted') { Unlisted }
              }
            </span>
          </div>
          <div>
            <span class="block mb-1 text-xs font-semibold uppercase text-surface-500">
              Fee
              @if (changedFields()?.feeModel) {
                <span class="ml-1 px-1 py-0.5 text-[10px] bg-amber-100 text-amber-700 rounded font-semibold">Changed</span>
              }
            </span>
            <span class="text-sm font-medium" [class.border-l-2]="changedFields()?.feeModel" [class.border-amber-400]="changedFields()?.feeModel" [class.pl-2]="changedFields()?.feeModel">
              @if (formValue()?.publishing?.feeType === 'free') {
                Free
              } @else {
                {{ getFeePreviewLabel(formValue()?.publishing?.feeType ?? '', formValue()?.publishing?.feeAmount ?? null) }}
              }
            </span>
          </div>
        </div>
      </ng-template>
    </p-card>

    <!-- Unlisted + fee warning -->
    @if (formValue()?.publishing?.visibility === 'unlisted' && formValue()?.publishing?.feeType !== 'free') {
      <div class="flex gap-3 items-start p-4 bg-amber-50 rounded-xl border border-amber-200">
        <i class="mt-0.5 text-amber-500 pi pi-exclamation-triangle"></i>
        <p class="text-sm text-amber-800">
          <strong>Your app is Unlisted with a fee.</strong> Only invited organisations can install it. Make sure you've set up invites before publishing.
        </p>
      </div>
    }

    <p-card class="border-orange-400 bg-surface-0 border-left-3 surface-border">
      <ng-template pTemplate="content">
        <div class="flex gap-3 items-start text-sm">
          <i class="mt-0.5 text-lg text-orange-400 pi pi-exclamation-triangle"></i>
          <div>
            <p class="font-medium text-surface-900">Final Verification</p>
            <p class="text-surface-700">
              @if (isEditMode()) {
                Please ensure all changes are correct before updating your app.
              } @else {
                Your app will be submitted to the review team. This usually takes 24-48 hours.
              }
            </p>
          </div>
        </div>
      </ng-template>
    </p-card>

    <!-- Review step footer (replaces wizard default footer) -->
    <div class="flex gap-3 justify-end items-center pt-2">
      @if (submissionError()) {
        <span class="flex gap-1 items-center mr-auto text-sm text-red-600">
          <i class="pi pi-times-circle"></i>{{ submissionError() }}
        </span>
      }
      <p-button
        label="Save Draft"
        icon="pi pi-save"
        [outlined]="true"
        severity="secondary"
        [loading]="isSubmitting() && submitAction === 'draft'"
        [disabled]="!appForm.valid || isSubmitting()"
        (onClick)="saveDraft()"
      />
      <p-button
        label="Submit for Review"
        icon="pi pi-send"
        severity="primary"
        [loading]="isSubmitting() && submitAction === 'review'"
        [disabled]="!appForm.valid || isSubmitting()"
        (onClick)="openSubmitVersionDialog()"
      />
    </div>
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.card-selected {\n  background-color: color-mix(in srgb, var(--p-primary-color) 8%, transparent);\n}\n/*# sourceMappingURL=app-create-wizard.component.css.map */\n"] }]
  }], () => [], { wizardPanelTemplate: [{
    type: ViewChild,
    args: ["wizardPanel"]
  }], previewPanelTemplate: [{
    type: ViewChild,
    args: ["previewPanel"]
  }], gettingStartedStep: [{
    type: ViewChild,
    args: ["gettingStartedStep"]
  }], basicInfoStep: [{
    type: ViewChild,
    args: ["basicInfoStep"]
  }], publishingStep: [{
    type: ViewChild,
    args: ["publishingStep"]
  }], integrationPointsStep: [{
    type: ViewChild,
    args: ["integrationPointsStep"]
  }], permissionsStep: [{
    type: ViewChild,
    args: ["permissionsStep"]
  }], reviewStep: [{
    type: ViewChild,
    args: ["reviewStep"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreateWizardComponent, { className: "AppCreateWizardComponent", filePath: "src/app/features/app-store/pages/app-create-wizard/app-create-wizard.component.ts", lineNumber: 107 });
})();
export {
  AppCreateWizardComponent
};
//# sourceMappingURL=chunk-FPITGT2I.js.map
