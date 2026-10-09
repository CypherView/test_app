import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-JGTMR4UQ.js";

// src/app/features/administration/services/bulk-selection.service.ts
var BulkSelectionService = class _BulkSelectionService {
  _checkedItems = signal([], ...ngDevMode ? [{ debugName: "_checkedItems" }] : (
    /* istanbul ignore next */
    []
  ));
  checkedItems = this._checkedItems.asReadonly();
  isBulkMode = computed(() => this._checkedItems().length > 1, ...ngDevMode ? [{ debugName: "isBulkMode" }] : (
    /* istanbul ignore next */
    []
  ));
  setAll(items) {
    this._checkedItems.set(items);
  }
  toggle(item) {
    const current = this._checkedItems();
    const existingIndex = current.findIndex((i) => i.id === item.id);
    this._checkedItems.set(existingIndex === -1 ? [...current, item] : current.filter((_, itemIndex) => itemIndex !== existingIndex));
  }
  isChecked(item) {
    return this._checkedItems().some((checkedItem) => checkedItem.id === item.id);
  }
  clear() {
    this._checkedItems.set([]);
  }
  static \u0275fac = function BulkSelectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BulkSelectionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BulkSelectionService, factory: _BulkSelectionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkSelectionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  BulkSelectionService
};
//# sourceMappingURL=chunk-GSIZVJGA.js.map
