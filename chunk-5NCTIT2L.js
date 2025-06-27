import {
  BroadcastMessageService
} from "./chunk-XPAKDRDN.js";
import "./chunk-GPBGLULF.js";
import {
  AuthTokenManagerService,
  environment
} from "./chunk-77IOBNEP.js";
import {
  DomSanitizer
} from "./chunk-MWRHVJ6S.js";
import {
  NgZone,
  Subscription,
  timer,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl
} from "./chunk-UOQWYEAO.js";
import "./chunk-R327OCYJ.js";

// src/app/layouts/components/flutter-layout/flutter-layout.component.ts
var FlutterLayoutComponent = class _FlutterLayoutComponent {
  sanitizer;
  messageService;
  authTokenManager;
  ngZone;
  safeUrl;
  flutterLoaded = false;
  subscription = new Subscription();
  initializationAttempts = 0;
  MAX_INITIALIZATION_ATTEMPTS = 5;
  RETRY_DELAY = 2e3;
  // 2 seconds
  constructor(sanitizer, messageService, authTokenManager, ngZone) {
    this.sanitizer = sanitizer;
    this.messageService = messageService;
    this.authTokenManager = authTokenManager;
    this.ngZone = ngZone;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.flutterUrl);
  }
  ngOnInit() {
    window.addEventListener("message", this.handleIframeLoad.bind(this));
    this.subscription.add(this.messageService.connectionStatus$.subscribe((status) => {
      console.log("Flutter connection status:", status);
      if (status.isConnected && !this.flutterLoaded) {
        this.flutterLoaded = true;
        this.initializationAttempts = 0;
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            this.ngZone.run(() => {
              this.messageService.sendAuthTokensToFlutter();
            });
          }, 500);
        });
      }
    }));
    this.setupFallbackTimer();
  }
  ngOnDestroy() {
    window.removeEventListener("message", this.handleIframeLoad.bind(this));
    this.subscription.unsubscribe();
  }
  handleIframeLoad(event) {
    if (event.data === null || event.data === void 0)
      return;
    switch (event.data.type) {
      case "flutter-initialized":
        this.flutterLoaded = true;
        this.initializationAttempts = 0;
        this.sendAuthTokensToFlutter();
        break;
      case "flutter-request-tokens":
        this.sendAuthTokensToFlutter(0);
        break;
      case "flutter-keep-alive":
        console.debug("Received keep-alive from Flutter", event.data.timestamp);
        if (!this.flutterLoaded) {
          this.flutterLoaded = true;
          this.initializationAttempts = 0;
          this.sendAuthTokensToFlutter();
        }
        break;
    }
  }
  sendAuthTokensToFlutter(delayMs = 500) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.messageService.sendAuthTokensToFlutter();
        });
      }, delayMs);
    });
  }
  setupFallbackTimer() {
    const fallbackTimer = timer(5e3, this.RETRY_DELAY).subscribe(() => {
      if (this.initializationAttempts >= this.MAX_INITIALIZATION_ATTEMPTS) {
        fallbackTimer.unsubscribe();
        return;
      }
      if (!this.flutterLoaded) {
        this.messageService.sendAuthTokensToFlutter();
        this.initializationAttempts++;
      } else {
        fallbackTimer.unsubscribe();
      }
    });
    this.subscription.add(fallbackTimer);
  }
  static \u0275fac = function FlutterLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlutterLayoutComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(BroadcastMessageService), \u0275\u0275directiveInject(AuthTokenManagerService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlutterLayoutComponent, selectors: [["app-flutter-layout"]], decls: 1, vars: 1, consts: [["id", "flutter-app", "title", "Embedded Flutter Application", "allow", "same-origin; scripts; fullscreen", "sandbox", "allow-scripts allow-same-origin allow-forms allow-popups", 1, "flutter-app-iframe", 3, "src"]], template: function FlutterLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "iframe", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.safeUrl, \u0275\u0275sanitizeResourceUrl);
    }
  }, styles: ["\n\n.flutter-app-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n/*# sourceMappingURL=flutter-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlutterLayoutComponent, { className: "FlutterLayoutComponent", filePath: "src/app/layouts/components/flutter-layout/flutter-layout.component.ts", lineNumber: 15 });
})();
export {
  FlutterLayoutComponent
};
//# sourceMappingURL=chunk-5NCTIT2L.js.map
