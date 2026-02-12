import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZYMI4FO2.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-2FM6DR2N.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-CVMO3X7W.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-NOVCH4JW.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-W66GNI3O.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-AAKZXJJE.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-TRQXYXN5.js.map
