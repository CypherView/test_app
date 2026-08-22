import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/app-store.routes.ts
var APP_STORE_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZBL7BYIB.js").then((m) => m.AppStoreShellComponent),
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-EVNLDWCR.js").then((m) => m.AppMarketplaceComponent)
      },
      {
        path: "my-apps",
        loadComponent: () => import("./chunk-T72IYE7V.js").then((m) => m.MyInstalledAppsComponent)
      },
      {
        path: "my-created-apps",
        loadComponent: () => import("./chunk-I5UPO62Y.js").then((m) => m.AppCreatorDashboardComponent)
      },
      {
        path: "admin",
        loadComponent: () => import("./chunk-UK7L3MVT.js").then((m) => m.AppAdminPanelComponent)
      }
    ]
  },
  {
    path: "docs",
    loadComponent: () => import("./chunk-ZIB6FJNW.js").then((m) => m.AppStoreDocsComponent)
  },
  {
    path: "editor",
    loadComponent: () => import("./chunk-EN7KY4RJ.js").then((m) => m.AppCreateWizardComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-H76UBCUE.js").then((m) => m.AppDetailComponent)
  }
];
export {
  APP_STORE_ROUTES
};
//# sourceMappingURL=chunk-IIFTSMUI.js.map
