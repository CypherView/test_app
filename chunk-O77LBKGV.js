import {
  WizardComponent
} from "./chunk-NDSQJJRI.js";
import {
  ClientSelectionFormComponent,
  ClientSelectorComponent,
  RecentClientsService,
  userProfileResolver
} from "./chunk-XMVJLGFA.js";
import {
  ThemeComponent
} from "./chunk-U4KVSIUF.js";
import "./chunk-OKZD7IEG.js";
import {
  ToastService
} from "./chunk-LN4L6VZC.js";
import "./chunk-MZGGMYX2.js";
import {
  ApiSchemaService,
  DynamicFormComponent,
  Password,
  PasswordModule
} from "./chunk-JHNPE5AD.js";
import "./chunk-BUQLELQY.js";
import {
  UtilityService
} from "./chunk-IDQPRALM.js";
import {
  Message,
  MessageModule
} from "./chunk-T5WYQJMH.js";
import "./chunk-W5XLQNKH.js";
import "./chunk-B2VOHKSQ.js";
import "./chunk-RAMUTPV2.js";
import "./chunk-3ELTUYPI.js";
import "./chunk-IM6TEFQQ.js";
import "./chunk-PAFIW2EK.js";
import {
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
  Validators,
  ɵNgNoValidate
} from "./chunk-4CAIP3KE.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  MessageService,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-YL4UBWIM.js";
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
  toObservable
} from "./chunk-UNWLID6Q.js";
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
  tap,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
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
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import "./chunk-7WUTQBRG.js";

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
var _c0 = ["canvas"];
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
    if (this.router.url === "/auth" || this.router.url === "/auth/") {
      const urlTree = this.router.parseUrl(this.router.url);
      const queryParams = urlTree.queryParams;
      this.router.navigate(["/auth/login"], { queryParams }).catch(() => {
      });
    }
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isRouteActive.set(this.router.url !== "/auth");
    });
  }
  static \u0275fac = function ContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContainerComponent, selectors: [["app-container"]], decls: 5, vars: 0, consts: [[1, "wrapper", "bg-cover", "bg-center", "h-screen"], [1, "flex", "flex-col", "items-center", "h-auto", "sm:h-full"], ["src", "assets/images/logo.svg", "alt", "Cypherview logo", 1, "logo-filter", "w-1/3", "my-16", "max-w-[1050px]", "hidden", "sm:block"]], template: function ContainerComponent_Template(rf, ctx) {
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
    args: [{ selector: "app-container", imports: [RouterModule, ButtonModule, NetworkAnimationComponent], template: '<div class="wrapper bg-cover bg-center h-screen">\n  <app-network-animation></app-network-animation>\n  <div class="flex flex-col items-center h-auto sm:h-full">\n    <img\n      class="logo-filter w-1/3 my-16 max-w-[1050px] hidden sm:block"\n      src="assets/images/logo.svg"\n      alt="Cypherview logo"\n    />\n    <router-outlet></router-outlet>\n  </div>\n</div>\n', styles: ["/* src/app/features/auth/components/container/container.component.scss */\n.wrapper {\n  position: relative;\n  background: var(--color-background-dark, #000b1e);\n  overflow: hidden;\n  width: 100%;\n}\n.wrapper app-network-animation {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n.wrapper .flex {\n  position: relative;\n  z-index: 1;\n}\n.wrapper .logo-filter {\n  filter: brightness(0) invert(1);\n  transition: filter 0.2s ease;\n}\n/*# sourceMappingURL=container.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContainerComponent, { className: "ContainerComponent", filePath: "src/app/features/auth/components/container/container.component.ts", lineNumber: 13 });
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
function ContextSelectionWizardComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275element(2, "p-progressSpinner", 10);
    \u0275\u0275elementStart(3, "p", 11);
    \u0275\u0275text(4, "Preparing your account...");
    \u0275\u0275elementEnd()()();
  }
}
function ContextSelectionWizardComponent_ng_template_4_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, " Loading theme preview... ");
    \u0275\u0275elementEnd();
  }
}
function ContextSelectionWizardComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, ContextSelectionWizardComponent_ng_template_4_Conditional_1_Conditional_2_Template, 2, 0, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-client-selector", 14);
    \u0275\u0275listener("accountSelected", function ContextSelectionWizardComponent_ng_template_4_Conditional_1_Template_app_client_selector_accountSelected_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAccountSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loadingPreviewTheme() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("clientAccounts", ctx_r2.accounts)("maxHeightClass", "max-h-[18rem]");
  }
}
function ContextSelectionWizardComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContextSelectionWizardComponent_ng_template_4_Conditional_0_Template, 5, 0, "div", 7)(1, ContextSelectionWizardComponent_ng_template_4_Conditional_1_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.isAutoSelectingAccount() ? 0 : 1);
  }
}
function ContextSelectionWizardComponent_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "p-progressSpinner", 16);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !ctx_r2.permissionsChecked() ? "Checking permissions..." : "Preparing your experience...", " ");
  }
}
function ContextSelectionWizardComponent_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, " No Permission to View Clients ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5, " Your account does not have permission to list clients. Please contact your administrator for access. ");
    \u0275\u0275elementEnd()();
  }
}
function ContextSelectionWizardComponent_ng_template_6_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, " Loading clients... ");
    \u0275\u0275elementEnd();
  }
}
function ContextSelectionWizardComponent_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, ContextSelectionWizardComponent_ng_template_6_Conditional_3_Conditional_1_Template, 2, 0, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-client-selection-form", 21);
    \u0275\u0275listener("clientSelected", function ContextSelectionWizardComponent_ng_template_6_Conditional_3_Template_app_client_selection_form_clientSelected_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClientSelected($event));
    })("searchQuery", function ContextSelectionWizardComponent_ng_template_6_Conditional_3_Template_app_client_selection_form_searchQuery_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClientSearch($event));
    })("lazyLoad", function ContextSelectionWizardComponent_ng_template_6_Conditional_3_Template_app_client_selection_form_lazyLoad_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLazyLoadClients($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loadingClients() && ctx_r2.availableClients().length === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("clients", ctx_r2.availableClients())("loading", ctx_r2.loadingClients())("useServerSearch", ctx_r2.useServerSearch())("totalRecords", ctx_r2.totalClientCount())("enablePagination", ctx_r2.useServerSearch())("enableLazyLoad", ctx_r2.useServerSearch())("recentClients", ctx_r2.recentClients());
  }
}
function ContextSelectionWizardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ContextSelectionWizardComponent_ng_template_6_Conditional_1_Template, 4, 1, "div", 15)(2, ContextSelectionWizardComponent_ng_template_6_Conditional_2_Template, 6, 0, "div", 15)(3, ContextSelectionWizardComponent_ng_template_6_Conditional_3_Template, 3, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.permissionsChecked() || ctx_r2.isLoading() ? 1 : !ctx_r2.canListClients() ? 2 : 3);
  }
}
var ROUTES = {
  LOGIN: ["/auth", "login"],
  POSITION: ["/position"],
  RESET_PASSWORD_WELCOME: ["/auth", "reset-password-welcome"]
};
var STEPS = {
  SELECT_ACCOUNT: "Select Account",
  SELECT_CLIENT: "Select Client"
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
  accounts = this.userSessionService.userSessions();
  selectedAccount = signal(null, ...ngDevMode ? [{ debugName: "selectedAccount" }] : []);
  availableClients = signal([], ...ngDevMode ? [{ debugName: "availableClients" }] : []);
  totalClientCount = signal(0, ...ngDevMode ? [{ debugName: "totalClientCount" }] : []);
  loadingClients = signal(false, ...ngDevMode ? [{ debugName: "loadingClients" }] : []);
  loadingPreviewTheme = signal(false, ...ngDevMode ? [{ debugName: "loadingPreviewTheme" }] : []);
  isAutoSelectingAccount = signal(false, ...ngDevMode ? [{ debugName: "isAutoSelectingAccount" }] : []);
  isPasswordResetMode = false;
  returnUrl = null;
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  paginationOffset = signal(0, ...ngDevMode ? [{ debugName: "paginationOffset" }] : []);
  pageSize = DEFAULT_PAGE_SIZE;
  cachedEmptyClients = [];
  unfilteredTotalCount = signal(0, ...ngDevMode ? [{ debugName: "unfilteredTotalCount" }] : []);
  // Determine if we should use server-side search based on unfiltered total count
  useServerSearch = computed(() => this.unfilteredTotalCount() >= DEFAULT_PAGE_SIZE, ...ngDevMode ? [{ debugName: "useServerSearch" }] : []);
  // Check if user has permission to list clients
  canListClients = computed(() => {
    return this.authDataService.hasPermission("client:list-clients") || this.authDataService.hasPermission("clients:list");
  }, ...ngDevMode ? [{ debugName: "canListClients" }] : []);
  // Track if permissions have been checked (prevents flicker during async load)
  permissionsChecked = computed(() => {
    return this.authDataService.getUserProfile() !== null;
  }, ...ngDevMode ? [{ debugName: "permissionsChecked" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  // Overall loading state - combines submission and theme preview loading
  isLoading = computed(() => this.isSubmitting() || this.loadingPreviewTheme(), ...ngDevMode ? [{ debugName: "isLoading" }] : []);
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
        header: STEPS.SELECT_ACCOUNT,
        content: this.accountSelectionStep,
        complete: false,
        disableNext: true
      });
    }
    steps.push({
      value: nextValue,
      header: STEPS.SELECT_CLIENT,
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
        summary: "Error",
        detail: "Failed to select account. Please try again."
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
          summary: "Error",
          detail: "Failed to select client."
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
            summary: "Notice",
            detail: "Proceeding with your default client."
          });
          this.finalizeClientSelection(client);
        },
        error: (error) => {
          console.error("Failed to load default client:", error);
          this.isSubmitting.set(false);
          this.uiMessageService.add({
            severity: "error",
            summary: "Error",
            detail: "Unable to proceed. Please contact support."
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
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(WizardComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.accountSelectionStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clientSelectionStep = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wizard = _t.first);
    }
  }, decls: 12, vars: 7, consts: [["accountSelectionStep", ""], ["clientSelectionStep", ""], [1, "panel", "login-box", "flex", "flex-col", "w-full", "mx-auto", "pb-8"], [1, "bg-[var(--main-background-color)]", "p-6", "rounded-border", "shadow-card", "justify-start", "rounded-none"], ["header", "Context Selection", 3, "onCancel", "visibleChange", "visible", "steps", "useWizardButtonsOnly", "showFooterButtons", "loading", "contentOnly"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center", 3, "click"], [1, "!text-white", "self-center"], [1, "flex", "flex-col", "items-center", "w-full"], [1, "w-full"], [1, "flex", "flex-col", "items-center", "gap-3", "mt-6"], ["styleClass", "w-10 h-10 text-primary-500"], [1, "text-sm", "text-gray-500"], [1, "text-center", "mb-8"], [1, "text-sm", "text-gray-400", "text-center", "mt-2"], [3, "accountSelected", "clientAccounts", "maxHeightClass"], [1, "text-center", "p-8"], ["styleClass", "w-10 h-10"], [1, "text-sm", "text-gray-400", "mt-4"], [1, "pi", "pi-lock", "text-4xl", "text-gray-400", "mb-4"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-sm", "text-gray-500", "mb-4"], [3, "clientSelected", "searchQuery", "lazyLoad", "clients", "loading", "useServerSearch", "totalRecords", "enablePagination", "enableLazyLoad", "recentClients"]], template: function ContextSelectionWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "app-theme")(3, "app-wizard", 4);
      \u0275\u0275listener("onCancel", function ContextSelectionWizardComponent_Template_app_wizard_onCancel_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      })("visibleChange", function ContextSelectionWizardComponent_Template_app_wizard_visibleChange_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ContextSelectionWizardComponent_ng_template_4_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, ContextSelectionWizardComponent_ng_template_6_Template, 4, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275listener("click", function ContextSelectionWizardComponent_Template_a_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onWizardCancel());
      });
      \u0275\u0275text(9, "Back to Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("visible", true)("steps", ctx.steps)("useWizardButtonsOnly", true)("showFooterButtons", false)("loading", ctx.isLoading())("contentOnly", true);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" Copyright ", ctx.currentYear, ". All rights reserved. ");
    }
  }, dependencies: [
    WizardComponent,
    ButtonModule,
    ClientSelectorComponent,
    ClientSelectionFormComponent,
    ThemeComponent,
    ProgressSpinnerModule,
    ProgressSpinner
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n@media (min-width: 640px) {\n  [_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  [_nghost-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: 100%;\n    padding: 0px;\n    max-width: 800px;\n  }\n}\n/*# sourceMappingURL=context-selection-wizard.component.css.map */"] });
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
      ProgressSpinnerModule
    ], template: `<div class="panel login-box flex flex-col w-full mx-auto pb-8">
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
        header="Context Selection"
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
              <p class="text-sm text-gray-500">Preparing your account...</p>
            </div>
          </div>
        } @else {
          <div class="w-full">
            <div class="text-center mb-8">
              @if (loadingPreviewTheme()) {
                <p class="text-sm text-gray-400 text-center mt-2">
                  Loading theme preview...
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
                    ? 'Checking permissions...'
                    : 'Preparing your experience...'
                }}
              </p>
            </div>
          } @else if (!canListClients()) {
            <div class="text-center p-8">
              <i class="pi pi-lock text-4xl text-gray-400 mb-4"></i>
              <p class="text-lg font-semibold text-gray-700 mb-2">
                No Permission to View Clients
              </p>
              <p class="text-sm text-gray-500 mb-4">
                Your account does not have permission to list clients. Please
                contact your administrator for access.
              </p>
            </div>
          } @else {
            <div class="text-center mb-8">
              @if (loadingClients() && availableClients().length === 0) {
                <p class="text-sm text-gray-400 text-center mt-2">
                  Loading clients...
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
    >Back to Login</a
  >
  <a class="!text-white self-center">
    Copyright {{ currentYear }}. All rights reserved.
  </a>
</div>
`, styles: ["/* src/app/features/auth/components/context-selection-wizard/context-selection-wizard.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n@media (min-width: 640px) {\n  :host .panel {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  :host .login-box {\n    top: 0px;\n    height: 100%;\n    padding: 0px;\n    max-width: 800px;\n  }\n}\n/*# sourceMappingURL=context-selection-wizard.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContextSelectionWizardComponent, { className: "ContextSelectionWizardComponent", filePath: "src/app/features/auth/components/context-selection-wizard/context-selection-wizard.component.ts", lineNumber: 85 });
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
var _c04 = () => ["/auth/login"];
function ForgotPasswordComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "p-select", 13);
    \u0275\u0275listener("onChange", function ForgotPasswordComponent_Conditional_3_Conditional_6_Template_p_select_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 14);
    \u0275\u0275text(3, "API URL*");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
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
    \u0275\u0275text(10, "Email address*");
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
  authService = inject(AuthService);
  document = inject(DOCUMENT);
  fb = inject(NonNullableFormBuilder);
  location = inject(Location);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  toastService = inject(ToastService);
  apiSchemaService = inject(ApiSchemaService);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 8, vars: 3, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none", "mb-4"], [1, "flex", "flex-col"], [1, "!text-white", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "my-4", "text-[1rem]", "font-normal", "leading-[1.5]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", "type", "submit", 3, "disabled", "loading"], ["id", "resetUrl", "optionLabel", "label", "optionValue", "value", "formControlName", "apiUrl", 1, "w-full", 3, "onChange", "options"], ["for", "resetUrl"], [1, "mx-12", "mt-10", "mb-6", "text-center"], [1, "mb-6", "text-[1rem]", "font-normal", "leading-[1.5]", "!text-gray-500"], ["styleClass", "w-[160px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", 3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
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
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
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
                <p-select
                  id="resetUrl"
                  [options]="apiOptions"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full"
                  formControlName="apiUrl"
                  (onChange)="onApiUrlChange($event)"
                />
                <label for="resetUrl">API URL*</label>
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
              <label for="username">Email address*</label>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/components/forgot-password/forgot-password.component.ts", lineNumber: 33 });
})();

