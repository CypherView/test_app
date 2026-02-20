import {
  GRID_CONFIGS,
  GridConfigRegistryService,
  TREE_TABLE_CONFIGS
} from "./chunk-UNWLID6Q.js";
import {
  Inject,
  Injectable,
  Injector,
  Optional,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4KHPVNTA.js";

// src/app/shared/components/grid/grid-config-factory.ts
var GridConfigurationFactory = class _GridConfigurationFactory {
  injector;
  registry;
  configs = /* @__PURE__ */ new Map();
  instanceCache = /* @__PURE__ */ new Map();
  /**
   * Creates an instance of GridConfigurationFactory
   * @param {Injector} injector - Angular injector for dependency injection
   * @param {GridConfigurationEntry[][]} configurations - Array of grid configuration entries
   */
  constructor(injector, registry, configurations = []) {
    this.injector = injector;
    this.registry = registry;
    const flatConfigs = configurations.flat();
    for (const { entityType, config } of flatConfigs) {
      this.configs.set(entityType, config);
    }
  }
  /**
   * Creates a grid configuration instance.
   * Uses singleton pattern - returns cached instance if available, re-initializing with new params.
   * @template T Type of data managed by the grid
   * @param {ValidGridTypes} entityType - Type of grid configuration to create
   * @param {Record<string, string | number>} params - Configuration parameters
   * @returns {GridConfiguration<T>} The created grid configuration
   * @throws {InvalidGridTypeError} If the grid type is not valid
   * @throws {GridConfigurationError} If configuration creation fails
   */
  create(entityType, params) {
    const cached = this.instanceCache.get(entityType);
    if (cached !== void 0) {
      cached.initialize(params);
      return cached;
    }
    const ConfigClass = this.configs.get(entityType);
    if (!ConfigClass) {
      throw new Error(`No grid configuration found for type: ${entityType}`);
    }
    const config = this.injector.get(ConfigClass);
    config.initialize(params);
    this.registry?.register(config);
    this.instanceCache.set(entityType, config);
    return config;
  }
  static \u0275fac = function GridConfigurationFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridConfigurationFactory)(\u0275\u0275inject(Injector), \u0275\u0275inject(GridConfigRegistryService, 8), \u0275\u0275inject(GRID_CONFIGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GridConfigurationFactory, factory: _GridConfigurationFactory.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridConfigurationFactory, [{
    type: Injectable
  }], () => [{ type: Injector }, { type: GridConfigRegistryService, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [GRID_CONFIGS]
  }] }], null);
})();

// src/app/shared/components/tree-table/tree-table-config-factory.ts
var TreeTableConfigurationFactory = class _TreeTableConfigurationFactory {
  injector;
  registry;
  configRegistry = /* @__PURE__ */ new Map();
  instanceCache = /* @__PURE__ */ new Map();
  constructor(injector, registry, configurations = []) {
    this.injector = injector;
    this.registry = registry;
    const flatConfigs = configurations.flat();
    for (const { entityType, config } of flatConfigs) {
      this.configRegistry.set(entityType, config);
    }
  }
  /**
   * Creates a TreeTable configuration for the specified entityType with the given parameters.
   * Uses singleton pattern - returns cached instance if available, re-initializing with new params.
   * @param entityType The type of TreeTable to create configuration for
   * @param params Optional parameters to pass to the configuration factory
   * @returns A TreeTable configuration object
   */
  create(entityType, params = {}) {
    const cached = this.instanceCache.get(entityType);
    if (cached !== void 0) {
      cached.initialize(params);
      return cached;
    }
    const factory = this.configRegistry.get(entityType);
    if (!factory) {
      throw new Error(`No tree table configuration registered for type '${entityType}'`);
    }
    const config = this.injector.get(factory);
    config.initialize(params);
    this.registry?.register(config);
    this.instanceCache.set(entityType, config);
    return config;
  }
  static \u0275fac = function TreeTableConfigurationFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeTableConfigurationFactory)(\u0275\u0275inject(Injector), \u0275\u0275inject(GridConfigRegistryService, 8), \u0275\u0275inject(TREE_TABLE_CONFIGS, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TreeTableConfigurationFactory, factory: _TreeTableConfigurationFactory.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeTableConfigurationFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }, { type: GridConfigRegistryService, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [TREE_TABLE_CONFIGS]
  }] }], null);
})();

export {
  GridConfigurationFactory,
  TreeTableConfigurationFactory
};
//# sourceMappingURL=chunk-FX3XGEQE.js.map
