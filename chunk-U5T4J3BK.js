import {
  AlertsDataAdapter,
  AssetCategoriesDataAdapter,
  AssetGroupsDataAdapter,
  AssetRatingProfilesDataAdapter,
  AssetStateProfilesDataAdapter,
  AssetTagsDataAdapter,
  AssetsDataAdapter,
  ClientsDataAdapter,
  CompanyGroupsDataAdapter,
  CostCentresDataAdapter,
  CustomFieldsDataAdapter,
  DetailsComponentFactory,
  DeviceConfigProfilesDataAdapter,
  DeviceProvidersDataAdapter,
  DeviceTypesDataAdapter,
  DevicesDataAdapter,
  DistributorsDataAdapter,
  EmailProvidersDataAdapter,
  EntityDetailsStateService,
  GeoLockProfilesDataAdapter,
  GeofenceGroupsDataAdapter,
  GeofencesDataAdapter,
  IoTypesDataAdapter,
  OverspeedProfilesDataAdapter,
  RoadProfilesDataAdapter,
  SimCardsDataAdapter,
  SmsGatewayProvidersDataAdapter,
  ThemesDataAdapter,
  UserRolesDataAdapter,
  UsersDataAdapter,
  VendorsDataAdapter
} from "./chunk-JJGIUWJ2.js";
import {
  takeUntilDestroyed
} from "./chunk-C2NNNFHP.js";
import {
  MessageService
} from "./chunk-SIZTMCIF.js";
import {
  isDefined
} from "./chunk-UW6Q2JGR.js";
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
} from "./chunk-7FSD67AL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/services/entity/entity-adapter.factory.ts
var EntityAdapterFactory = class _EntityAdapterFactory {
  adapters = /* @__PURE__ */ new Map();
  injector = inject(Injector);
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
    const adapterType = this.getAdapterType(entityType.toLowerCase());
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
  /**
   * Maps entity types to their corresponding adapter classes
   */
  getAdapterType(entityType) {
    const adapterMap = {
      // Sim Cards
      "client-sim-cards": SimCardsDataAdapter,
      simcard: SimCardsDataAdapter,
      // Assets
      "client-assets": AssetsDataAdapter,
      asset: AssetsDataAdapter,
      // Asset Tags
      "client-asset-tags": AssetTagsDataAdapter,
      "asset-tag": AssetTagsDataAdapter,
      // Device Config Profiles
      "client-device-config-profiles": DeviceConfigProfilesDataAdapter,
      "vendor-device-config-profiles": DeviceConfigProfilesDataAdapter,
      "device-config-profile": DeviceConfigProfilesDataAdapter,
      // Devices
      "client-hardware-devices": DevicesDataAdapter,
      device: DevicesDataAdapter,
      // Geofences
      "client-geofences": GeofencesDataAdapter,
      geofence: GeofencesDataAdapter,
      // Alerts
      "client-alerts": AlertsDataAdapter,
      alert: AlertsDataAdapter,
      // Device Providers
      "client-device-providers": DeviceProvidersDataAdapter,
      "distributor-device-providers": DeviceProvidersDataAdapter,
      "device-provider": DeviceProvidersDataAdapter,
      // SMS Gateway Providers
      "client-sms-gateway-providers": SmsGatewayProvidersDataAdapter,
      "sms-gateway-provider": SmsGatewayProvidersDataAdapter,
      "vendor-sms-gateway-providers": SmsGatewayProvidersDataAdapter,
      // Email Providers
      "email-provider": EmailProvidersDataAdapter,
      "vendor-email-provider": EmailProvidersDataAdapter,
      // IO Types
      "client-io-types": IoTypesDataAdapter,
      "vendor-io-types": IoTypesDataAdapter,
      "io-type": IoTypesDataAdapter,
      // Overspeed Profiles
      "client-overspeed-profiles": OverspeedProfilesDataAdapter,
      "vendor-overspeed-profiles": OverspeedProfilesDataAdapter,
      "distributor-overspeed-profiles": OverspeedProfilesDataAdapter,
      "overspeed-profile": OverspeedProfilesDataAdapter,
      // User Roles
      "client-user-roles": UserRolesDataAdapter,
      "vendor-user-roles": UserRolesDataAdapter,
      "distributor-user-roles": UserRolesDataAdapter,
      "user-role": UserRolesDataAdapter,
      // Users
      "client-users": UsersDataAdapter,
      "vendor-users": UsersDataAdapter,
      "distributor-users": UsersDataAdapter,
      user: UsersDataAdapter,
      // Custom Fields
      "client-custom-fields": CustomFieldsDataAdapter,
      "vendor-custom-fields": CustomFieldsDataAdapter,
      "custom-field": CustomFieldsDataAdapter,
      // Themes
      "distributor-themes": ThemesDataAdapter,
      theme: ThemesDataAdapter,
      // Cost Centres
      "client-cost-centres": CostCentresDataAdapter,
      "cost-centre": CostCentresDataAdapter,
      // Geofence Groups
      "client-geofence-groups": GeofenceGroupsDataAdapter,
      "geofence-group": GeofenceGroupsDataAdapter,
      // Asset Groups
      "client-asset-groups": AssetGroupsDataAdapter,
      "asset-group": AssetGroupsDataAdapter,
      // Asset Categories
      "client-asset-categories": AssetCategoriesDataAdapter,
      "asset-category": AssetCategoriesDataAdapter,
      // Clients
      "vendor-clients": ClientsDataAdapter,
      client: ClientsDataAdapter,
      // Vendors
      "distributor-vendors": VendorsDataAdapter,
      vendor: VendorsDataAdapter,
      // Asset Rating Profiles
      "client-asset-rating-profiles": AssetRatingProfilesDataAdapter,
      "asset-rating-profile": AssetRatingProfilesDataAdapter,
      // Distributors
      "super-admin-distributors": DistributorsDataAdapter,
      distributor: DistributorsDataAdapter,
      // Asset State Profiles
      "client-asset-state-profiles": AssetStateProfilesDataAdapter,
      "asset-state-profile": AssetStateProfilesDataAdapter,
      // Company Groups
      "vendor-company-groups": CompanyGroupsDataAdapter,
      "company-group": CompanyGroupsDataAdapter,
      // Road Profiles
      "client-road-profiles": RoadProfilesDataAdapter,
      "vendor-road-profiles": RoadProfilesDataAdapter,
      "road-profile": RoadProfilesDataAdapter,
      // Geo Lock Profiles
      "client-geo-lock-profiles": GeoLockProfilesDataAdapter,
      "geo-lock-profile": GeoLockProfilesDataAdapter,
      // Device Types
      "super-admin-device-types": DeviceTypesDataAdapter,
      "device-types": DeviceTypesDataAdapter
    };
    return adapterMap[entityType] ?? null;
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
  }], null, null);
})();

// src/app/features/administration/services/entity/entity-details-loader.service.ts
var EntityDetailsLoaderService = class _EntityDetailsLoaderService {
  messageService = inject(MessageService);
  detailsFactory = inject(DetailsComponentFactory);
  stateService = inject(EntityDetailsStateService);
  adapterFactory = inject(EntityAdapterFactory);
  destroyRef = inject(DestroyRef);
  deviceTypesDataAdapter = inject(DeviceTypesDataAdapter);
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
          onError();
        }
      });
    } catch (error) {
      this.stateService.isLoading.set(false);
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
//# sourceMappingURL=chunk-U5T4J3BK.js.map
