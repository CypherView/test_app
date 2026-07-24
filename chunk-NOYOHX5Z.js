import {
  Step,
  StepList,
  StepPanel,
  StepPanels,
  Stepper,
  StepperModule
} from "./chunk-227XKAZG.js";
import {
  Dialog,
  DialogModule
} from "./chunk-HUGEA54Y.js";
import {
  TranslatePipe
} from "./chunk-RNIEZZVX.js";
import {
  Button,
  ButtonModule,
  CommonModule,
  NgClass,
  NgTemplateOutlet,
  PrimeTemplate
} from "./chunk-T7ZENNNQ.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-JFHDN3YU.js";

// src/app/shared/components/stepper/stepper.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _c1 = (a0, a1, a2) => ({ "justify-end": a0, "justify-between": a1, "justify-start": a2 });
var _forTrack0 = ($index, $item) => $item.value;
function StepperComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275property("value", step_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r1.header);
  }
}
function StepperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-list");
    \u0275\u0275repeaterCreate(1, StepperComponent_Conditional_2_For_2_Template, 2, 2, "p-step", 2, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.steps());
  }
}
function StepperComponent_For_5_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getPrevStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "SHARED.COMMON.BUTTONS.BACK"));
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const activateCallback_r4 = \u0275\u0275nextContext(2).activateCallback;
      const step_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(activateCallback_r4(ctx_r1.getNextStep(step_r5.value)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "SHARED.COMMON.BUTTONS.NEXT"))("disabled", step_r5.disableNext);
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.complete.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "SHARED.COMMON.BUTTONS.FINISH"))("loading", ctx_r1.loading());
  }
}
function StepperComponent_For_5_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_1_Template, 2, 3, "p-button", 8);
    \u0275\u0275conditionalCreate(2, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_2_Template, 2, 4, "p-button", 9)(3, StepperComponent_For_5_ng_template_1_Conditional_3_Conditional_3_Template, 2, 4, "p-button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c1, ctx_r1.isFirstStep(step_r5.value), !ctx_r1.isFirstStep(step_r5.value) && !ctx_r1.isLastStep(step_r5.value), ctx_r1.isLastStep(step_r5.value)));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isFirstStep(step_r5.value) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep(step_r5.value) ? 2 : 3);
  }
}
function StepperComponent_For_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275template(2, StepperComponent_For_5_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StepperComponent_For_5_ng_template_1_Conditional_3_Template, 4, 7, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r5.content)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c0, step_r5));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showNavButtons() ? 3 : -1);
  }
}
function StepperComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-step-panel", 2);
    \u0275\u0275template(1, StepperComponent_For_5_ng_template_1_Template, 4, 5, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    \u0275\u0275property("value", step_r5.value);
  }
}
var StepperComponent = class _StepperComponent {
  steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : (
    /* istanbul ignore next */
    []
  ));
  currentStepValue = model(1, ...ngDevMode ? [{ debugName: "currentStepValue" }] : (
    /* istanbul ignore next */
    []
  ));
  showNavButtons = input(true, ...ngDevMode ? [{ debugName: "showNavButtons" }] : (
    /* istanbul ignore next */
    []
  ));
  linearProgression = input(false, ...ngDevMode ? [{ debugName: "linearProgression" }] : (
    /* istanbul ignore next */
    []
  ));
  containerClass = input("basis-[50rem]", ...ngDevMode ? [{ debugName: "containerClass" }] : (
    /* istanbul ignore next */
    []
  ));
  showSteps = input(true, ...ngDevMode ? [{ debugName: "showSteps" }] : (
    /* istanbul ignore next */
    []
  ));
  stepChange = output();
  complete = output();
  nextStep = output();
  prevStep = output();
  loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  isLastStep(value) {
    return value === Math.max(...this.steps().map((s) => s.value));
  }
  isFirstStep(value) {
    return value === Math.min(...this.steps().map((s) => s.value));
  }
  getNextStep(currentValue) {
    const sortedValues = this.steps().map((s) => s.value).sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex + 1] || currentValue;
  }
  getPrevStep(currentValue) {
    const sortedValues = this.steps().map((s) => s.value).sort((a, b) => a - b);
    const currentIndex = sortedValues.indexOf(currentValue);
    return sortedValues[currentIndex - 1] || currentValue;
  }
  // Methods for external navigation
  goNext() {
    const nextStep = this.getNextStep(this.currentStepValue());
    if (nextStep !== this.currentStepValue()) {
      this.currentStepValue.set(nextStep);
      this.stepChange.emit(nextStep);
      this.nextStep.emit(nextStep);
    }
  }
  goBack() {
    const prevStep = this.getPrevStep(this.currentStepValue());
    if (prevStep !== this.currentStepValue()) {
      this.currentStepValue.set(prevStep);
      this.stepChange.emit(prevStep);
      this.prevStep.emit(prevStep);
    }
  }
  // Check if we can finish the wizard
  canFinish() {
    return this.isLastStep(this.currentStepValue()) && !(this.getCurrentStep()?.disableNext ?? false);
  }
  // Get the current step object
  getCurrentStep() {
    return this.steps().find((s) => s.value === this.currentStepValue());
  }
  static \u0275fac = function StepperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepperComponent, selectors: [["app-stepper"]], inputs: { steps: [1, "steps"], currentStepValue: [1, "currentStepValue"], showNavButtons: [1, "showNavButtons"], linearProgression: [1, "linearProgression"], containerClass: [1, "containerClass"], showSteps: [1, "showSteps"], loading: [1, "loading"] }, outputs: { currentStepValue: "currentStepValueChange", stepChange: "stepChange", complete: "complete", nextStep: "nextStep", prevStep: "prevStep" }, decls: 6, vars: 5, consts: [[1, "card", "flex", "justify-center"], [3, "value", "linear"], [3, "value"], ["pTemplate", "content"], [1, "flex", "flex-col"], [1, "min-h-48"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "flex", "pt-6", 3, "ngClass"], ["severity", "secondary", "icon", "pi pi-arrow-left", 3, "label"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "label", "disabled"], ["icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "label", "loading"], ["severity", "secondary", "icon", "pi pi-arrow-left", 3, "onClick", "label"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "label", "disabled"], ["icon", "pi pi-check", "iconPos", "right", "severity", "success", 3, "onClick", "label", "loading"]], template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-stepper", 1);
      \u0275\u0275conditionalCreate(2, StepperComponent_Conditional_2_Template, 3, 0, "p-step-list");
      \u0275\u0275elementStart(3, "p-step-panels");
      \u0275\u0275repeaterCreate(4, StepperComponent_For_5_Template, 2, 1, "p-step-panel", 2, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.containerClass());
      \u0275\u0275property("value", ctx.currentStepValue())("linear", ctx.linearProgression());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSteps() ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.steps());
    }
  }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, ButtonModule, Button, PrimeTemplate, StepperModule, Stepper, StepList, StepPanels, StepPanel, Step, TranslatePipe], styles: ["\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n[_nghost-%COMP%]     .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n[_nghost-%COMP%]     .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{ selector: "app-stepper", imports: [CommonModule, ButtonModule, StepperModule, TranslatePipe], template: `<div class="card flex justify-center">
  <p-stepper
    [value]="currentStepValue()"
    [class]="containerClass()"
    [linear]="linearProgression()"
  >
    @if (showSteps()) {
      <p-step-list>
        @for (step of steps(); track step.value) {
          <p-step [value]="step.value">{{ step.header }}</p-step>
        }
      </p-step-list>
    }
    <p-step-panels>
      @for (step of steps(); track step.value) {
        <p-step-panel [value]="step.value">
          <ng-template
            pTemplate="content"
            let-activateCallback="activateCallback"
          >
            <div class="flex flex-col">
              <div class="min-h-48">
                <!-- Content container -->
                <ng-container
                  *ngTemplateOutlet="step.content; context: { $implicit: step }"
                ></ng-container>
              </div>

              @if (showNavButtons()) {
                <div
                  class="flex pt-6"
                  [ngClass]="{
                    'justify-end': isFirstStep(step.value),
                    'justify-between':
                      !isFirstStep(step.value) && !isLastStep(step.value),
                    'justify-start': isLastStep(step.value),
                  }"
                >
                  @if (!isFirstStep(step.value)) {
                    <p-button
                      [label]="'SHARED.COMMON.BUTTONS.BACK' | translate"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      (onClick)="activateCallback(getPrevStep(step.value))"
                    />
                  }

                  @if (!isLastStep(step.value)) {
                    <p-button
                      [label]="'SHARED.COMMON.BUTTONS.NEXT' | translate"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                      (onClick)="activateCallback(getNextStep(step.value))"
                      [disabled]="step.disableNext"
                    />
                  } @else {
                    <p-button
                      [label]="'SHARED.COMMON.BUTTONS.FINISH' | translate"
                      icon="pi pi-check"
                      iconPos="right"
                      severity="success"
                      [loading]="loading()"
                      (onClick)="complete.emit()"
                    />
                  }
                </div>
              }
            </div>
          </ng-template>
        </p-step-panel>
      }
    </p-step-panels>
  </p-stepper>
