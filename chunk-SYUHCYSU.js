import {
  ClientSelectionFormComponent,
  ClientSelectorComponent,
  RecentClientsService,
  userProfileResolver
} from "./chunk-Q6BPLFD5.js";
import {
  ThemeComponent
} from "./chunk-VBHGE6H7.js";
import "./chunk-VREFFKOZ.js";
import {
  WizardComponent
} from "./chunk-M7375AD4.js";
import {
  LanguageService
} from "./chunk-ADVRM2GR.js";
import {
  ApiSchemaService,
  DynamicFormComponent,
  Password,
  PasswordModule
} from "./chunk-WZT5XRCN.js";
import "./chunk-TQTAL3D3.js";
import {
  UtilityService
} from "./chunk-LSGFQNNG.js";
import "./chunk-A45ENGP2.js";
import "./chunk-GOGTD2CJ.js";
import "./chunk-M7S2S5LG.js";
import "./chunk-IOKQPKSK.js";
import "./chunk-VN4TXOP4.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-POWMBANG.js";
import {
  ToastService
} from "./chunk-6VB5OA4H.js";
import "./chunk-IVSMVSJH.js";
import "./chunk-EGJXNLZU.js";
import "./chunk-HZONOUZI.js";
import {
  InputText,
  InputTextModule,
  Select,
  SelectModule
} from "./chunk-UGO3PNLI.js";
import "./chunk-E46PJIXV.js";
import "./chunk-ML5T5ZEG.js";
import {
  Message,
  MessageModule
} from "./chunk-LVMLZ3VX.js";
import "./chunk-CUF5ZGX4.js";
import "./chunk-Y76T4QP2.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ELMGQUTA.js";
import {
  Button,
  ButtonModule
} from "./chunk-4VRJFGPA.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  MessageService,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-NTFNF324.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-AHALUXAA.js";
import {
  AccountsService,
  ActionType,
  ActivatedRoute,
  ApiUrlService,
  AuthDataService,
  AuthService,
  AuthService2,
  AuthTokenManagerService,
  BroadcastMessageService,
  ClientDataService,
  ClientsService,
  CommonModule,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SYSTEM_ID,
  HttpClient,
  LOCAL_STORAGE_KEY_SELECTED_SESSION_ID,
  LocalStorageService,
  Location,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  ThemeDataService,
  UserSessionService,
  createDropdownField,
  createPasswordField,
  createTextField,
  environment,
  hasProperty,
  isDefined,
  isNullOrUndefined,
  isObject,
  takeUntilDestroyed,
  toObservable,
  toSignal
} from "./chunk-2Y2RLXE3.js";
import "./chunk-M4PBGCJ5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  DestroyRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  ViewChild,
  ViewEncapsulation,
  catchError,
  combineLatest,
  computed,
  distinctUntilChanged,
  filter,
  finalize,
  firstValueFrom,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VOGNWKLY.js";
import "./chunk-7WUTQBRG.js";

// src/app/shared/services/network-animation.service.ts
var NetworkAnimationService = class _NetworkAnimationService {
  canvas;
  ctx;
  particles = [];
  animationFrameId;
  mouse = { x: 0, y: 0 };
  running = false;
  lastPointerMove = 0;
  ngZone = inject(NgZone);
  mouseMoveHandler = (e) => {
    const now = performance.now();
    if (now - this.lastPointerMove < 16)
      return;
    this.lastPointerMove = now;
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    this.mouse.x = (e.clientX - rect.left) * scaleX;
    this.mouse.y = (e.clientY - rect.top) * scaleY;
  };
  touchMoveHandler = (e) => {
    if (isNullOrUndefined(this.canvas) || !isObject(this.canvas))
      return;
    const now = performance.now();
    if (now - this.lastPointerMove < 16)
      return;
    this.lastPointerMove = now;
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
    globalThis.addEventListener("mousemove", this.mouseMoveHandler);
    globalThis.addEventListener("touchmove", this.touchMoveHandler, {
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
    const baseParticles = 50;
    const baseFloating = 10;
    const particleCount = Math.floor(baseParticles * scaleFactor);
    const floatingCount = Math.floor(baseFloating * scaleFactor);
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.canvas, this.particles));
    }
    for (let i = 0; i < floatingCount; i++) {
      this.particles.push(new FloatingParticle(this.canvas, this.particles));
    }
    this.ngZone.runOutsideAngular(() => this.animate());
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
        const distance = Math.hypot(dx, dy);
        if (distance < 150) {
          const opacity = 1 - distance / 150;
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
    globalThis.removeEventListener("mousemove", this.mouseMoveHandler);
    globalThis.removeEventListener("touchmove", this.touchMoveHandler);
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
    const distance = Math.hypot(dx, dy);
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
        const particleDistance = Math.hypot(pdx, pdy);
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
    const distance = Math.hypot(dx, dy);
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
var _c0 = ["canvas"];
var NetworkAnimationComponent = class _NetworkAnimationComponent {
  networkAnimationService = inject(NetworkAnimationService);
  canvasRef;
  ngAfterViewInit() {
    this.networkAnimationService.initAnimation(this.canvasRef.nativeElement);
  }
  ngOnDestroy() {
    this.networkAnimationService.destroy();
  }
  static \u0275fac = function NetworkAnimationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkAnimationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NetworkAnimationComponent, selectors: [["app-network-animation"]], viewQuery: function NetworkAnimationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["canvas", ""], [1, "network-animation"]], template: function NetworkAnimationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "canvas", 1, 0);
    }
  }, styles: ["\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\ncanvas.network-animation[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: auto;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/*# sourceMappingURL=network-animation.component.css.map */"] });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NetworkAnimationComponent, { className: "NetworkAnimationComponent", filePath: "src/app/shared/components/network-animation/network-animation.component.ts", lineNumber: 16 });
})();

// src/app/features/auth/components/container/container.component.ts
function ContainerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 3);
    \u0275\u0275listener("error", function ContainerComponent_Conditional_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.logoPath(), \u0275\u0275sanitizeUrl);
  }
}
var ContainerComponent = class _ContainerComponent {
  isRouteActive = signal(false, ...ngDevMode ? [{ debugName: "isRouteActive" }] : (
    /* istanbul ignore next */
    []
  ));
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  themeDataService = inject(ThemeDataService);
  logoPath = signal("", ...ngDevMode ? [{ debugName: "logoPath" }] : (
    /* istanbul ignore next */
    []
  ));
  logoError = signal(false, ...ngDevMode ? [{ debugName: "logoError" }] : (
    /* istanbul ignore next */
    []
  ));
  onLogoError() {
    this.logoError.set(true);
  }
  ngOnInit() {
    if (this.router.url === "/auth" || this.router.url === "/auth/") {
      const urlTree = this.router.parseUrl(this.router.url);
      const queryParams = urlTree.queryParams;
      this.router.navigate(["/auth/login"], { queryParams }).catch(() => {
      });
    }
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.isRouteActive.set(this.router.url !== "/auth");
    });
    this.themeDataService.domainTheme$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((theme) => {
      this.logoError.set(false);
      this.logoPath.set(theme?.["logoPath"] ?? "");
    });
  }
  static \u0275fac = function ContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContainerComponent, selectors: [["app-container"]], decls: 6, vars: 1, consts: [[1, "wrapper", "bg-cover", "bg-center", "h-screen"], [1, "auth-shell", "flex", "flex-col", "items-center", "justify-center", "h-full"], ["alt", "logo", 1, "logo-filter", "mb-10", "max-w-[40%]", "max-h-24", "object-contain", "hidden", "sm:block", 3, "src"], ["alt", "logo", 1, "logo-filter", "mb-10", "max-w-[40%]", "max-h-24", "object-contain", "hidden", "sm:block", 3, "error", "src"]], template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-theme")(1, "div", 0);
      \u0275\u0275element(2, "app-network-animation");
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275conditionalCreate(4, ContainerComponent_Conditional_4_Template, 1, 1, "img", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.logoPath() && !ctx.logoError() ? 4 : -1);
    }
  }, dependencies: [
    RouterModule,
    RouterOutlet,
    ButtonModule,
    NetworkAnimationComponent,
    ThemeComponent
  ], styles: ["\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--color-background-dark, #000b1e);\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   app-network-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .auth-shell[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding-top: clamp(1.25rem, 4vh, 3rem);\n  padding-bottom: clamp(1.5rem, 5.5vh, 4rem);\n}\n.wrapper[_ngcontent-%COMP%]   .logo-filter[_ngcontent-%COMP%] {\n  transition: filter 0.2s ease;\n}\n/*# sourceMappingURL=container.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{ selector: "app-container", imports: [
      RouterModule,
      ButtonModule,
      NetworkAnimationComponent,
      ThemeComponent
    ], template: '<app-theme>\n  <div class="wrapper bg-cover bg-center h-screen">\n    <app-network-animation></app-network-animation>\n    <div class="auth-shell flex flex-col items-center justify-center h-full">\n      @if (logoPath() && !logoError()) {\n        <img\n          class="logo-filter mb-10 max-w-[40%] max-h-24 object-contain hidden sm:block"\n          [src]="logoPath()"\n          (error)="onLogoError()"\n          alt="logo"\n        />\n      }\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</app-theme>\n', styles: ["/* src/app/features/auth/components/container/container.component.scss */\n.wrapper {\n  position: relative;\n  background: var(--color-background-dark, #000b1e);\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 100%;\n}\n.wrapper app-network-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.wrapper .flex {\n  position: relative;\n  z-index: 1;\n}\n.wrapper .auth-shell {\n  box-sizing: border-box;\n  min-height: 100%;\n  padding-top: clamp(1.25rem, 4vh, 3rem);\n  padding-bottom: clamp(1.5rem, 5.5vh, 4rem);\n}\n.wrapper .logo-filter {\n  transition: filter 0.2s ease;\n}\n/*# sourceMappingURL=container.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerComponent, { className: "ContainerComponent", filePath: "src/app/features/auth/components/container/container.component.ts", lineNumber: 21 });
})();

