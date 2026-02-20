import {
  VersionUpdateService
} from "./chunk-OKZD7IEG.js";
import {
  ToastService
} from "./chunk-LN4L6VZC.js";
import {
  Paginator,
  PaginatorModule
} from "./chunk-MZGGMYX2.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  IconField,
  InputIcon,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-4CAIP3KE.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2UAXSVOA.js";
import {
  ApiUrlService,
  AuthDataService,
  AuthService,
  COLORS,
  CommonModule,
  DEFAULT_PAGE_SIZE,
  LOCAL_STORAGE_KEY_RECENT_CLIENTS,
  LocalStorageService,
  MAX_RECENT_CLIENTS,
  Router,
  SessionCleanupService,
  TitleCasePipe,
  UserSessionService,
  isArray,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  takeUntilDestroyed,
  toSignal
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DestroyRef,
  ElementRef,
  Injectable,
  Input,
  Output,
  Subject,
  catchError,
  computed,
  debounceTime,
  effect,
  from,
  inject,
  input,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/core/resolvers/user-profile.resolver.ts
var userProfileResolver = () => {
  const apiAuth = inject(AuthService);
  const authData = inject(AuthDataService);
  const sessionCleanup = inject(SessionCleanupService);
  const localStorage = inject(LocalStorageService);
  const userSessionService = inject(UserSessionService);
  const toastService = inject(ToastService);
  const versionUpdateService = inject(VersionUpdateService);
  const router = inject(Router);
  const existing = authData.getUserProfile();
  if (existing) {
    return of(existing);
  }
  return apiAuth.getUserProfile().pipe(switchMap((profile) => {
    if (profile == null) {
      return of(profile);
    }
    return from((async () => {
      if (isDefined(profile.id)) {
        sessionCleanup.setLastAuthenticatedUser(profile.id);
        localStorage.migrateFromPendingToUser(profile.id);
      }
      await authData.setUserProfile(profile);
      userSessionService.reloadSessionsFromStorage();
      return profile;
    })());
  }), catchError((error) => {
    if (versionUpdateService.isVersionMismatchError(error)) {
      versionUpdateService.handleVersionMismatch("user profile resolver");
      return of(null);
    }
    toastService.showError("Authentication Error", "Failed to load user profile. Please try logging in again.");
    authData.clearAllUserData();
    userSessionService.clearAllSessions();
    sessionCleanup.clearAllAuthData();
    router.navigate(["/auth/login"]).catch(() => {
    });
    return of(null);
  }));
};

// src/app/shared/components/client-selection-form/client-selection-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientSelectionFormComponent_Conditional_8_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 23);
    \u0275\u0275listener("error", function ClientSelectionFormComponent_Conditional_8_For_7_Conditional_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.target.style.display = "none");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", client_r2.name);
  }
}
function ClientSelectionFormComponent_Conditional_8_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ClientSelectionFormComponent_Conditional_8_For_7_Template_button_click_0_listener() {
      const client_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectClient(client_r2.id));
    })("keydown", function ClientSelectionFormComponent_Conditional_8_For_7_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.onKeyDown($event);
      return \u0275\u0275resetView($event.stopPropagation());
    })("focus", function ClientSelectionFormComponent_Conditional_8_For_7_Template_button_focus_0_listener() {
      const \u0275$index_28_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onItemFocus(ctx_r2.getRecentClientIndex(\u0275$index_28_r4)));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275conditionalCreate(2, ClientSelectionFormComponent_Conditional_8_For_7_Conditional_2_Template, 1, 2, "img", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const client_r2 = ctx.$implicit;
    const \u0275$index_28_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("focused", ctx_r2.isItemFocused(ctx_r2.getRecentClientIndex(\u0275$index_28_r4)));
    \u0275\u0275property("tabindex", ctx_r2.getItemTabIndex(ctx_r2.getRecentClientIndex(\u0275$index_28_r4)))("pTooltip", client_r2.name);
    \u0275\u0275attribute("aria-label", "Select recently used client: " + client_r2.name)("aria-selected", ctx_r2.isItemFocused(ctx_r2.getRecentClientIndex(\u0275$index_28_r4)));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-color", ctx_r2.getClientColor(client_r2.name));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = ctx_r2.getClientLogoUrl(client_r2.id)) ? 2 : -1, tmp_18_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.name.charAt(0).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r2.name);
  }
}
function ClientSelectionFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Recently Used");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275repeaterCreate(6, ClientSelectionFormComponent_Conditional_8_For_7_Template, 7, 10, "button", 15, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 16);
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275text(10, "All Clients");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.recentClients());
  }
}
function ClientSelectionFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3, "Loading clients...");
    \u0275\u0275elementEnd()();
  }
}
function ClientSelectionFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No clients found");
    \u0275\u0275elementEnd()();
  }
}
function ClientSelectionFormComponent_Conditional_12_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 23);
    \u0275\u0275listener("error", function ClientSelectionFormComponent_Conditional_12_For_2_Conditional_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.target.style.display = "none");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl)("alt", client_r7.name);
  }
}
function ClientSelectionFormComponent_Conditional_12_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const client_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", client_r7.owner.name, " ");
  }
}
function ClientSelectionFormComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ClientSelectionFormComponent_Conditional_12_For_2_Template_div_click_0_listener() {
      const client_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectClient(client_r7.id));
    })("keydown", function ClientSelectionFormComponent_Conditional_12_For_2_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.onKeyDown($event);
      return \u0275\u0275resetView($event.stopPropagation());
    })("focus", function ClientSelectionFormComponent_Conditional_12_For_2_Template_div_focus_0_listener() {
      const \u0275$index_68_r8 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onItemFocus(ctx_r2.getClientCardIndex(\u0275$index_68_r8)));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275conditionalCreate(2, ClientSelectionFormComponent_Conditional_12_For_2_Conditional_2_Template, 1, 2, "img", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ClientSelectionFormComponent_Conditional_12_For_2_Conditional_8_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33);
    \u0275\u0275element(10, "i", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_20_0;
    const client_r7 = ctx.$implicit;
    const \u0275$index_68_r8 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("focused", ctx_r2.isItemFocused(ctx_r2.getClientCardIndex(\u0275$index_68_r8)));
    \u0275\u0275property("id", "client-card-" + ctx_r2.getClientCardIndex(\u0275$index_68_r8))("tabindex", ctx_r2.getItemTabIndex(ctx_r2.getClientCardIndex(\u0275$index_68_r8)));
    \u0275\u0275attribute("aria-label", "Select " + client_r7.name + (client_r7.owner.name ? ", owned by " + client_r7.owner.name : ""))("aria-selected", ctx_r2.isItemFocused(ctx_r2.getClientCardIndex(\u0275$index_68_r8)))("aria-posinset", ctx_r2.first() + \u0275$index_68_r8 + 1)("aria-setsize", ctx_r2.currentTotalRecords());
    \u0275\u0275advance();
    \u0275\u0275attribute("data-color", ctx_r2.getClientColor(client_r7.name));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = ctx_r2.getClientLogoUrl(client_r7.id)) ? 2 : -1, tmp_20_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(client_r7.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(client_r7.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(client_r7.owner.name ? 8 : -1);
  }
}
function ClientSelectionFormComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ClientSelectionFormComponent_Conditional_12_For_2_Template, 11, 13, "div", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.displayedClients());
  }
}
function ClientSelectionFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p-paginator", 35);
    \u0275\u0275listener("onPageChange", function ClientSelectionFormComponent_Conditional_13_Template_p_paginator_onPageChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("first", ctx_r2.first())("rows", ctx_r2.rows())("totalRecords", ctx_r2.currentTotalRecords());
  }
}
var ClientSelectionFormComponent = class _ClientSelectionFormComponent {
  clients = input([], ...ngDevMode ? [{ debugName: "clients" }] : []);
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  // Whether to use server-side search (true if total clients >= 100)
  useServerSearch = input(false, ...ngDevMode ? [{ debugName: "useServerSearch" }] : []);
  totalRecords = input(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  enablePagination = input(true, ...ngDevMode ? [{ debugName: "enablePagination" }] : []);
  enableLazyLoad = input(false, ...ngDevMode ? [{ debugName: "enableLazyLoad" }] : []);
  /** Recent clients to display at the top of the list */
  recentClients = input([], ...ngDevMode ? [{ debugName: "recentClients" }] : []);
  clientSelected = output();
  searchQuery = output();
  lazyLoad = output();
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  apiUrlService = inject(ApiUrlService);
  // Search state
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : []);
  searchChanges$ = new Subject();
  // Keyboard navigation state
  focusedIndex = signal(-1, ...ngDevMode ? [{ debugName: "focusedIndex" }] : []);
  // Logo loading state
  failedLogos = signal({}, ...ngDevMode ? [{ debugName: "failedLogos" }] : []);
  // Pagination state
  first = signal(0, ...ngDevMode ? [{ debugName: "first" }] : []);
  rows = signal(DEFAULT_PAGE_SIZE, ...ngDevMode ? [{ debugName: "rows" }] : []);
  // Computed trimmed term for all filtering logic
  searchTerm = computed(() => this.search().trim(), ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  /** Total number of navigable items (recent clients chips + items on current page) */
  totalNavigableItems = computed(() => {
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    const clientCount = this.displayedClients().length;
    return recentCount + clientCount;
  }, ...ngDevMode ? [{ debugName: "totalNavigableItems" }] : []);
  /** Whether to show the recently used section */
  showRecentSection = computed(() => {
    const recent = this.recentClients();
    const term = this.searchTerm();
    return recent.length > 0 && isEmpty(term);
  }, ...ngDevMode ? [{ debugName: "showRecentSection" }] : []);
  /** Filtered recent clients based on search term (for when search is active) */
  filteredRecentClients = computed(() => {
    const recent = this.recentClients();
    const term = this.searchTerm().toLowerCase();
    if (isEmpty(term))
      return recent;
    return recent.filter((c) => c.name.toLowerCase().includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredRecentClients" }] : []);
  filteredClients = computed(() => {
    if (this.useServerSearch()) {
      return this.clients();
    }
    const term = this.searchTerm().toLowerCase();
    const clients = isEmpty(term) ? this.clients() : this.clients().filter((c) => c.name.toLowerCase().includes(term));
    return clients;
  }, ...ngDevMode ? [{ debugName: "filteredClients" }] : []);
  /** Clients to actually display on the current page */
  displayedClients = computed(() => {
    const clients = this.filteredClients();
    if (!this.enablePagination() || this.useServerSearch()) {
      return clients;
    }
    const start = this.first();
    const end = start + this.rows();
    return clients.slice(start, end);
  }, ...ngDevMode ? [{ debugName: "displayedClients" }] : []);
  /** Total records for the paginator */
  currentTotalRecords = computed(() => {
    if (this.useServerSearch()) {
      return this.totalRecords();
    }
    return this.filteredClients().length;
  }, ...ngDevMode ? [{ debugName: "currentTotalRecords" }] : []);
  constructor() {
    this.searchChanges$.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef)).subscribe((term) => {
      if (this.useServerSearch()) {
        this.searchQuery.emit(term);
      }
    });
  }
  onSearchInput() {
    const term = this.searchTerm();
    this.searchChanges$.next(term);
    this.focusedIndex.set(-1);
    this.first.set(0);
  }
  onPageChange(event) {
    if (isDefined(event.first))
      this.first.set(event.first);
    if (isDefined(event.rows))
      this.rows.set(event.rows);
    if (this.useServerSearch() && this.enableLazyLoad()) {
      this.onLazyLoad({
        first: event.first,
        rows: event.rows
      });
    }
    this.focusedIndex.set(-1);
  }
  selectClient(clientId) {
    if (isDefined(clientId) && clientId !== "") {
      this.clientSelected.emit(clientId);
    }
  }
  handleLogoError(clientId) {
    if (isDefined(clientId) && clientId !== "") {
      this.failedLogos.update((prev) => __spreadProps(__spreadValues({}, prev), { [clientId]: true }));
    }
  }
  onLazyLoad(event) {
    this.lazyLoad.emit(event);
  }
  /**
   * Handle keyboard events for grid navigation
   * Supports arrow keys for 2D navigation, Home/End for first/last item
   */
  onKeyDown(event) {
    const target = event.target;
    const isInput = target.tagName === "INPUT";
    const totalItems = this.totalNavigableItems();
    if (totalItems === 0 && !isInput)
      return;
    const currentIndex = this.focusedIndex();
    const navigationKeys = [
      "ArrowDown",
      "ArrowUp",
      "ArrowRight",
      "ArrowLeft",
      "Home",
      "End",
      "Enter",
      " "
    ];
    if (!navigationKeys.includes(event.key))
      return;
    if (isInput) {
      if ([" ", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }
      if (event.key === "Enter" && currentIndex < 0 && totalItems > 0) {
        event.preventDefault();
        this.selectItemAtIndex(0);
        return;
      }
    }
    const actions = {
      ArrowDown: () => this.calculateNextIndexDown(currentIndex, totalItems),
      ArrowUp: () => this.calculateNextIndexUp(currentIndex),
      ArrowRight: () => currentIndex < totalItems - 1 ? currentIndex + 1 : currentIndex,
      ArrowLeft: () => currentIndex > 0 ? currentIndex - 1 : 0,
      Home: () => 0,
      End: () => totalItems - 1,
      Enter: () => {
        if (currentIndex >= 0)
          this.selectItemAtIndex(currentIndex);
        return currentIndex;
      },
      " ": () => {
        if (currentIndex >= 0)
          this.selectItemAtIndex(currentIndex);
        return currentIndex;
      }
    };
    const action = actions[event.key];
    if (typeof action === "function") {
      event.preventDefault();
      const newIndex = action();
      if (newIndex !== currentIndex && newIndex >= 0) {
        this.focusedIndex.set(newIndex);
        this.focusItemAtIndex(newIndex);
      }
    }
  }
  calculateNextIndexDown(current, total) {
    const isMobile = window.innerWidth < 640;
    const columnsCount = isMobile ? 1 : 2;
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    if (current < 0)
      return 0;
    if (current < recentCount)
      return recentCount;
    return Math.min(current + columnsCount, total - 1);
  }
  calculateNextIndexUp(current) {
    const isMobile = window.innerWidth < 640;
    const columnsCount = isMobile ? 1 : 2;
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    const firstClientRow = current >= recentCount && current < recentCount + columnsCount;
    if (firstClientRow) {
      return recentCount > 0 ? recentCount - 1 : current;
    }
    if (current >= recentCount) {
      return Math.max(current - columnsCount, recentCount);
    }
    return current;
  }
  /**
   * Track focus on individual items for roving tabindex pattern
   */
  onItemFocus(index) {
    this.focusedIndex.set(index);
  }
  /**
   * Get the tabindex for an item based on roving tabindex pattern
   * Only one item should be tabbable at a time
   */
  getItemTabIndex(index) {
    const focused = this.focusedIndex();
    if (focused < 0 && index === 0)
      return 0;
    return focused === index ? 0 : -1;
  }
  /**
   * Check if an item is currently focused for styling
   */
  isItemFocused(index) {
    return this.focusedIndex() === index;
  }
  /**
   * Calculate the global index for a recent client chip
   */
  getRecentClientIndex(localIndex) {
    return localIndex;
  }
  /**
   * Calculate the global index for a client card (relative to items on current page)
   */
  getClientCardIndex(localIndex) {
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    return recentCount + localIndex;
  }
  /** Focus the DOM element at the given index */
  focusItemAtIndex(index) {
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    let selector;
    let itemIndex;
    if (index < recentCount) {
      selector = ".recent-client-chip";
      itemIndex = index;
    } else {
      selector = ".client-card";
      itemIndex = index - recentCount;
    }
    const elements = this.elementRef.nativeElement.querySelectorAll(selector);
    const element = elements[itemIndex];
    if (element) {
      element.focus();
    }
  }
  /** Select the item at the given global index */
  selectItemAtIndex(index) {
    const recentCount = this.showRecentSection() ? this.recentClients().length : 0;
    if (index < recentCount) {
      const recentClients = this.recentClients();
      const client = recentClients[index];
      if (client?.id) {
        this.selectClient(client.id);
      }
    } else {
      const clients = this.displayedClients();
      const clientIndex = index - recentCount;
      const client = clients[clientIndex];
      if (client?.id) {
        this.selectClient(client.id);
      }
    }
  }
  /**
   * Get a consistent theme color for a client name
   */
  getClientColor(name) {
    if (isEmpty(name))
      return COLORS[0];
    let hash = 0;
    for (const char of name) {
      const charCode = char.codePointAt(0);
      if (charCode !== void 0) {
        hash = charCode + ((hash << 5) - hash);
      }
    }
    const index = Math.abs(hash) % COLORS.length;
    return COLORS[index];
  }
  /**
   * Get the logo URL for a client
   */
  getClientLogoUrl(clientId) {
    if (isEmpty(clientId))
      return "";
    return `${this.apiUrlService.getCurrentApiUrl()}/accounts/clients/${clientId}/logo?size=small`;
  }
  static \u0275fac = function ClientSelectionFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSelectionFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientSelectionFormComponent, selectors: [["app-client-selection-form"]], inputs: { clients: [1, "clients"], loading: [1, "loading"], useServerSearch: [1, "useServerSearch"], totalRecords: [1, "totalRecords"], enablePagination: [1, "enablePagination"], enableLazyLoad: [1, "enableLazyLoad"], recentClients: [1, "recentClients"] }, outputs: { clientSelected: "clientSelected", searchQuery: "searchQuery", lazyLoad: "lazyLoad" }, decls: 14, vars: 5, consts: [[1, "client-selection-form", "flex", "flex-col", "max-h-[50vh]", 3, "keydown"], [1, "flex-shrink-0", "my-3"], ["pInputText", "", "placeholder", "Search clients...", "aria-label", "Search clients", "aria-describedby", "client-count-description", 1, "w-full", 3, "ngModelChange", "keydown", "ngModel"], [1, "pi", "pi-search"], ["id", "client-count-description", "aria-live", "polite", 1, "sr-only"], [1, "flex-1", "min-h-0", "flex", "flex-col"], [1, "recent-clients-section", "mb-4", "flex-shrink-0"], [1, "flex-1", "min-h-0", "w-full", "overflow-y-auto"], [1, "client-cards-loading", "flex", "items-center", "justify-center", "h-full"], [1, "client-cards-empty", "flex", "flex-col", "items-center", "justify-center", "h-full", "text-[var(--text-color-secondary)]"], ["role", "listbox", "aria-label", "Available clients", 1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3", "p-1"], [1, "flex-shrink-0", "pt-4", "border-t", "border-[var(--surface-border)]"], [1, "recent-clients-header", "text-sm", "font-medium", "text-gray-400", "mb-2", "flex", "items-center", "gap-2"], ["aria-hidden", "true", 1, "pi", "pi-history"], ["role", "listbox", "aria-label", "Recently used clients", 1, "recent-clients-chips"], ["type", "button", "role", "option", "tooltipPosition", "top", 1, "recent-client-chip", 3, "focused", "tabindex", "pTooltip"], [1, "border-b", "border-[var(--surface-border)]", "mt-4", "mb-3"], [1, "text-sm", "font-medium", "text-gray-400", "mb-2"], ["type", "button", "role", "option", "tooltipPosition", "top", 1, "recent-client-chip", 3, "click", "keydown", "focus", "tabindex", "pTooltip"], ["aria-hidden", "true", 1, "recent-client-chip-avatar"], [1, "client-logo-img", 3, "src", "alt"], [1, "client-logo-fallback"], [1, "recent-client-chip-name"], [1, "client-logo-img", 3, "error", "src", "alt"], ["aria-hidden", "true", 1, "pi", "pi-spin", "pi-spinner", "text-2xl", "text-[var(--primary-color)]"], [1, "sr-only"], ["aria-hidden", "true", 1, "pi", "pi-inbox", "text-4xl", "mb-2"], ["role", "option", 1, "client-card", "flex", "items-center", "gap-3", "p-3.5", "px-4", 3, "focused", "id", "tabindex"], ["role", "option", 1, "client-card", "flex", "items-center", "gap-3", "p-3.5", "px-4", 3, "click", "keydown", "focus", "id", "tabindex"], ["aria-hidden", "true", 1, "client-card-avatar", "flex", "items-center", "justify-center", "w-12", "h-12", "min-w-[3rem]"], [1, "client-card-content", "flex-1", "min-w-0", "flex", "flex-col", "gap-0.5"], [1, "client-card-name", "truncate"], [1, "client-card-owner", "truncate"], ["aria-hidden", "true", 1, "client-card-action", "flex", "items-center", "justify-center"], [1, "pi", "pi-chevron-right"], [1, "custom-paginator", 3, "onPageChange", "first", "rows", "totalRecords"]], template: function ClientSelectionFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("keydown", function ClientSelectionFormComponent_Template_div_keydown_0_listener($event) {
        return ctx.onKeyDown($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "p-iconfield")(3, "input", 2);
      \u0275\u0275listener("ngModelChange", function ClientSelectionFormComponent_Template_input_ngModelChange_3_listener($event) {
        ctx.search.set($event);
        return ctx.onSearchInput();
      })("keydown", function ClientSelectionFormComponent_Template_input_keydown_3_listener($event) {
        ctx.onKeyDown($event);
        return $event.stopPropagation();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "p-inputicon", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275conditionalCreate(8, ClientSelectionFormComponent_Conditional_8_Template, 11, 0, "div", 6);
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275conditionalCreate(10, ClientSelectionFormComponent_Conditional_10_Template, 4, 0, "div", 8)(11, ClientSelectionFormComponent_Conditional_11_Template, 4, 0, "div", 9)(12, ClientSelectionFormComponent_Conditional_12_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, ClientSelectionFormComponent_Conditional_13_Template, 2, 3, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.search());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.filteredClients().length, " clients found ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showRecentSection() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 10 : ctx.displayedClients().length === 0 ? 11 : 12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.enablePagination() && ctx.currentTotalRecords() > ctx.rows() ? 13 : -1);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    InputTextModule,
    InputText,
    InputIcon,
    IconField,
    TooltipModule,
    Tooltip,
    PaginatorModule,
    Paginator
  ], styles: ['\n\n.client-selection-form[_ngcontent-%COMP%]   .accounts[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.recent-clients-section[_ngcontent-%COMP%]   .recent-clients-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  max-height: 6rem;\n  overflow-y: auto;\n  padding: 0.25rem;\n}\n.recent-client-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.875rem 0.375rem 0.375rem;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--surface-card),\n      var(--surface-ground));\n  border: 1px solid rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n  max-width: 200px;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.recent-client-chip[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recent-client-chip[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.08),\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.05));\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.35);\n  box-shadow: 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.recent-client-chip[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.recent-client-chip[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip.focused[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.08),\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.05));\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.recent-client-chip-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.625rem;\n  height: 1.625rem;\n  min-width: 1.625rem;\n  overflow: hidden;\n  border-radius: 0.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.recent-client-chip-avatar[_ngcontent-%COMP%]   .client-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(1.05) contrast(1.02);\n}\n.recent-client-chip-avatar[_ngcontent-%COMP%]   .client-logo-fallback[_ngcontent-%COMP%] {\n  display: none;\n}\n.recent-client-chip-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0.01em;\n  position: relative;\n  z-index: 1;\n}\n.client-card[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius, 0.375rem);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.client-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.client-card[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.client-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.client-card.focused[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.client-card[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.client-card-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.client-card-avatar[_ngcontent-%COMP%]   .client-logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.client-card-avatar[_ngcontent-%COMP%]   .client-logo-fallback[_ngcontent-%COMP%] {\n  display: none;\n}\n.client-card-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n.client-card-owner[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n}\n.client-card-action[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.client-card[_ngcontent-%COMP%]:hover   .client-card-action[_ngcontent-%COMP%], \n.client-card[_ngcontent-%COMP%]:focus   .client-card-action[_ngcontent-%COMP%], \n.client-card.focused[_ngcontent-%COMP%]   .client-card-action[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(2px);\n}\n.client-card-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.client-cards-loading[_ngcontent-%COMP%], \n.client-cards-empty[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-first[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-prev[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-next[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-last[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  min-width: 2.25rem;\n  border-radius: 0.5rem;\n  margin: 0 0.125rem;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n  border: 1px solid transparent;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page[_ngcontent-%COMP%]:not(.p-highlight):not(.p-disabled):hover, \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-first[_ngcontent-%COMP%]:not(.p-highlight):not(.p-disabled):hover, \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-prev[_ngcontent-%COMP%]:not(.p-highlight):not(.p-disabled):hover, \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-next[_ngcontent-%COMP%]:not(.p-highlight):not(.p-disabled):hover, \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-last[_ngcontent-%COMP%]:not(.p-highlight):not(.p-disabled):hover {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  border-color: var(--surface-border);\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page.p-highlight[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-first.p-highlight[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-prev.p-highlight[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-next.p-highlight[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-last.p-highlight[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-color-rgb, 55, 139, 192), 0.1);\n  color: var(--primary-color);\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.3);\n  font-weight: 600;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-pages[_ngcontent-%COMP%]   .p-paginator-page.p-disabled[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-first.p-disabled[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-prev.p-disabled[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-next.p-disabled[_ngcontent-%COMP%], \n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-paginator-last.p-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  border-radius: 0.5rem;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-paginator[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%]   .p-dropdown-label[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=client-selection-form.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSelectionFormComponent, [{
    type: Component,
    args: [{ selector: "app-client-selection-form", imports: [
      FormsModule,
      InputTextModule,
      InputIcon,
      IconField,
      TooltipModule,
      PaginatorModule
    ], template: `<div
  class="client-selection-form flex flex-col max-h-[50vh]"
  (keydown)="onKeyDown($event)"
>
  <!-- Fixed search input at top -->
  <div class="flex-shrink-0 my-3">
    <p-iconfield>
      <input
        pInputText
        [ngModel]="search()"
        (ngModelChange)="search.set($event); onSearchInput()"
        (keydown)="onKeyDown($event); $event.stopPropagation()"
        placeholder="Search clients..."
        class="w-full"
        aria-label="Search clients"
        aria-describedby="client-count-description"
      />
      <p-inputicon class="pi pi-search" />
    </p-iconfield>
    <div id="client-count-description" class="sr-only" aria-live="polite">
      {{ filteredClients().length }} clients found
    </div>
  </div>

  <!-- Scrollable content area -->
  <div class="flex-1 min-h-0 flex flex-col">
    <!-- Recently Used Section -->
    @if (showRecentSection()) {
      <div class="recent-clients-section mb-4 flex-shrink-0">
        <div
          class="recent-clients-header text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"
        >
          <i class="pi pi-history" aria-hidden="true"></i>
          <span>Recently Used</span>
        </div>
        <div
          class="recent-clients-chips"
          role="listbox"
          aria-label="Recently used clients"
        >
          @for (client of recentClients(); track client.id; let i = $index) {
            <button
              type="button"
              class="recent-client-chip"
              role="option"
              [class.focused]="isItemFocused(getRecentClientIndex(i))"
              (click)="selectClient(client.id)"
              (keydown)="onKeyDown($event); $event.stopPropagation()"
              (focus)="onItemFocus(getRecentClientIndex(i))"
              [tabindex]="getItemTabIndex(getRecentClientIndex(i))"
              [attr.aria-label]="'Select recently used client: ' + client.name"
              [attr.aria-selected]="isItemFocused(getRecentClientIndex(i))"
              [pTooltip]="client.name"
              tooltipPosition="top"
            >
              <div
                class="recent-client-chip-avatar"
                [attr.data-color]="getClientColor(client.name)"
                aria-hidden="true"
              >
                @if (getClientLogoUrl(client.id); as logoUrl) {
                  <img
                    [src]="logoUrl"
                    [alt]="client.name"
                    class="client-logo-img"
                    (error)="$any($event.target).style.display = 'none'"
                  />
                }
                <span class="client-logo-fallback">{{
                  client.name.charAt(0).toUpperCase()
                }}</span>
              </div>
              <span class="recent-client-chip-name">{{ client.name }}</span>
            </button>
          }
        </div>
        <div class="border-b border-[var(--surface-border)] mt-4 mb-3"></div>
        <div class="text-sm font-medium text-gray-400 mb-2">All Clients</div>
      </div>
    }

    <!-- Client Cards Grid -->
    <div class="flex-1 min-h-0 w-full overflow-y-auto">
      @if (loading()) {
        <div
          class="client-cards-loading flex items-center justify-center h-full"
        >
          <i
            class="pi pi-spin pi-spinner text-2xl text-[var(--primary-color)]"
            aria-hidden="true"
          ></i>
          <span class="sr-only">Loading clients...</span>
        </div>
      } @else if (displayedClients().length === 0) {
        <div
          class="client-cards-empty flex flex-col items-center justify-center h-full text-[var(--text-color-secondary)]"
        >
          <i class="pi pi-inbox text-4xl mb-2" aria-hidden="true"></i>
          <span>No clients found</span>
        </div>
      } @else {
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1"
          role="listbox"
          aria-label="Available clients"
        >
          @for (client of displayedClients(); track client.id; let i = $index) {
            <div
              class="client-card flex items-center gap-3 p-3.5 px-4"
              role="option"
              [class.focused]="isItemFocused(getClientCardIndex(i))"
              [id]="'client-card-' + getClientCardIndex(i)"
              (click)="selectClient(client.id)"
              (keydown)="onKeyDown($event); $event.stopPropagation()"
              (focus)="onItemFocus(getClientCardIndex(i))"
              [tabindex]="getItemTabIndex(getClientCardIndex(i))"
              [attr.aria-label]="
                'Select ' +
                client.name +
                (client.owner.name ? ', owned by ' + client.owner.name : '')
              "
              [attr.aria-selected]="isItemFocused(getClientCardIndex(i))"
              [attr.aria-posinset]="first() + i + 1"
              [attr.aria-setsize]="currentTotalRecords()"
            >
              <div
                class="client-card-avatar flex items-center justify-center w-12 h-12 min-w-[3rem]"
                [attr.data-color]="getClientColor(client.name)"
                aria-hidden="true"
              >
                @if (getClientLogoUrl(client.id); as logoUrl) {
                  <img
                    [src]="logoUrl"
                    [alt]="client.name"
                    class="client-logo-img"
                    (error)="$any($event.target).style.display = 'none'"
                  />
                }
                <span class="client-logo-fallback">{{
                  client.name.charAt(0).toUpperCase()
                }}</span>
              </div>
              <div
                class="client-card-content flex-1 min-w-0 flex flex-col gap-0.5"
              >
                <div class="client-card-name truncate">{{ client.name }}</div>
                @if (client.owner.name) {
                  <div class="client-card-owner truncate">
                    {{ client.owner.name }}
                  </div>
                }
              </div>
              <div
                class="client-card-action flex items-center justify-center"
                aria-hidden="true"
              >
                <i class="pi pi-chevron-right"></i>
              </div>
            </div>
          }
        </div>
      }
    </div>

    <!-- Pagination -->
    @if (enablePagination() && currentTotalRecords() > rows()) {
      <div class="flex-shrink-0 pt-4 border-t border-[var(--surface-border)]">
        <p-paginator
          [first]="first()"
          [rows]="rows()"
          [totalRecords]="currentTotalRecords()"
          (onPageChange)="onPageChange($event)"
          class="custom-paginator"
        ></p-paginator>
      </div>
    }
  </div>
</div>
`, styles: ['/* src/app/shared/components/client-selection-form/client-selection-form.component.scss */\n.client-selection-form .accounts .meta {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.recent-clients-section .recent-clients-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  max-height: 6rem;\n  overflow-y: auto;\n  padding: 0.25rem;\n}\n.recent-client-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.875rem 0.375rem 0.375rem;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--surface-card),\n      var(--surface-ground));\n  border: 1px solid rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n  max-width: 200px;\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.recent-client-chip::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recent-client-chip:hover {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.08),\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.05));\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.35);\n  box-shadow: 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.recent-client-chip:hover::before {\n  left: 100%;\n}\n.recent-client-chip:focus {\n  outline: none;\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip:focus-visible {\n  outline: none;\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip.focused {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.08),\n      rgba(var(--primary-color-rgb, 55, 139, 192), 0.05));\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.5);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 2px 8px rgba(var(--primary-color-rgb, 55, 139, 192), 0.15);\n}\n.recent-client-chip:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 0 0 3px rgba(var(--primary-color-rgb, 55, 139, 192), 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.recent-client-chip-avatar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.625rem;\n  height: 1.625rem;\n  min-width: 1.625rem;\n  overflow: hidden;\n  border-radius: 0.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.recent-client-chip-avatar .client-logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: brightness(1.05) contrast(1.02);\n}\n.recent-client-chip-avatar .client-logo-fallback {\n  display: none;\n}\n.recent-client-chip-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0.01em;\n  position: relative;\n  z-index: 1;\n}\n.client-card {\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius, 0.375rem);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.client-card:hover {\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.client-card:focus {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.client-card:focus-visible {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.client-card.focused {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.client-card:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.client-card-avatar {\n  position: relative;\n  overflow: hidden;\n}\n.client-card-avatar .client-logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.client-card-avatar .client-logo-fallback {\n  display: none;\n}\n.client-card-name {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n}\n.client-card-owner {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n}\n.client-card-action {\n  color: var(--text-color-secondary);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.client-card:hover .client-card-action,\n.client-card:focus .client-card-action,\n.client-card.focused .client-card-action {\n  opacity: 1;\n  transform: translateX(2px);\n}\n.client-card-action i {\n  font-size: 0.875rem;\n}\n.client-cards-loading,\n.client-cards-empty {\n  min-height: 200px;\n}\n:host ::v-deep .custom-paginator {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n:host ::v-deep .custom-paginator .p-paginator-pages .p-paginator-page,\n:host ::v-deep .custom-paginator .p-paginator-first,\n:host ::v-deep .custom-paginator .p-paginator-prev,\n:host ::v-deep .custom-paginator .p-paginator-next,\n:host ::v-deep .custom-paginator .p-paginator-last {\n  height: 2.25rem;\n  min-width: 2.25rem;\n  border-radius: 0.5rem;\n  margin: 0 0.125rem;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n  border: 1px solid transparent;\n}\n:host ::v-deep .custom-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):not(.p-disabled):hover,\n:host ::v-deep .custom-paginator .p-paginator-first:not(.p-highlight):not(.p-disabled):hover,\n:host ::v-deep .custom-paginator .p-paginator-prev:not(.p-highlight):not(.p-disabled):hover,\n:host ::v-deep .custom-paginator .p-paginator-next:not(.p-highlight):not(.p-disabled):hover,\n:host ::v-deep .custom-paginator .p-paginator-last:not(.p-highlight):not(.p-disabled):hover {\n  background: var(--surface-hover);\n  color: var(--text-color);\n  border-color: var(--surface-border);\n}\n:host ::v-deep .custom-paginator .p-paginator-pages .p-paginator-page.p-highlight,\n:host ::v-deep .custom-paginator .p-paginator-first.p-highlight,\n:host ::v-deep .custom-paginator .p-paginator-prev.p-highlight,\n:host ::v-deep .custom-paginator .p-paginator-next.p-highlight,\n:host ::v-deep .custom-paginator .p-paginator-last.p-highlight {\n  background: rgba(var(--primary-color-rgb, 55, 139, 192), 0.1);\n  color: var(--primary-color);\n  border-color: rgba(var(--primary-color-rgb, 55, 139, 192), 0.3);\n  font-weight: 600;\n}\n:host ::v-deep .custom-paginator .p-paginator-pages .p-paginator-page.p-disabled,\n:host ::v-deep .custom-paginator .p-paginator-first.p-disabled,\n:host ::v-deep .custom-paginator .p-paginator-prev.p-disabled,\n:host ::v-deep .custom-paginator .p-paginator-next.p-disabled,\n:host ::v-deep .custom-paginator .p-paginator-last.p-disabled {\n  opacity: 0.5;\n}\n:host ::v-deep .custom-paginator .p-dropdown {\n  height: 2.25rem;\n  border-radius: 0.5rem;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  margin-left: 1rem;\n}\n:host ::v-deep .custom-paginator .p-dropdown:hover {\n  border-color: var(--primary-color);\n}\n:host ::v-deep .custom-paginator .p-dropdown .p-dropdown-label {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=client-selection-form.component.css.map */\n'] }]
  }], () => [], { clients: [{ type: Input, args: [{ isSignal: true, alias: "clients", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], useServerSearch: [{ type: Input, args: [{ isSignal: true, alias: "useServerSearch", required: false }] }], totalRecords: [{ type: Input, args: [{ isSignal: true, alias: "totalRecords", required: false }] }], enablePagination: [{ type: Input, args: [{ isSignal: true, alias: "enablePagination", required: false }] }], enableLazyLoad: [{ type: Input, args: [{ isSignal: true, alias: "enableLazyLoad", required: false }] }], recentClients: [{ type: Input, args: [{ isSignal: true, alias: "recentClients", required: false }] }], clientSelected: [{ type: Output, args: ["clientSelected"] }], searchQuery: [{ type: Output, args: ["searchQuery"] }], lazyLoad: [{ type: Output, args: ["lazyLoad"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientSelectionFormComponent, { className: "ClientSelectionFormComponent", filePath: "src/app/shared/components/client-selection-form/client-selection-form.component.ts", lineNumber: 39 });
})();

// src/app/shared/services/recent-clients.service.ts
var RecentClientsService = class _RecentClientsService {
  localStorageService = inject(LocalStorageService);
  /** Signal containing the current list of recent clients */
  recentClientsSignal = signal([], ...ngDevMode ? [{ debugName: "recentClientsSignal" }] : []);
  /** Computed signal exposing the recent clients list as readonly */
  recentClients = computed(() => this.recentClientsSignal(), ...ngDevMode ? [{ debugName: "recentClients" }] : []);
  constructor() {
    effect(() => {
      const userId = this.localStorageService.getCurrentUserId();
      if (isNullOrUndefined(userId)) {
        this.recentClientsSignal.set([]);
        return;
      }
      this.localStorageService.migrateToNamespace(LOCAL_STORAGE_KEY_RECENT_CLIENTS, true);
      this.localStorageService.pruneIncorrectRecentClients();
      this.loadRecentClients();
    });
  }
  /**
   * Loads recent clients from localStorage into the signal.
   * Called on service initialization and can be called to refresh from storage.
   */
  loadRecentClients() {
    try {
      const stored = this.localStorageService.getItem(LOCAL_STORAGE_KEY_RECENT_CLIENTS);
      if (isDefined(stored) && isArray(stored)) {
        const validClients = stored.filter((client) => isDefined(client) && isDefined(client.id) && isDefined(client.name) && typeof client.id === "string" && typeof client.name === "string");
        this.recentClientsSignal.set(validClients);
      } else {
        this.recentClientsSignal.set([]);
      }
    } catch (error) {
      console.warn("Failed to load recent clients from localStorage:", error);
      this.recentClientsSignal.set([]);
    }
  }
  /**
   * Adds a client to the recently used list.
   * If the client already exists, it moves to the top of the list.
   * Maintains a maximum of MAX_RECENT_CLIENTS entries.
   *
   * @param clientId - The unique identifier of the client
   * @param clientName - The display name of the client
   */
  addRecentClient(clientId, clientName) {
    if (!clientId || !clientName) {
      console.warn("Cannot add recent client: missing id or name");
      return;
    }
    try {
      const currentClients = [...this.recentClientsSignal()];
      const existingIndex = currentClients.findIndex((client) => client.id === clientId);
      if (existingIndex !== -1) {
        currentClients.splice(existingIndex, 1);
      }
      const newClient = {
        id: clientId,
        name: clientName,
        lastSelectedAt: Date.now()
      };
      currentClients.unshift(newClient);
      const trimmedClients = currentClients.slice(0, MAX_RECENT_CLIENTS);
      this.recentClientsSignal.set(trimmedClients);
      this.saveToStorage(trimmedClients);
    } catch (error) {
      console.warn("Failed to add recent client:", error);
    }
  }
  /**
   * Removes a specific client from the recently used list.
   *
   * @param clientId - The unique identifier of the client to remove
   */
  removeRecentClient(clientId) {
    if (!clientId)
      return;
    try {
      const currentClients = this.recentClientsSignal();
      const filteredClients = currentClients.filter((client) => client.id !== clientId);
      if (filteredClients.length !== currentClients.length) {
        this.recentClientsSignal.set(filteredClients);
        this.saveToStorage(filteredClients);
      }
    } catch (error) {
      console.warn("Failed to remove recent client:", error);
    }
  }
  /**
   * Clears all recent clients from the list and storage.
   */
  clearRecentClients() {
    try {
      this.recentClientsSignal.set([]);
      this.localStorageService.removeItem(LOCAL_STORAGE_KEY_RECENT_CLIENTS);
    } catch (error) {
      console.warn("Failed to clear recent clients:", error);
    }
  }
  /**
   * Checks if a client is in the recent clients list.
   *
   * @param clientId - The unique identifier of the client to check
   * @returns True if the client is in the recent list
   */
  isRecentClient(clientId) {
    return this.recentClientsSignal().some((client) => client.id === clientId);
  }
  /**
   * Gets the current count of recent clients.
   *
   * @returns The number of recent clients stored
   */
  getRecentClientsCount() {
    return this.recentClientsSignal().length;
  }
  /**
   * Persists the recent clients list to localStorage.
   *
   * @param clients - The list of recent clients to save
   */
  saveToStorage(clients) {
    try {
      this.localStorageService.setItem(LOCAL_STORAGE_KEY_RECENT_CLIENTS, clients);
    } catch (error) {
      console.warn("Failed to save recent clients to localStorage:", error);
    }
  }
  static \u0275fac = function RecentClientsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentClientsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecentClientsService, factory: _RecentClientsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentClientsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/components/client-selector/client-selector.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ClientSelectorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No accounts found");
    \u0275\u0275elementEnd()();
  }
}
function ClientSelectorComponent_Conditional_12_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, account_r2.owner.type), ": ", account_r2.owner.name, " ");
  }
}
function ClientSelectorComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275pipe(1, "titlecase");
    \u0275\u0275listener("click", function ClientSelectorComponent_Conditional_12_For_2_Template_div_click_0_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectAccount(account_r2.id));
    })("keydown.enter", function ClientSelectorComponent_Conditional_12_For_2_Template_div_keydown_enter_0_listener() {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectAccount(account_r2.id));
    })("keydown.space", function ClientSelectorComponent_Conditional_12_For_2_Template_div_keydown_space_0_listener($event) {
      const account_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectAccount(account_r2.id);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ClientSelectorComponent_Conditional_12_For_2_Conditional_7_Template, 3, 4, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275element(9, "i", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    const \u0275$index_31_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "account-card-" + \u0275$index_31_r4);
    \u0275\u0275attribute("aria-label", "Select " + account_r2.name + (account_r2.owner.name ? ", " + \u0275\u0275pipeBind1(1, 7, account_r2.owner.type) + ": " + account_r2.owner.name : ""))("aria-posinset", \u0275$index_31_r4 + 1)("aria-setsize", ctx_r2.filteredAccounts().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", account_r2.name.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(account_r2.owner.name ? 7 : -1);
  }
}
function ClientSelectorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ClientSelectorComponent_Conditional_12_For_2_Template, 10, 9, "div", 11, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredAccounts());
  }
}
var ClientSelectorComponent = class _ClientSelectorComponent {
  clientAccounts = input([], ...ngDevMode ? [{ debugName: "clientAccounts" }] : []);
  maxHeightClass = input("max-h-96", ...ngDevMode ? [{ debugName: "maxHeightClass" }] : []);
  accountSelected = output();
  searchControl = new FormControl("");
  filteredAccounts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    return this.clientAccounts().filter((account) => account.name.toLowerCase().includes(term) || (account?.owner?.name ?? "").toLowerCase().includes(term) || (account?.owner?.type ?? "").toLowerCase().includes(term));
  }, ...ngDevMode ? [{ debugName: "filteredAccounts" }] : []);
  searchTerm = toSignal(this.searchControl.valueChanges.pipe(startWith(""), debounceTime(300), map((value) => value ?? "")), { initialValue: "" });
  selectAccount(accountId) {
    const selected = this.clientAccounts().find((account) => account.id === accountId);
    if (selected) {
      this.accountSelected.emit(selected);
    }
  }
  static \u0275fac = function ClientSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientSelectorComponent, selectors: [["app-client-selector"]], inputs: { clientAccounts: [1, "clientAccounts"], maxHeightClass: [1, "maxHeightClass"] }, outputs: { accountSelected: "accountSelected" }, decls: 13, vars: 5, consts: [["searchInput", ""], [1, "client-selector", "space-y-4"], ["id", "account-selection-live-region", "aria-live", "polite", "aria-atomic", "true", 1, "sr-only"], [1, "w-full"], [1, "p-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "Search accounts...", "aria-label", "Search accounts", "aria-describedby", "account-count-description", 1, "w-full", 3, "formControl"], [1, "pi", "pi-search"], ["id", "account-count-description", 1, "sr-only"], [1, "account-cards-empty", "flex", "flex-col", "items-center", "justify-center", "py-8", "text-[var(--text-color-secondary)]"], ["role", "listbox", "aria-label", "Available accounts", 1, "account-cards-grid"], [1, "pi", "pi-inbox", "text-4xl", "mb-2"], ["tabindex", "0", "role", "option", "aria-selected", "false", 1, "account-card", 3, "id"], ["tabindex", "0", "role", "option", "aria-selected", "false", 1, "account-card", 3, "click", "keydown.enter", "keydown.space", "id"], ["aria-hidden", "true", 1, "account-card-avatar"], [1, "account-card-content"], [1, "account-card-name"], [1, "account-card-owner"], ["aria-hidden", "true", 1, "account-card-action"], [1, "pi", "pi-chevron-right"]], template: function ClientSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "p-iconfield");
      \u0275\u0275element(5, "input", 5, 0)(7, "p-inputicon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div");
      \u0275\u0275conditionalCreate(11, ClientSelectorComponent_Conditional_11_Template, 4, 0, "div", 8)(12, ClientSelectorComponent_Conditional_12_Template, 3, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.searchControl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.filteredAccounts().length, " accounts available ");
      \u0275\u0275advance();
      \u0275\u0275classMap("flex flex-col w-full overflow-y-auto rounded " + ctx.maxHeightClass());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filteredAccounts().length === 0 ? 11 : 12);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    FormControlDirective,
    IconField,
    InputTextModule,
    InputText,
    InputIcon,
    TitleCasePipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  padding: 0 1rem;\n  --p-iconfield-icon-color: var(--color-primary-color, #378bc0);\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%] {\n    padding: 0;\n  }\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.account-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n  padding: 0.25rem;\n}\n@media (min-width: 640px) {\n  .account-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.account-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius, 0.375rem);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.account-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.account-card[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.account-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.account-card.focused[_ngcontent-%COMP%] {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.account-card[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.account-card-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  background-color: var(--color-primary-color, #378bc0);\n  color: white;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 50%;\n  text-transform: uppercase;\n}\n.account-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.account-card-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-card-owner[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-card-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color-secondary);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.account-card[_ngcontent-%COMP%]:hover   .account-card-action[_ngcontent-%COMP%], \n.account-card[_ngcontent-%COMP%]:focus   .account-card-action[_ngcontent-%COMP%], \n.account-card.focused[_ngcontent-%COMP%]   .account-card-action[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(2px);\n}\n.account-card-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.account-cards-empty[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n/*# sourceMappingURL=client-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-client-selector", imports: [
      CommonModule,
      ReactiveFormsModule,
      IconField,
      InputTextModule,
      InputIcon
    ], template: `<div class="client-selector space-y-4">
  <!-- Screen reader live region for announcements -->
  <div
    id="account-selection-live-region"
    class="sr-only"
    aria-live="polite"
    aria-atomic="true"
  ></div>

  <div class="w-full">
    <div class="p-inputgroup">
      <p-iconfield>
        <input
          #searchInput
          type="text"
          pInputText
          [formControl]="searchControl"
          placeholder="Search accounts..."
          class="w-full"
          aria-label="Search accounts"
          aria-describedby="account-count-description"
        />
        <p-inputicon class="pi pi-search" />
      </p-iconfield>
    </div>
    <div id="account-count-description" class="sr-only">
      {{ filteredAccounts().length }} accounts available
    </div>
  </div>

  <div
    [class]="'flex flex-col w-full overflow-y-auto rounded ' + maxHeightClass()"
  >
    @if (filteredAccounts().length === 0) {
      <div
        class="account-cards-empty flex flex-col items-center justify-center py-8 text-[var(--text-color-secondary)]"
      >
        <i class="pi pi-inbox text-4xl mb-2"></i>
        <span>No accounts found</span>
      </div>
    } @else {
      <div
        class="account-cards-grid"
        role="listbox"
        aria-label="Available accounts"
      >
        @for (account of filteredAccounts(); track account.id; let i = $index) {
          <div
            class="account-card"
            [id]="'account-card-' + i"
            (click)="selectAccount(account.id)"
            (keydown.enter)="selectAccount(account.id)"
            (keydown.space)="selectAccount(account.id); $event.preventDefault()"
            tabindex="0"
            role="option"
            [attr.aria-label]="
              'Select ' +
              account.name +
              (account.owner.name
                ? ', ' +
                  (account.owner.type | titlecase) +
                  ': ' +
                  account.owner.name
                : '')
            "
            aria-selected="false"
            [attr.aria-posinset]="i + 1"
            [attr.aria-setsize]="filteredAccounts().length"
          >
            <div class="account-card-avatar" aria-hidden="true">
              {{ account.name.charAt(0).toUpperCase() }}
            </div>
            <div class="account-card-content">
              <div class="account-card-name">{{ account.name }}</div>
              @if (account.owner.name) {
                <div class="account-card-owner">
                  {{ account.owner.type | titlecase }}: {{ account.owner.name }}
                </div>
              }
            </div>
            <div class="account-card-action" aria-hidden="true">
              <i class="pi pi-chevron-right"></i>
            </div>
          </div>
        }
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/shared/components/client-selector/client-selector.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  padding: 0 1rem;\n  --p-iconfield-icon-color: var(--color-primary-color, #378bc0);\n}\n@media (min-width: 640px) {\n  :host {\n    padding: 0;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.account-cards-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.75rem;\n  padding: 0.25rem;\n}\n@media (min-width: 640px) {\n  .account-cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.account-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background-color: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--border-radius, 0.375rem);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.account-card:hover {\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.account-card:focus {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.account-card:focus-visible {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n}\n.account-card.focused {\n  outline: 2px solid var(--primary-color, #378bc0);\n  outline-offset: 2px;\n  background-color: var(--surface-hover);\n  border-color: var(--primary-color, #378bc0);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.account-card:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n.account-card-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  background-color: var(--color-primary-color, #378bc0);\n  color: white;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 50%;\n  text-transform: uppercase;\n}\n.account-card-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.account-card-name {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-card-owner {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.account-card-action {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-color-secondary);\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.account-card:hover .account-card-action,\n.account-card:focus .account-card-action,\n.account-card.focused .account-card-action {\n  opacity: 1;\n  transform: translateX(2px);\n}\n.account-card-action i {\n  font-size: 0.875rem;\n}\n.account-cards-empty {\n  min-height: 200px;\n}\n/*# sourceMappingURL=client-selector.component.css.map */\n"] }]
  }], null, { clientAccounts: [{ type: Input, args: [{ isSignal: true, alias: "clientAccounts", required: false }] }], maxHeightClass: [{ type: Input, args: [{ isSignal: true, alias: "maxHeightClass", required: false }] }], accountSelected: [{ type: Output, args: ["accountSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientSelectorComponent, { className: "ClientSelectorComponent", filePath: "src/app/shared/components/client-selector/client-selector.component.ts", lineNumber: 23 });
})();

export {
  ClientSelectionFormComponent,
  RecentClientsService,
  ClientSelectorComponent,
  userProfileResolver
};
//# sourceMappingURL=chunk-XMVJLGFA.js.map
