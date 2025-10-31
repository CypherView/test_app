import {
  Password,
  PasswordModule
} from "./chunk-YR6RLKDU.js";
import {
  ClientSelectorComponent
} from "./chunk-QFHWUUSA.js";
import {
  ToastService
} from "./chunk-LWAGH4EB.js";
import {
  takeUntilDestroyed
} from "./chunk-7PPW7MEH.js";
import {
  BaseComponent,
  BaseStyle,
  Button,
  ButtonModule,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Select,
  SelectModule,
  SharedModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LKPIGFER.js";
import "./chunk-GNA4F765.js";
import {
  ApiUrlService,
  AuthService,
  AuthService2,
  AuthTokenManagerService,
  UserSessionService,
  environment,
  isDefined,
  isNullOrUndefined,
  isObject
} from "./chunk-UOL47JT7.js";
import {
  CommonModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-W5MMOG3B.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Injectable,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  filter,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-Q56RWZOJ.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@primeuix/styles/dist/floatlabel/index.mjs
var style = "\n    .p-floatlabel {\n        display: block;\n        position: relative;\n    }\n\n    .p-floatlabel label {\n        position: absolute;\n        pointer-events: none;\n        top: 50%;\n        transform: translateY(-50%);\n        transition-property: all;\n        transition-timing-function: ease;\n        line-height: 1;\n        font-weight: dt('floatlabel.font.weight');\n        inset-inline-start: dt('floatlabel.position.x');\n        color: dt('floatlabel.color');\n        transition-duration: dt('floatlabel.transition.duration');\n    }\n\n    .p-floatlabel:has(.p-textarea) label {\n        top: dt('floatlabel.position.y');\n        transform: translateY(0);\n    }\n\n    .p-floatlabel:has(.p-inputicon:first-child) label {\n        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label,\n    .p-floatlabel:has(input[placeholder]) label,\n    .p-floatlabel:has(textarea[placeholder]) label {\n        top: dt('floatlabel.over.active.top');\n        transform: translateY(0);\n        font-size: dt('floatlabel.active.font.size');\n        font-weight: dt('floatlabel.active.font.weight');\n    }\n\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label {\n        color: dt('floatlabel.active.color');\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label {\n        color: dt('floatlabel.focus.color');\n    }\n\n    .p-floatlabel-in .p-inputtext,\n    .p-floatlabel-in .p-textarea,\n    .p-floatlabel-in .p-select-label,\n    .p-floatlabel-in .p-multiselect-label,\n    .p-floatlabel-in .p-multiselect-label:has(.p-chip),\n    .p-floatlabel-in .p-autocomplete-input-multiple,\n    .p-floatlabel-in .p-cascadeselect-label,\n    .p-floatlabel-in .p-treeselect-label {\n        padding-block-start: dt('floatlabel.in.input.padding.top');\n        padding-block-end: dt('floatlabel.in.input.padding.bottom');\n    }\n\n    .p-floatlabel-in:has(input:focus) label,\n    .p-floatlabel-in:has(input.p-filled) label,\n    .p-floatlabel-in:has(input:-webkit-autofill) label,\n    .p-floatlabel-in:has(textarea:focus) label,\n    .p-floatlabel-in:has(textarea.p-filled) label,\n    .p-floatlabel-in:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-in:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-in:has(input[placeholder]) label,\n    .p-floatlabel-in:has(textarea[placeholder]) label {\n        top: dt('floatlabel.in.active.top');\n    }\n\n    .p-floatlabel-on:has(input:focus) label,\n    .p-floatlabel-on:has(input.p-filled) label,\n    .p-floatlabel-on:has(input:-webkit-autofill) label,\n    .p-floatlabel-on:has(textarea:focus) label,\n    .p-floatlabel-on:has(textarea.p-filled) label,\n    .p-floatlabel-on:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-on:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-on:has(input[placeholder]) label,\n    .p-floatlabel-on:has(textarea[placeholder]) label {\n        top: 0;\n        transform: translateY(-50%);\n        border-radius: dt('floatlabel.on.border.radius');\n        background: dt('floatlabel.on.active.background');\n        padding: dt('floatlabel.on.active.padding');\n    }\n\n    .p-floatlabel:has([class^='p-'][class$='-fluid']) {\n        width: 100%;\n    }\n\n    .p-floatlabel:has(.p-invalid) label {\n        color: dt('floatlabel.invalid.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var _c0 = ["*"];
var theme = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-floatlabel", {
    "p-floatlabel-over": instance.variant === "over",
    "p-floatlabel-on": instance.variant === "on",
    "p-floatlabel-in": instance.variant === "in"
  }]
};
var FloatLabelStyle = class _FloatLabelStyle extends BaseStyle {
  name = "floatlabel";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FloatLabelStyle_BaseFactory;
    return function FloatLabelStyle_Factory(__ngFactoryType__) {
      return (\u0275FloatLabelStyle_BaseFactory || (\u0275FloatLabelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FloatLabelStyle)))(__ngFactoryType__ || _FloatLabelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FloatLabelStyle,
    factory: _FloatLabelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelStyle, [{
    type: Injectable
  }], null, null);
})();
var FloatLabelClasses;
(function(FloatLabelClasses2) {
  FloatLabelClasses2["root"] = "p-floatlabel";
})(FloatLabelClasses || (FloatLabelClasses = {}));
var FloatLabel = class _FloatLabel extends BaseComponent {
  _componentStyle = inject(FloatLabelStyle);
  /**
   * Defines the positioning of the label relative to the input.
   * @group Props
   */
  variant = "over";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FloatLabel_BaseFactory;
    return function FloatLabel_Factory(__ngFactoryType__) {
      return (\u0275FloatLabel_BaseFactory || (\u0275FloatLabel_BaseFactory = \u0275\u0275getInheritedFactory(_FloatLabel)))(__ngFactoryType__ || _FloatLabel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FloatLabel,
    selectors: [["p-floatlabel"], ["p-floatLabel"], ["p-float-label"]],
    hostVars: 2,
    hostBindings: function FloatLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      variant: "variant"
    },
    features: [\u0275\u0275ProvidersFeature([FloatLabelStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function FloatLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabel, [{
    type: Component,
    args: [{
      selector: "p-floatlabel, p-floatLabel, p-float-label",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FloatLabelStyle],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, {
    variant: [{
      type: Input
    }]
  });
})();
var FloatLabelModule = class _FloatLabelModule {
  static \u0275fac = function FloatLabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatLabelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FloatLabelModule,
    imports: [FloatLabel, SharedModule],
    exports: [FloatLabel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [FloatLabel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatLabelModule, [{
    type: NgModule,
    args: [{
      imports: [FloatLabel, SharedModule],
      exports: [FloatLabel, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/auth/components/login/login.component.ts
var _c02 = () => ["/auth/forgot-password"];
function LoginComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "label", 14);
    \u0275\u0275text(2, "API URL*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 15);
    \u0275\u0275listener("onChange", function LoginComponent_Conditional_7_Template_p_select_onChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.apiOptions);
  }
}
var LoginComponent = class _LoginComponent {
  apiUrlService = inject(ApiUrlService);
  authService = inject(AuthService);
  authTokenManagerService = inject(AuthTokenManagerService);
  router = inject(Router);
  fb = inject(NonNullableFormBuilder);
  userSessionService = inject(UserSessionService);
  destroyRef = inject(DestroyRef);
  environment = environment;
  apiOptions = environment.apiUrls.map((url) => ({
    label: url,
    value: url
  }));
  loginForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required),
    apiUrl: this.fb.control("", Validators.required)
    // Initialize empty or with a placeholder
  });
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  loading = false;
  ngOnInit() {
    this.initializeApiUrl();
  }
  initializeApiUrl() {
    if (!environment.showApiDropdown) {
      const firstApiUrl = environment.apiUrls[0];
      if (firstApiUrl) {
        this.apiUrlService.setApiUrl(firstApiUrl);
      }
      return;
    }
    const currentUrl = this.apiUrlService.getCurrentApiUrl();
    const firstOptionUrl = this.apiOptions[0]?.value;
    if (!firstOptionUrl) {
      this.loginForm.controls.apiUrl.disable();
      return;
    }
    const isValidOption = this.apiOptions.some((option) => option.value === currentUrl);
    let initialApiUrl;
    if (isValidOption) {
      initialApiUrl = currentUrl;
    } else {
      initialApiUrl = firstOptionUrl;
      this.apiUrlService.setApiUrl(initialApiUrl);
    }
    this.loginForm.controls.apiUrl.setValue(initialApiUrl);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const { username, password } = this.loginForm.getRawValue();
      this.authService.login(username, password).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (result) => {
          void (async () => {
            try {
              this.authTokenManagerService.storeTokens(result);
              await this.userSessionService.setUserSessions(result.users);
              this.loading = false;
            } catch (error) {
              console.error("Login flow error:", error);
              this.loading = false;
              this.loginForm.controls.password.reset();
            }
          })();
        },
        error: () => {
          this.loading = false;
          this.loginForm.controls.password.reset();
        }
      });
    }
  }
  onApiUrlChange(event) {
    this.apiUrlService.setApiUrl(event.value);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 23, vars: 11, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[700px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none"], [1, "flex", "flex-col"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], ["formControlName", "password", 1, "w-full", 3, "feedback", "toggleMask", "autocomplete"], ["for", "password"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", "type", "submit", 3, "disabled", "loading"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], ["for", "apiUrl"], ["id", "apiUrl", "formControlName", "apiUrl", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "onChange", "options"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, " Welcome to Cypherview ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275conditionalCreate(7, LoginComponent_Conditional_7_Template, 4, 1, "p-floatlabel");
      \u0275\u0275elementStart(8, "p-floatlabel");
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275elementStart(10, "label", 7);
      \u0275\u0275text(11, "Username*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-floatlabel");
      \u0275\u0275element(13, "p-password", 8);
      \u0275\u0275elementStart(14, "label", 9);
      \u0275\u0275text(15, "Password*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 10)(17, "p-button", 11);
      \u0275\u0275text(18, " Login ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "a", 12);
      \u0275\u0275text(20, "Forgotten Password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 13);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.environment.showApiDropdown ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("autocomplete", "username");
      \u0275\u0275advance(4);
      \u0275\u0275property("feedback", false)("toggleMask", true)("autocomplete", "current-password");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loginForm.invalid)("loading", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" Copyright ", ctx.currentYear, ". All rights reserved. ");
    }
  }, dependencies: [
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FloatLabel,
    ButtonModule,
    Button,
    PasswordModule,
    Password,
    InputTextModule,
    InputText,
    SelectModule,
    Select
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n[_nghost-%COMP%]     p-password .p-password, \n[_nghost-%COMP%]     p-password input {\n  width: 100%;\n}\n[_nghost-%COMP%]     p-password input, \n[_nghost-%COMP%]     p-password textarea, \n[_nghost-%COMP%]     p-password p-select, \n[_nghost-%COMP%]     p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      RouterModule,
      ReactiveFormsModule,
      FloatLabel,
      ButtonModule,
      PasswordModule,
      InputTextModule,
      SelectModule
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[700px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none">
    <div class="flex flex-col">
      <h2
        class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
      >
        Welcome to Cypherview
      </h2>
      <form [formGroup]="loginForm" class="mx-12 mt-10" (ngSubmit)="onSubmit()">
        <div class="grid gap-6">
          @if (environment.showApiDropdown) {
            <p-floatlabel>
              <label for="apiUrl">API URL*</label>
              <p-select
                id="apiUrl"
                [options]="apiOptions"
                formControlName="apiUrl"
                optionLabel="label"
                optionValue="value"
                class="w-full"
                (onChange)="onApiUrlChange($event)"
              />
            </p-floatlabel>
          }
          <p-floatlabel>
            <input
              id="username"
              pInputText
              formControlName="username"
              class="w-full"
              [autocomplete]="'username'"
            />
            <label for="username">Username*</label>
          </p-floatlabel>

          <p-floatlabel>
            <p-password
              formControlName="password"
              [feedback]="false"
              [toggleMask]="true"
              [autocomplete]="'current-password'"
              class="w-full"
            />
            <label for="password">Password*</label>
          </p-floatlabel>
        </div>

        <div class="flex justify-center items-center my-6">
          <p-button
            styleClass="w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
            type="submit"
            [disabled]="loginForm.invalid"
            [loading]="loading"
          >
            Login
          </p-button>
        </div>
      </form>
    </div>
  </div>
  <a
    class="!text-white pt-4 underline cursor-pointer self-center"
    [routerLink]="['/auth/forgot-password']"
    >Forgotten Password?</a
  >
  <a class="!text-white self-center">
    Copyright {{ currentYear }}. All rights reserved.
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/login/login.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n:host ::ng-deep p-password .p-password,\n:host ::ng-deep p-password input {\n  width: 100%;\n}\n:host ::ng-deep p-password input,\n:host ::ng-deep p-password textarea,\n:host ::ng-deep p-password p-select,\n:host ::ng-deep p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/components/login/login.component.ts", lineNumber: 36 });
})();

// src/app/shared/services/network-animation.service.ts
var NetworkAnimationService = class _NetworkAnimationService {
  canvas;
  ctx;
  particles = [];
  animationFrameId;
  mouse = { x: 0, y: 0 };
  running = false;
  // Add running flag
  mouseMoveHandler = (e) => {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    this.mouse.x = (e.clientX - rect.left) * scaleX;
    this.mouse.y = (e.clientY - rect.top) * scaleY;
  };
  touchMoveHandler = (e) => {
    if (isNullOrUndefined(this.canvas) || !isObject(this.canvas))
      return;
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    this.mouse.x = (e.touches[0].clientX - rect.left) * scaleX;
    this.mouse.y = (e.touches[0].clientY - rect.top) * scaleY;
  };
  resizeHandler = () => {
    if (isNullOrUndefined(this.canvas) || !isObject(this.canvas))
      return;
    const oldWidth = this.canvas.width;
    const oldHeight = this.canvas.height;
    this.resizeCanvas();
    const scaleX = this.canvas.width / oldWidth;
    const scaleY = this.canvas.height / oldHeight;
    this.particles.forEach((particle) => {
      particle.x *= scaleX;
      particle.y *= scaleY;
      if (particle.x < 0)
        particle.x = 0;
      if (particle.x > this.canvas.width)
        particle.x = this.canvas.width;
      if (particle.y < 0)
        particle.y = 0;
      if (particle.y > this.canvas.height)
        particle.y = this.canvas.height;
    });
  };
  initAnimation(canvas) {
    if (isNullOrUndefined(canvas) || !isObject(canvas))
      return;
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    this.ctx = ctx;
    this.resizeCanvas();
    window.addEventListener("mousemove", this.mouseMoveHandler);
    window.addEventListener("touchmove", this.touchMoveHandler, {
      passive: true
    });
    window.addEventListener("resize", this.resizeHandler);
    this.running = true;
    this.init();
  }
  init() {
    if (isNullOrUndefined(this.canvas) || isNullOrUndefined(this.ctx))
      return;
    this.particles = [];
    const area = this.canvas.width * this.canvas.height;
    const baseArea = 1920 * 1080;
    const scaleFactor = Math.min(1, area / baseArea);
    const baseParticles = 200;
    const baseFloating = 20;
    const particleCount = Math.floor(baseParticles * scaleFactor);
    const floatingCount = Math.floor(baseFloating * scaleFactor);
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.canvas, this.particles));
    }
    for (let i = 0; i < floatingCount; i++) {
      this.particles.push(new FloatingParticle(this.canvas, this.particles));
    }
    this.animate();
  }
  resizeCanvas() {
    this.canvas.style.width = "100vw";
    this.canvas.style.height = "100vh";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  animate() {
    if (isNullOrUndefined(this.canvas) || isNullOrUndefined(this.ctx) || !this.running)
      return;
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, "#000B1E");
    gradient.addColorStop(1, "#000000");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((particle) => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
    });
    this.drawConnections();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
  drawConnections() {
    if (isNullOrUndefined(this.canvas) || isNullOrUndefined(this.ctx))
      return;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 150 && distance < 350) {
          const opacity = 1 - (distance - 150) / 100;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
  // Clean up method to cancel animation when needed
  destroy() {
    this.running = false;
    if (isDefined(this.animationFrameId)) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("mousemove", this.mouseMoveHandler);
    window.removeEventListener("touchmove", this.touchMoveHandler);
    window.removeEventListener("resize", this.resizeHandler);
  }
  static \u0275fac = function NetworkAnimationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkAnimationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NetworkAnimationService, factory: _NetworkAnimationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkAnimationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Particle = class {
  canvas;
  particles;
  x;
  y;
  speed = 0.25;
  // Slower speed
  direction = Math.random() * Math.PI * 2;
  radius = Math.random() * 4.5 + 0.5;
  // Smaller particles
  baseX;
  baseY;
  constructor(canvas, particles) {
    this.canvas = canvas;
    this.particles = particles;
    this.x = this.baseX = Math.random() * canvas.width;
    this.y = this.baseY = Math.random() * canvas.height;
  }
  update(mouse) {
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 150) {
      const force = (200 - distance) / 200;
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * force * 5;
      this.y -= Math.sin(angle) * force * 5;
    }
    this.particles.forEach((otherParticle) => {
      if (otherParticle !== this) {
        const pdx = otherParticle.x - this.x;
        const pdy = otherParticle.y - this.y;
        const particleDistance = Math.sqrt(pdx * pdx + pdy * pdy);
        if (particleDistance < 100) {
          const repulsionForce = (100 - particleDistance) / 100;
          this.x -= pdx * repulsionForce * 0.1;
          this.y -= pdy * repulsionForce * 0.1;
        }
      }
    });
    if (this.x < 0 || this.x > this.canvas.width)
      this.direction = Math.PI - this.direction;
    if (this.y < 0 || this.y > this.canvas.height)
      this.direction = -this.direction;
  }
  draw(ctx) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
};
var FloatingParticle = class extends Particle {
  originalX;
  amplitude = Math.random() * 10 + 1;
  period = Math.random() * 0.25 + 0.02;
  phase = Math.random() * Math.PI * 2;
  constructor(canvas, particles) {
    super(canvas, particles);
    this.originalX = this.x;
    this.speed = 0.01 + Math.random() * 0.2;
  }
  update(mouse) {
    this.y -= this.speed;
    this.x = this.originalX + Math.sin(this.y * this.period + this.phase) * this.amplitude;
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 400) {
      const force = (200 - distance) / 200;
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * force * 5;
      this.y -= Math.sin(angle) * force * 5;
    }
    if (this.y < 0) {
      this.y = this.canvas.height;
      this.originalX = Math.random() * this.canvas.width;
    }
  }
};

// src/app/shared/components/network-animation/network-animation.component.ts
var _c03 = ["canvas"];
var NetworkAnimationComponent = class _NetworkAnimationComponent {
  networkAnimationService = inject(NetworkAnimationService);
  canvasRef;
  ngAfterViewInit() {
    this.networkAnimationService.initAnimation(this.canvasRef.nativeElement);
  }
  static \u0275fac = function NetworkAnimationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkAnimationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NetworkAnimationComponent, selectors: [["app-network-animation"]], viewQuery: function NetworkAnimationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["canvas", ""], [1, "network-animation"]], template: function NetworkAnimationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "canvas", 1, 0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\ncanvas.network-animation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: auto;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/*# sourceMappingURL=network-animation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkAnimationComponent, [{
    type: Component,
    args: [{ selector: "app-network-animation", template: '<canvas #canvas class="network-animation"></canvas>\n', styles: ["/* src/app/shared/components/network-animation/network-animation.component.scss */\n:host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\ncanvas.network-animation {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: auto;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/*# sourceMappingURL=network-animation.component.css.map */\n"] }]
  }], null, { canvasRef: [{
    type: ViewChild,
    args: ["canvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NetworkAnimationComponent, { className: "NetworkAnimationComponent", filePath: "src/app/shared/components/network-animation/network-animation.component.ts", lineNumber: 15 });
})();

// src/app/features/auth/components/container/container.component.ts
var ContainerComponent = class _ContainerComponent {
  isRouteActive = signal(false, ...ngDevMode ? [{ debugName: "isRouteActive" }] : []);
  router = inject(Router);
  ngOnInit() {
    this.router.navigate(["/auth/login"]).catch(() => {
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isRouteActive.set(this.router.url !== "/auth");
    });
  }
  static \u0275fac = function ContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContainerComponent, selectors: [["app-container"]], decls: 5, vars: 0, consts: [[1, "wrapper", "bg-cover", "bg-center", "h-screen"], [1, "flex", "flex-col", "items-center", "h-auto", "sm:h-full"], ["src", "assets/images/logo.svg", "alt", "Cypherview logo", 1, "logo-filter", "w-1/2", "my-16", "max-w-[1050px]", "hidden", "sm:block"]], template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-network-animation");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "img", 2)(4, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule, RouterOutlet, ButtonModule, NetworkAnimationComponent], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--color-background-dark, #000b1e);\n  overflow: hidden;\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   app-network-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .logo-filter[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  transition: filter 0.2s ease;\n}\n/*# sourceMappingURL=container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{ selector: "app-container", imports: [RouterModule, ButtonModule, NetworkAnimationComponent], template: '<div class="wrapper bg-cover bg-center h-screen">\n  <app-network-animation></app-network-animation>\n  <div class="flex flex-col items-center h-auto sm:h-full">\n    <img\n      class="logo-filter w-1/2 my-16 max-w-[1050px] hidden sm:block"\n      src="assets/images/logo.svg"\n      alt="Cypherview logo"\n    />\n    <router-outlet></router-outlet>\n  </div>\n</div>\n', styles: ["/* src/app/features/auth/components/container/container.component.scss */\n.wrapper {\n  position: relative;\n  background: var(--color-background-dark, #000b1e);\n  overflow: hidden;\n  width: 100%;\n}\n.wrapper app-network-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.wrapper .flex {\n  position: relative;\n  z-index: 1;\n}\n.wrapper .logo-filter {\n  filter: brightness(0) invert(1);\n  transition: filter 0.2s ease;\n}\n/*# sourceMappingURL=container.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerComponent, { className: "ContainerComponent", filePath: "src/app/features/auth/components/container/container.component.ts", lineNumber: 13 });
})();

// src/app/features/auth/components/select-client/select-client.component.ts
var SelectClientComponent = class _SelectClientComponent {
  userSessionService = inject(UserSessionService);
  router = inject(Router);
  apiAuthService = inject(AuthService2);
  authTokenManager = inject(AuthTokenManagerService);
  accounts = this.userSessionService.userSessions();
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  async onAccountSelected(accountId) {
    this.loading.set(true);
    try {
      const response = await firstValueFrom(this.apiAuthService.selectUser(accountId));
      this.authTokenManager.storeTokens({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        idToken: response.idToken ?? "",
        users: this.accounts
        // Keep existing user sessions
      });
      this.userSessionService.setCurrentUserSession(accountId);
      this.loading.set(false);
      return this.router.navigate(["/position"]);
    } catch (error) {
      console.error("Error selecting user:", error);
      this.loading.set(false);
      return false;
    }
  }
  cancel() {
    this.userSessionService.clearAllSessions();
    return this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function SelectClientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectClientComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectClientComponent, selectors: [["app-select-client"]], decls: 10, vars: 2, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[700px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none"], [1, "select-client-wrapper"], [1, "select-client-card"], [1, "header"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [3, "accountSelected", "clientAccounts", "maxHeightClass"], [1, "actions", "mt-6", "flex", "justify-center"], ["label", "Cancel", "styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", 3, "onClick"]], template: function SelectClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
      \u0275\u0275text(6, " Select an Account ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "app-client-selector", 6);
      \u0275\u0275listener("accountSelected", function SelectClientComponent_Template_app_client_selector_accountSelected_7_listener($event) {
        return ctx.onAccountSelected($event.id);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "p-button", 8);
      \u0275\u0275listener("onClick", function SelectClientComponent_Template_p_button_onClick_9_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("clientAccounts", ctx.accounts)("maxHeightClass", "max-h-[18rem]");
    }
  }, dependencies: [ClientSelectorComponent, CommonModule, ButtonModule, Button], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n.select-client-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.select-client-card[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n  max-width: 550px;\n  margin: auto;\n}\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n}\n/*# sourceMappingURL=select-client.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectClientComponent, [{
    type: Component,
    args: [{ selector: "app-select-client", standalone: true, imports: [ClientSelectorComponent, CommonModule, ButtonModule], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[700px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none">
    <div class="select-client-wrapper">
      <div class="select-client-card">
        <div class="header">
          <h2
            class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
          >
            Select an Account
          </h2>
        </div>
        <app-client-selector
          [clientAccounts]="accounts"
          [maxHeightClass]="'max-h-[18rem]'"
          (accountSelected)="onAccountSelected($event.id)"
        ></app-client-selector>

        <div class="actions mt-6 flex justify-center">
          <p-button
            label="Cancel"
            styleClass="w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
            (onClick)="cancel()"
          ></p-button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/components/select-client/select-client.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n.select-client-wrapper {\n  width: 100%;\n  padding: 1rem;\n}\n.select-client-card {\n  background-color: var(--surface-card);\n  padding: 2rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n  max-width: 550px;\n  margin: auto;\n}\n.header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.title {\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.subtitle {\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n}\n/*# sourceMappingURL=select-client.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectClientComponent, { className: "SelectClientComponent", filePath: "src/app/features/auth/components/select-client/select-client.component.ts", lineNumber: 18 });
})();

// src/app/features/auth/components/forgot-password/forgot-password.component.ts
var _c04 = () => ["/auth/login"];
function ForgotPasswordComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "label", 13);
    \u0275\u0275text(2, "API URL*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 14);
    \u0275\u0275listener("onChange", function ForgotPasswordComponent_Conditional_3_Conditional_6_Template_p_select_onChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.apiOptions);
  }
}
function ForgotPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1, " Forgot Your Password ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "Enter your email address below and we'll send your password reset instructions by email.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 7);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_3_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275conditionalCreate(6, ForgotPasswordComponent_Conditional_3_Conditional_6_Template, 4, 1, "p-floatlabel");
    \u0275\u0275elementStart(7, "p-floatlabel");
    \u0275\u0275element(8, "input", 9);
    \u0275\u0275elementStart(9, "label", 10);
    \u0275\u0275text(10, "Username*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "p-button", 12);
    \u0275\u0275text(13, " Reset Password ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.environment.showApiDropdown ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("autocomplete", "username");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.resetPasswordForm.invalid)("loading", ctx_r1.loading);
  }
}
function ForgotPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1, " Check Your Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 15)(3, "p", 16);
    \u0275\u0275text(4, " If an account exists with the username ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ", you will receive a password reset email shortly. Please check your inbox and follow the instructions to reset your password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 17);
    \u0275\u0275text(9, " Back to Login ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.submittedUsername);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c04));
  }
}
function ForgotPasswordComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c04));
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  apiUrlService = inject(ApiUrlService);
  authService = inject(AuthService2);
  fb = inject(NonNullableFormBuilder);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  environment = environment;
  apiOptions = environment.apiUrls.map((url) => ({
    label: url,
    value: url
  }));
  resetPasswordForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    resetUrl: this.fb.control("", Validators.required)
    // Initialize empty or with a placeholder
  });
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  loading = false;
  submitted = false;
  submittedUsername = "";
  ngOnInit() {
    this.initializeApiUrl();
  }
  initializeApiUrl() {
    if (!environment.showApiDropdown) {
      const firstApiUrl = environment.apiUrls[0];
      if (firstApiUrl) {
        this.apiUrlService.setApiUrl(firstApiUrl);
      }
      return;
    }
    const currentUrl = this.apiUrlService.getCurrentApiUrl();
    const firstOptionUrl = this.apiOptions[0]?.value;
    if (!firstOptionUrl) {
      this.resetPasswordForm.controls.resetUrl.disable();
      return;
    }
    const isValidOption = this.apiOptions.some((option) => option.value === currentUrl);
    let initialApiUrl;
    if (isValidOption) {
      initialApiUrl = currentUrl;
    } else {
      initialApiUrl = firstOptionUrl;
      this.apiUrlService.setApiUrl(initialApiUrl);
    }
    this.resetPasswordForm.controls.resetUrl.setValue(initialApiUrl);
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      const { username, resetUrl } = this.resetPasswordForm.getRawValue();
      this.authService.resetPassword({ username, resetUrl }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
          this.submittedUsername = username;
          this.toastService.showSuccess("Success", "Password reset instructions sent.");
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }
  onApiUrlChange(event) {
    this.apiUrlService.setApiUrl(event.value);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 8, vars: 3, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[700px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none", "mb-4"], [1, "flex", "flex-col"], [1, "!text-white", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "my-4", "text-[1rem]", "font-normal", "leading-[1.5]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", "type", "submit", 3, "disabled", "loading"], ["for", "resetUrl"], ["id", "resetUrl", "formControlName", "resetUrl", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "onChange", "options"], [1, "mx-12", "mt-10", "mb-6", "text-center"], [1, "mb-6", "text-[1rem]", "font-normal", "leading-[1.5]", "!text-gray-500"], ["styleClass", "w-[160px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", 3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ForgotPasswordComponent_Conditional_3_Template, 14, 5)(4, ForgotPasswordComponent_Conditional_4_Template, 10, 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, ForgotPasswordComponent_Conditional_5_Template, 2, 2, "a", 3);
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.submitted ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.submitted ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Copyright ", ctx.currentYear, ". All rights reserved. ");
    }
  }, dependencies: [
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FloatLabel,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    SelectModule,
    Select
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [
      RouterModule,
      ReactiveFormsModule,
      FloatLabel,
      ButtonModule,
      InputTextModule,
      SelectModule
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[700px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none mb-4">
    <div class="flex flex-col">
      @if (!submitted) {
        <h2
          class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
        >
          Forgot Your Password
        </h2>
        <span
          class="my-4 text-[1rem] font-normal leading-[1.5] text-center !text-gray-500"
          >Enter your email address below and we'll send your password reset
          instructions by email.</span
        >
        <form
          [formGroup]="resetPasswordForm"
          class="mx-12 mt-10"
          (ngSubmit)="onSubmit()"
        >
          <div class="grid gap-6">
            @if (environment.showApiDropdown) {
              <p-floatlabel>
                <label for="resetUrl">API URL*</label>
                <p-select
                  id="resetUrl"
                  [options]="apiOptions"
                  formControlName="resetUrl"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                  (onChange)="onApiUrlChange($event)"
                />
              </p-floatlabel>
            }
            <p-floatlabel>
              <input
                id="username"
                pInputText
                formControlName="username"
                class="w-full"
                [autocomplete]="'username'"
              />
              <label for="username">Username*</label>
            </p-floatlabel>
          </div>

          <div class="flex justify-center items-center my-6">
            <p-button
              styleClass="w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
              type="submit"
              [disabled]="resetPasswordForm.invalid"
              [loading]="loading"
            >
              Reset Password
            </p-button>
          </div>
        </form>
      } @else {
        <h2
          class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
        >
          Check Your Email
        </h2>
        <div class="mx-12 mt-10 mb-6 text-center">
          <p class="mb-6 text-[1rem] font-normal leading-[1.5] !text-gray-500">
            If an account exists with the username
            <strong>{{ submittedUsername }}</strong
            >, you will receive a password reset email shortly. Please check
            your inbox and follow the instructions to reset your password.
          </p>
          <p-button
            styleClass="w-[160px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
            [routerLink]="['/auth/login']"
          >
            Back to Login
          </p-button>
        </div>
      }
    </div>
  </div>
  @if (!submitted) {
    <a
      class="!text-white underline cursor-pointer self-center"
      [routerLink]="['/auth/login']"
      >Login</a
    >
  }
  <a class="!text-white self-center">
    Copyright {{ currentYear }}. All rights reserved.
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/forgot-password/forgot-password.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/components/forgot-password/forgot-password.component.ts", lineNumber: 31 });
})();

// src/app/features/auth/auth-routing.module.ts
var routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "select-client", component: SelectClientComponent },
      { path: "forgot-password", component: ForgotPasswordComponent },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AuthRoutingModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule, AuthRoutingModule]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-YBQAYMUY.js.map
