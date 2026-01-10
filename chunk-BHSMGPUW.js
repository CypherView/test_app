import {
  LOCAL_STORAGE_KEY_ACCESS_TOKEN,
  LOCAL_STORAGE_KEY_REFRESH_TOKEN,
  LOCAL_STORAGE_KEY_TOKEN_EXPIRY,
  LOCAL_STORAGE_KEY_USER_SESSION,
  LocalStorageService,
  UserSessionService
} from "./chunk-DXUIOPUE.js";
import {
  ApiUrlService,
  HttpClient,
  isDefined,
  isString
} from "./chunk-EMFP3DUF.js";
import {
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  switchMap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-LH7TWNW2.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  localStorageService = inject(LocalStorageService);
  login(username, password) {
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    return this.http.post(`${currentApiUrl}/auth/signin`, {
      username,
      password
    });
  }
  loginWithToken(token) {
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    return this.http.post(`${currentApiUrl}/auth/signin`, {
      token
    });
  }
  refreshToken(refreshToken) {
    const currentApiUrl = this.apiUrlService.getCurrentApiUrl();
    return this.http.post(`${currentApiUrl}/auth/refresh`, {
      refreshToken
    });
  }
  isAuthenticated() {
    const expiry = this.localStorageService.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true) ?? localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY);
    if (!isString(expiry)) {
      return false;
    }
    const expiryValue = Number.parseInt(expiry, 10);
    if (Number.isNaN(expiryValue)) {
      return false;
    }
    return Date.now() < expiryValue;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/auth-token-manager.service.ts
var AuthTokenManagerService = class _AuthTokenManagerService {
  authService = inject(AuthService);
  userSessionService = inject(UserSessionService);
  localStorageService = inject(LocalStorageService);
  // private readonly TOKEN_EXPIRY_BUFFER = 60000*59+55000; // 1 minute before expiry
  TOKEN_EXPIRY_BUFFER = 6e4;
  // 1 minute before expiry
  TOKEN_EXPIRY_TIME = 36e5;
  // 1 hour in milliseconds
  refreshTokenTimeout = null;
  constructor() {
    this.scheduleTokenRefresh();
  }
  // Store tokens in localStorage
  storeTokens(response) {
    this.localStorageService.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, response.accessToken, void 0, true);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, response.refreshToken, void 0, true);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, (Date.now() + this.TOKEN_EXPIRY_TIME).toString(), void 0, true);
    this.localStorageService.setItem(LOCAL_STORAGE_KEY_USER_SESSION, JSON.stringify(response.users ?? []), void 0, true);
    if (isDefined(response.users) && response.users.length > 0) {
      this.userSessionService.setUserSessions(response.users);
    }
    this.scheduleTokenRefresh();
  }
  // Get access token from localStForage
  getAccessToken() {
    return this.localStorageService.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, true);
  }
  // Get refresh token from localStorage
  getRefreshToken() {
    return this.localStorageService.getItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, true);
  }
  getTokenExpiry() {
    const expiry = this.localStorageService.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true);
    if (!isString(expiry))
      return null;
    const expiryTimestamp = Number.parseInt(expiry, 10);
    if (Number.isNaN(expiryTimestamp))
      return null;
    return new Date(expiryTimestamp).toISOString();
  }
  // Check if the token is expired
  isTokenExpired() {
    const expiry = this.localStorageService.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true);
    if (!isString(expiry))
      return true;
    const expiryTimestamp = Number.parseInt(expiry, 10);
    return Number.isNaN(expiryTimestamp) || Date.now() > expiryTimestamp;
  }
  // Clear tokens from localStorage
  clearTokens() {
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, true);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_REFRESH_TOKEN, true);
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true);
    if (isDefined(this.refreshTokenTimeout)) {
      clearTimeout(this.refreshTokenTimeout);
      this.refreshTokenTimeout = null;
    }
  }
  // Schedule token refresh before expiry
  scheduleTokenRefresh() {
    if (this.isTokenExpired()) {
      this.clearTokens();
      return;
    }
    const expiry = this.localStorageService.getItem(LOCAL_STORAGE_KEY_TOKEN_EXPIRY, true);
    if (!isString(expiry)) {
      this.clearTokens();
      return;
    }
    const expiryTimestamp = Number.parseInt(expiry, 10);
    if (Number.isNaN(expiryTimestamp)) {
      this.clearTokens();
      return;
    }
    const timeout = Math.max(0, expiryTimestamp - Date.now() - this.TOKEN_EXPIRY_BUFFER);
    if (isDefined(this.refreshTokenTimeout)) {
      clearTimeout(this.refreshTokenTimeout);
    }
    this.refreshTokenTimeout = setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }
  // Refresh the token
  refreshToken() {
    const refreshToken = this.getRefreshToken();
    if (!isString(refreshToken)) {
      this.clearTokens();
      return throwError(() => "No refresh token available");
    }
    return this.authService.refreshToken(refreshToken).pipe(switchMap((response) => {
      this.storeTokens(response);
      return of(response);
    }), catchError((error) => {
      this.clearTokens();
      return throwError(() => error);
    }));
  }
  static \u0275fac = function AuthTokenManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthTokenManagerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthTokenManagerService, factory: _AuthTokenManagerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthTokenManagerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthService,
  AuthTokenManagerService
};
//# sourceMappingURL=chunk-BHSMGPUW.js.map
