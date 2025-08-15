import {
  CommonModule,
  RouterModule
} from "./chunk-OLJEO5KJ.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-XEZOAFBV.js";
import "./chunk-KWSTWQNB.js";

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

// src/app/features/alerts/alert-routing.module.ts
var routes = [
  {
    path: "",
    component: AlertContainerComponent
  }
];
var AlertRoutingModule = class _AlertRoutingModule {
  static \u0275fac = function AlertRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AlertRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/alerts/alert.module.ts
var AlertsModule = class _AlertsModule {
  static \u0275fac = function AlertsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AlertsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AlertRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, AlertRoutingModule]
    }]
  }], null, null);
})();
export {
  AlertsModule
};
//# sourceMappingURL=chunk-H72EHKR2.js.map
