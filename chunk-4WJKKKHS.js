import {
  ApiUrlService,
  HttpClient,
  HttpParams
} from "./chunk-ZVYXWUM3.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-WYYVC2QJ.js";

// src/app/features/app-store/models/api/app-store-api.models.ts
var AppStatusEnum;
(function(AppStatusEnum2) {
  AppStatusEnum2[AppStatusEnum2["DRAFT"] = 0] = "DRAFT";
  AppStatusEnum2[AppStatusEnum2["PENDING_REVIEW"] = 1] = "PENDING_REVIEW";
  AppStatusEnum2[AppStatusEnum2["APPROVED"] = 2] = "APPROVED";
  AppStatusEnum2[AppStatusEnum2["REJECTED"] = 3] = "REJECTED";
  AppStatusEnum2[AppStatusEnum2["SUSPENDED"] = 4] = "SUSPENDED";
})(AppStatusEnum || (AppStatusEnum = {}));
var ScreenIdEnum;
(function(ScreenIdEnum2) {
  ScreenIdEnum2[ScreenIdEnum2["TRIP_DETAILS"] = 0] = "TRIP_DETAILS";
  ScreenIdEnum2[ScreenIdEnum2["VEHICLE_ACTIVITY"] = 1] = "VEHICLE_ACTIVITY";
  ScreenIdEnum2[ScreenIdEnum2["DASHBOARD"] = 2] = "DASHBOARD";
  ScreenIdEnum2[ScreenIdEnum2["REPORTS"] = 3] = "REPORTS";
})(ScreenIdEnum || (ScreenIdEnum = {}));
var WidgetSizeEnum;
(function(WidgetSizeEnum2) {
  WidgetSizeEnum2[WidgetSizeEnum2["MEDIUM"] = 0] = "MEDIUM";
  WidgetSizeEnum2[WidgetSizeEnum2["FULL_WIDTH"] = 1] = "FULL_WIDTH";
  WidgetSizeEnum2[WidgetSizeEnum2["CARD"] = 2] = "CARD";
})(WidgetSizeEnum || (WidgetSizeEnum = {}));

