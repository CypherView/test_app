import {
  CLIENT_ADMIN_FEATURES
} from "./chunk-EERXC2NY.js";
import {
  ClientPermissionsService
} from "./chunk-42MR6OU6.js";
import {
  PermissionService,
  Router,
  isDefined,
  isNullOrUndefined
} from "./chunk-5UW7Z56K.js";
import {
  inject
} from "./chunk-JGTMR4UQ.js";

// src/app/features/administration/guards/smart-redirect.guard.ts
function createSmartRedirectGuard(parentPath, childIds) {
  return (_route, state) => {
    const clientPermissionsService = inject(ClientPermissionsService);
    const router = inject(Router);
    const parts = state.url.split("/");
    const clientIdIndex = parts.indexOf("client");
    const clientId = clientIdIndex !== -1 && clientIdIndex + 1 < parts.length ? parts[clientIdIndex + 1] : null;
    if (isNullOrUndefined(clientId)) {
      return false;
    }
    for (const childId of childIds) {
      const config = CLIENT_ADMIN_FEATURES[childId];
      const hasAccess = clientPermissionsService.canAccessFeature("permissions" in config ? config.permissions : void 0);
      if (hasAccess) {
        return router.createUrlTree([
          "admin",
          "client",
          clientId,
          parentPath,
          childId
        ]);
      }
    }
    return router.createUrlTree(["/unauthorized"], {
      queryParams: { requiredPermission: "no_access" }
    });
  };
}
function createContextSmartRedirectGuard(entitySegment, parentPath, childIds, context, featureConfig, childSubPaths) {
  return (_route, state) => {
    const permissionService = inject(PermissionService);
    const router = inject(Router);
    const parts = state.url.split("/");
    const entityIndex = parts.indexOf(entitySegment);
    const entityId = entityIndex !== -1 && entityIndex + 1 < parts.length ? parts[entityIndex + 1] : null;
    if (isNullOrUndefined(entityId)) {
      return false;
    }
    for (const childId of childIds) {
      const config = featureConfig[childId];
      const permissions = isDefined(config) && "permissions" in config ? config.permissions : void 0;
      const hasAccess = permissionService.canAccess(permissions, context);
      if (hasAccess) {
        const subPath = childSubPaths?.[childId];
        return router.createUrlTree([
          "admin",
          entitySegment,
          entityId,
          parentPath,
          ...isDefined(subPath) ? [subPath] : [],
          childId
        ]);
      }
    }
    return router.createUrlTree(["/unauthorized"], {
      queryParams: { requiredPermission: "no_access" }
    });
  };
}

export {
  createSmartRedirectGuard,
  createContextSmartRedirectGuard
};
//# sourceMappingURL=chunk-B5J6C6E7.js.map
