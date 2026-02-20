import {
  CommonModule,
  NgClass
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";

// src/app/features/app-store/utils/status.utils.ts
function getStatusSeverity(status) {
  switch (status) {
    case "approved":
      return "success";
    case "pendingReview":
    case "underReview":
    case "changesRequested":
      return "warn";
    case "draft":
    case "withdrawn":
      return "secondary";
    case "rejected":
    case "suspended":
      return "danger";
    default:
      return "info";
  }
}
function getStatusLabel(status) {
  return status.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
}

// src/app/features/app-store/components/app-status-badge/app-status-badge.component.ts
var AppStatusBadgeComponent = class _AppStatusBadgeComponent {
  status = input.required(...ngDevMode ? [{ debugName: "status" }] : []);
  label = computed(() => getStatusLabel(this.status()), ...ngDevMode ? [{ debugName: "label" }] : []);
  badgeClass = computed(() => {
    const severity = getStatusSeverity(this.status());
    switch (severity) {
      case "success":
        return "status-approved";
      case "info":
        return "status-pending";
      case "danger":
        return "status-rejected";
      case "warn":
        return "status-suspended";
      default:
        return "status-draft";
    }
  }, ...ngDevMode ? [{ debugName: "badgeClass" }] : []);
  static \u0275fac = function AppStatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppStatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppStatusBadgeComponent, selectors: [["app-status-badge"]], inputs: { status: [1, "status"] }, decls: 2, vars: 2, consts: [[1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-medium", "uppercase", "tracking-wider", 3, "ngClass"]], template: function AppStatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.badgeClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(), "\n");
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n\n.status-draft[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-600) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n.status-pending[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity, 1));\n}\n.status-approved[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(220 252 231 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.status-rejected[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(254 226 226 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.status-suspended[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 237 213 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=app-status-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppStatusBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-status-badge", standalone: true, imports: [CommonModule], template: '<span\n  class="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider"\n  [ngClass]="badgeClass()"\n>\n  {{ label() }}\n</span>\n', styles: ["/* src/app/features/app-store/components/app-status-badge/app-status-badge.component.scss */\n.status-draft {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-600) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n.status-pending {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity, 1));\n}\n.status-approved {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(220 252 231 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.status-rejected {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(254 226 226 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.status-suspended {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 237 213 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=app-status-badge.component.css.map */\n"] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppStatusBadgeComponent, { className: "AppStatusBadgeComponent", filePath: "src/app/features/app-store/components/app-status-badge/app-status-badge.component.ts", lineNumber: 13 });
})();

export {
  AppStatusBadgeComponent
};
//# sourceMappingURL=chunk-SRH4Q32Y.js.map
