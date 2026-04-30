import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  inject,
  input,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-PNETQGIO.js";

// src/app/shared/directives/img-fallback.directive.ts
var ImgFallbackDirective = class _ImgFallbackDirective {
  fallbackText = input("?", ...ngDevMode ? [{ debugName: "fallbackText" }] : (
    /* istanbul ignore next */
    []
  ));
  imgRef = inject(ElementRef);
  renderer = inject(Renderer2);
  ngOnInit() {
    const img = this.imgRef.nativeElement;
    if (img.complete && img.naturalWidth === 0) {
      this.showFallback();
    }
  }
  onError() {
    this.showFallback();
  }
  showFallback() {
    const img = this.imgRef.nativeElement;
    if (!img.parentElement)
      return;
    const fallback = this.renderer.createElement("div");
    const imgClasses = Array.from(img.classList);
    const sizeClasses = imgClasses.filter((cls) => cls.startsWith("w-") || cls.startsWith("h-") || cls.startsWith("rounded") || cls.startsWith("shadow"));
    const classes = [
      ...sizeClasses,
      "flex",
      "items-center",
      "justify-center",
      "bg-primary",
      "text-primary-contrast",
      this.textSizeFromImgClasses(imgClasses),
      "font-medium",
      "select-none",
      "shrink-0"
    ];
    classes.forEach((cls) => this.renderer.addClass(fallback, cls));
    const text = this.renderer.createText((this.fallbackText() ?? "?").charAt(0).toUpperCase());
    this.renderer.appendChild(fallback, text);
    img.parentElement.replaceChild(fallback, img);
  }
  /** Pick a text size proportional to the w-* value on the image. */
  textSizeFromImgClasses(classes) {
    const widthClass = classes.find((cls) => /^w-\d+$/.test(cls)) ?? "";
    const size = widthClass ? Number.parseInt(widthClass.slice(2), 10) : 0;
    if (size >= 28)
      return "text-4xl";
    if (size >= 16)
      return "text-3xl";
    if (size >= 10)
      return "text-2xl";
    return "text-sm";
  }
  static \u0275fac = function ImgFallbackDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImgFallbackDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ImgFallbackDirective, selectors: [["img", "appImgFallback", ""]], hostBindings: function ImgFallbackDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("error", function ImgFallbackDirective_error_HostBindingHandler() {
        return ctx.onError();
      });
    }
  }, inputs: { fallbackText: [1, "fallbackText"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgFallbackDirective, [{
    type: Directive,
    args: [{
      selector: "img[appImgFallback]",
      standalone: true
    }]
  }], null, { fallbackText: [{ type: Input, args: [{ isSignal: true, alias: "fallbackText", required: false }] }], onError: [{
    type: HostListener,
    args: ["error"]
  }] });
})();

export {
  ImgFallbackDirective
};
//# sourceMappingURL=chunk-6TCB2NTQ.js.map
