import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientAlertsGuard,
  clientAssetsGuard,
  clientGeofencesGuard
} from "./chunk-UV2RYBQR.js";
import "./chunk-W5V3SXPS.js";
import "./chunk-GRDUBIHE.js";
import {
  DynamicTabPanelComponent
} from "./chunk-HEHRBJWT.js";
import {
  EntityDetailsService
} from "./chunk-45F32UWU.js";
import "./chunk-L5CTDSAD.js";
import "./chunk-N76FRIAW.js";
import "./chunk-7LR6KRAV.js";
import "./chunk-IU5PHRJC.js";
import "./chunk-76O3QV6L.js";
import "./chunk-WYMXTO7G.js";
import "./chunk-DXDVPHIO.js";
import "./chunk-EY566YJ3.js";
import "./chunk-JHYQFUMG.js";
import "./chunk-L7BXSG2W.js";
import "./chunk-TE3G7BOY.js";
import "./chunk-55GGQPOO.js";
import "./chunk-4ON5UFKI.js";
import "./chunk-2DEWPY35.js";
import "./chunk-24M4RCVM.js";
import "./chunk-4ROJTKGQ.js";
import "./chunk-VHE2BAWC.js";
import "./chunk-BHI76GZQ.js";
import "./chunk-MCSW3OQB.js";
import "./chunk-PWEIX5HT.js";
import "./chunk-MI3KL7J7.js";
import "./chunk-OB7MLJB6.js";
import "./chunk-PESOCKFB.js";
import "./chunk-L5472IFC.js";
import "./chunk-CBCRKUGG.js";
import "./chunk-TYYYZUG5.js";
import "./chunk-C5K3GDHP.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PermissionService,
  Router,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-ZVYXWUM3.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  Injectable,
  ViewChild,
  computed,
  filter,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
} from "./chunk-WYYVC2QJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/services/client-permissions.service.ts
var ClientPermissionsService = class _ClientPermissionsService {
  permissionService = inject(PermissionService);
  /**
   * Check if user has access to a specific permission expression in client scope.
   * Used by guards and tab filtering.
   */
  canAccessFeature(permissions) {
    if (permissions === null || permissions === void 0) {
      return true;
    }
    return this.permissionService.canAccess(permissions, "client");
  }
  static \u0275fac = function ClientPermissionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientPermissionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientPermissionsService, factory: _ClientPermissionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientPermissionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/clients/client-administration.config.ts
var CLIENT_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  assets: {
    label: "Assets",
    permissions: "client:list-assets"
  },
  geofences: {
    label: "Geofences",
    permissions: "client:list-zones"
  },
  alerts: {
    label: "Alerts",
    permissions: {
      or: ["client:alerts", "client:list-alerts"]
    }
  },
  hardware: {
    label: "Hardware",
    permissions: {
      or: [
        "client:list-devices",
        "client:devices",
        "client:list-assettags",
        "client:assettags",
        "client:list-simcards",
        "client:simcards"
      ]
    }
  },
  "client-hardware-devices": {
    label: "Devices",
    permissions: {
      or: ["client:list-devices", "client:devices"]
    }
  },
  "client-asset-tags": {
    label: "Asset Tags",
    permissions: {
      or: ["client:list-assettags", "client:assettags"]
    }
  },
  "client-sim-cards": {
    label: "Sim Cards",
    permissions: {
      or: ["client:list-simcards", "client:simcards"]
    }
  },
  providers: {
    label: "Providers",
    permissions: {
      or: [
        "client:list-smsGatewayProviders",
        "client:smsGatewayProviders",
        "client:list-smsgateways",
        "client:smsgateways"
      ]
    }
  },
  "client-sms-gateway-providers": {
    label: "SMS Gateways",
    permissions: {
      or: [
        "client:list-smsGatewayProviders",
        "client:smsGatewayProviders",
        "client:list-smsgateways",
        "client:smsgateways"
      ]
    }
  },
  profiles: {
    label: "Profiles",
    permissions: {
      or: [
        "client:list-iotypes",
        "client:iotypes",
        "client:list-deviceconfigprofiles",
        "client:deviceconfigprofiles",
        "client:list-assetratingprofiles",
        "client:assetratingprofiles",
        "client:list-assetstateprofiles",
        "client:assetstateprofiles",
        "client:list-overspeedprofiles",
        "client:overspeedprofiles",
        "client:list-roadprofiles",
        "client:roadprofiles",
        "client:list-geolockprofiles",
        "client:geolockprofiles",
        "client:list-customfields",
        "client:customfields"
      ]
    }
  },
  "client-io-types": {
    label: "I/O Types",
    permissions: {
      or: ["client:list-iotypes", "client:iotypes"]
    }
  },
  "client-device-config-profiles": {
    label: "Device Config Profiles",
    permissions: {
      or: ["client:list-deviceconfigprofiles", "client:deviceconfigprofiles"]
    }
  },
  "client-asset-rating-profiles": {
    label: "Asset Rating Profiles",
    permissions: {
      or: ["client:list-assetratingprofiles", "client:assetratingprofiles"]
    }
  },
  "client-asset-state-profiles": {
    label: "Asset State Profiles",
    permissions: {
      or: ["client:list-assetstateprofiles", "client:assetstateprofiles"]
    }
  },
  "client-overspeed-profiles": {
    label: "Overspeed Profiles",
    permissions: {
      or: ["client:list-overspeedprofiles", "client:overspeedprofiles"]
    }
  },
  "client-road-profiles": {
    label: "Road Profiles",
    permissions: {
      or: ["client:list-roadprofiles", "client:roadprofiles"]
    }
  },
  "client-geo-lock-profiles": {
    label: "Geo Lock Profiles",
    permissions: {
      or: ["client:list-geolockprofiles", "client:geolockprofiles"]
    }
  },
  "client-custom-fields": {
    label: "Custom Fields",
    permissions: {
      or: ["client:list-customfields", "client:customfields"]
    }
  },
  organization: {
    label: "Organization",
    permissions: {
      or: [
        "client:list-costcentres",
        "client:costcentres",
        "client:list-assetgroups",
        "client:assetgroups",
        "client:list-assetcategories",
        "client:assetcategories",
        "client:list-zonegroups",
        "client:zonegroups"
      ]
    }
  },
  "client-cost-centres": {
    label: "Cost Centres",
    permissions: {
      or: ["client:list-costcentres", "client:costcentres"]
    }
  },
  "client-asset-groups": {
    label: "Asset Groups",
    permissions: {
      or: ["client:list-assetgroups", "client:assetgroups"]
    }
  },
  "client-asset-categories": {
    label: "Categories",
    permissions: {
      or: ["client:list-assetcategories", "client:assetcategories"]
    }
  },
  "client-geofence-groups": {
    label: "Geofence Groups",
    permissions: {
      or: ["client:list-zonegroups", "client:zonegroups"]
    }
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "client:list-users",
        "client:users",
        "client:list-userroles",
        "client:userroles"
      ]
    }
  },
  "client-users": {
    label: "Users",
    permissions: {
      or: ["client:list-users", "client:users"]
    }
  },
  "client-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["client:list-userroles", "client:userroles"]
    }
  }
};

