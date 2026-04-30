import {
  ModalListFormComponent
} from "./chunk-WSLDKKBX.js";
import {
  ModalFormService
} from "./chunk-AJ5RAXL3.js";
import {
  ApiUrlService,
  ClientDataService,
  CommonModule,
  HttpClient,
  HttpParams,
  createNumberField,
  createTextAreaField,
  createTextField,
  isNullOrUndefined
} from "./chunk-L7IB7NHM.js";
import {
  Component,
  Injectable,
  Input,
  catchError,
  inject,
  input,
  map,
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
} from "./chunk-PNETQGIO.js";

// src/app/features/app-store/services/app-installation.service.ts
var AppInstallationService = class _AppInstallationService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/installations`;
  }
  /**
   * Get all app installations for a user/organization
   * @param params Query parameters for filtering
   */
  getInstallations(params) {
    let httpParams = new HttpParams();
    if (params) {
      if (params.owner !== void 0) {
        httpParams = httpParams.set("owner", params.owner);
      }
      if (params.offset !== void 0) {
        httpParams = httpParams.set("offset", params.offset.toString());
      }
      if (params.limit !== void 0) {
        httpParams = httpParams.set("limit", params.limit.toString());
      }
      if (params.sort !== void 0) {
        httpParams = httpParams.set("sort", params.sort);
      }
      if (params.filter !== void 0) {
        httpParams = httpParams.set("filter", params.filter);
      }
    }
    return this.http.get(this.baseUrl, {
      params: httpParams
    }).pipe(map((response) => response.items.filter((item) => item != null).map((item) => this.mapFromApi(item))));
  }
  /**
   * Get a specific installation by ID
   * @param id Installation ID
   * @param owner Optional owner filter
   */
  getInstallation(id, owner) {
    let httpParams = new HttpParams();
    if (owner !== void 0) {
      httpParams = httpParams.set("owner", owner);
    }
    return this.http.get(`${this.baseUrl}/${id}`, {
      params: httpParams
    }).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Install an app for a user/organization
   * @param appId The app to install
   * @param ownerId The owner (user/org) installing the app
   * @param configuration Optional initial configuration
   */
  installApp(appId, ownerId, configuration) {
    const request = {
      appId,
      ownerId,
      configuration
    };
    return this.http.post(this.baseUrl, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Install an external app (appSidebar) with automatic external tab configuration
   * This endpoint atomically creates the installation and adds the external tab to client flags
   * If any step fails, all changes are automatically rolled back using saga pattern
   * @param appId The app to install
   * @param ownerId The owner (user/org) installing the app
   * @param configuration Optional configuration nested by integration point
   *                      Example: { appSidebar: { icon: 'chart', section: 'ANALYTICS', order: 5 } }
   *                      If not provided, backend uses defaults: icon="browser", section="Apps", order=0
   */
  installExternalApp(appId, ownerId, configuration) {
    const request = {
      appId,
      ownerId,
      configuration
    };
    const externalInstallationsUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/external-installations`;
    return this.http.post(externalInstallationsUrl, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Uninstall an external app (appSidebar) with automatic external tab removal
   * This endpoint atomically removes the installation and the external tab from client flags
   * If any step fails, all changes are automatically rolled back using saga pattern
   * @param id Installation ID
   * @param owner Owner (client) ID
   */
  uninstallExternalApp(id, owner) {
    const httpParams = new HttpParams().set("owner", owner);
    const externalInstallationsUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/external-installations/${id}`;
    return this.http.delete(externalInstallationsUrl, {
      params: httpParams
    }).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Uninstall an app
   * @param id Installation ID
   * @param owner Optional owner filter
   */
  uninstallApp(id, owner) {
    const httpParams = new HttpParams().set("owner", owner);
    return this.http.delete(`${this.baseUrl}/${id}`, {
      params: httpParams
    }).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Update app configuration
   * @param id Installation ID
   * @param ownerId Owner ID
   * @param configuration New configuration
   */
  updateConfiguration(id, ownerId, configuration) {
    const request = {
      ownerId,
      configuration
    };
    return this.http.put(`${this.baseUrl}/${id}/config`, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Enable or disable an installed app
   * @param id Installation ID
   * @param ownerId Owner ID
   * @param isEnabled Whether the app should be enabled
   */
  setEnabled(id, ownerId, isEnabled) {
    const request = { ownerId, isEnabled };
    return this.http.put(`${this.baseUrl}/${id}`, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Maps API response to frontend model
   */
  mapFromApi(apiResponse) {
    return {
      id: apiResponse.id,
      ownerId: apiResponse.ownerId,
      appId: apiResponse.appId,
      appName: apiResponse.appName,
      screenIds: apiResponse.screenIds,
      isEnabled: apiResponse.isEnabled,
      configuration: apiResponse.configuration,
      createdAt: apiResponse.createdDate,
      updatedAt: apiResponse.updatedDate
    };
  }
  static \u0275fac = function AppInstallationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInstallationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInstallationService, factory: _AppInstallationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInstallationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/app-store/services/app-install-facade.service.ts
var AppInstallFacadeService = class _AppInstallFacadeService {
  appInstallationService = inject(AppInstallationService);
  clientDataService = inject(ClientDataService);
  modalFormService = inject(ModalFormService);
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
  // ── Install ─────────────────────────────────────────────────────────────────
  /**
   * Install an app. Opens a config modal for external (appSidebar) apps;
   * performs a direct install for all others.
   */
  installApp(app, destroyRef, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    const isExternalApp = app.integrationPoints?.some((point) => point.screenId === "appSidebar");
    if (isExternalApp) {
      this.openInstallConfigModal(app, clientId, destroyRef, onSuccess);
    } else {
      this.performInstallation(app.id, clientId, {}, onSuccess);
    }
  }
  openInstallConfigModal(app, clientId, destroyRef, onSuccess) {
    const dummyField = createTextAreaField("dummy", "dummy", void 0);
    this.modalFormService.openListItemModal({
      modalConfig: {
        modalComponent: ModalListFormComponent,
        modalTitle: "Configure App Sidebar Installation",
        subHeader: "Customize how this app appears in the sidebar external tabs",
        modalFields: [
          createTextField("icon", "Sidebar Icon", "browser", {
            placeholder: "browser",
            hint: "Material icon name or URL for the sidebar tab"
          }),
          createTextField("section", "Sidebar Section", "Apps", {
            placeholder: "Apps",
            hint: "UI section where the sidebar tab will appear"
          }),
          createNumberField("order", "Sidebar Display Order", 0, {
            hint: "Lower numbers appear first in the sidebar"
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
              this.error.set("Could not install the app. Please try again.");
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
    this.appInstallationService.installApp(appId, clientId, configuration).pipe(tap(() => {
      this.error.set(null);
      onSuccess?.();
    }), catchError((err) => {
      console.error("App installation error:", err);
      this.error.set("Could not install the app. Please try again.");
      return of(null);
    })).subscribe({ complete: () => this.isPerformingAction.set(false) });
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
      this.error.set("Could not uninstall the app. Please try again.");
      return of(null);
    })).subscribe({ complete: () => this.isPerformingAction.set(false) });
  }
  // ── Toggle enabled ───────────────────────────────────────────────────────────
  toggleEnabled(installationId, currentValue, onSuccess) {
    const clientId = this.clientDataService.getSelectedClient()?.id;
    if (isNullOrUndefined(clientId))
      return;
    this.toggleEnabledError.set(null);
    this.isTogglingEnabled.set(true);
    this.appInstallationService.setEnabled(installationId, clientId, !currentValue).pipe(tap(() => onSuccess?.()), catchError((err) => {
      console.error("Toggle enabled error:", err);
      this.toggleEnabledError.set("Could not update app status. Please try again.");
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
//# sourceMappingURL=chunk-XLWAERGL.js.map