</div>
`, styles: ["/* src/app/shared/components/stepper/stepper.component.scss */\n:host ::ng-deep .p-steps .p-steps-item.step-completed .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-error .p-menuitem-link .p-steps-number {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n:host ::ng-deep .p-steps .p-steps-item.step-active .p-menuitem-link .p-steps-number {\n  background-color: var(--color-primary-color);\n}\n:host ::ng-deep .stepper-numbered .p-steps-item:before {\n  display: none;\n}\n/*# sourceMappingURL=stepper.component.css.map */\n"] }]
  }], null, { steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], currentStepValue: [{ type: Input, args: [{ isSignal: true, alias: "currentStepValue", required: false }] }, { type: Output, args: ["currentStepValueChange"] }], showNavButtons: [{ type: Input, args: [{ isSignal: true, alias: "showNavButtons", required: false }] }], linearProgression: [{ type: Input, args: [{ isSignal: true, alias: "linearProgression", required: false }] }], containerClass: [{ type: Input, args: [{ isSignal: true, alias: "containerClass", required: false }] }], showSteps: [{ type: Input, args: [{ isSignal: true, alias: "showSteps", required: false }] }], stepChange: [{ type: Output, args: ["stepChange"] }], complete: [{ type: Output, args: ["complete"] }], nextStep: [{ type: Output, args: ["nextStep"] }], prevStep: [{ type: Output, args: ["prevStep"] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepperComponent, { className: "StepperComponent", filePath: "src/app/shared/components/stepper/stepper.component.ts", lineNumber: 14 });
})();

// src/app/shared/components/wizard/wizard.component.ts
function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "SHARED.COMMON.BUTTONS.BACK"));
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, "SHARED.COMMON.BUTTONS.NEXT"))("disabled", !ctx_r1.canGoNext())("loading", ctx_r1.isValidating());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Conditional_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, "SHARED.COMMON.BUTTONS.FINISH"))("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "p-button", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_0_Conditional_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_0_Conditional_2_Conditional_3_Template, 2, 3, "p-button", 5);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_0_Conditional_2_Conditional_4_Template, 2, 5, "p-button", 6);
    \u0275\u0275conditionalCreate(5, WizardComponent_Conditional_0_Conditional_2_Conditional_5_Template, 2, 5, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 5 : -1);
  }
}
function WizardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_0_Template_app_stepper_stepChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_0_Template_app_stepper_complete_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(2, WizardComponent_Conditional_0_Conditional_2_Template, 6, 6, "div", 3);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep())("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showFooterButtons() && !((tmp_7_0 = ctx_r1.getCurrentStep()) == null ? null : tmp_7_0.hideDefaultFooter) ? 2 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "SHARED.COMMON.BUTTONS.BACK"));
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goNext());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "SHARED.COMMON.BUTTONS.NEXT"))("disabled", !ctx_r1.canGoNext());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 3, "SHARED.COMMON.BUTTONS.FINISH"))("disabled", !ctx_r1.canFinish())("loading", ctx_r1.loading());
  }
}
function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-button", 4);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onClick", function WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelWizard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_3_Template, 2, 3, "p-button", 5);
    \u0275\u0275conditionalCreate(4, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_4_Template, 2, 4, "p-button", 14);
    \u0275\u0275conditionalCreate(5, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Conditional_5_Template, 2, 5, "p-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 4, "SHARED.COMMON.BUTTONS.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isFirstStep() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLastStep() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLastStep() ? 5 : -1);
  }
}
function WizardComponent_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_1_ng_template_3_Conditional_0_Template, 6, 6, "div", 13);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.showFooterButtons() && !((tmp_2_0 = ctx_r1.getCurrentStep()) == null ? null : tmp_2_0.hideDefaultFooter) ? 0 : -1);
  }
}
function WizardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 11);
    \u0275\u0275listener("onHide", function WizardComponent_Conditional_1_Template_p_dialog_onHide_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    })("visibleChange", function WizardComponent_Conditional_1_Template_p_dialog_visibleChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-stepper", 2);
    \u0275\u0275listener("stepChange", function WizardComponent_Conditional_1_Template_app_stepper_stepChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepChange($event));
    })("complete", function WizardComponent_Conditional_1_Template_app_stepper_complete_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepComplete());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, WizardComponent_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", ctx_r1.visible())("header", ctx_r1.header())("modal", true)("draggable", false)("resizable", false)("closeOnEscape", ctx_r1.closeOnEscape());
    \u0275\u0275advance(2);
    \u0275\u0275property("steps", ctx_r1.steps())("currentStepValue", ctx_r1.currentStep())("linearProgression", ctx_r1.linearProgression())("showNavButtons", !ctx_r1.useWizardButtonsOnly())("showSteps", ctx_r1.showSteps())("loading", ctx_r1.loading());
  }
}
var WizardComponent = class _WizardComponent {
  stepper;
  // Input properties
  steps = input([], ...ngDevMode ? [{ debugName: "steps" }] : (
    /* istanbul ignore next */
    []
  ));
  visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  header = input("Wizard", ...ngDevMode ? [{ debugName: "header" }] : (
    /* istanbul ignore next */
    []
  ));
  linearProgression = input(true, ...ngDevMode ? [{ debugName: "linearProgression" }] : (
    /* istanbul ignore next */
    []
  ));
  showFooterButtons = input(true, ...ngDevMode ? [{ debugName: "showFooterButtons" }] : (
    /* istanbul ignore next */
    []
  ));
  closeOnEscape = input(true, ...ngDevMode ? [{ debugName: "closeOnEscape" }] : (
    /* istanbul ignore next */
    []
  ));
  useWizardButtonsOnly = input(false, ...ngDevMode ? [{ debugName: "useWizardButtonsOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  showSteps = input(true, ...ngDevMode ? [{ debugName: "showSteps" }] : (
    /* istanbul ignore next */
    []
  ));
  contentOnly = input(false, ...ngDevMode ? [{ debugName: "contentOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = model(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Output properties
  onCancel = output();
  complete = output();
  stepChange = output();
  // Component state
  currentStep = model(1, ...ngDevMode ? [{ debugName: "currentStep" }] : (
    /* istanbul ignore next */
    []
  ));
  isValidating = signal(false, ...ngDevMode ? [{ debugName: "isValidating" }] : (
    /* istanbul ignore next */
    []
  ));
  hideDialog() {
    this.visible.set(false);
  }
  cancelWizard() {
    this.onCancel.emit();
    this.hideDialog();
  }
  onComplete() {
    if (this.steps().length === 0) {
      console.warn("No steps defined in the wizard");
      return;
    }
    this.complete.emit(this.steps());
    this.hideDialog();
  }
  test() {
    this.loading.set(true);
  }
  onStepComplete() {
    this.onComplete();
  }
  onStepChange(step) {
    this.currentStep.set(step);
    this.stepChange.emit(step);
  }
  isLastStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep() === Math.max(...this.steps().map((s) => s.value));
  }
  isFirstStep() {
    if (this.steps().length === 0)
      return true;
    return this.currentStep() === Math.min(...this.steps().map((s) => s.value));
  }
  // Methods for footer buttons
  async goNext() {
    const currentStepData = this.steps().find((s) => s.value === this.currentStep());
    if (currentStepData?.validate) {
      this.isValidating.set(true);
      try {
        const validationResult = currentStepData.validate();
        const isValid = validationResult instanceof Promise ? await validationResult : validationResult;
        if (isValid) {
          this.stepper?.goNext();
        }
      } finally {
        this.isValidating.set(false);
      }
    } else {
      this.stepper?.goNext();
    }
  }
  canGoNext() {
    const currentStepData = this.steps().find((s) => s.value === this.currentStep());
    return !this.isLastStep() && !(currentStepData?.disableNext ?? false);
  }
  goBack() {
    this.stepper?.goBack();
  }
  canFinish() {
    return this.isLastStep() && (this.stepper?.canFinish() ?? false);
  }
  getCurrentStep() {
    return this.steps().find((s) => s.value === this.currentStep());
  }
  static \u0275fac = function WizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WizardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardComponent, selectors: [["app-wizard"]], viewQuery: function WizardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(StepperComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
    }
  }, inputs: { steps: [1, "steps"], visible: [1, "visible"], header: [1, "header"], linearProgression: [1, "linearProgression"], showFooterButtons: [1, "showFooterButtons"], closeOnEscape: [1, "closeOnEscape"], useWizardButtonsOnly: [1, "useWizardButtonsOnly"], showSteps: [1, "showSteps"], contentOnly: [1, "contentOnly"], loading: [1, "loading"], currentStep: [1, "currentStep"] }, outputs: { visible: "visibleChange", loading: "loadingChange", onCancel: "onCancel", complete: "complete", stepChange: "stepChange", currentStep: "currentStepChange" }, decls: 2, vars: 1, consts: [["styleClass", "wizard-dialog", 3, "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], [1, "wizard-content"], [3, "stepChange", "complete", "steps", "currentStepValue", "linearProgression", "showNavButtons", "showSteps", "loading"], [1, "flex", "justify-end", "gap-2", "w-full", "mt-3"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "label"], ["icon", "pi pi-arrow-left", "severity", "secondary", 3, "label"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "label", "disabled", "loading"], ["icon", "pi pi-check", "severity", "primary", 3, "label", "disabled", "loading"], ["icon", "pi pi-arrow-left", "severity", "secondary", 3, "onClick", "label"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "label", "disabled", "loading"], ["icon", "pi pi-check", "severity", "primary", 3, "onClick", "label", "disabled", "loading"], ["styleClass", "wizard-dialog", 3, "onHide", "visibleChange", "visible", "header", "modal", "draggable", "resizable", "closeOnEscape"], ["pTemplate", "footer"], [1, "flex", "justify-end", "gap-2", "w-full"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "label", "disabled"], ["icon", "pi pi-arrow-right", "iconPos", "right", 3, "onClick", "label", "disabled"]], template: function WizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, WizardComponent_Conditional_0_Template, 3, 7)(1, WizardComponent_Conditional_1_Template, 4, 12, "p-dialog", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.contentOnly() ? 0 : 1);
    }
  }, dependencies: [
    CommonModule,
    DialogModule,
    Dialog,
    PrimeTemplate,
    ButtonModule,
    Button,
    StepperComponent,
    TranslatePipe
  ], styles: ["\n[_nghost-%COMP%]     .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 70vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]     .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 70vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=wizard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardComponent, [{
    type: Component,
    args: [{ selector: "app-wizard", imports: [
      CommonModule,
      DialogModule,
      ButtonModule,
      StepperComponent,
      TranslatePipe
    ], template: `<!-- If contentOnly is true, don't use p-dialog -->
