import {
  RouterModule
} from "./chunk-5T4X2AFY.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-CAVC4NS5.js";
import "./chunk-R327OCYJ.js";

// src/app/features/history/components/history-container/history-container.component.ts
var HistoryContainerComponent = class _HistoryContainerComponent {
  static \u0275fac = function HistoryContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryContainerComponent, selectors: [["app-history-container"]], decls: 0, vars: 0, template: function HistoryContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryContainerComponent, { className: "HistoryContainerComponent", filePath: "src/app/features/history/components/history-container/history-container.component.ts", lineNumber: 9 });
})();

// src/app/features/history/history-routing.module.ts
var routes = [
  {
    path: "",
    component: HistoryContainerComponent
  }
];
var HistoryRoutingModule = class _HistoryRoutingModule {
  static \u0275fac = function HistoryRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HistoryRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/history/history.module.ts
var HistoryModule = class _HistoryModule {
  static \u0275fac = function HistoryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HistoryModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, HistoryRoutingModule] });
};
export {
  HistoryModule
};
//# sourceMappingURL=chunk-DTZXMVFY.js.map
