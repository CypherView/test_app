import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BXWMGUI5.js";
import {
  TranslatePipe
} from "./chunk-PJU4CPF7.js";
import {
  ClientDataService,
  HttpClient,
  ThemeDataService,
  isDefined,
  isNullOrUndefined,
  takeUntilDestroyed
} from "./chunk-3BUMZ5QM.js";
import {
  Component,
  DOCUMENT,
  DestroyRef,
  HostBinding,
  RendererFactory2,
  Subject,
  computed,
  effect,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  skip,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-URNEIHHT.js";

// src/app/shared/components/theme/theme.component.ts
var _c0 = ["*"];
function ThemeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "p-progressSpinner", 2);
    \u0275\u0275elementStart(3, "p", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "SHARED.THEME.LOADING_THEME"), " ");
  }
}
var ThemeComponent = class _ThemeComponent {
  static THEME_OPERATION_TIMEOUT_MS = 5e3;
  static FONT_LOAD_TIMEOUT_MS = 3e3;
  destroyRef = inject(DestroyRef);
  themeService = inject(ThemeDataService);
  clientDataService = inject(ClientDataService);
  renderer = inject(RendererFactory2).createRenderer(null, null);
  document = inject(DOCUMENT);
  http = inject(HttpClient);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  static LOADING_DEBOUNCE_MS = 200;
  hasNativeCssVariableSupport = computed(() => {
    const window = this.document.defaultView;
    return window?.CSS?.supports?.("(--a: 0)") === true;
  }, ...ngDevMode ? [{ debugName: "hasNativeCssVariableSupport" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = "";
  // Static: <app-theme> is instantiated in several layouts but all write to the
  // same global DOM (head tags, :root variables), so teardown bookkeeping and
  // the stale-apply guard must survive instance destruction.
  static themeGeneration = 0;
  static appliedVarKeys = [];
  previousClientId = void 0;
  previousThemeId = void 0;
  cancelPendingThemeRequest$ = new Subject();
  currentHostname = this.document.location?.hostname ?? this.document.defaultView?.location.hostname ?? "localhost";
  constructor() {
    effect(() => {
      const selectedClient = this.clientDataService.getSelectedClient();
      const clientToUse = selectedClient ?? this.clientDataService.getPreviewClient();
      if (isDefined(clientToUse)) {
        const themeId = this.getThemeId(clientToUse);
        const isClientUpdateWithoutTheme = clientToUse.id === this.previousClientId && !isDefined(clientToUse.theme?.id) && isDefined(this.previousThemeId);
        if (isClientUpdateWithoutTheme) {
          return;
        }
        if (clientToUse.id !== this.previousClientId || themeId !== this.previousThemeId) {
          this.cancelPendingThemeRequest$.next();
          this.updateTheme(themeId);
          this.previousClientId = clientToUse.id;
          this.previousThemeId = themeId;
        }
      } else {
        if (this.previousThemeId !== "default") {
          this.cancelPendingThemeRequest$.next();
          this.updateTheme("default");
          this.previousThemeId = "default";
        }
        this.previousClientId = void 0;
      }
    });
  }
  ngOnInit() {
    this.themeService.theme$.pipe(skip(1), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (theme) => {
        if (!theme) {
          this.loading.set(false);
          return;
        }
        this.loadTheme(theme).catch((error) => console.error("Error loading theme:", error));
      },
      error: (err) => {
        this.loading.set(false);
        console.error("Error fetching theme:", err);
      }
    });
  }
  async loadTheme(theme) {
    const timer = setTimeout(() => this.loading.set(true), _ThemeComponent.LOADING_DEBOUNCE_MS);
    try {
      const gen = ++_ThemeComponent.themeGeneration;
      const previousVarKeys = _ThemeComponent.appliedVarKeys;
      this.teardownPreviousTheme();
      await this.processTheme(theme, gen);
      if (gen === _ThemeComponent.themeGeneration) {
        this.removeStaleVariables(previousVarKeys);
      }
    } catch (error) {
      console.error("Theme loading error:", error);
    } finally {
      clearTimeout(timer);
      this.loading.set(false);
    }
  }
  /**
   * Removes the previous theme's global DOM artifacts (custom tags + injected
   * CSS) so switching clients never leaves old tags or styles behind.
   *
   * Note: CSS *variables* are intentionally NOT removed here. Stripping them
   * before the new theme is written leaves :root varless for a moment, during
   * which PrimeNG components fall back to the Aura preset's default palette
   * (dark grey + orange). Instead, the new variables are written first and only
   * the now-stale keys are removed afterwards — see removeStaleVariables().
   */
  teardownPreviousTheme() {
    for (const element of Array.from(this.document.querySelectorAll('[id^="custom-tag-"]'))) {
      element.remove();
    }
    const customCss = this.document.getElementById("custom-css");
    if (customCss)
      customCss.textContent = "";
    const externalCss = this.document.getElementById("external-css");
    if (externalCss)
      externalCss.textContent = "";
    this.classes = "";
  }
  /**
   * Removes CSS variables that the PREVIOUS theme set but the NEW theme does
   * not, called AFTER the new theme's variables are written. This keeps :root
   * continuously populated with a valid brand palette (no flash of the Aura
   * default theme) while still cleaning up variables that no longer apply.
   */
  removeStaleVariables(previousVarKeys) {
    const currentKeys = new Set(_ThemeComponent.appliedVarKeys);
    for (const key of previousVarKeys) {
      if (!currentKeys.has(key)) {
        this.document.documentElement.style.removeProperty(key);
      }
    }
  }
  processCustomTags(theme) {
    if (!theme.customTags)
      return;
    let index = 0;
    for (const customTag of theme.customTags) {
      this.appendHTML(`custom-tag-${index}`, customTag.location, customTag.tag, customTag.attributes, customTag.contents);
      index++;
    }
  }
  async processThemeVariables(theme, gen) {
    if (!theme.variables)
      return;
    await this.injectSettingsVariables(theme.variables, gen);
    if (gen !== _ThemeComponent.themeGeneration)
      return;
    this.updateClasses(theme.variables);
  }
  async processTheme(theme, gen) {
    await Promise.allSettled([
      this.withTimeout(this.processThemeVariables(theme, gen), _ThemeComponent.THEME_OPERATION_TIMEOUT_MS, "processThemeVariables"),
      this.withTimeout(this.loadExternalStyles(theme, gen), _ThemeComponent.THEME_OPERATION_TIMEOUT_MS, "loadExternalStyles"),
      this.withTimeout(this.injectCustomStyles(theme), _ThemeComponent.THEME_OPERATION_TIMEOUT_MS, "injectCustomStyles"),
      Promise.resolve(this.processCustomTags(theme))
    ]);
  }
  async withTimeout(operation, timeoutMs, operationName) {
    let timeoutId;
    try {
      return await Promise.race([
        operation,
        new Promise((resolve) => {
          timeoutId = setTimeout(() => {
            console.warn(`Theme operation timed out after ${timeoutMs}ms: ${operationName}`);
            resolve();
          }, timeoutMs);
        })
      ]);
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }
  async loadExternalStyles(theme, gen) {
    if (!theme.settings?.["cssSrc"])
      return;
    try {
      const response = await firstValueFrom(this.http.get(theme.settings["cssSrc"], {
        responseType: "text"
      }));
      if (gen !== _ThemeComponent.themeGeneration)
        return;
      await this.injectStyle("external-css", response);
    } catch (error) {
      console.error("Failed to load external styles:", error);
    }
  }
  async injectCustomStyles(theme) {
    if (isNullOrUndefined(theme.customStyles))
      return;
    try {
      await this.injectStyle("custom-css", theme.customStyles);
    } catch (error) {
      console.error("Failed to inject custom styles:", error);
    }
  }
  updateClasses(variables) {
    const classes = [];
    if (variables["--main-gutter-width"] && !["0", "0px", "0rem"].includes(variables["--main-gutter-width"])) {
      classes.push("app-has-gutter");
    }
    this.classes = classes.join(" ");
  }
  updateTheme(themeId) {
    (themeId === "default" ? this.themeService.getDomainTheme(this.currentHostname) : this.themeService.fetchTheme(themeId)).pipe(take(1), takeUntil(this.cancelPendingThemeRequest$)).subscribe({
      next: (theme) => {
        this.themeService.setTheme(theme);
      },
      error: (err) => {
        console.error(`Failed to load theme ${themeId}:`, err);
      }
    });
  }
  getThemeId(selectedClient) {
    return isDefined(selectedClient?.theme?.id) && selectedClient.theme.id !== "inherited" ? selectedClient.theme.id : "default";
  }
  async injectSettingsVariables(variables, gen) {
    const fonts = {};
    const fontKeys = Object.keys(variables).filter((x) => x.includes("-font-family"));
    for (const key of fontKeys) {
      const font = variables[key];
      fonts[font] = `${font}:300,400,400i,500,700`;
    }
    await this.writeCssVariables(variables, gen);
    if (Object.values(fonts).length > 0) {
      this.loadFonts(fonts).catch((err) => console.warn("Background font load failed; using fallback fonts.", err));
    }
  }
  /**
   * Writes the resolved CSS custom properties onto :root. This is the operation
   * that actually re-skins the app, so it must not be gated on font loading.
   */
  async writeCssVariables(variables, gen) {
    const cssVars = await import("./chunk-42YELB5B.js");
    if (gen !== _ThemeComponent.themeGeneration)
      return;
    return new Promise((resolve, reject) => {
      try {
        cssVars.default({
          variables,
          onComplete() {
            resolve();
          },
          onError(message) {
            reject(new Error(message));
          }
        });
        _ThemeComponent.appliedVarKeys = Object.keys(variables);
        if (this.hasNativeCssVariableSupport()) {
          resolve();
        }
      } catch (err) {
        reject(err instanceof Error ? err : new Error(String(err)));
      }
    });
  }
  async loadFonts(fonts) {
    const { default: WebFont } = await import("./chunk-HO72HJ4X.js");
    return new Promise((resolve) => {
      let settled = false;
      const settle = () => {
        if (settled)
          return;
        settled = true;
        resolve();
      };
      const timeoutId = setTimeout(() => {
        console.warn("Font loading timed out; continuing with fallback fonts.");
        settle();
      }, _ThemeComponent.FONT_LOAD_TIMEOUT_MS);
      try {
        WebFont.load({
          google: {
            families: Object.values(fonts)
          },
          active: () => {
            clearTimeout(timeoutId);
            settle();
          },
          inactive: () => {
            clearTimeout(timeoutId);
            settle();
          },
          fontactive: () => {
            clearTimeout(timeoutId);
            settle();
          },
          fontinactive: () => {
            clearTimeout(timeoutId);
            settle();
          }
        });
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn("WebFont loader failed; continuing with fallback fonts.", err);
        settle();
      }
    });
  }
  async injectStyle(id, css) {
    try {
      let styleTag = this.document.getElementById(id);
      if (isNullOrUndefined(styleTag)) {
        styleTag = this.renderer.createElement("style");
        this.renderer.setAttribute(styleTag, "id", id);
        this.renderer.appendChild(this.document.head, styleTag);
      }
      styleTag.textContent = css;
    } catch (error) {
      console.error("Failed to inject style:", error);
      throw error;
    }
  }
  appendHTML(id, owner, tag, attributes, contents) {
    const ALLOWED_ATTRS = {
      style: /* @__PURE__ */ new Set(["id", "type"]),
      meta: /* @__PURE__ */ new Set(["name", "content", "charset", "http-equiv"]),
      link: /* @__PURE__ */ new Set(["rel", "id", "type", "media"]),
      // TODO(CHV-security): align with backend to remove script support or enforce src allowlisting
      script: /* @__PURE__ */ new Set(["id", "src", "type", "async", "defer", "crossorigin"])
    };
    const normalizedTag = tag.toLowerCase();
    if (!(normalizedTag in ALLOWED_ATTRS))
      return;
    const parent = this.document.getElementsByTagName(owner)[0];
    const element = this.renderer.createElement(tag);
    this.renderer.setAttribute(element, "id", id);
    const strings = (attributes || "").split(/[\r\n]/g).filter((x) => !!x);
    for (const str of strings) {
      const [key, ...rest] = str.split("=");
      const normalizedKey = key.toLowerCase();
      if (!ALLOWED_ATTRS[normalizedTag].has(normalizedKey))
        continue;
      if (normalizedTag === "link" && normalizedKey === "rel" && rest.join("=").replaceAll(/['"]/g, "").trim() !== "stylesheet")
        continue;
      this.renderer.setAttribute(element, key, rest.join("=").replaceAll(/['"]/g, "") || "true");
    }
    element.textContent = contents || "";
    this.renderer.appendChild(parent, element);
  }
  static \u0275fac = function ThemeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeComponent, selectors: [["app-theme"]], hostVars: 2, hostBindings: function ThemeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classMap(ctx.classes);
    }
  }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "fixed", "inset-0", "flex", "items-center", "justify-center", "bg-white/80", "backdrop-blur-sm", "z-50"], [1, "flex", "flex-col", "items-center", "gap-3"], ["styleClass", "w-12 h-12 text-primary-500"], [1, "text-sm", "text-gray-600"]], template: function ThemeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, ThemeComponent_Conditional_0_Template, 6, 3, "div", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : -1);
    }
  }, dependencies: [ProgressSpinnerModule, ProgressSpinner, TranslatePipe], styles: ["\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeComponent, [{
    type: Component,
    args: [{ selector: "app-theme", imports: [ProgressSpinnerModule, TranslatePipe], template: `@if (loading()) {
  <div
    class="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50"
  >
    <div class="flex flex-col items-center gap-3">
      <p-progressSpinner styleClass="w-12 h-12 text-primary-500">
      </p-progressSpinner>
      <p class="text-sm text-gray-600">
        {{ 'SHARED.THEME.LOADING_THEME' | translate }}
      </p>
    </div>
  </div>
}
<ng-content></ng-content>
`, styles: ["/* src/app/shared/components/theme/theme.component.scss */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=theme.component.css.map */\n"] }]
  }], () => [], { classes: [{
    type: HostBinding,
    args: ["class"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeComponent, { className: "ThemeComponent", filePath: "src/app/shared/components/theme/theme.component.ts", lineNumber: 31 });
})();

export {
  ThemeComponent
};
//# sourceMappingURL=chunk-CRVCXZJD.js.map
