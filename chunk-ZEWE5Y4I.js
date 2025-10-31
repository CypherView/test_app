import {
  DistributorDataStrategy
} from "./chunk-KZQC5TPD.js";
import "./chunk-BH5ELTBQ.js";
import {
  Divider,
  DividerModule,
  FeedSectionComponent,
  SectionConfigBuilder
} from "./chunk-YYLSGSHD.js";
import "./chunk-YEDIYOUK.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-OOKU4RXS.js";
import "./chunk-3UBAK53C.js";
import "./chunk-YR6RLKDU.js";
import "./chunk-CY2OJQDM.js";
import "./chunk-GMWSGY3X.js";
import "./chunk-LWAGH4EB.js";
import "./chunk-XUQM2QOP.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-YDIEJ3ZD.js";
import {
  takeUntilDestroyed
} from "./chunk-7PPW7MEH.js";
import "./chunk-LKPIGFER.js";
import "./chunk-GNA4F765.js";
import {
  BroadcastEventMessageService
} from "./chunk-AQP2DD2C.js";
import "./chunk-QGD2WQZD.js";
import {
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-UOL47JT7.js";
import {
  ActivatedRoute,
  CommonModule,
  NgComponentOutlet,
  RouterModule
} from "./chunk-W5MMOG3B.js";
import {
  Component,
  DestroyRef,
  EMPTY,
  NgModule,
  catchError,
  combineLatest,
  computed,
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
} from "./chunk-Q56RWZOJ.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/administration/components/distributors/distributor-details/distributor-details-container/distributor-details-container.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DistributorDetailsContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function DistributorDetailsContainerComponent_Conditional_2_Template(rf, ctx) {
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
function DistributorDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DistributorDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function DistributorDetailsContainerComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DistributorDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template, 1, 0, "ng-container", 10);
    \u0275\u0275conditionalCreate(1, DistributorDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template, 1, 0, "p-divider");
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
function DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template, 1, 0, "ng-container", 10);
    \u0275\u0275conditionalCreate(1, DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function DistributorDetailsContainerComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 7)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, DistributorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.settingsSections());
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template, 1, 0, "ng-container", 10);
    \u0275\u0275conditionalCreate(1, DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function DistributorDetailsContainerComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 8)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, DistributorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.statisticsSections());
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template, 1, 0, "ng-container", 10);
    \u0275\u0275conditionalCreate(1, DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    const \u0275$index_82_r12 = ctx.$index;
    const \u0275$count_82_r13 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r11.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_82_r12 === \u0275$count_82_r13 - 1) ? 1 : -1);
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 9)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, DistributorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.changesSections());
  }
}
function DistributorDetailsContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p-accordion", 5)(2, "p-accordion-panel", 5)(3, "p-accordion-header")(4, "span", 6);
    \u0275\u0275text(5, "Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-accordion-content");
    \u0275\u0275repeaterCreate(7, DistributorDetailsContainerComponent_Conditional_3_For_8_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, DistributorDetailsContainerComponent_Conditional_3_Conditional_9_Template, 7, 0, "p-accordion-panel", 7);
    \u0275\u0275conditionalCreate(10, DistributorDetailsContainerComponent_Conditional_3_Conditional_10_Template, 7, 0, "p-accordion-panel", 8);
    \u0275\u0275conditionalCreate(11, DistributorDetailsContainerComponent_Conditional_3_Conditional_11_Template, 7, 0, "p-accordion-panel", 9);
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
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChangesSections() ? 11 : -1);
  }
}
var DistributorDetailsContainerComponent = class _DistributorDetailsContainerComponent {
  broadcastService = inject(BroadcastEventMessageService);
  informationSections = signal([], ...ngDevMode ? [{ debugName: "informationSections" }] : []);
  settingsSections = signal([], ...ngDevMode ? [{ debugName: "settingsSections" }] : []);
  statisticsSections = signal([], ...ngDevMode ? [{ debugName: "statisticsSections" }] : []);
  changesSections = signal([], ...ngDevMode ? [{ debugName: "changesSections" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  entity = signal(null, ...ngDevMode ? [{ debugName: "entity" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  defaultExpandedSections = 0;
  // Helper computed properties
  hasInformationSections = computed(() => this.informationSections().length > 0, ...ngDevMode ? [{ debugName: "hasInformationSections" }] : []);
  hasSettingsSections = computed(() => this.settingsSections().length > 0, ...ngDevMode ? [{ debugName: "hasSettingsSections" }] : []);
  hasStatisticsSections = computed(() => this.statisticsSections().length > 0, ...ngDevMode ? [{ debugName: "hasStatisticsSections" }] : []);
  hasChangesSections = computed(() => this.changesSections().length > 0, ...ngDevMode ? [{ debugName: "hasChangesSections" }] : []);
  // Services
  dataStrategy = inject(DistributorDataStrategy);
  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  isEntityUpdatedMessage(message) {
    return isDefined(message) && message !== null && typeof message === "object" && "entityType" in message && "data" in message && message.entityType === "distributor";
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
      const distributorId = params.get("distributorId") ?? data["distributor"]?.id;
      if (isDefined(distributorId)) {
        return from(this.dataStrategy.fetchById(distributorId));
      }
      if (!isEmpty(data["distributor"])) {
        return of(data["distributor"]);
      }
      return throwError(() => new Error("Distributor ID not found"));
    }), catchError(() => {
      this.error.set("Failed to load distributor data");
      return EMPTY;
    }), tap((distributorData) => {
      this.entity.set(distributorData);
      this.loading.set(false);
      this.updateSectionsWithEntityData();
    })).subscribe();
  }
  setupSectionStructure() {
    this.informationSections.set(SectionConfigBuilder.createDistributorInformationSections(null));
    this.settingsSections.set(SectionConfigBuilder.createDistributorSettingsSections(null));
  }
  updateSectionsWithEntityData() {
    const entityData = this.entity();
    if (isNullOrUndefined(entityData))
      return;
    this.informationSections.set(SectionConfigBuilder.createDistributorInformationSections(entityData));
    this.settingsSections.set(SectionConfigBuilder.createDistributorSettingsSections(entityData));
    this.statisticsSections.set(SectionConfigBuilder.createDistributorStatisticsSections(entityData));
    this.changesSections.set([
      {
        id: "distributor-changes",
        title: "Changes",
        component: FeedSectionComponent,
        componentInputs: {
          entity: entityData,
          entityType: "distributor"
        },
        category: "feed",
        order: 10
      }
    ]);
  }
  // Method for child components to save data
  async updateEntity(updates) {
    const distributor = this.entity();
    if (isNullOrUndefined(distributor))
      return;
    try {
      this.loading.set(true);
      const updatedEntity = await this.dataStrategy.update(distributor.id, updates);
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
  static \u0275fac = function DistributorDetailsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DistributorDetailsContainerComponent, selectors: [["app-distributor-details-container"]], decls: 4, vars: 3, consts: [[1, "admin-details-container"], [1, "loading-container"], [1, "error-container"], [1, "details-container"], [1, "error-message"], ["value", "information"], [1, "uppercase"], ["value", "settings"], ["value", "statistics"], ["value", "changes"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function DistributorDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, DistributorDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, DistributorDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, DistributorDetailsContainerComponent_Conditional_3_Template, 12, 3, "div", 3);
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
  }, dependencies: [AccordionModule, Accordion, AccordionPanel, AccordionHeader, AccordionContent, DividerModule, Divider, ProgressSpinnerModule, ProgressSpinner, CommonModule, NgComponentOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-distributor-details-container", imports: [
      AccordionModule,
      DividerModule,
      ProgressSpinnerModule,
      CommonModule
    ], template: '<div class="admin-details-container">\n  @if (loading()) {\n    <div class="loading-container">\n      <p-progressSpinner></p-progressSpinner>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-container">\n      <p class="error-message">{{ error() }}</p>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="details-container">\n      <p-accordion value="information">\n        <!-- Information section -->\n        <p-accordion-panel value="information">\n          <p-accordion-header>\n            <span class="uppercase">Information</span>\n          </p-accordion-header>\n          <p-accordion-content>\n            @for (\n              section of informationSections();\n              track section.id;\n              let last = $last\n            ) {\n              <ng-container\n                *ngComponentOutlet="\n                  section.component;\n                  inputs: getSectionInputs(section)\n                "\n              ></ng-container>\n              @if (!last) {\n                <p-divider />\n              }\n            }\n          </p-accordion-content>\n        </p-accordion-panel>\n        <!-- Settings section -->\n        @if (hasSettingsSections()) {\n          <p-accordion-panel value="settings">\n            <p-accordion-header>\n              <span class="uppercase">Settings</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of settingsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        <!-- Statistics section -->\n        @if (hasStatisticsSections()) {\n          <p-accordion-panel value="statistics">\n            <p-accordion-header>\n              <span class="uppercase">Statistics</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of statisticsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        <!-- Changes section -->\n        @if (hasChangesSections()) {\n          <p-accordion-panel value="changes">\n            <p-accordion-header>\n              <span class="uppercase">Changes</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of changesSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n      </p-accordion>\n    </div>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DistributorDetailsContainerComponent, { className: "DistributorDetailsContainerComponent", filePath: "src/app/features/administration/components/distributors/distributor-details/distributor-details-container/distributor-details-container.component.ts", lineNumber: 61 });
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-details-routing.module.ts
var routes = [
  {
    path: "",
    component: DistributorDetailsContainerComponent
  }
];
var DistributorDetailsRoutingModule = class _DistributorDetailsRoutingModule {
  static \u0275fac = function DistributorDetailsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorDetailsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/administration/components/distributors/distributor-details/distributor-details.module.ts
var DistributorDetailsModule = class _DistributorDetailsModule {
  static \u0275fac = function DistributorDetailsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributorDetailsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DistributorDetailsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DistributorDetailsRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributorDetailsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, DistributorDetailsRoutingModule]
    }]
  }], null, null);
})();
export {
  DistributorDetailsModule
};
//# sourceMappingURL=chunk-ZEWE5Y4I.js.map
