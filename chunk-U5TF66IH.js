import {
  ThemeComponent
} from "./chunk-U4KVSIUF.js";
import "./chunk-BJMVTXFZ.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
  RouterModule
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/shared/components/unauthorized/unauthorized.component.ts
function UnauthorizedComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 9);
    \u0275\u0275text(2, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.requiredPermission);
  }
}
var UnauthorizedComponent = class _UnauthorizedComponent {
  route = inject(ActivatedRoute);
  requiredPermission = null;
  ngOnInit() {
    this.requiredPermission = this.route.snapshot.queryParamMap.get("reason") === "no_permissions" ? "No permissions assigned to your account" : this.route.snapshot.queryParamMap.get("requiredPermission");
  }
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 12, vars: 1, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "w-full", "p-4", "bg-mainBg"], [1, "max-w-md", "w-full", "shadow-lg", "border", "border-gray-200", "rounded-lg", "p-8", "text-center", "bg-contentBg"], [1, "mb-6"], [1, "pi", "pi-lock", "text-primary", "!text-3xl"], [1, "text-3xl", "font-bold", "mb-2", "text-color"], [1, "mb-6", "text-color-secondary"], [1, "border", "border-red-300", "bg-red-50", "rounded-md", "p-4", "mb-6", "text-left"], [1, "flex", "flex-col", "gap-3"], ["label", "Return to Home", "icon", "pi pi-home", "styleClass", "w-full", "routerLink", "/"], [1, "text-sm", "font-medium", "text-red-800"], [1, "text-sm", "mt-2", "text-red-700"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-theme")(1, "div", 0)(2, "div", 1)(3, "div", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Access Denied");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " You do not have the necessary permissions to access this page. ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, UnauthorizedComponent_Conditional_9_Template, 5, 1, "div", 6);
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275element(11, "p-button", 8);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.requiredPermission ? 9 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, ButtonModule, Button, ThemeComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=unauthorized.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", imports: [CommonModule, RouterModule, ButtonModule, ThemeComponent], template: '<app-theme>\n  <div\n    class="flex items-center justify-center min-h-screen w-full p-4 bg-mainBg"\n  >\n    <div\n      class="max-w-md w-full shadow-lg border border-gray-200 rounded-lg p-8 text-center bg-contentBg"\n    >\n      <div class="mb-6">\n        <i class="pi pi-lock text-primary !text-3xl"></i>\n      </div>\n      <h1 class="text-3xl font-bold mb-2 text-color">Access Denied</h1>\n      <p class="mb-6 text-color-secondary">\n        You do not have the necessary permissions to access this page.\n      </p>\n\n      @if (requiredPermission) {\n        <div\n          class="border border-red-300 bg-red-50 rounded-md p-4 mb-6 text-left"\n        >\n          <p class="text-sm font-medium text-red-800">Reason:</p>\n          <p class="text-sm mt-2 text-red-700">{{ requiredPermission }}</p>\n        </div>\n      }\n\n      <div class="flex flex-col gap-3">\n        <p-button\n          label="Return to Home"\n          icon="pi pi-home"\n          styleClass="w-full"\n          routerLink="/"\n        >\n        </p-button>\n      </div>\n    </div>\n  </div>\n</app-theme>\n', styles: ["/* src/app/shared/components/unauthorized/unauthorized.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=unauthorized.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/shared/components/unauthorized/unauthorized.component.ts", lineNumber: 13 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-U5TF66IH.js.map
