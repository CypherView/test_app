import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-QKUJVVD7.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-7PNDDJ7Q.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-72VXUJPV.js").then((m) => m.MyInstalledAppsComponent)
      },
      {
        path: "my-created-apps",
        loadComponent: () => import("./chunk-GMQE7LOY.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-5AWUK6LV.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "docs",
    loadComponent: () => import("./chunk-ZIB6FJNW.js").then((m) => m.AppStoreDocsComponent)
  },
  {
    path: "editor",
    loadComponent: () => import("./chunk-WXF6GYBG.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-NFIAEMMT.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-NNVU3FCA.js.map
