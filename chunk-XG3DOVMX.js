import {
  AppRatingDisplayComponent
} from "./chunk-XLWAERGL.js";
import {
  ImgFallbackDirective
} from "./chunk-6TCB2NTQ.js";
import {
  TooltipModule
} from "./chunk-TH3LNORR.js";
import {
  Button,
  ButtonModule
} from "./chunk-52LQUIDL.js";
import {
  CommonModule,
  RouterLink,
  RouterModule,
  isDefined
} from "./chunk-L7IB7NHM.js";
import {
  Component,
  Input,
  Output,
  computed,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNETQGIO.js";

// src/app/features/app-store/components/app-card/app-card.component.ts
function AppCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2, " Installed ");
    \u0275\u0275elementEnd();
  }
}
function AppCardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r1, " ");
  }
}
function AppCardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("onClick", function AppCardComponent_Conditional_22_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.uninstallClick.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r2.isLoading());
  }
}
function AppCardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("onClick", function AppCardComponent_Conditional_23_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.installClick.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r2.isLoading());
  }
}
var AppCardComponent = class _AppCardComponent {
  app = input.required(...ngDevMode ? [{ debugName: "app" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  cardClick = output();
  installClick = output();
  uninstallClick = output();
  appDetailRoute = computed(() => ["/app-store", this.app().id], ...ngDevMode ? [{ debugName: "appDetailRoute" }] : (
    /* istanbul ignore next */
    []
  ));
  installationId = computed(() => this.app().installation?.id ?? null, ...ngDevMode ? [{ debugName: "installationId" }] : (
    /* istanbul ignore next */
    []
  ));
  isAppInstalled = computed(() => isDefined(this.app().installation), ...ngDevMode ? [{ debugName: "isAppInstalled" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCardComponent, selectors: [["app-card"]], inputs: { app: [1, "app"], isLoading: [1, "isLoading"] }, outputs: { cardClick: "cardClick", installClick: "installClick", uninstallClick: "uninstallClick" }, decls: 24, vars: 11, consts: [[1, "flex", "overflow-hidden", "relative", "flex-col", "h-full", "rounded-2xl", "shadow-sm", "transition-all", "duration-300", "pointer-events-auto", "group", "border-subtle", "hover:shadow-xl", "hover:-translate-y-1", "bg-contentBg", 3, "click", "keydown.enter"], [1, "p-5", "pb-0"], [1, "flex", "justify-between", "items-start"], [1, "relative", "w-fit"], ["appImgFallback", "", 1, "object-cover", "w-14", "h-14", "rounded-xl", "shadow-sm", 3, "src", "alt", "fallbackText"], [1, "flex", "absolute", "-top-2", "-right-16", "gap-1", "items-center", "px-2", "py-0.5", "text-xs", "font-bold", "text-green-700", "whitespace-nowrap", "bg-green-100", "rounded-full", "border", "border-green-200", "shadow-sm"], [1, "mt-4"], [1, "text-lg", "font-bold", "transition-colors", "group-hover:text-primary", "line-clamp-1"], [1, "text-xs", "font-medium"], [1, "flex-grow", "p-5", "py-4"], [1, "text-sm", "leading-relaxed", "line-clamp-2"], [1, "flex", "flex-wrap", "gap-1.5", "mt-4"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-primary", "category"], [1, "mt-3"], [3, "averageRating", "reviewCount"], [1, "p-5", "pt-0", "mt-auto"], [1, "flex", "gap-2", "items-center", "pt-4", "border-t", 3, "click"], ["label", "View Details", "size", "small", "styleClass", "w-full", "severity", "secondary", 1, "flex-1", 3, "routerLink"], ["label", "Uninstall", "icon", "pi pi-trash", "severity", "danger", "size", "small", "styleClass", "w-full", 1, "flex-1", 3, "loading"], ["label", "Install", "icon", "pi pi-download", "size", "small", "styleClass", "w-full", 1, "flex-1", 3, "loading"], [1, "pi", "pi-check-circle"], ["label", "Uninstall", "icon", "pi pi-trash", "severity", "danger", "size", "small", "styleClass", "w-full", 1, "flex-1", 3, "onClick", "loading"], ["label", "Install", "icon", "pi pi-download", "size", "small", "styleClass", "w-full", 1, "flex-1", 3, "onClick", "loading"]], template: function AppCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AppCardComponent_Template_div_click_0_listener() {
        return ctx.cardClick.emit();
      })("keydown.enter", function AppCardComponent_Template_div_keydown_enter_0_listener() {
        return ctx.cardClick.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275conditionalCreate(5, AppCardComponent_Conditional_5_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 6)(7, "h3", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "p", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275repeaterCreate(15, AppCardComponent_For_16_Template, 2, 1, "span", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275element(18, "app-rating-display", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 16);
      \u0275\u0275listener("click", function AppCardComponent_Template_div_click_20_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275element(21, "p-button", 17);
      \u0275\u0275conditionalCreate(22, AppCardComponent_Conditional_22_Template, 1, 1, "p-button", 18)(23, AppCardComponent_Conditional_23_Template, 1, 1, "p-button", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.app().iconUrl, \u0275\u0275sanitizeUrl)("alt", ctx.app().name + " icon")("fallbackText", ctx.app().name);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAppInstalled() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.app().name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("By ", ctx.app().developerName);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.app().shortDescription, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.app().categories.slice(0, 2));
      \u0275\u0275advance(3);
      \u0275\u0275property("averageRating", ctx.app().stats.averageRating)("reviewCount", ctx.app().stats.reviewCount);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.appDetailRoute());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAppInstalled() ? 22 : 23);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    TooltipModule,
    ButtonModule,
    Button,
    AppRatingDisplayComponent,
    ImgFallbackDirective
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   .category[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--color-primary-color) 15%, transparent);\n}\n/*# sourceMappingURL=app-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCardComponent, [{
    type: Component,
    args: [{ selector: "app-card", imports: [
      CommonModule,
      RouterModule,
      TooltipModule,
      ButtonModule,
      AppRatingDisplayComponent,
      ImgFallbackDirective
    ], template: `<div
  class="flex overflow-hidden relative flex-col h-full rounded-2xl shadow-sm transition-all duration-300 pointer-events-auto group border-subtle hover:shadow-xl hover:-translate-y-1 bg-contentBg"
  (click)="cardClick.emit()"
  (keydown.enter)="cardClick.emit()"
>
  <!-- Card Header -->
  <div class="p-5 pb-0">
    <div class="flex justify-between items-start">
      <div class="relative w-fit">
        <img
          [src]="app().iconUrl"
          [alt]="app().name + ' icon'"
          class="object-cover w-14 h-14 rounded-xl shadow-sm"
          appImgFallback
          [fallbackText]="app().name"
        />
        @if (isAppInstalled()) {
          <div
            class="flex absolute -top-2 -right-16 gap-1 items-center px-2 py-0.5 text-xs font-bold text-green-700 whitespace-nowrap bg-green-100 rounded-full border border-green-200 shadow-sm"
          >
            <i class="pi pi-check-circle"></i>
            Installed
          </div>
        }
      </div>
    </div>

    <div class="mt-4">
      <h3
        class="text-lg font-bold transition-colors group-hover:text-primary line-clamp-1"
      >
        {{ app().name }}
      </h3>
      <p class="text-xs font-medium">By {{ app().developerName }}</p>
    </div>
  </div>

  <!-- Card Content -->
  <div class="flex-grow p-5 py-4">
    <p class="text-sm leading-relaxed line-clamp-2">
      {{ app().shortDescription }}
    </p>
    <div class="flex flex-wrap gap-1.5 mt-4">
      @for (category of app().categories.slice(0, 2); track category) {
        <span
          class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-primary category"
        >
          {{ category }}
        </span>
      }
    </div>

    <div class="mt-3">
      <app-rating-display
        [averageRating]="app().stats.averageRating"
        [reviewCount]="app().stats.reviewCount"
      />
    </div>
  </div>

  <!-- Card Footer -->
  <div class="p-5 pt-0 mt-auto">
    <div
      class="flex gap-2 items-center pt-4 border-t"
      (click)="$event.stopPropagation()"
    >
      <p-button
        [routerLink]="appDetailRoute()"
        label="View Details"
        size="small"
        class="flex-1"
        styleClass="w-full"
        severity="secondary"
      />

      @if (isAppInstalled()) {
        <p-button
          label="Uninstall"
          icon="pi pi-trash"
          severity="danger"
          size="small"
          class="flex-1"
          styleClass="w-full"
          [loading]="isLoading()"
          (onClick)="uninstallClick.emit()"
        />
      } @else {
        <p-button
          label="Install"
          icon="pi pi-download"
          size="small"
          class="flex-1"
          styleClass="w-full"
          [loading]="isLoading()"
          (onClick)="installClick.emit()"
        />
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/app-store/components/app-card/app-card.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n:host .category {\n  background-color: color-mix(in srgb, var(--color-primary-color) 15%, transparent);\n}\n/*# sourceMappingURL=app-card.component.css.map */\n"] }]
  }], null, { app: [{ type: Input, args: [{ isSignal: true, alias: "app", required: true }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], cardClick: [{ type: Output, args: ["cardClick"] }], installClick: [{ type: Output, args: ["installClick"] }], uninstallClick: [{ type: Output, args: ["uninstallClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCardComponent, { className: "AppCardComponent", filePath: "src/app/features/app-store/components/app-card/app-card.component.ts", lineNumber: 24 });
})();

export {
  AppCardComponent
};
//# sourceMappingURL=chunk-XG3DOVMX.js.map