@if (contentOnly()) {
  <div class="wizard-content">
    <app-stepper
      [steps]="steps()"
      [currentStepValue]="currentStep()"
      [linearProgression]="linearProgression()"
      [showNavButtons]="!useWizardButtonsOnly()"
      [showSteps]="showSteps()"
      [loading]="loading()"
      (stepChange)="onStepChange($event)"
      (complete)="onStepComplete()"
    >
    </app-stepper>
  </div>
  <!-- Footer buttons without dialog -->
  @if (showFooterButtons() && !getCurrentStep()?.hideDefaultFooter) {
    <div class="flex justify-end gap-2 w-full mt-3">
      <p-button
        [label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
        icon="pi pi-times"
        severity="secondary"
        (onClick)="cancelWizard()"
      ></p-button>
      @if (!isFirstStep()) {
        <p-button
          [label]="'SHARED.COMMON.BUTTONS.BACK' | translate"
          icon="pi pi-arrow-left"
          severity="secondary"
          (onClick)="goBack()"
        ></p-button>
      }
      @if (!isLastStep()) {
        <p-button
          [label]="'SHARED.COMMON.BUTTONS.NEXT' | translate"
          icon="pi pi-arrow-right"
          iconPos="right"
          [disabled]="!canGoNext()"
          [loading]="isValidating()"
          (onClick)="goNext()"
        ></p-button>
      }
      @if (isLastStep()) {
        <p-button
          [label]="'SHARED.COMMON.BUTTONS.FINISH' | translate"
          icon="pi pi-check"
          severity="primary"
          [disabled]="!canFinish()"
          [loading]="loading()"
          (onClick)="onComplete()"
        ></p-button>
      }
    </div>
  }
} @else {
  <p-dialog
    [visible]="visible()"
    [header]="header()"
    [modal]="true"
    [draggable]="false"
    [resizable]="false"
    [closeOnEscape]="closeOnEscape()"
    (onHide)="hideDialog()"
    (visibleChange)="hideDialog()"
    styleClass="wizard-dialog"
  >
    <!-- Existing dialog content -->
    <div class="wizard-content">
      <app-stepper
        [steps]="steps()"
        [currentStepValue]="currentStep()"
        [linearProgression]="linearProgression()"
        [showNavButtons]="!useWizardButtonsOnly()"
        [showSteps]="showSteps()"
        [loading]="loading()"
        (stepChange)="onStepChange($event)"
        (complete)="onStepComplete()"
      >
      </app-stepper>
    </div>
    <ng-template pTemplate="footer">
      <!-- Existing footer buttons -->
      @if (showFooterButtons() && !getCurrentStep()?.hideDefaultFooter) {
        <div class="flex justify-end gap-2 w-full">
          <p-button
            [label]="'SHARED.COMMON.BUTTONS.CANCEL' | translate"
            icon="pi pi-times"
            severity="secondary"
            (onClick)="cancelWizard()"
          ></p-button>
          @if (!isFirstStep()) {
            <p-button
              [label]="'SHARED.COMMON.BUTTONS.BACK' | translate"
              icon="pi pi-arrow-left"
              severity="secondary"
              (onClick)="goBack()"
            ></p-button>
          }
          @if (!isLastStep()) {
            <p-button
              [label]="'SHARED.COMMON.BUTTONS.NEXT' | translate"
              icon="pi pi-arrow-right"
              iconPos="right"
              [disabled]="!canGoNext()"
              (onClick)="goNext()"
            ></p-button>
          }
          @if (isLastStep()) {
            <p-button
              [label]="'SHARED.COMMON.BUTTONS.FINISH' | translate"
              icon="pi pi-check"
              severity="primary"
              [disabled]="!canFinish()"
              [loading]="loading()"
              (onClick)="onComplete()"
            ></p-button>
          }
        </div>
      }
    </ng-template>
  </p-dialog>
}
`, styles: ["/* src/app/shared/components/wizard/wizard.component.scss */\n:host ::ng-deep .wizard-dialog .wizard-content {\n  height: auto;\n  max-height: 70vh;\n  width: 70vw;\n  min-width: 400px;\n  max-width: 800px;\n  overflow-y: auto;\n}\n:host ::ng-deep .p-dialog-header {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n:host ::ng-deep .p-dialog-footer {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.wizard-content {\n  height: auto;\n  max-height: 70vh;\n  min-width: 400px;\n  max-width: 800px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=wizard.component.css.map */\n"] }]
  }], null, { stepper: [{
    type: ViewChild,
    args: [StepperComponent]
  }], steps: [{ type: Input, args: [{ isSignal: true, alias: "steps", required: false }] }], visible: [{ type: Input, args: [{ isSignal: true, alias: "visible", required: false }] }, { type: Output, args: ["visibleChange"] }], header: [{ type: Input, args: [{ isSignal: true, alias: "header", required: false }] }], linearProgression: [{ type: Input, args: [{ isSignal: true, alias: "linearProgression", required: false }] }], showFooterButtons: [{ type: Input, args: [{ isSignal: true, alias: "showFooterButtons", required: false }] }], closeOnEscape: [{ type: Input, args: [{ isSignal: true, alias: "closeOnEscape", required: false }] }], useWizardButtonsOnly: [{ type: Input, args: [{ isSignal: true, alias: "useWizardButtonsOnly", required: false }] }], showSteps: [{ type: Input, args: [{ isSignal: true, alias: "showSteps", required: false }] }], contentOnly: [{ type: Input, args: [{ isSignal: true, alias: "contentOnly", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }, { type: Output, args: ["loadingChange"] }], onCancel: [{ type: Output, args: ["onCancel"] }], complete: [{ type: Output, args: ["complete"] }], stepChange: [{ type: Output, args: ["stepChange"] }], currentStep: [{ type: Input, args: [{ isSignal: true, alias: "currentStep", required: false }] }, { type: Output, args: ["currentStepChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardComponent, { className: "WizardComponent", filePath: "src/app/shared/components/wizard/wizard.component.ts", lineNumber: 28 });
})();

export {
  WizardComponent
};
//# sourceMappingURL=chunk-NOYOHX5Z.js.map
