import {
  TimeAgoPipe
} from "./chunk-XN62BSBY.js";
import {
  CustomizeDistributorComponent,
  DistributorAddressComponent,
  DistributorDetailsComponent,
  DistributorExternalAuthenticationComponent,
  DistributorNotificationSettingsComponent,
  DistributorSettingsComponent,
  DistributorSslCertificatesComponent,
  Divider,
  DividerModule,
  DynamicFormModalComponent,
  EntitySectionBaseComponent,
  EntitySettingsBase,
  ImageEditorComponent,
  Panel,
  PanelModule
} from "./chunk-CKVTU22R.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
  DataViewModule,
  DynamicFormComponent,
  RequestCacheService,
  ScrollDispatcher,
  ScrollingModule,
  UtilsService
} from "./chunk-VXJMY5F5.js";
import {
  Apollo,
  gql
} from "./chunk-7BPDUI7R.js";
import {
  DynamicDialogConfig,
  DynamicDialogRef,
  GridComponent,
  UnitFormatters,
  UtilityService,
  createAutocompleteField,
  createDropdownField,
  createListboxField,
  createModalListField,
  createMultiselectField,
  createNumberField,
  createPasswordField,
  createTextAreaField,
  createTextField,
  takeUntilDestroyed
} from "./chunk-SGSSZZCS.js";
import {
  BaseComponent,
  BaseStyle,
  Button,
  ButtonModule,
  Footer,
  Header,
  PrimeTemplate,
  SharedModule,
  Tooltip,
  TooltipModule,
  Validators,
  equals
} from "./chunk-D3SIXD4M.js";
import {
  AccountsService,
  AdminStateService,
  DeviceTypeListItem,
  EntitiesService,
  ThemesService
} from "./chunk-PY5UAXBS.js";
import {
  APP_FEATURE_FLAGS,
  ApiUrlService,
  AppFeatureFlagDefaults,
  AppListsTranslations,
  BACKEND_FEATURE_FLAGS,
  DEFAULT_EMAIL_PROVIDER,
  DEFAULT_LIST_SIZE,
  DEFAULT_SYSTEM_ID,
  hasProperty,
  isBoolean,
  isDefined,
  isEmpty,
  isNullOrUndefined,
  isString
} from "./chunk-DIN3XHWB.js";
import {
  HttpClient
} from "./chunk-MWRHVJ6S.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DatePipe,
  DestroyRef,
  HostBinding,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  TitleCasePipe,
  ViewEncapsulation,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  effect,
  filter,
  finalize,
  firstValueFrom,
  inject,
  input,
  map,
  of,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-UOQWYEAO.js";
import {
  __spreadValues
} from "./chunk-R327OCYJ.js";

