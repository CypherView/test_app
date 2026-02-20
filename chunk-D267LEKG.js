import {
  ApiUrlService,
  HttpClient,
  HttpParams
} from "./chunk-UNWLID6Q.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";

// src/app/features/app-store/services/app-installation.service.ts
var AppInstallationService = class _AppInstallationService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/appstore/installations`;
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
   * @param appName Optional app name for display purposes
   * @param developerId Optional developer ID for tracking purposes
   */
  installApp(appId, ownerId, configuration, appName, developerId) {
    const request = {
      appId,
      ownerId,
      configuration,
      appName: appName ?? "Unknown App",
      developerId: developerId ?? "Unknown Developer"
    };
    return this.http.post(this.baseUrl, request).pipe(map((response) => this.mapFromApi(response)));
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
   * Maps API response to frontend model
   */
  mapFromApi(apiResponse) {
    return {
      id: apiResponse.id,
      ownerId: apiResponse.ownerId,
      appId: apiResponse.appId,
      appName: apiResponse.appName,
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

export {
  AppInstallationService
};
//# sourceMappingURL=chunk-D267LEKG.js.map
