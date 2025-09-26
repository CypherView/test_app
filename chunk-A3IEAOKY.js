import {
  clientAlertsGuard,
  clientAssetsGuard,
  clientGeofencesGuard
} from "./chunk-K7ZG6EJI.js";
import {
  AdminTreetableContainerComponent
} from "./chunk-CGH4IMOY.js";
import {
  AdminGridContainerComponent
} from "./chunk-5H5GF6JU.js";
import "./chunk-ERQSJHKQ.js";
import {
  DynamicTabPanelComponent
} from "./chunk-L2NCKUHT.js";
import {
  EntityDetailsService
} from "./chunk-CHLTYWV5.js";
import "./chunk-OP5KKFMI.js";
import "./chunk-NF5VPKWP.js";
import "./chunk-4FHTUBO6.js";
import "./chunk-XCN5TG5P.js";
import "./chunk-2CFUVUYH.js";
import "./chunk-S3HO5ZVD.js";
import "./chunk-22K7YASS.js";
import "./chunk-GM73WNCJ.js";
import {
  takeUntilDestroyed
} from "./chunk-BQ2AEPEH.js";
import "./chunk-SIZTMCIF.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-7UUZS7IM.js";
import "./chunk-OHMGUPCQ.js";
import {
  createGuardedGridRoute,
  isDefined
} from "./chunk-UW6Q2JGR.js";
import {
  ActivatedRoute,
  CommonModule,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-L35GT5ED.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  NgModule,
  ViewChild,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-7FSD67AL.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/administration/components/clients/client-container/client-container.component.ts
var _c0 = ["main"];
function ClientContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var ClientContainerComponent = class _ClientContainerComponent {
  cdr = inject(ChangeDetectorRef);
  mainTemplate;
  clientTabs = [
    { id: "details", label: "Details", route: "details", level: 0 },
    { id: "assets", label: "Assets", route: "assets", level: 0 },
    { id: "geofences", label: "Geofences", route: "geofences", level: 0 },
    { id: "alerts", label: "Alerts", route: "alerts", level: 0 },
    {
      id: "hardware",
      label: "Hardware",
      level: 0,
      children: [
        {
          id: "client-hardware-devices",
          label: "Devices",
          route: "hardware/client-hardware-devices",
          level: 1
        },
        {
          id: "client-asset-tags",
          label: "Asset Tags",
          route: "hardware/client-asset-tags",
          level: 1
        },
        {
          id: "client-sim-cards",
          label: "Sim Cards",
          route: "hardware/client-sim-cards",
          level: 1
        }
      ]
    },
    {
      id: "providers",
      label: "Providers",
      level: 0,
      children: [
        /*   {
          id: 'client-device-providers',
          label: 'Device Providers',
          route: 'providers/client-device-providers',
          level: 1,
        }, */
        {
          id: "client-sms-gateway-providers",
          label: "SMS Gateways",
          route: "providers/client-sms-gateway-providers",
          level: 1
        }
      ]
    },
    {
      id: "profiles",
      label: "Profiles",
      level: 0,
      children: [
        {
          id: "client-io-types",
          label: "I/O Types",
          route: "profiles/client-io-types",
          level: 1
        },
        {
          id: "client-device-config-profiles",
          label: "Device Config Profiles",
          route: "profiles/client-device-config-profiles",
          level: 1
        },
        {
          id: "client-asset-rating-profiles",
          label: "Asset Rating Profiles",
          route: "profiles/client-asset-rating-profiles",
          level: 1
        },
        {
          id: "client-asset-state-profiles",
          label: "Asset State Profiles",
          route: "profiles/client-asset-state-profiles",
          level: 1
        },
        {
          id: "client-overspeed-profiles",
          label: "Overspeed Profiles",
          route: "profiles/client-overspeed-profiles",
          level: 1
        },
        {
          id: "client-road-profiles",
          label: "Road Profiles",
          route: "profiles/client-road-profiles",
          level: 1
        },
        {
          id: "client-geo-lock-profiles",
          label: "Geo Lock Profiles",
          route: "profiles/client-geo-lock-profiles",
          level: 1
        },
        {
          id: "client-custom-fields",
          label: "Custom Fields",
          route: "profiles/client-custom-fields",
          level: 1
        }
      ]
    },
    {
      id: "organization",
      label: "Organization",
      level: 0,
      children: [
        {
          id: "client-cost-centres",
          label: "Cost Centres",
          route: "organization/client-cost-centres",
          level: 1
        },
        {
          id: "client-asset-groups",
          label: "Asset Groups",
          route: "organization/client-asset-groups",
          level: 1
        },
        {
          id: "client-asset-categories",
          label: "Categories",
          route: "organization/client-asset-categories",
          level: 1
        },
        {
          id: "client-geofence-groups",
          label: "Geofence Groups",
          route: "organization/client-geofence-groups",
          level: 1
        }
      ]
    },
    /* {
      id: 'scheduled-reports',
      label: 'Scheduled Reports',
      route: 'scheduled-reports',
      level: 0,
    },
    { id: 'dashboard', label: 'Dashboard', route: 'dashboard', level: 0 }, */
    {
      id: "accounts",
      label: "Accounts",
      level: 0,
      children: [
        {
          id: "client-users",
          label: "Users",
          route: "accounts/client-users",
          level: 1
        },
        {
          id: "client-user-roles",
          label: "User Roles",
          route: "accounts/client-user-roles",
          level: 1
        }
      ]
    }
  ];
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  detailsService = inject(EntityDetailsService);
  isContentScrollable = signal(false);
  // Signal to control styling
  get contentScrollableActive() {
    return !this.isContentScrollable();
  }
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.clientTabs, this.mainTemplate);
    this.cdr.detectChanges();
  }
  applyTemplateToTabs(tabs, template) {
    for (const tab of tabs) {
      tab.template = template;
      if (tab.children) {
        this.applyTemplateToTabs(tab.children, template);
      }
    }
  }
  onTabChange() {
    this.detailsService.closeDetailsPanel();
  }
  ngOnInit() {
    const getScrollableState = (route) => {
      let currentRoute = route;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      const routeData = currentRoute.snapshot.data;
      if (isDefined(routeData) && typeof routeData["nestedContentScrollable"] === "boolean") {
        return routeData["nestedContentScrollable"];
      }
      return false;
    };
    this.isContentScrollable.set(getScrollableState(this.activatedRoute));
    this.cdr.detectChanges();
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => getScrollableState(this.activatedRoute)),
      // Reuse the logic
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((scrollableValue) => {
      if (this.isContentScrollable() !== scrollableValue) {
        this.isContentScrollable.set(scrollableValue);
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function ClientContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientContainerComponent, selectors: [["app-client-container"]], viewQuery: function ClientContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostVars: 2, hostBindings: function ClientContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 4, vars: 1, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"]], template: function ClientContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-dynamic-tab-panel", 2);
      \u0275\u0275listener("tabChange", function ClientContainerComponent_Template_app_dynamic_tab_panel_tabChange_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(2, ClientContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.clientTabs);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.content-scrollable-inactive[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=client-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-container", imports: [DynamicTabPanelComponent, RouterOutlet], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="clientTabs"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n', styles: ["/* src/app/features/administration/components/clients/client-container/client-container.component.scss */\n:host {\n  display: block;\n}\n:host(.content-scrollable-inactive) {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=client-container.component.css.map */\n"] }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientContainerComponent, { className: "ClientContainerComponent", filePath: "src/app/features/administration/components/clients/client-container/client-container.component.ts", lineNumber: 33 });
})();

// src/app/features/administration/components/clients/client-dashboard/client-dashboard.component.ts
var ClientDashboardComponent = class _ClientDashboardComponent {
  static \u0275fac = function ClientDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDashboardComponent, selectors: [["app-client-dashboard"]], decls: 0, vars: 0, template: function ClientDashboardComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-client-dashboard", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDashboardComponent, { className: "ClientDashboardComponent", filePath: "src/app/features/administration/components/clients/client-dashboard/client-dashboard.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/clients/client-scheduled-reports/client-scheduled-reports.component.ts
var ClientScheduledReportsComponent = class _ClientScheduledReportsComponent {
  static \u0275fac = function ClientScheduledReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientScheduledReportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientScheduledReportsComponent, selectors: [["app-client-scheduled-reports"]], decls: 0, vars: 0, template: function ClientScheduledReportsComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientScheduledReportsComponent, [{
    type: Component,
    args: [{ selector: "app-client-scheduled-reports", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientScheduledReportsComponent, { className: "ClientScheduledReportsComponent", filePath: "src/app/features/administration/components/clients/client-scheduled-reports/client-scheduled-reports.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/clients/clients-routing.module.ts
var routes = [
  {
    path: "",
    component: ClientContainerComponent,
    children: [
      {
        path: "accounts",
        children: [
          {
            path: "",
            redirectTo: "client-users",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "dashboard",
        component: ClientDashboardComponent
      },
      {
        path: "details",
        loadChildren: () => import("./chunk-5U5OVJIP.js").then((m) => m.ClientDetailsRoutingModule),
        data: { nestedContentScrollable: true }
      },
      {
        path: "hardware",
        children: [
          {
            path: "",
            redirectTo: "client-hardware-devices",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "organization",
        children: [
          {
            path: "",
            redirectTo: "client-cost-centres",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminTreetableContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminTreetableContainerComponent
          }
        ]
      },
      {
        path: "profiles",
        children: [
          {
            path: "",
            redirectTo: "client-io-types",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "providers",
        children: [
          {
            path: "",
            redirectTo: "client-sms-gateway-providers",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "scheduled-reports",
        component: ClientScheduledReportsComponent
      },
      ...createGuardedGridRoute("assets", clientAssetsGuard, AdminGridContainerComponent),
      ...createGuardedGridRoute("geofences", clientGeofencesGuard, AdminGridContainerComponent),
      ...createGuardedGridRoute("alerts", clientAlertsGuard, AdminGridContainerComponent),
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }
];
var ClientsRoutingModule = class _ClientsRoutingModule {
  static \u0275fac = function ClientsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/administration/components/clients/clients.module.ts
var ClientsModule = class _ClientsModule {
  static \u0275fac = function ClientsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ClientsRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, ClientsRoutingModule]
    }]
  }], null, null);
})();
export {
  ClientsModule
};
//# sourceMappingURL=chunk-A3IEAOKY.js.map
