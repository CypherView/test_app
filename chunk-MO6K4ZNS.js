import {
  AppStoreService
} from "./chunk-4WJKKKHS.js";
import {
  Tag,
  TagModule
} from "./chunk-M7BHJO3S.js";
import {
  CardModule
} from "./chunk-JHYQFUMG.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-TE3G7BOY.js";
import "./chunk-55GGQPOO.js";
import "./chunk-VHE2BAWC.js";
import "./chunk-BHI76GZQ.js";
import "./chunk-MCSW3OQB.js";
import "./chunk-PWEIX5HT.js";
import "./chunk-L5472IFC.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-CBCRKUGG.js";
import "./chunk-TYYYZUG5.js";
import {
  Button,
  ButtonModule,
  PrimeTemplate
} from "./chunk-C5K3GDHP.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  RouterLink,
  RouterModule
} from "./chunk-ZVYXWUM3.js";
import {
  BehaviorSubject,
  Component,
  catchError,
  inject,
  of,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WYYVC2QJ.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts
var _c0 = () => ["name", "developerName"];
var _c1 = (a0) => ["/app-store", a0];
var _forTrack0 = ($index, $item) => $item.value;
function AppAdminPanelComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_For_11_Template_p_button_onClick_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilterChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", option_r2.label)("severity", \u0275\u0275pipeBind1(1, 3, ctx_r2.statusFilter$) === option_r2.value ? "primary" : "secondary")("outlined", \u0275\u0275pipeBind1(2, 5, ctx_r2.statusFilter$) !== option_r2.value);
  }
}
function AppAdminPanelComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-progressSpinner", 13);
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3, "Loading apps...");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function AppAdminPanelComponent_Conditional_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19);
    \u0275\u0275text(2, " Name ");
    \u0275\u0275element(3, "p-sortIcon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 21);
    \u0275\u0275text(5, " Developer ");
    \u0275\u0275element(6, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, " Status ");
    \u0275\u0275element(9, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, " Submitted ");
    \u0275\u0275element(12, "p-sortIcon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 27);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 28);
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "p-tag", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 31);
    \u0275\u0275element(15, "p-button", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", app_r4.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r4.name + " icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.developerName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.statusLabel(app_r4.status))("severity", ctx_r2.statusSeverity(app_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 9, app_r4.createdAt, "short"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, app_r4.id))("text", true);
  }
}
function AppAdminPanelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 10);
    \u0275\u0275template(1, AppAdminPanelComponent_Conditional_15_ng_template_1_Template, 15, 0, "ng-template", 17)(2, AppAdminPanelComponent_Conditional_15_ng_template_2_Template, 16, 14, "ng-template", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.apps)("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(4, _c0));
  }
}
function AppAdminPanelComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "span", 33);
    \u0275\u0275elementStart(2, "h3", 34);
    \u0275\u0275text(3, "No apps found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5, "Try adjusting your filters.");
    \u0275\u0275elementEnd()();
  }
}
var AppAdminPanelComponent = class _AppAdminPanelComponent {
  apps = [];
  loading = true;
  error = null;
  statusFilter$ = new BehaviorSubject("PENDING_REVIEW");
  appStoreService = inject(AppStoreService);
  statusOptions = [
    { label: "Pending Review", value: "PENDING_REVIEW" },
    { label: "Approved", value: "APPROVED" },
    { label: "Rejected", value: "REJECTED" },
    { label: "Suspended", value: "SUSPENDED" },
    { label: "All", value: "ALL" }
  ];
  constructor() {
    this.statusFilter$.pipe(tap(() => {
      this.loading = true;
      this.error = null;
    }), switchMap((status) => {
      let params = void 0;
      if (status !== "ALL") {
        params = { status };
      }
      return this.appStoreService.getApps(params).pipe(tap((apps) => {
        this.apps = apps;
        this.loading = false;
      }), catchError(() => {
        this.loading = false;
        this.error = "Unable to load apps. Please try again.";
        return of([]);
      }));
    })).subscribe();
  }
  onStatusFilterChange(status) {
    this.statusFilter$.next(status);
  }
  statusSeverity(status) {
    if (status === "APPROVED")
      return "success";
    if (status === "PENDING_REVIEW")
      return "warn";
    if (status === "DRAFT")
      return "secondary";
    if (status === "SUSPENDED")
      return "danger";
    return "info";
  }
  statusLabel(status) {
    return status.toLowerCase().split("_").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
  }
  static \u0275fac = function AppAdminPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppAdminPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppAdminPanelComponent, selectors: [["app-app-admin-panel"]], decls: 17, vars: 2, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "p-4", "content-header", "flex-none", "w-full"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-semibold"], [1, "mt-1"], ["routerLink", "/app-store", "label", "Back to Store", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "outlined"], [1, "flex", "gap-2", "p-4", "flex-none"], ["size", "small", 3, "label", "severity", "outlined"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "gap-3"], [1, "p-datatable-striped", 3, "value", "paginator", "rows", "globalFilterFields"], [1, "text-center", "py-12"], ["size", "small", 3, "onClick", "label", "severity", "outlined"], ["strokeWidth", "4", 1, "w-10", "h-10"], [1, "text-muted"], [1, "pi", "pi-exclamation-triangle", "text-danger", "text-4xl"], [1, "text-lg", "font-semibold"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name", "scope", "col"], ["field", "name"], ["pSortableColumn", "developerName", "scope", "col"], ["field", "developerName"], ["pSortableColumn", "status", "scope", "col"], ["field", "status"], ["pSortableColumn", "createdAt", "scope", "col"], ["field", "createdAt"], ["scope", "col"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded", "object-cover", 3, "src", "alt"], [3, "value", "severity"], [1, "flex", "gap-2"], ["label", "Review", "icon", "pi pi-eye", "size", "small", 3, "routerLink", "text"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2"]], template: function AppAdminPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
      \u0275\u0275text(5, "More Apps - Admin Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Manage app submissions and approvals.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "p-button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, AppAdminPanelComponent_For_11_Template, 3, 7, "p-button", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275conditionalCreate(13, AppAdminPanelComponent_Conditional_13_Template, 4, 0, "div", 9)(14, AppAdminPanelComponent_Conditional_14_Template, 4, 1, "div", 9)(15, AppAdminPanelComponent_Conditional_15_Template, 3, 5, "p-table", 10)(16, AppAdminPanelComponent_Conditional_16_Template, 6, 0, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 13 : ctx.error ? 14 : ctx.apps.length > 0 ? 15 : 16);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    PrimeTemplate,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TagModule,
    Tag,
    CardModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    AsyncPipe,
    DatePipe
  ], styles: ["\n\n/*# sourceMappingURL=app-admin-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppAdminPanelComponent, [{
    type: Component,
    args: [{ selector: "app-app-admin-panel", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      TableModule,
      TagModule,
      CardModule,
      ProgressSpinnerModule
    ], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <!-- Header -->
  <div class="p-4 content-header flex-none w-full">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-semibold">More Apps - Admin Review</h2>
        <p class="mt-1">Manage app submissions and approvals.</p>
      </div>
      <p-button
        routerLink="/app-store"
        label="Back to Store"
        icon="pi pi-arrow-left"
        severity="secondary"
        [outlined]="true"
      />
    </div>
  </div>

  <!-- Filter -->
  <div class="flex gap-2 p-4 flex-none">
    @for (option of statusOptions; track option.value) {
      <p-button
        [label]="option.label"
        [severity]="
          (statusFilter$ | async) === option.value ? 'primary' : 'secondary'
        "
        [outlined]="(statusFilter$ | async) !== option.value"
        size="small"
        (onClick)="onStatusFilterChange(option.value)"
      />
    }
  </div>

  <!-- Apps Table -->
  <div class="flex-1 min-h-0 w-full overflow-auto p-4">
    @if (loading) {
      <div class="flex flex-col items-center justify-center py-12 gap-3">
        <p-progressSpinner
          class="w-10 h-10"
          strokeWidth="4"
        ></p-progressSpinner>
        <p class="text-muted">Loading apps...</p>
      </div>
    } @else if (error) {
      <div class="flex flex-col items-center justify-center py-12 gap-3">
        <span class="pi pi-exclamation-triangle text-danger text-4xl"></span>
        <p class="text-lg font-semibold">{{ error }}</p>
      </div>
    } @else if (apps.length > 0) {
      <p-table
        [value]="apps"
        [paginator]="true"
        [rows]="10"
        [globalFilterFields]="['name', 'developerName']"
        class="p-datatable-striped"
      >
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="name" scope="col">
              Name <p-sortIcon field="name"></p-sortIcon>
            </th>
            <th pSortableColumn="developerName" scope="col">
              Developer <p-sortIcon field="developerName"></p-sortIcon>
            </th>
            <th pSortableColumn="status" scope="col">
              Status <p-sortIcon field="status"></p-sortIcon>
            </th>
            <th pSortableColumn="createdAt" scope="col">
              Submitted <p-sortIcon field="createdAt"></p-sortIcon>
            </th>
            <th scope="col">Actions</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-app>
          <tr>
            <td>
              <div class="flex items-center gap-2">
                <img
                  [src]="app.iconUrl"
                  [alt]="app.name + ' icon'"
                  class="w-8 h-8 rounded object-cover"
                />
                <span>{{ app.name }}</span>
              </div>
            </td>
            <td>{{ app.developerName }}</td>
            <td>
              <p-tag
                [value]="statusLabel(app.status)"
                [severity]="statusSeverity(app.status)"
              ></p-tag>
            </td>
            <td>
              {{ app.createdAt | date: 'short' }}
            </td>
            <td>
              <div class="flex gap-2">
                <p-button
                  [routerLink]="['/app-store', app.id]"
                  label="Review"
                  icon="pi pi-eye"
                  size="small"
                  [text]="true"
                />
              </div>
            </td>
          </tr>
        </ng-template>
      </p-table>
    } @else {
      <div class="text-center py-12">
        <span class="pi pi-inbox !text-6xl muted mb-4"></span>
        <h3 class="text-lg font-medium mb-2">No apps found</h3>
        <p class="text-muted">Try adjusting your filters.</p>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.scss */\n/*# sourceMappingURL=app-admin-panel.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppAdminPanelComponent, { className: "AppAdminPanelComponent", filePath: "src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts", lineNumber: 28 });
})();
export {
  AppAdminPanelComponent
};
//# sourceMappingURL=chunk-MO6K4ZNS.js.map