// src/app/features/administration/guards/client-type-permission.guard.ts
var clientTypePermissionGuard = async (route) => {
  const clientPermissionsService = inject(ClientPermissionsService);
  const router = inject(Router);
  const type = route.paramMap.get("type");
  if (type === null || type === "")
    return true;
  if (!(type in CLIENT_ADMIN_FEATURES))
    return true;
  const featureConfig = CLIENT_ADMIN_FEATURES[type];
  if (!("permissions" in featureConfig)) {
    return true;
  }
  const hasAccess = clientPermissionsService.canAccessFeature(featureConfig.permissions);
  if (!hasAccess) {
    await router.navigate(["/unauthorized"], {
      queryParams: {
        requiredPermission: JSON.stringify(featureConfig.permissions)
      }
    });
    return false;
  }
  return true;
};

// src/app/features/administration/guards/smart-redirect.guard.ts
function createSmartRedirectGuard(parentPath, childIds) {
  return (_route, state) => {
    const clientPermissionsService = inject(ClientPermissionsService);
    const router = inject(Router);
    const parts = state.url.split("/");
    const clientIdIndex = parts.indexOf("client");
    const clientId = clientIdIndex !== -1 && clientIdIndex + 1 < parts.length ? parts[clientIdIndex + 1] : null;
    if (isNullOrUndefined(clientId)) {
      return false;
    }
    for (const childId of childIds) {
      const config = CLIENT_ADMIN_FEATURES[childId];
      const hasAccess = clientPermissionsService.canAccessFeature("permissions" in config ? config.permissions : void 0);
      if (hasAccess) {
        return router.createUrlTree([
          "admin",
          "client",
          clientId,
          parentPath,
          childId
        ]);
      }
    }
    return false;
  };
}

