import {
  ToastService
} from "./chunk-LN4L6VZC.js";
import {
  isDefined
} from "./chunk-UNWLID6Q.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";

// src/app/core/services/version-update.service.ts
var VersionUpdateService = class _VersionUpdateService {
  toastService = inject(ToastService);
  hasShownUpdatePrompt = false;
  /**
   * Detects if an error is related to version mismatch/chunk loading
   */
  isVersionMismatchError(error) {
    const errorObj = this.normalizeError(error);
    const versionPatterns = [
      /Loading chunk \d+ failed/i,
      /Failed to fetch dynamically imported module/i,
      /ChunkLoadError/i,
      /Cannot find module/i,
      /Failed to load resource/i,
      /Module not found/i
    ];
    const message = errorObj.message || "";
    const name = errorObj.name || "";
    return versionPatterns.some((pattern) => pattern.test(message) || pattern.test(name));
  }
  /**
   * Triggers the version update flow with user notification
   */
  handleVersionMismatch(errorContext) {
    if (this.hasShownUpdatePrompt) {
      console.warn("Version update already triggered");
      return;
    }
    this.hasShownUpdatePrompt = true;
    const message = isDefined(errorContext) ? `A new version is available (${errorContext}). The page will reload to get the latest version.` : "A new version is available. The page will reload to get the latest version.";
    this.toastService.showWarning("Update Available", message, { life: 5e3 });
    setTimeout(() => {
      this.performHardReload();
    }, 2500);
  }
  /**
   * Performs a hard reload with cache bust and Service Worker cleanup
   */
  performHardReload() {
    try {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((reg) => {
            reg.unregister().then(() => {
              console.log("Service Worker unregistered");
            }).catch(() => {
            });
          });
        }).catch((error) => console.warn("Failed to unregister Service Workers:", error));
      }
      const currentUrl = new URL(globalThis.location.href);
      currentUrl.searchParams.set("_v", Date.now().toString());
      globalThis.location.replace(currentUrl.href);
    } catch (error) {
      console.error("Error during reload:", error);
      globalThis.location.reload();
    }
  }
  /**
   * Normalizes different error types to Error object
   */
  normalizeError(error) {
    if (error instanceof Error) {
      return error;
    }
    if (typeof error === "string") {
      return new Error(error);
    }
    if (error !== null && error !== void 0 && typeof error === "object" && "message" in error) {
      return new Error(String(error.message));
    }
    return new Error(String(error));
  }
  /**
   * Resets the update prompt flag (useful for testing)
   */
  resetUpdatePrompt() {
    this.hasShownUpdatePrompt = false;
  }
  static \u0275fac = function VersionUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VersionUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VersionUpdateService, factory: _VersionUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  VersionUpdateService
};
//# sourceMappingURL=chunk-OKZD7IEG.js.map
