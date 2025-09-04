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
  DevicesDataAdapter,
  DistributorsDataAdapter,
  EmailProvidersDataAdapter,
  EntityDetailsStateService,
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
} from "./chunk-NESH5H3N.js";
import {
  takeUntilDestroyed
} from "./chunk-VHJAZO76.js";
import {
  MessageService
} from "./chunk-DUWNUGCY.js";
import {
  isDefined,
  isEmpty
} from "./chunk-YJAWNP5Q.js";
import {
  DestroyRef,
  Injectable,
  Observable,
  catchError,
  finalize,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XEZOAFBV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/services/entity/entity-details-loader.service.ts
var EntityDetailsLoaderService = class _EntityDetailsLoaderService {
  messageService = inject(MessageService);
  detailsFactory = inject(DetailsComponentFactory);
  stateService = inject(EntityDetailsStateService);
  simCardsDataAdapter = inject(SimCardsDataAdapter);
  devicesDataAdapter = inject(DevicesDataAdapter);
  geofencesDataAdapter = inject(GeofencesDataAdapter);
  deviceProvidersDataAdapter = inject(DeviceProvidersDataAdapter);
  smsGatewayProvidersDataAdapter = inject(SmsGatewayProvidersDataAdapter);
  ioTypesDataAdapter = inject(IoTypesDataAdapter);
  alertsDataAdapter = inject(AlertsDataAdapter);
  destroyRef = inject(DestroyRef);
  assetsDataAdapter = inject(AssetsDataAdapter);
  assetTagsDataAdapter = inject(AssetTagsDataAdapter);
  deviceConfigProfilesDataAdapter = inject(DeviceConfigProfilesDataAdapter);
  overspeedProfilesDataAdapter = inject(OverspeedProfilesDataAdapter);
  userRolesDataAdapter = inject(UserRolesDataAdapter);
  userDataAdapter = inject(UsersDataAdapter);
  customFieldsDataAdapter = inject(CustomFieldsDataAdapter);
  themeDataAdapter = inject(ThemesDataAdapter);
  costCentresDataAdapter = inject(CostCentresDataAdapter);
  geofenceGroupsDataAdapter = inject(GeofenceGroupsDataAdapter);
  assetGroupsDataAdapter = inject(AssetGroupsDataAdapter);
  assetCategoriesDataAdapter = inject(AssetCategoriesDataAdapter);
  emailProvidersDataAdapter = inject(EmailProvidersDataAdapter);
  clientsDataAdapter = inject(ClientsDataAdapter);
  vendorsDataAdapter = inject(VendorsDataAdapter);
  assetRatingProfilesDataAdapter = inject(AssetRatingProfilesDataAdapter);
  distributorsDataAdapter = inject(DistributorsDataAdapter);
  assetStateProfilesDataAdapter = inject(AssetStateProfilesDataAdapter);
  companyGroupsDataAdapter = inject(CompanyGroupsDataAdapter);
  roadProfilesDataAdapter = inject(RoadProfilesDataAdapter);
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
      const entityService = this.getServiceForEntityType(entityType);
      if (isEmpty(entityService)) {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `No service available for entity type: ${entityType}`
        });
        return new Observable((subscriber) => {
          subscriber.next(null);
          subscriber.complete();
        });
      }
      return entityService.getById(entityId).pipe(takeUntilDestroyed(this.destroyRef), map((item) => {
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
        return new Observable((subscriber) => {
          subscriber.next(null);
          subscriber.complete();
        });
      }));
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to refresh ${entityType} details: ${error}`
      });
      return new Observable((subscriber) => {
        subscriber.next(null);
        subscriber.complete();
      });
    }
  }
  /**
   * Common helper method for loading entity details with custom callbacks
   */
  loadEntityWithCallbacks(entityType, entityId, onSuccess, onError, errorMessage) {
    this.stateService.isLoading.set(true);
    try {
      const entityService = this.getServiceForEntityType(entityType);
      if (isEmpty(entityService)) {
        this.handleMissingService();
        return;
      }
      entityService.getById(entityId).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.stateService.isLoading.set(false))).subscribe({
        next: (item) => onSuccess(item),
        error: () => onError()
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
  /**
   * Get the appropriate service for the entity type
   */
  getServiceForEntityType(entityType) {
    switch (entityType.toLowerCase()) {
      case "client-sim-cards":
      case "simcard":
        return this.simCardsDataAdapter;
      case "client-assets":
      case "asset":
        return this.assetsDataAdapter;
      case "client-asset-tags":
      case "asset-tag":
        return this.assetTagsDataAdapter;
      case "client-device-config-profiles":
      case "vendor-device-config-profiles":
      case "device-config-profile":
        return this.deviceConfigProfilesDataAdapter;
      case "client-hardware-devices":
      case "device":
        return this.devicesDataAdapter;
      case "client-geofences":
      case "geofence":
        return this.geofencesDataAdapter;
      case "client-alerts":
      case "alert":
        return this.alertsDataAdapter;
      case "client-device-providers":
      case "distributor-device-providers":
      case "device-provider":
        return this.deviceProvidersDataAdapter;
      case "client-sms-gateway-providers":
      case "sms-gateway-provider":
      case "vendor-sms-gateway-providers":
        return this.smsGatewayProvidersDataAdapter;
      case "email-provider":
      case "vendor-email-provider":
        return this.emailProvidersDataAdapter;
      case "client-io-types":
      case "vendor-io-types":
      case "io-type":
        return this.ioTypesDataAdapter;
      case "client-overspeed-profiles":
      case "vendor-overspeed-profiles":
      case "distributor-overspeed-profiles":
      case "overspeed-profile":
        return this.overspeedProfilesDataAdapter;
      case "client-user-roles":
      case "vendor-user-roles":
      case "distributor-user-roles":
      case "user-role":
        return this.userRolesDataAdapter;
      case "client-users":
      case "vendor-users":
      case "distributor-users":
      case "user":
        return this.userDataAdapter;
      case "client-custom-fields":
      case "vendor-custom-fields":
      case "custom-field":
        return this.customFieldsDataAdapter;
      case "distributor-themes":
      case "theme":
        return this.themeDataAdapter;
      case "client-cost-centres":
      case "cost-centre":
        return this.costCentresDataAdapter;
      case "client-geofence-groups":
      case "geofence-group":
        return this.geofenceGroupsDataAdapter;
      case "client-asset-groups":
      case "asset-group":
        return this.assetGroupsDataAdapter;
      case "client-asset-categories":
      case "asset-category":
        return this.assetCategoriesDataAdapter;
      case "vendor-clients":
      case "client":
        return this.clientsDataAdapter;
      case "distributor-vendors":
      case "vendor":
        return this.vendorsDataAdapter;
      case "client-asset-rating-profiles":
      case "asset-rating-profile":
        return this.assetRatingProfilesDataAdapter;
      case "super-admin-distributors":
      case "distributor":
        return this.distributorsDataAdapter;
      case "client-asset-state-profiles":
      case "asset-state-profile":
        return this.assetStateProfilesDataAdapter;
      case "vendor-company-groups":
      case "company-group":
        return this.companyGroupsDataAdapter;
      case "client-road-profiles":
      case "vendor-road-profiles":
      case "road-profile":
        return this.roadProfilesDataAdapter;
      default:
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: `Unknown entity type: ${entityType}`
        });
        this.stateService.closeDetailsPanel();
        return { getById: () => new Observable() };
    }
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
//# sourceMappingURL=chunk-5OVM7EC6.js.map
