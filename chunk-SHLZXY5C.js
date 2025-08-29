import {
  AuthDataService
} from "./chunk-LMZS7KYN.js";
import {
  ApiUrlService,
  LOCAL_STORAGE_KEY_ACCESS_TOKEN,
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
  LOCAL_STORAGE_KEY_USER_SESSION,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isObject,
  isString
} from "./chunk-GCD46CV7.js";
import {
  Router
} from "./chunk-3JFD67YC.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-XEZOAFBV.js";

// src/app/core/models/message.model.ts
var ActionType;
(function(ActionType2) {
  ActionType2["navigate"] = "navigate";
  ActionType2["get_auth_tokens"] = "get_auth_tokens";
  ActionType2["update_auth_tokens"] = "update_auth_tokens";
  ActionType2["logout"] = "logout";
  ActionType2["profile_changed"] = "profile_changed";
  ActionType2["update_hash"] = "update_hash";
  ActionType2["ready"] = "ready";
  ActionType2["r2_token_generated"] = "r2_token_generated";
  ActionType2["r2_token_failed"] = "r2_token_failed";
})(ActionType || (ActionType = {}));
var NavigationPaths;
(function(NavigationPaths2) {
  NavigationPaths2["positions"] = "positions";
  NavigationPaths2["login"] = "login";
  NavigationPaths2["test"] = "test";
  NavigationPaths2["auth"] = "auth";
})(NavigationPaths || (NavigationPaths = {}));

