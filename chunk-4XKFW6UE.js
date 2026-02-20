import {
  Chart,
  registerables
} from "./chunk-DXDVPHIO.js";
import {
  CardModule
} from "./chunk-ERWSOVMD.js";
import {
  AccordionModule
} from "./chunk-PVMHRDPC.js";
import {
  AutoCompleteModule,
  Message,
  MessageModule,
  Popover,
  PopoverModule,
  ProgressBar,
  ProgressBarModule
} from "./chunk-T5WYQJMH.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-W5XLQNKH.js";
import {
  DatePicker,
  DatePickerModule,
  MultiSelectModule
} from "./chunk-3ELTUYPI.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-IM6TEFQQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormsModule,
  InputText,
  InputTextModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  SelectModule,
  Validators
} from "./chunk-4CAIP3KE.js";
import {
  ProgressSpinner,
  ProgressSpinnerModule
} from "./chunk-BJMVTXFZ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2UAXSVOA.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  ApiUrlService,
  AssetsService,
  AuthTokenManagerService,
  ClientDataService,
  CommonModule,
  DecimalPipe,
  DomSanitizer,
  HttpClient,
  HttpHeaders,
  NgClass,
  TitleCasePipe,
  UpperCasePipe,
  isDefined,
  isNullOrUndefined
} from "./chunk-UNWLID6Q.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  Pipe,
  ViewChild,
  computed,
  effect,
  firstValueFrom,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4KHPVNTA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/development/components/analytical-report/dashboard/services/dashboard-layout.service.ts
var DashboardLayoutService = class _DashboardLayoutService {
  defaultBreakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  };
  defaultOptions = {
    enableAnimations: true,
    responsiveBreakpoints: this.defaultBreakpoints,
    gapSizePx: 16,
    minBlockHeight: 200
  };
  resizeObserver;
  /**
   * Apply AI-controlled layout to the dashboard container
   */
  applyLayout(container, layout, blocks, options = {}) {
    const opts = __spreadValues(__spreadValues({}, this.defaultOptions), options);
    const element = container.nativeElement;
    if (isNullOrUndefined(element)) {
      return;
    }
    try {
      this.configureGridSystem(element, layout, opts);
      this.positionBlocks(element, layout, blocks, opts);
      this.setupResponsiveLayout(element, layout, blocks, opts);
      if (isDefined(opts.enableAnimations)) {
        this.enableLayoutAnimations(element);
      }
    } catch {
      this.fallbackLayout(element, blocks, opts);
    }
  }
  /**
   * Configure the CSS Grid system based on AI layout specifications
   */
  configureGridSystem(element, layout, options) {
    element.style.display = "grid";
    element.style.gridTemplateColumns = `repeat(${layout.grid.columns}, 1fr)`;
    element.style.gap = `${layout.grid.gap ?? options.gapSizePx}px`;
    element.style.gridAutoRows = "minmax(auto, max-content)";
    element.style.padding = `${options.gapSizePx}px`;
    element.style.minHeight = "100%";
    element.style.width = "100%";
    element.classList.add("dashboard-grid-container");
  }
  /**
   * Position blocks according to AI-determined layout sections
   */
  positionBlocks(container, layout, blocks, options) {
    for (const section of layout.sections) {
      this.positionSection(container, section, blocks, options);
    }
  }
  /**
   * Position individual section and its contained blocks
   */
  positionSection(container, section, blocks, options) {
    for (const [index, blockId] of section.blocks.entries()) {
      const block = blocks.find((b) => b.block_id === blockId);
      if (!block) {
        continue;
      }
      const blockElement = container.querySelector(`[data-block-id="${blockId}"]`);
      if (isNullOrUndefined(blockElement)) {
        continue;
      }
      this.applyBlockPosition(blockElement, block, section, index, options);
    }
  }
  /**
   * Apply positioning to individual block element
   */
  applyBlockPosition(element, block, section, indexInSection, options) {
    if (isDefined(block.layout?.position?.gridArea)) {
      element.style.gridArea = block.layout?.position?.gridArea;
    } else {
      const { row, col, colSpan } = section.position;
      if (colSpan >= 12) {
        const blockRow = row + indexInSection;
        element.style.gridArea = `${blockRow} / ${col} / ${blockRow + 1} / ${col + colSpan}`;
      } else {
        const blocksPerRow = Math.max(1, Math.floor(colSpan / 3));
        const blockColSpan = Math.floor(colSpan / blocksPerRow);
        const blockRow = row + Math.floor(indexInSection / blocksPerRow);
        const blockCol = col + indexInSection % blocksPerRow * blockColSpan;
        element.style.gridArea = `${blockRow} / ${blockCol} / ${blockRow + 1} / ${blockCol + blockColSpan}`;
      }
    }
    this.applyBlockStyling(element, block, options);
  }
  /**
   * Apply visual styling to block based on AI specifications
   */
  applyBlockStyling(element, block, options) {
    element.classList.add(`priority-${block.priority}`);
    if (block.visual?.theme) {
      element.classList.add(`theme-${block.visual.theme}`);
    }
    if (isDefined(block.visual?.elevation)) {
      element.classList.add(`elevation-${block.visual?.elevation}`);
    }
    element.style.minHeight = `${options.minBlockHeight}px`;
    element.classList.add(`block-type-${block.block_type}`);
  }
  /**
   * Setup responsive layout behavior
   */
  setupResponsiveLayout(container, layout, blocks, options) {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.adjustLayoutForScreenSize(container, layout, blocks, width, options);
      }
    });
    this.resizeObserver.observe(container);
    const currentWidth = container.offsetWidth;
    this.adjustLayoutForScreenSize(container, layout, blocks, currentWidth, options);
  }
  /**
   * Adjust layout based on screen size
   */
  adjustLayoutForScreenSize(container, layout, blocks, width, options) {
    const breakpoints = options.responsiveBreakpoints;
    if (width <= breakpoints.mobile) {
      this.applyMobileLayout(container, blocks);
    } else if (width <= breakpoints.tablet) {
      this.applyTabletLayout(container, layout);
    } else {
      this.applyDesktopLayout(container, layout, blocks);
    }
  }
  /**
   * Apply mobile-optimized layout (single column)
   */
  applyMobileLayout(container, blocks) {
    container.style.gridTemplateColumns = "1fr";
    container.style.gap = "12px";
    container.style.padding = "12px";
    for (const [index, element] of Array.from(container.querySelectorAll("[data-block-id]")).entries()) {
      const htmlElement = element;
      htmlElement.style.gridArea = "auto";
      htmlElement.style.order = blocks[index]?.priority?.toString() || "0";
    }
  }
  /**
   * Apply tablet-optimized layout (reduced columns)
   */
  applyTabletLayout(container, layout) {
    const tabletColumns = Math.min(8, layout.grid.columns);
    container.style.gridTemplateColumns = `repeat(${tabletColumns}, 1fr)`;
    for (const section of layout.sections) {
      const scaleFactor = tabletColumns / layout.grid.columns;
      for (const blockId of section.blocks) {
        const blockElement = container.querySelector(`[data-block-id="${blockId}"]`);
        if (isDefined(blockElement)) {
          const newColSpan = Math.max(1, Math.floor(section.position.colSpan * scaleFactor));
          const { row, col } = section.position;
          blockElement.style.gridArea = `${row} / ${Math.floor(col * scaleFactor)} / ${row + 1} / ${Math.floor(col * scaleFactor) + newColSpan}`;
        }
      }
    }
  }
  /**
   * Apply full desktop layout
   */
  applyDesktopLayout(container, layout, blocks) {
    this.configureGridSystem(container, layout, this.defaultOptions);
    this.positionBlocks(container, layout, blocks, this.defaultOptions);
  }
  /**
   * Enable smooth layout animations
   */
  enableLayoutAnimations(container) {
    container.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    for (const element of container.querySelectorAll("[data-block-id]")) {
      const htmlElement = element;
      htmlElement.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    }
  }
  /**
   * Fallback layout when AI layout fails
   */
  fallbackLayout(container, blocks, options) {
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    container.style.gap = `${options.gapSizePx}px`;
    container.style.padding = `${options.gapSizePx}px`;
    for (const [index, element] of Array.from(container.querySelectorAll("[data-block-id]")).entries()) {
      const htmlElement = element;
      htmlElement.style.gridArea = "auto";
      htmlElement.style.order = blocks[index]?.priority?.toString() || "0";
    }
  }
  /**
   * Calculate optimal layout based on block content and screen size
   */
  calculateOptimalLayout(blocks, containerWidth) {
    const columns = this.calculateOptimalColumns(containerWidth);
    const sections = this.calculateOptimalSections(blocks, columns);
    return {
      type: "dashboard",
      grid: {
        columns,
        rows: "auto",
        gap: 16
      },
      sections
    };
  }
  /**
   * Calculate optimal number of columns based on container width
   */
  calculateOptimalColumns(width) {
    if (width < 768)
      return 1;
    if (width < 1024)
      return 8;
    if (width < 1440)
      return 12;
    return 16;
  }
  /**
   * Calculate optimal section arrangement
   */
  calculateOptimalSections(blocks, columns) {
    const sections = [];
    let currentRow = 1;
    let currentCol = 1;
    for (const block of [...blocks].sort((a, b) => a.priority - b.priority)) {
      const colSpan = this.calculateBlockColSpan(block, columns);
      if (currentCol + colSpan > columns + 1) {
        currentRow++;
        currentCol = 1;
      }
      sections.push({
        id: `section-${block.block_id}`,
        title: block.block_type,
        position: {
          row: currentRow,
          col: currentCol,
          colSpan
        },
        blocks: [block.block_id]
      });
      currentCol += colSpan;
    }
    return sections;
  }
  /**
   * Calculate optimal column span for a block type
   */
  calculateBlockColSpan(block, totalColumns) {
    const baseSpan = {
      summary: Math.min(totalColumns, 12),
      kpi: Math.min(Math.floor(totalColumns / 3), 4),
      chart: Math.min(Math.floor(totalColumns / 2), 6),
      alert: Math.min(Math.floor(totalColumns / 2), 6),
      table: Math.min(totalColumns, 12),
      recommendation: Math.min(Math.floor(totalColumns / 3), 4),
      map_markers: Math.min(Math.floor(totalColumns / 2), 8)
    };
    return baseSpan[block.block_type] || Math.floor(totalColumns / 3);
  }
  /**
   * Cleanup method to destroy observers and clear cache
   */
  destroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
  }
  static \u0275fac = function DashboardLayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLayoutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardLayoutService, factory: _DashboardLayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/summary-block/summary-block.component.ts
function SummaryBlockComponent_Conditional_7_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
  if (rf & 2) {
    const highlight_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getTrendIcon(highlight_r1.trend));
    \u0275\u0275attribute("aria-label", highlight_r1.trend + " trend");
  }
}
function SummaryBlockComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, SummaryBlockComponent_Conditional_7_For_2_Conditional_4_Template, 1, 2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const highlight_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getHighlightClass(highlight_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", highlight_r1.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(highlight_r1.trend ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(highlight_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "severity-" + highlight_r1.severity);
  }
}
function SummaryBlockComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, SummaryBlockComponent_Conditional_7_For_2_Template, 8, 5, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.block.content.highlights);
  }
}
var SummaryBlockComponent = class _SummaryBlockComponent {
  block;
  getThemeClass() {
    if (this.block.visual?.theme) {
      return `theme-${this.block.visual.theme}`;
    }
    return "theme-primary";
  }
  getHighlightClass(highlight) {
    const classes = [`severity-${highlight.severity}`];
    if (highlight.trend) {
      classes.push(`trend-${highlight.trend}`);
    }
    return classes;
  }
  getTrendIcon(trend) {
    switch (trend) {
      case "up":
        return "trend-up";
      case "down":
        return "trend-down";
      case "stable":
        return "trend-stable";
      default:
        return "";
    }
  }
  static \u0275fac = function SummaryBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SummaryBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SummaryBlockComponent, selectors: [["app-summary-block"]], inputs: { block: "block" }, decls: 8, vars: 4, consts: [[1, "summary-block", 3, "ngClass"], [1, "summary-header"], [1, "summary-title"], [1, "summary-narrative"], [1, "highlights"], [1, "highlight-item", 3, "ngClass"], [1, "highlight-content"], [1, "highlight-value"], [3, "ngClass"], [1, "highlight-label"], [1, "highlight-indicator", 3, "ngClass"]], template: function SummaryBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, SummaryBlockComponent_Conditional_7_Template, 3, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getThemeClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.narrative);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.highlights.length > 0 ? 7 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['@charset "UTF-8";\n\n\n\n.summary-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid transparent;\n}\n.summary-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.summary-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.summary-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.25px;\n}\n.summary-narrative[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.summary-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.7;\n  margin: 0;\n  font-size: 1rem;\n}\n.highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.highlight-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 18px;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.highlight-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.highlight-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.highlight-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 6px;\n}\n.highlight-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.highlight-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.highlight-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  transition: width 0.3s ease;\n}\n.highlight-item[_ngcontent-%COMP%]:hover   .highlight-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.trend-up[_ngcontent-%COMP%]::before {\n  content: "\\2191";\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.trend-down[_ngcontent-%COMP%]::before {\n  content: "\\2193";\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.trend-stable[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n}\n.severity-good[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n}\n.severity-warning[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f59e0b,\n      #d97706);\n}\n.severity-critical[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444,\n      #dc2626);\n}\n.severity-neutral[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #6b7280,\n      #4b5563);\n}\n.summary-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.summary-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.summary-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.summary-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.summary-block.theme-info[_ngcontent-%COMP%] {\n  border-left-color: #06b6d4;\n}\n.dark[_nghost-%COMP%]   .summary-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .summary-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .highlight-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .highlight-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .summary-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .highlights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .summary-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .highlight-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=summary-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SummaryBlockComponent, [{
    type: Component,
    args: [{ selector: "app-summary-block", imports: [CommonModule], template: `<div class="summary-block" [ngClass]="getThemeClass()">
  <div class="summary-header">
    <h3 class="summary-title">{{ block.content.title }}</h3>
  </div>

  <div class="summary-narrative">
    <p>{{ block.content.narrative }}</p>
  </div>

  @if (block.content.highlights.length > 0) {
    <div class="highlights">
      @for (highlight of block.content.highlights; track highlight) {
        <div class="highlight-item" [ngClass]="getHighlightClass(highlight)">
          <div class="highlight-content">
            <div class="highlight-value">
              {{ highlight.value }}
              @if (highlight.trend) {
                <i
                  [ngClass]="getTrendIcon(highlight.trend)"
                  [attr.aria-label]="highlight.trend + ' trend'"
                ></i>
              }
            </div>
            <div class="highlight-label">{{ highlight.label }}</div>
          </div>
          <div
            class="highlight-indicator"
            [ngClass]="'severity-' + highlight.severity"
          ></div>
        </div>
      }
    </div>
  }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/summary-block/summary-block.component.scss */\n.summary-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid transparent;\n}\n.summary-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.summary-header {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.summary-title {\n  color: var(--text-color);\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.25px;\n}\n.summary-narrative {\n  margin-bottom: 24px;\n}\n.summary-narrative p {\n  color: var(--text-color-secondary);\n  line-height: 1.7;\n  margin: 0;\n  font-size: 1rem;\n}\n.highlights {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.highlight-item {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 18px;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.highlight-item:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.highlight-content {\n  position: relative;\n  z-index: 2;\n}\n.highlight-value {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 6px;\n}\n.highlight-value i {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.highlight-label {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.highlight-indicator {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  transition: width 0.3s ease;\n}\n.highlight-item:hover .highlight-indicator {\n  width: 8px;\n}\n.trend-up {\n  color: #22c55e;\n}\n.trend-up::before {\n  content: "\\2191";\n}\n.trend-down {\n  color: #ef4444;\n}\n.trend-down::before {\n  content: "\\2193";\n}\n.trend-stable {\n  color: #6b7280;\n}\n.trend-stable::before {\n  content: "\\2192";\n}\n.severity-good .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n}\n.severity-warning .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #f59e0b,\n      #d97706);\n}\n.severity-critical .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444,\n      #dc2626);\n}\n.severity-neutral .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #6b7280,\n      #4b5563);\n}\n.summary-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.summary-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.summary-block.theme-danger {\n  border-left-color: #ef4444;\n}\n.summary-block.theme-success {\n  border-left-color: #22c55e;\n}\n.summary-block.theme-info {\n  border-left-color: #06b6d4;\n}\n:host-context(.dark) .summary-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .highlight-item {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .summary-block {\n    padding: 16px;\n  }\n  .highlights {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .summary-title {\n    font-size: 1.25rem;\n  }\n  .highlight-value {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=summary-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SummaryBlockComponent, { className: "SummaryBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/summary-block/summary-block.component.ts", lineNumber: 14 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.ts
function KpiBlockComponent_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getComparisonClass(metric_r1.comparison));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTrendIcon(metric_r1.comparison.trend));
    \u0275\u0275attribute("aria-label", metric_r1.comparison.trend + " trend");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPercentage(metric_r1.comparison.change_percentage), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" vs ", ctx_r1.formatValue(metric_r1.comparison.previous_value, metric_r1.format), "", metric_r1.unit, " ");
  }
}
function KpiBlockComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, KpiBlockComponent_For_6_Conditional_6_Template, 7, 6, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.getMetricClasses(metric_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatValue(metric_r1.value, metric_r1.format), "", metric_r1.unit, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(metric_r1.comparison ? 6 : -1);
  }
}
var KpiBlockComponent = class _KpiBlockComponent {
  block;
  trackByMetric(index, metric) {
    return metric.label;
  }
  getBlockClasses() {
    const classes = ["kpi-block"];
    if (this.block.visual?.theme) {
      classes.push(`theme-${this.block.visual.theme}`);
    }
    return classes;
  }
  getOrientationClass() {
    return `orientation-${this.block.content.orientation}`;
  }
  getMetricClasses(metric) {
    const classes = [];
    if (metric.comparison) {
      classes.push("has-comparison");
    }
    return classes;
  }
  formatValue(value, format) {
    switch (format) {
      case "currency":
        return new Intl.NumberFormat("en-ZA", {
          style: "currency",
          currency: "ZAR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(value);
      case "percentage":
        return value.toFixed(1);
      case "duration": {
        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
      }
      case "number":
      default:
        return new Intl.NumberFormat("en-ZA").format(value);
    }
  }
  formatPercentage(value) {
    const formatted = Math.abs(value).toFixed(1);
    return `${formatted}%`;
  }
  getComparisonClass(comparison) {
    return comparison.is_improvement ? "improvement" : "decline";
  }
  getTrendIcon(trend) {
    switch (trend) {
      case "up":
        return "trend-up";
      case "down":
        return "trend-down";
      case "stable":
        return "trend-stable";
      default:
        return "";
    }
  }
  static \u0275fac = function KpiBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KpiBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KpiBlockComponent, selectors: [["app-kpi-block"]], inputs: { block: "block" }, decls: 7, vars: 3, consts: [[1, "kpi-block", 3, "ngClass"], [1, "kpi-header"], [1, "kpi-title"], [1, "metrics-container", 3, "ngClass"], [1, "metric-item", 3, "ngClass"], [1, "metric-main"], [1, "metric-value"], [1, "metric-label"], [1, "metric-comparison", 3, "ngClass"], [1, "comparison-indicator"], [3, "ngClass"], [1, "comparison-percentage"], [1, "comparison-label"]], template: function KpiBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275repeaterCreate(5, KpiBlockComponent_For_6_Template, 7, 5, "div", 4, ctx.trackByMetric, true);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getOrientationClass());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.block.content.metrics);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['@charset "UTF-8";\n\n\n\n.kpi-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.kpi-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.kpi-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.kpi-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.metrics-container.orientation-horizontal[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.metrics-container.orientation-vertical[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.metric-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.metric-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.metric-main[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-600);\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n}\n.metric-comparison[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid var(--surface-200);\n}\n.metric-comparison.improvement[_ngcontent-%COMP%] {\n  --comparison-color: #22c55e;\n}\n.metric-comparison.decline[_ngcontent-%COMP%] {\n  --comparison-color: #ef4444;\n}\n.comparison-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--comparison-color);\n  font-weight: 600;\n}\n.comparison-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  transition: transform 0.2s ease;\n}\n.comparison-indicator[_ngcontent-%COMP%]   .comparison-percentage[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.comparison-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n.trend-up[_ngcontent-%COMP%]::before {\n  content: "\\2197";\n}\n.trend-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-up 2s infinite;\n}\n.trend-down[_ngcontent-%COMP%]::before {\n  content: "\\2198";\n}\n.trend-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-down 2s infinite;\n}\n.trend-stable[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n}\n@keyframes _ngcontent-%COMP%_bounce-up {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-3px);\n  }\n  60% {\n    transform: translateY(-1px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce-down {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(3px);\n  }\n  60% {\n    transform: translateY(1px);\n  }\n}\n.kpi-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.kpi-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.kpi-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.kpi-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.dark[_nghost-%COMP%]   .kpi-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-comparison[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .metric-comparison[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .kpi-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .metrics-container.orientation-horizontal[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n  .metric-item[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n  .metrics-container[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=kpi-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KpiBlockComponent, [{
    type: Component,
    args: [{ selector: "app-kpi-block", imports: [CommonModule], template: `<div class="kpi-block" [ngClass]="getBlockClasses()">
  <div class="kpi-header">
    <h4 class="kpi-title">{{ block.content.title }}</h4>
  </div>

  <div class="metrics-container" [ngClass]="getOrientationClass()">
    @for (
      metric of block.content.metrics;
      track trackByMetric($index, metric)
    ) {
      <div class="metric-item" [ngClass]="getMetricClasses(metric)">
        <div class="metric-main">
          <div class="metric-value">
            {{ formatValue(metric.value, metric.format) }}{{ metric.unit }}
          </div>
          <div class="metric-label">{{ metric.label }}</div>
        </div>
        @if (metric.comparison) {
          <div
            class="metric-comparison"
            [ngClass]="getComparisonClass(metric.comparison)"
          >
            <div class="comparison-indicator">
              <i
                [ngClass]="getTrendIcon(metric.comparison.trend)"
                [attr.aria-label]="metric.comparison.trend + ' trend'"
              ></i>
              <span class="comparison-percentage">
                {{ formatPercentage(metric.comparison.change_percentage) }}
              </span>
            </div>
            <div class="comparison-label">
              vs
              {{ formatValue(metric.comparison.previous_value, metric.format)
              }}{{ metric.unit }}
            </div>
          </div>
        }
      </div>
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.scss */\n.kpi-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.kpi-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.kpi-header {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.kpi-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-container {\n  display: grid;\n  gap: 20px;\n}\n.metrics-container.orientation-horizontal {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.metrics-container.orientation-vertical {\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.metric-item {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.metric-item:hover {\n  background: #f3f4f6;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.metric-main {\n  margin-bottom: 12px;\n}\n.metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-600);\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.metric-label {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n}\n.metric-comparison {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid var(--surface-200);\n}\n.metric-comparison.improvement {\n  --comparison-color: #22c55e;\n}\n.metric-comparison.decline {\n  --comparison-color: #ef4444;\n}\n.comparison-indicator {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--comparison-color);\n  font-weight: 600;\n}\n.comparison-indicator i {\n  font-size: 0.875rem;\n  transition: transform 0.2s ease;\n}\n.comparison-indicator .comparison-percentage {\n  font-size: 0.875rem;\n}\n.comparison-label {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n.trend-up::before {\n  content: "\\2197";\n}\n.trend-up {\n  animation: bounce-up 2s infinite;\n}\n.trend-down::before {\n  content: "\\2198";\n}\n.trend-down {\n  animation: bounce-down 2s infinite;\n}\n.trend-stable::before {\n  content: "\\2192";\n}\n@keyframes bounce-up {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-3px);\n  }\n  60% {\n    transform: translateY(-1px);\n  }\n}\n@keyframes bounce-down {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(3px);\n  }\n  60% {\n    transform: translateY(1px);\n  }\n}\n.kpi-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.kpi-block.theme-success {\n  border-left-color: #22c55e;\n}\n.kpi-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.kpi-block.theme-danger {\n  border-left-color: #ef4444;\n}\n:host-context(.dark) .kpi-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .metric-item {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .metric-item:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .metric-comparison {\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .kpi-block {\n    padding: 16px;\n  }\n  .metrics-container.orientation-horizontal {\n    grid-template-columns: 1fr;\n  }\n  .metric-value {\n    font-size: 1.875rem;\n  }\n  .metric-item {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .metric-value {\n    font-size: 1.625rem;\n  }\n  .metrics-container {\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=kpi-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KpiBlockComponent, { className: "KpiBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.ts", lineNumber: 15 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.ts
var _c0 = ["chartCanvas"];
var _c1 = ["chartContainer"];
function ChartBlockComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h4", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "button", 10);
    \u0275\u0275listener("click", function ChartBlockComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadChart());
    });
    \u0275\u0275elementStart(5, "i", 11);
    \u0275\u0275text(6, "\u2B07");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.title);
  }
}
function ChartBlockComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading chart...");
    \u0275\u0275elementEnd()();
  }
}
function ChartBlockComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.description);
  }
}
function ChartBlockComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", item_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.value);
  }
}
function ChartBlockComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13);
    \u0275\u0275repeaterCreate(2, ChartBlockComponent_Conditional_8_For_3_Template, 6, 4, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.legendItems);
  }
}
Chart.register(...registerables);
var ChartBlockComponent = class _ChartBlockComponent {
  block;
  chartCanvas;
  chartContainer;
  chart;
  isLoading = true;
  showCustomLegend = false;
  legendItems = [];
  colorPalette = [
    "#3b82f6",
    "#ef4444",
    "#22c55e",
    "#f59e0b",
    "#8b5cf6",
    "#06b6d4",
    "#f97316",
    "#84cc16",
    "#ec4899",
    "#6b7280",
    "#14b8a6",
    "#f43f5e"
  ];
  ngOnInit() {
    this.prepareLegendData();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.createChart();
    }, 100);
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }
  getBlockClasses() {
    const classes = ["chart-block"];
    if (this.block.visual?.theme) {
      classes.push(`theme-${this.block.visual.theme}`);
    }
    return classes;
  }
  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext("2d");
    if (!ctx)
      return;
    const config = this.getChartConfig();
    try {
      this.chart = new Chart(ctx, config);
      this.isLoading = false;
    } catch (error) {
      console.error("Error creating chart:", error);
      this.isLoading = false;
    }
  }
  getChartConfig() {
    const baseConfig = {
      type: this.getChartType(),
      data: this.getChartData(),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index"
        },
        plugins: {
          legend: {
            display: !this.showCustomLegend,
            position: "bottom",
            labels: {
              padding: 20,
              usePointStyle: true,
              color: getComputedStyle(document.documentElement).getPropertyValue("--text-color") || "#374151"
            }
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "#fff",
            bodyColor: "#fff",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: true,
            callbacks: {
              label: (context) => {
                let label = context.dataset.label ?? "";
                if (label) {
                  label += ": ";
                }
                label += this.formatTooltipValue(context.parsed.y ?? context.parsed);
                return label;
              }
            }
          }
        },
        scales: this.getScalesConfig(),
        animation: {
          duration: 1e3,
          easing: "easeOutQuart"
        }
      }
    };
    if (this.block.content.chart_type === "line" || this.block.content.chart_type === "area") {
      if (baseConfig.options) {
        baseConfig.options.elements = {
          line: {
            tension: 0.4
          },
          point: {
            radius: 4,
            hoverRadius: 8,
            borderWidth: 2
          }
        };
      }
    }
    return baseConfig;
  }
  getChartType() {
    const typeMapping = {
      line: "line",
      bar: "bar",
      pie: "pie",
      area: "line",
      scatter: "scatter",
      donut: "doughnut"
    };
    return typeMapping[this.block.content.chart_type] || "bar";
  }
  getChartData() {
    const data = this.block.content.data;
    if (["pie", "donut"].includes(this.block.content.chart_type)) {
      return {
        labels: data.map((d) => d.label),
        datasets: [
          {
            data: data.map((d) => d.value),
            backgroundColor: data.map((d, i) => d.color ?? this.colorPalette[i % this.colorPalette.length]),
            borderWidth: 3,
            borderColor: "#fff",
            hoverBorderWidth: 5,
            hoverOffset: 10
          }
        ]
      };
    }
    const isArea = this.block.content.chart_type === "area";
    const baseColor = this.colorPalette[0];
    return {
      labels: data.map((d) => d.label),
      datasets: [
        {
          label: this.block.content.y_axis ?? "Value",
          data: data.map((d) => d.value),
          backgroundColor: this.block.content.chart_type === "line" || isArea ? isArea ? this.hexToRgba(baseColor, 0.2) : this.hexToRgba(baseColor, 0.1) : data.map((d, i) => d.color ?? this.colorPalette[i % this.colorPalette.length]),
          borderColor: baseColor,
          borderWidth: 3,
          fill: isArea,
          pointBackgroundColor: baseColor,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: baseColor,
          pointHoverBorderWidth: 3
        }
      ]
    };
  }
  getScalesConfig() {
    if (["pie", "donut"].includes(this.block.content.chart_type)) {
      return {};
    }
    const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text-color-secondary") || "#6b7280";
    const gridColor = getComputedStyle(document.documentElement).getPropertyValue("--surface-200") || "#e5e7eb";
    return {
      x: {
        display: true,
        title: {
          display: isDefined(this.block.content.x_axis) && this.block.content.x_axis !== "",
          text: this.block.content.x_axis,
          color: textColor
        },
        ticks: {
          color: textColor
        },
        grid: {
          color: gridColor
        }
      },
      y: {
        display: true,
        title: {
          display: isDefined(this.block.content.y_axis) && this.block.content.y_axis !== "",
          text: this.block.content.y_axis,
          color: textColor
        },
        ticks: {
          color: textColor,
          callback: (value) => {
            return this.formatAxisValue(value);
          }
        },
        grid: {
          color: gridColor
        }
      }
    };
  }
  prepareLegendData() {
    if (["pie", "donut"].includes(this.block.content.chart_type)) {
      this.showCustomLegend = true;
      this.legendItems = this.block.content.data.map((item, index) => ({
        label: item.label,
        color: item.color ?? this.colorPalette[index % this.colorPalette.length],
        value: this.formatTooltipValue(item.value)
      }));
    }
  }
  formatTooltipValue(value) {
    return new Intl.NumberFormat("en-ZA").format(value);
  }
  formatAxisValue(value) {
    if (value >= 1e6) {
      return (value / 1e6).toFixed(1) + "M";
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(1) + "K";
    }
    return value.toString();
  }
  hexToRgba(hex, alpha) {
    const r = Number.parseInt(hex.slice(1, 3), 16);
    const g = Number.parseInt(hex.slice(3, 5), 16);
    const b = Number.parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  downloadChart() {
    if (this.chart) {
      const url = this.chart.toBase64Image("image/png", 1);
      const link = document.createElement("a");
      link.download = `${this.block.content.title ?? "chart"}.png`;
      link.href = url;
      link.click();
    }
  }
  static \u0275fac = function ChartBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartBlockComponent, selectors: [["app-chart-block"]], viewQuery: function ChartBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartContainer = _t.first);
    }
  }, inputs: { block: "block" }, decls: 9, vars: 5, consts: [["chartContainer", ""], ["chartCanvas", ""], [1, "chart-block", 3, "ngClass"], [1, "chart-header"], [1, "chart-container"], [1, "chart-loading"], [1, "chart-description"], [1, "chart-legend"], [1, "chart-title"], [1, "chart-actions"], ["title", "Download Chart", 1, "action-btn", 3, "click"], [1, "download-icon"], [1, "loading-spinner"], [1, "legend-items"], [1, "legend-item"], [1, "legend-color"], [1, "legend-label"], [1, "legend-value"]], template: function ChartBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275conditionalCreate(1, ChartBlockComponent_Conditional_1_Template, 7, 1, "div", 3);
      \u0275\u0275elementStart(2, "div", 4, 0);
      \u0275\u0275element(4, "canvas", null, 1);
      \u0275\u0275conditionalCreate(6, ChartBlockComponent_Conditional_6_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ChartBlockComponent_Conditional_7_Template, 3, 1, "div", 6);
      \u0275\u0275conditionalCreate(8, ChartBlockComponent_Conditional_8_Template, 4, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.title ? 1 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.description ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCustomLegend ? 8 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n\n.chart-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.chart-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.chart-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.download-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 350px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.chart-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-0);\n  border-radius: 8px;\n  z-index: 10;\n}\n.chart-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--surface-200);\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.chart-description[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.chart-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n}\n.legend-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-50);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.legend-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  flex: 1;\n}\n.legend-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.chart-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.chart-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.chart-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.chart-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.dark[_nghost-%COMP%]   .chart-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n.dark[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .chart-legend[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-legend[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .chart-loading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-loading[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n@media (max-width: 768px) {\n  .chart-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n  .chart-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .legend-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .chart-container[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n}\n/*# sourceMappingURL=chart-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartBlockComponent, [{
    type: Component,
    args: [{ selector: "app-chart-block", imports: [CommonModule], template: '<div class="chart-block" [ngClass]="getBlockClasses()">\n  @if (block.content.title) {\n    <div class="chart-header">\n      <h4 class="chart-title">{{ block.content.title }}</h4>\n      <div class="chart-actions">\n        <button\n          class="action-btn"\n          (click)="downloadChart()"\n          title="Download Chart"\n        >\n          <i class="download-icon">\u2B07</i>\n        </button>\n      </div>\n    </div>\n  }\n\n  <div class="chart-container" #chartContainer>\n    <canvas #chartCanvas></canvas>\n    @if (isLoading) {\n      <div class="chart-loading">\n        <div class="loading-spinner"></div>\n        <p>Loading chart...</p>\n      </div>\n    }\n  </div>\n\n  @if (block.content.description) {\n    <div class="chart-description">\n      <p>{{ block.content.description }}</p>\n    </div>\n  }\n\n  @if (showCustomLegend) {\n    <div class="chart-legend">\n      <div class="legend-items">\n        @for (item of legendItems; track item) {\n          <div class="legend-item">\n            <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->\n            <span\n              class="legend-color"\n              [style.background-color]="item.color"\n            ></span>\n            <span class="legend-label">{{ item.label }}</span>\n            <span class="legend-value">{{ item.value }}</span>\n          </div>\n        }\n      </div>\n    </div>\n  }\n</div>\n', styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.scss */\n.chart-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.chart-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.chart-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.download-icon {\n  font-size: 14px;\n  font-style: normal;\n}\n.chart-container {\n  position: relative;\n  height: 350px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.chart-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-0);\n  border-radius: 8px;\n  z-index: 10;\n}\n.chart-loading p {\n  margin: 12px 0 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--surface-200);\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.chart-description {\n  margin-top: 16px;\n}\n.chart-description p {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.chart-legend {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n}\n.legend-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-50);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.legend-item:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.legend-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  flex: 1;\n}\n.legend-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.chart-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.chart-block.theme-success {\n  border-left-color: #22c55e;\n}\n.chart-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.chart-block.theme-danger {\n  border-left-color: #ef4444;\n}\n:host-context(.dark) .chart-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .action-btn {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n:host-context(.dark) .legend-item {\n  background: var(--surface-700);\n}\n:host-context(.dark) .legend-item:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .chart-legend {\n  border-top-color: var(--surface-600);\n}\n:host-context(.dark) .chart-loading {\n  background: var(--surface-800);\n}\n@media (max-width: 768px) {\n  .chart-block {\n    padding: 16px;\n  }\n  .chart-container {\n    height: 280px;\n  }\n  .chart-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .legend-items {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .chart-container {\n    height: 240px;\n  }\n}\n/*# sourceMappingURL=chart-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input
  }], chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas", { static: true }]
  }], chartContainer: [{
    type: ViewChild,
    args: ["chartContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartBlockComponent, { className: "ChartBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.ts", lineNumber: 24 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.ts
function AlertBlockComponent_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18)(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "entity-" + entity_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getEntityIcon(entity_r1.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entity_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entity_r1.id);
  }
}
function AlertBlockComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275repeaterCreate(5, AlertBlockComponent_Conditional_15_For_6_Template, 8, 4, "div", 16, \u0275\u0275componentInstance().trackByEntity, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Affected ", ctx_r1.getEntityTypeLabel(), ":");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.block.content.affected_entities);
  }
}
function AlertBlockComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 21)(2, "i", 22);
    \u0275\u0275text(3, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Recommended Action:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "button", 25);
    \u0275\u0275listener("click", function AlertBlockComponent_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takeAction());
    });
    \u0275\u0275text(10, " Take Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275listener("click", function AlertBlockComponent_Conditional_16_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissAlert());
    });
    \u0275\u0275text(12, " Dismiss ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.block.content.suggested_action);
  }
}
function AlertBlockComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "small", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Event ID: ", ctx_r1.block.content.source_event_id);
  }
}
var AlertBlockComponent = class _AlertBlockComponent {
  block;
  trackByEntity(index, entity) {
    return entity.id;
  }
  getAlertClasses() {
    return [`severity-${this.block.content.severity}`];
  }
  getSeverityIconClass() {
    return `icon-${this.block.content.severity}`;
  }
  getSeverityIcon() {
    switch (this.block.content.severity) {
      case "critical":
        return "\u26A0";
      case "warning":
        return "\u26A1";
      case "info":
        return "\u2139";
      default:
        return "\u2022";
    }
  }
  getEntityTypeLabel() {
    const entities = this.block.content.affected_entities;
    if (entities.length === 0)
      return "";
    const types = [...new Set(entities.map((e) => e.type))];
    if (types.length === 1) {
      return types[0] + (entities.length > 1 ? "s" : "");
    }
    return "entities";
  }
  getEntityIcon(type) {
    switch (type) {
      case "vehicle":
        return "\u{1F697}";
      case "driver":
        return "\u{1F464}";
      case "geofence":
        return "\u{1F4CD}";
      default:
        return "\u2022";
    }
  }
  formatTimestamp(timestamp) {
    try {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / 6e4);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);
      if (diffMins < 1) {
        return "Just now";
      } else if (diffMins < 60) {
        return `${diffMins}m ago`;
      } else if (diffHours < 24) {
        return `${diffHours}h ago`;
      } else if (diffDays < 7) {
        return `${diffDays}d ago`;
      } else {
        return date.toLocaleDateString("en-ZA", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
    } catch {
      return timestamp;
    }
  }
  takeAction() {
  }
  dismissAlert() {
  }
  static \u0275fac = function AlertBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertBlockComponent, selectors: [["app-alert-block"]], inputs: { block: "block" }, decls: 18, vars: 11, consts: [[1, "alert-block", 3, "ngClass"], [1, "alert-header"], [1, "alert-icon-title"], [1, "alert-icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-title-timestamp"], [1, "alert-title"], [1, "alert-timestamp"], [1, "alert-severity-badge", 3, "ngClass"], [1, "alert-content"], [1, "alert-message"], [1, "affected-entities"], [1, "suggested-action"], [1, "source-event"], [1, "affected-header"], [1, "entity-list"], [1, "entity-item", 3, "ngClass"], [1, "entity-icon"], [1, "entity-info"], [1, "entity-name"], [1, "entity-id"], [1, "action-header"], [1, "action-icon"], [1, "action-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "event-id"]], template: function AlertBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h4", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "p", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, AlertBlockComponent_Conditional_15_Template, 7, 1, "div", 11);
      \u0275\u0275conditionalCreate(16, AlertBlockComponent_Conditional_16_Template, 13, 1, "div", 12);
      \u0275\u0275conditionalCreate(17, AlertBlockComponent_Conditional_17_Template, 3, 1, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getAlertClasses());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", ctx.getSeverityIconClass());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getSeverityIcon());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.formatTimestamp(ctx.block.content.timestamp));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", "severity-" + ctx.block.content.severity);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.block.content.severity.toUpperCase(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.message);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.affected_entities.length > 0 ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.is_actionable && ctx.block.content.suggested_action ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.source_event_id ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n\n.alert-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid;\n  position: relative;\n  overflow: hidden;\n}\n.alert-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.alert-block.severity-critical[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fef2f2);\n}\n.alert-block.severity-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fffbeb);\n}\n.alert-block.severity-info[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #eff6ff);\n}\n.alert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.alert-icon-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-style: normal;\n}\n.alert-icon.icon-critical[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  animation: _ngcontent-%COMP%_pulse-critical 2s infinite;\n}\n.alert-icon.icon-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  animation: _ngcontent-%COMP%_pulse-warning 3s infinite;\n}\n.alert-icon.icon-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_pulse-critical {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);\n  }\n}\n.alert-title-timestamp[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.alert-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.0625rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.alert-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.alert-severity-badge[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  color: var(--text-color);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  border: 1px solid var(--surface-200);\n}\n.alert-severity-badge.severity-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.alert-severity-badge.severity-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.alert-severity-badge.severity-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.alert-content[_ngcontent-%COMP%] {\n  space-y: 16px;\n}\n.alert-message[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n}\n.affected-entities[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 16px;\n  background: var(--surface-50);\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.affected-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.affected-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.entity-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n.entity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-0);\n  border-radius: 6px;\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s ease;\n}\n.entity-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.entity-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.entity-icon.entity-vehicle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.entity-icon.entity-driver[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.entity-icon.entity-geofence[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.entity-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.entity-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.entity-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggested-action[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n}\n.action-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.action-header[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.action-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.action-description[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-size: 0.875rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n.source-event[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: right;\n}\n.event-id[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n  font-family: monospace;\n  background: var(--surface-100);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.dark[_nghost-%COMP%]   .alert-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .affected-entities[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .affected-entities[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .suggested-action[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .suggested-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(59, 130, 246, 0.05));\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .event-id[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .event-id[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-critical[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-info[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n@media (max-width: 768px) {\n  .alert-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .alert-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .alert-severity-badge[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .entity-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=alert-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertBlockComponent, [{
    type: Component,
    args: [{ selector: "app-alert-block", imports: [CommonModule], template: `<div class="alert-block" [ngClass]="getAlertClasses()">
  <div class="alert-header">
    <div class="alert-icon-title">
      <div class="alert-icon" [ngClass]="getSeverityIconClass()">
        <i [ngClass]="getSeverityIcon()"></i>
      </div>
      <div class="alert-title-timestamp">
        <h4 class="alert-title">{{ block.content.title }}</h4>
        <span class="alert-timestamp">{{
          formatTimestamp(block.content.timestamp)
        }}</span>
      </div>
    </div>
    <div
      class="alert-severity-badge"
      [ngClass]="'severity-' + block.content.severity"
    >
      {{ block.content.severity.toUpperCase() }}
    </div>
  </div>

  <div class="alert-content">
    <p class="alert-message">{{ block.content.message }}</p>

    @if (block.content.affected_entities.length > 0) {
      <div class="affected-entities">
        <div class="affected-header">
          <strong>Affected {{ getEntityTypeLabel() }}:</strong>
        </div>
        <div class="entity-list">
          @for (
            entity of block.content.affected_entities;
            track trackByEntity($index, entity)
          ) {
            <div class="entity-item" [ngClass]="'entity-' + entity.type">
              <div class="entity-icon">
                <i [ngClass]="getEntityIcon(entity.type)"></i>
              </div>
              <div class="entity-info">
                <span class="entity-name">{{ entity.name }}</span>
                <span class="entity-id">{{ entity.id }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    }

    @if (block.content.is_actionable && block.content.suggested_action) {
      <div class="suggested-action">
        <div class="action-header">
          <i class="action-icon">\u{1F4A1}</i>
          <strong>Recommended Action:</strong>
        </div>
        <p class="action-description">{{ block.content.suggested_action }}</p>
        <div class="action-buttons">
          <button class="btn btn-primary" (click)="takeAction()">
            Take Action
          </button>
          <button class="btn btn-secondary" (click)="dismissAlert()">
            Dismiss
          </button>
        </div>
      </div>
    }

    @if (block.content.source_event_id) {
      <div class="source-event">
        <small class="event-id"
          >Event ID: {{ block.content.source_event_id }}</small
        >
      </div>
    }
  </div>
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.scss */\n.alert-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid;\n  position: relative;\n  overflow: hidden;\n}\n.alert-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.alert-block.severity-critical {\n  border-left-color: #ef4444;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fef2f2);\n}\n.alert-block.severity-warning {\n  border-left-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fffbeb);\n}\n.alert-block.severity-info {\n  border-left-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #eff6ff);\n}\n.alert-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.alert-icon-title {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n}\n.alert-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.alert-icon i {\n  font-size: 18px;\n  font-style: normal;\n}\n.alert-icon.icon-critical {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  animation: pulse-critical 2s infinite;\n}\n.alert-icon.icon-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  animation: pulse-warning 3s infinite;\n}\n.alert-icon.icon-info {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: white;\n}\n@keyframes pulse-critical {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);\n  }\n}\n.alert-title-timestamp {\n  flex: 1;\n}\n.alert-title {\n  color: var(--text-color);\n  font-size: 1.0625rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.alert-timestamp {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.alert-severity-badge {\n  background: var(--surface-100);\n  color: var(--text-color);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  border: 1px solid var(--surface-200);\n}\n.alert-severity-badge.severity-critical {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.alert-severity-badge.severity-warning {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.alert-severity-badge.severity-info {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.alert-content {\n  space-y: 16px;\n}\n.alert-message {\n  color: var(--text-color);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n}\n.affected-entities {\n  margin: 16px 0;\n  padding: 16px;\n  background: var(--surface-50);\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.affected-header {\n  margin-bottom: 12px;\n}\n.affected-header strong {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.entity-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n.entity-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-0);\n  border-radius: 6px;\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s ease;\n}\n.entity-item:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.entity-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.entity-icon.entity-vehicle i {\n  color: #3b82f6;\n}\n.entity-icon.entity-driver i {\n  color: #22c55e;\n}\n.entity-icon.entity-geofence i {\n  color: #f59e0b;\n}\n.entity-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.entity-name {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.entity-id {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggested-action {\n  margin: 16px 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n}\n.action-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.action-header .action-icon {\n  font-size: 16px;\n}\n.action-header strong {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.action-description {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-size: 0.875rem;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n.source-event {\n  margin-top: 16px;\n  text-align: right;\n}\n.event-id {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n  font-family: monospace;\n  background: var(--surface-100);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n:host-context(.dark) .alert-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .affected-entities {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .entity-item {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .entity-item:hover {\n  background: var(--surface-700);\n}\n:host-context(.dark) .suggested-action {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(59, 130, 246, 0.05));\n  border-color: rgba(59, 130, 246, 0.2);\n}\n:host-context(.dark) .event-id {\n  background: var(--surface-700);\n}\n:host-context(.dark) .alert-severity-badge.severity-critical {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n:host-context(.dark) .alert-severity-badge.severity-warning {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n:host-context(.dark) .alert-severity-badge.severity-info {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n@media (max-width: 768px) {\n  .alert-block {\n    padding: 16px;\n  }\n  .alert-header {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .alert-severity-badge {\n    align-self: flex-start;\n  }\n  .entity-list {\n    grid-template-columns: 1fr;\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=alert-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertBlockComponent, { className: "AlertBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.ts", lineNumber: 14 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.ts
var _c02 = (a0) => ({ fullscreen: a0 });
var _c12 = (a0, a1, a2, a3) => ({ sortable: a0, highlight: a1, "sorted-asc": a2, "sorted-desc": a3 });
var _c2 = (a0) => ({ "highlight-row": a0 });
var _c3 = (a0, a1, a2) => ({ highlight: a0, numeric: a1, text: a2 });
function TableBlockComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h4", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "button", 12);
    \u0275\u0275listener("click", function TableBlockComponent_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportTable());
    });
    \u0275\u0275elementStart(5, "i", 13);
    \u0275\u0275text(6, "\u{1F4CA}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function TableBlockComponent_Conditional_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275elementStart(8, "i", 15);
    \u0275\u0275text(9, "\u26F6");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.title);
  }
}
function TableBlockComponent_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_31_r4 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSortIcon(\u0275$index_31_r4));
  }
}
function TableBlockComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 16);
    \u0275\u0275listener("click", function TableBlockComponent_For_8_Template_th_click_0_listener() {
      const \u0275$index_31_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortColumn(\u0275$index_31_r4));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TableBlockComponent_For_8_Conditional_4_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const \u0275$index_31_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c12, ctx_r1.block.content.sortable, \u0275$index_31_r4 === ctx_r1.block.content.highlight_column, ctx_r1.sortState.column === \u0275$index_31_r4 && ctx_r1.sortState.direction === "asc", ctx_r1.sortState.column === \u0275$index_31_r4 && ctx_r1.sortState.direction === "desc"));
    \u0275\u0275attribute("aria-sort", ctx_r1.getSortAttribute(\u0275$index_31_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(header_r5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.block.content.sortable ? 4 : -1);
  }
}
function TableBlockComponent_For_11_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getTrendClass(cell_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTrendIndicator(cell_r8), " ");
  }
}
function TableBlockComponent_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TableBlockComponent_For_11_For_2_Conditional_4_Template, 2, 2, "span", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r8 = ctx.$implicit;
    const \u0275$index_49_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c3, \u0275$index_49_r9 === ctx_r1.block.content.highlight_column, ctx_r1.isNumeric(cell_r8), !ctx_r1.isNumeric(cell_r8)))("title", ctx_r1.getCellTooltip(cell_r8, \u0275$index_49_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCell(cell_r8, \u0275$index_49_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shouldShowTrend(cell_r8, \u0275$index_49_r9) ? 4 : -1);
  }
}
function TableBlockComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 21);
    \u0275\u0275listener("mouseenter", function TableBlockComponent_For_11_Template_tr_mouseenter_0_listener() {
      const \u0275$index_46_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowHover(\u0275$index_46_r7));
    })("mouseleave", function TableBlockComponent_For_11_Template_tr_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowLeave());
    });
    \u0275\u0275repeaterCreate(1, TableBlockComponent_For_11_For_2_Template, 5, 8, "td", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const \u0275$index_46_r7 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c2, \u0275$index_46_r7 % 2 === 0));
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r10);
  }
}
function TableBlockComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 8)(1, "td", 26)(2, "div", 27)(3, "i", 28);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No data available");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.block.content.headers.length);
  }
}
function TableBlockComponent_Conditional_13_Conditional_3_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function TableBlockComponent_Conditional_13_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, TableBlockComponent_Conditional_13_Conditional_3_For_2_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const summary_r11 = ctx.$implicit;
    const \u0275$index_83_r12 = ctx.$index;
    const \u0275$count_83_r13 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", summary_r11.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(summary_r11.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_83_r12 === \u0275$count_83_r13 - 1) ? 4 : -1);
  }
}
function TableBlockComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, TableBlockComponent_Conditional_13_Conditional_3_For_2_Template, 5, 3, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getSummaryStats());
  }
}
function TableBlockComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TableBlockComponent_Conditional_13_Conditional_3_Template, 3, 0, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Showing ", ctx_r1.sortedRows.length, " ", ctx_r1.sortedRows.length === 1 ? "row" : "rows", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showSummary ? 3 : -1);
  }
}
var TableBlockComponent = class _TableBlockComponent {
  block;
  sortState = { column: -1, direction: "asc" };
  isFullscreen = false;
  hoveredRow = -1;
  get showSummary() {
    return this.block.content.summary?.enabled ?? true;
  }
  trackByRow(index, row) {
    return `row-${index}-${row.join("-")}`;
  }
  getBlockClasses() {
    const classes = ["table-block"];
    if (this.block.visual?.theme) {
      classes.push(`theme-${this.block.visual.theme}`);
    }
    return classes;
  }
  get sortedRows() {
    const rows = this.block.content.rows;
    if (!Array.isArray(rows) || rows.length === 0) {
      return [];
    }
    if (this.sortState.column === -1 || isNullOrUndefined(this.block.content.sortable)) {
      return rows;
    }
    return [...rows].sort((a, b) => {
      const aVal = a[this.sortState.column];
      const bVal = b[this.sortState.column];
      const modifier = this.sortState.direction === "asc" ? 1 : -1;
      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * modifier;
      }
      return String(aVal).localeCompare(String(bVal)) * modifier;
    });
  }
  sortColumn(columnIndex) {
    if (isNullOrUndefined(this.block.content.sortable))
      return;
    if (this.sortState.column === columnIndex) {
      this.sortState.direction = this.sortState.direction === "asc" ? "desc" : "asc";
    } else {
      this.sortState.column = columnIndex;
      this.sortState.direction = "asc";
    }
  }
  getSortIcon(columnIndex) {
    if (this.sortState.column !== columnIndex) {
      return "sort-none";
    }
    return this.sortState.direction === "asc" ? "sort-asc" : "sort-desc";
  }
  getSortAttribute(columnIndex) {
    if (this.sortState.column !== columnIndex || isNullOrUndefined(this.block.content.sortable)) {
      return null;
    }
    return this.sortState.direction === "asc" ? "ascending" : "descending";
  }
  formatCell(cell, columnIndex) {
    if (typeof cell === "number") {
      const header = this.block.content.headers[columnIndex].toLowerCase();
      if (header.includes("percent") || header.includes("%")) {
        return `${cell.toFixed(1)}%`;
      }
      if (header.includes("distance") || header.includes("km")) {
        return `${cell.toLocaleString()} km`;
      }
      if (header.includes("currency") || header.includes("cost") || header.includes("price")) {
        return new Intl.NumberFormat("en-ZA", {
          style: "currency",
          currency: "ZAR",
          minimumFractionDigits: 0
        }).format(cell);
      }
      if (header.includes("duration") || header.includes("time")) {
        const hours = Math.floor(cell / 60);
        const minutes = cell % 60;
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
      }
      return cell.toLocaleString();
    }
    return String(cell);
  }
  isNumeric(value) {
    return typeof value === "number";
  }
  getCellTooltip(cell, columnIndex) {
    const header = this.block.content.headers[columnIndex];
    return `${header}: ${this.formatCell(cell, columnIndex)}`;
  }
  shouldShowTrend(cell, columnIndex) {
    return typeof cell === "number" && (this.block.content.headers[columnIndex].toLowerCase().includes("change") || this.block.content.headers[columnIndex].toLowerCase().includes("growth"));
  }
  getTrendClass(cell) {
    if (typeof cell !== "number")
      return "trend-neutral";
    if (cell > 0)
      return "trend-positive";
    if (cell < 0)
      return "trend-negative";
    return "trend-neutral";
  }
  getTrendIndicator(cell) {
    if (typeof cell !== "number")
      return "";
    if (cell > 0)
      return "\u2197";
    if (cell < 0)
      return "\u2198";
    return "\u2192";
  }
  onRowHover(rowIndex) {
    this.hoveredRow = rowIndex;
  }
  onRowLeave() {
    this.hoveredRow = -1;
  }
  getSummaryStats() {
    const rows = this.sortedRows;
    if (rows.length === 0)
      return [];
    const stats = [
      { label: "Records", value: rows.length.toString() }
    ];
    if (this.block.content.summary?.enabled === false) {
      return stats;
    }
    const columnsToSummarize = this.getColumnsToSummarize();
    for (const config of columnsToSummarize) {
      const header = this.block.content.headers[config.column_index];
      const values = rows.map((row) => row[config.column_index]).filter((val) => typeof val === "number");
      if (values.length === 0)
        continue;
      const format = config.format ?? this.detectColumnFormat(config.column_index);
      const columnLabel = config.label ?? header;
      for (const aggType of config.aggregations) {
        const aggValue = this.calculateAggregation(values, aggType);
        const formattedValue = this.formatAggregationValue(aggValue, format);
        const aggLabel = this.getAggregationLabel(aggType, columnLabel);
        stats.push({ label: aggLabel, value: formattedValue });
      }
    }
    return stats;
  }
  getColumnsToSummarize() {
    if (this.block.content.summary?.columns !== void 0 && this.block.content.summary.columns.length > 0) {
      return this.block.content.summary.columns;
    }
    return [];
  }
  calculateAggregation(values, type) {
    if (values.length === 0)
      return 0;
    switch (type) {
      case "count":
        return values.length;
      case "sum":
        return values.reduce((acc, val) => acc + val, 0);
      case "average":
        return values.reduce((acc, val) => acc + val, 0) / values.length;
      case "min":
        return Math.min(...values);
      case "max":
        return Math.max(...values);
      case "median": {
        const sorted = [...values].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
      }
      default:
        return 0;
    }
  }
  formatAggregationValue(value, format) {
    switch (format) {
      case "percentage":
        return `${value.toFixed(1)}%`;
      case "currency":
        return new Intl.NumberFormat("en-ZA", {
          style: "currency",
          currency: "ZAR",
          minimumFractionDigits: 0
        }).format(value);
      case "duration": {
        const hours = Math.floor(value / 60);
        const minutes = Math.round(value % 60);
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
      }
      case "number":
      default:
        return value.toLocaleString(void 0, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        });
    }
  }
  getAggregationLabel(type, columnLabel) {
    switch (type) {
      case "count":
        return `${columnLabel} Count`;
      case "sum":
        return `${columnLabel} Total`;
      case "average":
        return `${columnLabel} Avg`;
      case "min":
        return `${columnLabel} Min`;
      case "max":
        return `${columnLabel} Max`;
      case "median":
        return `${columnLabel} Median`;
      default:
        return columnLabel;
    }
  }
  detectColumnFormat(columnIndex) {
    const header = this.block.content.headers[columnIndex].toLowerCase();
    if (header.includes("percent") || header.includes("%")) {
      return "percentage";
    }
    if (header.includes("currency") || header.includes("cost") || header.includes("price")) {
      return "currency";
    }
    if (header.includes("duration") || header.includes("time")) {
      return "duration";
    }
    return "number";
  }
  isProbablyIdColumn(columnIndex) {
    const header = this.block.content.headers[columnIndex].toLowerCase();
    return header.includes("id") || header.includes("number") || header.includes("code") || header === "#";
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
  exportTable() {
    const headers = this.block.content.headers.join(",");
    const rows = this.sortedRows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
    const csv = `${headers}
${rows}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = globalThis.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${this.block.content.title ?? "table-data"}.csv`;
    link.click();
    globalThis.URL.revokeObjectURL(url);
  }
  static \u0275fac = function TableBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableBlockComponent, selectors: [["app-table-block"]], inputs: { block: "block" }, decls: 14, vars: 7, consts: [[1, "table-block", 3, "ngClass"], [1, "table-header"], [1, "table-container", 3, "ngClass"], [1, "table-responsive"], [1, "data-table"], [1, "header-row"], [1, "header-cell", 3, "ngClass"], [1, "data-row", 3, "ngClass"], [1, "empty-row"], [1, "table-footer"], [1, "table-title"], [1, "table-actions"], ["title", "Export Data", 1, "action-btn", 3, "click"], [1, "export-icon"], ["title", "Toggle Fullscreen", 1, "action-btn", 3, "click"], [1, "fullscreen-icon"], [1, "header-cell", 3, "click", "ngClass"], [1, "header-content"], [1, "header-text"], [1, "sort-indicator"], [1, "sort-icon", 3, "ngClass"], [1, "data-row", 3, "mouseenter", "mouseleave", "ngClass"], [1, "data-cell", 3, "ngClass", "title"], [1, "cell-content"], [1, "cell-value"], [1, "cell-trend", 3, "ngClass"], [1, "empty-cell"], [1, "empty-state"], [1, "empty-icon"], [1, "row-count"], [1, "table-summary"]], template: function TableBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, TableBlockComponent_Conditional_1_Template, 10, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr", 5);
      \u0275\u0275repeaterCreate(7, TableBlockComponent_For_8_Template, 5, 9, "th", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "tbody");
      \u0275\u0275repeaterCreate(10, TableBlockComponent_For_11_Template, 3, 3, "tr", 7, ctx.trackByRow, true);
      \u0275\u0275conditionalCreate(12, TableBlockComponent_Conditional_12_Template, 7, 1, "tr", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, TableBlockComponent_Conditional_13_Template, 4, 3, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.title ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c02, ctx.isFullscreen));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.block.content.headers);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.sortedRows);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sortedRows.length === 0 ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.block.content.rows.length ? 13 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['@charset "UTF-8";\n\n\n\n.table-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.table-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.table-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.export-icon[_ngcontent-%COMP%], \n.fullscreen-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.3s ease;\n}\n.table-container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--surface-0);\n  z-index: 1000;\n  padding: 20px;\n  border-radius: 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.875rem;\n}\n.header-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-100),\n      var(--surface-50));\n}\n.header-cell[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 2px solid var(--surface-200);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.header-cell.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header-cell.sortable[_ngcontent-%COMP%]:hover {\n  background: var(--surface-200);\n}\n.header-cell.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-100),\n      var(--primary-50));\n  border-bottom-color: var(--primary-300);\n}\n.header-cell.sorted-asc[_ngcontent-%COMP%], \n.header-cell.sorted-desc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-200),\n      var(--primary-100));\n}\n.header-cell[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px;\n}\n.header-cell[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sort-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-color-secondary);\n  transition: all 0.2s ease;\n}\n.sort-icon.sort-asc[_ngcontent-%COMP%]::before {\n  content: "\\25b2";\n  color: var(--primary-600);\n}\n.sort-icon.sort-desc[_ngcontent-%COMP%]::before {\n  content: "\\25bc";\n  color: var(--primary-600);\n}\n.sort-icon.sort-none[_ngcontent-%COMP%]::before {\n  content: "\\21c5";\n}\n.data-row[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.data-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-50);\n  transform: scale(1.002);\n}\n.data-row.highlight-row[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-cell[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid var(--surface-100);\n  transition: all 0.2s ease;\n}\n.data-cell.highlight[_ngcontent-%COMP%] {\n  background: var(--primary-25);\n  border-left: 3px solid var(--primary-300);\n}\n.data-cell.numeric[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.data-cell.text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.cell-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n.cell-value[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.cell-trend[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.cell-trend.trend-positive[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cell-trend.trend-negative[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.cell-trend.trend-neutral[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border: none;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-color-secondary);\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n  font-size: 0.875rem;\n}\n.row-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.table-summary[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.table-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .table-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .header-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-700),\n      var(--surface-750));\n}\n.dark[_nghost-%COMP%]   .header-cell[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .header-cell.highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.2),\n      rgba(59, 130, 246, 0.1));\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n}\n.dark[_nghost-%COMP%]   .header-cell.sorted-asc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.sorted-asc[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .header-cell.sorted-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.sorted-desc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.3),\n      rgba(59, 130, 246, 0.2));\n}\n.dark[_nghost-%COMP%]   .data-row[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .data-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .data-row.highlight-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-row.highlight-row[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .data-cell[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .data-cell.highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-cell.highlight[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-left-color: rgba(59, 130, 246, 0.5);\n}\n.dark[_nghost-%COMP%]   .table-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n@media (max-width: 768px) {\n  .table-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .header-cell[_ngcontent-%COMP%], \n   .data-cell[_ngcontent-%COMP%] {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n  .table-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n  }\n  .table-summary[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=table-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBlockComponent, [{
    type: Component,
    args: [{ selector: "app-table-block", imports: [CommonModule], template: `<div class="table-block" [ngClass]="getBlockClasses()">
  @if (block.content.title) {
    <div class="table-header">
      <h4 class="table-title">{{ block.content.title }}</h4>
      <div class="table-actions">
        <button class="action-btn" (click)="exportTable()" title="Export Data">
          <i class="export-icon">\u{1F4CA}</i>
        </button>
        <button
          class="action-btn"
          (click)="toggleFullscreen()"
          title="Toggle Fullscreen"
        >
          <i class="fullscreen-icon">\u26F6</i>
        </button>
      </div>
    </div>
  }

  <div class="table-container" [ngClass]="{ fullscreen: isFullscreen }">
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr class="header-row">
            @for (
              header of block.content.headers;
              track header;
              let i = $index
            ) {
              <th
                class="header-cell"
                [ngClass]="{
                  sortable: block.content.sortable,
                  highlight: i === block.content.highlight_column,
                  'sorted-asc':
                    sortState.column === i && sortState.direction === 'asc',
                  'sorted-desc':
                    sortState.column === i && sortState.direction === 'desc',
                }"
                (click)="sortColumn(i)"
                [attr.aria-sort]="getSortAttribute(i)"
              >
                <div class="header-content">
                  <span class="header-text">{{ header }}</span>
                  @if (block.content.sortable) {
                    <div class="sort-indicator">
                      <i class="sort-icon" [ngClass]="getSortIcon(i)"></i>
                    </div>
                  }
                </div>
              </th>
            }
          </tr>
        </thead>

        <tbody>
          @for (
            row of sortedRows;
            track trackByRow(rowIndex, row);
            let rowIndex = $index
          ) {
            <tr
              class="data-row"
              [ngClass]="{ 'highlight-row': rowIndex % 2 === 0 }"
              (mouseenter)="onRowHover(rowIndex)"
              (mouseleave)="onRowLeave()"
            >
              @for (cell of row; track cell; let cellIndex = $index) {
                <td
                  class="data-cell"
                  [ngClass]="{
                    highlight: cellIndex === block.content.highlight_column,
                    numeric: isNumeric(cell),
                    text: !isNumeric(cell),
                  }"
                  [title]="getCellTooltip(cell, cellIndex)"
                >
                  <div class="cell-content">
                    <span class="cell-value">{{
                      formatCell(cell, cellIndex)
                    }}</span>
                    @if (shouldShowTrend(cell, cellIndex)) {
                      <span class="cell-trend" [ngClass]="getTrendClass(cell)">
                        {{ getTrendIndicator(cell) }}
                      </span>
                    }
                  </div>
                </td>
              }
            </tr>
          }

          @if (sortedRows.length === 0) {
            <tr class="empty-row">
              <td
                [attr.colspan]="block.content.headers.length"
                class="empty-cell"
              >
                <div class="empty-state">
                  <i class="empty-icon">\u{1F4CB}</i>
                  <p>No data available</p>
                </div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    @if (block.content.rows.length) {
      <div class="table-footer">
        <div class="row-count">
          Showing {{ sortedRows.length }}
          {{ sortedRows.length === 1 ? 'row' : 'rows' }}
        </div>
        @if (showSummary) {
          <div class="table-summary">
            @for (
              summary of getSummaryStats();
              track summary;
              let last = $last
            ) {
              <span>
                {{ summary.label }}: <strong>{{ summary.value }}</strong>
                @if (!last) {
                  <span> \u2022 </span>
                }
              </span>
            }
          </div>
        }
      </div>
    }
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.scss */\n.table-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.table-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.table-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.export-icon,\n.fullscreen-icon {\n  font-size: 14px;\n  font-style: normal;\n}\n.table-container {\n  position: relative;\n  transition: all 0.3s ease;\n}\n.table-container.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--surface-0);\n  z-index: 1000;\n  padding: 20px;\n  border-radius: 0;\n}\n.table-responsive {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.data-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.875rem;\n}\n.header-row {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-100),\n      var(--surface-50));\n}\n.header-cell {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 2px solid var(--surface-200);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.header-cell.sortable {\n  cursor: pointer;\n}\n.header-cell.sortable:hover {\n  background: var(--surface-200);\n}\n.header-cell.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-100),\n      var(--primary-50));\n  border-bottom-color: var(--primary-300);\n}\n.header-cell.sorted-asc,\n.header-cell.sorted-desc {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-200),\n      var(--primary-100));\n}\n.header-cell:first-child {\n  border-top-left-radius: 8px;\n}\n.header-cell:last-child {\n  border-top-right-radius: 8px;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.header-text {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sort-indicator {\n  display: flex;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n}\n.sort-icon {\n  font-size: 12px;\n  color: var(--text-color-secondary);\n  transition: all 0.2s ease;\n}\n.sort-icon.sort-asc::before {\n  content: "\\25b2";\n  color: var(--primary-600);\n}\n.sort-icon.sort-desc::before {\n  content: "\\25bc";\n  color: var(--primary-600);\n}\n.sort-icon.sort-none::before {\n  content: "\\21c5";\n}\n.data-row {\n  transition: all 0.2s ease;\n}\n.data-row:hover {\n  background: var(--surface-50);\n  transform: scale(1.002);\n}\n.data-row.highlight-row {\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-cell {\n  padding: 12px;\n  border-bottom: 1px solid var(--surface-100);\n  transition: all 0.2s ease;\n}\n.data-cell.highlight {\n  background: var(--primary-25);\n  border-left: 3px solid var(--primary-300);\n}\n.data-cell.numeric {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.data-cell.text {\n  text-align: left;\n}\n.cell-content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n.cell-value {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.cell-trend {\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.cell-trend.trend-positive {\n  background: #dcfce7;\n  color: #166534;\n}\n.cell-trend.trend-negative {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.cell-trend.trend-neutral {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.empty-row .empty-cell {\n  padding: 40px;\n  text-align: center;\n  border: none;\n}\n.empty-row .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-color-secondary);\n}\n.empty-row .empty-state .empty-icon {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.empty-row .empty-state p {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n  font-size: 0.875rem;\n}\n.row-count {\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.table-summary {\n  color: var(--text-color-secondary);\n}\n.table-summary strong {\n  color: var(--text-color);\n  font-weight: 600;\n}\n:host-context(.dark) .table-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .header-row {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-700),\n      var(--surface-750));\n}\n:host-context(.dark) .header-cell {\n  border-bottom-color: var(--surface-600);\n}\n:host-context(.dark) .header-cell.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.2),\n      rgba(59, 130, 246, 0.1));\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n}\n:host-context(.dark) .header-cell.sorted-asc,\n:host-context(.dark) .header-cell.sorted-desc {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.3),\n      rgba(59, 130, 246, 0.2));\n}\n:host-context(.dark) .data-row:hover {\n  background: var(--surface-700);\n}\n:host-context(.dark) .data-row.highlight-row {\n  background: rgba(255, 255, 255, 0.02);\n}\n:host-context(.dark) .data-cell {\n  border-bottom-color: var(--surface-700);\n}\n:host-context(.dark) .data-cell.highlight {\n  background: rgba(59, 130, 246, 0.1);\n  border-left-color: rgba(59, 130, 246, 0.5);\n}\n:host-context(.dark) .table-footer {\n  border-top-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n@media (max-width: 768px) {\n  .table-block {\n    padding: 16px;\n  }\n  .table-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .table-actions {\n    align-self: flex-end;\n  }\n  .header-cell,\n  .data-cell {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n  .table-footer {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n  }\n  .table-summary {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=table-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableBlockComponent, { className: "TableBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.ts", lineNumber: 21 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.ts
var _c03 = (a0) => ({ actionable: a0 });
function RecommendationBlockComponent_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RecommendationBlockComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9)(2, "div", 10);
    \u0275\u0275conditionalCreate(3, RecommendationBlockComponent_For_12_Conditional_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementStart(4, "h4", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13, "Impact:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "span", 20);
    \u0275\u0275text(18, "Effort:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275element(20, "span", 22)(21, "span", 22)(22, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 23);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const rec_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c03, rec_r1.actionable));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(rec_r1.actionable ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(rec_r1.impact);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "effort-" + rec_r1.effort);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 8, rec_r1.effort));
  }
}
function RecommendationBlockComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getActionableCount(), " actionable recommendation", ctx_r1.getActionableCount() > 1 ? "s" : "", " ");
  }
}
var RecommendationBlockComponent = class _RecommendationBlockComponent {
  block;
  getBlockClasses() {
    const classes = [];
    if (this.block.visual?.theme) {
      classes.push(`theme-${this.block.visual.theme}`);
    }
    return classes;
  }
  getPriorityClass() {
    return `priority-${this.block.content.priority}`;
  }
  getActionableCount() {
    return this.block.content.recommendations.filter((r) => r.actionable).length;
  }
  trackByRec(index, rec) {
    return rec.id;
  }
  static \u0275fac = function RecommendationBlockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommendationBlockComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommendationBlockComponent, selectors: [["app-recommendation-block"]], inputs: { block: "block" }, decls: 14, vars: 7, consts: [[1, "recommendation-block", 3, "ngClass"], [1, "block-header"], [1, "header-content"], [1, "header-icon"], [1, "block-title"], [1, "priority-badge", 3, "ngClass"], [1, "recommendations-list"], [1, "recommendation-card", 3, "ngClass"], [1, "block-footer"], [1, "rec-header"], [1, "rec-title-row"], [1, "actionable-icon"], [1, "rec-title"], [1, "category-badge"], [1, "rec-description"], [1, "rec-footer"], [1, "impact-section"], [1, "impact-label"], [1, "impact-text"], [1, "effort-indicator"], [1, "effort-label"], [1, "effort-dots", 3, "ngClass"], [1, "dot"], [1, "effort-text"], [1, "footer-stat"]], template: function RecommendationBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F4A1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "uppercase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275repeaterCreate(11, RecommendationBlockComponent_For_12_Template, 26, 12, "div", 7, ctx.trackByRec, true);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, RecommendationBlockComponent_Conditional_13_Template, 3, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getPriorityClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, ctx.block.content.priority), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.block.content.recommendations);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.getActionableCount() > 0 ? 13 : -1);
    }
  }, dependencies: [CommonModule, NgClass, UpperCasePipe, TitleCasePipe], styles: ["\n\n.recommendation-block[_ngcontent-%COMP%] {\n  background: var(--surface-0, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-left: 4px solid var(--primary-500, #3b82f6);\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.recommendation-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.recommendation-block.theme-info[_ngcontent-%COMP%] {\n  border-left-color: #06b6d4;\n}\n.recommendation-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.recommendation-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.recommendation-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.block-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-badge.priority-critical[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recommendation-card[_ngcontent-%COMP%] {\n  background: var(--surface-50, #f9fafb);\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-radius: 8px;\n  padding: 16px;\n  transition: all 0.2s ease;\n}\n.recommendation-card[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100, #f3f4f6);\n  border-color: var(--surface-300, #d1d5db);\n}\n.recommendation-card.actionable[_ngcontent-%COMP%] {\n  border-left: 3px solid #22c55e;\n}\n.rec-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.rec-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.actionable-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.rec-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.975rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--surface-200, #e5e7eb);\n  color: var(--text-color-secondary, #6b7280);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.rec-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n  line-height: 1.5;\n}\n.rec-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.impact-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.impact-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n  margin-right: 4px;\n}\n.impact-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-color, #1f2937);\n}\n.effort-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.effort-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n}\n.effort-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.effort-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--surface-300, #d1d5db);\n}\n.effort-dots.effort-low[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1) {\n  background: #22c55e;\n}\n.effort-dots.effort-medium[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1), \n.effort-dots.effort-medium[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2) {\n  background: #f59e0b;\n}\n.effort-dots.effort-high[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.effort-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.block-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.footer-stat[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.dark[_nghost-%COMP%]   .recommendation-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .recommendation-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .block-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-bottom-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .block-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-low[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #86efac;\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-medium[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fcd34d;\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-high[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .rec-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rec-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.dark[_nghost-%COMP%]   .category-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  background: var(--surface-600);\n  color: var(--text-color-secondary);\n}\n.dark[_nghost-%COMP%]   .block-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-footer[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .block-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .rec-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .rec-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .impact-section[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=recommendation-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommendationBlockComponent, [{
    type: Component,
    args: [{ selector: "app-recommendation-block", imports: [CommonModule], template: `<div class="recommendation-block" [ngClass]="getBlockClasses()">
  <!-- Header -->
  <div class="block-header">
    <div class="header-content">
      <span class="header-icon">\u{1F4A1}</span>
      <h3 class="block-title">{{ block.content.title }}</h3>
    </div>
    <span class="priority-badge" [ngClass]="getPriorityClass()">
      {{ block.content.priority | uppercase }}
    </span>
  </div>

  <!-- Recommendations List -->
  <div class="recommendations-list">
    @for (rec of block.content.recommendations; track trackByRec($index, rec)) {
      <div
        class="recommendation-card"
        [ngClass]="{ actionable: rec.actionable }"
      >
        <div class="rec-header">
          <div class="rec-title-row">
            @if (rec.actionable) {
              <span class="actionable-icon">\u2713</span>
            }
            <h4 class="rec-title">{{ rec.title }}</h4>
          </div>
          <span class="category-badge">{{ rec.category }}</span>
        </div>
        <p class="rec-description">{{ rec.description }}</p>
        <div class="rec-footer">
          <div class="impact-section">
            <span class="impact-label">Impact:</span>
            <span class="impact-text">{{ rec.impact }}</span>
          </div>
          <div class="effort-indicator">
            <span class="effort-label">Effort:</span>
            <span class="effort-dots" [ngClass]="'effort-' + rec.effort">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </span>
            <span class="effort-text">{{ rec.effort | titlecase }}</span>
          </div>
        </div>
      </div>
    }
  </div>

  <!-- Footer -->
  @if (getActionableCount() > 0) {
    <div class="block-footer">
      <span class="footer-stat">
        {{ getActionableCount() }} actionable recommendation{{
          getActionableCount() > 1 ? 's' : ''
        }}
      </span>
    </div>
  }
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.scss */\n.recommendation-block {\n  background: var(--surface-0, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-left: 4px solid var(--primary-500, #3b82f6);\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.recommendation-block:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.recommendation-block.theme-info {\n  border-left-color: #06b6d4;\n}\n.recommendation-block.theme-success {\n  border-left-color: #22c55e;\n}\n.recommendation-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.recommendation-block.theme-danger {\n  border-left-color: #ef4444;\n}\n.block-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-icon {\n  font-size: 1.5rem;\n}\n.block-title {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.priority-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.priority-badge.priority-low {\n  background: #dcfce7;\n  color: #166534;\n}\n.priority-badge.priority-medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-badge.priority-critical {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.recommendations-list {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recommendation-card {\n  background: var(--surface-50, #f9fafb);\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-radius: 8px;\n  padding: 16px;\n  transition: all 0.2s ease;\n}\n.recommendation-card:hover {\n  background: var(--surface-100, #f3f4f6);\n  border-color: var(--surface-300, #d1d5db);\n}\n.recommendation-card.actionable {\n  border-left: 3px solid #22c55e;\n}\n.rec-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.rec-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.actionable-icon {\n  color: #22c55e;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.rec-title {\n  margin: 0;\n  font-size: 0.975rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.category-badge {\n  padding: 2px 8px;\n  background: var(--surface-200, #e5e7eb);\n  color: var(--text-color-secondary, #6b7280);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.rec-description {\n  margin: 0 0 12px 0;\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n  line-height: 1.5;\n}\n.rec-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.impact-section {\n  flex: 1;\n  min-width: 200px;\n}\n.impact-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n  margin-right: 4px;\n}\n.impact-text {\n  font-size: 0.8rem;\n  color: var(--text-color, #1f2937);\n}\n.effort-indicator {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.effort-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n}\n.effort-dots {\n  display: flex;\n  gap: 3px;\n}\n.effort-dots .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--surface-300, #d1d5db);\n}\n.effort-dots.effort-low .dot:nth-child(1) {\n  background: #22c55e;\n}\n.effort-dots.effort-medium .dot:nth-child(1),\n.effort-dots.effort-medium .dot:nth-child(2) {\n  background: #f59e0b;\n}\n.effort-dots.effort-high .dot {\n  background: #ef4444;\n}\n.effort-text {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.block-footer {\n  padding: 12px 20px;\n  border-top: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.footer-stat {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n:host-context(.dark) .recommendation-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .block-header {\n  background: var(--surface-700);\n  border-bottom-color: var(--surface-600);\n}\n:host-context(.dark) .block-title {\n  color: var(--text-color);\n}\n:host-context(.dark) .priority-badge.priority-low {\n  background: rgba(34, 197, 94, 0.2);\n  color: #86efac;\n}\n:host-context(.dark) .priority-badge.priority-medium {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fcd34d;\n}\n:host-context(.dark) .priority-badge.priority-high {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark) .recommendation-card {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .recommendation-card:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .rec-title {\n  color: var(--text-color);\n}\n:host-context(.dark) .category-badge {\n  background: var(--surface-600);\n  color: var(--text-color-secondary);\n}\n:host-context(.dark) .block-footer {\n  background: var(--surface-700);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .block-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .rec-header {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .rec-footer {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .impact-section {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=recommendation-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommendationBlockComponent, { className: "RecommendationBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.ts", lineNumber: 14 });
})();

// src/app/features/development/components/analytical-report/dashboard/analytics-dashboard.component.ts
var _c04 = ["dashboardContainer"];
function AnalyticsDashboardComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 61)(2, "path", 62);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 21);
    \u0275\u0275element(1, "circle", 63);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_1_Conditional_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllVehicles = !ctx_r1.showAllVehicles);
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 65);
    \u0275\u0275element(3, "polyline", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAllVehicles ? "Show less" : "Show all", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.showAllVehicles);
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getVehicleDisplayText());
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_50_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r4);
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275repeaterCreate(1, AnalyticsDashboardComponent_Conditional_1_Conditional_50_For_2_Template, 2, 1, "span", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.vehicleNames);
  }
}
function AnalyticsDashboardComponent_Conditional_1_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "circle", 68)(4, "path", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 34)(6, "span", 35);
    \u0275\u0275text(7, "Analysis Query");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1('"', ctx_r1.userQuery, '"');
  }
}
function AnalyticsDashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 10);
    \u0275\u0275element(5, "rect", 11)(6, "rect", 12)(7, "rect", 13)(8, "rect", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 15)(10, "h1", 16);
    \u0275\u0275text(11, "Fleet Analytics Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 17);
    \u0275\u0275text(13, "AI-Powered Insights");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 18)(15, "button", 19);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275conditionalCreate(16, AnalyticsDashboardComponent_Conditional_1_Conditional_16_Template, 3, 0, ":svg:svg", 20);
    \u0275\u0275conditionalCreate(17, AnalyticsDashboardComponent_Conditional_1_Conditional_17_Template, 2, 0, ":svg:svg", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrint());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 20);
    \u0275\u0275element(21, "polyline", 23)(22, "path", 24)(23, "rect", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Print ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 26)(26, "div", 27)(27, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 29);
    \u0275\u0275element(29, "rect", 30)(30, "line", 31)(31, "line", 32)(32, "line", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 34)(34, "span", 35);
    \u0275\u0275text(35, "Analysis Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 36);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 29);
    \u0275\u0275element(41, "path", 38)(42, "circle", 39)(43, "circle", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 34)(45, "div", 41)(46, "span", 35);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, AnalyticsDashboardComponent_Conditional_1_Conditional_48_Template, 4, 3, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(49, AnalyticsDashboardComponent_Conditional_1_Conditional_49_Template, 3, 1, "div", 43);
    \u0275\u0275conditionalCreate(50, AnalyticsDashboardComponent_Conditional_1_Conditional_50_Template, 3, 0, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(51, AnalyticsDashboardComponent_Conditional_1_Conditional_51_Template, 10, 1, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 46)(53, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 48);
    \u0275\u0275element(55, "path", 49)(56, "polyline", 50)(57, "line", 51)(58, "line", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Executive Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "p", 53);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 54)(64, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(65, "svg", 56);
    \u0275\u0275element(66, "circle", 57)(67, "polyline", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 56);
    \u0275\u0275element(72, "path", 59)(73, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "span");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.isRecalculating);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isRecalculating ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isRecalculating ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRecalculating ? "Regenerating..." : "Regenerate", " ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.dateRange || "Not specified");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.showAllVehicles);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Vehicles (", (ctx_r1.vehicleNames == null ? null : ctx_r1.vehicleNames.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.vehicleNames && ctx_r1.vehicleNames.length > 2 ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.showAllVehicles ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showAllVehicles ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.userQuery ? 51 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.summary);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Generated: ", ctx_r1.formatTimestamp((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.timestamp) || ""));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("ID: ", ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.request_id);
  }
}
function AnalyticsDashboardComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275element(2, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.loadingProgress, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.loadingProgress, "%");
  }
}
function AnalyticsDashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 71)(2, "div", 72);
    \u0275\u0275element(3, "div", 73)(4, "div", 73)(5, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 74);
    \u0275\u0275text(7, "Generating Analytics Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 75);
    \u0275\u0275text(9, " AI is analyzing your data and creating interactive visualizations... ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, AnalyticsDashboardComponent_Conditional_2_Conditional_10_Template, 5, 3, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.loadingProgress > 0 ? 10 : -1);
  }
}
function AnalyticsDashboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 80)(2, "div", 81);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 82);
    \u0275\u0275text(5, "Dashboard Generation Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 84)(9, "button", 85);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRetry());
    });
    \u0275\u0275elementStart(10, "i", 86);
    \u0275\u0275text(11, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Retry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 87);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_3_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDismissError());
    });
    \u0275\u0275text(14, " Dismiss ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-summary-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-kpi-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chart-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-alert-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recommendation-block", 90);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "h4");
    \u0275\u0275text(2, "Map Block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Coming Soon");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsDashboardComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275conditionalCreate(1, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_1_Template, 1, 1, "app-summary-block", 90);
    \u0275\u0275conditionalCreate(2, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_2_Template, 1, 1, "app-kpi-block", 90);
    \u0275\u0275conditionalCreate(3, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_3_Template, 1, 1, "app-chart-block", 90);
    \u0275\u0275conditionalCreate(4, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_4_Template, 1, 1, "app-alert-block", 90);
    \u0275\u0275conditionalCreate(5, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_5_Template, 1, 1, "app-table-block", 90);
    \u0275\u0275conditionalCreate(6, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_6_Template, 1, 1, "app-recommendation-block", 90);
    \u0275\u0275conditionalCreate(7, AnalyticsDashboardComponent_Conditional_4_For_3_Conditional_7_Template, 5, 0, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getBlockClasses(block_r6));
    \u0275\u0275attribute("data-block-id", block_r6.block_id)("data-block-type", block_r6.block_type);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "summary" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "kpi" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "chart" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "alert" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "table" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "recommendation" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(block_r6.block_type === "map_markers" ? 7 : -1);
  }
}
function AnalyticsDashboardComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 92)(2, "div", 93);
    \u0275\u0275text(3, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No Analytics Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No data blocks were generated for this analysis.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 85);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_Conditional_4_Conditional_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275text(9, " Generate New Report ");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsDashboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5, 0);
    \u0275\u0275repeaterCreate(2, AnalyticsDashboardComponent_Conditional_4_For_3_Template, 8, 10, "div", 88, \u0275\u0275componentInstance().trackByBlock, true);
    \u0275\u0275conditionalCreate(4, AnalyticsDashboardComponent_Conditional_4_Conditional_4_Template, 10, 0, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks == null ? null : ctx_r1.response.response.blocks.length) === 0 ? 4 : -1);
  }
}
function AnalyticsDashboardComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "ms generation time ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.metadata == null ? null : ctx_r1.response.response.metadata.generation_time) || "N/A");
  }
}
function AnalyticsDashboardComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " alerts ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAlertCount());
  }
}
function AnalyticsDashboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 94)(2, "span", 95)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " blocks ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AnalyticsDashboardComponent_Conditional_5_Conditional_6_Template, 4, 1, "span", 95);
    \u0275\u0275conditionalCreate(7, AnalyticsDashboardComponent_Conditional_5_Conditional_7_Template, 4, 1, "span", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 96)(9, "small", 97);
    \u0275\u0275text(10, " Powered by CypherView AI Analytics ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks == null ? null : ctx_r1.response.response.blocks.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.metadata) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getAlertCount() > 0 ? 7 : -1);
  }
}
var AnalyticsDashboardComponent = class _AnalyticsDashboardComponent {
  layoutService = inject(DashboardLayoutService);
  response;
  isLoading = false;
  error;
  loadingProgress = 0;
  userQuery;
  dateRange;
  vehicleNames;
  clientTimeZone;
  clientLanguage;
  showAllVehicles = false;
  recalculate = new EventEmitter();
  dashboardContainer;
  isRecalculating = false;
  ngAfterViewInit() {
    if (this.response?.response?.layout && this.dashboardContainer) {
      setTimeout(() => this.applyLayout(), 100);
    }
  }
  ngOnDestroy() {
    this.layoutService.destroy();
  }
  trackByBlock(index, block) {
    return block.block_id;
  }
  applyLayout() {
    if (this.response?.response?.layout && this.dashboardContainer) {
      this.layoutService.applyLayout(this.dashboardContainer, this.response.response.layout, this.response.response.blocks, {
        enableAnimations: true,
        gapSizePx: 16,
        minBlockHeight: 200
      });
    }
  }
  getBlockClasses(block) {
    const classes = [`block-${block.block_type}`, `priority-${block.priority}`];
    if (block.visual?.theme) {
      classes.push(`theme-${block.visual.theme}`);
    }
    if (block.visual?.elevation !== void 0 && block.visual.elevation !== null) {
      classes.push(`elevation-${block.visual.elevation}`);
    }
    return classes;
  }
  formatTimestamp(timestamp) {
    try {
      const locale = this.clientLanguage != null && this.clientLanguage === "af" ? "af-ZA" : "en-ZA";
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: this.clientTimeZone ?? "Africa/Johannesburg"
      };
      return new Date(timestamp).toLocaleString(locale, options);
    } catch {
      return timestamp;
    }
  }
  getAlertCount() {
    return this.response?.response?.blocks?.filter((b) => b.block_type === "alert").length ?? 0;
  }
  getVehicleDisplayText() {
    if (!this.vehicleNames || this.vehicleNames.length === 0) {
      return "No vehicles selected";
    }
    if (this.vehicleNames.length <= 2) {
      return this.vehicleNames.join(", ");
    }
    return `${this.vehicleNames.slice(0, 2).join(", ")} +${this.vehicleNames.length - 2} more`;
  }
  onRecalculate() {
    this.isRecalculating = true;
    this.recalculate.emit();
  }
  /** Called by parent when recalculation is complete */
  resetRecalculatingState() {
    this.isRecalculating = false;
  }
  onPrint() {
    window.print();
  }
  onRetry() {
    this.error = void 0;
  }
  onDismissError() {
    this.error = void 0;
  }
  static \u0275fac = function AnalyticsDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsDashboardComponent, selectors: [["app-analytics-dashboard"]], viewQuery: function AnalyticsDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dashboardContainer = _t.first);
    }
  }, inputs: { response: "response", isLoading: "isLoading", error: "error", loadingProgress: "loadingProgress", userQuery: "userQuery", dateRange: "dateRange", vehicleNames: "vehicleNames", clientTimeZone: "clientTimeZone", clientLanguage: "clientLanguage" }, outputs: { recalculate: "recalculate" }, decls: 6, vars: 6, consts: [["dashboardContainer", ""], [1, "analytics-dashboard"], [1, "dashboard-header"], [1, "loading-container"], [1, "error-container"], [1, "dashboard-content"], [1, "dashboard-footer"], [1, "header-top-bar"], [1, "header-branding"], [1, "brand-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.8"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.6"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.6"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.4"], [1, "brand-text"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-actions"], [1, "action-btn", "recalculate-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "spinning"], [1, "action-btn", "print-btn", 3, "click"], ["points", "6,9 6,2 18,2 18,9"], ["d", "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], [1, "context-cards"], [1, "context-card", "date-card"], [1, "card-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "context-card", "vehicles-card"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], [1, "card-header-row"], [1, "toggle-vehicles-btn"], [1, "vehicles-container"], [1, "vehicles-list-full"], [1, "context-card", "query-card"], [1, "summary-section"], [1, "summary-header"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "summary-text"], [1, "header-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12,6 12,12 16,14"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["d", "M23 4v6h-6M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "32", "stroke-dashoffset", "32"], [1, "toggle-vehicles-btn", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6,9 12,15 18,9"], [1, "vehicle-chip"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "card-value", "query-text"], [1, "loading-content"], [1, "loading-spinner"], [1, "spinner-ring"], [1, "loading-title"], [1, "loading-description"], [1, "loading-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "error-content"], [1, "error-icon"], [1, "error-title"], [1, "error-message"], [1, "error-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "retry-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "dashboard-block", 3, "ngClass"], [1, "empty-dashboard"], [3, "block"], [1, "placeholder-block"], [1, "empty-content"], [1, "empty-icon"], [1, "footer-stats"], [1, "stat-item"], [1, "footer-actions"], [1, "powered-by"]], template: function AnalyticsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, AnalyticsDashboardComponent_Conditional_1_Template, 76, 15, "div", 2);
      \u0275\u0275conditionalCreate(2, AnalyticsDashboardComponent_Conditional_2_Template, 11, 1, "div", 3);
      \u0275\u0275conditionalCreate(3, AnalyticsDashboardComponent_Conditional_3_Template, 15, 1, "div", 4);
      \u0275\u0275conditionalCreate(4, AnalyticsDashboardComponent_Conditional_4_Template, 5, 1, "div", 5);
      \u0275\u0275conditionalCreate(5, AnalyticsDashboardComponent_Conditional_5_Template, 11, 3, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-layout-type", ctx.response == null ? null : ctx.response.response == null ? null : ctx.response.response.layout == null ? null : ctx.response.response.layout.type);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.response == null ? null : ctx.response.response == null ? null : ctx.response.response.summary) ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.response == null ? null : ctx.response.response) && !ctx.isLoading && !ctx.error ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.response == null ? null : ctx.response.response) && !ctx.isLoading && !ctx.error ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    SummaryBlockComponent,
    KpiBlockComponent,
    ChartBlockComponent,
    AlertBlockComponent,
    TableBlockComponent,
    RecommendationBlockComponent
  ], styles: ["\n\n.analytics-dashboard[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f3f4f6;\n  transition: all 0.3s ease;\n}\n.analytics-dashboard[data-layout-type=dashboard][_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid #e2e8f0;\n  padding: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.header-top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.header-branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500) 0%,\n      var(--primary-600) 100%);\n  border-radius: 12px;\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin: 0;\n  letter-spacing: -0.025em;\n}\n.dashboard-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: var(--surface-0);\n  border: 1px solid var(--surface-200);\n  border-radius: 8px;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-50);\n  border-color: var(--primary-300);\n  color: var(--primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.action-btn.recalculate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500),\n      var(--primary-600));\n  border-color: var(--primary-500);\n  color: white;\n}\n.action-btn[_ngcontent-%COMP%]   .spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.context-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n  padding: 24px 32px;\n  background: #f8fafc;\n}\n.context-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.context-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-200);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.card-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.date-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.vehicles-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16a34a;\n}\n.query-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-color-secondary);\n}\n.toggle-vehicles-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: transparent;\n  border: 1px solid var(--surface-200);\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: var(--primary-600);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.toggle-vehicles-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n}\n.toggle-vehicles-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.toggle-vehicles-btn[_ngcontent-%COMP%]   svg.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n  line-height: 1.4;\n}\n.card-value.query-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-color-secondary);\n}\n.vehicles-container[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.vehicles-list-full[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.vehicle-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border: 1px solid #86efac;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #166534;\n  white-space: nowrap;\n}\n.vehicles-card.expanded[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.summary-section[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: #ffffff;\n  border-top: 1px solid #e2e8f0;\n}\n.summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  color: var(--primary-600);\n  font-weight: 600;\n  font-size: 0.9375rem;\n}\n.summary-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--text-color);\n  margin: 0;\n  max-width: none;\n}\n.header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  padding: 14px 32px;\n  background: #f1f5f9;\n  border-top: 1px solid #e2e8f0;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n}\n.meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 24px;\n}\n.spinner-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 3px solid transparent;\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1.5s linear infinite;\n}\n.spinner-ring[_ngcontent-%COMP%]:nth-child(1) {\n  width: 60px;\n  height: 60px;\n  top: 10px;\n  left: 10px;\n}\n.spinner-ring[_ngcontent-%COMP%]:nth-child(2) {\n  width: 45px;\n  height: 45px;\n  top: 17.5px;\n  left: 17.5px;\n  animation-delay: -0.2s;\n  border-top-color: var(--primary-400);\n}\n.spinner-ring[_ngcontent-%COMP%]:nth-child(3) {\n  width: 30px;\n  height: 30px;\n  top: 25px;\n  left: 25px;\n  animation-delay: -0.4s;\n  border-top-color: var(--primary-300);\n}\n.loading-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.loading-description[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 20px 0;\n}\n.loading-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.loading-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--surface-200);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.loading-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-500),\n      var(--primary-400));\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.loading-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  min-width: 40px;\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.error-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n  padding: 32px;\n  background: var(--surface-0);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200);\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.error-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 24px 0;\n}\n.error-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 1400px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 24px;\n  min-height: 400px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 20px;\n  align-content: start;\n}\n.dashboard-block[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  grid-column: span 12;\n  min-height: 0;\n}\n.dashboard-block.block-summary[_ngcontent-%COMP%], \n.dashboard-block.block-kpi[_ngcontent-%COMP%], \n.dashboard-block.block-table[_ngcontent-%COMP%], \n.dashboard-block.block-recommendation[_ngcontent-%COMP%], \n.dashboard-block.block-chart[_ngcontent-%COMP%] {\n  grid-column: span 12;\n}\n.dashboard-block.block-alert[_ngcontent-%COMP%] {\n  grid-column: span 6;\n}\n.dashboard-block.priority-1[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.dashboard-block.priority-2[_ngcontent-%COMP%] {\n  z-index: 8;\n}\n.dashboard-block.priority-3[_ngcontent-%COMP%] {\n  z-index: 6;\n}\n.dashboard-block.theme-primary[_ngcontent-%COMP%] {\n  --block-accent: var(--primary-500);\n}\n.dashboard-block.theme-success[_ngcontent-%COMP%] {\n  --block-accent: #22c55e;\n}\n.dashboard-block.theme-warning[_ngcontent-%COMP%] {\n  --block-accent: #f59e0b;\n}\n.dashboard-block.theme-danger[_ngcontent-%COMP%] {\n  --block-accent: #ef4444;\n}\n.dashboard-block.theme-info[_ngcontent-%COMP%] {\n  --block-accent: #06b6d4;\n}\n.dashboard-block.elevation-1[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.dashboard-block.elevation-2[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.dashboard-block.elevation-3[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.placeholder-block[_ngcontent-%COMP%] {\n  background: var(--surface-0);\n  border: 2px dashed var(--surface-300);\n  border-radius: 8px;\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.placeholder-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-weight: 600;\n}\n.placeholder-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.empty-dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  padding: 40px 20px;\n}\n.empty-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 300px;\n}\n.empty-content[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  opacity: 0.3;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  margin: 0 0 8px 0;\n}\n.empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin: 0 0 20px 0;\n}\n.dashboard-footer[_ngcontent-%COMP%] {\n  background: var(--surface-0);\n  border-top: 1px solid var(--surface-200);\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 0.875rem;\n}\n.footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.footer-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.powered-by[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-500);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dark[_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-900),\n      var(--surface-800));\n  border-bottom-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .header-top-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-top-bar[_ngcontent-%COMP%] {\n  background: var(--surface-900);\n  border-bottom-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .context-cards[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .context-cards[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .context-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .context-card[_ngcontent-%COMP%] {\n  background: var(--surface-900);\n  border-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .context-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .context-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-700);\n}\n.dark[_nghost-%COMP%]   .date-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .date-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.2),\n      rgba(37, 99, 235, 0.3));\n  color: #60a5fa;\n}\n.dark[_nghost-%COMP%]   .vehicles-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicles-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 163, 74, 0.2),\n      rgba(22, 163, 74, 0.3));\n  color: #4ade80;\n}\n.dark[_nghost-%COMP%]   .toggle-vehicles-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-vehicles-btn[_ngcontent-%COMP%] {\n  border-color: var(--surface-600);\n  color: var(--primary-400);\n}\n.dark[_nghost-%COMP%]   .toggle-vehicles-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .toggle-vehicles-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-700);\n  border-color: var(--surface-500);\n}\n.dark[_nghost-%COMP%]   .vehicle-chip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-chip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 163, 74, 0.2),\n      rgba(22, 163, 74, 0.3));\n  border-color: rgba(74, 222, 128, 0.3);\n  color: #4ade80;\n}\n.dark[_nghost-%COMP%]   .query-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .query-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(217, 119, 6, 0.2),\n      rgba(217, 119, 6, 0.3));\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .summary-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .summary-section[_ngcontent-%COMP%] {\n  background: var(--surface-900);\n  border-top-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .header-meta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-meta[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-top-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn.recalculate-btn[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .action-btn.recalculate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  border-color: var(--primary-600);\n}\n.dark[_nghost-%COMP%]   .error-content[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .dashboard-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dashboard-footer[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 1200px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding: 20px;\n  }\n  .dashboard-block.block-alert[_ngcontent-%COMP%] {\n    grid-column: span 6;\n  }\n}\n@media (max-width: 992px) {\n  .dashboard-content[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .dashboard-block.block-alert[_ngcontent-%COMP%] {\n    grid-column: span 12;\n  }\n}\n@media (max-width: 768px) {\n  .header-top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px 20px;\n    align-items: stretch;\n  }\n  .header-branding[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .brand-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .dashboard-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .dashboard-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .context-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 16px 20px;\n    gap: 12px;\n  }\n  .context-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .summary-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .summary-text[_ngcontent-%COMP%] {\n    font-size: 0.9375rem;\n  }\n  .header-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    padding: 12px 20px;\n    align-items: flex-start;\n  }\n  .dashboard-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n  }\n  .dashboard-block[_ngcontent-%COMP%], \n   .dashboard-block.block-summary[_ngcontent-%COMP%], \n   .dashboard-block.block-kpi[_ngcontent-%COMP%], \n   .dashboard-block.block-chart[_ngcontent-%COMP%], \n   .dashboard-block.block-alert[_ngcontent-%COMP%], \n   .dashboard-block.block-table[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .dashboard-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .footer-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n@media print {\n  .header-actions[_ngcontent-%COMP%], \n   .action-btn[_ngcontent-%COMP%], \n   .toggle-vehicles-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .analytics-dashboard[_ngcontent-%COMP%] {\n    background: white !important;\n    min-height: auto !important;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n    background: white !important;\n    border-bottom: 2px solid #333 !important;\n  }\n  .header-top-bar[_ngcontent-%COMP%] {\n    background: white !important;\n    border-bottom: 1px solid #ccc !important;\n  }\n  .brand-icon[_ngcontent-%COMP%] {\n    background: #333 !important;\n    box-shadow: none !important;\n  }\n  .context-cards[_ngcontent-%COMP%] {\n    background: white !important;\n  }\n  .context-card[_ngcontent-%COMP%] {\n    background: #f5f5f5 !important;\n    box-shadow: none !important;\n    border: 1px solid #ccc !important;\n  }\n  .summary-section[_ngcontent-%COMP%] {\n    background: white !important;\n    border: 1px solid #ccc !important;\n  }\n  .dashboard-block[_ngcontent-%COMP%], \n   .block-container[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    margin-bottom: 16px;\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .dashboard-section[_ngcontent-%COMP%] {\n    display: block !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  table[_ngcontent-%COMP%] {\n    break-inside: auto;\n  }\n  tr[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .header-meta[_ngcontent-%COMP%] {\n    background: #f5f5f5 !important;\n    border-top: 1px solid #ccc !important;\n  }\n}\n/*# sourceMappingURL=analytics-dashboard.component.css.map */"], data: { animation: [
    // Will be added if Angular animations are available
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticsDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-analytics-dashboard", imports: [
      CommonModule,
      SummaryBlockComponent,
      KpiBlockComponent,
      ChartBlockComponent,
      AlertBlockComponent,
      TableBlockComponent,
      RecommendationBlockComponent
    ], animations: [
      // Will be added if Angular animations are available
    ], template: `<div
  class="analytics-dashboard"
  [attr.data-layout-type]="response?.response?.layout?.type"
>
  <!-- Dashboard Header -->
  @if (response?.response?.summary) {
    <div class="dashboard-header">
      <!-- Top Bar with Title and Actions -->
      <div class="header-top-bar">
        <div class="header-branding">
          <div class="brand-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                fill="currentColor"
                opacity="0.8"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                fill="currentColor"
                opacity="0.6"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                fill="currentColor"
                opacity="0.6"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                fill="currentColor"
                opacity="0.4"
              />
            </svg>
          </div>
          <div class="brand-text">
            <h1 class="dashboard-title">Fleet Analytics Report</h1>
            <span class="dashboard-subtitle">AI-Powered Insights</span>
          </div>
        </div>
        <div class="header-actions">
          <button
            class="action-btn recalculate-btn"
            (click)="onRecalculate()"
            [disabled]="isRecalculating"
          >
            @if (!isRecalculating) {
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M23 4v6h-6M1 20v-6h6" />
                <path
                  d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                />
              </svg>
            }
            @if (isRecalculating) {
              <svg
                class="spinning"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke-dasharray="32"
                  stroke-dashoffset="32"
                />
              </svg>
            }
            {{ isRecalculating ? 'Regenerating...' : 'Regenerate' }}
          </button>
          <button class="action-btn print-btn" (click)="onPrint()">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="6,9 6,2 18,2 18,9" />
              <path
                d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
              />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print
          </button>
        </div>
      </div>
      <!-- Report Context Cards -->
      <div class="context-cards">
        <!-- Date Range Card -->
        <div class="context-card date-card">
          <div class="card-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div class="card-content">
            <span class="card-label">Analysis Period</span>
            <span class="card-value">{{ dateRange || 'Not specified' }}</span>
          </div>
        </div>
        <!-- Vehicles Card -->
        <div
          class="context-card vehicles-card"
          [class.expanded]="showAllVehicles"
        >
          <div class="card-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"
              />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <div class="card-content">
            <div class="card-header-row">
              <span class="card-label"
                >Vehicles ({{ vehicleNames?.length || 0 }})</span
              >
              @if (vehicleNames && vehicleNames.length > 2) {
                <button
                  class="toggle-vehicles-btn"
                  (click)="showAllVehicles = !showAllVehicles"
                >
                  {{ showAllVehicles ? 'Show less' : 'Show all' }}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    [class.rotated]="showAllVehicles"
                  >
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </button>
              }
            </div>
            @if (!showAllVehicles) {
              <div class="vehicles-container">
                <span class="card-value">{{ getVehicleDisplayText() }}</span>
              </div>
            }
            @if (showAllVehicles) {
              <div class="vehicles-list-full">
                @for (vehicle of vehicleNames; track vehicle) {
                  <span class="vehicle-chip">{{ vehicle }}</span>
                }
              </div>
            }
          </div>
        </div>
        <!-- Query Card -->
        @if (userQuery) {
          <div class="context-card query-card">
            <div class="card-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <div class="card-content">
              <span class="card-label">Analysis Query</span>
              <span class="card-value query-text">"{{ userQuery }}"</span>
            </div>
          </div>
        }
      </div>
      <!-- Summary Section -->
      <div class="summary-section">
        <div class="summary-header">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          <span>Executive Summary</span>
        </div>
        <p class="summary-text">{{ response?.response?.summary }}</p>
      </div>
      <!-- Metadata Footer -->
      <div class="header-meta">
        <div class="meta-item">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span
            >Generated:
            {{ formatTimestamp(response?.response?.timestamp || '') }}</span
          >
        </div>
        <div class="meta-item">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
          </svg>
          <span>ID: {{ response?.response?.request_id }}</span>
        </div>
      </div>
    </div>
  }

  <!-- Loading State -->
  @if (isLoading) {
    <div class="loading-container">
      <div class="loading-content">
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <h3 class="loading-title">Generating Analytics Dashboard</h3>
        <p class="loading-description">
          AI is analyzing your data and creating interactive visualizations...
        </p>
        @if (loadingProgress > 0) {
          <div class="loading-progress">
            <div class="progress-bar">
              <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->
              <div
                class="progress-fill"
                [style.width.%]="loadingProgress"
              ></div>
            </div>
            <span class="progress-text">{{ loadingProgress }}%</span>
          </div>
        }
      </div>
    </div>
  }

  <!-- Error State -->
  @if (error) {
    <div class="error-container">
      <div class="error-content">
        <div class="error-icon">\u26A0\uFE0F</div>
        <h4 class="error-title">Dashboard Generation Failed</h4>
        <p class="error-message">{{ error }}</p>
        <div class="error-actions">
          <button class="btn btn-primary" (click)="onRetry()">
            <i class="retry-icon">\u{1F504}</i>
            Retry
          </button>
          <button class="btn btn-secondary" (click)="onDismissError()">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  }

  <!-- Dashboard Content -->
  @if (response?.response && !isLoading && !error) {
    <div class="dashboard-content" #dashboardContainer>
      <!-- Dynamic Block Rendering -->
      @for (
        block of response?.response?.blocks;
        track trackByBlock($index, block)
      ) {
        <div
          [attr.data-block-id]="block.block_id"
          [attr.data-block-type]="block.block_type"
          class="dashboard-block"
          [ngClass]="getBlockClasses(block)"
        >
          <!-- Summary Block -->
          @if (block.block_type === 'summary') {
            <app-summary-block [block]="block"> </app-summary-block>
          }
          <!-- KPI Block -->
          @if (block.block_type === 'kpi') {
            <app-kpi-block [block]="block"> </app-kpi-block>
          }
          <!-- Chart Block -->
          @if (block.block_type === 'chart') {
            <app-chart-block [block]="block"> </app-chart-block>
          }
          <!-- Alert Block -->
          @if (block.block_type === 'alert') {
            <app-alert-block [block]="block"> </app-alert-block>
          }
          <!-- Table Block -->
          @if (block.block_type === 'table') {
            <app-table-block [block]="block"> </app-table-block>
          }
          <!-- Recommendation Block -->
          @if (block.block_type === 'recommendation') {
            <app-recommendation-block [block]="block">
            </app-recommendation-block>
          }
          <!-- Map Block (Future) -->
          @if (block.block_type === 'map_markers') {
            <div class="placeholder-block">
              <h4>Map Block</h4>
              <p>Coming Soon</p>
            </div>
          }
        </div>
      }
      <!-- Empty State -->
      @if (response?.response?.blocks?.length === 0) {
        <div class="empty-dashboard">
          <div class="empty-content">
            <div class="empty-icon">\u{1F4CA}</div>
            <h3>No Analytics Available</h3>
            <p>No data blocks were generated for this analysis.</p>
            <button class="btn btn-primary" (click)="onRecalculate()">
              Generate New Report
            </button>
          </div>
        </div>
      }
    </div>
  }

  <!-- Dashboard Footer -->
  @if (response?.response && !isLoading && !error) {
    <div class="dashboard-footer">
      <div class="footer-stats">
        <span class="stat-item">
          <strong>{{ response?.response?.blocks?.length || 0 }}</strong> blocks
        </span>
        @if (response?.response?.metadata) {
          <span class="stat-item">
            <strong>{{
              response?.response?.metadata?.generation_time || 'N/A'
            }}</strong
            >ms generation time
          </span>
        }
        @if (getAlertCount() > 0) {
          <span class="stat-item">
            <strong>{{ getAlertCount() }}</strong> alerts
          </span>
        }
      </div>
      <div class="footer-actions">
        <small class="powered-by"> Powered by CypherView AI Analytics </small>
      </div>
    </div>
  }
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/dashboard/analytics-dashboard.component.scss */\n.analytics-dashboard {\n  min-height: 100vh;\n  background: #f3f4f6;\n  transition: all 0.3s ease;\n}\n.analytics-dashboard[data-layout-type=dashboard] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-header {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-bottom: 1px solid #e2e8f0;\n  padding: 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.header-top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #ffffff;\n}\n.header-branding {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.brand-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500) 0%,\n      var(--primary-600) 100%);\n  border-radius: 12px;\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.brand-text {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin: 0;\n  letter-spacing: -0.025em;\n}\n.dashboard-subtitle {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: var(--surface-0);\n  border: 1px solid var(--surface-200);\n  border-radius: 8px;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.action-btn svg {\n  flex-shrink: 0;\n}\n.action-btn:hover:not(:disabled) {\n  background: var(--primary-50);\n  border-color: var(--primary-300);\n  color: var(--primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);\n}\n.action-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.action-btn.recalculate-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-500),\n      var(--primary-600));\n  border-color: var(--primary-500);\n  color: white;\n}\n.action-btn .spinning {\n  animation: spin 1s linear infinite;\n}\n.context-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n  padding: 24px 32px;\n  background: #f8fafc;\n}\n.context-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 20px;\n  background: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.2s ease;\n}\n.context-card:hover {\n  border-color: var(--primary-200);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.card-icon svg {\n  opacity: 0.9;\n}\n.date-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe 0%,\n      #bfdbfe 100%);\n  color: #2563eb;\n}\n.vehicles-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  color: #16a34a;\n}\n.query-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #d97706;\n}\n.card-content {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n  flex: 1;\n}\n.card-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.card-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-color-secondary);\n}\n.toggle-vehicles-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background: transparent;\n  border: 1px solid var(--surface-200);\n  border-radius: 4px;\n  font-size: 0.6875rem;\n  font-weight: 500;\n  color: var(--primary-600);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.toggle-vehicles-btn:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n}\n.toggle-vehicles-btn svg {\n  transition: transform 0.2s ease;\n}\n.toggle-vehicles-btn svg.rotated {\n  transform: rotate(180deg);\n}\n.card-value {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: var(--text-color);\n  line-height: 1.4;\n}\n.card-value.query-text {\n  font-style: italic;\n  color: var(--text-color-secondary);\n}\n.vehicles-container {\n  margin-top: 2px;\n}\n.vehicles-list-full {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.vehicle-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n  border: 1px solid #86efac;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #166534;\n  white-space: nowrap;\n}\n.vehicles-card.expanded .card-content {\n  gap: 8px;\n}\n.summary-section {\n  padding: 24px 32px;\n  background: #ffffff;\n  border-top: 1px solid #e2e8f0;\n}\n.summary-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n  color: var(--primary-600);\n  font-weight: 600;\n  font-size: 0.9375rem;\n}\n.summary-header svg {\n  opacity: 0.8;\n}\n.summary-text {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: var(--text-color);\n  margin: 0;\n  max-width: none;\n}\n.header-meta {\n  display: flex;\n  gap: 24px;\n  padding: 14px 32px;\n  background: #f1f5f9;\n  border-top: 1px solid #e2e8f0;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n}\n.meta-item svg {\n  opacity: 0.6;\n}\n.loading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.loading-content {\n  text-align: center;\n  max-width: 400px;\n}\n.loading-spinner {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 24px;\n}\n.spinner-ring {\n  position: absolute;\n  border: 3px solid transparent;\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: spin 1.5s linear infinite;\n}\n.spinner-ring:nth-child(1) {\n  width: 60px;\n  height: 60px;\n  top: 10px;\n  left: 10px;\n}\n.spinner-ring:nth-child(2) {\n  width: 45px;\n  height: 45px;\n  top: 17.5px;\n  left: 17.5px;\n  animation-delay: -0.2s;\n  border-top-color: var(--primary-400);\n}\n.spinner-ring:nth-child(3) {\n  width: 30px;\n  height: 30px;\n  top: 25px;\n  left: 25px;\n  animation-delay: -0.4s;\n  border-top-color: var(--primary-300);\n}\n.loading-title {\n  color: var(--text-color);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.loading-description {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 20px 0;\n}\n.loading-progress {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.loading-progress .progress-bar {\n  flex: 1;\n  height: 8px;\n  background: var(--surface-200);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.loading-progress .progress-bar .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-500),\n      var(--primary-400));\n  transition: width 0.3s ease;\n  border-radius: 4px;\n}\n.loading-progress .progress-text {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color-secondary);\n  min-width: 40px;\n}\n.error-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  padding: 40px 20px;\n}\n.error-content {\n  text-align: center;\n  max-width: 400px;\n  padding: 32px;\n  background: var(--surface-0);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200);\n}\n.error-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.error-title {\n  color: var(--text-color);\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.error-message {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 24px 0;\n}\n.error-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.dashboard-content {\n  flex: 1;\n  max-width: 1400px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 24px;\n  min-height: 400px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 20px;\n  align-content: start;\n}\n.dashboard-block {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  grid-column: span 12;\n  min-height: 0;\n}\n.dashboard-block.block-summary,\n.dashboard-block.block-kpi,\n.dashboard-block.block-table,\n.dashboard-block.block-recommendation,\n.dashboard-block.block-chart {\n  grid-column: span 12;\n}\n.dashboard-block.block-alert {\n  grid-column: span 6;\n}\n.dashboard-block.priority-1 {\n  z-index: 10;\n}\n.dashboard-block.priority-2 {\n  z-index: 8;\n}\n.dashboard-block.priority-3 {\n  z-index: 6;\n}\n.dashboard-block.theme-primary {\n  --block-accent: var(--primary-500);\n}\n.dashboard-block.theme-success {\n  --block-accent: #22c55e;\n}\n.dashboard-block.theme-warning {\n  --block-accent: #f59e0b;\n}\n.dashboard-block.theme-danger {\n  --block-accent: #ef4444;\n}\n.dashboard-block.theme-info {\n  --block-accent: #06b6d4;\n}\n.dashboard-block.elevation-1 {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.dashboard-block.elevation-2 {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.dashboard-block.elevation-3 {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n.placeholder-block {\n  background: var(--surface-0);\n  border: 2px dashed var(--surface-300);\n  border-radius: 8px;\n  padding: 40px 20px;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\n.placeholder-block h4 {\n  margin: 0 0 8px 0;\n  font-weight: 600;\n}\n.placeholder-block p {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.empty-dashboard {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  padding: 40px 20px;\n}\n.empty-content {\n  text-align: center;\n  max-width: 300px;\n}\n.empty-content .empty-icon {\n  font-size: 64px;\n  opacity: 0.3;\n  margin-bottom: 16px;\n  display: block;\n}\n.empty-content h3 {\n  color: var(--text-color);\n  margin: 0 0 8px 0;\n}\n.empty-content p {\n  color: var(--text-color-secondary);\n  margin: 0 0 20px 0;\n}\n.dashboard-footer {\n  background: var(--surface-0);\n  border-top: 1px solid var(--surface-200);\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer-stats {\n  display: flex;\n  gap: 16px;\n  font-size: 0.875rem;\n}\n.footer-stats .stat-item {\n  color: var(--text-color-secondary);\n}\n.footer-stats .stat-item strong {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.powered-by {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn.btn-primary {\n  background: var(--primary-500);\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: var(--primary-600);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n:host-context(.dark) .dashboard-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-900),\n      var(--surface-800));\n  border-bottom-color: var(--surface-700);\n}\n:host-context(.dark) .header-top-bar {\n  background: var(--surface-900);\n  border-bottom-color: var(--surface-700);\n}\n:host-context(.dark) .context-cards {\n  background: var(--surface-800);\n}\n:host-context(.dark) .context-card {\n  background: var(--surface-900);\n  border-color: var(--surface-700);\n}\n:host-context(.dark) .context-card:hover {\n  border-color: var(--primary-700);\n}\n:host-context(.dark) .date-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.2),\n      rgba(37, 99, 235, 0.3));\n  color: #60a5fa;\n}\n:host-context(.dark) .vehicles-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 163, 74, 0.2),\n      rgba(22, 163, 74, 0.3));\n  color: #4ade80;\n}\n:host-context(.dark) .toggle-vehicles-btn {\n  border-color: var(--surface-600);\n  color: var(--primary-400);\n}\n:host-context(.dark) .toggle-vehicles-btn:hover {\n  background: var(--surface-700);\n  border-color: var(--surface-500);\n}\n:host-context(.dark) .vehicle-chip {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 163, 74, 0.2),\n      rgba(22, 163, 74, 0.3));\n  border-color: rgba(74, 222, 128, 0.3);\n  color: #4ade80;\n}\n:host-context(.dark) .query-card .card-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(217, 119, 6, 0.2),\n      rgba(217, 119, 6, 0.3));\n  color: #fbbf24;\n}\n:host-context(.dark) .summary-section {\n  background: var(--surface-900);\n  border-top-color: var(--surface-700);\n}\n:host-context(.dark) .header-meta {\n  background: var(--surface-800);\n  border-top-color: var(--surface-700);\n}\n:host-context(.dark) .action-btn {\n  background: var(--surface-800);\n  border-color: var(--surface-700);\n}\n:host-context(.dark) .action-btn:hover:not(:disabled) {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn.recalculate-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-600),\n      var(--primary-700));\n  border-color: var(--primary-600);\n}\n:host-context(.dark) .error-content {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .dashboard-footer {\n  background: var(--surface-800);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 1200px) {\n  .dashboard-content {\n    gap: 16px;\n    padding: 20px;\n  }\n  .dashboard-block.block-alert {\n    grid-column: span 6;\n  }\n}\n@media (max-width: 992px) {\n  .dashboard-content {\n    gap: 16px;\n  }\n  .dashboard-block.block-alert {\n    grid-column: span 12;\n  }\n}\n@media (max-width: 768px) {\n  .header-top-bar {\n    flex-direction: column;\n    gap: 16px;\n    padding: 16px 20px;\n    align-items: stretch;\n  }\n  .header-branding {\n    justify-content: center;\n  }\n  .brand-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .dashboard-title {\n    font-size: 1.25rem;\n  }\n  .dashboard-subtitle {\n    font-size: 0.8125rem;\n  }\n  .header-actions {\n    justify-content: center;\n  }\n  .context-cards {\n    grid-template-columns: 1fr;\n    padding: 16px 20px;\n    gap: 12px;\n  }\n  .context-card {\n    padding: 14px 16px;\n  }\n  .summary-section {\n    padding: 20px;\n  }\n  .summary-text {\n    font-size: 0.9375rem;\n  }\n  .header-meta {\n    flex-direction: column;\n    gap: 8px;\n    padding: 12px 20px;\n    align-items: flex-start;\n  }\n  .dashboard-content {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n  }\n  .dashboard-block,\n  .dashboard-block.block-summary,\n  .dashboard-block.block-kpi,\n  .dashboard-block.block-chart,\n  .dashboard-block.block-alert,\n  .dashboard-block.block-table {\n    grid-column: span 1;\n  }\n  .dashboard-footer {\n    padding: 12px 16px;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .footer-stats {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n}\n@media print {\n  .header-actions,\n  .action-btn,\n  .toggle-vehicles-btn {\n    display: none !important;\n  }\n  .analytics-dashboard {\n    background: white !important;\n    min-height: auto !important;\n  }\n  .dashboard-header {\n    box-shadow: none !important;\n    background: white !important;\n    border-bottom: 2px solid #333 !important;\n  }\n  .header-top-bar {\n    background: white !important;\n    border-bottom: 1px solid #ccc !important;\n  }\n  .brand-icon {\n    background: #333 !important;\n    box-shadow: none !important;\n  }\n  .context-cards {\n    background: white !important;\n  }\n  .context-card {\n    background: #f5f5f5 !important;\n    box-shadow: none !important;\n    border: 1px solid #ccc !important;\n  }\n  .summary-section {\n    background: white !important;\n    border: 1px solid #ccc !important;\n  }\n  .dashboard-block,\n  .block-container {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    margin-bottom: 16px;\n  }\n  .dashboard-grid {\n    display: block !important;\n  }\n  .dashboard-section {\n    display: block !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  table {\n    break-inside: auto;\n  }\n  tr {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .chart-container {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .header-meta {\n    background: #f5f5f5 !important;\n    border-top: 1px solid #ccc !important;\n  }\n}\n/*# sourceMappingURL=analytics-dashboard.component.css.map */\n"] }]
  }], null, { response: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], error: [{
    type: Input
  }], loadingProgress: [{
    type: Input
  }], userQuery: [{
    type: Input
  }], dateRange: [{
    type: Input
  }], vehicleNames: [{
    type: Input
  }], clientTimeZone: [{
    type: Input
  }], clientLanguage: [{
    type: Input
  }], recalculate: [{
    type: Output
  }], dashboardContainer: [{
    type: ViewChild,
    args: ["dashboardContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsDashboardComponent, { className: "AnalyticsDashboardComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/analytics-dashboard.component.ts", lineNumber: 44 });
})();

// src/app/features/development/components/analytical-report/chat/pipes/format-markdown.pipe.ts
var FormatMarkdownPipe = class _FormatMarkdownPipe {
  sanitizer = inject(DomSanitizer);
  transform(value) {
    if (!value)
      return "";
    let html = this.escapeHtml(value);
    html = html.replaceAll(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replaceAll(/__(.*?)__/g, "<strong>$1</strong>");
    html = html.replaceAll(/\*([^*]+)\*/g, "<em>$1</em>");
    html = html.replaceAll(/_([^_]+)_/g, "<em>$1</em>");
    html = html.replaceAll(/`([^`]+)`/g, "<code>$1</code>");
    html = html.replaceAll(/^&gt;\s*(.*)$/gm, "<blockquote>$1</blockquote>");
    html = html.replaceAll(/^[•*-]\s+(.*)$/gm, "<li>$1</li>");
    html = html.replaceAll(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");
    html = html.replaceAll(/^\d+[.)]\s+(.*)$/gm, "<li>$1</li>");
    html = html.replaceAll("\n", "<br>");
    html = html.replaceAll(/<br><(ul|ol|blockquote)/g, "<$1");
    html = html.replaceAll(/<\/(ul|ol|blockquote)><br>/g, "</$1>");
    html = html.replaceAll("</li><br>", "</li>");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replaceAll(/[&<>"']/g, (m) => map[m]);
  }
  static \u0275fac = function FormatMarkdownPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormatMarkdownPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatMarkdown", type: _FormatMarkdownPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatMarkdownPipe, [{
    type: Pipe,
    args: [{
      name: "formatMarkdown"
    }]
  }], null, null);
})();

// src/app/features/development/components/analytical-report/chat/components/inline-date-picker/inline-date-picker.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function InlineDatePickerComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function InlineDatePickerComponent_For_3_Template_button_click_0_listener() {
      const preset_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPreset(preset_r2.days));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", preset_r2.label, " ");
  }
}
function InlineDatePickerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 15);
    \u0275\u0275listener("onClick", function InlineDatePickerComponent_Conditional_15_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onConfirm());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formattedRange());
  }
}
var InlineDatePickerComponent = class _InlineDatePickerComponent {
  // Inputs
  initialStart = input(null, ...ngDevMode ? [{ debugName: "initialStart" }] : []);
  initialEnd = input(null, ...ngDevMode ? [{ debugName: "initialEnd" }] : []);
  minDate = input(new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 1)), ...ngDevMode ? [{ debugName: "minDate" }] : []);
  maxDate = input(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "maxDate" }] : []);
  // Outputs
  dateRangeSelected = output();
  // Local state
  startDate = signal(null, ...ngDevMode ? [{ debugName: "startDate" }] : []);
  endDate = signal(null, ...ngDevMode ? [{ debugName: "endDate" }] : []);
  // Date presets
  datePresets = [
    { label: "Today", days: 0 },
    { label: "Yesterday", days: 1 },
    { label: "Last 7 days", days: 7 },
    { label: "Last 30 days", days: 30 },
    { label: "Last 90 days", days: 90 }
  ];
  canConfirm = computed(() => {
    const start = this.startDate();
    const end = this.endDate();
    return start !== null && end !== null && start <= end;
  }, ...ngDevMode ? [{ debugName: "canConfirm" }] : []);
  formattedRange = computed(() => {
    const start = this.startDate();
    const end = this.endDate();
    if (!start || !end)
      return "";
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    if (start.toDateString() === end.toDateString()) {
      return formatDate(start);
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  }, ...ngDevMode ? [{ debugName: "formattedRange" }] : []);
  selectPreset(days) {
    const end = /* @__PURE__ */ new Date();
    const start = /* @__PURE__ */ new Date();
    if (days === 0) {
      this.startDate.set(start);
      this.endDate.set(end);
    } else if (days === 1) {
      start.setDate(start.getDate() - 1);
      end.setDate(end.getDate() - 1);
      this.startDate.set(start);
      this.endDate.set(end);
    } else {
      start.setDate(start.getDate() - days);
      this.startDate.set(start);
      this.endDate.set(end);
    }
  }
  onConfirm() {
    const start = this.startDate();
    const end = this.endDate();
    if (start && end) {
      this.dateRangeSelected.emit({ start, end });
    }
  }
  static \u0275fac = function InlineDatePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InlineDatePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InlineDatePickerComponent, selectors: [["app-inline-date-picker"]], inputs: { initialStart: [1, "initialStart"], initialEnd: [1, "initialEnd"], minDate: [1, "minDate"], maxDate: [1, "maxDate"] }, outputs: { dateRangeSelected: "dateRangeSelected" }, decls: 16, vars: 11, consts: [[1, "inline-date-picker"], [1, "date-presets"], ["type", "button", 1, "preset-btn"], [1, "date-selectors"], [1, "date-field"], ["id", "start-date-label", 1, "date-label"], ["dateFormat", "M dd, yy", "placeholder", "Select start date", "appendTo", "body", "styleClass", "compact-calendar", "aria-labelledby", "start-date-label", 3, "ngModelChange", "ngModel", "minDate", "maxDate", "showIcon", "showButtonBar"], [1, "date-separator"], ["aria-hidden", "true", 1, "pi", "pi-arrow-right"], ["id", "end-date-label", 1, "date-label"], ["dateFormat", "M dd, yy", "placeholder", "Select end date", "appendTo", "body", "styleClass", "compact-calendar", "aria-labelledby", "end-date-label", 3, "ngModelChange", "ngModel", "minDate", "maxDate", "showIcon", "showButtonBar"], [1, "selection-summary"], ["type", "button", 1, "preset-btn", 3, "click"], [1, "summary-text"], [1, "pi", "pi-calendar-plus"], ["label", "Confirm", "icon", "pi pi-check", "size", "small", "styleClass", "confirm-btn", 3, "onClick"]], template: function InlineDatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, InlineDatePickerComponent_For_3_Template, 2, 1, "button", 2, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "Start Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-datepicker", 6);
      \u0275\u0275twoWayListener("ngModelChange", function InlineDatePickerComponent_Template_p_datepicker_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275element(10, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 4)(12, "span", 9);
      \u0275\u0275text(13, "End Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-datepicker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function InlineDatePickerComponent_Template_p_datepicker_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, InlineDatePickerComponent_Conditional_15_Template, 6, 1, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.datePresets);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275property("minDate", ctx.minDate())("maxDate", ctx.endDate() || ctx.maxDate())("showIcon", true)("showButtonBar", true);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275property("minDate", ctx.startDate() || ctx.minDate())("maxDate", ctx.maxDate())("showIcon", true)("showButtonBar", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canConfirm() ? 15 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, DatePickerModule, DatePicker, ButtonModule, Button], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.inline-date-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem;\n  background-color: var(--card-background-color, #f8fafc);\n  border-radius: 0.5rem;\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.date-presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n.preset-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 1rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.preset-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  color: var(--color-primary-color, #3b82f6);\n}\n.date-selectors[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.date-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n  min-width: 140px;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.date-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.5rem;\n  color: var(--text-color-secondary, #94a3b8);\n}\n.date-separator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n  .compact-calendar .p-datepicker {\n  font-size: 0.875rem;\n}\n  .compact-calendar .p-inputtext {\n  font-size: 0.8125rem;\n  padding: 0.5rem 0.75rem;\n}\n  .compact-calendar .p-datepicker-trigger {\n  width: 2rem;\n}\n.selection-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n  .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n  .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n@media (max-width: 480px) {\n  .date-selectors[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .date-separator[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 0.25rem 0;\n  }\n  .date-field[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=inline-date-picker.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineDatePickerComponent, [{
    type: Component,
    args: [{ selector: "app-inline-date-picker", imports: [CommonModule, FormsModule, DatePickerModule, ButtonModule], template: '<div class="inline-date-picker">\n  <!-- Date Presets -->\n  <div class="date-presets">\n    @for (preset of datePresets; track preset.label) {\n      <button\n        type="button"\n        class="preset-btn"\n        (click)="selectPreset(preset.days)"\n      >\n        {{ preset.label }}\n      </button>\n    }\n  </div>\n\n  <!-- Date Range Selectors -->\n  <div class="date-selectors">\n    <div class="date-field">\n      <span id="start-date-label" class="date-label">Start Date</span>\n      <p-datepicker\n        [(ngModel)]="startDate"\n        [minDate]="minDate()"\n        [maxDate]="endDate() || maxDate()"\n        [showIcon]="true"\n        dateFormat="M dd, yy"\n        placeholder="Select start date"\n        [showButtonBar]="true"\n        appendTo="body"\n        styleClass="compact-calendar"\n        aria-labelledby="start-date-label"\n      />\n    </div>\n\n    <div class="date-separator">\n      <i class="pi pi-arrow-right" aria-hidden="true"></i>\n    </div>\n\n    <div class="date-field">\n      <span id="end-date-label" class="date-label">End Date</span>\n      <p-datepicker\n        [(ngModel)]="endDate"\n        [minDate]="startDate() || minDate()"\n        [maxDate]="maxDate()"\n        [showIcon]="true"\n        dateFormat="M dd, yy"\n        placeholder="Select end date"\n        [showButtonBar]="true"\n        appendTo="body"\n        styleClass="compact-calendar"\n        aria-labelledby="end-date-label"\n      />\n    </div>\n  </div>\n\n  <!-- Selection Summary & Confirm -->\n  @if (canConfirm()) {\n    <div class="selection-summary">\n      <div class="summary-text">\n        <i class="pi pi-calendar-plus"></i>\n        <span>{{ formattedRange() }}</span>\n      </div>\n      <p-button\n        label="Confirm"\n        icon="pi pi-check"\n        (onClick)="onConfirm()"\n        size="small"\n        styleClass="confirm-btn"\n      />\n    </div>\n  }\n</div>\n', styles: ["/* src/app/features/development/components/analytical-report/chat/components/inline-date-picker/inline-date-picker.component.scss */\n:host {\n  display: block;\n}\n.inline-date-picker {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem;\n  background-color: var(--card-background-color, #f8fafc);\n  border-radius: 0.5rem;\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.date-presets {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n}\n.preset-btn {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 1rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.preset-btn:hover {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  color: var(--color-primary-color, #3b82f6);\n}\n.date-selectors {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.date-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n  min-width: 140px;\n}\n.date-label {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.date-separator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.5rem;\n  color: var(--text-color-secondary, #94a3b8);\n}\n.date-separator i {\n  font-size: 0.875rem;\n}\n::ng-deep .compact-calendar .p-datepicker {\n  font-size: 0.875rem;\n}\n::ng-deep .compact-calendar .p-inputtext {\n  font-size: 0.8125rem;\n  padding: 0.5rem 0.75rem;\n}\n::ng-deep .compact-calendar .p-datepicker-trigger {\n  width: 2rem;\n}\n.selection-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text i {\n  font-size: 1rem;\n}\n::ng-deep .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n::ng-deep .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n@media (max-width: 480px) {\n  .date-selectors {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .date-separator {\n    transform: rotate(90deg);\n    padding: 0.25rem 0;\n  }\n  .date-field {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=inline-date-picker.component.css.map */\n"] }]
  }], null, { initialStart: [{ type: Input, args: [{ isSignal: true, alias: "initialStart", required: false }] }], initialEnd: [{ type: Input, args: [{ isSignal: true, alias: "initialEnd", required: false }] }], minDate: [{ type: Input, args: [{ isSignal: true, alias: "minDate", required: false }] }], maxDate: [{ type: Input, args: [{ isSignal: true, alias: "maxDate", required: false }] }], dateRangeSelected: [{ type: Output, args: ["dateRangeSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InlineDatePickerComponent, { className: "InlineDatePickerComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/inline-date-picker/inline-date-picker.component.ts", lineNumber: 18 });
})();

// src/app/features/development/components/analytical-report/chat/components/inline-vehicle-selector/inline-vehicle-selector.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function InlineVehicleSelectorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function InlineVehicleSelectorComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll());
    });
    \u0275\u0275text(1, " Select All ");
    \u0275\u0275elementEnd();
  }
}
function InlineVehicleSelectorComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function InlineVehicleSelectorComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(1, " Clear All ");
    \u0275\u0275elementEnd();
  }
}
function InlineVehicleSelectorComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No vehicles found");
    \u0275\u0275elementEnd()();
  }
}
function InlineVehicleSelectorComponent_Conditional_10_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r5.registration);
  }
}
function InlineVehicleSelectorComponent_Conditional_10_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function InlineVehicleSelectorComponent_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13)(1, "input", 14);
    \u0275\u0275listener("change", function InlineVehicleSelectorComponent_Conditional_10_For_1_Template_input_change_1_listener() {
      const vehicle_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleVehicle(vehicle_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, InlineVehicleSelectorComponent_Conditional_10_For_1_Conditional_5_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, InlineVehicleSelectorComponent_Conditional_10_For_1_Conditional_6_Template, 1, 0, "i", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isSelected(vehicle_r5.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected(vehicle_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vehicle_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(vehicle_r5.registration ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSelected(vehicle_r5.id) ? 6 : -1);
  }
}
function InlineVehicleSelectorComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InlineVehicleSelectorComponent_Conditional_10_For_1_Template, 7, 6, "label", 12, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.filteredVehicles());
  }
}
function InlineVehicleSelectorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 19);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 20);
    \u0275\u0275listener("onClick", function InlineVehicleSelectorComponent_Conditional_11_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedCount(), " vehicle", ctx_r1.selectedCount() === 1 ? "" : "s", " selected");
  }
}
var InlineVehicleSelectorComponent = class _InlineVehicleSelectorComponent {
  // Inputs
  vehicles = input([], ...ngDevMode ? [{ debugName: "vehicles" }] : []);
  initialSelection = input([], ...ngDevMode ? [{ debugName: "initialSelection" }] : []);
  maxSelection = input(null, ...ngDevMode ? [{ debugName: "maxSelection" }] : []);
  // Outputs
  vehiclesSelected = output();
  // Local state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : []);
  // Computed
  filteredVehicles = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const allVehicles = this.vehicles();
    if (term.length === 0) {
      return allVehicles;
    }
    return allVehicles.filter((v) => v.name.toLowerCase().includes(term) || (v.registration?.toLowerCase()?.includes(term) ?? false));
  }, ...ngDevMode ? [{ debugName: "filteredVehicles" }] : []);
  selectedCount = computed(() => this.selectedIds().size, ...ngDevMode ? [{ debugName: "selectedCount" }] : []);
  canConfirm = computed(() => this.selectedIds().size > 0, ...ngDevMode ? [{ debugName: "canConfirm" }] : []);
  allSelected = computed(() => {
    const vehicles = this.vehicles();
    const selected = this.selectedIds();
    return vehicles.length > 0 && vehicles.every((v) => selected.has(v.id));
  }, ...ngDevMode ? [{ debugName: "allSelected" }] : []);
  selectedVehicles = computed(() => {
    const ids = this.selectedIds();
    return this.vehicles().filter((v) => ids.has(v.id));
  }, ...ngDevMode ? [{ debugName: "selectedVehicles" }] : []);
  isSelected(id) {
    return this.selectedIds().has(id);
  }
  toggleVehicle(vehicle) {
    const current = new Set(this.selectedIds());
    if (current.has(vehicle.id)) {
      current.delete(vehicle.id);
    } else {
      const max = this.maxSelection();
      if (max !== null && current.size >= max) {
        return;
      }
      current.add(vehicle.id);
    }
    this.selectedIds.set(current);
  }
  selectAll() {
    const max = this.maxSelection();
    const allVehicles = this.vehicles();
    if (max !== null && allVehicles.length > max) {
      const idsToSelect = allVehicles.slice(0, max).map((v) => v.id);
      this.selectedIds.set(new Set(idsToSelect));
    } else {
      this.selectedIds.set(new Set(allVehicles.map((v) => v.id)));
    }
  }
  clearAll() {
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  onConfirm() {
    const selected = this.selectedVehicles();
    if (selected.length > 0) {
      this.vehiclesSelected.emit(selected);
    }
  }
  static \u0275fac = function InlineVehicleSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InlineVehicleSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InlineVehicleSelectorComponent, selectors: [["app-inline-vehicle-selector"]], inputs: { vehicles: [1, "vehicles"], initialSelection: [1, "initialSelection"], maxSelection: [1, "maxSelection"] }, outputs: { vehiclesSelected: "vehiclesSelected" }, decls: 12, vars: 4, consts: [[1, "inline-vehicle-selector"], [1, "selector-header"], [1, "search-box"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search vehicles...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "header-actions"], ["type", "button", 1, "action-btn"], [1, "vehicle-list"], [1, "empty-state"], [1, "selection-summary"], ["type", "button", 1, "action-btn", 3, "click"], [1, "pi", "pi-car"], [1, "vehicle-item", 3, "selected"], [1, "vehicle-item"], ["type", "checkbox", 3, "change", "checked"], [1, "vehicle-info"], [1, "vehicle-name"], [1, "vehicle-reg"], [1, "pi", "pi-check", "selected-icon"], [1, "summary-text"], ["label", "Confirm", "icon", "pi pi-check", "size", "small", "styleClass", "confirm-btn", 3, "onClick"]], template: function InlineVehicleSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("ngModelChange", function InlineVehicleSelectorComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275conditionalCreate(6, InlineVehicleSelectorComponent_Conditional_6_Template, 2, 0, "button", 6)(7, InlineVehicleSelectorComponent_Conditional_7_Template, 2, 0, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275conditionalCreate(9, InlineVehicleSelectorComponent_Conditional_9_Template, 4, 0, "div", 8)(10, InlineVehicleSelectorComponent_Conditional_10_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, InlineVehicleSelectorComponent_Conditional_11_Template, 6, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.allSelected() ? 6 : 7);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filteredVehicles().length === 0 ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.canConfirm() ? 11 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, InputTextModule, InputText], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.inline-vehicle-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background-color: var(--card-background-color, #f8fafc);\n  border-radius: 0.5rem;\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.selector-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 150px;\n  padding: 0.375rem 0.625rem;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n}\n.search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary, #9ca3af);\n  font-size: 0.875rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.8125rem;\n  background: transparent;\n  color: var(--text-color, #374151);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary, #9ca3af);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover, #f3f4f6);\n  border-color: var(--text-color-secondary, #9ca3af);\n}\n.vehicle-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 0.25rem;\n}\n.vehicle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.625rem;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1.5px solid transparent;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.vehicle-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover, #f0f2f5);\n}\n.vehicle-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n.vehicle-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.vehicle-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.vehicle-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color, #1e293b);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vehicle-reg[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-color-secondary, #64748b);\n}\n.selected-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary-color, #3b82f6);\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  color: var(--text-color-secondary, #9ca3af);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.selection-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n  .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n  .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n/*# sourceMappingURL=inline-vehicle-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineVehicleSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-inline-vehicle-selector", imports: [CommonModule, FormsModule, ButtonModule, InputTextModule], template: `<div class="inline-vehicle-selector">
  <!-- Header with Search and Actions -->
  <div class="selector-header">
    <div class="search-box">
      <i class="pi pi-search"></i>
      <input
        type="text"
        pInputText
        [ngModel]="searchTerm()"
        (ngModelChange)="searchTerm.set($event)"
        placeholder="Search vehicles..."
        class="search-input"
      />
    </div>
    <div class="header-actions">
      @if (!allSelected()) {
        <button type="button" class="action-btn" (click)="selectAll()">
          Select All
        </button>
      } @else {
        <button type="button" class="action-btn" (click)="clearAll()">
          Clear All
        </button>
      }
    </div>
  </div>

  <!-- Vehicle List -->
  <div class="vehicle-list">
    @if (filteredVehicles().length === 0) {
      <div class="empty-state">
        <i class="pi pi-car"></i>
        <p>No vehicles found</p>
      </div>
    } @else {
      @for (vehicle of filteredVehicles(); track vehicle.id) {
        <label class="vehicle-item" [class.selected]="isSelected(vehicle.id)">
          <input
            type="checkbox"
            [checked]="isSelected(vehicle.id)"
            (change)="toggleVehicle(vehicle)"
          />
          <div class="vehicle-info">
            <span class="vehicle-name">{{ vehicle.name }}</span>
            @if (vehicle.registration) {
              <span class="vehicle-reg">{{ vehicle.registration }}</span>
            }
          </div>
          @if (isSelected(vehicle.id)) {
            <i class="pi pi-check selected-icon"></i>
          }
        </label>
      }
    }
  </div>

  <!-- Selection Summary & Confirm -->
  @if (canConfirm()) {
    <div class="selection-summary">
      <div class="summary-text">
        <i class="pi pi-car"></i>
        <span
          >{{ selectedCount() }} vehicle{{
            selectedCount() === 1 ? '' : 's'
          }}
          selected</span
        >
      </div>
      <p-button
        label="Confirm"
        icon="pi pi-check"
        (onClick)="onConfirm()"
        size="small"
        styleClass="confirm-btn"
      />
    </div>
  }
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/inline-vehicle-selector/inline-vehicle-selector.component.scss */\n:host {\n  display: block;\n}\n.inline-vehicle-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background-color: var(--card-background-color, #f8fafc);\n  border-radius: 0.5rem;\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.selector-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 150px;\n  padding: 0.375rem 0.625rem;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n}\n.search-box i {\n  color: var(--text-color-secondary, #9ca3af);\n  font-size: 0.875rem;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.8125rem;\n  background: transparent;\n  color: var(--text-color, #374151);\n}\n.search-input::placeholder {\n  color: var(--text-color-secondary, #9ca3af);\n}\n.header-actions {\n  display: flex;\n  gap: 0.375rem;\n}\n.action-btn {\n  padding: 0.375rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn:hover {\n  background-color: var(--surface-hover, #f3f4f6);\n  border-color: var(--text-color-secondary, #9ca3af);\n}\n.vehicle-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 0.25rem;\n}\n.vehicle-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.625rem;\n  background-color: var(--input-background-color, #ffffff);\n  border: 1.5px solid transparent;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.vehicle-item:hover {\n  background-color: var(--surface-hover, #f0f2f5);\n}\n.vehicle-item.selected {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n.vehicle-item input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.vehicle-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.vehicle-name {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color, #1e293b);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vehicle-reg {\n  font-size: 0.6875rem;\n  color: var(--text-color-secondary, #64748b);\n}\n.selected-icon {\n  color: var(--color-primary-color, #3b82f6);\n  font-size: 0.875rem;\n  flex-shrink: 0;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  color: var(--text-color-secondary, #9ca3af);\n}\n.empty-state i {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.selection-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text i {\n  font-size: 1rem;\n}\n::ng-deep .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n::ng-deep .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n/*# sourceMappingURL=inline-vehicle-selector.component.css.map */\n"] }]
  }], null, { vehicles: [{ type: Input, args: [{ isSignal: true, alias: "vehicles", required: false }] }], initialSelection: [{ type: Input, args: [{ isSignal: true, alias: "initialSelection", required: false }] }], maxSelection: [{ type: Input, args: [{ isSignal: true, alias: "maxSelection", required: false }] }], vehiclesSelected: [{ type: Output, args: ["vehiclesSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InlineVehicleSelectorComponent, { className: "InlineVehicleSelectorComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/inline-vehicle-selector/inline-vehicle-selector.component.ts", lineNumber: 19 });
})();

// src/app/features/development/components/analytical-report/chat/components/inline-data-type-selector/inline-data-type-selector.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function InlineDataTypeSelectorComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function InlineDataTypeSelectorComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAll());
    });
    \u0275\u0275text(1, " Select All ");
    \u0275\u0275elementEnd();
  }
}
function InlineDataTypeSelectorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function InlineDataTypeSelectorComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll());
    });
    \u0275\u0275text(1, " Clear All ");
    \u0275\u0275elementEnd();
  }
}
function InlineDataTypeSelectorComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function InlineDataTypeSelectorComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 16);
    \u0275\u0275listener("click", function InlineDataTypeSelectorComponent_For_9_Conditional_3_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function InlineDataTypeSelectorComponent_For_9_Conditional_3_Template_input_change_0_listener() {
      \u0275\u0275restoreView(_r6);
      const type_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDataType(type_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r1.isSelected(type_r5.id));
  }
}
function InlineDataTypeSelectorComponent_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Collecting... ");
  }
}
function InlineDataTypeSelectorComponent_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const type_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", type_r5.description, " ");
  }
}
function InlineDataTypeSelectorComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function InlineDataTypeSelectorComponent_For_9_Template_button_click_0_listener() {
      const type_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDataType(type_r5));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275conditionalCreate(2, InlineDataTypeSelectorComponent_For_9_Conditional_2_Template, 1, 0, "i", 12)(3, InlineDataTypeSelectorComponent_For_9_Conditional_3_Template, 1, 1, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i");
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275conditionalCreate(8, InlineDataTypeSelectorComponent_For_9_Conditional_8_Template, 1, 0)(9, InlineDataTypeSelectorComponent_For_9_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.isSelected(type_r5.id))("collecting", ctx_r1.isCollecting(type_r5.id));
    \u0275\u0275property("disabled", ctx_r1.isCollecting(type_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCollecting(type_r5.id) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", type_r5.icon, " card-icon"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCollecting(type_r5.id) ? 8 : 9);
  }
}
function InlineDataTypeSelectorComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.collectingCount(), " data type", ctx_r1.collectingCount() === 1 ? "" : "s", " currently collecting");
  }
}
function InlineDataTypeSelectorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-button", 20);
    \u0275\u0275listener("onClick", function InlineDataTypeSelectorComponent_Conditional_11_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.newSelectionCount(), " new data type", ctx_r1.newSelectionCount() === 1 ? "" : "s", " to collect");
  }
}
function InlineDataTypeSelectorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Select data types to collect");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "p-button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", true);
  }
}
var DEFAULT_DATA_TYPES = [
  {
    id: "trips",
    label: "Trips",
    description: "Journey data with start/end locations and times",
    icon: "pi-map-marker"
  },
  {
    id: "events",
    label: "Events",
    description: "Driver behavior events like harsh braking, speeding",
    icon: "pi-exclamation-triangle"
  },
  {
    id: "telemetry",
    label: "Telemetry",
    description: "Real-time sensor data: speed, fuel, engine status",
    icon: "pi-chart-line"
  },
  {
    id: "alerts",
    label: "Alerts",
    description: "System alerts and notifications",
    icon: "pi-bell"
  }
];
var InlineDataTypeSelectorComponent = class _InlineDataTypeSelectorComponent {
  // Inputs
  dataTypes = input(DEFAULT_DATA_TYPES, ...ngDevMode ? [{ debugName: "dataTypes" }] : []);
  initialSelection = input([], ...ngDevMode ? [{ debugName: "initialSelection" }] : []);
  collectingTypes = input([], ...ngDevMode ? [{ debugName: "collectingTypes" }] : []);
  // Types currently being collected (locked)
  // Outputs
  dataTypesSelected = output();
  // Local state
  selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : []);
  // Computed
  selectedCount = computed(() => this.selectedIds().size, ...ngDevMode ? [{ debugName: "selectedCount" }] : []);
  collectingCount = computed(() => this.collectingTypes().length, ...ngDevMode ? [{ debugName: "collectingCount" }] : []);
  // Only show new selections (excluding already collecting)
  newSelectionCount = computed(() => {
    const selected = this.selectedIds();
    const collecting = new Set(this.collectingTypes());
    return Array.from(selected).filter((id) => !collecting.has(id)).length;
  }, ...ngDevMode ? [{ debugName: "newSelectionCount" }] : []);
  canConfirm = computed(() => this.newSelectionCount() > 0, ...ngDevMode ? [{ debugName: "canConfirm" }] : []);
  allSelected = computed(() => {
    const types = this.dataTypes();
    const selected = this.selectedIds();
    return types.length > 0 && types.every((t) => selected.has(t.id));
  }, ...ngDevMode ? [{ debugName: "allSelected" }] : []);
  hasCollectingTypes = computed(() => this.collectingTypes().length > 0, ...ngDevMode ? [{ debugName: "hasCollectingTypes" }] : []);
  isSelected(id) {
    return this.selectedIds().has(id);
  }
  isCollecting(id) {
    return this.collectingTypes().includes(id);
  }
  toggleDataType(type) {
    if (this.isCollecting(type.id)) {
      return;
    }
    const current = new Set(this.selectedIds());
    if (current.has(type.id)) {
      current.delete(type.id);
    } else {
      current.add(type.id);
    }
    this.selectedIds.set(current);
  }
  selectAll() {
    this.selectedIds.set(new Set(this.dataTypes().map((t) => t.id)));
  }
  clearAll() {
    const collecting = new Set(this.collectingTypes());
    this.selectedIds.set(collecting);
  }
  onConfirm() {
    const collecting = new Set(this.collectingTypes());
    const newSelections = Array.from(this.selectedIds()).filter((id) => !collecting.has(id));
    if (newSelections.length > 0) {
      this.dataTypesSelected.emit(newSelections);
    }
  }
  static \u0275fac = function InlineDataTypeSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InlineDataTypeSelectorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InlineDataTypeSelectorComponent, selectors: [["app-inline-data-type-selector"]], inputs: { dataTypes: [1, "dataTypes"], initialSelection: [1, "initialSelection"], collectingTypes: [1, "collectingTypes"] }, outputs: { dataTypesSelected: "dataTypesSelected" }, decls: 13, vars: 3, consts: [[1, "inline-data-type-selector"], [1, "selector-header"], [1, "header-label"], [1, "header-actions"], ["type", "button", 1, "action-btn"], [1, "data-type-grid"], ["type", "button", 1, "data-type-card", 3, "selected", "collecting", "disabled"], [1, "collecting-status"], [1, "selection-summary"], ["type", "button", 1, "action-btn", 3, "click"], ["type", "button", 1, "data-type-card", 3, "click", "disabled"], [1, "card-checkbox"], [1, "pi", "pi-spin", "pi-spinner", "collecting-spinner"], ["type", "checkbox", 3, "checked"], [1, "card-label"], [1, "card-description"], ["type", "checkbox", 3, "click", "change", "checked"], [1, "pi", "pi-info-circle"], [1, "summary-text"], [1, "pi", "pi-database"], ["label", "Add to Collection", "icon", "pi pi-plus", "size", "small", "styleClass", "confirm-btn", 3, "onClick"], ["label", "Start Collection", "icon", "pi pi-play", "size", "small", "styleClass", "confirm-btn", 3, "disabled"]], template: function InlineDataTypeSelectorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Select data to analyze:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275conditionalCreate(5, InlineDataTypeSelectorComponent_Conditional_5_Template, 2, 0, "button", 4)(6, InlineDataTypeSelectorComponent_Conditional_6_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, InlineDataTypeSelectorComponent_For_9_Template, 10, 11, "button", 6, _forTrack03);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, InlineDataTypeSelectorComponent_Conditional_10_Template, 4, 2, "div", 7);
      \u0275\u0275conditionalCreate(11, InlineDataTypeSelectorComponent_Conditional_11_Template, 6, 2, "div", 8)(12, InlineDataTypeSelectorComponent_Conditional_12_Template, 6, 1, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.allSelected() ? 5 : 6);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.dataTypes());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasCollectingTypes() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canConfirm() ? 11 : !ctx.hasCollectingTypes() && ctx.selectedCount() === 0 ? 12 : -1);
    }
  }, dependencies: [CommonModule, ButtonModule, Button], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.inline-data-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background-color: var(--card-background-color, #ffffff);\n  border-radius: 0.75rem;\n  border: 1px solid var(--input-border-color, #cbd5e1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.selector-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.header-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color, #334155);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover, #f3f4f6);\n  border-color: var(--text-color-secondary, #9ca3af);\n}\n.data-type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n}\n@media (max-width: 400px) {\n  .data-type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.data-type-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.25rem;\n  padding: 0.75rem;\n  background-color: var(--surface-hover, #f8fafc);\n  border: 2px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  text-align: left;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.data-type-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-ground, #f1f5f9);\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 2px 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);\n}\n.data-type-card.selected[_ngcontent-%COMP%] {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 2px 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.data-type-card.selected[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary-color, #3b82f6);\n}\n.data-type-card.collecting[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n  cursor: not-allowed;\n  opacity: 0.9;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.15);\n}\n.data-type-card.collecting[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.data-type-card.collecting[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-style: italic;\n}\n.data-type-card.collecting[_ngcontent-%COMP%]:hover {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n}\n.card-checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n.card-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n}\n.card-checkbox[_ngcontent-%COMP%]   .collecting-spinner[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #f59e0b;\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-primary-color, #3b82f6);\n  margin-bottom: 0.25rem;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-color, #1e293b);\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--text-color-secondary, #64748b);\n  line-height: 1.3;\n}\n.collecting-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #fef3c7;\n  border-radius: 0.375rem;\n  border: 1px solid #f59e0b;\n  font-size: 0.75rem;\n  color: #b45309;\n}\n.collecting-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #d97706;\n}\n.selection-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n  .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n  .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n/*# sourceMappingURL=inline-data-type-selector.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineDataTypeSelectorComponent, [{
    type: Component,
    args: [{ selector: "app-inline-data-type-selector", imports: [CommonModule, ButtonModule], template: `<div class="inline-data-type-selector">
  <!-- Header with Actions -->
  <div class="selector-header">
    <span class="header-label">Select data to analyze:</span>
    <div class="header-actions">
      @if (!allSelected()) {
        <button type="button" class="action-btn" (click)="selectAll()">
          Select All
        </button>
      } @else {
        <button type="button" class="action-btn" (click)="clearAll()">
          Clear All
        </button>
      }
    </div>
  </div>

  <!-- Data Type Cards -->
  <div class="data-type-grid">
    @for (type of dataTypes(); track type.id) {
      <button
        type="button"
        class="data-type-card"
        [class.selected]="isSelected(type.id)"
        [class.collecting]="isCollecting(type.id)"
        [disabled]="isCollecting(type.id)"
        (click)="toggleDataType(type)"
      >
        <div class="card-checkbox">
          @if (isCollecting(type.id)) {
            <i class="pi pi-spin pi-spinner collecting-spinner"></i>
          } @else {
            <input
              type="checkbox"
              [checked]="isSelected(type.id)"
              (click)="$event.stopPropagation()"
              (change)="toggleDataType(type)"
            />
          }
        </div>
        <i class="pi {{ type.icon }} card-icon"></i>
        <span class="card-label">{{ type.label }}</span>
        <span class="card-description">
          @if (isCollecting(type.id)) {
            Collecting...
          } @else {
            {{ type.description }}
          }
        </span>
      </button>
    }
  </div>

  <!-- Status when collecting -->
  @if (hasCollectingTypes()) {
    <div class="collecting-status">
      <i class="pi pi-info-circle"></i>
      <span
        >{{ collectingCount() }} data type{{
          collectingCount() === 1 ? '' : 's'
        }}
        currently collecting</span
      >
    </div>
  }

  <!-- Selection Summary & Confirm -->
  @if (canConfirm()) {
    <div class="selection-summary">
      <div class="summary-text">
        <i class="pi pi-database"></i>
        <span
          >{{ newSelectionCount() }} new data type{{
            newSelectionCount() === 1 ? '' : 's'
          }}
          to collect</span
        >
      </div>
      <p-button
        label="Add to Collection"
        icon="pi pi-plus"
        (onClick)="onConfirm()"
        size="small"
        styleClass="confirm-btn"
      />
    </div>
  } @else if (!hasCollectingTypes() && selectedCount() === 0) {
    <div class="selection-summary">
      <div class="summary-text">
        <i class="pi pi-database"></i>
        <span>Select data types to collect</span>
      </div>
      <p-button
        label="Start Collection"
        icon="pi pi-play"
        [disabled]="true"
        size="small"
        styleClass="confirm-btn"
      />
    </div>
  }
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/inline-data-type-selector/inline-data-type-selector.component.scss */\n:host {\n  display: block;\n}\n.inline-data-type-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  background-color: var(--card-background-color, #ffffff);\n  border-radius: 0.75rem;\n  border: 1px solid var(--input-border-color, #cbd5e1);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.selector-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.header-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color, #334155);\n}\n.header-actions {\n  display: flex;\n  gap: 0.375rem;\n}\n.action-btn {\n  padding: 0.25rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d5db);\n  border-radius: 0.375rem;\n  color: var(--text-color, #4b5563);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.action-btn:hover {\n  background-color: var(--surface-hover, #f3f4f6);\n  border-color: var(--text-color-secondary, #9ca3af);\n}\n.data-type-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n}\n@media (max-width: 400px) {\n  .data-type-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.data-type-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.25rem;\n  padding: 0.75rem;\n  background-color: var(--surface-hover, #f8fafc);\n  border: 2px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  text-align: left;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.data-type-card:hover {\n  background-color: var(--surface-ground, #f1f5f9);\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 2px 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);\n}\n.data-type-card.selected {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 2px 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.data-type-card.selected .card-icon {\n  color: var(--color-primary-color, #3b82f6);\n}\n.data-type-card.collecting {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n  cursor: not-allowed;\n  opacity: 0.9;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.15);\n}\n.data-type-card.collecting .card-icon {\n  color: #d97706;\n}\n.data-type-card.collecting .card-description {\n  color: #b45309;\n  font-style: italic;\n}\n.data-type-card.collecting:hover {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n}\n.card-checkbox {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n.card-checkbox input[type=checkbox] {\n  width: 0.875rem;\n  height: 0.875rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n}\n.card-checkbox .collecting-spinner {\n  font-size: 0.875rem;\n  color: #f59e0b;\n}\n.card-icon {\n  font-size: 1.25rem;\n  color: var(--color-primary-color, #3b82f6);\n  margin-bottom: 0.25rem;\n}\n.card-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-color, #1e293b);\n}\n.card-description {\n  font-size: 0.6875rem;\n  color: var(--text-color-secondary, #64748b);\n  line-height: 1.3;\n}\n.collecting-status {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #fef3c7;\n  border-radius: 0.375rem;\n  border: 1px solid #f59e0b;\n  font-size: 0.75rem;\n  color: #b45309;\n}\n.collecting-status i {\n  font-size: 0.875rem;\n  color: #d97706;\n}\n.selection-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-radius: 0.375rem;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n}\n.summary-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--color-primary-color, #3b82f6);\n}\n.summary-text i {\n  font-size: 1rem;\n}\n::ng-deep .confirm-btn {\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  font-weight: 600;\n}\n::ng-deep .confirm-btn:hover {\n  filter: brightness(0.9);\n}\n/*# sourceMappingURL=inline-data-type-selector.component.css.map */\n"] }]
  }], null, { dataTypes: [{ type: Input, args: [{ isSignal: true, alias: "dataTypes", required: false }] }], initialSelection: [{ type: Input, args: [{ isSignal: true, alias: "initialSelection", required: false }] }], collectingTypes: [{ type: Input, args: [{ isSignal: true, alias: "collectingTypes", required: false }] }], dataTypesSelected: [{ type: Output, args: ["dataTypesSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InlineDataTypeSelectorComponent, { className: "InlineDataTypeSelectorComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/inline-data-type-selector/inline-data-type-selector.component.ts", lineNumber: 45 });
})();

// src/app/features/development/components/analytical-report/chat/components/chat-message/chat-message.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function ChatMessageComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inline-date-picker", 10);
    \u0275\u0275listener("dateRangeSelected", function ChatMessageComponent_Conditional_4_Conditional_1_Template_app_inline_date_picker_dateRangeSelected_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateRangeSelected($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ChatMessageComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inline-vehicle-selector", 11);
    \u0275\u0275listener("vehiclesSelected", function ChatMessageComponent_Conditional_4_Conditional_2_Template_app_inline_vehicle_selector_vehiclesSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onVehiclesSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("vehicles", ctx_r1.availableVehicles());
  }
}
function ChatMessageComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inline-data-type-selector", 12);
    \u0275\u0275listener("dataTypesSelected", function ChatMessageComponent_Conditional_4_Conditional_3_Template_app_inline_data_type_selector_dataTypesSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDataTypesSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("initialSelection", ctx_r1.selectedDataTypesFromMessage())("collectingTypes", ctx_r1.collectingDataTypes());
  }
}
function ChatMessageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, ChatMessageComponent_Conditional_4_Conditional_1_Template, 1, 0, "app-inline-date-picker");
    \u0275\u0275conditionalCreate(2, ChatMessageComponent_Conditional_4_Conditional_2_Template, 1, 1, "app-inline-vehicle-selector", 8);
    \u0275\u0275conditionalCreate(3, ChatMessageComponent_Conditional_4_Conditional_3_Template, 1, 2, "app-inline-data-type-selector", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDatePicker() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isVehicleSelector() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDataTypeSelector() ? 3 : -1);
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select data types to collect: ");
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select one or more options: ");
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22)(1, "input", 23);
    \u0275\u0275listener("change", function ChatMessageComponent_Conditional_5_Conditional_1_For_8_Template_input_change_1_listener() {
      const action_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActionSelection(action_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isActionSelected(action_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isActionSelected(action_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r7.label);
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Start Data Collection (", ctx_r1.selectedActionIds().size, " selected) ");
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" Apply Selected (", ctx_r1.selectedActionIds().size, ") ");
  }
}
function ChatMessageComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275conditionalCreate(2, ChatMessageComponent_Conditional_5_Conditional_1_Conditional_2_Template, 1, 0)(3, ChatMessageComponent_Conditional_5_Conditional_1_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function ChatMessageComponent_Conditional_5_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAllActions());
    });
    \u0275\u0275text(5, " Select All ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275repeaterCreate(7, ChatMessageComponent_Conditional_5_Conditional_1_For_8_Template, 4, 4, "label", 18, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function ChatMessageComponent_Conditional_5_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitSelectedActions());
    });
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275conditionalCreate(12, ChatMessageComponent_Conditional_5_Conditional_1_Conditional_12_Template, 1, 1)(13, ChatMessageComponent_Conditional_5_Conditional_1_Conditional_13_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isDataTypeMultiSelect() ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.suggestedActions());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.hasSelectedActions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isDataTypeMultiSelect() ? 12 : 13);
  }
}
function ChatMessageComponent_Conditional_5_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ChatMessageComponent_Conditional_5_Conditional_2_For_1_Template_button_click_0_listener() {
      const action_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onActionClick(action_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r9.label, " ");
  }
}
function ChatMessageComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ChatMessageComponent_Conditional_5_Conditional_2_For_1_Template, 2, 1, "button", 25, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.suggestedActions());
  }
}
function ChatMessageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, ChatMessageComponent_Conditional_5_Conditional_1_Template, 14, 3)(2, ChatMessageComponent_Conditional_5_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("multi-select-mode", ctx_r1.isMultiSelectMode());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isMultiSelectMode() ? 1 : 2);
  }
}
function ChatMessageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.statusClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusIcon());
  }
}
var DATA_TYPE_VALUES = /* @__PURE__ */ new Set(["trips", "events", "telemetry", "alerts"]);
var ChatMessageComponent = class _ChatMessageComponent {
  // Inputs
  message = input.required(...ngDevMode ? [{ debugName: "message" }] : []);
  isDisabled = input(false, ...ngDevMode ? [{ debugName: "isDisabled" }] : []);
  // Disable interactions (e.g., during data collection)
  collectingDataTypes = input([], ...ngDevMode ? [{ debugName: "collectingDataTypes" }] : []);
  // Data types currently being collected
  // Outputs
  actionSelected = output();
  multiActionsSelected = output();
  dateRangeSelected = output();
  vehiclesSelected = output();
  dataTypesSelected = output();
  // Local state for multi-select
  selectedActionIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedActionIds" }] : []);
  // Computed properties
  isUser = computed(() => this.message().sender === "user", ...ngDevMode ? [{ debugName: "isUser" }] : []);
  isAssistant = computed(() => this.message().sender === "assistant", ...ngDevMode ? [{ debugName: "isAssistant" }] : []);
  isSystem = computed(() => this.message().sender === "system", ...ngDevMode ? [{ debugName: "isSystem" }] : []);
  formattedTime = computed(() => this.formatTime(this.message().timestamp), ...ngDevMode ? [{ debugName: "formattedTime" }] : []);
  suggestedActions = computed(() => this.message().metadata?.suggestedActions ?? [], ...ngDevMode ? [{ debugName: "suggestedActions" }] : []);
  hasSuggestedActions = computed(() => this.suggestedActions().length > 0, ...ngDevMode ? [{ debugName: "hasSuggestedActions" }] : []);
  // Interactive type computed properties
  interactiveType = computed(() => this.message().metadata?.interactiveType, ...ngDevMode ? [{ debugName: "interactiveType" }] : []);
  hasInteractiveComponent = computed(() => !!this.interactiveType(), ...ngDevMode ? [{ debugName: "hasInteractiveComponent" }] : []);
  isDatePicker = computed(() => this.interactiveType() === "date_picker", ...ngDevMode ? [{ debugName: "isDatePicker" }] : []);
  isVehicleSelector = computed(() => this.interactiveType() === "vehicle_selector", ...ngDevMode ? [{ debugName: "isVehicleSelector" }] : []);
  isDataTypeSelector = computed(() => this.interactiveType() === "data_type_selector", ...ngDevMode ? [{ debugName: "isDataTypeSelector" }] : []);
  // Available vehicles for vehicle selector
  availableVehicles = computed(() => {
    const vehicles = this.message().metadata?.availableVehicles ?? [];
    return vehicles.map((v) => ({
      id: v.id,
      name: v.name,
      registration: void 0
    }));
  }, ...ngDevMode ? [{ debugName: "availableVehicles" }] : []);
  // Selected data types from message metadata (for persistence)
  selectedDataTypesFromMessage = computed(() => {
    return this.message().metadata?.selectedDataTypes ?? [];
  }, ...ngDevMode ? [{ debugName: "selectedDataTypesFromMessage" }] : []);
  // Check if multi-select mode should be enabled
  // Now enabled for all suggestions with 2+ options
  isMultiSelectMode = computed(() => {
    const actions = this.suggestedActions();
    return actions.length >= 2;
  }, ...ngDevMode ? [{ debugName: "isMultiSelectMode" }] : []);
  // Check if all suggestions are data type related
  isDataTypeMultiSelect = computed(() => {
    const actions = this.suggestedActions();
    return actions.length >= 2 && actions.every((action) => DATA_TYPE_VALUES.has(action.value.toLowerCase()));
  }, ...ngDevMode ? [{ debugName: "isDataTypeMultiSelect" }] : []);
  // Check if an action is selected
  isActionSelected(actionId) {
    return this.selectedActionIds().has(actionId);
  }
  // Get selected actions
  selectedActions = computed(() => {
    const ids = this.selectedActionIds();
    return this.suggestedActions().filter((action) => ids.has(action.id));
  }, ...ngDevMode ? [{ debugName: "selectedActions" }] : []);
  // Check if any actions are selected
  hasSelectedActions = computed(() => this.selectedActionIds().size > 0, ...ngDevMode ? [{ debugName: "hasSelectedActions" }] : []);
  statusIcon = computed(() => {
    switch (this.message().status) {
      case "sending":
        return "pi pi-clock";
      case "sent":
        return "pi pi-check";
      case "delivered":
        return "pi pi-check-circle";
      case "error":
        return "pi pi-exclamation-circle";
      default:
        return "";
    }
  }, ...ngDevMode ? [{ debugName: "statusIcon" }] : []);
  statusClass = computed(() => {
    return this.message().status === "error" ? "text-red-500" : "text-blue-400";
  }, ...ngDevMode ? [{ debugName: "statusClass" }] : []);
  onActionClick(action) {
    this.actionSelected.emit(action);
  }
  // Toggle action selection for multi-select mode
  toggleActionSelection(actionId) {
    this.selectedActionIds.update((current) => {
      const newSet = new Set(current);
      if (newSet.has(actionId)) {
        newSet.delete(actionId);
      } else {
        newSet.add(actionId);
      }
      return newSet;
    });
  }
  // Select all data type actions
  selectAllActions() {
    const allIds = this.suggestedActions().map((a) => a.id);
    this.selectedActionIds.set(new Set(allIds));
  }
  // Submit selected actions
  submitSelectedActions() {
    const selected = this.selectedActions();
    if (selected.length > 0) {
      this.multiActionsSelected.emit(selected);
      this.selectedActionIds.set(/* @__PURE__ */ new Set());
    }
  }
  // Handler for inline date picker
  onDateRangeSelected(dateRange) {
    this.dateRangeSelected.emit(dateRange);
  }
  // Handler for inline vehicle selector
  onVehiclesSelected(vehicles) {
    this.vehiclesSelected.emit(vehicles);
  }
  // Handler for inline data type selector
  onDataTypesSelected(dataTypes) {
    this.dataTypesSelected.emit(dataTypes);
  }
  formatTime(date) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
  static \u0275fac = function ChatMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatMessageComponent, selectors: [["app-chat-message"]], inputs: { message: [1, "message"], isDisabled: [1, "isDisabled"], collectingDataTypes: [1, "collectingDataTypes"] }, outputs: { actionSelected: "actionSelected", multiActionsSelected: "multiActionsSelected", dateRangeSelected: "dateRangeSelected", vehiclesSelected: "vehiclesSelected", dataTypesSelected: "dataTypesSelected" }, decls: 10, vars: 13, consts: [[1, "message-wrapper"], [1, "message-bubble"], [1, "message-content", 3, "innerHTML"], [1, "interactive-component"], [1, "suggested-actions", 3, "multi-select-mode"], [1, "message-footer"], [1, "message-time"], [1, "message-status", 3, "ngClass"], [3, "vehicles"], [3, "initialSelection", "collectingTypes"], [3, "dateRangeSelected"], [3, "vehiclesSelected", "vehicles"], [3, "dataTypesSelected", "initialSelection", "collectingTypes"], [1, "suggested-actions"], [1, "multi-select-header"], [1, "multi-select-label"], ["type", "button", 1, "select-all-btn", 3, "click"], [1, "checkbox-actions"], [1, "checkbox-action", 3, "selected"], [1, "multi-select-footer"], ["type", "button", 1, "submit-selection-btn", 3, "click", "disabled"], [1, "pi", "pi-check"], [1, "checkbox-action"], ["type", "checkbox", 3, "change", "checked"], [1, "checkbox-label"], ["type", "button", 1, "action-chip"], ["type", "button", 1, "action-chip", 3, "click"], [3, "ngClass"]], template: function ChatMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275pipe(3, "formatMarkdown");
      \u0275\u0275conditionalCreate(4, ChatMessageComponent_Conditional_4_Template, 4, 3, "div", 3);
      \u0275\u0275conditionalCreate(5, ChatMessageComponent_Conditional_5_Template, 3, 3, "div", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ChatMessageComponent_Conditional_9_Template, 2, 2, "span", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("user-message", ctx.isUser())("assistant-message", ctx.isAssistant())("system-message", ctx.isSystem());
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 11, ctx.message().content), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.hasInteractiveComponent() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasSuggestedActions() ? 5 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formattedTime());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isUser() ? 9 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InlineDatePickerComponent,
    InlineVehicleSelectorComponent,
    InlineDataTypeSelectorComponent,
    FormatMarkdownPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.5rem;\n  padding: 0 1rem;\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease-out;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-color, #3b82f6);\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n  max-width: 75%;\n  margin-left: 3rem;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -8px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-left-color: var(--color-primary-color, #3b82f6);\n  border-bottom-color: var(--color-primary-color, #3b82f6);\n  border-right: 0;\n  border-bottom: 0;\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: var(--color-primary-contrast, #ffffff);\n}\n.message-wrapper.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.message-wrapper.assistant-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.message-wrapper.assistant-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: var(--card-background-color, #ffffff);\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n  max-width: 85%;\n  margin-right: 3rem;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.message-wrapper.assistant-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: -8px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-right-color: var(--card-background-color, #ffffff);\n  border-bottom-color: var(--card-background-color, #ffffff);\n  border-left: 0;\n  border-bottom: 0;\n}\n.message-wrapper.assistant-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: var(--text-color, #1e293b);\n}\n.message-wrapper.assistant-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary, #64748b);\n}\n.message-wrapper.system-message[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.25rem 1rem;\n}\n.message-wrapper.system-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: var(--surface-hover, rgba(225, 245, 254, 0.92));\n  border-radius: 0.5rem;\n  max-width: 90%;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary, #64748b);\n  padding: 0.375rem 0.75rem;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.message-wrapper.system-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.message-bubble[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.625rem 0.375rem;\n  position: relative;\n  word-wrap: break-word;\n}\n.message-content[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.message-content   [_nghost-%COMP%]     strong, \n.message-content   [_nghost-%COMP%]     b {\n  font-weight: 600;\n}\n.message-content   [_nghost-%COMP%]     em, \n.message-content   [_nghost-%COMP%]     i {\n  font-style: italic;\n}\n.message-content   [_nghost-%COMP%]     code {\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 0.125rem 0.375rem;\n  border-radius: 0.25rem;\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Inconsolata",\n    "Roboto Mono",\n    monospace;\n  font-size: 0.85em;\n}\n.message-content   [_nghost-%COMP%]     ul, \n.message-content   [_nghost-%COMP%]     ol {\n  margin: 0.375rem 0;\n  padding-left: 1.25rem;\n}\n.message-content   [_nghost-%COMP%]     li {\n  margin-bottom: 0.125rem;\n}\n.message-content   [_nghost-%COMP%]     blockquote {\n  margin: 0.375rem 0;\n  padding-left: 0.625rem;\n  border-left: 3px solid var(--color-primary-color, #3b82f6);\n  color: var(--text-color-secondary, #64748b);\n  font-style: italic;\n}\n.message-content   [_nghost-%COMP%]     p {\n  margin: 0 0 0.375rem;\n}\n.message-content   [_nghost-%COMP%]     p:last-child {\n  margin-bottom: 0;\n}\n.interactive-component[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid var(--input-border-color, rgba(0, 0, 0, 0.06));\n}\n.suggested-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid var(--input-border-color, rgba(0, 0, 0, 0.06));\n}\n.suggested-actions.multi-select-mode[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.multi-select-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.multi-select-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color-secondary, #64748b);\n}\n.select-all-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d7db);\n  border-radius: 0.375rem;\n  color: var(--text-color-secondary, #64748b);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.select-all-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover, #f0f2f5);\n  border-color: var(--input-border-color, #8696a0);\n}\n.checkbox-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.checkbox-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: var(--surface-hover, #f0f2f5);\n  border: 1.5px solid transparent;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-action[_ngcontent-%COMP%]:hover {\n  background: var(--surface-ground, #e9edef);\n}\n.checkbox-action.selected[_ngcontent-%COMP%] {\n  background: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n.checkbox-action[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color, #1e293b);\n}\n.multi-select-footer[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.submit-selection-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--color-primary-contrast, #ffffff);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.submit-selection-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.9);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3);\n}\n.submit-selection-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--input-border-color, #d1d7db);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.submit-selection-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.action-chip[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  background: var(--surface-hover, #f0f2f5);\n  border: 1px solid var(--input-border-color, #d1d7db);\n  border-radius: 1.25rem;\n  color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.action-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  transform: translateY(-1px);\n}\n.action-chip[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.message-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.125rem;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\n.message-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n.message-status.sent[_ngcontent-%COMP%], \n.message-status.delivered[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary, #667781);\n}\n.message-status.read[_ngcontent-%COMP%] {\n  color: var(--color-primary-color, #3b82f6);\n}\n.message-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=chat-message.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatMessageComponent, [{
    type: Component,
    args: [{ selector: "app-chat-message", imports: [
      CommonModule,
      ButtonModule,
      CheckboxModule,
      FormsModule,
      FormatMarkdownPipe,
      InlineDatePickerComponent,
      InlineVehicleSelectorComponent,
      InlineDataTypeSelectorComponent
    ], template: '<div\n  class="message-wrapper"\n  [class.user-message]="isUser()"\n  [class.assistant-message]="isAssistant()"\n  [class.system-message]="isSystem()"\n>\n  <div class="message-bubble">\n    <!-- Message content with markdown-style rendering -->\n    <div\n      class="message-content"\n      [innerHTML]="message().content | formatMarkdown"\n    ></div>\n\n    <!-- Interactive components for guided conversation -->\n    @if (hasInteractiveComponent()) {\n      <div class="interactive-component">\n        @if (isDatePicker()) {\n          <app-inline-date-picker\n            (dateRangeSelected)="onDateRangeSelected($event)"\n          />\n        }\n        @if (isVehicleSelector()) {\n          <app-inline-vehicle-selector\n            [vehicles]="availableVehicles()"\n            (vehiclesSelected)="onVehiclesSelected($event)"\n          />\n        }\n        @if (isDataTypeSelector()) {\n          <app-inline-data-type-selector\n            [initialSelection]="selectedDataTypesFromMessage()"\n            [collectingTypes]="collectingDataTypes()"\n            (dataTypesSelected)="onDataTypesSelected($event)"\n          />\n        }\n      </div>\n    }\n\n    <!-- Suggested actions (for assistant messages) -->\n    @if (hasSuggestedActions()) {\n      <div\n        class="suggested-actions"\n        [class.multi-select-mode]="isMultiSelectMode()"\n      >\n        @if (isMultiSelectMode()) {\n          <!-- Multi-select mode with checkboxes -->\n          <div class="multi-select-header">\n            <span class="multi-select-label">\n              @if (isDataTypeMultiSelect()) {\n                Select data types to collect:\n              } @else {\n                Select one or more options:\n              }\n            </span>\n            <button\n              type="button"\n              class="select-all-btn"\n              (click)="selectAllActions()"\n            >\n              Select All\n            </button>\n          </div>\n          <div class="checkbox-actions">\n            @for (action of suggestedActions(); track action.id) {\n              <label\n                class="checkbox-action"\n                [class.selected]="isActionSelected(action.id)"\n              >\n                <input\n                  type="checkbox"\n                  [checked]="isActionSelected(action.id)"\n                  (change)="toggleActionSelection(action.id)"\n                />\n                <span class="checkbox-label">{{ action.label }}</span>\n              </label>\n            }\n          </div>\n          <div class="multi-select-footer">\n            <button\n              type="button"\n              class="submit-selection-btn"\n              [disabled]="!hasSelectedActions()"\n              (click)="submitSelectedActions()"\n            >\n              <i class="pi pi-check"></i>\n              @if (isDataTypeMultiSelect()) {\n                Start Data Collection ({{ selectedActionIds().size }} selected)\n              } @else {\n                Apply Selected ({{ selectedActionIds().size }})\n              }\n            </button>\n          </div>\n        } @else {\n          <!-- Single-select mode with buttons (only 1 suggestion) -->\n          @for (action of suggestedActions(); track action.id) {\n            <button\n              class="action-chip"\n              (click)="onActionClick(action)"\n              type="button"\n            >\n              {{ action.label }}\n            </button>\n          }\n        }\n      </div>\n    }\n\n    <!-- Message footer with time and status -->\n    <div class="message-footer">\n      <span class="message-time">{{ formattedTime() }}</span>\n      @if (isUser()) {\n        <span class="message-status" [ngClass]="statusClass()">\n          <i [ngClass]="statusIcon()"></i>\n        </span>\n      }\n    </div>\n  </div>\n</div>\n', styles: ['/* src/app/features/development/components/analytical-report/chat/components/chat-message/chat-message.component.scss */\n:host {\n  display: block;\n}\n.message-wrapper {\n  display: flex;\n  margin-bottom: 0.5rem;\n  padding: 0 1rem;\n  animation: slideIn 0.2s ease-out;\n}\n.message-wrapper.user-message {\n  justify-content: flex-end;\n}\n.message-wrapper.user-message .message-bubble {\n  background-color: var(--color-primary-color, #3b82f6);\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n  max-width: 75%;\n  margin-left: 3rem;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);\n}\n.message-wrapper.user-message .message-bubble::after {\n  content: "";\n  position: absolute;\n  right: -8px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-left-color: var(--color-primary-color, #3b82f6);\n  border-bottom-color: var(--color-primary-color, #3b82f6);\n  border-right: 0;\n  border-bottom: 0;\n}\n.message-wrapper.user-message .message-bubble .message-content {\n  color: var(--color-primary-contrast, #ffffff);\n}\n.message-wrapper.user-message .message-bubble .message-time {\n  color: rgba(255, 255, 255, 0.7);\n}\n.message-wrapper.assistant-message {\n  justify-content: flex-start;\n}\n.message-wrapper.assistant-message .message-bubble {\n  background-color: var(--card-background-color, #ffffff);\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n  max-width: 85%;\n  margin-right: 3rem;\n  position: relative;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid var(--input-border-color, #e2e8f0);\n}\n.message-wrapper.assistant-message .message-bubble::after {\n  content: "";\n  position: absolute;\n  left: -8px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-right-color: var(--card-background-color, #ffffff);\n  border-bottom-color: var(--card-background-color, #ffffff);\n  border-left: 0;\n  border-bottom: 0;\n}\n.message-wrapper.assistant-message .message-bubble .message-content {\n  color: var(--text-color, #1e293b);\n}\n.message-wrapper.assistant-message .message-bubble .message-time {\n  color: var(--text-color-secondary, #64748b);\n}\n.message-wrapper.system-message {\n  justify-content: center;\n  padding: 0.25rem 1rem;\n}\n.message-wrapper.system-message .message-bubble {\n  background-color: var(--surface-hover, rgba(225, 245, 254, 0.92));\n  border-radius: 0.5rem;\n  max-width: 90%;\n  text-align: center;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary, #64748b);\n  padding: 0.375rem 0.75rem;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.message-wrapper.system-message .message-bubble::after {\n  display: none;\n}\n.message-bubble {\n  padding: 0.5rem 0.625rem 0.375rem;\n  position: relative;\n  word-wrap: break-word;\n}\n.message-content {\n  font-size: 0.9375rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.message-content :host ::ng-deep strong,\n.message-content :host ::ng-deep b {\n  font-weight: 600;\n}\n.message-content :host ::ng-deep em,\n.message-content :host ::ng-deep i {\n  font-style: italic;\n}\n.message-content :host ::ng-deep code {\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 0.125rem 0.375rem;\n  border-radius: 0.25rem;\n  font-family:\n    "SF Mono",\n    "Monaco",\n    "Inconsolata",\n    "Roboto Mono",\n    monospace;\n  font-size: 0.85em;\n}\n.message-content :host ::ng-deep ul,\n.message-content :host ::ng-deep ol {\n  margin: 0.375rem 0;\n  padding-left: 1.25rem;\n}\n.message-content :host ::ng-deep li {\n  margin-bottom: 0.125rem;\n}\n.message-content :host ::ng-deep blockquote {\n  margin: 0.375rem 0;\n  padding-left: 0.625rem;\n  border-left: 3px solid var(--color-primary-color, #3b82f6);\n  color: var(--text-color-secondary, #64748b);\n  font-style: italic;\n}\n.message-content :host ::ng-deep p {\n  margin: 0 0 0.375rem;\n}\n.message-content :host ::ng-deep p:last-child {\n  margin-bottom: 0;\n}\n.interactive-component {\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid var(--input-border-color, rgba(0, 0, 0, 0.06));\n}\n.suggested-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.625rem;\n  padding-top: 0.625rem;\n  border-top: 1px solid var(--input-border-color, rgba(0, 0, 0, 0.06));\n}\n.suggested-actions.multi-select-mode {\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.multi-select-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n}\n.multi-select-label {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color-secondary, #64748b);\n}\n.select-all-btn {\n  padding: 0.25rem 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid var(--input-border-color, #d1d7db);\n  border-radius: 0.375rem;\n  color: var(--text-color-secondary, #64748b);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.select-all-btn:hover {\n  background: var(--surface-hover, #f0f2f5);\n  border-color: var(--input-border-color, #8696a0);\n}\n.checkbox-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.checkbox-action {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: var(--surface-hover, #f0f2f5);\n  border: 1.5px solid transparent;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.checkbox-action:hover {\n  background: var(--surface-ground, #e9edef);\n}\n.checkbox-action.selected {\n  background: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n.checkbox-action input[type=checkbox] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n}\n.checkbox-label {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-color, #1e293b);\n}\n.multi-select-footer {\n  margin-top: 0.25rem;\n}\n.submit-selection-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  background: var(--color-primary-color, #3b82f6);\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--color-primary-contrast, #ffffff);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.submit-selection-btn:hover:not(:disabled) {\n  filter: brightness(0.9);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3);\n}\n.submit-selection-btn:disabled {\n  background: var(--input-border-color, #d1d7db);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.submit-selection-btn i {\n  font-size: 0.875rem;\n}\n.action-chip {\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  background: var(--surface-hover, #f0f2f5);\n  border: 1px solid var(--input-border-color, #d1d7db);\n  border-radius: 1.25rem;\n  color: var(--color-primary-color, #3b82f6);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n}\n.action-chip:hover {\n  background: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n  transform: translateY(-1px);\n}\n.action-chip:active {\n  transform: translateY(0);\n}\n.message-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.25rem;\n  margin-top: 0.125rem;\n}\n.message-time {\n  font-size: 0.6875rem;\n}\n.message-status {\n  font-size: 0.75rem;\n  display: flex;\n  align-items: center;\n}\n.message-status.sent,\n.message-status.delivered {\n  color: var(--text-color-secondary, #667781);\n}\n.message-status.read {\n  color: var(--color-primary-color, #3b82f6);\n}\n.message-status i {\n  font-size: 0.75rem;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=chat-message.component.css.map */\n'] }]
  }], null, { message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true }] }], isDisabled: [{ type: Input, args: [{ isSignal: true, alias: "isDisabled", required: false }] }], collectingDataTypes: [{ type: Input, args: [{ isSignal: true, alias: "collectingDataTypes", required: false }] }], actionSelected: [{ type: Output, args: ["actionSelected"] }], multiActionsSelected: [{ type: Output, args: ["multiActionsSelected"] }], dateRangeSelected: [{ type: Output, args: ["dateRangeSelected"] }], vehiclesSelected: [{ type: Output, args: ["vehiclesSelected"] }], dataTypesSelected: [{ type: Output, args: ["dataTypesSelected"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatMessageComponent, { className: "ChatMessageComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/chat-message/chat-message.component.ts", lineNumber: 41 });
})();

// src/app/features/development/components/analytical-report/chat/components/chat-input/chat-input.component.ts
var _c05 = ["inputField"];
var ChatInputComponent = class _ChatInputComponent {
  // Inputs
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  placeholder = input("Type your message...", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  // Outputs
  messageSent = output();
  // Local state
  messageText = signal("", ...ngDevMode ? [{ debugName: "messageText" }] : []);
  inputField;
  onSend() {
    const trimmed = this.messageText().trim();
    if (trimmed && !this.disabled() && !this.isLoading()) {
      this.messageSent.emit(trimmed);
      this.messageText.set("");
      this.resetTextareaHeight();
    }
  }
  onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.onSend();
    }
  }
  onInput(event) {
    const target = event.target;
    this.messageText.set(target.value);
    this.autoResizeTextarea(target);
  }
  autoResizeTextarea(textarea) {
    textarea.style.height = "auto";
    const maxHeight = 150;
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  }
  resetTextareaHeight() {
    if (this.inputField?.nativeElement !== void 0) {
      this.inputField.nativeElement.style.height = "auto";
    }
  }
  focus() {
    this.inputField?.nativeElement?.focus();
  }
  static \u0275fac = function ChatInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatInputComponent, selectors: [["app-chat-input"]], viewQuery: function ChatInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputField = _t.first);
    }
  }, inputs: { disabled: [1, "disabled"], placeholder: [1, "placeholder"], isLoading: [1, "isLoading"] }, outputs: { messageSent: "messageSent" }, decls: 5, vars: 6, consts: [["inputField", ""], [1, "chat-input-container"], [1, "input-wrapper"], ["rows", "1", 1, "chat-textarea", 3, "input", "keydown", "placeholder", "disabled", "value"], ["pButton", "", "type", "button", "aria-label", "Send message", "tooltipPosition", "top", 1, "send-button", 3, "click", "disabled", "icon", "pTooltip"]], template: function ChatInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "textarea", 3, 0);
      \u0275\u0275listener("input", function ChatInputComponent_Template_textarea_input_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInput($event));
      })("keydown", function ChatInputComponent_Template_textarea_keydown_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyDown($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function ChatInputComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSend());
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.placeholder())("disabled", ctx.disabled() || ctx.isLoading())("value", ctx.messageText());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.disabled() || ctx.isLoading() || !ctx.messageText().trim())("icon", ctx.isLoading() ? "pi pi-spin pi-spinner" : "pi pi-send")("pTooltip", "Send message (Enter)");
    }
  }, dependencies: [CommonModule, FormsModule, ButtonModule, ButtonDirective, TooltipModule, Tooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.chat-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: var(--card-background-color, #ffffff);\n  border-top: 1px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0 0 0.5rem 0.5rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n.chat-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 2.5rem;\n  max-height: 150px;\n  padding: 0.625rem 1rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: var(--input-font-color, #1e293b);\n  background-color: var(--input-background-color, #ffffff) !important;\n  border: 2px solid var(--color-primary-color, #3b82f6);\n  border-radius: 1.25rem;\n  resize: none;\n  overflow-y: auto;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.chat-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: var(--input-background-color, #ffffff) !important;\n  border-color: var(--color-primary-color, #2563eb);\n  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.chat-textarea[_ngcontent-%COMP%]:disabled {\n  background-color: var(--input-background-color, #f1f5f9) !important;\n  color: var(--input-placeholder-color, #64748b);\n  border-color: var(--input-border-color, #cbd5e1);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.chat-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--input-placeholder-color, #94a3b8);\n}\n.send-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border-radius: 50%;\n  background: var(--color-primary-color, #3b82f6) !important;\n  border: none;\n  color: var(--color-primary-contrast, #ffffff);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.send-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.9);\n  transform: scale(1.05);\n}\n.send-button[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.send-button[_ngcontent-%COMP%]:disabled {\n  background: var(--input-border-color, #d1d5db) !important;\n  cursor: not-allowed;\n  transform: none;\n  opacity: 0.6;\n}\n.send-button[_ngcontent-%COMP%]     .p-button-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=chat-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatInputComponent, [{
    type: Component,
    args: [{ selector: "app-chat-input", imports: [CommonModule, FormsModule, ButtonModule, TooltipModule], template: `<div class="chat-input-container">
  <div class="input-wrapper">
    <textarea
      #inputField
      class="chat-textarea"
      [placeholder]="placeholder()"
      [disabled]="disabled() || isLoading()"
      [value]="messageText()"
      (input)="onInput($event)"
      (keydown)="onKeyDown($event)"
      rows="1"
    ></textarea>
  </div>

  <button
    pButton
    type="button"
    class="send-button"
    [disabled]="disabled() || isLoading() || !messageText().trim()"
    (click)="onSend()"
    [icon]="isLoading() ? 'pi pi-spin pi-spinner' : 'pi pi-send'"
    aria-label="Send message"
    [pTooltip]="'Send message (Enter)'"
    tooltipPosition="top"
  ></button>
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/chat-input/chat-input.component.scss */\n:host {\n  display: block;\n}\n.chat-input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background-color: var(--card-background-color, #ffffff);\n  border-top: 1px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0 0 0.5rem 0.5rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);\n}\n.input-wrapper {\n  flex: 1;\n  position: relative;\n}\n.chat-textarea {\n  width: 100%;\n  min-height: 2.5rem;\n  max-height: 150px;\n  padding: 0.625rem 1rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: var(--input-font-color, #1e293b);\n  background-color: var(--input-background-color, #ffffff) !important;\n  border: 2px solid var(--color-primary-color, #3b82f6);\n  border-radius: 1.25rem;\n  resize: none;\n  overflow-y: auto;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n.chat-textarea:focus {\n  outline: none;\n  background-color: var(--input-background-color, #ffffff) !important;\n  border-color: var(--color-primary-color, #2563eb);\n  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.chat-textarea:disabled {\n  background-color: var(--input-background-color, #f1f5f9) !important;\n  color: var(--input-placeholder-color, #64748b);\n  border-color: var(--input-border-color, #cbd5e1);\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.chat-textarea::placeholder {\n  color: var(--input-placeholder-color, #94a3b8);\n}\n.send-button {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border-radius: 50%;\n  background: var(--color-primary-color, #3b82f6) !important;\n  border: none;\n  color: var(--color-primary-contrast, #ffffff);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.send-button:hover:not(:disabled) {\n  filter: brightness(0.9);\n  transform: scale(1.05);\n}\n.send-button:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.send-button:disabled {\n  background: var(--input-border-color, #d1d5db) !important;\n  cursor: not-allowed;\n  transform: none;\n  opacity: 0.6;\n}\n.send-button ::ng-deep .p-button-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=chat-input.component.css.map */\n"] }]
  }], null, { disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], messageSent: [{ type: Output, args: ["messageSent"] }], inputField: [{
    type: ViewChild,
    args: ["inputField"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatInputComponent, { className: "ChatInputComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/chat-input/chat-input.component.ts", lineNumber: 20 });
})();

// src/app/features/development/components/analytical-report/chat/components/query-preview/query-preview.component.ts
var _forTrack05 = ($index, $item) => $item.vehicleId;
var _forTrack1 = ($index, $item) => $item.dataType;
function QueryPreviewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-level", ctx_r0.confidenceColor());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.confidence(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.confidenceLabel());
  }
}
function QueryPreviewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Building query...");
    \u0275\u0275elementEnd()();
  }
}
function QueryPreviewComponent_Conditional_9_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", change_r2, " ");
  }
}
function QueryPreviewComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Recent changes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 15);
    \u0275\u0275repeaterCreate(4, QueryPreviewComponent_Conditional_9_Conditional_2_For_5_Template, 3, 1, "li", 16, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.changes());
  }
}
function QueryPreviewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, QueryPreviewComponent_Conditional_9_Conditional_2_Template, 6, 0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.query());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChanges() ? 2 : -1);
  }
}
function QueryPreviewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 18);
    \u0275\u0275element(2, "i", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 19);
    \u0275\u0275text(4, "Your Query Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, " As you chat, your analysis request will appear here. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "span", 23);
    \u0275\u0275text(10, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12, "Describe what you want to analyze");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "span", 23);
    \u0275\u0275text(15, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17, "Select data types to include");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 22)(19, "span", 23);
    \u0275\u0275text(20, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 24);
    \u0275\u0275text(22, "Generate your report");
    \u0275\u0275elementEnd()()()();
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Collecting: ", ctx_r0.dataTypesLabel());
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.statusMessage());
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "Vehicles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11, "Records");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.completedVehiclesCount(), "/", ctx_r0.vehicleProgress().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, ctx_r0.totalRecordsCollected()));
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 42);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 43);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const dt_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", dt_r3.recordCount, ") ");
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275conditionalCreate(1, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_1_Template, 1, 0, "i", 11)(2, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_2_Template, 1, 0, "i", 49);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r3 = ctx.$implicit;
    \u0275\u0275attribute("data-status", dt_r3.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r3.status === "collecting" ? 1 : dt_r3.status === "complete" ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dt_r3.dataType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r3.recordCount > 0 ? 4 : -1);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275conditionalCreate(2, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_2_Template, 1, 0, "i", 41)(3, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_3_Template, 1, 0, "i", 42)(4, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_4_Template, 1, 0, "i", 43)(5, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Conditional_5_Template, 1, 0, "i", 44);
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 46);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 47);
    \u0275\u0275repeaterCreate(12, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_For_13_Template, 5, 4, "span", 48, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    \u0275\u0275attribute("data-status", vehicle_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vehicle_r4.status === "pending" ? 2 : vehicle_r4.status === "collecting" ? 3 : vehicle_r4.status === "complete" ? 4 : vehicle_r4.status === "error" ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(vehicle_r4.vehicleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 4, vehicle_r4.recordsCollected), " records");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(vehicle_r4.dataTypesProgress);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_For_2_Template, 14, 6, "div", 39, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.vehicleProgress());
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_1_Template, 4, 1, "div", 29);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275element(3, "p-progressBar", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_4_Template, 4, 1, "div", 32);
    \u0275\u0275conditionalCreate(5, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_5_Template, 12, 5, "div", 33);
    \u0275\u0275conditionalCreate(6, QueryPreviewComponent_Conditional_11_Conditional_5_Conditional_6_Template, 3, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataTypesLabel() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.collectionProgress())("showValue", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.statusMessage() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasVehicleProgress() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasVehicleProgress() ? 6 : -1);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5, "Trips");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r0.collectedData().trips));
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5, "Events");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r0.collectedData().events));
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5, "Telemetry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r0.collectedData().telemetry));
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5, "Alerts");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r0.collectedData().alerts));
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 43);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 44);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 60);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const dt_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" (", dt_r5.recordCount, ") ");
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275conditionalCreate(1, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Conditional_1_Template, 1, 0, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dt_r5 = ctx.$implicit;
    \u0275\u0275attribute("data-status", dt_r5.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r5.status === "complete" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dt_r5.dataType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r5.recordCount > 0 ? 3 : -1);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275conditionalCreate(2, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_2_Template, 1, 0, "i", 43)(3, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_3_Template, 1, 0, "i", 44)(4, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Conditional_4_Template, 1, 0, "i", 60);
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47);
    \u0275\u0275repeaterCreate(11, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_For_12_Template, 4, 4, "span", 48, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vehicle_r6 = ctx.$implicit;
    \u0275\u0275attribute("data-status", vehicle_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(vehicle_r6.status === "complete" ? 2 : vehicle_r6.status === "error" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vehicle_r6.vehicleName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 4, vehicle_r6.recordsCollected), " records");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(vehicle_r6.dataTypesProgress);
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 57)(2, "span");
    \u0275\u0275text(3, "Per Vehicle Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275repeaterCreate(7, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_For_8_Template, 13, 6, "div", 39, _forTrack05);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.vehicleProgress().length, " vehicles");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.vehicleProgress());
  }
}
function QueryPreviewComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Collection Complete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275conditionalCreate(7, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_7_Template, 6, 3, "div", 53);
    \u0275\u0275conditionalCreate(8, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_8_Template, 6, 3, "div", 53);
    \u0275\u0275conditionalCreate(9, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_9_Template, 6, 3, "div", 53);
    \u0275\u0275conditionalCreate(10, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_10_Template, 6, 3, "div", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, QueryPreviewComponent_Conditional_11_Conditional_6_Conditional_11_Template, 9, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r0.collectedData().trips > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.collectedData().events > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.collectedData().telemetry > 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.collectedData().alerts > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasVehicleProgress() ? 11 : -1);
  }
}
function QueryPreviewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 25);
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Data Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, QueryPreviewComponent_Conditional_11_Conditional_5_Template, 7, 6, "div", 27)(6, QueryPreviewComponent_Conditional_11_Conditional_6_Template, 12, 5, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isCollecting() ? 5 : ctx_r0.hasCollectedData() ? 6 : -1);
  }
}
var QueryPreviewComponent = class _QueryPreviewComponent {
  // Inputs
  query = input("", ...ngDevMode ? [{ debugName: "query" }] : []);
  confidence = input(0, ...ngDevMode ? [{ debugName: "confidence" }] : []);
  changes = input([], ...ngDevMode ? [{ debugName: "changes" }] : []);
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  // Data collection status
  isCollecting = input(false, ...ngDevMode ? [{ debugName: "isCollecting" }] : []);
  collectionProgress = input(0, ...ngDevMode ? [{ debugName: "collectionProgress" }] : []);
  collectedData = input(null, ...ngDevMode ? [{ debugName: "collectedData" }] : []);
  // Detailed collection status
  dataTypes = input([], ...ngDevMode ? [{ debugName: "dataTypes" }] : []);
  statusMessage = input("", ...ngDevMode ? [{ debugName: "statusMessage" }] : []);
  currentVehicle = input("", ...ngDevMode ? [{ debugName: "currentVehicle" }] : []);
  vehicleProgress = input([], ...ngDevMode ? [{ debugName: "vehicleProgress" }] : []);
  // Computed properties
  hasQuery = computed(() => this.query().length > 0, ...ngDevMode ? [{ debugName: "hasQuery" }] : []);
  hasChanges = computed(() => this.changes().length > 0, ...ngDevMode ? [{ debugName: "hasChanges" }] : []);
  hasCollectedData = computed(() => this.collectedData() !== null, ...ngDevMode ? [{ debugName: "hasCollectedData" }] : []);
  hasVehicleProgress = computed(() => this.vehicleProgress().length > 0, ...ngDevMode ? [{ debugName: "hasVehicleProgress" }] : []);
  // Format data types for display
  dataTypesLabel = computed(() => {
    const types = this.dataTypes();
    if (types.length === 0)
      return "";
    return types.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ");
  }, ...ngDevMode ? [{ debugName: "dataTypesLabel" }] : []);
  // Get completed vehicles count
  completedVehiclesCount = computed(() => {
    return this.vehicleProgress().filter((v) => v.status === "complete").length;
  }, ...ngDevMode ? [{ debugName: "completedVehiclesCount" }] : []);
  // Get total records collected so far
  totalRecordsCollected = computed(() => {
    return this.vehicleProgress().reduce((sum, v) => sum + v.recordsCollected, 0);
  }, ...ngDevMode ? [{ debugName: "totalRecordsCollected" }] : []);
  confidenceColor = computed(() => {
    const conf = this.confidence();
    if (conf >= 80)
      return "high";
    if (conf >= 50)
      return "medium";
    return "low";
  }, ...ngDevMode ? [{ debugName: "confidenceColor" }] : []);
  confidenceLabel = computed(() => {
    const conf = this.confidence();
    if (conf >= 90)
      return "Ready";
    if (conf >= 70)
      return "Good";
    if (conf >= 50)
      return "Building";
    return "Starting";
  }, ...ngDevMode ? [{ debugName: "confidenceLabel" }] : []);
  static \u0275fac = function QueryPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueryPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QueryPreviewComponent, selectors: [["app-query-preview"]], inputs: { query: [1, "query"], confidence: [1, "confidence"], changes: [1, "changes"], isLoading: [1, "isLoading"], isCollecting: [1, "isCollecting"], collectionProgress: [1, "collectionProgress"], collectedData: [1, "collectedData"], dataTypes: [1, "dataTypes"], statusMessage: [1, "statusMessage"], currentVehicle: [1, "currentVehicle"], vehicleProgress: [1, "vehicleProgress"] }, decls: 12, vars: 3, consts: [[1, "query-preview-panel"], [1, "panel-header"], [1, "header-title"], [1, "pi", "pi-file-edit"], [1, "confidence-badge"], [1, "query-content"], [1, "loading-state"], [1, "empty-state"], [1, "data-status-section"], [1, "confidence-value"], [1, "confidence-label"], [1, "pi", "pi-spin", "pi-spinner"], [1, "query-text"], [1, "changes-section"], [1, "changes-label"], [1, "changes-list"], [1, "change-item"], [1, "pi", "pi-check-circle"], [1, "empty-state-icon"], [1, "empty-state-title"], [1, "empty-state-description"], [1, "empty-state-steps"], [1, "step"], [1, "step-number"], [1, "step-text"], [1, "section-header"], [1, "pi", "pi-database"], [1, "collection-progress"], [1, "collected-data"], [1, "data-types-label"], [1, "progress-bar-container"], ["styleClass", "collection-progress-bar", 3, "value", "showValue"], [1, "status-message"], [1, "collection-stats"], [1, "vehicle-progress-list"], [1, "pi", "pi-list"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "vehicle-progress-item"], [1, "vehicle-header"], [1, "pi", "pi-clock", "status-icon", "pending"], [1, "pi", "pi-spin", "pi-spinner", "status-icon", "collecting"], [1, "pi", "pi-check-circle", "status-icon", "complete"], [1, "pi", "pi-exclamation-circle", "status-icon", "error"], [1, "vehicle-name"], [1, "vehicle-records"], [1, "data-type-badges"], [1, "data-type-badge"], [1, "pi", "pi-check"], [1, "collection-summary"], [1, "summary-header"], [1, "summary-totals"], [1, "total-item"], [1, "vehicle-breakdown"], [1, "total-value"], [1, "total-label"], [1, "breakdown-header"], [1, "vehicle-count"], [1, "vehicle-progress-list", "completed"], [1, "pi", "pi-minus-circle", "status-icon", "skipped"]], template: function QueryPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Current Query");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, QueryPreviewComponent_Conditional_6_Template, 5, 3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275conditionalCreate(8, QueryPreviewComponent_Conditional_8_Template, 4, 0, "div", 6)(9, QueryPreviewComponent_Conditional_9_Template, 3, 2)(10, QueryPreviewComponent_Conditional_10_Template, 23, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, QueryPreviewComponent_Conditional_11_Template, 7, 1, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.confidence() > 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 8 : ctx.hasQuery() ? 9 : 10);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isCollecting() || ctx.hasCollectedData() ? 11 : -1);
    }
  }, dependencies: [CommonModule, CardModule, ProgressBarModule, ProgressBar, DecimalPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.query-preview-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1rem;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n}\n.confidence-badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n}\n.confidence-badge[data-level=high][_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.confidence-badge[data-level=medium][_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.confidence-badge[data-level=low][_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.confidence-badge[_ngcontent-%COMP%]   .confidence-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n.confidence-badge[_ngcontent-%COMP%]   .confidence-label[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.query-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #3b82f6;\n}\n.query-text[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  margin: 0;\n  padding: 0.75rem;\n  background-color: #f3f4f6;\n  border-radius: 0.375rem;\n  border-left: 3px solid #3b82f6;\n}\n.changes-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.changes-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.changes-list[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n  padding: 0;\n  list-style: none;\n}\n.change-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  color: #059669;\n  margin-bottom: 0.25rem;\n}\n.change-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n  height: 100%;\n}\n.empty-state-icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  border-radius: 50%;\n  margin-bottom: 1rem;\n}\n.empty-state-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.empty-state-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state-description[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem 0;\n  font-size: 0.8125rem;\n  color: #6b7280;\n  max-width: 200px;\n}\n.empty-state-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  width: 100%;\n  max-width: 220px;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  text-align: left;\n}\n.step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e5e7eb;\n  border-radius: 50%;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.step[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #6b7280;\n  line-height: 1.3;\n}\n.data-status-section[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.collection-progress[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.collection-progress[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.375rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.data-types-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #374151;\n}\n.data-types-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.progress-bar-container[_ngcontent-%COMP%]     .collection-progress-bar {\n  height: 0.5rem;\n  border-radius: 0.25rem;\n}\n.status-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.status-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.collection-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 0.5rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  color: #6b7280;\n}\n.vehicle-progress-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 0.5rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.vehicle-progress-item[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n}\n.vehicle-progress-item[data-status=collecting][_ngcontent-%COMP%] {\n  border-left: 3px solid #3b82f6;\n  background-color: #eff6ff;\n}\n.vehicle-progress-item[data-status=complete][_ngcontent-%COMP%] {\n  border-left: 3px solid #10b981;\n  background-color: #f0fdf4;\n}\n.vehicle-progress-item[data-status=error][_ngcontent-%COMP%] {\n  border-left: 3px solid #ef4444;\n  background-color: #fef2f2;\n}\n.vehicle-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-bottom: 0.375rem;\n}\n.vehicle-header[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.vehicle-header[_ngcontent-%COMP%]   .status-icon.pending[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.vehicle-header[_ngcontent-%COMP%]   .status-icon.collecting[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.vehicle-header[_ngcontent-%COMP%]   .status-icon.complete[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.vehicle-header[_ngcontent-%COMP%]   .status-icon.error[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.vehicle-header[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: #374151;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vehicle-header[_ngcontent-%COMP%]   .vehicle-records[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.data-type-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.data-type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 500;\n  border-radius: 0.25rem;\n  text-transform: capitalize;\n}\n.data-type-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n}\n.data-type-badge[data-status=pending][_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.data-type-badge[data-status=collecting][_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.data-type-badge[data-status=complete][_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.data-type-badge[data-status=skipped][_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #9ca3af;\n}\n.collected-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.collection-summary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 0.5rem;\n}\n.summary-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #166534;\n  margin-bottom: 0.5rem;\n}\n.summary-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #22c55e;\n}\n.summary-totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.total-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  min-width: 60px;\n}\n.total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #166534;\n}\n.total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  color: #6b7280;\n}\n.vehicle-breakdown[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 0.75rem;\n}\n.breakdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n}\n.breakdown-header[_ngcontent-%COMP%]   .vehicle-count[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #6b7280;\n}\n.vehicle-progress-list.completed[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n.data-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n}\n.data-item.success[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.data-item.success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.data-item.skipped[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.data-item.skipped[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .query-preview-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .query-preview-panel[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .query-preview-panel[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .query-preview-panel[_ngcontent-%COMP%] {\n  background-color: #1f2937;\n  border-color: #374151;\n}\n.dark[_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  background-color: #111827;\n  border-bottom-color: #374151;\n}\n.dark[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .header-title[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .query-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .query-text[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .query-text[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .query-text[_ngcontent-%COMP%] {\n  background-color: #374151;\n  color: #f3f4f6;\n  border-left-color: #3b82f6;\n}\n.dark[_nghost-%COMP%]   .changes-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .changes-section[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .changes-section[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .changes-section[_ngcontent-%COMP%] {\n  border-top-color: #374151;\n}\n.dark[_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f 0%,\n      #1e40af 100%);\n}\n.dark[_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.dark[_nghost-%COMP%]   .empty-state-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-state-title[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .empty-state-title[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .empty-state-description[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-state-description[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .empty-state-description[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .empty-state-description[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .step[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .step[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .step[_ngcontent-%COMP%] {\n  background-color: #374151;\n}\n.dark[_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #4b5563;\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .step[_ngcontent-%COMP%]   .step-text[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .data-status-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-status-section[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-status-section[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-status-section[_ngcontent-%COMP%] {\n  background-color: #111827;\n  border-top-color: #374151;\n}\n.dark[_nghost-%COMP%]   .section-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-header[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .section-header[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-types-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .status-message[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-message[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .status-message[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .status-message[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.dark[_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%] {\n  border-top-color: #374151;\n}\n.dark[_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .collection-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n}\n.dark[_nghost-%COMP%]   .vehicle-progress-list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-progress-list[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-progress-list[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-progress-list[_ngcontent-%COMP%] {\n  border-top-color: #374151;\n}\n.dark[_nghost-%COMP%]   .vehicle-progress-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-progress-item[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-progress-item[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-progress-item[_ngcontent-%COMP%] {\n  background-color: #374151;\n  border-color: #4b5563;\n}\n.dark[_nghost-%COMP%]   .vehicle-progress-item[data-status=collecting][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-progress-item[data-status=collecting][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-progress-item[data-status=collecting][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-progress-item[data-status=collecting][_ngcontent-%COMP%] {\n  background-color: #1e3a5f;\n}\n.dark[_nghost-%COMP%]   .vehicle-progress-item[data-status=complete][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-progress-item[data-status=complete][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-progress-item[data-status=complete][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-progress-item[data-status=complete][_ngcontent-%COMP%] {\n  background-color: #064e3b;\n}\n.dark[_nghost-%COMP%]   .vehicle-progress-item[data-status=error][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-progress-item[data-status=error][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-progress-item[data-status=error][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-progress-item[data-status=error][_ngcontent-%COMP%] {\n  background-color: #7f1d1d;\n}\n.dark[_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-records[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-records[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-records[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-header[_ngcontent-%COMP%]   .vehicle-records[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .data-type-badge[data-status=pending][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-type-badge[data-status=pending][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-type-badge[data-status=pending][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-type-badge[data-status=pending][_ngcontent-%COMP%] {\n  background-color: #374151;\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .data-type-badge[data-status=collecting][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-type-badge[data-status=collecting][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-type-badge[data-status=collecting][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-type-badge[data-status=collecting][_ngcontent-%COMP%] {\n  background-color: #1e40af;\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .data-type-badge[data-status=complete][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-type-badge[data-status=complete][_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .data-type-badge[data-status=complete][_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .data-type-badge[data-status=complete][_ngcontent-%COMP%] {\n  background-color: #065f46;\n  color: #a7f3d0;\n}\n.dark[_nghost-%COMP%]   .collection-summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .collection-summary[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .collection-summary[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .collection-summary[_ngcontent-%COMP%] {\n  background-color: #064e3b;\n  border-color: #065f46;\n}\n.dark[_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%] {\n  color: #a7f3d0;\n}\n.dark[_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .summary-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .total-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .total-item[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%] {\n  background-color: #1f2937;\n}\n.dark[_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  color: #a7f3d0;\n}\n.dark[_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.dark[_nghost-%COMP%]   .vehicle-breakdown[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .vehicle-breakdown[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .vehicle-breakdown[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .vehicle-breakdown[_ngcontent-%COMP%] {\n  border-top-color: #374151;\n}\n.dark[_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.dark[_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%]   .vehicle-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%]   .vehicle-count[_ngcontent-%COMP%], \n[data-theme=dark][_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%]   .vehicle-count[_ngcontent-%COMP%], [data-theme=dark]   [_nghost-%COMP%]   .breakdown-header[_ngcontent-%COMP%]   .vehicle-count[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n/*# sourceMappingURL=query-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueryPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-query-preview", imports: [CommonModule, CardModule, ProgressBarModule], template: `<div class="query-preview-panel">
  <!-- Header -->
  <div class="panel-header">
    <div class="header-title">
      <i class="pi pi-file-edit"></i>
      <span>Current Query</span>
    </div>
    @if (confidence() > 0) {
      <div class="confidence-badge" [attr.data-level]="confidenceColor()">
        <span class="confidence-value">{{ confidence() }}%</span>
        <span class="confidence-label">{{ confidenceLabel() }}</span>
      </div>
    }
  </div>

  <!-- Query Content -->
  <div class="query-content">
    @if (isLoading()) {
      <div class="loading-state">
        <i class="pi pi-spin pi-spinner"></i>
        <span>Building query...</span>
      </div>
    } @else if (hasQuery()) {
      <p class="query-text">{{ query() }}</p>

      @if (hasChanges()) {
        <div class="changes-section">
          <span class="changes-label">Recent changes:</span>
          <ul class="changes-list">
            @for (change of changes(); track $index) {
              <li class="change-item">
                <i class="pi pi-check-circle"></i>
                {{ change }}
              </li>
            }
          </ul>
        </div>
      }
    } @else {
      <div class="empty-state">
        <div class="empty-state-icon">
          <i class="pi pi-file-edit"></i>
        </div>
        <h3 class="empty-state-title">Your Query Preview</h3>
        <p class="empty-state-description">
          As you chat, your analysis request will appear here.
        </p>
        <div class="empty-state-steps">
          <div class="step">
            <span class="step-number">1</span>
            <span class="step-text">Describe what you want to analyze</span>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <span class="step-text">Select data types to include</span>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <span class="step-text">Generate your report</span>
          </div>
        </div>
      </div>
    }
  </div>

  <!-- Data Collection Status -->
  @if (isCollecting() || hasCollectedData()) {
    <div class="data-status-section">
      <div class="section-header">
        <i class="pi pi-database"></i>
        <span>Data Status</span>
      </div>

      @if (isCollecting()) {
        <div class="collection-progress">
          <!-- Data types being collected -->
          @if (dataTypesLabel()) {
            <div class="data-types-label">
              <i class="pi pi-list"></i>
              <span>Collecting: {{ dataTypesLabel() }}</span>
            </div>
          }

          <!-- Overall progress bar -->
          <div class="progress-bar-container">
            <p-progressBar
              [value]="collectionProgress()"
              [showValue]="true"
              styleClass="collection-progress-bar"
            ></p-progressBar>
          </div>

          <!-- Status message -->
          @if (statusMessage()) {
            <div class="status-message">
              <i class="pi pi-spin pi-spinner"></i>
              <span>{{ statusMessage() }}</span>
            </div>
          }

          <!-- Summary stats -->
          @if (hasVehicleProgress()) {
            <div class="collection-stats">
              <div class="stat-item">
                <span class="stat-value"
                  >{{ completedVehiclesCount() }}/{{
                    vehicleProgress().length
                  }}</span
                >
                <span class="stat-label">Vehicles</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{
                  totalRecordsCollected() | number
                }}</span>
                <span class="stat-label">Records</span>
              </div>
            </div>
          }

          <!-- Vehicle progress list (collapsible) -->
          @if (hasVehicleProgress()) {
            <div class="vehicle-progress-list">
              @for (vehicle of vehicleProgress(); track vehicle.vehicleId) {
                <div
                  class="vehicle-progress-item"
                  [attr.data-status]="vehicle.status"
                >
                  <div class="vehicle-header">
                    @if (vehicle.status === 'pending') {
                      <i class="pi pi-clock status-icon pending"></i>
                    } @else if (vehicle.status === 'collecting') {
                      <i
                        class="pi pi-spin pi-spinner status-icon collecting"
                      ></i>
                    } @else if (vehicle.status === 'complete') {
                      <i class="pi pi-check-circle status-icon complete"></i>
                    } @else if (vehicle.status === 'error') {
                      <i class="pi pi-exclamation-circle status-icon error"></i>
                    }
                    <span class="vehicle-name">{{ vehicle.vehicleName }}</span>
                    <span class="vehicle-records"
                      >{{ vehicle.recordsCollected | number }} records</span
                    >
                  </div>
                  <!-- Data type badges -->
                  <div class="data-type-badges">
                    @for (dt of vehicle.dataTypesProgress; track dt.dataType) {
                      <span
                        class="data-type-badge"
                        [attr.data-status]="dt.status"
                      >
                        @if (dt.status === 'collecting') {
                          <i class="pi pi-spin pi-spinner"></i>
                        } @else if (dt.status === 'complete') {
                          <i class="pi pi-check"></i>
                        }
                        {{ dt.dataType }}
                        @if (dt.recordCount > 0) {
                          ({{ dt.recordCount }})
                        }
                      </span>
                    }
                  </div>
                </div>
              }
            </div>
          }
        </div>
      } @else if (hasCollectedData()) {
        <div class="collected-data">
          <!-- Summary totals -->
          <div class="collection-summary">
            <div class="summary-header">
              <i class="pi pi-check-circle"></i>
              <span>Collection Complete</span>
            </div>
            <div class="summary-totals">
              @if (collectedData()!.trips > 0) {
                <div class="total-item">
                  <span class="total-value">{{
                    collectedData()!.trips | number
                  }}</span>
                  <span class="total-label">Trips</span>
                </div>
              }
              @if (collectedData()!.events > 0) {
                <div class="total-item">
                  <span class="total-value">{{
                    collectedData()!.events | number
                  }}</span>
                  <span class="total-label">Events</span>
                </div>
              }
              @if (collectedData()!.telemetry > 0) {
                <div class="total-item">
                  <span class="total-value">{{
                    collectedData()!.telemetry | number
                  }}</span>
                  <span class="total-label">Telemetry</span>
                </div>
              }
              @if (collectedData()!.alerts > 0) {
                <div class="total-item">
                  <span class="total-value">{{
                    collectedData()!.alerts | number
                  }}</span>
                  <span class="total-label">Alerts</span>
                </div>
              }
            </div>
          </div>

          <!-- Per-vehicle breakdown (preserved from collection) -->
          @if (hasVehicleProgress()) {
            <div class="vehicle-breakdown">
              <div class="breakdown-header">
                <span>Per Vehicle Breakdown</span>
                <span class="vehicle-count"
                  >{{ vehicleProgress().length }} vehicles</span
                >
              </div>
              <div class="vehicle-progress-list completed">
                @for (vehicle of vehicleProgress(); track vehicle.vehicleId) {
                  <div
                    class="vehicle-progress-item"
                    [attr.data-status]="vehicle.status"
                  >
                    <div class="vehicle-header">
                      @if (vehicle.status === 'complete') {
                        <i class="pi pi-check-circle status-icon complete"></i>
                      } @else if (vehicle.status === 'error') {
                        <i
                          class="pi pi-exclamation-circle status-icon error"
                        ></i>
                      } @else {
                        <i class="pi pi-minus-circle status-icon skipped"></i>
                      }
                      <span class="vehicle-name">{{
                        vehicle.vehicleName
                      }}</span>
                      <span class="vehicle-records"
                        >{{ vehicle.recordsCollected | number }} records</span
                      >
                    </div>
                    <!-- Data type badges -->
                    <div class="data-type-badges">
                      @for (
                        dt of vehicle.dataTypesProgress;
                        track dt.dataType
                      ) {
                        <span
                          class="data-type-badge"
                          [attr.data-status]="dt.status"
                        >
                          @if (dt.status === 'complete') {
                            <i class="pi pi-check"></i>
                          }
                          {{ dt.dataType }}
                          @if (dt.recordCount > 0) {
                            ({{ dt.recordCount }})
                          }
                        </span>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/query-preview/query-preview.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n.query-preview-panel {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1rem;\n  background-color: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.header-title i {\n  font-size: 1rem;\n  color: #6b7280;\n}\n.confidence-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n}\n.confidence-badge[data-level=high] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.confidence-badge[data-level=medium] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.confidence-badge[data-level=low] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.confidence-badge .confidence-value {\n  font-weight: 700;\n  font-size: 0.875rem;\n}\n.confidence-badge .confidence-label {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.query-content {\n  flex: 1;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.loading-state i {\n  font-size: 1.25rem;\n  color: #3b82f6;\n}\n.query-text {\n  font-size: 0.9375rem;\n  line-height: 1.6;\n  color: #1f2937;\n  margin: 0;\n  padding: 0.75rem;\n  background-color: #f3f4f6;\n  border-radius: 0.375rem;\n  border-left: 3px solid #3b82f6;\n}\n.changes-section {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.changes-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.changes-list {\n  margin: 0.5rem 0 0 0;\n  padding: 0;\n  list-style: none;\n}\n.change-item {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  color: #059669;\n  margin-bottom: 0.25rem;\n}\n.change-item i {\n  font-size: 0.75rem;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  text-align: center;\n  height: 100%;\n}\n.empty-state-icon {\n  width: 3.5rem;\n  height: 3.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  border-radius: 50%;\n  margin-bottom: 1rem;\n}\n.empty-state-icon i {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.empty-state-title {\n  margin: 0 0 0.5rem 0;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state-description {\n  margin: 0 0 1.25rem 0;\n  font-size: 0.8125rem;\n  color: #6b7280;\n  max-width: 200px;\n}\n.empty-state-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  width: 100%;\n  max-width: 220px;\n}\n.step {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.5rem 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  text-align: left;\n}\n.step .step-number {\n  width: 1.25rem;\n  height: 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e5e7eb;\n  border-radius: 50%;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.step .step-text {\n  font-size: 0.6875rem;\n  color: #6b7280;\n  line-height: 1.3;\n}\n.data-status-section {\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.section-header i {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.collection-progress {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.collection-progress .progress-label {\n  display: block;\n  margin-top: 0.375rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.data-types-label {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #374151;\n}\n.data-types-label i {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.progress-bar-container ::ng-deep .collection-progress-bar {\n  height: 0.5rem;\n  border-radius: 0.25rem;\n}\n.status-message {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.status-message i {\n  font-size: 0.75rem;\n}\n.collection-stats {\n  display: flex;\n  gap: 1rem;\n  padding: 0.5rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.stat-item .stat-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.stat-item .stat-label {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  color: #6b7280;\n}\n.vehicle-progress-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 0.5rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.vehicle-progress-item {\n  padding: 0.5rem;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n}\n.vehicle-progress-item[data-status=collecting] {\n  border-left: 3px solid #3b82f6;\n  background-color: #eff6ff;\n}\n.vehicle-progress-item[data-status=complete] {\n  border-left: 3px solid #10b981;\n  background-color: #f0fdf4;\n}\n.vehicle-progress-item[data-status=error] {\n  border-left: 3px solid #ef4444;\n  background-color: #fef2f2;\n}\n.vehicle-header {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  margin-bottom: 0.375rem;\n}\n.vehicle-header .status-icon {\n  font-size: 0.75rem;\n}\n.vehicle-header .status-icon.pending {\n  color: #9ca3af;\n}\n.vehicle-header .status-icon.collecting {\n  color: #3b82f6;\n}\n.vehicle-header .status-icon.complete {\n  color: #10b981;\n}\n.vehicle-header .status-icon.error {\n  color: #ef4444;\n}\n.vehicle-header .vehicle-name {\n  flex: 1;\n  font-weight: 500;\n  color: #374151;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.vehicle-header .vehicle-records {\n  font-size: 0.6875rem;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.data-type-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.data-type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 500;\n  border-radius: 0.25rem;\n  text-transform: capitalize;\n}\n.data-type-badge i {\n  font-size: 0.625rem;\n}\n.data-type-badge[data-status=pending] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.data-type-badge[data-status=collecting] {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.data-type-badge[data-status=complete] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.data-type-badge[data-status=skipped] {\n  background-color: #f3f4f6;\n  color: #9ca3af;\n}\n.collected-data {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.collection-summary {\n  padding: 0.75rem;\n  background-color: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 0.5rem;\n}\n.summary-header {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #166534;\n  margin-bottom: 0.5rem;\n}\n.summary-header i {\n  font-size: 0.875rem;\n  color: #22c55e;\n}\n.summary-totals {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.total-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  min-width: 60px;\n}\n.total-item .total-value {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #166534;\n}\n.total-item .total-label {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  color: #6b7280;\n}\n.vehicle-breakdown {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 0.75rem;\n}\n.breakdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n}\n.breakdown-header .vehicle-count {\n  font-weight: 400;\n  color: #6b7280;\n}\n.vehicle-progress-list.completed {\n  max-height: 250px;\n}\n.data-item {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n}\n.data-item.success {\n  color: #059669;\n}\n.data-item.success i {\n  color: #10b981;\n}\n.data-item.skipped {\n  color: #6b7280;\n}\n.data-item.skipped i {\n  color: #9ca3af;\n}\n:host-context(.dark) .query-preview-panel,\n:host-context([data-theme=dark]) .query-preview-panel {\n  background-color: #1f2937;\n  border-color: #374151;\n}\n:host-context(.dark) .panel-header,\n:host-context([data-theme=dark]) .panel-header {\n  background-color: #111827;\n  border-bottom-color: #374151;\n}\n:host-context(.dark) .header-title,\n:host-context([data-theme=dark]) .header-title {\n  color: #e5e7eb;\n}\n:host-context(.dark) .header-title i,\n:host-context([data-theme=dark]) .header-title i {\n  color: #9ca3af;\n}\n:host-context(.dark) .query-text,\n:host-context([data-theme=dark]) .query-text {\n  background-color: #374151;\n  color: #f3f4f6;\n  border-left-color: #3b82f6;\n}\n:host-context(.dark) .changes-section,\n:host-context([data-theme=dark]) .changes-section {\n  border-top-color: #374151;\n}\n:host-context(.dark) .empty-state-icon,\n:host-context([data-theme=dark]) .empty-state-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f 0%,\n      #1e40af 100%);\n}\n:host-context(.dark) .empty-state-icon i,\n:host-context([data-theme=dark]) .empty-state-icon i {\n  color: #60a5fa;\n}\n:host-context(.dark) .empty-state-title,\n:host-context([data-theme=dark]) .empty-state-title {\n  color: #e5e7eb;\n}\n:host-context(.dark) .empty-state-description,\n:host-context([data-theme=dark]) .empty-state-description {\n  color: #9ca3af;\n}\n:host-context(.dark) .step,\n:host-context([data-theme=dark]) .step {\n  background-color: #374151;\n}\n:host-context(.dark) .step .step-number,\n:host-context([data-theme=dark]) .step .step-number {\n  background-color: #4b5563;\n  color: #9ca3af;\n}\n:host-context(.dark) .step .step-text,\n:host-context([data-theme=dark]) .step .step-text {\n  color: #9ca3af;\n}\n:host-context(.dark) .data-status-section,\n:host-context([data-theme=dark]) .data-status-section {\n  background-color: #111827;\n  border-top-color: #374151;\n}\n:host-context(.dark) .section-header,\n:host-context([data-theme=dark]) .section-header {\n  color: #e5e7eb;\n}\n:host-context(.dark) .section-header i,\n:host-context([data-theme=dark]) .section-header i {\n  color: #9ca3af;\n}\n:host-context(.dark) .data-types-label,\n:host-context([data-theme=dark]) .data-types-label {\n  color: #e5e7eb;\n}\n:host-context(.dark) .data-types-label i,\n:host-context([data-theme=dark]) .data-types-label i {\n  color: #9ca3af;\n}\n:host-context(.dark) .status-message,\n:host-context([data-theme=dark]) .status-message {\n  color: #60a5fa;\n}\n:host-context(.dark) .collection-stats,\n:host-context([data-theme=dark]) .collection-stats {\n  border-top-color: #374151;\n}\n:host-context(.dark) .collection-stats .stat-value,\n:host-context([data-theme=dark]) .collection-stats .stat-value {\n  color: #f3f4f6;\n}\n:host-context(.dark) .vehicle-progress-list,\n:host-context([data-theme=dark]) .vehicle-progress-list {\n  border-top-color: #374151;\n}\n:host-context(.dark) .vehicle-progress-item,\n:host-context([data-theme=dark]) .vehicle-progress-item {\n  background-color: #374151;\n  border-color: #4b5563;\n}\n:host-context(.dark) .vehicle-progress-item[data-status=collecting],\n:host-context([data-theme=dark]) .vehicle-progress-item[data-status=collecting] {\n  background-color: #1e3a5f;\n}\n:host-context(.dark) .vehicle-progress-item[data-status=complete],\n:host-context([data-theme=dark]) .vehicle-progress-item[data-status=complete] {\n  background-color: #064e3b;\n}\n:host-context(.dark) .vehicle-progress-item[data-status=error],\n:host-context([data-theme=dark]) .vehicle-progress-item[data-status=error] {\n  background-color: #7f1d1d;\n}\n:host-context(.dark) .vehicle-header .vehicle-name,\n:host-context([data-theme=dark]) .vehicle-header .vehicle-name {\n  color: #e5e7eb;\n}\n:host-context(.dark) .vehicle-header .vehicle-records,\n:host-context([data-theme=dark]) .vehicle-header .vehicle-records {\n  color: #9ca3af;\n}\n:host-context(.dark) .data-type-badge[data-status=pending],\n:host-context([data-theme=dark]) .data-type-badge[data-status=pending] {\n  background-color: #374151;\n  color: #9ca3af;\n}\n:host-context(.dark) .data-type-badge[data-status=collecting],\n:host-context([data-theme=dark]) .data-type-badge[data-status=collecting] {\n  background-color: #1e40af;\n  color: #93c5fd;\n}\n:host-context(.dark) .data-type-badge[data-status=complete],\n:host-context([data-theme=dark]) .data-type-badge[data-status=complete] {\n  background-color: #065f46;\n  color: #a7f3d0;\n}\n:host-context(.dark) .collection-summary,\n:host-context([data-theme=dark]) .collection-summary {\n  background-color: #064e3b;\n  border-color: #065f46;\n}\n:host-context(.dark) .summary-header,\n:host-context([data-theme=dark]) .summary-header {\n  color: #a7f3d0;\n}\n:host-context(.dark) .summary-header i,\n:host-context([data-theme=dark]) .summary-header i {\n  color: #34d399;\n}\n:host-context(.dark) .total-item,\n:host-context([data-theme=dark]) .total-item {\n  background-color: #1f2937;\n}\n:host-context(.dark) .total-item .total-value,\n:host-context([data-theme=dark]) .total-item .total-value {\n  color: #a7f3d0;\n}\n:host-context(.dark) .total-item .total-label,\n:host-context([data-theme=dark]) .total-item .total-label {\n  color: #9ca3af;\n}\n:host-context(.dark) .vehicle-breakdown,\n:host-context([data-theme=dark]) .vehicle-breakdown {\n  border-top-color: #374151;\n}\n:host-context(.dark) .breakdown-header,\n:host-context([data-theme=dark]) .breakdown-header {\n  color: #e5e7eb;\n}\n:host-context(.dark) .breakdown-header .vehicle-count,\n:host-context([data-theme=dark]) .breakdown-header .vehicle-count {\n  color: #9ca3af;\n}\n/*# sourceMappingURL=query-preview.component.css.map */\n"] }]
  }], null, { query: [{ type: Input, args: [{ isSignal: true, alias: "query", required: false }] }], confidence: [{ type: Input, args: [{ isSignal: true, alias: "confidence", required: false }] }], changes: [{ type: Input, args: [{ isSignal: true, alias: "changes", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], isCollecting: [{ type: Input, args: [{ isSignal: true, alias: "isCollecting", required: false }] }], collectionProgress: [{ type: Input, args: [{ isSignal: true, alias: "collectionProgress", required: false }] }], collectedData: [{ type: Input, args: [{ isSignal: true, alias: "collectedData", required: false }] }], dataTypes: [{ type: Input, args: [{ isSignal: true, alias: "dataTypes", required: false }] }], statusMessage: [{ type: Input, args: [{ isSignal: true, alias: "statusMessage", required: false }] }], currentVehicle: [{ type: Input, args: [{ isSignal: true, alias: "currentVehicle", required: false }] }], vehicleProgress: [{ type: Input, args: [{ isSignal: true, alias: "vehicleProgress", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QueryPreviewComponent, { className: "QueryPreviewComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/query-preview/query-preview.component.ts", lineNumber: 18 });
})();

// src/app/features/development/components/analytical-report/chat/services/chat-session.service.ts
var ChatSessionService = class _ChatSessionService {
  http = inject(HttpClient);
  authTokenManagerService = inject(AuthTokenManagerService);
  apiUrlService = inject(ApiUrlService);
  // ============================================================================
  // State Signals
  // ============================================================================
  _session = signal(null, ...ngDevMode ? [{ debugName: "_session" }] : []);
  _messages = signal([], ...ngDevMode ? [{ debugName: "_messages" }] : []);
  _isConnecting = signal(false, ...ngDevMode ? [{ debugName: "_isConnecting" }] : []);
  _isTyping = signal(false, ...ngDevMode ? [{ debugName: "_isTyping" }] : []);
  _error = signal(null, ...ngDevMode ? [{ debugName: "_error" }] : []);
  _currentQuery = signal("", ...ngDevMode ? [{ debugName: "_currentQuery" }] : []);
  _queryConfidence = signal(0, ...ngDevMode ? [{ debugName: "_queryConfidence" }] : []);
  _dataCollectionStatus = signal({
    isCollecting: false,
    progress: 0,
    dataTypes: [],
    collectedData: null
  }, ...ngDevMode ? [{ debugName: "_dataCollectionStatus" }] : []);
  // Promise to track ongoing API session creation (prevents race conditions)
  _apiSessionCreationPromise = null;
  // ============================================================================
  // Form State Signals (for guided conversation)
  // ============================================================================
  _formDateRange = signal(null, ...ngDevMode ? [{ debugName: "_formDateRange" }] : []);
  _formSelectedVehicles = signal([], ...ngDevMode ? [{ debugName: "_formSelectedVehicles" }] : []);
  _formSelectedDataTypes = signal([], ...ngDevMode ? [{ debugName: "_formSelectedDataTypes" }] : []);
  _conversationPhase = signal("greeting", ...ngDevMode ? [{ debugName: "_conversationPhase" }] : []);
  _availableVehicles = signal([], ...ngDevMode ? [{ debugName: "_availableVehicles" }] : []);
  // ============================================================================
  // Public Readonly Signals
  // ============================================================================
  session = this._session.asReadonly();
  messages = this._messages.asReadonly();
  isConnecting = this._isConnecting.asReadonly();
  isTyping = this._isTyping.asReadonly();
  error = this._error.asReadonly();
  currentQuery = this._currentQuery.asReadonly();
  queryConfidence = this._queryConfidence.asReadonly();
  dataCollectionStatus = this._dataCollectionStatus.asReadonly();
  // Form state (public readable)
  formDateRange = this._formDateRange.asReadonly();
  formSelectedVehicles = this._formSelectedVehicles.asReadonly();
  formSelectedDataTypes = this._formSelectedDataTypes.asReadonly();
  conversationPhase = this._conversationPhase.asReadonly();
  // ============================================================================
  // Computed Signals
  // ============================================================================
  isSessionActive = computed(() => this._session()?.status === "active", ...ngDevMode ? [{ debugName: "isSessionActive" }] : []);
  hasMessages = computed(() => this._messages().length > 0, ...ngDevMode ? [{ debugName: "hasMessages" }] : []);
  canGenerate = computed(() => this._currentQuery().length > 0 && this._queryConfidence() >= 50, ...ngDevMode ? [{ debugName: "canGenerate" }] : []);
  // Form state computed
  hasDateRange = computed(() => this._formDateRange() !== null, ...ngDevMode ? [{ debugName: "hasDateRange" }] : []);
  hasVehicles = computed(() => this._formSelectedVehicles().length > 0, ...ngDevMode ? [{ debugName: "hasVehicles" }] : []);
  hasDataTypes = computed(() => this._formSelectedDataTypes().length > 0, ...ngDevMode ? [{ debugName: "hasDataTypes" }] : []);
  isFormComplete = computed(() => this.hasDateRange() && this.hasVehicles() && this.hasDataTypes(), ...ngDevMode ? [{ debugName: "isFormComplete" }] : []);
  // ============================================================================
  // API Configuration
  // ============================================================================
  chatApiBaseUrl = signal("https://cypherview-reporting-develop-function.azurewebsites.net/api", ...ngDevMode ? [{ debugName: "chatApiBaseUrl" }] : []);
  // Toggle for mock mode during development
  useMockResponses = signal(false, ...ngDevMode ? [{ debugName: "useMockResponses" }] : []);
  // ============================================================================
  // Session Management
  // ============================================================================
  async startSession(context) {
    this._isConnecting.set(true);
    this._error.set(null);
    try {
      if (this.useMockResponses()) {
        await this.mockStartSession(context);
      } else {
        await this.apiStartSession(context);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to start session";
      this._error.set(errorMessage);
      throw err;
    } finally {
      this._isConnecting.set(false);
    }
  }
  async sendMessage(content) {
    const session = this._session();
    if (!session) {
      throw new Error("No active session");
    }
    const userMessage = this.createUserMessage(session.id, content);
    this._messages.update((msgs) => [...msgs, userMessage]);
    this._isTyping.set(true);
    this._error.set(null);
    try {
      if (this.useMockResponses()) {
        await this.mockSendMessage(session.id, content);
      } else {
        await this.apiSendMessage(session.id, content);
      }
      this._messages.update((msgs) => msgs.map((m) => m.id === userMessage.id ? __spreadProps(__spreadValues({}, m), { status: "delivered" }) : m));
    } catch (err) {
      this._messages.update((msgs) => msgs.map((m) => m.id === userMessage.id ? __spreadProps(__spreadValues({}, m), { status: "error" }) : m));
      const errorMessage = err instanceof Error ? err.message : "Failed to send message";
      this._error.set(errorMessage);
      throw err;
    } finally {
      this._isTyping.set(false);
    }
  }
  async submitDataContext(summarizedData) {
    if (this._apiSessionCreationPromise) {
      try {
        await this._apiSessionCreationPromise;
      } catch {
      }
    }
    const session = this._session();
    if (!session) {
      throw new Error("No active session");
    }
    if (session.id.startsWith("guided-")) {
      console.warn("API session not yet created, attempting to create now...");
      await this.startApiSessionFromGuidedFlow();
      const updatedSession = this._session();
      if (!updatedSession || updatedSession.id.startsWith("guided-")) {
        throw new Error("Failed to create API session for context submission");
      }
    }
    this._isTyping.set(true);
    this._error.set(null);
    try {
      const currentSession = this._session();
      if (!currentSession) {
        throw new Error("Session lost during context submission");
      }
      if (this.useMockResponses()) {
        await this.mockSubmitContext(currentSession.id, summarizedData);
      } else {
        await this.apiSubmitContext(currentSession.id, summarizedData);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to submit data context";
      this._error.set(errorMessage);
      throw err;
    } finally {
      this._isTyping.set(false);
    }
  }
  async endSession() {
    const session = this._session();
    if (!session)
      return;
    try {
      if (!this.useMockResponses()) {
        await this.apiEndSession(session.id);
      }
    } finally {
      this._session.update((s) => s ? __spreadProps(__spreadValues({}, s), { status: "completed" }) : null);
    }
  }
  reset() {
    this._session.set(null);
    this._messages.set([]);
    this._isConnecting.set(false);
    this._isTyping.set(false);
    this._error.set(null);
    this._currentQuery.set("");
    this._queryConfidence.set(0);
    this._dataCollectionStatus.set({
      isCollecting: false,
      progress: 0,
      dataTypes: [],
      collectedData: null
    });
    this._formDateRange.set(null);
    this._formSelectedVehicles.set([]);
    this._formSelectedDataTypes.set([]);
    this._conversationPhase.set("greeting");
    this._apiSessionCreationPromise = null;
  }
  // ============================================================================
  // Form State Management (for guided conversation)
  // ============================================================================
  /**
   * Set available vehicles for the guided session.
   * Also updates any existing vehicle selector messages to include the vehicles.
   */
  setAvailableVehicles(vehicles) {
    this._availableVehicles.set(vehicles);
    this._messages.update((msgs) => msgs.map((m) => {
      if (m.metadata?.interactiveType === "vehicle_selector") {
        return __spreadProps(__spreadValues({}, m), {
          metadata: __spreadProps(__spreadValues({}, m.metadata), {
            availableVehicles: vehicles.map((v) => ({
              id: v.id,
              name: v.name
            }))
          })
        });
      }
      return m;
    }));
  }
  /**
   * Set date range from inline date picker
   */
  setDateRange(start, end) {
    this._formDateRange.set({ start, end });
    const formatDate = (d) => d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    const dateText = start.toDateString() === end.toDateString() ? formatDate(start) : `${formatDate(start)} to ${formatDate(end)}`;
    this.addSystemMessage(`Date range selected: **${dateText}**`);
    this._conversationPhase.set("vehicle_selection");
    this.promptForVehicleSelection();
  }
  /**
   * Set selected vehicles from inline selector
   */
  setSelectedVehicles(vehicles) {
    this._formSelectedVehicles.set(vehicles);
    const vehicleText = vehicles.length === 1 ? vehicles[0].name : vehicles.length <= 3 ? vehicles.map((v) => v.name).join(", ") : `${vehicles.length} vehicles`;
    this.addSystemMessage(`Vehicles selected: **${vehicleText}**`);
    this._conversationPhase.set("data_type_selection");
    this.promptForDataTypeSelection();
  }
  /**
   * Set selected data types from inline selector
   */
  setSelectedDataTypes(dataTypes) {
    const existingTypes = this._formSelectedDataTypes();
    const mergedTypes = [
      .../* @__PURE__ */ new Set([...existingTypes, ...dataTypes])
    ];
    this._formSelectedDataTypes.set(mergedTypes);
    this.updateDataTypeSelectorMessage(mergedTypes);
    const typesText = dataTypes.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ");
    this.addSystemMessage(`Data types selected: **${typesText}**`);
    this._conversationPhase.set("query_building");
    this.promptForQueryBuilding();
  }
  /**
   * Update the data type selector message metadata to persist selections
   */
  updateDataTypeSelectorMessage(selectedTypes) {
    this._messages.update((msgs) => msgs.map((m) => {
      if (m.metadata?.interactiveType === "data_type_selector") {
        return __spreadProps(__spreadValues({}, m), {
          metadata: __spreadProps(__spreadValues({}, m.metadata), {
            selectedDataTypes: selectedTypes
          })
        });
      }
      return m;
    }));
  }
  /**
   * Start a guided session (without pre-existing context)
   */
  async startGuidedSession(clientId, clientName) {
    this._isConnecting.set(true);
    this._error.set(null);
    try {
      await this.delay(300);
      const sessionId = `guided-${this.generateId()}`;
      const now = /* @__PURE__ */ new Date();
      const session = {
        id: sessionId,
        createdAt: now,
        lastActivity: now,
        expiresAt: new Date(now.getTime() + 30 * 60 * 1e3),
        status: "active",
        context: {
          clientId,
          clientName,
          dateRange: { startDate: "", endDate: "" },
          vehicleIds: [],
          vehicleNames: []
        },
        currentQuery: "",
        messageCount: 0
      };
      this._session.set(session);
      this._conversationPhase.set("date_selection");
      const welcomeMessage = this.createAssistantMessage(sessionId, `Hello! I'll help you build an analytical report for **${clientName}**.

Let's start by selecting the date range for your analysis.`, {
        interactiveType: "date_picker"
      });
      this._messages.set([welcomeMessage]);
    } finally {
      this._isConnecting.set(false);
    }
  }
  /**
   * Add a system message to the chat
   */
  addSystemMessage(content) {
    const session = this._session();
    if (!session)
      return;
    const message = {
      id: this.generateId(),
      sessionId: session.id,
      sender: "system",
      content,
      timestamp: /* @__PURE__ */ new Date(),
      status: "delivered"
    };
    this._messages.update((msgs) => [...msgs, message]);
  }
  /**
   * Prompt user for vehicle selection
   */
  promptForVehicleSelection() {
    const session = this._session();
    if (!session)
      return;
    const availableVehicles = this._availableVehicles();
    const message = this.createAssistantMessage(session.id, `Now, which vehicles would you like to include in this report?

Select one or more vehicles from the list below.`, {
      interactiveType: "vehicle_selector",
      availableVehicles: availableVehicles.map((v) => ({
        id: v.id,
        name: v.name
      }))
    });
    this._messages.update((msgs) => [...msgs, message]);
  }
  /**
   * Prompt user for data type selection
   */
  promptForDataTypeSelection() {
    const session = this._session();
    if (!session)
      return;
    const message = this.createAssistantMessage(session.id, `What data would you like to analyze?

Select the types of data you're interested in.`, {
      interactiveType: "data_type_selector"
    });
    this._messages.update((msgs) => [...msgs, message]);
  }
  /**
   * Prompt user for query building
   */
  promptForQueryBuilding() {
    const session = this._session();
    if (!session)
      return;
    const dateRange = this._formDateRange();
    const vehicles = this._formSelectedVehicles();
    const dataTypes = this._formSelectedDataTypes();
    const formatDate = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const dateText = dateRange ? dateRange.start.toDateString() === dateRange.end.toDateString() ? formatDate(dateRange.start) : `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}` : "";
    const vehicleText = vehicles.length === 1 ? vehicles[0].name : `${vehicles.length} vehicles`;
    const typesText = dataTypes.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ");
    const initialQuery = `Analyze ${typesText.toLowerCase()} data for ${vehicleText} from ${dateText}`;
    this._currentQuery.set(initialQuery);
    this._queryConfidence.set(50);
    const message = this.createAssistantMessage(session.id, `I'm ready to collect **${typesText}** for **${vehicleText}** during **${dateText}**.

What specific insights are you looking for? For example:
\u2022 Driver safety analysis
\u2022 Fuel efficiency trends
\u2022 Vehicle utilization
\u2022 Route optimization`, {
      suggestedActions: [
        {
          id: "1",
          label: "Driver safety",
          action: "select",
          value: "safety"
        },
        {
          id: "2",
          label: "Fuel efficiency",
          action: "select",
          value: "fuel"
        },
        {
          id: "3",
          label: "General overview",
          action: "select",
          value: "overview"
        }
      ],
      queryUpdate: {
        query: initialQuery,
        confidence: 50,
        changes: ["Set date range", "Selected vehicles", "Chose data types"]
      }
    });
    this._messages.update((msgs) => [...msgs, message]);
  }
  // ============================================================================
  // Data Collection Status
  // ============================================================================
  /**
   * Start the real API session using the data collected in the guided flow.
   * This should be called when data collection begins.
   * Returns a promise that resolves when the session is created.
   */
  async startApiSessionFromGuidedFlow() {
    const session = this._session();
    const dateRange = this._formDateRange();
    const vehicles = this._formSelectedVehicles();
    if (!session || !dateRange || vehicles.length === 0) {
      console.warn("Cannot start API session: missing required data");
      return;
    }
    if (session.id && !session.id.startsWith("guided-")) {
      return;
    }
    if (this._apiSessionCreationPromise) {
      return this._apiSessionCreationPromise;
    }
    const context = {
      clientId: session.context.clientId,
      clientName: session.context.clientName,
      dateRange: {
        startDate: dateRange.start.toISOString(),
        endDate: dateRange.end.toISOString()
      },
      vehicleIds: vehicles.map((v) => v.id),
      vehicleNames: vehicles.map((v) => v.name)
    };
    this._isConnecting.set(true);
    this._apiSessionCreationPromise = (async () => {
      try {
        if (this.useMockResponses()) {
          this._session.update((s) => s ? __spreadProps(__spreadValues({}, s), { context }) : null);
        } else {
          await this.apiStartSession(context, true);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to start API session";
        this._error.set(errorMessage);
        console.error("API session start failed:", err);
        throw err;
      } finally {
        this._isConnecting.set(false);
        this._apiSessionCreationPromise = null;
      }
    })();
    return this._apiSessionCreationPromise;
  }
  setDataCollectionStarted(dataTypes, vehicles) {
    const vehicleProgress = vehicles.map((v) => ({
      vehicleId: v.id,
      vehicleName: v.name,
      status: "pending",
      dataTypesProgress: dataTypes.map((dt) => ({
        dataType: dt,
        status: "pending",
        recordCount: 0
      })),
      recordsCollected: 0
    }));
    this._dataCollectionStatus.set({
      isCollecting: true,
      progress: 0,
      dataTypes,
      collectedData: null,
      currentPhase: "initializing",
      currentVehicle: void 0,
      vehicleProgress,
      statusMessage: `Preparing to collect ${dataTypes.join(", ")} for ${vehicles.length} vehicles...`
    });
    void this.startApiSessionFromGuidedFlow();
  }
  updateDataCollectionProgress(progress) {
    this._dataCollectionStatus.update((status) => __spreadProps(__spreadValues({}, status), {
      progress
    }));
  }
  // Update status message
  updateCollectionStatusMessage(message) {
    this._dataCollectionStatus.update((status) => __spreadProps(__spreadValues({}, status), {
      statusMessage: message
    }));
  }
  // Start collecting for a specific vehicle
  startVehicleCollection(vehicleId, vehicleName) {
    this._dataCollectionStatus.update((status) => {
      const vehicleProgress = status.vehicleProgress?.map((v) => v.vehicleId === vehicleId ? __spreadProps(__spreadValues({}, v), { status: "collecting" }) : v);
      return __spreadProps(__spreadValues({}, status), {
        currentPhase: "collecting",
        currentVehicle: vehicleName,
        vehicleProgress,
        statusMessage: `Collecting data for ${vehicleName}...`
      });
    });
  }
  // Update progress for a specific data type on a vehicle
  updateVehicleDataTypeProgress(vehicleId, dataType, recordCount, status = "collecting") {
    this._dataCollectionStatus.update((currentStatus) => {
      const vehicleProgress = currentStatus.vehicleProgress?.map((v) => {
        if (v.vehicleId !== vehicleId)
          return v;
        const dataTypesProgress = v.dataTypesProgress.map((dtp) => dtp.dataType === dataType ? __spreadProps(__spreadValues({}, dtp), { status, recordCount }) : dtp);
        const totalRecords = dataTypesProgress.reduce((sum, dtp) => sum + dtp.recordCount, 0);
        return __spreadProps(__spreadValues({}, v), {
          dataTypesProgress,
          recordsCollected: totalRecords
        });
      });
      const totalItems = (vehicleProgress?.length ?? 0) * currentStatus.dataTypes.length;
      const completedItems = vehicleProgress?.reduce((sum, v) => {
        return sum + v.dataTypesProgress.filter((dtp) => dtp.status === "complete" || dtp.status === "skipped").length;
      }, 0) ?? 0;
      const progress = totalItems > 0 ? Math.round(completedItems / totalItems * 100) : 0;
      const dataTypeLabel = dataType.charAt(0).toUpperCase() + dataType.slice(1);
      const vehicleName = vehicleProgress?.find((v) => v.vehicleId === vehicleId)?.vehicleName ?? "";
      const statusMessage = status === "complete" ? `${vehicleName}: ${dataTypeLabel} complete (${recordCount} records)` : `${vehicleName}: Collecting ${dataTypeLabel.toLowerCase()}...`;
      return __spreadProps(__spreadValues({}, currentStatus), {
        progress,
        vehicleProgress,
        statusMessage
      });
    });
  }
  // Mark a vehicle as complete
  completeVehicleCollection(vehicleId) {
    this._dataCollectionStatus.update((status) => {
      const vehicleProgress = status.vehicleProgress?.map((v) => v.vehicleId === vehicleId ? __spreadProps(__spreadValues({}, v), { status: "complete" }) : v);
      const completedCount = vehicleProgress?.filter((v) => v.status === "complete").length ?? 0;
      const totalCount = vehicleProgress?.length ?? 0;
      return __spreadProps(__spreadValues({}, status), {
        vehicleProgress,
        statusMessage: `Completed ${completedCount} of ${totalCount} vehicles`
      });
    });
  }
  // Mark a vehicle as having an error
  setVehicleCollectionError(vehicleId, error) {
    this._dataCollectionStatus.update((status) => {
      const vehicleProgress = status.vehicleProgress?.map((v) => v.vehicleId === vehicleId ? __spreadProps(__spreadValues({}, v), { status: "error", error }) : v);
      return __spreadProps(__spreadValues({}, status), {
        vehicleProgress
      });
    });
  }
  setDataCollectionComplete(summary) {
    this._dataCollectionStatus.update((status) => __spreadProps(__spreadValues({}, status), {
      isCollecting: false,
      progress: 100,
      collectedData: summary,
      currentPhase: "complete",
      currentVehicle: void 0,
      statusMessage: "Data collection complete"
    }));
  }
  // ============================================================================
  // Mock Implementations (for development)
  // ============================================================================
  async mockStartSession(context) {
    await this.delay(500);
    const sessionId = this.generateId();
    const now = /* @__PURE__ */ new Date();
    const session = {
      id: sessionId,
      createdAt: now,
      lastActivity: now,
      expiresAt: new Date(now.getTime() + 30 * 60 * 1e3),
      // 30 min
      status: "active",
      context,
      currentQuery: "",
      messageCount: 0
    };
    this._session.set(session);
    const vehicleList = context.vehicleNames.slice(0, 3).join(", ");
    const vehicleCount = context.vehicleNames.length;
    const vehicleText = vehicleCount > 3 ? `${vehicleList} and ${vehicleCount - 3} more` : vehicleList;
    const startDate = new Date(context.dateRange.startDate);
    const endDate = new Date(context.dateRange.endDate);
    const dateText = `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`;
    const initialMessage = this.createAssistantMessage(sessionId, `I see you've selected **${vehicleText}** for **${dateText}**.

What data would you like to analyze? You can select multiple types.`, {
      suggestedActions: [
        { id: "1", label: "Trips", action: "select", value: "trips" },
        { id: "2", label: "Events", action: "select", value: "events" },
        { id: "3", label: "Telemetry", action: "select", value: "telemetry" },
        { id: "4", label: "Alerts", action: "select", value: "alerts" }
      ]
    });
    this._messages.set([initialMessage]);
  }
  async mockSendMessage(sessionId, content) {
    await this.delay(800 + Math.random() * 400);
    const lowerContent = content.toLowerCase();
    const collectionStatus = this._dataCollectionStatus();
    const isCollecting = collectionStatus.isCollecting;
    const collectingTypes = collectionStatus.dataTypes;
    if (isCollecting) {
      const collectingText = collectingTypes.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ");
      const response2 = this.createAssistantMessage(sessionId, `I'm currently collecting **${collectingText}** data (${collectionStatus.progress}% complete).

Feel free to ask questions about what you're looking for in the analysis, and I'll have more insights once the data collection is complete.`, {
        queryUpdate: {
          query: this._currentQuery(),
          confidence: this._queryConfidence(),
          changes: []
        }
      });
      this._messages.update((msgs) => [...msgs, response2]);
      return;
    }
    const selectedTypes = [];
    if (lowerContent.includes("trip"))
      selectedTypes.push("trips");
    if (lowerContent.includes("event"))
      selectedTypes.push("events");
    if (lowerContent.includes("telemetry"))
      selectedTypes.push("telemetry");
    if (lowerContent.includes("alert"))
      selectedTypes.push("alerts");
    if (selectedTypes.length > 0 && !collectionStatus.collectedData) {
      const typeNames = selectedTypes.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" and ");
      const response2 = this.createAssistantMessage(sessionId, `I'll collect **${typeNames}** data for your selected vehicles. This may take a moment depending on the data volume.

You can continue chatting while I gather the data.`, {
        triggerDataCollection: { dataTypes: selectedTypes },
        queryUpdate: {
          query: `Analyze ${typeNames.toLowerCase()} data`,
          confidence: 25,
          changes: selectedTypes.map((t) => `Added ${t} analysis`)
        }
      });
      this._messages.update((msgs) => [...msgs, response2]);
      this._currentQuery.set(response2.metadata?.queryUpdate?.query ?? "");
      this._queryConfidence.set(response2.metadata?.queryUpdate?.confidence ?? 0);
      return;
    }
    let responseContent = "";
    let suggestedActions = [];
    let queryUpdate;
    if (lowerContent.includes("safety") || lowerContent.includes("driver")) {
      responseContent = `I'll focus on **driver safety analysis**. Based on your data, I can analyze:

\u2022 Harsh braking events
\u2022 Speeding incidents
\u2022 Rapid acceleration

Would you like me to compare drivers against each other, or show trends over time?`;
      suggestedActions = [
        {
          id: "1",
          label: "Compare drivers",
          action: "select",
          value: "compare_drivers"
        },
        {
          id: "2",
          label: "Show trends",
          action: "select",
          value: "show_trends"
        },
        {
          id: "3",
          label: "Both",
          action: "select",
          value: "compare_and_trends"
        }
      ];
      queryUpdate = {
        query: `${this._currentQuery()} with focus on driver safety`,
        confidence: Math.min(this._queryConfidence() + 25, 100),
        changes: ["Added driver safety focus"]
      };
    } else if (lowerContent.includes("compare") || lowerContent.includes("both") || lowerContent.includes("trend")) {
      const includesCompare = lowerContent.includes("compare") || lowerContent.includes("both");
      const includesTrends = lowerContent.includes("trend") || lowerContent.includes("both");
      const features = [];
      if (includesCompare)
        features.push("driver comparison");
      if (includesTrends)
        features.push("daily trends");
      responseContent = `I've updated the query to include **${features.join(" and ")}**.

Anything else you'd like to add, or are you ready to generate the report?`;
      suggestedActions = [
        {
          id: "1",
          label: "Add fuel analysis",
          action: "append",
          value: "add_fuel"
        },
        {
          id: "2",
          label: "Add speed analysis",
          action: "append",
          value: "add_speed"
        },
        {
          id: "3",
          label: "Generate Report",
          action: "select",
          value: "generate"
        }
      ];
      queryUpdate = {
        query: `${this._currentQuery()}, including ${features.join(" and ")}`,
        confidence: Math.min(this._queryConfidence() + 30, 95),
        changes: features.map((f) => `Added ${f}`)
      };
    } else if (lowerContent.includes("generate") || lowerContent.includes("ready")) {
      responseContent = `Your query is ready:

> "${this._currentQuery()}"

Confidence: **${this._queryConfidence()}%**

Click the **Generate Report** button below to create your analysis.`;
      suggestedActions = [];
      queryUpdate = {
        query: this._currentQuery(),
        confidence: 95,
        changes: ["Query finalized"]
      };
    } else {
      responseContent = `I understand you're interested in "${content}". Could you tell me more about what specific aspects you'd like to analyze?

For example:
\u2022 Driver behavior and safety
\u2022 Fuel efficiency
\u2022 Route optimization
\u2022 Vehicle utilization`;
      suggestedActions = [
        { id: "1", label: "Driver safety", action: "select", value: "safety" },
        { id: "2", label: "Fuel efficiency", action: "select", value: "fuel" },
        {
          id: "3",
          label: "General overview",
          action: "select",
          value: "overview"
        }
      ];
    }
    const response = this.createAssistantMessage(sessionId, responseContent, {
      suggestedActions,
      queryUpdate
    });
    this._messages.update((msgs) => [...msgs, response]);
    if (queryUpdate) {
      this._currentQuery.set(queryUpdate.query);
      this._queryConfidence.set(queryUpdate.confidence);
    }
  }
  async mockSubmitContext(sessionId, summarizedData) {
    await this.delay(600);
    let totalTrips = 0;
    let totalEvents = 0;
    const eventTypes = /* @__PURE__ */ new Set();
    for (const vehicle of Object.values(summarizedData.vehicles)) {
      totalTrips += vehicle.data_summary.trip_count;
      totalEvents += vehicle.data_summary.event_count;
      for (const col of vehicle.events) {
        if (col.startsWith("eventType:")) {
          const types = col.replace("eventType:", "").split(",");
          types.forEach((t) => eventTypes.add(t));
        }
      }
    }
    const vehicleCount = summarizedData.metadata.total_vehicles;
    const eventTypeList = Array.from(eventTypes);
    let content = `I've analyzed your data. Here's what I found:

`;
    content += `\u2022 **${totalTrips} trips** across ${vehicleCount} vehicles
`;
    content += `\u2022 **${totalEvents} events**`;
    if (eventTypeList.length > 0) {
      content += ` including: ${eventTypeList.join(", ")}`;
    }
    content += `

What would you like to focus on in your analysis?`;
    const response = this.createAssistantMessage(sessionId, content, {
      suggestedActions: [
        {
          id: "1",
          label: "Driver safety",
          action: "select",
          value: "focus:safety"
        },
        {
          id: "2",
          label: "Vehicle comparison",
          action: "select",
          value: "focus:comparison"
        },
        {
          id: "3",
          label: "Trip analysis",
          action: "select",
          value: "focus:trips"
        },
        {
          id: "4",
          label: "General overview",
          action: "select",
          value: "focus:overview"
        }
      ],
      queryUpdate: {
        query: `Analyze ${totalTrips} trips and ${totalEvents} events for ${vehicleCount} vehicles`,
        confidence: 40,
        changes: ["Data context received", `Identified ${totalEvents} events`]
      },
      dataInsights: {
        totalTrips,
        totalEvents,
        totalTelemetry: 0,
        totalAlerts: 0,
        eventTypesFound: eventTypeList,
        suggestedFocusAreas: [
          "Driver Safety",
          "Speed Compliance",
          "Vehicle Comparison"
        ]
      }
    });
    this._messages.update((msgs) => [...msgs, response]);
    this._currentQuery.set(response.metadata?.queryUpdate?.query ?? "");
    this._queryConfidence.set(response.metadata?.queryUpdate?.confidence ?? 0);
  }
  // ============================================================================
  // Real API Implementations
  // ============================================================================
  async apiStartSession(context, skipInitialMessage = false) {
    const request = {
      auth_token: this.authTokenManagerService.getAccessToken() ?? "",
      base_url: this.apiUrlService.getCurrentApiUrl(),
      context: {
        client_id: context.clientId,
        client_name: context.clientName,
        date_range: {
          start_date: context.dateRange.startDate,
          end_date: context.dateRange.endDate
        },
        vehicle_ids: context.vehicleIds,
        vehicle_names: context.vehicleNames
      }
    };
    const response = await firstValueFrom(this.http.post(`${this.chatApiBaseUrl()}/chat/sessions`, request));
    const session = {
      id: response.session_id,
      createdAt: new Date(response.created_at),
      lastActivity: new Date(response.created_at),
      expiresAt: new Date(response.expires_at),
      status: response.status,
      context,
      currentQuery: this._currentQuery(),
      messageCount: skipInitialMessage ? this._messages().length : 1
    };
    this._session.set(session);
    if (!skipInitialMessage) {
      const initialMessage = this.createAssistantMessage(response.session_id, response.initial_message.content, {
        suggestedActions: response.initial_message.suggested_actions.map((a) => ({
          id: a.id,
          label: a.label,
          action: a.action,
          value: a.value
        }))
      });
      this._messages.set([initialMessage]);
    }
  }
  async apiSendMessage(sessionId, content) {
    const messageContent = this.buildMessageWithContext(content);
    const request = {
      auth_token: this.authTokenManagerService.getAccessToken() ?? "",
      base_url: this.apiUrlService.getCurrentApiUrl(),
      content: messageContent
    };
    const response = await firstValueFrom(this.http.post(`${this.chatApiBaseUrl()}/chat/sessions/${sessionId}/messages`, request));
    const assistantMessage = this.createAssistantMessage(sessionId, response.assistant_message.content, {
      suggestedActions: response.assistant_message.metadata.suggested_actions?.map((a) => ({
        id: a.id,
        label: a.label,
        action: a.action,
        value: a.value
      })),
      queryUpdate: response.assistant_message.metadata.query_update ? {
        query: response.assistant_message.metadata.query_update.query,
        confidence: response.assistant_message.metadata.query_update.confidence,
        changes: response.assistant_message.metadata.query_update.changes
      } : void 0,
      triggerDataCollection: response.assistant_message.metadata.trigger_data_collection ? {
        dataTypes: response.assistant_message.metadata.trigger_data_collection.data_types
      } : void 0
    });
    this._messages.update((msgs) => [...msgs, assistantMessage]);
    if (response.assistant_message.metadata.query_update) {
      this._currentQuery.set(response.assistant_message.metadata.query_update.query);
      this._queryConfidence.set(response.assistant_message.metadata.query_update.confidence);
    }
  }
  async apiSubmitContext(sessionId, summarizedData) {
    const request = {
      auth_token: this.authTokenManagerService.getAccessToken() ?? "",
      base_url: this.apiUrlService.getCurrentApiUrl(),
      summarized_data: summarizedData
    };
    const response = await firstValueFrom(this.http.post(`${this.chatApiBaseUrl()}/chat/sessions/${sessionId}/context`, request));
    const assistantMessage = this.createAssistantMessage(sessionId, response.assistant_message.content, {
      suggestedActions: response.assistant_message.metadata.suggested_actions.map((a) => ({
        id: a.id,
        label: a.label,
        action: a.action,
        value: a.value
      })),
      queryUpdate: {
        query: response.assistant_message.metadata.query_update.query,
        confidence: response.assistant_message.metadata.query_update.confidence,
        changes: response.assistant_message.metadata.query_update.changes
      },
      dataInsights: {
        totalTrips: response.assistant_message.metadata.data_insights.total_trips,
        totalEvents: response.assistant_message.metadata.data_insights.total_events,
        totalTelemetry: response.assistant_message.metadata.data_insights.total_telemetry,
        totalAlerts: response.assistant_message.metadata.data_insights.total_alerts,
        eventTypesFound: response.assistant_message.metadata.data_insights.event_types_found,
        suggestedFocusAreas: response.assistant_message.metadata.data_insights.suggested_focus_areas
      }
    });
    this._messages.update((msgs) => [...msgs, assistantMessage]);
    this._currentQuery.set(response.assistant_message.metadata.query_update.query);
    this._queryConfidence.set(response.assistant_message.metadata.query_update.confidence);
  }
  async apiEndSession(sessionId) {
    const request = {
      auth_token: this.authTokenManagerService.getAccessToken() ?? "",
      base_url: this.apiUrlService.getCurrentApiUrl(),
      reason: "user_completed"
    };
    await firstValueFrom(this.http.post(`${this.chatApiBaseUrl()}/chat/sessions/${sessionId}/end`, request));
  }
  // ============================================================================
  // Helper Methods
  // ============================================================================
  createUserMessage(sessionId, content) {
    return {
      id: this.generateId(),
      sessionId,
      sender: "user",
      content,
      timestamp: /* @__PURE__ */ new Date(),
      status: "sending"
    };
  }
  createAssistantMessage(sessionId, content, metadata) {
    return {
      id: this.generateId(),
      sessionId,
      sender: "assistant",
      content,
      timestamp: /* @__PURE__ */ new Date(),
      status: "delivered",
      metadata
    };
  }
  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
  /**
   * Build message content with data collection context.
   * This prepends context information so the AI knows what data is currently being collected.
   */
  buildMessageWithContext(userContent) {
    const status = this._dataCollectionStatus();
    if (!status.isCollecting || status.dataTypes.length === 0) {
      return userContent;
    }
    const dataTypesText = status.dataTypes.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(", ");
    const vehicleProgress = status.vehicleProgress ?? [];
    const completedVehicles = vehicleProgress.filter((v) => v.status === "complete").length;
    const totalVehicles = vehicleProgress.length;
    let contextPrefix = `[SYSTEM CONTEXT: Data collection is currently in progress. `;
    contextPrefix += `Collecting: ${dataTypesText}. `;
    contextPrefix += `Progress: ${status.progress}% (${completedVehicles}/${totalVehicles} vehicles). `;
    if (status.currentVehicle !== void 0 && status.currentVehicle !== "") {
      contextPrefix += `Currently processing: ${status.currentVehicle}. `;
    }
    contextPrefix += `Do not suggest adding data types that are already being collected.]

`;
    return contextPrefix + userContent;
  }
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static \u0275fac = function ChatSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatSessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatSessionService, factory: _ChatSessionService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatSessionService, [{
    type: Injectable
  }], null, null);
})();

// src/app/features/development/components/analytical-report/chat/components/query-chat/query-chat.component.ts
var _c06 = ["messagesContainer"];
var _c13 = () => [];
var _forTrack06 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.text;
function QueryChatComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Active");
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13);
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Report Query Builder");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, QueryChatComponent_Conditional_3_Conditional_5_Template, 4, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.isSessionActive() ? 5 : -1);
  }
}
function QueryChatComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Starting session...");
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Please select a client from the sidebar to start building your report. ");
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Starting guided session...");
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Please select a date range and at least one vehicle to start building your query. ");
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Ready to start building your report query.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function QueryChatComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startSession());
    });
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6, "Start Chat Session");
    \u0275\u0275elementEnd()()();
  }
}
function QueryChatComponent_Conditional_11_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function QueryChatComponent_Conditional_11_Conditional_0_For_7_Template_button_click_0_listener() {
      const prompt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPromptStarterClick(prompt_r4));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prompt_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", prompt_r4.icon, " prompt-icon"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prompt_r4.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prompt_r4.description);
  }
}
function QueryChatComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 26);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Get started with a suggestion:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275repeaterCreate(6, QueryChatComponent_Conditional_11_Conditional_0_For_7_Template, 6, 5, "button", 29, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 30);
    \u0275\u0275text(9, " Or type your own question below ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.promptStarters);
  }
}
function QueryChatComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-chat-message", 34);
    \u0275\u0275listener("actionSelected", function QueryChatComponent_Conditional_11_For_2_Template_app_chat_message_actionSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onActionSelected($event));
    })("multiActionsSelected", function QueryChatComponent_Conditional_11_For_2_Template_app_chat_message_multiActionsSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMultiActionsSelected($event));
    })("dateRangeSelected", function QueryChatComponent_Conditional_11_For_2_Template_app_chat_message_dateRangeSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDateRangeSelected($event));
    })("vehiclesSelected", function QueryChatComponent_Conditional_11_For_2_Template_app_chat_message_vehiclesSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onVehiclesSelected($event));
    })("dataTypesSelected", function QueryChatComponent_Conditional_11_For_2_Template_app_chat_message_dataTypesSelected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDataTypesSelected($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("message", message_r6)("isDisabled", ctx_r0.dataCollectionStatus().isCollecting)("collectingDataTypes", ctx_r0.dataCollectionStatus().dataTypes);
  }
}
function QueryChatComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 35);
    \u0275\u0275element(2, "span", 36)(3, "span", 36)(4, "span", 36);
    \u0275\u0275elementEnd()();
  }
}
function QueryChatComponent_Conditional_11_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.completedVehiclesCount(), "/", ctx_r0.dataCollectionStatus().vehicleProgress.length, " vehicles ");
  }
}
function QueryChatComponent_Conditional_11_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataCollectionStatus().statusMessage, " ");
  }
}
function QueryChatComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 37);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4, "Collecting data...");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, QueryChatComponent_Conditional_11_Conditional_4_Conditional_5_Template, 2, 2, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "p-progressBar", 40);
    \u0275\u0275conditionalCreate(7, QueryChatComponent_Conditional_11_Conditional_4_Conditional_7_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.dataCollectionStatus().vehicleProgress ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.dataCollectionStatus().progress)("showValue", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataCollectionStatus().statusMessage ? 7 : -1);
  }
}
function QueryChatComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QueryChatComponent_Conditional_11_Conditional_0_Template, 10, 0, "div", 22);
    \u0275\u0275repeaterCreate(1, QueryChatComponent_Conditional_11_For_2_Template, 1, 3, "app-chat-message", 23, _forTrack06);
    \u0275\u0275conditionalCreate(3, QueryChatComponent_Conditional_11_Conditional_3_Template, 5, 0, "div", 24);
    \u0275\u0275conditionalCreate(4, QueryChatComponent_Conditional_11_Conditional_4_Template, 8, 4, "div", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.showPromptStarters() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.messages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isTyping() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataCollectionStatus().isCollecting ? 4 : -1);
  }
}
function QueryChatComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function QueryChatComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-chat-input", 43);
    \u0275\u0275listener("messageSent", function QueryChatComponent_Conditional_13_Template_app_chat_input_messageSent_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSendMessage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r0.isSessionActive())("isLoading", ctx_r0.isTyping());
  }
}
function QueryChatComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 44);
    \u0275\u0275listener("click", function QueryChatComponent_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateReport());
    });
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3, "Generate Report");
    \u0275\u0275elementEnd()()();
  }
}
function QueryChatComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-query-preview", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("query", ctx_r0.currentQuery())("confidence", ctx_r0.queryConfidence())("changes", ctx_r0.queryChanges())("isLoading", ctx_r0.isTyping())("isCollecting", ctx_r0.dataCollectionStatus().isCollecting)("collectionProgress", ctx_r0.dataCollectionStatus().progress)("collectedData", ctx_r0.collectedDataSummary())("dataTypes", ctx_r0.dataCollectionStatus().dataTypes)("statusMessage", ctx_r0.dataCollectionStatus().statusMessage ?? "")("currentVehicle", ctx_r0.dataCollectionStatus().currentVehicle ?? "")("vehicleProgress", ctx_r0.dataCollectionStatus().vehicleProgress ?? \u0275\u0275pureFunction0(11, _c13));
  }
}
var QueryChatComponent = class _QueryChatComponent {
  // Injected services
  chatSessionService = inject(ChatSessionService);
  // Inputs
  dateRange = input(null, ...ngDevMode ? [{ debugName: "dateRange" }] : []);
  selectedVehicles = input([], ...ngDevMode ? [{ debugName: "selectedVehicles" }] : []);
  clientInfo = input(null, ...ngDevMode ? [{ debugName: "clientInfo" }] : []);
  fullWidthMode = input(false, ...ngDevMode ? [{ debugName: "fullWidthMode" }] : []);
  guidedMode = input(false, ...ngDevMode ? [{ debugName: "guidedMode" }] : []);
  availableVehiclesForSelection = input([], ...ngDevMode ? [{ debugName: "availableVehiclesForSelection" }] : []);
  // Outputs
  generateReport = output();
  dataCollectionTriggered = output();
  queryUpdated = output();
  confidenceUpdated = output();
  // Guided flow outputs
  dateRangeSelected = output();
  vehiclesSelected = output();
  dataTypesSelected = output();
  // View children
  messagesContainer;
  chatInput;
  // Computed signals from service
  messages = this.chatSessionService.messages;
  isTyping = this.chatSessionService.isTyping;
  isConnecting = this.chatSessionService.isConnecting;
  currentQuery = this.chatSessionService.currentQuery;
  queryConfidence = this.chatSessionService.queryConfidence;
  error = this.chatSessionService.error;
  session = this.chatSessionService.session;
  dataCollectionStatus = this.chatSessionService.dataCollectionStatus;
  // Form state signals from service (for guided mode)
  formDateRange = this.chatSessionService.formDateRange;
  formSelectedVehicles = this.chatSessionService.formSelectedVehicles;
  formSelectedDataTypes = this.chatSessionService.formSelectedDataTypes;
  conversationPhase = this.chatSessionService.conversationPhase;
  // Local computed
  canStartSession = computed(() => {
    const range = this.dateRange();
    const vehicles = this.selectedVehicles();
    const client = this.clientInfo();
    return range !== null && vehicles.length > 0 && client !== null;
  }, ...ngDevMode ? [{ debugName: "canStartSession" }] : []);
  // For guided mode, we only need a client to start
  canStartGuidedSession = computed(() => {
    const client = this.clientInfo();
    return client !== null;
  }, ...ngDevMode ? [{ debugName: "canStartGuidedSession" }] : []);
  isSessionActive = computed(() => this.session()?.status === "active", ...ngDevMode ? [{ debugName: "isSessionActive" }] : []);
  canGenerateReport = computed(() => this.currentQuery().length > 0 && this.queryConfidence() >= 50, ...ngDevMode ? [{ debugName: "canGenerateReport" }] : []);
  queryChanges = computed(() => {
    const msgs = this.messages();
    for (let i = msgs.length - 1; i >= 0; i--) {
      const changes = msgs[i].metadata?.queryUpdate?.changes;
      if (changes && changes.length > 0) {
        return changes;
      }
    }
    return [];
  }, ...ngDevMode ? [{ debugName: "queryChanges" }] : []);
  collectedDataSummary = computed(() => {
    return this.dataCollectionStatus().collectedData;
  }, ...ngDevMode ? [{ debugName: "collectedDataSummary" }] : []);
  completedVehiclesCount = computed(() => {
    const progress = this.dataCollectionStatus().vehicleProgress;
    if (!progress)
      return 0;
    return progress.filter((v) => v.status === "complete").length;
  }, ...ngDevMode ? [{ debugName: "completedVehiclesCount" }] : []);
  // Prompt starters for empty chat state
  promptStarters = [
    {
      icon: "pi-shield",
      text: "Analyze driver safety scores",
      description: "Review speeding, harsh braking, and acceleration events"
    },
    {
      icon: "pi-chart-line",
      text: "Show fuel efficiency trends",
      description: "Compare consumption patterns across vehicles"
    },
    {
      icon: "pi-car",
      text: "Compare vehicle utilization",
      description: "Identify underused or overworked assets"
    },
    {
      icon: "pi-exclamation-triangle",
      text: "Highlight maintenance alerts",
      description: "Find vehicles needing attention"
    }
  ];
  showPromptStarters = computed(() => this.isSessionActive() && this.messages().length === 0 && !this.isTyping(), ...ngDevMode ? [{ debugName: "showPromptStarters" }] : []);
  // Track if we've already started a session to avoid duplicate starts
  sessionStarted = false;
  // Track if view has been initialized for safe scrolling
  viewInitialized = false;
  constructor() {
    effect(() => {
      const messageCount = this.messages().length;
      const typing = this.isTyping();
      const collecting = this.dataCollectionStatus().isCollecting;
      const sessionActive = this.isSessionActive();
      if (this.viewInitialized && (messageCount > 0 || typing || collecting || sessionActive)) {
        setTimeout(() => this.scrollToBottom(), 50);
      }
    });
    effect(() => {
      const isGuided = this.guidedMode();
      const canStart = this.canStartGuidedSession();
      const sessionActive = this.isSessionActive();
      const isConnecting = this.isConnecting();
      if (isGuided && canStart && !sessionActive && !isConnecting && !this.sessionStarted) {
        this.sessionStarted = true;
        void this.startGuidedSession();
      }
    });
    effect(() => {
      const availableVehicles = this.availableVehiclesForSelection();
      if (availableVehicles.length > 0) {
        this.chatSessionService.setAvailableVehicles(availableVehicles.map((v) => ({ id: v.id, name: v.name })));
      }
    });
    effect(() => {
      const query = this.currentQuery();
      if (query) {
        this.queryUpdated.emit(query);
      }
    });
    effect(() => {
      const confidence = this.queryConfidence();
      this.confidenceUpdated.emit(confidence);
    });
  }
  ngAfterViewInit() {
    this.viewInitialized = true;
    if (this.messages().length > 0) {
      this.scrollToBottom();
    }
  }
  ngOnDestroy() {
    void this.chatSessionService.endSession();
  }
  async startSession() {
    const range = this.dateRange();
    const vehicles = this.selectedVehicles();
    const client = this.clientInfo();
    if (!range || vehicles.length === 0 || !client) {
      return;
    }
    const context = {
      clientId: client.id,
      clientName: client.name,
      dateRange: {
        startDate: range.start.toISOString(),
        endDate: range.end.toISOString()
      },
      vehicleIds: vehicles.map((v) => v.id),
      vehicleNames: vehicles.map((v) => v.name)
    };
    try {
      await this.chatSessionService.startSession(context);
      this.focusInput();
    } catch (err) {
      console.error("Failed to start chat session:", err);
    }
  }
  async onSendMessage(content) {
    try {
      await this.chatSessionService.sendMessage(content);
      const lastMessage = this.messages()[this.messages().length - 1];
      const trigger = lastMessage?.metadata?.triggerDataCollection;
      if (trigger && trigger.dataTypes.length > 0) {
        this.dataCollectionTriggered.emit(trigger.dataTypes);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  }
  async onActionSelected(action) {
    if (action.value === "generate" || action.value === "generate_report") {
      this.onGenerateReport();
      return;
    }
    await this.onSendMessage(action.label);
  }
  async onMultiActionsSelected(actions) {
    if (actions.length === 0)
      return;
    const dataTypes = actions.map((a) => a.value.toLowerCase()).filter((v) => ["trips", "events", "telemetry", "alerts"].includes(v));
    const otherActions = actions.filter((a) => !["trips", "events", "telemetry", "alerts"].includes(a.value.toLowerCase()));
    if (dataTypes.length > 0) {
      this.dataCollectionTriggered.emit(dataTypes);
    }
    const selectedLabels = actions.map((a) => a.label).join(", ");
    if (dataTypes.length > 0 && otherActions.length === 0) {
      await this.onSendMessage(`I'd like to include: ${selectedLabels}`);
    } else if (dataTypes.length === 0 && otherActions.length > 0) {
      await this.onSendMessage(`I want to: ${selectedLabels}`);
    } else {
      await this.onSendMessage(`Selected options: ${selectedLabels}`);
    }
  }
  async onPromptStarterClick(prompt) {
    await this.onSendMessage(prompt.text);
  }
  onGenerateReport() {
    const query = this.currentQuery();
    if (query) {
      this.generateReport.emit(query);
    }
  }
  // Called by parent when data collection completes
  async submitDataContext(summarizedData) {
    try {
      let trips = 0;
      let events = 0;
      let telemetry = 0;
      let alerts = 0;
      for (const vehicle of Object.values(summarizedData.vehicles)) {
        trips += vehicle.data_summary.trip_count;
        events += vehicle.data_summary.event_count;
        telemetry += vehicle.data_summary.telemetry_count;
        alerts += vehicle.data_summary.alert_count;
      }
      const summary = {
        trips,
        events,
        telemetry,
        alerts
      };
      this.chatSessionService.setDataCollectionComplete(summary);
      await this.chatSessionService.submitDataContext(summarizedData);
    } catch (err) {
      console.error("Failed to submit data context:", err);
    }
  }
  // Called by parent to update collection progress
  updateCollectionProgress(progress) {
    this.chatSessionService.updateDataCollectionProgress(progress);
  }
  // Called by parent to start collection
  startDataCollection(dataTypes) {
    const vehicles = this.selectedVehicles().map((v) => ({
      id: v.id,
      name: v.name
    }));
    this.chatSessionService.setDataCollectionStarted(dataTypes, vehicles);
  }
  focusInput() {
    setTimeout(() => {
      this.chatInput?.focus();
    }, 100);
  }
  /**
   * Scrolls the messages container to the bottom.
   * Uses double requestAnimationFrame to ensure the DOM has fully rendered before scrolling.
   * In full-width mode, scrolls the parent .chat-area container instead.
   */
  scrollToBottom() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        let container = this.messagesContainer?.nativeElement;
        if (this.fullWidthMode() && container != null) {
          const chatArea = container.closest(".chat-area");
          if (chatArea != null) {
            container = chatArea;
          }
        }
        if (container != null) {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth"
          });
        }
      });
    });
  }
  // Called by parent to clear session and start fresh
  clearSession() {
    void this.chatSessionService.endSession();
    this.sessionStarted = false;
  }
  // Guided conversation flow handlers
  async startGuidedSession() {
    const client = this.clientInfo();
    if (!client) {
      return;
    }
    try {
      const availableVehicles = this.availableVehiclesForSelection();
      if (availableVehicles.length > 0) {
        this.chatSessionService.setAvailableVehicles(availableVehicles.map((v) => ({ id: v.id, name: v.name })));
      }
      await this.chatSessionService.startGuidedSession(client.id, client.name);
      this.focusInput();
    } catch (err) {
      console.error("Failed to start guided session:", err);
    }
  }
  // Handler for inline date picker selection
  onDateRangeSelected(dateRange) {
    this.chatSessionService.setDateRange(dateRange.start, dateRange.end);
    this.dateRangeSelected.emit(dateRange);
  }
  // Handler for inline vehicle selector
  onVehiclesSelected(vehicles) {
    this.chatSessionService.setSelectedVehicles(vehicles);
    this.vehiclesSelected.emit(vehicles);
  }
  // Handler for inline data type selector
  onDataTypesSelected(dataTypes) {
    const typedDataTypes = dataTypes.filter((t) => ["trips", "events", "telemetry", "alerts"].includes(t));
    this.chatSessionService.setSelectedDataTypes(typedDataTypes);
    this.dataTypesSelected.emit(dataTypes);
    if (typedDataTypes.length > 0) {
      this.dataCollectionTriggered.emit(typedDataTypes);
    }
  }
  static \u0275fac = function QueryChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QueryChatComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QueryChatComponent, selectors: [["app-query-chat"]], viewQuery: function QueryChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
      \u0275\u0275viewQuery(ChatInputComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatInput = _t.first);
    }
  }, inputs: { dateRange: [1, "dateRange"], selectedVehicles: [1, "selectedVehicles"], clientInfo: [1, "clientInfo"], fullWidthMode: [1, "fullWidthMode"], guidedMode: [1, "guidedMode"], availableVehiclesForSelection: [1, "availableVehiclesForSelection"] }, outputs: { generateReport: "generateReport", dataCollectionTriggered: "dataCollectionTriggered", queryUpdated: "queryUpdated", confidenceUpdated: "confidenceUpdated", dateRangeSelected: "dateRangeSelected", vehiclesSelected: "vehiclesSelected", dataTypesSelected: "dataTypesSelected" }, features: [\u0275\u0275ProvidersFeature([ChatSessionService])], decls: 16, vars: 8, consts: [["messagesContainer", ""], [1, "query-chat-container"], [1, "chat-layout"], [1, "chat-panel"], [1, "chat-header"], [1, "messages-area"], [1, "connecting-state"], [1, "setup-required"], [1, "start-session"], [1, "error-banner"], ["placeholder", "Type your message or select a suggestion...", 3, "disabled", "isLoading"], [1, "generate-button-container"], [1, "preview-panel"], [1, "header-info"], [1, "pi", "pi-comments"], [1, "session-status", "active"], [1, "pi", "pi-circle-fill"], [1, "pi", "pi-spin", "pi-spinner"], [1, "pi", "pi-info-circle"], [1, "pi", "pi-play-circle"], ["pButton", "", "type", "button", "label", "Start Chat Session", "icon", "pi pi-comments", 1, "p-button-primary", 3, "click"], [1, "p-button-label"], [1, "prompt-starters"], [3, "message", "isDisabled", "collectingDataTypes"], [1, "typing-indicator"], [1, "collection-progress-inline"], [1, "prompt-starters-header"], [1, "pi", "pi-lightbulb"], [1, "prompt-starters-grid"], ["type", "button", 1, "prompt-starter-card"], [1, "prompt-starters-hint"], ["type", "button", 1, "prompt-starter-card", 3, "click"], [1, "prompt-text"], [1, "prompt-description"], [3, "actionSelected", "multiActionsSelected", "dateRangeSelected", "vehiclesSelected", "dataTypesSelected", "message", "isDisabled", "collectingDataTypes"], [1, "typing-bubble"], [1, "dot"], [1, "progress-header"], [1, "progress-title"], [1, "progress-count"], ["styleClass", "inline-progress-bar", 3, "value", "showValue"], [1, "progress-detail"], [1, "pi", "pi-exclamation-triangle"], ["placeholder", "Type your message or select a suggestion...", 3, "messageSent", "disabled", "isLoading"], ["pButton", "", "type", "button", "label", "Generate Report", "icon", "pi pi-chart-bar", 1, "p-button-success", "generate-button", 3, "click"], [3, "query", "confidence", "changes", "isLoading", "isCollecting", "collectionProgress", "collectedData", "dataTypes", "statusMessage", "currentVehicle", "vehicleProgress"]], template: function QueryChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275conditionalCreate(3, QueryChatComponent_Conditional_3_Template, 6, 1, "div", 4);
      \u0275\u0275elementStart(4, "div", 5, 0);
      \u0275\u0275conditionalCreate(6, QueryChatComponent_Conditional_6_Template, 4, 0, "div", 6)(7, QueryChatComponent_Conditional_7_Template, 4, 0, "div", 7)(8, QueryChatComponent_Conditional_8_Template, 4, 0, "div", 6)(9, QueryChatComponent_Conditional_9_Template, 4, 0, "div", 7)(10, QueryChatComponent_Conditional_10_Template, 7, 0, "div", 8)(11, QueryChatComponent_Conditional_11_Template, 5, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, QueryChatComponent_Conditional_12_Template, 4, 1, "div", 9);
      \u0275\u0275conditionalCreate(13, QueryChatComponent_Conditional_13_Template, 1, 2, "app-chat-input", 10);
      \u0275\u0275conditionalCreate(14, QueryChatComponent_Conditional_14_Template, 4, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, QueryChatComponent_Conditional_15_Template, 2, 12, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("full-width-mode", ctx.fullWidthMode());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.fullWidthMode() ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isConnecting() ? 6 : !ctx.isSessionActive() && ctx.guidedMode() && !ctx.canStartGuidedSession() ? 7 : !ctx.isSessionActive() && ctx.guidedMode() && ctx.canStartGuidedSession() ? 8 : !ctx.isSessionActive() && !ctx.guidedMode() && !ctx.canStartSession() ? 9 : !ctx.isSessionActive() && !ctx.guidedMode() && ctx.canStartSession() ? 10 : 11);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.error() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSessionActive() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canGenerateReport() && !ctx.fullWidthMode() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.fullWidthMode() ? 15 : -1);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    ButtonDirective,
    CardModule,
    ProgressBarModule,
    ProgressBar,
    ChatMessageComponent,
    ChatInputComponent,
    QueryPreviewComponent
  ], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
  height: 100%;
}
.query-chat-container[_ngcontent-%COMP%] {
  height: 100%;
  min-height: 500px;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   .chat-layout[_ngcontent-%COMP%] {
  grid-template-columns: 1fr;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   .chat-panel[_ngcontent-%COMP%] {
  border: none;
  border-radius: 0;
  background-color: transparent;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   .messages-area[_ngcontent-%COMP%] {
  background-color: transparent;
  background-image: none;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%] {
  position: sticky;
  bottom: 0;
  z-index: 10;
  margin: 0 0.75rem 0.75rem 0.75rem;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%]     .chat-input-container {
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e2e8f0);
  border-radius: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%]     .chat-textarea {
  background-color: var(--input-background-color, #ffffff) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--input-font-color, #1e293b);
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%]     .chat-textarea:focus {
  box-shadow: none !important;
  border: none !important;
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%]     .chat-textarea::placeholder {
  color: var(--input-placeholder-color, #64748b);
}
.query-chat-container.full-width-mode[_ngcontent-%COMP%]   app-chat-input[_ngcontent-%COMP%]     .send-button {
  background: var(--color-primary-color, #3b82f6) !important;
}
.chat-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  height: 100%;
}
@media (max-width: 1024px) {
  .chat-layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
}
.chat-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e5e7eb);
  border-radius: 0.5rem;
  overflow: hidden;
  min-height: 400px;
}
.chat-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  background: var(--color-primary-color, linear-gradient(135deg, #1e40af 0%, #3b82f6 100%));
  color: var(--color-primary-contrast, #ffffff);
}
.header-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
}
.header-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.125rem;
}
.session-status[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.2);
}
.session-status.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #4ade80;
  font-size: 0.5rem;
}
.messages-area[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
  background-color: var(--surface-ground, #f3f4f6);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.connecting-state[_ngcontent-%COMP%], 
.setup-required[_ngcontent-%COMP%], 
.start-session[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
  color: var(--text-color-secondary, #6b7280);
}
.connecting-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.setup-required[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.start-session[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}
.connecting-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.setup-required[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.start-session[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0 0 1rem 0;
  font-size: 0.9375rem;
  max-width: 300px;
}
.prompt-starters[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem;
}
.prompt-starters-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-color, #374151);
  margin-bottom: 1rem;
}
.prompt-starters-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #f59e0b;
  font-size: 1.125rem;
}
.prompt-starters-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  width: 100%;
  max-width: 500px;
}
.prompt-starter-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  padding: 0.875rem;
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e5e7eb);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
}
.prompt-starter-card[_ngcontent-%COMP%]:hover {
  border-color: var(--color-primary-color, #3b82f6);
  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.05);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);
}
.prompt-starter-card[_ngcontent-%COMP%]   .prompt-icon[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  color: var(--color-primary-color, #3b82f6);
}
.prompt-starter-card[_ngcontent-%COMP%]   .prompt-text[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-color, #1f2937);
  line-height: 1.3;
}
.prompt-starter-card[_ngcontent-%COMP%]   .prompt-description[_ngcontent-%COMP%] {
  font-size: 0.6875rem;
  color: var(--text-color-secondary, #6b7280);
  line-height: 1.3;
}
.prompt-starters-hint[_ngcontent-%COMP%] {
  margin: 1rem 0 0 0;
  font-size: 0.75rem;
  color: var(--text-color-secondary, #9ca3af);
}
.connecting-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: var(--color-primary-color, #3b82f6);
}
.typing-indicator[_ngcontent-%COMP%] {
  display: flex;
  padding: 0 0.75rem;
  margin-bottom: 0.75rem;
}
.typing-bubble[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-radius: 1rem 1rem 1rem 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.dot[_ngcontent-%COMP%] {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--text-color-secondary, #9ca3af);
  border-radius: 50%;
  animation: _ngcontent-%COMP%_typing 1.4s infinite ease-in-out;
}
.dot[_ngcontent-%COMP%]:nth-child(1) {
  animation-delay: 0s;
}
.dot[_ngcontent-%COMP%]:nth-child(2) {
  animation-delay: 0.2s;
}
.dot[_ngcontent-%COMP%]:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes _ngcontent-%COMP%_typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-0.375rem);
    opacity: 1;
  }
}
.collection-progress-inline[_ngcontent-%COMP%] {
  margin: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.collection-progress-inline[_ngcontent-%COMP%]     .inline-progress-bar {
  height: 0.5rem;
  border-radius: 0.25rem;
}
.progress-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-primary-color, #3b82f6);
}
.progress-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.progress-title[_ngcontent-%COMP%] {
  flex: 1;
  font-weight: 500;
}
.progress-count[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--text-color-secondary, #6b7280);
  font-weight: 600;
}
.progress-detail[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #059669;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.progress-detail[_ngcontent-%COMP%]::before {
  content: "\\2192";
  opacity: 0.6;
}
.progress-message[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-primary-color, #3b82f6);
}
.progress-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.error-banner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #fef2f2;
  border-top: 1px solid #fecaca;
  color: #991b1b;
  font-size: 0.875rem;
}
.error-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.generate-button-container[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  background-color: var(--surface-ground, #f9fafb);
  border-top: 1px solid var(--input-border-color, #e5e7eb);
}
.generate-button[_ngcontent-%COMP%] {
  width: 100%;
  justify-content: center;
  font-weight: 600;
}
@media (max-width: 1024px) {
  .preview-panel[_ngcontent-%COMP%] {
    max-height: 300px;
  }
}
/*# sourceMappingURL=query-chat.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QueryChatComponent, [{
    type: Component,
    args: [{ selector: "app-query-chat", imports: [
      CommonModule,
      ButtonModule,
      CardModule,
      ProgressBarModule,
      ChatMessageComponent,
      ChatInputComponent,
      QueryPreviewComponent
    ], providers: [ChatSessionService], template: `<div class="query-chat-container" [class.full-width-mode]="fullWidthMode()">
  <!-- Main layout: Chat + Preview side by side -->
  <div class="chat-layout">
    <!-- Chat Panel -->
    <div class="chat-panel">
      <!-- Header (hidden in full-width mode since parent provides header) -->
      @if (!fullWidthMode()) {
        <div class="chat-header">
          <div class="header-info">
            <i class="pi pi-comments"></i>
            <span>Report Query Builder</span>
          </div>
          @if (isSessionActive()) {
            <div class="session-status active">
              <i class="pi pi-circle-fill"></i>
              <span>Active</span>
            </div>
          }
        </div>
      }

      <!-- Messages Area -->
      <div class="messages-area" #messagesContainer>
        @if (isConnecting()) {
          <div class="connecting-state">
            <i class="pi pi-spin pi-spinner"></i>
            <span>Starting session...</span>
          </div>
        } @else if (
          !isSessionActive() && guidedMode() && !canStartGuidedSession()
        ) {
          <!-- Guided mode requires only a client -->
          <div class="setup-required">
            <i class="pi pi-info-circle"></i>
            <p>
              Please select a client from the sidebar to start building your
              report.
            </p>
          </div>
        } @else if (
          !isSessionActive() && guidedMode() && canStartGuidedSession()
        ) {
          <!-- Auto-start guided session -->
          <div class="connecting-state">
            <i class="pi pi-spin pi-spinner"></i>
            <span>Starting guided session...</span>
          </div>
        } @else if (!isSessionActive() && !guidedMode() && !canStartSession()) {
          <div class="setup-required">
            <i class="pi pi-info-circle"></i>
            <p>
              Please select a date range and at least one vehicle to start
              building your query.
            </p>
          </div>
        } @else if (!isSessionActive() && !guidedMode() && canStartSession()) {
          <div class="start-session">
            <i class="pi pi-play-circle"></i>
            <p>Ready to start building your report query.</p>
            <button
              pButton
              type="button"
              label="Start Chat Session"
              icon="pi pi-comments"
              (click)="startSession()"
              class="p-button-primary"
            >
              <span class="p-button-label">Start Chat Session</span>
            </button>
          </div>
        } @else {
          <!-- Prompt starters (shown when no messages yet) -->
          @if (showPromptStarters()) {
            <div class="prompt-starters">
              <div class="prompt-starters-header">
                <i class="pi pi-lightbulb"></i>
                <span>Get started with a suggestion:</span>
              </div>
              <div class="prompt-starters-grid">
                @for (prompt of promptStarters; track prompt.text) {
                  <button
                    class="prompt-starter-card"
                    type="button"
                    (click)="onPromptStarterClick(prompt)"
                  >
                    <i class="pi {{ prompt.icon }} prompt-icon"></i>
                    <span class="prompt-text">{{ prompt.text }}</span>
                    <span class="prompt-description">{{
                      prompt.description
                    }}</span>
                  </button>
                }
              </div>
              <p class="prompt-starters-hint">
                Or type your own question below
              </p>
            </div>
          }

          <!-- Messages list -->
          @for (message of messages(); track message.id) {
            <app-chat-message
              [message]="message"
              [isDisabled]="dataCollectionStatus().isCollecting"
              [collectingDataTypes]="dataCollectionStatus().dataTypes"
              (actionSelected)="onActionSelected($event)"
              (multiActionsSelected)="onMultiActionsSelected($event)"
              (dateRangeSelected)="onDateRangeSelected($event)"
              (vehiclesSelected)="onVehiclesSelected($event)"
              (dataTypesSelected)="onDataTypesSelected($event)"
            />
          }

          <!-- Typing indicator -->
          @if (isTyping()) {
            <div class="typing-indicator">
              <div class="typing-bubble">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
            </div>
          }

          <!-- Data collection progress (inline) -->
          @if (dataCollectionStatus().isCollecting) {
            <div class="collection-progress-inline">
              <div class="progress-header">
                <i class="pi pi-spin pi-spinner"></i>
                <span class="progress-title">Collecting data...</span>
                @if (dataCollectionStatus().vehicleProgress) {
                  <span class="progress-count">
                    {{ completedVehiclesCount() }}/{{
                      dataCollectionStatus().vehicleProgress!.length
                    }}
                    vehicles
                  </span>
                }
              </div>
              <p-progressBar
                [value]="dataCollectionStatus().progress"
                [showValue]="true"
                styleClass="inline-progress-bar"
              ></p-progressBar>
              @if (dataCollectionStatus().statusMessage) {
                <div class="progress-detail">
                  {{ dataCollectionStatus().statusMessage }}
                </div>
              }
            </div>
          }
        }
      </div>

      <!-- Error message -->
      @if (error()) {
        <div class="error-banner">
          <i class="pi pi-exclamation-triangle"></i>
          <span>{{ error() }}</span>
        </div>
      }

      <!-- Input Area -->
      @if (isSessionActive()) {
        <app-chat-input
          [disabled]="!isSessionActive()"
          [isLoading]="isTyping()"
          placeholder="Type your message or select a suggestion..."
          (messageSent)="onSendMessage($event)"
        />
      }

      <!-- Generate Report Button (hidden in full-width mode, parent handles it) -->
      @if (canGenerateReport() && !fullWidthMode()) {
        <div class="generate-button-container">
          <button
            pButton
            type="button"
            label="Generate Report"
            icon="pi pi-chart-bar"
            (click)="onGenerateReport()"
            class="p-button-success generate-button"
          >
            <span class="p-button-label">Generate Report</span>
          </button>
        </div>
      }
    </div>

    <!-- Query Preview Panel (hidden in full-width mode, parent handles it) -->
    @if (!fullWidthMode()) {
      <div class="preview-panel">
        <app-query-preview
          [query]="currentQuery()"
          [confidence]="queryConfidence()"
          [changes]="queryChanges()"
          [isLoading]="isTyping()"
          [isCollecting]="dataCollectionStatus().isCollecting"
          [collectionProgress]="dataCollectionStatus().progress"
          [collectedData]="collectedDataSummary()"
          [dataTypes]="dataCollectionStatus().dataTypes"
          [statusMessage]="dataCollectionStatus().statusMessage ?? ''"
          [currentVehicle]="dataCollectionStatus().currentVehicle ?? ''"
          [vehicleProgress]="dataCollectionStatus().vehicleProgress ?? []"
        />
      </div>
    }
  </div>
</div>
`, styles: [`@charset "UTF-8";

/* src/app/features/development/components/analytical-report/chat/components/query-chat/query-chat.component.scss */
:host {
  display: block;
  height: 100%;
}
.query-chat-container {
  height: 100%;
  min-height: 500px;
}
.query-chat-container.full-width-mode .chat-layout {
  grid-template-columns: 1fr;
}
.query-chat-container.full-width-mode .chat-panel {
  border: none;
  border-radius: 0;
  background-color: transparent;
}
.query-chat-container.full-width-mode .messages-area {
  background-color: transparent;
  background-image: none;
}
.query-chat-container.full-width-mode app-chat-input {
  position: sticky;
  bottom: 0;
  z-index: 10;
  margin: 0 0.75rem 0.75rem 0.75rem;
}
.query-chat-container.full-width-mode app-chat-input ::ng-deep .chat-input-container {
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e2e8f0);
  border-radius: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem;
}
.query-chat-container.full-width-mode app-chat-input ::ng-deep .chat-textarea {
  background-color: var(--input-background-color, #ffffff) !important;
  border: none !important;
  box-shadow: none !important;
  color: var(--input-font-color, #1e293b);
}
.query-chat-container.full-width-mode app-chat-input ::ng-deep .chat-textarea:focus {
  box-shadow: none !important;
  border: none !important;
}
.query-chat-container.full-width-mode app-chat-input ::ng-deep .chat-textarea::placeholder {
  color: var(--input-placeholder-color, #64748b);
}
.query-chat-container.full-width-mode app-chat-input ::ng-deep .send-button {
  background: var(--color-primary-color, #3b82f6) !important;
}
.chat-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  height: 100%;
}
@media (max-width: 1024px) {
  .chat-layout {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
}
.chat-panel {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e5e7eb);
  border-radius: 0.5rem;
  overflow: hidden;
  min-height: 400px;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1rem;
  background: var(--color-primary-color, linear-gradient(135deg, #1e40af 0%, #3b82f6 100%));
  color: var(--color-primary-contrast, #ffffff);
}
.header-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
}
.header-info i {
  font-size: 1.125rem;
}
.session-status {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.2);
}
.session-status.active i {
  color: #4ade80;
  font-size: 0.5rem;
}
.messages-area {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
  background-color: var(--surface-ground, #f3f4f6);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.connecting-state,
.setup-required,
.start-session {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
  color: var(--text-color-secondary, #6b7280);
}
.connecting-state i,
.setup-required i,
.start-session i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}
.connecting-state p,
.setup-required p,
.start-session p {
  margin: 0 0 1rem 0;
  font-size: 0.9375rem;
  max-width: 300px;
}
.prompt-starters {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.5rem;
}
.prompt-starters-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-color, #374151);
  margin-bottom: 1rem;
}
.prompt-starters-header i {
  color: #f59e0b;
  font-size: 1.125rem;
}
.prompt-starters-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  width: 100%;
  max-width: 500px;
}
.prompt-starter-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  padding: 0.875rem;
  background-color: var(--card-background-color, #ffffff);
  border: 1px solid var(--input-border-color, #e5e7eb);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;
}
.prompt-starter-card:hover {
  border-color: var(--color-primary-color, #3b82f6);
  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.05);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);
}
.prompt-starter-card .prompt-icon {
  font-size: 1.125rem;
  color: var(--color-primary-color, #3b82f6);
}
.prompt-starter-card .prompt-text {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-color, #1f2937);
  line-height: 1.3;
}
.prompt-starter-card .prompt-description {
  font-size: 0.6875rem;
  color: var(--text-color-secondary, #6b7280);
  line-height: 1.3;
}
.prompt-starters-hint {
  margin: 1rem 0 0 0;
  font-size: 0.75rem;
  color: var(--text-color-secondary, #9ca3af);
}
.connecting-state i {
  color: var(--color-primary-color, #3b82f6);
}
.typing-indicator {
  display: flex;
  padding: 0 0.75rem;
  margin-bottom: 0.75rem;
}
.typing-bubble {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-radius: 1rem 1rem 1rem 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--text-color-secondary, #9ca3af);
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-0.375rem);
    opacity: 1;
  }
}
.collection-progress-inline {
  margin: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
.collection-progress-inline ::ng-deep .inline-progress-bar {
  height: 0.5rem;
  border-radius: 0.25rem;
}
.progress-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-primary-color, #3b82f6);
}
.progress-header i {
  font-size: 1rem;
}
.progress-title {
  flex: 1;
  font-weight: 500;
}
.progress-count {
  font-size: 0.75rem;
  color: var(--text-color-secondary, #6b7280);
  font-weight: 600;
}
.progress-detail {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #059669;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.progress-detail::before {
  content: "\\2192";
  opacity: 0.6;
}
.progress-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-primary-color, #3b82f6);
}
.progress-message i {
  font-size: 1rem;
}
.error-banner {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #fef2f2;
  border-top: 1px solid #fecaca;
  color: #991b1b;
  font-size: 0.875rem;
}
.error-banner i {
  font-size: 1rem;
}
.generate-button-container {
  padding: 0.75rem 1rem;
  background-color: var(--surface-ground, #f9fafb);
  border-top: 1px solid var(--input-border-color, #e5e7eb);
}
.generate-button {
  width: 100%;
  justify-content: center;
  font-weight: 600;
}
@media (max-width: 1024px) {
  .preview-panel {
    max-height: 300px;
  }
}
/*# sourceMappingURL=query-chat.component.css.map */
`] }]
  }], () => [], { dateRange: [{ type: Input, args: [{ isSignal: true, alias: "dateRange", required: false }] }], selectedVehicles: [{ type: Input, args: [{ isSignal: true, alias: "selectedVehicles", required: false }] }], clientInfo: [{ type: Input, args: [{ isSignal: true, alias: "clientInfo", required: false }] }], fullWidthMode: [{ type: Input, args: [{ isSignal: true, alias: "fullWidthMode", required: false }] }], guidedMode: [{ type: Input, args: [{ isSignal: true, alias: "guidedMode", required: false }] }], availableVehiclesForSelection: [{ type: Input, args: [{ isSignal: true, alias: "availableVehiclesForSelection", required: false }] }], generateReport: [{ type: Output, args: ["generateReport"] }], dataCollectionTriggered: [{ type: Output, args: ["dataCollectionTriggered"] }], queryUpdated: [{ type: Output, args: ["queryUpdated"] }], confidenceUpdated: [{ type: Output, args: ["confidenceUpdated"] }], dateRangeSelected: [{ type: Output, args: ["dateRangeSelected"] }], vehiclesSelected: [{ type: Output, args: ["vehiclesSelected"] }], dataTypesSelected: [{ type: Output, args: ["dataTypesSelected"] }], messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }], chatInput: [{
    type: ViewChild,
    args: [ChatInputComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QueryChatComponent, { className: "QueryChatComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/query-chat/query-chat.component.ts", lineNumber: 50 });
})();

// src/app/features/development/components/analytical-report/chat/components/chat-summary-header/chat-summary-header.component.ts
var _c07 = ["vehiclePanel"];
var _c14 = ["datePanel"];
var _c22 = ["dataTypesPanel"];
var _forTrack07 = ($index, $item) => $item.id;
function ChatSummaryHeaderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-level", ctx_r1.confidenceLevel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.summary().queryConfidence, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.confidenceLabel());
  }
}
function ChatSummaryHeaderComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function ChatSummaryHeaderComponent_For_44_Template_div_click_0_listener() {
      const vehicle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVehicle(vehicle_r4.id));
    });
    \u0275\u0275elementStart(1, "p-checkbox", 38);
    \u0275\u0275listener("ngModelChange", function ChatSummaryHeaderComponent_For_44_Template_p_checkbox_ngModelChange_1_listener() {
      const vehicle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVehicle(vehicle_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isVehicleSelected(vehicle_r4.id))("binary", true)("inputId", "vehicle-" + vehicle_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("for", "vehicle-" + vehicle_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r4.name, " ");
  }
}
function ChatSummaryHeaderComponent_ForEmpty_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "No vehicles available");
    \u0275\u0275elementEnd();
  }
}
function ChatSummaryHeaderComponent_For_59_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function ChatSummaryHeaderComponent_For_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 46);
    \u0275\u0275listener("ngModelChange", function ChatSummaryHeaderComponent_For_59_Conditional_2_Template_p_checkbox_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const dataType_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDataType(dataType_r6.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dataType_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.isDataTypeSelected(dataType_r6.id))("binary", true)("inputId", "datatype-" + dataType_r6.id)("disabled", ctx_r1.isDataTypeCollecting(dataType_r6.id));
  }
}
function ChatSummaryHeaderComponent_For_59_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Collecting... ");
  }
}
function ChatSummaryHeaderComponent_For_59_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const dataType_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", dataType_r6.description, " ");
  }
}
function ChatSummaryHeaderComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ChatSummaryHeaderComponent_For_59_Template_div_click_0_listener() {
      const dataType_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDataType(dataType_r6.id));
    });
    \u0275\u0275conditionalCreate(1, ChatSummaryHeaderComponent_For_59_Conditional_1_Template, 1, 0, "i", 41)(2, ChatSummaryHeaderComponent_For_59_Conditional_2_Template, 1, 4, "p-checkbox", 42);
    \u0275\u0275elementStart(3, "div", 43)(4, "label", 44);
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275conditionalCreate(8, ChatSummaryHeaderComponent_For_59_Conditional_8_Template, 1, 0)(9, ChatSummaryHeaderComponent_For_59_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dataType_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("collecting", ctx_r1.isDataTypeCollecting(dataType_r6.id))("selected", ctx_r1.isDataTypeSelected(dataType_r6.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDataTypeCollecting(dataType_r6.id) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "datatype-" + dataType_r6.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("pi ", dataType_r6.icon));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dataType_r6.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isDataTypeCollecting(dataType_r6.id) ? 8 : 9);
  }
}
var DEFAULT_DATA_TYPES2 = [
  {
    id: "trips",
    label: "Trips",
    description: "Journey data with start/end locations",
    icon: "pi-map-marker"
  },
  {
    id: "events",
    label: "Events",
    description: "Driver behavior events",
    icon: "pi-exclamation-triangle"
  },
  {
    id: "telemetry",
    label: "Telemetry",
    description: "Real-time sensor data",
    icon: "pi-chart-line"
  },
  {
    id: "alerts",
    label: "Alerts",
    description: "System alerts and notifications",
    icon: "pi-bell"
  }
];
var ChatSummaryHeaderComponent = class _ChatSummaryHeaderComponent {
  vehiclePanel;
  datePanel;
  dataTypesPanel;
  summary = input.required(...ngDevMode ? [{ debugName: "summary" }] : []);
  availableVehicles = input([], ...ngDevMode ? [{ debugName: "availableVehicles" }] : []);
  selectedVehicleIds = input([], ...ngDevMode ? [{ debugName: "selectedVehicleIds" }] : []);
  collectingDataTypes = input([], ...ngDevMode ? [{ debugName: "collectingDataTypes" }] : []);
  // Data types currently being collected
  // Outputs for editing
  dateRangeClicked = output();
  vehiclesChanged = output();
  dateRangeChanged = output();
  dataTypesClicked = output();
  dataTypesChanged = output();
  // New data types to add
  // Local state for vehicle selection
  localSelectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "localSelectedIds" }] : []);
  // Local state for date range editing
  localDateRange = signal(null, ...ngDevMode ? [{ debugName: "localDateRange" }] : []);
  // Local state for data type selection
  localSelectedDataTypes = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "localSelectedDataTypes" }] : []);
  // Today's date for max date picker restriction
  today = /* @__PURE__ */ new Date();
  hasDateRange = computed(() => this.summary().dateRange !== null, ...ngDevMode ? [{ debugName: "hasDateRange" }] : []);
  dateRangeText = computed(() => {
    const range = this.summary().dateRange;
    if (!range)
      return "Not selected";
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      });
    };
    const start = formatDate(range.start);
    const end = formatDate(range.end);
    if (start === end) {
      return start;
    }
    return `${start} - ${end}`;
  }, ...ngDevMode ? [{ debugName: "dateRangeText" }] : []);
  vehicleText = computed(() => {
    const count = this.summary().vehicleCount;
    if (count === 0)
      return "None selected";
    if (count === 1)
      return this.summary().vehicleNames[0] || "1 vehicle";
    if (count <= 2)
      return this.summary().vehicleNames.join(", ");
    return `${count} vehicles`;
  }, ...ngDevMode ? [{ debugName: "vehicleText" }] : []);
  dataTypesText = computed(() => {
    const types = this.summary().dataTypes;
    if (types.length === 0)
      return "None";
    return types.map((t) => this.capitalizeFirst(t)).join(", ");
  }, ...ngDevMode ? [{ debugName: "dataTypesText" }] : []);
  confidenceLevel = computed(() => {
    const confidence = this.summary().queryConfidence;
    if (confidence >= 90)
      return "high";
    if (confidence >= 70)
      return "medium";
    if (confidence >= 50)
      return "building";
    return "low";
  }, ...ngDevMode ? [{ debugName: "confidenceLevel" }] : []);
  confidenceLabel = computed(() => {
    const level = this.confidenceLevel();
    switch (level) {
      case "high":
        return "Ready";
      case "medium":
        return "Good";
      case "building":
        return "Building";
      default:
        return "Starting";
    }
  }, ...ngDevMode ? [{ debugName: "confidenceLabel" }] : []);
  showConfidence = computed(() => this.summary().currentQuery.length > 0, ...ngDevMode ? [{ debugName: "showConfidence" }] : []);
  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // Computed for local vehicle options with selection state
  localVehicleOptions = computed(() => {
    const available = this.availableVehicles();
    const selectedIds = this.localSelectedIds();
    return available.map((v) => __spreadProps(__spreadValues({}, v), {
      selected: selectedIds.has(v.id)
    }));
  }, ...ngDevMode ? [{ debugName: "localVehicleOptions" }] : []);
  // Handle date item click - opens date picker panel
  onDateClick(event) {
    this.datePanel?.toggle(event);
  }
  // Handle vehicle item click - opens vehicle selection panel
  onVehicleClick(event) {
    this.vehiclePanel?.toggle(event);
  }
  // Toggle individual vehicle selection
  toggleVehicle(vehicleId) {
    this.localSelectedIds.update((ids) => {
      const newIds = new Set(ids);
      if (newIds.has(vehicleId)) {
        newIds.delete(vehicleId);
      } else {
        newIds.add(vehicleId);
      }
      return newIds;
    });
  }
  // Check if a vehicle is selected
  isVehicleSelected(vehicleId) {
    return this.localSelectedIds().has(vehicleId);
  }
  // Apply vehicle selection changes
  applyVehicleChanges() {
    const selectedIds = Array.from(this.localSelectedIds());
    this.vehiclesChanged.emit(selectedIds);
    this.vehiclePanel?.hide();
  }
  // Cancel vehicle selection changes
  cancelVehicleChanges() {
    const ids = this.selectedVehicleIds();
    this.localSelectedIds.set(new Set(ids));
    this.vehiclePanel?.hide();
  }
  // Handle date range selection - called on each date selection in range mode
  onDateRangeSelect(_date) {
  }
  // Apply date range changes
  applyDateChanges() {
    const range = this.localDateRange();
    if (range !== null && range.length === 2 && range[0] !== void 0 && range[1] !== void 0) {
      this.dateRangeChanged.emit({ start: range[0], end: range[1] });
    }
    this.datePanel?.hide();
  }
  // Cancel date range changes
  cancelDateChanges() {
    const range = this.summary().dateRange;
    if (range) {
      this.localDateRange.set([range.start, range.end]);
    } else {
      this.localDateRange.set(null);
    }
    this.datePanel?.hide();
  }
  // ============================================================================
  // Data Types Panel Methods
  // ============================================================================
  // Available data type options
  availableDataTypeOptions = computed(() => DEFAULT_DATA_TYPES2, ...ngDevMode ? [{ debugName: "availableDataTypeOptions" }] : []);
  // Check if a data type is currently being collected
  isDataTypeCollecting(dataTypeId) {
    return this.collectingDataTypes().includes(dataTypeId);
  }
  // Check if a data type is selected
  isDataTypeSelected(dataTypeId) {
    return this.localSelectedDataTypes().has(dataTypeId);
  }
  // Check if there are any collecting data types
  hasCollectingDataTypes = computed(() => this.collectingDataTypes().length > 0, ...ngDevMode ? [{ debugName: "hasCollectingDataTypes" }] : []);
  // Count of new data types to add (excluding already collecting)
  newDataTypeSelectionCount = computed(() => {
    const selected = this.localSelectedDataTypes();
    const collecting = new Set(this.collectingDataTypes());
    const currentTypes = new Set(this.summary().dataTypes);
    return Array.from(selected).filter((id) => !collecting.has(id) && !currentTypes.has(id)).length;
  }, ...ngDevMode ? [{ debugName: "newDataTypeSelectionCount" }] : []);
  // Handle data types click - opens data types panel
  onDataTypesClick(event) {
    this.dataTypesPanel?.toggle(event);
  }
  // Toggle individual data type selection
  toggleDataType(dataTypeId) {
    if (this.isDataTypeCollecting(dataTypeId)) {
      return;
    }
    this.localSelectedDataTypes.update((ids) => {
      const newIds = new Set(ids);
      if (newIds.has(dataTypeId)) {
        newIds.delete(dataTypeId);
      } else {
        newIds.add(dataTypeId);
      }
      return newIds;
    });
  }
  // Apply data type changes
  applyDataTypeChanges() {
    const collecting = new Set(this.collectingDataTypes());
    const currentTypes = new Set(this.summary().dataTypes);
    const newTypes = Array.from(this.localSelectedDataTypes()).filter((id) => !collecting.has(id) && !currentTypes.has(id));
    if (newTypes.length > 0) {
      this.dataTypesChanged.emit(newTypes);
    }
    this.dataTypesPanel?.hide();
  }
  // Cancel data type changes
  cancelDataTypeChanges() {
    const currentTypes = this.summary().dataTypes;
    const collecting = this.collectingDataTypes();
    const combined = /* @__PURE__ */ new Set([...currentTypes, ...collecting]);
    this.localSelectedDataTypes.set(combined);
    this.dataTypesPanel?.hide();
  }
  static \u0275fac = function ChatSummaryHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatSummaryHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatSummaryHeaderComponent, selectors: [["app-chat-summary-header"]], viewQuery: function ChatSummaryHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c07, 5);
      \u0275\u0275viewQuery(_c14, 5);
      \u0275\u0275viewQuery(_c22, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.vehiclePanel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datePanel = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dataTypesPanel = _t.first);
    }
  }, inputs: { summary: [1, "summary"], availableVehicles: [1, "availableVehicles"], selectedVehicleIds: [1, "selectedVehicleIds"], collectingDataTypes: [1, "collectingDataTypes"] }, outputs: { dateRangeClicked: "dateRangeClicked", vehiclesChanged: "vehiclesChanged", dateRangeChanged: "dateRangeChanged", dataTypesClicked: "dataTypesClicked", dataTypesChanged: "dataTypesChanged" }, decls: 63, vars: 24, consts: [["datePanel", ""], ["vehiclePanel", ""], ["dataTypesPanel", ""], [1, "chat-summary-header"], [1, "header-content"], [1, "header-title"], [1, "pi", "pi-chart-bar"], [1, "summary-items"], ["type", "button", "title", "Click to change date range", 1, "summary-item", "clickable", 3, "click"], [1, "pi", "pi-calendar"], [1, "summary-value"], [1, "pi", "pi-chevron-down", "edit-icon"], ["type", "button", "title", "Click to edit vehicle selection", 1, "summary-item", "clickable", 3, "click"], [1, "pi", "pi-car"], ["type", "button", "title", "Click to edit data types", 1, "summary-item", "clickable", 3, "click"], [1, "pi", "pi-database"], [1, "confidence-badge"], ["styleClass", "header-edit-panel date-panel"], [1, "panel-content"], [1, "panel-header"], [1, "panel-body"], ["selectionMode", "range", "dateFormat", "M d", 3, "ngModelChange", "onSelect", "ngModel", "inline", "showButtonBar", "numberOfMonths", "maxDate"], [1, "panel-footer"], ["label", "Cancel", "severity", "secondary", "size", "small", 3, "onClick", "text"], ["label", "Apply", "severity", "primary", "size", "small", 3, "onClick"], ["styleClass", "header-edit-panel vehicle-panel"], [1, "selection-count"], [1, "panel-body", "vehicle-list"], [1, "vehicle-item"], [1, "empty-state"], ["label", "Apply", "severity", "primary", "size", "small", 3, "onClick", "disabled"], ["styleClass", "header-edit-panel data-types-panel"], [1, "panel-body", "data-types-list"], [1, "data-type-item", 3, "collecting", "selected"], ["severity", "primary", "size", "small", 3, "onClick", "label", "disabled"], [1, "confidence-value"], [1, "confidence-label"], [1, "vehicle-item", 3, "click"], [3, "ngModelChange", "ngModel", "binary", "inputId"], [1, "vehicle-name", 3, "for"], [1, "data-type-item", 3, "click"], [1, "pi", "pi-spin", "pi-spinner", "collecting-icon"], [3, "ngModel", "binary", "inputId", "disabled"], [1, "data-type-info"], [1, "data-type-name", 3, "for"], [1, "data-type-description"], [3, "ngModelChange", "ngModel", "binary", "inputId", "disabled"]], template: function ChatSummaryHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 3)(1, "div", 4)(2, "div", 5);
      \u0275\u0275element(3, "i", 6);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Report Builder");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
      \u0275\u0275listener("click", function ChatSummaryHeaderComponent_Template_button_click_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDateClick($event));
      });
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275elementStart(9, "span", 10);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 12);
      \u0275\u0275listener("click", function ChatSummaryHeaderComponent_Template_button_click_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onVehicleClick($event));
      });
      \u0275\u0275element(13, "i", 13);
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275listener("click", function ChatSummaryHeaderComponent_Template_button_click_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDataTypesClick($event));
      });
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementStart(19, "span", 10);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, ChatSummaryHeaderComponent_Conditional_22_Template, 5, 3, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p-popover", 17, 0)(25, "div", 18)(26, "div", 19)(27, "h4");
      \u0275\u0275text(28, "Change Date Range");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 20)(30, "p-datepicker", 21);
      \u0275\u0275twoWayListener("ngModelChange", function ChatSummaryHeaderComponent_Template_p_datepicker_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.localDateRange, $event) || (ctx.localDateRange = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onSelect", function ChatSummaryHeaderComponent_Template_p_datepicker_onSelect_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDateRangeSelect($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 22)(32, "p-button", 23);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancelDateChanges());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p-button", 24);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyDateChanges());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "p-popover", 25, 1)(36, "div", 18)(37, "div", 19)(38, "h4");
      \u0275\u0275text(39, "Select Vehicles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 26);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 27);
      \u0275\u0275repeaterCreate(43, ChatSummaryHeaderComponent_For_44_Template, 4, 5, "div", 28, _forTrack07, false, ChatSummaryHeaderComponent_ForEmpty_45_Template, 2, 0, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 22)(47, "p-button", 23);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancelVehicleChanges());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p-button", 30);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyVehicleChanges());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "p-popover", 31, 2)(51, "div", 18)(52, "div", 19)(53, "h4");
      \u0275\u0275text(54, "Select Data Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 26);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 32);
      \u0275\u0275repeaterCreate(58, ChatSummaryHeaderComponent_For_59_Template, 10, 11, "div", 33, _forTrack07);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 22)(61, "p-button", 23);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancelDataTypeChanges());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p-button", 34);
      \u0275\u0275listener("onClick", function ChatSummaryHeaderComponent_Template_p_button_onClick_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyDataTypeChanges());
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("empty", !ctx.hasDateRange());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.dateRangeText());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("empty", ctx.summary().vehicleCount === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.vehicleText());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("empty", ctx.summary().dataTypes.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.dataTypesText());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showConfidence() ? 22 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.localDateRange);
      \u0275\u0275property("inline", true)("showButtonBar", false)("numberOfMonths", 1)("maxDate", ctx.today);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.localSelectedIds().size, " selected");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.localVehicleOptions());
      \u0275\u0275advance(4);
      \u0275\u0275property("text", true);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.localSelectedIds().size === 0);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.newDataTypeSelectionCount(), " to add");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.availableDataTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.hasCollectingDataTypes() ? "Add to Collection" : "Apply")("disabled", ctx.newDataTypeSelectionCount() === 0);
    }
  }, dependencies: [
    CommonModule,
    PopoverModule,
    Popover,
    CheckboxModule,
    Checkbox,
    ButtonModule,
    Button,
    FormsModule,
    NgControlStatus,
    NgModel,
    DatePickerModule,
    DatePicker
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.chat-summary-header[_ngcontent-%COMP%] {\n  background: var(--color-primary-color, linear-gradient(135deg, #1e40af 0%, #3b82f6 100%));\n  color: var(--color-primary-contrast, #ffffff);\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.header-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.summary-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background-color: rgba(255, 255, 255, 0.15);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n}\n.summary-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n}\n.summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.summary-item[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  margin-left: 0.125rem;\n}\n.summary-item.empty[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.summary-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.15s ease;\n}\n.summary-item.clickable[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.summary-item.clickable[_ngcontent-%COMP%]:hover   .edit-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.summary-item.clickable[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.summary-item.clickable[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(255, 255, 255, 0.5);\n  outline-offset: 2px;\n}\n.confidence-badge[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  margin-left: auto;\n}\n.confidence-badge[data-level=high][_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.2);\n  color: #bbf7d0;\n}\n.confidence-badge[data-level=medium][_ngcontent-%COMP%] {\n  background-color: rgba(234, 179, 8, 0.2);\n  color: #fef08a;\n}\n.confidence-badge[data-level=building][_ngcontent-%COMP%] {\n  background-color: rgba(59, 130, 246, 0.2);\n  color: #bfdbfe;\n}\n.confidence-badge[data-level=low][_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.confidence-badge[_ngcontent-%COMP%]   .confidence-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1;\n}\n.confidence-badge[_ngcontent-%COMP%]   .confidence-label[_ngcontent-%COMP%] {\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  opacity: 0.9;\n}\n@media (max-width: 640px) {\n  .header-content[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .header-title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .summary-items[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .summary-item[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n    padding: 0.1875rem 0.5rem;\n  }\n}\n  .header-edit-panel .p-popover-content {\n  padding: 0;\n}\n  .header-edit-panel .panel-content {\n  min-width: 280px;\n}\n  .header-edit-panel .panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n  .header-edit-panel .panel-header h4 {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n  .header-edit-panel .panel-header .selection-count {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n  .header-edit-panel .panel-body {\n  padding: 0.75rem 1rem;\n  max-height: 300px;\n  overflow-y: auto;\n}\n  .header-edit-panel .panel-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid var(--surface-border);\n}\n  .header-edit-panel .vehicle-list {\n  padding: 0.5rem;\n}\n  .header-edit-panel .vehicle-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n  .header-edit-panel .vehicle-item:hover {\n  background-color: var(--surface-hover);\n}\n  .header-edit-panel .vehicle-item .vehicle-name {\n  font-size: 0.875rem;\n  color: var(--text-color);\n  cursor: pointer;\n  flex: 1;\n}\n  .header-edit-panel .empty-state {\n  text-align: center;\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n  .header-edit-panel.date-panel .panel-body {\n  padding: 0.5rem;\n}\n  .header-edit-panel.data-types-panel .data-types-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.5rem;\n}\n  .header-edit-panel.data-types-panel .data-type-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  padding: 0.625rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease, border-color 0.15s ease;\n  border: 1.5px solid transparent;\n}\n  .header-edit-panel.data-types-panel .data-type-item:hover:not(.collecting) {\n  background-color: var(--surface-hover);\n}\n  .header-edit-panel.data-types-panel .data-type-item.selected:not(.collecting) {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n  .header-edit-panel.data-types-panel .data-type-item.collecting {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n  cursor: not-allowed;\n  opacity: 0.9;\n}\n  .header-edit-panel.data-types-panel .data-type-item.collecting .data-type-description {\n  color: #b45309;\n  font-style: italic;\n}\n  .header-edit-panel.data-types-panel .data-type-item .collecting-icon {\n  font-size: 1rem;\n  color: #f59e0b;\n  margin-top: 0.125rem;\n}\n  .header-edit-panel.data-types-panel .data-type-item .data-type-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  flex: 1;\n}\n  .header-edit-panel.data-types-panel .data-type-item .data-type-name {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n  cursor: pointer;\n}\n  .header-edit-panel.data-types-panel .data-type-item .data-type-name i {\n  font-size: 0.875rem;\n  color: var(--primary-color);\n}\n  .header-edit-panel.data-types-panel .data-type-item .data-type-description {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=chat-summary-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatSummaryHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-chat-summary-header", imports: [
      CommonModule,
      PopoverModule,
      CheckboxModule,
      ButtonModule,
      FormsModule,
      DatePickerModule
    ], template: `<header class="chat-summary-header">
  <div class="header-content">
    <!-- Report Title -->
    <div class="header-title">
      <i class="pi pi-chart-bar"></i>
      <span>Report Builder</span>
    </div>

    <!-- Summary Items -->
    <div class="summary-items">
      <!-- Date Range (clickable) -->
      <button
        class="summary-item clickable"
        [class.empty]="!hasDateRange()"
        (click)="onDateClick($event)"
        type="button"
        title="Click to change date range"
      >
        <i class="pi pi-calendar"></i>
        <span class="summary-value">{{ dateRangeText() }}</span>
        <i class="pi pi-chevron-down edit-icon"></i>
      </button>

      <!-- Vehicles (clickable) -->
      <button
        class="summary-item clickable"
        [class.empty]="summary().vehicleCount === 0"
        (click)="onVehicleClick($event)"
        type="button"
        title="Click to edit vehicle selection"
      >
        <i class="pi pi-car"></i>
        <span class="summary-value">{{ vehicleText() }}</span>
        <i class="pi pi-chevron-down edit-icon"></i>
      </button>

      <!-- Data Types (clickable) -->
      <button
        class="summary-item clickable"
        [class.empty]="summary().dataTypes.length === 0"
        (click)="onDataTypesClick($event)"
        type="button"
        title="Click to edit data types"
      >
        <i class="pi pi-database"></i>
        <span class="summary-value">{{ dataTypesText() }}</span>
        <i class="pi pi-chevron-down edit-icon"></i>
      </button>
    </div>

    <!-- Confidence Badge -->
    @if (showConfidence()) {
      <div class="confidence-badge" [attr.data-level]="confidenceLevel()">
        <span class="confidence-value">{{ summary().queryConfidence }}%</span>
        <span class="confidence-label">{{ confidenceLabel() }}</span>
      </div>
    }
  </div>
</header>

<!-- Date Range Panel -->
<p-popover #datePanel styleClass="header-edit-panel date-panel">
  <div class="panel-content">
    <div class="panel-header">
      <h4>Change Date Range</h4>
    </div>
    <div class="panel-body">
      <p-datepicker
        [(ngModel)]="localDateRange"
        selectionMode="range"
        [inline]="true"
        [showButtonBar]="false"
        [numberOfMonths]="1"
        dateFormat="M d"
        [maxDate]="today"
        (onSelect)="onDateRangeSelect($event)"
      />
    </div>
    <div class="panel-footer">
      <p-button
        label="Cancel"
        severity="secondary"
        [text]="true"
        size="small"
        (onClick)="cancelDateChanges()"
      />
      <p-button
        label="Apply"
        severity="primary"
        size="small"
        (onClick)="applyDateChanges()"
      />
    </div>
  </div>
</p-popover>

<!-- Vehicle Selection Panel -->
<p-popover #vehiclePanel styleClass="header-edit-panel vehicle-panel">
  <div class="panel-content">
    <div class="panel-header">
      <h4>Select Vehicles</h4>
      <span class="selection-count"
        >{{ localSelectedIds().size }} selected</span
      >
    </div>
    <div class="panel-body vehicle-list">
      @for (vehicle of localVehicleOptions(); track vehicle.id) {
        <div class="vehicle-item" (click)="toggleVehicle(vehicle.id)">
          <p-checkbox
            [ngModel]="isVehicleSelected(vehicle.id)"
            [binary]="true"
            [inputId]="'vehicle-' + vehicle.id"
            (ngModelChange)="toggleVehicle(vehicle.id)"
          />
          <label [for]="'vehicle-' + vehicle.id" class="vehicle-name">
            {{ vehicle.name }}
          </label>
        </div>
      } @empty {
        <div class="empty-state">No vehicles available</div>
      }
    </div>
    <div class="panel-footer">
      <p-button
        label="Cancel"
        severity="secondary"
        [text]="true"
        size="small"
        (onClick)="cancelVehicleChanges()"
      />
      <p-button
        label="Apply"
        severity="primary"
        size="small"
        [disabled]="localSelectedIds().size === 0"
        (onClick)="applyVehicleChanges()"
      />
    </div>
  </div>
</p-popover>

<!-- Data Types Selection Panel -->
<p-popover #dataTypesPanel styleClass="header-edit-panel data-types-panel">
  <div class="panel-content">
    <div class="panel-header">
      <h4>Select Data Types</h4>
      <span class="selection-count"
        >{{ newDataTypeSelectionCount() }} to add</span
      >
    </div>
    <div class="panel-body data-types-list">
      @for (dataType of availableDataTypeOptions(); track dataType.id) {
        <div
          class="data-type-item"
          [class.collecting]="isDataTypeCollecting(dataType.id)"
          [class.selected]="isDataTypeSelected(dataType.id)"
          (click)="toggleDataType(dataType.id)"
        >
          @if (isDataTypeCollecting(dataType.id)) {
            <i class="pi pi-spin pi-spinner collecting-icon"></i>
          } @else {
            <p-checkbox
              [ngModel]="isDataTypeSelected(dataType.id)"
              [binary]="true"
              [inputId]="'datatype-' + dataType.id"
              [disabled]="isDataTypeCollecting(dataType.id)"
              (ngModelChange)="toggleDataType(dataType.id)"
            />
          }
          <div class="data-type-info">
            <label [for]="'datatype-' + dataType.id" class="data-type-name">
              <i class="pi {{ dataType.icon }}"></i>
              {{ dataType.label }}
            </label>
            <span class="data-type-description">
              @if (isDataTypeCollecting(dataType.id)) {
                Collecting...
              } @else {
                {{ dataType.description }}
              }
            </span>
          </div>
        </div>
      }
    </div>
    <div class="panel-footer">
      <p-button
        label="Cancel"
        severity="secondary"
        [text]="true"
        size="small"
        (onClick)="cancelDataTypeChanges()"
      />
      <p-button
        [label]="hasCollectingDataTypes() ? 'Add to Collection' : 'Apply'"
        severity="primary"
        size="small"
        [disabled]="newDataTypeSelectionCount() === 0"
        (onClick)="applyDataTypeChanges()"
      />
    </div>
  </div>
</p-popover>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/chat-summary-header/chat-summary-header.component.scss */\n:host {\n  display: block;\n}\n.chat-summary-header {\n  background: var(--color-primary-color, linear-gradient(135deg, #1e40af 0%, #3b82f6 100%));\n  color: var(--color-primary-contrast, #ffffff);\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.header-title i {\n  font-size: 1.125rem;\n}\n.summary-items {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.summary-item {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.625rem;\n  background-color: rgba(255, 255, 255, 0.15);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  border: none;\n  color: inherit;\n  font-family: inherit;\n}\n.summary-item i {\n  font-size: 0.75rem;\n  opacity: 0.9;\n}\n.summary-item .summary-value {\n  font-weight: 500;\n}\n.summary-item .edit-icon {\n  font-size: 0.625rem;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  margin-left: 0.125rem;\n}\n.summary-item.empty {\n  opacity: 0.6;\n  background-color: rgba(255, 255, 255, 0.08);\n}\n.summary-item.clickable {\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.15s ease;\n}\n.summary-item.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.summary-item.clickable:hover .edit-icon {\n  opacity: 1;\n}\n.summary-item.clickable:active {\n  transform: scale(0.97);\n}\n.summary-item.clickable:focus {\n  outline: 2px solid rgba(255, 255, 255, 0.5);\n  outline-offset: 2px;\n}\n.confidence-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  margin-left: auto;\n}\n.confidence-badge[data-level=high] {\n  background-color: rgba(34, 197, 94, 0.2);\n  color: #bbf7d0;\n}\n.confidence-badge[data-level=medium] {\n  background-color: rgba(234, 179, 8, 0.2);\n  color: #fef08a;\n}\n.confidence-badge[data-level=building] {\n  background-color: rgba(59, 130, 246, 0.2);\n  color: #bfdbfe;\n}\n.confidence-badge[data-level=low] {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n}\n.confidence-badge .confidence-value {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1;\n}\n.confidence-badge .confidence-label {\n  font-size: 0.5625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  opacity: 0.9;\n}\n@media (max-width: 640px) {\n  .header-content {\n    gap: 0.5rem;\n  }\n  .header-title {\n    font-size: 0.875rem;\n  }\n  .summary-items {\n    gap: 0.5rem;\n  }\n  .summary-item {\n    font-size: 0.6875rem;\n    padding: 0.1875rem 0.5rem;\n  }\n}\n::ng-deep .header-edit-panel .p-popover-content {\n  padding: 0;\n}\n::ng-deep .header-edit-panel .panel-content {\n  min-width: 280px;\n}\n::ng-deep .header-edit-panel .panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n::ng-deep .header-edit-panel .panel-header h4 {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n::ng-deep .header-edit-panel .panel-header .selection-count {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n::ng-deep .header-edit-panel .panel-body {\n  padding: 0.75rem 1rem;\n  max-height: 300px;\n  overflow-y: auto;\n}\n::ng-deep .header-edit-panel .panel-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid var(--surface-border);\n}\n::ng-deep .header-edit-panel .vehicle-list {\n  padding: 0.5rem;\n}\n::ng-deep .header-edit-panel .vehicle-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n::ng-deep .header-edit-panel .vehicle-item:hover {\n  background-color: var(--surface-hover);\n}\n::ng-deep .header-edit-panel .vehicle-item .vehicle-name {\n  font-size: 0.875rem;\n  color: var(--text-color);\n  cursor: pointer;\n  flex: 1;\n}\n::ng-deep .header-edit-panel .empty-state {\n  text-align: center;\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n::ng-deep .header-edit-panel.date-panel .panel-body {\n  padding: 0.5rem;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-types-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.5rem;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  padding: 0.625rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease, border-color 0.15s ease;\n  border: 1.5px solid transparent;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item:hover:not(.collecting) {\n  background-color: var(--surface-hover);\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item.selected:not(.collecting) {\n  background-color: rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n  border-color: var(--color-primary-color, #3b82f6);\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item.collecting {\n  background-color: #fef3c7;\n  border-color: #f59e0b;\n  cursor: not-allowed;\n  opacity: 0.9;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item.collecting .data-type-description {\n  color: #b45309;\n  font-style: italic;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item .collecting-icon {\n  font-size: 1rem;\n  color: #f59e0b;\n  margin-top: 0.125rem;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item .data-type-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  flex: 1;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item .data-type-name {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-color);\n  cursor: pointer;\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item .data-type-name i {\n  font-size: 0.875rem;\n  color: var(--primary-color);\n}\n::ng-deep .header-edit-panel.data-types-panel .data-type-item .data-type-description {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  line-height: 1.3;\n}\n/*# sourceMappingURL=chat-summary-header.component.css.map */\n"] }]
  }], null, { vehiclePanel: [{
    type: ViewChild,
    args: ["vehiclePanel"]
  }], datePanel: [{
    type: ViewChild,
    args: ["datePanel"]
  }], dataTypesPanel: [{
    type: ViewChild,
    args: ["dataTypesPanel"]
  }], summary: [{ type: Input, args: [{ isSignal: true, alias: "summary", required: true }] }], availableVehicles: [{ type: Input, args: [{ isSignal: true, alias: "availableVehicles", required: false }] }], selectedVehicleIds: [{ type: Input, args: [{ isSignal: true, alias: "selectedVehicleIds", required: false }] }], collectingDataTypes: [{ type: Input, args: [{ isSignal: true, alias: "collectingDataTypes", required: false }] }], dateRangeClicked: [{ type: Output, args: ["dateRangeClicked"] }], vehiclesChanged: [{ type: Output, args: ["vehiclesChanged"] }], dateRangeChanged: [{ type: Output, args: ["dateRangeChanged"] }], dataTypesClicked: [{ type: Output, args: ["dataTypesClicked"] }], dataTypesChanged: [{ type: Output, args: ["dataTypesChanged"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatSummaryHeaderComponent, { className: "ChatSummaryHeaderComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/chat-summary-header/chat-summary-header.component.ts", lineNumber: 78 });
})();

// src/app/features/development/components/analytical-report/chat/components/chat-footer-preview/chat-footer-preview.component.ts
function ChatFooterPreviewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "(click to edit)");
    \u0275\u0275elementEnd();
  }
}
function ChatFooterPreviewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 12);
    \u0275\u0275element(2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-level", ctx_r0.confidenceLevel());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.confidence(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.confidence(), "% - ", ctx_r0.confidenceLabel());
  }
}
function ChatFooterPreviewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ChatFooterPreviewComponent_Conditional_9_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editedQuery, $event) || (ctx_r0.editedQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function ChatFooterPreviewComponent_Conditional_9_Template_textarea_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 16)(3, "p-button", 17);
    \u0275\u0275listener("onClick", function ChatFooterPreviewComponent_Conditional_9_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 18);
    \u0275\u0275listener("onClick", function ChatFooterPreviewComponent_Conditional_9_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveEdit());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editedQuery);
    \u0275\u0275property("autoResize", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true);
  }
}
function ChatFooterPreviewComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.query());
  }
}
function ChatFooterPreviewComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " Start chatting to build your analysis query... ");
    \u0275\u0275elementEnd();
  }
}
function ChatFooterPreviewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ChatFooterPreviewComponent_Conditional_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onQueryClick());
    })("keydown.enter", function ChatFooterPreviewComponent_Conditional_10_Template_div_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onQueryClick());
    });
    \u0275\u0275conditionalCreate(1, ChatFooterPreviewComponent_Conditional_10_Conditional_1_Template, 2, 1, "p", 20)(2, ChatFooterPreviewComponent_Conditional_10_Conditional_2_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("empty", !ctx_r0.hasQuery())("clickable", ctx_r0.hasQuery());
    \u0275\u0275attribute("tabindex", ctx_r0.hasQuery() ? 0 : null)("role", ctx_r0.hasQuery() ? "button" : null)("aria-label", ctx_r0.hasQuery() ? "Click to edit query" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasQuery() ? 1 : 2);
  }
}
function ChatFooterPreviewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "p-progressBar", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.collectionProgress())("showValue", true);
  }
}
var ChatFooterPreviewComponent = class _ChatFooterPreviewComponent {
  // Inputs
  query = input("", ...ngDevMode ? [{ debugName: "query" }] : []);
  confidence = input(0, ...ngDevMode ? [{ debugName: "confidence" }] : []);
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isCollecting = input(false, ...ngDevMode ? [{ debugName: "isCollecting" }] : []);
  collectionProgress = input(0, ...ngDevMode ? [{ debugName: "collectionProgress" }] : []);
  // Outputs
  generateReport = output();
  queryChanged = output();
  // Local state for editing
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : []);
  editedQuery = signal("", ...ngDevMode ? [{ debugName: "editedQuery" }] : []);
  // Computed
  hasQuery = computed(() => this.query().length > 0, ...ngDevMode ? [{ debugName: "hasQuery" }] : []);
  // Generate button is enabled as long as there's a query with sufficient confidence
  // Loading/collecting states don't block the button - user can still click to generate
  canGenerate = computed(() => this.hasQuery() && this.confidence() >= 50, ...ngDevMode ? [{ debugName: "canGenerate" }] : []);
  confidenceLevel = computed(() => {
    const conf = this.confidence();
    if (conf >= 90)
      return "high";
    if (conf >= 70)
      return "medium";
    if (conf >= 50)
      return "building";
    return "low";
  }, ...ngDevMode ? [{ debugName: "confidenceLevel" }] : []);
  confidenceLabel = computed(() => {
    const level = this.confidenceLevel();
    switch (level) {
      case "high":
        return "Ready to generate";
      case "medium":
        return "Almost ready";
      case "building":
        return "Continue refining";
      default:
        return "Keep chatting...";
    }
  }, ...ngDevMode ? [{ debugName: "confidenceLabel" }] : []);
  // Show full query when editing, otherwise show preview
  queryPreview = computed(() => {
    const q = this.query();
    if (q.length <= 150)
      return q;
    return q.substring(0, 147) + "...";
  }, ...ngDevMode ? [{ debugName: "queryPreview" }] : []);
  buttonLabel = computed(() => {
    if (this.isCollecting())
      return "Collecting Data...";
    if (this.isLoading())
      return "Generating...";
    return "Generate Report";
  }, ...ngDevMode ? [{ debugName: "buttonLabel" }] : []);
  onGenerateClick() {
    if (this.canGenerate()) {
      this.generateReport.emit();
    }
  }
  // Start editing the query
  onQueryClick() {
    if (!this.hasQuery())
      return;
    this.editedQuery.set(this.query());
    this.isEditing.set(true);
  }
  // Save edited query
  saveEdit() {
    const newQuery = this.editedQuery().trim();
    if (newQuery.length > 0) {
      this.queryChanged.emit(newQuery);
    }
    this.isEditing.set(false);
  }
  // Cancel editing
  cancelEdit() {
    this.isEditing.set(false);
    this.editedQuery.set("");
  }
  // Handle Enter key to save (Shift+Enter for newline)
  onKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.saveEdit();
    } else if (event.key === "Escape") {
      this.cancelEdit();
    }
  }
  static \u0275fac = function ChatFooterPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatFooterPreviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatFooterPreviewComponent, selectors: [["app-chat-footer-preview"]], inputs: { query: [1, "query"], confidence: [1, "confidence"], isLoading: [1, "isLoading"], isCollecting: [1, "isCollecting"], collectionProgress: [1, "collectionProgress"] }, outputs: { generateReport: "generateReport", queryChanged: "queryChanged" }, decls: 14, vars: 7, consts: [[1, "chat-footer-preview"], [1, "query-section"], [1, "query-header"], [1, "query-label"], [1, "pi", "pi-file-edit"], [1, "edit-hint"], [1, "confidence-indicator"], [1, "query-edit-container"], [1, "query-content", 3, "empty", "clickable"], [1, "collection-progress"], [1, "action-section"], ["icon", "pi pi-chart-bar", "styleClass", "generate-button", 3, "onClick", "label", "disabled", "loading"], [1, "confidence-bar"], [1, "confidence-fill"], [1, "confidence-text"], ["pTextarea", "", "rows", "3", "placeholder", "Enter your query...", 1, "query-textarea", 3, "ngModelChange", "keydown", "ngModel", "autoResize"], [1, "edit-actions"], ["icon", "pi pi-times", "label", "Cancel", "severity", "secondary", "size", "small", 3, "onClick", "text"], ["icon", "pi pi-check", "label", "Save", "severity", "primary", "size", "small", 3, "onClick"], [1, "query-content", 3, "click", "keydown.enter"], [1, "query-text"], [1, "query-placeholder"], ["styleClass", "collection-bar", 3, "value", "showValue"]], template: function ChatFooterPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Generated Query");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ChatFooterPreviewComponent_Conditional_7_Template, 2, 0, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ChatFooterPreviewComponent_Conditional_8_Template, 5, 5, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ChatFooterPreviewComponent_Conditional_9_Template, 5, 3, "div", 7)(10, ChatFooterPreviewComponent_Conditional_10_Template, 3, 8, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, ChatFooterPreviewComponent_Conditional_11_Template, 2, 2, "div", 9);
      \u0275\u0275elementStart(12, "div", 10)(13, "p-button", 11);
      \u0275\u0275listener("onClick", function ChatFooterPreviewComponent_Template_p_button_onClick_13_listener() {
        return ctx.onGenerateClick();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.hasQuery() && !ctx.isEditing() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasQuery() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditing() ? 9 : 10);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isCollecting() ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.buttonLabel())("disabled", !ctx.canGenerate())("loading", ctx.isLoading() || ctx.isCollecting());
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    ProgressBarModule,
    ProgressBar,
    TextareaModule,
    Textarea
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.chat-footer-preview[_ngcontent-%COMP%] {\n  background-color: var(--card-background-color, #ffffff);\n  border-top: 1px solid var(--input-border-color, #e2e8f0);\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);\n}\n.query-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.query-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.query-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.query-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.query-label[_ngcontent-%COMP%]   .edit-hint[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 400;\n  text-transform: none;\n  color: var(--text-color-secondary, #94a3b8);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.confidence-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.confidence-indicator[data-level=high][_ngcontent-%COMP%]   .confidence-fill[_ngcontent-%COMP%] {\n  background-color: #22c55e;\n}\n.confidence-indicator[data-level=high][_ngcontent-%COMP%]   .confidence-text[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.confidence-indicator[data-level=medium][_ngcontent-%COMP%]   .confidence-fill[_ngcontent-%COMP%] {\n  background-color: #eab308;\n}\n.confidence-indicator[data-level=medium][_ngcontent-%COMP%]   .confidence-text[_ngcontent-%COMP%] {\n  color: #ca8a04;\n}\n.confidence-indicator[data-level=building][_ngcontent-%COMP%]   .confidence-fill[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-color, #3b82f6);\n}\n.confidence-indicator[data-level=building][_ngcontent-%COMP%]   .confidence-text[_ngcontent-%COMP%] {\n  color: var(--color-primary-color, #2563eb);\n}\n.confidence-indicator[data-level=low][_ngcontent-%COMP%]   .confidence-fill[_ngcontent-%COMP%] {\n  background-color: var(--text-color-secondary, #94a3b8);\n}\n.confidence-indicator[data-level=low][_ngcontent-%COMP%]   .confidence-text[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary, #64748b);\n}\n.confidence-bar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 4px;\n  background-color: var(--input-border-color, #e2e8f0);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.confidence-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  transition: width 0.3s ease;\n}\n.confidence-text[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.query-content[_ngcontent-%COMP%] {\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0.5rem;\n  padding: 0.625rem 0.75rem;\n  min-height: 2.5rem;\n  max-height: 6rem;\n  overflow-y: auto;\n}\n.query-content.empty[_ngcontent-%COMP%] {\n  background-color: var(--surface-hover, #f1f5f9);\n  border-style: dashed;\n}\n.query-content.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.query-content.clickable[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-color, #3b82f6);\n  background-color: var(--surface-hover, #f8fafc);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n}\n.query-content.clickable[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.query-section[_ngcontent-%COMP%]:hover   .edit-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.query-edit-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.query-edit-container[_ngcontent-%COMP%]   .query-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  resize: none;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n  border-radius: 0.5rem;\n  padding: 0.625rem 0.75rem;\n  background-color: var(--input-background-color, #ffffff);\n  color: var(--text-color, #1e293b);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.query-edit-container[_ngcontent-%COMP%]   .query-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary-color, #2563eb);\n  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3);\n}\n.query-edit-container[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.query-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--text-color, #334155);\n  line-height: 1.5;\n  word-break: break-word;\n}\n.query-placeholder[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary, #94a3b8);\n  font-style: italic;\n}\n.collection-progress[_ngcontent-%COMP%]     .collection-bar {\n  height: 0.375rem;\n  border-radius: 9999px;\n}\n.collection-progress[_ngcontent-%COMP%]     .collection-bar .p-progressbar-value {\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-primary-color, #3b82f6),\n      var(--color-primary-color, #60a5fa));\n}\n.action-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.action-section[_ngcontent-%COMP%]     .generate-button {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 100%);\n  border: none;\n  font-weight: 600;\n  padding: 0.625rem 1.5rem;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.action-section[_ngcontent-%COMP%]     .generate-button:not(:disabled):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a 0%,\n      #15803d 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.action-section[_ngcontent-%COMP%]     .generate-button:disabled {\n  background: var(--input-border-color, #e2e8f0);\n  color: var(--text-color-secondary, #94a3b8);\n  cursor: not-allowed;\n}\n.action-section[_ngcontent-%COMP%]     .generate-button .p-button-icon {\n  margin-right: 0.5rem;\n}\n@media (max-width: 640px) {\n  .chat-footer-preview[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n  }\n  .query-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.375rem;\n  }\n  .action-section[_ngcontent-%COMP%]     .generate-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=chat-footer-preview.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatFooterPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-chat-footer-preview", imports: [
      CommonModule,
      FormsModule,
      ButtonModule,
      ProgressBarModule,
      TextareaModule
    ], template: `<footer class="chat-footer-preview">
  <!-- Query Preview Section -->
  <div class="query-section">
    <div class="query-header">
      <div class="query-label">
        <i class="pi pi-file-edit"></i>
        <span>Generated Query</span>
        @if (hasQuery() && !isEditing()) {
          <span class="edit-hint">(click to edit)</span>
        }
      </div>

      @if (hasQuery()) {
        <div class="confidence-indicator" [attr.data-level]="confidenceLevel()">
          <div class="confidence-bar">
            <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->
            <div class="confidence-fill" [style.width.%]="confidence()"></div>
          </div>
          <span class="confidence-text"
            >{{ confidence() }}% - {{ confidenceLabel() }}</span
          >
        </div>
      }
    </div>

    <!-- Editing Mode -->
    @if (isEditing()) {
      <div class="query-edit-container">
        <textarea
          pTextarea
          [(ngModel)]="editedQuery"
          [autoResize]="true"
          rows="3"
          class="query-textarea"
          placeholder="Enter your query..."
          (keydown)="onKeyDown($event)"
        ></textarea>
        <div class="edit-actions">
          <p-button
            icon="pi pi-times"
            label="Cancel"
            severity="secondary"
            [text]="true"
            size="small"
            (onClick)="cancelEdit()"
          />
          <p-button
            icon="pi pi-check"
            label="Save"
            severity="primary"
            size="small"
            (onClick)="saveEdit()"
          />
        </div>
      </div>
    } @else {
      <!-- Display Mode -->
      <div
        class="query-content"
        [class.empty]="!hasQuery()"
        [class.clickable]="hasQuery()"
        (click)="onQueryClick()"
        (keydown.enter)="onQueryClick()"
        [attr.tabindex]="hasQuery() ? 0 : null"
        [attr.role]="hasQuery() ? 'button' : null"
        [attr.aria-label]="hasQuery() ? 'Click to edit query' : null"
      >
        @if (hasQuery()) {
          <p class="query-text">{{ query() }}</p>
        } @else {
          <p class="query-placeholder">
            Start chatting to build your analysis query...
          </p>
        }
      </div>
    }
  </div>

  <!-- Collection Progress (if collecting) -->
  @if (isCollecting()) {
    <div class="collection-progress">
      <p-progressBar
        [value]="collectionProgress()"
        [showValue]="true"
        styleClass="collection-bar"
      ></p-progressBar>
    </div>
  }

  <!-- Generate Button -->
  <div class="action-section">
    <p-button
      [label]="buttonLabel()"
      icon="pi pi-chart-bar"
      [disabled]="!canGenerate()"
      [loading]="isLoading() || isCollecting()"
      (onClick)="onGenerateClick()"
      styleClass="generate-button"
    />
  </div>
</footer>
`, styles: ["/* src/app/features/development/components/analytical-report/chat/components/chat-footer-preview/chat-footer-preview.component.scss */\n:host {\n  display: block;\n}\n.chat-footer-preview {\n  background-color: var(--card-background-color, #ffffff);\n  border-top: 1px solid var(--input-border-color, #e2e8f0);\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);\n}\n.query-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.query-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.query-label {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.query-label i {\n  font-size: 0.875rem;\n}\n.query-label .edit-hint {\n  font-size: 0.625rem;\n  font-weight: 400;\n  text-transform: none;\n  color: var(--text-color-secondary, #94a3b8);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.confidence-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.confidence-indicator[data-level=high] .confidence-fill {\n  background-color: #22c55e;\n}\n.confidence-indicator[data-level=high] .confidence-text {\n  color: #16a34a;\n}\n.confidence-indicator[data-level=medium] .confidence-fill {\n  background-color: #eab308;\n}\n.confidence-indicator[data-level=medium] .confidence-text {\n  color: #ca8a04;\n}\n.confidence-indicator[data-level=building] .confidence-fill {\n  background-color: var(--color-primary-color, #3b82f6);\n}\n.confidence-indicator[data-level=building] .confidence-text {\n  color: var(--color-primary-color, #2563eb);\n}\n.confidence-indicator[data-level=low] .confidence-fill {\n  background-color: var(--text-color-secondary, #94a3b8);\n}\n.confidence-indicator[data-level=low] .confidence-text {\n  color: var(--text-color-secondary, #64748b);\n}\n.confidence-bar {\n  width: 60px;\n  height: 4px;\n  background-color: var(--input-border-color, #e2e8f0);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.confidence-fill {\n  height: 100%;\n  border-radius: 9999px;\n  transition: width 0.3s ease;\n}\n.confidence-text {\n  font-size: 0.6875rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.query-content {\n  background-color: var(--input-background-color, #ffffff);\n  border: 1px solid var(--input-border-color, #e2e8f0);\n  border-radius: 0.5rem;\n  padding: 0.625rem 0.75rem;\n  min-height: 2.5rem;\n  max-height: 6rem;\n  overflow-y: auto;\n}\n.query-content.empty {\n  background-color: var(--surface-hover, #f1f5f9);\n  border-style: dashed;\n}\n.query-content.clickable {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.query-content.clickable:hover {\n  border-color: var(--color-primary-color, #3b82f6);\n  background-color: var(--surface-hover, #f8fafc);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);\n}\n.query-content.clickable:focus {\n  outline: none;\n  border-color: var(--color-primary-color, #3b82f6);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.query-section:hover .edit-hint {\n  opacity: 1;\n}\n.query-edit-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.query-edit-container .query-textarea {\n  width: 100%;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  resize: none;\n  border: 1px solid var(--color-primary-color, #3b82f6);\n  border-radius: 0.5rem;\n  padding: 0.625rem 0.75rem;\n  background-color: var(--input-background-color, #ffffff);\n  color: var(--text-color, #1e293b);\n  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);\n}\n.query-edit-container .query-textarea:focus {\n  outline: none;\n  border-color: var(--color-primary-color, #2563eb);\n  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3);\n}\n.query-edit-container .edit-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.query-text {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--text-color, #334155);\n  line-height: 1.5;\n  word-break: break-word;\n}\n.query-placeholder {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary, #94a3b8);\n  font-style: italic;\n}\n.collection-progress ::ng-deep .collection-bar {\n  height: 0.375rem;\n  border-radius: 9999px;\n}\n.collection-progress ::ng-deep .collection-bar .p-progressbar-value {\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-primary-color, #3b82f6),\n      var(--color-primary-color, #60a5fa));\n}\n.action-section {\n  display: flex;\n  justify-content: flex-end;\n}\n.action-section ::ng-deep .generate-button {\n  background:\n    linear-gradient(\n      135deg,\n      #22c55e 0%,\n      #16a34a 100%);\n  border: none;\n  font-weight: 600;\n  padding: 0.625rem 1.5rem;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease;\n}\n.action-section ::ng-deep .generate-button:not(:disabled):hover {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a 0%,\n      #15803d 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);\n}\n.action-section ::ng-deep .generate-button:disabled {\n  background: var(--input-border-color, #e2e8f0);\n  color: var(--text-color-secondary, #94a3b8);\n  cursor: not-allowed;\n}\n.action-section ::ng-deep .generate-button .p-button-icon {\n  margin-right: 0.5rem;\n}\n@media (max-width: 640px) {\n  .chat-footer-preview {\n    padding: 0.625rem 0.75rem;\n  }\n  .query-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.375rem;\n  }\n  .action-section ::ng-deep .generate-button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=chat-footer-preview.component.css.map */\n"] }]
  }], null, { query: [{ type: Input, args: [{ isSignal: true, alias: "query", required: false }] }], confidence: [{ type: Input, args: [{ isSignal: true, alias: "confidence", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], isCollecting: [{ type: Input, args: [{ isSignal: true, alias: "isCollecting", required: false }] }], collectionProgress: [{ type: Input, args: [{ isSignal: true, alias: "collectionProgress", required: false }] }], generateReport: [{ type: Output, args: ["generateReport"] }], queryChanged: [{ type: Output, args: ["queryChanged"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatFooterPreviewComponent, { className: "ChatFooterPreviewComponent", filePath: "src/app/features/development/components/analytical-report/chat/components/chat-footer-preview/chat-footer-preview.component.ts", lineNumber: 20 });
})();

// src/app/core/services/telemetry-data-collection.service.ts
var TelemetryDataCollectionService = class _TelemetryDataCollectionService {
  http = inject(HttpClient);
  MAX_CONCURRENT_REQUESTS = 10;
  MAX_RETRY_ATTEMPTS = 3;
  RETRY_DELAY_BASE = 1e3;
  // 1 second
  HOURS_24_MS = 24 * 60 * 60 * 1e3;
  progressSubject = new BehaviorSubject({
    totalRequests: 0,
    completedRequests: 0,
    successfulRequests: 0,
    failedRequests: 0,
    percentage: 0,
    message: "Initializing data collection..."
  });
  progress$ = this.progressSubject.asObservable();
  splitInto24HourChunks(startDate, endDate) {
    const chunks = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    let currentStart = new Date(start);
    while (currentStart < end) {
      const currentEnd = new Date(Math.min(currentStart.getTime() + this.HOURS_24_MS, end.getTime()));
      chunks.push({
        start: currentStart.toISOString(),
        end: currentEnd.toISOString()
      });
      currentStart = new Date(currentEnd);
    }
    return chunks;
  }
  createHeaders(authToken) {
    return new HttpHeaders({
      "x-access-token": authToken,
      "Content-Type": "application/json",
      Accept: "application/json"
    });
  }
  buildApiUrl(baseUrl, dataType, vehicleId, start, end) {
    const endpoint = `${baseUrl}/data/history/${dataType}/${vehicleId}`;
    const params = new URLSearchParams({
      start,
      end
    });
    return `${endpoint}?${params.toString()}`;
  }
  async collectVehicleData(dataType, vehicleId, chunk, baseUrl, authToken, retryCount = 0) {
    const headers = this.createHeaders(authToken);
    const url = this.buildApiUrl(baseUrl, dataType, vehicleId, chunk.start, chunk.end);
    try {
      const response = await firstValueFrom(this.http.get(url, { headers }));
      if (isNullOrUndefined(response)) {
        throw new Error("No response received from API");
      }
      return {
        dataType,
        vehicleId,
        data: response,
        chunk
      };
    } catch (error) {
      const httpError = error;
      if (httpError.status === 401 || httpError.status === 403) {
        throw new Error("Authentication failed. Please provide a valid token.");
      }
      if (httpError.status === 429 && retryCount < this.MAX_RETRY_ATTEMPTS) {
        const delay = Math.pow(2, retryCount) * this.RETRY_DELAY_BASE;
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.collectVehicleData(dataType, vehicleId, chunk, baseUrl, authToken, retryCount + 1);
      }
      throw new Error(`Failed to collect ${dataType} data for vehicle ${vehicleId}: ${httpError.message || "Unknown error"}`);
    }
  }
  updateProgress(update) {
    const current = this.progressSubject.value;
    const newProgress = __spreadValues(__spreadValues({}, current), update);
    const totalRequests = newProgress.totalRequests;
    const completedRequests = newProgress.completedRequests;
    if (totalRequests > 0) {
      newProgress.percentage = Math.round(completedRequests / totalRequests * 100);
    }
    this.progressSubject.next(newProgress);
  }
  aggregateResults(results, errors, request) {
    const aggregated = {
      vehicles: {},
      metadata: {
        start_date: request.startDate,
        end_date: request.endDate,
        vehicle_count: request.vehicleIds.length,
        data_types: request.dataTypes,
        collection_timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        successful_requests: results.length,
        failed_requests: errors.length,
        total_requests: results.length + errors.length,
        timezone: "Africa/Johannesburg",
        business_context: {
          fleet_type: "delivery",
          region: "south_africa",
          kpi_focus: ["efficiency", "safety", "fuel_consumption"]
        }
      }
    };
    const idToNameMap = request.vehicleNames ?? {};
    request.vehicleIds.forEach((vehicleId) => {
      const vehicleName = idToNameMap[vehicleId] || vehicleId;
      aggregated.vehicles[vehicleName] = {
        vehicle_info: {
          id: vehicleId,
          name: vehicleName,
          active: true
        },
        trips: [],
        events: [],
        telemetry: [],
        alerts: [],
        data_summary: {
          trip_count: 0,
          event_count: 0,
          telemetry_count: 0,
          alert_count: 0,
          date_range: { earliest: null, latest: null }
        }
      };
    });
    results.forEach((result) => {
      if (isDefined(result.data?.items) && Array.isArray(result.data.items)) {
        const { dataType, vehicleId } = result;
        const items = result.data.items;
        const vehicleName = idToNameMap[vehicleId] || vehicleId;
        if (isDefined(aggregated.vehicles[vehicleName])) {
          switch (dataType) {
            case "trips":
              aggregated.vehicles[vehicleName].trips.push(...items);
              break;
            case "events":
              aggregated.vehicles[vehicleName].events.push(...items);
              break;
            case "telemetry":
              aggregated.vehicles[vehicleName].telemetry.push(...items);
              break;
            case "alerts":
              aggregated.vehicles[vehicleName].alerts.push(...items);
              break;
          }
          const vehicleData = aggregated.vehicles[vehicleName];
          vehicleData.data_summary.trip_count = vehicleData.trips.length;
          vehicleData.data_summary.event_count = vehicleData.events.length;
          vehicleData.data_summary.telemetry_count = vehicleData.telemetry.length;
          vehicleData.data_summary.alert_count = vehicleData.alerts.length;
          if (dataType === "trips") {
            vehicleData.trips.forEach((trip) => {
              const startDate = trip.startTime;
              if (startDate) {
                const summary = vehicleData.data_summary;
                if (isNullOrUndefined(summary.date_range.earliest) || startDate < summary.date_range.earliest) {
                  summary.date_range.earliest = startDate;
                }
                if (isNullOrUndefined(summary.date_range.latest) || startDate > summary.date_range.latest) {
                  summary.date_range.latest = startDate;
                }
              }
            });
          }
        }
      }
    });
    return aggregated;
  }
  async collectFleetData(request) {
    try {
      if (!request.vehicleIds.length) {
        throw new Error("At least one vehicle ID is required");
      }
      if (!request.dataTypes.length) {
        throw new Error("At least one data type is required");
      }
      const startTime = new Date(request.startDate).getTime();
      const endTime = new Date(request.endDate).getTime();
      const daysDiff = (endTime - startTime) / (24 * 60 * 60 * 1e3);
      if (daysDiff > 7) {
        throw new Error("Date range cannot exceed 7 days for performance reasons");
      }
      const dateChunks = this.splitInto24HourChunks(request.startDate, request.endDate);
      const totalRequests = dateChunks.length * request.vehicleIds.length * request.dataTypes.length;
      this.updateProgress({
        totalRequests,
        completedRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        message: `Preparing to collect data from ${request.vehicleIds.length} vehicles...`
      });
      const collectionTasks = [];
      for (const chunk of dateChunks) {
        for (const vehicleId of request.vehicleIds) {
          for (const dataType of request.dataTypes) {
            collectionTasks.push(() => this.collectVehicleData(dataType, vehicleId, chunk, request.baseUrl, request.authToken));
          }
        }
      }
      const results = [];
      const errors = [];
      for (let i = 0; i < collectionTasks.length; i += this.MAX_CONCURRENT_REQUESTS) {
        const batch = collectionTasks.slice(i, i + this.MAX_CONCURRENT_REQUESTS);
        const batchResults = await Promise.allSettled(batch.map((task) => task()));
        batchResults.forEach((result, index) => {
          const globalIndex = i + index;
          const vehiclesPerChunk = request.vehicleIds.length;
          const dataTypesPerVehicle = request.dataTypes.length;
          const tasksPerChunk = vehiclesPerChunk * dataTypesPerVehicle;
          const chunkIndex = Math.floor(globalIndex / tasksPerChunk);
          const taskInChunk = globalIndex % tasksPerChunk;
          const vehicleIndex = Math.floor(taskInChunk / dataTypesPerVehicle);
          const dataTypeIndex = taskInChunk % dataTypesPerVehicle;
          const vehicleId = request.vehicleIds[vehicleIndex];
          const dataType = request.dataTypes[dataTypeIndex];
          if (result.status === "fulfilled") {
            results.push(result.value);
            this.updateProgress({
              completedRequests: results.length + errors.length,
              successfulRequests: results.length,
              currentVehicle: vehicleId,
              currentDataType: dataType,
              message: `Collected ${dataType} data for ${vehicleId}...`
            });
          } else {
            errors.push({
              vehicleId,
              dataType,
              dateChunk: dateChunks[chunkIndex],
              error: result.reason?.message ?? "Unknown error",
              statusCode: result.reason?.status,
              retryCount: 0
            });
            this.updateProgress({
              completedRequests: results.length + errors.length,
              failedRequests: errors.length,
              currentVehicle: vehicleId,
              currentDataType: dataType,
              message: `Failed to collect ${dataType} data for ${vehicleId}`
            });
          }
        });
        if (i + this.MAX_CONCURRENT_REQUESTS < collectionTasks.length) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
      this.updateProgress({
        message: "Aggregating collected data..."
      });
      const aggregatedData = this.aggregateResults(results, errors, request);
      this.updateProgress({
        message: `Collection complete! Gathered ${results.length} successful responses${errors.length > 0 ? ` with ${errors.length} errors` : ""}`
      });
      return {
        success: errors.length === 0 || results.length > 0,
        data: aggregatedData,
        errors: errors.length > 0 ? errors : void 0,
        progress: this.progressSubject.value
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred during data collection";
      this.updateProgress({
        message: `Collection failed: ${errorMessage}`
      });
      return {
        success: false,
        errors: [
          {
            vehicleId: "unknown",
            dataType: "trips",
            dateChunk: { start: request.startDate, end: request.endDate },
            error: errorMessage,
            retryCount: 0
          }
        ],
        progress: this.progressSubject.value
      };
    }
  }
  resetProgress() {
    this.progressSubject.next({
      totalRequests: 0,
      completedRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      percentage: 0,
      message: "Ready to collect data..."
    });
  }
  static \u0275fac = function TelemetryDataCollectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TelemetryDataCollectionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TelemetryDataCollectionService, factory: _TelemetryDataCollectionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelemetryDataCollectionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/development/components/analytical-report/analytical-report.component.ts
var _c08 = ["queryChatComponent"];
function AnalyticalReportComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p-message", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function AnalyticalReportComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p-message", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function AnalyticalReportComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-analytics-dashboard", 18);
    \u0275\u0275listener("recalculate", function AnalyticalReportComponent_Conditional_8_Template_app_analytics_dashboard_recalculate_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("response", ctx_r1.dashboardResponse())("isLoading", false)("error", void 0)("userQuery", ctx_r1.lastReportQuery())("dateRange", ctx_r1.formatDateRange())("vehicleNames", ctx_r1.getSelectedVehicleNames())("clientTimeZone", ((tmp_8_0 = ctx_r1.selectedClientSignal()) == null ? null : tmp_8_0.timeZoneId) ?? void 0)("clientLanguage", ((tmp_9_0 = ctx_r1.selectedClientSignal()) == null ? null : tmp_9_0.language) ?? void 0);
  }
}
function AnalyticalReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 19);
    \u0275\u0275element(2, "p-progressSpinner", 20);
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, "Analysis may take up to 60 seconds");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.loadingMessage());
  }
}
var AnalyticalReportComponent = class _AnalyticalReportComponent {
  assetsService = inject(AssetsService);
  clientDataService = inject(ClientDataService);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  apiUrlService = inject(ApiUrlService);
  authTokenManagerService = inject(AuthTokenManagerService);
  telemetryDataCollectionService = inject(TelemetryDataCollectionService);
  title = "Reporting - Analytical Review";
  // Signals for reactive state management
  assets = signal([], ...ngDevMode ? [{ debugName: "assets" }] : []);
  filteredAssets = signal([], ...ngDevMode ? [{ debugName: "filteredAssets" }] : []);
  _selectedAssetIds = signal([], ...ngDevMode ? [{ debugName: "_selectedAssetIds" }] : []);
  loadingAssets = signal(false, ...ngDevMode ? [{ debugName: "loadingAssets" }] : []);
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  successMessage = signal(null, ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Getter and setter for two-way binding with ngModel
  get selectedAssetIds() {
    return this._selectedAssetIds();
  }
  set selectedAssetIds(value) {
    this._selectedAssetIds.set(value ?? []);
  }
  // API testing state
  isTestingApi = signal(false, ...ngDevMode ? [{ debugName: "isTestingApi" }] : []);
  apiResponse = signal(null, ...ngDevMode ? [{ debugName: "apiResponse" }] : []);
  selectedTab = signal(0, ...ngDevMode ? [{ debugName: "selectedTab" }] : []);
  loadingMessage = signal("Preparing report generation...", ...ngDevMode ? [{ debugName: "loadingMessage" }] : []);
  loadingInterval = null;
  // Data collection state
  collectionProgress = signal(null, ...ngDevMode ? [{ debugName: "collectionProgress" }] : []);
  collectedData = signal(null, ...ngDevMode ? [{ debugName: "collectedData" }] : []);
  isCollectingData = signal(false, ...ngDevMode ? [{ debugName: "isCollectingData" }] : []);
  collectionErrors = signal([], ...ngDevMode ? [{ debugName: "collectionErrors" }] : []);
  collectingDataTypes = signal([], ...ngDevMode ? [{ debugName: "collectingDataTypes" }] : []);
  // Track data types currently being collected
  // Form state
  apiForm;
  // Configuration options
  dataTypeOptions = signal([
    { label: "Trips", value: "trips", selected: true },
    { label: "Events", value: "events", selected: true },
    { label: "Telemetry", value: "telemetry", selected: false },
    { label: "Alerts", value: "alerts", selected: true }
  ], ...ngDevMode ? [{ debugName: "dataTypeOptions" }] : []);
  // Analysis breakdown options
  analyzePerDay = signal(false, ...ngDevMode ? [{ debugName: "analyzePerDay" }] : []);
  analyzePerVehicle = signal(false, ...ngDevMode ? [{ debugName: "analyzePerVehicle" }] : []);
  // Chat mode toggle
  useChatMode = signal(true, ...ngDevMode ? [{ debugName: "useChatMode" }] : []);
  // Set to true to use chat-based query builder
  // Chat-related state
  queryChatComponent;
  // View state management
  showChatView = signal(true, ...ngDevMode ? [{ debugName: "showChatView" }] : []);
  // Show chat vs dashboard
  currentQuery = signal("", ...ngDevMode ? [{ debugName: "currentQuery" }] : []);
  // Current generated query
  currentConfidence = signal(0, ...ngDevMode ? [{ debugName: "currentConfidence" }] : []);
  // Current query confidence
  selectedDataTypesList = signal([], ...ngDevMode ? [{ debugName: "selectedDataTypesList" }] : []);
  // Data types from chat
  // Signals to track form date values for reactive computed properties
  formStartDate = signal(null, ...ngDevMode ? [{ debugName: "formStartDate" }] : []);
  formEndDate = signal(null, ...ngDevMode ? [{ debugName: "formEndDate" }] : []);
  // Date preset tracking
  activeDatePreset = signal(null, ...ngDevMode ? [{ debugName: "activeDatePreset" }] : []);
  sampleRequests = signal([
    {
      name: "Driver Safety Scorecard",
      description: "Comprehensive analysis of driver behavior including speeding, harsh braking, and acceleration events",
      query: "Generate a driver safety scorecard showing speeding incidents, harsh braking events, rapid acceleration, and overall safety rating with recommendations for improvement",
      dataTypes: ["trips", "events"]
    },
    {
      name: "Fuel Efficiency & Cost Analysis",
      description: "Detailed fuel consumption analysis with cost optimization recommendations",
      query: "Analyze fuel efficiency patterns, identify vehicles with poor MPG, calculate fuel costs per mile, and provide recommendations to reduce fuel consumption",
      dataTypes: ["trips", "telemetry"]
    },
    {
      name: "Vehicle Utilization Report",
      description: "Asset utilization analysis to identify underused or overworked vehicles",
      query: "Show vehicle utilization rates, idle time analysis, engine hours vs distance traveled, and identify vehicles that are underutilized or require better distribution",
      dataTypes: ["trips", "telemetry"]
    },
    {
      name: "Maintenance Insights",
      description: "Predictive maintenance analysis based on vehicle diagnostics and usage patterns",
      query: "Analyze diagnostic trouble codes, predict upcoming maintenance needs based on mileage and usage patterns, and identify vehicles requiring immediate attention",
      dataTypes: ["events", "telemetry"]
    },
    {
      name: "Route Optimization",
      description: "Route efficiency analysis with suggestions for optimization",
      query: "Analyze route efficiency, identify frequent detours or delays, calculate time spent in traffic, and suggest optimal routes to reduce travel time and fuel costs",
      dataTypes: ["trips", "events"]
    },
    {
      name: "Fleet Performance Dashboard",
      description: "Comprehensive fleet overview with key performance indicators",
      query: "Create a comprehensive fleet performance summary including total cost of ownership, vehicle availability, driver performance metrics, and operational efficiency KPIs",
      dataTypes: ["trips", "events", "telemetry"]
    }
  ], ...ngDevMode ? [{ debugName: "sampleRequests" }] : []);
  // Documentation content
  apiDocumentation = signal({
    overview: `The Analytical Review endpoint provides AI-powered fleet analytics by integrating with Telemetry API to collect real-time vehicle data and generate intelligent insights for dashboard visualization.`,
    endpoint: {
      production: "https://cypherview-reporting-develop-function.azurewebsites.net/api/analytical-review",
      local: "http://localhost:7071/api/analytical-review",
      method: "POST"
    },
    headers: {
      "Content-Type": "application/json",
      "x-functions-key": "[your-function-key] # Required in production"
    },
    rateLimit: {
      dateRangeMax: "7 days",
      vehiclesMax: "10 vehicles per request",
      timeout: "30-60 seconds",
      concurrent: "10 concurrent requests",
      requestsPerMinute: "100 requests per minute per client"
    }
  }, ...ngDevMode ? [{ debugName: "apiDocumentation" }] : []);
  // Client signal
  selectedClientSignal = this.clientDataService.getSelectedClientSignal();
  // Helper method to safely convert values to strings
  safeStringify(value) {
    if (value === null || value === void 0) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch {
        return "[Object]";
      }
    }
    if (typeof value === "function") {
      return "[Function]";
    }
    if (typeof value === "symbol") {
      return value.toString();
    }
    if (typeof value === "bigint") {
      return value.toString();
    }
    return "[Unknown]";
  }
  selectedAssetNames = computed(() => {
    const assetIds = this._selectedAssetIds();
    const allAssets = this.assets();
    if (!Array.isArray(allAssets) || !Array.isArray(assetIds)) {
      return "Loading...";
    }
    const selectedAssets = allAssets.filter((asset) => isDefined(asset?.value) && assetIds.includes(asset.value));
    if (selectedAssets.length === 0) {
      return "No vehicles selected";
    }
    return selectedAssets.map((asset) => this.safeStringify(asset.label || asset.value || "Unknown Vehicle")).join(", ");
  }, ...ngDevMode ? [{ debugName: "selectedAssetNames" }] : []);
  isMultipleVehiclesSelected = computed(() => {
    return this._selectedAssetIds().length > 1;
  }, ...ngDevMode ? [{ debugName: "isMultipleVehiclesSelected" }] : []);
  isDateRangeGreaterThan2Days = computed(() => {
    const startDate = this.apiForm.get("startDate")?.value;
    const endDate = this.apiForm.get("endDate")?.value;
    if (isNullOrUndefined(startDate) || isNullOrUndefined(endDate)) {
      return false;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end.getTime() - start.getTime();
    const diffInDays = diffInMs / (1e3 * 60 * 60 * 24);
    return diffInDays > 2;
  }, ...ngDevMode ? [{ debugName: "isDateRangeGreaterThan2Days" }] : []);
  shouldDisableTelemetry = computed(() => {
    return this.isMultipleVehiclesSelected() && this.isDateRangeGreaterThan2Days();
  }, ...ngDevMode ? [{ debugName: "shouldDisableTelemetry" }] : []);
  reportSummary = computed(() => {
    const response = this.apiResponse();
    const analyticsData = response?.data;
    const summary = analyticsData?.response?.summary;
    return this.safeStringify(summary) || "Report generated successfully.";
  }, ...ngDevMode ? [{ debugName: "reportSummary" }] : []);
  formatDateRange = computed(() => {
    const startDate = this.apiForm.get("startDate")?.value;
    const endDate = this.apiForm.get("endDate")?.value;
    if (isNullOrUndefined(startDate) || isNullOrUndefined(endDate)) {
      return "Date range not selected";
    }
    try {
      const formatDate = (date) => {
        if (isNullOrUndefined(date))
          return "Invalid Date";
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        });
      };
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } catch {
      return "Invalid date range";
    }
  }, ...ngDevMode ? [{ debugName: "formatDateRange" }] : []);
  isReadyForTesting = computed(() => {
    return !!(isDefined(this.selectedClientSignal()?.id) && this._selectedAssetIds().length > 0 && isDefined(this.apiForm.get("reportQuery")?.value) && isDefined(this.apiForm.get("startDate")?.value) && isDefined(this.apiForm.get("endDate")?.value));
  }, ...ngDevMode ? [{ debugName: "isReadyForTesting" }] : []);
  // Track the last report query for display in dashboard
  lastReportQuery = signal("", ...ngDevMode ? [{ debugName: "lastReportQuery" }] : []);
  // Parse API response into dashboard format
  dashboardResponse = computed(() => {
    const response = this.apiResponse();
    if (isNullOrUndefined(response?.success) || isNullOrUndefined(response?.data)) {
      return void 0;
    }
    const analyticsData = response.data;
    if (isNullOrUndefined(analyticsData?.response)) {
      return void 0;
    }
    if (isDefined(analyticsData.response.blocks)) {
      return analyticsData;
    }
    return this.transformLegacyResponse(response.data);
  }, ...ngDevMode ? [{ debugName: "dashboardResponse" }] : []);
  transformLegacyResponse(data) {
    const legacyData = data;
    const summary = this.safeStringify(legacyData.response?.summary) || "Analysis completed successfully";
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const requestId = legacyData.response?.request_id ?? `req_${Date.now()}`;
    return {
      response: {
        request_id: requestId,
        timestamp,
        summary,
        layout: {
          type: "dashboard",
          grid: {
            columns: 12,
            rows: "auto",
            gap: 16
          },
          sections: [
            {
              id: "main-summary",
              title: "Report Summary",
              position: {
                row: 1,
                col: 1,
                colSpan: 12
              },
              blocks: ["summary-block-1"]
            }
          ]
        },
        blocks: [
          {
            block_id: "summary-block-1",
            block_type: "summary",
            priority: 1,
            content: {
              title: "Fleet Analysis Report",
              narrative: summary,
              highlights: [
                {
                  label: "Vehicles Analyzed",
                  value: this._selectedAssetIds().length,
                  severity: "neutral"
                },
                {
                  label: "Analysis Period",
                  value: this.formatDateRange(),
                  severity: "neutral"
                },
                {
                  label: "Report Status",
                  value: "Complete",
                  severity: "good"
                }
              ]
            },
            visual: {
              theme: "primary",
              elevation: 1
            }
          }
        ],
        metadata: {
          generation_time: 1e3,
          data_sources: ["telemetry_api"],
          confidence_score: 95
        }
      }
    };
  }
  currentVehicleName = computed(() => {
    const currentVehicleId = this.collectionProgress()?.currentVehicle;
    if (isNullOrUndefined(currentVehicleId))
      return "";
    const allAssets = this.assets();
    const vehicleAsset = allAssets.find((asset) => asset.value === currentVehicleId);
    return vehicleAsset?.label ?? currentVehicleId;
  }, ...ngDevMode ? [{ debugName: "currentVehicleName" }] : []);
  selectedDataTypes = computed(() => {
    return this.dataTypeOptions().filter((option) => option.selected).map((option) => option.value);
  }, ...ngDevMode ? [{ debugName: "selectedDataTypes" }] : []);
  // Check if date range is more than 2 days (enables "per day" analysis option)
  canAnalyzePerDay = computed(() => {
    const startDate = this.formStartDate();
    const endDate = this.formEndDate();
    if (startDate == null || endDate == null)
      return false;
    const diffMs = new Date(endDate).getTime() - new Date(startDate).getTime();
    const diffDays = diffMs / (1e3 * 60 * 60 * 24);
    return diffDays > 2;
  }, ...ngDevMode ? [{ debugName: "canAnalyzePerDay" }] : []);
  // Check if more than 1 vehicle is selected (enables "per vehicle" analysis option)
  canAnalyzePerVehicle = computed(() => {
    return this._selectedAssetIds().length > 1;
  }, ...ngDevMode ? [{ debugName: "canAnalyzePerVehicle" }] : []);
  // Build analysis breakdown text for the query
  analysisBreakdownText = computed(() => {
    const parts = [];
    if (this.analyzePerDay() && this.canAnalyzePerDay()) {
      parts.push("broken down by day");
    }
    if (this.analyzePerVehicle() && this.canAnalyzePerVehicle()) {
      parts.push("broken down by vehicle");
    }
    if (parts.length === 0)
      return "";
    return ` Please provide the analysis ${parts.join(" and ")}.`;
  }, ...ngDevMode ? [{ debugName: "analysisBreakdownText" }] : []);
  analyticalReviewEndpoint = computed(() => {
    return "https://cypherview-reporting-develop-function.azurewebsites.net/api/analytical-review";
  }, ...ngDevMode ? [{ debugName: "analyticalReviewEndpoint" }] : []);
  // Chat component inputs
  chatDateRange = computed(() => {
    const start = this.formStartDate();
    const end = this.formEndDate();
    if (start && end) {
      return { start, end };
    }
    return null;
  }, ...ngDevMode ? [{ debugName: "chatDateRange" }] : []);
  chatSelectedVehicles = computed(() => {
    const assetIds = this._selectedAssetIds();
    const allAssets = this.assets();
    return assetIds.map((id) => {
      const asset = allAssets.find((a) => a.value === id);
      return asset ? { id: asset.value, name: asset.label } : null;
    }).filter((v) => v !== null);
  }, ...ngDevMode ? [{ debugName: "chatSelectedVehicles" }] : []);
  chatClientInfo = computed(() => {
    const client = this.selectedClientSignal();
    const clientId = client?.id;
    const clientName = client?.name;
    if (clientId !== void 0 && clientId !== null && clientId !== "" && clientName !== void 0 && clientName !== null && clientName !== "") {
      return { id: clientId, name: clientName };
    }
    return null;
  }, ...ngDevMode ? [{ debugName: "chatClientInfo" }] : []);
  // Available vehicles for chat selection
  availableVehiclesForChat = computed(() => {
    const allAssets = this.assets();
    return allAssets.map((asset) => ({
      id: asset.value,
      name: asset.label
    }));
  }, ...ngDevMode ? [{ debugName: "availableVehiclesForChat" }] : []);
  // Header summary for ChatSummaryHeaderComponent
  headerSummary = computed(() => {
    const startDate = this.formStartDate();
    const endDate = this.formEndDate();
    const assetIds = this._selectedAssetIds();
    const allAssets = this.assets();
    const vehicleNames = assetIds.map((id) => {
      const asset = allAssets.find((a) => a.value === id);
      return asset?.label ?? "";
    }).filter((name) => name.length > 0);
    return {
      dateRange: startDate && endDate ? { start: startDate, end: endDate } : null,
      vehicleCount: assetIds.length,
      vehicleNames,
      dataTypes: this.selectedDataTypesList(),
      queryConfidence: this.currentConfidence(),
      currentQuery: this.currentQuery()
    };
  }, ...ngDevMode ? [{ debugName: "headerSummary" }] : []);
  constructor() {
    this.apiForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      reportQuery: ["", Validators.required]
    });
    const now = /* @__PURE__ */ new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    this.apiForm.patchValue({
      startDate: startOfDay,
      endDate: endOfDay,
      reportQuery: "Show me fleet overview and any issues that need attention"
    });
    this.formStartDate.set(startOfDay);
    this.formEndDate.set(endOfDay);
    this.apiForm.get("startDate")?.valueChanges.subscribe((value) => {
      this.formStartDate.set(value);
      this.activeDatePreset.set(null);
    });
    this.apiForm.get("endDate")?.valueChanges.subscribe((value) => {
      this.formEndDate.set(value);
      this.activeDatePreset.set(null);
    });
    effect(() => {
      const selectedClient = this.selectedClientSignal();
      if (isDefined(selectedClient?.id)) {
        this.loadInitialAssets(selectedClient.id);
        this.errorMessage.set(null);
      } else {
        this.assets.set([]);
        this.filteredAssets.set([]);
      }
    });
    effect(() => {
      const shouldDisable = this.shouldDisableTelemetry();
      if (shouldDisable) {
        this.dataTypeOptions.update((options) => options.map((opt) => __spreadProps(__spreadValues({}, opt), {
          selected: opt.value === "telemetry" ? false : opt.selected
        })));
      } else {
      }
    });
  }
  loadInitialAssets(clientId) {
    this.loadingAssets.set(true);
    this.errorMessage.set(null);
    this.assetsService.listAssets(clientId, 0, 1e3, void 0, "state=active").subscribe({
      next: (response) => {
        const assetOptions = response.items?.map((asset) => ({
          label: asset.name || `Asset ${asset.id}`,
          value: asset.id,
          assetData: asset
        })) ?? [];
        this.assets.set(assetOptions);
        this.filteredAssets.set(assetOptions);
        this.loadingAssets.set(false);
      },
      error: () => {
        this.errorMessage.set("Failed to load assets. Please try again.");
        this.loadingAssets.set(false);
      }
    });
  }
  onSearchAssets(event) {
    const query = event.query.trim().toLowerCase();
    const allAssets = this.assets();
    if (!query) {
      this.filteredAssets.set(allAssets);
      return;
    }
    const filtered = allAssets.filter((asset) => asset.label.toLowerCase().includes(query));
    this.filteredAssets.set(filtered);
  }
  onAssetsChange(selectedIds) {
    this.selectedAssetIds = selectedIds ?? [];
  }
  onDataTypeChange(option) {
    if (option.value === "telemetry" && this.isMultipleVehiclesSelected() && !option.selected) {
      this.errorMessage.set("Telemetry data is not available when multiple vehicles are selected.");
      setTimeout(() => this.errorMessage.set(null), 3e3);
      return;
    }
    this.dataTypeOptions.update((options) => options.map((opt) => opt.value === option.value ? __spreadProps(__spreadValues({}, opt), { selected: !opt.selected }) : opt));
  }
  setDatePreset(preset) {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    let startDate;
    let endDate;
    switch (preset) {
      case "today":
        startDate = new Date(today);
        endDate = new Date(today);
        endDate.setHours(23, 59, 59, 999);
        break;
      case "yesterday":
        startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 1);
        endDate = new Date(startDate);
        endDate.setHours(23, 59, 59, 999);
        break;
      case "last7days":
        endDate = new Date(today);
        endDate.setHours(23, 59, 59, 999);
        startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 6);
        break;
      case "thisMonth":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today);
        endDate.setHours(23, 59, 59, 999);
        break;
      case "lastMonth":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      default:
        return;
    }
    this.apiForm.patchValue({
      startDate,
      endDate
    }, { emitEvent: false });
    this.formStartDate.set(startDate);
    this.formEndDate.set(endDate);
    this.activeDatePreset.set(preset);
  }
  onLoadSampleRequest(sample) {
    this.apiForm.patchValue({
      reportQuery: sample.query
    });
    const shouldDisableTelemetry = this.shouldDisableTelemetry();
    this.dataTypeOptions.update((options) => options.map((opt) => __spreadProps(__spreadValues({}, opt), {
      selected: opt.value === "telemetry" && shouldDisableTelemetry ? false : sample.dataTypes.includes(opt.value)
    })));
    if (shouldDisableTelemetry && sample.dataTypes.includes("telemetry")) {
      this.successMessage.set(`Loaded query: ${sample.name} (telemetry disabled due to selection)`);
    } else {
      this.successMessage.set(`Loaded query: ${sample.name}`);
    }
    setTimeout(() => this.successMessage.set(null), 3e3);
    this.sampleRequests.update((current) => current.filter((s) => s.name !== sample.name));
  }
  // ============================================================================
  // Chat-based Query Builder Event Handlers
  // ============================================================================
  /**
   * Handle data collection triggered by the chat component
   */
  async onChatDataCollectionTriggered(dataTypes) {
    const collectionDataTypes = dataTypes;
    this.isCollectingData.set(true);
    this.collectingDataTypes.set(dataTypes);
    this.collectionErrors.set([]);
    this.queryChatComponent?.startDataCollection(dataTypes);
    try {
      const selectedAssetIds = this.selectedAssetIds;
      const formValues = this.apiForm.value;
      const vehicleNames = {};
      const allAssets = this.assets();
      for (const id of selectedAssetIds) {
        const asset = allAssets.find((a) => a.value === id);
        if (asset) {
          vehicleNames[id] = asset.label;
        }
      }
      const collectionRequest = {
        vehicleIds: selectedAssetIds,
        vehicleNames,
        startDate: formValues.startDate.toISOString(),
        endDate: formValues.endDate.toISOString(),
        dataTypes: collectionDataTypes,
        baseUrl: this.apiUrlService.getCurrentApiUrl(),
        authToken: this.authTokenManagerService.getAccessToken() ?? ""
      };
      const progressSub = this.telemetryDataCollectionService.progress$.subscribe((progress) => {
        this.collectionProgress.set(progress);
        this.queryChatComponent?.updateCollectionProgress(progress.percentage);
      });
      const result = await this.telemetryDataCollectionService.collectFleetData(collectionRequest);
      progressSub.unsubscribe();
      if (result.data) {
        this.collectedData.set(result.data);
      }
      this.collectionErrors.set(result.errors ?? []);
      this.isCollectingData.set(false);
      this.collectingDataTypes.set([]);
      if (result.data) {
        const summarizedData = this.buildSummarizedData(result.data);
        this.queryChatComponent?.submitDataContext(summarizedData).catch((err) => {
          console.error("Failed to submit data context:", err);
        });
      }
    } catch (error) {
      console.error("Data collection failed:", error);
      this.errorMessage.set(error instanceof Error ? error.message : "Data collection failed");
      this.isCollectingData.set(false);
      this.collectingDataTypes.set([]);
    }
  }
  /**
   * Handle report generation from chat component
   */
  async onChatGenerateReport(query) {
    this.apiForm.patchValue({ reportQuery: query });
    const data = this.collectedData();
    if (!data) {
      this.errorMessage.set("Please collect data first before generating the report.");
      return;
    }
    await this.generateReportWithData(query, data);
  }
  /**
   * Handle query updates from chat component
   */
  onQueryUpdated(query) {
    this.currentQuery.set(query);
  }
  /**
   * Handle query changes from footer preview (user edited the query)
   */
  onQueryChanged(query) {
    this.currentQuery.set(query);
    this.apiForm.patchValue({ reportQuery: query });
  }
  /**
   * Handle confidence updates from chat component
   */
  onConfidenceUpdated(confidence) {
    this.currentConfidence.set(confidence);
  }
  /**
   * Handle date range selection from chat component (guided mode)
   */
  onChatDateRangeSelected(dateRange) {
    this.formStartDate.set(dateRange.start);
    this.formEndDate.set(dateRange.end);
    this.apiForm.patchValue({
      startDate: dateRange.start,
      endDate: dateRange.end
    }, { emitEvent: false });
  }
  /**
   * Handle vehicle selection from chat component (guided mode)
   */
  onChatVehiclesSelected(vehicles) {
    const vehicleIds = vehicles.map((v) => v.id);
    this._selectedAssetIds.set(vehicleIds);
  }
  /**
   * Handle data types selection from chat component (guided mode)
   */
  onChatDataTypesSelected(dataTypes) {
    this.selectedDataTypesList.set(dataTypes);
    this.dataTypeOptions.update((options) => options.map((opt) => __spreadProps(__spreadValues({}, opt), {
      selected: dataTypes.includes(opt.value)
    })));
  }
  // ============================================================================
  // Header Summary Editing Handlers
  // ============================================================================
  /**
   * Handle vehicle selection changes from header component
   */
  onHeaderVehiclesChanged(vehicleIds) {
    this._selectedAssetIds.set(vehicleIds);
  }
  /**
   * Handle date range changes from header component
   */
  onHeaderDateRangeChanged(dateRange) {
    this.formStartDate.set(dateRange.start);
    this.formEndDate.set(dateRange.end);
    this.apiForm.patchValue({
      startDate: dateRange.start,
      endDate: dateRange.end
    }, { emitEvent: false });
    this.activeDatePreset.set(null);
  }
  /**
   * Handle data types changes from header component
   * This triggers data collection for the newly selected data types
   */
  onHeaderDataTypesChanged(newDataTypes) {
    if (newDataTypes.length === 0)
      return;
    const dataTypes = newDataTypes;
    void this.onChatDataCollectionTriggered(dataTypes);
  }
  /**
   * Selected vehicle IDs for header component binding
   */
  headerSelectedVehicleIds = computed(() => this._selectedAssetIds(), ...ngDevMode ? [{ debugName: "headerSelectedVehicleIds" }] : []);
  /**
   * Available vehicles for header component binding (with selection state)
   */
  headerAvailableVehicles = computed(() => {
    const allAssets = this.assets();
    const selectedIds = this._selectedAssetIds();
    return allAssets.map((asset) => ({
      id: asset.value,
      name: asset.label,
      selected: selectedIds.includes(asset.value)
    }));
  }, ...ngDevMode ? [{ debugName: "headerAvailableVehicles" }] : []);
  /**
   * Handle generate report from footer component
   */
  async onFooterGenerateReport() {
    const query = this.currentQuery();
    if (!query) {
      this.errorMessage.set("Please build a query first by chatting.");
      return;
    }
    const data = this.collectedData();
    if (!data) {
      const dataTypes = this.selectedDataTypesList();
      if (dataTypes.length === 0) {
        this.errorMessage.set("Please specify data types in the chat first.");
        return;
      }
      await this.onChatDataCollectionTriggered(dataTypes);
      return;
    }
    await this.generateReportWithData(query, data);
  }
  /**
   * Switch back to chat view from dashboard
   */
  onBackToChat() {
    this.showChatView.set(true);
  }
  /**
   * Start a new report (clear everything)
   */
  onNewReport() {
    this.apiResponse.set(null);
    this.collectedData.set(null);
    this.currentQuery.set("");
    this.currentConfidence.set(0);
    this.selectedDataTypesList.set([]);
    this.showChatView.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.queryChatComponent?.clearSession();
  }
  /**
   * Generate report with pre-collected data
   */
  async generateReportWithData(query, data) {
    this.isTestingApi.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    try {
      const summarizedData = this.buildSummarizedData(data);
      const requestBody = this.buildRequestBody(query, data, summarizedData);
      const formData = new FormData();
      const requestBlob = new Blob([JSON.stringify(requestBody)], {
        type: "application/json"
      });
      formData.append("request", requestBlob, "request.json");
      const telemetryPayload = {
        aggregated_data: data,
        summarized_data: summarizedData
      };
      const telemetryBlob = new Blob([JSON.stringify(telemetryPayload)], {
        type: "application/json"
      });
      formData.append("data_file", telemetryBlob, "telemetry.json");
      const response = await fetch(this.analyticalReviewEndpoint(), {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const result = await response.json();
      if (result.error !== void 0 && result.error !== null) {
        this.apiResponse.set({
          success: false,
          error: result.message ?? result.error,
          statusCode: response.status
        });
      } else {
        this.apiResponse.set({
          success: true,
          data: result,
          statusCode: response.status
        });
        this.lastReportQuery.set(query);
        this.showChatView.set(false);
      }
    } catch (error) {
      console.error("Report generation failed:", error);
      this.apiResponse.set({
        success: false,
        error: error instanceof Error ? error.message : "Report generation failed"
      });
    } finally {
      this.isTestingApi.set(false);
    }
  }
  /**
   * Build request body for analytical review API
   */
  buildRequestBody(query, _data, _summarizedData) {
    const client = this.selectedClientSignal();
    return {
      key_auth_token: this.authTokenManagerService.getAccessToken(),
      key_base_url: this.apiUrlService.getCurrentApiUrl(),
      report_query: query + this.analysisBreakdownText(),
      client_profile: {
        id: client?.id ?? "",
        name: client?.name ?? "",
        timeZoneId: client?.timeZoneId ?? "UTC",
        language: client?.language ?? "en",
        currency: client?.["currency"] ?? "USD",
        measurementUnits: {
          distanceUnit: client?.measurementUnits?.distanceUnit || "km",
          speedUnit: client?.measurementUnits?.speedUnit || "km/h",
          volumeUnit: client?.measurementUnits?.volumeUnit || "l",
          weightUnit: client?.measurementUnits?.weightUnit || "kg",
          temperatureUnit: client?.measurementUnits?.temperatureUnit || "C",
          altitudeUnit: client?.measurementUnits?.altitudeUnit || "m",
          areaUnit: client?.measurementUnits?.areaUnit || "ha"
        }
      },
      user_role: "fleet_manager",
      analysis_type: "fleet_overview"
    };
  }
  async onTestApi() {
    if (!this.isReadyForTesting()) {
      this.errorMessage.set("Please fill in all required fields before testing.");
      return;
    }
    const selectedAssetIds = this.selectedAssetIds;
    const formValues = this.apiForm.value;
    const selectedDataTypes = this.selectedDataTypes();
    if (selectedAssetIds.length === 0)
      return;
    this.isTestingApi.set(true);
    this.isCollectingData.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.apiResponse.set(null);
    this.collectedData.set(null);
    this.collectionErrors.set([]);
    const progressSubscription = this.telemetryDataCollectionService.progress$.subscribe((progress) => {
      this.collectionProgress.set(progress);
      this.loadingMessage.set(progress.message);
    });
    try {
      const startDate = new Date(formValues.startDate);
      const endDate = new Date(formValues.endDate);
      const allAssets = this.assets();
      const vehicleNames = {};
      for (const id of selectedAssetIds) {
        const asset = allAssets.find((a) => a.value === id);
        if (asset) {
          vehicleNames[id] = asset.label;
        }
      }
      const collectionRequest = {
        vehicleIds: selectedAssetIds,
        vehicleNames,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        dataTypes: selectedDataTypes.length > 0 ? selectedDataTypes : ["trips", "events", "telemetry"],
        baseUrl: this.apiUrlService.getCurrentApiUrl(),
        authToken: this.authTokenManagerService.getAccessToken() ?? ""
      };
      const collectionResult = await this.telemetryDataCollectionService.collectFleetData(collectionRequest);
      if (collectionResult.success && collectionResult.data) {
        this.collectedData.set(collectionResult.data);
        this.isCollectingData.set(false);
        const selectedClient = this.selectedClientSignal();
        const breakdownText = this.analysisBreakdownText();
        const fullQuery = formValues.reportQuery + breakdownText;
        const requestMetadata = {
          key_auth_token: this.authTokenManagerService.getAccessToken(),
          key_base_url: this.apiUrlService.getCurrentApiUrl(),
          report_query: fullQuery,
          client_profile: {
            id: selectedClient?.id,
            name: selectedClient?.name,
            timeZoneId: selectedClient?.timeZoneId ?? "UTC",
            language: selectedClient?.language ?? "en",
            currency: "ZAR",
            // TODO: Add currency field to client profile when available
            measurementUnits: selectedClient?.measurementUnits ?? {
              distanceUnit: "kilometres",
              speedUnit: "kilometresPerHour",
              volumeUnit: "litres",
              weightUnit: "kilograms",
              temperatureUnit: "celsius",
              altitudeUnit: "metres",
              areaUnit: "squareKilometres"
            }
          },
          user_role: "fleet_manager",
          analysis_type: "fleet_overview"
        };
        const telemetryData = {
          aggregated_data: collectionResult.data,
          summarized_data: this.buildSummarizedData(collectionResult.data)
        };
        const telemetryDataBlob = new Blob([JSON.stringify(telemetryData)], {
          type: "application/json"
        });
        const payloadSizeBytes = telemetryDataBlob.size;
        const payloadSizeMB = payloadSizeBytes / (1024 * 1024);
        const maxPayloadSizeMB = 20;
        if (payloadSizeMB > maxPayloadSizeMB) {
          this.isTestingApi.set(false);
          this.isCollectingData.set(false);
          progressSubscription.unsubscribe();
          const suggestions = [];
          if (selectedDataTypes.includes("telemetry")) {
            suggestions.push('Remove "Telemetry" from data types (telemetry data is usually the largest)');
          }
          if (selectedDataTypes.includes("events")) {
            suggestions.push('Remove "Events" from data types');
          }
          if (selectedAssetIds.length > 3) {
            suggestions.push(`Reduce the number of vehicles (currently ${selectedAssetIds.length} selected)`);
          }
          const startDate2 = new Date(formValues.startDate);
          const endDate2 = new Date(formValues.endDate);
          const daysDiff = (endDate2.getTime() - startDate2.getTime()) / (1e3 * 60 * 60 * 24);
          if (daysDiff > 7) {
            suggestions.push(`Reduce the date range (currently ${daysDiff.toFixed(1)} days)`);
          }
          const suggestionText = suggestions.length > 0 ? `

Suggestions:
\u2022 ${suggestions.join("\n\u2022 ")}` : "";
          this.errorMessage.set(`Payload size (${payloadSizeMB.toFixed(2)} MB) exceeds the maximum allowed size of ${maxPayloadSizeMB} MB. Please reduce the amount of data being sent.${suggestionText}`);
          return;
        }
        this.lastReportQuery.set(fullQuery);
        const formData = new FormData();
        formData.append("request", new Blob([JSON.stringify(requestMetadata)], {
          type: "application/json"
        }), "request.json");
        formData.append("data_file", telemetryDataBlob, "telemetry.json");
        this.loadingMessage.set("Generating AI-powered analysis...");
        this.http.post(this.analyticalReviewEndpoint(), formData).subscribe({
          next: (response) => {
            const errorResponse = response;
            const isError = isDefined(errorResponse.error);
            this.apiResponse.set({
              success: !isError,
              data: response,
              error: isError ? errorResponse.message ?? errorResponse.error : void 0,
              statusCode: 200
            });
            this.isTestingApi.set(false);
            if (isError) {
              this.errorMessage.set(`Analysis failed: ${errorResponse.message ?? errorResponse.error}`);
            } else {
              this.successMessage.set("Report generated successfully!");
            }
            progressSubscription.unsubscribe();
          },
          error: (error) => {
            this.apiResponse.set({
              success: false,
              error: error.error?.message ?? error.message ?? "Analysis failed",
              statusCode: error.status
            });
            this.isTestingApi.set(false);
            this.errorMessage.set(`Analysis failed: ${error.error?.message ?? error.message ?? "Unknown error"}`);
            progressSubscription.unsubscribe();
          }
        });
      } else {
        this.isTestingApi.set(false);
        this.isCollectingData.set(false);
        if (collectionResult.errors) {
          this.collectionErrors.set(collectionResult.errors);
        }
        const errorMsg = collectionResult.errors?.[0]?.error ?? "Data collection failed";
        this.errorMessage.set(`Data collection failed: ${errorMsg}`);
        progressSubscription.unsubscribe();
      }
    } catch (error) {
      this.isTestingApi.set(false);
      this.isCollectingData.set(false);
      this.errorMessage.set(`Data collection failed: ${error instanceof Error ? error.message : "Unknown error"}`);
      progressSubscription.unsubscribe();
    }
  }
  onClearResponse() {
    this.apiResponse.set(null);
    this.errorMessage.set(null);
    this.successMessage.set(null);
  }
  onRecalculate() {
    this.apiResponse.set(null);
    this.errorMessage.set(null);
    this.successMessage.set(null);
    void this.onTestApi();
  }
  startLoadingMessages() {
    const selectedDataTypes = this.selectedDataTypes();
    const selectedAssetIds = this.selectedAssetIds;
    const vehicleText = selectedAssetIds.length === 1 ? "selected vehicle" : `${selectedAssetIds.length} selected vehicles`;
    const messages = [
      "Connecting to AI analysis engine...",
      `Gathering ${selectedDataTypes.join(", ")} data for ${vehicleText}...`,
      "Processing telemetry information...",
      "Analyzing fleet patterns and behaviors...",
      "Identifying potential issues and insights...",
      "Generating intelligent recommendations...",
      "Finalizing comprehensive report...",
      "Almost ready, applying finishing touches..."
    ];
    let messageIndex = 0;
    this.loadingMessage.set(messages[messageIndex]);
    this.loadingInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      this.loadingMessage.set(messages[messageIndex]);
    }, 3e3);
  }
  stopLoadingMessages() {
    if (isDefined(this.loadingInterval)) {
      clearInterval(this.loadingInterval);
      this.loadingInterval = null;
    }
  }
  /**
   * Columns that should include unique sample values for AI context.
   * Format: { dataType: ['columnName1', 'columnName2'] }
   * Supports wildcards: 'io.*.name' matches 'io.ignition.name', 'io.door.name', etc.
   */
  columnsWithSampleValues = {
    trips: [],
    events: ["eventType", "eventClass"],
    alerts: ["eventType", "eventClass"],
    telemetry: ["io.*.name"]
  };
  /**
   * Extracts column names from an array of data items.
   * For specified columns, includes unique sample values (e.g., "eventType:Speeding,Harsh Braking").
   * Supports wildcard patterns (e.g., "io.*.name" matches "io.ignition.name").
   * @param items - Array of data items
   * @param dataType - Type of data (trips, events, alerts, telemetry)
   */
  extractColumnNames(items, dataType) {
    if (isNullOrUndefined(items) || items.length === 0)
      return [];
    const columnNames = this.flattenKeys(items[0]);
    const columnsToEnhance = this.columnsWithSampleValues[dataType] ?? [];
    if (columnsToEnhance.length === 0) {
      return columnNames;
    }
    return columnNames.map((colName) => {
      if (this.shouldEnhanceColumn(colName, columnsToEnhance)) {
        const uniqueValues = this.getUniqueValues(items, colName);
        if (uniqueValues.length > 0) {
          return `${colName}:${uniqueValues.join(",")}`;
        }
      }
      return colName;
    });
  }
  /**
   * Checks if a column should be enhanced with sample values.
   * Supports exact matches and wildcard patterns (e.g., "io.*.name").
   */
  shouldEnhanceColumn(colName, patterns) {
    return patterns.some((pattern) => {
      if (pattern.includes("*")) {
        const regexPattern = pattern.replaceAll(".", String.raw`\.`).replaceAll("*", "[^.]+");
        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(colName);
      }
      return colName === pattern;
    });
  }
  /**
   * Extracts unique values for a specific column from an array of items.
   * Supports dot-notation paths (e.g., "io.ignition.name").
   * Limits to first 10 unique values to keep payload manageable.
   */
  getUniqueValues(items, columnName) {
    const values = /* @__PURE__ */ new Set();
    const maxValues = 10;
    for (const item of items) {
      if (values.size >= maxValues)
        break;
      const value = this.getNestedValue(item, columnName);
      if (value !== void 0 && value !== null && value !== "") {
        let stringValue;
        if (typeof value === "object") {
          stringValue = JSON.stringify(value);
        } else if (typeof value === "string") {
          stringValue = value;
        } else if (typeof value === "number" || typeof value === "boolean") {
          stringValue = String(value);
        } else {
          stringValue = "[Unknown]";
        }
        values.add(stringValue);
      }
    }
    return Array.from(values);
  }
  /**
   * Gets a nested value from an object using dot notation.
   * e.g., getNestedValue({ io: { ignition: { name: 'Ignition' } } }, 'io.ignition.name') -> 'Ignition'
   */
  getNestedValue(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === void 0 || current === null)
        return void 0;
      if (typeof current === "object" && current !== null) {
        current = current[part];
      } else {
        return void 0;
      }
    }
    return current;
  }
  /**
   * Recursively flattens object keys using dot notation.
   * e.g., { stats: { distance: 100 } } -> ['stats.distance']
   */
  flattenKeys(obj, prefix = "") {
    const keys = [];
    for (const key of Object.keys(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];
      if (isDefined(value) && typeof value === "object" && value !== null && !Array.isArray(value)) {
        keys.push(...this.flattenKeys(value, fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    return keys;
  }
  /**
   * Builds a summarized version of aggregated data where trips, events,
   * telemetry, and alerts contain only column names instead of actual data.
   * This helps the LLM understand the data structure without the full payload.
   */
  buildSummarizedData(aggregatedData) {
    const summarized = {
      vehicles: {},
      metadata: aggregatedData.metadata
    };
    for (const [vehicleName, vehicleData] of Object.entries(aggregatedData.vehicles)) {
      summarized.vehicles[vehicleName] = {
        trips: this.extractColumnNames(vehicleData.trips, "trips"),
        events: this.extractColumnNames(vehicleData.events, "events"),
        telemetry: this.extractColumnNames(vehicleData.telemetry, "telemetry"),
        alerts: this.extractColumnNames(vehicleData.alerts, "alerts"),
        data_summary: vehicleData.data_summary
      };
    }
    return summarized;
  }
  ngOnDestroy() {
    this.stopLoadingMessages();
  }
  getSelectedVehicleNames() {
    const assetIds = this._selectedAssetIds();
    const allAssets = this.assets();
    if (!Array.isArray(allAssets) || !Array.isArray(assetIds)) {
      return [];
    }
    return allAssets.filter((asset) => isDefined(asset?.value) && assetIds.includes(asset.value)).map((asset) => asset.label || asset.value || "Unknown Vehicle");
  }
  onCopyRequestBody() {
    if (!this.isReadyForTesting())
      return;
    const selectedAssetIds = this.selectedAssetIds;
    const formValues = this.apiForm.value;
    const selectedDataTypes = this.selectedDataTypes();
    const selectedClient = this.selectedClientSignal();
    if (selectedAssetIds.length === 0)
      return;
    const startDate = new Date(formValues.startDate);
    const endDate = new Date(formValues.endDate);
    const requestBody = {
      client_id: selectedClient?.id,
      start_date: startDate.toISOString(),
      end_date: endDate.toISOString(),
      vehicle_ids: selectedAssetIds,
      data_types: selectedDataTypes.length > 0 ? selectedDataTypes : ["trips", "events", "telemetry"],
      report_query: formValues.reportQuery,
      key_base_url: this.apiUrlService.getCurrentApiUrl(),
      key_auth_token: this.authTokenManagerService.getAccessToken(),
      client_profile: {
        id: selectedClient?.id,
        name: selectedClient?.name,
        timeZoneId: selectedClient?.timeZoneId ?? "UTC",
        language: selectedClient?.language ?? "en",
        currency: "ZAR",
        measurementUnits: selectedClient?.measurementUnits ?? {
          distanceUnit: "kilometres",
          speedUnit: "kilometresPerHour",
          volumeUnit: "litres",
          weightUnit: "kilograms",
          temperatureUnit: "celsius",
          altitudeUnit: "metres",
          areaUnit: "squareKilometres"
        }
      }
    };
    navigator.clipboard.writeText(JSON.stringify(requestBody, null, 2)).then(() => {
      this.successMessage.set("Request body copied to clipboard!");
      setTimeout(() => this.successMessage.set(null), 3e3);
    }).catch(() => {
      this.errorMessage.set("Failed to copy to clipboard");
    });
  }
  static \u0275fac = function AnalyticalReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticalReportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticalReportComponent, selectors: [["app-analytical-report"]], viewQuery: function AnalyticalReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c08, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.queryChatComponent = _t.first);
    }
  }, decls: 16, vars: 22, consts: [["queryChatComponent", ""], [1, "analytical-report-container"], [1, "floating-message", "error"], [1, "floating-message", "success"], [1, "dashboard-view", 3, "hidden"], [1, "dashboard-header"], ["icon", "pi pi-arrow-left", "label", "Back to Chat", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], [1, "dashboard-actions"], ["label", "New Report", "icon", "pi pi-plus", "severity", "primary", "size", "small", 3, "onClick"], [3, "response", "isLoading", "error", "userQuery", "dateRange", "vehicleNames", "clientTimeZone", "clientLanguage"], [1, "chat-view", 3, "hidden"], [3, "vehiclesChanged", "dateRangeChanged", "dataTypesChanged", "summary", "availableVehicles", "selectedVehicleIds", "collectingDataTypes"], [1, "chat-area"], [3, "dataCollectionTriggered", "generateReport", "queryUpdated", "confidenceUpdated", "dateRangeSelected", "vehiclesSelected", "dataTypesSelected", "dateRange", "selectedVehicles", "clientInfo", "fullWidthMode", "guidedMode", "availableVehiclesForSelection"], [3, "generateReport", "queryChanged", "query", "confidence", "isLoading", "isCollecting", "collectionProgress"], [1, "loading-overlay"], ["severity", "error"], ["severity", "success"], [3, "recalculate", "response", "isLoading", "error", "userQuery", "dateRange", "vehicleNames", "clientTimeZone", "clientLanguage"], [1, "loading-content"], ["styleClass", "w-12 h-12"], [1, "loading-message"], [1, "loading-hint"]], template: function AnalyticalReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, AnalyticalReportComponent_Conditional_1_Template, 3, 1, "div", 2);
      \u0275\u0275conditionalCreate(2, AnalyticalReportComponent_Conditional_2_Template, 3, 1, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "p-button", 6);
      \u0275\u0275listener("onClick", function AnalyticalReportComponent_Template_p_button_onClick_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackToChat());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "p-button", 8);
      \u0275\u0275listener("onClick", function AnalyticalReportComponent_Template_p_button_onClick_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNewReport());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(8, AnalyticalReportComponent_Conditional_8_Template, 1, 8, "app-analytics-dashboard", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 10)(10, "app-chat-summary-header", 11);
      \u0275\u0275listener("vehiclesChanged", function AnalyticalReportComponent_Template_app_chat_summary_header_vehiclesChanged_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHeaderVehiclesChanged($event));
      })("dateRangeChanged", function AnalyticalReportComponent_Template_app_chat_summary_header_dateRangeChanged_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHeaderDateRangeChanged($event));
      })("dataTypesChanged", function AnalyticalReportComponent_Template_app_chat_summary_header_dataTypesChanged_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHeaderDataTypesChanged($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 12)(12, "app-query-chat", 13, 0);
      \u0275\u0275listener("dataCollectionTriggered", function AnalyticalReportComponent_Template_app_query_chat_dataCollectionTriggered_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChatDataCollectionTriggered($event));
      })("generateReport", function AnalyticalReportComponent_Template_app_query_chat_generateReport_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChatGenerateReport($event));
      })("queryUpdated", function AnalyticalReportComponent_Template_app_query_chat_queryUpdated_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onQueryUpdated($event));
      })("confidenceUpdated", function AnalyticalReportComponent_Template_app_query_chat_confidenceUpdated_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onConfidenceUpdated($event));
      })("dateRangeSelected", function AnalyticalReportComponent_Template_app_query_chat_dateRangeSelected_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChatDateRangeSelected($event));
      })("vehiclesSelected", function AnalyticalReportComponent_Template_app_query_chat_vehiclesSelected_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChatVehiclesSelected($event));
      })("dataTypesSelected", function AnalyticalReportComponent_Template_app_query_chat_dataTypesSelected_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChatDataTypesSelected($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "app-chat-footer-preview", 14);
      \u0275\u0275listener("generateReport", function AnalyticalReportComponent_Template_app_chat_footer_preview_generateReport_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFooterGenerateReport());
      })("queryChanged", function AnalyticalReportComponent_Template_app_chat_footer_preview_queryChanged_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onQueryChanged($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(15, AnalyticalReportComponent_Conditional_15_Template, 7, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_21_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("hidden", !ctx.dashboardResponse() || ctx.showChatView());
      \u0275\u0275advance(2);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.dashboardResponse() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("hidden", !ctx.showChatView());
      \u0275\u0275advance();
      \u0275\u0275property("summary", ctx.headerSummary())("availableVehicles", ctx.headerAvailableVehicles())("selectedVehicleIds", ctx.headerSelectedVehicleIds())("collectingDataTypes", ctx.collectingDataTypes());
      \u0275\u0275advance(2);
      \u0275\u0275property("dateRange", ctx.chatDateRange())("selectedVehicles", ctx.chatSelectedVehicles())("clientInfo", ctx.chatClientInfo())("fullWidthMode", true)("guidedMode", true)("availableVehiclesForSelection", ctx.availableVehiclesForChat());
      \u0275\u0275advance(2);
      \u0275\u0275property("query", ctx.currentQuery())("confidence", ctx.currentConfidence())("isLoading", ctx.isTestingApi())("isCollecting", ctx.isCollectingData())("collectionProgress", ((tmp_21_0 = ctx.collectionProgress()) == null ? null : tmp_21_0.percentage) ?? 0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isTestingApi() && !ctx.isCollectingData() ? 15 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    AutoCompleteModule,
    MultiSelectModule,
    DatePickerModule,
    MessageModule,
    Message,
    CardModule,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    ProgressSpinner,
    InputTextModule,
    AccordionModule,
    AnalyticsDashboardComponent,
    QueryChatComponent,
    ChatSummaryHeaderComponent,
    ChatFooterPreviewComponent
  ], styles: [`

[_nghost-%COMP%] {
  display: block;
  height: 100%;
}
.analytical-report-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.floating-message[_ngcontent-%COMP%] {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  max-width: 90%;
  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;
}
.floating-message.error[_ngcontent-%COMP%]     .p-message {
  background-color: var(--red-50, #fef2f2);
  border-color: var(--red-200, #fecaca);
}
.floating-message.success[_ngcontent-%COMP%]     .p-message {
  background-color: var(--green-50, #f0fdf4);
  border-color: var(--green-200, #bbf7d0);
}
@keyframes _ngcontent-%COMP%_slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.chat-view[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.chat-view[hidden][_ngcontent-%COMP%] {
  display: none !important;
}
.chat-view[_ngcontent-%COMP%]   app-chat-summary-header[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.chat-view[_ngcontent-%COMP%]   .chat-area[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--surface-ground, #f1f5f9);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.chat-view[_ngcontent-%COMP%]   app-chat-footer-preview[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.dashboard-view[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.dashboard-view[hidden][_ngcontent-%COMP%] {
  display: none !important;
}
.dashboard-view[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-bottom: 1px solid var(--input-border-color, #e2e8f0);
  flex-shrink: 0;
}
.dashboard-view[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .dashboard-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
}
.dashboard-view[_ngcontent-%COMP%]   app-analytics-dashboard[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
}
.loading-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background-color: var(--mask-bg, rgba(255, 255, 255, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {
  text-align: center;
}
.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary-color, #1e40af);
}
.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-hint[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-color-secondary, #64748b);
}
@media (max-width: 640px) {
  .dashboard-view[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .dashboard-view[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .dashboard-actions[_ngcontent-%COMP%] {
    justify-content: flex-end;
  }
}
/*# sourceMappingURL=analytical-report.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnalyticalReportComponent, [{
    type: Component,
    args: [{ selector: "app-analytical-report", imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SelectModule,
      AutoCompleteModule,
      MultiSelectModule,
      DatePickerModule,
      MessageModule,
      CardModule,
      ButtonModule,
      ProgressSpinnerModule,
      InputTextModule,
      AccordionModule,
      AnalyticsDashboardComponent,
      QueryChatComponent,
      ChatSummaryHeaderComponent,
      ChatFooterPreviewComponent
    ], template: '<div class="analytical-report-container">\n  <!-- Error/Success Messages (floating) -->\n  @if (errorMessage()) {\n    <div class="floating-message error">\n      <p-message severity="error">{{ errorMessage() }}</p-message>\n    </div>\n  }\n\n  @if (successMessage()) {\n    <div class="floating-message success">\n      <p-message severity="success">{{ successMessage() }}</p-message>\n    </div>\n  }\n\n  <!-- Dashboard View (shown after successful report generation) -->\n  <!-- Using [hidden] instead of @if to preserve chat component state when switching views -->\n  <div class="dashboard-view" [hidden]="!dashboardResponse() || showChatView()">\n    <div class="dashboard-header">\n      <p-button\n        icon="pi pi-arrow-left"\n        label="Back to Chat"\n        (onClick)="onBackToChat()"\n        severity="secondary"\n        [outlined]="true"\n        size="small"\n      />\n      <div class="dashboard-actions">\n        <p-button\n          label="New Report"\n          icon="pi pi-plus"\n          (onClick)="onNewReport()"\n          severity="primary"\n          size="small"\n        />\n      </div>\n    </div>\n\n    @if (dashboardResponse()) {\n      <app-analytics-dashboard\n        [response]="dashboardResponse()"\n        [isLoading]="false"\n        [error]="undefined"\n        [userQuery]="lastReportQuery()"\n        [dateRange]="formatDateRange()"\n        [vehicleNames]="getSelectedVehicleNames()"\n        [clientTimeZone]="selectedClientSignal()?.timeZoneId ?? undefined"\n        [clientLanguage]="selectedClientSignal()?.language ?? undefined"\n        (recalculate)="onRecalculate()"\n      >\n      </app-analytics-dashboard>\n    }\n  </div>\n\n  <!-- Chat View (main interface) -->\n  <!-- Using [hidden] instead of @if to preserve component state when switching to dashboard -->\n  <div class="chat-view" [hidden]="!showChatView()">\n    <!-- Summary Header (fixed at top) -->\n    <app-chat-summary-header\n      [summary]="headerSummary()"\n      [availableVehicles]="headerAvailableVehicles()"\n      [selectedVehicleIds]="headerSelectedVehicleIds()"\n      [collectingDataTypes]="collectingDataTypes()"\n      (vehiclesChanged)="onHeaderVehiclesChanged($event)"\n      (dateRangeChanged)="onHeaderDateRangeChanged($event)"\n      (dataTypesChanged)="onHeaderDataTypesChanged($event)"\n    />\n\n    <!-- Scrollable Chat Area -->\n    <div class="chat-area">\n      <app-query-chat\n        #queryChatComponent\n        [dateRange]="chatDateRange()"\n        [selectedVehicles]="chatSelectedVehicles()"\n        [clientInfo]="chatClientInfo()"\n        [fullWidthMode]="true"\n        [guidedMode]="true"\n        [availableVehiclesForSelection]="availableVehiclesForChat()"\n        (dataCollectionTriggered)="onChatDataCollectionTriggered($event)"\n        (generateReport)="onChatGenerateReport($event)"\n        (queryUpdated)="onQueryUpdated($event)"\n        (confidenceUpdated)="onConfidenceUpdated($event)"\n        (dateRangeSelected)="onChatDateRangeSelected($event)"\n        (vehiclesSelected)="onChatVehiclesSelected($event)"\n        (dataTypesSelected)="onChatDataTypesSelected($event)"\n      />\n    </div>\n\n    <!-- Footer Preview (fixed at bottom) -->\n    <app-chat-footer-preview\n      [query]="currentQuery()"\n      [confidence]="currentConfidence()"\n      [isLoading]="isTestingApi()"\n      [isCollecting]="isCollectingData()"\n      [collectionProgress]="collectionProgress()?.percentage ?? 0"\n      (generateReport)="onFooterGenerateReport()"\n      (queryChanged)="onQueryChanged($event)"\n    />\n  </div>\n\n  <!-- Loading Overlay -->\n  @if (isTestingApi() && !isCollectingData()) {\n    <div class="loading-overlay">\n      <div class="loading-content">\n        <p-progressSpinner styleClass="w-12 h-12" />\n        <p class="loading-message">{{ loadingMessage() }}</p>\n        <p class="loading-hint">Analysis may take up to 60 seconds</p>\n      </div>\n    </div>\n  }\n</div>\n', styles: [`/* src/app/features/development/components/analytical-report/analytical-report.component.scss */
:host {
  display: block;
  height: 100%;
}
.analytical-report-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.floating-message {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  max-width: 90%;
  animation: slideDown 0.3s ease-out;
}
.floating-message.error ::ng-deep .p-message {
  background-color: var(--red-50, #fef2f2);
  border-color: var(--red-200, #fecaca);
}
.floating-message.success ::ng-deep .p-message {
  background-color: var(--green-50, #f0fdf4);
  border-color: var(--green-200, #bbf7d0);
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.chat-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.chat-view[hidden] {
  display: none !important;
}
.chat-view app-chat-summary-header {
  flex-shrink: 0;
}
.chat-view .chat-area {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--surface-ground, #f1f5f9);
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.chat-view app-chat-footer-preview {
  flex-shrink: 0;
}
.dashboard-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.dashboard-view[hidden] {
  display: none !important;
}
.dashboard-view .dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--card-background-color, #ffffff);
  border-bottom: 1px solid var(--input-border-color, #e2e8f0);
  flex-shrink: 0;
}
.dashboard-view .dashboard-header .dashboard-actions {
  display: flex;
  gap: 0.5rem;
}
.dashboard-view app-analytics-dashboard {
  flex: 1;
  overflow-y: auto;
}
.loading-overlay {
  position: fixed;
  inset: 0;
  background-color: var(--mask-bg, rgba(255, 255, 255, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.loading-overlay .loading-content {
  text-align: center;
}
.loading-overlay .loading-content .loading-message {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary-color, #1e40af);
}
.loading-overlay .loading-content .loading-hint {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-color-secondary, #64748b);
}
@media (max-width: 640px) {
  .dashboard-view .dashboard-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .dashboard-view .dashboard-header .dashboard-actions {
    justify-content: flex-end;
  }
}
/*# sourceMappingURL=analytical-report.component.css.map */
`] }]
  }], () => [], { queryChatComponent: [{
    type: ViewChild,
    args: ["queryChatComponent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticalReportComponent, { className: "AnalyticalReportComponent", filePath: "src/app/features/development/components/analytical-report/analytical-report.component.ts", lineNumber: 127 });
})();

export {
  AnalyticalReportComponent
};
//# sourceMappingURL=chunk-4XKFW6UE.js.map
