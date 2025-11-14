import {
  CommonModule,
  RouterModule
} from "./chunk-3VCLKKY2.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-3T455PKD.js";
import "./chunk-KWSTWQNB.js";

// src/app/features/media/components/media-container/media-container.component.ts
var MediaContainerComponent = class _MediaContainerComponent {
  static \u0275fac = function MediaContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaContainerComponent, selectors: [["app-media-container"]], decls: 0, vars: 0, template: function MediaContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaContainerComponent, [{
    type: Component,
    args: [{ selector: "app-media-container", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaContainerComponent, { className: "MediaContainerComponent", filePath: "src/app/features/media/components/media-container/media-container.component.ts", lineNumber: 9 });
})();

// src/app/features/media/media-routing.module.ts
var routes = [
  {
    path: "",
    component: MediaContainerComponent
  }
];
var MediaRoutingModule = class _MediaRoutingModule {
  static \u0275fac = function MediaRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MediaRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/media/media.module.ts
var MediaModule = class _MediaModule {
  static \u0275fac = function MediaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MediaModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, MediaRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, MediaRoutingModule]
    }]
  }], null, null);
})();
export {
  MediaModule
};
//# sourceMappingURL=chunk-VZSRONVH.js.map
