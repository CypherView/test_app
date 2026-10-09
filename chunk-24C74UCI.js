import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-QIA3IXUH.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-IGP4HYP5.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-JTYUVYNT.js").then((m) => m.MyInstalledAppsComponent)
      },
      {
        path: "my-created-apps",
        loadComponent: () => import("./chunk-BMEY4RZV.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-F26QULZ7.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "docs",
    loadComponent: () => import("./chunk-KNLXS7UX.js").then((m) => m.AppStoreDocsComponent)
  },
  {
    path: "editor",
    loadComponent: () => import("./chunk-5IP3SP5S.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-NZNIRVLQ.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-24C74UCI.js.map
