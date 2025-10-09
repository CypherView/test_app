import {
  AdaptiveLayoutComponent
} from "./chunk-XZJMM7BP.js";
import {
  AdminTreetableContainerComponent,
  GridConfigurationFactory,
  TreeTableConfigurationFactory
} from "./chunk-QIKMA44A.js";
import {
  EntityDetailsService
} from "./chunk-UP5L6WRJ.js";
import "./chunk-U5T4J3BK.js";
import {
  AlertDetailsSectionComponent,
  AlertIconStorageService,
  AlertsDataAdapter,
  AssetCategoriesDataAdapter,
  AssetCategoriesSectionComponent,
  AssetCategoryDetailsSectionComponent,
  AssetDetailsSectionComponent,
  AssetGroupDetailsSectionComponent,
  AssetGroupsDataAdapter,
  AssetRatingProfileDetailsSectionComponent,
  AssetRatingProfilesDataAdapter,
  AssetStateProfileDetailsSectionComponent,
  AssetStateProfilesDataAdapter,
  AssetTagDetailsSectionComponent,
  AssetTagsDataAdapter,
  AssetsDataAdapter,
  CacheInvalidationService,
  ClientsDataAdapter,
  CompanyGroupDetailsSectionComponent,
  CompanyGroupsDataAdapter,
  CostCentreDetailsSectionComponent,
  CostCentresDataAdapter,
  CustomFieldDetailsSectionComponent,
  CustomFieldsDataAdapter,
  DetailsComponentFactory,
  DeviceConfigProfileDetailsSectionComponent,
  DeviceConfigProfilesDataAdapter,
  DeviceDetailsSectionComponent,
  DeviceProviderDetailsSectionComponent,
  DeviceProviderParametersSectionComponent,
  DeviceProvidersDataAdapter,
  DeviceTypesDataAdapter,
  DevicesDataAdapter,
  DistributorsDataAdapter,
  EmailProviderDetailsSectionComponent,
  EmailProviderParametersSectionComponent,
  EmailProvidersDataAdapter,
  EntityDetailsStateService,
  GeoLockProfileDetailsSectionComponent,
  GeoLockProfilesDataAdapter,
  GeofenceDetailsSectionComponent,
  GeofenceGroupDetailsSectionComponent,
  GeofenceGroupsDataAdapter,
  GeofencesDataAdapter,
  InfoSectionComponent,
  IoTypeDetailsSectionComponent,
  IoTypesDataAdapter,
  OverspeedProfileDetailsSectionComponent,
  OverspeedProfilesDataAdapter,
  RoadProfileDetailsSectionComponent,
  RoadProfilesDataAdapter,
  SimCardDetailsSectionComponent,
  SimCardsDataAdapter,
  SmsGatewayProviderDetailsSectionComponent,
  SmsGatewayProviderParametersSectionComponent,
  SmsGatewayProvidersDataAdapter,
  ThemeDetailsSectionComponent,
  ThemesDataAdapter,
  UserDetailsSectionComponent,
  UserRoleDetailsSectionComponent,
  UserRolesDataAdapter,
  UserRolesSectionComponent,
  UsersDataAdapter,
  VendorsDataAdapter
} from "./chunk-JJGIUWJ2.js";
import {
  CardModule,
  ClientDetailsComponent,
  DeviceTypesDetailsComponent,
  DistributorDetailsComponent,
  TypedEntitySectionBaseComponent,
  VendorDetailsComponent,
  faAngleLeft,
  faAngleRight
} from "./chunk-VDFX22QF.js";
import {
  SEARCH_DEBOUNCE_TIME
} from "./chunk-PPRVSR7K.js";
import {
  ApiSchemaService,
  AssetGroupingService,
  ConfirmDialog,
  ConfirmDialogModule,
  DynamicFormComponent,
  RequestCacheService,
  Tree,
  TreeModule
} from "./chunk-7HIRWNPC.js";
import "./chunk-S3HO5ZVD.js";
import "./chunk-FIF626MM.js";
import {
  getThemeDictionary
} from "./chunk-DSMHE36S.js";
import {
  FaIconComponent,
  FontAwesomeModule
} from "./chunk-GM73WNCJ.js";
import {
  ADMIN_TREE,
  ClientDataService,
  DATE_FORMATS,
  Dialog,
  DialogModule,
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
  LocalStorageService,
  MeasurementDateTimeService,
  MeasurementUnitType,
  MeasurementUnitsService,
  ProgressSpinner,
  ProgressSpinnerModule,
  UtilityService,
  createAutocompleteField,
  createDropdownField,
  createNumberField,
  require_lodash,
  takeUntilDestroyed
} from "./chunk-C2NNNFHP.js";
import {
  BaseComponent,
  BaseStyle,
  Button,
  ButtonDirective,
  ButtonModule,
  C2 as C,
  ConfirmationService,
  FormsModule,
  IconField,
  InputIcon,
  InputText,
  InputTextModule,
  MessageService,
  PrimeTemplate,
  ReactiveFormsModule,
  ScrollerModule,
  SharedModule,
  Tooltip,
  TooltipModule,
  Validators,
  Y,
  s2 as s,
  transformToBoolean
} from "./chunk-SIZTMCIF.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-G6AKSBPY.js";
import {
  BroadcastEventMessageService
} from "./chunk-7UUZS7IM.js";
import {
  AccountsService,
  AdminStateService,
  AlertListItem,
  AlertResponse,
  AssetRatingProfileListItem,
  AssetRatingProfileResponse,
  AssetResponse,
  AssetStateProfileListItem,
  AssetStateProfileResponse,
  AssetTagListItem,
  AssetTagResponse,
  AuthDataService,
  ClientListItem,
  ClientUpdateRequest,
  DeviceConfigProfileListItem,
  DeviceConfigProfileResponse,
  DeviceListItem,
  DeviceProviderListItem,
  DeviceProviderResponse,
  DeviceTypesService,
  DistributorListItem,
  DistributorUpdateRequest,
  EmailProviderListItem,
  EntitiesService,
  GeoLockProfileListItem,
  GeoLockProfileResponse,
  IoTypeListItem,
  IoTypeResponse,
  OverspeedProfileListItem,
  OverspeedProfileResponse,
  RoadProfileListItem,
  SearchService,
  SimCardListItem,
  SimCardResponse,
  SmsGatewayProviderListItem,
  SmsGatewayProviderResponse,
  ThemeResponse,
  UserUpdateRequest,
  VendorListItem,
  VendorUpdateRequest
} from "./chunk-72EIB3HH.js";
import {
  DEFAULT_LIST_SIZE,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SYSTEM_ID,
  GRID_CONFIGS,
  LOCAL_STORAGE_KEY_SELECTED_CLIENT,
  SpatialUtils,
  TREE_TABLE_CONFIGS,
  hasProperty,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isString
} from "./chunk-UW6Q2JGR.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpErrorResponse,
  KeyValuePipe,
  NavigationEnd,
  NgClass,
  NgComponentOutlet,
  NgIf,
  NgTemplateOutlet,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-L35GT5ED.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  EMPTY,
  Injectable,
  Input,
  NgModule,
  Pipe,
  Subject,
  ViewChild,
  ViewEncapsulation,
  catchError,
  combineLatest,
  computed,
  contentChild,
  contentChildren,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  finalize,
  firstValueFrom,
  forwardRef,
  inject,
  input,
  map,
  model,
  of,
  output,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7FSD67AL.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/services/admin-tree-client.service.ts
var AdminTreeClientService = class _AdminTreeClientService {
  accountsService = inject(AccountsService);
  utilityService = inject(UtilityService);
  cacheService = inject(RequestCacheService);
  /**
   * Lists all clients for a given vendor and optional group
   * @param vendorId - The ID of the vendor to fetch clients for
   * @param groupId - Optional group ID to filter clients
   * @param offset - Starting offset for pagination
   * @param limit - Maximum number of results to return
   * @param searchQuery - Optional search query to filter clients by name
   * @returns Promise resolving to array of ClientListItem
   * @throws Error if vendorId is not provided
   */
  async listVendorClients(vendorId, groupId, offset, limit, searchQuery) {
    if (!vendorId) {
      throw new Error("Vendor ID is required");
    }
    const filters = {
      group: { value: groupId ?? ADMIN_TREE.DEFAULT_GROUP_ID, operator: "=" },
      state: { value: ADMIN_TREE.DELETED_STATE, operator: "!=" }
    };
    if (isDefined(searchQuery) && searchQuery.trim().length > 0) {
      filters["name"] = `*${searchQuery.trim()}*`;
    }
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    const searchSuffix = isDefined(searchQuery) ? `-search-${searchQuery}` : "";
    const cacheKey = `admin-tree-clients-${vendorId}-${groupId ?? "all"}-${offset ?? 0}-${limit ?? ADMIN_TREE.PAGINATION.DEFAULT_PAGE_SIZE}${searchSuffix}`;
    return this.cacheService.getOrFetchAsync(cacheKey, () => firstValueFrom(this.accountsService.listClients(vendorId, offset ?? ADMIN_TREE.PAGINATION.INITIAL_PAGE, limit ?? ADMIN_TREE.PAGINATION.DEFAULT_PAGE_SIZE, "name", rqlFilter).pipe(map((response) => {
      return {
        clients: response.items,
        total: response.count,
        hasMore: response.count > (offset ?? 0) + (response.items.length ?? 0)
      };
    }))), 1e4);
  }
  /**
   * Fetches a single client by ID
   * @param clientId - The ID of the client to fetch
   * @returns Promise resolving to ClientResponse or null if not found
   * @throws Error if clientId is not provided
   */
  async fetchClient(clientId) {
    if (!clientId) {
      throw new Error("Client ID is required");
    }
    return firstValueFrom(this.accountsService.getClient(clientId).pipe(catchError(() => of(null))));
  }
  /**
   * Attempts to load a client using saved ID or default ID
   * @param savedClientId - Previously saved client ID
   * @param defaultClientId - Fallback client ID
   * @returns Promise resolving to ClientResponse or null if neither client exists
   */
  async tryLoadClient(savedClientId, defaultClientId) {
    if (isDefined(savedClientId)) {
      const client = await this.fetchClient(savedClientId);
      if (client)
        return client;
    }
    if (isDefined(defaultClientId)) {
      return this.fetchClient(defaultClientId);
    }
    return null;
  }
  static \u0275fac = function AdminTreeClientService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeClientService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeClientService, factory: _AdminTreeClientService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeClientService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-group.service.ts
var AdminTreeGroupService = class _AdminTreeGroupService {
  accountsService = inject(AccountsService);
  cacheService = inject(RequestCacheService);
  utilityService = inject(UtilityService);
  /**
   * Lists all company groups for a given vendor
   * @param vendorId - The ID of the vendor to fetch groups for
   * @param searchQuery - Optional search query to filter groups by name
   * @returns Promise resolving to array of CompanyGroupResponse
   * @throws Error if vendorId is empty or undefined
   */
  async listCompanyGroups(vendorId, searchQuery) {
    if (!vendorId?.trim()) {
      throw new Error("Vendor ID is required");
    }
    let rqlFilter = "";
    if (isDefined(searchQuery) && searchQuery.trim().length > 0) {
      const filters = {
        name: `*${searchQuery.trim()}*`
      };
      rqlFilter = this.utilityService.constructRqlFilter(filters);
    }
    const searchSuffix = isDefined(searchQuery) ? `-search-${searchQuery}` : "";
    const cacheKey = `admin-tree-groups-${vendorId}${searchSuffix}`;
    return this.cacheService.getOrFetchAsync(cacheKey, () => firstValueFrom(this.accountsService.listCompanyGroups(
      vendorId,
      void 0,
      // offset
      void 0,
      // limit
      "name",
      // sort
      rqlFilter
    ).pipe(map((response) => response.items ?? []), catchError(() => of([])))), 3e4);
  }
  static \u0275fac = function AdminTreeGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeGroupService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeGroupService, factory: _AdminTreeGroupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeGroupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-vendor.service.ts
var AdminTreeVendorService = class _AdminTreeVendorService {
  accountsService = inject(AccountsService);
  /**
   * Fetches a vendor associated with a client
   * @param vendorId - The ID of the vendor to fetch
   * @returns Promise resolving to VendorResponse or null if not found
   * @throws Error if vendorId is empty or undefined
   */
  async fetchClientVendor(vendorId) {
    if (!vendorId?.trim()) {
      throw new Error("Vendor ID is required");
    }
    return firstValueFrom(this.accountsService.getVendor(vendorId).pipe(catchError(() => {
      return of(null);
    })));
  }
  /**
   * Fetches a distributor associated with a vendor
   * @param distributorId - The ID of the distributor to fetch
   * @returns Promise resolving to VendorResponse or null if not found
   * @throws Error if distributorId is empty or undefined
   */
  async fetchVendorDistributor(distributorId) {
    if (!distributorId?.trim()) {
      throw new Error("Distributor ID is required");
    }
    return firstValueFrom(this.accountsService.getDistributor(distributorId).pipe(catchError(() => {
      return of(null);
    })));
  }
  /**
   * Lists all vendors associated with a distributor
   * @param distributorId - The ID of the distributor to fetch vendors for
   * @param filter - Optional filter string in RQL format (e.g., 'state!=deleted')
   * @returns Promise resolving to array of VendorListItem
   * @throws Error if distributorId is empty or undefined
   */
  async listDistributorVendors(distributorId, filter2) {
    if (!distributorId?.trim()) {
      throw new Error("Distributor ID is required");
    }
    const vendorFilter = filter2 ?? "state!=deleted";
    return firstValueFrom(this.accountsService.listVendors(distributorId, 0, DEFAULT_LIST_SIZE, "name:asc", vendorFilter).pipe(map((response) => response.items ?? []), catchError(() => {
      return of([]);
    })));
  }
  /**
   * Lists all distributors for a given owner
   * @param ownerId - The ID of the owner to fetch distributors for
   * @returns Promise resolving to array of DistributorListItem
   * @throws Error if ownerId is empty or undefined
   */
  async listDistributors(ownerId) {
    if (!ownerId?.trim()) {
      throw new Error("Owner ID is required");
    }
    return firstValueFrom(this.accountsService.listDistributors(ownerId, 0, DEFAULT_LIST_SIZE, "name:asc", "state=active").pipe(map((response) => response.items ?? []), catchError(() => {
      return of([]);
    })));
  }
  static \u0275fac = function AdminTreeVendorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeVendorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeVendorService, factory: _AdminTreeVendorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeVendorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-node.service.ts
var AdminTreeNodeService = class _AdminTreeNodeService {
  /**
   * Finds the parent vendor node of a given target node in the tree
   * @param nodes - Array of tree nodes to search through
   * @param targetNode - The node whose parent vendor is being searched for
   * @returns The parent vendor TreeNode if found, null otherwise
   */
  findParentVendorNode(nodes, targetNode) {
    for (const node of nodes) {
      if (!node.children)
        continue;
      const found = this.searchChildNodes(node, targetNode);
      if (found)
        return node;
      for (const child of node.children) {
        if (!child.children)
          continue;
        const foundInChild = this.findParentVendorNode([child], targetNode);
        if (foundInChild)
          return foundInChild;
      }
    }
    return null;
  }
  searchChildNodes(node, targetNode) {
    return node.children?.some((child) => child === targetNode) ?? false;
  }
  /**
   * Finds a node in the tree that corresponds to the selected client
   * @param nodes - Array of tree nodes to search through
   * @param selectedClient - The client to search for
   * @returns The matching TreeNode if found, null otherwise
   */
  findSelectedNode(nodes, selectedClient) {
    if (!selectedClient)
      return null;
    return this.searchNode(nodes, selectedClient.id);
  }
  /**
   * Recursively searches for a node with matching client ID
   * @param nodes - Array of tree nodes to search through
   * @param clientId - The client ID to search for
   * @returns The matching TreeNode if found, null otherwise
   */
  searchNode(nodes, clientId) {
    for (const node of nodes) {
      if (node.key === clientId) {
        return node;
      }
      if (node.children) {
        const found = this.searchNode(node.children, clientId);
        if (found)
          return found;
      }
    }
    return null;
  }
  static \u0275fac = function AdminTreeNodeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeNodeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeNodeService, factory: _AdminTreeNodeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeNodeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree.service.ts
var AdminTreeService = class _AdminTreeService {
  clientService = inject(AdminTreeClientService);
  vendorService = inject(AdminTreeVendorService);
  groupService = inject(AdminTreeGroupService);
  treeNodeService = inject(AdminTreeNodeService);
  /**
   * Lists all clients for a given vendor and optional group
   * @param vendorId - The ID of the vendor to fetch clients for
   * @param groupId - Optional group ID to filter clients
   * @param offset - Starting offset for pagination
   * @param limit - Maximum number of results to return
   * @param searchQuery - Optional search query to filter clients by name
   * @returns Promise resolving to array of ClientListItem
   * @throws Error if vendorId is not provided
   */
  listVendorClients(vendorId, groupId, offset, limit, searchQuery) {
    return this.clientService.listVendorClients(vendorId, groupId, offset, limit, searchQuery);
  }
  /**
   * Fetches a single client by ID
   * @param clientId - The ID of the client to fetch
   * @returns Promise resolving to ClientResponse or null if not found
   */
  fetchClient(clientId) {
    return this.clientService.fetchClient(clientId);
  }
  /**
   * Fetches a vendor associated with a client
   * @param vendorId - The ID of the vendor to fetch
   * @returns Promise resolving to ClientResponse or null if not found
   */
  fetchClientVendor(vendorId) {
    return this.vendorService.fetchClientVendor(vendorId);
  }
  /**
   * Fetches a distributor associated with a vendor
   * @param distributorId - The ID of the distributor to fetch
   * @returns Promise resolving to DistributorResponse or null if not found
   */
  fetchVendorDistributor(distributorId) {
    return this.vendorService.fetchVendorDistributor(distributorId);
  }
  /**
   * Lists all company groups for a given vendor
   * @param vendorId - The ID of the vendor to fetch groups for
   * @param searchQuery - Optional search query to filter groups by name
   * @returns Promise resolving to array of CompanyGroupResponse
   */
  listCompanyGroups(vendorId, searchQuery) {
    return this.groupService.listCompanyGroups(vendorId, searchQuery);
  }
  /**
   * Finds the parent vendor node of a given target node in the tree
   * @param nodes - Array of tree nodes to search through
   * @param targetNode - The node whose parent vendor is being searched for
   * @returns The parent vendor TreeNode if found, null otherwise
   */
  findParentVendorNode(nodes, targetNode) {
    return this.treeNodeService.findParentVendorNode(nodes, targetNode);
  }
  /**
   * Finds a node in the tree that corresponds to the selected client
   * @param nodes - Array of tree nodes to search through
   * @param selectedClient - The client to search for
   * @returns The matching TreeNode if found, null otherwise
   */
  findSelectedNode(nodes, selectedClient) {
    return this.treeNodeService.findSelectedNode(nodes, selectedClient);
  }
  /**
   * Lists all vendors associated with a distributor
   * @param distributorId - The ID of the distributor to fetch vendors for
   * @param filter - Optional filter string in RQL format (e.g., 'state!=deleted')
   * @returns Promise resolving to array of VendorListItem
   */
  listDistributorVendors(distributorId, filter2) {
    return this.vendorService.listDistributorVendors(distributorId, filter2);
  }
  /**
   * Lists all distributors for a given owner
   * @param ownerId - The ID of the owner to fetch distributors for
   * @returns Promise resolving to array of DistributorListItem
   */
  listDistributors(ownerId) {
    return this.vendorService.listDistributors(ownerId);
  }
  /**
   * Attempts to load a client using saved ID or default ID
   * @param savedClientId - Previously saved client ID
   * @param defaultClientId - Fallback client ID
   * @returns Promise resolving to ClientResponse or null if neither client exists
   */
  tryLoadClient(savedClientId, defaultClientId) {
    return this.clientService.tryLoadClient(savedClientId, defaultClientId);
  }
  createClientNode(client, isSelected) {
    return {
      key: client.id,
      label: `${client.name ?? ""} ${ADMIN_TREE.LABELS.CLIENT}`,
      data: __spreadProps(__spreadValues({}, client), { type: ADMIN_TREE.NODE_TYPES.CLIENT }),
      leaf: true,
      icon: ADMIN_TREE.ICONS.CLIENT,
      checked: isSelected,
      selectable: true,
      type: ADMIN_TREE.NODE_TYPES.CLIENT
    };
  }
  createVendorNode(vendor, isExpanded, children, isSelected) {
    return {
      key: vendor.id,
      label: `${vendor.name ?? ""} ${ADMIN_TREE.LABELS.VENDOR}`,
      data: vendor,
      expanded: isExpanded,
      leaf: false,
      icon: ADMIN_TREE.ICONS.VENDOR,
      children,
      checked: isSelected,
      type: ADMIN_TREE.NODE_TYPES.VENDOR,
      selectable: true
    };
  }
  createDistributorNode(distributor, isExpanded, isSelected) {
    return {
      key: distributor.id,
      label: `${distributor.name ?? ""} ${ADMIN_TREE.LABELS.DISTRIBUTOR}`,
      data: distributor,
      expanded: isExpanded,
      leaf: false,
      icon: ADMIN_TREE.ICONS.DISTRIBUTOR,
      children: [],
      checked: isSelected,
      type: ADMIN_TREE.NODE_TYPES.DISTRIBUTOR,
      selectable: true
    };
  }
  createGroupNode(group, isExpanded, children, isSelected) {
    return {
      key: group.id,
      label: `${group.name ?? ""} ${ADMIN_TREE.LABELS.GROUP}`,
      data: group,
      expanded: isExpanded,
      leaf: false,
      icon: ADMIN_TREE.ICONS.GROUP,
      children,
      checked: isSelected,
      type: ADMIN_TREE.NODE_TYPES.GROUP
    };
  }
  createSuperAdminNode(isExpanded, children, isSelected) {
    return {
      key: "super-admin-root",
      label: `Super Admin ${ADMIN_TREE.LABELS.SUPER_ADMIN}`,
      data: {
        id: "super-admin-root",
        name: "Super Admin",
        type: ADMIN_TREE.NODE_TYPES.SUPER_ADMIN
      },
      expanded: isExpanded,
      leaf: false,
      icon: ADMIN_TREE.ICONS.SUPER_ADMIN,
      children,
      checked: isSelected,
      type: ADMIN_TREE.NODE_TYPES.SUPER_ADMIN,
      selectable: true
    };
  }
  static \u0275fac = function AdminTreeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeService, factory: _AdminTreeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-search.service.ts
var AdminSearchService = class _AdminSearchService {
  adminTreeService = inject(AdminTreeService);
  adminState = inject(AdminStateService);
  cacheService = inject(RequestCacheService);
  searchService = inject(SearchService);
  searchQuery$ = new BehaviorSubject("");
  searchState = signal({
    query: "",
    results: [],
    isSearching: false,
    expandedForSearch: /* @__PURE__ */ new Set(),
    highlightedNodes: /* @__PURE__ */ new Set()
  });
  // Public computed values
  query = computed(() => this.searchState().query);
  results = computed(() => this.searchState().results);
  isSearching = computed(() => this.searchState().isSearching);
  expandedForSearch = computed(() => this.searchState().expandedForSearch);
  highlightedNodes = computed(() => this.searchState().highlightedNodes);
  hasResults = computed(() => this.searchState().results.length > 0);
  hasQuery = computed(() => this.searchState().query.trim().length > 0);
  constructor() {
    this.setupSearchStream();
  }
  setupSearchStream() {
    this.searchQuery$.pipe(debounceTime(300), distinctUntilChanged(), switchMap((query) => this.performSearch(query))).subscribe((results) => {
      this.updateTreeSearchResults(results);
    });
  }
  updateQuery(query) {
    const trimmedQuery = query.trim();
    if (trimmedQuery !== this.query()) {
      this.searchState.update((state2) => __spreadProps(__spreadValues({}, state2), {
        query: trimmedQuery,
        isSearching: trimmedQuery.length > 0
      }));
      this.searchQuery$.next(trimmedQuery);
    }
  }
  clearSearch() {
    this.searchState.set({
      query: "",
      results: [],
      isSearching: false,
      expandedForSearch: /* @__PURE__ */ new Set(),
      highlightedNodes: /* @__PURE__ */ new Set()
    });
    this.searchQuery$.next("");
  }
  performSearch(query) {
    if (!query || query.length < 2) {
      return of([]);
    }
    return this.cacheService.getOrFetch(`admin-search-${query}`, () => this.searchService.searchEntities(query, false).pipe(switchMap((response) => {
      const results = this.mapEntitySearchToTreeResults(response.items);
      return of(results);
    })), 3e4);
  }
  /**
   * Maps EntitySearchResult[] to TreeSearchResult[]
   * Creates the tree structure path for each search result
   */
  mapEntitySearchToTreeResults(entities) {
    return entities.map((entity) => this.mapEntityToTreeResult(entity));
  }
  /**
   * Maps a single EntitySearchResult to TreeSearchResult
   * Determines the tree path based on entity type and owner hierarchy
   */
  mapEntityToTreeResult(entity) {
    const path = [];
    const parentIds = [];
    const distributor = this.adminState.vendorDistributor();
    if (distributor) {
      path.push(distributor.name ?? "Distributor");
      parentIds.push(distributor.id);
    }
    if (entity.owner?.id) {
      this.addOwnerHierarchy(entity, path, parentIds);
    }
    path.push(entity.name);
    const nodeType = this.getNodeType(entity.type);
    return {
      id: entity.id,
      name: entity.name,
      type: nodeType,
      path,
      parentIds,
      matched: true
    };
  }
  /**
   * Adds owner hierarchy to the path and parentIds arrays
   */
  addOwnerHierarchy(entity, path, parentIds) {
    if (entity.type === "client" && entity.owner?.type === "vendor") {
      this.addVendorToPath(entity.owner.id, path, parentIds);
    } else if (entity.type === "client" && entity.owner?.type === "group") {
      this.addGroupHierarchy(entity.owner.id, entity.owner.name, path, parentIds);
    } else if (entity.type === "group" && entity.owner?.type === "vendor") {
      this.addVendorToPath(entity.owner.id, path, parentIds);
    }
  }
  /**
   * Adds vendor to path and parentIds
   */
  addVendorToPath(vendorId, path, parentIds) {
    const vendor = this.adminState.getVendorById(vendorId);
    if (vendor) {
      path.push(vendor.name ?? "Vendor");
      parentIds.push(vendor.id);
    }
  }
  /**
   * Adds group hierarchy (vendor + group) to path and parentIds
   */
  addGroupHierarchy(groupId, groupName, path, parentIds) {
    const vendorId = this.findVendorIdForGroup(groupId);
    if (isDefined(vendorId)) {
      this.addVendorToPath(vendorId, path, parentIds);
      path.push(groupName ?? "Group");
      parentIds.push(groupId);
    }
  }
  /**
   * Maps entity type string to tree node type
   */
  getNodeType(entityType) {
    switch (entityType) {
      case "vendor":
        return ADMIN_TREE.NODE_TYPES.VENDOR;
      case "group":
        return ADMIN_TREE.NODE_TYPES.GROUP;
      case "client":
      default:
        return entityType;
    }
  }
  /**
   * Updates the search state with results and handles UI updates
   */
  updateTreeSearchResults(results) {
    const highlightedNodes = new Set(results.map((r) => r.id));
    const expandedForSearch = /* @__PURE__ */ new Set();
    results.forEach((result) => {
      result.parentIds.forEach((parentId) => {
        expandedForSearch.add(parentId);
      });
    });
    this.searchState.update((state2) => __spreadProps(__spreadValues({}, state2), {
      results,
      isSearching: false,
      highlightedNodes,
      expandedForSearch
    }));
  }
  isNodeHighlighted(nodeId) {
    return this.highlightedNodes().has(nodeId);
  }
  shouldExpandForSearch(nodeId) {
    return this.expandedForSearch().has(nodeId);
  }
  async prepareResultForNavigation(result) {
    await this.ensureParentNodesLoaded(result);
    this.clearSearch();
  }
  async ensureParentNodesLoaded(result) {
    for (const parentId of result.parentIds) {
      const parentNode = this.findNodeInState(parentId);
      if (parentNode) {
        await this.loadParentNode(parentNode, parentId);
      } else {
        await this.handleUnknownParent(result.parentIds, parentId);
      }
    }
  }
  async loadParentNode(parentNode, parentId) {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      console.warn("loadParentNode called without distributor context");
      return;
    }
    switch (parentNode.type) {
      case ADMIN_TREE.NODE_TYPES.DISTRIBUTOR:
        this.adminState.setExpandedDistributor(parentId, true);
        break;
      case ADMIN_TREE.NODE_TYPES.VENDOR:
        if (!this.adminState.isDistributorVendorLoaded(distributorId, parentId)) {
          await this.loadVendorData(parentId, distributorId);
        }
        this.adminState.setDistributorNodeExpanded(distributorId, parentId, true);
        break;
      case ADMIN_TREE.NODE_TYPES.GROUP: {
        const vendorId = this.findVendorIdForGroup(parentId, distributorId);
        if (isDefined(vendorId)) {
          await this.loadGroupData(vendorId, parentId, distributorId);
          this.adminState.setDistributorExpandedGroup(distributorId, parentId, true);
        }
        break;
      }
    }
  }
  async loadVendorData(vendorId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("loadVendorData called without distributor context");
      return;
    }
    try {
      const [groups, clientResponse] = await Promise.all([
        this.adminTreeService.listCompanyGroups(vendorId),
        this.adminTreeService.listVendorClients(vendorId, void 0, 0, 100)
      ]);
      this.adminState.setDistributorVendorGroups(contextDistributorId, vendorId, groups);
      this.adminState.addDistributorVendorClients(contextDistributorId, vendorId, clientResponse.clients, {
        offset: 0,
        limit: 100,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      });
      this.adminState.markDistributorVendorAsLoaded(contextDistributorId, vendorId);
    } catch (error) {
      console.error(`Failed to load vendor data for ${vendorId}:`, error);
      this.adminState.markDistributorVendorAsFailedToLoad(contextDistributorId, vendorId);
    }
  }
  async loadGroupData(vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("loadGroupData called without distributor context");
      return;
    }
    try {
      const paginationKey = this.adminState.getDistributorPaginationKey(contextDistributorId, vendorId, groupId);
      const distributorPagination = this.adminState.clientPagination()[contextDistributorId];
      if (isDefined(distributorPagination?.[paginationKey])) {
        return;
      }
      const clientResponse = await this.adminTreeService.listVendorClients(vendorId, groupId, 0, 100);
      this.adminState.addGroupClients(contextDistributorId, vendorId, groupId, clientResponse.clients, {
        offset: 0,
        limit: 100,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      });
    } catch (error) {
      console.error(`Failed to load group data for ${vendorId}/${groupId}:`, error);
    }
  }
  findNodeInState(nodeId) {
    const distributor = this.adminState.vendorDistributor();
    if (distributor?.id === nodeId) {
      return { id: distributor.id, type: ADMIN_TREE.NODE_TYPES.DISTRIBUTOR };
    }
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      return null;
    }
    const distributorVendors = this.adminState.distributorVendors()[distributorId] ?? [];
    const vendor = distributorVendors.find((v) => v.id === nodeId);
    if (vendor) {
      return { id: vendor.id, type: ADMIN_TREE.NODE_TYPES.VENDOR };
    }
    const vendorGroups = this.adminState.vendorGroups()[distributorId] ?? {};
    for (const groups of Object.values(vendorGroups)) {
      const group = groups.find((g) => g.id === nodeId);
      if (group) {
        return { id: group.id, type: ADMIN_TREE.NODE_TYPES.GROUP };
      }
    }
    return null;
  }
  async handleUnknownParent(parentIds, parentId) {
    const vendorInParents = this.findVendorInParents(parentIds);
    if (isDefined(vendorInParents)) {
      const distributorId = this.adminState.getCurrentDistributorId();
      if (isDefined(distributorId)) {
        await this.loadGroupData(vendorInParents, parentId, distributorId);
        this.adminState.setDistributorExpandedGroup(distributorId, parentId, true);
      } else {
        await this.loadGroupData(vendorInParents, parentId);
        this.adminState.setExpandedGroup(parentId, true);
      }
    }
  }
  findVendorInParents(parentIds) {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      return null;
    }
    const distributorVendors = this.adminState.distributorVendors()[distributorId] ?? [];
    return parentIds.find((id) => distributorVendors.some((v) => v.id === id)) ?? null;
  }
  findVendorIdForGroup(groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      return null;
    }
    const vendorGroups = this.adminState.vendorGroups()[contextDistributorId] ?? {};
    for (const [vendorId, groups] of Object.entries(vendorGroups)) {
      if (groups.some((group) => group.id === groupId)) {
        return vendorId;
      }
    }
    return null;
  }
  /**
   * Creates a TreeSearchResult object for a given client.
   * This is used to prepare for navigation from outside the search component,
   * e.g., from a 'View in Tree' action.
   * @param client The client list item.
   * @param vendorId The ID of the parent vendor.
   * @param groupId The optional ID of the parent group.
   * @returns A TreeSearchResult object.
   */
  createSearchResultForClient(client, vendorId, groupId) {
    if (isDefined(groupId)) {
      return this.createGroupClientTreeSearchResult(client, vendorId, groupId);
    }
    return this.createClientTreeSearchResult(client, vendorId);
  }
  /**
   * Creates a TreeSearchResult object for a given vendor.
   * @param vendor The vendor list item.
   * @returns A TreeSearchResult object.
   */
  createSearchResultForVendor(vendor) {
    return this.createVendorTreeSearchResult(vendor);
  }
  /**
   * Helper methods for creating tree search results
   */
  createClientTreeSearchResult(client, vendorId) {
    const vendor = this.adminState.getVendorById(vendorId);
    const distributor = this.adminState.vendorDistributor();
    const path = [];
    const parentIds = [];
    if (distributor) {
      path.push(distributor.name ?? "Distributor");
      parentIds.push(distributor.id);
    }
    if (vendor) {
      path.push(vendor.name ?? "Vendor");
      parentIds.push(vendor.id);
    }
    path.push(client.name ?? "Client");
    return {
      id: client.id,
      name: client.name ?? "",
      type: ADMIN_TREE.NODE_TYPES.CLIENT,
      path,
      parentIds,
      matched: true
    };
  }
  createGroupClientTreeSearchResult(client, vendorId, groupId) {
    const vendor = this.adminState.getVendorById(vendorId);
    const distributor = this.adminState.vendorDistributor();
    const path = [];
    const parentIds = [];
    if (distributor) {
      path.push(distributor.name ?? "Distributor");
      parentIds.push(distributor.id);
    }
    if (vendor) {
      path.push(vendor.name ?? "Vendor");
      parentIds.push(vendor.id);
    }
    const distributorId = this.adminState.getCurrentDistributorId();
    let group = null;
    if (isDefined(distributorId)) {
      const vendorGroups = this.adminState.vendorGroups()[distributorId]?.[vendorId] ?? [];
      group = vendorGroups.find((g) => g.id === groupId);
    }
    if (group) {
      path.push(group.name ?? "Group");
      parentIds.push(group.id);
    } else {
      path.push("Group");
      parentIds.push(groupId);
    }
    path.push(client.name ?? "Client");
    return {
      id: client.id,
      name: client.name ?? "",
      type: ADMIN_TREE.NODE_TYPES.CLIENT,
      path,
      parentIds,
      matched: true
    };
  }
  createVendorTreeSearchResult(vendor) {
    const distributor = this.adminState.vendorDistributor();
    const path = [];
    const parentIds = [];
    if (distributor) {
      path.push(distributor.name ?? "Distributor");
      parentIds.push(distributor.id);
    }
    path.push(vendor.name ?? "Vendor");
    return {
      id: vendor.id,
      name: vendor.name ?? "",
      type: ADMIN_TREE.NODE_TYPES.VENDOR,
      path,
      parentIds,
      matched: true
    };
  }
  /**
   * Finds the vendor and group IDs for a given client by searching through all loaded data.
   * This is useful when you have a client ID but need to determine its hierarchy.
   * @param clientId The ID of the client to find
   * @param distributorId Optional distributor ID to scope the search
   * @returns Object containing vendorId and optional groupId, or null if not found
   */
  findClientHierarchy(clientId, distributorId) {
    if (isDefined(distributorId)) {
      return this.findClientInDistributor(clientId, distributorId);
    }
    const distributorVendorClients = this.adminState.vendorClients();
    for (const [distId] of Object.entries(distributorVendorClients)) {
      const result = this.findClientInDistributor(clientId, distId);
      if (result)
        return result;
    }
    return null;
  }
  findClientInDistributor(clientId, distributorId) {
    const vendorClients = this.adminState.vendorClients()[distributorId] ?? {};
    for (const [vendorId, clients] of Object.entries(vendorClients)) {
      if (clients.some((client) => client.id === clientId)) {
        return { distributorId, vendorId };
      }
    }
    const groupClients = this.adminState.groupClients()[distributorId] ?? {};
    for (const [vendorId, groups] of Object.entries(groupClients)) {
      for (const [groupId, clients] of Object.entries(groups)) {
        if (clients.some((client) => client.id === clientId)) {
          return { distributorId, vendorId, groupId };
        }
      }
    }
    return null;
  }
  /**
   * Handles showing a client in the tree by preparing the tree and returning navigation info.
   * @param client The client entity to show.
   * @param vendorId The ID of the parent vendor.
   * @param groupId The optional ID of the parent group.
   * @returns Promise that resolves to the search result for navigation
   */
  async handleClientInTree(client, vendorId, groupId) {
    const result = this.createSearchResultForClient(client, vendorId, groupId);
    await this.ensureParentNodesLoaded(result);
    return result;
  }
  /**
   * Handles showing a vendor in the tree by preparing the tree and returning navigation info.
   * @param vendor The vendor entity to show.
   * @returns Promise that resolves to the search result for navigation
   */
  async handleVendorInTree(vendor) {
    const result = this.createSearchResultForVendor(vendor);
    await this.ensureParentNodesLoaded(result);
    return result;
  }
  /**
   * Prepares a client for tree selection by ensuring its hierarchy is loaded and expanded.
   * Uses the existing load more functionality to recursively load clients until the target is found.
   * @param clientId The ID of the client to select
   * @returns Promise that resolves with the TreeSearchResult if successful, null otherwise
   */
  async prepareClientForTreeSelection(clientId) {
    const hierarchy = this.findClientHierarchy(clientId);
    if (hierarchy) {
      const client = this.findClientInLoadedData(clientId, hierarchy.vendorId, hierarchy.groupId);
      if (client) {
        const result = this.createSearchResultForClient(client, hierarchy.vendorId, hierarchy.groupId);
        await this.ensureParentNodesLoaded(result);
        return result;
      }
    }
    try {
      const searchResponse = await firstValueFrom(this.searchService.searchEntities(clientId).pipe(catchError(() => of(null))));
      if (searchResponse?.items) {
        const clientEntity = searchResponse.items.find((item) => item.id === clientId);
        if (clientEntity) {
          const result = this.mapEntityToTreeResult(clientEntity);
          await this.ensureParentNodesLoaded(result);
          return result;
        }
      }
    } catch (error) {
      console.error("Failed to search for client:", error);
    }
    console.warn(`Client ${clientId} not found in any vendor hierarchy`);
    return null;
  }
  /**
   * Prepares a client for tree selection using owner information from ClientDataService.
   * This method uses the client's owner property to determine hierarchy and load data efficiently
   * without relying on global search. It recursively loads clients using the load more functionality.
   * @param client The client with owner information from ClientDataService
   * @returns Promise that resolves with the TreeSearchResult if successful, null otherwise
   */
  async prepareClientForTreeSelectionWithOwner(client) {
    if (!isDefined(client.id) || !isDefined(client.owner)) {
      console.warn("Client missing ID or owner information");
      return null;
    }
    try {
      if (client.group === DEFAULT_SYSTEM_ID || isNullOrUndefined(client.group)) {
        return await this.handleVendorOwnedClient(client);
      } else {
        return await this.handleGroupOwnedClient(client);
      }
    } catch (error) {
      console.error("Failed to prepare client for tree selection:", error);
      return null;
    }
  }
  /**
   * Handles a client owned directly by a vendor
   */
  async handleVendorOwnedClient(client) {
    if (!isDefined(client.owner?.id) || !isDefined(client.id))
      return null;
    const vendorId = client.owner.id;
    await this.ensureVendorLoadedAndExpanded(vendorId);
    const foundClient = await this.loadClientsUntilFound(client.id, vendorId);
    if (foundClient) {
      const result = this.createSearchResultForClient(foundClient, vendorId);
      await this.ensureParentNodesLoaded(result);
      return result;
    }
    return null;
  }
  /**
   * Handles a client owned by a group
   */
  async handleGroupOwnedClient(client) {
    if (!isDefined(client.group) || !isDefined(client.id))
      return null;
    const groupId = client.group;
    const vendorId = this.findVendorIdForGroup(groupId);
    if (!isDefined(vendorId)) {
      return null;
    }
    await this.ensureVendorLoadedAndExpanded(vendorId);
    this.adminState.setExpandedGroup(groupId, true);
    const foundClient = await this.loadClientsUntilFound(client.id, vendorId, groupId);
    if (foundClient) {
      const result = this.createSearchResultForClient(foundClient, vendorId, groupId);
      await this.ensureParentNodesLoaded(result);
      return result;
    }
    return null;
  }
  /**
   * Ensures a vendor is loaded and expanded
   */
  async ensureVendorLoadedAndExpanded(vendorId) {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      console.warn("ensureVendorLoadedAndExpanded called without distributor context");
      return;
    }
    if (!this.adminState.isDistributorVendorLoaded(distributorId, vendorId)) {
      await this.loadVendorData(vendorId, distributorId);
    }
    this.adminState.setDistributorNodeExpanded(distributorId, vendorId, true);
  }
  /**
   * Recursively loads clients using the load more functionality until the target client is found
   */
  async loadClientsUntilFound(targetClientId, vendorId, groupId) {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      console.warn("loadClientsUntilFound called without distributor context");
      return null;
    }
    let foundClient = this.findClientInLoadedData(targetClientId, vendorId, groupId, distributorId);
    if (foundClient) {
      return foundClient;
    }
    const paginationKey = this.adminState.getDistributorPaginationKey(distributorId, vendorId, groupId);
    let currentPagination = this.adminState.clientPagination()[distributorId]?.[paginationKey];
    if (isNullOrUndefined(currentPagination)) {
      await this.loadInitialClients(vendorId, groupId, distributorId);
      foundClient = this.findClientInLoadedData(targetClientId, vendorId, groupId, distributorId);
      if (foundClient) {
        return foundClient;
      }
      currentPagination = this.adminState.clientPagination()[distributorId]?.[paginationKey];
    }
    while (isDefined(currentPagination) && currentPagination.hasMore && isNullOrUndefined(foundClient)) {
      await this.loadMoreClientsPage(vendorId, groupId, distributorId);
      foundClient = this.findClientInLoadedData(targetClientId, vendorId, groupId, distributorId);
      if (foundClient) {
        return foundClient;
      }
      currentPagination = this.adminState.clientPagination()[distributorId]?.[paginationKey];
    }
    return foundClient ?? null;
  }
  /**
   * Loads initial clients for a vendor or group within distributor context
   */
  async loadInitialClients(vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("loadInitialClients called without distributor context");
      return;
    }
    try {
      const clientResponse = await this.adminTreeService.listVendorClients(vendorId, groupId, 0, 100);
      const paginationUpdate = {
        offset: 0,
        limit: 100,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      };
      if (isDefined(groupId)) {
        this.adminState.addGroupClients(contextDistributorId, vendorId, groupId, clientResponse.clients, paginationUpdate, false);
      } else {
        this.adminState.addDistributorVendorClients(contextDistributorId, vendorId, clientResponse.clients, paginationUpdate, false);
      }
    } catch (error) {
      console.error("Failed to load initial clients:", error);
    }
  }
  /**
   * Loads the next page of clients using the existing load more functionality
   */
  async loadMoreClientsPage(vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("loadMoreClientsPage called without distributor context");
      return;
    }
    const paginationKey = this.adminState.getDistributorPaginationKey(contextDistributorId, vendorId, groupId);
    const currentPagination = this.adminState.clientPagination()[contextDistributorId]?.[paginationKey];
    if (!currentPagination?.hasMore || currentPagination.loadingMore) {
      return;
    }
    const nextOffset = currentPagination.offset + currentPagination.limit;
    try {
      this.adminState.setDistributorLoadingMore(contextDistributorId, vendorId, groupId, true);
      const clientResponse = await this.adminTreeService.listVendorClients(vendorId, groupId, nextOffset, 100);
      const paginationUpdate = {
        offset: nextOffset,
        limit: 100,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      };
      if (isDefined(groupId)) {
        this.adminState.addGroupClients(contextDistributorId, vendorId, groupId, clientResponse.clients, paginationUpdate, true);
      } else {
        this.adminState.addDistributorVendorClients(contextDistributorId, vendorId, clientResponse.clients, paginationUpdate, true);
      }
    } catch (error) {
      console.error("Failed to load more clients:", error);
      this.adminState.setDistributorLoadingMore(contextDistributorId, vendorId, groupId, false);
    }
  }
  /**
   * Searches for and loads a client using the global search API
   * @param clientId The ID of the client to find
   * @param _searchContext Optional context about where to look (vendor/group) - not used in global search
   * @returns Promise that resolves to true if client was found and loaded
   */
  async searchAndLoadClient(clientId, _searchContext) {
    try {
      const searchResponse = await firstValueFrom(this.cacheService.getOrFetch(`admin-search-${clientId}`, () => this.searchService.searchEntities(clientId).pipe(catchError(() => of(null))), 3e4));
      if (searchResponse?.items) {
        const clientEntity = searchResponse.items.find((item) => item.id === clientId);
        if (clientEntity) {
          const result = this.mapEntityToTreeResult(clientEntity);
          await this.ensureParentNodesLoaded(result);
          return true;
        }
      }
    } catch (error) {
      console.error("Failed to search and load client:", error);
    }
    return false;
  }
  /**
   * Finds a client in the currently loaded data within distributor context
   */
  findClientInLoadedData(clientId, vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      return void 0;
    }
    if (isDefined(groupId)) {
      const groupClients = this.adminState.groupClients()[contextDistributorId]?.[vendorId]?.[groupId];
      return groupClients?.find((client) => client.id === clientId);
    } else {
      const vendorClients = this.adminState.vendorClients()[contextDistributorId]?.[vendorId];
      return vendorClients?.find((client) => client.id === clientId);
    }
  }
  /**
   * Preloads search data for better performance
   * This method is called from AdminDataService for background preloading
   */
  async preloadSearchData() {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(distributorId)) {
      console.warn("preloadSearchData called without distributor context");
      return;
    }
    try {
      const distributorVendors = this.adminState.distributorVendors()[distributorId] ?? [];
      const preloadPromises = distributorVendors.map(async (vendor) => {
        try {
          if (!this.adminState.isDistributorVendorLoaded(distributorId, vendor.id)) {
            await this.loadVendorData(vendor.id, distributorId);
          }
        } catch (error) {
          console.warn(`Failed to preload vendor data for ${vendor.id}:`, error);
        }
      });
      await Promise.all(preloadPromises);
    } catch (error) {
      console.warn("Failed to preload search data:", error);
    }
  }
  static \u0275fac = function AdminSearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSearchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminSearchService, factory: _AdminSearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/administration/services/admin-data.service.ts
var AdminDataService = class _AdminDataService {
  adminTreeService = inject(AdminTreeService);
  adminState = inject(AdminStateService);
  adminSearchService = inject(AdminSearchService);
  messageService = inject(MessageService);
  localStorageService = inject(LocalStorageService);
  authDataService = inject(AuthDataService);
  apiSchemaService = inject(ApiSchemaService);
  async loadClient(routeClientId) {
    const savedClientId = this.localStorageService.getItem(LOCAL_STORAGE_KEY_SELECTED_CLIENT)?.id;
    const defaultClientId = this.authDataService.getUserProfile()?.defaultClient?.id;
    const clientIdToLoad = routeClientId ?? savedClientId ?? defaultClientId;
    if (isNullOrUndefined(clientIdToLoad)) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        detail: "No client found for the user"
      });
      return;
    }
    try {
      const client = await this.adminTreeService.tryLoadClient(clientIdToLoad, defaultClientId);
      this.adminState.setSelectedClient(client);
      if (!client) {
        this.messageService.add({
          severity: "warn",
          summary: "Warning",
          detail: "No client found for the user"
        });
      }
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `An error occurred while initializing the client:  ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  }
  async loadVendorData(ownerId) {
    try {
      const vendor = await this.adminTreeService.fetchClientVendor(ownerId);
      if (isNullOrUndefined(vendor?.id))
        return;
      this.adminState.setClientVendor(vendor);
    } catch (error) {
      if (error instanceof HttpErrorResponse && error?.status === 403) {
        const selectedClient = this.adminState.selectedClient();
        if (selectedClient) {
          this.adminState.setFallbackToClient(selectedClient);
        }
      } else {
        throw error;
      }
    }
  }
  async loadDistributorData(vendor) {
    try {
      const [groups, clients] = await Promise.all([
        this.adminTreeService.listCompanyGroups(vendor.id),
        this.adminTreeService.listVendorClients(vendor.id, void 0, 0, DEFAULT_LIST_SIZE)
      ]);
      this.adminState.setDistributorVendorGroups(vendor.owner.id, vendor.id, groups);
      this.adminState.addDistributorVendorClients(vendor.owner.id, vendor.id, clients.clients, {
        offset: 0,
        limit: DEFAULT_LIST_SIZE,
        total: clients.total,
        hasMore: clients.hasMore
      });
      this.adminState.markDistributorVendorAsLoaded(vendor.owner.id, vendor.id);
      const distributor = await this.adminTreeService.fetchVendorDistributor(vendor.owner?.id);
      if (!distributor) {
        this.adminState.setFallbackToVendor(vendor);
        return;
      }
      this.adminState.setVendorDistributor(distributor);
      this.adminState.setExpandedDistributor(distributor.id, true);
      const distributorVendors = this.adminState.getDistributorVendors(distributor.id);
      if (!distributorVendors.length) {
        const vendors = await this.adminTreeService.listDistributorVendors(distributor.id);
        this.adminState.setDistributorVendors(distributor.id, vendors);
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse && error?.status === 403) {
        this.adminState.setFallbackToVendor(vendor);
      } else {
        throw error;
      }
    }
  }
  /**
   * Loads the initial hierarchical data for the administration tree.
   * This includes loading client data, vendor data, and distributor data in sequence.
   * Sets loading states and handles errors during the loading process.
   *
   * @param routeClientId Optional client ID from the route parameters
   * @returns Promise<void> Resolves when all data is loaded or if an error occurs
   * @throws Displays error message via MessageService if loading fails
   */
  async loadInitialData(routeClientId) {
    this.adminState.setInitialLoading(true);
    try {
      if (!this.adminState.hasClientData()) {
        await this.loadClient(routeClientId);
      }
      const selectedClient = this.adminState.selectedClient();
      if (isNullOrUndefined(selectedClient?.owner?.id))
        return;
      if (!this.adminState.hasVendorData()) {
        await this.loadVendorData(selectedClient.owner.id);
      }
      const vendor = this.adminState.clientVendor();
      if (!vendor)
        return;
      const [groups, vendorClientResponse] = await Promise.all([
        this.adminTreeService.listCompanyGroups(vendor.id),
        this.adminTreeService.listVendorClients(vendor.id, void 0, 0, DEFAULT_LIST_SIZE)
        // First page
      ]);
      this.adminState.setDistributorVendorGroups(vendor.owner.id, vendor.id, groups);
      this.adminState.addDistributorVendorClients(vendor.owner.id, vendor.id, vendorClientResponse.clients, {
        offset: 0,
        limit: DEFAULT_LIST_SIZE,
        total: vendorClientResponse.total,
        hasMore: vendorClientResponse.hasMore
      }, false);
      this.adminState.markDistributorVendorAsLoaded(vendor.owner.id, vendor.id);
      if (isDefined(selectedClient.group)) {
        const groupClientResponse = await this.adminTreeService.listVendorClients(vendor.id, selectedClient.group, 0, DEFAULT_LIST_SIZE);
        this.adminState.addGroupClients(vendor.owner.id, vendor.id, selectedClient.group, groupClientResponse.clients, {
          offset: 0,
          limit: DEFAULT_LIST_SIZE,
          total: groupClientResponse.total,
          hasMore: groupClientResponse.hasMore
        }, false);
        this.adminState.setDistributorExpandedGroup(vendor.owner.id, selectedClient.group, true);
      }
      this.adminState.setDistributorNodeExpanded(vendor.owner.id, vendor.id, true);
      if (vendor.owner?.id) {
        await this.loadDistributorData(vendor);
      }
      const usesModernSchema = this.apiSchemaService.usesModernSchema();
      if (this.authDataService.isSuperAdmin() && usesModernSchema) {
        try {
          const distributors = await this.adminTreeService.listDistributors(DEFAULT_SYSTEM_ID);
          this.adminState.setDistributors(distributors);
        } catch (error) {
          console.error("Error loading distributors for super admin:", error);
        }
      }
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to load initial data:  ${error instanceof Error ? error.message : "Unknown error"}`
      });
    } finally {
      this.adminState.setInitialLoading(false);
      this.preloadSearchDataInBackground();
    }
  }
  /**
   * Preloads search data in the background to improve search performance
   * This method runs asynchronously and doesn't block the UI
   */
  preloadSearchDataInBackground() {
    this.adminSearchService.preloadSearchData().catch((error) => {
      console.warn("Background search data preloading failed:", error);
    });
  }
  /**
   * Expands a tree node and loads its children data.
   * For vendor nodes, loads company groups and clients.
   * For group nodes, loads the associated clients.
   *
   * @param node - The TreeNode to expand
   * @returns Promise<void> Resolves when child data is loaded
   * @throws Displays error message via MessageService if loading fails
   */
  async expandNode(node) {
    if (isNullOrUndefined(node.data?.id) || node.type !== ADMIN_TREE.NODE_TYPES.VENDOR)
      return;
    const vendorId = node.data.id;
    const distributorId = this.getDistributorContextFromNode(node);
    if (isNullOrUndefined(distributorId)) {
      console.warn("Could not determine distributor context for vendor node");
      return;
    }
    const distributorLoadedVendors = this.adminState.loadedVendors()[distributorId];
    if (distributorLoadedVendors?.has(vendorId))
      return;
    try {
      this.adminState.addDistributorLoadingVendor(distributorId, vendorId);
      this.adminState.setDistributorNodeExpanded(distributorId, vendorId, true);
      const [groups, clientResponse] = await Promise.all([
        this.adminTreeService.listCompanyGroups(vendorId),
        this.adminTreeService.listVendorClients(vendorId, void 0, 0, DEFAULT_LIST_SIZE)
        // First page
      ]);
      this.adminState.setDistributorVendorGroups(distributorId, vendorId, groups);
      this.adminState.addDistributorVendorClients(distributorId, vendorId, clientResponse.clients, {
        offset: 0,
        limit: DEFAULT_LIST_SIZE,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      }, false);
      this.adminState.markDistributorVendorAsLoaded(distributorId, vendorId);
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to load vendor data: ${error instanceof Error ? error.message : "Unknown error"}`
      });
    } finally {
      this.adminState.removeDistributorLoadingVendor(distributorId, vendorId);
    }
  }
  /**
   * Helper method to get distributor context from a tree node by walking up the tree
   * @param node - The tree node to get context from
   * @returns The distributor ID or null if not found
   */
  getDistributorContextFromNode(node) {
    let current = node.parent;
    while (current) {
      if (current.type === ADMIN_TREE.NODE_TYPES.DISTRIBUTOR) {
        return current.data?.id ?? null;
      }
      current = current.parent;
    }
    return this.adminState.getCurrentDistributorId();
  }
  /**
   * Expands a group node and loads its associated clients.
   *
   * @param groupNode - The group TreeNode to expand
   * @returns Promise<void> Resolves when client data is loaded
   * @throws Displays error message via MessageService if loading fails
   */
  async expandGroup(groupNode) {
    if (isNullOrUndefined(groupNode.data?.id) || isNullOrUndefined(groupNode.parent?.data?.id))
      return;
    const groupId = groupNode.data.id;
    const vendorId = groupNode.parent.data.id;
    const distributorId = this.getDistributorContextFromNode(groupNode);
    if (isNullOrUndefined(distributorId)) {
      console.warn("Could not determine distributor context for group node");
      return;
    }
    const paginationKey = this.adminState.getDistributorPaginationKey(distributorId, vendorId, groupId);
    const distributorPagination = this.adminState.clientPagination()[distributorId];
    if (isDefined(distributorPagination?.[paginationKey]))
      return;
    try {
      this.adminState.setDistributorExpandedGroup(distributorId, groupId, true);
      const clientResponse = await this.adminTreeService.listVendorClients(vendorId, groupId, 0, DEFAULT_LIST_SIZE);
      this.adminState.addGroupClients(distributorId, vendorId, groupId, clientResponse.clients, {
        offset: 0,
        limit: DEFAULT_LIST_SIZE,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      }, false);
    } catch (error) {
      this.adminState.setDistributorExpandedGroup(distributorId, groupId, false);
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to load group clients: ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  }
  async expandDistributor(distributorNode) {
    const distributorId = distributorNode.data.id;
    if (isNullOrUndefined(distributorId))
      return;
    try {
      const vendors = await this.adminTreeService.listDistributorVendors(distributorId);
      this.adminState.setDistributorVendors(distributorId, vendors);
      this.adminState.setExpandedDistributor(distributorId, true);
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to load distributor vendors: ${error instanceof Error ? error.message : "Unknown error"}`
      });
    }
  }
  collapseNode(node) {
    this.adminState.toggleNodeExpansion(node.data.id, false);
  }
  collapseGroup(groupNode) {
    const distributorId = this.getDistributorContextFromNode(groupNode);
    if (isDefined(distributorId)) {
      this.adminState.setDistributorExpandedGroup(distributorId, groupNode.data.id, false);
    } else {
      this.adminState.setExpandedGroup(groupNode.data.id, false);
    }
  }
  collapseDistributor(distributorNode) {
    this.adminState.setExpandedDistributor(distributorNode.data.id, false);
  }
  /**
   * Selects a node in the tree and updates the selected client in the admin state.
   *
   * @param node - The TreeNode to select
   */
  selectNode(node) {
    if (isNullOrUndefined(node.data?.id) || node.type === ADMIN_TREE.NODE_TYPES.LOAD_MORE)
      return;
    if (node.type === ADMIN_TREE.NODE_TYPES.CLIENT) {
      this.adminState.setSelectedClient(node.data);
      this.adminState.setClientVendor(null);
    } else if (node.type === ADMIN_TREE.NODE_TYPES.VENDOR) {
      this.adminState.setClientVendor(node.data);
      this.adminState.setSelectedClient(null);
    } else if (node.type === ADMIN_TREE.NODE_TYPES.GROUP) {
      this.adminState.setSelectedClient(null);
      this.adminState.setClientVendor(null);
      const distributorId = this.getDistributorContextFromNode(node);
      if (isDefined(distributorId)) {
        this.adminState.setDistributorExpandedGroup(distributorId, node.data.id, true);
      } else {
        this.adminState.setExpandedGroup(node.data.id, true);
      }
    } else if (node.type === ADMIN_TREE.NODE_TYPES.DISTRIBUTOR) {
      this.adminState.setVendorDistributor(node.data);
      this.adminState.setSelectedClient(null);
      this.adminState.setClientVendor(null);
    }
  }
  /**
   * Recursively searches through the tree nodes to find a node matching the given client ID.
   *
   * @param nodes - Array of TreeNodes to search through
   * @param clientId - The client ID to search for
   * @returns TreeNode if found, null otherwise
   */
  findSelectedNode(nodes, clientId) {
    for (const node of nodes) {
      if (node.key === clientId) {
        return node;
      }
      if (node.children) {
        const found = this.findSelectedNode(node.children, clientId);
        if (found)
          return found;
      }
    }
    return null;
  }
  /**
   * Loads the next page of clients for a given vendor or group within a distributor context.
   * @param vendorId - The ID of the vendor.
   * @param groupId - Optional group ID.
   * @param distributorId - Optional distributor ID. If not provided, will try to get from current context.
   */
  async loadMoreClients(vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("loadMoreClients called without distributor context");
      return;
    }
    const paginationKey = this.adminState.getDistributorPaginationKey(contextDistributorId, vendorId, groupId);
    const currentPagination = this.adminState.clientPagination()[contextDistributorId]?.[paginationKey];
    if (isNullOrUndefined(currentPagination) || isNullOrUndefined(currentPagination.hasMore) || currentPagination.loadingMore === true) {
      return;
    }
    const nextOffset = currentPagination.offset + currentPagination.limit;
    try {
      this.adminState.setDistributorLoadingMore(contextDistributorId, vendorId, groupId, true);
      const clientResponse = await this.adminTreeService.listVendorClients(vendorId, groupId, nextOffset, DEFAULT_LIST_SIZE);
      const paginationUpdate = {
        offset: nextOffset,
        limit: DEFAULT_LIST_SIZE,
        total: clientResponse.total,
        hasMore: clientResponse.hasMore
      };
      if (isDefined(groupId)) {
        this.adminState.addGroupClients(contextDistributorId, vendorId, groupId, clientResponse.clients, paginationUpdate, true);
      } else {
        this.adminState.addDistributorVendorClients(contextDistributorId, vendorId, clientResponse.clients, paginationUpdate, true);
      }
    } catch (error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to load more clients: ${error instanceof Error ? error.message : "Unknown error"}`
      });
      this.adminState.setDistributorLoadingMore(contextDistributorId, vendorId, groupId, false);
    }
  }
  /**
   * Handles client creation event to refresh the tree state.
   * This method is called when a client is created, and it refreshes the relevant parts of the tree.
   */
  async handleClientCreated(clientId) {
    try {
      const client = await this.adminTreeService.tryLoadClient(clientId);
      if (!client) {
        console.warn("Could not load newly created client:", clientId);
        return null;
      }
      const vendorId = client.owner?.id;
      if (!vendorId) {
        console.warn("Client does not have a vendor ID:", clientId);
        return null;
      }
      return client;
    } catch (_error) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to refresh vendor data after client creation"
      });
      throw _error;
    }
  }
  /**
   * Expands a super admin node and loads distributor data
   * @param _superAdminNode - The super admin node to expand
   */
  expandSuperAdmin(_superAdminNode) {
  }
  /**
   * Collapses a super admin node
   * @param _superAdminNode - The super admin node to collapse
   */
  collapseSuperAdmin(_superAdminNode) {
  }
  static \u0275fac = function AdminDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminDataService, factory: _AdminDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/models/event-source.enum.ts
var EventSource;
(function(EventSource2) {
  EventSource2["USER"] = "user";
  EventSource2["SYSTEM"] = "system";
  EventSource2["ROUTE"] = "route";
  EventSource2["SEARCH"] = "search";
  EventSource2["BROADCAST"] = "broadcast";
  EventSource2["INITIAL_LOAD"] = "initial_load";
})(EventSource || (EventSource = {}));

// src/app/features/administration/services/admin-tree-context-extractor.service.ts
var AdminTreeContextExtractorService = class _AdminTreeContextExtractorService {
  /**
   * Extracts search context by looking at the current tree structure
   * to determine which vendor/group might contain the missing client
   */
  extractContext(_nodeKey, nodes) {
    const context = {};
    const extractFromNodes = (treeNodes, currentVendorId, currentGroupId) => {
      for (const node of treeNodes) {
        if (node.type === "vendor") {
          currentVendorId = node.key;
          currentGroupId = void 0;
        } else if (node.type === "group") {
          currentGroupId = node.key;
        }
        if (node.type === "client" && isDefined(currentVendorId) && currentVendorId !== "") {
          context.vendorId = currentVendorId;
          if (isDefined(currentGroupId) && currentGroupId !== "") {
            context.groupId = currentGroupId;
          }
        }
        if (node.children && node.children.length > 0) {
          extractFromNodes(node.children, currentVendorId, currentGroupId);
        }
      }
    };
    extractFromNodes(nodes);
    return isDefined(context.vendorId) && context.vendorId !== "" ? context : void 0;
  }
  static \u0275fac = function AdminTreeContextExtractorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeContextExtractorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeContextExtractorService, factory: _AdminTreeContextExtractorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeContextExtractorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-management.service.ts
var AdminTreeManagementService = class _AdminTreeManagementService {
  adminState = inject(AdminStateService);
  adminTreeService = inject(AdminTreeService);
  authDataService = inject(AuthDataService);
  apiSchemaService = inject(ApiSchemaService);
  adminSearchService = inject(AdminSearchService);
  hierarchyTree = computed(() => {
    const distributor = this.adminState.vendorDistributor();
    const vendor = this.adminState.clientVendor();
    const selectedClient = this.adminState.selectedClient();
    const isSuperAdmin = this.authDataService.isSuperAdmin();
    const usesModernSchema = this.apiSchemaService.usesModernSchema();
    const searchExpandedNodes = this.adminSearchService.expandedForSearch();
    if (isSuperAdmin && usesModernSchema && distributor) {
      const tree = this.buildSuperAdminHierarchy(distributor, selectedClient);
      return this.applySearchEnhancements(tree, searchExpandedNodes);
    } else if (distributor) {
      const tree = this.buildDistributorHierarchy(distributor, selectedClient);
      return this.applySearchEnhancements(tree, searchExpandedNodes);
    } else if (vendor) {
      const tree = this.buildVendorOnlyHierarchy(vendor, selectedClient);
      return this.applySearchEnhancements(tree, searchExpandedNodes);
    } else if (selectedClient) {
      return [this.adminTreeService.createClientNode(selectedClient, true)];
    }
    return [];
  });
  buildSuperAdminHierarchy(distributor, selectedClient) {
    const superAdminExpandedNodes = this.adminState.expandedNodes()["super-admin"] ?? /* @__PURE__ */ new Set();
    const usesModernSchema = this.apiSchemaService.usesModernSchema();
    const allDistributors = this.adminState.distributors();
    const isSuperAdminExpanded = usesModernSchema || superAdminExpandedNodes.has("super-admin-root");
    const superAdminNode = this.adminTreeService.createSuperAdminNode(isSuperAdminExpanded, [], false);
    if (isSuperAdminExpanded) {
      if (allDistributors.length > 0) {
        superAdminNode.children = allDistributors.map((dist) => {
          return this.buildDistributorNodeWithContext(dist, selectedClient);
        });
      } else {
        const distributorTree = this.buildDistributorHierarchy(distributor, selectedClient);
        superAdminNode.children = distributorTree;
      }
    } else {
      superAdminNode.children = [];
    }
    return [superAdminNode];
  }
  /**
   * Builds a distributor node with its own vendor hierarchy using distributor-scoped data
   */
  buildDistributorNodeWithContext(distributor, selectedClient) {
    const distributorId = distributor.id;
    const expandedDistributors = this.adminState.expandedDistributors();
    const isDistributorExpanded = expandedDistributors.has(distributorId);
    const distributorNode = this.adminTreeService.createDistributorNode(__spreadProps(__spreadValues({}, distributor), {
      entity: {
        id: distributor.id,
        name: distributor.name,
        creationDate: (/* @__PURE__ */ new Date()).toISOString(),
        modifiedDate: (/* @__PURE__ */ new Date()).toISOString()
      },
      owner: { id: "", name: "" },
      tags: null
    }), isDistributorExpanded, false);
    if (isDistributorExpanded) {
      const distributorVendors = this.adminState.getDistributorVendors(distributorId);
      distributorNode.children = distributorVendors.map((vendor) => this.buildVendorNodeWithDistributorContext(vendor, selectedClient, distributorId));
    } else {
      distributorNode.children = [];
    }
    return distributorNode;
  }
  buildDistributorHierarchy(distributor, selectedClient) {
    const distributorId = distributor.id;
    const expandedDistributors = this.adminState.expandedDistributors();
    const isDistributorExpanded = expandedDistributors.has(distributorId);
    const distributorNode = this.adminTreeService.createDistributorNode(distributor, isDistributorExpanded, false);
    if (isDistributorExpanded) {
      const distributorVendors = this.adminState.getDistributorVendors(distributorId);
      distributorNode.children = distributorVendors.map((vendor) => this.buildVendorNodeWithDistributorContext(vendor, selectedClient, distributorId));
    } else {
      distributorNode.children = [];
    }
    return [distributorNode];
  }
  buildVendorOnlyHierarchy(vendor, selectedClient) {
    const distributorId = this.adminState.getCurrentDistributorId();
    if (isDefined(distributorId)) {
      const vendorNode = this.buildVendorNodeWithDistributorContext(vendor, selectedClient, distributorId);
      return [vendorNode];
    } else {
      console.warn("buildVendorOnlyHierarchy called without distributor context");
      const vendorNode = this.adminTreeService.createVendorNode(vendor, false, [], false);
      return [vendorNode];
    }
  }
  createLoadMoreNode(vendorId, groupId, loading) {
    const key = `loadmore_${vendorId}${isDefined(groupId) ? "_" + groupId : ""}`;
    return {
      key,
      label: "Load More...",
      type: ADMIN_TREE.NODE_TYPES.LOAD_MORE,
      leaf: true,
      icon: loading ? "pi pi-spin pi-spinner" : "pi pi-plus",
      data: {
        type: ADMIN_TREE.NODE_TYPES.LOAD_MORE,
        vendorId,
        groupId,
        loading
      },
      styleClass: "load-more-node"
    };
  }
  /**
   * Builds a vendor node with distributor context, using distributor-scoped data
   */
  buildVendorNodeWithDistributorContext(vendor, selectedClient, distributorId) {
    const vendorClients = this.adminState.getDistributorVendorClients(distributorId, vendor.id);
    const vendorGroups = this.adminState.getDistributorVendorGroups(distributorId, vendor.id);
    const isVendorExpanded = this.adminState.isDistributorNodeExpanded(distributorId, vendor.id);
    const children = [];
    const vendorNode = this.adminTreeService.createVendorNode(vendor, isVendorExpanded, children, false);
    if (isVendorExpanded) {
      if (vendorGroups.length > 0) {
        children.push(...vendorGroups.map((group) => {
          const isGroupExpanded = this.adminState.isDistributorGroupExpanded(distributorId, group.id);
          const groupChildren = [];
          const groupNode = this.adminTreeService.createGroupNode(group, isGroupExpanded, groupChildren, false);
          if (isGroupExpanded) {
            const clientsInGroup = this.getGroupClientsForDistributor(distributorId, vendor.id, group.id);
            groupChildren.push(...clientsInGroup.map((client) => this.adminTreeService.createClientNode(client, client.id === selectedClient?.id)));
            const groupPagination = this.adminState.getDistributorPaginationState(distributorId, vendor.id, group.id);
            if (groupPagination?.hasMore === true) {
              groupChildren.push(this.createLoadMoreNode(vendor.id, group.id, groupPagination?.loadingMore ?? false));
            }
          }
          return groupNode;
        }));
      }
      children.push(...vendorClients.map((client) => this.adminTreeService.createClientNode(client, client.id === selectedClient?.id)));
      const vendorPagination = this.adminState.getDistributorPaginationState(distributorId, vendor.id);
      if (vendorPagination?.hasMore === true) {
        children.push(this.createLoadMoreNode(vendor.id, void 0, vendorPagination?.loadingMore ?? false));
      }
    }
    return vendorNode;
  }
  /**
   * Helper method to get group clients for a specific distributor
   */
  getGroupClientsForDistributor(distributorId, vendorId, groupId) {
    return this.adminState.getGroupClients(distributorId, vendorId, groupId);
  }
  applySearchEnhancements(nodes, searchExpandedNodes) {
    return nodes.map((node) => this.enhanceNodeForSearch(node, searchExpandedNodes));
  }
  enhanceNodeForSearch(node, searchExpandedNodes) {
    const enhanced = __spreadValues({}, node);
    if (this.adminSearchService.isNodeHighlighted(node.key)) {
      enhanced.styleClass = [enhanced.styleClass, "search-highlighted"].filter(Boolean).join(" ");
    }
    if (searchExpandedNodes.has(node.key)) {
      enhanced.expanded = true;
    }
    if (enhanced.children) {
      enhanced.children = enhanced.children.map((child) => this.enhanceNodeForSearch(child, searchExpandedNodes));
    }
    return enhanced;
  }
  static \u0275fac = function AdminTreeManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeManagementService, factory: _AdminTreeManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-navigation.service.ts
var AdminNavigationService = class _AdminNavigationService {
  router = inject(Router);
  broadcastService = inject(BroadcastEventMessageService);
  async navigateToNode(nodeType, nodeKey) {
    let entityType = "";
    const entityId = nodeKey;
    switch (nodeType) {
      case ADMIN_TREE.NODE_TYPES.CLIENT:
        entityType = "client";
        break;
      case ADMIN_TREE.NODE_TYPES.VENDOR:
        entityType = "vendor";
        break;
      case ADMIN_TREE.NODE_TYPES.GROUP:
        return Promise.resolve(false);
      // Prevent navigation for now
      case ADMIN_TREE.NODE_TYPES.DISTRIBUTOR:
        entityType = "distributor";
        break;
      case ADMIN_TREE.NODE_TYPES.SUPER_ADMIN:
        return this.navigateToSuperAdminDistributors();
      default:
        console.warn("Unknown node type for navigation:", nodeType);
        return Promise.resolve(false);
    }
    if (entityType && entityId) {
      this.broadcastService.broadcast("entity-changed", {
        entityType: nodeType,
        entityId: nodeKey
      });
      return this.handleEntityNavigation(entityType, entityId);
    }
    return Promise.resolve(false);
  }
  handleEntityNavigation(entityType, entityId) {
    const currentUrl = this.router.url.split("?")[0];
    const urlSegments = currentUrl.split("/").filter((segment) => segment.length > 0);
    let currentEntityType;
    let currentEntityId;
    let currentEntityTypeIndex = -1;
    const entityTypes = ["client", "vendor", "distributor", "super-admin"];
    for (let i = 0; i < urlSegments.length; i++) {
      if (entityTypes.includes(urlSegments[i])) {
        currentEntityType = urlSegments[i];
        currentEntityTypeIndex = i;
        if (i + 1 < urlSegments.length) {
          currentEntityId = urlSegments[i + 1];
        }
        break;
      }
    }
    if (currentEntityType === entityType && currentEntityId === entityId) {
      return Promise.resolve(true);
    }
    let tabPath = "";
    if (currentEntityType === entityType && currentEntityTypeIndex > -1) {
      const tabSegments = urlSegments.slice(currentEntityTypeIndex + 2);
      if (tabSegments.length > 0) {
        tabPath = tabSegments.join("/");
      }
    }
    const navigationTarget = [
      "/admin",
      entityType,
      entityId
    ];
    if (tabPath) {
      navigationTarget.push(...tabPath.split("/"));
    }
    return this.router.navigate(navigationTarget.filter(isDefined));
  }
  async navigateToSuperAdminDistributors() {
    try {
      return await this.router.navigate([
        "/admin",
        "super-admin",
        DEFAULT_SYSTEM_ID,
        "distributors"
      ]);
    } catch (error) {
      console.error("Failed to navigate to super admin distributors:", error);
      return false;
    }
  }
  static \u0275fac = function AdminNavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminNavigationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminNavigationService, factory: _AdminNavigationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminNavigationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-event-handler.service.ts
var TIMING = {
  SCROLL_SUPPRESSION: 2e3,
  NODE_SELECTION_DELAY: 100,
  NODE_MONITORING_INTERVAL: 150,
  NODE_SELECTION_TIMEOUT: 1e4
};
var ClientLoadFailureError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ClientLoadFailureError";
  }
};
var AdminTreeEventHandlerService = class _AdminTreeEventHandlerService {
  adminDataService = inject(AdminDataService);
  adminState = inject(AdminStateService);
  adminSearchService = inject(AdminSearchService);
  broadcastService = inject(BroadcastEventMessageService);
  detailsService = inject(EntityDetailsService);
  navigationService = inject(AdminNavigationService);
  messageService = inject(MessageService);
  destroyRef = inject(DestroyRef);
  clientService = inject(AdminTreeClientService);
  // Node search loading state
  searchingForNode = signal(false);
  searchingNodeKey = signal(null);
  // Expose signals for component to use
  selectedTreeNode = signal(null);
  // Tree panel state
  treeCollapsed = signal(true);
  // Signal-based communication instead of callbacks
  scrollToClient = signal(null);
  suppressScroll = signal(null);
  toggleTreePanel = signal(false);
  errorMessage = signal(null);
  // Track current event source
  currentEventSource = EventSource.USER;
  // Pending node selection for event-driven approach
  pendingNodeSelection = null;
  // Required dependencies that will be injected via initialization
  hierarchyTreeGetter;
  findNodeByKeyRecursiveCallback;
  /**
   * Sets the event source for the next operation
   */
  setEventSource(source) {
    this.currentEventSource = source;
  }
  /**
   * Resets event source back to user after operation
   */
  resetEventSource() {
    this.currentEventSource = EventSource.USER;
  }
  /**
   * Checks if current event allows auto-scrolling
   */
  shouldAllowAutoScroll() {
    return this.currentEventSource !== EventSource.USER;
  }
  /**
   * Initialize the service with required dependencies
   */
  initialize(dependencies) {
    this.hierarchyTreeGetter = dependencies.getHierarchyTree;
    this.findNodeByKeyRecursiveCallback = dependencies.findNodeByKeyRecursive;
    this.setupBroadcastSubscriptions();
  }
  /**
   * Cleanup method to clear any pending operations
   */
  cleanup() {
    this.pendingNodeSelection = null;
  }
  /**
   * Setup broadcast event subscriptions
   */
  setupBroadcastSubscriptions() {
    this.broadcastService.on("view-entity-in-tree").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      const item = data?.entity;
      if (isDefined(item?.id) && item.entityType === "client") {
        this.setEventSource(EventSource.BROADCAST);
        this.handleClientInTree(item, item["vendorId"], item["groupId"]).catch((err) => this.handleError(err, "Error showing item in tree"));
      }
      if (isDefined(item?.id) && item.entityType === "vendor") {
        this.setEventSource(EventSource.BROADCAST);
        this.handleVendorInTree(item).catch((err) => this.handleError(err, "Error showing vendor in tree"));
      }
    });
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      if (isDefined(data) && typeof data === "object" && data !== null && "entityType" in data && "operation" in data && "entityId" in data) {
        const updateData = data;
        if (updateData.entityType === "client" && updateData.operation === "create" && updateData.entityId) {
          this.setEventSource(EventSource.SYSTEM);
          this.handleClientCreated(updateData.entityId).catch((err) => this.handleError(err, "Error refreshing tree after client creation"));
        }
      }
    });
  }
  /**
   * Handles node expansion
   */
  async onNodeExpand(node) {
    try {
      this.handleScrollSuppressionForExpansion();
      await this.expandNodeByType(node);
    } catch (error) {
      this.handleError(error, "Failed to expand node");
    } finally {
      this.resetEventSource();
    }
  }
  /**
   * Handles scroll suppression logic for node expansion
   */
  handleScrollSuppressionForExpansion() {
    if (this.shouldAllowAutoScroll()) {
      this.suppressScroll.set(TIMING.SCROLL_SUPPRESSION);
    } else {
      this.suppressScroll.set(0);
    }
  }
  /**
   * Expands node based on its type
   */
  async expandNodeByType(node) {
    switch (node.type) {
      case ADMIN_TREE.NODE_TYPES.VENDOR:
        await this.handleVendorNodeExpansion(node);
        break;
      case ADMIN_TREE.NODE_TYPES.GROUP:
        await this.handleGroupNodeExpansion(node);
        break;
      case ADMIN_TREE.NODE_TYPES.DISTRIBUTOR:
        await this.adminDataService.expandDistributor(node);
        break;
      case ADMIN_TREE.NODE_TYPES.SUPER_ADMIN:
        this.adminDataService.expandSuperAdmin(node);
        break;
    }
  }
  /**
   * Handles vendor node expansion logic
   */
  async handleVendorNodeExpansion(node) {
    if (isDefined(node.data?.id)) {
      const vendorId = node.data.id;
      const distributorId = this.adminDataService.getDistributorContextFromNode(node);
      if (isDefined(distributorId) && !(node.children?.length ?? 0)) {
        const distributorLoadedVendors = this.adminState.loadedVendors()[distributorId];
        if (distributorLoadedVendors?.has(vendorId)) {
          this.adminState.removeDistributorLoadedVendor(distributorId, vendorId);
        }
      }
    }
    await this.adminDataService.expandNode(node);
  }
  /**
   * Handles group node expansion logic
   */
  async handleGroupNodeExpansion(node) {
    if (isDefined(node.data?.id) && isDefined(node?.parent?.data?.id)) {
      const groupId = node.data.id;
      const vendorId = node?.parent?.data.id;
      const distributorId = this.adminDataService.getDistributorContextFromNode(node);
      if (isDefined(distributorId)) {
        const paginationKey = this.adminState.getDistributorPaginationKey(distributorId, vendorId, groupId);
        if (!(node.children?.length ?? 0) && isDefined(this.adminState.clientPagination()[distributorId]?.[paginationKey])) {
          this.adminState.clearDistributorGroupPagination(distributorId, vendorId, groupId);
        }
      } else {
        const paginationKey = `${vendorId}_${groupId}`;
        if (!(node.children?.length ?? 0) && isDefined(this.adminState.clientPagination()[paginationKey])) {
          this.adminState.clearGroupPagination(vendorId, groupId);
        }
      }
    }
    await this.adminDataService.expandGroup(node);
  }
  /**
   * Handles node collapse
   */
  onNodeCollapse(node) {
    if (!isDefined(node.data?.id))
      return;
    if (this.shouldAllowAutoScroll()) {
      this.suppressScroll.set(TIMING.SCROLL_SUPPRESSION);
    } else {
      this.suppressScroll.set(0);
    }
    switch (node.type) {
      case ADMIN_TREE.NODE_TYPES.VENDOR:
        this.adminDataService.collapseNode(node);
        break;
      case ADMIN_TREE.NODE_TYPES.GROUP:
        this.adminDataService.collapseGroup(node);
        break;
      case ADMIN_TREE.NODE_TYPES.DISTRIBUTOR:
        this.adminDataService.collapseDistributor(node);
        break;
      case ADMIN_TREE.NODE_TYPES.SUPER_ADMIN:
        this.adminDataService.collapseSuperAdmin(node);
        break;
    }
    this.resetEventSource();
  }
  /**
   * Handles node selection
   */
  async onNodeSelect(node) {
    this.selectedTreeNode.set(node);
    if (node.type === ADMIN_TREE.NODE_TYPES.LOAD_MORE) {
      this.suppressScroll.set(0);
      const loadData = node.data;
      if (isDefined(loadData.vendorId)) {
        await this.adminDataService.loadMoreClients(loadData.vendorId, loadData.groupId);
      }
    } else if (isDefined(node.key) && isDefined(node.type)) {
      this.adminDataService.selectNode(node);
      await this.navigationService.navigateToNode(node.type, node.key);
      if (node.type === ADMIN_TREE.NODE_TYPES.CLIENT && this.shouldAllowAutoScroll()) {
        this.scrollToClient.set(node.key);
      }
    }
    this.resetEventSource();
  }
  /**
   * Updates tree selection programmatically without triggering navigation
   * Use this for syncing tree state with route changes or other non-user actions
   */
  setTreeSelection(node) {
    this.selectedTreeNode.set(node);
    if (node) {
      this.adminDataService.selectNode(node);
    }
  }
  /**
   * Handles node unselection
   */
  onNodeUnselect(node) {
    if (this.selectedTreeNode()?.key === node.key) {
      this.selectedTreeNode.set(null);
      this.adminState.setSelectedClient(null);
    }
  }
  /**
   * Handles when a node is not found in the current tree data
   */
  onNodeNotFoundInData(event) {
    const clientId = event.nodeKey;
    if (this.searchingForNode() && this.searchingNodeKey() === clientId) {
      console.warn(`Already searching for node ${clientId}, skipping duplicate request`);
      return;
    }
    this.searchingForNode.set(true);
    this.searchingNodeKey.set(clientId);
    this.loadClientUsingExistingMethods(clientId).then(async () => {
      await this.handleSuccessfulClientLoad(clientId);
    }).catch((error) => {
      if (this.isClientLoadFailureError(error)) {
        this.handleFailedClientLoad(clientId);
      } else if (this.isClientNotFoundError(error)) {
        this.handleClientNotFound(clientId);
      } else {
        this.handleClientLoadError(error);
      }
      this.clearScrollRequestsForClient(clientId);
    }).finally(() => {
      this.searchingForNode.set(false);
      this.searchingNodeKey.set(null);
      this.resetEventSource();
    });
  }
  /**
   * Clears any pending scroll requests for a specific client to prevent infinite loops
   */
  clearScrollRequestsForClient(clientId) {
    const currentScrollClient = this.scrollToClient();
    if (currentScrollClient === clientId) {
      this.scrollToClient.set(null);
    }
  }
  /**
   * Handles successful client loading - waits for node in tree and attempts selection
   */
  async handleSuccessfulClientLoad(clientId) {
    const nodeFoundInTree = await this.waitForNodeInTree(clientId);
    if (nodeFoundInTree === true) {
      await this.handleNodeFoundInTree(clientId);
    } else {
      this.handleNodeNotFoundAfterLoad(clientId);
    }
  }
  /**
   * Handles the case when a node is found in the tree after loading
   */
  async handleNodeFoundInTree(clientId) {
    this.setEventSource(EventSource.SYSTEM);
    const selectionSuccess = this.trySelectPendingNode(clientId);
    if (selectionSuccess) {
      await this.handleClientLoadSuccess(clientId);
    } else {
      this.handleNodeSelectionFailure(clientId);
    }
  }
  /**
   * Handles the case when a node is not found in tree after data loading
   */
  handleNodeNotFoundAfterLoad(clientId) {
    console.warn(`Node ${clientId} not found in tree after data loading`);
    this.clearScrollRequestsForClient(clientId);
  }
  /**
   * Handles the case when node selection fails despite the node being found
   */
  handleNodeSelectionFailure(clientId) {
    console.warn(`Node ${clientId} found in tree but selection failed`);
  }
  /**
   * Handles failed client loading
   */
  handleFailedClientLoad(clientId) {
    console.warn(`Failed to load client ${clientId} using existing methods`);
    this.clearScrollRequestsForClient(clientId);
  }
  /**
   * Waits for a node to appear in the tree after data loading
   * Polls the hierarchyTree computed signal until the node is found
   */
  async waitForNodeInTree(nodeId) {
    const maxAttempts = 20;
    const delayMs = 100;
    for (let i = 0; i < maxAttempts; i++) {
      const tree = this.hierarchyTreeGetter?.() ?? [];
      const node = this.findNodeByKeyRecursiveCallback?.(tree, nodeId);
      if (node) {
        return true;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    return false;
  }
  /**
   * Loads a client using the existing AdminSearchService methods
   * This leverages the already working handleVendorOwnedClient and handleGroupOwnedClient logic
   * Throws specific errors for different failure scenarios instead of returning boolean
   */
  async loadClientUsingExistingMethods(clientId) {
    try {
      const client = await this.getClientWithOwnerInfo(clientId);
      if (client) {
        const result = await this.adminSearchService.prepareClientForTreeSelectionWithOwner(client);
        if (result === null) {
          throw new ClientLoadFailureError(`Failed to prepare client ${clientId} for tree selection`);
        }
      } else {
        const success = await this.adminSearchService.searchAndLoadClient(clientId);
        if (!success) {
          throw new ClientLoadFailureError(`Failed to search and load client ${clientId}`);
        }
      }
    } catch (error) {
      if (error instanceof ClientLoadFailureError) {
        throw error;
      }
      console.error(`Failed to load client ${clientId} using existing methods:`, error);
      throw new ClientLoadFailureError(`Failed to load client ${clientId} using existing methods`);
    }
  }
  /**
   * Gets client information with owner details from ClientDataService
   * This provides the owner info needed for handleVendorOwnedClient/handleGroupOwnedClient
   */
  async getClientWithOwnerInfo(clientId) {
    try {
      return await this.clientService.fetchClient(clientId);
    } catch (error) {
      console.warn(`Failed to get client ${clientId} from ClientDataService:`, error);
      return null;
    }
  }
  /**
   * Handles search query changes
   */
  onSearchQueryChange(query) {
    this.adminSearchService.updateQuery(query);
  }
  /**
   * Handles search result selection
   */
  async onSearchResultSelect(result) {
    try {
      this.setEventSource(EventSource.SEARCH);
      await this.adminSearchService.prepareResultForNavigation(result);
      await new Promise((resolve) => setTimeout(resolve, 100));
      await this.navigateToSearchResult(result);
    } catch (error) {
      this.handleError(error, "Failed to navigate to search result");
    } finally {
      this.resetEventSource();
    }
  }
  /**
   * Handles search clear
   */
  onSearchClear() {
    this.adminSearchService.clearSearch();
  }
  /**
   * Handles the 'view-entity-in-tree' event for a client
   */
  async handleClientInTree(client, vendorId, groupId) {
    try {
      this.detailsService.closeDetailsPanel();
      if (this.treeCollapsed()) {
        this.toggleTreePanel.set(true);
      }
      const result = await this.adminSearchService.handleClientInTree(client, vendorId, groupId);
      await new Promise((resolve) => setTimeout(resolve, TIMING.NODE_SELECTION_DELAY));
      await this.navigateToSearchResult(result);
    } catch (err) {
      this.handleError(err, "Error showing item in tree");
    } finally {
      this.resetEventSource();
    }
  }
  /**
   * Handles the 'view-entity-in-tree' event for a vendor
   */
  async handleVendorInTree(vendor) {
    try {
      this.detailsService.closeDetailsPanel();
      if (this.treeCollapsed()) {
        this.toggleTreePanel.set(true);
      }
      const result = await this.adminSearchService.handleVendorInTree(vendor);
      await new Promise((resolve) => setTimeout(resolve, TIMING.NODE_SELECTION_DELAY));
      await this.navigateToSearchResult(result);
    } catch (err) {
      this.handleError(err, "Error showing vendor in tree");
    } finally {
      this.resetEventSource();
    }
  }
  /**
   * Common method to navigate to a search result and update the tree selection
   */
  async navigateToSearchResult(result) {
    await this.navigationService.navigateToNode(result.type, result.id);
    await this.updateAdminStateForSearchResult(result);
    await this.scheduleNodeSelection(result.id, result.type);
  }
  /**
   * Schedules node selection to happen when the node becomes available
   * Now uses existing search infrastructure for better reliability
   */
  async scheduleNodeSelection(nodeId, nodeType) {
    const immediateResult = this.trySelectPendingNode(nodeId);
    if (immediateResult) {
      return;
    }
    if (nodeType === ADMIN_TREE.NODE_TYPES.CLIENT) {
      this.searchingForNode.set(true);
      this.searchingNodeKey.set(nodeId);
      try {
        await this.adminSearchService.searchAndLoadClient(nodeId);
        setTimeout(() => {
          this.trySelectPendingNode(nodeId);
          this.searchingForNode.set(false);
          this.searchingNodeKey.set(null);
        }, TIMING.NODE_SELECTION_DELAY);
      } catch (error) {
        console.error(`Failed to search and load client ${nodeId}:`, error);
        this.searchingForNode.set(false);
        this.searchingNodeKey.set(null);
        try {
          const client = await this.adminDataService.handleClientCreated(nodeId);
          if (client) {
            this.adminState.setSelectedClient(client);
          }
        } catch (loadError) {
          console.error(`Failed to load client ${nodeId} directly:`, loadError);
        }
      }
    } else {
      this.scheduleNodeSelectionWithMonitoring(nodeId, nodeType);
    }
  }
  scheduleNodeSelectionWithMonitoring(nodeId, nodeType) {
    this.pendingNodeSelection = { nodeId, nodeType, timestamp: Date.now() };
    this.monitorForNodeAvailability();
  }
  /**
   * Monitors for node availability using existing infrastructure
   */
  monitorForNodeAvailability() {
    const checkInterval = setInterval(() => {
      if (!this.pendingNodeSelection) {
        clearInterval(checkInterval);
        return;
      }
      const { nodeId } = this.pendingNodeSelection;
      this.trySelectPendingNode(nodeId);
    }, TIMING.NODE_MONITORING_INTERVAL);
    setTimeout(() => {
      if (this.pendingNodeSelection) {
        const { nodeId } = this.pendingNodeSelection;
        console.warn(`Timeout: Could not find tree node for ${nodeId} after extended wait`);
        this.pendingNodeSelection = null;
      }
      clearInterval(checkInterval);
    }, TIMING.NODE_SELECTION_TIMEOUT);
  }
  /**
   * Tries to select the pending node if it's now available
   * Leverages existing callback infrastructure
   */
  trySelectPendingNode(nodeId) {
    const finalTree = this.hierarchyTreeGetter?.() ?? [];
    const nodeToSelect = this.findNodeByKeyRecursiveCallback?.(finalTree, nodeId);
    if (nodeToSelect) {
      this.selectedTreeNode.set(nodeToSelect);
      this.adminDataService.selectNode(nodeToSelect);
      this.scrollToClient.set(nodeId);
      return true;
    }
    return false;
  }
  /**
   * Updates the admin state with the selected entity from search results
   */
  async updateAdminStateForSearchResult(result) {
    try {
      if (result.type === ADMIN_TREE.NODE_TYPES.CLIENT) {
        const hierarchy = this.adminSearchService.findClientHierarchy(result.id);
        if (hierarchy) {
          const client = this.findClientInState(result.id, hierarchy.vendorId, hierarchy.groupId, hierarchy.distributorId);
          if (client) {
            const clientResponse = __spreadProps(__spreadValues({}, client), {
              entity: isDefined(client["entity"]) ? client["entity"] : { id: client.id, name: client.name }
            });
            this.adminState.setSelectedClient(clientResponse);
          }
        }
      } else if (result.type === ADMIN_TREE.NODE_TYPES.VENDOR) {
        const distributorId = this.adminState.getCurrentDistributorId();
        const vendor = this.adminState.getVendorById(result.id, distributorId ?? void 0);
        if (vendor) {
          this.adminState.setSelectedClient(null);
        }
      }
    } catch (error) {
      console.error("Failed to update admin state for search result:", error);
    }
  }
  /**
   * Finds a client in the admin state using distributor-scoped data
   */
  findClientInState(clientId, vendorId, groupId, distributorId) {
    const contextDistributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(contextDistributorId)) {
      console.warn("findClientInState called without distributor context");
      return void 0;
    }
    if (isDefined(groupId)) {
      const groupClients = this.adminState.groupClients()[contextDistributorId]?.[vendorId]?.[groupId];
      return groupClients?.find((client) => client.id === clientId);
    } else {
      const vendorClients = this.adminState.vendorClients()[contextDistributorId]?.[vendorId];
      return vendorClients?.find((client) => client.id === clientId);
    }
  }
  /**
   * Handles client creation event to refresh the tree state
   */
  async handleClientCreated(clientId) {
    try {
      const client = await this.adminDataService.handleClientCreated(clientId);
      if (!client) {
        return;
      }
      if (this.treeCollapsed()) {
        this.toggleTreePanel.set(true);
      }
      await this.scheduleNodeSelection(clientId, ADMIN_TREE.NODE_TYPES.CLIENT);
    } catch (error) {
      this.handleError(error, "Error refreshing tree after client creation");
    } finally {
      this.resetEventSource();
    }
  }
  isClientNotFoundError(error) {
    return error instanceof Error && error.message.includes("not found");
  }
  isClientLoadFailureError(error) {
    return error instanceof ClientLoadFailureError;
  }
  async handleClientLoadSuccess(clientId) {
    await this.scheduleNodeSelection(clientId, ADMIN_TREE.NODE_TYPES.CLIENT);
  }
  handleClientNotFound(clientId) {
    this.messageService.add({
      severity: "warn",
      summary: "Client not found",
      detail: `Could not locate client ${clientId} in the company structure.`
    });
  }
  handleClientLoadError(error) {
    console.error("Error during client search:", error);
    this.messageService.add({
      severity: "error",
      summary: "Loading error",
      detail: "Failed to load client data. Please try again."
    });
  }
  handleError(error, message) {
    console.error(message, error);
    this.errorMessage.set({ error, message });
  }
  static \u0275fac = function AdminTreeEventHandlerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeEventHandlerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeEventHandlerService, factory: _AdminTreeEventHandlerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeEventHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toolbar/index.mjs
var style2 = "\n    .p-toolbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        padding: dt('toolbar.padding');\n        background: dt('toolbar.background');\n        border: 1px solid dt('toolbar.border.color');\n        color: dt('toolbar.color');\n        border-radius: dt('toolbar.border.radius');\n        gap: dt('toolbar.gap');\n    }\n\n    .p-toolbar-start,\n    .p-toolbar-center,\n    .p-toolbar-end {\n        display: flex;\n        align-items: center;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c0 = ["start"];
var _c1 = ["end"];
var _c2 = ["center"];
var _c3 = ["*"];
function Toolbar_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Toolbar_div_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("start"));
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.startTemplate || ctx_r0._startTemplate);
  }
}
function Toolbar_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Toolbar_div_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("center"));
    \u0275\u0275attribute("data-pc-section", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.centerTemplate || ctx_r0._centerTemplate);
  }
}
function Toolbar_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Toolbar_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Toolbar_div_3_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("end"));
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.endTemplate || ctx_r0._endTemplate);
  }
}
var classes = {
  root: () => ["p-toolbar p-component"],
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var ToolbarStyle = class _ToolbarStyle extends BaseStyle {
  name = "toolbar";
  theme = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToolbarStyle_BaseFactory;
    return function ToolbarStyle_Factory(__ngFactoryType__) {
      return (\u0275ToolbarStyle_BaseFactory || (\u0275ToolbarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToolbarStyle)))(__ngFactoryType__ || _ToolbarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToolbarStyle,
    factory: _ToolbarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarStyle, [{
    type: Injectable
  }], null, null);
})();
var ToolbarClasses;
(function(ToolbarClasses2) {
  ToolbarClasses2["root"] = "p-toolbar";
  ToolbarClasses2["start"] = "p-toolbar-start";
  ToolbarClasses2["center"] = "p-toolbar-center";
  ToolbarClasses2["end"] = "p-toolbar-end";
})(ToolbarClasses || (ToolbarClasses = {}));
var Toolbar = class _Toolbar extends BaseComponent {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabelledBy;
  _componentStyle = inject(ToolbarStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  /**
   * Defines template option for center.
   * @group Templates
   */
  centerTemplate;
  templates;
  _startTemplate;
  _endTemplate;
  _centerTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "start":
        case "left":
          this._startTemplate = item.template;
          break;
        case "end":
        case "right":
          this._endTemplate = item.template;
          break;
        case "center":
          this._centerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toolbar_BaseFactory;
    return function Toolbar_Factory(__ngFactoryType__) {
      return (\u0275Toolbar_BaseFactory || (\u0275Toolbar_BaseFactory = \u0275\u0275getInheritedFactory(_Toolbar)))(__ngFactoryType__ || _Toolbar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Toolbar,
    selectors: [["p-toolbar"]],
    contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.centerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: ["data-pc-section", "root", "data-pc-name", "toolbar", "role", "toolbar"],
    hostVars: 3,
    hostBindings: function Toolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy"
    },
    features: [\u0275\u0275ProvidersFeature([ToolbarStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 3,
    consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function Toolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Toolbar_div_1_Template, 2, 4, "div", 0)(2, Toolbar_div_2_Template, 2, 4, "div", 0)(3, Toolbar_div_3_Template, 2, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.startTemplate || ctx._startTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.centerTemplate || ctx._centerTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.endTemplate || ctx._endTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <div [class]="cx('start')" *ngIf="startTemplate || _startTemplate" [attr.data-pc-section]="'start'">
            <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
        </div>
        <div [class]="cx('center')" *ngIf="centerTemplate || _centerTemplate" [attr.data-pc-section]="'center'">
            <ng-container *ngTemplateOutlet="centerTemplate || _centerTemplate"></ng-container>
        </div>
        <div [class]="cx('end')" *ngIf="endTemplate || _endTemplate" [attr.data-pc-section]="'end'">
            <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarStyle],
      host: {
        "[class]": 'cn(cx("root"), styleClass)',
        "data-pc-section": "root",
        "data-pc-name": "toolbar",
        role: "toolbar",
        "[attr.aria-labelledby]": "ariaLabelledBy"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: ["center", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToolbarModule = class _ToolbarModule {
  static \u0275fac = function ToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolbarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToolbarModule,
    imports: [Toolbar, SharedModule],
    exports: [Toolbar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Toolbar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [Toolbar, SharedModule],
      exports: [Toolbar, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/components/tree-panel/tree-panel.component.ts
var _c02 = ["treeComponent"];
var _c12 = ["treeWrapper"];
function TreePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5);
    \u0275\u0275element(2, "i", 6);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loadingMessage);
  }
}
var TreePanelComponent = class _TreePanelComponent {
  treeComponent;
  treeWrapper;
  nodes = input([]);
  selectionMode = input("single");
  loading = input(false);
  searchingForNode = input(false);
  searchingNodeKey = input(null);
  emptyMessage = input("No data available");
  styleClass = input("");
  selection = input(null);
  scrollToNodeKey = input(null);
  scrollToCenterNodeKey = input(null);
  contextExtractor = input(null);
  nodeSelect = output();
  nodeUnselect = output();
  nodeExpand = output();
  nodeCollapse = output();
  nodeNotFoundInData = output();
  loadingMessage = "Loading...";
  constructor() {
    effect(() => {
      const nodeKey = this.scrollToNodeKey();
      if (nodeKey !== null && nodeKey !== "") {
        setTimeout(() => this.scrollToNode(nodeKey), 150);
      }
    });
    effect(() => {
      const nodeKey = this.scrollToCenterNodeKey();
      if (nodeKey !== null && nodeKey !== "") {
        setTimeout(() => this.scrollToCenterNode(nodeKey), 150);
      }
    });
  }
  onNodeSelect(event) {
    this.nodeSelect.emit(event.node);
  }
  onNodeUnselect(event) {
    this.nodeUnselect.emit(event.node);
  }
  onNodeExpand(event) {
    this.nodeExpand.emit(event.node);
  }
  onNodeCollapse(event) {
    this.nodeCollapse.emit(event.node);
  }
  /**
   * Scrolls to a specific node in the tree and centers it in the viewport
   * @param nodeKey The key of the node to scroll to
   */
  scrollToNode(nodeKey) {
    const targetNode = this.findNodeInData(nodeKey);
    if (targetNode === null) {
      const extractor = this.contextExtractor();
      const context = extractor?.extractContext(nodeKey, this.nodes());
      this.nodeNotFoundInData.emit({
        nodeKey,
        context
      });
      return;
    }
    this.expandPathToNode(targetNode);
    this.performOptimizedScroll(nodeKey);
  }
  /**
   * Performs optimized scrolling using PrimeNG's native methods with fallbacks
   */
  performOptimizedScroll(nodeKey) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const success = this.scrollToNodeInDOM(nodeKey);
        if (!success) {
          setTimeout(() => {
            this.scrollToNodeInDOM(nodeKey);
          }, 300);
        }
      });
    });
  }
  /**
   * Scrolls to center a specific node (for expanded nodes visibility)
   * This is different from scrollToNode - it only centers without selecting
   * @param nodeKey The key of the node to center in the viewport
   */
  scrollToCenterNode(nodeKey) {
    const targetNode = this.findNodeInData(nodeKey);
    if (targetNode === null) {
      const extractor = this.contextExtractor();
      const context = extractor?.extractContext(nodeKey, this.nodes());
      this.nodeNotFoundInData.emit({
        nodeKey,
        context
      });
      return;
    }
    const nodeElement = this.findNodeElementInDOM(nodeKey);
    if (nodeElement) {
      this.scrollToShowExpandedChildren(nodeElement, targetNode);
    }
  }
  /**
   * Scrolls to position the expanded node and its children optimally in the viewport
   * @param nodeElement The DOM element of the parent node
   * @param targetNode The tree node data
   */
  scrollToShowExpandedChildren(nodeElement, targetNode) {
    const treeWrapper = this.treeWrapper?.nativeElement;
    if (isNullOrUndefined(treeWrapper)) {
      return;
    }
    if (isNullOrUndefined(targetNode.expanded) || !targetNode.children || targetNode.children.length === 0) {
      this.scrollWithoutVirtualScroll(nodeElement);
      return;
    }
    const elementRect = nodeElement.getBoundingClientRect();
    const wrapperRect = treeWrapper.getBoundingClientRect();
    const elementTopRelativeToWrapper = elementRect.top - wrapperRect.top;
    const wrapperHeight = treeWrapper.clientHeight;
    const offsetFromTop = wrapperHeight / 3;
    const targetScrollTop = treeWrapper.scrollTop + elementTopRelativeToWrapper - offsetFromTop;
    if (typeof treeWrapper.scrollTo === "function") {
      treeWrapper.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth"
      });
    } else {
      treeWrapper.scrollTop = Math.max(0, targetScrollTop);
    }
    setTimeout(() => this.highlightElement(nodeElement), 300);
  }
  /**
   * Recursively searches for a node in the tree data
   */
  findNodeInData(nodeKey) {
    const searchInNodes = (nodes) => {
      for (const node of nodes) {
        if (node.key === nodeKey || node.data?.id === nodeKey || node.label?.includes(nodeKey) === true) {
          return node;
        }
        if (node.children && node.children.length > 0) {
          const found = searchInNodes(node.children);
          if (found)
            return found;
        }
      }
      return null;
    };
    return searchInNodes(this.nodes());
  }
  /**
   * Expands all parent nodes to make the target node visible
   */
  expandPathToNode(targetNode) {
    const pathToExpand = [];
    const findPath = (nodes, target, path) => {
      for (const node of nodes) {
        const currentPath = [...path, node];
        if (node === target) {
          pathToExpand.push(...path);
          return true;
        }
        if (node.children && node.children.length > 0) {
          if (findPath(node.children, target, currentPath)) {
            return true;
          }
        }
      }
      return false;
    };
    findPath(this.nodes(), targetNode, []);
    for (const nodeToExpand of pathToExpand) {
      if (nodeToExpand.expanded !== true) {
        nodeToExpand.expanded = true;
        this.nodeExpand.emit(nodeToExpand);
      }
    }
  }
  /**
   * Scrolls to a node using the appropriate method based on virtual scroll setting
   * @returns true if successful, false otherwise
   */
  scrollToNodeInDOM(nodeKey) {
    const treeComponent = this.treeComponent;
    if (isNullOrUndefined(treeComponent)) {
      return false;
    }
    try {
      const nodeData = this.findNodeInData(nodeKey);
      if (isNullOrUndefined(nodeData)) {
        return false;
      }
      const nodeElement = this.findNodeElementInDOM(nodeKey);
      if (isNullOrUndefined(nodeElement)) {
        return this.tryAlternativeScrollMethods(nodeKey);
      }
      if (treeComponent.virtualScroll === true) {
        return this.scrollWithVirtualScroll(treeComponent, nodeElement, nodeKey);
      } else {
        return this.scrollWithoutVirtualScroll(nodeElement);
      }
    } catch (error) {
      console.error("Error scrolling to tree node:", error);
      return false;
    }
  }
  /**
   * Scrolls using virtual scroll method
   */
  scrollWithVirtualScroll(treeComponent, nodeElement, _nodeKey) {
    const treeContainer = treeComponent.el?.nativeElement;
    if (isNullOrUndefined(treeContainer)) {
      return false;
    }
    const elementRect = nodeElement.getBoundingClientRect();
    const containerRect = treeContainer.getBoundingClientRect();
    const elementTopRelativeToContainer = elementRect.top - containerRect.top;
    const containerHeight = treeContainer.clientHeight;
    const elementHeight = elementRect.height;
    const centerOffset = (containerHeight - elementHeight) / 2;
    const targetScrollTop = treeContainer.scrollTop + elementTopRelativeToContainer - centerOffset;
    treeComponent.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: "smooth"
    });
    setTimeout(() => this.highlightElement(nodeElement), 300);
    return true;
  }
  /**
   * Scrolls without virtual scroll using wrapper element
   */
  scrollWithoutVirtualScroll(nodeElement) {
    const treeWrapper = this.treeWrapper?.nativeElement;
    if (isNullOrUndefined(treeWrapper)) {
      return false;
    }
    const elementRect = nodeElement.getBoundingClientRect();
    const wrapperRect = treeWrapper.getBoundingClientRect();
    const elementTopRelativeToWrapper = elementRect.top - wrapperRect.top;
    const wrapperHeight = treeWrapper.clientHeight;
    const elementHeight = elementRect.height;
    const centerOffset = (wrapperHeight - elementHeight) / 2;
    const targetScrollTop = treeWrapper.scrollTop + elementTopRelativeToWrapper - centerOffset;
    if (typeof treeWrapper.scrollTo === "function") {
      treeWrapper.scrollTo({
        top: Math.max(0, targetScrollTop),
        behavior: "smooth"
      });
    } else {
      treeWrapper.scrollTop = Math.max(0, targetScrollTop);
    }
    setTimeout(() => this.highlightElement(nodeElement), 300);
    return true;
  }
  /**
   * Try alternative scroll methods when primary methods fail
   */
  tryAlternativeScrollMethods(nodeKey) {
    const treeComponent = this.treeComponent;
    if (treeComponent?.virtualScroll === true) {
      const nodeIndex = this.findNodeIndex(nodeKey);
      if (nodeIndex !== -1) {
        treeComponent.scrollToVirtualIndex(nodeIndex);
        return true;
      }
    }
    return this.fallbackDOMScroll(nodeKey);
  }
  /**
   * Finds the DOM element for a specific node key
   */
  findNodeElementInDOM(nodeKey) {
    const treeWrapper = this.treeWrapper?.nativeElement;
    if (isNullOrUndefined(treeWrapper)) {
      return null;
    }
    return this.findNodeElement(treeWrapper, nodeKey);
  }
  /**
   * Finds the index of a node in the flattened tree structure
   */
  findNodeIndex(nodeKey) {
    let index = 0;
    const searchInNodes = (nodes) => {
      for (const node of nodes) {
        if (node.key === nodeKey || node.data?.id === nodeKey || node.label?.includes(nodeKey) === true) {
          return index;
        }
        index++;
        if (node.children && node.children.length > 0 && node.expanded === true) {
          const foundIndex = searchInNodes(node.children);
          if (foundIndex !== -1) {
            return foundIndex;
          }
        }
      }
      return -1;
    };
    return searchInNodes(this.nodes());
  }
  /**
   * Fallback DOM-based scrolling method
   */
  fallbackDOMScroll(nodeKey) {
    const treeWrapper = this.treeWrapper?.nativeElement;
    if (isNullOrUndefined(treeWrapper)) {
      return false;
    }
    try {
      const nodeElement = this.findNodeElement(treeWrapper, nodeKey);
      if (nodeElement === null) {
        return false;
      }
      const elementRect = nodeElement.getBoundingClientRect();
      const wrapperRect = treeWrapper.getBoundingClientRect();
      const elementTopRelativeToWrapper = elementRect.top - wrapperRect.top;
      const wrapperHeight = treeWrapper.clientHeight;
      const elementHeight = elementRect.height;
      const centerOffset = (wrapperHeight - elementHeight) / 2;
      const targetScrollTop = treeWrapper.scrollTop + elementTopRelativeToWrapper - centerOffset;
      if (typeof treeWrapper.scrollTo === "function") {
        treeWrapper.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: "smooth"
        });
      } else {
        treeWrapper.scrollTop = Math.max(0, targetScrollTop);
      }
      this.highlightElement(nodeElement);
      return true;
    } catch (error) {
      console.error("Error in fallback DOM scroll:", error);
      return false;
    }
  }
  findNodeElement(treeElement, nodeKey) {
    let nodeElement = this.findBySelectors(treeElement, nodeKey);
    nodeElement ??= this.findByNodeSearch(treeElement, nodeKey);
    nodeElement ??= this.findByContentSearch(treeElement, nodeKey);
    return nodeElement;
  }
  findBySelectors(treeElement, nodeKey) {
    const selectors = [
      `[data-pc-section="node"][aria-label*="${nodeKey}"]`,
      `.p-treenode[data-key="${nodeKey}"]`,
      `[data-id="${nodeKey}"]`,
      `[aria-label*="${nodeKey}"]`
    ];
    for (const selector of selectors) {
      const element = treeElement.querySelector(selector);
      if (element !== null) {
        return element;
      }
    }
    return null;
  }
  findByNodeSearch(treeElement, nodeKey) {
    const allNodes = treeElement.querySelectorAll('.p-treenode, .p-treenode-content, [role="treeitem"]');
    for (const node of Array.from(allNodes)) {
      const htmlNode = node;
      if (this.isMatchingNode(htmlNode, nodeKey)) {
        return htmlNode;
      }
    }
    return null;
  }
  findByContentSearch(treeElement, nodeKey) {
    const contentNodes = treeElement.querySelectorAll(".p-treenode-label, .p-treenode-content");
    for (const node of Array.from(contentNodes)) {
      const htmlNode = node;
      const textContent = htmlNode.textContent;
      if (textContent?.includes(nodeKey) === true) {
        const treeNode = htmlNode.closest(".p-treenode");
        if (treeNode !== null) {
          return treeNode;
        }
      }
    }
    return null;
  }
  isMatchingNode(htmlNode, nodeKey) {
    const dataKey = htmlNode.getAttribute("data-key");
    const ariaLabel = htmlNode.getAttribute("aria-label");
    const textContent = htmlNode.textContent?.trim();
    return dataKey === nodeKey || ariaLabel?.includes(nodeKey) === true || textContent?.includes(nodeKey) === true || htmlNode.querySelector(`[data-key="${nodeKey}"]`) !== null;
  }
  scrollToElement(treeElement, nodeElement) {
    const treeRect = treeElement.getBoundingClientRect();
    const nodeRect = nodeElement.getBoundingClientRect();
    const treeScrollTop = treeElement.scrollTop;
    const nodeOffsetTop = nodeRect.top - treeRect.top + treeScrollTop;
    const centerPosition = nodeOffsetTop - treeRect.height / 2 + nodeRect.height / 2;
    treeElement.scrollTo({
      top: Math.max(0, centerPosition),
      behavior: "smooth"
    });
  }
  highlightElement(nodeElement) {
    nodeElement.style.transition = "background-color 0.3s ease";
    nodeElement.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
    setTimeout(() => {
      if (nodeElement !== null) {
        nodeElement.style.backgroundColor = "";
        setTimeout(() => {
          if (nodeElement !== null) {
            nodeElement.style.transition = "";
          }
        }, 300);
      }
    }, 1500);
  }
  /**
   * Alternative method to find nodes using PrimeNG Tree component properties
   */
  findNodeUsingPrimeNGTree(nodeKey) {
    if (isNullOrUndefined(this.treeComponent)) {
      return null;
    }
    try {
      const treeEl = this.treeComponent.el?.nativeElement;
      if (isNullOrUndefined(treeEl)) {
        return null;
      }
      const strategies = [
        () => treeEl.querySelector(`[data-key="${nodeKey}"]`),
        () => treeEl.querySelector(`[aria-label*="${nodeKey}"]`),
        () => {
          const allItems = treeEl.querySelectorAll('[role="treeitem"], .p-treenode');
          for (const item of Array.from(allItems)) {
            const element = item;
            if (element.textContent?.includes(nodeKey) === true) {
              return element;
            }
          }
          return null;
        }
      ];
      for (const element of strategies) {
        const result = element();
        if (result !== null) {
          return result;
        }
      }
      return null;
    } catch (error) {
      console.error("Error in findNodeUsingPrimeNGTree:", error);
      return null;
    }
  }
  static \u0275fac = function TreePanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreePanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreePanelComponent, selectors: [["app-tree-panel"]], viewQuery: function TreePanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeWrapper = _t.first);
    }
  }, inputs: { nodes: [1, "nodes"], selectionMode: [1, "selectionMode"], loading: [1, "loading"], searchingForNode: [1, "searchingForNode"], searchingNodeKey: [1, "searchingNodeKey"], emptyMessage: [1, "emptyMessage"], styleClass: [1, "styleClass"], selection: [1, "selection"], scrollToNodeKey: [1, "scrollToNodeKey"], scrollToCenterNodeKey: [1, "scrollToCenterNodeKey"], contextExtractor: [1, "contextExtractor"] }, outputs: { nodeSelect: "nodeSelect", nodeUnselect: "nodeUnselect", nodeExpand: "nodeExpand", nodeCollapse: "nodeCollapse", nodeNotFoundInData: "nodeNotFoundInData" }, decls: 5, vars: 7, consts: [["treeWrapper", ""], ["treeComponent", ""], [1, "tree-panel-wrapper", "h-full", "overflow-auto", "relative"], [1, "node-search-overlay", "absolute", "inset-0", "bg-white", "bg-opacity-75", "flex", "items-center", "justify-center", "z-10"], [3, "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "value", "selectionMode", "selection", "loading", "emptyMessage", "styleClass"], [1, "node-search-message", "flex", "items-center", "space-x-2", "bg-white", "px-4", "py-2", "rounded-lg", "border"], [1, "pi", "pi-spin", "pi-spinner", "text-blue-500"], [1, "text-sm", "text-gray-700"]], template: function TreePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275conditionalCreate(2, TreePanelComponent_Conditional_2_Template, 5, 1, "div", 3);
      \u0275\u0275elementStart(3, "p-tree", 4, 1);
      \u0275\u0275listener("onNodeSelect", function TreePanelComponent_Template_p_tree_onNodeSelect_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeSelect($event));
      })("onNodeUnselect", function TreePanelComponent_Template_p_tree_onNodeUnselect_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeUnselect($event));
      })("onNodeExpand", function TreePanelComponent_Template_p_tree_onNodeExpand_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeExpand($event));
      })("onNodeCollapse", function TreePanelComponent_Template_p_tree_onNodeCollapse_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNodeCollapse($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.searchingForNode() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.nodes())("selectionMode", ctx.selectionMode())("selection", ctx.selection())("loading", ctx.loading() && !ctx.searchingForNode())("emptyMessage", ctx.emptyMessage())("styleClass", ctx.styleClass());
    }
  }, dependencies: [TreeModule, Tree], styles: ["\n\n.tree-panel-wrapper[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n.tree-panel-wrapper   [_nghost-%COMP%]     .p-tree .p-treenode {\n  transition: background-color 0.2s ease;\n}\n.tree-panel-wrapper[_ngcontent-%COMP%]   .node-search-overlay[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in;\n}\n.tree-panel-wrapper[_ngcontent-%COMP%]   .node-search-message[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=tree-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreePanelComponent, [{
    type: Component,
    args: [{ selector: "app-tree-panel", standalone: true, imports: [TreeModule], template: '<div #treeWrapper class="tree-panel-wrapper h-full overflow-auto relative">\n  <!-- Custom loading overlay for node search -->\n  @if (searchingForNode()) {\n    <div\n      class="node-search-overlay absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"\n    >\n      <div\n        class="node-search-message flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border"\n      >\n        <i class="pi pi-spin pi-spinner text-blue-500"></i>\n        <span class="text-sm text-gray-700">{{ loadingMessage }}</span>\n      </div>\n    </div>\n  }\n\n  <p-tree\n    #treeComponent\n    [value]="nodes()"\n    [selectionMode]="selectionMode()"\n    [selection]="selection()"\n    [loading]="loading() && !searchingForNode()"\n    [emptyMessage]="emptyMessage()"\n    [styleClass]="styleClass()"\n    (onNodeSelect)="onNodeSelect($event)"\n    (onNodeUnselect)="onNodeUnselect($event)"\n    (onNodeExpand)="onNodeExpand($event)"\n    (onNodeCollapse)="onNodeCollapse($event)"\n  />\n</div>\n', styles: ["/* src/app/shared/components/tree-panel/tree-panel.component.scss */\n.tree-panel-wrapper {\n  scroll-behavior: smooth;\n}\n.tree-panel-wrapper :host ::ng-deep .p-tree .p-treenode {\n  transition: background-color 0.2s ease;\n}\n.tree-panel-wrapper .node-search-overlay {\n  -webkit-backdrop-filter: blur(1px);\n  backdrop-filter: blur(1px);\n  animation: fadeIn 0.2s ease-in;\n}\n.tree-panel-wrapper .node-search-message {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=tree-panel.component.css.map */\n"] }]
  }], () => [], { treeComponent: [{
    type: ViewChild,
    args: ["treeComponent"]
  }], treeWrapper: [{
    type: ViewChild,
    args: ["treeWrapper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreePanelComponent, { className: "TreePanelComponent", filePath: "src/app/shared/components/tree-panel/tree-panel.component.ts", lineNumber: 38 });
})();

// src/app/shared/components/tree-search/tree-search.component.ts
var _c03 = ["searchInput"];
var _c13 = ["searchContainer"];
var _forTrack0 = ($index, $item) => $item.id;
function TreeSearchComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputicon", 8);
    \u0275\u0275listener("click", function TreeSearchComponent_Conditional_6_Template_p_inputicon_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearSearch());
    })("keydown.enter", function TreeSearchComponent_Conditional_6_Template_p_inputicon_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearSearch());
    })("keydown.space", function TreeSearchComponent_Conditional_6_Template_p_inputicon_keydown_space_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearSearch());
    });
    \u0275\u0275elementEnd();
  }
}
function TreeSearchComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-inputicon", 6);
  }
}
function TreeSearchComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Searching...");
    \u0275\u0275elementEnd()();
  }
}
function TreeSearchComponent_Conditional_8_Conditional_2_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", \u0275\u0275interpolate(ctx_r3.formatPath(result_r6.path)))("tooltipStyleClass", "max-w-xs break-words");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatPath(result_r6.path), " ");
  }
}
function TreeSearchComponent_Conditional_8_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function TreeSearchComponent_Conditional_8_Conditional_2_For_2_Template_div_click_0_listener() {
      const result_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectResult(result_r6));
    })("keydown.enter", function TreeSearchComponent_Conditional_8_Conditional_2_For_2_Template_div_keydown_enter_0_listener() {
      const result_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectResult(result_r6));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TreeSearchComponent_Conditional_8_Conditional_2_For_2_Conditional_6_Template, 2, 4, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r6 = ctx.$implicit;
    const \u0275$index_29_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r3.selectedIndex() === \u0275$index_29_r7);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.getResultTypeIcon(result_r6.type) + " text-primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275interpolate(result_r6.name))("tooltipStyleClass", "max-w-xs break-words");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(result_r6.path.length > 1 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getResultTypeLabel(result_r6.type), " ");
  }
}
function TreeSearchComponent_Conditional_8_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p-button", 21);
    \u0275\u0275listener("onClick", function TreeSearchComponent_Conditional_8_Conditional_2_Conditional_3_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.showAllResults());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("label", "+" + (ctx_r3.results().length - ctx_r3.displayResults().length) + " more results");
  }
}
function TreeSearchComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, TreeSearchComponent_Conditional_8_Conditional_2_For_2_Template, 9, 10, "div", 13, _forTrack0);
    \u0275\u0275conditionalCreate(3, TreeSearchComponent_Conditional_8_Conditional_2_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.displayResults());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.hasMoreResults() ? 3 : -1);
  }
}
function TreeSearchComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No results found for "', ctx_r3.searchQuery(), '" ');
  }
}
function TreeSearchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, TreeSearchComponent_Conditional_8_Conditional_1_Template, 4, 0, "div", 9)(2, TreeSearchComponent_Conditional_8_Conditional_2_Template, 4, 1, "div", 10)(3, TreeSearchComponent_Conditional_8_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isSearching() ? 1 : ctx_r3.hasResults() ? 2 : ctx_r3.hasQuery() ? 3 : -1);
  }
}
var TreeSearchComponent = class _TreeSearchComponent {
  searchInput;
  searchContainer;
  // Inputs
  placeholder = input("Search company structure...");
  disabled = input(false);
  results = input([]);
  isSearching = input(false);
  maxDisplayResults = input(10);
  // Outputs
  queryChange = output();
  resultSelect = output();
  searchClear = output();
  // Internal state
  searchQuery = signal("");
  showResults = signal(false);
  selectedIndex = signal(-1);
  showAll = signal(false);
  // Added showAll signal
  // Computed values
  hasQuery = computed(() => this.searchQuery().trim().length > 0);
  hasResults = computed(() => this.results().length > 0);
  displayResults = computed(() => {
    if (this.showAll()) {
      return this.results();
    }
    const maxResults = this.maxDisplayResults();
    return this.results().slice(0, maxResults);
  });
  hasMoreResults = computed(() => !this.showAll() && this.results().length > this.maxDisplayResults());
  clickListener;
  constructor() {
    this.clickListener = (event) => {
      const container = this.searchContainer?.nativeElement;
      if (this.showResults() && isDefined(container) && !container.contains(event.target)) {
        this.hideResults();
      }
    };
    document.addEventListener("click", this.clickListener);
  }
  ngOnDestroy() {
    if (this.clickListener) {
      document.removeEventListener("click", this.clickListener);
    }
  }
  onSearchInput(value) {
    this.searchQuery.set(value);
    this.queryChange.emit(value);
    this.showAll.set(false);
    if (value.trim().length > 0) {
      this.showResults.set(true);
      this.selectedIndex.set(-1);
    } else {
      this.hideResults();
    }
  }
  onSearchKeydown(event) {
    const results = this.displayResults();
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this.selectedIndex.update((index) => Math.min(index + 1, results.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        this.selectedIndex.update((index) => Math.max(index - 1, -1));
        break;
      case "Enter": {
        event.preventDefault();
        const selectedIdx = this.selectedIndex();
        if (selectedIdx >= 0 && selectedIdx < results.length) {
          this.selectResult(results[selectedIdx]);
        } else if (results.length > 0) {
          this.selectResult(results[0]);
        }
        break;
      }
      case "Escape":
        event.preventDefault();
        this.clearSearch();
        break;
    }
  }
  selectResult(result) {
    this.resultSelect.emit(result);
    this.hideResults();
    this.searchInput.nativeElement.blur();
  }
  clearSearch() {
    this.searchQuery.set("");
    this.hideResults();
    this.searchClear.emit();
    this.searchInput.nativeElement.focus();
  }
  hideResults() {
    this.showResults.set(false);
    this.selectedIndex.set(-1);
    this.showAll.set(false);
  }
  onInputFocus() {
    if (this.hasQuery() && this.hasResults()) {
      this.showResults.set(true);
    }
  }
  getResultTypeIcon(type) {
    switch (type) {
      case "client":
        return "pi pi-user";
      case "vendor":
        return "pi pi-building";
      case "group":
        return "pi pi-users";
      case "distributor":
        return "pi pi-globe";
      default:
        return "pi pi-circle";
    }
  }
  getResultTypeLabel(type) {
    switch (type) {
      case "client":
        return "Client";
      case "vendor":
        return "Vendor";
      case "group":
        return "Group";
      case "distributor":
        return "Distributor";
      default:
        return type;
    }
  }
  formatPath(path) {
    if (isNullOrUndefined(path) || path.length === 0) {
      return "";
    }
    return path.slice(0, -1).join(" > ");
  }
  showAllResults() {
    this.showAll.set(true);
  }
  static \u0275fac = function TreeSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeSearchComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeSearchComponent, selectors: [["app-tree-search"]], viewQuery: function TreeSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c13, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchContainer = _t.first);
    }
  }, inputs: { placeholder: [1, "placeholder"], disabled: [1, "disabled"], results: [1, "results"], isSearching: [1, "isSearching"], maxDisplayResults: [1, "maxDisplayResults"] }, outputs: { queryChange: "queryChange", resultSelect: "resultSelect", searchClear: "searchClear" }, decls: 9, vars: 5, consts: [["searchContainer", ""], ["searchInput", ""], [1, "tree-search-container", "relative"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "autocomplete", "off", 1, "tree-search-input", 3, "input", "keydown", "focus", "placeholder", "disabled", "value"], ["pTooltip", "Clear search", "tooltipPosition", "top", "tabindex", "0", 1, "pi", "pi-times", "cursor-pointer", "hover:text-gray-600", "transition-colors", "clear-search-icon"], [1, "pi", "pi-search"], [1, "search-results-panel", "absolute", "top-full", "left-0", "right-0", "z-50", "mt-1", "bg-white", "border", "border-gray-300", "rounded", "shadow-lg", "max-h-80", "overflow-hidden"], ["pTooltip", "Clear search", "tooltipPosition", "top", "tabindex", "0", 1, "pi", "pi-times", "cursor-pointer", "hover:text-gray-600", "transition-colors", "clear-search-icon", 3, "click", "keydown.enter", "keydown.space"], [1, "p-4", "text-center"], [1, "search-results-list"], [1, "p-4", "text-center", "text-gray-500"], [1, "pi", "pi-spin", "pi-spinner", "mr-2"], [1, "search-result-item", "p-3", "cursor-pointer", "border-b", "border-gray-100", "last:border-b-0", "hover:bg-gray-50", "transition-colors", 3, "selected"], [1, "p-2", "text-center", "text-sm", "bg-gray-50"], [1, "search-result-item", "p-3", "cursor-pointer", "border-b", "border-gray-100", "last:border-b-0", "hover:bg-gray-50", "transition-colors", 3, "click", "keydown.enter"], [1, "flex", "items-center", "gap-3"], [1, "flex-1", "min-w-0"], ["tooltipPosition", "top", 1, "font-medium", "text-gray-900", "truncate", 3, "pTooltip", "tooltipStyleClass"], ["tooltipPosition", "top", 1, "text-sm", "text-gray-500", "truncate", 3, "pTooltip", "tooltipStyleClass"], [1, "text-xs", "text-gray-400", "bg-gray-100", "px-2", "py-1", "rounded"], [1, "p-button-text", "p-button-sm", 3, "onClick", "label"]], template: function TreeSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "p-iconfield")(4, "input", 4, 1);
      \u0275\u0275listener("input", function TreeSearchComponent_Template_input_input_4_listener() {
        \u0275\u0275restoreView(_r1);
        const searchInput_r2 = \u0275\u0275reference(5);
        return \u0275\u0275resetView(ctx.onSearchInput(searchInput_r2.value));
      })("keydown", function TreeSearchComponent_Template_input_keydown_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchKeydown($event));
      })("focus", function TreeSearchComponent_Template_input_focus_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputFocus());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, TreeSearchComponent_Conditional_6_Template, 1, 0, "p-inputicon", 5)(7, TreeSearchComponent_Conditional_7_Template, 1, 0, "p-inputicon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, TreeSearchComponent_Conditional_8_Template, 4, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", ctx.placeholder())("disabled", ctx.disabled())("value", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasQuery() ? 6 : 7);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showResults() ? 8 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputText,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    ScrollerModule,
    InputIcon,
    IconField,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n.tree-search-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tree-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.clear-search-icon[_ngcontent-%COMP%] {\n  right: 8px !important;\n  left: auto !important;\n  z-index: 10;\n}\n.clear-search-icon[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary-color, #3b82f6);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n.search-results-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  max-height: 320px;\n  z-index: 1050;\n  background: var(--input-background-color) !important;\n  border-color: var(--input-border-color) !important;\n}\n.search-results-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n}\n.search-result-item.selected[_ngcontent-%COMP%] {\n  background-color: var(--primary-color, #3b82f6);\n  color: white;\n}\n.search-result-item.selected[_ngcontent-%COMP%]   .text-gray-500[_ngcontent-%COMP%], \n.search-result-item.selected[_ngcontent-%COMP%]   .text-gray-400[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n.search-result-item.selected[_ngcontent-%COMP%]   .bg-gray-100[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.search-result-item[_ngcontent-%COMP%]:hover:not(.selected) {\n  background-color: #f9fafb;\n}\n.search-result-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=tree-search.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeSearchComponent, [{
    type: Component,
    args: [{ selector: "app-tree-search", standalone: true, imports: [
      CommonModule,
      FormsModule,
      InputTextModule,
      ButtonModule,
      ProgressSpinnerModule,
      ScrollerModule,
      InputIcon,
      IconField,
      TooltipModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div #searchContainer class="tree-search-container relative">
  <div class="p-inputgroup">
    <p-iconfield>
      <input
        #searchInput
        type="text"
        pInputText
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [value]="searchQuery()"
        (input)="onSearchInput(searchInput.value)"
        (keydown)="onSearchKeydown($event)"
        (focus)="onInputFocus()"
        class="tree-search-input"
        autocomplete="off"
      />

      @if (hasQuery()) {
        <p-inputicon
          class="pi pi-times cursor-pointer hover:text-gray-600 transition-colors clear-search-icon"
          (click)="clearSearch()"
          (keydown.enter)="clearSearch()"
          (keydown.space)="clearSearch()"
          pTooltip="Clear search"
          tooltipPosition="top"
          tabindex="0"
        />
      } @else {
        <p-inputicon class="pi pi-search" />
      }
    </p-iconfield>
  </div>

  @if (showResults()) {
    <div
      class="search-results-panel absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-80 overflow-hidden"
    >
      @if (isSearching()) {
        <div class="p-4 text-center">
          <i class="pi pi-spin pi-spinner mr-2"></i>
          <span>Searching...</span>
        </div>
      } @else if (hasResults()) {
        <div class="search-results-list">
          @for (result of displayResults(); track result.id; let i = $index) {
            <div
              class="search-result-item p-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              [class.selected]="selectedIndex() === i"
              (click)="selectResult(result)"
              (keydown.enter)="selectResult(result)"
            >
              <div class="flex items-center gap-3">
                <i
                  [class]="getResultTypeIcon(result.type) + ' text-primary'"
                ></i>
                <div class="flex-1 min-w-0">
                  <div
                    class="font-medium text-gray-900 truncate"
                    pTooltip="{{ result.name }}"
                    tooltipPosition="top"
                    [tooltipStyleClass]="'max-w-xs break-words'"
                  >
                    {{ result.name }}
                  </div>
                  @if (result.path.length > 1) {
                    <div
                      class="text-sm text-gray-500 truncate"
                      pTooltip="{{ formatPath(result.path) }}"
                      tooltipPosition="top"
                      [tooltipStyleClass]="'max-w-xs break-words'"
                    >
                      {{ formatPath(result.path) }}
                    </div>
                  }
                </div>
                <span
                  class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded"
                >
                  {{ getResultTypeLabel(result.type) }}
                </span>
              </div>
            </div>
          }
          @if (hasMoreResults()) {
            <div class="p-2 text-center text-sm bg-gray-50">
              <p-button
                [label]="
                  '+' +
                  (results().length - displayResults().length) +
                  ' more results'
                "
                class="p-button-text p-button-sm"
                (onClick)="showAllResults()"
              />
            </div>
          }
        </div>
      } @else if (hasQuery()) {
        <div class="p-4 text-center text-gray-500">
          No results found for "{{ searchQuery() }}"
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/shared/components/tree-search/tree-search.component.scss */\n.tree-search-container {\n  width: 100%;\n}\n.tree-search-input {\n  width: 100%;\n}\n.clear-search-icon {\n  right: 8px !important;\n  left: auto !important;\n  z-index: 10;\n}\n.clear-search-icon:focus {\n  outline: 2px solid var(--primary-color, #3b82f6);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n.search-results-panel {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  max-height: 320px;\n  z-index: 1050;\n  background: var(--input-background-color) !important;\n  border-color: var(--input-border-color) !important;\n}\n.search-results-list {\n  max-height: 280px;\n  overflow-y: auto;\n}\n.search-result-item.selected {\n  background-color: var(--primary-color, #3b82f6);\n  color: white;\n}\n.search-result-item.selected .text-gray-500,\n.search-result-item.selected .text-gray-400 {\n  color: rgba(255, 255, 255, 0.8) !important;\n}\n.search-result-item.selected .bg-gray-100 {\n  background-color: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.search-result-item:hover:not(.selected) {\n  background-color: #f9fafb;\n}\n.search-result-item i {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=tree-search.component.css.map */\n"] }]
  }], () => [], { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], searchContainer: [{
    type: ViewChild,
    args: ["searchContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeSearchComponent, { className: "TreeSearchComponent", filePath: "src/app/shared/components/tree-search/tree-search.component.ts", lineNumber: 42 });
})();

// src/app/features/administration/components/admin-container/tree-navigation-panel/tree-navigation-panel.component.ts
var _c04 = (a0) => ({ "absolute right-0 inset-y-0": a0 });
function TreeNavigationPanelComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
}
function TreeNavigationPanelComponent_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tree-search", 16);
    \u0275\u0275listener("queryChange", function TreeNavigationPanelComponent_Conditional_1_ng_template_4_Template_app_tree_search_queryChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearchQueryChange($event));
    })("resultSelect", function TreeNavigationPanelComponent_Conditional_1_ng_template_4_Template_app_tree_search_resultSelect_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearchResultSelect($event));
    })("searchClear", function TreeNavigationPanelComponent_Conditional_1_ng_template_4_Template_app_tree_search_searchClear_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearchClear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("results", ctx_r2.searchResults()())("isSearching", ctx_r2.isSearching()());
  }
}
function TreeNavigationPanelComponent_Conditional_1_ng_template_6_Template(rf, ctx) {
}
function TreeNavigationPanelComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "p-toolbar", 13);
    \u0275\u0275template(2, TreeNavigationPanelComponent_Conditional_1_ng_template_2_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, TreeNavigationPanelComponent_Conditional_1_ng_template_4_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, TreeNavigationPanelComponent_Conditional_1_ng_template_6_Template, 0, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "app-tree-panel", 15);
    \u0275\u0275listener("nodeExpand", function TreeNavigationPanelComponent_Conditional_1_Template_app_tree_panel_nodeExpand_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNodeExpand($event));
    })("nodeCollapse", function TreeNavigationPanelComponent_Conditional_1_Template_app_tree_panel_nodeCollapse_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNodeCollapse($event));
    })("nodeSelect", function TreeNavigationPanelComponent_Conditional_1_Template_app_tree_panel_nodeSelect_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNodeSelect($event));
    })("nodeNotFoundInData", function TreeNavigationPanelComponent_Conditional_1_Template_app_tree_panel_nodeNotFoundInData_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNodeNotFoundInData($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("nodes", ctx_r2.hierarchyTree()())("loading", ctx_r2.isLoading()())("searchingForNode", ctx_r2.searchingForNode()())("searchingNodeKey", ctx_r2.searchingNodeKey()())("selection", ctx_r2.findSelectedNode())("scrollToNodeKey", ctx_r2.scrollToNodeKey()())("scrollToCenterNodeKey", ctx_r2.scrollToCenterNodeKey()())("contextExtractor", ctx_r2.contextExtractor);
  }
}
var TreeNavigationPanelComponent = class _TreeNavigationPanelComponent {
  adminState = inject(AdminStateService);
  contextExtractor = inject(AdminTreeContextExtractorService);
  // Input properties
  treeCollapsed = input.required();
  hierarchyTree = input.required();
  isLoading = input.required();
  searchingForNode = input.required();
  searchingNodeKey = input.required();
  selectedTreeNode = input.required();
  scrollToNodeKey = input.required();
  scrollToCenterNodeKey = input.required();
  searchResults = input.required();
  isSearching = input.required();
  // Output events
  toggleTreePanel = output();
  navigateToSelectedClient = output();
  nodeExpand = output();
  nodeCollapse = output();
  nodeSelect = output();
  nodeNotFoundInData = output();
  searchQueryChange = output();
  searchResultSelect = output();
  searchClear = output();
  // Font Awesome icons
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  /**
   * Computed property for the toggle button text
   */
  toggleButtonText = computed(() => {
    return this.adminState.selectedClient()?.name ?? this.adminState.clientVendor()?.name ?? this.adminState.vendorDistributor()?.name ?? "COMPANY STRUCTURE";
  });
  /**
   * Finds the currently selected node for the tree panel
   */
  findSelectedNode() {
    return this.selectedTreeNode()();
  }
  // Event handlers - these simply emit to parent
  onToggleTreePanel() {
    this.toggleTreePanel.emit();
  }
  onNavigateToSelectedClient() {
    this.navigateToSelectedClient.emit();
  }
  onNodeExpand(node) {
    this.nodeExpand.emit(node);
  }
  onNodeCollapse(node) {
    this.nodeCollapse.emit(node);
  }
  onNodeSelect(node) {
    this.nodeSelect.emit(node);
  }
  onNodeNotFoundInData(event) {
    this.nodeNotFoundInData.emit(event);
  }
  onSearchQueryChange(query) {
    this.searchQueryChange.emit(query);
  }
  onSearchResultSelect(result) {
    this.searchResultSelect.emit(result);
  }
  onSearchClear() {
    this.searchClear.emit();
  }
  static \u0275fac = function TreeNavigationPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeNavigationPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeNavigationPanelComponent, selectors: [["app-tree-navigation-panel"]], inputs: { treeCollapsed: [1, "treeCollapsed"], hierarchyTree: [1, "hierarchyTree"], isLoading: [1, "isLoading"], searchingForNode: [1, "searchingForNode"], searchingNodeKey: [1, "searchingNodeKey"], selectedTreeNode: [1, "selectedTreeNode"], scrollToNodeKey: [1, "scrollToNodeKey"], scrollToCenterNodeKey: [1, "scrollToCenterNodeKey"], searchResults: [1, "searchResults"], isSearching: [1, "isSearching"] }, outputs: { toggleTreePanel: "toggleTreePanel", navigateToSelectedClient: "navigateToSelectedClient", nodeExpand: "nodeExpand", nodeCollapse: "nodeCollapse", nodeSelect: "nodeSelect", nodeNotFoundInData: "nodeNotFoundInData", searchQueryChange: "searchQueryChange", searchResultSelect: "searchResultSelect", searchClear: "searchClear" }, decls: 11, vars: 8, consts: [["start", ""], ["center", ""], ["end", ""], [1, "h-full", "flex", "relative"], [1, "h-full", "flex-grow", "flex", "flex-col", "pr-8"], [1, "vertical-toggle-panel", "flex", "h-full", "z-10", "flex-col", 3, "ngClass"], ["title", "Go to selected client", 1, "group", "flex", "items-center", "justify-center", "p-2", "bg-gray-50", "hover:bg-gray-100", "rounded", "transition", "cursor-pointer", "border", "border-gray-300", "shadow-sm", "my-4", 3, "click"], [1, "pi", "pi-home", "text-gray-700", "group-hover:text-primary", "transition", "text-sm"], [1, "flex-grow", "flex", "items-center", "justify-center"], [1, "group", "flex", "flex-col", "items-center", "justify-center", "px-1", "py-2", "bg-gray-100", "hover:bg-gray-200", "rounded", "transition", "cursor-pointer", "border", "border-gray-300", "shadow-sm", 3, "click"], [1, "text-sm", "font-semibold", "text-gray-700", "tracking-tight", "select-none", "vertical-toggle-button"], [1, "mt-2"], [1, "text-gray-500", "group-hover:text-primary", "transition", 3, "icon"], ["styleClass", "!rounded-none !border-x-0 h-header"], [1, "flex-grow", "flex", "overflow-hidden"], [1, "w-full", "overflow-auto", 3, "nodeExpand", "nodeCollapse", "nodeSelect", "nodeNotFoundInData", "nodes", "loading", "searchingForNode", "searchingNodeKey", "selection", "scrollToNodeKey", "scrollToCenterNodeKey", "contextExtractor"], [1, "w-full", "max-w-sm", 3, "queryChange", "resultSelect", "searchClear", "results", "isSearching"]], template: function TreeNavigationPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275conditionalCreate(1, TreeNavigationPanelComponent_Conditional_1_Template, 10, 8, "div", 4);
      \u0275\u0275elementStart(2, "div", 5)(3, "button", 6);
      \u0275\u0275listener("click", function TreeNavigationPanelComponent_Template_button_click_3_listener() {
        return ctx.onNavigateToSelectedClient();
      });
      \u0275\u0275element(4, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8)(6, "button", 9);
      \u0275\u0275listener("click", function TreeNavigationPanelComponent_Template_button_click_6_listener() {
        return ctx.onToggleTreePanel();
      });
      \u0275\u0275elementStart(7, "span", 10);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 11);
      \u0275\u0275element(10, "fa-icon", 12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.treeCollapsed()() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c04, !ctx.treeCollapsed()()));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "Navigate to selected client");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", ctx.treeCollapsed()() ? "Expand company structure" : "Collapse company structure");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.toggleButtonText(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("icon", ctx.treeCollapsed()() ? ctx.faAngleRight : ctx.faAngleLeft);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    TreePanelComponent,
    TreeSearchComponent,
    ToolbarModule,
    Toolbar,
    FontAwesomeModule,
    FaIconComponent
  ], styles: ["\n\n.vertical-toggle-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  max-width: 2.5rem;\n  overflow: visible;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f4f6;\n  transition: all 0.3s;\n  z-index: 10;\n}\n.vertical-toggle-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--navigation-font-color);\n}\n.vertical-toggle-panel[_ngcontent-%COMP%]   .fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.vertical-toggle-button[_ngcontent-%COMP%] {\n  writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=tree-navigation-panel.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeNavigationPanelComponent, [{
    type: Component,
    args: [{ selector: "app-tree-navigation-panel", standalone: true, imports: [
      CommonModule,
      TreePanelComponent,
      TreeSearchComponent,
      ToolbarModule,
      FontAwesomeModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="h-full flex relative">
  <!-- Tree Panel - conditionally shown -->
  @if (!treeCollapsed()()) {
    <div class="h-full flex-grow flex flex-col pr-8">
      <p-toolbar styleClass="!rounded-none !border-x-0 h-header">
        <ng-template #start></ng-template>
        <ng-template #center>
          <app-tree-search
            [results]="searchResults()()"
            [isSearching]="isSearching()()"
            (queryChange)="onSearchQueryChange($event)"
            (resultSelect)="onSearchResultSelect($event)"
            (searchClear)="onSearchClear()"
            class="w-full max-w-sm"
          ></app-tree-search>
        </ng-template>
        <ng-template #end></ng-template>
      </p-toolbar>
      <!-- Tree container with flex and overflow handling -->
      <div class="flex-grow flex overflow-hidden">
        <app-tree-panel
          [nodes]="hierarchyTree()()"
          [loading]="isLoading()()"
          [searchingForNode]="searchingForNode()()"
          [searchingNodeKey]="searchingNodeKey()()"
          [selection]="findSelectedNode()"
          [scrollToNodeKey]="scrollToNodeKey()()"
          [scrollToCenterNodeKey]="scrollToCenterNodeKey()()"
          [contextExtractor]="contextExtractor"
          (nodeExpand)="onNodeExpand($event)"
          (nodeCollapse)="onNodeCollapse($event)"
          (nodeSelect)="onNodeSelect($event)"
          (nodeNotFoundInData)="onNodeNotFoundInData($event)"
          class="w-full overflow-auto"
        ></app-tree-panel>
      </div>
    </div>
  }

  <!-- Toggle Button - always visible -->
  <div
    class="vertical-toggle-panel flex h-full z-10 flex-col"
    [ngClass]="{ 'absolute right-0 inset-y-0': !treeCollapsed()() }"
  >
    <!-- Home Icon Button - positioned at top -->
    <button
      class="group flex items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded transition cursor-pointer border border-gray-300 shadow-sm my-4"
      (click)="onNavigateToSelectedClient()"
      [attr.aria-label]="'Navigate to selected client'"
      title="Go to selected client"
    >
      <span
        class="pi pi-home text-gray-700 group-hover:text-primary transition text-sm"
      ></span>
    </button>

    <!-- Spacer to push the toggle button to center -->
    <div class="flex-grow flex items-center justify-center">
      <!-- Tree Toggle Button - centered -->
      <button
        class="group flex flex-col items-center justify-center px-1 py-2 bg-gray-100 hover:bg-gray-200 rounded transition cursor-pointer border border-gray-300 shadow-sm"
        (click)="onToggleTreePanel()"
        [attr.aria-label]="
          treeCollapsed()()
            ? 'Expand company structure'
            : 'Collapse company structure'
        "
      >
        <span
          class="text-sm font-semibold text-gray-700 tracking-tight select-none vertical-toggle-button"
        >
          {{ toggleButtonText() }}
        </span>
        <span class="mt-2">
          <fa-icon
            [icon]="treeCollapsed()() ? faAngleRight : faAngleLeft"
            class="text-gray-500 group-hover:text-primary transition"
          ></fa-icon>
        </span>
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/admin-container/tree-navigation-panel/tree-navigation-panel.component.scss */\n.vertical-toggle-panel {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 2.5rem;\n  min-width: 2.5rem;\n  max-width: 2.5rem;\n  overflow: visible;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f4f6;\n  transition: all 0.3s;\n  z-index: 10;\n}\n.vertical-toggle-panel button {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--navigation-font-color);\n}\n.vertical-toggle-panel .fa-icon {\n  font-size: 1.125rem;\n}\n.vertical-toggle-button {\n  writing-mode: vertical-lr;\n  transform: rotate(180deg);\n  letter-spacing: 0.1em;\n}\n/*# sourceMappingURL=tree-navigation-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeNavigationPanelComponent, { className: "TreeNavigationPanelComponent", filePath: "src/app/features/administration/components/admin-container/tree-navigation-panel/tree-navigation-panel.component.ts", lineNumber: 38 });
})();

// src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts
var AssetMoveFormComponent = class _AssetMoveFormComponent {
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  utilityService = inject(UtilityService);
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  ownerId = null;
  assetId = null;
  formFields = [];
  clientsSearchResults = signal(void 0);
  searchSubject = new Subject();
  cdr = inject(ChangeDetectorRef);
  actions = [
    {
      label: "Cancel",
      action: () => this.onCancel(),
      severity: "secondary"
    },
    {
      label: "Ok",
      action: (formData) => {
        const value = __spreadProps(__spreadValues({}, formData.value), {
          destinationClientId: formData.value["destinationClientId"]?.id
        });
        this.onWizardComplete(value);
      },
      severity: "primary",
      disabled: (form) => {
        if (isNullOrUndefined(form))
          return true;
        return form.pristine || form.invalid;
      }
    }
  ];
  constructor() {
    effect(() => {
      const searchResults = this.clientsSearchResults();
      const field = this.formFields.find((f) => f.key === "destinationClientId");
      if (field?.props) {
        field.props = __spreadProps(__spreadValues({}, field.props), {
          suggestions: searchResults
        });
      }
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.assetId = this.dialogConfig.data.assetId ?? null;
    }
    this.formFields = [
      createAutocompleteField("destinationClientId", "Destination Client", [], this.clientsSearchResults(), this.searchClient.bind(this), {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "destinationClientId",
        props: {
          appendTo: "body",
          showClear: true,
          multiple: false,
          field: "name",
          completeOnFocus: false,
          typeahead: true,
          showEmptyMessage: true,
          emptyMessage: "No clients found"
        }
      }),
      createDropdownField("includeDevice", "Include Device", [
        {
          label: "Yes",
          value: true
        },
        {
          label: "No",
          value: false
        }
      ], true, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "includeDevice",
        props: {
          appendTo: "body"
        },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Include Device is required"
          }
        ]
      }),
      createDropdownField("includeSimCard", "Include Sim Card", [
        {
          label: "Yes",
          value: true
        },
        {
          label: "No",
          value: false
        }
      ], true, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "includeSimCard",
        props: {
          appendTo: "body"
        }
      })
    ];
    this.setUpClientsSearch();
  }
  setUpClientsSearch() {
    this.searchSubject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((searchTerm) => {
      const filters = {
        state: "active",
        name: `*${searchTerm}*`
      };
      const rqlFilter = this.utilityService.constructRqlFilter(filters);
      return this.accountsService.listClients(this.ownerId ?? "", 0, 10, "name", rqlFilter).pipe(catchError(() => {
        return of({ items: [] });
      }));
    })).subscribe({
      next: (data) => {
        if (isDefined(data) && hasProperty(data, "items")) {
          this.clientsSearchResults.set(isNullOrUndefined(data.items) ? [] : data.items);
        }
      },
      error: () => {
        this.clientsSearchResults.set([]);
      }
    });
  }
  searchClient(searchTerm) {
    this.clientsSearchResults.set(void 0);
    this.searchSubject.next(searchTerm);
  }
  onWizardComplete(context) {
    if (isNullOrUndefined(this.assetId)) {
      return;
    }
    this.entitiesService.moveAsset(this.assetId, context).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset",
          operation: "update",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: () => {
      }
    });
  }
  // Update cancel to close dialog with no result
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function AssetMoveFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetMoveFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetMoveFormComponent, selectors: [["app-asset-move-form"]], decls: 4, vars: 2, consts: [[1, "muted", "text-justify"], [1, "p-fluid", "mt-4"], [3, "fields", "actions"]], template: function AssetMoveFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1, "Select the destination client into which you'd like to move this asset. The asset will be copied to the new client and then deleted in this client.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-dynamic-form", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicFormComponent
  ], styles: ["\n\n.p-dialog-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetMoveFormComponent, [{
    type: Component,
    args: [{ selector: "app-asset-move-form", imports: [
      CommonModule,
      ReactiveFormsModule,
      ButtonModule,
      DynamicFormComponent
    ], template: `<span class="muted text-justify"
  >Select the destination client into which you'd like to move this asset. The
  asset will be copied to the new client and then deleted in this client.</span
>
<div class="p-fluid mt-4">
  <app-dynamic-form [fields]="formFields" [actions]="actions">
  </app-dynamic-form>
</div>
`, styles: ["/* src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.scss */\n.p-dialog-content {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=asset-move-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetMoveFormComponent, { className: "AssetMoveFormComponent", filePath: "src/app/features/administration/components/assets/asset-move-form/asset-move-form.component.ts", lineNumber: 51 });
})();

// src/app/features/administration/services/entity/entity-details-configuration.service.ts
var DetailsConfigurationService = class _DetailsConfigurationService {
  entityStateService = inject(EntityDetailsStateService);
  entitiesService = inject(EntitiesService);
  confirmationService = inject(ConfirmationService);
  broadcastService = inject(BroadcastEventMessageService);
  accountsService = inject(AccountsService);
  authDataService = inject(AuthDataService);
  dialogRef = null;
  dialogService = inject(DialogService);
  // Track which popover is active
  activePopover = new BehaviorSubject(null);
  // Registry of entity action handlers
  actionHandlers = {};
  // Registry of entity action providers
  actionProviders = {};
  // State options for different entity types
  stateOptions = {};
  constructor() {
    this.initializeDefaultHandlers();
  }
  /**
   * Initialize default operation handlers and state options
   */
  initializeDefaultHandlers() {
    this.initializeSimCardHandlers();
    this.initializeAssetHandlers();
    this.initializeAssetTagHandlers();
    this.initializeDeviceConfigProfileHandlers();
    this.initializeDeviceHandlers();
    this.initializeGeofenceHandlers();
    this.initializeIOTypeHandlers();
    this.initializeDeviceProviderHandlers();
    this.initializeSMSGatewayProviderHandlers();
    this.initializeOverspeedProfileHandlers();
    this.initializeUserRoleHandlers();
    this.initializeUserHandlers();
    this.initializeAlertHandlers();
    this.initializeCustomFieldHandlers();
    this.initializeGeofenceGroupsHandlers();
    this.initializeAssetGroupsHandlers();
    this.initializeCostCentreHandlers();
    this.initializeAssetCategoriesHandlers();
    this.initializeVendorClientHandlers();
    this.initializeDistributorVendorHandlers();
    this.initializeAssetRatingProfileHandlers();
    this.initializeSuperAdminDistributorHandlers();
    this.initializeAssetStateProfileHandlers();
    this.initializeCompanyGroupHandlers();
    this.initializeGeoLockProfileHandlers();
  }
  /**
   * Gets action icons for the currently selected entity
   */
  getActionIcons() {
    const entityType = this.entityStateService.getSelectedItemType();
    const entityId = this.entityStateService.getSelectedItemId();
    if (!entityType || !entityId) {
      return [];
    }
    const commonActions = [];
    const specificActions = this.getEntitySpecificActions(entityType, entityId);
    return [...commonActions, ...specificActions];
  }
  /**
   * Get entity-specific action icons
   */
  getEntitySpecificActions(entityType, entityId) {
    const provider = this.actionProviders[entityType];
    return isDefined(provider) ? provider(entityId) : [];
  }
  /**
   * Create a state change action
   */
  createStateChangeAction(tooltip = "Change State") {
    return {
      id: "changeState",
      icon: "pi pi-trash",
      tooltip,
      visible: true,
      showPopover: true,
      popoverType: "state",
      action: () => {
        this.togglePopover("changeState");
      }
    };
  }
  /**
   * Create a delete action
   */
  createDeleteAction(entityType, entityId, tooltip = "Delete") {
    return {
      id: "delete",
      icon: "pi pi-trash",
      tooltip,
      visible: true,
      action: () => {
        this.confirmDelete(entityType, entityId).subscribe();
      }
    };
  }
  /**
   * Create a view in tree action
   */
  createViewInTreeAction(tooltip) {
    return {
      id: "viewInTree",
      icon: "pi pi-sitemap",
      tooltip,
      visible: true,
      action: () => {
        const entity = this.entityStateService.selectedItem();
        if (entity) {
          this.broadcastService.broadcast("view-entity-in-tree", {
            entity
          });
        }
      }
    };
  }
  createAssetMoveAction(entityId) {
    return {
      id: "move",
      icon: "assets/sprites/sprite.svg#share-from-square-regular",
      tooltip: "Move Asset",
      visible: true,
      isSvg: true,
      action: () => {
        this.confirmAssetMove(entityId).subscribe();
      }
    };
  }
  confirmAssetMove(assetId) {
    this.dialogRef = this.dialogService.open(AssetMoveFormComponent, {
      header: "Move Asset",
      contentStyle: { overflow: "auto", " margin-top": "1rem" },
      baseZIndex: 1e4,
      position: "top",
      modal: true,
      width: "500px",
      data: {
        assetId,
        ownerId: this.authDataService.getUserProfile()?.owner.id
      }
    });
    return this.dialogRef.onClose;
  }
  /**
   * Create a custom field delete action (uses confirmation with special parameters)
   */
  createCustomFieldDeleteAction(entityId) {
    return {
      id: "delete",
      icon: "pi pi-trash",
      tooltip: "Delete Custom Field",
      visible: true,
      action: () => {
        this.confirmCustomFieldDelete(entityId).subscribe();
      }
    };
  }
  /**
   * Confirm and execute custom field deletion
   */
  confirmCustomFieldDelete(entityId) {
    const resultSubject = new Subject();
    const message = `Are you sure you want to delete this custom field?`;
    this.confirmationService.confirm({
      message,
      header: "Confirm Delete",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteCustomField(entityId).subscribe({
          next: (result) => {
            this.broadcastService.broadcast("entity-deleted", {
              entityType: "custom-field",
              operation: "delete",
              entityId,
              data: result
            });
            resultSubject.next(result);
          },
          error: (error) => resultSubject.error(error),
          complete: () => resultSubject.complete()
        });
      },
      reject: () => {
        resultSubject.complete();
      },
      acceptButtonProps: { label: "Delete" },
      rejectButtonProps: { label: "Cancel", severity: "secondary" }
    });
    return resultSubject.asObservable();
  }
  /**
   * Delete a custom field by removing it from the parent company's customFields array
   */
  deleteCustomField(entityId) {
    if (isNullOrUndefined(entityId)) {
      return throwError(() => new Error("Entity ID is required for custom field deletion."));
    }
    const [companyId, entityType, fieldId] = entityId.split(".");
    if (!companyId || !entityType || !fieldId) {
      return throwError(() => new Error("Invalid custom field entity ID format. Expected: companyId.entityType.fieldId"));
    }
    return this.accountsService.getCompany(companyId).pipe(switchMap((company) => {
      if (!company.customFields) {
        return throwError(() => new Error("Company has no custom fields to delete."));
      }
      const customFields = JSON.parse(JSON.stringify(company.customFields));
      const currentFields = customFields[entityType];
      if (!Array.isArray(currentFields) || currentFields.length === 0) {
        return throwError(() => new Error(`No custom fields found for entity type: ${entityType}`));
      }
      const filteredFields = currentFields.filter((field) => field.id !== fieldId);
      customFields[entityType] = filteredFields;
      switch (company.type) {
        case "client":
          return this.accountsService.updateClientDetails(companyId, {
            customFields
          });
        case "vendor":
          return this.accountsService.updateVendorDetails(companyId, {
            customFields
          });
        case "distributor":
          return this.accountsService.updateDistributorDetails(companyId, {
            customFields
          });
        default:
          return throwError(() => new Error(`Unsupported company type ('${company.type}') for custom field deletion.`));
      }
    }));
  }
  /**
   * Toggle popover visibility
   */
  togglePopover(id) {
    if (this.activePopover.value === id) {
      this.activePopover.next(null);
    } else {
      this.activePopover.next(id);
    }
  }
  /**
   * Update entity state
   */
  updateEntityState(entityType, entityId, state2) {
    this.activePopover.next(null);
    const resultSubject = new Subject();
    const message = `
    <div class="flex flex-col gap-2">
      <div>You are about to apply the following changes to 1 item:</div>
      <div class="p-2">
        <div class="flex items-center">
          <span class="font-medium capitalize">${state2}</span>
          <span class="mx-2">\u2192</span>
          <span>Change state to <span class="capitalize">'${state2}'</span></span>
        </div>
      </div>
      <div class="mt-2">Are you sure you want to continue?</div>
    </div>
  `;
    this.confirmationService.confirm({
      message,
      header: "Bulk Update",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.executeOperation(entityType, "updateState", entityId, {
          state: state2
        }).subscribe({
          next: (result) => resultSubject.next(result),
          error: (error) => resultSubject.error(error),
          complete: () => resultSubject.complete()
        });
      },
      reject: () => {
        resultSubject.complete();
      },
      acceptButtonProps: { label: "Apply" },
      rejectButtonProps: { label: "Cancel", severity: "secondary" }
    });
    return resultSubject.asObservable();
  }
  /**
   * Confirm and execute entity deletion
   */
  confirmDelete(entityType, entityId) {
    const resultSubject = new Subject();
    const message = `Are you sure you want to delete this ${entityType.replace(/-/g, " ")}?`;
    this.confirmationService.confirm({
      message,
      header: "Confirm Delete",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.executeOperation(entityType, "delete", entityId).subscribe({
          next: (result) => resultSubject.next(result),
          error: (error) => resultSubject.error(error),
          complete: () => resultSubject.complete()
        });
      },
      reject: () => {
        resultSubject.complete();
      },
      acceptButtonProps: { label: "Delete" },
      rejectButtonProps: { label: "Cancel", severity: "secondary" }
    });
    return resultSubject.asObservable();
  }
  /**
   * Execute an operation on an entity
   * @returns Observable of the operation result
   */
  executeOperation(entityType, operationType, entityId, params) {
    if (isNullOrUndefined(this.actionHandlers[entityType]?.[operationType])) {
      const errorMsg = `No handler found for operation ${operationType} on entity type ${entityType}`;
      return throwError(() => new Error(errorMsg));
    }
    const handler = this.actionHandlers[entityType][operationType];
    return handler(entityId, params || {}).pipe(tap((res) => {
      const eventType = operationType === "delete" ? "entity-deleted" : "entity-updated";
      this.broadcastService.broadcast(eventType, {
        entityType,
        operation: operationType,
        entityId,
        data: res
      });
    }), catchError((error) => {
      return throwError(() => error);
    }));
  }
  /**
   * Get state options for an entity type
   */
  getStateOptions(entityType) {
    return this.stateOptions[entityType] ?? [];
  }
  /**
   * Register a new operation handler
   */
  registerOperationHandler(entityType, operationType, handler) {
    if (isNullOrUndefined(this.actionHandlers[entityType])) {
      this.actionHandlers[entityType] = {};
    }
    this.actionHandlers[entityType][operationType] = handler;
  }
  /**
   * Register state options for an entity type
   */
  registerStateOptions(entityType, options) {
    this.stateOptions[entityType] = options;
  }
  /**
   * Register action provider for an entity type
   */
  registerActionProvider(entityType, provider) {
    this.actionProviders[entityType] = provider;
  }
  /**
   * Get SIM card state options directly from enum
   */
  getSimCardStateOptions() {
    return [
      { label: "Active", value: SimCardResponse.StateEnum.Active },
      { label: "Inactive", value: SimCardResponse.StateEnum.Inactive },
      { label: "Suspended", value: SimCardResponse.StateEnum.Suspended },
      { label: "Deleted", value: SimCardResponse.StateEnum.Deleted }
    ];
  }
  initializeSimCardHandlers() {
    this.registerOperationHandler("simcard", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateSimCard(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("simcards:create")) {
      this.registerActionProvider("simcard", () => [
        this.createStateChangeAction("Change SIM Card State")
      ]);
    }
    this.registerStateOptions("simcard", this.getSimCardStateOptions());
  }
  initializeAssetHandlers() {
    this.registerOperationHandler("asset", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateAsset(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("assets:create")) {
      this.registerActionProvider("asset", (assetId) => [
        this.createAssetMoveAction(assetId),
        this.createStateChangeAction("Change Asset State")
      ]);
    }
    this.registerStateOptions("asset", [
      { label: "Active", value: AssetResponse.StateEnum.Active },
      { label: "Inactive", value: AssetResponse.StateEnum.Inactive },
      { label: "Suspended", value: AssetResponse.StateEnum.Suspended },
      { label: "Deleted", value: AssetResponse.StateEnum.Deleted }
    ]);
  }
  initializeAssetTagHandlers() {
    this.registerOperationHandler("asset-tag", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateAssetTag(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("asset-tag", () => [
      this.createStateChangeAction("Change Asset Tags State")
    ]);
    this.registerStateOptions("asset-tag", [
      { label: "Active", value: AssetTagResponse.StateEnum.Active },
      { label: "Deleted", value: AssetTagResponse.StateEnum.Deleted }
    ]);
  }
  initializeDeviceConfigProfileHandlers() {
    this.registerOperationHandler("device-config-profile", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateDeviceConfigProfile(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("device-config-profile", () => [
      this.createStateChangeAction("Change Device Config Profile State")
    ]);
    this.registerStateOptions("device-config-profile", [
      { label: "Active", value: DeviceConfigProfileResponse.StateEnum.Active },
      {
        label: "Deleted",
        value: DeviceConfigProfileResponse.StateEnum.Deleted
      }
    ]);
  }
  initializeDeviceHandlers() {
    this.registerOperationHandler("device", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateDevice(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("devices:create")) {
      this.registerActionProvider("device", () => [
        this.createStateChangeAction("Change Device State")
      ]);
    }
    this.registerStateOptions("device", [
      { label: "Active", value: AssetResponse.StateEnum.Active },
      { label: "Inactive", value: AssetResponse.StateEnum.Inactive },
      { label: "Suspended", value: AssetResponse.StateEnum.Suspended },
      { label: "Deleted", value: AssetResponse.StateEnum.Deleted }
    ]);
  }
  initializeGeofenceHandlers() {
    this.registerOperationHandler("geofence", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateZone(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("zones:create")) {
      this.registerActionProvider("geofence", () => [
        this.createStateChangeAction("Change Geofence State")
      ]);
    }
    this.registerStateOptions("geofence", [
      { label: "Active", value: AssetResponse.StateEnum.Active },
      { label: "Inactive", value: AssetResponse.StateEnum.Inactive },
      { label: "Deleted", value: AssetResponse.StateEnum.Deleted }
    ]);
  }
  initializeIOTypeHandlers() {
    this.registerOperationHandler("io-type", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateIoType(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("io-type", () => [
      this.createStateChangeAction("Change IO Type State")
    ]);
    this.registerStateOptions("io-type", [
      { label: "Active", value: IoTypeResponse.StateEnum.Active },
      { label: "Deleted", value: IoTypeResponse.StateEnum.Deleted }
    ]);
  }
  initializeDeviceProviderHandlers() {
    this.registerOperationHandler("device-provider", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateDeviceProvider(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("device-provider", () => [
      this.createStateChangeAction("Change Device Provider State")
    ]);
    this.registerStateOptions("device-provider", [
      { label: "Active", value: DeviceProviderResponse.StateEnum.Active },
      { label: "Deleted", value: DeviceProviderResponse.StateEnum.Deleted },
      { label: "Suspended", value: DeviceProviderResponse.StateEnum.Suspended }
    ]);
  }
  initializeSMSGatewayProviderHandlers() {
    this.registerOperationHandler("sms-gateway-provider", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateSmsGatewayProvider(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("sms-gateway-providers:create")) {
      this.registerActionProvider("sms-gateway-provider", () => [
        this.createStateChangeAction("Change SMS Gateway Provider State")
      ]);
    }
    this.registerStateOptions("sms-gateway-provider", [
      { label: "Active", value: SmsGatewayProviderResponse.StateEnum.Active },
      { label: "Deleted", value: SmsGatewayProviderResponse.StateEnum.Deleted },
      {
        label: "Suspended",
        value: SmsGatewayProviderResponse.StateEnum.Suspended
      }
    ]);
  }
  initializeOverspeedProfileHandlers() {
    this.registerOperationHandler("overspeed-profile", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateOverspeedProfile(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("overspeed-profile", () => [
      this.createStateChangeAction("Change Overspeed Profile State")
    ]);
    this.registerStateOptions("overspeed-profile", [
      { label: "Active", value: OverspeedProfileResponse.StateEnum.Active },
      { label: "Deleted", value: OverspeedProfileResponse.StateEnum.Deleted }
    ]);
  }
  initializeUserRoleHandlers() {
    this.registerOperationHandler("user-role", "delete", (entityId) => {
      return this.accountsService.deleteUserRole(entityId);
    });
    if (this.authDataService.hasPermission("user-roles:create")) {
      this.registerActionProvider("user-role", (entityId) => [
        this.createDeleteAction("user-role", entityId, "Delete User Role")
      ]);
    }
  }
  initializeUserHandlers() {
    this.registerOperationHandler("user", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.accountsService.updateUser(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("users:create")) {
      this.registerActionProvider("user", () => [
        this.createStateChangeAction("Change User State")
      ]);
    }
    this.registerStateOptions("user", [
      { label: "Active", value: UserUpdateRequest.StateEnum.Active },
      { label: "Inactive", value: UserUpdateRequest.StateEnum.Inactive },
      { label: "Suspended", value: UserUpdateRequest.StateEnum.Suspended },
      { label: "Deleted", value: UserUpdateRequest.StateEnum.Deleted }
    ]);
  }
  initializeAlertHandlers() {
    this.registerOperationHandler("alert", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateAlert(entityId, {
        state: params.state
      });
    });
    if (this.authDataService.hasPermission("alerts:create")) {
      this.registerActionProvider("alert", () => [
        this.createStateChangeAction("Change Alert State")
      ]);
    }
    this.registerStateOptions("alert", [
      { label: "Active", value: AlertResponse.StateEnum.Active },
      { label: "Deleted", value: AlertResponse.StateEnum.Deleted }
    ]);
  }
  initializeCustomFieldHandlers() {
    this.registerOperationHandler("custom-field", "delete", (entityId, _params) => {
      return this.deleteCustomField(entityId);
    });
    this.registerActionProvider("custom-field", (entityId) => [
      this.createCustomFieldDeleteAction(entityId)
    ]);
  }
  initializeGeofenceGroupsHandlers() {
    this.registerOperationHandler("geofence-group", "delete", (entityId) => {
      return this.entitiesService.deleteZoneGroup(entityId);
    });
    this.registerActionProvider("geofence-group", (entityId) => [
      this.createDeleteAction("geofence-group", entityId, "Delete Geofence Group")
    ]);
  }
  initializeAssetGroupsHandlers() {
    this.registerOperationHandler("asset-group", "delete", (entityId) => {
      return this.entitiesService.deleteAssetGroup(entityId);
    });
    this.registerActionProvider("asset-group", (entityId) => [
      this.createDeleteAction("asset-group", entityId, "Delete Asset Group")
    ]);
  }
  initializeCostCentreHandlers() {
    this.registerOperationHandler("cost-centre", "delete", (entityId) => {
      return this.entitiesService.deleteCostCentre(entityId);
    });
    this.registerActionProvider("cost-centre", (entityId) => [
      this.createDeleteAction("cost-centre", entityId, "Delete Cost Centre")
    ]);
  }
  initializeAssetCategoriesHandlers() {
    this.registerOperationHandler("asset-category", "delete", (entityId) => {
      return this.entitiesService.deleteAssetCategory(entityId);
    });
    this.registerActionProvider("asset-category", (entityId) => [
      this.createDeleteAction("asset-category", entityId, "Delete Asset Category")
    ]);
  }
  initializeVendorClientHandlers() {
    this.registerOperationHandler("client", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.accountsService.updateClient(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("client", () => [
      this.createViewInTreeAction("View this client in the Navigation Tree"),
      this.createStateChangeAction("Change Client State")
    ]);
    this.registerStateOptions("client", [
      { label: "Active", value: ClientUpdateRequest.StateEnum.Active },
      { label: "Inactive", value: ClientUpdateRequest.StateEnum.Inactive },
      { label: "Suspended", value: ClientUpdateRequest.StateEnum.Suspended },
      { label: "Deleted", value: ClientUpdateRequest.StateEnum.Deleted }
    ]);
  }
  initializeDistributorVendorHandlers() {
    this.registerOperationHandler("vendor", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.accountsService.updateVendor(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("vendor", () => [
      this.createViewInTreeAction("View this vendor in the Navigation Tree"),
      this.createStateChangeAction("Change Vendor State")
    ]);
    this.registerStateOptions("vendor", [
      { label: "Active", value: VendorUpdateRequest.StateEnum.Active },
      { label: "Inactive", value: VendorUpdateRequest.StateEnum.Inactive },
      { label: "Suspended", value: VendorUpdateRequest.StateEnum.Suspended },
      { label: "Deleted", value: VendorUpdateRequest.StateEnum.Deleted }
    ]);
  }
  initializeAssetRatingProfileHandlers() {
    this.registerOperationHandler("asset-rating-profile", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateAssetRatingProfile(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("asset-rating-profile", () => [
      this.createStateChangeAction("Change Asset Rating Profile State")
    ]);
    this.registerStateOptions("asset-rating-profile", [
      { label: "Active", value: AssetRatingProfileResponse.StateEnum.Active },
      { label: "Deleted", value: AssetRatingProfileResponse.StateEnum.Deleted }
    ]);
  }
  initializeSuperAdminDistributorHandlers() {
    this.registerOperationHandler("distributor", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.accountsService.updateDistributor(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("distributor", () => [
      this.createViewInTreeAction("View this distributor in the Navigation Tree"),
      this.createStateChangeAction("Change Distributor State")
    ]);
    this.registerStateOptions("distributor", [
      { label: "Active", value: DistributorUpdateRequest.StateEnum.Active },
      { label: "Inactive", value: DistributorUpdateRequest.StateEnum.Inactive },
      {
        label: "Suspended",
        value: DistributorUpdateRequest.StateEnum.Suspended
      },
      { label: "Deleted", value: DistributorUpdateRequest.StateEnum.Deleted }
    ]);
  }
  initializeAssetStateProfileHandlers() {
    this.registerOperationHandler("asset-state-profile", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateAssetStateProfile(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("asset-state-profile", () => [
      this.createStateChangeAction("Change Asset State Profile State")
    ]);
    this.registerStateOptions("asset-state-profile", [
      { label: "Active", value: AssetStateProfileResponse.StateEnum.Active },
      { label: "Deleted", value: AssetStateProfileResponse.StateEnum.Deleted }
    ]);
  }
  initializeCompanyGroupHandlers() {
    this.registerOperationHandler("company-group", "delete", (entityId) => {
      return this.accountsService.deleteCompanyGroup(entityId);
    });
    this.registerActionProvider("company-group", (entityId) => [
      this.createDeleteAction("company-group", entityId, "Delete Company Group")
    ]);
  }
  initializeGeoLockProfileHandlers() {
    this.registerOperationHandler("geo-lock-profile", "updateState", (entityId, params) => {
      if (isNullOrUndefined(params.state)) {
        return throwError(() => new Error("State parameter is required"));
      }
      return this.entitiesService.updateGeoLockProfile(entityId, {
        state: params.state
      });
    });
    this.registerActionProvider("geo-lock-profile", () => [
      this.createStateChangeAction("Change Geo Lock Profile State")
    ]);
    this.registerStateOptions("geo-lock-profile", [
      { label: "Active", value: GeoLockProfileResponse.StateEnum.Active },
      { label: "Deleted", value: GeoLockProfileResponse.StateEnum.Deleted }
    ]);
  }
  static \u0275fac = function DetailsConfigurationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsConfigurationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DetailsConfigurationService, factory: _DetailsConfigurationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsConfigurationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/pipes/truncate.pipe.ts
var TruncatePipe = class _TruncatePipe {
  transform(value, ...args) {
    if (!value)
      return value;
    const limit = args[0] ? parseInt(args[0], 10) : 20;
    const trail = args[1] ? args[1] : "...";
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
  static \u0275fac = function TruncatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TruncatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "truncate", type: _TruncatePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TruncatePipe, [{
    type: Pipe,
    args: [{
      name: "truncate"
    }]
  }], null, null);
})();

// src/app/features/administration/components/details-panel/details-panel.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function DetailsPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
    \u0275\u0275elementStart(1, "h2", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "truncate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "box");
    \u0275\u0275advance();
    \u0275\u0275property("pTooltip", ctx_r0.detailsService.getSelectedItemTitle());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, ctx_r0.detailsService.getSelectedItemTitle(), "35"), " ");
  }
}
function DetailsPanelComponent_ng_template_4_Template(rf, ctx) {
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 16);
    \u0275\u0275listener("click", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_1_Template_svg_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const icon_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!icon_r4.disabled && ctx_r0.executeAction(icon_r4.action));
    })("keydown.enter", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_1_Template_svg_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r3);
      const icon_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!icon_r4.disabled && ctx_r0.executeAction(icon_r4.action));
    });
    \u0275\u0275element(2, "use");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275interpolate(icon_r4.tooltip));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", icon_r4.disabled)("pointer-events-none", icon_r4.disabled);
    \u0275\u0275attribute("aria-label", icon_r4.tooltip);
    \u0275\u0275advance();
    \u0275\u0275attribute("href", icon_r4.icon);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275listener("click", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const icon_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!icon_r4.disabled && ctx_r0.executeAction(icon_r4.action));
    })("keydown.enter", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_2_Template_span_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const icon_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!icon_r4.disabled && ctx_r0.executeAction(icon_r4.action));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("", icon_r4.icon, " action hover !text-xl cursor-pointer"));
    \u0275\u0275classProp("opacity-50", icon_r4.disabled);
    \u0275\u0275property("pTooltip", \u0275\u0275interpolate(icon_r4.tooltip));
    \u0275\u0275attribute("aria-label", icon_r4.tooltip);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 23);
    \u0275\u0275listener("click", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_For_5_Template_button_click_1_listener() {
      const state_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.updateState(state_r8.value));
    });
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_For_5_Conditional_4_Template, 1, 0, "span", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const state_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(state_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(state_r8.value === ctx_r0.currentState ? 4 : -1);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 19);
    \u0275\u0275text(2, "Change State To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 20);
    \u0275\u0275repeaterCreate(4, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_For_5_Template, 5, 2, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "button", 22);
    \u0275\u0275listener("click", function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.togglePopover("changeState"));
    });
    \u0275\u0275text(8, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.stateOptions);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Conditional_0_Template, 9, 0, "div", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.activePopover === "changeState" ? 0 : -1);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_1_Template, 3, 8, "div", 14)(2, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_2_Template, 1, 8, "span", 15);
    \u0275\u0275conditionalCreate(3, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const icon_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(icon_r4.isSvg ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(icon_r4.showPopover && icon_r4.popoverType === "state" && icon_r4.id === "changeState" ? 3 : -1);
  }
}
function DetailsPanelComponent_ng_template_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DetailsPanelComponent_ng_template_6_For_2_Conditional_0_Template, 4, 2, "div", 13);
  }
  if (rf & 2) {
    const icon_r4 = ctx.$implicit;
    \u0275\u0275conditional(icon_r4.visible ? 0 : -1);
  }
}
function DetailsPanelComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, DetailsPanelComponent_ng_template_6_For_2_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function DetailsPanelComponent_ng_template_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClosePanel());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.actionIcons);
  }
}
function DetailsPanelComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "p-progressSpinner", 26);
    \u0275\u0275elementEnd();
  }
}
function DetailsPanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngComponentOutlet", ctx_r0.detailsService.detailsComponent())("ngComponentOutletInputs", ctx_r0.detailsService.detailsInputs());
  }
}
function DetailsPanelComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", message_r9.message, \u0275\u0275sanitizeHtml);
  }
}
var DetailsPanelComponent = class _DetailsPanelComponent {
  detailsService = inject(EntityDetailsService);
  stateService = inject(EntityDetailsStateService);
  detailsConfigService = inject(DetailsConfigurationService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  activatedRoute = inject(ActivatedRoute);
  detailsFactory = inject(DetailsComponentFactory);
  closePanel = output();
  actionIcons = [];
  // Get currently active popover
  get activePopover() {
    return this.detailsConfigService.activePopover.value;
  }
  // Get state options for current entity
  get stateOptions() {
    const entityType = this.stateService.getSelectedItemType();
    return entityType ? this.detailsConfigService.getStateOptions(entityType) : [];
  }
  // Get current state of the entity
  get currentState() {
    const entity = this.stateService.selectedItem();
    return entity?.["state"] ?? "";
  }
  constructor() {
    effect(() => {
      this.stateService.selectedItem();
      this.updateActionIcons();
    });
  }
  ngOnInit() {
    this.updateActionIcons();
  }
  updateActionIcons() {
    this.actionIcons = this.detailsConfigService.getActionIcons();
  }
  executeAction(action) {
    action();
  }
  togglePopover(id) {
    this.detailsConfigService.togglePopover(id);
  }
  updateState(state2) {
    if (state2 === this.currentState) {
      this.togglePopover("changeState");
      return;
    }
    const routeEntityType = this.detailsFactory.getEntityTypeFromRoute(this.activatedRoute, "type");
    const entityType = this.stateService.getSelectedItemType() ?? routeEntityType;
    const entityId = this.stateService.getSelectedItemId();
    if (entityType && entityId) {
      this.detailsConfigService.updateEntityState(entityType, entityId, state2).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }
  onClosePanel() {
    this.detailsService.closeDetailsPanel();
    this.closePanel.emit();
  }
  static \u0275fac = function DetailsPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsPanelComponent, selectors: [["app-details-panel"]], outputs: { closePanel: "closePanel" }, decls: 14, vars: 2, consts: [["start", ""], ["center", ""], ["end", ""], ["message", ""], [1, "h-full", "flex", "flex-col", "overflow-hidden"], ["styleClass", "!rounded-none !border-x-0 h-header"], [1, "flex-1", "p-0", "overflow-auto"], [1, "flex", "flex-col", "justify-content-center", "items-center", "h-full"], [3, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "pi", "pi-box", "pr-2", "!text-xl"], [1, "font-semibold", "cursor-pointer", 3, "pTooltip"], [1, "flex", "row", "gap-2", "items-center"], ["pButton", "", "icon", "pi pi-times", "aria-label", "Close details panel", 1, "p-button-rounded", 3, "click"], [1, "relative"], ["tooltipPosition", "left", "appendTo", "body", 3, "pTooltip"], ["tooltipPosition", "left", "appendTo", "body", 3, "class", "opacity-50", "pTooltip"], [1, "custom-icon-svg", "w-[1.25rem]", "h-[1.25rem]", "cursor-pointer", "action", "hover", 3, "click", "keydown.enter"], ["tooltipPosition", "left", "appendTo", "body", 3, "click", "keydown.enter", "pTooltip"], [1, "state-popover", "absolute", "right-0", "top-8", "bg-white", "shadow-lg", "rounded-md", "p-2", "z-10", "w-48"], [1, "text-sm", "font-medium", "mb-2"], [1, "space-y-1"], [1, "border-t", "mt-2", "pt-2", "flex", "justify-end"], [1, "text-xs", 3, "click"], [1, "w-full", "text-left", "py-2", "px-2", "text-sm", "flex", "items-center", "hover:bg-emphasis", "cursor-pointer", 3, "click"], [1, "flex-1"], [1, "pi", "pi-check", "text-primary", "ml-2"], ["styleClass", "w-8 h-8"], [1, "py-2", "px-1"], [3, "innerHTML"]], template: function DetailsPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "p-toolbar", 5);
      \u0275\u0275template(2, DetailsPanelComponent_ng_template_2_Template, 4, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, DetailsPanelComponent_ng_template_4_Template, 0, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, DetailsPanelComponent_ng_template_6_Template, 4, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275conditionalCreate(9, DetailsPanelComponent_Conditional_9_Template, 2, 0, "div", 7);
      \u0275\u0275conditionalCreate(10, DetailsPanelComponent_Conditional_10_Template, 1, 2, "ng-container", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-confirmDialog");
      \u0275\u0275template(12, DetailsPanelComponent_ng_template_12_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.detailsService.isLoading() && !ctx.detailsService.isSoftRefreshing() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((!ctx.detailsService.isLoading() || ctx.detailsService.isSoftRefreshing()) && ctx.detailsService.detailsComponent() ? 10 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgComponentOutlet,
    ButtonModule,
    ButtonDirective,
    ProgressSpinnerModule,
    ProgressSpinner,
    CardModule,
    RouterModule,
    ToolbarModule,
    Toolbar,
    TooltipModule,
    Tooltip,
    ConfirmDialogModule,
    ConfirmDialog,
    TruncatePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n  .p-component-outlet {\n  height: 100%;\n}\n  .p-component-outlet > * {\n  height: 100%;\n  display: block;\n}\n  .state-popover {\n  background: var(--input-background-color);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hover[_ngcontent-%COMP%]:hover {\n  opacity: 1 !important;\n  color: var(--color-primary-color);\n}\n/*# sourceMappingURL=details-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsPanelComponent, [{
    type: Component,
    args: [{ selector: "app-details-panel", imports: [
      CommonModule,
      ButtonModule,
      ProgressSpinnerModule,
      CardModule,
      RouterModule,
      ToolbarModule,
      TooltipModule,
      ConfirmDialogModule,
      TruncatePipe
    ], template: `<div class="h-full flex flex-col overflow-hidden">
  <p-toolbar styleClass="!rounded-none !border-x-0 h-header">
    <ng-template #start>
      <span class="pi pi-box pr-2 !text-xl" [attr.aria-label]="'box'"></span>
      <h2
        class="font-semibold cursor-pointer"
        [pTooltip]="detailsService.getSelectedItemTitle()"
      >
        {{ detailsService.getSelectedItemTitle() | truncate: '35' }}
      </h2>
    </ng-template>
    <ng-template #center> </ng-template>
    <ng-template #end>
      <div class="flex row gap-2 items-center">
        <!-- Dynamic action icons -->
        @for (icon of actionIcons; track icon.id) {
          @if (icon.visible) {
            <div class="relative">
              <!-- SVG icon -->
              @if (icon.isSvg) {
                <div
                  pTooltip="{{ icon.tooltip }}"
                  tooltipPosition="left"
                  appendTo="body"
                >
                  <svg
                    class="custom-icon-svg w-[1.25rem] h-[1.25rem] cursor-pointer action hover"
                    [class.opacity-50]="icon.disabled"
                    [class.pointer-events-none]="icon.disabled"
                    [attr.aria-label]="icon.tooltip"
                    (click)="!icon.disabled && executeAction(icon.action)"
                    (keydown.enter)="
                      !icon.disabled && executeAction(icon.action)
                    "
                  >
                    <use [attr.href]="icon.icon"></use>
                  </svg>
                </div>
              }
              <!-- PrimeNG icon -->
              @else {
                <span
                  class="{{ icon.icon }} action hover !text-xl cursor-pointer"
                  [class.opacity-50]="icon.disabled"
                  [attr.aria-label]="icon.tooltip"
                  pTooltip="{{ icon.tooltip }}"
                  tooltipPosition="left"
                  appendTo="body"
                  (click)="!icon.disabled && executeAction(icon.action)"
                  (keydown.enter)="!icon.disabled && executeAction(icon.action)"
                ></span>
              }

              <!-- State Popover -->
              @if (
                icon.showPopover &&
                icon.popoverType === 'state' &&
                icon.id === 'changeState'
              ) {
                @if (activePopover === 'changeState') {
                  <div
                    class="state-popover absolute right-0 top-8 bg-white shadow-lg rounded-md p-2 z-10 w-48"
                  >
                    <h3 class="text-sm font-medium mb-2">Change State To</h3>
                    <ul class="space-y-1">
                      @for (state of stateOptions; track state.value) {
                        <li>
                          <button
                            class="w-full text-left py-2 px-2 text-sm flex items-center hover:bg-emphasis cursor-pointer"
                            (click)="updateState(state.value)"
                          >
                            <span class="flex-1">{{ state.label }}</span>
                            @if (state.value === currentState) {
                              <span
                                class="pi pi-check text-primary ml-2"
                              ></span>
                            }
                          </button>
                        </li>
                      }
                    </ul>
                    <div class="border-t mt-2 pt-2 flex justify-end">
                      <button
                        class="text-xs"
                        (click)="togglePopover('changeState')"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                }
              }
            </div>
          }
        }
        <!-- Close button (always present) -->
        <button
          pButton
          icon="pi pi-times"
          class="p-button-rounded"
          (click)="onClosePanel()"
          aria-label="Close details panel"
        ></button>
      </div>
    </ng-template>
  </p-toolbar>
  <div class="flex-1 p-0 overflow-auto">
    @if (detailsService.isLoading() && !detailsService.isSoftRefreshing()) {
      <div class="flex flex-col justify-content-center items-center h-full">
        <p-progressSpinner styleClass="w-8 h-8"></p-progressSpinner>
      </div>
    }
    @if (
      (!detailsService.isLoading() || detailsService.isSoftRefreshing()) &&
      detailsService.detailsComponent()
    ) {
      <ng-container
        [ngComponentOutlet]="detailsService.detailsComponent()!"
        [ngComponentOutletInputs]="detailsService.detailsInputs()"
      >
      </ng-container>
    }
  </div>
</div>

<!-- Confirmation dialog -->
<p-confirmDialog>
  <ng-template #message let-message>
    <div class="py-2 px-1">
      <div [innerHTML]="message.message"></div>
    </div>
  </ng-template>
</p-confirmDialog>
`, styles: ["/* src/app/features/administration/components/details-panel/details-panel.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.flex-1 {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n::ng-deep .p-component-outlet {\n  height: 100%;\n}\n::ng-deep .p-component-outlet > * {\n  height: 100%;\n  display: block;\n}\n::ng-deep .state-popover {\n  background: var(--input-background-color);\n  animation: fadeIn 0.2s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hover:hover {\n  opacity: 1 !important;\n  color: var(--color-primary-color);\n}\n/*# sourceMappingURL=details-panel.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsPanelComponent, { className: "DetailsPanelComponent", filePath: "src/app/features/administration/components/details-panel/details-panel.component.ts", lineNumber: 44 });
})();

// src/app/features/administration/components/admin-container/admin-main-content/admin-main-content.component.ts
var _c05 = (a0, a1, a2, a3) => ({ content: a0, scrollable: a1, minSize: a2, maxSize: a3 });
var _c14 = (a0, a1, a2) => ({ content: a0, scrollable: true, minSize: a1, maxSize: a2 });
var _c22 = (a0, a1) => [a0, a1];
var _c32 = () => [65, 35];
var _c4 = () => [100, 0];
var _c5 = () => [20, 20];
function AdminMainContentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "router-outlet", 4);
    \u0275\u0275listener("activate", function AdminMainContentComponent_ng_template_1_Template_router_outlet_activate_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRouterOutletActivate($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function AdminMainContentComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-details-panel", 6);
    \u0275\u0275listener("close", function AdminMainContentComponent_ng_template_3_Conditional_0_Template_app_details_panel_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.detailsService.closeDetailsPanel());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminMainContentComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminMainContentComponent_ng_template_3_Conditional_0_Template, 1, 0, "app-details-panel", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.detailsService.showPanel() ? 0 : -1);
  }
}
var AdminMainContentComponent = class _AdminMainContentComponent {
  detailsService = inject(EntityDetailsService);
  // Input properties
  nestedContentScrollable = input.required();
  detailsPanelClass = input.required();
  // Output events
  routerOutletActivate = output();
  /**
   * Handles router outlet activation
   */
  onRouterOutletActivate(component) {
    this.routerOutletActivate.emit(component);
  }
  static \u0275fac = function AdminMainContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminMainContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMainContentComponent, selectors: [["app-admin-main-content"]], inputs: { nestedContentScrollable: [1, "nestedContentScrollable"], detailsPanelClass: [1, "detailsPanelClass"] }, outputs: { routerOutletActivate: "routerOutletActivate" }, decls: 5, vars: 22, consts: [["nestedContent", ""], ["detailsContent", ""], ["stateKey", "details-layout", 1, "h-full", "w-full", "overflow-hidden", 3, "ngClass", "panels", "panelSizes", "minSizes", "defaultLayout", "responsive"], [1, "h-full", "w-full", "flex", "flex-col"], [3, "activate"], [1, "h-full", "flex", "flex-col"], [1, "h-full", "flex", "flex-col", 3, "close"]], template: function AdminMainContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-adaptive-layout", 2);
      \u0275\u0275template(1, AdminMainContentComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AdminMainContentComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const nestedContent_r4 = \u0275\u0275reference(2);
      const detailsContent_r5 = \u0275\u0275reference(4);
      \u0275\u0275property("ngClass", ctx.detailsPanelClass()())("panels", \u0275\u0275pureFunction2(15, _c22, \u0275\u0275pureFunction4(6, _c05, nestedContent_r4, ctx.nestedContentScrollable()(), ctx.detailsService.showPanel() ? 20 : 100, ctx.detailsService.showPanel() ? 80 : 100), \u0275\u0275pureFunction3(11, _c14, detailsContent_r5, ctx.detailsService.showPanel() ? 20 : 0, ctx.detailsService.showPanel() ? 80 : 0)))("panelSizes", ctx.detailsService.showPanel() ? \u0275\u0275pureFunction0(18, _c32) : \u0275\u0275pureFunction0(19, _c4))("minSizes", ctx.detailsService.showPanel() ? \u0275\u0275pureFunction0(20, _c5) : \u0275\u0275pureFunction0(21, _c4))("defaultLayout", "horizontal")("responsive", true);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    RouterOutlet,
    AdaptiveLayoutComponent,
    DetailsPanelComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=admin-main-content.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMainContentComponent, [{
    type: Component,
    args: [{ selector: "app-admin-main-content", standalone: true, imports: [
      CommonModule,
      RouterModule,
      AdaptiveLayoutComponent,
      DetailsPanelComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-adaptive-layout
  [ngClass]="detailsPanelClass()()"
  [panels]="[
    {
      content: nestedContent,
      scrollable: nestedContentScrollable()(),
      minSize: detailsService.showPanel() ? 20 : 100,
      maxSize: detailsService.showPanel() ? 80 : 100,
    },
    {
      content: detailsContent,
      scrollable: true,
      minSize: detailsService.showPanel() ? 20 : 0,
      maxSize: detailsService.showPanel() ? 80 : 0,
    },
  ]"
  [panelSizes]="detailsService.showPanel() ? [65, 35] : [100, 0]"
  [minSizes]="detailsService.showPanel() ? [20, 20] : [100, 0]"
  [defaultLayout]="'horizontal'"
  [responsive]="true"
  stateKey="details-layout"
  class="h-full w-full overflow-hidden"
>
  <!-- Nested router outlet template - always present -->
  <ng-template #nestedContent>
    <div class="h-full w-full flex flex-col">
      <router-outlet
        (activate)="onRouterOutletActivate($event)"
      ></router-outlet>
    </div>
  </ng-template>

  <!-- Details panel template - conditionally rendered -->
  <ng-template #detailsContent>
    @if (detailsService.showPanel()) {
      <app-details-panel
        (close)="detailsService.closeDetailsPanel()"
        class="h-full flex flex-col"
      ></app-details-panel>
    }
  </ng-template>
</app-adaptive-layout>
`, styles: ["/* src/app/features/administration/components/admin-container/admin-main-content/admin-main-content.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=admin-main-content.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMainContentComponent, { className: "AdminMainContentComponent", filePath: "src/app/features/administration/components/admin-container/admin-main-content/admin-main-content.component.ts", lineNumber: 28 });
})();

// src/app/features/administration/services/admin-container-state.service.ts
var AdminContainerStateService = class _AdminContainerStateService {
  localStorage = inject(LocalStorageService);
  // Container-specific state signals
  treeCollapsed = signal(true);
  nestedContentScrollable = signal(false);
  scrollToNodeKey = signal(null);
  suppressScrollToClient = signal(false);
  scrollToCenterNodeKey = signal(null);
  // UI state
  selectedItem = signal(null);
  detailsLoading = signal(false);
  hasMoreData = signal(false);
  loadingMore = signal(false);
  constructor() {
    const storedTreeState = this.localStorage.getItem("admin-tree-collapsed");
    if (storedTreeState !== null) {
      this.treeCollapsed.set(storedTreeState);
    }
  }
  /**
   * Toggles the tree panel state and persists to local storage
   */
  toggleTreePanel() {
    const newState = !this.treeCollapsed();
    this.treeCollapsed.set(newState);
    this.localStorage.setItem("admin-tree-collapsed", newState);
  }
  /**
   * Sets the nested content scrollable state
   */
  setNestedContentScrollable(scrollable) {
    if (this.nestedContentScrollable() !== scrollable) {
      this.nestedContentScrollable.set(scrollable);
    }
  }
  /**
   * Scrolls the tree to center on the specified client node
   * @param clientId The ID of the client to scroll to
   */
  scrollToClient(clientId) {
    if (this.suppressScrollToClient()) {
      return;
    }
    if (this.scrollToNodeKey() === clientId) {
      return;
    }
    this.scrollToNodeKey.set(null);
    setTimeout(() => {
      if (!this.suppressScrollToClient()) {
        this.scrollToNodeKey.set(clientId);
        setTimeout(() => {
          if (this.scrollToNodeKey() === clientId) {
            this.scrollToNodeKey.set(null);
          }
        }, 200);
      }
    }, 100);
  }
  /**
   * Temporarily suppresses automatic scrolling to selected client during user interactions
   * @param durationMs Duration in milliseconds to suppress scrolling (default: 2000ms)
   */
  temporarilySuppressScrollToClient(durationMs = 2e3) {
    this.suppressScrollToClient.set(true);
    if (durationMs === 0) {
      return;
    }
    setTimeout(() => this.suppressScrollToClient.set(false), durationMs);
  }
  /**
   * Resets all state to initial values
   */
  reset() {
    this.selectedItem.set(null);
    this.detailsLoading.set(false);
    this.hasMoreData.set(false);
    this.loadingMore.set(false);
    this.scrollToNodeKey.set(null);
    this.suppressScrollToClient.set(false);
  }
  static \u0275fac = function AdminContainerStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContainerStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminContainerStateService, factory: _AdminContainerStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminContainerStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/administration/services/admin-route-handler.service.ts
var AdminRouteHandlerService = class _AdminRouteHandlerService {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  adminDataService = inject(AdminDataService);
  containerState = inject(AdminContainerStateService);
  detailsService = inject(EntityDetailsService);
  clientDataService = inject(ClientDataService);
  destroyRef = inject(DestroyRef);
  /**
   * Initializes route handling and sets up navigation event subscriptions
   */
  initializeRouteHandling(callbacks) {
    this.handleInitialClientNavigation();
    this.loadInitialDataAndSetup(callbacks);
    this.setupNavigationEventHandling(callbacks);
    this.setupScrollableStateHandling();
  }
  /**
   * Handles initial client navigation if no route path is present
   */
  handleInitialClientNavigation() {
    const selectedClient = this.clientDataService.getSelectedClient();
    const currentUrl = this.router.url;
    const isAtBaseAdminRoute = currentUrl === "/admin" || currentUrl.startsWith("/admin?");
    if (isDefined(selectedClient) && hasProperty(selectedClient, "id") && isString(selectedClient.id) && isAtBaseAdminRoute) {
      this.router.navigate(["/admin", "client", selectedClient.id]).catch((err) => console.error("Failed to navigate to default client:", err));
    }
  }
  /**
   * Loads initial data and performs setup
   */
  loadInitialDataAndSetup(callbacks) {
    const { keyToSelect, typeToSelect } = this.getEntityInfoFromRoute();
    const routeClientId = typeToSelect === ADMIN_TREE.NODE_TYPES.CLIENT && isDefined(keyToSelect) ? keyToSelect : void 0;
    this.adminDataService.loadInitialData(routeClientId).then(() => {
      callbacks.ensureSuperAdminNodeExpansion();
      callbacks.selectNodeFromRouteOrState();
      callbacks.onChangeDetection();
    }).catch(() => {
      callbacks.selectNodeFromRouteOrState();
      callbacks.onChangeDetection();
    });
  }
  /**
   * Sets up navigation event handling for details panel query params and route synchronization
   */
  setupNavigationEventHandling(callbacks) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.handleDetailsQueryParams();
      callbacks.selectNodeFromRouteOrState();
    });
  }
  /**
   * Handles details panel query parameters
   */
  handleDetailsQueryParams() {
    const currentQueryParams = this.activatedRoute.snapshot.queryParams;
    const hasDetailsParams = isDefined(currentQueryParams["details"]) && isDefined(currentQueryParams["type"]);
    if (this.detailsService.showPanel() && !hasDetailsParams) {
      const item = this.detailsService.selectedItem();
      if (isDefined(item) && hasProperty(item, "id") && hasProperty(item, "type")) {
        const baseUrl = this.router.url.split("?")[0];
        this.router.navigate([baseUrl], {
          queryParams: { details: item["id"], type: item["type"] ?? "" },
          queryParamsHandling: "merge",
          replaceUrl: true
        }).catch(() => {
        });
      }
    }
  }
  /**
   * Sets up handling for nested content scrollable state based on route data
   */
  setupScrollableStateHandling() {
    const getScrollableState = (route) => {
      let currentRoute = route;
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
      const routeData = currentRoute.snapshot.data;
      if (isDefined(routeData) && typeof routeData["nestedContentScrollable"] === "boolean") {
        return routeData["nestedContentScrollable"];
      }
      return false;
    };
    this.containerState.setNestedContentScrollable(getScrollableState(this.activatedRoute));
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => getScrollableState(this.activatedRoute)),
      // Reuse the logic
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((scrollableValue) => {
      this.containerState.setNestedContentScrollable(scrollableValue);
    });
  }
  /**
   * Gets entity information from route parameters
   */
  getEntityInfoFromRoute() {
    const routeResult = this.extractFromRouteTree();
    if (isDefined(routeResult.keyToSelect) && isDefined(routeResult.typeToSelect)) {
      return routeResult;
    }
    return this.extractFromUrl();
  }
  /**
   * Extracts entity info by traversing the route tree
   */
  extractFromRouteTree() {
    let currentRoute = this.activatedRoute;
    let keyToSelect = null;
    let typeToSelect = null;
    while (currentRoute !== null) {
      const snapshot = currentRoute.snapshot;
      if (snapshot.url.length > 0) {
        const entityTypePath = snapshot.url[0]?.path;
        if (entityTypePath) {
          const entityId = snapshot.params[`${entityTypePath}Id`] ?? snapshot.params["id"] ?? (snapshot.url.length > 1 ? snapshot.url[1]?.path : null);
          typeToSelect = this.getEntityTypeFromPath(entityTypePath);
          if (isDefined(entityId) && isDefined(typeToSelect)) {
            keyToSelect = entityId;
            break;
          }
        }
      }
      currentRoute = currentRoute.firstChild;
    }
    return { keyToSelect, typeToSelect };
  }
  /**
   * Extracts entity info by parsing the URL directly
   */
  extractFromUrl() {
    let keyToSelect = null;
    let typeToSelect = null;
    const adminRoutePattern = /\/admin\/(client|vendor|distributor|group)\/([^/?]+)/;
    const urlMatch = adminRoutePattern.exec(this.router.url);
    if (urlMatch) {
      const [, pathType, entityId] = urlMatch;
      typeToSelect = this.getEntityTypeFromPath(pathType);
      keyToSelect = entityId;
    }
    return { keyToSelect, typeToSelect };
  }
  /**
   * Maps URL path to entity type
   */
  getEntityTypeFromPath(path) {
    switch (path) {
      case ADMIN_TREE.NODE_TYPES.CLIENT:
      case "client":
        return ADMIN_TREE.NODE_TYPES.CLIENT;
      case ADMIN_TREE.NODE_TYPES.VENDOR:
      case "vendor":
        return ADMIN_TREE.NODE_TYPES.VENDOR;
      case ADMIN_TREE.NODE_TYPES.DISTRIBUTOR:
      case "distributor":
        return ADMIN_TREE.NODE_TYPES.DISTRIBUTOR;
      case ADMIN_TREE.NODE_TYPES.GROUP:
      case "group":
        return ADMIN_TREE.NODE_TYPES.GROUP;
      default:
        return null;
    }
  }
  static \u0275fac = function AdminRouteHandlerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRouteHandlerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminRouteHandlerService, factory: _AdminRouteHandlerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRouteHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-scroll-management.service.ts
var AdminScrollManagementService = class _AdminScrollManagementService {
  adminState = inject(AdminStateService);
  adminDataService = inject(AdminDataService);
  containerState = inject(AdminContainerStateService);
  treeManagementService = inject(AdminTreeManagementService);
  destroyRef = inject(DestroyRef);
  // Track if the service has been initialized
  initialized = false;
  // Dependencies for scroll effects
  selectedTreeNode;
  setSelectedTreeNode;
  findNodeRecursively;
  /**
   * Initializes the scroll management service with required dependencies
   */
  initialize(dependencies) {
    if (this.initialized) {
      return;
    }
    this.selectedTreeNode = dependencies.selectedTreeNode;
    this.setSelectedTreeNode = dependencies.setSelectedTreeNode;
    this.findNodeRecursively = dependencies.findNodeRecursively;
    this.setupScrollEffects();
    this.initialized = true;
  }
  /**
   * Sets up the reactive effects for scroll management
   */
  setupScrollEffects() {
    effect(() => {
      const currentSelectedClient = this.adminState.selectedClient();
      const currentTreeNode = this.selectedTreeNode();
      const suppressScroll = this.containerState.suppressScrollToClient();
      if (currentSelectedClient && (currentTreeNode?.key !== currentSelectedClient.id || currentTreeNode?.data?.type !== ADMIN_TREE.NODE_TYPES.CLIENT)) {
        const treeNodes = this.treeManagementService.hierarchyTree();
        if (treeNodes.length > 0) {
          const nodeToSelect = this.findNodeRecursively(treeNodes, currentSelectedClient.id, ADMIN_TREE.NODE_TYPES.CLIENT);
          if (nodeToSelect) {
            this.setSelectedTreeNode(nodeToSelect);
            this.adminDataService.selectNode(nodeToSelect);
            if (!suppressScroll) {
              this.scrollToClient(currentSelectedClient.id);
            }
          } else {
            console.warn(`Client ${currentSelectedClient.id} not found in loaded tree data. Skipping scroll to prevent infinite loop.`);
          }
        }
      }
    });
    effect(() => {
      const treeNodes = this.treeManagementService.hierarchyTree();
      const selectedClient = this.adminState.selectedClient();
      const currentTreeNode = this.selectedTreeNode();
      const suppressScroll = this.containerState.suppressScrollToClient();
      if (treeNodes.length > 0 && selectedClient && currentTreeNode?.key === selectedClient.id && !this.containerState.treeCollapsed() && !suppressScroll) {
        const nodeExists = this.findNodeRecursively(treeNodes, selectedClient.id, ADMIN_TREE.NODE_TYPES.CLIENT);
        if (nodeExists) {
          setTimeout(() => {
            if (!this.containerState.suppressScrollToClient()) {
              this.scrollToClient(selectedClient.id);
            }
          }, 200);
        } else {
          console.warn(`Client ${selectedClient.id} not found in tree data during initial scroll. Skipping scroll.`);
        }
      }
    });
  }
  /**
   * Scrolls the tree to center on the specified client node
   * @param clientId The ID of the client to scroll to
   */
  scrollToClient(clientId) {
    this.containerState.scrollToClient(clientId);
  }
  /**
   * Scrolls to center a specific node (for expansion visibility)
   * This is different from scrollToClient which is for selection
   */
  scrollToCenterNode(nodeKey) {
    this.containerState.scrollToCenterNodeKey.set(nodeKey);
    setTimeout(() => this.containerState.scrollToCenterNodeKey.set(null), 200);
  }
  /**
   * Temporarily suppresses automatic scrolling to selected client during user interactions
   * @param durationMs Duration in milliseconds to suppress scrolling (default: 2000ms)
   */
  temporarilySuppressScrollToClient(durationMs = 2e3) {
    this.containerState.temporarilySuppressScrollToClient(durationMs);
  }
  /**
   * Handles scroll behavior for search result navigation
   * @param entityId The ID of the entity to scroll to
   */
  handleSearchResultScroll(entityId) {
    this.scrollToClient(entityId);
  }
  /**
   * Handles scroll behavior for node selection with optional delay
   * @param nodeKey The key of the node to scroll to
   * @param delay Optional delay in milliseconds
   */
  handleNodeSelectionScroll(nodeKey, delay = 200) {
    if (!this.containerState.treeCollapsed()) {
      setTimeout(() => {
        this.scrollToClient(nodeKey);
      }, delay);
    }
  }
  /**
   * Handles scroll behavior for client navigation with delay
   * @param clientId The ID of the client to scroll to
   * @param delay Delay in milliseconds (default: 300ms)
   */
  handleClientNavigationScroll(clientId, delay = 300) {
    setTimeout(() => {
      this.scrollToClient(clientId);
    }, delay);
  }
  static \u0275fac = function AdminScrollManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminScrollManagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminScrollManagementService, factory: _AdminScrollManagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminScrollManagementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/services/admin-tree-refresh.service.ts
var AdminTreeRefreshService = class _AdminTreeRefreshService {
  adminState = inject(AdminStateService);
  adminTreeService = inject(AdminTreeService);
  broadcastService = inject(BroadcastEventMessageService);
  /**
   * Initializes the service by setting up event listeners for tree refresh operations
   */
  initialize() {
    this.broadcastService.on("tree-refresh-required").subscribe((message) => {
      this.handleTreeRefreshRequired(message);
    });
    this.broadcastService.on("vendor-filter-changed").subscribe((message) => {
      this.handleVendorFilterChange(message);
    });
  }
  /**
   * Handles refreshing vendor data in the tree based on state changes
   * @param vendorId - The ID of the vendor that changed
   * @param distributorId - The ID of the parent distributor
   * @param includeDeleted - Whether to include deleted vendors (for filtering)
   */
  async refreshVendorData(vendorId, distributorId, includeDeleted = false) {
    if (!this.adminState.isDistributorExpanded(distributorId)) {
      return Promise.resolve();
    }
    try {
      const filter2 = includeDeleted ? void 0 : "state!=deleted";
      const vendors = await this.adminTreeService.listDistributorVendors(distributorId, filter2);
      this.adminState.setDistributorVendors(distributorId, vendors);
    } catch (error) {
      console.error("Error refreshing vendor data:", error);
      throw error;
    }
  }
  /**
   * Handles refreshing distributor data under super-admin
   */
  async refreshDistributorData() {
    try {
      const superAdminExpandedNodes = this.adminState.expandedNodes()["super-admin"];
      const superAdminExpanded = superAdminExpandedNodes?.has?.("super-admin-root");
      if (superAdminExpanded) {
        const distributors = await this.adminTreeService.listDistributors(DEFAULT_SYSTEM_ID);
        this.adminState.setDistributors(distributors);
      }
    } catch (error) {
      console.error("Error refreshing distributor data:", error);
      throw error;
    }
  }
  /**
   * Handles refreshing client data for a specific vendor
   * @param vendorId - The ID of the vendor whose clients should be refreshed
   * @param distributorId - The ID of the parent distributor
   * @param operation - The operation that triggered the refresh (affects strategy)
   */
  async refreshClientData(vendorId, distributorId, operation = "update") {
    try {
      const isVendorExpanded = this.adminState.isDistributorNodeExpanded(distributorId, vendorId);
      if (!isVendorExpanded) {
        return;
      }
      const currentClients = this.adminState.getDistributorVendorClients?.(distributorId, vendorId);
      const strategy = this.determineClientRefreshStrategy(operation, currentClients, null);
      switch (strategy) {
        case "full-replace":
          await this.fullClientReplace(vendorId, distributorId);
          break;
        case "smart-update":
          await this.smartClientUpdate(vendorId, distributorId, operation);
          break;
        case "paginated-refresh":
          await this.paginatedClientRefresh(vendorId, distributorId, null);
          break;
        default:
          console.warn("Unknown refresh strategy:", strategy);
          await this.fullClientReplace(vendorId, distributorId);
      }
    } catch (error) {
      console.error("Error refreshing client data:", error);
      throw error;
    }
  }
  /**
   * Determines the best refresh strategy based on current state and operation
   */
  determineClientRefreshStrategy(operation, currentClients, _paginationInfo) {
    if (currentClients === void 0 || currentClients === null || Array.isArray(currentClients) && currentClients.length === 0) {
      return "full-replace";
    }
    switch (operation) {
      case "delete":
        return "full-replace";
      case "create":
        return "full-replace";
      case "update":
        return "smart-update";
      default:
        return "full-replace";
    }
  }
  /**
   * Full replace strategy - replaces all client data with fresh first page
   */
  async fullClientReplace(vendorId, distributorId) {
    const result = await this.adminTreeService.listVendorClients(vendorId);
    this.adminState.addDistributorVendorClients(distributorId, vendorId, result.clients, {
      offset: 0,
      limit: DEFAULT_LIST_SIZE,
      total: result.total,
      hasMore: result.hasMore
    }, false);
  }
  /**
   * Smart update strategy - handles specific operations without losing pagination
   */
  async smartClientUpdate(vendorId, distributorId, _operation) {
    await this.fullClientReplace(vendorId, distributorId);
  }
  /**
   * Paginated refresh strategy - refreshes all currently loaded pages
   */
  async paginatedClientRefresh(vendorId, distributorId, _currentPaginationInfo) {
    await this.fullClientReplace(vendorId, distributorId);
  }
  /**
   * Handles tree refresh requirements after entity operations
   */
  handleTreeRefreshRequired(message) {
    if (!isDefined(message) || message === null || typeof message !== "object" || !("entityType" in message) || !("operation" in message)) {
      return;
    }
    const m = message;
    switch (m.entityType) {
      case "vendor":
        this.handleVendorRefresh(m);
        break;
      case "distributor":
        this.handleDistributorRefresh(m);
        break;
      case "client":
        this.handleClientRefresh(m);
        break;
      default:
        console.warn("Unhandled entity type for tree refresh:", m.entityType);
    }
  }
  /**
   * Handles vendor-specific refresh logic
   */
  handleVendorRefresh(message) {
    const distributorId = message.distributorId ?? this.adminState.vendorDistributor()?.id;
    if (isDefined(distributorId)) {
      const includeDeleted = message.includeDeleted ?? false;
      this.refreshVendorData(message.entityId ?? "", distributorId, includeDeleted).catch((error) => {
        console.error("Error handling vendor refresh:", error);
      });
    }
  }
  /**
   * Handles distributor-specific refresh logic
   */
  handleDistributorRefresh(_message) {
    this.refreshDistributorData().catch((error) => {
      console.error("Error handling distributor refresh:", error);
    });
  }
  /**
   * Handles client-specific refresh logic
   */
  handleClientRefresh(message) {
    let vendorId = message.vendorId;
    let distributorId = message.distributorId;
    if (isNullOrUndefined(vendorId) || isNullOrUndefined(distributorId)) {
      const context = this.extractClientContext(message);
      vendorId = vendorId ?? context.vendorId;
      distributorId = distributorId ?? context.distributorId;
    }
    distributorId = distributorId ?? this.adminState.getCurrentDistributorId();
    if (isNullOrUndefined(vendorId) || isNullOrUndefined(distributorId)) {
      console.warn("Client refresh requested but no vendorId or distributorId available.");
      return;
    }
    this.refreshClientData(vendorId, distributorId, message.operation).catch((error) => {
      console.error("Error handling client refresh:", error);
    });
  }
  /**
   * Extracts vendor and distributor context for client operations
   */
  extractClientContext(_message) {
    return {};
  }
  /**
   * Handles vendor filter changes from the grid
   */
  handleVendorFilterChange(message) {
    if (!isDefined(message) || message === null || typeof message !== "object" || !("distributorId" in message) || !("includeDeleted" in message)) {
      return;
    }
    const m = message;
    this.refreshVendorData("", m.distributorId, m.includeDeleted).catch((error) => {
      console.error("Error handling vendor filter change:", error);
    });
  }
  /**
   * Manually triggers a vendor refresh for a specific distributor
   * @param distributorId - The distributor ID
   * @param includeDeleted - Whether to include deleted vendors
   */
  async triggerVendorRefresh(distributorId, includeDeleted = false) {
    return this.refreshVendorData("", distributorId, includeDeleted);
  }
  /**
   * Manually triggers a client refresh for a specific vendor
   * @param vendorId - The vendor ID
   * @param distributorId - The distributor ID
   * @param operation - The type of operation that triggered this refresh
   */
  async triggerClientRefresh(vendorId, distributorId, operation = "update") {
    return this.refreshClientData(vendorId, distributorId, operation);
  }
  static \u0275fac = function AdminTreeRefreshService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminTreeRefreshService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminTreeRefreshService, factory: _AdminTreeRefreshService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminTreeRefreshService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/admin-container/admin-container.component.ts
var _c06 = (a0, a1) => ({ content: a0, scrollable: false, minSize: a1 });
var _c15 = (a0) => ({ content: a0, scrollable: true, minSize: 10 });
var _c23 = (a0, a1) => [a0, a1];
var _c33 = () => ["36px", 100];
var _c42 = () => [25, 75];
var _c52 = (a0) => [a0, 10];
function AdminContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4)(1, "p-progressSpinner", 5);
  }
}
function AdminContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tree-navigation-panel", 6);
    \u0275\u0275listener("toggleTreePanel", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_toggleTreePanel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTreePanel());
    })("navigateToSelectedClient", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_navigateToSelectedClient_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToSelectedClient());
    })("nodeExpand", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_nodeExpand_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeExpand($event));
    })("nodeCollapse", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_nodeCollapse_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeCollapse($event));
    })("nodeSelect", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_nodeSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeSelect($event));
    })("nodeNotFoundInData", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_nodeNotFoundInData_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNodeNotFoundInData($event));
    })("searchQueryChange", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_searchQueryChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchQueryChange($event));
    })("searchResultSelect", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_searchResultSelect_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchResultSelect($event));
    })("searchClear", function AdminContainerComponent_ng_template_3_Template_app_tree_navigation_panel_searchClear_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchClear());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("treeCollapsed", ctx_r1.treeCollapsed)("hierarchyTree", ctx_r1.hierarchyTree)("isLoading", ctx_r1.isLoading)("searchingForNode", ctx_r1.searchingForNode)("searchingNodeKey", ctx_r1.searchingNodeKey)("selectedTreeNode", ctx_r1.selectedTreeNode)("scrollToNodeKey", ctx_r1.scrollToNodeKey)("scrollToCenterNodeKey", ctx_r1.scrollToCenterNodeKey)("searchResults", ctx_r1.searchResults)("isSearching", ctx_r1.isSearching);
  }
}
function AdminContainerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-admin-main-content", 7);
    \u0275\u0275listener("routerOutletActivate", function AdminContainerComponent_ng_template_5_Template_app_admin_main_content_routerOutletActivate_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRouterOutletActivate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nestedContentScrollable", ctx_r1.nestedContentScrollable)("detailsPanelClass", ctx_r1.detailsPanelClass);
  }
}
var AdminContainerComponent = class _AdminContainerComponent {
  adminState = inject(AdminStateService);
  adminDataService = inject(AdminDataService);
  messageService = inject(MessageService);
  clientDataService = inject(ClientDataService);
  cdr = inject(ChangeDetectorRef);
  detailsService = inject(EntityDetailsService);
  adminSearchService = inject(AdminSearchService);
  adminTreeService = inject(AdminTreeService);
  authDataService = inject(AuthDataService);
  apiSchemaService = inject(ApiSchemaService);
  contextExtractor = inject(AdminTreeContextExtractorService);
  treeManagementService = inject(AdminTreeManagementService);
  navigationService = inject(AdminNavigationService);
  treeEventHandler = inject(AdminTreeEventHandlerService);
  containerState = inject(AdminContainerStateService);
  routeHandler = inject(AdminRouteHandlerService);
  scrollManagement = inject(AdminScrollManagementService);
  treeRefreshService = inject(AdminTreeRefreshService);
  router = inject(Router);
  isLoading = this.adminState.isLoading;
  selectedItem = this.containerState.selectedItem;
  detailsComponent = signal(null);
  detailsInputs = signal({});
  hasMoreData = this.containerState.hasMoreData;
  loadingMore = this.containerState.loadingMore;
  selectedTreeNode = this.treeEventHandler.selectedTreeNode;
  scrollToNodeKey = this.containerState.scrollToNodeKey;
  scrollToCenterNodeKey = this.containerState.scrollToCenterNodeKey;
  // Node search loading state
  searchingForNode = this.treeEventHandler.searchingForNode;
  searchingNodeKey = this.treeEventHandler.searchingNodeKey;
  // Search-related computed values
  searchResults = this.adminSearchService.results;
  isSearching = this.adminSearchService.isSearching;
  hasSearchQuery = this.adminSearchService.hasQuery;
  // Computed loading state for tree (combines general loading + node search loading)
  treeLoading = computed(() => this.isLoading() || this.searchingForNode());
  /**
   * Computed property that builds the hierarchy tree including "Load More" nodes.
   * Now enhanced with search highlighting and expansion.
   */
  hierarchyTree = this.treeManagementService.hierarchyTree;
  activeGridComponent;
  detailsLoading = signal(false);
  /**
   * Returns the CSS class for the main container based on details panel state
   */
  hostClass = computed(() => {
    return this.detailsService.showPanel() ? "has-details" : "";
  });
  /**
   * Returns the CSS class for the main splitter
   */
  mainSplitterClass = computed(() => {
    return "main-layout";
  });
  /**
   * Returns the CSS class for the details panel based on its visibility
   */
  detailsPanelClass = computed(() => {
    return this.detailsService.showPanel() ? "details-visible-state" : "details-hidden-state";
  });
  /**
   * Signal to determine if the nested router outlet content should be scrollable.
   * Defaults to false (for grid pages).
   */
  nestedContentScrollable = this.containerState.nestedContentScrollable;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  // Collapsible tree state
  treeCollapsed = this.containerState.treeCollapsed;
  // Flag to prevent infinite loops when programmatically changing selected client
  isNavigatingToClient = false;
  initialRouteProcessed = false;
  // Flag to track when component is fully initialized and ready for runtime client changes
  componentFullyInitialized = false;
  // Only show tree if user has access to more than one client
  showTreePanel = computed(() => {
    const distributorVendorClients = this.adminState.vendorClients();
    for (const [_distributorId, vendorClients] of Object.entries(distributorVendorClients)) {
      for (const [_vendorId, clients] of Object.entries(vendorClients)) {
        if (Array.isArray(clients) && clients.length > 1) {
          return true;
        }
      }
    }
    const distributorCount = Object.keys(distributorVendorClients).length;
    if (distributorCount > 1) {
      return true;
    }
    return false;
  });
  toggleTreePanel() {
    this.containerState.toggleTreePanel();
  }
  constructor() {
    this.scrollManagement.initialize({
      selectedTreeNode: () => this.selectedTreeNode(),
      setSelectedTreeNode: (node) => this.treeEventHandler.setTreeSelection(node),
      findNodeRecursively: (nodes, key, type) => this.findNodeRecursively(nodes, key, type)
    });
    effect(() => {
      const clientId = this.treeEventHandler.scrollToClient();
      if (clientId !== null && clientId !== "") {
        this.scrollToClient(clientId);
        this.treeEventHandler.scrollToClient.set(null);
      }
    });
    effect(() => {
      const suppressDuration = this.treeEventHandler.suppressScroll();
      if (suppressDuration !== null) {
        this.temporarilySuppressScrollToClient(suppressDuration);
        this.treeEventHandler.suppressScroll.set(null);
      }
    });
    effect(() => {
      const shouldToggle = this.treeEventHandler.toggleTreePanel();
      if (shouldToggle) {
        this.toggleTreePanel();
        this.treeEventHandler.toggleTreePanel.set(false);
      }
    });
    effect(() => {
      const errorData = this.treeEventHandler.errorMessage();
      if (errorData) {
        this.handleError(errorData.error, errorData.message);
        this.treeEventHandler.errorMessage.set(null);
      }
    });
    let previousClientId = void 0;
    effect(() => {
      const selectedClient = this.clientDataService.getSelectedClientSignal()();
      const currentClientId = selectedClient?.id;
      if (!this.initialRouteProcessed || currentClientId === previousClientId) {
        previousClientId = currentClientId;
        return;
      }
      previousClientId = currentClientId;
      if (!this.componentFullyInitialized) {
        if (isDefined(selectedClient?.id)) {
          this.updateTreeSelectionForCurrentClient(selectedClient).catch(() => {
          });
        }
        return;
      }
      if (isDefined(selectedClient?.id) && !this.isNavigatingToClient) {
        const currentUrl = this.router.url;
        const expectedClientPath = `/admin/client/${selectedClient.id}`;
        if (currentUrl.startsWith(expectedClientPath)) {
          this.updateTreeSelectionForCurrentClient(selectedClient).catch(() => {
          });
          return;
        }
        this.treeEventHandler.setEventSource(EventSource.SYSTEM);
        this.containerState.suppressScrollToClient.set(false);
        void Promise.resolve().then(async () => {
          await this.handleSelectedClientChange(selectedClient);
        });
      }
    });
    let previousRouteKey = void 0;
    let previousRouteType = void 0;
    effect(() => {
      if (!this.initialRouteProcessed)
        return;
      const { keyToSelect, typeToSelect } = this.routeHandler.getEntityInfoFromRoute();
      const currentRouteKey = isDefined(keyToSelect) ? keyToSelect : void 0;
      const currentRouteType = isDefined(typeToSelect) ? typeToSelect : void 0;
      if (currentRouteKey === previousRouteKey && currentRouteType === previousRouteType) {
        return;
      }
      previousRouteKey = currentRouteKey;
      previousRouteType = currentRouteType;
      if (isDefined(keyToSelect) && isDefined(typeToSelect)) {
        if (typeToSelect === ADMIN_TREE.NODE_TYPES.CLIENT) {
          return;
        }
        const currentSelected = this.selectedTreeNode();
        if (currentSelected?.key === keyToSelect && currentSelected?.type === typeToSelect) {
          return;
        }
        this.treeEventHandler.setEventSource(EventSource.SYSTEM);
        this.containerState.suppressScrollToClient.set(false);
        void Promise.resolve().then(async () => {
          setTimeout(async () => {
            await this.handleRouteBasedSelection(keyToSelect, typeToSelect);
          }, 100);
        });
      }
    });
    let previousCollapsed = this.treeCollapsed();
    effect(() => {
      const collapsed = this.treeCollapsed();
      if (previousCollapsed && !collapsed) {
        this.containerState.suppressScrollToClient.set(false);
        const selectedNode = this.selectedTreeNode();
        if (isDefined(selectedNode?.key)) {
          this.scrollManagement.scrollToCenterNode(selectedNode.key);
        } else {
          const selClient = this.adminState.selectedClient();
          if (isDefined(selClient?.id) && this.treeEventHandler.shouldAllowAutoScroll()) {
            this.scrollManagement.scrollToClient(selClient.id);
          }
        }
      }
      previousCollapsed = collapsed;
    });
  }
  /**
   * Updates tree selection when we're already on the correct route but selection is wrong
   */
  async updateTreeSelectionForCurrentClient(selectedClient) {
    if (!isDefined(selectedClient.id))
      return;
    try {
      this.adminState.setSelectedClient(selectedClient);
      const searchResult = await this.adminSearchService.prepareClientForTreeSelectionWithOwner(selectedClient);
      if (searchResult) {
        const treeNodes = this.hierarchyTree();
        const nodeToSelect = this.findNodeByKeyRecursive(treeNodes, selectedClient.id);
        if (nodeToSelect) {
          this.treeEventHandler.setTreeSelection(nodeToSelect);
          if (!this.treeCollapsed() && this.treeEventHandler.shouldAllowAutoScroll()) {
            this.scrollManagement.scrollToClient(selectedClient.id);
          }
        }
      }
    } catch (error) {
      console.warn("Error updating tree selection for current client:", error);
    }
  }
  ngOnInit() {
    this.treeEventHandler.initialize({
      getHierarchyTree: () => this.hierarchyTree(),
      findNodeByKeyRecursive: (nodes, key) => this.findNodeByKeyRecursive(nodes, key)
    });
    this.routeHandler.initializeRouteHandling({
      selectNodeFromRouteOrState: () => this.selectNodeFromRouteOrState(),
      ensureSuperAdminNodeExpansion: () => this.ensureSuperAdminNodeExpansion(),
      onChangeDetection: () => {
        this.cdr.detectChanges();
        this.initialRouteProcessed = true;
        this.componentFullyInitialized = true;
      }
    });
    this.treeRefreshService.initialize();
  }
  ngOnDestroy() {
    this.treeEventHandler.cleanup();
    this.adminState.clearAllState();
  }
  /**
   * Scrolls the tree to center on the specified client node
   * @param clientId The ID of the client to scroll to
   */
  scrollToClient(clientId) {
    this.scrollManagement.scrollToClient(clientId);
  }
  /**
   * Temporarily suppresses automatic scrolling to selected client during user interactions
   * @param durationMs Duration in milliseconds to suppress scrolling (default: 2000ms)
   */
  temporarilySuppressScrollToClient(durationMs = 2e3) {
    this.scrollManagement.temporarilySuppressScrollToClient(durationMs);
  }
  /**
   * Handles when a node is not found in the current tree data
   */
  onNodeNotFoundInData(event) {
    this.treeEventHandler.onNodeNotFoundInData(event);
  }
  /**
   * Finds a node in the hierarchy recursively by key and type.
   */
  findNodeRecursively(nodes, key, type) {
    for (const node of nodes) {
      if (node.key === key && (isNullOrUndefined(type) || node.type === type)) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByKeyRecursive(node.children, key);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  // --- Tree Building Logic with Pagination ---
  /**
   * Ensures the super admin node is expanded by default when using modern schema
   */
  ensureSuperAdminNodeExpansion() {
    const isSuperAdmin = this.authDataService.isSuperAdmin();
    const usesModernSchema = this.apiSchemaService.usesModernSchema();
    const distributor = this.adminState.vendorDistributor();
    if (isSuperAdmin && usesModernSchema && distributor) {
      const superAdminExpandedNodes = this.adminState.expandedNodes()["super-admin"] ?? /* @__PURE__ */ new Set();
      if (!superAdminExpandedNodes.has("super-admin-root")) {
        this.adminState.setDistributorNodeExpanded("super-admin", "super-admin-root", true);
      }
    }
  }
  async navigateToNode(nodeType, nodeKey) {
    return this.navigationService.navigateToNode(nodeType, nodeKey);
  }
  handleError(error, message) {
    console.error(message, error);
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: `${message}: ${error instanceof Error ? error.message : "Unknown error"}`
    });
  }
  /**
   * Navigates to the selected client from clientDataService and selects it in the tree
   * This method handles the home button functionality
   */
  async navigateToSelectedClient() {
    const selectedClient = this.clientDataService.getSelectedClient();
    if (!selectedClient || !isDefined(selectedClient.id)) {
      this.messageService.add({
        severity: "warn",
        summary: "Warning",
        detail: "No client selected to navigate to"
      });
      return;
    }
    try {
      this.treeEventHandler.setEventSource(EventSource.SYSTEM);
      this.containerState.suppressScrollToClient.set(false);
      if (!isDefined(selectedClient.owner?.id)) {
        const fullClient = await this.adminTreeService.fetchClient(selectedClient.id);
        if (fullClient) {
          await this.handleSelectedClientChange(fullClient);
        } else {
          console.warn("Could not load full client data for navigation");
          await this.navigateToNode(ADMIN_TREE.NODE_TYPES.CLIENT, selectedClient.id);
          this.adminState.setSelectedClient(selectedClient);
        }
      } else {
        await this.handleSelectedClientChange(selectedClient);
      }
    } catch (error) {
      this.handleError(error, "Error navigating to selected client");
    }
  }
  /**
   * Handles automatic navigation when the selected client changes
   * This prevents infinite loops by setting a flag during navigation
   * Uses the client's owner information for efficient hierarchy loading
   */
  async handleSelectedClientChange(selectedClient) {
    if (this.isNavigatingToClient || !isDefined(selectedClient.id)) {
      return;
    }
    try {
      this.isNavigatingToClient = true;
      this.adminState.setSelectedClient(selectedClient);
      await this.navigateToNode(ADMIN_TREE.NODE_TYPES.CLIENT, selectedClient.id);
      if (this.treeCollapsed()) {
        try {
          await this.adminSearchService.prepareClientForTreeSelectionWithOwner(selectedClient);
          const treeNodes = this.hierarchyTree();
          const nodeToSelect = this.findNodeByKeyRecursive(treeNodes, selectedClient.id);
          if (nodeToSelect) {
            this.treeEventHandler.setTreeSelection(nodeToSelect);
          }
        } catch (error) {
          console.warn("Could not prepare tree data while collapsed:", error);
        }
        return;
      }
      const searchResult = await this.adminSearchService.prepareClientForTreeSelectionWithOwner(selectedClient);
      if (searchResult) {
        const treeNodes = this.hierarchyTree();
        const nodeToSelect = this.findNodeByKeyRecursive(treeNodes, selectedClient.id);
        if (nodeToSelect) {
          this.treeEventHandler.setTreeSelection(nodeToSelect);
        } else {
          console.warn("Could not find tree node for client after preparation");
        }
        this.scrollManagement.scrollToClient(selectedClient.id);
      } else {
        console.warn("Could not prepare client for tree selection");
      }
    } catch (error) {
      this.handleError(error, "Error handling selected client change");
    } finally {
      this.isNavigatingToClient = false;
    }
  }
  /** Recursive helper to find TreeNode by key */
  findNodeByKeyRecursive(nodes, key) {
    for (const node of nodes) {
      if (node.key === key) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByKeyRecursive(node.children, key);
        if (found)
          return found;
      }
    }
    return null;
  }
  /**
   * Handles node expansion
   */
  async onNodeExpand(node) {
    this.temporarilySuppressScrollToClient(0);
    this.treeEventHandler.setEventSource(EventSource.USER);
    try {
      await this.treeEventHandler.onNodeExpand(node);
      this.scrollToExpandedNode(node);
    } catch (error) {
      this.handleError(error, "Error expanding node");
    }
  }
  async onGroupExpand(groupNode) {
    this.temporarilySuppressScrollToClient(0);
    this.treeEventHandler.setEventSource(EventSource.USER);
    try {
      await this.treeEventHandler.onNodeExpand(groupNode);
      this.scrollToExpandedNode(groupNode);
    } catch (error) {
      this.handleError(error, "Error expanding group");
    }
  }
  onNodeCollapse(node) {
    this.temporarilySuppressScrollToClient(0);
    this.treeEventHandler.setEventSource(EventSource.USER);
    this.treeEventHandler.onNodeCollapse(node);
  }
  async onNodeSelect(node) {
    this.temporarilySuppressScrollToClient(0);
    this.treeEventHandler.setEventSource(EventSource.USER);
    return this.treeEventHandler.onNodeSelect(node);
  }
  onNodeUnselect(node) {
    this.treeEventHandler.onNodeUnselect(node);
  }
  findSelectedNode() {
    const selectedNode = this.selectedTreeNode();
    if (selectedNode)
      return selectedNode;
    const { keyToSelect, typeToSelect } = this.getEntityInfoFromRoute();
    if (!isDefined(keyToSelect)) {
      const selectedClient = this.adminState.selectedClient();
      if (!selectedClient)
        return null;
      const nodes2 = this.hierarchyTree();
      return this.adminDataService.findSelectedNode(nodes2, selectedClient.id);
    }
    const nodes = this.hierarchyTree();
    if (isDefined(typeToSelect)) {
      return this.findNodeByTypeAndKey(nodes, keyToSelect, typeToSelect);
    } else {
      return this.findNodeByKeyRecursive(nodes, keyToSelect);
    }
  }
  // Capture the activated router outlet component
  onRouterOutletActivate(component) {
    this.activeGridComponent = component;
  }
  /**
   * Scrolls to center an expanded node to show its children
   */
  scrollToExpandedNode(node) {
    if (isDefined(node.key)) {
      this.scrollManagement.scrollToCenterNode(node.key);
    }
  }
  /**
   * Gets entity information from route parameters
   */
  getEntityInfoFromRoute() {
    return this.routeHandler.getEntityInfoFromRoute();
  }
  /**
   * Selects a node in the tree based on the current route parameters.
   * This method updates the `selectedTreeNode` signal.
   */
  selectNodeFromRouteOrState() {
    const { keyToSelect, typeToSelect } = this.getEntityInfoFromRoute();
    const treeNodes = this.hierarchyTree();
    this.updateSelectedNode(keyToSelect, typeToSelect, treeNodes);
  }
  /**
   * Updates the selected node based on provided key and type
   */
  updateSelectedNode(keyToSelect, typeToSelect, treeNodes) {
    if (isNullOrUndefined(keyToSelect) && isNullOrUndefined(typeToSelect)) {
      this.treeEventHandler.setTreeSelection(null);
      return;
    }
    if (!isDefined(keyToSelect) || treeNodes.length === 0) {
      return;
    }
    const nodeToSelect = this.findNodeToSelect(treeNodes, keyToSelect, typeToSelect);
    if (nodeToSelect) {
      this.treeEventHandler.setTreeSelection(nodeToSelect);
      this.updateStateBasedOnNodeType(nodeToSelect);
      this.scrollManagement.handleNodeSelectionScroll(keyToSelect);
    }
  }
  /**
   * Finds the correct node to select based on key and optional type
   */
  findNodeToSelect(treeNodes, key, type) {
    if (isDefined(type)) {
      const nodeByType = this.findNodeByTypeAndKey(treeNodes, key, type);
      if (nodeByType)
        return nodeByType;
    }
    return this.findNodeByKeyRecursive(treeNodes, key);
  }
  /**
   * Finds a node in the hierarchy by both key and type.
   * This is a helper method to avoid code duplication.
   */
  findNodeByTypeAndKey(nodes, key, type) {
    for (const node of nodes) {
      if (node.key === key && node.type === type) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByTypeAndKey(node.children, key, type);
        if (found)
          return found;
      }
    }
    return null;
  }
  /**
   * Handles search query changes
   */
  onSearchQueryChange(query) {
    this.treeEventHandler.onSearchQueryChange(query);
  }
  /**
   * Handles search result selection
   */
  async onSearchResultSelect(result) {
    this.containerState.suppressScrollToClient.set(false);
    return this.treeEventHandler.onSearchResultSelect(result);
  }
  /**
   * Handles search clear
   */
  onSearchClear() {
    this.containerState.suppressScrollToClient.set(false);
    this.treeEventHandler.onSearchClear();
  }
  /**
   * Handles selection based on route parameters for any node type
   */
  async handleRouteBasedSelection(keyToSelect, typeToSelect) {
    const currentSelected = this.selectedTreeNode();
    if (currentSelected?.key === keyToSelect && currentSelected?.type === typeToSelect) {
      return;
    }
    const searchResult = await this.prepareTreeDataForNodeType(keyToSelect, typeToSelect);
    if (searchResult !== null) {
      await this.updateTreeSelectionFromRoute(keyToSelect, typeToSelect);
    }
  }
  /**
   * Prepares tree data based on node type
   */
  async prepareTreeDataForNodeType(keyToSelect, typeToSelect) {
    if (typeToSelect === ADMIN_TREE.NODE_TYPES.CLIENT) {
      return this.prepareClientTreeData();
    }
    return this.prepareNonClientTreeData(typeToSelect);
  }
  /**
   * Prepares tree data for client nodes with distributor context
   */
  async prepareClientTreeData() {
    const currentClient = this.adminState.selectedClient();
    if (!currentClient)
      return null;
    this.clientDataService.setSelectedClient(currentClient);
    return this.adminSearchService.prepareClientForTreeSelectionWithOwner(currentClient);
  }
  /**
   * Prepares tree data for non-client nodes
   */
  async prepareNonClientTreeData(typeToSelect) {
    try {
      const treeNodes = this.hierarchyTree();
      if (treeNodes.length > 0) {
        return { success: true };
      }
      console.warn("Tree not loaded for non-client node type:", typeToSelect);
      return null;
    } catch (error) {
      console.warn("Error checking tree state for node type:", typeToSelect, error);
      return null;
    }
  }
  /**
   * Updates tree selection based on route parameters with distributor context
   */
  async updateTreeSelectionFromRoute(keyToSelect, typeToSelect) {
    await this.treeEventHandler.scheduleNodeSelection(keyToSelect, typeToSelect ?? "client");
    if (typeToSelect === ADMIN_TREE.NODE_TYPES.CLIENT) {
      await this.updateClientStateFromRoute(keyToSelect);
    }
  }
  /**
   * Updates client state when navigating via route
   */
  async updateClientStateFromRoute(keyToSelect) {
    const currentClient = this.adminState.selectedClient();
    if (currentClient?.id === keyToSelect) {
      this.syncClientDataService(currentClient);
    } else {
      await this.loadAndSetClientFromRoute(keyToSelect);
    }
  }
  /**
   * Syncs client data service with current client
   */
  syncClientDataService(currentClient) {
    this.clientDataService.setSelectedClient(currentClient);
  }
  /**
   * Loads client data from API and updates state
   */
  async loadAndSetClientFromRoute(keyToSelect) {
    try {
      const client = await this.adminTreeService.fetchClient(keyToSelect);
      if (client) {
        this.setClientAndSyncServices(client);
        await this.setVendorContextForClient(client);
      }
    } catch (error) {
      console.warn("Error loading client data for selection:", error);
    }
  }
  /**
   * Sets client in both admin state and client data service
   */
  setClientAndSyncServices(client) {
    this.adminState.setSelectedClient(client);
    this.clientDataService.setSelectedClient(client);
  }
  /**
   * Sets vendor distributor context for client if available
   */
  async setVendorContextForClient(client) {
    if (!client.owner?.id)
      return;
    const distributorId = this.adminState.getCurrentDistributorId();
    if (!isDefined(distributorId))
      return;
    const vendor = this.adminState.getVendorById(client.owner.id, distributorId);
    if (vendor) {
      this.adminState.setClientVendor(vendor);
    }
  }
  /**
   * Handles client-based selection with distributor context (fallback when no route selection)
   */
  async handleClientBasedSelection(currentClient) {
    if (!isDefined(currentClient.id))
      return;
    this.clientDataService.setSelectedClient(currentClient);
    const searchResult = await this.adminSearchService.prepareClientForTreeSelectionWithOwner(currentClient);
    if (searchResult) {
      const treeNodes = this.hierarchyTree();
      const nodeToSelect = this.findNodeByKeyRecursive(treeNodes, currentClient.id);
      if (nodeToSelect) {
        this.treeEventHandler.setTreeSelection(nodeToSelect);
        if (!this.treeCollapsed() && this.treeEventHandler.shouldAllowAutoScroll()) {
          this.scrollManagement.scrollToClient(currentClient.id);
        }
      }
    }
  }
  /**
   * Updates application state based on the selected node type
   */
  updateStateBasedOnNodeType(node) {
    if (!isDefined(node.type) || !isDefined(node.key))
      return;
    if (node.type === ADMIN_TREE.NODE_TYPES.CLIENT) {
      const clientData = node.data;
      if (isDefined(clientData)) {
        this.adminState.setSelectedClient(clientData);
      }
    }
  }
  static \u0275fac = function AdminContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminContainerComponent, selectors: [["app-admin-container"]], decls: 7, vars: 20, consts: [["treeNavigationTemplate", ""], ["mainContentTemplate", ""], [1, "flex", "h-full", "overflow-hidden", 3, "ngClass"], ["stateKey", "main-layout", 1, "h-full", "w-full", 3, "ngClass", "panels", "panelSizes", "minSizes", "defaultLayout", "responsive"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-30", "z-40"], ["styleClass", "w-8 h-8", "strokeWidth", "2", 1, "fixed", "z-50", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"], [3, "toggleTreePanel", "navigateToSelectedClient", "nodeExpand", "nodeCollapse", "nodeSelect", "nodeNotFoundInData", "searchQueryChange", "searchResultSelect", "searchClear", "treeCollapsed", "hierarchyTree", "isLoading", "searchingForNode", "searchingNodeKey", "selectedTreeNode", "scrollToNodeKey", "scrollToCenterNodeKey", "searchResults", "isSearching"], [3, "routerOutletActivate", "nestedContentScrollable", "detailsPanelClass"]], template: function AdminContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, AdminContainerComponent_Conditional_1_Template, 2, 0);
      \u0275\u0275elementStart(2, "app-adaptive-layout", 3);
      \u0275\u0275template(3, AdminContainerComponent_ng_template_3_Template, 1, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, AdminContainerComponent_ng_template_5_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const treeNavigationTemplate_r4 = \u0275\u0275reference(4);
      const mainContentTemplate_r5 = \u0275\u0275reference(6);
      \u0275\u0275property("ngClass", ctx.hostClass());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.mainSplitterClass())("panels", \u0275\u0275pureFunction2(13, _c23, \u0275\u0275pureFunction2(8, _c06, treeNavigationTemplate_r4, ctx.treeCollapsed() ? "36px" : 15), \u0275\u0275pureFunction1(11, _c15, mainContentTemplate_r5)))("panelSizes", ctx.treeCollapsed() ? \u0275\u0275pureFunction0(16, _c33) : \u0275\u0275pureFunction0(17, _c42))("minSizes", \u0275\u0275pureFunction1(18, _c52, ctx.treeCollapsed() ? "36px" : 15))("defaultLayout", "horizontal")("responsive", true);
    }
  }, dependencies: [
    AdaptiveLayoutComponent,
    CommonModule,
    NgClass,
    ProgressSpinnerModule,
    ProgressSpinner,
    TreeNavigationPanelComponent,
    AdminMainContentComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]   .flex.relative[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n[_nghost-%COMP%]     .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     p-splitter {\n  height: 100%;\n}\n[_nghost-%COMP%]   -shadowcsshost     p-splitter.flex.relative {\n  position: relative;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .details-hidden-state .p-splitterpanel:nth-child(3), \n[_nghost-%COMP%]     .details-hidden-state .p-splitter-panel:nth-child(3) {\n  display: none;\n}\n[_nghost-%COMP%]     .details-hidden-state .p-splitter-gutter {\n  display: none;\n}\n[_nghost-%COMP%]     .details-hidden-state .p-splitter-panel:first-of-type {\n  width: 100%;\n  max-width: 100%;\n  flex: 1 1 0%;\n}\n[_nghost-%COMP%]     .search-highlighted {\n  background-color: rgba(255, 235, 59, 0.3) !important;\n  border-left: 3px solid var(--primary-color, #3b82f6) !important;\n}\n[_nghost-%COMP%]     .search-highlighted .p-treenode-content {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n  font-weight: 600 !important;\n}\n[_nghost-%COMP%]     .search-highlighted:hover {\n  background-color: rgba(255, 235, 59, 0.4) !important;\n}\n[_nghost-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   .p-splitter[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   .p-splitter-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n[_nghost-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   app-adaptive-layout[_ngcontent-%COMP%]   .p-splitter-panel[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .h-full.flex.relative[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n}\n.has-details[_ngcontent-%COMP%]     .main-layout .p-splitter-gutter {\n  z-index: 10;\n  cursor: col-resize;\n}\n  .load-more-node .p-treenode-content {\n  font-style: italic;\n  color: var(--primary-color);\n  cursor: pointer;\n}\n  .load-more-node .p-treenode-content:hover {\n  background-color: var(--surface-hover);\n}\n  .load-more-node .p-treenode-icon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=admin-container.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminContainerComponent, [{
    type: Component,
    args: [{ selector: "app-admin-container", imports: [
      AdaptiveLayoutComponent,
      CommonModule,
      ProgressSpinnerModule,
      TreeNavigationPanelComponent,
      AdminMainContentComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex h-full overflow-hidden" [ngClass]="hostClass()">
  <!-- Backdrop and spinner overlay when loading -->
  @if (isLoading()) {
    <div class="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
    <p-progressSpinner
      class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      styleClass="w-8 h-8"
      strokeWidth="2"
    ></p-progressSpinner>
  }

  <app-adaptive-layout
    [ngClass]="mainSplitterClass()"
    [panels]="[
      {
        content: treeNavigationTemplate,
        scrollable: false,
        minSize: treeCollapsed() ? '36px' : 15,
      },
      { content: mainContentTemplate, scrollable: true, minSize: 10 },
    ]"
    [panelSizes]="treeCollapsed() ? ['36px', 100] : [25, 75]"
    [minSizes]="[treeCollapsed() ? '36px' : 15, 10]"
    [defaultLayout]="'horizontal'"
    [responsive]="true"
    stateKey="main-layout"
    class="h-full w-full"
  >
    <!-- Tree navigation panel -->
    <ng-template #treeNavigationTemplate>
      <app-tree-navigation-panel
        [treeCollapsed]="treeCollapsed"
        [hierarchyTree]="hierarchyTree"
        [isLoading]="isLoading"
        [searchingForNode]="searchingForNode"
        [searchingNodeKey]="searchingNodeKey"
        [selectedTreeNode]="selectedTreeNode"
        [scrollToNodeKey]="scrollToNodeKey"
        [scrollToCenterNodeKey]="scrollToCenterNodeKey"
        [searchResults]="searchResults"
        [isSearching]="isSearching"
        (toggleTreePanel)="toggleTreePanel()"
        (navigateToSelectedClient)="navigateToSelectedClient()"
        (nodeExpand)="onNodeExpand($event)"
        (nodeCollapse)="onNodeCollapse($event)"
        (nodeSelect)="onNodeSelect($event)"
        (nodeNotFoundInData)="onNodeNotFoundInData($event)"
        (searchQueryChange)="onSearchQueryChange($event)"
        (searchResultSelect)="onSearchResultSelect($event)"
        (searchClear)="onSearchClear()"
      ></app-tree-navigation-panel>
    </ng-template>

    <!-- Main content panel -->
    <ng-template #mainContentTemplate>
      <app-admin-main-content
        [nestedContentScrollable]="nestedContentScrollable"
        [detailsPanelClass]="detailsPanelClass"
        (routerOutletActivate)="onRouterOutletActivate($event)"
      ></app-admin-main-content>
    </ng-template>
  </app-adaptive-layout>
</div>
`, styles: ["/* src/app/features/administration/components/admin-container/admin-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n:host :host.flex.relative {\n  position: relative;\n  overflow: visible;\n}\n:host ::ng-deep .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n:host ::ng-deep .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep p-splitter {\n  height: 100%;\n}\n:host :host ::ng-deep p-splitter.flex.relative {\n  position: relative;\n  overflow: visible;\n}\n:host ::ng-deep .details-hidden-state .p-splitterpanel:nth-child(3),\n:host ::ng-deep .details-hidden-state .p-splitter-panel:nth-child(3) {\n  display: none;\n}\n:host ::ng-deep .details-hidden-state .p-splitter-gutter {\n  display: none;\n}\n:host ::ng-deep .details-hidden-state .p-splitter-panel:first-of-type {\n  width: 100%;\n  max-width: 100%;\n  flex: 1 1 0%;\n}\n:host ::ng-deep .search-highlighted {\n  background-color: rgba(255, 235, 59, 0.3) !important;\n  border-left: 3px solid var(--primary-color, #3b82f6) !important;\n}\n:host ::ng-deep .search-highlighted .p-treenode-content {\n  background-color: rgba(255, 235, 59, 0.2) !important;\n  font-weight: 600 !important;\n}\n:host ::ng-deep .search-highlighted:hover {\n  background-color: rgba(255, 235, 59, 0.4) !important;\n}\n:host app-adaptive-layout app-adaptive-layout {\n  height: 100%;\n  overflow: hidden;\n}\n:host app-adaptive-layout app-adaptive-layout .p-splitter {\n  height: 100%;\n  overflow: hidden;\n}\n:host app-adaptive-layout app-adaptive-layout .p-splitter-panel {\n  overflow: hidden;\n}\n:host app-adaptive-layout app-adaptive-layout .p-splitter-panel > div {\n  overflow: auto;\n  height: 100%;\n}\n:host .h-full.flex.relative {\n  position: relative;\n  overflow: visible;\n}\n.has-details ::ng-deep .main-layout .p-splitter-gutter {\n  z-index: 10;\n  cursor: col-resize;\n}\n::ng-deep .load-more-node .p-treenode-content {\n  font-style: italic;\n  color: var(--primary-color);\n  cursor: pointer;\n}\n::ng-deep .load-more-node .p-treenode-content:hover {\n  background-color: var(--surface-hover);\n}\n::ng-deep .load-more-node .p-treenode-icon {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=admin-container.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminContainerComponent, { className: "AdminContainerComponent", filePath: "src/app/features/administration/components/admin-container/admin-container.component.ts", lineNumber: 66 });
})();

// src/app/features/administration/resolvers/client.resolver.ts
var clientResolver = (route, _state) => {
  const accountsService = inject(AccountsService);
  const messageService = inject(MessageService);
  const clientId = route.paramMap.get("clientId");
  if (!isDefined(clientId) || !isString(clientId)) {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Invalid client ID"
    });
    return of(null);
  }
  return accountsService.getClient(clientId).pipe(map((response) => {
    if (!isDefined(response)) {
      messageService.add({
        severity: "error",
        summary: "Error",
        detail: "No client data found"
      });
      return null;
    }
    return response;
  }), catchError(() => {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Failed to load client data"
    });
    return of(null);
  }));
};

// src/app/features/administration/resolvers/distributor.resolver.ts
var distributorResolver = (route, _state) => {
  const accountsService = inject(AccountsService);
  const messageService = inject(MessageService);
  const distributorId = route.paramMap.get("distributorId");
  if (!isDefined(distributorId) || !isString(distributorId)) {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Invalid distributor ID"
    });
    return of(null);
  }
  return accountsService.getDistributor(distributorId).pipe(map((response) => {
    if (!isDefined(response)) {
      messageService.add({
        severity: "error",
        summary: "Error",
        detail: "No distributor data found"
      });
      return null;
    }
    return response;
  }), catchError(() => {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Failed to load distributor data"
    });
    return of(null);
  }));
};

// src/app/features/administration/resolvers/vendor.resolver.ts
var vendorResolver = (route, _state) => {
  const accountsService = inject(AccountsService);
  const messageService = inject(MessageService);
  const vendorId = route.paramMap.get("vendorId");
  if (isNullOrUndefined(vendorId)) {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Vendor ID not found"
    });
    return of(null);
  }
  return accountsService.getVendor(vendorId).pipe(catchError(() => {
    messageService.add({
      severity: "error",
      summary: "Error",
      detail: "Failed to load vendor data"
    });
    return of(null);
  }));
};

// src/app/features/administration/administration-routing.module.ts
var routes = [
  {
    path: "",
    component: AdminContainerComponent,
    children: [
      {
        path: "super-admin/:superAdminId",
        loadChildren: () => import("./chunk-MI3R4NZA.js").then((m) => m.SuperAdminModule)
      },
      {
        path: "vendor/:vendorId",
        resolve: {
          vendor: vendorResolver
        },
        loadChildren: () => import("./chunk-4HTEWQNU.js").then((m) => m.VendorsModule)
      },
      {
        path: "distributor/:distributorId",
        resolve: {
          distributor: distributorResolver
        },
        loadChildren: () => import("./chunk-3QMAVSMA.js").then((m) => m.DistributorsModule)
      },
      {
        path: "client/:clientId",
        resolve: {
          client: clientResolver
        },
        loadChildren: () => import("./chunk-CWHYVK2P.js").then((m) => m.ClientsModule)
      }
    ]
  }
];
var AdministrationRoutingModule = class _AdministrationRoutingModule {
  static \u0275fac = function AdministrationRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdministrationRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministrationRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/shared/services/grid-base.service.ts
var GridBaseService = class _GridBaseService {
  handleFilters(currentFilters, field, value, transformations, filterMatchMode) {
    if (field === "*" && value === null) {
      return {};
    }
    const newFilters = __spreadValues({}, currentFilters);
    if (isDefined(value) && value.toString().length > 0) {
      const transformedField = transformations?.[field] ? transformations[field](field) : field;
      let processedValue = value;
      let operator = "=";
      if (filterMatchMode === "contains" && typeof value === "string") {
        processedValue = `*${value}*`;
      } else if (filterMatchMode === "startsWith" && typeof value === "string") {
        processedValue = `${value}*`;
      } else if (filterMatchMode === "endsWith" && typeof value === "string") {
        processedValue = `*${value}`;
      } else if (filterMatchMode === "in") {
        operator = "in";
      }
      newFilters[transformedField] = { value: processedValue, operator };
    } else {
      delete newFilters[field];
    }
    return newFilters;
  }
  constructGridParams(baseParams, event, defaultPageSize = DEFAULT_PAGE_SIZE) {
    return __spreadProps(__spreadValues({}, baseParams), {
      owner: baseParams["owner"] || DEFAULT_SYSTEM_ID,
      offset: isDefined(event?.first) ? event.first : 0,
      limit: isDefined(event?.rows) ? event.rows : defaultPageSize,
      sortField: isDefined(event?.sortField) ? event.sortField : "name",
      sortOrder: isDefined(event?.sortOrder) ? event.sortOrder : "asc"
    });
  }
  static \u0275fac = function GridBaseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridBaseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GridBaseService, factory: _GridBaseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridBaseService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/stepper/index.mjs
var style3 = "\n    .p-steplist {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-x: auto;\n    }\n\n    .p-step {\n        position: relative;\n        display: flex;\n        flex: 1 1 auto;\n        align-items: center;\n        gap: dt('stepper.step.gap');\n        padding: dt('stepper.step.padding');\n    }\n\n    .p-step:last-of-type {\n        flex: initial;\n    }\n\n    .p-step-header {\n        border: 0 none;\n        display: inline-flex;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration');\n        border-radius: dt('stepper.step.header.border.radius');\n        outline-color: transparent;\n        background: transparent;\n        padding: dt('stepper.step.header.padding');\n        gap: dt('stepper.step.header.gap');\n    }\n\n    .p-step-header:focus-visible {\n        box-shadow: dt('stepper.step.header.focus.ring.shadow');\n        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');\n        outline-offset: dt('stepper.step.header.focus.ring.offset');\n    }\n\n    .p-stepper.p-stepper-readonly .p-step {\n        cursor: auto;\n    }\n\n    .p-step-title {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('stepper.step.title.color');\n        font-weight: dt('stepper.step.title.font.weight');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-step-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('stepper.step.number.color');\n        border: 2px solid dt('stepper.step.number.border.color');\n        background: dt('stepper.step.number.background');\n        min-width: dt('stepper.step.number.size');\n        height: dt('stepper.step.number.size');\n        line-height: dt('stepper.step.number.size');\n        font-size: dt('stepper.step.number.font.size');\n        z-index: 1;\n        border-radius: dt('stepper.step.number.border.radius');\n        position: relative;\n        font-weight: dt('stepper.step.number.font.weight');\n    }\n\n    .p-step-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('stepper.step.number.border.radius');\n        box-shadow: dt('stepper.step.number.shadow');\n    }\n\n    .p-step-active .p-step-header {\n        cursor: default;\n    }\n\n    .p-step-active .p-step-number {\n        background: dt('stepper.step.number.active.background');\n        border-color: dt('stepper.step.number.active.border.color');\n        color: dt('stepper.step.number.active.color');\n    }\n\n    .p-step-active .p-step-title {\n        color: dt('stepper.step.title.active.color');\n    }\n\n    .p-step:not(.p-disabled):focus-visible {\n        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-step:has(~ .p-step-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepper-separator {\n        flex: 1 1 0;\n        background: dt('stepper.separator.background');\n        width: 100%;\n        height: dt('stepper.separator.size');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-steppanels {\n        padding: dt('stepper.steppanels.padding');\n    }\n\n    .p-steppanel {\n        background: dt('stepper.steppanel.background');\n        color: dt('stepper.steppanel.color');\n    }\n\n    .p-stepper:has(.p-stepitem) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-stepitem {\n        display: flex;\n        flex-direction: column;\n        flex: initial;\n    }\n\n    .p-stepitem.p-stepitem-active {\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-step {\n        flex: initial;\n    }\n\n    .p-stepitem .p-steppanel-content {\n        width: 100%;\n        padding: dt('stepper.steppanel.padding');\n        margin-inline-start: 1rem;\n    }\n\n    .p-stepitem .p-steppanel {\n        display: flex;\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-stepper-separator {\n        flex: 0 0 auto;\n        width: dt('stepper.separator.size');\n        height: auto;\n        margin: dt('stepper.separator.margin');\n        position: relative;\n        left: calc(-1 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem .p-stepper-separator:dir(rtl) {\n        left: calc(-9 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepitem:last-of-type .p-steppanel {\n        padding-inline-start: dt('stepper.step.number.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c07 = ["*"];
var _c16 = ["content"];
var _c24 = (a0, a1, a2) => ({
  activateCallback: a0,
  value: a1,
  active: a2
});
function Step_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Step_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepClick());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Step_Conditional_0_Conditional_5_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("tabindex", ctx_r1.isStepDisabled() ? -1 : void 0)("disabled", ctx_r1.isStepDisabled());
    \u0275\u0275attribute("id", ctx_r1.id())("role", "tab")("aria-controls", ctx_r1.ariaControls());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("number"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 5 : -1);
  }
}
function Step_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Step_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Step_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
    \u0275\u0275conditionalCreate(1, Step_Conditional_1_Conditional_1_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.content || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c24, ctx_r1.onStepClick.bind(ctx_r1), ctx_r1.value(), ctx_r1.active()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 1 : -1);
  }
}
var _c34 = (a0) => ({
  transitionParams: a0
});
var _c43 = (a0) => ({
  value: "visible",
  params: a0
});
var _c53 = (a0) => ({
  value: "hidden",
  params: a0
});
function StepPanel_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function StepPanel_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepPanel_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c24, ctx_r0.updateValue.bind(ctx_r0), ctx_r0.value(), ctx_r0.active()));
  }
}
var classes$5 = {
  root: ({
    instance
  }) => ["p-stepitem", {
    "p-stepitem-active": instance.isActive()
  }]
};
var StepItemStyle = class _StepItemStyle extends BaseStyle {
  name = "stepitem";
  classes = classes$5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepItemStyle_BaseFactory;
    return function StepItemStyle_Factory(__ngFactoryType__) {
      return (\u0275StepItemStyle_BaseFactory || (\u0275StepItemStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepItemStyle)))(__ngFactoryType__ || _StepItemStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepItemStyle,
    factory: _StepItemStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItemStyle, [{
    type: Injectable
  }], null, null);
})();
var StepItemClasses;
(function(StepItemClasses2) {
  StepItemClasses2["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));
var classes$4 = {
  root: "p-steplist"
};
var StepListStyle = class _StepListStyle extends BaseStyle {
  name = "steplist";
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepListStyle_BaseFactory;
    return function StepListStyle_Factory(__ngFactoryType__) {
      return (\u0275StepListStyle_BaseFactory || (\u0275StepListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepListStyle)))(__ngFactoryType__ || _StepListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepListStyle,
    factory: _StepListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepListStyle, [{
    type: Injectable
  }], null, null);
})();
var StepListClasses;
(function(StepListClasses2) {
  StepListClasses2["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));
var classes$3 = {
  root: "p-steppanels"
};
var StepPanelsStyle = class _StepPanelsStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelsStyle_BaseFactory;
    return function StepPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelsStyle_BaseFactory || (\u0275StepPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelsStyle)))(__ngFactoryType__ || _StepPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelsStyle,
    factory: _StepPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelsClasses;
(function(StepPanelsClasses2) {
  StepPanelsClasses2["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));
var classes$2 = {
  root: ({
    instance
  }) => ["p-steppanel", {
    "p-steppanel-active": instance.isVertical() && instance.active()
  }],
  content: "p-steppanel-content"
};
var StepPanelStyle = class _StepPanelStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelStyle_BaseFactory;
    return function StepPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelStyle_BaseFactory || (\u0275StepPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelStyle)))(__ngFactoryType__ || _StepPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelStyle,
    factory: _StepPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelClasses;
(function(StepPanelClasses2) {
  StepPanelClasses2["root"] = "p-steppanel";
})(StepPanelClasses || (StepPanelClasses = {}));
var theme = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    .p-steppanel:not(.p-steppanel-active) > .p-steppanel-content,
    .p-steppanel-content.ng-animating {
        overflow: hidden;
    }
`
);
var classes$1 = {
  root: ({
    instance
  }) => ["p-stepper p-component", {
    "p-readonly": instance.linear()
  }],
  separator: "p-stepper-separator"
};
var StepperStyle = class _StepperStyle extends BaseStyle {
  name = "stepper";
  theme = theme;
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperStyle_BaseFactory;
    return function StepperStyle_Factory(__ngFactoryType__) {
      return (\u0275StepperStyle_BaseFactory || (\u0275StepperStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepperStyle)))(__ngFactoryType__ || _StepperStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepperStyle,
    factory: _StepperStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStyle, [{
    type: Injectable
  }], null, null);
})();
var StepperClasses;
(function(StepperClasses2) {
  StepperClasses2["root"] = "p-stepper";
  StepperClasses2["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));
var classes2 = {
  root: ({
    instance
  }) => ["p-step", {
    "p-step-active": instance.active(),
    "p-disabled": instance.isStepDisabled()
  }],
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = class _StepStyle extends BaseStyle {
  name = "step";
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepStyle_BaseFactory;
    return function StepStyle_Factory(__ngFactoryType__) {
      return (\u0275StepStyle_BaseFactory || (\u0275StepStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepStyle)))(__ngFactoryType__ || _StepStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepStyle,
    factory: _StepStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepStyle, [{
    type: Injectable
  }], null, null);
})();
var StepClasses;
(function(StepClasses2) {
  StepClasses2["root"] = "p-step";
  StepClasses2["header"] = "p-step-header";
  StepClasses2["number"] = "p-step-number";
  StepClasses2["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));
var StepList = class _StepList extends BaseComponent {
  steps = contentChildren(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  _componentStyle = inject(StepListStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepList_BaseFactory;
    return function StepList_Factory(__ngFactoryType__) {
      return (\u0275StepList_BaseFactory || (\u0275StepList_BaseFactory = \u0275\u0275getInheritedFactory(_StepList)))(__ngFactoryType__ || _StepList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepList,
    selectors: [["p-step-list"]],
    contentQueries: function StepList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function StepList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepListStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function StepList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepList, [{
    type: Component,
    args: [{
      selector: "p-step-list",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepListStyle]
    }]
  }], null, null);
})();
var StepperSeparator = class _StepperSeparator extends BaseComponent {
  _componentStyle = inject(StepperStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperSeparator_BaseFactory;
    return function StepperSeparator_Factory(__ngFactoryType__) {
      return (\u0275StepperSeparator_BaseFactory || (\u0275StepperSeparator_BaseFactory = \u0275\u0275getInheritedFactory(_StepperSeparator)))(__ngFactoryType__ || _StepperSeparator);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepper-separator"]],
    hostVars: 2,
    hostBindings: function StepperSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("separator"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepper-separator",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("separator")'
      },
      providers: [StepperStyle]
    }]
  }], null, null);
})();
var StepItem = class _StepItem extends BaseComponent {
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Value of step.
   * @type {<number | undefined>}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  isActive = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "isActive"
  }] : []);
  step = contentChild(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "step"
  }] : []);
  stepPanel = contentChild(forwardRef(() => StepPanel), ...ngDevMode ? [{
    debugName: "stepPanel"
  }] : []);
  constructor() {
    super();
    effect(() => {
      this.step().value.set(this.value());
    });
    effect(() => {
      this.stepPanel().value.set(this.value());
    });
  }
  _componentStyle = inject(StepItemStyle);
  static \u0275fac = function StepItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepItem,
    selectors: [["p-step-item"]],
    contentQueries: function StepItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.step, Step, 5);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepPanel, StepPanel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 3,
    hostBindings: function StepItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-active", ctx.isActive());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepItemStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function StepItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItem, [{
    type: Component,
    args: [{
      selector: "p-step-item",
      standalone: true,
      imports: [CommonModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.data-p-active]": "isActive()"
      },
      providers: [StepItemStyle]
    }]
  }], () => [], null);
})();
var Step = class _Step extends BaseComponent {
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * Whether the step is disabled.
   * @type {boolean}
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  active = computed(() => this.pcStepper.isStepActive(this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...ngDevMode ? [{
    debugName: "isStepDisabled"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepList()) {
      const steps = this.pcStepper.stepList().steps();
      const index = steps.indexOf(this);
      const stepLen = steps.length;
      return index !== stepLen - 1;
    } else {
      return false;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  /**
   * Content template.
   * @type {TemplateRef<StepContentTemplateContext>}
   * @group Templates
   */
  content;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onStepClick() {
    this.pcStepper.updateValue(this.value());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Step_BaseFactory;
    return function Step_Factory(__ngFactoryType__) {
      return (\u0275Step_BaseFactory || (\u0275Step_BaseFactory = \u0275\u0275getInheritedFactory(_Step)))(__ngFactoryType__ || _Step);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Step,
    selectors: [["p-step"]],
    contentQueries: function Step_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function Step_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.active() ? "step" : void 0)("role", "presentation")("data-p-active", ctx.active())("data-p-disabled", ctx.isStepDisabled())("data-pc-name", "step");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 3, "click", "tabindex", "disabled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Step_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Step_Conditional_0_Template, 6, 13)(1, Step_Conditional_1_Template, 2, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.content && !ctx._contentTemplate ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{
      selector: "p-step",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule],
      template: `
        @if (!content && !_contentTemplate) {
            <button [attr.id]="id()" [class]="cx('header')" [attr.role]="'tab'" [tabindex]="isStepDisabled() ? -1 : undefined" [attr.aria-controls]="ariaControls()" [disabled]="isStepDisabled()" (click)="onStepClick()" type="button">
                <span [class]="cx('number')">{{ value() }}</span>
                <span [class]="cx('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.aria-current]": 'active() ? "step" : undefined',
        "[attr.role]": '"presentation"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "isStepDisabled()",
        "[attr.data-pc-name]": '"step"'
      },
      providers: [StepStyle]
    }]
  }], null, {
    content: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanel = class _StepPanel extends BaseComponent {
  pcStepper = inject(forwardRef(() => Stepper));
  transitionOptions = computed(() => this.pcStepper.transitionOptions(), ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : []);
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  active = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  visible = signal(this.active(), ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  isVisible = computed(() => this.active() || this.isVertical() && this.visible(), ...ngDevMode ? [{
    debugName: "isVisible"
  }] : []);
  ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...ngDevMode ? [{
    debugName: "isVertical"
  }] : []);
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepItems()) {
      const stepLen = this.pcStepper.stepItems().length;
      const stepPanelElements = Y(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
      const index = C(this.el.nativeElement, stepPanelElements);
      return index !== stepLen - 1;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : []);
  /**
   * Content template.
   * @param {StepPanelContentTemplateContext} context - Context of the template
   * @see {@link StepPanelContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepPanelStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    if (event.toState === "visible") {
      this.visible.set(true);
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "hidden") {
      this.visible.set(false);
    }
  }
  updateValue(value) {
    this.pcStepper.updateValue(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanel_BaseFactory;
    return function StepPanel_Factory(__ngFactoryType__) {
      return (\u0275StepPanel_BaseFactory || (\u0275StepPanel_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanel)))(__ngFactoryType__ || _StepPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanel,
    selectors: [["p-step-panel"]],
    contentQueries: function StepPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c16, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function StepPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tabpanel")("aria-controls", ctx.ariaControls())("id", ctx.id())("data-p-active", ctx.active())("data-pc-name", "steppanel");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 13,
    consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StepPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, StepPanel_Conditional_0_Template, 1, 0, "p-stepper-separator");
        \u0275\u0275elementStart(1, "div");
        \u0275\u0275listener("@content.start", function StepPanel_Template_div_animation_content_start_1_listener($event) {
          return ctx.onAnimationStart($event);
        })("@content.done", function StepPanel_Template_div_animation_content_done_1_listener($event) {
          return ctx.onAnimationEnd($event);
        });
        \u0275\u0275conditionalCreate(2, StepPanel_Conditional_2_Template, 1, 6, "ng-container");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isSeparatorVisible() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("@content", ctx.isVertical() ? ctx.active() ? \u0275\u0275pureFunction1(7, _c43, \u0275\u0275pureFunction1(5, _c34, ctx.transitionOptions())) : \u0275\u0275pureFunction1(11, _c53, \u0275\u0275pureFunction1(9, _c34, ctx.transitionOptions())) : void 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isVisible() ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("content", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanel, [{
    type: Component,
    args: [{
      selector: "p-step-panel",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule],
      template: `
        @if (isSeparatorVisible()) {
            <p-stepper-separator />
        }
        <div
            [class]="cx('content')"
            [@content]="isVertical() ? (active() ? { value: 'visible', params: { transitionParams: transitionOptions() } } : { value: 'hidden', params: { transitionParams: transitionOptions() } }) : undefined"
            (@content.start)="onAnimationStart($event)"
            (@content.done)="onAnimationEnd($event)"
        >
            @if (isVisible()) {
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
            }
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tabpanel"',
        "[attr.aria-controls]": "ariaControls()",
        "[attr.id]": "id()",
        "[attr.data-p-active]": "active()",
        "[attr.data-pc-name]": '"steppanel"'
      },
      animations: [trigger("content", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")]), transition("void => *", animate(0))])],
      providers: [StepPanelStyle]
    }]
  }], null, {
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanels = class _StepPanels extends BaseComponent {
  _componentStyle = inject(StepPanelsStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanels_BaseFactory;
    return function StepPanels_Factory(__ngFactoryType__) {
      return (\u0275StepPanels_BaseFactory || (\u0275StepPanels_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanels)))(__ngFactoryType__ || _StepPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanels,
    selectors: [["p-step-panels"]],
    hostVars: 2,
    hostBindings: function StepPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelsStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function StepPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanels, [{
    type: Component,
    args: [{
      selector: "p-step-panels",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepPanelsStyle]
    }]
  }], null, null);
})();
var Stepper = class _Stepper extends BaseComponent {
  /**
   * A model that can hold a numeric value or be undefined.
   * @defaultValue undefined
   * @type {ModelSignal<number | undefined>}
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * A boolean variable that captures user input.
   * @defaultValue false
   * @type {InputSignalWithTransform<any, boolean >}
   * @group Props
   */
  linear = input(false, ...ngDevMode ? [{
    debugName: "linear",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Transition options of the animation.
   * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
   * @type {InputSignal<string >}
   * @group Props
   */
  transitionOptions = input("400ms cubic-bezier(0.86, 0, 0.07, 1)", ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : []);
  _componentStyle = inject(StepperStyle);
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  stepItems = contentChildren(StepItem, ...ngDevMode ? [{
    debugName: "stepItems"
  }] : []);
  steps = contentChildren(Step, ...ngDevMode ? [{
    debugName: "steps"
  }] : []);
  stepList = contentChild(StepList, ...ngDevMode ? [{
    debugName: "stepList"
  }] : []);
  updateValue(value) {
    this.value.set(value);
  }
  isStepActive(value) {
    return this.value() === value;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Stepper_BaseFactory;
    return function Stepper_Factory(__ngFactoryType__) {
      return (\u0275Stepper_BaseFactory || (\u0275Stepper_BaseFactory = \u0275\u0275getInheritedFactory(_Stepper)))(__ngFactoryType__ || _Stepper);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepItems, StepItem, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepList, StepList, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tablist")("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      linear: [1, "linear"],
      transitionOptions: [1, "transitionOptions"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepperStyle],
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tablist"',
        "[attr.id]": "id()"
      }
    }]
  }], null, null);
})();
var StepperModule = class _StepperModule {
  static \u0275fac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepperModule,
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule],
    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule],
      exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/components/stepper/stepper.component.ts
var _c08 = (a0) => ({ $implicit: a0 });
var _c17 = (a0, a1, a2) => ({ "justify-end": a0, "justify-between": a1, "justify-start": a2 });
var _forTrack03 = ($index, $item) => $item.value;
function StepperComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("value", step_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.header);
  }
}
function StepperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-list");
    \u0275\u0275repeaterCreate(1, StepperComponent_Conditional_2_For_2_Template, 2, 2, "p-step", 2, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.steps());
  }
}
function StepperComponent_For_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getPrevStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getNextStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("disabled", step_r5.disableNext);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.complete.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("loading", ctx_r1.loading());
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template, 1, 0, "p-button", 8);
    \u0275\u0275conditionalCreate(2, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template, 1, 1, "p-button", 9)(3, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template, 1, 1, "p-button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c17, ctx_r1.isFirstStep(step_r5.value), !ctx_r1.isFirstStep(step_r5.value) && !ctx_r1.isLastStep(step_r5.value), ctx_r1.isLastStep(step_r5.value)));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isFirstStep(step_r5.value) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep(step_r5.value) ? 2 : 3);
  }
}
function StepperComponent_For_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275template(2, StepperComponent_For_5_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StepperComponent_For_5_ng_template_1_Conditional_3_Template, 4, 7, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r5.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c08, step_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNavButtons() ? 3 : -1);
  }
}
function StepperComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-panel", 2);
    \u0275\u0275template(1, StepperComponent_For_5_ng_template_1_Template, 4, 5, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    \u0275\u0275property("value", step_r5.value);
  }
}
var StepperComponent = class _StepperComponent {
  steps = input([]);
  currentStepValue = model(1);
  showNavButtons = input(true);
  linearProgression = input(false);
  containerClass = input("basis-[50rem]");
  showSteps = input(true);
  stepChange = output();
  complete = output();
  nextStep = output();
  prevStep = output();
  loading = input(false);
  isLastStep(value) {
    return value === Math.max(...this.steps().map((s2) => s2.value));
  }
  isFirstStep(value) {
    return value === Math.min(...this.steps().map((s2) => s2.value));
  }
  getNextStep(currentValue) {
    const sortedValues = [...this.steps().map((s2) => s2.value)].sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex + 1] || currentValue;
  }
  getPrevStep(currentValue) {
    const sortedValues = [...this.steps().map((s2) => s2.value)].sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex - 1] || currentValue;
  }
  // Methods for external navigation
  goNext() {
    const nextStep = this.getNextStep(this.currentStepValue());
    if (nextStep !== this.currentStepValue()) {
      this.currentStepValue.set(nextStep);
      this.stepChange.emit(nextStep);
      this.nextStep.emit(nextStep);
    }
  }
  goBack() {
    const prevStep = this.getPrevStep(this.currentStepValue());
    if (prevStep !== this.currentStepValue()) {
      this.currentStepValue.set(prevStep);
      this.stepChange.emit(prevStep);
      this.prevStep.emit(prevStep);
    }
  }
  // Check if we can finish the wizard
  canFinish() {
    return this.isLastStep(this.currentStepValue()) && !(this.getCurrentStep()?.disableNext ?? false);
  }
  // Get the current step object
  getCurrentStep() {
    return this.steps().find((s2) => s2.value === this.currentStepValue());
  }
  static \u0275fac = function StepperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperComponent, selectors: [["app-stepper"]], inputs: { steps: [1, "steps"], currentStepValue: [1, "currentStepValue"], showNavButtons: [1, "showNavButtons"], linearProgression: [1, "linearProgression"], containerClass: [1, "containerClass"], showSteps: [1, "showSteps"], loading: [1, "loading"] }, outputs: { currentStepValue: "currentStepValueChange", stepChange: "stepChange", complete: "complete", nextStep: "nextStep", prevStep: "prevStep" }, decls: 6, vars: 5, consts: [[1, "card", "flex", "justify-center"], [3, "value", "linear"], [3, "value"], ["pTemplate", "content"], [1, "flex", "flex-col"], [1, "min-h-48"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "pt-6", 3, "ngClass"], ["label", "Back", "severity", "secondary", "icon", "pi pi-arrow-left"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "disabled"], ["label", "Finish", "icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "loading"], ["label", "Back", "severity", "secondary", "icon", "pi pi-arrow-left", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "disabled"], ["label", "Finish", "icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "onClick", "loading"]], template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-stepper", 1);
      \u0275\u0275conditionalCreate(2, StepperComponent_Conditional_2_Template, 3, 0, "p-step-list");
      \u0275\u0275elementStart(3, "p-step-panels");
      \u0275\u0275repeaterCreate(4, StepperComponent_For_5_Template, 2, 1, "p-step-panel", 2, _forTrack03);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.containerClass());
      \u0275\u0275property("value", ctx.currentStepValue())("linear", ctx.linearProgression());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSteps() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.steps());
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, ButtonModule, Button, PrimeTemplate, StepperModule, Stepper, StepList, StepPanels, StepPanel, Step], styles: ["\n\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{ selector: "app-stepper", imports: [CommonModule, ButtonModule, StepperModule], template: `<div class="card flex justify-center">
  <p-stepper
    [value]="currentStepValue()"
    [class]="containerClass()"
    [linear]="linearProgression()"
  >
    @if (showSteps()) {
      <p-step-list>
        @for (step of steps(); track step.value) {
          <p-step [value]="step.value">{{ step.header }}</p-step>
        }
      </p-step-list>
    }
    <p-step-panels>
      @for (step of steps(); track step.value) {
        <p-step-panel [value]="step.value">
          <ng-template
            pTemplate="content"
            let-activateCallback="activateCallback"
          >
            <div class="flex flex-col">
              <div class="min-h-48">
                <!-- Content container -->
                <ng-container
                  *ngTemplateOutlet="step.content; context: { $implicit: step }"
                ></ng-container>
              </div>

              @if (showNavButtons()) {
                <div
                  class="flex pt-6"
                  [ngClass]="{
                    'justify-end': isFirstStep(step.value),
                    'justify-between':
                      !isFirstStep(step.value) && !isLastStep(step.value),
                    'justify-start': isLastStep(step.value),
                  }"
                >
                  @if (!isFirstStep(step.value)) {
                    <p-button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      (onClick)="activateCallback(getPrevStep(step.value))"
                    />
                  }

                  @if (!isLastStep(step.value)) {
                    <p-button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      (onClick)="activateCallback(getNextStep(step.value))"
                      [disabled]="step.disableNext"
                    />
                  } @else {
                    <p-button
                      label="Finish"
                      icon="pi pi-check"
                      iconPos="right"
                      severity="success"
                      [loading]="loading()"
                      (onClick)="complete.emit()"
                    />
                  }
                </div>
              }
            </div>
          </ng-template>
        </p-step-panel>
      }
    </p-step-panels>
  </p-stepper>
</div>
`, styles: ["/* src/app/shared/components/stepper/stepper.component.scss */\n:host ::ng-deep .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n:host ::ng-deep .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "src/app/shared/components/stepper/stepper.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/wizard/wizard.component.ts
function WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p-button", 4);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_0_Conditional_2_Conditional_2_Template, 1, 0, "p-button", 5);
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template, 1, 1, "p-button", 6);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template, 1, 2, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 4 : -1);
  }
}
function WizardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_0_Template_app_stepper_stepChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_0_Template_app_stepper_complete_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_0_Conditional_2_Template, 5, 3, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep)("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showFooterButtons() ? 2 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r1.canGoNext());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-button", 4);
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_2_Template, 1, 0, "p-button", 5);
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template, 1, 1, "p-button", 6);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template, 1, 2, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 4 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template, 5, 3, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.showFooterButtons() ? 0 : -1);
  }
}
function WizardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 11);
    \u0275\u0275listener("onHide", function WizardComponent_Conditional_1_Template_p_dialog_onHide_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    })("visibleChange", function WizardComponent_Conditional_1_Template_p_dialog_visibleChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_1_Template_app_stepper_stepChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_1_Template_app_stepper_complete_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, WizardComponent_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", ctx_r1.visible())("header", ctx_r1.header())("modal", true)("draggable", false)("resizable", false)("closeOnEscape", ctx_r1.closeOnEscape());
    \u0275\u0275advance(2);
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep)("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
  }
}
var WizardComponent = class _WizardComponent {
  stepper;
  // Input properties
  steps = input([]);
  visible = model(false);
  header = input("Wizard");
  linearProgression = input(true);
  showFooterButtons = input(true);
  closeOnEscape = input(true);
  useWizardButtonsOnly = input(false);
  showSteps = input(true);
  contentOnly = input(false);
  loading = model(false);
  // Output properties
  visibleChange = output();
  onCancel = output();
  complete = output();
  stepChange = output();
  // Component state
  currentStep = 1;
  hideDialog() {
    this.visible.set(false);
    this.visibleChange.emit(false);
  }
  cancelWizard() {
    this.onCancel.emit();
    this.hideDialog();
  }
  onComplete() {
    if (this.steps().length === 0) {
      console.warn("No steps defined in the wizard");
      return;
    }
    this.complete.emit(this.steps());
    this.hideDialog();
  }
  test() {
    this.loading.set(true);
  }
  onStepComplete() {
    this.onComplete();
  }
  onStepChange(step) {
    this.currentStep = step;
    this.stepChange.emit(step);
  }
  isLastStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep === Math.max(...this.steps().map((s2) => s2.value));
  }
  isFirstStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep === Math.min(...this.steps().map((s2) => s2.value));
  }
  // Methods for footer buttons
  async goNext() {
    const currentStepData = this.steps().find((s2) => s2.value === this.currentStep);
    if (currentStepData?.validate) {
      const validationResult = currentStepData.validate();
      if (validationResult instanceof Promise) {
        await validationResult.then((isValid) => {
          if (isValid) {
            this.stepper?.goNext();
          }
        });
      } else if (validationResult) {
        this.stepper?.goNext();
      }
    } else {
      this.stepper?.goNext();
    }
  }
  canGoNext() {
    const currentStepData = this.steps().find((s2) => s2.value === this.currentStep);
    return !this.isLastStep() && !(currentStepData?.disableNext ?? false);
  }
  goBack() {
    this.stepper?.goBack();
  }
  canFinish() {
    return this.isLastStep() && (this.stepper?.canFinish() ?? false);
  }
  static \u0275fac = function WizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardComponent, selectors: [["app-wizard"]], viewQuery: function WizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(StepperComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
    }
  }, inputs: { steps: [1, "steps"], visible: [1, "visible"], header: [1, "header"], linearProgression: [1, "linearProgression"], showFooterButtons: [1, "showFooterButtons"], closeOnEscape: [1, "closeOnEscape"], useWizardButtonsOnly: [1, "useWizardButtonsOnly"], showSteps: [1, "showSteps"], contentOnly: [1, "contentOnly"], loading: [1, "loading"] }, outputs: { visible: "visibleChange", loading: "loadingChange", visibleChange: "visibleChange", onCancel: "onCancel", complete: "complete", stepChange: "stepChange" }, decls: 2, vars: 1, consts: [["styleClass", "wizard-dialog", 3, "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], [1, "wizard-content"], [3, "stepChange", "complete", "steps", "currentStepValue", "linearProgression", "showNavButtons", "showSteps", "loading"], [1, "flex", "justify-end", "gap-2", "w-full", "mt-3"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "disabled"], ["label", "Finish", "icon", "pi pi-check", "severity", "primary", 3, "disabled", "loading"], ["label", "Back", "icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick"], ["label", "Next", "icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "disabled"], ["label", "Finish", "icon", "pi pi-check", "severity", "primary", 3, "onClick", "disabled", "loading"], ["styleClass", "wizard-dialog", 3, "onHide", "visibleChange", "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], ["pTemplate", "footer"], [1, "flex", "justify-end", "gap-2", "w-full"]], template: function WizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_0_Template, 3, 7)(1, WizardComponent_Conditional_1_Template, 4, 12, "p-dialog", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.contentOnly() ? 0 : 1);
    }
  }, dependencies: [CommonModule, DialogModule, Dialog, PrimeTemplate, ButtonModule, Button, StepperComponent], styles: ["\n\n[_nghost-%COMP%]     .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 90vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]     .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 90vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardComponent, [{
    type: Component,
    args: [{ selector: "app-wizard", standalone: true, imports: [CommonModule, DialogModule, ButtonModule, StepperComponent], template: `<!-- If contentOnly is true, don't use p-dialog -->
@if (contentOnly()) {
  <div class="wizard-content">
    <app-stepper
      [steps]="steps()"
      [currentStepValue]="currentStep"
      [linearProgression]="linearProgression()"
      [showNavButtons]="!useWizardButtonsOnly()"
      [showSteps]="showSteps()"
      [loading]="loading()"
      (stepChange)="onStepChange($event)"
      (complete)="onStepComplete()"
    >
    </app-stepper>
  </div>
  <!-- Footer buttons without dialog -->
  @if (showFooterButtons()) {
    <div class="flex justify-end gap-2 w-full mt-3">
      <p-button
        label="Cancel"
        icon="pi pi-times"
        severity="secondary"
        (onClick)="cancelWizard()"
      ></p-button>
      @if (!isFirstStep()) {
        <p-button
          label="Back"
          icon="pi pi-arrow-left"
          severity="secondary"
          (onClick)="goBack()"
        ></p-button>
      }
      @if (!isLastStep()) {
        <p-button
          label="Next"
          icon="pi pi-arrow-right"
          iconPos="right"
          [disabled]="!canGoNext()"
          (onClick)="goNext()"
        ></p-button>
      }
      @if (isLastStep()) {
        <p-button
          label="Finish"
          icon="pi pi-check"
          severity="primary"
          [disabled]="!canFinish()"
          [loading]="loading()"
          (onClick)="onComplete()"
        ></p-button>
      }
    </div>
  }
} @else {
  <p-dialog
    [visible]="visible()"
    [header]="header()"
    [modal]="true"
    [draggable]="false"
    [resizable]="false"
    [closeOnEscape]="closeOnEscape()"
    (onHide)="hideDialog()"
    (visibleChange)="hideDialog()"
    styleClass="wizard-dialog"
  >
    <!-- Existing dialog content -->
    <div class="wizard-content">
      <app-stepper
        [steps]="steps()"
        [currentStepValue]="currentStep"
        [linearProgression]="linearProgression()"
        [showNavButtons]="!useWizardButtonsOnly()"
        [showSteps]="showSteps()"
        [loading]="loading()"
        (stepChange)="onStepChange($event)"
        (complete)="onStepComplete()"
      >
      </app-stepper>
    </div>
    <ng-template pTemplate="footer">
      <!-- Existing footer buttons -->
      @if (showFooterButtons()) {
        <div class="flex justify-end gap-2 w-full">
          <p-button
            label="Cancel"
            icon="pi pi-times"
            severity="secondary"
            (onClick)="cancelWizard()"
          ></p-button>
          @if (!isFirstStep()) {
            <p-button
              label="Back"
              icon="pi pi-arrow-left"
              severity="secondary"
              (onClick)="goBack()"
            ></p-button>
          }
          @if (!isLastStep()) {
            <p-button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              [disabled]="!canGoNext()"
              (onClick)="goNext()"
            ></p-button>
          }
          @if (isLastStep()) {
            <p-button
              label="Finish"
              icon="pi pi-check"
              severity="primary"
              [disabled]="!canFinish()"
              [loading]="loading()"
              (onClick)="onComplete()"
            ></p-button>
          }
        </div>
      }
    </ng-template>
  </p-dialog>
}

<!-- Original dialog version -->
`, styles: ["/* src/app/shared/components/wizard/wizard.component.scss */\n:host ::ng-deep .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 90vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n:host ::ng-deep .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n:host ::ng-deep .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content {\n  height: auto;\n  max-height: 90vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=wizard.component.css.map */\n"] }]
  }], null, { stepper: [{
    type: ViewChild,
    args: [StepperComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardComponent, { className: "WizardComponent", filePath: "src/app/shared/components/wizard/wizard.component.ts", lineNumber: 15 });
})();

// src/app/features/administration/components/device-providers/device-provider-create-wizard/device-provider-create-wizard.component.ts
var _c09 = ["deviceProviderDetailsStep"];
var _c18 = ["deviceProviderParametersStep"];
var _c25 = ["confirmationTemplate"];
var _c35 = ["deviceProviderDetailsForm"];
var _c44 = ["deviceProviderParametersForm"];
function DeviceProviderCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-device-provider-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function DeviceProviderCreateWizardComponent_ng_template_1_Template_app_device_provider_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function DeviceProviderCreateWizardComponent_ng_template_1_Template_app_device_provider_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceProviderDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDeviceProvider())("ownerId", ctx_r2.ownerId);
  }
}
function DeviceProviderCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-device-provider-parameters-section", 8, 4);
    \u0275\u0275listener("formValidityChange", function DeviceProviderCreateWizardComponent_ng_template_3_Template_app_device_provider_parameters_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onParametersFormValidityChange($event));
    })("formValueChange", function DeviceProviderCreateWizardComponent_ng_template_3_Template_app_device_provider_parameters_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceProviderParameters($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDeviceProvider())("deviceProviderType", ctx_r2.deviceProviderType());
  }
}
function DeviceProviderCreateWizardComponent_ng_template_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r5.title, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_16_0 = ctx_r2.newDeviceProvider().parameters) == null ? null : tmp_16_0[item_r5.key], " ");
  }
}
function DeviceProviderCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Device Provider. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(18, DeviceProviderCreateWizardComponent_ng_template_5_For_19_Template, 5, 2, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Click finish to create this Device Provider.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r2.newDeviceProvider().deviceProviderType) == null ? null : tmp_5_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceProvider().name || "Not provided", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.deviceProviderParametersFields());
  }
}
var DeviceProviderCreateWizardComponent = class _DeviceProviderCreateWizardComponent {
  deviceProviderDetailsStep;
  deviceProviderParametersStep;
  confirmationTemplate;
  // References to form components
  deviceProviderDetailsForm;
  deviceProviderParametersForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  cacheService = inject(RequestCacheService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // DeviceProvider model to collect data across steps
  newDeviceProvider = signal({});
  deviceProviderParametersFields = signal(null);
  deviceProviderType = signal(null);
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps[0].content = this.deviceProviderDetailsStep;
      this.steps[0].validate = () => this.deviceProviderDetailsForm.validate();
      this.steps[1].content = this.deviceProviderParametersStep;
      this.steps[1].validate = () => this.deviceProviderParametersForm.validate();
      this.steps[2].content = this.confirmationTemplate;
      this.steps[2].validate = () => true;
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newDeviceProvider.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
    this.steps = [
      {
        value: 1,
        header: "Device Provider Details",
        complete: false,
        content: null
      },
      {
        value: 2,
        header: "Device Provider Parameters",
        content: null,
        complete: false
      },
      {
        value: 3,
        header: "Confirmation",
        complete: true,
        content: null
      }
    ];
  }
  openWizard() {
    this.displayWizard = true;
    this.newDeviceProvider.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onParametersFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  updateDeviceProviderDetails(formData) {
    this.newDeviceProvider.update((current) => {
      const _a = formData, { ownerId: _ownerId } = _a, rest = __objRest(_a, ["ownerId"]);
      const updated = __spreadValues(__spreadValues({}, current), rest);
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
    this.loadDeviceProviderType(this.newDeviceProvider().deviceProviderType?.id).catch(() => {
    });
  }
  updateDeviceProviderParameters(formData) {
    this.newDeviceProvider.update((current) => {
      const updated = __spreadValues(__spreadValues({}, current), formData);
      return updated;
    });
  }
  onWizardComplete() {
    const deviceProviderData = this.newDeviceProvider();
    if (isNullOrUndefined(deviceProviderData) || Object.keys(deviceProviderData).length === 0) {
      return;
    }
    this.isSubmitting.set(true);
    this.entitiesService.createDeviceProvider(deviceProviderData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "device-provider",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newDeviceProvider.set({});
    this.dialogRef.close();
  }
  async loadDeviceProviderType(deviceProviderTypeId) {
    if (isNullOrUndefined(deviceProviderTypeId))
      return;
    await this.cacheService.getOrFetchAsync(`deviceProviderType-${deviceProviderTypeId}`, () => firstValueFrom(this.entitiesService.getDeviceProviderType(deviceProviderTypeId)), 3e5).then((response) => {
      this.deviceProviderType.set(response);
      const params = JSON.parse(response.parameters);
      const values = [];
      params.groups.forEach((group) => {
        group.fields.forEach((field) => {
          values.push({
            key: field.id,
            title: field.title
          });
        });
      });
      this.deviceProviderParametersFields.set(values);
    });
  }
  static \u0275fac = function DeviceProviderCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceProviderCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceProviderCreateWizardComponent, selectors: [["app-device-provider-create-wizard"]], viewQuery: function DeviceProviderCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c09, 5);
      \u0275\u0275viewQuery(_c18, 5);
      \u0275\u0275viewQuery(_c25, 7);
      \u0275\u0275viewQuery(_c35, 5);
      \u0275\u0275viewQuery(_c44, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceProviderDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceProviderParametersStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceProviderDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceProviderParametersForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["deviceProviderDetailsStep", ""], ["deviceProviderParametersStep", ""], ["confirmationTemplate", ""], ["deviceProviderDetailsForm", ""], ["deviceProviderParametersForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "deviceProviderType"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function DeviceProviderCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function DeviceProviderCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function DeviceProviderCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, DeviceProviderCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DeviceProviderCreateWizardComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, DeviceProviderCreateWizardComponent_ng_template_5_Template, 23, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    DeviceProviderDetailsSectionComponent,
    DeviceProviderParametersSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceProviderCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-device-provider-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      DeviceProviderDetailsSectionComponent,
      DeviceProviderParametersSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Device Provider Details -->
<ng-template #deviceProviderDetailsStep let-step>
  <div class="p-fluid">
    <app-device-provider-details-section
      #deviceProviderDetailsForm
      [createMode]="true"
      [entity]="newDeviceProvider()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateDeviceProviderDetails($event)"
    ></app-device-provider-details-section>
  </div>
</ng-template>

<ng-template #deviceProviderParametersStep let-step>
  <div class="p-fluid">
    <app-device-provider-parameters-section
      #deviceProviderParametersForm
      [createMode]="true"
      [entity]="newDeviceProvider()"
      [deviceProviderType]="deviceProviderType()"
      (formValidityChange)="onParametersFormValidityChange($event)"
      (formValueChange)="updateDeviceProviderParameters($event)"
    ></app-device-provider-parameters-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Device Provider Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Device Provider.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Type:</div>
              <div class="w-2/3">
                {{ newDeviceProvider().deviceProviderType?.name }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newDeviceProvider().name || 'Not provided' }}
              </div>
            </div>

            @for (item of deviceProviderParametersFields(); track $index) {
              <div class="flex">
                <div class="w-1/3 font-medium">{{ item.title }}:</div>
                <div class="w-2/3">
                  {{ newDeviceProvider().parameters?.[item.key] }}
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Device Provider.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { deviceProviderDetailsStep: [{
    type: ViewChild,
    args: ["deviceProviderDetailsStep"]
  }], deviceProviderParametersStep: [{
    type: ViewChild,
    args: ["deviceProviderParametersStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], deviceProviderDetailsForm: [{
    type: ViewChild,
    args: ["deviceProviderDetailsForm"]
  }], deviceProviderParametersForm: [{
    type: ViewChild,
    args: ["deviceProviderParametersForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceProviderCreateWizardComponent, { className: "DeviceProviderCreateWizardComponent", filePath: "src/app/features/administration/components/device-providers/device-provider-create-wizard/device-provider-create-wizard.component.ts", lineNumber: 47 });
})();

// src/app/features/administration/configs/device-providers.grid.config.ts
var DeviceProvidersGridConfig = class _DeviceProvidersGridConfig {
  deviceProvidersService = inject(DeviceProvidersDataAdapter);
  entitiesService = inject(EntitiesService);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  destroyRef = inject(DestroyRef);
  defaultStateValues = [
    DeviceProviderListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = {};
  fieldTransformations = {
    type: () => "deviceProviderType.id"
  };
  dialogRef = null;
  dialogService = inject(DialogService);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    suspended: "Suspended"
  };
  entityType = "device-providers";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "type",
      header: "Type",
      filter: true,
      filterType: "toggle",
      filterMatchMode: "in",
      filterConfig: {
        type: "toggle",
        options: []
      },
      valueGetter: (rowData) => {
        return rowData.deviceProviderType?.name ?? "";
      }
    },
    {
      field: "state",
      header: "State",
      filter: true,
      filterType: "toggle",
      filterMatchMode: "in",
      filterConfig: {
        type: "toggle",
        options: [
          { label: "Active", value: DeviceProviderListItem.StateEnum.Active },
          { label: "Deleted", value: DeviceProviderListItem.StateEnum.Deleted },
          {
            label: "Suspended",
            value: DeviceProviderListItem.StateEnum.Suspended
          }
        ],
        defaultSelected: this.defaultStateValues
      },
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : ""
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.deviceProvidersService;
  ownerId = "";
  loadFilterOptions() {
    this.entitiesService.listDeviceProviderTypes(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef), tap((types) => {
      const typeColumn = this.columns.find((col) => col.field === "type");
      if (typeColumn?.filterConfig) {
        typeColumn.filterConfig.options = types.items.map((type) => ({
          label: type.name,
          value: type.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
    })).subscribe();
  }
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({});
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
    this.loadFilterOptions();
  }
  getTitle() {
    return "Device Providers";
  }
  getRequestParams(event) {
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField: "name",
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openDeviceProviderCreationDialog(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((createdDeviceProvider) => {
      if (isDefined(createdDeviceProvider)) {
      }
    });
  }
  openDeviceProviderCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(DeviceProviderCreateWizardComponent, {
      header: "Device Provider Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function DeviceProvidersGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceProvidersGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceProvidersGridConfig, factory: _DeviceProvidersGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceProvidersGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/email-providers/email-provider-create-wizard/email-provider-create-wizard.component.ts
var _c010 = ["emailProviderDetailsStep"];
var _c19 = ["emailProviderParametersStep"];
var _c26 = ["confirmationTemplate"];
var _c36 = ["emailProviderDetailsForm"];
var _c45 = ["emailProviderParametersForm"];
function EmailProviderCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-email-provider-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function EmailProviderCreateWizardComponent_ng_template_1_Template_app_email_provider_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function EmailProviderCreateWizardComponent_ng_template_1_Template_app_email_provider_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateEmailProviderDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newEmailProvider())("ownerId", ctx_r2.ownerId);
  }
}
function EmailProviderCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-email-provider-parameters-section", 8, 4);
    \u0275\u0275listener("formValidityChange", function EmailProviderCreateWizardComponent_ng_template_3_Template_app_email_provider_parameters_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onParametersFormValidityChange($event));
    })("formValueChange", function EmailProviderCreateWizardComponent_ng_template_3_Template_app_email_provider_parameters_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateEmailProviderParameters($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newEmailProvider())("emailProviderType", ctx_r2.emailProviderType());
  }
}
function EmailProviderCreateWizardComponent_ng_template_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r5.title, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_16_0 = ctx_r2.newEmailProvider().parameters) == null ? null : tmp_16_0[item_r5.key], " ");
  }
}
function EmailProviderCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Email Provider. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(18, EmailProviderCreateWizardComponent_ng_template_5_For_19_Template, 5, 2, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 19)(21, "p", 20);
    \u0275\u0275text(22, "Click finish to create this Email Provider.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r2.newEmailProvider().type) == null ? null : tmp_5_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newEmailProvider().name || "Not provided", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.emailProviderParametersFields());
  }
}
var EmailProviderCreateWizardComponent = class _EmailProviderCreateWizardComponent {
  emailProviderDetailsStep;
  emailProviderParametersStep;
  confirmationTemplate;
  // References to form components
  emailProviderDetailsForm;
  emailProviderParametersForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  cacheService = inject(RequestCacheService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // EmailProvider model to collect data across steps
  newEmailProvider = signal({});
  emailProviderParametersFields = signal(null);
  emailProviderType = signal(null);
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps[0].content = this.emailProviderDetailsStep;
      this.steps[0].validate = () => this.emailProviderDetailsForm.validate();
      this.steps[1].content = this.emailProviderParametersStep;
      this.steps[1].validate = () => this.emailProviderParametersForm.validate();
      this.steps[2].content = this.confirmationTemplate;
      this.steps[2].validate = () => true;
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newEmailProvider.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
    this.steps = [
      {
        value: 1,
        header: "Email Provider Details",
        complete: false,
        content: null
      },
      {
        value: 2,
        header: "Email Provider Parameters",
        content: null,
        complete: false
      },
      {
        value: 3,
        header: "Confirmation",
        complete: true,
        content: null
      }
    ];
  }
  openWizard() {
    this.displayWizard = true;
    this.newEmailProvider.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onParametersFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  updateEmailProviderDetails(formData) {
    this.newEmailProvider.update((current) => {
      const _a = formData, { ownerId: _ownerId } = _a, rest = __objRest(_a, ["ownerId"]);
      const updated = __spreadValues(__spreadValues({}, current), rest);
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
    this.loadEmailProviderType(this.newEmailProvider()["type"]?.id).catch(() => {
    });
  }
  updateEmailProviderParameters(formData) {
    this.newEmailProvider.update((current) => {
      const updated = __spreadValues(__spreadValues({}, current), formData);
      return updated;
    });
  }
  onWizardComplete() {
    const emailProviderData = this.newEmailProvider();
    if (isNullOrUndefined(emailProviderData) || Object.keys(emailProviderData).length === 0) {
      return;
    }
    this.isSubmitting.set(true);
    this.entitiesService.createEmailProvider(emailProviderData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "email-provider",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newEmailProvider.set({});
    this.dialogRef.close();
  }
  async loadEmailProviderType(emailProviderTypeId) {
    if (isNullOrUndefined(emailProviderTypeId))
      return;
    try {
      const response = await this.cacheService.getOrFetchAsync(`emailProviderType-${emailProviderTypeId}`, () => firstValueFrom(this.entitiesService.getEmailProviderType(emailProviderTypeId)), 3e5);
      this.emailProviderType.set(response);
      this.processEmailProviderParameters(response);
    } catch (error) {
      console.error("Failed to load email provider type:", error);
    }
  }
  processEmailProviderParameters(emailProviderType) {
    const parameterDefinition = emailProviderType?.parameterDefinition ?? "{}";
    try {
      const params = JSON.parse(parameterDefinition);
      const fields = this.extractFieldsFromGroups(params.groups);
      this.emailProviderParametersFields.set(fields);
    } catch (error) {
      console.error("Failed to parse parameter definition:", error);
      this.emailProviderParametersFields.set([]);
    }
  }
  extractFieldsFromGroups(groups) {
    const fields = [];
    groups.forEach((group) => {
      group.fields.forEach((field) => {
        this.addFieldToCollection(field, fields);
        this.addConditionalFields(field, fields);
      });
    });
    return fields;
  }
  addFieldToCollection(field, fields) {
    fields.push({
      key: field.id,
      title: field.title
    });
  }
  addConditionalFields(field, fields) {
    if (!field.values)
      return;
    field.values.forEach((value) => {
      if (isDefined(value.fields)) {
        value.fields.forEach((subField) => {
          this.addFieldToCollection(subField, fields);
          this.addConditionalFields(subField, fields);
        });
      }
    });
  }
  static \u0275fac = function EmailProviderCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailProviderCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailProviderCreateWizardComponent, selectors: [["app-email-provider-create-wizard"]], viewQuery: function EmailProviderCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c010, 5);
      \u0275\u0275viewQuery(_c19, 5);
      \u0275\u0275viewQuery(_c26, 7);
      \u0275\u0275viewQuery(_c36, 5);
      \u0275\u0275viewQuery(_c45, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emailProviderDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emailProviderParametersStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emailProviderDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emailProviderParametersForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["emailProviderDetailsStep", ""], ["emailProviderParametersStep", ""], ["confirmationTemplate", ""], ["emailProviderDetailsForm", ""], ["emailProviderParametersForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "emailProviderType"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function EmailProviderCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function EmailProviderCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function EmailProviderCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, EmailProviderCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, EmailProviderCreateWizardComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, EmailProviderCreateWizardComponent_ng_template_5_Template, 23, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    EmailProviderDetailsSectionComponent,
    EmailProviderParametersSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailProviderCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-email-provider-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      EmailProviderDetailsSectionComponent,
      EmailProviderParametersSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Email Provider Details -->
<ng-template #emailProviderDetailsStep let-step>
  <div class="p-fluid">
    <app-email-provider-details-section
      #emailProviderDetailsForm
      [createMode]="true"
      [entity]="newEmailProvider()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateEmailProviderDetails($event)"
    ></app-email-provider-details-section>
  </div>
</ng-template>

<ng-template #emailProviderParametersStep let-step>
  <div class="p-fluid">
    <app-email-provider-parameters-section
      #emailProviderParametersForm
      [createMode]="true"
      [entity]="newEmailProvider()"
      [emailProviderType]="emailProviderType()"
      (formValidityChange)="onParametersFormValidityChange($event)"
      (formValueChange)="updateEmailProviderParameters($event)"
    ></app-email-provider-parameters-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Email Provider Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Email Provider.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Type:</div>
              <div class="w-2/3">
                {{ newEmailProvider().type?.name }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newEmailProvider().name || 'Not provided' }}
              </div>
            </div>

            @for (item of emailProviderParametersFields(); track $index) {
              <div class="flex">
                <div class="w-1/3 font-medium">{{ item.title }}:</div>
                <div class="w-2/3">
                  {{ newEmailProvider().parameters?.[item.key] }}
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Email Provider.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { emailProviderDetailsStep: [{
    type: ViewChild,
    args: ["emailProviderDetailsStep"]
  }], emailProviderParametersStep: [{
    type: ViewChild,
    args: ["emailProviderParametersStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], emailProviderDetailsForm: [{
    type: ViewChild,
    args: ["emailProviderDetailsForm"]
  }], emailProviderParametersForm: [{
    type: ViewChild,
    args: ["emailProviderParametersForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailProviderCreateWizardComponent, { className: "EmailProviderCreateWizardComponent", filePath: "src/app/features/administration/components/email-providers/email-provider-create-wizard/email-provider-create-wizard.component.ts", lineNumber: 58 });
})();

// src/app/features/administration/configs/email-providers.grid.config.ts
var EmailProvidersGridConfig = class _EmailProvidersGridConfig {
  emailProvidersService = inject(EmailProvidersDataAdapter);
  entitiesService = inject(EntitiesService);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  apiSchemaService = inject(ApiSchemaService);
  destroyRef = inject(DestroyRef);
  defaultStateValues = [
    EmailProviderListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = {};
  fieldTransformations = {
    type: "type.id"
  };
  dialogRef = null;
  dialogService = inject(DialogService);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    suspended: "Suspended"
  };
  entityType = "email-providers";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "type",
      header: "Type",
      filter: true,
      filterType: "toggle",
      filterMatchMode: "in",
      filterConfig: {
        type: "toggle",
        options: []
      },
      valueGetter: (rowData) => {
        const typeValue = this.apiSchemaService.getEntityType(rowData, "emailprovider");
        return typeValue?.name ?? "";
      }
    },
    {
      field: "state",
      header: "State",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: EmailProviderListItem.StateEnum.Active },
          { label: "Deleted", value: EmailProviderListItem.StateEnum.Deleted },
          {
            label: "Suspended",
            value: EmailProviderListItem.StateEnum.Suspended
          }
        ],
        defaultSelected: this.defaultStateValues
      },
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : ""
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.emailProvidersService;
  ownerId = "";
  loadFilterOptions() {
    this.entitiesService.listEmailProviderTypes(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef), tap((types) => {
      const typeColumn = this.columns.find((col) => col.field === "type");
      if (typeColumn?.filterConfig) {
        typeColumn.filterConfig.options = types.items.map((type) => ({
          label: type.name ?? "",
          value: type.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
    })).subscribe();
  }
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({});
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
    this.loadFilterOptions();
  }
  getTitle() {
    return "Email Providers";
  }
  getRequestParams(event) {
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField: "name",
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openEmailProviderCreationDialog(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((createdEmailProvider) => {
      if (isDefined(createdEmailProvider)) {
      }
    });
  }
  openEmailProviderCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(EmailProviderCreateWizardComponent, {
      header: "Email Provider Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function EmailProvidersGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailProvidersGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailProvidersGridConfig, factory: _EmailProvidersGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailProvidersGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/assets/asset-create-wizard/asset-create-wizard.component.ts
var _c011 = ["assetDetailsStep"];
var _c110 = ["assetCategoriesStep"];
var _c27 = ["confirmationTemplate"];
var _c37 = ["infoSectionStep"];
var _c46 = ["assetDetailsForm"];
var _c54 = ["assetCategoriesForm"];
var _c6 = ["infoSectionForm"];
var _forTrack04 = ($index, $item) => $item.key;
function AssetCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "app-asset-details-section", 9, 4);
    \u0275\u0275listener("formValidityChange", function AssetCreateWizardComponent_ng_template_1_Template_app_asset_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetCreateWizardComponent_ng_template_1_Template_app_asset_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAsset())("ownerId", ctx_r2.ownerId);
  }
}
function AssetCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "app-asset-categories-section", 9, 5);
    \u0275\u0275listener("formValidityChange", function AssetCreateWizardComponent_ng_template_3_Template_app_asset_categories_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCategoriesFormValidityChange($event));
    })("formValueChange", function AssetCreateWizardComponent_ng_template_3_Template_app_asset_categories_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetCategories($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAsset())("ownerId", ctx_r2.ownerId);
  }
}
function AssetCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "app-info-section", 10, 6);
    \u0275\u0275listener("formValidityChange", function AssetCreateWizardComponent_ng_template_5_Template_app_info_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInfoFormValidityChange($event));
    })("formValueChange", function AssetCreateWizardComponent_ng_template_5_Template_app_info_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateInfoSection($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAsset());
  }
}
function AssetCreateWizardComponent_ng_template_7_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r6.key, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r6.value);
  }
}
function AssetCreateWizardComponent_ng_template_7_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2, "Categories:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4, "No categories selected");
    \u0275\u0275elementEnd()();
  }
}
function AssetCreateWizardComponent_ng_template_7_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", field_r7.key, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r7.value);
  }
}
function AssetCreateWizardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "p", 16);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "div", 19);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 19);
    \u0275\u0275text(15, "Asset Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 19);
    \u0275\u0275text(20, "Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 18)(24, "div", 19);
    \u0275\u0275text(25, "Asset Tag:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 19);
    \u0275\u0275text(30, "Cost Centre:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 18)(34, "div", 19);
    \u0275\u0275text(35, "Tags:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 20);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 18)(39, "div", 19);
    \u0275\u0275text(40, "Groups:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 20);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(43, AssetCreateWizardComponent_ng_template_7_For_44_Template, 5, 2, "div", 18, _forTrack04);
    \u0275\u0275conditionalCreate(45, AssetCreateWizardComponent_ng_template_7_Conditional_45_Template, 5, 0, "div", 18);
    \u0275\u0275repeaterCreate(46, AssetCreateWizardComponent_ng_template_7_For_47_Template, 5, 2, "div", 18, _forTrack04);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 21)(49, "p", 22);
    \u0275\u0275text(50, "Click finish to create this Asset.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newAsset().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAsset().assetType.name || "Not selected", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAsset().color || "Not selected", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.newAsset().assetTag || "None");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAsset().costCentre.name || "Not selected", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.convertStringCollectionToNameStrings(ctx_r2.newAsset().tags), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.convertIdNameCollectionToNameStrings(ctx_r2.newAsset().groups), " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.getCategoriesAsKeyValuePairs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getCategoriesAsKeyValuePairs().length === 0 ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.infoSectionFields());
  }
}
var AssetCreateWizardComponent = class _AssetCreateWizardComponent {
  assetDetailsStep;
  assetCategoriesStep;
  confirmationTemplate;
  infoSectionStep;
  // References to form components
  assetDetailsForm;
  assetCategoriesForm;
  infoSectionForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cacheInvalidationService = inject(CacheInvalidationService);
  assetGroupingService = inject(AssetGroupingService);
  // Asset model to collect data across steps
  newAsset = signal({});
  infoSectionFields = computed(() => {
    const asset = this.newAsset();
    if (!asset.fields) {
      return [];
    }
    const customFields = this.infoSectionForm?.entityCustomFields?.();
    if (Array.isArray(customFields) && customFields.length > 0) {
      return customFields.map((field) => ({
        key: field["title"] ?? "Field",
        value: this.formatFieldValue(asset.fields?.[field["id"]], field["type"])
      }));
    }
    return Object.entries(asset.fields).map(([key, value]) => ({
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value: this.formatFieldValue(value, "text")
    }));
  });
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  ownerId = null;
  assetCategories = [];
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps = [
        {
          value: 1,
          header: "Asset Details",
          content: this.assetDetailsStep,
          complete: false,
          validate: () => this.assetDetailsForm.validate()
        },
        {
          value: 2,
          header: "Categories",
          content: this.assetCategoriesStep,
          complete: false,
          validate: () => this.assetCategoriesForm.validate()
        },
        {
          value: 3,
          header: "Info",
          content: this.infoSectionStep,
          complete: false,
          validate: () => this.infoSectionForm.validate()
        },
        {
          value: 4,
          header: "Confirmation",
          content: this.confirmationTemplate,
          complete: true
        }
      ];
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAsset.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
      this.assetGroupingService.getAssetCategories(this.ownerId ?? DEFAULT_SYSTEM_ID).then((assetCategories) => {
        this.assetCategories = assetCategories;
      }).catch(() => {
        this.assetCategories = [];
      });
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newAsset.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onCategoriesFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onInfoFormValidityChange(isValid) {
    this.steps[2].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the asset state with form data
  updateAssetDetails(formData) {
    this.newAsset.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateAssetCategories(formData) {
    this.newAsset.update((current) => {
      const updated = __spreadValues({}, current);
      updated.categories = isEmpty(formData.categories) ? null : formData.categories;
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateInfoSection(formData) {
    this.newAsset.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        updated[key] = formData[key];
      });
      return updated;
    });
  }
  onWizardComplete() {
    const assetData = this.newAsset();
    this.isSubmitting.set(true);
    this.entitiesService.createAsset(assetData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.cacheInvalidationService.clearAssetCategoryCaches();
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating asset:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAsset.set({});
    this.dialogRef.close();
  }
  convertIdNameCollectionToNameStrings(collection) {
    if (!Array.isArray(collection))
      return "";
    return collection.map((item) => item.name).join(", ");
  }
  convertStringCollectionToNameStrings(collection) {
    if (!Array.isArray(collection))
      return "";
    return collection.join(", ");
  }
  // Get categories formatted as key-value pairs for display
  getCategoriesAsKeyValuePairs() {
    const asset = this.newAsset();
    if (!asset.categories || asset.categories.length === 0) {
      return [];
    }
    const parentCategories = this.assetCategories.filter((cat) => cat.parent === DEFAULT_SYSTEM_ID);
    const result = [];
    parentCategories.forEach((parentCat) => {
      const selectedCategory = asset.categories?.find((selectedCat) => {
        const fullCategory = this.assetCategories.find((cat) => cat.id === selectedCat.id);
        return fullCategory?.index === parentCat.index;
      });
      if (selectedCategory) {
        result.push({
          key: parentCat.name ?? "Category",
          value: selectedCategory.name ?? "Selected"
        });
      }
    });
    return result;
  }
  // Helper method to format field values based on type
  formatFieldValue(value, type) {
    if (value === null || value === void 0) {
      return "Not set";
    }
    switch (type) {
      case "boolean":
        return value === true ? "Yes" : "No";
      case "date":
        if (value instanceof Date) {
          return value.toLocaleDateString();
        }
        return typeof value === "string" ? value : JSON.stringify(value);
      case "number":
        return typeof value === "number" ? value.toString() : JSON.stringify(value);
      default:
        return typeof value === "string" ? value : JSON.stringify(value);
    }
  }
  static \u0275fac = function AssetCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCreateWizardComponent, selectors: [["app-asset-create-wizard"]], viewQuery: function AssetCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c011, 5);
      \u0275\u0275viewQuery(_c110, 7);
      \u0275\u0275viewQuery(_c27, 7);
      \u0275\u0275viewQuery(_c37, 7);
      \u0275\u0275viewQuery(_c46, 5);
      \u0275\u0275viewQuery(_c54, 5);
      \u0275\u0275viewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetCategoriesStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoSectionStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetCategoriesForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.infoSectionForm = _t.first);
    }
  }, decls: 9, vars: 5, consts: [["assetDetailsStep", ""], ["assetCategoriesStep", ""], ["infoSectionStep", ""], ["confirmationTemplate", ""], ["assetDetailsForm", ""], ["assetCategoriesForm", ""], ["infoSectionForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], ["entityType", "asset", 3, "formValidityChange", "formValueChange", "createMode", "entity"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 7);
      \u0275\u0275listener("complete", function AssetCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetCreateWizardComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, AssetCreateWizardComponent_ng_template_5_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, AssetCreateWizardComponent_ng_template_7_Template, 51, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetDetailsSectionComponent,
    AssetCategoriesSectionComponent,
    InfoSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-create-wizard", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetDetailsSectionComponent,
      AssetCategoriesSectionComponent,
      InfoSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Asset Details -->
<ng-template #assetDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-details-section
      #assetDetailsForm
      [createMode]="true"
      [entity]="newAsset()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetDetails($event)"
    ></app-asset-details-section>
  </div>
</ng-template>

<ng-template #assetCategoriesStep let-step>
  <div class="p-fluid">
    <app-asset-categories-section
      #assetCategoriesForm
      [createMode]="true"
      [entity]="newAsset()"
      [ownerId]="ownerId"
      (formValidityChange)="onCategoriesFormValidityChange($event)"
      (formValueChange)="updateAssetCategories($event)"
    ></app-asset-categories-section>
  </div>
</ng-template>

<ng-template #infoSectionStep let-step>
  <div class="p-fluid">
    <app-info-section
      #infoSectionForm
      [createMode]="true"
      [entity]="newAsset()"
      entityType="asset"
      (formValidityChange)="onInfoFormValidityChange($event)"
      (formValueChange)="updateInfoSection($event)"
    ></app-info-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Asset Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newAsset().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Asset Type:</div>
              <div class="w-2/3">
                {{ newAsset().assetType.name || 'Not selected' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Color:</div>
              <div class="w-2/3">
                {{ newAsset().color || 'Not selected' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Asset Tag:</div>
              <div class="w-2/3">{{ newAsset().assetTag || 'None' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Cost Centre:</div>
              <div class="w-2/3">
                {{ newAsset().costCentre.name || 'Not selected' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Tags:</div>
              <div class="w-2/3">
                {{ convertStringCollectionToNameStrings(newAsset().tags) }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Groups:</div>
              <div class="w-2/3">
                {{ convertIdNameCollectionToNameStrings(newAsset().groups) }}
              </div>
            </div>

            <!-- Asset Categories Section -->
            @for (
              category of getCategoriesAsKeyValuePairs();
              track category.key
            ) {
              <div class="flex">
                <div class="w-1/3 font-medium">{{ category.key }}:</div>
                <div class="w-2/3">{{ category.value }}</div>
              </div>
            }

            @if (getCategoriesAsKeyValuePairs().length === 0) {
              <div class="flex">
                <div class="w-1/3 font-medium">Categories:</div>
                <div class="w-2/3">No categories selected</div>
              </div>
            }

            <!-- Info Section Custom Fields -->
            @for (field of infoSectionFields(); track field.key) {
              <div class="flex">
                <div class="w-1/3 font-medium">{{ field.key }}:</div>
                <div class="w-2/3">{{ field.value }}</div>
              </div>
            }
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetDetailsStep: [{
    type: ViewChild,
    args: ["assetDetailsStep"]
  }], assetCategoriesStep: [{
    type: ViewChild,
    args: ["assetCategoriesStep", { static: true }]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], infoSectionStep: [{
    type: ViewChild,
    args: ["infoSectionStep", { static: true }]
  }], assetDetailsForm: [{
    type: ViewChild,
    args: ["assetDetailsForm"]
  }], assetCategoriesForm: [{
    type: ViewChild,
    args: ["assetCategoriesForm"]
  }], infoSectionForm: [{
    type: ViewChild,
    args: ["infoSectionForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCreateWizardComponent, { className: "AssetCreateWizardComponent", filePath: "src/app/features/administration/components/assets/asset-create-wizard/asset-create-wizard.component.ts", lineNumber: 73 });
})();

// src/app/features/administration/configs/assets.grid.config.ts
var AssetsGridConfig = class _AssetsGridConfig {
  entityType = "assets";
  assetsService = inject(AssetsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  entitiesService = inject(EntitiesService);
  adminStateService = inject(AdminStateService);
  assetGroupingService = inject(AssetGroupingService);
  defaultStateValues = ["active", "suspended", "inactive"];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  paramsSignal = signal({
    clientId: ""
  });
  destroyRef = inject(DestroyRef);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(__spreadValues(__spreadValues({}, this.filterState()), {
    "owner.id": {
      value: this.paramsSignal()["clientId"],
      operator: "="
    }
  })));
  fieldTransformations = {
    costCentre: "costCentre.id",
    assetType: "assetType.id",
    groups: "groups.id",
    categories: "categories.id"
  };
  columnsSignal = signal([]);
  get columns() {
    return this.columnsSignal();
  }
  baseColumns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "assetType",
      header: "Type",
      valueGetter: (rowData) => isDefined(rowData.assetType?.name) ? rowData.assetType?.name : "",
      filterType: "multiselect",
      filter: true,
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: "active" },
          { label: "Suspended", value: "suspended" },
          { label: "Deleted", value: "deleted" },
          { label: "Inactive", value: "inactive" }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "costCentre",
      header: "Cost Centre",
      valueGetter: (rowData) => isDefined(rowData.costCentre?.name) ? rowData.costCentre?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "groups",
      header: "Groups",
      valueGetter: (rowData) => isDefined(rowData.groups) ? rowData.groups.map((g) => g.name).join(", ") : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "devices",
      header: "Devices",
      valueGetter: (rowData) => isDefined(rowData.devices) ? rowData.devices.map((d) => d.name).join(", ") : "",
      filter: true,
      filterType: "text"
    },
    {
      field: "cameras",
      header: "Cameras",
      filter: false
    },
    {
      field: "linkedFrom",
      header: "Linked From Client",
      valueGetter: (rowData) => {
        return isDefined(rowData["linkedFrom"]) ? rowData["linkedFrom"].map((l) => l).join(", ") : "";
      },
      filter: true,
      filterType: "text"
    },
    {
      field: "linkedTo",
      header: "Linked To Client",
      valueGetter: (rowData) => {
        return isDefined(rowData["linkedTo"]) ? rowData["linkedTo"].map((l) => l).join(", ") : "";
      },
      filter: true,
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => {
        return isDefined(rowData["modifiedDate"]) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : rowData["modifiedDate"];
      }
    }
  ];
  defaultVisibleColumns = [
    "name",
    "assetType",
    "state",
    "costCentre",
    "groups",
    "devices",
    "cameras",
    "modifiedDate"
  ];
  dataService = this.assetsService;
  constructor() {
    effect(() => {
      const client = this.adminStateService.selectedClient();
      if (isDefined(client?.id)) {
        void this.buildColumns(client);
      }
    });
  }
  async buildColumns(client) {
    const clientId = client.id;
    await this.assetGroupingService.getAssetCategories(clientId).then((assetCategories) => {
      const newColumns = [...this.baseColumns];
      this.addCategoryColumns(newColumns, assetCategories);
      this.addCustomFieldColumns(newColumns, client);
      this.columnsSignal.set(newColumns);
    });
  }
  addCategoryColumns(columns, assetCategories) {
    const deviceIndex = columns.findIndex((col) => col.field === "devices");
    const insertIndex = deviceIndex !== -1 ? deviceIndex : columns.length - 2;
    const categoryColumns = assetCategories.filter((category) => category.parent === DEFAULT_SYSTEM_ID).map((category) => this.createCategoryColumn(category, assetCategories));
    columns.splice(insertIndex, 0, ...categoryColumns);
  }
  createCategoryColumn(category, assetCategories) {
    return {
      field: `category.${category.index}`,
      header: isDefined(category.name) ? category.name : `Category ${category.index}`,
      valueGetter: (rowData) => {
        const cat = isDefined(category?.index) ? rowData.categories[category.index] : void 0;
        return isDefined(cat) ? cat.name : "";
      },
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: assetCategories.filter((c) => c.parent === category.id).map((c) => ({ label: isDefined(c.name) ? c.name : "", value: c.id })).sort((a, b) => a.label.localeCompare(b.label))
      }
    };
  }
  addCustomFieldColumns(columns, client) {
    const modifiedIndex = columns.findIndex((col) => col.field === "modifiedDate");
    const customFieldInsertIndex = modifiedIndex !== -1 ? modifiedIndex : columns.length;
    const customFieldColumns = (client?.customFields?.asset ?? []).map((customField) => ({
      field: `customFields.${customField.id}`,
      header: customField.title,
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    }));
    columns.splice(customFieldInsertIndex, 0, ...customFieldColumns);
  }
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.paramsSignal.set(params);
    this.loadFilterOptions();
    const client = this.adminStateService.selectedClient();
    if (isDefined(client?.id)) {
      void this.buildColumns(client);
    }
  }
  getTitle() {
    return "Assets";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.paramsSignal()["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    let actualField = this.fieldTransformations[field] || field;
    if (field.startsWith("category.")) {
      actualField = "categories.id";
    }
    const column = this.columnsSignal().find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  loadFilterOptions() {
    combineLatest([
      this.entitiesService.listAssetTypes(this.paramsSignal()["clientId"]),
      this.entitiesService.listCostCentres(this.paramsSignal()["clientId"]),
      this.entitiesService.listAssetGroups(this.paramsSignal()["clientId"])
    ]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe(([types, costCentres, listAssetGroups]) => {
      const currentColumns = this.columnsSignal();
      const typeColumn = currentColumns.find((col) => col.field === "assetType");
      if (typeColumn?.filterConfig) {
        typeColumn.filterConfig.options = types.items.map((type) => ({
          label: type.name,
          value: type.id
        })).sort((a, b) => (a.label ?? "").localeCompare(b.label ?? ""));
      }
      const costCentreColumn = currentColumns.find((col) => col.field === "costCentre");
      if (costCentreColumn?.filterConfig) {
        costCentreColumn.filterConfig.options = costCentres.items.map((costCentre) => ({
          label: costCentre.name ?? "",
          value: costCentre.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
      const groupColumn = currentColumns.find((col) => col.field === "groups");
      if (groupColumn?.filterConfig) {
        groupColumn.filterConfig.options = listAssetGroups.items.map((group) => ({
          label: group.name ?? "",
          value: group.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
      this.columnsSignal.set([...currentColumns]);
    });
  }
  onAdd() {
    const clientId = this.paramsSignal()["clientId"];
    this.openAssetCreationDialog(clientId).subscribe((createdAsset) => {
      if (isDefined(createdAsset)) {
      }
    });
  }
  openAssetCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetCreateWizardComponent, {
      header: "Asset Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: {
        ownerId
      },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetsGridConfig, factory: _AssetsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/features/administration/components/alerts/alert-create-wizard/alert-create-wizard.component.ts
var _c012 = ["alertDetailsStep"];
var _c111 = ["confirmationTemplate"];
var _c28 = ["alertDetailsForm"];
function AlertCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-alert-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AlertCreateWizardComponent_ng_template_1_Template_app_alert_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AlertCreateWizardComponent_ng_template_1_Template_app_alert_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAlertDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAlert())("ownerId", ctx_r2.ownerId);
  }
}
function AlertCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Alert. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Cost Center:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "Notify:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 17);
    \u0275\u0275text(30, "Click finish to create this Alert.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newAlert().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r2.newAlert().costCentre) == null ? null : tmp_5_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAlert().priority || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getNotificationIndividualNames(ctx_r2.newAlert().notify), " ");
  }
}
var AlertCreateWizardComponent = class _AlertCreateWizardComponent {
  alertDetailsStep;
  confirmationTemplate;
  // References to form components
  alertDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  alertIconStorageService = inject(AlertIconStorageService);
  // Alert model to collect data across steps
  newAlert = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Alert Details",
        content: this.alertDetailsStep,
        complete: false,
        validate: () => this.alertDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAlert.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newAlert.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the alert state with form data
  updateAlertDetails(formData) {
    this.newAlert.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const alertData = this.newAlert();
    const iconName = alertData?.iconName;
    const _a = alertData, { iconName: _ } = _a, apiAlertData = __objRest(_a, ["iconName"]);
    this.isSubmitting.set(true);
    this.entitiesService.createAlert(apiAlertData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        if (isDefined(iconName) && iconName !== "") {
          this.alertIconStorageService.setAlertIcon(response.id, iconName);
        }
        this.broadcastService.broadcast("entity-updated", {
          entityType: "alert",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating alert:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAlert.set({});
    this.dialogRef.close();
  }
  getNotificationIndividualNames(notify) {
    if (!notify)
      return "";
    return notify.map((individual) => individual.name).join(", ");
  }
  static \u0275fac = function AlertCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertCreateWizardComponent, selectors: [["app-alert-create-wizard"]], viewQuery: function AlertCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c012, 5);
      \u0275\u0275viewQuery(_c111, 7);
      \u0275\u0275viewQuery(_c28, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alertDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["alertDetailsStep", ""], ["confirmationTemplate", ""], ["alertDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AlertCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AlertCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AlertCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AlertCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AlertCreateWizardComponent_ng_template_3_Template, 31, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AlertDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-alert-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AlertDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Alert Details -->
<ng-template #alertDetailsStep let-step>
  <div class="p-fluid">
    <app-alert-details-section
      #alertDetailsForm
      [createMode]="true"
      [entity]="newAlert()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAlertDetails($event)"
    ></app-alert-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Alert Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Alert.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newAlert().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Cost Center:</div>
              <div class="w-2/3">
                {{ newAlert().costCentre?.name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Priority:</div>
              <div class="w-2/3">
                {{ newAlert().priority || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Notify:</div>
              <div class="w-2/3">
                {{ getNotificationIndividualNames(newAlert().notify) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Alert.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { alertDetailsStep: [{
    type: ViewChild,
    args: ["alertDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], alertDetailsForm: [{
    type: ViewChild,
    args: ["alertDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertCreateWizardComponent, { className: "AlertCreateWizardComponent", filePath: "src/app/features/administration/components/alerts/alert-create-wizard/alert-create-wizard.component.ts", lineNumber: 45 });
})();

// src/app/features/administration/configs/alerts.grid.config.ts
var AlertsGridConfig = class _AlertsGridConfig {
  alertsService = inject(AlertsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [AlertListItem.StateEnum.Active];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    costCentre: "costCentre.id"
  };
  priorityLabels = {
    high: "High",
    medium: "Medium",
    low: "Low"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "alerts";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "costCentre",
      header: "Cost Centre",
      valueGetter: (rowData) => isDefined(rowData.costCentre?.name) ? rowData.costCentre?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "priority",
      header: "Priority",
      valueGetter: (rowData) => isDefined(rowData.priority) ? this.priorityLabels[rowData.priority] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "High", value: AlertListItem.PriorityEnum.High },
          { label: "Medium", value: AlertListItem.PriorityEnum.Medium },
          { label: "Low", value: AlertListItem.PriorityEnum.Low }
        ]
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: AlertListItem.StateEnum.Active },
          { label: "Deleted", value: AlertListItem.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.alertsService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Alerts";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openAlertCreationDialog(clientId).subscribe((createdAlert) => {
      if (isDefined(createdAlert)) {
      }
    });
  }
  openAlertCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AlertCreateWizardComponent, {
      header: "Alert Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AlertsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertsGridConfig, factory: _AlertsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/asset-tags/asset-tag-create-wizard/asset-tag-create-wizard.component.ts
var _c013 = ["assetTagDetailsStep"];
var _c112 = ["confirmationTemplate"];
var _c29 = ["assetTagDetailsForm"];
function AssetTagCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-asset-tag-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AssetTagCreateWizardComponent_ng_template_1_Template_app_asset_tag_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetTagCreateWizardComponent_ng_template_1_Template_app_asset_tag_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetTagDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAssetTag())("ownerId", ctx_r2.ownerId);
  }
}
function AssetTagCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset Tag. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Serial Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Tag Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 17);
    \u0275\u0275text(30, "Click finish to create this Asset Tag.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetTag().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetTag().serialNumber || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetTag().assetTagType.name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetTag().mode, " ");
  }
}
var AssetTagCreateWizardComponent = class _AssetTagCreateWizardComponent {
  assetTagDetailsStep;
  confirmationTemplate;
  // References to form components
  assetTagDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // AssetTag model to collect data across steps
  newAssetTag = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Asset Tag Details",
        content: this.assetTagDetailsStep,
        complete: false,
        validate: () => this.assetTagDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAssetTag.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newAssetTag.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the assetTag state with form data
  updateAssetTagDetails(formData) {
    this.newAssetTag.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const assetTagData = this.newAssetTag();
    this.isSubmitting.set(true);
    this.entitiesService.createAssetTag(assetTagData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset-tag",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating asset tag:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAssetTag.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function AssetTagCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetTagCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetTagCreateWizardComponent, selectors: [["app-asset-tag-create-wizard"]], viewQuery: function AssetTagCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c013, 5);
      \u0275\u0275viewQuery(_c112, 7);
      \u0275\u0275viewQuery(_c29, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetTagDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetTagDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["assetTagDetailsStep", ""], ["confirmationTemplate", ""], ["assetTagDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetTagCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AssetTagCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetTagCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetTagCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetTagCreateWizardComponent_ng_template_3_Template, 31, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetTagDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetTagCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-tag-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetTagDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: AssetTag Details -->
<ng-template #assetTagDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-tag-details-section
      #assetTagDetailsForm
      [createMode]="true"
      [entity]="newAssetTag()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetTagDetails($event)"
    ></app-asset-tag-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- AssetTag Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset Tag.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newAssetTag().name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Serial Number:</div>
              <div class="w-2/3">
                {{ newAssetTag().serialNumber || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Tag Type:</div>
              <div class="w-2/3">
                {{ newAssetTag().assetTagType.name || 'Not provided' }}
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="w-1/3 font-medium">Mode:</div>
            <div class="w-2/3">
              {{ newAssetTag().mode }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset Tag.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetTagDetailsStep: [{
    type: ViewChild,
    args: ["assetTagDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], assetTagDetailsForm: [{
    type: ViewChild,
    args: ["assetTagDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetTagCreateWizardComponent, { className: "AssetTagCreateWizardComponent", filePath: "src/app/features/administration/components/asset-tags/asset-tag-create-wizard/asset-tag-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/asset-tags.grid.config.ts
var AssetTagsGridConfig = class _AssetTagsGridConfig {
  assetTagsService = inject(AssetTagsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [AssetTagListItem.StateEnum.Active];
  filterState = signal({
    state: { value: this.defaultStateValues, operator: "in" }
  });
  params = { clientId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    tagType: "assetTagType.name",
    asset: "asset.name"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "asset-tags";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "serialNumber",
      header: "Serial Number",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "tagType",
      header: "Tag Type",
      valueGetter: (rowData) => rowData.assetTagType?.name ?? "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "mode",
      header: "Mode",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Movable", value: AssetTagListItem.ModeEnum.Movable },
          { label: "Fixed", value: AssetTagListItem.ModeEnum.Fixed },
          { label: "Stock", value: AssetTagListItem.ModeEnum.Stock }
        ]
      },
      transform: "capitalize"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: AssetTagListItem.StateEnum.Active },
          { label: "Deleted", value: AssetTagListItem.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "asset",
      header: "Asset",
      valueGetter: (rowData) => rowData.asset?.name ?? "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData["modifiedDate"]) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.assetTagsService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: { value: this.defaultStateValues, operator: "in" }
    });
  }
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Asset Tags";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openAssetTagCreationDialog(clientId).subscribe();
  }
  openAssetTagCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetTagCreateWizardComponent, {
      header: "Asset Tag Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetTagsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetTagsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetTagsGridConfig, factory: _AssetTagsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetTagsGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/device/device-create-wizard/device-create-wizard.component.ts
var _c014 = ["deviceDetailsStep"];
var _c113 = ["deviceInfoStep"];
var _c210 = ["confirmationTemplate"];
var _c38 = ["deviceDetailsForm"];
var _c47 = ["deviceInfoForm"];
function DeviceCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-device-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function DeviceCreateWizardComponent_ng_template_1_Template_app_device_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function DeviceCreateWizardComponent_ng_template_1_Template_app_device_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDevice())("ownerId", ctx_r2.ownerId);
  }
}
function DeviceCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-info-section", 8, 4);
    \u0275\u0275listener("formValidityChange", function DeviceCreateWizardComponent_ng_template_3_Template_app_info_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInfoFormValidityChange($event));
    })("formValueChange", function DeviceCreateWizardComponent_ng_template_3_Template_app_info_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceInfo($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDevice());
  }
}
function DeviceCreateWizardComponent_ng_template_5_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5 == null ? null : item_r5["title"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_16_0 = ctx_r2.newDevice()["fields"]) == null ? null : tmp_16_0[item_r5["id"]]) || "Not provided", " ");
  }
}
function DeviceCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Device. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10, "Serial Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "Device Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 17);
    \u0275\u0275text(20, "Configuration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275repeaterCreate(24, DeviceCreateWizardComponent_ng_template_5_For_25_Template, 5, 2, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 19)(27, "p", 20);
    \u0275\u0275text(28, "Click finish to create this Device.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newDevice().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDevice().deviceType.name || "Not selected", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.newDevice().configProfile) == null ? null : tmp_7_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.entityCustomFields());
  }
}
var DeviceCreateWizardComponent = class _DeviceCreateWizardComponent {
  deviceDetailsStep;
  deviceInfoStep;
  confirmationTemplate;
  // References to form components
  deviceDetailsForm;
  deviceInfoForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  adminStateService = inject(AdminStateService);
  entityCustomFields = signal([]);
  // Device model to collect data across steps
  newDevice = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps = [
        {
          value: 1,
          header: "Device Details",
          content: this.deviceDetailsStep,
          complete: false,
          validate: () => this.deviceDetailsForm.validate()
        },
        {
          value: 2,
          header: "Device Information",
          content: this.deviceInfoStep,
          complete: false,
          validate: () => this.deviceInfoForm.validate()
        },
        {
          value: 3,
          header: "Confirmation",
          content: this.confirmationTemplate,
          complete: true
        }
      ];
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newDevice.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
    const selectedClient = this.adminStateService.selectedClient();
    if (selectedClient) {
      this.entityCustomFields.set([
        ...selectedClient.customFields?.["device"] ?? []
      ]);
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newDevice.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onInfoFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the device state with form data
  updateDeviceDetails(formData) {
    this.newDevice.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateDeviceInfo(formData) {
    this.newDevice.update((current) => {
      const updated = __spreadValues({}, current);
      updated["fields"] = isEmpty(formData["fields"]) ? void 0 : formData["fields"];
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const deviceData = this.newDevice();
    this.isSubmitting.set(true);
    this.entitiesService.createDevice(deviceData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "device",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating device:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newDevice.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function DeviceCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceCreateWizardComponent, selectors: [["app-device-create-wizard"]], viewQuery: function DeviceCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c014, 5);
      \u0275\u0275viewQuery(_c113, 7);
      \u0275\u0275viewQuery(_c210, 7);
      \u0275\u0275viewQuery(_c38, 5);
      \u0275\u0275viewQuery(_c47, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceInfoStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceInfoForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["deviceDetailsStep", ""], ["deviceInfoStep", ""], ["confirmationTemplate", ""], ["deviceDetailsForm", ""], ["deviceInfoForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], ["entityType", "device", 3, "formValidityChange", "formValueChange", "createMode", "entity"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function DeviceCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function DeviceCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function DeviceCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, DeviceCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DeviceCreateWizardComponent_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, DeviceCreateWizardComponent_ng_template_5_Template, 29, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    DeviceDetailsSectionComponent,
    InfoSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-device-create-wizard", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      DeviceDetailsSectionComponent,
      InfoSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Device Details -->
<ng-template #deviceDetailsStep let-step>
  <div class="p-fluid">
    <app-device-details-section
      #deviceDetailsForm
      [createMode]="true"
      [entity]="newDevice()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateDeviceDetails($event)"
    ></app-device-details-section>
  </div>
</ng-template>

<ng-template #deviceInfoStep let-step>
  <div class="p-fluid">
    <app-info-section
      #deviceInfoForm
      [createMode]="true"
      [entity]="newDevice()"
      entityType="device"
      (formValidityChange)="onInfoFormValidityChange($event)"
      (formValueChange)="updateDeviceInfo($event)"
    ></app-info-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Device Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Device.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Serial Number:</div>
              <div class="w-2/3">{{ newDevice().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Device Type:</div>
              <div class="w-2/3">
                {{ newDevice().deviceType.name || 'Not selected' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Configuration:</div>
              <div class="w-2/3">{{ newDevice().configProfile?.name }}</div>
            </div>

            <!-- Device Info Section -->
            <div class="space-y-2">
              @for (item of entityCustomFields(); track $index) {
                <div class="flex">
                  <div class="w-1/3 font-medium">{{ item?.['title'] }}</div>
                  <div class="w-2/3">
                    {{ newDevice()['fields']?.[item['id']] || 'Not provided' }}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Device.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { deviceDetailsStep: [{
    type: ViewChild,
    args: ["deviceDetailsStep"]
  }], deviceInfoStep: [{
    type: ViewChild,
    args: ["deviceInfoStep", { static: true }]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], deviceDetailsForm: [{
    type: ViewChild,
    args: ["deviceDetailsForm"]
  }], deviceInfoForm: [{
    type: ViewChild,
    args: ["deviceInfoForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceCreateWizardComponent, { className: "DeviceCreateWizardComponent", filePath: "src/app/features/administration/components/device/device-create-wizard/device-create-wizard.component.ts", lineNumber: 48 });
})();

// src/app/features/administration/configs/device.grid.config.ts
var DevicesGridConfig = class _DevicesGridConfig {
  devicesService = inject(DevicesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [
    DeviceListItem.StateEnum.Active,
    DeviceListItem.StateEnum.Inactive,
    DeviceListItem.StateEnum.Suspended
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    ["01usv"]: "fields.01usv",
    ["02udr"]: "fields.02udr",
    simCard: "simcard.name",
    asset: "asset.name",
    configProfile: "configProfile.name",
    deviceType: "deviceType.name"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    inactive: "Inactive",
    suspended: "Suspended"
  };
  entityType = "devices";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "deviceType",
      header: "Type",
      valueGetter: (rowData) => isDefined(rowData.deviceType?.name) ? rowData.deviceType?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: DeviceListItem.StateEnum.Active },
          { label: "Deleted", value: DeviceListItem.StateEnum.Deleted },
          { label: "Inactive", value: DeviceListItem.StateEnum.Inactive },
          { label: "Suspended", value: DeviceListItem.StateEnum.Suspended }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "asset",
      header: "Asset",
      valueGetter: (rowData) => isDefined(rowData.asset?.name) ? rowData.asset?.name : "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "simCard",
      header: "SIM Card",
      valueGetter: (rowData) => isDefined(rowData.simcard?.name) ? rowData.simcard?.name : "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "configProfile",
      header: "Config Profile",
      valueGetter: (rowData) => isDefined(rowData.configProfile?.name) ? rowData.configProfile?.name : "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "01usv",
      header: "Device Serial",
      valueGetter: (rowData) => isDefined(rowData.fields?.["01usv"]) && isString(rowData.fields?.["01usv"]) ? rowData.fields?.["01usv"] : "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "02udr",
      header: "Device Remarks",
      valueGetter: (rowData) => isDefined(rowData.fields?.["02udr"]) && isString(rowData.fields?.["02udr"]) ? rowData.fields?.["02udr"] : "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData["modifiedDate"]) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.devicesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Devices";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openDeviceCreationDialog(clientId).subscribe();
  }
  openDeviceCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(DeviceCreateWizardComponent, {
      header: "Device Wizard",
      baseZIndex: 1e4,
      data: {
        ownerId
      },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function DevicesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevicesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DevicesGridConfig, factory: _DevicesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevicesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/geofences/geofence-coordinates-section/geofence-coordinates-section.component.ts
var _c015 = (a0) => ({ "icon-primary": a0 });
function GeofenceCoordinatesSectionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 7);
    \u0275\u0275listener("click", function GeofenceCoordinatesSectionComponent_Conditional_5_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    })("keydown.enter", function GeofenceCoordinatesSectionComponent_Conditional_5_Template_span_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit geofence coordinates");
  }
}
function GeofenceCoordinatesSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 8);
    \u0275\u0275listener("formSubmit", function GeofenceCoordinatesSectionComponent_Conditional_8_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("formValidityChange", function GeofenceCoordinatesSectionComponent_Conditional_8_Template_app_dynamic_form_formValidityChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormValidityChange($event));
    })("formValueChange", function GeofenceCoordinatesSectionComponent_Conditional_8_Template_app_dynamic_form_formValueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormValueChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions)("hideActions", ctx_r1.createMode());
  }
}
var GeofenceCoordinatesSectionComponent = class _GeofenceCoordinatesSectionComponent extends TypedEntitySectionBaseComponent {
  ownerId = input(null);
  measurementUnitsService = inject(MeasurementUnitsService);
  entitiesService = inject(EntitiesService);
  zoneGroups = [];
  costCenters = [];
  constructor() {
    super();
  }
  updateFormFields() {
    const geofence = this.entity();
    this.formFields = [
      createNumberField("lat", "Latitude", geofence?.["lat"] ?? void 0, {
        name: "lat",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Latitude is required"
          },
          {
            name: "min",
            validator: Validators.min(-90),
            message: "Latitude must be greater or equal to -90"
          },
          {
            name: "max",
            validator: Validators.max(90),
            message: "Latitude must be less or equal to 90"
          }
        ],
        props: {
          appendTo: "body",
          showClear: true,
          min: -90,
          max: 90,
          step: 1e-5,
          maxFractionDigits: 5
        }
      }),
      createNumberField("lon", "Longitude", geofence?.["lon"], {
        name: "lon",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Longitude is required"
          },
          {
            name: "min",
            validator: Validators.min(-180),
            message: "Longitude must be greater or equal to -180"
          },
          {
            name: "max",
            validator: Validators.max(180),
            message: "Longitude must be less or equal to 180"
          }
        ],
        props: {
          appendTo: "body",
          showClear: true,
          min: -180,
          max: 180,
          step: 1e-5,
          maxFractionDigits: 5
        }
      }),
      createDropdownField("shape", "Shape", [
        { label: "Hexagon", value: "hexagon" },
        { label: "Octagon", value: "octagon" },
        { label: "Square", value: "square" },
        { label: "Triangle", value: "triangle" }
      ], geofence?.["shape"] ?? "", {
        name: "shape",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Shape is required"
          }
        ],
        props: {
          appendTo: "body",
          showClear: true
        }
      }),
      createNumberField("shapeRadius", "Radius", geofence?.["shapeRadius"], {
        name: "shapeRadius",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Radius is required"
          },
          {
            name: "min",
            validator: Validators.min(0),
            message: "Radius must be greater or equal to 0"
          }
        ],
        props: {
          appendTo: "body",
          showClear: true,
          suffix: this.measurementUnitsService.unitSymbol(MeasurementUnitType.DISTANCE)
        }
      })
    ];
  }
  getUpdateMethod() {
    return (id, data) => this.entitiesService.updateZone(id, data);
  }
  transformFormData(formData) {
    const normalizedFormData = Array.isArray(formData) ? formData.reduce((acc, item) => __spreadValues(__spreadValues({}, acc), item), {}) : formData;
    const transformedData = {};
    if (normalizedFormData["lat"] !== void 0) {
      transformedData["lat"] = normalizedFormData["lat"];
    }
    if (normalizedFormData["lon"] !== void 0) {
      transformedData["lon"] = normalizedFormData["lon"];
    }
    if (normalizedFormData["shape"] !== void 0) {
      transformedData["shape"] = normalizedFormData["shape"];
    }
    if (normalizedFormData["shapeRadius"] !== void 0) {
      const radiusValue = normalizedFormData["shapeRadius"];
      transformedData["shapeRadius"] = this.measurementUnitsService.toBackend(MeasurementUnitType.DISTANCE, radiusValue);
    }
    const entity = this.entity();
    if (entity && "id" in entity) {
      transformedData["id"] = entity["id"];
    }
    const ownerId = this.ownerId();
    if (ownerId !== null && ownerId !== void 0) {
      transformedData["ownerId"] = ownerId;
    }
    return transformedData;
  }
  static \u0275fac = function GeofenceCoordinatesSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeofenceCoordinatesSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeofenceCoordinatesSectionComponent, selectors: [["app-geofence-coordinates-section"]], inputs: { ownerId: [1, "ownerId"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-map-marker", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "icon-light"], [3, "fields", "actions", "hideActions"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click", "keydown.enter"], [3, "formSubmit", "formValidityChange", "formValueChange", "fields", "actions", "hideActions"]], template: function GeofenceCoordinatesSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275conditionalCreate(5, GeofenceCoordinatesSectionComponent_Conditional_5_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, " Enter the latitude and longitude of the geofence you'd like to create.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, GeofenceCoordinatesSectionComponent_Conditional_8_Template, 1, 3, "app-dynamic-form", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c015, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "map marker icon");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() || ctx.createMode() && ctx.formFields.length ? 8 : -1);
    }
  }, dependencies: [CommonModule, NgClass, DynamicFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofenceCoordinatesSectionComponent, [{
    type: Component,
    args: [{ selector: "app-geofence-coordinates-section", imports: [CommonModule, DynamicFormComponent], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-map-marker !text-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'map marker icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        @if (!isFormEditable() && !createMode()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit geofence coordinates'"
              (click)="onEdit()"
              (keydown.enter)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>
        Enter the latitude and longitude of the geofence you'd like to
        create.</span
      >
    </div>
  </div>

  @if (isFormEditable() || (createMode() && formFields.length)) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      [hideActions]="createMode()"
      (formSubmit)="onSubmit($event)"
      (formValidityChange)="onFormValidityChange($event)"
      (formValueChange)="onFormValueChange($event)"
    >
    </app-dynamic-form>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeofenceCoordinatesSectionComponent, { className: "GeofenceCoordinatesSectionComponent", filePath: "src/app/features/administration/components/geofences/geofence-coordinates-section/geofence-coordinates-section.component.ts", lineNumber: 29 });
})();

// src/app/features/administration/components/geofences/geofence-create-wizard/geofence-create-wizard.component.ts
var _c016 = ["geofenceDetailsStep"];
var _c114 = ["geofenceCoordinatesStep"];
var _c211 = ["confirmationTemplate"];
var _c39 = ["geofenceDetailsForm"];
var _c48 = ["geofenceCoordinatesForm"];
function GeofenceCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-geofence-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function GeofenceCreateWizardComponent_ng_template_1_Template_app_geofence_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function GeofenceCreateWizardComponent_ng_template_1_Template_app_geofence_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGeofenceDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newGeofence())("ownerId", ctx_r2.ownerId);
  }
}
function GeofenceCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-geofence-coordinates-section", 8, 4);
    \u0275\u0275listener("formValidityChange", function GeofenceCreateWizardComponent_ng_template_3_Template_app_geofence_coordinates_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCoordinatesFormValidityChange($event));
    })("formValueChange", function GeofenceCreateWizardComponent_ng_template_3_Template_app_geofence_coordinates_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGeofenceCoordinates($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newGeofence());
  }
}
function GeofenceCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Geofence. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 17);
    \u0275\u0275text(20, "Cost Centre:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "div", 17);
    \u0275\u0275text(25, "Group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17);
    \u0275\u0275text(30, "Speed Limit:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 16)(34, "div", 17);
    \u0275\u0275text(35, "Proximity Warning:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 16)(39, "div", 17);
    \u0275\u0275text(40, "Latitude:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 16)(44, "div", 17);
    \u0275\u0275text(45, "Longitude:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 18);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 16)(49, "div", 17);
    \u0275\u0275text(50, "Shape:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 18);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 19)(54, "p", 20);
    \u0275\u0275text(55, "Click finish to create this Geofence.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeofence().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeofence().zoneType || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx_r2.newGeofence().costCentre) == null ? null : tmp_7_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = ctx_r2.newGeofence().group) == null ? null : tmp_8_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeofence().speed || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeofence().radius || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.geofenceCoordinates == null ? null : ctx_r2.geofenceCoordinates["lat"]) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.geofenceCoordinates == null ? null : ctx_r2.geofenceCoordinates["lon"]) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.geofenceCoordinates == null ? null : ctx_r2.geofenceCoordinates["shape"]) || "Not provided", " ");
  }
}
var GeofenceCreateWizardComponent = class _GeofenceCreateWizardComponent {
  geofenceDetailsStep;
  geofenceCoordinatesStep;
  confirmationTemplate;
  // References to form components
  geofenceDetailsForm;
  geofenceCoordinatesForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  measurementUnitsService = inject(MeasurementUnitsService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  shapePoints = [3, 4, 6, 8];
  shapes = ["triangle", "square", "hexagon", "octagon"];
  geofenceCoordinates;
  // Geofence model to collect data across steps
  newGeofence = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Geofence Details",
        content: this.geofenceDetailsStep,
        complete: false,
        validate: () => this.geofenceDetailsForm.validate()
      },
      {
        value: 2,
        header: "Geofence Coordinates",
        content: this.geofenceCoordinatesStep,
        complete: false,
        validate: () => this.geofenceCoordinatesForm.validate()
      },
      {
        value: 3,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newGeofence.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newGeofence.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onCoordinatesFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the geofence state with form data
  updateGeofenceDetails(formData) {
    this.newGeofence.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateGeofenceCoordinates(formData) {
    this.geofenceCoordinates = formData;
    const radius = this.measurementUnitsService.toBackend(MeasurementUnitType.DISTANCE, formData["shapeRadius"]);
    const points = SpatialUtils.generateRegularPolygon({ x: formData["lon"], y: formData["lat"] }, radius, this.shapePoints[this.shapes.indexOf(formData["shape"])]);
    this.newGeofence.update((current) => __spreadProps(__spreadValues(__spreadValues({}, current), formData), {
      points
    }));
  }
  onWizardComplete() {
    const geofenceData = this.newGeofence();
    this.isSubmitting.set(true);
    this.entitiesService.createZone(geofenceData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "geofence",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating geofence:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newGeofence.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function GeofenceCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeofenceCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeofenceCreateWizardComponent, selectors: [["app-geofence-create-wizard"]], viewQuery: function GeofenceCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c016, 5);
      \u0275\u0275viewQuery(_c114, 5);
      \u0275\u0275viewQuery(_c211, 7);
      \u0275\u0275viewQuery(_c39, 5);
      \u0275\u0275viewQuery(_c48, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceCoordinatesStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceCoordinatesForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["geofenceDetailsStep", ""], ["geofenceCoordinatesStep", ""], ["confirmationTemplate", ""], ["geofenceDetailsForm", ""], ["geofenceCoordinatesForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [3, "formValidityChange", "formValueChange", "createMode", "entity"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function GeofenceCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function GeofenceCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function GeofenceCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, GeofenceCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, GeofenceCreateWizardComponent_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, GeofenceCreateWizardComponent_ng_template_5_Template, 56, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    GeofenceDetailsSectionComponent,
    GeofenceCoordinatesSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofenceCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-geofence-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      GeofenceDetailsSectionComponent,
      GeofenceCoordinatesSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Geofence Details -->
<ng-template #geofenceDetailsStep let-step>
  <div class="p-fluid">
    <app-geofence-details-section
      #geofenceDetailsForm
      [createMode]="true"
      [entity]="newGeofence()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateGeofenceDetails($event)"
    ></app-geofence-details-section>
  </div>
</ng-template>

<!-- Step 2: Geofence Coordinates -->
<ng-template #geofenceCoordinatesStep let-step>
  <div class="p-fluid">
    <app-geofence-coordinates-section
      #geofenceCoordinatesForm
      [createMode]="true"
      [entity]="newGeofence()"
      (formValidityChange)="onCoordinatesFormValidityChange($event)"
      (formValueChange)="updateGeofenceCoordinates($event)"
    ></app-geofence-coordinates-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Geofence Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Geofence.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newGeofence().name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Type:</div>
              <div class="w-2/3">
                {{ newGeofence().zoneType || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Cost Centre:</div>
              <div class="w-2/3">
                {{ newGeofence().costCentre?.name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Group:</div>
              <div class="w-2/3">
                {{ newGeofence().group?.name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Speed Limit:</div>
              <div class="w-2/3">
                {{ newGeofence().speed || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Proximity Warning:</div>
              <div class="w-2/3">
                {{ newGeofence().radius || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Latitude:</div>
              <div class="w-2/3">
                {{ geofenceCoordinates?.['lat'] || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Longitude:</div>
              <div class="w-2/3">
                {{ geofenceCoordinates?.['lon'] || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Shape:</div>
              <div class="w-2/3">
                {{ geofenceCoordinates?.['shape'] || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Geofence.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { geofenceDetailsStep: [{
    type: ViewChild,
    args: ["geofenceDetailsStep"]
  }], geofenceCoordinatesStep: [{
    type: ViewChild,
    args: ["geofenceCoordinatesStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], geofenceDetailsForm: [{
    type: ViewChild,
    args: ["geofenceDetailsForm"]
  }], geofenceCoordinatesForm: [{
    type: ViewChild,
    args: ["geofenceCoordinatesForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeofenceCreateWizardComponent, { className: "GeofenceCreateWizardComponent", filePath: "src/app/features/administration/components/geofences/geofence-create-wizard/geofence-create-wizard.component.ts", lineNumber: 50 });
})();

// src/app/features/administration/configs/geofences.grid.config.ts
var GeofencesGridConfig = class _GeofencesGridConfig {
  entityType = "geofences";
  geofencesService = inject(GeofencesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  entitiesService = inject(EntitiesService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = ["active", "inactive"];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  destroyRef = inject(DestroyRef);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    costCentre: "costCentre.id",
    groups: "groups.id"
  };
  zoneTypeLabels = {
    location: "Location",
    keepin: "Keep In",
    nogo: "No Go",
    route: "Route"
  };
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "zoneType",
      header: "Type",
      sortable: true,
      filterType: "multiselect",
      filter: true,
      filterMatchMode: "in",
      valueGetter: (rowData) => {
        if (!isDefined(rowData.zoneType)) {
          return "";
        }
        const label = this.zoneTypeLabels[rowData.zoneType];
        return isDefined(label) ? label : rowData.zoneType;
      },
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Location", value: "location" },
          { label: "Keep In", value: "keepin" },
          { label: "No Go", value: "nogo" },
          { label: "Route", value: "route" }
        ]
      }
    },
    {
      field: "costCentre",
      header: "Cost Centre",
      valueGetter: (rowData) => isDefined(rowData.costCentre?.name) ? rowData.costCentre?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "group",
      header: "Group",
      valueGetter: (rowData) => isDefined(rowData.group?.name) ? rowData.group?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
          { label: "Deleted", value: "deleted" }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  defaultVisibleColumns = ["name", "zoneType", "costCentre", "group", "state"];
  dataService = this.geofencesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    this.loadFilterOptions();
  }
  getTitle() {
    return "Geofences";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  loadFilterOptions() {
    combineLatest([
      this.entitiesService.listCostCentres(this.params["clientId"]),
      this.entitiesService.listZoneGroups(this.params["clientId"])
    ]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe(([costCentres, zoneGroups]) => {
      const costCentreColumn = this.columns.find((col) => col.field === "costCentre");
      if (costCentreColumn?.filterConfig) {
        costCentreColumn.filterConfig.options = costCentres.items.map((costCentre) => ({
          label: costCentre.name ?? "",
          value: costCentre.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
      const groupColumn = this.columns.find((col) => col.field === "group");
      if (groupColumn?.filterConfig) {
        groupColumn.filterConfig.options = zoneGroups.items.map((group) => ({
          label: group.name ?? "",
          value: group.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
    });
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openGeofenceCreationDialog(clientId).subscribe();
  }
  openGeofenceCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(GeofenceCreateWizardComponent, {
      header: "Geofence Wizard",
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function GeofencesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeofencesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeofencesGridConfig, factory: _GeofencesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofencesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/sim-cards/sim-card-create-wizard/sim-card-create-wizard.component.ts
var _c017 = ["simCardDetailsStep"];
var _c115 = ["confirmationTemplate"];
var _c212 = ["simCardDetailsForm"];
function SimCardCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-sim-card-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function SimCardCreateWizardComponent_ng_template_1_Template_app_sim_card_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function SimCardCreateWizardComponent_ng_template_1_Template_app_sim_card_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSimCardDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newSimCard())("ownerId", ctx_r2.ownerId);
  }
}
function SimCardCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your SIM Card. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Serial Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Network:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 17);
    \u0275\u0275text(30, "Click finish to create this SIM Card.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newSimCard().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newSimCard().networkName || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newSimCard().number || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newSimCard().description || "Not provided", " ");
  }
}
var SimCardCreateWizardComponent = class _SimCardCreateWizardComponent {
  simCardDetailsStep;
  confirmationTemplate;
  // References to form components
  simCardDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // SimCard model to collect data across steps
  newSimCard = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Sim Card Details",
        content: this.simCardDetailsStep,
        complete: false,
        validate: () => this.simCardDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newSimCard.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newSimCard.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the simCard state with form data
  updateSimCardDetails(formData) {
    this.newSimCard.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const simCardData = this.newSimCard();
    this.isSubmitting.set(true);
    this.entitiesService.createSimCard(simCardData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "simcard",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating sim card:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newSimCard.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function SimCardCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimCardCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimCardCreateWizardComponent, selectors: [["app-sim-card-create-wizard"]], viewQuery: function SimCardCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c017, 5);
      \u0275\u0275viewQuery(_c115, 7);
      \u0275\u0275viewQuery(_c212, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.simCardDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.simCardDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["simCardDetailsStep", ""], ["confirmationTemplate", ""], ["simCardDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function SimCardCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function SimCardCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function SimCardCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, SimCardCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, SimCardCreateWizardComponent_ng_template_3_Template, 31, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    SimCardDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimCardCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-sim-card-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      SimCardDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: SimCard Details -->
<ng-template #simCardDetailsStep let-step>
  <div class="p-fluid">
    <app-sim-card-details-section
      #simCardDetailsForm
      [createMode]="true"
      [entity]="newSimCard()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateSimCardDetails($event)"
    ></app-sim-card-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- SimCard Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your SIM Card.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Serial Number:</div>
              <div class="w-2/3">{{ newSimCard().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Network:</div>
              <div class="w-2/3">
                {{ newSimCard().networkName || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Number:</div>
              <div class="w-2/3">
                {{ newSimCard().number || 'Not provided' }}
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="w-1/3 font-medium">Description:</div>
            <div class="w-2/3">
              {{ newSimCard().description || 'Not provided' }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this SIM Card.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { simCardDetailsStep: [{
    type: ViewChild,
    args: ["simCardDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], simCardDetailsForm: [{
    type: ViewChild,
    args: ["simCardDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimCardCreateWizardComponent, { className: "SimCardCreateWizardComponent", filePath: "src/app/features/administration/components/sim-cards/sim-card-create-wizard/sim-card-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/sim-cards.grid.config.ts
var SimCardsGridConfig = class _SimCardsGridConfig {
  simCardsService = inject(SimCardsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [
    SimCardListItem.StateEnum.Active,
    SimCardListItem.StateEnum.Inactive,
    SimCardListItem.StateEnum.Suspended
  ];
  filterState = signal({
    state: { value: this.defaultStateValues, operator: "in" }
  });
  params = { clientId: "" };
  destroyRef = inject(DestroyRef);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    device: "device.name"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    inactive: "Inactive",
    suspended: "Suspended"
  };
  entityType = "sim-cards";
  columns = [
    {
      field: "name",
      header: "Serial Number",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "networkName",
      header: "Network",
      valueGetter: (rowData) => rowData.networkName ?? "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "number",
      header: "Number",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: SimCardListItem.StateEnum.Active },
          { label: "Inactive", value: SimCardListItem.StateEnum.Inactive },
          { label: "Suspended", value: SimCardListItem.StateEnum.Suspended },
          { label: "Deleted", value: SimCardListItem.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "description",
      header: "Description",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "device",
      header: "Device",
      valueGetter: (rowData) => rowData.device?.name ?? "",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData["modifiedDate"]) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.simCardsService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: { value: this.defaultStateValues, operator: "in" }
    });
  }
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Sim Cards";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openSimCardCreationDialog(clientId).subscribe((createdSimCard) => {
      if (isDefined(createdSimCard)) {
      }
    });
  }
  openSimCardCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(SimCardCreateWizardComponent, {
      header: "Sim Card Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function SimCardsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimCardsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SimCardsGridConfig, factory: _SimCardsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimCardsGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/asset-rating-profiles/asset-rating-profile-create-wizard/asset-rating-profile-create-wizard.component.ts
var _c018 = ["assetRatingProfileDetailsStep"];
var _c116 = ["confirmationTemplate"];
var _c213 = ["assetRatingProfileDetailsForm"];
function AssetRatingProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-asset-rating-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AssetRatingProfileCreateWizardComponent_ng_template_1_Template_app_asset_rating_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetRatingProfileCreateWizardComponent_ng_template_1_Template_app_asset_rating_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetRatingProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAssetRatingProfile())("ownerId", ctx_r2.ownerId);
  }
}
function AssetRatingProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset Rating Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p", 17);
    \u0275\u0275text(15, "Click finish to create this Asset Rating Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetRatingProfile().name || "Not provided", " ");
  }
}
var AssetRatingProfileCreateWizardComponent = class _AssetRatingProfileCreateWizardComponent {
  assetRatingProfileDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  assetRatingProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // AssetRatingProfile model to collect data across steps
  newAssetRatingProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Asset Rating Profile Details",
        content: this.assetRatingProfileDetailsStep,
        complete: false,
        validate: () => this.assetRatingProfileDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAssetRatingProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newAssetRatingProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the assetRatingProfile state with form data
  updateAssetRatingProfileDetails(formData) {
    this.newAssetRatingProfile.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const assetRatingProfileData = this.newAssetRatingProfile();
    this.isSubmitting.set(true);
    this.entitiesService.createAssetRatingProfile(assetRatingProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset-rating-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating asset rating profile:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAssetRatingProfile.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function AssetRatingProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetRatingProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetRatingProfileCreateWizardComponent, selectors: [["app-asset-rating-profile-create-wizard"]], viewQuery: function AssetRatingProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c018, 5);
      \u0275\u0275viewQuery(_c116, 7);
      \u0275\u0275viewQuery(_c213, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetRatingProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetRatingProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["assetRatingProfileDetailsStep", ""], ["confirmationTemplate", ""], ["assetRatingProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetRatingProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AssetRatingProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetRatingProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetRatingProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetRatingProfileCreateWizardComponent_ng_template_3_Template, 16, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetRatingProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetRatingProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-rating-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetRatingProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: AssetRatingProfile Details -->
<ng-template #assetRatingProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-rating-profile-details-section
      #assetRatingProfileDetailsForm
      [createMode]="true"
      [entity]="newAssetRatingProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetRatingProfileDetails($event)"
    ></app-asset-rating-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- AssetRatingProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset Rating Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newAssetRatingProfile().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset Rating Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetRatingProfileDetailsStep: [{
    type: ViewChild,
    args: ["assetRatingProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], assetRatingProfileDetailsForm: [{
    type: ViewChild,
    args: ["assetRatingProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetRatingProfileCreateWizardComponent, { className: "AssetRatingProfileCreateWizardComponent", filePath: "src/app/features/administration/components/asset-rating-profiles/asset-rating-profile-create-wizard/asset-rating-profile-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/asset-rating-profiles.grid.config.ts
var AssetRatingProfilesGridConfig = class _AssetRatingProfilesGridConfig {
  assetRatingProfilesService = inject(AssetRatingProfilesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [
    AssetRatingProfileListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  ownerId = "";
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "asset-rating-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: AssetRatingProfileListItem.StateEnum.Active
          },
          {
            label: "Deleted",
            value: AssetRatingProfileListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.assetRatingProfilesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "Asset Rating Profiles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openAssetRatingProfileCreationDialog(this.ownerId).subscribe();
  }
  openAssetRatingProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetRatingProfileCreateWizardComponent, {
      header: "Asset Rating Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetRatingProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetRatingProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetRatingProfilesGridConfig, factory: _AssetRatingProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetRatingProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/asset-state-profiles/asset-state-profile-create-wizard/asset-state-profile-create-wizard.component.ts
var _c019 = ["assetStateProfileDetailsStep"];
var _c117 = ["confirmationTemplate"];
var _c214 = ["assetStateProfileDetailsForm"];
function AssetStateProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-asset-state-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AssetStateProfileCreateWizardComponent_ng_template_1_Template_app_asset_state_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetStateProfileCreateWizardComponent_ng_template_1_Template_app_asset_state_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetStateProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAssetStateProfile())("ownerId", ctx_r2.ownerId);
  }
}
function AssetStateProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset State Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p", 17);
    \u0275\u0275text(15, "Click finish to create this Asset State Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetStateProfile().name || "Not provided", " ");
  }
}
var AssetStateProfileCreateWizardComponent = class _AssetStateProfileCreateWizardComponent {
  assetStateProfileDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  assetStateProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // AssetStateProfile model to collect data across steps
  newAssetStateProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Asset State Profile Details",
        content: this.assetStateProfileDetailsStep,
        complete: false,
        validate: () => this.assetStateProfileDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAssetStateProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newAssetStateProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the assetStateProfile state with form data
  updateAssetStateProfileDetails(formData) {
    this.newAssetStateProfile.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const assetStateProfileData = this.newAssetStateProfile();
    this.isSubmitting.set(true);
    this.entitiesService.createAssetStateProfile(assetStateProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset-state-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating asset state profile:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAssetStateProfile.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function AssetStateProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetStateProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetStateProfileCreateWizardComponent, selectors: [["app-asset-state-profile-create-wizard"]], viewQuery: function AssetStateProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c019, 5);
      \u0275\u0275viewQuery(_c117, 7);
      \u0275\u0275viewQuery(_c214, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetStateProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetStateProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["assetStateProfileDetailsStep", ""], ["confirmationTemplate", ""], ["assetStateProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetStateProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AssetStateProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetStateProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetStateProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetStateProfileCreateWizardComponent_ng_template_3_Template, 16, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetStateProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-state-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetStateProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: AssetStateProfile Details -->
<ng-template #assetStateProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-state-profile-details-section
      #assetStateProfileDetailsForm
      [createMode]="true"
      [entity]="newAssetStateProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetStateProfileDetails($event)"
    ></app-asset-state-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- AssetStateProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset State Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newAssetStateProfile().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset State Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetStateProfileDetailsStep: [{
    type: ViewChild,
    args: ["assetStateProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], assetStateProfileDetailsForm: [{
    type: ViewChild,
    args: ["assetStateProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetStateProfileCreateWizardComponent, { className: "AssetStateProfileCreateWizardComponent", filePath: "src/app/features/administration/components/asset-state-profiles/asset-state-profile-create-wizard/asset-state-profile-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/asset-state-profiles.grid.config.ts
var AssetStateProfilesGridConfig = class _AssetStateProfilesGridConfig {
  assetStateProfilesService = inject(AssetStateProfilesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [
    AssetStateProfileListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "asset-state-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: AssetStateProfileListItem.StateEnum.Active
          },
          {
            label: "Deleted",
            value: AssetStateProfileListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  ownerId = "";
  dataService = this.assetStateProfilesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "Asset State Profiles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openAssetStateProfileCreationDialog(this.ownerId).subscribe();
  }
  openAssetStateProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetStateProfileCreateWizardComponent, {
      header: "Asset State Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetStateProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetStateProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateProfilesGridConfig, factory: _AssetStateProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/io-types/io-type-create-wizard/io-type-create-wizard.component.ts
var _c020 = ["ioTypeDetailsStep"];
var _c118 = ["confirmationTemplate"];
var _c215 = ["ioTypeDetailsForm"];
function IoTypeCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-io-type-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function IoTypeCreateWizardComponent_ng_template_1_Template_app_io_type_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function IoTypeCreateWizardComponent_ng_template_1_Template_app_io_type_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateIoTypeDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newIoType())("ownerId", ctx_r2.ownerId);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.decamelize(ctx_r2.newIoType().type), " ");
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Unit:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.newIoType().unit);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Smoothing Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.decamelize(ctx_r2.newIoType().smoothingType), " ");
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Active Text:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.newIoType().text) == null ? null : tmp_5_0.active);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Inactive Text:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.newIoType().text) == null ? null : tmp_5_0.inactive);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Rate Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.newIoType().rate) == null ? null : tmp_5_0.type);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Rate multiplier:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.newIoType().rate) == null ? null : tmp_5_0.multiplier);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "Rate unit:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.newIoType().rate) == null ? null : tmp_5_0.unit);
  }
}
function IoTypeCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your IO Type. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, IoTypeCreateWizardComponent_ng_template_3_Conditional_13_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(14, IoTypeCreateWizardComponent_ng_template_3_Conditional_14_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(15, IoTypeCreateWizardComponent_ng_template_3_Conditional_15_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(16, IoTypeCreateWizardComponent_ng_template_3_Conditional_16_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(17, IoTypeCreateWizardComponent_ng_template_3_Conditional_17_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(18, IoTypeCreateWizardComponent_ng_template_3_Conditional_18_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(19, IoTypeCreateWizardComponent_ng_template_3_Conditional_19_Template, 5, 1, "div", 13);
    \u0275\u0275conditionalCreate(20, IoTypeCreateWizardComponent_ng_template_3_Conditional_20_Template, 5, 1, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 16)(22, "p", 17);
    \u0275\u0275text(23, "Click finish to create this IO Type.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newIoType().name || "Not provided");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newIoType().type ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newIoType().unit ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.newIoType().smoothingType ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r2.newIoType().text) == null ? null : tmp_8_0.active) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_9_0 = ctx_r2.newIoType().text) == null ? null : tmp_9_0.inactive) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx_r2.newIoType().rate) == null ? null : tmp_10_0.type) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_11_0 = ctx_r2.newIoType().rate) == null ? null : tmp_11_0.multiplier) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_12_0 = ctx_r2.newIoType().rate) == null ? null : tmp_12_0.unit) ? 20 : -1);
  }
}
var IoTypeCreateWizardComponent = class _IoTypeCreateWizardComponent {
  ioTypeDetailsStep;
  confirmationTemplate;
  // References to form components
  ioTypeDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  utilityService = inject(UtilityService);
  // IoType model to collect data across steps
  newIoType = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngOnInit() {
    this.steps = [
      {
        value: 1,
        header: "Io type Details",
        content: null,
        complete: false,
        validate: () => this.ioTypeDetailsForm?.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: null,
        complete: true
      }
    ];
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newIoType.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  ngAfterViewInit() {
    if (this.steps.length > 0 && this.ioTypeDetailsStep) {
      this.steps[0].content = this.ioTypeDetailsStep;
    }
    if (this.steps.length > 1 && this.confirmationTemplate) {
      this.steps[1].content = this.confirmationTemplate;
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newIoType.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the ioType state with form data
  updateIoTypeDetails(formData) {
    this.newIoType.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const ioTypeData = this.newIoType();
    this.isSubmitting.set(true);
    this.entitiesService.createIoType(ioTypeData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "iotype",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating IO type:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newIoType.set({});
    this.dialogRef.close();
  }
  decamelize(str) {
    return this.utilityService.decamelize(str);
  }
  static \u0275fac = function IoTypeCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IoTypeCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IoTypeCreateWizardComponent, selectors: [["app-io-type-create-wizard"]], viewQuery: function IoTypeCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c020, 5);
      \u0275\u0275viewQuery(_c118, 7);
      \u0275\u0275viewQuery(_c215, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ioTypeDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ioTypeDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["ioTypeDetailsStep", ""], ["confirmationTemplate", ""], ["ioTypeDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"], [1, "w-2/3", "capitalize"]], template: function IoTypeCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function IoTypeCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function IoTypeCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, IoTypeCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, IoTypeCreateWizardComponent_ng_template_3_Template, 24, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    IoTypeDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IoTypeCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-io-type-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      IoTypeDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: IoType Details -->
<ng-template #ioTypeDetailsStep let-step>
  <div class="p-fluid">
    <app-io-type-details-section
      #ioTypeDetailsForm
      [createMode]="true"
      [entity]="newIoType()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateIoTypeDetails($event)"
    ></app-io-type-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- IoType Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your IO Type.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newIoType().name || 'Not provided' }}</div>
            </div>

            @if (newIoType().type) {
              <div class="flex">
                <div class="w-1/3 font-medium">Type:</div>
                <div class="w-2/3 capitalize">
                  {{ decamelize(newIoType().type) }}
                </div>
              </div>
            }

            @if (newIoType().unit) {
              <div class="flex">
                <div class="w-1/3 font-medium">Unit:</div>
                <div class="w-2/3">{{ newIoType().unit }}</div>
              </div>
            }
            @if (newIoType().smoothingType) {
              <div class="flex">
                <div class="w-1/3 font-medium">Smoothing Type:</div>
                <div class="w-2/3">
                  {{ decamelize(newIoType().smoothingType) }}
                </div>
              </div>
            }

            @if (newIoType().text?.active) {
              <div class="flex">
                <div class="w-1/3 font-medium">Active Text:</div>
                <div class="w-2/3">{{ newIoType().text?.active }}</div>
              </div>
            }

            @if (newIoType().text?.inactive) {
              <div class="flex">
                <div class="w-1/3 font-medium">Inactive Text:</div>
                <div class="w-2/3">{{ newIoType().text?.inactive }}</div>
              </div>
            }

            @if (newIoType().rate?.type) {
              <div class="flex">
                <div class="w-1/3 font-medium">Rate Type:</div>
                <div class="w-2/3">{{ newIoType().rate?.type }}</div>
              </div>
            }
            @if (newIoType().rate?.multiplier) {
              <div class="flex">
                <div class="w-1/3 font-medium">Rate multiplier:</div>
                <div class="w-2/3">{{ newIoType().rate?.multiplier }}</div>
              </div>
            }

            @if (newIoType().rate?.unit) {
              <div class="flex">
                <div class="w-1/3 font-medium">Rate unit:</div>
                <div class="w-2/3">{{ newIoType().rate?.unit }}</div>
              </div>
            }
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this IO Type.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { ioTypeDetailsStep: [{
    type: ViewChild,
    args: ["ioTypeDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], ioTypeDetailsForm: [{
    type: ViewChild,
    args: ["ioTypeDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IoTypeCreateWizardComponent, { className: "IoTypeCreateWizardComponent", filePath: "src/app/features/administration/components/io-types/io-type-create-wizard/io-type-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/io-types.grid.config.ts
var IoTypesGridConfig = class _IoTypesGridConfig {
  ioTypesService = inject(IoTypesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  apiSchemaService = inject(ApiSchemaService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [IoTypeListItem.StateEnum.Active];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { ownerId: "" };
  ownerId = "";
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  typeLabels = {
    analog_input: "Analog Input",
    camera_input: "Camera Input",
    digital_input: "Digital Input",
    digital_output: "Digital Output",
    can_input: "CAN Input",
    counter_input: "Counter Input",
    temperature_input: "Temperature Input",
    value_input: "Value Input"
  };
  entityType = "io-types";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "type",
      header: "Type",
      valueGetter: (rowData) => {
        const typeValue = this.apiSchemaService.getEntityType(rowData, "iotype");
        return isDefined(typeValue) && isString(typeValue) ? this.typeLabels[typeValue] : "";
      },
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Digital Input",
            value: IoTypeListItem.TypeEnum.DigitalInput
          },
          {
            label: "Digital Output",
            value: IoTypeListItem.TypeEnum.DigitalOutput
          },
          { label: "Analog Input", value: IoTypeListItem.TypeEnum.AnalogInput },
          {
            label: "Temperature Input",
            value: IoTypeListItem.TypeEnum.TemperatureInput
          },
          { label: "CAN Input", value: IoTypeListItem.TypeEnum.CanInput },
          {
            label: "Counter Input",
            value: IoTypeListItem.TypeEnum.CounterInput
          },
          { label: "Camera Input", value: IoTypeListItem.TypeEnum.CameraInput },
          { label: "Value Input", value: IoTypeListItem.TypeEnum.ValueInput }
        ]
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: IoTypeListItem.StateEnum.Active },
          { label: "Deleted", value: IoTypeListItem.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.ioTypesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "I/O Types";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openIoTypeCreationDialog(this.ownerId).subscribe();
  }
  openIoTypeCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(IoTypeCreateWizardComponent, {
      header: "IO Type Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function IoTypesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IoTypesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IoTypesGridConfig, factory: _IoTypesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IoTypesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/overspeed-profiles/overspeed-profile-create-wizard/overspeed-profile-create-wizard.component.ts
var _c021 = ["overspeedProfileDetailsStep"];
var _c119 = ["confirmationTemplate"];
var _c216 = ["overspeedProfileDetailsForm"];
function OverspeedProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-overspeed-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function OverspeedProfileCreateWizardComponent_ng_template_1_Template_app_overspeed_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function OverspeedProfileCreateWizardComponent_ng_template_1_Template_app_overspeed_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateOverspeedProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newOverspeedProfile())("ownerId", ctx_r2.ownerId);
  }
}
function OverspeedProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Overspeed Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p", 17);
    \u0275\u0275text(15, "Click finish to create this Overspeed Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newOverspeedProfile().name || "Not provided", " ");
  }
}
var OverspeedProfileCreateWizardComponent = class _OverspeedProfileCreateWizardComponent {
  overspeedProfileDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  overspeedProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // OverspeedProfile model to collect data across steps
  newOverspeedProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Overspeed Profile Details",
        content: this.overspeedProfileDetailsStep,
        complete: false,
        validate: () => this.overspeedProfileDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newOverspeedProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newOverspeedProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the overspeedProfile state with form data
  updateOverspeedProfileDetails(formData) {
    this.newOverspeedProfile.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const overspeedProfileData = this.newOverspeedProfile();
    this.isSubmitting.set(true);
    this.entitiesService.createOverspeedProfile(overspeedProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "overspeed-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating overspeed profile:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newOverspeedProfile.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function OverspeedProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverspeedProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverspeedProfileCreateWizardComponent, selectors: [["app-overspeed-profile-create-wizard"]], viewQuery: function OverspeedProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c021, 5);
      \u0275\u0275viewQuery(_c119, 7);
      \u0275\u0275viewQuery(_c216, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overspeedProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overspeedProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["overspeedProfileDetailsStep", ""], ["confirmationTemplate", ""], ["overspeedProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function OverspeedProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function OverspeedProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function OverspeedProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, OverspeedProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, OverspeedProfileCreateWizardComponent_ng_template_3_Template, 16, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    OverspeedProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverspeedProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-overspeed-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      OverspeedProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: OverspeedProfile Details -->
<ng-template #overspeedProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-overspeed-profile-details-section
      #overspeedProfileDetailsForm
      [createMode]="true"
      [entity]="newOverspeedProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateOverspeedProfileDetails($event)"
    ></app-overspeed-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- OverspeedProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Overspeed Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newOverspeedProfile().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Overspeed Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { overspeedProfileDetailsStep: [{
    type: ViewChild,
    args: ["overspeedProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], overspeedProfileDetailsForm: [{
    type: ViewChild,
    args: ["overspeedProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverspeedProfileCreateWizardComponent, { className: "OverspeedProfileCreateWizardComponent", filePath: "src/app/features/administration/components/overspeed-profiles/overspeed-profile-create-wizard/overspeed-profile-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/overspeed-profiles.grid.config.ts
var OverspeedProfilesGridConfig = class _OverspeedProfilesGridConfig {
  overspeedProfilesService = inject(OverspeedProfilesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [
    OverspeedProfileListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { ownerId: "" };
  ownerId = "";
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "overspeed-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: OverspeedProfileListItem.StateEnum.Active
          },
          {
            label: "Deleted",
            value: OverspeedProfileListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.overspeedProfilesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "Overspeed Profiles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openOverspeedProfileCreationDialog(this.ownerId).subscribe();
  }
  openOverspeedProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(OverspeedProfileCreateWizardComponent, {
      header: "Overspeed Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function OverspeedProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverspeedProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OverspeedProfilesGridConfig, factory: _OverspeedProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverspeedProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/road-profiles/road-profile-create-wizard/road-profile-create-wizard.component.ts
var _c022 = ["roadProfileDetailsStep"];
var _c120 = ["confirmationTemplate"];
var _c217 = ["roadProfileDetailsForm"];
function RoadProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-road-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function RoadProfileCreateWizardComponent_ng_template_1_Template_app_road_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function RoadProfileCreateWizardComponent_ng_template_1_Template_app_road_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateRoadProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newRoadProfile())("ownerId", ctx_r2.ownerId);
  }
}
function RoadProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Road Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p", 17);
    \u0275\u0275text(15, "Click finish to create this Road Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newRoadProfile().name || "Not provided", " ");
  }
}
var RoadProfileCreateWizardComponent = class _RoadProfileCreateWizardComponent {
  roadProfileDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  roadProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // RoadProfile model to collect data across steps
  newRoadProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Road Profile Details",
        content: this.roadProfileDetailsStep,
        complete: false,
        validate: () => this.roadProfileDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newRoadProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newRoadProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the roadProfile state with form data
  updateRoadProfileDetails(formData) {
    this.newRoadProfile.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const roadProfileData = this.newRoadProfile();
    this.isSubmitting.set(true);
    this.entitiesService.createRoadProfile(roadProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "road-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating road profile:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newRoadProfile.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function RoadProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoadProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoadProfileCreateWizardComponent, selectors: [["app-road-profile-create-wizard"]], viewQuery: function RoadProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c022, 5);
      \u0275\u0275viewQuery(_c120, 7);
      \u0275\u0275viewQuery(_c217, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.roadProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.roadProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["roadProfileDetailsStep", ""], ["confirmationTemplate", ""], ["roadProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function RoadProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function RoadProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function RoadProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, RoadProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, RoadProfileCreateWizardComponent_ng_template_3_Template, 16, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    RoadProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoadProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-road-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      RoadProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: RoadProfile Details -->
<ng-template #roadProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-road-profile-details-section
      #roadProfileDetailsForm
      [createMode]="true"
      [entity]="newRoadProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateRoadProfileDetails($event)"
    ></app-road-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- RoadProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Road Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newRoadProfile().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Road Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { roadProfileDetailsStep: [{
    type: ViewChild,
    args: ["roadProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], roadProfileDetailsForm: [{
    type: ViewChild,
    args: ["roadProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoadProfileCreateWizardComponent, { className: "RoadProfileCreateWizardComponent", filePath: "src/app/features/administration/components/road-profiles/road-profile-create-wizard/road-profile-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/road-profiles.grid.config.ts
var RoadProfilesGridConfig = class _RoadProfilesGridConfig {
  roadProfilesService = inject(RoadProfilesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [RoadProfileListItem.StateEnum.Active];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { ownerId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "road-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: RoadProfileListItem.StateEnum.Active
          },
          {
            label: "Deleted",
            value: RoadProfileListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.roadProfilesService;
  ownerId = "";
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
  }
  getTitle() {
    return "Road Profiles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openRoadProfileCreationDialog(this.ownerId).subscribe();
  }
  openRoadProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(RoadProfileCreateWizardComponent, {
      header: "Road Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function RoadProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoadProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoadProfilesGridConfig, factory: _RoadProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoadProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/sms-gateway-providers/sms-gateway-provider-create-wizard/sms-gateway-provider-create-wizard.component.ts
var _c023 = ["smsGatewayProviderDetailsStep"];
var _c121 = ["smsGatewayProviderParametersStep"];
var _c218 = ["confirmationTemplate"];
var _c310 = ["smsGatewayProviderDetailsForm"];
var _c49 = ["smsGatewayProviderParametersForm"];
function SmsGatewayProviderCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-sms-gateway-provider-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function SmsGatewayProviderCreateWizardComponent_ng_template_1_Template_app_sms_gateway_provider_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function SmsGatewayProviderCreateWizardComponent_ng_template_1_Template_app_sms_gateway_provider_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSmsGatewayProviderDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newSmsGatewayProvider())("ownerId", ctx_r2.ownerId);
  }
}
function SmsGatewayProviderCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-sms-gateway-provider-parameters-section", 8, 4);
    \u0275\u0275listener("formValidityChange", function SmsGatewayProviderCreateWizardComponent_ng_template_3_Template_app_sms_gateway_provider_parameters_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onParametersFormValidityChange($event));
    })("formValueChange", function SmsGatewayProviderCreateWizardComponent_ng_template_3_Template_app_sms_gateway_provider_parameters_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateSmsGatewayProviderParameters($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newSmsGatewayProvider())("smsGatewayProviderType", ctx_r2.smsGatewayProviderType());
  }
}
function SmsGatewayProviderCreateWizardComponent_ng_template_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getParametersTitle(item_r5.key), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.value, " ");
  }
}
function SmsGatewayProviderCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your SMS Gateway Provider. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 16)(9, "div", 17);
    \u0275\u0275text(10, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(18, SmsGatewayProviderCreateWizardComponent_ng_template_5_For_19_Template, 5, 2, "div", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(20, "keyvalue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 19)(22, "p", 20);
    \u0275\u0275text(23, "Click finish to create this SMS Gateway Provider.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r2.newSmsGatewayProvider()[ctx_r2.typePropertyKey]) == null ? null : tmp_5_0.name, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newSmsGatewayProvider().name || "Not provided", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 2, ctx_r2.newSmsGatewayProvider().parameters));
  }
}
var SmsGatewayProviderCreateWizardComponent = class _SmsGatewayProviderCreateWizardComponent {
  smsGatewayProviderDetailsStep;
  smsGatewayProviderParametersStep;
  confirmationTemplate;
  // References to form components
  smsGatewayProviderDetailsForm;
  smsGatewayProviderParametersForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  cacheService = inject(RequestCacheService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  apiSchemaService = inject(ApiSchemaService);
  typePropertyKey = this.apiSchemaService.getTypePropertyKey("smsgatewayprovider");
  // SmsGatewayProvider model to collect data across steps
  newSmsGatewayProvider = signal({});
  smsGatewayProviderParametersFields = signal(null);
  smsGatewayProviderType = signal(null);
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps[0].content = this.smsGatewayProviderDetailsStep;
      this.steps[0].validate = () => this.smsGatewayProviderDetailsForm.validate();
      this.steps[1].content = this.smsGatewayProviderParametersStep;
      this.steps[1].validate = () => this.smsGatewayProviderParametersForm.validate();
      this.steps[2].content = this.confirmationTemplate;
      this.steps[2].validate = () => true;
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newSmsGatewayProvider.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
    this.steps = [
      {
        value: 1,
        header: "SMS Gateway Provider Details",
        complete: false,
        content: null
      },
      {
        value: 2,
        header: "SMS Gateway Provider Parameters",
        content: null,
        complete: false
      },
      {
        value: 3,
        header: "Confirmation",
        complete: true,
        content: null
      }
    ];
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  onParametersFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  updateSmsGatewayProviderDetails(formData) {
    this.newSmsGatewayProvider.update((current) => {
      const _a = formData, { ownerId: _ownerId } = _a, rest = __objRest(_a, ["ownerId"]);
      const updated = __spreadValues(__spreadValues({}, current), rest);
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
    this.loadSmsGatewayProviderType(this.newSmsGatewayProvider()[this.typePropertyKey]?.id).catch(() => {
    });
  }
  updateSmsGatewayProviderParameters(formData) {
    this.newSmsGatewayProvider.update((current) => {
      const updated = __spreadValues(__spreadValues({}, current), { parameters: formData });
      return updated;
    });
  }
  onWizardComplete() {
    const smsGatewayProviderData = this.newSmsGatewayProvider();
    if (isNullOrUndefined(smsGatewayProviderData) || Object.keys(smsGatewayProviderData).length === 0) {
      return;
    }
    this.isSubmitting.set(true);
    this.entitiesService.createSmsGatewayProvider(smsGatewayProviderData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "sms-gateway-provider",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newSmsGatewayProvider.set({});
    this.dialogRef.close();
  }
  async loadSmsGatewayProviderType(smsGatewayProviderTypeId) {
    if (isNullOrUndefined(smsGatewayProviderTypeId))
      return;
    const response = await this.cacheService.getOrFetchAsync(`smsGatewayProviderType-${smsGatewayProviderTypeId}`, () => firstValueFrom(this.entitiesService.getSmsGatewayProviderType(smsGatewayProviderTypeId)), 3e5);
    this.smsGatewayProviderType.set(response);
    const params = JSON.parse(response.parameterDefinition ?? '{"groups":[]}');
    const values = this.extractParameterFields(params);
    this.smsGatewayProviderParametersFields.set(values);
  }
  extractParameterFields(params) {
    const values = [];
    for (const group of params.groups) {
      for (const field of group.fields) {
        values.push({
          key: field.id,
          title: field.title
        });
        if (field.type === "combo" && field.values) {
          this.processComboFieldValues(field.values, values);
        }
      }
    }
    return values;
  }
  processComboFieldValues(options, values) {
    for (const option of options) {
      if (isDefined(option.fields)) {
        this.processOptionFields(option.fields, values);
      }
    }
  }
  processOptionFields(fields, values) {
    for (const subField of fields) {
      values.push({
        key: subField.id,
        title: subField.title
      });
    }
  }
  getParametersTitle(key) {
    return this.smsGatewayProviderParametersFields()?.find((field) => field.key === key)?.title ?? "";
  }
  static \u0275fac = function SmsGatewayProviderCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsGatewayProviderCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsGatewayProviderCreateWizardComponent, selectors: [["app-sms-gateway-provider-create-wizard"]], viewQuery: function SmsGatewayProviderCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c023, 5);
      \u0275\u0275viewQuery(_c121, 5);
      \u0275\u0275viewQuery(_c218, 7);
      \u0275\u0275viewQuery(_c310, 5);
      \u0275\u0275viewQuery(_c49, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.smsGatewayProviderDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.smsGatewayProviderParametersStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.smsGatewayProviderDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.smsGatewayProviderParametersForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["smsGatewayProviderDetailsStep", ""], ["smsGatewayProviderParametersStep", ""], ["confirmationTemplate", ""], ["smsGatewayProviderDetailsForm", ""], ["smsGatewayProviderParametersForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "loading", "useWizardButtonsOnly"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "smsGatewayProviderType"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function SmsGatewayProviderCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function SmsGatewayProviderCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function SmsGatewayProviderCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, SmsGatewayProviderCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, SmsGatewayProviderCreateWizardComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, SmsGatewayProviderCreateWizardComponent_ng_template_5_Template, 24, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("loading", ctx.isSubmitting())("useWizardButtonsOnly", true);
    }
  }, dependencies: [
    CommonModule,
    KeyValuePipe,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    SmsGatewayProviderDetailsSectionComponent,
    SmsGatewayProviderParametersSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsGatewayProviderCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-sms-gateway-provider-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      SmsGatewayProviderDetailsSectionComponent,
      SmsGatewayProviderParametersSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [loading]="isSubmitting()"
  [useWizardButtonsOnly]="true"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Sms Gateway Provider Details -->
<ng-template #smsGatewayProviderDetailsStep let-step>
  <div class="p-fluid">
    <app-sms-gateway-provider-details-section
      #smsGatewayProviderDetailsForm
      [createMode]="true"
      [entity]="newSmsGatewayProvider()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateSmsGatewayProviderDetails($event)"
    ></app-sms-gateway-provider-details-section>
  </div>
</ng-template>

<ng-template #smsGatewayProviderParametersStep let-step>
  <div class="p-fluid">
    <app-sms-gateway-provider-parameters-section
      #smsGatewayProviderParametersForm
      [createMode]="true"
      [entity]="newSmsGatewayProvider()"
      [smsGatewayProviderType]="smsGatewayProviderType()"
      (formValidityChange)="onParametersFormValidityChange($event)"
      (formValueChange)="updateSmsGatewayProviderParameters($event)"
    ></app-sms-gateway-provider-parameters-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Sms Gateway Provider Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your SMS Gateway Provider.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Type:</div>
              <div class="w-2/3">
                {{ newSmsGatewayProvider()[typePropertyKey]?.name }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newSmsGatewayProvider().name || 'Not provided' }}
              </div>
            </div>

            @for (
              item of newSmsGatewayProvider().parameters | keyvalue;
              track $index
            ) {
              <div class="flex">
                <div class="w-1/3 font-medium">
                  {{ getParametersTitle(item.key) }}:
                </div>
                <div class="w-2/3">
                  {{ item.value }}
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this SMS Gateway Provider.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { smsGatewayProviderDetailsStep: [{
    type: ViewChild,
    args: ["smsGatewayProviderDetailsStep"]
  }], smsGatewayProviderParametersStep: [{
    type: ViewChild,
    args: ["smsGatewayProviderParametersStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], smsGatewayProviderDetailsForm: [{
    type: ViewChild,
    args: ["smsGatewayProviderDetailsForm"]
  }], smsGatewayProviderParametersForm: [{
    type: ViewChild,
    args: ["smsGatewayProviderParametersForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsGatewayProviderCreateWizardComponent, { className: "SmsGatewayProviderCreateWizardComponent", filePath: "src/app/features/administration/components/sms-gateway-providers/sms-gateway-provider-create-wizard/sms-gateway-provider-create-wizard.component.ts", lineNumber: 48 });
})();

// src/app/features/administration/configs/sms-gateway-provider.grid.config.ts
var SmsGatewayProvidersGridConfig = class _SmsGatewayProvidersGridConfig {
  smsGatewayProvidersService = inject(SmsGatewayProvidersDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  entitiesService = inject(EntitiesService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  apiSchemaService = inject(ApiSchemaService);
  defaultStateValues = [
    SmsGatewayProviderListItem.StateEnum.Active,
    SmsGatewayProviderListItem.StateEnum.Suspended,
    SmsGatewayProviderListItem.StateEnum.Deleted
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { ownerId: "" };
  destroyRef = inject(DestroyRef);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    type: "type.id"
  };
  stateLabels = {
    active: "Active",
    suspended: "Suspended",
    deleted: "Deleted"
  };
  entityType = "sms-gateway-providers";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "type",
      header: "Type",
      sortable: true,
      filterType: "multiselect",
      filter: true,
      filterMatchMode: "in",
      valueGetter: (rowData) => {
        const typeValue = this.apiSchemaService.getEntityType(rowData, "smsgatewayprovider");
        return isDefined(typeValue?.name) ? typeValue?.name : "";
      },
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: SmsGatewayProviderListItem.StateEnum.Active
          },
          {
            label: "Suspended",
            value: SmsGatewayProviderListItem.StateEnum.Suspended
          },
          {
            label: "Deleted",
            value: SmsGatewayProviderListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  ownerId = "";
  dataService = this.smsGatewayProvidersService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
    this.loadFilterOptions();
  }
  getTitle() {
    return "SMS Gateway";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  loadFilterOptions() {
    this.entitiesService.listSmsGatewayProviderTypes(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe((smsGatewayProviderTypes) => {
      const typeColumn = this.columns.find((col) => col.field === "type");
      if (typeColumn?.filterConfig) {
        typeColumn.filterConfig.options = smsGatewayProviderTypes.items.map((type) => ({
          label: type.name ?? "",
          value: type.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
    });
  }
  onAdd() {
    this.openSmsGatewayProviderCreationDialog(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  openSmsGatewayProviderCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(SmsGatewayProviderCreateWizardComponent, {
      header: "SMS Gateway Config Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function SmsGatewayProvidersGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsGatewayProvidersGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmsGatewayProvidersGridConfig, factory: _SmsGatewayProvidersGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsGatewayProvidersGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/themes/theme-create-wizard/theme-create-wizard.component.ts
var _c024 = ["themeDetailsStep"];
var _c122 = ["confirmationTemplate"];
var _c219 = ["themeDetailsForm"];
function ThemeCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-theme-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function ThemeCreateWizardComponent_ng_template_1_Template_app_theme_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function ThemeCreateWizardComponent_ng_template_1_Template_app_theme_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateThemeDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newTheme())("ownerId", ctx_r2.ownerId);
  }
}
function ThemeCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Theme. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Custom CSS Link:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "p", 17);
    \u0275\u0275text(25, "Click finish to create this Theme.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newTheme().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newTheme().description || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx_r2.newTheme().settings) == null ? null : tmp_6_0["cssSrc"]) || "Not provided", " ");
  }
}
var ThemeCreateWizardComponent = class _ThemeCreateWizardComponent {
  themeDetailsStep;
  confirmationTemplate;
  // References to form components
  themeDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // Theme model to collect data across steps
  newTheme = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Theme Details",
        content: this.themeDetailsStep,
        complete: false,
        validate: () => this.themeDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newTheme.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newTheme.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the theme state with form data
  updateThemeDetails(formData) {
    this.newTheme.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const themeData = this.newTheme();
    this.isSubmitting.set(true);
    this.entitiesService.createTheme(__spreadProps(__spreadValues({}, themeData), { theme: "default" })).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "theme",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating theme:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newTheme.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function ThemeCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeCreateWizardComponent, selectors: [["app-theme-create-wizard"]], viewQuery: function ThemeCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c024, 5);
      \u0275\u0275viewQuery(_c122, 7);
      \u0275\u0275viewQuery(_c219, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.themeDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.themeDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["themeDetailsStep", ""], ["confirmationTemplate", ""], ["themeDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function ThemeCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function ThemeCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function ThemeCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, ThemeCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, ThemeCreateWizardComponent_ng_template_3_Template, 26, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    ThemeDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-theme-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      ThemeDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Theme Details -->
<ng-template #themeDetailsStep let-step>
  <div class="p-fluid">
    <app-theme-details-section
      #themeDetailsForm
      [createMode]="true"
      [entity]="newTheme()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateThemeDetails($event)"
    ></app-theme-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Theme Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Theme.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newTheme().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Description:</div>
              <div class="w-2/3">
                {{ newTheme().description || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Custom CSS Link:</div>
              <div class="w-2/3">
                {{ newTheme().settings?.['cssSrc'] || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Theme.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { themeDetailsStep: [{
    type: ViewChild,
    args: ["themeDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], themeDetailsForm: [{
    type: ViewChild,
    args: ["themeDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeCreateWizardComponent, { className: "ThemeCreateWizardComponent", filePath: "src/app/features/administration/components/themes/theme-create-wizard/theme-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/themes.grid.config.ts
var ThemesGridConfig = class _ThemesGridConfig {
  themesService = inject(ThemesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [ThemeResponse.StateEnum.Active];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { clientId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {};
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  baseThemes = Object.entries(getThemeDictionary()).map((key) => ({
    value: key[0],
    label: key[1].name ?? ""
  }));
  entityType = "themes";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "description",
      header: "Description",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "theme",
      header: "Base Theme",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: this.baseThemes
      },
      valueGetter: (rowData) => isDefined(rowData["theme"]) ? this.baseThemes.find((theme2) => theme2.value === rowData["theme"])?.label ?? "" : ""
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData["state"]) ? this.stateLabels[rowData["state"]] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: ThemeResponse.StateEnum.Active },
          { label: "Deleted", value: ThemeResponse.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData["modifiedDate"]) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.themesService;
  ownerId = "";
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
  }
  getTitle() {
    return "Themes";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.ownerId;
    this.openThemeCreationDialog(clientId).subscribe();
  }
  openThemeCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(ThemeCreateWizardComponent, {
      header: "Theme Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function ThemesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemesGridConfig, factory: _ThemesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/device-config-profiles/device-config-profile-create-wizard/device-config-profile-create-wizard.component.ts
var _c025 = ["deviceConfigProfileDetailsStep"];
var _c123 = ["confirmationTemplate"];
var _c220 = ["deviceConfigProfileDetailsForm"];
function DeviceConfigProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-device-config-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function DeviceConfigProfileCreateWizardComponent_ng_template_1_Template_app_device_config_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function DeviceConfigProfileCreateWizardComponent_ng_template_1_Template_app_device_config_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceConfigProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDeviceConfigProfile())("ownerId", ctx_r2.ownerId);
  }
}
function DeviceConfigProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Device Config Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Device Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Device Config Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceConfigProfile().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r2.newDeviceConfigProfile().deviceType) == null ? null : tmp_5_0.name, " ");
  }
}
var DeviceConfigProfileCreateWizardComponent = class _DeviceConfigProfileCreateWizardComponent {
  deviceConfigProfileDetailsStep;
  confirmationTemplate;
  // References to form components
  deviceConfigProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // DeviceConfigProfile model to collect data across steps
  newDeviceConfigProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    setTimeout(() => {
      this.steps = [
        {
          value: 1,
          header: "Device Config Profile Details",
          content: this.deviceConfigProfileDetailsStep,
          complete: false,
          validate: () => this.deviceConfigProfileDetailsForm.validate()
        },
        {
          value: 2,
          header: "Confirmation",
          content: this.confirmationTemplate,
          complete: true
        }
      ];
    });
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newDeviceConfigProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newDeviceConfigProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  updateDeviceConfigProfileDetails(formData) {
    this.newDeviceConfigProfile.update((current) => {
      const _a = formData, { ownerId: _ownerId } = _a, rest = __objRest(_a, ["ownerId"]);
      const updated = __spreadValues(__spreadValues({}, current), rest);
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const deviceConfigProfileData = this.newDeviceConfigProfile();
    if (isNullOrUndefined(deviceConfigProfileData) || Object.keys(deviceConfigProfileData).length === 0) {
      return;
    }
    this.isSubmitting.set(true);
    this.entitiesService.createDeviceConfigProfile(deviceConfigProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "device-config-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newDeviceConfigProfile.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function DeviceConfigProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceConfigProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeviceConfigProfileCreateWizardComponent, selectors: [["app-device-config-profile-create-wizard"]], viewQuery: function DeviceConfigProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c025, 5);
      \u0275\u0275viewQuery(_c123, 7);
      \u0275\u0275viewQuery(_c220, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceConfigProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceConfigProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["deviceConfigProfileDetailsStep", ""], ["confirmationTemplate", ""], ["deviceConfigProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function DeviceConfigProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function DeviceConfigProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function DeviceConfigProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, DeviceConfigProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DeviceConfigProfileCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    DeviceConfigProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceConfigProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-device-config-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      DeviceConfigProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Device Config Profile Details -->
<ng-template #deviceConfigProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-device-config-profile-details-section
      #deviceConfigProfileDetailsForm
      [createMode]="true"
      [entity]="newDeviceConfigProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateDeviceConfigProfileDetails($event)"
    ></app-device-config-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- DeviceConfigProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Device Config Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newDeviceConfigProfile().name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Device Type:</div>
              <div class="w-2/3">
                {{ newDeviceConfigProfile().deviceType?.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Device Config Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { deviceConfigProfileDetailsStep: [{
    type: ViewChild,
    args: ["deviceConfigProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], deviceConfigProfileDetailsForm: [{
    type: ViewChild,
    args: ["deviceConfigProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeviceConfigProfileCreateWizardComponent, { className: "DeviceConfigProfileCreateWizardComponent", filePath: "src/app/features/administration/components/device-config-profiles/device-config-profile-create-wizard/device-config-profile-create-wizard.component.ts", lineNumber: 42 });
})();

// src/app/features/administration/configs/device-config-profiles.config.ts
var DeviceConfigProfilesGridConfig = class _DeviceConfigProfilesGridConfig {
  deviceConfigProfilesService = inject(DeviceConfigProfilesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  entitiesService = inject(EntitiesService);
  adminStateService = inject(AdminStateService);
  adminTreeService = inject(AdminTreeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = [
    DeviceConfigProfileListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { ownerId: "" };
  ownerId = "";
  destroyRef = inject(DestroyRef);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    type: "deviceType.id"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  entityType = "device-config-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "type",
      header: "Type",
      sortable: true,
      filterType: "multiselect",
      filter: true,
      filterMatchMode: "in",
      valueGetter: (rowData) => {
        return rowData.deviceType?.name ?? "";
      },
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          {
            label: "Active",
            value: DeviceConfigProfileListItem.StateEnum.Active
          },
          {
            label: "Deleted",
            value: DeviceConfigProfileListItem.StateEnum.Deleted
          }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData["modifiedDate"]), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.deviceConfigProfilesService;
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
    this.loadFilterOptions().catch(() => {
    });
  }
  getTitle() {
    return "Device Config Profiles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openDeviceConfigProfileCreationDialog(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((createdDeviceConfigProfile) => {
      if (isDefined(createdDeviceConfigProfile)) {
      }
    });
  }
  openDeviceConfigProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(DeviceConfigProfileCreateWizardComponent, {
      header: "Device Config Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  async loadFilterOptions() {
    try {
      const deviceTypesResponse = await firstValueFrom(this.entitiesService.listDeviceTypes(this.ownerId).pipe(catchError(() => {
        console.error("Failed to load device types");
        return EMPTY;
      })));
      if (isNullOrUndefined(deviceTypesResponse) || isEmpty(deviceTypesResponse.items)) {
        console.warn("No device types found for client");
        return;
      }
      const deviceTypes = deviceTypesResponse.items;
      let allowedRootDeviceTypeIds = await this.getAvailableRootDeviceTypeIdsForClient();
      if (isEmpty(allowedRootDeviceTypeIds)) {
        allowedRootDeviceTypeIds = await this.getAvailableRootDeviceTypeIdsForVendor();
      }
      const typeColumn = this.columns.find((col) => col.field === "type");
      if (typeColumn?.filterConfig) {
        const exceptionDeviceTypeIds = [];
        const filteredOptions = this.filterAllowedDeviceTypes(this.ownerId, deviceTypes, allowedRootDeviceTypeIds, exceptionDeviceTypeIds);
        typeColumn.filterConfig.options = filteredOptions.map((option) => ({
          label: option.value,
          value: option.key
        }));
      }
    } catch (error) {
      console.error("Error loading device type filter options:", error);
    }
  }
  /**
   * Gets the available root device type IDs for the current client
   * @returns Promise resolving to an array of device type IDs
   */
  async getAvailableRootDeviceTypeIdsForClient() {
    if (isNullOrUndefined(this.params["clientId"])) {
      return [];
    }
    const client = this.adminStateService.getClientById(this.params["clientId"]);
    if (client && isDefined(client.availableDeviceTypes)) {
      return client.availableDeviceTypes.map((deviceType) => deviceType.id);
    }
    try {
      const fetchedClient = await this.adminTreeService.tryLoadClient(this.params["clientId"]);
      if (fetchedClient?.availableDeviceTypes) {
        return fetchedClient.availableDeviceTypes.map((deviceType) => deviceType.id);
      }
    } catch (error) {
      console.error("Error loading client device types:", error);
    }
    return [];
  }
  /**
   * Gets the available root device type IDs for a selected vendor
   * @returns Promise resolving to an array of device type IDs
   */
  async getAvailableRootDeviceTypeIdsForVendor() {
    const clientId = this.params["clientId"];
    let client = null;
    let vendorId = null;
    if (isDefined(clientId)) {
      client = this.adminStateService.getClientById(clientId) ?? await this.adminTreeService.tryLoadClient(clientId);
      vendorId = client ? client.owner.id : null;
    } else {
      vendorId = this.params["vendorId"];
    }
    if (isNullOrUndefined(vendorId)) {
      return [];
    }
    const vendor = this.adminStateService.getVendorById(vendorId);
    if (vendor && isDefined(vendor.availableDeviceTypes)) {
      return vendor.availableDeviceTypes.map((deviceType) => deviceType.id);
    }
    try {
      const fetchedVendor = await this.adminTreeService.fetchClientVendor(vendorId);
      if (fetchedVendor && isDefined(fetchedVendor.availableDeviceTypes)) {
        return fetchedVendor.availableDeviceTypes.map((deviceType) => deviceType.id);
      }
    } catch (error) {
      console.error("Error loading vendor device types:", error);
    }
    return [];
  }
  /**
   * Filters device types based on allowed types and exceptions,
   * and formats them for dropdown selection
   *
   * @param ownerId - ID of the owner (client/vendor)
   * @param deviceTypes - List of device types to filter
   * @param allowedTypes - List of allowed root device type IDs
   * @param exceptions - Device type IDs that are always allowed
   * @returns Array of formatted key-value pairs for dropdown options
   */
  filterAllowedDeviceTypes(ownerId, deviceTypes, allowedTypes, exceptions) {
    return deviceTypes.filter((item) => {
      if (exceptions.includes(item.id)) {
        return true;
      }
      return item.state === "active" && isDefined(item.parent) && (item.owner.id === ownerId || allowedTypes.length === 0 || allowedTypes.includes(item.parent.id));
    }).map((item) => {
      const parentName = deviceTypes.find((x) => x.id === item?.parent?.id)?.name ?? "Unknown";
      return {
        key: item.id,
        value: `${parentName} - ${item.name}`
      };
    }).sort((a, b) => a.value.localeCompare(b.value));
  }
  static \u0275fac = function DeviceConfigProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceConfigProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceConfigProfilesGridConfig, factory: _DeviceConfigProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceConfigProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/custom-fields/custom-field-create-wizard/custom-field-create-wizard.component.ts
var _c026 = ["customFieldDetailsStep"];
var _c124 = ["confirmationTemplate"];
var _c221 = ["customFieldDetailsForm"];
function CustomFieldCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-custom-field-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function CustomFieldCreateWizardComponent_ng_template_1_Template_app_custom_field_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function CustomFieldCreateWizardComponent_ng_template_1_Template_app_custom_field_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateCustomFieldDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newCustomField());
  }
}
function CustomFieldCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Custom Field. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Id:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Applies To:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 17);
    \u0275\u0275text(30, "Click finish to create this Custom Field.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCustomField()["tag"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCustomField().title, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCustomField()["entityType"]["name"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCustomField().type, " ");
  }
}
var CustomFieldCreateWizardComponent = class _CustomFieldCreateWizardComponent {
  customFieldDetailsStep;
  confirmationTemplate;
  // References to form components
  customFieldDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // CustomField model to collect data across steps
  newCustomField = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  loading = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Custom Field Details",
        content: this.customFieldDetailsStep,
        complete: false,
        validate: () => this.customFieldDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newCustomField.update((current) => __spreadValues({}, current));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newCustomField.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the customField state with form data
  updateCustomFieldDetails(formData) {
    this.newCustomField.update((current) => {
      const updated = __spreadValues(__spreadValues({}, current), formData);
      return updated;
    });
  }
  onWizardComplete() {
    this.loading.set(true);
    firstValueFrom(this.accountsService.getCompany(this.ownerId ?? "")).then((company) => {
      const customFieldData = {
        id: this.newCustomField()["tag"],
        title: this.newCustomField()["title"],
        type: this.newCustomField()["type"],
        required: this.newCustomField()["required"],
        values: this.newCustomField()["values"]?.map((value) => ({
          key: value.key,
          value: value.value
        })),
        owner: company.type
      };
      customFieldData.required = !!customFieldData.required;
      customFieldData.values = customFieldData.values ?? [];
      const customFields = JSON.parse(JSON.stringify(company.customFields));
      const bucket = customFields[this.newCustomField()["entityType"]["id"]] ?? [];
      bucket.push(customFieldData);
      customFields[this.newCustomField()["entityType"]["id"]] = bucket;
      function getDuplicateFieldCount(fields, id) {
        let count = 0;
        for (const arr of Object.values(fields)) {
          if (Array.isArray(arr)) {
            for (const x of arr) {
              if (x.id === id)
                count++;
            }
          }
        }
        return count;
      }
      const duplicateCount = getDuplicateFieldCount(customFields, customFieldData.id);
      if (duplicateCount > 1) {
        throw new Error("A custom field with the same ID already exists");
      }
      const updateDetails$ = company.type === "client" ? this.accountsService.updateClientDetails(this.ownerId ?? "", { customFields }, "body") : this.accountsService.updateVendorDetails(this.ownerId ?? "", { customFields }, "body");
      return updateDetails$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          this.broadcastService.broadcast("entity-updated", {
            entityType: "custom-field",
            operation: "create",
            entityId: response.id
          });
          this.loading.set(false);
          this.dialogRef.close(response);
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error creating custom field:", error);
        }
      });
    }).catch(() => {
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newCustomField.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function CustomFieldCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomFieldCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomFieldCreateWizardComponent, selectors: [["app-custom-field-create-wizard"]], viewQuery: function CustomFieldCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c026, 5);
      \u0275\u0275viewQuery(_c124, 7);
      \u0275\u0275viewQuery(_c221, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customFieldDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customFieldDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["customFieldDetailsStep", ""], ["confirmationTemplate", ""], ["customFieldDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function CustomFieldCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function CustomFieldCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function CustomFieldCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, CustomFieldCreateWizardComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CustomFieldCreateWizardComponent_ng_template_3_Template, 31, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.loading());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    CustomFieldDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-custom-field-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      CustomFieldDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="loading()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: CustomField Details -->
<ng-template #customFieldDetailsStep let-step>
  <div class="p-fluid">
    <app-custom-field-details-section
      #customFieldDetailsForm
      [createMode]="true"
      [entity]="newCustomField()"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateCustomFieldDetails($event)"
    ></app-custom-field-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- CustomField Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Custom Field.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Id:</div>
              <div class="w-2/3">
                {{ newCustomField()['tag'] }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newCustomField().title }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Applies To:</div>
              <div class="w-2/3">
                {{ newCustomField()['entityType']['name'] }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Type:</div>
              <div class="w-2/3">
                {{ newCustomField().type }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Custom Field.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { customFieldDetailsStep: [{
    type: ViewChild,
    args: ["customFieldDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], customFieldDetailsForm: [{
    type: ViewChild,
    args: ["customFieldDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomFieldCreateWizardComponent, { className: "CustomFieldCreateWizardComponent", filePath: "src/app/features/administration/components/custom-fields/custom-field-create-wizard/custom-field-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/custom-fields.grid.config.ts
var CustomFieldsGridConfig = class _CustomFieldsGridConfig {
  customFieldsService = inject(CustomFieldsDataAdapter);
  assetTypes = this.customFieldsService.assetTypes;
  types = this.customFieldsService.types;
  dialogRef = null;
  dialogService = inject(DialogService);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  params = {};
  filterState = signal({});
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  columnsSignal = computed(() => this.createColumns());
  entityType = "custom-fields";
  columns = [];
  dataService = this.customFieldsService;
  ownerId = "";
  createColumns() {
    return [
      {
        field: "name",
        header: "Name",
        filter: true,
        filterType: "text",
        filterMatchMode: "contains"
      },
      {
        field: "entityType",
        header: "Applies To",
        valueGetter: (rowData) => isDefined(rowData?._entityType?.name) ? rowData._entityType.name : "",
        filter: true,
        filterType: "multiselect",
        filterMatchMode: "in",
        filterConfig: {
          type: "multiselect",
          options: this.assetTypes().map((type) => ({
            label: type.name ?? "",
            value: type.id ?? ""
          }))
        }
      },
      {
        field: "type",
        header: "Type",
        valueGetter: (rowData) => isDefined(rowData?.type?.name) ? rowData.type.name : "",
        filter: true,
        filterType: "multiselect",
        filterMatchMode: "in",
        filterConfig: {
          type: "multiselect",
          options: this.types().map((type) => ({
            label: type.name ?? "",
            value: type.id ?? ""
          }))
        }
      }
    ];
  }
  clearFilters() {
    this.filterState.set({});
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "Custom Fields";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.ownerId;
    this.openCustomFieldCreationDialog(clientId).subscribe((createdCustomField) => {
      if (isDefined(createdCustomField)) {
      }
    });
  }
  openCustomFieldCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(CustomFieldCreateWizardComponent, {
      header: "Custom Field Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function CustomFieldsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomFieldsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomFieldsGridConfig, factory: _CustomFieldsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomFieldsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/user-roles/user-role-create-wizard/user-role-create-wizard.component.ts
var _c027 = ["userRoleDetailsStep"];
var _c125 = ["confirmationTemplate"];
var _c222 = ["userRoleDetailsForm"];
function UserRoleCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-user-role-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function UserRoleCreateWizardComponent_ng_template_1_Template_app_user_role_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function UserRoleCreateWizardComponent_ng_template_1_Template_app_user_role_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUserRoleDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newUserRole());
  }
}
function UserRoleCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your User Role. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 16)(14, "p", 17);
    \u0275\u0275text(15, "Click finish to create this User Role.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUserRole().name || "Not provided", " ");
  }
}
var UserRoleCreateWizardComponent = class _UserRoleCreateWizardComponent {
  userRoleDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  userRoleDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // UserRole model to collect data across steps
  newUserRole = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "User Role Details",
        content: this.userRoleDetailsStep,
        complete: false,
        validate: () => this.userRoleDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newUserRole.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newUserRole.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the userRole state with form data
  updateUserRoleDetails(formData) {
    this.newUserRole.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const userRoleData = this.newUserRole();
    this.isSubmitting.set(true);
    this.accountsService.createUserRole(userRoleData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "userrole",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating user role:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newUserRole.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function UserRoleCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserRoleCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserRoleCreateWizardComponent, selectors: [["app-user-role-create-wizard"]], viewQuery: function UserRoleCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c027, 5);
      \u0275\u0275viewQuery(_c125, 7);
      \u0275\u0275viewQuery(_c222, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userRoleDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userRoleDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["userRoleDetailsStep", ""], ["confirmationTemplate", ""], ["userRoleDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function UserRoleCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function UserRoleCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function UserRoleCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, UserRoleCreateWizardComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, UserRoleCreateWizardComponent_ng_template_3_Template, 16, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    UserRoleDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRoleCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-user-role-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      UserRoleDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: UserRole Details -->
<ng-template #userRoleDetailsStep let-step>
  <div class="p-fluid">
    <app-user-role-details-section
      #userRoleDetailsForm
      [createMode]="true"
      [entity]="newUserRole()"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateUserRoleDetails($event)"
    ></app-user-role-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- UserRole Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your User Role.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newUserRole().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this User Role.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { userRoleDetailsStep: [{
    type: ViewChild,
    args: ["userRoleDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], userRoleDetailsForm: [{
    type: ViewChild,
    args: ["userRoleDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserRoleCreateWizardComponent, { className: "UserRoleCreateWizardComponent", filePath: "src/app/features/administration/components/user-roles/user-role-create-wizard/user-role-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/user-roles.grid.config.ts
var UserRolesGridConfig = class _UserRolesGridConfig {
  userRolesService = inject(UserRolesDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  filterState = signal({});
  params = {};
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  entityType = "user-roles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "description",
      header: "Description",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.userRolesService;
  ownerId = "";
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({});
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
  }
  getTitle() {
    return "User Roles";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), field, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const clientId = this.ownerId;
    this.openUserRoleCreationDialog(clientId).subscribe();
  }
  openUserRoleCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(UserRoleCreateWizardComponent, {
      header: "User Role Wizard",
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function UserRolesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserRolesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserRolesGridConfig, factory: _UserRolesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRolesGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/users/user-create-wizard/user-create-wizard.component.ts
var _c028 = ["userDetailsStep"];
var _c126 = ["userRolesStep"];
var _c223 = ["confirmationTemplate"];
var _c311 = ["userDetailsForm"];
var _c410 = ["userRolesForm"];
function UserCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-user-details-section", 7, 3);
    \u0275\u0275listener("formValidityChange", function UserCreateWizardComponent_ng_template_1_Template_app_user_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function UserCreateWizardComponent_ng_template_1_Template_app_user_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUserDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newUser())("ownerId", ctx_r2.ownerId);
  }
}
function UserCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-user-roles-section", 7, 4);
    \u0275\u0275listener("formValidityChange", function UserCreateWizardComponent_ng_template_3_Template_app_user_roles_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRolesFormValidityChange($event));
    })("formValueChange", function UserCreateWizardComponent_ng_template_3_Template_app_user_roles_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUserRoles($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newUser())("ownerId", ctx_r2.ownerId);
  }
}
function UserCreateWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "span", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "p", 13);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your User. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15)(9, "div", 16);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16);
    \u0275\u0275text(15, "Email Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
    \u0275\u0275text(20, "Mobile Number:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 15)(24, "div", 16);
    \u0275\u0275text(25, "Time Zone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 15)(29, "div", 16);
    \u0275\u0275text(30, "Language:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 17);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 15)(34, "div", 16);
    \u0275\u0275text(35, "Default Client:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 17);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 15)(39, "div", 16);
    \u0275\u0275text(40, "Send Invite:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 17);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 15)(44, "div", 16);
    \u0275\u0275text(45, "Roles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 17);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 18)(49, "p", 19);
    \u0275\u0275text(50, "Click finish to create this User.");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser().emailAddress || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser().mobile || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser().timeZoneId || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser().language || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = ctx_r2.newUser().defaultClient) == null ? null : tmp_10_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newUser()["invite"] ? "Yes" : "No", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getRoleNames(ctx_r2.newUser().roles), " ");
  }
}
var UserCreateWizardComponent = class _UserCreateWizardComponent {
  userDetailsStep;
  userRolesStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  userDetailsForm;
  userRolesForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  // User model to collect data across steps
  newUser = signal({});
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "User Details",
        content: this.userDetailsStep,
        complete: false,
        validate: () => this.userDetailsForm.validate()
      },
      {
        value: 2,
        header: "User Roles",
        content: this.userRolesStep,
        complete: false,
        validate: () => this.userRolesForm.validate()
      },
      {
        value: 3,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newUser.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newUser.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
  }
  onRolesFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
  }
  // Update the user state with form data
  updateUserDetails(formData) {
    this.newUser.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateUserRoles(formData) {
    this.newUser.update((current) => __spreadProps(__spreadValues({}, current), {
      roles: formData["roles"]
    }));
  }
  onWizardComplete() {
    const userData = this.newUser();
    this.isSubmitting.set(true);
    this.accountsService.createUser(userData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "user",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating user:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newUser.set({});
    this.dialogRef.close();
  }
  getRoleNames(roles) {
    if (isEmpty(roles)) {
      return "No roles assigned";
    }
    return roles?.map((role) => role.name).join(", ") ?? "No roles assigned";
  }
  static \u0275fac = function UserCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserCreateWizardComponent, selectors: [["app-user-create-wizard"]], viewQuery: function UserCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c028, 5);
      \u0275\u0275viewQuery(_c126, 5);
      \u0275\u0275viewQuery(_c223, 7);
      \u0275\u0275viewQuery(_c311, 5);
      \u0275\u0275viewQuery(_c410, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userRolesStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userDetailsForm = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.userRolesForm = _t.first);
    }
  }, decls: 7, vars: 5, consts: [["userDetailsStep", ""], ["userRolesStep", ""], ["confirmationTemplate", ""], ["userDetailsForm", ""], ["userRolesForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function UserCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 5);
      \u0275\u0275listener("complete", function UserCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function UserCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275template(1, UserCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, UserCreateWizardComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, UserCreateWizardComponent_ng_template_5_Template, 51, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    UserDetailsSectionComponent,
    UserRolesSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-user-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      UserDetailsSectionComponent,
      UserRolesSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
  <!-- Step 1: User Details -->
  <ng-template #userDetailsStep let-step>
    <div class="p-fluid">
      <app-user-details-section
        #userDetailsForm
        [createMode]="true"
        [entity]="newUser()"
        [ownerId]="ownerId"
        (formValidityChange)="onDetailsFormValidityChange($event)"
        (formValueChange)="updateUserDetails($event)"
      ></app-user-details-section>
    </div>
  </ng-template>

  <!-- Step 2: User Roles -->
  <ng-template #userRolesStep let-step>
    <div class="p-fluid">
      <app-user-roles-section
        #userRolesForm
        [createMode]="true"
        [entity]="newUser()"
        [ownerId]="ownerId"
        (formValidityChange)="onRolesFormValidityChange($event)"
        (formValueChange)="updateUserRoles($event)"
      ></app-user-roles-section>
    </div>
  </ng-template>

  <ng-template #confirmationTemplate let-step>
    <div class="flex gap-6">
      <span class="pi pi-check !text-5xl"></span>

      <div class="flex-1">
        <div class="grid">
          <!-- User Details Section -->
          <div class="col-12 md:col-6">
            <p class="mb-4">
              You've completed all of the information required and we're ready
              to create your User.
            </p>

            <div class="space-y-2">
              <!-- Each field in a side-by-side layout -->
              <div class="flex">
                <div class="w-1/3 font-medium">Name:</div>
                <div class="w-2/3">
                  {{ newUser().name || 'Not provided' }}
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3 font-medium">Email Address:</div>
                <div class="w-2/3">
                  {{ newUser().emailAddress || 'Not provided' }}
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3 font-medium">Mobile Number:</div>
                <div class="w-2/3">
                  {{ newUser().mobile || 'Not provided' }}
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3 font-medium">Time Zone:</div>
                <div class="w-2/3">
                  {{ newUser().timeZoneId || 'Not provided' }}
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3 font-medium">Language:</div>
                <div class="w-2/3">
                  {{ newUser().language || 'Not provided' }}
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3 font-medium">Default Client:</div>
                <div class="w-2/3">
                  {{ newUser().defaultClient?.name || 'Not provided' }}
                </div>
              </div>
              <div class="flex">
                <div class="w-1/3 font-medium">Send Invite:</div>
                <div class="w-2/3">
                  {{ newUser()['invite'] ? 'Yes' : 'No' }}
                </div>
              </div>
              <div class="flex">
                <div class="w-1/3 font-medium">Roles:</div>
                <div class="w-2/3">
                  {{ getRoleNames(newUser().roles) }}
                </div>
              </div>
            </div>

            <div
              class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
            >
              <p class="mb-0">Click finish to create this User.</p>
            </div>
          </div>
        </div>
      </div>
    </div></ng-template
  >
</app-wizard>
` }]
  }], null, { userDetailsStep: [{
    type: ViewChild,
    args: ["userDetailsStep"]
  }], userRolesStep: [{
    type: ViewChild,
    args: ["userRolesStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], userDetailsForm: [{
    type: ViewChild,
    args: ["userDetailsForm"]
  }], userRolesForm: [{
    type: ViewChild,
    args: ["userRolesForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserCreateWizardComponent, { className: "UserCreateWizardComponent", filePath: "src/app/features/administration/components/users/user-create-wizard/user-create-wizard.component.ts", lineNumber: 50 });
})();

// src/app/features/administration/configs/users.grid.config.ts
var import_lodash = __toESM(require_lodash());
var UsersGridConfig = class _UsersGridConfig {
  usersService = inject(UsersDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  entitiesService = inject(EntitiesService);
  dialogRef = null;
  dialogService = inject(DialogService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  defaultStateValues = ["active", "suspended", "inactive"];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = {};
  destroyRef = inject(DestroyRef);
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    costCentre: "costCentre.id"
  };
  baseColumns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "emailAddress",
      header: "Email",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "mobile",
      header: "Mobile Number",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "state",
      header: "State",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: "active" },
          { label: "Suspended", value: "suspended" },
          { label: "Deleted", value: "deleted" },
          { label: "Inactive", value: "inactive" }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "costCentre",
      header: "Cost Centre",
      valueGetter: (rowData) => isDefined(rowData.costCentre?.name) ? rowData.costCentre?.name : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "timeZoneId",
      header: "Timezone",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "language",
      header: "Language",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains",
      transform: "text-ellipsis"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  columns = [];
  dataService = this.usersService;
  ownerId = "";
  entityType = "users";
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    let isClientContext = false;
    this.columns = (0, import_lodash.cloneDeepWith)(this.baseColumns, (value) => {
      if (typeof value === "function") {
        return value;
      }
      return void 0;
    });
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
      isClientContext = true;
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
    if (isClientContext) {
      this.loadFilterOptions();
    } else {
      this.columns = this.columns.filter((col) => col.field !== "costCentre");
    }
  }
  getTitle() {
    return "Users";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  loadFilterOptions() {
    this.entitiesService.listCostCentres(this.ownerId).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe((costCentres) => {
      const costCentreColumn = this.columns.find((col) => col.field === "costCentre");
      if (costCentreColumn?.filterConfig) {
        costCentreColumn.filterConfig.options = costCentres.items.map((costCentre) => ({
          label: costCentre.name ?? "",
          value: costCentre.id
        })).sort((a, b) => a.label.localeCompare(b.label));
      }
    });
  }
  onAdd() {
    const clientId = this.ownerId;
    this.openUserCreationDialog(clientId).subscribe((createdUser) => {
      if (isDefined(createdUser)) {
      }
    });
  }
  openUserCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(UserCreateWizardComponent, {
      header: "User Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function UsersGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersGridConfig, factory: _UsersGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/distributor-vendors/distributor-vendor-create-wizard/distributor-vendor-create-wizard.component.ts
var _c029 = ["vendorDetailsStep"];
var _c127 = ["confirmationTemplate"];
var _c224 = ["vendorDetailsForm"];
function DistributorVendorCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-vendor-details", 5, 2);
    \u0275\u0275listener("formValidityChange", function DistributorVendorCreateWizardComponent_ng_template_1_Template_app_vendor_details_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function DistributorVendorCreateWizardComponent_ng_template_1_Template_app_vendor_details_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateVendorDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newVendor())("ownerId", ctx_r2.ownerId);
  }
}
function DistributorVendorCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Vendor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Website:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "p", 17);
    \u0275\u0275text(25, "Click finish to create this Vendor.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newVendor().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newVendor().website || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getGroupName(ctx_r2.newVendor().group) || "Not provided", " ");
  }
}
var DistributorVendorCreateWizardComponent = class _DistributorVendorCreateWizardComponent {
  vendorDetailsStep;
  confirmationTemplate;
  // References to form components
  vendorDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cacheService = inject(RequestCacheService);
  // Vendor model to collect data across steps
  newVendor = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  companyGroups = [];
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Vendor Details",
        content: this.vendorDetailsStep,
        complete: false,
        validate: () => this.vendorDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newVendor.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
      this.cacheService.getOrFetch(`company-groups-${this.ownerId}`, () => this.accountsService.listCompanyGroups(this.ownerId), 3e5).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
        return of({ items: [] });
      })).subscribe((data) => {
        this.companyGroups = [
          { value: DEFAULT_SYSTEM_ID, label: "None" },
          ...data.items.map((item) => ({
            label: item.name ?? "",
            value: item.id ?? ""
          })).sort((a, b) => a.label.localeCompare(b.label))
        ];
      });
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newVendor.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the vendor state with form data
  updateVendorDetails(formData) {
    this.newVendor.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const vendorData = this.newVendor();
    this.isSubmitting.set(true);
    this.accountsService.createVendor(vendorData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "vendor",
          operation: "create",
          entityId: response.id
        });
        this.broadcastService.broadcast("tree-refresh-required", {
          entityType: "vendor",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating vendor:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newVendor.set({});
    this.dialogRef.close();
  }
  getGroupName(groupId) {
    if (isNullOrUndefined(groupId) || groupId === "") {
      return "Not provided";
    }
    if (groupId === DEFAULT_SYSTEM_ID) {
      return "None";
    }
    const group = this.companyGroups.find((g) => g.value === groupId);
    return isDefined(group) ? group.label : "Unknown Group";
  }
  static \u0275fac = function DistributorVendorCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorVendorCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorVendorCreateWizardComponent, selectors: [["app-distributor-vendor-create-wizard"]], viewQuery: function DistributorVendorCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c029, 5);
      \u0275\u0275viewQuery(_c127, 7);
      \u0275\u0275viewQuery(_c224, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.vendorDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.vendorDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["vendorDetailsStep", ""], ["confirmationTemplate", ""], ["vendorDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function DistributorVendorCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function DistributorVendorCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function DistributorVendorCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, DistributorVendorCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DistributorVendorCreateWizardComponent_ng_template_3_Template, 26, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    VendorDetailsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorVendorCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-vendor-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      VendorDetailsComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Vendor Details -->
<ng-template #vendorDetailsStep let-step>
  <div class="p-fluid">
    <app-vendor-details
      #vendorDetailsForm
      [createMode]="true"
      [entity]="newVendor()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateVendorDetails($event)"
    ></app-vendor-details>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Vendor Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Vendor.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newVendor().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Website:</div>
              <div class="w-2/3">
                {{ newVendor().website || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Group:</div>
              <div class="w-2/3">
                {{ getGroupName(newVendor().group) || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Vendor.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { vendorDetailsStep: [{
    type: ViewChild,
    args: ["vendorDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], vendorDetailsForm: [{
    type: ViewChild,
    args: ["vendorDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorVendorCreateWizardComponent, { className: "DistributorVendorCreateWizardComponent", filePath: "src/app/features/administration/components/distributor-vendors/distributor-vendor-create-wizard/distributor-vendor-create-wizard.component.ts", lineNumber: 44 });
})();

// src/app/features/administration/configs/vendors.grid.config.ts
var VendorsGridConfig = class _VendorsGridConfig {
  vendorsService = inject(VendorsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  accountsService = inject(AccountsService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  defaultStateValues = [
    VendorListItem.StateEnum.Active,
    VendorListItem.StateEnum.Inactive,
    VendorListItem.StateEnum.Suspended
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { distributorId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  fieldTransformations = {
    type: "type.id"
  };
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    inactive: "Inactive",
    suspended: "Suspended"
  };
  entityType = "vendors";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "website",
      header: "Website",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "group",
      header: "Group",
      valueGetter: (rowData) => {
        if (isNullOrUndefined(rowData.group))
          return "None";
        const value = this.vendorGroupTypes.find((group) => group.value === rowData.group)?.label;
        return value ?? "None";
      },
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: VendorListItem.StateEnum.Active },
          { label: "Deleted", value: VendorListItem.StateEnum.Deleted },
          { label: "Inactive", value: VendorListItem.StateEnum.Inactive },
          { label: "Suspended", value: VendorListItem.StateEnum.Suspended }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "clients",
      header: "Clients",
      valueGetter: (rowData) => isDefined(rowData.counts?.["client"]) ? rowData.counts?.["client"] : 0
    },
    {
      field: "assets",
      header: "Assets",
      valueGetter: (rowData) => isDefined(rowData.counts?.["asset"]) ? rowData.counts?.["asset"] : 0
    },
    {
      field: "devices",
      header: "Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["device"]) ? rowData.counts?.["device"] : 0
    },
    {
      field: "companion-camera",
      header: "Companion Camera Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["companionCameraDevice"]) ? rowData.counts?.["companionCameraDevice"] : 0
    },
    {
      field: "users",
      header: "Users",
      valueGetter: (rowData) => isDefined(rowData.counts?.["user"]) ? rowData.counts?.["user"] : 0
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.vendorsService;
  vendorGroupTypes = [];
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    this.loadFilterOptions();
  }
  getTitle() {
    return "Vendors";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["distributorId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter(),
      counts: "client,asset,device,companion-camera,user"
    };
  }
  onFilterChange(field, value) {
    const actualField = this.fieldTransformations[field] || field;
    const column = this.columns.find((col) => col.field === field);
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
    if (field === "state") {
      const includeDeleted = Array.isArray(value) && value.includes(VendorListItem.StateEnum.Deleted);
      this.broadcastService.broadcast("vendor-filter-changed", {
        distributorId: this.params["distributorId"],
        includeDeleted
      });
    }
  }
  loadFilterOptions() {
    this.accountsService.listCompanyGroups(this.params["distributorId"]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe((groups) => {
      const typeColumn = this.columns.find((col) => col.field === "group");
      if (typeColumn?.filterConfig) {
        this.vendorGroupTypes = groups.items.map((type) => ({
          label: type.name ?? "",
          value: type.id
        })).sort((a, b) => a.label.localeCompare(b.label));
        typeColumn.filterConfig.options = this.vendorGroupTypes;
      }
    });
  }
  onAdd() {
    const ownerId = this.params["distributorId"];
    this.openVendorCreationDialog(ownerId).subscribe();
  }
  openVendorCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(DistributorVendorCreateWizardComponent, {
      header: "Vendor Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function VendorsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VendorsGridConfig, factory: _VendorsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/vendor-clients/vendor-client-create-wizard/vendor-client-create-wizard.component.ts
var _c030 = ["clientDetailsStep"];
var _c128 = ["confirmationTemplate"];
var _c225 = ["clientDetailsForm"];
function VendorClientCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-client-details", 5, 2);
    \u0275\u0275listener("formValidityChange", function VendorClientCreateWizardComponent_ng_template_1_Template_app_client_details_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function VendorClientCreateWizardComponent_ng_template_1_Template_app_client_details_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateClientDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newClient())("ownerId", ctx_r2.ownerId);
  }
}
function VendorClientCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Client. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Website:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Group:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "p", 17);
    \u0275\u0275text(25, "Click finish to create this Client.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.newClient().name || "Not provided");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newClient().website || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getGroupName(ctx_r2.newClient().group) || "Not provided", " ");
  }
}
var VendorClientCreateWizardComponent = class _VendorClientCreateWizardComponent {
  clientDetailsStep;
  confirmationTemplate;
  // References to form components
  clientDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cacheService = inject(RequestCacheService);
  cdr = inject(ChangeDetectorRef);
  // Client model to collect data across steps
  newClient = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  companyGroups = [];
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Client Details",
        content: this.clientDetailsStep,
        complete: false,
        validate: () => this.clientDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newClient.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
      this.cacheService.getOrFetch(`company-groups-${this.ownerId}`, () => this.accountsService.listCompanyGroups(this.ownerId), 3e5).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
        return of({ items: [] });
      })).subscribe((data) => {
        this.companyGroups = [
          { value: DEFAULT_SYSTEM_ID, label: "None" },
          ...data.items.map((item) => ({
            label: item.name ?? "",
            value: item.id ?? ""
          })).sort((a, b) => a.label.localeCompare(b.label))
        ];
      });
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newClient.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the client state with form data
  updateClientDetails(formData) {
    this.newClient.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const clientData = this.newClient();
    this.isSubmitting.set(true);
    this.accountsService.createClient(clientData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "create",
          entityId: response.id
        });
        this.broadcastService.broadcast("tree-refresh-required", {
          entityType: "client",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating client:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newClient.set({});
    this.dialogRef.close();
  }
  getGroupName(groupId) {
    if (isNullOrUndefined(groupId) || groupId === "") {
      return "Not provided";
    }
    if (groupId === DEFAULT_SYSTEM_ID) {
      return "None";
    }
    const group = this.companyGroups.find((g) => g.value === groupId);
    return isDefined(group) ? group.label : "Unknown Group";
  }
  static \u0275fac = function VendorClientCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorClientCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorClientCreateWizardComponent, selectors: [["app-vendor-client-create-wizard"]], viewQuery: function VendorClientCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c030, 5);
      \u0275\u0275viewQuery(_c128, 7);
      \u0275\u0275viewQuery(_c225, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["clientDetailsStep", ""], ["confirmationTemplate", ""], ["clientDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function VendorClientCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function VendorClientCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function VendorClientCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, VendorClientCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, VendorClientCreateWizardComponent_ng_template_3_Template, 26, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    ClientDetailsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorClientCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-client-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      ClientDetailsComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Client Details -->
<ng-template #clientDetailsStep let-step>
  <div class="p-fluid">
    <app-client-details
      #clientDetailsForm
      [createMode]="true"
      [entity]="newClient()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateClientDetails($event)"
    ></app-client-details>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Client Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Client.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">{{ newClient().name || 'Not provided' }}</div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Website:</div>
              <div class="w-2/3">
                {{ newClient().website || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Group:</div>
              <div class="w-2/3">
                {{ getGroupName(newClient().group) || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Client.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { clientDetailsStep: [{
    type: ViewChild,
    args: ["clientDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], clientDetailsForm: [{
    type: ViewChild,
    args: ["clientDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorClientCreateWizardComponent, { className: "VendorClientCreateWizardComponent", filePath: "src/app/features/administration/components/vendor-clients/vendor-client-create-wizard/vendor-client-create-wizard.component.ts", lineNumber: 45 });
})();

// src/app/features/administration/configs/clients.grid.config.ts
var ClientsGridConfig = class _ClientsGridConfig {
  clientsService = inject(ClientsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  accountsService = inject(AccountsService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  destroyRef = inject(DestroyRef);
  defaultStateValues = [
    ClientListItem.StateEnum.Active,
    ClientListItem.StateEnum.Inactive,
    ClientListItem.StateEnum.Suspended
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = { vendorId: "" };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    inactive: "Inactive",
    suspended: "Suspended"
  };
  entityType = "clients";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "website",
      header: "Website",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "group",
      header: "Group",
      valueGetter: (rowData) => {
        if (isNullOrUndefined(rowData.group))
          return "None";
        const value = this.clientGroupTypes.find((group) => group.value === rowData.group)?.label;
        return value ?? "None";
      },
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: []
      }
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: ClientListItem.StateEnum.Active },
          { label: "Deleted", value: ClientListItem.StateEnum.Deleted },
          { label: "Inactive", value: ClientListItem.StateEnum.Inactive },
          { label: "Suspended", value: ClientListItem.StateEnum.Suspended }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "assets",
      header: "Assets",
      valueGetter: (rowData) => isDefined(rowData.counts?.["asset"]) ? rowData.counts?.["asset"] : 0
    },
    {
      field: "devices",
      header: "Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["device"]) ? rowData.counts?.["device"] : 0
    },
    {
      field: "companion-camera",
      header: "Companion Camera Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["companion-camera"]) ? rowData.counts?.["companion-camera"] : 0
    },
    {
      field: "users",
      header: "Users",
      valueGetter: (rowData) => isDefined(rowData.counts?.["user"]) ? rowData.counts?.["user"] : 0
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.clientsService;
  clientGroupTypes = [];
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
    this.loadFilterOptions();
  }
  getTitle() {
    return "Clients";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["vendorId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter(),
      counts: "asset,device,companion-camera,user"
    };
  }
  onFilterChange(field, value) {
    const actualField = field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  loadFilterOptions() {
    this.accountsService.listCompanyGroups(this.params["vendorId"]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe((groups) => {
      const typeColumn = this.columns.find((col) => col.field === "type");
      if (typeColumn?.filterConfig) {
        this.clientGroupTypes = groups.items.map((type) => ({
          label: type.name ?? "",
          value: type.id
        })).sort((a, b) => a.label.localeCompare(b.label));
        typeColumn.filterConfig.options = this.clientGroupTypes;
      }
    });
  }
  onAdd() {
    const ownerId = this.params["vendorId"];
    this.openClientCreationDialog(ownerId).subscribe((createdClient) => {
      if (isDefined(createdClient)) {
      }
    });
  }
  openClientCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(VendorClientCreateWizardComponent, {
      header: "Client Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function ClientsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientsGridConfig, factory: _ClientsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/super-admin-distributors/super-admin-distributors-create-wizard/super-admin-distributors-create-wizard.component.ts
var _c031 = ["distributorDetailsStep"];
var _c129 = ["confirmationTemplate"];
var _c226 = ["distributorDetailsForm"];
function SuperAdminDistributorsCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-distributor-details", 5, 2);
    \u0275\u0275listener("formValidityChange", function SuperAdminDistributorsCreateWizardComponent_ng_template_1_Template_app_distributor_details_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function SuperAdminDistributorsCreateWizardComponent_ng_template_1_Template_app_distributor_details_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDistributorDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDistributor())("ownerId", ctx_r2.ownerId);
  }
}
function SuperAdminDistributorsCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Distributor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Website:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Tags:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "p", 17);
    \u0275\u0275text(25, "Click finish to create this Distributor.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDistributor().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDistributor().website || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_6_0 = ctx_r2.newDistributor().tags) == null ? null : tmp_6_0.toString()) || "Not provided", " ");
  }
}
var SuperAdminDistributorsCreateWizardComponent = class _SuperAdminDistributorsCreateWizardComponent {
  distributorDetailsStep;
  confirmationTemplate;
  // References to form components
  distributorDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // Distributor model to collect data across steps
  newDistributor = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Distributor Details",
        content: this.distributorDetailsStep,
        complete: false,
        validate: () => this.distributorDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newDistributor.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newDistributor.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the distributor state with form data
  updateDistributorDetails(formData) {
    this.newDistributor.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const distributorData = this.newDistributor();
    this.isSubmitting.set(true);
    this.accountsService.createDistributor(distributorData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "distributor",
          operation: "create",
          entityId: response.id
        });
        this.broadcastService.broadcast("tree-refresh-required", {
          entityType: "distributor",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating distributor:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newDistributor.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function SuperAdminDistributorsCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminDistributorsCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminDistributorsCreateWizardComponent, selectors: [["app-super-admin-distributors-create-wizard"]], viewQuery: function SuperAdminDistributorsCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c031, 5);
      \u0275\u0275viewQuery(_c129, 7);
      \u0275\u0275viewQuery(_c226, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.distributorDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.distributorDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["distributorDetailsStep", ""], ["confirmationTemplate", ""], ["distributorDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function SuperAdminDistributorsCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function SuperAdminDistributorsCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function SuperAdminDistributorsCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, SuperAdminDistributorsCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, SuperAdminDistributorsCreateWizardComponent_ng_template_3_Template, 26, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    WizardComponent,
    ButtonModule,
    DistributorDetailsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminDistributorsCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin-distributors-create-wizard", imports: [
      CommonModule,
      WizardComponent,
      ButtonModule,
      DistributorDetailsComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Distributor Details -->
<ng-template #distributorDetailsStep let-step>
  <div class="p-fluid">
    <app-distributor-details
      #distributorDetailsForm
      [createMode]="true"
      [entity]="newDistributor()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateDistributorDetails($event)"
    ></app-distributor-details>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Distributor Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Distributor.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newDistributor().name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Website:</div>
              <div class="w-2/3">
                {{ newDistributor().website || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Tags:</div>
              <div class="w-2/3">
                {{ newDistributor().tags?.toString() || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Distributor.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { distributorDetailsStep: [{
    type: ViewChild,
    args: ["distributorDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], distributorDetailsForm: [{
    type: ViewChild,
    args: ["distributorDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminDistributorsCreateWizardComponent, { className: "SuperAdminDistributorsCreateWizardComponent", filePath: "src/app/features/administration/components/super-admin-distributors/super-admin-distributors-create-wizard/super-admin-distributors-create-wizard.component.ts", lineNumber: 41 });
})();

// src/app/features/administration/configs/distributors.grid.config.ts
var DistributorsGridConfig = class _DistributorsGridConfig {
  distributorsService = inject(DistributorsDataAdapter);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [
    DistributorListItem.StateEnum.Active,
    DistributorListItem.StateEnum.Inactive,
    DistributorListItem.StateEnum.Suspended
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = {};
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  stateLabels = {
    active: "Active",
    deleted: "Deleted",
    inactive: "Inactive",
    suspended: "Suspended"
  };
  entityType = "distributors";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "website",
      header: "Website",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: DistributorListItem.StateEnum.Active },
          { label: "Deleted", value: DistributorListItem.StateEnum.Deleted },
          { label: "Inactive", value: DistributorListItem.StateEnum.Inactive },
          {
            label: "Suspended",
            value: DistributorListItem.StateEnum.Suspended
          }
        ],
        defaultSelected: this.defaultStateValues
      },
      transform: "capitalize"
    },
    {
      field: "vendor",
      header: "Vendors",
      valueGetter: (rowData) => isDefined(rowData.counts?.["vendor"]) ? rowData.counts?.["vendor"] : 0
    },
    {
      field: "clients",
      header: "Clients",
      valueGetter: (rowData) => isDefined(rowData.counts?.["client"]) ? rowData.counts?.["client"] : 0
    },
    {
      field: "assets",
      header: "Assets",
      valueGetter: (rowData) => isDefined(rowData.counts?.["asset"]) ? rowData.counts?.["asset"] : 0
    },
    {
      field: "devices",
      header: "Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["device"]) ? rowData.counts?.["device"] : 0
    },
    {
      field: "companion-camera",
      header: "Companion Camera Devices",
      valueGetter: (rowData) => isDefined(rowData.counts?.["companion-camera"]) ? rowData.counts?.["companion-camera"] : 0
    },
    {
      field: "users",
      header: "Users",
      valueGetter: (rowData) => isDefined(rowData.counts?.["user"]) ? rowData.counts?.["user"] : 0
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.distributorsService;
  distributorGroupTypes = [];
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({
      state: {
        value: this.defaultStateValues,
        operator: "in"
      }
    });
  }
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Distributors";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: DEFAULT_SYSTEM_ID,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField,
      filters: this.rqlFilter(),
      counts: "vendor,client,asset,device,companion-camera,user"
    };
  }
  onFilterChange(field, value) {
    const actualField = field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    const ownerId = DEFAULT_SYSTEM_ID;
    this.openDistributorCreationDialog(ownerId).subscribe((createdDistributor) => {
      if (isDefined(createdDistributor)) {
      }
    });
  }
  openDistributorCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(SuperAdminDistributorsCreateWizardComponent, {
      header: "Distributor Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function DistributorsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistributorsGridConfig, factory: _DistributorsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorsGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/geo-lock-profiles/geo-lock-profile-create-wizard/geo-lock-profile-create-wizard.component.ts
var _c032 = ["geoLockProfileDetailsStep"];
var _c130 = ["confirmationTemplate"];
var _c227 = ["geoLockProfileDetailsForm"];
function GeoLockProfileCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-geo-lock-profile-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function GeoLockProfileCreateWizardComponent_ng_template_1_Template_app_geo_lock_profile_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function GeoLockProfileCreateWizardComponent_ng_template_1_Template_app_geo_lock_profile_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGeoLockProfileDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newGeoLockProfile())("ownerId", ctx_r2.ownerId);
  }
}
function GeoLockProfileCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Geo Lock Profile. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Radius:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Geo Lock Profile.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeoLockProfile().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getRadius() || "Not provided", " ");
  }
}
var GeoLockProfileCreateWizardComponent = class _GeoLockProfileCreateWizardComponent {
  geoLockProfileDetailsStep;
  confirmationTemplate;
  cdr = inject(ChangeDetectorRef);
  // References to form components
  geoLockProfileDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  measurementUnitsService = inject(MeasurementUnitsService);
  // GeoLockProfile model to collect data across steps
  newGeoLockProfile = signal({});
  // Form validity state
  formIsValid = signal(false);
  displayWizard = false;
  steps = [];
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Geo Lock Profile Details",
        content: this.geoLockProfileDetailsStep,
        complete: false,
        validate: () => this.geoLockProfileDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newGeoLockProfile.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.displayWizard = true;
    this.newGeoLockProfile.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the geoLockProfile state with form data
  updateGeoLockProfileDetails(formData) {
    this.newGeoLockProfile.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const geoLockProfileData = this.newGeoLockProfile();
    this.isSubmitting.set(true);
    this.entitiesService.createGeoLockProfile(geoLockProfileData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "geo-lock-profile",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating geo lock profile:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newGeoLockProfile.set({});
    this.dialogRef.close();
  }
  getRadius() {
    const radius = this.newGeoLockProfile().radiusKm;
    return isDefined(radius) ? this.measurementUnitsService.fromBackend(MeasurementUnitType.DISTANCE, radius, 2) : null;
  }
  static \u0275fac = function GeoLockProfileCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoLockProfileCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeoLockProfileCreateWizardComponent, selectors: [["app-geo-lock-profile-create-wizard"]], viewQuery: function GeoLockProfileCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c032, 5);
      \u0275\u0275viewQuery(_c130, 7);
      \u0275\u0275viewQuery(_c227, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geoLockProfileDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geoLockProfileDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["geoLockProfileDetailsStep", ""], ["confirmationTemplate", ""], ["geoLockProfileDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function GeoLockProfileCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function GeoLockProfileCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function GeoLockProfileCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, GeoLockProfileCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, GeoLockProfileCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    GeoLockProfileDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoLockProfileCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-geo-lock-profile-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      GeoLockProfileDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: GeoLockProfile Details -->
<ng-template #geoLockProfileDetailsStep let-step>
  <div class="p-fluid">
    <app-geo-lock-profile-details-section
      #geoLockProfileDetailsForm
      [createMode]="true"
      [entity]="newGeoLockProfile()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateGeoLockProfileDetails($event)"
    ></app-geo-lock-profile-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- GeoLockProfile Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Geo Lock Profile.
          </p>

          <div class="space-y-2">
            <!-- Each field in a side-by-side layout -->
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newGeoLockProfile().name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Radius:</div>
              <div class="w-2/3">
                {{ getRadius() || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Geo Lock Profile.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { geoLockProfileDetailsStep: [{
    type: ViewChild,
    args: ["geoLockProfileDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], geoLockProfileDetailsForm: [{
    type: ViewChild,
    args: ["geoLockProfileDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeoLockProfileCreateWizardComponent, { className: "GeoLockProfileCreateWizardComponent", filePath: "src/app/features/administration/components/geo-lock-profiles/geo-lock-profile-create-wizard/geo-lock-profile-create-wizard.component.ts", lineNumber: 44 });
})();

// src/app/features/administration/configs/geo-lock-profiles.grid.config.ts
var GeoLockProfilesGridConfig = class _GeoLockProfilesGridConfig {
  geoLockProfilesService = inject(GeoLockProfilesDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  utilityService = inject(UtilityService);
  gridBaseService = inject(GridBaseService);
  dialogRef = null;
  dialogService = inject(DialogService);
  defaultStateValues = [
    GeoLockProfileListItem.StateEnum.Active
  ];
  filterState = signal({
    state: {
      value: this.defaultStateValues,
      operator: "in"
    }
  });
  params = {};
  stateLabels = {
    active: "Active",
    deleted: "Deleted"
  };
  rqlFilter = computed(() => this.utilityService.constructRqlFilter(this.filterState()));
  entityType = "geo-lock-profiles";
  columns = [
    {
      field: "name",
      header: "Name",
      filter: true,
      filterType: "text",
      filterMatchMode: "contains"
    },
    {
      field: "state",
      header: "State",
      valueGetter: (rowData) => isDefined(rowData.state) ? this.stateLabels[rowData.state] : "",
      filter: true,
      filterType: "multiselect",
      filterMatchMode: "in",
      filterConfig: {
        type: "multiselect",
        options: [
          { label: "Active", value: GeoLockProfileListItem.StateEnum.Active },
          { label: "Deleted", value: GeoLockProfileListItem.StateEnum.Deleted }
        ],
        defaultSelected: this.defaultStateValues
      }
    },
    {
      field: "modifiedDate",
      header: "Modified",
      filter: false,
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.geoLockProfilesService;
  ownerId = "";
  getTitle() {
    return "Geo Lock Profiles";
  }
  getFilters() {
    return this.filterState();
  }
  clearFilters() {
    this.filterState.set({});
  }
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
  }
  getRequestParams(event) {
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: isDefined(event?.rows) ? event.rows : DEFAULT_PAGE_SIZE,
      sortField: "name",
      filters: this.rqlFilter()
    };
  }
  onFilterChange(field, value) {
    const actualField = field;
    const column = this.columns.find((col) => col.field === field);
    if (Array.isArray(value)) {
      const newFilters2 = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
      this.filterState.set(newFilters2);
      return;
    }
    const newFilters = this.gridBaseService.handleFilters(this.filterState(), actualField, value, void 0, column?.filterMatchMode);
    this.filterState.set(newFilters);
  }
  onAdd() {
    this.openGeoLockProfileCreationDialog(this.ownerId).subscribe();
  }
  openGeoLockProfileCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(GeoLockProfileCreateWizardComponent, {
      header: "Geo Lock Profile Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function GeoLockProfilesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoLockProfilesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeoLockProfilesGridConfig, factory: _GeoLockProfilesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoLockProfilesGridConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/configs/admin-grid-configs-registration.ts
var GRID_ENTITY_TYPES = {
  // Client entity types
  CLIENT_DEVICE_PROVIDERS: "client-device-providers",
  CLIENT_ASSETS: "client-assets",
  CLIENT_GEOFENCES: "client-geofences",
  CLIENT_ALERTS: "client-alerts",
  CLIENT_HARDWARE_DEVICES: "client-hardware-devices",
  CLIENT_ASSET_TAGS: "client-asset-tags",
  CLIENT_SIM_CARDS: "client-sim-cards",
  CLIENT_SMS_GATEWAY_PROVIDERS: "client-sms-gateway-providers",
  CLIENT_IO_TYPES: "client-io-types",
  CLIENT_DEVICE_CONFIG_PROFILES: "client-device-config-profiles",
  CLIENT_ASSET_RATING_PROFILES: "client-asset-rating-profiles",
  CLIENT_ASSET_STATE_PROFILES: "client-asset-state-profiles",
  CLIENT_OVERSPEED_PROFILES: "client-overspeed-profiles",
  CLIENT_CUSTOM_FIELDS: "client-custom-fields",
  CLIENT_USERS: "client-users",
  CLIENT_USER_ROLES: "client-user-roles",
  CLIENT_ROAD_PROFILES: "client-road-profiles",
  CLIENT_GEO_LOCK_PROFILES: "client-geo-lock-profiles",
  // Vendor entity types
  VENDOR_ROAD_PROFILES: "vendor-road-profiles",
  VENDOR_OVERSPEED_PROFILES: "vendor-overspeed-profiles",
  VENDOR_IO_TYPES: "vendor-io-types",
  VENDOR_DEVICE_CONFIG_PROFILES: "vendor-device-config-profiles",
  VENDOR_THEMES: "vendor-themes",
  VENDOR_CUSTOM_FIELDS: "vendor-custom-fields",
  VENDOR_SMS_GATEWAY_PROVIDERS: "vendor-sms-gateway-providers",
  VENDOR_EMAIL_PROVIDERS: "vendor-email-providers",
  VENDOR_USERS: "vendor-users",
  VENDOR_USER_ROLES: "vendor-user-roles",
  VENDOR_CLIENTS: "vendor-clients",
  // Distributor entity types
  DISTRIBUTOR_VENDORS: "distributor-vendors",
  DISTRIBUTOR_USERS: "distributor-users",
  DISTRIBUTOR_USER_ROLES: "distributor-user-roles",
  DISTRIBUTOR_ROAD_PROFILES: "distributor-road-profiles",
  DISTRIBUTOR_THEMES: "distributor-themes",
  DISTRIBUTOR_DEVICE_PROVIDERS: "distributor-device-providers",
  DISTRIBUTOR_EMAIL_PROVIDERS: "distributor-email-providers",
  // Super Admin entity types
  SUPER_ADMIN_DISTRIBUTORS: "super-admin-distributors"
};
function createGridConfigEntry(entityType, config) {
  return { entityType, config };
}
var CLIENT_CONFIGS = [
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_DEVICE_PROVIDERS, DeviceProvidersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ASSETS, AssetsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_GEOFENCES, GeofencesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ALERTS, AlertsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_HARDWARE_DEVICES, DevicesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ASSET_TAGS, AssetTagsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_SIM_CARDS, SimCardsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_SMS_GATEWAY_PROVIDERS, SmsGatewayProvidersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_IO_TYPES, IoTypesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_DEVICE_CONFIG_PROFILES, DeviceConfigProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ASSET_RATING_PROFILES, AssetRatingProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ASSET_STATE_PROFILES, AssetStateProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_OVERSPEED_PROFILES, OverspeedProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_CUSTOM_FIELDS, CustomFieldsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_USERS, UsersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_USER_ROLES, UserRolesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_ROAD_PROFILES, RoadProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.CLIENT_GEO_LOCK_PROFILES, GeoLockProfilesGridConfig)
];
var VENDOR_CONFIGS = [
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_ROAD_PROFILES, RoadProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_OVERSPEED_PROFILES, OverspeedProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_IO_TYPES, IoTypesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_DEVICE_CONFIG_PROFILES, DeviceConfigProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_THEMES, ThemesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_CUSTOM_FIELDS, CustomFieldsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_SMS_GATEWAY_PROVIDERS, SmsGatewayProvidersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_EMAIL_PROVIDERS, EmailProvidersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_USERS, UsersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_USER_ROLES, UserRolesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.VENDOR_CLIENTS, ClientsGridConfig)
];
var DISTRIBUTOR_CONFIGS = [
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_VENDORS, VendorsGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_USERS, UsersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_USER_ROLES, UserRolesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_ROAD_PROFILES, RoadProfilesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_THEMES, ThemesGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_DEVICE_PROVIDERS, DeviceProvidersGridConfig),
  createGridConfigEntry(GRID_ENTITY_TYPES.DISTRIBUTOR_EMAIL_PROVIDERS, EmailProvidersGridConfig)
];
var SUPER_ADMIN_CONFIGS = [
  createGridConfigEntry(GRID_ENTITY_TYPES.SUPER_ADMIN_DISTRIBUTORS, DistributorsGridConfig)
];
var ALL_GRID_CONFIGS = [
  ...CLIENT_CONFIGS,
  ...VENDOR_CONFIGS,
  ...DISTRIBUTOR_CONFIGS,
  ...SUPER_ADMIN_CONFIGS
];
var ADMIN_GRID_CONFIGS_PROVIDER = {
  provide: GRID_CONFIGS,
  useValue: ALL_GRID_CONFIGS,
  multi: true
};

// src/app/features/administration/components/asset-categories/asset-category-create-wizard/asset-category-create-wizard.component.ts
var _c033 = ["assetCategoryDetailsStep"];
var _c131 = ["confirmationTemplate"];
var _c228 = ["assetCategoryDetailsForm"];
function AssetCategoryCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-asset-category-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AssetCategoryCreateWizardComponent_ng_template_1_Template_app_asset_category_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetCategoryCreateWizardComponent_ng_template_1_Template_app_asset_category_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetCategoryDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAssetCategory())("ownerId", ctx_r2.ownerId);
  }
}
function AssetCategoryCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset Category. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Parent:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Asset Category.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.newAssetCategory().parent) == null ? null : tmp_4_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetCategory().name || "Not provided", " ");
  }
}
var AssetCategoryCreateWizardComponent = class _AssetCategoryCreateWizardComponent {
  assetCategoryDetailsStep;
  confirmationTemplate;
  // References to form components
  assetCategoryDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  cacheService = inject(RequestCacheService);
  // AssetCategory model to collect data across steps
  newAssetCategory = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Asset Category Details",
        content: this.assetCategoryDetailsStep,
        complete: false,
        validate: () => this.assetCategoryDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAssetCategory.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newAssetCategory.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the assetCategory state with form data
  updateAssetCategoryDetails(formData) {
    this.newAssetCategory.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const assetCategoryData = this.newAssetCategory();
    this.isSubmitting.set(true);
    this.entitiesService.createAssetCategory(assetCategoryData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset-category",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
        this.cacheService.clearCacheByPattern(`asset-categories-`);
      },
      error: (error) => {
        console.error("Error creating asset category:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAssetCategory.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function AssetCategoryCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetCategoryCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetCategoryCreateWizardComponent, selectors: [["app-asset-category-create-wizard"]], viewQuery: function AssetCategoryCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c033, 5);
      \u0275\u0275viewQuery(_c131, 7);
      \u0275\u0275viewQuery(_c228, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetCategoryDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetCategoryDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["assetCategoryDetailsStep", ""], ["confirmationTemplate", ""], ["assetCategoryDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetCategoryCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AssetCategoryCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetCategoryCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetCategoryCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetCategoryCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetCategoryDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-category-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetCategoryDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Asset Category Details -->
<ng-template #assetCategoryDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-category-details-section
      #assetCategoryDetailsForm
      [createMode]="true"
      [entity]="newAssetCategory()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetCategoryDetails($event)"
    ></app-asset-category-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Asset Category Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset Category.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Parent:</div>
              <div class="w-2/3">
                {{ newAssetCategory().parent?.name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newAssetCategory().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset Category.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetCategoryDetailsStep: [{
    type: ViewChild,
    args: ["assetCategoryDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], assetCategoryDetailsForm: [{
    type: ViewChild,
    args: ["assetCategoryDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetCategoryCreateWizardComponent, { className: "AssetCategoryCreateWizardComponent", filePath: "src/app/features/administration/components/asset-categories/asset-category-create-wizard/asset-category-create-wizard.component.ts", lineNumber: 44 });
})();

// src/app/features/administration/configs/asset-categories.grid.config.ts
var AssetCategoriesGridConfig = class _AssetCategoriesGridConfig {
  assetCategoriesService = inject(AssetCategoriesDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = { clientId: "" };
  entityType = "asset-categories";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData?.entity?.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData?.entity?.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.assetCategoriesService;
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Categories";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField
    };
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openAssetCategoryCreationDialog(clientId).pipe(take(1)).subscribe();
  }
  openAssetCategoryCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetCategoryCreateWizardComponent, {
      header: "Asset Category Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetCategoriesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetCategoriesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetCategoriesGridConfig, factory: _AssetCategoriesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoriesGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/asset-groups/asset-group-create-wizard/asset-group-create-wizard.component.ts
var _c034 = ["assetGroupDetailsStep"];
var _c132 = ["confirmationTemplate"];
var _c229 = ["assetGroupDetailsForm"];
function AssetGroupCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-asset-group-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function AssetGroupCreateWizardComponent_ng_template_1_Template_app_asset_group_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function AssetGroupCreateWizardComponent_ng_template_1_Template_app_asset_group_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAssetGroupDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newAssetGroup())("ownerId", ctx_r2.ownerId);
  }
}
function AssetGroupCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Asset Group. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Parent:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Asset Group.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.newAssetGroup().parent) == null ? null : tmp_4_0.name) || "Root", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newAssetGroup().name || "Not provided", " ");
  }
}
var AssetGroupCreateWizardComponent = class _AssetGroupCreateWizardComponent {
  assetGroupDetailsStep;
  confirmationTemplate;
  // References to form components
  assetGroupDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // AssetGroup model to collect data across steps
  newAssetGroup = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Asset Group Details",
        content: this.assetGroupDetailsStep,
        complete: false,
        validate: () => this.assetGroupDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newAssetGroup.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newAssetGroup.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the assetGroup state with form data
  updateAssetGroupDetails(formData) {
    this.newAssetGroup.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const assetGroupData = this.newAssetGroup();
    this.isSubmitting.set(true);
    this.entitiesService.createAssetGroup(assetGroupData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "asset-group",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating asset group:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newAssetGroup.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function AssetGroupCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetGroupCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetGroupCreateWizardComponent, selectors: [["app-asset-group-create-wizard"]], viewQuery: function AssetGroupCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c034, 5);
      \u0275\u0275viewQuery(_c132, 7);
      \u0275\u0275viewQuery(_c229, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetGroupDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.assetGroupDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["assetGroupDetailsStep", ""], ["confirmationTemplate", ""], ["assetGroupDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function AssetGroupCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function AssetGroupCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function AssetGroupCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, AssetGroupCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AssetGroupCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    AssetGroupDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-asset-group-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      AssetGroupDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Asset Group Details -->
<ng-template #assetGroupDetailsStep let-step>
  <div class="p-fluid">
    <app-asset-group-details-section
      #assetGroupDetailsForm
      [createMode]="true"
      [entity]="newAssetGroup()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateAssetGroupDetails($event)"
    ></app-asset-group-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Asset Group Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Asset Group.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Parent:</div>
              <div class="w-2/3">
                {{ newAssetGroup().parent?.name || 'Root' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newAssetGroup().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Asset Group.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { assetGroupDetailsStep: [{
    type: ViewChild,
    args: ["assetGroupDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], assetGroupDetailsForm: [{
    type: ViewChild,
    args: ["assetGroupDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetGroupCreateWizardComponent, { className: "AssetGroupCreateWizardComponent", filePath: "src/app/features/administration/components/asset-groups/asset-group-create-wizard/asset-group-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/asset-groups.grid.config.ts
var AssetGroupsGridConfig = class _AssetGroupsGridConfig {
  assetGroupsService = inject(AssetGroupsDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = { clientId: "" };
  entityType = "asset-groups";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData?.entity?.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData?.entity?.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.assetGroupsService;
  ownerId = "";
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    }
  }
  getTitle() {
    return "Asset Groups";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField
    };
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openAssetGroupCreationDialog(clientId).subscribe();
  }
  openAssetGroupCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(AssetGroupCreateWizardComponent, {
      header: "Asset Group Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function AssetGroupsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetGroupsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetGroupsGridConfig, factory: _AssetGroupsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetGroupsGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/company-groups/company-group-create-wizard/company-group-create-wizard.component.ts
var _c035 = ["companyGroupDetailsStep"];
var _c133 = ["confirmationTemplate"];
var _c230 = ["companyGroupDetailsForm"];
function CompanyGroupCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-company-group-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function CompanyGroupCreateWizardComponent_ng_template_1_Template_app_company_group_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function CompanyGroupCreateWizardComponent_ng_template_1_Template_app_company_group_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateCompanyGroupDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newCompanyGroup())("ownerId", ctx_r2.ownerId);
  }
}
function CompanyGroupCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Company Group. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Parent:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Company Group.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r2.newCompanyGroup().parent) == null ? null : tmp_3_0.name) || "Root", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCompanyGroup().name || "Not provided", " ");
  }
}
var CompanyGroupCreateWizardComponent = class _CompanyGroupCreateWizardComponent {
  companyGroupDetailsStep;
  confirmationTemplate;
  // References to form components
  companyGroupDetailsForm;
  accountsService = inject(AccountsService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // CompanyGroup model to collect data across steps
  newCompanyGroup = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Company Group Details",
        content: this.companyGroupDetailsStep,
        complete: false,
        validate: () => this.companyGroupDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newCompanyGroup.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newCompanyGroup.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the companyGroup state with form data
  updateCompanyGroupDetails(formData) {
    this.newCompanyGroup.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const companyGroupData = this.newCompanyGroup();
    this.isSubmitting.set(true);
    this.accountsService.createCompanyGroup(companyGroupData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "company-group",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating company group:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newCompanyGroup.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function CompanyGroupCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyGroupCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyGroupCreateWizardComponent, selectors: [["app-company-group-create-wizard"]], viewQuery: function CompanyGroupCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c035, 5);
      \u0275\u0275viewQuery(_c133, 7);
      \u0275\u0275viewQuery(_c230, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.companyGroupDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.companyGroupDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["companyGroupDetailsStep", ""], ["confirmationTemplate", ""], ["companyGroupDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function CompanyGroupCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function CompanyGroupCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function CompanyGroupCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, CompanyGroupCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CompanyGroupCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    CompanyGroupDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyGroupCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-company-group-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      CompanyGroupDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Company Group Details -->
<ng-template #companyGroupDetailsStep>
  <div class="p-fluid">
    <app-company-group-details-section
      #companyGroupDetailsForm
      [createMode]="true"
      [entity]="newCompanyGroup()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateCompanyGroupDetails($event)"
    ></app-company-group-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Company Group Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Company Group.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Parent:</div>
              <div class="w-2/3">
                {{ newCompanyGroup().parent?.name || 'Root' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newCompanyGroup().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Company Group.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { companyGroupDetailsStep: [{
    type: ViewChild,
    args: ["companyGroupDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], companyGroupDetailsForm: [{
    type: ViewChild,
    args: ["companyGroupDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyGroupCreateWizardComponent, { className: "CompanyGroupCreateWizardComponent", filePath: "src/app/features/administration/components/company-groups/company-group-create-wizard/company-group-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/company-groups.grid.config.ts
var CompanyGroupsGridConfig = class _CompanyGroupsGridConfig {
  companyGroupsService = inject(CompanyGroupsDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = {};
  entityType = "company-groups";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData.entity.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.entity.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.companyGroupsService;
  ownerId = "";
  initialize(params) {
    this.params = params;
    if (isDefined(this.params["clientId"])) {
      this.ownerId = String(this.params["clientId"]);
    } else if (isDefined(this.params["vendorId"])) {
      this.ownerId = String(this.params["vendorId"]);
    } else if (isDefined(this.params["distributorId"])) {
      this.ownerId = String(this.params["distributorId"]);
    }
  }
  getTitle() {
    return "Company Groups";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.ownerId,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField
    };
  }
  onAdd() {
    const clientId = this.ownerId;
    this.openCompanyGroupCreationDialog(clientId).pipe(take(1)).subscribe();
  }
  openCompanyGroupCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(CompanyGroupCreateWizardComponent, {
      header: "Company Group Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function CompanyGroupsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyGroupsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyGroupsGridConfig, factory: _CompanyGroupsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyGroupsGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/cost-centres/cost-centre-create-wizard/cost-centre-create-wizard.component.ts
var _c036 = ["costCentreDetailsStep"];
var _c134 = ["confirmationTemplate"];
var _c231 = ["costCentreDetailsForm"];
function CostCentreCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-cost-centre-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function CostCentreCreateWizardComponent_ng_template_1_Template_app_cost_centre_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function CostCentreCreateWizardComponent_ng_template_1_Template_app_cost_centre_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateCostCentreDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newCostCentre())("ownerId", ctx_r2.ownerId);
  }
}
function CostCentreCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Cost Centre. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Parent:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Cost Centre.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.newCostCentre().parent) == null ? null : tmp_4_0.name) || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newCostCentre().name || "Not provided", " ");
  }
}
var CostCentreCreateWizardComponent = class _CostCentreCreateWizardComponent {
  costCentreDetailsStep;
  confirmationTemplate;
  // References to form components
  costCentreDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // CostCentre model to collect data across steps
  newCostCentre = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Cost Centre Details",
        content: this.costCentreDetailsStep,
        complete: false,
        validate: () => this.costCentreDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newCostCentre.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newCostCentre.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the costCentre state with form data
  updateCostCentreDetails(formData) {
    this.newCostCentre.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const costCentreData = this.newCostCentre();
    this.isSubmitting.set(true);
    this.entitiesService.createCostCentre(costCentreData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "cost-centre",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating cost centre:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newCostCentre.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function CostCentreCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CostCentreCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CostCentreCreateWizardComponent, selectors: [["app-cost-centre-create-wizard"]], viewQuery: function CostCentreCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c036, 5);
      \u0275\u0275viewQuery(_c134, 7);
      \u0275\u0275viewQuery(_c231, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.costCentreDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.costCentreDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["costCentreDetailsStep", ""], ["confirmationTemplate", ""], ["costCentreDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function CostCentreCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function CostCentreCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function CostCentreCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, CostCentreCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, CostCentreCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    CostCentreDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCentreCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-cost-centre-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      CostCentreDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Cost Centre Details -->
<ng-template #costCentreDetailsStep let-step>
  <div class="p-fluid">
    <app-cost-centre-details-section
      #costCentreDetailsForm
      [createMode]="true"
      [entity]="newCostCentre()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateCostCentreDetails($event)"
    ></app-cost-centre-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Cost Centre Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Cost Centre.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Parent:</div>
              <div class="w-2/3">
                {{ newCostCentre().parent?.name || 'Not provided' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newCostCentre().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Cost Centre.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { costCentreDetailsStep: [{
    type: ViewChild,
    args: ["costCentreDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], costCentreDetailsForm: [{
    type: ViewChild,
    args: ["costCentreDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CostCentreCreateWizardComponent, { className: "CostCentreCreateWizardComponent", filePath: "src/app/features/administration/components/cost-centres/cost-centre-create-wizard/cost-centre-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/cost-centres.grid.config.ts
var CostCentresGridConfig = class _CostCentresGridConfig {
  costCentresService = inject(CostCentresDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = { clientId: "" };
  entityType = "cost-centres";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData?.entity?.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData?.entity?.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.costCentresService;
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Cost Centres";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField
    };
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openCostCentreCreationDialog(clientId).pipe(take(1)).subscribe();
  }
  openCostCentreCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(CostCentreCreateWizardComponent, {
      header: "Cost Centre Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function CostCentresGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CostCentresGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CostCentresGridConfig, factory: _CostCentresGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCentresGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/geofence-groups/geofence-group-create-wizard/geofence-group-create-wizard.component.ts
var _c037 = ["geofenceGroupDetailsStep"];
var _c135 = ["confirmationTemplate"];
var _c232 = ["geofenceGroupDetailsForm"];
function GeofenceGroupCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-geofence-group-details-section", 5, 2);
    \u0275\u0275listener("formValidityChange", function GeofenceGroupCreateWizardComponent_ng_template_1_Template_app_geofence_group_details_section_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function GeofenceGroupCreateWizardComponent_ng_template_1_Template_app_geofence_group_details_section_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGeofenceGroupDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newGeofenceGroup())("ownerId", ctx_r2.ownerId);
  }
}
function GeofenceGroupCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6, " You've completed all of the information required and we're ready to create your Geofence Group. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Parent:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "p", 17);
    \u0275\u0275text(20, "Click finish to create this Geofence Group.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = ctx_r2.newGeofenceGroup().parent) == null ? null : tmp_4_0.name) || "Root", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newGeofenceGroup().name || "Not provided", " ");
  }
}
var GeofenceGroupCreateWizardComponent = class _GeofenceGroupCreateWizardComponent {
  geofenceGroupDetailsStep;
  confirmationTemplate;
  // References to form components
  geofenceGroupDetailsForm;
  entitiesService = inject(EntitiesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // GeofenceGroup model to collect data across steps
  newGeofenceGroup = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  previousStepIndex = 0;
  currentStepIndex = 0;
  ownerId = null;
  isSubmitting = signal(false);
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Geofence Group Details",
        content: this.geofenceGroupDetailsStep,
        complete: false,
        validate: () => this.geofenceGroupDetailsForm.validate()
      },
      {
        value: 2,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newGeofenceGroup.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
  }
  openWizard() {
    this.newGeofenceGroup.set({});
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
  }
  // Update the geofenceGroup state with form data
  updateGeofenceGroupDetails(formData) {
    this.newGeofenceGroup.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  onWizardComplete() {
    const geofenceGroupData = this.newGeofenceGroup();
    this.isSubmitting.set(true);
    this.entitiesService.createZoneGroup(geofenceGroupData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "geofence-group",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating geofence group:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newGeofenceGroup.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function GeofenceGroupCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeofenceGroupCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeofenceGroupCreateWizardComponent, selectors: [["app-geofence-group-create-wizard"]], viewQuery: function GeofenceGroupCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c037, 5);
      \u0275\u0275viewQuery(_c135, 7);
      \u0275\u0275viewQuery(_c232, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceGroupDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.geofenceGroupDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["geofenceGroupDetailsStep", ""], ["confirmationTemplate", ""], ["geofenceGroupDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "mb-4"], [1, "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "mt-4", "pt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function GeofenceGroupCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function GeofenceGroupCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function GeofenceGroupCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, GeofenceGroupCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, GeofenceGroupCreateWizardComponent_ng_template_3_Template, 21, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    WizardComponent,
    ButtonModule,
    GeofenceGroupDetailsSectionComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofenceGroupCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-geofence-group-create-wizard", imports: [
      CommonModule,
      ReactiveFormsModule,
      WizardComponent,
      ButtonModule,
      GeofenceGroupDetailsSectionComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: GeofenceGroup Details -->
<ng-template #geofenceGroupDetailsStep let-step>
  <div class="p-fluid">
    <app-geofence-group-details-section
      #geofenceGroupDetailsForm
      [createMode]="true"
      [entity]="newGeofenceGroup()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateGeofenceGroupDetails($event)"
    ></app-geofence-group-details-section>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- GeofenceGroup Details Section -->
        <div class="col-12 md:col-6">
          <p class="mb-4">
            You've completed all of the information required and we're ready to
            create your Geofence Group.
          </p>

          <div class="space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Parent:</div>
              <div class="w-2/3">
                {{ newGeofenceGroup().parent?.name || 'Root' }}
              </div>
            </div>

            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newGeofenceGroup().name || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-4 pt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">Click finish to create this Geofence Group.</p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { geofenceGroupDetailsStep: [{
    type: ViewChild,
    args: ["geofenceGroupDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], geofenceGroupDetailsForm: [{
    type: ViewChild,
    args: ["geofenceGroupDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeofenceGroupCreateWizardComponent, { className: "GeofenceGroupCreateWizardComponent", filePath: "src/app/features/administration/components/geofence-groups/geofence-group-create-wizard/geofence-group-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/geofence-groups.grid.config.ts
var GeofenceGroupsGridConfig = class _GeofenceGroupsGridConfig {
  geofenceGroupsService = inject(GeofenceGroupsDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = { clientId: "" };
  entityType = "geofence-groups";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData?.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  dataService = this.geofenceGroupsService;
  initialize(params) {
    this.params = params;
  }
  getTitle() {
    return "Geofence Groups";
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: this.params["clientId"],
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField
    };
  }
  onAdd() {
    const clientId = this.params["clientId"];
    this.openGeofenceGroupCreationDialog(clientId).subscribe();
  }
  openGeofenceGroupCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(GeofenceGroupCreateWizardComponent, {
      header: "Geofence Group Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function GeofenceGroupsGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeofenceGroupsGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeofenceGroupsGridConfig, factory: _GeofenceGroupsGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeofenceGroupsGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/components/super-admin-device-types/super-admin-device-types-create-wizard/super-admin-device-types-create-wizard.component.ts
var _c038 = ["deviceTypeDetailsStep"];
var _c136 = ["confirmationTemplate"];
var _c233 = ["deviceTypeDetailsForm"];
function SuperAdminDeviceTypesCreateWizardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-device-types-details", 5, 2);
    \u0275\u0275listener("formValidityChange", function SuperAdminDeviceTypesCreateWizardComponent_ng_template_1_Template_app_device_types_details_formValidityChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDetailsFormValidityChange($event));
    })("formValueChange", function SuperAdminDeviceTypesCreateWizardComponent_ng_template_1_Template_app_device_types_details_formValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateDeviceTypeDetails($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("createMode", true)("entity", ctx_r2.newDeviceType())("ownerId", ctx_r2.ownerId);
  }
}
function SuperAdminDeviceTypesCreateWizardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h4", 11);
    \u0275\u0275text(6, "Device Type Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
    \u0275\u0275text(15, "Short Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
    \u0275\u0275text(20, "Tag:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
    \u0275\u0275text(25, "State:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "p", 17)(30, "strong");
    \u0275\u0275text(31, "Ready to create your Device Type!");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "br");
    \u0275\u0275text(33, " Click finish to create this device type with all the configured settings. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceType().name || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceType().shortName || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceType().tag || "Not provided", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.newDeviceType().state || "Not provided", " ");
  }
}
var SuperAdminDeviceTypesCreateWizardComponent = class _SuperAdminDeviceTypesCreateWizardComponent {
  deviceTypeDetailsStep;
  confirmationTemplate;
  // References to form components
  deviceTypeDetailsForm;
  deviceTypesService = inject(DeviceTypesService);
  broadcastService = inject(BroadcastEventMessageService);
  destroyRef = inject(DestroyRef);
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  cdr = inject(ChangeDetectorRef);
  // Device type model to collect data across steps
  newDeviceType = signal({});
  // Form validity state
  formIsValid = signal(false);
  steps = [];
  ownerId = null;
  isSubmitting = signal(false);
  // Make Object available to template
  Object = Object;
  ngAfterViewInit() {
    this.steps = [
      {
        value: 1,
        header: "Device Type Details",
        content: this.deviceTypeDetailsStep,
        complete: false,
        disableNext: true,
        validate: () => this.deviceTypeDetailsForm.validate()
      },
      {
        value: 5,
        header: "Confirmation",
        content: this.confirmationTemplate,
        complete: true
      }
    ];
    this.cdr.detectChanges();
  }
  ngOnInit() {
    if (isDefined(this.dialogConfig.data)) {
      this.ownerId = this.dialogConfig.data.ownerId ?? null;
      this.newDeviceType.update((current) => __spreadProps(__spreadValues({}, current), {
        ownerId: this.ownerId ?? ""
      }));
    }
    this.formIsValid.set(false);
  }
  openWizard() {
    this.newDeviceType.set({});
    this.formIsValid.set(false);
    if (this.steps.length > 0) {
      this.steps[0].disableNext = true;
      this.steps[0].complete = false;
    }
  }
  // Form validity handlers
  onDetailsFormValidityChange(isValid) {
    this.steps[0].disableNext = !isValid;
    this.formIsValid.set(isValid);
    if (isDefined(this.steps[0])) {
      this.steps[0].complete = isValid;
    }
  }
  onFeaturesFormValidityChange(isValid) {
    this.steps[1].disableNext = !isValid;
  }
  onAccessoriesFormValidityChange(isValid) {
    this.steps[2].disableNext = !isValid;
  }
  onSettingsFormValidityChange(isValid) {
    this.steps[3].disableNext = !isValid;
  }
  // Update the device type state with form data
  updateDeviceTypeDetails(formData) {
    this.newDeviceType.update((current) => {
      const updated = __spreadValues({}, current);
      Object.keys(formData).forEach((key) => {
        if (key !== "ownerId") {
          updated[key] = formData[key];
        }
      });
      if (isNullOrUndefined(updated.ownerId)) {
        updated.ownerId = this.ownerId ?? "";
      }
      return updated;
    });
  }
  updateDeviceTypeFeatures(features) {
    this.newDeviceType.update((current) => __spreadProps(__spreadValues({}, current), {
      features
    }));
  }
  updateDeviceTypeAccessories(accessories) {
    this.newDeviceType.update((current) => __spreadProps(__spreadValues({}, current), {
      accessories
    }));
  }
  updateDeviceTypeSettingsDefinition(settingsDefinition) {
    this.newDeviceType.update((current) => __spreadProps(__spreadValues({}, current), {
      settingsDefinition: settingsDefinition || void 0
    }));
  }
  onWizardComplete() {
    const deviceTypeData = this.newDeviceType();
    this.isSubmitting.set(true);
    this.deviceTypesService.createDeviceType(deviceTypeData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.broadcastService.broadcast("entity-updated", {
          entityType: "device-types",
          operation: "create",
          entityId: response.id
        });
        this.broadcastService.broadcast("tree-refresh-required", {
          entityType: "device-types",
          operation: "create",
          entityId: response.id
        });
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error("Error creating device type:", error);
      }
    });
  }
  // Update cancel to close dialog with no result
  onWizardCancel() {
    this.newDeviceType.set({});
    this.dialogRef.close();
  }
  static \u0275fac = function SuperAdminDeviceTypesCreateWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminDeviceTypesCreateWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminDeviceTypesCreateWizardComponent, selectors: [["app-super-admin-device-types-create-wizard"]], viewQuery: function SuperAdminDeviceTypesCreateWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c038, 5);
      \u0275\u0275viewQuery(_c136, 7);
      \u0275\u0275viewQuery(_c233, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceTypeDetailsStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationTemplate = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deviceTypeDetailsForm = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["deviceTypeDetailsStep", ""], ["confirmationTemplate", ""], ["deviceTypeDetailsForm", ""], [3, "complete", "onCancel", "contentOnly", "steps", "showSteps", "useWizardButtonsOnly", "loading"], [1, "p-fluid"], [3, "formValidityChange", "formValueChange", "createMode", "entity", "ownerId"], [1, "flex", "gap-6"], [1, "pi", "pi-check", "!text-5xl"], [1, "flex-1"], [1, "grid"], [1, "col-12", "lg:col-6"], [1, "mb-3", "text-900"], [1, "mb-4", "space-y-2"], [1, "flex"], [1, "w-1/3", "font-medium"], [1, "w-2/3"], [1, "pt-4", "mt-4", "border-top-1", "border-surface-200", "dark:border-surface-700"], [1, "mb-0"]], template: function SuperAdminDeviceTypesCreateWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-wizard", 3);
      \u0275\u0275listener("complete", function SuperAdminDeviceTypesCreateWizardComponent_Template_app_wizard_complete_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardComplete());
      })("onCancel", function SuperAdminDeviceTypesCreateWizardComponent_Template_app_wizard_onCancel_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, SuperAdminDeviceTypesCreateWizardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, SuperAdminDeviceTypesCreateWizardComponent_ng_template_3_Template, 34, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("contentOnly", true)("steps", ctx.steps)("showSteps", false)("useWizardButtonsOnly", true)("loading", ctx.isSubmitting());
    }
  }, dependencies: [
    CommonModule,
    WizardComponent,
    ButtonModule,
    DeviceTypesDetailsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminDeviceTypesCreateWizardComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin-device-types-create-wizard", imports: [
      CommonModule,
      WizardComponent,
      ButtonModule,
      DeviceTypesDetailsComponent
    ], template: `<app-wizard
  [contentOnly]="true"
  [steps]="steps"
  [showSteps]="false"
  [useWizardButtonsOnly]="true"
  [loading]="isSubmitting()"
  (complete)="onWizardComplete()"
  (onCancel)="onWizardCancel()"
>
</app-wizard>

<!-- Step 1: Device Type Details -->
<ng-template #deviceTypeDetailsStep let-step>
  <div class="p-fluid">
    <app-device-types-details
      #deviceTypeDetailsForm
      [createMode]="true"
      [entity]="newDeviceType()"
      [ownerId]="ownerId"
      (formValidityChange)="onDetailsFormValidityChange($event)"
      (formValueChange)="updateDeviceTypeDetails($event)"
    ></app-device-types-details>
  </div>
</ng-template>

<ng-template #confirmationTemplate let-step>
  <div class="flex gap-6">
    <span class="pi pi-check !text-5xl"></span>

    <div class="flex-1">
      <div class="grid">
        <!-- Device Type Details Section -->
        <div class="col-12 lg:col-6">
          <h4 class="mb-3 text-900">Device Type Details</h4>
          <div class="mb-4 space-y-2">
            <div class="flex">
              <div class="w-1/3 font-medium">Name:</div>
              <div class="w-2/3">
                {{ newDeviceType().name || 'Not provided' }}
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 font-medium">Short Name:</div>
              <div class="w-2/3">
                {{ newDeviceType().shortName || 'Not provided' }}
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 font-medium">Tag:</div>
              <div class="w-2/3">
                {{ newDeviceType().tag || 'Not provided' }}
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 font-medium">State:</div>
              <div class="w-2/3">
                {{ newDeviceType().state || 'Not provided' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-4 mt-4 border-top-1 border-surface-200 dark:border-surface-700"
      >
        <p class="mb-0">
          <strong>Ready to create your Device Type!</strong><br />
          Click finish to create this device type with all the configured
          settings.
        </p>
      </div>
    </div>
  </div>
</ng-template>
` }]
  }], null, { deviceTypeDetailsStep: [{
    type: ViewChild,
    args: ["deviceTypeDetailsStep"]
  }], confirmationTemplate: [{
    type: ViewChild,
    args: ["confirmationTemplate", { static: true }]
  }], deviceTypeDetailsForm: [{
    type: ViewChild,
    args: ["deviceTypeDetailsForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminDeviceTypesCreateWizardComponent, { className: "SuperAdminDeviceTypesCreateWizardComponent", filePath: "src/app/features/administration/components/super-admin-device-types/super-admin-device-types-create-wizard/super-admin-device-types-create-wizard.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/configs/device-types.grid.config.ts
var DeviceTypesGridConfig = class _DeviceTypesGridConfig {
  deviceTypesService = inject(DeviceTypesDataAdapter);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  dialogRef = null;
  dialogService = inject(DialogService);
  params = { clientId: "" };
  dataService = this.deviceTypesService;
  entityType = "device-types";
  columns = [
    {
      field: "name",
      header: "Name",
      filterType: "text"
    },
    {
      field: "shortName",
      header: "Short Name",
      filterType: "text"
    },
    {
      field: "tag",
      header: "Tag",
      filterType: "text"
    },
    {
      field: "state",
      header: "Status",
      filterType: "multiselect"
    },
    {
      field: "modifiedDate",
      header: "Modified",
      valueGetter: (rowData) => isDefined(rowData.modifiedDate) ? this.measurementDateTimeService.formatDateTime(this.measurementDateTimeService.createDateAssumingUtc(rowData.modifiedDate), DATE_FORMATS.DATE_TIME_SECONDS) : ""
    }
  ];
  getTitle() {
    return "Device Types";
  }
  initialize(params) {
    this.params = params;
  }
  getRequestParams(event) {
    let sortField = "name:asc";
    if (isDefined(event?.sortField)) {
      const sortOrder = event.sortOrder === 1 ? "asc" : "desc";
      sortField = `${event.sortField}:${sortOrder}`;
    }
    return {
      owner: DEFAULT_SYSTEM_ID,
      offset: isDefined(event?.first) ? event.first : 0,
      recurse: false,
      limit: DEFAULT_LIST_SIZE,
      sortField,
      filters: ""
    };
  }
  onAdd() {
    const ownerId = DEFAULT_SYSTEM_ID;
    this.openDeviceTypeCreationDialog(ownerId).subscribe();
  }
  openDeviceTypeCreationDialog(ownerId) {
    this.dialogRef = this.dialogService.open(SuperAdminDeviceTypesCreateWizardComponent, {
      header: "Device Type Wizard",
      contentStyle: { overflow: "auto" },
      baseZIndex: 1e4,
      data: { ownerId },
      position: "top",
      modal: true
    });
    return this.dialogRef.onClose;
  }
  static \u0275fac = function DeviceTypesGridConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceTypesGridConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceTypesGridConfig, factory: _DeviceTypesGridConfig.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceTypesGridConfig, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/configs/admin-tree-table-configs-registration.ts
function createTreeTableConfigEntry(entityType, config) {
  return {
    entityType,
    config
  };
}
var ADMIN_TREE_TABLE_CONFIGS = {
  provide: TREE_TABLE_CONFIGS,
  useValue: [
    createTreeTableConfigEntry("client-cost-centres", CostCentresGridConfig),
    createTreeTableConfigEntry("client-asset-groups", AssetGroupsGridConfig),
    createTreeTableConfigEntry("client-asset-categories", AssetCategoriesGridConfig),
    createTreeTableConfigEntry("client-geofence-groups", GeofenceGroupsGridConfig),
    createTreeTableConfigEntry("vendor-company-groups", CompanyGroupsGridConfig),
    createTreeTableConfigEntry("distributor-company-groups", CompanyGroupsGridConfig),
    createTreeTableConfigEntry("device-types", DeviceTypesGridConfig)
  ],
  multi: true
};

// src/app/features/administration/administration.module.ts
var AdministrationModule = class _AdministrationModule {
  static \u0275fac = function AdministrationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdministrationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministrationModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    GridConfigurationFactory,
    ADMIN_GRID_CONFIGS_PROVIDER,
    TreeTableConfigurationFactory,
    ADMIN_TREE_TABLE_CONFIGS
  ], imports: [
    CommonModule,
    AdministrationRoutingModule,
    AdminTreetableContainerComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AdministrationRoutingModule,
        AdminTreetableContainerComponent
      ],
      providers: [
        GridConfigurationFactory,
        ADMIN_GRID_CONFIGS_PROVIDER,
        TreeTableConfigurationFactory,
        ADMIN_TREE_TABLE_CONFIGS
      ]
    }]
  }], null, null);
})();
export {
  AdministrationModule
};
//# sourceMappingURL=chunk-3F7N4Q4I.js.map
