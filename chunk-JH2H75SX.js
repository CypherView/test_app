import {
  AdaptiveLayoutComponent
} from "./chunk-X7XBYQWE.js";
import "./chunk-CKUB7MTL.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  DataView,
  DataViewModule,
  TimeAgoPipe,
  UtilsService
} from "./chunk-GYVQCOXJ.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-PVMHRDPC.js";
import {
  GridComponent
} from "./chunk-NVVPOS2X.js";
import "./chunk-MZGGMYX2.js";
import {
  DynamicFormComponent
} from "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import {
  UtilityService
} from "./chunk-IDQPRALM.js";
import "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import {
  Tab,
  TabList,
  Tabs,
  TabsModule
} from "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
  Validators
} from "./chunk-4CAIP3KE.js";
import "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import {
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-YL4UBWIM.js";
import {
  AccountsService,
  AuthDataService,
  AuthService,
  CLIENT_SEARCH_LIMIT,
  ClientsService,
  CommonModule,
  HttpClient,
  NavigationEnd,
  NgClass,
  NotificationActions,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SEARCH_DEBOUNCE_TIME,
  createAutocompleteField,
  createDateField,
  createDropdownField,
  createPasswordField,
  createTextField,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isObject,
  isString,
  takeUntilDestroyed
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  Output,
  Subject,
  ViewChild,
  computed,
  debounceTime,
  effect,
  filter,
  finalize,
  inject,
  input,
  of,
  output,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/users/profile-container/profile-container.component.ts
var _c0 = () => ["./profile"];
var _c1 = (a0) => ({ content: a0, scrollable: true, minSize: 15 });
var _c2 = (a0) => ({ content: a0, scrollable: true, maxSize: 75 });
var _c3 = (a0, a1) => [a0, a1];
var _c4 = () => [25, 75];
var _c5 = () => [15, 0];
function ProfileContainerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet", 7);
  }
}
function ProfileContainerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet", 8);
  }
}
var ProfileContainerComponent = class _ProfileContainerComponent {
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  activeTab = signal("profile", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  constructor() {
    this.setupNavigationHandler();
  }
  setupNavigationHandler() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (event) => this.handleNavigation(event)
    });
  }
  handleNavigation(_event) {
    this.activeTab.set("profile");
  }
  static \u0275fac = function ProfileContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileContainerComponent, selectors: [["app-profile-container"]], decls: 11, vars: 19, consts: [["template1", ""], ["template2", ""], [1, "flex", "flex-col", "h-full"], [3, "scrollable", "value"], ["routerLinkActive", "p-tab-active", 3, "value", "routerLink"], [1, "flex-1", "overflow-hidden"], ["stateKey", "layout", 1, "h-full", 3, "panels", "panelSizes", "minSizes", "defaultLayout", "responsive"], ["name", "primary"], ["name", "detail"]], template: function ProfileContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "p-tabs", 3)(2, "p-tablist")(3, "p-tab", 4);
      \u0275\u0275text(4, " Profile ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 5)(6, "app-adaptive-layout", 6);
      \u0275\u0275template(7, ProfileContainerComponent_ng_template_7_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ProfileContainerComponent_ng_template_9_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const template1_r1 = \u0275\u0275reference(8);
      const template2_r2 = \u0275\u0275reference(10);
      \u0275\u0275advance();
      \u0275\u0275property("scrollable", true)("value", ctx.activeTab());
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "profile")("routerLink", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("panels", \u0275\u0275pureFunction2(14, _c3, \u0275\u0275pureFunction1(10, _c1, template1_r1), \u0275\u0275pureFunction1(12, _c2, template2_r2)))("panelSizes", \u0275\u0275pureFunction0(17, _c4))("minSizes", \u0275\u0275pureFunction0(18, _c5))("defaultLayout", "horizontal")("responsive", true);
    }
  }, dependencies: [AdaptiveLayoutComponent, TabsModule, Tabs, TabList, Tab, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[_nghost-%COMP%]     .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n[_nghost-%COMP%]     .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     p-splitter {\n  height: 100%;\n}\n/*# sourceMappingURL=profile-container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileContainerComponent, [{
    type: Component,
    args: [{ selector: "app-profile-container", imports: [AdaptiveLayoutComponent, TabsModule, RouterModule], template: `<div class="flex flex-col h-full">
  <p-tabs [scrollable]="true" [value]="activeTab()">
    <p-tablist>
      <p-tab
        [value]="'profile'"
        [routerLink]="['./profile']"
        routerLinkActive="p-tab-active"
      >
        Profile
      </p-tab>
    </p-tablist>
  </p-tabs>

  <div class="flex-1 overflow-hidden">
    <app-adaptive-layout
      [panels]="[
        {
          content: template1,
          scrollable: true,
          minSize: 15,
        },
        {
          content: template2,
          scrollable: true,
          maxSize: 75,
        },
      ]"
      [panelSizes]="[25, 75]"
      [minSizes]="[15, 0]"
      [defaultLayout]="'horizontal'"
      [responsive]="true"
      stateKey="layout"
      class="h-full"
    >
      <ng-template #template1>
        <router-outlet name="primary"></router-outlet>
      </ng-template>

      <ng-template #template2>
        <router-outlet name="detail"></router-outlet>
      </ng-template>
    </app-adaptive-layout>
  </div>
</div>
`, styles: ["/* src/app/features/users/profile-container/profile-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n:host ::ng-deep .p-splitter-panel {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep app-adaptive-layout app-adaptive-layout .p-splitter {\n  border-width: 0px;\n}\n:host ::ng-deep .panel-transition {\n  transition-property: all;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host ::ng-deep p-splitter {\n  height: 100%;\n}\n/*# sourceMappingURL=profile-container.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileContainerComponent, { className: "ProfileContainerComponent", filePath: "src/app/features/users/profile-container/profile-container.component.ts", lineNumber: 16 });
})();

// src/app/features/users/details/details.component.ts
var _c02 = (a0) => ({ "icon-primary": a0 });
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
  userProfile = input(...ngDevMode ? [void 0, { debugName: "userProfile" }] : []);
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
  }, ...ngDevMode ? [{ debugName: "userDetails" }] : []);
  isFormEditable = signal(false, ...ngDevMode ? [{ debugName: "isFormEditable" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  clientSearchResults = signal([], ...ngDevMode ? [{ debugName: "clientSearchResults" }] : []);
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
          void this.authDataService.setUserProfile(result);
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
    this.searchSubject.pipe(debounceTime(SEARCH_DEBOUNCE_TIME), takeUntilDestroyed(this.destroyRef), switchMap((searchTerm) => {
      const owner = this.authDataService.getUserProfile()?.owner;
      if (!isDefined(owner) || !hasProperty(owner, "id")) {
        throw new Error("Owner ID not found");
      }
      const trimmedSearchTerm = searchTerm.trim();
      if (trimmedSearchTerm.length === 0) {
        return of({ items: [] });
      }
      const filters = {
        state: { value: "active", operator: "=" },
        name: { value: `*${trimmedSearchTerm}*`, operator: "=" }
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx.isFormEditable()));
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
  }], () => [], { userProfile: [{ type: Input, args: [{ isSignal: true, alias: "userProfile", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent", filePath: "src/app/features/users/details/details.component.ts", lineNumber: 55 });
})();

// src/app/features/users/notifications/notifications.component.ts
var _c03 = (a0) => ({ "icon-primary": a0 });
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
  userProfile = input(...ngDevMode ? [void 0, { debugName: "userProfile" }] : []);
  isFormEditable = signal(false, ...ngDevMode ? [{ debugName: "isFormEditable" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
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
  }, ...ngDevMode ? [{ debugName: "settingsDetails" }] : []);
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
      notifySettings: __spreadValues(__spreadValues(__spreadValues({}, profile.notifySettings), hasSmsTimeChanges ? { smsTime: dirtyValues.smsTime } : {}), hasActionChanges ? { actions: dirtyValues.actions } : {})
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
        void this.authDataService.setUserProfile(result);
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c03, ctx.isFormEditable()));
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
  }], () => [], { userProfile: [{ type: Input, args: [{ isSignal: true, alias: "userProfile", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/users/notifications/notifications.component.ts", lineNumber: 43 });
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
  sessions = input.required(...ngDevMode ? [{ debugName: "sessions" }] : []);
  refreshSessions = output();
  authService = inject(AuthService);
  confirmationService = inject(ConfirmationService);
  refreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "refreshTrigger" }] : []);
  timestamp = signal(Date.now(), ...ngDevMode ? [{ debugName: "timestamp" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  sessionsList = computed(() => {
    this.refreshTrigger();
    const sessions = this.sessions();
    return isDefined(sessions) ? sessions : [];
  }, ...ngDevMode ? [{ debugName: "sessionsList" }] : []);
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
  }, dependencies: [DataViewModule, DataView, ConfirmDialogModule, ConfirmDialog, ButtonModule, TimeAgoPipe], encapsulation: 2 });
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
  }], null, { sessions: [{ type: Input, args: [{ isSignal: true, alias: "sessions", required: true }] }], refreshSessions: [{ type: Output, args: ["refreshSessions"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SessionsComponent, { className: "SessionsComponent", filePath: "src/app/features/users/sessions/sessions.component.ts", lineNumber: 25 });
})();

// src/app/features/users/profile/profile.component.ts
var _c04 = ["sessionsComponent"];
var _c12 = () => ["information", "notifications", "sessions"];
var _c22 = () => [];
var ProfileComponent = class _ProfileComponent {
  userProfileService = inject(AuthService);
  authDataService = inject(AuthDataService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  sessionsComponent;
  userProfile = this.authDataService.profile;
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  ngOnInit() {
    this.fetchUserProfile();
  }
  fetchUserProfile() {
    this.isLoading.set(true);
    this.userProfileService.getUserProfile().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (profile) => {
        void this.authDataService.setUserProfile(profile);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/users/profile/profile.component.ts", lineNumber: 29 });
})();

// src/app/features/users/users.routes.ts
var USERS_ROUTES = [
  {
    path: "",
    component: ProfileContainerComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  }
];
export {
  USERS_ROUTES
};
//# sourceMappingURL=chunk-JH2H75SX.js.map
