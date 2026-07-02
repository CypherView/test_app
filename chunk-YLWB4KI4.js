import {
  createContextSmartRedirectGuard
} from "./chunk-M7P56HZM.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  vendorsGuard
} from "./chunk-KE5TEEAF.js";
import "./chunk-5OOVMZVU.js";
import {
  DynamicTabPanelComponent
} from "./chunk-7JWRENXR.js";
import {
  EntityDetailsService
} from "./chunk-LDVJDVCG.js";
import "./chunk-FH3JQHJV.js";
import {
  DISTRIBUTOR_ADMIN_FEATURES
} from "./chunk-7KJVQR6U.js";
import {
  QAToolsService
} from "./chunk-KD6EYDZR.js";
import "./chunk-OIUQOR6R.js";
import "./chunk-VREFFKOZ.js";
import "./chunk-X73C7WIK.js";
import "./chunk-ZEYGFEDC.js";
import "./chunk-M7375AD4.js";
import "./chunk-UXJ7JXVI.js";
import {
  LanguageService
} from "./chunk-ADVRM2GR.js";
import "./chunk-AMQDE3BA.js";
import "./chunk-6DI5YQY3.js";
import "./chunk-327XSQRT.js";
import "./chunk-4P7XG7NB.js";
import "./chunk-PCOVQ3Z4.js";
import "./chunk-2HQB3DQR.js";
import "./chunk-UE6A3OPG.js";
import "./chunk-NNBC6OHR.js";
import "./chunk-ZF5QBRH4.js";
import "./chunk-WQJQJS3G.js";
import "./chunk-N7CFVCRV.js";
import "./chunk-WZT5XRCN.js";
import "./chunk-TQTAL3D3.js";
import "./chunk-LSGFQNNG.js";
import "./chunk-A45ENGP2.js";
import "./chunk-GOGTD2CJ.js";
import "./chunk-M7S2S5LG.js";
import "./chunk-IOKQPKSK.js";
import "./chunk-VN4TXOP4.js";
import "./chunk-POWMBANG.js";
import "./chunk-6VB5OA4H.js";
import "./chunk-UURX5BWG.js";
import "./chunk-IVSMVSJH.js";
import "./chunk-EGJXNLZU.js";
import "./chunk-HZONOUZI.js";
import "./chunk-UGO3PNLI.js";
import "./chunk-E46PJIXV.js";
import "./chunk-ML5T5ZEG.js";
import "./chunk-LVMLZ3VX.js";
import "./chunk-CUF5ZGX4.js";
import "./chunk-Y76T4QP2.js";
import "./chunk-ELMGQUTA.js";
import "./chunk-4VRJFGPA.js";
import "./chunk-NTFNF324.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-AHALUXAA.js";
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
} from "./chunk-2Y2RLXE3.js";
import "./chunk-M4PBGCJ5.js";
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
} from "./chunk-VOGNWKLY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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
            route: "profiles/distributor-company-groups",
            level: 1
          },
          {
            id: "distributor-map-sets",
            label: this.translate.instant("ADMIN.ENTITIES.MAP_SETS"),
            route: "profiles/distributor-map-sets",
            level: 1
          },
          {
            id: "distributor-road-profiles",
            label: this.translate.instant("ADMIN.CLIENTS.TABS.ROAD_PROFILES"),
            route: "profiles/distributor-road-profiles",
            level: 1
          },
          {
            id: "distributor-themes",
            label: this.translate.instant("ADMIN.ENTITIES.THEMES"),
            route: "profiles/distributor-themes",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorContainerComponent, { className: "DistributorContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts", lineNumber: 49 });
})();

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
        loadChildren: () => import("./chunk-SC3WOVG2.js").then((m) => m.ADMIN_DISTRIBUTOR_DETAILS_ROUTES),
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
                "distributor-themes"
              ], "distributor", DISTRIBUTOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: "distributor-company-groups",
            component: AdminTreetableContainerComponent,
            data: { type: "distributor-company-groups" }
          },
          {
            path: "distributor-company-groups/:entityType/:entityId",
            component: AdminTreetableContainerComponent,
            data: { type: "distributor-company-groups" }
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
//# sourceMappingURL=chunk-YLWB4KI4.js.map
