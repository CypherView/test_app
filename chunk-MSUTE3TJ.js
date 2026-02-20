import {
  CommonModule
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";

// src/app/features/app-store/components/app-rating-display/app-rating-display.component.ts
var AppRatingDisplayComponent = class _AppRatingDisplayComponent {
  averageRating = input.required(...ngDevMode ? [{ debugName: "averageRating" }] : []);
  reviewCount = input.required(...ngDevMode ? [{ debugName: "reviewCount" }] : []);
  static \u0275fac = function AppRatingDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRatingDisplayComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppRatingDisplayComponent, selectors: [["app-rating-display"]], inputs: { averageRating: [1, "averageRating"], reviewCount: [1, "reviewCount"] }, decls: 6, vars: 2, consts: [[1, "flex", "items-center", "gap-1.5"], [1, "pi", "pi-star-fill", "text-yellow-400", "text-xs"], [1, "text-sm", "font-bold", "text-surface-700"], [1, "text-[10px]", "text-surface-400"]], template: function AppRatingDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "i", 1);
      \u0275\u0275domElementStart(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.averageRating());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.reviewCount(), ")");
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRatingDisplayComponent, [{
    type: Component,
    args: [{ selector: "app-rating-display", standalone: true, imports: [CommonModule], template: '<div class="flex items-center gap-1.5">\n  <i class="pi pi-star-fill text-yellow-400 text-xs"></i>\n  <span class="text-sm font-bold text-surface-700">{{ averageRating() }}</span>\n  <span class="text-[10px] text-surface-400">({{ reviewCount() }})</span>\n</div>\n' }]
  }], null, { averageRating: [{ type: Input, args: [{ isSignal: true, alias: "averageRating", required: true }] }], reviewCount: [{ type: Input, args: [{ isSignal: true, alias: "reviewCount", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppRatingDisplayComponent, { className: "AppRatingDisplayComponent", filePath: "src/app/features/app-store/components/app-rating-display/app-rating-display.component.ts", lineNumber: 11 });
})();

export {
  AppRatingDisplayComponent
};
//# sourceMappingURL=chunk-MSUTE3TJ.js.map