// src/app/features/administration/components/vendors/vendor-details/customize-vendor/customize-vendor.component.ts
var _c0 = ["customTemplate"];
var _c1 = (a0) => ({ "icon-primary": a0 });
function CustomizeVendorComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275listener("click", function CustomizeVendorComponent_Conditional_8_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Customize vendor");
  }
}
function CustomizeVendorComponent_Conditional_11_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17);
    \u0275\u0275element(7, "img", 18);
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21);
    \u0275\u0275listener("click", function CustomizeVendorComponent_Conditional_11_For_1_Conditional_0_Template_span_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange(true, item_r5.imageUrl));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "span", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5 == null ? null : item_r5.key);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", item_r5 == null ? null : item_r5.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.imageCaption);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit image");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove image");
  }
}
function CustomizeVendorComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeVendorComponent_Conditional_11_For_1_Conditional_0_Template, 13, 5, "div", 12);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275conditional((item_r5 == null ? null : item_r5.imageUrl) ? 0 : -1);
  }
}
function CustomizeVendorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, CustomizeVendorComponent_Conditional_11_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(2, "app-dynamic-form", 11);
    \u0275\u0275listener("formSubmit", function CustomizeVendorComponent_Conditional_11_Template_app_dynamic_form_formSubmit_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.vendorDetails());
    \u0275\u0275advance(2);
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function CustomizeVendorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.vendorDetails())("columns", ctx_r1.columnsSignal())("showGridLines", false)("hideHeader", true);
  }
}
function CustomizeVendorComponent_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", details_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", details_r6.key || "Vendor image");
  }
}
function CustomizeVendorComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", details_r6 == null ? null : details_r6.value, " ");
  }
}
function CustomizeVendorComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeVendorComponent_ng_template_13_Conditional_0_Template, 1, 2, "img", 23)(1, CustomizeVendorComponent_ng_template_13_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const details_r6 = ctx.$implicit;
    \u0275\u0275conditional((details_r6 == null ? null : details_r6.imageUrl) ? 0 : 1);
  }
}
function CustomizeVendorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-editor", 24);
    \u0275\u0275listener("visibleChange", function CustomizeVendorComponent_Conditional_15_Template_app_image_editor_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange($event));
    })("croppedFile", function CustomizeVendorComponent_Conditional_15_Template_app_image_editor_croppedFile_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", true)("fileUrl", ctx_r1.file);
  }
}
var CustomizeVendorComponent = class _CustomizeVendorComponent extends EntitySectionBaseComponent {
  logoTemplate;
  accountsService = inject(AccountsService);
  themesService = inject(ThemesService);
  utilsService = inject(UtilsService);
  apiUrlService = inject(ApiUrlService);
  vendorDetails = computed(() => {
    const details = this.entity();
    if (!details)
      return [];
    return [
      {
        key: "Logo",
        value: "",
        imageUrl: `${this.apiUrlService.getCurrentApiUrl()}/accounts/vendors/${details.id}/logo?size=large`,
        imageCaption: "The image will be resampled to 800 x 333 pixels and will be used on reports."
      },
      {
        key: "Web Logo",
        value: "",
        imageUrl: `${this.apiUrlService.getCurrentApiUrl()}/accounts/vendors/${details.id}/logo?size=small`,
        imageCaption: "The image will be resampled to 240 x 100 pixels. For better results you should pre-scale your image in a graphics program before uploading."
      },
      {
        key: "Domains",
        value: isDefined(details.domains?.length) ? details.domains.join(", ") : "None"
      },
      {
        key: "Language",
        value: this.languages.find((l) => l.id === details.language)?.name ?? "None"
      },
      {
        key: "Theme",
        value: details?.theme?.name ?? "None"
      },
      {
        key: "Login Message",
        value: isDefined(details?.messages?.login) && details?.messages?.login !== "" ? details?.messages?.login : "None"
      }
    ];
  });
  languages = this.utilsService.getLanguages();
  themes = [];
  isImageEditorVisible = false;
  file;
  constructor() {
    super();
    effect(() => {
      const vendor = this.entity();
      if (vendor) {
        this.themesService.listThemes(vendor.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: (themes) => {
            this.themes = themes.items;
            this.updateFormFields();
          }
        });
      }
    });
    effect(() => {
      if (this.logoTemplate) {
        this.columnsSignal.set([
          { field: "key", header: "", transform: "uppercase" },
          { field: "value", header: "", cellTemplate: this.logoTemplate }
        ]);
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextAreaField("domains", "Domains", this.entity()?.domains?.join(", "), {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "domains"
      }),
      createDropdownField("language", "Language", this.languages.map((lang) => ({
        label: lang.name,
        value: lang.id
      })), this.entity()?.language, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select language",
        name: "language",
        props: {
          // Using 'body' to ensure proper overlay positioning and width
          // Alternative approaches with container elements can cause positioning issues
          appendTo: "body"
        }
      }),
      createDropdownField("theme", "Theme", [{ label: "Inherited", value: "inherited" }].concat(this.themes.map((theme3) => ({
        label: theme3.name,
        value: theme3.id
      }))), this.entity()?.theme?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select theme",
        name: "theme",
        props: {
          appendTo: "body"
        }
      }),
      {
        name: "messages",
        key: "messages",
        type: "group",
        fields: [
          createTextAreaField("login", "Login Message", this.entity()?.messages?.login, {
            layout: "horizontal",
            labelWidth: "1/3",
            name: "login",
            hint: "Markdown syntax is supported for styling text."
          })
        ]
      }
    ];
  }
  submitChanges(formData) {
    const currentVendor = this.entity();
    if (!currentVendor)
      return;
    this.accountsService.updateVendorDetails(currentVendor.id, formData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: () => this.isFormEditable.set(false),
      error: () => this.isFormEditable.set(true)
    });
  }
  onImageEditorVisibleChange(visible, file) {
    this.isImageEditorVisible = visible;
    this.file = file;
  }
  saveFile(file) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    const formData = new FormData();
    formData.append("logo", file);
  }
  updateLogo() {
    return;
  }
  static \u0275fac = function CustomizeVendorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomizeVendorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomizeVendorComponent, selectors: [["app-customize-vendor"]], viewQuery: function CustomizeVendorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoTemplate = _t.first);
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 8, consts: [["customTemplate", ""], ["aria-label", "Vendor Customization", 1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "custom-icon-svg", "w-[2.5rem]", "h-[2.5rem]", 3, "ngClass"], ["role", "heading", "aria-level", "2", 1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [3, "visible", "fileUrl"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["for", "logo", 1, "w-1/3", "flex-shrink-0"], [1, "flex", "flex-col", "w-full"], [1, "flex-grow-1"], [1, "flex", "justify-between"], [1, "flex", "flex-col"], ["alt", "Vendor logo", 1, "max-w-[150px]", "mb-2", 3, "src"], [1, "opacity-50"], [1, "flex", "flex-row", "gap-2"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-xl", 3, "click"], [1, "pi", "pi-times", "action", "hover", "!text-xl"], [1, "max-w-[150px]", 3, "src", "alt"], [3, "visibleChange", "croppedFile", "visible", "fileUrl"]], template: function CustomizeVendorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 3);
      \u0275\u0275element(3, "use");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      \u0275\u0275text(7, "Customize");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, CustomizeVendorComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "When users visit one of the domains below, the software will be customized with the following settings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, CustomizeVendorComponent_Conditional_11_Template, 3, 2)(12, CustomizeVendorComponent_Conditional_12_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CustomizeVendorComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CustomizeVendorComponent_Conditional_15_Template, 1, 2, "app-image-editor", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Paint roller icon");
      \u0275\u0275advance();
      \u0275\u0275attribute("href", "assets/sprites/sprite.svg#paint-roller");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 11 : 12);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isImageEditorVisible ? 15 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    DynamicFormComponent,
    GridComponent,
    ImageEditorComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomizeVendorComponent, { className: "CustomizeVendorComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/customize-vendor/customize-vendor.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-address/vendor-address.component.ts
var _c02 = (a0) => ({ "icon-primary": a0 });
function VendorAddressComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function VendorAddressComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit address");
  }
}
function VendorAddressComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function VendorAddressComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function VendorAddressComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.address())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var VendorAddressComponent = class _VendorAddressComponent extends EntitySectionBaseComponent {
  accountsService = inject(AccountsService);
  cacheService = inject(RequestCacheService);
  http = inject(HttpClient);
  countries = signal([]);
  countriesLoaded = computed(() => this.countries().length > 0);
  isFormEditable = signal(false);
  address = computed(() => {
    const vendorDetails = this.entity();
    if (isNullOrUndefined(vendorDetails) || !this.countriesLoaded())
      return [];
    const address = vendorDetails.address;
    return [
      {
        key: "Address",
        value: isString(address?.address) ? address.address : "None"
      },
      {
        key: "City",
        value: isString(address?.city) ? address.city : "None"
      },
      {
        key: "State",
        value: isString(address?.state) ? address.state : "None"
      },
      {
        key: "Code",
        value: isString(address?.code) ? address.code : "None"
      },
      {
        key: "Country",
        value: this.findCountryLabel(address?.country ?? void 0)
      }
    ];
  });
  constructor() {
    super();
    this.loadCountries();
    effect(() => {
      if (this.isFormEditable()) {
        this.updateFormFields();
      }
    });
  }
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  updateFormFields() {
    const vendor = this.entity();
    this.formFields = [
      createTextField("address", "Address", vendor?.address?.address, {
        name: "address",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Address is required"
          }
        ]
      }),
      createTextField("city", "City", vendor?.address?.city, {
        name: "city",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "City is required"
          }
        ]
      }),
      createTextField("state", "State", vendor?.address?.state, {
        name: "state",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "State is required"
          }
        ]
      }),
      createTextField("code", "Code", vendor?.address?.code, {
        name: "code",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Code is required"
          }
        ]
      }),
      createDropdownField("country", "Country", this.countries(), vendor?.address?.country, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select country",
        name: "country",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(addressData) {
    const vendor = this.entity();
    if (!vendor) {
      throw new Error("Vendor is required");
    }
    return this.accountsService.updateVendorDetails(vendor.id, {
      address: addressData.address
    });
  }
  loadCountries() {
    this.cacheService.getOrFetch("countries", () => this.http.get("assets/docs/countries.json")).pipe(take(1)).subscribe((countries) => {
      if (isDefined(countries) && countries.length > 0) {
        this.countries.set(countries.map((c) => ({ label: c.name, value: c.code })));
      }
    });
  }
  findCountryLabel(countryCode) {
    if (isNullOrUndefined(countryCode) || !this.countriesLoaded())
      return "None";
    const country = this.countries().find((c) => c.value === countryCode);
    return country?.label ?? "None";
  }
  onSubmit(formGroup) {
    if (formGroup.invalid) {
      return;
    }
    this.submitChanges({ address: formGroup.value }).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.entityChange.emit(response);
      },
      error: (error) => {
        console.error("Failed to save address", error);
      }
    });
  }
  static \u0275fac = function VendorAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorAddressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorAddressComponent, selectors: [["app-vendor-address"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-id-card", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function VendorAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VendorAddressComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following address information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, VendorAddressComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorAddressComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "id card icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [DynamicFormComponent, GridComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorAddressComponent, { className: "VendorAddressComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-address/vendor-address.component.ts", lineNumber: 34 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-settings/vendor-settings.component.ts
function VendorSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function VendorSettingsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit vendor settings");
  }
}
function VendorSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function VendorSettingsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function VendorSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.vendorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var VendorSettingsComponent = class _VendorSettingsComponent extends EntitySettingsBase {
  adminTreeState = inject(AdminStateService);
  vendorDetails = computed(() => {
    const vendorDetails = this.entity();
    if (isNullOrUndefined(vendorDetails))
      return [];
    return [
      {
        key: "Available Email providers",
        value: isEmpty(vendorDetails.availableEmailProviders) ? "None" : vendorDetails.availableEmailProviders?.map((provider) => provider.name).join(", ")
      },
      {
        key: "Available Map Sets",
        value: isEmpty(vendorDetails.availableMapSets) ? "None" : vendorDetails.availableMapSets?.map((mapSet) => mapSet.name).join(", ")
      },
      {
        key: "Default Map Set",
        value: vendorDetails.defaultMapSet?.name ?? "None"
      },
      {
        key: "Device Types",
        value: isEmpty(vendorDetails.availableDeviceTypes) ? "None" : vendorDetails.availableDeviceTypes?.map((deviceType) => deviceType.name).join(", ")
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  distributorDetails = computed(() => this.adminTreeState.vendorDistributor());
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  updateFormFields() {
    this.formFields = [
      createMultiselectField("availableEmailProviders", "Email Providers", this.entity()?.availableEmailProviders?.map((provider) => provider.id) ?? [], this.selectOptions?.["emailProviders"] ?? [], {
        name: "availableEmailProviders",
        validations: []
      }),
      createMultiselectField("availableMapSets", "Map Sets", this.entity()?.availableMapSets?.map((mapSet) => mapSet.id) ?? [], this.selectOptions?.["mapSets"] ?? [], {
        name: "availableMapSets",
        validations: []
      }),
      createDropdownField("defaultMapSet", "Default Map Set", this.selectOptions?.["mapSets"] ?? [], this.entity()?.defaultMapSet?.id, {
        name: "defaultMapSet",
        validations: []
      }),
      createMultiselectField("availableDeviceTypes", "Device Types", this.entity()?.availableDeviceTypes?.map((dt) => dt.id) ?? [], this.selectOptions?.["deviceTypes"] ?? [], {
        name: "availableDeviceTypes",
        validations: []
      })
    ];
  }
  loadSelectOptions(distributor) {
    const vendorDetails = this.entity();
    if (isNullOrUndefined(vendorDetails?.id)) {
      this.selectOptions = {};
      this.selectOptionsLoaded.set(true);
      this.updateFormFields();
      return;
    }
    combineLatest([
      this.entitiesService.listDeviceTypes(vendorDetails.owner.id),
      this.entitiesService.listEmailProviders(vendorDetails.owner.id),
      this.entitiesService.listMapSets(vendorDetails.owner.id, 0, 100, "name", "state!=deleted")
    ]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return of([{ items: [] }, { items: [] }, { items: [] }]);
    })).subscribe(([deviceTypes, emailProviders, mapSets]) => {
      const deviceTypesFiltered = deviceTypes.items.filter((item) => item.state === DeviceTypeListItem.StateEnum.Active);
      this.selectOptions = {
        deviceTypes: this.createUniqueOptions(deviceTypesFiltered),
        emailProviders: this.createUniqueOptions(emailProviders.items, distributor?.availableEmailProviders ?? []),
        mapSets: this.createUniqueOptions(mapSets.items, distributor?.availableMapSets ?? [])
      };
      this.selectOptionsLoaded.set(true);
      this.updateFormFields();
    });
  }
  getDistributorDetails() {
    return this.adminTreeState.vendorDistributor();
  }
  submitChanges(settings) {
    const vendor = this.entity();
    if (!vendor) {
      throw new Error("Vendor is required");
    }
    return this.accountsService.updateVendorDetails(vendor.id, settings);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275VendorSettingsComponent_BaseFactory;
    return function VendorSettingsComponent_Factory(__ngFactoryType__) {
      return (\u0275VendorSettingsComponent_BaseFactory || (\u0275VendorSettingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VendorSettingsComponent)))(__ngFactoryType__ || _VendorSettingsComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorSettingsComponent, selectors: [["app-vendor-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-cog", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function VendorSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VendorSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, VendorSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Cog icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorSettingsComponent, { className: "VendorSettingsComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-settings/vendor-settings.component.ts", lineNumber: 34 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-notification-settings/vendor-notification-settings.component.ts
function VendorNotificationSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function VendorNotificationSettingsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit notification settings");
  }
}
function VendorNotificationSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function VendorNotificationSettingsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function VendorNotificationSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.vendorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var VendorNotificationSettingsComponent = class _VendorNotificationSettingsComponent extends EntitySectionBaseComponent {
  entitiesService = inject(EntitiesService);
  accountsService = inject(AccountsService);
  utilityService = inject(UtilityService);
  emailProvidersLoaded = signal(false);
  emailProviders = [
    { label: DEFAULT_EMAIL_PROVIDER.name, value: DEFAULT_EMAIL_PROVIDER.id }
  ];
  vendorDetails = computed(() => {
    const vendorDetails = this.entity();
    if (!isDefined(vendorDetails))
      return [];
    const emailProvider = vendorDetails.emailProvider;
    const providerName = isDefined(emailProvider) && hasProperty(emailProvider, "name") && isString(emailProvider.name) ? emailProvider.name : "None";
    return [
      {
        key: "Default Email Provider",
        value: providerName
      }
    ];
  });
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    effect(() => {
      const distributorDetails = this.entity();
      if (distributorDetails && this.emailProvidersLoaded()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.fetchEmailProviders();
  }
  fetchEmailProviders() {
    const vendor = this.entity();
    if (!isDefined(vendor) || !isString(vendor.id)) {
      console.warn("Invalid vendor data");
      return;
    }
    const filters = { state: { value: "active", operator: "=" } };
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    this.entitiesService.listEmailProviders(vendor.id, 0, DEFAULT_LIST_SIZE, "name", rqlFilter).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((emailProviders) => {
      this.emailProviders = [
        ...this.emailProviders,
        ...emailProviders.items.map((emailProvider) => ({
          label: isDefined(emailProvider.name) ? emailProvider.name : "Unknown",
          value: emailProvider.id
        }))
      ];
      this.emailProvidersLoaded.set(true);
    });
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("emailProvider", "Email Provider", this.emailProviders, this.entity()?.emailProvider?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "emailProvider",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(formData) {
    const vendor = this.entity();
    if (isNullOrUndefined(vendor))
      return;
    this.accountsService.updateVendorDetails(vendor.id, formData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  static \u0275fac = function VendorNotificationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorNotificationSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorNotificationSettingsComponent, selectors: [["app-vendor-notification-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-at", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function VendorNotificationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Notification Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VendorNotificationSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, VendorNotificationSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorNotificationSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "At icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorNotificationSettingsComponent, { className: "VendorNotificationSettingsComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-notification-settings/vendor-notification-settings.component.ts", lineNumber: 38 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-external-authentication/vendor-external-authentication.component.ts
function VendorExternalAuthenticationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275listener("click", function VendorExternalAuthenticationComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit External Authentication");
  }
}
function VendorExternalAuthenticationComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-panel");
  }
}
function VendorExternalAuthenticationComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-panel")(1, "div", 18)(2, "div");
    \u0275\u0275element(3, "span", 19);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "key icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Delete Issuer");
  }
}
function VendorExternalAuthenticationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Issuers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275template(5, VendorExternalAuthenticationComponent_Conditional_10_Conditional_5_Template, 1, 0, "p-panel");
    \u0275\u0275repeaterCreate(6, VendorExternalAuthenticationComponent_Conditional_10_For_7_Template, 8, 3, "p-panel", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "p-button", 14);
    \u0275\u0275listener("click", function VendorExternalAuthenticationComponent_Conditional_10_Template_p_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "p-button", 16);
    \u0275\u0275listener("onClick", function VendorExternalAuthenticationComponent_Conditional_10_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isFormEditable.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.oidc().length === 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.oidc());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
  }
}
function VendorExternalAuthenticationComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.vendorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var VendorExternalAuthenticationComponent = class _VendorExternalAuthenticationComponent {
  entity = input();
  accountsService = inject(AccountsService);
  destroyRef = inject(DestroyRef);
  isFormEditable = signal(false);
  oidc = signal([]);
  vendorDetails = computed(() => {
    const vendorDetails = this.entity();
    if (!vendorDetails)
      return [];
    const authProviders = Object.entries(vendorDetails.oidc || {}).map(([_, value]) => value.name).filter(Boolean);
    return [
      {
        key: "External Authentication",
        value: authProviders.length > 0 ? authProviders.join(", ") : "None"
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  formFields = [];
  actions = [
    {
      label: "Cancel",
      action: () => {
        this.showModal = false;
      },
      severity: "secondary"
    },
    {
      label: "Ok",
      action: (formData) => {
        this.onFormSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  showModal = false;
  constructor() {
    effect(() => {
      const vendorDetails = this.entity();
      if (vendorDetails) {
        this.oidc.set(Object.values(vendorDetails.oidc || {}));
        this.updateFormFields();
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", "", {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ],
        hint: "A descriptive name for this issuer. It will be displayed on a button on the sign in screen."
      }),
      createTextField("issuer", "Issuer", "", {
        name: "issuer",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Issuer is required"
          }
        ],
        hint: "The issuer endpoint, i.e. https://accounts.google.com/"
      }),
      createTextField("clientId", "Client ID", "", {
        name: "clientId",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Client ID is required"
          }
        ],
        hint: "The Client ID supplied by your Open ID Connect issuer."
      }),
      createPasswordField("clientSecret", "Client Secret", {
        name: "clientSecret",
        hint: "The client secret is OPTIONAL and is not required for standard web or mobile sign in."
      })
    ];
  }
  onFormSubmit(data) {
    this.showModal = false;
    this.oidc.update((oidc) => [...oidc, data.value]);
  }
  save() {
    const vendor = this.entity();
    if (isNullOrUndefined(vendor))
      return;
    this.accountsService.updateVendorDetails(vendor.id, { oidc: { "": this.oidc() } }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  onEdit() {
    this.isFormEditable.set(true);
  }
  onClose() {
    this.showModal = false;
  }
  static \u0275fac = function VendorExternalAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorExternalAuthenticationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorExternalAuthenticationComponent, selectors: [["app-vendor-external-authentication"]], inputs: { entity: [1, "entity"] }, decls: 13, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-key", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], ["header", "Issuer Details", 3, "close", "formSubmit", "visible", "fields", "actions"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], ["for", "logo", 1, "w-1/3", "flex-shrink-0"], [1, "flex", "flex-col", "justify-end", "w-full"], [1, "flex-grow-1", "flex", "flex-col"], ["severity", "secondary", "label", "Add", 1, "self-end", "p-2", 3, "click"], [1, "flex", "justify-end", "gap-2", "mt-4"], ["type", "button", "label", "Cancel", "severity", "secondary", 3, "onClick"], ["type", "submit", "label", "Save", "severity", "primary", 3, "disabled"], [1, "flex", "flex-row", "justify-between"], [1, "pi", "pi-key", "!text-xl"], [1, "px-4"], [1, "pi", "pi-trash", "action", "hover", "!text-xl"]], template: function VendorExternalAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "External Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VendorExternalAuthenticationComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "To authenticate with an external OpenId Connect issuer, add the issuer below.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, VendorExternalAuthenticationComponent_Conditional_10_Template, 12, 2, "div", 7)(11, VendorExternalAuthenticationComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-dynamic-form-modal", 9);
      \u0275\u0275listener("close", function VendorExternalAuthenticationComponent_Template_app_dynamic_form_modal_close_12_listener() {
        return ctx.onClose();
      })("formSubmit", function VendorExternalAuthenticationComponent_Template_app_dynamic_form_modal_formSubmit_12_listener($event) {
        return ctx.onFormSubmit($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "key icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.showModal)("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    GridComponent,
    DataViewModule,
    ButtonModule,
    Button,
    PanelModule,
    Panel,
    DynamicFormModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorExternalAuthenticationComponent, { className: "VendorExternalAuthenticationComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-external-authentication/vendor-external-authentication.component.ts", lineNumber: 45 });
})();

// src/app/features/administration/components/vendors/vendor-details/vendor-details/vendor-details.component.ts
var _c03 = (a0) => ({ "icon-primary": a0 });
function VendorDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function VendorDetailsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    })("keydown.enter", function VendorDetailsComponent_Conditional_7_Template_span_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit vendor details");
  }
}
function VendorDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function VendorDetailsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("formValidityChange", function VendorDetailsComponent_Conditional_10_Template_app_dynamic_form_formValidityChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormValidityChange($event));
    })("formValueChange", function VendorDetailsComponent_Conditional_10_Template_app_dynamic_form_formValueChange_0_listener($event) {
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
function VendorDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.vendorDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var VendorDetailsComponent = class _VendorDetailsComponent extends EntitySectionBaseComponent {
  ownerId = input(null);
  accountsService = inject(AccountsService);
  companyGroupsLoaded = signal(false);
  companyGroups = [];
  vendorDetails = computed(() => {
    const vendorDetails = this.entity();
    if (isNullOrUndefined(vendorDetails))
      return [];
    return [
      { key: "Name", value: vendorDetails.name },
      { key: "Website", value: vendorDetails.website },
      {
        key: "Group",
        value: isDefined(vendorDetails.group) && vendorDetails.group !== DEFAULT_SYSTEM_ID ? vendorDetails.group : "None"
      },
      {
        key: "Tags",
        value: (vendorDetails.tags ?? []).length > 0 ? vendorDetails.tags?.toString() : "None"
      }
    ];
  });
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    effect(() => {
      const vendorDetails = this.entity();
      if (vendorDetails && this.companyGroupsLoaded()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.loadCompanyGroups();
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", this.entity()?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ]
      }),
      createTextField("website", "Website", this.entity()?.website, {
        name: "website",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Website is required"
          }
        ]
      }),
      createDropdownField("group", "Group", this.companyGroups, this.entity()?.group, {
        name: "group"
      }),
      createAutocompleteField("tags", "Tags", this.entity()?.tags, [], () => {
      }, {
        name: "tags",
        props: { multiple: true, field: "name" }
      })
    ];
  }
  loadCompanyGroups() {
    const vendorDetails = this.entity();
    if (isNullOrUndefined(vendorDetails?.id)) {
      this.companyGroups = [];
      this.companyGroupsLoaded.set(true);
      this.updateFormFields();
      return;
    }
    this.accountsService.listCompanyGroups(vendorDetails.id).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return of({ items: [] });
    })).subscribe((data) => {
      this.companyGroups = data.items.map((item) => ({
        label: item.name ?? "",
        value: item.id ?? ""
      })).sort((a, b) => a.label.localeCompare(b.label));
      this.companyGroupsLoaded.set(true);
      this.updateFormFields();
    });
  }
  submitChanges(vendorDetails) {
    const vendor = this.entity();
    if (isNullOrUndefined(vendor))
      throw new Error("Vendor not found");
    return this.accountsService.updateVendorDetails(vendor.id, vendorDetails);
  }
  static \u0275fac = function VendorDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorDetailsComponent, selectors: [["app-vendor-details"]], inputs: { ownerId: [1, "ownerId"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 7, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-building", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions", "hideActions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click", "keydown.enter"], [3, "formSubmit", "formValidityChange", "formValueChange", "fields", "actions", "hideActions"]], template: function VendorDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Vendor Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, VendorDetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Configure various vendor details.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, VendorDetailsComponent_Conditional_10_Template, 1, 3, "app-dynamic-form", 7)(11, VendorDetailsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c03, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Building icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() || ctx.createMode() && ctx.formFields.length ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 11 : -1);
    }
  }, dependencies: [GridComponent, DynamicFormComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorDetailsComponent, { className: "VendorDetailsComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-details/vendor-details.component.ts", lineNumber: 37 });
})();

// src/app/features/administration/components/clients/client-details/client-details/client-details.component.ts
var _c04 = (a0) => ({ "icon-primary": a0 });
function ClientDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function ClientDetailsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    })("keydown.enter", function ClientDetailsComponent_Conditional_7_Template_span_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit client details");
  }
}
function ClientDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function ClientDetailsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("formValidityChange", function ClientDetailsComponent_Conditional_10_Template_app_dynamic_form_formValidityChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormValidityChange($event));
    })("formValueChange", function ClientDetailsComponent_Conditional_10_Template_app_dynamic_form_formValueChange_0_listener($event) {
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
function ClientDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientDetailsComponent = class _ClientDetailsComponent extends EntitySectionBaseComponent {
  ownerId = input(null);
  http = inject(HttpClient);
  companyGroupsLoaded = signal(false);
  companyGroups = [];
  clientDetails = computed(() => {
    const clientDetails = this.entity();
    const groupsLoaded = this.companyGroupsLoaded();
    if (!clientDetails)
      return [];
    let groupName = "None";
    if (isDefined(clientDetails.group) && clientDetails.group !== DEFAULT_SYSTEM_ID) {
      if (groupsLoaded) {
        groupName = this.companyGroups.find((group) => group.value === clientDetails.group)?.label ?? "Unknown";
      } else {
        groupName = "Loading...";
      }
    }
    return [
      { key: "Name", value: clientDetails.name },
      { key: "Website", value: clientDetails.website },
      { key: "Group", value: groupName },
      {
        key: "Tags",
        value: (clientDetails.tags ?? []).length > 0 ? clientDetails.tags?.toString() : "None"
      },
      { key: "Pin", value: clientDetails.pin ?? "None" }
    ];
  });
  accountsService = inject(AccountsService);
  timezones = [];
  cacheService = inject(RequestCacheService);
  cacheTTL = 3e5;
  // 5 minutes
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    effect(() => {
      const clientDetails = this.entity();
      if (clientDetails && this.companyGroupsLoaded()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.loadCompanyGroups();
    this.loadTimezones();
  }
  loadTimezones() {
    this.http.get("/assets/docs/timezones.json").subscribe((data) => {
      this.timezones = data.map((tz) => ({ label: tz.id, value: tz.id })).sort((a, b) => a.label.localeCompare(b.label));
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", this.entity()?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ]
      }),
      createTextField("website", "Website", this.entity()?.website, {
        name: "website",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Website is required"
          }
        ]
      }),
      createDropdownField("group", "Group", this.companyGroups, this.entity()?.group, {
        name: "group"
      }),
      createDropdownField("timeZoneId", "Timezone", this.timezones, this.entity()?.timeZoneId ?? null, {
        name: "timeZoneId",
        placeholder: "Select timezone",
        props: { appendTo: "body" },
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Timezone required"
          }
        ]
      }),
      createAutocompleteField("tags", "Tags", this.entity()?.tags, [], () => {
      }, {
        name: "tags",
        props: { multiple: true, field: "name" }
      }),
      ...!this.createMode() ? [
        createTextField("pin", "Pin", this.entity()?.pin, {
          name: "pin",
          disabled: true
        })
      ] : []
    ];
  }
  loadCompanyGroups() {
    const clientDetails = this.entity();
    const ownerId = clientDetails?.owner?.id ?? this.ownerId();
    if (isNullOrUndefined(ownerId)) {
      this.companyGroups = [];
      this.companyGroupsLoaded.set(true);
      this.updateFormFields();
      return;
    }
    this.cacheService.getOrFetch(`company-groups-${ownerId}`, () => this.accountsService.listCompanyGroups(ownerId), this.cacheTTL).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return of({ items: [] });
    })).subscribe((data) => {
      this.companyGroups = [
        { value: DEFAULT_SYSTEM_ID, label: "None" },
        ...data.items.map((item) => ({
          label: item.name ?? "",
          value: item.id ?? ""
        })).sort((a, b) => a.label.localeCompare(b.label))
      ];
      this.companyGroupsLoaded.set(true);
      this.updateFormFields();
    });
  }
  submitChanges(clientDetails) {
    const client = this.entity();
    if (isNullOrUndefined(client))
      throw new Error("Client not found");
    return this.accountsService.updateClientDetails(client.id, clientDetails);
  }
  static \u0275fac = function ClientDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsComponent, selectors: [["app-client-details"]], inputs: { ownerId: [1, "ownerId"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 7, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-building", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions", "hideActions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click", "keydown.enter"], [3, "formSubmit", "formValidityChange", "formValueChange", "fields", "actions", "hideActions"]], template: function ClientDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Client Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientDetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Configure various client details.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ClientDetailsComponent_Conditional_10_Template, 1, 3, "app-dynamic-form", 7)(11, ClientDetailsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c04, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Building icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() || ctx.createMode() && ctx.formFields.length ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isFormEditable() && !ctx.createMode() ? 11 : -1);
    }
  }, dependencies: [GridComponent, DynamicFormComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsComponent, { className: "ClientDetailsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details/client-details.component.ts", lineNumber: 39 });
})();