// src/app/core/services/user-session-navigation.service.ts
var UserSessionNavigationService = class _UserSessionNavigationService {
  router = inject(Router);
  clientDataService = inject(ClientDataService);
  messageService = inject(BroadcastMessageService);
  userSessionService = inject(UserSessionService);
  localStorageService = inject(LocalStorageService);
  isNavigating = false;
  /**
   * Orchestrates navigation based on the available user sessions.
   * Handles auto-redirection for single-account/single-client users.
   */
  async navigateBasedOnSessions(sessions, returnUrl) {
    if (this.isNavigating) {
      return false;
    }
    this.isNavigating = true;
    try {
      if (this.router.url.includes("context-selection")) {
        return false;
      }
      this.localStorageService.removeItem(LOCAL_STORAGE_KEY_SELECTED_SESSION_ID, true);
      const queryParams = returnUrl !== null && returnUrl !== void 0 && returnUrl.trim() !== "" ? { returnUrl } : {};
      if (sessions.length === 1) {
        const session = sessions[0];
        const ownerType = session.owner?.type?.toUpperCase();
        const defaultClientId = session.defaultClient?.id;
        if (ownerType === "CLIENT" && isDefined(defaultClientId)) {
          this.userSessionService.setCurrentUserSession(session.id);
          try {
            await this.clientDataService.setSelectedClientById(defaultClientId);
            this.messageService.sendAction(ActionType.profile_changed, {
              clientId: defaultClientId
            });
            return await this.router.navigate(["/position"]);
          } catch {
            return await this.router.navigate(["/auth", "context-selection"], {
              queryParams
            });
          }
        }
      }
      return await this.router.navigate(["/auth", "context-selection"], {
        queryParams
      });
    } finally {
      this.isNavigating = false;
    }
  }
  static \u0275fac = function UserSessionNavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSessionNavigationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserSessionNavigationService, factory: _UserSessionNavigationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSessionNavigationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/auth/components/context-selection-wizard/context-selection-wizard.component.ts
var _c02 = ["accountSelectionStep"];
var _c1 = ["clientSelectionStep"];
var _c2 = (a0) => ({ year: a0 });
function ContextSelectionWizardComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275element(2, "p-progressSpinner", 10);
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "AUTH.CONTEXT_SELECTION.PREPARING_ACCOUNT"), " ");
  }
}
function ContextSelectionWizardComponent_ng_template_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.CONTEXT_SELECTION.LOADING_THEME"), " ");
  }
}
function ContextSelectionWizardComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, ContextSelectionWizardComponent_ng_template_5_Conditional_1_Conditional_2_Template, 3, 3, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-client-selector", 14);
    \u0275\u0275listener("accountSelected", function ContextSelectionWizardComponent_ng_template_5_Conditional_1_Template_app_client_selector_accountSelected_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAccountSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loadingPreviewTheme() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("clientAccounts", ctx_r1.accounts)("maxHeightClass", "max-h-[18rem]");
  }
}
function ContextSelectionWizardComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContextSelectionWizardComponent_ng_template_5_Conditional_0_Template, 6, 3, "div", 7)(1, ContextSelectionWizardComponent_ng_template_5_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isAutoSelectingAccount() ? 0 : 1);
  }
}
function ContextSelectionWizardComponent_ng_template_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "p-progressSpinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !ctx_r1.permissionsChecked() ? \u0275\u0275pipeBind1(4, 1, "AUTH.CONTEXT_SELECTION.CHECKING_PERMISSIONS") : \u0275\u0275pipeBind1(5, 3, "AUTH.CONTEXT_SELECTION.PREPARING_EXPERIENCE"), " ");
  }
}
function ContextSelectionWizardComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "AUTH.CONTEXT_SELECTION.NO_PERMISSION_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "AUTH.CONTEXT_SELECTION.NO_PERMISSION_DESCRIPTION"), " ");
  }
}
function ContextSelectionWizardComponent_ng_template_7_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.CONTEXT_SELECTION.LOADING_CLIENTS"), " ");
  }
}
function ContextSelectionWizardComponent_ng_template_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, ContextSelectionWizardComponent_ng_template_7_Conditional_3_Conditional_1_Template, 3, 3, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-client-selection-form", 21);
    \u0275\u0275listener("clientSelected", function ContextSelectionWizardComponent_ng_template_7_Conditional_3_Template_app_client_selection_form_clientSelected_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClientSelected($event));
    })("searchQuery", function ContextSelectionWizardComponent_ng_template_7_Conditional_3_Template_app_client_selection_form_searchQuery_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClientSearch($event));
    })("lazyLoad", function ContextSelectionWizardComponent_ng_template_7_Conditional_3_Template_app_client_selection_form_lazyLoad_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoadClients($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadingClients() && ctx_r1.availableClients().length === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("clients", ctx_r1.availableClients())("loading", ctx_r1.loadingClients())("useServerSearch", ctx_r1.useServerSearch())("totalRecords", ctx_r1.totalClientCount())("enablePagination", ctx_r1.useServerSearch())("enableLazyLoad", ctx_r1.useServerSearch())("recentClients", ctx_r1.recentClients());
  }
}
function ContextSelectionWizardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ContextSelectionWizardComponent_ng_template_7_Conditional_1_Template, 6, 5, "div", 15)(2, ContextSelectionWizardComponent_ng_template_7_Conditional_2_Template, 8, 6, "div", 15)(3, ContextSelectionWizardComponent_ng_template_7_Conditional_3_Template, 3, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.permissionsChecked() || ctx_r1.isLoading() ? 1 : !ctx_r1.canListClients() ? 2 : 3);
  }
}
var ROUTES = {
  LOGIN: ["/auth", "login"],
  POSITION: ["/position"],
  RESET_PASSWORD_WELCOME: ["/auth", "reset-password-welcome"]
};
var CONSTANTS = {
  ACTIVE_STATE: "active",
  CLIENT_TYPE: "CLIENT",
  SORT_ORDER: "name:asc",
  FILTER_NAME: "name"
};
var ContextSelectionWizardComponent = class _ContextSelectionWizardComponent {
  accountSelectionStep;
  clientSelectionStep;
  wizard;
  userSessionService = inject(UserSessionService);
  userSessionNavigationService = inject(UserSessionNavigationService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  apiAuthService = inject(AuthService);
  authTokenManager = inject(AuthTokenManagerService);
  clientDataService = inject(ClientDataService);
  clientsService = inject(ClientsService);
  messageService = inject(BroadcastMessageService);
  utilityService = inject(UtilityService);
  authDataService = inject(AuthDataService);
  themeService = inject(ThemeDataService);
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  uiMessageService = inject(MessageService);
  recentClientsService = inject(RecentClientsService);
  translate = inject(TranslateService);
  accounts = this.userSessionService.userSessions();
  selectedAccount = signal(null, ...ngDevMode ? [{ debugName: "selectedAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  availableClients = signal([], ...ngDevMode ? [{ debugName: "availableClients" }] : (
    /* istanbul ignore next */
    []
  ));
  totalClientCount = signal(0, ...ngDevMode ? [{ debugName: "totalClientCount" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingClients = signal(false, ...ngDevMode ? [{ debugName: "loadingClients" }] : (
    /* istanbul ignore next */
    []
  ));
  loadingPreviewTheme = signal(false, ...ngDevMode ? [{ debugName: "loadingPreviewTheme" }] : (
    /* istanbul ignore next */
    []
  ));
  isAutoSelectingAccount = signal(false, ...ngDevMode ? [{ debugName: "isAutoSelectingAccount" }] : (
    /* istanbul ignore next */
    []
  ));
  isPasswordResetMode = false;
  returnUrl = null;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : (
    /* istanbul ignore next */
    []
  ));
  paginationOffset = signal(0, ...ngDevMode ? [{ debugName: "paginationOffset" }] : (
    /* istanbul ignore next */
    []
  ));
  pageSize = DEFAULT_PAGE_SIZE;
  cachedEmptyClients = [];
  unfilteredTotalCount = signal(0, ...ngDevMode ? [{ debugName: "unfilteredTotalCount" }] : (
    /* istanbul ignore next */
    []
  ));
  // Determine if we should use server-side search based on unfiltered total count
  useServerSearch = computed(() => this.unfilteredTotalCount() >= DEFAULT_PAGE_SIZE, ...ngDevMode ? [{ debugName: "useServerSearch" }] : (
    /* istanbul ignore next */
    []
  ));
  // Check if user has permission to list clients
  canListClients = computed(() => {
    return this.authDataService.hasPermission("client:list-clients") || this.authDataService.hasPermission("clients:list");
  }, ...ngDevMode ? [{ debugName: "canListClients" }] : (
    /* istanbul ignore next */
    []
  ));
  // Track if permissions have been checked (prevents flicker during async load)
  permissionsChecked = computed(() => {
    return this.authDataService.getUserProfile() !== null;
  }, ...ngDevMode ? [{ debugName: "permissionsChecked" }] : (
    /* istanbul ignore next */
    []
  ));
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Overall loading state - combines submission and theme preview loading
  isLoading = computed(() => this.isSubmitting() || this.loadingPreviewTheme(), ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Expose recent clients from the service for the template
  recentClients = this.recentClientsService.recentClients;
  steps = [];
  constructor() {
    if (this.canListClients()) {
      this.setupClientsStream();
    }
  }
  setupClientsStream() {
    const search$ = toObservable(this.searchTerm).pipe(distinctUntilChanged());
    const offset$ = toObservable(this.paginationOffset).pipe(distinctUntilChanged());
    const account$ = toObservable(this.selectedAccount).pipe(distinctUntilChanged((a, b) => a?.id === b?.id));
    combineLatest([search$, offset$, account$]).pipe(takeUntilDestroyed(this.destroyRef), tap(() => this.loadingClients.set(true)), switchMap(([searchTerm, offset, account]) => {
      const term = searchTerm.trim();
      const ownerId = account?.owner?.id;
      if (!isDefined(ownerId)) {
        return of(null);
      }
      if (term === "" && offset === 0 && this.cachedEmptyClients.length > 0) {
        return of({
          items: this.cachedEmptyClients,
          count: this.unfilteredTotalCount()
        });
      }
      const filters = {
        state: { value: CONSTANTS.ACTIVE_STATE, operator: "=" }
      };
      if (term !== "") {
        filters[CONSTANTS.FILTER_NAME] = {
          value: `*${term}*`,
          operator: "="
        };
      }
      const rqlFilter = this.utilityService.constructRqlFilter(filters);
      return this.clientsService.listClients(ownerId, offset, this.pageSize, CONSTANTS.SORT_ORDER, rqlFilter).pipe(catchError((error) => {
        console.error("Error loading clients:", error);
        this.fallbackToDefaultClient();
        return of(null);
      }));
    })).subscribe((data) => {
      if (isDefined(data) && hasProperty(data, "items")) {
        const items = data.items ?? [];
        this.availableClients.set(items);
        this.totalClientCount.set(data.count ?? 0);
        if (this.searchTerm().trim() === "" && this.paginationOffset() === 0) {
          this.cachedEmptyClients = items;
          this.unfilteredTotalCount.set(data.count ?? items.length);
        }
      }
      this.loadingClients.set(false);
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
    const resetPassword = this.route.snapshot.queryParams["resetPassword"];
    this.isPasswordResetMode = resetPassword === "true";
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] ?? null;
  }
  ngAfterViewInit() {
    const steps = [];
    let nextValue = 1;
    if (this.accounts.length > 1) {
      steps.push({
        value: nextValue++,
        header: this.translate.instant("AUTH.CONTEXT_SELECTION.STEP_SELECT_ACCOUNT"),
        content: this.accountSelectionStep,
        complete: false,
        disableNext: true
      });
    }
    steps.push({
      value: nextValue,
      header: this.translate.instant("AUTH.CONTEXT_SELECTION.STEP_SELECT_CLIENT"),
      content: this.clientSelectionStep,
      complete: false,
      disableNext: true
    });
    this.steps = steps;
    this.cdr.detectChanges();
    if (this.accounts.length === 0) {
      this.navigateToLogin();
      return;
    }
    const firstAccount = this.accounts[0];
    if (firstAccount?.defaultClient?.id) {
      this.loadingPreviewTheme.set(true);
      this.clientsService.getClient(firstAccount.defaultClient.id).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.loadingPreviewTheme.set(false))).subscribe({
        next: (client) => {
          this.clientDataService.setPreviewClient(client);
        },
        error: (error) => {
          console.warn("Failed to load initial preview client:", error);
        }
      });
    }
    if (this.accounts.length === 1) {
      this.isAutoSelectingAccount.set(true);
      this.userSessionNavigationService.navigateBasedOnSessions(this.accounts, this.returnUrl).then((navigated) => {
        if (!navigated) {
          void this.onAccountSelected(this.accounts[0]);
        }
      }).catch((error) => console.error("Error auto-selecting account:", error)).finally(() => this.isAutoSelectingAccount.set(false));
    }
  }
  async onAccountSelected(account) {
    this.selectedAccount.set(account);
    this.clearSessionState();
    this.isSubmitting.set(true);
    try {
      if (this.isPasswordResetMode) {
        this.userSessionService.setCurrentUserSession(account.id);
        this.isSubmitting.set(false);
        await this.router.navigate(ROUTES.RESET_PASSWORD_WELCOME);
        return;
      }
      if (this.accounts.length === 1) {
        this.userSessionService.setCurrentUserSession(account.id);
      } else {
        await this.authenticateUser(account);
      }
      if (await this.handleReturnUrl()) {
        this.isSubmitting.set(false);
        return;
      }
      await this.handleClientSelectionFlow(account);
    } catch (error) {
      console.error("Error selecting user:", error);
      this.uiMessageService.add({
        severity: "error",
        summary: this.translate.instant("SHARED.COMMON.ERRORS.TITLE"),
        detail: this.translate.instant("AUTH.CONTEXT_SELECTION.ERROR_SELECT_ACCOUNT")
      });
      this.isSubmitting.set(false);
    }
  }
  clearSessionState() {
    this.clientDataService.clearSelectedClient();
    this.clientDataService.clearPreviewClient();
    this.themeService.clearTheme();
  }
  async authenticateUser(account) {
    const response = await firstValueFrom(this.apiAuthService.selectUser(account.id));
    this.authTokenManager.storeTokens({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      idToken: response.idToken ?? "",
      users: this.accounts
    });
    const profile = await firstValueFrom(this.apiAuthService.getUserProfile());
    if (isDefined(profile)) {
      await this.authDataService.setUserProfile(profile);
    }
    this.userSessionService.setCurrentUserSession(account.id);
  }
  async handleReturnUrl() {
    if (isDefined(this.returnUrl) && this.returnUrl !== null && this.returnUrl.trim() !== "") {
      await this.router.navigateByUrl(this.returnUrl);
      return true;
    }
    return false;
  }
  async handleClientSelectionFlow(account) {
    const ownerType = account?.owner?.type?.toUpperCase();
    const isClientOnlyUser = ownerType === CONSTANTS.CLIENT_TYPE;
    const defaultClientId = account?.defaultClient?.id ?? (isClientOnlyUser ? account?.owner?.id : void 0);
    const hasSingleDefaultClient = isClientOnlyUser && isDefined(defaultClientId);
    if (isDefined(defaultClientId)) {
      this.loadPreviewTheme(defaultClientId);
    }
    if (!this.canListClients() && isDefined(defaultClientId)) {
      this.attemptAutoSelectClient(defaultClientId);
      return;
    }
    if (!this.canListClients() && !isDefined(defaultClientId)) {
      await this.enableClientSelectionStep();
      this.isSubmitting.set(false);
      return;
    }
    if (!hasSingleDefaultClient) {
      this.loadClientsForAccount();
    }
    if (hasSingleDefaultClient) {
      this.attemptAutoSelectClient(defaultClientId);
    } else {
      await this.enableClientSelectionStep();
      this.isSubmitting.set(false);
    }
  }
  loadPreviewTheme(clientId) {
    this.loadingPreviewTheme.set(true);
    this.clientsService.getClient(clientId).pipe(takeUntilDestroyed(this.destroyRef), finalize(() => this.loadingPreviewTheme.set(false))).subscribe({
      next: (client) => {
        this.clientDataService.setPreviewClient(client);
      },
      error: (error) => {
        console.warn("Failed to load preview client for theming:", error);
      }
    });
  }
  attemptAutoSelectClient(clientId) {
    this.clientsService.getClient(clientId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (client) => {
        this.finalizeClientSelection(client);
      },
      error: () => {
        this.isSubmitting.set(false);
        void this.enableClientSelectionStep();
      }
    });
  }
  finalizeClientSelection(client) {
    this.clientDataService.clearPreviewClient();
    this.messageService.sendAction(ActionType.profile_changed, {
      clientId: client.id
    });
    this.clientDataService.setSelectedClient(client);
    if (isDefined(client.name)) {
      this.recentClientsService.addRecentClient(client.id, client.name);
    }
    this.router.navigate(ROUTES.POSITION).then((navigated) => {
      if (!navigated) {
        this.isSubmitting.set(false);
      }
    }).catch(() => {
      this.isSubmitting.set(false);
    });
  }
  async enableClientSelectionStep() {
    if (Array.isArray(this.steps) && this.steps.length > 1) {
      this.steps[0].complete = true;
      this.steps[1].disableNext = false;
      await this.wizard.goNext();
    }
  }
  loadClientsForAccount(searchTerm = "") {
    this.paginationOffset.set(0);
    this.searchTerm.set(searchTerm);
  }
  onClientSearch(searchTerm) {
    if (!this.canListClients()) {
      return;
    }
    this.paginationOffset.set(0);
    this.searchTerm.set(searchTerm);
  }
  onLazyLoadClients(event) {
    if (!this.canListClients()) {
      return;
    }
    this.paginationOffset.set(event.first ?? 0);
  }
  async onClientSelected(clientId) {
    if (!clientId)
      return;
    this.isSubmitting.set(true);
    this.clientsService.getClient(clientId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        this.finalizeClientSelection(response);
      },
      error: (error) => {
        console.error("Error selecting client:", error);
        this.uiMessageService.add({
          severity: "error",
          summary: this.translate.instant("SHARED.COMMON.ERRORS.TITLE"),
          detail: this.translate.instant("AUTH.CONTEXT_SELECTION.ERROR_SELECT_CLIENT")
        });
        this.isSubmitting.set(false);
      }
    });
  }
  onWizardCancel() {
    this.clientDataService.clearPreviewClient();
    this.navigateToLogin();
  }
  navigateToLogin() {
    this.userSessionService.clearAllSessions();
    this.router.navigate(ROUTES.LOGIN).catch((error) => console.error("Error navigating to login:", error));
  }
  /**
   * Fallback mechanism when client loading fails
   * Attempts to proceed with the default client if available
   */
  fallbackToDefaultClient() {
    const selectedAccount = this.selectedAccount();
    const ownerType = selectedAccount?.owner?.type?.toUpperCase();
    const isClientOnlyUser = ownerType === CONSTANTS.CLIENT_TYPE;
    const defaultClientId = selectedAccount?.defaultClient?.id ?? (isClientOnlyUser ? selectedAccount?.owner?.id : void 0);
    if (isDefined(defaultClientId)) {
      console.warn("Attempting to proceed with default client due to loading failure");
      this.isSubmitting.set(true);
      this.clientsService.getClient(defaultClientId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (client) => {
          this.uiMessageService.add({
            severity: "info",
            summary: this.translate.instant("AUTH.CONTEXT_SELECTION.NOTICE_SUMMARY"),
            detail: this.translate.instant("AUTH.CONTEXT_SELECTION.NOTICE_DEFAULT_CLIENT")
          });
          this.finalizeClientSelection(client);
        },
        error: (error) => {
          console.error("Failed to load default client:", error);
          this.isSubmitting.set(false);
          this.uiMessageService.add({
            severity: "error",
            summary: this.translate.instant("SHARED.COMMON.ERRORS.TITLE"),
            detail: this.translate.instant("AUTH.CONTEXT_SELECTION.ERROR_UNABLE_TO_PROCEED")
          });
        }
      });
    } else {
      console.warn("No default client available for fallback");
    }
  }
  static \u0275fac = function ContextSelectionWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextSelectionWizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContextSelectionWizardComponent, selectors: [["app-context-selection-wizard"]], viewQuery: function ContextSelectionWizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5)(_c1, 5)(WizardComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.accountSelectionStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientSelectionStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wizard = _t.first);
    }
  }, decls: 15, vars: 18, consts: [["accountSelectionStep", ""], ["clientSelectionStep", ""], [1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-[var(--main-background-color)]", "p-6", "rounded-border", "shadow-card", "justify-start", "rounded-none"], [3, "onCancel", "visibleChange", "visible", "steps", "useWizardButtonsOnly", "showFooterButtons", "loading", "contentOnly", "header"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center", 3, "click"], [1, "!text-white", "self-center"], [1, "flex", "flex-col", "items-center", "w-full"], [1, "w-full"], [1, "flex", "flex-col", "items-center", "gap-3", "mt-6"], ["styleClass", "w-10 h-10 text-primary-500"], [1, "text-sm", "text-gray-500"], [1, "text-center", "mb-8"], [1, "text-sm", "text-gray-400", "text-center", "mt-2"], [3, "accountSelected", "clientAccounts", "maxHeightClass"], [1, "text-center", "p-8"], ["styleClass", "w-10 h-10"], [1, "text-sm", "text-gray-400", "mt-4"], [1, "pi", "pi-lock", "text-4xl", "text-gray-400", "mb-4"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-sm", "text-gray-500", "mb-4"], [3, "clientSelected", "searchQuery", "lazyLoad", "clients", "loading", "useServerSearch", "totalRecords", "enablePagination", "enableLazyLoad", "recentClients"]], template: function ContextSelectionWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "app-theme")(3, "app-wizard", 4);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("onCancel", function ContextSelectionWizardComponent_Template_app_wizard_onCancel_3_listener() {
        return ctx.onWizardCancel();
      })("visibleChange", function ContextSelectionWizardComponent_Template_app_wizard_visibleChange_3_listener() {
        return ctx.onWizardCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ContextSelectionWizardComponent_ng_template_5_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, ContextSelectionWizardComponent_ng_template_7_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 5);
      \u0275\u0275listener("click", function ContextSelectionWizardComponent_Template_a_click_9_listener() {
        return ctx.onWizardCancel();
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 6);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", true)("steps", ctx.steps)("useWizardButtonsOnly", true)("showFooterButtons", false)("loading", ctx.isLoading())("contentOnly", true)("header", \u0275\u0275pipeBind1(4, 9, "AUTH.CONTEXT_SELECTION.WIZARD_HEADER"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 11, "SHARED.COMMON.BUTTONS.BACK_TO_LOGIN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 13, "AUTH.LOGIN.COPYRIGHT", \u0275\u0275pureFunction1(16, _c2, ctx.currentYear)), " ");
    }
  }, dependencies: [
    WizardComponent,
    ButtonModule,
    ClientSelectorComponent,
    ClientSelectionFormComponent,
    ThemeComponent,
    ProgressSpinnerModule,
    ProgressSpinner,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  [_nghost-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: auto;\n    padding: 0px;\n    max-width: 800px;\n  }\n}\n/*# sourceMappingURL=context-selection-wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextSelectionWizardComponent, [{
    type: Component,
    args: [{ selector: "app-context-selection-wizard", imports: [
      WizardComponent,
      ButtonModule,
      ClientSelectorComponent,
      ClientSelectionFormComponent,
      ThemeComponent,
      ProgressSpinnerModule,
      TranslatePipe
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
>
  <div
    class="bg-[var(--main-background-color)] p-6 rounded-border shadow-card justify-start rounded-none"
  >
    <app-theme>
      <app-wizard
        [visible]="true"
        [steps]="steps"
        [useWizardButtonsOnly]="true"
        [showFooterButtons]="false"
        [loading]="isLoading()"
        [contentOnly]="true"
        (onCancel)="onWizardCancel()"
        (visibleChange)="onWizardCancel()"
        [header]="'AUTH.CONTEXT_SELECTION.WIZARD_HEADER' | translate"
      >
      </app-wizard>

      <!-- Step 1: Account Selection (only shown if multiple accounts) -->
      <ng-template #accountSelectionStep let-step>
        @if (isAutoSelectingAccount()) {
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col items-center gap-3 mt-6">
              <p-progressSpinner
                styleClass="w-10 h-10 text-primary-500"
              ></p-progressSpinner>
              <p class="text-sm text-gray-500">
                {{ 'AUTH.CONTEXT_SELECTION.PREPARING_ACCOUNT' | translate }}
              </p>
            </div>
          </div>
        } @else {
          <div class="w-full">
            <div class="text-center mb-8">
              @if (loadingPreviewTheme()) {
                <p class="text-sm text-gray-400 text-center mt-2">
                  {{ 'AUTH.CONTEXT_SELECTION.LOADING_THEME' | translate }}
                </p>
              }
            </div>

            <app-client-selector
              [clientAccounts]="accounts"
              [maxHeightClass]="'max-h-[18rem]'"
              (accountSelected)="onAccountSelected($event)"
            ></app-client-selector>
          </div>
        }
      </ng-template>

      <!-- Step 2: Client Selection (embedded) -->
      <ng-template #clientSelectionStep let-step>
        <div class="w-full">
          @if (!permissionsChecked() || isLoading()) {
            <div class="text-center p-8">
              <p-progressSpinner styleClass="w-10 h-10"></p-progressSpinner>
              <p class="text-sm text-gray-400 mt-4">
                {{
                  !permissionsChecked()
                    ? ('AUTH.CONTEXT_SELECTION.CHECKING_PERMISSIONS'
                      | translate)
                    : ('AUTH.CONTEXT_SELECTION.PREPARING_EXPERIENCE'
                      | translate)
                }}
              </p>
            </div>
          } @else if (!canListClients()) {
            <div class="text-center p-8">
              <i class="pi pi-lock text-4xl text-gray-400 mb-4"></i>
              <p class="text-lg font-semibold text-gray-700 mb-2">
                {{ 'AUTH.CONTEXT_SELECTION.NO_PERMISSION_TITLE' | translate }}
              </p>
              <p class="text-sm text-gray-500 mb-4">
                {{
                  'AUTH.CONTEXT_SELECTION.NO_PERMISSION_DESCRIPTION' | translate
                }}
              </p>
            </div>
          } @else {
            <div class="text-center mb-8">
              @if (loadingClients() && availableClients().length === 0) {
                <p class="text-sm text-gray-400 text-center mt-2">
                  {{ 'AUTH.CONTEXT_SELECTION.LOADING_CLIENTS' | translate }}
                </p>
              }
            </div>
            <app-client-selection-form
              [clients]="availableClients()"
              [loading]="loadingClients()"
              [useServerSearch]="useServerSearch()"
              [totalRecords]="totalClientCount()"
              [enablePagination]="useServerSearch()"
              [enableLazyLoad]="useServerSearch()"
              [recentClients]="recentClients()"
              (clientSelected)="onClientSelected($event)"
              (searchQuery)="onClientSearch($event)"
              (lazyLoad)="onLazyLoadClients($event)"
            ></app-client-selection-form>
          }
        </div>
      </ng-template>
    </app-theme>
  </div>

  <a
    class="!text-white pt-4 underline cursor-pointer self-center"
    (click)="onWizardCancel()"
    >{{ 'SHARED.COMMON.BUTTONS.BACK_TO_LOGIN' | translate }}
  </a>
  <a class="!text-white self-center">
    {{ 'AUTH.LOGIN.COPYRIGHT' | translate: { year: currentYear } }}
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/context-selection-wizard/context-selection-wizard.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n@media (min-width: 640px) {\n  :host .panel {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  :host .login-box {\n    top: 0px;\n    height: auto;\n    padding: 0px;\n    max-width: 800px;\n  }\n}\n/*# sourceMappingURL=context-selection-wizard.component.css.map */\n"] }]
  }], () => [], { accountSelectionStep: [{
    type: ViewChild,
    args: ["accountSelectionStep"]
  }], clientSelectionStep: [{
    type: ViewChild,
    args: ["clientSelectionStep"]
  }], wizard: [{
    type: ViewChild,
    args: [WizardComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextSelectionWizardComponent, { className: "ContextSelectionWizardComponent", filePath: "src/app/features/auth/components/context-selection-wizard/context-selection-wizard.component.ts", lineNumber: 82 });
})();

// node_modules/@primeuix/styles/dist/floatlabel/index.mjs
var style = "\n    .p-floatlabel {\n        display: block;\n        position: relative;\n    }\n\n    .p-floatlabel label {\n        position: absolute;\n        pointer-events: none;\n        top: 50%;\n        transform: translateY(-50%);\n        transition-property: all;\n        transition-timing-function: ease;\n        line-height: 1;\n        font-weight: dt('floatlabel.font.weight');\n        inset-inline-start: dt('floatlabel.position.x');\n        color: dt('floatlabel.color');\n        transition-duration: dt('floatlabel.transition.duration');\n    }\n\n    .p-floatlabel:has(.p-textarea) label {\n        top: dt('floatlabel.position.y');\n        transform: translateY(0);\n    }\n\n    .p-floatlabel:has(.p-inputicon:first-child) label {\n        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label,\n    .p-floatlabel:has(input[placeholder]) label,\n    .p-floatlabel:has(textarea[placeholder]) label {\n        top: dt('floatlabel.over.active.top');\n        transform: translateY(0);\n        font-size: dt('floatlabel.active.font.size');\n        font-weight: dt('floatlabel.active.font.weight');\n    }\n\n    .p-floatlabel:has(input.p-filled) label,\n    .p-floatlabel:has(textarea.p-filled) label,\n    .p-floatlabel:has(.p-inputwrapper-filled) label {\n        color: dt('floatlabel.active.color');\n    }\n\n    .p-floatlabel:has(input:focus) label,\n    .p-floatlabel:has(input:-webkit-autofill) label,\n    .p-floatlabel:has(textarea:focus) label,\n    .p-floatlabel:has(.p-inputwrapper-focus) label {\n        color: dt('floatlabel.focus.color');\n    }\n\n    .p-floatlabel-in .p-inputtext,\n    .p-floatlabel-in .p-textarea,\n    .p-floatlabel-in .p-select-label,\n    .p-floatlabel-in .p-multiselect-label,\n    .p-floatlabel-in .p-multiselect-label:has(.p-chip),\n    .p-floatlabel-in .p-autocomplete-input-multiple,\n    .p-floatlabel-in .p-cascadeselect-label,\n    .p-floatlabel-in .p-treeselect-label {\n        padding-block-start: dt('floatlabel.in.input.padding.top');\n        padding-block-end: dt('floatlabel.in.input.padding.bottom');\n    }\n\n    .p-floatlabel-in:has(input:focus) label,\n    .p-floatlabel-in:has(input.p-filled) label,\n    .p-floatlabel-in:has(input:-webkit-autofill) label,\n    .p-floatlabel-in:has(textarea:focus) label,\n    .p-floatlabel-in:has(textarea.p-filled) label,\n    .p-floatlabel-in:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-in:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-in:has(input[placeholder]) label,\n    .p-floatlabel-in:has(textarea[placeholder]) label {\n        top: dt('floatlabel.in.active.top');\n    }\n\n    .p-floatlabel-on:has(input:focus) label,\n    .p-floatlabel-on:has(input.p-filled) label,\n    .p-floatlabel-on:has(input:-webkit-autofill) label,\n    .p-floatlabel-on:has(textarea:focus) label,\n    .p-floatlabel-on:has(textarea.p-filled) label,\n    .p-floatlabel-on:has(.p-inputwrapper-focus) label,\n    .p-floatlabel-on:has(.p-inputwrapper-filled) label,\n    .p-floatlabel-on:has(input[placeholder]) label,\n    .p-floatlabel-on:has(textarea[placeholder]) label {\n        top: 0;\n        transform: translateY(-50%);\n        border-radius: dt('floatlabel.on.border.radius');\n        background: dt('floatlabel.on.active.background');\n        padding: dt('floatlabel.on.active.padding');\n    }\n\n    .p-floatlabel:has([class^='p-'][class$='-fluid']) {\n        width: 100%;\n    }\n\n    .p-floatlabel:has(.p-invalid) label {\n        color: dt('floatlabel.invalid.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-floatlabel.mjs
var _c03 = ["*"];
var style2 = (
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
  style = style2;
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
var FLOATLABEL_INSTANCE = new InjectionToken("FLOATLABEL_INSTANCE");
var FloatLabel = class _FloatLabel extends BaseComponent {
  componentName = "FloatLabel";
  _componentStyle = inject(FloatLabelStyle);
  $pcFloatLabel = inject(FLOATLABEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
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
    features: [\u0275\u0275ProvidersFeature([FloatLabelStyle, {
      provide: FLOATLABEL_INSTANCE,
      useExisting: _FloatLabel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _FloatLabel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function FloatLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
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
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FloatLabelStyle, {
        provide: FLOATLABEL_INSTANCE,
        useExisting: FloatLabel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: FloatLabel
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
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

// src/app/features/auth/components/forgot-password/forgot-password.component.ts
var _c04 = (a0) => ({ year: a0 });
var _c12 = (a0) => ({ username: a0 });
var _c22 = () => ["/auth/login"];
function ForgotPasswordComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "p-select", 13);
    \u0275\u0275listener("onChange", function ForgotPasswordComponent_Conditional_3_Conditional_8_Template_p_select_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.apiOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "AUTH.LOGIN.API_URL"));
  }
}
function ForgotPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 7);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_3_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, ForgotPasswordComponent_Conditional_3_Conditional_8_Template, 5, 4, "p-floatlabel");
    \u0275\u0275elementStart(9, "p-floatlabel");
    \u0275\u0275element(10, "input", 9);
    \u0275\u0275elementStart(11, "label", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "p-button", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "AUTH.FORGOT_PASSWORD.TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "AUTH.FORGOT_PASSWORD.DESCRIPTION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.resetPasswordForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.environment.showApiDropdown ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("autocomplete", "username");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "AUTH.FORGOT_PASSWORD.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.resetPasswordForm.invalid)("loading", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "AUTH.FORGOT_PASSWORD.BUTTON"), " ");
  }
}
function ForgotPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-button", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "AUTH.FORGOT_PASSWORD.SUCCESS_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "AUTH.FORGOT_PASSWORD.SUCCESS_DESCRIPTION", \u0275\u0275pureFunction1(11, _c12, ctx_r1.submittedUsername)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "SHARED.COMMON.BUTTONS.BACK_TO_LOGIN"), " ");
  }
}
function ForgotPasswordComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c22));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "AUTH.LOGIN.BUTTON"));
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  apiUrlService = inject(ApiUrlService);
  authService = inject(AuthService);
  document = inject(DOCUMENT);
  fb = inject(NonNullableFormBuilder);
  location = inject(Location);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  apiSchemaService = inject(ApiSchemaService);
  translateService = inject(TranslateService);
  environment = environment;
  apiOptions = environment.apiUrls.map((url) => ({
    label: url,
    value: url
  }));
  resetPasswordForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    apiUrl: this.fb.control("")
  });
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  loading = false;
  submitted = false;
  submittedUsername = "";
  ngOnInit() {
    this.initializeApiUrl();
  }
  buildResetUrl() {
    if (this.apiSchemaService.usesModernSchema()) {
      return this.document.location.origin;
    }
    const loginPath = this.router.createUrlTree(["/auth/login"], {
      queryParams: { token: "{token}" }
    }).toString();
    return `${this.document.location.origin}/${this.location.prepareExternalUrl(loginPath)}`;
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      const username = this.resetPasswordForm.value.username;
      const resetUrl = this.buildResetUrl();
      this.authService.resetPassword({ username, resetUrl }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
          this.submittedUsername = username;
          this.toastService.showSuccess(this.translateService.instant("SHARED.COMMON.STATUS.SUCCESS"), this.translateService.instant("AUTH.FORGOT_PASSWORD.TOAST_SUCCESS"));
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
  initializeApiUrl() {
    if (!environment.showApiDropdown) {
      const firstApiUrl = environment.apiUrls[0];
      if (firstApiUrl) {
        this.apiUrlService.setApiUrl(firstApiUrl);
        this.resetPasswordForm.controls.apiUrl.setValue(firstApiUrl);
      }
      return;
    }
    const currentUrl = this.apiUrlService.getCurrentApiUrl();
    const firstOptionUrl = this.apiOptions[0]?.value;
    if (!firstOptionUrl) {
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
    this.resetPasswordForm.get("apiUrl")?.setValue(initialApiUrl);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 9, vars: 8, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none", "mb-4"], [1, "flex", "flex-col"], [1, "!text-white", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "my-4", "text-[1rem]", "font-normal", "leading-[1.5]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none auth-button", "type", "submit", 3, "disabled", "loading"], ["id", "resetUrl", "optionLabel", "label", "optionValue", "value", "formControlName", "apiUrl", 1, "w-full", 3, "onChange", "options"], ["for", "resetUrl"], [1, "mx-12", "mt-10", "mb-6", "text-center"], [1, "mb-6", "text-[1rem]", "font-normal", "leading-[1.5]", "!text-gray-500"], ["styleClass", "w-[160px] h-[50px] !text-white rounded border-none auth-button", 3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ForgotPasswordComponent_Conditional_3_Template, 18, 17)(4, ForgotPasswordComponent_Conditional_4_Template, 10, 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, ForgotPasswordComponent_Conditional_5_Template, 3, 5, "a", 3);
      \u0275\u0275elementStart(6, "a", 4);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.submitted ? 3 : 4);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.submitted ? 5 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 3, "AUTH.LOGIN.COPYRIGHT", \u0275\u0275pureFunction1(6, _c04, ctx.currentYear)), " ");
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
    Select,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n.auth-button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-color) !important;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
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
      SelectModule,
      TranslatePipe
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none mb-4">
    <div class="flex flex-col">
      @if (!submitted) {
        <h2
          class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
        >
          {{ 'AUTH.FORGOT_PASSWORD.TITLE' | translate }}
        </h2>
        <span
          class="my-4 text-[1rem] font-normal leading-[1.5] text-center !text-gray-500"
          >{{ 'AUTH.FORGOT_PASSWORD.DESCRIPTION' | translate }}</span
        >
        <form
          [formGroup]="resetPasswordForm"
          class="mx-12 mt-10"
          (ngSubmit)="onSubmit()"
        >
          <div class="grid gap-6">
            @if (environment.showApiDropdown) {
              <p-floatlabel>
                <p-select
                  id="resetUrl"
                  [options]="apiOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                  formControlName="apiUrl"
                  (onChange)="onApiUrlChange($event)"
                />
                <label for="resetUrl">{{
                  'AUTH.LOGIN.API_URL' | translate
                }}</label>
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
              <label for="username">{{
                'AUTH.FORGOT_PASSWORD.EMAIL' | translate
              }}</label>
            </p-floatlabel>
          </div>

          <div class="flex justify-center items-center my-6">
            <p-button
              styleClass="w-[120px] h-[50px] !text-white rounded border-none auth-button"
              type="submit"
              [disabled]="resetPasswordForm.invalid"
              [loading]="loading"
            >
              {{ 'AUTH.FORGOT_PASSWORD.BUTTON' | translate }}
            </p-button>
          </div>
        </form>
      } @else {
        <h2
          class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
        >
          {{ 'AUTH.FORGOT_PASSWORD.SUCCESS_TITLE' | translate }}
        </h2>
        <div class="mx-12 mt-10 mb-6 text-center">
          <p class="mb-6 text-[1rem] font-normal leading-[1.5] !text-gray-500">
            {{
              'AUTH.FORGOT_PASSWORD.SUCCESS_DESCRIPTION'
                | translate: { username: submittedUsername }
            }}
          </p>
          <p-button
            styleClass="w-[160px] h-[50px] !text-white rounded border-none auth-button"
            [routerLink]="['/auth/login']"
          >
            {{ 'SHARED.COMMON.BUTTONS.BACK_TO_LOGIN' | translate }}
          </p-button>
        </div>
      }
    </div>
  </div>
  @if (!submitted) {
    <a
      class="!text-white underline cursor-pointer self-center"
      [routerLink]="['/auth/login']"
      >{{ 'AUTH.LOGIN.BUTTON' | translate }}</a
    >
  }
  <a class="!text-white self-center">
    {{ 'AUTH.LOGIN.COPYRIGHT' | translate: { year: currentYear } }}
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/forgot-password/forgot-password.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n.auth-button {\n  background-color: var(--color-primary-color) !important;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/components/forgot-password/forgot-password.component.ts", lineNumber: 35 });
})();

