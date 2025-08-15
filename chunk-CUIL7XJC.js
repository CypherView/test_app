import {
  AdaptiveLayoutComponent
} from "./chunk-7QFTHGCL.js";
import {
  ProfileComponent
} from "./chunk-TSZJZW7U.js";
import "./chunk-SANNBX2I.js";
import {
  Tab,
  TabList,
  Tabs,
  TabsModule
} from "./chunk-MF5GYEWK.js";
import "./chunk-YOXWVJE4.js";
import "./chunk-3VYGEX2A.js";
import {
  takeUntilDestroyed
} from "./chunk-WKXXKMU2.js";
import "./chunk-ZQA7ZUAC.js";
import "./chunk-G6AKSBPY.js";
import "./chunk-DC36JBNA.js";
import "./chunk-ZFFRSVXZ.js";
import {
  CommonModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-OLJEO5KJ.js";
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
} from "./chunk-XEZOAFBV.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/users/profile-container/profile-container.component.ts
var _c0 = () => ["./notifications"];
var _c1 = () => ["./profile"];
var _c2 = (a0) => ({ content: a0, scrollable: true, minSize: 15 });
var _c3 = (a0) => ({ content: a0, scrollable: true, maxSize: 75 });
var _c4 = (a0, a1) => [a0, a1];
var _c5 = () => [25, 75];
var _c6 = () => [15, 0];
function ProfileContainerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet", 7);
  }
}
function ProfileContainerComponent_ng_template_11_Template(rf, ctx) {
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
  handleNavigation(event) {
    const segments = event.url.split("/").filter(Boolean);
    const lastSegment = segments.pop();
    this.activeTab.set(lastSegment === "notifications" ? "notifications" : "profile");
  }
  static \u0275fac = function ProfileContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 13, vars: 22, consts: [["template1", ""], ["template2", ""], [1, "flex", "flex-col", "h-full"], [3, "scrollable", "value"], ["routerLinkActive", "p-tab-active", 3, "value", "routerLink"], [1, "flex-1", "overflow-hidden"], ["stateKey", "layout", 1, "h-full", 3, "panels", "panelSizes", "minSizes", "defaultLayout", "responsive"], ["name", "primary"], ["name", "detail"]], template: function ProfileContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "p-tabs", 3)(2, "p-tablist")(3, "p-tab", 4);
      \u0275\u0275text(4, " Notifications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-tab", 4);
      \u0275\u0275text(6, " Profile ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "app-adaptive-layout", 6);
      \u0275\u0275template(9, ProfileContainerComponent_ng_template_9_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, ProfileContainerComponent_ng_template_11_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const template1_r1 = \u0275\u0275reference(10);
      const template2_r2 = \u0275\u0275reference(12);
      \u0275\u0275advance();
      \u0275\u0275property("scrollable", true)("value", ctx.activeTab());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "notifications")("routerLink", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "profile")("routerLink", \u0275\u0275pureFunction0(12, _c1));
      \u0275\u0275advance(3);
      \u0275\u0275property("panels", \u0275\u0275pureFunction2(17, _c4, \u0275\u0275pureFunction1(13, _c2, template1_r1), \u0275\u0275pureFunction1(15, _c3, template2_r2)))("panelSizes", \u0275\u0275pureFunction0(20, _c5))("minSizes", \u0275\u0275pureFunction0(21, _c6))("defaultLayout", "horizontal")("responsive", true);
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
        [value]="'notifications'"
        [routerLink]="['./notifications']"
        routerLinkActive="p-tab-active"
      >
        Notifications
      </p-tab>
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

// src/app/features/users/notifications-list/notifications-list.component.ts
var NotificationsListComponent = class _NotificationsListComponent {
  static \u0275fac = function NotificationsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsListComponent, selectors: [["app-notifications-list"]], decls: 0, vars: 0, template: function NotificationsListComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsListComponent, [{
    type: Component,
    args: [{ selector: "app-notifications-list", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsListComponent, { className: "NotificationsListComponent", filePath: "src/app/features/users/notifications-list/notifications-list.component.ts", lineNumber: 9 });
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
      },
      {
        path: "notifications",
        component: NotificationsListComponent
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
//# sourceMappingURL=chunk-CUIL7XJC.js.map
