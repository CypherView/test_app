import {
  ENTITY_ADAPTER_REGISTRY
} from "./chunk-YKG5LWOW.js";
import {
  VersionUpdateService
} from "./chunk-OKZD7IEG.js";
import {
  DetailsComponentFactory,
  EntityDetailsStateService
} from "./chunk-FC26RJEU.js";
import {
  MessageService
} from "./chunk-YL4UBWIM.js";
import {
  isDefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  DestroyRef,
  Injectable,
  Injector,
  catchError,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/services/entity/entity-adapter.factory.ts
var EntityAdapterFactory = class _EntityAdapterFactory {
  adapters = /* @__PURE__ */ new Map();
  adapterTypes = /* @__PURE__ */ new Map();
  injector = inject(Injector);
  registrations = inject(ENTITY_ADAPTER_REGISTRY, {
    optional: true
  });
  constructor() {
    const registrations = this.registrations;
    if (isDefined(registrations)) {
      for (const reg of registrations) {
        for (const type of reg.types) {
          this.adapterTypes.set(type.toLowerCase(), reg.adapter);
        }
      }
    }
  }
  /**
   * Gets the appropriate adapter for the given entity type.
   * Adapters are lazy-loaded and cached for performance.
   */
  getAdapter(entityType) {
    const cacheKey = entityType.toLowerCase();
    if (this.adapters.has(cacheKey)) {
      const cachedAdapter = this.adapters.get(cacheKey);
      return cachedAdapter ?? null;
    }
    const adapter = this.createAdapter(entityType);
    if (adapter) {
      this.adapters.set(cacheKey, adapter);
    }
    return adapter;
  }
  /**
   * Creates the appropriate adapter instance for the given entity type
   */
  createAdapter(entityType) {
    const adapterType = this.adapterTypes.get(entityType.toLowerCase());
    if (!adapterType) {
      return null;
    }
    try {
      return this.injector.get(adapterType);
    } catch (error) {
      console.error(`Failed to create adapter for entity type: ${entityType}`, error);
      return null;
    }
  }
  static \u0275fac = function EntityAdapterFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityAdapterFactory)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntityAdapterFactory, factory: _EntityAdapterFactory.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntityAdapterFactory, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/features/administration/services/entity/entity-details-loader.service.ts
var EntityDetailsLoaderService = class _EntityDetailsLoaderService {
  messageService = inject(MessageService);
  detailsFactory = inject(DetailsComponentFactory);
  stateService = inject(EntityDetailsStateService);
  adapterFactory = inject(EntityAdapterFactory);
  versionUpdateService = inject(VersionUpdateService);
  destroyRef = inject(DestroyRef);
  /**
   * Loads entity details from ID and type
   */
  loadEntityDetails(entityType, entityId) {
    const component = this.detailsFactory.getDetailsComponent(entityType);
    this.loadEntityWithCallbacks(entityType, entityId, (item) => this.handleLoadSuccess(item, entityType, component), () => this.handleLoadError(entityType), `Failed to load ${entityType} details`);
  }
  /**
   * Soft loads entity details for refresh without affecting UI state like accordion expansion
   */
  softLoadEntityDetails(entityType, entityId) {
    this.loadEntityWithCallbacks(entityType, entityId, (item) => this.handleSoftLoadSuccess(item, entityType), () => this.handleSoftLoadError(entityType), `Failed to refresh ${entityType} details`);
  }
  /**
   * Soft loads entity details and returns an Observable for better async handling
   * This allows the state service to properly manage its own loading state
   */
  softLoadEntityDetailsObservable(entityType, entityId) {
    try {
      const entityAdapter = this.adapterFactory.getAdapter(entityType);
      if (!entityAdapter) {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `No adapter available for entity type: ${entityType}`
        });
        return of(null);
      }
      return entityAdapter.getById(entityId).pipe(takeUntilDestroyed(this.destroyRef), map((item) => {
        const baseEntity = item;
        if (isDefined(baseEntity)) {
          return __spreadProps(__spreadValues({}, baseEntity), { entityType });
        }
        return null;
      }), catchError((error) => {
        if (this.versionUpdateService.isVersionMismatchError(error)) {
          this.versionUpdateService.handleVersionMismatch(`entity load: ${entityType}`);
          return of(null);
        }
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `Failed to refresh ${entityType} details`
        });
        console.error("Soft load error:", error);
        return of(null);
      }));
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to refresh ${entityType} details: ${error}`
      });
      return of(null);
    }
  }
  /**
   * Common helper method for loading entity details with custom callbacks
   */
  loadEntityWithCallbacks(entityType, entityId, onSuccess, onError, errorMessage) {
    this.stateService.isLoading.set(true);
    try {
      const entityAdapter = this.adapterFactory.getAdapter(entityType);
      if (!entityAdapter) {
        this.handleMissingService();
        return;
      }
      entityAdapter.getById(entityId).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.stateService.isLoading.set(false))).subscribe({
        next: (item) => onSuccess(item),
        error: (error) => {
          console.error(errorMessage, error);
          if (this.versionUpdateService.isVersionMismatchError(error)) {
            this.versionUpdateService.handleVersionMismatch(`entity load: ${entityType}`);
            return;
          }
          onError();
        }
      });
    } catch (error) {
      this.stateService.isLoading.set(false);
      if (this.versionUpdateService.isVersionMismatchError(error)) {
        this.versionUpdateService.handleVersionMismatch(`entity load: ${entityType}`);
        return;
      }
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `${errorMessage}: ${error}`
      });
      if (errorMessage.includes("Failed to load")) {
        this.stateService.closeDetailsPanel();
      }
    }
  }
  /**
   * Handle case when no service is available
   */
  handleMissingService() {
    this.stateService.isLoading.set(false);
  }
  /**
   * Handle successful entity load
   */
  handleLoadSuccess(item, entityType, component) {
    if (isDefined(item)) {
      const itemWithType = __spreadProps(__spreadValues({}, item), { entityType });
      this.stateService.openDetailsPanel(itemWithType, component);
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Not Found",
        detail: `${entityType} not found`
      });
      this.stateService.closeDetailsPanel();
    }
  }
  /**
   * Handle successful soft entity load (preserves UI state)
   */
  handleSoftLoadSuccess(item, entityType) {
    if (isDefined(item)) {
      const itemWithType = __spreadProps(__spreadValues({}, item), { entityType });
      this.stateService.softRefreshSelectedItem(itemWithType);
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Not Found",
        detail: `${entityType} not found`
      });
    }
  }
  /**
   * Handle entity load error
   */
  handleLoadError(entityType) {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: `Failed to load ${entityType} details`
    });
    this.stateService.closeDetailsPanel();
  }
  /**
   * Handle soft entity load error (preserves UI state)
   */
  handleSoftLoadError(entityType) {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: `Failed to refresh ${entityType} details`
    });
  }
  static \u0275fac = function EntityDetailsLoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityDetailsLoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntityDetailsLoaderService, factory: _EntityDetailsLoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntityDetailsLoaderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  EntityDetailsLoaderService
};
//# sourceMappingURL=chunk-6KKY4MOV.js.map
