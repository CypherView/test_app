import {
  AdaptiveLayoutComponent
} from "./chunk-CPW3TKGN.js";
import {
  ProfileComponent
} from "./chunk-2EO5ZUEA.js";
import {
  Tab,
  TabList,
  Tabs,
  TabsModule
} from "./chunk-FBOVFXQI.js";
import "./chunk-3DSVEJNU.js";
import "./chunk-635ZEAEL.js";
import "./chunk-YI7EYCSZ.js";
import "./chunk-MVTXFKPE.js";
import "./chunk-OCOAQW5O.js";
import {
  takeUntilDestroyed
} from "./chunk-6BAKXKUU.js";
import "./chunk-FF2633IW.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-KQ2LGU3N.js";
import "./chunk-AHBGYM7E.js";
import {
  CommonModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-UOAEKV2L.js";
import {
  Component,
  DestroyRef,
  NgModule,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-MBTADGF5.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/users/profile-container/profile-container.component.ts
var _c0 = () => ["./profile"];
var _c1 = (a0) => ({ content: a0, scrollable: true, minSize: 15 });
var _c2 = (a0) => ({ content: a0, scrollable: true, maxSize: 75 });
var _c3 = (a0, a1) => [a0, a1];
var _c4 = () => [25, 75];
var _c5 = () => [15, 0];
function ProfileContainerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet", 7);
  }
}
function ProfileContainerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet", 8);
  }
}
var ProfileContainerComponent = class _ProfileContainerComponent {
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  activeTab = signal("profile");
  constructor() {
    this.setupNavigationHandler();
  }
  setupNavigationHandler() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (event) => this.handleNavigation(event)
    });
  }
  handleNavigation(_event) {
    this.activeTab.set("profile");
  }
  static \u0275fac = function ProfileContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 11, vars: 19, consts: [["template1", ""], ["template2", ""], [1, "flex", "flex-col", "h-full"], [3, "scrollable", "value"], ["routerLinkActive", "p-tab-active", 3, "value", "routerLink"], [1, "flex-1", "overflow-hidden"], ["stateKey", "layout", 1, "h-full", 3, "panels", "panelSizes", "minSizes", "defaultLayout", "responsive"], ["name", "primary"], ["name", "detail"]], template: function ProfileContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "p-tabs", 3)(2, "p-tablist")(3, "p-tab", 4);
      \u0275\u0275text(4, " Profile ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 5)(6, "app-adaptive-layout", 6);
      \u0275\u0275template(7, ProfileContainerComponent_ng_template_7_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ProfileContainerComponent_ng_template_9_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const template1_r1 = \u0275\u0275reference(8);
      const template2_r2 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275property("scrollable", true)("value", ctx.activeTab());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "profile")("routerLink", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("panels", \u0275\u0275pureFunction2(14, _c3, \u0275\u0275pureFunction1(10, _c1, template1_r1), \u0275\u0275pureFunction1(12, _c2, template2_r2)))("panelSizes", \u0275\u0275pureFunction0(17, _c4))("minSizes", \u0275\u0275pureFunction0(18, _c5))("defaultLayout", "horizontal")("responsive", true);
    }
  }, dependencies: [AdaptiveLayoutComponent, TabsModule, Tabs, TabList, Tab, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]     .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n[_nghost-%COMP%]     .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     p-splitter {\n  height: 100%;\n}\n/*# sourceMappingURL=profile-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileContainerComponent, [{
    type: Component,
    args: [{ selector: "app-profile-container", imports: [AdaptiveLayoutComponent, TabsModule, RouterModule], template: `<div class="flex flex-col h-full">
  <p-tabs [scrollable]="true" [value]="activeTab()">
    <p-tablist>
      <p-tab
        [value]="'profile'"
        [routerLink]="['./profile']"
        routerLinkActive="p-tab-active"
      >
        Profile
      </p-tab>
    </p-tablist>
  </p-tabs>

  <div class="flex-1 overflow-hidden">
    <app-adaptive-layout
      [panels]="[
        {
          content: template1,
          scrollable: true,
          minSize: 15,
        },
        {
          content: template2,
          scrollable: true,
          maxSize: 75,
        },
      ]"
      [panelSizes]="[25, 75]"
      [minSizes]="[15, 0]"
      [defaultLayout]="'horizontal'"
      [responsive]="true"
      stateKey="layout"
      class="h-full"
    >
      <ng-template #template1>
        <router-outlet name="primary"></router-outlet>
      </ng-template>

      <ng-template #template2>
        <router-outlet name="detail"></router-outlet>
      </ng-template>
    </app-adaptive-layout>
  </div>
</div>
`, styles: ["/* src/app/features/users/profile-container/profile-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n:host ::ng-deep .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n:host ::ng-deep .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep p-splitter {\n  height: 100%;\n}\n/*# sourceMappingURL=profile-container.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileContainerComponent, { className: "ProfileContainerComponent", filePath: "src/app/features/users/profile-container/profile-container.component.ts", lineNumber: 16 });
})();

// src/app/features/users/users-routing.module.ts
var routes = [
  {
    path: "",
    component: ProfileContainerComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  }
];
var UsersRoutingModule = class _UsersRoutingModule {
  static \u0275fac = function UsersRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/users/users.module.ts
var UsersModule = class _UsersModule {
  static \u0275fac = function UsersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, UsersRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, UsersRoutingModule]
    }]
  }], null, null);
})();
export {
  UsersModule
};
//# sourceMappingURL=chunk-D6LPM25R.js.map
