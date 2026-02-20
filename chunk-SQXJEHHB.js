import {
  EntityDetailsLoaderService
} from "./chunk-6KKY4MOV.js";
import {
  EntityDetailsStateService,
  GenericDetailsContainerComponent
} from "./chunk-FC26RJEU.js";
import {
  ActivatedRoute,
  BroadcastEventMessageService,
  Location,
  NavigationEnd,
  Router,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  DestroyRef,
  Injectable,
  Subject,
  debounceTime,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/services/entity/entity-url-parser.service.ts
var EntityUrlParserService = class _EntityUrlParserService {
  router = inject(Router);
  // Default configuration
  config = {
    routeDepth: 3
    // How many segments define a "parent" route
  };
  /**
   * Configure service options
   */
  configure(options) {
    this.config = __spreadValues(__spreadValues({}, this.config), options);
  }
  /**
   * Extract the base route without query params
   * Example: /administration/assets/list → /administration/assets/list
   * @param url - The URL to extract the base route from
   * @returns The base route without query params
   */
  getBaseRoute(url) {
    const baseUrl = url.split("?")[0];
    const regex = /^(\/[^/]+\/[^/]+\/[^/]+)/;
    const mainSectionMatch = regex.exec(baseUrl);
    return mainSectionMatch ? mainSectionMatch[1] : baseUrl;
  }
  /**
   * Check if two routes belong to the same parent section
   * Example: /administration/assets/list and /administration/assets/details are same parent
   * @param route1 - The first route to compare
   * @param route2 - The second route to compare
   * @returns True if the routes belong to the same parent section, false otherwise
   */
  isSameParentRoute(route1, route2) {
    const segments = this.config.routeDepth;
    const pattern = `^(${"/[^/]+".repeat(segments)})`;
    const parentSegmentRegex = new RegExp(pattern);
    const parent1 = route1 ? parentSegmentRegex.exec(route1)?.[1] : void 0;
    const parent2 = route2 ? parentSegmentRegex.exec(route2)?.[1] : void 0;
    return parent1 === parent2;
  }
  /**
   * Get grid type from URL based on pattern matching
   * Example: /administration/assets → "assets"
   * @param url - The URL to extract the grid type from
   * @returns The extracted grid type
   */
  getGridTypeFromUrl(url = this.router.url) {
    const patterns = [
      { regex: /\/hardware\/([^/?]+)/, groupIndex: 1 },
      { regex: /\/profiles\/([^/?]+)/, groupIndex: 1 },
      { regex: /\/providers\/([^/?]+)/, groupIndex: 1 },
      { regex: /\/([^/]+)\/([^/?]+)$/, groupIndex: 2 }
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern.regex);
      if (match && match.length > pattern.groupIndex) {
        return match[pattern.groupIndex];
      }
    }
    return "";
  }
  /**
   * Extract entity details from query params
   * @param queryParams - The query parameters to extract details from
   * @param paramNames - The parameter names to use for extraction
   * @returns The extracted entity details
   */
  extractEntityDetailsFromUrl(queryParams, paramNames = { id: "details", type: "type" }) {
    return {
      id: queryParams[paramNames.id],
      type: queryParams[paramNames.type]
    };
  }
  /**
   * Determine if a URL parameter indicates an entity details view
   * @param url - The URL to check
   * @param paramNames - The parameter names to use for checking
   * @returns True if the URL indicates an entity details view, false otherwise
   */
  isEntityDetailsUrl(url, paramNames = { id: "details", type: "type" }) {
    const queryParams = new URLSearchParams(url.split("?")[1] || "");
    return queryParams.has(paramNames.id) && queryParams.has(paramNames.type);
  }
  static \u0275fac = function EntityUrlParserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityUrlParserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntityUrlParserService, factory: _EntityUrlParserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntityUrlParserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/entity/entity-url-management.service.ts
var EntityUrlManagementService = class _EntityUrlManagementService {
  router = inject(Router);
  location = inject(Location);
  urlParser = inject(EntityUrlParserService);
  // Default configuration - can be injected or provided as options
  config = {
    paramNames: {
      id: "details",
      type: "type"
    }
  };
  /**
   * Configure service options
   */
  configure(options) {
    this.config = __spreadValues(__spreadValues({}, this.config), options);
  }
  /**
   * This method updates the URL to include the ID and type of the entity
   * for the details panel.
   * This is useful for sharing links or bookmarking specific entity details.
   * @param item - The entity item to update the URL for
   */
  async updateUrlForDetails(item) {
    try {
      if (isNullOrUndefined(item) || isNullOrUndefined(item["id"]))
        return;
      const currentUrl = this.router.url;
      const [baseUrl, queryString] = currentUrl.split("?");
      const queryParams = new URLSearchParams(queryString || "");
      queryParams.set(this.config.paramNames.id, String(item["id"]));
      queryParams.set(this.config.paramNames.type, item["entityType"]?.toString() ?? this.urlParser.getGridTypeFromUrl(this.router.url));
      this.location.replaceState(baseUrl, queryParams.toString());
    } catch (error) {
      console.error("Error updating URL for details:", error);
    }
  }
  /**
   * Clean up URL parameters related to details
   */
  cleanUpUrlParams() {
    const currentUrl = this.router.url;
    const urlParts = currentUrl.split("?");
    const baseUrl = urlParts[0];
    const queryParams = new URLSearchParams(urlParts[1] || "");
    queryParams.delete(this.config.paramNames.id);
    queryParams.delete(this.config.paramNames.type);
    const remainingParams = queryParams.toString();
    const newUrl = remainingParams ? `${baseUrl}?${remainingParams}` : baseUrl;
    this.location.replaceState(newUrl);
  }
  /**
   * Generate a URL with entity details parameters
   * Useful for creating links to specific entities
   * @param baseUrl - The base URL to append the query parameters to
   * @param entityId - The ID of the entity
   * @param entityType - The type of the entity
   * @returns The generated URL with entity details parameters
   */
  generateEntityDetailsUrl(baseUrl, entityId, entityType) {
    const queryParams = new URLSearchParams();
    queryParams.set(this.config.paramNames.id, entityId);
    queryParams.set(this.config.paramNames.type, entityType);
    return `${baseUrl}?${queryParams.toString()}`;
  }
  /**
   * Check if current URL has entity details parameters
   * @param queryParams - The query parameters to check
   * @returns True if the URL has entity details parameters, false otherwise
   */
  hasEntityDetailsParams(queryParams) {
    return !!(queryParams[this.config.paramNames.id] && queryParams[this.config.paramNames.type]);
  }
  static \u0275fac = function EntityUrlManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityUrlManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntityUrlManagementService, factory: _EntityUrlManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntityUrlManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/entity/entity-details-url.service.ts
var DetailsUrlService = class _DetailsUrlService {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  stateService = inject(EntityDetailsStateService);
  loaderService = inject(EntityDetailsLoaderService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  // Inject our new focused services
  urlParser = inject(EntityUrlParserService);
  urlManager = inject(EntityUrlManagementService);
  urlCheckSubject = new Subject();
  currentGridType = signal(null, ...ngDevMode ? [{ debugName: "currentGridType" }] : []);
  currentRoute = signal("", ...ngDevMode ? [{ debugName: "currentRoute" }] : []);
  initialized = signal(false, ...ngDevMode ? [{ debugName: "initialized" }] : []);
  config = {
    paramNames: {
      id: "details",
      type: "type"
    },
    processingDelay: 100
  };
  constructor() {
    this.broadcastService.on("entity-deleted").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.urlManager.cleanUpUrlParams();
    });
  }
  /**
   * Configure all related services
   * @param options - Partial configuration object
   * @example
   * service.configure({
   *  paramNames: {
   *   id: 'details',
   *   type: 'type',
   *  },
   *  processingDelay: 100,
   * });
   *
   * @returns void
   */
  configure(options) {
    this.config = __spreadValues(__spreadValues({}, this.config), options);
    this.urlManager.configure({ paramNames: this.config.paramNames });
    this.urlParser.configure({ routeDepth: 3 });
  }
  /**
   * Initialize URL handling and listeners
   */
  initialize() {
    this.urlCheckSubject.pipe(debounceTime(this.config.processingDelay), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.processUrlCheck();
    });
    this.currentRoute.set(this.urlParser.getBaseRoute(this.router.url));
    this.currentGridType.set(this.urlParser.getGridTypeFromUrl());
    this.initialized.set(true);
    this.checkUrlForDetailsPanel();
    this.setupBroadcastListener();
    this.setupRouteListeners();
    if (this.router.url.includes("?")) {
      this.checkUrlForDetailsPanel();
    }
  }
  /**
   * Set up broadcast listener for grid selection
   */
  setupBroadcastListener() {
    this.broadcastService.on("grid-item-selected").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      if (isDefined(data.item) && isDefined(data.item.id) && isDefined(data.item.entityType)) {
        this.stateService.isLoading.set(true);
        this.loaderService.loadEntityDetails(String(data.item.entityType), String(data.item.id));
      } else {
        this.stateService.openDetailsPanel(data.item, data.componentType ?? GenericDetailsContainerComponent);
      }
      this.urlManager.updateUrlForDetails(data.item).catch(() => {
      });
    });
    this.broadcastService.on("tree-item-selected").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      if (isDefined(data.item) && isDefined(data.item.id) && isDefined(data.item.entityType)) {
        this.stateService.isLoading.set(true);
        this.loaderService.loadEntityDetails(String(data.item.entityType), String(data.item.id));
      } else {
        this.stateService.openDetailsPanel(data.item, data.componentType ?? GenericDetailsContainerComponent);
      }
      this.urlManager.updateUrlForDetails(data.item).catch(() => {
      });
    });
  }
  /**
   * Set up route change listeners
   */
  setupRouteListeners() {
    let previousUrl = this.router.url;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      const currentUrl = event.url;
      this.handleRouteChange(previousUrl, currentUrl);
      const currentGridType = this.urlParser.getGridTypeFromUrl();
      if (this.currentGridType() !== null && this.currentGridType() !== currentGridType && !this.urlParser.isSameParentRoute(this.currentRoute(), this.router.url) && this.stateService.showPanel()) {
        this.closeDetailsPanel();
      }
      this.currentGridType.set(currentGridType);
      this.currentRoute.set(this.urlParser.getBaseRoute(this.router.url));
      this.checkUrlForDetailsPanel();
      previousUrl = currentUrl;
    });
  }
  /**
   * Trigger a check of URL parameters for the details panel
   */
  checkUrlForDetailsPanel() {
    this.urlCheckSubject.next();
  }
  /**
   * Process the URL check after debouncing
   */
  processUrlCheck() {
    try {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      const entityId = queryParams[this.config.paramNames.id];
      const entityType = queryParams[this.config.paramNames.type];
      if (isDefined(entityId) && isDefined(entityType)) {
        this.loaderService.loadEntityDetails(entityType, entityId);
      } else if (this.stateService.showPanel()) {
        if (this.initialized()) {
          this.closeDetailsPanel();
        }
      }
    } catch (error) {
      console.error("Error checking URL for details panel:", error);
    }
  }
  /**
   * Update URL with details panel state
   */
  async updateUrlForDetails(item) {
    return this.urlManager.updateUrlForDetails(item);
  }
  /**
   * Close details panel and clean up URL
   */
  closeDetailsPanel() {
    if (!this.stateService.showPanel())
      return;
    this.urlManager.cleanUpUrlParams();
    this.stateService.closeDetailsPanel();
    this.broadcastService.broadcast("details-panel-closed", {
      reason: "panel closed"
    });
  }
  /**
   * Handle route change while preserving details state
   */
  handleRouteChange(previousUrl, currentUrl) {
    const previousBase = this.urlParser.getBaseRoute(previousUrl);
    const currentBase = this.urlParser.getBaseRoute(currentUrl);
    if (previousBase === currentBase) {
      this.checkUrlForDetailsPanel();
    } else {
      this.closeDetailsPanel();
    }
  }
  /**
   * Synchronize details panel state with URL query parameters
   */
  syncDetailsStateWithUrl() {
    const currentUrl = this.router.url;
    const item = this.stateService.selectedItem();
    if (this.stateService.showPanel() && item) {
      if (!currentUrl.includes("details=") || !currentUrl.includes("type=")) {
        this.updateUrlForDetails(item).catch(() => {
        });
      }
    } else if (!this.stateService.showPanel()) {
      if (currentUrl.includes("details=") || currentUrl.includes("type=")) {
        this.closeDetailsPanel();
      }
    }
  }
  static \u0275fac = function DetailsUrlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsUrlService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetailsUrlService, factory: _DetailsUrlService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsUrlService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/features/administration/services/entity/entity-details.service.ts
