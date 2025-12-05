import {
  Card,
  CardModule,
  Chart,
  registerables
} from "./chunk-UUDHIPGY.js";
import {
  AccordionModule
} from "./chunk-Y7L4QABX.js";
import {
  AutoCompleteModule,
  Button,
  ButtonModule,
  DatePicker,
  DatePickerModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  InputTextModule,
  Message,
  MessageModule,
  MultiSelect,
  MultiSelectModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ProgressSpinner,
  ProgressSpinnerModule,
  ReactiveFormsModule,
  SelectModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-34KDJQNU.js";
import {
  ApiUrlService,
  AssetsService,
  AuthTokenManagerService,
  ClientDataService,
  CommonModule,
  HttpClient,
  HttpHeaders,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
  isDefined,
  isNullOrUndefined
} from "./chunk-WCIIZRTT.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YBDZSV5R.js";
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
function SummaryBlockComponent_div_7_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
  if (rf & 2) {
    const highlight_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getTrendIcon(highlight_r1.trend));
    \u0275\u0275attribute("aria-label", highlight_r1.trend + " trend");
  }
}
function SummaryBlockComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275template(4, SummaryBlockComponent_div_7_div_1_i_4_Template, 1, 2, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const highlight_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.getHighlightClass(highlight_r1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", highlight_r1.value, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", highlight_r1.trend);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(highlight_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "severity-" + highlight_r1.severity);
  }
}
function SummaryBlockComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, SummaryBlockComponent_div_7_div_1_Template, 8, 5, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.block.content.highlights);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SummaryBlockComponent, selectors: [["app-summary-block"]], inputs: { block: "block" }, decls: 8, vars: 4, consts: [[1, "summary-block", 3, "ngClass"], [1, "summary-header"], [1, "summary-title"], [1, "summary-narrative"], ["class", "highlights", 4, "ngIf"], [1, "highlights"], ["class", "highlight-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "highlight-item", 3, "ngClass"], [1, "highlight-content"], [1, "highlight-value"], [3, "ngClass", 4, "ngIf"], [1, "highlight-label"], [1, "highlight-indicator", 3, "ngClass"], [3, "ngClass"]], template: function SummaryBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SummaryBlockComponent_div_7_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getThemeClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.narrative);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.highlights.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.summary-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid transparent;\n}\n.summary-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.summary-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.summary-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.25px;\n}\n.summary-narrative[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.summary-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.7;\n  margin: 0;\n  font-size: 1rem;\n}\n.highlights[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.highlight-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 18px;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.highlight-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.highlight-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.highlight-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 6px;\n}\n.highlight-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.highlight-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.highlight-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  transition: width 0.3s ease;\n}\n.highlight-item[_ngcontent-%COMP%]:hover   .highlight-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n}\n.trend-up[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.trend-up[_ngcontent-%COMP%]::before {\n  content: "\\2191";\n}\n.trend-down[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.trend-down[_ngcontent-%COMP%]::before {\n  content: "\\2193";\n}\n.trend-stable[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.trend-stable[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n}\n.severity-good[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n}\n.severity-warning[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f59e0b,\n      #d97706);\n}\n.severity-critical[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444,\n      #dc2626);\n}\n.severity-neutral[_ngcontent-%COMP%]   .highlight-indicator[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #6b7280,\n      #4b5563);\n}\n.summary-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.summary-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.summary-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.summary-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.summary-block.theme-info[_ngcontent-%COMP%] {\n  border-left-color: #06b6d4;\n}\n.dark[_nghost-%COMP%]   .summary-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .summary-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .highlight-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .highlight-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .summary-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .highlights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .summary-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .highlight-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=summary-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SummaryBlockComponent, [{
    type: Component,
    args: [{ selector: "app-summary-block", standalone: true, imports: [CommonModule], template: `<div class="summary-block" [ngClass]="getThemeClass()">
  <div class="summary-header">
    <h3 class="summary-title">{{ block.content.title }}</h3>
  </div>

  <div class="summary-narrative">
    <p>{{ block.content.narrative }}</p>
  </div>

  <div class="highlights" *ngIf="block.content.highlights.length > 0">
    <div
      *ngFor="let highlight of block.content.highlights"
      class="highlight-item"
      [ngClass]="getHighlightClass(highlight)"
    >
      <div class="highlight-content">
        <div class="highlight-value">
          {{ highlight.value }}
          <i
            *ngIf="highlight.trend"
            [ngClass]="getTrendIcon(highlight.trend)"
            [attr.aria-label]="highlight.trend + ' trend'"
          ></i>
        </div>
        <div class="highlight-label">{{ highlight.label }}</div>
      </div>

      <div
        class="highlight-indicator"
        [ngClass]="'severity-' + highlight.severity"
      ></div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/summary-block/summary-block.component.scss */\n.summary-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid transparent;\n}\n.summary-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.summary-header {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.summary-title {\n  color: var(--text-color);\n  font-size: 1.375rem;\n  font-weight: 700;\n  margin: 0;\n  letter-spacing: -0.25px;\n}\n.summary-narrative {\n  margin-bottom: 24px;\n}\n.summary-narrative p {\n  color: var(--text-color-secondary);\n  line-height: 1.7;\n  margin: 0;\n  font-size: 1rem;\n}\n.highlights {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n}\n.highlight-item {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 18px;\n  position: relative;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n.highlight-item:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.highlight-content {\n  position: relative;\n  z-index: 2;\n}\n.highlight-value {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 6px;\n}\n.highlight-value i {\n  font-size: 1rem;\n  transition: transform 0.2s ease;\n}\n.highlight-label {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.highlight-indicator {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  transition: width 0.3s ease;\n}\n.highlight-item:hover .highlight-indicator {\n  width: 8px;\n}\n.trend-up {\n  color: #22c55e;\n}\n.trend-up::before {\n  content: "\\2191";\n}\n.trend-down {\n  color: #ef4444;\n}\n.trend-down::before {\n  content: "\\2193";\n}\n.trend-stable {\n  color: #6b7280;\n}\n.trend-stable::before {\n  content: "\\2192";\n}\n.severity-good .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #22c55e,\n      #16a34a);\n}\n.severity-warning .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #f59e0b,\n      #d97706);\n}\n.severity-critical .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444,\n      #dc2626);\n}\n.severity-neutral .highlight-indicator {\n  background:\n    linear-gradient(\n      180deg,\n      #6b7280,\n      #4b5563);\n}\n.summary-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.summary-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.summary-block.theme-danger {\n  border-left-color: #ef4444;\n}\n.summary-block.theme-success {\n  border-left-color: #22c55e;\n}\n.summary-block.theme-info {\n  border-left-color: #06b6d4;\n}\n:host-context(.dark) .summary-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .highlight-item {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .summary-block {\n    padding: 16px;\n  }\n  .highlights {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .summary-title {\n    font-size: 1.25rem;\n  }\n  .highlight-value {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=summary-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SummaryBlockComponent, { className: "SummaryBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/summary-block/summary-block.component.ts", lineNumber: 15 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.ts
function KpiBlockComponent_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14);
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
function KpiBlockComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, KpiBlockComponent_div_5_div_6_Template, 7, 6, "div", 9);
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
    \u0275\u0275property("ngIf", metric_r1.comparison);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KpiBlockComponent, selectors: [["app-kpi-block"]], inputs: { block: "block" }, decls: 6, vars: 5, consts: [[1, "kpi-block", 3, "ngClass"], [1, "kpi-header"], [1, "kpi-title"], [1, "metrics-container", 3, "ngClass"], ["class", "metric-item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "metric-item", 3, "ngClass"], [1, "metric-main"], [1, "metric-value"], [1, "metric-label"], ["class", "metric-comparison", 3, "ngClass", 4, "ngIf"], [1, "metric-comparison", 3, "ngClass"], [1, "comparison-indicator"], [3, "ngClass"], [1, "comparison-percentage"], [1, "comparison-label"]], template: function KpiBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275template(5, KpiBlockComponent_div_5_Template, 7, 5, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getOrientationClass());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.block.content.metrics)("ngForTrackBy", ctx.trackByMetric);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.kpi-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.kpi-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.kpi-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.kpi-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.metrics-container.orientation-horizontal[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.metrics-container.orientation-vertical[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.metric-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.metric-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.metric-main[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-600);\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n}\n.metric-comparison[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid var(--surface-200);\n}\n.metric-comparison.improvement[_ngcontent-%COMP%] {\n  --comparison-color: #22c55e;\n}\n.metric-comparison.decline[_ngcontent-%COMP%] {\n  --comparison-color: #ef4444;\n}\n.comparison-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--comparison-color);\n  font-weight: 600;\n}\n.comparison-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  transition: transform 0.2s ease;\n}\n.comparison-indicator[_ngcontent-%COMP%]   .comparison-percentage[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.comparison-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n.trend-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-up 2s infinite;\n}\n.trend-up[_ngcontent-%COMP%]::before {\n  content: "\\2197";\n}\n.trend-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-down 2s infinite;\n}\n.trend-down[_ngcontent-%COMP%]::before {\n  content: "\\2198";\n}\n.trend-stable[_ngcontent-%COMP%]::before {\n  content: "\\2192";\n}\n@keyframes _ngcontent-%COMP%_bounce-up {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-3px);\n  }\n  60% {\n    transform: translateY(-1px);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce-down {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(3px);\n  }\n  60% {\n    transform: translateY(1px);\n  }\n}\n.kpi-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.kpi-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.kpi-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.kpi-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.dark[_nghost-%COMP%]   .kpi-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .metric-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .metric-comparison[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .metric-comparison[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .kpi-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .metrics-container.orientation-horizontal[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n  .metric-item[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .metric-value[_ngcontent-%COMP%] {\n    font-size: 1.625rem;\n  }\n  .metrics-container[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=kpi-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KpiBlockComponent, [{
    type: Component,
    args: [{ selector: "app-kpi-block", standalone: true, imports: [CommonModule], template: `<div class="kpi-block" [ngClass]="getBlockClasses()">
  <div class="kpi-header">
    <h4 class="kpi-title">{{ block.content.title }}</h4>
  </div>

  <div class="metrics-container" [ngClass]="getOrientationClass()">
    <div
      *ngFor="let metric of block.content.metrics; trackBy: trackByMetric"
      class="metric-item"
      [ngClass]="getMetricClasses(metric)"
    >
      <div class="metric-main">
        <div class="metric-value">
          {{ formatValue(metric.value, metric.format) }}{{ metric.unit }}
        </div>
        <div class="metric-label">{{ metric.label }}</div>
      </div>

      <div
        *ngIf="metric.comparison"
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
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.scss */\n.kpi-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.kpi-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.kpi-header {\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.kpi-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metrics-container {\n  display: grid;\n  gap: 20px;\n}\n.metrics-container.orientation-horizontal {\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.metrics-container.orientation-vertical {\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n.metric-item {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 20px;\n  transition: all 0.2s ease;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.metric-item:hover {\n  background: #f3f4f6;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.metric-main {\n  margin-bottom: 12px;\n}\n.metric-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--primary-600);\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.metric-label {\n  font-size: 0.8125rem;\n  color: var(--text-color-secondary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.75px;\n}\n.metric-comparison {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 12px;\n  border-top: 1px solid var(--surface-200);\n}\n.metric-comparison.improvement {\n  --comparison-color: #22c55e;\n}\n.metric-comparison.decline {\n  --comparison-color: #ef4444;\n}\n.comparison-indicator {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--comparison-color);\n  font-weight: 600;\n}\n.comparison-indicator i {\n  font-size: 0.875rem;\n  transition: transform 0.2s ease;\n}\n.comparison-indicator .comparison-percentage {\n  font-size: 0.875rem;\n}\n.comparison-label {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n}\n.trend-up {\n  animation: bounce-up 2s infinite;\n}\n.trend-up::before {\n  content: "\\2197";\n}\n.trend-down {\n  animation: bounce-down 2s infinite;\n}\n.trend-down::before {\n  content: "\\2198";\n}\n.trend-stable::before {\n  content: "\\2192";\n}\n@keyframes bounce-up {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-3px);\n  }\n  60% {\n    transform: translateY(-1px);\n  }\n}\n@keyframes bounce-down {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(3px);\n  }\n  60% {\n    transform: translateY(1px);\n  }\n}\n.kpi-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.kpi-block.theme-success {\n  border-left-color: #22c55e;\n}\n.kpi-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.kpi-block.theme-danger {\n  border-left-color: #ef4444;\n}\n:host-context(.dark) .kpi-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .metric-item {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .metric-item:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .metric-comparison {\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .kpi-block {\n    padding: 16px;\n  }\n  .metrics-container.orientation-horizontal {\n    grid-template-columns: 1fr;\n  }\n  .metric-value {\n    font-size: 1.875rem;\n  }\n  .metric-item {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .metric-value {\n    font-size: 1.625rem;\n  }\n  .metrics-container {\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=kpi-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KpiBlockComponent, { className: "KpiBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/kpi-block/kpi-block.component.ts", lineNumber: 16 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.ts
var _c0 = ["chartCanvas"];
var _c1 = ["chartContainer"];
function ChartBlockComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h4", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "button", 11);
    \u0275\u0275listener("click", function ChartBlockComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadChart());
    });
    \u0275\u0275elementStart(5, "i", 12);
    \u0275\u0275text(6, "\u2B07");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.title);
  }
}
function ChartBlockComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading chart...");
    \u0275\u0275elementEnd()();
  }
}
function ChartBlockComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.description);
  }
}
function ChartBlockComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
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
function ChartBlockComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275template(2, ChartBlockComponent_div_8_div_2_Template, 6, 4, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.legendItems);
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
  }, inputs: { block: "block" }, decls: 9, vars: 5, consts: [["chartContainer", ""], ["chartCanvas", ""], [1, "chart-block", 3, "ngClass"], ["class", "chart-header", 4, "ngIf"], [1, "chart-container"], ["class", "chart-loading", 4, "ngIf"], ["class", "chart-description", 4, "ngIf"], ["class", "chart-legend", 4, "ngIf"], [1, "chart-header"], [1, "chart-title"], [1, "chart-actions"], ["title", "Download Chart", 1, "action-btn", 3, "click"], [1, "download-icon"], [1, "chart-loading"], [1, "loading-spinner"], [1, "chart-description"], [1, "chart-legend"], [1, "legend-items"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "legend-item"], [1, "legend-color"], [1, "legend-label"], [1, "legend-value"]], template: function ChartBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, ChartBlockComponent_div_1_Template, 7, 1, "div", 3);
      \u0275\u0275elementStart(2, "div", 4, 0);
      \u0275\u0275element(4, "canvas", null, 1);
      \u0275\u0275template(6, ChartBlockComponent_div_6_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ChartBlockComponent_div_7_Template, 3, 1, "div", 6)(8, ChartBlockComponent_div_8_Template, 3, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.title);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.description);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCustomLegend);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.chart-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.chart-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.chart-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.download-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n}\n.chart-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 350px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.chart-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-0);\n  border-radius: 8px;\n  z-index: 10;\n}\n.chart-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--surface-200);\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.chart-description[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.chart-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n}\n.legend-items[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-50);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.legend-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.legend-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  flex: 1;\n}\n.legend-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.chart-block.theme-primary[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n}\n.chart-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.chart-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.chart-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.dark[_nghost-%COMP%]   .chart-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n.dark[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .chart-legend[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-legend[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .chart-loading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-loading[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n@media (max-width: 768px) {\n  .chart-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n  .chart-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .legend-items[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .chart-container[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n}\n/*# sourceMappingURL=chart-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartBlockComponent, [{
    type: Component,
    args: [{ selector: "app-chart-block", standalone: true, imports: [CommonModule], template: '<div class="chart-block" [ngClass]="getBlockClasses()">\n  <div class="chart-header" *ngIf="block.content.title">\n    <h4 class="chart-title">{{ block.content.title }}</h4>\n    <div class="chart-actions">\n      <button\n        class="action-btn"\n        (click)="downloadChart()"\n        title="Download Chart"\n      >\n        <i class="download-icon">\u2B07</i>\n      </button>\n    </div>\n  </div>\n\n  <div class="chart-container" #chartContainer>\n    <canvas #chartCanvas></canvas>\n    <div class="chart-loading" *ngIf="isLoading">\n      <div class="loading-spinner"></div>\n      <p>Loading chart...</p>\n    </div>\n  </div>\n\n  <div class="chart-description" *ngIf="block.content.description">\n    <p>{{ block.content.description }}</p>\n  </div>\n\n  <div class="chart-legend" *ngIf="showCustomLegend">\n    <div class="legend-items">\n      <div *ngFor="let item of legendItems" class="legend-item">\n        <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->\n        <span class="legend-color" [style.background-color]="item.color"></span>\n        <span class="legend-label">{{ item.label }}</span>\n        <span class="legend-value">{{ item.value }}</span>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.scss */\n.chart-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.chart-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.chart-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chart-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.download-icon {\n  font-size: 14px;\n  font-style: normal;\n}\n.chart-container {\n  position: relative;\n  height: 350px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.chart-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface-0);\n  border-radius: 8px;\n  z-index: 10;\n}\n.chart-loading p {\n  margin: 12px 0 0 0;\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--surface-200);\n  border-top: 3px solid var(--primary-500);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.chart-description {\n  margin-top: 16px;\n}\n.chart-description p {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.chart-legend {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n}\n.legend-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-50);\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.legend-item:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.legend-color {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.legend-label {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary);\n  flex: 1;\n}\n.legend-value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n.chart-block.theme-primary {\n  border-left-color: #3b82f6;\n}\n.chart-block.theme-success {\n  border-left-color: #22c55e;\n}\n.chart-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.chart-block.theme-danger {\n  border-left-color: #ef4444;\n}\n:host-context(.dark) .chart-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .action-btn {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n:host-context(.dark) .legend-item {\n  background: var(--surface-700);\n}\n:host-context(.dark) .legend-item:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .chart-legend {\n  border-top-color: var(--surface-600);\n}\n:host-context(.dark) .chart-loading {\n  background: var(--surface-800);\n}\n@media (max-width: 768px) {\n  .chart-block {\n    padding: 16px;\n  }\n  .chart-container {\n    height: 280px;\n  }\n  .chart-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .legend-items {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .chart-container {\n    height: 240px;\n  }\n}\n/*# sourceMappingURL=chart-block.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartBlockComponent, { className: "ChartBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/chart-block/chart-block.component.ts", lineNumber: 25 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.ts
function AlertBlockComponent_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 22);
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
function AlertBlockComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275template(5, AlertBlockComponent_div_15_div_5_Template, 8, 4, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Affected ", ctx_r1.getEntityTypeLabel(), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.block.content.affected_entities)("ngForTrackBy", ctx_r1.trackByEntity);
  }
}
function AlertBlockComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "i", 25);
    \u0275\u0275text(3, "\u{1F4A1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Recommended Action:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "button", 28);
    \u0275\u0275listener("click", function AlertBlockComponent_div_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.takeAction());
    });
    \u0275\u0275text(10, " Take Action ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 29);
    \u0275\u0275listener("click", function AlertBlockComponent_div_16_Template_button_click_11_listener() {
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
function AlertBlockComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "small", 31);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertBlockComponent, selectors: [["app-alert-block"]], inputs: { block: "block" }, decls: 18, vars: 11, consts: [[1, "alert-block", 3, "ngClass"], [1, "alert-header"], [1, "alert-icon-title"], [1, "alert-icon", 3, "ngClass"], [3, "ngClass"], [1, "alert-title-timestamp"], [1, "alert-title"], [1, "alert-timestamp"], [1, "alert-severity-badge", 3, "ngClass"], [1, "alert-content"], [1, "alert-message"], ["class", "affected-entities", 4, "ngIf"], ["class", "suggested-action", 4, "ngIf"], ["class", "source-event", 4, "ngIf"], [1, "affected-entities"], [1, "affected-header"], [1, "entity-list"], ["class", "entity-item", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "entity-item", 3, "ngClass"], [1, "entity-icon"], [1, "entity-info"], [1, "entity-name"], [1, "entity-id"], [1, "suggested-action"], [1, "action-header"], [1, "action-icon"], [1, "action-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "source-event"], [1, "event-id"]], template: function AlertBlockComponent_Template(rf, ctx) {
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
      \u0275\u0275template(15, AlertBlockComponent_div_15_Template, 6, 3, "div", 11)(16, AlertBlockComponent_div_16_Template, 13, 1, "div", 12)(17, AlertBlockComponent_div_17_Template, 3, 1, "div", 13);
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
      \u0275\u0275property("ngIf", ctx.block.content.affected_entities.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.is_actionable && ctx.block.content.suggested_action);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.source_event_id);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.alert-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid;\n  position: relative;\n  overflow: hidden;\n}\n.alert-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.alert-block.severity-critical[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fef2f2);\n}\n.alert-block.severity-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fffbeb);\n}\n.alert-block.severity-info[_ngcontent-%COMP%] {\n  border-left-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #eff6ff);\n}\n.alert-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.alert-icon-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.alert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-style: normal;\n}\n.alert-icon.icon-critical[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  animation: _ngcontent-%COMP%_pulse-critical 2s infinite;\n}\n.alert-icon.icon-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  animation: _ngcontent-%COMP%_pulse-warning 3s infinite;\n}\n.alert-icon.icon-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_pulse-critical {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);\n  }\n}\n.alert-title-timestamp[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.alert-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.0625rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.alert-timestamp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.alert-severity-badge[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  color: var(--text-color);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  border: 1px solid var(--surface-200);\n}\n.alert-severity-badge.severity-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.alert-severity-badge.severity-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.alert-severity-badge.severity-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.alert-content[_ngcontent-%COMP%] {\n  space-y: 16px;\n}\n.alert-message[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n}\n.affected-entities[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 16px;\n  background: var(--surface-50);\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.affected-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.affected-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.entity-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n.entity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-0);\n  border-radius: 6px;\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s ease;\n}\n.entity-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.entity-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.entity-icon.entity-vehicle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.entity-icon.entity-driver[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.entity-icon.entity-geofence[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.entity-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.entity-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.entity-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggested-action[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n}\n.action-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.action-header[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.action-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.action-description[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-size: 0.875rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n.source-event[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: right;\n}\n.event-id[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n  font-family: monospace;\n  background: var(--surface-100);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.dark[_nghost-%COMP%]   .alert-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .affected-entities[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .affected-entities[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .entity-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .suggested-action[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .suggested-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(59, 130, 246, 0.05));\n  border-color: rgba(59, 130, 246, 0.2);\n}\n.dark[_nghost-%COMP%]   .event-id[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .event-id[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-critical[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-critical[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-warning[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.dark[_nghost-%COMP%]   .alert-severity-badge.severity-info[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .alert-severity-badge.severity-info[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n@media (max-width: 768px) {\n  .alert-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .alert-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .alert-severity-badge[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .entity-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=alert-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertBlockComponent, [{
    type: Component,
    args: [{ selector: "app-alert-block", standalone: true, imports: [CommonModule], template: `<div class="alert-block" [ngClass]="getAlertClasses()">
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

    <div
      *ngIf="block.content.affected_entities.length > 0"
      class="affected-entities"
    >
      <div class="affected-header">
        <strong>Affected {{ getEntityTypeLabel() }}:</strong>
      </div>
      <div class="entity-list">
        <div
          *ngFor="
            let entity of block.content.affected_entities;
            trackBy: trackByEntity
          "
          class="entity-item"
          [ngClass]="'entity-' + entity.type"
        >
          <div class="entity-icon">
            <i [ngClass]="getEntityIcon(entity.type)"></i>
          </div>
          <div class="entity-info">
            <span class="entity-name">{{ entity.name }}</span>
            <span class="entity-id">{{ entity.id }}</span>
          </div>
        </div>
      </div>
    </div>

    <div
      *ngIf="block.content.is_actionable && block.content.suggested_action"
      class="suggested-action"
    >
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

    <div *ngIf="block.content.source_event_id" class="source-event">
      <small class="event-id"
        >Event ID: {{ block.content.source_event_id }}</small
      >
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.scss */\n.alert-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid;\n  position: relative;\n  overflow: hidden;\n}\n.alert-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.alert-block.severity-critical {\n  border-left-color: #ef4444;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fef2f2);\n}\n.alert-block.severity-warning {\n  border-left-color: #f59e0b;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #fffbeb);\n}\n.alert-block.severity-info {\n  border-left-color: #3b82f6;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff,\n      #eff6ff);\n}\n.alert-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.alert-icon-title {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex: 1;\n}\n.alert-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.alert-icon i {\n  font-size: 18px;\n  font-style: normal;\n}\n.alert-icon.icon-critical {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  animation: pulse-critical 2s infinite;\n}\n.alert-icon.icon-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  animation: pulse-warning 3s infinite;\n}\n.alert-icon.icon-info {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n  color: white;\n}\n@keyframes pulse-critical {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);\n  }\n  50% {\n    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);\n  }\n}\n@keyframes pulse-warning {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);\n  }\n}\n.alert-title-timestamp {\n  flex: 1;\n}\n.alert-title {\n  color: var(--text-color);\n  font-size: 1.0625rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n}\n.alert-timestamp {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.alert-severity-badge {\n  background: var(--surface-100);\n  color: var(--text-color);\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  border: 1px solid var(--surface-200);\n}\n.alert-severity-badge.severity-critical {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.alert-severity-badge.severity-warning {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fed7aa;\n}\n.alert-severity-badge.severity-info {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.alert-content {\n  space-y: 16px;\n}\n.alert-message {\n  color: var(--text-color);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  font-size: 0.95rem;\n}\n.affected-entities {\n  margin: 16px 0;\n  padding: 16px;\n  background: var(--surface-50);\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.affected-header {\n  margin-bottom: 12px;\n}\n.affected-header strong {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.entity-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 8px;\n}\n.entity-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--surface-0);\n  border-radius: 6px;\n  border: 1px solid var(--surface-200);\n  transition: all 0.2s ease;\n}\n.entity-item:hover {\n  background: var(--surface-100);\n  transform: scale(1.02);\n}\n.entity-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.entity-icon.entity-vehicle i {\n  color: #3b82f6;\n}\n.entity-icon.entity-driver i {\n  color: #22c55e;\n}\n.entity-icon.entity-geofence i {\n  color: #f59e0b;\n}\n.entity-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.entity-name {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.entity-id {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary);\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.suggested-action {\n  margin: 16px 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #dbeafe);\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n}\n.action-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.action-header .action-icon {\n  font-size: 16px;\n}\n.action-header strong {\n  color: var(--text-color);\n  font-size: 0.875rem;\n}\n.action-description {\n  color: var(--text-color-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  font-size: 0.875rem;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.btn.btn-secondary {\n  background: var(--surface-200);\n  color: var(--text-color-secondary);\n}\n.btn.btn-secondary:hover {\n  background: var(--surface-300);\n  color: var(--text-color);\n}\n.source-event {\n  margin-top: 16px;\n  text-align: right;\n}\n.event-id {\n  color: var(--text-color-secondary);\n  font-size: 0.75rem;\n  font-family: monospace;\n  background: var(--surface-100);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n:host-context(.dark) .alert-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .affected-entities {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .entity-item {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .entity-item:hover {\n  background: var(--surface-700);\n}\n:host-context(.dark) .suggested-action {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(59, 130, 246, 0.05));\n  border-color: rgba(59, 130, 246, 0.2);\n}\n:host-context(.dark) .event-id {\n  background: var(--surface-700);\n}\n:host-context(.dark) .alert-severity-badge.severity-critical {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n:host-context(.dark) .alert-severity-badge.severity-warning {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n:host-context(.dark) .alert-severity-badge.severity-info {\n  background: rgba(59, 130, 246, 0.1);\n  border-color: rgba(59, 130, 246, 0.2);\n}\n@media (max-width: 768px) {\n  .alert-block {\n    padding: 16px;\n  }\n  .alert-header {\n    flex-direction: column;\n    gap: 12px;\n    align-items: stretch;\n  }\n  .alert-severity-badge {\n    align-self: flex-start;\n  }\n  .entity-list {\n    grid-template-columns: 1fr;\n  }\n  .action-buttons {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=alert-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertBlockComponent, { className: "AlertBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/alert-block/alert-block.component.ts", lineNumber: 15 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.ts
var _c02 = (a0) => ({ fullscreen: a0 });
var _c12 = (a0, a1, a2, a3) => ({ sortable: a0, highlight: a1, "sorted-asc": a2, "sorted-desc": a3 });
var _c2 = (a0) => ({ "highlight-row": a0 });
var _c3 = (a0, a1, a2) => ({ highlight: a0, numeric: a1, text: a2 });
function TableBlockComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h4", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "button", 13);
    \u0275\u0275listener("click", function TableBlockComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportTable());
    });
    \u0275\u0275elementStart(5, "i", 14);
    \u0275\u0275text(6, "\u{1F4CA}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function TableBlockComponent_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFullscreen());
    });
    \u0275\u0275elementStart(8, "i", 16);
    \u0275\u0275text(9, "\u26F6");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.block.content.title);
  }
}
function TableBlockComponent_th_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSortIcon(i_r4));
  }
}
function TableBlockComponent_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 17);
    \u0275\u0275listener("click", function TableBlockComponent_th_7_Template_th_click_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortColumn(i_r4));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableBlockComponent_th_7_div_4_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c12, ctx_r1.block.content.sortable, i_r4 === ctx_r1.block.content.highlight_column, ctx_r1.sortState.column === i_r4 && ctx_r1.sortState.direction === "asc", ctx_r1.sortState.column === i_r4 && ctx_r1.sortState.direction === "desc"));
    \u0275\u0275attribute("aria-sort", ctx_r1.getSortAttribute(i_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(header_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.block.content.sortable);
  }
}
function TableBlockComponent_tr_9_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
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
function TableBlockComponent_tr_9_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableBlockComponent_tr_9_td_1_span_4_Template, 2, 2, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r8 = ctx.$implicit;
    const cellIndex_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c3, cellIndex_r9 === ctx_r1.block.content.highlight_column, ctx_r1.isNumeric(cell_r8), !ctx_r1.isNumeric(cell_r8)))("title", ctx_r1.getCellTooltip(cell_r8, cellIndex_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCell(cell_r8, cellIndex_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowTrend(cell_r8, cellIndex_r9));
  }
}
function TableBlockComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 23);
    \u0275\u0275listener("mouseenter", function TableBlockComponent_tr_9_Template_tr_mouseenter_0_listener() {
      const rowIndex_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowHover(rowIndex_r7));
    })("mouseleave", function TableBlockComponent_tr_9_Template_tr_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowLeave());
    });
    \u0275\u0275template(1, TableBlockComponent_tr_9_td_1_Template, 5, 8, "td", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c2, rowIndex_r7 % 2 === 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r10);
  }
}
function TableBlockComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 30)(1, "td", 31)(2, "div", 32)(3, "i", 33);
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
function TableBlockComponent_div_11_div_3_span_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function TableBlockComponent_div_11_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TableBlockComponent_div_11_div_3_span_1_span_4_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const summary_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", summary_r11.label, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(summary_r11.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r12);
  }
}
function TableBlockComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, TableBlockComponent_div_11_div_3_span_1_Template, 5, 3, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSummaryStats());
  }
}
function TableBlockComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TableBlockComponent_div_11_div_3_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Showing ", ctx_r1.sortedRows.length, " ", ctx_r1.sortedRows.length === 1 ? "row" : "rows", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSummary);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableBlockComponent, selectors: [["app-table-block"]], inputs: { block: "block" }, decls: 12, vars: 10, consts: [[1, "table-block", 3, "ngClass"], ["class", "table-header", 4, "ngIf"], [1, "table-container", 3, "ngClass"], [1, "table-responsive"], [1, "data-table"], [1, "header-row"], ["class", "header-cell", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "data-row", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "empty-row", 4, "ngIf"], ["class", "table-footer", 4, "ngIf"], [1, "table-header"], [1, "table-title"], [1, "table-actions"], ["title", "Export Data", 1, "action-btn", 3, "click"], [1, "export-icon"], ["title", "Toggle Fullscreen", 1, "action-btn", 3, "click"], [1, "fullscreen-icon"], [1, "header-cell", 3, "click", "ngClass"], [1, "header-content"], [1, "header-text"], ["class", "sort-indicator", 4, "ngIf"], [1, "sort-indicator"], [1, "sort-icon", 3, "ngClass"], [1, "data-row", 3, "mouseenter", "mouseleave", "ngClass"], ["class", "data-cell", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], [1, "data-cell", 3, "ngClass", "title"], [1, "cell-content"], [1, "cell-value"], ["class", "cell-trend", 3, "ngClass", 4, "ngIf"], [1, "cell-trend", 3, "ngClass"], [1, "empty-row"], [1, "empty-cell"], [1, "empty-state"], [1, "empty-icon"], [1, "table-footer"], [1, "row-count"], ["class", "table-summary", 4, "ngIf"], [1, "table-summary"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function TableBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TableBlockComponent_div_1_Template, 10, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr", 5);
      \u0275\u0275template(7, TableBlockComponent_th_7_Template, 5, 9, "th", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "tbody");
      \u0275\u0275template(9, TableBlockComponent_tr_9_Template, 2, 4, "tr", 7)(10, TableBlockComponent_tr_10_Template, 7, 1, "tr", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, TableBlockComponent_div_11_Template, 4, 3, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c02, ctx.isFullscreen));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.block.content.headers);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.sortedRows)("ngForTrackBy", ctx.trackByRow);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sortedRows.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.block.content.rows == null ? null : ctx.block.content.rows.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.table-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.table-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.table-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.export-icon[_ngcontent-%COMP%], \n.fullscreen-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.3s ease;\n}\n.table-container.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--surface-0);\n  z-index: 1000;\n  padding: 20px;\n  border-radius: 0;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.875rem;\n}\n.header-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-100),\n      var(--surface-50));\n}\n.header-cell[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 2px solid var(--surface-200);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.header-cell.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header-cell.sortable[_ngcontent-%COMP%]:hover {\n  background: var(--surface-200);\n}\n.header-cell.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-100),\n      var(--primary-50));\n  border-bottom-color: var(--primary-300);\n}\n.header-cell.sorted-asc[_ngcontent-%COMP%], \n.header-cell.sorted-desc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-200),\n      var(--primary-100));\n}\n.header-cell[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 8px;\n}\n.header-cell[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 8px;\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sort-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n}\n.sort-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-color-secondary);\n  transition: all 0.2s ease;\n}\n.sort-icon.sort-asc[_ngcontent-%COMP%]::before {\n  content: "\\25b2";\n  color: var(--primary-600);\n}\n.sort-icon.sort-desc[_ngcontent-%COMP%]::before {\n  content: "\\25bc";\n  color: var(--primary-600);\n}\n.sort-icon.sort-none[_ngcontent-%COMP%]::before {\n  content: "\\21c5";\n}\n.data-row[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.data-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-50);\n  transform: scale(1.002);\n}\n.data-row.highlight-row[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-cell[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid var(--surface-100);\n  transition: all 0.2s ease;\n}\n.data-cell.highlight[_ngcontent-%COMP%] {\n  background: var(--primary-25);\n  border-left: 3px solid var(--primary-300);\n}\n.data-cell.numeric[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.data-cell.text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.cell-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n.cell-value[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.cell-trend[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.cell-trend.trend-positive[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cell-trend.trend-negative[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.cell-trend.trend-neutral[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  border: none;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-color-secondary);\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.empty-row[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n  font-size: 0.875rem;\n}\n.row-count[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.table-summary[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.table-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .table-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n}\n.dark[_nghost-%COMP%]   .header-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-700),\n      var(--surface-750));\n}\n.dark[_nghost-%COMP%]   .header-cell[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .header-cell.highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.2),\n      rgba(59, 130, 246, 0.1));\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n}\n.dark[_nghost-%COMP%]   .header-cell.sorted-asc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.sorted-asc[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .header-cell.sorted-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .header-cell.sorted-desc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.3),\n      rgba(59, 130, 246, 0.2));\n}\n.dark[_nghost-%COMP%]   .data-row[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .data-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .data-row.highlight-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-row.highlight-row[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n}\n.dark[_nghost-%COMP%]   .data-cell[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-cell[_ngcontent-%COMP%] {\n  border-bottom-color: var(--surface-700);\n}\n.dark[_nghost-%COMP%]   .data-cell.highlight[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .data-cell.highlight[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  border-left-color: rgba(59, 130, 246, 0.5);\n}\n.dark[_nghost-%COMP%]   .table-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n@media (max-width: 768px) {\n  .table-block[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .header-cell[_ngcontent-%COMP%], \n   .data-cell[_ngcontent-%COMP%] {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n  .table-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n  }\n  .table-summary[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=table-block.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBlockComponent, [{
    type: Component,
    args: [{ selector: "app-table-block", standalone: true, imports: [CommonModule], template: `<div class="table-block" [ngClass]="getBlockClasses()">
  <div class="table-header" *ngIf="block.content.title">
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

  <div class="table-container" [ngClass]="{ fullscreen: isFullscreen }">
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr class="header-row">
            <th
              *ngFor="let header of block.content.headers; let i = index"
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
                <div *ngIf="block.content.sortable" class="sort-indicator">
                  <i class="sort-icon" [ngClass]="getSortIcon(i)"></i>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            *ngFor="
              let row of sortedRows;
              let rowIndex = index;
              trackBy: trackByRow
            "
            class="data-row"
            [ngClass]="{ 'highlight-row': rowIndex % 2 === 0 }"
            (mouseenter)="onRowHover(rowIndex)"
            (mouseleave)="onRowLeave()"
          >
            <td
              *ngFor="let cell of row; let cellIndex = index"
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
                <span
                  *ngIf="shouldShowTrend(cell, cellIndex)"
                  class="cell-trend"
                  [ngClass]="getTrendClass(cell)"
                >
                  {{ getTrendIndicator(cell) }}
                </span>
              </div>
            </td>
          </tr>

          <tr *ngIf="sortedRows.length === 0" class="empty-row">
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
        </tbody>
      </table>
    </div>

    <div class="table-footer" *ngIf="block.content.rows?.length">
      <div class="row-count">
        Showing {{ sortedRows.length }}
        {{ sortedRows.length === 1 ? 'row' : 'rows' }}
      </div>
      <div class="table-summary" *ngIf="showSummary">
        <span *ngFor="let summary of getSummaryStats(); let last = last">
          {{ summary.label }}: <strong>{{ summary.value }}</strong>
          <span *ngIf="!last"> \u2022 </span>
        </span>
      </div>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.scss */\n.table-block {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n  border: 1px solid #e5e7eb;\n  border-left: 4px solid #3b82f6;\n}\n.table-block:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);\n  border-color: #d1d5db;\n}\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--surface-100);\n}\n.table-title {\n  color: var(--text-color);\n  font-size: 1.125rem;\n  font-weight: 700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-actions {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  background: var(--surface-100);\n  border: 1px solid var(--surface-200);\n  border-radius: 6px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--text-color-secondary);\n}\n.action-btn:hover {\n  background: var(--primary-50);\n  border-color: var(--primary-200);\n  color: var(--primary-600);\n  transform: scale(1.1);\n}\n.export-icon,\n.fullscreen-icon {\n  font-size: 14px;\n  font-style: normal;\n}\n.table-container {\n  position: relative;\n  transition: all 0.3s ease;\n}\n.table-container.fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--surface-0);\n  z-index: 1000;\n  padding: 20px;\n  border-radius: 0;\n}\n.table-responsive {\n  overflow-x: auto;\n  border-radius: 8px;\n  border: 1px solid var(--surface-200);\n}\n.data-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.875rem;\n}\n.header-row {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-100),\n      var(--surface-50));\n}\n.header-cell {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-color);\n  border-bottom: 2px solid var(--surface-200);\n  position: relative;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: all 0.2s ease;\n}\n.header-cell.sortable {\n  cursor: pointer;\n}\n.header-cell.sortable:hover {\n  background: var(--surface-200);\n}\n.header-cell.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-100),\n      var(--primary-50));\n  border-bottom-color: var(--primary-300);\n}\n.header-cell.sorted-asc,\n.header-cell.sorted-desc {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-200),\n      var(--primary-100));\n}\n.header-cell:first-child {\n  border-top-left-radius: 8px;\n}\n.header-cell:last-child {\n  border-top-right-radius: 8px;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.header-text {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sort-indicator {\n  display: flex;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n}\n.sort-icon {\n  font-size: 12px;\n  color: var(--text-color-secondary);\n  transition: all 0.2s ease;\n}\n.sort-icon.sort-asc::before {\n  content: "\\25b2";\n  color: var(--primary-600);\n}\n.sort-icon.sort-desc::before {\n  content: "\\25bc";\n  color: var(--primary-600);\n}\n.sort-icon.sort-none::before {\n  content: "\\21c5";\n}\n.data-row {\n  transition: all 0.2s ease;\n}\n.data-row:hover {\n  background: var(--surface-50);\n  transform: scale(1.002);\n}\n.data-row.highlight-row {\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-cell {\n  padding: 12px;\n  border-bottom: 1px solid var(--surface-100);\n  transition: all 0.2s ease;\n}\n.data-cell.highlight {\n  background: var(--primary-25);\n  border-left: 3px solid var(--primary-300);\n}\n.data-cell.numeric {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.data-cell.text {\n  text-align: left;\n}\n.cell-content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n}\n.cell-value {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.cell-trend {\n  font-size: 0.75rem;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.cell-trend.trend-positive {\n  background: #dcfce7;\n  color: #166534;\n}\n.cell-trend.trend-negative {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.cell-trend.trend-neutral {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.empty-row .empty-cell {\n  padding: 40px;\n  text-align: center;\n  border: none;\n}\n.empty-row .empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-color-secondary);\n}\n.empty-row .empty-state .empty-icon {\n  font-size: 24px;\n  opacity: 0.5;\n}\n.empty-row .empty-state p {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--surface-200);\n  font-size: 0.875rem;\n}\n.row-count {\n  color: var(--text-color-secondary);\n  font-weight: 500;\n}\n.table-summary {\n  color: var(--text-color-secondary);\n}\n.table-summary strong {\n  color: var(--text-color);\n  font-weight: 600;\n}\n:host-context(.dark) .table-block {\n  background: var(--surface-800);\n}\n:host-context(.dark) .header-row {\n  background:\n    linear-gradient(\n      135deg,\n      var(--surface-700),\n      var(--surface-750));\n}\n:host-context(.dark) .header-cell {\n  border-bottom-color: var(--surface-600);\n}\n:host-context(.dark) .header-cell.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.2),\n      rgba(59, 130, 246, 0.1));\n  border-bottom-color: rgba(59, 130, 246, 0.3);\n}\n:host-context(.dark) .header-cell.sorted-asc,\n:host-context(.dark) .header-cell.sorted-desc {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.3),\n      rgba(59, 130, 246, 0.2));\n}\n:host-context(.dark) .data-row:hover {\n  background: var(--surface-700);\n}\n:host-context(.dark) .data-row.highlight-row {\n  background: rgba(255, 255, 255, 0.02);\n}\n:host-context(.dark) .data-cell {\n  border-bottom-color: var(--surface-700);\n}\n:host-context(.dark) .data-cell.highlight {\n  background: rgba(59, 130, 246, 0.1);\n  border-left-color: rgba(59, 130, 246, 0.5);\n}\n:host-context(.dark) .table-footer {\n  border-top-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .action-btn:hover {\n  background: var(--surface-600);\n  border-color: var(--surface-500);\n}\n@media (max-width: 768px) {\n  .table-block {\n    padding: 16px;\n  }\n  .table-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .table-actions {\n    align-self: flex-end;\n  }\n  .header-cell,\n  .data-cell {\n    padding: 8px;\n    font-size: 0.8rem;\n  }\n  .table-footer {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n  }\n  .table-summary {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=table-block.component.css.map */\n'] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableBlockComponent, { className: "TableBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/table-block/table-block.component.ts", lineNumber: 22 });
})();

// src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.ts
var _c03 = (a0) => ({ actionable: a0 });
function RecommendationBlockComponent_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RecommendationBlockComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275template(3, RecommendationBlockComponent_div_11_span_3_Template, 2, 0, "span", 12);
    \u0275\u0275elementStart(4, "h4", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "div", 17)(12, "span", 18);
    \u0275\u0275text(13, "Impact:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "span", 21);
    \u0275\u0275text(18, "Effort:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 22);
    \u0275\u0275element(20, "span", 23)(21, "span", 23)(22, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 24);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const rec_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c03, rec_r1.actionable));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", rec_r1.actionable);
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
function RecommendationBlockComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommendationBlockComponent, selectors: [["app-recommendation-block"]], inputs: { block: "block" }, decls: 13, vars: 9, consts: [[1, "recommendation-block", 3, "ngClass"], [1, "block-header"], [1, "header-content"], [1, "header-icon"], [1, "block-title"], [1, "priority-badge", 3, "ngClass"], [1, "recommendations-list"], ["class", "recommendation-card", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "block-footer", 4, "ngIf"], [1, "recommendation-card", 3, "ngClass"], [1, "rec-header"], [1, "rec-title-row"], ["class", "actionable-icon", 4, "ngIf"], [1, "rec-title"], [1, "category-badge"], [1, "rec-description"], [1, "rec-footer"], [1, "impact-section"], [1, "impact-label"], [1, "impact-text"], [1, "effort-indicator"], [1, "effort-label"], [1, "effort-dots", 3, "ngClass"], [1, "dot"], [1, "effort-text"], [1, "actionable-icon"], [1, "block-footer"], [1, "footer-stat"]], template: function RecommendationBlockComponent_Template(rf, ctx) {
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
      \u0275\u0275template(11, RecommendationBlockComponent_div_11_Template, 26, 12, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, RecommendationBlockComponent_div_12_Template, 3, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.getBlockClasses());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.block.content.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getPriorityClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, ctx.block.content.priority), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.block.content.recommendations)("ngForTrackBy", ctx.trackByRec);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getActionableCount() > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe, TitleCasePipe], styles: ["\n\n.recommendation-block[_ngcontent-%COMP%] {\n  background: var(--surface-0, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-left: 4px solid var(--primary-500, #3b82f6);\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.recommendation-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.recommendation-block.theme-info[_ngcontent-%COMP%] {\n  border-left-color: #06b6d4;\n}\n.recommendation-block.theme-success[_ngcontent-%COMP%] {\n  border-left-color: #22c55e;\n}\n.recommendation-block.theme-warning[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.recommendation-block.theme-danger[_ngcontent-%COMP%] {\n  border-left-color: #ef4444;\n}\n.block-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.block-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-badge.priority-critical[_ngcontent-%COMP%] {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recommendation-card[_ngcontent-%COMP%] {\n  background: var(--surface-50, #f9fafb);\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-radius: 8px;\n  padding: 16px;\n  transition: all 0.2s ease;\n}\n.recommendation-card[_ngcontent-%COMP%]:hover {\n  background: var(--surface-100, #f3f4f6);\n  border-color: var(--surface-300, #d1d5db);\n}\n.recommendation-card.actionable[_ngcontent-%COMP%] {\n  border-left: 3px solid #22c55e;\n}\n.rec-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.rec-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.actionable-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.rec-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.975rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background: var(--surface-200, #e5e7eb);\n  color: var(--text-color-secondary, #6b7280);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.rec-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n  line-height: 1.5;\n}\n.rec-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.impact-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.impact-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n  margin-right: 4px;\n}\n.impact-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-color, #1f2937);\n}\n.effort-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.effort-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n}\n.effort-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.effort-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--surface-300, #d1d5db);\n}\n.effort-dots.effort-low[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1) {\n  background: #22c55e;\n}\n.effort-dots.effort-medium[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1), \n.effort-dots.effort-medium[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2) {\n  background: #f59e0b;\n}\n.effort-dots.effort-high[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.effort-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.block-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.footer-stat[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.dark[_nghost-%COMP%]   .recommendation-block[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .recommendation-block[_ngcontent-%COMP%] {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .block-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-bottom-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .block-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-low[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: #86efac;\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-medium[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fcd34d;\n}\n.dark[_nghost-%COMP%]   .priority-badge.priority-high[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .recommendation-card[_ngcontent-%COMP%]:hover {\n  background: var(--surface-600);\n}\n.dark[_nghost-%COMP%]   .rec-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rec-title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.dark[_nghost-%COMP%]   .category-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  background: var(--surface-600);\n  color: var(--text-color-secondary);\n}\n.dark[_nghost-%COMP%]   .block-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .block-footer[_ngcontent-%COMP%] {\n  background: var(--surface-700);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .block-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .rec-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .rec-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .impact-section[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=recommendation-block.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommendationBlockComponent, [{
    type: Component,
    args: [{ selector: "app-recommendation-block", standalone: true, imports: [CommonModule], template: `<div class="recommendation-block" [ngClass]="getBlockClasses()">
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
    <div
      *ngFor="let rec of block.content.recommendations; trackBy: trackByRec"
      class="recommendation-card"
      [ngClass]="{ actionable: rec.actionable }"
    >
      <div class="rec-header">
        <div class="rec-title-row">
          <span class="actionable-icon" *ngIf="rec.actionable">\u2713</span>
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
  </div>

  <!-- Footer -->
  <div class="block-footer" *ngIf="getActionableCount() > 0">
    <span class="footer-stat">
      {{ getActionableCount() }} actionable recommendation{{
        getActionableCount() > 1 ? 's' : ''
      }}
    </span>
  </div>
</div>
`, styles: ["/* src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.scss */\n.recommendation-block {\n  background: var(--surface-0, #ffffff);\n  border-radius: 12px;\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-left: 4px solid var(--primary-500, #3b82f6);\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.recommendation-block:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.recommendation-block.theme-info {\n  border-left-color: #06b6d4;\n}\n.recommendation-block.theme-success {\n  border-left-color: #22c55e;\n}\n.recommendation-block.theme-warning {\n  border-left-color: #f59e0b;\n}\n.recommendation-block.theme-danger {\n  border-left-color: #ef4444;\n}\n.block-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-icon {\n  font-size: 1.5rem;\n}\n.block-title {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.priority-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.priority-badge.priority-low {\n  background: #dcfce7;\n  color: #166534;\n}\n.priority-badge.priority-medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.priority-badge.priority-critical {\n  background: #fecaca;\n  color: #7f1d1d;\n}\n.recommendations-list {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.recommendation-card {\n  background: var(--surface-50, #f9fafb);\n  border: 1px solid var(--surface-200, #e5e7eb);\n  border-radius: 8px;\n  padding: 16px;\n  transition: all 0.2s ease;\n}\n.recommendation-card:hover {\n  background: var(--surface-100, #f3f4f6);\n  border-color: var(--surface-300, #d1d5db);\n}\n.recommendation-card.actionable {\n  border-left: 3px solid #22c55e;\n}\n.rec-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.rec-title-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.actionable-icon {\n  color: #22c55e;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.rec-title {\n  margin: 0;\n  font-size: 0.975rem;\n  font-weight: 600;\n  color: var(--text-color, #1f2937);\n}\n.category-badge {\n  padding: 2px 8px;\n  background: var(--surface-200, #e5e7eb);\n  color: var(--text-color-secondary, #6b7280);\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.rec-description {\n  margin: 0 0 12px 0;\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n  line-height: 1.5;\n}\n.rec-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.impact-section {\n  flex: 1;\n  min-width: 200px;\n}\n.impact-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n  margin-right: 4px;\n}\n.impact-text {\n  font-size: 0.8rem;\n  color: var(--text-color, #1f2937);\n}\n.effort-indicator {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.effort-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-color-secondary, #6b7280);\n}\n.effort-dots {\n  display: flex;\n  gap: 3px;\n}\n.effort-dots .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--surface-300, #d1d5db);\n}\n.effort-dots.effort-low .dot:nth-child(1) {\n  background: #22c55e;\n}\n.effort-dots.effort-medium .dot:nth-child(1),\n.effort-dots.effort-medium .dot:nth-child(2) {\n  background: #f59e0b;\n}\n.effort-dots.effort-high .dot {\n  background: #ef4444;\n}\n.effort-text {\n  font-size: 0.75rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n.block-footer {\n  padding: 12px 20px;\n  border-top: 1px solid var(--surface-200, #e5e7eb);\n  background: var(--surface-50, #f9fafb);\n}\n.footer-stat {\n  font-size: 0.875rem;\n  color: var(--text-color-secondary, #6b7280);\n}\n:host-context(.dark) .recommendation-block {\n  background: var(--surface-800);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .block-header {\n  background: var(--surface-700);\n  border-bottom-color: var(--surface-600);\n}\n:host-context(.dark) .block-title {\n  color: var(--text-color);\n}\n:host-context(.dark) .priority-badge.priority-low {\n  background: rgba(34, 197, 94, 0.2);\n  color: #86efac;\n}\n:host-context(.dark) .priority-badge.priority-medium {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fcd34d;\n}\n:host-context(.dark) .priority-badge.priority-high {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark) .recommendation-card {\n  background: var(--surface-700);\n  border-color: var(--surface-600);\n}\n:host-context(.dark) .recommendation-card:hover {\n  background: var(--surface-600);\n}\n:host-context(.dark) .rec-title {\n  color: var(--text-color);\n}\n:host-context(.dark) .category-badge {\n  background: var(--surface-600);\n  color: var(--text-color-secondary);\n}\n:host-context(.dark) .block-footer {\n  background: var(--surface-700);\n  border-top-color: var(--surface-600);\n}\n@media (max-width: 768px) {\n  .block-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .rec-header {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .rec-footer {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .impact-section {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=recommendation-block.component.css.map */\n"] }]
  }], null, { block: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommendationBlockComponent, { className: "RecommendationBlockComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/blocks/recommendation-block/recommendation-block.component.ts", lineNumber: 15 });
})();

