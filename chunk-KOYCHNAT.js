import {
  distributorsGuard
} from "./chunk-ITH6IRYN.js";
import {
  AdminGridContainerComponent,
  DynamicTabPanelComponent
} from "./chunk-RUCFX62B.js";
import {
  EntityDetailsService
} from "./chunk-MH2M3J7J.js";
import "./chunk-OOCGHEYU.js";
import "./chunk-CV6FJBJM.js";
import "./chunk-EFTPIZ54.js";
import "./chunk-OO24IG5B.js";
import "./chunk-ALM3S5EO.js";
import "./chunk-4AHTG5DU.js";
import "./chunk-SAEMIRMA.js";
import "./chunk-YOXWVJE4.js";
import "./chunk-BYWSS2AA.js";
import "./chunk-QSIA2WMK.js";
import {
  takeUntilDestroyed
} from "./chunk-WYEF5MWL.js";
import "./chunk-ZQA7ZUAC.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-LHZDDGBF.js";
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
  }, dependencies: [DynamicTabPanelComponent, RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminContainerComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin-container", imports: [DynamicTabPanelComponent, RouterModule], template: '<div class="w-full h-full">\n  <app-dynamic-tab-panel\n    [tabs]="superAdminTabs"\n    (tabChange)="onTabChange()"\n    styleClass="h-full overflow-hidden"\n  ></app-dynamic-tab-panel>\n</div>\n\n<ng-template #main>\n  <router-outlet />\n</ng-template>\n' }]
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

// src/app/features/administration/components/super-admin/super-admin-routing.module.ts
var routes = [
  {
    path: "",
    component: SuperAdminContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "distributors",
        pathMatch: "full"
      },
      ...createGuardedGridRoute("distributors", distributorsGuard, AdminGridContainerComponent)
    ]
  }
];
var SuperAdminRoutingModule = class _SuperAdminRoutingModule {
  static \u0275fac = function SuperAdminRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAdminRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/administration/components/super-admin/super-admin.module.ts
var SuperAdminModule = class _SuperAdminModule {
  static \u0275fac = function SuperAdminModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SuperAdminModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, SuperAdminRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, SuperAdminRoutingModule]
    }]
  }], null, null);
})();
export {
  SuperAdminModule
};
//# sourceMappingURL=chunk-KOYCHNAT.js.map
