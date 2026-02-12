import {
  getStatusLabel,
  getStatusSeverity
} from "./chunk-34DNJRCO.js";
import {
  AppStoreService
} from "./chunk-KKJZ2E25.js";
import {
  Tag,
  TagModule
} from "./chunk-SF4BLP37.js";
import {
  CardModule
} from "./chunk-2DEN7H4U.js";
import {
  Table,
  TableModule
} from "./chunk-IOZXLRWZ.js";
import "./chunk-NUSGOOGM.js";
import "./chunk-AGTAYSXF.js";
import "./chunk-IO5ZEIM6.js";
import "./chunk-3TXR4MRC.js";
import "./chunk-BSM7WHUV.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-5FSYCPU3.js";
import "./chunk-7QMLXHMS.js";
import "./chunk-ZDIAR5KI.js";
import "./chunk-6WBFSM47.js";
import {
  Button,
  ButtonModule
} from "./chunk-DPU26QQS.js";
import {
  PrimeTemplate
} from "./chunk-B3O4OKMN.js";
import {
  AuthDataService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  RouterLink,
  RouterModule
} from "./chunk-TG6TG2JG.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J5TUQDPD.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts
var _c0 = (a0) => ["/app-store", a0];
function AppCreatorDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressSpinner", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Fetching your apps...");
    \u0275\u0275elementEnd()();
  }
}
function AppCreatorDashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6, "Please try refreshing the page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 12);
    \u0275\u0275listener("onClick", function AppCreatorDashboardComponent_Conditional_5_Template_p_button_onClick_7_listener() {
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
function AppCreatorDashboardComponent_Conditional_6_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 17);
    \u0275\u0275text(2, "App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 17);
    \u0275\u0275text(4, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 17);
    \u0275\u0275text(6, "Installs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 17);
    \u0275\u0275text(8, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 17);
    \u0275\u0275text(10, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 18);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function AppCreatorDashboardComponent_Conditional_6_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 19)(1, "td")(2, "div", 20);
    \u0275\u0275element(3, "img", 21);
    \u0275\u0275elementStart(4, "div")(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-tag", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 25);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 26);
    \u0275\u0275element(16, "i", 27);
    \u0275\u0275elementStart(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td", 29);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 30)(23, "div", 31);
    \u0275\u0275element(24, "p-button", 32)(25, "p-button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", app_r3.iconUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ID: ", app_r3.id.slice(0, 8), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.statusLabel(app_r3.status))("severity", ctx_r1.statusSeverity(app_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, app_r3.installCount));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(app_r3.averageRating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 13, app_r3.updatedAt, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, app_r3.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
  }
}
function AppCreatorDashboardComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 13);
    \u0275\u0275template(1, AppCreatorDashboardComponent_Conditional_6_Conditional_0_ng_template_1_Template, 13, 0, "ng-template", 15)(2, AppCreatorDashboardComponent_Conditional_6_Conditional_0_ng_template_2_Template, 26, 18, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.apps())("rows", 10)("paginator", true);
  }
}
function AppCreatorDashboardComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 36);
    \u0275\u0275text(4, " Build Your First App ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 37);
    \u0275\u0275text(6, " Create custom integrations and widgets to enhance the CypherView experience for everyone. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-button", 38);
    \u0275\u0275elementEnd();
  }
}
function AppCreatorDashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppCreatorDashboardComponent_Conditional_6_Conditional_0_Template, 3, 3, "p-table", 13)(1, AppCreatorDashboardComponent_Conditional_6_Conditional_1_Template, 8, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.apps().length > 0 ? 0 : 1);
  }
}
var AppCreatorDashboardComponent = class _AppCreatorDashboardComponent {
  appStoreService = inject(AppStoreService);
  authDataService = inject(AuthDataService);
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  apps = signal([], ...ngDevMode ? [{ debugName: "apps" }] : []);
  constructor() {
    this.loadApps();
  }
  loadApps() {
    this.isLoading.set(true);
    this.error.set(null);
    this.appStoreService.getApps().pipe(catchError(() => {
      this.error.set("Unable to load your apps. Please try again.");
      return of([]);
    })).subscribe((apps) => {
      this.apps.set(apps);
      this.isLoading.set(false);
    });
  }
  // Delegate to shared utility functions
  statusSeverity = getStatusSeverity;
  statusLabel = getStatusLabel;
  reload() {
    this.loadApps();
  }
  static \u0275fac = function AppCreatorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCreatorDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCreatorDashboardComponent, selectors: [["app-app-creator-dashboard"]], decls: 7, vars: 1, consts: [[1, "p-6"], [1, "flex", "justify-end", "items-center", "mb-6"], ["routerLink", "../create", "label", "Create New App", "icon", "pi pi-plus", "severity", "primary"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-6", "bg-surface-50"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["strokeWidth", "3", 1, "w-12", "h-12"], [1, "text-surface-500", "mt-4", "font-medium"], [1, "w-16", "h-16", "bg-red-50", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl", "text-red-500"], [1, "text-xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "secondary", 1, "mt-4", 3, "onClick"], [1, "creator-table", "p-datatable-sm", 3, "value", "rows", "paginator"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "text-center"], ["pTemplate", "header"], ["pTemplate", "body"], ["scope", "col"], ["scope", "col", 1, "text-right"], [1, "hover:bg-surface-50", "transition-colors"], [1, "flex", "items-center", "gap-3"], ["alt", "", 1, "w-10", "h-10", "rounded-lg", "object-cover", "bg-surface-100", 3, "src"], [1, "font-bold", "text-surface-900"], [1, "text-[10px]", "text-surface-500", "uppercase", "tracking-wider", "font-bold"], [3, "value", "severity"], [1, "font-medium"], [1, "flex", "items-center", "gap-1"], [1, "pi", "pi-star-fill", "text-yellow-400", "text-xs"], [1, "font-bold"], [1, "text-surface-500", "text-sm"], [1, "text-right"], [1, "flex", "justify-end", "gap-1"], ["icon", "pi pi-eye", "severity", "secondary", "size", "small", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-pencil", "severity", "secondary", "size", "small", "pTooltip", "Edit Metadata", 3, "text"], [1, "w-20", "h-20", "bg-primary/10", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "pi", "pi-plus", "text-4xl", "text-primary"], [1, "text-2xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600", "max-w-md", "mb-8"], ["routerLink", "../create", "label", "Start Creating", "icon", "pi pi-rocket", "severity", "primary", "size", "large"]], template: function AppCreatorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "p-button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, AppCreatorDashboardComponent_Conditional_4_Template, 4, 0, "div", 4)(5, AppCreatorDashboardComponent_Conditional_5_Template, 8, 1, "div", 5)(6, AppCreatorDashboardComponent_Conditional_6_Template, 2, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading() ? 4 : ctx.error() ? 5 : 6);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    PrimeTemplate,
    CardModule,
    TagModule,
    Tag,
    ProgressSpinnerModule,
    ProgressSpinner,
    TableModule,
    Table,
    DecimalPipe,
    DatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n  .p-datatable .p-datatable-header {\n  background: transparent;\n  border: none;\n}\n  .p-datatable .p-datatable-thead > tr > th {\n  background: var(--surface-50);\n  color: var(--surface-600);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--surface-200);\n}\n  .p-datatable .p-datatable-tbody > tr {\n  background: var(--surface-0);\n  transition: background-color 0.2s;\n}\n  .p-datatable .p-datatable-tbody > tr:hover {\n  background: var(--surface-50);\n}\n  .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--surface-100);\n}\n  .p-tag {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.6rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCreatorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-app-creator-dashboard", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      TagModule,
      ProgressSpinnerModule,
      TableModule
    ], template: `<div class="p-6">
  <div class="flex justify-end items-center mb-6">
    <p-button
      routerLink="../create"
      label="Create New App"
      icon="pi pi-plus"
      severity="primary"
    />
  </div>
  <!-- Content Area -->
  <div class="flex-1 min-h-0 w-full overflow-auto p-6 bg-surface-50">
    @if (isLoading()) {
      <div class="flex flex-col items-center justify-center py-20">
        <p-progressSpinner class="w-12 h-12" strokeWidth="3" />
        <p class="text-surface-500 mt-4 font-medium">Fetching your apps...</p>
      </div>
    } @else if (error()) {
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <div
          class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4"
        >
          <i class="pi pi-exclamation-triangle text-3xl text-red-500"></i>
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
      @if (apps().length > 0) {
        <p-table
          [value]="apps()"
          [rows]="10"
          [paginator]="true"
          class="creator-table p-datatable-sm"
        >
          <ng-template pTemplate="header">
            <tr>
              <th scope="col">App</th>
              <th scope="col">Status</th>
              <th scope="col">Installs</th>
              <th scope="col">Rating</th>
              <th scope="col">Last Updated</th>
              <th scope="col" class="text-right">Actions</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-app>
            <tr class="hover:bg-surface-50 transition-colors">
              <td>
                <div class="flex items-center gap-3">
                  <img
                    [src]="app.iconUrl"
                    alt=""
                    class="w-10 h-10 rounded-lg object-cover bg-surface-100"
                  />
                  <div>
                    <span class="font-bold text-surface-900">{{
                      app.name
                    }}</span>
                    <p
                      class="text-[10px] text-surface-500 uppercase tracking-wider font-bold"
                    >
                      ID: {{ app.id.slice(0, 8) }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p-tag
                  [value]="statusLabel(app.status)"
                  [severity]="statusSeverity(app.status)"
                />
              </td>
              <td class="font-medium">{{ app.installCount | number }}</td>
              <td>
                <div class="flex items-center gap-1">
                  <i class="pi pi-star-fill text-yellow-400 text-xs"></i>
                  <span class="font-bold">{{ app.averageRating }}</span>
                </div>
              </td>
              <td class="text-surface-500 text-sm">
                {{ app.updatedAt | date: 'mediumDate' }}
              </td>
              <td class="text-right">
                <div class="flex justify-end gap-1">
                  <p-button
                    [routerLink]="['/app-store', app.id]"
                    icon="pi pi-eye"
                    [text]="true"
                    severity="secondary"
                    size="small"
                    pTooltip="View Details"
                  />
                  <p-button
                    icon="pi pi-pencil"
                    [text]="true"
                    severity="secondary"
                    size="small"
                    pTooltip="Edit Metadata"
                  />
                </div>
              </td>
            </tr>
          </ng-template>
        </p-table>
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
            routerLink="../create"
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
`, styles: ["/* src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.scss */\n:host {\n  display: block;\n}\n::ng-deep .p-datatable .p-datatable-header {\n  background: transparent;\n  border: none;\n}\n::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background: var(--surface-50);\n  color: var(--surface-600);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--surface-200);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr {\n  background: var(--surface-0);\n  transition: background-color 0.2s;\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background: var(--surface-50);\n}\n::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--surface-100);\n}\n::ng-deep .p-tag {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.6rem;\n  font-weight: 600;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=app-creator-dashboard.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCreatorDashboardComponent, { className: "AppCreatorDashboardComponent", filePath: "src/app/features/app-store/pages/app-creator-dashboard/app-creator-dashboard.component.ts", lineNumber: 34 });
})();
export {
  AppCreatorDashboardComponent
};
//# sourceMappingURL=chunk-CVMO3X7W.js.map
