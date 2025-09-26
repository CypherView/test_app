import {
  GRID_CONFIGS
} from "./chunk-UW6Q2JGR.js";
import {
  Inject,
  Injectable,
  Injector,
  Optional,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7FSD67AL.js";

// src/app/shared/components/grid/grid-config-factory.ts
var GridConfigurationFactory = class _GridConfigurationFactory {
  injector;
  configs = /* @__PURE__ */ new Map();
  /**
   * Creates an instance of GridConfigurationFactory
   * @param {Injector} injector - Angular injector for dependency injection
   * @param {GridConfigurationEntry[][]} configurations - Array of grid configuration entries
   */
  constructor(injector, configurations = []) {
    this.injector = injector;
    const flatConfigs = configurations.flat();
    flatConfigs.forEach(({ entityType, config }) => {
      this.configs.set(entityType, config);
    });
  }
  /**
   * Creates a grid configuration instance
   * @template T Type of data managed by the grid
   * @param {ValidGridTypes} entityType - Type of grid configuration to create
   * @param {Record<string, unknown>} params - Configuration parameters
   * @returns {GridConfiguration<T>} The created grid configuration
   * @throws {InvalidGridTypeError} If the grid type is not valid
   * @throws {GridConfigurationError} If configuration creation fails
   */
  create(entityType, params) {
    const ConfigClass = this.configs.get(entityType);
    if (!ConfigClass) {
      throw new Error(`No grid configuration found for type: ${entityType}`);
    }
    const config = this.injector.get(ConfigClass);
    config.initialize(params);
    return config;
  }
  static \u0275fac = function GridConfigurationFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridConfigurationFactory)(\u0275\u0275inject(Injector), \u0275\u0275inject(GRID_CONFIGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GridConfigurationFactory, factory: _GridConfigurationFactory.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridConfigurationFactory, [{
    type: Injectable
  }], () => [{ type: Injector }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [GRID_CONFIGS]
  }] }], null);
})();

export {
  GridConfigurationFactory
};
//# sourceMappingURL=chunk-ERQSJHKQ.js.map
