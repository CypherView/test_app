import {
  Platform,
  coerceArray
} from "./chunk-2CFUVUYH.js";
import {
  Splitter,
  SplitterModule
} from "./chunk-FIF626MM.js";
import {
  LocalStorageService,
  takeUntilDestroyed
} from "./chunk-BQ2AEPEH.js";
import {
  ButtonModule,
  PrimeTemplate
} from "./chunk-SIZTMCIF.js";
import {
  hasProperty,
  isArray,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString
} from "./chunk-UW6Q2JGR.js";
import {
  CommonModule,
  NgClass,
  NgTemplateOutlet
} from "./chunk-L35GT5ED.js";
import {
  CSP_NONCE,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Injectable,
  NgModule,
  NgZone,
  Observable,
  Renderer2,
  Subject,
  combineLatest,
  computed,
  concat,
  debounceTime,
  effect,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  skip,
  startWith,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-7FSD67AL.js";

// node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
  _platform = inject(Platform);
  _nonce = inject(CSP_NONCE, {
    optional: true
  });
  /** The internal matchMedia method to return back a MediaQueryList like object. */
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
  static \u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaMatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MediaMatcher,
    factory: _MediaMatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var BreakpointObserver = class _BreakpointObserver {
  _mediaMatcher = inject(MediaMatcher);
  _zone = inject(NgZone);
  /**  A map of all media queries currently being listened for. */
  _queries = /* @__PURE__ */ new Map();
  /** A subject for all other observables to takeUntil based on. */
  _destroySubject = new Subject();
  constructor() {
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
  static \u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreakpointObserver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BreakpointObserver,
    factory: _BreakpointObserver.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule = class _LayoutModule {
  static \u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _LayoutModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var Breakpoints = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};

// src/app/shared/components/splitter/adaptive-layout/adaptive-layout.component.ts
function AdaptiveLayoutComponent_Conditional_1_For_2_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AdaptiveLayoutComponent_Conditional_1_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275template(2, AdaptiveLayoutComponent_Conditional_1_For_2_ng_template_0_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const panel_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", panel_r3.scrollable ? "overflow-auto" : "overflow-hidden");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", panel_r3.content);
  }
}
function AdaptiveLayoutComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdaptiveLayoutComponent_Conditional_1_For_2_ng_template_0_Template, 3, 2, "ng-template", 3);
  }
}
function AdaptiveLayoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-splitter", 2);
    \u0275\u0275listener("touchstart", function AdaptiveLayoutComponent_Conditional_1_Template_p_splitter_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTouchStart($event));
    })("touchmove", function AdaptiveLayoutComponent_Conditional_1_Template_p_splitter_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTouchMove($event));
    })("touchend", function AdaptiveLayoutComponent_Conditional_1_Template_p_splitter_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleTouchEnd($event));
    });
    \u0275\u0275repeaterCreate(1, AdaptiveLayoutComponent_Conditional_1_For_2_Template, 1, 0, null, 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("panelSizes", ctx_r1.getSafePanelSizes())("layout", ctx_r1.currentLayout)("minSizes", ctx_r1.getMinSizes());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getPanels());
  }
}
var AdaptiveLayoutComponent = class _AdaptiveLayoutComponent {
  localStorage = inject(LocalStorageService);
  panels = input([]);
  height = input("100%");
  stateKey = input("splitter-state");
  // Accept numbers (percentage) or pixel strings (e.g. '64px')
  defaultSizes = input([]);
  minSizes = input([]);
  defaultLayout = input("horizontal");
  responsive = input(true);
  destroy$ = new Subject();
  resizeSubject = new Subject();
  static DEFAULT_MIN_SIZE = 0;
  static DEFAULT_MAX_SIZE = 100;
  static COLLAPSED_PANEL_SIZE = 40;
  // Observe container size to normalize when measurable and on resizes
  resizeObserver = null;
  panelSizes = input([25, 75]);
  // Add a writable signal for managing current panel sizes
  currentPanelSizes = signal([]);
  // always stored internally as percentages
  // Regular property for template binding to avoid function calls
  panelSizesForTemplate = [25, 75];
  // normalized percentages passed to splitter
  // Keep original raw inputs for recalculation (to support px on resize)
  rawPanelSizes = [25, 75];
  rawMinSizes = [];
  // Add a getter that ensures we always return a valid array
  getSafePanelSizes() {
    const sizes = this.panelSizesForTemplate;
    if (!Array.isArray(sizes) || sizes.length === 0) {
      return [25, 75];
    }
    return sizes;
  }
  // Computed signal for template binding
  computedPanelSizes = computed(() => {
    const sizes = this.currentPanelSizes();
    const defaultSizes = this.defaultSizes();
    const inputSizes = this.panelSizes();
    if (Array.isArray(sizes) && sizes.length > 0) {
      return sizes;
    } else if (Array.isArray(defaultSizes) && defaultSizes.length > 0) {
      return defaultSizes;
    } else if (Array.isArray(inputSizes) && inputSizes.length > 0) {
      return inputSizes;
    }
    return [25, 75];
  });
  panelStates = [];
  stateStorage = "session";
  currentLayout = "horizontal";
  currentHeight = "100%";
  containerClass = "";
  touchStartX = 0;
  destroyRef = inject(DestroyRef);
  breakpointObserver = inject(BreakpointObserver);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  constructor() {
    this.setupResizeListener();
    effect(() => {
      const inputSizes = this.panelSizes();
      const defaultSizes = this.defaultSizes();
      if (Array.isArray(inputSizes) && inputSizes.length > 0) {
        this.rawPanelSizes = [...inputSizes];
      } else if (Array.isArray(defaultSizes) && defaultSizes.length > 0) {
        this.rawPanelSizes = [...defaultSizes];
      } else {
        this.rawPanelSizes = [25, 75];
      }
      this.normalizeAndSetPanelSizes();
    });
    effect(() => {
      const sizes = this.currentPanelSizes();
      if (isNullOrUndefined(this.elementRef?.nativeElement))
        return;
      setTimeout(() => this.applyHiddenPanelStyles(sizes), 0);
    });
  }
  ngOnInit() {
    this.initializePanelStates();
    this.loadSavedState();
    this.currentHeight = this.height();
    if (!Array.isArray(this.panelSizesForTemplate) || this.panelSizesForTemplate.length === 0) {
      this.normalizeAndSetPanelSizes();
    }
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      this.currentLayout = result.matches ? "vertical" : "horizontal";
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.resizeSubject.complete();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  ngAfterViewInit() {
    this.applyHiddenPanelStyles(this.currentPanelSizes());
    requestAnimationFrame(() => this.normalizeAndSetPanelSizes());
    const container = this.elementRef.nativeElement.querySelector(".adaptive-layout") ?? this.elementRef.nativeElement;
    const ResizeObserverCtor = globalThis.ResizeObserver;
    if (typeof ResizeObserverCtor === "function") {
      this.resizeObserver = new ResizeObserverCtor((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.width > 0) {
            this.resizeSubject.next();
          }
        }
      });
      this.resizeObserver.observe(container);
    }
  }
  // Add a getter for the template to use
  getCurrentPanelSizes() {
    const sizes = this.currentPanelSizes();
    return Array.isArray(sizes) && sizes.length > 0 ? sizes : [25, 75];
  }
  // Add defensive getters for template
  getPanels() {
    const panels = this.panels();
    return Array.isArray(panels) ? panels : [];
  }
  getMinSizes() {
    const minSizesInput = this.minSizes();
    if (Array.isArray(minSizesInput)) {
      this.rawMinSizes = [...minSizesInput];
      return this.normalizeValues(minSizesInput);
    }
    return [];
  }
  /**
   * Apply special styles to panels that should be hidden
   * @param panelSizes The current panel sizes to evaluate
   */
  applyHiddenPanelStyles(panelSizes) {
    if (isNullOrUndefined(this.elementRef?.nativeElement))
      return;
    if (isEmpty(panelSizes))
      return;
    const hasHiddenPanel = panelSizes.some((size) => size === 0);
    if (hasHiddenPanel) {
      this.renderer.addClass(this.elementRef.nativeElement, "has-hidden-panel");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "has-hidden-panel");
    }
    const panelElements = this.elementRef.nativeElement.querySelectorAll(".p-splitter-panel");
    if (!isEmpty(panelElements)) {
      panelSizes.forEach((size, index) => {
        if (index < panelElements.length) {
          const panel = panelElements[index];
          if (size === 0) {
            this.renderer.addClass(panel, "zero-width-panel");
            const gutter = this.elementRef.nativeElement.querySelector(`.p-splitter-gutter:nth-of-type(${index * 2 + 1})`);
            if (isDefined(gutter)) {
              this.renderer.setStyle(gutter, "display", "none");
            }
          } else {
            this.renderer.removeClass(panel, "zero-width-panel");
            const gutter = this.elementRef.nativeElement.querySelector(`.p-splitter-gutter:nth-of-type(${index * 2 + 1})`);
            if (isDefined(gutter)) {
              this.renderer.removeStyle(gutter, "display");
            }
          }
        }
      });
    }
  }
  setupResizeListener() {
    this.resizeSubject.pipe(debounceTime(150), takeUntil(this.destroy$)).subscribe({
      next: () => this.normalizeAndSetPanelSizes(),
      error: (error) => console.error("Resize error:", error)
    });
  }
  onResize() {
    if (this.responsive()) {
      this.resizeSubject.next();
    }
  }
  initializePanelStates() {
    if (!isArray(this.panels())) {
      console.warn("No panels provided for initialization");
      return;
    }
    this.panelStates = this.panels().map((panel, _index) => {
      const defaultSize = 100 / this.panels().length;
      return {
        size: isNumber(defaultSize) ? defaultSize : 0,
        collapsed: false,
        minSize: isDefined(panel) && isNumber(panel.minSize) ? panel.minSize : _AdaptiveLayoutComponent.DEFAULT_MIN_SIZE,
        maxSize: isDefined(panel) && isNumber(panel.maxSize) ? panel.maxSize : _AdaptiveLayoutComponent.DEFAULT_MAX_SIZE,
        hidden: false
      };
    });
  }
  loadSavedState() {
    try {
      const savedState = this.localStorage.getItem(this.stateKey());
      if (!savedState) {
        this.currentLayout = this.defaultLayout();
        return;
      }
      const state = savedState;
      if (!this.isValidState(state)) {
        return;
      }
      this.panelStates = state.panelStates;
      this.currentLayout = state.layoutMode;
      if (Array.isArray(state.panelSizes) && state.panelSizes.length > 0) {
        const validSizes = state.panelSizes.filter((size) => typeof size === "number" && !isNaN(size));
        if (validSizes.length > 0) {
          this.currentPanelSizes.set([...validSizes]);
          this.panelSizesForTemplate = [...validSizes];
        }
      }
    } catch (e) {
      console.error("Error loading saved state:", e);
    }
  }
  isValidState(state) {
    return isObject(state) && hasProperty(state, "panelStates") && hasProperty(state, "panelSizes") && hasProperty(state, "layoutMode") && Array.isArray(state["panelStates"]) && Array.isArray(state["panelSizes"]) && isString(state["layoutMode"]);
  }
  // Touch support handlers
  calculatePercentageMoved(diff) {
    return diff / window.innerWidth * 100;
  }
  updatePanelSize(panelIndex, percentageMoved) {
    if (!isNumber(panelIndex) || !isNumber(percentageMoved)) {
      console.warn("Invalid parameters for panel size update");
      return;
    }
    const currentPanel = this.panelStates[panelIndex];
    if (!isDefined(currentPanel)) {
      console.warn("Panel not found at index:", panelIndex);
      return;
    }
    const minSize = isNumber(currentPanel.minSize) ? currentPanel.minSize : 10;
    const maxSize = isNumber(currentPanel.maxSize) ? currentPanel.maxSize : 90;
    const currentSizes = this.currentPanelSizes();
    const currentSize = currentSizes[panelIndex];
    if (!isNumber(currentSize)) {
      console.warn("Invalid current panel size");
      return;
    }
    const newSize = Math.max(minSize, Math.min(maxSize, currentSize + percentageMoved));
    if (newSize !== currentSize) {
      const newSizes = [...currentSizes];
      newSizes[panelIndex] = newSize;
      const validSizes = newSizes.filter((size) => typeof size === "number" && !isNaN(size));
      if (validSizes.length > 0) {
        this.currentPanelSizes.set(validSizes);
        this.panelSizesForTemplate = validSizes;
      }
    }
  }
  getPanelIndex(touchX) {
    let cumulativeWidth = 0;
    const sizes = this.currentPanelSizes();
    for (let i = 0; i < sizes.length; i++) {
      cumulativeWidth += sizes[i] / 100 * window.innerWidth;
      if (touchX < cumulativeWidth) {
        return i;
      }
    }
    return sizes.length - 1;
  }
  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
  }
  handleTouchMove(event) {
    const touchX = event.touches[0].clientX;
    const diff = touchX - this.touchStartX;
    if (Math.abs(diff) > 10) {
      event.preventDefault();
      const percentageMoved = this.calculatePercentageMoved(diff);
      const panelIndex = this.getPanelIndex(touchX);
      this.updatePanelSize(panelIndex, percentageMoved);
    }
  }
  handleTouchEnd(_event) {
    this.touchStartX = 0;
  }
  // ---------------- New normalization logic ----------------
  /** Normalize raw panelSizes (number | 'Npx') to percentages and update signals */
  normalizeAndSetPanelSizes() {
    const width = this.getContainerWidth();
    if (width <= 0) {
      requestAnimationFrame(() => this.normalizeAndSetPanelSizes());
      return;
    }
    const normalized = this.normalizeValues(this.rawPanelSizes);
    const sum = normalized.reduce((a, b) => a + b, 0);
    let final = normalized;
    if (sum !== 100 && sum > 0) {
      final = normalized.map((v) => v / sum * 100);
    }
    this.currentPanelSizes.set(final);
    this.panelSizesForTemplate = final;
  }
  /** Normalize an array of (number|string) to percentages; pixel entries converted relative to container width */
  normalizeValues(values) {
    if (!Array.isArray(values) || values.length === 0)
      return [];
    const cw = this.getContainerWidth();
    return values.map((v) => this.toPercent(v, cw));
  }
  toPercent(value, containerWidth) {
    if (typeof value === "number") {
      return isFinite(value) && value >= 0 ? value : 0;
    }
    const trimmed = value.trim().toLowerCase();
    if (trimmed.endsWith("px")) {
      const px = parseFloat(trimmed.slice(0, -2));
      if (!isFinite(px) || px < 0)
        return 0;
      return containerWidth > 0 ? px / containerWidth * 100 : 0;
    }
    const num = parseFloat(trimmed);
    return isFinite(num) && num >= 0 ? num : 0;
  }
  getContainerWidth() {
    const el = this.elementRef?.nativeElement?.querySelector(".adaptive-layout") ?? this.elementRef?.nativeElement;
    const width = el?.clientWidth ?? 0;
    return isFinite(width) && width > 0 ? width : 0;
  }
  static \u0275fac = function AdaptiveLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdaptiveLayoutComponent, selectors: [["app-adaptive-layout"]], hostBindings: function AdaptiveLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function AdaptiveLayoutComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, inputs: { panels: [1, "panels"], height: [1, "height"], stateKey: [1, "stateKey"], defaultSizes: [1, "defaultSizes"], minSizes: [1, "minSizes"], defaultLayout: [1, "defaultLayout"], responsive: [1, "responsive"], panelSizes: [1, "panelSizes"] }, decls: 2, vars: 2, consts: [[1, "adaptive-layout", 3, "ngClass"], ["styleClass", "h-full w-full", 3, "panelSizes", "layout", "minSizes"], ["styleClass", "h-full w-full", 3, "touchstart", "touchmove", "touchend", "panelSizes", "layout", "minSizes"], ["pTemplate", ""], [1, "h-full", "w-full", "flex", "flex-col", "transition-all", "duration-300", "ease-in-out"], [1, "flex-1", "h-full", 3, "ngClass"], [4, "ngTemplateOutlet"]], template: function AdaptiveLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, AdaptiveLayoutComponent_Conditional_1_Template, 3, 3, "p-splitter", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getSafePanelSizes().length > 0 && ctx.getPanels().length > 0 ? 1 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, SplitterModule, Splitter, PrimeTemplate, ButtonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]     .adaptive-layout {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .adaptive-layout .p-splitter {\n  height: 100%;\n  min-height: 100%;\n  flex: 1 1 0%;\n}\n[_nghost-%COMP%]     .adaptive-layout .p-splitter-panel > div {\n  height: 100%;\n}\n.has-hidden-panel[_nghost-%COMP%]     .zero-width-panel {\n  pointer-events: none;\n  margin: 0px;\n  width: 0px;\n  min-width: 0px;\n  max-width: 0rem;\n  overflow: hidden;\n  border-width: 0px;\n  padding: 0px;\n  flex: 0 0 0 !important;\n}\n.has-hidden-panel[_nghost-%COMP%]     .zero-width-panel + .p-splitter-gutter {\n  display: none;\n}\n.has-hidden-panel[_nghost-%COMP%]     .p-splitter-panel:first-child:not(.zero-width-panel) {\n  width: 100%;\n  flex: 1 1 0%;\n}\n/*# sourceMappingURL=adaptive-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdaptiveLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-adaptive-layout", imports: [CommonModule, SplitterModule, ButtonModule], template: `<div [ngClass]="containerClass" class="adaptive-layout">
  @if (getSafePanelSizes().length > 0 && getPanels().length > 0) {
    <p-splitter
      styleClass="h-full w-full"
      [panelSizes]="getSafePanelSizes()"
      [layout]="currentLayout"
      [minSizes]="getMinSizes()"
      (touchstart)="handleTouchStart($event)"
      (touchmove)="handleTouchMove($event)"
      (touchend)="handleTouchEnd($event)"
    >
      @for (panel of getPanels(); track $index; let i = $index) {
        <ng-template pTemplate>
          <div
            class="h-full w-full flex flex-col transition-all duration-300 ease-in-out"
          >
            <div
              class="flex-1 h-full"
              [ngClass]="panel.scrollable ? 'overflow-auto' : 'overflow-hidden'"
            >
              <ng-container *ngTemplateOutlet="panel.content"></ng-container>
            </div>
          </div>
        </ng-template>
      }
    </p-splitter>
  }
</div>
`, styles: ["/* src/app/shared/components/splitter/adaptive-layout/adaptive-layout.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n:host ::ng-deep .adaptive-layout {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n:host ::ng-deep .adaptive-layout .p-splitter {\n  height: 100%;\n  min-height: 100%;\n  flex: 1 1 0%;\n}\n:host ::ng-deep .adaptive-layout .p-splitter-panel > div {\n  height: 100%;\n}\n:host.has-hidden-panel ::ng-deep .zero-width-panel {\n  pointer-events: none;\n  margin: 0px;\n  width: 0px;\n  min-width: 0px;\n  max-width: 0rem;\n  overflow: hidden;\n  border-width: 0px;\n  padding: 0px;\n  flex: 0 0 0 !important;\n}\n:host.has-hidden-panel ::ng-deep .zero-width-panel + .p-splitter-gutter {\n  display: none;\n}\n:host.has-hidden-panel ::ng-deep .p-splitter-panel:first-child:not(.zero-width-panel) {\n  width: 100%;\n  flex: 1 1 0%;\n}\n/*# sourceMappingURL=adaptive-layout.component.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdaptiveLayoutComponent, { className: "AdaptiveLayoutComponent", filePath: "src/app/shared/components/splitter/adaptive-layout/adaptive-layout.component.ts", lineNumber: 48 });
})();

export {
  AdaptiveLayoutComponent
};
//# sourceMappingURL=chunk-OVIQ6AUR.js.map
