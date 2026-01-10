import {
  MessageService
} from "./chunk-A5WLHX2Q.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-LH7TWNW2.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  messageService = inject(MessageService);
  /**
   * Show a success toast message.
   * @param summary The summary of the message.
   * @param detail The detail of the message.
   * @param options Additional options for the toast message.
   */
  showSuccess(summary, detail, options) {
    this.messageService.add(__spreadValues({
      severity: "success",
      summary,
      detail
    }, options));
  }
  /**
   * Show an error toast message.
   * @param summary The summary of the message.
   * @param detail The detail of the message.
   * @param options Additional options for the toast message.
   */
  showError(summary, detail, options) {
    this.messageService.add(__spreadValues({ severity: "error", summary, detail }, options));
  }
  /**
   * Show a warning toast message.
   * @param summary The summary of the message.
   * @param detail The detail of the message.
   * @param options Additional options for the toast message.
   */
  showWarning(summary, detail, options) {
    this.messageService.add(__spreadValues({ severity: "warn", summary, detail }, options));
  }
  /**
   * Show an info toast message.
   * @param summary The summary of the message.
   * @param detail The detail of the message.
   * @param options Additional options for the toast message.
   */
  showInfo(summary, detail, options) {
    this.messageService.add(__spreadValues({ severity: "info", summary, detail }, options));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-7VF4PY6J.js.map
