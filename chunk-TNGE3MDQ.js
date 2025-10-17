import {
  toSignal
} from "./chunk-6BAKXKUU.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  IconField,
  InputIcon,
  InputText,
  InputTextModule,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-FF2633IW.js";
import {
  CommonModule,
  TitleCasePipe
} from "./chunk-UOAEKV2L.js";
import {
  Component,
  computed,
  debounceTime,
  input,
  map,
  output,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-MBTADGF5.js";

// src/app/shared/components/client-selector/client-selector.component.ts
function ClientSelectorComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function ClientSelectorComponent_For_8_Template_div_click_0_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectAccount(account_r2.id));
    })("keydown.enter", function ClientSelectorComponent_For_8_Template_div_keydown_enter_0_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectAccount(account_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275element(11, "i", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", account_r2.name.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(9, 4, account_r2.owner.type), ": ", account_r2.owner.name, " ");
  }
}
function ClientSelectorComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "No accounts found.");
    \u0275\u0275elementEnd();
  }
}
var ClientSelectorComponent = class _ClientSelectorComponent {
  clientAccounts = input([]);
  maxHeightClass = input("max-h-96");
  accountSelected = output();
  searchControl = new FormControl("");
  filteredAccounts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.clientAccounts().filter((account) => account.name.toLowerCase().includes(term) || (account?.owner?.name ?? "").toLowerCase().includes(term) || (account?.owner?.type ?? "").toLowerCase().includes(term));
  });
  searchTerm = toSignal(this.searchControl.valueChanges.pipe(startWith(""), debounceTime(300), map((value) => value ?? "")), { initialValue: "" });
  selectAccount(accountId) {
    const selected = this.clientAccounts().find((account) => account.id === accountId);
    if (selected) {
      this.accountSelected.emit(selected);
    }
  }
  static \u0275fac = function ClientSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientSelectorComponent, selectors: [["app-client-selector"]], inputs: { clientAccounts: [1, "clientAccounts"], maxHeightClass: [1, "maxHeightClass"] }, outputs: { accountSelected: "accountSelected" }, decls: 10, vars: 4, consts: [["searchInput", ""], [1, "w-full"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "Search accounts...", 1, "w-full", 3, "formControl"], [1, "pi", "pi-search"], [1, "flex", "items-center", "justify-between", "p-4", "gap-3", "hover:bg-gray-100", "hover:shadow-sm", "cursor-pointer", "transition"], [1, "text-center", "py-8", "text-gray-600"], [1, "flex", "items-center", "justify-between", "p-4", "gap-3", "hover:bg-gray-100", "hover:shadow-sm", "cursor-pointer", "transition", 3, "click", "keydown.enter"], [1, "flex", "gap-3", "justify-center"], [1, "w-10", "h-10", "rounded-full", "account-avatar", "text-white", "flex", "items-center", "justify-center", "font-semibold", "text-lg", "flex-shrink-0"], [1, "flex", "flex-col", "gap-1"], [1, "font-semibold", "text-xl"], [1, "text-sm", "text-gray-600"], [1, "account-select-icon"], [1, "pi", "pi-arrow-right"]], template: function ClientSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p-iconfield");
      \u0275\u0275element(3, "input", 3, 0)(5, "p-inputicon", 4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div");
      \u0275\u0275repeaterCreate(7, ClientSelectorComponent_For_8_Template, 12, 6, "div", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275conditionalCreate(9, ClientSelectorComponent_Conditional_9_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(3);
      \u0275\u0275classMap("flex flex-col gap-3 w-full overflow-y-auto rounded bg-white mt-3 " + ctx.maxHeightClass());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.filteredAccounts());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredAccounts().length === 0 ? 9 : -1);
    }
  }, dependencies: [
    CommonModule,
    TitleCasePipe,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
    IconField,
    InputTextModule,
    InputText,
    InputIcon
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 500px;\n  margin: auto;\n  padding: 0 1rem;\n  --p-iconfield-icon-color: var(--color-primary-color, #378bc0);\n}\n@media (min-width: 532px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n.accounts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  overflow-y: auto;\n}\n.account-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  gap: 0.75rem;\n}\n.account-avatar[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-color, #378bc0);\n  color: white;\n}\n.account-select-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary-color, #378bc0);\n}\n/*# sourceMappingURL=client-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-client-selector", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      IconField,
      InputTextModule,
      InputIcon
    ], template: `<div class="w-full">
  <div class="p-inputgroup">
    <p-iconfield>
      <input
        #searchInput
        type="text"
        pInputText
        [formControl]="searchControl"
        placeholder="Search accounts..."
        class="w-full"
      />
      <p-inputicon class="pi pi-search" />
    </p-iconfield>
  </div>
</div>
<div
  [class]="
    'flex flex-col gap-3 w-full overflow-y-auto rounded bg-white mt-3 ' +
    maxHeightClass()
  "
>
  @for (account of filteredAccounts(); track $index) {
    <div
      class="flex items-center justify-between p-4 gap-3 hover:bg-gray-100 hover:shadow-sm cursor-pointer transition"
      (click)="selectAccount(account.id)"
      (keydown.enter)="selectAccount(account.id)"
    >
      <div class="flex gap-3 justify-center">
        <div
          class="w-10 h-10 rounded-full account-avatar text-white flex items-center justify-center font-semibold text-lg flex-shrink-0"
        >
          {{ account.name.charAt(0).toUpperCase() }}
        </div>
        <div class="flex flex-col gap-1">
          <div class="font-semibold text-xl">{{ account.name }}</div>
          <div class="text-sm text-gray-600">
            {{ account.owner.type | titlecase }}: {{ account.owner.name }}
          </div>
        </div>
      </div>
      <div class="account-select-icon">
        <i class="pi pi-arrow-right"></i>
      </div>
    </div>
  }
  @if (filteredAccounts().length === 0) {
    <div class="text-center py-8 text-gray-600">No accounts found.</div>
  }
</div>
`, styles: ["/* src/app/shared/components/client-selector/client-selector.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  max-width: 500px;\n  margin: auto;\n  padding: 0 1rem;\n  --p-iconfield-icon-color: var(--color-primary-color, #378bc0);\n}\n@media (min-width: 532px) {\n  :host {\n    padding: 0;\n  }\n}\n.accounts-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  overflow-y: auto;\n}\n.account-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius);\n  gap: 0.75rem;\n}\n.account-avatar {\n  background-color: var(--color-primary-color, #378bc0);\n  color: white;\n}\n.account-select-icon {\n  color: var(--color-primary-color, #378bc0);\n}\n/*# sourceMappingURL=client-selector.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientSelectorComponent, { className: "ClientSelectorComponent", filePath: "src/app/shared/components/client-selector/client-selector.component.ts", lineNumber: 24 });
})();

export {
  ClientSelectorComponent
};
//# sourceMappingURL=chunk-TNGE3MDQ.js.map
