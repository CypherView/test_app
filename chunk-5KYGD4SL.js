import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/alerts/components/alert-container/alert-container.component.ts
var AlertContainerComponent = class _AlertContainerComponent {
  static \u0275fac = function AlertContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertContainerComponent, selectors: [["app-alert-container"]], decls: 0, vars: 0, template: function AlertContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertContainerComponent, [{
    type: Component,
    args: [{ selector: "app-alert-container", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertContainerComponent, { className: "AlertContainerComponent", filePath: "src/app/features/alerts/components/alert-container/alert-container.component.ts", lineNumber: 9 });
})();

// src/app/features/alerts/alerts.routes.ts
var ALERTS_ROUTES = [
  {
    path: "",
    component: AlertContainerComponent
  }
];
export {
  ALERTS_ROUTES
};
//# sourceMappingURL=chunk-5KYGD4SL.js.map
