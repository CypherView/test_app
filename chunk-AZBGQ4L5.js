import {
  createContextSmartRedirectGuard
} from "./chunk-FWOFF2OM.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  vendorsGuard
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
  DISTRIBUTOR_ADMIN_FEATURES
} from "./chunk-7KJVQR6U.js";
import {
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
  PermissionService,
  Router,
  RouterModule,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  isNullOrUndefined,
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

// src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts
var _c0 = ["main"];
function DistributorContainerComponent_Conditional_1_Template(rf, ctx) {
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
function DistributorContainerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var DistributorContainerComponent = class _DistributorContainerComponent {
  mainTemplateSignal = signal(null, ...ngDevMode ? [{ debugName: "mainTemplateSignal" }] : (
    /* istanbul ignore next */
    []
  ));
  set mainTemplate(template) {
    this.mainTemplateSignal.set(template);
  }
  qaTools = inject(QAToolsService);
  translate = inject(TranslateService);
  languageService = inject(LanguageService);
  buildBaseTabs() {
    return [
      {
        id: "details",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.DETAILS"),
        route: "details",
        level: 0
      },
      {
        id: "vendors",
        label: this.translate.instant("ADMIN.ENTITIES.VENDORS"),
        route: "vendors",
        level: 0
      },
      {
        id: "providers",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.PROVIDERS"),
        level: 0,
        children: [
          {
            id: "distributor-device-providers",
            label: this.translate.instant("ADMIN.ENTITIES.DEVICE_PROVIDERS"),
            route: "providers/distributor-device-providers",
            level: 1
          },
          {
            id: "distributor-email-providers",
            label: this.translate.instant("ADMIN.ENTITIES.EMAIL_PROVIDERS"),
            route: "providers/distributor-email-providers",
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
            id: "distributor-company-groups",
            label: this.translate.instant("ADMIN.ENTITIES.VENDOR_GROUPS"),
            route: "profiles/tree/distributor-company-groups",
            level: 1
          },
          {
            id: "distributor-map-sets",
            label: this.translate.instant("ADMIN.ENTITIES.MAP_SETS"),
            route: "profiles/grid/distributor-map-sets",
            level: 1
          },
          {
            id: "distributor-road-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ROAD_PROFILES"),
            route: "profiles/grid/distributor-road-profiles",
            level: 1
          },
          {
            id: "distributor-themes",
            label: this.translate.instant("ADMIN.ENTITIES.THEMES"),
            route: "profiles/grid/distributor-themes",
            level: 1
          }
        ]
      },
      {
        id: "distributor-export-tasks",
        label: this.translate.instant("ADMIN.ENTITIES.EXPORT_TASKS"),
        route: "export-tasks",
        level: 0
      },
      {
        id: "accounts",
        label: this.translate.instant("ADMIN.CLIENTS.TABS.ACCOUNTS"),
        level: 0,
        children: [
          {
            id: "distributor-users",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.USERS"),
            route: "accounts/distributor-users",
            level: 1
          },
          {
            id: "distributor-user-roles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.USER_ROLES"),
            route: "accounts/distributor-user-roles",
            level: 1
          }
        ]
      }
    ];
  }
  distributorTabs = computed(() => {
    this.languageService.currentLanguage();
    this.qaTools.activePersona();
    const tabs = this.buildBaseTabs();
    const template = this.mainTemplateSignal();
    if (template) {
      this.applyTemplateToTabs(tabs, template);
    }
    return this.filterTabsByPermissions(tabs);
  }, ...ngDevMode ? [{ debugName: "distributorTabs" }] : (
    /* istanbul ignore next */
    []
  ));
  detailsService = inject(EntityDetailsService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  permissionService = inject(PermissionService);
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : (
    /* istanbul ignore next */
    []
  ));
  get contentScrollableActive() {
    return !this.isContentScrollable();
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
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => getScrollableState(this.activatedRoute)), takeUntilDestroyed(this.destroyRef)).subscribe((scrollableValue) => {
      if (this.isContentScrollable() !== scrollableValue) {
        this.isContentScrollable.set(scrollableValue);
        this.cdr.detectChanges();
      }
    });
  }
  filterTabsByPermissions(tabs) {
    return tabs.map((tab) => {
      const config = DISTRIBUTOR_ADMIN_FEATURES[tab.id];
      const hasPermission = this.permissionService.canAccess("permissions" in config ? config.permissions : void 0);
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
  static \u0275fac = function DistributorContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorContainerComponent, selectors: [["app-distributor-container"]], viewQuery: function DistributorContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostAttrs: [1, "!flex", "!flex-col", "!h-full", "!w-full", "!overflow-hidden"], hostVars: 2, hostBindings: function DistributorContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 6, vars: 2, consts: [["main", ""], [1, "w-full", "h-full", "flex", "flex-col"], [1, "px-4", "py-2", "bg-orange-100", "border-l-4", "border-orange-500", "text-orange-800", "text-sm"], [1, "flex-1", "overflow-hidden"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"], [1, "pi", "pi-info-circle", "mr-2"]], template: function DistributorContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, DistributorContainerComponent_Conditional_1_Template, 9, 7, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-dynamic-tab-panel", 4);
      \u0275\u0275listener("tabChange", function DistributorContainerComponent_Template_app_dynamic_tab_panel_tabChange_3_listener() {
        return ctx.onTabChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(4, DistributorContainerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.qaTools.testMode() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.distributorTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-container", imports: [DynamicTabPanelComponent, RouterModule, TranslatePipe], host: {
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
      [tabs]="distributorTabs()"
      (tabChange)="onTabChange()"
      styleClass="h-full overflow-hidden"
    ></app-dynamic-tab-panel>
  </div>
</div>

<ng-template #main>
  <router-outlet></router-outlet>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorContainerComponent, { className: "DistributorContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts", lineNumber: 48 });
})();

// src/app/features/administration/guards/distributor-type-permission.guard.ts
var distributorTypePermissionGuard = async (route) => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);
  const type = route.paramMap.get("type");
  if (isNullOrUndefined(type)) {
    return true;
  }
  if (!(type in DISTRIBUTOR_ADMIN_FEATURES)) {
    return true;
  }
  const featureConfig = DISTRIBUTOR_ADMIN_FEATURES[type];
  const permissions = "permissions" in featureConfig ? featureConfig.permissions : void 0;
  if (!permissionService.canAccess(permissions, "distributor")) {
    await router.navigate(["/unauthorized"], {
      queryParams: {
        requiredPermission: JSON.stringify(permissions ?? "no_permission")
      }
    });
    return false;
  }
  return true;
};

// src/app/features/administration/components/distributors/distributors.routes.ts
var ADMIN_DISTRIBUTOR_ROUTES = [
  {
    path: "",
    component: DistributorContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      },
      {
        path: "details",
        loadChildren: () => import("./chunk-HOLEYZVF.js").then((m) => m.ADMIN_DISTRIBUTOR_DETAILS_ROUTES),
        data: { nestedContentScrollable: true }
      },
      {
        path: "providers",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("distributor", "providers", ["distributor-device-providers", "distributor-email-providers"], "distributor", DISTRIBUTOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [distributorTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "profiles",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("distributor", "profiles", [
                "distributor-company-groups",
                "distributor-road-profiles",
                "distributor-themes",
                "distributor-map-sets"
              ], "distributor", DISTRIBUTOR_ADMIN_FEATURES, {
                "distributor-company-groups": "tree",
                "distributor-road-profiles": "grid",
                "distributor-themes": "grid",
                "distributor-map-sets": "grid"
              })
            ],
            component: AdminGridContainerComponent
          },
          {
            path: "tree",
            children: [
              {
                path: ":type",
                canActivate: [distributorTypePermissionGuard],
                component: AdminTreetableContainerComponent
              },
              {
                path: ":type/:entityType/:entityId",
                canActivate: [distributorTypePermissionGuard],
                component: AdminTreetableContainerComponent
              }
            ]
          },
          {
            path: "grid",
            children: [
              {
                path: ":type",
                canActivate: [distributorTypePermissionGuard],
                component: AdminGridContainerComponent
              },
              {
                path: ":type/:entityType/:entityId",
                canActivate: [distributorTypePermissionGuard],
                component: AdminGridContainerComponent
              }
            ]
          }
        ]
      },
      {
        path: "export-tasks",
        component: AdminGridContainerComponent,
        data: {
          gridType: "distributor-export-tasks",
          type: "distributor-export-tasks"
        }
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("distributor", "accounts", ["distributor-users", "distributor-user-roles"], "distributor", DISTRIBUTOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [distributorTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [distributorTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      ...createGuardedGridRoute("vendors", vendorsGuard, AdminGridContainerComponent, DISTRIBUTOR_ADMIN_FEATURES["vendors"].permissions, void 0, "grid/:type", "distributor")
    ]
  }
];
export {
  ADMIN_DISTRIBUTOR_ROUTES
};
//# sourceMappingURL=chunk-AZBGQ4L5.js.map
