import {
  AdminTreetableContainerComponent
} from "./chunk-AONHXEUF.js";
import {
  AdminGridContainerComponent,
  DynamicTabPanelComponent,
  clientsGuard
} from "./chunk-Q4DVZVCY.js";
import {
  EntityDetailsService
} from "./chunk-QE7ML3RV.js";
import "./chunk-HHYF3P54.js";
import "./chunk-5CU32GGO.js";
import "./chunk-UMFMGCF6.js";
import "./chunk-UHEGMWV5.js";
import "./chunk-FUXTESB7.js";
import "./chunk-5QFOUDM4.js";
import "./chunk-XM6S3HXC.js";
import "./chunk-YOXWVJE4.js";
import "./chunk-YESEXYFI.js";
import "./chunk-QSIA2WMK.js";
import {
  takeUntilDestroyed
} from "./chunk-QYHQ64RQ.js";
import "./chunk-ZQA7ZUAC.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-GTVUGL7K.js";
import {
  createGuardedGridRoute,
  isDefined
} from "./chunk-2QFPVW6Y.js";
import {
  ActivatedRoute,
  CommonModule,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-OLJEO5KJ.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  NgModule,
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
} from "./chunk-XEZOAFBV.js";
import "./chunk-KWSTWQNB.js";

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
        loadChildren: () => import("./chunk-GE2WC6F7.js").then((m) => m.VendorDetailsRoutingModule),
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
      ...createGuardedGridRoute("clients", clientsGuard, AdminGridContainerComponent)
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
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/administration/components/vendors/vendors.module.ts
var VendorsModule = class _VendorsModule {
  static \u0275fac = function VendorsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, VendorsRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, VendorsRoutingModule]
    }]
  }], null, null);
})();
export {
  VendorsModule
};
//# sourceMappingURL=chunk-MWWGFRJ7.js.map
