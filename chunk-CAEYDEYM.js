import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-2FLG56AS.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-V4LND5BI.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-6ZIGHHM5.js").then((m) => m.MyInstalledAppsComponent)
      },
      {
        path: "my-created-apps",
        loadComponent: () => import("./chunk-B5SVLQEU.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-KR3IGHJP.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "docs",
    loadComponent: () => import("./chunk-ZIB6FJNW.js").then((m) => m.AppStoreDocsComponent)
  },
  {
    path: "editor",
    loadComponent: () => import("./chunk-ESL3MYX3.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-OEOG5NXB.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-CAEYDEYM.js.map
