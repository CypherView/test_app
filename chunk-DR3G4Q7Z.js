import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-5W6FT3HS.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-HMIP3MZ2.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-VZGKBIZG.js").then((m) => m.MyInstalledAppsComponent)
      },
      {
        path: "my-created-apps",
        loadComponent: () => import("./chunk-C5XKSTSN.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-SOW74EBQ.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "docs",
    loadComponent: () => import("./chunk-ZIB6FJNW.js").then((m) => m.AppStoreDocsComponent)
  },
  {
    path: "editor",
    loadComponent: () => import("./chunk-Q6VMSKFA.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-ITJOJ3BW.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-DR3G4Q7Z.js.map
