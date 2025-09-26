import {
  GridConfigurationFactory
} from "./chunk-ERQSJHKQ.js";
import {
  EntityDetailsService
} from "./chunk-CHLTYWV5.js";
import {
  DetailsComponentFactory
} from "./chunk-NF5VPKWP.js";
import {
  GridComponent,
  LocalStorageService,
  MultiSelect,
  MultiSelectModule,
  takeUntilDestroyed
} from "./chunk-BQ2AEPEH.js";
import {
  BaseComponent,
  BaseStyle,
  ButtonModule,
  ConnectedOverlayScrollHandler,
  D,
  FormsModule,
  K,
  NgControlStatus,
  NgModel,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  Tooltip,
  TooltipModule,
  Ut,
  W,
  Yt,
  tr,
  ut,
  z,
  zindexutils
} from "./chunk-SIZTMCIF.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-G6AKSBPY.js";
import {
  BroadcastEventMessageService
} from "./chunk-7UUZS7IM.js";
import {
  DEFAULT_PAGE_SIZE,
  getAllRouteParams,
  isDefined,
  isEmpty,
  isNullOrUndefined
} from "./chunk-UW6Q2JGR.js";
import {
  ActivatedRoute,
  CommonModule,
  NavigationEnd,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  Router,
  isPlatformBrowser
} from "./chunk-L35GT5ED.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  EMPTY,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  debounceTime,
  defer,
  effect,
  filter,
  finalize,
  inject,
  input,
  map,
  merge,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7FSD67AL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/primeng/fesm2022/primeng-popover.mjs
