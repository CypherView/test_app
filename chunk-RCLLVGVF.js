import {
  ToastService
} from "./chunk-HH3MCDGW.js";
import {
  isDefined
} from "./chunk-TWPILM3L.js";
import {
  ApplicationRef,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  RuntimeError,
  Subject,
  filter,
  formatRuntimeError,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-URNEIHHT.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
/**
 * @license Angular v21.2.9
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
var NgswCommChannel = class {
  serviceWorker;
  worker;
  registration;
  events;
  constructor(serviceWorker, injector) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = new Observable((subscriber) => subscriber.error(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED)));
    } else {
      let currentWorker = null;
      const workerSubject = new Subject();
      this.worker = new Observable((subscriber) => {
        if (currentWorker !== null) {
          subscriber.next(currentWorker);
        }
        return workerSubject.subscribe((v) => subscriber.next(v));
      });
      const updateController = () => {
        const {
          controller
        } = serviceWorker;
        if (controller === null) {
          return;
        }
        currentWorker = controller;
        workerSubject.next(currentWorker);
      };
      serviceWorker.addEventListener("controllerchange", updateController);
      updateController();
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration().then((registration) => {
        if (!registration) {
          throw new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED);
        }
        return registration;
      })));
      const _events = new Subject();
      this.events = _events.asObservable();
      const messageListener = (event) => {
        const {
          data
        } = event;
        if (data?.type) {
          _events.next(data);
        }
      };
      serviceWorker.addEventListener("message", messageListener);
      const appRef = injector?.get(ApplicationRef, null, {
        optional: true
      });
      appRef?.onDestroy(() => {
        serviceWorker.removeEventListener("controllerchange", updateController);
        serviceWorker.removeEventListener("message", messageListener);
      });
    }
  }
  postMessage(action, payload) {
    return new Promise((resolve) => {
      this.worker.pipe(take(1)).subscribe((sw) => {
        sw.postMessage(__spreadValues({
          action
        }, payload));
        resolve();
      });
    });
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return new Promise((resolve, reject) => {
      this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
        if (event.result !== void 0) {
          return event.result;
        }
        throw new Error(event.error);
      })).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var SwPush = class _SwPush {
  sw;
  messages;
  notificationClicks;
  notificationCloses;
  pushSubscriptionChanges;
  subscription;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  pushManager = null;
  subscriptionChanges = new Subject();
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.notificationCloses = NEVER;
      this.pushSubscriptionChanges = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.notificationCloses = this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(map((message) => message.data));
    this.pushSubscriptionChanges = this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = new Observable((subscriber) => {
      const workerDrivenSubscription = workerDrivenSubscriptions.subscribe(subscriber);
      const subscriptionChanges = this.subscriptionChanges.subscribe(subscriber);
      return () => {
        workerDrivenSubscription.unsubscribe();
        subscriptionChanges.unsubscribe();
      };
    });
  }
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return new Promise((resolve, reject) => {
      this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).subscribe({
        next: (sub) => {
          this.subscriptionChanges.next(sub);
          resolve(sub);
        },
        error: reject
      });
    });
  }
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new RuntimeError(5602, (typeof ngDevMode === "undefined" || ngDevMode) && "Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new RuntimeError(5603, (typeof ngDevMode === "undefined" || ngDevMode) && "Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return new Promise((resolve, reject) => {
      this.subscription.pipe(take(1), switchMap(doUnsubscribe)).subscribe({
        next: resolve,
        error: reject
      });
    });
  }
  decodeBase64(input) {
    return atob(input);
  }
  static \u0275fac = function SwPush_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwPush,
    factory: _SwPush.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SwUpdate = class _SwUpdate {
  sw;
  versionUpdates;
  unrecoverable;
  get isEnabled() {
    return this.sw.isEnabled;
  }
  ongoingCheckForUpdate = null;
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    if (this.ongoingCheckForUpdate) {
      return this.ongoingCheckForUpdate;
    }
    const nonce = this.sw.generateNonce();
    this.ongoingCheckForUpdate = this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce).finally(() => {
      this.ongoingCheckForUpdate = null;
    });
    return this.ongoingCheckForUpdate;
  }
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new RuntimeError(5601, (typeof ngDevMode === "undefined" || ngDevMode) && ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
  static \u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SwUpdate,
    factory: _SwUpdate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer() {
  if (false) {
    return;
  }
  const options = inject(SwRegistrationOptions);
  if (!("serviceWorker" in navigator && options.enabled !== false)) {
    return;
  }
  const script = inject(SCRIPT);
  const ngZone = inject(NgZone);
  const appRef = inject(ApplicationRef);
  ngZone.runOutsideAngular(() => {
    const sw = navigator.serviceWorker;
    const onControllerChange = () => sw.controller?.postMessage({
      action: "INITIALIZE"
    });
    sw.addEventListener("controllerchange", onControllerChange);
    appRef.onDestroy(() => {
      sw.removeEventListener("controllerchange", onControllerChange);
    });
  });
  ngZone.runOutsideAngular(() => {
    let readyToRegister;
    const {
      registrationStrategy
    } = options;
    if (typeof registrationStrategy === "function") {
      readyToRegister = new Promise((resolve) => registrationStrategy().subscribe(() => resolve()));
    } else {
      const [strategy, ...args] = (registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister = Promise.resolve();
          break;
        case "registerWithDelay":
          readyToRegister = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          readyToRegister = Promise.race([appRef.whenStable(), delayWithTimeout(+args[0])]);
          break;
        default:
          throw new RuntimeError(5600, (typeof ngDevMode === "undefined" || ngDevMode) && `Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    readyToRegister.then(() => {
      if (appRef.destroyed) {
        return;
      }
      navigator.serviceWorker.register(script, {
        scope: options.scope,
        updateViaCache: options.updateViaCache,
        type: options.type
      }).catch((err) => console.error(formatRuntimeError(5604, (typeof ngDevMode === "undefined" || ngDevMode) && "Service worker registration failed with: " + err)));
    });
  });
}
function delayWithTimeout(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
function ngswCommChannelFactory() {
  const opts = inject(SwRegistrationOptions);
  const injector = inject(Injector);
  const isBrowser = true;
  return new NgswCommChannel(isBrowser && opts.enabled !== false ? navigator.serviceWorker : void 0, injector);
}
var SwRegistrationOptions = class {
  enabled;
  updateViaCache;
  type;
  scope;
  registrationStrategy;
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory
  }, provideAppInitializer(ngswAppInitializer)]);
}
var ServiceWorkerModule = class _ServiceWorkerModule {
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
  static \u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceWorkerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ServiceWorkerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [SwPush, SwUpdate]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

// src/app/core/services/version-update.service.ts
var RELOAD_DELAY_MS = 2500;
var UPDATE_CHECK_INTERVAL_MS = 30 * 60 * 1e3;
var VersionUpdateService = class _VersionUpdateService {
  toastService = inject(ToastService);
  // SwUpdate only exists where provideServiceWorker ran, which excludes specs.
  swUpdate = inject(SwUpdate, { optional: true });
  hasShownUpdatePrompt = false;
  /**
   * Adopt new deployments as they land.
   *
   * The service worker pins an open tab to the build it booted with until the
   * app activates the new version. Nothing did, so the tab kept requesting the
   * previous build's lazy chunks — which no longer exist on the server — and
   * every chunk failure re-ran the reload prompt without ever moving forward.
   */
  watchForUpdates() {
    const swUpdate = this.swUpdate;
    if (swUpdate?.isEnabled !== true) {
      return;
    }
    swUpdate.versionUpdates.subscribe((event) => {
      if (event.type !== "VERSION_READY" || this.hasShownUpdatePrompt) {
        return;
      }
      this.hasShownUpdatePrompt = true;
      this.toastService.showWarning("Update Available", "A new version is available. The page will reload to get the latest version.", { life: RELOAD_DELAY_MS });
      setTimeout(() => {
        void swUpdate.activateUpdate().then(() => globalThis.location.reload()).catch(() => {
          this.resetUpdatePrompt();
          this.handleVersionMismatch("activation failed");
        });
      }, RELOAD_DELAY_MS);
    });
    swUpdate.unrecoverable.subscribe(() => {
      this.resetUpdatePrompt();
      this.handleVersionMismatch("service worker cache");
    });
    setInterval(() => {
      if (globalThis.document.visibilityState === "visible") {
        void swUpdate.checkForUpdate().catch(() => {
        });
      }
    }, UPDATE_CHECK_INTERVAL_MS);
  }
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
    this.toastService.showWarning("Update Available", message, {
      life: RELOAD_DELAY_MS
    });
    setTimeout(() => {
      this.performHardReload();
    }, RELOAD_DELAY_MS);
  }
  /**
   * Performs a hard reload with cache bust and Service Worker cleanup
   */
  performHardReload() {
    void this.clearServiceWorkerState().finally(() => {
      try {
        const currentUrl = new URL(globalThis.location.href);
        currentUrl.searchParams.set("_v", Date.now().toString());
        globalThis.location.replace(currentUrl.href);
      } catch (error) {
        console.error("Error during reload:", error);
        globalThis.location.reload();
      }
    });
  }
  /**
   * Drops every service worker registration and its caches. Unregistering
   * alone leaves the cached bytes behind for the next worker to serve.
   */
  async clearServiceWorkerState() {
    try {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.allSettled(registrations.map((reg) => reg.unregister()));
      }
      if ("caches" in globalThis) {
        const keys = await caches.keys();
        await Promise.allSettled(keys.map((key) => caches.delete(key)));
      }
    } catch (error) {
      console.warn("Failed to clear service worker state:", error);
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
  provideServiceWorker,
  VersionUpdateService
};
//# sourceMappingURL=chunk-RCLLVGVF.js.map