var EntityDetailsService = class _EntityDetailsService {
  stateService = inject(EntityDetailsStateService);
  urlService = inject(DetailsUrlService);
  // Expose signals from state service
  showPanel = this.stateService.showPanel;
  selectedItem = this.stateService.selectedItem;
  detailsComponent = this.stateService.detailsComponent;
  detailsInputs = this.stateService.detailsInputs;
  isLoading = this.stateService.isLoading;
  isSoftRefreshing = this.stateService.isSoftRefreshing;
  constructor() {
    this.urlService.initialize();
  }
  /**
   * Open the details panel with the specified item and component
   */
  openDetailsPanel(item, componentType) {
    this.stateService.openDetailsPanel(item, componentType);
    this.urlService.updateUrlForDetails(item).catch(() => {
    });
  }
  /**
   * Close the details panel and clean up URL
   */
  closeDetailsPanel() {
    this.urlService.closeDetailsPanel();
  }
  /**
   * Get display title for the currently selected item
   */
  getSelectedItemTitle() {
    return this.stateService.getSelectedItemTitle();
  }
  /**
   * Get the type of the currently selected item
   */
  getSelectedItemType() {
    return this.stateService.getSelectedItemType();
  }
  /**
   * Get the ID of the currently selected item
   */
  getSelectedItemId() {
    return this.stateService.getSelectedItemId();
  }
  /**
   * Soft refresh the currently selected item without affecting accordion states
   * This method preserves UI state while updating entity data
   */
  softRefreshSelectedItem(updatedItem) {
    this.stateService.softRefreshSelectedItem(updatedItem);
  }
  /**
   * Synchronize details panel state with URL query parameters
   * Call this when URL might be out of sync with panel state
   */
  syncDetailsStateWithUrl() {
    this.urlService.syncDetailsStateWithUrl();
  }
  static \u0275fac = function EntityDetailsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EntityDetailsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntityDetailsService, factory: _EntityDetailsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntityDetailsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  EntityDetailsService
};
//# sourceMappingURL=chunk-SQXJEHHB.js.map
