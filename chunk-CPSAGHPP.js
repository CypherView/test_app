import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-3HEBX552.js").then((m) => m.AppMarketplaceComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-Z4DUHEVI.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-MO6K4ZNS.js").then((m) => m.AppAdminPanelComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-3YWL32NF.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-CPSAGHPP.js.map
