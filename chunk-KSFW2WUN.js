import {
  AppStoreService
} from "./chunk-4OTOUT7F.js";
import {
  Tag,
  TagModule
} from "./chunk-YY4YTSUY.js";
import {
  CardModule
} from "./chunk-LVNNH5BK.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-WWARLH65.js";
import "./chunk-GPWKMEIP.js";
import "./chunk-4IGNSDU3.js";
import "./chunk-ZBS4EXWE.js";
import "./chunk-LI62R7PU.js";
import "./chunk-BUSCYYGY.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-XHGQNLQQ.js";
import "./chunk-KHIL5BWZ.js";
import "./chunk-IYMFWGPL.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-INFBSQIL.js";
import {
  Button,
  ButtonModule
} from "./chunk-4RWFSH5R.js";
import {
  PrimeTemplate
} from "./chunk-I44PV4DK.js";
import {
  CommonModule,
  DatePipe,
  RouterLink,
  RouterModule,
  toObservable,
  toSignal
} from "./chunk-N4VRQVSD.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵpipe,
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
} from "./chunk-J5TUQDPD.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts
var _c0 = () => ["name", "developerName"];
var _c1 = (a0) => ["/app-store", a0];
var _forTrack0 = ($index, $item) => $item.value;
function AppAdminPanelComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 7);
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
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "p-progressSpinner", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3, "Loading apps...");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function AppAdminPanelComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 14);
    \u0275\u0275text(2, " Name ");
    \u0275\u0275element(3, "p-sortIcon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 16);
    \u0275\u0275text(5, " Developer ");
    \u0275\u0275element(6, "p-sortIcon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 18);
    \u0275\u0275text(8, " Status ");
    \u0275\u0275element(9, "p-sortIcon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 20);
    \u0275\u0275text(11, " Submitted ");
    \u0275\u0275element(12, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 22);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 29);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_16_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const app_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approveApp(app_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 30);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_16_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const app_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rejectApp(app_r5.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true);
  }
}
function AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 31);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_17_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const app_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.suspendApp(app_r5.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function AppAdminPanelComponent_Conditional_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 23);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "p-tag", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 26);
    \u0275\u0275element(15, "p-button", 27);
    \u0275\u0275conditionalCreate(16, AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_16_Template, 2, 2)(17, AppAdminPanelComponent_Conditional_7_ng_template_2_Conditional_17_Template, 1, 1, "p-button", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", app_r5.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r5.name + " icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r5.developerName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.statusLabel(app_r5.status))("severity", ctx_r2.statusSeverity(app_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 10, app_r5.createdAt, "short"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, app_r5.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r5.status === "PENDING_REVIEW" ? 16 : app_r5.status === "APPROVED" ? 17 : -1);
  }
}
function AppAdminPanelComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 5);
    \u0275\u0275template(1, AppAdminPanelComponent_Conditional_7_ng_template_1_Template, 15, 0, "ng-template", 12)(2, AppAdminPanelComponent_Conditional_7_ng_template_2_Template, 18, 15, "ng-template", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.apps())("paginator", true)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(4, _c0));
  }
}
function AppAdminPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 32);
    \u0275\u0275elementStart(2, "h3", 33);
    \u0275\u0275text(3, "No apps found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, "Try adjusting your filters.");
    \u0275\u0275elementEnd()();
  }
}
var AppAdminPanelComponent = class _AppAdminPanelComponent {
  appStoreService = inject(AppStoreService);
  // State Signals
  statusFilter = signal("PENDING_REVIEW", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : []);
  // Trigger data fetch when statusFilter or refreshTrigger changes
  apps$ = toObservable(computed(() => ({
    status: this.statusFilter(),
    refresh: this.refreshTrigger()
  }))).pipe(tap(() => {
    this.loading.set(true);
    this.error.set(null);
  }), switchMap(({ status }) => {
    const params = status === "ALL" ? void 0 : { status };
    return this.appStoreService.getApps(params).pipe(tap(() => {
      this.loading.set(false);
    }), catchError(() => {
      this.loading.set(false);
      this.error.set("Unable to load apps. Please try again.");
      return of([]);
    }));
  }));
  apps = toSignal(this.apps$, { initialValue: [] });
  statusOptions = [
    { label: "Pending Review", value: "PENDING_REVIEW" },
    { label: "Approved", value: "APPROVED" },
    { label: "Rejected", value: "REJECTED" },
    { label: "Suspended", value: "SUSPENDED" },
    { label: "All", value: "ALL" }
  ];
  onStatusFilterChange(status) {
    this.statusFilter.set(status);
  }
  approveApp(id) {
    this.appStoreService.approveApp(id).subscribe(() => this.refreshApps());
  }
  rejectApp(id) {
    this.appStoreService.rejectApp(id).subscribe(() => this.refreshApps());
  }
  suspendApp(id) {
    this.appStoreService.suspendApp(id).subscribe(() => this.refreshApps());
  }
  refreshApps() {
    this.refreshTrigger.update((n) => n + 1);
  }
  statusSeverity(status) {
    if (status === "APPROVED")
      return "success";
    if (status === "PENDING_REVIEW")
      return "warn";
    if (status === "DRAFT")
      return "secondary";
    if (status === "REJECTED")
      return "danger";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppAdminPanelComponent, selectors: [["app-app-admin-panel"]], decls: 9, vars: 1, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex", "gap-2", "p-4", "flex-none"], ["size", "small", 3, "label", "severity", "outlined"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "gap-3"], [1, "p-datatable-striped", 3, "value", "paginator", "rows", "globalFilterFields"], [1, "text-center", "py-12"], ["size", "small", 3, "onClick", "label", "severity", "outlined"], ["strokeWidth", "4", 1, "w-10", "h-10"], [1, "text-muted"], [1, "pi", "pi-exclamation-triangle", "text-danger", "text-4xl"], [1, "text-lg", "font-semibold"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name", "scope", "col"], ["field", "name"], ["pSortableColumn", "developerName", "scope", "col"], ["field", "developerName"], ["pSortableColumn", "status", "scope", "col"], ["field", "status"], ["pSortableColumn", "createdAt", "scope", "col"], ["field", "createdAt"], ["scope", "col"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded", "object-cover", 3, "src", "alt"], [3, "value", "severity"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-ban", "size", "small", "severity", "warn", "pTooltip", "Suspend App", 3, "text"], ["icon", "pi pi-check", "size", "small", "severity", "success", "pTooltip", "Approve App", 3, "onClick", "text"], ["icon", "pi pi-times", "size", "small", "severity", "danger", "pTooltip", "Reject App", 3, "onClick", "text"], ["icon", "pi pi-ban", "size", "small", "severity", "warn", "pTooltip", "Suspend App", 3, "onClick", "text"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2"]], template: function AppAdminPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, AppAdminPanelComponent_For_3_Template, 1, 3, "p-button", 2, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275conditionalCreate(5, AppAdminPanelComponent_Conditional_5_Template, 4, 0, "div", 4)(6, AppAdminPanelComponent_Conditional_6_Template, 4, 1, "div", 4)(7, AppAdminPanelComponent_Conditional_7_Template, 3, 5, "p-table", 5)(8, AppAdminPanelComponent_Conditional_8_Template, 6, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.error() ? 6 : ctx.apps().length > 0 ? 7 : 8);
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
    TooltipModule,
    Tooltip,
    DatePipe
  ], styles: ["\n\n/*# sourceMappingURL=app-admin-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppAdminPanelComponent, [{
    type: Component,
    args: [{ selector: "app-app-admin-panel", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      TableModule,
      TagModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule
    ], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <!-- Filter -->
  <div class="flex gap-2 p-4 flex-none">
    @for (option of statusOptions; track option.value) {
      <p-button
        [label]="option.label"
        [severity]="statusFilter() === option.value ? 'primary' : 'secondary'"
        [outlined]="statusFilter() !== option.value"
        size="small"
        (onClick)="onStatusFilterChange(option.value)"
      />
    }
  </div>

  <!-- Apps Table -->
  <div class="flex-1 min-h-0 w-full overflow-auto p-4">
    @if (loading()) {
      <div class="flex flex-col items-center justify-center py-12 gap-3">
        <p-progressSpinner
          class="w-10 h-10"
          strokeWidth="4"
        ></p-progressSpinner>
        <p class="text-muted">Loading apps...</p>
      </div>
    } @else if (error()) {
      <div class="flex flex-col items-center justify-center py-12 gap-3">
        <span class="pi pi-exclamation-triangle text-danger text-4xl"></span>
        <p class="text-lg font-semibold">{{ error() }}</p>
      </div>
    } @else if (apps().length > 0) {
      <p-table
        [value]="apps()"
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
                  icon="pi pi-eye"
                  size="small"
                  [text]="true"
                  severity="secondary"
                  pTooltip="View Details"
                />
                @if (app.status === 'PENDING_REVIEW') {
                  <p-button
                    icon="pi pi-check"
                    size="small"
                    [text]="true"
                    severity="success"
                    pTooltip="Approve App"
                    (onClick)="approveApp(app.id)"
                  />
                  <p-button
                    icon="pi pi-times"
                    size="small"
                    [text]="true"
                    severity="danger"
                    pTooltip="Reject App"
                    (onClick)="rejectApp(app.id)"
                  />
                } @else if (app.status === 'APPROVED') {
                  <p-button
                    icon="pi pi-ban"
                    size="small"
                    [text]="true"
                    severity="warn"
                    pTooltip="Suspend App"
                    (onClick)="suspendApp(app.id)"
                  />
                }
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppAdminPanelComponent, { className: "AppAdminPanelComponent", filePath: "src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts", lineNumber: 32 });
})();
export {
  AppAdminPanelComponent
};
//# sourceMappingURL=chunk-KSFW2WUN.js.map
