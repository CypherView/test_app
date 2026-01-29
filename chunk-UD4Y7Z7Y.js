import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  vendorsGuard
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

// src/app/features/administration/components/distributors/distributor-administration.config.ts
var DISTRIBUTOR_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  vendors: {
    label: "Vendors",
    permissions: {
      or: ["vendor:list", "vendor:create"]
    }
  },
  providers: {
    label: "Providers"
  },
  "distributor-device-providers": {
    label: "Device Providers"
  },
  "distributor-email-providers": {
    label: "Email Providers"
  },
  profiles: {
    label: "Profiles"
  },
  "distributor-company-groups": {
    label: "Vendor Groups"
  },
  "distributor-road-profiles": {
    label: "Road Profiles"
  },
  "distributor-themes": {
    label: "Themes"
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "distributor:list-users",
        "distributor:users",
        "distributor:list-userroles",
        "distributor:userroles"
      ]
    }
  },
  "distributor-users": {
    label: "Users",
    permissions: {
      or: ["distributor:list-users", "distributor:users"]
    }
  },
  "distributor-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["distributor:list-userroles", "distributor:userroles"]
    }
  }
};

// src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts
var _c0 = ["main"];
function DistributorContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var DistributorContainerComponent = class _DistributorContainerComponent {
  mainTemplate;
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
  }, decls: 4, vars: 1, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"]], template: function DistributorContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-dynamic-tab-panel", 2);
      \u0275\u0275listener("tabChange", function DistributorContainerComponent_Template_app_dynamic_tab_panel_tabChange_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(2, DistributorContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.distributorTabs());
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-container", imports: [DynamicTabPanelComponent, RouterModule], host: {
      class: "!flex !flex-col !h-full !w-full !overflow-hidden"
    }, template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="distributorTabs()"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet></router-outlet>\n</ng-template>\n' }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorContainerComponent, { className: "DistributorContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts", lineNumber: 47 });
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
        loadChildren: () => import("./chunk-HQKB6LCX.js").then((m) => m.ADMIN_DISTRIBUTOR_DETAILS_ROUTES),
        data: { nestedContentScrollable: true }
      },
      {
        path: "providers",
        children: [
          {
            path: "",
            redirectTo: "distributor-device-providers",
            pathMatch: "full"
          },
          {
            path: ":type",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "profiles",
        children: [
          {
            path: "",
            redirectTo: "distributor-company-groups",
            pathMatch: "full"
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
            component: AdminGridContainerComponent
          },
          {
            path: ":type/:entityType/:entityId",
            component: AdminGridContainerComponent
          }
        ]
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            redirectTo: "distributor-users",
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
      ...createGuardedGridRoute("vendors", vendorsGuard, AdminGridContainerComponent)
    ]
  }
];
export {
  ADMIN_DISTRIBUTOR_ROUTES
};
//# sourceMappingURL=chunk-UD4Y7Z7Y.js.map
