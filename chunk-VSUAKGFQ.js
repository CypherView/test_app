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
import "./chunk-YALVSCY4.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-TH3LNORR.js";
import {
  Button,
  ButtonModule,
  ProgressSpinnerModule
} from "./chunk-52LQUIDL.js";
import "./chunk-TMX3INZE.js";
import "./chunk-WHNMSFOF.js";
import {
  ClientDataService,
  CommonModule,
  Router,
  RouterLink,
  RouterModule
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

// src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts
var _c0 = ["appIconTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["inReviewTemplate"];
var _c3 = ["actionsTemplate"];
var _c4 = (a0) => ["/app-store", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AppCreatorDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6, "Please try refreshing the page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 13);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_4_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reload());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' "', ctx_r1.reviewComments().get(app_r3.id), '" ');
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 28);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_8_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const app_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editApp(app_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 29);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_9_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const app_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editApp(app_r3));
    });
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "div", 22)(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-status-badge", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_7_Template, 2, 1, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_8_Template, 1, 0, "p-button", 26)(9, AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Conditional_9_Template, 1, 0, "p-button", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r3.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r3.name)("fallbackText", app_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("status", app_r3.version.pendingVersionStatus ?? (app_r3.version.activeVersionId ? "approved" : "draft"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reviewComments().get(app_r3.id) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r3.version.pendingVersionStatus === "changesRequested" ? 8 : 9);
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3", 17);
    \u0275\u0275text(2, " Needs Attention ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275repeaterCreate(4, AppCreatorDashboardComponent_Conditional_5_Conditional_0_For_5_Template, 10, 7, "div", 19, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.attentionApps());
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r1.columns())("data", ctx_r1.apps())("loading", ctx_r1.isLoading())("pagination", true)("rows", 10)("sortable", true);
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 32);
    \u0275\u0275text(4, " Build Your First App ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 33);
    \u0275\u0275text(6, " Create custom integrations and widgets to enhance the CypherView experience for everyone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-button", 34);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_Conditional_5_Conditional_0_Template, 6, 0, "div", 14);
    \u0275\u0275conditionalCreate(1, AppCreatorDashboardComponent_Conditional_5_Conditional_1_Template, 1, 6, "app-grid", 15)(2, AppCreatorDashboardComponent_Conditional_5_Conditional_2_Template, 8, 0, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.attentionApps().length > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.apps().length > 0 || ctx_r1.isLoading() ? 1 : 2);
  }
}
function AppCreatorDashboardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r6.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r6.name + " icon")("fallbackText", app_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r6.name);
  }
}
function AppCreatorDashboardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 24);
  }
  if (rf & 2) {
    const app_r7 = ctx.$implicit;
    \u0275\u0275property("status", app_r7.version.pendingVersionStatus ?? (app_r7.version.activeVersionId ? "approved" : "draft"));
  }
}
function AppCreatorDashboardComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-status-badge", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.version.pendingVersionNumber);
    \u0275\u0275advance();
    \u0275\u0275property("status", app_r8.version.pendingVersionStatus ?? "pendingReview");
  }
}
function AppCreatorDashboardComponent_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_ng_template_10_Conditional_0_Template, 4, 2, "div", 37)(1, AppCreatorDashboardComponent_ng_template_10_Conditional_1_Template, 2, 0, "span", 38);
  }
  if (rf & 2) {
    const app_r8 = ctx.$implicit;
    \u0275\u0275conditional(app_r8.version.pendingVersionNumber ? 0 : 1);
  }
}
function AppCreatorDashboardComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "p-button", 41);
    \u0275\u0275elementStart(2, "p-button", 42);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_ng_template_12_Template_p_button_onClick_2_listener() {
      const app_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editApp(app_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c4, app_r10.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("disabled", ctx_r1.isEditDisabled(app_r10))("pTooltip", ctx_r1.isEditDisabled(app_r10) ? "v" + app_r10.version.pendingVersionNumber + " is currently under review" : "Edit App");
  }
}
var AppCreatorDashboardComponent = class _AppCreatorDashboardComponent {
  appStoreService = inject(AppStoreService);
  clientDataService = inject(ClientDataService);
  router = inject(Router);
  appIconTemplate;
  statusTemplate;
  inReviewTemplate;
  actionsTemplate;
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  apps = signal([], ...ngDevMode ? [{ debugName: "apps" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewComments = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "reviewComments" }] : (
    /* istanbul ignore next */
    []
  ));
  attentionApps = computed(() => this.apps().filter((app) => app.version.pendingVersionStatus === "changesRequested"), ...ngDevMode ? [{ debugName: "attentionApps" }] : (
    /* istanbul ignore next */
    []
  ));
  columns = signal([], ...ngDevMode ? [{ debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadApps();
  }
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
        field: "status",
        header: "Status",
        sortable: true,
        cellTemplate: this.statusTemplate
      },
      {
        field: "version.activeVersionNumber",
        header: "Live Version",
        sortable: false,
        valueGetter: (app) => app.version.activeVersionNumber ?? "\u2014"
      },
      {
        field: "version.pendingVersionNumber",
        header: "In Review",
        sortable: false,
        cellTemplate: this.inReviewTemplate
      },
      {
        field: "stats.installCount",
        header: "Installs",
        sortable: true,
        transform: "font-mono",
        valueGetter: (app) => app.stats.installCount
      },
      {
        field: "stats.averageRating",
        header: "Rating",
        sortable: true,
        valueGetter: (app) => app.stats.averageRating
      },
      {
        field: "updatedDate",
        header: "Last Updated",
        sortable: true,
        valueGetter: (app) => new Date(app.updatedDate).toLocaleDateString()
      },
      {
        field: "actions",
        header: "Actions",
        cellTemplate: this.actionsTemplate
      }
    ]);
  }
  loadApps() {
    this.isLoading.set(true);
    this.error.set(null);
    this.appStoreService.getMyApps({
      owner: this.clientDataService.getSelectedClient()?.id ?? ""
    }).pipe(catchError(() => {
      this.error.set("Unable to load your apps. Please try again.");
      return of([]);
    })).subscribe((apps) => {
      this.apps.set(apps);
      this.isLoading.set(false);
      this.loadReviewComments(apps);
    });
  }
  loadReviewComments(apps) {
    const attentionApps = apps.filter((app) => app.version.pendingVersionStatus === "changesRequested");
    attentionApps.forEach((app) => {
      this.appStoreService.getSubmissionReviews(app.id).pipe(catchError(() => of([]))).subscribe((reviews) => {
        if (reviews.length > 0) {
          this.reviewComments.update((map) => {
            const updated = new Map(map);
            updated.set(app.id, reviews[0].comments);
            return updated;
          });
        }
      });
    });
  }
  isEditDisabled(app) {
    return app.version.pendingVersionStatus === "pendingReview";
  }
  reload() {
    this.loadApps();
  }
  editApp(app) {
    this.router.navigate(["/app-store/editor"], {
      queryParams: { appId: app.id },
      state: { appToEdit: app }
    }).catch(() => {
    });
  }
  static \u0275fac = function AppCreatorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreatorDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreatorDashboardComponent, selectors: [["app-creator-dashboard"]], viewQuery: function AppCreatorDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7)(_c1, 7)(_c2, 7)(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appIconTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inReviewTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionsTemplate = _t.first);
    }
  }, decls: 14, vars: 1, consts: [["appIconTemplate", ""], ["statusTemplate", ""], ["inReviewTemplate", ""], ["actionsTemplate", ""], [1, "flex", "flex-col", "w-full", "h-full"], [1, "flex", "flex-none", "justify-end", "items-center", "px-6", "pt-6"], ["routerLink", "../editor", "label", "Create New App", "icon", "pi pi-plus", "severity", "primary"], [1, "overflow-hidden", "flex-1", "p-6", "w-full", "min-h-0"], [1, "flex", "flex-col", "justify-center", "items-center", "py-20", "text-center"], [1, "flex", "justify-center", "items-center", "mb-4", "w-16", "h-16", "rounded-full", "bg-surface-50"], [1, "text-3xl", "pi", "pi-exclamation-triangle"], [1, "mb-2", "text-xl", "font-bold", "text-surface-900"], [1, "text-surface-600"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "secondary", 1, "mt-4", 3, "onClick"], [1, "mb-6"], ["styleClass", "h-full", 3, "columns", "data", "loading", "pagination", "rows", "sortable"], [1, "flex", "flex-col", "justify-center", "items-center", "py-24", "text-center"], [1, "mb-3", "text-sm", "font-semibold", "text-surface-600", "uppercase", "tracking-wide"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "gap-4", "p-4", "rounded-lg", "border", "border-surface-200", "bg-surface-0"], ["appImgFallback", "", 1, "w-10", "h-10", "rounded", "object-cover", "bg-surface-100", 3, "src", "alt", "fallbackText"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "font-medium", "text-surface-900"], [3, "status"], [1, "text-sm", "text-surface-600", "truncate"], ["label", "Edit", "icon", "pi pi-pencil", "size", "small", "severity", "secondary"], ["label", "Submit New Version", "icon", "pi pi-send", "size", "small", "severity", "primary"], ["label", "Edit", "icon", "pi pi-pencil", "size", "small", "severity", "secondary", 3, "onClick"], ["label", "Submit New Version", "icon", "pi pi-send", "size", "small", "severity", "primary", 3, "onClick"], [1, "flex", "justify-center", "items-center", "mb-6", "w-20", "h-20", "rounded-full", "bg-primary/10"], [1, "text-4xl", "pi", "pi-plus", "text-primary"], [1, "mb-2", "text-2xl", "font-bold", "text-surface-900"], [1, "mb-8", "max-w-md", "text-surface-600"], ["routerLink", "../editor", "label", "Start Creating", "icon", "pi pi-rocket", "severity", "primary", "size", "large"], [1, "flex", "gap-2", "items-center"], ["appImgFallback", "", 1, "object-cover", "w-8", "h-8", "rounded", "shadow-sm", "bg-surface-100", 3, "src", "alt", "fallbackText"], [1, "flex", "items-center", "gap-2"], [1, "text-surface-400"], [1, "font-mono", "text-sm"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-pencil", "size", "small", "severity", "secondary", 3, "onClick", "text", "disabled", "pTooltip"]], template: function AppCreatorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
      \u0275\u0275element(2, "p-button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7);
      \u0275\u0275conditionalCreate(4, AppCreatorDashboardComponent_Conditional_4_Template, 8, 1, "div", 8)(5, AppCreatorDashboardComponent_Conditional_5_Template, 3, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, AppCreatorDashboardComponent_ng_template_6_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, AppCreatorDashboardComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, AppCreatorDashboardComponent_ng_template_10_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(12, AppCreatorDashboardComponent_ng_template_12_Template, 3, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.error() ? 4 : 5);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    CardModule,
    ProgressSpinnerModule,
    TooltipModule,
    Tooltip,
    GridComponent,
    AppStatusBadgeComponent,
    ImgFallbackDirective
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreatorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-creator-dashboard", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      GridComponent,
      AppStatusBadgeComponent,
      ImgFallbackDirective
    ], template: `<div class="flex flex-col w-full h-full">
  <div class="flex flex-none justify-end items-center px-6 pt-6">
    <p-button
      routerLink="../editor"
      label="Create New App"
      icon="pi pi-plus"
      severity="primary"
    />
  </div>

  <!-- Content Area -->
  <div class="overflow-hidden flex-1 p-6 w-full min-h-0">
    @if (error()) {
      <div class="flex flex-col justify-center items-center py-20 text-center">
        <div
          class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-surface-50"
        >
          <i class="text-3xl pi pi-exclamation-triangle"></i>
        </div>
        <h3 class="mb-2 text-xl font-bold text-surface-900">{{ error() }}</h3>
        <p class="text-surface-600">Please try refreshing the page.</p>
        <p-button
          label="Try Again"
          icon="pi pi-refresh"
          (onClick)="reload()"
          class="mt-4"
          severity="secondary"
        />
      </div>
    } @else {
      <!-- Needs Attention Section -->
      @if (attentionApps().length > 0) {
        <div class="mb-6">
          <h3
            class="mb-3 text-sm font-semibold text-surface-600 uppercase tracking-wide"
          >
            Needs Attention
          </h3>
          <div class="flex flex-col gap-3">
            @for (app of attentionApps(); track app.id) {
              <div
                class="flex items-center gap-4 p-4 rounded-lg border border-surface-200 bg-surface-0"
              >
                <img
                  [src]="app.iconUrl"
                  [alt]="app.name"
                  appImgFallback
                  [fallbackText]="app.name"
                  class="w-10 h-10 rounded object-cover bg-surface-100"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-medium text-surface-900">{{
                      app.name
                    }}</span>
                    <app-status-badge
                      [status]="
                        app.version.pendingVersionStatus ??
                        (app.version.activeVersionId ? 'approved' : 'draft')
                      "
                    />
                  </div>
                  @if (reviewComments().get(app.id)) {
                    <p class="text-sm text-surface-600 truncate">
                      "{{ reviewComments().get(app.id) }}"
                    </p>
                  }
                </div>
                @if (app.version.pendingVersionStatus === 'changesRequested') {
                  <p-button
                    label="Edit"
                    icon="pi pi-pencil"
                    size="small"
                    severity="secondary"
                    (onClick)="editApp(app)"
                  />
                } @else {
                  <p-button
                    label="Submit New Version"
                    icon="pi pi-send"
                    size="small"
                    severity="primary"
                    (onClick)="editApp(app)"
                  />
                }
              </div>
            }
          </div>
        </div>
      }

      @if (apps().length > 0 || isLoading()) {
        <app-grid
          [columns]="columns()"
          [data]="apps()"
          [loading]="isLoading()"
          [pagination]="true"
          [rows]="10"
          [sortable]="true"
          styleClass="h-full"
        />
      } @else {
        <div
          class="flex flex-col justify-center items-center py-24 text-center"
        >
          <div
            class="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-primary/10"
          >
            <i class="text-4xl pi pi-plus text-primary"></i>
          </div>
          <h3 class="mb-2 text-2xl font-bold text-surface-900">
            Build Your First App
          </h3>
          <p class="mb-8 max-w-md text-surface-600">
            Create custom integrations and widgets to enhance the CypherView
            experience for everyone.
          </p>
          <p-button
            routerLink="../editor"
            label="Start Creating"
            icon="pi pi-rocket"
            severity="primary"
            size="large"
          />
        </div>
      }
    }
  </div>
</div>

<ng-template #appIconTemplate let-app>
  <div class="flex gap-2 items-center">
    <img
      [src]="app.iconUrl"
      [alt]="app.name + ' icon'"
      class="object-cover w-8 h-8 rounded shadow-sm bg-surface-100"
      appImgFallback
      [fallbackText]="app.name"
    />
    <span class="font-medium text-surface-900">{{ app.name }}</span>
  </div>
</ng-template>

<ng-template #statusTemplate let-app>
  <app-status-badge
    [status]="
      app.version.pendingVersionStatus ??
      (app.version.activeVersionId ? 'approved' : 'draft')
    "
  />
</ng-template>

<ng-template #inReviewTemplate let-app>
  @if (app.version.pendingVersionNumber) {
    <div class="flex items-center gap-2">
      <span class="font-mono text-sm">{{
        app.version.pendingVersionNumber
      }}</span>
      <app-status-badge
        [status]="app.version.pendingVersionStatus ?? 'pendingReview'"
      />
    </div>
  } @else {
    <span class="text-surface-400">\u2014</span>
  }
</ng-template>

<ng-template #actionsTemplate let-app>
  <div class="flex gap-2">
    <p-button
      [routerLink]="['/app-store', app.id]"
      icon="pi pi-eye"
      size="small"
      [text]="true"
      severity="secondary"
      pTooltip="View Details"
    />
    <p-button
      icon="pi pi-pencil"
      size="small"
      [text]="true"
      severity="secondary"
      [disabled]="isEditDisabled(app)"
      [pTooltip]="
        isEditDisabled(app)
          ? 'v' +
            app.version.pendingVersionNumber +
            ' is currently under review'
          : 'Edit App'
      "
      (onClick)="editApp(app)"
    />
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */\n"] }]
  }], () => [], { appIconTemplate: [{
    type: ViewChild,
    args: ["appIconTemplate", { static: true }]
  }], statusTemplate: [{
    type: ViewChild,
    args: ["statusTemplate", { static: true }]
  }], inReviewTemplate: [{
    type: ViewChild,
    args: ["inReviewTemplate", { static: true }]
  }], actionsTemplate: [{
    type: ViewChild,
    args: ["actionsTemplate", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreatorDashboardComponent, { className: "AppCreatorDashboardComponent", filePath: "src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts", lineNumber: 43 });
})();
export {
  AppCreatorDashboardComponent
};
//# sourceMappingURL=chunk-VSUAKGFQ.js.map
