import {
  AppInstallationService
} from "./chunk-D267LEKG.js";
import {
  AppCardComponent
} from "./chunk-VTGGDGBL.js";
import "./chunk-MSUTE3TJ.js";
import {
  AppStoreService
} from "./chunk-26EHOY33.js";
import {
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  ProgressSpinner,
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
  AuthDataService,
  CommonModule,
  RouterLink,
  RouterModule,
  isNullOrUndefined,
  toObservable,
  toSignal
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  catchError,
  computed,
  forkJoin,
  inject,
  map,
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
} from "./chunk-4KHPVNTA.js";
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
function MyInstalledAppsComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-card", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "p-button", 28);
    \u0275\u0275listener("onClick", function MyInstalledAppsComponent_Conditional_14_For_2_Template_p_button_onClick_3_listener() {
      const installedApp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uninstallApp(installedApp_r4.installationId));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "span", 30);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275text(7, " Installed ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const installedApp_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("app", installedApp_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MyInstalledAppsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, MyInstalledAppsComponent_Conditional_14_For_2_Template, 8, 3, "div", 21, _forTrack0);
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
  appInstallationService = inject(AppInstallationService);
  appStoreService = inject(AppStoreService);
  authDataService = inject(AuthDataService);
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  currentUserId = this.authDataService.getUserProfile()?.id;
  // Refresh trigger
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : []);
  // Fetch installations and enrich with app details
  installedApps = toSignal(toObservable(this.refreshTrigger).pipe(tap(() => this.isLoading.set(true)), switchMap(() => {
    if (isNullOrUndefined(this.currentUserId)) {
      this.isLoading.set(false);
      return of([]);
    }
    return this.appInstallationService.getInstallations({ owner: this.currentUserId }).pipe(switchMap((installations) => {
      if (installations.length === 0) {
        this.isLoading.set(false);
        return of([]);
      }
      const validInstallations = installations.filter((inst) => !isNullOrUndefined(inst.appId) && inst.appId.trim() !== "");
      if (validInstallations.length === 0) {
        this.isLoading.set(false);
        return of([]);
      }
      const uniqueAppIds = /* @__PURE__ */ new Set();
      const deduplicatedInstallations = validInstallations.filter((inst) => {
        if (uniqueAppIds.has(inst.appId)) {
          return false;
        }
        uniqueAppIds.add(inst.appId);
        return true;
      });
      const appRequests = deduplicatedInstallations.map((installation) => this.appStoreService.getAppById(installation.appId, this.currentUserId ?? "").pipe(catchError((err) => {
        console.warn(`Failed to load app details for ${installation.appId}:`, err);
        return of(null);
      }), tap((app) => {
        if (app && !isNullOrUndefined(app)) {
          app.installationId = installation.id;
          app.installedAt = installation.createdAt;
          app.isEnabled = installation.isEnabled;
        }
      })));
      return forkJoin(appRequests).pipe(map((apps) => apps.filter((app) => app !== null && !isNullOrUndefined(app))), tap(() => this.isLoading.set(false)), catchError((err) => {
        console.error("Error loading app details:", err);
        this.error.set("Unable to load app details.");
        this.isLoading.set(false);
        return of([]);
      }));
    }), catchError((err) => {
      console.error("Error loading installations:", err);
      this.error.set("Unable to load your installed apps.");
      this.isLoading.set(false);
      return of([]);
    }));
  })), { initialValue: [] });
  filteredApps = computed(() => {
    return this.installedApps() ?? [];
  }, ...ngDevMode ? [{ debugName: "filteredApps" }] : []);
  hasInstalledApps = computed(() => this.filteredApps().length > 0, ...ngDevMode ? [{ debugName: "hasInstalledApps" }] : []);
  refresh() {
    this.error.set(null);
    this.refreshTrigger.update((n) => n + 1);
  }
  uninstallApp(installationId) {
    if (isNullOrUndefined(this.currentUserId))
      return;
    this.appInstallationService.uninstallApp(installationId, this.currentUserId).pipe(tap(() => this.refresh()), catchError((err) => {
      console.error("Error uninstalling app:", err);
      this.error.set("Could not uninstall the app. Please try again.");
      return of(null);
    })).subscribe();
  }
  static \u0275fac = function MyInstalledAppsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyInstalledAppsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyInstalledAppsComponent, selectors: [["app-my-installed-apps"]], decls: 15, vars: 3, consts: [[1, "flex", "flex-col", "h-full"], [1, "p-6", "border-b", "border-subtle", "flex-none"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-black", "text-surface-900", "tracking-tight"], [1, "pi", "pi-box", "text-primary", "mr-2"], [1, "text-surface-600", "text-sm", "mt-1", "font-medium"], ["icon", "pi pi-refresh", "pTooltip", "Refresh", "severity", "secondary", 3, "onClick", "text", "loading"], [1, "flex-1", "overflow-auto", "p-6"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full", "gap-3", "py-20"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center", "h-full"], ["strokeWidth", "3", 1, "w-12", "h-12"], [1, "font-medium"], [1, "w-20", "h-20", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "pi", "pi-exclamation-triangle", "text-4xl"], [1, "text-2xl", "font-bold", "mb-2"], [1, "max-w-sm"], ["label", "Try Again", "severity", "secondary", 1, "mt-8", 3, "onClick"], [1, "w-20", "h-20", "rounded-full", "flex", "items-center", "justify-center", "mb-6", "border-2", "border-dashed", "border-surface-300"], [1, "pi", "pi-box", "!text-4xl"], ["routerLink", "/app-store", "label", "Explore Apps", "icon", "pi pi-compass", "severity", "primary", 1, "mt-8", "font-black"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "relative"], [1, "mt-8", "p-6", "rounded-2xl", "border", "border-subtle"], [1, "text-sm", "font-bold", "uppercase", "tracking-widest"], [1, "text-3xl", "font-black", "text-primary", "mt-1"], [1, "pi", "pi-box", "text-6xl"], [3, "app"], [1, "absolute", "top-4", "right-4", "flex", "gap-2", "opacity-0", "hover:opacity-100", "transition-opacity"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", "pTooltip", "Uninstall", "styleClass", "shadow-lg", 3, "onClick", "rounded", "text"], [1, "absolute", "top-4", "left-4"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-bold", "bg-green-100", "text-green-700", "shadow-sm", "flex", "items-center", "gap-1"], [1, "pi", "pi-check-circle"]], template: function MyInstalledAppsComponent_Template(rf, ctx) {
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
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=my-installed-apps.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyInstalledAppsComponent, [{
    type: Component,
    args: [{ selector: "app-my-installed-apps", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      ProgressSpinnerModule,
      TooltipModule,
      AppCardComponent
    ], template: `<div class="flex flex-col h-full">
  <!-- Header -->
  <div class="p-6 border-b border-subtle flex-none">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-black text-surface-900 tracking-tight">
          <i class="pi pi-box text-primary mr-2"></i>
          Installed Apps
        </h2>
        <p class="text-surface-600 text-sm mt-1 font-medium">
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
  <div class="flex-1 overflow-auto p-6">
    @if (isLoading()) {
      <div class="flex flex-col items-center justify-center h-full gap-3 py-20">
        <p-progressSpinner
          class="w-12 h-12"
          strokeWidth="3"
        ></p-progressSpinner>
        <p class="font-medium">Loading your apps...</p>
      </div>
    } @else if (error()) {
      <div
        class="flex flex-col items-center justify-center py-20 text-center h-full"
      >
        <div
          class="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        >
          <i class="pi pi-exclamation-triangle text-4xl"></i>
        </div>
        <h3 class="text-2xl font-bold mb-2">{{ error() }}</h3>
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
        class="flex flex-col items-center justify-center py-20 text-center h-full"
      >
        <div
          class="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-surface-300"
        >
          <i class="pi pi-box !text-4xl"></i>
        </div>
        <h3 class="text-2xl font-bold mb-2">No installed apps</h3>
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (installedApp of filteredApps(); track installedApp.id) {
          <div class="relative">
            <app-card [app]="installedApp" />

            <!-- Overlay action buttons -->
            <div
              class="absolute top-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity"
            >
              <p-button
                icon="pi pi-trash"
                severity="danger"
                size="small"
                [rounded]="true"
                [text]="true"
                pTooltip="Uninstall"
                (onClick)="uninstallApp(installedApp.installationId)"
                styleClass="shadow-lg"
              />
            </div>

            <!-- Installed badge -->
            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 shadow-sm flex items-center gap-1"
              >
                <i class="pi pi-check-circle"></i>
                Installed
              </span>
            </div>
          </div>
        }
      </div>

      <!-- Stats Footer -->
      <div class="mt-8 p-6 rounded-2xl border border-subtle">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-bold uppercase tracking-widest">
              Total Installed
            </p>
            <p class="text-3xl font-black text-primary mt-1">
              {{ filteredApps().length }}
            </p>
          </div>
          <i class="pi pi-box text-6xl"></i>
        </div>
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/app-store/pages/my-installed-apps/my-installed-apps.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=my-installed-apps.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyInstalledAppsComponent, { className: "MyInstalledAppsComponent", filePath: "src/app/features/app-store/pages/my-installed-apps/my-installed-apps.component.ts", lineNumber: 40 });
})();
export {
  MyInstalledAppsComponent
};
//# sourceMappingURL=chunk-QLW6VDTL.js.map
