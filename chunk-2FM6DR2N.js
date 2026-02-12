import {
  getStatusLabel,
  getStatusSeverity
} from "./chunk-34DNJRCO.js";
import {
  AppStoreService
} from "./chunk-KKJZ2E25.js";
import {
  TagModule
} from "./chunk-SF4BLP37.js";
import {
  CardModule
} from "./chunk-2DEN7H4U.js";
import {
  RatingModule
} from "./chunk-AGRHEECN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  Select,
  SelectModule
} from "./chunk-ZDIAR5KI.js";
import {
  FormsModule,
  InputText,
  InputTextModule,
  Tooltip,
  TooltipModule
} from "./chunk-6WBFSM47.js";
import {
  Button,
  ButtonModule
} from "./chunk-DPU26QQS.js";
import {
  PrimeTemplate
} from "./chunk-B3O4OKMN.js";
import {
  ApiUrlService,
  AuthDataService,
  CommonModule,
  HttpClient,
  HttpParams,
  RouterLink,
  RouterModule,
  toSignal
} from "./chunk-TG6TG2JG.js";
import {
  Component,
  Injectable,
  Subject,
  catchError,
  computed,
  debounceTime,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J5TUQDPD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/app-store/services/app-installation.service.ts
var AppInstallationService = class _AppInstallationService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl;
  constructor() {
    this.baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/appstore/installations`;
  }
  /**
   * Get all app installations for a user/organization
   * @param params Query parameters for filtering
   */
  getInstallations(params) {
    let httpParams = new HttpParams();
    if (params) {
      if (params.owner !== void 0) {
        httpParams = httpParams.set("owner", params.owner);
      }
      if (params.offset !== void 0) {
        httpParams = httpParams.set("offset", params.offset.toString());
      }
      if (params.limit !== void 0) {
        httpParams = httpParams.set("limit", params.limit.toString());
      }
      if (params.sort !== void 0) {
        httpParams = httpParams.set("sort", params.sort);
      }
      if (params.filter !== void 0) {
        httpParams = httpParams.set("filter", params.filter);
      }
    }
    return this.http.get(this.baseUrl, {
      params: httpParams
    }).pipe(map((response) => response.items.map((item) => this.mapFromApi(item))));
  }
  /**
   * Get a specific installation by ID
   * @param id Installation ID
   * @param owner Optional owner filter
   */
  getInstallation(id, owner) {
    let httpParams = new HttpParams();
    if (owner !== void 0) {
      httpParams = httpParams.set("owner", owner);
    }
    return this.http.get(`${this.baseUrl}/${id}`, {
      params: httpParams
    }).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Install an app for a user/organization
   * @param appId The app to install
   * @param ownerId The owner (user/org) installing the app
   * @param configuration Optional initial configuration
   */
  installApp(appId, ownerId, configuration) {
    const request = {
      appId,
      ownerId,
      configuration
    };
    return this.http.post(this.baseUrl, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Uninstall an app
   * @param id Installation ID
   * @param owner Optional owner filter
   */
  uninstallApp(id, owner) {
    let httpParams = new HttpParams();
    if (owner !== void 0) {
      httpParams = httpParams.set("owner", owner);
    }
    return this.http.delete(`${this.baseUrl}/${id}`, {
      params: httpParams
    });
  }
  /**
   * Update app configuration
   * @param id Installation ID
   * @param ownerId Owner ID
   * @param configuration New configuration
   */
  updateConfiguration(id, ownerId, configuration) {
    const request = {
      id,
      ownerId,
      configuration
    };
    return this.http.patch(`${this.baseUrl}/${id}/config`, request).pipe(map((response) => this.mapFromApi(response)));
  }
  /**
   * Maps API response to frontend model
   */
  mapFromApi(apiResponse) {
    return {
      id: apiResponse.id,
      ownerId: apiResponse.ownerId,
      appId: apiResponse.appId,
      appName: apiResponse.appName,
      isEnabled: apiResponse.isEnabled,
      configuration: apiResponse.configuration,
      createdAt: apiResponse.createdDate,
      updatedAt: apiResponse.updatedDate
    };
  }
  static \u0275fac = function AppInstallationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInstallationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInstallationService, factory: _AppInstallationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInstallationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = (a0) => [a0];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function AppMarketplaceComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function AppMarketplaceComponent_For_12_Template_p_button_onClick_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStatusFilterChange(option_r2.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("label", option_r2.label)("severity", ctx_r2.statusFilter() === option_r2.value ? "primary" : "secondary")("outlined", ctx_r2.statusFilter() !== option_r2.value);
  }
}
function AppMarketplaceComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
}
function AppMarketplaceComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_14_For_2_Template, 1, 0, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AppMarketplaceComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, " Please check your connection or try again later. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function AppMarketplaceComponent_Conditional_16_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
}
function AppMarketplaceComponent_Conditional_16_For_2_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r4, " ");
  }
}
function AppMarketplaceComponent_Conditional_16_For_2_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 45);
  }
}
function AppMarketplaceComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275element(4, "img", 25);
    \u0275\u0275conditionalCreate(5, AppMarketplaceComponent_Conditional_16_For_2_Conditional_5_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 29)(10, "h3", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 32)(15, "p", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 34);
    \u0275\u0275repeaterCreate(18, AppMarketplaceComponent_Conditional_16_For_2_For_19_Template, 2, 1, "span", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 36)(21, "div", 37)(22, "div", 38);
    \u0275\u0275element(23, "i", 39);
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "p-button", 42);
    \u0275\u0275template(29, AppMarketplaceComponent_Conditional_16_For_2_ng_template_29_Template, 1, 0, "ng-template", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const app_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate1("", app_r5.name, " icon"))("src", app_r5.iconUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(app_r5.isInstalled ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r5.pricing.model === "FREE" ? "Free" : app_r5.pricing.currency + " " + app_r5.pricing.price, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" By ", app_r5.developerName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r5.shortDescription, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(app_r5.categories.slice(0, 2));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(app_r5.averageRating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", app_r5.reviewCount, ")");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c1, app_r5.id))("text", true);
  }
}
function AppMarketplaceComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, AppMarketplaceComponent_Conditional_16_For_2_Template, 30, 14, "div", 21, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.apps());
  }
}
function AppMarketplaceComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275elementStart(2, "h3", 47);
    \u0275\u0275text(3, "No apps found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, "Try adjusting your search or filters.");
    \u0275\u0275elementEnd()();
  }
}
var AppMarketplaceComponent = class _AppMarketplaceComponent {
  appStoreService = inject(AppStoreService);
  appInstallationService = inject(AppInstallationService);
  authDataService = inject(AuthDataService);
  // State Signals
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  categoryFilter = signal("All", ...ngDevMode ? [{ debugName: "categoryFilter" }] : []);
  statusFilter = signal("ALL", ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  sortOrder = signal("popular", ...ngDevMode ? [{ debugName: "sortOrder" }] : []);
  // Static Data
  categories = [
    "All",
    "Fleet Management",
    "Safety",
    "Maintenance",
    "Reporting"
  ];
  statusOptions = [
    { label: "All Apps", value: "ALL" },
    { label: "Installed", value: "INSTALLED" },
    { label: "Available", value: "AVAILABLE" }
  ];
  sortOptions = [
    { label: "Most Popular", value: "popular" },
    { label: "Newest Arrivals", value: "newest" },
    { label: "Highest Rated", value: "rating" }
  ];
  searchInput$ = new Subject();
  searchQuery$ = this.searchInput$.pipe(debounceTime(250), startWith(""));
  searchQuery = toSignal(this.searchQuery$, { initialValue: "" });
  // Data Signals
  rawApps = toSignal(this.appStoreService.getApps().pipe(catchError(() => {
    this.error.set("Unable to load apps. Please try again.");
    return of([]);
  })), { initialValue: [] });
  userInstallations = toSignal(this.appInstallationService.getInstallations({
    owner: this.authDataService.getUserProfile()?.id
  }).pipe(catchError(() => of([]))), { initialValue: [] });
  // Computed Signal for Filtered & Sorted Apps
  apps = computed(() => {
    const apps = this.rawApps();
    const installations = this.userInstallations();
    const query = (this.searchQuery() || "").toLowerCase();
    const category = this.categoryFilter();
    const status = this.statusFilter();
    const sort = this.sortOrder();
    const installedAppIds = new Set(installations.map((i) => i.appId));
    const enhancedApps = apps.map((app) => __spreadProps(__spreadValues({}, app), {
      isInstalled: installedAppIds.has(app.id)
    }));
    const filtered = enhancedApps.filter((app) => {
      const matchesSearch = app.name.toLowerCase().includes(query) || app.shortDescription.toLowerCase().includes(query);
      const matchesCategory = category === "All" || app.categories.includes(category);
      const matchesStatus = status === "ALL" || status === "INSTALLED" && app.isInstalled || status === "AVAILABLE" && !app.isInstalled;
      return matchesSearch && matchesCategory && matchesStatus;
    });
    if (this.isLoading() && apps.length > 0) {
      setTimeout(() => this.isLoading.set(false));
    }
    return filtered.sort((a, b) => {
      if (sort === "popular")
        return b.installCount - a.installCount;
      if (sort === "newest")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
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
  onStatusFilterChange(status) {
    this.statusFilter.set(status);
  }
  onSortChange(sort) {
    this.sortOrder.set(sort);
  }
  // Delegate to shared utility functions
  statusSeverity = getStatusSeverity;
  statusLabel = getStatusLabel;
  static \u0275fac = function AppMarketplaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMarketplaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMarketplaceComponent, selectors: [["app-app-marketplace"]], decls: 18, vars: 4, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex", "flex-col", "gap-4", "p-4", "flex-none", "filter-section", "bg-surface-0", "border-b", "border-subtle"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "relative", "flex-grow"], ["iconPosition", "left", 1, "w-full"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search integrations...", 1, "w-full", "!bg-surface-50", "border-none", "shadow-none", "focus:!bg-surface-0", "focus:ring-2", "focus:ring-primary/20", 3, "input"], [1, "flex", "gap-2"], ["placeholder", "Categories", 1, "w-full", "md:w-48", 3, "onChange", "options"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Sort By", 1, "w-full", "md:w-48", 3, "onChange", "options"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "label", "severity", "outlined"], [1, "flex-1", "min-h-0", "w-full", "overflow-auto", "p-6", "bg-surface-50"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "text-center", "py-12"], ["size", "small", "rounded", "true", 1, "!text-xs", "font-semibold", 3, "onClick", "label", "severity", "outlined"], [1, "h-64", "rounded-2xl", "bg-surface-200", "animate-pulse", "border", "border-subtle"], [1, "w-16", "h-16", "bg-red-50", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "pi", "pi-exclamation-triangle", "text-3xl", "text-red-500"], [1, "text-xl", "font-bold", "text-surface-900", "mb-2"], [1, "text-surface-600"], [1, "group", "relative", "flex", "flex-col", "h-full", "rounded-2xl", "border", "border-subtle", "bg-surface-0", "shadow-sm", "transition-all", "duration-300", "hover:shadow-xl", "hover:-translate-y-1", "overflow-hidden"], [1, "p-5", "pb-0"], [1, "flex", "items-start", "justify-between"], [1, "relative"], [1, "w-14", "h-14", "rounded-xl", "object-cover", "shadow-sm", "bg-surface-100", 3, "src", "alt"], ["pTooltip", "Installed", 1, "absolute", "-top-2", "-right-2", "bg-green-500", "text-white", "w-6", "h-6", "rounded-full", "flex", "items-center", "justify-center", "border-2", "border-white", "shadow-sm"], [1, "flex", "flex-col", "gap-1", "items-end"], [1, "text-xs", "font-bold", "px-2", "py-1", "rounded", "bg-surface-100", "text-surface-600"], [1, "mt-4"], [1, "text-lg", "font-bold", "text-surface-900", "group-hover:text-primary", "transition-colors", "line-clamp-1"], [1, "text-xs", "text-surface-500", "font-medium"], [1, "p-5", "py-4", "flex-grow"], [1, "text-sm", "text-surface-600", "line-clamp-2", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-1.5", "mt-4"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "bg-primary/5", "text-primary", "border", "border-primary/10"], [1, "p-5", "pt-0", "mt-auto"], [1, "flex", "items-center", "justify-between", "border-t", "border-surface-100", "pt-4"], [1, "flex", "items-center", "gap-1.5"], [1, "pi", "pi-star-fill", "text-yellow-400", "text-xs"], [1, "text-sm", "font-bold", "text-surface-700"], [1, "text-[10px]", "text-surface-400"], ["label", "View Details", "size", "small", 1, "!p-0", "!text-primary", "font-bold", "transition-all", "hover:gap-1", 3, "routerLink", "text"], ["pTemplate", "icon"], [1, "pi", "pi-check", "text-[10px]", "font-bold"], [1, "pi", "pi-arrow-right", "text-xs"], [1, "pi", "pi-inbox", "!text-6xl", "muted", "mb-4"], [1, "text-lg", "font-medium", "mb-2"], [1, "muted"]], template: function AppMarketplaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-iconField", 4);
      \u0275\u0275element(5, "p-inputicon", 5);
      \u0275\u0275elementStart(6, "input", 6);
      \u0275\u0275listener("input", function AppMarketplaceComponent_Template_input_input_6_listener($event) {
        return ctx.onSearch($event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 7)(8, "p-select", 8);
      \u0275\u0275listener("onChange", function AppMarketplaceComponent_Template_p_select_onChange_8_listener($event) {
        return ctx.onCategorySelect($event.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-select", 9);
      \u0275\u0275listener("onChange", function AppMarketplaceComponent_Template_p_select_onChange_9_listener($event) {
        return ctx.onSortChange($event.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275repeaterCreate(11, AppMarketplaceComponent_For_12_Template, 1, 3, "p-button", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275conditionalCreate(14, AppMarketplaceComponent_Conditional_14_Template, 3, 1, "div", 12)(15, AppMarketplaceComponent_Conditional_15_Template, 7, 1, "div", 13);
      \u0275\u0275conditionalCreate(16, AppMarketplaceComponent_Conditional_16_Template, 3, 0, "div", 12)(17, AppMarketplaceComponent_Conditional_17_Template, 6, 0, "div", 14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("options", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.sortOptions);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statusOptions);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoading() ? 14 : ctx.error() ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.apps().length > 0 ? 16 : 17);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    ButtonModule,
    Button,
    PrimeTemplate,
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    TagModule,
    RatingModule,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    CardModule,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n.filter-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n[_nghost-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMarketplaceComponent, [{
    type: Component,
    args: [{ selector: "app-app-marketplace", imports: [
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
      CardModule,
      TooltipModule
    ], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <!-- Filters & Search -->
  <div
    class="flex flex-col gap-4 p-4 flex-none filter-section bg-surface-0 border-b border-subtle"
  >
    <div class="flex flex-col md:flex-row gap-4">
      <div class="relative flex-grow">
        <p-iconField iconPosition="left" class="w-full">
          <p-inputicon class="pi pi-search" />
          <input
            type="text"
            pInputText
            placeholder="Search integrations..."
            class="w-full !bg-surface-50 border-none shadow-none focus:!bg-surface-0 focus:ring-2 focus:ring-primary/20"
            (input)="onSearch($event.target.value)"
          />
        </p-iconField>
      </div>

      <div class="flex gap-2">
        <p-select
          [options]="categories"
          (onChange)="onCategorySelect($event.value)"
          placeholder="Categories"
          class="w-full md:w-48"
        ></p-select>

        <p-select
          [options]="sortOptions"
          optionLabel="label"
          optionValue="value"
          (onChange)="onSortChange($event.value)"
          placeholder="Sort By"
          class="w-full md:w-48"
        ></p-select>
      </div>
    </div>

    <div class="flex gap-2">
      @for (option of statusOptions; track option.value) {
        <p-button
          [label]="option.label"
          [severity]="statusFilter() === option.value ? 'primary' : 'secondary'"
          [outlined]="statusFilter() !== option.value"
          size="small"
          rounded="true"
          (onClick)="onStatusFilterChange(option.value)"
          class="!text-xs font-semibold"
        />
      }
    </div>
  </div>

  <!-- App Grid -->
  <div class="flex-1 min-h-0 w-full overflow-auto p-6 bg-surface-50">
    @if (isLoading()) {
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        @for (_ of [1, 2, 3, 4, 5, 6, 7, 8]; track _) {
          <div
            class="h-64 rounded-2xl bg-surface-200 animate-pulse border border-subtle"
          ></div>
        }
      </div>
    } @else if (error()) {
      <div class="flex flex-col items-center justify-center py-20 text-center">
        <div
          class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4"
        >
          <i class="pi pi-exclamation-triangle text-3xl text-red-500"></i>
        </div>
        <h3 class="text-xl font-bold text-surface-900 mb-2">{{ error() }}</h3>
        <p class="text-surface-600">
          Please check your connection or try again later.
        </p>
      </div>
    }

    @if (apps().length > 0) {
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        @for (app of apps(); track app.id) {
          <div
            class="group relative flex flex-col h-full rounded-2xl border border-subtle bg-surface-0 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            <!-- Card Header -->
            <div class="p-5 pb-0">
              <div class="flex items-start justify-between">
                <div class="relative">
                  <img
                    [src]="app.iconUrl"
                    alt="{{ app.name }} icon"
                    class="w-14 h-14 rounded-xl object-cover shadow-sm bg-surface-100"
                  />
                  @if (app.isInstalled) {
                    <div
                      class="absolute -top-2 -right-2 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                      pTooltip="Installed"
                    >
                      <i class="pi pi-check text-[10px] font-bold"></i>
                    </div>
                  }
                </div>
                <div class="flex flex-col gap-1 items-end">
                  <span
                    class="text-xs font-bold px-2 py-1 rounded bg-surface-100 text-surface-600"
                  >
                    {{
                      app.pricing.model === 'FREE'
                        ? 'Free'
                        : app.pricing.currency + ' ' + app.pricing.price
                    }}
                  </span>
                </div>
              </div>

              <div class="mt-4">
                <h3
                  class="text-lg font-bold text-surface-900 group-hover:text-primary transition-colors line-clamp-1"
                >
                  {{ app.name }}
                </h3>
                <p class="text-xs text-surface-500 font-medium">
                  By {{ app.developerName }}
                </p>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-5 py-4 flex-grow">
              <p class="text-sm text-surface-600 line-clamp-2 leading-relaxed">
                {{ app.shortDescription }}
              </p>
              <div class="flex flex-wrap gap-1.5 mt-4">
                @for (category of app.categories.slice(0, 2); track category) {
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
              <div
                class="flex items-center justify-between border-t border-surface-100 pt-4"
              >
                <div class="flex items-center gap-1.5">
                  <i class="pi pi-star-fill text-yellow-400 text-xs"></i>
                  <span class="text-sm font-bold text-surface-700">{{
                    app.averageRating
                  }}</span>
                  <span class="text-[10px] text-surface-400"
                    >({{ app.reviewCount }})</span
                  >
                </div>
                <p-button
                  [routerLink]="[app.id]"
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
  </div>
</div>
`, styles: ["/* src/app/features/app-store/pages/app-marketplace/app-marketplace.component.scss */\n.filter-section {\n  border-bottom: 1px solid var(--border-subtle, #e5e7eb);\n}\n:host {\n  font-family: var(--font-family);\n  font-size: var(--base-font-size);\n  font-weight: var(--font-weight);\n  background: var(--main-background-color);\n  color: var(--nav-text-color);\n}\n/*# sourceMappingURL=app-marketplace.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMarketplaceComponent, { className: "AppMarketplaceComponent", filePath: "src/app/features/app-store/pages/app-marketplace/app-marketplace.component.ts", lineNumber: 46 });
})();
export {
  AppMarketplaceComponent
};
//# sourceMappingURL=chunk-2FM6DR2N.js.map
