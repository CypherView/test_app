import {
  BroadcastMessageService,
  DomSanitizer,
  environment
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  NgZone,
  Subscription,
  inject,
  setClassMetadata,
  timer,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵsanitizeResourceUrl
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

// src/app/layouts/components/flutter-layout/flutter-layout.component.ts
var FlutterLayoutComponent = class _FlutterLayoutComponent {
  sanitizer = inject(DomSanitizer);
  messageService = inject(BroadcastMessageService);
  ngZone = inject(NgZone);
  safeUrl;
  flutterLoaded = false;
  subscription = new Subscription();
  initializationAttempts = 0;
  MAX_INITIALIZATION_ATTEMPTS = 5;
  RETRY_DELAY = 2e3;
  // 2 seconds
  constructor() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.flutterUrl);
  }
  ngOnInit() {
    window.addEventListener("message", this.handleIframeLoad.bind(this));
    let lastReadyTimestamp = 0;
    this.subscription.add(this.messageService.messages$.subscribe((messages) => {
      const readyMessages = messages.filter((msg) => msg.type === "action" && msg.action === "ready" && msg.sender === "flutter");
      if (readyMessages.length > 0) {
        const latestReady = readyMessages[readyMessages.length - 1];
        if (latestReady.timestamp && latestReady.timestamp > lastReadyTimestamp) {
          lastReadyTimestamp = latestReady.timestamp;
          this.flutterLoaded = true;
          this.initializationAttempts = 0;
          this.sendAuthTokensToFlutter();
        }
      }
    }));
    this.subscription.add(this.messageService.connectionStatus$.subscribe((status) => {
      if (status.isConnected) {
        if (!this.flutterLoaded) {
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
      } else {
        this.flutterLoaded = false;
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
    return new (__ngFactoryType__ || _FlutterLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlutterLayoutComponent, selectors: [["app-flutter-layout"]], decls: 1, vars: 1, consts: [["id", "flutter-app", "title", "Embedded Flutter Application", "allow", "same-origin; scripts; fullscreen", "sandbox", "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads", 1, "flutter-app-iframe", 3, "src"]], template: function FlutterLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "iframe", 0);
    }
    if (rf & 2) {
      \u0275\u0275domProperty("src", ctx.safeUrl, \u0275\u0275sanitizeResourceUrl);
    }
  }, styles: ["\n\n.flutter-app-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n/*# sourceMappingURL=flutter-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlutterLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-flutter-layout", imports: [], template: '<iframe\n  id="flutter-app"\n  [src]="safeUrl"\n  class="flutter-app-iframe"\n  title="Embedded Flutter Application"\n  allow="same-origin; scripts; fullscreen"\n  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"\n></iframe>\n', styles: ["/* src/app/layouts/components/flutter-layout/flutter-layout.component.scss */\n.flutter-app-iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n/*# sourceMappingURL=flutter-layout.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlutterLayoutComponent, { className: "FlutterLayoutComponent", filePath: "src/app/layouts/components/flutter-layout/flutter-layout.component.ts", lineNumber: 13 });
})();
export {
  FlutterLayoutComponent
};
//# sourceMappingURL=chunk-SFBR4WIA.js.map
