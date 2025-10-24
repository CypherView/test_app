import {
  AccountsService,
  AuthService2 as AuthService,
  AuthTokenManagerService,
  DEFAULT_SYSTEM_ID,
  LocalStorageService,
  SUPER_ADMIN_ROLE_ID,
  UserSessionService,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-AHBGYM7E.js";
import {
  Router
} from "./chunk-UOAEKV2L.js";
import {
  Injectable,
  computed,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MBTADGF5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/services/admin-state.service.ts
var AdminStateService = class _AdminStateService {
  // Private signals for state
  state = signal({
    // New distributor-scoped data
    distributorVendors: {},
    vendorClients: {},
    vendorGroups: {},
    groupClients: {},
    loadedVendors: {},
    loadingVendors: {},
    failedVendors: {},
    expandedNodes: {},
    expandedGroups: {},
    clientPagination: {},
    // Global state
    selectedClient: null,
    clientVendor: null,
    vendorDistributor: null,
    distributors: [],
    initialLoading: false,
    expandedDistributors: /* @__PURE__ */ new Set()
  });
  // Public computed values
  distributorVendors = computed(() => this.state().distributorVendors);
  vendorClients = computed(() => this.state().vendorClients);
  vendorGroups = computed(() => this.state().vendorGroups);
  groupClients = computed(() => this.state().groupClients);
  loadedVendors = computed(() => this.state().loadedVendors);
  loadingVendors = computed(() => this.state().loadingVendors);
  failedVendors = computed(() => this.state().failedVendors);
  expandedNodes = computed(() => this.state().expandedNodes);
  expandedGroups = computed(() => this.state().expandedGroups);
  clientPagination = computed(() => this.state().clientPagination);
  selectedClient = computed(() => this.state().selectedClient);
  clientVendor = computed(() => this.state().clientVendor);
  vendorDistributor = computed(() => this.state().vendorDistributor);
  distributors = computed(() => this.state().distributors);
  initialLoading = computed(() => this.state().initialLoading);
  expandedDistributors = computed(() => this.state().expandedDistributors);
  // Computed values that depend on multiple state properties
  isLoading = computed(() => {
    const state = this.state();
    if (state.initialLoading) {
      return true;
    }
    const currentDistributorId = this.getCurrentDistributorId();
    if (isNullOrUndefined(currentDistributorId)) {
      return false;
    }
    const distributorLoadingVendors = state.loadingVendors[currentDistributorId];
    return isDefined(distributorLoadingVendors) ? distributorLoadingVendors.size > 0 : false;
  });
  hasClientData = computed(() => !!this.state().selectedClient);
  hasVendorData = computed(() => !!this.state().clientVendor);
  hasDistributorData = computed(() => !!this.state().vendorDistributor);
  // Helper to generate pagination key
  getPaginationKey(vendorId, groupId) {
    return isDefined(groupId) ? `${vendorId}_${groupId}` : vendorId;
  }
  /**
   * Validates vendor ID and throws if invalid
   * @param vendorId - The vendor ID to validate
   * @throws Error if vendor ID is invalid
   */
  validateVendorId(vendorId) {
    if (!vendorId?.trim()) {
      throw new Error("Invalid vendor ID");
    }
  }
  /**
   * Gets the current distributor context ID from the vendor distributor
   * @returns The current distributor ID or null if not available
   */
  getCurrentDistributorId() {
    return this.vendorDistributor()?.id ?? null;
  }
  /**
   * Helper method to get distributor-scoped pagination key
   * @param distributorId - The distributor ID
   * @param vendorId - The vendor ID
   * @param groupId - Optional group ID
   * @returns Combined pagination key
   */
  getDistributorPaginationKey(distributorId, vendorId, groupId) {
    const baseKey = isDefined(groupId) ? `${vendorId}_${groupId}` : vendorId;
    return `${distributorId}_${baseKey}`;
  }
  // State update methods
  /**
   * Sets the initial loading state of the administration tree
   * @param loading - Boolean indicating if initial data is being loaded
   */
  setInitialLoading(loading) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      initialLoading: loading
    }));
  }
  /**
   * @deprecated Use addDistributorLoadingVendor instead
   * Adds a vendor to the loading state (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor to mark as loading
   */
  addLoadingVendor(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.addDistributorLoadingVendor(distributorId, vendorId);
    } else {
      console.warn("addLoadingVendor called without distributor context. Use addDistributorLoadingVendor instead.");
    }
  }
  /**
   * @deprecated Use removeDistributorLoadingVendor instead
   * Removes a vendor from the loading state (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor to remove from loading state
   */
  removeLoadingVendor(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.removeDistributorLoadingVendor(distributorId, vendorId);
    } else {
      console.warn("removeLoadingVendor called without distributor context. Use removeDistributorLoadingVendor instead.");
    }
  }
  /**
   * @deprecated Use addDistributorVendorClients instead
   * Adds vendor clients (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor
   * @param clients - Array of client items
   * @param pagination - Pagination info from the API call
   * @param append - Whether to append or replace clients
   */
  addVendorClients(vendorId, clients, pagination, append = false) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.addDistributorVendorClients(distributorId, vendorId, clients, pagination, append);
    } else {
      console.warn("addVendorClients called without distributor context. Use addDistributorVendorClients instead.");
    }
  }
  /**
   * @deprecated Use markDistributorVendorAsLoaded instead
   * Marks a vendor as loaded (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor to mark as loaded
   */
  markVendorAsLoaded(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.markDistributorVendorAsLoaded(distributorId, vendorId);
    } else {
      console.warn("markVendorAsLoaded called without distributor context. Use markDistributorVendorAsLoaded instead.");
    }
  }
  /**
   * Marks a vendor as failed to load for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to mark as failed
   */
  markDistributorVendorAsFailedToLoad(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorFailedVendors = state.failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        failedVendors: __spreadProps(__spreadValues({}, state.failedVendors), {
          [distributorId]: new Set(distributorFailedVendors).add(vendorId)
        })
      });
    });
  }
  /**
   * @deprecated Use markDistributorVendorAsFailedToLoad instead
   * Marks a vendor as failed to load (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor to mark as failed
   */
  markVendorAsFailedToLoad(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.markDistributorVendorAsFailedToLoad(distributorId, vendorId);
    } else {
      console.warn("markVendorAsFailedToLoad called without distributor context. Use markDistributorVendorAsFailedToLoad instead.");
    }
  }
  /**
   * @deprecated Use setDistributorNodeExpanded instead
   * Toggles the expansion state of a node (legacy method for backward compatibility)
   * @param nodeId - The ID of the node to toggle
   * @param expanded - Optional explicit expanded state, if not provided will toggle current state
   */
  toggleNodeExpansion(nodeId, expanded) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      const currentlyExpanded = this.isDistributorNodeExpanded(distributorId, nodeId);
      const newExpanded = expanded ?? !currentlyExpanded;
      this.setDistributorNodeExpanded(distributorId, nodeId, newExpanded);
    } else {
      console.warn("toggleNodeExpansion called without distributor context. Use setDistributorNodeExpanded instead.");
    }
  }
  /**
   * Sets vendor groups for a vendor (legacy method for backward compatibility)
   * @deprecated Use setDistributorVendorGroups instead
   * @param vendorId - The ID of the vendor
   * @param groups - Array of company group responses
   */
  setVendorGroups(vendorId, groups) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.setDistributorVendorGroups(distributorId, vendorId, groups);
    } else {
      console.warn("setVendorGroups called without distributor context. Use setDistributorVendorGroups instead.");
    }
  }
  /**
   * Checks if a vendor is currently loading within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor is loading
   */
  isDistributorVendorLoading(distributorId, vendorId) {
    return this.state().loadingVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * Checks if a vendor has been loaded within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor has been loaded
   */
  isDistributorVendorLoaded(distributorId, vendorId) {
    return this.state().loadedVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * Checks if a vendor failed to load within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor failed to load
   */
  isDistributorVendorFailedToLoad(distributorId, vendorId) {
    return this.state().failedVendors[distributorId]?.has(vendorId) ?? false;
  }
  /**
   * @deprecated Use isDistributorVendorLoading instead
   * Checks if a vendor is currently loading (legacy method)
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor is loading in current distributor context
   */
  isVendorLoading(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    return isDefined(distributorId) ? this.isDistributorVendorLoading(distributorId, vendorId) : false;
  }
  /**
   * @deprecated Use isDistributorVendorLoaded instead
   * Checks if a vendor has been loaded (legacy method)
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor has been loaded in current distributor context
   */
  isVendorLoaded(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    return isDefined(distributorId) ? this.isDistributorVendorLoaded(distributorId, vendorId) : false;
  }
  /**
   * @deprecated Use isDistributorVendorFailedToLoad instead
   * Checks if a vendor failed to load (legacy method)
   * @param vendorId - The ID of the vendor
   * @returns Whether the vendor failed to load in current distributor context
   */
  isVendorFailedToLoad(vendorId) {
    const distributorId = this.getCurrentDistributorId();
    return isDefined(distributorId) ? this.isDistributorVendorFailedToLoad(distributorId, vendorId) : false;
  }
  /**
   * Clears failed vendor state for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to clear from failed state
   */
  clearDistributorVendorFailedState(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorFailedVendors = state.failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newFailedVendors = new Set(distributorFailedVendors);
      newFailedVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        failedVendors: __spreadProps(__spreadValues({}, state.failedVendors), {
          [distributorId]: newFailedVendors
        })
      });
    });
  }
  /**
   * Gets all vendor IDs that are currently loading for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that are loading
   */
  getDistributorLoadingVendorIds(distributorId) {
    return this.state().loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Gets all vendor IDs that have been loaded for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that have been loaded
   */
  getDistributorLoadedVendorIds(distributorId) {
    return this.state().loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Gets all vendor IDs that failed to load for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Set of vendor IDs that failed to load
   */
  getDistributorFailedVendorIds(distributorId) {
    return this.state().failedVendors[distributorId] ?? /* @__PURE__ */ new Set();
  }
  /**
   * Set the loading state for a specific vendor in a distributor
   */
  setVendorLoadingForDistributor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoading = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: new Set(distributorLoading).add(vendorId)
        })
      });
    });
  }
  /**
   * Clear the loading state for a specific vendor in a distributor
   */
  clearVendorLoadingForDistributor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoading = state.loadingVendors[distributorId];
      if (isNullOrUndefined(distributorLoading))
        return state;
      const newLoadingVendors = new Set(distributorLoading);
      newLoadingVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: newLoadingVendors
        })
      });
    });
  }
  /**
   * Sets the currently selected client
   * @param client - The client response object or null to clear selection
   */
  setSelectedClient(client) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedClient: client
    }));
  }
  /**
   * Sets the vendor associated with the selected client
   * @param vendor - The vendor response object or null to clear
   */
  setClientVendor(vendor) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      clientVendor: vendor
    }));
  }
  /**
   * Sets the distributor associated with the current vendor
   * @param vendor - The vendor response object or null to clear
   */
  setVendorDistributor(vendor) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendorDistributor: vendor
    }));
  }
  /**
   * Updates the list of vendors in the state
   * @param vendors - Array of vendor list items
   */
  setVendors(vendors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendors
    }));
  }
  /**
   * Updates the list of distributors in the state
   * @param distributors - Array of distributor list items
   */
  setDistributors(distributors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      distributors
    }));
  }
  /**
   * Adds or appends group clients and updates pagination state.
   * @param distributorId - The ID of the distributor.
   * @param vendorId - The ID of the vendor.
   * @param groupId - The ID of the group.
   * @param clients - Array of client items.
   * @param pagination - Pagination info from the API call.
   * @param append - Whether to append or replace clients.
   */
  addGroupClients(distributorId, vendorId, groupId, clients, pagination, append = false) {
    this.validateVendorId(vendorId);
    if (!groupId)
      return;
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorGroupClients = state.groupClients[distributorId] ?? {};
      const vendorGroups = distributorGroupClients[vendorId] ?? {};
      const existingClients = append ? vendorGroups[groupId] ?? [] : [];
      const newGroupClients = __spreadProps(__spreadValues({}, state.groupClients), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorGroupClients), {
          [vendorId]: __spreadProps(__spreadValues({}, vendorGroups), {
            [groupId]: [...existingClients, ...clients]
          })
        })
      });
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newPagination = __spreadProps(__spreadValues({}, state.clientPagination), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
          [paginationKey]: __spreadProps(__spreadValues({}, pagination), { loadingMore: false })
        })
      });
      return __spreadProps(__spreadValues({}, state), {
        groupClients: newGroupClients,
        clientPagination: newPagination
      });
    });
  }
  /**
   * Gets clients for a specific group
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @returns Array of client items associated with the group
   */
  getGroupClients(distributorId, vendorId, groupId) {
    return this.state().groupClients[distributorId]?.[vendorId]?.[groupId] ?? [];
  }
  /**
   * Checks if a group has any clients loaded
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @returns boolean indicating if group has clients
   */
  hasGroupClients(distributorId, vendorId, groupId) {
    return this.getGroupClients(distributorId, vendorId, groupId).length > 0;
  }
  /**
   * Updates the children of a specific group node within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   * @param children - Array of tree nodes representing the children
   */
  updateGroupChildren(distributorId, vendorId, groupId, children) {
    this.state.update((state) => {
      const distributorGroupClients = state.groupClients[distributorId] ?? {};
      const vendorGroups = distributorGroupClients[vendorId] ?? {};
      return __spreadProps(__spreadValues({}, state), {
        groupClients: __spreadProps(__spreadValues({}, state.groupClients), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorGroupClients), {
            [vendorId]: __spreadProps(__spreadValues({}, vendorGroups), {
              [groupId]: children.map((node) => node.data)
            })
          })
        })
      });
    });
  }
  /**
   * Resets all state to initial values
   * Use this when navigating away or cleaning up
   */
  clearAllState() {
    this.state.set({
      loadedVendors: {},
      loadingVendors: {},
      failedVendors: {},
      expandedNodes: {},
      vendorClients: {},
      vendorGroups: {},
      groupClients: {},
      selectedClient: null,
      clientVendor: null,
      vendorDistributor: null,
      distributors: [],
      initialLoading: false,
      expandedGroups: {},
      expandedDistributors: /* @__PURE__ */ new Set(),
      clientPagination: {},
      distributorVendors: {}
    });
  }
  /**
   * Fallback handler when only client data is available
   * Clears all vendor-related data and sets the client
   * @param client - The client response object to fall back to
   */
  setFallbackToClient(client) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      selectedClient: client,
      clientVendor: null,
      vendorDistributor: null,
      vendors: [],
      // Clear other vendor-related data
      vendorClients: {},
      vendorGroups: {},
      loadedVendors: {},
      loadingVendors: {},
      failedVendors: {}
    }));
  }
  setFallbackToVendor(vendor) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      clientVendor: vendor,
      vendorDistributor: null,
      // Clear distributor-scoped data since we're falling back to vendor level
      distributorVendors: {},
      vendorClients: {},
      vendorGroups: {},
      groupClients: {},
      loadedVendors: {},
      loadingVendors: {},
      failedVendors: {},
      expandedNodes: {},
      expandedGroups: {},
      clientPagination: {},
      // Reset distributor expansion state
      expandedDistributors: /* @__PURE__ */ new Set(),
      // Clear distributors list since we don't have distributor context
      distributors: []
    }));
  }
  /**
   * Checks if a vendor has any associated clients in a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to check
   * @returns boolean indicating if vendor has clients
   * @throws Error if vendor ID is invalid
   */
  hasDistributorVendorClients(distributorId, vendorId) {
    this.validateVendorId(vendorId);
    const clients = this.state().vendorClients[distributorId]?.[vendorId];
    return Array.isArray(clients) && clients.length > 0;
  }
  /**
   * Sets expanded state for a group within a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   * @param expanded - Whether the group is expanded
   */
  setDistributorExpandedGroup(distributorId, groupId, expanded) {
    this.state.update((state) => {
      const distributorExpandedGroups = state.expandedGroups[distributorId] ?? /* @__PURE__ */ new Set();
      const newExpandedGroups = new Set(distributorExpandedGroups);
      if (expanded) {
        newExpandedGroups.add(groupId);
      } else {
        newExpandedGroups.delete(groupId);
      }
      return __spreadProps(__spreadValues({}, state), {
        expandedGroups: __spreadProps(__spreadValues({}, state.expandedGroups), {
          [distributorId]: newExpandedGroups
        })
      });
    });
  }
  /**
   * @deprecated Use setDistributorExpandedGroup instead
   * Sets expanded state for a group (legacy method for backward compatibility)
   * @param groupId - The ID of the group
   * @param expanded - Whether the group is expanded
   */
  setExpandedGroup(groupId, expanded) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.setDistributorExpandedGroup(distributorId, groupId, expanded);
    } else {
      console.warn("setExpandedGroup called without distributor context. Use setDistributorExpandedGroup instead.");
    }
  }
  /**
   * Checks if a group is expanded within a specific distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   * @returns Whether the group is expanded
   */
  isDistributorGroupExpanded(distributorId, groupId) {
    return this.state().expandedGroups[distributorId]?.has(groupId) ?? false;
  }
  /**
   * Sets initial expansion state for a group within a distributor context
   * @param distributorId - The ID of the distributor
   * @param groupId - The ID of the group
   */
  setDistributorInitialGroupExpansion(distributorId, groupId) {
    this.state.update((state) => {
      const distributorExpandedGroups = state.expandedGroups[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        expandedGroups: __spreadProps(__spreadValues({}, state.expandedGroups), {
          [distributorId]: new Set(distributorExpandedGroups).add(groupId)
        })
      });
    });
  }
  setExpandedDistributor(distributorId, expanded) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      expandedDistributors: expanded ? new Set(state.expandedDistributors).add(distributorId) : new Set([...state.expandedDistributors].filter((id) => id !== distributorId))
    }));
  }
  /**
   * Gets a specific client by ID from any loaded clients within distributor contexts
   * @param clientId - The ID of the client to find
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The client object if found, null otherwise
   */
  getClientById(clientId, distributorId) {
    if (!clientId) {
      return null;
    }
    if (this.state().selectedClient?.id === clientId) {
      return this.state().selectedClient;
    }
    if (isDefined(distributorId)) {
      return this.getClientByIdInDistributor(clientId, distributorId);
    }
    const distributorVendorClients = this.state().vendorClients;
    for (const [distId] of Object.entries(distributorVendorClients)) {
      const client = this.getClientByIdInDistributor(clientId, distId);
      if (client)
        return client;
    }
    return null;
  }
  /**
   * Helper method to find a client within a specific distributor's data
   * @param clientId - The ID of the client to find
   * @param distributorId - The ID of the distributor to search within
   * @returns The client object if found, null otherwise
   */
  getClientByIdInDistributor(clientId, distributorId) {
    const vendorClients = this.state().vendorClients[distributorId] ?? {};
    for (const clients of Object.values(vendorClients)) {
      const client = clients.find((c) => c.id === clientId);
      if (client)
        return client;
    }
    const groupClients = this.state().groupClients[distributorId] ?? {};
    for (const vendorGroups of Object.values(groupClients)) {
      for (const clients of Object.values(vendorGroups)) {
        const client = clients.find((c) => c.id === clientId);
        if (client)
          return client;
      }
    }
    return null;
  }
  /**
   * Gets a specific vendor by ID within distributor contexts
   * @param vendorId - The ID of the vendor to find
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The vendor object if found, null otherwise
   */
  getVendorById(vendorId, distributorId) {
    if (!vendorId) {
      return null;
    }
    if (this.state().clientVendor?.id === vendorId) {
      return this.state().clientVendor;
    }
    if (isDefined(distributorId)) {
      const distributorVendors = this.state().distributorVendors[distributorId] ?? [];
      const vendor = distributorVendors.find((v) => v.id === vendorId);
      if (vendor)
        return vendor;
    } else {
      const distributorVendors = this.state().distributorVendors;
      for (const vendors of Object.values(distributorVendors)) {
        const vendor = vendors.find((v) => v.id === vendorId);
        if (vendor)
          return vendor;
      }
    }
    return null;
  }
  /**
   * Gets the parent vendor for a specific client within distributor contexts
   * @param clientId - The ID of the client
   * @param distributorId - Optional distributor ID to scope the search
   * @returns The parent vendor if found, null otherwise
   */
  getVendorForClient(clientId, distributorId) {
    if (!clientId) {
      return null;
    }
    if (this.state().selectedClient?.id === clientId) {
      return this.state().clientVendor;
    }
    if (isDefined(distributorId)) {
      return this.getVendorForClientInDistributor(clientId, distributorId);
    }
    const distributorVendorClients = this.state().vendorClients;
    for (const [distId] of Object.entries(distributorVendorClients)) {
      const vendor = this.getVendorForClientInDistributor(clientId, distId);
      if (vendor)
        return vendor;
    }
    return null;
  }
  /**
   * Helper method to find the vendor for a client within a specific distributor
   * @param clientId - The ID of the client
   * @param distributorId - The ID of the distributor to search within
   * @returns The parent vendor if found, null otherwise
   */
  getVendorForClientInDistributor(clientId, distributorId) {
    const vendorClients = this.state().vendorClients[distributorId] ?? {};
    for (const [vendorId, clients] of Object.entries(vendorClients)) {
      const foundClient = clients.find((c) => c.id === clientId);
      if (foundClient) {
        return this.getVendorById(vendorId, distributorId);
      }
    }
    const groupClients = this.state().groupClients[distributorId] ?? {};
    for (const [vendorId, vendorGroups] of Object.entries(groupClients)) {
      for (const clients of Object.values(vendorGroups)) {
        const foundClient = clients.find((c) => c.id === clientId);
        if (foundClient) {
          return this.getVendorById(vendorId, distributorId);
        }
      }
    }
    return null;
  }
  /**
   * Gets all clients for a specific vendor within a distributor context
   * @param vendorId - The ID of the vendor
   * @param distributorId - The ID of the distributor
   * @returns Array of all clients associated with the vendor within the distributor
   */
  getAllClientsForVendorInDistributor(vendorId, distributorId) {
    if (!vendorId || !distributorId) {
      return [];
    }
    const allClients = [];
    const directClients = this.state().vendorClients[distributorId]?.[vendorId] ?? [];
    allClients.push(...directClients);
    const vendorGroups = this.state().groupClients[distributorId]?.[vendorId] ?? {};
    for (const clients of Object.values(vendorGroups)) {
      allClients.push(...clients);
    }
    return allClients;
  }
  /**
   * Gets all clients for a specific vendor (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor
   * @returns Array of all clients associated with the vendor across all distributors
   * @deprecated Use getAllClientsForVendorInDistributor instead
   */
  getAllClientsForVendor(vendorId) {
    if (!vendorId) {
      return [];
    }
    const allClients = [];
    const distributorVendorClients = this.state().vendorClients;
    for (const [distributorId] of Object.entries(distributorVendorClients)) {
      const distributorClients = this.getAllClientsForVendorInDistributor(vendorId, distributorId);
      allClients.push(...distributorClients);
    }
    const legacyDirectClients = this.state().vendorClients[vendorId] ?? [];
    if (Array.isArray(legacyDirectClients)) {
      allClients.push(...legacyDirectClients);
    }
    return allClients;
  }
  /**
   * Sets the loading state for loading more clients within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @param loading - Whether more clients are being loaded
   */
  setLoadingMoreClients(distributorId, vendorId, groupId, loading) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const currentPagination = distributorPagination[paginationKey];
      if (isNullOrUndefined(currentPagination)) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
            [paginationKey]: __spreadProps(__spreadValues({}, currentPagination), { loadingMore: loading })
          })
        })
      });
    });
  }
  /**
   * @deprecated Use clearDistributorGroupPagination instead
   * Clears pagination state for a specific group (legacy method for backward compatibility)
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   */
  clearGroupPagination(vendorId, groupId) {
    const distributorId = this.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      this.clearDistributorGroupPagination(distributorId, vendorId, groupId);
    } else {
      console.warn("clearGroupPagination called without distributor context. Use clearDistributorGroupPagination instead.");
      const key = this.getPaginationKey(vendorId, groupId);
      this.state.update((state) => {
        const newPagination = __spreadValues({}, state.clientPagination);
        delete newPagination[key];
        return __spreadProps(__spreadValues({}, state), { clientPagination: newPagination });
      });
    }
  }
  /**
   * Clears pagination state for a vendor's direct clients
   * @param vendorId - ID of the vendor
   */
  clearVendorPagination(vendorId) {
    this.state.update((state) => {
      const paginationKey = vendorId;
      const newPagination = __spreadValues({}, state.clientPagination);
      delete newPagination[paginationKey];
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: newPagination
      });
    });
  }
  /**
   * Clears all client data for a specific vendor
   * @param vendorId - ID of the vendor
   */
  clearVendorClients(vendorId) {
    this.state.update((state) => {
      const newVendorClients = __spreadValues({}, state.vendorClients);
      delete newVendorClients[vendorId];
      return __spreadProps(__spreadValues({}, state), {
        vendorClients: newVendorClients
      });
    });
  }
  /**
   * Clears all group data for a specific vendor
   * @param vendorId - ID of the vendor
   */
  clearVendorGroups(vendorId) {
    this.state.update((state) => {
      const newVendorGroups = __spreadValues({}, state.vendorGroups);
      delete newVendorGroups[vendorId];
      const newGroupClients = __spreadValues({}, state.groupClients);
      Object.keys(newGroupClients).forEach((key) => {
        if (key.startsWith(`${vendorId}_`)) {
          delete newGroupClients[key];
        }
      });
      const newPagination = __spreadValues({}, state.clientPagination);
      Object.keys(newPagination).forEach((key) => {
        if (key.startsWith(`${vendorId}_`)) {
          delete newPagination[key];
        }
      });
      return __spreadProps(__spreadValues({}, state), {
        vendorGroups: newVendorGroups,
        groupClients: newGroupClients,
        clientPagination: newPagination
      });
    });
  }
  // ========================================
  // NEW DISTRIBUTOR-SCOPED METHODS
  // ========================================
  /**
   * Sets vendors for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendors - Array of vendor items
   */
  setDistributorVendors(distributorId, vendors) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      distributorVendors: __spreadProps(__spreadValues({}, state.distributorVendors), {
        [distributorId]: vendors
      })
    }));
  }
  /**
   * Gets vendors for a specific distributor
   * @param distributorId - The ID of the distributor
   * @returns Array of vendors for the distributor
   */
  getDistributorVendors(distributorId) {
    return this.state().distributorVendors[distributorId] ?? [];
  }
  /**
   * Gets vendors for the current distributor context
   * @returns Array of vendors for the current distributor
   */
  getVendorsForCurrentDistributor() {
    const distributorId = this.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      return [];
    }
    return this.getDistributorVendors(distributorId);
  }
  /**
   * Adds or appends vendor clients for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param clients - Array of client items
   * @param pagination - Pagination info from the API call
   * @param append - Whether to append or replace clients
   */
  addDistributorVendorClients(distributorId, vendorId, clients, pagination, append = false) {
    this.validateVendorId(vendorId);
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId);
    this.state.update((state) => {
      const distributorClients = state.vendorClients[distributorId] ?? {};
      const existingClients = append ? distributorClients[vendorId] ?? [] : [];
      const newVendorClients = __spreadProps(__spreadValues({}, state.vendorClients), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorClients), {
          [vendorId]: [...existingClients, ...clients]
        })
      });
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newPagination = __spreadProps(__spreadValues({}, state.clientPagination), {
        [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
          [paginationKey]: __spreadProps(__spreadValues({}, pagination), { loadingMore: false })
        })
      });
      return __spreadProps(__spreadValues({}, state), {
        vendorClients: newVendorClients,
        clientPagination: newPagination
      });
    });
  }
  /**
   * Sets vendor groups for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groups - Array of company group responses
   */
  setDistributorVendorGroups(distributorId, vendorId, groups) {
    this.state.update((state) => __spreadProps(__spreadValues({}, state), {
      vendorGroups: __spreadProps(__spreadValues({}, state.vendorGroups), {
        [distributorId]: __spreadProps(__spreadValues({}, state.vendorGroups[distributorId] ?? {}), {
          [vendorId]: groups
        })
      })
    }));
  }
  /**
   * Gets vendor clients for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Array of clients for the vendor within the distributor
   */
  getDistributorVendorClients(distributorId, vendorId) {
    return this.state().vendorClients[distributorId]?.[vendorId] ?? [];
  }
  /**
   * Gets vendor groups for a specific distributor and vendor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @returns Array of groups for the vendor within the distributor
   */
  getDistributorVendorGroups(distributorId, vendorId) {
    return this.state().vendorGroups[distributorId]?.[vendorId] ?? [];
  }
  /**
   * Adds loading vendor for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to mark as loading
   */
  addDistributorLoadingVendor(distributorId, vendorId) {
    this.validateVendorId(vendorId);
    this.state.update((state) => {
      const distributorLoadingVendors = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: new Set(distributorLoadingVendors).add(vendorId)
        })
      });
    });
  }
  /**
   * Removes loading vendor for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to remove from loading state
   */
  removeDistributorLoadingVendor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadingVendors = state.loadingVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newLoadingVendors = new Set(distributorLoadingVendors);
      newLoadingVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadingVendors: __spreadProps(__spreadValues({}, state.loadingVendors), {
          [distributorId]: newLoadingVendors
        })
      });
    });
  }
  /**
   * Removes a vendor from the loaded vendors set for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to remove from loaded state
   */
  removeDistributorLoadedVendor(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadedVendors = state.loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      const newLoadedVendors = new Set(distributorLoadedVendors);
      newLoadedVendors.delete(vendorId);
      return __spreadProps(__spreadValues({}, state), {
        loadedVendors: __spreadProps(__spreadValues({}, state.loadedVendors), {
          [distributorId]: newLoadedVendors
        })
      });
    });
  }
  /**
   * Marks a vendor as loaded for a specific distributor
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor to mark as loaded
   */
  markDistributorVendorAsLoaded(distributorId, vendorId) {
    this.state.update((state) => {
      const distributorLoadedVendors = state.loadedVendors[distributorId] ?? /* @__PURE__ */ new Set();
      return __spreadProps(__spreadValues({}, state), {
        loadedVendors: __spreadProps(__spreadValues({}, state.loadedVendors), {
          [distributorId]: new Set(distributorLoadedVendors).add(vendorId)
        })
      });
    });
  }
  /**
   * Sets expanded state for a node within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param nodeId - The ID of the node
   * @param expanded - Whether the node is expanded
   */
  setDistributorNodeExpanded(distributorId, nodeId, expanded) {
    this.state.update((state) => {
      const distributorExpandedNodes = state.expandedNodes[distributorId] ?? /* @__PURE__ */ new Set();
      const newExpandedNodes = new Set(distributorExpandedNodes);
      if (expanded) {
        newExpandedNodes.add(nodeId);
      } else {
        newExpandedNodes.delete(nodeId);
      }
      return __spreadProps(__spreadValues({}, state), {
        expandedNodes: __spreadProps(__spreadValues({}, state.expandedNodes), {
          [distributorId]: newExpandedNodes
        })
      });
    });
  }
  /**
   * Checks if a node is expanded within a specific distributor
   * @param distributorId - The ID of the distributor
   * @param nodeId - The ID of the node
   * @returns Whether the node is expanded
   */
  isDistributorNodeExpanded(distributorId, nodeId) {
    return this.state().expandedNodes[distributorId]?.has(nodeId) ?? false;
  }
  /**
   * Gets pagination state for a specific distributor, vendor, and optional group
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @returns Pagination state or undefined if not found
   */
  getDistributorPaginationState(distributorId, vendorId, groupId) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    return this.state().clientPagination[distributorId]?.[paginationKey];
  }
  /**
   * Updates loading more state for a specific distributor pagination
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - Optional group ID
   * @param loadingMore - Whether more data is being loaded
   */
  setDistributorLoadingMore(distributorId, vendorId, groupId, loadingMore) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const currentPagination = distributorPagination[paginationKey];
      if (isNullOrUndefined(currentPagination)) {
        return state;
      }
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: __spreadProps(__spreadValues({}, distributorPagination), {
            [paginationKey]: __spreadProps(__spreadValues({}, currentPagination), {
              loadingMore
            })
          })
        })
      });
    });
  }
  /**
   * Clears pagination state for a specific group within a distributor context
   * @param distributorId - The ID of the distributor
   * @param vendorId - The ID of the vendor
   * @param groupId - The ID of the group
   */
  clearDistributorGroupPagination(distributorId, vendorId, groupId) {
    const paginationKey = this.getDistributorPaginationKey(distributorId, vendorId, groupId);
    this.state.update((state) => {
      const distributorPagination = state.clientPagination[distributorId] ?? {};
      const newDistributorPagination = __spreadValues({}, distributorPagination);
      delete newDistributorPagination[paginationKey];
      return __spreadProps(__spreadValues({}, state), {
        clientPagination: __spreadProps(__spreadValues({}, state.clientPagination), {
          [distributorId]: newDistributorPagination
        })
      });
    });
  }
  /**
   * Checks if a distributor is expanded
   * @param distributorId - The ID of the distributor
   * @returns Whether the distributor is expanded
   */
  isDistributorExpanded(distributorId) {
    return this.state().expandedDistributors.has(distributorId);
  }
  static \u0275fac = function AdminStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminStateService, factory: _AdminStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/session-cleanup.service.ts
