import {
  TimeAgoPipe
} from "./chunk-XZ74I7XC.js";
import {
  BroadcastEventMessageService,
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
} from "./chunk-S4J3BTVO.js";
import {
  DataViewModule,
  DynamicFormComponent,
  RequestCacheService,
  UtilsService
} from "./chunk-GYDTB4QV.js";
import {
  DynamicDialogConfig,
  DynamicDialogRef,
  GridComponent,
  MeasurementDateTimeService,
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
} from "./chunk-2BEMARFJ.js";
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
  k2 as k
} from "./chunk-FXSZ45B7.js";
import {
  AccountsService,
  AdminStateService,
  DeviceTypeListItem,
  EntitiesService,
  FeedsService,
  ThemesService
} from "./chunk-VIPD3CDA.js";
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
} from "./chunk-3PVKXQWG.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  TitleCasePipe
} from "./chunk-FRWWEFIZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Injectable,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  catchError,
  combineLatest,
  computed,
  effect,
  finalize,
  firstValueFrom,
  inject,
  input,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵinterpolate,
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
} from "./chunk-FCYO5PMO.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

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
    \u0275\u0275conditionalCreate(0, CustomizeVendorComponent_Conditional_11_For_1_Conditional_0_Template, 13, 5, "div", 12);
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
    \u0275\u0275conditionalCreate(0, CustomizeVendorComponent_ng_template_13_Conditional_0_Template, 1, 2, "img", 23)(1, CustomizeVendorComponent_ng_template_13_Conditional_1_Template, 1, 1);
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
      createDropdownField("theme", "Theme", [{ label: "Inherited", value: "inherited" }].concat(this.themes.map((theme2) => ({
        label: theme2.name,
        value: theme2.id
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
      next: (response) => {
        this.isFormEditable.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "vendor",
          operation: "update",
          entityId: currentVendor.id,
          data: response
        });
      },
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
      \u0275\u0275conditionalCreate(8, CustomizeVendorComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "When users visit one of the domains below, the software will be customized with the following settings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, CustomizeVendorComponent_Conditional_11_Template, 3, 2)(12, CustomizeVendorComponent_Conditional_12_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CustomizeVendorComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(15, CustomizeVendorComponent_Conditional_15_Template, 1, 2, "app-image-editor", 9);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomizeVendorComponent, [{
    type: Component,
    args: [{ selector: "app-customize-vendor", imports: [
      CommonModule,
      DynamicFormComponent,
      GridComponent,
      ImageEditorComponent
    ], template: `<div class="card pt-2" aria-label="Vendor Customization">
  <div class="mb-4 p-2 flex justify-start items-center">
    <svg
      class="custom-icon-svg w-[2.5rem] h-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Paint roller icon'"
    >
      <use [attr.href]="'assets/sprites/sprite.svg#paint-roller'"></use>
    </svg>

    <div class="pl-6 flex-1" role="heading" aria-level="2">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Customize</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Customize vendor'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span
        >When users visit one of the domains below, the software will be
        customized with the following settings.</span
      >
    </div>
  </div>

  @if (isFormEditable()) {
    @for (item of vendorDetails(); track item) {
      @if (item?.imageUrl) {
        <div class="p-field p-2 flex align-items-center gap-2">
          <label for="logo" class="w-1/3 flex-shrink-0">{{ item?.key }}</label>
          <div class="flex flex-col w-full">
            <div class="flex-grow-1">
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <img
                    [src]="item?.imageUrl"
                    class="max-w-[150px] mb-2"
                    alt="Vendor logo"
                  />
                  <span class="opacity-50">{{ item.imageCaption }}</span>
                </div>

                <!--   -->
                <div class="flex flex-row gap-2">
                  <span
                    class="pi pi-pen-to-square action hover !text-xl"
                    [attr.aria-label]="'Edit image'"
                    (click)="onImageEditorVisibleChange(true, item.imageUrl)"
                  ></span>

                  <span
                    class="pi pi-times action hover !text-xl"
                    [attr.aria-label]="'Remove image'"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    }

    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="vendorDetails()"
      [columns]="columnsSignal()"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    >
    </app-grid>
  }
</div>
<ng-template #customTemplate let-details>
  @if (details?.imageUrl) {
    <img
      [src]="details.imageUrl"
      class="max-w-[150px]"
      [alt]="details.key || 'Vendor image'"
    />
  } @else {
    {{ details?.value }}
  }
</ng-template>

@if (isImageEditorVisible) {
  <app-image-editor
    [visible]="true"
    [fileUrl]="file"
    (visibleChange)="onImageEditorVisibleChange($event)"
    (croppedFile)="saveFile($event)"
  />
}
` }]
  }], () => [], { logoTemplate: [{
    type: ViewChild,
    args: ["customTemplate", { static: true }]
  }] });
})();
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
      \u0275\u0275conditionalCreate(7, VendorAddressComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following address information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, VendorAddressComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorAddressComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorAddressComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-address", imports: [DynamicFormComponent, GridComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-id-card !text-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'id card icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Address</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit address'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Complete the following address information.</span>
    </div>
  </div>

  @if (isFormEditable()) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="address()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
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
      \u0275\u0275conditionalCreate(7, VendorSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(10, VendorSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-settings", imports: [GridComponent, DynamicFormComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-cog !text-[2.5rem]"
      [attr.aria-label]="'Cog icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Settings</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit vendor settings'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Choose from the following settings.</span>
    </div>
  </div>
</div>

@if (isFormEditable()) {
  <app-dynamic-form
    [fields]="formFields"
    [actions]="actions"
    (formSubmit)="onSubmit($event)"
  >
  </app-dynamic-form>
} @else {
  <app-grid
    [data]="vendorDetails()"
    [columns]="columns"
    [showGridLines]="false"
    [hideHeader]="true"
    tableStyleClass="info-display !w-auto"
  ></app-grid>
}
` }]
  }], null, null);
})();
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
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "vendor",
          operation: "update",
          entityId: vendor.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
        this.isSubmitting.set(false);
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
      \u0275\u0275conditionalCreate(7, VendorNotificationSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, VendorNotificationSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, VendorNotificationSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorNotificationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-notification-settings", imports: [GridComponent, DynamicFormComponent], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span class="pi pi-at !text-[2.5rem]" [attr.aria-label]="'At icon'"></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Notification Settings</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit notification settings'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Choose from the following options</span>
    </div>
  </div>
  @if (isFormEditable()) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="vendorDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
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
    \u0275\u0275textInterpolate1(" ", item_r4.name);
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
    \u0275\u0275conditionalCreate(5, VendorExternalAuthenticationComponent_Conditional_10_Conditional_5_Template, 1, 0, "p-panel");
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
  broadcastService = inject(BroadcastEventMessageService);
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
      next: (response) => {
        this.isFormEditable.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "vendor",
          operation: "update",
          entityId: vendor.id,
          data: response
        });
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
      \u0275\u0275conditionalCreate(7, VendorExternalAuthenticationComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "To authenticate with an external OpenId Connect issuer, add the issuer below.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, VendorExternalAuthenticationComponent_Conditional_10_Template, 12, 2, "div", 7)(11, VendorExternalAuthenticationComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorExternalAuthenticationComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-external-authentication", imports: [
      GridComponent,
      DataViewModule,
      ButtonModule,
      PanelModule,
      DynamicFormModalComponent
    ], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-key !text-[2.5rem]"
      [attr.aria-label]="'key icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">External Authentication</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit External Authentication'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span
        >To authenticate with an external OpenId Connect issuer, add the issuer
        below.</span
      >
    </div>
  </div>
  @if (isFormEditable()) {
    <div class="p-field p-2 flex align-items-center gap-2">
      <label for="logo" class="w-1/3 flex-shrink-0">Issuers</label>
      <div class="flex flex-col justify-end w-full">
        <div class="flex-grow-1 flex flex-col">
          @if (oidc().length === 0) {
            <p-panel />
          }

          @for (item of oidc(); track item) {
            <p-panel>
              <div class="flex flex-row justify-between">
                <div>
                  <span
                    class="pi pi-key !text-xl"
                    [attr.aria-label]="'key icon'"
                  ></span>
                  <span class="px-4"> {{ item.name }}</span>
                </div>

                <div class="icon-light">
                  <span
                    class="pi pi-trash action hover !text-xl"
                    [attr.aria-label]="'Delete Issuer'"
                  ></span>
                </div>
              </div>
            </p-panel>
          }

          <p-button
            (click)="showModal = true"
            severity="secondary"
            label="Add"
            class="self-end p-2"
          />

          <div class="flex justify-end gap-2 mt-4">
            <p-button
              type="button"
              label="Cancel"
              severity="secondary"
              (onClick)="isFormEditable.set(false)"
            />

            <p-button
              type="submit"
              label="Save"
              severity="primary"
              [disabled]="true"
            />
          </div>
        </div>
      </div>
    </div>
  } @else {
    <app-grid
      [data]="vendorDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>

<app-dynamic-form-modal
  [visible]="showModal"
  header="Issuer Details"
  [fields]="formFields"
  [actions]="actions"
  (close)="onClose()"
  (formSubmit)="onFormSubmit($event)"
>
</app-dynamic-form-modal>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorExternalAuthenticationComponent, { className: "VendorExternalAuthenticationComponent", filePath: "src/app/features/administration/components/vendors/vendor-details/vendor-external-authentication/vendor-external-authentication.component.ts", lineNumber: 46 });
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
      const clientDetails = this.entity();
      if (clientDetails && this.companyGroupsLoaded() && !this.createMode()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.loadCompanyGroups();
    this.updateFormFields();
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
        props: { multiple: true, typeahead: false }
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
    if (isNullOrUndefined(vendor)) {
      throw new Error("Vendor not found");
    }
    return this.accountsService.updateVendorDetails(vendor.id, vendorDetails).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "vendor",
          operation: "update",
          entityId: vendor.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
        this.isSubmitting.set(false);
      }
    });
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
      \u0275\u0275conditionalCreate(7, VendorDetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Configure various vendor details.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, VendorDetailsComponent_Conditional_10_Template, 1, 3, "app-dynamic-form", 7);
      \u0275\u0275conditionalCreate(11, VendorDetailsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-vendor-details", imports: [GridComponent, DynamicFormComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-building !text-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Building icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Vendor Details</h2>
        @if (!isFormEditable() && !createMode()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit vendor details'"
              (click)="onEdit()"
              (keydown.enter)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Configure various vendor details.</span>
    </div>
  </div>

  @if (isFormEditable() || (createMode() && formFields.length)) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      [hideActions]="createMode()"
      (formSubmit)="onSubmit($event)"
      (formValidityChange)="onFormValidityChange($event)"
      (formValueChange)="onFormValueChange($event)"
    >
    </app-dynamic-form>
  }

  @if (!isFormEditable() && !createMode()) {
    <app-grid
      [data]="vendorDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
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
      if (clientDetails && this.companyGroupsLoaded() && !this.createMode()) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.loadCompanyGroups();
    this.loadTimezones();
    this.updateFormFields();
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
        props: { multiple: true, typeahead: false }
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
    if (isNullOrUndefined(client)) {
      throw new Error("Client not found");
    }
    this.accountsService.updateClient(client.id, clientDetails).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.entityChange.emit(response);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "update",
          entityId: response.id,
          data: response
        });
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
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
      \u0275\u0275conditionalCreate(7, ClientDetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Configure various client details.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ClientDetailsComponent_Conditional_10_Template, 1, 3, "app-dynamic-form", 7);
      \u0275\u0275conditionalCreate(11, ClientDetailsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-client-details", imports: [GridComponent, DynamicFormComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-building !text-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Building icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Client Details</h2>
        @if (!isFormEditable() && !createMode()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit client details'"
              (click)="onEdit()"
              (keydown.enter)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Configure various client details.</span>
    </div>
  </div>

  @if (isFormEditable() || (createMode() && formFields.length)) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      [hideActions]="createMode()"
      (formSubmit)="onSubmit($event)"
      (formValidityChange)="onFormValidityChange($event)"
      (formValueChange)="onFormValueChange($event)"
    >
    </app-dynamic-form>
  }

  @if (!isFormEditable() && !createMode()) {
    <app-grid
      [data]="clientDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientDetailsComponent, { className: "ClientDetailsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-details/client-details.component.ts", lineNumber: 40 });
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
    \u0275\u0275conditionalCreate(0, CustomizeClientComponent_Conditional_11_For_1_Conditional_0_Template, 13, 5, "div", 12);
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
    \u0275\u0275conditionalCreate(0, CustomizeClientComponent_ng_template_13_Conditional_0_Template, 1, 2, "img", 23)(1, CustomizeClientComponent_ng_template_13_Conditional_1_Template, 1, 1);
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
      createDropdownField("theme", "Theme", [{ label: "Inherited", value: "inherited" }].concat(this.themes.map((theme2) => ({
        label: theme2.name,
        value: theme2.id
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
    if (!currentClient) {
      return;
    }
    this.isSubmitting.set(true);
    this.accountsService.updateClient(currentClient.id, formData).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.isSubmitting.set(false))).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "update",
          entityId: currentClient.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
        this.isSubmitting.set(false);
      }
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
      \u0275\u0275conditionalCreate(8, CustomizeClientComponent_Conditional_8_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "When users visit one of the domains below, the software will be customized with the following settings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, CustomizeClientComponent_Conditional_11_Template, 3, 2)(12, CustomizeClientComponent_Conditional_12_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CustomizeClientComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(15, CustomizeClientComponent_Conditional_15_Template, 1, 2, "app-image-editor", 9);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomizeClientComponent, [{
    type: Component,
    args: [{ selector: "app-customize-client", imports: [
      CommonModule,
      DynamicFormComponent,
      GridComponent,
      ImageEditorComponent
    ], template: `<div class="card pt-2" aria-label="Client Customization">
  <div class="mb-4 p-2 flex justify-start items-center">
    <svg
      class="custom-icon-svg w-[2.5rem] h-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Paint roller icon'"
    >
      <use [attr.href]="'assets/sprites/sprite.svg#paint-roller'"></use>
    </svg>

    <div class="pl-6 flex-1" role="heading" aria-level="2">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Customize</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Customize client'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span
        >When users visit one of the domains below, the software will be
        customized with the following settings.</span
      >
    </div>
  </div>

  @if (isFormEditable()) {
    @for (item of clientDetails(); track item) {
      @if (item?.imageUrl) {
        <div class="p-field p-2 flex align-items-center gap-2">
          <label for="logo" class="w-1/3 flex-shrink-0">{{ item?.key }}</label>
          <div class="flex flex-col w-full">
            <div class="flex-grow-1">
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <img
                    [src]="item?.imageUrl"
                    class="max-w-[150px] mb-2"
                    alt="Client logo"
                  />
                  <span class="opacity-50">{{ item.imageCaption }}</span>
                </div>

                <!--   -->
                <div class="flex flex-row gap-2">
                  <span
                    class="pi pi-pen-to-square action hover !text-xl"
                    [attr.aria-label]="'Edit image'"
                    (click)="onImageEditorVisibleChange(true, item.imageUrl)"
                  ></span>

                  <span
                    class="pi pi-times action hover !text-xl"
                    [attr.aria-label]="'Remove image'"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    }

    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="clientDetails()"
      [columns]="columnsSignal()"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    >
    </app-grid>
  }
</div>
<ng-template #customTemplate let-details>
  @if (details?.imageUrl) {
    <img
      [src]="details.imageUrl"
      class="max-w-[150px]"
      [alt]="details.key || 'Client image'"
    />
  } @else {
    {{ details?.value }}
  }
</ng-template>

@if (isImageEditorVisible) {
  <app-image-editor
    [visible]="true"
    [fileUrl]="file"
    (visibleChange)="onImageEditorVisibleChange($event)"
    (croppedFile)="saveFile($event)"
  />
}
` }]
  }], () => [], { logoTemplate: [{
    type: ViewChild,
    args: ["customTemplate", { static: true }]
  }] });
})();
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
    if (isNullOrUndefined(clientDetails) || !this.countriesLoaded()) {
      return [];
    }
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
    this.columns = [
      { field: "key", header: "", transform: "uppercase" },
      { field: "value", header: "" }
    ];
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
      if (isDefined(countries) && [countries].length > 0) {
        this.countries.set(Object.entries(countries).map(([code, name]) => ({
          label: name,
          value: code
        })));
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
      \u0275\u0275conditionalCreate(7, ClientAddressComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following address information.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ClientAddressComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientAddressComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientAddressComponent, [{
    type: Component,
    args: [{ selector: "app-client-address", imports: [DynamicFormComponent, GridComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-id-card !text-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'id card icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Address</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit address'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Complete the following address information.</span>
    </div>
  </div>

  @if (isFormEditable()) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="address()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientAddressComponent, { className: "ClientAddressComponent", filePath: "src/app/features/administration/components/clients/client-details/client-address/client-address.component.ts", lineNumber: 29 });
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
      createDropdownField("mapSet", "Map Set", this.selectOptions()["mapSets"] ?? [], this.entity()?.mapSet?.id, {
        name: "mapSet",
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
    return this.accountsService.updateClient(client.id, settings);
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
    if (isDefined(dirtyValues["availableDeviceTypes"])) {
      const deviceTypeIds = dirtyValues["availableDeviceTypes"];
      const mappedDeviceTypes = deviceTypeIds.map((id) => {
        const selected = this.selectOptions()["deviceTypes"]?.find((opt) => opt.value === id);
        return {
          id,
          name: selected ? selected.label : null
        };
      });
      const validDeviceTypes = mappedDeviceTypes.filter((dt) => dt.name !== null);
      dirtyValues["availableDeviceTypes"] = validDeviceTypes.length === mappedDeviceTypes.length ? mappedDeviceTypes : validDeviceTypes;
    }
    if (isDefined(dirtyValues["mapSet"])) {
      const mapSetOption = this.selectOptions()["mapSets"]?.find((opt) => opt.value === dirtyValues["mapSet"]);
      if (mapSetOption) {
        dirtyValues["mapSet"] = {
          id: mapSetOption.value,
          name: mapSetOption.label
        };
      } else {
        delete dirtyValues["mapSet"];
      }
    }
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
        this.broadcastService.broadcast("entity-updated", {
          entityType: this.entityType(),
          operation: "update",
          entityId: response.id,
          data: response
        });
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
      \u0275\u0275conditionalCreate(7, ClientSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following settings.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(10, ClientSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-client-settings", imports: [GridComponent, DynamicFormComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-cog !text-[2.5rem]"
      [attr.aria-label]="'Cog icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Settings</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit client settings'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Choose from the following settings.</span>
    </div>
  </div>
</div>

@if (isFormEditable()) {
  <app-dynamic-form
    [fields]="formFields"
    [actions]="actions"
    (formSubmit)="onSubmit($event)"
  >
  </app-dynamic-form>
} @else {
  <app-grid
    [data]="clientDetails()"
    [columns]="columns"
    [showGridLines]="false"
    [hideHeader]="true"
    tableStyleClass="info-display !w-auto"
  ></app-grid>
}
` }]
  }], () => [], null);
})();
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
    if (isNullOrUndefined(client)) {
      return;
    }
    this.isSubmitting.set(true);
    this.accountsService.updateClient(client.id, formData).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "update",
          entityId: client.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
        this.isSubmitting.set(false);
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
      \u0275\u0275conditionalCreate(7, ClientNotificationSettingsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Choose from the following options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ClientNotificationSettingsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientNotificationSettingsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientNotificationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-client-notification-settings", imports: [GridComponent, DynamicFormComponent], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span class="pi pi-at !text-[2.5rem]" [attr.aria-label]="'At icon'"></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Notification Settings</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit notification settings'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Choose from the following options</span>
    </div>
  </div>
  @if (isFormEditable()) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      (formSubmit)="onSubmit($event)"
    >
    </app-dynamic-form>
  } @else {
    <app-grid
      [data]="clientDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
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
    \u0275\u0275textInterpolate1(" ", item_r4.name);
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
    \u0275\u0275conditionalCreate(5, ClientExternalAuthenticationComponent_Conditional_10_Conditional_5_Template, 1, 0, "p-panel");
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
    this.accountsService.updateClient(client.id, { oidc: { "": this.oidc() } }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "update",
          entityId: client.id,
          data: response
        });
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
      \u0275\u0275conditionalCreate(7, ClientExternalAuthenticationComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "To authenticate with an external OpenId Connect issuer, add the issuer below.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, ClientExternalAuthenticationComponent_Conditional_10_Template, 12, 2, "div", 7)(11, ClientExternalAuthenticationComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientExternalAuthenticationComponent, [{
    type: Component,
    args: [{ selector: "app-client-external-authentication", imports: [
      GridComponent,
      DataViewModule,
      ButtonModule,
      PanelModule,
      DynamicFormModalComponent
    ], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-key !text-[2.5rem]"
      [attr.aria-label]="'key icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">External Authentication</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit External Authentication'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span
        >To authenticate with an external OpenId Connect issuer, add the issuer
        below.</span
      >
    </div>
  </div>
  @if (isFormEditable()) {
    <div class="p-field p-2 flex align-items-center gap-2">
      <label for="logo" class="w-1/3 flex-shrink-0">Issuers</label>
      <div class="flex flex-col justify-end w-full">
        <div class="flex-grow-1 flex flex-col">
          @if (oidc().length === 0) {
            <p-panel />
          }

          @for (item of oidc(); track item) {
            <p-panel>
              <div class="flex flex-row justify-between">
                <div>
                  <span
                    class="pi pi-key !text-xl"
                    [attr.aria-label]="'key icon'"
                  ></span>
                  <span class="px-4"> {{ item.name }}</span>
                </div>

                <div class="icon-light">
                  <span
                    class="pi pi-trash action hover !text-xl"
                    [attr.aria-label]="'Delete Issuer'"
                  ></span>
                </div>
              </div>
            </p-panel>
          }

          <p-button
            (click)="showModal = true"
            severity="secondary"
            label="Add"
            class="self-end p-2"
          />

          <div class="flex justify-end gap-2 mt-4">
            <p-button
              type="button"
              label="Cancel"
              severity="secondary"
              (onClick)="isFormEditable.set(false)"
            />

            <p-button
              type="submit"
              label="Save"
              severity="primary"
              [disabled]="true"
            />
          </div>
        </div>
      </div>
    </div>
  } @else {
    <app-grid
      [data]="clientDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>

<app-dynamic-form-modal
  [visible]="showModal"
  header="Issuer Details"
  [fields]="formFields"
  [actions]="actions"
  (close)="onClose()"
  (formSubmit)="onFormSubmit($event)"
>
</app-dynamic-form-modal>
` }]
  }], () => [], null);
})();
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
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitFormatterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

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
    if (isNullOrUndefined(client)) {
      return;
    }
    this.isSubmitting.set(true);
    this.accountsService.updateClient(client.id, { measurementUnits: formData }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.isFormEditable.set(false);
        this.isSubmitting.set(false);
        this.broadcastService.broadcast("entity-updated", {
          entityType: "client",
          operation: "update",
          entityId: client.id,
          data: response
        });
      },
      error: () => {
        this.isFormEditable.set(true);
        this.isSubmitting.set(false);
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
      \u0275\u0275conditionalCreate(7, ClientMeasurementUnitsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Customize the measurement units for this client.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(10, ClientMeasurementUnitsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, ClientMeasurementUnitsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientMeasurementUnitsComponent, [{
    type: Component,
    args: [{ selector: "app-client-measurement-units", imports: [GridComponent, DynamicFormComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-gauge !text-[2.5rem]"
      [attr.aria-label]="'Gauge icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Measurement Units</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit client settings'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Customize the measurement units for this client.</span>
    </div>
  </div>
</div>

@if (isFormEditable()) {
  <app-dynamic-form
    [fields]="formFields"
    [actions]="actions"
    (formSubmit)="onSubmit($event)"
  >
  </app-dynamic-form>
} @else {
  <app-grid
    [data]="clientDetails()"
    [columns]="columns"
    [showGridLines]="false"
    [hideHeader]="true"
    tableStyleClass="info-display !w-auto"
  ></app-grid>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientMeasurementUnitsComponent, { className: "ClientMeasurementUnitsComponent", filePath: "src/app/features/administration/components/clients/client-details/client-measurement-units/client-measurement-units.component.ts", lineNumber: 24 });
})();

// node_modules/@primeuix/styles/dist/card/index.mjs
var style = "\n    .p-card {\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c07 = ["header"];
var _c13 = ["title"];
var _c2 = ["subtitle"];
var _c3 = ["content"];
var _c4 = ["footer"];
var _c5 = ["*", [["p-header"]], [["p-footer"]]];
var _c6 = ["*", "p-header", "p-footer"];
function Card_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Card_div_0_ng_container_2_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Card_div_2_ng_container_1_Template(rf, ctx) {
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
function Card_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Card_div_2_ng_container_1_Template, 2, 1, "ng-container", 2)(2, Card_div_2_ng_container_2_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.header && !ctx_r0._titleTemplate && !ctx_r0.titleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate || ctx_r0._titleTemplate);
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
    \u0275\u0275textInterpolate(ctx_r0.subheader);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Card_div_3_ng_container_1_Template, 2, 1, "ng-container", 2)(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("subtitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subheader && !ctx_r0._subtitleTemplate && !ctx_r0.subtitleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate || ctx_r0._subtitleTemplate);
  }
}
function Card_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Card_div_7_ng_container_2_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
var theme = (
  /*css*/
  `
    ${style}

    .p-card {
        display: block;
    }
`
);
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
    if (!k(this._style(), value)) {
      this._style.set(value);
    }
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
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
  _style = signal(null, ...ngDevMode ? [{
    debugName: "_style"
  }] : []);
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
    hostVars: 5,
    hostBindings: function Card_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "card");
        \u0275\u0275styleMap(ctx._style());
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
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
    decls: 8,
    vars: 9,
    consts: [[3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngIf"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c5);
        \u0275\u0275template(0, Card_div_0_Template, 3, 3, "div", 0);
        \u0275\u0275elementStart(1, "div");
        \u0275\u0275template(2, Card_div_2_Template, 3, 4, "div", 0)(3, Card_div_3_Template, 3, 4, "div", 0);
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275projection(5);
        \u0275\u0275template(6, Card_ng_container_6_Template, 1, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, Card_div_7_Template, 3, 3, "div", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("body"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.header || ctx.titleTemplate || ctx._titleTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subheader || ctx.subtitleTemplate || ctx._subtitleTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule],
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
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [class]="cx('body')">
            <div [class]="cx('title')" *ngIf="header || titleTemplate || _titleTemplate">
                <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
            </div>
            <div [class]="cx('subtitle')" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
            </div>
            <div [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
            <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CardStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-name]": '"card"',
        "[style]": "_style()"
      }
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
    type: _CardModule,
    imports: [Card, SharedModule],
    exports: [Card, SharedModule]
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

// node_modules/@primeuix/styles/dist/timeline/index.mjs
var style2 = "\n    .p-timeline {\n        display: flex;\n        flex-grow: 1;\n        flex-direction: column;\n        direction: ltr;\n    }\n\n    .p-timeline-left .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-left .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-right .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical .p-timeline-event-opposite,\n    .p-timeline-vertical .p-timeline-event-content {\n        padding: dt('timeline.vertical.event.content.padding');\n    }\n\n    .p-timeline-vertical .p-timeline-event-connector {\n        width: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-event {\n        display: flex;\n        position: relative;\n        min-height: dt('timeline.event.min.height');\n    }\n\n    .p-timeline-event:last-child {\n        min-height: 0;\n    }\n\n    .p-timeline-event-opposite {\n        flex: 1;\n    }\n\n    .p-timeline-event-content {\n        flex: 1;\n    }\n\n    .p-timeline-event-separator {\n        flex: 0;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n    }\n\n    .p-timeline-event-marker {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        align-self: baseline;\n        border-width: dt('timeline.event.marker.border.width');\n        border-style: solid;\n        border-color: dt('timeline.event.marker.border.color');\n        border-radius: dt('timeline.event.marker.border.radius');\n        width: dt('timeline.event.marker.size');\n        height: dt('timeline.event.marker.size');\n        background: dt('timeline.event.marker.background');\n    }\n\n    .p-timeline-event-marker::before {\n        content: ' ';\n        border-radius: dt('timeline.event.marker.content.border.radius');\n        width: dt('timeline.event.marker.content.size');\n        height: dt('timeline.event.marker.content.size');\n        background: dt('timeline.event.marker.content.background');\n    }\n\n    .p-timeline-event-marker::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('timeline.event.marker.border.radius');\n        box-shadow: dt('timeline.event.marker.content.inset.shadow');\n    }\n\n    .p-timeline-event-connector {\n        flex-grow: 1;\n        background: dt('timeline.event.connector.color');\n    }\n\n    .p-timeline-horizontal {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event {\n        flex-direction: column;\n        flex: 1;\n    }\n\n    .p-timeline-horizontal .p-timeline-event:last-child {\n        flex: 0;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-separator {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-connector {\n        width: 100%;\n        height: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-horizontal .p-timeline-event-opposite,\n    .p-timeline-horizontal .p-timeline-event-content {\n        padding: dt('timeline.horizontal.event.content.padding');\n    }\n\n    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: column-reverse;\n    }\n\n    .p-timeline-bottom .p-timeline-event {\n        flex-direction: column-reverse;\n    }\n";

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
    \u0275\u0275template(1, Timeline_div_0_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);
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
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("eventMarker"));
    \u0275\u0275attribute("data-pc-section", "marker");
  }
}
function Timeline_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("eventConnector"));
  }
}
function Timeline_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275template(2, Timeline_div_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, Timeline_div_0_ng_container_4_Template, 2, 4, "ng-container", 3)(5, Timeline_div_0_ng_template_5_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, Timeline_div_0_div_7_Template, 1, 2, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275template(9, Timeline_div_0_ng_container_9_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("event"));
    \u0275\u0275attribute("data-pc-section", "event");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventOpposite"));
    \u0275\u0275attribute("data-pc-section", "opposite");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.oppositeTemplate || ctx_r1._oppositeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c32, event_r1));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventSeparator"));
    \u0275\u0275attribute("data-pc-section", "separator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngIfElse", marker_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !last_r3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventContent"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(21, _c32, event_r1));
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-timeline p-component", "p-timeline-" + instance.align, "p-timeline-" + instance.layout],
  event: "p-timeline-event",
  eventOpposite: "p-timeline-event-opposite",
  eventSeparator: "p-timeline-event-separator",
  eventMarker: "p-timeline-event-marker",
  eventConnector: "p-timeline-event-connector",
  eventContent: "p-timeline-event-content"
};
var TimelineStyle = class _TimelineStyle extends BaseStyle {
  name = "timeline";
  theme = style2;
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
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
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
    hostVars: 4,
    hostBindings: function Timeline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-section", "root")("data-pc-name", "timeline");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    features: [\u0275\u0275ProvidersFeature([TimelineStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["marker", ""], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Timeline_div_0_Template, 10, 23, "div", 1);
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
        <div *ngFor="let event of value; let last = last" [class]="cx('event')" [attr.data-pc-section]="'event'">
            <div [class]="cx('eventOpposite')" [attr.data-pc-section]="'opposite'">
                <ng-container *ngTemplateOutlet="oppositeTemplate || _oppositeTemplate; context: { $implicit: event }"></ng-container>
            </div>
            <div [class]="cx('eventSeparator')" [attr.data-pc-section]="'separator'">
                <ng-container *ngIf="markerTemplate || _markerTemplate; else marker">
                    <ng-container *ngTemplateOutlet="markerTemplate || _markerTemplate; context: { $implicit: event }"></ng-container>
                </ng-container>
                <ng-template #marker>
                    <div [class]="cx('eventMarker')" [attr.data-pc-section]="'marker'"></div>
                </ng-template>
                <div *ngIf="!last" [class]="cx('eventConnector')"></div>
            </div>
            <div [class]="cx('eventContent')" [attr.data-pc-section]="'content'">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: event }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TimelineStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'timeline'"
      }
    }]
  }], null, {
    value: [{
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
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static \u0275fac = function TimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TimelineModule,
    imports: [Timeline, SharedModule],
    exports: [Timeline, SharedModule]
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

// src/app/features/administration/components/shared/feed-section/feed-section.component.ts
var _forTrack0 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.id;
function FeedSectionComponent_Conditional_1_Template(rf, ctx) {
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
function FeedSectionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Loading changes...");
    \u0275\u0275elementEnd()();
  }
}
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_2_Template(rf, ctx) {
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
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_3_Template(rf, ctx) {
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
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_4_Template(rf, ctx) {
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
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" from '", change_r2.oldValue.value, "' ");
  }
}
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const change_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" to '", change_r2.newValue.value, "' ");
  }
}
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Conditional_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(2, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Conditional_2_Template, 1, 1);
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
function FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275conditionalCreate(2, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_2_Template, 3, 2)(3, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_3_Template, 3, 3)(4, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_4_Template, 3, 2)(5, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Case_5_Template, 3, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_31_0;
    const change_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_31_0 = change_r2.action) === "ADD" ? 2 : tmp_31_0 === "MODIFY" ? 3 : tmp_31_0 === "REMOVE" ? 4 : 5);
  }
}
function FeedSectionComponent_For_5_For_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, FeedSectionComponent_For_5_For_5_Conditional_18_For_2_Template, 6, 1, "div", 23, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.changes);
  }
}
function FeedSectionComponent_For_5_For_5_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 22);
  }
}
function FeedSectionComponent_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "timeAgo");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "p-divider", 15);
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17)(10, "div", 18)(11, "div", 19);
    \u0275\u0275text(12, " User ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, FeedSectionComponent_For_5_For_5_Conditional_18_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(19, FeedSectionComponent_For_5_For_5_Conditional_19_Template, 1, 0, "p-divider", 22);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_25_r4 = ctx.$index;
    const \u0275$count_25_r5 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275interpolate(ctx_r0.formatDate(item_r3.date)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(item_r3.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 10, item_r3.date, ctx_r0.timestamp()), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(item_r3.user.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r3.eventType, " ", item_r3.entity.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.entity.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChanges(item_r3) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_25_r4 === \u0275$count_25_r5 - 1) ? 19 : -1);
  }
}
function FeedSectionComponent_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 10);
  }
}
function FeedSectionComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275repeaterCreate(4, FeedSectionComponent_For_5_For_5_Template, 20, 13, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, FeedSectionComponent_For_5_Conditional_6_Template, 1, 0, "p-divider", 10);
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
function FeedSectionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Loading more...");
    \u0275\u0275elementEnd()();
  }
}
function FeedSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p-button", 26);
    \u0275\u0275listener("onClick", function FeedSectionComponent_Conditional_7_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadMore());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r0.loadingMore());
  }
}
function FeedSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No more changes to load");
    \u0275\u0275elementEnd();
  }
}
var FeedSectionComponent = class _FeedSectionComponent extends EntitySectionBaseComponent {
  // Constants
  static PAGE_SIZE = 10;
  static TIMESTAMP_UPDATE_INTERVAL = 6e4;
  // 1 minute
  feedService = inject(FeedsService);
  measurementDateTimeService = inject(MeasurementDateTimeService);
  auditFeed = signal([]);
  loading = signal(false);
  error = signal(null);
  hasMoreData = signal(true);
  currentSequence = 0;
  pageSize = _FeedSectionComponent.PAGE_SIZE;
  loadingMore = signal(false);
  currentEntityId = "";
  timestampIntervalId;
  groupedAuditFeed = signal([]);
  timestamp = signal(Date.now());
  constructor() {
    super();
    effect(() => {
      this.groupItemsByDate(this.auditFeed());
    });
    effect(() => {
      const entity = this.entity();
      const entityId = entity?.id;
      if (isDefined(entityId) && entityId !== this.currentEntityId) {
        this.currentEntityId = entityId;
        this.auditFeed.set([]);
        this.hasMoreData.set(true);
        this.loadInitialData();
      }
    });
    this.timestampIntervalId = setInterval(() => {
      this.timestamp.set(Date.now());
    }, _FeedSectionComponent.TIMESTAMP_UPDATE_INTERVAL);
    this.destroyRef.onDestroy(() => {
      clearInterval(this.timestampIntervalId);
    });
  }
  /**
   * Load initial audit feed data for the current entity
   */
  loadInitialData() {
    if (this.loading()) {
      return;
    }
    const clientId = this.entity()?.id;
    if (isNullOrUndefined(clientId)) {
      this.error.set("Client information not available");
      return;
    }
    const companyId = this.entity()?.owner?.id;
    if (isNullOrUndefined(companyId)) {
      this.error.set("Company information not available");
      return;
    }
    const today = /* @__PURE__ */ new Date();
    today.setUTCHours(23, 59, 59, 999);
    this.currentSequence = Math.floor(today.getTime() / 1e3);
    this.loading.set(true);
    this.error.set(null);
    this.feedService.getAuditFeedForEntity(companyId, clientId, this.currentSequence, "backward", this.pageSize).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        const items = this.transformAuditEventItems(response.items);
        const existingIds = new Set(this.auditFeed().map((item) => item.id));
        const newItems = items.filter((item) => !existingIds.has(item.id));
        this.auditFeed.set(newItems);
        if (response.items.length > 0) {
          this.currentSequence = response.sequence;
        }
        this.hasMoreData.set(response.items.length === this.pageSize);
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Failed to load audit feed:", error);
        this.error.set("Unable to load activity history. Please try again.");
        this.loading.set(false);
      }
    });
  }
  /**
   * Load more audit feed items for pagination
   */
  loadMore() {
    if (this.loading() || this.loadingMore() || !this.hasMoreData())
      return;
    const clientId = this.entity()?.id;
    const companyId = this.entity()?.owner?.id;
    if (isNullOrUndefined(clientId) || isNullOrUndefined(companyId))
      return;
    this.loadingMore.set(true);
    this.feedService.getAuditFeedForEntity(companyId, clientId, this.currentSequence, "backward", this.pageSize).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        if (response.items.length > 0) {
          const transformedItems = this.transformAuditEventItems(response.items);
          this.currentSequence = response.sequence;
          this.auditFeed.update((feed) => {
            const existingIds = new Set(feed.map((item) => item.id));
            const newItems = transformedItems.filter((item) => !existingIds.has(item.id));
            return [...feed, ...newItems];
          });
          this.hasMoreData.set(response.items.length === this.pageSize);
        } else {
          this.hasMoreData.set(false);
        }
        this.loadingMore.set(false);
      },
      error: (error) => {
        console.error("Failed to load more audit feed items:", error);
        this.loadingMore.set(false);
      }
    });
  }
  /**
   * Get the appropriate icon class for an event type
   * @param eventType The type of event (CREATE, UPDATE, DELETE)
   * @returns CSS classes for the event icon
   */
  getEventIcon(eventType) {
    const eventIcons = {
      CREATE: "pi pi-plus-circle text-success",
      UPDATE: "pi pi-pencil text-warning",
      DELETE: "pi pi-trash text-danger"
    };
    return eventIcons[eventType] || "pi pi-info-circle text-info";
  }
  /**
   * Format a date string to display time only
   * @param dateStr The date string to format
   * @returns Formatted time string
   */
  formatTime(dateStr) {
    return this.measurementDateTimeService.formatTime(new Date(dateStr), "HH:mm");
  }
  /**
   * Format a date string to display full date and time
   * @param dateStr The date string to format
   * @returns Formatted date string
   */
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleString();
  }
  /**
   * Check if an audit feed item has change details
   * @param item The audit feed item to check
   * @returns True if the item has changes
   */
  hasChanges(item) {
    return isDefined(item.changes) && item.changes.length > 0;
  }
  updateFormFields() {
  }
  submitChanges(_clientDetails) {
  }
  transformAuditEventItems(items) {
    return items.map((item) => ({
      id: item.id,
      date: item.date,
      owner: {
        id: item.owner.id,
        name: item.owner.name ?? "",
        type: item.owner.type ?? ""
      },
      eventClass: item.eventClass,
      eventType: item.eventType,
      user: {
        id: item.user.id,
        name: item.user.name ?? ""
      },
      entity: {
        id: item.entity.id,
        name: item.entity.name ?? "",
        type: item.entity.type ?? ""
      },
      changes: (item.changes ?? []).map((change) => ({
        action: change.action,
        field: change.field,
        name: change.name,
        oldValue: change.oldValue ?? { key: "", value: "" },
        newValue: change.newValue ?? { key: "", value: "" }
      }))
    }));
  }
  groupItemsByDate(items) {
    const grouped = {};
    items.forEach((item) => {
      const date = new Date(item.date);
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
  static \u0275fac = function FeedSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedSectionComponent, selectors: [["app-feed-section"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 5, consts: [[1, "feed-container"], [1, "bg-red-100", "text-red-800", "p-3", "rounded-md", "mb-3"], [1, "loading-spinner"], [1, "feed-content"], [1, "loading-more"], [1, "text-center", "p-3"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl"], [1, "mt-2"], [1, "p-2"], [1, "text-xl", "font-medium"], ["styleClass", "mb-4"], [1, "flex", "gap-2", "mb-3"], [1, "flex", "flex-col"], [3, "pTooltip"], [1, "muted"], ["layout", "vertical"], [1, "feed-entry-details"], [1, "flex", "flex-wrap"], [1, "entry-text", "flex-1", "mr-3", "mb-1"], [1, "entry-title"], [1, "font-medium"], [1, "pl-2", "mt-1"], ["styleClass", "mb-3"], [1, "pt-1"], [1, "break-words"], [1, "pi", "pi-spin", "pi-spinner", "text-2xl"], ["label", "Load More", "icon", "pi pi-chevron-down", "severity", "secondary", "size", "small", 3, "onClick", "loading"]], template: function FeedSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, FeedSectionComponent_Conditional_1_Template, 2, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, FeedSectionComponent_Conditional_2_Template, 4, 0, "div", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, FeedSectionComponent_For_5_Template, 7, 2, null, null, _forTrack0);
      \u0275\u0275conditionalCreate(6, FeedSectionComponent_Conditional_6_Template, 4, 0, "div", 4);
      \u0275\u0275conditionalCreate(7, FeedSectionComponent_Conditional_7_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(8, FeedSectionComponent_Conditional_8_Template, 2, 0, "div", 5);
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
      \u0275\u0275conditional(ctx.loadingMore() && ctx.auditFeed().length > 0 ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasMoreData() && !ctx.loading() && !ctx.loadingMore() && ctx.auditFeed().length > 0 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.hasMoreData() && ctx.auditFeed().length > 0 ? 8 : -1);
    }
  }, dependencies: [
    CommonModule,
    TimelineModule,
    ButtonModule,
    Button,
    CardModule,
    TooltipModule,
    Tooltip,
    DividerModule,
    Divider,
    TimeAgoPipe
  ], styles: ["\n\n.feed-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: calc(100vh - 250px);\n  width: 100%;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 100%;\n}\n.loading-more[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n.date-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.feed-item[_ngcontent-%COMP%] {\n  transition: background-color 0.3s;\n}\n.feed-item.new-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_highlightNew 3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_highlightNew {\n  0% {\n    background-color: var(--highlight-bg);\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@media (max-width: 768px) {\n  .virtual-scroll-viewport[_ngcontent-%COMP%] {\n    height: calc(100vh - 180px);\n  }\n}\n/*# sourceMappingURL=feed-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedSectionComponent, [{
    type: Component,
    args: [{ selector: "app-feed-section", imports: [
      CommonModule,
      TimelineModule,
      ButtonModule,
      CardModule,
      TooltipModule,
      DividerModule,
      TimeAgoPipe
    ], template: `<div class="feed-container">
  @if (error()) {
    <div class="bg-red-100 text-red-800 p-3 rounded-md mb-3">
      {{ error() }}
    </div>
  }

  <!-- Initial loading spinner (centered) -->
  @if (loading() && auditFeed().length === 0) {
    <div class="loading-spinner">
      <i class="pi pi-spin pi-spinner text-4xl"></i>
      <div class="mt-2">Loading changes...</div>
    </div>
  }

  <!-- Feed content container -->
  <div class="feed-content">
    @for (group of groupedAuditFeed(); track group.date) {
      <div class="p-2">
        <!-- Date header -->
        <span class="text-xl font-medium">
          {{ group.formattedDate }}
        </span>
        <p-divider />

        <!-- Loop through items in this group -->
        @for (item of group.items; track item.id) {
          <div class="flex gap-2 mb-3">
            <div class="flex flex-col">
              <div pTooltip="{{ formatDate(item.date) }}">
                {{ formatTime(item.date) }}
              </div>
              <div class="muted">
                {{ item.date | timeAgo: timestamp() }}
              </div>
            </div>

            <p-divider layout="vertical" />

            <div class="feed-entry-details">
              <div class="flex flex-wrap">
                <div class="entry-text flex-1 mr-3 mb-1">
                  <div class="entry-title">
                    User
                    <strong>{{ item.user.name }}</strong>
                    {{ item.eventType }} {{ item.entity.type }}
                    <span class="font-medium">{{ item.entity.name }}</span>
                  </div>
                  @if (hasChanges(item)) {
                    <div class="pl-2 mt-1">
                      @for (change of item.changes; track $index) {
                        <div class="pt-1">
                          <div class="break-words">
                            @switch (change.action) {
                              @case ('ADD') {
                                <span>added</span>
                                {{ change.name || change.field }} '{{
                                  change.newValue.value
                                }}'
                              }
                              @case ('MODIFY') {
                                <span>changed</span>
                                {{ change.name || change.field }} from '{{
                                  change.oldValue.value
                                }}' to '{{ change.newValue.value }}'
                              }
                              @case ('REMOVE') {
                                <span>removed</span>
                                {{ change.name || change.field }} '{{
                                  change.oldValue.value
                                }}'
                              }
                              @default {
                                {{ change.action }}
                                {{ change.name || change.field }}
                                @if (change?.oldValue?.value) {
                                  from '{{ change.oldValue.value }}'
                                }
                                @if (change?.newValue?.value) {
                                  to '{{ change.newValue.value }}'
                                }
                              }
                            }
                          </div>
                        </div>
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <!-- Only add divider between items, not after the last one -->
          @if (!$last) {
            <p-divider styleClass="mb-3" />
          }
        }
      </div>
      <!-- Add divider between date groups -->
      @if (!$last) {
        <p-divider styleClass="mb-4" />
      }
    }

    <!-- Loading more indicator at bottom -->
    @if (loadingMore() && auditFeed().length > 0) {
      <div class="loading-more">
        <i class="pi pi-spin pi-spinner text-2xl"></i>
        <div class="mt-2">Loading more...</div>
      </div>
    }

    <!-- Load more button -->
    @if (
      hasMoreData() && !loading() && !loadingMore() && auditFeed().length > 0
    ) {
      <div class="text-center p-3">
        <p-button
          label="Load More"
          icon="pi pi-chevron-down"
          (onClick)="loadMore()"
          [loading]="loadingMore()"
          severity="secondary"
          size="small"
        />
      </div>
    }

    <!-- No more data indicator -->
    @if (!hasMoreData() && auditFeed().length > 0) {
      <div class="text-center p-3">No more changes to load</div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/shared/feed-section/feed-section.component.scss */\n.feed-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n}\n.virtual-scroll-viewport {\n  height: calc(100vh - 250px);\n  width: 100%;\n}\n.loading-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 100%;\n}\n.loading-more {\n  padding: 1rem;\n  text-align: center;\n}\n.date-group {\n  position: relative;\n}\n.feed-item {\n  transition: background-color 0.3s;\n}\n.feed-item.new-item {\n  animation: highlightNew 3s ease-out;\n}\n@keyframes highlightNew {\n  0% {\n    background-color: var(--highlight-bg);\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@media (max-width: 768px) {\n  .virtual-scroll-viewport {\n    height: calc(100vh - 180px);\n  }\n}\n/*# sourceMappingURL=feed-section.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedSectionComponent, { className: "FeedSectionComponent", filePath: "src/app/features/administration/components/shared/feed-section/feed-section.component.ts", lineNumber: 43 });
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
    return _SectionConfigBuilder.forDistributor(entity).addSection("settings", "Settings", DistributorSettingsComponent, {
      category: "settings",
      order: 10
    }).addSection("notification-settings", "Notification Settings", DistributorNotificationSettingsComponent, {
      category: "settings",
      order: 20
    }).addSection("external-authentication", "External Authentication", DistributorExternalAuthenticationComponent, {
      category: "settings",
      order: 30
    }).build();
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
    }, {
      entityType: "vendor"
    }).addSection("notification-settings", "Notification Settings", VendorNotificationSettingsComponent, {
      category: "settings",
      order: 20
    }, {
      entityType: "vendor"
    }).addSection("external-authentication", "External Authentication", VendorExternalAuthenticationComponent, {
      category: "settings",
      order: 30
    }, {
      entityType: "vendor"
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
    }, {
      entityType: "client"
    }).addSection("notification-settings", "Notification Settings", ClientNotificationSettingsComponent, {
      category: "settings",
      order: 20
    }, {
      entityType: "client"
    }).addSection("measurement-units", "Measurement Units", ClientMeasurementUnitsComponent, {
      category: "settings",
      order: 30
    }, {
      entityType: "client"
    }).addSection("external-authentication", "External Authentication", ClientExternalAuthenticationComponent, {
      category: "settings",
      order: 40
    }, {
      entityType: "client"
    }).build();
  }
  /**
   * Create standard client changes sections
   */
  static createClientChangesSections(entity) {
    return _SectionConfigBuilder.forClient(entity).addSection("changes", "Changes", FeedSectionComponent, {
      category: "feed",
      order: 10
    }, {
      entity
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
  /**
   * Create standard distributor changes sections
   */
  static createDistributorChangesSections(entity) {
    return _SectionConfigBuilder.forDistributor(entity).addSection("changes", "Changes", FeedSectionComponent, {
      category: "feed",
      order: 10
    }, {
      entity
    }).build();
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
    \u0275\u0275conditionalCreate(0, ModalListFormComponent_For_5_Conditional_0_Template, 1, 5, "p-button", 4);
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
      \u0275\u0275conditionalCreate(1, ModalListFormComponent_Conditional_1_Template, 2, 1, "p", 1);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalListFormComponent, [{
    type: Component,
    args: [{ selector: "app-modal-list-form", imports: [CommonModule, ButtonModule, DynamicFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="modal-list-form-content p-fluid p-3">\n  @if (_subHeader) {\n    <p class="mb-4">\n      {{ _subHeader }}\n    </p>\n  }\n  <app-dynamic-form\n    [fields]="_fields"\n    [hideActions]="true"\n    (formReady)="handleFormReady($event)"\n  >\n  </app-dynamic-form>\n</div>\n\n<!-- Footer with Action Buttons -->\n<div\n  class="modal-list-form-footer flex justify-end gap-2 p-3 border-t border-surface-border"\n>\n  @for (action of _actions; track trackByLabel($index, action)) {\n    @if (isVisible(action)) {\n      <p-button\n        [label]="action.label"\n        [icon]="action.icon"\n        [styleClass]="action.styleClass"\n        [severity]="action.severity"\n        [disabled]="isDisabled(action)"\n        (onClick)="handleAction(action)"\n      ></p-button>\n    }\n  }\n</div>\n' }]
  }], null, null);
})();
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
      \u0275\u0275conditionalCreate(9, FeatureSectionComponent_Conditional_9_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "The following supplemental information is required.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, FeatureSectionComponent_Conditional_12_Template, 1, 3, "app-dynamic-form", 7);
      \u0275\u0275conditionalCreate(13, FeatureSectionComponent_Conditional_13_Template, 1, 4, "app-grid", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureSectionComponent, [{
    type: Component,
    args: [{ selector: "app-feature-section", imports: [CommonModule, ButtonModule, GridComponent, DynamicFormComponent], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <svg
      class="custom-icon-svg w-[2.5rem] h-[2.5rem]"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Book open icon'"
    >
      <use [attr.href]="'assets/sprites/sprite.svg#book-open-solid'"></use>
    </svg>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">
          {{ feature()?.title | titlecase }}
        </h2>
        @if (!isFormEditable() && !createMode()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit entity details'"
              (click)="onEdit()"
              (keydown.enter)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>The following supplemental information is required.</span>
    </div>
  </div>
  @if (isFormEditable() || (createMode() && formFields.length)) {
    <app-dynamic-form
      [fields]="formFields"
      [actions]="actions"
      [hideActions]="createMode()"
      (formSubmit)="onSubmit($event)"
      (formValidityChange)="onFormValidityChange($event)"
      (formValueChange)="onFormValueChange($event)"
    >
    </app-dynamic-form>
  }
  @if (!isFormEditable() && !createMode()) {
    <app-grid
      [data]="entityDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureSectionComponent, { className: "FeatureSectionComponent", filePath: "src/app/features/administration/components/shared/feature-section/feature-section.component.ts", lineNumber: 57 });
})();

export {
  Card,
  CardModule,
  FeedSectionComponent,
  ModalListFormComponent,
  ClientDetailsComponent,
  SectionConfigBuilder,
  FeatureSectionComponent
};
//# sourceMappingURL=chunk-ZTXDF7WX.js.map
