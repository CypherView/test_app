import {
  AppRatingDisplayComponent
} from "./chunk-MSUTE3TJ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  PrimeTemplate
} from "./chunk-YL4UBWIM.js";
import {
  CommonModule,
  RouterLink,
  RouterModule
} from "./chunk-UNWLID6Q.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";

// src/app/features/app-store/components/app-card/app-card.component.ts
function AppCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 18);
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
function AppCardComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
var AppCardComponent = class _AppCardComponent {
  app = input.required(...ngDevMode ? [{ debugName: "app" }] : []);
  cardClick = output();
  appDetailRoute = computed(() => ["/app-store", this.app().id], ...ngDevMode ? [{ debugName: "appDetailRoute" }] : []);
  static \u0275fac = function AppCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCardComponent, selectors: [["app-card"]], inputs: { app: [1, "app"] }, outputs: { cardClick: "cardClick" }, decls: 22, vars: 10, consts: [[1, "group", "relative", "flex", "flex-col", "h-full", "rounded-2xl", "border", "border-subtle", "shadow-sm", "transition-all", "duration-300", "hover:shadow-xl", "hover:-translate-y-1", "overflow-hidden", "pointer-events-auto", 3, "click", "keydown.enter"], [1, "p-5", "pb-0"], [1, "flex", "items-start", "justify-between"], [1, "relative"], [1, "w-14", "h-14", "rounded-xl", "object-cover", "shadow-sm", 3, "src", "alt"], ["pTooltip", "Installed", 1, "absolute", "-top-2", "-right-2", "text-green-500", "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "border", "border-green-200", "shadow-sm", "bg-surface-0"], [1, "mt-4"], [1, "text-lg", "font-bold", "group-hover:text-primary", "transition-colors", "line-clamp-1"], [1, "text-xs", "font-medium"], [1, "p-5", "py-4", "flex-grow"], [1, "text-sm", "line-clamp-2", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-1.5", "mt-4"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "bg-primary/5", "text-primary", "border", "border-primary/10"], [1, "p-5", "pt-0", "mt-auto"], [1, "flex", "items-center", "justify-between", "border-t", "pt-4"], [3, "averageRating", "reviewCount"], ["label", "View Details", "size", "small", 1, "!p-0", "!text-primary", "font-bold", "transition-all", "hover:gap-1", 3, "routerLink", "text"], ["pTemplate", "icon"], [1, "pi", "pi-check", "text-[10px]", "font-bold"], [1, "pi", "pi-arrow-right", "text-xs"]], template: function AppCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AppCardComponent_Template_div_click_0_listener() {
        return ctx.cardClick.emit();
      })("keydown.enter", function AppCardComponent_Template_div_keydown_enter_0_listener() {
        return ctx.cardClick.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275conditionalCreate(5, AppCardComponent_Conditional_5_Template, 2, 0, "div", 5);
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
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
      \u0275\u0275element(19, "app-rating-display", 15);
      \u0275\u0275elementStart(20, "p-button", 16);
      \u0275\u0275template(21, AppCardComponent_ng_template_21_Template, 1, 0, "ng-template", 17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.app().iconUrl, \u0275\u0275sanitizeUrl)("alt", ctx.app().name + " icon");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.app().isInstalled ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.app().name, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("By ", ctx.app().developerName);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.app().shortDescription, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.app().categories.slice(0, 2));
      \u0275\u0275advance(4);
      \u0275\u0275property("averageRating", ctx.app().averageRating)("reviewCount", ctx.app().reviewCount);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.appDetailRoute())("text", true);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    TooltipModule,
    Tooltip,
    ButtonModule,
    Button,
    PrimeTemplate,
    AppRatingDisplayComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=app-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCardComponent, [{
    type: Component,
    args: [{ selector: "app-card", standalone: true, imports: [
      CommonModule,
      RouterModule,
      TooltipModule,
      ButtonModule,
      AppRatingDisplayComponent
    ], template: `<div
  class="group relative flex flex-col h-full rounded-2xl border border-subtle shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden pointer-events-auto"
  (click)="cardClick.emit()"
  (keydown.enter)="cardClick.emit()"
>
  <!-- Card Header -->
  <div class="p-5 pb-0">
    <div class="flex items-start justify-between">
      <div class="relative">
        <img
          [src]="app().iconUrl"
          [alt]="app().name + ' icon'"
          class="w-14 h-14 rounded-xl object-cover shadow-sm"
        />
        @if (app().isInstalled) {
          <div
            class="absolute -top-2 -right-2 text-green-500 w-6 h-6 rounded-full flex items-center justify-center border border-green-200 shadow-sm bg-surface-0"
            pTooltip="Installed"
          >
            <i class="pi pi-check text-[10px] font-bold"></i>
          </div>
        }
      </div>
    </div>

    <div class="mt-4">
      <h3
        class="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1"
      >
        {{ app().name }}
      </h3>
      <p class="text-xs font-medium">By {{ app().developerName }}</p>
    </div>
  </div>

  <!-- Card Content -->
  <div class="p-5 py-4 flex-grow">
    <p class="text-sm line-clamp-2 leading-relaxed">
      {{ app().shortDescription }}
    </p>
    <div class="flex flex-wrap gap-1.5 mt-4">
      @for (category of app().categories.slice(0, 2); track category) {
        <span
          class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary border border-primary/10"
        >
          {{ category }}
        </span>
      }
    </div>
  </div>

  <!-- Card Footer -->
  <div class="p-5 pt-0 mt-auto">
    <div class="flex items-center justify-between border-t pt-4">
      <app-rating-display
        [averageRating]="app().averageRating"
        [reviewCount]="app().reviewCount"
      />

      <p-button
        [routerLink]="appDetailRoute()"
        label="View Details"
        [text]="true"
        size="small"
        class="!p-0 !text-primary font-bold transition-all hover:gap-1"
      >
        <ng-template pTemplate="icon">
          <i class="pi pi-arrow-right text-xs"></i>
        </ng-template>
      </p-button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/app-store/components/app-card/app-card.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=app-card.component.css.map */\n"] }]
  }], null, { app: [{ type: Input, args: [{ isSignal: true, alias: "app", required: true }] }], cardClick: [{ type: Output, args: ["cardClick"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCardComponent, { className: "AppCardComponent", filePath: "src/app/features/app-store/components/app-card/app-card.component.ts", lineNumber: 22 });
})();

export {
  AppCardComponent
};
//# sourceMappingURL=chunk-VTGGDGBL.js.map
