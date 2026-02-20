import {
  createSmartRedirectGuard
} from "./chunk-C4XKOU2U.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientAlertsGuard,
  clientAssetsGuard,
  clientGeofencesGuard
} from "./chunk-O6JRE4KB.js";
import "./chunk-FX3XGEQE.js";
import {
  EntityDetailsService
} from "./chunk-SQXJEHHB.js";
import {
  DynamicTabPanelComponent
} from "./chunk-62QE5I2S.js";
import "./chunk-6KKY4MOV.js";
import {
  CLIENT_ADMIN_FEATURES,
  ClientPermissionsService,
  QAToolsService
} from "./chunk-3LLCXWXM.js";
import "./chunk-YKG5LWOW.js";
import "./chunk-OKZD7IEG.js";
import "./chunk-FC26RJEU.js";
import "./chunk-SBBOYAQU.js";
import "./chunk-SD7CD6SE.js";
import "./chunk-EY6ER4MP.js";
import "./chunk-LN4L6VZC.js";
import "./chunk-DXDVPHIO.js";
import "./chunk-ERWSOVMD.js";
import "./chunk-GYVQCOXJ.js";
import "./chunk-PVMHRDPC.js";
import "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import "./chunk-4CAIP3KE.js";
import "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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

// src/app/features/administration/components/clients/client-container/client-container.component.ts
var _c0 = ["main"];
function ClientContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "QA Test Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Currently simulating permissions for ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.qaTools.activeProfileName());
  }
}
function ClientContainerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var ClientContainerComponent = class _ClientContainerComponent {
  cdr = inject(ChangeDetectorRef);
  clientPermissionsService = inject(ClientPermissionsService);
  qaTools = inject(QAToolsService);
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
  }, decls: 6, vars: 2, consts: [["main", ""], [1, "w-full", "h-full", "flex", "flex-col"], [1, "px-4", "py-2", "bg-orange-100", "border-l-4", "border-orange-500", "text-orange-800", "text-sm"], [1, "flex-1", "overflow-hidden"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"], [1, "pi", "pi-info-circle", "mr-2"]], template: function ClientContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, ClientContainerComponent_Conditional_1_Template, 7, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-dynamic-tab-panel", 4);
      \u0275\u0275listener("tabChange", function ClientContainerComponent_Template_app_dynamic_tab_panel_tabChange_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(4, ClientContainerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.qaTools.testMode() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.clientTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-container", imports: [DynamicTabPanelComponent, RouterOutlet], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full flex flex-col">\n  <!-- QA Test Mode Indicator -->\n  @if (qaTools.testMode()) {\n    <div\n      class="px-4 py-2 bg-orange-100 border-l-4 border-orange-500 text-orange-800 text-sm"\n    >\n      <i class="pi pi-info-circle mr-2"></i>\n      <strong>QA Test Mode:</strong> Currently simulating permissions for\n      <strong>{{ qaTools.activeProfileName() }}</strong>\n    </div>\n  }\n\n  <div class="flex-1 overflow-hidden">\n    <app-dynamic-tab-panel\n      [tabs]="clientTabs()"\n      (tabChange)="onTabChange()"\n      styleClass="h-full overflow-hidden"\n    ></app-dynamic-tab-panel>\n  </div>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientContainerComponent, { className: "ClientContainerComponent", filePath: "src/app/features/administration/components/clients/client-container/client-container.component.ts", lineNumber: 43 });
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
        loadChildren: () => import("./chunk-PYPPBDG7.js").then((m) => m.ADMIN_CLIENT_DETAILS_ROUTES),
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
      ...createGuardedGridRoute("assets", clientAssetsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["assets"].permissions, void 0, "grid/:type", "client"),
      ...createGuardedGridRoute("geofences", clientGeofencesGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["geofences"].permissions, void 0, "grid/:type", "client"),
      ...createGuardedGridRoute("alerts", clientAlertsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["alerts"].permissions, void 0, "grid/:type", "client"),
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
//# sourceMappingURL=chunk-IM6BCU3I.js.map
