import {
  ConnectedOverlayScrollHandler,
  Fluid
} from "./chunk-DPU26QQS.js";
import {
  $,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  C,
  Gt,
  P,
  PARENT_INSTANCE,
  Qt,
  R,
  U,
  W,
  h,
  ht,
  k,
  oe,
  qt,
  s,
  s2,
  te,
  ut,
  v,
  w,
  z
} from "./chunk-B3O4OKMN.js";
import {
  CommonModule,
  getDOM,
  isPlatformBrowser
} from "./chunk-TG6TG2JG.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  ViewContainerRef,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  effect,
  forkJoin,
  forwardRef,
  from,
  inject,
  input,
  isPromise,
  isSubscribable,
  map,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-J5TUQDPD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  onChange = (_) => {
  };
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  _compositionStart() {
    this._composing = true;
  }
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      host: {
        "(input)": "_handleInput($any($event.target).value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "_compositionStart()",
        "(compositionend)": "_compositionEnd($any($event.target).value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  static min(min) {
    return minValidator(min);
  }
  static max(max) {
    return maxValidator(max);
  }
  static required(control) {
    return requiredValidator(control);
  }
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  static email(control) {
    return emailValidator(control);
  }
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v3) => {
    if (!hasValidator(current, v3)) {
      current.push(v3);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v3) => !hasValidator(validators, v3));
}
var AbstractControlDirective = class {
  get value() {
    return this.control ? this.control.value : null;
  }
  get valid() {
    return this.control ? this.control.valid : null;
  }
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  get pending() {
    return this.control ? this.control.pending : null;
  }
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  get errors() {
    return this.control ? this.control.errors : null;
  }
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  get touched() {
    return this.control ? this.control.touched : null;
  }
  get status() {
    return this.control ? this.control.status : null;
  }
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  get path() {
    return null;
  }
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators = [];
  _rawAsyncValidators = [];
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  get validator() {
    return this._composedValidatorFn || null;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  _onDestroyCallbacks = [];
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  name;
  get formDirective() {
    return null;
  }
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  _parent = null;
  name = null;
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["", "formArray", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
      host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
        "[class.ng-submitted]": "isSubmitted"
      }),
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  _pendingDirty = false;
  _hasOwnPendingAsyncValidator = null;
  _pendingTouched = false;
  _onCollectionChange = () => {
  };
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  _composedValidatorFn;
  _composedAsyncValidatorFn;
  _rawValidators;
  _rawAsyncValidators;
  value;
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v3) {
    untracked(() => this.statusReactive.set(v3));
  }
  _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
    debugName: "_status"
  }] : []);
  statusReactive = signal(void 0, ...ngDevMode ? [{
    debugName: "statusReactive"
  }] : []);
  get valid() {
    return this.status === VALID;
  }
  get invalid() {
    return this.status === INVALID;
  }
  get pending() {
    return this.status == PENDING;
  }
  get disabled() {
    return this.status === DISABLED;
  }
  get enabled() {
    return this.status !== DISABLED;
  }
  errors;
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v3) {
    untracked(() => this.pristineReactive.set(v3));
  }
  _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
    debugName: "_pristine"
  }] : []);
  pristineReactive = signal(true, ...ngDevMode ? [{
    debugName: "pristineReactive"
  }] : []);
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v3) {
    untracked(() => this.touchedReactive.set(v3));
  }
  _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
    debugName: "_touched"
  }] : []);
  touchedReactive = signal(false, ...ngDevMode ? [{
    debugName: "touchedReactive"
  }] : []);
  get untouched() {
    return !this.touched;
  }
  _events = new Subject();
  events = this._events.asObservable();
  valueChanges;
  statusChanges;
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  setValidators(validators) {
    this._assignValidators(validators);
  }
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  markAllAsDirty(opts = {}) {
    this.markAsDirty({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsDirty(opts));
  }
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  setParent(parent) {
    this._parent = parent;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false,
        shouldHaveEmitted: shouldHaveEmitted !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  _onDisabledChange = [];
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  _find(name) {
    return null;
  }
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(value[name], {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  _updateValue() {
    this.value = this._reduceValue();
  }
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v3) => {
    if (v3.constructor === DefaultValueAccessor) {
      defaultAccessor = v3;
    } else if (isBuiltInAccessor(v3)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v3;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v3;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$2 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this.submittedReactive);
  }
  _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "submittedReactive"
  }] : []);
  _directives = /* @__PURE__ */ new Set();
  form;
  ngSubmit = new EventEmitter();
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  get formDirective() {
    return this;
  }
  get control() {
    return this.form;
  }
  get path() {
    return [];
  }
  get controls() {
    return this.form.controls;
  }
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  setValue(value) {
    this.control.setValue(value);
  }
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", "", 3, "formArray", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$2]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$2],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    if (options.overwriteDefaultValue) {
      this.defaultValue = this.value;
    }
    this._pendingChange = false;
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  _updateValue() {
  }
  _anyControls(condition) {
    return false;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  _forEachChild(cb) {
  }
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  _parent;
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  static ngAcceptInputType_isDisabled;
  _registered = false;
  viewModel;
  name = "";
  isDisabled;
  model;
  options;
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  get path() {
    return this._getPath(this.name);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  _state;
  _control;
  _fn;
  setDisabledStateFired = false;
  onChange = () => {
  };
  name;
  formControlName;
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  ngOnDestroy() {
    this._registry.remove(this);
  }
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(input)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  push(control, options = {}) {
    if (Array.isArray(control)) {
      control.forEach((ctrl) => {
        this.controls.push(ctrl);
        this._registerControl(ctrl);
      });
    } else {
      this.controls.push(control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  get length() {
    return this.controls.length;
  }
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], __spreadProps(__spreadValues({}, options), {
        onlySelf: true
      }));
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
    if (options?.emitEvent !== false) {
      this._events.next(new FormResetEvent(this));
    }
  }
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  _find(name) {
    return this.at(name) ?? null;
  }
};
var AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
  callSetDisabledState;
  get submitted() {
    return untracked(this._submittedReactive);
  }
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
    debugName: "_submitted"
  }] : []);
  _submittedReactive = signal(false, ...ngDevMode ? [{
    debugName: "_submittedReactive"
  }] : []);
  _oldForm;
  _onCollectionChange = () => this._updateDomValue();
  directives = [];
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
  }
  ngOnDestroy() {
    this.onDestroy();
  }
  onChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  onDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  get formDirective() {
    return this;
  }
  get path() {
    return [];
  }
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  getControl(dir) {
    return this.form.get(dir.path);
  }
  removeControl(dir) {
    cleanUpControl(dir.control || null, dir, false);
    removeListItem$1(this.directives, dir);
  }
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  onReset() {
    this.resetForm();
  }
  resetForm(value = void 0, options = {}) {
    this.form.reset(value, options);
    this._submittedReactive.set(false);
  }
  onSubmit($event) {
    this.submitted = true;
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static \u0275fac = function AbstractFormDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractFormDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormDirective,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormDirective, [{
    type: Directive
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], null);
})();
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayDirective)
};
var FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormArrayDirective_BaseFactory;
    return function FormArrayDirective_Factory(__ngFactoryType__) {
      return (\u0275FormArrayDirective_BaseFactory || (\u0275FormArrayDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormArrayDirective)))(__ngFactoryType__ || _FormArrayDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayDirective,
    selectors: [["", "formArray", ""]],
    hostBindings: function FormArrayDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormArrayDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormArrayDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formArray", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayDirective, [{
    type: Directive,
    args: [{
      selector: "[formArray]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formArray"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  viewModel;
  form;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(previousForm, this, false);
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(this.form, this, false);
    }
  }
  get path() {
    return [];
  }
  get control() {
    return this.form;
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  _parent;
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  get control() {
    return this.formDirective.getFormArray(this);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  viewModel;
  control;
  name = null;
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  model;
  update = new EventEmitter();
  static _ngModelWarningSentOnce = false;
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
  form = null;
  ngSubmit = new EventEmitter();
  get control() {
    return this.form;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FormGroupDirective_BaseFactory;
    return function FormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275FormGroupDirective_BaseFactory || (\u0275FormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_FormGroupDirective)))(__ngFactoryType__ || _FormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], null, {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  appRefInjector = inject(ApplicationRef).injector;
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  _queuedWrite = false;
  _writeValueAfterRender() {
    if (this._queuedWrite || this.appRefInjector.destroyed) {
      return;
    }
    this._queuedWrite = true;
    afterNextRender({
      write: () => {
        if (this.destroyRef.destroyed) {
          return;
        }
        this._queuedWrite = false;
        this.writeValue(this.value);
      }
    }, {
      injector: this.appRefInjector
    });
  }
  writeValue(value) {
    this.cdr.markForCheck();
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  _registerOption() {
    return (this._idCounter++).toString();
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($any($event.target).value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select._writeValueAfterRender();
  }
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select._writeValueAfterRender();
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select._writeValueAfterRender();
    }
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  value;
  _optionMap = /* @__PURE__ */ new Map();
  _idCounter = 0;
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v3) => this._getOptionId(v3));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  _enabled;
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  validate(control) {
    return this._validator(control);
  }
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  max;
  inputName = "max";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  min;
  inputName = "min";
  normalizeInput = (input2) => toFloat(input2);
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  required;
  inputName = "required";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => requiredValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  email;
  inputName = "email";
  normalizeInput = booleanAttribute;
  createValidator = (input2) => emailValidator;
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  minlength;
  inputName = "minlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  maxlength;
  inputName = "maxlength";
  normalizeInput = (input2) => toInteger(input2);
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  pattern;
  inputName = "pattern";
  normalizeInput = (input2) => input2;
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule,
    declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
    exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormsModule = class _FormsModule {
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule,
    declarations: [NgModel, NgModelGroup, NgForm],
    exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule,
    declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
    exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-inputtext p-component", {
    "p-filled": instance.$filled(),
    "p-inputtext-sm": instance.pSize === "small",
    "p-inputtext-lg": instance.pSize === "large",
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputtext-fluid": instance.hasFluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var INPUTTEXT_INSTANCE = new InjectionToken("INPUTTEXT_INSTANCE");
var InputText = class _InputText extends BaseModelHolder {
  hostName = "";
  /**
   * Used to pass attributes to DOM elements inside the InputText component.
   * @defaultValue undefined
   * @deprecated use pInputTextPT instead.
   * @group Props
   */
  ptInputText = input(...ngDevMode ? [void 0, {
    debugName: "ptInputText"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the InputText component.
   * @defaultValue undefined
   * @group Props
   */
  pInputTextPT = input(...ngDevMode ? [void 0, {
    debugName: "pInputTextPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pInputTextUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pInputTextUnstyled"
  }] : []);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcInputText = inject(INPUTTEXT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : {}), {
    transform: booleanAttribute
  }));
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  _componentStyle = inject(InputTextStyle);
  constructor() {
    super();
    effect(() => {
      const pt = this.ptInputText() || this.pInputTextPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pInputTextUnstyled() && this.directiveUnstyled.set(this.pInputTextUnstyled());
    });
  }
  onAfterViewInit() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  onDoCheck() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid(),
      fluid: this.hasFluid,
      filled: this.$variant() === "filled",
      [this.pSize]: this.pSize
    });
  }
  static \u0275fac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostVars: 3,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputText_input_HostBindingHandler() {
          return ctx.onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      hostName: "hostName",
      ptInputText: [1, "ptInputText"],
      pInputTextPT: [1, "pInputTextPT"],
      pInputTextUnstyled: [1, "pInputTextUnstyled"],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    features: [\u0275\u0275ProvidersFeature([InputTextStyle, {
      provide: INPUTTEXT_INSTANCE,
      useExisting: _InputText
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputText
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP"
      },
      providers: [InputTextStyle, {
        provide: INPUTTEXT_INSTANCE,
        useExisting: InputText
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputText
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    hostName: [{
      type: Input
    }],
    ptInputText: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptInputText",
        required: false
      }]
    }],
    pInputTextPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pInputTextPT",
        required: false
      }]
    }],
    pInputTextUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pInputTextUnstyled",
        required: false
      }]
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    onInput: [{
      type: HostListener,
      args: ["input"]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2)
      return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.equalsByValue(obj1[i], obj2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key]))
          return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from2, to) {
    let target;
    if (value && from2 !== to) {
      if (to >= value.length) {
        to %= value.length;
        from2 %= value.length;
      }
      value.splice(to, 0, value.splice(from2, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input2) {
    return Object.prototype.toString.call(input2) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = value1.localeCompare(value2, locale, { numeric: true });
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
  static minifyCSS(css) {
    return css ? css.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css;
  }
  static toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  }
  static isString(value, empty = true) {
    return typeof value === "string" && (empty || value !== "");
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();
var transformToBoolean = (value) => {
  return !!value;
};

// node_modules/@primeuix/styles/dist/tooltip/index.mjs
var style3 = "\n    .p-tooltip {\n        position: absolute;\n        display: none;\n        max-width: dt('tooltip.max.width');\n    }\n\n    .p-tooltip-right,\n    .p-tooltip-left {\n        padding: 0 dt('tooltip.gutter');\n    }\n\n    .p-tooltip-top,\n    .p-tooltip-bottom {\n        padding: dt('tooltip.gutter') 0;\n    }\n\n    .p-tooltip-text {\n        white-space: pre-line;\n        word-break: break-word;\n        background: dt('tooltip.background');\n        color: dt('tooltip.color');\n        padding: dt('tooltip.padding');\n        box-shadow: dt('tooltip.shadow');\n        border-radius: dt('tooltip.border.radius');\n    }\n\n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n\n    .p-tooltip-right .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;\n        border-right-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-left .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');\n        border-left-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-top .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-bottom .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var classes2 = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = class _TooltipStyle extends BaseStyle {
  name = "tooltip";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TooltipStyle_BaseFactory;
    return function TooltipStyle_Factory(__ngFactoryType__) {
      return (\u0275TooltipStyle_BaseFactory || (\u0275TooltipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TooltipStyle)))(__ngFactoryType__ || _TooltipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TooltipStyle,
    factory: _TooltipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipStyle, [{
    type: Injectable
  }], null, null);
})();
var TooltipClasses;
(function(TooltipClasses2) {
  TooltipClasses2["root"] = "p-tooltip";
  TooltipClasses2["arrow"] = "p-tooltip-arrow";
  TooltipClasses2["text"] = "p-tooltip-text";
})(TooltipClasses || (TooltipClasses = {}));
var TOOLTIP_INSTANCE = new InjectionToken("TOOLTIP_INSTANCE");
var Tooltip = class _Tooltip extends BaseComponent {
  zone;
  viewContainer;
  $pcTooltip = inject(TOOLTIP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: s2("pn_id_") + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  rootPTClasses = "";
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  documentEscapeListener;
  scrollHandler;
  resizeListener;
  _componentStyle = inject(TooltipStyle);
  interactionInProgress = false;
  /**
   * Used to pass attributes to DOM elements inside the Tooltip component.
   * @defaultValue undefined
   * @deprecated use pTooltipPT instead.
   * @group Props
   */
  ptTooltip = input(...ngDevMode ? [void 0, {
    debugName: "ptTooltip"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the Tooltip component.
   * @defaultValue undefined
   * @group Props
   */
  pTooltipPT = input(...ngDevMode ? [void 0, {
    debugName: "pTooltipPT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pTooltipUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pTooltipUnstyled"
  }] : []);
  constructor(zone, viewContainer) {
    super();
    this.zone = zone;
    this.viewContainer = viewContainer;
    effect(() => {
      const pt = this.ptTooltip() || this.pTooltipPT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pTooltipUnstyled() && this.directiveUnstyled.set(this.pTooltipUnstyled());
    });
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const tooltipEvent = this.getOption("tooltipEvent");
        if (tooltipEvent === "hover" || tooltipEvent === "both") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        }
        if (tooltipEvent === "focus" || tooltipEvent === "both") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.el.nativeElement.querySelector(".p-component");
          if (!target) {
            target = this.getTarget(this.el.nativeElement);
          }
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = R(e.relatedTarget, "p-tooltip") || R(e.relatedTarget, "p-tooltip-text") || R(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  activate() {
    if (!this.interactionInProgress) {
      this.active = true;
      this.clearHideTimeout();
      if (this.getOption("showDelay")) this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
      else this.show();
      if (this.getOption("life")) {
        let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, duration);
      }
      if (this.getOption("hideOnEscape")) {
        this.documentEscapeListener = this.renderer.listen("document", "keydown.escape", () => {
          this.deactivate();
          this.documentEscapeListener?.();
        });
      }
      this.interactionInProgress = true;
    }
  }
  deactivate() {
    this.interactionInProgress = false;
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = U("div", {
      class: this.cx("root"),
      "p-bind": this.ptm("root"),
      "data-pc-section": "root"
    });
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = U("div", {
      class: this.cx("arrow"),
      "p-bind": this.ptm("arrow"),
      "data-pc-section": "arrow"
    });
    this.container.appendChild(tooltipArrow);
    this.tooltipText = U("div", {
      class: this.cx("text"),
      "p-bind": this.ptm("text"),
      "data-pc-section": "text"
    });
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target") ut(this.container, this.el.nativeElement);
    else ut(this.getOption("appendTo"), this.container);
    this.container.style.display = "none";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    const nativeElement = this.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (pDialogWrapper) {
      setTimeout(() => {
        this.container && (this.container.style.display = "inline-block");
        this.container && this.align();
      }, 100);
    } else {
      this.container.style.display = "inline-block";
      this.align();
    }
    ht(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto") zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content && typeof content.createEmbeddedView === "function") {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    const position = this.getOption("tooltipPosition");
    const positionPriority = {
      top: [this.alignTop, this.alignBottom, this.alignRight, this.alignLeft],
      bottom: [this.alignBottom, this.alignTop, this.alignRight, this.alignLeft],
      left: [this.alignLeft, this.alignRight, this.alignTop, this.alignBottom],
      right: [this.alignRight, this.alignLeft, this.alignTop, this.alignBottom]
    };
    const alignFns = positionPriority[position] || [];
    for (let [index, alignmentFn] of alignFns.entries()) {
      if (index === 0) alignmentFn.call(this);
      else if (this.isOutOfBounds()) alignmentFn.call(this);
      else break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + k();
      let targetTop = offset.top + $();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.startsWith("P-") ? z(this.el.nativeElement, ".p-component") : this.el.nativeElement;
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const offsetLeft = v(el);
    const offsetTop = (C(el) - C(this.container)) / 2;
    this.alignTooltip(offsetLeft, offsetTop);
    let arrowElement = this.getArrowElement();
    arrowElement.style.top = "50%";
    arrowElement.style.right = null;
    arrowElement.style.bottom = null;
    arrowElement.style.left = "0";
  }
  alignLeft() {
    this.preAlign("left");
    let arrowElement = this.getArrowElement();
    let offsetLeft = v(this.container);
    let offsetTop = (C(this.el.nativeElement) - C(this.container)) / 2;
    this.alignTooltip(-offsetLeft, offsetTop);
    arrowElement.style.top = "50%";
    arrowElement.style.right = "0";
    arrowElement.style.bottom = null;
    arrowElement.style.left = null;
  }
  alignTop() {
    this.preAlign("top");
    let arrowElement = this.getArrowElement();
    let hostOffset = this.getHostOffset();
    let elementWidth = v(this.container);
    let offsetLeft = (v(this.el.nativeElement) - v(this.container)) / 2;
    let offsetTop = C(this.container);
    this.alignTooltip(offsetLeft, -offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    arrowElement.style.top = null;
    arrowElement.style.right = null;
    arrowElement.style.bottom = "0";
    arrowElement.style.left = elementRelativeCenter + "px";
  }
  getArrowElement() {
    return z(this.container, '[data-pc-section="arrow"]');
  }
  alignBottom() {
    this.preAlign("bottom");
    let arrowElement = this.getArrowElement();
    let elementWidth = v(this.container);
    let hostOffset = this.getHostOffset();
    let offsetLeft = (v(this.el.nativeElement) - v(this.container)) / 2;
    let offsetTop = C(this.el.nativeElement);
    this.alignTooltip(offsetLeft, offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    arrowElement.style.top = "0";
    arrowElement.style.right = null;
    arrowElement.style.bottom = null;
    arrowElement.style.left = elementRelativeCenter + "px";
  }
  alignTooltip(offsetLeft, offsetTop) {
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + offsetLeft;
    let top = hostOffset.top + offsetTop;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return R(el, "p-inputwrapper") ? z(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    this.container.className = this.cn(this.cx("root"), this.ptm("root")?.class, "p-tooltip-" + position, this.getOption("tooltipStyleClass"));
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = v(this.container);
    let height = C(this.container);
    let viewport = h();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
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
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) {
        target = this.getTarget(this.el.nativeElement);
      }
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else Gt(this.getOption("appendTo"), this.container);
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  onDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  static \u0275fac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tooltip)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ViewContainerRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [2, "escape", "escape", booleanAttribute],
      showDelay: [2, "showDelay", "showDelay", numberAttribute],
      hideDelay: [2, "hideDelay", "hideDelay", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      positionTop: [2, "positionTop", "positionTop", numberAttribute],
      positionLeft: [2, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      fitContent: [2, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions",
      appendTo: [1, "appendTo"],
      ptTooltip: [1, "ptTooltip"],
      pTooltipPT: [1, "pTooltipPT"],
      pTooltipUnstyled: [1, "pTooltipUnstyled"]
    },
    features: [\u0275\u0275ProvidersFeature([TooltipStyle, {
      provide: TOOLTIP_INSTANCE,
      useExisting: _Tooltip
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tooltip
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      standalone: true,
      providers: [TooltipStyle, {
        provide: TOOLTIP_INSTANCE,
        useExisting: Tooltip
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tooltip
      }]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    ptTooltip: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptTooltip",
        required: false
      }]
    }],
    pTooltipPT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pTooltipPT",
        required: false
      }]
    }],
    pTooltipUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pTooltipUnstyled",
        required: false
      }]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static \u0275fac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TooltipModule,
    imports: [Tooltip, BindModule],
    exports: [Tooltip, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BindModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [Tooltip, BindModule],
      exports: [Tooltip, BindModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var _c0 = ["data-p-icon", "chevron-down"];
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronDownIcon_BaseFactory || (\u0275ChevronDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronDownIcon)))(__ngFactoryType__ || _ChevronDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronDownIcon,
    selectors: [["", "data-p-icon", "chevron-down"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-down"]',
      standalone: true,
      template: `
        <svg:path
            d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var _c02 = ["data-p-icon", "times"];
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["", "data-p-icon", "times"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times"]',
      standalone: true,
      template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/motion/dist/index.mjs
var j = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty;
var V = Object.prototype.propertyIsEnumerable;
var D = (t, n, e) => n in t ? j(t, n, { enumerable: true, configurable: true, writable: true, value: e }) : t[n] = e;
var p = (t, n) => {
  for (var e in n || (n = {})) q.call(n, e) && D(t, e, n[e]);
  if (T) for (var e of T(n)) V.call(n, e) && D(t, e, n[e]);
  return t;
};
var N = (t, n, e) => new Promise((o, m) => {
  var i = (r) => {
    try {
      f(e.next(r));
    } catch (u) {
      m(u);
    }
  }, M = (r) => {
    try {
      f(e.throw(r));
    } catch (u) {
      m(u);
    }
  }, f = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(i, M);
  f((e = e.apply(t, n)).next());
});
var E = "animation";
var v2 = "transition";
function H(t) {
  return t ? t.disabled || !!(t.safe && qt()) : false;
}
function k2(t, n) {
  return t ? p(p({}, t), Object.entries(n).reduce((e, [o, m]) => {
    var i;
    return e[o] = (i = t[o]) != null ? i : m, e;
  }, {})) : n;
}
function L(t) {
  let { name: n, enterClass: e, leaveClass: o } = t || {};
  return { enter: { from: (e == null ? void 0 : e.from) || `${n}-enter-from`, to: (e == null ? void 0 : e.to) || `${n}-enter-to`, active: (e == null ? void 0 : e.active) || `${n}-enter-active` }, leave: { from: (o == null ? void 0 : o.from) || `${n}-leave-from`, to: (o == null ? void 0 : o.to) || `${n}-leave-to`, active: (o == null ? void 0 : o.active) || `${n}-leave-active` } };
}
function W2(t) {
  return { enter: { onBefore: t == null ? void 0 : t.onBeforeEnter, onStart: t == null ? void 0 : t.onEnter, onAfter: t == null ? void 0 : t.onAfterEnter, onCancelled: t == null ? void 0 : t.onEnterCancelled }, leave: { onBefore: t == null ? void 0 : t.onBeforeLeave, onStart: t == null ? void 0 : t.onLeave, onAfter: t == null ? void 0 : t.onAfterLeave, onCancelled: t == null ? void 0 : t.onLeaveCancelled } };
}
function A(t, n) {
  let e = window.getComputedStyle(t), o = (l) => {
    let c = e[`${l}Delay`], h2 = e[`${l}Duration`];
    return [c.split(", ").map(oe), h2.split(", ").map(oe)];
  }, [m, i] = o(v2), [M, f] = o(E), r = Math.max(...i.map((l, c) => l + m[c])), u = Math.max(...f.map((l, c) => l + M[c])), a, s3 = 0, d = 0;
  return n === v2 ? r > 0 && (a = v2, s3 = r, d = i.length) : n === E ? u > 0 && (a = E, s3 = u, d = f.length) : (s3 = Math.max(r, u), a = s3 > 0 ? r > u ? v2 : E : void 0, d = a ? a === v2 ? i.length : f.length : 0), { type: a, timeout: s3, count: d };
}
function $2(t, n) {
  return typeof t == "number" ? t : typeof t == "object" && t[n] != null ? t[n] : null;
}
function S(t, n = true, e = false) {
  if (!n && !e) return;
  let o = w(t);
  n && te(t, "--pui-motion-height", o.height + "px"), e && te(t, "--pui-motion-width", o.width + "px");
}
var U2 = { name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: false };
function tt(t, n) {
  if (!t) throw new Error("Element is required.");
  let e = {}, o = false, m = {}, i = null, M = {}, f = (a) => {
    if (Object.assign(e, k2(a, U2)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
    M = W2(e), o = H(e), m = L(e), i = null;
  }, r = (a) => N(null, null, function* () {
    i == null || i();
    let { onBefore: s3, onStart: d, onAfter: l, onCancelled: c } = M[a] || {}, h2 = { element: t };
    if (o) {
      s3 == null || s3(h2), d == null || d(h2), l == null || l(h2);
      return;
    }
    let { from: g, active: y, to: P2 } = m[a] || {};
    return S(t, e.autoHeight, e.autoWidth), s3 == null || s3(h2), W(t, g), W(t, y), t.offsetHeight, P(t, g), W(t, P2), d == null || d(h2), new Promise((b) => {
      let C2 = $2(e.duration, a), x = () => {
        P(t, [P2, y]), i = null;
      }, R2 = () => {
        x(), l == null || l(h2), b();
      };
      i = () => {
        x(), c == null || c(h2), b();
      }, G(t, e.type, C2, R2);
    });
  });
  f(n);
  let u = { enter: () => e.enter ? r("enter") : Promise.resolve(), leave: () => e.leave ? r("leave") : Promise.resolve(), cancel: () => {
    i == null || i(), i = null;
  }, update: (a, s3) => {
    if (!a) throw new Error("Element is required.");
    t = a, u.cancel(), f(s3);
  } };
  return e.appear && u.enter(), u;
}
var z2 = 0;
function G(t, n, e, o) {
  let m = t._motionEndId = ++z2, i = () => {
    m === t._motionEndId && o();
  };
  if (e != null) return setTimeout(i, e);
  let { type: M, timeout: f, count: r } = A(t, n);
  if (!M) {
    o();
    return;
  }
  let u = M + "end", a = 0, s3 = () => {
    t.removeEventListener(u, d, true), i();
  }, d = (l) => {
    l.target === t && ++a >= r && s3();
  };
  t.addEventListener(u, d, { capture: true, once: true }), setTimeout(() => {
    a < r && s3();
  }, f + 1);
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
var _c03 = ["*"];
function Motion_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) {
    originalStyles.set(element, {
      display: element.style.display,
      visibility: element.style.visibility,
      maxHeight: element.style.maxHeight
    });
  }
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
      break;
  }
}
function resetStyles(element, strategy) {
  if (!element) return;
  const original = originalStyles.get(element) ?? element.style;
  switch (strategy) {
    case "display":
      element.style.display = original?.display || "";
      break;
    case "visibility":
      element.style.visibility = original?.visibility || "";
      element.style.maxHeight = original?.maxHeight || "";
      break;
  }
  originalStyles.delete(element);
}
var style4 = (
  /*css*/
  `
    .p-motion {
        display: block;
    }
`
);
var classes3 = {
  root: "p-motion"
};
var MotionStyle = class _MotionStyle extends BaseStyle {
  name = "motion";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MotionStyle_BaseFactory;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (\u0275MotionStyle_BaseFactory || (\u0275MotionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MotionStyle)))(__ngFactoryType__ || _MotionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MotionStyle,
    factory: _MotionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{
    type: Injectable
  }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class _Motion extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(MotionStyle);
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  /**
   * Whether to mount the element on enter.
   * @group Props
   */
  mountOnEnter = input(true, ...ngDevMode ? [{
    debugName: "mountOnEnter"
  }] : []);
  /**
   * Whether to unmount the element on leave.
   * @group Props
   */
  unmountOnLeave = input(true, ...ngDevMode ? [{
    debugName: "unmountOnLeave"
  }] : []);
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, ...ngDevMode ? [{
    debugName: "name"
  }] : []);
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, ...ngDevMode ? [{
    debugName: "type"
  }] : []);
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, ...ngDevMode ? [{
    debugName: "safe"
  }] : []);
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, ...ngDevMode ? [{
    debugName: "appear"
  }] : []);
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, ...ngDevMode ? [{
    debugName: "enter"
  }] : []);
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, ...ngDevMode ? [{
    debugName: "leave"
  }] : []);
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, ...ngDevMode ? [{
    debugName: "duration"
  }] : []);
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", ...ngDevMode ? [{
    debugName: "hideStrategy"
  }] : []);
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterFromClass"
  }] : []);
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterToClass"
  }] : []);
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "enterActiveClass"
  }] : []);
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveFromClass"
  }] : []);
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveToClass"
  }] : []);
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, ...ngDevMode ? [{
    debugName: "leaveActiveClass"
  }] : []);
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, ...ngDevMode ? [{
    debugName: "options"
  }] : []);
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output();
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output();
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output();
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output();
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output();
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output();
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output();
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output();
  /******************** Computed ********************/
  motionOptions = computed(() => {
    const options = this.options();
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(false, ...ngDevMode ? [{
    debugName: "rendered"
  }] : []);
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      const hideStrategy = this.hideStrategy();
      if (this.isInitialMount) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
      } else if (this.visible() && !this.rendered()) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(true);
      }
    });
    effect(() => {
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(async () => {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        await Qt();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        await Qt();
        this.motion?.leave()?.then(async () => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              await Qt();
              if (!this.cancelled) {
                this.rendered.set(false);
              }
            }
          }
        });
      }
      this.isInitialMount = false;
    });
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.isInitialMount = true;
  }
  static \u0275fac = function Motion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Motion)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Motion,
    selectors: [["p-motion"]],
    hostVars: 2,
    hostBindings: function Motion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      visible: [1, "visible"],
      mountOnEnter: [1, "mountOnEnter"],
      unmountOnLeave: [1, "unmountOnLeave"],
      name: [1, "name"],
      type: [1, "type"],
      safe: [1, "safe"],
      disabled: [1, "disabled"],
      appear: [1, "appear"],
      enter: [1, "enter"],
      leave: [1, "leave"],
      duration: [1, "duration"],
      hideStrategy: [1, "hideStrategy"],
      enterFromClass: [1, "enterFromClass"],
      enterToClass: [1, "enterToClass"],
      enterActiveClass: [1, "enterActiveClass"],
      leaveFromClass: [1, "leaveFromClass"],
      leaveToClass: [1, "leaveToClass"],
      leaveActiveClass: [1, "leaveActiveClass"],
      options: [1, "options"]
    },
    outputs: {
      onBeforeEnter: "onBeforeEnter",
      onEnter: "onEnter",
      onAfterEnter: "onAfterEnter",
      onEnterCancelled: "onEnterCancelled",
      onBeforeLeave: "onBeforeLeave",
      onLeave: "onLeave",
      onAfterLeave: "onAfterLeave",
      onLeaveCancelled: "onLeaveCancelled"
    },
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_INSTANCE,
      useExisting: _Motion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Motion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 1,
    template: function Motion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.rendered() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
    type: Component,
    args: [{
      selector: "p-motion",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
      providers: [MotionStyle, {
        provide: MOTION_INSTANCE,
        useExisting: Motion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Motion
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    mountOnEnter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mountOnEnter",
        required: false
      }]
    }],
    unmountOnLeave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unmountOnLeave",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "safe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["onBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["onEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["onAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["onEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["onBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["onLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["onAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["onLeaveCancelled"]
    }]
  });
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class _MotionDirective extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : {}), {
    alias: "pMotion"
  }));
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "name"
  } : {}), {
    alias: "pMotionName"
  }));
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "type"
  } : {}), {
    alias: "pMotionType"
  }));
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "safe"
  } : {}), {
    alias: "pMotionSafe"
  }));
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    alias: "pMotionDisabled"
  }));
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "appear"
  } : {}), {
    alias: "pMotionAppear"
  }));
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enter"
  } : {}), {
    alias: "pMotionEnter"
  }));
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leave"
  } : {}), {
    alias: "pMotionLeave"
  }));
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "duration"
  } : {}), {
    alias: "pMotionDuration"
  }));
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "hideStrategy"
  } : {}), {
    alias: "pMotionHideStrategy"
  }));
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterFromClass"
  } : {}), {
    alias: "pMotionEnterFromClass"
  }));
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterToClass"
  } : {}), {
    alias: "pMotionEnterToClass"
  }));
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterActiveClass"
  } : {}), {
    alias: "pMotionEnterActiveClass"
  }));
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveFromClass"
  } : {}), {
    alias: "pMotionLeaveFromClass"
  }));
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveToClass"
  } : {}), {
    alias: "pMotionLeaveToClass"
  }));
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveActiveClass"
  } : {}), {
    alias: "pMotionLeaveActiveClass"
  }));
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "options"
  } : {}), {
    alias: "pMotionOptions"
  }));
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output({
    alias: "pMotionOnBeforeEnter"
  });
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output({
    alias: "pMotionOnEnter"
  });
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output({
    alias: "pMotionOnAfterEnter"
  });
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output({
    alias: "pMotionOnEnterCancelled"
  });
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output({
    alias: "pMotionOnBeforeLeave"
  });
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output({
    alias: "pMotionOnLeave"
  });
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output({
    alias: "pMotionOnAfterLeave"
  });
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output({
    alias: "pMotionOnLeaveCancelled"
  });
  /******************** Computed ********************/
  motionOptions = computed(() => {
    const options = this.options() ?? {};
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      if (!this.motion) {
        this.motion = tt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(() => {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        this.motion?.leave()?.then(() => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
          }
        });
      } else {
        applyHiddenStyles(this.$el, hideStrategy);
      }
      this.isInitialMount = false;
    });
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.isInitialMount = true;
  }
  static \u0275fac = function MotionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MotionDirective,
    selectors: [["", "pMotion", ""]],
    inputs: {
      visible: [1, "pMotion", "visible"],
      name: [1, "pMotionName", "name"],
      type: [1, "pMotionType", "type"],
      safe: [1, "pMotionSafe", "safe"],
      disabled: [1, "pMotionDisabled", "disabled"],
      appear: [1, "pMotionAppear", "appear"],
      enter: [1, "pMotionEnter", "enter"],
      leave: [1, "pMotionLeave", "leave"],
      duration: [1, "pMotionDuration", "duration"],
      hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"],
      enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"],
      enterToClass: [1, "pMotionEnterToClass", "enterToClass"],
      enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"],
      leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"],
      leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"],
      leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"],
      options: [1, "pMotionOptions", "options"]
    },
    outputs: {
      onBeforeEnter: "pMotionOnBeforeEnter",
      onEnter: "pMotionOnEnter",
      onAfterEnter: "pMotionOnAfterEnter",
      onEnterCancelled: "pMotionOnEnterCancelled",
      onBeforeLeave: "pMotionOnBeforeLeave",
      onLeave: "pMotionOnLeave",
      onAfterLeave: "pMotionOnAfterLeave",
      onLeaveCancelled: "pMotionOnLeaveCancelled"
    },
    features: [\u0275\u0275ProvidersFeature([MotionStyle, {
      provide: MOTION_DIRECTIVE_INSTANCE,
      useExisting: _MotionDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MotionDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [MotionStyle, {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective
      }]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotion",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionName",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionType",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionSafe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDisabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionAppear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDuration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionHideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionOptions",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["pMotionOnBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["pMotionOnEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["pMotionOnAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["pMotionOnEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["pMotionOnBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["pMotionOnLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["pMotionOnAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["pMotionOnLeaveCancelled"]
    }]
  });
})();
var MotionModule = class _MotionModule {
  static \u0275fac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MotionModule,
    imports: [Motion, MotionDirective],
    exports: [Motion, MotionDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Motion]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
    type: NgModule,
    args: [{
      imports: [Motion, MotionDirective],
      exports: [Motion, MotionDirective]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "required"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "invalid"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : []);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }]
  });
})();

export {
  ChevronDownIcon,
  TimesIcon,
  Motion,
  MotionDirective,
  MotionModule,
  ObjectUtils,
  UniqueComponentId,
  zindexutils,
  transformToBoolean,
  NG_VALUE_ACCESSOR,
  DefaultValueAccessor,
  NG_VALIDATORS,
  Validators,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroup,
  FormControl,
  NgModel,
  ɵNgNoValidate,
  NumberValueAccessor,
  FormControlDirective,
  FormGroupName,
  FormControlName,
  FormGroupDirective,
  RequiredValidator,
  FormBuilder,
  NonNullableFormBuilder,
  FormsModule,
  ReactiveFormsModule,
  BaseModelHolder,
  InputText,
  InputTextModule,
  Tooltip,
  TooltipModule,
  BaseEditableHolder
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v21.0.3
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-6WBFSM47.js.map
