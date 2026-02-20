import {
  AppCardComponent
} from "./chunk-VTGGDGBL.js";
import "./chunk-MSUTE3TJ.js";
import {
  AppStoreService
} from "./chunk-26EHOY33.js";
import {
  DefaultValueAccessor,
  FormsModule,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  Select,
  SelectModule
} from "./chunk-4CAIP3KE.js";
import "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  AuthDataService,
  ClientDataService,
  CommonModule,
  RouterModule,
  toSignal
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  Input,
  Output,
  Subject,
  catchError,
  computed,
  debounceTime,
  inject,
  input,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  tap,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/components/app-filter-bar/app-filter-bar.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function AppFilterBarComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("onClick", function AppFilterBarComponent_Conditional_9_For_2_Template_p_button_onClick_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStatusChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", option_r2.label)("severity", ctx_r2.selectedStatus() === option_r2.value ? "primary" : "secondary")("outlined", ctx_r2.selectedStatus() !== option_r2.value);
  }
}
function AppFilterBarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, AppFilterBarComponent_Conditional_9_For_2_Template, 1, 3, "p-button", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.statusOptions());
  }
}
var AppFilterBarComponent = class _AppFilterBarComponent {
  categories = input([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  sortOptions = input([], ...ngDevMode ? [{ debugName: "sortOptions" }] : []);
  statusOptions = input([], ...ngDevMode ? [{ debugName: "statusOptions" }] : []);
  selectedCategory = input("All", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
  selectedSort = input("popular", ...ngDevMode ? [{ debugName: "selectedSort" }] : []);
  selectedStatus = input("ALL", ...ngDevMode ? [{ debugName: "selectedStatus" }] : []);
  searchQuery = input("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  searchQueryChange = output();
  categoryChange = output();
  sortChange = output();
  statusChange = output();
  onSearch(query) {
    this.searchQueryChange.emit(query);
  }
  onCategoryChange(category) {
    this.categoryChange.emit(category);
  }
  onSortChange(sort) {
    this.sortChange.emit(sort);
  }
  onStatusChange(status) {
    this.statusChange.emit(status);
  }
  static \u0275fac = function AppFilterBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFilterBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFilterBarComponent, selectors: [["app-filter-bar"]], inputs: { categories: [1, "categories"], sortOptions: [1, "sortOptions"], statusOptions: [1, "statusOptions"], selectedCategory: [1, "selectedCategory"], selectedSort: [1, "selectedSort"], selectedStatus: [1, "selectedStatus"], searchQuery: [1, "searchQuery"] }, outputs: { searchQueryChange: "searchQueryChange", categoryChange: "categoryChange", sortChange: "sortChange", statusChange: "statusChange" }, decls: 10, vars: 6, consts: [[1, "flex", "flex-col", "gap-4", "p-4", "flex-none", "filter-section", "border-b", "border-subtle"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "relative", "flex-grow"], ["iconPosition", "left", 1, "w-full"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search integrations...", 1, "w-full", "border-none", "shadow-none", "focus:ring-2", "focus:ring-primary/20", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], ["placeholder", "Categories", 1, "w-full", "md:w-48", 3, "onChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Sort By", 1, "w-full", "md:w-48", 3, "onChange", "options", "ngModel"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "label", "severity", "outlined"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "onClick", "label", "severity", "outlined"]], template: function AppFilterBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p-iconField", 3);
      \u0275\u0275element(4, "p-inputicon", 4);
      \u0275\u0275elementStart(5, "input", 5);
      \u0275\u0275listener("ngModelChange", function AppFilterBarComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "p-select", 7);
      \u0275\u0275listener("onChange", function AppFilterBarComponent_Template_p_select_onChange_7_listener($event) {
        return ctx.onCategoryChange($event.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-select", 8);
      \u0275\u0275listener("onChange", function AppFilterBarComponent_Template_p_select_onChange_8_listener($event) {
        return ctx.onSortChange($event.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(9, AppFilterBarComponent_Conditional_9_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.categories())("ngModel", ctx.selectedCategory());
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.sortOptions())("ngModel", ctx.selectedSort());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.statusOptions().length > 0 ? 9 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    ButtonModule,
    Button
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFilterBarComponent, [{
    type: Component,
    args: [{ selector: "app-filter-bar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      SelectModule,
      ButtonModule
    ], template: `<div
  class="flex flex-col gap-4 p-4 flex-none filter-section border-b border-subtle"
>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="relative flex-grow">
      <p-iconField iconPosition="left" class="w-full">
        <p-inputicon class="pi pi-search" />
        <input
          type="text"
          pInputText
          placeholder="Search integrations..."
          class="w-full border-none shadow-none focus:ring-2 focus:ring-primary/20"
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearch($event)"
        />
      </p-iconField>
    </div>

    <div class="flex gap-2">
      <p-select
        [options]="categories()"
        [ngModel]="selectedCategory()"
        (onChange)="onCategoryChange($event.value)"
        placeholder="Categories"
        class="w-full md:w-48"
      ></p-select>

      <p-select
        [options]="sortOptions()"
        optionLabel="label"
        optionValue="value"
        [ngModel]="selectedSort()"
        (onChange)="onSortChange($event.value)"
        placeholder="Sort By"
        class="w-full md:w-48"
      ></p-select>
    </div>
  </div>

  @if (statusOptions().length > 0) {
    <div class="flex gap-2">
      @for (option of statusOptions(); track option.value) {
        <p-button
          [label]="option.label"
          [severity]="
            selectedStatus() === option.value ? 'primary' : 'secondary'
          "
          [outlined]="selectedStatus() !== option.value"
          size="small"
          rounded="true"
          (onClick)="onStatusChange(option.value)"
          class="!text-xs font-semibold"
        />
      }
    </div>
  }
</div>
` }]
  }], null, { categories: [{ type: Input, args: [{ isSignal: true, alias: "categories", required: false }] }], sortOptions: [{ type: Input, args: [{ isSignal: true, alias: "sortOptions", required: false }] }], statusOptions: [{ type: Input, args: [{ isSignal: true, alias: "statusOptions", required: false }] }], selectedCategory: [{ type: Input, args: [{ isSignal: true, alias: "selectedCategory", required: false }] }], selectedSort: [{ type: Input, args: [{ isSignal: true, alias: "selectedSort", required: false }] }], selectedStatus: [{ type: Input, args: [{ isSignal: true, alias: "selectedStatus", required: false }] }], searchQuery: [{ type: Input, args: [{ isSignal: true, alias: "searchQuery", required: false }] }], searchQueryChange: [{ type: Output, args: ["searchQueryChange"] }], categoryChange: [{ type: Output, args: ["categoryChange"] }], sortChange: [{ type: Output, args: ["sortChange"] }], statusChange: [{ type: Output, args: ["statusChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFilterBarComponent, { className: "AppFilterBarComponent", filePath: "src/app/features/app-store/components/app-filter-bar/app-filter-bar.component.ts", lineNumber: 25 });
})();

// src/app/features/app-store/configs/marketplace.config.ts
var MARKETPLACE_CATEGORIES = [
  "All",
  "Fleet Management",
  "Safety",
  "Maintenance",
  "Reporting"
];
var MARKETPLACE_SORT_OPTIONS = [
  { label: "Most Popular", value: "popular" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Highest Rated", value: "rating" }
];

// src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _forTrack02 = ($index, $item) => $item.id;
function AppMarketplaceComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function AppMarketplaceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_3_For_2_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AppMarketplaceComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, " Please check your connection or try again later. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AppMarketplaceComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card", 11);
  }
  if (rf & 2) {
    const app_r2 = ctx.$implicit;
    \u0275\u0275property("app", app_r2);
  }
}
function AppMarketplaceComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_5_For_2_Template, 1, 1, "app-card", 11, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.apps());
  }
}
function AppMarketplaceComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementStart(2, "h3", 13);
    \u0275\u0275text(3, "No apps found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5, "Try adjusting your search or filters.");
    \u0275\u0275elementEnd()();
  }
}
var AppMarketplaceComponent = class _AppMarketplaceComponent {
  appStoreService = inject(AppStoreService);
  authDataService = inject(AuthDataService);
  clientDataService = inject(ClientDataService);
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  categoryFilter = signal("All", ...ngDevMode ? [{ debugName: "categoryFilter" }] : []);
  sortOrder = signal("popular", ...ngDevMode ? [{ debugName: "sortOrder" }] : []);
  // Static Data from Config
  categories = MARKETPLACE_CATEGORIES;
  sortOptions = MARKETPLACE_SORT_OPTIONS;
  searchInput$ = new Subject();
  searchQuery$ = this.searchInput$.pipe(debounceTime(250), startWith(""));
  searchQuery = toSignal(this.searchQuery$, { initialValue: "" });
  // Data Signals
  rawApps = toSignal(this.appStoreService.getApps({
    owner: this.clientDataService.getSelectedClient()?.id ?? "",
    status: "approved"
  }).pipe(tap(() => this.isLoading.set(false)), catchError((err) => {
    console.error("Error loading apps:", err);
    this.error.set("Unable to load apps. Please try again.");
    this.isLoading.set(false);
    return of([]);
  })), { initialValue: [] });
  // Computed Signal for Filtered & Sorted Apps
  apps = computed(() => {
    const apps = this.rawApps();
    const query = (this.searchQuery() || "").toLowerCase();
    const category = this.categoryFilter();
    const sort = this.sortOrder();
    const filtered = apps.filter((app) => {
      const matchesSearch = app.name.toLowerCase().includes(query) || app.shortDescription.toLowerCase().includes(query);
      const matchesCategory = category === "All" || app.categories.includes(category);
      return matchesSearch && matchesCategory;
    });
    return filtered.sort((a, b) => {
      if (sort === "popular")
        return b.installCount - a.installCount;
      if (sort === "newest")
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      if (sort === "rating")
        return b.averageRating - a.averageRating;
      return 0;
    });
  }, ...ngDevMode ? [{ debugName: "apps" }] : []);
  isAdmin = this.authDataService.isSuperAdmin();
  onSearch(query) {
    this.searchInput$.next(query);
  }
  onCategorySelect(category) {
    this.categoryFilter.set(category);
  }
  onSortChange(sort) {
    this.sortOrder.set(sort);
  }
  static \u0275fac = function AppMarketplaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMarketplaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMarketplaceComponent, selectors: [["app-marketplace"]], decls: 7, vars: 6, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [3, "searchQueryChange", "categoryChange", "sortChange", "categories", "sortOptions", "selectedCategory", "selectedSort", "searchQuery"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "text-center", "py-12"], [1, "h-64", "rounded-2xl", "animate-pulse", "border", "border-subtle"], [1, "w-16", "h-16", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl"], [1, "text-xl", "font-bold", "mb-2"], [1, "text-muted"], [3, "app"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2"], [1, "muted"]], template: function AppMarketplaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-filter-bar", 1);
      \u0275\u0275listener("searchQueryChange", function AppMarketplaceComponent_Template_app_filter_bar_searchQueryChange_1_listener($event) {
        return ctx.onSearch($event);
      })("categoryChange", function AppMarketplaceComponent_Template_app_filter_bar_categoryChange_1_listener($event) {
        return ctx.onCategorySelect($event);
      })("sortChange", function AppMarketplaceComponent_Template_app_filter_bar_sortChange_1_listener($event) {
        return ctx.onSortChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, AppMarketplaceComponent_Conditional_3_Template, 3, 1, "div", 3)(4, AppMarketplaceComponent_Conditional_4_Template, 7, 1, "div", 4)(5, AppMarketplaceComponent_Conditional_5_Template, 3, 0, "div", 3)(6, AppMarketplaceComponent_Conditional_6_Template, 6, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("categories", ctx.categories)("sortOptions", ctx.sortOptions)("selectedCategory", ctx.categoryFilter())("selectedSort", ctx.sortOrder())("searchQuery", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 3 : ctx.error() ? 4 : ctx.apps().length > 0 ? 5 : 6);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppCardComponent,
    AppFilterBarComponent
  ], styles: ["\n\n.filter-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMarketplaceComponent, [{
    type: Component,
    args: [{ selector: "app-marketplace", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      AppCardComponent,
      AppFilterBarComponent
    ], template: '<div class="flex flex-col h-full w-full overflow-hidden">\n  <!-- Filters & Search -->\n  <app-filter-bar\n    [categories]="categories"\n    [sortOptions]="sortOptions"\n    [selectedCategory]="categoryFilter()"\n    [selectedSort]="sortOrder()"\n    [searchQuery]="searchQuery()"\n    (searchQueryChange)="onSearch($event)"\n    (categoryChange)="onCategorySelect($event)"\n    (sortChange)="onSortChange($event)"\n  />\n\n  <!-- App Grid -->\n  <div class="flex-1 min-h-0 w-full overflow-auto p-6">\n    @if (isLoading()) {\n      <div\n        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"\n      >\n        @for (_ of [1, 2, 3, 4, 5, 6, 7, 8]; track _) {\n          <div\n            class="h-64 rounded-2xl animate-pulse border border-subtle"\n          ></div>\n        }\n      </div>\n    } @else if (error()) {\n      <div class="flex flex-col items-center justify-center py-20 text-center">\n        <div\n          class="w-16 h-16 rounded-full flex items-center justify-center mb-4"\n        >\n          <i class="pi pi-exclamation-triangle text-3xl"></i>\n        </div>\n        <h3 class="text-xl font-bold mb-2">{{ error() }}</h3>\n        <p class="text-muted">\n          Please check your connection or try again later.\n        </p>\n      </div>\n    } @else if (apps().length > 0) {\n      <div\n        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"\n      >\n        @for (app of apps(); track app.id) {\n          <app-card [app]="app" />\n        }\n      </div>\n    } @else {\n      <!-- Empty State -->\n      <div class="text-center py-12">\n        <span class="pi pi-inbox !text-6xl muted mb-4"></span>\n        <h3 class="text-lg font-medium mb-2">No apps found</h3>\n        <p class="muted">Try adjusting your search or filters.</p>\n      </div>\n    }\n  </div>\n</div>\n', styles: ["/* src/app/features/app-store/pages/app-marketplace/app-marketplace.component.scss */\n.filter-section {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n:host {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMarketplaceComponent, { className: "AppMarketplaceComponent", filePath: "src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts", lineNumber: 33 });
})();
export {
  AppMarketplaceComponent
};
//# sourceMappingURL=chunk-C4M72Q3C.js.map
