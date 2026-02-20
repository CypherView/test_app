import {
  AccountsService
} from "./chunk-UNWLID6Q.js";
import {
  Injectable,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";

// src/app/features/administration/strategies/distributor-data.strategy.ts
var DistributorDataStrategy = class _DistributorDataStrategy {
  accountsService = inject(AccountsService);
  async fetchById(id) {
    try {
      return await firstValueFrom(this.accountsService.getDistributor(id));
    } catch (error) {
      throw new Error(`Failed to fetch distributor: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  async update(id, data) {
    try {
      return await firstValueFrom(this.accountsService.updateDistributor(id, data));
    } catch (error) {
      throw new Error(`Failed to update distributor: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  static \u0275fac = function DistributorDataStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDataStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistributorDataStrategy, factory: _DistributorDataStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDataStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/strategies/vendor-data.strategy.ts
var VendorDataStrategy = class _VendorDataStrategy {
  accountsService = inject(AccountsService);
  async fetchById(id) {
    try {
      return await firstValueFrom(this.accountsService.getVendor(id));
    } catch (error) {
      throw new Error(`Failed to fetch vendor: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  async update(id, data) {
    try {
      return await firstValueFrom(this.accountsService.updateVendor(id, data));
    } catch (error) {
      throw new Error(`Failed to update vendor: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  static \u0275fac = function VendorDataStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorDataStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VendorDataStrategy, factory: _VendorDataStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorDataStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/strategies/client-data-strategy.ts
var ClientDataStrategy = class _ClientDataStrategy {
  accountsService = inject(AccountsService);
  async fetchById(id) {
    try {
      return await firstValueFrom(this.accountsService.getClient(id));
    } catch (error) {
      throw new Error(`Failed to fetch client: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  async update(id, data) {
    try {
      return await firstValueFrom(this.accountsService.updateClient(id, data));
    } catch (error) {
      throw new Error(`Failed to update client: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  static \u0275fac = function ClientDataStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDataStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientDataStrategy, factory: _ClientDataStrategy.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDataStrategy, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DistributorDataStrategy,
  VendorDataStrategy
};
//# sourceMappingURL=chunk-JL2RFHDF.js.map