// src/app/features/development/components/analytical-report/dashboard/analytics-dashboard.component.ts
var _c04 = ["dashboardContainer"];
function AnalyticsDashboardComponent_div_1__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "path", 63)(2, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_div_1__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 65);
    \u0275\u0275element(1, "circle", 66);
    \u0275\u0275elementEnd();
  }
}
function AnalyticsDashboardComponent_div_1_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_1_button_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllVehicles = !ctx_r1.showAllVehicles);
    });
    \u0275\u0275text(1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 68);
    \u0275\u0275element(3, "polyline", 69);
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
function AnalyticsDashboardComponent_div_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getVehicleDisplayText());
  }
}
function AnalyticsDashboardComponent_div_1_div_50_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r4);
  }
}
function AnalyticsDashboardComponent_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275template(1, AnalyticsDashboardComponent_div_1_div_50_span_1_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vehicleNames);
  }
}
function AnalyticsDashboardComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 31);
    \u0275\u0275element(3, "circle", 75)(4, "path", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 36)(6, "span", 37);
    \u0275\u0275text(7, "Analysis Query");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1('"', ctx_r1.userQuery, '"');
  }
}
function AnalyticsDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 11);
    \u0275\u0275element(5, "rect", 12)(6, "rect", 13)(7, "rect", 14)(8, "rect", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 16)(10, "h1", 17);
    \u0275\u0275text(11, "Fleet Analytics Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13, "AI-Powered Insights");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "button", 20);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275template(16, AnalyticsDashboardComponent_div_1__svg_svg_16_Template, 3, 0, "svg", 21)(17, AnalyticsDashboardComponent_div_1__svg_svg_17_Template, 2, 0, "svg", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrint());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 24);
    \u0275\u0275element(21, "polyline", 25)(22, "path", 26)(23, "rect", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Print ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 28)(26, "div", 29)(27, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 31);
    \u0275\u0275element(29, "rect", 32)(30, "line", 33)(31, "line", 34)(32, "line", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 36)(34, "span", 37);
    \u0275\u0275text(35, "Analysis Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 38);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 39)(39, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 31);
    \u0275\u0275element(41, "path", 40)(42, "circle", 41)(43, "circle", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 36)(45, "div", 43)(46, "span", 37);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, AnalyticsDashboardComponent_div_1_button_48_Template, 4, 3, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, AnalyticsDashboardComponent_div_1_div_49_Template, 3, 1, "div", 45)(50, AnalyticsDashboardComponent_div_1_div_50_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, AnalyticsDashboardComponent_div_1_div_51_Template, 10, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 48)(53, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(54, "svg", 50);
    \u0275\u0275element(55, "path", 51)(56, "polyline", 52)(57, "line", 53)(58, "line", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Executive Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "p", 55);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 56)(64, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(65, "svg", 58);
    \u0275\u0275element(66, "circle", 59)(67, "polyline", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 58);
    \u0275\u0275element(72, "path", 61)(73, "path", 62);
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
    \u0275\u0275property("ngIf", !ctx_r1.isRecalculating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRecalculating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRecalculating ? "Regenerating..." : "Regenerate", " ");
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.dateRange || "Not specified");
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r1.showAllVehicles);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Vehicles (", (ctx_r1.vehicleNames == null ? null : ctx_r1.vehicleNames.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vehicleNames && ctx_r1.vehicleNames.length > 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showAllVehicles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAllVehicles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userQuery);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.summary);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Generated: ", ctx_r1.formatTimestamp((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.timestamp) || ""));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("ID: ", ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.request_id);
  }
}
function AnalyticsDashboardComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275element(2, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
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
function AnalyticsDashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80);
    \u0275\u0275element(3, "div", 81)(4, "div", 81)(5, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 82);
    \u0275\u0275text(7, "Generating Analytics Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 83);
    \u0275\u0275text(9, " AI is analyzing your data and creating interactive visualizations... ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AnalyticsDashboardComponent_div_2_div_10_Template, 5, 3, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.loadingProgress > 0);
  }
}
function AnalyticsDashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 92);
    \u0275\u0275text(5, "Dashboard Generation Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 94)(9, "button", 95);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRetry());
    });
    \u0275\u0275elementStart(10, "i", 96);
    \u0275\u0275text(11, "\u{1F504}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Retry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 97);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_3_Template_button_click_13_listener() {
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
function AnalyticsDashboardComponent_div_4_ng_container_2_app_summary_block_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-summary-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_app_kpi_block_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-kpi-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_app_chart_block_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chart-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_app_alert_block_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-alert-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_app_table_block_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_app_recommendation_block_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recommendation-block", 104);
  }
  if (rf & 2) {
    const block_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("block", block_r6);
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "h4");
    \u0275\u0275text(2, "Map Block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Coming Soon");
    \u0275\u0275elementEnd()();
  }
}
function AnalyticsDashboardComponent_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 101);
    \u0275\u0275template(2, AnalyticsDashboardComponent_div_4_ng_container_2_app_summary_block_2_Template, 1, 1, "app-summary-block", 102)(3, AnalyticsDashboardComponent_div_4_ng_container_2_app_kpi_block_3_Template, 1, 1, "app-kpi-block", 102)(4, AnalyticsDashboardComponent_div_4_ng_container_2_app_chart_block_4_Template, 1, 1, "app-chart-block", 102)(5, AnalyticsDashboardComponent_div_4_ng_container_2_app_alert_block_5_Template, 1, 1, "app-alert-block", 102)(6, AnalyticsDashboardComponent_div_4_ng_container_2_app_table_block_6_Template, 1, 1, "app-table-block", 102)(7, AnalyticsDashboardComponent_div_4_ng_container_2_app_recommendation_block_7_Template, 1, 1, "app-recommendation-block", 102)(8, AnalyticsDashboardComponent_div_4_ng_container_2_div_8_Template, 5, 0, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const block_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getBlockClasses(block_r6));
    \u0275\u0275attribute("data-block-id", block_r6.block_id)("data-block-type", block_r6.block_type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "summary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "kpi");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "chart");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "alert");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "table");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "recommendation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r6.block_type === "map_markers");
  }
}
function AnalyticsDashboardComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "div", 108);
    \u0275\u0275text(3, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No Analytics Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No data blocks were generated for this analysis.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 95);
    \u0275\u0275listener("click", function AnalyticsDashboardComponent_div_4_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275text(9, " Generate New Report ");
    \u0275\u0275elementEnd()()();
  }
}
function AnalyticsDashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98, 0);
    \u0275\u0275template(2, AnalyticsDashboardComponent_div_4_ng_container_2_Template, 9, 10, "ng-container", 99)(3, AnalyticsDashboardComponent_div_4_div_3_Template, 10, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks)("ngForTrackBy", ctx_r1.trackByBlock);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks == null ? null : ctx_r1.response.response.blocks.length) === 0);
  }
}
function AnalyticsDashboardComponent_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "strong");
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
function AnalyticsDashboardComponent_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111)(1, "strong");
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
function AnalyticsDashboardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " blocks ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AnalyticsDashboardComponent_div_5_span_6_Template, 4, 1, "span", 112)(7, AnalyticsDashboardComponent_div_5_span_7_Template, 4, 1, "span", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 113)(9, "small", 114);
    \u0275\u0275text(10, " Powered by CypherView AI Analytics ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.blocks == null ? null : ctx_r1.response.response.blocks.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.response == null ? null : ctx_r1.response.response == null ? null : ctx_r1.response.response.metadata);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getAlertCount() > 0);
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
  }, inputs: { response: "response", isLoading: "isLoading", error: "error", loadingProgress: "loadingProgress", userQuery: "userQuery", dateRange: "dateRange", vehicleNames: "vehicleNames", clientTimeZone: "clientTimeZone", clientLanguage: "clientLanguage" }, outputs: { recalculate: "recalculate" }, decls: 6, vars: 6, consts: [["dashboardContainer", ""], [1, "analytics-dashboard"], ["class", "dashboard-header", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], ["class", "dashboard-footer", 4, "ngIf"], [1, "dashboard-header"], [1, "header-top-bar"], [1, "header-branding"], [1, "brand-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.8"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.6"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.6"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1", "fill", "currentColor", "opacity", "0.4"], [1, "brand-text"], [1, "dashboard-title"], [1, "dashboard-subtitle"], [1, "header-actions"], [1, "action-btn", "recalculate-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "spinning", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "action-btn", "print-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6,9 6,2 18,2 18,9"], ["d", "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], [1, "context-cards"], [1, "context-card", "date-card"], [1, "card-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "card-content"], [1, "card-label"], [1, "card-value"], [1, "context-card", "vehicles-card"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], [1, "card-header-row"], ["class", "toggle-vehicles-btn", 3, "click", 4, "ngIf"], ["class", "vehicles-container", 4, "ngIf"], ["class", "vehicles-list-full", 4, "ngIf"], ["class", "context-card query-card", 4, "ngIf"], [1, "summary-section"], [1, "summary-header"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], [1, "summary-text"], [1, "header-meta"], [1, "meta-item"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12,6 12,12 16,14"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["d", "M23 4v6h-6M1 20v-6h6"], ["d", "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "spinning"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "32", "stroke-dashoffset", "32"], [1, "toggle-vehicles-btn", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6,9 12,15 18,9"], [1, "vehicles-container"], [1, "vehicles-list-full"], ["class", "vehicle-chip", 4, "ngFor", "ngForOf"], [1, "vehicle-chip"], [1, "context-card", "query-card"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "card-value", "query-text"], [1, "loading-container"], [1, "loading-content"], [1, "loading-spinner"], [1, "spinner-ring"], [1, "loading-title"], [1, "loading-description"], ["class", "loading-progress", 4, "ngIf"], [1, "loading-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "error-container"], [1, "error-content"], [1, "error-icon"], [1, "error-title"], [1, "error-message"], [1, "error-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "retry-icon"], [1, "btn", "btn-secondary", 3, "click"], [1, "dashboard-content"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "empty-dashboard", 4, "ngIf"], [1, "dashboard-block", 3, "ngClass"], [3, "block", 4, "ngIf"], ["class", "placeholder-block", 4, "ngIf"], [3, "block"], [1, "placeholder-block"], [1, "empty-dashboard"], [1, "empty-content"], [1, "empty-icon"], [1, "dashboard-footer"], [1, "footer-stats"], [1, "stat-item"], ["class", "stat-item", 4, "ngIf"], [1, "footer-actions"], [1, "powered-by"]], template: function AnalyticsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AnalyticsDashboardComponent_div_1_Template, 76, 15, "div", 2)(2, AnalyticsDashboardComponent_div_2_Template, 11, 1, "div", 3)(3, AnalyticsDashboardComponent_div_3_Template, 15, 1, "div", 4)(4, AnalyticsDashboardComponent_div_4_Template, 4, 3, "div", 5)(5, AnalyticsDashboardComponent_div_5_Template, 11, 3, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("data-layout-type", ctx.response == null ? null : ctx.response.response == null ? null : ctx.response.response.layout == null ? null : ctx.response.response.layout.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.response == null ? null : ctx.response.response == null ? null : ctx.response.response.summary);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.response == null ? null : ctx.response.response) && !ctx.isLoading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.response == null ? null : ctx.response.response) && !ctx.isLoading && !ctx.error);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
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
    args: [{ selector: "app-analytics-dashboard", standalone: true, imports: [
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
  <div class="dashboard-header" *ngIf="response?.response?.summary">
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
          <svg
            *ngIf="!isRecalculating"
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
          <svg
            *ngIf="isRecalculating"
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
            <button
              *ngIf="vehicleNames && vehicleNames.length > 2"
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
          </div>
          <div class="vehicles-container" *ngIf="!showAllVehicles">
            <span class="card-value">{{ getVehicleDisplayText() }}</span>
          </div>
          <div class="vehicles-list-full" *ngIf="showAllVehicles">
            <span class="vehicle-chip" *ngFor="let vehicle of vehicleNames">{{
              vehicle
            }}</span>
          </div>
        </div>
      </div>

      <!-- Query Card -->
      <div class="context-card query-card" *ngIf="userQuery">
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

  <!-- Loading State -->
  <div *ngIf="isLoading" class="loading-container">
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
      <div class="loading-progress" *ngIf="loadingProgress > 0">
        <div class="progress-bar">
          <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->
          <div class="progress-fill" [style.width.%]="loadingProgress"></div>
        </div>
        <span class="progress-text">{{ loadingProgress }}%</span>
      </div>
    </div>
  </div>

  <!-- Error State -->
  <div *ngIf="error" class="error-container">
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

  <!-- Dashboard Content -->
  <div
    *ngIf="response?.response && !isLoading && !error"
    class="dashboard-content"
    #dashboardContainer
  >
    <!-- Dynamic Block Rendering -->
    <ng-container
      *ngFor="let block of response?.response?.blocks; trackBy: trackByBlock"
    >
      <div
        [attr.data-block-id]="block.block_id"
        [attr.data-block-type]="block.block_type"
        class="dashboard-block"
        [ngClass]="getBlockClasses(block)"
      >
        <!-- Summary Block -->
        <app-summary-block
          *ngIf="block.block_type === 'summary'"
          [block]="block"
        >
        </app-summary-block>

        <!-- KPI Block -->
        <app-kpi-block *ngIf="block.block_type === 'kpi'" [block]="block">
        </app-kpi-block>

        <!-- Chart Block -->
        <app-chart-block *ngIf="block.block_type === 'chart'" [block]="block">
        </app-chart-block>

        <!-- Alert Block -->
        <app-alert-block *ngIf="block.block_type === 'alert'" [block]="block">
        </app-alert-block>

        <!-- Table Block -->
        <app-table-block *ngIf="block.block_type === 'table'" [block]="block">
        </app-table-block>

        <!-- Recommendation Block -->
        <app-recommendation-block
          *ngIf="block.block_type === 'recommendation'"
          [block]="block"
        >
        </app-recommendation-block>

        <!-- Map Block (Future) -->
        <div
          *ngIf="block.block_type === 'map_markers'"
          class="placeholder-block"
        >
          <h4>Map Block</h4>
          <p>Coming Soon</p>
        </div>
      </div>
    </ng-container>

    <!-- Empty State -->
    <div
      *ngIf="response?.response?.blocks?.length === 0"
      class="empty-dashboard"
    >
      <div class="empty-content">
        <div class="empty-icon">\u{1F4CA}</div>
        <h3>No Analytics Available</h3>
        <p>No data blocks were generated for this analysis.</p>
        <button class="btn btn-primary" (click)="onRecalculate()">
          Generate New Report
        </button>
      </div>
    </div>
  </div>

  <!-- Dashboard Footer -->
  <div
    class="dashboard-footer"
    *ngIf="response?.response && !isLoading && !error"
  >
    <div class="footer-stats">
      <span class="stat-item">
        <strong>{{ response?.response?.blocks?.length || 0 }}</strong> blocks
      </span>
      <span class="stat-item" *ngIf="response?.response?.metadata">
        <strong>{{
          response?.response?.metadata?.generation_time || 'N/A'
        }}</strong
        >ms generation time
      </span>
      <span class="stat-item" *ngIf="getAlertCount() > 0">
        <strong>{{ getAlertCount() }}</strong> alerts
      </span>
    </div>
    <div class="footer-actions">
      <small class="powered-by"> Powered by CypherView AI Analytics </small>
    </div>
  </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsDashboardComponent, { className: "AnalyticsDashboardComponent", filePath: "src/app/features/development/components/analytical-report/dashboard/analytics-dashboard.component.ts", lineNumber: 45 });
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
      const response = await this.http.get(url, { headers }).toPromise();
      if (!response) {
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
var _c05 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.value;
function AnalyticalReportComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function AnalyticalReportComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-message", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
function AnalyticalReportComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "app-analytics-dashboard", 47);
    \u0275\u0275listener("recalculate", function AnalyticalReportComponent_Conditional_10_Template_app_analytics_dashboard_recalculate_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRecalculate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 48)(3, "p-button", 49);
    \u0275\u0275listener("onClick", function AnalyticalReportComponent_Conditional_10_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 50);
    \u0275\u0275listener("onClick", function AnalyticalReportComponent_Conditional_10_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearResponse());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("response", ctx_r1.dashboardResponse())("isLoading", false)("error", void 0)("userQuery", ctx_r1.lastReportQuery())("dateRange", ctx_r1.formatDateRange())("vehicleNames", ctx_r1.getSelectedVehicleNames())("clientTimeZone", ((tmp_8_0 = ctx_r1.selectedClientSignal()) == null ? null : tmp_8_0.timeZoneId) ?? void 0)("clientLanguage", ((tmp_9_0 = ctx_r1.selectedClientSignal()) == null ? null : tmp_9_0.language) ?? void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
  }
}
function AnalyticalReportComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 51)(2, "div")(3, "h4", 52);
    \u0275\u0275text(4, " Report Generation Failed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p-button", 54);
    \u0275\u0275listener("onClick", function AnalyticalReportComponent_Conditional_11_Template_p_button_onClick_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearResponse());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.apiResponse()) == null ? null : tmp_2_0.error, " ");
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function AnalyticalReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "Report Configuration");
    \u0275\u0275elementEnd();
  }
}
function AnalyticalReportComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "updating...");
    \u0275\u0275elementEnd();
  }
}
function AnalyticalReportComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function AnalyticalReportComponent_For_53_Template_button_click_0_listener() {
      const suggestion_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectSuggestion(suggestion_r6));
    });
    \u0275\u0275elementStart(1, "span", 57);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", suggestion_r6.text, " ");
  }
}
function AnalyticalReportComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function AnalyticalReportComponent_For_59_Template_div_click_0_listener() {
      const sample_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoadSampleRequest(sample_r8));
    });
    \u0275\u0275elementStart(1, "div", 59)(2, "h4", 60);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 61);
    \u0275\u0275text(5, " Use ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sample_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sample_r8.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", sample_r8.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', sample_r8.query, '" ');
  }
}
function AnalyticalReportComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "(Select more than 2 days)");
    \u0275\u0275elementEnd();
  }
}
function AnalyticalReportComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "(Select more than 1 vehicle)");
    \u0275\u0275elementEnd();
  }
}
function AnalyticalReportComponent_For_81_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "(Not available for multiple vehicles)");
    \u0275\u0275elementEnd();
  }
}
function AnalyticalReportComponent_For_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 64);
    \u0275\u0275listener("change", function AnalyticalReportComponent_For_81_Template_input_change_1_listener() {
      const option_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDataTypeChange(option_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 65);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, AnalyticalReportComponent_For_81_Conditional_4_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", option_r10.selected)("id", "datatype-" + option_r10.value)("disabled", option_r10.value === "telemetry" && ctx_r1.isMultipleVehiclesSelected());
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", option_r10.value === "telemetry" && ctx_r1.isMultipleVehiclesSelected());
    \u0275\u0275property("for", "datatype-" + option_r10.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r10.value === "telemetry" && ctx_r1.isMultipleVehiclesSelected() ? 4 : -1);
  }
}
function AnalyticalReportComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 66);
    \u0275\u0275listener("onClick", function AnalyticalReportComponent_Conditional_102_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearResponse());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Collecting Data... ");
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Generating Report... ");
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 80)(2, "span", 79);
    \u0275\u0275text(3, "Collection Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 81);
    \u0275\u0275element(7, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.collectionProgress()) == null ? null : tmp_3_0.percentage) || 0, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ((tmp_4_0 = ctx_r1.collectionProgress()) == null ? null : tmp_4_0.percentage) || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", ((tmp_5_0 = ctx_r1.collectionProgress()) == null ? null : tmp_5_0.completedRequests) || 0, " of ", ((tmp_5_0 = ctx_r1.collectionProgress()) == null ? null : tmp_5_0.totalRequests) || 0, " requests completed (", ((tmp_5_0 = ctx_r1.collectionProgress()) == null ? null : tmp_5_0.successfulRequests) || 0, " successful, ", ((tmp_5_0 = ctx_r1.collectionProgress()) == null ? null : tmp_5_0.failedRequests) || 0, " failed) ");
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Processing: ", ((tmp_3_0 = ctx_r1.collectionProgress()) == null ? null : tmp_3_0.currentDataType) || "data", " for ", ctx_r1.currentVehicleName(), " ");
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Data collection may take several minutes ");
  }
}
function AnalyticalReportComponent_Conditional_103_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Analysis may take up to 60 seconds ");
  }
}
function AnalyticalReportComponent_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p-card")(2, "div", 67)(3, "div", 68);
    \u0275\u0275element(4, "p-progressSpinner", 69);
    \u0275\u0275elementStart(5, "span", 70);
    \u0275\u0275conditionalCreate(6, AnalyticalReportComponent_Conditional_103_Conditional_6_Template, 1, 0)(7, AnalyticalReportComponent_Conditional_103_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275conditionalCreate(9, AnalyticalReportComponent_Conditional_103_Conditional_9_Template, 10, 7, "div", 72);
    \u0275\u0275elementStart(10, "p", 73);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, AnalyticalReportComponent_Conditional_103_Conditional_12_Template, 2, 2, "p", 74);
    \u0275\u0275elementStart(13, "div", 75);
    \u0275\u0275element(14, "div", 76)(15, "div", 77)(16, "div", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 79);
    \u0275\u0275conditionalCreate(18, AnalyticalReportComponent_Conditional_103_Conditional_18_Template, 1, 0)(19, AnalyticalReportComponent_Conditional_103_Conditional_19_Template, 1, 0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isCollectingData() ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.collectionProgress() && ctx_r1.isCollectingData() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadingMessage(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.collectionProgress()) == null ? null : tmp_5_0.currentVehicle) && ctx_r1.isCollectingData() ? 12 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isCollectingData() ? 18 : 19);
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
  // Signals to track form date values for reactive computed properties
  formStartDate = signal(null, ...ngDevMode ? [{ debugName: "formStartDate" }] : []);
  formEndDate = signal(null, ...ngDevMode ? [{ debugName: "formEndDate" }] : []);
  // Prompt suggestion building blocks
  defaultSuggestions = [
    {
      id: "default_1",
      text: "Show driver safety scores",
      full_query: "Show driver safety scores",
      category: "safety",
      confidence: 1
    },
    {
      id: "default_2",
      text: "Analyze fuel consumption patterns",
      full_query: "Analyze fuel consumption patterns",
      category: "efficiency",
      confidence: 1
    },
    {
      id: "default_3",
      text: "Identify high-risk drivers",
      full_query: "Identify high-risk drivers",
      category: "safety",
      confidence: 1
    },
    {
      id: "default_4",
      text: "Compare vehicle utilization rates",
      full_query: "Compare vehicle utilization rates",
      category: "utilization",
      confidence: 1
    },
    {
      id: "default_5",
      text: "Highlight maintenance needs",
      full_query: "Highlight maintenance needs",
      category: "maintenance",
      confidence: 1
    },
    {
      id: "default_6",
      text: "Show trip efficiency metrics",
      full_query: "Show trip efficiency metrics",
      category: "efficiency",
      confidence: 1
    },
    {
      id: "default_7",
      text: "Summarize daily activity",
      full_query: "Summarize daily activity",
      category: "overview",
      confidence: 1
    },
    {
      id: "default_8",
      text: "Flag vehicles needing attention",
      full_query: "Flag vehicles needing attention",
      category: "alerts",
      confidence: 1
    }
  ];
  suggestions = signal([...this.defaultSuggestions], ...ngDevMode ? [{ debugName: "suggestions" }] : []);
  isLoadingSuggestions = signal(false, ...ngDevMode ? [{ debugName: "isLoadingSuggestions" }] : []);
  lastFetchedPrompt = "";
  suggestionPollingInterval = null;
  suggestionsEndpoint = computed(() => {
    return "https://cypherview-reporting-develop-function.azurewebsites.net/api/query-suggestions";
  }, ...ngDevMode ? [{ debugName: "suggestionsEndpoint" }] : []);
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
    });
    this.apiForm.get("endDate")?.valueChanges.subscribe((value) => {
      this.formEndDate.set(value);
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
    this.startSuggestionPolling();
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
  onSelectSuggestion(suggestion) {
    const currentQuery = this.apiForm.get("reportQuery")?.value || "";
    const separator = currentQuery.trim() ? ". " : "";
    this.apiForm.patchValue({
      reportQuery: currentQuery.trim() + separator + suggestion.text
    });
    this.suggestions.update((current) => current.filter((s) => s.id !== suggestion.id));
  }
  startSuggestionPolling() {
    this.suggestionPollingInterval = setInterval(() => {
      const currentPrompt = this.apiForm.get("reportQuery")?.value || "";
      if (currentPrompt !== this.lastFetchedPrompt && currentPrompt.length > 10) {
        this.fetchSuggestions(currentPrompt);
      }
    }, 25e3);
  }
  stopSuggestionPolling() {
    if (this.suggestionPollingInterval) {
      clearInterval(this.suggestionPollingInterval);
      this.suggestionPollingInterval = null;
    }
  }
  fetchSuggestions(prompt) {
    this.isLoadingSuggestions.set(true);
    this.lastFetchedPrompt = prompt;
    const allAssets = this.assets();
    const selectedIds = this._selectedAssetIds();
    const vehicles = selectedIds.map((id) => {
      const asset = allAssets.find((a) => a.value === id);
      return {
        id,
        name: asset?.label ?? id
      };
    });
    const startDate = this.apiForm.get("startDate")?.value;
    const endDate = this.apiForm.get("endDate")?.value;
    const requestBody = {
      key_auth_token: this.authTokenManagerService.getAccessToken(),
      key_base_url: this.apiUrlService.getCurrentApiUrl(),
      partial_query: prompt,
      vehicles,
      context: {
        analysis_type: "fleet_overview",
        date_range: {
          start: startDate?.toISOString().split("T")[0] ?? "",
          end: endDate?.toISOString().split("T")[0] ?? ""
        }
      }
    };
    this.http.post(this.suggestionsEndpoint(), requestBody).subscribe({
      next: (response) => {
        if (Array.isArray(response.suggestions) && response.suggestions.length > 0) {
          this.suggestions.set(response.suggestions);
        }
        this.isLoadingSuggestions.set(false);
      },
      error: () => {
        this.isLoadingSuggestions.set(false);
      }
    });
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
    this.suggestions.set([...this.defaultSuggestions]);
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
        console.log("Sending multipart request to analytical review:", {
          requestMetadata,
          telemetryDataKeys: Object.keys(telemetryData)
        });
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
  onEditReport() {
    this.onClearResponse();
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
    this.stopSuggestionPolling();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticalReportComponent, selectors: [["app-analytical-report"]], decls: 104, vars: 47, consts: [["cardTitle", ""], [1, "p-6", "w-full"], [1, "mb-4", "p-4", "bg-surface-0", "dark:bg-surface-900", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm"], [1, "text-3xl", "font-bold", "text-surface-900", "dark:text-surface-50", "mb-2"], [1, "text-sm", "text-surface-600", "dark:text-surface-400", "m-0"], ["severity", "error", 1, "mb-6"], ["severity", "success", 1, "mb-6"], [1, "mb-6"], [1, "mb-6", "p-4", "bg-red-50", "rounded-lg", "border", "border-red-200"], [1, "w-full"], [1, "space-y-8", 3, "formGroup"], [1, "space-y-3"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-100"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "space-y-2"], [1, "text-sm", "font-medium", "text-surface-800", "dark:text-surface-200"], [1, "text-red-500"], ["formControlName", "startDate", "placeholder", "Select start date", 1, "w-full", 3, "showTime", "showSeconds"], ["formControlName", "endDate", "placeholder", "Select end date", 1, "w-full", 3, "showTime", "showSeconds"], ["for", "asset-multiselect", 1, "text-sm", "font-medium", "text-surface-800", "dark:text-surface-200"], ["id", "asset-multiselect", "optionLabel", "label", "optionValue", "value", "placeholder", "Select vehicles or assets", "styleClass", "w-full", "filterBy", "label", "selectedItemsLabel", "{0} vehicles selected", 3, "ngModelChange", "options", "ngModel", "ngModelOptions", "filter", "showToggleAll", "maxSelectedLabels"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], ["formControlName", "reportQuery", "placeholder", "Describe what you want to analyze...", "rows", "12", 1, "w-full", "p-4", "border", "border-gray-300", "rounded-lg", "resize-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "text-sm"], [1, "mt-3"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "text-xs", "text-surface-500", "dark:text-surface-400"], [1, "text-xs", "text-blue-500", "animate-pulse"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "suggestion-chip"], [1, "space-y-3", "max-h-80", "overflow-y-auto", "pr-2"], [1, "p-4", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "hover:border-blue-300", "dark:hover:border-blue-600", "cursor-pointer", "transition-all", "duration-200", "shadow-sm", "bg-surface-0", "dark:bg-surface-800"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "-mt-1"], [1, "flex", "flex-wrap", "gap-6"], [1, "flex", "items-center", "gap-2"], ["type", "checkbox", "id", "breakdown-per-day", 1, "rounded", "border-surface-300", "dark:border-surface-600", "disabled:opacity-50", 3, "change", "checked", "disabled"], ["for", "breakdown-per-day", 1, "text-sm", "text-surface-800", "dark:text-surface-200"], ["type", "checkbox", "id", "breakdown-per-vehicle", 1, "rounded", "border-surface-300", "dark:border-surface-600", "disabled:opacity-50", 3, "change", "checked", "disabled"], ["for", "breakdown-per-vehicle", 1, "text-sm", "text-surface-800", "dark:text-surface-200"], [1, "space-y-2", "p-4", "bg-yellow-50", "border", "border-yellow-200", "rounded-lg", "text-xs"], [1, "font-semibold", "text-yellow-800"], [1, "text-yellow-700", "space-y-1"], [1, "border-t", "pt-8"], [1, "flex", "flex-wrap", "gap-4"], ["label", "Generate Report", "icon", "pi pi-file-text", "severity", "primary", "size", "large", 3, "onClick", "loading", "disabled"], ["label", "Copy Request", "icon", "pi pi-copy", "severity", "secondary", "size", "large", 3, "onClick", "disabled", "outlined"], ["label", "Clear Report", "icon", "pi pi-trash", "severity", "danger", 3, "outlined"], [1, "mt-8"], [3, "recalculate", "response", "isLoading", "error", "userQuery", "dateRange", "vehicleNames", "clientTimeZone", "clientLanguage"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["label", "Edit Report", "icon", "pi pi-pencil", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], ["label", "New Report", "icon", "pi pi-plus", "severity", "primary", "size", "small", 3, "onClick"], [1, "flex", "justify-between", "items-start"], [1, "text-sm", "font-semibold", "text-red-900", "dark:text-red-100", "mb-1"], [1, "text-sm", "text-red-800", "dark:text-red-200"], ["label", "Try Again", "icon", "pi pi-refresh", "severity", "danger", "size", "small", 3, "onClick", "outlined"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["type", "button", 1, "suggestion-chip", 3, "click"], [1, "chip-icon"], [1, "p-4", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "hover:bg-blue-50", "dark:hover:bg-blue-900/20", "hover:border-blue-300", "dark:hover:border-blue-600", "cursor-pointer", "transition-all", "duration-200", "shadow-sm", "bg-surface-0", "dark:bg-surface-800", 3, "click"], [1, "flex", "justify-between", "items-start", "mb-1"], [1, "text-sm", "font-medium", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "text-blue-600", "dark:text-blue-400", "bg-blue-100", "dark:bg-blue-900/50", "hover:bg-blue-200", "dark:hover:bg-blue-800", "px-2", "py-1", "rounded", "transition-colors"], [1, "text-sm", "text-surface-700", "dark:text-surface-300", "mb-2"], [1, "text-sm", "text-blue-700", "dark:text-blue-300", "italic", "leading-relaxed"], ["type", "checkbox", 1, "rounded", "border-surface-300", "dark:border-surface-600", "disabled:opacity-50", 3, "change", "checked", "id", "disabled"], [1, "text-sm", "text-surface-800", "dark:text-surface-200", 3, "for"], ["label", "Clear Report", "icon", "pi pi-trash", "severity", "danger", 3, "onClick", "outlined"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12"], [1, "flex", "items-center", "mb-4"], ["styleClass", "w-8 h-8"], [1, "ml-3", "text-lg", "text-surface-800", "dark:text-surface-200", "font-medium"], [1, "text-center", "w-full", "max-w-md"], [1, "mb-4"], [1, "text-blue-600", "dark:text-blue-400", "font-medium", "mb-2"], [1, "text-sm", "text-surface-600", "dark:text-surface-400", "mb-2"], [1, "flex", "justify-center", "space-x-2", "mb-4"], [1, "w-2", "h-2", "bg-blue-400", "dark:bg-blue-500", "rounded-full", "animate-pulse"], [1, "w-2", "h-2", "bg-blue-400", "dark:bg-blue-500", "rounded-full", "animate-pulse", "animation-delay-200"], [1, "w-2", "h-2", "bg-blue-400", "dark:bg-blue-500", "rounded-full", "animate-pulse", "animation-delay-400"], [1, "text-sm", "text-surface-600", "dark:text-surface-400"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "w-full", "bg-surface-200", "dark:bg-surface-700", "rounded-full", "h-2", "mb-2"], [1, "bg-blue-500", "h-2", "rounded-full", "transition-all", "duration-300"]], template: function AnalyticalReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4)(5, "strong");
      \u0275\u0275text(6, "Generate analytical reports for your fleet.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " This interface allows you to configure and generate AI-powered fleet analytics reports with customizable parameters. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, AnalyticalReportComponent_Conditional_8_Template, 2, 1, "p-message", 5);
      \u0275\u0275conditionalCreate(9, AnalyticalReportComponent_Conditional_9_Template, 2, 1, "p-message", 6);
      \u0275\u0275conditionalCreate(10, AnalyticalReportComponent_Conditional_10_Template, 5, 9, "div", 7);
      \u0275\u0275conditionalCreate(11, AnalyticalReportComponent_Conditional_11_Template, 8, 2, "div", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "p-card");
      \u0275\u0275template(14, AnalyticalReportComponent_ng_template_14_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(16, "form", 10)(17, "div", 11)(18, "h3", 12);
      \u0275\u0275text(19, " Date Range ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "label", 15);
      \u0275\u0275text(23, " Start Date ");
      \u0275\u0275elementStart(24, "span", 16);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "p-datePicker", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 14)(28, "label", 15);
      \u0275\u0275text(29, " End Date ");
      \u0275\u0275elementStart(30, "span", 16);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "p-datePicker", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 14)(34, "label", 19);
      \u0275\u0275text(35, " Vehicles/Assets ");
      \u0275\u0275elementStart(36, "span", 16);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p-multiSelect", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AnalyticalReportComponent_Template_p_multiSelect_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedAssetIds, $event) || (ctx.selectedAssetIds = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function AnalyticalReportComponent_Template_p_multiSelect_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAssetsChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 21)(40, "div", 14)(41, "label", 15);
      \u0275\u0275text(42, " Report Query ");
      \u0275\u0275elementStart(43, "span", 16);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "textarea", 22);
      \u0275\u0275elementStart(46, "div", 23)(47, "div", 24)(48, "span", 25);
      \u0275\u0275text(49, " Suggestions: ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, AnalyticalReportComponent_Conditional_50_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 27);
      \u0275\u0275repeaterCreate(52, AnalyticalReportComponent_For_53_Template, 4, 1, "button", 28, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 11)(55, "label", 15);
      \u0275\u0275text(56, "Sample Report Queries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 29);
      \u0275\u0275repeaterCreate(58, AnalyticalReportComponent_For_59_Template, 10, 3, "div", 30, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 11)(61, "label", 15);
      \u0275\u0275text(62, "Analysis Breakdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 31);
      \u0275\u0275text(64, " Select how you want the analysis to be organized. This helps the AI structure the report correctly. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 32)(66, "div", 33)(67, "input", 34);
      \u0275\u0275listener("change", function AnalyticalReportComponent_Template_input_change_67_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.analyzePerDay.set(!ctx.analyzePerDay()));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "label", 35);
      \u0275\u0275text(69, " Per Day ");
      \u0275\u0275conditionalCreate(70, AnalyticalReportComponent_Conditional_70_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 33)(72, "input", 36);
      \u0275\u0275listener("change", function AnalyticalReportComponent_Template_input_change_72_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.analyzePerVehicle.set(!ctx.analyzePerVehicle()));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "label", 37);
      \u0275\u0275text(74, " Per Vehicle ");
      \u0275\u0275conditionalCreate(75, AnalyticalReportComponent_Conditional_75_Template, 2, 0, "span", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 11)(77, "label", 15);
      \u0275\u0275text(78, "Data Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 32);
      \u0275\u0275repeaterCreate(80, AnalyticalReportComponent_For_81_Template, 5, 8, "div", 33, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 38)(83, "h4", 39);
      \u0275\u0275text(84, " Debug: Validation Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 40)(86, "div");
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div");
      \u0275\u0275text(89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div");
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div");
      \u0275\u0275text(93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div");
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div");
      \u0275\u0275text(97);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "div", 41)(99, "div", 42)(100, "p-button", 43);
      \u0275\u0275listener("onClick", function AnalyticalReportComponent_Template_p_button_onClick_100_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTestApi());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p-button", 44);
      \u0275\u0275listener("onClick", function AnalyticalReportComponent_Template_p_button_onClick_101_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCopyRequestBody());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(102, AnalyticalReportComponent_Conditional_102_Template, 1, 1, "p-button", 45);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(103, AnalyticalReportComponent_Conditional_103_Template, 20, 5, "div", 46);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_30_0;
      let tmp_32_0;
      let tmp_33_0;
      let tmp_34_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.title, " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.errorMessage() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.dashboardResponse() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.apiResponse() && !((tmp_5_0 = ctx.apiResponse()) == null ? null : tmp_5_0.success) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.isTestingApi() || ((tmp_6_0 = ctx.apiResponse()) == null ? null : tmp_6_0.success));
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.apiForm);
      \u0275\u0275advance(10);
      \u0275\u0275property("showTime", true)("showSeconds", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("showTime", true)("showSeconds", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.assets());
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedAssetIds);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(46, _c05))("filter", true)("showToggleAll", true)("maxSelectedLabels", 3);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.isLoadingSuggestions() ? 50 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.suggestions());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.sampleRequests());
      \u0275\u0275advance(9);
      \u0275\u0275property("checked", ctx.analyzePerDay())("disabled", !ctx.canAnalyzePerDay());
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-50", !ctx.canAnalyzePerDay());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.canAnalyzePerDay() ? 70 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("checked", ctx.analyzePerVehicle())("disabled", !ctx.canAnalyzePerVehicle());
      \u0275\u0275advance();
      \u0275\u0275classProp("opacity-50", !ctx.canAnalyzePerVehicle());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.canAnalyzePerVehicle() ? 75 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.dataTypeOptions());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2(" Client Selected: ", !!((tmp_30_0 = ctx.selectedClientSignal()) == null ? null : tmp_30_0.id) ? "YES" : "NO", " (", ((tmp_30_0 = ctx.selectedClientSignal()) == null ? null : tmp_30_0.id) || "none", ") ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" Assets Selected: ", ctx.selectedAssetIds.length, " (", ctx.selectedAssetIds.join(", ") || "none", ") ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" Report Query: ", !!((tmp_32_0 = ctx.apiForm.get("reportQuery")) == null ? null : tmp_32_0.value) ? "YES" : "NO", " (", ((tmp_32_0 = ctx.apiForm.get("reportQuery")) == null ? null : tmp_32_0.value == null ? null : tmp_32_0.value.length) || 0, " chars) ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" Start Date: ", !!((tmp_33_0 = ctx.apiForm.get("startDate")) == null ? null : tmp_33_0.value) ? "YES" : "NO", " (", ((tmp_33_0 = ctx.apiForm.get("startDate")) == null ? null : tmp_33_0.value) || "none", ") ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" End Date: ", !!((tmp_34_0 = ctx.apiForm.get("endDate")) == null ? null : tmp_34_0.value) ? "YES" : "NO", " (", ((tmp_34_0 = ctx.apiForm.get("endDate")) == null ? null : tmp_34_0.value) || "none", ") ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Ready for Testing: ", ctx.isReadyForTesting() ? "YES" : "NO", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.isTestingApi())("disabled", !ctx.isReadyForTesting() || ctx.isTestingApi());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isReadyForTesting())("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.apiResponse() ? 102 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isTestingApi() ? 103 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    SelectModule,
    AutoCompleteModule,
    MultiSelectModule,
    MultiSelect,
    DatePickerModule,
    DatePicker,
    MessageModule,
    Message,
    CardModule,
    Card,
    ButtonModule,
    Button,
    ProgressSpinnerModule,
    ProgressSpinner,
    InputTextModule,
    AccordionModule,
    AnalyticsDashboardComponent
  ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .p-card[_ngcontent-%COMP%]   .p-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .p-accordion[_ngcontent-%COMP%]   .p-accordion-tab[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .p-accordion[_ngcontent-%COMP%]   .p-accordion-tab[_ngcontent-%COMP%]   .p-accordion-header[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n[_nghost-%COMP%]   .p-accordion[_ngcontent-%COMP%]   .p-accordion-tab[_ngcontent-%COMP%]   .p-accordion-header.p-highlight[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]   .p-accordion[_ngcontent-%COMP%]   .p-accordion-tab[_ngcontent-%COMP%]   .p-accordion-content[_ngcontent-%COMP%] {\n  border-top: none;\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n[_nghost-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-family:\n    "Fira Code",\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: #374151;\n}\n[_nghost-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "Fira Code",\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  background-color: #f3f4f6;\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.25rem;\n  font-size: 0.875em;\n}\n[_nghost-%COMP%]   .sample-request-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n[_nghost-%COMP%]   .sample-request-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n[_nghost-%COMP%]   .status-badge.success[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n[_nghost-%COMP%]   .status-badge.error[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n[_nghost-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 1rem;\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   .data-type-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background-color: #dbeafe;\n  color: #1e40af;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-right: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  font-size: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border: 1px solid #bae6fd;\n  border-radius: 9999px;\n  color: #0369a1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n[_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  border-color: #7dd3fc;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);\n}\n[_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 0.875rem;\n}\n.dark   [_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%], \n.dark   [_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0c4a6e 0%,\n      #075985 100%);\n  border-color: #0369a1;\n  color: #bae6fd;\n}\n.dark   [_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover, \n.dark   [_nghost-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #075985 0%,\n      #0284c7 100%);\n  border-color: #0ea5e9;\n}\n[_nghost-%COMP%]   .response-container[_ngcontent-%COMP%] {\n  max-height: 32rem;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   .json-viewer[_ngcontent-%COMP%] {\n  max-height: 24rem;\n  overflow: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n}\n[_nghost-%COMP%]   .animation-delay-200[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n[_nghost-%COMP%]   .animation-delay-400[_ngcontent-%COMP%] {\n  animation-delay: 0.4s;\n}\n/*# sourceMappingURL=analytical-report.component.css.map */'] });
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
      AnalyticsDashboardComponent
    ], template: `<!-- eslint-disable @angular-eslint/template/label-has-associated-control -->
<div class="p-6 w-full">
  <div
    class="mb-4 p-4 bg-surface-0 dark:bg-surface-900 rounded-lg border border-surface-200 dark:border-surface-700 shadow-sm"
  >
    <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-2">
      {{ title }}
    </h1>
    <p class="text-sm text-surface-600 dark:text-surface-400 m-0">
      <strong>Generate analytical reports for your fleet.</strong> This
      interface allows you to configure and generate AI-powered fleet analytics
      reports with customizable parameters.
    </p>
  </div>

  @if (errorMessage()) {
    <p-message severity="error" class="mb-6">{{ errorMessage() }}</p-message>
  }

  @if (successMessage()) {
    <p-message severity="success" class="mb-6">{{
      successMessage()
    }}</p-message>
  }

  <!-- Success Summary (shown after report generation) -->
  <!-- Interactive Analytics Dashboard (replaces simple success message) -->
  @if (dashboardResponse()) {
    <div class="mb-6">
      <app-analytics-dashboard
        [response]="dashboardResponse()"
        [isLoading]="false"
        [error]="undefined"
        [userQuery]="lastReportQuery()"
        [dateRange]="formatDateRange()"
        [vehicleNames]="getSelectedVehicleNames()"
        [clientTimeZone]="selectedClientSignal()?.timeZoneId ?? undefined"
        [clientLanguage]="selectedClientSignal()?.language ?? undefined"
        (recalculate)="onRecalculate()"
      >
      </app-analytics-dashboard>

      <!-- Dashboard Action Buttons -->
      <div class="mt-4 flex justify-end gap-2">
        <p-button
          label="Edit Report"
          icon="pi pi-pencil"
          (onClick)="onEditReport()"
          severity="secondary"
          [outlined]="true"
          size="small"
        />
        <p-button
          label="New Report"
          icon="pi pi-plus"
          (onClick)="onClearResponse()"
          severity="primary"
          size="small"
        />
      </div>
    </div>
  }

  <!-- Error Message (shown if there's an error) -->
  @if (apiResponse() && !apiResponse()?.success) {
    <div class="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
      <div class="flex justify-between items-start">
        <div>
          <h4 class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">
            Report Generation Failed
          </h4>
          <p class="text-sm text-red-800 dark:text-red-200">
            {{ apiResponse()?.error }}
          </p>
        </div>
        <p-button
          label="Try Again"
          icon="pi pi-refresh"
          (onClick)="onClearResponse()"
          severity="danger"
          [outlined]="true"
          size="small"
        />
      </div>
    </div>
  }

  <!-- Configuration Form (hidden when generating or report is successfully generated) -->
  <div class="w-full" [class.hidden]="isTestingApi() || apiResponse()?.success">
    <!-- Configuration Panel -->
    <p-card>
      <ng-template #cardTitle>
        <span
          class="text-lg font-semibold text-surface-900 dark:text-surface-100"
          >Report Configuration</span
        >
      </ng-template>

      <form [formGroup]="apiForm" class="space-y-8">
        <!-- Date Range Row -->
        <div class="space-y-3">
          <h3
            class="text-sm font-semibold text-surface-900 dark:text-surface-100"
          >
            Date Range
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium text-surface-800 dark:text-surface-200"
              >
                Start Date <span class="text-red-500">*</span>
              </label>
              <p-datePicker
                formControlName="startDate"
                [showTime]="true"
                [showSeconds]="true"
                placeholder="Select start date"
                class="w-full"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium text-surface-800 dark:text-surface-200"
              >
                End Date <span class="text-red-500">*</span>
              </label>
              <p-datePicker
                formControlName="endDate"
                [showTime]="true"
                [showSeconds]="true"
                placeholder="Select end date"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <!-- Vehicle/Asset Selection -->
        <div class="space-y-2">
          <label
            for="asset-multiselect"
            class="text-sm font-medium text-surface-800 dark:text-surface-200"
          >
            Vehicles/Assets <span class="text-red-500">*</span>
          </label>
          <p-multiSelect
            id="asset-multiselect"
            [options]="assets()"
            optionLabel="label"
            optionValue="value"
            placeholder="Select vehicles or assets"
            [(ngModel)]="selectedAssetIds"
            (ngModelChange)="onAssetsChange($event)"
            [ngModelOptions]="{ standalone: true }"
            styleClass="w-full"
            [filter]="true"
            filterBy="label"
            [showToggleAll]="true"
            [maxSelectedLabels]="3"
            selectedItemsLabel="{0} vehicles selected"
          />
        </div>

        <!-- Report Query Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Report Query -->
          <div class="space-y-2">
            <label
              class="text-sm font-medium text-surface-800 dark:text-surface-200"
            >
              Report Query <span class="text-red-500">*</span>
            </label>
            <textarea
              formControlName="reportQuery"
              placeholder="Describe what you want to analyze..."
              rows="12"
              class="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            ></textarea>

            <!-- Suggestion Building Blocks -->
            <div class="mt-3">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs text-surface-500 dark:text-surface-400">
                  Suggestions:
                </span>
                @if (isLoadingSuggestions()) {
                  <span class="text-xs text-blue-500 animate-pulse"
                    >updating...</span
                  >
                }
              </div>
              <div class="flex flex-wrap gap-2">
                @for (suggestion of suggestions(); track suggestion.id) {
                  <button
                    type="button"
                    (click)="onSelectSuggestion(suggestion)"
                    class="suggestion-chip"
                  >
                    <span class="chip-icon">+</span>
                    {{ suggestion.text }}
                  </button>
                }
              </div>
            </div>
          </div>

          <!-- Sample Report Queries -->
          <div class="space-y-3">
            <label
              class="text-sm font-medium text-surface-800 dark:text-surface-200"
              >Sample Report Queries</label
            >
            <div class="space-y-3 max-h-80 overflow-y-auto pr-2">
              @for (sample of sampleRequests(); track sample.name) {
                <div
                  class="p-4 border border-surface-200 dark:border-surface-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer transition-all duration-200 shadow-sm bg-surface-0 dark:bg-surface-800"
                  (click)="onLoadSampleRequest(sample)"
                >
                  <div class="flex justify-between items-start mb-1">
                    <h4
                      class="text-sm font-medium text-surface-900 dark:text-surface-100"
                    >
                      {{ sample.name }}
                    </h4>
                    <button
                      class="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800 px-2 py-1 rounded transition-colors"
                    >
                      Use
                    </button>
                  </div>
                  <p
                    class="text-sm text-surface-700 dark:text-surface-300 mb-2"
                  >
                    {{ sample.description }}
                  </p>
                  <p
                    class="text-sm text-blue-700 dark:text-blue-300 italic leading-relaxed"
                  >
                    "{{ sample.query }}"
                  </p>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Analysis Breakdown -->
        <div class="space-y-3">
          <label
            class="text-sm font-medium text-surface-800 dark:text-surface-200"
            >Analysis Breakdown</label
          >
          <p class="text-xs text-surface-500 dark:text-surface-400 -mt-1">
            Select how you want the analysis to be organized. This helps the AI
            structure the report correctly.
          </p>
          <div class="flex flex-wrap gap-6">
            <!-- Per Day checkbox -->
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                [checked]="analyzePerDay()"
                (change)="analyzePerDay.set(!analyzePerDay())"
                id="breakdown-per-day"
                [disabled]="!canAnalyzePerDay()"
                class="rounded border-surface-300 dark:border-surface-600 disabled:opacity-50"
              />
              <label
                for="breakdown-per-day"
                class="text-sm text-surface-800 dark:text-surface-200"
                [class.opacity-50]="!canAnalyzePerDay()"
              >
                Per Day
                @if (!canAnalyzePerDay()) {
                  <span class="text-xs text-surface-500 dark:text-surface-400"
                    >(Select more than 2 days)</span
                  >
                }
              </label>
            </div>

            <!-- Per Vehicle checkbox -->
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                [checked]="analyzePerVehicle()"
                (change)="analyzePerVehicle.set(!analyzePerVehicle())"
                id="breakdown-per-vehicle"
                [disabled]="!canAnalyzePerVehicle()"
                class="rounded border-surface-300 dark:border-surface-600 disabled:opacity-50"
              />
              <label
                for="breakdown-per-vehicle"
                class="text-sm text-surface-800 dark:text-surface-200"
                [class.opacity-50]="!canAnalyzePerVehicle()"
              >
                Per Vehicle
                @if (!canAnalyzePerVehicle()) {
                  <span class="text-xs text-surface-500 dark:text-surface-400"
                    >(Select more than 1 vehicle)</span
                  >
                }
              </label>
            </div>
          </div>
        </div>

        <!-- Data Types -->
        <div class="space-y-3">
          <label
            class="text-sm font-medium text-surface-800 dark:text-surface-200"
            >Data Types</label
          >
          <div class="flex flex-wrap gap-6">
            @for (option of dataTypeOptions(); track option.value) {
              <div class="flex items-center gap-2">
                <input
                  type="checkbox"
                  [checked]="option.selected"
                  (change)="onDataTypeChange(option)"
                  [id]="'datatype-' + option.value"
                  [disabled]="
                    option.value === 'telemetry' && isMultipleVehiclesSelected()
                  "
                  class="rounded border-surface-300 dark:border-surface-600 disabled:opacity-50"
                />
                <label
                  [for]="'datatype-' + option.value"
                  class="text-sm text-surface-800 dark:text-surface-200"
                  [class.opacity-50]="
                    option.value === 'telemetry' && isMultipleVehiclesSelected()
                  "
                >
                  {{ option.label }}
                  @if (
                    option.value === 'telemetry' && isMultipleVehiclesSelected()
                  ) {
                    <span class="text-xs text-surface-500 dark:text-surface-400"
                      >(Not available for multiple vehicles)</span
                    >
                  }
                </label>
              </div>
            }
          </div>
        </div>

        <!-- Debug Information (temporary for troubleshooting) -->
        <div
          class="space-y-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs"
        >
          <h4 class="font-semibold text-yellow-800">
            Debug: Validation Status
          </h4>
          <div class="text-yellow-700 space-y-1">
            <div>
              Client Selected:
              {{ !!selectedClientSignal()?.id ? 'YES' : 'NO' }} ({{
                selectedClientSignal()?.id || 'none'
              }})
            </div>
            <div>
              Assets Selected: {{ selectedAssetIds.length }} ({{
                selectedAssetIds.join(', ') || 'none'
              }})
            </div>
            <div>
              Report Query:
              {{ !!apiForm.get('reportQuery')?.value ? 'YES' : 'NO' }} ({{
                apiForm.get('reportQuery')?.value?.length || 0
              }}
              chars)
            </div>
            <div>
              Start Date:
              {{ !!apiForm.get('startDate')?.value ? 'YES' : 'NO' }} ({{
                apiForm.get('startDate')?.value || 'none'
              }})
            </div>
            <div>
              End Date: {{ !!apiForm.get('endDate')?.value ? 'YES' : 'NO' }} ({{
                apiForm.get('endDate')?.value || 'none'
              }})
            </div>
            <div>
              Ready for Testing: {{ isReadyForTesting() ? 'YES' : 'NO' }}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="border-t pt-8">
          <div class="flex flex-wrap gap-4">
            <p-button
              label="Generate Report"
              icon="pi pi-file-text"
              [loading]="isTestingApi()"
              [disabled]="!isReadyForTesting() || isTestingApi()"
              (onClick)="onTestApi()"
              severity="primary"
              size="large"
            />

            <p-button
              label="Copy Request"
              icon="pi pi-copy"
              [disabled]="!isReadyForTesting()"
              (onClick)="onCopyRequestBody()"
              severity="secondary"
              [outlined]="true"
              size="large"
            />

            @if (apiResponse()) {
              <p-button
                label="Clear Report"
                icon="pi pi-trash"
                (onClick)="onClearResponse()"
                severity="danger"
                [outlined]="true"
              />
            }
          </div>
        </div>
      </form>
    </p-card>
  </div>

  <!-- Loading State (shown while generating report) -->
  @if (isTestingApi()) {
    <div class="mt-8">
      <p-card>
        <div class="flex flex-col items-center justify-center py-12">
          <div class="flex items-center mb-4">
            <p-progressSpinner styleClass="w-8 h-8" />
            <span
              class="ml-3 text-lg text-surface-800 dark:text-surface-200 font-medium"
            >
              @if (isCollectingData()) {
                Collecting Data...
              } @else {
                Generating Report...
              }
            </span>
          </div>
          <div class="text-center w-full max-w-md">
            <!-- Progress Bar for Data Collection -->
            @if (collectionProgress() && isCollectingData()) {
              <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-surface-600 dark:text-surface-400"
                    >Collection Progress</span
                  >
                  <span
                    class="text-sm font-medium text-surface-800 dark:text-surface-200"
                  >
                    {{ collectionProgress()?.percentage || 0 }}%
                  </span>
                </div>
                <div
                  class="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2 mb-2"
                >
                  <!-- eslint-disable-next-line @angular-eslint/template/no-inline-styles -->
                  <div
                    class="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    [style.width.%]="collectionProgress()?.percentage || 0"
                  ></div>
                </div>
                <div class="text-xs text-surface-500 dark:text-surface-400">
                  {{ collectionProgress()?.completedRequests || 0 }} of
                  {{ collectionProgress()?.totalRequests || 0 }} requests
                  completed ({{ collectionProgress()?.successfulRequests || 0 }}
                  successful,
                  {{ collectionProgress()?.failedRequests || 0 }} failed)
                </div>
              </div>
            }

            <p class="text-blue-600 dark:text-blue-400 font-medium mb-2">
              {{ loadingMessage() }}
            </p>

            @if (collectionProgress()?.currentVehicle && isCollectingData()) {
              <p class="text-sm text-surface-600 dark:text-surface-400 mb-2">
                Processing:
                {{ collectionProgress()?.currentDataType || 'data' }} for
                {{ currentVehicleName() }}
              </p>
            }

            <div class="flex justify-center space-x-2 mb-4">
              <div
                class="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse"
              ></div>
              <div
                class="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse animation-delay-200"
              ></div>
              <div
                class="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse animation-delay-400"
              ></div>
            </div>

            <p class="text-sm text-surface-600 dark:text-surface-400">
              @if (isCollectingData()) {
                Data collection may take several minutes
              } @else {
                Analysis may take up to 60 seconds
              }
            </p>
          </div>
        </div>
      </p-card>
    </div>
  }
</div>
`, styles: ['/* src/app/features/development/components/analytical-report/analytical-report.component.scss */\n:host {\n  display: block;\n}\n:host .p-card .p-card-title {\n  margin-bottom: 1rem;\n}\n:host .p-accordion .p-accordion-tab {\n  margin-bottom: 0.5rem;\n}\n:host .p-accordion .p-accordion-tab .p-accordion-header {\n  border-radius: 0.375rem;\n}\n:host .p-accordion .p-accordion-tab .p-accordion-header.p-highlight {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n:host .p-accordion .p-accordion-tab .p-accordion-content {\n  border-top: none;\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n:host pre {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-family:\n    "Fira Code",\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: #374151;\n}\n:host code {\n  font-family:\n    "Fira Code",\n    "Monaco",\n    "Menlo",\n    "Ubuntu Mono",\n    monospace;\n  background-color: #f3f4f6;\n  padding: 0.125rem 0.25rem;\n  border-radius: 0.25rem;\n  font-size: 0.875em;\n}\n:host .sample-request-card {\n  transition: all 0.2s ease-in-out;\n}\n:host .sample-request-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n:host .status-badge.success {\n  background-color: #dcfce7;\n  color: #166534;\n}\n:host .status-badge.error {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n:host .form-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 1rem;\n  margin-top: 1rem;\n}\n:host .data-type-chips .chip {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background-color: #dbeafe;\n  color: #1e40af;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-right: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n:host .suggestion-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  font-size: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border: 1px solid #bae6fd;\n  border-radius: 9999px;\n  color: #0369a1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n:host .suggestion-chip:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #e0f2fe 0%,\n      #bae6fd 100%);\n  border-color: #7dd3fc;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);\n}\n:host .suggestion-chip .chip-icon {\n  font-weight: bold;\n  font-size: 0.875rem;\n}\n:host-context(.dark) :host .suggestion-chip,\n.dark :host .suggestion-chip {\n  background:\n    linear-gradient(\n      135deg,\n      #0c4a6e 0%,\n      #075985 100%);\n  border-color: #0369a1;\n  color: #bae6fd;\n}\n:host-context(.dark) :host .suggestion-chip:hover,\n.dark :host .suggestion-chip:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #075985 0%,\n      #0284c7 100%);\n  border-color: #0ea5e9;\n}\n:host .response-container {\n  max-height: 32rem;\n  overflow-y: auto;\n}\n:host .json-viewer {\n  max-height: 24rem;\n  overflow: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n}\n:host .animation-delay-200 {\n  animation-delay: 0.2s;\n}\n:host .animation-delay-400 {\n  animation-delay: 0.4s;\n}\n/*# sourceMappingURL=analytical-report.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticalReportComponent, { className: "AnalyticalReportComponent", filePath: "src/app/features/development/components/analytical-report/analytical-report.component.ts", lineNumber: 125 });
})();

export {
  AnalyticalReportComponent
};
//# sourceMappingURL=chunk-XAQ2DYQL.js.map