var _c0 = ["content"];
var _c1 = ["*"];
var _c2 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c3 = (a0, a1) => ({
  value: a0,
  params: a1
});
var _c4 = (a0) => ({
  closeCallback: a0
});
function Popover_div_0_3_ng_template_0_Template(rf, ctx) {
}
function Popover_div_0_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Popover_div_0_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Popover_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function Popover_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function Popover_div_0_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Popover_div_0_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function Popover_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    })("mousedown", function Popover_div_0_Template_div_mousedown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onContentClick($event));
    });
    \u0275\u0275projection(2);
    \u0275\u0275template(3, Popover_div_0_3_Template, 1, 0, null, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("@animation", \u0275\u0275pureFunction2(14, _c3, ctx_r1.overlayVisible ? "open" : "close", \u0275\u0275pureFunction2(11, _c2, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    \u0275\u0275attribute("aria-modal", ctx_r1.overlayVisible)("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(17, _c4, ctx_r1.onCloseClick.bind(ctx_r1)));
  }
}
var theme = (
  /*css*/
  `
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`
);
var classes = {
  root: "p-popover p-component",
  content: "p-popover-content"
};
var PopoverStyle = class _PopoverStyle extends BaseStyle {
  name = "popover";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PopoverStyle_BaseFactory;
    return function PopoverStyle_Factory(__ngFactoryType__) {
      return (\u0275PopoverStyle_BaseFactory || (\u0275PopoverStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PopoverStyle)))(__ngFactoryType__ || _PopoverStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PopoverStyle,
    factory: _PopoverStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverStyle, [{
    type: Injectable
  }], null, null);
})();
var Popover = class _Popover extends BaseComponent {
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Enables to hide the overlay when outside is clicked.
   * @group Props
   */
  dismissable = true;
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
   * Target element to attach the panel, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * When enabled, first button receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Callback to invoke when an overlay becomes visible.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when an overlay gets hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  container;
  overlayVisible = false;
  render = false;
  isOverlayAnimationInProgress = false;
  selfClick = false;
  documentClickListener;
  target;
  willHide;
  scrollHandler;
  documentResizeListener;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  destroyCallback;
  overlayEventListener;
  overlaySubscription;
  _componentStyle = inject(PopoverStyle);
  zone = inject(NgZone);
  overlayService = inject(OverlayService);
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        let documentEvent = Ut() ? "touchstart" : "click";
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
          if (!this.dismissable) {
            return;
          }
          if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
            this.hide();
          }
          this.selfClick = false;
          this.cd.markForCheck();
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  /**
   * Toggles the visibility of the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  toggle(event, target) {
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    if (this.overlayVisible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }
      this.hide();
    } else {
      this.show(event, target);
    }
  }
  /**
   * Displays the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  show(event, target) {
    target && event && event.stopPropagation();
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    this.target = target || event.currentTarget || event.target;
    this.overlayVisible = true;
    this.render = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  onContentClick(event) {
    const targetElement = event.target;
    this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
  }
  hasTargetChanged(event, target) {
    return this.target != null && this.target !== (target || event.currentTarget || event.target);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else ut(this.appendTo, this.container);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
    }
    D(this.container, this.target, false);
    const containerOffset = K(this.container);
    const targetOffset = K(this.target);
    const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
    }
    this.container?.style.setProperty(tr("popover.arrow.left").name, `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      this.container.setAttribute("data-p-popover-flipped", "true");
      W(this.container, "p-popover-flipped");
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.container?.setAttribute(this.attrSelector, "");
      this.appendContainer();
      this.align();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
      if (this.focusOnShow) {
        this.focus();
      }
      this.overlayEventListener = (e) => {
        if (this.container && this.container.contains(e.target)) {
          this.selfClick = true;
        }
      };
      this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
      this.onShow.emit(null);
    }
    this.isOverlayAnimationInProgress = true;
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.destroyCallback) {
          this.destroyCallback();
          this.destroyCallback = null;
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
      case "close":
        if (this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        this.onContainerDestroy();
        this.onHide.emit({});
        this.render = false;
        break;
    }
    this.isOverlayAnimationInProgress = false;
  }
  focus() {
    let focusable = z(this.container, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onCloseClick(event) {
    this.hide();
    event.preventDefault();
  }
  onEscapeKeydown(event) {
    this.hide();
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onContainerDestroy() {
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.destroyCallback = null;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Popover_BaseFactory;
    return function Popover_Factory(__ngFactoryType__) {
      return (\u0275Popover_BaseFactory || (\u0275Popover_BaseFactory = \u0275\u0275getInheritedFactory(_Popover)))(__ngFactoryType__ || _Popover);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Popover,
    selectors: [["p-popover"]],
    contentQueries: function Popover_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function Popover_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function Popover_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dismissable: [2, "dismissable", "dismissable", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      ariaCloseLabel: "ariaCloseLabel",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([PopoverStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 1,
    consts: [["role", "dialog", 3, "class", "ngStyle", "click", 4, "ngIf"], ["role", "dialog", 3, "click", "ngStyle"], [3, "click", "mousedown"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Popover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, Popover_div_0_Template, 4, 19, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.render);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("close", style({
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Popover, [{
    type: Component,
    args: [{
      selector: "p-popover",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div
            *ngIf="render"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: overlayVisible ? 'open' : 'close',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
            role="dialog"
            [attr.aria-modal]="overlayVisible"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
        >
            <div [class]="cx('content')" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                <ng-content></ng-content>
                <ng-template *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { closeCallback: onCloseClick.bind(this) }"></ng-template>
            </div>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("close", style({
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PopoverStyle]
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dismissable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var PopoverModule = class _PopoverModule {
  static \u0275fac = function PopoverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopoverModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PopoverModule,
    imports: [Popover, SharedModule],
    exports: [Popover, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Popover, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      imports: [Popover, SharedModule],
      exports: [Popover, SharedModule]
    }]
  }], null, null);
})();

// src/app/shared/components/grid/column-selector/column-selector.component.ts
function ColumnSelectorComponent_ng_template_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "(Required)");
    \u0275\u0275elementEnd();
  }
}
function ColumnSelectorComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ColumnSelectorComponent_ng_template_10_Conditional_3_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("font-semibold", option_r3.required);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r3.required ? 3 : -1);
  }
}
var ColumnSelectorComponent = class _ColumnSelectorComponent {
  columns = input.required();
  selectedColumns = input([]);
  disabled = input(false);
  columnChange = output();
  columnOptions = signal([]);
  selectedValues = signal([]);
  constructor() {
    effect(() => {
      const cols = this.columns();
      const options = cols.map((col) => ({
        label: col.header,
        value: col.field
      }));
      this.columnOptions.set(options);
    });
    effect(() => {
      const selected = this.selectedColumns();
      if (selected.length > 0) {
        this.selectedValues.set(selected);
      } else {
        const allColumns = this.columns().map((col) => col.field);
        this.selectedValues.set(allColumns);
      }
    });
  }
  onSelectionChange(event) {
    const values = event.value;
    this.selectedValues.set(values);
    this.columnChange.emit(values);
  }
  selectAll() {
    const allValues = this.columnOptions().map((option) => option.value);
    this.selectedValues.set(allValues);
    this.columnChange.emit(allValues);
  }
  clearAll() {
    const requiredValues = this.columnOptions().filter((option) => option.required === true).map((option) => option.value);
    this.selectedValues.set(requiredValues);
    this.columnChange.emit(requiredValues);
  }
  resetToDefault() {
    this.selectAll();
  }
  static \u0275fac = function ColumnSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColumnSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColumnSelectorComponent, selectors: [["app-column-selector"]], inputs: { columns: [1, "columns"], selectedColumns: [1, "selectedColumns"], disabled: [1, "disabled"] }, outputs: { columnChange: "columnChange" }, decls: 13, vars: 14, consts: [["overlayPanel", ""], [1, "inline-block"], ["type", "button", "pTooltip", "Column Visibility", "tooltipPosition", "bottom", 1, "pi", "pi-objects-column", "action", "hover", 3, "click", "disabled"], [3, "dismissable"], [1, "min-w-[300px]", "max-w-[400px]"], [1, "flex", "justify-between", "items-center", "mb-3", "gap-2"], [1, "m-0", "font-semibold"], [1, "column-options"], ["optionLabel", "label", "optionValue", "value", "display", "chip", "filterBy", "label", "placeholder", "Select columns to display", "styleClass", "w-full", "panelStyleClass", "column-selector-dropdown", 3, "ngModelChange", "onChange", "options", "ngModel", "showToggleAll", "showHeader", "filter", "disabled"], ["pTemplate", "item"], [1, "mt-2", "text-sm", "text-gray-600"], [1, "flex", "align-items-center", "gap-2"], [1, "text-xs", "text-blue-500"]], template: function ColumnSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
      \u0275\u0275listener("click", function ColumnSelectorComponent_Template_button_click_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        const overlayPanel_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(overlayPanel_r2.toggle($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "p-popover", 3, 0)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7, "Show Columns");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "p-multiSelect", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ColumnSelectorComponent_Template_p_multiSelect_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedValues, $event) || (ctx.selectedValues = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ColumnSelectorComponent_Template_p_multiSelect_onChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(10, ColumnSelectorComponent_ng_template_10_Template, 4, 4, "ng-template", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("text-primary", ctx.selectedValues().length < ctx.columnOptions().length);
      \u0275\u0275property("disabled", ctx.disabled());
      \u0275\u0275attribute("aria-label", "Column visibility selector")("aria-disabled", ctx.disabled());
      \u0275\u0275advance();
      \u0275\u0275property("dismissable", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.columnOptions());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValues);
      \u0275\u0275property("showToggleAll", true)("showHeader", true)("filter", true)("disabled", ctx.disabled());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" ", ctx.selectedValues().length, " of ", ctx.columnOptions().length, " columns selected ");
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    MultiSelectModule,
    MultiSelect,
    PrimeTemplate,
    ButtonModule,
    TooltipModule,
    Tooltip,
    PopoverModule,
    Popover
  ], styles: ["\n\n.column-selector[_ngcontent-%COMP%]     .p-multiselect {\n  min-height: 120px;\n}\n.column-selector[_ngcontent-%COMP%]     .p-multiselect .p-multiselect-label {\n  min-height: 2.5rem;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.column-selector[_ngcontent-%COMP%]     .p-multiselect .p-multiselect-token {\n  font-size: 0.875rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=column-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-column-selector", imports: [
      CommonModule,
      FormsModule,
      MultiSelectModule,
      ButtonModule,
      TooltipModule,
      PopoverModule
    ], template: `<div class="inline-block">
  <button
    type="button"
    class="pi pi-objects-column action hover"
    [class.text-primary]="selectedValues().length < columnOptions().length"
    pTooltip="Column Visibility"
    tooltipPosition="bottom"
    [attr.aria-label]="'Column visibility selector'"
    [attr.aria-disabled]="disabled()"
    [disabled]="disabled()"
    (click)="overlayPanel.toggle($event)"
  ></button>

  <p-popover #overlayPanel [dismissable]="true">
    <div class="min-w-[300px] max-w-[400px]">
      <div class="flex justify-between items-center mb-3 gap-2">
        <h5 class="m-0 font-semibold">Show Columns</h5>
      </div>

      <div class="column-options">
        <p-multiSelect
          [options]="columnOptions()"
          [(ngModel)]="selectedValues"
          optionLabel="label"
          optionValue="value"
          display="chip"
          [showToggleAll]="true"
          [showHeader]="true"
          [filter]="true"
          filterBy="label"
          placeholder="Select columns to display"
          styleClass="w-full"
          panelStyleClass="column-selector-dropdown"
          (onChange)="onSelectionChange($event)"
          [disabled]="disabled()"
        >
          <ng-template let-option pTemplate="item">
            <div class="flex align-items-center gap-2">
              <span [class.font-semibold]="option.required">{{
                option.label
              }}</span>
              @if (option.required) {
                <span class="text-xs text-blue-500">(Required)</span>
              }
            </div>
          </ng-template>
        </p-multiSelect>
      </div>

      <div class="mt-2 text-sm text-gray-600">
        {{ selectedValues().length }} of {{ columnOptions().length }} columns
        selected
      </div>
    </div>
  </p-popover>
</div>
`, styles: ["/* src/app/shared/components/grid/column-selector/column-selector.component.scss */\n.column-selector ::ng-deep .p-multiselect {\n  min-height: 120px;\n}\n.column-selector ::ng-deep .p-multiselect .p-multiselect-label {\n  min-height: 2.5rem;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.column-selector ::ng-deep .p-multiselect .p-multiselect-token {\n  font-size: 0.875rem;\n  padding: 0.25rem 0.5rem;\n}\n/*# sourceMappingURL=column-selector.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColumnSelectorComponent, { className: "ColumnSelectorComponent", filePath: "src/app/shared/components/grid/column-selector/column-selector.component.ts", lineNumber: 29 });
})();

// src/app/shared/services/grid-preference.service.ts
var GRID_PREFERENCES_KEY = "grid_column_preferences";
var GridPreferenceService = class _GridPreferenceService {
  localStorageService = inject(LocalStorageService);
  /**
   * Generates a schema version hash based on the column fields
   */
  generateSchemaVersion(gridConfig) {
    const columnFields = gridConfig.columns.map((col) => col.field).sort((a, b) => a.localeCompare(b)).join("|");
    return btoa(columnFields).slice(0, 16);
  }
  /**
   * Validates and syncs stored preferences with current column schema
   */
  validateAndSyncPreferences(gridConfig, storedData) {
    const currentSchema = this.generateSchemaVersion(gridConfig);
    const availableFields = new Set(gridConfig.columns.map((col) => col.field));
    if (!storedData || storedData.schemaVersion !== currentSchema) {
      return this.getDefaultColumns(gridConfig);
    }
    const validStoredColumns = storedData.visibleColumns.filter((field) => availableFields.has(field));
    const newColumns = this.getNewDefaultColumns(gridConfig, validStoredColumns);
    return [...validStoredColumns, ...newColumns];
  }
  /**
   * Gets default columns based on configuration
   */
  getDefaultColumns(gridConfig) {
    if (gridConfig.defaultVisibleColumns) {
      return gridConfig.defaultVisibleColumns;
    }
    return gridConfig.columns.map((col) => col.field);
  }
  /**
   * Identifies new columns that should be visible by default
   */
  getNewDefaultColumns(gridConfig, currentVisible) {
    const currentVisibleSet = new Set(currentVisible);
    const defaultColumns = this.getDefaultColumns(gridConfig);
    return defaultColumns.filter((field) => !currentVisibleSet.has(field));
  }
  /**
   * Retrieves the visible columns for a specific grid.
   * Automatically handles schema changes and maintains sync.
   *
   * @param gridConfig - The configuration object for the grid.
   * @returns An array of strings representing the fields of the columns to be displayed.
   */
  getVisibleColumns(gridConfig) {
    const allPreferences = this.localStorageService.getItem(GRID_PREFERENCES_KEY) || {};
    const gridId = gridConfig.entityType;
    const storedData = allPreferences[gridId];
    const syncedColumns = this.validateAndSyncPreferences(gridConfig, storedData);
    const currentSchema = this.generateSchemaVersion(gridConfig);
    if (isNullOrUndefined(storedData) || storedData.schemaVersion !== currentSchema || JSON.stringify(storedData.visibleColumns) !== JSON.stringify(syncedColumns)) {
      this.saveVisibleColumns(gridId, syncedColumns, currentSchema);
    }
    return syncedColumns;
  }
  /**
   * Saves the visible columns for a specific grid with schema versioning.
   *
   * @param gridId - A unique identifier for the grid (e.g., 'assets', 'geofences').
   * @param visibleColumns - An array of strings representing the fields of the visible columns.
   * @param schemaVersion - Optional schema version. If not provided, will use 'unknown'.
   */
  saveVisibleColumns(gridId, visibleColumns, schemaVersion) {
    const allPreferences = this.localStorageService.getItem(GRID_PREFERENCES_KEY) || {};
    allPreferences[gridId] = {
      visibleColumns,
      schemaVersion: schemaVersion ?? "unknown",
      lastUpdated: Date.now()
    };
    this.localStorageService.setItem(GRID_PREFERENCES_KEY, allPreferences);
  }
  /**
   * Enhanced save method that includes schema validation
   */
  saveVisibleColumnsWithValidation(gridConfig, visibleColumns) {
    const availableFields = new Set(gridConfig.columns.map((col) => col.field));
    const validColumns = visibleColumns.filter((field) => availableFields.has(field));
    if (validColumns.length !== visibleColumns.length) {
      console.warn(`Some columns were filtered out as they don't exist in current schema for grid ${gridConfig.entityType}`);
    }
    const schemaVersion = this.generateSchemaVersion(gridConfig);
    this.saveVisibleColumns(gridConfig.entityType, validColumns, schemaVersion);
  }
  /**
   * Clears stored preferences for a specific grid.
   *
   * @param gridId - A unique identifier for the grid.
   */
  clearPreferences(gridId) {
    const allPreferences = this.localStorageService.getItem(GRID_PREFERENCES_KEY) || {};
    delete allPreferences[gridId];
    this.localStorageService.setItem(GRID_PREFERENCES_KEY, allPreferences);
  }
  /**
   * Clears all grid preferences.
   */
  clearAllPreferences() {
    this.localStorageService.removeItem(GRID_PREFERENCES_KEY);
  }
  /**
   * Gets diagnostic information about stored preferences
   */
  getDiagnosticInfo() {
    const allPreferences = this.localStorageService.getItem(GRID_PREFERENCES_KEY) || {};
    return Object.entries(allPreferences).reduce((acc, [gridId, data]) => {
      acc[gridId] = {
        columnCount: data.visibleColumns.length,
        schemaVersion: data.schemaVersion,
        lastUpdated: new Date(data.lastUpdated).toISOString(),
        columns: data.visibleColumns
      };
      return acc;
    }, {});
  }
  /**
   * Force refresh preferences for a specific grid (useful during development)
   */
  forceRefreshPreferences(gridConfig) {
    this.clearPreferences(gridConfig.entityType);
    this.getVisibleColumns(gridConfig);
  }
  static \u0275fac = function GridPreferenceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridPreferenceService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GridPreferenceService, factory: _GridPreferenceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridPreferenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/administration/components/admin-grid-container/admin-grid-container.component.ts
var AdminGridContainerComponent = class _AdminGridContainerComponent {
  grid;
  gridConfigurationFactory = inject(GridConfigurationFactory);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  currentGridState = signal(void 0);
  filterSubject = new Subject();
  broadcastService = inject(BroadcastEventMessageService);
  detailsFactory = inject(DetailsComponentFactory);
  detailsService = inject(EntityDetailsService);
  gridPreferenceService = inject(GridPreferenceService);
  gridConfiguration = signal(null);
  columns = signal([]);
  data = signal([]);
  loading = signal(false);
  totalRecords = signal(0);
  limit = signal(DEFAULT_PAGE_SIZE);
  showFilters = signal(false);
  currentFilters = signal({});
  visibleColumns = signal([]);
  router = inject(Router);
  forceGridReconfig$ = new Subject();
  lastProcessedRouteKey = signal(null);
  constructor() {
    effect(() => {
      const config = this.gridConfiguration();
      if (isDefined(config?.columnsSignal)) {
        this.columns.set(config.columnsSignal());
      }
    });
  }
  ngOnInit() {
    this.initializeGridConfiguration();
    this.initializeFilterDebounce();
    this.initializeEntityUpdatesHandler();
    this.initializeClientChangeHandler();
    this.forceGridReconfig$.next();
  }
  selectGridItemFromQuery() {
    this.activatedRoute.queryParams.pipe(takeUntilDestroyed(this.destroyRef), tap((params) => {
      if (this.data().length > 0 && isDefined(params["details"])) {
        const selectedId = params["details"];
        const selectedItem = this.data().find((item) => item.id === selectedId);
        if (selectedItem && this.grid) {
          setTimeout(() => {
            this.grid?.setSelection(selectedItem);
            this.handleRowSelect({ data: selectedItem });
          });
        }
      }
    })).subscribe();
  }
  initializeEntityUpdatesHandler() {
    this.broadcastService.on("entity-updated").pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      let currentSelection = null;
      if (this.grid?.selectedRows) {
        currentSelection = Array.isArray(this.grid.selectedRows) ? [...this.grid.selectedRows] : __spreadValues({}, this.grid.selectedRows);
      }
      this.loadData(this.currentGridState()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        if (currentSelection) {
          this.restoreSelection(Array.isArray(currentSelection) ? currentSelection[0] : currentSelection);
        }
      });
    });
  }
  initializeClientChangeHandler() {
    const configChanges$ = merge(this.broadcastService.on("client-changed"), this.broadcastService.on("entity-changed"));
    const dataChanges$ = this.broadcastService.on("entity-deleted");
    configChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.forceGridReconfig$.next();
    });
    dataChanges$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(100)).subscribe(() => {
      this.onRefresh();
    });
  }
  /**
   * Tries to restore a previously selected item
   */
  restoreSelection(previousSelection) {
    if (isNullOrUndefined(previousSelection) || !this.grid)
      return;
    if (this.data().length === 0) {
      console.warn("Cannot restore selection: grid data is empty");
      return;
    }
    try {
      if (Array.isArray(previousSelection)) {
        const selectedIds = previousSelection.map((item) => item.id);
        const refreshedItems = this.data().filter((item) => selectedIds.includes(item.id));
        if (refreshedItems.length > 0) {
          setTimeout(() => {
            this.grid?.setSelection(refreshedItems);
            if (isDefined(refreshedItems[0])) {
              this.handleRowSelect({ data: refreshedItems[0] });
            }
          }, 0);
        }
      } else if (isDefined(previousSelection?.["id"])) {
        const refreshedItem = this.data().find((item) => item.id === previousSelection["id"]);
        if (refreshedItem) {
          setTimeout(() => {
            this.grid?.setSelection(refreshedItem);
            this.handleRowSelect({ data: refreshedItem });
          }, 0);
        } else {
          console.warn(`Item with id ${previousSelection["id"]} not found in refreshed data`);
        }
      }
    } catch (err) {
      console.error("Error restoring selection:", err);
    }
  }
  initializeGridConfiguration() {
    const navigationEvents$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map(() => false));
    const forceReconfigEvents$ = this.forceGridReconfig$.pipe(map(() => true));
    merge(navigationEvents$, forceReconfigEvents$).pipe(takeUntilDestroyed(this.destroyRef), switchMap(() => {
      this.loading.set(true);
      const type = this.activatedRoute.snapshot.paramMap.get("type");
      const routeParams = this.getRouteParams();
      const ownerId = routeParams["clientId"] ?? routeParams["vendorId"] ?? routeParams["distributorId"] ?? "none";
      const currentRouteKey = `${type}-${ownerId}`;
      if (this.lastProcessedRouteKey() === currentRouteKey) {
        this.loading.set(false);
        return EMPTY;
      }
      this.lastProcessedRouteKey.set(currentRouteKey);
      if (isNullOrUndefined(type)) {
        this.gridConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      const config = this.gridConfigurationFactory.create(type, routeParams);
      if (!this.isValidConfig(config)) {
        console.warn(`AdminGridContainer: Generated configuration for type "${type}" (key: ${currentRouteKey}) is invalid.`);
        this.gridConfiguration.set(null);
        this.columns.set([]);
        this.currentFilters.set({});
        this.loading.set(false);
        return EMPTY;
      }
      this.gridConfiguration.set(config);
      this.columns.set(config.columns);
      const savedVisibleColumns = this.gridPreferenceService.getVisibleColumns(config);
      this.visibleColumns.set(savedVisibleColumns);
      if (isDefined(config.getFilters)) {
        const filterState = config.getFilters();
        const initialFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            initialFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(initialFilters);
      } else {
        this.currentFilters.set({});
      }
      return this.loadData();
    }), catchError((err) => {
      console.error("AdminGridContainer: Error during grid configuration or data load pipeline:", err);
      this.loading.set(false);
      this.data.set([]);
      this.totalRecords.set(0);
      this.gridConfiguration.set(null);
      this.columns.set([]);
      this.currentFilters.set({});
      return EMPTY;
    })).subscribe();
  }
  getRouteParams() {
    let route = this.activatedRoute;
    const paramsList = [];
    while (route) {
      paramsList.push(route.snapshot.params);
      route = route.parent;
    }
    const finalParams = {};
    for (let i = paramsList.length - 1; i >= 0; i--) {
      Object.assign(finalParams, paramsList[i]);
    }
    return finalParams;
  }
  isValidConfig(config) {
    return isDefined(config?.dataService);
  }
  initializeFilterDebounce() {
    this.filterSubject.pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(300),
      // Debounce filter changes by 300ms
      tap((event) => {
        const config = this.gridConfiguration();
        if (!config)
          return;
        config.onFilterChange?.(event.field, event.value);
        this.loadData(this.currentGridState()).subscribe(() => {
        });
      })
    ).subscribe();
  }
  loadData(event) {
    return defer(() => {
      const config = this.gridConfiguration();
      if (!this.isValidConfig(config)) {
        this.loading.set(false);
        return EMPTY;
      }
      this.loading.set(true);
      this.currentGridState.set(event);
      return config.dataService.getList(config.getRequestParams(event)).pipe(takeUntilDestroyed(this.destroyRef), tap((response) => {
        this.data.set(response.items);
        this.totalRecords.set(response.count);
        this.selectGridItemFromQuery();
      }), catchError((err) => {
        console.error(`AdminGridContainer: Error loading data for type:`, err);
        this.data.set([]);
        this.totalRecords.set(0);
        return EMPTY;
      }), finalize(() => {
        this.loading.set(false);
      }));
    });
  }
  onExport() {
    this.grid?.exportCSV();
  }
  onRefresh() {
    const config = this.gridConfiguration();
    if (!this.isValidConfig(config)) {
      return;
    }
    const hasSelectedItem = this.detailsService.showPanel();
    const selectedItemId = this.detailsService.getSelectedItemId();
    this.loadData(this.currentGridState()).pipe(takeUntilDestroyed(this.destroyRef), tap(() => {
      if (hasSelectedItem && selectedItemId) {
        const refreshedItem = this.findItemById(selectedItemId);
        if (isDefined(refreshedItem)) {
          this.detailsService.softRefreshSelectedItem(refreshedItem);
        } else {
          this.detailsService.softRefreshSelectedItem();
        }
      }
    })).subscribe();
  }
  handleFilterChange(event) {
    this.filterSubject.next({
      field: event.field,
      value: typeof event.value === "string" ? event.value.trim() : event.value
    });
  }
  handleColumnChange(visibleColumnFields) {
    this.visibleColumns.set(visibleColumnFields);
    const config = this.gridConfiguration();
    if (config) {
      this.gridPreferenceService.saveVisibleColumnsWithValidation(config, visibleColumnFields);
    }
  }
  onFilterToggle() {
    const config = this.gridConfiguration();
    if (!this.grid || !config)
      return;
    const newValue = !this.showFilters();
    this.showFilters.set(newValue);
    if (newValue) {
      if (config.getFilters) {
        const filterState = config.getFilters();
        const currentFilters = {};
        Object.entries(filterState).forEach(([field, criteria]) => {
          if (isDefined(criteria) && typeof criteria === "object") {
            currentFilters[field] = criteria.value;
          }
        });
        this.currentFilters.set(currentFilters);
      }
    } else if (this.grid.filterable()) {
      if (config.clearFilters) {
        config.clearFilters();
        this.loadData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
      }
    }
  }
  handleLazyLoad(event) {
    this.loadData(event).pipe(takeUntilDestroyed(this.destroyRef), catchError(() => {
      return EMPTY;
    })).subscribe();
  }
  // Handle row selection from the grid
  handleRowSelect(event) {
    if (isEmpty(event) || isEmpty(event.data))
      return;
    const routeEntityType = this.detailsFactory.getEntityTypeFromRoute(this.activatedRoute, "type");
    const entityType = routeEntityType ?? event.data.type;
    const item = __spreadProps(__spreadValues({}, event.data), { entityType });
    this.broadcastService.broadcast("grid-item-selected", {
      item,
      componentType: this.detailsFactory.getDetailsComponent(entityType)
    });
  }
  /**
   * Find an item in the current grid data by its ID
   * Used for soft refreshing details panel after grid refresh
   */
  findItemById(id) {
    const currentData = this.data();
    return currentData?.find((item) => String(item.id) === id) ?? null;
  }
  static \u0275fac = function AdminGridContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminGridContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminGridContainerComponent, selectors: [["app-admin-grid-container"]], viewQuery: function AdminGridContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(GridComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.grid = _t.first);
    }
  }, decls: 15, vars: 26, consts: [[1, "flex", "flex-col", "h-full", "w-full", "overflow-hidden"], [1, "p-4", "content-header", "flex-none", "w-full"], [1, "flex", "justify-between", "items-center"], ["id", "gridTitle", 1, "text-xl", "font-semibold", "truncate"], ["aria-label", "Grid actions", 1, "flex-none", "flex", "space-x-4", "align-center"], ["type", "button", "pTooltip", "Add", "tooltipPosition", "bottom", "aria-label", "Add new item", 1, "pi", "pi-plus", "action", "hover", 3, "click"], ["type", "button", "pTooltip", "Refresh", "tooltipPosition", "bottom", "aria-label", "Refresh grid data", 1, "pi", "pi-refresh", "action", "hover", 3, "click"], ["type", "button", "pTooltip", "Filter", "tooltipPosition", "bottom", "aria-label", "Toggle filters", 1, "pi", "pi-filter-fill", "action", "hover", 3, "click"], [3, "columnChange", "columns", "selectedColumns", "disabled"], ["pTooltip", "Export CSV", "tooltipPosition", "bottom", "aria-label", "Export to CSV", 1, "pi", "pi-download", "action", "hover", 3, "click"], [1, "flex-1", "min-h-0", "w-full", "overflow-hidden"], ["role", "grid", "styleClass", "table-height", 1, "h-full", "max-w-full", 3, "onLazyLoad", "onFilterChange", "rowSelect", "columns", "data", "pagination", "totalRecords", "lazy", "filterable", "visibleColumns", "selectionMode", "loading", "scrollable", "scrollHeight", "initialFilters", "sortable"], ["aria-live", "polite", "aria-atomic", "true", 1, "sr-only"]], template: function AdminGridContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_6_listener() {
        let tmp_0_0;
        return (tmp_0_0 = ctx.gridConfiguration()) == null ? null : tmp_0_0.onAdd();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_7_listener() {
        return ctx.onRefresh();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_8_listener() {
        return ctx.onFilterToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "app-column-selector", 8);
      \u0275\u0275listener("columnChange", function AdminGridContainerComponent_Template_app_column_selector_columnChange_9_listener($event) {
        return ctx.handleColumnChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function AdminGridContainerComponent_Template_button_click_10_listener() {
        return ctx.onExport();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 10)(12, "app-grid", 11);
      \u0275\u0275listener("onLazyLoad", function AdminGridContainerComponent_Template_app_grid_onLazyLoad_12_listener($event) {
        return ctx.handleLazyLoad($event);
      })("onFilterChange", function AdminGridContainerComponent_Template_app_grid_onFilterChange_12_listener($event) {
        return ctx.handleFilterChange($event);
      })("rowSelect", function AdminGridContainerComponent_Template_app_grid_rowSelect_12_listener($event) {
        return ctx.handleRowSelect($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_4_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.gridConfiguration()) == null ? null : tmp_0_0.getTitle(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-disabled", !((tmp_1_0 = ctx.gridConfiguration()) == null ? null : tmp_1_0.onAdd));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-busy", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275classProp("text-primary", ctx.showFilters());
      \u0275\u0275attribute("aria-disabled", !((tmp_4_0 = ctx.gridConfiguration()) == null ? null : tmp_4_0.filterConfig));
      \u0275\u0275advance();
      \u0275\u0275property("columns", ctx.columns())("selectedColumns", ctx.visibleColumns())("disabled", !ctx.gridConfiguration());
      \u0275\u0275advance(3);
      \u0275\u0275property("columns", ctx.columns())("data", ctx.data())("pagination", true)("totalRecords", ctx.totalRecords())("lazy", true)("filterable", ctx.showFilters())("visibleColumns", ctx.visibleColumns())("selectionMode", "single")("loading", ctx.loading())("scrollable", true)("scrollHeight", "flex")("initialFilters", ctx.currentFilters())("sortable", true);
      \u0275\u0275attribute("aria-labelledby", "gridTitle")("aria-busy", ctx.loading())("aria-rowcount", ctx.totalRecords());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Loading data" : ctx.totalRecords() + " items loaded", " ");
    }
  }, dependencies: [
    GridComponent,
    ColumnSelectorComponent,
    ButtonModule,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=admin-grid-container.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminGridContainerComponent, [{
    type: Component,
    args: [{ selector: "app-admin-grid-container", imports: [
      GridComponent,
      ColumnSelectorComponent,
      ButtonModule,
      TooltipModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-col h-full w-full overflow-hidden">
  <div class="p-4 content-header flex-none w-full">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold truncate" id="gridTitle">
        {{ gridConfiguration()?.getTitle() }}
      </h2>
      <div
        class="flex-none flex space-x-4 align-center"
        aria-label="Grid actions"
      >
        <button
          type="button"
          class="pi pi-plus action hover"
          pTooltip="Add"
          tooltipPosition="bottom"
          aria-label="Add new item"
          [attr.aria-disabled]="!gridConfiguration()?.onAdd"
          (click)="gridConfiguration()?.onAdd()"
        ></button>
        <button
          type="button"
          class="pi pi-refresh action hover"
          pTooltip="Refresh"
          tooltipPosition="bottom"
          (click)="onRefresh()"
          aria-label="Refresh grid data"
          [attr.aria-busy]="loading()"
        ></button>
        <button
          type="button"
          class="pi pi-filter-fill action hover"
          pTooltip="Filter"
          tooltipPosition="bottom"
          [class.text-primary]="showFilters()"
          (click)="onFilterToggle()"
          aria-label="Toggle filters"
          [attr.aria-disabled]="!gridConfiguration()?.filterConfig"
        ></button>
        <app-column-selector
          [columns]="columns()"
          [selectedColumns]="visibleColumns()"
          [disabled]="!gridConfiguration()"
          (columnChange)="handleColumnChange($event)"
        ></app-column-selector>
        <button
          class="pi pi-download action hover"
          pTooltip="Export CSV"
          tooltipPosition="bottom"
          (click)="onExport()"
          aria-label="Export to CSV"
        ></button>
      </div>
    </div>
  </div>

  <div class="flex-1 min-h-0 w-full overflow-hidden">
    <app-grid
      [columns]="columns()"
      [data]="data()"
      [pagination]="true"
      [totalRecords]="totalRecords()"
      [lazy]="true"
      [filterable]="showFilters()"
      [visibleColumns]="visibleColumns()"
      (onLazyLoad)="handleLazyLoad($event)"
      (onFilterChange)="handleFilterChange($event)"
      (rowSelect)="handleRowSelect($event)"
      [selectionMode]="'single'"
      [loading]="loading()"
      [scrollable]="true"
      [scrollHeight]="'flex'"
      role="grid"
      [attr.aria-labelledby]="'gridTitle'"
      [attr.aria-busy]="loading()"
      [attr.aria-rowcount]="totalRecords()"
      [initialFilters]="currentFilters()"
      [sortable]="true"
      class="h-full max-w-full"
      styleClass="table-height"
    ></app-grid>
  </div>
  <div class="sr-only" aria-live="polite" aria-atomic="true">
    {{ loading() ? 'Loading data' : totalRecords() + ' items loaded' }}
  </div>
</div>
`, styles: ["/* src/app/features/administration/components/admin-grid-container/admin-grid-container.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=admin-grid-container.component.css.map */\n"] }]
  }], () => [], { grid: [{
    type: ViewChild,
    args: [GridComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminGridContainerComponent, { className: "AdminGridContainerComponent", filePath: "src/app/features/administration/components/admin-grid-container/admin-grid-container.component.ts", lineNumber: 71 });
})();

// src/app/features/administration/guards/clients.guard.ts
var clientsGuard = (route, _state) => {
  const router = inject(Router);
  const allParams = getAllRouteParams(route);
  const vendorId = allParams["vendorId"];
  if (isDefined(vendorId)) {
    return router.createUrlTree([
      "admin",
      "vendor",
      vendorId,
      "clients",
      "grid",
      "vendor-clients"
    ]);
  }
  return false;
};

export {
  AdminGridContainerComponent,
  clientsGuard
};
//# sourceMappingURL=chunk-5H5GF6JU.js.map