// src/app/features/administration/components/clients/client-details/customize-client/customize-client.component.ts
var _c05 = ["customTemplate"];
var _c12 = (a0) => ({ "icon-primary": a0 });
function CustomizeClientComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275listener("click", function CustomizeClientComponent_Conditional_8_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Customize client");
  }
}
function CustomizeClientComponent_Conditional_11_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17);
    \u0275\u0275element(7, "img", 18);
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 21);
    \u0275\u0275listener("click", function CustomizeClientComponent_Conditional_11_For_1_Conditional_0_Template_span_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange(true, item_r5.imageUrl));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "span", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5 == null ? null : item_r5.key);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", item_r5 == null ? null : item_r5.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.imageCaption);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Edit image");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove image");
  }
}
function CustomizeClientComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeClientComponent_Conditional_11_For_1_Conditional_0_Template, 13, 5, "div", 12);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275conditional((item_r5 == null ? null : item_r5.imageUrl) ? 0 : -1);
  }
}
function CustomizeClientComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275repeaterCreate(0, CustomizeClientComponent_Conditional_11_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(2, "app-dynamic-form", 11);
    \u0275\u0275listener("formSubmit", function CustomizeClientComponent_Conditional_11_Template_app_dynamic_form_formSubmit_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.clientDetails());
    \u0275\u0275advance(2);
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function CustomizeClientComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columnsSignal())("showGridLines", false)("hideHeader", true);
  }
}
function CustomizeClientComponent_ng_template_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 23);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", details_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", details_r6.key || "Client image");
  }
}
function CustomizeClientComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const details_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", details_r6 == null ? null : details_r6.value, " ");
  }
}
function CustomizeClientComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomizeClientComponent_ng_template_13_Conditional_0_Template, 1, 2, "img", 23)(1, CustomizeClientComponent_ng_template_13_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const details_r6 = ctx.$implicit;
    \u0275\u0275conditional((details_r6 == null ? null : details_r6.imageUrl) ? 0 : 1);
  }
}
function CustomizeClientComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-image-editor", 24);
    \u0275\u0275listener("visibleChange", function CustomizeClientComponent_Conditional_15_Template_app_image_editor_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageEditorVisibleChange($event));
    })("croppedFile", function CustomizeClientComponent_Conditional_15_Template_app_image_editor_croppedFile_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", true)("fileUrl", ctx_r1.file);
  }
}
var CustomizeClientComponent = class _CustomizeClientComponent extends EntitySectionBaseComponent {
  logoTemplate;
  accountsService = inject(AccountsService);
  themesService = inject(ThemesService);
  utilsService = inject(UtilsService);
  apiUrlService = inject(ApiUrlService);
  clientDetails = computed(() => {
    const details = this.entity();
    if (!details)
      return [];
    return [
      {
        key: "Logo",
        value: "",
        imageUrl: `${this.apiUrlService.getCurrentApiUrl()}/accounts/clients/${details.id}/logo?size=large`,
        imageCaption: "The image will be resampled to 800 x 333 pixels and will be used on reports."
      },
      {
        key: "Web Logo",
        value: "",
        imageUrl: `${this.apiUrlService.getCurrentApiUrl()}/accounts/clients/${details.id}/logo?size=small`,
        imageCaption: "The image will be resampled to 240 x 100 pixels. For better results you should pre-scale your image in a graphics program before uploading."
      },
      {
        key: "Domains",
        value: isDefined(details.domains?.length) ? details.domains.join(", ") : "None"
      },
      {
        key: "Language",
        value: this.languages.find((l) => l.id === details.language)?.name ?? "None"
      },
      {
        key: "Theme",
        value: details?.theme?.name ?? "None"
      },
      {
        key: "Login Message",
        value: isDefined(details?.messages?.login) && details?.messages?.login !== "" ? details?.messages?.login : "None"
      }
    ];
  });
  languages = this.utilsService.getLanguages();
  themes = [];
  isImageEditorVisible = false;
  file;
  constructor() {
    super();
    effect(() => {
      const client = this.entity();
      if (client) {
        this.themesService.listThemes(client.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: (themes) => {
            this.themes = themes.items;
            this.updateFormFields();
          }
        });
      }
    });
    effect(() => {
      if (this.logoTemplate) {
        this.columnsSignal.set([
          { field: "key", header: "", transform: "uppercase" },
          { field: "value", header: "", cellTemplate: this.logoTemplate }
        ]);
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextAreaField("domains", "Domains", this.entity()?.domains?.join(", "), {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "domains"
      }),
      createDropdownField("language", "Language", this.languages.map((lang) => ({
        label: lang.name,
        value: lang.id
      })), this.entity()?.language, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select language",
        name: "language",
        props: {
          // Using 'body' to ensure proper overlay positioning and width
          // Alternative approaches with container elements can cause positioning issues
          appendTo: "body"
        }
      }),
      createDropdownField("theme", "Theme", [{ label: "Inherited", value: "inherited" }].concat(this.themes.map((theme3) => ({
        label: theme3.name,
        value: theme3.id
      }))), this.entity()?.theme?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select theme",
        name: "theme",
        props: {
          appendTo: "body"
        }
      }),
      {
        name: "messages",
        key: "messages",
        type: "group",
        fields: [
          createTextAreaField("login", "Login Message", this.entity()?.messages?.login, {
            layout: "horizontal",
            labelWidth: "1/3",
            name: "login",
            hint: "Markdown syntax is supported for styling text."
          })
        ]
      }
    ];
  }
  submitChanges(formData) {
    const currentClient = this.entity();
    if (!currentClient)
      return;
    this.accountsService.updateClientDetails(currentClient.id, formData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: () => this.isFormEditable.set(false),
      error: () => this.isFormEditable.set(true)
    });
  }
  onImageEditorVisibleChange(visible, file) {
    this.isImageEditorVisible = visible;
    this.file = file;
  }
  saveFile(file) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    const formData = new FormData();
    formData.append("logo", file);
  }
  updateLogo() {
    return;
  }
  static \u0275fac = function CustomizeClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomizeClientComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomizeClientComponent, selectors: [["app-customize-client"]], viewQuery: function CustomizeClientComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.logoTemplate = _t.first);
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 8, consts: [["customTemplate", ""], ["aria-label", "Client Customization", 1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "custom-icon-svg", "w-[2.5rem]", "h-[2.5rem]", 3, "ngClass"], ["role", "heading", "aria-level", "2", 1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [3, "visible", "fileUrl"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["for", "logo", 1, "w-1/3", "flex-shrink-0"], [1, "flex", "flex-col", "w-full"], [1, "flex-grow-1"], [1, "flex", "justify-between"], [1, "flex", "flex-col"], ["alt", "Client logo", 1, "max-w-[150px]", "mb-2", 3, "src"], [1, "opacity-50"], [1, "flex", "flex-row", "gap-2"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-xl", 3, "click"], [1, "pi", "pi-times", "action", "hover", "!text-xl"], [1, "max-w-[150px]", 3, "src", "alt"], [3, "visibleChange", "croppedFile", "visible", "fileUrl"]], template: function CustomizeClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 3);
      \u0275\u0275element(3, "use");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h2", 6);
      \u0275\u0275text(7, "Customize");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, CustomizeClientComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "When users visit one of the domains below, the software will be customized with the following settings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, CustomizeClientComponent_Conditional_11_Template, 3, 2)(12, CustomizeClientComponent_Conditional_12_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CustomizeClientComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CustomizeClientComponent_Conditional_15_Template, 1, 2, "app-image-editor", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c12, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Paint roller icon");
      \u0275\u0275advance();
      \u0275\u0275attribute("href", "assets/sprites/sprite.svg#paint-roller");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 11 : 12);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isImageEditorVisible ? 15 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    DynamicFormComponent,
    GridComponent,
    ImageEditorComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomizeClientComponent, { className: "CustomizeClientComponent", filePath: "src/app/features/administration/components/clients/client-details/customize-client/customize-client.component.ts", lineNumber: 43 });
})();

