import {
  AppStatusBadgeComponent
} from "./chunk-SRH4Q32Y.js";
import {
  AppStoreService
} from "./chunk-26EHOY33.js";
import {
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  GridComponent
} from "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import "./chunk-4CAIP3KE.js";
import {
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  ClientDataService,
  CommonModule,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  ViewChild,
  catchError,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts
var _c0 = ["appIconTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["actionsTemplate"];
var _c3 = (a0) => ["/app-store", a0];
var _c4 = (a0) => ["/editor", a0];
function AppCreatorDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "Please try refreshing the page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 12);
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
function AppCreatorDashboardComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r1.columns())("data", ctx_r1.apps())("loading", ctx_r1.isLoading())("pagination", true)("rows", 10)("sortable", true);
  }
}
function AppCreatorDashboardComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 17);
    \u0275\u0275text(4, " Build Your First App ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, " Create custom integrations and widgets to enhance the CypherView experience for everyone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-button", 19);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_Conditional_5_Conditional_0_Template, 1, 6, "app-grid", 13)(1, AppCreatorDashboardComponent_Conditional_5_Conditional_1_Template, 8, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.apps().length > 0 || ctx_r1.isLoading() ? 0 : 1);
  }
}
function AppCreatorDashboardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r3.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r3.name + " icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r3.name);
  }
}
function AppCreatorDashboardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 23);
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    \u0275\u0275property("status", app_r4.status);
  }
}
function AppCreatorDashboardComponent_ng_template_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 26);
  }
  if (rf & 2) {
    const app_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c4, app_r5.id))("text", true);
  }
}
function AppCreatorDashboardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "p-button", 25);
    \u0275\u0275conditionalCreate(2, AppCreatorDashboardComponent_ng_template_10_Conditional_2_Template, 1, 4, "p-button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c3, app_r5.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r5.status !== "approved" ? 2 : -1);
  }
}
var AppCreatorDashboardComponent = class _AppCreatorDashboardComponent {
  appStoreService = inject(AppStoreService);
  clientDataService = inject(ClientDataService);
  router = inject(Router);
  appIconTemplate;
  statusTemplate;
  actionsTemplate;
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  apps = signal([], ...ngDevMode ? [{ debugName: "apps" }] : []);
  columns = signal([], ...ngDevMode ? [{ debugName: "columns" }] : []);
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
        field: "installCount",
        header: "Installs",
        sortable: true,
        transform: "font-mono"
      },
      {
        field: "averageRating",
        header: "Rating",
        sortable: true
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
    });
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
      \u0275\u0275viewQuery(_c0, 7);
      \u0275\u0275viewQuery(_c1, 7);
      \u0275\u0275viewQuery(_c2, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appIconTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statusTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actionsTemplate = _t.first);
    }
  }, decls: 12, vars: 1, consts: [["appIconTemplate", ""], ["statusTemplate", ""], ["actionsTemplate", ""], [1, "flex", "flex-col", "h-full", "w-full"], [1, "px-6", "pt-6", "flex", "justify-end", "items-center", "flex-none"], ["routerLink", "../editor", "label", "Create New App", "icon", "pi pi-plus", "severity", "primary"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden", "p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "w-16", "h-16", "bg-surface-50", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl"], [1, "text-xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "secondary", 1, "mt-4", 3, "onClick"], ["styleClass", "h-full", 3, "columns", "data", "loading", "pagination", "rows", "sortable"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], [1, "w-20", "h-20", "bg-primary/10", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "pi", "pi-plus", "text-4xl", "text-primary"], [1, "text-2xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600", "max-w-md", "mb-8"], ["routerLink", "../editor", "label", "Start Creating", "icon", "pi pi-rocket", "severity", "primary", "size", "large"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded", "object-cover", "shadow-sm", "bg-surface-100", 3, "src", "alt"], [1, "font-medium", "text-surface-900"], [3, "status"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-pencil", "size", "small", "severity", "secondary", "pTooltip", "Edit App", 3, "routerLink", "text"]], template: function AppCreatorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275element(2, "p-button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 6);
      \u0275\u0275conditionalCreate(4, AppCreatorDashboardComponent_Conditional_4_Template, 8, 1, "div", 7)(5, AppCreatorDashboardComponent_Conditional_5_Template, 2, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, AppCreatorDashboardComponent_ng_template_6_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, AppCreatorDashboardComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, AppCreatorDashboardComponent_ng_template_10_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
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
    AppStatusBadgeComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreatorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-creator-dashboard", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      GridComponent,
      AppStatusBadgeComponent
    ], template: `<div class="flex flex-col h-full w-full">
  <div class="px-6 pt-6 flex justify-end items-center flex-none">
    <p-button
      routerLink="../editor"
      label="Create New App"
      icon="pi pi-plus"
      severity="primary"
    />
  </div>

  <!-- Content Area -->
  <div class="flex-1 min-h-0 w-full overflow-hidden p-6">
    @if (error()) {
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <div
          class="w-16 h-16 bg-surface-50 rounded-full flex items-center justify-center mb-4"
        >
          <i class="pi pi-exclamation-triangle text-3xl"></i>
        </div>
        <h3 class="text-xl font-bold text-surface-900 mb-2">{{ error() }}</h3>
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
          class="flex flex-col items-center justify-center py-24 text-center"
        >
          <div
            class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6"
          >
            <i class="pi pi-plus text-4xl text-primary"></i>
          </div>
          <h3 class="text-2xl font-bold text-surface-900 mb-2">
            Build Your First App
          </h3>
          <p class="text-surface-600 max-w-md mb-8">
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
  <div class="flex items-center gap-2">
    <img
      [src]="app.iconUrl"
      [alt]="app.name + ' icon'"
      class="w-8 h-8 rounded object-cover shadow-sm bg-surface-100"
    />
    <span class="font-medium text-surface-900">{{ app.name }}</span>
  </div>
</ng-template>

<ng-template #statusTemplate let-app>
  <app-status-badge [status]="app.status" />
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
    @if (app.status !== 'approved') {
      <p-button
        [routerLink]="['/editor', app.id]"
        icon="pi pi-pencil"
        size="small"
        [text]="true"
        severity="secondary"
        pTooltip="Edit App"
      />
    }
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */\n"] }]
  }], () => [], { appIconTemplate: [{
    type: ViewChild,
    args: ["appIconTemplate", { static: true }]
  }], statusTemplate: [{
    type: ViewChild,
    args: ["statusTemplate", { static: true }]
  }], actionsTemplate: [{
    type: ViewChild,
    args: ["actionsTemplate", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreatorDashboardComponent, { className: "AppCreatorDashboardComponent", filePath: "src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts", lineNumber: 41 });
})();
export {
  AppCreatorDashboardComponent
};
//# sourceMappingURL=chunk-L2F3BP33.js.map
