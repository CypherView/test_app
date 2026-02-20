import {
  AccountsService,
  AuthDataService,
  AuthService,
  ClientsService,
  DistributorsService,
  PermissionService,
  PermissionUtils,
  VendorsService,
  environment,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-UNWLID6Q.js";
import {
  Injectable,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/administration/components/clients/client-administration.config.ts
var CLIENT_ADMIN_FEATURES = {
  details: {
    label: "Details"
  },
  assets: {
    label: "Assets",
    permissions: "client:list-assets"
  },
  geofences: {
    label: "Geofences",
    permissions: "client:list-zones"
  },
  alerts: {
    label: "Alerts",
    permissions: {
      or: ["client:alerts", "client:list-alerts"]
    }
  },
  hardware: {
    label: "Hardware",
    permissions: {
      or: [
        "client:list-devices",
        "client:devices",
        "client:list-assettags",
        "client:assettags",
        "client:list-simcards",
        "client:simcards"
      ]
    }
  },
  "client-hardware-devices": {
    label: "Devices",
    permissions: {
      or: ["client:list-devices", "client:devices"]
    }
  },
  "client-asset-tags": {
    label: "Asset Tags",
    permissions: {
      or: ["client:list-assettags", "client:assettags"]
    }
  },
  "client-sim-cards": {
    label: "Sim Cards",
    permissions: {
      or: ["client:list-simcards", "client:simcards"]
    }
  },
  providers: {
    label: "Providers",
    permissions: {
      or: [
        "client:list-smsGatewayProviders",
        "client:smsGatewayProviders",
        "client:list-smsgateways",
        "client:smsgateways"
      ]
    }
  },
  "client-sms-gateway-providers": {
    label: "SMS Gateways",
    permissions: {
      or: [
        "client:list-smsGatewayProviders",
        "client:smsGatewayProviders",
        "client:list-smsgateways",
        "client:smsgateways"
      ]
    }
  },
  profiles: {
    label: "Profiles",
    permissions: {
      or: [
        "client:list-iotypes",
        "client:iotypes",
        "client:list-deviceconfigprofiles",
        "client:deviceconfigprofiles",
        "client:list-assetratingprofiles",
        "client:assetratingprofiles",
        "client:list-assetstateprofiles",
        "client:assetstateprofiles",
        "client:list-overspeedprofiles",
        "client:overspeedprofiles",
        "client:list-roadprofiles",
        "client:roadprofiles",
        "client:list-geolockprofiles",
        "client:geolockprofiles",
        "client:list-customfields",
        "client:customfields"
      ]
    }
  },
  "client-io-types": {
    label: "I/O Types",
    permissions: {
      or: ["client:list-iotypes", "client:iotypes"]
    }
  },
  "client-device-config-profiles": {
    label: "Device Config Profiles",
    permissions: {
      or: ["client:list-deviceconfigprofiles", "client:deviceconfigprofiles"]
    }
  },
  "client-asset-rating-profiles": {
    label: "Asset Rating Profiles",
    permissions: {
      or: ["client:list-assetratingprofiles", "client:assetratingprofiles"]
    }
  },
  "client-asset-state-profiles": {
    label: "Asset State Profiles",
    permissions: {
      or: ["client:list-assetstateprofiles", "client:assetstateprofiles"]
    }
  },
  "client-overspeed-profiles": {
    label: "Overspeed Profiles",
    permissions: {
      or: ["client:list-overspeedprofiles", "client:overspeedprofiles"]
    }
  },
  "client-road-profiles": {
    label: "Road Profiles",
    permissions: {
      or: ["client:list-roadprofiles", "client:roadprofiles"]
    }
  },
  "client-geo-lock-profiles": {
    label: "Geo Lock Profiles",
    permissions: {
      or: ["client:list-geolockprofiles", "client:geolockprofiles"]
    }
  },
  "client-custom-fields": {
    label: "Custom Fields",
    permissions: {
      or: ["client:list-customfields", "client:customfields"]
    }
  },
  organization: {
    label: "Organization",
    permissions: {
      or: [
        "client:list-costcentres",
        "client:costcentres",
        "client:list-assetgroups",
        "client:assetgroups",
        "client:list-assetcategories",
        "client:assetcategories",
        "client:list-zonegroups",
        "client:zonegroups"
      ]
    }
  },
  "client-cost-centres": {
    label: "Cost Centres",
    permissions: {
      or: ["client:list-costcentres", "client:costcentres"]
    }
  },
  "client-asset-groups": {
    label: "Asset Groups",
    permissions: {
      or: ["client:list-assetgroups", "client:assetgroups"]
    }
  },
  "client-asset-categories": {
    label: "Categories",
    permissions: {
      or: ["client:list-assetcategories", "client:assetcategories"]
    }
  },
  "client-geofence-groups": {
    label: "Geofence Groups",
    permissions: {
      or: ["client:list-zonegroups", "client:zonegroups"]
    }
  },
  accounts: {
    label: "Accounts",
    permissions: {
      or: [
        "client:list-users",
        "client:users",
        "client:list-userroles",
        "client:userroles"
      ]
    }
  },
  "client-users": {
    label: "Users",
    permissions: {
      or: ["client:list-users", "client:users"]
    }
  },
  "client-user-roles": {
    label: "User Roles",
    permissions: {
      or: ["client:list-userroles", "client:userroles"]
    }
  }
};

// src/app/core/services/qa-tools.service.ts
var QAToolsService = class _QAToolsService {
  authData = inject(AuthDataService);
  accountsService = inject(AccountsService);
  authService = inject(AuthService);
  distributorsService = inject(DistributorsService);
  vendorsService = inject(VendorsService);
  clientsService = inject(ClientsService);
  PERSONA_STORAGE_KEY = "cv_qa_test_persona";
  /** Signal indicating if test mode is active */
  testMode = signal(false, ...ngDevMode ? [{ debugName: "testMode" }] : []);
  /** Signal for the currently active test persona */
  activePersona = signal(null, ...ngDevMode ? [{ debugName: "activePersona" }] : []);
  /** List of available backend roles for the current owner */
  availableRoles = signal([], ...ngDevMode ? [{ debugName: "availableRoles" }] : []);
  /** Loading state for role fetching */
  isLoadingRoles = signal(false, ...ngDevMode ? [{ debugName: "isLoadingRoles" }] : []);
  /** Set of manually toggled permissions */
  manualOverrides = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "manualOverrides" }] : []);
  // Hierarchical Testing Signals
  selectedDistributorId = signal(null, ...ngDevMode ? [{ debugName: "selectedDistributorId" }] : []);
  selectedVendorId = signal(null, ...ngDevMode ? [{ debugName: "selectedVendorId" }] : []);
  selectedClientId = signal(null, ...ngDevMode ? [{ debugName: "selectedClientId" }] : []);
  availableDistributors = signal([], ...ngDevMode ? [{ debugName: "availableDistributors" }] : []);
  availableVendors = signal([], ...ngDevMode ? [{ debugName: "availableVendors" }] : []);
  availableClients = signal([], ...ngDevMode ? [{ debugName: "availableClients" }] : []);
  /** Display name for the active persona */
  activeProfileName = computed(() => this.activePersona()?.name ?? "Real User", ...ngDevMode ? [{ debugName: "activeProfileName" }] : []);
  constructor() {
    if (this.isQAToolsAvailable()) {
      this.restoreFromStorage();
    } else {
      localStorage.removeItem(this.PERSONA_STORAGE_KEY);
    }
    effect(() => {
      if (!this.isQAToolsAvailable()) {
        this.authData.resetOverrides();
        return;
      }
      const persona = this.activePersona();
      const manual = this.manualOverrides();
      if (this.testMode()) {
        const merged = new Set(persona?.permissions ?? []);
        manual.forEach((p) => merged.add(p));
        const owner = persona ? { id: persona.ownerId, type: persona.ownerType } : void 0;
        this.authData.overridePermissions([...merged], owner);
      } else {
        this.authData.resetOverrides();
      }
    });
  }
  /**
   * Checks if QA tools should be available in the current environment or for the current user.
   */
  isQAToolsAvailable() {
    if (environment.production) {
      return this.authData.getUserProfile()?.emailAddress?.endsWith("@keytelematics.com") ?? false;
    }
    return true;
  }
  /**
   * Resets all QA simulation state and hierarchical selections.
   */
  resetQAState() {
    this.testMode.set(false);
    this.activePersona.set(null);
    this.manualOverrides.set(/* @__PURE__ */ new Set());
    this.selectedDistributorId.set(null);
    this.selectedVendorId.set(null);
    this.selectedClientId.set(null);
    this.availableDistributors.set([]);
    this.availableVendors.set([]);
    this.availableClients.set([]);
    localStorage.removeItem(this.PERSONA_STORAGE_KEY);
    this.authData.resetOverrides();
  }
  /**
   * Fetches the full list of roles available to the current user's owner.
   */
  async loadAvailableRoles() {
    const userProfile = this.authData.getUserProfile();
    if (isNullOrUndefined(userProfile?.owner?.id)) {
      return;
    }
    this.isLoadingRoles.set(true);
    try {
      const response = await firstValueFrom(this.accountsService.listUserRoles(userProfile.owner.id));
      this.availableRoles.set(response.items ?? []);
    } catch (error) {
      console.error("Failed to load QA roles:", error);
    } finally {
      this.isLoadingRoles.set(false);
    }
  }
  /**
   * Applies a specific role as the active test persona.
   * Fetches full role details to extract permissions.
   */
  async applyRole(roleId) {
    const userProfile = this.authData.getUserProfile();
    if (isNullOrUndefined(userProfile?.owner?.id))
      return;
    try {
      const fullRole = await firstValueFrom(this.accountsService.getUserRole(roleId));
      const isSystemRole = roleId === "00000000-0000-0000-0000-000000000000";
      const permissions = isSystemRole ? ["system:all"] : this.extractPermissionsFromLegacyRights(fullRole.legacyRights);
      const persona = {
        id: roleId,
        name: fullRole.name ?? "Unknown Role",
        permissions,
        ownerId: userProfile.owner.id,
        ownerType: userProfile.owner.type ?? null
      };
      this.activePersona.set(persona);
      this.testMode.set(true);
      this.saveToStorage(persona);
    } catch (error) {
      console.error("Failed to apply role:", error);
      throw error;
    }
  }
  /**
   * Manually toggles a single permission on or off.
   */
  setPermissionOverride(permission, enabled) {
    const current = new Set(this.manualOverrides());
    const persona = this.activePersona();
    if (enabled) {
      current.add(permission);
    } else {
      current.delete(permission);
      if (persona) {
        const mappings = PermissionUtils.getInternalMappings(permission);
        const newPersonaPerms = persona.permissions.filter((p) => !mappings.includes(p));
        if (newPersonaPerms.length !== persona.permissions.length) {
          this.activePersona.set(__spreadProps(__spreadValues({}, persona), { permissions: newPersonaPerms }));
        }
      }
    }
    this.manualOverrides.set(current);
    if (!this.testMode()) {
      this.testMode.set(true);
    }
  }
  /**
   * Internal permission extraction logic, mirroring AuthDataService normalization.
   */
  extractPermissionsFromLegacyRights(legacyRights) {
    if (isNullOrUndefined(legacyRights))
      return [];
    const permissions = [];
    for (const feature in legacyRights) {
      if (Object.hasOwn(legacyRights, feature)) {
        const actions = legacyRights[feature];
        if (Array.isArray(actions)) {
          const normalizedFeature = this.normalizeResourceName(feature);
          for (const action of actions) {
            permissions.push(`${normalizedFeature}:${action}`);
          }
        }
      }
    }
    return [...new Set(permissions)];
  }
  /**
   * Mirrors AuthDataService.normalizeResourceName for consistency.
   */
  normalizeResourceName(resource) {
    const normalized = resource.toLowerCase().replaceAll("-", "");
    const pluralMap = {
      vendors: "vendor",
      clients: "client",
      users: "user",
      userroles: "userrole",
      themes: "theme",
      mapsets: "mapset",
      assets: "asset",
      devices: "device",
      simcards: "simcard",
      zones: "zone",
      alerts: "alert"
    };
    return pluralMap[normalized] ?? normalized;
  }
  /**
   * Converts flat permissions (e.g. ['client:list', 'user:create'])
   * back to legacyRights (e.g. { clients: ['list'], users: ['create'] })
   */
  denormalizePermissions(permissions) {
    const legacyRights = {};
    const reversePluralMap = {
      vendor: "vendors",
      client: "clients",
      user: "users",
      userrole: "userroles",
      theme: "themes",
      mapset: "mapsets",
      asset: "assets",
      device: "devices",
      simcard: "simcards",
      zone: "zones",
      alert: "alerts"
    };
    permissions.forEach((perm) => {
      if (perm === "system:all")
        return;
      const [resource, action] = perm.split(":");
      if (!resource || !action)
        return;
      const denormalizedResource = reversePluralMap[resource] ?? resource;
      if (isEmpty(legacyRights[denormalizedResource])) {
        legacyRights[denormalizedResource] = [];
      }
      legacyRights[denormalizedResource].push(action);
    });
    return legacyRights;
  }
  async loadDistributors() {
    const ownerId = this.authData.getRealUserOwnerId();
    if (isNullOrUndefined(ownerId))
      return;
    try {
      const response = await firstValueFrom(this.distributorsService.listDistributors(ownerId));
      this.availableDistributors.set(response.items ?? []);
    } catch (error) {
      console.error("Error loading distributors:", error);
      this.availableDistributors.set([]);
    }
  }
  async loadVendors(distributorId) {
    try {
      const response = await firstValueFrom(this.vendorsService.listVendors(distributorId));
      this.availableVendors.set(response.items ?? []);
    } catch (error) {
      console.error("Error loading vendors:", error);
      this.availableVendors.set([]);
    }
  }
  async loadClients(vendorId) {
    try {
      const response = await firstValueFrom(this.clientsService.listClients(vendorId));
      this.availableClients.set(response.items ?? []);
    } catch (error) {
      console.error("Error loading clients:", error);
      this.availableClients.set([]);
    }
  }
  selectDistributor(id) {
    this.selectedDistributorId.set(id);
    this.selectedVendorId.set(null);
    this.selectedClientId.set(null);
    this.availableVendors.set([]);
    this.availableClients.set([]);
    if (isDefined(id)) {
      this.loadVendors(id).catch(() => {
      });
    }
  }
  selectVendor(id) {
    this.selectedVendorId.set(id);
    this.selectedClientId.set(null);
    this.availableClients.set([]);
    if (isDefined(id)) {
      this.loadClients(id).catch(() => {
      });
    }
  }
  selectClient(id) {
    this.selectedClientId.set(id);
  }
  /**
   * Persists the current manual overrides and persona permissions back to the backend role.
   * This effectively "saves" your simulation as the real role configuration.
   */
  async saveCurrentOverridesToRole() {
    const persona = this.activePersona();
    if (!persona)
      return;
    const manual = this.manualOverrides();
    const merged = new Set(persona.permissions);
    manual.forEach((p) => merged.add(p));
    const legacyRights = this.denormalizePermissions([...merged]);
    try {
      await firstValueFrom(this.accountsService.updateUserRole(persona.id, {
        name: persona.name,
        legacyRights
      }));
    } catch (error) {
      console.error("Failed to save overridden permissions to role:", error);
      throw error;
    }
  }
  saveToStorage(persona) {
    localStorage.setItem(this.PERSONA_STORAGE_KEY, JSON.stringify(persona));
  }
  restoreFromStorage() {
    const stored = localStorage.getItem(this.PERSONA_STORAGE_KEY);
    if (stored !== null && stored !== void 0) {
      try {
        const persona = JSON.parse(stored);
        this.activePersona.set(persona);
        this.testMode.set(true);
      } catch (err) {
        console.error("QA Tools: Error restoring persona from storage:", err);
        localStorage.removeItem(this.PERSONA_STORAGE_KEY);
      }
    }
  }
  static \u0275fac = function QAToolsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QAToolsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QAToolsService, factory: _QAToolsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QAToolsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/features/administration/services/client-permissions.service.ts
var ClientPermissionsService = class _ClientPermissionsService {
  permissionService = inject(PermissionService);
  /**
   * Check if user has access to a specific permission expression in client scope.
   * Used by guards and tab filtering.
   */
  canAccessFeature(permissions) {
    if (permissions === null || permissions === void 0) {
      return true;
    }
    return this.permissionService.canAccess(permissions, "client");
  }
  static \u0275fac = function ClientPermissionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientPermissionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientPermissionsService, factory: _ClientPermissionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientPermissionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  QAToolsService,
  ClientPermissionsService,
  CLIENT_ADMIN_FEATURES
};
//# sourceMappingURL=chunk-3LLCXWXM.js.map
