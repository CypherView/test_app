import {
  mapAppVersionFromApi
} from "./chunk-HLBFLHW7.js";
import {
  ApiUrlService,
  HttpClient,
  HttpParams,
  isDefined
} from "./chunk-L7IB7NHM.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNETQGIO.js";

// src/app/features/app-store/services/app-version.service.ts
var AppVersionService = class _AppVersionService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore`;
  }
  submitVersion(appId, request) {
    return this.http.post(`${this.baseUrl}/apps/${appId}/versions`, request).pipe(map(mapAppVersionFromApi));
  }
  updateVersion(appId, versionId, request) {
    return this.http.put(`${this.baseUrl}/apps/${appId}/versions/${versionId}`, request).pipe(map(mapAppVersionFromApi));
  }
  getVersions(appId) {
    return this.http.get(`${this.baseUrl}/apps/${appId}/versions`).pipe(map((r) => r.items.map(mapAppVersionFromApi)));
  }
  getVersion(appId, version) {
    return this.http.get(`${this.baseUrl}/apps/${appId}/versions/${version}`).pipe(map(mapAppVersionFromApi));
  }
  getAllVersions(params = {}) {
    let httpParams = new HttpParams();
    if (isDefined(params.status))
      httpParams = httpParams.set("status", params.status);
    if (params.offset !== void 0)
      httpParams = httpParams.set("offset", params.offset.toString());
    if (params.limit !== void 0)
      httpParams = httpParams.set("limit", params.limit.toString());
    return this.http.get(`${this.baseUrl}/versions`, {
      params: httpParams
    }).pipe(map((r) => r.items.map(mapAppVersionFromApi)));
  }
  static \u0275fac = function AppVersionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppVersionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppVersionService, factory: _AppVersionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppVersionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AppVersionService
};
//# sourceMappingURL=chunk-SRQ22PRN.js.map
