import {
  EntityDetailsService,
  GridConfigurationFactory
} from "./chunk-APMDEWMR.js";
import {
  Tab,
  TabList,
  Tabs,
  TabsModule
} from "./chunk-ZUS2KESU.js";
import {
  DetailsComponentFactory
} from "./chunk-7U4EYVSC.js";
import {
  BroadcastEventMessageService
} from "./chunk-ZL7F4D5C.js";
import {
  GridComponent,
  takeUntilDestroyed
} from "./chunk-RKEADLQI.js";
import {
  ButtonModule,
  Tooltip,
  TooltipModule
} from "./chunk-FS4ZYR5Y.js";
import {
  DEFAULT_PAGE_SIZE,
  isArray,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isString
} from "./chunk-26QXO3YB.js";
import {
  ActivatedRoute,
  NavigationEnd,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-FRWWEFIZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EMPTY,
  Subject,
  ViewChild,
  catchError,
  debounceTime,
  defer,
  effect,
  filter,
  finalize,
  inject,
  input,
  map,
  merge,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FCYO5PMO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/components/admin-grid-container/admin-grid-container.component.ts
var AdminGridContainerComponent = class _AdminGridContainerComponent {
  grid;
  gridConfigurationFactory = inject(GridConfigurationFactory);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  currentGridState = signal(void 0);
  filterSubject = new Subject();
  broadcastService = inject(BroadcastEventMessageService);
  detailsFactory = inject(DetailsComponentFactory);
  detailsService = inject(EntityDetailsService);
  gridConfiguration = signal(null);
  columns = signal([]);
  data = signal([]);
  loading = signal(false);
  totalRecords = signal(0);
  limit = signal(DEFAULT_PAGE_SIZE);
  showFilters = signal(false);
  currentFilters = signal({});
  router = inject(Router);
  forceGridReconfig$ = new Subject();
  lastProcessedRouteKey = signal(null);
  constructor() {
    effect(() => {
      const config = this.gridConfiguration();
      if (isDefined(config?.columnsSignal)) {
        this.columns.set(config.columnsSignal());
      }
    });
  }
  ngOnInit() {
    this.initializeGridConfiguration();
    this.initializeFilterDebounce();
    this.initializeEntityUpdatesHandler();
    this.initializeClientChangeHandler();
    this.forceGridReconfig$.next();
  }
  selectGridItemFromQuery() {
    this.activatedRoute.queryParams.pipe(takeUntilDestroyed(this.destroyRef), tap((params) => {
      if (this.data().length > 0 && isDefined(params["details"])) {
        const selectedId = params["details"];
        const selectedItem = this.data().find((item) => item.id === selectedId);
        if (selectedItem && this.grid) {
          setTimeout(() => {
            this.grid?.setSelection(selectedItem);
            this.handleRowSelect({ data: selectedItem });
          });
        }
      }
    })).subscribe();
  }
  initializeEntityUpdatesHandler() {
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      let currentSelection = null;
      if (this.grid?.selectedRows) {
        currentSelection = Array.isArray(this.grid.selectedRows) ? [...this.grid.selectedRows] : __spreadValues({}, this.grid.selectedRows);
      }
      this.loadData(this.currentGridState()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (currentSelection) {
          this.restoreSelection(Array.isArray(currentSelection) ? currentSelection[0] : currentSelection);
        }
      });
    });
  }
  initializeClientChangeHandler() {
    const configChanges$ = merge(this.broadcastService.on("client-changed"), this.broadcastService.on("entity-changed"));
    const dataChanges$ = this.broadcastService.on("entity-deleted");
    configChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.forceGridReconfig$.next();
    });
    dataChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.onRefresh();
    });
  }
  /**
   * Tries to restore a previously selected item
   */
  restoreSelection(previousSelection) {
    if (isNullOrUndefined(previousSelection) || !this.grid)
      return;
    if (this.data().length === 0) {
      console.warn("Cannot restore selection: grid data is empty");
      return;
    }
    try {
      if (Array.isArray(previousSelection)) {
        const selectedIds = previousSelection.map((item) => item.id);
        const refreshedItems = this.data().filter((item) => selectedIds.includes(item.id));
        if (refreshedItems.length > 0) {
          setTimeout(() => {
            this.grid?.setSelection(refreshedItems);
            if (isDefined(refreshedItems[0])) {
              this.handleRowSelect({ data: refreshedItems[0] });
            }
          }, 0);
        }
      } else if (isDefined(previousSelection?.["id"])) {
        const refreshedItem = this.data().find((item) => item.id === previousSelection["id"]);
        if (refreshedItem) {
          setTimeout(() => {
            this.grid?.setSelection(refreshedItem);
            this.handleRowSelect({ data: refreshedItem });
          }, 0);
        } else {
          console.warn(`Item with id ${previousSelection["id"]} not found in refreshed data`);
        }
      }
    } catch (err) {
      console.error("Error restoring selection:", err);
    }
  }
  initializeGridConfiguration() {
    const navigationEvents$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => false));
    const forceReconfigEvents$ = this.forceGridReconfig$.pipe(map(() => true));
    merge(navigationEvents$, forceReconfigEvents$).pipe(takeUntilDestroyed(this.destroyRef), switchMap(() => {
      this.loading.set(true);
      const type = this.activatedRoute.snapshot.paramMap.get("type");
      const routeParams = this.getRouteParams();
      const ownerId = routeParams["clientId"] ?? routeParams["vendorId"] ?? routeParams["distributorId"] ?? "none";
      const currentRouteKey = `${type}-${ownerId}`;
      if (this.lastProcessedRouteKey() === currentRouteKey) {
        this.loading.set(false);
        return EMPTY;
      }
      this.lastProcessedRouteKey.set(currentRouteKey);
      if (isNullOrUndefined(type)) {
        this.gridConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      const config = this.gridConfigurationFactory.create(type, routeParams);
      if (!this.isValidConfig(config)) {
        console.warn(`AdminGridContainer: Generated configuration for type "${type}" (key: ${currentRouteKey}) is invalid.`);
        this.gridConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      this.gridConfiguration.set(config);
      this.columns.set(config.columns);
      if (isDefined(config.getFilters)) {
        const filterState = config.getFilters();
        const initialFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            initialFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(initialFilters);
      } else {
        this.currentFilters.set({});
      }
      return this.loadData();
    }), catchError((err) => {
      console.error("AdminGridContainer: Error during grid configuration or data load pipeline:", err);
      this.loading.set(false);
      this.data.set([]);
      this.totalRecords.set(0);
      this.gridConfiguration.set(null);
      this.columns.set([]);
      this.currentFilters.set({});
      return EMPTY;
    })).subscribe();
  }
  getRouteParams() {
    let route = this.activatedRoute;
    const paramsList = [];
    while (route) {
      paramsList.push(route.snapshot.params);
      route = route.parent;
    }
    const finalParams = {};
    for (let i = paramsList.length - 1; i >= 0; i--) {
      Object.assign(finalParams, paramsList[i]);
    }
    return finalParams;
  }
  isValidConfig(config) {
    return isDefined(config?.dataService);
  }
  initializeFilterDebounce() {
    this.filterSubject.pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(300),
      // Debounce filter changes by 300ms
      tap((event) => {
        const config = this.gridConfiguration();
        if (!config)
          return;
        config.onFilterChange?.(event.field, event.value);
        this.loadData(this.currentGridState()).subscribe(() => {
        });
      })
    ).subscribe();
  }
  loadData(event) {
    return defer(() => {
      const config = this.gridConfiguration();
      if (!this.isValidConfig(config)) {
        this.loading.set(false);
        return EMPTY;
      }
      this.loading.set(true);
      this.currentGridState.set(event);
      return config.dataService.getList(config.getRequestParams(event)).pipe(takeUntilDestroyed(this.destroyRef), tap((response) => {
        this.data.set(response.items);
        this.totalRecords.set(response.count);
        this.selectGridItemFromQuery();
      }), catchError((err) => {
        console.error(`AdminGridContainer: Error loading data for type:`, err);
        this.data.set([]);
        this.totalRecords.set(0);
        return EMPTY;
      }), finalize(() => {
        this.loading.set(false);
      }));
    });
  }
  onExport() {
    this.grid?.exportCSV();
  }
  onRefresh() {
    const config = this.gridConfiguration();
    if (!this.isValidConfig(config)) {
      return;
    }
    const hasSelectedItem = this.detailsService.showPanel();
    const selectedItemId = this.detailsService.getSelectedItemId();
    this.loadData(this.currentGridState()).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      if (hasSelectedItem && selectedItemId) {
        const refreshedItem = this.findItemById(selectedItemId);
        if (isDefined(refreshedItem)) {
          this.detailsService.softRefreshSelectedItem(refreshedItem);
        } else {
          this.detailsService.softRefreshSelectedItem();
        }
      }
    })).subscribe();
  }
  handleFilterChange(event) {
    this.filterSubject.next(event);
  }
  onFilterToggle() {
    const config = this.gridConfiguration();
    if (!this.grid || !config)
      return;
    const newValue = !this.showFilters();
    this.showFilters.set(newValue);
    if (newValue) {
      if (config.getFilters) {
        const filterState = config.getFilters();
        const currentFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            currentFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(currentFilters);
      }
    } else if (this.grid.filterable()) {
      if (config.clearFilters) {
        config.clearFilters();
        this.loadData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
      }
    }
  }
  handleLazyLoad(event) {
    this.loadData(event).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe();
  }
  // Handle row selection from the grid
  handleRowSelect(event) {
    if (isEmpty(event) || isEmpty(event.data))
      return;
    const routeEntityType = this.detailsFactory.getEntityTypeFromRoute(this.activatedRoute, "type");
    const entityType = routeEntityType ?? event.data.type;
    const item = __spreadProps(__spreadValues({}, event.data), { entityType });
    this.broadcastService.broadcast("grid-item-selected", {
      item,
      componentType: this.detailsFactory.getDetailsComponent(entityType)
    });
  }
  /**
   * Find an item in the current grid data by its ID
   * Used for soft refreshing details panel after grid refresh
   */
  findItemById(id) {
    const currentData = this.data();
    return currentData?.find((item) => String(item.id) === id) ?? null;
  }
  static \u0275fac = function AdminGridContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminGridContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminGridContainerComponent, selectors: [["app-admin-grid-container"]], viewQuery: function AdminGridContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 14, vars: 22, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "p-4", "content-header", "flex-none", "w-full"], [1, "flex", "justify-between", "items-center"], ["id", "gridTitle", 1, "text-xl", "font-semibold", "truncate"], ["aria-label", "Grid actions", 1, "flex-none", "flex", "space-x-4", "align-center"], ["type", "button", "pTooltip", "Add", "tooltipPosition", "bottom", "aria-label", "Add new item", 1, "pi", "pi-plus", "action", "hover", 3, "click"], ["type", "button", "pTooltip", "Refresh", "tooltipPosition", "bottom", "aria-label", "Refresh grid data", 1, "pi", "pi-refresh", "action", "hover", 3, "click"], ["type", "button", "pTooltip", "Filter", "tooltipPosition", "bottom", "aria-label", "Toggle filters", 1, "pi", "pi-filter-fill", "action", "hover", 3, "click"], ["pTooltip", "Export CSV", "tooltipPosition", "bottom", "aria-label", "Export to CSV", 1, "pi", "pi-download", "action", "hover", 3, "click"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden"], ["role", "grid", "styleClass", "table-height", 1, "h-full", "max-w-full", 3, "onLazyLoad", "onFilterChange", "rowSelect", "columns", "data", "pagination", "totalRecords", "lazy", "filterable", "selectionMode", "loading", "scrollable", "scrollHeight", "initialFilters", "sortable"], ["aria-live", "polite", "aria-atomic", "true", 1, "sr-only"]], template: function AdminGridContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_6_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.gridConfiguration()) == null ? null : tmp_0_0.onAdd();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_7_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_8_listener() {
        return ctx.onFilterToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_9_listener() {
        return ctx.onExport();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "app-grid", 10);
      \u0275\u0275listener("onLazyLoad", function AdminGridContainerComponent_Template_app_grid_onLazyLoad_11_listener($event) {
        return ctx.handleLazyLoad($event);
      })("onFilterChange", function AdminGridContainerComponent_Template_app_grid_onFilterChange_11_listener($event) {
        return ctx.handleFilterChange($event);
      })("rowSelect", function AdminGridContainerComponent_Template_app_grid_rowSelect_11_listener($event) {
        return ctx.handleRowSelect($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_4_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.gridConfiguration()) == null ? null : tmp_0_0.getTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-disabled", !((tmp_1_0 = ctx.gridConfiguration()) == null ? null : tmp_1_0.onAdd));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-busy", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275classProp("text-primary", ctx.showFilters());
      \u0275\u0275attribute("aria-disabled", !((tmp_4_0 = ctx.gridConfiguration()) == null ? null : tmp_4_0.filterConfig));
      \u0275\u0275advance(3);
      \u0275\u0275property("columns", ctx.columns())("data", ctx.data())("pagination", true)("totalRecords", ctx.totalRecords())("lazy", true)("filterable", ctx.showFilters())("selectionMode", "single")("loading", ctx.loading())("scrollable", true)("scrollHeight", "flex")("initialFilters", ctx.currentFilters())("sortable", true);
      \u0275\u0275attribute("aria-labelledby", "gridTitle")("aria-busy", ctx.loading())("aria-rowcount", ctx.totalRecords());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Loading data" : ctx.totalRecords() + " items loaded", " ");
    }
  }, dependencies: [GridComponent, ButtonModule, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=admin-grid-container.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminGridContainerComponent, [{
    type: Component,
    args: [{ selector: "app-admin-grid-container", imports: [GridComponent, ButtonModule, TooltipModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <div class="p-4 content-header flex-none w-full">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold truncate" id="gridTitle">
        {{ gridConfiguration()?.getTitle() }}
      </h2>
      <div
        class="flex-none flex space-x-4 align-center"
        aria-label="Grid actions"
      >
        <button
          type="button"
          class="pi pi-plus action hover"
          pTooltip="Add"
          tooltipPosition="bottom"
          aria-label="Add new item"
          [attr.aria-disabled]="!gridConfiguration()?.onAdd"
          (click)="gridConfiguration()?.onAdd()"
        ></button>
        <button
          type="button"
          class="pi pi-refresh action hover"
          pTooltip="Refresh"
          tooltipPosition="bottom"
          (click)="onRefresh()"
          aria-label="Refresh grid data"
          [attr.aria-busy]="loading()"
        ></button>
        <button
          type="button"
          class="pi pi-filter-fill action hover"
          pTooltip="Filter"
          tooltipPosition="bottom"
          [class.text-primary]="showFilters()"
          (click)="onFilterToggle()"
          aria-label="Toggle filters"
          [attr.aria-disabled]="!gridConfiguration()?.filterConfig"
        ></button>
        <button
          class="pi pi-download action hover"
          pTooltip="Export CSV"
          tooltipPosition="bottom"
          (click)="onExport()"
          aria-label="Export to CSV"
        ></button>
      </div>
    </div>
  </div>

  <div class="flex-1 min-h-0 w-full overflow-hidden">
    <app-grid
      [columns]="columns()"
      [data]="data()"
      [pagination]="true"
      [totalRecords]="totalRecords()"
      [lazy]="true"
      [filterable]="showFilters()"
      (onLazyLoad)="handleLazyLoad($event)"
      (onFilterChange)="handleFilterChange($event)"
      (rowSelect)="handleRowSelect($event)"
      [selectionMode]="'single'"
      [loading]="loading()"
      [scrollable]="true"
      [scrollHeight]="'flex'"
      role="grid"
      [attr.aria-labelledby]="'gridTitle'"
      [attr.aria-busy]="loading()"
      [attr.aria-rowcount]="totalRecords()"
      [initialFilters]="currentFilters()"
      [sortable]="true"
      class="h-full max-w-full"
      styleClass="table-height"
    ></app-grid>
  </div>
  <div class="sr-only" aria-live="polite" aria-atomic="true">
    {{ loading() ? 'Loading data' : totalRecords() + ' items loaded' }}
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/admin-grid-container/admin-grid-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=admin-grid-container.component.css.map */\n"] }]
  }], () => [], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminGridContainerComponent, { className: "AdminGridContainerComponent", filePath: "src/app/features/administration/components/admin-grid-container/admin-grid-container.component.ts", lineNumber: 64 });
})();

// src/app/shared/components/tabs/dynamic-tab-panel/dynamic-tab-panel.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ exact: true });
var _c3 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DynamicTabPanelComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 8);
    \u0275\u0275listener("click", function DynamicTabPanelComponent_For_5_Template_p_tab_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange(tab_r2));
    })("keydown.enter", function DynamicTabPanelComponent_For_5_Template_p_tab_keydown_enter_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange(tab_r2));
    });
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    const tabContent_r4 = \u0275\u0275reference(9);
    \u0275\u0275property("value", tab_r2.id)("disabled", tab_r2 == null ? null : tab_r2.disabled)("routerLink", ctx_r2.getTabPath(tab_r2) ? \u0275\u0275pureFunction1(8, _c0, ctx_r2.getTabPath(tab_r2)) : \u0275\u0275pureFunction0(10, _c1))("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c2));
    \u0275\u0275attribute("aria-label", tab_r2.label)("role", "tab");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tabContent_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c3, tab_r2));
  }
}
function DynamicTabPanelComponent_For_7_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tab", 8);
    \u0275\u0275listener("click", function DynamicTabPanelComponent_For_7_Conditional_0_For_3_Template_p_tab_click_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onTabChange(tab_r6));
    })("keydown.enter", function DynamicTabPanelComponent_For_7_Conditional_0_For_3_Template_p_tab_keydown_enter_0_listener() {
      const tab_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onTabChange(tab_r6));
    });
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    const tabContent_r4 = \u0275\u0275reference(9);
    \u0275\u0275property("value", tab_r6.id)("disabled", tab_r6 == null ? null : tab_r6.disabled)("routerLink", ctx_r2.getTabPath(tab_r6) ? \u0275\u0275pureFunction1(8, _c0, ctx_r2.getTabPath(tab_r6)) : \u0275\u0275pureFunction0(10, _c1))("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c2));
    \u0275\u0275attribute("aria-label", tab_r6.label)("role", "tab");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tabContent_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c3, tab_r6));
  }
}
function DynamicTabPanelComponent_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tabs", 10)(1, "p-tablist");
    \u0275\u0275repeaterCreate(2, DynamicTabPanelComponent_For_7_Conditional_0_For_3_Template, 2, 14, "p-tab", 4, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const $index_r7 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.activeTabPath()[$index_r7])("scrollable", true);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_14_0 = ctx_r2.getActiveTabAtLevel(ctx_r2.tabs(), $index_r7 - 1)) == null ? null : tmp_14_0.children);
  }
}
function DynamicTabPanelComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicTabPanelComponent_For_7_Conditional_0_Template, 4, 2, "p-tabs", 10);
  }
  if (rf & 2) {
    let tmp_11_0;
    const $index_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional($index_r7 > 0 && ((tmp_11_0 = ctx_r2.getActiveTabAtLevel(ctx_r2.tabs(), $index_r7 - 1)) == null ? null : tmp_11_0.children == null ? null : tmp_11_0.children.length) ? 0 : -1);
  }
}
function DynamicTabPanelComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
  if (rf & 2) {
    const tab_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(tab_r8.icon);
  }
}
function DynamicTabPanelComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicTabPanelComponent_ng_template_8_Conditional_0_Template, 1, 2, "i", 11);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    \u0275\u0275conditional(tab_r8.icon ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r8.label, " ");
  }
}
function DynamicTabPanelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.getFinalActiveTab().template);
  }
}
function DynamicTabPanelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " Select a tab to view content or no content template defined. ");
    \u0275\u0275elementEnd();
  }
}
var DynamicTabPanelComponent = class _DynamicTabPanelComponent {
  tabs = input([]);
  baseRoute = input("");
  tabChange = output();
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  tabCache = /* @__PURE__ */ new Map();
  activeTabPath = signal([]);
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(async () => {
      await this.updateActiveTabFromUrl();
    });
    this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(async () => {
      await this.updateActiveTabFromUrl();
    });
  }
  /**
   * Updates the active tab path based on the current URL.
   */
  buildPathFromUrl() {
    const urlSegments = this.router.url.split("/").filter((segment) => segment !== "");
    const path = [];
    let currentTabs = this.tabs();
    for (const segment of urlSegments) {
      const matchingTab = this.findTabByRoute(currentTabs, segment);
      if (isDefined(matchingTab)) {
        path.push(matchingTab.id);
        currentTabs = isArray(matchingTab.children) ? matchingTab.children : [];
      }
    }
    return path;
  }
  async handleDefaultNavigation(path) {
    if (path.length > 0 || !isArray(this.tabs()) || this.tabs().length === 0) {
      return path;
    }
    const firstTab = this.tabs()[0];
    if (!isDefined(firstTab) || !isString(firstTab.id)) {
      return path;
    }
    path.push(firstTab.id);
    await this.navigateToDefaultTab(firstTab);
    return path;
  }
  async navigateToDefaultTab(firstTab) {
    if (isArray(firstTab.children) && firstTab.children.length > 0) {
      const firstChild = firstTab.children[0];
      if (isDefined(firstChild) && isString(firstChild.id)) {
        await this.router.navigate([
          this.getTabPath(firstTab),
          this.getTabPath(firstChild)
        ]);
      }
    } else {
      await this.router.navigate([this.getTabPath(firstTab)]);
    }
  }
  async updateActiveTabFromUrl() {
    const path = this.buildPathFromUrl();
    const finalPath = await this.handleDefaultNavigation(path);
    this.activeTabPath.set(finalPath);
  }
  /**
   * Finds a tab by its route.
   * @param tabs - The list of tabs to search.
   * @param route - The route to match.
   * @returns The matching tab, if found.
   */
  findTabByRoute(tabs, route) {
    const cacheKey = `${route}`;
    if (this.tabCache.has(cacheKey)) {
      return this.tabCache.get(cacheKey);
    }
    const tab = tabs.find((tab2) => tab2.route === route || tab2.id === route);
    if (tab) {
      this.tabCache.set(cacheKey, tab);
    }
    return tab;
  }
  /**
   * Gets the path for a tab.
   * @param tab - The tab to get the path for.
   * @param level - The level of the tab (optional).
   * @returns The path for the tab.
   */
  getTabPath(tab) {
    if (isNullOrUndefined(tab)) {
      throw new Error("Tab configuration is required");
    }
    return isString(tab.route) ? tab.route : tab.id;
  }
  /**
   * Gets the active tab at a specific level.
   * @param tabs - The list of tabs to search.
   * @param level - The level to search at.
   * @returns The active tab at the specified level, if found.
   */
  getActiveTabAtLevel(tabs, level) {
    const activeId = this.activeTabPath()[level];
    return tabs.find((tab) => tab.id === activeId);
  }
  /**
   * Gets the final active tab.
   * @returns The final active tab, if found.
   */
  getFinalActiveTab() {
    let currentTabs = this.tabs();
    let finalTab;
    for (const level of this.activeTabPath()) {
      finalTab = currentTabs.find((tab) => tab.id === level);
      if (finalTab?.children) {
        currentTabs = finalTab.children;
      } else {
        break;
      }
    }
    return finalTab;
  }
  /**
   * Updates the active tab path.
   * @param tabs - The list of tabs to search.
   * @param tabId - The ID of the tab to activate.
   * @param level - The level of the tab.
   * @returns The updated active tab path.
   */
  updateActiveTabPath(tabs, tabId, level) {
    if (!isArray(tabs) || !isString(tabId)) {
      return this.activeTabPath();
    }
    const newPath = [...this.activeTabPath().slice(0, level), tabId];
    const selectedTab = tabs.find((tab) => isDefined(tab) && tab.id === tabId);
    if (isDefined(selectedTab) && isArray(selectedTab.children) && selectedTab.children.length > 0) {
      const firstChild = selectedTab.children[0];
      if (isDefined(firstChild) && isString(firstChild.id)) {
        newPath.push(firstChild.id);
      }
    }
    return newPath;
  }
  /**
   * Handles tab change events.
   * @param tab - The tab that was changed.
   */
  onTabChange(tab) {
    this.tabChange.emit(tab);
    const newPath = this.updateActiveTabPath(this.tabs(), tab.id, tab.level);
    this.activeTabPath.set(newPath);
  }
  static \u0275fac = function DynamicTabPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicTabPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicTabPanelComponent, selectors: [["app-dynamic-tab-panel"]], inputs: { tabs: [1, "tabs"], baseRoute: [1, "baseRoute"] }, outputs: { tabChange: "tabChange" }, decls: 13, vars: 3, consts: [["tabContent", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex-shrink-0"], ["role", "tablist", 3, "value", "scrollable"], ["routerLinkActive", "p-highlight", 3, "value", "disabled", "routerLink", "routerLinkActiveOptions"], ["role", "tabpanel", 1, "flex-grow", "min-h-0", "overflow-hidden", "flex", "flex-col"], [3, "ngTemplateOutlet"], [1, "p-4", "text-center"], ["routerLinkActive", "p-highlight", 3, "click", "keydown.enter", "value", "disabled", "routerLink", "routerLinkActiveOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tablist", 1, "nested-tabs", 3, "value", "scrollable"], ["aria-hidden", "true", 3, "class"], ["aria-hidden", "true"]], template: function DynamicTabPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "p-tabs", 3)(3, "p-tablist");
      \u0275\u0275repeaterCreate(4, DynamicTabPanelComponent_For_5_Template, 2, 14, "p-tab", 4, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(6, DynamicTabPanelComponent_For_7_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, DynamicTabPanelComponent_ng_template_8_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275conditionalCreate(11, DynamicTabPanelComponent_Conditional_11_Template, 1, 1, "ng-container", 6)(12, DynamicTabPanelComponent_Conditional_12_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.activeTabPath()[0])("scrollable", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.activeTabPath());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_5_0 = ctx.getFinalActiveTab()) == null ? null : tmp_5_0.template) ? 11 : 12);
    }
  }, dependencies: [TabsModule, Tabs, TabList, Tab, RouterModule, RouterLink, RouterLinkActive, NgTemplateOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=dynamic-tab-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTabPanelComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-tab-panel", imports: [TabsModule, RouterModule, NgTemplateOutlet], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <div class="flex-shrink-0">
    <!-- Main Tabs -->
    <p-tabs [value]="activeTabPath()[0]" [scrollable]="true" role="tablist">
      <p-tablist>
        @for (tab of tabs(); track tab.id) {
          <p-tab
            [value]="tab.id"
            [disabled]="tab?.disabled"
            [routerLink]="getTabPath(tab) ? [getTabPath(tab)] : []"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLinkActive="p-highlight"
            (click)="onTabChange(tab)"
            (keydown.enter)="onTabChange(tab)"
            [attr.aria-label]="tab.label"
            [attr.role]="'tab'"
          >
            <ng-container
              [ngTemplateOutlet]="tabContent"
              [ngTemplateOutletContext]="{ $implicit: tab }"
            >
            </ng-container>
          </p-tab>
        }
      </p-tablist>
    </p-tabs>

    <!-- Nested Tabs -->
    @for (level of activeTabPath(); track $index) {
      @if (
        $index > 0 && getActiveTabAtLevel(tabs(), $index - 1)?.children?.length
      ) {
        <p-tabs
          [value]="activeTabPath()[$index]"
          [scrollable]="true"
          role="tablist"
          class="nested-tabs"
        >
          <p-tablist>
            @for (
              tab of getActiveTabAtLevel(tabs(), $index - 1)?.children;
              track tab.id
            ) {
              <p-tab
                [value]="tab.id"
                [disabled]="tab?.disabled"
                [routerLink]="getTabPath(tab) ? [getTabPath(tab)] : []"
                [routerLinkActiveOptions]="{ exact: true }"
                routerLinkActive="p-highlight"
                (click)="onTabChange(tab)"
                (keydown.enter)="onTabChange(tab)"
                [attr.aria-label]="tab.label"
                [attr.role]="'tab'"
              >
                <ng-container
                  [ngTemplateOutlet]="tabContent"
                  [ngTemplateOutletContext]="{ $implicit: tab }"
                >
                </ng-container>
              </p-tab>
            }
          </p-tablist>
        </p-tabs>
      }
    }
  </div>

  <!-- Tab Content Template Definition (not rendered here, but used above) -->
  <ng-template #tabContent let-tab>
    @if (tab.icon) {
      <i [class]="tab.icon" aria-hidden="true"></i>
    }
    {{ tab.label }}
  </ng-template>

  <!-- Actual Content Area for the active tab -->
  <div class="flex-grow min-h-0 overflow-hidden flex flex-col" role="tabpanel">
    @if (getFinalActiveTab()?.template) {
      <ng-container
        [ngTemplateOutlet]="getFinalActiveTab()!.template!"
      ></ng-container>
    } @else {
      <!-- Fallback content if no template is defined for the active tab -->
      <div class="p-4 text-center">
        Select a tab to view content or no content template defined.
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/shared/components/tabs/dynamic-tab-panel/dynamic-tab-panel.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=dynamic-tab-panel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicTabPanelComponent, { className: "DynamicTabPanelComponent", filePath: "src/app/shared/components/tabs/dynamic-tab-panel/dynamic-tab-panel.component.ts", lineNumber: 36 });
})();

export {
  DynamicTabPanelComponent,
  AdminGridContainerComponent
};
//# sourceMappingURL=chunk-QLEDV2YF.js.map
