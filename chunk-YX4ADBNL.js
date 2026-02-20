import {
  AppStatusBadgeComponent
} from "./chunk-SRH4Q32Y.js";
import {
  AppStoreService
} from "./chunk-26EHOY33.js";
import {
  ModalListFormComponent
} from "./chunk-EY6ER4MP.js";
import {
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  GridComponent
} from "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import {
  ModalFormService
} from "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  Validators
} from "./chunk-4CAIP3KE.js";
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
  RouterLink,
  RouterModule,
  createDropdownField,
  createTextAreaField,
  toObservable,
  toSignal
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DestroyRef,
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
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts
var _c0 = ["appIconTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["actionsTemplate"];
var _c3 = (a0) => ["/app-store", a0];
var _forTrack0 = ($index, $item) => $item.value;
function AppAdminPanelComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
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
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
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
    \u0275\u0275element(0, "app-grid", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("columns", ctx_r2.columns())("data", ctx_r2.apps())("loading", ctx_r2.loading())("pagination", true)("rows", 10)("sortable", true);
  }
}
function AppAdminPanelComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementStart(2, "h3", 16);
    \u0275\u0275text(3, " No apps found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 17);
    \u0275\u0275text(5, " There are no applications matching the selected criteria. ");
    \u0275\u0275elementEnd()();
  }
}
function AppAdminPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppAdminPanelComponent_Conditional_6_Conditional_0_Template, 1, 6, "app-grid", 13)(1, AppAdminPanelComponent_Conditional_6_Conditional_1_Template, 6, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.apps().length > 0 || ctx_r2.loading() ? 0 : 1);
  }
}
function AppAdminPanelComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "img", 19);
    \u0275\u0275elementStart(2, "span", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", app_r4.iconUrl, \u0275\u0275sanitizeUrl)("alt", app_r4.name + " icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.name);
  }
}
function AppAdminPanelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-status-badge", 21);
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    \u0275\u0275property("status", app_r5.status);
  }
}
function AppAdminPanelComponent_ng_template_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 25);
    \u0275\u0275listener("onClick", function AppAdminPanelComponent_ng_template_11_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const app_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openReviewModal(app_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function AppAdminPanelComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "p-button", 23);
    \u0275\u0275conditionalCreate(2, AppAdminPanelComponent_ng_template_11_Conditional_2_Template, 1, 1, "p-button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c3, app_r7.id))("text", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r7.status === "pendingReview" || app_r7.status === "underReview" ? 2 : -1);
  }
}
var AppAdminPanelComponent = class _AppAdminPanelComponent {
  appStoreService = inject(AppStoreService);
  clientDataService = inject(ClientDataService);
  modalFormService = inject(ModalFormService);
  destroyRef = inject(DestroyRef);
  appIconTemplate;
  statusTemplate;
  actionsTemplate;
  // State Signals
  statusFilter = signal("pendingReview", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : []);
  columns = signal([], ...ngDevMode ? [{ debugName: "columns" }] : []);
  // Trigger data fetch when statusFilter or refreshTrigger changes
  apps$ = toObservable(computed(() => ({
    status: this.statusFilter(),
    refresh: this.refreshTrigger()
  }))).pipe(tap(() => {
    this.loading.set(true);
    this.error.set(null);
  }), switchMap(({ status }) => {
    const owner = this.clientDataService.getSelectedClient()?.id ?? "";
    const params = status === "ALL" ? { owner } : { owner, status };
    return this.appStoreService.getApps(params).pipe(tap(() => {
      this.loading.set(false);
    }), catchError((err) => {
      console.error("Error loading apps:", err);
      this.loading.set(false);
      this.error.set("Unable to load apps. Please try again.");
      return of([]);
    }));
  }));
  apps = toSignal(this.apps$, { initialValue: [] });
  statusOptions = [
    { label: "Draft", value: "draft" },
    { label: "Pending Review", value: "pendingReview" },
    { label: "Under Review", value: "underReview" },
    { label: "Changes Requested", value: "changesRequested" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
    { label: "Suspended", value: "suspended" },
    { label: "Withdrawn", value: "withdrawn" },
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
        field: "status",
        header: "Status",
        sortable: true,
        cellTemplate: this.statusTemplate
      },
      {
        field: "createdAt",
        header: "Submitted",
        sortable: true,
        valueGetter: (app) => new Date(app.createdDate).toLocaleDateString()
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
  openReviewModal(app) {
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: "Review App Submission",
        modalFields: [
          createDropdownField("status", "Decision", [
            { label: "Approve", value: "approved" },
            { label: "Reject", value: "rejected" },
            { label: "Suspend", value: "suspended" },
            { label: "Request Changes", value: "changesRequested" }
          ], void 0, {
            validations: [
              { name: "required", validator: Validators.required }
            ]
          }),
          createTextAreaField("comments", "Comments to Developer", void 0, {
            placeholder: "Explain the reason for this decision...",
            validations: [
              { name: "required", validator: Validators.required }
            ]
          }),
          createTextAreaField("internalNotes", "Internal Notes", void 0, {
            placeholder: "Internal notes for the team..."
          })
        ],
        onSubmit: (data, ref) => {
          const request = {
            id: app.id,
            developerId: app.developerId,
            status: data["status"],
            comments: data["comments"],
            internalNotes: data["internalNotes"]
          };
          return new Promise((resolve) => {
            this.appStoreService.reviewApp(app.id, request).subscribe({
              next: () => {
                this.refreshApps();
                ref.close();
                resolve(true);
              },
              error: (err) => {
                console.error(err);
                resolve(false);
              }
            });
          });
        }
      },
      itemData: {
        status: app.status,
        comments: "",
        internalNotes: ""
      },
      destroyRef: this.destroyRef,
      field: dummyField
    }).subscribe();
  }
  refreshApps() {
    this.refreshTrigger.update((n) => n + 1);
  }
  static \u0275fac = function AppAdminPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppAdminPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppAdminPanelComponent, selectors: [["app-admin-panel"]], viewQuery: function AppAdminPanelComponent_Query(rf, ctx) {
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
  }, decls: 13, vars: 1, consts: [["appIconTemplate", ""], ["statusTemplate", ""], ["actionsTemplate", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex", "flex-wrap", "gap-2", "p-4", "flex-none", "border-b", "border-subtle"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "label", "severity", "outlined"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden", "p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "onClick", "label", "severity", "outlined"], [1, "w-16", "h-16", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl"], [1, "text-xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600"], ["styleClass", "h-full", 3, "columns", "data", "loading", "pagination", "rows", "sortable"], [1, "text-center", "py-20", "border", "border-subtle", "rounded-2xl", "mx-auto", "max-w-2xl"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2", "text-surface-900"], [1, "text-surface-900"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded", "object-cover", "shadow-sm-100", 3, "src", "alt"], [1, "font-medium", "text-surface-900"], [3, "status"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "size", "small", "severity", "secondary", "pTooltip", "View Details", 3, "routerLink", "text"], ["icon", "pi pi-file-edit", "size", "small", "severity", "info", "pTooltip", "Review Submission", 3, "text"], ["icon", "pi pi-file-edit", "size", "small", "severity", "info", "pTooltip", "Review Submission", 3, "onClick", "text"]], template: function AppAdminPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275repeaterCreate(2, AppAdminPanelComponent_For_3_Template, 1, 3, "p-button", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6);
      \u0275\u0275conditionalCreate(5, AppAdminPanelComponent_Conditional_5_Template, 7, 1, "div", 7)(6, AppAdminPanelComponent_Conditional_6_Template, 2, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AppAdminPanelComponent_ng_template_7_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, AppAdminPanelComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, AppAdminPanelComponent_ng_template_11_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.error() ? 5 : 6);
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
  ], styles: ["\n\n/*# sourceMappingURL=app-admin-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppAdminPanelComponent, [{
    type: Component,
    args: [{ selector: "app-admin-panel", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      GridComponent,
      AppStatusBadgeComponent
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
      @if (apps().length > 0 || loading()) {
        <app-grid
          [columns]="columns()"
          [data]="apps()"
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
            No apps found
          </h3>
          <p class="text-surface-900">
            There are no applications matching the selected criteria.
          </p>
        </div>
      }
    }
  </div>
</div>

<!-- Cell Templates -->
<ng-template #appIconTemplate let-app>
  <div class="flex items-center gap-2">
    <img
      [src]="app.iconUrl"
      [alt]="app.name + ' icon'"
      class="w-8 h-8 rounded object-cover shadow-sm-100"
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

    @if (app.status === 'pendingReview' || app.status === 'underReview') {
      <p-button
        icon="pi pi-file-edit"
        size="small"
        [text]="true"
        severity="info"
        pTooltip="Review Submission"
        (onClick)="openReviewModal(app)"
      />
    }
  </div>
</ng-template>
`, styles: ["/* src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.scss */\n/*# sourceMappingURL=app-admin-panel.component.css.map */\n"] }]
  }], null, { appIconTemplate: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppAdminPanelComponent, { className: "AppAdminPanelComponent", filePath: "src/app/features/app-store/pages/app-admin-panel/app-admin-panel.component.ts", lineNumber: 52 });
})();
export {
  AppAdminPanelComponent
};
//# sourceMappingURL=chunk-YX4ADBNL.js.map