// src/app/features/auth/components/login/login.component.ts
var _c05 = () => ["/auth/forgot-password"];
var _c13 = (a0) => ({ year: a0 });
var _forTrack0 = ($index, $item) => $item.value;
function LoginComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "AUTH.LOGIN.AUTHENTICATING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r0.loading)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "AUTH.LOGIN.LOGGING_IN"), " ");
  }
}
function LoginComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p-message", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "AUTH.LOGIN.TOKEN_ERROR"));
  }
}
function LoginComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 21);
    \u0275\u0275listener("onChange", function LoginComponent_Conditional_6_Conditional_3_Template_p_select_onChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "AUTH.LOGIN.API_URL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.apiOptions);
  }
}
function LoginComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, LoginComponent_Conditional_6_Conditional_0_Template, 4, 3, "div", 10);
    \u0275\u0275elementStart(1, "form", 11);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275conditionalCreate(3, LoginComponent_Conditional_6_Conditional_3_Template, 5, 4, "p-floatlabel");
    \u0275\u0275elementStart(4, "p-floatlabel");
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275elementStart(6, "label", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-floatlabel");
    \u0275\u0275element(10, "p-password", 15);
    \u0275\u0275elementStart(11, "label", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 17)(15, "p-button", 18);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.tokenLoginError() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.environment.showApiDropdown ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("autocomplete", "username");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 12, "AUTH.LOGIN.USERNAME"), "*");
    \u0275\u0275advance(3);
    \u0275\u0275property("feedback", false)("toggleMask", true)("autocomplete", "current-password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 14, "AUTH.LOGIN.PASSWORD"), "*");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.loginForm.invalid)("loading", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, "AUTH.LOGIN.BUTTON"), " ");
  }
}
function LoginComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function LoginComponent_For_9_Template_button_click_0_listener() {
      const lang_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLanguageChange(lang_r5.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, LoginComponent_For_9_Conditional_2_Template, 2, 0, "span", 23);
  }
  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    const \u0275$index_66_r6 = ctx.$index;
    const \u0275$count_66_r7 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-gray-800", ctx_r0.selectedLanguage() === lang_r5.value)("font-semibold", ctx_r0.selectedLanguage() === lang_r5.value)("text-gray-400", ctx_r0.selectedLanguage() !== lang_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r5.value.toUpperCase(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_66_r6 === \u0275$count_66_r7 - 1) ? 2 : -1);
  }
}
var LoginComponent = class _LoginComponent {
  document = inject(DOCUMENT);
  apiUrlService = inject(ApiUrlService);
  authService = inject(AuthService2);
  authTokenManagerService = inject(AuthTokenManagerService);
  authDataService = inject(AuthDataService);
  themeDataService = inject(ThemeDataService);
  clientDataService = inject(ClientDataService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(NonNullableFormBuilder);
  userSessionService = inject(UserSessionService);
  userSessionNavigationService = inject(UserSessionNavigationService);
  destroyRef = inject(DestroyRef);
  translateService = inject(TranslateService);
  languageService = inject(LanguageService);
  environment = environment;
  apiOptions = environment.apiUrls.map((url) => ({
    label: url,
    value: url
  }));
  languages = [
    { label: "English", value: "en" },
    { label: "Fran\xE7ais", value: "fr" },
    { label: "Espa\xF1ol", value: "es" },
    { label: "Portugu\xEAs", value: "pt" },
    { label: "Nederlands", value: "nl" },
    { label: "Deutsch", value: "de" },
    { label: "Italiano", value: "it" }
  ];
  selectedLanguage = this.languageService.currentLanguage;
  domainTheme = toSignal(this.themeDataService.domainTheme$, {
    initialValue: null
  });
  loginForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required),
    apiUrl: this.fb.control("", Validators.required)
  });
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  loading = false;
  isTokenLogin = signal(false, ...ngDevMode ? [{ debugName: "isTokenLogin" }] : (
    /* istanbul ignore next */
    []
  ));
  tokenLoginError = signal(false, ...ngDevMode ? [{ debugName: "tokenLoginError" }] : (
    /* istanbul ignore next */
    []
  ));
  loginTitle = computed(() => {
    this.languageService.currentLanguage();
    const owner = this.domainTheme()?.domain?.owner;
    const ownerName = owner?.id === DEFAULT_SYSTEM_ID ? null : owner?.name;
    return isDefined(ownerName) ? this.translateService.instant("AUTH.LOGIN.TITLE_WITH_OWNER", {
      ownerName
    }) : this.translateService.instant("AUTH.LOGIN.TITLE");
  }, ...ngDevMode ? [{ debugName: "loginTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.clearAllSessionData();
    this.initializeApiUrl();
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      if (isDefined(params["token"])) {
        this.isTokenLogin.set(true);
        this.tokenLoginError.set(false);
        this.handleTokenLogin(params["token"]);
      } else if (!this.tokenLoginError()) {
        this.resetToNormalLogin();
      }
    });
  }
  clearAllSessionData() {
    this.authDataService.clearAllUserData();
    this.userSessionService.clearAllSessions();
    this.authTokenManagerService.clearTokens();
    this.themeDataService.clearTheme();
    this.clientDataService.reset();
  }
  resetToNormalLogin() {
    this.isTokenLogin.set(false);
    this.loading = false;
  }
  handleTokenLogin(token) {
    this.loading = true;
    this.authService.loginWithToken(token).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (result) => {
        void (async () => {
          try {
            this.authTokenManagerService.storeTokens(result);
            this.userSessionService.setUserSessions(result.users);
            if (result.users.length > 1) {
              await this.router.navigate(["/auth", "context-selection"], {
                queryParams: { resetPassword: "true" }
              });
            } else if (result.users.length === 1) {
              this.userSessionService.setCurrentUserSession(result.users[0].id);
              await this.router.navigate(["/auth", "reset-password-welcome"]);
            }
          } catch {
            this.clearAllSessionData();
            this.loading = false;
            this.isTokenLogin.set(false);
            this.tokenLoginError.set(true);
            void this.router.navigate(["/auth/login"], {
              replaceUrl: true
            });
          } finally {
            this.loading = false;
          }
        })();
      },
      error: () => {
        this.loading = false;
        this.isTokenLogin.set(false);
        this.tokenLoginError.set(true);
        void this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {},
          replaceUrl: true
        });
      }
    });
  }
  initializeApiUrl() {
    if (!environment.showApiDropdown) {
      const firstApiUrl = environment.apiUrls[0];
      if (firstApiUrl) {
        this.apiUrlService.setApiUrl(firstApiUrl);
        this.loginForm.controls.apiUrl.setValue(firstApiUrl);
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
      this.clearAllSessionData();
      this.loading = true;
      const { username, password } = this.loginForm.getRawValue();
      this.authService.login(username, password).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (result) => {
          void (async () => {
            try {
              this.authTokenManagerService.storeTokens(result);
              this.userSessionService.setUserSessions(result.users);
              const returnUrl = this.route.snapshot.queryParams["returnUrl"] ?? null;
              await this.userSessionNavigationService.navigateBasedOnSessions(result.users, returnUrl);
              this.loading = false;
            } catch {
              this.clearAllSessionData();
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
  onLanguageChange(lang) {
    this.languageService.onManualLanguageChange(lang);
  }
  onApiUrlChange(event) {
    this.apiUrlService.setApiUrl(event.value);
    this.refetchDomainTheme();
  }
  refetchDomainTheme() {
    const hostname = this.document.location.hostname;
    this.themeDataService.getDomainTheme(hostname).pipe(take(1)).subscribe({
      next: (theme) => this.themeDataService.setTheme(theme),
      error: (err) => console.error("Failed to load domain theme:", err)
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 16, vars: 13, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none"], [1, "flex", "flex-col"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", "flex", "flex-col", "items-center", "gap-6"], [1, "flex", "justify-center", "items-center", "gap-1", "text-sm", "mt-2"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], [1, "text-center", "text-gray-600"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none auth-button", 3, "loading", "disabled"], [1, "mx-12", "mt-6"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], ["formControlName", "password", 1, "w-full", 3, "feedback", "toggleMask", "autocomplete"], ["for", "password"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none auth-button", "type", "submit", 3, "disabled", "loading"], ["severity", "error"], ["for", "apiUrl"], ["id", "apiUrl", "formControlName", "apiUrl", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "onChange", "options"], ["type", "button", 1, "px-1", "py-0.5", "rounded", "transition-colors", "cursor-pointer", "border-none", "bg-transparent", 3, "click"], [1, "text-gray-300", "select-none"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, LoginComponent_Conditional_5_Template, 7, 8, "div", 4)(6, LoginComponent_Conditional_6_Template, 18, 18);
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, LoginComponent_For_9_Template, 3, 8, null, null, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 7);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.loginTitle(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isTokenLogin() ? 5 : 6);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.languages);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c05));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "AUTH.LOGIN.FORGOT_PASSWORD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 7, "AUTH.LOGIN.COPYRIGHT", \u0275\u0275pureFunction1(11, _c13, ctx.currentYear)), " ");
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
    Select,
    MessageModule,
    Message,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n[_nghost-%COMP%]     .p-password-toggle-mask-icon {\n  color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n[_nghost-%COMP%]     p-password .p-password, \n[_nghost-%COMP%]     p-password input {\n  width: 100%;\n}\n[_nghost-%COMP%]     p-password input, \n[_nghost-%COMP%]     p-password textarea, \n[_nghost-%COMP%]     p-password p-select, \n[_nghost-%COMP%]     p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n.auth-button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-color) !important;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
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
      SelectModule,
      MessageModule,
      TranslatePipe
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none">
    <div class="flex flex-col">
      <h2
        class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
      >
        {{ loginTitle() }}
      </h2>

      @if (isTokenLogin()) {
        <!-- Token Login Mode -->
        <div class="mx-12 mt-10 flex flex-col items-center gap-6">
          <p class="text-center text-gray-600">
            {{ 'AUTH.LOGIN.AUTHENTICATING' | translate }}
          </p>
          <p-button
            styleClass="w-[120px] h-[50px] !text-white rounded border-none auth-button"
            [loading]="loading"
            [disabled]="true"
          >
            {{ 'AUTH.LOGIN.LOGGING_IN' | translate }}
          </p-button>
        </div>
      } @else {
        <!-- Normal Login Form -->
        @if (tokenLoginError()) {
          <div class="mx-12 mt-6">
            <p-message severity="error">
              {{ 'AUTH.LOGIN.TOKEN_ERROR' | translate }}</p-message
            >
          </div>
        }

        <form
          [formGroup]="loginForm"
          class="mx-12 mt-10"
          (ngSubmit)="onSubmit()"
        >
          <div class="grid gap-6">
            @if (environment.showApiDropdown) {
              <p-floatlabel>
                <label for="apiUrl">{{
                  'AUTH.LOGIN.API_URL' | translate
                }}</label>
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
              <label for="username"
                >{{ 'AUTH.LOGIN.USERNAME' | translate }}*</label
              >
            </p-floatlabel>

            <p-floatlabel>
              <p-password
                formControlName="password"
                [feedback]="false"
                [toggleMask]="true"
                [autocomplete]="'current-password'"
                class="w-full"
              />
              <label for="password"
                >{{ 'AUTH.LOGIN.PASSWORD' | translate }}*</label
              >
            </p-floatlabel>
          </div>

          <div class="flex justify-center items-center my-6">
            <p-button
              styleClass="w-[120px] h-[50px] !text-white rounded border-none auth-button"
              type="submit"
              [disabled]="loginForm.invalid"
              [loading]="loading"
            >
              {{ 'AUTH.LOGIN.BUTTON' | translate }}
            </p-button>
          </div>
        </form>
      }

      <div class="flex justify-center items-center gap-1 text-sm mt-2">
        @for (lang of languages; track lang.value) {
          <button
            type="button"
            class="px-1 py-0.5 rounded transition-colors cursor-pointer border-none bg-transparent"
            [class.text-gray-800]="selectedLanguage() === lang.value"
            [class.font-semibold]="selectedLanguage() === lang.value"
            [class.text-gray-400]="selectedLanguage() !== lang.value"
            (click)="onLanguageChange(lang.value)"
          >
            {{ lang.value.toUpperCase() }}
          </button>
          @if (!$last) {
            <span class="text-gray-300 select-none">\xB7</span>
          }
        }
      </div>
    </div>
  </div>
  <a
    class="!text-white pt-4 underline cursor-pointer self-center"
    [routerLink]="['/auth/forgot-password']"
    >{{ 'AUTH.LOGIN.FORGOT_PASSWORD' | translate }}</a
  >
  <a class="!text-white self-center">
    {{ 'AUTH.LOGIN.COPYRIGHT' | translate: { year: currentYear } }}
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/login/login.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n:host ::ng-deep .p-password-toggle-mask-icon {\n  color: var(--color-primary-color);\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n:host ::ng-deep p-password .p-password,\n:host ::ng-deep p-password input {\n  width: 100%;\n}\n:host ::ng-deep p-password input,\n:host ::ng-deep p-password textarea,\n:host ::ng-deep p-password p-select,\n:host ::ng-deep p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n.auth-button {\n  background-color: var(--color-primary-color) !important;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/components/login/login.component.ts", lineNumber: 56 });
})();

// src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.ts
var _c06 = () => ["/auth/login"];
var _c14 = (a0) => ({ year: a0 });
var ResetPasswordWelcomeComponent = class _ResetPasswordWelcomeComponent {
  http = inject(HttpClient);
  authDataService = inject(AuthDataService);
  accountsService = inject(AccountsService);
  userSessionService = inject(UserSessionService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  translate = inject(TranslateService);
  formFields = [];
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
    /* istanbul ignore next */
    []
  ));
  timezones = [];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  actions = [];
  ngOnInit() {
    this.initializeActions();
    this.initializeFormFields();
    this.loadTimezones();
  }
  initializeActions() {
    this.actions = [
      {
        label: this.translate.instant("SHARED.COMMON.BUTTONS.CANCEL"),
        visible: false
      },
      {
        label: this.translate.instant("SHARED.COMMON.BUTTONS.UPDATE"),
        action: (formData) => {
          this.onSubmit(formData);
        },
        severity: "primary",
        disabled: (form) => isNullOrUndefined(form) || form.pristine,
        styleClass: "w-[120px] h-[50px] !text-white rounded border-none"
      }
    ];
  }
  initializeFormFields() {
    const profile = this.userSessionService.currentUserSession();
    this.formFields = [
      createTextField("name", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.NAME"), profile?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.NAME")
            })
          }
        ]
      }),
      createTextField("emailAddress", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.EMAIL"), profile?.["emailAddress"], {
        name: "email",
        validations: [
          {
            name: "email",
            validator: Validators.email,
            message: this.translate.instant("SHARED.COMMON.VALIDATION.INVALID_EMAIL")
          }
        ]
      }),
      createTextField("mobile", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.MOBILE"), profile?.["mobile"]?.trim(), {
        name: "mobile",
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern("^[0-9]*$"),
            message: this.translate.instant("AUTH.RESET_PASSWORD.VALIDATION.MOBILE_PATTERN")
          }
        ]
      }),
      createDropdownField(
        "timeZoneId",
        this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.TIMEZONE"),
        this.timezones,
        // Will be empty initially, updated after timezones load
        profile?.timeZoneId,
        {
          layout: "horizontal",
          labelWidth: "1/3",
          placeholder: this.translate.instant("SHARED.COMMON.SELECTION.TITLE", {
            type: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.TIMEZONE")
          }),
          name: "timeZone",
          props: {
            appendTo: "body"
          }
        }
      ),
      createPasswordField("password", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.PASSWORD"), {
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.PASSWORD")
            })
          }
        ]
      })
    ];
  }
  updateFormFields() {
    const profile = this.authDataService.getUserProfile();
    this.formFields = [
      createTextField("name", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.NAME"), profile?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.NAME")
            })
          }
        ]
      }),
      createTextField("emailAddress", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.EMAIL"), profile?.["emailAddress"], {
        name: "email",
        validations: [
          {
            name: "email",
            validator: Validators.email,
            message: this.translate.instant("SHARED.COMMON.VALIDATION.INVALID_EMAIL")
          }
        ]
      }),
      createTextField("mobile", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.MOBILE"), profile?.["mobile"]?.trim(), {
        name: "mobile",
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern("^[0-9]*$"),
            message: this.translate.instant("AUTH.RESET_PASSWORD.VALIDATION.MOBILE_PATTERN")
          }
        ]
      }),
      createDropdownField("timeZoneId", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.TIMEZONE"), this.timezones, profile?.timeZoneId, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.TIMEZONE_PLACEHOLDER"),
        name: "timeZone",
        props: {
          appendTo: "body"
        }
      }),
      createPasswordField("password", this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.PASSWORD"), {
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: this.translate.instant("SHARED.COMMON.FORMS.SHARED.REQUIRED", {
              field: this.translate.instant("AUTH.RESET_PASSWORD.FIELDS.PASSWORD")
            })
          }
        ]
      })
    ];
  }
  loadTimezones() {
    this.http.get("/assets/docs/timezones.json").subscribe((data) => {
      this.timezones = data.map((tz) => ({ label: tz.id, value: tz.id })).sort((a, b) => a.label.localeCompare(b.label));
      this.updateFormFields();
      this.cdr.detectChanges();
    });
  }
  getDirtyValues(group) {
    return Object.fromEntries(Object.entries(group.controls).filter(([_, control]) => control.dirty).map(([key, control]) => [key, control.value]));
  }
  onSubmit(formGroup) {
    const profile = this.userSessionService.currentUserSession();
    if (isNullOrUndefined(profile))
      return;
    this.isSubmitting.set(true);
    const dirtyValues = this.getDirtyValues(formGroup);
    if (Object.keys(dirtyValues).length > 0) {
      this.accountsService.updateUser(profile.id, dirtyValues).subscribe({
        next: (result) => {
          void this.authDataService.setUserProfile(result);
        },
        complete: () => {
          this.isSubmitting.set(false);
          this.cdr.detectChanges();
          void this.router.navigate(["/position"]);
        }
      });
    } else {
      this.isSubmitting.set(false);
    }
  }
  static \u0275fac = function ResetPasswordWelcomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordWelcomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordWelcomeComponent, selectors: [["app-reset-password-welcome"]], decls: 17, vars: 19, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px]", "mb-4"], [1, "p-2", "flex", "flex-col"], [1, "text-2xl", "font-semibold", "m-0", "pb-1"], [1, "py-2", "muted"], [3, "fields", "actions"], [1, "!text-white", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"]], template: function ResetPasswordWelcomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "hr");
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "app-dynamic-form", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 7);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "AUTH.RESET_PASSWORD.TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "AUTH.RESET_PASSWORD.DESCRIPTION"));
      \u0275\u0275advance(2);
      \u0275\u0275property("fields", ctx.formFields)("actions", ctx.actions);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c06));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "AUTH.LOGIN.BUTTON"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 13, "AUTH.LOGIN.COPYRIGHT", \u0275\u0275pureFunction1(17, _c14, ctx.currentYear)), " ");
    }
  }, dependencies: [DynamicFormComponent, ButtonModule, RouterModule, RouterLink, TranslatePipe], styles: ["\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n[_nghost-%COMP%]     .p-password-toggle-mask-icon {\n  color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n[_nghost-%COMP%]     p-password .p-password, \n[_nghost-%COMP%]     p-password input {\n  width: 100%;\n}\n[_nghost-%COMP%]     p-password input, \n[_nghost-%COMP%]     p-password textarea, \n[_nghost-%COMP%]     p-password p-select, \n[_nghost-%COMP%]     p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=reset-password-welcome.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordWelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password-welcome", imports: [DynamicFormComponent, ButtonModule, RouterModule, TranslatePipe], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px] mb-4">
    <div class="p-2 flex flex-col">
      <span class="text-2xl font-semibold m-0 pb-1">{{
        'AUTH.RESET_PASSWORD.TITLE' | translate
      }}</span>

      <hr />
      <span class="py-2 muted">{{
        'AUTH.RESET_PASSWORD.DESCRIPTION' | translate
      }}</span>
    </div>

    <app-dynamic-form [fields]="formFields" [actions]="actions">
    </app-dynamic-form>
  </div>

  <a
    class="!text-white underline cursor-pointer self-center"
    [routerLink]="['/auth/login']"
    >{{ 'AUTH.LOGIN.BUTTON' | translate }}</a
  >
  <a class="!text-white self-center">
    {{ 'AUTH.LOGIN.COPYRIGHT' | translate: { year: currentYear } }}
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.scss */\n.wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: var(--color-primary-color) !important;\n}\n:host ::ng-deep .p-password-toggle-mask-icon {\n  color: var(--color-primary-color);\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: var(--color-primary-color);\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n:host ::ng-deep p-password .p-password,\n:host ::ng-deep p-password input {\n  width: 100%;\n}\n:host ::ng-deep p-password input,\n:host ::ng-deep p-password textarea,\n:host ::ng-deep p-password p-select,\n:host ::ng-deep p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    margin-bottom: 0px;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: auto;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=reset-password-welcome.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordWelcomeComponent, { className: "ResetPasswordWelcomeComponent", filePath: "src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.ts", lineNumber: 34 });
})();

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      { path: "login", component: LoginComponent },
      {
        path: "context-selection",
        component: ContextSelectionWizardComponent,
        resolve: {
          userProfile: userProfileResolver
        }
      },
      { path: "forgot-password", component: ForgotPasswordComponent },
      {
        path: "reset-password-welcome",
        component: ResetPasswordWelcomeComponent,
        resolve: {
          userProfile: userProfileResolver
        }
      },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-SYUHCYSU.js.map
