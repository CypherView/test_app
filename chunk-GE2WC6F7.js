import "./chunk-5CU32GGO.js";
import "./chunk-UMFMGCF6.js";
import {
  SectionConfigBuilder
} from "./chunk-UHEGMWV5.js";
import "./chunk-FUXTESB7.js";
import {
  BroadcastEventMessageService,
  Divider,
  DividerModule
} from "./chunk-5QFOUDM4.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-XM6S3HXC.js";
import "./chunk-YOXWVJE4.js";
import "./chunk-YESEXYFI.js";
import "./chunk-QSIA2WMK.js";
import {
  ProgressSpinner,
  takeUntilDestroyed
} from "./chunk-QYHQ64RQ.js";
import "./chunk-ZQA7ZUAC.js";
import "./chunk-G6AKSBPY.js";
import {
  AccountsService
} from "./chunk-GTVUGL7K.js";
import {
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-2QFPVW6Y.js";
import {
  ActivatedRoute,
  CommonModule,
  NgComponentOutlet,
  RouterModule
} from "./chunk-OLJEO5KJ.js";
import {
  Component,
  DestroyRef,
  EMPTY,
  Injectable,
  NgModule,
  catchError,
  combineLatest,
  computed,
  firstValueFrom,
  from,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XEZOAFBV.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
      await firstValueFrom(this.accountsService.updateDistributor(id, data));
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

// src/app/features/administration/components/vendors/vendor-details/vendor-details-container/vendor-details-container.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function VendorDetailsContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function VendorDetailsContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function VendorDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template, 1, 0, "ng-container", 9);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const \u0275$index_28_r3 = ctx.$index;
    const \u0275$count_28_r4 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", section_r2.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_28_r3 === \u0275$count_28_r4 - 1) ? 1 : -1);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template, 1, 0, "ng-container", 9);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const \u0275$index_46_r6 = ctx.$index;
    const \u0275$count_46_r7 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r5.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_46_r6 === \u0275$count_46_r7 - 1) ? 1 : -1);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 7)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.settingsSections());
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template, 1, 0, "ng-container", 9);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    const \u0275$index_64_r9 = ctx.$index;
    const \u0275$count_64_r10 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r8.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_64_r9 === \u0275$count_64_r10 - 1) ? 1 : -1);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 8)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.statisticsSections());
  }
}
function VendorDetailsContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p-accordion", 5)(2, "p-accordion-panel", 5)(3, "p-accordion-header")(4, "span", 6);
    \u0275\u0275text(5, "Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-accordion-content");
    \u0275\u0275repeaterCreate(7, VendorDetailsContainerComponent_Conditional_3_For_8_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, VendorDetailsContainerComponent_Conditional_3_Conditional_9_Template, 7, 0, "p-accordion-panel", 7);
    \u0275\u0275conditionalCreate(10, VendorDetailsContainerComponent_Conditional_3_Conditional_10_Template, 7, 0, "p-accordion-panel", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.informationSections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasSettingsSections() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasStatisticsSections() ? 10 : -1);
  }
}
var VendorDetailsContainerComponent = class _VendorDetailsContainerComponent {
  broadcastService = inject(BroadcastEventMessageService);
  informationSections = signal([]);
  settingsSections = signal([]);
  statisticsSections = signal([]);
  loading = signal(true);
  entity = signal(null);
  error = signal(null);
  defaultExpandedSections = 0;
  // Helper computed properties
  hasInformationSections = computed(() => this.informationSections().length > 0);
  hasSettingsSections = computed(() => this.settingsSections().length > 0);
  hasStatisticsSections = computed(() => this.statisticsSections().length > 0);
  // Services
  dataStrategy = inject(VendorDataStrategy);
  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  isEntityUpdatedMessage(message) {
    return isDefined(message) && message !== null && typeof message === "object" && "entityType" in message && "data" in message && message.entityType === "vendor";
  }
  ngOnInit() {
    this.initializeEntityData();
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      if (this.isEntityUpdatedMessage(message)) {
        this.entity.set(message.data);
        this.updateSectionsWithEntityData();
      }
    });
  }
  initializeEntityData() {
    combineLatest([
      this.route.paramMap,
      this.route.parent?.parent?.data || of({})
    ]).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      this.loading.set(true);
      this.setupSectionStructure();
    }), switchMap(([params, data]) => {
      const vendorId = params.get("vendorId");
      if (!isEmpty(data["vendor"])) {
        return of(data["vendor"]);
      }
      if (isDefined(vendorId)) {
        return from(this.dataStrategy.fetchById(vendorId));
      }
      return throwError(() => new Error("Vendor ID not found"));
    }), catchError(() => {
      this.error.set("Failed to load vendor data");
      return EMPTY;
    }), tap((vendorData) => {
      this.entity.set(vendorData);
      this.loading.set(false);
      this.updateSectionsWithEntityData();
    })).subscribe();
  }
  setupSectionStructure() {
    this.informationSections.set(SectionConfigBuilder.createVendorInformationSections(null));
    this.settingsSections.set(SectionConfigBuilder.createVendorSettingsSections(null));
  }
  updateSectionsWithEntityData() {
    const entityData = this.entity();
    if (isNullOrUndefined(entityData))
      return;
    this.informationSections.set(SectionConfigBuilder.createVendorInformationSections(entityData));
    this.settingsSections.set(SectionConfigBuilder.createVendorSettingsSections(entityData));
  }
  // Method for child components to save data
  async updateEntity(updates) {
    const vendor = this.entity();
    if (isNullOrUndefined(vendor))
      return;
    try {
      this.loading.set(true);
      const updatedEntity = await this.dataStrategy.update(vendor.id, updates);
      this.entity.set(updatedEntity);
    } catch (error) {
      this.error.set(`${error instanceof Error ? error.message : String(error)}`);
    } finally {
      this.loading.set(false);
    }
  }
  // Helper method to combine inputs
  getSectionInputs(section) {
    return __spreadValues({}, section.componentInputs);
  }
  static \u0275fac = function VendorDetailsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorDetailsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorDetailsContainerComponent, selectors: [["app-vendor-details-container"]], decls: 4, vars: 3, consts: [[1, "admin-details-container"], [1, "loading-container"], [1, "error-container"], [1, "details-container"], [1, "error-message"], ["value", "information"], [1, "uppercase"], ["value", "settings"], ["value", "statistics"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function VendorDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, VendorDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, VendorDetailsContainerComponent_Conditional_3_Template, 11, 2, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 3 : -1);
    }
  }, dependencies: [AccordionModule, Accordion, AccordionPanel, AccordionHeader, AccordionContent, DividerModule, Divider, ProgressSpinner, CommonModule, NgComponentOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-details-container", imports: [AccordionModule, DividerModule, ProgressSpinner, CommonModule], template: '<div class="admin-details-container">\n  @if (loading()) {\n    <div class="loading-container">\n      <p-progressSpinner></p-progressSpinner>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-container">\n      <p class="error-message">{{ error() }}</p>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="details-container">\n      <p-accordion value="information">\n        <!-- Information section -->\n        <p-accordion-panel value="information">\n          <p-accordion-header>\n            <span class="uppercase">Information</span>\n          </p-accordion-header>\n          <p-accordion-content>\n            @for (\n              section of informationSections();\n              track section.id;\n              let last = $last\n            ) {\n              <ng-container\n                *ngComponentOutlet="\n                  section.component;\n                  inputs: getSectionInputs(section)\n                "\n              ></ng-container>\n              @if (!last) {\n                <p-divider />\n              }\n            }\n          </p-accordion-content>\n        </p-accordion-panel>\n        <!-- Settings section -->\n        @if (hasSettingsSections()) {\n          <p-accordion-panel value="settings">\n            <p-accordion-header>\n              <span class="uppercase">Settings</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of settingsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        <!-- Statistics section -->\n        @if (hasStatisticsSections()) {\n          <p-accordion-panel value="statistics">\n            <p-accordion-header>\n              <span class="uppercase">Statistics</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of statisticsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n      </p-accordion>\n    </div>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorDetailsContainerComponent, { className: "VendorDetailsContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-details-container/vendor-details-container.component.ts", lineNumber: 55 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-details-routing.module.ts
var routes = [
  {
    path: "",
    component: VendorDetailsContainerComponent
  }
];
var VendorDetailsRoutingModule = class _VendorDetailsRoutingModule {
  static \u0275fac = function VendorDetailsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorDetailsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VendorDetailsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorDetailsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  VendorDetailsRoutingModule
};
//# sourceMappingURL=chunk-GE2WC6F7.js.map
