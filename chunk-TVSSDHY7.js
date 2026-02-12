import {
  CLIENT_ADMIN_FEATURES,
  ClientPermissionsService
} from "./chunk-SD25RV3B.js";
import {
  PermissionService,
  Router,
  isDefined,
  isNullOrUndefined
} from "./chunk-TG6TG2JG.js";
import {
  inject
} from "./chunk-J5TUQDPD.js";

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
function createContextSmartRedirectGuard(entitySegment, parentPath, childIds, context, featureConfig) {
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
        return router.createUrlTree([
          "admin",
          entitySegment,
          entityId,
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

export {
  createSmartRedirectGuard,
  createContextSmartRedirectGuard
};
//# sourceMappingURL=chunk-TVSSDHY7.js.map
