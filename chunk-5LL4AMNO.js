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

// src/app/features/app-store/models/api/app-store-api.mappers.ts
function mapIntegrationPointFromApi(apiPoint) {
  if (!isDefined(apiPoint.screenId)) {
    return null;
  }
  return {
    screenId: apiPoint.screenId,
    requiredPermissions: apiPoint.requiredPermissions ?? [],
    baseUrl: apiPoint.baseUrl ?? ""
  };
}
function mapFeeModelFromApi(api) {
  return { type: api.type ?? "perInstallation", amount: api.amount ?? 0 };
}
function mapAppStatsFromGeneratedApi(api) {
  return {
    averageRating: api?.averageRating ?? 0,
    reviewCount: api?.reviewCount ?? 0,
    installCount: api?.installCount ?? 0
  };
}
function mapInstallationContextFromApi(api) {
  return {
    id: api.id,
    isEnabled: api.isEnabled,
    configuration: api.configuration,
    pendingFeeAcknowledgement: api.pendingFeeAcknowledgement,
    estimatedCost: api.estimatedCost,
    grantedPermissions: api.grantedPermissions ?? {}
  };
}
function mapVersionContextFromApi(api) {
  return {
    activeVersionId: api.activeVersionId,
    activeVersionNumber: api.activeVersionNumber,
    pendingVersionId: api.pendingVersionId,
    pendingVersionNumber: api.pendingVersionNumber,
    pendingVersionStatus: api.pendingVersionStatus,
    active: api.active ? mapAppVersionFromApi(api.active) : void 0,
    pending: api.pending ? mapAppVersionFromApi(api.pending) : void 0
  };
}
function mapVersionContextFromGeneratedApi(api) {
  return {
    activeVersionId: api?.activeVersionId,
    activeVersionNumber: api?.activeVersionNumber,
    pendingVersionId: api?.pendingVersionId,
    pendingVersionNumber: api?.pendingVersionNumber,
    pendingVersionStatus: api?.pendingVersionStatus ?? void 0
  };
}
function mapAppDefinitionFromApi(apiResponse) {
  return {
    id: apiResponse.id ?? "",
    developerId: apiResponse.developerId ?? "",
    developerName: apiResponse.developerName ?? "",
    name: apiResponse.name ?? "",
    description: apiResponse.description ?? "",
    shortDescription: apiResponse.shortDescription ?? "",
    iconUrl: apiResponse.iconUrl ?? "",
    state: apiResponse.state ?? "inactive",
    visibility: apiResponse.visibility ?? "unlisted",
    feeModel: isDefined(apiResponse.feeModel) ? mapFeeModelFromApi(apiResponse.feeModel) : null,
    version: mapVersionContextFromGeneratedApi(apiResponse.version),
    integrationPoints: (apiResponse.integrationPoints ?? []).map(mapIntegrationPointFromApi).filter(isDefined),
    healthCheckUrl: apiResponse.healthCheckUrl,
    categories: apiResponse.categories ?? [],
    tags: apiResponse.tags ?? [],
    stats: mapAppStatsFromGeneratedApi(apiResponse.stats),
    installation: void 0,
    updatedDate: apiResponse.updatedDate ?? "",
    createdDate: apiResponse.createdDate ?? ""
  };
}
function mapAppDefinitionListItemFromApi(apiResponse) {
  return {
    id: apiResponse.id,
    developerId: apiResponse.developerId,
    developerName: apiResponse.developerName,
    name: apiResponse.name,
    description: apiResponse.description,
    shortDescription: apiResponse.shortDescription,
    iconUrl: apiResponse.iconUrl,
    state: apiResponse.state,
    visibility: apiResponse.visibility,
    feeModel: apiResponse.feeModel ? mapFeeModelFromApi(apiResponse.feeModel) : null,
    version: mapVersionContextFromApi(apiResponse.version),
    // The list endpoint can omit these array/object fields even though the
    // hand-written type marks them required — guard like mapAppDefinitionFromApi.
    integrationPoints: (apiResponse.integrationPoints ?? []).map(mapIntegrationPointFromApi).filter(isDefined),
    healthCheckUrl: apiResponse.healthCheckUrl,
    categories: apiResponse.categories ?? [],
    tags: apiResponse.tags ?? [],
    stats: mapAppStatsFromGeneratedApi(apiResponse.stats),
    installation: apiResponse.installation ? mapInstallationContextFromApi(apiResponse.installation) : void 0,
    updatedDate: apiResponse.updatedDate,
    createdDate: apiResponse.createdDate
  };
}
function mapAppVersionFromApi(api) {
  return {
    id: api.id,
    appDefinitionId: api.appDefinitionId,
    version: api.version,
    bumpType: api.bumpType,
    changelog: api.changelog,
    name: api.name,
    description: api.description,
    shortDescription: api.shortDescription,
    iconUrl: api.iconUrl,
    developerName: api.developerName,
    healthCheckUrl: api.healthCheckUrl,
    integrationPoints: api.integrationPoints.map(mapIntegrationPointFromApi).filter(isDefined),
    categories: api.categories,
    tags: api.tags,
    status: api.status,
    state: api.state,
    visibility: api.visibility,
    feeModel: api.feeModel ? mapFeeModelFromApi(api.feeModel) : null,
    createdDate: api.createdDate,
    updatedDate: api.updatedDate
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
function mapAppSubmissionReviewFromApi(api) {
  return {
    id: api.id,
    appId: api.appId,
    reviewerId: api.reviewerId,
    status: api.status,
    comments: api.comments,
    createdDate: api.createdDate
  };
}
function mapAppInviteFromApi(api) {
  return {
    id: api.id,
    appId: api.appId,
    token: api.token,
    status: api.status,
    createdDate: api.createdDate,
    expiresDate: api.expiresDate
  };
}

// src/app/features/app-store/services/app-store.service.ts
var AppStoreService = class _AppStoreService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore`;
  /**
   * Get all app definitions with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getApps(params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/marketplace/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionListItemFromApi)));
  }
  /**
   * Get app definitions of a specific developer with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getMyApps(params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/me/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionListItemFromApi)));
  }
  /**
   * Get app definitions of a specific developer with optional filtering
   * @param params Query parameters for filtering and pagination
   */
  getAppsByDeveloperId(developerId, params) {
    const httpParams = this.buildGetAppsQueryParams(params);
    return this.http.get(`${this.baseUrl}/developers/${developerId}/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionListItemFromApi)));
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
    return httpParams;
  }
  /**
   * Get app definition by ID
   * @param id App ID
   * @param developerId Optional developer ID filter
   */
  getAppById(id, owner) {
    const httpParams = new HttpParams().set("owner", owner);
    return this.http.get(`${this.baseUrl}/marketplace/apps/${id}`, {
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
   * Update an existing app definition's state (admin only).
   * Content fields are managed via the version submission workflow.
   * @param id App ID
   * @param state New state value
   */
  updateAppState(id, state) {
    const request = { state };
    return this.http.put(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Get installed apps for an organisation, enriched with full app definition data.
   * Replaces the N+1 getInstallations() + getAppById() pattern on the my-installed-apps page.
   * @param orgId Organisation id
   * @param params Optional pagination params
   */
  getOrganisationInstalledApps(orgId, params) {
    let httpParams = new HttpParams();
    if (params?.offset !== void 0)
      httpParams = httpParams.set("offset", params.offset.toString());
    if (params?.limit !== void 0)
      httpParams = httpParams.set("limit", params.limit.toString());
    if (params?.sort !== void 0)
      httpParams = httpParams.set("sort", params.sort);
    if (params?.filter !== void 0)
      httpParams = httpParams.set("filter", params.filter);
    return this.http.get(`${this.baseUrl}/organisations/${orgId}/installed-apps`, { params: httpParams }).pipe(map((response) => response.items.map(mapAppDefinitionListItemFromApi)));
  }
  /**
   * Get submission reviews for an app (sorted desc by date, first item = most recent)
   * @param appId App ID
   */
  getSubmissionReviews(appId) {
    return this.http.get(`${this.baseUrl}/apps/${appId}/submission-reviews`).pipe(map((res) => res.items.map(mapAppSubmissionReviewFromApi)));
  }
  /**
   * Archive (deactivate) an app — removes it from the marketplace.
   * @param id App ID
   */
  archiveApp(id) {
    return this.updateAppState(id, "inactive");
  }
  /**
   * Permanently delete an app definition.
   * Will fail with 400 if the app has active installations.
   * @param id App ID
   */
  deleteApp(id) {
    return this.http.delete(`${this.baseUrl}/apps/${id}`);
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
  }], null, null);
})();

export {
  mapAppVersionFromApi,
  mapAppReviewFromApi,
  mapAppInviteFromApi,
  AppStoreService
};
//# sourceMappingURL=chunk-5LL4AMNO.js.map
