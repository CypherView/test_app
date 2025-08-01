import {
  TimeAgoPipe
} from "./chunk-ALM3S5EO.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel,
  DataView,
  DataViewModule,
  DynamicFormComponent,
  UtilsService
} from "./chunk-SAEMIRMA.js";
import {
  Dialog,
  GridComponent,
  UtilityService,
  createAutocompleteField,
  createDateField,
  createDropdownField,
  createPasswordField,
  createTextField,
  takeUntilDestroyed
} from "./chunk-WYEF5MWL.js";
import {
  BaseComponent,
  BaseStyle,
  Button,
  ButtonModule,
  ConfirmEventType,
  ConfirmationService,
  Footer,
  Kt,
  MessageService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  Validators,
  s2 as s,
  z
} from "./chunk-ZQA7ZUAC.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-G6AKSBPY.js";
import {
  AccountsService,
  AuthDataService,
  AuthService,
  ClientsService,
  NotificationActions
} from "./chunk-LHZDDGBF.js";
import {
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isObject,
  isString
} from "./chunk-2QFPVW6Y.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-OLJEO5KJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  finalize,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-XEZOAFBV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// src/app/features/users/details/details.component.ts
var _c0 = (a0) => ({ "icon-primary": a0 });
function DetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function DetailsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Edit personal details");
  }
}
function DetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function DetailsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
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
function DetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.userDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var DetailsComponent = class _DetailsComponent {
  userProfile = input();
  http = inject(HttpClient);
  utilsService = inject(UtilsService);
  utilityService = inject(UtilityService);
  clientsService = inject(ClientsService);
  authDataService = inject(AuthDataService);
  accountsService = inject(AccountsService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  searchSubject = new Subject();
  formFields = [];
  userDetails = computed(() => {
    const profile = this.userProfile();
    if (isNullOrUndefined(profile))
      return [];
    return [
      {
        key: "Name",
        value: isString(profile.name) ? profile.name : "N/A"
      },
      {
        key: "Email Address",
        value: isString(profile.emailAddress) ? profile.emailAddress : "N/A"
      },
      {
        key: "Mobile Number",
        value: isString(profile.mobile) ? profile.mobile.trim() : "None"
      },
      {
        key: "Password",
        value: "********"
      },
      {
        key: "Time Zone",
        value: isString(profile.timeZoneId) ? profile.timeZoneId : "N/A"
      },
      {
        key: "Language",
        value: this.getLanguageName(profile.language)
      },
      {
        key: "Default Client",
        value: isDefined(profile.defaultClient) && hasProperty(profile.defaultClient, "name") ? profile.defaultClient.name : "None"
      }
    ];
  });
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  clientSearchResults = signal([]);
  timezones = [];
  languages = this.utilsService.getLanguages();
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "" }
  ];
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
      disabled: (form) => isNullOrUndefined(form) || form.pristine
    }
  ];
  constructor() {
    effect(() => {
      const profile = this.userProfile();
      if (profile) {
        this.updateFormFields();
      }
    });
  }
  ngOnInit() {
    this.loadTimezones();
    this.setupClientSearch();
  }
  updateFormFields() {
    this.formFields = [
      createTextField("name", "Name", this.userProfile()?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ]
      }),
      createTextField("emailAddress", "Email Address", this.userProfile()?.emailAddress, {
        name: "email",
        validations: [
          {
            name: "email",
            validator: Validators.email,
            message: "Invalid email"
          },
          {
            name: "required",
            validator: Validators.required,
            message: "Email is required"
          }
        ]
      }),
      createTextField("mobile", "Mobile Number", this.userProfile()?.mobile?.trim(), {
        name: "mobile",
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern("^[0-9]*$"),
            message: "Mobile number must contain only numbers"
          },
          {
            name: "required",
            validator: Validators.required,
            message: "Mobile number is required"
          }
        ]
      }),
      createPasswordField("password", "Password", {
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Password is required"
          }
        ]
      }),
      createDropdownField("timeZoneId", "Time Zone", this.timezones, this.userProfile()?.timeZoneId, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select timezone",
        name: "timeZone",
        props: {
          appendTo: "body"
        }
      }),
      createDropdownField("language", "Language", this.languages.map((lang) => ({
        label: lang.name,
        value: lang.id
      })), this.userProfile()?.language, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select language",
        name: "language",
        props: {
          appendTo: "body"
        }
      }),
      createAutocompleteField("defaultClient", "Default Client", this.userProfile()?.defaultClient?.name, this.clientSearchResults(), this.searchClient.bind(this), {
        name: "defaultClient",
        props: {
          forceSelection: true,
          field: "name",
          placeholder: "Search for clients...",
          completeOnFocus: true,
          appendTo: "body"
        },
        hint: "Enter a client name."
      })
    ];
  }
  loadTimezones() {
    this.http.get("/assets/docs/timezones.json").subscribe((data) => {
      this.timezones = data.map((tz) => ({ label: tz.id, value: tz.id })).sort((a, b) => a.label.localeCompare(b.label));
      this.updateFormFields();
    });
  }
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  getLanguageName(languageId) {
    if (!isString(languageId))
      return "N/A";
    const language = this.languages.find((lang) => isDefined(lang) && hasProperty(lang, "id") && lang.id === languageId);
    return isDefined(language) && hasProperty(language, "name") ? language.name : "N/A";
  }
  onSubmit(formGroup) {
    const profile = this.userProfile();
    if (isNullOrUndefined(profile))
      return;
    this.isSubmitting.set(true);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length > 0) {
      this.accountsService.updateUser(profile.id, dirtyValues).subscribe({
        next: (result) => {
          this.authDataService.setUserProfile(result);
          this.isFormEditable.set(false);
        },
        error: () => {
          this.isFormEditable.set(true);
        },
        complete: () => {
          this.isSubmitting.set(false);
          this.cdr.detectChanges();
        }
      });
    } else {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
    }
  }
  onEdit() {
    this.isFormEditable.set(true);
  }
  setupClientSearch() {
    this.searchSubject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef), switchMap((searchTerm) => {
      const owner = this.authDataService.getUserProfile()?.owner;
      if (!isDefined(owner) || !hasProperty(owner, "id")) {
        throw new Error("Owner ID not found");
      }
      const filters = {
        state: "active",
        name: `*${searchTerm}*`
      };
      const rqlFilter = this.utilityService.constructRqlFilter(filters);
      return this.clientsService.listClients(owner.id, 0, CLIENT_SEARCH_LIMIT, "name", rqlFilter);
    })).subscribe({
      next: (data) => {
        if (isDefined(data) && hasProperty(data, "items")) {
          this.clientSearchResults.set(isNullOrUndefined(data.items) ? [] : data.items);
          this.cdr.detectChanges();
        }
      },
      error: (error) => {
        console.error("Error searching clients:", error);
        this.clientSearchResults.set([]);
      }
    });
  }
  searchClient(searchTerm) {
    this.searchSubject.next(searchTerm);
  }
  static \u0275fac = function DetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsComponent, selectors: [["app-details"]], inputs: { userProfile: [1, "userProfile"] }, decls: 12, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-user", "!text-4xl", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Personal Details");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, DetailsComponent_Conditional_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Complete the following personal details for yourself.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, DetailsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, DetailsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "User icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [DynamicFormComponent, GridComponent, CommonModule, NgClass], styles: ["\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n/*# sourceMappingURL=details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetailsComponent, [{
    type: Component,
    args: [{ selector: "app-details", imports: [DynamicFormComponent, GridComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-user !text-4xl"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'User icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Personal Details</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              [attr.aria-label]="'Edit personal details'"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span>Complete the following personal details for yourself.</span>
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
      [data]="userDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
`, styles: ["/* src/app/features/users/details/details.component.scss */\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n/*# sourceMappingURL=details.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent", filePath: "src/app/features/users/details/details.component.ts", lineNumber: 55 });
})();

// src/app/features/users/notifications/notifications.component.ts
var _c02 = (a0) => ({ "icon-primary": a0 });
function NotificationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 9);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEdit());
    });
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dynamic-form", 10);
    \u0275\u0275listener("formSubmit", function NotificationsComponent_Conditional_10_Template_app_dynamic_form_formSubmit_0_listener($event) {
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
function NotificationsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-grid", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.settingsDetails())("columns", ctx_r1.columns)("showGridLines", false)("hideHeader", true);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  accountsService = inject(AccountsService);
  authDataService = inject(AuthDataService);
  cdr = inject(ChangeDetectorRef);
  userProfile = input();
  isFormEditable = signal(false);
  isSubmitting = signal(false);
  columns = [
    { field: "key", header: "", transform: "uppercase" },
    { field: "value", header: "", transform: "capitalize" }
  ];
  settingsDetails = computed(() => {
    const settings = this.userProfile()?.notifySettings;
    if (!settings)
      return [];
    return [
      { key: "Allow SMS from", value: settings.smsTime?.from },
      { key: "Allow SMS to", value: settings.smsTime?.to },
      { key: "Low Priority", value: this.formatLabel(settings.actions?.low) },
      {
        key: "Medium Priority",
        value: this.formatLabel(settings.actions?.medium)
      },
      { key: "High Priority", value: this.formatLabel(settings.actions?.high) }
    ];
  });
  formFields = [
    {
      name: "smsTime",
      key: "smsTime",
      type: "group",
      fields: [
        createDateField("from", "Allow SMS from", this.userProfile()?.notifySettings?.smsTime?.from, {
          name: "from",
          placeholder: "Select time",
          props: {
            timeOnly: true,
            showSeconds: true
          },
          style: { width: "100%" }
        }),
        createDateField("to", "Allow SMS to", this.userProfile()?.notifySettings?.smsTime?.to, {
          name: "to",
          placeholder: "Select time",
          props: {
            timeOnly: true,
            showSeconds: true
          },
          style: { width: "100%" }
        })
      ]
    },
    {
      key: "actions",
      type: "group",
      name: "actions",
      fields: [
        createDropdownField("low", "Low Priority", Object.values(NotificationActions.LowEnum).map((value) => ({
          label: this.formatLabel(value),
          value
        })), this.userProfile()?.notifySettings?.actions?.low, {
          name: "low",
          props: {
            appendTo: "body"
          }
        }),
        createDropdownField("medium", "Medium Priority", Object.values(NotificationActions.MediumEnum).map((value) => ({
          label: this.formatLabel(value),
          value
        })), this.userProfile()?.notifySettings?.actions?.medium, {
          name: "medium",
          props: {
            appendTo: "body"
          }
        }),
        createDropdownField("high", "High Priority", Object.values(NotificationActions.HighEnum).map((value) => ({
          label: this.formatLabel(value),
          value
        })), this.userProfile()?.notifySettings?.actions?.high, {
          name: "high",
          props: {
            appendTo: "body"
          }
        })
      ]
    }
  ];
  actions = [
    {
      label: "Cancel",
      action: () => this.isFormEditable.set(false),
      severity: "secondary"
    },
    {
      label: "Save",
      action: (formData) => {
        if (!isDefined(formData))
          return;
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => !isDefined(form) || form.pristine
    }
  ];
  constructor() {
    effect(() => {
      const settings = this.userProfile()?.notifySettings;
      if (settings) {
        this.updateFormValues(this.formFields, settings);
      }
    });
  }
  updateFormValues(fields, values) {
    if (isNullOrUndefined(values))
      return;
    fields.forEach((field) => {
      if (field.type === "group" && field.fields) {
        this.updateFormValues(field.fields, values[field.key]);
      } else if (field.key && values?.[field.key] !== void 0) {
        field.value = values[field.key];
      }
    });
  }
  getDirtyGroupValues(group, path) {
    if (!isDefined(group) || !isString(path))
      return {};
    const formGroup = group.get(path);
    if (!isDefined(formGroup) || !isDefined(formGroup.controls))
      return {};
    return Object.keys(formGroup.controls).filter((key) => {
      const control = group.get(`${path}.${key}`);
      return isDefined(control) && control.dirty;
    }).reduce((acc, key) => {
      const control = group.get(`${path}.${key}`);
      if (isDefined(control)) {
        return __spreadProps(__spreadValues({}, acc), {
          [key]: control.value
        });
      }
      return acc;
    }, {});
  }
  createUpdatedProfile(profile, dirtyValues) {
    if (!isDefined(profile) || !isObject(dirtyValues))
      return {};
    const hasSmsTimeChanges = isObject(dirtyValues.smsTime) && Object.keys(dirtyValues.smsTime).length > 0;
    const hasActionChanges = isObject(dirtyValues.actions) && Object.keys(dirtyValues.actions).length > 0;
    return {
      notifySettings: __spreadValues(__spreadValues(__spreadValues({}, profile.notifySettings), hasSmsTimeChanges && { smsTime: dirtyValues.smsTime }), hasActionChanges && { actions: dirtyValues.actions })
    };
  }
  onSubmit(formGroup) {
    const profile = this.userProfile();
    if (!isDefined(profile))
      return;
    this.isSubmitting.set(true);
    const dirtyValues = {
      smsTime: this.getDirtyGroupValues(formGroup, "smsTime"),
      actions: this.getDirtyGroupValues(formGroup, "actions")
    };
    const hasChanges = Object.values(dirtyValues).some((group) => Object.keys(group).length > 0);
    if (!hasChanges) {
      this.isFormEditable.set(false);
      this.isSubmitting.set(false);
      return;
    }
    const updatedProfile = this.createUpdatedProfile(profile, dirtyValues);
    this.accountsService.updateUser(profile.id, updatedProfile).pipe(finalize(() => {
      this.isSubmitting.set(false);
      this.isFormEditable.set(false);
    })).subscribe({
      next: (result) => {
        this.authDataService.setUserProfile(result);
      }
    });
  }
  onEdit() {
    this.isFormEditable.update((editable) => !editable);
  }
  formatLabel(value) {
    if (!isString(value))
      return "";
    switch (value.toLowerCase()) {
      case "emailsms":
        return "Email & SMS";
      case "sms":
        return "SMS";
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], inputs: { userProfile: [1, "userProfile"] }, decls: 12, vars: 6, consts: [[1, "card", "pt-2"], [1, "mb-4", "p-2", "flex", "justify-start", "items-center"], [1, "pi", "pi-bell", "!text-4xl", 3, "ngClass"], [1, "pl-6", "flex-1"], [1, "flex", "justify-between", "items-center"], [1, "text-xl", "font-semibold", "m-0"], [1, "icon-light"], [3, "fields", "actions"], ["tableStyleClass", "info-display !w-auto", 3, "data", "columns", "showGridLines", "hideHeader"], [1, "pi", "pi-pen-to-square", "action", "hover", "!text-2xl", 3, "click"], [3, "formSubmit", "fields", "actions"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, NotificationsComponent_Conditional_7_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, " Configure alert notification actions and allowed SMS times.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, NotificationsComponent_Conditional_10_Template, 1, 2, "app-dynamic-form", 7)(11, NotificationsComponent_Conditional_11_Template, 1, 4, "app-grid", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx.isFormEditable()));
      \u0275\u0275attribute("aria-label", "Notifications icon");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.isFormEditable() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isFormEditable() ? 10 : 11);
    }
  }, dependencies: [DynamicFormComponent, GridComponent, CommonModule, NgClass], styles: ["\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n/*# sourceMappingURL=notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", imports: [DynamicFormComponent, GridComponent, CommonModule], template: `<div class="card pt-2">
  <div class="mb-4 p-2 flex justify-start items-center">
    <span
      class="pi pi-bell !text-4xl"
      [ngClass]="{ 'icon-primary': isFormEditable() }"
      [attr.aria-label]="'Notifications icon'"
    ></span>

    <div class="pl-6 flex-1">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold m-0">Notifications</h2>
        @if (!isFormEditable()) {
          <div class="icon-light">
            <span
              class="pi pi-pen-to-square action hover !text-2xl"
              (click)="onEdit()"
            ></span>
          </div>
        }
      </div>
      <span> Configure alert notification actions and allowed SMS times.</span>
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
      [data]="settingsDetails()"
      [columns]="columns"
      [showGridLines]="false"
      [hideHeader]="true"
      tableStyleClass="info-display !w-auto"
    ></app-grid>
  }
</div>
`, styles: ["/* src/app/features/users/notifications/notifications.component.scss */\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  border: none;\n  padding: 0.5rem 1rem;\n}\n/*# sourceMappingURL=notifications.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/users/notifications/notifications.component.ts", lineNumber: 43 });
})();

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style2 = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c03 = ["header"];
var _c1 = ["footer"];
var _c2 = ["rejecticon"];
var _c3 = ["accepticon"];
var _c4 = ["message"];
var _c5 = ["icon"];
var _c6 = ["headless"];
var _c7 = [[["p-footer"]]];
var _c8 = ["p-footer"];
var _c9 = (a0, a1, a2) => ({
  $implicit: a0,
  onAccept: a1,
  onReject: a2
});
var _c10 = (a0) => ({
  $implicit: a0
});
function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c9, ctx_r1.confirmation, ctx_r1.onAccept.bind(ctx_r1), ctx_r1.onReject.bind(ctx_r1)));
  }
}
function ConfirmDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
  }
}
function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_0_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.iconTemplate || ctx_r1._iconTemplate);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.option("icon"));
    \u0275\u0275property("ngClass", ctx_r1.cx("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_i_0_Template, 1, 3, "i", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.option("icon"));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.messageTemplate || ctx_r1._messageTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c10, ctx_r1.confirmation));
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("message"));
    \u0275\u0275property("innerHTML", ctx_r1.option("message"), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1)(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1, "i", 9);
    \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 4)(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 3, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.iconTemplate || ctx_r1._iconTemplate ? 0 : !ctx_r1.iconTemplate && !ctx_r1._iconTemplate && !ctx_r1._messageTemplate && !ctx_r1.messageTemplate ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.messageTemplate || ctx_r1._messageTemplate ? 2 : 3);
  }
}
function ConfirmDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0);
    \u0275\u0275template(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.headerTemplate || ctx_r1._headerTemplate ? 0 : -1);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_i_0_Template, 1, 2, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.rejectIcon && !ctx_r1.rejectIconTemplate && !ctx_r1._rejectIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"))("ariaLabel", ctx_r1.option("rejectButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getRejectButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275classMap(ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_i_0_Template, 1, 2, "i", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", ctx_r1.option("acceptIcon"));
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Conditional_0_Template, 1, 1, "i", 16);
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_1_Template, 1, 0, null, 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.acceptIcon && !ctx_r1._acceptIconTemplate && !ctx_r1.acceptIconTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_ng_template_1_Template, 2, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("styleClass", ctx_r1.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"))("ariaLabel", ctx_r1.option("acceptButtonProps", "ariaLabel"))("buttonProps", ctx_r1.getAcceptButtonProps());
  }
}
function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_p_button_0_Template, 3, 4, "p-button", 14)(1, ConfirmDialog_ng_template_4_Conditional_1_p_button_1_Template, 3, 4, "p-button", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.option("rejectVisible"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.option("acceptVisible"));
  }
}
function ConfirmDialog_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1);
    \u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.footerTemplate || ctx_r1._footerTemplate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.footerTemplate && !ctx_r1._footerTemplate ? 1 : -1);
  }
}
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class _ConfirmDialogStyle extends BaseStyle {
  name = "confirmdialog";
  theme = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmDialogStyle)))(__ngFactoryType__ || _ConfirmDialogStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmDialogStyle,
    factory: _ConfirmDialogStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog extends BaseComponent {
  confirmationService;
  zone;
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "topleft":
      case "bottomleft":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "topright":
      case "bottomright":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = true;
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  headlessTemplate;
  templates;
  _headerTemplate;
  _footerTemplate;
  _rejectIconTemplate;
  _acceptIconTemplate;
  _messageTemplate;
  _iconTemplate;
  _headlessTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = s("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  constructor(confirmationService, zone) {
    super();
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "message":
          this._messageTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? s("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  getButtonStyleClass(cx, opt) {
    const cxClass = this.cx(cx);
    const optionClass = this.option(opt);
    return [cxClass, optionClass].filter(Boolean).join(" ");
  }
  getElementToFocus() {
    switch (this.option("defaultFocus")) {
      case "accept":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
      case "reject":
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-reject");
      case "close":
        return z(this.dialog.el.nativeElement, ".p-dialog-header-close");
      case "none":
        return null;
      //backward compatibility
      default:
        return z(this.dialog.el.nativeElement, ".p-confirm-dialog-accept");
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
      Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.unsubscribeConfirmationEvents();
    this.confirmation = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
    super.ngOnDestroy();
  }
  onVisibleChange(value) {
    if (!value) {
      this.close();
    } else {
      this.visible = value;
    }
  }
  onAccept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    if (this.confirmation) {
      this.confirmation.acceptEvent?.unsubscribe();
      this.confirmation.rejectEvent?.unsubscribe();
    }
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.config.getTranslation(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialog)(\u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"], ["p-confirmdialog"], ["p-confirm-dialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: [2, "acceptVisible", "acceptVisible", booleanAttribute],
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: [2, "rejectVisible", "rejectVisible", booleanAttribute],
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: [2, "closeOnEscape", "closeOnEscape", booleanAttribute],
      dismissableMask: [2, "dismissableMask", "dismissableMask", booleanAttribute],
      blockScroll: [2, "blockScroll", "blockScroll", booleanAttribute],
      rtl: [2, "rtl", "rtl", booleanAttribute],
      closable: [2, "closable", "closable", booleanAttribute],
      appendTo: "appendTo",
      key: "key",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      transitionOptions: "transitionOptions",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      visible: "visible",
      position: "position",
      draggable: [2, "draggable", "draggable", booleanAttribute]
    },
    outputs: {
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmDialogStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 6,
    vars: 14,
    consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["icon", ""], ["role", "alertdialog", 3, "visibleChange", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "ngClass", "class"], [3, "class", "innerHTML"], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], [3, "innerHTML"], [3, "label", "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], [3, "onClick", "label", "styleClass", "ariaLabel", "buttonProps"], [3, "class"], [3, "class", 4, "ngIf"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275elementStart(0, "p-dialog", 6, 0);
        \u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onVisibleChange($event));
        });
        \u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
        \u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275property("visible", ctx.visible)("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass))("modal", true)("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.option("appendTo"))("position", ctx.position)("dismissableMask", ctx.dismissableMask)("draggable", ctx.draggable);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.headlessTemplate || ctx._headlessTemplate ? 2 : 3);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, Button, Dialog, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog, p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [CommonModule, Button, Dialog, SharedModule],
      template: `
        <p-dialog
            #dialog
            [visible]="visible"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass)"
            [modal]="true"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="option('appendTo')"
            [position]="position"
            [style]="style"
            [dismissableMask]="dismissableMask"
            [draggable]="draggable"
        >
            @if (headlessTemplate || _headlessTemplate) {
                <ng-template #headless>
                    <ng-container
                        *ngTemplateOutlet="
                            headlessTemplate || _headlessTemplate;
                            context: {
                                $implicit: confirmation,
                                onAccept: onAccept.bind(this),
                                onReject: onReject.bind(this)
                            }
                        "
                    ></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate || _headerTemplate) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate || _iconTemplate) {
                        <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                    } @else if (!iconTemplate && !_iconTemplate && !_messageTemplate && !messageTemplate) {
                        <i [ngClass]="cx('icon')" [class]="option('icon')" *ngIf="option('icon')"></i>
                    }
                    @if (messageTemplate || _messageTemplate) {
                        <ng-template *ngTemplateOutlet="messageTemplate || _messageTemplate; context: { $implicit: confirmation }"></ng-template>
                    } @else {
                        <span [class]="cx('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate || _footerTemplate) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                }
                @if (!footerTemplate && !_footerTemplate) {
                    <p-button
                        *ngIf="option('rejectVisible')"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [styleClass]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                        [ariaLabel]="option('rejectButtonProps', 'ariaLabel')"
                        [buttonProps]="getRejectButtonProps()"
                    >
                        <ng-template #icon>
                            @if (rejectIcon && !rejectIconTemplate && !_rejectIconTemplate) {
                                <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')"></i>
                            }
                            <ng-template *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [styleClass]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [ariaLabel]="option('acceptButtonProps', 'ariaLabel')"
                        [buttonProps]="getAcceptButtonProps()"
                    >
                        <ng-template #icon>
                            @if (acceptIcon && !_acceptIconTemplate && !acceptIconTemplate) {
                                <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')"></i>
                            }
                            <ng-template *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                }
            </ng-template>
        </p-dialog>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ConfirmDialogStyle]
    }]
  }], () => [{
    type: ConfirmationService
  }, {
    type: NgZone
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    messageTemplate: [{
      type: ContentChild,
      args: ["message", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmDialogModule,
    imports: [ConfirmDialog, SharedModule],
    exports: [ConfirmDialog, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/users/sessions/sessions.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SessionsComponent_ng_template_2_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "\xB7 current session");
    \u0275\u0275elementEnd();
  }
}
function SessionsComponent_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "b", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "timeAgo");
    \u0275\u0275conditionalCreate(8, SessionsComponent_ng_template_2_For_1_Conditional_8_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "i", 11);
    \u0275\u0275listener("click", function SessionsComponent_ng_template_2_For_1_Template_i_click_12_listener() {
      const session_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.signOut(session_r2));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "hr", 12);
  }
  if (rf & 2) {
    const session_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Device icon");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", session_r2 == null ? null : session_r2.ip, " @ ", session_r2 == null ? null : session_r2.hostname, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, session_r2 == null ? null : session_r2.start, ctx_r2.timestamp()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((session_r2 == null ? null : session_r2.current) ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((session_r2 == null ? null : session_r2.agent) || "Unknown device");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Sign out session");
  }
}
function SessionsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SessionsComponent_ng_template_2_For_1_Template, 14, 10, null, null, _forTrack0);
  }
  if (rf & 2) {
    const sessions_r4 = ctx.$implicit;
    \u0275\u0275repeater(sessions_r4);
  }
}
var SessionsComponent = class _SessionsComponent {
  sessions = input.required();
  refreshSessions = output();
  authService = inject(AuthService);
  confirmationService = inject(ConfirmationService);
  refreshTrigger = signal(0);
  timestamp = signal(Date.now());
  isLoading = signal(false);
  sessionsList = computed(() => {
    this.refreshTrigger();
    const sessions = this.sessions();
    return isDefined(sessions) ? sessions : [];
  });
  refresh() {
    if (this.isLoading())
      return;
    this.refreshTrigger.update((v) => v + 1);
    this.timestamp.set(Date.now());
  }
  signOut(session) {
    if (!isDefined(session) || !hasProperty(session, "id") || !isString(session.id)) {
      console.warn("Invalid session data");
      return;
    }
    this.confirmationService.confirm({
      header: "Confirmation",
      message: "Are you sure you want to force log out the selected session?",
      closable: true,
      closeOnEscape: true,
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: {
        label: "Cancel",
        severity: "secondary",
        outlined: true
      },
      acceptButtonProps: {
        label: "Ok"
      },
      accept: () => {
        this.isLoading.set(true);
        this.authService.signOut({ session: session.id }).subscribe({
          next: () => {
            this.refreshSessions.emit();
          },
          error: (error) => {
            console.error("Failed to sign out session:", error);
          },
          complete: () => {
            this.isLoading.set(false);
          }
        });
      }
    });
  }
  static \u0275fac = function SessionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SessionsComponent, selectors: [["app-sessions"]], inputs: { sessions: [1, "sessions"] }, outputs: { refreshSessions: "refreshSessions" }, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService])], decls: 5, vars: 1, consts: [["dv", ""], ["list", ""], [3, "value"], [1, "flex", "justify-between", "gap-4", "p-2", "pr-0", "w-100", "mt-2"], [1, "pi", "pi-desktop", "self-center", "text-wrap", "!text-xl-5"], [1, "flex", "flex-col", "self-start", "flex-1"], [1, "mb-0"], [1, "muted"], [1, "ml-1"], [1, "text-sm", "mt-1", "muted"], [1, "align-self-end", "ml-2"], [1, "pi", "pi-trash", "cursor-pointer", "action", "hover", "!text-xl-25", 3, "click"], [1, "my-2"]], template: function SessionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-dataview", 2, 0);
      \u0275\u0275template(2, SessionsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.sessionsList());
    }
  }, dependencies: [DataViewModule, DataView, TimeAgoPipe, ConfirmDialogModule, ConfirmDialog, ButtonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionsComponent, [{
    type: Component,
    args: [{ selector: "app-sessions", imports: [DataViewModule, TimeAgoPipe, ConfirmDialogModule, ButtonModule], providers: [ConfirmationService, MessageService], template: `<p-dataview #dv [value]="sessionsList()">
  <ng-template #list let-sessions>
    @for (session of sessions; track session.id) {
      <div class="flex justify-between gap-4 p-2 pr-0 w-100 mt-2">
        <i
          class="pi pi-desktop self-center text-wrap !text-xl-5"
          [attr.aria-label]="'Device icon'"
        ></i>
        <div class="flex flex-col self-start flex-1">
          <b class="mb-0"> {{ session?.ip }} &#64; {{ session?.hostname }} </b>
          <span class="muted"
            >{{ session?.start | timeAgo: timestamp() }}
            @if (session?.current) {
              <span class="ml-1">\xB7 current session</span>
            }
          </span>
          <span class="text-sm mt-1 muted">{{
            session?.agent || 'Unknown device'
          }}</span>
        </div>

        <div class="align-self-end ml-2">
          <i
            class="pi pi-trash cursor-pointer action hover !text-xl-25"
            [attr.aria-label]="'Sign out session'"
            (click)="signOut(session)"
          ></i>
        </div>
      </div>

      <hr class="my-2" />
    }</ng-template
></p-dataview>
<p-confirmdialog />
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionsComponent, { className: "SessionsComponent", filePath: "src/app/features/users/sessions/sessions.component.ts", lineNumber: 25 });
})();

// src/app/features/users/profile/profile.component.ts
var _c04 = ["sessionsComponent"];
var _c12 = () => ["information", "notifications", "sessions"];
var _c22 = () => [];
var SEARCH_DEBOUNCE_TIME = 300;
var CLIENT_SEARCH_LIMIT = 6;
var ProfileComponent = class _ProfileComponent {
  userProfileService = inject(AuthService);
  authDataService = inject(AuthDataService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  sessionsComponent;
  userProfile = this.authDataService.profile;
  isLoading = signal(false);
  ngOnInit() {
    this.fetchUserProfile();
  }
  fetchUserProfile() {
    this.isLoading.set(true);
    this.userProfileService.getUserProfile().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => {
        this.authDataService.setUserProfile(profile);
      },
      complete: () => {
        this.isLoading.set(false);
        this.cdr.detectChanges();
      }
    });
  }
  onRefresh() {
    this.fetchUserProfile();
    this.sessionsComponent?.refresh();
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sessionsComponent = _t.first);
    }
  }, decls: 19, vars: 11, consts: [["sessionsComponent", ""], [3, "value", "multiple"], ["value", "information", 3, "disabled"], [1, "uppercase"], ["value", "information"], [3, "userProfile"], ["value", "notifications"], ["value", "sessions"], [1, "flex", "justify-between", "items-center", "py-4"], [1, "pi", "pi-refresh", "cursor-pointer", "action", "hover", 3, "click"], [3, "refreshSessions", "sessions"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-accordion", 1)(1, "p-accordion-panel", 2)(2, "p-accordion-header")(3, "span", 3);
      \u0275\u0275text(4, "Information");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "p-accordion-panel", 4)(6, "p-accordion-content");
      \u0275\u0275element(7, "app-details", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-accordion-panel", 6)(9, "p-accordion-content");
      \u0275\u0275element(10, "app-notifications", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-accordion-panel", 7)(12, "p-accordion-content")(13, "div", 8)(14, "span", 3);
      \u0275\u0275text(15, "Active Sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "i", 9);
      \u0275\u0275listener("click", function ProfileComponent_Template_i_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRefresh());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "app-sessions", 10, 0);
      \u0275\u0275listener("refreshSessions", function ProfileComponent_Template_app_sessions_refreshSessions_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRefresh());
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275property("value", \u0275\u0275pureFunction0(9, _c12))("multiple", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("userProfile", ctx.userProfile());
      \u0275\u0275advance(3);
      \u0275\u0275property("userProfile", ctx.userProfile());
      \u0275\u0275advance(6);
      \u0275\u0275classProp("animate-spin", ctx.isLoading());
      \u0275\u0275attribute("aria-label", "Refresh sessions");
      \u0275\u0275advance();
      \u0275\u0275property("sessions", ((tmp_8_0 = ctx.userProfile()) == null ? null : tmp_8_0.sessions) || \u0275\u0275pureFunction0(10, _c22));
    }
  }, dependencies: [
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    DetailsComponent,
    NotificationsComponent,
    SessionsComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [
      AccordionModule,
      DetailsComponent,
      NotificationsComponent,
      SessionsComponent
    ], template: `<p-accordion
  [value]="['information', 'notifications', 'sessions']"
  [multiple]="true"
>
  <p-accordion-panel value="information" [disabled]="true">
    <p-accordion-header>
      <span class="uppercase">Information</span>
    </p-accordion-header>
  </p-accordion-panel>

  <p-accordion-panel value="information">
    <p-accordion-content>
      <app-details [userProfile]="userProfile()"></app-details>
    </p-accordion-content>
  </p-accordion-panel>

  <p-accordion-panel value="notifications">
    <p-accordion-content>
      <app-notifications [userProfile]="userProfile()"></app-notifications>
    </p-accordion-content>
  </p-accordion-panel>

  <p-accordion-panel value="sessions">
    <p-accordion-content>
      <div class="flex justify-between items-center py-4">
        <span class="uppercase">Active Sessions</span>
        <i
          class="pi pi-refresh cursor-pointer action hover"
          [class.animate-spin]="isLoading()"
          [attr.aria-label]="'Refresh sessions'"
          (click)="onRefresh()"
        ></i>
      </div>

      <app-sessions
        [sessions]="userProfile()?.sessions || []"
        (refreshSessions)="onRefresh()"
        #sessionsComponent
      ></app-sessions>
    </p-accordion-content>
  </p-accordion-panel>
</p-accordion>
` }]
  }], null, { sessionsComponent: [{
    type: ViewChild,
    args: ["sessionsComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/users/profile/profile.component.ts", lineNumber: 32 });
})();

export {
  ConfirmDialog,
  ConfirmDialogModule,
  SEARCH_DEBOUNCE_TIME,
  CLIENT_SEARCH_LIMIT,
  ProfileComponent
};
//# sourceMappingURL=chunk-EFTPIZ54.js.map
