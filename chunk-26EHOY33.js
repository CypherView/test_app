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

// src/app/features/app-store/models/api/app-store-api.mappers.ts
function mapStatusFromApi(status) {
  return status;
}
function mapIntegrationPointFromApi(apiPoint) {
  return {
    screenId: apiPoint.screenId,
    requiredPermissions: apiPoint.requiredPermissions,
    baseUrl: apiPoint.baseUrl
  };
}
function mapAppDefinitionFromApi(apiResponse) {
  return {
    id: apiResponse.id,
    developerId: apiResponse.developerId,
    developerName: apiResponse.developerName,
    name: apiResponse.name,
    description: apiResponse.description,
    shortDescription: apiResponse.shortDescription,
    iconUrl: apiResponse.iconUrl,
    status: mapStatusFromApi(apiResponse.status),
    state: apiResponse.state,
    integrationPoints: apiResponse.integrationPoints.map(mapIntegrationPointFromApi),
    healthCheckUrl: apiResponse.healthCheckUrl,
    categories: apiResponse.categories,
    tags: apiResponse.tags,
    averageRating: apiResponse.averageRating,
    reviewCount: apiResponse.reviewCount,
    installCount: apiResponse.installCount,
    isInstalled: apiResponse.isInstalled,
    isEnabled: apiResponse.isEnabled,
    updatedDate: apiResponse.updatedDate,
    createdDate: apiResponse.createdDate
  };
}
function mapAppReviewFromApi(apiResponse) {
  return {
    id: apiResponse.id,
    appId: apiResponse.appId,
    userId: apiResponse.userId,
    userName: apiResponse.userName,
    organizationName: apiResponse.organizationName,
    rating: apiResponse.rating,
    title: apiResponse.title,
    comment: apiResponse.comment,
    developerResponse: apiResponse.developerResponse,
    isVerifiedPurchase: apiResponse.isVerifiedPurchase,
    helpfulCount: apiResponse.helpfulCount,
    createdDate: apiResponse.createdDate
  };
}

// src/app/features/app-store/services/app-store.service.ts
var AppStoreService = class _AppStoreService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/appstore`;
  }
  /**
   * Get all app definitions with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getApps(params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionFromApi)));
  }
  /**
   * Get app definitions of a specific developer with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getMyApps(params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/me/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionFromApi)));
  }
  /**
   * Get app definitions of a specific developer with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getAppsByDeveloperId(developerId, params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/developers/${developerId}/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionFromApi)));
  }
  buildGetAppsQueryParams(params) {
    let httpParams = new HttpParams().set("owner", params.owner);
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
    if (params.status !== void 0) {
      httpParams = httpParams.set("status", params.status);
    }
    return httpParams;
  }
  /**
   * Get app definition by ID
   * @param id App ID
   * @param developerId Optional developer ID filter
   */
  getAppById(id, owner) {
    const httpParams = new HttpParams().set("owner", owner);
    return this.http.get(`${this.baseUrl}/apps/${id}`, {
      params: httpParams
    }).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Create a new app definition
   * @param app App definition data
   */
  createApp(app) {
    const request = {
      developerName: app.developerName ?? "",
      name: app.name ?? "",
      description: app.description ?? "",
      shortDescription: app.shortDescription ?? "",
      iconUrl: app.iconUrl ?? "",
      integrationPoints: app.integrationPoints?.map((point) => ({
        screenId: point.screenId,
        requiredPermissions: point.requiredPermissions,
        baseUrl: point.baseUrl
      })) ?? [],
      categories: app.categories ?? [],
      tags: app.tags ?? [],
      healthCheckUrl: app.healthCheckUrl
    };
    return this.http.post(`${this.baseUrl}/apps`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Update an existing app definition
   * @param id App ID
   * @param changes Partial app definition with changes
   */
  updateApp(id, changes) {
    const request = {
      name: changes.name,
      description: changes.description,
      shortDescription: changes.shortDescription,
      iconUrl: changes.iconUrl,
      integrationPoints: changes.integrationPoints?.map((point) => ({
        screenId: point.screenId,
        requiredPermissions: point.requiredPermissions,
        baseUrl: point.baseUrl
      })),
      healthCheckUrl: changes.healthCheckUrl,
      categories: changes.categories,
      tags: changes.tags,
      status: changes.status,
      state: changes.state
    };
    return this.http.put(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Submit an app for review (changes status to PENDING_REVIEW)
   * @param id App ID
   */
  submitForReview(id) {
    return this.updateApp(id, { status: "pendingReview" });
  }
  /**
   * Approve an app (admin only - changes status to APPROVED)
   * @param id App ID
   * @note Status updates are handled server-side; this updates the app state to active
   */
  approveApp(id) {
    const request = {
      status: "approved"
    };
    return this.http.put(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Reject an app (admin only - changes status to REJECTED)
   * @param id App ID
   * @note Status updates are handled server-side; this updates the app state to inactive
   */
  rejectApp(id) {
    const request = {
      status: "rejected"
    };
    return this.http.put(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Suspend an app (admin only - changes status to SUSPENDED)
   * @param id App ID
   * @note Status updates are handled server-side; this updates the app state to suspended
   */
  suspendApp(id) {
    const request = {
      status: "suspended"
    };
    return this.http.put(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Review an app submission (approve, reject, suspend, etc.)
   * @param id App ID
   * @param reviewData Review data including status, comments, and internal notes
   */
  reviewApp(id, reviewData) {
    return this.http.post(`${this.baseUrl}/apps/${id}/submission-review`, reviewData).pipe(map(mapAppDefinitionFromApi));
  }
  static \u0275fac = function AppStoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppStoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppStoreService, factory: _AppStoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppStoreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  mapAppReviewFromApi,
  AppStoreService
};
//# sourceMappingURL=chunk-26EHOY33.js.map
