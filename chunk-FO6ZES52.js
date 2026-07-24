import {
  ApiUrlService,
  HttpClient,
  HttpParams,
  isDefined
} from "./chunk-6H7AOYCU.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JFHDN3YU.js";

// src/app/features/app-store/services/app-installation.service.ts
var AppInstallationService = class _AppInstallationService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/installations`;
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
   * Get all installations for a specific app (creator view)
   * @param appId The app to fetch installations for
   */
  getAppInstallations(appId) {
    return this.http.get(`${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/apps/${appId}/installations`).pipe(map((response) => response.items.filter((item) => isDefined(item)).map((item) => this.mapFromApi(item))));
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
      updatedAt: apiResponse.updatedDate,
      pendingFeeAcknowledgement: apiResponse.pendingFeeAcknowledgement
    };
  }
  getInstallationEstimate(appId, ownerId) {
    const httpParams = new HttpParams().set("owner", ownerId);
    return this.http.get(`${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/apps/${appId}/installation-estimate`, { params: httpParams }).pipe(map((r) => this.mapEstimateFromApi(r)));
  }
  mapEstimateFromApi(r) {
    return {
      appId: r.appId,
      ownerId: r.ownerId,
      feeModel: r.feeModel,
      activeDeviceCount: r.activeDeviceCount,
      estimatedCost: r.estimatedCost
    };
  }
  acknowledgeFee(installationId, ownerId) {
    return this.http.post(`${this.baseUrl}/${installationId}/acknowledge-fee`, { ownerId }).pipe(map((response) => this.mapFromApi(response)));
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
  }], null, null);
})();

export {
  AppInstallationService
};
//# sourceMappingURL=chunk-FO6ZES52.js.map
