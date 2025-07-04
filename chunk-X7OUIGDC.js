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

// src/app/features/media/components/media-container/media-container.component.ts
var MediaContainerComponent = class _MediaContainerComponent {
  static \u0275fac = function MediaContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaContainerComponent, selectors: [["app-media-container"]], decls: 0, vars: 0, template: function MediaContainerComponent_Template(rf, ctx) {
  }, encapsulation: 2 });
};
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

// src/app/features/media/media.module.ts
var MediaModule = class _MediaModule {
  static \u0275fac = function MediaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MediaModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, MediaRoutingModule] });
};
export {
  MediaModule
};
//# sourceMappingURL=chunk-X7OUIGDC.js.map
