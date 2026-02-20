import {
  createContextSmartRedirectGuard
} from "./chunk-C4XKOU2U.js";
import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientsGuard,
  vendorAlertsGuard
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
  VENDOR_ADMIN_FEATURES
} from "./chunk-2KKFLGPT.js";
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

// src/app/features/administration/guards/vendor-type-permission.guard.ts
var vendorTypePermissionGuard = async (route) => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);
  const type = route.paramMap.get("type");
  if (isNullOrUndefined(type)) {
    return true;
  }
  if (!(type in VENDOR_ADMIN_FEATURES)) {
    return true;
  }
  const featureConfig = VENDOR_ADMIN_FEATURES[type];
  const permissions = "permissions" in featureConfig ? featureConfig.permissions : void 0;
  if (!permissionService.canAccess(permissions, "vendor")) {
    await router.navigate(["/unauthorized"], {
      queryParams: {
        requiredPermission: JSON.stringify(permissions ?? "no_permission")
      }
    });
    return false;
  }
  return true;
};

// src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts
var _c0 = ["main"];
function VendorContainerComponent_Conditional_1_Template(rf, ctx) {
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
function VendorContainerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var VendorContainerComponent = class _VendorContainerComponent {
  mainTemplate;
  qaTools = inject(QAToolsService);
  baseVendorTabs = [
    { id: "details", label: "Details", route: "details", level: 0 },
    { id: "clients", label: "Clients", route: "clients", level: 0 },
    { id: "alerts", label: "Alerts", route: "alerts", level: 0 },
    {
      id: "providers",
      label: "Providers",
      level: 0,
      children: [
        {
          id: "vendor-email-providers",
          label: "Email Providers",
          route: "providers/vendor-email-providers",
          level: 1
        },
        {
          id: "vendor-sms-gateway-providers",
          label: "SMS Gateways",
          route: "providers/vendor-sms-gateway-providers",
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
          id: "vendor-company-groups",
          label: "Company Groups",
          route: "profiles/tree/vendor-company-groups",
          level: 1
        },
        {
          id: "vendor-io-types",
          label: "IO Types",
          route: "profiles/grid/vendor-io-types",
          level: 1
        },
        {
          id: "vendor-device-config-profiles",
          label: "Device Config Profiles",
          route: "profiles/grid/vendor-device-config-profiles",
          level: 1
        },
        {
          id: "vendor-overspeed-profiles",
          label: "Overspeed Profiles",
          route: "profiles/grid/vendor-overspeed-profiles",
          level: 1
        },
        {
          id: "vendor-road-profiles",
          label: "Road Profiles",
          route: "profiles/grid/vendor-road-profiles",
          level: 1
        },
        {
          id: "vendor-geo-lock-profiles",
          label: "Geo Lock Profiles",
          route: "profiles/grid/vendor-geo-lock-profiles",
          level: 1
        },
        {
          id: "vendor-custom-fields",
          label: "Custom Fields",
          route: "profiles/grid/vendor-custom-fields",
          level: 1
        },
        {
          id: "vendor-themes",
          label: "Themes",
          route: "profiles/grid/vendor-themes",
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
          id: "vendor-users",
          label: "Users",
          route: "accounts/vendor-users",
          level: 1
        },
        {
          id: "vendor-user-roles",
          label: "User Roles",
          route: "accounts/vendor-user-roles",
          level: 1
        }
      ]
    }
  ];
  vendorTabs = computed(() => {
    return this.filterTabsByPermissions(this.baseVendorTabs);
  }, ...ngDevMode ? [{ debugName: "vendorTabs" }] : []);
  detailsService = inject(EntityDetailsService);
  cdr = inject(ChangeDetectorRef);
  permissionService = inject(PermissionService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
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
    this.applyTemplateToTabs(this.baseVendorTabs, this.mainTemplate);
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
      const config = VENDOR_ADMIN_FEATURES[tab.id];
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
  static \u0275fac = function VendorContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorContainerComponent, selectors: [["app-vendor-container"]], viewQuery: function VendorContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostAttrs: [1, "!flex", "!flex-col", "!h-full", "!w-full", "!overflow-hidden"], hostVars: 2, hostBindings: function VendorContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 6, vars: 2, consts: [["main", ""], [1, "w-full", "h-full", "flex", "flex-col"], [1, "px-4", "py-2", "bg-orange-100", "border-l-4", "border-orange-500", "text-orange-800", "text-sm"], [1, "flex-1", "overflow-hidden"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"], [1, "pi", "pi-info-circle", "mr-2"]], template: function VendorContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, VendorContainerComponent_Conditional_1_Template, 7, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "app-dynamic-tab-panel", 4);
      \u0275\u0275listener("tabChange", function VendorContainerComponent_Template_app_dynamic_tab_panel_tabChange_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(4, VendorContainerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.qaTools.testMode() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.vendorTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-container", imports: [DynamicTabPanelComponent, RouterModule], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full flex flex-col">\n  <!-- QA Test Mode Indicator -->\n  @if (qaTools.testMode()) {\n    <div\n      class="px-4 py-2 bg-orange-100 border-l-4 border-orange-500 text-orange-800 text-sm"\n    >\n      <i class="pi pi-info-circle mr-2"></i>\n      <strong>QA Test Mode:</strong> Currently simulating permissions for\n      <strong>{{ qaTools.activeProfileName() }}</strong>\n    </div>\n  }\n\n  <div class="flex-1 overflow-hidden">\n    <app-dynamic-tab-panel\n      [tabs]="vendorTabs()"\n      (tabChange)="onTabChange()"\n      styleClass="h-full overflow-hidden"\n    ></app-dynamic-tab-panel>\n  </div>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
  }], () => [], { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorContainerComponent, { className: "VendorContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts", lineNumber: 47 });
})();

// src/app/features/administration/components/vendors/vendors.routes.ts
var ADMIN_VENDORS_ROUTES = [
  {
    path: "",
    component: VendorContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("vendor", "accounts", ["vendor-users", "vendor-user-roles"], "vendor", VENDOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [vendorTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [vendorTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "details",
        loadChildren: () => import("./chunk-N4QO4P3A.js").then((m) => m.ADMIN_VENDOR_DETAILS_ROUTES),
        data: { nestedContentScrollable: true }
      },
      {
        path: "hardware",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("vendor", "hardware", ["vendor-hardware-devices"], "vendor", VENDOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [vendorTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [vendorTypePermissionGuard],
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
              createContextSmartRedirectGuard("vendor", "organization", ["vendor-cost-centres"], "vendor", VENDOR_ADMIN_FEATURES)
            ],
            component: AdminTreetableContainerComponent
          },
          {
            path: ":type",
            canActivate: [vendorTypePermissionGuard],
            component: AdminTreetableContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [vendorTypePermissionGuard],
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
              createContextSmartRedirectGuard("vendor", "profiles", [
                "vendor-company-groups",
                "vendor-io-types",
                "vendor-device-config-profiles",
                "vendor-overspeed-profiles",
                "vendor-road-profiles",
                "vendor-geo-lock-profiles",
                "vendor-custom-fields"
              ], "vendor", VENDOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: "tree",
            children: [
              {
                path: ":type",
                canActivate: [vendorTypePermissionGuard],
                component: AdminTreetableContainerComponent
              },
              {
                path: ":type/:entityType/:entityId",
                canActivate: [vendorTypePermissionGuard],
                component: AdminTreetableContainerComponent
              }
            ]
          },
          {
            path: "grid",
            children: [
              {
                path: ":type",
                canActivate: [vendorTypePermissionGuard],
                component: AdminGridContainerComponent
              },
              {
                path: ":type/:entityType/:entityId",
                canActivate: [vendorTypePermissionGuard],
                component: AdminGridContainerComponent
              }
            ]
          }
        ]
      },
      {
        path: "providers",
        children: [
          {
            path: "",
            canActivate: [
              createContextSmartRedirectGuard("vendor", "providers", ["vendor-email-providers", "vendor-sms-gateway-providers"], "vendor", VENDOR_ADMIN_FEATURES)
            ],
            component: AdminGridContainerComponent
          },
          {
            path: ":type",
            canActivate: [vendorTypePermissionGuard],
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            canActivate: [vendorTypePermissionGuard],
            component: AdminGridContainerComponent
          }
        ]
      },
      ...createGuardedGridRoute("clients", clientsGuard, AdminGridContainerComponent, VENDOR_ADMIN_FEATURES["clients"].permissions, void 0, "grid/:type", "vendor"),
      ...createGuardedGridRoute("alerts", vendorAlertsGuard, AdminGridContainerComponent, void 0, void 0, "grid/:type", "vendor")
    ]
  }
];
export {
  ADMIN_VENDORS_ROUTES
};
//# sourceMappingURL=chunk-FBX44OCY.js.map