// src/app/features/administration/components/clients/client-details/client-address/client-address.component.ts
var _c06 = (a0) => ({ "icon-primary": a0 });
function ClientAddressComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function ClientAddressComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit address");
  }
}
function ClientAddressComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function ClientAddressComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function ClientAddressComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.address())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientAddressComponent = class _ClientAddressComponent extends EntitySectionBaseComponent {
  accountsService = inject(AccountsService);
  cacheService = inject(RequestCacheService);
  http = inject(HttpClient);
  countries = signal([]);
  countriesLoaded = computed(() => this.countries().length > 0);
  isFormEditable = signal(false);
  address = computed(() => {
    const clientDetails = this.entity();
    if (isNullOrUndefined(clientDetails) || !this.countriesLoaded())
      return [];
    const address = clientDetails.address;
    return [
      {
        key: "Address",
        value: isString(address?.address) ? address.address : "None"
      },
      {
        key: "City",
        value: isString(address?.city) ? address.city : "None"
      },
      {
        key: "State",
        value: isString(address?.state) ? address.state : "None"
      },
      {
        key: "Code",
        value: isString(address?.code) ? address.code : "None"
      },
      {
        key: "Country",
        value: this.findCountryLabel(address?.country ?? void 0)
      }
    ];
  });
  constructor() {
    super();
    this.loadCountries();
    effect(() => {
      if (this.isFormEditable()) {
        this.updateFormFields();
      }
    });
  }
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  updateFormFields() {
    const client = this.entity();
    this.formFields = [
      createTextField("address", "Address", client?.address?.address, {
        name: "address",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Address is required"
          }
        ]
      }),
      createTextField("city", "City", client?.address?.city, {
        name: "city",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "City is required"
          }
        ]
      }),
      createTextField("state", "State", client?.address?.state, {
        name: "state",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "State is required"
          }
        ]
      }),
      createTextField("code", "Code", client?.address?.code, {
        name: "code",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Code is required"
          }
        ]
      }),
      createDropdownField("country", "Country", this.countries(), client?.address?.country, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select country",
        name: "country",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(addressData) {
    const client = this.entity();
    if (!client) {
      throw new Error("Client is required");
    }
    return this.accountsService.updateClientDetails(client.id, {
      address: addressData.address
    });
  }
  loadCountries() {
    this.cacheService.getOrFetch("countries", () => this.http.get("assets/docs/countries.json")).pipe(take(1)).subscribe((countries) => {
      if (isDefined(countries) && countries.length > 0) {
        this.countries.set(countries.map((c) => ({ label: c.name, value: c.code })));
      }
    });
  }
  findCountryLabel(countryCode) {
    if (isNullOrUndefined(countryCode) || !this.countriesLoaded())
      return "None";
    const country = this.countries().find((c) => c.value === countryCode);
    return country?.label ?? "None";
  }
  onSubmit(formGroup) {
    if (formGroup.invalid) {
      return;
    }
    this.submitChanges({ address: formGroup.value }).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.entityChange.emit(response);
      },
      error: (error) => {
        console.error("Failed to save address", error);
      }
    });
  }
  static \u0275fac = function ClientAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientAddressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientAddressComponent, selectors: [["app-client-address"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-id-card", "!text-[2.5rem]", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function ClientAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientAddressComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following address information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ClientAddressComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientAddressComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c06, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "id card icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [DynamicFormComponent, GridComponent, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientAddressComponent, { className: "ClientAddressComponent", filePath: "src/app/features/administration/components/clients/client-details/client-address/client-address.component.ts", lineNumber: 34 });
})();

// src/app/features/administration/components/clients/client-details/client-settings/client-settings.component.ts
function ClientSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function ClientSettingsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit client settings");
  }
}
function ClientSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function ClientSettingsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function ClientSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientSettingsComponent = class _ClientSettingsComponent extends EntitySectionBaseComponent {
  adminTreeState = inject(AdminStateService);
  accountsService = inject(AccountsService);
  entitiesService = inject(EntitiesService);
  errorMessage = signal(null);
  selectOptions = signal({});
  selectOptionsLoaded = computed(() => Object.keys(this.selectOptions()).length > 0);
  clientDetails = computed(() => {
    const clientDetails = this.entity();
    if (isNullOrUndefined(clientDetails))
      return [];
    return [
      {
        key: "Map Set",
        value: clientDetails.mapSet?.name ?? "None"
      },
      {
        key: "Device Types",
        value: isEmpty(clientDetails.availableDeviceTypes) ? "None" : clientDetails.availableDeviceTypes?.map((deviceType) => deviceType.name).join(", ")
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  distributorDetails = computed(() => this.adminTreeState.vendorDistributor());
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine || this.isSubmitting()
    }
  ];
  constructor() {
    super();
    effect(() => {
      const entityDetails = this.entity();
      if (entityDetails) {
        const distributorDetails = this.getDistributorDetails();
        this.loadSelectOptions(distributorDetails);
      }
    });
    effect(() => {
      this.selectOptions();
      if (this.isFormEditable()) {
        this.updateFormFields();
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("defaultMapSet", "Map Set", this.selectOptions()["mapSets"] ?? [], this.entity()?.mapSet?.id, {
        name: "defaultMapSet",
        validations: []
      }),
      createMultiselectField("availableDeviceTypes", "Device Types", this.entity()?.availableDeviceTypes?.map((dt) => dt.id) ?? [], this.selectOptions()["deviceTypes"] ?? [], {
        name: "availableDeviceTypes",
        validations: []
      })
    ];
  }
  loadSelectOptions(distributor) {
    const clientDetails = this.entity();
    if (isNullOrUndefined(clientDetails?.id) || !clientDetails.owner?.id) {
      this.selectOptions.set({});
      return;
    }
    combineLatest([
      this.entitiesService.listDeviceTypes(clientDetails.owner.id),
      this.entitiesService.listEmailProviders(clientDetails.owner.id),
      this.entitiesService.listMapSets(clientDetails.owner.id, 0, 100, "name", "state!=deleted")
    ]).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return of([
        { items: [] },
        { items: [] },
        { items: [] }
      ]);
    })).subscribe(([deviceTypes, emailProviders, mapSets]) => {
      const deviceTypesFiltered = deviceTypes.items.filter((item) => item.state === DeviceTypeListItem.StateEnum.Active);
      this.selectOptions.set({
        deviceTypes: this.createUniqueOptions(deviceTypesFiltered),
        emailProviders: this.createUniqueOptions(emailProviders.items, distributor?.availableEmailProviders ?? []),
        mapSets: this.createUniqueOptions(mapSets.items, distributor?.availableMapSets ?? [])
      });
    });
  }
  getDistributorDetails() {
    return this.adminTreeState.vendorDistributor();
  }
  submitChanges(settings) {
    const client = this.entity();
    if (!client) {
      throw new Error("Client is required");
    }
    return this.accountsService.updateClientDetails(client.id, settings);
  }
  createUniqueOptions(items, additionalItems = []) {
    const uniqueMap = /* @__PURE__ */ new Map();
    items.forEach((item) => {
      if (isDefined(item) && item.id) {
        uniqueMap.set(item.id, item);
      }
    });
    additionalItems.forEach((item) => {
      if (isDefined(item) && item.id) {
        uniqueMap.set(item.id, item);
      }
    });
    return Array.from(uniqueMap.values()).map((item) => ({
      label: item.name ?? "",
      value: item.id
    })).sort((a, b) => a.label.localeCompare(b.label));
  }
  onSubmit(formGroup) {
    if (!this.entity())
      return;
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length === 0) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    this.submitChanges(dirtyValues).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.entityChange.emit(response);
      },
      error: () => {
        this.errorMessage.set("Failed to update settings");
        this.isSubmitting.set(false);
      }
    });
  }
  static \u0275fac = function ClientSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientSettingsComponent, selectors: [["app-client-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-cog", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function ClientSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, ClientSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Cog icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientSettingsComponent, { className: "ClientSettingsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-settings/client-settings.component.ts", lineNumber: 37 });
})();

