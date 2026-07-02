import {
  ThemeComponent
} from "./chunk-VBHGE6H7.js";
import "./chunk-POWMBANG.js";
import {
  Button,
  ButtonModule
} from "./chunk-4VRJFGPA.js";
import "./chunk-NTFNF324.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-AHALUXAA.js";
import {
  ActivatedRoute,
  CommonModule,
  RouterLink,
  RouterModule
} from "./chunk-2Y2RLXE3.js";
import "./chunk-M4PBGCJ5.js";
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VOGNWKLY.js";
import "./chunk-7WUTQBRG.js";

// src/app/shared/components/unauthorized/unauthorized.component.ts
function UnauthorizedComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "SHARED.UNAUTHORIZED.REASON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.requiredPermission);
  }
}
var UnauthorizedComponent = class _UnauthorizedComponent {
  route = inject(ActivatedRoute);
  translate = inject(TranslateService);
  requiredPermission = null;
  ngOnInit() {
    this.requiredPermission = this.route.snapshot.queryParamMap.get("reason") === "no_permissions" ? this.translate.instant("SHARED.UNAUTHORIZED.NO_PERMISSIONS_ASSIGNED") : this.route.snapshot.queryParamMap.get("requiredPermission");
  }
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], decls: 15, vars: 10, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "w-full", "p-4", "bg-mainBg"], [1, "max-w-md", "w-full", "shadow-lg", "border", "border-gray-200", "rounded-lg", "p-8", "text-center", "bg-contentBg"], [1, "mb-6"], [1, "pi", "pi-lock", "text-primary", "!text-3xl"], [1, "text-3xl", "font-bold", "mb-2", "text-color"], [1, "mb-6", "text-color-secondary"], [1, "border", "border-red-300", "bg-red-50", "rounded-md", "p-4", "mb-6", "text-left"], [1, "flex", "flex-col", "gap-3"], ["icon", "pi pi-home", "styleClass", "w-full", "routerLink", "/", 3, "label"], [1, "text-sm", "font-medium", "text-red-800"], [1, "text-sm", "mt-2", "text-red-700"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-theme")(1, "div", 0)(2, "div", 1)(3, "div", 2);
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, UnauthorizedComponent_Conditional_11_Template, 6, 4, "div", 6);
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275element(13, "p-button", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "SHARED.UNAUTHORIZED.ACCESS_DENIED"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, "SHARED.UNAUTHORIZED.NO_PERMISSION_MESSAGE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.requiredPermission ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 8, "SHARED.UNAUTHORIZED.RETURN_HOME"));
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    Button,
    ThemeComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=unauthorized.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      ThemeComponent,
      TranslatePipe
    ], template: `<app-theme>
  <div
    class="flex items-center justify-center min-h-screen w-full p-4 bg-mainBg"
  >
    <div
      class="max-w-md w-full shadow-lg border border-gray-200 rounded-lg p-8 text-center bg-contentBg"
    >
      <div class="mb-6">
        <i class="pi pi-lock text-primary !text-3xl"></i>
      </div>
      <h1 class="text-3xl font-bold mb-2 text-color">
        {{ 'SHARED.UNAUTHORIZED.ACCESS_DENIED' | translate }}
      </h1>
      <p class="mb-6 text-color-secondary">
        {{ 'SHARED.UNAUTHORIZED.NO_PERMISSION_MESSAGE' | translate }}
      </p>

      @if (requiredPermission) {
        <div
          class="border border-red-300 bg-red-50 rounded-md p-4 mb-6 text-left"
        >
          <p class="text-sm font-medium text-red-800">
            {{ 'SHARED.UNAUTHORIZED.REASON' | translate }}
          </p>
          <p class="text-sm mt-2 text-red-700">{{ requiredPermission }}</p>
        </div>
      }

      <div class="flex flex-col gap-3">
        <p-button
          [label]="'SHARED.UNAUTHORIZED.RETURN_HOME' | translate"
          icon="pi pi-home"
          styleClass="w-full"
          routerLink="/"
        >
        </p-button>
      </div>
    </div>
  </div>
</app-theme>
`, styles: ["/* src/app/shared/components/unauthorized/unauthorized.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=unauthorized.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/shared/components/unauthorized/unauthorized.component.ts", lineNumber: 20 });
})();
export {
  UnauthorizedComponent
};
//# sourceMappingURL=chunk-GIIS5TQX.js.map