var SessionCleanupService = class _SessionCleanupService {
  localStorage = inject(LocalStorageService);
  authTokenManager = inject(AuthTokenManagerService);
  adminState = inject(AdminStateService);
  userSessionService = inject(UserSessionService);
  /**
   * Clears all authentication and user data.
   * Use this for logout operations.
   */
  clearAllAuthData() {
    this.authTokenManager.clearTokens();
    this.localStorage.clearApiScopedData();
    this.localStorage.clearUserScopedData();
    this.userSessionService.clearAllSessions();
    this.adminState.clearAllState();
  }
  /**
   * Detects and handles user mismatch scenarios.
   * Returns true if mismatch was detected and cleaned up.
   */
  detectAndHandleUserMismatch(newUserId) {
    const hasMismatch = this.localStorage.detectUserMismatch(newUserId);
    if (hasMismatch) {
      console.warn("User mismatch detected, clearing previous user data");
      this.localStorage.clearUserScopedData();
      this.userSessionService.clearAllSessions();
      return true;
    }
    return false;
  }
  /**
   * Records the last authenticated user.
   */
  setLastAuthenticatedUser(userId) {
    this.localStorage.setLastAuthenticatedUserId(userId);
  }
  static \u0275fac = function SessionCleanupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionCleanupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionCleanupService, factory: _SessionCleanupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionCleanupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/auth-data.service.ts
var AuthDataService = class _AuthDataService {
  userProfileSignal = signal(null);
  userPermissionsSignal = signal([]);
  router = inject(Router);
  authService = inject(AuthService);
  accountsService = inject(AccountsService);
  sessionCleanup = inject(SessionCleanupService);
  localStorage = inject(LocalStorageService);
  flags = {
    otpTestingEnabled: () => this.getUserProfile()?.owner.type === "system" || this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com"),
    labelsEnabled: () => true,
    tripLimitsEnabled: () => true,
    assetPerformanceEnabled: () => this.getUserProfile()?.owner?.type === "system" || this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com"),
    deviceHealthEnabled: () => this.getUserProfile()?.owner?.type === "system" || this.getUserProfile()?.emailAddress?.endsWith("keytelematics.com")
  };
  /**
   * Computed signal for accessing the user profile
   */
  profile = computed(() => this.userProfileSignal());
  /**
   * Returns the writable signal for the user profile
   */
  getUserProfileSignal() {
    return this.userProfileSignal;
  }
  /**
   * Returns the current user profile value
   */
  getUserProfile() {
    return this.userProfileSignal();
  }
  /**
   * Updates the user profile, merging with existing data if present
   * Also extracts and sets user permissions.
   * @param userProfile - Partial user profile data to update
   */
  async setUserProfile(userProfile) {
    const currentProfile = this.userProfileSignal();
    let updatedProfile;
    if (isNullOrUndefined(currentProfile)) {
      updatedProfile = userProfile;
    } else {
      updatedProfile = __spreadValues(__spreadValues({}, currentProfile), userProfile);
    }
    this.userProfileSignal.set(updatedProfile);
    if (updatedProfile.id) {
      this.localStorage.setCurrentUserId(updatedProfile.id);
    }
    await this.extractAndSetAllPermissions(updatedProfile.roles || []);
  }
  /**
   * Extracts permissions from all user roles and updates the permissions signal.
   * @param roles - Array of user roles
   */
  async extractAndSetAllPermissions(roles) {
    if (!roles || roles.length === 0) {
      this.userPermissionsSignal.set([]);
      return;
    }
    const allPermissions = [];
    for (const role of roles) {
      const permissions = await this.extractPermissionsFromRole(role.id);
      allPermissions.push(...permissions);
    }
    this.userPermissionsSignal.set([...new Set(allPermissions)]);
  }
  /**
   * Extracts permissions from a single role
   * @param roleId - The role ID
   * @returns Promise<string[]> - Array of permissions for this role
   */
  async extractPermissionsFromRole(roleId) {
    if (isNullOrUndefined(roleId)) {
      console.warn("Cannot extract permissions: Role ID is missing.");
      return [];
    }
    if (roleId === DEFAULT_SYSTEM_ID) {
      return ["system:all"];
    }
    try {
      const userRole = await firstValueFrom(this.accountsService.getUserRole(roleId));
      if (isNullOrUndefined(userRole) || !userRole.legacyRights) {
        if (isNullOrUndefined(userRole)) {
          console.warn("UserRoleResponse is null or undefined.");
        } else {
          console.warn("legacyRights are missing in UserRoleResponse.");
        }
        return [];
      }
      const permissions = [];
      const legacyRights = userRole.legacyRights;
      for (const feature in legacyRights) {
        if (Object.hasOwn(legacyRights, feature)) {
          const actions = legacyRights[feature];
          if (Array.isArray(actions)) {
            for (const action of actions) {
              permissions.push(`${feature}:${action}`);
            }
          }
        }
      }
      return permissions;
    } catch (error) {
      console.error("Error fetching or processing user role for permissions:", error);
      return [];
    }
  }
  /**
   * Checks if the current user has a specific permission.
   * @param permission - The permission string to check for.
   */
  hasPermission(permission) {
    return this.userPermissionsSignal().includes(permission) || this.userPermissionsSignal().includes("system:all");
  }
  /**
   * Checks if the current user has ALL of the specified permissions.
   * @param permissions - An array of permission strings to check for.
   */
  hasAllPermissions(permissions) {
    if (isEmpty(permissions) || permissions.length === 0) {
      return true;
    }
    const userPerms = this.userPermissionsSignal();
    return permissions.every((p) => userPerms.includes(p)) || userPerms.includes("system:all");
  }
  /**
   * Checks if the current user has ANY of the specified permissions.
   * @param permissions - An array of permission strings to check for.
   */
  hasAnyPermission(permissions) {
    if (isEmpty(permissions) || permissions.length === 0) {
      return true;
    }
    const userPerms = this.userPermissionsSignal();
    return permissions.some((p) => userPerms.includes(p)) || userPerms.includes("system:all");
  }
  /**
   * Clears the user profile data and permissions (for account switching)
   * Preserves currentUserId to maintain namespace
   */
  clearUserProfile() {
    this.userProfileSignal.set(null);
    this.userPermissionsSignal.set([]);
  }
  /**
   * Clears the user profile data and permissions
   */
  clearAllUserData() {
    this.clearUserProfile();
    this.localStorage.setCurrentUserId(null);
  }
  logout() {
    this.authService.signOut({}).subscribe({
      next: () => {
        this.clearAllUserData();
        this.sessionCleanup.clearAllAuthData();
        this.router.navigate(["/auth/login"]).catch(() => {
        });
      },
      error: () => {
        this.forceLogout();
      }
    });
  }
  forceLogout() {
    this.clearAllUserData();
    this.sessionCleanup.clearAllAuthData();
    this.router.navigate(["/auth/login"]).catch(() => {
    });
  }
  /**
   * Checks if the current user is a Super Admin.
   */
  isSuperAdmin() {
    const userProfile = this.userProfileSignal();
    if (!userProfile?.roles)
      return false;
    return userProfile.roles.some((role) => role.id === DEFAULT_SYSTEM_ID || role.id === SUPER_ADMIN_ROLE_ID || (role.name?.toLowerCase().includes("super admin") ?? false));
  }
  static \u0275fac = function AuthDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthDataService, factory: _AuthDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AdminStateService,
  SessionCleanupService,
  AuthDataService
};
//# sourceMappingURL=chunk-KQ2LGU3N.js.map
