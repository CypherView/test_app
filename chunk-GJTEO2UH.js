import {
  AppStoreService
} from "./chunk-MCXFASER.js";
import {
  Tag,
  TagModule
} from "./chunk-KQ2PA3AE.js";
import {
  Card,
  CardModule
} from "./chunk-XG3QZFP7.js";
import {
  Rating,
  RatingModule
} from "./chunk-K2ZPTIYP.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  Select,
  SelectModule
} from "./chunk-GDV2LZDZ.js";
import {
  Button,
  ButtonModule,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  PrimeTemplate
} from "./chunk-A5WLHX2Q.js";
import {
  AuthDataService
} from "./chunk-5X3HWCES.js";
import "./chunk-BHSMGPUW.js";
import "./chunk-WREEVIYK.js";
import {
  DEFAULT_SYSTEM_ID
} from "./chunk-DXUIOPUE.js";
import {
  AsyncPipe,
  CommonModule,
  RouterLink,
  RouterModule
} from "./chunk-EMFP3DUF.js";
import {
  BehaviorSubject,
  Component,
  Subject,
  catchError,
  combineLatest,
  debounceTime,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  shareReplay,
  startWith,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LH7TWNW2.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.id;
function AppMarketplaceComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 6);
  }
}
function AppMarketplaceComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function AppMarketplaceComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_19_For_2_Template, 1, 0, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AppMarketplaceComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275elementStart(2, "h3", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Please refresh or adjust your filters.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const error_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(error_r1);
  }
}
function AppMarketplaceComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppMarketplaceComponent_Conditional_23_Conditional_0_Template, 6, 1, "div", 18);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx ? 0 : -1);
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementStart(3, "div")(4, "h3", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275element(9, "p-tag", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", \u0275\u0275interpolate1("", app_r2.name, " icon"))("src", app_r2.iconUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r2.developerName);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", app_r2.pricing.model === "FREE" ? "Free" : app_r2.pricing.currency + " " + app_r2.pricing.price)("severity", app_r2.pricing.model === "FREE" ? "success" : "info");
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r3, " ");
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", app_r2.categories.length - 2, " more ");
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275repeaterCreate(3, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_For_4_Template, 2, 1, "span", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(5, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_Conditional_5_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", app_r2.shortDescription, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(app_r2.categories.slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(app_r2.categories.length > 2 ? 5 : -1);
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "p-rating", 39);
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 41);
    \u0275\u0275element(6, "p-button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", app_r2.averageRating)("readonly", true)("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", app_r2.reviewCount, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, app_r2.id))("outlined", true);
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 22);
    \u0275\u0275template(1, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_1_Template, 10, 7, "ng-template", 23)(2, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_2_Template, 6, 2, "ng-template", 24)(3, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_ng_template_3_Template, 7, 8, "ng-template", 25);
    \u0275\u0275elementEnd();
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_24_Conditional_0_For_2_Template, 4, 0, "p-card", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apps_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(apps_r4);
  }
}
function AppMarketplaceComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275elementStart(2, "h3", 44);
    \u0275\u0275text(3, "No apps found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Try adjusting your search or filters.");
    \u0275\u0275elementEnd()();
  }
}
function AppMarketplaceComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppMarketplaceComponent_Conditional_24_Conditional_0_Template, 3, 0, "div", 16)(1, AppMarketplaceComponent_Conditional_24_Conditional_1_Template, 6, 0, "div", 18);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
var AppMarketplaceComponent = class _AppMarketplaceComponent {
  apps$;
  loading$ = new BehaviorSubject(true);
  error$ = new BehaviorSubject(null);
  searchInput$ = new Subject();
  searchQuery$ = this.searchInput$.pipe(debounceTime(250), startWith(""));
  categoryFilter$ = new BehaviorSubject("All");
  sortOrder$ = new BehaviorSubject("popular");
  // popular, newest, rating
  categories = [
    "All",
    "Fleet Management",
    "Safety",
    "Maintenance",
    "Reporting"
  ];
  sortOptions = [
    { label: "Most Popular", value: "popular" },
    { label: "Newest Arrivals", value: "newest" },
    { label: "Highest Rated", value: "rating" }
  ];
  appStoreService = inject(AppStoreService);
  authDataService = inject(AuthDataService);
  isAdmin = this.authDataService.getUserProfile()?.roles?.some((role) => role.id === DEFAULT_SYSTEM_ID);
  constructor() {
    const allApps$ = this.appStoreService.getApps().pipe(tap(() => this.loading$.next(true)), catchError(() => {
      this.error$.next("Unable to load apps. Please try again.");
      return of([]);
    }), finalize(() => this.loading$.next(false)), shareReplay(1));
    this.apps$ = combineLatest([
      allApps$,
      this.searchQuery$,
      this.categoryFilter$,
      this.sortOrder$
    ]).pipe(map(([apps, query, category, sort]) => {
      const filtered = apps.filter((app) => {
        const matchesSearch = app.name.toLowerCase().includes(query.toLowerCase()) || app.shortDescription.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "All" || app.categories.includes(category);
        return matchesSearch && matchesCategory;
      });
      return filtered.sort((a, b) => {
        if (sort === "popular")
          return b.installCount - a.installCount;
        if (sort === "newest")
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        if (sort === "rating")
          return b.averageRating - a.averageRating;
        return 0;
      });
    }), shareReplay(1));
    this.apps$.subscribe();
  }
  onSearch(query) {
    this.searchInput$.next(query);
  }
  onCategorySelect(category) {
    this.categoryFilter$.next(category);
  }
  onSortChange(sort) {
    this.sortOrder$.next(sort);
  }
  statusSeverity(status) {
    if (status === "APPROVED")
      return "success";
    if (status === "PENDING_REVIEW")
      return "warn";
    if (status === "DRAFT")
      return "secondary";
    if (status === "SUSPENDED")
      return "danger";
    return "info";
  }
  statusLabel(status) {
    return status.toLowerCase().split("_").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
  }
  static \u0275fac = function AppMarketplaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMarketplaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMarketplaceComponent, selectors: [["app-app-marketplace"]], decls: 25, vars: 10, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "p-4", "content-header", "flex-none", "w-full"], [1, "flex", "justify-between", "items-center"], [1, "text-2xl", "font-semibold"], [1, "mt-1"], [1, "flex", "gap-2"], ["routerLink", "admin", "label", "Review Dashboard", "icon", "pi pi-flag", "severity", "secondary"], ["routerLink", "create", "label", "Create New App", "icon", "pi pi-plus", "severity", "primary"], [1, "flex", "flex-col", "md:flex-row", "gap-4", "p-4", "flex-none", "filter-section"], [1, "relative", "flex-grow"], ["iconPosition", "left", 1, "w-full"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search apps...", 1, "w-full", 3, "input"], ["placeholder", "Categories", 1, "w-full", "md:w-56", 3, "onChange", "options"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Sort By", 1, "w-full", "md:w-56", 3, "onChange", "options"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "h-56", "rounded-xl", "bg-gradient-to-r", "from-surface-100", "via-surface-200", "to-surface-100", "border", "border-subtle", "animate-pulse"], [1, "text-center", "py-12"], [1, "pi", "pi-exclamation-triangle", "!text-5xl", "text-danger", "mb-3", "block"], [1, "text-lg", "font-semibold", "mb-2"], [1, "muted"], [1, "flex", "flex-col", "h-full", "rounded-xl", "border", "border-subtle", "bg-surface-card", "shadow-sm", "transition-all", "duration-150", "hover:shadow-md", "hover:-translate-y-0.5"], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "footer"], [1, "flex", "items-start", "justify-between", "p-4", "pb-0"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-lg", "object-cover", 3, "src", "alt"], [1, "font-bold"], [1, "text-xs", "muted"], [1, "flex", "flex-col", "gap-2", "items-end"], [3, "value", "severity"], [1, "text-sm", "line-clamp-3", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "text-xs", "text-text", "border", "border-subtle"], [1, "inline-flex", "items-center", "px-2.5", "py-1", "rounded-full", "text-xs", "text-primary", "border-0"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-1"], [3, "ngModel", "readonly", "stars"], [1, "muted", "text-xs", "ml-1"], [1, "flex", "items-center", "gap-2"], ["label", "Preview", "icon", "pi pi-eye", "size", "small", 3, "routerLink", "outlined"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2"]], template: function AppMarketplaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
      \u0275\u0275text(5, "Telemetry App Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " Enhance your CypherView experience with custom widgets. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275conditionalCreate(9, AppMarketplaceComponent_Conditional_9_Template, 1, 0, "p-button", 6);
      \u0275\u0275element(10, "p-button", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "p-iconField", 10);
      \u0275\u0275element(14, "p-inputicon", 11);
      \u0275\u0275elementStart(15, "input", 12);
      \u0275\u0275listener("input", function AppMarketplaceComponent_Template_input_input_15_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "p-select", 13);
      \u0275\u0275listener("onChange", function AppMarketplaceComponent_Template_p_select_onChange_16_listener($event) {
        return ctx.onCategorySelect($event.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-select", 14);
      \u0275\u0275listener("onChange", function AppMarketplaceComponent_Template_p_select_onChange_17_listener($event) {
        return ctx.onSortChange($event.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275conditionalCreate(19, AppMarketplaceComponent_Conditional_19_Template, 3, 1, "div", 16);
      \u0275\u0275pipe(20, "async");
      \u0275\u0275pipe(21, "async");
      \u0275\u0275pipe(22, "async");
      \u0275\u0275conditionalBranchCreate(23, AppMarketplaceComponent_Conditional_23_Template, 1, 1)(24, AppMarketplaceComponent_Conditional_24_Template, 2, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.isAdmin ? 9 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.sortOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(\u0275\u0275pipeBind1(20, 4, ctx.loading$) ? 19 : (tmp_3_0 = \u0275\u0275pipeBind1(21, 6, ctx.error$)) ? 23 : (tmp_3_0 = \u0275\u0275pipeBind1(22, 8, ctx.apps$)) ? 24 : -1, tmp_3_0);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    PrimeTemplate,
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    TagModule,
    Tag,
    RatingModule,
    Rating,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    CardModule,
    Card,
    AsyncPipe
  ], styles: ["\n\n.filter-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMarketplaceComponent, [{
    type: Component,
    args: [{ selector: "app-app-marketplace", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ButtonModule,
      InputTextModule,
      SelectModule,
      TagModule,
      RatingModule,
      IconFieldModule,
      InputIconModule,
      CardModule
    ], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <!-- Header -->
  <div class="p-4 content-header flex-none w-full">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-semibold">Telemetry App Store</h2>
        <p class="mt-1">
          Enhance your CypherView experience with custom widgets.
        </p>
      </div>
      <div class="flex gap-2">
        @if (isAdmin) {
          <p-button
            routerLink="admin"
            label="Review Dashboard"
            icon="pi pi-flag"
            severity="secondary"
          />
        }
        <p-button
          routerLink="create"
          label="Create New App"
          icon="pi pi-plus"
          severity="primary"
        />
      </div>
    </div>
  </div>

  <!-- Filters & Search -->
  <div class="flex flex-col md:flex-row gap-4 p-4 flex-none filter-section">
    <div class="relative flex-grow">
      <p-iconField iconPosition="left" class="w-full">
        <p-inputicon class="pi pi-search" />
        <input
          type="text"
          pInputText
          placeholder="Search apps..."
          class="w-full"
          (input)="onSearch($event.target.value)"
        />
      </p-iconField>
    </div>

    <p-select
      [options]="categories"
      (onChange)="onCategorySelect($event.value)"
      placeholder="Categories"
      class="w-full md:w-56"
    ></p-select>

    <p-select
      [options]="sortOptions"
      optionLabel="label"
      optionValue="value"
      (onChange)="onSortChange($event.value)"
      placeholder="Sort By"
      class="w-full md:w-56"
    ></p-select>
  </div>

  <!-- App Grid -->
  <div class="flex-1 min-h-0 w-full overflow-auto p-4">
    @if (loading$ | async) {
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (_ of [1, 2, 3, 4, 5, 6]; track _) {
          <div
            class="h-56 rounded-xl bg-gradient-to-r from-surface-100 via-surface-200 to-surface-100 border border-subtle animate-pulse"
          ></div>
        }
      </div>
    } @else if (error$ | async; as error) {
      @if (error) {
        <div class="text-center py-12">
          <span
            class="pi pi-exclamation-triangle !text-5xl text-danger mb-3 block"
          ></span>
          <h3 class="text-lg font-semibold mb-2">{{ error }}</h3>
          <p class="muted">Please refresh or adjust your filters.</p>
        </div>
      }
    } @else if (apps$ | async; as apps) {
      @if (apps.length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (app of apps; track app.id) {
            <p-card
              class="flex flex-col h-full rounded-xl border border-subtle bg-surface-card shadow-sm transition-all duration-150 hover:shadow-md hover:-translate-y-0.5"
            >
              <ng-template pTemplate="header">
                <div class="flex items-start justify-between p-4 pb-0">
                  <div class="flex items-center gap-3">
                    <img
                      [src]="app.iconUrl"
                      alt="{{ app.name }} icon"
                      class="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 class="font-bold">{{ app.name }}</h3>
                      <p class="text-xs muted">{{ app.developerName }}</p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-2 items-end">
                    <p-tag
                      [value]="
                        app.pricing.model === 'FREE'
                          ? 'Free'
                          : app.pricing.currency + ' ' + app.pricing.price
                      "
                      [severity]="
                        app.pricing.model === 'FREE' ? 'success' : 'info'
                      "
                    ></p-tag>
                  </div>
                </div>
              </ng-template>
              <ng-template pTemplate="content">
                <p class="text-sm line-clamp-3 mb-3">
                  {{ app.shortDescription }}
                </p>
                <div class="flex flex-wrap gap-2">
                  @for (
                    category of app.categories.slice(0, 2);
                    track category
                  ) {
                    <span
                      class="inline-flex items-center px-2.5 py-1 rounded-full text-xs text-text border border-subtle"
                    >
                      {{ category }}
                    </span>
                  }
                  @if (app.categories.length > 2) {
                    <span
                      class="inline-flex items-center px-2.5 py-1 rounded-full text-xs text-primary border-0"
                    >
                      +{{ app.categories.length - 2 }} more
                    </span>
                  }
                </div>
              </ng-template>
              <ng-template pTemplate="footer">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-1">
                    <p-rating
                      [ngModel]="app.averageRating"
                      [readonly]="true"
                      [stars]="5"
                    ></p-rating>
                    <span class="muted text-xs ml-1"
                      >({{ app.reviewCount }})</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <p-button
                      [routerLink]="[app.id]"
                      label="Preview"
                      icon="pi pi-eye"
                      size="small"
                      [outlined]="true"
                    />
                  </div>
                </div>
              </ng-template>
            </p-card>
          }
        </div>
      } @else {
        <!-- Empty State -->
        <div class="text-center py-12">
          <span class="pi pi-inbox !text-6xl muted mb-4"></span>
          <h3 class="text-lg font-medium mb-2">No apps found</h3>
          <p class="muted">Try adjusting your search or filters.</p>
        </div>
      }
    }
  </div>
</div>
`, styles: ["/* src/app/features/app-store/pages/app-marketplace/app-marketplace.component.scss */\n.filter-section {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n:host {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMarketplaceComponent, { className: "AppMarketplaceComponent", filePath: "src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts", lineNumber: 52 });
})();
export {
  AppMarketplaceComponent
};
//# sourceMappingURL=chunk-GJTEO2UH.js.map
