import {
  AdminGridContainerComponent,
  AdminTreetableContainerComponent,
  distributorsGuard
} from "./chunk-BRSB42F7.js";
import "./chunk-EQPRVFLB.js";
import {
  DynamicTabPanelComponent
} from "./chunk-MVPAEHAE.js";
import {
  EntityDetailsService
} from "./chunk-OJLVC7LP.js";
import "./chunk-K5QRTBCZ.js";
import "./chunk-CG4KGVQA.js";
import "./chunk-WAE3XJJY.js";
import "./chunk-RQCVDBKJ.js";
import "./chunk-3UGKW4TX.js";
import "./chunk-NPDJYQ4U.js";
import "./chunk-NL5QWZ7H.js";
import "./chunk-K32L7TYM.js";
import "./chunk-OB7POHBA.js";
import "./chunk-SOFGEAAV.js";
import "./chunk-YCKIQFCZ.js";
import "./chunk-OLHY7NIS.js";
import "./chunk-Z7LK2P7R.js";
import "./chunk-H6GBOP4J.js";
import "./chunk-2AHRRRK2.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
  createGuardedGridRoute,
  getAllRouteParams,
  isDefined,
  takeUntilDestroyed
} from "./chunk-EKFQUTQC.js";
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
} from "./chunk-LS7G26BK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/administration/guards/device-types.guard.ts
var deviceTypesGuard = (route, _state) => {
  const router = inject(Router);
  const allParams = getAllRouteParams(route);
  const superAdminId = allParams["superAdminId"];
  if (isDefined(superAdminId)) {
    return router.createUrlTree([
      "admin",
      "super-admin",
      superAdminId,
      "device-types",
      "grid",
      "super-admin-device-types"
    ]);
  }
  return false;
};

// src/app/features/administration/components/system-analytics/system-analytics-container/system-analytics-container.component.ts
var SystemAnalyticsContainerComponent = class _SystemAnalyticsContainerComponent {
  static \u0275fac = function SystemAnalyticsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemAnalyticsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemAnalyticsContainerComponent, selectors: [["app-system-analytics-container"]], decls: 0, vars: 0, template: function SystemAnalyticsContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemAnalyticsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-system-analytics-container", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemAnalyticsContainerComponent, { className: "SystemAnalyticsContainerComponent", filePath: "src/app/features/administration/components/system-analytics/system-analytics-container/system-analytics-container.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/system-settings/system-settings-container/system-settings-container.component.ts
var SystemSettingsContainerComponent = class _SystemSettingsContainerComponent {
  static \u0275fac = function SystemSettingsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemSettingsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemSettingsContainerComponent, selectors: [["app-system-settings-container"]], decls: 0, vars: 0, template: function SystemSettingsContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemSettingsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-system-settings-container", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemSettingsContainerComponent, { className: "SystemSettingsContainerComponent", filePath: "src/app/features/administration/components/system-settings/system-settings-container/system-settings-container.component.ts", lineNumber: 9 });
})();

// src/app/features/administration/components/super-admin/super-admin-container/super-admin-container.component.ts
var _c0 = ["main"];
function SuperAdminContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var SuperAdminContainerComponent = class _SuperAdminContainerComponent {
  mainTemplate;
  superAdminTabs = [
    {
      id: "distributors",
      label: "Distributors",
      route: "distributors",
      level: 0
    },
    {
      id: "system-health",
      label: "System Health",
      route: "system-health",
      level: 0
    },
    {
      id: "analytics",
      label: "Analytics",
      route: "analytics",
      level: 0
    },
    {
      id: "settings",
      label: "Settings",
      route: "settings",
      level: 0
    },
    {
      id: "device-types",
      label: "Device Types",
      route: "device-types",
      level: 0
    },
    {
      id: "accounts",
      label: "Accounts",
      level: 0,
      children: [
        {
          id: "system-users",
          label: "Users",
          route: "accounts/system-users",
          level: 1
        },
        {
          id: "system-user-roles",
          label: "User Roles",
          route: "accounts/system-user-roles",
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
    this.applyTemplateToTabs(this.superAdminTabs, this.mainTemplate);
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
  static \u0275fac = function SuperAdminContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminContainerComponent, selectors: [["app-super-admin-container"]], viewQuery: function SuperAdminContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mainTemplate = _t.first);
    }
  }, hostVars: 2, hostBindings: function SuperAdminContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("content-scrollable-inactive", ctx.contentScrollableActive);
    }
  }, decls: 4, vars: 1, consts: [["main", ""], [1, "w-full", "h-full"], ["styleClass", "h-full overflow-hidden", 3, "tabChange", "tabs"]], template: function SuperAdminContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-dynamic-tab-panel", 2);
      \u0275\u0275listener("tabChange", function SuperAdminContainerComponent_Template_app_dynamic_tab_panel_tabChange_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTabChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(2, SuperAdminContainerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("tabs", ctx.superAdminTabs);
    }
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.content-scrollable-inactive[_nghost-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=super-admin-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminContainerComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin-container", imports: [DynamicTabPanelComponent, RouterModule], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="superAdminTabs"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n', styles: ["/* src/app/features/administration/components/super-admin/super-admin-container/super-admin-container.component.scss */\n:host {\n  display: block;\n}\n:host(.content-scrollable-inactive) {\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=super-admin-container.component.css.map */\n"] }]
  }], null, { mainTemplate: [{
    type: ViewChild,
    args: ["main"]
  }], contentScrollableActive: [{
    type: HostBinding,
    args: ["class.content-scrollable-inactive"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminContainerComponent, { className: "SuperAdminContainerComponent", filePath: "src/app/features/administration/components/super-admin/super-admin-container/super-admin-container.component.ts", lineNumber: 33 });
})();

// src/app/features/administration/components/super-admin/super-admin.routes.ts
var SUPER_ADMIN_ROUTES = [
  {
    path: "",
    component: SuperAdminContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "distributors",
        pathMatch: "full"
      },
      {
        path: "system-health",
        loadChildren: () => import("./chunk-OODMW74G.js").then((m) => m.ADMIN_SYSTEM_HEALTH_ROUTES)
      },
      {
        path: "analytics",
        component: SystemAnalyticsContainerComponent
      },
      {
        path: "settings",
        component: SystemSettingsContainerComponent
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            redirectTo: "system-users",
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
      ...createGuardedGridRoute("distributors", distributorsGuard, AdminGridContainerComponent),
      ...createGuardedGridRoute("device-types", deviceTypesGuard, AdminTreetableContainerComponent)
    ]
  }
];
export {
  SUPER_ADMIN_ROUTES
};
//# sourceMappingURL=chunk-TI4IM7MC.js.map
