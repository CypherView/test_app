import {
  BaseEditableHolder,
  NG_VALUE_ACCESSOR
} from "./chunk-ELMGQUTA.js";
import {
  AutoFocus
} from "./chunk-4VRJFGPA.js";
import {
  $,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  P,
  PARENT_INSTANCE,
  SharedModule,
  V,
  W,
  k
} from "./chunk-NTFNF324.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  isPlatformBrowser
} from "./chunk-2Y2RLXE3.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-VOGNWKLY.js";

// node_modules/@primeuix/styles/dist/slider/index.mjs
var style = "\n    .p-slider {\n        display: block;\n        position: relative;\n        background: dt('slider.track.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider-handle {\n        cursor: grab;\n        touch-action: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: dt('slider.handle.height');\n        width: dt('slider.handle.width');\n        background: dt('slider.handle.background');\n        border-radius: dt('slider.handle.border.radius');\n        transition:\n            background dt('slider.transition.duration'),\n            color dt('slider.transition.duration'),\n            border-color dt('slider.transition.duration'),\n            box-shadow dt('slider.transition.duration'),\n            outline-color dt('slider.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-slider-handle::before {\n        content: '';\n        width: dt('slider.handle.content.width');\n        height: dt('slider.handle.content.height');\n        display: block;\n        background: dt('slider.handle.content.background');\n        border-radius: dt('slider.handle.content.border.radius');\n        box-shadow: dt('slider.handle.content.shadow');\n        transition: background dt('slider.transition.duration');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover {\n        background: dt('slider.handle.hover.background');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {\n        background: dt('slider.handle.content.hover.background');\n    }\n\n    .p-slider-handle:focus-visible {\n        box-shadow: dt('slider.handle.focus.ring.shadow');\n        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');\n        outline-offset: dt('slider.handle.focus.ring.offset');\n    }\n\n    .p-slider-range {\n        display: block;\n        background: dt('slider.range.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider.p-slider-horizontal {\n        height: dt('slider.track.size');\n    }\n\n    .p-slider-horizontal .p-slider-range {\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        height: 100%;\n    }\n\n    .p-slider-horizontal .p-slider-handle {\n        inset-block-start: 50%;\n        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));\n        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));\n    }\n\n    .p-slider-vertical {\n        min-height: 100px;\n        width: dt('slider.track.size');\n    }\n\n    .p-slider-vertical .p-slider-handle {\n        inset-inline-start: 50%;\n        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));\n        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));\n    }\n\n    .p-slider-vertical .p-slider-range {\n        inset-block-end: 0;\n        inset-inline-start: 0;\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-slider.mjs
var _c0 = ["sliderHandle"];
var _c1 = ["sliderHandleStart"];
var _c2 = ["sliderHandleEnd"];
var _c3 = (a0, a1) => ({
  "inset-inline-start": a0,
  width: a1
});
var _c4 = (a0, a1) => ({
  bottom: a0,
  height: a1
});
var _c5 = (a0) => ({
  height: a0
});
var _c6 = (a0) => ({
  width: a0
});
var _c7 = (a0, a1) => ({
  "inset-inline-start": a0,
  bottom: a1
});
function Slider_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c3, ctx_r0.offset !== null && ctx_r0.offset !== void 0 ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c4, ctx_r0.offset !== null && ctx_r0.offset !== void 0 ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c5, ctx_r0.handleValue + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range");
  }
}
function Slider_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c6, ctx_r0.handleValue + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range");
  }
}
function Slider_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9, 0);
    \u0275\u0275listener("touchstart", function Slider_span_4_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event));
    })("touchmove", function Slider_span_4_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_4_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    })("mousedown", function Slider_span_4_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event));
    })("keydown", function Slider_span_4_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cx("handle"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(18, _c7, ctx_r0.orientation == "horizontal" ? ctx_r0.handleValue + "%" : null, ctx_r0.orientation == "vertical" ? ctx_r0.handleValue + "%" : null))("pAutoFocus", ctx_r0.autofocus)("pBind", ctx_r0.ptm("handle"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "handle")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10, 1);
    \u0275\u0275listener("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, 0));
    })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, 0));
    })("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event, 0));
    })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("handle"), ctx_r0.handleIndex == 0 && "p-slider-handle-active"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(18, _c7, ctx_r0.rangeStartLeft, ctx_r0.rangeStartBottom))("pAutoFocus", ctx_r0.autofocus)("pBind", ctx_r0.ptm("startHandler"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[0] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "startHandler")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11, 2);
    \u0275\u0275listener("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, 1));
    })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, 1));
    })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event, 1));
    })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("handle"), ctx_r0.handleIndex == 1 && "p-slider-handle-active"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(17, _c7, ctx_r0.rangeEndLeft, ctx_r0.rangeEndBottom))("pBind", ctx_r0.ptm("endHandler"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[1] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "endHandler")("data-p", ctx_r0.dataP);
  }
}
var inlineStyles = {
  handle: {
    position: "absolute"
  },
  range: {
    position: "absolute"
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-slider p-component", {
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-slider-horizontal": instance.orientation === "horizontal",
    "p-slider-vertical": instance.orientation === "vertical",
    "p-slider-animate": instance.animate
  }],
  range: "p-slider-range",
  handle: "p-slider-handle"
};
var SliderStyle = class _SliderStyle extends BaseStyle {
  name = "slider";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SliderStyle_BaseFactory;
    return function SliderStyle_Factory(__ngFactoryType__) {
      return (\u0275SliderStyle_BaseFactory || (\u0275SliderStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SliderStyle)))(__ngFactoryType__ || _SliderStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SliderStyle,
    factory: _SliderStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderStyle, [{
    type: Injectable
  }], null, null);
})();
var SliderClasses;
(function(SliderClasses2) {
  SliderClasses2["root"] = "p-slider";
  SliderClasses2["range"] = "p-slider-range";
  SliderClasses2["handle"] = "p-slider-handle";
})(SliderClasses || (SliderClasses = {}));
var SLIDER_INSTANCE = new InjectionToken("SLIDER_INSTANCE");
var SLIDER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Slider),
  multi: true
};
var Slider = class _Slider extends BaseEditableHolder {
  componentName = "Slider";
  $pcSlider = inject(SLIDER_INSTANCE, {
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
   * When enabled, displays an animation on click of the slider bar.
   * @group Props
   */
  animate;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Orientation of the slider.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step;
  /**
   * When specified, allows two boundary values to be picked.
   * @group Props
   */
  range;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {SliderChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when slide ended.
   * @param {SliderSlideEndEvent} event - Custom slide end event.
   * @group Emits
   */
  onSlideEnd = new EventEmitter();
  sliderHandle;
  sliderHandleStart;
  sliderHandleEnd;
  _componentStyle = inject(SliderStyle);
  value;
  values;
  handleValue;
  handleValues = [];
  diff;
  offset;
  bottom;
  dragging;
  dragListener;
  mouseupListener;
  initX;
  initY;
  barWidth;
  barHeight;
  sliderHandleClick;
  handleIndex = 0;
  startHandleValue;
  startx;
  starty;
  ngZone = inject(NgZone);
  onHostClick(event) {
    this.onBarClick(event);
  }
  onMouseDown(event, index) {
    if (this.$disabled()) {
      return;
    }
    this.dragging = true;
    this.updateDomData();
    this.sliderHandleClick = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    this.bindDragListeners();
    event.target.focus();
    event.preventDefault();
    if (this.animate) {
      P(this.el.nativeElement, "p-slider-animate");
    }
  }
  onDragStart(event, index) {
    if (this.$disabled()) {
      return;
    }
    this.el.nativeElement.setAttribute("data-p-sliding", true);
    var touchobj = event.changedTouches[0];
    this.startHandleValue = this.range ? this.handleValues[index] : this.handleValue;
    this.dragging = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    if (this.orientation === "horizontal") {
      this.startx = parseInt(touchobj.clientX, 10);
      this.barWidth = this.el.nativeElement.offsetWidth;
    } else {
      this.starty = parseInt(touchobj.clientY, 10);
      this.barHeight = this.el.nativeElement.offsetHeight;
    }
    if (this.animate) {
      P(this.el.nativeElement, "p-slider-animate");
    }
    event.preventDefault();
  }
  onDrag(event) {
    if (this.$disabled()) {
      return;
    }
    var touchobj = event.changedTouches[0], handleValue = 0;
    if (this.orientation === "horizontal") {
      handleValue = Math.floor((parseInt(touchobj.clientX, 10) - this.startx) * 100 / this.barWidth) + this.startHandleValue;
    } else {
      handleValue = Math.floor((this.starty - parseInt(touchobj.clientY, 10)) * 100 / this.barHeight) + this.startHandleValue;
    }
    this.setValueFromHandle(event, handleValue);
    event.preventDefault();
  }
  onDragEnd(event) {
    if (this.$disabled()) {
      return;
    }
    this.dragging = false;
    this.el.nativeElement.setAttribute("data-p-sliding", false);
    if (this.range) this.onSlideEnd.emit({
      originalEvent: event,
      values: this.values
    });
    else this.onSlideEnd.emit({
      originalEvent: event,
      value: this.value
    });
    if (this.animate) {
      W(this.el.nativeElement, "p-slider-animate");
    }
    event.preventDefault();
  }
  onBarClick(event) {
    if (this.$disabled()) {
      return;
    }
    if (!this.sliderHandleClick) {
      this.updateDomData();
      this.handleChange(event);
      if (this.range) this.onSlideEnd.emit({
        originalEvent: event,
        values: this.values
      });
      else this.onSlideEnd.emit({
        originalEvent: event,
        value: this.value
      });
    }
    this.sliderHandleClick = false;
  }
  onKeyDown(event, index) {
    this.handleIndex = index;
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        this.decrementValue(event, index);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.incrementValue(event, index);
        event.preventDefault();
        break;
      case "PageDown":
        this.decrementValue(event, index, true);
        event.preventDefault();
        break;
      case "PageUp":
        this.incrementValue(event, index, true);
        event.preventDefault();
        break;
      case "Home":
        this.updateValue(this.min, event);
        event.preventDefault();
        break;
      case "End":
        this.updateValue(this.max, event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  decrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = (this.values?.[index] ?? 0) - this.step;
      else newValue = (this.values?.[index] ?? 0) - 1;
    } else {
      if (this.step) newValue = this.value - this.step;
      else if (!this.step && pageKey) newValue = this.value - 10;
      else newValue = this.value - 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  incrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = (this.values?.[index] ?? 0) + this.step;
      else newValue = (this.values?.[index] ?? 0) + 1;
    } else {
      if (this.step) newValue = this.value + this.step;
      else if (!this.step && pageKey) newValue = this.value + 10;
      else newValue = this.value + 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  handleChange(event) {
    let handleValue = this.calculateHandleValue(event);
    this.setValueFromHandle(event, handleValue);
  }
  bindDragListeners() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        if (!this.dragListener) {
          this.dragListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
            if (this.dragging) {
              this.el.nativeElement.setAttribute("data-p-sliding", true);
              this.ngZone.run(() => {
                this.handleChange(event);
              });
            }
          });
        }
        if (!this.mouseupListener) {
          this.mouseupListener = this.renderer.listen(documentTarget, "mouseup", (event) => {
            if (this.dragging) {
              this.dragging = false;
              this.el.nativeElement.setAttribute("data-p-sliding", false);
              this.ngZone.run(() => {
                if (this.range) this.onSlideEnd.emit({
                  originalEvent: event,
                  values: this.values
                });
                else this.onSlideEnd.emit({
                  originalEvent: event,
                  value: this.value
                });
                if (this.animate) {
                  W(this.el.nativeElement, "p-slider-animate");
                }
              });
            }
          });
        }
      });
    }
  }
  unbindDragListeners() {
    if (this.dragListener) {
      this.dragListener();
      this.dragListener = null;
    }
    if (this.mouseupListener) {
      this.mouseupListener();
      this.mouseupListener = null;
    }
  }
  setValueFromHandle(event, handleValue) {
    let newValue = this.getValueFromHandle(handleValue);
    if (this.range) {
      if (this.step) {
        this.handleStepChange(newValue, this.values[this.handleIndex]);
      } else {
        this.handleValues[this.handleIndex] = handleValue;
        this.updateValue(newValue, event);
      }
    } else {
      if (this.step) {
        this.handleStepChange(newValue, this.value);
      } else {
        this.handleValue = handleValue;
        this.updateValue(newValue, event);
      }
    }
    this.cd.markForCheck();
  }
  handleStepChange(newValue, oldValue) {
    let diff = newValue - oldValue;
    let val = oldValue;
    let _step = this.step;
    if (diff < 0) {
      val = oldValue + Math.ceil(newValue / _step - oldValue / _step) * _step;
    } else if (diff > 0) {
      val = oldValue + Math.floor(newValue / _step - oldValue / _step) * _step;
    }
    this.updateValue(val);
    this.updateHandleValue();
  }
  get rangeStartLeft() {
    if (!this.isVertical()) return this.handleValues[0] > 100 ? "100%" : this.handleValues[0] + "%";
    return null;
  }
  get rangeStartBottom() {
    return this.isVertical() ? this.handleValues[0] + "%" : "auto";
  }
  get rangeEndLeft() {
    return this.isVertical() ? null : this.handleValues[1] + "%";
  }
  get rangeEndBottom() {
    return this.isVertical() ? this.handleValues[1] + "%" : "auto";
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  updateDomData() {
    let rect = this.el.nativeElement.getBoundingClientRect();
    this.initX = rect.left + k();
    this.initY = rect.top + $();
    this.barWidth = this.el.nativeElement.offsetWidth;
    this.barHeight = this.el.nativeElement.offsetHeight;
  }
  calculateHandleValue(event) {
    if (this.orientation === "horizontal") {
      if (V(this.el.nativeElement)) {
        return (this.initX + this.barWidth - event.pageX) * 100 / this.barWidth;
      } else {
        return (event.pageX - this.initX) * 100 / this.barWidth;
      }
    } else {
      return (this.initY + this.barHeight - event.pageY) * 100 / this.barHeight;
    }
  }
  updateHandleValue() {
    if (this.range) {
      this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
      this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
    } else {
      if (this.value < this.min) this.handleValue = 0;
      else if (this.value > this.max) this.handleValue = 100;
      else this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
    }
    if (this.step) {
      this.updateDiffAndOffset();
    }
  }
  updateDiffAndOffset() {
    this.diff = this.getDiff();
    this.offset = this.getOffset();
  }
  getDiff() {
    return Math.abs(this.handleValues[0] - this.handleValues[1]);
  }
  getOffset() {
    return Math.min(this.handleValues[0], this.handleValues[1]);
  }
  updateValue(val, event) {
    if (this.range) {
      let value = val;
      if (this.handleIndex == 0) {
        if (value < this.min) {
          value = this.min;
          this.handleValues[0] = 0;
        } else if (value > this.values[1]) {
          if (value > this.max) {
            value = this.max;
            this.handleValues[0] = 100;
          }
        }
        this.sliderHandleStart?.nativeElement.focus();
      } else {
        if (value > this.max) {
          value = this.max;
          this.handleValues[1] = 100;
          this.offset = this.handleValues[1];
        } else if (value < this.min) {
          value = this.min;
          this.handleValues[1] = 0;
        } else if (value < this.values[0]) {
          this.offset = this.handleValues[1];
        }
        this.sliderHandleEnd?.nativeElement.focus();
      }
      if (this.step) {
        this.updateHandleValue();
      } else {
        this.updateDiffAndOffset();
      }
      this.values[this.handleIndex] = this.getNormalizedValue(value);
      let newValues = [this.minVal, this.maxVal];
      this.onModelChange(newValues);
      this.onChange.emit({
        event,
        values: this.values
      });
    } else {
      if (val < this.min) {
        val = this.min;
        this.handleValue = 0;
      } else if (val > this.max) {
        val = this.max;
        this.handleValue = 100;
      }
      this.value = this.getNormalizedValue(val);
      this.onModelChange(this.value);
      this.onChange.emit({
        event,
        value: this.value
      });
      this.sliderHandle?.nativeElement.focus();
    }
    this.updateHandleValue();
  }
  getValueFromHandle(handleValue) {
    return (this.max - this.min) * (handleValue / 100) + this.min;
  }
  getDecimalsCount(value) {
    if (value && Math.floor(value) !== value) return value.toString().split(".")[1].length || 0;
    return 0;
  }
  getNormalizedValue(val) {
    let decimalsCount = this.getDecimalsCount(this.step);
    if (decimalsCount > 0) {
      return +parseFloat(val.toString()).toFixed(decimalsCount);
    } else {
      return Math.floor(val);
    }
  }
  onDestroy() {
    this.unbindDragListeners();
  }
  get minVal() {
    return Math.min(this.values[1], this.values[0]);
  }
  get maxVal() {
    return Math.max(this.values[1], this.values[0]);
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    if (this.range) this.values = value || [0, 0];
    else this.value = value || 0;
    this.updateHandleValue();
    this.updateDiffAndOffset();
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      [this.orientation]: this.orientation
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Slider_BaseFactory;
    return function Slider_Factory(__ngFactoryType__) {
      return (\u0275Slider_BaseFactory || (\u0275Slider_BaseFactory = \u0275\u0275getInheritedFactory(_Slider)))(__ngFactoryType__ || _Slider);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Slider,
    selectors: [["p-slider"]],
    viewQuery: function Slider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandleStart = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandleEnd = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function Slider_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Slider_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "slider")("data-pc-section", "root")("data-p", ctx.dataP)("data-p-sliding", false);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      animate: [2, "animate", "animate", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      orientation: "orientation",
      step: [2, "step", "step", numberAttribute],
      range: [2, "range", "range", booleanAttribute],
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onSlideEnd: "onSlideEnd"
    },
    features: [\u0275\u0275ProvidersFeature([SLIDER_VALUE_ACCESSOR, SliderStyle, {
      provide: SLIDER_INSTANCE,
      useExisting: _Slider
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Slider
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 7,
    vars: 7,
    consts: [["sliderHandle", ""], ["sliderHandleStart", ""], ["sliderHandleEnd", ""], [3, "class", "ngStyle", "style", "pBind", 4, "ngIf"], [3, "class", "style", "ngStyle", "pBind", 4, "ngIf"], ["role", "slider", 3, "class", "transition", "ngStyle", "style", "pAutoFocus", "pBind", "touchstart", "touchmove", "touchend", "mousedown", "keydown", 4, "ngIf"], ["role", "slider", 3, "transition", "class", "style", "ngStyle", "pAutoFocus", "pBind", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["role", "slider", 3, "transition", "class", "ngStyle", "style", "pBind", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [3, "ngStyle", "pBind"], ["role", "slider", 3, "touchstart", "touchmove", "touchend", "mousedown", "keydown", "ngStyle", "pAutoFocus", "pBind"], ["role", "slider", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "pAutoFocus", "pBind"], ["role", "slider", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "pBind"]],
    template: function Slider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Slider_span_0_Template, 1, 11, "span", 3)(1, Slider_span_1_Template, 1, 11, "span", 3)(2, Slider_span_2_Template, 1, 9, "span", 4)(3, Slider_span_3_Template, 1, 9, "span", 4)(4, Slider_span_4_Template, 2, 21, "span", 5)(5, Slider_span_5_Template, 2, 21, "span", 6)(6, Slider_span_6_Template, 2, 20, "span", 7);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.range && ctx.orientation == "horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range && ctx.orientation == "vertical");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range && ctx.orientation == "vertical");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range && ctx.orientation == "horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range);
      }
    },
    dependencies: [CommonModule, NgIf, NgStyle, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Slider, [{
    type: Component,
    args: [{
      selector: "p-slider",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <span
            *ngIf="range && orientation == 'horizontal'"
            [class]="cx('range')"
            [ngStyle]="{
                'inset-inline-start': offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%',
                width: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%'
            }"
            [style]="sx('range')"
            [attr.data-pc-section]="'range'"
            [attr.data-p]="dataP"
            [pBind]="ptm('range')"
        ></span>
        <span
            *ngIf="range && orientation == 'vertical'"
            [class]="cx('range')"
            [ngStyle]="{
                bottom: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%',
                height: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%'
            }"
            [style]="sx('range')"
            [attr.data-pc-section]="'range'"
            [attr.data-p]="dataP"
            [pBind]="ptm('range')"
        ></span>
        <span *ngIf="!range && orientation == 'vertical'" [class]="cx('range')" [attr.data-pc-section]="'range'" [style]="sx('range')" [ngStyle]="{ height: handleValue + '%' }" [pBind]="ptm('range')"></span>
        <span *ngIf="!range && orientation == 'horizontal'" [class]="cx('range')" [attr.data-pc-section]="'range'" [style]="sx('range')" [ngStyle]="{ width: handleValue + '%' }" [pBind]="ptm('range')"></span>
        <span
            *ngIf="!range"
            #sliderHandle
            [class]="cx('handle')"
            [style.transition]="dragging ? 'none' : null"
            [ngStyle]="{
                'inset-inline-start': orientation == 'horizontal' ? handleValue + '%' : null,
                bottom: orientation == 'vertical' ? handleValue + '%' : null
            }"
            [style]="sx('handle')"
            (touchstart)="onDragStart($event)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            (mousedown)="onMouseDown($event)"
            (keydown)="onKeyDown($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'handle'"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('handle')"
            [attr.data-p]="dataP"
        ></span>
        <span
            *ngIf="range"
            #sliderHandleStart
            [style.transition]="dragging ? 'none' : null"
            [class]="cn(cx('handle'), handleIndex == 0 && 'p-slider-handle-active')"
            [style]="sx('handle')"
            [ngStyle]="{ 'inset-inline-start': rangeStartLeft, bottom: rangeStartBottom }"
            (keydown)="onKeyDown($event, 0)"
            (mousedown)="onMouseDown($event, 0)"
            (touchstart)="onDragStart($event, 0)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value ? value[0] : null"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'startHandler'"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('startHandler')"
            [attr.data-p]="dataP"
        ></span>
        <span
            *ngIf="range"
            #sliderHandleEnd
            [style.transition]="dragging ? 'none' : null"
            [class]="cn(cx('handle'), handleIndex == 1 && 'p-slider-handle-active')"
            [ngStyle]="{ 'inset-inline-start': rangeEndLeft, bottom: rangeEndBottom }"
            [style]="sx('handle')"
            (keydown)="onKeyDown($event, 1)"
            (mousedown)="onMouseDown($event, 1)"
            (touchstart)="onDragStart($event, 1)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value ? value[1] : null"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'endHandler'"
            [pBind]="ptm('endHandler')"
            [attr.data-p]="dataP"
        ></span>
    `,
      providers: [SLIDER_VALUE_ACCESSOR, SliderStyle, {
        provide: SLIDER_INSTANCE,
        useExisting: Slider
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Slider
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.data-pc-name]": "'slider'",
        "[attr.data-pc-section]": "'root'",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP",
        "[attr.data-p-sliding]": "false"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    animate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    range: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onSlideEnd: [{
      type: Output
    }],
    sliderHandle: [{
      type: ViewChild,
      args: ["sliderHandle"]
    }],
    sliderHandleStart: [{
      type: ViewChild,
      args: ["sliderHandleStart"]
    }],
    sliderHandleEnd: [{
      type: ViewChild,
      args: ["sliderHandleEnd"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SliderModule = class _SliderModule {
  static \u0275fac = function SliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SliderModule,
    imports: [Slider, SharedModule],
    exports: [Slider, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Slider, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      imports: [Slider, SharedModule],
      exports: [Slider, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-eye.mjs
var _c02 = ["data-p-icon", "eye"];
var EyeIcon = class _EyeIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EyeIcon_BaseFactory;
    return function EyeIcon_Factory(__ngFactoryType__) {
      return (\u0275EyeIcon_BaseFactory || (\u0275EyeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_EyeIcon)))(__ngFactoryType__ || _EyeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _EyeIcon,
    selectors: [["", "data-p-icon", "eye"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z", "fill", "currentColor"]],
    template: function EyeIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EyeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="eye"]',
      standalone: true,
      template: `
        <svg:path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

export {
  EyeIcon,
  Slider,
  SliderModule
};
//# sourceMappingURL=chunk-IOKQPKSK.js.map