// src/app/core/services/message.service.ts
var BroadcastMessageService = class _BroadcastMessageService {
  authDataService = inject(AuthDataService);
  router = inject(Router);
  apiUrlService = inject(ApiUrlService);
  channel;
  messageSubject = new BehaviorSubject([]);
  connectionStatusSubject = new BehaviorSubject({
    isConnected: false
  });
  isUpdatingHash = false;
  hasSentInitialRoute = false;
  MAX_INITIAL_ROUTE_RETRIES = 3;
  initialRouteRetryCount = 0;
  messages$ = this.messageSubject.asObservable();
  connectionStatus$ = this.connectionStatusSubject.asObservable();
  constructor() {
    this.initializeChannel();
  }
  sendInitialRoute() {
    try {
      const currentPath = window.location.hash.substring(1);
      if (currentPath !== "") {
        const [path, queryString] = currentPath.split("?");
        const cleanPath = path.replace(/^\/+|\/+$/g, "");
        const flutterRoute = this.getFlutterRoute(cleanPath);
        if (flutterRoute === "/auth/login") {
          return;
        }
        const queryParams = queryString !== void 0 && queryString !== "" ? Object.fromEntries(new URLSearchParams(queryString)) : void 0;
        this.sendAction(ActionType.navigate, {
          route: flutterRoute || "/position",
          // Fallback to position if path is empty
          queryParams
        }, "Sending initial route to Flutter");
      } else {
        this.sendAction(ActionType.navigate, {
          route: "/position",
          queryParams: void 0
        }, "Sending default route to Flutter");
      }
    } catch (error) {
      this.handleError("Failed to send initial route", error);
    }
  }
  initializeChannel() {
    try {
      this.channel = new BroadcastChannel("flutter-angular-channel");
      this.connectionStatusSubject.next({ isConnected: true });
      this.channel.onmessage = async (event) => {
        const message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        await this.handleReceivedMessage(message);
      };
      this.channel.onmessageerror = (error) => {
        this.handleError("Message error occurred", error);
      };
      window.addEventListener("unload", () => {
        this.channel.close();
      });
    } catch (error) {
      this.handleError("Failed to initialize channel", error);
    }
  }
  async handleReceivedMessage(message) {
    switch (message.type) {
      case "message": {
        const currentMessages = this.messageSubject.value;
        this.messageSubject.next([...currentMessages, message]);
        break;
      }
      case "action":
        if (isDefined(message.action)) {
          await this.performAction(message.action, message.payload);
        }
        break;
      default:
        break;
    }
  }
  async performAction(action, payload) {
    switch (action) {
      case ActionType.ready: {
        if (!this.hasSentInitialRoute) {
          try {
            this.sendInitialRoute();
            this.hasSentInitialRoute = true;
            this.initialRouteRetryCount = 0;
          } catch (error) {
            this.handleError("Failed to send initial route", error);
            if (this.initialRouteRetryCount < this.MAX_INITIAL_ROUTE_RETRIES) {
              this.initialRouteRetryCount++;
              void new Promise((resolve) => {
                setTimeout(() => {
                  this.hasSentInitialRoute = false;
                  resolve();
                }, 1e3 * this.initialRouteRetryCount);
              }).then(() => this.performAction(ActionType.ready, void 0));
            }
          }
        }
        break;
      }
      case ActionType.update_hash: {
        if (this.isUpdatingHash) {
          return;
        }
        const hashPayload = payload;
        if (hashPayload?.path !== void 0 && hashPayload.path !== "" || hashPayload?.queryParams !== void 0 && Object.keys(hashPayload.queryParams).length > 0) {
          this.isUpdatingHash = true;
          try {
            const baseUrl = window.location.href.split("#")[0];
            const currentPath = window.location.hash.substring(1) || "";
            const pathWithoutQuery = currentPath.split("?")[0];
            let newHash = hashPayload.path !== void 0 && hashPayload.path !== "" ? `#/${hashPayload.path}` : `#${pathWithoutQuery}`;
            if (hashPayload.queryParams !== void 0 && Object.keys(hashPayload.queryParams).length > 0) {
              const currentQueryString = currentPath.split("?")[1] || "";
              const params = new URLSearchParams(currentQueryString);
              Object.entries(hashPayload.queryParams).forEach(([key, value]) => {
                params.set(key, value);
              });
              newHash += `?${params.toString()}`;
            }
            window.history.replaceState(null, "", baseUrl + newHash);
          } catch (error) {
            this.handleError("Failed to update hash", error);
          } finally {
            this.isUpdatingHash = false;
          }
        }
        break;
      }
      case ActionType.navigate: {
        const navPayload = payload;
        if (navPayload?.route !== void 0 && navPayload.route !== "") {
          const route = navPayload.route.startsWith("/") ? navPayload.route.substring(1) : navPayload.route;
          if (navPayload.updateUrlOnly === true) {
            await this.router.navigate([route], {
              queryParams: navPayload.queryParams,
              replaceUrl: true,
              skipLocationChange: false
            });
          } else {
            if (navPayload?.queryParams !== void 0) {
              await this.router.navigate([route], {
                queryParams: navPayload.queryParams
              });
            } else {
              await this.router.navigate([route]);
            }
          }
        }
        break;
      }
      case ActionType.get_auth_tokens:
        this.sendAuthTokensToFlutter();
        break;
      case ActionType.update_auth_tokens: {
        const tokenPayload = payload;
        if (tokenPayload?.accessToken !== void 0 && tokenPayload.accessToken !== "") {
          localStorage.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, tokenPayload.accessToken);
          localStorage.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, tokenPayload.refreshToken);
          localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, tokenPayload.tokenExpiry);
          localStorage.setItem(LOCAL_STORAGE_KEY_USER_SESSION, tokenPayload.userSession);
        }
        break;
      }
      case ActionType.logout:
        this.authDataService.logout();
        break;
      case ActionType.profile_changed: {
        const profilePayload = payload;
        if (isDefined(profilePayload?.clientId)) {
          this.sendProfileChangedEventToFlutter(profilePayload.clientId);
        }
        break;
      }
      // Handle R2 token generation success
      case ActionType.r2_token_generated: {
        const tokenPayload = payload;
        if (tokenPayload?.r2Token !== void 0 && tokenPayload.r2Token !== "") {
        }
        break;
      }
      // Handle R2 token generation failure
      case ActionType.r2_token_failed: {
        const errorPayload = payload;
        console.error("R2 token generation failed:", errorPayload.error !== void 0 && errorPayload.error !== "" ? errorPayload.error : "unknown error");
        setTimeout(() => {
          this.sendAuthTokensToFlutter();
        }, 5e3);
        break;
      }
      default:
        console.warn("Unknown action:", action);
        break;
    }
  }
  sendAuthTokensToFlutter() {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN) ?? "";
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN) ?? "";
    const tokenExpiry = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY) ?? "";
    const userSession = localStorage.getItem(LOCAL_STORAGE_KEY_USER_SESSION) ?? "";
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    if (accessToken && refreshToken && userSession) {
      try {
        this.sendAction(ActionType.update_auth_tokens, {
          accessToken,
          refreshToken,
          tokenExpiry,
          userSession,
          forceRegenerateR2Token: true,
          timestamp: Date.now(),
          // Add timestamp to ensure message is treated as unique
          apiUrl: currentApiUrl
        }, "Sending auth tokens to flutter with R2 token regeneration flag");
      } catch (error) {
        console.error("Error sending auth tokens to Flutter:", error);
      }
    } else {
      console.warn("Cannot send auth tokens to Flutter - missing required tokens");
    }
  }
  sendProfileChangedEventToFlutter(id) {
    this.sendAction(ActionType.profile_changed, {
      id
    }, "Profile changed event");
  }
  sendMessage(content) {
    if (isNullOrUndefined(this.channel)) {
      this.handleError("Channel not initialized", null);
      return;
    }
    try {
      const message = {
        id: crypto.randomUUID(),
        content,
        timestamp: Date.now(),
        sender: "angular",
        type: "message"
      };
      this.channel.postMessage(JSON.stringify(message));
      const currentMessages = this.messageSubject.value;
      this.messageSubject.next([...currentMessages, message]);
    } catch (error) {
      this.handleError("Failed to send message", error);
    }
  }
  sendAction(action, payload, content) {
    if (isNullOrUndefined(this.channel)) {
      this.handleError("Channel not initialized", null);
      return;
    }
    try {
      const message = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        sender: "angular",
        type: "action",
        content: isString(content) ? content : "",
        action,
        payload
      };
      this.channel.postMessage(JSON.stringify(message));
    } catch (error) {
      this.handleError("Failed to send action", error);
    }
  }
  handleError(message, error) {
    console.error(message, error);
    const errorMessage = isObject(error) && hasProperty(error, "message") ? error["message"] : "Unknown error";
    this.connectionStatusSubject.next({
      isConnected: false,
      lastError: `${message}: ${errorMessage}`
    });
  }
  // Add route mapping based on your existing routes
  routeMapping = {
    position: "/position",
    alerts: "/alerts",
    media: "/media",
    history: "/history",
    user: "/user",
    admin: "/admin"
  };
  // Add method to convert Angular routes to Flutter routes
  getFlutterRoute(angularRoute) {
    const normalizedRoute = angularRoute.replace(/^[/#]+/, "");
    for (const [key, value] of Object.entries(this.routeMapping)) {
      if (normalizedRoute.startsWith(key)) {
        return value;
      }
    }
    return "/" + normalizedRoute;
  }
  static \u0275fac = function BroadcastMessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BroadcastMessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BroadcastMessageService, factory: _BroadcastMessageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ActionType,
  BroadcastMessageService
};
//# sourceMappingURL=chunk-SHLZXY5C.js.map
