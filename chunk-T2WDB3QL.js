import {
  Password,
  PasswordModule
} from "./chunk-FMMG3DFF.js";
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
} from "./chunk-D3SIXD4M.js";
import "./chunk-ZUQKTIGR.js";
import {
  ApiUrlService,
  AuthService,
  AuthTokenManagerService,
  environment,
  isDefined,
  isNullOrUndefined,
  isObject
} from "./chunk-DIN3XHWB.js";
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-MWRHVJ6S.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Injectable,
  Input,
  NgIf,
  NgModule,
  ViewEncapsulation,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UOQWYEAO.js";
import "./chunk-R327OCYJ.js";

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var _c0 = ["*"];
var theme = ({
  dt
}) => `
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${dt("floatlabel.font.weight")};
    inset-inline-start: ${dt("floatlabel.position.x")};
    color: ${dt("floatlabel.color")};
    transition-duration: ${dt("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${dt("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${dt("form.field.padding.x")} * 2) + ${dt("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${dt("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${dt("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${dt("floatlabel.active.font.size")};
    font-weight: ${dt("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${dt("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${dt("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${dt("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${dt("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${dt("floatlabel.on.border.radius")};
    background: ${dt("floatlabel.on.active.background")};
    padding: ${dt("floatlabel.on.active.padding")};
}
`;
var classes = {
  root: ({
    instance,
    props
  }) => ["p-floatlabel", {
    "p-floatlabel-over": props.variant === "over",
    "p-floatlabel-on": props.variant === "on",
    "p-floatlabel-in": props.variant === "in"
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
    hostVars: 8,
    hostBindings: function FloatLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-floatlabel", true)("p-floatlabel-over", ctx.variant === "over")("p-floatlabel-on", ctx.variant === "on")("p-floatlabel-in", ctx.variant === "in");
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
        "[class.p-floatlabel]": "true",
        "[class.p-floatlabel-over]": "variant === 'over'",
        "[class.p-floatlabel-on]": "variant === 'on'",
        "[class.p-floatlabel-in]": "variant === 'in'"
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
    type: _FloatLabelModule
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
function LoginComponent_p_floatlabel_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "label", 15);
    \u0275\u0275text(2, "API URL*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 16);
    \u0275\u0275listener("onChange", function LoginComponent_p_floatlabel_7_Template_p_select_onChange_3_listener($event) {
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
  environment = environment;
  apiOptions = [
    ...environment.apiUrls.map((url) => ({
      label: url,
      value: url
    }))
  ];
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
      this.authService.login(username, password).subscribe({
        next: (result) => {
          this.loading = false;
          this.authTokenManagerService.storeTokens(result);
          this.router.navigate(["/"]).catch((err) => {
            console.error("Navigation failed after login:", err);
          });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 23, vars: 9, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[700px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none"], [1, "flex", "flex-col"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], [4, "ngIf"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], ["formControlName", "password", 3, "feedback", "toggleMask", "autocomplete"], ["for", "password"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", "type", "submit", 3, "disabled", "loading"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center"], [1, "!text-white", "self-center"], ["for", "apiUrl"], ["id", "apiUrl", "formControlName", "apiUrl", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "onChange", "options"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, " Welcome to Cypherview ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, LoginComponent_p_floatlabel_7_Template, 4, 1, "p-floatlabel", 6);
      \u0275\u0275elementStart(8, "p-floatlabel");
      \u0275\u0275element(9, "input", 7);
      \u0275\u0275elementStart(10, "label", 8);
      \u0275\u0275text(11, "Username*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-floatlabel");
      \u0275\u0275element(13, "p-password", 9);
      \u0275\u0275elementStart(14, "label", 10);
      \u0275\u0275text(15, "Password*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 11)(17, "p-button", 12);
      \u0275\u0275text(18, " Login ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "a", 13);
      \u0275\u0275text(20, "Forgotten Password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 14);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.environment.showApiDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("autocomplete", "username");
      \u0275\u0275advance(4);
      \u0275\u0275property("feedback", false)("toggleMask", true)("autocomplete", "current-password");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loginForm.invalid)("loading", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" Copyright ", ctx.currentYear, ". All rights reserved. ");
    }
  }, dependencies: [
    RouterModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    NgIf,
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
var _c02 = ["canvas"];
var NetworkAnimationComponent = class _NetworkAnimationComponent {
  networkAnimationService;
  canvasRef;
  constructor(networkAnimationService) {
    this.networkAnimationService = networkAnimationService;
  }
  ngAfterViewInit() {
    this.networkAnimationService.initAnimation(this.canvasRef.nativeElement);
  }
  static \u0275fac = function NetworkAnimationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkAnimationComponent)(\u0275\u0275directiveInject(NetworkAnimationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NetworkAnimationComponent, selectors: [["app-network-animation"]], viewQuery: function NetworkAnimationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["canvas", ""], [1, "network-animation"]], template: function NetworkAnimationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "canvas", 1, 0);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\ncanvas.network-animation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: auto;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/*# sourceMappingURL=network-animation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NetworkAnimationComponent, { className: "NetworkAnimationComponent", filePath: "src/app/shared/components/network-animation/network-animation.component.ts", lineNumber: 9 });
})();

// src/app/features/auth/components/container/container.component.ts
var ContainerComponent = class _ContainerComponent {
  isRouteActive = signal(false);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerComponent, { className: "ContainerComponent", filePath: "src/app/features/auth/components/container/container.component.ts", lineNumber: 13 });
})();

// src/app/features/auth/auth-routing.module.ts
var routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      }
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

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AuthRoutingModule] });
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-T2WDB3QL.js.map
