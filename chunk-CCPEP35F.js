import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientsGuard,
  vendorAlertsGuard
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
  RouterModule,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  takeUntilDestroyed
} from "./chunk-ZVYXWUM3.js";
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
  ɵɵdefineComponent,
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

// src/app/features/administration/components/vendors/vendor-administration.config.ts
var VENDOR_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  clients: {
    label: "Clients",
    permissions: {
      or: ["client:list", "client:create"]
    }
  },
  alerts: {
    label: "Alerts"
  },
  providers: {
    label: "Providers"
  },
  "vendor-email-providers": {
    label: "Email Providers"
  },
  "vendor-sms-gateway-providers": {
    label: "SMS Gateways"
  },
  profiles: {
    label: "Profiles"
  },
  "vendor-company-groups": {
    label: "Company Groups"
  },
  "vendor-io-types": {
    label: "IO Types"
  },
  "vendor-device-config-profiles": {
    label: "Device Config Profiles"
  },
  "vendor-overspeed-profiles": {
    label: "Overspeed Profiles"
  },
  "vendor-road-profiles": {
    label: "Road Profiles"
  },
  "vendor-geo-lock-profiles": {
    label: "Geo Lock Profiles"
  },
  "vendor-custom-fields": {
    label: "Custom Fields"
  },
  "vendor-themes": {
    label: "Themes"
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "vendor:list-users",
        "vendor:users",
        "vendor:list-userroles",
        "vendor:userroles"
      ]
    }
  },
  "vendor-users": {
    label: "Users",
    permissions: {
      or: ["vendor:list-users", "vendor:users"]
    }
  },
  "vendor-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["vendor:list-userroles", "vendor:userroles"]
    }
  }
};

// src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts
var _c0 = ["main"];
function VendorContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var VendorContainerComponent = class _VendorContainerComponent {
  mainTemplate;
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
  }, decls: 4, vars: 1, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"]], template: function VendorContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-dynamic-tab-panel", 2);
      \u0275\u0275listener("tabChange", function VendorContainerComponent_Template_app_dynamic_tab_panel_tabChange_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(2, VendorContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.vendorTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-container", imports: [DynamicTabPanelComponent, RouterModule], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="vendorTabs()"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorContainerComponent, { className: "VendorContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts", lineNumber: 45 });
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
            redirectTo: "vendor-users",
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
        path: "details",
        loadChildren: () => import("./chunk-UN4LSMGX.js").then((m) => m.ADMIN_VENDOR_DETAILS_ROUTES),
        data: { nestedContentScrollable: true }
      },
      {
        path: "hardware",
        children: [
          {
            path: "",
            redirectTo: "vendor-hardware-devices",
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
            redirectTo: "vendor-cost-centres",
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
            redirectTo: "tree/vendor-company-groups",
            pathMatch: "full"
          },
          {
            path: "tree",
            children: [
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
            path: "grid",
            children: [
              {
                path: ":type",
                component: AdminGridContainerComponent
              },
              {
                path: ":type/:entityType/:entityId",
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
            redirectTo: "vendor-email-providers",
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
      ...createGuardedGridRoute("clients", clientsGuard, AdminGridContainerComponent),
      ...createGuardedGridRoute("alerts", vendorAlertsGuard, AdminGridContainerComponent)
    ]
  }
];
export {
  ADMIN_VENDORS_ROUTES
};
//# sourceMappingURL=chunk-CCPEP35F.js.map