// src/app/features/administration/components/clients/client-details/client-notification-settings/client-notification-settings.component.ts
function ClientNotificationSettingsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function ClientNotificationSettingsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit notification settings");
  }
}
function ClientNotificationSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function ClientNotificationSettingsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function ClientNotificationSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientNotificationSettingsComponent = class _ClientNotificationSettingsComponent extends EntitySectionBaseComponent {
  entitiesService = inject(EntitiesService);
  accountsService = inject(AccountsService);
  utilityService = inject(UtilityService);
  emailProvidersLoaded = signal(false);
  emailProviders = [
    { label: DEFAULT_EMAIL_PROVIDER.name, value: DEFAULT_EMAIL_PROVIDER.id }
  ];
  clientDetails = computed(() => {
    const clientDetails = this.entity();
    if (!isDefined(clientDetails))
      return [];
    const emailProvider = clientDetails.emailProvider;
    const providerName = isDefined(emailProvider) && hasProperty(emailProvider, "name") && isString(emailProvider.name) ? emailProvider.name : "None";
    return [
      {
        key: "Email Provider",
        value: providerName
      }
    ];
  });
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    effect(() => {
      const distributorDetails = this.entity();
      if (distributorDetails && this.emailProvidersLoaded()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.fetchEmailProviders();
  }
  fetchEmailProviders() {
    const client = this.entity();
    if (!isDefined(client) || !isString(client.id)) {
      console.warn("Invalid client data");
      return;
    }
    const filters = { state: { value: "active", operator: "=" } };
    const rqlFilter = this.utilityService.constructRqlFilter(filters);
    this.entitiesService.listEmailProviders(client.id, 0, DEFAULT_LIST_SIZE, "name", rqlFilter).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((emailProviders) => {
      this.emailProviders = [
        ...this.emailProviders,
        ...emailProviders.items.map((emailProvider) => ({
          label: isDefined(emailProvider.name) ? emailProvider.name : "Unknown",
          value: emailProvider.id
        }))
      ];
      this.emailProvidersLoaded.set(true);
    });
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("emailProvider", "Email Provider", this.emailProviders, this.entity()?.emailProvider?.id, {
        layout: "horizontal",
        labelWidth: "1/3",
        name: "emailProvider",
        props: {
          appendTo: "body"
        }
      })
    ];
  }
  submitChanges(formData) {
    const client = this.entity();
    if (isNullOrUndefined(client))
      return;
    this.accountsService.updateClientDetails(client.id, formData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  static \u0275fac = function ClientNotificationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientNotificationSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientNotificationSettingsComponent, selectors: [["app-client-notification-settings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-at", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function ClientNotificationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Notification Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientNotificationSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ClientNotificationSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientNotificationSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "At icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientNotificationSettingsComponent, { className: "ClientNotificationSettingsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-notification-settings/client-notification-settings.component.ts", lineNumber: 38 });
})();

// src/app/features/administration/components/clients/client-details/client-external-authentication/client-external-authentication.component.ts
function ClientExternalAuthenticationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275listener("click", function ClientExternalAuthenticationComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit External Authentication");
  }
}
function ClientExternalAuthenticationComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-panel");
  }
}
function ClientExternalAuthenticationComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-panel")(1, "div", 18)(2, "div");
    \u0275\u0275element(3, "span", 19);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "key icon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Delete Issuer");
  }
}
function ClientExternalAuthenticationComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 11);
    \u0275\u0275text(2, "Issuers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275template(5, ClientExternalAuthenticationComponent_Conditional_10_Conditional_5_Template, 1, 0, "p-panel");
    \u0275\u0275repeaterCreate(6, ClientExternalAuthenticationComponent_Conditional_10_For_7_Template, 8, 3, "p-panel", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "p-button", 14);
    \u0275\u0275listener("click", function ClientExternalAuthenticationComponent_Conditional_10_Template_p_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showModal = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "p-button", 16);
    \u0275\u0275listener("onClick", function ClientExternalAuthenticationComponent_Conditional_10_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isFormEditable.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-button", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.oidc().length === 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.oidc());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
  }
}
function ClientExternalAuthenticationComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientExternalAuthenticationComponent = class _ClientExternalAuthenticationComponent extends EntitySectionBaseComponent {
  accountsService = inject(AccountsService);
  oidc = signal([]);
  clientDetails = computed(() => {
    const clientDetails = this.entity();
    if (!clientDetails)
      return [];
    const authProviders = Object.entries(clientDetails.oidc || {}).map(([_, value]) => value.name).filter(Boolean);
    return [
      {
        key: "Issuers",
        value: authProviders.length > 0 ? authProviders.join(", ") : "None"
      }
    ];
  });
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
  showModal = false;
  constructor() {
    super();
    effect(() => {
      const clientDetails = this.entity();
      if (clientDetails) {
        this.oidc.set(Object.values(clientDetails.oidc || {}));
        this.updateFormFields();
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", "", {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ],
        hint: "A descriptive name for this issuer. It will be displayed on a button on the sign in screen."
      }),
      createTextField("issuer", "Issuer", "", {
        name: "issuer",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Issuer is required"
          }
        ],
        hint: "The issuer endpoint, i.e. https://accounts.google.com/"
      }),
      createTextField("clientId", "Client ID", "", {
        name: "clientId",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Client ID is required"
          }
        ],
        hint: "The Client ID supplied by your Open ID Connect issuer."
      }),
      createPasswordField("clientSecret", "Client Secret", {
        name: "clientSecret",
        hint: "The client secret is OPTIONAL and is not required for standard web or mobile sign in."
      })
    ];
  }
  onFormSubmit(data) {
    this.showModal = false;
    this.oidc.update((oidc) => [...oidc, data.value]);
  }
  save() {
    const client = this.entity();
    if (isNullOrUndefined(client))
      return;
    this.accountsService.updateClientDetails(client.id, { oidc: { "": this.oidc() } }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  onClose() {
    this.showModal = false;
  }
  static \u0275fac = function ClientExternalAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientExternalAuthenticationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientExternalAuthenticationComponent, selectors: [["app-client-external-authentication"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-key", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [1, "p-field", "p-2", "flex", "align-items-center", "gap-2"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], ["header", "Issuer Details", 3, "close", "formSubmit", "visible", "fields", "actions"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], ["for", "logo", 1, "w-1/3", "flex-shrink-0"], [1, "flex", "flex-col", "justify-end", "w-full"], [1, "flex-grow-1", "flex", "flex-col"], ["severity", "secondary", "label", "Add", 1, "self-end", "p-2", 3, "click"], [1, "flex", "justify-end", "gap-2", "mt-4"], ["type", "button", "label", "Cancel", "severity", "secondary", 3, "onClick"], ["type", "submit", "label", "Save", "severity", "primary", 3, "disabled"], [1, "flex", "flex-row", "justify-between"], [1, "pi", "pi-key", "!text-xl"], [1, "px-4"], [1, "pi", "pi-trash", "action", "hover", "!text-xl"]], template: function ClientExternalAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "External Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientExternalAuthenticationComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "To authenticate with an external OpenId Connect issuer, add the issuer below.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, ClientExternalAuthenticationComponent_Conditional_10_Template, 12, 2, "div", 7)(11, ClientExternalAuthenticationComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-dynamic-form-modal", 9);
      \u0275\u0275listener("close", function ClientExternalAuthenticationComponent_Template_app_dynamic_form_modal_close_12_listener() {
        return ctx.onClose();
      })("formSubmit", function ClientExternalAuthenticationComponent_Template_app_dynamic_form_modal_formSubmit_12_listener($event) {
        return ctx.onFormSubmit($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "key icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275property("visible", ctx.showModal)("fields", ctx.formFields)("actions", ctx.actions);
    }
  }, dependencies: [
    GridComponent,
    DataViewModule,
    ButtonModule,
    Button,
    PanelModule,
    Panel,
    DynamicFormModalComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientExternalAuthenticationComponent, { className: "ClientExternalAuthenticationComponent", filePath: "src/app/features/administration/components/clients/client-details/client-external-authentication/client-external-authentication.component.ts", lineNumber: 36 });
})();

// src/app/shared/services/unit-formatter.service.ts
var UnitFormatterService = class _UnitFormatterService {
  formatterMap = {
    dateUnit: UnitFormatters.formatDateUnit,
    timeUnit: UnitFormatters.formatTimeUnit,
    distanceUnit: UnitFormatters.formatDistanceUnit,
    altitudeUnit: UnitFormatters.formatDistanceUnit,
    speedUnit: UnitFormatters.formatSpeedUnit,
    volumeUnit: UnitFormatters.formatVolumeUnit,
    weightUnit: UnitFormatters.formatWeightUnit,
    areaUnit: UnitFormatters.formatAreaUnit,
    temperatureUnit: UnitFormatters.formatTemperatureUnit
  };
  /**
   * Formats a measurement unit code to a human-readable format
   * @param unit - The measurement unit code
   * @param unitType - The type of measurement unit (date, time, distance, etc.)
   * @returns Formatted human-readable string
   */
  formatMeasurementUnit(unit, unitType) {
    if (isNullOrUndefined(unit))
      return "None";
    const formatter = hasProperty(this.formatterMap, unitType) ? this.formatterMap[unitType] : (u) => u;
    return formatter(unit);
  }
  /**
   * Helper method to capitalize the first letter of a string
   */
  capitalizeFirstLetter(str) {
    if (!str)
      return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static \u0275fac = function UnitFormatterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitFormatterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UnitFormatterService, factory: _UnitFormatterService.\u0275fac, providedIn: "root" });
};

// src/app/features/administration/components/clients/client-details/client-measurement-units/client-measurement-units.component.ts
function ClientMeasurementUnitsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function ClientMeasurementUnitsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit client settings");
  }
}
function ClientMeasurementUnitsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function ClientMeasurementUnitsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("fields", ctx_r1.formFields)("actions", ctx_r1.actions);
  }
}
function ClientMeasurementUnitsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.clientDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var ClientMeasurementUnitsComponent = class _ClientMeasurementUnitsComponent extends EntitySectionBaseComponent {
  accountsService = inject(AccountsService);
  entitiesService = inject(EntitiesService);
  adminTreeState = inject(AdminStateService);
  unitFormatter = inject(UnitFormatterService);
  selectOptionsLoaded = signal(false);
  selectOptions = {};
  clientDetails = computed(() => {
    const clientDetails = this.entity()?.measurementUnits;
    if (!clientDetails)
      return [];
    return [
      {
        key: "Date",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.dateUnit, "dateUnit") ?? "None"
      },
      {
        key: "Time",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.timeUnit, "timeUnit") ?? "None"
      },
      {
        key: "Distance",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.distanceUnit, "distanceUnit") ?? "None"
      },
      {
        key: "Altitude",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.altitudeUnit, "altitudeUnit") ?? "None"
      },
      {
        key: "Speed",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.speedUnit, "speedUnit") ?? "None"
      },
      {
        key: "Volume",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.volumeUnit, "volumeUnit") ?? "None"
      },
      {
        key: "Weight",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.weightUnit, "weightUnit") ?? "None"
      },
      {
        key: "Area",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.areaUnit, "areaUnit") ?? "None"
      },
      {
        key: "Temperature",
        value: this.unitFormatter.formatMeasurementUnit(clientDetails.temperatureUnit, "temperatureUnit") ?? "None"
      }
    ];
  });
  distributorDetails = computed(() => this.adminTreeState.vendorDistributor());
  constructor() {
    super();
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
    effect(() => {
      const clientDetails = this.entity();
      if (clientDetails) {
        this.loadSelectOptions();
      }
    });
  }
  updateFormFields() {
    this.formFields = [
      createDropdownField("dateUnit", "Date", this.selectOptions?.["dateUnit"] ?? [], this.entity()?.measurementUnits?.dateUnit, {
        name: "dateUnit",
        validations: []
      }),
      createDropdownField("timeUnit", "Time", this.selectOptions?.["timeUnit"] ?? [], this.entity()?.measurementUnits?.timeUnit, {
        name: "timeUnit",
        validations: []
      }),
      createDropdownField("distanceUnit", "Distance", this.selectOptions?.["distanceUnit"] ?? [], this.entity()?.measurementUnits?.distanceUnit, {
        name: "distanceUnit",
        validations: []
      }),
      createDropdownField("altitudeUnit", "Altitude", this.selectOptions?.["altitudeUnit"] ?? [], this.entity()?.measurementUnits?.altitudeUnit, {
        name: "altitudeUnit",
        validations: []
      }),
      createDropdownField("speedUnit", "Speed", this.selectOptions?.["speedUnit"] ?? [], this.entity()?.measurementUnits?.speedUnit, {
        name: "speedUnit",
        validations: []
      }),
      createDropdownField("volumeUnit", "Volume", this.selectOptions?.["volumeUnit"] ?? [], this.entity()?.measurementUnits?.volumeUnit, {
        name: "volumeUnit",
        validations: []
      }),
      createDropdownField("weightUnit", "Weight", this.selectOptions?.["weightUnit"] ?? [], this.entity()?.measurementUnits?.weightUnit, {
        name: "weightUnit",
        validations: []
      }),
      createDropdownField("areaUnit", "Area", this.selectOptions?.["areaUnit"] ?? [], this.entity()?.measurementUnits?.areaUnit, {
        name: "areaUnit",
        validations: []
      }),
      createDropdownField("temperatureUnit", "Temperature", this.selectOptions?.["temperatureUnit"] ?? [], this.entity()?.measurementUnits?.temperatureUnit, {
        name: "temperatureUnit",
        validations: []
      })
    ];
  }
  loadSelectOptions() {
    const clientDetails = this.entity();
    if (isNullOrUndefined(clientDetails?.id)) {
      this.selectOptions = {};
      this.selectOptionsLoaded.set(true);
      this.updateFormFields();
      return;
    }
    this.entitiesService.getLookups("measurementUnits").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      const transformedOptions = {};
      Object.entries(result).forEach(([key, values]) => {
        transformedOptions[key] = values.map((value) => ({
          value,
          label: this.unitFormatter.formatMeasurementUnit(value, key)
        }));
      });
      this.selectOptions = transformedOptions;
      this.selectOptionsLoaded.set(true);
      this.updateFormFields();
    });
  }
  submitChanges(formData) {
    const client = this.entity();
    if (isNullOrUndefined(client))
      return;
    this.accountsService.updateClientDetails(client.id, { measurementUnits: formData }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.isFormEditable.set(false);
      },
      error: () => {
        this.isFormEditable.set(true);
      }
    });
  }
  static \u0275fac = function ClientMeasurementUnitsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientMeasurementUnitsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientMeasurementUnitsComponent, selectors: [["app-client-measurement-units"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 3, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-gauge", "!text-[2.5rem]"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function ClientMeasurementUnitsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Measurement Units");
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ClientMeasurementUnitsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Customize the measurement units for this client.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, ClientMeasurementUnitsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientMeasurementUnitsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", "Gauge icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [GridComponent, DynamicFormComponent, CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientMeasurementUnitsComponent, { className: "ClientMeasurementUnitsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-measurement-units/client-measurement-units.component.ts", lineNumber: 24 });
})();

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c07 = ["header"];
var _c13 = ["title"];
var _c2 = ["subtitle"];
var _c3 = ["content"];
var _c4 = ["footer"];
var _c5 = ["*", [["p-header"]], [["p-footer"]]];
var _c6 = ["*", "p-header", "p-footer"];
function Card_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Card_div_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Card_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.header);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, Card_div_3_ng_container_1_Template, 2, 1, "ng-container", 10)(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.header && !ctx_r0._titleTemplate && !ctx_r0.titleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate || ctx_r0._titleTemplate);
  }
}
function Card_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subheader);
  }
}
function Card_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, Card_div_4_ng_container_1_Template, 2, 1, "ng-container", 10)(2, Card_div_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subheader && !ctx_r0._subtitleTemplate && !ctx_r0.subtitleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate || ctx_r0._subtitleTemplate);
  }
}
function Card_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Card_div_8_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-card {
    background: ${dt("card.background")};
    color: ${dt("card.color")};
    box-shadow: ${dt("card.shadow")};
    border-radius: ${dt("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${dt("card.caption.gap")};
}

.p-card-body {
    padding: ${dt("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("card.body.gap")};
}

.p-card-title {
    font-size: ${dt("card.title.font.size")};
    font-weight: ${dt("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${dt("card.subtitle.color")};
}
`;
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = class _CardStyle extends BaseStyle {
  name = "card";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CardStyle_BaseFactory;
    return function CardStyle_Factory(__ngFactoryType__) {
      return (\u0275CardStyle_BaseFactory || (\u0275CardStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CardStyle)))(__ngFactoryType__ || _CardStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CardStyle,
    factory: _CardStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardStyle, [{
    type: Injectable
  }], null, null);
})();
var CardClasses;
(function(CardClasses2) {
  CardClasses2["root"] = "p-card";
  CardClasses2["header"] = "p-card-header";
  CardClasses2["body"] = "p-card-body";
  CardClasses2["caption"] = "p-card-caption";
  CardClasses2["title"] = "p-card-title";
  CardClasses2["subtitle"] = "p-card-subtitle";
  CardClasses2["content"] = "p-card-content";
  CardClasses2["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var Card = class _Card extends BaseComponent {
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!equals(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _headerTemplate;
  _titleTemplate;
  _subtitleTemplate;
  _contentTemplate;
  _footerTemplate;
  _style = signal(null);
  _componentStyle = inject(CardStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "title":
          this._titleTemplate = item.template;
          break;
        case "subtitle":
          this._subtitleTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Card_BaseFactory;
    return function Card_Factory(__ngFactoryType__) {
      return (\u0275Card_BaseFactory || (\u0275Card_BaseFactory = \u0275\u0275getInheritedFactory(_Card)))(__ngFactoryType__ || _Card);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c07, 4);
        \u0275\u0275contentQuery(dirIndex, _c13, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subtitleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([CardStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c6,
    decls: 9,
    vars: 10,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-card-header", 4, "ngIf"], [1, "p-card-body"], ["class", "p-card-title", 4, "ngIf"], ["class", "p-card-subtitle", 4, "ngIf"], [1, "p-card-content"], [4, "ngTemplateOutlet"], ["class", "p-card-footer", 4, "ngIf"], [1, "p-card-header"], [1, "p-card-title"], [4, "ngIf"], [1, "p-card-subtitle"], [1, "p-card-footer"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c5);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, Card_div_1_Template, 3, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Card_div_3_Template, 3, 2, "div", 3)(4, Card_div_4_Template, 3, 2, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275projection(6);
        \u0275\u0275template(7, Card_ng_container_7_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, Card_div_8_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-card p-component")("ngStyle", ctx._style());
        \u0275\u0275attribute("data-pc-name", "card");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.header || ctx.titleTemplate || ctx._titleTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subheader || ctx.subtitleTemplate || ctx._subtitleTemplate);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div [ngClass]="'p-card p-component'" [ngStyle]="_style()" [class]="styleClass" [attr.data-pc-name]="'card'">
            <div class="p-card-header" *ngIf="headerFacet || headerTemplate || _headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            </div>
            <div class="p-card-body">
                <div class="p-card-title" *ngIf="header || titleTemplate || _titleTemplate">
                    <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                    <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
                </div>
                <div class="p-card-subtitle" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                    <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                    <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
                </div>
                <div class="p-card-content">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
                <div class="p-card-footer" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CardStyle]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    titleTemplate: [{
      type: ContentChild,
      args: ["title", {
        descendants: false
      }]
    }],
    subtitleTemplate: [{
      type: ContentChild,
      args: ["subtitle", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static \u0275fac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CardModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Card, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [Card, SharedModule],
      exports: [Card, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-timeline.mjs
var _c08 = ["content"];
var _c14 = ["opposite"];
var _c22 = ["marker"];
var _c32 = (a0) => ({
  $implicit: a0
});
function Timeline_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Timeline_div_0_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c32, event_r1));
  }
}
function Timeline_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "marker");
  }
}
function Timeline_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function Timeline_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, Timeline_div_0_ng_container_2_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275template(4, Timeline_div_0_ng_container_4_Template, 2, 4, "ng-container", 6)(5, Timeline_div_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, Timeline_div_0_div_7_Template, 1, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275template(9, Timeline_div_0_ng_container_9_Template, 1, 0, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "event");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "opposite");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.oppositeTemplate || ctx_r1._oppositeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c32, event_r1));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "separator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngIfElse", marker_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !last_r3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c32, event_r1));
  }
}
var theme2 = ({
  dt
}) => `
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${dt("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${dt("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${dt("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${dt("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${dt("timeline.event.marker.border.color")};
    border-radius: ${dt("timeline.event.marker.border.radius")};
    width: ${dt("timeline.event.marker.size")};
    height: ${dt("timeline.event.marker.size")};
    background: ${dt("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${dt("timeline.event.marker.content.border.radius")};
    width: ${dt("timeline.event.marker.content.size")};
    height:${dt("timeline.event.marker.content.size")};
    background: ${dt("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt("timeline.event.marker.border.radius")};
    box-shadow: ${dt("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${dt("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${dt("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${dt("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`;
var classes2 = {
  root: ({
    props
  }) => ["p-timeline p-component", "p-timeline-" + props.align, "p-timeline-" + props.layout],
  event: "p-timeline-event",
  eventOpposite: "p-timeline-event-opposite",
  eventSeparator: "p-timeline-event-separator",
  eventMarker: "p-timeline-event-marker",
  eventConnector: "p-timeline-event-connector",
  eventContent: "p-timeline-event-content"
};
var TimelineStyle = class _TimelineStyle extends BaseStyle {
  name = "timeline";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimelineStyle_BaseFactory;
    return function TimelineStyle_Factory(__ngFactoryType__) {
      return (\u0275TimelineStyle_BaseFactory || (\u0275TimelineStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TimelineStyle)))(__ngFactoryType__ || _TimelineStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TimelineStyle,
    factory: _TimelineStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineStyle, [{
    type: Injectable
  }], null, null);
})();
var TimelineClasses;
(function(TimelineClasses2) {
  TimelineClasses2["root"] = "p-timeline";
  TimelineClasses2["event"] = "p-timeline-event";
  TimelineClasses2["eventOpposite"] = "p-timeline-event-opposite";
  TimelineClasses2["eventSeparator"] = "p-timeline-event-separator";
  TimelineClasses2["eventMarker"] = "p-timeline-event-marker";
  TimelineClasses2["eventConnector"] = "p-timeline-event-connector";
  TimelineClasses2["eventContent"] = "p-timeline-event-content";
})(TimelineClasses || (TimelineClasses = {}));
var Timeline = class _Timeline extends BaseComponent {
  /**
   * An array of events to display.
   * @group Props
   */
  value;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
   * @group Props
   */
  align = "left";
  /**
   * Orientation of the timeline.
   * @group Props
   */
  layout = "vertical";
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Custom opposite item template.
   * @group Templates
   */
  oppositeTemplate;
  /**
   * Custom marker template.
   * @group Templates
   */
  markerTemplate;
  templates;
  _contentTemplate;
  _oppositeTemplate;
  _markerTemplate;
  _componentStyle = inject(TimelineStyle);
  get hostClass() {
    return this.styleClass;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "opposite":
          this._oppositeTemplate = item.template;
          break;
        case "marker":
          this._markerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Timeline_BaseFactory;
    return function Timeline_Factory(__ngFactoryType__) {
      return (\u0275Timeline_BaseFactory || (\u0275Timeline_BaseFactory = \u0275\u0275getInheritedFactory(_Timeline)))(__ngFactoryType__ || _Timeline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Timeline,
    selectors: [["p-timeline"]],
    contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c08, 4);
        \u0275\u0275contentQuery(dirIndex, _c14, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.oppositeTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.markerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 24,
    hostBindings: function Timeline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-section", "root")("data-pc-name", "timeline");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.hostClass);
        \u0275\u0275classProp("p-timeline", true)("p-component", true)("p-timeline-left", ctx.align === "left")("p-timeline-right", ctx.align === "right")("p-timeline-top", ctx.align === "top")("p-timeline-bottom", ctx.align === "bottom")("p-timeline-alternate", ctx.align === "alternate")("p-timeline-vertical", ctx.layout === "vertical")("p-timeline-horizontal", ctx.layout === "horizontal");
      }
    },
    inputs: {
      value: "value",
      style: "style",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    features: [\u0275\u0275ProvidersFeature([TimelineStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["marker", ""], ["class", "p-timeline-event", 4, "ngFor", "ngForOf"], [1, "p-timeline-event"], [1, "p-timeline-event-opposite"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-timeline-event-separator"], [4, "ngIf", "ngIfElse"], ["class", "p-timeline-event-connector", 4, "ngIf"], [1, "p-timeline-event-content"], [1, "p-timeline-event-marker"], [1, "p-timeline-event-connector"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Timeline_div_0_Template, 10, 15, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.value);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div *ngFor="let event of value; let last = last" class="p-timeline-event" [attr.data-pc-section]="'event'">
            <div class="p-timeline-event-opposite" [attr.data-pc-section]="'opposite'">
                <ng-container *ngTemplateOutlet="oppositeTemplate || _oppositeTemplate; context: { $implicit: event }"></ng-container>
            </div>
            <div class="p-timeline-event-separator" [attr.data-pc-section]="'separator'">
                <ng-container *ngIf="markerTemplate || _markerTemplate; else marker">
                    <ng-container *ngTemplateOutlet="markerTemplate || _markerTemplate; context: { $implicit: event }"></ng-container>
                </ng-container>
                <ng-template #marker>
                    <div class="p-timeline-event-marker" [attr.data-pc-section]="'marker'"></div>
                </ng-template>
                <div *ngIf="!last" class="p-timeline-event-connector"></div>
            </div>
            <div class="p-timeline-event-content" [attr.data-pc-section]="'content'">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: event }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TimelineStyle],
      host: {
        "[class.p-timeline]": "true",
        "[class.p-component]": "true",
        "[class.p-timeline-left]": "align === 'left'",
        "[class.p-timeline-right]": "align === 'right'",
        "[class.p-timeline-top]": "align === 'top'",
        "[class.p-timeline-bottom]": "align === 'bottom'",
        "[class.p-timeline-alternate]": "align === 'alternate'",
        "[class.p-timeline-vertical]": "layout === 'vertical'",
        "[class.p-timeline-horizontal]": "layout === 'horizontal'",
        "[style]": "style",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'timeline'"
      }
    }]
  }], null, {
    value: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    oppositeTemplate: [{
      type: ContentChild,
      args: ["opposite", {
        descendants: false
      }]
    }],
    markerTemplate: [{
      type: ContentChild,
      args: ["marker", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static \u0275fac = function TimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TimelineModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Timeline, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [Timeline, SharedModule],
      exports: [Timeline, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/administration/services/audit-feed.service.ts
var GET_RECENT_AUDIT_FEED = gql`
  query FeedsGetRecentAuditFeed(
    $company: String!
    $entity: String
    $limit: Float
  ) {
    getRecentAuditFeed(company: $company, entity: $entity, limit: $limit) {
      id
      date
      owner {
        id
        name
        type
      }
      eventClass
      eventType
      user {
        id
        name
      }
      entity {
        id
        name
        type
      }
      changes {
        action
        field
        name
        oldValue {
          key
          value
        }
        newValue {
          key
          value
        }
      }
    }
  }
`;
var AUDIT_FEED_SUBSCRIPTION = gql`
  subscription FeedsGetRecentAuditFeed(
    $company: String!
    $entity: String
    $limit: Float
  ) {
    getRecentAuditFeed(company: $company, entity: $entity, limit: $limit) {
      id
      date
      owner {
        id
        name
        type
      }
      eventClass
      eventType
      user {
        id
        name
      }
      entity {
        id
        name
        type
      }
      changes {
        action
        field
        name
        oldValue {
          key
          value
        }
        newValue {
          key
          value
        }
      }
    }
  }
`;
var GET_AUDIT_FEED_PAGE = gql`
  query FeedsGetAuditFeedPage(
    $company: String!
    $entity: String
    $limit: Float
    $cursor: String
  ) {
    getAuditFeedPage(
      company: $company
      entity: $entity
      limit: $limit
      cursor: $cursor
    ) {
      items {
        id
        date
        owner {
          id
          name
          type
        }
        eventClass
        eventType
        user {
          id
          name
        }
        entity {
          id
          name
          type
        }
        changes {
          action
          field
          name
          oldValue {
            key
            value
          }
          newValue {
            key
            value
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
var AuditFeedService = class _AuditFeedService {
  apollo;
  http;
  apiUrlService;
  constructor(apollo, http, apiUrlService) {
    this.apollo = apollo;
    this.http = http;
    this.apiUrlService = apiUrlService;
  }
  /**
   * Subscribe to real-time audit feed updates using GraphQL subscription
   *
   * @param company Company ID to filter audit events
   * @param entity Optional entity ID to filter events by specific entity
   * @param limit Maximum number of events to return
   * @returns Observable that emits audit feed items as they occur
   */
  subscribeToAuditFeed(company, entity, limit = 5) {
    return this.apollo.subscribe({
      query: AUDIT_FEED_SUBSCRIPTION,
      variables: {
        company,
        entity,
        limit
      }
    }).pipe(map((result) => {
      return isDefined(result?.data?.getRecentAuditFeed) ? [...result.data.getRecentAuditFeed].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : [];
    }));
  }
  getRecentAuditFeedGraphQL(company, entity, limit = 20) {
    return this.apollo.query({
      query: GET_RECENT_AUDIT_FEED,
      variables: {
        company,
        entity,
        limit
      },
      fetchPolicy: "network-only"
    }).pipe(map((result) => {
      return [...result.data.getRecentAuditFeed].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }));
  }
  getMoreAuditFeedGraphQL(company, entity, cursor, limit = 20) {
    return this.apollo.query({
      query: GET_AUDIT_FEED_PAGE,
      variables: {
        company,
        entity,
        limit,
        cursor
        // This is the pagination cursor
      },
      fetchPolicy: "network-only"
      // Don't use cache for pagination
    }).pipe(map((result) => {
      const { items, pageInfo } = result.data.getAuditFeedPage;
      const sortedItems = [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return {
        items: sortedItems,
        hasNextPage: pageInfo.hasNextPage,
        endCursor: pageInfo.endCursor
      };
    }), catchError(() => {
      return of({ items: [], hasNextPage: false, endCursor: "" });
    }));
  }
  static \u0275fac = function AuditFeedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuditFeedService)(\u0275\u0275inject(Apollo), \u0275\u0275inject(HttpClient), \u0275\u0275inject(ApiUrlService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditFeedService, factory: _AuditFeedService.\u0275fac, providedIn: "root" });
};

// src/app/features/administration/components/clients/client-details/client-details-changes/client-details-changes.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.id;
function ClientDetailsChangesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function ClientDetailsChangesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Loading changes...");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "added");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", change_r2.name || change_r2.field, " '", change_r2.newValue.value, "' ");
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "changed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", change_r2.name || change_r2.field, " from '", change_r2.oldValue.value, "' to '", change_r2.newValue.value, "' ");
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "removed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", change_r2.name || change_r2.field, " '", change_r2.oldValue.value, "' ");
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" from '", change_r2.oldValue.value, "' ");
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" to '", change_r2.newValue.value, "' ");
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Conditional_1_Template, 1, 1)(2, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", change_r2.action, " ", change_r2.name || change_r2.field, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((change_r2 == null ? null : change_r2.oldValue == null ? null : change_r2.oldValue.value) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((change_r2 == null ? null : change_r2.newValue == null ? null : change_r2.newValue.value) ? 2 : -1);
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275template(2, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_2_Template, 3, 2)(3, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_3_Template, 3, 3)(4, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_4_Template, 3, 2)(5, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Case_5_Template, 3, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_31_0;
    const change_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_31_0 = change_r2.action) === "ADD" ? 2 : tmp_31_0 === "MODIFY" ? 3 : tmp_31_0 === "REMOVE" ? 4 : 5);
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_For_2_Template, 6, 1, "div", 23, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.changes);
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 22);
  }
}
function ClientDetailsChangesComponent_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "p-divider", 15);
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17)(12, "div", 18)(13, "div", 19);
    \u0275\u0275text(14, " User ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ClientDetailsChangesComponent_For_5_For_5_Conditional_20_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, ClientDetailsChangesComponent_For_5_For_5_Conditional_21_Template, 1, 0, "p-divider", 22);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_25_r4 = ctx.$index;
    const \u0275$count_25_r5 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("pTooltip", \u0275\u0275pipeBind2(3, 9, ctx_r0.formatDateTime(item_r3.date), "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 12, ctx_r0.formatDateTime(item_r3.date), "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 15, item_r3.date, ctx_r0.timestamp()), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(item_r3.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3.eventType, " ", item_r3.entity.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.entity.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChanges(item_r3) ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_25_r4 === \u0275$count_25_r5 - 1) ? 21 : -1);
  }
}
function ClientDetailsChangesComponent_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 10);
  }
}
function ClientDetailsChangesComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275repeaterCreate(4, ClientDetailsChangesComponent_For_5_For_5_Template, 22, 18, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ClientDetailsChangesComponent_For_5_Conditional_6_Template, 1, 0, "p-divider", 10);
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const \u0275$index_17_r7 = ctx.$index;
    const \u0275$count_17_r8 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r6.formattedDate, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r6.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_17_r7 === \u0275$count_17_r8 - 1) ? 6 : -1);
  }
}
function ClientDetailsChangesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Loading more...");
    \u0275\u0275elementEnd()();
  }
}
function ClientDetailsChangesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No more changes to load");
    \u0275\u0275elementEnd();
  }
}
var ClientDetailsChangesComponent = class _ClientDetailsChangesComponent extends EntitySectionBaseComponent {
  auditService = inject(AuditFeedService);
  scrollDispatcher = inject(ScrollDispatcher);
  auditFeed = signal([]);
  loading = signal(false);
  error = signal(null);
  hasMoreData = signal(true);
  lastItemId;
  pageSize = 20;
  loadingMore = false;
  subscription = null;
  endCursor = null;
  groupedAuditFeed = signal([]);
  timestamp = signal(Date.now());
  constructor() {
    super();
    effect(() => {
      this.groupItemsByDate(this.auditFeed());
    });
    setInterval(() => {
      this.timestamp.set(Date.now());
    }, 6e4);
  }
  ngOnInit() {
    this.loadInitialData();
    this.scrollDispatcher.scrolled().pipe(debounceTime(200), filter(() => !this.loading() && !this.loadingMore && this.hasMoreData()), takeUntilDestroyed(this.destroyRef)).subscribe((scrollable) => {
      if (isDefined(scrollable?.getElementRef())) {
        const elementRef = scrollable.getElementRef().nativeElement;
        const scrollPosition = elementRef.scrollTop + elementRef.clientHeight;
        const scrollHeight = elementRef.scrollHeight;
        if (scrollHeight - scrollPosition < 300) {
          this.loadMore();
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadInitialData() {
    const clientId = this.entity()?.id;
    if (isNullOrUndefined(clientId)) {
      this.error.set("No client ID available");
      return;
    }
    const companyId = this.entity()?.owner?.id;
    if (isNullOrUndefined(companyId)) {
      this.error.set("No company ID available");
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    this.auditService.subscribeToAuditFeed(companyId, clientId, this.pageSize).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.auditFeed.set(data);
        if (data.length > 0) {
          this.lastItemId = data[data.length - 1].id;
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Failed to load audit feed", err);
        this.error.set("Failed to load changes history");
        this.loading.set(false);
      }
    });
  }
  loadMore() {
    if (this.loading() || this.loadingMore || !this.hasMoreData())
      return;
    const clientId = this.entity()?.id;
    const companyId = this.entity()?.owner?.id;
    if (isNullOrUndefined(clientId) || isNullOrUndefined(companyId))
      return;
    this.loading.set(true);
    this.loadingMore = true;
    this.auditService.getMoreAuditFeedGraphQL(companyId, clientId, this.endCursor ?? void 0, this.pageSize).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        if (result.items.length > 0) {
          this.endCursor = result.endCursor;
          this.hasMoreData.set(result.hasNextPage);
          this.auditFeed.update((feed) => [...feed, ...result.items]);
        } else {
          this.hasMoreData.set(false);
        }
        this.loading.set(false);
        this.loadingMore = false;
      },
      error: (err) => {
        console.error("Failed to load more audit feed items", err);
        this.loading.set(false);
        this.loadingMore = false;
      }
    });
  }
  getEventIcon(eventType) {
    switch (eventType) {
      case "CREATE":
        return "pi pi-plus-circle text-success";
      case "UPDATE":
        return "pi pi-pencil text-warning";
      case "DELETE":
        return "pi pi-trash text-danger";
      default:
        return "pi pi-info-circle text-info";
    }
  }
  formatDateTime(dateStr) {
    return dateStr.replace("T", " ").replace("Z", "");
  }
  hasChanges(item) {
    return isDefined(item.changes) && item.changes.length > 0;
  }
  updateFormFields() {
  }
  submitChanges(_clientDetails) {
  }
  groupItemsByDate(items) {
    const grouped = {};
    items.forEach((item) => {
      const date = new Date(this.formatDateTime(item.date));
      const dateKey = date.toISOString().split("T")[0];
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      if (isNullOrUndefined(grouped[dateKey])) {
        grouped[dateKey] = {
          date: dateKey,
          formattedDate,
          items: []
        };
      }
      grouped[dateKey].items.push(item);
    });
    const result = Object.values(grouped).sort((a, b) => b.date.localeCompare(a.date));
    this.groupedAuditFeed.set(result);
  }
  static \u0275fac = function ClientDetailsChangesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientDetailsChangesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientDetailsChangesComponent, selectors: [["app-client-details-changes"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 4, consts: [[1, "client-changes-container"], [1, "bg-red-100", "text-red-800", "p-3", "rounded-md", "mb-3"], [1, "loading-spinner"], ["itemSize", "100", "minBufferPx", "200", "maxBufferPx", "400", 1, "virtual-scroll-viewport"], [1, "loading-more"], [1, "text-center", "p-3"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl"], [1, "mt-2"], [1, "p-2"], [1, "text-xl", "font-medium"], ["styleClass", "mb-4"], [1, "flex", "gap-2", "mb-3"], [1, "flex", "flex-col"], [3, "pTooltip"], [1, "muted"], ["layout", "vertical"], [1, "feed-entry-details"], [1, "flex", "flex-wrap"], [1, "entry-text", "flex-1", "mr-3", "mb-1"], [1, "entry-title"], [1, "font-medium"], [1, "pl-2", "mt-1"], ["styleClass", "mb-3"], [1, "pt-1"], [1, "break-words"], [1, "pi", "pi-spin", "pi-spinner", "text-2xl"]], template: function ClientDetailsChangesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ClientDetailsChangesComponent_Conditional_1_Template, 2, 1, "div", 1)(2, ClientDetailsChangesComponent_Conditional_2_Template, 4, 0, "div", 2);
      \u0275\u0275elementStart(3, "cdk-virtual-scroll-viewport", 3);
      \u0275\u0275repeaterCreate(4, ClientDetailsChangesComponent_For_5_Template, 7, 2, null, null, _forTrack0);
      \u0275\u0275template(6, ClientDetailsChangesComponent_Conditional_6_Template, 4, 0, "div", 4)(7, ClientDetailsChangesComponent_Conditional_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() && ctx.auditFeed().length === 0 ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.groupedAuditFeed());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() && ctx.auditFeed().length > 0 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hasMoreData() && ctx.auditFeed().length > 0 ? 7 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    TimelineModule,
    ButtonModule,
    CardModule,
    TooltipModule,
    Tooltip,
    DividerModule,
    Divider,
    TimeAgoPipe,
    ScrollingModule,
    CdkFixedSizeVirtualScroll,
    CdkVirtualScrollViewport
  ], styles: ["\n\n.client-changes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: calc(100vh - 250px);\n  width: 100%;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 100%;\n}\n.loading-more[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n.date-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.feed-item[_ngcontent-%COMP%] {\n  transition: background-color 0.3s;\n}\n.feed-item.new-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_highlightNew 3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_highlightNew {\n  0% {\n    background-color: var(--highlight-bg);\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@media (max-width: 768px) {\n  .virtual-scroll-viewport[_ngcontent-%COMP%] {\n    height: calc(100vh - 180px);\n  }\n}\n/*# sourceMappingURL=client-details-changes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsChangesComponent, { className: "ClientDetailsChangesComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details-changes/client-details-changes.component.ts", lineNumber: 50 });
})();

// src/app/features/administration/factories/section-config.factory.ts
var SectionConfigBuilder = class _SectionConfigBuilder {
  entity;
  entityType;
  sections = [];
  constructor(entity, entityType) {
    this.entity = entity;
    this.entityType = entityType;
  }
  /**
   * Add a section to the builder
   */
  addSection(id, title, component, options, componentInputs) {
    this.sections.push({
      id,
      title,
      component,
      componentInputs: __spreadValues({
        entity: this.entity
      }, componentInputs ?? {}),
      category: options?.category ?? "information",
      order: options?.order ?? 0,
      visible: options?.visible,
      readonly: options?.readonly
    });
    return this;
  }
  /**
   * Build the final sections array
   */
  build() {
    return this.sections;
  }
  /**
   * Create a builder for distributor sections
   */
  static forDistributor(entity) {
    return new _SectionConfigBuilder(entity, "distributor");
  }
  /**
   * Create a builder for vendor sections
   */
  static forVendor(entity) {
    return new _SectionConfigBuilder(entity, "vendor");
  }
  /**
   * Create a builder for client sections
   */
  static forClient(entity) {
    return new _SectionConfigBuilder(entity, "client");
  }
  /**
   * Create standard distributor information sections
   */
  static createDistributorInformationSections(entity) {
    return _SectionConfigBuilder.forDistributor(entity).addSection("details", "Distributor Details", DistributorDetailsComponent).addSection("customize", "Customize Distributor", CustomizeDistributorComponent).addSection("address", "Distributor Address", DistributorAddressComponent).addSection("ssl-certificates", "SSL Certificates", DistributorSslCertificatesComponent).build();
  }
  /**
   * Create standard distributor settings sections
   */
  static createDistributorSettingsSections(entity) {
    return _SectionConfigBuilder.forDistributor(entity).addSection("settings", "Settings", DistributorSettingsComponent).addSection("notification-settings", "Notification Settings", DistributorNotificationSettingsComponent).addSection("external-authentication", "External Authentication", DistributorExternalAuthenticationComponent).build();
  }
  /**
   * Create standard vendor information sections
   */
  static createVendorInformationSections(entity) {
    return _SectionConfigBuilder.forVendor(entity).addSection("details", "Vendor Details", VendorDetailsComponent).addSection("customize", "Customize Vendor", CustomizeVendorComponent).addSection("address", "Vendor Address", VendorAddressComponent).build();
  }
  /**
   * Create standard vendor settings sections
   */
  static createVendorSettingsSections(entity) {
    return _SectionConfigBuilder.forVendor(entity).addSection("settings", "Settings", VendorSettingsComponent, {
      category: "settings",
      order: 10
    }).addSection("notification-settings", "Notification Settings", VendorNotificationSettingsComponent, {
      category: "settings",
      order: 20
    }).addSection("external-authentication", "External Authentication", VendorExternalAuthenticationComponent, {
      category: "settings",
      order: 30
    }).build();
  }
  /**
   * Create standard client information sections
   */
  static createClientInformationSections(entity) {
    return _SectionConfigBuilder.forClient(entity).addSection("details", "Client Details", ClientDetailsComponent).addSection("customize", "Customize Client", CustomizeClientComponent).addSection("address", "Client Address", ClientAddressComponent).build();
  }
  /**
   * Create standard client settings sections
   */
  static createClientSettingsSections(entity) {
    return _SectionConfigBuilder.forClient(entity).addSection("settings", "Settings", ClientSettingsComponent, {
      category: "settings",
      order: 10
    }).addSection("notification-settings", "Notification Settings", ClientNotificationSettingsComponent, {
      category: "settings",
      order: 20
    }).addSection("measurement-units", "Measurement Units", ClientMeasurementUnitsComponent, {
      category: "settings",
      order: 30
    }).addSection("external-authentication", "External Authentication", ClientExternalAuthenticationComponent, {
      category: "settings",
      order: 40
    }).build();
  }
  /**
   * Create standard client changes sections
   */
  static createClientChangesSections(entity) {
    return _SectionConfigBuilder.forClient(entity).addSection("changes", "Changes", ClientDetailsChangesComponent, {
      category: "feed",
      order: 10
    }).build();
  }
  /**
   * Create all sections for an entity type
   */
  static createSections(entity, entityType, sectionType) {
    if (entityType === "distributor") {
      if (sectionType === "information") {
        return _SectionConfigBuilder.createDistributorInformationSections(entity);
      } else if (sectionType === "settings") {
        return _SectionConfigBuilder.createDistributorSettingsSections(entity);
      }
    } else if (entityType === "vendor") {
      if (sectionType === "information") {
        return _SectionConfigBuilder.createVendorInformationSections(entity);
      } else if (sectionType === "settings") {
        return _SectionConfigBuilder.createVendorSettingsSections(entity);
      }
    } else if (entityType === "client") {
      if (sectionType === "information") {
        return _SectionConfigBuilder.createClientInformationSections(entity);
      } else if (sectionType === "settings") {
        return _SectionConfigBuilder.createClientSettingsSections(entity);
      } else if (sectionType === "statistics") {
        return _SectionConfigBuilder.createClientChangesSections(entity);
      }
    }
    return [];
  }
};

// src/app/shared/components/forms/modal-list-form/modal-list-form.component.ts
function ModalListFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._subHeader, " ");
  }
}
function ModalListFormComponent_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 5);
    \u0275\u0275listener("onClick", function ModalListFormComponent_For_5_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const action_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleAction(action_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", action_r3.label)("icon", action_r3.icon)("styleClass", action_r3.styleClass)("severity", action_r3.severity)("disabled", ctx_r0.isDisabled(action_r3));
  }
}
function ModalListFormComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ModalListFormComponent_For_5_Conditional_0_Template, 1, 5, "p-button", 4);
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isVisible(action_r3) ? 0 : -1);
  }
}
var ModalListFormComponent = class _ModalListFormComponent {
  _fields = [];
  _initialData = {};
  _actions = [];
  _subHeader = "";
  form;
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  ngOnInit() {
    if (isDefined(this.dialogConfig?.data)) {
      this._fields = this.dialogConfig.data.fields ?? [];
      this._initialData = this.dialogConfig.data.initialData ?? {};
      this._actions = this.dialogConfig.data.actions ?? [];
      this._subHeader = this.dialogConfig.data.subHeader ?? "";
    } else {
      this.dialogRef.close();
    }
  }
  /**
   * Handles the form ready event from the nested DynamicFormComponent.
   * Patches initial data.
   * @param form The form group instance.
   */
  handleFormReady(form) {
    this.form = form;
    if (isDefined(this._initialData) && isDefined(this.form)) {
      this.form.patchValue(this._initialData, { emitEvent: false });
    }
  }
  /**
   * Determines if an action button should be visible.
   * @param action The form action configuration.
   * @returns True if visible, false otherwise.
   */
  isVisible(action) {
    if (typeof action.visible === "function") {
      return action.visible(this.form);
    }
    return action.visible ?? true;
  }
  /**
   * Determines if an action button should be disabled.
   * @param action The form action configuration.
   * @returns True if disabled, false otherwise.
   */
  isDisabled(action) {
    if (typeof action.disabled === "function") {
      return action.disabled(this.form);
    }
    if (action.type === "submit" && this.form) {
      return (action.disabled ?? false) || this.form.invalid;
    }
    return action.disabled ?? false;
  }
  /**
   * Handles button clicks in the modal footer.
   * Executes the action's callback or handles default submit/cancel.
   * @param action The form action configuration.
   */
  handleAction(action) {
    if (this.form && action.type === "submit") {
      if (this.form.valid) {
        this.dialogRef.close(this.form.getRawValue());
      } else {
        this.form.markAllAsTouched();
      }
    } else if (action.type === "cancel" || isNullOrUndefined(this.form)) {
      this.dialogRef.close();
    }
  }
  /**
   * TrackBy function for rendering action buttons.
   * @param index The index of the action.
   * @param action The form action configuration.
   * @returns A unique key for the action.
   */
  trackByLabel(index, action) {
    return action.label ?? `action-${index}`;
  }
  static \u0275fac = function ModalListFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalListFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalListFormComponent, selectors: [["app-modal-list-form"]], decls: 6, vars: 3, consts: [[1, "modal-list-form-content", "p-fluid", "p-3"], [1, "mb-4"], [3, "formReady", "fields", "hideActions"], [1, "modal-list-form-footer", "flex", "justify-end", "gap-2", "p-3", "border-t", "border-surface-border"], [3, "label", "icon", "styleClass", "severity", "disabled"], [3, "onClick", "label", "icon", "styleClass", "severity", "disabled"]], template: function ModalListFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ModalListFormComponent_Conditional_1_Template, 2, 1, "p", 1);
      \u0275\u0275elementStart(2, "app-dynamic-form", 2);
      \u0275\u0275listener("formReady", function ModalListFormComponent_Template_app_dynamic_form_formReady_2_listener($event) {
        return ctx.handleFormReady($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, ModalListFormComponent_For_5_Template, 1, 1, null, null, ctx.trackByLabel, true);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._subHeader ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("fields", ctx._fields)("hideActions", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._actions);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, DynamicFormComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalListFormComponent, { className: "ModalListFormComponent", filePath: "src/app/shared/components/forms/modal-list-form/modal-list-form.component.ts", lineNumber: 21 });
})();

