import {
  DynamicTabPanelComponent
} from "./chunk-62QE5I2S.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-PAFIW2EK.js";
import "./chunk-YL4UBWIM.js";
import {
  AuthDataService,
  CommonModule,
  RouterModule,
  RouterOutlet
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-store-shell/app-store-shell.component.ts
var _c0 = ["contentTemplate"];
function AppStoreShellComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppStoreShellComponent = class _AppStoreShellComponent {
  contentTemplate;
  authDataService = inject(AuthDataService);
  cdr = inject(ChangeDetectorRef);
  isAdmin = computed(() => this.authDataService.isSuperAdmin(), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  tabs = computed(() => {
    const baseTabs = [
      {
        id: "explore",
        label: "Explore",
        icon: "pi pi-compass",
        route: "/app-store",
        level: 0
      },
      {
        id: "my-apps",
        label: "Installed",
        icon: "pi pi-box",
        route: "/app-store/my-apps",
        level: 0
      }
    ];
    if (this.isAdmin()) {
      baseTabs.push({
        id: "my-created-apps",
        label: "Developer",
        icon: "pi pi-code",
        route: "/app-store/my-created-apps",
        level: 0
      }, {
        id: "admin",
        label: "Admin Review",
        icon: "pi pi-shield",
        route: "/app-store/admin",
        level: 0
      });
    }
    return baseTabs;
  }, ...ngDevMode ? [{ debugName: "tabs" }] : []);
  ngAfterViewInit() {
    this.applyTemplateToTabs(this.tabs(), this.contentTemplate);
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
  static \u0275fac = function AppStoreShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppStoreShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppStoreShellComponent, selectors: [["app-store-shell"]], viewQuery: function AppStoreShellComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
    }
  }, decls: 11, vars: 2, consts: [["contentTemplate", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex-none", "border-b", "border-subtle", "px-6", "pt-6", "pb-0"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-3xl", "font-bold", "tracking-tight"], [1, "mt-1"], ["baseRoute", "/app-store", 3, "tabs", "contentScrollable"]], template: function AppStoreShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div")(4, "h1", 4);
      \u0275\u0275text(5, "More Apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Discover and manage custom integrations for your workspace. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(8, "app-dynamic-tab-panel", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, AppStoreShellComponent_ng_template_9_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("tabs", ctx.tabs())("contentScrollable", true);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, DynamicTabPanelComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app-store-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppStoreShellComponent, [{
    type: Component,
    args: [{ selector: "app-store-shell", imports: [CommonModule, RouterModule, DynamicTabPanelComponent], template: '<div class="flex flex-col h-full w-full overflow-hidden">\n  <!-- Header -->\n  <div class="flex-none border-b border-subtle px-6 pt-6 pb-0">\n    <div class="flex justify-between items-center mb-4">\n      <div>\n        <h1 class="text-3xl font-bold tracking-tight">More Apps</h1>\n        <p class="mt-1">\n          Discover and manage custom integrations for your workspace.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Tabs and Content -->\n  <app-dynamic-tab-panel\n    [tabs]="tabs()"\n    baseRoute="/app-store"\n    [contentScrollable]="true"\n  />\n</div>\n\n<!-- Content Template (used by dynamic-tab-panel) -->\n<ng-template #contentTemplate>\n  <router-outlet></router-outlet>\n</ng-template>\n', styles: ["/* src/app/features/app-store/pages/app-store-shell/app-store-shell.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=app-store-shell.component.css.map */\n"] }]
  }], null, { contentTemplate: [{
    type: ViewChild,
    args: ["contentTemplate"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppStoreShellComponent, { className: "AppStoreShellComponent", filePath: "src/app/features/app-store/pages/app-store-shell/app-store-shell.component.ts", lineNumber: 22 });
})();
export {
  AppStoreShellComponent
};
//# sourceMappingURL=chunk-PF5IDEK3.js.map
