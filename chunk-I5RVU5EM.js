import {
  FeatureSectionComponent,
  SectionConfigBuilder
} from "./chunk-AMCG2OOV.js";
import "./chunk-XN62BSBY.js";
import {
  Divider,
  DividerModule
} from "./chunk-CKVTU22R.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-VXJMY5F5.js";
import "./chunk-FMMG3DFF.js";
import "./chunk-7BPDUI7R.js";
import {
  ProgressSpinner,
  takeUntilDestroyed
} from "./chunk-SGSSZZCS.js";
import "./chunk-D3SIXD4M.js";
import "./chunk-ZUQKTIGR.js";
import {
  AccountsService,
  AuthDataService
} from "./chunk-PY5UAXBS.js";
import {
  AppFeatures,
  getBackendFeatureDefaults,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-DIN3XHWB.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-MWRHVJ6S.js";
import {
  CommonModule,
  DestroyRef,
  EMPTY,
  NgComponentOutlet,
  catchError,
  combineLatest,
  computed,
  firstValueFrom,
  from,
  inject,
  of,
  signal,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
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
} from "./chunk-UOQWYEAO.js";
import {
  __spreadValues
} from "./chunk-R327OCYJ.js";

// src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ClientDetailsContainerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function ClientDetailsContainerComponent_Conditional_2_Template(rf, ctx) {
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
function ClientDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template, 1, 0, "ng-container", 11)(1, ClientDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template, 1, 0, "p-divider");
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
function ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template, 1, 0, "ng-container", 11)(1, ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function ClientDetailsContainerComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 7)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.settingsSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template, 1, 0, "ng-container", 11)(1, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 8)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Features");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.featuresSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template, 1, 0, "ng-container", 11)(1, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 9)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.statisticsSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_18_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_For_18_ng_container_0_Template, 1, 0, "ng-container", 11)(1, ClientDetailsContainerComponent_Conditional_3_For_18_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r14 = ctx.$implicit;
    const \u0275$index_99_r15 = ctx.$index;
    const \u0275$count_99_r16 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", section_r14.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r14));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_99_r15 === \u0275$count_99_r16 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p-accordion", 5)(2, "p-accordion-panel", 5)(3, "p-accordion-header")(4, "span", 6);
    \u0275\u0275text(5, "Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-accordion-content");
    \u0275\u0275repeaterCreate(7, ClientDetailsContainerComponent_Conditional_3_For_8_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ClientDetailsContainerComponent_Conditional_3_Conditional_9_Template, 7, 0, "p-accordion-panel", 7)(10, ClientDetailsContainerComponent_Conditional_3_Conditional_10_Template, 7, 0, "p-accordion-panel", 8)(11, ClientDetailsContainerComponent_Conditional_3_Conditional_11_Template, 7, 0, "p-accordion-panel", 9);
    \u0275\u0275elementStart(12, "p-accordion-panel", 10)(13, "p-accordion-header")(14, "span", 6);
    \u0275\u0275text(15, "Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-accordion-content");
    \u0275\u0275repeaterCreate(17, ClientDetailsContainerComponent_Conditional_3_For_18_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.informationSections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasSettingsSections() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFeaturesSections() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasStatisticsSections() ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.changesSections());
  }
}
var ClientDetailsContainerComponent = class _ClientDetailsContainerComponent {
  informationSections = signal([]);
  settingsSections = signal([]);
  statisticsSections = signal([]);
  featuresSections = signal([]);
  changesSections = signal([]);
  loading = signal(true);
  entity = signal(null);
  error = signal(null);
  defaultExpandedSections = 0;
  // Helper computed properties
  hasInformationSections = computed(() => this.informationSections().length > 0);
  hasSettingsSections = computed(() => this.settingsSections().length > 0);
  hasStatisticsSections = computed(() => this.statisticsSections().length > 0);
  hasChangesSections = computed(() => this.changesSections().length > 0);
  hasFeaturesSections = computed(() => this.featuresSections().length > 0);
  // Services
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  authDataService = inject(AuthDataService);
  ngOnInit() {
    this.initializeEntityData();
  }
  initializeEntityData() {
    combineLatest([
      this.route.paramMap,
      this.route.parent?.parent?.data || of({})
    ]).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      this.loading.set(true);
      this.setupSectionStructure();
    }), switchMap(([params, data]) => {
      const clientId = params.get("clientId");
      if (!isEmpty(data["client"])) {
        return of(data["client"]);
      }
      if (isDefined(clientId)) {
        return from(this.accountsService.getClient(clientId));
      }
      return throwError(() => new Error("Client ID not found"));
    }), catchError(() => {
      this.error.set("Failed to load client data");
      return EMPTY;
    }), tap((clientData) => {
      this.entity.set(clientData);
      this.loading.set(false);
      this.updateSectionsWithEntityData();
    })).subscribe();
  }
  setupSectionStructure() {
    this.informationSections.set(SectionConfigBuilder.createClientInformationSections(null));
    this.settingsSections.set(SectionConfigBuilder.createClientSettingsSections(null));
    this.changesSections.set(SectionConfigBuilder.createClientChangesSections(null));
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      let appFeatures = Object.keys(AppFeatures);
      if (!(this.authDataService.flags.assetPerformanceEnabled() ?? false)) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-assetperformance");
      }
      if (!(this.authDataService.flags.deviceHealthEnabled() ?? false)) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-devicehealth");
      }
      const userOwnerType = this.authDataService.getUserProfile()?.owner?.type ?? "client";
      const backendFeatures = getBackendFeatureDefaults(userOwnerType);
      const allFeatureSections = [
        // App feature sections
        ...appFeatures.map((feature) => SectionConfigBuilder.forClient(null).addSection(feature, "Features", FeatureSectionComponent).build()).flat(),
        // Backend feature sections
        ...Object.keys(backendFeatures.sections).map((sectionKey) => SectionConfigBuilder.forClient(null).addSection(sectionKey, "Backend Features", FeatureSectionComponent).build()).flat()
      ];
      this.featuresSections.set(allFeatureSections);
    }
  }
  updateSectionsWithEntityData() {
    const entityData = this.entity();
    if (isNullOrUndefined(entityData))
      return;
    this.informationSections.set(SectionConfigBuilder.createClientInformationSections(entityData));
    this.settingsSections.set(SectionConfigBuilder.createClientSettingsSections(entityData));
    this.changesSections.set(SectionConfigBuilder.createClientChangesSections(entityData));
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      let appFeatures = Object.keys(AppFeatures);
      if (!(this.authDataService.flags.assetPerformanceEnabled() ?? false)) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-assetperformance");
      }
      if (!(this.authDataService.flags.deviceHealthEnabled() ?? false)) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-devicehealth");
      }
      const useFlags = this.authDataService.flags;
      if (isNullOrUndefined(useFlags.assetPerformanceEnabled())) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-assetperformance");
      }
      if (isNullOrUndefined(useFlags.deviceHealthEnabled())) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-devicehealth");
      }
      const userOwnerType = this.authDataService.getUserProfile()?.owner?.type ?? "client";
      const backendFeatures = getBackendFeatureDefaults(userOwnerType);
      const allFeatureSections = [
        // App feature sections
        ...appFeatures.map((feature) => SectionConfigBuilder.forClient(entityData).addSection(feature, "App Features", FeatureSectionComponent, { category: "features" }, {
          feature: AppFeatures[feature]
        }).build()).flat(),
        // Backend feature sections
        ...Object.keys(backendFeatures.sections).map((sectionKey) => SectionConfigBuilder.forClient(entityData).addSection(sectionKey, "Backend Features", FeatureSectionComponent, { category: "features" }, {
          feature: backendFeatures.sections[sectionKey]
        }).build()).flat()
      ];
      this.featuresSections.set(allFeatureSections);
    }
  }
  // Method for child components to save data
  async updateEntity(updates) {
    const client = this.entity();
    if (isNullOrUndefined(client))
      return;
    try {
      this.loading.set(true);
      const updatedEntity = await firstValueFrom(this.accountsService.updateClient(client.id, updates));
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
  static \u0275fac = function ClientDetailsContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailsContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsContainerComponent, selectors: [["app-client-details-container"]], decls: 4, vars: 3, consts: [[1, "admin-details-container"], [1, "loading-container"], [1, "error-container"], [1, "details-container"], [1, "error-message"], ["value", "information"], [1, "uppercase"], ["value", "settings"], ["value", "features"], ["value", "statistics"], ["value", "changes"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function ClientDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ClientDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1)(2, ClientDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2)(3, ClientDetailsContainerComponent_Conditional_3_Template, 19, 3, "div", 3);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsContainerComponent, { className: "ClientDetailsContainerComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.ts", lineNumber: 51 });
})();

// src/app/features/administration/components/clients/client-details/client-details-routing.module.ts
var routes = [
  {
    path: "",
    component: ClientDetailsContainerComponent
  }
];
var ClientDetailsRoutingModule = class _ClientDetailsRoutingModule {
  static \u0275fac = function ClientDetailsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ClientDetailsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
export {
  ClientDetailsRoutingModule
};
//# sourceMappingURL=chunk-I5RVU5EM.js.map