// src/app/features/administration/components/shared/feature-section/feature-section.component.ts
var _c09 = (a0) => ({ "icon-primary": a0 });
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
  entitiesService = inject(EntitiesService);
  accountsService = inject(AccountsService);
  // Computed property to determine the correct feature bucket
  featureBucket = computed(() => {
    const section = this.feature();
    if (!section)
      return APP_FEATURE_FLAGS;
    if ("defaults" in section && typeof section.defaults === "object") {
      return BACKEND_FEATURE_FLAGS;
    }
    return APP_FEATURE_FLAGS;
  });
  allFields = computed(() => {
    const section = this.feature();
    if (!section)
      return [];
    if ("subfields" in section) {
      return [...section.fields ?? [], ...section.subfields ?? []];
    } else {
      return section.fields ?? [];
    }
  });
  inheritedFlags = computed(() => {
    const entity = this.entity();
    if (!entity)
      return {};
    if ("group" in entity && typeof entity["group"] === "string" && entity["group"]) {
      return this.getCompanyGroupMergedFlags(entity["group"]);
    }
    if (isDefined(entity?.["parent"])) {
      const parent = entity["parent"];
      if (parent.id !== "root") {
        return this.getCompanyGroupMergedFlags(parent.id);
      }
    }
    return {};
  });
  entityDetails = computed(() => {
    const entityDetails = this.entity();
    const fields = this.allFields();
    const bucket = this.featureBucket();
    const section = this.feature();
    const flags = entityDetails?.flags?.[bucket];
    const inherited = this.inheritedFlags();
    if (isNullOrUndefined(entityDetails))
      return [];
    const processedFields = fields.map((field) => {
      const value = flags?.[field.id];
      const inheritedValue = inherited[field.id];
      let defaultValue;
      if (section && "defaults" in section) {
        defaultValue = section.defaults[field.id];
      } else {
        defaultValue = AppFeatureFlagDefaults[field.id];
      }
      const isDefault = !isDefined(value) && !isDefined(inheritedValue);
      const defaultValueFormatted = !isEmpty(defaultValue) ? `${this.formatFeatureValue(defaultValue)} (Default)` : "None";
      let displayValue;
      if (isDefined(value)) {
        displayValue = this.formatFeatureValue(value);
      } else if (isDefined(inheritedValue)) {
        displayValue = `${this.formatFeatureValue(inheritedValue)} (Inherited)`;
      } else {
        if (isEmpty(defaultValue))
          return null;
        displayValue = defaultValueFormatted;
      }
      return {
        key: field.title,
        value: displayValue,
        isDefault
      };
    }).filter((field) => field !== null);
    const pageField = processedFields.find((field) => field.key === "Page");
    if (isDefined(pageField) && pageField.isDefault) {
      return [pageField].map(({ key, value }) => ({ key, value }));
    }
    return processedFields.map(({ key, value }) => ({ key, value }));
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
        let fields = [];
        if ("subfields" in section) {
          fields = section.fields.concat(section.subfields ?? []) ?? [];
        } else {
          fields = section.fields ?? [];
        }
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
  async getCompanyGroupMergedFlags(groupId) {
    const result = {};
    const groups = [];
    let currentGroupId = groupId;
    while (typeof currentGroupId === "string" && currentGroupId && currentGroupId !== DEFAULT_SYSTEM_ID) {
      try {
        const group = await firstValueFrom(this.accountsService.getCompanyGroup(currentGroupId));
        groups.push(group);
        currentGroupId = group.parent?.id !== "root" ? group.parent?.id : void 0;
      } catch (error) {
        console.error(`Failed to fetch company group ${currentGroupId}`, error);
        currentGroupId = void 0;
      }
    }
    const reversedGroups = groups.slice().reverse();
    reversedGroups.forEach((g) => {
      const bucket = this.featureBucket();
      Object.entries(g?.flags?.[bucket] ?? {}).forEach(([key, value]) => {
        result[key] = value;
      });
    });
    return result;
  }
  updateFormFields() {
    const entity = this.entity();
    const section = this.feature();
    const bucket = this.featureBucket();
    let fields = [];
    if (section && "subfields" in section) {
      fields = section.fields.concat(section.subfields ?? []) ?? [];
    } else if (section) {
      fields = section.fields ?? [];
    }
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
          })), entity?.flags?.[bucket]?.[field.id], {
            name: field.id,
            validations,
            props: {
              appendTo: "body"
            },
            hint: field.hint
          });
        case "number":
          return createNumberField(field.id, field.title, entity?.flags?.[bucket]?.[field.id], {
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
            return createModalListField(field.id, field.title, entity?.flags?.[bucket]?.[field.id] ?? [], {
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
            return createModalListField(field.id, field.title, entity?.flags?.[bucket]?.[field.id] ?? [], {
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
            return createModalListField(field.id, field.title, entity?.flags?.[bucket]?.[field.id] ?? [], {
              name: field.id,
              validations,
              hint: field.hint,
              props: { modalConfig: customPanelModalConfig }
            });
          } else {
            return createTextField(field.id, field.title, entity?.flags?.[bucket]?.[field.id], {
              name: field.id,
              validations,
              hint: field.hint
            });
          }
        case "memo":
          return createTextAreaField(field.id, field.title, entity?.flags?.[bucket]?.[field.id], {
            name: field.id,
            layout: "horizontal",
            labelWidth: "1/3"
          });
        case "text":
        default:
          return createTextField(field.id, field.title, entity?.flags?.[bucket]?.[field.id], {
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
  async getLookupValues(valueLookup) {
    const ownerId = this.entity()?.owner.id ?? "";
    switch (valueLookup) {
      case "reports": {
        const result_1 = await firstValueFrom(this.entitiesService.listReportDefinitions(ownerId));
        const reports = result_1.items.map((x) => {
          return {
            key: x.id,
            value: x.name
          };
        });
        return reports.sort((a, b) => a.value.localeCompare(b.value));
      }
      case "assetTypes": {
        const result_2 = await firstValueFrom(this.entitiesService.listAssetTypes(ownerId));
        const assetTypes = result_2.items.map((x_1) => {
          return {
            key: x_1.id,
            value: x_1.name
          };
        });
        return assetTypes.sort((a_1, b_1) => a_1.value.localeCompare(b_1.value));
      }
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c09, ctx.isFormEditable()));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureSectionComponent, { className: "FeatureSectionComponent", filePath: "src/app/features/administration/components/shared/feature-section/feature-section.component.ts", lineNumber: 57 });
})();

export {
  Card,
  CardModule,
  TimelineModule,
  AuditFeedService,
  ModalListFormComponent,
  ClientDetailsComponent,
  SectionConfigBuilder,
  FeatureSectionComponent
};
//# sourceMappingURL=chunk-AMCG2OOV.js.map
