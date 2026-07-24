import {
  mapAppInviteFromApi
} from "./chunk-5LL4AMNO.js";
import {
  FocusTrap
} from "./chunk-7YJUDWRM.js";
import {
  ApiUrlService,
  HttpClient
} from "./chunk-6H7AOYCU.js";
import {
  MotionDirective,
  MotionModule,
  zindexutils
} from "./chunk-7BSAABDZ.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  Button,
  ButtonModule,
  CommonModule,
  ConfirmationService,
  ConnectedOverlayScrollHandler,
  D,
  K,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  Ut,
  W,
  Yt,
  bt,
  ut,
  z
} from "./chunk-T7ZENNNQ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  map,
  numberAttribute,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-JFHDN3YU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@primeuix/styles/dist/confirmpopup/index.mjs
var style = "\n    .p-confirmpopup {\n        position: absolute;\n        margin-top: dt('confirmpopup.gutter');\n        top: 0;\n        left: 0;\n        background: dt('confirmpopup.background');\n        color: dt('confirmpopup.color');\n        border: 1px solid dt('confirmpopup.border.color');\n        border-radius: dt('confirmpopup.border.radius');\n        box-shadow: dt('confirmpopup.shadow');\n        will-change: transform;\n    }\n\n    .p-confirmpopup-content {\n        display: flex;\n        align-items: center;\n        padding: dt('confirmpopup.content.padding');\n        gap: dt('confirmpopup.content.gap');\n    }\n\n    .p-confirmpopup-icon {\n        font-size: dt('confirmpopup.icon.size');\n        width: dt('confirmpopup.icon.size');\n        height: dt('confirmpopup.icon.size');\n        color: dt('confirmpopup.icon.color');\n    }\n\n    .p-confirmpopup-footer {\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('confirmpopup.footer.gap');\n        padding: dt('confirmpopup.footer.padding');\n    }\n\n    .p-confirmpopup-footer button {\n        width: auto;\n    }\n\n    .p-confirmpopup-footer button:last-child {\n        margin: 0;\n    }\n\n    .p-confirmpopup-flipped {\n        margin-block-start: calc(dt('confirmpopup.gutter') * -1);\n        margin-block-end: dt('confirmpopup.gutter');\n    }\n\n    .p-confirmpopup:after,\n    .p-confirmpopup:before {\n        bottom: 100%;\n        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));\n        content: ' ';\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n    }\n\n    .p-confirmpopup:after {\n        border-width: calc(dt('confirmpopup.gutter') - 2px);\n        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('confirmpopup.background');\n    }\n\n    .p-confirmpopup:before {\n        border-width: dt('confirmpopup.gutter');\n        margin-left: calc(-1 * dt('confirmpopup.gutter'));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('confirmpopup.border.color');\n    }\n\n    .p-confirmpopup-flipped:after,\n    .p-confirmpopup-flipped:before {\n        bottom: auto;\n        top: 100%;\n    }\n\n    .p-confirmpopup-flipped:after {\n        border-bottom-color: transparent;\n        border-top-color: dt('confirmpopup.background');\n    }\n\n    .p-confirmpopup-flipped:before {\n        border-bottom-color: transparent;\n        border-top-color: dt('confirmpopup.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmpopup.mjs
var _c0 = ["content"];
var _c1 = ["accepticon"];
var _c2 = ["rejecticon"];
var _c3 = ["headless"];
var _c4 = ["acceptButton"];
var _c5 = ["rejectButton"];
var _c6 = (a0) => ({
  $implicit: a0
});
function ConfirmPopup_Conditional_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_Conditional_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_Conditional_0_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_ng_template_3_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("icon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("icon"));
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_Conditional_0_ng_template_2_ng_template_3_i_0_Template, 1, 3, "i", 13);
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("message"));
    \u0275\u0275property("pBind", ctx_r1.ptm("message"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.message);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_i_0_Template, 1, 2, "i", 15)(1, ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_1_Template, 2, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon)("ngIfElse", ctx_r1.rejecticon);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function ConfirmPopup_Conditional_0_ng_template_2_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmPopup_Conditional_0_ng_template_2_p_button_6_ng_template_1_Template, 2, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("pcRejectButton"));
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("pt", ctx_r1.ptm("pcRejectButton"))("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonStyleClass)("size", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.size) || "small")("text", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.text) || false)("buttonProps", ctx_r1.getRejectButtonProps())("autofocus", ctx_r1.autoFocusReject)("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.rejectButtonLabel);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_i_0_Template, 1, 2, "i", 15)(1, ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_1_Template, 2, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon)("ngIfElse", ctx_r1.accepticontemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("onClick", function ConfirmPopup_Conditional_0_ng_template_2_p_button_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmPopup_Conditional_0_ng_template_2_p_button_7_ng_template_1_Template, 2, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("pcAcceptButton"));
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("pt", ctx_r1.ptm("pcAcceptButton"))("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonStyleClass)("size", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonProps == null ? null : ctx_r1.confirmation.acceptButtonProps.size) || "small")("buttonProps", ctx_r1.getAcceptButtonProps())("autofocus", ctx_r1.autoFocusAccept)("unstyled", ctx_r1.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r1.acceptButtonLabel);
  }
}
function ConfirmPopup_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 1);
    \u0275\u0275template(2, ConfirmPopup_Conditional_0_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 8)(3, ConfirmPopup_Conditional_0_ng_template_2_ng_template_3_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275template(6, ConfirmPopup_Conditional_0_ng_template_2_p_button_6_Template, 3, 11, "p-button", 11)(7, ConfirmPopup_Conditional_0_ng_template_2_p_button_7_Template, 3, 10, "p-button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const withoutContentTemplate_r5 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275property("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngIfElse", withoutContentTemplate_r5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectVisible) !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptVisible) !== false);
  }
}
function ConfirmPopup_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("pMotionOnBeforeEnter", function ConfirmPopup_Conditional_0_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterLeave", function ConfirmPopup_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAfterLeave());
    })("click", function ConfirmPopup_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275template(1, ConfirmPopup_Conditional_0_ng_container_1_Template, 2, 4, "ng-container", 8)(2, ConfirmPopup_Conditional_0_ng_template_2_Template, 8, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("pMotion", ctx_r1.computedVisible())("pMotionAppear", true)("pMotionName", "p-anchored-overlay")("pMotionOptions", ctx_r1.computedMotionOptions())("pBind", ctx_r1.ptm("root"))("ngStyle", ctx_r1.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
var classes = {
  root: () => ["p-confirmpopup p-component"],
  content: "p-confirmpopup-content",
  icon: ({
    instance
  }) => ["p-confirmpopup-icon", instance.confirmation?.icon],
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
};
var ConfirmPopupStyle = class _ConfirmPopupStyle extends BaseStyle {
  name = "confirmpopup";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmPopupStyle_BaseFactory;
    return function ConfirmPopupStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmPopupStyle_BaseFactory || (\u0275ConfirmPopupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmPopupStyle)))(__ngFactoryType__ || _ConfirmPopupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmPopupStyle,
    factory: _ConfirmPopupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmPopupClasses;
(function(ConfirmPopupClasses2) {
  ConfirmPopupClasses2["root"] = "p-confirmpopup";
  ConfirmPopupClasses2["content"] = "p-confirmpopup-content";
  ConfirmPopupClasses2["icon"] = "p-confirmpopup-icon";
  ConfirmPopupClasses2["message"] = "p-confirmpopup-message";
  ConfirmPopupClasses2["footer"] = "p-confirmpopup-footer";
  ConfirmPopupClasses2["pcRejectButton"] = "p-confirmpopup-reject-button";
  ConfirmPopupClasses2["pcAcceptButton"] = "p-confirmpopup-accept-button";
})(ConfirmPopupClasses || (ConfirmPopupClasses = {}));
var CONFIRMPOPUP_INSTANCE = new InjectionToken("CONFIRMPOPUP_INSTANCE");
var ConfirmPopup = class _ConfirmPopup extends BaseComponent {
  el;
  confirmationService;
  renderer;
  cd;
  overlayService;
  document;
  componentName = "ConfirmPopup";
  $pcConfirmPopup = inject(CONFIRMPOPUP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  hideTransitionOptions = ".1s linear";
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
   * Defines if the component is visible.
   * @group Props
   */
  visible = input(...ngDevMode ? [void 0, {
    debugName: "visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _visible = signal(false, ...ngDevMode ? [{
    debugName: "_visible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedVisible = computed(() => this.visible() ?? this._visible(), ...ngDevMode ? [{
    debugName: "computedVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  render = signal(false, ...ngDevMode ? [{
    debugName: "render"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'body'
   * @group Props
   */
  appendTo = input("body", ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  container;
  subscription;
  confirmation;
  autoFocusAccept = false;
  autoFocusReject = false;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Custom accept icon template.
   * @group Templates
   */
  acceptIconTemplate;
  /**
   * Custom reject icon template.
   * @group Templates
   */
  rejectIconTemplate;
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate;
  acceptButtonViewChild = viewChild("acceptButton", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "acceptButtonViewChild"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  rejectButtonViewChild = viewChild("rejectButton", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rejectButtonViewChild"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  _contentTemplate;
  _acceptIconTemplate;
  _rejectIconTemplate;
  _headlessTemplate;
  documentClickListener;
  documentResizeListener;
  scrollHandler;
  window;
  _componentStyle = inject(ConfirmPopupStyle);
  constructor(el, confirmationService, renderer, cd, overlayService, document) {
    super();
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.overlayService = overlayService;
    this.document = document;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (this.computedVisible()) {
        requestAnimationFrame(() => {
          this.alignOverlay();
          this.cd.markForCheck();
        });
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
        this._visible.set(true);
      }
    });
    effect(() => {
      if (this.computedVisible()) {
        untracked(() => {
          if (!this.render()) {
            this.render.set(true);
          }
        });
      }
    });
  }
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
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
  onEscapeKeydown(event) {
    if (this.confirmation && this.confirmation.closeOnEscape !== false) {
      this.onReject();
    }
  }
  onBeforeEnter(event) {
    if (this.confirmation) {
      const focus = this.confirmation.defaultFocus ?? this.defaultFocus;
      this.autoFocusAccept = focus === "accept";
      this.autoFocusReject = focus === "reject";
    }
    this.container = event.element;
    this.appendOverlay();
    this.alignOverlay();
    this.alignArrow();
    this.setZIndex();
    this.handleFocus();
    this.bindListeners();
  }
  handleFocus() {
    if (this.defaultFocus && (this.acceptButtonViewChild() || this.rejectButtonViewChild())) {
      const focusEl = this.defaultFocus === "accept" ? z(this.acceptButtonViewChild()?.nativeElement, '[data-pc-section="root"]') : z(this.rejectButtonViewChild()?.nativeElement, '[data-pc-section="root"]');
      focusEl.focus();
    }
  }
  onAfterLeave() {
    this.autoFocusAccept = false;
    this.autoFocusReject = false;
    this.restoreAppend();
    this.onContainerDestroy();
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  alignOverlay() {
    if (!this.confirmation || !this.confirmation.target) {
      return;
    }
    D(this.container, this.confirmation?.target, false);
  }
  setZIndex() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.config.zIndex.overlay);
    }
  }
  alignArrow() {
    const containerOffset = K(this.container);
    const targetOffset = K(this.confirmation?.target);
    let arrowLeft = 0;
    if (containerOffset && targetOffset && containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    if (this.container) {
      this.container.style.setProperty("--p-confirmpopup-arrow-left", `${arrowLeft}px`);
    }
    if (containerOffset && targetOffset && containerOffset.top < targetOffset.top) {
      this.container.setAttribute("data-p-confirmpopup-flipped", "true");
      !this.$unstyled() && W(this.container, "p-confirm-popup-flipped");
    }
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.container);
      } else {
        ut(this.$appendTo(), this.container);
      }
    }
  }
  restoreAppend() {
    if (this.container && this.$appendTo() !== "self") {
      ut(this.el.nativeElement, this.container);
    }
    this.onContainerDestroy();
  }
  hide() {
    this._visible.set(false);
  }
  onAccept() {
    if (this.confirmation?.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
    bt(this.confirmation?.target);
  }
  onReject() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
    bt(this.confirmation?.target);
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = Ut() ? "touchstart" : "click";
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
        if (this.confirmation && this.confirmation.dismissableMask !== false) {
          let targetElement = this.confirmation.target;
          if (this.container !== event.target && !this.container?.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
            this.hide();
          }
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.computedVisible() && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation?.target, () => {
        if (this.computedVisible()) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.confirmation = null;
    this.render.set(false);
    this.container = null;
  }
  get acceptButtonLabel() {
    return this.confirmation?.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.confirmation?.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
  }
  onDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function ConfirmPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopup)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmPopup,
    selectors: [["p-confirmpopup"]],
    contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ConfirmPopup_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.acceptButtonViewChild, _c4, 5, ElementRef)(ctx.rejectButtonViewChild, _c5, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostBindings: function ConfirmPopup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.Escape", function ConfirmPopup_keydown_Escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      key: "key",
      defaultFocus: "defaultFocus",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      visible: [1, "visible"],
      motionOptions: [1, "motionOptions"],
      appendTo: [1, "appendTo"]
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmPopupStyle, {
      provide: CONFIRMPOPUP_INSTANCE,
      useExisting: _ConfirmPopup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ConfirmPopup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["notHeadless", ""], ["content", ""], ["withoutContentTemplate", ""], ["icon", ""], ["rejecticon", ""], ["accepticontemplate", ""], ["pFocusTrap", "", "role", "alertdialog", 3, "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind", "class", "ngStyle"], ["pFocusTrap", "", "role", "alertdialog", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "click", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "pBind", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], ["type", "button", 3, "label", "pt", "class", "styleClass", "size", "text", "buttonProps", "autofocus", "unstyled", "onClick", 4, "ngIf"], ["type", "button", 3, "label", "pt", "class", "styleClass", "size", "buttonProps", "autofocus", "unstyled", "onClick", 4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["type", "button", 3, "onClick", "label", "pt", "styleClass", "size", "text", "buttonProps", "autofocus", "unstyled"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["type", "button", 3, "onClick", "label", "pt", "styleClass", "size", "buttonProps", "autofocus", "unstyled"]],
    template: function ConfirmPopup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ConfirmPopup_Conditional_0_Template, 4, 10, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.render() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule, ButtonModule, Button, FocusTrap, Bind, MotionModule, MotionDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopup, [{
    type: Component,
    args: [{
      selector: "p-confirmpopup",
      standalone: true,
      imports: [CommonModule, SharedModule, ButtonModule, FocusTrap, Bind, MotionModule],
      providers: [ConfirmPopupStyle, {
        provide: CONFIRMPOPUP_INSTANCE,
        useExisting: ConfirmPopup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ConfirmPopup
      }],
      hostDirectives: [Bind],
      template: `
        @if (render()) {
            <div
                [pMotion]="computedVisible()"
                [pMotionAppear]="true"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionOptions]="computedMotionOptions()"
                (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                (pMotionOnAfterLeave)="onAfterLeave()"
                pFocusTrap
                [pBind]="ptm('root')"
                [class]="cn(cx('root'), styleClass)"
                [ngStyle]="style"
                role="alertdialog"
                (click)="onOverlayClick($event)"
            >
                <ng-container *ngIf="headlessTemplate || _headlessTemplate; else notHeadless">
                    <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate; context: { $implicit: confirmation }"></ng-container>
                </ng-container>
                <ng-template #notHeadless>
                    <div #content [pBind]="ptm('content')" [class]="cx('content')">
                        <ng-container *ngIf="contentTemplate || _contentTemplate; else withoutContentTemplate">
                            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: confirmation }"></ng-container>
                        </ng-container>
                        <ng-template #withoutContentTemplate>
                            <i [pBind]="ptm('icon')" [class]="cx('icon')" *ngIf="confirmation?.icon"></i>
                            <span [pBind]="ptm('message')" [class]="cx('message')">{{ confirmation?.message }}</span>
                        </ng-template>
                    </div>
                    <div [pBind]="ptm('footer')" [class]="cx('footer')">
                        <p-button
                            type="button"
                            [label]="rejectButtonLabel"
                            (onClick)="onReject()"
                            [pt]="ptm('pcRejectButton')"
                            [class]="cx('pcRejectButton')"
                            [styleClass]="confirmation?.rejectButtonStyleClass"
                            [size]="confirmation?.rejectButtonProps?.size || 'small'"
                            [text]="confirmation?.rejectButtonProps?.text || false"
                            *ngIf="confirmation?.rejectVisible !== false"
                            [attr.aria-label]="rejectButtonLabel"
                            [buttonProps]="getRejectButtonProps()"
                            [autofocus]="autoFocusReject"
                            [unstyled]="unstyled()"
                        >
                            <ng-template #icon>
                                <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                                <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                            </ng-template>
                        </p-button>
                        <p-button
                            type="button"
                            [label]="acceptButtonLabel"
                            (onClick)="onAccept()"
                            [pt]="ptm('pcAcceptButton')"
                            [class]="cx('pcAcceptButton')"
                            [styleClass]="confirmation?.acceptButtonStyleClass"
                            [size]="confirmation?.acceptButtonProps?.size || 'small'"
                            *ngIf="confirmation?.acceptVisible !== false"
                            [attr.aria-label]="acceptButtonLabel"
                            [buttonProps]="getAcceptButtonProps()"
                            [autofocus]="autoFocusAccept"
                            [unstyled]="unstyled()"
                        >
                            <ng-template #icon>
                                <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticontemplate"></i>
                                <ng-template #accepticontemplate *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                            </ng-template>
                        </p-button>
                    </div>
                </ng-template>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ConfirmationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: OverlayService
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    key: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
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
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    acceptButtonViewChild: [{
      type: ViewChild,
      args: ["acceptButton", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    rejectButtonViewChild: [{
      type: ViewChild,
      args: ["rejectButton", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.Escape", ["$event"]]
    }]
  });
})();
var ConfirmPopupModule = class _ConfirmPopupModule {
  static \u0275fac = function ConfirmPopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmPopupModule,
    imports: [ConfirmPopup, SharedModule],
    exports: [ConfirmPopup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmPopup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmPopup, SharedModule],
      exports: [ConfirmPopup, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/app-store/services/app-invite.service.ts
var AppInviteService = class _AppInviteService {
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  baseUrl = `${this.apiUrlService.getCurrentApiUrl()}/telemetrystore/apps`;
  createInvite(appId) {
    return this.http.post(`${this.baseUrl}/${appId}/invites`, {}).pipe(map(mapAppInviteFromApi));
  }
  getInvites(appId) {
    return this.http.get(`${this.baseUrl}/${appId}/invites`).pipe(map((response) => response.items.map(mapAppInviteFromApi)));
  }
  // Returns void — caller navigates away or triggers a fresh install flow
  redeemInvite(appId, inviteId, token) {
    return this.http.post(`${this.baseUrl}/${appId}/invites/${inviteId}/redeem`, { token });
  }
  // Returns updated invite so UI can update list state without a refetch
  revokeInvite(appId, inviteId) {
    return this.http.post(`${this.baseUrl}/${appId}/invites/${inviteId}/revoke`, {}).pipe(map(mapAppInviteFromApi));
  }
  static \u0275fac = function AppInviteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInviteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppInviteService, factory: _AppInviteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInviteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/app-store/components/app-invite-status-badge/app-invite-status-badge.component.ts
var AppInviteStatusBadgeComponent = class _AppInviteStatusBadgeComponent {
  status = input.required(...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  label = computed(() => {
    switch (this.status()) {
      case "pending":
        return "Pending";
      case "redeemed":
        return "Redeemed";
      case "expired":
        return "Expired";
      case "revoked":
        return "Revoked";
    }
  }, ...ngDevMode ? [{ debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  badgeClass = computed(() => {
    switch (this.status()) {
      case "pending":
        return "invite-pending";
      case "redeemed":
        return "invite-redeemed";
      case "expired":
        return "invite-expired";
      case "revoked":
        return "invite-revoked";
    }
  }, ...ngDevMode ? [{ debugName: "badgeClass" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppInviteStatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInviteStatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppInviteStatusBadgeComponent, selectors: [["app-invite-status-badge"]], inputs: { status: [1, "status"] }, decls: 2, vars: 2, consts: [[1, "px-2", "py-0.5", "rounded-full", "text-[10px]", "font-medium", "uppercase", "tracking-wider", 3, "ngClass"]], template: function AppInviteStatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.badgeClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(), "\n");
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n.invite-pending[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity, 1));\n}\n.invite-redeemed[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(220 252 231 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.invite-expired[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-400) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n.invite-revoked[_ngcontent-%COMP%] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(254 226 226 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=app-invite-status-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppInviteStatusBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-invite-status-badge", standalone: true, imports: [CommonModule], template: '<span\n  class="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider"\n  [ngClass]="badgeClass()"\n>\n  {{ label() }}\n</span>\n', styles: ["/* src/app/features/app-store/components/app-invite-status-badge/app-invite-status-badge.component.scss */\n.invite-pending {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity, 1));\n}\n.invite-redeemed {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(220 252 231 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.invite-expired {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: color-mix(in srgb, var(--p-surface-200) calc(100% * var(--tw-border-opacity, 1)), transparent);\n  --tw-text-opacity: 1;\n  color: color-mix(in srgb, var(--p-surface-400) calc(100% * var(--tw-text-opacity, 1)), transparent);\n}\n.invite-revoked {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(254 226 226 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=app-invite-status-badge.component.css.map */\n"] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppInviteStatusBadgeComponent, { className: "AppInviteStatusBadgeComponent", filePath: "src/app/features/app-store/components/app-invite-status-badge/app-invite-status-badge.component.ts", lineNumber: 12 });
})();

export {
  ConfirmPopup,
  ConfirmPopupModule,
  AppInviteService,
  AppInviteStatusBadgeComponent
};
//# sourceMappingURL=chunk-CSOVKPGS.js.map
