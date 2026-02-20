import {
  VendorDataStrategy
} from "./chunk-JL2RFHDF.js";
import "./chunk-FC26RJEU.js";
import {
  Divider,
  DividerModule,
  EntityOperationRegistryService,
  FeatureSectionComponent,
  FeedSectionComponent,
  SectionConfigBuilder
} from "./chunk-SBBOYAQU.js";
import "./chunk-SD7CD6SE.js";
import "./chunk-EY6ER4MP.js";
import "./chunk-LN4L6VZC.js";
import "./chunk-DXDVPHIO.js";
import "./chunk-ERWSOVMD.js";
import "./chunk-GYVQCOXJ.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-PVMHRDPC.js";
import "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import "./chunk-4CAIP3KE.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import "./chunk-PBS4GE25.js";
import "./chunk-YL4UBWIM.js";
import {
  AccountsService,
  ActivatedRoute,
  AppFeatures,
  AuthDataService,
  BroadcastEventMessageService,
  CommonModule,
  DEFAULT_SYSTEM_ID,
  NgComponentOutlet,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  Component,
  DestroyRef,
  EMPTY,
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
} from "./chunk-4KHPVNTA.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template, 1, 0, "ng-container", 12);
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
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template, 1, 0, "ng-container", 12);
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
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template, 1, 0, "ng-container", 12);
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
    \u0275\u0275text(3, "Limits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.limitsSections());
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
function VendorDetailsContainerComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 9)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.statisticsSections());
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r14 = ctx.$implicit;
    const \u0275$index_100_r15 = ctx.$index;
    const \u0275$count_100_r16 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r14.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r14));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_100_r15 === \u0275$count_100_r16 - 1) ? 1 : -1);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 10)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Features");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_12_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.featuresSections());
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r17 = ctx.$implicit;
    const \u0275$index_118_r18 = ctx.$index;
    const \u0275$count_118_r19 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r17.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r17));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_118_r18 === \u0275$count_118_r19 - 1) ? 1 : -1);
  }
}
function VendorDetailsContainerComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 11)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3, "Changes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p-accordion-content");
    \u0275\u0275repeaterCreate(5, VendorDetailsContainerComponent_Conditional_3_Conditional_13_For_6_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.changesSections());
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
    \u0275\u0275conditionalCreate(11, VendorDetailsContainerComponent_Conditional_3_Conditional_11_Template, 7, 0, "p-accordion-panel", 9);
    \u0275\u0275conditionalCreate(12, VendorDetailsContainerComponent_Conditional_3_Conditional_12_Template, 7, 0, "p-accordion-panel", 10);
    \u0275\u0275conditionalCreate(13, VendorDetailsContainerComponent_Conditional_3_Conditional_13_Template, 7, 0, "p-accordion-panel", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.informationSections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasSettingsSections() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasLimitsSections() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasStatisticsSections() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFeaturesSections() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChangesSections() ? 13 : -1);
  }
}
var VendorDetailsContainerComponent = class _VendorDetailsContainerComponent {
  broadcastService = inject(BroadcastEventMessageService);
  authDataService = inject(AuthDataService);
  operationRegistry = inject(EntityOperationRegistryService);
  accountsService = inject(AccountsService);
  informationSections = signal([], ...ngDevMode ? [{ debugName: "informationSections" }] : []);
  settingsSections = signal([], ...ngDevMode ? [{ debugName: "settingsSections" }] : []);
  featuresSections = signal([], ...ngDevMode ? [{ debugName: "featuresSections" }] : []);
  limitsSections = signal([], ...ngDevMode ? [{ debugName: "limitsSections" }] : []);
  statisticsSections = signal([], ...ngDevMode ? [{ debugName: "statisticsSections" }] : []);
  changesSections = signal([], ...ngDevMode ? [{ debugName: "changesSections" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  entity = signal(null, ...ngDevMode ? [{ debugName: "entity" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Helper computed properties
  hasInformationSections = computed(() => this.informationSections().length > 0, ...ngDevMode ? [{ debugName: "hasInformationSections" }] : []);
  hasSettingsSections = computed(() => this.settingsSections().length > 0, ...ngDevMode ? [{ debugName: "hasSettingsSections" }] : []);
  hasFeaturesSections = computed(() => this.featuresSections().length > 0, ...ngDevMode ? [{ debugName: "hasFeaturesSections" }] : []);
  hasLimitsSections = computed(() => this.limitsSections().length > 0, ...ngDevMode ? [{ debugName: "hasLimitsSections" }] : []);
  hasStatisticsSections = computed(() => this.statisticsSections().length > 0, ...ngDevMode ? [{ debugName: "hasStatisticsSections" }] : []);
  hasChangesSections = computed(() => this.changesSections().length > 0, ...ngDevMode ? [{ debugName: "hasChangesSections" }] : []);
  // Services
  dataStrategy = inject(VendorDataStrategy);
  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  constructor() {
    this.operationRegistry.registerEntityOperations("vendor", {
      update: (id, data) => this.accountsService.updateVendor(id, data),
      create: (data) => this.accountsService.createVendor(data),
      get: (id) => this.accountsService.getVendor(id)
    });
  }
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
      this.route.parent?.parent?.data ?? of({})
    ]).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      this.loading.set(true);
      this.setupSectionStructure();
    }), switchMap(([params, data]) => {
      const vendorId = params.get("vendorId") ?? data["vendor"]?.id;
      if (isDefined(vendorId)) {
        return from(this.dataStrategy.fetchById(vendorId));
      }
      if (!isEmpty(data["vendor"])) {
        return of(data["vendor"]);
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
    const isSystemUser = this.authDataService.getUserProfile()?.owner?.id === DEFAULT_SYSTEM_ID;
    this.settingsSections.set(SectionConfigBuilder.createVendorSettingsSections(null));
    if (isSystemUser) {
      this.limitsSections.set(SectionConfigBuilder.createVendorLimitsSections(null));
    }
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      const appFeatures = ["page-moreapps"];
      const allFeatureSections = appFeatures.flatMap((feature) => SectionConfigBuilder.forVendor(null).addSection(feature, "Features", FeatureSectionComponent).build());
      this.featuresSections.set(allFeatureSections);
    }
  }
  updateSectionsWithEntityData() {
    const entityData = this.entity();
    if (isNullOrUndefined(entityData))
      return;
    this.informationSections.set(SectionConfigBuilder.createVendorInformationSections(entityData));
    const isSystemUser = this.authDataService.getUserProfile()?.owner?.id === DEFAULT_SYSTEM_ID;
    this.settingsSections.set(SectionConfigBuilder.createVendorSettingsSections(entityData));
    if (isSystemUser) {
      this.limitsSections.set(SectionConfigBuilder.createVendorLimitsSections(entityData));
    }
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      const appFeatures = ["page-moreapps"];
      const allFeatureSections = appFeatures.flatMap((feature) => SectionConfigBuilder.forVendor(entityData).addSection(feature, "App Features", FeatureSectionComponent, { category: "features" }, {
        feature: AppFeatures[feature],
        entityType: "vendor"
      }).build());
      this.featuresSections.set(allFeatureSections);
    }
    this.statisticsSections.set(SectionConfigBuilder.createVendorStatisticsSections(entityData));
    this.changesSections.set([
      {
        id: "vendor-changes",
        title: "Changes",
        component: FeedSectionComponent,
        componentInputs: {
          entity: entityData,
          entityType: "vendor"
        },
        category: "feed",
        order: 10
      }
    ]);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorDetailsContainerComponent, selectors: [["app-vendor-details-container"]], decls: 4, vars: 3, consts: [[1, "flex", "flex-col", "h-full", "admin-details-container"], [1, "loading-container"], [1, "error-container"], [1, "flex", "overflow-hidden", "flex-col", "h-full", "details-container"], [1, "error-message"], ["value", "information"], [1, "uppercase"], ["value", "settings"], ["value", "limits"], ["value", "statistics"], ["value", "features"], ["value", "changes"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function VendorDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, VendorDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, VendorDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, VendorDetailsContainerComponent_Conditional_3_Template, 14, 5, "div", 3);
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
  }, dependencies: [AccordionModule, Accordion, AccordionPanel, AccordionHeader, AccordionContent, DividerModule, Divider, ProgressSpinnerModule, ProgressSpinner, CommonModule, NgComponentOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n  p-accordion, \n  .p-accordion {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n}\n  p-accordion-panel, \n  .p-accordionpanel {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 0 0 auto !important;\n}\n  p-accordion-panel.p-accordionpanel-active, \n  p-accordion-panel.p-highlight, \n  .p-accordionpanel.p-accordionpanel-active, \n  .p-accordionpanel.p-highlight {\n  flex: 1 1 auto !important;\n  min-height: 0 !important;\n  overflow: hidden !important;\n}\n  p-accordion-header, \n  .p-accordionheader {\n  flex: 0 0 auto !important;\n  z-index: 10;\n}\n  p-accordion-content, \n  .p-accordioncontent {\n  flex: 1 1 auto !important;\n  overflow-y: auto !important;\n  height: 100% !important;\n}\n  p-accordion-content .p-accordioncontent-content, \n  .p-accordioncontent .p-accordioncontent-content {\n  min-height: 100%;\n}\n/*# sourceMappingURL=vendor-details-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-details-container", imports: [
      AccordionModule,
      DividerModule,
      ProgressSpinnerModule,
      CommonModule
    ], template: '<div class="flex flex-col h-full admin-details-container">\n  @if (loading()) {\n    <div class="loading-container">\n      <p-progressSpinner></p-progressSpinner>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-container">\n      <p class="error-message">{{ error() }}</p>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="flex overflow-hidden flex-col h-full details-container">\n      <p-accordion value="information">\n        <!-- Information section -->\n        <p-accordion-panel value="information">\n          <p-accordion-header>\n            <span class="uppercase">Information</span>\n          </p-accordion-header>\n          <p-accordion-content>\n            @for (\n              section of informationSections();\n              track section.id;\n              let last = $last\n            ) {\n              <ng-container\n                *ngComponentOutlet="\n                  section.component;\n                  inputs: getSectionInputs(section)\n                "\n              ></ng-container>\n              @if (!last) {\n                <p-divider />\n              }\n            }\n          </p-accordion-content>\n        </p-accordion-panel>\n        <!-- Settings section -->\n        @if (hasSettingsSections()) {\n          <p-accordion-panel value="settings">\n            <p-accordion-header>\n              <span class="uppercase">Settings</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of settingsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n\n        <!-- Limits section -->\n        @if (hasLimitsSections()) {\n          <p-accordion-panel value="limits">\n            <p-accordion-header>\n              <span class="uppercase">Limits</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of limitsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        <!-- Statistics section -->\n        @if (hasStatisticsSections()) {\n          <p-accordion-panel value="statistics">\n            <p-accordion-header>\n              <span class="uppercase">Statistics</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of statisticsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        @if (hasFeaturesSections()) {\n          <p-accordion-panel value="features">\n            <p-accordion-header>\n              <span class="uppercase">Features</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of featuresSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n        <!-- Changes section -->\n        @if (hasChangesSections()) {\n          <p-accordion-panel value="changes">\n            <p-accordion-header>\n              <span class="uppercase">Changes</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of changesSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n      </p-accordion>\n    </div>\n  }\n</div>\n', styles: ["/* src/app/features/administration/components/vendors/vendor-details/vendor-details-container/vendor-details-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n::ng-deep p-accordion,\n::ng-deep .p-accordion {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n}\n::ng-deep p-accordion-panel,\n::ng-deep .p-accordionpanel {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 0 0 auto !important;\n}\n::ng-deep p-accordion-panel.p-accordionpanel-active,\n::ng-deep p-accordion-panel.p-highlight,\n::ng-deep .p-accordionpanel.p-accordionpanel-active,\n::ng-deep .p-accordionpanel.p-highlight {\n  flex: 1 1 auto !important;\n  min-height: 0 !important;\n  overflow: hidden !important;\n}\n::ng-deep p-accordion-header,\n::ng-deep .p-accordionheader {\n  flex: 0 0 auto !important;\n  z-index: 10;\n}\n::ng-deep p-accordion-content,\n::ng-deep .p-accordioncontent {\n  flex: 1 1 auto !important;\n  overflow-y: auto !important;\n  height: 100% !important;\n}\n::ng-deep p-accordion-content .p-accordioncontent-content,\n::ng-deep .p-accordioncontent .p-accordioncontent-content {\n  min-height: 100%;\n}\n/*# sourceMappingURL=vendor-details-container.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorDetailsContainerComponent, { className: "VendorDetailsContainerComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-details-container/vendor-details-container.component.ts", lineNumber: 69 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-details.routes.ts
var ADMIN_VENDOR_DETAILS_ROUTES = [
  {
    path: "",
    component: VendorDetailsContainerComponent
  }
];
export {
  ADMIN_VENDOR_DETAILS_ROUTES
};
//# sourceMappingURL=chunk-N4QO4P3A.js.map
