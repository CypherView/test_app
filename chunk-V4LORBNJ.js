import {
  RouterModule
} from "./chunk-MWRHVJ6S.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-UOQWYEAO.js";
import "./chunk-R327OCYJ.js";

// src/app/features/position/components/position-container/position-container.component.ts
var PositionContainerComponent = class _PositionContainerComponent {
  static \u0275fac = function PositionContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PositionContainerComponent, selectors: [["app-position-container"]], decls: 0, vars: 0, template: function PositionContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
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

// src/app/features/position/position.module.ts
var PositionModule = class _PositionModule {
  static \u0275fac = function PositionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PositionModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PositionRoutingModule] });
};
export {
  PositionModule
};
//# sourceMappingURL=chunk-V4LORBNJ.js.map
