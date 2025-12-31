import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  clientsGuard
} from "./chunk-TDPFQRMK.js";
import "./chunk-EYEHUD5M.js";
import "./chunk-NK5JRJQ7.js";
import {
  DynamicTabPanelComponent
} from "./chunk-PUYT7KVT.js";
import {
  EntityDetailsService
} from "./chunk-YW47BEVL.js";
import "./chunk-6KP5VZII.js";
import "./chunk-SSYASRIT.js";
import "./chunk-5Q4BX7L6.js";
import "./chunk-5R2PPOXT.js";
import "./chunk-JRKTVKI5.js";
import "./chunk-27KEXIZN.js";
import "./chunk-72WRH4VP.js";
import "./chunk-AZ7FDMTF.js";
import "./chunk-RE6N4RRK.js";
import "./chunk-RVEVJ4H4.js";
import "./chunk-6H5D3IIP.js";
import "./chunk-7DPJ4Z2P.js";
import "./chunk-66FZO75L.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
  createGuardedGridRoute,
  isDefined,
  takeUntilDestroyed
} from "./chunk-DLCRS7EY.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
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
} from "./chunk-JFRH3J7S.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts
var _c0 = ["main"];
function VendorContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var VendorContainerComponent = class _VendorContainerComponent {
  mainTemplate;
  vendorTabs = [
    { id: "details", label: "Details", route: "details", level: 0 },
    { id: "clients", label: "Clients", route: "clients", level: 0 },
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
  detailsService = inject(EntityDetailsService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  isContentScrollable = signal(false, ...ngDevMode ? [{ debugName: "isContentScrollable" }] : []);
  // Signal to control styling
  get contentScrollableActive() {
    return !this.isContentScrollable();
  }
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.vendorTabs, this.mainTemplate);
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
  }, hostVars: 2, hostBindings: function VendorContainerComponent_HostBindings(rf, ctx) {
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
      \u0275\u0275property("tabs", ctx.vendorTabs);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.content-scrollable-inactive[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=vendor-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorContainerComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-container", imports: [DynamicTabPanelComponent, RouterModule], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="vendorTabs"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n', styles: ["/* src/app/features/administration/components/vendors/vendor-container/vendor-container.component.scss */\n:host {\n  display: block;\n}\n:host(.content-scrollable-inactive) {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=vendor-container.component.css.map */\n"] }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorContainerComponent, { className: "VendorContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts", lineNumber: 33 });
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
        loadChildren: () => import("./chunk-AYOJQQG6.js").then((m) => m.ADMIN_VENDOR_DETAILS_ROUTES),
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
      ...createGuardedGridRoute("clients", clientsGuard, AdminGridContainerComponent)
    ]
  }
];
export {
  ADMIN_VENDORS_ROUTES
};
//# sourceMappingURL=chunk-U4N4LASQ.js.map
