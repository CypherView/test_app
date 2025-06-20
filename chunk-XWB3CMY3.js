import {
  ClientDataStrategy
} from "./chunk-2T6S6M26.js";
import {
  ModalListFormComponent,
  SectionConfigBuilder
} from "./chunk-23SE3HJQ.js";
import "./chunk-LZ2K3GIV.js";
import {
  Divider,
  DividerModule,
  EntitySectionBaseComponent
} from "./chunk-WD6S76EG.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel,
  DynamicFormComponent
} from "./chunk-5SSZS4AX.js";
import "./chunk-3HRWOU6T.js";
import "./chunk-SESMNWMW.js";
import {
  GridComponent,
  ProgressSpinner,
  createDropdownField,
  createListboxField,
  createModalListField,
  createNumberField,
  createTextAreaField,
  createTextField,
  takeUntilDestroyed
} from "./chunk-3FX7N3RV.js";
import {
  ButtonModule,
  Validators
} from "./chunk-UKC35VDE.js";
import "./chunk-FXF5ECNT.js";
import {
  AdminStateService,
  AuthDataService,
  EntitiesService
} from "./chunk-VQ5BPOJV.js";
import {
  APP_FEATURE_FLAGS,
  AppFeatureFlagDefaults,
  AppFeatures,
  AppListsTranslations,
  isBoolean,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-3LDCLVZS.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-5T4X2AFY.js";
import {
  CommonModule,
  DestroyRef,
  EMPTY,
  NgClass,
  NgComponentOutlet,
  TitleCasePipe,
  catchError,
  combineLatest,
  computed,
  effect,
  firstValueFrom,
  from,
  inject,
  input,
  of,
  signal,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CAVC4NS5.js";
import {
  __spreadValues
} from "./chunk-R327OCYJ.js";

// src/app/features/administration/components/shared/feature-section/feature-section.component.ts
var _c0 = (a0) => ({ "icon-primary": a0 });
function FeatureSectionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function FeatureSectionComponent_Conditional_9_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    })("keydown.enter", function FeatureSectionComponent_Conditional_9_Template_span_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit entity details");
  }
}
function FeatureSectionComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function FeatureSectionComponent_Conditional_12_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("formValidityChange", function FeatureSectionComponent_Conditional_12_Template_app_dynamic_form_formValidityChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormValidityChange($event));
    })("formValueChange", function FeatureSectionComponent_Conditional_12_Template_app_dynamic_form_formValueChange_0_listener($event) {
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
function FeatureSectionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.entityDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var FeatureSectionComponent = class _FeatureSectionComponent extends EntitySectionBaseComponent {
  feature = input();
  featureBucket = APP_FEATURE_FLAGS;
  entitiesService = inject(EntitiesService);
  adminStateService = inject(AdminStateService);
  allFields = computed(() => {
    const section = this.feature();
    if (!section)
      return [];
    return [...section.fields ?? [], ...section.subfields ?? []];
  });
  entityDetails = computed(() => {
    const entityDetails = this.entity();
    const fields = this.allFields();
    const flags = entityDetails?.flags?.[this.featureBucket];
    if (isNullOrUndefined(entityDetails) || !flags)
      return [];
    return fields.map((field) => {
      const value = flags[field.id];
      const defaultValue = AppFeatureFlagDefaults[field.id];
      const defaultValueFormatted = !isEmpty(defaultValue) ? `${this.formatFeatureValue(defaultValue)} (Default)` : "None";
      return {
        key: field.title,
        value: isDefined(value) ? this.formatFeatureValue(value) : defaultValueFormatted
      };
    });
  });
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "", transform: "capitalize" }
    ];
    effect(() => {
      const section = this.feature();
      if (section) {
        const fields = section?.fields.concat(section?.subfields ?? []) ?? [];
        const lookupPromises = fields.filter((field) => isDefined(field.valueLookup)).map((field) => this.getLookupValues(field.valueLookup).then((result) => {
          field.values = result;
          return field;
        }).catch(() => field));
        if (lookupPromises.length > 0) {
          Promise.all(lookupPromises).then(() => {
            this.updateFormFields();
          }).catch(() => {
          });
        } else {
          this.updateFormFields();
        }
      }
    });
  }
  formatFeatureValue(value) {
    if (isBoolean(value)) {
      return value ? "Enabled" : "Disabled";
    }
    return value?.toString() ?? "";
  }
  updateFormFields() {
    const entity = this.entity();
    const section = this.feature();
    const fields = section?.fields.concat(section?.subfields ?? []) ?? [];
    this.formFields = fields.map((field) => {
      const validations = [];
      if (field.required ?? false) {
        validations.push({
          name: "required",
          validator: Validators.required,
          message: `${field.title} is required`
        });
      }
      if (isDefined(field.min)) {
        validations.push({
          name: "minLength",
          validator: Validators.min(field.min),
          message: `${field.title} must be at least ${field.min}`
        });
      }
      if (isDefined(field.max)) {
        validations.push({
          name: "maxLength",
          validator: Validators.max(field.max),
          message: `${field.title} must be at most ${field.max}`
        });
      }
      switch (field.type) {
        case "dropdown":
          return createDropdownField(field.id, field.title, (field.values ?? []).map((value) => ({
            label: value.value ?? "",
            value: value.key ?? ""
          })), entity?.flags?.[this.featureBucket]?.[field.id], {
            name: field.id,
            validations,
            props: {
              appendTo: "body"
            },
            hint: field.hint
          });
        case "number":
          return createNumberField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id], {
            name: field.id,
            validations,
            hint: field.hint
          });
        case "checklist":
          return createListboxField(field.id, field.title, [], (field.values ?? []).map((value) => ({
            label: value.value,
            value: value.key?.toString() ?? ""
          })), {
            name: field.id,
            validations,
            hint: field.hint,
            props: {
              appendTo: "body",
              multiple: true,
              optionLabel: "label",
              optionValue: "value",
              style: { height: "250px" }
            }
          });
        case "list":
          if (field.id === "page-external-tabs") {
            const externalTabModalConfig = {
              modalComponent: ModalListFormComponent,
              modalTitle: "External Tab",
              defaultItemProvider: () => ({
                title: "",
                url: "",
                icon: "browser",
                section: "",
                order: 0
              }),
              listItemFormatter: (item) => {
                const tabItem = item;
                return {
                  id: tabItem.title,
                  display: `${tabItem.title} (${tabItem.url})`,
                  icon: tabItem.icon
                };
              },
              modalFields: (item) => {
                const tabItem = item;
                return [
                  createTextField("title", "Title", tabItem?.title ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "Title is required"
                      }
                    ]
                  }),
                  createTextField("url", "URL", tabItem?.url ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "URL is required"
                      }
                    ]
                  }),
                  createTextField("icon", "Icon", tabItem?.icon ?? "browser", {}),
                  createTextField("section", "Section", tabItem?.section ?? "", {
                    hint: AppListsTranslations["FIELDS"]["SECTION_DESC"]
                  }),
                  createNumberField("order", "Order", tabItem?.order ?? 0, {
                    hint: AppListsTranslations["FIELDS"]["ORDER_DESC"]
                  })
                ];
              },
              subHeader: AppListsTranslations["MODALS"]["EXTERNAL-TABS"]["DESC"]
            };
            return createModalListField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id] ?? [], {
              name: field.id,
              validations,
              hint: field.hint,
              props: { modalConfig: externalTabModalConfig }
            });
          } else if (field.id === "page-admin-customPanels") {
            const customPanelModalConfig = {
              modalComponent: ModalListFormComponent,
              modalTitle: "Custom Panel",
              defaultItemProvider: () => ({}),
              listItemFormatter: (item) => {
                const tabItem = item;
                return {
                  id: tabItem.title,
                  display: `${tabItem.title} (${tabItem.url})`,
                  icon: tabItem.icon
                };
              },
              modalFields: (item) => {
                const tabItem = item;
                return [
                  createTextField("title", "Title", tabItem?.title ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "Title is required"
                      }
                    ]
                  }),
                  createTextField("url", "URL", tabItem?.url ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "URL is required"
                      }
                    ]
                  })
                ];
              },
              subHeader: AppListsTranslations["MODALS"]["ADMIN-ENTITY-TABS"]["DESC"]
            };
            return createModalListField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id] ?? [], {
              name: field.id,
              validations,
              hint: field.hint,
              props: { modalConfig: customPanelModalConfig }
            });
          } else if (field.id === "page-overview-customPanels") {
            const customPanelModalConfig = {
              modalComponent: ModalListFormComponent,
              modalTitle: "Custom Panel",
              defaultItemProvider: () => ({}),
              listItemFormatter: (item) => {
                const tabItem = item;
                return {
                  id: tabItem.title,
                  display: `${tabItem.title} (${tabItem.url})`,
                  icon: tabItem.icon
                };
              },
              modalFields: (item) => {
                const tabItem = item;
                return [
                  createTextField("title", "Title", tabItem?.title ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "Title is required"
                      }
                    ]
                  }),
                  createTextField("url", "URL", tabItem?.url ?? "", {
                    required: true,
                    validations: [
                      {
                        name: "required",
                        validator: Validators.required,
                        message: "URL is required"
                      }
                    ]
                  })
                ];
              },
              subHeader: AppListsTranslations["MODALS"]["OVERVIEW-TABS"]["DESC"]
            };
            return createModalListField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id] ?? [], {
              name: field.id,
              validations,
              hint: field.hint,
              props: { modalConfig: customPanelModalConfig }
            });
          } else {
            return createTextField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id], {
              name: field.id,
              validations,
              hint: field.hint
            });
          }
        case "memo":
          return createTextAreaField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id], {
            name: field.id,
            layout: "horizontal",
            labelWidth: "1/3"
          });
        case "text":
        default:
          return createTextField(field.id, field.title, entity?.flags?.[this.featureBucket]?.[field.id], {
            name: field.id,
            validations,
            hint: field.hint
          });
      }
    });
  }
  onFormValueChange(formData) {
    const transformedData = { fields: formData };
    this.formValueChange.emit(transformedData);
  }
  getLookupValues(valueLookup) {
    const ownerId = this.entity()?.owner.id ?? "";
    switch (valueLookup) {
      case "reports":
        return firstValueFrom(this.entitiesService.listReportDefinitions(ownerId)).then((result) => {
          const reports = result.items.map((x) => {
            return {
              key: x.id,
              value: x.name
            };
          });
          return reports.sort((a, b) => a.value.localeCompare(b.value));
        });
      case "assetTypes":
        return firstValueFrom(this.entitiesService.listAssetTypes(ownerId)).then((result) => {
          const assetTypes = result.items.map((x) => {
            return {
              key: x.id,
              value: x.name
            };
          });
          return assetTypes.sort((a, b) => a.value.localeCompare(b.value));
        });
      case "alert-actions": {
        const actions = [
          {
            key: "request_video",
            value: "Request Video"
          },
          {
            key: "label_current_trip",
            value: "Label Current Trip"
          }
        ];
        actions.sort((a, b) => a.value.localeCompare(b.value));
        return Promise.resolve(actions);
      }
      default:
        return Promise.resolve([]);
    }
  }
  static \u0275fac = function FeatureSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeatureSectionComponent, selectors: [["app-feature-section"]], inputs: { feature: [1, "feature"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 11, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "custom-icon-svg", "w-[2.5rem]", "h-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions", "hideActions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click", "keydown.enter"], [3, "formSubmit", "formValidityChange", "formValueChange", "fields", "actions", "hideActions"]], template: function FeatureSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "use");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h2", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "titlecase");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, FeatureSectionComponent_Conditional_9_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "The following supplemental information is required.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, FeatureSectionComponent_Conditional_12_Template, 1, 3, "app-dynamic-form", 7)(13, FeatureSectionComponent_Conditional_13_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c0, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Book open icon");
      \u0275\u0275advance();
      \u0275\u0275attribute("href", "assets/sprites/sprite.svg#book-open-solid");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, (tmp_3_0 = ctx.feature()) == null ? null : tmp_3_0.title), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 9 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() || ctx.createMode() && ctx.formFields.length ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 13 : -1);
    }
  }, dependencies: [CommonModule, NgClass, TitleCasePipe, ButtonModule, GridComponent, DynamicFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureSectionComponent, { className: "FeatureSectionComponent", filePath: "src/app/features/administration/components/shared/feature-section/feature-section.component.ts", lineNumber: 50 });
})();

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
  dataStrategy = inject(ClientDataStrategy);
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
        return from(this.dataStrategy.fetchById(clientId));
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
      const appFeatures = Object.keys(AppFeatures);
      this.featuresSections.set(appFeatures.map((feature) => SectionConfigBuilder.forClient(null).addSection(feature, "Features", FeatureSectionComponent).build()).flat());
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
      const useFlags = this.authDataService.flags;
      if (isNullOrUndefined(useFlags.assetPerformanceEnabled())) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-assetperformance");
      }
      if (isNullOrUndefined(useFlags.deviceHealthEnabled())) {
        appFeatures = appFeatures.filter((feature) => feature !== "page-devicehealth");
      }
      this.featuresSections.set(appFeatures.map((feature) => SectionConfigBuilder.forClient(entityData).addSection(feature, "Features", FeatureSectionComponent, void 0, {
        feature: AppFeatures[feature]
      }).build()).flat());
    }
  }
  // Method for child components to save data
  async updateEntity(updates) {
    const client = this.entity();
    if (isNullOrUndefined(client))
      return;
    try {
      this.loading.set(true);
      const updatedEntity = await this.dataStrategy.update(client.id, updates);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsContainerComponent, { className: "ClientDetailsContainerComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details-container/client-details-container.component.ts", lineNumber: 53 });
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
//# sourceMappingURL=chunk-XWB3CMY3.js.map
