import {
  BroadcastEventMessageService,
  Divider,
  DividerModule,
  FeatureSectionComponent,
  SectionConfigBuilder
} from "./chunk-RTNA7WPE.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-G53P6SFQ.js";
import "./chunk-U7TBGMBL.js";
import {
  ToastService
} from "./chunk-DMM4Q6ZA.js";
import {
  ProgressSpinner,
  takeUntilDestroyed
} from "./chunk-CHTZISI7.js";
import "./chunk-VTAPPRLT.js";
import "./chunk-G6AKSBPY.js";
import {
  AccountsService,
  AuthDataService
} from "./chunk-BNFP7XU4.js";
import {
  AppFeatures,
  getBackendFeatureDefaults,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-GJ6OVUIG.js";
import {
  ActivatedRoute,
  CommonModule,
  NgComponentOutlet,
  RouterModule
} from "./chunk-OZRAVXUL.js";
import {
  Component,
  DestroyRef,
  EMPTY,
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
} from "./chunk-7FSD67AL.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_For_8_ng_container_0_Template, 1, 0, "ng-container", 11);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_For_8_Conditional_1_Template, 1, 0, "p-divider");
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
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_ng_container_0_Template, 1, 0, "ng-container", 11);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_9_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_ng_container_0_Template, 1, 0, "ng-container", 11);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_ng_container_0_Template, 1, 0, "ng-container", 11);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_6_Conditional_1_Template, 1, 0, "p-divider");
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
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_For_18_ng_container_0_Template, 1, 0, "ng-container", 11);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_For_18_Conditional_1_Template, 1, 0, "p-divider");
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
    \u0275\u0275conditionalCreate(9, ClientDetailsContainerComponent_Conditional_3_Conditional_9_Template, 7, 0, "p-accordion-panel", 7);
    \u0275\u0275conditionalCreate(10, ClientDetailsContainerComponent_Conditional_3_Conditional_10_Template, 7, 0, "p-accordion-panel", 8);
    \u0275\u0275conditionalCreate(11, ClientDetailsContainerComponent_Conditional_3_Conditional_11_Template, 7, 0, "p-accordion-panel", 9);
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
  broadcastService = inject(BroadcastEventMessageService);
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
  toastService = inject(ToastService);
  isEntityUpdatedMessage(message) {
    return isDefined(message) && message !== null && typeof message === "object" && "entityType" in message && "data" in message && message.entityType === "client";
  }
  ngOnInit() {
    this.initializeEntityData();
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      if (this.isEntityUpdatedMessage(message)) {
        this.toastService.showSuccess("Success", "Client updated successfully");
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
      const clientId = params.get("clientId") ?? data["client"]?.id;
      if (isDefined(clientId)) {
        return from(this.accountsService.getClient(clientId));
      }
      if (!isEmpty(data["client"])) {
        return of(data["client"]);
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
        appFeatures = appFeatures.filter((feature) => feature !== "page-devicehealth").filter((feature) => feature !== "page-reporting");
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
    this.statisticsSections.set(SectionConfigBuilder.createClientStatisticsSections(entityData));
    this.changesSections.set(SectionConfigBuilder.createClientChangesSections(entityData));
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      let appFeatures = Object.keys(AppFeatures).filter((feature) => feature !== "page-reporting");
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
          feature: AppFeatures[feature],
          entityType: "client"
        }).build()).flat(),
        // Backend feature sections
        ...Object.keys(backendFeatures.sections).map((sectionKey) => SectionConfigBuilder.forClient(entityData).addSection(sectionKey, "Backend Features", FeatureSectionComponent, { category: "features" }, {
          feature: backendFeatures.sections[sectionKey],
          entityType: "client"
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
      \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, ClientDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, ClientDetailsContainerComponent_Conditional_3_Template, 19, 3, "div", 3);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-details-container", imports: [AccordionModule, DividerModule, ProgressSpinner, CommonModule], template: '<div class="admin-details-container">\n  @if (loading()) {\n    <div class="loading-container">\n      <p-progressSpinner></p-progressSpinner>\n    </div>\n  }\n\n  @if (error()) {\n    <div class="error-container">\n      <p class="error-message">{{ error() }}</p>\n    </div>\n  }\n\n  @if (!loading() && !error()) {\n    <div class="details-container">\n      <p-accordion value="information">\n        <!-- Information section -->\n        <p-accordion-panel value="information">\n          <p-accordion-header>\n            <span class="uppercase">Information</span>\n          </p-accordion-header>\n          <p-accordion-content>\n            @for (\n              section of informationSections();\n              track section.id;\n              let last = $last\n            ) {\n              <ng-container\n                *ngComponentOutlet="\n                  section.component;\n                  inputs: getSectionInputs(section)\n                "\n              ></ng-container>\n              @if (!last) {\n                <p-divider />\n              }\n            }\n          </p-accordion-content>\n        </p-accordion-panel>\n        <!-- Settings section -->\n        @if (hasSettingsSections()) {\n          <p-accordion-panel value="settings">\n            <p-accordion-header>\n              <span class="uppercase">Settings</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of settingsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n\n        <!-- Features section -->\n        @if (hasFeaturesSections()) {\n          <p-accordion-panel value="features">\n            <p-accordion-header>\n              <span class="uppercase">Features</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of featuresSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n\n        <!-- Statistics section -->\n        @if (hasStatisticsSections()) {\n          <p-accordion-panel value="statistics">\n            <p-accordion-header>\n              <span class="uppercase">Statistics</span>\n            </p-accordion-header>\n            <p-accordion-content>\n              @for (\n                section of statisticsSections();\n                track section.id;\n                let last = $last\n              ) {\n                <ng-container\n                  *ngComponentOutlet="\n                    section.component;\n                    inputs: getSectionInputs(section)\n                  "\n                ></ng-container>\n                @if (!last) {\n                  <p-divider />\n                }\n              }\n            </p-accordion-content>\n          </p-accordion-panel>\n        }\n\n        <!-- Changes section -->\n        <p-accordion-panel value="changes">\n          <p-accordion-header>\n            <span class="uppercase">Changes</span>\n          </p-accordion-header>\n          <p-accordion-content>\n            @for (\n              section of changesSections();\n              track section.id;\n              let last = $last\n            ) {\n              <ng-container\n                *ngComponentOutlet="\n                  section.component;\n                  inputs: getSectionInputs(section)\n                "\n              ></ng-container>\n              @if (!last) {\n                <p-divider />\n              }\n            }\n          </p-accordion-content>\n        </p-accordion-panel>\n      </p-accordion>\n    </div>\n  }\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsContainerComponent, { className: "ClientDetailsContainerComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.ts", lineNumber: 58 });
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
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  ClientDetailsRoutingModule
};
//# sourceMappingURL=chunk-AZMGEWCA.js.map
