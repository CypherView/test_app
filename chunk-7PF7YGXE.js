import {
  AppCardComponent
} from "./chunk-COJ4EDNN.js";
import {
  AppInstallFacadeService
} from "./chunk-VIH45G36.js";
import "./chunk-FO6ZES52.js";
import "./chunk-KR6I554L.js";
import {
  AppStoreService
} from "./chunk-5LL4AMNO.js";
import "./chunk-WLMUTOYA.js";
import {
  CardModule
} from "./chunk-HEDH66RH.js";
import "./chunk-DXDIX3ID.js";
import "./chunk-3L22U4Q2.js";
import "./chunk-EVW4PTKX.js";
import "./chunk-S5OZ6G2W.js";
import "./chunk-NT6TC2O6.js";
import "./chunk-LHPCQEY3.js";
import "./chunk-2YBWOZSJ.js";
import "./chunk-BTNVOKO5.js";
import "./chunk-FYHRO7AA.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-6ZLKOSJY.js";
import "./chunk-N3IYAUEM.js";
import "./chunk-6RNH5RNU.js";
import "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-KMNNT5Y5.js";
import "./chunk-437DZVOB.js";
import "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-7YJUDWRM.js";
import "./chunk-RNIEZZVX.js";
import {
  ClientDataService,
  RouterLink,
  RouterModule,
  isNullOrUndefined,
  toObservable,
  toSignal
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  Button,
  ButtonModule,
  CommonModule
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  DestroyRef,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/my-installed-apps/my-installed-apps.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyInstalledAppsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "p-progressSpinner", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3, "Loading your apps...");
    \u0275\u0275elementEnd()();
  }
}
function MyInstalledAppsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6, "Please check your connection or try again later.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 16);
    \u0275\u0275listener("onClick", function MyInstalledAppsComponent_Conditional_12_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function MyInstalledAppsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 14);
    \u0275\u0275text(4, "No installed apps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6, " Browse the marketplace to discover and install apps that enhance your fleet management experience. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-button", 19);
    \u0275\u0275elementEnd();
  }
}
function MyInstalledAppsComponent_Conditional_14_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "div")(3, "p", 29);
    \u0275\u0275text(4, "Fee terms have changed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6, "Review and accept the new pricing to restore access");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-button", 31);
    \u0275\u0275listener("onClick", function MyInstalledAppsComponent_Conditional_14_For_2_Conditional_2_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r5);
      const installedApp_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.acknowledgeFee(installedApp_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const installedApp_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("loading", ctx_r1.acknowledgingAppId() === installedApp_r4.id);
  }
}
function MyInstalledAppsComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "app-card", 26);
    \u0275\u0275listener("uninstallClick", function MyInstalledAppsComponent_Conditional_14_For_2_Template_app_card_uninstallClick_1_listener() {
      const installedApp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uninstallApp(installedApp_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, MyInstalledAppsComponent_Conditional_14_For_2_Conditional_2_Template, 8, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const installedApp_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("app", installedApp_r4)("isLoading", ctx_r1.actionAppId() === installedApp_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional((installedApp_r4.installation == null ? null : installedApp_r4.installation.pendingFeeAcknowledgement) ? 2 : -1);
  }
}
function MyInstalledAppsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, MyInstalledAppsComponent_Conditional_14_For_2_Template, 3, 3, "div", 21, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 2)(5, "div")(6, "p", 23);
    \u0275\u0275text(7, " Total Installed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredApps());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filteredApps().length, " ");
  }
}
var MyInstalledAppsComponent = class _MyInstalledAppsComponent {
  installFacade = inject(AppInstallFacadeService);
  appStoreService = inject(AppStoreService);
  destroyRef = inject(DestroyRef);
  actionAppId = signal(null, ...ngDevMode ? [{ debugName: "actionAppId" }] : (
    /* istanbul ignore next */
    []
  ));
  acknowledgingAppId = signal(null, ...ngDevMode ? [{ debugName: "acknowledgingAppId" }] : (
    /* istanbul ignore next */
    []
  ));
  clientDataService = inject(ClientDataService);
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  currentClientId = computed(() => this.clientDataService.getSelectedClient()?.id, ...ngDevMode ? [{ debugName: "currentClientId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Refresh trigger
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  // Single call returns apps with installation context already embedded
  installedApps = toSignal(toObservable(this.refreshTrigger).pipe(tap(() => this.isLoading.set(true)), switchMap(() => {
    const clientId = this.currentClientId();
    if (isNullOrUndefined(clientId)) {
      this.isLoading.set(false);
      return of([]);
    }
    return this.appStoreService.getOrganisationInstalledApps(clientId).pipe(tap(() => this.isLoading.set(false)), catchError((err) => {
      console.error("Error loading installed apps:", err);
      this.error.set("Unable to load your installed apps.");
      this.isLoading.set(false);
      return of([]);
    }));
  })), { initialValue: [] });
  filteredApps = computed(() => this.installedApps() ?? [], ...ngDevMode ? [{ debugName: "filteredApps" }] : (
    /* istanbul ignore next */
    []
  ));
  hasInstalledApps = computed(() => this.filteredApps().length > 0, ...ngDevMode ? [{ debugName: "hasInstalledApps" }] : (
    /* istanbul ignore next */
    []
  ));
  refresh() {
    this.error.set(null);
    this.refreshTrigger.update((n) => n + 1);
  }
  uninstallApp(app) {
    if (isNullOrUndefined(app.installation?.id))
      return;
    const isExternalApp = app.integrationPoints?.some((p) => p.screenId === "appSidebar") ?? false;
    this.actionAppId.set(app.id);
    this.installFacade.uninstallApp(app.installation?.id, isExternalApp, () => {
      this.actionAppId.set(null);
      this.refresh();
    });
  }
  acknowledgeFee(app) {
    const installationId = app.installation?.id;
    if (isNullOrUndefined(installationId))
      return;
    this.acknowledgingAppId.set(app.id);
    this.installFacade.acknowledgeFeeForInstallation(installationId, app.feeModel, () => {
      this.acknowledgingAppId.set(null);
      this.refresh();
    });
  }
  static \u0275fac = function MyInstalledAppsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyInstalledAppsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyInstalledAppsComponent, selectors: [["app-my-installed-apps"]], decls: 15, vars: 3, consts: [[1, "flex", "flex-col", "h-full"], [1, "flex-none", "p-6", "border-b", "border-subtle"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-black", "tracking-tight", "text-surface-900"], [1, "mr-2", "pi", "pi-box", "text-primary"], [1, "mt-1", "text-sm", "font-medium", "text-surface-600"], ["icon", "pi pi-refresh", "pTooltip", "Refresh", "severity", "secondary", 3, "onClick", "text", "loading"], [1, "overflow-auto", "flex-1", "p-6"], [1, "flex", "flex-col", "gap-3", "justify-center", "items-center", "py-20", "h-full"], [1, "flex", "flex-col", "justify-center", "items-center", "py-20", "h-full", "text-center"], ["strokeWidth", "3", 1, "w-12", "h-12"], [1, "font-medium"], [1, "flex", "justify-center", "items-center", "mb-6", "w-20", "h-20", "rounded-full"], [1, "text-4xl", "pi", "pi-exclamation-triangle"], [1, "mb-2", "text-2xl", "font-bold"], [1, "max-w-sm"], ["label", "Try Again", "severity", "secondary", 1, "mt-8", 3, "onClick"], [1, "flex", "justify-center", "items-center", "mb-6", "w-20", "h-20", "rounded-full", "border-2", "border-dashed", "border-surface-300"], [1, "pi", "pi-box", "!text-4xl"], ["routerLink", "/app-store", "label", "Explore Apps", "icon", "pi pi-compass", "severity", "primary", 1, "mt-8", "font-black"], [1, "grid", "grid-cols-1", "gap-6", "md:grid-cols-2", "lg:grid-cols-3"], [1, "relative"], [1, "p-6", "mt-8", "rounded-2xl", "border", "border-subtle"], [1, "text-sm", "font-bold", "tracking-widest", "uppercase"], [1, "mt-1", "text-3xl", "font-black", "text-primary"], [1, "text-6xl", "pi", "pi-box"], [3, "uninstallClick", "app", "isLoading"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "bg-surface-0/90", "backdrop-blur-sm", "p-4", "text-center", "gap-3"], [1, "pi", "pi-exclamation-triangle", "text-2xl", "text-amber-500"], [1, "font-semibold", "text-sm"], [1, "text-xs", "text-surface-500", "mt-1"], ["label", "Review & Accept", "icon", "pi pi-check", "size", "small", "severity", "primary", 3, "onClick", "loading"]], template: function MyInstalledAppsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275text(6, " Installed Apps ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Manage the apps you've installed ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p-button", 6);
      \u0275\u0275listener("onClick", function MyInstalledAppsComponent_Template_p_button_onClick_9_listener() {
        return ctx.refresh();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275conditionalCreate(11, MyInstalledAppsComponent_Conditional_11_Template, 4, 0, "div", 8)(12, MyInstalledAppsComponent_Conditional_12_Template, 8, 1, "div", 9)(13, MyInstalledAppsComponent_Conditional_13_Template, 8, 0, "div", 9)(14, MyInstalledAppsComponent_Conditional_14_Template, 11, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("text", true)("loading", ctx.isLoading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 11 : ctx.error() ? 12 : !ctx.hasInstalledApps() ? 13 : 14);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    CardModule,
    ProgressSpinnerModule,
    ProgressSpinner,
    TooltipModule,
    Tooltip,
    AppCardComponent
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=my-installed-apps.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyInstalledAppsComponent, [{
    type: Component,
    args: [{ selector: "app-my-installed-apps", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      AppCardComponent
    ], template: `<div class="flex flex-col h-full">
  <!-- Header -->
  <div class="flex-none p-6 border-b border-subtle">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-black tracking-tight text-surface-900">
          <i class="mr-2 pi pi-box text-primary"></i>
          Installed Apps
        </h2>
        <p class="mt-1 text-sm font-medium text-surface-600">
          Manage the apps you've installed
        </p>
      </div>
      <p-button
        icon="pi pi-refresh"
        [text]="true"
        (onClick)="refresh()"
        [loading]="isLoading()"
        pTooltip="Refresh"
        severity="secondary"
      />
    </div>
  </div>

  <!-- Content -->
  <div class="overflow-auto flex-1 p-6">
    @if (isLoading()) {
      <div class="flex flex-col gap-3 justify-center items-center py-20 h-full">
        <p-progressSpinner
          class="w-12 h-12"
          strokeWidth="3"
        ></p-progressSpinner>
        <p class="font-medium">Loading your apps...</p>
      </div>
    } @else if (error()) {
      <div
        class="flex flex-col justify-center items-center py-20 h-full text-center"
      >
        <div
          class="flex justify-center items-center mb-6 w-20 h-20 rounded-full"
        >
          <i class="text-4xl pi pi-exclamation-triangle"></i>
        </div>
        <h3 class="mb-2 text-2xl font-bold">{{ error() }}</h3>
        <p class="max-w-sm">Please check your connection or try again later.</p>
        <p-button
          (onClick)="refresh()"
          label="Try Again"
          severity="secondary"
          class="mt-8"
        />
      </div>
    } @else if (!hasInstalledApps()) {
      <div
        class="flex flex-col justify-center items-center py-20 h-full text-center"
      >
        <div
          class="flex justify-center items-center mb-6 w-20 h-20 rounded-full border-2 border-dashed border-surface-300"
        >
          <i class="pi pi-box !text-4xl"></i>
        </div>
        <h3 class="mb-2 text-2xl font-bold">No installed apps</h3>
        <p class="max-w-sm">
          Browse the marketplace to discover and install apps that enhance your
          fleet management experience.
        </p>
        <p-button
          routerLink="/app-store"
          label="Explore Apps"
          icon="pi pi-compass"
          severity="primary"
          class="mt-8 font-black"
        />
      </div>
    } @else {
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (installedApp of filteredApps(); track installedApp.id) {
          <div class="relative">
            <app-card
              [app]="installedApp"
              [isLoading]="actionAppId() === installedApp.id"
              (uninstallClick)="uninstallApp(installedApp)"
            />
            @if (installedApp.installation?.pendingFeeAcknowledgement) {
              <div class="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-surface-0/90 backdrop-blur-sm p-4 text-center gap-3">
                <i class="pi pi-exclamation-triangle text-2xl text-amber-500"></i>
                <div>
                  <p class="font-semibold text-sm">Fee terms have changed</p>
                  <p class="text-xs text-surface-500 mt-1">Review and accept the new pricing to restore access</p>
                </div>
                <p-button
                  label="Review & Accept"
                  icon="pi pi-check"
                  size="small"
                  severity="primary"
                  [loading]="acknowledgingAppId() === installedApp.id"
                  (onClick)="acknowledgeFee(installedApp)"
                />
              </div>
            }
          </div>
        }
      </div>

      <!-- Stats Footer -->
      <div class="p-6 mt-8 rounded-2xl border border-subtle">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-bold tracking-widest uppercase">
              Total Installed
            </p>
            <p class="mt-1 text-3xl font-black text-primary">
              {{ filteredApps().length }}
            </p>
          </div>
          <i class="text-6xl pi pi-box"></i>
        </div>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/app-store/pages/my-installed-apps/my-installed-apps.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=my-installed-apps.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyInstalledAppsComponent, { className: "MyInstalledAppsComponent", filePath: "src/app/features/app-store/pages/my-installed-apps/my-installed-apps.component.ts", lineNumber: 33 });
})();
export {
  MyInstalledAppsComponent
};
//# sourceMappingURL=chunk-7PF7YGXE.js.map
