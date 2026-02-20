import {
  createContextSmartRedirectGuard
} from "./chunk-C4XKOU2U.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  vendorsGuard
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
  DISTRIBUTOR_ADMIN_FEATURES
} from "./chunk-4HWGHAKY.js";
import {
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
  PermissionService,
  Router,
  RouterModule,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  ViewChild,
  computed,
  effect,
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
function DistributorContainerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var DistributorContainerComponent = class _DistributorContainerComponent {
  mainTemplate;
  qaTools = inject(QAToolsService);
  baseDistributorTabs = [
    { id: "details", label: "Details", route: "details", level: 0 },
    { id: "vendors", label: "Vendors", route: "vendors", level: 0 },
    {
      id: "providers",
      label: "Providers",
      level: 0,
      children: [
        {
          id: "distributor-device-providers",
          label: "Device Providers",
          route: "providers/distributor-device-providers",
          level: 1
        },
        {
          id: "distributor-email-providers",
          label: "Email Providers",
          route: "providers/distributor-email-providers",
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
          id: "distributor-company-groups",
          label: "Vendor Groups",
          route: "profiles/distributor-company-groups",
          level: 1
        },
        {
          id: "distributor-road-profiles",
          label: "Road Profiles",
          route: "profiles/distributor-road-profiles",
          level: 1
        },
        {
          id: "distributor-themes",
          label: "Themes",
          route: "profiles/distributor-themes",
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
          id: "distributor-users",
          label: "Users",
          route: "accounts/distributor-users",
          level: 1
        },
        {
          id: "distributor-user-roles",
          label: "User Roles",
          route: "accounts/distributor-user-roles",
          level: 1
        }
      ]
    }
  ];
  distributorTabs = computed(() => {
    return this.filterTabsByPermissions(this.baseDistributorTabs);
  }, ...ngDevMode ? [{ debugName: "distributorTabs" }] : []);
  detailsService = inject(EntityDetailsService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  permissionService = inject(PermissionService);
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : []);
  // Signal to control styling
  constructor() {
    effect(() => {
      this.qaTools.activePersona();
    });
  }
  get contentScrollableActive() {
    return !this.isContentScrollable();
  }
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.baseDistributorTabs, this.mainTemplate);
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
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, DistributorContainerComponent_Conditional_1_Template, 7, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-dynamic-tab-panel", 4);
      \u0275\u0275listener("tabChange", function DistributorContainerComponent_Template_app_dynamic_tab_panel_tabChange_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
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
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-container", imports: [DynamicTabPanelComponent, RouterModule], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full flex flex-col">\n  <!-- QA Test Mode Indicator -->\n  @if (qaTools.testMode()) {\n    <div\n      class="px-4 py-2 bg-orange-100 border-l-4 border-orange-500 text-orange-800 text-sm"\n    >\n      <i class="pi pi-info-circle mr-2"></i>\n      <strong>QA Test Mode:</strong> Currently simulating permissions for\n      <strong>{{ qaTools.activeProfileName() }}</strong>\n    </div>\n  }\n\n  <div class="flex-1 overflow-hidden">\n    <app-dynamic-tab-panel\n      [tabs]="distributorTabs()"\n      (tabChange)="onTabChange()"\n      styleClass="h-full overflow-hidden"\n    ></app-dynamic-tab-panel>\n  </div>\n</div>\n\n<ng-template #main>\n  <router-outlet></router-outlet>\n</ng-template>\n' }]
  }], () => [], { mainTemplate: [{
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
        loadChildren: () => import("./chunk-XM2QEB35.js").then((m) => m.ADMIN_DISTRIBUTOR_DETAILS_ROUTES),
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
//# sourceMappingURL=chunk-73UEUNAP.js.map
