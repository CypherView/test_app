import {
  Tab,
  TabList,
  Tabs,
  TabsModule
} from "./chunk-B2VOHKSQ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  NgClass,
  NgTemplateOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  isArray,
  isDefined,
  isNullOrUndefined,
  isString,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DestroyRef,
  Input,
  Output,
  filter,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";

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
  tabs = input([], ...ngDevMode ? [{ debugName: "tabs" }] : []);
  baseRoute = input("", ...ngDevMode ? [{ debugName: "baseRoute" }] : []);
  contentScrollable = input(false, ...ngDevMode ? [{ debugName: "contentScrollable" }] : []);
  tabChange = output();
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  tabCache = /* @__PURE__ */ new Map();
  activeTabPath = signal([], ...ngDevMode ? [{ debugName: "activeTabPath" }] : []);
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
   * @param tab - The tab to update to.
   * @param level - The level of the tab.
   * @returns The updated active tab path.
   */
  updateActiveTabPath(tab, level) {
    if (!isDefined(tab) || !isString(tab.id)) {
      return this.activeTabPath();
    }
    const newPath = [...this.activeTabPath().slice(0, level), tab.id];
    if (isArray(tab.children) && tab.children.length > 0) {
      const firstChild = tab.children[0];
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
    const newPath = this.updateActiveTabPath(tab, tab.level);
    this.activeTabPath.set(newPath);
  }
  static \u0275fac = function DynamicTabPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DynamicTabPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicTabPanelComponent, selectors: [["app-dynamic-tab-panel"]], inputs: { tabs: [1, "tabs"], baseRoute: [1, "baseRoute"], contentScrollable: [1, "contentScrollable"] }, outputs: { tabChange: "tabChange" }, decls: 13, vars: 4, consts: [["tabContent", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "flex-shrink-0", "sticky", "top-0", "z-50"], ["role", "tablist", 3, "value", "scrollable"], ["routerLinkActive", "p-highlight", 3, "value", "disabled", "routerLink", "routerLinkActiveOptions"], ["role", "tabpanel", 1, "flex-grow", "min-h-0", "flex", "flex-col", 3, "ngClass"], [3, "ngTemplateOutlet"], [1, "p-4", "text-center"], ["routerLinkActive", "p-highlight", 3, "click", "keydown.enter", "value", "disabled", "routerLink", "routerLinkActiveOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "tablist", 1, "nested-tabs", 3, "value", "scrollable"], ["aria-hidden", "true", 3, "class"], ["aria-hidden", "true"]], template: function DynamicTabPanelComponent_Template(rf, ctx) {
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
      let tmp_6_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.activeTabPath()[0])("scrollable", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tabs());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.activeTabPath());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.contentScrollable() ? "overflow-y-auto" : "overflow-hidden");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.getFinalActiveTab()) == null ? null : tmp_6_0.template) ? 11 : 12);
    }
  }, dependencies: [TabsModule, Tabs, TabList, Tab, RouterModule, RouterLink, RouterLinkActive, NgTemplateOutlet, NgClass], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=dynamic-tab-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicTabPanelComponent, [{
    type: Component,
    args: [{ selector: "app-dynamic-tab-panel", imports: [TabsModule, RouterModule, NgTemplateOutlet, NgClass], template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <div class="flex-shrink-0 sticky top-0 z-50">
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
  <div
    class="flex-grow min-h-0 flex flex-col"
    [ngClass]="contentScrollable() ? 'overflow-y-auto' : 'overflow-hidden'"
    role="tabpanel"
  >
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
  }], null, { tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: false }] }], baseRoute: [{ type: Input, args: [{ isSignal: true, alias: "baseRoute", required: false }] }], contentScrollable: [{ type: Input, args: [{ isSignal: true, alias: "contentScrollable", required: false }] }], tabChange: [{ type: Output, args: ["tabChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicTabPanelComponent, { className: "DynamicTabPanelComponent", filePath: "src/app/shared/components/tabs/dynamic-tab-panel/dynamic-tab-panel.component.ts", lineNumber: 36 });
})();

export {
  DynamicTabPanelComponent
};
//# sourceMappingURL=chunk-62QE5I2S.js.map
