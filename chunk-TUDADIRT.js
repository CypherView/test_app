import {
  Platform,
  coerceArray
} from "./chunk-VXJMY5F5.js";
import {
  Splitter,
  SplitterModule
} from "./chunk-KU2EPNLE.js";
import {
  LocalStorageService,
  takeUntilDestroyed
} from "./chunk-SGSSZZCS.js";
import {
  ButtonModule,
  PrimeTemplate
} from "./chunk-D3SIXD4M.js";
import {
  hasProperty,
  isArray,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString
} from "./chunk-DIN3XHWB.js";
import {
  CSP_NONCE,
  CommonModule,
  DestroyRef,
  ElementRef,
  Injectable,
  NgClass,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Renderer2,
  Subject,
  combineLatest,
  concat,
  debounceTime,
  effect,
  inject,
  input,
  map,
  setClassMetadata,
  skip,
  startWith,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveWindow,
  ɵɵtemplate
} from "./chunk-UOQWYEAO.js";

// node_modules/@angular/cdk/fesm2022/breakpoints-observer-75147d6a.mjs
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
function AdaptiveLayoutComponent_For_3_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function AdaptiveLayoutComponent_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, AdaptiveLayoutComponent_For_3_ng_template_0_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const panel_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", panel_r1.scrollable ? "overflow-auto" : "overflow-hidden");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", panel_r1.content);
  }
}
function AdaptiveLayoutComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdaptiveLayoutComponent_For_3_ng_template_0_Template, 3, 2, "ng-template", 2);
  }
}
var AdaptiveLayoutComponent = class _AdaptiveLayoutComponent {
  localStorage;
  panels = input([]);
  height = input("100%");
  stateKey = input("splitter-state");
  defaultSizes = input([]);
  minSizes = input([]);
  defaultLayout = input("horizontal");
  responsive = input(true);
  destroy$ = new Subject();
  resizeSubject = new Subject();
  static DEFAULT_MIN_SIZE = 0;
  static DEFAULT_MAX_SIZE = 100;
  static COLLAPSED_PANEL_SIZE = 40;
  panelSizes = input([25, 75]);
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
  constructor(localStorage) {
    this.localStorage = localStorage;
    this.setupResizeListener();
    effect(() => {
      const sizes = this.panelSizes();
      if (isNullOrUndefined(this.elementRef?.nativeElement))
        return;
      setTimeout(() => this.applyHiddenPanelStyles(sizes), 0);
    });
  }
  ngOnInit() {
    this.initializePanelStates();
    this.loadSavedState();
    this.currentHeight = this.height();
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      this.currentLayout = result.matches ? "vertical" : "horizontal";
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.resizeSubject.complete();
  }
  ngAfterViewInit() {
    this.applyHiddenPanelStyles(this.panelSizes());
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
    this.resizeSubject.pipe(debounceTime(250), takeUntil(this.destroy$)).subscribe({ error: (error) => console.error("Resize error:", error) });
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
    const currentSize = this.panelSizes()[panelIndex];
    if (!isNumber(currentSize)) {
      console.warn("Invalid current panel size");
      return;
    }
    const newSize = Math.max(minSize, Math.min(maxSize, currentSize + percentageMoved));
    if (newSize !== currentSize) {
      this.panelSizes()[panelIndex] = newSize;
    }
  }
  getPanelIndex(touchX) {
    let cumulativeWidth = 0;
    for (let i = 0; i < this.panelSizes.length; i++) {
      cumulativeWidth += this.panelSizes()[i] / 100 * window.innerWidth;
      if (touchX < cumulativeWidth) {
        return i;
      }
    }
    return this.panelSizes.length - 1;
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
  static \u0275fac = function AdaptiveLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveLayoutComponent)(\u0275\u0275directiveInject(LocalStorageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdaptiveLayoutComponent, selectors: [["app-adaptive-layout"]], hostBindings: function AdaptiveLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function AdaptiveLayoutComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, \u0275\u0275resolveWindow);
    }
  }, inputs: { panels: [1, "panels"], height: [1, "height"], stateKey: [1, "stateKey"], defaultSizes: [1, "defaultSizes"], minSizes: [1, "minSizes"], defaultLayout: [1, "defaultLayout"], responsive: [1, "responsive"], panelSizes: [1, "panelSizes"] }, decls: 4, vars: 4, consts: [[1, "adaptive-layout", 3, "ngClass"], ["styleClass", "h-full w-full", 3, "touchstart", "touchmove", "touchend", "panelSizes", "layout", "minSizes"], ["pTemplate", ""], [1, "h-full", "w-full", "flex", "flex-col", "transition-all", "duration-300", "ease-in-out"], [1, "flex-1", "h-full", 3, "ngClass"], [4, "ngTemplateOutlet"]], template: function AdaptiveLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-splitter", 1);
      \u0275\u0275listener("touchstart", function AdaptiveLayoutComponent_Template_p_splitter_touchstart_1_listener($event) {
        return ctx.handleTouchStart($event);
      })("touchmove", function AdaptiveLayoutComponent_Template_p_splitter_touchmove_1_listener($event) {
        return ctx.handleTouchMove($event);
      })("touchend", function AdaptiveLayoutComponent_Template_p_splitter_touchend_1_listener($event) {
        return ctx.handleTouchEnd($event);
      });
      \u0275\u0275repeaterCreate(2, AdaptiveLayoutComponent_For_3_Template, 1, 0, null, 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
      \u0275\u0275advance();
      \u0275\u0275property("panelSizes", ctx.panelSizes())("layout", ctx.currentLayout)("minSizes", ctx.minSizes());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.panels());
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, SplitterModule, Splitter, PrimeTemplate, ButtonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]     .adaptive-layout {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .adaptive-layout .p-splitter {\n  height: 100%;\n  min-height: 100%;\n  flex: 1 1 0%;\n}\n[_nghost-%COMP%]     .adaptive-layout .p-splitter-panel > div {\n  height: 100%;\n}\n.has-hidden-panel[_nghost-%COMP%]     .zero-width-panel {\n  pointer-events: none;\n  margin: 0px;\n  width: 0px;\n  min-width: 0px;\n  max-width: 0rem;\n  overflow: hidden;\n  border-width: 0px;\n  padding: 0px;\n  flex: 0 0 0 !important;\n}\n.has-hidden-panel[_nghost-%COMP%]     .zero-width-panel + .p-splitter-gutter {\n  display: none;\n}\n.has-hidden-panel[_nghost-%COMP%]     .p-splitter-panel:first-child:not(.zero-width-panel) {\n  width: 100%;\n  flex: 1 1 0%;\n}\n/*# sourceMappingURL=adaptive-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdaptiveLayoutComponent, { className: "AdaptiveLayoutComponent", filePath: "src/app/shared/components/splitter/adaptive-layout/adaptive-layout.component.ts", lineNumber: 46 });
})();

export {
  AdaptiveLayoutComponent
};
//# sourceMappingURL=chunk-TUDADIRT.js.map
