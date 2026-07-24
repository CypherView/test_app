import {
  AppInstallationService
} from "./chunk-FO6ZES52.js";
import {
  ACTION_EXPANSION,
  getFeeLabel
} from "./chunk-KR6I554L.js";
import {
  ModalListFormComponent
} from "./chunk-WLMUTOYA.js";
import {
  ModalFormService
} from "./chunk-3L22U4Q2.js";
import {
  TranslateService
} from "./chunk-RNIEZZVX.js";
import {
  AuthDataService,
  ClientDataService,
  createNumberField,
  createTextAreaField,
  createTextField,
  isNullOrUndefined
} from "./chunk-6H7AOYCU.js";
import {
  CommonModule,
  ConfirmationService,
  formatCurrency
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  Injectable,
  Input,
  catchError,
  inject,
  input,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JFHDN3YU.js";

// src/app/features/app-store/services/app-install-facade.service.ts
var AppInstallFacadeService = class _AppInstallFacadeService {
  appInstallationService = inject(AppInstallationService);
  clientDataService = inject(ClientDataService);
  modalFormService = inject(ModalFormService);
  confirmationService = inject(ConfirmationService);
  authDataService = inject(AuthDataService);
  translateService = inject(TranslateService);
  // ── UI state ────────────────────────────────────────────────────────────────
  isPerformingAction = signal(false, ...ngDevMode ? [{ debugName: "isPerformingAction" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  isTogglingEnabled = signal(false, ...ngDevMode ? [{ debugName: "isTogglingEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleEnabledError = signal(null, ...ngDevMode ? [{ debugName: "toggleEnabledError" }] : (
    /* istanbul ignore next */
    []
  ));
  // ── Estimate ─────────────────────────────────────────────────────────────────
  estimateLoading = signal(false, ...ngDevMode ? [{ debugName: "estimateLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  estimate = signal(null, ...ngDevMode ? [{ debugName: "estimate" }] : (
    /* istanbul ignore next */
    []
  ));
  estimateError = signal(null, ...ngDevMode ? [{ debugName: "estimateError" }] : (
    /* istanbul ignore next */
    []
  ));
  loadEstimate(appId, ownerId) {
    this.estimate.set(null);
    this.estimateError.set(null);
    this.estimateLoading.set(true);
    this.appInstallationService.getInstallationEstimate(appId, ownerId).pipe(tap((result) => this.estimate.set(result)), catchError((err) => {
      console.error("Estimate fetch error:", err);
      this.estimateError.set(this.translateService.instant("ADMIN.APP_STORE.INSTALL.ERROR_ESTIMATE"));
      return of(null);
    })).subscribe({ complete: () => this.estimateLoading.set(false) });
  }
  // ── Install ─────────────────────────────────────────────────────────────────
  /**
   * Install an app. Opens a config modal for external (appSidebar) apps;
   * performs a direct install for all others.
   */
  installApp(app, destroyRef, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    const missingPermissions = this.getMissingPermissions(app.integrationPoints ?? []);
    if (missingPermissions.length > 0) {
      this.showPermissionBlockDialog(missingPermissions);
      return;
    }
    if (app.feeModel != null) {
      this.confirmFeeAndInstall(app, clientId, destroyRef, onSuccess);
      return;
    }
    const isExternalApp = app.integrationPoints?.some((point) => point.screenId === "appSidebar");
    if (isExternalApp) {
      this.openInstallConfigModal(app, clientId, destroyRef, onSuccess);
    } else {
      this.performInstallation(app.id, clientId, {}, onSuccess);
    }
  }
  confirmFeeAndInstall(app, clientId, destroyRef, onSuccess) {
    const label = getFeeLabel(app.feeModel, this.translateService);
    const estimate = this.estimate();
    let message = this.translateService.instant("ADMIN.APP_STORE.INSTALL.FEE_MESSAGE", { label });
    if (estimate != null && estimate.estimatedCost != null && estimate.activeDeviceCount != null && app.feeModel?.type === "perActiveDevice") {
      const total = formatCurrency(estimate.estimatedCost, "en-ZA", "R", "ZAR");
      message += this.translateService.instant("ADMIN.APP_STORE.INSTALL.FEE_ESTIMATE", { count: estimate.activeDeviceCount, total });
    }
    this.confirmationService.confirm({
      header: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIRM_HEADER"),
      message,
      icon: "pi pi-credit-card",
      acceptLabel: this.translateService.instant("ADMIN.APP_STORE.INSTALL.AGREE_INSTALL"),
      rejectLabel: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CANCEL"),
      accept: () => {
        const isExternal = app.integrationPoints?.some((p) => p.screenId === "appSidebar");
        if (isExternal) {
          this.openInstallConfigModal(app, clientId, destroyRef, onSuccess);
        } else {
          this.performInstallation(app.id, clientId, {}, onSuccess);
        }
      }
    });
  }
  openInstallConfigModal(app, clientId, destroyRef, onSuccess) {
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_TITLE"),
        subHeader: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_SUBHEADER"),
        modalFields: [
          createTextField("icon", this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_ICON_LABEL"), "browser", {
            placeholder: "browser",
            hint: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_ICON_HINT")
          }),
          createTextField("section", this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_SECTION_LABEL"), "Apps", {
            placeholder: "Apps",
            hint: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_SECTION_HINT")
          }),
          createNumberField("order", this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_ORDER_LABEL"), 0, {
            hint: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CONFIG_ORDER_HINT")
          })
        ],
        onSubmit: (data, ref) => {
          this.error.set(null);
          this.isPerformingAction.set(true);
          const config = {
            appSidebar: {
              icon: data["icon"],
              section: data["section"],
              order: data["order"]
            }
          };
          return new Promise((resolve) => {
            this.appInstallationService.installExternalApp(app.id, clientId, config).pipe(tap(async () => {
              this.error.set(null);
              try {
                await this.clientDataService.setSelectedClientById(clientId);
              } catch (e) {
                console.warn("Failed to refresh client data:", e);
              }
              this.isPerformingAction.set(false);
              onSuccess?.();
              ref.close();
              resolve(true);
            }), catchError((err) => {
              console.error("App installation error:", err);
              this.error.set(this.translateService.instant("ADMIN.APP_STORE.INSTALL.ERROR_INSTALL"));
              this.isPerformingAction.set(false);
              resolve(false);
              return of(null);
            })).subscribe();
          });
        }
      },
      itemData: { icon: "browser", section: "Apps", order: 0 },
      destroyRef,
      field: dummyField
    }).subscribe();
  }
  performInstallation(appId, clientId, configuration, onSuccess) {
    this.error.set(null);
    this.isPerformingAction.set(true);
    this.appInstallationService.installApp(appId, clientId, configuration).pipe(tap((installation) => {
      this.error.set(null);
      if (installation.pendingFeeAcknowledgement) {
        this.appInstallationService.acknowledgeFee(installation.id, clientId).subscribe();
      }
      onSuccess?.();
    }), catchError((err) => {
      console.error("App installation error:", err);
      this.error.set(this.translateService.instant("ADMIN.APP_STORE.INSTALL.ERROR_INSTALL"));
      return of(null);
    })).subscribe({ complete: () => this.isPerformingAction.set(false) });
  }
  // ── Permission Validation ─────────────────────────────────────────────────────
  /** Expands raw stored legacyRights permissions into full action set. */
  buildExpandedPermissionSet() {
    const expanded = /* @__PURE__ */ new Set();
    for (const perm of this.authDataService.userPermissions()) {
      const colonIdx = perm.indexOf(":");
      if (colonIdx === -1)
        continue;
      const resource = perm.substring(0, colonIdx);
      const rawAction = perm.substring(colonIdx + 1);
      const actions = ACTION_EXPANSION[rawAction] ?? [rawAction];
      for (const action of actions)
        expanded.add(`${resource}:${action}`);
    }
    return expanded;
  }
  /** Returns missing "entity:action" strings for the app's integration points. */
  getMissingPermissions(integrationPoints) {
    if (this.authDataService.userPermissions().includes("system:all"))
      return [];
    const expanded = this.buildExpandedPermissionSet();
    const missing = /* @__PURE__ */ new Set();
    for (const ip of integrationPoints ?? []) {
      for (const perm of ip.requiredPermissions ?? []) {
        const colonIdx = perm.indexOf(":");
        if (colonIdx === -1)
          continue;
        const entity = perm.slice(0, colonIdx);
        const action = perm.slice(colonIdx + 1);
        const normalized = entity.toLowerCase().endsWith("s") ? entity.toLowerCase().slice(0, -1) : entity.toLowerCase();
        if (!expanded.has(`${normalized}:${action}`))
          missing.add(`${normalized}:${action}`);
      }
    }
    return [...missing];
  }
  showPermissionBlockDialog(missingPermissions) {
    const list = missingPermissions.map((p) => `<li><code>${p}</code></li>`).join("");
    const intro = this.translateService.instant("ADMIN.APP_STORE.INSTALL.PERMISSION_BLOCK_INTRO");
    const footer = this.translateService.instant("ADMIN.APP_STORE.INSTALL.PERMISSION_BLOCK_FOOTER");
    this.confirmationService.confirm({
      header: this.translateService.instant("ADMIN.APP_STORE.INSTALL.PERMISSION_BLOCK_HEADER"),
      message: `${intro}<ul class="mt-2">${list}</ul><p class="mt-2 text-sm">${footer}</p>`,
      icon: "pi pi-lock",
      acceptLabel: this.translateService.instant("ADMIN.APP_STORE.INSTALL.OK"),
      rejectVisible: false,
      accept: () => {
      }
    });
  }
  // ── Uninstall ────────────────────────────────────────────────────────────────
  /**
   * Uninstall an app by installation ID.
   * Pass `isExternalApp: true` for appSidebar apps so the correct endpoint is used.
   */
  uninstallApp(installationId, isExternalApp = false, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    this.error.set(null);
    this.isPerformingAction.set(true);
    const uninstall$ = isExternalApp ? this.appInstallationService.uninstallExternalApp(installationId, clientId) : this.appInstallationService.uninstallApp(installationId, clientId);
    uninstall$.pipe(tap(async () => {
      this.error.set(null);
      if (isExternalApp) {
        try {
          await this.clientDataService.setSelectedClientById(clientId);
        } catch (e) {
          console.warn("Failed to refresh client data:", e);
        }
      }
      onSuccess?.();
    }), catchError((err) => {
      console.error("App uninstallation error:", err);
      this.error.set(this.translateService.instant("ADMIN.APP_STORE.INSTALL.ERROR_UNINSTALL"));
      return of(null);
    })).subscribe({ complete: () => this.isPerformingAction.set(false) });
  }
  // ── Toggle enabled ───────────────────────────────────────────────────────────
  // ── Fee Acknowledgement ──────────────────────────────────────────────────────
  acknowledgeFeeForInstallation(installationId, feeModel, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    const label = getFeeLabel(feeModel, this.translateService);
    this.confirmationService.confirm({
      header: this.translateService.instant("ADMIN.APP_STORE.INSTALL.FEE_CHANGED_HEADER"),
      message: this.translateService.instant("ADMIN.APP_STORE.INSTALL.FEE_CHANGED_MESSAGE", { label }),
      icon: "pi pi-credit-card",
      acceptLabel: this.translateService.instant("ADMIN.APP_STORE.INSTALL.ACCEPT"),
      rejectLabel: this.translateService.instant("ADMIN.APP_STORE.INSTALL.CANCEL"),
      accept: () => {
        this.appInstallationService.acknowledgeFee(installationId, clientId).pipe(tap(() => onSuccess?.()), catchError((err) => {
          console.error("Fee acknowledgement error:", err);
          return of(null);
        })).subscribe();
      }
    });
  }
  toggleEnabled(installationId, currentValue, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    this.toggleEnabledError.set(null);
    this.isTogglingEnabled.set(true);
    this.appInstallationService.setEnabled(installationId, clientId, !currentValue).pipe(tap(() => onSuccess?.()), catchError((err) => {
      console.error("Toggle enabled error:", err);
      this.toggleEnabledError.set(this.translateService.instant("ADMIN.APP_STORE.INSTALL.ERROR_TOGGLE"));
      return of(null);
    })).subscribe({ complete: () => this.isTogglingEnabled.set(false) });
  }
  static \u0275fac = function AppInstallFacadeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInstallFacadeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInstallFacadeService, factory: _AppInstallFacadeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInstallFacadeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/app-store/components/app-rating-display/app-rating-display.component.ts
var AppRatingDisplayComponent = class _AppRatingDisplayComponent {
  averageRating = input.required(...ngDevMode ? [{ debugName: "averageRating" }] : (
    /* istanbul ignore next */
    []
  ));
  reviewCount = input.required(...ngDevMode ? [{ debugName: "reviewCount" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppRatingDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRatingDisplayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppRatingDisplayComponent, selectors: [["app-rating-display"]], inputs: { averageRating: [1, "averageRating"], reviewCount: [1, "reviewCount"] }, decls: 6, vars: 2, consts: [[1, "flex", "items-center", "gap-1.5"], [1, "pi", "pi-star-fill", "text-yellow-400", "text-xs"], [1, "text-sm", "font-bold", "text-surface-700"], [1, "text-[10px]", "text-surface-400"]], template: function AppRatingDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "i", 1);
      \u0275\u0275domElementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.averageRating());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.reviewCount(), ")");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRatingDisplayComponent, [{
    type: Component,
    args: [{ selector: "app-rating-display", imports: [CommonModule], template: '<div class="flex items-center gap-1.5">\n  <i class="pi pi-star-fill text-yellow-400 text-xs"></i>\n  <span class="text-sm font-bold text-surface-700">{{ averageRating() }}</span>\n  <span class="text-[10px] text-surface-400">({{ reviewCount() }})</span>\n</div>\n' }]
  }], null, { averageRating: [{ type: Input, args: [{ isSignal: true, alias: "averageRating", required: true }] }], reviewCount: [{ type: Input, args: [{ isSignal: true, alias: "reviewCount", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppRatingDisplayComponent, { className: "AppRatingDisplayComponent", filePath: "src/app/features/app-store/components/app-rating-display/app-rating-display.component.ts", lineNumber: 10 });
})();

export {
  AppInstallFacadeService,
  AppRatingDisplayComponent
};
//# sourceMappingURL=chunk-VIH45G36.js.map
