import {
  LOCAL_STORAGE_SIDEBAR_STATE_KEY,
  LocalStorageService,
  MOBILE_BREAKPOINT,
  takeUntilDestroyed
} from "./chunk-6H7AOYCU.js";
import {
  DestroyRef,
  Injectable,
  fromEvent,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-JFHDN3YU.js";

// src/app/layouts/services/layout.service.ts
var LayoutService = class _LayoutService {
  localStorageService = inject(LocalStorageService);
  destroyRef = inject(DestroyRef);
  sidebarVisible = signal(true, ...ngDevMode ? [{ debugName: "sidebarVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  fontFamily = signal("Ubuntu, sans-serif", ...ngDevMode ? [{ debugName: "fontFamily" }] : (
    /* istanbul ignore next */
    []
  ));
  isMobile = signal(false, ...ngDevMode ? [{ debugName: "isMobile" }] : (
    /* istanbul ignore next */
    []
  ));
  isCollapsed = signal(false, ...ngDevMode ? [{ debugName: "isCollapsed" }] : (
    /* istanbul ignore next */
    []
  ));
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.checkScreenSize();
    fromEvent(globalThis, "resize").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.checkScreenSize());
  }
  checkScreenSize() {
    this.isMobile.set(window.innerWidth < MOBILE_BREAKPOINT);
    this.setCollapsedFromLocalStorage();
  }
  setCollapsedFromLocalStorage() {
    const storedValue = this.localStorageService.getItem(LOCAL_STORAGE_SIDEBAR_STATE_KEY);
    this.setSidebarVisible(storedValue ?? true);
  }
  toggleSidebar() {
    this.setSidebarVisible(!this.sidebarVisible());
  }
  setSidebarVisible(visible) {
    this.sidebarVisible.set(visible);
    if (this.isMobile()) {
      this.isSidebarOpen.set(visible);
      this.isCollapsed.set(false);
    } else {
      this.isCollapsed.set(!visible);
    }
    this.localStorageService.setItem(LOCAL_STORAGE_SIDEBAR_STATE_KEY, visible);
  }
  setFontFamily(fontFamily) {
    this.fontFamily.set(fontFamily);
    this.updateFontFamily(fontFamily);
  }
  updateFontFamily(fontFamily) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(" ", "+")}:wght@400;500;700&display=swap`;
    const preloadLink = document.createElement("link");
    preloadLink.href = fontUrl;
    preloadLink.rel = "preload";
    preloadLink.as = "style";
    document.head.appendChild(preloadLink);
    if (!document.querySelector(`link[href="${fontUrl}"]`)) {
      const stylesheetLink = document.createElement("link");
      stylesheetLink.href = fontUrl;
      stylesheetLink.rel = "stylesheet";
      document.head.appendChild(stylesheetLink);
    }
    document.documentElement.style.setProperty("--font-family", fontFamily);
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LayoutService
};
//# sourceMappingURL=chunk-SZNKIB7Y.js.map
