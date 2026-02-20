import {
  DynamicDialogConfig,
  DynamicDialogRef,
  DynamicFormComponent
} from "./chunk-JHNPE5AD.js";
import {
  Button,
  ButtonModule
} from "./chunk-PBS4GE25.js";
import {
  CommonModule,
  isDefined,
  isNullOrUndefined
} from "./chunk-UNWLID6Q.js";
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4KHPVNTA.js";

// src/app/shared/components/forms/modal-list-form/modal-list-form.component.ts
function ModalListFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._subHeader, " ");
  }
}
function ModalListFormComponent_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 5);
    \u0275\u0275listener("onClick", function ModalListFormComponent_For_5_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const action_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleAction(action_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", action_r3.label)("icon", action_r3.icon)("styleClass", action_r3.styleClass)("severity", action_r3.severity)("disabled", ctx_r0.isDisabled(action_r3));
  }
}
function ModalListFormComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ModalListFormComponent_For_5_Conditional_0_Template, 1, 5, "p-button", 4);
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isVisible(action_r3) ? 0 : -1);
  }
}
var ModalListFormComponent = class _ModalListFormComponent {
  _fields = [];
  _fieldsFn;
  _initialData = {};
  _actions = [];
  _subHeader = "";
  form;
  dialogRef = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  constructor() {
    if (isDefined(this.dialogConfig?.data)) {
      const maybeFn = this.dialogConfig.data.fieldsFn;
      if (typeof maybeFn === "function") {
        this._fieldsFn = maybeFn;
        this._fields = this._fieldsFn() ?? [];
        effect(() => {
          if (this._fieldsFn) {
            const newFields = this._fieldsFn();
            if (Array.isArray(newFields) && newFields !== this._fields) {
              this._fields = [...newFields];
            }
          }
        });
      } else {
        this._fields = this.dialogConfig.data.fields ?? [];
      }
      this._initialData = this.dialogConfig.data.initialData ?? {};
      this._actions = this.dialogConfig.data.actions ?? [];
      this._subHeader = this.dialogConfig.data.subHeader ?? "";
    } else {
      this.dialogRef.close();
    }
  }
  /**
   * Handles the form ready event from the nested DynamicFormComponent.
   * Patches initial data.
   * @param form The form group instance.
   */
  handleFormReady(form) {
    this.form = form;
    if (isDefined(this._initialData) && isDefined(this.form)) {
      this.form.patchValue(this._initialData, { emitEvent: false });
    }
  }
  /**
   * Determines if an action button should be visible.
   * @param action The form action configuration.
   * @returns True if visible, false otherwise.
   */
  isVisible(action) {
    if (typeof action.visible === "function") {
      return action.visible(this.form);
    }
    return action.visible ?? true;
  }
  /**
   * Determines if an action button should be disabled.
   * @param action The form action configuration.
   * @returns True if disabled, false otherwise.
   */
  isDisabled(action) {
    if (typeof action.disabled === "function") {
      return action.disabled(this.form);
    }
    if (action.type === "submit" && this.form) {
      return (action.disabled ?? false) || this.form.invalid;
    }
    return action.disabled ?? false;
  }
  /**
   * Handles button clicks in the modal footer.
   * Executes the action's callback or handles default submit/cancel.
   * @param action The form action configuration.
   */
  handleAction(action) {
    if (action.action && this.form) {
      if (action.type === "submit" && this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      action.action(this.form);
      return;
    }
    if (this.form && action.type === "submit") {
      if (this.form.valid) {
        this.dialogRef.close(this.form.getRawValue());
      } else {
        this.form.markAllAsTouched();
      }
    } else if (action.type === "cancel" || isNullOrUndefined(this.form)) {
      this.dialogRef.close();
    }
  }
  /**
   * TrackBy function for rendering action buttons.
   * @param index The index of the action.
   * @param action The form action configuration.
   * @returns A unique key for the action.
   */
  trackByLabel(index, action) {
    return action.label ?? `action-${index}`;
  }
  static \u0275fac = function ModalListFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalListFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalListFormComponent, selectors: [["app-modal-list-form"]], decls: 6, vars: 3, consts: [[1, "modal-list-form-content", "p-fluid", "p-3"], [1, "mb-4"], [3, "formReady", "fields", "hideActions"], [1, "modal-list-form-footer", "flex", "justify-end", "gap-2", "p-3", "border-t", "border-surface-border"], [3, "label", "icon", "styleClass", "severity", "disabled"], [3, "onClick", "label", "icon", "styleClass", "severity", "disabled"]], template: function ModalListFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ModalListFormComponent_Conditional_1_Template, 2, 1, "p", 1);
      \u0275\u0275elementStart(2, "app-dynamic-form", 2);
      \u0275\u0275listener("formReady", function ModalListFormComponent_Template_app_dynamic_form_formReady_2_listener($event) {
        return ctx.handleFormReady($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275repeaterCreate(4, ModalListFormComponent_For_5_Template, 1, 1, null, null, ctx.trackByLabel, true);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx._subHeader ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("fields", ctx._fields)("hideActions", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx._actions);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, DynamicFormComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalListFormComponent, [{
    type: Component,
    args: [{ selector: "app-modal-list-form", imports: [CommonModule, ButtonModule, DynamicFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="modal-list-form-content p-fluid p-3">\n  @if (_subHeader) {\n    <p class="mb-4">\n      {{ _subHeader }}\n    </p>\n  }\n  <app-dynamic-form\n    [fields]="_fields"\n    [hideActions]="true"\n    (formReady)="handleFormReady($event)"\n  >\n  </app-dynamic-form>\n</div>\n\n<!-- Footer with Action Buttons -->\n<div\n  class="modal-list-form-footer flex justify-end gap-2 p-3 border-t border-surface-border"\n>\n  @for (action of _actions; track trackByLabel($index, action)) {\n    @if (isVisible(action)) {\n      <p-button\n        [label]="action.label"\n        [icon]="action.icon"\n        [styleClass]="action.styleClass"\n        [severity]="action.severity"\n        [disabled]="isDisabled(action)"\n        (onClick)="handleAction(action)"\n      ></p-button>\n    }\n  }\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalListFormComponent, { className: "ModalListFormComponent", filePath: "src/app/shared/components/forms/modal-list-form/modal-list-form.component.ts", lineNumber: 21 });
})();

export {
  ModalListFormComponent
};
//# sourceMappingURL=chunk-EY6ER4MP.js.map
