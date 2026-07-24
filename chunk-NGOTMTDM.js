import {
  EntityOperationRegistryService,
  FeatureSectionComponent,
  SectionConfigBuilder
} from "./chunk-LWZPKT57.js";
import "./chunk-AB3PBDIK.js";
import "./chunk-7UON6CU4.js";
import {
  Divider,
  DividerModule
} from "./chunk-UIOPXNY5.js";
import "./chunk-WLMUTOYA.js";
import "./chunk-HEDH66RH.js";
import "./chunk-RAHCTZWE.js";
import "./chunk-EDNONQMY.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-SV3SMBHH.js";
import "./chunk-5ZKUO7BH.js";
import "./chunk-VJ76VAAI.js";
import "./chunk-T2NLXXYI.js";
import "./chunk-DXDIX3ID.js";
import "./chunk-S4WNLXX2.js";
import "./chunk-3L22U4Q2.js";
import "./chunk-EVW4PTKX.js";
import "./chunk-S5OZ6G2W.js";
import "./chunk-NT6TC2O6.js";
import "./chunk-LHPCQEY3.js";
import "./chunk-2YBWOZSJ.js";
import "./chunk-BTNVOKO5.js";
import "./chunk-FYHRO7AA.js";
import {
  ProgressSpinner
} from "./chunk-6ZLKOSJY.js";
import {
  ToastService
} from "./chunk-47TCRRSK.js";
import "./chunk-5WWRPFVI.js";
import "./chunk-6RKFIQXA.js";
import "./chunk-N3IYAUEM.js";
import "./chunk-6RNH5RNU.js";
import "./chunk-HAP3H3Y2.js";
import "./chunk-JE2L2HEP.js";
import "./chunk-KMNNT5Y5.js";
import "./chunk-437DZVOB.js";
import "./chunk-ZD2L3BUO.js";
import "./chunk-HUGEA54Y.js";
import "./chunk-233GVLOY.js";
import "./chunk-7YJUDWRM.js";
import {
  TranslatePipe
} from "./chunk-RNIEZZVX.js";
import {
  AccountsService,
  ActionType,
  ActivatedRoute,
  AppFeatures,
  AuthDataService,
  BroadcastEventMessageService,
  BroadcastMessageService,
  ClientDataService,
  DEFAULT_SYSTEM_ID,
  getBackendFeatureDefaults,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  takeUntilDestroyed,
  toObservable
} from "./chunk-6H7AOYCU.js";
import "./chunk-7BSAABDZ.js";
import {
  CommonModule,
  NgComponentOutlet
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  DestroyRef,
  EMPTY,
  catchError,
  combineLatest,
  computed,
  filter,
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
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JFHDN3YU.js";
import "./chunk-M4PBGCJ5.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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
function ClientDetailsContainerComponent_Conditional_3_For_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_For_9_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_For_9_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const \u0275$index_29_r3 = ctx.$index;
    const \u0275$count_29_r4 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", section_r2.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_29_r3 === \u0275$count_29_r4 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const \u0275$index_48_r6 = ctx.$index;
    const \u0275$count_48_r7 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r5.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_48_r6 === \u0275$count_48_r7 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 7)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-accordion-content");
    \u0275\u0275repeaterCreate(6, ClientDetailsContainerComponent_Conditional_3_Conditional_10_For_7_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.SECTIONS.SETTINGS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.settingsSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    const \u0275$index_67_r9 = ctx.$index;
    const \u0275$count_67_r10 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r8.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r8));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_67_r9 === \u0275$count_67_r10 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 8)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-accordion-content");
    \u0275\u0275repeaterCreate(6, ClientDetailsContainerComponent_Conditional_3_Conditional_11_For_7_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.SECTIONS.LIMITS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.limitsSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r11 = ctx.$implicit;
    const \u0275$index_86_r12 = ctx.$index;
    const \u0275$count_86_r13 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r11.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r11));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_86_r12 === \u0275$count_86_r13 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 9)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-accordion-content");
    \u0275\u0275repeaterCreate(6, ClientDetailsContainerComponent_Conditional_3_Conditional_12_For_7_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.SECTIONS.FEATURES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.featuresSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r14 = ctx.$implicit;
    const \u0275$index_105_r15 = ctx.$index;
    const \u0275$count_105_r16 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r14.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r14));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_105_r15 === \u0275$count_105_r16 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 10)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-accordion-content");
    \u0275\u0275repeaterCreate(6, ClientDetailsContainerComponent_Conditional_3_Conditional_13_For_7_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.SECTIONS.STATISTICS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.statisticsSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_ng_container_0_Template, 1, 0, "ng-container", 12);
    \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_Conditional_1_Template, 1, 0, "p-divider");
  }
  if (rf & 2) {
    const section_r17 = ctx.$implicit;
    const \u0275$index_124_r18 = ctx.$index;
    const \u0275$count_124_r19 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngComponentOutlet", section_r17.component)("ngComponentOutletInputs", ctx_r0.getSectionInputs(section_r17));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_124_r18 === \u0275$count_124_r19 - 1) ? 1 : -1);
  }
}
function ClientDetailsContainerComponent_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-accordion-panel", 11)(1, "p-accordion-header")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-accordion-content");
    \u0275\u0275repeaterCreate(6, ClientDetailsContainerComponent_Conditional_3_Conditional_14_For_7_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADMIN.SHARED.SECTIONS.CHANGES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.changesSections());
  }
}
function ClientDetailsContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p-accordion", 5)(2, "p-accordion-panel", 5)(3, "p-accordion-header")(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-accordion-content");
    \u0275\u0275repeaterCreate(8, ClientDetailsContainerComponent_Conditional_3_For_9_Template, 2, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, ClientDetailsContainerComponent_Conditional_3_Conditional_10_Template, 8, 3, "p-accordion-panel", 7);
    \u0275\u0275conditionalCreate(11, ClientDetailsContainerComponent_Conditional_3_Conditional_11_Template, 8, 3, "p-accordion-panel", 8);
    \u0275\u0275conditionalCreate(12, ClientDetailsContainerComponent_Conditional_3_Conditional_12_Template, 8, 3, "p-accordion-panel", 9);
    \u0275\u0275conditionalCreate(13, ClientDetailsContainerComponent_Conditional_3_Conditional_13_Template, 8, 3, "p-accordion-panel", 10);
    \u0275\u0275conditionalCreate(14, ClientDetailsContainerComponent_Conditional_3_Conditional_14_Template, 8, 3, "p-accordion-panel", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "ADMIN.SHARED.SECTIONS.INFORMATION"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.informationSections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasSettingsSections() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasLimitsSections() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasFeaturesSections() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasStatisticsSections() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChangesSections() ? 14 : -1);
  }
}
var ClientDetailsContainerComponent = class _ClientDetailsContainerComponent {
  broadcastService = inject(BroadcastEventMessageService);
  authDataService = inject(AuthDataService);
  accountsService = inject(AccountsService);
  clientDataService = inject(ClientDataService);
  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  toastService = inject(ToastService);
  messageService = inject(BroadcastMessageService);
  operationRegistry = inject(EntityOperationRegistryService);
  // Convert signal to observable in injection context (field initializer)
  userProfile$ = toObservable(this.authDataService.getUserProfileSignal());
  informationSections = signal([], ...ngDevMode ? [{ debugName: "informationSections" }] : (
    /* istanbul ignore next */
    []
  ));
  settingsSections = signal([], ...ngDevMode ? [{ debugName: "settingsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  limitsSections = signal([], ...ngDevMode ? [{ debugName: "limitsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  statisticsSections = signal([], ...ngDevMode ? [{ debugName: "statisticsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  featuresSections = signal([], ...ngDevMode ? [{ debugName: "featuresSections" }] : (
    /* istanbul ignore next */
    []
  ));
  changesSections = signal([], ...ngDevMode ? [{ debugName: "changesSections" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  entity = signal(null, ...ngDevMode ? [{ debugName: "entity" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  // Helper computed properties
  hasInformationSections = computed(() => this.informationSections().length > 0, ...ngDevMode ? [{ debugName: "hasInformationSections" }] : (
    /* istanbul ignore next */
    []
  ));
  hasSettingsSections = computed(() => this.settingsSections().length > 0, ...ngDevMode ? [{ debugName: "hasSettingsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  hasLimitsSections = computed(() => this.limitsSections().length > 0, ...ngDevMode ? [{ debugName: "hasLimitsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  hasStatisticsSections = computed(() => this.statisticsSections().length > 0, ...ngDevMode ? [{ debugName: "hasStatisticsSections" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChangesSections = computed(() => this.changesSections().length > 0, ...ngDevMode ? [{ debugName: "hasChangesSections" }] : (
    /* istanbul ignore next */
    []
  ));
  hasFeaturesSections = computed(() => this.featuresSections().length > 0, ...ngDevMode ? [{ debugName: "hasFeaturesSections" }] : (
    /* istanbul ignore next */
    []
  ));
  isEntityUpdatedMessage(message) {
    return isDefined(message) && message !== null && typeof message === "object" && "entityType" in message && "data" in message && message.entityType === "client";
  }
  constructor() {
    this.operationRegistry.registerEntityOperations("client", {
      update: (id, data) => this.accountsService.updateClient(id, data),
      create: (data) => this.accountsService.createClient(data),
      get: (id) => this.accountsService.getClient(id)
    });
  }
  ngOnInit() {
    this.initializeEntityData();
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      if (this.isEntityUpdatedMessage(message)) {
        this.toastService.showSuccess("Success", "Client updated successfully");
        this.entity.set(message.data);
        this.updateSectionsWithEntityData();
        const selectedClient = this.clientDataService.getSelectedClient();
        if (selectedClient?.id === message.data.id) {
          this.messageService.sendAction(ActionType.profile_changed, {
            clientId: message.data.id
          });
          this.clientDataService.setSelectedClient(message.data);
          this.broadcastService.broadcast("tree-refresh-required", {
            entityType: "client",
            operation: "update",
            entityId: message.data.id
          });
        }
      }
    });
  }
  initializeEntityData() {
    combineLatest([
      this.route.paramMap,
      this.route.parent?.parent ? this.route.parent.parent.data : of({}),
      this.userProfile$
      // Use the observable created in injection context
    ]).pipe(
      takeUntilDestroyed(this.destroyRef),
      // Filter out emissions when user is not authenticated
      filter(([_params, _data, userProfile]) => isDefined(userProfile)),
      tap(() => {
        this.loading.set(true);
        this.setupSectionStructure();
      }),
      switchMap(([params, data]) => {
        const clientId = params.get("clientId") ?? data["client"]?.id;
        if (isDefined(clientId)) {
          return from(this.clientDataService.fetchClientWithCache(clientId));
        }
        if (!isEmpty(data["client"])) {
          return of(data["client"]);
        }
        return throwError(() => new Error("Client ID not found"));
      }),
      catchError(() => {
        this.error.set("Failed to load client data");
        return EMPTY;
      }),
      tap((clientData) => {
        this.entity.set(clientData);
        this.loading.set(false);
        this.updateSectionsWithEntityData();
      })
    ).subscribe();
  }
  setupSectionStructure() {
    this.informationSections.set(SectionConfigBuilder.createClientInformationSections(null));
    const isSystemUser = this.authDataService.getUserProfile()?.owner?.id === DEFAULT_SYSTEM_ID;
    this.settingsSections.set(SectionConfigBuilder.createClientSettingsSections(null));
    if (isSystemUser) {
      this.limitsSections.set(SectionConfigBuilder.createClientLimitsSections(null));
    }
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      this.changesSections.set(SectionConfigBuilder.createClientChangesSections(null));
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
        ...appFeatures.flatMap((feature) => SectionConfigBuilder.forClient(null).addSection(feature, "Features", FeatureSectionComponent).build()),
        // Backend feature sections
        ...Object.keys(backendFeatures.sections).flatMap((sectionKey) => SectionConfigBuilder.forClient(null).addSection(sectionKey, "Backend Features", FeatureSectionComponent).build())
      ];
      this.featuresSections.set(allFeatureSections);
    }
  }
  updateSectionsWithEntityData() {
    const entityData = this.entity();
    if (isNullOrUndefined(entityData))
      return;
    this.informationSections.set(SectionConfigBuilder.createClientInformationSections(entityData));
    const isSystemUser = this.authDataService.getUserProfile()?.owner?.id === DEFAULT_SYSTEM_ID;
    this.settingsSections.set(SectionConfigBuilder.createClientSettingsSections(entityData));
    if (isSystemUser) {
      this.limitsSections.set(SectionConfigBuilder.createClientLimitsSections(entityData));
    }
    this.statisticsSections.set(SectionConfigBuilder.createClientStatisticsSections(entityData));
    if (this.authDataService.getUserProfile()?.owner?.type !== "client") {
      this.changesSections.set(SectionConfigBuilder.createClientChangesSections(entityData));
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
        ...appFeatures.flatMap((feature) => SectionConfigBuilder.forClient(entityData).addSection(feature, "App Features", FeatureSectionComponent, { category: "features" }, {
          feature: AppFeatures[feature],
          entityType: "client"
        }).build()),
        // Backend feature sections
        ...Object.keys(backendFeatures.sections).flatMap((sectionKey) => SectionConfigBuilder.forClient(entityData).addSection(sectionKey, "Backend Features", FeatureSectionComponent, { category: "features" }, {
          feature: backendFeatures.sections[sectionKey],
          entityType: "client"
        }).build())
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
      this.updateSectionsWithEntityData();
      const selectedClient = this.clientDataService.getSelectedClient();
      if (selectedClient?.id === updatedEntity.id) {
        this.clientDataService.setSelectedClient(updatedEntity);
      }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsContainerComponent, selectors: [["app-client-details-container"]], decls: 4, vars: 3, consts: [[1, "admin-details-container", "h-full", "flex", "flex-col"], [1, "loading-container"], [1, "error-container"], [1, "details-container", "h-full", "flex", "flex-col", "overflow-hidden"], [1, "error-message"], ["value", "information"], [1, "uppercase"], ["value", "settings"], ["value", "limits"], ["value", "features"], ["value", "statistics"], ["value", "changes"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function ClientDetailsContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ClientDetailsContainerComponent_Conditional_1_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, ClientDetailsContainerComponent_Conditional_2_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, ClientDetailsContainerComponent_Conditional_3_Template, 15, 8, "div", 3);
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
  }, dependencies: [
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    DividerModule,
    Divider,
    ProgressSpinner,
    CommonModule,
    NgComponentOutlet,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n  p-accordion, \n  .p-accordion {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n}\n  p-accordion-panel, \n  .p-accordionpanel {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 0 0 auto !important;\n}\n  p-accordion-panel.p-accordionpanel-active, \n  p-accordion-panel.p-highlight, \n  .p-accordionpanel.p-accordionpanel-active, \n  .p-accordionpanel.p-highlight {\n  flex: 1 1 auto !important;\n  min-height: 0 !important;\n  overflow: hidden !important;\n}\n  p-accordion-header, \n  .p-accordionheader {\n  flex: 0 0 auto !important;\n  z-index: 10;\n}\n  p-accordion-content, \n  .p-accordioncontent {\n  flex: 1 1 auto !important;\n  overflow-y: auto !important;\n  height: 100% !important;\n}\n  p-accordion-content .p-accordioncontent-content, \n  .p-accordioncontent .p-accordioncontent-content {\n  min-height: 100%;\n}\n/*# sourceMappingURL=client-details-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailsContainerComponent, [{
    type: Component,
    args: [{ selector: "app-client-details-container", imports: [
      AccordionModule,
      DividerModule,
      ProgressSpinner,
      CommonModule,
      TranslatePipe
    ], template: `<div class="admin-details-container h-full flex flex-col">
  @if (loading()) {
    <div class="loading-container">
      <p-progressSpinner></p-progressSpinner>
    </div>
  }

  @if (error()) {
    <div class="error-container">
      <p class="error-message">{{ error() }}</p>
    </div>
  }

  @if (!loading() && !error()) {
    <div class="details-container h-full flex flex-col overflow-hidden">
      <p-accordion value="information">
        <!-- Information section -->
        <p-accordion-panel value="information">
          <p-accordion-header>
            <span class="uppercase">{{
              'ADMIN.SHARED.SECTIONS.INFORMATION' | translate
            }}</span>
          </p-accordion-header>
          <p-accordion-content>
            @for (
              section of informationSections();
              track section.id;
              let last = $last
            ) {
              <ng-container
                *ngComponentOutlet="
                  section.component;
                  inputs: getSectionInputs(section)
                "
              ></ng-container>
              @if (!last) {
                <p-divider />
              }
            }
          </p-accordion-content>
        </p-accordion-panel>
        <!-- Settings section -->
        @if (hasSettingsSections()) {
          <p-accordion-panel value="settings">
            <p-accordion-header>
              <span class="uppercase">{{
                'ADMIN.SHARED.SECTIONS.SETTINGS' | translate
              }}</span>
            </p-accordion-header>
            <p-accordion-content>
              @for (
                section of settingsSections();
                track section.id;
                let last = $last
              ) {
                <ng-container
                  *ngComponentOutlet="
                    section.component;
                    inputs: getSectionInputs(section)
                  "
                ></ng-container>
                @if (!last) {
                  <p-divider />
                }
              }
            </p-accordion-content>
          </p-accordion-panel>
        }

        <!-- Limits section -->
        @if (hasLimitsSections()) {
          <p-accordion-panel value="limits">
            <p-accordion-header>
              <span class="uppercase">{{
                'ADMIN.SHARED.SECTIONS.LIMITS' | translate
              }}</span>
            </p-accordion-header>
            <p-accordion-content>
              @for (
                section of limitsSections();
                track section.id;
                let last = $last
              ) {
                <ng-container
                  *ngComponentOutlet="
                    section.component;
                    inputs: getSectionInputs(section)
                  "
                ></ng-container>
                @if (!last) {
                  <p-divider />
                }
              }
            </p-accordion-content>
          </p-accordion-panel>
        }

        <!-- Features section -->
        @if (hasFeaturesSections()) {
          <p-accordion-panel value="features">
            <p-accordion-header>
              <span class="uppercase">{{
                'ADMIN.SHARED.SECTIONS.FEATURES' | translate
              }}</span>
            </p-accordion-header>
            <p-accordion-content>
              @for (
                section of featuresSections();
                track section.id;
                let last = $last
              ) {
                <ng-container
                  *ngComponentOutlet="
                    section.component;
                    inputs: getSectionInputs(section)
                  "
                ></ng-container>
                @if (!last) {
                  <p-divider />
                }
              }
            </p-accordion-content>
          </p-accordion-panel>
        }

        <!-- Statistics section -->
        @if (hasStatisticsSections()) {
          <p-accordion-panel value="statistics">
            <p-accordion-header>
              <span class="uppercase">{{
                'ADMIN.SHARED.SECTIONS.STATISTICS' | translate
              }}</span>
            </p-accordion-header>
            <p-accordion-content>
              @for (
                section of statisticsSections();
                track section.id;
                let last = $last
              ) {
                <ng-container
                  *ngComponentOutlet="
                    section.component;
                    inputs: getSectionInputs(section)
                  "
                ></ng-container>
                @if (!last) {
                  <p-divider />
                }
              }
            </p-accordion-content>
          </p-accordion-panel>
        }

        <!-- Changes section -->
        @if (hasChangesSections()) {
          <p-accordion-panel value="changes">
            <p-accordion-header>
              <span class="uppercase">{{
                'ADMIN.SHARED.SECTIONS.CHANGES' | translate
              }}</span>
            </p-accordion-header>
            <p-accordion-content>
              @for (
                section of changesSections();
                track section.id;
                let last = $last
              ) {
                <ng-container
                  *ngComponentOutlet="
                    section.component;
                    inputs: getSectionInputs(section)
                  "
                ></ng-container>
                @if (!last) {
                  <p-divider />
                }
              }
            </p-accordion-content>
          </p-accordion-panel>
        }
      </p-accordion>
    </div>
  }
</div>
`, styles: ["/* src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n::ng-deep p-accordion,\n::ng-deep .p-accordion {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n}\n::ng-deep p-accordion-panel,\n::ng-deep .p-accordionpanel {\n  display: flex !important;\n  flex-direction: column !important;\n  flex: 0 0 auto !important;\n}\n::ng-deep p-accordion-panel.p-accordionpanel-active,\n::ng-deep p-accordion-panel.p-highlight,\n::ng-deep .p-accordionpanel.p-accordionpanel-active,\n::ng-deep .p-accordionpanel.p-highlight {\n  flex: 1 1 auto !important;\n  min-height: 0 !important;\n  overflow: hidden !important;\n}\n::ng-deep p-accordion-header,\n::ng-deep .p-accordionheader {\n  flex: 0 0 auto !important;\n  z-index: 10;\n}\n::ng-deep p-accordion-content,\n::ng-deep .p-accordioncontent {\n  flex: 1 1 auto !important;\n  overflow-y: auto !important;\n  height: 100% !important;\n}\n::ng-deep p-accordion-content .p-accordioncontent-content,\n::ng-deep .p-accordioncontent .p-accordioncontent-content {\n  min-height: 100%;\n}\n/*# sourceMappingURL=client-details-container.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsContainerComponent, { className: "ClientDetailsContainerComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.ts", lineNumber: 73 });
})();

// src/app/features/administration/components/clients/client-details/client-details.routes.ts
var ADMIN_CLIENT_DETAILS_ROUTES = [
  {
    path: "",
    component: ClientDetailsContainerComponent
  }
];
export {
  ADMIN_CLIENT_DETAILS_ROUTES
};
//# sourceMappingURL=chunk-NGOTMTDM.js.map
