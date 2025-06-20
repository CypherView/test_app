import {
  AdminGridContainerComponent,
  DynamicTabPanelComponent
} from "./chunk-6FPMBL27.js";
import "./chunk-34W5LHVL.js";
import {
  AdminTreetableContainerComponent,
  EntityDetailsService
} from "./chunk-RTSUVA3W.js";
import "./chunk-23SE3HJQ.js";
import "./chunk-LZ2K3GIV.js";
import "./chunk-WD6S76EG.js";
import "./chunk-5SSZS4AX.js";
import "./chunk-3HRWOU6T.js";
import "./chunk-SESMNWMW.js";
import {
  takeUntilDestroyed
} from "./chunk-3FX7N3RV.js";
import "./chunk-UKC35VDE.js";
import "./chunk-FXF5ECNT.js";
import "./chunk-VQ5BPOJV.js";
import {
  isDefined
} from "./chunk-3LDCLVZS.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-5T4X2AFY.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DestroyRef,
  filter,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
} from "./chunk-CAVC4NS5.js";
import "./chunk-R327OCYJ.js";

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
          route: "profiles/vendor-company-groups",
          level: 1
        },
        {
          id: "vendor-io-types",
          label: "IO Types",
          route: "profiles/vendor-io-types",
          level: 1
        },
        {
          id: "vendor-device-config-profiles",
          label: "Device Config Profiles",
          route: "profiles/vendor-device-config-profiles",
          level: 1
        },
        {
          id: "vendor-overspeed-profiles",
          label: "Overspeed Profiles",
          route: "profiles/vendor-overspeed-profiles",
          level: 1
        },
        {
          id: "vendor-road-profiles",
          label: "Road Profiles",
          route: "profiles/vendor-road-profiles",
          level: 1
        },
        {
          id: "vendor-custom-fields",
          label: "Custom Fields",
          route: "profiles/vendor-custom-fields",
          level: 1
        },
        {
          id: "vendor-themes",
          label: "Themes",
          route: "profiles/vendor-themes",
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
  detailsService = inject(EntityDetailsService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  isContentScrollable = signal(false);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorContainerComponent, { className: "VendorContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-container/vendor-container.component.ts", lineNumber: 33 });
})();

// src/app/features/administration/components/vendors/vendor-clients/vendor-clients.component.ts
var VendorClientsComponent = class _VendorClientsComponent {
  static \u0275fac = function VendorClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorClientsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorClientsComponent, selectors: [["app-vendor-clients"]], decls: 0, vars: 0, template: function VendorClientsComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorClientsComponent, { className: "VendorClientsComponent", filePath: "src/app/features/administration/components/vendors/vendor-clients/vendor-clients.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/vendors/vendors-routing.module.ts
var routes = [
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
        loadChildren: () => import("./chunk-HBLCZ3MZ.js").then((m) => m.VendorDetailsRoutingModule),
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
            redirectTo: "vendor-company-groups",
            pathMatch: "full"
          },
          {
            path: "vendor-company-groups",
            component: AdminTreetableContainerComponent,
            data: { type: "vendor-company-groups" }
          },
          {
            path: "vendor-company-groups/:entityType/:entityId",
            component: AdminTreetableContainerComponent,
            data: { type: "vendor-company-groups" }
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
      {
        path: "clients",
        component: VendorClientsComponent
      }
    ]
  }
];
var VendorsRoutingModule = class _VendorsRoutingModule {
  static \u0275fac = function VendorsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/administration/components/vendors/vendors.module.ts
var VendorsModule = class _VendorsModule {
  static \u0275fac = function VendorsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, VendorsRoutingModule] });
};
export {
  VendorsModule
};
//# sourceMappingURL=chunk-IP5USTWV.js.map