// src/app/features/auth/components/login/login.component.ts
var _c05 = () => ["/auth/forgot-password"];
function LoginComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 7);
    \u0275\u0275text(2, " Authenticating with your secure token... ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 8);
    \u0275\u0275text(4, " Logging in ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("loading", ctx_r0.loading)("disabled", true);
  }
}
function LoginComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p-message", 18);
    \u0275\u0275text(2, "Token authentication failed. Please login with your username and password.");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-floatlabel")(1, "label", 19);
    \u0275\u0275text(2, "API URL*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 20);
    \u0275\u0275listener("onChange", function LoginComponent_Conditional_6_Conditional_3_Template_p_select_onChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onApiUrlChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r0.apiOptions);
  }
}
function LoginComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, LoginComponent_Conditional_6_Conditional_0_Template, 3, 0, "div", 9);
    \u0275\u0275elementStart(1, "form", 10);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Conditional_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275conditionalCreate(3, LoginComponent_Conditional_6_Conditional_3_Template, 4, 1, "p-floatlabel");
    \u0275\u0275elementStart(4, "p-floatlabel");
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275elementStart(6, "label", 13);
    \u0275\u0275text(7, "Username*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-floatlabel");
    \u0275\u0275element(9, "p-password", 14);
    \u0275\u0275elementStart(10, "label", 15);
    \u0275\u0275text(11, "Password*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 16)(13, "p-button", 17);
    \u0275\u0275text(14, " Login ");
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
    \u0275\u0275advance(4);
    \u0275\u0275property("feedback", false)("toggleMask", true)("autocomplete", "current-password");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loginForm.invalid)("loading", ctx_r0.loading);
  }
}
var LoginComponent = class _LoginComponent {
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
  environment = environment;
  apiOptions = environment.apiUrls.map((url) => ({
    label: url,
    value: url
  }));
  loginForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required),
    apiUrl: this.fb.control("", Validators.required)
  });
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  loading = false;
  isTokenLogin = signal(false, ...ngDevMode ? [{ debugName: "isTokenLogin" }] : []);
  tokenLoginError = signal(false, ...ngDevMode ? [{ debugName: "tokenLoginError" }] : []);
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
  onApiUrlChange(event) {
    this.apiUrlService.setApiUrl(event.value);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 11, vars: 4, consts: [[1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto", "pb-8"], [1, "bg-white", "p-[15px_34px_35px]", "justify-start", "rounded-none"], [1, "flex", "flex-col"], [1, "mt-8", "text-[1.62rem]", "font-normal", "leading-[2.25]", "text-center", "!text-gray-500"], [1, "mx-12", "mt-10", "flex", "flex-col", "items-center", "gap-6"], [1, "!text-white", "pt-4", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"], [1, "text-center", "text-gray-600"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", 3, "loading", "disabled"], [1, "mx-12", "mt-6"], [1, "mx-12", "mt-10", 3, "ngSubmit", "formGroup"], [1, "grid", "gap-6"], ["id", "username", "pInputText", "", "formControlName", "username", 1, "w-full", 3, "autocomplete"], ["for", "username"], ["formControlName", "password", 1, "w-full", 3, "feedback", "toggleMask", "autocomplete"], ["for", "password"], [1, "flex", "justify-center", "items-center", "my-6"], ["styleClass", "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]", "type", "submit", 3, "disabled", "loading"], ["severity", "error"], ["for", "apiUrl"], ["id", "apiUrl", "formControlName", "apiUrl", "optionLabel", "label", "optionValue", "value", 1, "w-full", 3, "onChange", "options"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, " Welcome to Cypherview ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, LoginComponent_Conditional_5_Template, 5, 2, "div", 4)(6, LoginComponent_Conditional_6_Template, 15, 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8, "Forgotten Password?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isTokenLogin() ? 5 : 6);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c05));
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
    Select,
    MessageModule,
    Message
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n[_nghost-%COMP%]     .p-password-toggle-mask-icon {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n[_nghost-%COMP%]     p-password .p-password, \n[_nghost-%COMP%]     p-password input {\n  width: 100%;\n}\n[_nghost-%COMP%]     p-password input, \n[_nghost-%COMP%]     p-password textarea, \n[_nghost-%COMP%]     p-password p-select, \n[_nghost-%COMP%]     p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
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
      MessageModule
    ], template: `<div
  class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto pb-8"
>
  <div class="bg-white p-[15px_34px_35px] justify-start rounded-none">
    <div class="flex flex-col">
      <h2
        class="mt-8 text-[1.62rem] font-normal leading-[2.25] text-center !text-gray-500"
      >
        Welcome to Cypherview
      </h2>

      @if (isTokenLogin()) {
        <!-- Token Login Mode -->
        <div class="mx-12 mt-10 flex flex-col items-center gap-6">
          <p class="text-center text-gray-600">
            Authenticating with your secure token...
          </p>
          <p-button
            styleClass="w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
            [loading]="loading"
            [disabled]="true"
          >
            Logging in
          </p-button>
        </div>
      } @else {
        <!-- Normal Login Form -->
        @if (tokenLoginError()) {
          <div class="mx-12 mt-6">
            <p-message severity="error"
              >Token authentication failed. Please login with your username and
              password.</p-message
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
      }
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
`, styles: ["/* src/app/features/auth/components/login/login.component.scss */\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n:host ::ng-deep .p-password-toggle-mask-icon {\n  color: #378bc0;\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n:host ::ng-deep p-password .p-password,\n:host ::ng-deep p-password input {\n  width: 100%;\n}\n:host ::ng-deep p-password input,\n:host ::ng-deep p-password textarea,\n:host ::ng-deep p-password p-select,\n:host ::ng-deep p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/components/login/login.component.ts", lineNumber: 43 });
})();