// src/app/features/app-store/models/api/app-store-api.mappers.ts
function mapStatusFromApi(status) {
  switch (status) {
    case AppStatusEnum.DRAFT:
      return "DRAFT";
    case AppStatusEnum.PENDING_REVIEW:
      return "PENDING_REVIEW";
    case AppStatusEnum.APPROVED:
      return "APPROVED";
    case AppStatusEnum.REJECTED:
      return "REJECTED";
    case AppStatusEnum.SUSPENDED:
      return "SUSPENDED";
    default:
      return "DRAFT";
  }
}
function mapStatusToApi(status) {
  switch (status) {
    case "DRAFT":
      return AppStatusEnum.DRAFT;
    case "PENDING_REVIEW":
      return AppStatusEnum.PENDING_REVIEW;
    case "APPROVED":
      return AppStatusEnum.APPROVED;
    case "REJECTED":
      return AppStatusEnum.REJECTED;
    case "SUSPENDED":
      return AppStatusEnum.SUSPENDED;
    default:
      return AppStatusEnum.DRAFT;
  }
}
function mapScreenIdFromApi(screenId) {
  switch (screenId) {
    case ScreenIdEnum.TRIP_DETAILS:
      return "TRIP_DETAILS";
    case ScreenIdEnum.VEHICLE_ACTIVITY:
      return "VEHICLE_ACTIVITY";
    case ScreenIdEnum.DASHBOARD:
      return "DASHBOARD";
    case ScreenIdEnum.REPORTS:
      return "REPORTS";
    default:
      return "TRIP_DETAILS";
  }
}
function mapScreenIdToApi(screenId) {
  switch (screenId) {
    case "TRIP_DETAILS":
      return ScreenIdEnum.TRIP_DETAILS;
    case "VEHICLE_ACTIVITY":
      return ScreenIdEnum.VEHICLE_ACTIVITY;
    case "DASHBOARD":
      return ScreenIdEnum.DASHBOARD;
    case "REPORTS":
      return ScreenIdEnum.REPORTS;
    default:
      return ScreenIdEnum.TRIP_DETAILS;
  }
}
function mapWidgetSizeFromApi(widgetSize) {
  switch (widgetSize) {
    case WidgetSizeEnum.MEDIUM:
      return "MEDIUM";
    case WidgetSizeEnum.FULL_WIDTH:
      return "FULL_WIDTH";
    case WidgetSizeEnum.CARD:
      return "CARD";
    default:
      return "MEDIUM";
  }
}
function mapWidgetSizeToApi(widgetSize) {
  switch (widgetSize) {
    case "MEDIUM":
      return WidgetSizeEnum.MEDIUM;
    case "FULL_WIDTH":
      return WidgetSizeEnum.FULL_WIDTH;
    case "CARD":
      return WidgetSizeEnum.CARD;
    default:
      return WidgetSizeEnum.MEDIUM;
  }
}
function mapIntegrationPointFromApi(apiPoint) {
  return {
    screenId: mapScreenIdFromApi(apiPoint.screenId),
    widgetSize: mapWidgetSizeFromApi(apiPoint.widgetSize),
    requiredPermissions: apiPoint.requiredPermissions
  };
}
function mapAppDefinitionFromApi(apiResponse) {
  return {
    id: apiResponse.id,
    name: apiResponse.name,
    description: apiResponse.description,
    shortDescription: apiResponse.shortDescription,
    iconUrl: apiResponse.iconUrl,
    userId: apiResponse.developerId,
    developerName: apiResponse.developerName,
    status: mapStatusFromApi(apiResponse.status),
    integrationPoints: apiResponse.integrationPoints.map(mapIntegrationPointFromApi),
    endpoint: {
      baseUrl: apiResponse.endpoint.baseUrl,
      healthCheckUrl: apiResponse.endpoint.healthCheckUrl
    },
    pricing: {
      model: "FREE",
      // Not in API response, default to FREE
      price: 0,
      currency: "ZAR",
      trialDays: 0
    },
    categories: apiResponse.categories,
    tags: apiResponse.tags,
    averageRating: apiResponse.averageRating,
    reviewCount: apiResponse.reviewCount,
    installCount: apiResponse.installCount,
    updatedAt: apiResponse.updatedDate,
    createdAt: apiResponse.createdDate
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
    createdAt: apiResponse.createdDate
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
    let httpParams = new HttpParams();
    if (params) {
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
      if (params.developerId !== void 0) {
        httpParams = httpParams.set("developerId", params.developerId);
      }
    }
    return this.http.get(`${this.baseUrl}/apps`, {
      params: httpParams
    }).pipe(map((response) => response.items.map(mapAppDefinitionFromApi)));
  }
  /**
   * Get app definition by ID
   * @param id App ID
   * @param developerId Optional developer ID filter
   */
  getAppById(id, developerId) {
    let httpParams = new HttpParams();
    if (developerId !== void 0) {
      httpParams = httpParams.set("developerId", developerId);
    }
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
        screenId: mapScreenIdToApi(point.screenId),
        widgetSize: mapWidgetSizeToApi(point.widgetSize),
        requiredPermissions: point.requiredPermissions
      })) ?? [],
      endpoint: {
        baseUrl: app.endpoint?.baseUrl ?? "",
        healthCheckUrl: app.endpoint?.healthCheckUrl
      },
      categories: app.categories ?? [],
      tags: app.tags ?? []
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
      id,
      name: changes.name,
      description: changes.description,
      shortDescription: changes.shortDescription,
      iconUrl: changes.iconUrl,
      integrationPoints: changes.integrationPoints?.map((point) => ({
        screenId: mapScreenIdToApi(point.screenId),
        widgetSize: mapWidgetSizeToApi(point.widgetSize),
        requiredPermissions: point.requiredPermissions
      })),
      endpoint: changes.endpoint ? {
        baseUrl: changes.endpoint.baseUrl,
        healthCheckUrl: changes.endpoint.healthCheckUrl
      } : void 0,
      categories: changes.categories,
      tags: changes.tags,
      state: changes.status ? mapStatusToApi(changes.status) : void 0
    };
    return this.http.patch(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
  }
  /**
   * Submit an app for review (changes status to PENDING_REVIEW)
   * @param id App ID
   */
  submitForReview(id) {
    return this.updateApp(id, { status: "PENDING_REVIEW" });
  }
  /**
   * Approve an app (admin only - changes status to APPROVED)
   * @param id App ID
   */
  approveApp(id) {
    return this.updateStatusOnly(id, "APPROVED");
  }
  /**
   * Reject an app (admin only - changes status to REJECTED)
   * @param id App ID
   */
  rejectApp(id) {
    return this.updateStatusOnly(id, "REJECTED");
  }
  /**
   * Suspend an app (admin only - changes status to SUSPENDED)
   * @param id App ID
   */
  suspendApp(id) {
    return this.updateStatusOnly(id, "SUSPENDED");
  }
  /**
   * Update only the status field of an app
   * @param id App ID
   * @param status New status
   */
  updateStatusOnly(id, status) {
    const request = {
      id,
      state: mapStatusToApi(status)
    };
    return this.http.patch(`${this.baseUrl}/apps/${id}`, request).pipe(map(mapAppDefinitionFromApi));
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
//# sourceMappingURL=chunk-4WJKKKHS.js.map
