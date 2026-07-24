import {
  createSmartRedirectGuard
} from "./chunk-FWOFF2OM.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientAlertsGuard,
  clientAssetsGuard,
  clientContactsGuard,
  clientGeofencesGuard
} from "./chunk-OKNXOWMN.js";
import "./chunk-LXUP4XTY.js";
import {
  DynamicTabPanelComponent
} from "./chunk-BWR2CJ6I.js";
import {
  EntityDetailsService
} from "./chunk-CLLRPPPW.js";
import "./chunk-BSL4DLZ3.js";
import {
  CLIENT_ADMIN_FEATURES,
  ClientPermissionsService,
  QAToolsService
} from "./chunk-HBDFO4PG.js";
import "./chunk-J3RAL2WO.js";
import "./chunk-GXVWRHN6.js";
import "./chunk-HAEK3MNB.js";
import "./chunk-NOYOHX5Z.js";
import "./chunk-DPIEMUOA.js";
import "./chunk-3PDKK7YX.js";
import "./chunk-227XKAZG.js";
import "./chunk-LWZPKT57.js";
import "./chunk-AB3PBDIK.js";
import {
  LanguageService
} from "./chunk-7UON6CU4.js";
import "./chunk-UIOPXNY5.js";
import "./chunk-WLMUTOYA.js";
import "./chunk-HEDH66RH.js";
import "./chunk-RAHCTZWE.js";
import "./chunk-EDNONQMY.js";
import "./chunk-SV3SMBHH.js";
import "./chunk-5ZKUO7BH.js";
import "./chunk-VJ76VAAI.js";
import "./chunk-T2NLXXYI.js";
import "./chunk-DXDIX3ID.js";
import "./chunk-S4WNLXX2.js";
import "./chunk-3L22U4Q2.js";
import "./chunk-EVW4PTKX.js";
import "./chunk-S5OZ6G2W.js";
import "./chunk-NT6TC2O6.js";
import "./chunk-LHPCQEY3.js";
import "./chunk-2YBWOZSJ.js";
import "./chunk-BTNVOKO5.js";
import "./chunk-FYHRO7AA.js";
import "./chunk-6ZLKOSJY.js";
import "./chunk-47TCRRSK.js";
import "./chunk-5WWRPFVI.js";
import "./chunk-6RKFIQXA.js";
import "./chunk-N3IYAUEM.js";
import "./chunk-6RNH5RNU.js";
import "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-KMNNT5Y5.js";
import "./chunk-437DZVOB.js";
import "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import "./chunk-7YJUDWRM.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-RNIEZZVX.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
  createGuardedGridRoute,
  createGuardedTreeRoute,
  isDefined,
  takeUntilDestroyed
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import "./chunk-T7ZENNNQ.js";
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
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
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "LAYOUT.MAIN.QA_BANNER.MODE_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "LAYOUT.MAIN.QA_BANNER.SIMULATING_FOR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qaTools.activeProfileName());
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
  translate = inject(TranslateService);
  languageService = inject(LanguageService);
  mainTemplate;
  /**
   * Static tab structure - defines hierarchy, labels, and routes
   * Permissions are pulled from CLIENT_ADMIN_FEATURES config
   */
  baseClientTabs = [];
  /**
   * Computed signal that filters tabs based on user permissions.
   * Hides parent tabs if they have no visible children.
   * Reactive - updates when permissions change.
   */
  clientTabs = computed(() => {
    this.languageService.currentLanguage();
    return this.filterTabsByPermissions(this.baseClientTabs);
  }, ...ngDevMode ? [{ debugName: "clientTabs" }] : (
    /* istanbul ignore next */
    []
  ));
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  detailsService = inject(EntityDetailsService);
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : (
    /* istanbul ignore next */
    []
  ));
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
    this.baseClientTabs = this.buildClientTabs();
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
  buildClientTabs() {
    return [
      {
        id: "details",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.DETAILS"),
        route: "details",
        level: 0
      },
      {
        id: "assets",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.ASSETS"),
        route: "assets",
        level: 0
      },
      {
        id: "geofences",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.GEOFENCES"),
        route: "geofences",
        level: 0
      },
      {
        id: "alerts",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.ALERTS"),
        route: "alerts",
        level: 0
      },
      {
        id: "client-contacts",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.CONTACTS"),
        route: "contacts/grid/client-contacts",
        level: 0
      },
      {
        id: "hardware",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.HARDWARE"),
        level: 0,
        children: [
          {
            id: "client-hardware-devices",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.DEVICES"),
            route: "hardware/client-hardware-devices",
            level: 1
          },
          {
            id: "client-asset-tags",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ASSET_TAGS"),
            route: "hardware/client-asset-tags",
            level: 1
          },
          {
            id: "client-sim-cards",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.SIM_CARDS"),
            route: "hardware/client-sim-cards",
            level: 1
          }
        ]
      },
      {
        id: "providers",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.PROVIDERS"),
        level: 0,
        children: [
          {
            id: "client-sms-gateway-providers",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.SMS_GATEWAYS"),
            route: "providers/client-sms-gateway-providers",
            level: 1
          }
        ]
      },
      {
        id: "profiles",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.PROFILES"),
        level: 0,
        children: [
          {
            id: "client-io-types",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.IO_TYPES"),
            route: "profiles/client-io-types",
            level: 1
          },
          {
            id: "client-device-config-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.DEVICE_CONFIG_PROFILES"),
            route: "profiles/client-device-config-profiles",
            level: 1
          },
          {
            id: "client-asset-rating-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ASSET_RATING_PROFILES"),
            route: "profiles/client-asset-rating-profiles",
            level: 1
          },
          {
            id: "client-asset-state-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ASSET_STATE_PROFILES"),
            route: "profiles/client-asset-state-profiles",
            level: 1
          },
          {
            id: "client-overspeed-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.OVERSPEED_PROFILES"),
            route: "profiles/client-overspeed-profiles",
            level: 1
          },
          {
            id: "client-road-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ROAD_PROFILES"),
            route: "profiles/client-road-profiles",
            level: 1
          },
          {
            id: "client-geo-lock-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.GEO_LOCK_PROFILES"),
            route: "profiles/client-geo-lock-profiles",
            level: 1
          },
          {
            id: "client-custom-fields",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.CUSTOM_FIELDS"),
            route: "profiles/client-custom-fields",
            level: 1
          }
        ]
      },
      {
        id: "organization",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.ORGANIZATION"),
        level: 0,
        children: [
          {
            id: "client-cost-centres",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.COST_CENTRES"),
            route: "organization/client-cost-centres",
            level: 1
          },
          {
            id: "client-asset-groups",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ASSET_GROUPS"),
            route: "organization/client-asset-groups",
            level: 1
          },
          {
            id: "client-asset-categories",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.CATEGORIES"),
            route: "organization/client-asset-categories",
            level: 1
          },
          {
            id: "client-geofence-groups",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.GEOFENCE_GROUPS"),
            route: "organization/client-geofence-groups",
            level: 1
          }
        ]
      },
      {
        id: "accounts",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.ACCOUNTS"),
        level: 0,
        children: [
          {
            id: "client-users",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.USERS"),
            route: "accounts/client-users",
            level: 1
          },
          {
            id: "client-user-roles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.USER_ROLES"),
            route: "accounts/client-user-roles",
            level: 1
          }
        ]
      }
    ];
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
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, ClientContainerComponent_Conditional_1_Template, 9, 7, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-dynamic-tab-panel", 4);
      \u0275\u0275listener("tabChange", function ClientContainerComponent_Template_app_dynamic_tab_panel_tabChange_3_listener() {
        return ctx.onTabChange();
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
  }, dependencies: [DynamicTabPanelComponent, RouterOutlet, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-container", imports: [DynamicTabPanelComponent, RouterOutlet, TranslatePipe], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: `<div class="w-full h-full flex flex-col">
  <!-- QA Test Mode Indicator -->
  @if (qaTools.testMode()) {
    <div
      class="px-4 py-2 bg-orange-100 border-l-4 border-orange-500 text-orange-800 text-sm"
    >
      <i class="pi pi-info-circle mr-2"></i>
      <strong>{{ 'LAYOUT.MAIN.QA_BANNER.MODE_LABEL' | translate }}</strong>
      {{ 'LAYOUT.MAIN.QA_BANNER.SIMULATING_FOR' | translate }}
      <strong>{{ qaTools.activeProfileName() }}</strong>
    </div>
  }

  <div class="flex-1 overflow-hidden">
    <app-dynamic-tab-panel
      [tabs]="clientTabs()"
      (tabChange)="onTabChange()"
      styleClass="h-full overflow-hidden"
    ></app-dynamic-tab-panel>
  </div>
</div>

<ng-template #main>
  <router-outlet />
</ng-template>
` }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientContainerComponent, { className: "ClientContainerComponent", filePath: "src/app/features/administration/components/clients/client-container/client-container.component.ts", lineNumber: 45 });
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
        loadChildren: () => import("./chunk-NGOTMTDM.js").then((m) => m.ADMIN_CLIENT_DETAILS_ROUTES),
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
      ...createGuardedTreeRoute("assets", clientAssetsGuard, AdminTreetableContainerComponent, CLIENT_ADMIN_FEATURES["assets"].permissions, void 0, "tree/:type"),
      ...createGuardedGridRoute("geofences", clientGeofencesGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["geofences"].permissions, void 0, "grid/:type", "client"),
      ...createGuardedGridRoute("alerts", clientAlertsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["alerts"].permissions, void 0, "grid/:type", "client"),
      ...createGuardedGridRoute("contacts", clientContactsGuard, AdminGridContainerComponent, CLIENT_ADMIN_FEATURES["client-contacts"].permissions, void 0, "grid/:type", "client"),
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
//# sourceMappingURL=chunk-7IH5KIEQ.js.map