// src/app/features/administration/components/clients/client-container/client-container.component.ts
var _c0 = ["main"];
function ClientContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var ClientContainerComponent = class _ClientContainerComponent {
  cdr = inject(ChangeDetectorRef);
  clientPermissionsService = inject(ClientPermissionsService);
  mainTemplate;
  /**
   * Static tab structure - defines hierarchy, labels, and routes
   * Permissions are pulled from CLIENT_ADMIN_FEATURES config
   */
  baseClientTabs = [
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
  /**
   * Computed signal that filters tabs based on user permissions.
   * Hides parent tabs if they have no visible children.
   * Reactive - updates when permissions change.
   */
  clientTabs = computed(() => {
    return this.filterTabsByPermissions(this.baseClientTabs);
  }, ...ngDevMode ? [{ debugName: "clientTabs" }] : []);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  detailsService = inject(EntityDetailsService);
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : []);
  get contentScrollableActive() {
    return !this.isContentScrollable();
  }
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.baseClientTabs, this.mainTemplate);
    this.cdr.detectChanges();
  }
  applyTemplateToTabs(tabs, template) {
    for (const tab of tabs) {
      tab.template = template;
      if (tab.children !== void 0 && tab.children.length > 0) {
        this.applyTemplateToTabs(tab.children, template);
      }
    }
  }
  /**
   * Filters tabs based on permissions.
   * Returns only tabs the user has access to.
   * Hides parent tabs if all children are hidden.
   */
  filterTabsByPermissions(tabs) {
    return tabs.map((tab) => {
      const config = CLIENT_ADMIN_FEATURES[tab.id];
      const hasPermission = this.clientPermissionsService.canAccessFeature("permissions" in config ? config.permissions : void 0);
      if (!hasPermission) {
        return null;
      }
      if (tab.children !== void 0 && tab.children.length > 0) {
        const filteredChildren = this.filterTabsByPermissions(tab.children);
        if (filteredChildren.length === 0) {
          return null;
        }
        return __spreadProps(__spreadValues({}, tab), {
          children: filteredChildren
        });
      }
      return tab;
    }).filter((tab) => tab !== null);
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
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => getScrollableState(this.activatedRoute)), takeUntilDestroyed(this.destroyRef)).subscribe((scrollableValue) => {
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
  }, hostAttrs: [1, "!flex", "!flex-col", "!h-full", "!w-full", "!overflow-hidden"], hostVars: 2, hostBindings: function ClientContainerComponent_HostBindings(rf, ctx) {
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
      \u0275\u0275property("tabs", ctx.clientTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-container", imports: [DynamicTabPanelComponent, RouterOutlet], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="clientTabs()"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientContainerComponent, { className: "ClientContainerComponent", filePath: "src/app/features/administration/components/clients/client-container/client-container.component.ts", lineNumber: 42 });
})();

// src/app/features/administration/components/clients/clients.routes.ts
var ADMIN_CLIENT_ROUTES = [
  {
    path: "",
    component: ClientContainerComponent,
    children: [
      {
        path: "accounts",
        children: [
          {
            path: "",
            canActivate: [
              createSmartRedirectGuard("accounts", [
                "client-users",
                "client-user-roles"
              ])
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "details",
        loadChildren: () => import("./chunk-YK2EHR4U.js").then((m) => m.ADMIN_CLIENT_DETAILS_ROUTES),
        data: { nestedContentScrollable: true }
      },
      {
        path: "hardware",
        children: [
          {
            path: "",
            canActivate: [
              createSmartRedirectGuard("hardware", [
                "client-hardware-devices",
                "client-asset-tags",
                "client-sim-cards"
              ])
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "organization",
        children: [
          {
            path: "",
            canActivate: [
              createSmartRedirectGuard("organization", [
                "client-cost-centres",
                "client-asset-groups",
                "client-asset-categories",
                "client-geofence-groups"
              ])
            ],
            component: AdminTreetableContainerComponent
          },
          {
            path: ":type",
            canActivate: [clientTypePermissionGuard],
            component: AdminTreetableContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [clientTypePermissionGuard],
            component: AdminTreetableContainerComponent
          }
        ]
      },
      {
        path: "profiles",
        children: [
          {
            path: "",
            canActivate: [
              createSmartRedirectGuard("profiles", [
                "client-io-types",
                "client-device-config-profiles",
                "client-asset-rating-profiles",
                "client-asset-state-profiles",
                "client-overspeed-profiles",
                "client-road-profiles",
                "client-geo-lock-profiles",
                "client-custom-fields"
              ])
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "providers",
        children: [
          {
            path: "",
            canActivate: [
              createSmartRedirectGuard("providers", [
                "client-sms-gateway-providers"
              ])
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [clientTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      ...createGuardedGridRoute("assets", clientAssetsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["assets"].permissions),
      ...createGuardedGridRoute("geofences", clientGeofencesGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["geofences"].permissions),
      ...createGuardedGridRoute("alerts", clientAlertsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["alerts"].permissions),
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }
    ]
  }
];
export {
  ADMIN_CLIENT_ROUTES
};
//# sourceMappingURL=chunk-X2H2X44K.js.map
