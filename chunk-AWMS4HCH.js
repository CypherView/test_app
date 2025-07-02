import {
  vendorsGuard
} from "./chunk-DHPBP4NV.js";
import {
  AdminGridContainerComponent,
  DynamicTabPanelComponent
} from "./chunk-HOZ76TDT.js";
import "./chunk-RSJNPG4W.js";
import {
  AdminTreetableContainerComponent,
  EntityDetailsService
} from "./chunk-RO54MWX7.js";
import "./chunk-GN3FXDGL.js";
import "./chunk-6FZM344Q.js";
import "./chunk-AMCG2OOV.js";
import "./chunk-XN62BSBY.js";
import "./chunk-CKVTU22R.js";
import "./chunk-VXJMY5F5.js";
import "./chunk-FMMG3DFF.js";
import "./chunk-TPGOEBB6.js";
import "./chunk-7BPDUI7R.js";
import {
  takeUntilDestroyed
} from "./chunk-SGSSZZCS.js";
import "./chunk-D3SIXD4M.js";
import "./chunk-ZUQKTIGR.js";
import "./chunk-PY5UAXBS.js";
import {
  createGuardedGridRoute,
  isDefined
} from "./chunk-DIN3XHWB.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-MWRHVJ6S.js";
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
} from "./chunk-UOQWYEAO.js";
import "./chunk-R327OCYJ.js";

// src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts
var _c0 = ["main"];
function DistributorContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var DistributorContainerComponent = class _DistributorContainerComponent {
  mainTemplate;
  distributorTabs = [
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
    this.applyTemplateToTabs(this.distributorTabs, this.mainTemplate);
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
  }, hostVars: 2, hostBindings: function DistributorContainerComponent_HostBindings(rf, ctx) {
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
      \u0275\u0275property("tabs", ctx.distributorTabs);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.content-scrollable-inactive[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=distributor-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorContainerComponent, { className: "DistributorContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-container/distributor-container.component.ts", lineNumber: 35 });
})();

// src/app/features/administration/components/distributors/distributors-routing.module.ts
var routes = [
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
        loadChildren: () => import("./chunk-YE4M5PEJ.js").then((m) => m.DistributorDetailsModule),
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
var DistributorsRoutingModule = class _DistributorsRoutingModule {
  static \u0275fac = function DistributorsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/administration/components/distributors/distributors.module.ts
var DistributorsModule = class _DistributorsModule {
  static \u0275fac = function DistributorsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DistributorsRoutingModule] });
};
export {
  DistributorsModule
};
//# sourceMappingURL=chunk-AWMS4HCH.js.map
