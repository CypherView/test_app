import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-GJTEO2UH.js").then((m) => m.AppMarketplaceComponent)
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-ZGAPG7CW.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-RAXXV5FV.js").then((m) => m.AppAdminPanelComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-VSGZVR5Y.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-T6KYZOBL.js.map
