import {
  TranslateService
} from "./chunk-RNIEZZVX.js";
import {
  AuthDataService,
  ClientDataService,
  toSignal
} from "./chunk-6H7AOYCU.js";
import {
  Injectable,
  effect,
  inject,
  map,
  setClassMetadata,
  startWith,
  ɵɵdefineInjectable
} from "./chunk-JFHDN3YU.js";

// src/app/core/services/language.service.ts
var LanguageService = class _LanguageService {
  translate = inject(TranslateService);
  authDataService = inject(AuthDataService);
  clientDataService = inject(ClientDataService);
  SUPPORTED = ["en", "fr", "es", "pt", "nl", "de", "it"];
  DEFAULT = "en";
  STORAGE_KEY = "app-language";
  currentLanguage = toSignal(this.translate.onLangChange.pipe(map((e) => e.lang), startWith(this.translate.getCurrentLang() ?? this.DEFAULT)), { initialValue: this.DEFAULT });
  constructor() {
    effect(() => {
      const client = this.clientDataService.getSelectedClientSignal()();
      this.setLanguage(client?.language ?? sessionStorage.getItem(this.STORAGE_KEY) ?? this.authDataService.profile()?.language ?? navigator.language);
    });
  }
  normalize(raw) {
    const base = raw?.split("-")[0]?.toLowerCase();
    return this.SUPPORTED.includes(base ?? "") ? base ?? "" : this.DEFAULT;
  }
  setLanguage(lang) {
    this.translate.use(this.normalize(lang));
  }
  onManualLanguageChange(lang) {
    sessionStorage.setItem(this.STORAGE_KEY, lang);
    this.setLanguage(lang);
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-7UON6CU4.js.map
