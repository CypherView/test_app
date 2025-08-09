import {
  getAllRouteParams,
  isDefined
} from "./chunk-ZFFRSVXZ.js";
import {
  Router
} from "./chunk-OLJEO5KJ.js";
import {
  inject
} from "./chunk-XEZOAFBV.js";

// src/app/features/administration/guards/client-assets.guard.ts
var clientAssetsGuard = (route, _state) => {
  const router = inject(Router);
  const getAllParams = () => {
    let currentRoute = route;
    const params = {};
    while (isDefined(currentRoute)) {
      for (const key of currentRoute.paramMap.keys) {
        params[key] = currentRoute.paramMap.get(key);
      }
      currentRoute = currentRoute.parent;
    }
    return params;
  };
  const allParams = getAllParams();
  const clientId = allParams["clientId"];
  if (isDefined(clientId)) {
    return router.createUrlTree([
      "admin",
      "client",
      clientId,
      "assets",
      "grid",
      "client-assets"
    ]);
  }
  return false;
};

// src/app/features/administration/guards/client-geofences.guard.ts
var clientGeofencesGuard = (route, _state) => {
  const router = inject(Router);
  const getAllParams = () => {
    let currentRoute = route;
    const params = {};
    while (isDefined(currentRoute)) {
      for (const key of currentRoute.paramMap.keys) {
        params[key] = currentRoute.paramMap.get(key);
      }
      currentRoute = currentRoute.parent;
    }
    return params;
  };
  const allParams = getAllParams();
  const clientId = allParams["clientId"];
  if (isDefined(clientId)) {
    return router.createUrlTree([
      "admin",
      "client",
      clientId,
      "geofences",
      "grid",
      "client-geofences"
    ]);
  }
  return false;
};

// src/app/features/administration/guards/client-alerts.guard.ts
var clientAlertsGuard = (route, _state) => {
  const router = inject(Router);
  const allParams = getAllRouteParams(route);
  const clientId = allParams["clientId"];
  if (isDefined(clientId)) {
    return router.createUrlTree([
      "admin",
      "client",
      clientId,
      "alerts",
      "grid",
      "client-alerts"
    ]);
  }
  return false;
};

// src/app/features/administration/guards/vendor.guard.ts
var vendorsGuard = (route, _state) => {
  const router = inject(Router);
  const allParams = getAllRouteParams(route);
  const distributorId = allParams["distributorId"];
  if (isDefined(distributorId)) {
    return router.createUrlTree([
      "admin",
      "distributor",
      distributorId,
      "vendors",
      "grid",
      "distributor-vendors"
    ]);
  }
  return false;
};

// src/app/features/administration/guards/distributors.guard.ts
var distributorsGuard = (route, _state) => {
  const router = inject(Router);
  const allParams = getAllRouteParams(route);
  const superAdminId = allParams["superAdminId"];
  if (isDefined(superAdminId)) {
    return router.createUrlTree([
      "admin",
      "super-admin",
      superAdminId,
      "distributors",
      "grid",
      "super-admin-distributors"
    ]);
  }
  return false;
};

export {
  clientAssetsGuard,
  clientGeofencesGuard,
  clientAlertsGuard,
  vendorsGuard,
  distributorsGuard
};
//# sourceMappingURL=chunk-BF45RBC3.js.map
