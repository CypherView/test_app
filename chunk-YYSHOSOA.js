import {
  CommonModule,
  RouterModule
} from "./chunk-OZRAVXUL.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-7FSD67AL.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/position/components/position-container/position-container.component.ts
var PositionContainerComponent = class _PositionContainerComponent {
  static \u0275fac = function PositionContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PositionContainerComponent, selectors: [["app-position-container"]], decls: 0, vars: 0, template: function PositionContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionContainerComponent, [{
    type: Component,
    args: [{ selector: "app-position-container", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PositionContainerComponent, { className: "PositionContainerComponent", filePath: "src/app/features/position/components/position-container/position-container.component.ts", lineNumber: 9 });
})();

// src/app/features/position/position-routing.module.ts
var routes = [
  {
    path: "",
    component: PositionContainerComponent
  }
];
var PositionRoutingModule = class _PositionRoutingModule {
  static \u0275fac = function PositionRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PositionRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/position/position.module.ts
var PositionModule = class _PositionModule {
  static \u0275fac = function PositionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PositionModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PositionRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, PositionRoutingModule]
    }]
  }], null, null);
})();
export {
  PositionModule
};
//# sourceMappingURL=chunk-YYSHOSOA.js.map