// src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.ts
var _c06 = () => ["/auth/login"];
var ResetPasswordWelcomeComponent = class _ResetPasswordWelcomeComponent {
  http = inject(HttpClient);
  authDataService = inject(AuthDataService);
  accountsService = inject(AccountsService);
  userSessionService = inject(UserSessionService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  formFields = [];
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  timezones = [];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  actions = [
    {
      label: "Cancel",
      visible: false
    },
    {
      label: "Update",
      action: (formData) => {
        this.onSubmit(formData);
      },
      severity: "primary",
      disabled: (form) => isNullOrUndefined(form) || form.pristine,
      styleClass: "w-[120px] h-[50px] !text-white rounded border-none !bg-[#378bc0]"
    }
  ];
  ngOnInit() {
    this.initializeFormFields();
    this.loadTimezones();
  }
  initializeFormFields() {
    const profile = this.userSessionService.currentUserSession();
    this.formFields = [
      createTextField("name", "Name", profile?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ]
      }),
      createTextField("emailAddress", "Email Address", profile?.["emailAddress"], {
        name: "email",
        validations: [
          {
            name: "email",
            validator: Validators.email,
            message: "Invalid email"
          }
        ]
      }),
      createTextField("mobile", "Mobile Number", profile?.["mobile"]?.trim(), {
        name: "mobile",
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern("^[0-9]*$"),
            message: "Mobile number must contain only numbers"
          }
        ]
      }),
      createDropdownField(
        "timeZoneId",
        "Time Zone",
        this.timezones,
        // Will be empty initially, updated after timezones load
        profile?.timeZoneId,
        {
          layout: "horizontal",
          labelWidth: "1/3",
          placeholder: "Select timezone",
          name: "timeZone",
          props: {
            appendTo: "body"
          }
        }
      ),
      createPasswordField("password", "New Password", {
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Password is required"
          }
        ]
      })
    ];
  }
  updateFormFields() {
    const profile = this.authDataService.getUserProfile();
    this.formFields = [
      createTextField("name", "Name", profile?.name, {
        name: "name",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Name is required"
          }
        ]
      }),
      createTextField("emailAddress", "Email Address", profile?.["emailAddress"], {
        name: "email",
        validations: [
          {
            name: "email",
            validator: Validators.email,
            message: "Invalid email"
          }
        ]
      }),
      createTextField("mobile", "Mobile Number", profile?.["mobile"]?.trim(), {
        name: "mobile",
        validations: [
          {
            name: "pattern",
            validator: Validators.pattern("^[0-9]*$"),
            message: "Mobile number must contain only numbers"
          }
        ]
      }),
      createDropdownField("timeZoneId", "Time Zone", this.timezones, profile?.timeZoneId, {
        layout: "horizontal",
        labelWidth: "1/3",
        placeholder: "Select timezone",
        name: "timeZone",
        props: {
          appendTo: "body"
        }
      }),
      createPasswordField("password", "New Password", {
        name: "password",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Password is required"
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordWelcomeComponent, selectors: [["app-reset-password-welcome"]], decls: 14, vars: 5, consts: [[1, "wrapper", "bg-cover", "bg-center", "h-screen"], [1, "panel", "login-box", "flex", "flex-col", "items-stretch", "w-full", "max-w-[800px]", "mx-auto"], [1, "bg-white", "p-[15px_34px]", "mb-4"], [1, "p-2", "flex", "flex-col"], [1, "text-2xl", "font-semibold", "m-0", "pb-1"], [1, "py-2", "muted"], [3, "fields", "actions"], [1, "!text-white", "underline", "cursor-pointer", "self-center", 3, "routerLink"], [1, "!text-white", "self-center"]], template: function ResetPasswordWelcomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Welcome");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "hr");
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "Please update your account details and enter a new password for your account.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "app-dynamic-form", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275text(11, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("fields", ctx.formFields)("actions", ctx.actions);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c06));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" Copyright ", ctx.currentYear, ". All rights reserved. ");
    }
  }, dependencies: [DynamicFormComponent, ButtonModule, RouterModule, RouterLink], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]     .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n[_nghost-%COMP%]     .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n[_nghost-%COMP%]     .p-password-toggle-mask-icon {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     .p-floatlabel:has(input:-webkit-autofill) label, \n[_nghost-%COMP%]     .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n[_nghost-%COMP%]     p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n[_nghost-%COMP%]     p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n[_nghost-%COMP%]     p-password .p-password, \n[_nghost-%COMP%]     p-password input {\n  width: 100%;\n}\n[_nghost-%COMP%]     p-password input, \n[_nghost-%COMP%]     p-password textarea, \n[_nghost-%COMP%]     p-password p-select, \n[_nghost-%COMP%]     p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel[_ngcontent-%COMP%] {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box[_ngcontent-%COMP%] {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=reset-password-welcome.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordWelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password-welcome", imports: [DynamicFormComponent, ButtonModule, RouterModule], template: `<div class="wrapper bg-cover bg-center h-screen">
  <div
    class="panel login-box flex flex-col items-stretch w-full max-w-[800px] mx-auto"
  >
    <div class="bg-white p-[15px_34px] mb-4">
      <div class="p-2 flex flex-col">
        <span class="text-2xl font-semibold m-0 pb-1">Welcome</span>

        <hr />
        <span class="py-2 muted"
          >Please update your account details and enter a new password for your
          account.</span
        >
      </div>

      <app-dynamic-form [fields]="formFields" [actions]="actions">
      </app-dynamic-form>
    </div>

    <a
      class="!text-white underline cursor-pointer self-center"
      [routerLink]="['/auth/login']"
      >Login</a
    >
    <a class="!text-white self-center">
      Copyright {{ currentYear }}. All rights reserved.
    </a>
  </div>
</div>
`, styles: ["/* src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.scss */\n.wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n:host {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n:host ::ng-deep .p-inputtext {\n  color: var(--form-field-color) !important;\n  background: var(--p-inputtext-background) !important;\n  border: 1px solid var(--p-inputtext-border-color) !important;\n}\n:host ::ng-deep .p-inputtext:enabled:focus {\n  border-color: #378bc0 !important;\n}\n:host ::ng-deep .p-password-toggle-mask-icon {\n  color: #378bc0;\n}\n:host ::ng-deep .p-floatlabel:has(input:-webkit-autofill) label,\n:host ::ng-deep .p-floatlabel:has(input:focus) label {\n  color: #378bc0;\n}\n:host ::ng-deep p-select {\n  background: var(--p-select-background) !important;\n  border-color: var(--p-select-border-color) !important;\n}\n:host ::ng-deep p-select .p-select-label {\n  color: var(--form-field-color) !important;\n}\n:host ::ng-deep p-password .p-password,\n:host ::ng-deep p-password input {\n  width: 100%;\n}\n:host ::ng-deep p-password input,\n:host ::ng-deep p-password textarea,\n:host ::ng-deep p-password p-select,\n:host ::ng-deep p-password .p-inputgroupaddon {\n  color: var(--form-field-color) !important;\n}\n@media (min-width: 640px) {\n  .panel {\n    bottom: 0px;\n    margin-bottom: 0px;\n    height: 100vh;\n    padding: 0px;\n  }\n  .login-box {\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=reset-password-welcome.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordWelcomeComponent, { className: "ResetPasswordWelcomeComponent", filePath: "src/app/features/auth/components/reset-password-welcome/reset-password-welcome.component.ts", lineNumber: 33 });
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
//# sourceMappingURL=chunk-O77LBKGV.js.map
